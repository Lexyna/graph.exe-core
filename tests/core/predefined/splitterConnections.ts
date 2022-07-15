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