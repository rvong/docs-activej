(self.webpackChunkactivejdocs=self.webpackChunkactivejdocs||[]).push([[5760],{77618:function(e,t,n){"use strict";var i=n(67294),a=n(39962);t.Z=function(e){var t=e.url,n=e.text,r=e.isInline,l=void 0===r||r,o=e.isExample,s=void 0!==o&&o,c=e.children,d=(0,a.Z)().siteConfig;return i.createElement("a",{style:l?{}:{display:"block",marginBottom:"16px"},href:d.customFields.githubUrl+"/"+d.customFields.githubBranch+(s?"-examples":"")+t,target:"_blank"},n||c)}},14304:function(e,t,n){"use strict";var i=n(67294),a=n(21140),r=n.n(a);r().initialize({startOnLoad:!0});t.Z=function(e){var t=e.chart;return(0,i.useEffect)((function(){r().contentLoaded()}),[]),i.createElement("div",{className:"mermaid"},t)}},75123:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return p},default:function(){return m}});var i=n(87462),a=n(63366),r=(n(67294),n(3905)),l=n(77618),o=(n(14304),["components"]),s={title:"ActiveJ Inject Basics | Lightning-fast and ultimately powerful Dependency Injection Java library. Multithreaded friendly, feature-rich, and can boast with lighting-fast start-up time and runtime",description:"Extremely lightweight DI library. Multi-thread friendly, feature-rich, and can boast with lighting-fast start-up time and runtime - 5.5 times faster than Guice and 100s times faster than Spring.",sidebar_label:"Basic",keywords:["di","dependency injection","guice alternative","spring di","spring alternative","di benchmarks","java","java di","java dependency injection","java framework"]},c="Basics",d={unversionedId:"inject/basic",id:"inject/basic",isDocsHomePage:!1,title:"ActiveJ Inject Basics | Lightning-fast and ultimately powerful Dependency Injection Java library. Multithreaded friendly, feature-rich, and can boast with lighting-fast start-up time and runtime",description:"Extremely lightweight DI library. Multi-thread friendly, feature-rich, and can boast with lighting-fast start-up time and runtime - 5.5 times faster than Guice and 100s times faster than Spring.",source:"@site/docs/inject/basic.mdx",sourceDirName:"inject",slug:"/inject/basic",permalink:"/inject/basic",version:"current",frontMatter:{title:"ActiveJ Inject Basics | Lightning-fast and ultimately powerful Dependency Injection Java library. Multithreaded friendly, feature-rich, and can boast with lighting-fast start-up time and runtime",description:"Extremely lightweight DI library. Multi-thread friendly, feature-rich, and can boast with lighting-fast start-up time and runtime - 5.5 times faster than Guice and 100s times faster than Spring.",sidebar_label:"Basic",keywords:["di","dependency injection","guice alternative","spring di","spring alternative","di benchmarks","java","java di","java dependency injection","java framework"]},sidebar:"docs",previous:{title:"Binding transformations",permalink:"/inject/binding-transformations"},next:{title:"Advanced",permalink:"/inject/advanced"}},p=[{value:"Dependency Injection, Keys, Bindings",id:"dependency-injection-keys-bindings",children:[]},{value:"Injector",id:"injector",children:[]},{value:"Scopes",id:"scopes",children:[]},{value:"Modules",id:"modules",children:[]}],u={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"basics"},"Basics"),(0,r.kt)("h2",{id:"dependency-injection-keys-bindings"},"Dependency Injection, Keys, Bindings"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Applications consist of components and each component has an inner ",(0,r.kt)("strong",{parentName:"li"},"id")," called ",(0,r.kt)(l.Z,{text:"Key",url:"/core-inject/src/main/java/io/activej/inject/Key.java",mdxType:"Githublink"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Key")," consists of the ",(0,r.kt)("inlineCode",{parentName:"li"},"Type")," type and nullable qualifier ",(0,r.kt)("inlineCode",{parentName:"li"},"Object")," (useful when you need different implementations of the same ",(0,r.kt)("inlineCode",{parentName:"li"},"Type"),"):")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public class Key<T> {\n    @NotNull\n    private final Type type;\n    @Nullable\n    private final Object qualifier;\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Application components can require some dependencies in order to be created."),(0,r.kt)("li",{parentName:"ul"},"Dependency Injection takes care of supplying application components with these required objects."),(0,r.kt)("li",{parentName:"ul"},"In order to do it, we need to specify ",(0,r.kt)("strong",{parentName:"li"},"what")," it needs to provide and ",(0,r.kt)("strong",{parentName:"li"},"how")," to use the provided objects."),(0,r.kt)("li",{parentName:"ul"},"Therefore, ",(0,r.kt)(l.Z,{url:"/core-inject/src/main/java/io/activej/inject/binding/Binding.java",mdxType:"Githublink"},(0,r.kt)("inlineCode",{parentName:"li"},"Binding"))," has two corresponding attributes:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"a set of needed for creation Set<",(0,r.kt)(l.Z,{url:"/core-inject/src/main/java/io/activej/inject/binding/Dependency.java",mdxType:"Githublink"},(0,r.kt)("inlineCode",{parentName:"li"},"Dependency")),"> dependencies (POJO with ",(0,r.kt)("inlineCode",{parentName:"li"},"Key"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)(l.Z,{text:"BindingCompiler",url:"/core-inject/src/main/java/io/activej/inject/impl/BindingCompiler.java",mdxType:"Githublink"})," which will compile required instances")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"}," public final class Binding<T> {\n     final Set<Dependency> dependencies;\n     final BindingCompiler<T> compiler;\n }\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Binding"),' is like a "recipe" of how to create an instance of a component:',(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"dependencies")," show what ingredients should be used"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"compiler")," knows how to cook them together"))),(0,r.kt)("li",{parentName:"ul"},"Now we need something that can use the recipe to cook the component properly, and here comes ",(0,r.kt)(l.Z,{text:"Injector",url:"/core-inject/src/main/java/io/activej/inject/Injector.java",mdxType:"Githublink"}))),(0,r.kt)("h2",{id:"injector"},"Injector"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Provides all the required dependencies (",(0,r.kt)("em",{parentName:"li"},"injects"),") for the component\nrecursively traversing the dependencies graph in a postorder way and creates them first."),(0,r.kt)("li",{parentName:"ul"},"Bindings are by default singletons - if an instance was created once, it won't be recreated from scratch again. If\nit is needed for other bindings, ",(0,r.kt)("strong",{parentName:"li"},"Injector")," will take it from cache. You don't need to apply any additional\nannotations for it."),(0,r.kt)("li",{parentName:"ul"},"To provide the requested key, ",(0,r.kt)("strong",{parentName:"li"},"Injector")," recursively creates all of its dependencies and falls back to injector of its\nparent ",(0,r.kt)("em",{parentName:"li"},(0,r.kt)("a",{parentName:"em",href:"#scopes"},"scope"))," if binding in its scope is not found.")),(0,r.kt)("h2",{id:"scopes"},"Scopes"),(0,r.kt)("p",null,"In short - ",(0,r.kt)(l.Z,{text:"Scope",url:"/core-inject/src/main/java/io/activej/inject/Scope.java",mdxType:"Githublink"})," gives us \u201clocal singletons\u201d which live as long as the scope itself.\nActiveJ Inject scopes are a bit different from other DI libraries:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The internal structure of the ",(0,r.kt)("strong",{parentName:"li"},"Injector")," is a ",(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Trie"},"prefix tree")," and the prefix is a scope."),(0,r.kt)("li",{parentName:"ul"},"The identifiers (or prefixes) of the tree are simple annotations."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Injector")," can ",(0,r.kt)("strong",{parentName:"li"},"enter the scope"),". This means you create an ",(0,r.kt)("inlineCode",{parentName:"li"},"Injector")," and its scope will be set to the one that it's entering."),(0,r.kt)("li",{parentName:"ul"},"This can be done multiple times, so you can have ",(0,r.kt)("strong",{parentName:"li"},"N")," injectors in certain scope.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public class Injector {\n ...\n    final Trie<Scope, ScopeLocalData> scopeDataTree;\n ...\n\n    public Injector enterScope(Scope scope) {\n        return new Injector(this, scopeDataTree.get(scope));\n    }\n ...\n}\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/inject/examples#bind-using-modulebuilder"},"This example")," can show you how scopes works."),(0,r.kt)("h2",{id:"modules"},"Modules"),(0,r.kt)("p",null,"Dependency graph is hard to create directly, so we provide automatic graph transformation, generation and validation\nmechanisms with a simple yet powerful DSL."),(0,r.kt)("p",null,"All of these preprocessing steps are performed in start-up time by compiling ",(0,r.kt)(l.Z,{text:"Modules",url:"/core-inject/src/main/java/io/activej/inject/module/Module.java",mdxType:"Githublink"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Each module exports bindings which are combined with each other. If there are two or more bindings for any single key,\nthey are reduced into one binding with user-provided ",(0,r.kt)(l.Z,{text:"Multibinder",url:"/core-inject/src/main/java/io/activej/inject/binding/Multibinder.java",mdxType:"Githublink"})," reduce function:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"This simple solution makes it trivial to ",(0,r.kt)("a",{parentName:"li",href:"/inject/advanced#di-multibinder"},"implement multibinder")," sets/maps or any app-specific multibinder"),(0,r.kt)("li",{parentName:"ul"},"If no ",(0,r.kt)("strong",{parentName:"li"},"Multibinder")," is defined for particular key, exception is thrown"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If dependency graph has missing dependencies, they are automatically generated with ",(0,r.kt)(l.Z,{text:"BindingGenerator",url:"/core-inject/src/main/java/io/activej/inject/binding/BindingGenerator.java",mdxType:"Githublink"})),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"BindingGenerator"),"s are user-defined and exported by Modules"),(0,r.kt)("li",{parentName:"ul"},"There is an implicit ",(0,r.kt)(l.Z,{text:"DefaultModule",url:"/core-inject/src/main/java/io/activej/inject/module/DefaultModule.java",mdxType:"Githublink"})," with default ",(0,r.kt)("strong",{parentName:"li"},"BindingGenerator"),", which automatically provides required dependencies by scanning ",(0,r.kt)(l.Z,{text:"Inject",url:"/core-inject/src/main/java/io/activej/inject/annotation/Inject.java",mdxType:"Githublink"})," annotations of required classes"),(0,r.kt)("li",{parentName:"ul"},"User-specified modules can also export custom binding generators for special classes"),(0,r.kt)("li",{parentName:"ul"},"You can opt-out of using ",(0,r.kt)("strong",{parentName:"li"},"DefaultModule")," and its default ",(0,r.kt)("strong",{parentName:"li"},"BindingGenerators")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"All bindings are transformed with user-provided ",(0,r.kt)(l.Z,{text:"BindingTransformers",url:"/core-inject/src/main/java/io/activej/inject/binding/BindingTransformer.java",mdxType:"Githublink"})),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"To intercept/modify/wrap provided instances"),(0,r.kt)("li",{parentName:"ul"},"To intercept/modify/wrap the dependencies of provided instances"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Multibinder"),"s, ",(0,r.kt)("strong",{parentName:"p"},"BindingGenerator"),"s and ",(0,r.kt)("strong",{parentName:"p"},"BindingTransformer"),"s can be made with clean and extremely simple Java8+ functional DSL")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Resulting dependency graph is validated - checked for cyclic and missing dependencies, then compiled into a final scope tree and passed to ",(0,r.kt)("strong",{parentName:"p"},"Injector")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public interface Module {\n    Trie<Scope, Map<Key<?>, Set<Binding<?>>>> getBindings();\n    Map<Integer, Set<BindingTransformer<?>>> getBindingTransformers();\n    Map<Class<?>, Set<BindingGenerator<?>>> getBindingGenerators();\n    Map<Key<?>, Multibinder<?>> getMultibinders();\n}\n")),(0,r.kt)("p",null,"It\u2019s trivial to manually implement the Module interface, but it\u2019s even easier to extend"),(0,r.kt)(l.Z,{text:"AbstractModule",url:"/core-inject/src/main/java/io/activej/inject/module/AbstractModule.java",mdxType:"Githublink"}),", which supports ",(0,r.kt)(l.Z,{text:"@Provides",url:"/core-inject/src/main/java/io/activej/inject/annotation/Provides.java",mdxType:"Githublink"})," method scanning and the DSL for creating/transforming/generating bindings.")}m.isMDXComponent=!0},11748:function(e,t,n){var i={"./locale":89234,"./locale.js":89234};function a(e){var t=r(e);return n(t)}function r(e){if(!n.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}a.keys=function(){return Object.keys(i)},a.resolve=r,e.exports=a,a.id=11748}}]);