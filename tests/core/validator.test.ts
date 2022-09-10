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
        expect(validator({}, {}, emptyConnections, "empty")).toBe(false)
    })

    test("missing nodes", () => {
        expect(validator(configDict, {}, onlyFalseIndexConnection, "root")).toBe(false);
    })

    test("missing config", () => {
        expect(validator({}, engineNodeDict, onlyFalseIndexConnection, "root")).toBe(false);
    })

    test("missing connections", () => {
        expect(validator(configDict, engineNodeDict, emptyConnections, "root")).toBe(false);
    })


    test("missing outgoing connection", () => {
        expect(validator(configDict, engineNodeDict, missingOutgoingConnection, "root")).toBe(false);
    })

    test("missing ingoing connection", () => {
        expect(validator(configDict, engineNodeDict, missingIngoingConnection, "root")).toBe(false);
    })

    test("false outgoing connection  mapping", () => {
        expect(validator(configDict, engineNodeDict, falseOutgoingConnection, "root")).toBe(false);
    })

    test("false ingoing connection  mapping", () => {
        expect(validator(configDict, engineNodeDict, falseIngoingConnection, "root")).toBe(false);
    })

    test("false index mapping", () => {
        expect(validator(configDict, engineNodeDict, falseIndexMappingConnection, "root")).toBe(false);
    })

    test("false index mapping2", () => {
        expect(validator(configDict, engineNodeDict, falseIndexMappingConnection2, "root")).toBe(false);
    })

    test("too many outgoing connections with fake node", () => {
        expect(validator(configDict, engineNodeDict, tooManyOutgoingConnection, "root")).toBe(false);
    })

    test("too many outgoing connections with real node", () => {
        expect(validator(configDict, engineNodeDict, tooManyOutgoingConnection2, "root")).toBe(false);
    })

    test("too many ingoing connections with fake node", () => {
        expect(validator(configDict, engineNodeDict, tooManyIngoingConnection, "root")).toBe(false);
    })

    test("too many ingoing connections with real node", () => {
        expect(validator(configDict, engineNodeDict, tooManyIngoingConnection2, "root")).toBe(false);
    })

    test("non-existent input", () => {
        expect(validator(configDict, engineNodeDict, falseInputConnection, "root")).toBe(false);
    })

    test("false self id", () => {
        expect(validator(configDict, engineNodeDict, falseSelfIdConnection, "root")).toBe(false);
    })

    test("false self id 2", () => {
        expect(validator(configDict, engineNodeDict, falseSelfIdConnection2, "root")).toBe(false);
    })

    test("false self index", () => {
        expect(validator(configDict, engineNodeDict, falseSelfIndexConnection, "root")).toBe(false);
    })

    test("false self index 2", () => {
        expect(validator(configDict, engineNodeDict, falseSelfIndexConnection2, "root")).toBe(false);
    })

    test("false self index 3", () => {
        expect(validator(configDict, engineNodeDict, falseSelfIndexConnection3, "root")).toBe(false);
    })

    test("false self index 4", () => {
        expect(validator(configDict, engineNodeDict, falseSelfIndexConnection4, "root")).toBe(false);
    })

    test("only false index connection", () => {
        expect(validator(configDict, engineNodeDict, onlyFalseIndexConnection, "root")).toBe(false);
    })

    test("false self ioId", () => {
        expect(validator(configDict, engineNodeDict, falseSelfIoIdConnection, "root")).toBe(false);
    })

    test("false self ioId", () => {
        expect(validator(configDict, engineNodeDict, falseSelfIoIdConnection2, "root")).toBe(false);
    })

    test("double Entry ingoing connection", () => {
        expect(validator(configDict, engineNodeDict, doubleEntryIngoingConnection, "root")).toBe(false);
    })

    test("double Entry outgoing connection 2", () => {
        expect(validator(configDict, engineNodeDict, doubleEntryOutgoingConnection2, "root")).toBe(false);
    })

    test("dual double Entry connection 2", () => {
        expect(validator(configDict, engineNodeDict, dualDuplicateEntryOutgoingConnection, "root")).toBe(false);
    })

    test("invalid multi signal connection", () => {

        const connectionDict: EngineConnections = {
            input: {},
            output: {}
        }

        connector(signalEngineNode2OUTPUT0, signalEngineNode1INPUT0, connectionDict);
        connector(signalEngineNode2OUTPUT0, signalEngineNode3INPUT0, connectionDict);

        expect(validator(configDict, engineNodeDict, connectionDict, "root")).toBe(false);

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

        expect(validator(configDict, nodeDict, connectionDict, "starterEngineNode")).toBe(false);


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

        expect(validator(configDict, nodeDict, connectionDict, "starterEngineNode")).toBe(false);


    })

    test("input has invalid connection type to output", () => {

        const connectionDict: EngineConnections = {
            input: {},
            output: {}
        }

        connector(starterEngineNodeOUTPUT0, logEngineNode1INPUT0, connectionDict);

        connector(constFiveEngineNodeOUTPUT0, logEngineNode1INPUT1, connectionDict);

        expect(validator(configDict, engineNodeDict, connectionDict, "root")).toBe(false);


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

        expect(validator(configDict, engineNodeDict, connectionDict, "starterEngineNode")).toBe(false);

    })

})

describe("validator test - valid graphs", () => {
    test("simple valid connection", () => {
        expect(validator(configDict, engineNodeDict, simpleValidConnection, "root")).toBe(true);
    })

    test("adding Two numbers graph", () => {
        expect(validator(configDict, engineNodeDict, addingTwoNumberConnection, "root")).toBe(true);
    })

    test("adding three number graph", () => {
        expect(validator(configDict, engineNodeDict, addingThreeNumberConnection, "root")).toBe(true);
    })

    test("valid multi signal connection", () => {

        const connectionDict: EngineConnections = {
            input: {},
            output: {}
        }

        connector(signalEngineNode2OUTPUT0, signalEngineNode1INPUT0, connectionDict);
        connector(signalEngineNode3OUTPUT0, signalEngineNode1INPUT0, connectionDict);

        expect(validator(configDict, engineNodeDict, connectionDict, "root")).toBe(true);

    })
})