import { connector } from "../../src/core/connections/Connector";
import { EngineConnections } from "../../src/core/connections/EngineConnections";
import { executeGraph } from "../../src/core/engine/OTG";
import { configDict, resetTestLog, resetTestString, resetTestValue, testLog, testString, testValue } from "./predefined/ConfigNodes";
import { addEngineNode1INPUT0, addEngineNode1INPUT1, addEngineNode1OUTPUT0, addEngineNode2INPUT0, addEngineNode2INPUT1, addEngineNode2OUTPUT0, constFiveEngineNodeOUTPUT0, constFourEngineNodeOUTPUT0, constOneEngineNodeOUTPUT0, constThreeEngineNodeOUTPUT0, constTwoEngineNodeOUTPUT0, divEngineNode1INPUT0, divEngineNode1INPUT1, divEngineNode1OUTPUT0, divEngineNode2INPUT0, divEngineNode2INPUT1, divEngineNode2OUTPUT0, forEngineNode1INPUT0, forEngineNode1OUTPUT0, forEngineNode1OUTPUT1, forEngineNodeTriggerOUTPUT0, forEngineNodeTriggerOUTPUT1, ifEngineNode2INPUT0, ifEngineNode2INPUT1, ifEngineNode2OUTPUT1, ifEngineNodeINPUT0, ifEngineNodeINPUT1, ifEngineNodeOUTPUT0, ifEngineNodeOUTPUT1, incrementTestValueEngineNode2INPUT0, incrementTestValueEngineNode2OUTPUT0, incrementTestValueEngineNode2OUTPUT1, incrementTestValueEngineNodeINPUT0, incrementTestValueEngineNodeOUTPUT0, incrementTestValueEngineNodeOUTPUT1, logEngineNode1INPUT0, logEngineNode1INPUT1, logEngineNode1OUTPUT0, logEngineNode2INPUT0, logEngineNode2INPUT1, mulEngineNode1INPUT0, mulEngineNode1INPUT1, mulEngineNode1OUTPUT0, mulEngineNode2INPUT0, mulEngineNode2INPUT1, mulEngineNode2OUTPUT0, numberToStringConverterEngineNode1INPUT0, numberToStringConverterEngineNode1OUTPUT0, rootINPUT0, starterEngineNodeOUTPUT0, subEngineNode1INPUT0, subEngineNode1INPUT1, subEngineNode1OUTPUT0, subEngineNode2INPUT0, subEngineNode2INPUT1, subEngineNode2OUTPUT0, textCombineEngineNode1INPUT0, textCombineEngineNode1INPUT1, textHelloEngineNodeOUTPUT0, textWorldEngineNodeOUTPUT0, updateTypeALWAYSEngineNodeOUTPUT0, updateTypeDYNAMICEngineNodeINPUT0, updateTypeDYNAMICEngineNodeOUTPUT0, updateTypeNEVEREngineNodeINPUT0, updateTypeNEVEREngineNodeOUTPUT0 } from "./predefined/ConnectionDetails";
import { engineNodeDict, initializeNodeValues } from "./predefined/EngineNodes";
import { addingThreeNumberConnection, addingTwoNumberConnection, simpleValidConnection } from "./predefined/ValidConnections";

describe("otg dependency graph test", () => {

    beforeEach(() => {

        resetTestValue();
        resetTestString();
        initializeNodeValues();

    })

    test("simple const 5 connection", () => {
        executeGraph(configDict, engineNodeDict, simpleValidConnection, "root");
        expect(testValue).toBe(1)
    })

    test("addTwoNumber connection", () => {
        executeGraph(configDict, engineNodeDict, addingTwoNumberConnection, "root");
        expect(testValue).toBe(2)
    })

    test("addThreeNumbers connection", () => {
        executeGraph(configDict, engineNodeDict, addingThreeNumberConnection, "root");
        expect(testValue).toBe(3)
    })

    test("create multiplying three number connection", () => {

        const connectionDict: EngineConnections = {
            input: {},
            output: {}
        }

        //connect  result form mul Node 2 to root
        connector(mulEngineNode2OUTPUT0, rootINPUT0, connectionDict);

        //connect result from mul node 1 with mul node 2
        connector(mulEngineNode1OUTPUT0, mulEngineNode2INPUT1, connectionDict);

        //connect const 2 with mul node 2
        connector(constTwoEngineNodeOUTPUT0, mulEngineNode2INPUT0, connectionDict);

        //connect const 3 with mul node 1
        connector(constThreeEngineNodeOUTPUT0, mulEngineNode1INPUT0, connectionDict);

        //connect const 5 with mul node 1
        connector(constFiveEngineNodeOUTPUT0, mulEngineNode1INPUT1, connectionDict);

        executeGraph(configDict, engineNodeDict, connectionDict, "root");
        expect(testValue).toBe(30)

    })

    test("complex arithmetic calculation", () => {

        const connectionDict: EngineConnections = {
            input: {},
            output: {}
        }

        //connect res from mul Node 2 to root
        connector(mulEngineNode2OUTPUT0, rootINPUT0, connectionDict);

        //connect sub Engine 2 output to mulEngine input
        connector(subEngineNode2OUTPUT0, mulEngineNode2INPUT0, connectionDict);

        //connect add Engine 1 output to mulEngine Input 1
        connector(addEngineNode1OUTPUT0, mulEngineNode2INPUT1, connectionDict);

        //connect add engine 2 output to add Engine 1 input 1
        connector(addEngineNode2OUTPUT0, addEngineNode1INPUT0, connectionDict);

        //connect mul engine 1 output to add engine 1
        connector(mulEngineNode1OUTPUT0, addEngineNode1INPUT1, connectionDict);

        //connect const one output to sub engine 2
        connector(constOneEngineNodeOUTPUT0, subEngineNode2INPUT0, connectionDict);

        //connect const five to sub engine 2
        connector(constFiveEngineNodeOUTPUT0, subEngineNode2INPUT1, connectionDict);

        //connect const five to add engine 2
        connector(constFiveEngineNodeOUTPUT0, addEngineNode2INPUT0, connectionDict);

        //connect const three to add engine 2
        connector(constThreeEngineNodeOUTPUT0, addEngineNode2INPUT1, connectionDict);

        //connect const four to mul engine 1
        connector(constFourEngineNodeOUTPUT0, mulEngineNode1INPUT0, connectionDict);

        //connect const two to mul engine 1
        connector(constTwoEngineNodeOUTPUT0, mulEngineNode1INPUT1, connectionDict);

        // ((4 * 2) + ( 5 + 3 )) * (1 - 5) = -64
        executeGraph(configDict, engineNodeDict, connectionDict, "root");
        expect(testValue).toBe(-64)

    })

    test("complex arithmetic calculation 2", () => {

        const connectionDict: EngineConnections = {
            input: {},
            output: {}
        }

        connector(divEngineNode2OUTPUT0, rootINPUT0, connectionDict);

        connector(mulEngineNode2OUTPUT0, divEngineNode2INPUT0, connectionDict);

        connector(subEngineNode1OUTPUT0, divEngineNode2INPUT1, connectionDict);

        connector(divEngineNode1OUTPUT0, mulEngineNode2INPUT0, connectionDict);

        connector(divEngineNode1OUTPUT0, subEngineNode1INPUT0, connectionDict);

        connector(mulEngineNode1OUTPUT0, divEngineNode1INPUT0, connectionDict);

        connector(constTwoEngineNodeOUTPUT0, mulEngineNode1INPUT0, connectionDict);

        connector(constFiveEngineNodeOUTPUT0, mulEngineNode1INPUT1, connectionDict);

        connector(addEngineNode2OUTPUT0, divEngineNode1INPUT1, connectionDict);

        connector(addEngineNode1OUTPUT0, addEngineNode2INPUT0, connectionDict);

        connector(constThreeEngineNodeOUTPUT0, addEngineNode2INPUT1, connectionDict);

        connector(constTwoEngineNodeOUTPUT0, addEngineNode1INPUT0, connectionDict);

        connector(addEngineNode1OUTPUT0, subEngineNode1INPUT1, connectionDict);

        connector(constThreeEngineNodeOUTPUT0, mulEngineNode2INPUT1, connectionDict);

        connector(constFiveEngineNodeOUTPUT0, addEngineNode1INPUT1, connectionDict);

        //((2*5)/(5+2+3))*3)/(1-7)
        executeGraph(configDict, engineNodeDict, connectionDict, "root");
        expect(testValue).toBe(-0.5)

    })

    test("simple string concat", () => {

        const connectionDict: EngineConnections = {
            input: {},
            output: {}
        }

        connector(textHelloEngineNodeOUTPUT0, textCombineEngineNode1INPUT0, connectionDict);
        connector(textWorldEngineNodeOUTPUT0, textCombineEngineNode1INPUT1, connectionDict);

        executeGraph(configDict, engineNodeDict, connectionDict, "textCombineEngineNode1");
        expect(testString).toBe("Hello World")
    })

    test("simple string concat reverse", () => {

        const connectionDict: EngineConnections = {
            input: {},
            output: {}
        }

        connector(textWorldEngineNodeOUTPUT0, textCombineEngineNode1INPUT0, connectionDict);
        connector(textHelloEngineNodeOUTPUT0, textCombineEngineNode1INPUT1, connectionDict);

        executeGraph(configDict, engineNodeDict, connectionDict, "textCombineEngineNode1");
        expect(testString).toBe("WorldHello ")
    })

})

describe("otg executive graph test", () => {

    let connectionDict: EngineConnections;

    beforeEach(() => {
        connectionDict = {
            input: {},
            output: {}
        }

        resetTestValue();
        resetTestString();
        resetTestLog();
        initializeNodeValues();
    })

    test("for loop log", () => {

        const res: string[] = []

        for (let i = 0; i < 100; i++)
            res.push(i.toString())

        connector(forEngineNode1OUTPUT0, logEngineNode1INPUT0, connectionDict);

        connector(forEngineNode1OUTPUT1, numberToStringConverterEngineNode1INPUT0, connectionDict);

        connector(numberToStringConverterEngineNode1OUTPUT0, logEngineNode1INPUT1, connectionDict)

        executeGraph(configDict, engineNodeDict, connectionDict, "forEngineNode1");
        expect(testLog).toEqual(res);
    })

    test("for loop log from starter node", () => {

        const res: string[] = []

        for (let i = 0; i < 100; i++)
            res.push(i.toString())

        connector(starterEngineNodeOUTPUT0, forEngineNode1INPUT0, connectionDict);

        connector(forEngineNode1OUTPUT0, logEngineNode1INPUT0, connectionDict);

        connector(forEngineNode1OUTPUT1, numberToStringConverterEngineNode1INPUT0, connectionDict);

        connector(numberToStringConverterEngineNode1OUTPUT0, logEngineNode1INPUT1, connectionDict)

        executeGraph(configDict, engineNodeDict, connectionDict, "starterEngineNode");
        expect(testLog).toEqual(res);

    })

    test("for loop log with arithmetics from starter node", () => {

        const res: string[] = []

        for (let i = 0; i < 100; i++)
            res.push((i * 2).toString())

        connector(starterEngineNodeOUTPUT0, forEngineNode1INPUT0, connectionDict);

        connector(forEngineNode1OUTPUT0, logEngineNode1INPUT0, connectionDict);

        connector(forEngineNode1OUTPUT1, mulEngineNode1INPUT0, connectionDict);

        connector(constTwoEngineNodeOUTPUT0, mulEngineNode1INPUT1, connectionDict);

        connector(mulEngineNode1OUTPUT0, numberToStringConverterEngineNode1INPUT0, connectionDict);

        connector(numberToStringConverterEngineNode1OUTPUT0, logEngineNode1INPUT1, connectionDict)

        executeGraph(configDict, engineNodeDict, connectionDict, "starterEngineNode");
        expect(testLog).toEqual(res);

    })

    test("if log", () => {

        const res: String[] = [];

        for (let i = 0; i < 100; i++) {
            if (i % 2 === 0) res.push("World")
            else res.push("Hello ")
        }

        connector(forEngineNode1OUTPUT0, ifEngineNodeINPUT0, connectionDict);

        connector(forEngineNode1OUTPUT1, ifEngineNodeINPUT1, connectionDict);

        connector(ifEngineNodeOUTPUT0, logEngineNode1INPUT0, connectionDict);

        connector(textWorldEngineNodeOUTPUT0, logEngineNode1INPUT1, connectionDict);

        connector(ifEngineNodeOUTPUT1, logEngineNode2INPUT0, connectionDict);

        connector(textHelloEngineNodeOUTPUT0, logEngineNode2INPUT1, connectionDict);

        executeGraph(configDict, engineNodeDict, connectionDict, "forEngineNode1");
        expect(testLog).toEqual(res);

    })

    test("branching path", () => {

        connector(starterEngineNodeOUTPUT0, incrementTestValueEngineNodeINPUT0, connectionDict);

        connector(incrementTestValueEngineNodeOUTPUT0, ifEngineNodeINPUT0, connectionDict);

        connector(incrementTestValueEngineNodeOUTPUT1, ifEngineNodeINPUT1, connectionDict);

        connector(ifEngineNodeOUTPUT0, incrementTestValueEngineNode2INPUT0, connectionDict);

        executeGraph(configDict, engineNodeDict, connectionDict, "starterEngineNode");

        expect(testValue).toBe(1);

    })

    test("branching path 2", () => {

        connector(starterEngineNodeOUTPUT0, incrementTestValueEngineNodeINPUT0, connectionDict);

        connector(incrementTestValueEngineNodeOUTPUT0, ifEngineNodeINPUT0, connectionDict);

        connector(incrementTestValueEngineNodeOUTPUT1, ifEngineNodeINPUT1, connectionDict);

        connector(ifEngineNodeOUTPUT1, incrementTestValueEngineNode2INPUT0, connectionDict);

        executeGraph(configDict, engineNodeDict, connectionDict, "starterEngineNode");

        expect(testValue).toBe(2);

    })


    test("graph with dependency request not triggering next() action", () => {

        connector(starterEngineNodeOUTPUT0, ifEngineNodeINPUT0, connectionDict);

        connector(ifEngineNodeOUTPUT1, incrementTestValueEngineNodeINPUT0, connectionDict);

        connector(forEngineNode1OUTPUT1, ifEngineNodeINPUT1, connectionDict);

        connector(forEngineNode1OUTPUT0, incrementTestValueEngineNode2INPUT0, connectionDict);

        executeGraph(configDict, engineNodeDict, connectionDict, "starterEngineNode");
        expect(testValue).toBe(1);

    })

    test("graph with dependency request not triggering next() action 2", () => {

        connector(starterEngineNodeOUTPUT0, ifEngineNodeINPUT0, connectionDict);

        connector(ifEngineNodeOUTPUT0, incrementTestValueEngineNodeINPUT0, connectionDict);

        connector(forEngineNode1OUTPUT1, ifEngineNodeINPUT1, connectionDict);

        connector(forEngineNode1OUTPUT0, incrementTestValueEngineNode2INPUT0, connectionDict);

        executeGraph(configDict, engineNodeDict, connectionDict, "starterEngineNode");
        expect(testValue).toBe(0);

    })

    test("graph with dependency request triggering next() action", () => {

        connector(starterEngineNodeOUTPUT0, ifEngineNodeINPUT0, connectionDict);

        connector(ifEngineNodeOUTPUT0, incrementTestValueEngineNodeINPUT0, connectionDict);

        connector(forEngineNodeTriggerOUTPUT1, ifEngineNodeINPUT1, connectionDict);

        connector(forEngineNodeTriggerOUTPUT0, incrementTestValueEngineNode2INPUT0, connectionDict);

        executeGraph(configDict, engineNodeDict, connectionDict, "starterEngineNode");
        expect(testValue).toBe(100);

    })

})

describe("otg executive graph with forward loops", () => {

    let connectionDict: EngineConnections;

    beforeEach(() => {
        connectionDict = {
            input: {},
            output: {}
        }

        resetTestValue();
        resetTestString();
        resetTestLog();
        initializeNodeValues();
    })

    test("otg with simple forward loop", () => {


        connector(starterEngineNodeOUTPUT0, incrementTestValueEngineNodeINPUT0, connectionDict);

        connector(incrementTestValueEngineNodeOUTPUT0, ifEngineNodeINPUT0, connectionDict);

        connector(incrementTestValueEngineNodeOUTPUT1, ifEngineNodeINPUT1, connectionDict);

        //this connects the loop
        connector(ifEngineNodeOUTPUT1, incrementTestValueEngineNodeINPUT0, connectionDict);

        executeGraph(configDict, engineNodeDict, connectionDict, "starterEngineNode");

        expect(testValue).toBe(2);

    })

    test("otg with simple forward loop 2", () => {

        connector(forEngineNode1OUTPUT0, incrementTestValueEngineNodeINPUT0, connectionDict);

        connector(incrementTestValueEngineNodeOUTPUT0, ifEngineNodeINPUT0, connectionDict);

        connector(incrementTestValueEngineNodeOUTPUT1, ifEngineNodeINPUT1, connectionDict);

        //this connects the loop
        connector(ifEngineNodeOUTPUT0, incrementTestValueEngineNodeINPUT0, connectionDict);

        executeGraph(configDict, engineNodeDict, connectionDict, "forEngineNode1");

        expect(testValue).toEqual(199);

    })

    test("otg with simple forward loop 3", () => {

        const res: string[] = [];

        for (let i = 0; i < 100; i++) {
            res.push(i.toString())
            if (i != 0)
                res.push(i.toString());
        }

        connector(forEngineNode1OUTPUT0, incrementTestValueEngineNodeINPUT0, connectionDict);

        connector(incrementTestValueEngineNodeOUTPUT0, logEngineNode1INPUT0, connectionDict);

        connector(forEngineNode1OUTPUT1, numberToStringConverterEngineNode1INPUT0, connectionDict);

        connector(numberToStringConverterEngineNode1INPUT0, logEngineNode1INPUT1, connectionDict);

        connector(logEngineNode1OUTPUT0, ifEngineNodeINPUT0, connectionDict);

        connector(incrementTestValueEngineNodeOUTPUT1, ifEngineNodeINPUT1, connectionDict);

        //this connects the loop
        connector(ifEngineNodeOUTPUT0, incrementTestValueEngineNodeINPUT0, connectionDict);

        executeGraph(configDict, engineNodeDict, connectionDict, "forEngineNode1");

        expect(testLog).toEqual(res);
        expect(testValue).toEqual(199);

    })

    test("otg with two forward loops", () => {

        connector(starterEngineNodeOUTPUT0, incrementTestValueEngineNodeINPUT0, connectionDict);

        connector(incrementTestValueEngineNodeOUTPUT0, ifEngineNodeINPUT0, connectionDict);

        connector(incrementTestValueEngineNodeOUTPUT1, ifEngineNodeINPUT1, connectionDict);

        connector(ifEngineNodeOUTPUT1, incrementTestValueEngineNodeINPUT0, connectionDict);

        connector(ifEngineNodeOUTPUT0, incrementTestValueEngineNode2INPUT0, connectionDict);

        connector(incrementTestValueEngineNode2OUTPUT0, ifEngineNode2INPUT0, connectionDict);

        connector(incrementTestValueEngineNode2OUTPUT1, ifEngineNode2INPUT1, connectionDict);

        //this connects the loop
        connector(ifEngineNode2OUTPUT1, incrementTestValueEngineNode2INPUT0, connectionDict);

        executeGraph(configDict, engineNodeDict, connectionDict, "starterEngineNode");

        expect(testValue).toEqual(4);

    })

    test("branching path with forward loop", () => {

        connector(starterEngineNodeOUTPUT0, incrementTestValueEngineNodeINPUT0, connectionDict);

        connector(incrementTestValueEngineNodeOUTPUT0, ifEngineNodeINPUT0, connectionDict);

        connector(incrementTestValueEngineNodeOUTPUT1, ifEngineNodeINPUT1, connectionDict);

        connector(ifEngineNodeOUTPUT0, incrementTestValueEngineNode2INPUT0, connectionDict);

        //this connects the loop
        connector(ifEngineNodeOUTPUT1, incrementTestValueEngineNodeINPUT0, connectionDict);

        executeGraph(configDict, engineNodeDict, connectionDict, "starterEngineNode");

        expect(testValue).toBe(3);

    })

})

describe("node update type tests", () => {

    let connectionDict: EngineConnections;

    beforeEach(() => {
        connectionDict = {
            input: {},
            output: {}
        }

        resetTestValue();
        resetTestString();
        resetTestLog();
        initializeNodeValues();
    })

    test("test NEVER update option", () => {

        const res: string[] = [];

        for (let i = 0; i < 100; i++)
            res.push("1");

        connector(starterEngineNodeOUTPUT0, forEngineNode1INPUT0, connectionDict);

        connector(forEngineNode1OUTPUT0, incrementTestValueEngineNodeINPUT0, connectionDict);

        connector(incrementTestValueEngineNodeOUTPUT0, logEngineNode1INPUT0, connectionDict);

        connector(forEngineNode1OUTPUT1, updateTypeNEVEREngineNodeINPUT0, connectionDict);

        connector(updateTypeNEVEREngineNodeOUTPUT0, numberToStringConverterEngineNode1INPUT0, connectionDict);

        connector(numberToStringConverterEngineNode1OUTPUT0, logEngineNode1INPUT1, connectionDict);

        executeGraph(configDict, engineNodeDict, connectionDict, "starterEngineNode");

        expect(testLog).toEqual(res);

    })

    test("test DYNAMIC update option", () => {

        const res: string[] = [];

        for (let i = 0; i < 100; i++)
            res.push((i + 1).toString());

        connector(starterEngineNodeOUTPUT0, forEngineNode1INPUT0, connectionDict);

        connector(forEngineNode1OUTPUT0, incrementTestValueEngineNodeINPUT0, connectionDict);

        connector(incrementTestValueEngineNodeOUTPUT0, logEngineNode1INPUT0, connectionDict);

        connector(forEngineNode1OUTPUT1, updateTypeDYNAMICEngineNodeINPUT0, connectionDict);

        connector(updateTypeDYNAMICEngineNodeOUTPUT0, numberToStringConverterEngineNode1INPUT0, connectionDict);

        connector(numberToStringConverterEngineNode1OUTPUT0, logEngineNode1INPUT1, connectionDict);

        executeGraph(configDict, engineNodeDict, connectionDict, "starterEngineNode");

        expect(testLog).toEqual(res);

    })

    test("test ALWAYS update option", () => {

        const res: string[] = [];

        for (let i = 0; i < 100; i++)
            res.push((i + 1).toString());

        connector(starterEngineNodeOUTPUT0, forEngineNode1INPUT0, connectionDict);

        connector(forEngineNode1OUTPUT0, incrementTestValueEngineNodeINPUT0, connectionDict);

        connector(incrementTestValueEngineNodeOUTPUT0, logEngineNode1INPUT0, connectionDict);

        connector(updateTypeALWAYSEngineNodeOUTPUT0, numberToStringConverterEngineNode1INPUT0, connectionDict);

        connector(numberToStringConverterEngineNode1OUTPUT0, logEngineNode1INPUT1, connectionDict);

        executeGraph(configDict, engineNodeDict, connectionDict, "starterEngineNode");

        expect(testLog).toEqual(res);

    })


    test("test NEVER update option without for loop", () => {

        const res: string[] = ["1"];

        connector(starterEngineNodeOUTPUT0, incrementTestValueEngineNodeINPUT0, connectionDict);

        connector(incrementTestValueEngineNodeOUTPUT0, ifEngineNodeINPUT0, connectionDict);

        connector(ifEngineNodeOUTPUT1, incrementTestValueEngineNode2INPUT0, connectionDict);

        connector(incrementTestValueEngineNode2OUTPUT0, logEngineNode1INPUT0, connectionDict);

        connector(numberToStringConverterEngineNode1OUTPUT0, logEngineNode1INPUT1, connectionDict);

        connector(updateTypeNEVEREngineNodeOUTPUT0, numberToStringConverterEngineNode1INPUT0, connectionDict);

        connector(updateTypeNEVEREngineNodeOUTPUT0, ifEngineNodeINPUT1, connectionDict);

        executeGraph(configDict, engineNodeDict, connectionDict, "starterEngineNode");

        expect(testLog).toEqual(res);

    })

    test("test DYNAMIC update option without for loop", () => {

        const res: string[] = ["1"];

        connector(starterEngineNodeOUTPUT0, incrementTestValueEngineNodeINPUT0, connectionDict);

        connector(incrementTestValueEngineNodeOUTPUT0, ifEngineNodeINPUT0, connectionDict);

        connector(ifEngineNodeOUTPUT1, incrementTestValueEngineNode2INPUT0, connectionDict);

        connector(incrementTestValueEngineNode2OUTPUT0, logEngineNode1INPUT0, connectionDict);

        connector(numberToStringConverterEngineNode1OUTPUT0, logEngineNode1INPUT1, connectionDict);

        connector(updateTypeDYNAMICEngineNodeOUTPUT0, numberToStringConverterEngineNode1INPUT0, connectionDict);

        connector(updateTypeDYNAMICEngineNodeOUTPUT0, ifEngineNodeINPUT1, connectionDict);

        executeGraph(configDict, engineNodeDict, connectionDict, "starterEngineNode");

        expect(testLog).toEqual(res);

    })

    test("test ALWAYS update option without for loop", () => {

        const res: string[] = ["2"];

        connector(starterEngineNodeOUTPUT0, incrementTestValueEngineNodeINPUT0, connectionDict);

        connector(incrementTestValueEngineNodeOUTPUT0, ifEngineNodeINPUT0, connectionDict);

        connector(ifEngineNodeOUTPUT1, incrementTestValueEngineNode2INPUT0, connectionDict);

        connector(incrementTestValueEngineNode2OUTPUT0, logEngineNode1INPUT0, connectionDict);

        connector(numberToStringConverterEngineNode1OUTPUT0, logEngineNode1INPUT1, connectionDict);

        connector(updateTypeALWAYSEngineNodeOUTPUT0, numberToStringConverterEngineNode1INPUT0, connectionDict);

        connector(updateTypeALWAYSEngineNodeOUTPUT0, ifEngineNodeINPUT1, connectionDict);

        executeGraph(configDict, engineNodeDict, connectionDict, "starterEngineNode");

        expect(testLog).toEqual(res);

    })

    test("test DYNAMIC & ALWAYS update option without for loop", () => {

        const res: string[] = ["2"];

        connector(starterEngineNodeOUTPUT0, incrementTestValueEngineNodeINPUT0, connectionDict);

        connector(incrementTestValueEngineNodeOUTPUT0, ifEngineNodeINPUT0, connectionDict);

        connector(ifEngineNodeOUTPUT1, incrementTestValueEngineNode2INPUT0, connectionDict);

        connector(incrementTestValueEngineNode2OUTPUT0, logEngineNode1INPUT0, connectionDict);

        connector(numberToStringConverterEngineNode1OUTPUT0, logEngineNode1INPUT1, connectionDict);

        connector(updateTypeALWAYSEngineNodeOUTPUT0, numberToStringConverterEngineNode1INPUT0, connectionDict);

        connector(updateTypeDYNAMICEngineNodeOUTPUT0, ifEngineNodeINPUT1, connectionDict);

        connector(updateTypeALWAYSEngineNodeOUTPUT0, updateTypeDYNAMICEngineNodeINPUT0, connectionDict);

        executeGraph(configDict, engineNodeDict, connectionDict, "starterEngineNode");

        expect(testLog).toEqual(res);

    })

})