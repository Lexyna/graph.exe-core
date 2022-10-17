---
sidebar_position: 1
---
# Types

## `NodeEditorProps`:

```ts   
interface NodeEdiorProps {
    config: ProtoNodeDict;
    nodes: ProtoEngineNodeDict;
    connections: EngineConnections;
    debugMode: boolean;
    entryId?: string;
}
```

`config`: [ProtoNodeDict](#protonodedict), provides config nodes for the editor.

`nodes`: [`ProtoEngineNodeDict`](#protoenginenodedict), stores [ProtEngineNode](#protoenginenode)'s.

`connections`: [`EngineConnections`](../Documentation/connectionTypes.md#engineconnections), maps the relationship between nodes.

`debugMode`: If `true` will show a stringified version of the [`ProtoIO`](#protoiok-t)'s value next to the label.

`entryId`: If provided, will attempt to execute the Graph with each change. A status symbol at the bottom right of the editor will display the Graphs status.

## `ProtoNode`: 

```ts
interface ProtoNode extends ConfigNode {
    name: string;
    description: string;
    private?: boolean;
    inputs: ProtoIO<any, any>;
    outputs: ProtoIO<any, any>;
    style?: ProtoNodeStyle
}
```

`name`: Provides the name of the node rendered in the Header.

`description`: Provides the node description in the editor context Menu.

`private`: if `true`, won't be addable by the user.

`inputs`: Array of `ProtoIO`'s defining the nodes inputs.

`outputs`: Array of `ProtoIO`'s defining the nodes outputs.

`style`: Optional `ProtoNodeStyle`. Changes the look of the node


## `ProtoNodeDict`:

```ts
interface ProtoNodeDict {
    [k: string]: ProtoNode
}
```

A dictionary containing all [`ProtoNode`](#protonode)'s. Used to pass node configuration to the NodeEditor.

:::caution
The key of the `ProtoNodeDict` needs to be equal to the given [`ProtoNode`](#protonode)'s `id`.
:::

## `ProtoNodeStyle`:

```ts
interface ProtoNodeStyle {
    headerColor: string;
    bodyColor: string;
}
```

`headerColor`: CSS color string.

`bodyColor:` CSS color string.

## `ProtoEngineNode`

```ts
interface ProtoEngineNode extends EngineNode{
    position: {x: number, y: number};
    static: boolean
}
```

`position`: `(x,y)` position of the node in the editor.

`static`: If `true`, node won't be deletable.

## `ProtoEngineNodeDict`:

```ts
interface ProtEngineNodeDict {
    [k: string]: ProtoEngineNode
}
```

A dictionary containing all `ProtoEngineNode`'s. Used to add/remove nodes within the NodeEditor.

:::caution
The key of the `ProtEngineNodeDict` needs to be equal to the given [`ProtoEngineNode`](#protonode)'s `id`.
:::

## `ProtoIO<K, T>`

```ts
interface ProtoIO<K, T> extends EngineIO<K, T>{
    label: string;
    extra: React.FC<Extraprops<K, T>> | null;
    style?: ProtoIOStyle;
}
```

`label`: Default string displayed next to the io Port. Replaced if `extra` is not `null`.

`extra`: Custom React Component that render next to the IO Port.

`style`: Optional style changing the look of the ioPort and it's connections.

## `ExtraProps<K, T>`:

```ts
interface ExtraProps<K, T> {
    setData: (data: K) => void;
    data: K;
    value: T;
}
```

`setData`: Calling this function will set the [`data`](../Documentation/connectionTypes.md#engineiok-t) value of the io Port to the passed `data`'s value.

`data`: Current data of the io Port.

`value`: Current value of the io Port. 

## `ProtoIOStyle`:

```ts
interface ProtoIOStyle {
    color: string;
}
```

`color`: CSS color string. Changes the color of the io Port and connection line.