import { connector } from "../../src/core/connections/Connector"
import { CONNECTION_TYPE, EngineConnections } from "../../src/core/connections/EngineConnections"
import { validator } from "../../src/core/engine/Validator"
import { EngineNodeDict } from "../../src/core/nodes/EngineNode"
import { configDict } from "./predefined/ConfigNodes"
import { constFiveEngineNodeOUTPUT0, incrementTestValueEngineNodeINPUT0, incrementTestValueEngineNodeOUTPUT0, logEngineNode1INPUT0, logEngineNode1INPUT1, logEngineNode1OUTPUT0, signalEngineNode1INPUT0, signalEngineNode2OUTPUT0, signalEngineNode3INPUT0, signalEngineNode3OUTPUT0, starterEngineNodeOUTPUT0 } from "./predefined/ConnectionDetails"
import { engineNodeDict, incrementTestValueEngineNode, starterEngineNode } from "./predefined/EngineNodes"
import {
    doubleEntryIngoingConnection,
    doubleEntryOutgoingConnection2,
    dualDuplicateEntryOutgoingConnection,
    emptyConnections, falseIndexMappingConnection,
    falseIndexMappingConnection2,
    falseIngoingConnection,
    falseInputConnection,
    falseOutgoingConnection,
    falseSelfIdConnection,
    falseSelfIdConnection2,
    falseSelfIndexConnection,
    falseSelfIndexConnection2,
    falseSelfIndexConnection3,
    falseSelfIndexConnection4,
    falseSelfIoIdConnection,
    falseSelfIoIdConnection2,
    missingIngoingConnection,
    missingOutgoingConnection,
    onlyFalseIndexConnection,
    tooManyIngoingConnection,
    tooManyIngoingConnection2,
    tooManyOutgoingConnection,
    tooManyOutgoingConnection2
} from "./predefined/InvalidConnections"
import { addingThreeNumberConnection, addingTwoNumberConnection, simpleValidConnection } from "./predefined/ValidConnections"

describe("validator test - invalid graphs", () => {

    test("Invalid entry", () => {
        const [res, msg] = validator({}, {}, emptyConnections, "empty")
        expect(res).toBe(false)
    })

    test("missing nodes", () => {
        const [res, msg] = validator(configDict, {}, onlyFalseIndexConnection, "root");
        expect(res).toBe(false);
    })

    test("missing config", () => {
        const [res, msg] = validator({}, engineNodeDict, onlyFalseIndexConnection, "root");
        expect(res).toBe(false);
    })

    test("missing connections", () => {
        const [res, msg] = validator(configDict, engineNodeDict, emptyConnections, "root");
        expect(res).toBe(false);
    })


    test("missing outgoing connection", () => {
        const [res, msg] = validator(configDict, engineNodeDict, missingOutgoingConnection, "root");
        expect(res).toBe(false);
    })

    test("missing ingoing connection", () => {
        const [res, msg] = validator(configDict, engineNodeDict, missingIngoingConnection, "root")
        expect(res).toBe(false);
    })

    test("false outgoing connection  mapping", () => {
        const [res, msg] = validator(configDict, engineNodeDict, falseOutgoingConnection, "root")
        expect(res).toBe(false);
    })

    test("false ingoing connection  mapping", () => {
        const [res, msg] = validator(configDict, engineNodeDict, falseIngoingConnection, "root");
        expect(res).toBe(false);
    })

    test("false index mapping", () => {
        const [res, msg] = validator(configDict, engineNodeDict, falseIndexMappingConnection, "root");
        expect(res).toBe(false);
    })

    test("false index mapping2", () => {
        const [res, msg] = validator(configDict, engineNodeDict, falseIndexMappingConnection2, "root");
        expect(res).toBe(false);
    })

    test("too many outgoing connections with fake node", () => {
        const [res, msg] = validator(configDict, engineNodeDict, tooManyOutgoingConnection, "root");
        expect(res).toBe(false);
    })

    test("too many outgoing connections with real node", () => {
        const [res, msg] = validator(configDict, engineNodeDict, tooManyOutgoingConnection2, "root")
        expect(res).toBe(false);
    })

    test("too many ingoing connections with fake node", () => {
        const [res, msg] = validator(configDict, engineNodeDict, tooManyIngoingConnection, "root");
        expect(res).toBe(false);
    })

    test("too many ingoing connections with real node", () => {
        const [res, msg] = validator(configDict, engineNodeDict, tooManyIngoingConnection2, "root")
        expect(res).toBe(false);
    })

    test("non-existent input", () => {
        const [res, msg] = validator(configDict, engineNodeDict, falseInputConnection, "root")
        expect(res).toBe(false);
    })

    test("false self id", () => {
        const [res, msg] = validator(configDict, engineNodeDict, falseSelfIdConnection, "root")
        expect(res).toBe(false);
    })

    test("false self id 2", () => {
        const [res, msg] = validator(configDict, engineNodeDict, falseSelfIdConnection2, "root");
        expect(res).toBe(false);
    })

    test("false self index", () => {
        const [res, msg] = validator(configDict, engineNodeDict, falseSelfIndexConnection, "root");
        expect(res).toBe(false);
    })

    test("false self index 2", () => {
        const [res, msg] = validator(configDict, engineNodeDict, falseSelfIndexConnection2, "root");
        expect(res).toBe(false);
    })

    test("false self index 3", () => {
        const [res, msg] = validator(configDict, engineNodeDict, falseSelfIndexConnection3, "root")
        expect(res).toBe(false);
    })

    test("false self index 4", () => {
        const [res, msg] = validator(configDict, engineNodeDict, falseSelfIndexConnection4, "root");
        expect(res).toBe(false);
    })

    test("only false index connection", () => {
        const [res, msg] = validator(configDict, engineNodeDict, onlyFalseIndexConnection, "root");
        expect(res).toBe(false);
    })

    test("false self ioId", () => {
        const [res, msg] = validator(configDict, engineNodeDict, falseSelfIoIdConnection, "root");
        expect(res).toBe(false);
    })

    test("false self ioId", () => {
        const [res, msg] = validator(configDict, engineNodeDict, falseSelfIoIdConnection2, "root")
        expect(res).toBe(false);
    })

    test("double Entry ingoing connection", () => {
        const [res, msg] = validator(configDict, engineNodeDict, doubleEntryIngoingConnection, "root");
        expect(res).toBe(false);
    })

    test("double Entry outgoing connection 2", () => {
        const [res, msg] = validator(configDict, engineNodeDict, doubleEntryOutgoingConnection2, "root");
        expect(res).toBe(false);
    })

    test("dual double Entry connection 2", () => {
        const [res, msg] = validator(configDict, engineNodeDict, dualDuplicateEntryOutgoingConnection, "root");
        expect(res).toBe(false);
    })

    test("invalid multi signal connection", () => {

        const connectionDict: EngineConnections = {
            input: {},
            output: {}
        }

        connector(signalEngineNode2OUTPUT0, signalEngineNode1INPUT0, connectionDict);
        connector(signalEngineNode2OUTPUT0, signalEngineNode3INPUT0, connectionDict);

        const [res, msg] = validator(configDict, engineNodeDict, connectionDict, "root");
        expect(res).toBe(false);

    })

    test("missing input Node", () => {

        const nodeDict: EngineNodeDict = {
            "starterEngineNode": starterEngineNode,
            "incrementTestValueEngineNode": incrementTestValueEngineNode
        }

        const connectionDict: EngineConnections = {
            input: {},
            output: {}
        }

        connector(starterEngineNodeOUTPUT0, incrementTestValueEngineNodeINPUT0, connectionDict);

        connector(incrementTestValueEngineNodeOUTPUT0, logEngineNode1INPUT0, connectionDict);

        const [res, msg] = validator(configDict, nodeDict, connectionDict, "starterEngineNode");
        expect(res).toBe(false);

    })

    test("missing output Node", () => {

        const nodeDict: EngineNodeDict = {
            "starterEngineNode": starterEngineNode,
            "incrementTestValueEngineNode": incrementTestValueEngineNode,
        }

        const connectionDict: EngineConnections = {
            input: {},
            output: {}
        }

        connector(starterEngineNodeOUTPUT0, incrementTestValueEngineNodeINPUT0, connectionDict);

        connector(logEngineNode1OUTPUT0, incrementTestValueEngineNodeINPUT0, connectionDict);

        const [res, msg] = validator(configDict, nodeDict, connectionDict, "starterEngineNode");
        expect(res).toBe(false);
    })

    test("input has invalid connection type to output", () => {

        const connectionDict: EngineConnections = {
            input: {},
            output: {}
        }

        connector(starterEngineNodeOUTPUT0, logEngineNode1INPUT0, connectionDict);

        connector(constFiveEngineNodeOUTPUT0, logEngineNode1INPUT1, connectionDict);

        const [res, msg] = validator(configDict, engineNodeDict, connectionDict, "root");
        expect(res).toBe(false);
    })

    test("output has wrong index", () => {

        const connectionDict: EngineConnections = {
            input: {},
            output: {
                "starterEngineNodeOUTPUT1": {
                    self: {
                        ioId: "starterEngineNodeOUTPUT1",
                        nodeId: "starterEngineNode",
                        type: CONNECTION_TYPE.OUTPUT,
                        index: 1
                    }, connections: [
                        {
                            ioId: "rootINPUT0",
                            nodeId: "root",
                            type: CONNECTION_TYPE.INPUT,
                            index: 0,
                        }
                    ]
                }
            }
        }

        connector(starterEngineNodeOUTPUT0, logEngineNode1INPUT0, connectionDict);

        const [res, msg] = validator(configDict, engineNodeDict, connectionDict, "starterEngineNode");
        expect(res).toBe(false);
    })

})

describe("validator test - valid graphs", () => {
    test("simple valid connection", () => {
        const [res, msg] = validator(configDict, engineNodeDict, simpleValidConnection, "root");
        expect(res).toBe(true);
    })

    test("adding Two numbers graph", () => {
        const [res, msg] = validator(configDict, engineNodeDict, addingTwoNumberConnection, "root");
        expect(res).toBe(true);
    })

    test("adding three number graph", () => {
        const [res, msg] = validator(configDict, engineNodeDict, addingThreeNumberConnection, "root");
        expect(res).toBe(true);
    })

    test("valid multi signal connection", () => {

        const connectionDict: EngineConnections = {
            input: {},
            output: {}
        }

        connector(signalEngineNode2OUTPUT0, signalEngineNode1INPUT0, connectionDict);
        connector(signalEngineNode3OUTPUT0, signalEngineNode1INPUT0, connectionDict);

        const [res, msg] = validator(configDict, engineNodeDict, connectionDict, "root");
        expect(res).toBe(true);
    })
})