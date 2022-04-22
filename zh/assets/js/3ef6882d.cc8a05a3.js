"use strict";(self.webpackChunkactivejdocs=self.webpackChunkactivejdocs||[]).push([[6207],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(r),f=a,v=m["".concat(c,".").concat(f)]||m[f]||u[f]||i;return r?n.createElement(v,o(o({ref:t},s),{},{components:r})):n.createElement(v,o({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},89242:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},assets:function(){return s},toc:function(){return u},default:function(){return f}});var n=r(83117),a=r(80102),i=(r(67294),r(3905)),o=["components"],l={title:"ActiveJ 5.2 - Minor improvements",hide_table_of_contents:!1},c=void 0,p={permalink:"/zh/blog/2022/04/19/v5.2",source:"@site/blog/2022-04-19-v5.2.md",title:"ActiveJ 5.2 - Minor improvements",description:"ActiveJ v5.2 was released Apr 19,",date:"2022-04-19T00:00:00.000Z",formattedDate:"2022\u5e744\u670819\u65e5",tags:[],readingTime:.59,truncated:!1,authors:[],nextItem:{title:"ActiveJ 5.1 - Boot and ActiveJ FS improvements",permalink:"/zh/blog/2022/01/04/v5.1"}},s={authorsImageUrls:[]},u=[],m={toc:u};function f(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"ActiveJ v5.2 was released Apr 19,\n2022 (",(0,i.kt)("a",{parentName:"p",href:"https://mvnrepository.com/artifact/io.activej/activej/5.2"},"see on Maven"),"). This release includes\nminor improvements mainly for ",(0,i.kt)("a",{parentName:"p",href:"/http"},"HTTP client/server")," and ",(0,i.kt)("a",{parentName:"p",href:"/serializer"},"ActiveJ Serializer"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/http"},"HTTP"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Added dedicated enum for setting ",(0,i.kt)("inlineCode",{parentName:"li"},"SameSite")," policy on cookies. "),(0,i.kt)("li",{parentName:"ul"},"Malformed HTTP requests now result in a code ",(0,i.kt)("inlineCode",{parentName:"li"},"400")," response rather than connection drop."),(0,i.kt)("li",{parentName:"ul"},"HTTP inspectors can now inspect malformed HTTP requests and responses."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/activej/activej/blob/v5.1.1/core-http/src/main/java/io/activej/http/RoutingServlet.java"},"RoutingServlet")," now correctly decodes percent-encoded URL path parts."),(0,i.kt)("li",{parentName:"ul"},"Added checks for DNS label sizes."),(0,i.kt)("li",{parentName:"ul"},"Minor improvements of the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/activej/activej/blob/v5.1.1/core-http/src/main/java/io/activej/http/UrlParser.java"},"UrlParser"),"."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/serializer"},"ActiveJ Serializer"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Added additional preconditions for subclass serializer."),(0,i.kt)("li",{parentName:"ul"},"Removed unnecessary caching from ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/activej/activej/blob/v5.1.1/core-serializer/src/main/java/io/activej/serializer/SerializerBuilder.java"},"SerializerBuilder"),"."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/fs"},"ActiveJ FS"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Storage paths are now normalized, so local file systems now work properly with relative storage paths.")))))}f.isMDXComponent=!0}}]);