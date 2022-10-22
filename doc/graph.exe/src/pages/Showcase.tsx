import Layout from '@theme/Layout';
import { NodeEditor } from 'graph.exe-react';
import React, { CSSProperties } from "react";
import { threeConfigDict, threeConnections, threeNodes, threeRootEngineNodeId } from '../NodeConfigs/ThreeJsgraph/EditorConfig';

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
                <NodeEditor config={threeConfigDict} nodes={threeNodes} connections={threeConnections} debugMode={false} entryId={threeRootEngineNodeId}></NodeEditor>
            </div>
        </Layout>)
}

export default examples;