"use strict";(self.webpackChunkactivejdocs=self.webpackChunkactivejdocs||[]).push([[588],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(r),d=a,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||i;return r?n.createElement(f,o(o({ref:t},s),{},{components:r})):n.createElement(f,o({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},18758:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},assets:function(){return s},toc:function(){return u},default:function(){return d}});var n=r(83117),a=r(80102),i=(r(67294),r(3905)),o=["components"],l={title:"ActiveJ 5.4 - Codegen and Serializer optimizations",hide_table_of_contents:!1},c=void 0,p={permalink:"/blog/2022/08/19/v5.4",source:"@site/blog/2022-08-19-v5.4.md",title:"ActiveJ 5.4 - Codegen and Serializer optimizations",description:"ActiveJ v5.4 was released on Aug 19,",date:"2022-08-19T00:00:00.000Z",formattedDate:"August 19, 2022",tags:[],readingTime:.805,truncated:!1,authors:[],prevItem:{title:"ActiveJ 5.4.1 - Stream Codecs optimizations",permalink:"/blog/2022/08/31/v5.4.1"},nextItem:{title:"ActiveJ 5.3 - JMX improvements",permalink:"/blog/2022/06/17/v5.3"}},s={authorsImageUrls:[]},u=[],m={toc:u};function d(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"ActiveJ v5.4 was released on Aug 19,\n2022 (",(0,i.kt)("a",{parentName:"p",href:"https://mvnrepository.com/artifact/io.activej/activej/5.4"},"see on Maven"),"). This release includes\nimprovements to ",(0,i.kt)("a",{parentName:"p",href:"/codegen"},"ActiveJ Codegen"),",",(0,i.kt)("a",{parentName:"p",href:"/serializer"},"ActiveJ Serializer"),", and minor fixes to other\ncomponents."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/codegen"},"ActiveJ Codegen"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Generated method calls that use ",(0,i.kt)("inlineCode",{parentName:"li"},"self")," instances as method arguments are now automatically resolved."),(0,i.kt)("li",{parentName:"ul"},"Slightly optimized method lookup."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/serializer"},"ActiveJ Serializer"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Optimized serializer builder's cache. Ensured that previously defined serializers are reused."),(0,i.kt)("li",{parentName:"ul"},"Ensured that dangling references are cleaned up if serialization fails."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/async-io/net"},"Net"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Fix order of promise completion when SSL socket receives ",(0,i.kt)("inlineCode",{parentName:"li"},"close_notify")," message."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/http"},"HTTP"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Multimap of HTTP headers is now properly resized."),(0,i.kt)("li",{parentName:"ul"},"Fatal errors in HTTP server connections are now handled correctly."),(0,i.kt)("li",{parentName:"ul"},"Added the ",(0,i.kt)("inlineCode",{parentName:"li"},"HttpMessage#takeBodyStream")," method instead of the ",(0,i.kt)("inlineCode",{parentName:"li"},"HttpMessage#getBodyStream")," method as it has a more\nsemantically correct name. ",(0,i.kt)("inlineCode",{parentName:"li"},"HttpMessage#getBodyStream")," method is now deprecated and is a candidate for removal in\nthe next major release."))),(0,i.kt)("li",{parentName:"ul"},"Misc",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Added additional application error logging in Launcher."),(0,i.kt)("li",{parentName:"ul"},"Fixed ",(0,i.kt)("inlineCode",{parentName:"li"},"@NotNull")," annotations for function parameters.")))))}d.isMDXComponent=!0}}]);