import { EngineConnections } from "../connections/EngineConnections";
import { ConfigNodeDict } from "../nodes/ConfigNode";
import { EngineNodeDict } from "../nodes/EngineNode";
import { nodeConverter } from "./Converter";
import { executeNode, GraphExe } from "./Core";
import { validator } from "./Validator";

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

    Object.entries(oneTimeGraph.nodes).forEach(([key, node]) => {
        if (node.onInit)
            node.onInit(...node.inputs, ...node.outputs);
    })

    executeNode(oneTimeGraph.nodes[entry], false, oneTimeGraph);

    Object.entries(oneTimeGraph.nodes).forEach(([key, node]) => {
        if (node.onDestroy)
            node.onDestroy(...node.inputs, ...node.outputs)
    })
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
        entry: entry,
        calleeDict: {}
    }

    const graphNodeDict = nodeConverter(otg, config, nodes);

    otg.nodes = graphNodeDict;

    return otg;

}