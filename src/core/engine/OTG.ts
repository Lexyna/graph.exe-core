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
 * @param preservationMode
 * @returns 
 */
export const executeGraph = (
    config: ConfigNodeDict,
    nodes: EngineNodeDict,
    connections: EngineConnections,
    entry: string,
    preservationMode: boolean = true
): [boolean, string] => {

    const [executable, validatorMsg] = validator(config, nodes, connections, entry);

    if (!executable)
        return [false, validatorMsg];

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

    if (!preservationMode)
        Object.entries(oneTimeGraph.nodes).forEach(([key, value]) => {
            if (!(key in nodes)) return;
            value.inputs.forEach((io, index) => {
                nodes[key].inputs[index].value = io.value;
                nodes[key].inputs[index].data = io.data;
            });
            value.outputs.forEach((io, index) => {
                nodes[key].outputs[index].value = io.value;
                nodes[key].outputs[index].data = io.data;
            });
        })

    return [true, validatorMsg];
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