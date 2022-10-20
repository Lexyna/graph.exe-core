import { EngineConnections } from "graph.exe-core";
import { ProtoEngineNode, ProtoEngineNodeDict, ProtoNodeDict } from "graph.exe-react/dist/cjs/ProtoTypes/ProtoNode";
import { buildEngineNode } from "graph.exe-react/dist/cjs/Utils/utils";
import { addNode, constNode, divNode, mulNode, rootNode, subNode } from "./ConfigNodes";


export const calculatorConfigNode: ProtoNodeDict = {
    [rootNode.id]: rootNode,
    [constNode.id]: constNode,
    [addNode.id]: addNode,
    [subNode.id]: subNode,
    [mulNode.id]: mulNode,
    [divNode.id]: divNode
}

const calculatorRootEngineNode: ProtoEngineNode = buildEngineNode(rootNode, true);

calculatorRootEngineNode.position.y = 70;

export const calculatorRootEngineNodeId: string = calculatorRootEngineNode.id;

export const calculatorNodes: ProtoEngineNodeDict = {
    [calculatorRootEngineNode.id]: calculatorRootEngineNode
}

export const calculatorConnections: EngineConnections = {
    input: {},
    output: {}
}