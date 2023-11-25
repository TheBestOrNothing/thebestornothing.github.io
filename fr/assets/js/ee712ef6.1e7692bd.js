"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[64569],{61132:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(24246),o=(r(27378),r(40624));const a={tabItem:"tabItem_pnkT"};function i({children:e,hidden:t,className:r}){return(0,n.jsx)("div",{role:"tabpanel",className:(0,o.Z)(a.tabItem,r),hidden:t,children:e})}},97555:(e,t,r)=>{r.d(t,{Z:()=>D});var n=r(24246),o=r(27378),a=r(40624),i=r(75527),s=r(3620),u=r(44479),l=r(62821),c=r(52196),d=r(53589);function h(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function b(e){var t,r;return null!==(r=null===(t=o.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))||void 0===t?void 0:t.filter(Boolean))&&void 0!==r?r:[]}function f(e){const{values:t,children:r}=e;return(0,o.useMemo)((()=>{const e=null!=t?t:function(e){return b(e).map((({props:{value:e,label:t,attributes:r,default:n}})=>({value:e,label:t,attributes:r,default:n})))}(r);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m({value:e,tabValues:t}){return t.some((t=>t.value===e))}function g({queryString:e=!1,groupId:t}){const r=(0,s.k6)(),n=function({queryString:e=!1,groupId:t}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:e,groupId:t}),a=(0,l._X)(n),i=(0,o.useCallback)((e=>{if(!n)return;const t=new URLSearchParams(r.location.search);t.set(n,e),r.replace(p(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){h(e,t,r[t])}))}return e}({},r.location),{search:t.toString()}))}),[n,r]);return[a,i]}function v(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,a=f(e),[i,s]=(0,o.useState)((()=>function({defaultValue:e,tabValues:t}){if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!m({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}var r;const n=null!==(r=t.find((e=>e.default)))&&void 0!==r?r:t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:a}))),[l,c]=g({queryString:r,groupId:n}),[h,p]=function({groupId:e}){const t=function(e){return e?`docusaurus.tab.${e}`:null}(e),[r,n]=(0,d.Nk)(t);return[r,(0,o.useCallback)((e=>{t&&n.set(e)}),[t,n])]}({groupId:n}),b=(()=>{const e=null!=l?l:h;return m({value:e,tabValues:a})?e:null})();(0,u.Z)((()=>{b&&s(b)}),[b]);return{selectedValue:i,selectValue:(0,o.useCallback)((e=>{if(!m({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);s(e),c(e),p(e)}),[c,p,a]),tabValues:a}}var y=r(29088);const j={tabList:"tabList_Qoir",tabItem:"tabItem_AQgk"};function w(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){w(e,t,r[t])}))}return e}function x(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function k({className:e,block:t,selectedValue:r,selectValue:o,tabValues:s}){const u=[],{blockElementScrollPositionUntilNextRender:l}=(0,i.o5)(),c=e=>{const t=e.currentTarget,n=u.indexOf(t),a=s[n].value;a!==r&&(l(t),o(a))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;var r;t=null!==(r=u[n])&&void 0!==r?r:u[0];break}case"ArrowLeft":{const r=u.indexOf(e.currentTarget)-1;var n;t=null!==(n=u[r])&&void 0!==n?n:u[u.length-1];break}}null==t||t.focus()};return(0,n.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},e),children:s.map((({value:e,label:t,attributes:o})=>(0,n.jsx)("li",x(O({role:"tab",tabIndex:r===e?0:-1,"aria-selected":r===e,ref:e=>u.push(e),onKeyDown:d,onClick:c},o),{className:(0,a.Z)("tabs__item",j.tabItem,null==o?void 0:o.className,{"tabs__item--active":r===e}),children:null!=t?t:e}),e)))})}function S({lazy:e,children:t,selectedValue:r}){const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){const e=a.find((e=>e.props.value===r));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return(0,n.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function P(e){const t=v(e);return(0,n.jsxs)("div",{className:(0,a.Z)("tabs-container",j.tabList),children:[(0,n.jsx)(k,O({},e,t)),(0,n.jsx)(S,O({},e,t))]})}function D(e){const t=(0,y.Z)();return(0,n.jsx)(P,x(O({},e),{children:b(e.children)}),String(t))}},24352:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/architecture-5b7220912f5cfdff40a7728233abb902.png"},13395:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>u,toc:()=>c});var n=r(24246),o=r(71670),a=(r(97555),r(61132),r(47257));const i={description:"How Docusaurus works to build your app"},s="Architecture",u={id:"advanced/architecture",title:"Architecture",description:"How Docusaurus works to build your app",source:"@site/docs/advanced/architecture.mdx",sourceDirName:"advanced",slug:"/advanced/architecture",permalink:"/fr/docs/next/advanced/architecture",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/docusaurus-v2/fr",tags:[],version:"current",lastUpdatedBy:"Gitcoins",lastUpdatedAt:1700898384,formattedLastUpdatedAt:"25 nov. 2023",frontMatter:{description:"How Docusaurus works to build your app"},sidebar:"docs",previous:{title:"Advanced Tutorials",permalink:"/fr/docs/next/advanced/"},next:{title:"Plugins",permalink:"/fr/docs/next/advanced/plugins"}},l={},c=[];function d(e){const t={a:"a",code:"code",h1:"h1",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"architecture",children:"Architecture"}),"\n","\n","\n",(0,n.jsx)(a.Z,{children:(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Architecture overview",src:r(24352).Z+"",width:"2228",height:"2007"})})}),"\n",(0,n.jsx)(t.p,{children:"This diagram shows how Docusaurus works to build your app. Plugins each collect their content and emit JSON data; themes provide layout components which receive the JSON data as route modules. The bundler bundles all the components and emits a server bundle and a client bundle."}),"\n",(0,n.jsx)(t.p,{children:"Although you (either plugin authors or site creators) are writing JavaScript all the time, bear in mind that the JS is actually run in different environments:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["All plugin lifecycle methods are run in Node. Therefore, until we support ES Modules in our codebase, plugin source code must be provided as ES modules that can be imported, or CommonJS that can be ",(0,n.jsx)(t.code,{children:"require"}),"'d."]}),"\n",(0,n.jsx)(t.li,{children:"The theme code is built with Webpack. They can be provided as ESM\u2014following React conventions."}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Plugin code and theme code never directly import each other: they only communicate through protocols (in our case, through JSON temp files and calls to ",(0,n.jsx)(t.code,{children:"addRoute"}),"). A useful mental model is to imagine that the plugins are not written in JavaScript, but in another language like Rust. The only way to interact with plugins for the user is through ",(0,n.jsx)(t.code,{children:"docusaurus.config.js"}),", which itself is run in Node (hence you can use ",(0,n.jsx)(t.code,{children:"require"})," and pass callbacks as plugin options)."]}),"\n",(0,n.jsxs)(t.p,{children:["During bundling, the config file itself is serialized and bundled, allowing the theme to access config options like ",(0,n.jsx)(t.code,{children:"themeConfig"})," or ",(0,n.jsx)(t.code,{children:"baseUrl"})," through ",(0,n.jsx)(t.a,{href:"/fr/docs/next/docusaurus-core#useDocusaurusContext",children:(0,n.jsx)(t.code,{children:"useDocusaurusContext()"})}),". However, the ",(0,n.jsx)(t.code,{children:"siteConfig"})," object only contains ",(0,n.jsx)(t.strong,{children:"serializable values"})," (values that are preserved after ",(0,n.jsx)(t.code,{children:"JSON.stringify()"}),"). Functions, regexes, etc. would be lost on the client side. The ",(0,n.jsx)(t.code,{children:"themeConfig"})," is designed to be entirely serializable."]})]})}function h(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}}}]);