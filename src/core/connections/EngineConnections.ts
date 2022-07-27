
/**
 * Defines the relationship between EngineIO Ports
 */
export interface EngineConnections {
    input: IngoingConnections;
    output: OutgoingConnections;
}

export interface IoIdInfo {
    self: ConnectionDetails;
    connections: ConnectionDetails[];
}

/**
 * Defines ingoing connections for a Input Port
 * k: id of the input port (nodeId + INPUT + index)
 * ConnectionDetails are always OUTPUT Ports
 */
export interface IngoingConnections {
    [k: string]: IoIdInfo
}

/**
 * Defines outgoing connections for a Output Port
 * k: id of the output port (nodeID + OUTPUT + index)
 * ConnectionDetails are always INPUT Ports
 */
export interface OutgoingConnections {
    [k: string]: IoIdInfo
}

/**
 * Used to construct the Port Id and identify individual IO Ports
 * PortID: nodeId + type + index
 */
export interface ConnectionDetails {
    ioId: string;
    nodeId: string;
    type: CONNECTION_TYPE;
    index: number;
}

export enum CONNECTION_TYPE {
    INPUT = "INPUT",
    OUTPUT = "OUTPUT"
}