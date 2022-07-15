import { ConnectionDetails, EngineConnections } from "../connections/EngineConnections";

/**
 *  Creates a new connection in the connection dict. returns true if connection successfully got added to the dict
 * @param outputDetails 
 * @param inputDetails
 * @param dict 
 */
export const connector = (outputDetails: ConnectionDetails, inputDetails: ConnectionDetails, dict: EngineConnections): boolean => {

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
        input.connections.push(outputDetails);
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
        output.connections.push(inputDetails);
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

        input.connections.push(outputDetails);
        output.connections.push(inputDetails);

        return true;
    }

    return false;
}