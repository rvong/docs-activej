(self.webpackChunkactivejdocs=self.webpackChunkactivejdocs||[]).push([[6524],{77618:function(e,t,n){"use strict";var a=n(67294),r=n(39962);t.Z=function(e){var t=e.url,n=e.text,i=e.isInline,o=void 0===i||i,c=e.children,l=(0,r.Z)().siteConfig,s=t.startsWith("/examples")?l.customFields.githubExamplesBranch:l.customFields.githubBranch;return a.createElement("a",{style:o?{}:{display:"block",marginBottom:"16px"},href:l.customFields.githubUrl+"/"+s+t,target:"_blank"},n||c)}},14304:function(e,t,n){"use strict";var a=n(67294),r=n(21140),i=n.n(r);i().initialize({startOnLoad:!0});t.Z=function(e){var t=e.chart;return(0,a.useEffect)((function(){i().contentLoaded()}),[]),a.createElement("div",{className:"mermaid"},t)}},77815:function(e,t,n){"use strict";n(67294);var a=n(39962);t.Z=function(e){var t=e.name,n=(0,a.Z)().siteConfig;if(!t)throw new Error("Variable name is required");if(void 0===n.customFields[t])throw new Error("Variable "+t+" not exist");return n.customFields[t]}},6750:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return m},metadata:function(){return u},toc:function(){return d},default:function(){return v}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=n(77618),c=n(77815),l=n(14304),s=["components"],p={title:"ActiveJ | Net\uff0cNetty\u7684\u9ad8\u6027\u80fd\u66ff\u4ee3\u54c1\uff0c\u7528\u4e8e\u6784\u5efa\u65e0\u5f00\u9500\u7684\u5f02\u6b65\u670d\u52a1\u5668",description:"\u7528\u4e8e\u6784\u5efa\u5f02\u6b65HTTP\u3001RPC\u3001TCP\u670d\u52a1\u5668\u7684\u62bd\u8c61\u5c42\uff0c\u6ca1\u6709\u6027\u80fd\u5f00\u9500\u3002",sidebar_label:"Net",keywords:["tcp","rpc","http","java","JAVA\u6846\u67b6","spring \u9009\u62e9","jetty \u66ff\u4ee3\u65b9\u6848","netty \u66ff\u4ee3\u65b9\u6848","\u4e8b\u4ef6\u5faa\u73af","\u975e\u540c\u6b65\u670d\u52a1\u5668","\u5f02\u6b65"]},m="\u51c0\u503c",u={unversionedId:"async-io/net",id:"async-io/net",isDocsHomePage:!1,title:"ActiveJ | Net\uff0cNetty\u7684\u9ad8\u6027\u80fd\u66ff\u4ee3\u54c1\uff0c\u7528\u4e8e\u6784\u5efa\u65e0\u5f00\u9500\u7684\u5f02\u6b65\u670d\u52a1\u5668",description:"\u7528\u4e8e\u6784\u5efa\u5f02\u6b65HTTP\u3001RPC\u3001TCP\u670d\u52a1\u5668\u7684\u62bd\u8c61\u5c42\uff0c\u6ca1\u6709\u6027\u80fd\u5f00\u9500\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/async-io/net.mdx",sourceDirName:"async-io",slug:"/async-io/net",permalink:"/zh/async-io/net",tags:[],version:"current",frontMatter:{title:"ActiveJ | Net\uff0cNetty\u7684\u9ad8\u6027\u80fd\u66ff\u4ee3\u54c1\uff0c\u7528\u4e8e\u6784\u5efa\u65e0\u5f00\u9500\u7684\u5f02\u6b65\u670d\u52a1\u5668",description:"\u7528\u4e8e\u6784\u5efa\u5f02\u6b65HTTP\u3001RPC\u3001TCP\u670d\u52a1\u5668\u7684\u62bd\u8c61\u5c42\uff0c\u6ca1\u6709\u6027\u80fd\u5f00\u9500\u3002",sidebar_label:"Net",keywords:["tcp","rpc","http","java","JAVA\u6846\u67b6","spring \u9009\u62e9","jetty \u66ff\u4ee3\u65b9\u6848","netty \u66ff\u4ee3\u65b9\u6848","\u4e8b\u4ef6\u5faa\u73af","\u975e\u540c\u6b65\u670d\u52a1\u5668","\u5f02\u6b65"]},sidebar:"docs",previous:{title:"\u6570\u636e\u6d41",permalink:"/zh/async-io/datastream"},next:{title:"\u53d1\u5c04\u5668",permalink:"/zh/boot/launcher"}},d=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",children:[]},{value:"\u7279\u70b9",id:"\u7279\u70b9",children:[]},{value:"\u5f02\u6b65\u5957\u63a5\u5b57",id:"\u5f02\u6b65\u5957\u63a5\u5b57",children:[]},{value:"\u670d\u52a1\u5668",id:"\u670d\u52a1\u5668",children:[]},{value:"\u5b9e\u4f8b",id:"\u5b9e\u4f8b",children:[{value:"\u4e52\u4e53\u63d2\u5ea7\u8fde\u63a5",id:"\u4e52\u4e53\u63d2\u5ea7\u8fde\u63a5",children:[]},{value:"CSP TCP \u5ba2\u6237\u7aef",id:"csp-tcp-\u5ba2\u6237\u7aef",children:[]},{value:"CSP TCP\u670d\u52a1\u5668",id:"csp-tcp\u670d\u52a1\u5668",children:[]},{value:"Datastream TCP\u5ba2\u6237\u7aef",id:"datastream-tcp\u5ba2\u6237\u7aef",children:[]},{value:"Datastream TCP\u670d\u52a1\u5668",id:"datastream-tcp\u670d\u52a1\u5668",children:[]}]}],k={toc:d};function v(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u51c0\u503c"},"\u51c0\u503c"),(0,i.kt)("h2",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,i.kt)("p",null,"\u662fNetty\u3001Apache Mina\u548c\u5176\u4ed6\u7c7b\u4f3c\u9ad8\u6027\u80fd\u7f51\u7edc\u89e3\u51b3\u65b9\u6848\u7684\u4fbf\u6377\u3001\u9ad8\u6548\u7684\u66ff\u4ee3\u65b9\u6848\u3002 \u5728 ",(0,i.kt)("a",{parentName:"p",href:"/zh/async-io/eventloop"},(0,i.kt)("inlineCode",{parentName:"a"},"Eventloop"))," \u548cJava NIO Adapters\u4e4b\u4e0a\u7684\u4e00\u4e2a\u5fae\u5c0f\u7684\u62bd\u8c61\u5c42\uff0c\u7528\u4e8e ",(0,i.kt)(o.Z,{url:"/core-net/src/main/java/io/activej/net/socket/tcp/AsyncTcpSocket.java",mdxType:"Githublink"},'"AsyncTcpSocket"\uff0c\u5373 "AsyncTcpSocket"\u3002')," \u8fde\u540c ",(0,i.kt)(o.Z,{url:"/core-net/src/main/java/io/activej/net/socket/udp/AsyncUdpSocket.java",mdxType:"Githublink"},'"AsyncUdpSocket"\uff08\u540c\u6b65UdpSocket\uff09\u3002')),(0,i.kt)("h2",{id:"\u7279\u70b9"},"\u7279\u70b9"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u652f\u6301 ",(0,i.kt)("inlineCode",{parentName:"li"},"Promises")," \uff0c\u7528\u4e8e\u8bfb\u548c\u5199\u64cd\u4f5c\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u4e0e ",(0,i.kt)("a",{parentName:"li",href:"/zh/async-io/csp"},(0,i.kt)("inlineCode",{parentName:"a"},"CSP"),"\u76f8\u5bb9\u3002")," ",(0,i.kt)(o.Z,{url:"/core-csp/src/main/java/io/activej/csp/ChannelSupplier.java",mdxType:"Githublink"},"\u6e20\u9053\u4f9b\u5e94\u5546")," \u548c ",(0,i.kt)(o.Z,{url:"/core-csp/src/main/java/io/activej/csp/ChannelConsumer.java",mdxType:"Githublink"},'\u6e20\u9053\u6d88\u8d39\u8005"\u3002')," AsyncTcpSocket\u53ef\u4ee5\u4f5c\u4e3a\u5177\u6709\u5185\u7f6e\u80cc\u538b\u4f20\u64ad\u7684CSP\u901a\u9053\u5de5\u4f5c\uff0c\u5e76\u4e14\u53ef\u4ee5\u63d2\u5165 ",(0,i.kt)("a",{parentName:"li",href:"/zh/async-io/csp"},(0,i.kt)("inlineCode",{parentName:"a"},"CSP")),"/",(0,i.kt)("a",{parentName:"li",href:"/zh/async-io/datastream"},(0,i.kt)("inlineCode",{parentName:"a"},"Datastream"))," \u7ba1\u9053\u53ca\u5176\u6240\u6709\u529f\u80fd\uff08\u5982\u7f13\u51b2\u3001\u538b\u7f29\u3001\u5e8f\u5217\u5316/\u53cd\u5e8f\u5217\u5316\u3001\u6570\u636e\u8f6c\u6362\u3001\u6570\u636e\u8fc7\u6ee4\u3001\u8fd8\u539f\u7b49\u7b49\uff09\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u5e7f\u6cdb\u4f18\u5316\uff0c\u51e0\u4e4e\u6ca1\u6709\u6027\u80fd\u5f00\u9500\uff0c\u4f7f\u7528 ",(0,i.kt)("a",{parentName:"li",href:"/zh/misc/bytebuf#bytebufpool"},(0,i.kt)("inlineCode",{parentName:"a"},"ByteBufPool"))," \u5e7f\u6cdb\u4f7f\u7528")),(0,i.kt)("h2",{id:"\u5f02\u6b65\u5957\u63a5\u5b57"},"\u5f02\u6b65\u5957\u63a5\u5b57"),(0,i.kt)("p",null,"\u4e00\u4e2a\u5b8c\u5168\u5f02\u6b65\u7684 ",(0,i.kt)(o.Z,{url:"/core-net/src/main/java/io/activej/net/socket/tcp/AsyncTcpSocket.java",mdxType:"Githublink"},(0,i.kt)("inlineCode",{parentName:"p"},"TCP\u5957\u63a5\u5b57"),"\u3002")," \u5177\u6709TLS\u652f\u6301\u3002 \u5141\u8bb8\u5411/\u4ece\u7f51\u7edc\u53d1\u9001/\u63a5\u6536\u6570\u636e\u3002 \u53ef\u4f5c\u4e3a\u521b\u5efa\u81ea\u5b9a\u4e49TCP\u670d\u52a1\u5668/\u5ba2\u6237\u7aef\u7684\u6784\u5efa\u6a21\u5757 \uff0c\u6216\u5b9e\u73b0\u81ea\u5b9a\u4e49\u7f51\u7edc\u534f\u8bae\u3002 Socket\u6709\u4e00\u4e2a\u6781\u5176\u7b80\u5355\u548c\u76f4\u89c2\u7684API\uff0c\u7531 ",(0,i.kt)("inlineCode",{parentName:"p"},"\u8bfb"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"\u5199")," \u65b9\u6cd5\u7ec4\u6210\u3002 ",(0,i.kt)("a",{parentName:"p",href:"/zh/async-io/csp"},"CSP")," \u6a21\u5757\u53ef\u7528\u4e8e\u5c06\u63d2\u5ea7\u5305\u6210 ",(0,i.kt)(o.Z,{url:"/core-csp/src/main/java/io/activej/csp/ChannelSupplier.java",mdxType:"Githublink"},"\u6e20\u9053\u4f9b\u5e94\u5546")," \u6216 ",(0,i.kt)(o.Z,{url:"/core-csp/src/main/java/io/activej/csp/ChannelConsumer.java",mdxType:"Githublink"},'\u6e20\u9053\u6d88\u8d39\u8005"\u3002')),(0,i.kt)("p",null,"\u8fd8\u6709\u4e00\u4e2a\u5f02\u6b65\u7684 ",(0,i.kt)(o.Z,{url:"/core-net/src/main/java/io/activej/net/socket/udp/AsyncUdpSocket.java",mdxType:"Githublink"},(0,i.kt)("inlineCode",{parentName:"p"},"UDP\u5957\u63a5\u5b57"),"\u3002")," \u7528\u4e8eUDP\u901a\u4fe1\u3002"),(0,i.kt)("h2",{id:"\u670d\u52a1\u5668"},"\u670d\u52a1\u5668"),(0,i.kt)("p",null,"\u01de\u01de\u01de ",(0,i.kt)(o.Z,{url:"/core-net/src/main/java/io/activej/net/AbstractServer.java",mdxType:"Githublink"},(0,i.kt)("inlineCode",{parentName:"p"},"AbstractServer"),"(\u62bd\u8c61\u670d\u52a1\u5668)")," \u7c7b\u53ef\u4f5c\u4e3a\u6784\u5efaEventloop\u611f\u77e5\u7684TCP\u670d\u52a1\u5668\uff08HTTP\u670d\u52a1\u5668\u3001RPC\u670d\u52a1\u5668\u3001TCP\u6587\u4ef6\u670d\u52a1\u7b49\uff09\u7684\u57fa\u7840\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u652f\u6301 ",(0,i.kt)("em",{parentName:"li"},"\u5f00\u59cb/\u505c\u6b62")," \u8bed\u4e49"),(0,i.kt)("li",{parentName:"ul"},"\u88c5\u5907 ",(0,i.kt)(o.Z,{url:"/core-net/src/main/java/io/activej/net/EventloopServer.java",mdxType:"Githublink"},'"EventloopServer')),(0,i.kt)("li",{parentName:"ul"},"\u88c5\u5907 ",(0,i.kt)(o.Z,{url:"/core-net/src/main/java/io/activej/net/WorkerServer.java",mdxType:"Githublink"},'\u5de5\u4f5c\u8005\u670d\u52a1\u5668"\u3002')," \u63a5\u53e3\uff0c\u6240\u4ee5 ",(0,i.kt)("inlineCode",{parentName:"li"},"AbstractServer")," \u7684\u6240\u6709\u5b50\u7c7b\u90fd\u53ef\u4ee5\u5f88\u5bb9\u6613\u5730\u88ab\u7528\u4f5c\u5de5\u4f5c\u670d\u52a1\u5668"),(0,i.kt)("li",{parentName:"ul"},"\u652f\u6301 ",(0,i.kt)(o.Z,{url:"/core-eventloop/src/main/java/io/activej/eventloop/net/ServerSocketSettings.java",mdxType:"Githublink"},"`ServerSocketSettings")," \u548c ",(0,i.kt)(o.Z,{url:"/core-eventloop/src/main/java/io/activej/eventloop/net/SocketSettings.java",mdxType:"Githublink"},'"SocketSettings"\uff08\u63d2\u5ea7\u8bbe\u7f6e\uff09\u3002'))),(0,i.kt)("p",null,"\u5373\u7528\u578b ",(0,i.kt)(o.Z,{url:"/core-net/src/main/java/io/activej/net/PrimaryServer.java",mdxType:"Githublink"},'\u4e3b\u670d\u52a1\u5668"\u3002'),' \u5b9e\u73b0\uff0c\u5728\u4e3b\u8981\u7684Eventloops\u4e2d\u4f5c\u4e3a\u5e73\u8861\u5668\u5de5\u4f5c\u3002 \u5b83\u63a5\u6536\u5916\u90e8 "\u63a5\u53d7 "\u8bf7\u6c42\uff0c\u5e76\u5c06\u5176\u91cd\u65b0\u5206\u914d\u7ed9WorkerServers\uff0c\u7136\u540e\u5728\u5176\u76f8\u5e94\u7684Worker Eventloop\u7ebf\u7a0b\u4e2d\u6267\u884c\u5b9e\u9645\u7684 "\u63a5\u53d7 "\u8bf7\u6c42\u3002'),(0,i.kt)("h2",{id:"\u5b9e\u4f8b"},"\u5b9e\u4f8b"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u8981\u8fd0\u884c\u4f8b\u5b50\uff0c\u4f60\u9700\u8981\u4eceGitHub\u514b\u9686ActiveJ"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/activej/activej\n")),(0,i.kt)("p",{parentName:"div"},"\u5e76\u5c06\u5176\u4f5c\u4e3a\u4e00\u4e2aMaven\u9879\u76ee\u5bfc\u5165\u3002 \u67e5\u770b\u6807\u7b7e ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)(c.Z,{name:"currentVersion",mdxType:"Variable"})),"\u3002 \u5728\u8fd0\u884c\u8fd9\u4e9b\u4f8b\u5b50\u4e4b\u524d\uff0c\u5148\u5efa\u7acb\u9879\u76ee\u3002 \u8fd9\u4e9b\u4f8b\u5b50\u4f4d\u4e8e ",(0,i.kt)("inlineCode",{parentName:"p"},"activej/examples/core/net\u3002")))),(0,i.kt)("h3",{id:"\u4e52\u4e53\u63d2\u5ea7\u8fde\u63a5"},"\u4e52\u4e53\u63d2\u5ea7\u8fde\u63a5"),(0,i.kt)("p",null,"\u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c\u6211\u4eec\u4f7f\u7528\u7684\u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"AbstractServer")," \u7684\u4e00\u4e2a\u5b9e\u73b0\u3002 ",(0,i.kt)(o.Z,{url:"/core-net/src/main/java/io/activej/net/SimpleServer.java",mdxType:"Githublink"},"\u7b80\u6613\u670d\u52a1\u5668")," \u5b83\u63a5\u6536\u4e00\u4e2a\u4fe1\u606f\u5e76\u53d1\u9001\u4e00\u4e2a\u54cd\u5e94(",(0,i.kt)("inlineCode",{parentName:"p"},"PONG"),")\u3002 \u6211\u4eec\u8fd8\u5c06\u4f7f\u7528 ",(0,i.kt)(o.Z,{url:"/core-net/src/main/java/io/activej/net/socket/tcp/AsyncTcpSocketNio.java",mdxType:"Githublink"},'"AsyncTcpSocketNio"\u3002')," \u4f5c\u4e3a\u5ba2\u6237\u7aef\u53d1\u90013\u6761\u8bf7\u6c42\u4fe1\u606f(",(0,i.kt)("inlineCode",{parentName:"p"},"PING"),")\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/core/net/src/main/java/PingPongSocketConnection.java tag=REGION_1",url:"/examples/core/net/src/main/java/PingPongSocketConnection.java",tag:"REGION_1"},"public static void main(String[] args) throws IOException {\n  Eventloop eventloop = Eventloop.create().withCurrentThread();\n\n  SimpleServer server = SimpleServer.create(\n      socket -> {\n        BinaryChannelSupplier bufsSupplier = BinaryChannelSupplier.of(ChannelSupplier.ofSocket(socket));\n        repeat(() ->\n            bufsSupplier.decode(DECODER)\n                .whenResult(x -> System.out.println(x))\n                .then(() -> socket.write(wrapAscii(RESPONSE_MSG)))\n                .map($ -> true))\n            .whenComplete(socket::close);\n      })\n      .withListenAddress(ADDRESS)\n      .withAcceptOnce();\n\n  server.listen();\n\n  AsyncTcpSocketNio.connect(ADDRESS)\n      .whenResult(socket -> {\n        BinaryChannelSupplier bufsSupplier = BinaryChannelSupplier.of(ChannelSupplier.ofSocket(socket));\n        loop(0,\n            i -> i < ITERATIONS,\n            i -> socket.write(wrapAscii(REQUEST_MSG))\n                .then(() -> bufsSupplier.decode(DECODER)\n                    .whenResult(x -> System.out.println(x))\n                    .map($2 -> i + 1)))\n            .whenComplete(socket::close);\n      })\n      .whenException(e -> { throw new RuntimeException(e); });\n\n  eventloop.run();\n}\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)(o.Z,{url:"/examples/core/net/src/main/java/PingPongSocketConnection.java",mdxType:"Githublink"},"\u5728GitHub\u4e0a\u770b\u5230\u5b8c\u6574\u7684\u4f8b\u5b50"))),(0,i.kt)("h3",{id:"csp-tcp-\u5ba2\u6237\u7aef"},"CSP TCP \u5ba2\u6237\u7aef"),(0,i.kt)("p",null,"\u4e00\u4e2a\u7b80\u5355\u7684TCP\u63a7\u5236\u53f0\u5ba2\u6237\u7aef\uff0c\u8fde\u63a5\u5230TCP\u670d\u52a1\u5668\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/core/net/src/main/java/csp/TcpClientExample.java tag=REGION_1",url:"/examples/core/net/src/main/java/csp/TcpClientExample.java",tag:"REGION_1"},'private void run() {\n  System.out.println("Connecting to server at localhost (port 9922)...");\n  eventloop.connect(new InetSocketAddress("localhost", 9922), (socketChannel, e) -> {\n    if (e == null) {\n      System.out.println("Connected to server, enter some text and send it by pressing \'Enter\'.");\n      AsyncTcpSocket socket;\n      try {\n        socket = AsyncTcpSocketNio.wrapChannel(getCurrentEventloop(), socketChannel, null);\n      } catch (IOException ioException) {\n        throw new RuntimeException(ioException);\n      }\n\n      BinaryChannelSupplier.of(ChannelSupplier.ofSocket(socket))\n          .decodeStream(ByteBufsDecoder.ofCrlfTerminatedBytes())\n          .streamTo(ChannelConsumer.ofConsumer(buf -> System.out.println(buf.asString(UTF_8))));\n\n      startCommandLineInterface(socket);\n    } else {\n      System.out.printf("Could not connect to server, make sure it is started: %s%n", e);\n    }\n  });\n  eventloop.run();\n}\n\npublic static void main(String[] args) {\n  new TcpClientExample().run();\n}\n')),(0,i.kt)("p",null,"\u5b83\u53d1\u9001\u5b57\u7b26\uff0c\u901a\u8fc7CSP\u901a\u9053\u63a5\u6536\u4e00\u4e9b\u6570\u636e\u56de\u6765\uff0c\u5bf9\u5176\u8fdb\u884c\u89e3\u6790\uff0c\u7136\u540e\u6253\u5370\u51fa\u6765\u5230\u63a7\u5236\u53f0\u3002\n",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)(o.Z,{url:"/examples/core/net/src/main/java/csp/TcpClientExample.java",mdxType:"Githublink"},"\u5728GitHub\u4e0a\u770b\u5230\u5b8c\u6574\u7684\u4f8b\u5b50"))),(0,i.kt)("h3",{id:"csp-tcp\u670d\u52a1\u5668"},"CSP TCP\u670d\u52a1\u5668"),(0,i.kt)("p",null,"\u7b80\u5355\u7684TCP\u56de\u58f0\u670d\u52a1\u5668\uff0c\u5728\u4e00\u4e2a\u4e8b\u4ef6\u5faa\u73af\u4e2d\u8fd0\u884c\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/core/net/src/main/java/csp/TcpServerExample.java tag=REGION_1",url:"/examples/core/net/src/main/java/csp/TcpServerExample.java",tag:"REGION_1"},'public static void main(String[] args) throws Exception {\n  Eventloop eventloop = Eventloop.create().withCurrentThread();\n\n  SimpleServer server = SimpleServer.create(socket ->\n      BinaryChannelSupplier.of(ChannelSupplier.ofSocket(socket))\n          .decodeStream(ByteBufsDecoder.ofCrlfTerminatedBytes())\n          .peek(buf -> System.out.println("client:" + buf.getString(UTF_8)))\n          .map(buf -> {\n            ByteBuf serverBuf = ByteBufStrings.wrapUtf8("Server> ");\n            return ByteBufPool.append(serverBuf, buf);\n          })\n          .map(buf -> ByteBufPool.append(buf, CRLF))\n          .streamTo(ChannelConsumer.ofSocket(socket)))\n      .withListenPort(PORT);\n\n  server.listen();\n\n  System.out.println("Server is running");\n  System.out.println("You can connect from telnet with command: telnet localhost 9922 or by running csp.TcpClientExample");\n\n  eventloop.run();\n}\n')),(0,i.kt)("p",null,"\u8fd9\u4e2a\u670d\u52a1\u5668\u76d1\u542c\u8fde\u63a5\uff0c\u5f53\u5ba2\u6237\u7aef\u8fde\u63a5\u65f6\uff0c\u5b83\u89e3\u6790\u5176\u4fe1\u606f\u5e76\u901a\u8fc7\u5957\u63a5\u5b57\u5c06\u5176\u4f5c\u4e3aCSP\u901a\u9053\u53d1\u9001\u56de\u6765\u3002\n",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)(o.Z,{url:"/examples/core/net/src/main/java/csp/TcpServerExample.java",mdxType:"Githublink"},"\u5728GitHub\u4e0a\u770b\u5230\u5b8c\u6574\u7684\u4f8b\u5b50"))),(0,i.kt)("h3",{id:"datastream-tcp\u5ba2\u6237\u7aef"},"Datastream TCP\u5ba2\u6237\u7aef"),(0,i.kt)(l.Z,{chart:"\ngraph TB\n    id3-.->id4\n    subgraph Client\n    id1(produce ints)--\x3eid2(serialize them into bytes)\n    id2--\x3eid3(send bytes over network)\n    id9(receive those bytes from network)--\x3eid10(deserialize bytes into strings)\n    id10--\x3e id11(collect those strings in a list)\n    end\n    id8-.->id9\n    subgraph Server\n    id4(\u4ece\u7f51\u7edc\u63a5\u6536\u5b57\u8282)--\x3eid5(\u5c06\u5b57\u8282\u53cd\u5e8f\u5217\u5316\u4e3a\u6574\u6570)\n    id5--\x3eid6(\u4ece\u8fd9\u4e9b\u6574\u6570\u8ba1\u7b97\u5b57\u7b26\u4e32)\n    id6--\x3eid7(\u5c06\u5b57\u7b26\u4e32\u5e8f\u5217\u5316\u4e3a\u5b57\u8282)\n    id7--\x3eid8(\u901a\u8fc7\u7f51\u7edc\u53d1\u9001\u8fd9\u4e9b\u5b57\u8282)\n    end\n",mdxType:"Mermaid"}),(0,i.kt)("p",null,"\u8be5\u56fe\u7247\u8bf4\u660e\u4e86\u4f7f\u7528 ",(0,i.kt)("a",{parentName:"p",href:"/zh/async-io/datastream"},"Datastream")," \u8fdb\u884c\u6570\u636e\u5904\u7406\u7684TCP\u5ba2\u6237\u548c\u670d\u52a1\u5668\u4e4b\u95f4\u7684\u901a\u4fe1\u548c\u8f6c\u6362\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/core/net/src/main/java/datastream/TcpClientExample.java tag=EXAMPLE",url:"/examples/core/net/src/main/java/datastream/TcpClientExample.java",tag:"EXAMPLE"},'public final class TcpClientExample {\n  public static final int PORT = 9922;\n\n  public static void main(String[] args) {\n    Eventloop eventloop = Eventloop.create().withFatalErrorHandler(rethrowOnAnyError());\n\n    eventloop.connect(new InetSocketAddress("localhost", PORT), (socketChannel, e) -> {\n      if (e == null) {\n        AsyncTcpSocket socket;\n        try {\n          socket = AsyncTcpSocketNio.wrapChannel(eventloop, socketChannel, null);\n        } catch (IOException ioEx) {\n          throw new RuntimeException(ioEx);\n        }\n\n        StreamSupplier.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)\n            .transformWith(ChannelSerializer.create(INT_SERIALIZER))\n            .streamTo(ChannelConsumer.ofSocket(socket));\n\n        StreamConsumerToList<String> consumer = StreamConsumerToList.create();\n\n        ChannelSupplier.ofSocket(socket)\n            .transformWith(ChannelDeserializer.create(UTF8_SERIALIZER))\n            .streamTo(consumer);\n\n        consumer.getResult()\n            .whenResult(list -> list.forEach(System.out::println));\n\n      } else {\n        System.out.printf("Could not connect to server, make sure it is started: %s%n", e);\n      }\n    });\n\n    eventloop.run();\n  }\n}\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)(o.Z,{url:"/examples/core/net/src/main/java/datastream/TcpClientExample.java",mdxType:"Githublink"},"\u5728GitHub\u4e0a\u770b\u5230\u5b8c\u6574\u7684\u4f8b\u5b50"))),(0,i.kt)("h3",{id:"datastream-tcp\u670d\u52a1\u5668"},"Datastream TCP\u670d\u52a1\u5668"),(0,i.kt)("p",null,"\u8fd9\u4e2a\u670d\u52a1\u5668\u4ee3\u8868\u4e86\u4e0a\u56fe\u4e2d\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"\u670d\u52a1\u5668"),"\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/core/net/src/main/java/datastream/TcpServerExample.java tag=EXAMPLE",url:"/examples/core/net/src/main/java/datastream/TcpServerExample.java",tag:"EXAMPLE"},'public final class TcpServerExample {\n\n  public static void main(String[] args) throws IOException {\n    Eventloop eventloop = Eventloop.create();\n\n    eventloop.listen(new InetSocketAddress("localhost", TcpClientExample.PORT), ServerSocketSettings.create(100), channel -> {\n      AsyncTcpSocket socket;\n\n      try {\n        socket = AsyncTcpSocketNio.wrapChannel(eventloop, channel, null);\n        System.out.println("Client connected: " + channel.getRemoteAddress());\n      } catch (IOException e) {\n        throw new RuntimeException(e);\n      }\n\n      ChannelSupplier.ofSocket(socket)\n          .transformWith(ChannelDeserializer.create(INT_SERIALIZER))\n          .transformWith(StreamFilter.mapper(x -> x + " times 10 = " + x * 10))\n          .transformWith(ChannelSerializer.create(UTF8_SERIALIZER))\n          .streamTo(ChannelConsumer.ofSocket(socket));\n    });\n\n    System.out.println("Connect to the server by running datastream.TcpClientExample");\n\n    eventloop.run();\n  }\n}\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)(o.Z,{url:"/examples/core/net/src/main/java/datastream/TcpServerExample.java",mdxType:"Githublink"},"\u5728GitHub\u4e0a\u770b\u5230\u5b8c\u6574\u7684\u4f8b\u5b50"))))}v.isMDXComponent=!0},11748:function(e,t,n){var a={"./locale":89234,"./locale.js":89234};function r(e){var t=i(e);return n(t)}function i(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=i,e.exports=r,r.id=11748}}]);