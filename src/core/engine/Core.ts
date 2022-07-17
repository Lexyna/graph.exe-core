import { connectionFinder } from "../connections/ConnectionFinder";
import { ConnectionDetails, CONNECTION_TYPE, EngineConnections } from "../connections/EngineConnections";
import { extractor, NodePorts } from "../connections/Extractor";
import { EngineIO } from "../IO/EngineIO";
import { LogicIO } from "../IO/LogicIO";
import { LogicNode, LogicNodeDict } from "../nodes/LogicNode";

export interface GraphExe {
    nodes: LogicNodeDict,
    connections: EngineConnections,
    entry: string
}

/**
 * Executes the logic of a node
 * @param node The to be executed node
 * @param isDependency Handles of output nodes should be fired form this node 
 */
export const executeNode = (node: LogicNode, isDependency: boolean, graph: GraphExe,) => {
    resolveDependency(node, graph);
    if (isDependency && !node.autoUpdate) return;
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
            executeNode(graph.nodes[dep.nodeId], true, graph);

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

    toTrigger.forEach(con => {

        executeNode(logicIO.graph_ref.nodes[con.nodeId], false, logicIO.graph_ref);

    })

}