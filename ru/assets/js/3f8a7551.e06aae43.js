"use strict";(self.webpackChunkactivejdocs=self.webpackChunkactivejdocs||[]).push([[3141],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),m=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=m(e.components);return a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=m(n),d=r,h=s["".concat(o,".").concat(d)]||s[d]||u[d]||c;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=s;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var m=2;m<c;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},77618:function(e,t,n){var a=n(67294),r=n(39962);t.Z=function(e){var t=e.url,n=e.text,c=e.isInline,i=void 0===c||c,l=e.children,o=(0,r.Z)().siteConfig,m=t.startsWith("/examples")?o.customFields.githubExamplesBranch:o.customFields.githubBranch;return a.createElement("a",{style:i?{}:{display:"block",marginBottom:"16px"},href:o.customFields.githubUrl+"/"+m+t,target:"_blank"},n||l)}},68973:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return m},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var a=n(87462),r=n(63366),c=(n(67294),n(3905)),i=n(77618),l=["components"],o={keywords:["java","java framework","\u0443\u0440\u043e\u043a","\u0440\u0443\u043a\u043e\u0432\u043e\u0434\u0441\u0442\u0432\u043e","memcached","rpc","\u043a\u043b\u0438\u0435\u043d\u0442-\u0441\u0435\u0440\u0432\u0435\u0440","\u0432\u0435\u0431-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435"],sidebar_label:"Memcached-like \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435",title:"ActiveJ RPC | \u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u0442\u0438\u043f\u0430 memcached \u0441 \u043f\u0440\u043e\u0442\u043e\u043a\u043e\u043b\u043e\u043c \u0441\u0432\u044f\u0437\u0438 RPC \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e ActiveJ RPC.",description:"\u0421\u043e\u0437\u0434\u0430\u0439\u0442\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435, \u043f\u043e\u0434\u043e\u0431\u043d\u043e\u0435 memcached, \u0441 \u043f\u0440\u043e\u0442\u043e\u043a\u043e\u043b\u043e\u043c \u0441\u0432\u044f\u0437\u0438 RPC, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f ActiveJ RPC."},m="Memcached-like \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435",p={unversionedId:"rpc/memcached-like-application",id:"rpc/memcached-like-application",isDocsHomePage:!1,title:"ActiveJ RPC | \u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u0442\u0438\u043f\u0430 memcached \u0441 \u043f\u0440\u043e\u0442\u043e\u043a\u043e\u043b\u043e\u043c \u0441\u0432\u044f\u0437\u0438 RPC \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e ActiveJ RPC.",description:"\u0421\u043e\u0437\u0434\u0430\u0439\u0442\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435, \u043f\u043e\u0434\u043e\u0431\u043d\u043e\u0435 memcached, \u0441 \u043f\u0440\u043e\u0442\u043e\u043a\u043e\u043b\u043e\u043c \u0441\u0432\u044f\u0437\u0438 RPC, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f ActiveJ RPC.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/rpc/memcached-like-application.mdx",sourceDirName:"rpc",slug:"/rpc/memcached-like-application",permalink:"/ru/rpc/memcached-like-application",tags:[],version:"current",frontMatter:{keywords:["java","java framework","\u0443\u0440\u043e\u043a","\u0440\u0443\u043a\u043e\u0432\u043e\u0434\u0441\u0442\u0432\u043e","memcached","rpc","\u043a\u043b\u0438\u0435\u043d\u0442-\u0441\u0435\u0440\u0432\u0435\u0440","\u0432\u0435\u0431-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435"],sidebar_label:"Memcached-like \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435",title:"ActiveJ RPC | \u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u0442\u0438\u043f\u0430 memcached \u0441 \u043f\u0440\u043e\u0442\u043e\u043a\u043e\u043b\u043e\u043c \u0441\u0432\u044f\u0437\u0438 RPC \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e ActiveJ RPC.",description:"\u0421\u043e\u0437\u0434\u0430\u0439\u0442\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435, \u043f\u043e\u0434\u043e\u0431\u043d\u043e\u0435 memcached, \u0441 \u043f\u0440\u043e\u0442\u043e\u043a\u043e\u043b\u043e\u043c \u0441\u0432\u044f\u0437\u0438 RPC, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f ActiveJ RPC."},sidebar:"docs",previous:{title:"\u0425\u0440\u0430\u043d\u0435\u043d\u0438\u0435 \u043a\u043b\u044e\u0447\u0435\u0439-\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439",permalink:"/ru/rpc/key-value-storage"},next:{title:"\u041e\u0431\u0437\u043e\u0440",permalink:"/ru/fs"}},u=[{value:"\u041c\u043e\u0434\u0443\u043b\u0438 \u043a\u043b\u0438\u0435\u043d\u0442\u0430 \u0438 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 Memcached",id:"\u043c\u043e\u0434\u0443\u043b\u0438-\u043a\u043b\u0438\u0435\u043d\u0442\u0430-\u0438-\u0441\u0435\u0440\u0432\u0435\u0440\u0430-memcached",children:[]},{value:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u043a\u043b\u0438\u0435\u043d\u0442\u0430 \u0438 \u0441\u0435\u0440\u0432\u0435\u0440\u0430",id:"\u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435-\u043a\u043b\u0438\u0435\u043d\u0442\u0430-\u0438-\u0441\u0435\u0440\u0432\u0435\u0440\u0430",children:[]},{value:"\u0417\u0430\u043f\u0443\u0441\u043a \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f",id:"\u0437\u0430\u043f\u0443\u0441\u043a-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f",children:[]}],s={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,l);return(0,c.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"memcached-like-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435"},"Memcached-like \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435"),(0,c.kt)("p",null,"\u0412 \u044d\u0442\u043e\u043c \u0440\u0443\u043a\u043e\u0432\u043e\u0434\u0441\u0442\u0432\u0435 \u043c\u044b \u0441\u043e\u0437\u0434\u0430\u0434\u0438\u043c \u043a\u043b\u0438\u0435\u043d\u0442-\u0441\u0435\u0440\u0432\u0435\u0440\u043d\u043e\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0442\u0438\u043f\u0430 memcached, \u043e\u0441\u043d\u043e\u0432\u0430\u043d\u043d\u043e\u0435 \u043d\u0430 \u043f\u0440\u043e\u0442\u043e\u043a\u043e\u043b\u0435 \u043e\u0431\u043c\u0435\u043d\u0430 \u0434\u0430\u043d\u043d\u044b\u043c\u0438 RPC \u0438 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0438 ActiveJ."),(0,c.kt)("p",null,"\u041f\u043e\u043b\u043d\u044b\u0435 \u043f\u0440\u0438\u043c\u0435\u0440 \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043d\u0430\u0439\u0442\u0438 \u043d\u0430 ",(0,c.kt)(i.Z,{text:"GitHub",url:"/examples/cloud/rpc/src/main/java/memcached",mdxType:"Githublink"}),"."),(0,c.kt)("h2",{id:"\u043c\u043e\u0434\u0443\u043b\u0438-\u043a\u043b\u0438\u0435\u043d\u0442\u0430-\u0438-\u0441\u0435\u0440\u0432\u0435\u0440\u0430-memcached"},"\u041c\u043e\u0434\u0443\u043b\u0438 \u043a\u043b\u0438\u0435\u043d\u0442\u0430 \u0438 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 Memcached"),(0,c.kt)("p",null,"\u041f\u0440\u0435\u0436\u0434\u0435 \u0432\u0441\u0435\u0433\u043e, \u0440\u0430\u0441\u0441\u043c\u043e\u0442\u0440\u0438\u043c \u043d\u0430\u0447\u0430\u043b\u044c\u043d\u0443\u044e \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044e ActiveJ RPC \u044d\u0442\u0438\u0445 \u043c\u043e\u0434\u0443\u043b\u0435\u0439, \u043f\u043e\u0441\u043a\u043e\u043b\u044c\u043a\u0443 \u043d\u0430\u0448\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0431\u0443\u0434\u0435\u0442 \u043f\u043e\u0441\u0442\u0440\u043e\u0435\u043d\u043e \u0438\u0445 \u043f\u043e\u043c\u043e\u0449\u044c\u044e:"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("strong",{parentName:"li"},(0,c.kt)(i.Z,{text:"MemcacheServerModule",url:"/extra/cloud-memcache/src/main/java/io/activej/memcache/server/MemcacheServerModule.java",mdxType:"Githublink"}))," \u044d\u043a\u0441\u043f\u043e\u0440\u0442\u0438\u0440\u0443\u0435\u0442 ",(0,c.kt)("strong",{parentName:"li"},"RpcServer")," \u0434\u043b\u044f \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 ",(0,c.kt)("inlineCode",{parentName:"li"},"get")," \u0438 ",(0,c.kt)("inlineCode",{parentName:"li"},"put")," .  \u0414\u043b\u044f \u0437\u0430\u043f\u0443\u0441\u043a\u0430 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u0445 \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u0432 \u043d\u0430 \u043e\u0434\u043d\u043e\u0439 JVM \u043c\u044b \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u043c ",(0,c.kt)(i.Z,{text:"MemcacheMultiServerModule",url:"/examples/cloud/rpc/src/main/java/memcached/MemcacheMultiServerModule.java",mdxType:"Githublink"})," \u0441 \u0438\u043d\u0442\u0435\u0433\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u043c\u0438 ",(0,c.kt)("a",{parentName:"li",href:"/ru/boot/workers"},"WorkerPools"),"."),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("strong",{parentName:"li"},(0,c.kt)(i.Z,{text:"MemcacheClientModule",url:"/extra/cloud-memcache/src/main/java/io/activej/memcache/client/MemcacheClientModule.java",mdxType:"Githublink"}))," \u0443\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0435\u0442 \u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u044e \u0445\u044d\u0448\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f ",(0,c.kt)("a",{parentName:"li",href:"/ru/rpc/basic-examples#rendezvous-hashing-strategy"},"Rendezvous Hashing Strategy")," \u0434\u043b\u044f \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 \u043c\u0435\u0436\u0434\u0443 \u0448\u0430\u0440\u0434\u0430\u043c\u0438 \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u0432.")),(0,c.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,c.kt)("div",{parentName:"div",className:"admonition-heading"},(0,c.kt)("h5",{parentName:"div"},(0,c.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,c.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,c.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,c.kt)("div",{parentName:"div",className:"admonition-content"},(0,c.kt)("p",{parentName:"div"},"\u0414\u0430\u043d\u043d\u0430\u044f \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f \u043e\u0445\u0432\u0430\u0442\u044b\u0432\u0430\u0435\u0442 \u0442\u043e\u043b\u044c\u043a\u043e \u0431\u0430\u0437\u043e\u0432\u043e\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435. \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0442\u044c \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u043f\u043e \u043c\u0435\u0440\u0435 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0441\u0442\u0438."))),(0,c.kt)("h2",{id:"\u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435-\u043a\u043b\u0438\u0435\u043d\u0442\u0430-\u0438-\u0441\u0435\u0440\u0432\u0435\u0440\u0430"},"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u043a\u043b\u0438\u0435\u043d\u0442\u0430 \u0438 \u0441\u0435\u0440\u0432\u0435\u0440\u0430"),(0,c.kt)("p",null,"\u0414\u0430\u0432\u0430\u0439\u0442\u0435 \u043d\u0430\u043f\u0438\u0448\u0435\u043c \u0441\u0432\u043e\u0439 \u0441\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0439 \u0441\u0435\u0440\u0432\u0435\u0440 ",(0,c.kt)(i.Z,{text:"MemcacheLikeServer",url:"/examples/cloud/rpc/src/main/java/memcached/MemcacheLikeServer.java",mdxType:"Githublink"})," . \u041c\u044b \u0442\u0430\u043a\u0436\u0435 \u0431\u0443\u0434\u0435\u043c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c ",(0,c.kt)("a",{parentName:"p",href:"/ru/boot/launcher"},(0,c.kt)("strong",{parentName:"a"},"ActiveJ Launcher"))," \u0434\u043b\u044f \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0436\u0438\u0437\u043d\u0435\u043d\u043d\u044b\u043c \u0446\u0438\u043a\u043b\u043e\u043c \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u0438 \u043c\u043e\u043b\u043d\u0438\u0435\u043d\u043e\u0441\u043d\u0443\u044e \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0443 Dependency Injection ",(0,c.kt)("a",{parentName:"p",href:"/ru/inject"},"ActiveJ Inject"),":"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/cloud/rpc/src/main/java/memcached/MemcacheLikeServer.java tag=REGION_1",url:"/examples/cloud/rpc/src/main/java/memcached/MemcacheLikeServer.java",tag:"REGION_1"},'public class MemcacheLikeServer extends Launcher {\n  @Inject\n  WorkerPool.Instances<RpcServer> instances;\n\n  @Provides\n  WorkerPool workerPool(WorkerPools workerPools) {\n    return workerPools.createPool(3);\n  }\n\n  @Provides\n  Config config() {\n    return Config.create()\n        .with("memcache.buffers", "4")\n        .with("memcache.bufferCapacity", "64mb");\n  }\n\n  @Override\n  protected Module getModule() {\n    return ModuleBuilder.create()\n        .install(ServiceGraphModule.create())\n        .install(MemcacheMultiServerModule.create())\n        .install(WorkerPoolModule.create())\n        .build();\n  }\n\n  @Override\n  protected void run() throws Exception {\n    awaitShutdown();\n  }\n\n  public static void main(String[] args) throws Exception {\n    MemcacheLikeServer server = new MemcacheLikeServer();\n    server.launch(args);\n  }\n}\n')),(0,c.kt)("p",null,"\u041f\u043e\u0441\u043a\u043e\u043b\u044c\u043a\u0443 \u043c\u044b \u0440\u0430\u0441\u0448\u0438\u0440\u044f\u0435\u043c ",(0,c.kt)("strong",{parentName:"p"},"Launcher"),", \u043d\u0430\u043c \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043f\u0435\u0440\u0435\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u044c 2 \u043c\u0435\u0442\u043e\u0434\u0430: ",(0,c.kt)("em",{parentName:"p"},"getModule")," \u0434\u043b\u044f \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u044f ",(0,c.kt)("a",{parentName:"p",href:"/ru/boot/servicegraph"},(0,c.kt)("strong",{parentName:"a"},"ServiceGraphModule"))," \u0438 ",(0,c.kt)("em",{parentName:"p"},"run")," \u0434\u043b\u044f \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u044f \u043e\u0441\u043d\u043e\u0432\u043d\u043e\u0439 \u043b\u043e\u0433\u0438\u043a\u0438 \u043f\u0440\u0438\u043c\u0435\u0440\u0430."),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0448\u0430\u0440\u0434\u043e\u0432 \u0440\u0430\u0432\u043d\u043e \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u0443",(0,c.kt)(i.Z,{text:"workerPools",url:"/boot-workers/src/main/java/io/activej/worker/WorkerPools.java",mdxType:"Githublink"})),(0,c.kt)("li",{parentName:"ul"},'\u0427\u0442\u043e \u043a\u0430\u0441\u0430\u0435\u0442\u0441\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438 "memcached" - \u043c\u044b \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u043c \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0431\u0443\u0444\u0435\u0440\u043e\u0432 \u0438 \u0438\u0445 \u0435\u043c\u043a\u043e\u0441\u0442\u044c \u0432 \u0444\u0430\u0439\u043b\u0435 ',(0,c.kt)(i.Z,{text:"Config",url:"/boot-config/src/main/java/io/activej/config/Config.java",mdxType:"Githublink"})),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("strong",{parentName:"li"},"Config")," \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0434\u043b\u044f \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0432\u0441\u0435\u0433\u043e, \u0447\u0442\u043e \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e ",(0,c.kt)(i.Z,{text:"MemcacheMultiServerModule",url:"/examples/cloud/rpc/src/main/java/memcached/MemcacheMultiServerModule.java",mdxType:"Githublink"})," \u0434\u043b\u044f \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u043f\u0440\u0435\u0434\u0441\u0442\u043e\u044f\u0449\u0438\u0445 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432.\n\u041d\u0430\u0448 ",(0,c.kt)(i.Z,{text:"MemcacheLikeClient",url:"/examples/cloud/rpc/src/main/java/memcached/MemcacheLikeClient.java",mdxType:"Githublink"})," \u0431\u0443\u0434\u0435\u0442 \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u0442\u044c ",(0,c.kt)("inlineCode",{parentName:"li"},"put")," \u0438 ",(0,c.kt)("inlineCode",{parentName:"li"},"get")," \u0437\u0430\u043f\u0440\u043e\u0441\u044b:")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/cloud/rpc/src/main/java/memcached/MemcacheLikeClient.java tag=REGION_1",url:"/examples/cloud/rpc/src/main/java/memcached/MemcacheLikeClient.java",tag:"REGION_1"},'public class MemcacheLikeClient extends Launcher {\n  @Provides\n  Eventloop eventloop() {\n    return Eventloop.create();\n  }\n\n  @Provides\n  RawMemcacheClientAdapter rawMemcacheClientAdapter(RawMemcacheClient client) {\n    return new RawMemcacheClientAdapter(client);\n  }\n\n  @Provides\n  Config config() {\n    return Config.create()\n        .with("protocol.compression", "false")\n        .with("client.addresses", "localhost:9000, localhost:9001, localhost:9002");\n  }\n\n  @Inject\n  RawMemcacheClientAdapter client;\n\n  @Inject\n  Eventloop eventloop;\n\n  @Override\n  protected Module getModule() {\n    return ModuleBuilder.create()\n        .install(ServiceGraphModule.create())\n        .install(MemcacheClientModule.create())\n        .install(ConfigModule.create()\n            .withEffectiveConfigLogger())\n        .build();\n  }\n\n  @Override\n  protected void run() throws ExecutionException, InterruptedException {\n    String message = "Hello, Memcached Server";\n\n    System.out.println();\n    CompletableFuture<Void> future = eventloop.submit(() ->\n        sequence(\n            () -> Promises.all(range(0, 25).mapToObj(i ->\n                client.put(i, message))),\n            () -> Promises.all(range(0, 25).mapToObj(i ->\n                client.get(i).whenResult(res -> System.out.println(i + " : " + res))))));\n    future.get();\n    System.out.println();\n  }\n\n  public static void main(String[] args) throws Exception {\n    Launcher client = new MemcacheLikeClient();\n    client.launch(args);\n  }\n}\n')),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"\u041f\u043e\u0441\u043a\u043e\u043b\u044c\u043a\u0443 ",(0,c.kt)("strong",{parentName:"li"},"MemcacheClientModule")," \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 Rendezvous Hashing Strategy \u0434\u043b\u044f \u0434\u043e\u0441\u0442\u0438\u0436\u0435\u043d\u0438\u044f \u0441\u043e\u0433\u043b\u0430\u0441\u0438\u044f \u0434\u043b\u044f \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 \u043c\u0435\u0436\u0434\u0443 \u0448\u0430\u0440\u0434\u0430\u043c\u0438 \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u0432, \u0432 \u043a\u043b\u0438\u0435\u043d\u0442\u0435 \u043d\u0430\u043c \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0430\u0434\u0440\u0435\u0441\u0430 \u044d\u0442\u0438\u0445 \u0448\u0430\u0440\u0434\u043e\u0432 - ",(0,c.kt)("inlineCode",{parentName:"li"},"9001"),", ",(0,c.kt)("inlineCode",{parentName:"li"},"9002"),", \u0438 ",(0,c.kt)("inlineCode",{parentName:"li"},"9003")," \u043f\u043e\u0440\u0442\u044b."),(0,c.kt)("li",{parentName:"ul"},"\u0412 ",(0,c.kt)("a",{parentName:"li",href:"/ru/async-io/eventloop"},(0,c.kt)("strong",{parentName:"a"},"Eventloop"))," \u043c\u044b \u043f\u0440\u043e\u0441\u0438\u043c ",(0,c.kt)("inlineCode",{parentName:"li"},"\u043f\u043e\u043c\u0435\u0441\u0442\u0438\u0442\u044c")," \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u0432 \u0442\u0435\u043a\u0443\u0449\u0438\u0439 ",(0,c.kt)("em",{parentName:"li"},"i")," \u043c\u0430\u0441\u0441\u0438\u0432 ",(0,c.kt)("em",{parentName:"li"},"\u0431\u0430\u0439\u0442\u043e\u0432","[i]")," , \u0438 ",(0,c.kt)("inlineCode",{parentName:"li"},"\u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c")," \u0435\u0433\u043e \u043e\u0431\u0440\u0430\u0442\u043d\u043e \u0438\u0437 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u0439 \u044f\u0447\u0435\u0439\u043a\u0438."),(0,c.kt)("li",{parentName:"ul"},"\u0422\u0430\u043a\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c, \u043a\u043b\u0438\u0435\u043d\u0442 \u0431\u0443\u0434\u0435\u0442 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0442\u044c \u044d\u0442\u0438 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438 \u0430\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u043e \u0434\u043b\u044f \u0442\u0440\u0435\u0445 \u0448\u0430\u0440\u0434\u043e\u0432, \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u0432 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0435 \u043c\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u043c \u043d\u0435\u0443\u043f\u043e\u0440\u044f\u0434\u043e\u0447\u0435\u043d\u043d\u044b\u0439 \u0432\u044b\u0445\u043e\u0434\u043d\u043e\u0439 \u0431\u043b\u043e\u043a."),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("strong",{parentName:"li"},(0,c.kt)(i.Z,{text:"RawMemcacheClientAdapter",url:"/examples/cloud/rpc/src/main/java/memcached/RawMemcacheClientAdapter.java",mdxType:"Githublink"}))," \u044d\u0442\u043e \u043a\u043b\u0430\u0441\u0441, \u0441\u043e\u0437\u0434\u0430\u043d\u043d\u044b\u0439 \u0432\u0440\u0443\u0447\u043d\u0443\u044e. \u041e\u043d \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 ",(0,c.kt)(i.Z,{text:"RawMemcacheClient",url:"/extra/cloud-memcache/src/main/java/io/activej/memcache/client/RawMemcacheClient.java",mdxType:"Githublink"})," (\u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044e ",(0,c.kt)(i.Z,{text:"MemcacheClient",url:"/extra/cloud-memcache/src/main/java/io/activej/memcache/client/MemcacheClient.java",mdxType:"Githublink"})," ) \u0438 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u0442 \u043b\u043e\u0433\u0438\u043a\u0443 \u043c\u0435\u0442\u043e\u0434\u043e\u0432 ",(0,c.kt)("inlineCode",{parentName:"li"},"put")," \u0438 ",(0,c.kt)("inlineCode",{parentName:"li"},"get")," \u0434\u043b\u044f \u043d\u0430\u0448\u0435\u0433\u043e ",(0,c.kt)("strong",{parentName:"li"},"MemcacheLikeClient"),".")),(0,c.kt)("h2",{id:"\u0437\u0430\u043f\u0443\u0441\u043a-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f"},"\u0417\u0430\u043f\u0443\u0441\u043a \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"\u0421\u043d\u0430\u0447\u0430\u043b\u0430 \u043e\u0442\u043a\u0440\u043e\u0439\u0442\u0435 \u0438 \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u0435 ",(0,c.kt)("strong",{parentName:"li"},"MemcacheLikeServer")," , \u0447\u0442\u043e\u0431\u044b \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c \u0441\u0435\u0440\u0432\u0435\u0440;"),(0,c.kt)("li",{parentName:"ul"},"\u0414\u043b\u044f \u0437\u0430\u043f\u0443\u0441\u043a\u0430 \u043a\u043b\u0438\u0435\u043d\u0442\u0430 \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u0435 ",(0,c.kt)("inlineCode",{parentName:"li"},"main()")," \u043c\u0435\u0442\u043e\u0434 ",(0,c.kt)("strong",{parentName:"li"},"MemcacheLikeClient"),";\n\u0412\u044b \u0443\u0432\u0438\u0434\u0438\u0442\u0435 \u043f\u0440\u0438\u043c\u0435\u0440\u043d\u043e \u0442\u0430\u043a\u043e\u0439 \u0436\u0435 \u0432\u044b\u0432\u043e\u0434 \u0432 \u043a\u043e\u043d\u0441\u043e\u043b\u0438 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 (",(0,c.kt)("inlineCode",{parentName:"li"},"...")," \u043e\u043f\u0443\u0441\u043a\u0430\u0435\u0442 \u043f\u043e\u0434\u043e\u0431\u043d\u044b\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f):")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-text"},"Server on port #9000 accepted message!\nServer on port #9000 accepted message!\n...\nServer on port #9000 accepted message!\nServer on port #9002 accepted message!\nServer on port #9002 accepted message!\n...\nServer on port #9002 accepted message!\nServer on port #9001 accepted message!\n...\nServer on port #9001 accepted message!\n")),(0,c.kt)("p",null,"\u0412 \u043a\u043e\u043d\u0441\u043e\u043b\u0438 \u043a\u043b\u0438\u0435\u043d\u0442\u0430 \u0432\u044b \u0443\u0432\u0438\u0434\u0438\u0442\u0435 \u0430\u043d\u0430\u043b\u043e\u0433\u0438\u0447\u043d\u044b\u0439 \u0432\u044b\u0432\u043e\u0434, \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0430\u044e\u0449\u0438\u0439, \u0447\u0442\u043e \u043a\u043b\u0438\u0435\u043d\u0442 \u043f\u043e\u043b\u0443\u0447\u0438\u043b \u0430\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u044b\u0435 \u043e\u0442\u0432\u0435\u0442\u044b \u043e\u0442 \u0441\u0435\u0440\u0432\u0435\u0440\u0430:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-text"},"0 : Hello, Memcached Server\n3 : Hello, Memcached Server\n4 : Hello, Memcached Server\n...\n11 : Hello, Memcached Server\n13 : Hello, Memcached Server\n...\n20 : Hello, Memcached Server\n21 : Hello, Memcached Server\n24 : Hello, Memcached Server\n...\n17 : Hello, Memcached Server\n19 : Hello, Memcached Server\n")))}d.isMDXComponent=!0}}]);