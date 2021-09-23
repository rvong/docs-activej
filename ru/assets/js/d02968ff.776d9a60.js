"use strict";(self.webpackChunkactivejdocs=self.webpackChunkactivejdocs||[]).push([[8858],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,v=m["".concat(p,".").concat(d)]||m[d]||u[d]||l;return n?a.createElement(v,i(i({ref:t},s),{},{components:n})):a.createElement(v,i({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},77618:function(e,t,n){var a=n(67294),r=n(39962);t.Z=function(e){var t=e.url,n=e.text,l=e.isInline,i=void 0===l||l,o=e.children,p=(0,r.Z)().siteConfig,c=t.startsWith("/examples")?p.customFields.githubExamplesBranch:p.customFields.githubBranch;return a.createElement("a",{style:i?{}:{display:"block",marginBottom:"16px"},href:p.customFields.githubUrl+"/"+c+t,target:"_blank"},n||o)}},77815:function(e,t,n){n(67294);var a=n(39962);t.Z=function(e){var t=e.name,n=(0,a.Z)().siteConfig;if(!t)throw new Error("Variable name is required");if(void 0===n.customFields[t])throw new Error("Variable "+t+" not exist");return n.customFields[t]}},53571:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=(n(77618),n(77815)),o=["components"],p={title:"ActiveJ | \u041d\u0430\u0447\u0430\u043b\u043e \u0440\u0430\u0431\u043e\u0442\u044b",sidebar_label:"\u041d\u0430\u0447\u0430\u043b\u043e \u0440\u0430\u0431\u043e\u0442\u044b",keywords:["java","java \u0434\u043b\u044f \u043d\u0430\u0447\u0438\u043d\u0430\u044e\u0449\u0438\u0445","java framework","\u0440\u0443\u043a\u043e\u0432\u043e\u0434\u0441\u0442\u0432\u043e","\u0443\u0447\u0435\u0431\u043d\u0438\u043a","\u0432\u0435\u0431-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435","async","spring","\u0430\u043b\u044c\u0442\u0435\u0440\u043d\u0430\u0442\u0438\u0432\u0430 spring","netty \u0430\u043b\u044c\u0442\u0435\u0440\u043d\u0430\u0442\u0438\u0432\u0430","jetty \u0430\u043b\u044c\u0442\u0435\u0440\u043d\u0430\u0442\u0438\u0432\u0430","\u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f","\u0441\u0435\u0440\u0432\u0435\u0440","\u043a\u043b\u0438\u0435\u043d\u0442","\u0441\u0435\u0440\u0432\u043b\u0435\u0442"],description:"\u0421\u043e\u0437\u0434\u0430\u0439\u0442\u0435 \u0432\u044b\u0441\u043e\u043a\u043e\u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u0430\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u044b\u0439 HTTP-\u0441\u0435\u0440\u0432\u0435\u0440 \u0437\u0430 10 \u0441\u0442\u0440\u043e\u043a \u043a\u043e\u0434\u0430 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e Java-\u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u044b ActiveJ.",sidebar_position:1},c="\u041d\u0430\u0447\u0430\u043b\u043e \u0440\u0430\u0431\u043e\u0442\u044b",s={unversionedId:"tutorials/getting-started",id:"tutorials/getting-started",isDocsHomePage:!1,title:"ActiveJ | \u041d\u0430\u0447\u0430\u043b\u043e \u0440\u0430\u0431\u043e\u0442\u044b",description:"\u0421\u043e\u0437\u0434\u0430\u0439\u0442\u0435 \u0432\u044b\u0441\u043e\u043a\u043e\u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u0430\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u044b\u0439 HTTP-\u0441\u0435\u0440\u0432\u0435\u0440 \u0437\u0430 10 \u0441\u0442\u0440\u043e\u043a \u043a\u043e\u0434\u0430 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e Java-\u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u044b ActiveJ.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/tutorials/getting-started.mdx",sourceDirName:"tutorials",slug:"/tutorials/getting-started",permalink:"/ru/tutorials/getting-started",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"ActiveJ | \u041d\u0430\u0447\u0430\u043b\u043e \u0440\u0430\u0431\u043e\u0442\u044b",sidebar_label:"\u041d\u0430\u0447\u0430\u043b\u043e \u0440\u0430\u0431\u043e\u0442\u044b",keywords:["java","java \u0434\u043b\u044f \u043d\u0430\u0447\u0438\u043d\u0430\u044e\u0449\u0438\u0445","java framework","\u0440\u0443\u043a\u043e\u0432\u043e\u0434\u0441\u0442\u0432\u043e","\u0443\u0447\u0435\u0431\u043d\u0438\u043a","\u0432\u0435\u0431-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435","async","spring","\u0430\u043b\u044c\u0442\u0435\u0440\u043d\u0430\u0442\u0438\u0432\u0430 spring","netty \u0430\u043b\u044c\u0442\u0435\u0440\u043d\u0430\u0442\u0438\u0432\u0430","jetty \u0430\u043b\u044c\u0442\u0435\u0440\u043d\u0430\u0442\u0438\u0432\u0430","\u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f","\u0441\u0435\u0440\u0432\u0435\u0440","\u043a\u043b\u0438\u0435\u043d\u0442","\u0441\u0435\u0440\u0432\u043b\u0435\u0442"],description:"\u0421\u043e\u0437\u0434\u0430\u0439\u0442\u0435 \u0432\u044b\u0441\u043e\u043a\u043e\u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u0430\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u044b\u0439 HTTP-\u0441\u0435\u0440\u0432\u0435\u0440 \u0437\u0430 10 \u0441\u0442\u0440\u043e\u043a \u043a\u043e\u0434\u0430 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e Java-\u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u044b ActiveJ.",sidebar_position:1},sidebar:"tutorials",next:{title:"\u0418\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044f \u0434\u0432\u0438\u0436\u043a\u0430 \u0448\u0430\u0431\u043b\u043e\u043d\u043e\u0432",permalink:"/ru/tutorials/template-engine-integration"}},u=[{value:"\u0427\u0442\u043e \u0432\u0430\u043c \u043f\u043e\u043d\u0430\u0434\u043e\u0431\u0438\u0442\u0441\u044f:",id:"\u0447\u0442\u043e-\u0432\u0430\u043c-\u043f\u043e\u043d\u0430\u0434\u043e\u0431\u0438\u0442\u0441\u044f",children:[]},{value:"\u041a\u0430\u043a\u0438\u0435 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0438 ActiveJ \u0431\u0443\u0434\u0443\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f:",id:"\u043a\u0430\u043a\u0438\u0435-\u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0438-activej-\u0431\u0443\u0434\u0443\u0442-\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f",children:[]},{value:"\u0427\u0442\u043e\u0431\u044b \u043f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c \u0440\u0430\u0431\u043e\u0442\u0443 \u0441 \u044d\u0442\u0438\u043c \u0440\u0443\u043a\u043e\u0432\u043e\u0434\u0441\u0442\u0432\u043e\u043c, \u0443 \u0432\u0430\u0441 \u0435\u0441\u0442\u044c \u0442\u0440\u0438 \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u0430:",id:"\u0447\u0442\u043e\u0431\u044b-\u043f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c-\u0440\u0430\u0431\u043e\u0442\u0443-\u0441-\u044d\u0442\u0438\u043c-\u0440\u0443\u043a\u043e\u0432\u043e\u0434\u0441\u0442\u0432\u043e\u043c-\u0443-\u0432\u0430\u0441-\u0435\u0441\u0442\u044c-\u0442\u0440\u0438-\u0432\u0430\u0440\u0438\u0430\u043d\u0442\u0430",children:[]},{value:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0438\u0437 \u0430\u0440\u0445\u0435\u0442\u0438\u043f\u0430 Maven",id:"\u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435-\u0438\u0437-\u0430\u0440\u0445\u0435\u0442\u0438\u043f\u0430-maven",children:[]},{value:"\u041f\u0440\u0438\u043c\u0435\u0440 \u0440\u0430\u0431\u043e\u0442\u044b",id:"\u043f\u0440\u0438\u043c\u0435\u0440-\u0440\u0430\u0431\u043e\u0442\u044b",children:[]},{value:"\u041f\u043e\u0448\u0430\u0433\u043e\u0432\u043e\u0435 \u0440\u0443\u043a\u043e\u0432\u043e\u0434\u0441\u0442\u0432\u043e",id:"\u043f\u043e\u0448\u0430\u0433\u043e\u0432\u043e\u0435-\u0440\u0443\u043a\u043e\u0432\u043e\u0434\u0441\u0442\u0432\u043e",children:[{value:"1. \u041d\u0430\u0441\u0442\u0440\u043e\u0439\u0442\u0435 \u043f\u0440\u043e\u0435\u043a\u0442",id:"1-\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u0442\u0435-\u043f\u0440\u043e\u0435\u043a\u0442",children:[]},{value:"2. \u041d\u0430\u043f\u0438\u0441\u0430\u0442\u044c <code>HttpHelloWorldExample</code> \u043a\u043b\u0430\u0441\u0441",id:"2-\u043d\u0430\u043f\u0438\u0441\u0430\u0442\u044c-httphelloworldexample-\u043a\u043b\u0430\u0441\u0441",children:[]},{value:"3. \u0417\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435",id:"3-\u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u0435-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435",children:[]}]},{value:"\u0427\u0442\u043e \u0434\u0430\u043b\u044c\u0448\u0435?",id:"\u0447\u0442\u043e-\u0434\u0430\u043b\u044c\u0448\u0435",children:[]}],m={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u043d\u0430\u0447\u0430\u043b\u043e-\u0440\u0430\u0431\u043e\u0442\u044b"},"\u041d\u0430\u0447\u0430\u043b\u043e \u0440\u0430\u0431\u043e\u0442\u044b"),(0,l.kt)("p",null,"ActiveJ - \u044d\u0442\u043e \u043c\u0438\u043d\u0438\u043c\u0430\u043b\u0438\u0441\u0442\u0438\u0447\u043d\u0430\u044f \u0438 \u0441\u0432\u043e\u0431\u043e\u0434\u043d\u0430\u044f \u043e\u0442 \u0448\u0430\u0431\u043b\u043e\u043d\u043e\u0432 Java-\u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0430, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u043f\u0440\u0438\u0437\u0432\u0430\u043d\u0430 \u0437\u0430\u043c\u0435\u043d\u0438\u0442\u044c Spring, Spark, Micronaut \u0438 \u0434\u0440\u0443\u0433\u0438\u0435 \u043f\u043e\u0434\u043e\u0431\u043d\u044b\u0435 \u0440\u0435\u0448\u0435\u043d\u0438\u044f. \u041e\u043d \u043e\u0431\u043b\u0430\u0434\u0430\u0435\u0442 \u0431\u043e\u0433\u0430\u0442\u044b\u043c \u0441\u0442\u0435\u043a\u043e\u043c \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0439 \u0441 \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u043e\u0439 \u043c\u043e\u0434\u0435\u043b\u044c\u044e \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f async \u0438 \u043c\u043e\u0449\u043d\u043e\u0439 \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u043e\u0439 DI ",(0,l.kt)("a",{parentName:"p",href:"/ru/inject"},"ActiveJ Inject"),"."),(0,l.kt)("p",null,"ActiveJ \u0441\u043e\u0441\u0442\u043e\u0438\u0442 \u0438\u0437 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u0445 \u0441\u043b\u0430\u0431\u043e \u0441\u0432\u044f\u0437\u0430\u043d\u043d\u044b\u0445 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0434\u043e\u043f\u043e\u043b\u043d\u044f\u044e\u0442 \u0438 \u0440\u0430\u0441\u0448\u0438\u0440\u044f\u044e\u0442 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0438 \u0434\u0440\u0443\u0433 \u0434\u0440\u0443\u0433\u0430: \u044f\u0434\u0440\u043e async, \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u0430\u044f \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u0432\u0432\u043e\u0434\u0430-\u0432\u044b\u0432\u043e\u0434\u0430, \u0432\u044b\u0441\u043e\u043a\u043e\u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u0430\u043b\u044c\u0442\u0435\u0440\u043d\u0430\u0442\u0438\u0432\u044b Jetty \u0438 Netty, \u0430 \u0442\u0430\u043a\u0436\u0435 \u0443\u0434\u043e\u0431\u043d\u044b\u0435 \u0437\u0430\u0433\u0440\u0443\u0437\u043e\u0447\u043d\u044b\u0435 \u0443\u0442\u0438\u043b\u0438\u0442\u044b."),(0,l.kt)("p",null,'\u0412 \u044d\u0442\u043e\u043c \u0443\u0440\u043e\u043a\u0435 \u043c\u044b \u0441\u043e\u0437\u0434\u0430\u0434\u0438\u043c \u043f\u0440\u043e\u0441\u0442\u043e\u0439 HTTP-\u0441\u0435\u0440\u0432\u0435\u0440, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0431\u0443\u0434\u0435\u0442 \u043f\u043e\u0441\u044b\u043b\u0430\u0442\u044c \u043f\u0440\u0438\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0435 "Hello World!". \u0421 \u043f\u043e\u043c\u043e\u0449\u044c\u044e ActiveJ ',(0,l.kt)("a",{parentName:"p",href:"/ru/boot/launcher"},"Launchers"),", \u0432 \u0447\u0430\u0441\u0442\u043d\u043e\u0441\u0442\u0438 ",(0,l.kt)("inlineCode",{parentName:"p"},"\u043f\u043e\u0434\u043a\u043b\u0430\u0441\u0441\u0430 HttpServerLauncher")," , \u0438 ActiveJ Inject DI \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u043f\u043e\u043b\u043d\u043e\u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0439 \u0441\u0435\u0440\u0432\u0435\u0440 \u043f\u0440\u0438\u043c\u0435\u0440\u043d\u043e \u0437\u0430 10 \u0441\u0442\u0440\u043e\u043a \u043a\u043e\u0434\u0430."),(0,l.kt)("h2",{id:"\u0447\u0442\u043e-\u0432\u0430\u043c-\u043f\u043e\u043d\u0430\u0434\u043e\u0431\u0438\u0442\u0441\u044f"},"\u0427\u0442\u043e \u0432\u0430\u043c \u043f\u043e\u043d\u0430\u0434\u043e\u0431\u0438\u0442\u0441\u044f:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"5-10 \u043c\u0438\u043d\u0443\u0442"),(0,l.kt)("li",{parentName:"ul"},"\u0412\u0430\u0448\u0430 \u043b\u044e\u0431\u0438\u043c\u0430\u044f IDE"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.oracle.com/java/technologies/javase-downloads.html"},"JDK 1.8")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://maven.apache.org/download.cgi"},"Maven 3.0"))),(0,l.kt)("h2",{id:"\u043a\u0430\u043a\u0438\u0435-\u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0438-activej-\u0431\u0443\u0434\u0443\u0442-\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f"},"\u041a\u0430\u043a\u0438\u0435 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0438 ActiveJ \u0431\u0443\u0434\u0443\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"ActiveJ")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/ru/inject"},"ActiveJ Inject"))),(0,l.kt)("h2",{id:"\u0447\u0442\u043e\u0431\u044b-\u043f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c-\u0440\u0430\u0431\u043e\u0442\u0443-\u0441-\u044d\u0442\u0438\u043c-\u0440\u0443\u043a\u043e\u0432\u043e\u0434\u0441\u0442\u0432\u043e\u043c-\u0443-\u0432\u0430\u0441-\u0435\u0441\u0442\u044c-\u0442\u0440\u0438-\u0432\u0430\u0440\u0438\u0430\u043d\u0442\u0430"},"\u0427\u0442\u043e\u0431\u044b \u043f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c \u0440\u0430\u0431\u043e\u0442\u0443 \u0441 \u044d\u0442\u0438\u043c \u0440\u0443\u043a\u043e\u0432\u043e\u0434\u0441\u0442\u0432\u043e\u043c, \u0443 \u0432\u0430\u0441 \u0435\u0441\u0442\u044c \u0442\u0440\u0438 \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u0430:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u0421\u043e\u0437\u0434\u0430\u0439\u0442\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0438\u0437 \u0430\u0440\u0445\u0435\u0442\u0438\u043f\u0430 Maven ",(0,l.kt)("a",{parentName:"li",href:"#create-from-maven-archetype"},".")),(0,l.kt)("li",{parentName:"ul"},"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u0438 \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0439 \u043f\u0440\u0438\u043c\u0435\u0440 ",(0,l.kt)("a",{parentName:"li",href:"#working-example"})),(0,l.kt)("li",{parentName:"ul"},"\u0421\u043b\u0435\u0434\u0443\u0439\u0442\u0435 \u043f\u043e\u0448\u0430\u0433\u043e\u0432\u043e\u043c\u0443 \u0440\u0443\u043a\u043e\u0432\u043e\u0434\u0441\u0442\u0432\u0443 ",(0,l.kt)("a",{parentName:"li",href:"#step-by-step-guide"}))),(0,l.kt)("h2",{id:"\u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435-\u0438\u0437-\u0430\u0440\u0445\u0435\u0442\u0438\u043f\u0430-maven"},"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0438\u0437 \u0430\u0440\u0445\u0435\u0442\u0438\u043f\u0430 Maven"),(0,l.kt)("p",null,"\u041f\u0440\u043e\u0441\u0442\u043e \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0443\u044e \u043a\u043e\u043c\u0430\u043d\u0434\u0443 \u0432 \u0442\u0435\u0440\u043c\u0438\u043d\u0430\u043b\u0435:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"mvn archetype:generate -DarchetypeGroupId=io.activej -DarchetypeArtifactId=archetype-http -DarchetypeVersion={{site.activej_version}}\n")),(0,l.kt)("p",null,"\u041f\u0440\u043e\u0435\u043a\u0442 \u0431\u0443\u0434\u0435\u0442 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u0441\u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u043d \u043d\u0430 \u0432\u0430\u0448\u0435\u0439 \u043c\u0430\u0448\u0438\u043d\u0435. \u041e\u0442\u043a\u0440\u043e\u0439\u0442\u0435 ",(0,l.kt)("strong",{parentName:"p"},"WebApp")," \u0438 \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u0435 \u0435\u0433\u043e \u043c\u0435\u0442\u043e\u0434 ",(0,l.kt)("em",{parentName:"p"},"main")," . \u0417\u0430\u0442\u0435\u043c \u043e\u0442\u043a\u0440\u043e\u0439\u0442\u0435 \u0432\u0430\u0448 \u043b\u044e\u0431\u0438\u043c\u044b\u0439 \u0431\u0440\u0430\u0443\u0437\u0435\u0440 \u0438 \u043f\u0435\u0440\u0435\u0439\u0434\u0438\u0442\u0435 \u043f\u043e \u0430\u0434\u0440\u0435\u0441\u0443 ",(0,l.kt)("a",{parentName:"p",href:"http://localhost:8080"},"localhost:8080.")),(0,l.kt)("h2",{id:"\u043f\u0440\u0438\u043c\u0435\u0440-\u0440\u0430\u0431\u043e\u0442\u044b"},"\u041f\u0440\u0438\u043c\u0435\u0440 \u0440\u0430\u0431\u043e\u0442\u044b"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/activej/activej/tree/v5.0-beta2"},"\u041a\u043b\u043e\u043d\u0438\u0440\u0443\u0439\u0442\u0435 ActiveJ")," \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e \u0438 \u0438\u043c\u043f\u043e\u0440\u0442\u0438\u0440\u0443\u0439\u0442\u0435 \u0435\u0433\u043e \u043a\u0430\u043a \u043f\u0440\u043e\u0435\u043a\u0442 Maven. \u041f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435 \u0444\u0438\u043b\u0438\u0430\u043b. \u041f\u0435\u0440\u0435\u0434 \u0437\u0430\u043f\u0443\u0441\u043a\u043e\u043c \u043f\u0440\u0438\u043c\u0435\u0440\u0430 \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0441\u0431\u043e\u0440\u043a\u0443 \u043f\u0440\u043e\u0435\u043a\u0442\u0430 (",(0,l.kt)("strong",{parentName:"p"},"Ctrl F9")," \u0434\u043b\u044f IntelliJ IDEA)."),(0,l.kt)("p",null,"\u0417\u0430\u0442\u0435\u043c \u043e\u0442\u043a\u0440\u043e\u0439\u0442\u0435 ",(0,l.kt)("inlineCode",{parentName:"p"},"\u043a\u043b\u0430\u0441\u0441 HttpHelloWorldExample")," , \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f \u043f\u043e \u0430\u0434\u0440\u0435\u0441\u0443 ",(0,l.kt)("inlineCode",{parentName:"p"},"activej/examples/tutorials/getting-started")," \u0438 \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u0435 \u0435\u0433\u043e ",(0,l.kt)("inlineCode",{parentName:"p"},"\u043c\u0435\u0442\u043e\u0434 main")," . \u041e\u0442\u043a\u0440\u043e\u0439\u0442\u0435 \u0432\u0430\u0448 \u043b\u044e\u0431\u0438\u043c\u044b\u0439 \u0431\u0440\u0430\u0443\u0437\u0435\u0440 \u0438 \u043f\u0435\u0440\u0435\u0439\u0434\u0438\u0442\u0435 \u043f\u043e \u0430\u0434\u0440\u0435\u0441\u0443 ",(0,l.kt)("a",{parentName:"p",href:"http://localhost:8080"},"localhost:8080.")),(0,l.kt)("h2",{id:"\u043f\u043e\u0448\u0430\u0433\u043e\u0432\u043e\u0435-\u0440\u0443\u043a\u043e\u0432\u043e\u0434\u0441\u0442\u0432\u043e"},"\u041f\u043e\u0448\u0430\u0433\u043e\u0432\u043e\u0435 \u0440\u0443\u043a\u043e\u0432\u043e\u0434\u0441\u0442\u0432\u043e"),(0,l.kt)("h3",{id:"1-\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u0442\u0435-\u043f\u0440\u043e\u0435\u043a\u0442"},"1. \u041d\u0430\u0441\u0442\u0440\u043e\u0439\u0442\u0435 \u043f\u0440\u043e\u0435\u043a\u0442"),(0,l.kt)("p",null,"\u0421\u043d\u0430\u0447\u0430\u043b\u0430 \u0441\u043e\u0437\u0434\u0430\u0439\u0442\u0435 \u043f\u0430\u043f\u043a\u0443 \u0434\u043b\u044f \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u0438 \u043f\u043e\u0441\u0442\u0440\u043e\u0439\u0442\u0435 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0443\u044e \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0443 \u043f\u0440\u043e\u0435\u043a\u0442\u0430:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"getting-started\n\u2514\u2500\u2500 pom.xml\n\u2514\u2500\u2500 src\n    \u2514\u2500\u2500 main\n        \u2514\u2500\u2500 java\n            \u2514\u2500\u2500 HttpHelloWorldExample.java\n")),(0,l.kt)("p",null,"\u0414\u0430\u043b\u0435\u0435 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0438\u043d\u0442\u0435\u0433\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c ActiveJ \u0432 \u0432\u0430\u0448 \u043f\u0440\u043e\u0435\u043a\u0442. \u0415\u0441\u0442\u044c ",(0,l.kt)("strong",{parentName:"p"},"\u0434\u0432\u0430")," \u0441\u043f\u043e\u0441\u043e\u0431\u0430 \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u044d\u0442\u043e. \u041f\u0435\u0440\u0432\u044b\u0439 **** \u0432\u0430\u0440\u0438\u0430\u043d\u0442 - \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u044c Maven \u0432 \u0432\u0430\u0448 \u043f\u0440\u043e\u0435\u043a\u0442. \u041f\u0440\u043e\u0441\u0442\u043e \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u0442\u0435 \u0444\u0430\u0439\u043b ",(0,l.kt)("inlineCode",{parentName:"p"},"pom.xml")," \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml",metastring:"url=/examples/tutorials/getting-started/pom.xml",url:"/examples/tutorials/getting-started/pom.xml"},'<?xml version="1.0" encoding="UTF-8"?>\n<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">\n  <modelVersion>4.0.0</modelVersion>\n\n  <groupId>io.activej</groupId>\n  <artifactId>tutorial-getting-started</artifactId>\n  <version>5.0-SNAPSHOT</version>\n\n  <name>Tutorials : Getting-Started</name>\n\n  <properties>\n    <maven.compiler.source>1.8</maven.compiler.source>\n    <maven.compiler.target>1.8</maven.compiler.target>\n  </properties>\n\n  <dependencies>\n    <dependency>\n      <groupId>io.activej</groupId>\n      <artifactId>activej-launchers-http</artifactId>\n      <version>${project.version}</version>\n    </dependency>\n    <dependency>\n      <groupId>ch.qos.logback</groupId>\n      <artifactId>logback-classic</artifactId>\n      <version>1.2.3</version>\n    </dependency>\n  </dependencies>\n</project>\n\n')),(0,l.kt)("p",null,"\u0412\u0442\u043e\u0440\u043e\u0439 *",(0,l.kt)("strong",{parentName:"p"},"* \u0432\u0430\u0440\u0438\u0430\u043d\u0442 - \u043a\u043b\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u0442\u044c ActiveJ ",(0,l.kt)("a",{parentName:"strong",href:"https://github.com/activej/activej/tree/v5.0-beta2"},"\u0441 GitHub"),", \u0438\u043c\u043f\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0435\u0433\u043e \u043a\u0430\u043a \u043f\u0440\u043e\u0435\u043a\u0442 Maven , \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c \u0432\u0435\u0442\u043a\u0443 "),(0,l.kt)(i.Z,{name:"currentVersion",mdxType:"Variable"}),"** \u0438 \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0441\u043a\u0440\u0438\u043f\u0442 \u0432 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0438 \u043f\u0440\u043e\u0435\u043a\u0442\u0430:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"./install.sh\n")),(0,l.kt)("p",null,"\u0417\u0430\u0442\u0435\u043c \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u0442\u0435 \u0444\u0430\u0439\u043b ",(0,l.kt)("inlineCode",{parentName:"p"},"pom.xml")," , \u043a\u0430\u043a \u0432 \u043f\u0440\u0438\u043c\u0435\u0440\u0435 \u0432\u044b\u0448\u0435. \u0423\u0431\u0435\u0434\u0438\u0442\u0435\u0441\u044c, \u0447\u0442\u043e SDK \u0432\u0430\u0448\u0435\u0433\u043e \u043f\u0440\u043e\u0435\u043a\u0442\u0430 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d \u043d\u0430 1.8."),(0,l.kt)("h3",{id:"2-\u043d\u0430\u043f\u0438\u0441\u0430\u0442\u044c-httphelloworldexample-\u043a\u043b\u0430\u0441\u0441"},"2. \u041d\u0430\u043f\u0438\u0441\u0430\u0442\u044c ",(0,l.kt)("inlineCode",{parentName:"h3"},"HttpHelloWorldExample")," \u043a\u043b\u0430\u0441\u0441"),(0,l.kt)("p",null,"\u041f\u043e\u0441\u043b\u0435 \u0442\u043e\u0433\u043e, \u043a\u0430\u043a \u0432\u044b \u0438\u043d\u0442\u0435\u0433\u0440\u0438\u0440\u0443\u0435\u0442\u0435 ActiveJ \u0432 \u0441\u0432\u043e\u0439 \u043f\u0440\u043e\u0435\u043a\u0442 \u043e\u0434\u043d\u0438\u043c \u0438\u0437 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u043d\u044b\u0445 \u0441\u043f\u043e\u0441\u043e\u0431\u043e\u0432, \u0437\u0430\u043f\u0438\u0448\u0438\u0442\u0435 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u043a\u043e\u0434 ",(0,l.kt)("inlineCode",{parentName:"p"},"HttpHelloWorldExample.java"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/tutorials/getting-started/src/main/java/HttpHelloWorldExample.java tag=EXAMPLE",url:"/examples/tutorials/getting-started/src/main/java/HttpHelloWorldExample.java",tag:"EXAMPLE"},'public final class HttpHelloWorldExample extends HttpServerLauncher {\n  @Provides\n  AsyncServlet servlet() {\n    return request -> HttpResponse.ok200().withPlainText("Hello World");\n  }\n\n  public static void main(String[] args) throws Exception {\n    Launcher launcher = new HttpHelloWorldExample();\n    launcher.launch(args);\n  }\n}\n')),(0,l.kt)("p",null,"\u0412\u043e-\u043f\u0435\u0440\u0432\u044b\u0445, \u043c\u044b \u0440\u0430\u0441\u0448\u0438\u0440\u044f\u0435\u043c ",(0,l.kt)("inlineCode",{parentName:"p"},"HttpHelloWorldExample")," \u0438\u0437 ",(0,l.kt)("inlineCode",{parentName:"p"},"HttpServerLauncher")," \u0434\u043b\u044f \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0436\u0438\u0437\u043d\u0435\u043d\u043d\u044b\u043c \u0446\u0438\u043a\u043b\u043e\u043c \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f. \u0412 \u044d\u0442\u043e\u043c \u043f\u0440\u0438\u043c\u0435\u0440\u0435 \u0435\u0434\u0438\u043d\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0435, \u0447\u0442\u043e \u0432\u0430\u0436\u043d\u043e \u0437\u043d\u0430\u0442\u044c \u043e \u0441\u0443\u043f\u0435\u0440\u043a\u043b\u0430\u0441\u0441\u0435, \u044d\u0442\u043e \u0442\u043e, \u0447\u0442\u043e \u043e\u043d \u0440\u0435\u0430\u043b\u0438\u0437\u0443\u0435\u0442 \u043c\u0435\u0442\u043e\u0434 ",(0,l.kt)("em",{parentName:"p"},"launch")," , \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0435\u0442 \u043d\u0430\u0448 \u0441\u0435\u0440\u0432\u0435\u0440."),(0,l.kt)("p",null,"\u0414\u0430\u043b\u0435\u0435 \u043c\u044b \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u043c ",(0,l.kt)("strong",{parentName:"p"},"AsyncServlet")," , \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u0442 ",(0,l.kt)("strong",{parentName:"p"},"HttpRequest"),"\u043e\u0442 \u043a\u043b\u0438\u0435\u043d\u0442\u043e\u0432, \u0441\u043e\u0437\u0434\u0430\u0435\u0442 ",(0,l.kt)("strong",{parentName:"p"},"HttpResponse"),"\u0438 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u0442 \u0438\u0445. ",(0,l.kt)("inlineCode",{parentName:"p"},"@Provides")," \u0430\u043d\u043d\u043e\u0442\u0430\u0446\u0438\u044f \u043e\u0437\u043d\u0430\u0447\u0430\u0435\u0442, \u0447\u0442\u043e \u0434\u0430\u043d\u043d\u044b\u0439 \u043c\u0435\u0442\u043e\u0434 \u0434\u043e\u0441\u0442\u0443\u043f\u0435\u043d \u0434\u043b\u044f \u043f\u0440\u0438\u0432\u044f\u0437\u043a\u0438 \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0441\u043b\u0443\u0448\u0430\u0442\u0435\u043b\u044f \u043a\u043e\u0440\u043d\u0435\u0432\u043e\u0439 \u043a\u043e\u043d\u0435\u0447\u043d\u043e\u0439 \u0442\u043e\u0447\u043a\u0438 HTTP."),(0,l.kt)("p",null,"\u0427\u0442\u043e\u0431\u044b \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u044c \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0443 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u043d\u044b\u0445 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432, \u043c\u044b \u043f\u0435\u0440\u0435\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u043c ",(0,l.kt)("em",{parentName:"p"},"\u043c\u0435\u0442\u043e\u0434 AsyncServlet.serve")," \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u043b\u044f\u043c\u0431\u0434\u044b. \u041c\u044b \u0441\u043e\u0437\u0434\u0430\u0435\u043c \u043e\u0431\u0435\u0449\u0430\u043d\u0438\u0435 \u0438\u0437 ",(0,l.kt)("strong",{parentName:"p"},"HttpResponse")," \u0441 \u043a\u043e\u0434\u043e\u043c ",(0,l.kt)("inlineCode",{parentName:"p"},"200"),' \u0438 \u0442\u0435\u043b\u043e\u043c "Hello World!". ActiveJ \u043f\u043e\u043b\u043d\u043e\u0441\u0442\u044c\u044e \u0430\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u044b\u0439, \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u043d\u0430\u0448\u0438 HTTP-\u0441\u0435\u0440\u0432\u043b\u0435\u0442\u044b \u0442\u043e\u0436\u0435 \u0430\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u044b\u0435. \u041f\u0440\u043e\u0441\u0442\u043e\u0439 ',(0,l.kt)("strong",{parentName:"p"},"HttpResponse")," \u043c\u043e\u0436\u043d\u043e \u0437\u0430\u043c\u0435\u043d\u0438\u0442\u044c \u043d\u0430 ",(0,l.kt)("a",{parentName:"p",href:"/ru/async-io/promise"},"Promise")," \u0438\u0437 ",(0,l.kt)("strong",{parentName:"p"},"HttpResponse")," , \u0447\u0442\u043e\u0431\u044b \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0435\u0433\u043e \u0430\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u044b\u043c."),(0,l.kt)("p",null,"\u041d\u0430\u043a\u043e\u043d\u0435\u0446, \u043c\u044b \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u043c \u043c\u0435\u0442\u043e\u0434 ",(0,l.kt)("em",{parentName:"p"},"main")," \u0438 \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0435\u043c \u043d\u0430\u0448 \u0441\u0435\u0440\u0432\u0435\u0440 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u043c\u0435\u0442\u043e\u0434\u0430 ",(0,l.kt)("em",{parentName:"p"},"launch")," . \u042d\u0442\u043e\u0442 \u043c\u0435\u0442\u043e\u0434 \u0438\u043d\u0436\u0435\u043a\u0442\u0438\u0440\u0443\u0435\u0442 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438, \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0435\u0442 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435, \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0435\u0442 \u0435\u0433\u043e \u0438 \u043e\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0435\u0442 \u043f\u0440\u0438 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0441\u0442\u0438."),(0,l.kt)("h3",{id:"3-\u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u0435-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435"},"3. \u0417\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435"),(0,l.kt)("p",null,"\u0422\u0435\u043f\u0435\u0440\u044c \u0434\u0430\u0432\u0430\u0439\u0442\u0435 \u043f\u0440\u043e\u0442\u0435\u0441\u0442\u0438\u0440\u0443\u0435\u043c \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435. \u0421\u043d\u0430\u0447\u0430\u043b\u0430 \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u0435 ",(0,l.kt)("em",{parentName:"p"},"HttpHelloWorldExample.main"),", \u0437\u0430\u0442\u0435\u043c \u043e\u0442\u043a\u0440\u043e\u0439\u0442\u0435 \u0432\u0430\u0448 \u043b\u044e\u0431\u0438\u043c\u044b\u0439 \u0431\u0440\u0430\u0443\u0437\u0435\u0440 \u0438 \u043f\u0435\u0440\u0435\u0439\u0434\u0438\u0442\u0435 \u043f\u043e \u0430\u0434\u0440\u0435\u0441\u0443 ",(0,l.kt)("a",{parentName:"p",href:"http://localhost:8080"},"localhost:8080")," \u0412\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u0435 ",(0,l.kt)("inlineCode",{parentName:"p"},"Hello World!")," \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435, \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u0430\u043d\u043d\u043e\u0435 \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u043c. \u041f\u043e\u0437\u0434\u0440\u0430\u0432\u043b\u044f\u0435\u043c, \u0432\u044b \u0442\u043e\u043b\u044c\u043a\u043e \u0447\u0442\u043e \u0441\u043e\u0437\u0434\u0430\u043b\u0438 \u0441\u0432\u043e\u0435 \u043f\u0435\u0440\u0432\u043e\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 ActiveJ!"),(0,l.kt)("h2",{id:"\u0447\u0442\u043e-\u0434\u0430\u043b\u044c\u0448\u0435"},"\u0427\u0442\u043e \u0434\u0430\u043b\u044c\u0448\u0435?"),(0,l.kt)("p",null,'\u0427\u0442\u043e\u0431\u044b \u0441\u0434\u0435\u043b\u0430\u0442\u044c ActiveJ \u0431\u043e\u043b\u0435\u0435 \u0443\u0434\u043e\u0431\u043d\u044b\u043c \u0434\u043b\u044f \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u043e\u0432, \u043c\u044b \u0441\u043e\u0437\u0434\u0430\u043b\u0438 \u0434\u0435\u0441\u044f\u0442\u043a\u0438 \u0443\u0447\u0435\u0431\u043d\u0438\u043a\u043e\u0432 \u0438 \u043f\u0440\u0438\u043c\u0435\u0440\u043e\u0432 \u0440\u0430\u0437\u043d\u043e\u0433\u043e \u043c\u0430\u0441\u0448\u0442\u0430\u0431\u0430, \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u044e\u0449\u0438\u0445 \u0431\u043e\u043b\u044c\u0448\u0438\u043d\u0441\u0442\u0432\u043e \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0435\u0439 \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u044b. \u041d\u0430\u0436\u043c\u0438\u0442\u0435 "\u0414\u0430\u043b\u0435\u0435", \u0447\u0442\u043e\u0431\u044b \u043f\u0435\u0440\u0435\u0439\u0442\u0438 \u043a \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u043c\u0443 \u0443\u0440\u043e\u043a\u0443. \u0412\u044b \u0442\u0430\u043a\u0436\u0435 \u043c\u043e\u0436\u0435\u0442\u0435 \u0441\u043d\u0430\u0447\u0430\u043b\u0430 \u0438\u0437\u0443\u0447\u0438\u0442\u044c ActiveJ ',(0,l.kt)("a",{parentName:"p",href:"/ru/boot/launcher"},"docs")," ."))}d.isMDXComponent=!0}}]);