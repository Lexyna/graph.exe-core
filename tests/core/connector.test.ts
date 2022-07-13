import { EngineConnections } from "../../src/core/connections/EngineConnections";
import { connector } from "../../src/core/engine/Connector";
import { validator } from "../../src/core/engine/Validator";
import { configDict } from "./predefined/ConfigNodes";
import { addEngineNode1INPUT0, addEngineNode1INPUT1, addEngineNode1OUTPUT0, constFiveEngineNodeOUTPUT0, constOneEngineNodeOUTPUT0, constThreeEngineNodeOUTPUT0, constTwoEngineNodeOUTPUT0, mulEngineNode1INPUT0, mulEngineNode1INPUT1, mulEngineNode1OUTPUT0, mulEngineNode2INPUT0, mulEngineNode2INPUT1, mulEngineNode2OUTPUT0, rootINPUT0 } from "./predefined/ConnectionDetails";
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

        connector(constOneEngineNodeOUTPUT0, rootINPUT0, connectionDict);

        expect(validator(configDict, engineNodeDict, connectionDict, "root")).toBe(true);

    })

    test("create multi output connection", () => {

        connector(addEngineNode1OUTPUT0, rootINPUT0, connectionDict);
        connector(constFiveEngineNodeOUTPUT0, addEngineNode1INPUT0, connectionDict);
        connector(constFiveEngineNodeOUTPUT0, addEngineNode1INPUT1, connectionDict);

        expect(validator(configDict, engineNodeDict, connectionDict, "root")).toBe(true);

    })

    test("create multiplying three number connection", () => {

        //connect  result form mul Node 2 to root
        connector(mulEngineNode2OUTPUT0, rootINPUT0, connectionDict);

        //connect result from mul node 1 with mul node 2
        connector(mulEngineNode1OUTPUT0, mulEngineNode2INPUT1, connectionDict);

        //connect const 2 with mul node 2
        connector(constTwoEngineNodeOUTPUT0, mulEngineNode2INPUT0, connectionDict);

        //connect const 3 with mul node 1
        connector(constThreeEngineNodeOUTPUT0, mulEngineNode1INPUT0, connectionDict);

        //connect const 5 with mul node 1
        connector(constFiveEngineNodeOUTPUT0, mulEngineNode1INPUT1, connectionDict);

        expect(validator(configDict, engineNodeDict, connectionDict, "root")).toBe(true);

    })

})