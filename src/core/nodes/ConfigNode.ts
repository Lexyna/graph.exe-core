import { EngineIO } from "../IO/EngineIO";

export enum updateType {
    NEVER,
    DYNAMIC,
    ALWAYS
}

/**
 * ConfigNode defines the functionality of the node.
 * id: Unique config id
 * isTrigger: If true, node will call next() action even if called as a dependency. Default: false
 * updateType: Determines how a dependency request should be handled. Default: NEVER
 *  NEVER: Only computes the node once when requested as a dependency
 *  DYNAMIC: Only computes the node when it's connected input values have been changed
 *  ALWAYS: Always recomputes the node upon dependency request
 * inputs: Ingoing connections of this node
 * outputs: Outgoing connections of this node
 * exe: function to execute when this node get triggered
 * onInit: Triggered when node is created (one time)
 * onDestroy: Triggered when node gets destroyed (one time) 
 */
export interface ConfigNode {
    id: string;
    isTrigger?: boolean;
    updateType?: updateType;
    inputs: EngineIO<any, any>[],
    outputs: EngineIO<any, any>[],
    exe: (...io: EngineIO<any, any>[]) => void;
    onInit?: (...io: EngineIO<any, any>[]) => void;
    onDestroy?: (...io: EngineIO<any, any>[]) => void;
}

export interface ConfigNodeDict {
    [k: string]: ConfigNode;
}