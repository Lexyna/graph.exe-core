import { ConnectionDetails } from "../connections/EngineConnections";
import { GraphExe } from "../engine/Core";
import { CON_MAPPING } from "./IOMapping";



/**
 * GraphIO adds a reference to the OneTimeGraph the io belongs to, to allow for port forwarding at runtime 
 */
export interface LogicIO<K, T> {
    type: string;
    mapping: CON_MAPPING;
    data: K;
    value: T;
    defaultValue: T;
    graph_ref: GraphExe;
    details: ConnectionDetails
}