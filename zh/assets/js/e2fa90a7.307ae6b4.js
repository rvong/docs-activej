"use strict";(self.webpackChunkactivejdocs=self.webpackChunkactivejdocs||[]).push([[2769],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return v}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),v=a,m=d["".concat(c,".").concat(v)]||d[v]||u[v]||i;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2735:function(e,t,n){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return a}})},79524:function(e,t,n){n.d(t,{C:function(){return i},Z:function(){return o}});var r=n(39962),a=n(2735);function i(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var i=void 0===r?{}:r,o=i.forcePrependBaseUrl,l=void 0!==o&&o,c=i.absolute,s=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(l)return t+n;var p=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+p:p}(i,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},51048:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(67294),a=n(30508);function i(){return(0,r.useContext)(a._)}},25406:function(e,t,n){var r=n(67294).createContext(void 0);t.Z=r},14087:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(87462),a=n(63366),i=n(67294),o=n(86010),l=n(51048),c=n(48002),s={themedImage:"themedImage_1VuW","themedImage--light":"themedImage--light_3UqQ","themedImage--dark":"themedImage--dark_hz6m"},p=["sources","className","alt"],u=function(e){var t=(0,l.Z)(),n=(0,c.Z)().isDarkTheme,u=e.sources,d=e.className,v=e.alt,m=void 0===v?"":v,f=(0,a.Z)(e,p),k=t?n?["dark"]:["light"]:["light","dark"];return i.createElement(i.Fragment,null,k.map((function(e){return i.createElement("img",(0,r.Z)({key:e,src:u[e],alt:m,className:(0,o.Z)(s.themedImage,s["themedImage--"+e],d)},f))})))}},48002:function(e,t,n){var r=n(67294),a=n(25406);t.Z=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useThemeContext" is used outside of "Layout" component. Please see https://docusaurus.io/docs/api/themes/configuration#usethemecontext.');return e}},77618:function(e,t,n){var r=n(67294),a=n(39962);t.Z=function(e){var t=e.url,n=e.text,i=e.isInline,o=void 0===i||i,l=e.children,c=(0,a.Z)().siteConfig,s=t.startsWith("/examples")?c.customFields.githubExamplesBranch:c.customFields.githubBranch;return r.createElement("a",{style:o?{}:{display:"block",marginBottom:"16px"},href:c.customFields.githubUrl+"/"+s+t,target:"_blank"},n||l)}},77815:function(e,t,n){n(67294);var r=n(39962);t.Z=function(e){var t=e.name,n=(0,r.Z)().siteConfig;if(!t)throw new Error("Variable name is required");if(void 0===n.customFields[t])throw new Error("Variable "+t+" not exist");return n.customFields[t]}},43874:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return d},metadata:function(){return v},toc:function(){return m},default:function(){return k}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=n(77815),l=n(77618),c=n(14087),s=n(79524),p=["components"],u={description:"ActiveJ FS | \u7528\u4e8e\u9ad8\u6548\u548c\u53ef\u6269\u5c55\u7684\u5206\u5e03\u5f0f\u5b58\u50a8\u7684Java\u5e93\uff0c\u5177\u6709\u6570\u636e\u5197\u4f59\u3001\u91cd\u65b0\u5e73\u8861\u548c\u91cd\u65b0\u5206\u7247\u7684\u529f\u80fd\u3002",sidebar_label:"\u5b9e\u4f8b",keywords:["\u50a8\u5b58","\u5206\u5e03\u5f0f\u5b58\u50a8","\u5197\u4f59","\u53db\u53d8","\u5185\u6838\u7a7a\u95f4","JAVA\u6846\u67b6","ftp\u534f\u8bae","\u4ec5\u9650\u9644\u5f55"]},d="\u793a\u4f8b\uff1a",v={unversionedId:"fs/examples",id:"fs/examples",isDocsHomePage:!1,title:"\u793a\u4f8b\uff1a",description:"ActiveJ FS | \u7528\u4e8e\u9ad8\u6548\u548c\u53ef\u6269\u5c55\u7684\u5206\u5e03\u5f0f\u5b58\u50a8\u7684Java\u5e93\uff0c\u5177\u6709\u6570\u636e\u5197\u4f59\u3001\u91cd\u65b0\u5e73\u8861\u548c\u91cd\u65b0\u5206\u7247\u7684\u529f\u80fd\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/fs/examples.mdx",sourceDirName:"fs",slug:"/fs/examples",permalink:"/zh/fs/examples",tags:[],version:"current",frontMatter:{description:"ActiveJ FS | \u7528\u4e8e\u9ad8\u6548\u548c\u53ef\u6269\u5c55\u7684\u5206\u5e03\u5f0f\u5b58\u50a8\u7684Java\u5e93\uff0c\u5177\u6709\u6570\u636e\u5197\u4f59\u3001\u91cd\u65b0\u5e73\u8861\u548c\u91cd\u65b0\u5206\u7247\u7684\u529f\u80fd\u3002",sidebar_label:"\u5b9e\u4f8b",keywords:["\u50a8\u5b58","\u5206\u5e03\u5f0f\u5b58\u50a8","\u5197\u4f59","\u53db\u53d8","\u5185\u6838\u7a7a\u95f4","JAVA\u6846\u67b6","ftp\u534f\u8bae","\u4ec5\u9650\u9644\u5f55"]},sidebar:"docs",previous:{title:"\u6982\u8ff0",permalink:"/zh/fs"},next:{title:"\u5b57\u8282\u6570",permalink:"/zh/misc/bytebuf"}},m=[{value:"\u670d\u52a1\u5668\u8bbe\u7f6e",id:"\u670d\u52a1\u5668\u8bbe\u7f6e",children:[]},{value:"\u6587\u4ef6\u4e0a\u4f20",id:"\u6587\u4ef6\u4e0a\u4f20",children:[]},{value:"\u6587\u4ef6\u4e0b\u8f7d",id:"\u6587\u4ef6\u4e0b\u8f7d",children:[]},{value:"ActiveFs\u88c5\u9970\u5668",id:"activefs\u88c5\u9970\u5668",children:[]},{value:"\u96c6\u7fa4\u6587\u4ef6\u5b58\u50a8",id:"\u96c6\u7fa4\u6587\u4ef6\u5b58\u50a8",children:[]}],f={toc:m};function k(e){var t=e.components,n=(0,a.Z)(e,p);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u793a\u4f8b"},"\u793a\u4f8b\uff1a"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u4e3a\u4e86\u5728IDE\u4e2d\u8fd0\u884c\u8fd9\u4e9b\u4f8b\u5b50\uff0c\u4f60\u9700\u8981\u514b\u9686ActiveJ\u9879\u76ee\u3002"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/activej/activej\n")),(0,i.kt)("p",{parentName:"div"},"\u5e76\u5c06\u5176\u4f5c\u4e3a\u4e00\u4e2aMaven\u9879\u76ee\u5bfc\u5165\u3002 \u67e5\u9605\u5206\u652f\u673a\u6784 ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)(o.Z,{name:"currentVersion",mdxType:"Variable"})),"\u3002 \u5728\u8fd0\u884c\u8fd9\u4e2a\u4f8b\u5b50\u4e4b\u524d\uff0c\u6784\u5efa\u9879\u76ee\uff08",(0,i.kt)("strong",{parentName:"p"},"Ctrl F9")," for IntelliJ IDEA\uff09\u3002"))),(0,i.kt)("h2",{id:"\u670d\u52a1\u5668\u8bbe\u7f6e"},"\u670d\u52a1\u5668\u8bbe\u7f6e"),(0,i.kt)("p",null,"\u8ba9\u6211\u4eec\u4ed4\u7ec6\u770b\u770b ",(0,i.kt)("strong",{parentName:"p"},"\u670d\u52a1\u5668\u8bbe\u7f6e\u5b9e\u4f8b"),"\u3002 \u4e3a\u4e86\u4f7f\u8bbe\u7f6e\u548c\u542f\u52a8\u5c3d\u53ef\u80fd\u7b80\u5355\uff0c\u6709\u4e00\u4e2a\u7279\u6b8a\u7684 ",(0,i.kt)(l.Z,{url:"/launchers/fs/src/main/java/io/activej/launchers/fs/SimpleTcpServerLauncher.java",mdxType:"Githublink"},'"SimpleTcpServerLauncher"\u3002'),"\uff0c\u4e00\u4e2a ",(0,i.kt)("a",{parentName:"p",href:"/zh/boot/launcher"},"ActiveJ ",(0,i.kt)("inlineCode",{parentName:"a"},"Launcher"))," \u5b9e\u73b0\uff08\u62bd\u8c61\u5730\u5b9e\u73b0\u4e86 ",(0,i.kt)("em",{parentName:"p"},"\u7684\u4e3b\u8981")," \u65b9\u6cd5\uff09\u3002 \u5b83\u5141\u8bb8\u7b80\u5355\u5730\u8bbe\u7f6e\u5e94\u7528\u7a0b\u5e8f\uff0c\u6240\u4ee5\u4f60\u8bbe\u7f6eFS\u670d\u52a1\u5668\u6240\u9700\u8981\u7684\u53ea\u662f\u8986\u76d6\u51e0\u4e2aLauncher\u65b9\u6cd5\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"onInit")," - \u5728\u5e94\u7528\u7a0b\u5e8f\u542f\u52a8\u524d\u8fd0\u884c\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"getOverrideModule")," - \u8986\u76d6Launcher\u7684\u9ed8\u8ba4\u5185\u90e8\u6a21\u5757\u5b9a\u4e49\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"run")," - \u542f\u52a8\u5668\u7684\u4e3b\u8981\u65b9\u6cd5\uff0c\u4ee3\u8868\u4e1a\u52a1\u903b\u8f91")),(0,i.kt)("p",null,"\u7136\u540e ",(0,i.kt)("em",{parentName:"p"},"\u542f\u52a8"),"\u3002 ",(0,i.kt)(l.Z,{url:"/launcher/src/main/java/io/activej/launcher/Launcher.java",mdxType:"Githublink"},'\u542f\u52a8\u5668"\u3002')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/cloud/fs/src/main/java/ServerSetupExample.java tag=EXAMPLE",url:"/examples/cloud/fs/src/main/java/ServerSetupExample.java",tag:"EXAMPLE"},'public class ServerSetupExample extends SimpleTcpServerLauncher {\n  private Path storage;\n\n  @Override\n  protected void onInit(Injector injector) throws Exception {\n    storage = Files.createTempDirectory("server_storage");\n  }\n\n  @Override\n  protected Config createConfig() {\n    return super.createConfig()\n        .with("activefs.path", storage.toString())\n        .with("activefs.listenAddresses", "6732");\n  }\n\n  @Override\n  protected void run() throws Exception {\n    awaitShutdown();\n  }\n\n  public static void main(String[] args) throws Exception {\n    Launcher launcher = new ServerSetupExample();\n    launcher.launch(args);\n  }\n}\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)(l.Z,{url:"/examples/cloud/fs/src/main/java/ServerSetupExample.java",mdxType:"Githublink"},"\u5728GitHub\u4e0a\u770b\u5230\u5b8c\u6574\u7684\u4f8b\u5b50"))),(0,i.kt)("h2",{id:"\u6587\u4ef6\u4e0a\u4f20"},"\u6587\u4ef6\u4e0a\u4f20"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"#"},(0,i.kt)(l.Z,{url:"/examples/cloud/fs/src/main/java/FileUploadExample.java",mdxType:"Githublink"},(0,i.kt)("inlineCode",{parentName:"a"},"FileUploadExample"))),"  \u4e5f\u6269\u5c55\u4e86 ",(0,i.kt)("inlineCode",{parentName:"p"},"Launcher")," \uff0c\u56e0\u6b64\u5b9e\u73b0\u4e86\u4e0a\u8ff0\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"Launcher")," \u65b9\u6cd5\u3002\n\u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c\u6211\u4eec\u5c06\u4f7f\u7528\u4e00\u4e2a ",(0,i.kt)(l.Z,{text:"ActiveFs",url:"/cloud-fs/src/main/java/io/activej/fs/ActiveFs.java",mdxType:"Githublink"})," \u5b9e\u4f8b\uff0c\u5b83\u4f9d\u8d56\u4e8e\u5f02\u6b65 ",(0,i.kt)("a",{parentName:"p",href:"/zh/async-io/eventloop"},"ActiveJ ",(0,i.kt)("strong",{parentName:"a"},"Eventloop"))," \u4e3a\u4e86\u7b80\u5316\u4f9d\u8d56\u5173\u7cfb\u7684\u5de5\u4f5c\uff0c\u6211\u4eec\u5c06\u4f7f\u7528 ",(0,i.kt)("a",{parentName:"p",href:"/zh/inject"},"ActiveJ Inject")," DI\u5e93\u3002 \u5b83\u901f\u5ea6\u5feb\uff0c\u6548\u7387\u9ad8\uff0c\u4e0eLauncher\u5b8c\u7f8e\u517c\u5bb9\u3002 \u6240\u4ee5\u6211\u4eec\u53ea\u662f ",(0,i.kt)(l.Z,{url:"/core-inject/src/main/java/io/activej/inject/annotation/Inject.java",mdxType:"Githublink"},(0,i.kt)("inlineCode",{parentName:"p"},"@Inject"))," \u4e24\u4e2a\u5b9e\u4f8b\u548c ",(0,i.kt)(l.Z,{url:"/core-inject/src/main/java/io/activej/inject/annotation/Provides.java",mdxType:"Githublink"},(0,i.kt)("inlineCode",{parentName:"p"},"@\u63d0\u4f9b"))," \u5de5\u5382\u65b9\u6cd5\u3002 \u5c31\u50cf\u524d\u9762\u7684\u4f8b\u5b50\u4e00\u6837\uff0c\u6211\u4eec\u4e5f\u5c06\u8986\u76d6 ",(0,i.kt)("inlineCode",{parentName:"p"},"Launcher")," \u65b9\u6cd5 ",(0,i.kt)("inlineCode",{parentName:"p"},"onInit"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"getOverrideModule"),", \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"run"),"\u3002\n\u53e6\u5916\uff0c\u8fd9\u4e2a\u4f8b\u5b50\u5229\u7528\u4e86ActiveJ ",(0,i.kt)("a",{parentName:"p",href:"/zh/async-io/csp"},"CSP")," \u7ec4\u4ef6\uff0c\u7279\u522b\u662f ",(0,i.kt)(l.Z,{url:"/core-csp/src/main/java/io/activej/csp/file/ChannelFileReader.java",mdxType:"Githublink"},(0,i.kt)("inlineCode",{parentName:"p"},"\u9891\u9053\u6587\u4ef6\u8bfb\u53d6\u5668"))," \u7c7b\u3002 \u5b83\u5141\u8bb8\u5f02\u6b65\u5730\u4ece\u6587\u4ef6\u4e2d\u8bfb\u53d6\u4e8c\u8fdb\u5236\u6570\u636e\u3002\n\u4f60\u53ef\u4ee5\u5728\u4ee5\u4e0b\u7f51\u7ad9\u770b\u5230\u5b8c\u6574\u7684\u4f8b\u5b50\u6765\u6e90 ",(0,i.kt)(l.Z,{url:"/examples/cloud/fs/src/main/java/FileUploadExample.java",mdxType:"Githublink"},(0,i.kt)("strong",{parentName:"p"},"GitHub")),"\uff0c\u8fd9\u91cc\u6211\u4eec\u5c06\u53ea\u8003\u8651\u88ab\u8986\u76d6\u7684\u65b9\u6cd5 ",(0,i.kt)("inlineCode",{parentName:"p"},"run"),"\u4e2d\u5b9a\u4e49\u7684\u4e0a\u4f20\u8fc7\u7a0b\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/cloud/fs/src/main/java/FileUploadExample.java tag=EXAMPLE",url:"/examples/cloud/fs/src/main/java/FileUploadExample.java",tag:"EXAMPLE"},"@Override\nprotected void run() throws Exception {\n  ExecutorService executor = newSingleThreadExecutor();\n  CompletableFuture<Void> future = eventloop.submit(() ->\n      // consumer result here is a marker of it being successfully uploaded\n      ChannelFileReader.open(executor, clientFile)\n          .then(cfr -> cfr.streamTo(client.upload(FILE_NAME, EXAMPLE_TEXT.length())))\n          .whenResult(() -> System.out.printf(\"%nFile '%s' successfully uploaded%n%n\", FILE_NAME))\n  );\n  try {\n    future.get();\n  } finally {\n    executor.shutdown();\n  }\n}\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)(l.Z,{url:"/examples/cloud/fs/src/main/java/FileUploadExample.java",mdxType:"Githublink"},"\u5728GitHub\u4e0a\u770b\u5230\u5b8c\u6574\u7684\u4f8b\u5b50"))),(0,i.kt)("h2",{id:"\u6587\u4ef6\u4e0b\u8f7d"},"\u6587\u4ef6\u4e0b\u8f7d"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"#"},(0,i.kt)(l.Z,{text:"FileDownloadExample",url:"/examples/cloud/fs/src/main/java/FileDownloadExample.java",mdxType:"Githublink"}))," \u6709\u4e00\u4e2a\u5b9e\u73b0\u7c7b\u4f3c\u4e8e ",(0,i.kt)("strong",{parentName:"p"},"\u6587\u4ef6\u4e0a\u4f20")," \u7684\u4f8b\u5b50\u3002 \u8fd9\u91cc\u6211\u4eec\u5c06\u53ea\u8003\u8651\u88ab\u8986\u76d6\u7684\u65b9\u6cd5 ",(0,i.kt)("inlineCode",{parentName:"p"},"run"),"\u4e2d\u5b9a\u4e49\u7684\u4e0b\u8f7d\u8fc7\u7a0b\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/cloud/fs/src/main/java/FileDownloadExample.java tag=EXAMPLE",url:"/examples/cloud/fs/src/main/java/FileDownloadExample.java",tag:"EXAMPLE"},"@Override\nprotected void run() throws Exception {\n  ExecutorService executor = newSingleThreadExecutor();\n  CompletableFuture<Void> future = eventloop.submit(() ->\n      ChannelSupplier.ofPromise(client.download(REQUIRED_FILE))\n          .streamTo(ChannelFileWriter.open(executor, clientStorage.resolve(DOWNLOADED_FILE)))\n          .whenResult(() -> System.out.printf(\"%nFile '%s' successfully downloaded to '%s'%n%n\",\n              REQUIRED_FILE, clientStorage))\n  );\n  try {\n    future.get();\n  } finally {\n    executor.shutdown();\n  }\n}\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)(l.Z,{url:"/examples/cloud/fs/src/main/java/FileDownloadExample.java",mdxType:"Githublink"},"\u5728GitHub\u4e0a\u770b\u5230\u5b8c\u6574\u7684\u4f8b\u5b50"))),(0,i.kt)("h2",{id:"activefs\u88c5\u9970\u5668"},"ActiveFs\u88c5\u9970\u5668"),(0,i.kt)("p",null,"\u6709\u65f6\u4f60\u53ef\u80fd\u9700\u8981\u8986\u76d6/\u6269\u5c55 ",(0,i.kt)("inlineCode",{parentName:"p"},"ActiveFs")," \u5b9e\u73b0\u7684\u9ed8\u8ba4\u884c\u4e3a\u3002 \u8981\u505a\u5230\u8fd9\u4e00\u70b9\uff0c\u4f60\u53ef\u4ee5\u5229\u7528 ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Decorator_pattern"},"Decorator")," \u6a21\u5f0f\u3002 ",(0,i.kt)(l.Z,{text:"DecoratedActiveFsExample",url:"/examples/cloud/fs/src/main/java/DecoratedActiveFsExample.java",mdxType:"Githublink"})," \u5c55\u793a\u4e86\u5982\u4f55\u505a\u5230\u8fd9\u4e00\u70b9\u3002 \u5b83\u5bf9 ",(0,i.kt)("inlineCode",{parentName:"p"},"ActiveFs")," \u5b9e\u73b0\u8fdb\u884c\u4e86\u88c5\u9970\uff0c\u4e3a\u6587\u4ef6\u4e0a\u4f20\u548c\u4e0b\u8f7d\u589e\u52a0\u4e86\u989d\u5916\u7684\u65e5\u5fd7\u8bb0\u5f55\u3002\n",(0,i.kt)("inlineCode",{parentName:"p"},"DecoratedActiveFsExample")," \u6269\u5c55\u4e86 ",(0,i.kt)("inlineCode",{parentName:"p"},"ServerSetupExample")," \u6240\u4ee5\u5b83\u7ee7\u627f\u4e86\u5b83\u7684DI\u7ed1\u5b9a\u3002 \u9996\u5148\uff0c\u6211\u4eec\u9700\u8981\u8986\u76d6 ",(0,i.kt)("inlineCode",{parentName:"p"},"ActiveFsServer")," \u7684\u7ed1\u5b9a\uff0c\u4ee5\u4f20\u9012\u88c5\u9970\u8fc7\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"ActiveFs")," \uff0c\u800c\u4e0d\u662f\u539f\u6765\u7684\u90a3\u4e2a\u3002 \u4e3a\u6b64\uff0c\u6211\u4eec\u5c06\u8986\u76d6 ",(0,i.kt)("inlineCode",{parentName:"p"},"Launcher#getOverrideModule")," \u65b9\u6cd5\uff0c\u5e76\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"AsyncFsServer")," \u63d0\u4f9b\u4e00\u4e2a\u65b0\u7684\u7ed1\u5b9a\uff0c\u4f7f\u7528\u88c5\u9970\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"ActiveFs"),"\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/cloud/fs/src/main/java/DecoratedActiveFsExample.java tag=OVERRIDE",url:"/examples/cloud/fs/src/main/java/DecoratedActiveFsExample.java",tag:"OVERRIDE"},'@Override\nprotected Module getOverrideModule() {\n  return new AbstractModule() {\n    @Eager\n    @Provides\n    ActiveFsServer activeFsServer(Eventloop eventloop, @Named("decorated") ActiveFs decoratedFs, Config config) {\n      return ActiveFsServer.create(eventloop, decoratedFs)\n          .withInitializer(ofActiveFsServer(config.getChild("activefs")));\n    }\n\n    @Provides\n    @Named("decorated")\n    ActiveFs decoratedActiveFs(ActiveFs fs) {\n      return new LoggingActiveFs(fs);\n    }\n  };\n}\n')),(0,i.kt)("p",null,"\u6b63\u5982\u4f60\u6240\u770b\u5230\u7684\uff0c\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"decoratedActiveFs(ActiveFs fs)")," \u65b9\u6cd5\u4e2d\uff0c\u6211\u4eec\u8bf7\u6c42\u539f\u59cb\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"ActiveFs")," \uff0c\u5e76\u8fd4\u56de\u7ecf\u8fc7\u88c5\u9970\u7684 \uff08\u88ab\u5305\u88f9\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"LoggingActiveFs"),"\uff09\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/cloud/fs/src/main/java/DecoratedActiveFsExample.java tag=WRAPPER",url:"/examples/cloud/fs/src/main/java/DecoratedActiveFsExample.java",tag:"WRAPPER"},'private static final class LoggingActiveFs extends ForwardingActiveFs {\n  private static final Logger logger = LoggerFactory.getLogger(LoggingActiveFs.class);\n\n  public LoggingActiveFs(ActiveFs peer) {\n    super(peer);\n  }\n\n  @Override\n  public Promise<ChannelConsumer<ByteBuf>> upload(@NotNull String name, long size) {\n    return super.upload(name)\n        .map(consumer -> {\n          logger.info("Starting upload of file: {}. File size is {} bytes", name, size);\n          return consumer\n              .withAcknowledgement(ack -> ack\n                  .whenResult(() -> logger.info("Upload of file {} finished", name)));\n        });\n  }\n\n  @Override\n  public Promise<ChannelSupplier<ByteBuf>> download(@NotNull String name, long offset, long limit) {\n    return super.download(name, offset, limit)\n        .map(supplier -> {\n          logger.info("Starting downloading file: {}", name);\n          return supplier\n              .withEndOfStream(eos -> eos\n                  .whenResult(() -> logger.info("Download of file {} finished", name)));\n        });\n\n  }\n}\n')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"LoggingActiveFs")," \u6269\u5c55\u4e86 ",(0,i.kt)("inlineCode",{parentName:"p"},"ForwardingActiveFs")," \uff0c\u5b83\u53ea\u662f\u5c06\u6240\u6709\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"ActiveFs")," \u65b9\u6cd5\u8c03\u7528\u59d4\u6258\u7ed9\u4e00\u4e9b\u5e95\u5c42 ",(0,i.kt)("inlineCode",{parentName:"p"},"ActiveFs")," \u5b9e\u4f8b\u3002 \u6211\u4eec\u8986\u76d6\u6211\u4eec\u60f3\u8981\u88c5\u9970\u7684\u65b9\u6cd5\uff08",(0,i.kt)("inlineCode",{parentName:"p"},"\u4e0b\u8f7d"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"\u4e0a\u4f20"),"\uff09\u5e76\u5728 \u4e0a\u4f20/\u4e0b\u8f7d\u5f00\u59cb\u548c\u7ed3\u675f\u65f6\u6dfb\u52a0\u81ea\u5b9a\u4e49\u65e5\u5fd7\u4fe1\u606f\u3002\n\u4f60\u53ef\u4ee5\u8fd0\u884c ",(0,i.kt)(l.Z,{text:"FileUploadExample",url:"/examples/cloud/fs/src/main/java/FileUploadExample.java",mdxType:"Githublink"})," \uff0c\u7136\u540e\u662f ",(0,i.kt)(l.Z,{text:"FileDownloadExample",url:"/examples/cloud/fs/src/main/java/FileDownloadExample.java",mdxType:"Githublink"})," \u4e4b\u540e\u4f60\u5e94\u8be5\u770b\u5230\u65e5\u5fd7\u8f93\u51fa\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"INFO \u5f00\u59cb\u4e0a\u4f20\u6587\u4ef6\uff1aexample.txt\u3002 \u6587\u4ef6\u5927\u5c0f\u4e3a12\u5b57\u8282\nINFO \u4e0a\u4f20\u6587\u4ef6example.txt\u5b8c\u6210\nINFO \u5f00\u59cb\u4e0b\u8f7d\u6587\u4ef6: example.txt\nINFO \u4e0b\u8f7d\u6587\u4ef6example.txt\u5b8c\u6210\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)(l.Z,{url:"/examples/cloud/fs/src/main/java/DecoratedActiveFsExample.java",mdxType:"Githublink"},"\u5728GitHub\u4e0a\u770b\u5230\u5b8c\u6574\u7684\u4f8b\u5b50"))),(0,i.kt)("h2",{id:"\u96c6\u7fa4\u6587\u4ef6\u5b58\u50a8"},"\u96c6\u7fa4\u6587\u4ef6\u5b58\u50a8"),(0,i.kt)("p",null,"\u901a\u8fc7ActiveJ FS\uff0c\u4f60\u53ef\u4ee5\u7b80\u5355\u5730\u521b\u5efa\u5177\u6709\u9ad8\u5bb9\u9519\u6027\u7684\u5206\u5e03\u5f0f\u96c6\u7fa4\u6587\u4ef6\u5b58\u50a8\u3002 \u6211\u4eec\u5c06\u4f7f\u7528Docker\u6765\u542f\u52a8\u4e09\u4e2a\u865a\u62df\u670d\u52a1\u5668\u548c\u4e00\u4e2a\u5ba2\u6237\u7aef\u3002 \u5b58\u50a8\u5c06\u652f\u6301\u6587\u4ef6\u4e0a\u4f20\uff0c\u5e76\u6839\u636e\u6240\u63d0\u4f9b\u7684\u89c4\u5219\u548c\u590d\u5236\u6570\u91cf\u8fdb\u884c\u81ea\u52a8\u91cd\u65b0\u5206\u533a\u3002"),(0,i.kt)("p",null,"\u6211\u4eec\u9700\u8981\u505a\u7684\u7b2c\u4e00\u4ef6\u4e8b\u662f\u4e3a\u6211\u4eec\u7684\u670d\u52a1\u5668\u521b\u5efa\u4e00\u4e2a\u542f\u52a8\u5668\u7c7b ",(0,i.kt)("inlineCode",{parentName:"p"},"ClusterTcpServerLauncher"),"\u3002 \u5ef6\u957f ",(0,i.kt)(l.Z,{url:"/launchers/fs/src/main/java/io/activej/launchers/fs/SimpleTcpServerLauncher.java",mdxType:"Githublink"},(0,i.kt)("inlineCode",{parentName:"p"},"SimpleTcpServerLauncher"))," \u6765\u83b7\u5f97\u6240\u6709\u9700\u8981\u7684\u5b9e\u4f8b\u3002 ",(0,i.kt)(l.Z,{url:"/cloud-fs/src/main/java/io/activej/fs/tcp/ActiveFsServer.java",mdxType:"Githublink"},(0,i.kt)("inlineCode",{parentName:"p"},"ActiveFsServer")),"\uff0c\u5f53\u5730 ",(0,i.kt)(l.Z,{url:"/cloud-fs/src/main/java/io/activej/fs/ActiveFs.java",mdxType:"Githublink"},'"ActiveFS'),", ",(0,i.kt)(l.Z,{url:"/core-http/src/main/java/io/activej/http/AsyncHttpServer.java",mdxType:"Githublink"},(0,i.kt)("inlineCode",{parentName:"p"},"AsyncHttpServer"))," \u4e3aGUI\uff0c\u5b83\u5c06\u7b80\u5316\u4e0e\u4f60\u7684\u5b58\u50a8\u548c\u5176\u4ed6\u8f85\u52a9\u5b9e\u4f8b\u7684\u5de5\u4f5c\u3002 \u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"ClusterTcpServerLauncher")," \uff0c\u6211\u4eec\u53ea\u9700\u8981\u8bbe\u7f6e\u4efb\u52a1\u8c03\u5ea6\u5668\u7b49\u91cd\u65b0\u5206\u533a\u7ba1\u7406\u7684\u5b9e\u7528\u7a0b\u5e8f\u3002 ",(0,i.kt)(l.Z,{url:"/cloud-fs/src/main/java/io/activej/fs/cluster/ClusterRepartitionController.java",mdxType:"Githublink"},(0,i.kt)("inlineCode",{parentName:"p"},"ClusterRepartitionController")),"\uff0c\u4ee5\u53ca ",(0,i.kt)(l.Z,{url:"/cloud-fs/src/main/java/io/activej/fs/cluster/FsPartitions.java",mdxType:"Githublink"},(0,i.kt)("inlineCode",{parentName:"p"},"FsPartitions"))," \u7528\u4e8e\u8ddf\u8e2a\u6d3b\u7740\u7684\u5206\u533a\u548c\u5b83\u4eec\u7684\u72b6\u6001\u3002 \u5206\u533a\u5c06\u901a\u8fc7TCP\u534f\u8bae\u8fdb\u884c\u901a\u4fe1\uff0c\u800cGUI\u670d\u52a1\u5668\u5c06\u4f7f\u7528HTTP\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/launchers/fs/src/main/java/io/activej/launchers/fs/ClusterTcpServerLauncher.java tag=EXAMPLE",url:"/launchers/fs/src/main/java/io/activej/launchers/fs/ClusterTcpServerLauncher.java",tag:"EXAMPLE"},'@Provides\n@Eager\n@Named("repartition")\nEventloopTaskScheduler repartitionScheduler(Config config, ClusterRepartitionController controller) {\n  return EventloopTaskScheduler.create(controller.getEventloop(), controller::repartition)\n      .withInitializer(ofEventloopTaskScheduler(config.getChild("activefs.repartition")));\n}\n\n@Provides\n@Eager\n@Named("clusterDeadCheck")\nEventloopTaskScheduler deadCheckScheduler(Config config, FsPartitions partitions) {\n  return EventloopTaskScheduler.create(partitions.getEventloop(), partitions::checkDeadPartitions)\n      .withInitializer(ofEventloopTaskScheduler(config.getChild("activefs.repartition.deadCheck")));\n}\n\n@Provides\nClusterRepartitionController repartitionController(Config config, ActiveFsServer localServer, FsPartitions partitions) {\n  String localPartitionId = first(partitions.getAllPartitions());\n  assert localPartitionId != null;\n\n  return ClusterRepartitionController.create(localPartitionId, partitions)\n      .withInitializer(ofClusterRepartitionController(config.getChild("activefs.repartition")));\n}\n\n@Provides\nDiscoveryService discoveryService(Eventloop eventloop, ActiveFs activeFs, Config config) throws MalformedDataException {\n  return Initializers.constantDiscoveryService(eventloop, activeFs, config);\n}\n\n@Provides\nFsPartitions fsPartitions(Eventloop eventloop, DiscoveryService discoveryService, @Optional ServerSelector serverSelector) {\n\n  return FsPartitions.create(eventloop, discoveryService)\n      .withServerSelector(nonNullElse(serverSelector, RENDEZVOUS_HASH_SHARDER));\n}\n')),(0,i.kt)("p",null,"\u73b0\u5728\u6211\u4eec\u53ef\u4ee5\u7ee7\u7eed\u521b\u5efa\u4e00\u4e2a\u5ba2\u6237\u7aef\u542f\u52a8\u5668 ",(0,i.kt)("inlineCode",{parentName:"p"},"ClusterTcpClientLauncher"),"\u3002 \u6211\u4eec\u9700\u8981\u63d0\u4f9b ",(0,i.kt)("inlineCode",{parentName:"p"},"ClusterRepartitionController")," \u548c\u4e00\u4e2a\u4efb\u52a1\u8c03\u5ea6\u5668\u6765\u68c0\u6d4b\u6b7b\u5206\u533a\u3002 \u4e0e\u670d\u52a1\u5668\u542f\u52a8\u5668\u7c7b\u4f3c\uff0c\u6211\u4eec\u9700\u8981\u4e3aGUI\u63d0\u4f9b\u4e00\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},"AsyncHttpServer")," \uff0c\u4e3a\u7ba1\u7406\u5206\u533a\u63d0\u4f9b ",(0,i.kt)("inlineCode",{parentName:"p"},"FsPartitions"),"\u3002 \u6211\u4eec\u8fd8\u9700\u8981\u4e00\u4e2a ",(0,i.kt)(l.Z,{text:"ClusterActiveFs",url:"/cloud-fs/src/main/java/io/activej/fs/cluster/ClusterActiveFs.java",mdxType:"Githublink"})," \u7c7b\u7684\u5b9e\u4f8b\uff0c\u8fd9\u662f\u4e00\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},"ActiveFs")," \u5b9e\u73b0\uff0c\u4f5c\u4e3a\u4e00\u4e2a\u96c6\u7fa4\u5728\u5176\u4ed6\u5206\u533a\u4e0a\u8fd0\u884c\uff0c\u5e76\u5305\u542b\u4e00\u4e9b\u5197\u4f59\u548c\u6545\u969c\u5b89\u5168\u80fd\u529b\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/launchers/fs/src/main/java/io/activej/launchers/fs/ClusterTcpClientLauncher.java tag=EXAMPLE",url:"/launchers/fs/src/main/java/io/activej/launchers/fs/ClusterTcpClientLauncher.java",tag:"EXAMPLE"},'@Provides\n@Eager\n@Named("clusterDeadCheck")\nEventloopTaskScheduler deadCheckScheduler(Config config, FsPartitions partitions) {\n  return EventloopTaskScheduler.create(partitions.getEventloop(), partitions::checkDeadPartitions)\n      .withInitializer(ofEventloopTaskScheduler(config.getChild("activefs.repartition.deadCheck")));\n}\n\n@Provides\n@Eager\nAsyncHttpServer guiServer(Eventloop eventloop, AsyncServlet servlet, Config config) {\n  return AsyncHttpServer.create(eventloop, servlet)\n      .withInitializer(ofHttpServer(config.getChild("activefs.http.gui")));\n}\n\n@Provides\nAsyncServlet guiServlet(ActiveFs activeFs) {\n  return ActiveFsGuiServlet.create(activeFs, "Cluster FS Client");\n}\n\n@Provides\nActiveFs remoteActiveFs(Eventloop eventloop, FsPartitions partitions, Config config) {\n  return ClusterActiveFs.create(partitions)\n      .withInitializer(ofClusterActiveFs(config.getChild("activefs.cluster")));\n}\n\n@Provides\nDiscoveryService discoveryService(Eventloop eventloop, Config config) throws MalformedDataException {\n  return Initializers.constantDiscoveryService(eventloop, config.getChild("activefs.cluster"));\n}\n\n@Provides\nFsPartitions fsPartitions(Eventloop eventloop, DiscoveryService discoveryService) {\n  return FsPartitions.create(eventloop, discoveryService);\n}\n')),(0,i.kt)("p",null,"\u4e0b\u9762\u662f\u6211\u4eec\u7684\u5206\u5e03\u5f0fP2P\u5b58\u50a8\u7684\u67b6\u6784\u3002"),(0,i.kt)(c.Z,{style:{width:"100%"},alt:"Distributed P2P storage",sources:{light:(0,s.Z)("/img/activefs_light.svg"),dark:(0,s.Z)("/img/activefs_dark.svg")},mdxType:"ThemedImage"}),(0,i.kt)("p",null,"\u4f60\u53ef\u4ee5\u6839\u636e\u81ea\u5df1\u7684\u610f\u613f\u521b\u5efa\u4efb\u610f\u591a\u7684\u5206\u533a\u3002"),(0,i.kt)("p",null,"\u4e3a\u4e86\u542f\u52a8\u8fd9\u4e2a\u4f8b\u5b50\uff0c\u8fd0\u884c\u4ee5\u4e0b\u811a\u672c\u6765\u521b\u5efaDocker\u955c\u50cf\u548c\u6784\u5efa\u5bb9\u5668\uff08\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"activej/launchers/fs")," \u76ee\u5f55\u4e0b\u8fd0\u884c\u6240\u6709\u811a\u672c\uff09\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# \u4e3a\u670d\u52a1\u5668\u548c\u5ba2\u6237\u7aef\u6784\u5efa\u4e24\u4e2a\u955c\u50cf\ndocker build -t cluster-server -f ClusterServerDockerfile .\ndocker build -t cluster-client -f ClusterClientDockerfile .\n# \u5728\u540e\u53f0\u542f\u52a8\u6240\u6709\u670d\u52a1\u5668\u548c\u5ba2\u6237\u7aef\u5b9e\u4f8b\ndocker-compose up -d\n")),(0,i.kt)("p",null,"\u5bb9\u5668\u5c06\u4ee5\u4e0b\u5217\u914d\u7f6e\u5efa\u9020\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Server1"),": TCP\u8fde\u63a5\u7aef\u53e3 ",(0,i.kt)("inlineCode",{parentName:"li"},"9001"),", HTTP GUI\u7aef\u53e3 ",(0,i.kt)("inlineCode",{parentName:"li"},"8081")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Server2"),": TCP\u8fde\u63a5\u7aef\u53e3 ",(0,i.kt)("inlineCode",{parentName:"li"},"9002"),", HTTP GUI\u7aef\u53e3 ",(0,i.kt)("inlineCode",{parentName:"li"},"8082")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Server3"),": TCP\u8fde\u63a5\u7aef\u53e3 ",(0,i.kt)("inlineCode",{parentName:"li"},"9003"),", HTTP GUI\u7aef\u53e3 ",(0,i.kt)("inlineCode",{parentName:"li"},"8083")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u5ba2\u6237\u7aef"),": HTTP GUI\u7aef\u53e3 ",(0,i.kt)("inlineCode",{parentName:"li"},"8080"))),(0,i.kt)("p",null,"\u4f7f\u7528\u8fd9\u4e2a\u811a\u672c\u6765\u7ba1\u7406\u5bb9\u5668\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# \u505c\u6b62\u4e00\u4e2a\u5bb9\u5668:\ndocker-compose stop server1\n# \u505c\u6b62\u6240\u6709\u5bb9\u5668:\ndocker-compose down\n# \u68c0\u67e5\u5bb9\u5668\u72b6\u6001:\ndocker-compose ps\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)(l.Z,{url:"/launchers/fs",mdxType:"Githublink"},"\u5728GitHub\u4e0a\u770b\u5230\u5b8c\u6574\u7684\u4f8b\u5b50"))))}k.isMDXComponent=!0},86010:function(e,t,n){function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})}}]);