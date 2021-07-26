(self.webpackChunkactivejdocs=self.webpackChunkactivejdocs||[]).push([[1646],{77618:function(e,n,t){"use strict";var a=t(67294),r=t(39962);n.Z=function(e){var n=e.url,t=e.text,i=e.isInline,o=void 0===i||i,s=e.children,l=(0,r.Z)().siteConfig;return a.createElement("a",{style:o?{}:{display:"block",marginBottom:"16px"},href:l.customFields.githubUrl+"/"+l.customFields.githubBranch+n,target:"_blank"},t||s)}},14304:function(e,n,t){"use strict";var a=t(67294),r=t(21140),i=t.n(r);i().initialize({startOnLoad:!0});n.Z=function(e){var n=e.chart;return(0,a.useEffect)((function(){i().contentLoaded()}),[]),a.createElement("div",{className:"mermaid"},n)}},77815:function(e,n,t){"use strict";t(67294);var a=t(39962);n.Z=function(e){var n=e.name,t=(0,a.Z)().siteConfig;if(!n)throw new Error("Variable name is required");if(void 0===t.customFields[n])throw new Error("Variable "+n+" not exist");return t.customFields[n]}},47325:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return p},contentTitle:function(){return m},metadata:function(){return u},toc:function(){return d},default:function(){return k}});var a=t(22122),r=t(19756),i=(t(67294),t(3905)),o=t(77618),s=t(77815),l=t(14304),c=["components"],p={title:"ActiveJ | Net, high-performance alternative to Netty for building async servers without overheads",description:"Abstraction layer for building asynchronous HTTP, RPC, TCP servers with no performance overhead.",sidebar_label:"Net",keywords:["tcp","rpc","http","java","java framework","spring alternative","jetty alternative","netty alternative","eventloop","asynchronous server","async"]},m="Net",u={unversionedId:"async-io/net",id:"async-io/net",isDocsHomePage:!1,title:"ActiveJ | Net, high-performance alternative to Netty for building async servers without overheads",description:"Abstraction layer for building asynchronous HTTP, RPC, TCP servers with no performance overhead.",source:"@site/docs/async-io/net.mdx",sourceDirName:"async-io",slug:"/async-io/net",permalink:"/async-io/net",version:"current",frontMatter:{title:"ActiveJ | Net, high-performance alternative to Netty for building async servers without overheads",description:"Abstraction layer for building asynchronous HTTP, RPC, TCP servers with no performance overhead.",sidebar_label:"Net",keywords:["tcp","rpc","http","java","java framework","spring alternative","jetty alternative","netty alternative","eventloop","asynchronous server","async"]},sidebar:"docs",previous:{title:"Datastream",permalink:"/async-io/datastream"},next:{title:"Launcher",permalink:"/boot/launcher"}},d=[{value:"Overview",id:"overview",children:[]},{value:"Features",id:"features",children:[]},{value:"Asynchronous sockets",id:"asynchronous-sockets",children:[]},{value:"Server",id:"server",children:[]},{value:"Examples",id:"examples",children:[{value:"Ping-Pong Socket Connection",id:"ping-pong-socket-connection",children:[]},{value:"CSP TCP Client",id:"csp-tcp-client",children:[]},{value:"CSP TCP Server",id:"csp-tcp-server",children:[]},{value:"Datastream TCP Client",id:"datastream-tcp-client",children:[]},{value:"Datastream TCP Server",id:"datastream-tcp-server",children:[]}]}],v={toc:d};function k(e){var n=e.components,t=(0,r.Z)(e,c);return(0,i.kt)("wrapper",(0,a.Z)({},v,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"net"},"Net"),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"Handy and efficient alternative to Netty, Apache Mina, and other similar solutions for high performance networking. A tiny abstraction layer on top of ",(0,i.kt)("a",{parentName:"p",href:"/async-io/eventloop"},(0,i.kt)("inlineCode",{parentName:"a"},"Eventloop"))," and Java NIO Adapters for ",(0,i.kt)(o.Z,{url:"/core-net/src/main/java/io/activej/net/socket/tcp/AsyncTcpSocket.java",mdxType:"Githublink"},(0,i.kt)("inlineCode",{parentName:"p"},"AsyncTcpSocket"))," along with ",(0,i.kt)(o.Z,{url:"/core-net/src/main/java/io/activej/net/socket/udp/AsyncUdpSocket.java",mdxType:"Githublink"},(0,i.kt)("inlineCode",{parentName:"p"},"AsyncUdpSocket"))),(0,i.kt)("h2",{id:"features"},"Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Support of ",(0,i.kt)("inlineCode",{parentName:"li"},"Promises")," for read and write operations"),(0,i.kt)("li",{parentName:"ul"},"Compatibility with ",(0,i.kt)("a",{parentName:"li",href:"/async-io/csp"},(0,i.kt)("inlineCode",{parentName:"a"},"CSP"))," ",(0,i.kt)(o.Z,{url:"/core-csp/src/main/java/io/activej/csp/ChannelSupplier.java",mdxType:"Githublink"},(0,i.kt)("inlineCode",{parentName:"li"},"ChannelSupplier"))," and ",(0,i.kt)(o.Z,{url:"/core-csp/src/main/java/io/activej/csp/ChannelConsumer.java",mdxType:"Githublink"},(0,i.kt)("inlineCode",{parentName:"li"},"ChannelConsumer"))," AsyncTcpSocket can work as a CSP channel with built-in back pressure propagation, and can be plugged into ",(0,i.kt)("a",{parentName:"li",href:"/async-io/csp"},(0,i.kt)("inlineCode",{parentName:"a"},"CSP")),"/",(0,i.kt)("a",{parentName:"li",href:"/async-io/datastream"},(0,i.kt)("inlineCode",{parentName:"a"},"Datastream"))," pipeline with all its features (like buffering, compression, serialization/deserialization, data transformations, data filtering, reducing, etc.)"),(0,i.kt)("li",{parentName:"ul"},"Extensively optimized and has almost no performance overhead, uses ",(0,i.kt)("a",{parentName:"li",href:"/misc/bytebuf#bytebufpool"},(0,i.kt)("inlineCode",{parentName:"a"},"ByteBufPool"))," widely")),(0,i.kt)("h2",{id:"asynchronous-sockets"},"Asynchronous sockets"),(0,i.kt)("p",null,"A fully asynchronous ",(0,i.kt)(o.Z,{url:"/core-net/src/main/java/io/activej/net/socket/tcp/AsyncTcpSocket.java",mdxType:"Githublink"},(0,i.kt)("inlineCode",{parentName:"p"},"TCP socket"))," with TLS support. Allows sending/receiving data to/from the network. Can be used as a building block for creating custom TCP servers/clients\nor implementing custom networking protocols. Socket has an extremely simple and intuitive API that consists of ",(0,i.kt)("inlineCode",{parentName:"p"},"read"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"write")," methods.\n",(0,i.kt)("a",{parentName:"p",href:"/async-io/csp"},"CSP")," module can be used to wrap socket into ",(0,i.kt)(o.Z,{url:"/core-csp/src/main/java/io/activej/csp/ChannelSupplier.java",mdxType:"Githublink"},(0,i.kt)("inlineCode",{parentName:"p"},"ChannelSupplier"))," or ",(0,i.kt)(o.Z,{url:"/core-csp/src/main/java/io/activej/csp/ChannelConsumer.java",mdxType:"Githublink"},(0,i.kt)("inlineCode",{parentName:"p"},"ChannelConsumer"))),(0,i.kt)("p",null,"There is also an asynchronous ",(0,i.kt)(o.Z,{url:"/core-net/src/main/java/io/activej/net/socket/tcp/AsyncUdpSocket.java",mdxType:"Githublink"},(0,i.kt)("inlineCode",{parentName:"p"},"UDP socket"))," for UDP communications."),(0,i.kt)("h2",{id:"server"},"Server"),(0,i.kt)("p",null,"The ",(0,i.kt)(o.Z,{url:"/core-net/src/main/java/io/activej/net/AbstractServer.java",mdxType:"Githublink"},(0,i.kt)("inlineCode",{parentName:"p"},"AbstractServer"))," class serves as a foundation for building Eventloop-aware TCP servers (HTTP servers, RPC servers, TCP file services, etc.):"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Support of ",(0,i.kt)("em",{parentName:"li"},"start/stop")," semantics"),(0,i.kt)("li",{parentName:"ul"},"Implements ",(0,i.kt)(o.Z,{url:"/core-net/src/main/java/io/activej/net/EventloopServer.java",mdxType:"Githublink"},(0,i.kt)("inlineCode",{parentName:"li"},"EventloopServer"))),(0,i.kt)("li",{parentName:"ul"},"Implements ",(0,i.kt)(o.Z,{url:"/core-net/src/main/java/io/activej/net/WorkerServer.java",mdxType:"Githublink"},(0,i.kt)("inlineCode",{parentName:"li"},"WorkerServer"))," interface, so all subclasses of ",(0,i.kt)("inlineCode",{parentName:"li"},"AbstractServer")," can be readily used as worker servers"),(0,i.kt)("li",{parentName:"ul"},"Support of ",(0,i.kt)(o.Z,{url:"/core-eventloop/src/main/java/io/activej/eventloop/net/ServerSocketSettings.java",mdxType:"Githublink"},(0,i.kt)("inlineCode",{parentName:"li"},"ServerSocketSettings"))," and ",(0,i.kt)(o.Z,{url:"/core-eventloop/src/main/java/io/activej/eventloop/net/SocketSettings.java",mdxType:"Githublink"},(0,i.kt)("inlineCode",{parentName:"li"},"SocketSettings")))),(0,i.kt)("p",null,"Ready-to-use ",(0,i.kt)(o.Z,{url:"/core-net/src/main/java/io/activej/net/PrimaryServer.java",mdxType:"Githublink"},(0,i.kt)("inlineCode",{parentName:"p"},"PrimaryServer"))," implementation which works in primary Eventloops as a balancer. It takes external \u201caccept\u201d requests and redistributes them to the WorkerServers that will then execute the actual \u201caccept\u201d requests in their corresponding worker Eventloop threads."),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"To run the examples, you need to clone ActiveJ from GitHub"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/activej/activej\n")),(0,i.kt)("p",{parentName:"div"},"And import it as a Maven project. Check out tag ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)(s.Z,{name:"currentVersion",mdxType:"Variable"})),". Before running the examples, build the project.\nThese examples are located at ",(0,i.kt)("inlineCode",{parentName:"p"},"activej/examples/core/net")))),(0,i.kt)("h3",{id:"ping-pong-socket-connection"},"Ping-Pong Socket Connection"),(0,i.kt)("p",null,"In this example we are using an implementation of ",(0,i.kt)("inlineCode",{parentName:"p"},"AbstractServer")," - ",(0,i.kt)(o.Z,{url:"/core-net/src/main/java/io/activej/net/SimpleServer.java",mdxType:"Githublink"},(0,i.kt)("inlineCode",{parentName:"p"},"SimpleServer"))," which receives a message and sends a response (",(0,i.kt)("inlineCode",{parentName:"p"},"PONG"),"). We will also use ",(0,i.kt)(o.Z,{url:"/core-net/src/main/java/io/activej/net/socket/tcp/AsyncTcpSocketNio.java",mdxType:"Githublink"},(0,i.kt)("inlineCode",{parentName:"p"},"AsyncTcpSocketNio"))," as a client to send 3 request messages (",(0,i.kt)("inlineCode",{parentName:"p"},"PING"),")."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/core/net/src/main/java/PingPongSocketConnection.java tag=REGION_1",url:"/examples/core/net/src/main/java/PingPongSocketConnection.java",tag:"REGION_1"},"public static void main(String[] args) throws IOException {\n  Eventloop eventloop = Eventloop.create().withCurrentThread();\n\n  SimpleServer server = SimpleServer.create(\n      socket -> {\n        BinaryChannelSupplier bufsSupplier = BinaryChannelSupplier.of(ChannelSupplier.ofSocket(socket));\n        repeat(() ->\n            bufsSupplier.decode(DECODER)\n                .whenResult(x -> System.out.println(x))\n                .then(() -> socket.write(wrapAscii(RESPONSE_MSG)))\n                .map($ -> true))\n            .whenComplete(socket::close);\n      })\n      .withListenAddress(ADDRESS)\n      .withAcceptOnce();\n\n  server.listen();\n\n  AsyncTcpSocketNio.connect(ADDRESS)\n      .whenResult(socket -> {\n        BinaryChannelSupplier bufsSupplier = BinaryChannelSupplier.of(ChannelSupplier.ofSocket(socket));\n        loop(0,\n            i -> i < ITERATIONS,\n            i -> socket.write(wrapAscii(REQUEST_MSG))\n                .then(() -> bufsSupplier.decode(DECODER)\n                    .whenResult(x -> System.out.println(x))\n                    .map($2 -> i + 1)))\n            .whenComplete(socket::close);\n      })\n      .whenException(e -> { throw new RuntimeException(e); });\n\n  eventloop.run();\n}\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)(o.Z,{url:"/examples/core/net/src/main/java/PingPongSocketConnection.java",mdxType:"Githublink"},"See full example on GitHub"))),(0,i.kt)("h3",{id:"csp-tcp-client"},"CSP TCP Client"),(0,i.kt)("p",null,"A simple TCP console client which connects to TCP server:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/core/net/src/main/java/csp/TcpClientExample.java tag=REGION_1",url:"/examples/core/net/src/main/java/csp/TcpClientExample.java",tag:"REGION_1"},'private void run() {\n  System.out.println("Connecting to server at localhost (port 9922)...");\n  eventloop.connect(new InetSocketAddress("localhost", 9922), (socketChannel, e) -> {\n    if (e == null) {\n      System.out.println("Connected to server, enter some text and send it by pressing \'Enter\'.");\n      AsyncTcpSocket socket;\n      try {\n        socket = AsyncTcpSocketNio.wrapChannel(getCurrentEventloop(), socketChannel, null);\n      } catch (IOException ioException) {\n        throw new RuntimeException(ioException);\n      }\n\n      BinaryChannelSupplier.of(ChannelSupplier.ofSocket(socket))\n          .decodeStream(ByteBufsDecoder.ofCrlfTerminatedBytes())\n          .streamTo(ChannelConsumer.ofConsumer(buf -> System.out.println(buf.asString(UTF_8))));\n\n      startCommandLineInterface(socket);\n    } else {\n      System.out.printf("Could not connect to server, make sure it is started: %s%n", e);\n    }\n  });\n  eventloop.run();\n}\n\npublic static void main(String[] args) {\n  new TcpClientExample().run();\n}\n')),(0,i.kt)("p",null,"It sends characters, receives some data back through CSP channel, parses it and then prints out to console."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)(o.Z,{url:"/examples/core/net/src/main/java/csp/TcpClientExample.java",mdxType:"Githublink"},"See full example on GitHub"))),(0,i.kt)("h3",{id:"csp-tcp-server"},"CSP TCP Server"),(0,i.kt)("p",null,"Simple TCP echo server which runs in an eventloop:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/core/net/src/main/java/csp/TcpServerExample.java tag=REGION_1",url:"/examples/core/net/src/main/java/csp/TcpServerExample.java",tag:"REGION_1"},'public static void main(String[] args) throws Exception {\n  Eventloop eventloop = Eventloop.create().withCurrentThread();\n\n  SimpleServer server = SimpleServer.create(socket ->\n      BinaryChannelSupplier.of(ChannelSupplier.ofSocket(socket))\n          .decodeStream(ByteBufsDecoder.ofCrlfTerminatedBytes())\n          .peek(buf -> System.out.println("client:" + buf.getString(UTF_8)))\n          .map(buf -> {\n            ByteBuf serverBuf = ByteBufStrings.wrapUtf8("Server> ");\n            return ByteBufPool.append(serverBuf, buf);\n          })\n          .map(buf -> ByteBufPool.append(buf, CRLF))\n          .streamTo(ChannelConsumer.ofSocket(socket)))\n      .withListenPort(PORT);\n\n  server.listen();\n\n  System.out.println("Server is running");\n  System.out.println("You can connect from telnet with command: telnet localhost 9922 or by running csp.TcpClientExample");\n\n  eventloop.run();\n}\n')),(0,i.kt)("p",null,"This server listens for connections and when client connects, it parses its message and sends it back as CSP channel via socket."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)(o.Z,{url:"/examples/core/net/src/main/java/csp/TcpServerExample.java",mdxType:"Githublink"},"See full example on GitHub"))),(0,i.kt)("h3",{id:"datastream-tcp-client"},"Datastream TCP Client"),(0,i.kt)(l.Z,{chart:"\ngraph TB\n    id3-.->id4\n    subgraph Client\n    id1(produce ints)--\x3eid2(serialize them into bytes)\n    id2--\x3eid3(send bytes over the network)\n    id9(receive those bytes from network)--\x3eid10(deserialize bytes into strings)\n    id10 --\x3e id11(collect those strings in a list)\n    end\n    id8-.->id9\n    subgraph Server\n    id4(receive bytes from network)--\x3eid5(deserialize bytes into ints)\n    id5--\x3eid6(compute strings from those ints somehow)\n    id6--\x3eid7(serialize strings into bytes)\n    id7--\x3eid8(send those bytes over the network)\n    end\n",mdxType:"Mermaid"}),(0,i.kt)("p",null,"This image illustrates communication and transformations between TCP client and server that use ",(0,i.kt)("a",{parentName:"p",href:"/async-io/datastream"},"Datastream")," for data processing."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/core/net/src/main/java/datastream/TcpClientExample.java tag=EXAMPLE",url:"/examples/core/net/src/main/java/datastream/TcpClientExample.java",tag:"EXAMPLE"},'public final class TcpClientExample {\n  public static final int PORT = 9922;\n\n  public static void main(String[] args) {\n    Eventloop eventloop = Eventloop.create().withFatalErrorHandler(rethrowOnAnyError());\n\n    eventloop.connect(new InetSocketAddress("localhost", PORT), (socketChannel, e) -> {\n      if (e == null) {\n        AsyncTcpSocket socket;\n        try {\n          socket = AsyncTcpSocketNio.wrapChannel(eventloop, socketChannel, null);\n        } catch (IOException ioEx) {\n          throw new RuntimeException(ioEx);\n        }\n\n        StreamSupplier.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)\n            .transformWith(ChannelSerializer.create(INT_SERIALIZER))\n            .streamTo(ChannelConsumer.ofSocket(socket));\n\n        StreamConsumerToList<String> consumer = StreamConsumerToList.create();\n\n        ChannelSupplier.ofSocket(socket)\n            .transformWith(ChannelDeserializer.create(UTF8_SERIALIZER))\n            .streamTo(consumer);\n\n        consumer.getResult()\n            .whenResult(list -> list.forEach(System.out::println));\n\n      } else {\n        System.out.printf("Could not connect to server, make sure it is started: %s%n", e);\n      }\n    });\n\n    eventloop.run();\n  }\n}\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)(o.Z,{url:"/examples/core/net/src/main/java/datastream/TcpClientExample.java",mdxType:"Githublink"},"See full example on GitHub"))),(0,i.kt)("h3",{id:"datastream-tcp-server"},"Datastream TCP Server"),(0,i.kt)("p",null,"This server represents ",(0,i.kt)("inlineCode",{parentName:"p"},"Server")," from the above illustration:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/core/net/src/main/java/datastream/TcpServerExample.java tag=EXAMPLE",url:"/examples/core/net/src/main/java/datastream/TcpServerExample.java",tag:"EXAMPLE"},'public final class TcpServerExample {\n\n  public static void main(String[] args) throws IOException {\n    Eventloop eventloop = Eventloop.create();\n\n    eventloop.listen(new InetSocketAddress("localhost", TcpClientExample.PORT), ServerSocketSettings.create(100), channel -> {\n      AsyncTcpSocket socket;\n\n      try {\n        socket = AsyncTcpSocketNio.wrapChannel(eventloop, channel, null);\n        System.out.println("Client connected: " + channel.getRemoteAddress());\n      } catch (IOException e) {\n        throw new RuntimeException(e);\n      }\n\n      ChannelSupplier.ofSocket(socket)\n          .transformWith(ChannelDeserializer.create(INT_SERIALIZER))\n          .transformWith(StreamFilter.mapper(x -> x + " times 10 = " + x * 10))\n          .transformWith(ChannelSerializer.create(UTF8_SERIALIZER))\n          .streamTo(ChannelConsumer.ofSocket(socket));\n    });\n\n    System.out.println("Connect to the server by running datastream.TcpClientExample");\n\n    eventloop.run();\n  }\n}\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)(o.Z,{url:"/examples/core/net/src/main/java/datastream/TcpServerExample.java",mdxType:"Githublink"},"See full example on GitHub"))))}k.isMDXComponent=!0},11748:function(e,n,t){var a={"./locale":89234,"./locale.js":89234};function r(e){var n=i(e);return t(n)}function i(e){if(!t.o(a,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=i,e.exports=r,r.id=11748}}]);