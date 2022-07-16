import { ConnectionDetails, CONNECTION_TYPE, EngineConnections } from "./EngineConnections";

/**
 * Search all connections for the requested ioPort and returns a array with all found connections for this ioPort 
 * @param detail 
 * @param connections 
 * @returns 
 */
export const connectionFinder = (detail: ConnectionDetails, connections: EngineConnections): ConnectionDetails[] => {

    if (detail.type == CONNECTION_TYPE.OUTPUT)
        return searchInput(detail, connections);
    return searchOutput(detail, connections);
}

const searchInput = (detail: ConnectionDetails, connections: EngineConnections): ConnectionDetails[] => {

    const foundConnections: ConnectionDetails[] = [];

    Object.entries(connections.input).forEach(([key, value]) => {

        value.connections.forEach(io => {
            if (io.ioId === detail.ioId)
                foundConnections.push(value.self);
        })

    })

    return foundConnections;

}

const searchOutput = (detail: ConnectionDetails, connections: EngineConnections): ConnectionDetails[] => {

    const foundConnections: ConnectionDetails[] = [];

    Object.entries(connections.output).forEach(([key, value]) => {

        value.connections.forEach(io => {
            if (io.ioId === detail.ioId)
                foundConnections.push(value.self);
        })

    })

    return foundConnections;

}
