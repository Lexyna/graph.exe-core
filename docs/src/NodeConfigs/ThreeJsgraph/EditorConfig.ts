import { connector, EngineConnections, extractor } from "graph.exe-core";
import { buildEngineNode, ProtoEngineNode, ProtoEngineNodeDict, ProtoNodeDict } from "graph.exe-react";
import { colorNode, geometryNode, meshNode, rootNode } from "./ConfigNodes";


export const threeConfigDict: ProtoNodeDict = {
    [rootNode.id]: rootNode,
    [colorNode.id]: colorNode,
    [geometryNode.id]: geometryNode,
    [meshNode.id]: meshNode,
}

const threeRootEngineNode = buildEngineNode(rootNode, true);

threeRootEngineNode.position.y = 200;
threeRootEngineNode.position.x = 800;

export const threeRootEngineNodeId: string = threeRootEngineNode.id;

const meshEngineNode: ProtoEngineNode = buildEngineNode(meshNode);

meshEngineNode.position.y = 150;
meshEngineNode.position.x = 600;

const colorEngineNode: ProtoEngineNode = buildEngineNode(colorNode);

colorEngineNode.position.y = 120;
colorEngineNode.position.x = 400;

const geometryEngineNode: ProtoEngineNode = buildEngineNode(geometryNode);

geometryEngineNode.position.x = 400;
geometryEngineNode.position.y = 280;

export const threeNodes: ProtoEngineNodeDict = {
    [threeRootEngineNode.id]: threeRootEngineNode,
    [meshEngineNode.id]: meshEngineNode,
    [colorEngineNode.id]: colorEngineNode,
    [geometryEngineNode.id]: geometryEngineNode
}

export const threeConnections: EngineConnections = {
    input: {},
    output: {}
}

const previewPorts = extractor(threeRootEngineNode);
const meshPorts = extractor(meshEngineNode);
const colorPorts = extractor(colorEngineNode);
const geometryPorts = extractor(geometryEngineNode);

connector(meshPorts.outputs[0], previewPorts.inputs[0], threeConnections);
connector(colorPorts.outputs[0], meshPorts.inputs[0], threeConnections);
connector(geometryPorts.outputs[0], meshPorts.inputs[1], threeConnections);