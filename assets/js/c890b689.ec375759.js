"use strict";(self.webpackChunkgraph_exe=self.webpackChunkgraph_exe||[]).push([[276],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var o=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=o.createContext({}),l=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=l(e.components);return o.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=l(t),m=a,h=u["".concat(c,".").concat(m)]||u[m]||s[m]||i;return t?o.createElement(h,r(r({ref:n},d),{},{components:t})):o.createElement(h,r({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,r=new Array(i);r[0]=u;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,r[1]=p;for(var l=2;l<i;l++)r[l]=t[l];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},2418:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>s,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var o=t(7462),a=(t(7294),t(3905));const i={sidebar_position:2},r="Functions",p={unversionedId:"Documentation/functions",id:"Documentation/functions",title:"Functions",description:"This page contains information about all functions found in the Graph.exe-core",source:"@site/docs/Documentation/functions.md",sourceDirName:"Documentation",slug:"/Documentation/functions",permalink:"/graph.exe-core/Documentation/functions",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Documentation/functions.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Quick Start Guide: Core",permalink:"/graph.exe-core/Documentation/qsgCore"},next:{title:"NodeTypes",permalink:"/graph.exe-core/Documentation/NodeTypes"}},c={},l=[{value:"Graph functions",id:"graph-functions",level:2},{value:"executeGraph()",id:"executegraph",level:3},{value:"createGraph()",id:"creategraph",level:3},{value:"deleteGraph()",id:"deletegraph",level:3},{value:"next()",id:"next",level:3},{value:"getNodeId()",id:"getnodeid",level:3},{value:"Utility functions",id:"utility-functions",level:2},{value:"nodeBuilder()",id:"nodebuilder",level:3},{value:"extractor()",id:"extractor",level:3},{value:"connector()",id:"connector",level:3},{value:"splitter()",id:"splitter",level:3},{value:"connectionFinder()",id:"connectionfinder",level:3}],d={toc:l};function s(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"functions"},"Functions"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"This page contains information about all functions found in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Lexyna/graph.exe-core"},"Graph.exe-core"))),(0,a.kt)("h2",{id:"graph-functions"},"Graph functions"),(0,a.kt)("p",null,"This sections contains information about graph functions you can implement in your custom nodes."),(0,a.kt)("h3",{id:"executegraph"},"executeGraph()"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"executeGraph")," function takes as parameter a ",(0,a.kt)("inlineCode",{parentName:"p"},"ConfigNodeDict"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"EngineNodedict"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"EngineConnections")," as well as a entry point ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),", and tries to execute your graph once."),(0,a.kt)("p",null,"If you have provided a valid, executable graph, the function will return ",(0,a.kt)("inlineCode",{parentName:"p"},'[true, "Valid"]')," upon successful execution, otherwise it will return ",(0,a.kt)("inlineCode",{parentName:"p"},"[false, errorMsg]"),"."),(0,a.kt)("p",null,"The graph will also be destroyed upon complete execution."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"//Executes a valid, executable graph once\nexecuteGraph(config: ConfigNodeDict, nodes: EngineNodeDict, connections: EngineConnections, entry: string): [boolean, string]\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"config"),": Contains all ",(0,a.kt)("a",{parentName:"p",href:"/graph.exe-core/Documentation/NodeTypes#confignode"},(0,a.kt)("inlineCode",{parentName:"a"},"ConfigNodes"))," needed to execute this graph."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"nodes"),": Contains all ",(0,a.kt)("a",{parentName:"p",href:"/graph.exe-core/Documentation/NodeTypes#enginenode"},(0,a.kt)("inlineCode",{parentName:"a"},"EngineNodes"))," in the graph."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"connections"),": Tells the graph how ",(0,a.kt)("a",{parentName:"p",href:"/graph.exe-core/Documentation/NodeTypes#enginenode"},(0,a.kt)("inlineCode",{parentName:"a"},"EngineNodes"))," are connected. Used to resolve dependencies and trigger ",(0,a.kt)("a",{parentName:"p",href:"#next"},(0,a.kt)("inlineCode",{parentName:"a"},"next()"))," action."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"entry"),": The start point of the graph."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"onInit()")," method will be triggered once for every provided ",(0,a.kt)("inlineCode",{parentName:"p"},"EngineNode")," in the ",(0,a.kt)("inlineCode",{parentName:"p"},"EngineNodeDict")," right before execution in no particular order. ")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"onDestroy()")," method will be triggered once for every provided ",(0,a.kt)("a",{parentName:"p",href:"/graph.exe-core/Documentation/NodeTypes#enginenode"},(0,a.kt)("inlineCode",{parentName:"a"},"EngineNodes"))," in the ",(0,a.kt)("a",{parentName:"p",href:"/graph.exe-core/Documentation/NodeTypes#enginenodedict"},(0,a.kt)("inlineCode",{parentName:"a"},"EngineNodeDict"))," right after execution in no particular order. ")),(0,a.kt)("h3",{id:"creategraph"},"createGraph()"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"crateGraph()")," function will create a ",(0,a.kt)("inlineCode",{parentName:"p"},"inMemoryGraph")," that lives in memory and has to be manually delete via the ",(0,a.kt)("a",{parentName:"p",href:"#deletegraph"},(0,a.kt)("inlineCode",{parentName:"a"},"deleteGraph()"))," function."),(0,a.kt)("p",null,"Returns ",(0,a.kt)("inlineCode",{parentName:"p"},'[true, "Valid"]')," if the graph got successfully created, ",(0,a.kt)("inlineCode",{parentName:"p"},"[false, errorMsg]")," otherwise."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"createGraph(config: ConfigNodeDict, nodes: EngineNodeDict, connections: EngineConnections, graphName: string): [boolean, string]\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"config"),": Contains all ",(0,a.kt)("a",{parentName:"p",href:"/graph.exe-core/Documentation/NodeTypes#confignode"},(0,a.kt)("inlineCode",{parentName:"a"},"ConfigNodes"))," needed to execute this graph."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"nodes"),": Contains all ",(0,a.kt)("a",{parentName:"p",href:"/graph.exe-core/Documentation/NodeTypes#enginenode"},(0,a.kt)("inlineCode",{parentName:"a"},"EngineNodes"))," in the graph."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"connections"),": Tells the graph how ",(0,a.kt)("a",{parentName:"p",href:"/graph.exe-core/Documentation/NodeTypes#enginenode"},(0,a.kt)("inlineCode",{parentName:"a"},"EngineNodes"))," are connected. Used to resolve dependencies and trigger ",(0,a.kt)("a",{parentName:"p",href:"#next"},(0,a.kt)("inlineCode",{parentName:"a"},"next()"))," action."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"graphName"),": the unique name of the create graph."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"Note"),": Graphs created with ",(0,a.kt)("inlineCode",{parentName:"p"},"createGraph()")," will not trigger initially, they'll have to be triggered from within, for example, with an ",(0,a.kt)("inlineCode",{parentName:"p"},"eventListener"),".")),(0,a.kt)("h3",{id:"deletegraph"},"deleteGraph()"),(0,a.kt)("p",null,"Given a ",(0,a.kt)("inlineCode",{parentName:"p"},"graphName"),", the function will attempt to delete the ",(0,a.kt)("inlineCode",{parentName:"p"},"inMemoryGraph")," and trigger all ",(0,a.kt)("inlineCode",{parentName:"p"},"onDestroy()")," methods in the given graph. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"deleteGraph(graphName: string): void\n")),(0,a.kt)("h3",{id:"next"},"next()"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"next()")," function takes a ",(0,a.kt)("a",{parentName:"p",href:"/graph.exe-core/Documentation/connectionTypes#engineio"},(0,a.kt)("inlineCode",{parentName:"a"},"EngineIO"))," as parameter and triggers all nodes connected to the specified ",(0,a.kt)("a",{parentName:"p",href:"/graph.exe-core/Documentation/connectionTypes#engineio"},(0,a.kt)("inlineCode",{parentName:"a"},"EngineIO")),"."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The ",(0,a.kt)("a",{parentName:"p",href:"/graph.exe-core/Documentation/connectionTypes#engineio"},(0,a.kt)("inlineCode",{parentName:"a"},"EngineIO"))," has to be of ",(0,a.kt)("a",{parentName:"p",href:"/graph.exe-core/Documentation/connectionTypes#connectiontype"},(0,a.kt)("inlineCode",{parentName:"a"},"CONNECTION_TYPE")),": ",(0,a.kt)("inlineCode",{parentName:"p"},"OUTPUT"),", otherwise no nodes will be triggered.")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"If the ",(0,a.kt)("a",{parentName:"p",href:"/graph.exe-core/Documentation/connectionTypes#engineio"},(0,a.kt)("inlineCode",{parentName:"a"},"EngineIO"))," is connected to multiple other IO Ports, the order of execution is undefined!")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"//Triggers all connected nodes\nnext(EngineIO<any, any>): void\n")),(0,a.kt)("h3",{id:"getnodeid"},"getNodeId()"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"getNodeId()")," function takes a ",(0,a.kt)("a",{parentName:"p",href:"/graph.exe-core/Documentation/connectionTypes#engineio"},(0,a.kt)("inlineCode",{parentName:"a"},"EngineIO"))," as parameter and return the id of its parent ",(0,a.kt)("a",{parentName:"p",href:"/graph.exe-core/Documentation/NodeTypes#enginenode"},(0,a.kt)("inlineCode",{parentName:"a"},"EngineNode")),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"//Returns id of parent EngineNode\ngetNodeId(io: EngineIO<any, any>): string\n")),(0,a.kt)("h2",{id:"utility-functions"},"Utility functions"),(0,a.kt)("p",null,"This sections contains information about utility methods provided by the ",(0,a.kt)("inlineCode",{parentName:"p"},"graph.exe-core")," package.\nIf you're only interested in writing your own ",(0,a.kt)("inlineCode",{parentName:"p"},"graph.exe")," extension or just want to use the core package without an additional plugin, this sections provides you with information on how to work with just the core package."),(0,a.kt)("h3",{id:"nodebuilder"},"nodeBuilder()"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"nodeBuilder()")," functions will return a valid ",(0,a.kt)("a",{parentName:"p",href:"/graph.exe-core/Documentation/NodeTypes#enginenode"},(0,a.kt)("inlineCode",{parentName:"a"},"EngineNode"))," with the assigned id, based on the passed ",(0,a.kt)("a",{parentName:"p",href:"/graph.exe-core/Documentation/NodeTypes#confignode"},(0,a.kt)("inlineCode",{parentName:"a"},"ConfigNode")),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"nodeBuilder(configNode: ConfigNode, id: string): EngineNode\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"configNode"),": The ",(0,a.kt)("a",{parentName:"p",href:"/graph.exe-core/Documentation/NodeTypes#confignode"},(0,a.kt)("inlineCode",{parentName:"a"},"ConfigNode"))," template the new ",(0,a.kt)("a",{parentName:"p",href:"/graph.exe-core/Documentation/NodeTypes#enginenode"},(0,a.kt)("inlineCode",{parentName:"a"},"EngineNode"))," will reference."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"id"),": Unique id to assign the new ",(0,a.kt)("a",{parentName:"p",href:"/graph.exe-core/Documentation/NodeTypes#enginenode"},(0,a.kt)("inlineCode",{parentName:"a"},"EngineNode")),"."),(0,a.kt)("h3",{id:"extractor"},"extractor()"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"extractor()")," function return all ",(0,a.kt)("a",{parentName:"p",href:"/graph.exe-core/Documentation/connectionTypes#nodeports"},(0,a.kt)("inlineCode",{parentName:"a"},"NodePorts"))," of the provided ",(0,a.kt)("a",{parentName:"p",href:"/graph.exe-core/Documentation/NodeTypes#enginenode"},(0,a.kt)("inlineCode",{parentName:"a"},"EngineNodes")),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"extractor(node: EngineNode): NodePorts\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"node"),": The ",(0,a.kt)("a",{parentName:"p",href:"/graph.exe-core/Documentation/NodeTypes#enginenode"},(0,a.kt)("inlineCode",{parentName:"a"},"EngineNode"))," to extract all IO ports from."),(0,a.kt)("h3",{id:"connector"},"connector()"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"connector")," function create a valid connection between a provided OutputIO port and InputIO port in the given ",(0,a.kt)("a",{parentName:"p",href:"/graph.exe-core/Documentation/connectionTypes#engineconnections"},(0,a.kt)("inlineCode",{parentName:"a"},"EngineConnections")),"."),(0,a.kt)("p",null,"Return true if the connection got successfully created."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"connector(output: ConnectionsDetails, input: ConnectionsDetails, connections: EngineConnections): boolean\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"output"),": The ",(0,a.kt)("a",{parentName:"p",href:"/graph.exe-core/Documentation/connectionTypes#connectiondetails"},(0,a.kt)("inlineCode",{parentName:"a"},"ConnectionDetails"))," of the output nodes ",(0,a.kt)("a",{parentName:"p",href:"/graph.exe-core/Documentation/connectionTypes#engineio"},(0,a.kt)("inlineCode",{parentName:"a"},"EngineIO")),", can be found with the ",(0,a.kt)("a",{parentName:"p",href:"#extractor"},(0,a.kt)("inlineCode",{parentName:"a"},"extractor()"))," function."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"input"),": The ",(0,a.kt)("a",{parentName:"p",href:"/graph.exe-core/Documentation/connectionTypes#connectiondetails"},(0,a.kt)("inlineCode",{parentName:"a"},"ConnectionDetails"))," of the input nodes ",(0,a.kt)("a",{parentName:"p",href:"/graph.exe-core/Documentation/connectionTypes#engineio"},(0,a.kt)("inlineCode",{parentName:"a"},"EngineIO")),", can be found with the ",(0,a.kt)("a",{parentName:"p",href:"#extractor"},(0,a.kt)("inlineCode",{parentName:"a"},"extractor()"))," function."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"connections"),": The ",(0,a.kt)("a",{parentName:"p",href:"/graph.exe-core/Documentation/connectionTypes#engineconnections"},(0,a.kt)("inlineCode",{parentName:"a"},"EngineConnections"))," dict to add the new connection to."),(0,a.kt)("h3",{id:"splitter"},"splitter()"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"splitter")," function cuts a connection between provided Output and Input Io Ports in the given ",(0,a.kt)("a",{parentName:"p",href:"/graph.exe-core/Documentation/connectionTypes#engineconnections"},(0,a.kt)("inlineCode",{parentName:"a"},"EngineConnections")),"."),(0,a.kt)("p",null,"returns ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," if the connection got successfully cut."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"splitter(output: ConnectionsDetails, input: ConnectionsDetails, connections: EngineConnections): boolean\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"output"),": The ",(0,a.kt)("a",{parentName:"p",href:"/graph.exe-core/Documentation/connectionTypes#connectiondetails"},(0,a.kt)("inlineCode",{parentName:"a"},"ConnectionDetails"))," of the output nodes",(0,a.kt)("a",{parentName:"p",href:"/graph.exe-core/Documentation/connectionTypes#engineconnections"},(0,a.kt)("inlineCode",{parentName:"a"},"EngineConnections")),", can be found with the ",(0,a.kt)("a",{parentName:"p",href:"#extractor"},(0,a.kt)("inlineCode",{parentName:"a"},"extractor()"))," function."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"input"),": The ",(0,a.kt)("a",{parentName:"p",href:"/graph.exe-core/Documentation/connectionTypes#connectiondetails"},(0,a.kt)("inlineCode",{parentName:"a"},"ConnectionDetails"))," of the input nodes ",(0,a.kt)("a",{parentName:"p",href:"/graph.exe-core/Documentation/connectionTypes#engineconnections"},(0,a.kt)("inlineCode",{parentName:"a"},"EngineConnections")),", can be found with the ",(0,a.kt)("a",{parentName:"p",href:"#extractor"},(0,a.kt)("inlineCode",{parentName:"a"},"extractor()"))," function."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"connections"),": The ",(0,a.kt)("a",{parentName:"p",href:"/graph.exe-core/Documentation/connectionTypes#engineconnections"},(0,a.kt)("inlineCode",{parentName:"a"},"EngineConnections"))," dict to split the connection from."),(0,a.kt)("h3",{id:"connectionfinder"},"connectionFinder()"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"connectionFinder()")," function return an array of all found ",(0,a.kt)("a",{parentName:"p",href:"/graph.exe-core/Documentation/connectionTypes#connectiondetails"},(0,a.kt)("inlineCode",{parentName:"a"},"ConnectionDetails"))," connected to the provided input/output IO Port."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"connectionFinder(io: connectionDetails, connections: EngineConnections): connectionDetails[]\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"io"),": The ",(0,a.kt)("a",{parentName:"p",href:"/graph.exe-core/Documentation/connectionTypes#connectiondetails"},(0,a.kt)("inlineCode",{parentName:"a"},"ConnectionDetails"))," of the Input/Output Port, can be found with the ",(0,a.kt)("a",{parentName:"p",href:"#extractor"},(0,a.kt)("inlineCode",{parentName:"a"},"extractor()"))," function."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"connections"),": The ",(0,a.kt)("a",{parentName:"p",href:"/graph.exe-core/Documentation/connectionTypes#engineconnections"},(0,a.kt)("inlineCode",{parentName:"a"},"EngineConnections"))," to search for connections."))}s.isMDXComponent=!0}}]);