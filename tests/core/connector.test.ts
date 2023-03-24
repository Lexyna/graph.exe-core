import { connector } from "../../src/core/connections/Connector";
import { EngineConnections } from "../../src/core/connections/EngineConnections";
import { validator } from "../../src/core/engine/Validator";
import { configDict } from "./predefined/ConfigNodes";
import { addEngineNode1INPUT0, addEngineNode1INPUT1, addEngineNode1OUTPUT0, constFiveEngineNodeOUTPUT0, constOneEngineNodeOUTPUT0, constThreeEngineNodeOUTPUT0, constTwoEngineNodeOUTPUT0, logEngineNode1INPUT0, mulEngineNode1INPUT0, mulEngineNode1INPUT1, mulEngineNode1OUTPUT0, mulEngineNode2INPUT0, mulEngineNode2INPUT1, mulEngineNode2OUTPUT0, multiConAddEngineNodeINPUT0, rootINPUT0, starterEngineNodeOUTPUT0 } from "./predefined/ConnectionDetails";
import { connectToMultiConnect } from "./predefined/connectorTestsConnections";
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

        const [res, msg] = validator(configDict, engineNodeDict, connectionDict, "root");
        expect(res).toBe(true);

    })

    test("create multi output connection", () => {

        connector(addEngineNode1OUTPUT0, rootINPUT0, connectionDict);
        connector(constFiveEngineNodeOUTPUT0, addEngineNode1INPUT0, connectionDict);
        connector(constFiveEngineNodeOUTPUT0, addEngineNode1INPUT1, connectionDict);

        const [res, msg] = validator(configDict, engineNodeDict, connectionDict, "root");
        expect(res).toBe(true);
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

        const [res, msg] = validator(configDict, engineNodeDict, connectionDict, "root");
        expect(res).toBe(true);
    })

    test("create connection that already exists", () => {

        connector(starterEngineNodeOUTPUT0, logEngineNode1INPUT0, connectionDict);

        expect(connector(starterEngineNodeOUTPUT0, logEngineNode1INPUT0, connectionDict)).toBe(false);
    })

    test("connect const node to multiAddNode", () => {

        expect(connector(constOneEngineNodeOUTPUT0, multiConAddEngineNodeINPUT0, connectionDict)).toBe(true);

    })

    test("connect two const node to multiConnect", () => {

        expect(connector(constOneEngineNodeOUTPUT0, multiConAddEngineNodeINPUT0, connectionDict)).toBe(true);
        expect(connector(constTwoEngineNodeOUTPUT0, multiConAddEngineNodeINPUT0, connectionDict)).toBe(true);

    })

    test("connect const node + add node to multiConnect", () => {

        connector(constOneEngineNodeOUTPUT0, addEngineNode1INPUT0, connectionDict);
        connector(constOneEngineNodeOUTPUT0, addEngineNode1INPUT1, connectionDict);

        expect(connector(addEngineNode1OUTPUT0, multiConAddEngineNodeINPUT0, connectionDict)).toBe(true);
        expect(connector(constOneEngineNodeOUTPUT0, multiConAddEngineNodeINPUT0, connectionDict)).toBe(true);

        expect(connectionDict).toEqual(connectToMultiConnect);
    })

})