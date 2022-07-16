import { connectionFinder } from "../../src/core/connections/ConnectionFinder"
import { connector } from "../../src/core/connections/Connector"
import { EngineConnections } from "../../src/core/connections/EngineConnections"
import { addEngineNode1INPUT0, addEngineNode1INPUT1, addEngineNode2INPUT1, constFiveEngineNodeOUTPUT0, constOneEngineNodeOUTPUT0, constThreeEngineNodeOUTPUT0, constTwoEngineNodeOUTPUT0, mulEngineNode1INPUT0, mulEngineNode1INPUT1, mulEngineNode1OUTPUT0, mulEngineNode2INPUT0, mulEngineNode2INPUT1, mulEngineNode2OUTPUT0, rootINPUT0, signalEngineNode1INPUT0, signalEngineNode2OUTPUT0, signalEngineNode3OUTPUT0 } from "./predefined/ConnectionDetails"
import { addingThreeNumberConnection, addingTwoNumberConnection, simpleValidConnection } from "./predefined/ValidConnections"

describe("ConnectionFinder - tests", () => {

    test("simple connection", () => {
        const res = [constOneEngineNodeOUTPUT0]
        expect(connectionFinder(rootINPUT0, simpleValidConnection)).toEqual(res);
    })

    test("simple connection 2", () => {
        const res = [rootINPUT0]
        expect(connectionFinder(constOneEngineNodeOUTPUT0, simpleValidConnection)).toEqual(res);
    })

    test("addingTwoNumberConnection 1", () => {

        const res = [addEngineNode1INPUT0, addEngineNode1INPUT1];
        expect(connectionFinder(constOneEngineNodeOUTPUT0, addingTwoNumberConnection)).toEqual(res);

    })

    test("addingThreeNumberConnection", () => {

        const res = [constOneEngineNodeOUTPUT0];
        expect(connectionFinder(addEngineNode2INPUT1, addingThreeNumberConnection)).toEqual(res);

    })

    test("create multiplying three number connection", () => {

        let connectionDict: EngineConnections = {
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

        const res1 = [mulEngineNode2OUTPUT0]
        const res2 = [mulEngineNode1OUTPUT0]
        const res3 = [constTwoEngineNodeOUTPUT0]
        const res4 = [constThreeEngineNodeOUTPUT0]
        const res5 = [constFiveEngineNodeOUTPUT0]

        expect(connectionFinder(rootINPUT0, connectionDict)).toEqual(res1);
        expect(connectionFinder(mulEngineNode2INPUT1, connectionDict)).toEqual(res2);
        expect(connectionFinder(mulEngineNode2INPUT0, connectionDict)).toEqual(res3);
        expect(connectionFinder(mulEngineNode1INPUT0, connectionDict)).toEqual(res4);
        expect(connectionFinder(mulEngineNode1INPUT1, connectionDict)).toEqual(res5);
    })

    test("valid multi signal connection", () => {

        const connectionDict: EngineConnections = {
            input: {},
            output: {}
        }

        connector(signalEngineNode2OUTPUT0, signalEngineNode1INPUT0, connectionDict);
        connector(signalEngineNode3OUTPUT0, signalEngineNode1INPUT0, connectionDict);

        const res = [signalEngineNode2OUTPUT0, signalEngineNode3OUTPUT0]

        expect(connectionFinder(signalEngineNode1INPUT0, connectionDict)).toEqual(res);

    })

})