import { EngineConnections } from "../connections/EngineConnections";
import { ConfigNodeDict } from "../nodes/ConfigNode";
import { EngineNodeDict } from "../nodes/EngineNode";

/** 
 * One time graph will be triggered once and destroyed after successful execution 
 */
export const executeGraph = (
    config: ConfigNodeDict,
    nodes: EngineNodeDict,
    connections: EngineConnections,
    entry: string,
): void => {



}