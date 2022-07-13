import { EngineConnections } from "../../src/core/connections/EngineConnections";
import { connector } from "../../src/core/engine/Connector";
import { validator } from "../../src/core/engine/Validator";
import { configDict } from "./predefined/ConfigNodes";
import { constOneEngineNodeOUTPUT0, rootINPUT0 } from "./predefined/ConnectionDetails";
import { engineNodeDict } from "./predefined/EngineNodes";

describe.only("connector test", () => {

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

})