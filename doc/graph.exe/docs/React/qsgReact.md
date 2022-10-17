---
sidebar_position: 1
---
# Quick Start Guide: React

This guide will walk you though the steps to create a simple calculatorGraph with React, similar to the one found in the `Examples` page.

To follow this tutorial, make sure to install the following packages: 

```ts
npm install graph.exe-core graph.exe-react
```

:::info
This guide assumes that you have a working react project, therefore it won't cover any ore specific setup configurations.
:::

## Step1: Defining our ioPorts

The first step to creating functional nodes, is to tell them what kind of input they should accept. For this example, we will create 3 different ioPort. Two for our inputs and one for your outputs.

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

We've just create and exported new interface which we will use in our new Custom Component:

```ts title="src/inputForm.tsx"

const inputForm = (props: ExtraProps<inputData, number>) => {
    
}

```