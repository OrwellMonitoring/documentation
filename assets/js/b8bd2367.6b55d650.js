"use strict";(self.webpackChunkorwell_docs=self.webpackChunkorwell_docs||[]).push([[731],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(r),d=o,v=m["".concat(l,".").concat(d)]||m[d]||p[d]||a;return r?n.createElement(v,i(i({ref:t},u),{},{components:r})):n.createElement(v,i({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2702:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],s={sidebar_position:1,custom_edit_url:null},l="How to create an OS boot service",c={unversionedId:"metrics-export/create-os-boot-service",id:"metrics-export/create-os-boot-service",title:"How to create an OS boot service",description:"Introdu\xe7\xe3o",source:"@site/docs/metrics-export/create-os-boot-service.md",sourceDirName:"metrics-export",slug:"/metrics-export/create-os-boot-service",permalink:"/documentation/metrics-export/create-os-boot-service",editUrl:null,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"Translate your site",permalink:"/documentation/tutorial-extras/translate-your-site"},next:{title:"System Agents",permalink:"/documentation/deployment/system-agents"}},u={},p=[{value:"Introdu\xe7\xe3o",id:"introdu\xe7\xe3o",level:2},{value:"Onde ficam os servi\xe7os?",id:"onde-ficam-os-servi\xe7os",level:2},{value:"Estrutura do ficheiro <code>.service</code>",id:"estrutura-do-ficheiro-service",level:2},{value:"Comandos importantes para colocar o servi\xe7o a correr ou de suporte",id:"comandos-importantes-para-colocar-o-servi\xe7o-a-correr-ou-de-suporte",level:2}],m={toc:p};function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"how-to-create-an-os-boot-service"},"How to create an OS boot service"),(0,a.kt)("h2",{id:"introdu\xe7\xe3o"},"Introdu\xe7\xe3o"),(0,a.kt)("p",null,"Este documento serve como apoio para criar servi\xe7os no OS, ou seja, servi\xe7os que v\xe3o estar a correr no sistema operativo para executar determinadas tarefas."),(0,a.kt)("h2",{id:"onde-ficam-os-servi\xe7os"},"Onde ficam os servi\xe7os?"),(0,a.kt)("p",null,"Os servi\xe7os que v\xe3o ser corridos pelo sistema operativo devem ficar na seguinte diretoria: ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/systemd/system"),(0,a.kt)("br",{parentName:"p"}),"\n","Dentro desta diretoria deve ser criado o ficheiro (",(0,a.kt)("inlineCode",{parentName:"p"},".service"),"), onde o novo servi\xe7o vai ser criado , isto \xe9, example.service"),(0,a.kt)("h2",{id:"estrutura-do-ficheiro-service"},"Estrutura do ficheiro ",(0,a.kt)("inlineCode",{parentName:"h2"},".service")),(0,a.kt)("p",null,"Um ficheiro ",(0,a.kt)("inlineCode",{parentName:"p"},".service")," divide-se em 3 grandes grupos, ","[Unit]",", ","[Service]",", ","[Install]"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"[Unit]"," "),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Description")," = A short description of the unit."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Documentation")," =\tA list of URIs referencing documentation."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Before, After")," =\tThe order in which units are started."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Requires")," = If this unit gets activated, the units listed here will be activated as well. If one of the other units gets deactivated or fails, this unit will be deactivated."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Wants")," =\tConfigures weaker dependencies than Requires. If any of the listed units does not start successfully, it has no impact on the unit activation. This is the recommended way to establish custom unit dependencies."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Conflicts")," =\tIf a unit has a Conflicts setting on another unit, starting the former will stop the latter and vice versa."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"[Service]"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Type")," = Configures the process start-up type"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"ExecStart")," = Commands with arguments to execute when the service is started. "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"ExecStop")," = Commands to execute to stop the service started via ExecStart."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"ExecReload")," = Commands to execute to trigger a configuration reload in the service."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Restart")," = With this option enabled, the service shall be restarted when the service process exits, is killed, or a timeout is reached with the exception of a normal stop by the systemctl stop command."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"RemainAfterExit")," = If set to True, the service is considered active even when all its processes exited. Useful with Type = o neshot. Default value is False."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"[Install]"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Alias")," = A space-separated list of additional names for the unit. Most systemctl commands, excluding systemctl enable, can use aliases instead of the actual unit name."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"RequiredBy, WantedBy")," = The current service will be started when the listed services are started. See the description of Wants and Requires in the ","[Unit]"," section for details."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Also")," = Specifies a list of units to be enabled or disabled along with this unit when a user runs systemctl enable or systemctl disable.")))),(0,a.kt)("h2",{id:"comandos-importantes-para-colocar-o-servi\xe7o-a-correr-ou-de-suporte"},"Comandos importantes para colocar o servi\xe7o a correr ou de suporte"),(0,a.kt)("p",null,"Reload the service files to include the new service. (Mandatory)",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"sudo systemctl daemon-reload")),(0,a.kt)("p",null,"Start your service (Mandatory)",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"sudo systemctl start your-service.service")),(0,a.kt)("p",null,"To check the status of your service (Optional)",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"sudo systemctl status example.service"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"sudo systemctl -l --no-pager  status example.service")," (This command give you a more detailed information, super important for DEBUG) "),(0,a.kt)("p",null,"To enable your service on every reboot (Optional)",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"sudo systemctl enable example.service")))}d.isMDXComponent=!0}}]);