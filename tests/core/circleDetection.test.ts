import { connector } from "../../src/core/connections/Connector";
import { EngineConnections } from "../../src/core/connections/EngineConnections";
import { detectCircles } from "../../src/core/engine/Core";
import { logEngineNode1INPUT0, logEngineNode1OUTPUT0, starterEngineNodeOUTPUT0 } from "./predefined/ConnectionDetails";

describe("circle Detection - test", () => {

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

        const ret = detectCircles(connectionDict, "starterEngineNode");

        expect(ret).toEqual(res);

    })

})