import { EngineIO } from "../../../src/core/IO/EngineIO";
import { CON_MAPPING } from "../../../src/core/IO/IOMapping";

export const multiNumberIn: EngineIO<null, number[]> = {
    type: "number",
    mapping: CON_MAPPING.MULTI,
    data: null,
    value: []
}

export interface dataTest {
    value: number
}

export const numberWithDataOut: EngineIO<dataTest, number> = {
    type: "number",
    mapping: CON_MAPPING.SINGLE,
    data: { value: 0 },
    value: 0
}

export const numberWithDataIn: EngineIO<dataTest, number> = {
    type: "number",
    mapping: CON_MAPPING.SINGLE,
    data: { value: 0 },
    value: 0

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