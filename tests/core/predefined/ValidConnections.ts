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