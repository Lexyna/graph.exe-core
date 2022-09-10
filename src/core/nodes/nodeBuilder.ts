import { ConfigNode, updateType } from "../nodes/ConfigNode";
import { EngineNode } from "../nodes/EngineNode";

/**
 * Functions that automatically builds a engineNode based from the passed configNode and a unique id
 * @param configNode Config node the engine node represents
 * @param id Unique id of the new engine node
 * @returns 
 */
export const nodeBuilder = (configNode: ConfigNode, id: string): EngineNode => {

    const node: EngineNode = {
        id: id,
        configId: configNode.id,
        updateType: configNode.updateType ? configNode.updateType : updateType.NEVER,
        inputs: configNode.inputs.map(io => { return { ...io } }),
        outputs: configNode.outputs.map(io => { return { ...io } })
    }

    return node;
}