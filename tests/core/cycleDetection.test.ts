import { connector } from "../../src/core/connections/Connector";
import { EngineConnections } from "../../src/core/connections/EngineConnections";
import { dependencyCycleDetection, forwardCycleDetection } from "../../src/core/engine/Core";
import {
    addEngineNode1INPUT0,
    addEngineNode1INPUT1, addEngineNode1OUTPUT0, constTwoEngineNodeOUTPUT0, forEngineNode1INPUT0,
    forEngineNode1OUTPUT0,
    ifEngineNodeINPUT0,
    ifEngineNodeOUTPUT0,
    ifEngineNodeOUTPUT1,
    logEngineNode1INPUT0,
    logEngineNode1OUTPUT0,
    rootINPUT0,
    starterEngineNodeOUTPUT0
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

    test("dependency activation loop", () => {

    })

})

/**
 * Tests to detect and prevent cycles from dependencies.
 *  
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

})