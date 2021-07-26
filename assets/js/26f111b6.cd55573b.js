(self.webpackChunkactivejdocs=self.webpackChunkactivejdocs||[]).push([[9473],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return l},kt:function(){return h}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=p(r),h=a,f=m["".concat(i,".").concat(h)]||m[h]||u[h]||o;return r?n.createElement(f,c(c({ref:t},l),{},{components:r})):n.createElement(f,c({ref:t},l))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,c[1]=s;for(var p=2;p<o;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},77618:function(e,t,r){"use strict";var n=r(67294),a=r(39962);t.Z=function(e){var t=e.url,r=e.text,o=e.isInline,c=void 0===o||o,s=e.children,i=(0,a.Z)().siteConfig;return n.createElement("a",{style:c?{}:{display:"block",marginBottom:"16px"},href:i.customFields.githubUrl+"/"+i.customFields.githubBranch+t,target:"_blank"},r||s)}},43517:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return u},default:function(){return h}});var n=r(22122),a=r(19756),o=(r(67294),r(3905)),c=r(77618),s=["components"],i={sidebar_label:"Benchmarks"},p="Benchmarks",l={unversionedId:"http/benchmarks",id:"http/benchmarks",isDocsHomePage:!1,title:"Benchmarks",description:"We've measured HTTP GET request performance using JMH as the benchmark tool:",source:"@site/docs/http/benchmarks.mdx",sourceDirName:"http",slug:"/http/benchmarks",permalink:"/http/benchmarks",version:"current",frontMatter:{sidebar_label:"Benchmarks"},sidebar:"docs",previous:{title:"Overview",permalink:"/http"},next:{title:"Examples",permalink:"/http/examples"}},u=[],m={toc:u};function h(e){var t=e.components,r=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"benchmarks"},"Benchmarks"),(0,o.kt)("p",null,"We've measured ",(0,o.kt)("strong",{parentName:"p"},"HTTP")," ",(0,o.kt)("em",{parentName:"p"},"GET")," request performance using JMH as the benchmark tool:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"Time: 29112ms;\nAverage time: 5822.4ms;\nBest time: 5757ms;\nWorst time: 5892ms;\nRequests per second: 171750;\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"ActiveJ")," result is ",(0,o.kt)("strong",{parentName:"p"},"171.8K RPS")," on a single CPU. Not only is it faster than highly-specialized ",(0,o.kt)("strong",{parentName:"p"},"Vert.x\n(162.9K RPS)"),", but also with 50% less CPU load."),(0,o.kt)("p",null,"When using HTTP pipelining, performance reaches ",(0,o.kt)("strong",{parentName:"p"},"1.5M RPS"),"."),(0,o.kt)("p",null,"ActiveJ has placed ",(0,o.kt)("strong",{parentName:"p"},"first")," in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/the-benchmarker/web-frameworks"},"the-benchmarker's web frameworks benchmark")," as per ",(0,o.kt)("strong",{parentName:"p"},"2021-07-18"),"."),(0,o.kt)("p",null,"As for ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/TechEmpower/FrameworkBenchmarks"},"TechEmpower benchmark"),"'s continuous runs, ActiveJ HTTP places among top Java servers in\n",(0,o.kt)("a",{parentName:"p",href:"https://www.techempower.com/benchmarks/#section=test&runid=a699fbd5-0f5e-477e-a509-2899da461d48&hw=ph&test=json&l=zijbpb-e7&a=2"},"JSON")," and\n",(0,o.kt)("a",{parentName:"p",href:"https://www.techempower.com/benchmarks/#section=test&runid=a699fbd5-0f5e-477e-a509-2899da461d48&hw=ph&test=plaintext&l=zijbpb-e7&a=2"},"Plaintext")," categories."),(0,o.kt)("p",null,"You can find HTTP benchmark sources on ",(0,o.kt)(c.Z,{text:"GitHub",url:"/benchmarks/http/src/main/java/io/activej/http/HttpServerWorkloadBenchmark.java",mdxType:"Githublink"})))}h.isMDXComponent=!0}}]);