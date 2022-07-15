import { splitter } from "../../src/core/engine/Splitter"
import { addEngineNode1OUTPUT0, rootINPUT0 } from "./predefined/ConnectionDetails"
import { addingTwoNumberConnectionAfterSplit1 } from "./predefined/splitterConnections"
import { addingTwoNumberConnection } from "./predefined/ValidConnections"

describe("Splitter tests", () => {

    test("remove simple connection split1", () => {

        const res = Object.assign({}, addingTwoNumberConnection);

        splitter(addEngineNode1OUTPUT0, rootINPUT0, res);

        expect(res).toEqual(addingTwoNumberConnectionAfterSplit1);

    })

})