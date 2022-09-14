---
sidebar_position: 2
---
# Functions

:::note

This page contains information about all functions found in the [Graph.exe-core](https://github.com/Lexyna/graph.exe-core)

:::

## Graph functions

This sections contains information about graph functions you can implement in your custom nodes.

### executeGraph()

The `executeGraph` function takes as parameter a `ConfigNodeDict`, `EngineNodedict`, `EngineConnections` and a entry point `string`, and tries to execute your graph once.

If you have provided a valid, executable graph, the function will return `true` upon successful execution, otherwise it will return `false`.

The graph will also be destroyed upon complete execution.

```ts
//Executes a valid, executable graph once
executeGraph(config: ConfigNodeDict, nodes: EngineNodeDict, connections: EngineConnections, entry: string): boolean
```

`config`: Contains all [`ConfigNodes`](./NodeTypes.md#confignode) needed to execute this graph.

`nodes`: Contains all [`EngineNodes`](./NodeTypes.md#enginenode) in the graph.

`connections`: Tells the graph how [`EngineNodes`](./NodeTypes.md#enginenode) are connected. Used to resolve dependencies and trigger [`next()`](#next) action.

`entry`: The start point of the graph.

:::info

`onInit()` method will be triggered once for every provided `EngineNode` in the `EngineNodeDict` right before execution in no particular order. 

:::

:::info

`onDestroy()` method will be triggered once for every provided [`EngineNodes`](./NodeTypes.md#enginenode) in the [`EngineNodeDict`](./NodeTypes.md#enginenodedict) right after execution in no particular order. 

:::

### createGraph()

The `crateGraph()` function will create a `inMemoryGraph` that lives in memory and has to be manually delete via the [`deleteGraph()`](#deletegraph) function.

Returns true if the graph got successfully created.

```ts
createGraph(config: ConfigNodeDict, nodes: EngineNodeDict, connections: EngineConnections, graphName: string): boolean
```

`config`: Contains all [`ConfigNodes`](./NodeTypes.md#confignode) needed to execute this graph.

`nodes`: Contains all [`EngineNodes`](./NodeTypes.md#enginenode) in the graph.

`connections`: Tells the graph how [`EngineNodes`](./NodeTypes.md#enginenode) are connected. Used to resolve dependencies and trigger [`next()`](#next) action.

`graphName`: the unique name of the create graph.

:::note
**Note**: Graphs created with `createGraph()` will not trigger initially, they'll have to be triggered from within, for example, with an `eventListener`.
:::

### deleteGraph()

Given a `graphName`, the function will attempt to delete the `inMemoryGraph` and trigger all `onDestroy()` methods in the given graph. 

```ts
deleteGraph(graphName: string): void
```

### next()

The `next()` function takes a [`EngineIO`](./connectionTypes.md#engineio) as parameter and triggers all nodes connected to the specified [`EngineIO`](./connectionTypes.md#engineio).

:::info

The [`EngineIO`](./connectionTypes.md#engineio) has to be of [`CONNECTION_TYPE`](./connectionTypes.md#connectiontype): `OUTPUT`, otherwise no nodes will be triggered.

:::

:::caution

If the [`EngineIO`](./connectionTypes.md#engineio) is connected to multiple other IO Ports, the order of execution is undefined!

:::

```ts 
//Triggers all connected nodes
next(EngineIO<any, any>): void
```

### getNodeId()

The `getNodeId()` function takes a [`EngineIO`](./connectionTypes.md#engineio) as parameter and return the id of its parent [`EngineNode`](./NodeTypes.md#enginenode).

```ts
//Returns id of parent EngineNode
getNodeId(io: EngineIO<any, any>): string
```

## Utility functions

This sections contains information about utility methods provided by the `graph.exe-core` package.
If you're only interested in writing your own `graph.exe` extension or just want to use the core package without an additional plugin, this sections provides you with information on how to work with just the core package.

### nodeBuilder()

The `nodeBuilder()` functions will return a valid [`EngineNode`](./NodeTypes.md#enginenode) with the assigned id, based on the passed [`ConfigNode`](./NodeTypes.md#confignode).

```ts
nodeBuilder(configNode: ConfigNode, id: string): EngineNode
```

`configNode`: The [`ConfigNode`](./NodeTypes.md#confignode) template the new [`EngineNode`](./NodeTypes.md#enginenode) will reference.

`id`: Unique id to assign the new [`EngineNode`](./NodeTypes.md#enginenode).

### extractor()

The `extractor()` function return all [`NodePorts`](./connectionTypes.md#nodeports) of the provided [`EngineNodes`](./NodeTypes.md#enginenode).

```ts
extractor(node: EngineNode): NodePorts
```

`node`: The [`EngineNode`](./NodeTypes.md#enginenode) to extract all IO ports from.

### connector()

The `connector` function create a valid connection between a provided OutputIO port and InputIO port in the given [`EngineConnections`](./connectionTypes.md#engineconnections).

Return true if the connection got successfully created.

```ts
connector(output: ConnectionsDetails, input: ConnectionsDetails, connections: EngineConnections): boolean
```

`output`: The [`ConnectionDetails`](./connectionTypes.md#connectiondetails) of the output nodes [`EngineIO`](./connectionTypes.md#engineio), can be found with the [`extractor()`](#extractor) function.

`input`: The [`ConnectionDetails`](./connectionTypes.md#connectiondetails) of the input nodes [`EngineIO`](./connectionTypes.md#engineio), can be found with the [`extractor()`](#extractor) function.

`connections`: The [`EngineConnections`](./connectionTypes.md#engineconnections) dict to add the new connection to.

### splitter()

The `splitter` function cuts a connection between provided Output and Input Io Ports in the given [`EngineConnections`](./connectionTypes.md#engineconnections).

returns `true` if the connection got successfully cut.

```ts
splitter(output: ConnectionsDetails, input: ConnectionsDetails, connections: EngineConnections): boolean
```

`output`: The [`ConnectionDetails`](./connectionTypes.md#connectiondetails) of the output nodes[`EngineConnections`](./connectionTypes.md#engineconnections), can be found with the [`extractor()`](#extractor) function.

`input`: The [`ConnectionDetails`](./connectionTypes.md#connectiondetails) of the input nodes [`EngineConnections`](./connectionTypes.md#engineconnections), can be found with the [`extractor()`](#extractor) function.

`connections`: The [`EngineConnections`](./connectionTypes.md#engineconnections) dict to split the connection from.

### connectionFinder()

The `connectionFinder()` function return an array of all found [`ConnectionDetails`](./connectionTypes.md#connectiondetails) connected to the provided input/output IO Port.

```ts
connectionFinder(io: connectionDetails, connections: EngineConnections): connectionDetails[]
```

`io`: The [`ConnectionDetails`](./connectionTypes.md#connectiondetails) of the Input/Output Port, can be found with the [`extractor()`](#extractor) function.

`connections`: The [`EngineConnections`](./connectionTypes.md#engineconnections) to search for connections.