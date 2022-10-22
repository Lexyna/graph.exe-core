import { connector, EngineConnections, executeGraph, extractor } from "graph.exe-core";
import { ProtoEngineNode, ProtoEngineNodeDict, ProtoNodeDict } from "graph.exe-react/dist/cjs/ProtoTypes/ProtoNode";
import { buildEngineNode } from "graph.exe-react/dist/cjs/Utils/utils";
import { addNode, constNode, divNode, mulNode, powerNode, rootNode, rootOpNode, subNode, summationNode, trigNode } from "./ConfigNodes";


export const calculatorConfigNodes: ProtoNodeDict = {
    [rootNode.id]: rootNode,
    [constNode.id]: constNode,
    [addNode.id]: addNode,
    [subNode.id]: subNode,
    [mulNode.id]: mulNode,
    [divNode.id]: divNode,
    [powerNode.id]: powerNode,
    [rootOpNode.id]: rootOpNode,
    [summationNode.id]: summationNode,
    [trigNode.id]: trigNode
}

const calculatorRootEngineNode: ProtoEngineNode = buildEngineNode(rootNode, true);

calculatorRootEngineNode.position.y = 200;
calculatorRootEngineNode.position.x = 700;

export const calculatorRootEngineNodeId: string = calculatorRootEngineNode.id;

const constEngineNode: ProtoEngineNode = buildEngineNode(constNode);

constEngineNode.position.x = 20;
constEngineNode.position.y = 200;

constEngineNode.outputs[0].data.val = 10;

const addEngineNode: ProtoEngineNode = buildEngineNode(addNode);

addEngineNode.position.y = 150;
addEngineNode.position.x = 450;

const mulEngineNode: ProtoEngineNode = buildEngineNode(mulNode);

mulEngineNode.position.y = 270;
mulEngineNode.position.x = 250;

export const calculatorNodes: ProtoEngineNodeDict = {
    [calculatorRootEngineNode.id]: calculatorRootEngineNode,
    [constEngineNode.id]: constEngineNode,
    [addEngineNode.id]: addEngineNode,
    [mulEngineNode.id]: mulEngineNode
}

export const calculatorConnections: EngineConnections = {
    input: {},
    output: {}
}

const rootPorts = extractor(calculatorRootEngineNode);
const constPorts = extractor(constEngineNode);
const addPorts = extractor(addEngineNode);
const mulPorts = extractor(mulEngineNode);

connector(constPorts.outputs[0], addPorts.inputs[1], calculatorConnections);
connector(constPorts.outputs[0], mulPorts.inputs[0], calculatorConnections);
connector(constPorts.outputs[0], mulPorts.inputs[1], calculatorConnections);
connector(mulPorts.outputs[0], addPorts.inputs[0], calculatorConnections);
connector(addPorts.outputs[0], rootPorts.inputs[0], calculatorConnections);


executeGraph(calculatorConfigNodes, calculatorNodes, calculatorConnections, calculatorRootEngineNodeId, false);