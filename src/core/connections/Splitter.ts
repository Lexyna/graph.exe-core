import { ConnectionDetails, EngineConnections } from "./EngineConnections";


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
        if (con.ioId === outputDetails.ioId)
            input.connections.splice(index, 1);
    })

    output.connections.forEach((con, index) => {
        if (con.ioId === inputDetails.ioId)
            output.connections.splice(index, 1);
    })

    //If connections is empty, remove entry in dict
    if (input.connections.length === 0)
        delete dict.input[inputDetails.ioId];
    if (output.connections.length === 0)
        delete dict.output[outputDetails.ioId];

    return true;
}