import { EngineConnections } from "../connections/EngineConnections";
import { ConfigNodeDict } from "../nodes/ConfigNode";
import { EngineNodeDict } from "../nodes/EngineNode";
import { nodeConverter } from "./Converter";
import { GraphExe } from "./Core";
import { validator } from "./Validator";


interface InMemoryGraphDict {
    [key: string]: GraphExe
}

const inMemoryGraphDictionary: InMemoryGraphDict = {}

/**
 * Create a inMemoryGraph that won't be executed after initialization and lives in memory until it is deleted
 * @param config 
 * @param nodes 
 * @param connections 
 * @param graphName 
 * @returns 
 */
export const createGraph = (
    config: ConfigNodeDict,
    nodes: EngineNodeDict,
    connections: EngineConnections,
    graphName: string
): void => {

    if (inMemoryGraphDictionary[graphName])
        return;

    if (!validator(config, nodes, connections, "", true))
        return;

    const inMemoryGraph = createIMG(config, nodes, connections);

    Object.entries(inMemoryGraph.nodes).forEach(([key, node]) => {
        if (node.onInit)
            node.onInit(...node.inputs, ...node.outputs);
    })

    inMemoryGraphDictionary[graphName] = inMemoryGraph;

}

/**
 * Deletes the inMemoryGraph assigned to the specific key and triggers all onDestroy properties
 * @param graphName The name of the inMemoryGraph to delete
 */
export const deleteGraph = (graphName: string): void => {
    if (inMemoryGraphDictionary[graphName]) {

        Object.entries(inMemoryGraphDictionary[graphName].nodes).forEach(([key, node]) => {
            if (node.onDestroy)
                node.onDestroy(...node.inputs, ...node.outputs)
        })

        delete inMemoryGraphDictionary[graphName];
    }
}

const createIMG = (
    config: ConfigNodeDict,
    nodes: EngineNodeDict,
    connections: EngineConnections
): GraphExe => {

    const inMemoryGraph: GraphExe = {
        nodes: {},
        connections: Object.assign({}, connections),
        entry: "",
        calleeDict: {}
    }

    const graphNodeDicts = nodeConverter(inMemoryGraph, config, nodes);

    inMemoryGraph.nodes = graphNodeDicts;

    return inMemoryGraph;
}