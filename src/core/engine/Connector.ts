import { ConnectionDetails, EngineConnections } from "../connections/EngineConnections";

/**
 *  creates a new connection in the connection dict. returns true if connection successfully got added to the dict
 * @param inputDetails 
 * @param outputDetails 
 * @param dict 
 */
export const connector = (inputDetails: ConnectionDetails, outputDetails: ConnectionDetails, dict: EngineConnections): boolean => {

    let inputExists = true;
    let outputExists = true;

    const input = dict.input[inputDetails.ioId];
    const output = dict.output[outputDetails.ioId];

    if (!input)
        inputExists = false;
    if (!output)
        outputExists = false;

    //Neither io is currently registered in the dict
    if (!inputExists && !outputExists) {
        dict.input[inputDetails.ioId] = {
            self: inputDetails,
            connections: [outputDetails]
        }
        dict.output[outputDetails.ioId] = {
            self: outputDetails,
            connections: [inputDetails]
        }
        return true;
    }

    //Input is currently registered in dict
    if (inputExists && !outputExists) {
        input.connections.concat(outputDetails);
        dict.output[outputDetails.ioId] = {
            self: outputDetails,
            connections: [inputDetails]
        }
        return true;
    }

    //Output is currently registered in dict
    if (!inputExists && outputExists) {
        dict.input[inputDetails.ioId] = {
            self: inputDetails,
            connections: [outputDetails]
        }
        output.connections.concat(inputDetails);
        return true;
    }

    //Input and output are registered 
    if (inputExists && outputExists) {

        let isDuplicate = false;

        input.connections.forEach(con => {
            if (con.ioId === inputDetails.ioId) isDuplicate = true
        })

        output.connections.forEach(con => {
            if (con.ioId === outputDetails.ioId) isDuplicate = true
        })

        if (isDuplicate) return false;

        input.connections.concat(outputDetails);
        output.connections.concat(inputDetails);

        return true;
    }

    return false;
}