"use strict";(self.webpackChunkactivejdocs=self.webpackChunkactivejdocs||[]).push([[2208],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),m=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=m(e.components);return a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=m(n),d=r,h=u["".concat(o,".").concat(d)]||u[d]||p[d]||i;return n?a.createElement(h,c(c({ref:t},s),{},{components:n})):a.createElement(h,c({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var m=2;m<i;m++)c[m]=n[m];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},77618:function(e,t,n){var a=n(67294),r=n(39962);t.Z=function(e){var t=e.url,n=e.text,i=e.isInline,c=void 0===i||i,l=e.isExample,o=void 0!==l&&l,m=e.children,s=(0,r.Z)().siteConfig;return a.createElement("a",{style:c?{}:{display:"block",marginBottom:"16px"},href:s.customFields.githubUrl+"/"+s.customFields.githubBranch+(o?"-examples":"")+t,target:"_blank"},n||m)}},26302:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return m},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),c=n(77618),l=["components"],o={keywords:["java","java framework","tutorial","guide","memcached","rpc","client-server","web application"],sidebar_label:"Memcached-like Application",title:"ActiveJ RPC | Create a memcached-like application with RPC communication protocol using ActiveJ RPC.",description:"Create a memcached-like application with RPC communication protocol using ActiveJ RPC."},m="Memcached-like Application",s={unversionedId:"rpc/memcached-like-application",id:"rpc/memcached-like-application",isDocsHomePage:!1,title:"ActiveJ RPC | Create a memcached-like application with RPC communication protocol using ActiveJ RPC.",description:"Create a memcached-like application with RPC communication protocol using ActiveJ RPC.",source:"@site/docs/rpc/memcached-like-application.mdx",sourceDirName:"rpc",slug:"/rpc/memcached-like-application",permalink:"/rpc/memcached-like-application",version:"current",frontMatter:{keywords:["java","java framework","tutorial","guide","memcached","rpc","client-server","web application"],sidebar_label:"Memcached-like Application",title:"ActiveJ RPC | Create a memcached-like application with RPC communication protocol using ActiveJ RPC.",description:"Create a memcached-like application with RPC communication protocol using ActiveJ RPC."},sidebar:"docs",previous:{title:"Key-Value Storage",permalink:"/rpc/key-value-storage"},next:{title:"Overview",permalink:"/fs"}},p=[{value:"Memcached Client and Server Modules",id:"memcached-client-and-server-modules",children:[]},{value:"Create Client and Server",id:"create-client-and-server",children:[]},{value:"Running the application",id:"running-the-application",children:[]}],u={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"memcached-like-application"},"Memcached-like Application"),(0,i.kt)("p",null,"In this guide we will create a memcached-like client-server application that is based on the RPC communication protocol\nand ActiveJ technologies."),(0,i.kt)("p",null,"You can find full example sources on ",(0,i.kt)(c.Z,{text:"GitHub",url:"/examples/cloud/rpc/src/main/java/memcached",mdxType:"Githublink"}),"."),(0,i.kt)("h2",{id:"memcached-client-and-server-modules"},"Memcached Client and Server Modules"),(0,i.kt)("p",null,"First of all, consider the initial ActiveJ RPC implementation of these modules since our application will be built with\ntheir help:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)(c.Z,{text:"MemcacheServerModule",url:"/extra/cloud-memcache/src/main/java/io/activej/memcache/server/MemcacheServerModule.java",mdxType:"Githublink"}))," exports an ",(0,i.kt)("strong",{parentName:"li"},"RpcServer")," for handling the ",(0,i.kt)("inlineCode",{parentName:"li"},"get")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"put")," requests.  To launch several servers on a single JVM, we provide the ",(0,i.kt)(c.Z,{text:"MemcacheMultiServerModule",url:"/examples/cloud/rpc/src/main/java/memcached/MemcacheMultiServerModule.java",mdxType:"Githublink"})," with integrated ",(0,i.kt)("a",{parentName:"li",href:"/boot/workers"},"WorkerPools"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)(c.Z,{text:"MemcacheClientModule",url:"/extra/cloud-memcache/src/main/java/io/activej/memcache/client/MemcacheClientModule.java",mdxType:"Githublink"}))," sets a ",(0,i.kt)("a",{parentName:"li",href:"/rpc/basic-examples#rendezvous-hashing-strategy"},"Rendezvous Hashing Strategy")," for request arrangement between shards of servers.")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This implementation covers only the basic usage. You may add more features as your application requires."))),(0,i.kt)("h2",{id:"create-client-and-server"},"Create Client and Server"),(0,i.kt)("p",null,"Let's write our own ",(0,i.kt)(c.Z,{text:"MemcacheLikeServer",url:"/examples/cloud/rpc/src/main/java/memcached/MemcacheLikeServer.java",mdxType:"Githublink"}),"\nserver. We will also use ",(0,i.kt)("a",{parentName:"p",href:"/boot/launcher"},(0,i.kt)("strong",{parentName:"a"},"ActiveJ Launcher"))," to manage application lifecycle and\nlightning-fast Dependency Injection library ",(0,i.kt)("a",{parentName:"p",href:"/inject"},"ActiveJ Inject"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/cloud/rpc/src/main/java/memcached/MemcacheLikeServer.java tag=REGION_1",url:"/examples/cloud/rpc/src/main/java/memcached/MemcacheLikeServer.java",tag:"REGION_1"},'public class MemcacheLikeServer extends Launcher {\n  @Inject\n  WorkerPool.Instances<RpcServer> instances;\n\n  @Provides\n  WorkerPool workerPool(WorkerPools workerPools) {\n    return workerPools.createPool(3);\n  }\n\n  @Provides\n  Config config() {\n    return Config.create()\n        .with("memcache.buffers", "4")\n        .with("memcache.bufferCapacity", "64mb");\n  }\n\n  @Override\n  protected Module getModule() {\n    return ModuleBuilder.create()\n        .install(ServiceGraphModule.create())\n        .install(MemcacheMultiServerModule.create())\n        .install(WorkerPoolModule.create())\n        .build();\n  }\n\n  @Override\n  protected void run() throws Exception {\n    awaitShutdown();\n  }\n\n  public static void main(String[] args) throws Exception {\n    MemcacheLikeServer server = new MemcacheLikeServer();\n    server.launch(args);\n  }\n}\n')),(0,i.kt)("p",null,"Since we extend ",(0,i.kt)("strong",{parentName:"p"},"Launcher"),", we need to override 2 methods: ",(0,i.kt)("em",{parentName:"p"},"getModule")," to provide ",(0,i.kt)("a",{parentName:"p",href:"/boot/servicegraph"},(0,i.kt)("strong",{parentName:"a"},"ServiceGraphModule"))," and ",(0,i.kt)("em",{parentName:"p"},"run")," to describe the main logic of the example."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The number of server shards equals the number of ",(0,i.kt)(c.Z,{text:"workerPools",url:"/boot-workers/src/main/java/io/activej/worker/WorkerPools.java",mdxType:"Githublink"})),(0,i.kt)("li",{parentName:"ul"},'As for the "memcached" functionality - we specify the number of buffers and their capacity in the ',(0,i.kt)(c.Z,{text:"Config",url:"/boot-config/src/main/java/io/activej/config/Config.java",mdxType:"Githublink"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Config")," is used to set up everything ",(0,i.kt)(c.Z,{text:"MemcacheMultiServerModule",url:"/examples/cloud/rpc/src/main/java/memcached/MemcacheMultiServerModule.java",mdxType:"Githublink"})," needs to handle upcoming requests.")),(0,i.kt)("p",null,"Our ",(0,i.kt)(c.Z,{text:"MemcacheLikeClient",url:"/examples/cloud/rpc/src/main/java/memcached/MemcacheLikeClient.java",mdxType:"Githublink"})," will create ",(0,i.kt)("inlineCode",{parentName:"p"},"put")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"get")," requests:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/cloud/rpc/src/main/java/memcached/MemcacheLikeClient.java tag=REGION_1",url:"/examples/cloud/rpc/src/main/java/memcached/MemcacheLikeClient.java",tag:"REGION_1"},'public class MemcacheLikeClient extends Launcher {\n  @Provides\n  Eventloop eventloop() {\n    return Eventloop.create();\n  }\n\n  @Provides\n  RawMemcacheClientAdapter rawMemcacheClientAdapter(RawMemcacheClient client) {\n    return new RawMemcacheClientAdapter(client);\n  }\n\n  @Provides\n  Config config() {\n    return Config.create()\n        .with("protocol.compression", "false")\n        .with("client.addresses", "localhost:9000, localhost:9001, localhost:9002");\n  }\n\n  @Inject\n  RawMemcacheClientAdapter client;\n\n  @Inject\n  Eventloop eventloop;\n\n  @Override\n  protected Module getModule() {\n    return ModuleBuilder.create()\n        .install(ServiceGraphModule.create())\n        .install(MemcacheClientModule.create())\n        .install(ConfigModule.create()\n            .withEffectiveConfigLogger())\n        .build();\n  }\n\n  @Override\n  protected void run() throws ExecutionException, InterruptedException {\n    String message = "Hello, Memcached Server";\n\n    System.out.println();\n    CompletableFuture<Void> future = eventloop.submit(() ->\n        sequence(\n            () -> Promises.all(range(0, 25).mapToObj(i ->\n                client.put(i, message))),\n            () -> Promises.all(range(0, 25).mapToObj(i ->\n                client.get(i).whenResult(res -> System.out.println(i + " : " + res))))));\n    future.get();\n    System.out.println();\n  }\n\n  public static void main(String[] args) throws Exception {\n    Launcher client = new MemcacheLikeClient();\n    client.launch(args);\n  }\n}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Since ",(0,i.kt)("strong",{parentName:"li"},"MemcacheClientModule")," uses Rendezvous Hashing Strategy to achieve agreement for requests between\nshards of servers, in client we need to provide the addresses of these shards - ",(0,i.kt)("inlineCode",{parentName:"li"},"9001"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"9002"),", and ",(0,i.kt)("inlineCode",{parentName:"li"},"9003")," ports."),(0,i.kt)("li",{parentName:"ul"},"In the ",(0,i.kt)("a",{parentName:"li",href:"/async-io/eventloop"},(0,i.kt)("strong",{parentName:"a"},"Eventloop"))," we ask to ",(0,i.kt)("inlineCode",{parentName:"li"},"put")," a message in the current ",(0,i.kt)("em",{parentName:"li"},"i")," of the ",(0,i.kt)("em",{parentName:"li"},"bytes","[i]")," array,\nand ",(0,i.kt)("inlineCode",{parentName:"li"},"get")," it back from the corresponding cell."),(0,i.kt)("li",{parentName:"ul"},"So the client will perform these operations asynchronously for three shards, therefore we will receive a disordered output block as a result."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)(c.Z,{text:"RawMemcacheClientAdapter",url:"/examples/cloud/rpc/src/main/java/memcached/RawMemcacheClientAdapter.java",mdxType:"Githublink"})),"\nis a manually created class. It uses ",(0,i.kt)(c.Z,{text:"RawMemcacheClient",url:"/extra/cloud-memcache/src/main/java/io/activej/memcache/client/RawMemcacheClient.java",mdxType:"Githublink"})," (a ",(0,i.kt)(c.Z,{text:"MemcacheClient",url:"/extra/cloud-memcache/src/main/java/io/activej/memcache/client/MemcacheClient.java",mdxType:"Githublink"}),"\nimplementation) and defines the logic of ",(0,i.kt)("inlineCode",{parentName:"li"},"put")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"get")," methods for our ",(0,i.kt)("strong",{parentName:"li"},"MemcacheLikeClient"),".")),(0,i.kt)("h2",{id:"running-the-application"},"Running the application"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"First, open and run the ",(0,i.kt)("strong",{parentName:"li"},"MemcacheLikeServer")," to launch the server;"),(0,i.kt)("li",{parentName:"ul"},"To launch the client, run ",(0,i.kt)("inlineCode",{parentName:"li"},"main()")," method of ",(0,i.kt)("strong",{parentName:"li"},"MemcacheLikeClient"),";")),(0,i.kt)("p",null,"You will see roughly the same output in the server's console (",(0,i.kt)("inlineCode",{parentName:"p"},"...")," omits similar messages):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"Server on port #9000 accepted message!\nServer on port #9000 accepted message!\n...\nServer on port #9000 accepted message!\nServer on port #9002 accepted message!\nServer on port #9002 accepted message!\n...\nServer on port #9002 accepted message!\nServer on port #9001 accepted message!\n...\nServer on port #9001 accepted message!\n")),(0,i.kt)("p",null,"In the client console you will see a similar output confirming the client received asynchronous responses from the server:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"0 : Hello, Memcached Server\n3 : Hello, Memcached Server\n4 : Hello, Memcached Server\n...\n11 : Hello, Memcached Server\n13 : Hello, Memcached Server\n...\n20 : Hello, Memcached Server\n21 : Hello, Memcached Server\n24 : Hello, Memcached Server\n...\n17 : Hello, Memcached Server\n19 : Hello, Memcached Server\n")))}d.isMDXComponent=!0}}]);