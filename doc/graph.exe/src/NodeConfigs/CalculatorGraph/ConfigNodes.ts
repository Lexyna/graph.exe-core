
import { EngineIO } from "graph.exe-core";
import { ProtoNode } from "graph.exe-react/dist/cjs/ProtoTypes/ProtoNode";
import { inputData } from "../CustomComp";
import { numberIn, numberInputOut, numberInX, numberInY, numberOut } from "../IO";

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