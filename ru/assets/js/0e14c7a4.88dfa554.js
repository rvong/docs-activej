"use strict";(self.webpackChunkactivejdocs=self.webpackChunkactivejdocs||[]).push([[4154],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return u}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),c=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(a),u=r,v=m["".concat(p,".").concat(u)]||m[u]||d[u]||i;return a?n.createElement(v,o(o({ref:t},s),{},{components:a})):n.createElement(v,o({ref:t},s))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},77618:function(e,t,a){var n=a(67294),r=a(39962);t.Z=function(e){var t=e.url,a=e.text,i=e.isInline,o=void 0===i||i,l=e.children,p=(0,r.Z)().siteConfig,c=t.startsWith("/examples")?p.customFields.githubExamplesBranch:p.customFields.githubBranch;return n.createElement("a",{style:o?{}:{display:"block",marginBottom:"16px"},href:p.customFields.githubUrl+"/"+c+t,target:"_blank"},a||l)}},77815:function(e,t,a){a(67294);var n=a(39962);t.Z=function(e){var t=e.name,a=(0,n.Z)().siteConfig;if(!t)throw new Error("Variable name is required");if(void 0===a.customFields[t])throw new Error("Variable "+t+" not exist");return a.customFields[t]}},53428:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return m},default:function(){return v}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),o=a(77618),l=a(77815),p=["components"],c={title:"ActiveJ | \u0412\u0430\u043b\u0438\u0434\u0430\u0446\u0438\u044f \u0444\u043e\u0440\u043c\u044b \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e HTTP-\u0434\u0435\u043a\u043e\u0434\u0435\u0440\u0430",sidebar_label:"HTTP-\u0434\u0435\u043a\u043e\u0434\u0435\u0440",keywords:["java","java \u0434\u043b\u044f \u043d\u0430\u0447\u0438\u043d\u0430\u044e\u0449\u0438\u0445","java framework","\u0440\u0443\u043a\u043e\u0432\u043e\u0434\u0441\u0442\u0432\u043e","\u0443\u0447\u0435\u0431\u043d\u0438\u043a","\u0432\u0435\u0431-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435","\u0441\u0435\u0440\u0432\u0435\u0440","\u0441\u0435\u0440\u0432\u043b\u0435\u0442","spring","spring \u0430\u043b\u044c\u0442\u0435\u0440\u043d\u0430\u0442\u0438\u0432\u0430","netty \u0430\u043b\u044c\u0442\u0435\u0440\u043d\u0430\u0442\u0438\u0432\u0430","jetty \u0430\u043b\u044c\u0442\u0435\u0440\u043d\u0430\u0442\u0438\u0432\u0430","\u0434\u0435\u043a\u043e\u0434\u0435\u0440","mvc","\u0432\u0430\u043b\u0438\u0434\u0430\u0446\u0438\u044f \u0444\u043e\u0440\u043c\u044b","async"],description:"\u0421\u043e\u0437\u0434\u0430\u0439\u0442\u0435 \u0430\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u044b\u0439 Java-\u0441\u0435\u0440\u0432\u043b\u0435\u0442, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043c\u043e\u0436\u0435\u0442 \u043e\u0431\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0442\u044c \u0444\u043e\u0440\u043c\u0443 \u0432\u0430\u043b\u0438\u0434\u0430\u0446\u0438\u0438 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432 ActiveJ."},s="\u0412\u0430\u043b\u0438\u0434\u0430\u0446\u0438\u044f \u0444\u043e\u0440\u043c\u044b \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e HTTP-\u0434\u0435\u043a\u043e\u0434\u0435\u0440\u0430",d={unversionedId:"tutorials/http-decoder",id:"tutorials/http-decoder",isDocsHomePage:!1,title:"ActiveJ | \u0412\u0430\u043b\u0438\u0434\u0430\u0446\u0438\u044f \u0444\u043e\u0440\u043c\u044b \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e HTTP-\u0434\u0435\u043a\u043e\u0434\u0435\u0440\u0430",description:"\u0421\u043e\u0437\u0434\u0430\u0439\u0442\u0435 \u0430\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u044b\u0439 Java-\u0441\u0435\u0440\u0432\u043b\u0435\u0442, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043c\u043e\u0436\u0435\u0442 \u043e\u0431\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0442\u044c \u0444\u043e\u0440\u043c\u0443 \u0432\u0430\u043b\u0438\u0434\u0430\u0446\u0438\u0438 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432 ActiveJ.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/tutorials/http-decoder.mdx",sourceDirName:"tutorials",slug:"/tutorials/http-decoder",permalink:"/ru/tutorials/http-decoder",tags:[],version:"current",frontMatter:{title:"ActiveJ | \u0412\u0430\u043b\u0438\u0434\u0430\u0446\u0438\u044f \u0444\u043e\u0440\u043c\u044b \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e HTTP-\u0434\u0435\u043a\u043e\u0434\u0435\u0440\u0430",sidebar_label:"HTTP-\u0434\u0435\u043a\u043e\u0434\u0435\u0440",keywords:["java","java \u0434\u043b\u044f \u043d\u0430\u0447\u0438\u043d\u0430\u044e\u0449\u0438\u0445","java framework","\u0440\u0443\u043a\u043e\u0432\u043e\u0434\u0441\u0442\u0432\u043e","\u0443\u0447\u0435\u0431\u043d\u0438\u043a","\u0432\u0435\u0431-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435","\u0441\u0435\u0440\u0432\u0435\u0440","\u0441\u0435\u0440\u0432\u043b\u0435\u0442","spring","spring \u0430\u043b\u044c\u0442\u0435\u0440\u043d\u0430\u0442\u0438\u0432\u0430","netty \u0430\u043b\u044c\u0442\u0435\u0440\u043d\u0430\u0442\u0438\u0432\u0430","jetty \u0430\u043b\u044c\u0442\u0435\u0440\u043d\u0430\u0442\u0438\u0432\u0430","\u0434\u0435\u043a\u043e\u0434\u0435\u0440","mvc","\u0432\u0430\u043b\u0438\u0434\u0430\u0446\u0438\u044f \u0444\u043e\u0440\u043c\u044b","async"],description:"\u0421\u043e\u0437\u0434\u0430\u0439\u0442\u0435 \u0430\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u044b\u0439 Java-\u0441\u0435\u0440\u0432\u043b\u0435\u0442, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043c\u043e\u0436\u0435\u0442 \u043e\u0431\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0442\u044c \u0444\u043e\u0440\u043c\u0443 \u0432\u0430\u043b\u0438\u0434\u0430\u0446\u0438\u0438 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432 ActiveJ."},sidebar:"tutorials",previous:{title:"\u0418\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044f \u0434\u0432\u0438\u0436\u043a\u0430 \u0448\u0430\u0431\u043b\u043e\u043d\u043e\u0432",permalink:"/ru/tutorials/template-engine-integration"},next:{title:"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f \u0438 \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0441\u0435\u0441\u0441\u0438\u044f\u043c\u0438",permalink:"/ru/tutorials/authorization-tutorial"}},m=[{value:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 <code>HttpDecoderExample</code> \u043a\u043b\u0430\u0441\u0441\u0430",id:"\u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435-httpdecoderexample-\u043a\u043b\u0430\u0441\u0441\u0430",children:[]},{value:"\u0417\u0430\u043f\u0443\u0441\u043a \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f",id:"\u0437\u0430\u043f\u0443\u0441\u043a-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f",children:[]}],u={toc:m};function v(e){var t=e.components,a=(0,r.Z)(e,p);return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u0432\u0430\u043b\u0438\u0434\u0430\u0446\u0438\u044f-\u0444\u043e\u0440\u043c\u044b-\u0441-\u043f\u043e\u043c\u043e\u0449\u044c\u044e-http-\u0434\u0435\u043a\u043e\u0434\u0435\u0440\u0430"},"\u0412\u0430\u043b\u0438\u0434\u0430\u0446\u0438\u044f \u0444\u043e\u0440\u043c\u044b \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e HTTP-\u0434\u0435\u043a\u043e\u0434\u0435\u0440\u0430"),(0,i.kt)("p",null,"\u0412 \u044d\u0442\u043e\u043c \u043f\u0440\u0438\u043c\u0435\u0440\u0435 \u043c\u044b \u0441\u043e\u0437\u0434\u0430\u0434\u0438\u043c \u0430\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u044b\u0439 \u0441\u0435\u0440\u0432\u043b\u0435\u0442, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u0442 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u044b \u0432 \u0441\u043f\u0438\u0441\u043e\u043a, \u0440\u0430\u0437\u0431\u0438\u0440\u0430\u0435\u0442 \u0437\u0430\u043f\u0440\u043e\u0441\u044b \u0438 \u043e\u0431\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0435\u0442 \u0432\u0430\u043b\u0438\u0434\u0430\u0446\u0438\u044e \u0444\u043e\u0440\u043c\u044b \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e ",(0,i.kt)("inlineCode",{parentName:"p"},"Decoder"),". \u0420\u0430\u0441\u0441\u043c\u043e\u0442\u0440\u0438\u043c \u044d\u0442\u043e\u0442 \u043f\u0440\u0438\u043c\u0435\u0440 \u043a\u0430\u043a \u043a\u0440\u0430\u0442\u043a\u043e\u0435 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043f\u0430\u0442\u0442\u0435\u0440\u043d\u0430 MVC:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u0414\u043b\u044f \u043c\u043e\u0434\u0435\u043b\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u044f ",(0,i.kt)("inlineCode",{parentName:"li"},"Contact")," \u043c\u044b \u0441\u043e\u0437\u0434\u0430\u0434\u0438\u043c \u043e\u0431\u044b\u0447\u043d\u044b\u0439 Java-\u043a\u043b\u0430\u0441\u0441 \u0441 \u043f\u043e\u043b\u044f\u043c\u0438 (\u0438\u043c\u044f, \u0432\u043e\u0437\u0440\u0430\u0441\u0442, \u0430\u0434\u0440\u0435\u0441), \u043a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0442\u043e\u0440\u043e\u043c \u0438 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u043c\u0438 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430\u043c\u0438 \u043a \u043f\u043e\u043b\u044f\u043c."),(0,i.kt)("li",{parentName:"ul"},"\u0414\u043b\u044f \u0443\u043f\u0440\u043e\u0449\u0435\u043d\u0438\u044f \u043f\u0440\u0438\u043c\u0435\u0440\u0430 \u043c\u044b \u0431\u0443\u0434\u0435\u043c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c ",(0,i.kt)("inlineCode",{parentName:"li"},"ArrayList")," \u0434\u043b\u044f \u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 ",(0,i.kt)("inlineCode",{parentName:"li"},"Contact")," . \u0414\u043b\u044f \u044d\u0442\u043e\u0433\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441 ",(0,i.kt)("inlineCode",{parentName:"li"},"ContactDAO")," \u0438 \u0435\u0433\u043e \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f."),(0,i.kt)("li",{parentName:"ul"},"\u0414\u043b\u044f \u043f\u043e\u0441\u0442\u0440\u043e\u0435\u043d\u0438\u044f \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u043c\u044b \u0431\u0443\u0434\u0435\u043c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043e\u0434\u0438\u043d HTML-\u0444\u0430\u0439\u043b, \u0441\u043a\u043e\u043c\u043f\u0438\u043b\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0448\u0430\u0431\u043b\u043e\u043d\u0438\u0437\u0430\u0442\u043e\u0440\u0430 Mustache."),(0,i.kt)("li",{parentName:"ul"},"\u0412 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u043b\u0435\u0440\u0430 \u0431\u0443\u0434\u0435\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f ",(0,i.kt)("inlineCode",{parentName:"li"},"AsyncServlet")," . \u041c\u044b \u0442\u0430\u043a\u0436\u0435 \u0434\u043e\u0431\u0430\u0432\u0438\u043c ",(0,i.kt)("inlineCode",{parentName:"li"},"RoutingServlet")," \u0434\u043b\u044f \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u0438\u0437\u0430\u0446\u0438\u0438 \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u043e\u0433\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u043a \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u043e\u0439 \u043a\u043e\u043d\u0435\u0447\u043d\u043e\u0439 \u0442\u043e\u0447\u043a\u0435."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u0414\u0435\u043a\u043e\u0434\u0435\u0440")," \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0432\u0430\u043c \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u044b \u0434\u043b\u044f \u0440\u0430\u0437\u0431\u043e\u0440\u0430 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432.")),(0,i.kt)(o.Z,{isInline:!1,text:"See full example on GitHub",url:"/examples/tutorials/decoder/src/main/java",mdxType:"Githublink"}),(0,i.kt)("p",null,"\u0417\u0434\u0435\u0441\u044c \u043c\u044b \u0440\u0430\u0441\u0441\u043c\u043e\u0442\u0440\u0438\u043c \u0442\u043e\u043b\u044c\u043a\u043e \u043a\u043b\u0430\u0441\u0441 ",(0,i.kt)("inlineCode",{parentName:"p"},"HttpDecoderExample")," \u0441 ",(0,i.kt)("inlineCode",{parentName:"p"},"AsyncServlet")," , \u0442\u0430\u043a \u043a\u0430\u043a \u043e\u043d \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0441\u043f\u0435\u0446\u0438\u0444\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0434\u043b\u044f ActiveJ \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0438."),(0,i.kt)("h2",{id:"\u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435-httpdecoderexample-\u043a\u043b\u0430\u0441\u0441\u0430"},"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 ",(0,i.kt)("inlineCode",{parentName:"h2"},"HttpDecoderExample")," \u043a\u043b\u0430\u0441\u0441\u0430"),(0,i.kt)("p",null,"\u0421\u043e\u0437\u0434\u0430\u0434\u0438\u043c \u043a\u043b\u0430\u0441\u0441 ",(0,i.kt)("inlineCode",{parentName:"p"},"HttpDecoderExample")," , \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0440\u0430\u0441\u0448\u0438\u0440\u044f\u0435\u0442 ",(0,i.kt)("inlineCode",{parentName:"p"},"HttpServerLauncher"),". \u0420\u0430\u0441\u0448\u0438\u0440\u044f\u044f ",(0,i.kt)("inlineCode",{parentName:"p"},"HttpServerLauncher")," , \u043c\u044b \u043f\u043e\u0437\u0430\u0431\u043e\u0442\u0438\u043c\u0441\u044f \u043e \u0436\u0438\u0437\u043d\u0435\u043d\u043d\u043e\u043c \u0446\u0438\u043a\u043b\u0435 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u0438 \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0438 \u0441\u0435\u0440\u0432\u0438\u0441\u0430\u043c\u0438. \u0414\u0430\u043b\u0435\u0435 \u043c\u044b \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u043c \u0434\u0432\u0430 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0445 \u0430\u043d\u0430\u043b\u0438\u0437\u0430\u0442\u043e\u0440\u0430 \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 HTTP ",(0,i.kt)(o.Z,{url:"/core-http/src/main/java/io/activej/http/decoder/Decoder.java",mdxType:"Githublink"},(0,i.kt)("inlineCode",{parentName:"p"},"\u0414\u0435\u043a\u043e\u0434\u0435\u0440")),"- ",(0,i.kt)("inlineCode",{parentName:"p"},"ADDRESS_DECODER")," \u0438 ",(0,i.kt)("inlineCode",{parentName:"p"},"CONTACT_DECODER")," - \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0431\u0443\u0434\u0443\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u0434\u043b\u044f \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/tutorials/decoder/src/main/java/HttpDecoderExample.java tag=REGION_1",url:"/examples/tutorials/decoder/src/main/java/HttpDecoderExample.java",tag:"REGION_1"},'public final class HttpDecoderExample extends HttpServerLauncher {\n  private static final String SEPARATOR = "-";\n\n  private static final Decoder<Address> ADDRESS_DECODER = Decoder.\n      of(Address::new,\n          ofPost("title", "")\n              .validate(param -> !param.isEmpty(), "Title cannot be empty")\n      );\n\n  private static final Decoder<Contact> CONTACT_DECODER = Decoder.of(Contact::new,\n      ofPost("name")\n          .validate(name -> !name.isEmpty(), "Name cannot be empty"),\n      ofPost("age")\n          .map(Mapper.ofEx(Integer::valueOf, "Cannot decode age"))\n          .validate(age -> age >= 18, "Age must not be less than 18"),\n      ADDRESS_DECODER.withId("contact-address")\n  );\n')),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u0415\u0441\u043b\u0438 \u0432\u044b \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0437\u043d\u0430\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u0435 \u043e\u0431 \u0438\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u0438 \u0448\u0430\u0431\u043b\u043e\u043d\u0438\u0437\u0430\u0442\u043e\u0440\u043e\u0432, \u043f\u043e\u0441\u043c\u043e\u0442\u0440\u0438\u0442\u0435 ",(0,i.kt)("a",{parentName:"p",href:"/ru/tutorials/template-engine-integration"},"\u044d\u0442\u043e\u0442 \u043f\u0440\u0438\u043c\u0435\u0440.")))),(0,i.kt)("p",null,"\u0422\u0430\u043a\u0436\u0435 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0441\u043e\u0437\u0434\u0430\u0442\u044c ",(0,i.kt)("em",{parentName:"p"},"applyTemplate(Mustache mustache, Map<String, Object> scopes)")," \u043c\u0435\u0442\u043e\u0434 \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u043d\u043e\u0433\u043e \u0448\u0430\u0431\u043b\u043e\u043d\u0430 Mustache \u0437\u0430\u0434\u0430\u043d\u043d\u044b\u043c\u0438 \u0434\u0430\u043d\u043d\u044b\u043c\u0438:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/tutorials/decoder/src/main/java/HttpDecoderExample.java tag=REGION_5",url:"/examples/tutorials/decoder/src/main/java/HttpDecoderExample.java",tag:"REGION_5"},"private static ByteBuf applyTemplate(Mustache mustache, Map<String, Object> scopes) {\n  ByteBufWriter writer = new ByteBufWriter();\n  mustache.execute(writer, scopes);\n  return writer.getBuf();\n}\n")),(0,i.kt)("p",null,"\u0414\u0430\u043b\u0435\u0435, \u0434\u0430\u0432\u0430\u0439\u0442\u0435 \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u0438\u043c \u0444\u0430\u0431\u0440\u0438\u0447\u043d\u044b\u0439 \u043c\u0435\u0442\u043e\u0434 ",(0,i.kt)("strong",{parentName:"p"},"ContactDAOImpl")," :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/tutorials/decoder/src/main/java/HttpDecoderExample.java tag=REGION_6",url:"/examples/tutorials/decoder/src/main/java/HttpDecoderExample.java",tag:"REGION_6"},"@Provides\nContactDAO dao() {\n  return new ContactDAOImpl();\n}\n")),(0,i.kt)("p",null,"\u0422\u0435\u043f\u0435\u0440\u044c \u0443 \u043d\u0430\u0441 \u0435\u0441\u0442\u044c \u0432\u0441\u0435 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0435 \u0434\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f ",(0,i.kt)("inlineCode",{parentName:"p"},"AsyncServlet")," \u0434\u043b\u044f \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/tutorials/decoder/src/main/java/HttpDecoderExample.java tag=REGION_2",url:"/examples/tutorials/decoder/src/main/java/HttpDecoderExample.java",tag:"REGION_2"},'@Provides\nAsyncServlet mainServlet(ContactDAO contactDAO) {\n  Mustache contactListView = new DefaultMustacheFactory().compile("static/contactList.html");\n  return RoutingServlet.create()\n      .map("/", request ->\n          HttpResponse.ok200()\n              .withBody(applyTemplate(contactListView, mapOf("contacts", contactDAO.list()))))\n      .map(POST, "/add", request -> request.loadBody()\n          .map($ -> {\n            //[START REGION_3]\n            Either<Contact, DecodeErrors> decodedUser = CONTACT_DECODER.decode(request);\n            //[END REGION_3]\n            if (decodedUser.isLeft()) {\n              contactDAO.add(decodedUser.getLeft());\n            }\n            Map<String, Object> scopes = mapOf("contacts", contactDAO.list());\n            if (decodedUser.isRight()) {\n              scopes.put("errors", decodedUser.getRight().toMap(SEPARATOR));\n            }\n            return HttpResponse.ok200()\n                .withBody(applyTemplate(contactListView, scopes));\n          }));\n}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u0417\u0434\u0435\u0441\u044c \u043c\u044b \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u043c ",(0,i.kt)("inlineCode",{parentName:"li"},"AsyncServlet"),", \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u0442 ",(0,i.kt)("inlineCode",{parentName:"li"},"HttpRequests")," \u043e\u0442 \u043a\u043b\u0438\u0435\u043d\u0442\u043e\u0432, \u0441\u043e\u0437\u0434\u0430\u0435\u0442 ",(0,i.kt)("inlineCode",{parentName:"li"},"HttpResponses")," \u0432 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u043e\u0442 \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u0430 \u0438 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u0442 \u0438\u0445."),(0,i.kt)("li",{parentName:"ul"},"\u0412\u043d\u0443\u0442\u0440\u0438 ",(0,i.kt)("inlineCode",{parentName:"li"},"RoutingServlet")," \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u044b \u0434\u0432\u0430 \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u043d\u044b\u0445 \u043f\u0443\u0442\u0438. \u041f\u0435\u0440\u0432\u044b\u0439 \u0438\u0437 \u043d\u0438\u0445 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0437\u0430\u043f\u0440\u043e\u0441\u0430\u043c \u043a \u043a\u043e\u0440\u043d\u0435\u0432\u043e\u043c\u0443 \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u0443 ",(0,i.kt)("inlineCode",{parentName:"li"},'"/"')," - \u043e\u043d \u043f\u0440\u043e\u0441\u0442\u043e \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0435\u0442 \u0441\u043f\u0438\u0441\u043e\u043a \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u043e\u0432. \u0412\u0442\u043e\u0440\u043e\u0439, ",(0,i.kt)("inlineCode",{parentName:"li"},'"/add"')," - \u044d\u0442\u043e \u043c\u0435\u0442\u043e\u0434 HTTP ",(0,i.kt)("inlineCode",{parentName:"li"},"POST")," , \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u0442 \u0438\u043b\u0438 \u043e\u0442\u043a\u043b\u043e\u043d\u044f\u0435\u0442 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043d\u043e\u0432\u044b\u0445 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439. \u041c\u044b \u0431\u0443\u0434\u0435\u043c \u043e\u0431\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0442\u044c \u044d\u0442\u043e\u0442 \u0437\u0430\u043f\u0440\u043e\u0441 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0432\u044b\u0448\u0435\u0443\u043f\u043e\u043c\u044f\u043d\u0443\u0442\u043e\u0433\u043e HTTP ",(0,i.kt)("inlineCode",{parentName:"li"},"Decoder")," , \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f ",(0,i.kt)("inlineCode",{parentName:"li"},"decode(request)")," \u043c\u0435\u0442\u043e\u0434:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/tutorials/decoder/src/main/java/HttpDecoderExample.java tag=REGION_3",url:"/examples/tutorials/decoder/src/main/java/HttpDecoderExample.java",tag:"REGION_3"},"Either<Contact, DecodeErrors> decodedUser = CONTACT_DECODER.decode(request);\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u041b\u0438\u0431\u043e")," \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0441\u043e\u0431\u043e\u0439 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0434\u0432\u0443\u0445 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u044b\u0445 \u0442\u0438\u043f\u043e\u0432 \u0434\u0430\u043d\u043d\u044b\u0445 (",(0,i.kt)("inlineCode",{parentName:"li"},"Contact"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"DecodeErrors"),"). ",(0,i.kt)("strong",{parentName:"li"},"\u041b\u0438\u0431\u043e")," \u043b\u0438\u0431\u043e ",(0,i.kt)("strong",{parentName:"li"},"\u041b\u0435\u0432\u044b\u0439"),"(",(0,i.kt)("inlineCode",{parentName:"li"},"\u041a\u043e\u043d\u0442\u0430\u043a\u0442"),"), \u043b\u0438\u0431\u043e ",(0,i.kt)("strong",{parentName:"li"},"\u041f\u0440\u0430\u0432\u044b\u0439"),"(",(0,i.kt)("strong",{parentName:"li"},"DecodeErrors"),"). \u0414\u043b\u044f \u0442\u043e\u0433\u043e \u0447\u0442\u043e\u0431\u044b \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u044c, \u0431\u044b\u043b \u043b\u0438 \u0440\u0430\u0437\u0431\u043e\u0440 \u0443\u0441\u043f\u0435\u0448\u043d\u044b\u043c \u0438\u043b\u0438 \u043d\u0435\u0442, \u043c\u044b \u043f\u0440\u043e\u0432\u0435\u0440\u044f\u0435\u043c \u0435\u0433\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u043c\u0435\u0442\u043e\u0434\u043e\u0432 ",(0,i.kt)("inlineCode",{parentName:"li"},"isLeft()")," \u0438 ",(0,i.kt)("inlineCode",{parentName:"li"},"isRight()")," .\n\u041d\u0430\u043a\u043e\u043d\u0435\u0446, \u043d\u0430\u043f\u0438\u0448\u0438\u0442\u0435 \u043c\u0435\u0442\u043e\u0434 ",(0,i.kt)("inlineCode",{parentName:"li"},"main()")," , \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442 \u043d\u0430\u0448\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/tutorials/decoder/src/main/java/HttpDecoderExample.java tag=REGION_4",url:"/examples/tutorials/decoder/src/main/java/HttpDecoderExample.java",tag:"REGION_4"},"public static void main(String[] args) throws Exception {\n  Launcher launcher = new HttpDecoderExample();\n  launcher.launch(args);\n}\n")),(0,i.kt)("h2",{id:"\u0437\u0430\u043f\u0443\u0441\u043a-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f"},"\u0417\u0430\u043f\u0443\u0441\u043a \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f"),(0,i.kt)("p",null,"\u0415\u0441\u043b\u0438 \u0432\u044b \u0445\u043e\u0442\u0438\u0442\u0435 \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c \u043f\u0440\u0438\u043c\u0435\u0440, \u0432\u0430\u043c \u043d\u0443\u0436\u043d\u043e ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/activej/activej"},"\u043a\u043b\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u0442\u044c ActiveJ")," \u0441 GitHub \u0438 \u0438\u043c\u043f\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0435\u0433\u043e \u043a\u0430\u043a \u043f\u0440\u043e\u0435\u043a\u0442 Maven. \u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u0432\u0435\u0442\u043a\u0443 ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)(l.Z,{name:"currentVersion",mdxType:"Variable"})),". \u041f\u0435\u0440\u0435\u0434 \u0437\u0430\u043f\u0443\u0441\u043a\u043e\u043c \u043f\u0440\u0438\u043c\u0435\u0440\u0430 \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0441\u0431\u043e\u0440\u043a\u0443 \u043f\u0440\u043e\u0435\u043a\u0442\u0430 (",(0,i.kt)("strong",{parentName:"p"},"Ctrl F9")," \u0434\u043b\u044f IntelliJ IDEA)."),(0,i.kt)("p",null,"\u0417\u0430\u0442\u0435\u043c \u043e\u0442\u043a\u0440\u043e\u0439\u0442\u0435 ",(0,i.kt)("inlineCode",{parentName:"p"},"\u043a\u043b\u0430\u0441\u0441 HttpDecoderExample")," , \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f \u043f\u043e \u0430\u0434\u0440\u0435\u0441\u0443 ",(0,i.kt)("inlineCode",{parentName:"p"},"activej/examples/tutorials/decoder")," \u0438 \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u0435 \u0435\u0433\u043e ",(0,i.kt)("inlineCode",{parentName:"p"},"\u043c\u0435\u0442\u043e\u0434 main()")," . \u041e\u0442\u043a\u0440\u043e\u0439\u0442\u0435 \u0432\u0430\u0448 \u043b\u044e\u0431\u0438\u043c\u044b\u0439 \u0431\u0440\u0430\u0443\u0437\u0435\u0440 \u0438 \u043f\u0435\u0440\u0435\u0439\u0434\u0438\u0442\u0435 \u043f\u043e \u0430\u0434\u0440\u0435\u0441\u0443 ",(0,i.kt)("a",{parentName:"p",href:"http://localhost:8080"},"localhost:8080.")))}v.isMDXComponent=!0}}]);