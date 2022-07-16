import { executeGraph } from "../../src/core/engine/OTG";
import { configDict, resetTestValue, testValue } from "./predefined/ConfigNodes";
import { engineNodeDict, initializeNodeValues } from "./predefined/EngineNodes";
import { simpleValidConnection } from "./predefined/ValidConnections";

describe("otg test", () => {

    beforeEach(() => {

        resetTestValue();
        initializeNodeValues();

    })

    test.only("simple const 5 connection", () => {

        executeGraph(configDict, engineNodeDict, simpleValidConnection, "root");
        expect(testValue).toBe(1)
    })

})