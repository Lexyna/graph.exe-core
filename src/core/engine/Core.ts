import { connectionFinder } from "../connections/ConnectionFinder";
import { ConnectionDetails, CONNECTION_TYPE, EngineConnections, IoIdInfo } from "../connections/EngineConnections";
import { extractor, NodePorts } from "../connections/Extractor";
import { EngineIO } from "../IO/EngineIO";
import { LogicIO } from "../IO/LogicIO";
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
    nodes: LogicNodeDict,
    connections: EngineConnections,
    entry: string,
    calleeDict: CalleeDict
}

interface boolWrapper {
    value: boolean;
}

/**
 * Executes the logic of a node
 * @param node The to be executed node
 * @param isTriggered allows node on stack to be explicitly called vio the next() function
 */
export const executeNode = (node: LogicNode, isTriggered: boolean, graph: GraphExe,) => {
    resolveDependency(node, graph);
    if (graph.calleeDict[node.id] && !isTriggered) return;
    node.exe(...node.inputs, ...node.outputs);
}

/**
 *  Resolves all dependencies (input ports) for this node based on the connections
 * @param node 
 * @param graph 
 */
const resolveDependency = (node: LogicNode, graph: GraphExe) => {

    const ports: NodePorts = extractor(node);

    ports.inputs.forEach((con) => {

        const dependencies: ConnectionDetails[] = connectionFinder(con, graph.connections);

        dependencies.forEach(dep => {

            //execute the dependencyNode and set it's ioPorts value
            executeNode(graph.nodes[dep.nodeId], false, graph);

            //assign the computed value to this input now
            node.inputs[con.index].value = graph.nodes[dep.nodeId].outputs[dep.index].value;

        })

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

    const toTrigger: ConnectionDetails[] = connectionFinder(logicIO.details, logicIO.graph_ref.connections);

    //Stores the information that this node has called other nodes, preventing it from triggering again as a dependency 
    if (logicIO.graph_ref.calleeDict[logicIO.details.nodeId] !== undefined)
        logicIO.graph_ref.calleeDict[logicIO.details.nodeId]++;
    else
        logicIO.graph_ref.calleeDict[logicIO.details.nodeId] = 1;

    toTrigger.forEach(con => {

        executeNode(logicIO.graph_ref.nodes[con.nodeId], true, logicIO.graph_ref);

    })

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
export const forwardCirclesDetection = (connections: EngineConnections, entry: string): CalleeDict => {

    const ignoreDependencies: CalleeDict = {}
    const completedOutputs: CalleeDict = {}

    const triggeredInput: CalleeDict = {};

    const entryNodeInfo: NodeIoInfo = getIOInfoFromNodeId(entry, connections);

    traverseNodeOutput(entryNodeInfo, connections, ignoreDependencies, triggeredInput, completedOutputs);

    return ignoreDependencies;

}

/**
 * Recursively travels trough the all output ports of the node in the connections and keeps track of already traveled paths    
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
export const dependencyCirclesDetection = (connections: EngineConnections, entry: string): boolean => {

    const completedOutputs: CalleeDict = {}

    const triggeredInput: CalleeDict = {};

    const entryNodeInfo: NodeIoInfo = getIOInfoFromNodeId(entry, connections);

    const res: boolWrapper = { value: false }

    traverseNodeInput(entryNodeInfo, connections, triggeredInput, completedOutputs, res);

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

        }

    }

    return foundLoop;
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