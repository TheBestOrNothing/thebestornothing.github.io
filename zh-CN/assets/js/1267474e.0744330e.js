"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[61221],{61132:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(24246),a=(n(27378),n(40624));const i={tabItem:"tabItem_pnkT"};function o({children:e,hidden:t,className:n}){return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.Z)(i.tabItem,n),hidden:t,children:e})}},97555:(e,t,n)=>{n.d(t,{Z:()=>C});var r=n(24246),a=n(27378),i=n(40624),o=n(75527),s=n(3620),l=n(44479),c=n(62821),u=n(52196),d=n(53589);function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function m(e){var t,n;return null!==(n=null===(t=a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))||void 0===t?void 0:t.filter(Boolean))&&void 0!==n?n:[]}function b(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=null!=t?t:function(e){return m(e).map((({props:{value:e,label:t,attributes:n,default:r}})=>({value:e,label:t,attributes:n,default:r})))}(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function g({value:e,tabValues:t}){return t.some((t=>t.value===e))}function f({queryString:e=!1,groupId:t}){const n=(0,s.k6)(),r=function({queryString:e=!1,groupId:t}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:e,groupId:t}),i=(0,c._X)(r),o=(0,a.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace(p(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){h(e,t,n[t])}))}return e}({},n.location),{search:t.toString()}))}),[r,n]);return[i,o]}function j(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,i=b(e),[o,s]=(0,a.useState)((()=>function({defaultValue:e,tabValues:t}){if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!g({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}var n;const r=null!==(n=t.find((e=>e.default)))&&void 0!==n?n:t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:i}))),[c,u]=f({queryString:n,groupId:r}),[h,p]=function({groupId:e}){const t=function(e){return e?`docusaurus.tab.${e}`:null}(e),[n,r]=(0,d.Nk)(t);return[n,(0,a.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:r}),m=(()=>{const e=null!=c?c:h;return g({value:e,tabValues:i})?e:null})();(0,l.Z)((()=>{m&&s(m)}),[m]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!g({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),p(e)}),[u,p,i]),tabValues:i}}var x=n(29088);const v={tabList:"tabList_Qoir",tabItem:"tabItem_AQgk"};function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){y(e,t,n[t])}))}return e}function O(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function k({className:e,block:t,selectedValue:n,selectValue:a,tabValues:s}){const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),u=e=>{const t=e.currentTarget,r=l.indexOf(t),i=s[r].value;i!==n&&(c(t),a(i))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;var n;t=null!==(n=l[r])&&void 0!==n?n:l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;var r;t=null!==(r=l[n])&&void 0!==r?r:l[l.length-1];break}}null==t||t.focus()};return(0,r.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},e),children:s.map((({value:e,label:t,attributes:a})=>(0,r.jsx)("li",O(w({role:"tab",tabIndex:n===e?0:-1,"aria-selected":n===e,ref:e=>l.push(e),onKeyDown:d,onClick:u},a),{className:(0,i.Z)("tabs__item",v.tabItem,null==a?void 0:a.className,{"tabs__item--active":n===e}),children:null!=t?t:e}),e)))})}function I({lazy:e,children:t,selectedValue:n}){const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){const e=i.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,r.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function P(e){const t=j(e);return(0,r.jsxs)("div",{className:(0,i.Z)("tabs-container",v.tabList),children:[(0,r.jsx)(k,w({},e,t)),(0,r.jsx)(I,w({},e,t))]})}function C(e){const t=(0,x.Z)();return(0,r.jsx)(P,O(w({},e),{children:m(e.children)}),String(t))}},91507:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var r=n(24246),a=n(71670),i=n(97555),o=n(61132);const s={slug:"/migration/v2/automated"},l="Automated migration",c={id:"migration/v2/migration-automated",title:"Automated migration",description:"The migration CLI automatically migrates your v1 website to a v2 website.",source:"@site/docs/migration/v2/migration-automated.mdx",sourceDirName:"migration/v2",slug:"/migration/v2/automated",permalink:"/zh-CN/docs/next/migration/v2/automated",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/docusaurus-v2/zh-CN",tags:[],version:"current",lastUpdatedBy:"Gitcoins",lastUpdatedAt:1701425202,formattedLastUpdatedAt:"2023\u5e7412\u67081\u65e5",frontMatter:{slug:"/migration/v2/automated"},sidebar:"abc",previous:{title:"Overview",permalink:"/zh-CN/docs/next/migration/v2"},next:{title:"Manual migration",permalink:"/zh-CN/docs/next/migration/v2/manual"}},u={},d=[{value:"Options",id:"options",level:4}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"automated-migration",children:"Automated migration"}),"\n",(0,r.jsx)(t.p,{children:"The migration CLI automatically migrates your v1 website to a v2 website."}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsx)(t.p,{children:"Manual work is still required after using the migration CLI, as we can't automate a full migration"})}),"\n",(0,r.jsx)(t.p,{children:"The migration CLI migrates:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Site configurations (from ",(0,r.jsx)(t.code,{children:"siteConfig.js"})," to ",(0,r.jsx)(t.code,{children:"docusaurus.config.js"}),")"]}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"package.json"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"sidebars.json"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"/docs"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"/blog"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"/static"})}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"versioned_sidebar.json"})," and ",(0,r.jsx)(t.code,{children:"/versioned_docs"})," if your site uses versioning"]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"To use the migration CLI, follow these steps:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Before using the migration CLI, ensure that ",(0,r.jsx)(t.code,{children:"/docs"}),", ",(0,r.jsx)(t.code,{children:"/blog"}),", ",(0,r.jsx)(t.code,{children:"/static"}),", ",(0,r.jsx)(t.code,{children:"sidebars.json"}),", ",(0,r.jsx)(t.code,{children:"siteConfig.js"}),", ",(0,r.jsx)(t.code,{children:"package.json"})," follow the ",(0,r.jsx)(t.a,{href:"#",children:"structure"})," shown at the start of this page."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"To migrate your v1 website, run the migration CLI with the appropriate filesystem paths:"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"# migration command format\nnpx @docusaurus/migrate migrate <v1 website directory> <desired v2 website directory>\n\n# example\nnpx @docusaurus/migrate migrate ./v1-website ./v2-website\n"})}),"\n",(0,r.jsxs)(t.ol,{start:"3",children:["\n",(0,r.jsx)(t.li,{children:"To view your new website locally, go into your v2 website's directory and start your development server."}),"\n"]}),"\n",(0,r.jsxs)(i.Z,{groupId:"npm2yarn",children:[(0,r.jsx)(o.Z,{value:"npm",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"cd ./v2-website\nnpm install\nnpm start\n"})})}),(0,r.jsx)(o.Z,{value:"yarn",label:"Yarn",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"cd ./v2-website\nyarn install\nyarn start\n"})})}),(0,r.jsx)(o.Z,{value:"pnpm",label:"pnpm",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"cd ./v2-website\npnpm install\npnpm start\n"})})})]}),"\n",(0,r.jsx)(t.admonition,{type:"danger",children:(0,r.jsx)(t.p,{children:"The migration CLI updates existing files. Be sure to have committed them first!"})}),"\n",(0,r.jsx)(t.h4,{id:"options",children:"Options"}),"\n",(0,r.jsx)(t.p,{children:"You can add option flags to the migration CLI to automatically migrate Markdown content and pages to v2. It is likely that you will still need to make some manual changes to achieve your desired result."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"--mdx"})}),(0,r.jsx)(t.td,{children:"Add this flag to convert Markdown to MDX automatically"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"--page"})}),(0,r.jsx)(t.td,{children:"Add this flag to migrate pages automatically"})]})]})]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"# example using options\nnpx @docusaurus/migrate migrate --mdx --page ./v1-website ./v2-website\n"})}),"\n",(0,r.jsxs)(t.admonition,{type:"danger",children:[(0,r.jsx)(t.p,{children:"The migration of pages and MDX is still a work in progress."}),(0,r.jsxs)(t.p,{children:["We recommend you to try to run the pages without these options, commit, and then try to run the migration again with the ",(0,r.jsx)(t.code,{children:"--page"})," and ",(0,r.jsx)(t.code,{children:"--mdx"})," options."]}),(0,r.jsx)(t.p,{children:"This way, you'd be able to easily inspect and fix the diff."})]})]})}function p(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},71670:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>o});var r=n(27378);const a={},i=r.createContext(a);function o(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);