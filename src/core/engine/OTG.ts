import { connectionFinder } from "../connections/ConnectionFinder";
import { ConnectionDetails, EngineConnections } from "../connections/EngineConnections";
import { extractor, NodePorts } from "../connections/Extractor";
import { ConfigNodeDict } from "../nodes/ConfigNode";
import { EngineNodeDict } from "../nodes/EngineNode";
import { LogicNode, LogicNodeDict } from "../nodes/LogicNode";
import { nodeConverter } from "./Converter";
import { validator } from "./Validator";

export interface GraphExe {
    nodes: LogicNodeDict,
    connections: EngineConnections,
    entry: string
}

/**
 *  One time graph will be triggered once and destroyed after successful execution 
 * @param config 
 * @param nodes 
 * @param connections 
 * @param entry 
 * @returns 
 */
export const executeGraph = (
    config: ConfigNodeDict,
    nodes: EngineNodeDict,
    connections: EngineConnections,
    entry: string,
): void => {

    if (!validator(config, nodes, connections, entry))
        return;

    const oneTimeGraph: GraphExe = createOTG(config, nodes, connections, entry);

    executeNode(oneTimeGraph.nodes[entry], false, oneTimeGraph);
}

/**
 *  Resolves all dependencies (input ports) for this node based on the connections
 * @param node 
 * @param otg 
 */
const resolveDependency = (node: LogicNode, otg: GraphExe) => {

    const ports: NodePorts = extractor(node);

    ports.inputs.forEach((con) => {

        const dependencies: ConnectionDetails[] = connectionFinder(con, otg.connections);

        dependencies.forEach(dep => {

            //execute the dependencyNode and set it's ioPorts value
            executeNode(otg.nodes[dep.nodeId], true, otg);

            //assign the computed value to this input now
            node.inputs[con.index].value = otg.nodes[dep.nodeId].outputs[dep.index].value;

        })

    })

}

/**
 * Executes the logic of a node
 * @param node The to be executed node
 * @param isDependency Handles of output nodes should be fired form this node 
 */
const executeNode = (node: LogicNode, isDependency: boolean, otg: GraphExe,) => {
    resolveDependency(node, otg);
    if (isDependency && !node.autoUpdate) return;
    node.exe(...node.inputs, ...node.outputs);
}

const createOTG = (
    config: ConfigNodeDict,
    nodes: EngineNodeDict,
    connections: EngineConnections,
    entry: string,
): GraphExe => {

    const otg: GraphExe = {
        nodes: {},
        connections: Object.assign({}, connections),
        entry: entry
    }

    const graphNodeDict = nodeConverter(otg, config, nodes);

    otg.nodes = graphNodeDict;

    return otg;

}