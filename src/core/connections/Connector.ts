import { ConnectionDetails, EngineConnections } from "./EngineConnections";

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

    //Input is currently registered in the dict
    if (inputExists && !outputExists) {
        input.connections.push(outputDetails);
        dict.output[outputDetails.ioId] = {
            self: outputDetails,
            connections: [inputDetails]
        }
        return true;
    }

    //Output is currently registered in the dict
    if (!inputExists && outputExists) {
        dict.input[inputDetails.ioId] = {
            self: inputDetails,
            connections: [outputDetails]
        }
        output.connections.push(inputDetails);
        return true;
    }

    //Output and input are currently registered in dicts
    const inputConnections: ConnectionDetails[] = dict.input[inputDetails.ioId].connections;
    const outputConnections: ConnectionDetails[] = dict.output[outputDetails.ioId].connections;

    for (var i = 0; i < inputConnections.length; i++)
        if (inputConnections[i].ioId == outputDetails.ioId)
            return false;


    for (var i = 0; i < outputConnections.length; i++)
        if (outputConnections[i].ioId == inputDetails.ioId)
            return false;

    dict.input[inputDetails.ioId].connections.push(outputDetails);
    dict.output[outputDetails.ioId].connections.push(inputDetails);

    return true;
}