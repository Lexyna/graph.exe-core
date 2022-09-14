# NodeTypes

## `ConfigNode`:

```ts
interface ConfigNode {
    id: string;
    isTrigger?: boolean;
    updateType?: updateType;
    inputs: EngineIO<any, any>[],
    outputs: EngineIO<any, any>[],
    exe: (...io: EngineIO<any, any>[]) => void;
    onInit?: (...io: EngineIO<any, any>[]) => void;
    onDestroy?: (...io: EngineIO<any, any>[]) => void;
}
```

`id`: Unique id of the configNode.

`isTrigger`: If true, the node will trigger [`next()`](./functions.md#next) action upon being requested as a dependency. Default: `false`

`updateType`: The [`updateType`](#updatetype) of the Node. Determines how the node handles being requested as a dependency. Default: `updateType.NEVER

`inputs`: The [`EngineIO`](./connectionTypes.md#engineio) inputs of this node.

`outputs`: The [`EngineIO`](./connectionTypes.md#engineio) outputs of this node.

`exe`: The executable function this node should trigger when computed.

`onInit`: Method triggered once before execution if the graph.

`onDestroy`: Method triggered once before destruction of the graph. 

## `ConfogNodeDict`:

```ts
interface ConfigNodeDict {
    [k: string]: ConfigNode;
}
```

Dict to handle [`ConfigNodes`](./NodeTypes.md#confignode), used by a graph to execute node behavior.

## `EngineNode`:

```ts
interface EngineNode {
    id: string;
    configId: string;
    updateType: updateType;
    inputs: EngineIO<any, any>[];
    outputs: EngineIO<any, any>[];
}
```

`id`: Unique id of the `EngineNode`.

`configId`: Unique id of the [`ConfigNode`](#confignode) this noe inherits behavior from.

`updateType`: Inherited from [`ConfigNode`](#confignode).

`inputs`: Inherited from [`ConfigNode`](#confignode).

`output`: Inherited from [`ConfigNode`](#confignode).

:::danger
When creating a `EngineNode` it is important that the `input` and `output` are new Objects!
It is recommended to use the [`nodeBuilder()`](./functions.md#nodebuilder) function.
:::

## `EngineNodeDict`:

```ts
interface EngineNodeDict {
    [k: string]: EngineNode;
}
```

Dict to handle [`EngineNode`](#enginenode), used by a graph to track nodes.
:::caution
The key need to be the id of the [`EngineNode`](#enginenode)!
:::

## `updateType`:

```ts
enum updateType {
    NEVER,
    DYNAMIC,
    ALWAYS
}
```

`NEVER`: Node will only compute once upon initial dependency request.

`DYNAMIC`: Node will only compute upon initial dependency request or when the Node's input values have changed.

`ALWAYS`: Node will always recompute upon dependency request.