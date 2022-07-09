import { EngineIO } from "../../../src/core/IO/EngineIO";
import { CON_MAPPING } from "../../../src/core/IO/IOMapping";

export const numberOut: EngineIO<null, number> = {
    type: "number",
    mapping: CON_MAPPING.MULTI,
    data: null,
    value: 0
}

