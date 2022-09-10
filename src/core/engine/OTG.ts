import { EngineConnections } from "../connections/EngineConnections";
import { ConfigNodeDict } from "../nodes/ConfigNode";
import { EngineNodeDict } from "../nodes/EngineNode";
import { nodeConverter } from "./Converter";
import { executeNode, forwardCycleDetection, GraphExe } from "./Core";
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
): boolean => {

    if (!validator(config, nodes, connections, entry))
        return false;

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

    return true;
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
        calleeDict: {},
        ignoreDict: {},
        dependencyStack: []
    }

    const graphNodeDict = nodeConverter(otg, config, nodes);

    otg.ignoreDict = forwardCycleDetection(connections, entry);

    otg.nodes = graphNodeDict;

    return otg;
}