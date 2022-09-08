import { connectionFinder } from "../connections/ConnectionFinder";
import { ConnectionDetails, CONNECTION_TYPE, EngineConnections, IoIdInfo } from "../connections/EngineConnections";
import { extractor, NodePorts } from "../connections/Extractor";
import { EngineIO } from "../IO/EngineIO";
import { LogicIO } from "../IO/LogicIO";
import { updateType } from "../nodes/ConfigNode";
import { LogicNode, LogicNodeDict } from "../nodes/LogicNode";

/**
 * Stores information about nodes that call other nodes and keeps track of how many times this node has called other nodes.  
 * Used to decide if a dependency node should be executed or not. 
 */
interface CalleeDict {
    [k: string]: number
}

interface NodeIoInfo {
    inputs: IoIdInfo[],
    outputs: IoIdInfo[]
}
export interface GraphExe {
    nodes: LogicNodeDict, //All executable nodes in the graph 
    connections: EngineConnections, // connections within this graph
    entry: string, // Entry of the graph (if any)
    calleeDict: CalleeDict //Keeps track of which node has called other nodes
    ignoreDict: CalleeDict //Circular dependencies that would trigger an endless loop
    dependencyStack: boolean[] //autoUpdate stack used to decide if a next() action should be executed 
}

interface boolWrapper {
    value: boolean;
}

/**
 * Executes the logic of a node
 * @param node The to be executed node
 * @param isTriggered allows node on stack to be explicitly called via the next() function
 */
export const executeNode = (node: LogicNode, isTriggered: boolean, graph: GraphExe,) => {
    resolveDependency(node, graph);
    if (graph.calleeDict[node.id] && !isTriggered) return;
    node.exe(...node.inputs, ...node.outputs);
    node.computed = true;
}

/**
 *  Resolves all dependencies (input ports) for the passed node based on the connections in the graph
 * @param node Node to resolve dependencies from
 * @param graph Graph to search for connections 
 */
const resolveDependency = (node: LogicNode, graph: GraphExe) => {

    const ports: NodePorts = extractor(node);

    ports.inputs.forEach((con) => {

        //if this dependency would call a circular loop, ignore it
        if (graph.ignoreDict[con.ioId] != undefined)
            return;

        const dependencies: ConnectionDetails[] = connectionFinder(con, graph.connections);

        graph.dependencyStack.push(true);

        dependencies.forEach(dep => {

            //execute the dependencyNode and set it's ioPorts value
            switch (graph.nodes[dep.nodeId].updateType) {
                case updateType.NEVER:
                    if (!graph.nodes[dep.nodeId].computed)
                        executeNode(graph.nodes[dep.nodeId], false, graph);
                    break;
                case updateType.DYNAMIC:
                    if (!graph.nodes[dep.nodeId].computed ||
                        needsUpdate(graph.nodes[dep.nodeId], graph))
                        executeNode(graph.nodes[dep.nodeId], false, graph);
                    break;
                case updateType.ALWAYS:
                    executeNode(graph.nodes[dep.nodeId], false, graph);
                    break;
            }

            //assign the computed value to this input now
            node.inputs[con.index].value = graph.nodes[dep.nodeId].outputs[dep.index].value;

        })

        graph.dependencyStack.pop();

    })
}

/**
 * Trigger all nodes connected with this ioPort
 * @param io OUTPUT Port triggering all connected nodes
 */
export const next = (io: EngineIO<any, any>) => {
    //Function definition expects EngineIO, allowing us to call the function inside node function. But all EngineIO's 
    //are converted to LogicIO's at runtime, allowing us to make this cast 
    const logicIO: LogicIO<any, any> = io as LogicIO<any, any>;

    if (logicIO.details.type !== CONNECTION_TYPE.OUTPUT) return;

    if (logicIO.graph_ref.dependencyStack[logicIO.graph_ref.dependencyStack.length - 1] === true &&
        logicIO.graph_ref.nodes[logicIO.details.nodeId].isTrigger === false) return;

    logicIO.graph_ref.dependencyStack.push(false);

    const toTrigger: ConnectionDetails[] = connectionFinder(logicIO.details, logicIO.graph_ref.connections);

    //Stores the information that this node has called other nodes, preventing it from triggering again as a dependency 
    if (logicIO.graph_ref.calleeDict[logicIO.details.nodeId] !== undefined)
        logicIO.graph_ref.calleeDict[logicIO.details.nodeId]++;
    else
        logicIO.graph_ref.calleeDict[logicIO.details.nodeId] = 1;

    toTrigger.forEach(con => {

        executeNode(logicIO.graph_ref.nodes[con.nodeId], true, logicIO.graph_ref);

    })

    logicIO.graph_ref.dependencyStack.pop();

    //Remove callee information from graph
    logicIO.graph_ref.calleeDict[logicIO.details.nodeId]--;
    if (logicIO.graph_ref.calleeDict[logicIO.details.nodeId] === 0)
        delete logicIO.graph_ref.calleeDict[logicIO.details.nodeId];

}

/**
 * Used to catch circular references in the engine, ignoring them upon dependency resolution 
 * @param connections The connections defining this graph
 * @param entry The entry point for the graph
 * @returns 
 */
export const forwardCycleDetection = (connections: EngineConnections, entry: string): CalleeDict => {

    const ignoreDependencies: CalleeDict = {}
    const completedOutputs: CalleeDict = {}

    const triggeredInput: CalleeDict = {};

    const entryNodeInfo: NodeIoInfo = getIOInfoFromNodeId(entry, connections);

    entryNodeInfo.inputs.forEach(ioInfo => {
        triggeredInput[ioInfo.self.ioId] = 0;
    })


    traverseNodeOutput(entryNodeInfo, connections, ignoreDependencies, triggeredInput, completedOutputs);

    return ignoreDependencies;

}

/**
 * Recursively travels trough all output ports of the node in the connections and keeps track of already traveled paths    
 * @param nodeInfo The node to travel from to other nodes
 * @param connections The EngineConnections defining this graph
 * @param ignoreDependencies All dependencies that will be ignore at execution
 * @param triggeredInput Keeps track of inputs we hav already triggered
 * @param completedOutputs Keeps track of output we have already traversed
 */
const traverseNodeOutput = (nodeInfo: NodeIoInfo, connections: EngineConnections, ignoreDependencies: CalleeDict, triggeredInput: CalleeDict, completedOutputs: CalleeDict) => {

    for (let i = 0; i < nodeInfo.outputs.length; i++) {

        const ioId = nodeInfo.outputs[i].self.ioId;

        //If we've already visited this output, we can ignore it, otherwise add it to the completedDict
        if (completedOutputs[ioId] !== undefined)
            continue;
        else
            completedOutputs[ioId] = 0;

        //Travel to all nodes connected to this output
        const next: ConnectionDetails[] = nodeInfo.outputs[i].connections;

        for (let j = 0; j < next.length; j++) {

            const ioId: string = next[j].ioId;

            //If the ioId is already in the triggeredInput dict, we have found a circular dependency on this port and add this IoId to the ignore Dict
            if (triggeredInput[ioId] !== undefined) {
                ignoreDependencies[ioId] = 0;
                continue;
            }

            //Add the input of the next node we will traverse, so we can catch circular dependencies
            triggeredInput[ioId] = 0;

            //Resolve the next Node
            const nextNodeInfo = getIOInfoFromNodeId(next[j].nodeId, connections);

            traverseNodeOutput(nextNodeInfo, connections, ignoreDependencies, triggeredInput, completedOutputs);

        }

    }

}

/**
 * Used to catch circular references in the dependencies, preventing the graph execution if a circular dependency has been found. 
 * This safety check can be disabled
 * @param connections The connections defining this graph
 * @param entry The entry point for the graph
 * @returns 
 */
export const dependencyCycleDetection = (connections: EngineConnections, entry: string): boolean => {

    const completedInputs: CalleeDict = {}

    const triggeredOutputs: CalleeDict = {};

    const entryNodeInfo: NodeIoInfo = getIOInfoFromNodeId(entry, connections);

    const res: boolWrapper = { value: false }

    traverseNodeInput(entryNodeInfo, connections, triggeredOutputs, completedInputs, res);

    return res.value;
}

/**
 * Recursively travels backwards trough the all input ports of the node in the connections and keeps track of already traveled paths    
 * @param nodeInfo The node to travel from to other nodes
 * @param connections The EngineConnections defining this graph
 * @param triggeredOutputs Keeps track of inputs we hav already triggered
 * @param completedInputs Keeps track of output we have already traversed
 */
const traverseNodeInput = (nodeInfo: NodeIoInfo, connections: EngineConnections, triggeredOutputs: CalleeDict, completedInputs: CalleeDict, foundLoop: boolWrapper) => {

    if (foundLoop.value)
        return;

    for (let i = 0; i < nodeInfo.inputs.length; i++) {

        const ioId = nodeInfo.inputs[i].self.ioId;

        if (completedInputs[ioId] !== undefined)
            continue;
        else
            completedInputs[ioId] = 0;

        const dependencies: ConnectionDetails[] = nodeInfo.inputs[i].connections;

        for (let j = 0; j < dependencies.length; j++) {

            const depIoId: string = dependencies[j].ioId;

            if (triggeredOutputs[depIoId] !== undefined) {
                foundLoop.value = true;
                return;
            }

            triggeredOutputs[depIoId] = 0;

            const dependencyNodeInfo = getIOInfoFromNodeId(dependencies[j].nodeId, connections);

            traverseNodeInput(dependencyNodeInfo, connections, triggeredOutputs, completedInputs, foundLoop);

            delete triggeredOutputs[depIoId];

        }

    }

    return foundLoop;
}

/**
 * Return true if the input parameters for this node are different to it's set values, indicating that a change happened 
 * @param node The node to check if their parameters are still up to date
 * @param graph The graph this node is in
 * @returns 
 */
const needsUpdate = (node: LogicNode, graph: GraphExe): boolean => {

    const ports: NodePorts = extractor(node);

    let needsUpdate: boolean = false;

    for (let i = 0; i < ports.inputs.length; i++) {

        const dependencies: ConnectionDetails[] = connectionFinder(ports.inputs[i], graph.connections);

        if (dependencies.length == 0)
            continue;

        if (node.inputs[i].value !== graph.nodes[dependencies[0].nodeId].outputs[dependencies[0].index].value) {
            needsUpdate = true;
            break;
        }
    }

    return needsUpdate;
}

/**
 * Returns IoIdInfo for all Io ports on this node base ond the connections provided   
 * @param nodeId The node to return all Io port infos from
 * @param connections The EngineConnections used to define this graph
 * @returns 
 */
const getIOInfoFromNodeId = (nodeId: string, connections: EngineConnections): NodeIoInfo => {

    const ingoing: IoIdInfo[] = [];
    const outgoing: IoIdInfo[] = [];

    Object.entries(connections.input).forEach(([key, value]) => {
        if (value.self.nodeId === nodeId)
            ingoing.push(value);
    })

    Object.entries(connections.output).forEach(([key, value]) => {
        if (value.self.nodeId === nodeId)
            outgoing.push(value);
    })

    return {
        inputs: ingoing,
        outputs: outgoing
    };

}