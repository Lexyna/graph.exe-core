import { EngineIO } from "../IO/EngineIO";

/**
 * EngineNodes get passed to the core and execute the the function of their 'parent' config node. 
 * id: unique id of this node
 * configId: id of the corresponding 'parent' config node, containing the executable function
 * autoUpdate: If true, node will always recompute upon being requested as a dependency. Inherited from parent ConfigNode
 * inputs: Ingoing connections of this node
 * outputs: Outgoing connections of this node   
 */
export interface EngineNode {
    id: string;
    configId: string;
    autoUpdate: boolean;
    inputs: EngineIO<any, any>[];
    outputs: EngineIO<any, any>[];
}

export interface EngineNodeDict {
    [k: string]: EngineNode;
}