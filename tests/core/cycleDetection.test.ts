import { connector } from "../../src/core/connections/Connector";
import { EngineConnections } from "../../src/core/connections/EngineConnections";
import { dependencyCycleDetection, forwardCycleDetection } from "../../src/core/engine/Core";
import {
    addEngineNode1INPUT0,
    addEngineNode1INPUT1, addEngineNode1OUTPUT0, addEngineNode2INPUT0, addEngineNode2INPUT1, addEngineNode2OUTPUT0, constFiveEngineNodeOUTPUT0, constTwoEngineNodeOUTPUT0, forEngineNode1INPUT0,
    forEngineNode1OUTPUT0,
    forEngineNode1OUTPUT1,
    ifEngineNodeINPUT0,
    ifEngineNodeOUTPUT0,
    ifEngineNodeOUTPUT1,
    logEngineNode1INPUT0,
    logEngineNode1INPUT1,
    logEngineNode1OUTPUT0,
    logEngineNode2INPUT0,
    logEngineNode2OUTPUT0,
    mulEngineNode1INPUT0,
    mulEngineNode1INPUT1,
    mulEngineNode1OUTPUT0,
    numberToStringConverterEngineNode1INPUT0,
    numberToStringConverterEngineNode1OUTPUT0,
    rootINPUT0,
    starterEngineNodeOUTPUT0,
    subEngineNode1INPUT0,
    subEngineNode1INPUT1,
    subEngineNode1OUTPUT0
} from "./predefined/ConnectionDetails";

/**
 * Tests to detects and prevent cycles based on the next() action at runtime.
 *  Prevents endless dependency calls between nodes
 */
describe("forward cycle Detection - test", () => {

    let connectionDict: EngineConnections;

    interface CalleeDict {
        [k: string]: number
    }

    beforeEach(() => {
        connectionDict = {
            input: {},
            output: {}
        }
    })

    test("simple circular graph", () => {

        const res: CalleeDict = {
            "logEngineNode1INPUT0": 0
        }

        connector(starterEngineNodeOUTPUT0, logEngineNode1INPUT0, connectionDict);

        connector(logEngineNode1OUTPUT0, logEngineNode1INPUT0, connectionDict);

        const ret = forwardCycleDetection(connectionDict, "starterEngineNode");

        expect(ret).toEqual(res);

    })

    test("endless for loop", () => {

        const res: CalleeDict = {
            "forEngineNode1INPUT0": 0
        }

        connector(starterEngineNodeOUTPUT0, forEngineNode1INPUT0, connectionDict);

        connector(forEngineNode1OUTPUT0, ifEngineNodeINPUT0, connectionDict);

        connector(ifEngineNodeOUTPUT0, forEngineNode1INPUT0, connectionDict);

        const ret = forwardCycleDetection(connectionDict, "starterEngineNode")

        expect(ret).toEqual(res)

    })

    test("simple double loop", () => {

        const res: CalleeDict = {
            "forEngineNode1INPUT0": 0,
            "ifEngineNodeINPUT0": 0
        }

        connector(starterEngineNodeOUTPUT0, forEngineNode1INPUT0, connectionDict);

        connector(forEngineNode1OUTPUT0, ifEngineNodeINPUT0, connectionDict);

        connector(ifEngineNodeOUTPUT0, forEngineNode1INPUT0, connectionDict);

        connector(ifEngineNodeOUTPUT1, ifEngineNodeINPUT0, connectionDict);

        const ret = forwardCycleDetection(connectionDict, "starterEngineNode");

        expect(ret).toEqual(res);

    })

    test("3 loops", () => {

        const res: CalleeDict = {
            "forEngineNode1INPUT0": 0,
            "logEngineNode1INPUT0": 0
        }

        connector(starterEngineNodeOUTPUT0, forEngineNode1INPUT0, connectionDict);

        connector(forEngineNode1OUTPUT0, logEngineNode1INPUT0, connectionDict);

        connector(logEngineNode1OUTPUT0, forEngineNode1INPUT0, connectionDict);

        connector(logEngineNode1OUTPUT0, ifEngineNodeINPUT0, connectionDict);

        connector(ifEngineNodeOUTPUT0, forEngineNode1INPUT0, connectionDict);

        connector(ifEngineNodeOUTPUT1, logEngineNode1INPUT0, connectionDict);

        const ret = forwardCycleDetection(connectionDict, "starterEngineNode");

        expect(ret).toEqual(res)

    })

    test("Entry node loop", () => {

        const res: CalleeDict = {
            "forEngineNode1INPUT0": 0,
            "logEngineNode1INPUT0": 0,
            "ifEngineNodeINPUT0": 0
        }

        connector(forEngineNode1OUTPUT0, logEngineNode1INPUT0, connectionDict);

        connector(logEngineNode1OUTPUT0, forEngineNode1INPUT0, connectionDict);

        connector(logEngineNode1OUTPUT0, ifEngineNodeINPUT0, connectionDict);

        connector(ifEngineNodeOUTPUT0, ifEngineNodeINPUT0, connectionDict);

        connector(ifEngineNodeOUTPUT1, logEngineNode1INPUT0, connectionDict);

        const ret = forwardCycleDetection(connectionDict, "forEngineNode1")

        expect(ret).toEqual(res);

    })

    test("indirect forward loop", () => {

        const res: CalleeDict = {
            "logEngineNode1INPUT0": 0,
        }

        connector(starterEngineNodeOUTPUT0, logEngineNode1INPUT0, connectionDict);

        connector(numberToStringConverterEngineNode1OUTPUT0, logEngineNode1INPUT1, connectionDict);

        connector(forEngineNode1OUTPUT1, numberToStringConverterEngineNode1INPUT0, connectionDict);

        connector(forEngineNode1OUTPUT0, logEngineNode1INPUT0, connectionDict);

        connector(logEngineNode1OUTPUT0, forEngineNode1INPUT0, connectionDict);

        const ret = forwardCycleDetection(connectionDict, "starterEngineNode");

        expect(ret).toEqual(res);

    })

    test("advanced indirect forward loop", () => {

        const res: CalleeDict = {
            "logEngineNode1INPUT0": 0,
        }

        connector(starterEngineNodeOUTPUT0, logEngineNode1INPUT0, connectionDict);

        connector(logEngineNode1OUTPUT0, ifEngineNodeINPUT0, connectionDict);

        connector(ifEngineNodeOUTPUT0, logEngineNode2INPUT0, connectionDict);

        connector(logEngineNode2OUTPUT0, forEngineNode1INPUT0, connectionDict);

        connector(forEngineNode1OUTPUT0, logEngineNode1INPUT0, connectionDict);

        const ret = forwardCycleDetection(connectionDict, "starterEngineNode");

        expect(ret).toEqual(res);

    })

    test("advanced indirect forward loop 2", () => {

        const res: CalleeDict = {
            "ifEngineNodeINPUT0": 0,
        }

        connector(starterEngineNodeOUTPUT0, logEngineNode1INPUT0, connectionDict);

        connector(logEngineNode1OUTPUT0, ifEngineNodeINPUT0, connectionDict);

        connector(ifEngineNodeOUTPUT0, logEngineNode2INPUT0, connectionDict);

        connector(logEngineNode2OUTPUT0, forEngineNode1INPUT0, connectionDict);

        connector(forEngineNode1OUTPUT0, ifEngineNodeINPUT0, connectionDict);

        const ret = forwardCycleDetection(connectionDict, "starterEngineNode");

        expect(ret).toEqual(res);

    })

})

/**
 * Tests to detect and prevent cycles from dependencies. 
 */
describe("dependency cycle detection - tests", () => {

    let connectionDict: EngineConnections;
    interface CalleeDict {
        [k: string]: number
    }

    beforeEach(() => {
        connectionDict = {
            input: {},
            output: {}
        }
    })

    test("simple dependency loop", () => {

        const res = true;

        connector(addEngineNode1OUTPUT0, rootINPUT0, connectionDict);

        connector(constTwoEngineNodeOUTPUT0, addEngineNode1INPUT1, connectionDict);

        connector(addEngineNode1OUTPUT0, addEngineNode1INPUT0, connectionDict);

        const ret = dependencyCycleDetection(connectionDict, "root");

        expect(ret).toEqual(res);

    })

    test("dependency loop over two nodes", () => {

        const res = true;

        connector(mulEngineNode1OUTPUT0, rootINPUT0, connectionDict);

        connector(addEngineNode1OUTPUT0, mulEngineNode1INPUT0, connectionDict);

        connector(addEngineNode2OUTPUT0, mulEngineNode1INPUT1, connectionDict);

        connector(constFiveEngineNodeOUTPUT0, addEngineNode1INPUT0, connectionDict);

        connector(constTwoEngineNodeOUTPUT0, addEngineNode1INPUT1, connectionDict);

        connector(addEngineNode1OUTPUT0, addEngineNode2INPUT0, connectionDict);

        connector(subEngineNode1OUTPUT0, addEngineNode2INPUT1, connectionDict);

        connector(constTwoEngineNodeOUTPUT0, subEngineNode1INPUT0, connectionDict);

        connector(mulEngineNode1OUTPUT0, subEngineNode1INPUT1, connectionDict);

        const ret = dependencyCycleDetection(connectionDict, "root");

        expect(ret).toEqual(res);

    })

    test("simple no loop graph", () => {

        const res = false;

        connector(constTwoEngineNodeOUTPUT0, addEngineNode1INPUT0, connectionDict);

        connector(constTwoEngineNodeOUTPUT0, addEngineNode1INPUT1, connectionDict);

        connector(addEngineNode1OUTPUT0, rootINPUT0, connectionDict);

        const ret = dependencyCycleDetection(connectionDict, "root");

        expect(ret).toEqual(res);

    })

    test("no dependency loop", () => {

        const res = false;

        connector(mulEngineNode1OUTPUT0, rootINPUT0, connectionDict);

        connector(addEngineNode1OUTPUT0, mulEngineNode1INPUT0, connectionDict);

        connector(addEngineNode2OUTPUT0, mulEngineNode1INPUT1, connectionDict);

        connector(constFiveEngineNodeOUTPUT0, addEngineNode1INPUT0, connectionDict);

        connector(constTwoEngineNodeOUTPUT0, addEngineNode1INPUT1, connectionDict);

        connector(addEngineNode1OUTPUT0, addEngineNode2INPUT0, connectionDict);

        connector(subEngineNode1OUTPUT0, addEngineNode2INPUT1, connectionDict);

        connector(constTwoEngineNodeOUTPUT0, subEngineNode1INPUT0, connectionDict);

        connector(constTwoEngineNodeOUTPUT0, subEngineNode1INPUT1, connectionDict);

        const ret = dependencyCycleDetection(connectionDict, "root");

        expect(ret).toEqual(res);
    })

})