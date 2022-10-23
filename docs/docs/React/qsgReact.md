---
sidebar_position: 1
---
# Quick Start Guide: React

This guide will walk you though the steps to create a simple calculatorGraph with React, similar to the one found on the [`Showcase`](/Showcase) page.

To follow this tutorial, make sure to install the following packages: 

```ts
npm install graph.exe-core graph.exe-react
```

:::info
This guide assumes that you have a working react project, therefore it won't cover any more specific setup configurations.
:::

## Step1: Defining the ioPorts

The first step to creating functional nodes, is to tell them what kind of input they should accept by defining the [`ProtoIO<T, K>`](./react.md#protoiok-t). For this example, we will create 3 different ioPort. Two for our inputs and one for your outputs.

Let's start by creating a new file and calling it `ioConfig.ts`:

```ts title="src/ioConfig.ts"

export const numberIn: ProtoIO<null, number> = {
    type: "number",
    label: "number",
    mapping: CON_MAPPING.SINGLE,
    data: null
    extra: null,
    value: 0,
}

export const numberOut: ProtoIO<null, number> = {
    type: "number",
    label: "number",
    mapping: CON_MAPPING.MULTI,
    data: null
    extra: null,
    value: 0,
}

```

Now we have already created the first two of our 3 ioPorts. Notice how we only difference between the is `mapping`? The `mapping` tells the node how it should handle multiple connections. It accepts two values; `SINGLE`, and `MULTI`. A value of `SINGLE` tells the port that is can have at most one connection, while `MULTI` allows the port an unlimited amount of connections.

As we want to be able to connect our output ports to multiple input ports, we set the mapping to `MULTI` and since we only want to allow one connection for every input, we set it to `SINGLE`.

:::info
Of course, it is also possible to use a input port with the `MULTI` mapping. However the dependency resolving algorithm will only resolve the first connection it finds.
:::

For the next ioPort, we want the user to be able to manually change the io's value. To do this, we need to first create a new type with the data we want to manipulate. In our case this is pretty simple:

```ts title="src/ioConfig.ts"
export interface inputData {
    value: number
}
```

We've just create and exported a new interface which we will use in our new Custom Component:

```tsx title="src/inputForm.tsx"

const inputForm = (props: ExtraProps<inputData, number>) => {
    const update = (value: number) => {
        props.setData({value: value});
    }
    return (
        <div>
            <label>value: </label>
            <input 
                type="number"
                defaultValue={props.data.value}
                step={1}
                onChange={e => update(parseFloat(e.target.value))}
                style={{ width: "2rem" }
            />
        </div>)
}

```

This component will act as a way for our use to manually set the output value of the io port we pass it to. By calling the `update` method every time we trigger a `onChange` event within the component, the react plugin will update the data values of this port.
Note, however, that this will not explicitly change the `value` of the ioPort, only the data. For the `data` to affect the `value` we have to compute the graph and have to tell it explicitly what the new value will be, see #(referenz to something).

Lastly, we create out third `ProtoIO`:

```ts title="src/ioConfig.ts"

export const numberWithInputOut: ProtoIO<inputData, number> = {
    type: "number",
    label: "number",
    mapping: CON_MAPPING.MULTI,
    data: {value: 0},
    extra: inputForm,
    value: 0,
}

```

Since we only want to use this port as an output, it is enough to just declare one. We tell it use the `inputData` we have defined earlier to be able to access it at runtime and pass our custom component to the `extra` field, telling the plugin to render it instead of the default label. 

## Step 2: Creating the config Nodes

The next step to tell the editor what nodes it should display and how they work. To do this we create so called [`ProtoNode`](./react.md#protonode)'s. An extension of the normal [`ConfigNode`](../Documentation/NodeTypes.md#confignode)'s used by the core engine with additional information, such as a node description or a name, that are not needed by the core.

Start by creating a new file for our configNodes and adding the rootNode: 


```ts title="src/configNodes.ts"

export const rootNode: ProtoNode = {
    id: "root",
    description: "",
    name: "Root",
    inputs: [numberIn],
    outputs: [],
    private: true,
    exe: function(in1: EngineIO<null, number>) {}
}

```

Let's go over what's happening here: 

The `id` field specified the id of the node, it needs to be unique across all [ProtoNode](./react.md#protonode)'s and is used as a reference by the [`EngineNode`](../Documentation/NodeTypes.md#enginenode)'s to get their functionality from.  `description` gives, as the name suggest, a description of the node when the user opens the node context Menu. As our node won't be displayed in the context Menu, we don't need a description. `name` renders the string in the header of the node and `private` declares if our node should be addable by the user. The default value is `false`, setting it to true, prevents the user from adding any nodes of this type.

The `input` & `output` field's each take an array of [`ProtoIO`](./react.md#protoiok-t)'s, defining how many ingoing and outgoing connections out node has, as well as of what `type` they are. Generally only node's of the same `type` can be connected together. Remember that the type of a `ProtoIO`([EngineIO](../Documentation/connectionTypes.md#engineiok-t)) is defined as a case-sensitive string.

Finally the `exe` filed takes in a function that get's the node's `input` and `outputs` passed as parameters and executes the logic we define. By providing the type of the [`ProtoIO`](./react.md#protoiok-t)'s we have created, we are able to use typescript in combination with IntelliSenes even withing our node's logic. Because our root node needs to execute no logic we simply do nothing for now. 

Now, let's add four more nodes, those nodes will act as out "operational" nodes. In this guide we focus on addition, multiplication, subtraction and division, but you are free to add more nodes as you see fit, the process is relatively straightforward:

```ts title="src/configNodes.ts"

export const addNode: ProtoNode = {
    id: "addNode",
    description: "A node that adds two numbers",
    name: "Add",
    inputs: [numberIn, numberIn],
    outputs: [numberOut],
    exe: function(in1: EngineIO<null, number>, in2: EngineIO<null,  number>, out: engineIO<null, number>) {
        out.value = in1.value + in2.value;
    }
}

export const subNode: ProtoNode = {
    id: "subNode",
    description: "A node that subtracts two numbers",
    name: "Sub",
    inputs: [numberIn, numberIn],
    outputs: [numberOut],
    exe: function(in1: EngineIO<null, number>, in2: EngineIO<null,  number>, out: engineIO<null, number>) {
        out.value = in1.value - in2.value;
    }
}

export const mulNode: ProtoNode = {
    id: "mulNode",
    description: "A node that multiplies two numbers",
    name: "Multiply",
    inputs: [numberIn, numberIn],
    outputs: [numberOut],
    exe: function(in1: EngineIO<null, number>, in2: EngineIO<null,  number>, out: engineIO<null, number>) {
        out.value = in1.value * in2.value;
    }
}

export const divNode: ProtoNode = {
    id: "divNode",
    description: "A node that divides two numbers",
    name: "Divide",
    inputs: [numberIn, numberIn],
    outputs: [numberOut],
    exe: function(in1: EngineIO<null, number>, in2: EngineIO<null,  number>, out: engineIO<null, number>) {
        if(in2.value === 0) //Making sure we never divide by 0 !
            out.value = 0;
        else
            out.value = in1.value / in2.value;
    }
}

```

One of the main differences when creating our operational nodes is that they have a different amount of `input` and `output` ports. To create addition, subtraction, etc. we obviously need at least 2 different inputs (unless we want to add the same value, twice), but there is no limit to how many `input` or `output` ports your node can have. If you want to, try setting the a third `numberIn` for any of the nodes and see what happens.

:::caution
Remember to pass the exact amount of parameter to your `exe`, `omInit` and `onDestroy` methods when adding [`ProtoIO`](./react.md#protoiok-t)'s to your nodes! If you forget to pass one or add to many and try to access them, js will throw a [ReferenceError](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError).
:::

### Step 2.1: Adding a const node

We are almost done with our nodes, but one thing is still missing. if we want the user to do any real computation we have to provide a way for them to generate a constant number we can input into our operational nodes. If you've looked at the [core quick-start-guide](../Documentation/qsgCore.md) you might have noticed how we needed to explicitly set the values for our nodes.This is one of the limitations having no user interface, luckily we can simply fix this now with the help of our `numberWithInputOut` [ProtoIO](./react.md#protoiok-t):

```ts title="src/configNodes.ts"

export const constNodeS: ProtoNode = {
    id: "constant",
    description: "Outputs a constant",
    name: "const",
    inputs: [],
    outputs: [numberWithInputOut],
    exe: function (out: EngineIO<inputData, number>,) {
        out.value = out.data.val;
    }
}

```

All we have to pass `numberWithInputOut` as an value to out `outputs` array. As we have defined it's custom component `inputForm` to call `setData` for the io port with each trigger to the `onChange` method, whenever this node get's called, it will contain the current userData `inputData`. The line `out.value = out.data.value` the makes sure that the io ports values is always the same as it's data value. 

## Step 3: Last steps

With out [`ProtoNode`](./react.md#protonode)'s defined, we are almost done. The last thing before we can add out component to out App to configure it's props ([`NodeEditorProps`](./react.md#nodeeditorprops)).

Starting with the `config`, this is a dictionary that will contain all our [`ProtoNode`](./react.md#protonode)'s. Initialize it like so and remember that the `key` need's to be identical to the `id` of the [`ProtoNode`](./react.md#protonode):

```ts title="src/EditorConfig.ts"
export const config: ProtoNodeDict = {
    [rootNode.id]: rootNode,
    [addNode.id]: addNode,
    [subNode.id]: subNode,
    [mulNode.id]: mulNode,
    [divNode.id]: divNode
}

```

Now we need another dictionary to hold our [`ProtoEngineNode`](./react.md#protoenginenode)'s. Normally it would be totally fine to simply pass an empty dictionary as our `nodes` props, but since we declared our `rootNode` private, there is no way for the user to add it to the editor (as it should be!). But this also means we have to add it manually when we create our editor. For this specific case, react-plugin provide a [`buildEngineNode`](./functions.md#buildenginenode) method that takes a [`ProtoNode`](./react.md#protonode) as well as a boolean as parameter and returns a [`ProtoEngineNode`](./react.md#protoenginenode):

```ts src="src/EditorConfig.ts"
//Makes the node static
export const rootEngineNode = buildEngineNode(rootNode, true);

export const engineNodes: ProtoEngineNodeDict = {
    [rootEngineNode.id] = rootEngineNode
}

```

The second parameter of [`buildEngineNode`](./functions.md#buildenginenode) tells the node whatever it should be static or not. A static node cannot be deleted by the user. Since we don't want the root to be deletable, we tell the method we'd like it to be static. 

Next we create a empty `EngineConnections` object. This object will store the relationship between nodes and their ioPort which is used by the core engine to execute the Graph:

```ts
export const connections: EngineConnections = {
    input: {},
    output: {}
}
```

## Step 4: Adding the nodeEditor

With our nodeEditor configuration ready to go, all that is left for us to do adding the component in the desirable spot:

```tsx src="src/App.tsx"

...
    <NodeEditor config={config} nodes={nodes} connections={connections} debugMode={true} entryId={rootEngineNode.id} />
...

```

We've already talked about the `config`, `nodes`, and `connections` parameter, but what about the other two? `debugMode` tells the plugin to render a stringified versions of each [`ioPort`](./react.md#protoiok-t)'s value in brackets next to it's label. E.g. instead of displaying simply `number`, it would display `number(0)`.

`entryId` is an optional parameter. If it is provided (and valid) the plugin will try to compute the Graph with each change (dataUpdate or connectionChange) and display the last execution's status in the bottom right corner with little status dot. Green means the execution was successful, gray means the graph is currently still executing the Graph and red means the last execution failed. 

:::info
Another important node, the `<NodeEditor>` component will inherit its parent's with and height. For best results, parent div around with the desired values.
:::