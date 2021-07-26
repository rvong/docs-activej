(self.webpackChunkactivejdocs=self.webpackChunkactivejdocs||[]).push([[8025],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return v}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(r),v=i,m=d["".concat(s,".").concat(v)]||d[v]||u[v]||o;return r?n.createElement(m,a(a({ref:t},p),{},{components:r})):n.createElement(m,a({ref:t},p))}));function v(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},77815:function(e,t,r){"use strict";r(67294);var n=r(39962);t.Z=function(e){var t=e.name,r=(0,n.Z)().siteConfig;if(!t)throw new Error("Variable name is required");if(void 0===r.customFields[t])throw new Error("Variable "+t+" not exist");return r.customFields[t]}},72941:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return v}});var n=r(22122),i=r(19756),o=(r(67294),r(3905)),a=r(77815),c=["components"],s={title:"ActiveJ RPC | Lightning-fast binary protocol for high-load architecture",keywords:["java","java library","tutorial","guide","memcached","rpc","web application","high-load","microservices"],sidebar_label:"Overview",description:"ActiveJ RPC is a lightning-fast binary protocol for high-load microservices architecture",slug:"/rpc"},l="Overview",p={unversionedId:"rpc/overview",id:"rpc/overview",isDocsHomePage:!1,title:"ActiveJ RPC | Lightning-fast binary protocol for high-load architecture",description:"ActiveJ RPC is a lightning-fast binary protocol for high-load microservices architecture",source:"@site/docs/rpc/overview.mdx",sourceDirName:"rpc",slug:"/rpc",permalink:"/rpc",version:"current",frontMatter:{title:"ActiveJ RPC | Lightning-fast binary protocol for high-load architecture",keywords:["java","java library","tutorial","guide","memcached","rpc","web application","high-load","microservices"],sidebar_label:"Overview",description:"ActiveJ RPC is a lightning-fast binary protocol for high-load microservices architecture",slug:"/rpc"},sidebar:"docs",previous:{title:"Examples",permalink:"/specializer/examples"},next:{title:"Basic Examples",permalink:"/rpc/basic-examples"}},u=[{value:"Why ActiveJ RPC?",id:"why-activej-rpc",children:[]},{value:"Asynchronous binary RPC protocol with extensive cloud strategies",id:"asynchronous-binary-rpc-protocol-with-extensive-cloud-strategies",children:[]},{value:"Add ActiveJ RPC to your project",id:"add-activej-rpc-to-your-project",children:[]}],d={toc:u};function v(e){var t=e.components,r=(0,i.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"overview"},"Overview"),(0,o.kt)("p",null,"ActiveJ RPC is a lightweight and convenient Java library for developing ",(0,o.kt)("strong",{parentName:"p"},"high-load distributed applications")," and Memcached-like solutions. It introduces a completely ",(0,o.kt)("strong",{parentName:"p"},"alternative approach to microservices implementation")," and ",(0,o.kt)("strong",{parentName:"p"},"overcomes the overheads")," of utilizing HTTP protocol with JSON or XML encoding. ActiveJ RPC is powered by world's fastest JVM serializer ActiveJ Serializer, runs on TCP, supports pipelined requests and has a custom ",(0,o.kt)("strong",{parentName:"p"},"high-performance binary streaming protocol"),". Along with that, ActiveJ RPC utilizes Datastream module for asynchronous data processing and back pressure control. It also features built-in commonly used RPC ",(0,o.kt)("strong",{parentName:"p"},"strategies and high fault tolerance"),"."),(0,o.kt)("h2",{id:"why-activej-rpc"},"Why ActiveJ RPC?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Outstanding performance of up to ~15M requests per second on a single CPU core"),(0,o.kt)("li",{parentName:"ul"},"Simple API for defining client and server message handlers"),(0,o.kt)("li",{parentName:"ul"},"Wide range of RPC strategies (first available, round-robin, rendezvous hashing, etc.) that can be simply combined"),(0,o.kt)("li",{parentName:"ul"},"Custom high-performance streaming protocol"),(0,o.kt)("li",{parentName:"ul"},"Utilizes ActiveJ's ",(0,o.kt)("strong",{parentName:"li"},"Datastream, Net")," and ",(0,o.kt)("strong",{parentName:"li"},"Serializer")," modules to achieve top performance"),(0,o.kt)("li",{parentName:"ul"},"Fault tolerance with re-connections to fallback and replica servers"),(0,o.kt)("li",{parentName:"ul"},"Native support for message pipelining"),(0,o.kt)("li",{parentName:"ul"},"Ideal for near-real time servers with application-specific business logic"),(0,o.kt)("li",{parentName:"ul"},"Tested in a high-load production environment")),(0,o.kt)("h2",{id:"asynchronous-binary-rpc-protocol-with-extensive-cloud-strategies"},"Asynchronous binary RPC protocol with extensive cloud strategies"),(0,o.kt)("p",null,"ActiveJ RPC features highly optimized flexible server and client implementation along with predefined cloud strategies. With these technologies you can conveniently create even ",(0,o.kt)("strong",{parentName:"p"},"complex scalable solutions")," like ",(0,o.kt)("strong",{parentName:"p"},"high-performance microservices or Memcached-like")," servers."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'RpcServer rpcServer(Eventloop eventloop) {\n    return RpcServer.create(eventloop)\n        .withMessageTypes(String.class)\n        .withHandler(String.class, String.class,\n                request -> Promise.of("Hello " + request))\n        .withListenPort(SERVICE_PORT);\n}\n\nRpcClient rpcClient(Eventloop eventloop) {\n    return RpcClient.create(eventloop)\n        .withMessageTypes(String.class)\n        .withStrategy(server(new InetSocketAddress(SERVICE_PORT)));\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'rpcClient.sendRequest("World")\n    .whenResult(response -> System.out.println(response)); // prints "Hello World"\n')),(0,o.kt)("h2",{id:"add-activej-rpc-to-your-project"},"Add ActiveJ RPC to your project"),(0,o.kt)("p",null,"You can add ActiveJ RPC to your project by importing its Maven repository.\nThese docs cover the most recent release of ActiveJ RPC ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)(a.Z,{name:"currentVersion",mdxType:"Variable"}))," (see on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/activej/activej/tree/master/core-rpc"},"Github")," or ",(0,o.kt)("a",{parentName:"p",href:"https://mvnrepository.com/artifact/io.activej/activej-rpc"},"Maven"),")."))}v.isMDXComponent=!0}}]);