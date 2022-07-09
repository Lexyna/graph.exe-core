import { CONNECTION_TYPE, EngineConnections } from "../../../src/core/connections/EngineConnections";

export const emptyConnections: EngineConnections = {
    input: {},
    output: {}
}

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

export const missingOutgoingConnection: EngineConnections = {
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
            connections: []
        }
    }
}

export const missingIngoingConnection: EngineConnections = {
    input: {
        "rootINPUT0": {
            self: {
                ioId: "rootINPUT0",
                nodeId: "root",
                type: CONNECTION_TYPE.INPUT,
                index: 0,
            },
            connections: []
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

export const falseOutgoingConnection: EngineConnections = {
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
                    ioId: "false",
                    nodeId: "false",
                    type: CONNECTION_TYPE.INPUT,
                    index: -1
                }
            ]
        }
    }
}

export const falseIngoingConnection: EngineConnections = {
    input: {
        "rootINPUT0": {
            self: {
                ioId: "rootINPUT0",
                nodeId: "root",
                type: CONNECTION_TYPE.INPUT,
                index: 0,
            },
            connections: [{
                ioId: "fake",
                nodeId: "fake",
                type: CONNECTION_TYPE.OUTPUT,
                index: -1
            }]
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

export const falseIndexMappingConnection: EngineConnections = {
    input: {
        "rootINPUT0": {
            self: {
                ioId: "rootINPUT0",
                nodeId: "root",
                type: CONNECTION_TYPE.INPUT,
                index: -1,
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

export const falseIndexMappingConnection2: EngineConnections = {
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
                    index: 2
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
                    index: 3,
                }
            ]
        }
    }
}

export const tooManyOutgoingConnection: EngineConnections = {
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
                },
                {
                    ioId: "fake",
                    nodeId: "fake",
                    type: CONNECTION_TYPE.INPUT,
                    index: -1,
                }
            ]
        }
    }
}

export const tooManyOutgoingConnection2: EngineConnections = {
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
                },
                {
                    ioId: "constTwoEngineNodeOUTPUT0",
                    nodeId: "constTwoEngineNode",
                    type: CONNECTION_TYPE.INPUT,
                    index: 0,
                }
            ]
        }
    }
}

export const tooManyIngoingConnection: EngineConnections = {
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
                },
                {
                    ioId: "fake",
                    nodeId: "fake",
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

export const tooManyIngoingConnection2: EngineConnections = {
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
                },
                {
                    ioId: "constTwoEngineNodeOUTPUT0",
                    nodeId: "constTwoEngineNode",
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

export const falseInputConnection: EngineConnections = {
    input: {
        "falseINPUT0": {
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

export const falseSelfIdConnection: EngineConnections = {
    input: {
        "rootINPUT0": {
            self: {
                ioId: "root",
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
                type: CONNECTION_TYPE.INPUT,
                index: 0
            },
            connections: [
                {
                    ioId: "rootINPUT0",
                    nodeId: "root",
                    type: CONNECTION_TYPE.OUTPUT,
                    index: 0,
                }
            ]
        }
    }
}

export const falseSelfIdConnection2: EngineConnections = {
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
        "falseID": {
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

export const falseSelfIndexConnection: EngineConnections = {
    input: {
        "rootINPUT0": {
            self: {
                ioId: "rootINPUT0",
                nodeId: "root",
                type: CONNECTION_TYPE.INPUT,
                index: 5,
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

export const falseSelfIndexConnection2: EngineConnections = {
    input: {
        "rootINPUT0": {
            self: {
                ioId: "rootINPUT0",
                nodeId: "root",
                type: CONNECTION_TYPE.INPUT,
                index: -1,
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

export const falseSelfIndexConnection3: EngineConnections = {
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
                index: 5
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

export const falseSelfIndexConnection4: EngineConnections = {
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
                index: -1
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

export const onlyFalseIndexConnection: EngineConnections = {
    input: {
        "rootINPUT0": {
            self: {
                ioId: "rootINPUT0",
                nodeId: "root",
                type: CONNECTION_TYPE.INPUT,
                index: -1,
            },
            connections: [
                {
                    ioId: "constOneEngineNodeOUTPUT0",
                    nodeId: "constOneEngineNode",
                    type: CONNECTION_TYPE.OUTPUT,
                    index: -1
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
                index: -1
            },
            connections: [
                {
                    ioId: "rootINPUT0",
                    nodeId: "root",
                    type: CONNECTION_TYPE.INPUT,
                    index: -1,
                }
            ]
        }
    }
}

export const falseSelfIoIdConnection: EngineConnections = {
    input: {
        "rootINPUT0": {
            self: {
                ioId: "none",
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

export const falseSelfIoIdConnection2: EngineConnections = {
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
                ioId: "none",
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

export const doubleEntryIngoingConnection: EngineConnections = {
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
                },
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

export const doubleEntryOutgoingConnection2: EngineConnections = {
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
                },
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

export const dualDuplicateEntryOutgoingConnection: EngineConnections = {
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
                },
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
                },
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