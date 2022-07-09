import { validator } from "../../src/core/engine/Validator"
import { configDict } from "./predefined/ConfigNodes"
import { doubleEntryIngoingConnection, doubleEntryOutgoingConnection2, dualDuplicateEntryOutgoingConnection, emptyConnections, falseIndexMappingConnection, falseIndexMappingConnection2, falseIngoingConnection, falseInputConnection, falseOutgoingConnection, falseSelfIdConnection, falseSelfIdConnection2, falseSelfIndexConnection, falseSelfIndexConnection2, falseSelfIndexConnection3, falseSelfIndexConnection4, falseSelfIoIdConnection, falseSelfIoIdConnection2, missingIngoingConnection, missingOutgoingConnection, onlyFalseIndexConnection, simpleValidConnection, tooManyIngoingConnection, tooManyIngoingConnection2, tooManyOutgoingConnection, tooManyOutgoingConnection2 } from "./predefined/Connections"
import { engineNodeDict } from "./predefined/EngineNodes"

describe("invalid graphs", () => {

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
})

describe("valid graphs", () => {
    test("simple valid connection", () => {
        expect(validator(configDict, engineNodeDict, simpleValidConnection, "root")).toBe(true);
    })
})