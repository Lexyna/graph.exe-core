import { CONNECTION_TYPE } from "../connections/EngineConnections";
import { LogicIO } from "../IO/LogicIO";
import { ConfigNodeDict, updateType } from "../nodes/ConfigNode";
import { EngineNodeDict } from "../nodes/EngineNode";
import { LogicNode, LogicNodeDict } from "../nodes/LogicNode";
import { GraphExe } from "./Core";

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
                graph_ref: graph,
                defaultValue: config[value.configId].inputs[index].value,
                details: {
                    ioId: value.id + CONNECTION_TYPE.INPUT + index,
                    nodeId: value.id,
                    type: CONNECTION_TYPE.INPUT,
                    index: index
                }
            }
        })

        const graphIoOutput: LogicIO<any, any>[] = value.outputs.map((io, index) => {
            return {
                type: io.type,
                mapping: io.mapping,
                data: io.data,
                value: io.value,
                defaultValue: config[value.configId].outputs[index].value,
                graph_ref: graph,
                details: {
                    ioId: value.id + CONNECTION_TYPE.OUTPUT + index,
                    nodeId: value.id,
                    type: CONNECTION_TYPE.OUTPUT,
                    index: index
                }
            }
        })

        const trigger = config[value.configId].isTrigger;
        const update = config[value.configId].updateType;

        const logicNode: LogicNode = {
            id: value.id,
            isTrigger: !(trigger === undefined) ? trigger : false,
            updateType: !(update === undefined) ? update : updateType.NEVER,
            computed: false,
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