import { EngineNode } from "../nodes/EngineNode";
import { ConnectionDetails, CONNECTION_TYPE } from "./EngineConnections";

/**
 *  nodePorts contains the ConnectionDetails of alle io ports for the node
 *  making it easier to handle large or at runtime generated nodes.
 *  The index of each connection Detail corresponds to the position of this io Port ion the node
 */
export interface NodePorts {
    nodeId: string,
    inputs: ConnectionDetails[],
    outputs: ConnectionDetails[],
}

/**
 *  Extractor the ConnectionDetails of all ioPorts from a (engine) node  
 * @param node The node to extract io ports from
 * @returns array of ConnectionDetails, containing an ordered list of Input/Output ConnectionDetails
 */
export const extractor = (node: EngineNode): NodePorts => {

    const nodePorts: NodePorts = {
        nodeId: node.id,
        inputs: [],
        outputs: []
    }

    const ioIn: ConnectionDetails[] = [];

    for (let i = 0; i < node.inputs.length; i++) {
        const detail: ConnectionDetails = {
            ioId: node.id + CONNECTION_TYPE.INPUT + i,
            nodeId: node.id,
            type: CONNECTION_TYPE.INPUT,
            index: i
        }
        ioIn.push(detail);
    }

    const ioOut: ConnectionDetails[] = [];

    for (let i = 0; i < node.outputs.length; i++) {
        const detail: ConnectionDetails = {
            ioId: node.id + CONNECTION_TYPE.OUTPUT + i,
            nodeId: node.id,
            type: CONNECTION_TYPE.OUTPUT,
            index: i
        }
        ioOut.push(detail);
    }

    nodePorts.inputs = ioIn;
    nodePorts.outputs = ioOut;

    return nodePorts;

}