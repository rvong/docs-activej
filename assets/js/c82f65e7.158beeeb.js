(self.webpackChunkactivejdocs=self.webpackChunkactivejdocs||[]).push([[6105],{3905:function(e,t,r){"use strict";r.d(t,{kt:function(){return u}});var i=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=i.createContext({}),c=function(e){var t=i.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(r),f=n,m=u["".concat(s,".").concat(f)]||u[f]||p[f]||o;return r?i.createElement(m,a(a({ref:t},d),{},{components:r})):i.createElement(m,a({ref:t},d))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var c=2;c<o;c++)a[c]=r[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,r)}d.displayName="MDXCreateElement"},77815:function(e,t,r){"use strict";var i=r(95318).default;t.Z=void 0;i(r(67294));var n=i(r(39962)),o=function(e){var t=e.name,r=(0,n.default)().siteConfig;if(!t)throw new Error("Variable name is required");if(void 0===r.customFields[t])throw new Error("Variable "+t+" not exist");return r.customFields[t]};t.Z=o},67715:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var i=r(22122),n=r(19756),o=(r(67294),r(3905)),a=r(77815),l=["components"],s={},c={unversionedId:"fs/overview",id:"fs/overview",isDocsHomePage:!1,title:"Overview",description:"ActiveJ FS is a lightweight asynchronous Java library that provides a tiny abstraction on top of common file operations. It provides upload, download, append, list, copy, move, delete, and other methods for operating with local, remote or distributed storage.",source:"@site/docs/fs/overview.mdx",sourceDirName:"fs",slug:"/fs/overview",permalink:"/docs/fs/overview",version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Memcached-like Application",permalink:"/docs/rpc/memcached-like-application"},next:{title:"Examples",permalink:"/docs/fs/examples"}},p=[{value:"Where ActiveJ FS can be used?",id:"where-activej-fs-can-be-used",children:[]},{value:"Efficiently work with distributed file storage",id:"efficiently-work-with-distributed-file-storage",children:[]},{value:"Add ActiveJ RPC to your project",id:"add-activej-rpc-to-your-project",children:[]}],d={toc:p};function u(e){var t=e.components,r=(0,n.default)(e,l);return(0,o.kt)("wrapper",(0,i.default)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"ActiveJ FS is a lightweight asynchronous Java library that provides a tiny abstraction on top of common file operations. It provides upload, download, append, list, copy, move, delete, and other methods for operating with local, remote or distributed storage."),(0,o.kt)("h2",{id:"where-activej-fs-can-be-used"},"Where ActiveJ FS can be used?"),(0,o.kt)("p",null,"There are several ActiveJ FS implementations:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Local ActiveJ FS")," designed for working with file systems located on a single machine. Ideal to implement a ",(0,o.kt)("strong",{parentName:"li"},"local file storage for your application"),", for example database storage, backup data storage, local logs storage, etc."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Client/Server implementations")," for operating with files that are stored remotely. This implementation supports two protocols:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Custom ",(0,o.kt)("strong",{parentName:"li"},"TCP-based binary protocol")," with zero overhead. Resembles FTP, but simpler and more efficient."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"HTTP protocol")," that allows to define a REST API. It also provides third-party clients like browsers access remote ActiveJ FS servers."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Cluster ActiveJ FS")," is designed for distributed big data workload. It's optimized for processing large immutable datasets or append-only files. Cluster ActiveJ FS was intentionally made ",(0,o.kt)("strong",{parentName:"li"},"not POSIX-compilant")," and works only with ",(0,o.kt)("strong",{parentName:"li"},"immutable files"),". In this way the whole system is simple, lightweight and resilient to server or network failures. Also, this approach allows to avoid the overhead of master-slave architecture and synchronization of mutable files. With ActiveJ FS you can create distributed, scalable P2P file systems with built-in support for rebalancing, failover, and scalability."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"ActiveJ FS Adapters")," enable filtering, mounting, transforming file names, adding and removing prefixes, subdirectories, etc.")),(0,o.kt)("h2",{id:"efficiently-work-with-distributed-file-storage"},"Efficiently work with distributed file storage"),(0,o.kt)("p",null,"ActiveJ FS is an ",(0,o.kt)("strong",{parentName:"p"},"efficient and lightweight alternative for kernel space distributed FS")," like Ceph or Apache Hadoop. ActiveJ FS is like IPFS on the scale of a single data center It allows to create combined, fault-tolerant cluster NFS. Moreover, ActiveJ FS contains a set of predefined communication strategies that can be simply combined."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"private RemoteFsClusterClient client;\n\n    ...\n\nEventloop eventloop = Eventloop.create();\n\nMap<Object, FsClient> clients = ...;\n\nclient = RemoteFsClusterClient.create(eventloop, clients)\n    .withReplicationCount(N / 2)\n    .withServerSelector(RENDEZVOUS_HASH_SHARDER);\n")),(0,o.kt)("h2",{id:"add-activej-rpc-to-your-project"},"Add ActiveJ RPC to your project"),(0,o.kt)("p",null,"You can add ActiveJ RPC to your project by importing its Maven repository.\nThese docs cover the most recent release of ActiveJ RPC ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)(a.Z,{name:"currentVersion",mdxType:"Variable"}))," (see on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/activej/activej/tree/master/core-fs"},"Github")," or ",(0,o.kt)("a",{parentName:"p",href:"https://mvnrepository.com/artifact/io.activej/activej-fs"},"Maven"),")."))}u.isMDXComponent=!0}}]);