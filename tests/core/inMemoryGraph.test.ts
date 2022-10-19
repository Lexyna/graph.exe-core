import { connector } from "../../src/core/connections/Connector"
import { EngineConnections } from "../../src/core/connections/EngineConnections"
import { createGraph, deleteGraph, getAllInMemoryGraphs } from "../../src/core/engine/IMG"
import { EngineNodeDict } from "../../src/core/nodes/EngineNode"
import { configDict, destroyLog, fakeListener, fakeListener2, initLog, resetAll, testLog, testValue } from "./predefined/ConfigNodes"
import { destroyEngineNode1INPUT0, incrementTestValueEngineNodeINPUT0, initDestroyEngineNodeINPUT0, initEngineNode1INPUT0, keyListenerEngineNode1OUTPUT0, keyListenerEngineNode2OUTPUT0, logEngineNode1INPUT0, logEngineNode1INPUT1, logEngineNode2INPUT0, logEngineNode2INPUT1, starterEngineNodeOUTPUT0, textHelloEngineNodeOUTPUT0, textWorldEngineNodeOUTPUT0 } from "./predefined/ConnectionDetails"
import { destroyEngineNode1, engineNodeDict, incrementTestValueEngineNode, initDestroyEngineNode, initEngineNode1, initializeNodeValues, keyListenerEngineNode1, keyListenerEngineNode2, logEngineNode1, logEngineNode2, starterEngineNode, textHelloEngineNode, textWorldEngineNode } from "./predefined/EngineNodes"
import { tooManyOutgoingConnection } from "./predefined/InvalidConnections"
import { simpleValidConnection } from "./predefined/ValidConnections"

describe("create and destroy IMG", () => {

    test("create and delete simple img", () => {

        const graphName: string = "test#1";

        createGraph(configDict, engineNodeDict, simpleValidConnection, graphName);

        expect(getAllInMemoryGraphs()[graphName]).not.toBe(undefined)

        deleteGraph(graphName);

        expect(getAllInMemoryGraphs()[graphName]).toBe(undefined)

    })

    test("create same graph twice", () => {

        const graphName: string = "test#1";

        const [g1, msg1] = createGraph(configDict, engineNodeDict, simpleValidConnection, graphName);

        const [g2, msg2] = createGraph(configDict, engineNodeDict, simpleValidConnection, graphName);

        expect(g1).toBe(true);
        expect(g2).toBe(false);

        expect(getAllInMemoryGraphs()[graphName]).not.toBe(undefined)

        deleteGraph(graphName);

        expect(getAllInMemoryGraphs()[graphName]).toBe(undefined)

    })

    test("create graph with invalid configuration", () => {

        const graphName: string = "test#1";

        const [ret, msg] = createGraph(configDict, engineNodeDict, tooManyOutgoingConnection, graphName);

        expect(ret).toBe(false);

        expect(getAllInMemoryGraphs()[graphName]).toBe(undefined)

        deleteGraph(graphName);

        expect(getAllInMemoryGraphs()[graphName]).toBe(undefined)

    })

})
describe("img listener tests", () => {

    let connectionDict: EngineConnections;

    const graphName = "inMemoryGraph";

    beforeEach(() => {
        connectionDict = {
            input: {},
            output: {}
        }

        resetAll();
        initializeNodeValues();
        initializeNodeValues();
    })

    //TODO: Create test for listener
    test("one listener, activated once", () => {

        const nodeDict: EngineNodeDict = {
            "keyListenerEngineNode1": keyListenerEngineNode1,
            "logEngineNode1": logEngineNode1,
            "textWorldEngineNode": textWorldEngineNode
        }

        const res: string[] = ["World"];

        connector(keyListenerEngineNode1OUTPUT0, logEngineNode1INPUT0, connectionDict);

        connector(textWorldEngineNodeOUTPUT0, logEngineNode1INPUT1, connectionDict);

        createGraph(configDict, nodeDict, connectionDict, graphName);

        expect(fakeListener).not.toBe(null);

        fakeListener();

        expect(testLog).toEqual(res);

        deleteGraph(graphName);

        expect(fakeListener).toBe(null);

    })

    test("one listener, activated trice", () => {

        const nodeDict: EngineNodeDict = {
            "keyListenerEngineNode1": keyListenerEngineNode1,
            "logEngineNode1": logEngineNode1,
            "textWorldEngineNode": textWorldEngineNode
        }

        const res: string[] = ["World", "World", "World"];

        connector(keyListenerEngineNode1OUTPUT0, logEngineNode1INPUT0, connectionDict);

        connector(textWorldEngineNodeOUTPUT0, logEngineNode1INPUT1, connectionDict);

        createGraph(configDict, nodeDict, connectionDict, graphName);

        expect(fakeListener).not.toBe(null);

        fakeListener();

        fakeListener();

        fakeListener();

        expect(testLog).toEqual(res);

        deleteGraph(graphName);

        expect(fakeListener).toBe(null);

    })

    test("two listeners, activated once", () => {

        const nodeDict: EngineNodeDict = {
            "keyListenerEngineNode1": keyListenerEngineNode1,
            "keyListenerEngineNode2": keyListenerEngineNode2,
            "logEngineNode1": logEngineNode1,
            "logEngineNode2": logEngineNode2,
            "textWorldEngineNode": textWorldEngineNode,
            "textHelloEngineNode": textHelloEngineNode,
        }

        const res: string[] = ["Hello ", "World"]

        connector(keyListenerEngineNode1OUTPUT0, logEngineNode1INPUT0, connectionDict);

        connector(textWorldEngineNodeOUTPUT0, logEngineNode1INPUT1, connectionDict);

        connector(keyListenerEngineNode2OUTPUT0, logEngineNode2INPUT0, connectionDict);

        connector(textHelloEngineNodeOUTPUT0, logEngineNode2INPUT1, connectionDict);

        createGraph(configDict, nodeDict, connectionDict, graphName);

        expect(fakeListener).not.toBe(null);
        expect(fakeListener2).not.toBe(null);

        fakeListener2();

        fakeListener();

        expect(testLog).toEqual(res);

        deleteGraph(graphName);

        expect(fakeListener).toBe(null);
        expect(fakeListener2).toBe(null);

    })

    test("two listeners, activated in alternating order", () => {

        const nodeDict: EngineNodeDict = {
            "keyListenerEngineNode1": keyListenerEngineNode1,
            "keyListenerEngineNode2": keyListenerEngineNode2,
            "logEngineNode1": logEngineNode1,
            "logEngineNode2": logEngineNode2,
            "textWorldEngineNode": textWorldEngineNode,
            "textHelloEngineNode": textHelloEngineNode,
        }

        const res: string[] = []

        for (let i = 0; i < 100; i++)
            if (i % 2 === 0)
                res.push("Hello ");
            else
                res.push("World");

        connector(keyListenerEngineNode1OUTPUT0, logEngineNode1INPUT0, connectionDict);

        connector(textWorldEngineNodeOUTPUT0, logEngineNode1INPUT1, connectionDict);

        connector(keyListenerEngineNode2OUTPUT0, logEngineNode2INPUT0, connectionDict);

        connector(textHelloEngineNodeOUTPUT0, logEngineNode2INPUT1, connectionDict);

        createGraph(configDict, nodeDict, connectionDict, graphName);

        expect(fakeListener).not.toBe(null);
        expect(fakeListener2).not.toBe(null);

        for (let i = 0; i < 100; i++) {
            if (i % 2 === 0)
                fakeListener2();
            else
                fakeListener();
        }

        expect(testLog).toEqual(res);

        deleteGraph(graphName);

        expect(fakeListener).toBe(null);
        expect(fakeListener2).toBe(null);

    })

    test("one listener, increases testValue a hundred times", () => {

        const nodeDict: EngineNodeDict = {
            "keyListenerEngineNode1": keyListenerEngineNode1,
            "incrementTestValueEngineNode": incrementTestValueEngineNode,
        }

        connector(keyListenerEngineNode1OUTPUT0, incrementTestValueEngineNodeINPUT0, connectionDict);


        createGraph(configDict, nodeDict, connectionDict, graphName);

        expect(fakeListener).not.toBe(null);

        for (let i = 0; i < 100; i++)
            fakeListener();

        expect(testValue).toEqual(100);

        deleteGraph(graphName);

        expect(fakeListener).toBe(null);

    })

})

describe("onInit & onDestroy tests for img", () => {

    let connectionDict: EngineConnections;

    const graphName = "img";

    beforeEach(() => {
        connectionDict = {
            input: {},
            output: {}
        }

        resetAll();
        initializeNodeValues();
    })

    test("test onInit method", () => {

        const nodeDict: EngineNodeDict = {
            "starterEngineNode": starterEngineNode,
            "initEngineNode1": initEngineNode1,
        }

        const res: string[] = ["init"];

        connector(starterEngineNodeOUTPUT0, initEngineNode1INPUT0, connectionDict);

        createGraph(configDict, nodeDict, connectionDict, graphName);

        expect(initLog).toEqual(res);

        deleteGraph(graphName);

    })

    test("test onDestroy method", () => {

        const nodeDict: EngineNodeDict = {
            "starterEngineNode": starterEngineNode,
            "destroyEngineNode1": destroyEngineNode1,
        }

        const res: string[] = ["destroy"];

        connector(starterEngineNodeOUTPUT0, destroyEngineNode1INPUT0, connectionDict);

        createGraph(configDict, nodeDict, connectionDict, graphName);

        deleteGraph(graphName);

        expect(destroyLog).toEqual(res);

    })

    test("test onDestroy method", () => {

        const nodeDict: EngineNodeDict = {
            "starterEngineNode": starterEngineNode,
            "initDestroyEngineNode": initDestroyEngineNode,
        }

        const resInit: string[] = ["init"];
        const resDestroy: string[] = ["destroy"];

        connector(starterEngineNodeOUTPUT0, initDestroyEngineNodeINPUT0, connectionDict);

        createGraph(configDict, nodeDict, connectionDict, graphName);

        expect(initLog).toEqual(resInit);

        deleteGraph(graphName);

        expect(destroyLog).toEqual(resDestroy);

    })

})

describe("multiple inMemoryGraphs", () => {

    let connectionDict1: EngineConnections;
    let connectionDict2: EngineConnections;

    const graphName1 = "inMemoryGraph";
    const graphName2 = "inMemoryGraph2";

    beforeEach(() => {
        connectionDict1 = {
            input: {},
            output: {}
        }

        connectionDict2 = {
            input: {},
            output: {}
        }

        resetAll();
        initializeNodeValues();
        initializeNodeValues();
    })

    test("two listeners, in two separate graphs", () => {

        const nodeDict1: EngineNodeDict = {
            "keyListenerEngineNode1": keyListenerEngineNode1,
            "logEngineNode1": logEngineNode1,
            "textWorldEngineNode": textWorldEngineNode,
        }

        const nodeDict2: EngineNodeDict = {
            "keyListenerEngineNode2": keyListenerEngineNode2,
            "logEngineNode2": logEngineNode2,
            "textHelloEngineNode": textHelloEngineNode,
        }

        const res: string[] = ["Hello ", "World"]

        connector(keyListenerEngineNode1OUTPUT0, logEngineNode1INPUT0, connectionDict1);

        connector(textWorldEngineNodeOUTPUT0, logEngineNode1INPUT1, connectionDict1);

        connector(keyListenerEngineNode2OUTPUT0, logEngineNode2INPUT0, connectionDict2);

        connector(textHelloEngineNodeOUTPUT0, logEngineNode2INPUT1, connectionDict2);

        createGraph(configDict, nodeDict1, connectionDict1, graphName1);

        expect(getAllInMemoryGraphs()[graphName1]).not.toBe(undefined);

        createGraph(configDict, nodeDict2, connectionDict2, graphName2);

        expect(fakeListener).not.toBe(null);
        expect(fakeListener2).not.toBe(null);

        fakeListener2();

        fakeListener();

        expect(testLog).toEqual(res);

        deleteGraph(graphName1);

        expect(getAllInMemoryGraphs()[graphName2]).not.toBe(undefined);

        deleteGraph(graphName2);

        expect(fakeListener).toBe(null);
        expect(fakeListener2).toBe(null);

    })

})