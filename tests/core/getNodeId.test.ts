import { connector } from "../../src/core/connections/Connector";
import { EngineConnections } from "../../src/core/connections/EngineConnections";
import { executeGraph } from "../../src/core/engine/OTG";
import { configDict, resetAll, testLog } from "./predefined/ConfigNodes";
import { logIdEngineNodeINPUT0, starterEngineNodeOUTPUT0 } from "./predefined/ConnectionDetails";
import { engineNodeDict, initializeNodeValues } from "./predefined/EngineNodes";

describe("getNodeId tests", () => {

    let connectionDict: EngineConnections;

    beforeEach(() => {
        connectionDict = {
            input: {},
            output: {}
        }

        resetAll();
        initializeNodeValues();
    })


    test("test self id log", () => {

        const res: string[] = ["logIdEngineNode"]

        connector(starterEngineNodeOUTPUT0, logIdEngineNodeINPUT0, connectionDict);

        executeGraph(configDict, engineNodeDict, connectionDict, "starterEngineNode");

        expect(testLog).toEqual(res);

    })

})