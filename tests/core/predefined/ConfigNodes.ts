import { getNodeId, next } from "../../../src/core/engine/Core";
import { EngineIO } from "../../../src/core/IO/EngineIO";
import { ConfigNode, ConfigNodeDict, updateType } from "../../../src/core/nodes/ConfigNode";
import { numberIn, signalIn, stringIn } from "./InputPorts";
import { numberOut, signalOut, stringOut } from "./OutputPorts";

export let testValue: number = 0;
export let testString: string = "";
export let testLog: string[] = [];

export let initLog: string[] = [];
export let destroyLog: string[] = [];

export let fakeListener: any = null;
export let fakeListener2: any = null;

export const resetAll = () => {
    resetTestValue();
    resetTestString();
    resetTestLog();
    resetInitLog();
    resetDestroyLog();
    resetEventListener();
}

export const resetTestValue = () => { testValue = 0 }
export const resetTestString = () => { testString = "" }
export const resetTestLog = () => { testLog = [] }
export const resetInitLog = () => { initLog = [] }
export const resetDestroyLog = () => { destroyLog = [] }
export const resetEventListener = () => {
    fakeListener = null;
    fakeListener2 = null;
}

export const rootNode: ConfigNode = {
    id: "rootNode",
    inputs: [numberIn],
    outputs: [],
    exe: function (input: EngineIO<null, number>): void {
        testValue = input.value;
    }
}

export const starterNode: ConfigNode = {
    id: "starterNode",
    inputs: [],
    outputs: [signalOut],
    exe: function (signalOut: EngineIO<null, null>): void {
        next(signalOut);
    }
}

export const wrongNextNode: ConfigNode = {
    id: "wrongNextNode",
    inputs: [signalIn],
    outputs: [signalOut],
    exe: function (signalIn: EngineIO<null, null>, signalOut: EngineIO<null, null>): void {
        next(signalIn);
    }
}

export const keyListenerNode: ConfigNode = {
    id: "keyListenerNode",
    inputs: [],
    outputs: [signalOut],
    onInit: function (signalOut: EngineIO<null, null>): void {
        const myKeyListener = () => {
            next(signalOut);
        }
        fakeListener = myKeyListener
        //addEventListener("keypress", myKeyListener);
    },
    onDestroy: function (signalOut: EngineIO<null, null>): void {
        fakeListener = null;
        //removeEventListener("keypress", listenerWrapper);
    },
    exe: function (signalOut: EngineIO<null, null>): void {
    }
}

export const keyListenerNode2: ConfigNode = {
    id: "keyListenerNode2",
    inputs: [],
    outputs: [signalOut],
    onInit: function (signalOut: EngineIO<null, null>): void {
        const myKeyListener2 = () => {
            next(signalOut);
        }
        fakeListener2 = myKeyListener2
    },
    onDestroy: function (signalOut: EngineIO<null, null>): void {
        fakeListener2 = null;
    },
    exe: function (signalOut: EngineIO<null, null>): void {
    }
}

export const initFuncNode: ConfigNode = {
    id: "initFuncNode",
    inputs: [signalIn],
    outputs: [signalOut],
    onInit: function (signalIn: EngineIO<null, null>, signalOut: EngineIO<null, null>): void {
        initLog.push("init")
    },
    exe: function (signalIn: EngineIO<null, null>, signalOut: EngineIO<null, null>): void {
        next(signalOut);
    }
}

export const destroyFuncNode: ConfigNode = {
    id: "destroyFuncNode",
    inputs: [signalIn],
    outputs: [signalOut],
    onDestroy: function (signalIn: EngineIO<null, null>, signalOut: EngineIO<null, null>): void {
        destroyLog.push("destroy")
    },
    exe: function (signalIn: EngineIO<null, null>, signalOut: EngineIO<null, null>): void {
        next(signalOut);
    }
}

export const initDestroyFuncNode: ConfigNode = {
    id: "initDestroyFuncNode",
    inputs: [signalIn],
    outputs: [signalOut],
    onInit: function (signalIn: EngineIO<null, null>, signalOut: EngineIO<null, null>): void {
        initLog.push("init")
    },
    onDestroy: function (signalIn: EngineIO<null, null>, signalOut: EngineIO<null, null>): void {
        destroyLog.push("destroy")
    },
    exe: function (signalIn: EngineIO<null, null>, signalOut: EngineIO<null, null>): void {
        next(signalOut);
    }
}

export const updateTypeNEVERNode: ConfigNode = {
    id: "updateTypeNEVERNode",
    inputs: [numberIn],
    outputs: [numberOut],
    updateType: updateType.NEVER,
    exe: function (numberIn: EngineIO<null, number>, numberOut: EngineIO<null, number>): void {
        numberOut.value = testValue;
    }
}

export const updateTypeDYNAMICNode: ConfigNode = {
    id: "updateTypeDYNAMICNode",
    inputs: [numberIn],
    outputs: [numberOut],
    updateType: updateType.DYNAMIC,
    exe: function (numberIn: EngineIO<null, number>, numberOut: EngineIO<null, number>): void {
        numberOut.value = testValue;
    }
}

export const updateTypeALWAYSNode: ConfigNode = {
    id: "updateTypeDYNAMICNode",
    inputs: [numberIn],
    outputs: [numberOut],
    updateType: updateType.ALWAYS,
    exe: function (numberIn: EngineIO<null, number>, numberOut: EngineIO<null, number>): void {
        numberOut.value = testValue;
    }
}

export const incrementTestValueNode: ConfigNode = {
    id: "incrementTestValueNode",
    inputs: [signalIn],
    outputs: [signalOut, numberOut],
    exe: function (signalIn: EngineIO<null, null>, signalOut: EngineIO<null, null>, numberOut: EngineIO<null, number>): void {
        testValue++;
        numberOut.value = testValue;
        next(signalOut);
    }
}

export const logNode: ConfigNode = {
    id: "logNode",
    inputs: [signalIn, stringIn],
    outputs: [signalOut],
    exe: function (signalIn: EngineIO<null, null>, stringIn: EngineIO<null, string>, signalOut: EngineIO<null, null>) {
        testLog.push(stringIn.value);
        next(signalOut);
    }
}

export const logIdNode: ConfigNode = {
    id: "logIdNode",
    inputs: [signalIn],
    outputs: [signalOut],
    exe: function (signalIn: EngineIO<null, null>, signalOut: EngineIO<null, null>): void {
        testLog.push(getNodeId(signalIn));
        next(signalOut);
    }
}

export const forNode: ConfigNode = {
    id: "forNode",
    inputs: [signalIn],
    outputs: [signalOut, numberOut],
    exe: function (signalIn: EngineIO<null, null>, signalOut: EngineIO<null, null>, numberOut: EngineIO<null, number>) {
        for (let i = 0; i < 100; i++) {
            numberOut.value = i;
            next(signalOut);
        }
    }
}

export const forNodeTrigger: ConfigNode = {
    id: "forNodeTrigger",
    isTrigger: true,
    inputs: [signalIn],
    outputs: [signalOut, numberOut],
    exe: function (signalIn: EngineIO<null, null>, signalOut: EngineIO<null, null>, numberOut: EngineIO<null, number>) {
        for (let i = 0; i < 100; i++) {
            numberOut.value = i;
            next(signalOut);
        }
    }
}

export const ifNode: ConfigNode = {
    id: "ifNode",
    inputs: [signalIn, numberIn],
    outputs: [signalOut, signalOut],
    exe: function (signalIn: EngineIO<null, null>, numberIn: EngineIO<null, number>,
        signalOutTrue: EngineIO<null, null>, signalOutFalse: EngineIO<null, null>) {
        if (numberIn.value % 2 === 0)
            next(signalOutTrue);
        else
            next(signalOutFalse);
    }
}

export const numberToStringConverterNode: ConfigNode = {
    id: "numberToStringConverterNode",
    updateType: updateType.ALWAYS,
    inputs: [numberIn],
    outputs: [stringOut],
    exe: function (numberIn: EngineIO<null, number>, stringOut: EngineIO<null, string>) {
        const s: string = numberIn.value.toString();
        stringOut.value = s;
    }
}

export const textNode: ConfigNode = {
    id: "textNode",
    inputs: [],
    outputs: [stringOut],
    exe: function (out: EngineIO<null, string>): void { }
}

export const textCombineNode: ConfigNode = {
    id: "textCombineNode",
    inputs: [stringIn, stringIn],
    outputs: [stringOut],
    exe: function (in1: EngineIO<null, string>, in2: EngineIO<null, string>, out: EngineIO<null, string>): void {
        out.value = in1.value.concat(in2.value);
        testString = out.value;
    }
}


export const constNode: ConfigNode = {
    id: "constNode",
    inputs: [],
    outputs: [numberOut],
    exe: function (out: EngineIO<null, number>): void { }
}

export const addNode: ConfigNode = {
    id: "addNode",
    updateType: updateType.DYNAMIC,
    inputs: [numberIn, numberIn],
    outputs: [numberOut],
    exe: function (in1: EngineIO<null, number>, in2: EngineIO<null, number>, out: EngineIO<null, number>): void {
        out.value = in1.value + in2.value;
    }
}

export const subNode: ConfigNode = {
    id: "subNode",
    updateType: updateType.DYNAMIC,
    inputs: [numberIn, numberIn],
    outputs: [numberOut],
    exe: function (in1: EngineIO<null, number>, in2: EngineIO<null, number>, out: EngineIO<null, number>): void {
        out.value = in1.value - in2.value;
    }
}

export const mulNode: ConfigNode = {
    id: "mulNode",
    updateType: updateType.DYNAMIC,
    inputs: [numberIn, numberIn],
    outputs: [numberOut],
    exe: function (in1: EngineIO<null, number>, in2: EngineIO<null, number>, out: EngineIO<null, number>): void {
        out.value = in1.value * in2.value;
    }
}

export const divNode: ConfigNode = {
    id: "divNode",
    updateType: updateType.DYNAMIC,
    inputs: [numberIn, numberIn],
    outputs: [numberOut],
    exe: function (in1: EngineIO<null, number>, in2: EngineIO<null, number>, out: EngineIO<null, number>): void {
        out.value = in1.value / in2.value;
    }
}

export const signalNode: ConfigNode = {
    id: "signalNode",
    inputs: [signalIn],
    outputs: [signalOut],
    exe: function (): void {

    }
}

export const configDict: ConfigNodeDict = {
    "rootNode": rootNode,
    "starterNode": starterNode,
    "initFuncNode": initFuncNode,
    "destroyFuncNode": destroyFuncNode,
    "initDestroyFuncNode": initDestroyFuncNode,
    "updateTypeNEVERNode": updateTypeNEVERNode,
    "updateTypeDYNAMICNode": updateTypeDYNAMICNode,
    "updateTypeALWAYSNode": updateTypeALWAYSNode,
    "textNode": textNode,
    "textCombineNode": textCombineNode,
    "constNode": constNode,
    "addNode": addNode,
    "subNode": subNode,
    "mulNode": mulNode,
    "divNode": divNode,
    "signalNode": signalNode,
    "logNode": logNode,
    "forNode": forNode,
    "forNodeTrigger": forNodeTrigger,
    "ifNode": ifNode,
    "incrementTestValueNode": incrementTestValueNode,
    "numberToStringConverterNode": numberToStringConverterNode,
    "keyListenerNode": keyListenerNode,
    "keyListenerNode2": keyListenerNode2,
    "wrongNextNode": wrongNextNode,
    "logIdNode": logIdNode
}