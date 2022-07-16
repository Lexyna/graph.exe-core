import { connector } from "../../src/core/connections/Connector"
import { splitter } from "../../src/core/connections/Splitter"
import { addEngineNode1OUTPUT0, addEngineNode2INPUT1, constFiveEngineNodeOUTPUT0, constOneEngineNodeOUTPUT0, constThreeEngineNodeOUTPUT0, constTwoEngineNodeOUTPUT0, mulEngineNode1INPUT0, mulEngineNode1INPUT1, mulEngineNode1OUTPUT0, mulEngineNode2INPUT0, mulEngineNode2INPUT1, mulEngineNode2OUTPUT0, rootINPUT0 } from "./predefined/ConnectionDetails"
import { addingThreeNumberConnectionAfterSplit2, addingTwoNumberConnectionAfterSplit1 } from "./predefined/splitterConnections"
import { addingThreeNumberConnection, addingTwoNumberConnection } from "./predefined/ValidConnections"

describe("Splitter tests", () => {

    test("remove simple connection (split1)", () => {

        const res = Object.assign({}, addingTwoNumberConnection);

        const success = splitter(addEngineNode1OUTPUT0, rootINPUT0, res);

        expect(res).toEqual(addingTwoNumberConnectionAfterSplit1);
        expect(success).toBe(true);

    })

    test("remove addingThreeNumberConnection (split2)", () => {

        const res = Object.assign({}, addingThreeNumberConnection);

        const success = splitter(constOneEngineNodeOUTPUT0, addEngineNode2INPUT1, res);

        expect(res).toEqual(addingThreeNumberConnectionAfterSplit2);
        expect(success).toBe(true);
    })

    test("create multiplying three number connection, then split", () => {

        //connection dicts
        const connectionDict = {
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

        //result

        const res = {
            input: {},
            output: {}
        }

        //connect  result form mul Node 2 to root
        connector(mulEngineNode2OUTPUT0, rootINPUT0, res);

        //connect result from mul node 1 with mul node 2
        connector(mulEngineNode1OUTPUT0, mulEngineNode2INPUT1, res);

        //connect const 2 with mul node 2
        connector(constTwoEngineNodeOUTPUT0, mulEngineNode2INPUT0, res);

        //connect const 3 with mul node 1
        connector(constThreeEngineNodeOUTPUT0, mulEngineNode1INPUT0, res);

        const success = splitter(constFiveEngineNodeOUTPUT0, mulEngineNode1INPUT1, connectionDict);

        expect(connectionDict).toEqual(res);
        expect(success).toBe(true);

    })

})