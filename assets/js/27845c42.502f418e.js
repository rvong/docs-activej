"use strict";(self.webpackChunkactivejdocs=self.webpackChunkactivejdocs||[]).push([[4568],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return d}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),p=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=p(a),d=n,f=u["".concat(c,".").concat(d)]||u[d]||s[d]||i;return a?r.createElement(f,o(o({ref:t},m),{},{components:a})):r.createElement(f,o({ref:t},m))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},95596:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return m},default:function(){return u}});var r=a(87462),n=a(63366),i=(a(67294),a(3905)),o=["components"],l={title:"ActiveJ 5.0-beta2 - Improved promises, cached class builder",hide_table_of_contents:!1},c=void 0,p={permalink:"/blog/2021/09/01/v5.0-beta2",source:"@site/blog/2021-09-01-v5.0-beta2.md",title:"ActiveJ 5.0-beta2 - Improved promises, cached class builder",description:"ActiveJ v5.0-beta2 was released Sep 01,",date:"2021-09-01T00:00:00.000Z",formattedDate:"September 1, 2021",tags:[],readingTime:.695,truncated:!1,nextItem:{title:"ActiveJ 5.0-beta1 - Improved type resolution and more",permalink:"/blog/2021/06/30/v5.0-beta1"}},m=[],s={toc:m};function u(e){var t=e.components,a=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"ActiveJ v5.0-beta2 was released Sep 01,\n2021 ",(0,i.kt)("small",null,"(",(0,i.kt)("a",{parentName:"p",href:"https://mvnrepository.com/artifact/io.activej/activej/5.0-beta2"},"see on Maven"),")"),". This release introduced\nimprovements to ",(0,i.kt)("a",{parentName:"p",href:"/async-io/promise"},"promise")," API. As well as added support for persistent bytecode cache in ",(0,i.kt)("a",{parentName:"p",href:"/codegen"},"ActiveJ Codegen")," module."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/async-io/promise"},"Promise"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Greatly improved exception handling"),(0,i.kt)("li",{parentName:"ul"},"Renamed promise chaining methods ",(0,i.kt)("inlineCode",{parentName:"li"},"thenEx")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"mapEx")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"then")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"map")),(0,i.kt)("li",{parentName:"ul"},'All of the changing methods now take "throwing" functions. If a checked exception is thrown in a chaining function, the whole promise is completed exceptionally'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/codegen"},"ActiveJ Codegen"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Improved ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/activej/activej/blob/v5.0-beta2/core-codegen/src/main/java/io/activej/codegen/ClassBuilder.java"},"ClassBuilder")," and ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/activej/activej/blob/v5.0-beta2/core-codegen/src/main/java/io/activej/codegen/DefiningClassLoader.java"},"DefiningClassLoader")," classes"),(0,i.kt)("li",{parentName:"ul"},"Class generation may now be 100% lazy"),(0,i.kt)("li",{parentName:"ul"},"Added in-memory ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/activej/activej/blob/v5.0-beta2/core-codegen/src/main/java/io/activej/codegen/ClassBuilder.java"},"ClassBuilder")," caches"),(0,i.kt)("li",{parentName:"ul"},"Ability to use ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/activej/activej/blob/v5.0-beta2/core-codegen/src/main/java/io/activej/codegen/BytecodeStorage.java"},"BytecodeStorage")," as a persistent cache for generated bytecode"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/serializer"},"ActiveJ Serializer"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Added support for serializer annotation aliases"),(0,i.kt)("li",{parentName:"ul"},"Improved array serialization"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/http"},"HTTP"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Removed ",(0,i.kt)("inlineCode",{parentName:"li"},"AsyncServletDecorator")," facility"))),(0,i.kt)("li",{parentName:"ul"},"Misc",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Refactored ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/activej/activej/tree/v5.0-beta2/util-types"},"types")," module"),(0,i.kt)("li",{parentName:"ul"},"Various small improvements")))))}u.isMDXComponent=!0}}]);