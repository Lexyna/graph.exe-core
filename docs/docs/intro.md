---
sidebar_position: 1
slug: /
---

# Graph.exe

## What is Graph.exe?

Graph.exe is a modular npm package, written completely in typescript aimed at creating executable Graph. It consists of multiple packages that, all packages are building upon the [`graph.exe-core`](https://github.com/Lexyna/graph.exe-core) package.

The core package provides the main functionality of execution, creating and deleting a graph. It all so comes with some other [`utilities functions`](./Documentation/functions.md#utility-functions) to connect nodes, build nodes etc. 

Other packages provide a basic userInterface `NodeEditor` Component that can be used and configured for their respective frameworks (currently only react).

## How does it work?

Each Graph gets its own `configuration`, usually consisting of an `entryId`, [`ConfigNodeDict`](./Documentation/NodeTypes.md#confognodedict), [`EngineNodeDict`](./Documentation/NodeTypes.md#enginenodedict), as well as [`EngineConnections`](./Documentation/connectionTypes.md#engineconnections).

Together, they specify a graph. Each connection between nodes is documented [`EngineConnections`](./Documentation/connectionTypes.md#engineconnections) Object. At runtime, the engine will start at the `entryId` and, resolve all dependencies (ingoing connections) before calling the defined `executable` function in the [`ConfigNode`](./Documentation/NodeTypes.md#confignode) related to the [`EngineNode`](./Documentation/NodeTypes.md#enginenode).

To call another nodes, a special function [`next()`](./Documentation/functions.md#next) exists. This function can be placed inside the `executable` function of a node and will trigger all connected nodes (in no specific order).

## What can I use graph.exe for?

`graph.exe` was designed to work with as many use cases a possible. Because each node contains their own callable function there is no limit to what is possible. Some other nodeEditor's don't allow for a simple way to create a control flow, e.g. from one node to another, while other might not even have an in build control flow making it difficult to resolve dependencies. `graph.exe` takes care of all of that. Some examples of what is possible can be found on the [`Showcase`](/Showcase) page. 

## Do I need to use React if I want to use graph.exe?

No, the [`core`](https://github.com/Lexyna/graph.exe-core) package has no dependencies at all, you can run it anywhere you can run javascript. The only caveat is that is has no user-interface by default. However you could easily build you own ontop of the core package using your preferred framework (or none at all). You can also take a look at the [`react-plugin`](https://github.com/Lexyna/graph.exe-react) github page to get an idea of how to get started.