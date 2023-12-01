"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[25882],{61132:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(24246),i=(n(27378),n(40624));const s={tabItem:"tabItem_pnkT"};function a({children:e,hidden:t,className:n}){return(0,r.jsx)("div",{role:"tabpanel",className:(0,i.Z)(s.tabItem,n),hidden:t,children:e})}},97555:(e,t,n)=>{n.d(t,{Z:()=>T});var r=n(24246),i=n(27378),s=n(40624),a=n(75527),l=n(3620),o=n(44479),c=n(62821),u=n(52196),d=n(53589);function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function f(e){var t,n;return null!==(n=null===(t=i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))||void 0===t?void 0:t.filter(Boolean))&&void 0!==n?n:[]}function g(e){const{values:t,children:n}=e;return(0,i.useMemo)((()=>{const e=null!=t?t:function(e){return f(e).map((({props:{value:e,label:t,attributes:n,default:r}})=>({value:e,label:t,attributes:n,default:r})))}(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m({value:e,tabValues:t}){return t.some((t=>t.value===e))}function b({queryString:e=!1,groupId:t}){const n=(0,l.k6)(),r=function({queryString:e=!1,groupId:t}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:e,groupId:t}),s=(0,c._X)(r),a=(0,i.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace(p(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){h(e,t,n[t])}))}return e}({},n.location),{search:t.toString()}))}),[r,n]);return[s,a]}function j(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,s=g(e),[a,l]=(0,i.useState)((()=>function({defaultValue:e,tabValues:t}){if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!m({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}var n;const r=null!==(n=t.find((e=>e.default)))&&void 0!==n?n:t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[c,u]=b({queryString:n,groupId:r}),[h,p]=function({groupId:e}){const t=function(e){return e?`docusaurus.tab.${e}`:null}(e),[n,r]=(0,d.Nk)(t);return[n,(0,i.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:r}),f=(()=>{const e=null!=c?c:h;return m({value:e,tabValues:s})?e:null})();(0,o.Z)((()=>{f&&l(f)}),[f]);return{selectedValue:a,selectValue:(0,i.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),p(e)}),[u,p,s]),tabValues:s}}var x=n(29088);const y={tabList:"tabList_Qoir",tabItem:"tabItem_AQgk"};function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){v(e,t,n[t])}))}return e}function O(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function P({className:e,block:t,selectedValue:n,selectValue:i,tabValues:l}){const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.o5)(),u=e=>{const t=e.currentTarget,r=o.indexOf(t),s=l[r].value;s!==n&&(c(t),i(s))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=o.indexOf(e.currentTarget)+1;var n;t=null!==(n=o[r])&&void 0!==n?n:o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;var r;t=null!==(r=o[n])&&void 0!==r?r:o[o.length-1];break}}null==t||t.focus()};return(0,r.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},e),children:l.map((({value:e,label:t,attributes:i})=>(0,r.jsx)("li",O(w({role:"tab",tabIndex:n===e?0:-1,"aria-selected":n===e,ref:e=>o.push(e),onKeyDown:d,onClick:u},i),{className:(0,s.Z)("tabs__item",y.tabItem,null==i?void 0:i.className,{"tabs__item--active":n===e}),children:null!=t?t:e}),e)))})}function D({lazy:e,children:t,selectedValue:n}){const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){const e=s.find((e=>e.props.value===n));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,r.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function k(e){const t=j(e);return(0,r.jsxs)("div",{className:(0,s.Z)("tabs-container",y.tabList),children:[(0,r.jsx)(P,w({},e,t)),(0,r.jsx)(D,w({},e,t))]})}function T(e){const t=(0,x.Z)();return(0,r.jsx)(k,O(w({},e),{children:f(e.children)}),String(t))}},52605:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(24246),i=n(27378),s=n(3620);const a={apiTable:"apiTable_e8hp"};function l({name:e,children:t},n){const a=function(e){let t=e;for(;(0,i.isValidElement)(t);)[t]=i.Children.toArray(t.props.children);return t}(t),l=e?`${e}-${a}`:a,o=`#${l}`,c=(0,s.k6)();return(0,r.jsx)("tr",{id:l,tabIndex:0,ref:c.location.hash===o?n:void 0,onClick:e=>{"A"===e.target.tagName.toUpperCase()||c.push(o)},onKeyDown:e=>{"Enter"===e.key&&c.push(o)},children:t.props.children})}const o=i.forwardRef(l);function c({children:e,name:t}){const[n,s]=i.Children.toArray(e.props.children),l=(0,i.useRef)(null);(0,i.useEffect)((()=>{var e;null===(e=l.current)||void 0===e||e.focus()}),[l]);const c=i.Children.map(s.props.children,(e=>(0,r.jsx)(o,{name:t,ref:l,children:e})));return(0,r.jsxs)("table",{className:a.apiTable,children:[n,(0,r.jsx)("tbody",{children:c})]})}},39627:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>f,frontMatter:()=>o,metadata:()=>u,toc:()=>h});var r=n(24246),i=n(71670),s=n(97555),a=n(61132),l=n(52605);const o={sidebar_position:4,slug:"/api/plugins/@docusaurus/plugin-client-redirects"},c="\ud83d\udce6 plugin-client-redirects",u={id:"api/plugins/plugin-client-redirects",title:"\ud83d\udce6 plugin-client-redirects",description:"Docusaurus Plugin to generate client-side redirects.",source:"@site/versioned_docs/version-3.0.0/api/plugins/plugin-client-redirects.mdx",sourceDirName:"api/plugins",slug:"/api/plugins/@docusaurus/plugin-client-redirects",permalink:"/zh-CN/docs/3.0.0/api/plugins/@docusaurus/plugin-client-redirects",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/docusaurus-v2/zh-CN",tags:[],version:"3.0.0",lastUpdatedBy:"Gitcoins",lastUpdatedAt:1701425202,formattedLastUpdatedAt:"2023\u5e7412\u67081\u65e5",sidebarPosition:4,frontMatter:{sidebar_position:4,slug:"/api/plugins/@docusaurus/plugin-client-redirects"},sidebar:"api",previous:{title:"\ud83d\udce6 plugin-content-pages",permalink:"/zh-CN/docs/3.0.0/api/plugins/@docusaurus/plugin-content-pages"},next:{title:"\ud83d\udce6 plugin-debug",permalink:"/zh-CN/docs/3.0.0/api/plugins/@docusaurus/plugin-debug"}},d={},h=[{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Types",id:"types",level:3},{value:"<code>RedirectRule</code>",id:"RedirectRule",level:4},{value:"<code>CreateRedirectsFn</code>",id:"CreateRedirectsFn",level:4},{value:"Example configuration",id:"ex-config",level:3}];function p(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"-plugin-client-redirects",children:"\ud83d\udce6 plugin-client-redirects"}),"\n","\n","\n",(0,r.jsxs)(t.p,{children:["Docusaurus Plugin to generate ",(0,r.jsx)(t.strong,{children:"client-side redirects"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"This plugin will write additional HTML pages to your static site that redirect the user to your existing Docusaurus pages with JavaScript."}),"\n",(0,r.jsx)(t.admonition,{title:"production only",type:"warning",children:(0,r.jsxs)(t.p,{children:["This plugin is always inactive in development and ",(0,r.jsx)(t.strong,{children:"only active in production"})," because it works on the build output."]})}),"\n",(0,r.jsxs)(t.admonition,{type:"warning",children:[(0,r.jsx)(t.p,{children:"It is better to use server-side redirects whenever possible."}),(0,r.jsx)(t.p,{children:"Before using this plugin, you should look if your hosting provider doesn't offer this feature."})]}),"\n",(0,r.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,r.jsxs)(s.Z,{groupId:"npm2yarn",children:[(0,r.jsx)(a.Z,{value:"npm",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"npm install --save @docusaurus/plugin-client-redirects\n"})})}),(0,r.jsx)(a.Z,{value:"yarn",label:"Yarn",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"yarn add @docusaurus/plugin-client-redirects\n"})})}),(0,r.jsx)(a.Z,{value:"pnpm",label:"pnpm",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"pnpm add @docusaurus/plugin-client-redirects\n"})})})]}),"\n",(0,r.jsx)(t.h2,{id:"configuration",children:"Configuration"}),"\n",(0,r.jsx)(t.p,{children:"Accepted fields:"}),"\n",(0,r.jsx)(l.Z,{children:(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Option"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Default"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"fromExtensions"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"string[]"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"[]"})}),(0,r.jsx)(t.td,{children:"The extensions to be removed from the route after redirecting."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"toExtensions"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"string[]"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"[]"})}),(0,r.jsx)(t.td,{children:"The extensions to be appended to the route after redirecting."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"redirects"})}),(0,r.jsx)(t.td,{children:(0,r.jsxs)("code",{children:[(0,r.jsx)("a",{href:"#RedirectRule",children:"RedirectRule"}),"[]"]})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"[]"})}),(0,r.jsx)(t.td,{children:"The list of redirect rules."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"createRedirects"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"#CreateRedirectsFn",children:"CreateRedirectsFn"})})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"undefined"})}),(0,r.jsx)(t.td,{children:"A callback to create a redirect rule. Docusaurus query this callback against every path it has created, and use its return value to output more paths."})]})]})]})}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsxs)(t.p,{children:["This plugin will also read the ",(0,r.jsx)(t.a,{href:"/zh-CN/docs/3.0.0/api/docusaurus-config#onDuplicateRoutes",children:(0,r.jsx)(t.code,{children:"siteConfig.onDuplicateRoutes"})})," config to adjust its logging level when multiple files will be emitted to the same location."]})}),"\n",(0,r.jsx)(t.h3,{id:"types",children:"Types"}),"\n",(0,r.jsx)(t.h4,{id:"RedirectRule",children:(0,r.jsx)(t.code,{children:"RedirectRule"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"type RedirectRule = {\n  to: string;\n  from: string | string[];\n};\n"})}),"\n",(0,r.jsxs)(t.admonition,{type:"note",children:[(0,r.jsxs)(t.p,{children:['The idea of "from" and "to" is central in this plugin. "From" means a path that you want to ',(0,r.jsx)(t.em,{children:"create"}),', i.e. an extra HTML file that will be written; "to" means a path to want to redirect ',(0,r.jsx)(t.em,{children:"to"}),", usually a route that Docusaurus already knows about."]}),(0,r.jsx)(t.p,{children:'This is why you can have multiple "from" for the same "to": we will create multiple HTML files that all redirect to the same destination. On the other hand, one "from" can never have more than one "to": the written HTML file needs to have a determinate destination.'})]}),"\n",(0,r.jsx)(t.h4,{id:"CreateRedirectsFn",children:(0,r.jsx)(t.code,{children:"CreateRedirectsFn"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:'// The parameter `path` is a route that Docusaurus has already created. It can\n// be seen as the "to", and your return value is the "from". Returning a falsy\n// value will not create any redirect pages for this particular path.\ntype CreateRedirectsFn = (path: string) => string[] | string | null | undefined;\n'})}),"\n",(0,r.jsx)(t.h3,{id:"ex-config",children:"Example configuration"}),"\n",(0,r.jsx)(t.p,{children:"Here's an example configuration:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  plugins: [\n    [\n      '@docusaurus/plugin-client-redirects',\n      // highlight-start\n      {\n        fromExtensions: ['html', 'htm'], // /myPage.html -> /myPage\n        toExtensions: ['exe', 'zip'], // /myAsset -> /myAsset.zip (if latter exists)\n        redirects: [\n          // /docs/oldDoc -> /docs/newDoc\n          {\n            to: '/docs/newDoc',\n            from: '/docs/oldDoc',\n          },\n          // Redirect from multiple old paths to the new path\n          {\n            to: '/docs/newDoc2',\n            from: ['/docs/oldDocFrom2019', '/docs/legacyDocFrom2016'],\n          },\n        ],\n        createRedirects(existingPath) {\n          if (existingPath.includes('/community')) {\n            // Redirect from /docs/team/X to /community/X and /docs/support/X to /community/X\n            return [\n              existingPath.replace('/community', '/docs/team'),\n              existingPath.replace('/community', '/docs/support'),\n            ];\n          }\n          return undefined; // Return a falsy value: no redirect created\n        },\n      },\n      // highlight-end\n    ],\n  ],\n};\n"})})]})}function f(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},71670:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>a});var r=n(27378);const i={},s=r.createContext(i);function a(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);