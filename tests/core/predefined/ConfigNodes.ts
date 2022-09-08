import { next } from "../../../src/core/engine/Core";
import { EngineIO } from "../../../src/core/IO/EngineIO";
import { ConfigNode, ConfigNodeDict } from "../../../src/core/nodes/ConfigNode";
import { numberIn, signalIn, stringIn } from "./InputPorts";
import { numberOut, signalOut, stringOut } from "./OutputPorts";

export let testValue: number = 0;
export let testString: string = "";
export let testLog: string[] = [];

export const resetTestValue = () => { testValue = 0 }
export const resetTestString = () => { testString = "" }
export const resetTestLog = () => { testLog = [] }

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
    inputs: [numberIn, numberIn],
    outputs: [numberOut],
    exe: function (in1: EngineIO<null, number>, in2: EngineIO<null, number>, out: EngineIO<null, number>): void {
        out.value = in1.value + in2.value;
    }
}

export const subNode: ConfigNode = {
    id: "subNode",
    inputs: [numberIn, numberIn],
    outputs: [numberOut],
    exe: function (in1: EngineIO<null, number>, in2: EngineIO<null, number>, out: EngineIO<null, number>): void {
        out.value = in1.value - in2.value;
    }
}

export const mulNode: ConfigNode = {
    id: "mulNode",
    inputs: [numberIn, numberIn],
    outputs: [numberOut],
    exe: function (in1: EngineIO<null, number>, in2: EngineIO<null, number>, out: EngineIO<null, number>): void {
        out.value = in1.value * in2.value;
    }
}

export const divNode: ConfigNode = {
    id: "divNode",
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
    "numberToStringConverterNode": numberToStringConverterNode
}