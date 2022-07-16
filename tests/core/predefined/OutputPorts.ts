import { EngineIO } from "../../../src/core/IO/EngineIO";
import { CON_MAPPING } from "../../../src/core/IO/IOMapping";

export const numberOut: EngineIO<null, number> = {
    type: "number",
    mapping: CON_MAPPING.MULTI,
    data: null,
    value: 0
}

export const signalOut: EngineIO<null, null> = {
    type: "signal",
    mapping: CON_MAPPING.SINGLE,
    data: null,
    value: null
}

export const stringOut: EngineIO<null, string> = {
    type: "string",
    mapping: CON_MAPPING.MULTI,
    data: null,
    value: ""
}