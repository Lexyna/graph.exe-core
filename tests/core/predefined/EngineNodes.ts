import { EngineNode, EngineNodeDict } from "../../../src/core/nodes/EngineNode";
import { addNode, constNode, divNode, forNode, ifNode, incrementTestValueNode, logNode, mulNode, numberToStringConverterNode, rootNode, signalNode, starterNode, subNode, textCombineNode, textNode } from "./ConfigNodes";

export const rootEngineNode: EngineNode = {
    id: "root",
    configId: "rootNode",
    alwaysUpdate: false,
    inputs: rootNode.inputs.map(io => { return { ...io } }),
    outputs: rootNode.outputs.map(io => { return { ...io } })
}

export const starterEngineNode: EngineNode = {
    id: "starterEngineNode",
    configId: "starterNode",
    alwaysUpdate: false,
    inputs: starterNode.inputs.map(io => { return { ...io } }),
    outputs: starterNode.outputs.map(io => { return { ...io } })
}

export const incrementTestValueEngineNode: EngineNode = {
    id: "incrementTestValueEngineNode",
    configId: "incrementTestValueNode",
    alwaysUpdate: false,
    inputs: incrementTestValueNode.inputs.map(io => { return { ...io } }),
    outputs: incrementTestValueNode.outputs.map(io => { return { ...io } })
}

export const incrementTestValueEngineNode2: EngineNode = {
    id: "incrementTestValueEngineNode2",
    configId: "incrementTestValueNode",
    alwaysUpdate: false,
    inputs: incrementTestValueNode.inputs.map(io => { return { ...io } }),
    outputs: incrementTestValueNode.outputs.map(io => { return { ...io } })
}

export const logEngineNode1: EngineNode = {
    id: "logEngineNode1",
    configId: "logNode",
    alwaysUpdate: false,
    inputs: logNode.inputs.map(io => { return { ...io } }),
    outputs: logNode.outputs.map(io => { return { ...io } })
}

export const logEngineNode2: EngineNode = {
    id: "logEngineNode2",
    configId: "logNode",
    alwaysUpdate: false,
    inputs: logNode.inputs.map(io => { return { ...io } }),
    outputs: logNode.outputs.map(io => { return { ...io } })
}

export const forEngineNode1: EngineNode = {
    id: "forEngineNode1",
    configId: "forNode",
    alwaysUpdate: false,
    inputs: forNode.inputs.map(io => { return { ...io } }),
    outputs: forNode.outputs.map(io => { return { ...io } })
}

export const forEngineNodeTrigger: EngineNode = {
    id: "forEngineNodeTrigger",
    configId: "forNodeTrigger",
    alwaysUpdate: true,
    inputs: forNode.inputs.map(io => { return { ...io } }),
    outputs: forNode.outputs.map(io => { return { ...io } })
}

export const ifEngineNode: EngineNode = {
    id: "ifEngineNode",
    configId: "ifNode",
    alwaysUpdate: false,
    inputs: ifNode.inputs.map(io => { return { ...io } }),
    outputs: ifNode.outputs.map(io => { return { ...io } })
}

export const ifEngineNode2: EngineNode = {
    id: "ifEngineNode2",
    configId: "ifNode",
    alwaysUpdate: false,
    inputs: ifNode.inputs.map(io => { return { ...io } }),
    outputs: ifNode.outputs.map(io => { return { ...io } })
}


export const numberToStringConverterEngineNode1: EngineNode = {
    id: "numberToStringConverterEngineNode1",
    configId: "numberToStringConverterNode",
    alwaysUpdate: false,
    inputs: numberToStringConverterNode.inputs.map(io => { return { ...io } }),
    outputs: numberToStringConverterNode.outputs.map(io => { return { ...io } })
}

export const textHelloEngineNode: EngineNode = {
    id: "textHelloEngineNode",
    configId: "textNode",
    alwaysUpdate: false,
    inputs: textNode.inputs.map(io => { return { ...io } }),
    outputs: textNode.outputs.map(io => { return { ...io } })
}

export const textWorldEngineNode: EngineNode = {
    id: "textWorldEngineNode",
    configId: "textNode",
    alwaysUpdate: false,
    inputs: textNode.inputs.map(io => { return { ...io } }),
    outputs: textNode.outputs.map(io => { return { ...io } })
}

export const textCombineEngineNode1: EngineNode = {
    id: "textCombineEngineNode1",
    configId: "textCombineNode",
    alwaysUpdate: false,
    inputs: textCombineNode.inputs.map(io => { return { ...io } }),
    outputs: textCombineNode.outputs.map(io => { return { ...io } })
}


export const constZeroEngineNode: EngineNode = {
    id: "constZeroEngineNode",
    configId: "constNode",
    alwaysUpdate: false,
    inputs: constNode.inputs.map(io => { return { ...io } }),
    outputs: constNode.outputs.map(io => { return { ...io } })
}

export const constOneEngineNode: EngineNode = {
    id: "constOneEngineNode",
    configId: "constNode",
    alwaysUpdate: false,
    inputs: constNode.inputs.map(io => { return { ...io } }),
    outputs: constNode.outputs.map(io => { return { ...io } })
}

export const constTwoEngineNode: EngineNode = {
    id: "constTwoEngineNode",
    configId: "constNode",
    alwaysUpdate: false,
    inputs: constNode.inputs.map(io => { return { ...io } }),
    outputs: constNode.outputs.map(io => { return { ...io } })
}

export const constThreeEngineNode: EngineNode = {
    id: "constThreeEngineNode",
    configId: "constNode",
    alwaysUpdate: false,
    inputs: constNode.inputs.map(io => { return { ...io } }),
    outputs: constNode.outputs.map(io => { return { ...io } })
}

export const constFourEngineNode: EngineNode = {
    id: "constFourEngineNode",
    configId: "constNode",
    alwaysUpdate: false,
    inputs: constNode.inputs.map(io => { return { ...io } }),
    outputs: constNode.outputs.map(io => { return { ...io } })
}

export const constFiveEngineNode: EngineNode = {
    id: "constFiveEngineNode",
    configId: "constNode",
    alwaysUpdate: false,
    inputs: constNode.inputs.map(io => { return { ...io } }),
    outputs: constNode.outputs.map(io => { return { ...io } })
}

export const addEngineNode1: EngineNode = {
    id: "addEngineNode1",
    configId: "addNode",
    alwaysUpdate: false,
    inputs: addNode.inputs.map(io => { return { ...io } }),
    outputs: addNode.outputs.map(io => { return { ...io } })
}

export const addEngineNode2: EngineNode = {
    id: "addEngineNode2",
    configId: "addNode",
    alwaysUpdate: false,
    inputs: addNode.inputs.map(io => { return { ...io } }),
    outputs: addNode.outputs.map(io => { return { ...io } })
}

export const subEngineNode1: EngineNode = {
    id: "subEngineNode1",
    configId: "subNode",
    alwaysUpdate: false,
    inputs: subNode.inputs.map(io => { return { ...io } }),
    outputs: subNode.outputs.map(io => { return { ...io } })
}

export const subEngineNode2: EngineNode = {
    id: "subEngineNode2",
    configId: "subNode",
    alwaysUpdate: false,
    inputs: subNode.inputs.map(io => { return { ...io } }),
    outputs: subNode.outputs.map(io => { return { ...io } })
}

export const mulEngineNode1: EngineNode = {
    id: "mulEngineNode1",
    configId: "mulNode",
    alwaysUpdate: false,
    inputs: mulNode.inputs.map(io => { return { ...io } }),
    outputs: mulNode.outputs.map(io => { return { ...io } })
}

export const mulEngineNode2: EngineNode = {
    id: "mulEngineNode2",
    configId: "mulNode",
    alwaysUpdate: false,
    inputs: mulNode.inputs.map(io => { return { ...io } }),
    outputs: mulNode.outputs.map(io => { return { ...io } })
}

export const divEngineNode1: EngineNode = {
    id: "divEngineNode1",
    configId: "divNode",
    alwaysUpdate: false,
    inputs: divNode.inputs.map(io => { return { ...io } }),
    outputs: divNode.outputs.map(io => { return { ...io } })
}

export const divEngineNode2: EngineNode = {
    id: "divEngineNode2",
    configId: "divNode",
    alwaysUpdate: false,
    inputs: divNode.inputs.map(io => { return { ...io } }),
    outputs: divNode.outputs.map(io => { return { ...io } })
}

export const signalEngineNode1: EngineNode = {
    id: "signalEngineNode1",
    configId: "signalNode",
    alwaysUpdate: false,
    inputs: signalNode.inputs.map(io => { return { ...io } }),
    outputs: signalNode.outputs.map(io => { return { ...io } })
}

export const signalEngineNode2: EngineNode = {
    id: "signalEngineNode2",
    configId: "signalNode",
    alwaysUpdate: false,
    inputs: signalNode.inputs.map(io => { return { ...io } }),
    outputs: signalNode.outputs.map(io => { return { ...io } })
}

export const signalEngineNode3: EngineNode = {
    id: "signalEngineNode3",
    configId: "signalNode",
    alwaysUpdate: false,
    inputs: signalNode.inputs.map(io => { return { ...io } }),
    outputs: signalNode.outputs.map(io => { return { ...io } })
}

export const engineNodeDict: EngineNodeDict = {
    "root": rootEngineNode,
    "starterEngineNode": starterEngineNode,
    "textHelloEngineNode": textHelloEngineNode,
    "textWorldEngineNode": textWorldEngineNode,
    "textCombineEngineNode1": textCombineEngineNode1,
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
    "signalEngineNode3": signalEngineNode3,
    "logEngineNode1": logEngineNode1,
    "logEngineNode2": logEngineNode2,
    "forEngineNode1": forEngineNode1,
    "forEngineNodeTrigger": forEngineNodeTrigger,
    "incrementTestValueEngineNode": incrementTestValueEngineNode,
    "incrementTestValueEngineNode2": incrementTestValueEngineNode2,
    "numberToStringConverterEngineNode1": numberToStringConverterEngineNode1,
    "ifEngineNode": ifEngineNode,
    "ifEngineNode2": ifEngineNode2
}

export const initializeNodeValues = () => {
    constZeroEngineNode.outputs[0].value = 0;
    constOneEngineNode.outputs[0].value = 1;
    constTwoEngineNode.outputs[0].value = 2;
    constThreeEngineNode.outputs[0].value = 3;
    constFourEngineNode.outputs[0].value = 4;
    constFiveEngineNode.outputs[0].value = 5;
    textHelloEngineNode.outputs[0].value = "Hello ";
    textWorldEngineNode.outputs[0].value = "World"
}