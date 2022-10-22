import { CON_MAPPING } from "graph.exe-core/dist/cjs/core/IO/IOMapping";
import { ProtoIO } from "graph.exe-react/dist/cjs/ProtoTypes/ProtoIO";
import { inputData, inputForm, trigFuncSelect, TrigonometricFunctions, trigonometricSelector } from "./CustomComp";

export const numberIn: ProtoIO<null, number> = {
    type: "number",
    mapping: CON_MAPPING.SINGLE,
    label: "number",
    data: null,
    extra: null,
    value: 0
}

export const numberOut: ProtoIO<null, number> = {
    type: "number",
    mapping: CON_MAPPING.MULTI,
    label: "number",
    data: null,
    extra: null,
    value: 0
}

export const numberInX: ProtoIO<null, number> = {
    type: "number",
    mapping: CON_MAPPING.SINGLE,
    label: "X",
    data: null,
    extra: null,
    value: 0
}

export const numberInY: ProtoIO<null, number> = {
    type: "number",
    mapping: CON_MAPPING.SINGLE,
    label: "Y",
    data: null,
    extra: null,
    value: 0
}

export const numberInSum: ProtoIO<null, number[]> = {
    type: "number",
    mapping: CON_MAPPING.MULTI,
    label: "∑",
    data: null,
    extra: null,
    value: []
}

export const numberInputOut: ProtoIO<inputData, number> = {
    type: "number",
    label: "number",
    mapping: CON_MAPPING.MULTI,
    extra: inputForm,
    value: 0,
    data: { val: 0 }
}

export const trigonometricInput: ProtoIO<trigFuncSelect, number> = {
    type: "number",
    label: "number",
    mapping: CON_MAPPING.SINGLE,
    extra: trigonometricSelector,
    value: 0,
    data: { type: TrigonometricFunctions.SIN },

}