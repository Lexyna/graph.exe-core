import { CON_MAPPING } from "./IOMapping";

/**
 * EngineIO defines the data (and type of data) that travels between nodes, as well as define which connections are valid.
 * nodeId: is of the parent node
 * index: position (array) of the IOPort on the node
 * type: The type of this node. Can only connect to other types of the same node.
 * mapping: Defines how many in/out-going connections this port can have
 * data: Internal data this port can have
 * value: The data transmitted to another node
 */
export interface EngineIO<K, T> {
    nodeId: string;
    index: number;
    type: string;
    mapping: CON_MAPPING;
    data: K;
    value: T;
}