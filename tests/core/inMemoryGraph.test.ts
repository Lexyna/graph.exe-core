import { createGraph, deleteGraph, getAllInMemoryGraphs } from "../../src/core/engine/IMG"
import { configDict } from "./predefined/ConfigNodes"
import { engineNodeDict } from "./predefined/EngineNodes"
import { simpleValidConnection } from "./predefined/ValidConnections"

describe("create and destroy IMG", () => {

    test("create and delete simple img", () => {

        const graphName: string = "test#1";

        createGraph(configDict, engineNodeDict, simpleValidConnection, graphName);

        expect(getAllInMemoryGraphs()[graphName]).not.toBe(undefined)

        deleteGraph(graphName);

        expect(getAllInMemoryGraphs()[graphName]).toBe(undefined)

    })

})
describe("img listener tests", () => {

    //TODO: Create test for listener


})