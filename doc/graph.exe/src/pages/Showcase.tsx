import Layout from '@theme/Layout';
import { NodeEditor } from 'graph.exe-react';
import React, { CSSProperties, useState } from "react";
import { calculatorConfigNodes, calculatorConnections, calculatorNodes, calculatorRootEngineNodeId } from '../NodeConfigs/CalculatorGraph/EditorConfig';
import { threeConfigDict, threeConnections, threeNodes, threeRootEngineNodeId } from '../NodeConfigs/ThreeJsgraph/EditorConfig';

const style: CSSProperties = {
    backgroundColor: "gray",
    height: "100vh",
    width: "100%",
    position: "absolute",
    top: "0px"
}

const selectStyle: CSSProperties = {
    position: "absolute",
    top: "4rem",
    left: "0.5rem",
    color: "white"
}

const enum GraphType {
    CALCULATOR = "calculator",
    THREEJS = "threeJS"
}

const examples = () => {
    const [graph, setGraph] = useState<GraphType>(GraphType.CALCULATOR);

    const changeGraph = (value: string) => {
        switch (value) {
            case "calculator": setGraph(GraphType.CALCULATOR); break;
            case "threeJS": setGraph(GraphType.THREEJS); break;
        }
    }

    return (
        <Layout>
            {graph === GraphType.CALCULATOR ?
                <div style={style}>
                    <NodeEditor config={calculatorConfigNodes} nodes={calculatorNodes} connections={calculatorConnections} debugMode={true} entryId={calculatorRootEngineNodeId}></NodeEditor>
                </div>
                : null}
            {graph === GraphType.THREEJS ?
                <div style={style}>
                    <label style={selectStyle}>ajksdfhuksdfjsdfjhsdklfjgsdkflksfjksdlfjsdfksdjfsdfkl</label>
                    <NodeEditor config={threeConfigDict} nodes={threeNodes} connections={threeConnections} debugMode={false} entryId={threeRootEngineNodeId}></NodeEditor>
                </div>
                : null}
            <select
                style={selectStyle}
                onChange={e => changeGraph(e.target.value)}
            >
                <option value={GraphType.CALCULATOR}>Calculator</option>
                <option value={GraphType.THREEJS}>ThreeJS</option>
            </select>
        </Layout>)
}

export default examples;