(self.webpackChunkactivejdocs=self.webpackChunkactivejdocs||[]).push([[998],{3905:function(e,t,a){"use strict";a.d(t,{kt:function(){return d}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),c=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(a),m=r,h=d["".concat(p,".").concat(m)]||d[m]||s[m]||i;return a?n.createElement(h,o(o({ref:t},u),{},{components:a})):n.createElement(h,o({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},77618:function(e,t,a){"use strict";var n=a(95318).default;t.Z=void 0;var r=n(a(67294)),i=n(a(39962)),o=function(e){var t=e.url,a=e.text,n=e.isInline,o=void 0===n||n,l=e.children,p=(0,i.default)().siteConfig;return r.default.createElement("a",{style:o?{}:{display:"block",marginBottom:"16px"},href:p.customFields.githubUrl+"/"+p.customFields.githubBranch+t,target:"_blank"},a||l)};t.Z=o},77815:function(e,t,a){"use strict";var n=a(95318).default;t.Z=void 0;n(a(67294));var r=n(a(39962)),i=function(e){var t=e.name,a=(0,r.default)().siteConfig;if(!t)throw new Error("Variable name is required");if(void 0===a.customFields[t])throw new Error("Variable "+t+" not exist");return a.customFields[t]};t.Z=i},33304:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return m}});var n=a(22122),r=a(19756),i=(a(67294),a(3905)),o=a(77618),l=a(77815),p=["components"],c={title:"ActiveJ | To-Do list app using React",keywords:["java","java for beginners","java framework","guide","tutorial","web application","server","servlet","spring","spring alternative","netty alternative","jetty alternative","async","todo app","todo list","react","reactjs","react js"],description:"Integrate React.js in your Java web application. In the tutorial you will create a To-Do app using ActiveJ Java platform and React.js."},s={unversionedId:"tutorials/todo-list-tutorial",id:"tutorials/todo-list-tutorial",isDocsHomePage:!1,title:"To-Do list app using React",description:"Integrate React.js in your Java web application. In the tutorial you will create a To-Do app using ActiveJ Java platform and React.js.",source:"@site/docs/tutorials/todo-list-tutorial.mdx",sourceDirName:"tutorials",slug:"/tutorials/todo-list-tutorial",permalink:"/docs/tutorials/todo-list-tutorial",version:"current",frontMatter:{title:"ActiveJ | To-Do list app using React",keywords:["java","java for beginners","java framework","guide","tutorial","web application","server","servlet","spring","spring alternative","netty alternative","jetty alternative","async","todo app","todo list","react","reactjs","react js"],description:"Integrate React.js in your Java web application. In the tutorial you will create a To-Do app using ActiveJ Java platform and React.js."},sidebar:"tutorials",previous:{title:"Using React in ActiveJ projects",permalink:"/docs/tutorials/using-react"}},u=[{value:"Creating Launcher",id:"creating-launcher",children:[]},{value:"Running the application",id:"running-the-application",children:[]}],d={toc:u};function m(e){var t=e.components,a=(0,r.default)(e,p);return(0,i.kt)("wrapper",(0,n.default)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In this tutorial we will create a To-Do List app using ActiveJ and React. We will explore how to integrate React in an ActiveJ project and how to simply manage routing using the HTTP module. You can find full example sources on ",(0,i.kt)(o.Z,{text:"GitHub",url:"/examples/tutorials/react-integration-2",mdxType:"Githublink"})),(0,i.kt)("p",null,"Here we will consider only the main app class - ",(0,i.kt)("a",{parentName:"p",href:"#creating-launcher"},(0,i.kt)("inlineCode",{parentName:"a"},"ApplicationLauncher")),". It uses ActiveJ ",(0,i.kt)(o.Z,{url:"/launchers/http/src/main/java/io/activej/launchers/http/HttpServerLauncher.java",mdxType:"Githublink"},(0,i.kt)("inlineCode",{parentName:"p"},"HttpServerLauncher"))," and ",(0,i.kt)(o.Z,{url:"/core-http/src/main/java/io/activej/http/AsyncServlet.java",mdxType:"Githublink"},(0,i.kt)("inlineCode",{parentName:"p"},"AsyncServlet"))," classes for setting up an embedded application server. With this approach, you can create servers with no XML configurations or third-party dependencies. Moreover, ",(0,i.kt)("inlineCode",{parentName:"p"},"HttpServerLauncher")," will automatically take care of launching, running and stopping the application. You'll only need to provide launcher with servlets."),(0,i.kt)("h2",{id:"creating-launcher"},"Creating Launcher"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ApplicationLauncher")," is the main class of the program. Besides launching the application, it also handles routing and most of the corresponding logic. We will use ActiveJ ",(0,i.kt)("inlineCode",{parentName:"p"},"HttpServerLauncher")," and extend it:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/tutorials/react-integration-2/src/main/java/ApplicationLauncher.java tag=REGION_1",url:"/examples/tutorials/react-integration-2/src/main/java/ApplicationLauncher.java",tag:"REGION_1"},'public final class ApplicationLauncher extends HttpServerLauncher {\n\n  private static final StructuredCodec<Plan> PLAN_CODEC = object(Plan::new,\n      "text", Plan::getText, STRING_CODEC,\n      "isComplete", Plan::isComplete, BOOLEAN_CODEC);\n\n  private static final StructuredCodec<Record> RECORD_CODEC = object(Record::new,\n      "title", Record::getTitle, STRING_CODEC,\n      "plans", Record::getPlans, ofList(PLAN_CODEC));\n\n  @Provides\n  RecordDAO recordRepo() {\n    return new RecordImplDAO();\n  }\n\n  @Provides\n  Executor executor() {\n    return newSingleThreadExecutor();\n  }\n')),(0,i.kt)("p",null,"First, we define ",(0,i.kt)("a",{parentName:"p",href:"/docs/misc/codec"},"codecs")," for our two entities: ",(0,i.kt)("strong",{parentName:"p"},"Plan")," and ",(0,i.kt)("strong",{parentName:"p"},"Record"),".\nThese codecs will help us to encode/decode ",(0,i.kt)("strong",{parentName:"p"},"Plan")," and ",(0,i.kt)("strong",{parentName:"p"},"Record")," from/to JSONs to communicate with ",(0,i.kt)("strong",{parentName:"p"},"TodoService.js"),"."),(0,i.kt)("p",null,"Method ",(0,i.kt)("em",{parentName:"p"},"object")," returns a new ",(0,i.kt)("inlineCode",{parentName:"p"},"StructuredCodec")," and, in the case of ",(0,i.kt)("strong",{parentName:"p"},"Plan")," and ",(0,i.kt)("strong",{parentName:"p"},"Record")," entities, that requires the\nfollowing parameters:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"TupleParser2")," ",(0,i.kt)("em",{parentName:"li"},"constructor")," - basically a constructor of your class with 2 parameters. There are\nseveral predefined ",(0,i.kt)("inlineCode",{parentName:"li"},"TupleParser"),"s for up to 6 parameters."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"String")," ",(0,i.kt)("inlineCode",{parentName:"li"},"field1")," - the first field of the encoded/decoded class"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Function")," ",(0,i.kt)("em",{parentName:"li"},"getter1")," - getter of ",(0,i.kt)("inlineCode",{parentName:"li"},"field1")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"StructuredCodec")," ",(0,i.kt)("em",{parentName:"li"},"codec1")," - codec for ",(0,i.kt)("inlineCode",{parentName:"li"},"field1")," (depends on the type of the field, for example, ",(0,i.kt)("inlineCode",{parentName:"li"},"STRING_CODEC"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"BOOLEAN_CODEC"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"String")," ",(0,i.kt)("em",{parentName:"li"},"field2")," - another field of the class"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Function")," ",(0,i.kt)("em",{parentName:"li"},"getter2")," - getter of ",(0,i.kt)("em",{parentName:"li"},"field2")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"StructuredCodec")," ",(0,i.kt)("em",{parentName:"li"},"codec1")," - codec for ",(0,i.kt)("em",{parentName:"li"},"field2"))),(0,i.kt)("p",null,"Next, we provided ",(0,i.kt)("inlineCode",{parentName:"p"},"RecordDAO")," with the application business logic and ",(0,i.kt)("inlineCode",{parentName:"p"},"Executor")," which is needed for our ",(0,i.kt)("inlineCode",{parentName:"p"},"AsyncServlet"),".\n",(0,i.kt)("inlineCode",{parentName:"p"},"AsyncServlet")," loads static content from ",(0,i.kt)("inlineCode",{parentName:"p"},"/build")," directory and takes care of the routing:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/tutorials/react-integration-2/src/main/java/ApplicationLauncher.java tag=REGION_2",url:"/examples/tutorials/react-integration-2/src/main/java/ApplicationLauncher.java",tag:"REGION_2"},'@Provides\nAsyncServlet servlet(Executor executor, RecordDAO recordDAO) {\n  return RoutingServlet.create()\n      .map("/*", StaticServlet.ofClassPath(executor, "build/")\n          .withIndexHtml())\n')),(0,i.kt)("p",null,"Routing in ActiveJ HTTP module resembles Express approach. Method ",(0,i.kt)("em",{parentName:"p"},"map(@Nullable HttpMethod method, String path, AsyncServlet servlet)"),"\nadds routes to the ",(0,i.kt)("inlineCode",{parentName:"p"},"RoutingServlet"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"method")," (optional) is one of the HTTP methods (",(0,i.kt)("inlineCode",{parentName:"li"},"GET"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"POST"),", etc.)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"path")," is the path on the server"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"servlet")," defines the logic of request processing. If you need to get some data from the ",(0,i.kt)("inlineCode",{parentName:"li"},"request")," while processing you can use:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"request.getPathParameter(String key)"),"/",(0,i.kt)("inlineCode",{parentName:"li"},"request.getQueryParameter(String key)")," (",(0,i.kt)(o.Z,{text:"see example of query parameter usage",url:"/examples/core/http/src/main/java/HttpRequestParametersExample.java",mdxType:"Githublink"}),"\nto provide the key of the needed parameter and receive back a corresponding String"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"request.getPostParameters()")," to get a Map of all request parameters")))),(0,i.kt)("p",null,"Pay attention to the ",(0,i.kt)("inlineCode",{parentName:"p"},"*")," in the provided request. It states that whichever path until the next ",(0,i.kt)("inlineCode",{parentName:"p"},"/")," is received, it\nwill be processed by our static servlet, which uploads static content from ",(0,i.kt)("inlineCode",{parentName:"p"},"/build")," directory."),(0,i.kt)("p",null,"Servlet should be able to add a new record, get all available records, delete record by its id and\nalso mark plans of particular record as completed or not, so we provide corresponding routing:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/tutorials/react-integration-2/src/main/java/ApplicationLauncher.java tag=REGION_3",url:"/examples/tutorials/react-integration-2/src/main/java/ApplicationLauncher.java",tag:"REGION_3"},'.map(POST, "/add", loadBody()\n    .serve(request -> {\n      ByteBuf body = request.getBody();\n      try {\n        Record record = JsonUtils.fromJson(RECORD_CODEC, body.getString(UTF_8));\n        recordDAO.add(record);\n        return HttpResponse.ok200();\n      } catch (MalformedDataException e) {\n        return HttpResponse.ofCode(400);\n      }\n    }))\n.map(GET, "/get/all", request -> {\n  Map<Integer, Record> records = recordDAO.findAll();\n  return HttpResponse.ok200()\n      .withJson(JsonUtils.toJson(ofMap(INT_CODEC, RECORD_CODEC), records));\n})\n//[START REGION_4]\n.map(GET, "/delete/:recordId", request -> {\n  int id = parseInt(request.getPathParameter("recordId"));\n  recordDAO.delete(id);\n  return HttpResponse.ok200();\n})\n//[END REGION_4]\n.map(GET, "/toggle/:recordId/:planId", request -> {\n  int id = parseInt(request.getPathParameter("recordId"));\n  int planId = parseInt(request.getPathParameter("planId"));\n\n  Record record = recordDAO.find(id);\n  Plan plan = record.getPlans().get(planId);\n  plan.toggle();\n  return HttpResponse.ok200();\n});\n')),(0,i.kt)("p",null,"Pay attention to the requests with ",(0,i.kt)("inlineCode",{parentName:"p"},":"),", for example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/tutorials/react-integration-2/src/main/java/ApplicationLauncher.java tag=REGION_4",url:"/examples/tutorials/react-integration-2/src/main/java/ApplicationLauncher.java",tag:"REGION_4"},'.map(GET, "/delete/:recordId", request -> {\n  int id = parseInt(request.getPathParameter("recordId"));\n  recordDAO.delete(id);\n  return HttpResponse.ok200();\n})\n')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},":")," states that the following characters until the next ",(0,i.kt)("inlineCode",{parentName:"p"},"/")," is a variable whose keyword, in this case, is ",(0,i.kt)("inlineCode",{parentName:"p"},"recordId"),"."),(0,i.kt)("h2",{id:"running-the-application"},"Running the application"),(0,i.kt)("p",null,"To run the example ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/activej/activej"},"clone ActiveJ")," and import it\nas a Maven project. Check out branch ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)(l.Z,{name:"currentVersion",mdxType:"Variable"})),". Before running the example, build the project (",(0,i.kt)("strong",{parentName:"p"},"Ctrl + F9")," for IntelliJ IDEA)."),(0,i.kt)("p",null,"Then, run the following command in ",(0,i.kt)("inlineCode",{parentName:"p"},"activej/examples/tutorials/react-integration-2/front")," directory in terminal:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm i\nnpm run-script build\n")),(0,i.kt)("p",null,"Open ",(0,i.kt)("inlineCode",{parentName:"p"},"ApplicationLauncher")," and run its ",(0,i.kt)("inlineCode",{parentName:"p"},"main")," method. Then open your favourite browser and go to ",(0,i.kt)("a",{parentName:"p",href:"http://localhost:8080"},"localhost:8080"),". Try to add and delete some tasks or mark them as completed"))}m.isMDXComponent=!0}}]);