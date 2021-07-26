(self.webpackChunkactivejdocs=self.webpackChunkactivejdocs||[]).push([[8776],{3905:function(e,n,a){"use strict";a.r(n),a.d(n,{MDXContext:function(){return p},MDXProvider:function(){return c},mdx:function(){return x},useMDXComponents:function(){return u},withMDXComponents:function(){return m}});var t=a(67294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(){return(i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e}).apply(this,arguments)}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function d(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=t.createContext({}),m=function(e){return function(n){var a=u(n.components);return t.createElement(e,i({},n,{components:a}))}},u=function(e){var n=t.useContext(p),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},c=function(e){var n=u(e.components);return t.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),m=u(a),c=r,g=m["".concat(o,".").concat(c)]||m[c]||s[c]||i;return a?t.createElement(g,l(l({ref:n},p),{},{components:a})):t.createElement(g,l({ref:n},p))}));function x(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=g;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}g.displayName="MDXCreateElement"},93472:function(e,n,a){"use strict";a.r(n),a.d(n,{frontMatter:function(){return l},metadata:function(){return d},toc:function(){return p},default:function(){return u}});var t=a(22122),r=a(19756),i=(a(67294),a(3905)),o=["components"],l={title:"ActiveJ | Deploying ActiveJ Server to AWS Using Docker",keywords:["java","java for beginners","java framework","guide","tutorial","web application","async","server","spring","spring alternative","netty alternative","jetty alternative","aws","amazon web services","docker","docker image","deploy"],description:"Step-by-step guide of deploying an HTTP server written in Java to AWS using Docker."},d={unversionedId:"tutorials/getting-started-advanced",id:"tutorials/getting-started-advanced",isDocsHomePage:!1,title:"Deploying ActiveJ Server to AWS Using Docker",description:"Step-by-step guide of deploying an HTTP server written in Java to AWS using Docker.",source:"@site/docs/tutorials/getting-started-advanced.mdx",sourceDirName:"tutorials",slug:"/tutorials/getting-started-advanced",permalink:"/tutorials/getting-started-advanced",version:"current",frontMatter:{title:"ActiveJ | Deploying ActiveJ Server to AWS Using Docker",keywords:["java","java for beginners","java framework","guide","tutorial","web application","async","server","spring","spring alternative","netty alternative","jetty alternative","aws","amazon web services","docker","docker image","deploy"],description:"Step-by-step guide of deploying an HTTP server written in Java to AWS using Docker."},sidebar:"tutorials",previous:{title:"Authorization and Session Management",permalink:"/tutorials/authorization-tutorial"},next:{title:"Using React in ActiveJ projects",permalink:"/tutorials/using-react"}},p=[{value:"1. Assemble JAR-file",id:"1-assemble-jar-file",children:[]},{value:"2. Wrap it to Docker image",id:"2-wrap-it-to-docker-image",children:[]},{value:"3. Deploying your application to the cloud (AWS, as an example)",id:"3-deploying-your-application-to-the-cloud-aws-as-an-example",children:[]},{value:"4. Deploying Docker container",id:"4-deploying-docker-container",children:[]}],m={toc:p};function u(e){var n=e.components,a=(0,r.default)(e,o);return(0,i.mdx)("wrapper",(0,t.default)({},m,a,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"In this tutorial we will deploy the HTTP Server created in the ",(0,i.mdx)("a",{parentName:"p",href:"/tutorials/getting-started"},"getting started tutorial")," to AWS. We will use Docker for this purpose."),(0,i.mdx)("h2",{id:"1-assemble-jar-file"},"1. Assemble JAR-file"),(0,i.mdx)("p",null,"Open your ",(0,i.mdx)("a",{parentName:"p",href:"/tutorials/getting-started"},"server's")," ",(0,i.mdx)("inlineCode",{parentName:"p"},"pom.xml")," file and insert this config:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-xml"},'<build>\n    <plugins>\n        \x3c!-- Make this jar executable --\x3e\n        <plugin>\n            <groupId>org.apache.maven.plugins</groupId>\n            <artifactId>maven-shade-plugin</artifactId>\n            <executions>\n                <execution>\n                    <phase>package</phase>\n                    <goals>\n                        <goal>shade</goal>\n                    </goals>\n                    <configuration>\n                        <transformers>\n                            <transformer\n                                    implementation="org.apache.maven.plugins.shade.resource.ManifestResourceTransformer">\n                                <mainClass>HttpHelloWorldExample</mainClass>\n                            </transformer>\n                        </transformers>\n                        <finalName>HelloWorldExample</finalName>\n                    </configuration>\n                </execution>\n            </executions>\n        </plugin>\n    </plugins>\n</build>\n')),(0,i.mdx)("p",null,"Next, type the following commands:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"mvn clean")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"mvn package -DskipTests=true"))),(0,i.mdx)("p",null,"These actions will produce a ",(0,i.mdx)("strong",{parentName:"p"},"HelloWorldExample.jar")," archive. You can find it in the ",(0,i.mdx)("inlineCode",{parentName:"p"},"target")," folder of your project. It is a typical way to distribute and run Java applications."),(0,i.mdx)("h2",{id:"2-wrap-it-to-docker-image"},"2. Wrap it to Docker image"),(0,i.mdx)("p",null,"If you don't have Docker installed on your machine, you can follow ",(0,i.mdx)("a",{parentName:"p",href:"https://www.docker.com/get-started"},"this guide"),"."),(0,i.mdx)("p",null,"Docker is a de-facto standard for deploying any cloud-based application.\nWe are following this standard and propose you to wrap your ActiveJ application in Docker image."),(0,i.mdx)("p",null,"Here is a minimal ",(0,i.mdx)("strong",{parentName:"p"},"Dockerfile")," example:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-dockerfile"},"FROM openjdk:8-jre-alpine\n\nWORKDIR /app\nCOPY target/HelloWorldExample.jar ./\nEXPOSE 8080\n\nENTRYPOINT java $SYS_PROPS -jar HelloWorldExample.jar\n")),(0,i.mdx)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,i.mdx)("h5",{parentName:"div"},(0,i.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,i.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.mdx)("div",{parentName:"div",className:"admonition-content"},(0,i.mdx)("p",{parentName:"div"},"This application uses JDK/JRE 8 with Linux Alpine inside"))),(0,i.mdx)("p",null,"Short logic description:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"First of all, we should build our application. It copies all necessary data for JAR file creation and builds it."),(0,i.mdx)("li",{parentName:"ul"},"Later, it moves JAR file to the application root and launches it on port ",(0,i.mdx)("inlineCode",{parentName:"li"},"8080"),".")),(0,i.mdx)("p",null,"You can build it using the following command: ",(0,i.mdx)("inlineCode",{parentName:"p"},"docker build -t dkapp ."),", and run this image on docker daemon: ",(0,i.mdx)("inlineCode",{parentName:"p"},"docker run --rm -p8080:8080 dkapp"),".\nAll actions will be the same if you are using ",(0,i.mdx)("strong",{parentName:"p"},"docker-machine"),"."),(0,i.mdx)("h2",{id:"3-deploying-your-application-to-the-cloud-aws-as-an-example"},"3. Deploying your application to the cloud (AWS, as an example)"),(0,i.mdx)("p",null,"First of all, you should own an Amazon AWS EC2 account and have a running EC2 instance."),(0,i.mdx)("p",null,"Here is a guide on how to deploy your application (not Docker image):"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Download your Amazon key (",(0,i.mdx)("em",{parentName:"li"},"key_name.pem"),")."),(0,i.mdx)("li",{parentName:"ul"},"Execute ",(0,i.mdx)("inlineCode",{parentName:"li"},"chmod 400 key_name.pem")," for granting read-only property to this file."),(0,i.mdx)("li",{parentName:"ul"},"Connect to your EC2 instance via ",(0,i.mdx)("inlineCode",{parentName:"li"},"ssh"),":\n",(0,i.mdx)("inlineCode",{parentName:"li"},"ssh -i key_name.pem user@instance-id")),(0,i.mdx)("li",{parentName:"ul"},"Open new Terminal/iTerm tab and try to send your JAR file via FTP protocol:\n",(0,i.mdx)("inlineCode",{parentName:"li"}," scp -i key_name.pem your/app/path/HelloWorldServer.jar ubuntu@instance-id:")),(0,i.mdx)("li",{parentName:"ul"},"Wait until your file uploads."),(0,i.mdx)("li",{parentName:"ul"},"Run ",(0,i.mdx)("inlineCode",{parentName:"li"},"java -jar HelloWorld.jar")," in your ssh tab.")),(0,i.mdx)("p",null,"Voila! You are running your application on AWS instance. Check it out on your IP address."),(0,i.mdx)("h2",{id:"4-deploying-docker-container"},"4. Deploying Docker container"),(0,i.mdx)("p",null,"Here is a guide on how to deploy your Docker image:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Download your Amazon key (",(0,i.mdx)("em",{parentName:"li"},"key_name.pem"),")."),(0,i.mdx)("li",{parentName:"ul"},"Execute ",(0,i.mdx)("inlineCode",{parentName:"li"},"chmod 400 key_name.pem")," for granting read-only property to this file."),(0,i.mdx)("li",{parentName:"ul"},"Transform Docker image to ",(0,i.mdx)("inlineCode",{parentName:"li"},"tar")," archive : ",(0,i.mdx)("inlineCode",{parentName:"li"},"sudo docker save dkapp >> dkapp.tar")),(0,i.mdx)("li",{parentName:"ul"},"Connect to your EC2 instance via ",(0,i.mdx)("inlineCode",{parentName:"li"},"ssh")," :\n",(0,i.mdx)("inlineCode",{parentName:"li"},"ssh -i key_name.pem user@instance-id")),(0,i.mdx)("li",{parentName:"ul"},"Open new Terminal/iTerm tab and try to send your JAR file via FTP protocol:")),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"}," scp -i key_name.pem your/image/path/dkapp.tar ubuntu@instance-id:")),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Wait until your file uploads."),(0,i.mdx)("li",{parentName:"ul"},"Run such commands in your ssh tab:",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"sudo apt-get update -y")," to update cloud repository of Linux system."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"sudo apt-get install -y docker.io")," to install Docker."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"dockerd")," to launch Docker daemon."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"docker load -i dkapp.tar")," to unzip archived image."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"docker run -p 8080:8080 dkapp")," to launch your application in Docker container.")))),(0,i.mdx)("p",null,"Hurray! You are running your Docker image with the ActiveJ app on AWS instance.\nCheck it out on your IP address."))}u.isMDXComponent=!0}}]);