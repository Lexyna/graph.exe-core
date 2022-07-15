import { CONNECTION_TYPE, EngineConnections } from "../../../src/core/connections/EngineConnections";

export const addingTwoNumberConnectionAfterSplit1: EngineConnections = {
    input: {
        "addEngineNode1INPUT0": {
            self: {
                ioId: "addEngineNode1INPUT0",
                nodeId: "addEngineNode1",
                type: CONNECTION_TYPE.INPUT,
                index: 0,
            },
            connections: [
                {
                    ioId: "constOneEngineNodeOUTPUT0",
                    nodeId: "constOneEngineNode",
                    type: CONNECTION_TYPE.OUTPUT,
                    index: 0
                }
            ]
        },
        "addEngineNode1INPUT1": {
            self: {
                ioId: "addEngineNode1INPUT1",
                nodeId: "addEngineNode1",
                type: CONNECTION_TYPE.INPUT,
                index: 1,
            },
            connections: [
                {
                    ioId: "constOneEngineNodeOUTPUT0",
                    nodeId: "constOneEngineNode",
                    type: CONNECTION_TYPE.OUTPUT,
                    index: 0
                }
            ]
        }
    },
    output: {
        "constOneEngineNodeOUTPUT0": {
            self: {
                ioId: "constOneEngineNodeOUTPUT0",
                nodeId: "constOneEngineNode",
                type: CONNECTION_TYPE.OUTPUT,
                index: 0,
            },
            connections: [
                {
                    ioId: "addEngineNode1INPUT0",
                    nodeId: "addEngineNode1",
                    type: CONNECTION_TYPE.INPUT,
                    index: 0,
                },
                {
                    ioId: "addEngineNode1INPUT1",
                    nodeId: "addEngineNode1",
                    type: CONNECTION_TYPE.INPUT,
                    index: 1,
                }
            ]
        }
    }
}

export const addingThreeNumberConnectionAfterSplit2: EngineConnections = {
    input: {
        "rootINPUT0": {
            self: {
                ioId: "rootINPUT0",
                nodeId: "root",
                type: CONNECTION_TYPE.INPUT,
                index: 0,
            },
            connections: [
                {
                    ioId: "addEngineNode2OUTPUT0",
                    nodeId: "addEngineNode2",
                    type: CONNECTION_TYPE.OUTPUT,
                    index: 0
                }
            ]
        },
        "addEngineNode1INPUT0": {
            self: {
                ioId: "addEngineNode1INPUT0",
                nodeId: "addEngineNode1",
                type: CONNECTION_TYPE.INPUT,
                index: 0,
            },
            connections: [
                {
                    ioId: "constOneEngineNodeOUTPUT0",
                    nodeId: "constOneEngineNode",
                    type: CONNECTION_TYPE.OUTPUT,
                    index: 0
                }
            ]
        },
        "addEngineNode1INPUT1": {
            self: {
                ioId: "addEngineNode1INPUT1",
                nodeId: "addEngineNode1",
                type: CONNECTION_TYPE.INPUT,
                index: 1,
            },
            connections: [
                {
                    ioId: "constOneEngineNodeOUTPUT0",
                    nodeId: "constOneEngineNode",
                    type: CONNECTION_TYPE.OUTPUT,
                    index: 0
                }
            ]
        },
        "addEngineNode2INPUT0": {
            self: {
                ioId: "addEngineNode2INPUT0",
                nodeId: "addEngineNode2",
                type: CONNECTION_TYPE.INPUT,
                index: 0,
            },
            connections: [
                {
                    ioId: "addEngineNode1OUTPUT0",
                    nodeId: "addEngineNode1",
                    type: CONNECTION_TYPE.INPUT,
                    index: 0
                }
            ]
        },
    },
    output: {
        "constOneEngineNodeOUTPUT0": {
            self: {
                ioId: "constOneEngineNodeOUTPUT0",
                nodeId: "constOneEngineNode",
                type: CONNECTION_TYPE.OUTPUT,
                index: 0
            },
            connections: [
                {
                    ioId: "addEngineNode1INPUT1",
                    nodeId: "addEngineNode1",
                    type: CONNECTION_TYPE.INPUT,
                    index: 1,
                },
                {
                    ioId: "addEngineNode1INPUT0",
                    nodeId: "addEngineNode1",
                    type: CONNECTION_TYPE.INPUT,
                    index: 0,
                }
            ]
        },
        "addEngineNode1OUTPUT0": {
            self: {
                ioId: "addEngineNode1OUTPUT0",
                nodeId: "addEngineNode1",
                type: CONNECTION_TYPE.OUTPUT,
                index: 0
            },
            connections: [
                {
                    ioId: "addEngineNode2INPUT0",
                    nodeId: "addEngineNode2",
                    type: CONNECTION_TYPE.INPUT,
                    index: 0,
                }
            ]
        },
        "addEngineNode2OUTPUT0": {
            self: {
                ioId: "addEngineNode2OUTPUT0",
                nodeId: "addEngineNode2",
                type: CONNECTION_TYPE.OUTPUT,
                index: 0
            },
            connections: [
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