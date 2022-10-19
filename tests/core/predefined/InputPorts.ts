import { EngineIO } from "../../../src/core/IO/EngineIO";
import { CON_MAPPING } from "../../../src/core/IO/IOMapping";

export const multiNumberIn: EngineIO<null, number[]> = {
    type: "number",
    mapping: CON_MAPPING.MULTI,
    data: null,
    value: []
}

export const numberIn: EngineIO<null, number> = {
    type: "number",
    mapping: CON_MAPPING.SINGLE,
    data: null,
    value: 0
}

export const signalIn: EngineIO<null, null> = {
    type: "signal",
    mapping: CON_MAPPING.MULTI,
    data: null,
    value: null
}

export const stringIn: EngineIO<null, string> = {
    type: "string",
    mapping: CON_MAPPING.SINGLE,
    data: null,
    value: ""
}