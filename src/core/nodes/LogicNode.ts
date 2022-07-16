import { LogicIO } from "../IO/LogicIO";

/**
 * Similar to EngineNode, but store a OTG_IO instead of a Engine Node to work while executing the graph
 */
export interface LogicNode {
    id: string;
    autoUpdate: boolean;
    inputs: LogicIO<any, any>[];
    outputs: LogicIO<any, any>[];
    exe: (...io: LogicIO<any, any>[]) => void;
    onInit?: (...io: LogicIO<any, any>[]) => void;
    onDestroy?: (...io: LogicIO<any, any>[]) => void;
}

/**
 * Similar to EngineNodeDict but store OTGNodes instead
 */
export interface LogicNodeDict {
    [k: string]: LogicNode;
}