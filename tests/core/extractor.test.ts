import { extractor, NodePorts } from "../../src/core/connections/Extractor"
import { addEngineNode1INPUT0, addEngineNode1INPUT1, addEngineNode1OUTPUT0, constZeroEngineNodeOUTPUT0, divEngineNode2INPUT0, divEngineNode2INPUT1, divEngineNode2OUTPUT0, rootINPUT0 } from "./predefined/ConnectionDetails"
import { addEngineNode1, constZeroEngineNode, divEngineNode2, rootEngineNode } from "./predefined/EngineNodes"

describe("Extractor tests", () => {

    test("rootNode test", () => {

        const res: NodePorts = {
            nodeId: "root",
            inputs: [rootINPUT0],
            outputs: []
        }

        expect(extractor(rootEngineNode)).toEqual(res);

    })

    test("const nodeTest", () => {

        const res: NodePorts = {
            nodeId: "constZeroEngineNode",
            inputs: [],
            outputs: [constZeroEngineNodeOUTPUT0]
        }

        expect(extractor(constZeroEngineNode)).toEqual(res);

    })

    test("add node1 test", () => {

        const res: NodePorts = {
            nodeId: "addEngineNode1",
            inputs: [addEngineNode1INPUT0, addEngineNode1INPUT1],
            outputs: [addEngineNode1OUTPUT0]
        }

        expect(extractor(addEngineNode1)).toEqual(res);

    })

    test("div node2 test", () => {

        const res: NodePorts = {
            nodeId: "divEngineNode2",
            inputs: [divEngineNode2INPUT0, divEngineNode2INPUT1],
            outputs: [divEngineNode2OUTPUT0]
        }

        expect(extractor(divEngineNode2)).toEqual(res);

    })

    test("wrong indexed div node2 test", () => {

        const res: NodePorts = {
            nodeId: "divEngineNode2",
            inputs: [divEngineNode2INPUT1, divEngineNode2INPUT0],
            outputs: [divEngineNode2OUTPUT0]
        }

        expect(extractor(divEngineNode2)).not.toEqual(res);

    })

    test("empty arrays", () => {

        const res: NodePorts = {
            nodeId: "constZeroEngineNode",
            inputs: [],
            outputs: []
        }

        expect(extractor(constZeroEngineNode)).not.toEqual(res);

    })

})