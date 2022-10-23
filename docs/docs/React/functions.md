# Functions

### `buildEngineNode()`:

This function return a [`ProtoEngineNode`](./react.md#protonode) based on the passed [`ProtoNode`](./react.md#protonode).

```ts
buildEngineNode(protoNode: ProtoNode, static?: boolean);
```

`protoNode`: The parent [`ProtoNode`](./react.md#protonode) the [`ProtoEngineNode`](./react.md#protonode) will reference.

`static`: specified if the node should be static or not. A static node cannot be deleted by the user. Default: `false`.