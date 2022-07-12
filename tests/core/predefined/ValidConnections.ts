import { CONNECTION_TYPE, EngineConnections } from "../../../src/core/connections/EngineConnections";

export const simpleValidConnection: EngineConnections = {
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

export const addingTwoNumberConnection: EngineConnections = {
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
                    ioId: "addEngineNode1OUTPUT0",
                    nodeId: "addEngineNode1",
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
        }
    },
    output: {
        "addEngineNode1OUTPUT0": {
            self: {
                ioId: "addEngineNode1OUTPUT0",
                nodeId: "addEngineNode1",
                type: CONNECTION_TYPE.OUTPUT,
                index: 0,
            },
            connections: [
                {
                    ioId: "rootINPUT0",
                    nodeId: "root",
                    type: CONNECTION_TYPE.INPUT,
                    index: 0,
                }
            ]
        },
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