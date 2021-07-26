(self.webpackChunkactivejdocs=self.webpackChunkactivejdocs||[]).push([[9255],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=s(n),d=i,g=f["".concat(l,".").concat(d)]||f[d]||u[d]||a;return n?r.createElement(g,o(o({ref:t},p),{},{components:n})):r.createElement(g,o({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},77618:function(e,t,n){"use strict";var r=n(67294),i=n(39962);t.Z=function(e){var t=e.url,n=e.text,a=e.isInline,o=void 0===a||a,c=e.children,l=(0,i.Z)().siteConfig;return r.createElement("a",{style:o?{}:{display:"block",marginBottom:"16px"},href:l.customFields.githubUrl+"/"+l.customFields.githubBranch+t,target:"_blank"},n||c)}},65701:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return f},default:function(){return m}});var r,i=n(22122),a=n(19756),o=(n(67294),n(3905)),c=n(77618),l=["components"],s={title:"ActiveJ | Config, efficiently manage application configuration and property values",description:"Efficiently manage your application configurations and properties values with ActiveJ Config",sidebar_label:"Config",keywords:["configs","application configs","save configs","application configuration","java","java framework","java for beginners"]},p="Config",u={unversionedId:"boot/config",id:"boot/config",isDocsHomePage:!1,title:"ActiveJ | Config, efficiently manage application configuration and property values",description:"Efficiently manage your application configurations and properties values with ActiveJ Config",source:"@site/docs/boot/config.mdx",sourceDirName:"boot",slug:"/boot/config",permalink:"/boot/config",version:"current",frontMatter:{title:"ActiveJ | Config, efficiently manage application configuration and property values",description:"Efficiently manage your application configurations and properties values with ActiveJ Config",sidebar_label:"Config",keywords:["configs","application configs","save configs","application configuration","java","java framework","java for beginners"]},sidebar:"docs",previous:{title:"Workers",permalink:"/boot/workers"},next:{title:"Overview",permalink:"/http"}},f=[{value:"Overview",id:"overview",children:[]},{value:"Features",id:"features",children:[]},{value:"Example",id:"example",children:[]}],d=(r="Variable",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)}),g={toc:f};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,i.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"config"},"Config"),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Config")," is a useful extension for properties files. It can collect provided configuration from files, class path, system properties, etc.\nConfiguration can then be transformed, overwritten, logged in the runtime."),(0,o.kt)("h2",{id:"features"},"Features"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Using a set of standard data converters to/from a config"),(0,o.kt)("li",{parentName:"ul"},"Ability to specify default values for properties"),(0,o.kt)("li",{parentName:"ul"},"Ability to save all used properties into a file")),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"To run the examples, you need to clone ActiveJ from GitHub"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/activej/activej\n")),(0,o.kt)("p",{parentName:"div"},"And import it as a Maven project. Check out tag ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)(d,{name:"currentVersion",mdxType:"Variable"})),". Before running the examples, build the project.\nThese examples are located at ",(0,o.kt)("inlineCode",{parentName:"p"},"activej/examples/core/boot")))),(0,o.kt)("p",null,"An example of providing configs to your application with ",(0,o.kt)(c.Z,{url:"/boot-config/src/main/java/io/activej/config/Config.java",mdxType:"Githublink"},(0,o.kt)("inlineCode",{parentName:"p"},"Config"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/core/boot/src/main/java/ConfigModuleExample.java tag=EXAMPLE",url:"/examples/core/boot/src/main/java/ConfigModuleExample.java",tag:"EXAMPLE"},'public final class ConfigModuleExample {\n  private static final String PROPERTIES_FILE = "example.properties";\n\n  public static void main(String[] args) {\n    Injector injector = Injector.of(ModuleBuilder.create()\n        .bind(Config.class).to(() -> Config.ofClassPathProperties(PROPERTIES_FILE))\n        .bind(String.class).to(c -> c.get("phrase"), Config.class)\n        .bind(Integer.class).to(c -> c.get(ofInteger(), "number"), Config.class)\n        .bind(InetAddress.class).to(c -> c.get(ofInetAddress(), "address"), Config.class)\n        .build());\n\n    System.out.println(injector.getInstance(String.class));\n    System.out.println(injector.getInstance(Integer.class));\n    System.out.println(injector.getInstance(InetAddress.class));\n  }\n}\n')))}m.isMDXComponent=!0}}]);