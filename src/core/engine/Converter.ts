import { LogicIO } from "../IO/LogicIO";
import { ConfigNodeDict } from "../nodes/ConfigNode";
import { EngineNodeDict } from "../nodes/EngineNode";
import { LogicNode, LogicNodeDict } from "../nodes/LogicNode";
import { GraphExe } from "./OTG";


/**
 * Converts EngineNodes to LogicNodes in in order for runtime port forwarding to work
 * @param graph 
 * @param nodeDict 
 */
export const nodeConverter = (graph: GraphExe, config: ConfigNodeDict, nodeDict: EngineNodeDict): LogicNodeDict => {

    const graphNodeDict: LogicNodeDict = {};

    Object.entries(nodeDict).forEach(([key, value]) => {

        const graphIoInput: LogicIO<any, any>[] = value.inputs.map((io, index) => {
            return {
                type: io.type,
                mapping: io.mapping,
                data: io.data,
                value: io.value,
                graph_ref: graph
            }
        })

        const graphIoOutput: LogicIO<any, any>[] = value.outputs.map((io, index) => {
            return {
                type: io.type,
                mapping: io.mapping,
                data: io.data,
                value: io.value,
                graph_ref: graph
            }
        })

        const update = config[value.configId].autoUpdate;

        const logicNode: LogicNode = {
            id: value.id,
            autoUpdate: !(update === undefined) ? update : true,
            inputs: graphIoInput,
            outputs: graphIoOutput,
            exe: config[value.configId].exe,
            onInit: config[value.configId].onInit,
            onDestroy: config[value.configId].onDestroy
        }

        graphNodeDict[key] = logicNode;

    })

    return graphNodeDict;

} 