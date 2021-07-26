(self.webpackChunkactivejdocs=self.webpackChunkactivejdocs||[]).push([[2562],{77618:function(e,n,t){"use strict";var a=t(67294),i=t(39962);n.Z=function(e){var n=e.url,t=e.text,r=e.isInline,o=void 0===r||r,l=e.children,c=(0,i.Z)().siteConfig;return a.createElement("a",{style:o?{}:{display:"block",marginBottom:"16px"},href:c.customFields.githubUrl+"/"+c.customFields.githubBranch+n,target:"_blank"},t||l)}},14304:function(e,n,t){"use strict";var a=t(67294),i=t(21140),r=t.n(i);r().initialize({startOnLoad:!0});n.Z=function(e){var n=e.chart;return(0,a.useEffect)((function(){r().contentLoaded()}),[]),a.createElement("div",{className:"mermaid"},n)}},9871:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return u},default:function(){return g}});var a=t(22122),i=t(19756),r=(t(67294),t(3905)),o=t(77618),l=t(14304),c=["components"],s={title:"ActiveJ Inject Advanced | Lightning-fast and ultimately powerful Dependency Injection Java library",description:"Extremely lightweight DI with powerful tools - support of nested scopes, singletons and transient bindings, modules, multi-threaded and single-threaded injectors",sidebar_label:"Advanced",keywords:["di","dependency injection","guice alternative","spring di","spring alternative","di benchmarks","java","java di","java dependency injection","java framework"]},p="Advanced",d={unversionedId:"inject/advanced",id:"inject/advanced",isDocsHomePage:!1,title:"ActiveJ Inject Advanced | Lightning-fast and ultimately powerful Dependency Injection Java library",description:"Extremely lightweight DI with powerful tools - support of nested scopes, singletons and transient bindings, modules, multi-threaded and single-threaded injectors",source:"@site/docs/inject/advanced.mdx",sourceDirName:"inject",slug:"/inject/advanced",permalink:"/inject/advanced",version:"current",frontMatter:{title:"ActiveJ Inject Advanced | Lightning-fast and ultimately powerful Dependency Injection Java library",description:"Extremely lightweight DI with powerful tools - support of nested scopes, singletons and transient bindings, modules, multi-threaded and single-threaded injectors",sidebar_label:"Advanced",keywords:["di","dependency injection","guice alternative","spring di","spring alternative","di benchmarks","java","java di","java dependency injection","java framework"]},sidebar:"docs",previous:{title:"Basic",permalink:"/inject/basic"},next:{title:"Benchmarks",permalink:"/inject/benchmarks"}},u=[{value:"DI Multibinder",id:"di-multibinder",children:[]},{value:"Instance Injector",id:"instance-injector",children:[]},{value:"Binding Generators",id:"binding-generators",children:[]},{value:"Transient Bindings",id:"transient-bindings",children:[]},{value:"ActiveJ Specializer optimization",id:"activej-specializer-optimization",children:[]},{value:"Instance Provider",id:"instance-provider",children:[]},{value:"Inspecting created dependency graph",id:"inspecting-created-dependency-graph",children:[]},{value:"Optional Generator Module",id:"optional-generator-module",children:[]}],m={toc:u};function g(e){var n=e.components,t=(0,i.Z)(e,c);return(0,r.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"advanced"},"Advanced"),(0,r.kt)("p",null,"In the ",(0,r.kt)("a",{parentName:"p",href:"/inject/basic"},"previous part")," we explored some common principles of Dependency Injection concepts and\nActiveJ Inject features. In this part, we will proceed with more advanced and complex ActiveJ Inject use cases."),(0,r.kt)("p",null,"You can find full example sources on ",(0,r.kt)(o.Z,{text:"GitHub",url:"/examples/core/inject-2",mdxType:"Githublink"})),(0,r.kt)("h2",{id:"di-multibinder"},"DI Multibinder"),(0,r.kt)(o.Z,{text:"Multibinder",url:"/core-inject/src/main/java/io/activej/inject/binding/Multibinder.java",mdxType:"Githublink"})," resolves binding conflicts if there are two or more bindings for a single key. In the following example, we will create an HTTP Server which consists of two ",(0,r.kt)(o.Z,{text:"AbstractModule",url:"/core-inject/src/main/java/io/activej/inject/module/AbstractModule.java",mdxType:"Githublink"}),"s. Both modules include 2 conflicting keys. In the example we'll use different ways to provide multibinding.",(0,r.kt)("p",null,"In the first servlet ",(0,r.kt)("inlineCode",{parentName:"p"},"AbstractModule"),", we provide multibind for the map of ",(0,r.kt)("inlineCode",{parentName:"p"},"String")," and ",(0,r.kt)(o.Z,{text:"AsyncServlet",url:"/core-http/src/main/java/io/activej/http/AsyncServlet.java",mdxType:"Githublink"})," by overriding ",(0,r.kt)("inlineCode",{parentName:"p"},"configure()")," method. We use the ",(0,r.kt)("inlineCode",{parentName:"p"},"multibindToMap")," method which returns a binding of the map for the provided\nconflicting binding maps:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/core/inject-2/src/main/java/MultibinderExample.java tag=REGION_1",url:"/examples/core/inject-2/src/main/java/MultibinderExample.java",tag:"REGION_1"},'static class ServletMapsModule extends AbstractModule {\n  @Override\n  protected void configure() {\n    multibindToMap(String.class, AsyncServlet.class);\n  }\n\n  @Provides\n  public Map<String, AsyncServlet> firstPage() {\n    return singletonMap("/first",\n        request -> HttpResponse.ok200().withPlainText("Hello from first page!"));\n  }\n\n  @Provides\n  public Map<String, AsyncServlet> lastPage() {\n    return singletonMap("/last",\n        request -> HttpResponse.ok200().withPlainText("Hello from last page!"));\n  }\n\n  @ProvidesIntoSet\n  AsyncServlet primary(Map<String, AsyncServlet> initializers) {\n    RoutingServlet routingServlet = RoutingServlet.create();\n    initializers.forEach(routingServlet::map);\n    return routingServlet;\n  }\n}\n')),(0,r.kt)("p",null,"Note, that ",(0,r.kt)("em",{parentName:"p"},"primary")," servlet is marked with ",(0,r.kt)(o.Z,{text:"@ProvidesIntoSet",url:"/core-inject/src/main/java/io/activej/inject/annotation/ProvidesIntoSet.java",mdxType:"Githublink"})," annotation. We will use this later."),(0,r.kt)("p",null,"In the second servlet module we'll automatically set up multibinding with a built-in ",(0,r.kt)("inlineCode",{parentName:"p"},"@ProvidesIntoSet")," annotation. This annotation provides results as a singleton set, which is then provided to our ",(0,r.kt)("em",{parentName:"p"},"primary")," ",(0,r.kt)("strong",{parentName:"p"},"AsyncServlet"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/core/inject-2/src/main/java/MultibinderExample.java tag=REGION_2",url:"/examples/core/inject-2/src/main/java/MultibinderExample.java",tag:"REGION_2"},'static class ServletInitializersModule extends AbstractModule {\n  @ProvidesIntoSet\n  public Consumer<RoutingServlet> firstPage() {\n    return routingServlet ->\n        routingServlet.map("/first",\n            request -> HttpResponse.ok200().withPlainText("Hello from first page!"));\n  }\n\n  @ProvidesIntoSet\n  public Consumer<RoutingServlet> lastPage() {\n    return routingServlet ->\n        routingServlet.map("/last",\n            request -> HttpResponse.ok200().withPlainText("Hello from last page!"));\n  }\n\n  @ProvidesIntoSet\n  AsyncServlet primary(Set<Consumer<RoutingServlet>> initializers) {\n    RoutingServlet routingServlet = RoutingServlet.create();\n    initializers.forEach(initializer -> initializer.accept(routingServlet));\n    return routingServlet;\n  }\n}\n')),(0,r.kt)("p",null,"Finally, we can pull all the modules together. Remember we marked the ",(0,r.kt)("em",{parentName:"p"},"primary")," servlets with ",(0,r.kt)("inlineCode",{parentName:"p"},"@ProvidesIntoSet"),"\nannotation? Now we can simply combine and then compile them using ",(0,r.kt)(o.Z,{text:"Injector",url:"/core-inject/src/main/java/io/activej/inject/Injector.java",mdxType:"Githublink"}),".of()"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/core/inject-2/src/main/java/MultibinderExample.java tag=REGION_4",url:"/examples/core/inject-2/src/main/java/MultibinderExample.java",tag:"REGION_4"},"public static void main(String[] args) {\n  Injector injector = Injector.of(new ServletMapsModule(), new ServletInitializersModule());\n\n  String s = injector.getInstance(new Key<Set<AsyncServlet>>() {}).toString();\n  System.out.println(s);\n}\n")),(0,r.kt)("p",null,"You can find example sources on ",(0,r.kt)(o.Z,{text:"GitHub",url:"/examples/core/inject-2/src/main/java/MultibinderExample.java",mdxType:"Githublink"})),(0,r.kt)("h2",{id:"instance-injector"},"Instance Injector"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)(o.Z,{text:"InstanceInjector",url:"/core-inject/src/main/java/io/activej/inject/InstanceInjector.java",mdxType:"Githublink"}))," can inject instances into ",(0,r.kt)("inlineCode",{parentName:"p"},"@Inject")," fields and methods of some already existing objects.\nConsider this simple example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/core/inject-2/src/main/java/InstanceInjectorExample.java tag=REGION_1",url:"/examples/core/inject-2/src/main/java/InstanceInjectorExample.java",tag:"REGION_1"},'@Inject\nString message;\n\n@Provides\nString message() {\n  return "Hello, world!";\n}\n\n@Override\nprotected void run() {\n  System.out.println(message);\n}\n\npublic static void main(String[] args) throws Exception {\n  Launcher launcher = new InstanceInjectorExample();\n  launcher.launch(args);\n}\n')),(0,r.kt)("p",null,"The question that might bother you - how does the ",(0,r.kt)(o.Z,{text:"Launcher",url:"/launcher/src/main/java/io/activej/launcher/Launcher.java",mdxType:"Githublink"})," actually know that the message variable contains ",(0,r.kt)("inlineCode",{parentName:"p"},'"Hello, world!"')," string, to display it in the ",(0,r.kt)("inlineCode",{parentName:"p"},"run()")," method?"),(0,r.kt)("p",null,"Here during the internal work of DI, the ",(0,r.kt)("strong",{parentName:"p"},"InstanceInjector")," in fact gives launcher a hand:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/core/inject-2/src/main/java/InstanceInjectorExample.java tag=REGION_2",url:"/examples/core/inject-2/src/main/java/InstanceInjectorExample.java",tag:"REGION_2"},"private void postInjectInstances(String[] args) {\n  Injector injector = this.createInjector(args);\n  InstanceInjector<Launcher> instanceInjector = injector.getInstanceInjector(Launcher.class);\n  instanceInjector.injectInto(this);\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"createInjector")," produces ",(0,r.kt)("em",{parentName:"li"},"injector")," with the given arguments."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"instanceInjector")," gets all the required data from the ",(0,r.kt)("em",{parentName:"li"},"injector"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"injectInto")," injects the data into our empty instances.")),(0,r.kt)("p",null,"You can find example sources on ",(0,r.kt)(o.Z,{text:"GitHub",url:"/examples/core/inject-2/src/main/java/InstanceInjectorExample.java",mdxType:"Githublink"})),(0,r.kt)("h2",{id:"binding-generators"},"Binding Generators"),(0,r.kt)("p",null,"Let's consider Cookies example form the ",(0,r.kt)("a",{parentName:"p",href:"/inject/examples"},"previous part"),". This time we have the same POJO ingredients, but now our cookie is a generic ",(0,r.kt)("strong",{parentName:"p"},"Cookie","<","T>")," and has a field ",(0,r.kt)("strong",{parentName:"p"},"Optional","<","T> pastry"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/core/inject-2/src/main/java/BindingGeneratorExample.java tag=REGION_1",url:"/examples/core/inject-2/src/main/java/BindingGeneratorExample.java",tag:"REGION_1"},"static class Cookie<T> {\n  private final Optional<T> pastry;\n\n  @Inject\n  Cookie(Optional<T> pastry) {\n    this.pastry = pastry;\n  }\n\n  public Optional<T> getPastry() {\n    return pastry;\n  }\n}\n")),(0,r.kt)("p",null,"Next, we create an ",(0,r.kt)("strong",{parentName:"p"},"AbstractModule")," ",(0,r.kt)("em",{parentName:"p"},"cookbook")," and override its ",(0,r.kt)("inlineCode",{parentName:"p"},"configure()")," method:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/core/inject-2/src/main/java/BindingGeneratorExample.java tag=REGION_2",url:"/examples/core/inject-2/src/main/java/BindingGeneratorExample.java",tag:"REGION_2"},"AbstractModule cookbook = new AbstractModule() {\n  @Override\n  protected void configure() {\n    // note (1)\n    generate(Optional.class, (bindings, scope, key) -> {\n      Binding<Object> binding = bindings.get(key.getTypeParameter(0));\n      return binding != null ?\n          binding.mapInstance(Optional::of) :\n          Binding.toInstance(Optional.empty());\n    });\n\n    bind(new Key<Cookie<Pastry>>() {});\n  }\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"generate()")," adds a ",(0,r.kt)(o.Z,{text:"BindingGenerator",url:"/core-inject/src/main/java/io/activej/inject/binding/BindingGenerator.java",mdxType:"Githublink"}),"\nfor a given class to this module, in this case it is an ",(0,r.kt)("strong",{parentName:"p"},"Optional"),".\n",(0,r.kt)("strong",{parentName:"p"},"BindingGenerator")," tries to generate a missing dependency binding when ",(0,r.kt)("strong",{parentName:"p"},"Injector")," compiles the final binding graph\ntrie.\nYou can substitute ",(0,r.kt)("inlineCode",{parentName:"p"},"generate()")," with the following code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"@Provides\n<T> Optional<T> pastry(@io.activej.di.annotation.Optional T instance) {\n    return Optional.ofNullable(instance);\n")),(0,r.kt)("p",null,"Now you can create ",(0,r.kt)("em",{parentName:"p"},"cookbook")," ",(0,r.kt)("em",{parentName:"p"},"injector")," and get an instance of ",(0,r.kt)("strong",{parentName:"p"},"Cookie","<","Pastry>"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/core/inject-2/src/main/java/BindingGeneratorExample.java tag=REGION_3",url:"/examples/core/inject-2/src/main/java/BindingGeneratorExample.java",tag:"REGION_3"},"Injector injector = Injector.of(cookbook);\nSystem.out.println(injector.getInstance(new Key<Cookie<Pastry>>() {}).getPastry().orElseThrow(AssertionError::new).getButter().getName());\n")),(0,r.kt)("p",null,"You can find example sources on ",(0,r.kt)(o.Z,{text:"GitHub",url:"/examples/core/inject-2/src/main/java/BindingGeneratorExample.java",mdxType:"Githublink"})),(0,r.kt)("h2",{id:"transient-bindings"},"Transient Bindings"),(0,r.kt)("p",null,"In case you need a non-singleton object so that each binding receives its own instance, you should use ",(0,r.kt)("strong",{parentName:"p"},"Transient\nBindings"),". Simply add a ",(0,r.kt)(o.Z,{text:"@Transient",url:"/core-inject/src/main/java/io/activej/inject/annotation/Transient.java",mdxType:"Githublink"})," annotation:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/core/inject-2/src/main/java/TransientBindingExample.java tag=REGION_1",url:"/examples/core/inject-2/src/main/java/TransientBindingExample.java",tag:"REGION_1"},"AbstractModule cookbook = new AbstractModule() {\n  @Provides\n  @Transient\n  Integer giveMe() {\n    return random.nextInt(1000);\n  }\n};\n")),(0,r.kt)("p",null,"After creating an ",(0,r.kt)("strong",{parentName:"p"},"Injector")," of the ",(0,r.kt)("em",{parentName:"p"},"cookbook"),", each time you use ",(0,r.kt)("inlineCode",{parentName:"p"},"injector.getInstance"),", you'll get a new\nnon-singleton ",(0,r.kt)("strong",{parentName:"p"},"Integer")," instance:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/core/inject-2/src/main/java/TransientBindingExample.java tag=REGION_2",url:"/examples/core/inject-2/src/main/java/TransientBindingExample.java",tag:"REGION_2"},'Injector injector = Injector.of(cookbook);\nInteger someInt = injector.getInstance(Integer.class);\nInteger otherInt = injector.getInstance(Integer.class);\nSystem.out.println("First : " + someInt + ", second  : " + otherInt);\n')),(0,r.kt)("p",null,"The output will illustrate that the created instances are different and will look something like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"First : 699, second one : 130\n")),(0,r.kt)("p",null,"You can find example sources on ",(0,r.kt)(o.Z,{text:"GitHub",url:"/examples/core/inject-2/src/main/java/TransientBindingExample.java",mdxType:"Githublink"})),(0,r.kt)("h2",{id:"activej-specializer-optimization"},"ActiveJ Specializer optimization"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/specializer"},(0,r.kt)("strong",{parentName:"a"},"ActiveJ Specializer"))," is a library that optimizes code for JVM. You can simply combine\nit with ActiveJ Inject and speed up your code by ",(0,r.kt)(o.Z,{text:"up to 30%",url:"/benchmarks/inject/src/main/java/io/activej/inject/ActiveJDirectScopebindBenchmark.java",mdxType:"Githublink"}),"\nIn order to set up ActiveJ Specializer, simply use ",(0,r.kt)("inlineCode",{parentName:"p"},"Injector.useSpecializer()")," before ",(0,r.kt)("strong",{parentName:"p"},"Injector"),"\ninstantiation.\nActiveJ Inject compiles bindings in runtime into a highly efficient representation. In conjunction with ActiveJ Specializer\nthe bindings can be turned into bytecode that will be as efficient as a manually written code. In this way you get\nthe best performance in real-life projects without maintaining hard to support manual code."),(0,r.kt)("h2",{id:"instance-provider"},"Instance Provider"),(0,r.kt)(o.Z,{text:"InstanceProvider",url:"/core-inject/src/main/java/io/activej/inject/InstanceProvider.java",mdxType:"Githublink"})," is a version of `Injector.getInstance()` with a baked-in key. It can be fluently requested by provider methods.",(0,r.kt)("p",null,"In the ",(0,r.kt)("strong",{parentName:"p"},"AbstractModule")," we explicitly add ",(0,r.kt)("strong",{parentName:"p"},"InstanceProvider")," binding for ",(0,r.kt)("strong",{parentName:"p"},"Integer")," using ",(0,r.kt)("inlineCode",{parentName:"p"},"bindInstanceProvider")," helper method and provide ",(0,r.kt)("strong",{parentName:"p"},"Integer")," factory function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/core/inject-2/src/main/java/InstanceProviderExample.java tag=REGION_1",url:"/examples/core/inject-2/src/main/java/InstanceProviderExample.java",tag:"REGION_1"},"AbstractModule cookbook = new AbstractModule() {\n  @Override\n  protected void configure() {\n    bindInstanceProvider(Integer.class);\n  }\n\n  @Provides\n  Integer giveMe() {\n    return random.nextInt(1000);\n  }\n};\n")),(0,r.kt)("p",null,"After creating an ",(0,r.kt)("strong",{parentName:"p"},"Injector")," of the ",(0,r.kt)("em",{parentName:"p"},"cookbook"),", we get instance of the ",(0,r.kt)("strong",{parentName:"p"},"Key","<","InstanceProvider","<","Integer",">",">"),".\nNow simply use ",(0,r.kt)("inlineCode",{parentName:"p"},"provider.get()")," to get a lazy ",(0,r.kt)("strong",{parentName:"p"},"Integer")," instance."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/core/inject-2/src/main/java/InstanceProviderExample.java tag=REGION_2",url:"/examples/core/inject-2/src/main/java/InstanceProviderExample.java",tag:"REGION_2"},"Injector injector = Injector.of(cookbook);\nInstanceProvider<Integer> provider = injector.getInstance(new Key<InstanceProvider<Integer>>() {});\n// lazy value get.\nInteger someInt = provider.get();\nSystem.out.println(someInt);\n")),(0,r.kt)("p",null,"Unlike the previous example, If you call ",(0,r.kt)("inlineCode",{parentName:"p"},"provide.get()")," several times, you'll receive the same value."),(0,r.kt)("p",null,"You can find example sources on ",(0,r.kt)(o.Z,{text:"GitHub",url:"/examples/core/inject-2/src/main/java/InstanceProviderExample.java",mdxType:"Githublink"})),(0,r.kt)("h2",{id:"inspecting-created-dependency-graph"},"Inspecting created dependency graph"),(0,r.kt)("p",null,"ActiveJ Inject provides efficient DSL for inspecting created instances, scopes and dependency graph visualization.\nIn this Cookie example we, as usual, create ",(0,r.kt)("strong",{parentName:"p"},"Sugar"),", ",(0,r.kt)("strong",{parentName:"p"},"Butter"),", ",(0,r.kt)("strong",{parentName:"p"},"Flour"),", ",(0,r.kt)("strong",{parentName:"p"},"Pastry")," and ",(0,r.kt)("strong",{parentName:"p"},"Cookie")," POJOs, ",(0,r.kt)("em",{parentName:"p"},"cookbook"),"\n",(0,r.kt)("strong",{parentName:"p"},"AbstractModule")," with two scopes (parent scope for ",(0,r.kt)("strong",{parentName:"p"},"Cookie")," and ",(0,r.kt)(o.Z,{text:"@OrderScope",url:"/examples/core/inject-2/src/main/java/OrderScope.java",mdxType:"Githublink"}),"\nfor ingredients) and cookbook ",(0,r.kt)("em",{parentName:"p"},"injector"),"."),(0,r.kt)("p",null,"First, let's overview three ",(0,r.kt)("strong",{parentName:"p"},"Injector")," methods: ",(0,r.kt)("inlineCode",{parentName:"p"},"peekInstance"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"hasInstance")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"getInstance"),". They allow to inspect\ncreated instances:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/core/inject-2/src/main/java/DiDependencyGraphExplore.java tag=REGION_1",url:"/examples/core/inject-2/src/main/java/DiDependencyGraphExplore.java",tag:"REGION_1"},'Cookie cookie1 = injector.peekInstance(Cookie.class);\nSystem.out.println("Instance is present in injector before \'get\' : " + injector.hasInstance(Cookie.class));\nSystem.out.println("Instance before get : " + cookie1);\n\nCookie cookie = injector.getInstance(Cookie.class);\n\nCookie cookie2 = injector.peekInstance(Cookie.class);\nSystem.out.println("Instance is present in injector after \'get\' : " + injector.hasInstance(Cookie.class));\nSystem.out.println("Instance after get : " + cookie2);\nSystem.out.println();    /// created instance check.\nSystem.out.println("Instances are same : " + cookie.equals(cookie2));\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"peekInstance")," - returns an instance ",(0,r.kt)("strong",{parentName:"li"},"only")," if it was already created by ",(0,r.kt)("inlineCode",{parentName:"li"},"getInstance")," call before"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"hasInstance")," - checks if an instance of the provided ",(0,r.kt)("em",{parentName:"li"},"key")," was created by ",(0,r.kt)("inlineCode",{parentName:"li"},"getInstance")," call before"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"getInstance")," - returns an instance of the provided ",(0,r.kt)("em",{parentName:"li"},"key"))),(0,r.kt)("p",null,"Next, we'll explore tools for scopes inspecting:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/core/inject-2/src/main/java/DiDependencyGraphExplore.java tag=REGION_2",url:"/examples/core/inject-2/src/main/java/DiDependencyGraphExplore.java",tag:"REGION_2"},'final Scope ORDER_SCOPE = Scope.of(OrderScope.class);\n\nSystem.out.println("Parent injector, before entering scope : " + injector);\n\nInjector subInjector = injector.enterScope(ORDER_SCOPE);\nSystem.out.println("Parent injector, after entering scope : " + subInjector.getParent());\nSystem.out.println("Parent injector is \'injector\' : " + injector.equals(subInjector.getParent()));\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/core/inject-2/src/main/java/DiDependencyGraphExplore.java tag=REGION_3",url:"/examples/core/inject-2/src/main/java/DiDependencyGraphExplore.java",tag:"REGION_3"},'System.out.println("Pastry binding check : " + subInjector.getBinding(Pastry.class));\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"getParent")," - returns parent scope of the current scope"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"getBinding")," - returns dependencies of provided binding"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"getBindings")," - returns dependencies of the provided scope (including ",(0,r.kt)("strong",{parentName:"li"},"Injector"),")")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/core/inject-2/src/main/java/DiDependencyGraphExplore.java tag=REGION_4",url:"/examples/core/inject-2/src/main/java/DiDependencyGraphExplore.java",tag:"REGION_4"},"Utils.printGraphVizGraph(subInjector.getBindingsTrie());\n")),(0,r.kt)("p",null,"You'll receive the following output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'digraph {\n    rankdir=BT;\n    "()->DiDependencyGraphExplore$Flour" [label="DiDependencyGraphExplore$Flour"];\n    "()->DiDependencyGraphExplore$Sugar" [label="DiDependencyGraphExplore$Sugar"];\n    "()->DiDependencyGraphExplore$Butter" [label="DiDependencyGraphExplore$Butter"];\n    "()->DiDependencyGraphExplore$Cookie" [label="DiDependencyGraphExplore$Cookie"];\n    "()->io.activej.di.core.Injector" [label="Injector"];\n    "()->DiDependencyGraphExplore$Pastry" [label="DiDependencyGraphExplore$Pastry"];\n\n    { rank=same; "()->DiDependencyGraphExplore$Flour" "()->DiDependencyGraphExplore$Sugar" "()->DiDependencyGraphExplore$Butter" "()->io.activej.di.core.Injector" }\n\n    "()->DiDependencyGraphExplore$Cookie" -> "()->DiDependencyGraphExplore$Pastry";\n    "()->DiDependencyGraphExplore$Pastry" -> "()->DiDependencyGraphExplore$Butter";\n    "()->DiDependencyGraphExplore$Pastry" -> "()->DiDependencyGraphExplore$Flour";\n    "()->DiDependencyGraphExplore$Pastry" -> "()->DiDependencyGraphExplore$Sugar";\n}\n')),(0,r.kt)("p",null,"Which can be transformed into the following graph:"),(0,r.kt)(l.Z,{chart:"\ngraph BT\n    DiDependencyGraphExplore$Cookie --\x3e id1(DiDependencyGraphExplore$Pastry)\n    id1 --\x3e DiDependencyGraphExplore$Flour\n    id1 --\x3e DiDependencyGraphExplore$Sugar\n    id1 --\x3e DiDependencyGraphExplore$Butter\n    Injector\n",mdxType:"Mermaid"}),(0,r.kt)("p",null,"You can find example sources on ",(0,r.kt)(o.Z,{text:"GitHub",url:"/examples/core/inject-2/src/main/java/DiDependencyGraphExplore.java",mdxType:"Githublink"})),(0,r.kt)("h2",{id:"optional-generator-module"},"Optional Generator Module"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)(o.Z,{text:"OptionalGeneratorModule",url:"/core-inject/src/main/java/io/activej/inject/module/OptionalGeneratorModule.java",mdxType:"Githublink"}))," works similarly to the previous generator module with the difference that ",(0,r.kt)("strong",{parentName:"p"},"OptionalGeneratorModule")," is responsible for creating ",(0,r.kt)("strong",{parentName:"p"},"Optional")," objects."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In the next example we will need an instance of ",(0,r.kt)("inlineCode",{parentName:"li"},"Optional<String>"),"."),(0,r.kt)("li",{parentName:"ul"},"The recipe for creation is placed inside the ",(0,r.kt)("em",{parentName:"li"},"module"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"install()")," establishes ",(0,r.kt)("strong",{parentName:"li"},"OptionalGeneratorModule")," for the further automatic creation of ",(0,r.kt)("strong",{parentName:"li"},"Optional")," object."),(0,r.kt)("li",{parentName:"ul"},"Then we just ",(0,r.kt)("em",{parentName:"li"},"bind")," the ",(0,r.kt)("em",{parentName:"li"},"String")," recipe and in the next line specify the binding to construct an instance\nfor key ",(0,r.kt)("inlineCode",{parentName:"li"},"Optional<String>"),"."),(0,r.kt)("li",{parentName:"ul"},"Eventually, we just create an injector of ",(0,r.kt)("inlineCode",{parentName:"li"},"module"),", ask it to get the instance of ",(0,r.kt)("inlineCode",{parentName:"li"},"Optional<String>"),"\nand receive ",(0,r.kt)("inlineCode",{parentName:"li"},'"Hello, World"'),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/core/inject-2/src/main/java/OptionalGeneratorModuleExample.java tag=REGION_1",url:"/examples/core/inject-2/src/main/java/OptionalGeneratorModuleExample.java",tag:"REGION_1"},'public class OptionalGeneratorModuleExample {\n  public static void main(String[] args) {\n    Injector injector = Injector.of(ModuleBuilder.create()\n        .install(OptionalGeneratorModule.create())\n        .bind(String.class).toInstance("Hello, World")\n        .bind(new Key<Optional<String>>() {})\n        .build());\n    Optional<String> instance = injector.getInstance(new Key<Optional<String>>() {});\n    System.out.println(instance);\n  }\n}\n')),(0,r.kt)("p",null,"You can find example sources on ",(0,r.kt)(o.Z,{text:"GitHub",url:"/examples/core/inject-2/src/main/java/OptionalGeneratorModuleExample.java",mdxType:"Githublink"})))}g.isMDXComponent=!0},11748:function(e,n,t){var a={"./locale":89234,"./locale.js":89234};function i(e){var n=r(e);return t(n)}function r(e){if(!t.o(a,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return a[e]}i.keys=function(){return Object.keys(a)},i.resolve=r,e.exports=i,i.id=11748}}]);