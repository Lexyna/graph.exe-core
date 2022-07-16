import { EngineNode, EngineNodeDict } from "../../../src/core/nodes/EngineNode";
import { addNode, constNode, divNode, mulNode, rootNode, signalNode, subNode } from "./ConfigNodes";

export const rootEngineNode: EngineNode = {
    id: "root",
    configId: "rootNode",
    autoUpdate: false,
    inputs: rootNode.inputs.map(io => { return { ...io } }),
    outputs: rootNode.outputs.map(io => { return { ...io } })
}

export const constZeroEngineNode: EngineNode = {
    id: "constZeroEngineNode",
    configId: "constNode",
    autoUpdate: false,
    inputs: constNode.inputs.map(io => { return { ...io } }),
    outputs: constNode.outputs.map(io => { return { ...io } })
}

export const constOneEngineNode: EngineNode = {
    id: "constOneEngineNode",
    configId: "constNode",
    autoUpdate: false,
    inputs: constNode.inputs.map(io => { return { ...io } }),
    outputs: constNode.outputs.map(io => { return { ...io } })
}

export const constTwoEngineNode: EngineNode = {
    id: "constTwoEngineNode",
    configId: "constNode",
    autoUpdate: false,
    inputs: constNode.inputs.map(io => { return { ...io } }),
    outputs: constNode.outputs.map(io => { return { ...io } })
}

export const constThreeEngineNode: EngineNode = {
    id: "constThreeEngineNode",
    configId: "constNode",
    autoUpdate: false,
    inputs: constNode.inputs.map(io => { return { ...io } }),
    outputs: constNode.outputs.map(io => { return { ...io } })
}

export const constFourEngineNode: EngineNode = {
    id: "constFourEngineNode",
    configId: "constNode",
    autoUpdate: false,
    inputs: constNode.inputs.map(io => { return { ...io } }),
    outputs: constNode.outputs.map(io => { return { ...io } })
}

export const constFiveEngineNode: EngineNode = {
    id: "constFiveEngineNode",
    configId: "constNode",
    autoUpdate: false,
    inputs: constNode.inputs.map(io => { return { ...io } }),
    outputs: constNode.outputs.map(io => { return { ...io } })
}

export const addEngineNode1: EngineNode = {
    id: "addEngineNode1",
    configId: "addNode",
    autoUpdate: false,
    inputs: addNode.inputs.map(io => { return { ...io } }),
    outputs: addNode.outputs.map(io => { return { ...io } })
}

export const addEngineNode2: EngineNode = {
    id: "addEngineNode2",
    configId: "addNode",
    autoUpdate: false,
    inputs: addNode.inputs.map(io => { return { ...io } }),
    outputs: addNode.outputs.map(io => { return { ...io } })
}

export const subEngineNode1: EngineNode = {
    id: "subEngineNode1",
    configId: "addNode",
    autoUpdate: false,
    inputs: subNode.inputs.map(io => { return { ...io } }),
    outputs: subNode.outputs.map(io => { return { ...io } })
}

export const subEngineNode2: EngineNode = {
    id: "subEngineNode2",
    configId: "subNode",
    autoUpdate: false,
    inputs: subNode.inputs.map(io => { return { ...io } }),
    outputs: subNode.outputs.map(io => { return { ...io } })
}

export const mulEngineNode1: EngineNode = {
    id: "mulEngineNode1",
    configId: "mulNode",
    autoUpdate: false,
    inputs: mulNode.inputs.map(io => { return { ...io } }),
    outputs: mulNode.outputs.map(io => { return { ...io } })
}

export const mulEngineNode2: EngineNode = {
    id: "mulEngineNode2",
    configId: "mulNode",
    autoUpdate: false,
    inputs: mulNode.inputs.map(io => { return { ...io } }),
    outputs: mulNode.outputs.map(io => { return { ...io } })
}

export const divEngineNode1: EngineNode = {
    id: "divEngineNode1",
    configId: "mulNode",
    autoUpdate: false,
    inputs: divNode.inputs.map(io => { return { ...io } }),
    outputs: divNode.outputs.map(io => { return { ...io } })
}

export const divEngineNode2: EngineNode = {
    id: "divEngineNode2",
    configId: "mulNode",
    autoUpdate: false,
    inputs: divNode.inputs.map(io => { return { ...io } }),
    outputs: divNode.outputs.map(io => { return { ...io } })
}

export const signalEngineNode1: EngineNode = {
    id: "signalEngineNode1",
    configId: "signalNode",
    autoUpdate: false,
    inputs: signalNode.inputs.map(io => { return { ...io } }),
    outputs: signalNode.outputs.map(io => { return { ...io } })
}

export const signalEngineNode2: EngineNode = {
    id: "signalEngineNode2",
    configId: "signalNode",
    autoUpdate: false,
    inputs: signalNode.inputs.map(io => { return { ...io } }),
    outputs: signalNode.outputs.map(io => { return { ...io } })
}

export const signalEngineNode3: EngineNode = {
    id: "signalEngineNode3",
    configId: "signalNode",
    autoUpdate: false,
    inputs: signalNode.inputs.map(io => { return { ...io } }),
    outputs: signalNode.outputs.map(io => { return { ...io } })
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
    "divEngineNode2": divEngineNode2,
    "signalEngineNode1": signalEngineNode1,
    "signalEngineNode2": signalEngineNode2,
    "signalEngineNode3": signalEngineNode3
}

export const initializeNodeValues = () => {
    constZeroEngineNode.outputs[0].value = 0;
    constOneEngineNode.outputs[0].value = 1;
    constTwoEngineNode.outputs[0].value = 2;
    constThreeEngineNode.outputs[0].value = 3;
    constFourEngineNode.outputs[0].value = 4;
    constFiveEngineNode.outputs[0].value = 5;
}