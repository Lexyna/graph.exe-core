import { EngineNode, EngineNodeDict } from "../../../src/core/nodes/EngineNode";
import { addNode, constNode, divNode, mulNode, rootNode, subNode } from "./ConfigNodes";

export const rootEngineNode: EngineNode = {
    id: "root",
    configId: "rootNode",
    autoUpdate: false,
    inputs: [...rootNode.inputs],
    outputs: [...rootNode.outputs]
}

export const constZeroEngineNode: EngineNode = {
    id: "constZeroEngineNode",
    configId: "constNode",
    autoUpdate: false,
    inputs: [...constNode.inputs],
    outputs: [...constNode.outputs]
}

export const constOneEngineNode: EngineNode = {
    id: "constOneEngineNode",
    configId: "constNode",
    autoUpdate: false,
    inputs: [...constNode.inputs],
    outputs: [...constNode.outputs]
}

export const constTwoEngineNode: EngineNode = {
    id: "constTwoEngineNode",
    configId: "constNode",
    autoUpdate: false,
    inputs: [...constNode.inputs],
    outputs: [...constNode.outputs]
}

export const constThreeEngineNode: EngineNode = {
    id: "constThreeEngineNode",
    configId: "constNode",
    autoUpdate: false,
    inputs: [...constNode.inputs],
    outputs: [...constNode.outputs]
}

export const constFourEngineNode: EngineNode = {
    id: "constFourEngineNode",
    configId: "constNode",
    autoUpdate: false,
    inputs: [...constNode.inputs],
    outputs: [...constNode.outputs]
}

export const constFiveEngineNode: EngineNode = {
    id: "constFiveEngineNode",
    configId: "constNode",
    autoUpdate: false,
    inputs: [...constNode.inputs],
    outputs: [...constNode.outputs]
}

export const addEngineNode1: EngineNode = {
    id: "addEngineNode1",
    configId: "addNode",
    autoUpdate: false,
    inputs: [...addNode.inputs],
    outputs: [...addNode.outputs]
}

export const addEngineNode2: EngineNode = {
    id: "addEngineNode2",
    configId: "addNode",
    autoUpdate: false,
    inputs: [...addNode.inputs],
    outputs: [...addNode.outputs]
}

export const subEngineNode1: EngineNode = {
    id: "subEngineNode1",
    configId: "addNode",
    autoUpdate: false,
    inputs: [...subNode.inputs],
    outputs: [...subNode.outputs]
}

export const subEngineNode2: EngineNode = {
    id: "subEngineNode2",
    configId: "subNode",
    autoUpdate: false,
    inputs: [...subNode.inputs],
    outputs: [...subNode.outputs]
}

export const mulEngineNode1: EngineNode = {
    id: "mulEngineNode1",
    configId: "mulNode",
    autoUpdate: false,
    inputs: [...mulNode.inputs],
    outputs: [...mulNode.outputs]
}

export const mulEngineNode2: EngineNode = {
    id: "mulEngineNode2",
    configId: "mulNode",
    autoUpdate: false,
    inputs: [...mulNode.inputs],
    outputs: [...mulNode.outputs]
}

export const divEngineNode1: EngineNode = {
    id: "divEngineNode1",
    configId: "mulNode",
    autoUpdate: false,
    inputs: [...divNode.inputs],
    outputs: [...divNode.outputs]
}

export const divEngineNode2: EngineNode = {
    id: "divEngineNode2",
    configId: "mulNode",
    autoUpdate: false,
    inputs: [...divNode.inputs],
    outputs: [...divNode.outputs]
}

export const engineNodeDict: EngineNodeDict = {
    "root": rootEngineNode,
    "constZeroEngineNode": constZeroEngineNode,
    "constOneEngineNode": constOneEngineNode,
    "constTwoEngineNode": constTwoEngineNode,
    "constThreeEngineNode": constThreeEngineNode,
    "constFourEngineNode": constFourEngineNode,
    "constFiveEngineNode": constFiveEngineNode,
    "addEngineNode1": addEngineNode1,
    "addEngineNode2": addEngineNode2,
    "subEngineNode1": subEngineNode1,
    "subEngineNode2": subEngineNode2,
    "mulEngineNode1": mulEngineNode1,
    "mulEngineNode2": mulEngineNode2,
    "divEngineNode1": divEngineNode1,
    "divEngineNode2": divEngineNode2
}

export const initializeNodeValues = () => {
    constZeroEngineNode.outputs[0].value = 0;
    constOneEngineNode.outputs[0].value = 1;
    constTwoEngineNode.outputs[0].value = 2;
    constThreeEngineNode.outputs[0].value = 3;
    constFourEngineNode.outputs[0].value = 4;
    constFiveEngineNode.outputs[0].value = 5;
}