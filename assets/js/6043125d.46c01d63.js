(self.webpackChunkactivejdocs=self.webpackChunkactivejdocs||[]).push([[2632],{3905:function(e,n,r){"use strict";r.d(n,{Zo:function(){return l},kt:function(){return f}});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function c(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?c(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},c=Object.keys(e);for(t=0;t<c.length;t++)r=c[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)r=c[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=t.createContext({}),u=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},l=function(e){var n=u(e.components);return t.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,c=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=u(r),f=a,d=m["".concat(s,".").concat(f)]||m[f]||p[f]||c;return r?t.createElement(d,o(o({ref:n},l),{},{components:r})):t.createElement(d,o({ref:n},l))}));function f(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var c=r.length,o=new Array(c);o[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<c;u++)o[u]=r[u];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},77618:function(e,n,r){"use strict";var t=r(67294),a=r(39962);n.Z=function(e){var n=e.url,r=e.text,c=e.isInline,o=void 0===c||c,i=e.children,s=(0,a.Z)().siteConfig;return t.createElement("a",{style:o?{}:{display:"block",marginBottom:"16px"},href:s.customFields.githubUrl+"/"+s.customFields.githubBranch+n,target:"_blank"},r||i)}},88652:function(e,n,r){"use strict";r.r(n),r.d(n,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return p},default:function(){return f}});var t=r(22122),a=r(19756),c=(r(67294),r(3905)),o=r(77618),i=["components"],s={sidebar_label:"Benchmarks"},u="Benchmarks",l={unversionedId:"inject/benchmarks",id:"inject/benchmarks",isDocsHomePage:!1,title:"Benchmarks",description:"We've compared ActiveJ Inject to Guice and Spring in the same scenario, using JMH as the benchmark tool.",source:"@site/docs/inject/benchmarks.mdx",sourceDirName:"inject",slug:"/inject/benchmarks",permalink:"/inject/benchmarks",version:"current",frontMatter:{sidebar_label:"Benchmarks"},sidebar:"docs",previous:{title:"Advanced",permalink:"/inject/advanced"},next:{title:"Examples",permalink:"/inject/examples"}},p=[],m={toc:p};function f(e){var n=e.components,r=(0,a.Z)(e,i);return(0,c.kt)("wrapper",(0,t.Z)({},m,r,{components:n,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"benchmarks"},"Benchmarks"),(0,c.kt)("p",null,"We've compared ",(0,c.kt)("strong",{parentName:"p"},"ActiveJ Inject")," to ",(0,c.kt)("strong",{parentName:"p"},"Guice")," and ",(0,c.kt)("strong",{parentName:"p"},"Spring")," in the same scenario, using JMH as the benchmark tool.\nWe ran benchmarks in ",(0,c.kt)("em",{parentName:"p"},"AverageTime")," mode and made 20 measurements.\nAll measurement results are represented in nanoseconds."),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-text"},"ActiveInjectScopesBenchmark.measure\nScore: 138.475; Error: \xb1 6.156; Units: ns/op;\n\nGuiceDiScopesBenchmark.measure\nScore: 780.017; Error: \xb1 23.994: Units: ns/op;\n\nSpringDiBenchmark.measure\nScore: 77191; Error: \xb1 322.6; Units: ns/op;\n")),(0,c.kt)("p",null,"Benchmarks were launched on a machine with the following parameters: Ubuntu 18.04 bionic,\nKernel: x86_64 Linux 4.15.0-55-generic,\nCPU: Intel Core i5-8400 @ 6x 4GHz ","[27.8\xb0C]","."),(0,c.kt)("p",null,"You can find benchmark sources on ",(0,c.kt)(o.Z,{text:"GitHub",url:"/benchmarks/inject/src/main/java/io/activej/inject",mdxType:"Githublink"})))}f.isMDXComponent=!0}}]);