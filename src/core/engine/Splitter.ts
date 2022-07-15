import { ConnectionDetails, EngineConnections } from "../connections/EngineConnections";


/**
 * Removes a already existing connection in the connectionDict. Returns true if connection got successfully removed 
 * @param outputDetails 
 * @param inputDetails 
 * @param dict 
 * @returns 
 */
export const splitter = (outputDetails: ConnectionDetails, inputDetails: ConnectionDetails, dict: EngineConnections): boolean => {

    const input = dict.input[inputDetails.ioId];
    const output = dict.output[outputDetails.ioId];

    if (!input || !output)
        return false;

    input.connections.forEach((con, index) => {
        if (con.ioId === inputDetails.ioId)
            input.connections.splice(index, 1);
    })

    output.connections.forEach((con, index) => {
        if (con.ioId === outputDetails.ioId)
            output.connections.splice(index, 1);
    })

    return true;
}