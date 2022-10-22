import { EngineConnections } from "graph.exe-core";
import { buildEngineNode, ProtoEngineNodeDict, ProtoNodeDict } from "graph.exe-react";
import { colorNode, geometryNode, meshNode, rootNode } from "./ConfigNodes";


export const threeConfigDict: ProtoNodeDict = {
    [rootNode.id]: rootNode,
    [colorNode.id]: colorNode,
    [geometryNode.id]: geometryNode,
    [meshNode.id]: meshNode,
}

const threeRootEngineNode = buildEngineNode(rootNode, true);

threeRootEngineNode.position.y = 70;

export const threeRootEngineNodeId: string = threeRootEngineNode.id;

export const threeNodes: ProtoEngineNodeDict = {
    [threeRootEngineNode.id]: threeRootEngineNode,
}

export const threeConnections: EngineConnections = {
    input: {},
    output: {}
}