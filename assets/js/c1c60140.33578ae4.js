"use strict";(self.webpackChunkactivejdocs=self.webpackChunkactivejdocs||[]).push([[5033],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=i,g=m["".concat(p,".").concat(d)]||m[d]||u[d]||r;return n?a.createElement(g,o(o({ref:t},c),{},{components:n})):a.createElement(g,o({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},77618:function(e,t,n){var a=n(67294),i=n(39962);t.Z=function(e){var t=e.url,n=e.text,r=e.isInline,o=void 0===r||r,l=e.isExample,p=void 0!==l&&l,s=e.children,c=(0,i.Z)().siteConfig;return a.createElement("a",{style:o?{}:{display:"block",marginBottom:"16px"},href:c.customFields.githubUrl+"/"+c.customFields.githubBranch+(p?"-examples":"")+t,target:"_blank"},n||s)}},77815:function(e,t,n){n(67294);var a=n(39962);t.Z=function(e){var t=e.name,n=(0,a.Z)().siteConfig;if(!t)throw new Error("Variable name is required");if(void 0===n.customFields[t])throw new Error("Variable "+t+" not exist");return n.customFields[t]}},28883:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return m},default:function(){return g}});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),o=n(77815),l=n(77618),p=["components"],s={title:"ActiveJ | Simple web application with template engine integration",sidebar_label:"Template Engine Integration",keywords:["java","java framework","tutorial","java for beginners","guide","http server","spring alternative","netty alternative","jetty alternative","template engine","mustache","poll application"],description:"Create poll web-application using ActiveJ and Mustache template engine. The embedded application server in 100 lines of code and no xml configurations."},c="Template engine integration",u={unversionedId:"tutorials/template-engine-integration",id:"tutorials/template-engine-integration",isDocsHomePage:!1,title:"ActiveJ | Simple web application with template engine integration",description:"Create poll web-application using ActiveJ and Mustache template engine. The embedded application server in 100 lines of code and no xml configurations.",source:"@site/docs/tutorials/template-engine-integration.mdx",sourceDirName:"tutorials",slug:"/tutorials/template-engine-integration",permalink:"/tutorials/template-engine-integration",version:"current",frontMatter:{title:"ActiveJ | Simple web application with template engine integration",sidebar_label:"Template Engine Integration",keywords:["java","java framework","tutorial","java for beginners","guide","http server","spring alternative","netty alternative","jetty alternative","template engine","mustache","poll application"],description:"Create poll web-application using ActiveJ and Mustache template engine. The embedded application server in 100 lines of code and no xml configurations."},sidebar:"tutorials",previous:{title:"Getting Started",permalink:"/tutorials/getting-started"},next:{title:"HTTP Decoder",permalink:"/tutorials/http-decoder"}},m=[{value:"Creating launcher",id:"creating-launcher",children:[]},{value:"Running the application",id:"running-the-application",children:[]}],d={toc:m};function g(e){var t=e.components,n=(0,i.Z)(e,p);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"template-engine-integration"},"Template engine integration"),(0,r.kt)("p",null,"In this example we will implement template engines in ActiveJ applications. The example shows how to create a simple Poll app which creates new polls with a custom title, description, and options. Each new poll gets a unique generated link that leads to the page where you can vote."),(0,r.kt)("p",null,"See how simple it is to implement such features using ActiveJ: the embedded application server has only about ",(0,r.kt)("strong",{parentName:"p"},"100 lines of code")," with ",(0,r.kt)("strong",{parentName:"p"},"no additional xml configurations"),". In this example we used ",(0,r.kt)("a",{parentName:"p",href:"https://mustache.github.io/"},(0,r.kt)("strong",{parentName:"a"},"Mustache"))," as a template engine."),(0,r.kt)("p",null,"Here we will consider only the ",(0,r.kt)("a",{parentName:"p",href:"#creating-launcher"},(0,r.kt)("inlineCode",{parentName:"a"},"ApplicationLauncher")," class"),", which is the main class of the application. You can find full example sources on ",(0,r.kt)(l.Z,{text:"GitHub",url:"/examples/tutorials/template-engine",mdxType:"Githublink"})),(0,r.kt)("h2",{id:"creating-launcher"},"Creating launcher"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"ApplicationLauncher")," launches our application, takes care of routing and proper content generation on HTML pages. We will extend ActiveJ's ",(0,r.kt)("inlineCode",{parentName:"p"},"HttpServerLauncher")," to manage the application's lifecycle:"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"In this example we omit error handling to keep everything brief and simple."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/tutorials/template-engine/src/main/java/ApplicationLauncher.java tag=REGION_1",url:"/examples/tutorials/template-engine/src/main/java/ApplicationLauncher.java",tag:"REGION_1"},"public final class ApplicationLauncher extends HttpServerLauncher {\n\n  private static ByteBuf applyTemplate(Mustache mustache, Map<String, Object> scopes) {\n    ByteBufWriter writer = new ByteBufWriter();\n    mustache.execute(writer, scopes);\n    return writer.getBuf();\n  }\n\n  @Provides\n  PollDao pollRepo() {\n    return new PollDaoImpl();\n  }\n\n")),(0,r.kt)("p",null,"Let's have a closer look at the launcher. It contains two methods:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"applyTemplate(Mustache mustache, Map<String, Object> scopes)")," fills the provided Mustache template with the given data through a ",(0,r.kt)("a",{parentName:"li",href:"/misc/bytebuf"},(0,r.kt)("inlineCode",{parentName:"a"},"ByteBuf"))," - a more efficient implementation of ByteBuffer;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pollRepo()")," provides the business logic of our app. The ",(0,r.kt)("inlineCode",{parentName:"li"},"@Provides")," annotation means it's done through ",(0,r.kt)("a",{parentName:"li",href:"/inject"},"ActiveJ Inject DI"),".")),(0,r.kt)("p",null,"Next, we provide ",(0,r.kt)("inlineCode",{parentName:"p"},"AsyncServlet"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/tutorials/template-engine/src/main/java/ApplicationLauncher.java tag=REGION_1",url:"/examples/tutorials/template-engine/src/main/java/ApplicationLauncher.java",tag:"REGION_1"},"public final class ApplicationLauncher extends HttpServerLauncher {\n\n  private static ByteBuf applyTemplate(Mustache mustache, Map<String, Object> scopes) {\n    ByteBufWriter writer = new ByteBufWriter();\n    mustache.execute(writer, scopes);\n    return writer.getBuf();\n  }\n\n  @Provides\n  PollDao pollRepo() {\n    return new PollDaoImpl();\n  }\n\n")),(0,r.kt)("p",null,"In the ",(0,r.kt)("inlineCode",{parentName:"p"},"AsyncServlet")," we create three Mustache objects, one for each HTML page.\nTo define routing, we create a ",(0,r.kt)("inlineCode",{parentName:"p"},"RoutingServlet"),". You may notice that the routing approach resembles Express.js. In the example above\nwe've added the mapping to the homepage by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"map")," method."),(0,r.kt)("p",null,"Method",(0,r.kt)("inlineCode",{parentName:"p"},"map(@Nullable HttpMethod method, String path, AsyncServlet servlet)")," adds a route to the ",(0,r.kt)("inlineCode",{parentName:"p"},"RoutingServlet"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"method")," is one of the HTTP methods (",(0,r.kt)("inlineCode",{parentName:"li"},"GET"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"POST")," and so on)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"path")," is the path on the server"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"servlet")," defines the logic of request processing. If you need to get some data from the ",(0,r.kt)("em",{parentName:"li"},"request")," while processing you can use:"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"request.getPathParameter(String key)"),"/",(0,r.kt)("inlineCode",{parentName:"li"},"request.getQueryParameter(String key)")," (",(0,r.kt)(l.Z,{text:"see example of query parameter usage",url:"/examples/core/http/src/main/java/HttpRequestParametersExample.java",mdxType:"Githublink"}),")\nto provide the key of the needed parameter and receive back a corresponding String"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"request.getPostParameters()")," to get a Map of all request parameters")),(0,r.kt)("p",null,"In this request we get all current polls and info about them in order to generate ",(0,r.kt)("em",{parentName:"p"},"listPolls")," page."),(0,r.kt)("p",null,"Let's add one more request:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/tutorials/template-engine/src/main/java/ApplicationLauncher.java tag=REGION_3",url:"/examples/tutorials/template-engine/src/main/java/ApplicationLauncher.java",tag:"REGION_3"},'.map(GET, "/poll/:id", request -> {\n  int id = Integer.parseInt(request.getPathParameter("id"));\n  return HttpResponse.ok200()\n      .withBody(applyTemplate(singlePollView, mapOf("id", id, "poll", pollDao.find(id))));\n})\n')),(0,r.kt)("p",null,"This request returns a page with a poll which id was specified in the path.\nPay attention to the provided path ",(0,r.kt)("inlineCode",{parentName:"p"},"/poll/:id")," syntax. ",(0,r.kt)("inlineCode",{parentName:"p"},":")," states that the following characters until the next ",(0,r.kt)("inlineCode",{parentName:"p"},"/")," are a\nvariable; in this case, its keyword is ",(0,r.kt)("inlineCode",{parentName:"p"},"id"),". This way you don't have to map each poll's id to a different request."),(0,r.kt)("p",null,"The next requests with ",(0,r.kt)("inlineCode",{parentName:"p"},"/create"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"/vote"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"/add")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"/delete")," paths take care of providing a page for creating\nnew polls, voting, adding created polls to the ",(0,r.kt)("em",{parentName:"p"},"pollDao")," and deleting them from it respectively:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/tutorials/template-engine/src/main/java/ApplicationLauncher.java tag=REGION_4",url:"/examples/tutorials/template-engine/src/main/java/ApplicationLauncher.java",tag:"REGION_4"},'.map(GET, "/create", request ->\n    HttpResponse.ok200()\n        .withBody(applyTemplate(singlePollCreate, emptyMap())))\n.map(POST, "/vote", loadBody()\n    .serve(request -> {\n      Map<String, String> params = request.getPostParameters();\n      String option = params.get("option");\n      String stringId = params.get("id");\n      if (option == null || stringId == null) {\n        return Promise.of(HttpResponse.ofCode(401));\n      }\n\n      int id = Integer.parseInt(stringId);\n      PollDao.Poll question = pollDao.find(id);\n\n      question.vote(option);\n\n      return HttpResponse.redirect302(nonNullElse(request.getHeader(REFERER), "/"));\n    }))\n.map(POST, "/add", loadBody()\n    .serve(request -> {\n      Map<String, String> params = request.getPostParameters();\n      String title = params.get("title");\n      String message = params.get("message");\n\n      String option1 = params.get("option1");\n      String option2 = params.get("option2");\n\n      int id = pollDao.add(new PollDao.Poll(title, message, listOf(option1, option2)));\n      return HttpResponse.redirect302("poll/" + id);\n    }))\n.map(POST, "/delete", loadBody()\n    .serve(request -> {\n      Map<String, String> params = request.getPostParameters();\n      String id = params.get("id");\n      if (id == null) {\n        return Promise.of(HttpResponse.ofCode(401));\n      }\n      pollDao.remove(Integer.parseInt(id));\n\n      return HttpResponse.redirect302("/");\n    }));\n')),(0,r.kt)("p",null,"Also, we defined ",(0,r.kt)("inlineCode",{parentName:"p"},"main()")," method which will start our launcher:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/tutorials/template-engine/src/main/java/ApplicationLauncher.java tag=REGION_5",url:"/examples/tutorials/template-engine/src/main/java/ApplicationLauncher.java",tag:"REGION_5"},"public static void main(String[] args) throws Exception {\n  Launcher launcher = new ApplicationLauncher();\n  launcher.launch(args);\n}\n")),(0,r.kt)("p",null,"And that's it, we have a full-functional poll application!"),(0,r.kt)("h2",{id:"running-the-application"},"Running the application"),(0,r.kt)("p",null,"If you want to run the example, you need to from GitHub and import\nit as a Maven project. Check out branch ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)(o.Z,{name:"currentVersion",mdxType:"Variable"})),". Before running the example, build the project (",(0,r.kt)("strong",{parentName:"p"},"Ctrl + F9")," for IntelliJ IDEA).\nOpen ",(0,r.kt)("inlineCode",{parentName:"p"},"ApplicationLauncher")," class and run its ",(0,r.kt)("inlineCode",{parentName:"p"},"main()")," method.\nThen open your favourite browser and go to ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:8080"},"localhost:8080")))}g.isMDXComponent=!0}}]);