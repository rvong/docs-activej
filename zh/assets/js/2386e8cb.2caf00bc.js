"use strict";(self.webpackChunkactivejdocs=self.webpackChunkactivejdocs||[]).push([[6123],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return j}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),u=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(o.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(t),j=a,m=d["".concat(o,".").concat(j)]||d[j]||s[j]||i;return t?r.createElement(m,c(c({ref:n},p),{},{components:t})):r.createElement(m,c({ref:n},p))}));function j(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,c=new Array(i);c[0]=d;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var u=2;u<i;u++)c[u]=t[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},43711:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return s},default:function(){return m}});var r,a=t(87462),i=t(63366),c=(t(67294),t(3905)),l=["components"],o={sidebar_label:"\u6ce8\u5165\u5b9e\u4f8b"},u=void 0,p={unversionedId:"inject/injecting-instances",id:"inject/injecting-instances",isDocsHomePage:!1,title:"injecting-instances",description:"\u4ece'@site/src/components/GithubLink'\u5bfc\u5165Githublink\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/inject/injecting-instances.mdx",sourceDirName:"inject",slug:"/inject/injecting-instances",permalink:"/zh/inject/injecting-instances",tags:[],version:"current",frontMatter:{sidebar_label:"\u6ce8\u5165\u5b9e\u4f8b"},sidebar:"docs",previous:{title:"\u5feb\u901f\u542f\u52a8",permalink:"/zh/inject/quick-start"},next:{title:"\u7c7b\u522b\u626b\u63cf",permalink:"/zh/inject/class-scanning"}},s=[{value:"\u6a21\u5757",id:"\u6a21\u5757",children:[]},{value:"\u4f7f\u7528\u4e00\u4e2a <code>InstanceInjector</code>",id:"\u4f7f\u7528\u4e00\u4e2a-instanceinjector",children:[]},{value:"\u5c06\u7c7b\u6dfb\u52a0\u5230\u7ed1\u5b9a\u56fe\u4e2d",id:"\u5c06\u7c7b\u6dfb\u52a0\u5230\u7ed1\u5b9a\u56fe\u4e2d",children:[]}],d=(r="Githublink",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,c.kt)("div",e)}),j={toc:s};function m(e){var n=e.components,t=(0,i.Z)(e,l);return(0,c.kt)("wrapper",(0,a.Z)({},j,t,{components:n,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"\u4ece'@site/src/components/GithubLink'\u5bfc\u5165Githublink\u3002"),(0,c.kt)("h1",{id:"\u6ce8\u5165\u5b9e\u4f8b"},"\u6ce8\u5165\u5b9e\u4f8b"),(0,c.kt)("p",null,"\u5728\u672c\u6559\u7a0b\u4e2d\uff0c\u6211\u4eec\u5c06\u628a\u5b9e\u4f8b\u6ce8\u5165\u7c7b\u4e2d\u3002 \u6211\u4eec\u5c06\u4f7f\u75282\u79cd\u65b9\u6cd5\u3002"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u4e00\u4e2a ",(0,c.kt)(d,{url:"/core-inject/src/main/java/io/activej/inject/InstanceInjector.java",mdxType:"Githublink"},'\u5b9e\u4f8b\u6ce8\u5165\u5668"\u3002')),(0,c.kt)("li",{parentName:"ul"},"\u6dfb\u52a0\u5c06\u5176\u5b57\u6bb5\u6ce8\u5165\u5230\u7ed1\u5b9a\u56fe\u7684\u7c7b")),(0,c.kt)("h2",{id:"\u6a21\u5757"},"\u6a21\u5757"),(0,c.kt)("p",null,"\u6211\u4eec\u5c06\u5b9a\u4e49\u4e24\u4e2a\u72ec\u7acb\u7684\u6a21\u5757\uff1a\u4e00\u4e2a\u5c06\u63d0\u4f9b ",(0,c.kt)("inlineCode",{parentName:"p"},"String")," message\uff0c\u53e6\u4e00\u4e2a\u5c06\u63d0\u4f9b ",(0,c.kt)("inlineCode",{parentName:"p"},"int")," id\u3002"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-java"},'public class MessageModule extends AbstractModule {\n    @Provides\n    String message() {\n        return "hello";\n    }\n}\n')),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-java"},"public class IdModule extends AbstractModule {\n    @Provides\n    int id() {\n        return 123;\n    }\n}\n")),(0,c.kt)("h2",{id:"\u4f7f\u7528\u4e00\u4e2a-instanceinjector"},"\u4f7f\u7528\u4e00\u4e2a ",(0,c.kt)("inlineCode",{parentName:"h2"},"InstanceInjector")),(0,c.kt)("p",null,"\u8fd9\u91cc\u662f\u9700\u8981\u6ce8\u5165\u5176\u5b57\u6bb5\u7684\u7c7b\u3002"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-java"},"public class Injected {\n    @Inject\n    String value;\n\n    @Inject\n    int id;\n}\n")),(0,c.kt)("p",null,"\u6211\u4eec\u9700\u8981\u521b\u5efa\u4e00\u4e2a ",(0,c.kt)("inlineCode",{parentName:"p"},"Injector")," \uff0c\u5e76\u5c06 ",(0,c.kt)("inlineCode",{parentName:"p"},"MessageModule")," \u548c ",(0,c.kt)("inlineCode",{parentName:"p"},"IdModule")," \u4f5c\u4e3a\u53c2\u6570\u4f20\u9012\u3002"),(0,c.kt)("p",null,"\u6211\u4eec\u8fd8\u9700\u8981\u4e3a\u4e00\u4e2a\u5b9e\u4f8b\u6ce8\u5165\u5668\u6dfb\u52a0\u4e00\u4e2a\u7ed1\u5b9a\u3002 \u4e3a\u6b64\uff0c\u6211\u4eec\u5c06\u4f7f\u7528 ",(0,c.kt)("inlineCode",{parentName:"p"},"ModuleBuilder")," \uff0c\u624b\u52a8\u6784\u5efa\u7b2c\u4e09\u4e2a\u6a21\u5757\uff0c\u5176\u552f\u4e00\u76ee\u7684\u662f\u7ed1\u5b9a\u4e00\u4e2a\u5b9e\u4f8b\u6ce8\u5165\u5668\u3002"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-java"},"Injector injector = Injector.of(\n        new MessageModule(),\n        new IdModule(),\n        ModuleBuilder.create()\n                .bindInstanceInjector( Injected.class)\n                .build())\u3002\n")),(0,c.kt)("p",null,"\u6700\u540e\uff0c\u6211\u4eec\u9700\u8981\u4eceInjector\u83b7\u5f97 ",(0,c.kt)("inlineCode",{parentName:"p"},"InstanceInjector")," \uff0c\u5e76\u4f7f\u7528\u5b83\u5c06\u5b57\u6bb5\u6ce8\u5165\u5230\u65b0\u521b\u5efa\u7684 ",(0,c.kt)("inlineCode",{parentName:"p"},"Injected")," \u5b9e\u4f8b\u4e2d\u3002"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-java"},"InstanceInjector<Injected> instanceInjector = injector.getInstanceInjector(Injected.class);\n\nInjected injected = new Injected();\ninstanceInjector.injectInto(injected);\n")),(0,c.kt)("h2",{id:"\u5c06\u7c7b\u6dfb\u52a0\u5230\u7ed1\u5b9a\u56fe\u4e2d"},"\u5c06\u7c7b\u6dfb\u52a0\u5230\u7ed1\u5b9a\u56fe\u4e2d"),(0,c.kt)("p",null,"\u8fd9\u91cc\u53c8\u662f\u4e00\u4e2a\u9700\u8981\u6ce8\u5165\u5176\u5b57\u6bb5\u7684\u7c7b\u3002 ",(0,c.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff0c\u8fd9\u6b21\u6709\u4e00\u4e2a ",(0,c.kt)("inlineCode",{parentName:"strong"},"@Inject")," \u6ce8\u91ca\uff0c\u6ce8\u89e3\u4e86\u7c7b\u578b\u3002")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-java"},"@Inject\npublic class Injected {\n    @Inject\n    String value;\n\n    @Inject\n    int id;\n}\n")),(0,c.kt)("p",null,"\u6216\u8005\uff0c\u4f60\u53ef\u4ee5\u6dfb\u52a0\u4e00\u4e2a\u6784\u9020\u51fd\u6570\uff0c\u5e76\u7528 ",(0,c.kt)("inlineCode",{parentName:"p"},"@Inject")," \u6ce8\u91ca\u6765\u8bf4\u660e\uff0c\u50cf\u8fd9\u6837\u3002"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-java"},"public class Injected {\n    private final String value;\n    private final int id;\n\n    @Inject\n    public Injected\uff08String value, int id\uff09 {\n        this.value = value;\n        this.id = id;\n    }\n    //...\n}\n\n")),(0,c.kt)("p",null,"\u6211\u4eec\u4ecd\u7136\u9700\u8981\u521b\u5efa\u4e00\u4e2a ",(0,c.kt)("inlineCode",{parentName:"p"},"Injector")," \uff0c\u5e76\u5c06 ",(0,c.kt)("inlineCode",{parentName:"p"},"MessageModule")," \u548c ",(0,c.kt)("inlineCode",{parentName:"p"},"IdModule")," \u4f5c\u4e3a\u53c2\u6570\u4f20\u9012\u3002"),(0,c.kt)("p",null,"\u7136\u800c\uff0c\u8fd9\u6b21\u6211\u4eec\u4e0d\u662f\u7ed1\u5b9a\u5b9e\u4f8b\u6ce8\u5165\u5668\uff0c\u800c\u662f\u7ed1\u5b9a ",(0,c.kt)("inlineCode",{parentName:"p"},"Injected")," \u7c7b\u3002 \u4e3a\u6b64\uff0c\u6211\u4eec\u8fd8\u5c06\u4f7f\u7528 ",(0,c.kt)("inlineCode",{parentName:"p"},"ModuleBuilder")," \uff0c\u624b\u52a8\u6784\u5efa\u7b2c\u4e09\u4e2a\u6a21\u5757\uff0c\u5176\u552f\u4e00\u76ee\u7684\u662f\u7ed1\u5b9a\u4e00\u4e2a\u9700\u8981\u7684\u7c7b\u3002"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-java"},"Injector injector = Injector.of(\n        new MessageModule(),\n        new IdModule(),\n        ModuleBuilder.create()\n                .bind(Injected.class)\n                .build()) \u3002\n")),(0,c.kt)("p",null,"\u6700\u540e\uff0c\u6211\u4eec\u53ef\u4ee5\u5411\u6ce8\u5c04\u5668\u8bf7\u6c42\u4e00\u4e2a ",(0,c.kt)("inlineCode",{parentName:"p"},"Injected")," \u7684\u5b9e\u4f8b\u3002 \u6240\u6709\u7684\u5b57\u6bb5\u90fd\u88ab\u6b63\u786e\u5730\u6ce8\u5165\u4e86\u3002"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-java"},"Injected instance = injector.getInstance(Injected.class)\u3002\n")))}m.isMDXComponent=!0}}]);