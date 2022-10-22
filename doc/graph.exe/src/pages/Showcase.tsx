import Layout from '@theme/Layout';
import { NodeEditor } from 'graph.exe-react';
import React, { CSSProperties } from "react";
import { calculatorConfigNode, calculatorConnections, calculatorNodes, calculatorRootEngineNodeId } from "../NodeConfigs/CalculatorGraph/EditorConfig";

const style: CSSProperties = {
    backgroundColor: "gray",
    height: "100vh",
    width: "100%",
    position: "absolute",
    top: "0px"
}

const examples = () => {
    return (
        <Layout>
            <div style={style}>
                <NodeEditor config={calculatorConfigNode} nodes={calculatorNodes} connections={calculatorConnections} debugMode={true} entryId={calculatorRootEngineNodeId}></NodeEditor>
            </div>
        </Layout>)
}

export default examples;