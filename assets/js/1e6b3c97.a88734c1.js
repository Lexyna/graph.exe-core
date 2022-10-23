"use strict";(self.webpackChunkgraph_exe=self.webpackChunkgraph_exe||[]).push([[438],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),d=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=d(n),k=r,m=u["".concat(l,".").concat(k)]||u[k]||c[k]||a;return n?o.createElement(m,i(i({ref:t},s),{},{components:n})):o.createElement(m,i({ref:t},s))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var d=2;d<a;d++)i[d]=n[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4831:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>p,toc:()=>d});var o=n(7462),r=(n(7294),n(3905));const a={sidebar_position:1},i="Types",p={unversionedId:"React/react",id:"React/react",title:"Types",description:"NodeEditorProps:",source:"@site/docs/React/react.md",sourceDirName:"React",slug:"/React/",permalink:"/graph.exe-core/React/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/React/react.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Quick Start Guide: React",permalink:"/graph.exe-core/React/qsgReact"},next:{title:"Functions",permalink:"/graph.exe-core/React/functions"}},l={},d=[{value:"<code>NodeEditorProps</code>:",id:"nodeeditorprops",level:2},{value:"<code>ProtoNode</code>:",id:"protonode",level:2},{value:"<code>ProtoNodeDict</code>:",id:"protonodedict",level:2},{value:"<code>ProtoNodeStyle</code>:",id:"protonodestyle",level:2},{value:"<code>ProtoEngineNode</code>",id:"protoenginenode",level:2},{value:"<code>ProtoEngineNodeDict</code>:",id:"protoenginenodedict",level:2},{value:"<code>ProtoIO&lt;K, T&gt;</code>",id:"protoiok-t",level:2},{value:"<code>ExtraProps&lt;K, T&gt;</code>:",id:"extrapropsk-t",level:2},{value:"<code>ProtoIOStyle</code>:",id:"protoiostyle",level:2},{value:"<code>GirdOptions</code>:",id:"girdoptions",level:2}],s={toc:d};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"types"},"Types"),(0,r.kt)("h2",{id:"nodeeditorprops"},(0,r.kt)("inlineCode",{parentName:"h2"},"NodeEditorProps"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"interface NodeEditorProps {\n    config: ProtoNodeDict;\n    nodes: ProtoEngineNodeDict;\n    connections: EngineConnections;\n    debugMode: boolean;\n    entryId?: string;\n    gridOptions?: GridOptions; \n}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"config"),": ",(0,r.kt)("a",{parentName:"p",href:"#protonodedict"},"ProtoNodeDict"),", provides config nodes for the editor."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"nodes"),": ",(0,r.kt)("a",{parentName:"p",href:"#protoenginenodedict"},(0,r.kt)("inlineCode",{parentName:"a"},"ProtoEngineNodeDict")),", stores ",(0,r.kt)("a",{parentName:"p",href:"#protoenginenode"},"ProtEngineNode"),"'s."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"connections"),": ",(0,r.kt)("a",{parentName:"p",href:"/graph.exe-core/Documentation/connectionTypes#engineconnections"},(0,r.kt)("inlineCode",{parentName:"a"},"EngineConnections")),", maps the relationship between nodes."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"debugMode"),": If ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," will show a stringified version of the ",(0,r.kt)("a",{parentName:"p",href:"#protoiok-t"},(0,r.kt)("inlineCode",{parentName:"a"},"ProtoIO")),"'s value next to the label."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"entryId"),": If provided, will attempt to execute the Graph with each change. A status symbol at the bottom right of the editor will display the Graphs status."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"gridOptions"),": Style options for the backgroundGrid, see ",(0,r.kt)("a",{parentName:"p",href:"#girdoptions"},(0,r.kt)("inlineCode",{parentName:"a"},"GridOptions")),"."),(0,r.kt)("h2",{id:"protonode"},(0,r.kt)("inlineCode",{parentName:"h2"},"ProtoNode"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"interface ProtoNode extends ConfigNode {\n    name: string;\n    description: string;\n    category?: string;\n    private?: boolean;\n    inputs: ProtoIO<any, any>;\n    outputs: ProtoIO<any, any>;\n    style?: ProtoNodeStyle\n}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"name"),": Provides the name of the node rendered in the Header."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"description"),": Provides the node description in the editor context Menu."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"category"),": Optional, defines a category this node is sort grouped into."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"private"),": Optional, if ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", won't be addable by the user."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"inputs"),": Array of ",(0,r.kt)("a",{parentName:"p",href:"#protoiok-t"},(0,r.kt)("inlineCode",{parentName:"a"},"ProtoIO")),"'s defining the nodes inputs."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"outputs"),": Array of ",(0,r.kt)("a",{parentName:"p",href:"#protoiok-t"},(0,r.kt)("inlineCode",{parentName:"a"},"ProtoIO")),"'s defining the nodes outputs."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"style"),": Optional ",(0,r.kt)("a",{parentName:"p",href:"#protoiostyle"},(0,r.kt)("inlineCode",{parentName:"a"},"ProtoNodeStyle")),". Changes the look of the node"),(0,r.kt)("h2",{id:"protonodedict"},(0,r.kt)("inlineCode",{parentName:"h2"},"ProtoNodeDict"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"interface ProtoNodeDict {\n    [k: string]: ProtoNode\n}\n")),(0,r.kt)("p",null,"A dictionary containing all ",(0,r.kt)("a",{parentName:"p",href:"#protonode"},(0,r.kt)("inlineCode",{parentName:"a"},"ProtoNode")),"'s. Used to pass node configuration to the NodeEditor."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The key of the ",(0,r.kt)("inlineCode",{parentName:"p"},"ProtoNodeDict")," needs to be equal to the given ",(0,r.kt)("a",{parentName:"p",href:"#protonode"},(0,r.kt)("inlineCode",{parentName:"a"},"ProtoNode")),"'s ",(0,r.kt)("inlineCode",{parentName:"p"},"id"),".")),(0,r.kt)("h2",{id:"protonodestyle"},(0,r.kt)("inlineCode",{parentName:"h2"},"ProtoNodeStyle"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"interface ProtoNodeStyle {\n    headerColor: string;\n    bodyColor: string;\n}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"headerColor"),": CSS color string."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"bodyColor:")," CSS color string."),(0,r.kt)("h2",{id:"protoenginenode"},(0,r.kt)("inlineCode",{parentName:"h2"},"ProtoEngineNode")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"interface ProtoEngineNode extends EngineNode{\n    position: {x: number, y: number};\n    static: boolean\n}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"position"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"(x,y)")," position of the node in the editor."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"static"),": If ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", node won't be deletable."),(0,r.kt)("h2",{id:"protoenginenodedict"},(0,r.kt)("inlineCode",{parentName:"h2"},"ProtoEngineNodeDict"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"interface ProtEngineNodeDict {\n    [k: string]: ProtoEngineNode\n}\n")),(0,r.kt)("p",null,"A dictionary containing all ",(0,r.kt)("inlineCode",{parentName:"p"},"ProtoEngineNode"),"'s. Used to add/remove nodes within the NodeEditor."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The key of the ",(0,r.kt)("inlineCode",{parentName:"p"},"ProtEngineNodeDict")," needs to be equal to the given ",(0,r.kt)("a",{parentName:"p",href:"#protonode"},(0,r.kt)("inlineCode",{parentName:"a"},"ProtoEngineNode")),"'s ",(0,r.kt)("inlineCode",{parentName:"p"},"id"),".")),(0,r.kt)("h2",{id:"protoiok-t"},(0,r.kt)("inlineCode",{parentName:"h2"},"ProtoIO<K, T>")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"interface ProtoIO<K, T> extends EngineIO<K, T>{\n    label: string;\n    extra: React.FC<Extraprops<K, T>> | null;\n    style?: ProtoIOStyle;\n}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"label"),": Default string displayed next to the io Port. Replaced if ",(0,r.kt)("inlineCode",{parentName:"p"},"extra")," is not ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"extra"),": Custom React Component that render next to the IO Port."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"style"),": Optional style changing the look of the ioPort and it's connections."),(0,r.kt)("h2",{id:"extrapropsk-t"},(0,r.kt)("inlineCode",{parentName:"h2"},"ExtraProps<K, T>"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"interface ExtraProps<K, T> {\n    setData: (data: K) => void;\n    data: K;\n    value: T;\n}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"setData"),": Calling this function will set the ",(0,r.kt)("a",{parentName:"p",href:"/graph.exe-core/Documentation/connectionTypes#engineiok-t"},(0,r.kt)("inlineCode",{parentName:"a"},"data"))," value of the io Port to the passed ",(0,r.kt)("inlineCode",{parentName:"p"},"data"),"'s value."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"data"),": Current data of the io Port."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"value"),": Current value of the io Port. "),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The value ",(0,r.kt)("inlineCode",{parentName:"p"},"T")," is readonly, changing it in a custom component won't have any effect. To change it, you have to call ",(0,r.kt)("inlineCode",{parentName:"p"},"setData")," with your data object ",(0,r.kt)("inlineCode",{parentName:"p"},"K")," and change it in the ",(0,r.kt)("a",{parentName:"p",href:"/graph.exe-core/Documentation/NodeTypes#confignode"},(0,r.kt)("inlineCode",{parentName:"a"},"ConfigNode")),"'s exe function with the provided ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," object. ")),(0,r.kt)("h2",{id:"protoiostyle"},(0,r.kt)("inlineCode",{parentName:"h2"},"ProtoIOStyle"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"interface ProtoIOStyle {\n    color: string;\n}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"color"),": CSS color string. Changes the color of the io Port and connection line."),(0,r.kt)("h2",{id:"girdoptions"},(0,r.kt)("inlineCode",{parentName:"h2"},"GirdOptions"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"interface GridOptions {\n    backgroundColor?: string;\n    lineColor?: string;\n    boldLineColor?: string;\n    boldLineSpacing?: number;\n}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"backgroundColor"),": CSS color string. Set's the default background for the nodeEditor."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"lineColor"),": CSS color string. Set's the color of the background lines."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"boldLineColor"),": CSS color string. Set's the color of the repeating bold lines in the background."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"boldLineSpacing"),": Defines how many tiles should be rendered in between bold lines. Will render ",(0,r.kt)("inlineCode",{parentName:"p"},"boldLineSpacing+1")," tiles. Set to ",(0,r.kt)("inlineCode",{parentName:"p"},"0")," to disable rendering of bold lines."))}c.isMDXComponent=!0}}]);