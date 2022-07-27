import { connectionFinder } from "../connections/ConnectionFinder";
import { ConnectionDetails, CONNECTION_TYPE, EngineConnections, IngoingConnections, OutgoingConnections } from "../connections/EngineConnections";
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

export interface GraphExe {
    nodes: LogicNodeDict,
    connections: EngineConnections,
    entry: string,
    calleeDict: CalleeDict
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
    if (logicIO.graph_ref.calleeDict[logicIO.details.nodeId])
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
export const detectCircles = (connections: EngineConnections, entry: string): CalleeDict => {

    const ignoreDependencies: CalleeDict = {}
    const completedOutputs: CalleeDict = {}

    const stack: string[] = [];



    return ignoreDependencies;

}

const getIOConnectionFromNode = (nodeId: string, connections: EngineConnections) => {

    const ingoing: IngoingConnections[] = [];
    const outgoing: OutgoingConnections[] = [];

    Object.entries(connections.input).forEach(([key, value]) => {
        if (value.self.nodeId === nodeId) { }
        //ingoing.push();
    })

}