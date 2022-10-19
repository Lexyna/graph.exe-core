import { updateType } from "../../../src/core/nodes/ConfigNode";
import { EngineNode, EngineNodeDict } from "../../../src/core/nodes/EngineNode";
import { addNode, constNode, destroyFuncNode, divNode, forNode, ifNode, incrementTestValueNode, initDestroyFuncNode, initFuncNode, keyListenerNode, logIdNode, logNode, mulNode, multiConAddNode, numberToStringConverterNode, rootNode, signalNode, starterNode, subNode, textCombineNode, textNode, updateTypeALWAYSNode, updateTypeDYNAMICNode, updateTypeNEVERNode, wrongNextNode } from "./ConfigNodes";

export const rootEngineNode: EngineNode = {
    id: "root",
    configId: "rootNode",
    updateType: updateType.NEVER,
    inputs: rootNode.inputs.map(io => { return { ...io } }),
    outputs: rootNode.outputs.map(io => { return { ...io } })
}

export const starterEngineNode: EngineNode = {
    id: "starterEngineNode",
    configId: "starterNode",
    updateType: updateType.NEVER,
    inputs: starterNode.inputs.map(io => { return { ...io } }),
    outputs: starterNode.outputs.map(io => { return { ...io } })
}

export const wrongNextEngineNode: EngineNode = {
    id: "wrongNextEngineNode",
    configId: "wrongNextNode",
    updateType: updateType.NEVER,
    inputs: wrongNextNode.inputs.map(io => { return { ...io } }),
    outputs: wrongNextNode.outputs.map(io => { return { ...io } })
}

//not in enginNode Dicts
export const keyListenerEngineNode1: EngineNode = {
    id: "keyListenerEngineNode1",
    configId: "keyListenerNode",
    updateType: updateType.NEVER,
    inputs: keyListenerNode.inputs.map(io => { return { ...io } }),
    outputs: keyListenerNode.outputs.map(io => { return { ...io } })
}

//not in enginNode Dicts
export const keyListenerEngineNode2: EngineNode = {
    id: "keyListenerEngineNode2",
    configId: "keyListenerNode2",
    updateType: updateType.NEVER,
    inputs: keyListenerNode.inputs.map(io => { return { ...io } }),
    outputs: keyListenerNode.outputs.map(io => { return { ...io } })
}

export const initEngineNode1: EngineNode = {
    id: "initEngineNode1",
    configId: "initFuncNode",
    updateType: updateType.NEVER,
    inputs: initFuncNode.inputs.map(io => { return { ...io } }),
    outputs: initFuncNode.outputs.map(io => { return { ...io } })
}

export const destroyEngineNode1: EngineNode = {
    id: "destroyEngineNode1",
    configId: "destroyFuncNode",
    updateType: updateType.NEVER,
    inputs: destroyFuncNode.inputs.map(io => { return { ...io } }),
    outputs: destroyFuncNode.outputs.map(io => { return { ...io } })
}

export const initDestroyEngineNode: EngineNode = {
    id: "initDestroyEngineNode",
    configId: "initDestroyFuncNode",
    updateType: updateType.NEVER,
    inputs: initDestroyFuncNode.inputs.map(io => { return { ...io } }),
    outputs: initDestroyFuncNode.outputs.map(io => { return { ...io } })
}

export const updateTypeNEVEREngineNode: EngineNode = {
    id: "updateTypeNEVEREngineNode",
    configId: "updateTypeNEVERNode",
    updateType: updateType.NEVER,
    inputs: updateTypeNEVERNode.inputs.map(io => { return { ...io } }),
    outputs: updateTypeNEVERNode.outputs.map(io => { return { ...io } })
}

export const updateTypeDYNAMICEngineNode: EngineNode = {
    id: "updateTypeDYNAMICEngineNode",
    configId: "updateTypeDYNAMICNode",
    updateType: updateType.DYNAMIC,
    inputs: updateTypeDYNAMICNode.inputs.map(io => { return { ...io } }),
    outputs: updateTypeDYNAMICNode.outputs.map(io => { return { ...io } })
}

export const updateTypeALWAYSEngineNode: EngineNode = {
    id: "updateTypeALWAYSEngineNode",
    configId: "updateTypeALWAYSNode",
    updateType: updateType.ALWAYS,
    inputs: updateTypeALWAYSNode.inputs.map(io => { return { ...io } }),
    outputs: updateTypeALWAYSNode.outputs.map(io => { return { ...io } })
}

export const incrementTestValueEngineNode: EngineNode = {
    id: "incrementTestValueEngineNode",
    configId: "incrementTestValueNode",
    updateType: updateType.NEVER,
    inputs: incrementTestValueNode.inputs.map(io => { return { ...io } }),
    outputs: incrementTestValueNode.outputs.map(io => { return { ...io } })
}

export const incrementTestValueEngineNode2: EngineNode = {
    id: "incrementTestValueEngineNode2",
    configId: "incrementTestValueNode",
    updateType: updateType.NEVER,
    inputs: incrementTestValueNode.inputs.map(io => { return { ...io } }),
    outputs: incrementTestValueNode.outputs.map(io => { return { ...io } })
}

export const logEngineNode1: EngineNode = {
    id: "logEngineNode1",
    configId: "logNode",
    updateType: updateType.NEVER,
    inputs: logNode.inputs.map(io => { return { ...io } }),
    outputs: logNode.outputs.map(io => { return { ...io } })
}

export const logEngineNode2: EngineNode = {
    id: "logEngineNode2",
    configId: "logNode",
    updateType: updateType.NEVER,
    inputs: logNode.inputs.map(io => { return { ...io } }),
    outputs: logNode.outputs.map(io => { return { ...io } })
}

export const logIdEngineNode: EngineNode = {
    id: "logIdEngineNode",
    configId: "logIdNode",
    updateType: updateType.NEVER,
    inputs: logIdNode.inputs.map(io => { return { ...io } }),
    outputs: logIdNode.outputs.map(io => { return { ...io } })
}

export const forEngineNode1: EngineNode = {
    id: "forEngineNode1",
    configId: "forNode",
    updateType: updateType.NEVER,
    inputs: forNode.inputs.map(io => { return { ...io } }),
    outputs: forNode.outputs.map(io => { return { ...io } })
}

export const forEngineNodeTrigger: EngineNode = {
    id: "forEngineNodeTrigger",
    configId: "forNodeTrigger",
    updateType: updateType.NEVER,
    inputs: forNode.inputs.map(io => { return { ...io } }),
    outputs: forNode.outputs.map(io => { return { ...io } })
}

export const ifEngineNode: EngineNode = {
    id: "ifEngineNode",
    configId: "ifNode",
    updateType: updateType.NEVER,
    inputs: ifNode.inputs.map(io => { return { ...io } }),
    outputs: ifNode.outputs.map(io => { return { ...io } })
}

export const ifEngineNode2: EngineNode = {
    id: "ifEngineNode2",
    configId: "ifNode",
    updateType: updateType.NEVER,
    inputs: ifNode.inputs.map(io => { return { ...io } }),
    outputs: ifNode.outputs.map(io => { return { ...io } })
}


export const numberToStringConverterEngineNode1: EngineNode = {
    id: "numberToStringConverterEngineNode1",
    configId: "numberToStringConverterNode",
    updateType: updateType.NEVER,
    inputs: numberToStringConverterNode.inputs.map(io => { return { ...io } }),
    outputs: numberToStringConverterNode.outputs.map(io => { return { ...io } })
}

export const textHelloEngineNode: EngineNode = {
    id: "textHelloEngineNode",
    configId: "textNode",
    updateType: updateType.NEVER,
    inputs: textNode.inputs.map(io => { return { ...io } }),
    outputs: textNode.outputs.map(io => { return { ...io } })
}

export const textWorldEngineNode: EngineNode = {
    id: "textWorldEngineNode",
    configId: "textNode",
    updateType: updateType.NEVER,
    inputs: textNode.inputs.map(io => { return { ...io } }),
    outputs: textNode.outputs.map(io => { return { ...io } })
}

export const textCombineEngineNode1: EngineNode = {
    id: "textCombineEngineNode1",
    configId: "textCombineNode",
    updateType: updateType.NEVER,
    inputs: textCombineNode.inputs.map(io => { return { ...io } }),
    outputs: textCombineNode.outputs.map(io => { return { ...io } })
}


export const constZeroEngineNode: EngineNode = {
    id: "constZeroEngineNode",
    configId: "constNode",
    updateType: updateType.NEVER,
    inputs: constNode.inputs.map(io => { return { ...io } }),
    outputs: constNode.outputs.map(io => { return { ...io } })
}

export const constOneEngineNode: EngineNode = {
    id: "constOneEngineNode",
    configId: "constNode",
    updateType: updateType.NEVER,
    inputs: constNode.inputs.map(io => { return { ...io } }),
    outputs: constNode.outputs.map(io => { return { ...io } })
}

export const constTwoEngineNode: EngineNode = {
    id: "constTwoEngineNode",
    configId: "constNode",
    updateType: updateType.NEVER,
    inputs: constNode.inputs.map(io => { return { ...io } }),
    outputs: constNode.outputs.map(io => { return { ...io } })
}

export const constThreeEngineNode: EngineNode = {
    id: "constThreeEngineNode",
    configId: "constNode",
    updateType: updateType.NEVER,
    inputs: constNode.inputs.map(io => { return { ...io } }),
    outputs: constNode.outputs.map(io => { return { ...io } })
}

export const constFourEngineNode: EngineNode = {
    id: "constFourEngineNode",
    configId: "constNode",
    updateType: updateType.NEVER,
    inputs: constNode.inputs.map(io => { return { ...io } }),
    outputs: constNode.outputs.map(io => { return { ...io } })
}

export const constFiveEngineNode: EngineNode = {
    id: "constFiveEngineNode",
    configId: "constNode",
    updateType: updateType.NEVER,
    inputs: constNode.inputs.map(io => { return { ...io } }),
    outputs: constNode.outputs.map(io => { return { ...io } })
}

export const multiConAddEngineNode: EngineNode = {
    id: "multiConAddEngineNode",
    configId: "multiConAddNode",
    updateType: updateType.NEVER,
    inputs: multiConAddNode.inputs.map(io => { return { ...io } }),
    outputs: multiConAddNode.outputs.map(io => { return { ...io } })
}

export const addEngineNode1: EngineNode = {
    id: "addEngineNode1",
    configId: "addNode",
    updateType: updateType.NEVER,
    inputs: addNode.inputs.map(io => { return { ...io } }),
    outputs: addNode.outputs.map(io => { return { ...io } })
}

export const addEngineNode2: EngineNode = {
    id: "addEngineNode2",
    configId: "addNode",
    updateType: updateType.NEVER,
    inputs: addNode.inputs.map(io => { return { ...io } }),
    outputs: addNode.outputs.map(io => { return { ...io } })
}

export const subEngineNode1: EngineNode = {
    id: "subEngineNode1",
    configId: "subNode",
    updateType: updateType.NEVER,
    inputs: subNode.inputs.map(io => { return { ...io } }),
    outputs: subNode.outputs.map(io => { return { ...io } })
}

export const subEngineNode2: EngineNode = {
    id: "subEngineNode2",
    configId: "subNode",
    updateType: updateType.NEVER,
    inputs: subNode.inputs.map(io => { return { ...io } }),
    outputs: subNode.outputs.map(io => { return { ...io } })
}

export const mulEngineNode1: EngineNode = {
    id: "mulEngineNode1",
    configId: "mulNode",
    updateType: updateType.NEVER,
    inputs: mulNode.inputs.map(io => { return { ...io } }),
    outputs: mulNode.outputs.map(io => { return { ...io } })
}

export const mulEngineNode2: EngineNode = {
    id: "mulEngineNode2",
    configId: "mulNode",
    updateType: updateType.NEVER,
    inputs: mulNode.inputs.map(io => { return { ...io } }),
    outputs: mulNode.outputs.map(io => { return { ...io } })
}

export const divEngineNode1: EngineNode = {
    id: "divEngineNode1",
    configId: "divNode",
    updateType: updateType.NEVER,
    inputs: divNode.inputs.map(io => { return { ...io } }),
    outputs: divNode.outputs.map(io => { return { ...io } })
}

export const divEngineNode2: EngineNode = {
    id: "divEngineNode2",
    configId: "divNode",
    updateType: updateType.NEVER,
    inputs: divNode.inputs.map(io => { return { ...io } }),
    outputs: divNode.outputs.map(io => { return { ...io } })
}

export const signalEngineNode1: EngineNode = {
    id: "signalEngineNode1",
    configId: "signalNode",
    updateType: updateType.NEVER,
    inputs: signalNode.inputs.map(io => { return { ...io } }),
    outputs: signalNode.outputs.map(io => { return { ...io } })
}

export const signalEngineNode2: EngineNode = {
    id: "signalEngineNode2",
    configId: "signalNode",
    updateType: updateType.NEVER,
    inputs: signalNode.inputs.map(io => { return { ...io } }),
    outputs: signalNode.outputs.map(io => { return { ...io } })
}

export const signalEngineNode3: EngineNode = {
    id: "signalEngineNode3",
    configId: "signalNode",
    updateType: updateType.NEVER,
    inputs: signalNode.inputs.map(io => { return { ...io } }),
    outputs: signalNode.outputs.map(io => { return { ...io } })
}

export const engineNodeDict: EngineNodeDict = {
    "root": rootEngineNode,
    "starterEngineNode": starterEngineNode,
    "initEngineNode1": initEngineNode1,
    "destroyEngineNode1": destroyEngineNode1,
    "initDestroyEngineNode": initDestroyEngineNode,
    "updateTypeNEVEREngineNode": updateTypeNEVEREngineNode,
    "updateTypeDYNAMICEngineNode": updateTypeDYNAMICEngineNode,
    "updateTypeALWAYSEngineNode": updateTypeALWAYSEngineNode,
    "textHelloEngineNode": textHelloEngineNode,
    "textWorldEngineNode": textWorldEngineNode,
    "textCombineEngineNode1": textCombineEngineNode1,
    "constZeroEngineNode": constZeroEngineNode,
    "constOneEngineNode": constOneEngineNode,
    "constTwoEngineNode": constTwoEngineNode,
    "constThreeEngineNode": constThreeEngineNode,
    "constFourEngineNode": constFourEngineNode,
    "constFiveEngineNode": constFiveEngineNode,
    "multiConAddEngineNode": multiConAddEngineNode,
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
    "logIdEngineNode": logIdEngineNode,
    "forEngineNode1": forEngineNode1,
    "forEngineNodeTrigger": forEngineNodeTrigger,
    "incrementTestValueEngineNode": incrementTestValueEngineNode,
    "incrementTestValueEngineNode2": incrementTestValueEngineNode2,
    "numberToStringConverterEngineNode1": numberToStringConverterEngineNode1,
    "ifEngineNode": ifEngineNode,
    "ifEngineNode2": ifEngineNode2,
    "wrongNextEngineNode": wrongNextEngineNode
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