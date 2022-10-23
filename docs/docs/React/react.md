---
sidebar_position: 1
---
# Types

## `NodeEditorProps`:

```ts   
interface NodeEditorProps {
    config: ProtoNodeDict;
    nodes: ProtoEngineNodeDict;
    connections: EngineConnections;
    debugMode: boolean;
    entryId?: string;
    gridOptions?: GridOptions; 
}
```

`config`: [ProtoNodeDict](#protonodedict), provides config nodes for the editor.

`nodes`: [`ProtoEngineNodeDict`](#protoenginenodedict), stores [ProtEngineNode](#protoenginenode)'s.

`connections`: [`EngineConnections`](../Documentation/connectionTypes.md#engineconnections), maps the relationship between nodes.

`debugMode`: If `true` will show a stringified version of the [`ProtoIO`](#protoiok-t)'s value next to the label.

`entryId`: If provided, will attempt to execute the Graph with each change. A status symbol at the bottom right of the editor will display the Graphs status.

`gridOptions`: Style options for the backgroundGrid, see [`GridOptions`](#girdoptions).

## `ProtoNode`: 

```ts
interface ProtoNode extends ConfigNode {
    name: string;
    description: string;
    category?: string;
    private?: boolean;
    inputs: ProtoIO<any, any>;
    outputs: ProtoIO<any, any>;
    style?: ProtoNodeStyle
}
```

`name`: Provides the name of the node rendered in the Header.

`description`: Provides the node description in the editor context Menu.

`category`: Optional, defines a category this node is sort grouped into.

`private`: Optional, if `true`, won't be addable by the user.

`inputs`: Array of [`ProtoIO`](#protoiok-t)'s defining the nodes inputs.

`outputs`: Array of [`ProtoIO`](#protoiok-t)'s defining the nodes outputs.

`style`: Optional [`ProtoNodeStyle`](#protoiostyle). Changes the look of the node


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

:::info
The value `T` is readonly, changing it in a custom component won't have any effect. To change it, you have to call `setData` with your data object `K` and change it in the [`ConfigNode`](./../Documentation/NodeTypes.md#confignode)'s exe function with the provided `data` object. 
:::

## `ProtoIOStyle`:

```ts
interface ProtoIOStyle {
    color: string;
}
```

`color`: CSS color string. Changes the color of the io Port and connection line.

## `GirdOptions`:

```ts
interface GridOptions {
    backgroundColor?: string;
    lineColor?: string;
    boldLineColor?: string;
    boldLineSpacing?: number;
}
```

`backgroundColor`: CSS color string. Set's the default background for the nodeEditor.

`lineColor`: CSS color string. Set's the color of the background lines.

`boldLineColor`: CSS color string. Set's the color of the repeating bold lines in the background.

`boldLineSpacing`: Defines how many tiles should be rendered in between bold lines. Will render `boldLineSpacing+1` tiles. Set to `0` to disable rendering of bold lines. 