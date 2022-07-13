import { EngineConnections } from "../../src/core/connections/EngineConnections";
import { connector } from "../../src/core/engine/Connector";
import { validator } from "../../src/core/engine/Validator";
import { configDict } from "./predefined/ConfigNodes";
import { addEngineNode1INPUT0, addEngineNode1INPUT1, addEngineNode1OUTPUT0, constFiveEngineNodeOUTPUT0, constOneEngineNodeOUTPUT0, rootINPUT0 } from "./predefined/ConnectionDetails";
import { engineNodeDict } from "./predefined/EngineNodes";

describe("connector test", () => {

    let connectionDict: EngineConnections;

    beforeEach(() => {
        connectionDict = {
            input: {},
            output: {}
        }
    })

    test("create simple connection", () => {

        connector(rootINPUT0, constOneEngineNodeOUTPUT0, connectionDict);

        expect(validator(configDict, engineNodeDict, connectionDict, "root")).toBe(true);

    })

    test.only("create multi connection", () => {

        connector(rootINPUT0, addEngineNode1OUTPUT0, connectionDict);
        connector(addEngineNode1INPUT0, constFiveEngineNodeOUTPUT0, connectionDict);
        connector(addEngineNode1INPUT1, constFiveEngineNodeOUTPUT0, connectionDict);

        expect(validator(configDict, engineNodeDict, connectionDict, "root")).toBe(true);

    })

})