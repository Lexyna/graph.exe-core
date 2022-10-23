---
sidebar_position: 1
---
# Quick Start Guide: Core

:::info
If you want to use any of the available plugins, refer to their Quick Start guide instead:
[`React`](../React/qsgReact.md).
:::

This is step-by-step guide on how you can create any kind of graph with the help graph.exe.
In this guide we will create a simple graph, that does some basic addition and will then print out our result on the console.

To follow this tutorial make sure you install the `graph.exe-core` package.

```ts
npm install graph.exe-core
```

## Step1: Defining our IO Ports

The first step we have tp take in order to create our graph, is defining what kind of data we want to transport. For our simple graph, it will be enough to only have a `number` type:

Let's define them in a new file for our IO ports

```ts title="src/io.ts"
//This will be out Input port
const numberIn: EngineIO<null, number> = {
    type: "number",
    mapping: CON_MAPPING.SINGLE
    data: null,
    value: 0
}

//This will be our Output port
const numberout: EngineIO<null, number> => {
    type: "number",
    mapping: CON_MAPPING.MULTI,
    data: null,
    value: 0
}

```

## Step2: Defining our ConfigNodes

Now that we have our IO ports defined, we need to think about the kind of nodes we will need. For now it well be enough to have three kinds of nodes:

- A `rootNode`
- A `addNode`
- A `constNode`

```ts title="src/configNodes.ts"

//in our root node, we only want to log the result, therefor we don't need any additional output nodes
const "rootNode": ConfigNode = {
    id: "rootNode",
    inputs: [numberIn],
    outputs: [],
    exe: function(numberIn: EngineIO<null, number>): void {
        console.log(numberIn.value);
    }
}

const addNode: ConfigNode = {
    id: "addNode",
    inputs: [numberIn, numberIn],
    outputs: [numberOut],
    exe: function(numberIn1: EngineIO<null, number>, numberIn2: EngineIO<null, number>, numberOut: EngineIO<null, number>): void {
        numberOut.value = numberIn1.value + numberIn2.value;
    }
}

//Our const node will only ever output the same value, therefor we do no need to compute this node
const constNode: ConfigNode = {
    id: "constNode",
    inputs: [],
    outputs: [numberOut],
    exe: function(numberIn1: EngineIO<null, number>, numberIn2: EngineIO<null, number>, numberOut: EngineIO<null, number>): void {}
}

//we alo need to register our ConfigNodes, so the graph knows which node to execute
const configDict: ConfigNodeDict = {
    "rootNode": rootNode,
    "addNode": addNode,
    "constNode": constNode
}

```

## Step3: Defining our EngineNodes

Normally, if you were working with a graphical user interface, this would be step where the user itself can define their very own graph using our predefined `ConfigNodes`. As we are however working without a separate gui, we will instead create a fixed graph that will compute: `1 + 1 = 2`.

First, we need to create exactly one `EngineNode` for each of our `ConfigNodes`:

```ts title="src/index.ts"
const myConst1Node: EngineNode = nodeBuilder(constNode, "myConstNode1Id");

myConst1Node.output[0].value = 1; // we need to set out output value for this node specifically as the default value is 0.

const myAddNode: EngineNode = nodeBuilder(addNode, "myAddNode");
const myRootNode: EngineNode = nodeBuilder(rootNode, "root"); 
```

second, we need to register them so our graph know which EngineNodes to work with:

```ts title="src/index.ts"
const nodes: EngineNodeDict = {
    "myConstNode1Id": myConst1Node,
    "myAddNode": myAddNode,
    "root": myRootNode
}
```

:::note
Note how we had to set the output value for our const node explicitly in the code. Normally you would either have to create a `ConfigNode` with each of the desired output values, or create a dynamic const node like shown in the [`react quick start guide`](../React/qsgReact.md).
:::

## Step4: Connecting our nodes

Connecting our nodes is simple with the help of the `connector` function:

```ts title="src/index.ts"

//first we need to create a new connectionDict

const connectionDict: Engineconnections = {
    input: {},
    output: {}
}

//now we need to extract our connections

const myConst1NodeConDetails: NodePorts = extractor(myConst1Node);
const myAddNodeConDetails: NodePorts = extractor(myAddNode);
const myRootNodeConDetails: NodePorts = extractor(myRootNode);

//And finally we can connect our nodes to each other

//Connect our const1Node to the first input of our addNode
connector(myConst1NodeConDetails.outputs[0], myAddNodeConDetails.inputs[0], connectionDict);

//Connect our const1Node to the second input of our addNode
connector(myConst1NodeConDetails.outputs[1], myAddNodeConDetails.inputs[0], connectionDict);

//Connect our addNode output to the input of our rootNode
connector(myAddNodeConDetails.outputs[0], myRootNodeConDetails.inputs[0], connectionDict);
```

## Step5: Executing our graph

Finally, all we need to do now if call the execution function with all predefined parameters:

```ts title="src/index.ts"
executeGraph(configDict, nodes, connectionDict, "root");
```

Output:

```
2
```

## Step6: Executing another node

Now that we have out graph computing our output, let's create a new node which will take a input and log it to our console instead of having our root node do it. 

First, let's add two new [`EngineIO`](../Documentation/connectionTypes.md#engineio)'s to process our forward signals:

```ts title="src/io.ts" 

...

//As we won't be passing any data on those node ports, we can assign them <null, null> for data and value 
const  signalIn: EngineIO<null, null>: EngineIO = {
    type: "signal",
    mapping: CON_MAPPING.SINGLE,
    data: null,
    value: null
}

//To make the graph a little simpler, let's define that each node should only have one other node it can trigger
const signalOut: EngineIO<null, null>: EngineIO ?> {
    type: "signal",
    mapping: CON_MAPPING.SINGLE,
    data: null,
    value: null
}

```

Now, let's slightly adjust our node to output our value and trigger another node:

```ts title="src/configNodes.ts"
const "rootNode": ConfigNode = {
    id: "rootNode",
    inputs: [numberIn],
    outputs: [signalOut, numberOut],
    exe: function(numberIn: EngineIO<null, number>, signalOut: EngineIO<null, null>, numberOut: EngineIO<null, number>): void {
        numberOut.value = numberIn.value;
        next(signalOut);
    }
}
```

We also need to define our new log node like so:

```ts title="src/configNodes.ts"
const logNode: ConfigNode = {
    id: "logNode",
    inputs: [signalIn, numberIn],
    outputs: [],
    exe: function(signalIn: EngineIO<null, null>, numberIn: EngineIO<null, number>): void {
        console.log(numberIn.value);
    }
}

//Don't forget to add it to our config!
const configDict: ConfigNodeDict = {
    "rootNode": rootNode,
    "addNode": addNode,
    "constNode": constNode,
    // highlight-next-line
    "logNode": logNode
}

```

Now we create a new instance of our logNode and add it to out dict:

```ts title="src/index.ts"
const myLogNode: EngineNode = nodeBuilder(logNode, "myLogNode");

const nodes: EngineNodeDict = {
    "myConstNode1Id": myConst1Node,
    "myAddNode": myAddNode,
    "root": myRootNode,
    // highlight-next-line
    "myLogNode": myLogNode
}
```

All we have to do next is connect our new [`EngineNode`](../Documentation/NodeTypes.md#enginenode) with our modified root node:

```ts title="src/index.ts"
const connectionDict: Engineconnections = {
    input: {},
    output: {}
}

//now we need to extract our connections

const myConst1NodeConDetails: NodePorts = extractor(myConst1Node);
const myAddNodeConDetails: NodePorts = extractor(myAddNode);
const myRootNodeConDetails: NodePorts = extractor(myRootNode);
// highlight-next-line
const myLogNodeConDetails: NodePorts = extractor(myLogNode);

//And finally we can connect our nodes to each other

//Connect our const1Node to the first input of our addNode
connector(myConst1NodeConDetails.outputs[0], myAddNodeConDetails.inputs[0], connectionDict);

//Connect our const1Node to the second input of our addNode
connector(myConst1NodeConDetails.outputs[1], myAddNodeConDetails.inputs[0], connectionDict);

//Connect our addNode output to the input of our rootNode
connector(myAddNodeConDetails.outputs[0], myRootNodeConDetails.inputs[0], connectionDict);

// highlight-start
//This connects our root nodes 'signalOut' with our logNode's 'signalIn'
connector(myRootNodeConDetails.outputs[0], myLogNodeConDetails.inputs[0], connectionDict);
//This connects our rootNode's 'numberOut' with out logNode's 'numberIn'
connector(myRootNodeConDetails.outputs[1], myLogNodeConDetails.inputs[1], connectionDict);
// highlight-end
```

All that's left to do now is executing our modified graph again:

```ts title="src/index.ts"
executeGraph(configDict, nodes, connectionDict, "root");
```

And if everything was set up correctly we should get our output again:

```
2
```