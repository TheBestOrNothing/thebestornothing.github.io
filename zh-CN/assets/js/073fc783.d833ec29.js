"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[86456],{61132:(e,r,n)=>{n.d(r,{Z:()=>s});var t=n(24246),a=(n(27378),n(40624));const i={tabItem:"tabItem_pnkT"};function s({children:e,hidden:r,className:n}){return(0,t.jsx)("div",{role:"tabpanel",className:(0,a.Z)(i.tabItem,n),hidden:r,children:e})}},97555:(e,r,n)=>{n.d(r,{Z:()=>S});var t=n(24246),a=n(27378),i=n(40624),s=n(75527),o=n(3620),l=n(44479),u=n(62821),c=n(52196),d=n(53589);function m(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function h(e,r){return r=null!=r?r:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):function(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})),e}function p(e){var r,n;return null!==(n=null===(r=a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))||void 0===r?void 0:r.filter(Boolean))&&void 0!==n?n:[]}function f(e){const{values:r,children:n}=e;return(0,a.useMemo)((()=>{const e=null!=r?r:function(e){return p(e).map((({props:{value:e,label:r,attributes:n,default:t}})=>({value:e,label:r,attributes:n,default:t})))}(n);return function(e){const r=(0,c.l)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,n])}function g({value:e,tabValues:r}){return r.some((r=>r.value===e))}function b({queryString:e=!1,groupId:r}){const n=(0,o.k6)(),t=function({queryString:e=!1,groupId:r}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:e,groupId:r}),i=(0,u._X)(t),s=(0,a.useCallback)((e=>{if(!t)return;const r=new URLSearchParams(n.location.search);r.set(t,e),n.replace(h(function(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),t.forEach((function(r){m(e,r,n[r])}))}return e}({},n.location),{search:r.toString()}))}),[t,n]);return[i,s]}function j(e){const{defaultValue:r,queryString:n=!1,groupId:t}=e,i=f(e),[s,o]=(0,a.useState)((()=>function({defaultValue:e,tabValues:r}){if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!g({value:e,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}var n;const t=null!==(n=r.find((e=>e.default)))&&void 0!==n?n:r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:r,tabValues:i}))),[u,c]=b({queryString:n,groupId:t}),[m,h]=function({groupId:e}){const r=function(e){return e?`docusaurus.tab.${e}`:null}(e),[n,t]=(0,d.Nk)(r);return[n,(0,a.useCallback)((e=>{r&&t.set(e)}),[r,t])]}({groupId:t}),p=(()=>{const e=null!=u?u:m;return g({value:e,tabValues:i})?e:null})();(0,l.Z)((()=>{p&&o(p)}),[p]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!g({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),c(e),h(e)}),[c,h,i]),tabValues:i}}var x=n(29088);const v={tabList:"tabList_Qoir",tabItem:"tabItem_AQgk"};function y(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function w(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),t.forEach((function(r){y(e,r,n[r])}))}return e}function O(e,r){return r=null!=r?r:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):function(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})),e}function k({className:e,block:r,selectedValue:n,selectValue:a,tabValues:o}){const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.o5)(),c=e=>{const r=e.currentTarget,t=l.indexOf(r),i=o[t].value;i!==n&&(u(r),a(i))},d=e=>{let r=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;var n;r=null!==(n=l[t])&&void 0!==n?n:l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;var t;r=null!==(t=l[n])&&void 0!==t?t:l[l.length-1];break}}null==r||r.focus()};return(0,t.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},e),children:o.map((({value:e,label:r,attributes:a})=>(0,t.jsx)("li",O(w({role:"tab",tabIndex:n===e?0:-1,"aria-selected":n===e,ref:e=>l.push(e),onKeyDown:d,onClick:c},a),{className:(0,i.Z)("tabs__item",v.tabItem,null==a?void 0:a.className,{"tabs__item--active":n===e}),children:null!=r?r:e}),e)))})}function D({lazy:e,children:r,selectedValue:n}){const i=(Array.isArray(r)?r:[r]).filter(Boolean);if(e){const e=i.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,t.jsx)("div",{className:"margin-top--md",children:i.map(((e,r)=>(0,a.cloneElement)(e,{key:r,hidden:e.props.value!==n})))})}function P(e){const r=j(e);return(0,t.jsxs)("div",{className:(0,i.Z)("tabs-container",v.tabList),children:[(0,t.jsx)(k,w({},e,r)),(0,t.jsx)(D,w({},e,r))]})}function S(e){const r=(0,x.Z)();return(0,t.jsx)(P,O(w({},e),{children:p(e.children)}),String(r))}},30082:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>u,toc:()=>d});var t=n(24246),a=n(71670),i=n(97555),s=n(61132);const o={id:"diagrams",title:"Diagrams",description:"Writing diagrams with Mermaid",slug:"/markdown-features/diagrams"},l="Diagrams",u={id:"guides/markdown-features/diagrams",title:"Diagrams",description:"Writing diagrams with Mermaid",source:"@site/versioned_docs/version-3.0.1/guides/markdown-features/markdown-features-diagrams.mdx",sourceDirName:"guides/markdown-features",slug:"/markdown-features/diagrams",permalink:"/zh-CN/docs/markdown-features/diagrams",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/docusaurus-v2/zh-CN",tags:[],version:"3.0.1",frontMatter:{id:"diagrams",title:"Diagrams",description:"Writing diagrams with Mermaid",slug:"/markdown-features/diagrams"},sidebar:"abc",previous:{title:"Math Equations",permalink:"/zh-CN/docs/markdown-features/math-equations"},next:{title:"Head metadata",permalink:"/zh-CN/docs/markdown-features/head-metadata"}},c={},d=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Theming",id:"theming",level:2},{value:"Mermaid Config",id:"configuration",level:2}];function m(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",mermaid:"mermaid",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"diagrams",children:"Diagrams"}),"\n",(0,t.jsxs)(r.p,{children:["Diagrams can be rendered using ",(0,t.jsx)(r.a,{href:"https://mermaid-js.github.io/mermaid/",children:"Mermaid"})," in a code block."]}),"\n",(0,t.jsx)(r.h2,{id:"installation",children:"Installation"}),"\n",(0,t.jsxs)(i.Z,{groupId:"npm2yarn",children:[(0,t.jsx)(s.Z,{value:"npm",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"npm install --save @docusaurus/theme-mermaid\n"})})}),(0,t.jsx)(s.Z,{value:"yarn",label:"Yarn",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"yarn add @docusaurus/theme-mermaid\n"})})}),(0,t.jsx)(s.Z,{value:"pnpm",label:"pnpm",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"pnpm add @docusaurus/theme-mermaid\n"})})})]}),"\n",(0,t.jsxs)(r.p,{children:["Enable Mermaid functionality by adding plugin ",(0,t.jsx)(r.code,{children:"@docusaurus/theme-mermaid"})," and setting ",(0,t.jsx)(r.code,{children:"markdown.mermaid"})," to ",(0,t.jsx)(r.code,{children:"true"})," in your ",(0,t.jsx)(r.code,{children:"docusaurus.config.js"}),"."]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  markdown: {\n    mermaid: true,\n  },\n  themes: ['@docusaurus/theme-mermaid'],\n};\n"})}),"\n",(0,t.jsx)(r.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(r.p,{children:["Add a code block with language ",(0,t.jsx)(r.code,{children:"mermaid"}),":"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-md",metastring:'title="Example Mermaid diagram"',children:"```mermaid\ngraph TD;\n    A--\x3eB;\n    A--\x3eC;\n    B--\x3eD;\n    C--\x3eD;\n```\n"})}),"\n",(0,t.jsx)(r.mermaid,{value:"graph TD;\n    A--\x3eB;\n    A--\x3eC;\n    B--\x3eD;\n    C--\x3eD;"}),"\n",(0,t.jsxs)(r.p,{children:["See the ",(0,t.jsx)(r.a,{href:"https://mermaid-js.github.io/mermaid/#/./n00b-syntaxReference",children:"Mermaid syntax documentation"})," for more information on the Mermaid syntax."]}),"\n",(0,t.jsx)(r.h2,{id:"theming",children:"Theming"}),"\n",(0,t.jsxs)(r.p,{children:["The diagram dark and light themes can be changed by setting ",(0,t.jsx)(r.code,{children:"mermaid.theme"})," values in the ",(0,t.jsx)(r.code,{children:"themeConfig"})," in your ",(0,t.jsx)(r.code,{children:"docusaurus.config.js"}),". You can set themes for both light and dark mode."]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  themeConfig: {\n    mermaid: {\n      theme: {light: 'neutral', dark: 'forest'},\n    },\n  },\n};\n"})}),"\n",(0,t.jsxs)(r.p,{children:["See the ",(0,t.jsx)(r.a,{href:"https://mermaid-js.github.io/mermaid/#/theming",children:"Mermaid theme documentation"})," for more information on theming Mermaid diagrams."]}),"\n",(0,t.jsx)(r.h2,{id:"configuration",children:"Mermaid Config"}),"\n",(0,t.jsxs)(r.p,{children:["Options in ",(0,t.jsx)(r.code,{children:"mermaid.options"})," will be passed directly to ",(0,t.jsx)(r.code,{children:"mermaid.initialize"}),":"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  themeConfig: {\n    mermaid: {\n      options: {\n        maxTextSize: 50,\n      },\n    },\n  },\n};\n"})}),"\n",(0,t.jsxs)(r.p,{children:["See the ",(0,t.jsx)(r.a,{href:"https://mermaid-js.github.io/mermaid/#/./Setup?id=configuration",children:"Mermaid config documentation"})," and the ",(0,t.jsx)(r.a,{href:"https://github.com/mermaid-js/mermaid/blob/master/packages/mermaid/src/config.type.ts",children:"Mermaid config types"})," for the available config options."]})]})}function h(e={}){const{wrapper:r}={...(0,a.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},71670:(e,r,n)=>{n.d(r,{Z:()=>o,a:()=>s});var t=n(27378);const a={},i=t.createContext(a);function s(e){const r=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(i.Provider,{value:r},e.children)}}}]);