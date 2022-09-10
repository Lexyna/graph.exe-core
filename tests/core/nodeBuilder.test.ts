import { updateType } from "../../src/core/nodes/ConfigNode";
import { EngineNode } from "../../src/core/nodes/EngineNode";
import { nodeBuilder } from "../../src/core/nodes/nodeBuilder";
import { addNode, keyListenerNode, logNode, updateTypeALWAYSNode } from "./predefined/ConfigNodes";

describe("nodeBuilder test", () => {

    const nodeId = "testId";

    test("Build add node", () => {

        const engineNode: EngineNode = nodeBuilder(addNode, nodeId);

        expect(engineNode.id).toEqual(nodeId)
        expect(engineNode.configId).toEqual(addNode.id);
        expect(engineNode.updateType).toEqual(updateType.DYNAMIC);
        expect(engineNode.inputs.length).toBe(2);
        expect(engineNode.outputs.length).toBe(1)

    })

    test("Build log node", () => {

        const engineNode: EngineNode = nodeBuilder(logNode, nodeId);

        expect(engineNode.id).toEqual(nodeId)
        expect(engineNode.configId).toEqual(logNode.id);
        expect(engineNode.updateType).toEqual(updateType.NEVER);
        expect(engineNode.inputs.length).toBe(2);
        expect(engineNode.outputs.length).toBe(1)

    })

    test("Build keyListener node", () => {

        const engineNode: EngineNode = nodeBuilder(keyListenerNode, nodeId);

        expect(engineNode.id).toEqual(nodeId)
        expect(engineNode.configId).toEqual(keyListenerNode.id);
        expect(engineNode.updateType).toEqual(updateType.NEVER);
        expect(engineNode.inputs.length).toBe(0);
        expect(engineNode.outputs.length).toBe(1)

    })

    test("Build updateALWAYS node", () => {

        const engineNode: EngineNode = nodeBuilder(updateTypeALWAYSNode, nodeId);

        expect(engineNode.id).toEqual(nodeId)
        expect(engineNode.configId).toEqual(updateTypeALWAYSNode.id);
        expect(engineNode.updateType).toEqual(updateType.ALWAYS);
        expect(engineNode.inputs.length).toBe(1);
        expect(engineNode.outputs.length).toBe(1)

    })

})