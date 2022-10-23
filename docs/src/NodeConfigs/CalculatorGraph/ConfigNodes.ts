
import { EngineIO } from "graph.exe-core";
import { ProtoNode } from "graph.exe-react/dist/cjs/ProtoTypes/ProtoNode";
import { inputData, trigFuncSelect, TrigonometricFunctions } from "./CustomComp";
import { numberIn, numberInputOut, numberInSum, numberInX, numberInY, numberOut, trigonometricInput } from "./IO";

export const rootNode: ProtoNode = {
    id: "rootNode",
    name: "Result",
    description: "",
    inputs: [numberIn],
    outputs: [],
    private: true,
    exe: function (in1: EngineIO<null, number>) { }
}

export const constNode: ProtoNode = {
    id: "constNode",
    description: "adds two numbers",
    name: "const",
    inputs: [],
    outputs: [numberInputOut],
    exe: function (out: EngineIO<inputData, number>,) {
        out.value = out.data.val;
    }
}

export const addNode: ProtoNode = {
    id: "addNode",
    name: "Add",
    description: "Add's two numbers",
    inputs: [numberIn, numberIn],
    outputs: [numberOut],
    exe: function (in1: EngineIO<null, number>, in2: EngineIO<null, number>, out: EngineIO<null, number>) {
        out.value = in1.value + in2.value;
    }
}

export const subNode: ProtoNode = {
    id: "subNode",
    description: "subtracts two numbers",
    name: "Sub",
    inputs: [numberIn, numberIn],
    outputs: [numberOut],
    exe: function (in1: EngineIO<null, number>, in2: EngineIO<null, number>, out: EngineIO<null, number>) {
        out.value = in1.value - in2.value;
    }
}

export const mulNode: ProtoNode = {
    id: "mulNode",
    description: "Multiplies two numbers",
    name: "Mul",
    inputs: [numberIn, numberIn],
    outputs: [numberOut],
    exe: function (in1: EngineIO<null, number>, in2: EngineIO<null, number>, out: EngineIO<null, number>) {
        out.value = in1.value * in2.value;
    }
}

export const divNode: ProtoNode = {
    id: "divNode",
    description: "Divides two numbers",
    name: "Div",
    inputs: [numberIn, numberIn],
    outputs: [numberOut],
    exe: function (in1: EngineIO<null, number>, in2: EngineIO<null, number>, out: EngineIO<null, number>) {
        if (in2.value === 0)
            out.value = 0;
        else out.value = in1.value / in2.value;
    }
}

export const powerNode: ProtoNode = {
    id: "powerNode",
    description: "Raises x to the power of y",
    name: "Power",
    inputs: [numberInX, numberInY],
    outputs: [numberOut],
    exe: function (in1: EngineIO<null, number>, in2: EngineIO<null, number>, out: EngineIO<null, number>) {
        out.value = Math.pow(in1.value, in2.value);
    }
}

export const rootOpNode: ProtoNode = {
    id: "rootOpNode",
    description: "Take square root of x",
    name: "sqrt(x)",
    inputs: [numberInX],
    outputs: [numberOut],
    exe: function (in1: EngineIO<null, number>, out: EngineIO<null, number>) {
        if (in1.value >= 0)
            out.value = Math.sqrt(in1.value);
    }
}

export const summationNode: ProtoNode = {
    id: "summationNode",
    description: "Sums all inputs together",
    name: "Summation",
    inputs: [numberInSum],
    outputs: [numberOut],
    exe: function (in1: EngineIO<null, number[]>, out: EngineIO<null, number>) {
        out.value = 0;
        for (let i = 0; i < in1.value.length; i++)
            out.value += in1.value[i];
    }
}

export const trigNode: ProtoNode = {
    id: "trigonometricNode",
    description: "Trigonometric functions",
    name: "Trigonometric Function",
    inputs: [trigonometricInput],
    outputs: [numberOut],
    exe: function (in1: EngineIO<trigFuncSelect, number>, out: EngineIO<null, number>) {
        switch (in1.data.type) {
            case TrigonometricFunctions.SIN: out.value = Math.sin(in1.value); break;
            case TrigonometricFunctions.SINH: out.value = Math.sinh(in1.value); break;
            case TrigonometricFunctions.ASIN: out.value = Math.asin(in1.value); break;
            case TrigonometricFunctions.ASINH: out.value = Math.asinh(in1.value); break;
            case TrigonometricFunctions.COS: out.value = Math.cos(in1.value); break;
            case TrigonometricFunctions.COSH: out.value = Math.cosh(in1.value); break;
            case TrigonometricFunctions.ACOS: out.value = Math.acos(in1.value); break;
            case TrigonometricFunctions.ACOSH: out.value = Math.acosh(in1.value); break;
            case TrigonometricFunctions.TAN: out.value = Math.tan(in1.value); break;
            case TrigonometricFunctions.TANH: out.value = Math.tanh(in1.value); break;
            case TrigonometricFunctions.ATAN: out.value = Math.atan(in1.value); break;
            case TrigonometricFunctions.ATANH: out.value = Math.atanh(in1.value); break;
        }
    }
}