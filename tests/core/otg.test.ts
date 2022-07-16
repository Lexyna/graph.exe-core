import { connector } from "../../src/core/connections/Connector";
import { EngineConnections } from "../../src/core/connections/EngineConnections";
import { executeGraph } from "../../src/core/engine/OTG";
import { configDict, resetTestValue, testValue } from "./predefined/ConfigNodes";
import { addEngineNode1INPUT0, addEngineNode1INPUT1, addEngineNode1OUTPUT0, addEngineNode2INPUT0, addEngineNode2INPUT1, addEngineNode2OUTPUT0, constFiveEngineNodeOUTPUT0, constFourEngineNodeOUTPUT0, constOneEngineNodeOUTPUT0, constThreeEngineNodeOUTPUT0, constTwoEngineNodeOUTPUT0, mulEngineNode1INPUT0, mulEngineNode1INPUT1, mulEngineNode1OUTPUT0, mulEngineNode2INPUT0, mulEngineNode2INPUT1, mulEngineNode2OUTPUT0, rootINPUT0, subEngineNode2INPUT0, subEngineNode2INPUT1, subEngineNode2OUTPUT0 } from "./predefined/ConnectionDetails";
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

    test("complex arithmetic calculation", () => {

        const connectionDict: EngineConnections = {
            input: {},
            output: {}
        }

        //connect res from mul Node 2 to root
        connector(mulEngineNode2OUTPUT0, rootINPUT0, connectionDict);

        //connect sub Engine 2 output to mulEngine input
        connector(subEngineNode2OUTPUT0, mulEngineNode2INPUT0, connectionDict);

        //connect add Engine 1 output to mulEngine Input 1
        connector(addEngineNode1OUTPUT0, mulEngineNode2INPUT1, connectionDict);

        //connect add engine 2 output to add Engine 1 input 1
        connector(addEngineNode2OUTPUT0, addEngineNode1INPUT0, connectionDict);

        //connect mul engine 1 output to add engine 1
        connector(mulEngineNode1OUTPUT0, addEngineNode1INPUT1, connectionDict);

        //connect const one output to sub engine 2
        connector(constOneEngineNodeOUTPUT0, subEngineNode2INPUT0, connectionDict);

        //connect const five to sub engine 2
        connector(constFiveEngineNodeOUTPUT0, subEngineNode2INPUT1, connectionDict);

        //connect const five to add engine 2
        connector(constFiveEngineNodeOUTPUT0, addEngineNode2INPUT0, connectionDict);

        //connect const three to add engine 2
        connector(constThreeEngineNodeOUTPUT0, addEngineNode2INPUT1, connectionDict);

        //connect const four to mul engine 1
        connector(constFourEngineNodeOUTPUT0, mulEngineNode1INPUT0, connectionDict);

        //connect const two to mul engine 1
        connector(constTwoEngineNodeOUTPUT0, mulEngineNode1INPUT1, connectionDict);

        // ((4 * 2) + ( 5 + 3 )) * (1 - 5) = -64
        executeGraph(configDict, engineNodeDict, connectionDict, "root");
        expect(testValue).toBe(-64)

    })

})