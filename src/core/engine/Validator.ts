import { EngineConnections } from "../connections/EngineConnections";
import { CON_MAPPING } from "../IO/IOMapping";
import { ConfigNodeDict } from "../nodes/ConfigNode";
import { EngineNodeDict } from "../nodes/EngineNode";

/**
 * Validates whatever a passed graph is valid, 'executable', or not
 * @param config  
 * @param nodes 
 * @param connections 
 * @param entry 
 * @returns boolean: true if Graph is executable, false otherwise
 */
export const validator = (
    config: ConfigNodeDict,
    nodes: EngineNodeDict,
    connections: EngineConnections,
    entry: string,
    isInMemoryGraph: boolean = false
): boolean => {

    if (!isInMemoryGraph && !nodes[entry])
        return false;

    let isValidConfig = true;

    /**
     * Checks if every node is mapped to existing config
     */
    Object.entries(nodes).forEach(([key, value]) => {
        if (!config[value.configId]) isValidConfig = false;
    })

    if (!isValidConfig) return false;

    if (Object.keys(connections.input).length === 0 ||
        Object.keys(connections.output).length === 0) return false;

    let isValidInputMapping = true;
    let isValidOutputMapping = true;

    /**
     *  Checks if mapping of each inout is correct and
     *  checks if every IngoingConnection exists and has a valid type
     */
    Object.entries(connections.input).forEach(([key, value]) => {

        if (!isValidInputMapping) return;

        if (value.connections.length == 0) isValidInputMapping = false;

        if (key !== value.self.nodeId + value.self.type + value.self.index ||
            key !== value.self.ioId) {
            isValidInputMapping = false;
            return;
        }

        if (!nodes[value.self.nodeId].inputs[value.self.index]) {
            isValidInputMapping = false;
            return;
        }

        if (nodes[value.self.nodeId].inputs[value.self.index].mapping == CON_MAPPING.SINGLE && value.connections.length > 1)
            isValidInputMapping = false;

        for (let io of value.connections)
            if (!connections.output[io.ioId]) isValidInputMapping = false;
            else if (!nodes[connections.output[io.ioId].self.nodeId].outputs[connections.output[io.ioId].self.index]) isValidInputMapping = false;
            else if (
                nodes[connections.output[io.ioId].self.nodeId].outputs[connections.output[io.ioId].self.index].type !=
                nodes[value.self.nodeId].inputs[value.self.index].type)
                isValidInputMapping = false;
    })

    if (!isValidInputMapping) return false;

    /**
     *  Checks if mapping of each inout is correct and
     *  checks if every OutgoingConnection exists and has a valid type
     */
    Object.entries(connections.output).forEach(([key, value]) => {

        if (!isValidOutputMapping) return;

        if (value.connections.length == 0) isValidOutputMapping = false;

        if (key !== value.self.nodeId + value.self.type + value.self.index ||
            key !== value.self.ioId) {
            isValidOutputMapping = false;
            return;
        }

        if (!nodes[value.self.nodeId].outputs[value.self.index]) {
            isValidOutputMapping = false;
            return;
        }

        if (nodes[value.self.nodeId].outputs[value.self.index].mapping == CON_MAPPING.SINGLE && value.connections.length > 1)
            isValidOutputMapping = false;

        for (let io of value.connections)
            if (!connections.input[io.ioId]) isValidOutputMapping = false;
    })

    if (!isValidOutputMapping) return false;

    let isValidConnection: boolean = true;

    /**
     * Checks if every Ingoing Connection has an opposite Outgoing Connection
     */
    Object.entries(connections.input).forEach(([key, value]) => {

        if (!isValidConnection) return;

        for (let io of value.connections) {

            if (!isValidConnection) return;

            let hasConnection: boolean = false;

            connections.output[io.ioId].connections.forEach(con => {

                if (hasConnection) return;

                if (con.nodeId == value.self.nodeId &&
                    con.index == value.self.index &&
                    con.type == value.self.type)
                    hasConnection = true;
            })

            if (!hasConnection) isValidConnection = false;
        }
    })

    let hasDuplicates: boolean = false;

    /**
     * Checks if Outgoing connections contain duplicates
     */
    Object.entries(connections.output).forEach(([key, value]) => {

        if (hasDuplicates) return;

        const tracker: { [k: string]: number } = {};

        for (let io of value.connections) {
            if (hasDuplicates) return;
            if (tracker[io.ioId]) hasDuplicates = true;
            tracker[io.ioId] = 1;
        }

    })

    if (hasDuplicates) return false;

    if (!isValidConnection) return false;

    return true;
}

