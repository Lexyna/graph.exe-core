import { connector } from "../../src/core/connections/Connector";
import { EngineConnections } from "../../src/core/connections/EngineConnections";
import { executeGraph } from "../../src/core/engine/OTG";
import { configDict, resetTestValue, testValue } from "./predefined/ConfigNodes";
import { constFiveEngineNodeOUTPUT0, constThreeEngineNodeOUTPUT0, constTwoEngineNodeOUTPUT0, mulEngineNode1INPUT0, mulEngineNode1INPUT1, mulEngineNode1OUTPUT0, mulEngineNode2INPUT0, mulEngineNode2INPUT1, mulEngineNode2OUTPUT0, rootINPUT0 } from "./predefined/ConnectionDetails";
import { engineNodeDict, initializeNodeValues } from "./predefined/EngineNodes";
import { addingThreeNumberConnection, addingTwoNumberConnection, simpleValidConnection } from "./predefined/ValidConnections";

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

    test("addThreeNumbers connection", () => {
        executeGraph(configDict, engineNodeDict, addingThreeNumberConnection, "root");
        expect(testValue).toBe(3)
    })

    test("create multiplying three number connection", () => {

        const connectionDict: EngineConnections = {
            input: {},
            output: {}
        }

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

        executeGraph(configDict, engineNodeDict, connectionDict, "root");
        expect(testValue).toBe(30)

    })

})