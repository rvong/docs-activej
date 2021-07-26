(self.webpackChunkactivejdocs=self.webpackChunkactivejdocs||[]).push([[5220],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,v=u["".concat(c,".").concat(m)]||u[m]||p[m]||i;return n?r.createElement(v,o(o({ref:t},d),{},{components:n})):r.createElement(v,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},77618:function(e,t,n){"use strict";var r=n(67294),a=n(39962);t.Z=function(e){var t=e.url,n=e.text,i=e.isInline,o=void 0===i||i,l=e.children,c=(0,a.Z)().siteConfig;return r.createElement("a",{style:o?{}:{display:"block",marginBottom:"16px"},href:c.customFields.githubUrl+"/"+c.customFields.githubBranch+t,target:"_blank"},n||l)}},77815:function(e,t,n){"use strict";n(67294);var r=n(39962);t.Z=function(e){var t=e.name,n=(0,r.Z)().siteConfig;if(!t)throw new Error("Variable name is required");if(void 0===n.customFields[t])throw new Error("Variable "+t+" not exist");return n.customFields[t]}},87603:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return u},default:function(){return v}});var r=n(22122),a=n(19756),i=(n(67294),n(3905)),o=n(77618),l=n(77815),c=["components"],s={title:"ActiveJ Codegen Overview | Dynamic bytecode generator with minimal overhead",description:"ActiveJ Codegen is a dynamic bytecode generator with minimal overhead and convenient API",sidebar_label:"Overview",slug:"/codegen"},d="Overview",p={unversionedId:"codegen/overview",id:"codegen/overview",isDocsHomePage:!1,title:"ActiveJ Codegen Overview | Dynamic bytecode generator with minimal overhead",description:"ActiveJ Codegen is a dynamic bytecode generator with minimal overhead and convenient API",source:"@site/docs/codegen/overview.mdx",sourceDirName:"codegen",slug:"/codegen",permalink:"/codegen",version:"current",frontMatter:{title:"ActiveJ Codegen Overview | Dynamic bytecode generator with minimal overhead",description:"ActiveJ Codegen is a dynamic bytecode generator with minimal overhead and convenient API",sidebar_label:"Overview",slug:"/codegen"},sidebar:"docs",previous:{title:"Examples",permalink:"/inject/examples"},next:{title:"Examples",permalink:"/codegen/examples"}},u=[{value:"Why ActiveJ Codegen?",id:"why-activej-codegen",children:[]},{value:"Code generation",id:"code-generation",children:[]},{value:"Add ActiveJ Codegen to your project",id:"add-activej-codegen-to-your-project",children:[]}],m={toc:u};function v(e){var t=e.components,n=(0,a.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"overview"},"Overview"),(0,i.kt)("p",null,"ActiveJ Codegen is an efficient Java code generator with streamlined and simple API. It is built on top of ObjectWeb ASM and has zero-overhead performance. ActiveJ Codegen is widely utilised at ",(0,i.kt)("a",{parentName:"p",href:"/serializer"},"ActiveJ Serializer"),", making it the fastest JVM-based serializer in the world.\nActiveJ Codegen is one of the ActiveJ technologies, but it has minimal third-party dependencies and can be used as a stand-alone component."),(0,i.kt)("h2",{id:"why-activej-codegen"},"Why ActiveJ Codegen?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Utilizes powerful ASM library for code generation and manipulation"),(0,i.kt)("li",{parentName:"ul"},"Provides concise Expressions API that provides Lisp-like DSL for describing new classes"),(0,i.kt)("li",{parentName:"ul"},"Supports caching of generated classes"),(0,i.kt)("li",{parentName:"ul"},"Suitable for dynamic class generation based on runtime parameters (e.g. query processing)"),(0,i.kt)("li",{parentName:"ul"},"Supports relational algebra operations for individual items: aggregate functions, predicates, ordering, group-by, etc."),(0,i.kt)("li",{parentName:"ul"},"Features automatic type inference"),(0,i.kt)("li",{parentName:"ul"},"Zero-overhead performance"),(0,i.kt)("li",{parentName:"ul"},"Support for Records (heterogeneous data containers)")),(0,i.kt)("h2",{id:"code-generation"},"Code generation"),(0,i.kt)("p",null,"Let's say that we want to create a class that implements ",(0,i.kt)("inlineCode",{parentName:"p"},"Person")," interface."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public interface Greeter {\n    void sayHello();\n}\n")),(0,i.kt)("p",null,'A generated class should simply print "Hello World" when ',(0,i.kt)("inlineCode",{parentName:"p"},"sayHello()")," method is called."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'public class WorldGreeter implements Greeter {\n    @Override\n    public void sayHello() {\n        System.out.println("Hello World");\n    }\n}\n')),(0,i.kt)("p",null,"To generate such class programmatically we should use a ",(0,i.kt)(o.Z,{url:"/core-codegen/src/main/java/io/activej/codegen/ClassBuilder.java",mdxType:"Githublink"},(0,i.kt)("inlineCode",{parentName:"p"},"ClassBuilder"))," class."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'Class<Greeter> greeterClass = ClassBuilder\n        .create(DefiningClassLoader.create(), Greeter.class)\n        .withMethod("sayHello",\n                call(staticField(System.class, "out"), "println", value("Hello world")))\n        .build();\n')),(0,i.kt)("p",null,"Notice the ",(0,i.kt)("inlineCode",{parentName:"p"},'call(staticField(System.class, "out"), "println", value("Hello world"))')," expression."),(0,i.kt)("p",null,"This is how Expressions DSL looks like.\nFirst, we access static field ",(0,i.kt)("inlineCode",{parentName:"p"},"out")," of ",(0,i.kt)("inlineCode",{parentName:"p"},"System")," class. Then we call ",(0,i.kt)("inlineCode",{parentName:"p"},"println()")," method on it, passing value ",(0,i.kt)("inlineCode",{parentName:"p"},'"Hello world"')," as an argument.\nThis is equivalent to a ",(0,i.kt)("inlineCode",{parentName:"p"},'System.out.println("Hello world)')),(0,i.kt)("p",null,"When a new instance of this class is created and ",(0,i.kt)("inlineCode",{parentName:"p"},"sayHello()")," method is called, the output is ",(0,i.kt)("em",{parentName:"p"},'"Hello world"')," as expected."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'Greeter greeter = greeterClass.getDeclaredConstructor().newInstance();\ngreeter.sayHello(); // prints "Hello world" to stdout\n')),(0,i.kt)("p",null,"This is merely a hint of what ActiveJ Codegen is capable of. For more information, please refer to examples or internal documentation."),(0,i.kt)("h2",{id:"add-activej-codegen-to-your-project"},"Add ActiveJ Codegen to your project"),(0,i.kt)("p",null,"You can add ActiveJ Codegen to your project by importing its Maven repository.\nThese docs cover the most recent release of ActiveJ Codegen ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)(l.Z,{style:{display:"inline"},name:"currentVersion",mdxType:"Variable"}))," (see on ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/activej/activej/tree/master/core-codegen"},"Github")," or ",(0,i.kt)("a",{parentName:"p",href:"https://mvnrepository.com/artifact/io.activej/activej-codegen"},"Maven"),")."))}v.isMDXComponent=!0}}]);