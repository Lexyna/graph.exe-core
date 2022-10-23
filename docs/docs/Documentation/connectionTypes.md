# IO & connection types

## `EngineIO<K, T>`:

```ts
interface EngineIO<K, T> {
    type: string;
    mapping: CON_MAPPING;
    data: K;
    value: T;
}
```

`type`: Defines the type of this [`EngineIO`](#engineio). Can only be connected to other [`EngineIO`](#engineio)'s with the same type.

`mapping`: The [`CON_MAPPING`](#con_mapping) of this node, defines how many connections this node can have.

`data:` User defined additional data for for this IO Port. Can be used, for example, to render debug information.

`value:` User defined value that will be send to other nodes.

:::caution
`data` and `value` should be serializable!
:::

## `connectionDetails`:

```ts
interface ConnectionDetails {
    ioId: string;
    nodeId: string;
    type: CONNECTION_TYPE;
    index: number;
}
```

Details defining a [`EngineNode`](./NodeTypes.md#enginenode)'s [`EngineIO`](#engineio).

`ioId`: Full id of the nodes's io Port. Composited: `nodeID` + `type` + `index`.

`nodeId`: Id of the [`EngineNode`](./NodeTypes.md#enginenode) this IO Port belongs to.

`type`: The [`CONNECTION_TYPE`](#connection_type) of this IO Port.

`index`: The index at which this IO port can be found.

## `EngineConnections`:

```ts
interface EngineConnections {
    input: IngoingConnections;
    output: OutgoingConnections;
}
```

Used by [`connector()`](./functions.md#connector), [`splitter`](./functions.md#splitter),[`connectionFinder`](./functions.md#connectionfinder), [`executeGraph`](./functions.md#executegraph) and [`createGraph`](./functions.md#creategraph).

Can be initialized like so and used with [`connector`](./functions.md#connector) to create connections:

```ts
const connectionDict: EngineConnections = {
    input: {},
    output: {}
}
```

## `IngoingConnections`:

```ts
export interface IngoingConnections {
    [k: string]: IoIdInfo
}
```

## `OutgoingConnections`: 

```ts
export interface OutgoingConnections {
    [k: string]: IoIdInfo
}

```

## `IoIdInfo`:

```ts
interface IoIdInfo {
    self: ConnectionDetails;
    connections: ConnectionDetails[];
}
```

Used by `IngoingConnections` & `OutgoingConnections`.

## `NodePorts`:

```ts
interface NodePorts {
    nodeId: string,
    inputs: ConnectionDetails[],
    outputs: ConnectionDetails[],
}
```

`nodeId`: [`EngineNode`](./NodeTypes.md#enginenode) id.

`input`: Array of [`ConnectionDetails`](#connectiondetails) for all incoming connection to this [`EngineNode`](./NodeTypes.md#enginenode).

`output`: Array of [`ConnectionDetails`](#connectiondetails) for all outgoing connection from this [`EngineNode`](./NodeTypes.md#enginenode).

## `CONNECTION_TYPE`:

```ts
enum CONNECTION_TYPE {
    INPUT = "INPUT",
    OUTPUT = "OUTPUT"
}
```

Used to determine if a Io Port is a `input` or `output`.

## `CON_MAPPING`:

```ts
enum CON_MAPPING {
    SINGLE = "SINGLE",
    MULTI = "MULTI"
}
```

Defines how many connection a [`EngineIO`](#engineio) can have.

`SINGLE`:  Only allows one connection to another IO Port. Usually used for `ìnput` type io's.

`MULTI`:  Allows unlimited connections to other IO Port's. Usually used for `output` type io's.

:::caution
While it is possible to use the `MULTI` mapping type an `input` type, it has no defined behavior. 
:::