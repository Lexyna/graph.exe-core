import { executeGraph } from "../../src/core/engine/OTG";
import { configDict, resetTestValue, testValue } from "./predefined/ConfigNodes";
import { engineNodeDict, initializeNodeValues } from "./predefined/EngineNodes";
import { addingTwoNumberConnection, simpleValidConnection } from "./predefined/ValidConnections";

describe("otg test", () => {

    beforeEach(() => {

        resetTestValue();
        initializeNodeValues();

    })

    test("simple const 5 connection", () => {
        executeGraph(configDict, engineNodeDict, simpleValidConnection, "root");
        expect(testValue).toBe(1)
    })

    test("addTwoNumber connection", () => {
        executeGraph(configDict, engineNodeDict, addingTwoNumberConnection, "root");
        expect(testValue).toBe(2)
    })

})