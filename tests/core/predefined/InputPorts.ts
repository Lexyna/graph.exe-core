import { EngineIO } from "../../../src/core/IO/EngineIO";
import { CON_MAPPING } from "../../../src/core/IO/IOMapping";


export const numberIn: EngineIO<null, number> = {
    type: "number",
    mapping: CON_MAPPING.SINGLE,
    data: null,
    value: 0
}