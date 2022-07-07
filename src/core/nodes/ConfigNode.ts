import { EngineIO } from "../IO/EngineIO";

/**
 * ConfigNode defines the functionality of the node.
 * id: Unique config id
 * autoUpdate: If true, node will always recompute upon being requested as a dependency. Default: false
 * inputs: Ingoing connections of this node
 * outputs: Outgoing connections of this node
 * exe: function to execute when this node get triggered
 * onInit: Triggered when node is created (one time)
 * onDestroy: Triggered when node gets destroyed (one time) 
 */
export interface ConfigNode {
    id: string;
    autoUpdate?: boolean;
    inputs: EngineIO<any, any>[],
    outputs: EngineIO<any, any>[],
    exe: (...io: EngineIO<any, any>[]) => void;
    onInit?: (...io: EngineIO<any, any>[]) => void;
    onDestroy?: (...io: EngineIO<any, any>[]) => void;
}