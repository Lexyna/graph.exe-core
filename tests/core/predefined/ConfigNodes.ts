import { EngineIO } from "../../../src/core/IO/EngineIO";
import { ConfigNode, ConfigNodeDict } from "../../../src/core/nodes/ConfigNode";
import { numberIn, signalIn, stringIn } from "./InputPorts";
import { numberOut, signalOut, stringOut } from "./OutputPorts";

export let testValue: number = 0;
export let testString: string = "";

export const resetTestValue = () => { testValue = 0 }
export const resetTestString = () => { testString = "" }

export const rootNode: ConfigNode = {
    id: "rootNode",
    inputs: [numberIn],
    outputs: [],
    exe: function (input: EngineIO<null, number>): void {
        testValue = input.value;
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
    "textNode": textNode,
    "textCombineNode": textCombineNode,
    "constNode": constNode,
    "addNode": addNode,
    "subNode": subNode,
    "mulNode": mulNode,
    "divNode": divNode,
    "signalNode": signalNode
}