"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[91557],{61132:(e,n,t)=>{t.d(n,{Z:()=>s});var r=t(24246),i=(t(27378),t(40624));const l={tabItem:"tabItem_pnkT"};function s({children:e,hidden:n,className:t}){return(0,r.jsx)("div",{role:"tabpanel",className:(0,i.Z)(l.tabItem,t),hidden:n,children:e})}},97555:(e,n,t)=>{t.d(n,{Z:()=>D});var r=t(24246),i=t(27378),l=t(40624),s=t(75527),a=t(3620),o=t(44479),c=t(62821),d=t(52196),u=t(53589);function h(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function g(e){var n,t;return null!==(t=null===(n=i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))||void 0===n?void 0:n.filter(Boolean))&&void 0!==t?t:[]}function m(e){const{values:n,children:t}=e;return(0,i.useMemo)((()=>{const e=null!=n?n:function(e){return g(e).map((({props:{value:e,label:n,attributes:t,default:r}})=>({value:e,label:n,attributes:t,default:r})))}(t);return function(e){const n=(0,d.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function f({value:e,tabValues:n}){return n.some((n=>n.value===e))}function j({queryString:e=!1,groupId:n}){const t=(0,a.k6)(),r=function({queryString:e=!1,groupId:n}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:e,groupId:n}),l=(0,c._X)(r),s=(0,i.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(t.location.search);n.set(r,e),t.replace(p(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){h(e,n,t[n])}))}return e}({},t.location),{search:n.toString()}))}),[r,t]);return[l,s]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,l=m(e),[s,a]=(0,i.useState)((()=>function({defaultValue:e,tabValues:n}){if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!f({value:e,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}var t;const r=null!==(t=n.find((e=>e.default)))&&void 0!==t?t:n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:l}))),[c,d]=j({queryString:t,groupId:r}),[h,p]=function({groupId:e}){const n=function(e){return e?`docusaurus.tab.${e}`:null}(e),[t,r]=(0,u.Nk)(n);return[t,(0,i.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:r}),g=(()=>{const e=null!=c?c:h;return f({value:e,tabValues:l})?e:null})();(0,o.Z)((()=>{g&&a(g)}),[g]);return{selectedValue:s,selectValue:(0,i.useCallback)((e=>{if(!f({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);a(e),d(e),p(e)}),[d,p,l]),tabValues:l}}var x=t(29088);const y={tabList:"tabList_Qoir",tabItem:"tabItem_AQgk"};function v(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function w(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){v(e,n,t[n])}))}return e}function O(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function I({className:e,block:n,selectedValue:t,selectValue:i,tabValues:a}){const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),d=e=>{const n=e.currentTarget,r=o.indexOf(n),l=a[r].value;l!==t&&(c(n),i(l))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=o.indexOf(e.currentTarget)+1;var t;n=null!==(t=o[r])&&void 0!==t?t:o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;var r;n=null!==(r=o[t])&&void 0!==r?r:o[o.length-1];break}}null==n||n.focus()};return(0,r.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},e),children:a.map((({value:e,label:n,attributes:i})=>(0,r.jsx)("li",O(w({role:"tab",tabIndex:t===e?0:-1,"aria-selected":t===e,ref:e=>o.push(e),onKeyDown:u,onClick:d},i),{className:(0,l.Z)("tabs__item",y.tabItem,null==i?void 0:i.className,{"tabs__item--active":t===e}),children:null!=n?n:e}),e)))})}function k({lazy:e,children:n,selectedValue:t}){const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(e){const e=l.find((e=>e.props.value===t));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,r.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function P(e){const n=b(e);return(0,r.jsxs)("div",{className:(0,l.Z)("tabs-container",y.tabList),children:[(0,r.jsx)(I,w({},e,n)),(0,r.jsx)(k,w({},e,n))]})}function D(e){const n=(0,x.Z)();return(0,r.jsx)(P,O(w({},e),{children:g(e.children)}),String(n))}},52605:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(24246),i=t(27378),l=t(3620);const s={apiTable:"apiTable_e8hp"};function a({name:e,children:n},t){const s=function(e){let n=e;for(;(0,i.isValidElement)(n);)[n]=i.Children.toArray(n.props.children);return n}(n),a=e?`${e}-${s}`:s,o=`#${a}`,c=(0,l.k6)();return(0,r.jsx)("tr",{id:a,tabIndex:0,ref:c.location.hash===o?t:void 0,onClick:e=>{"A"===e.target.tagName.toUpperCase()||c.push(o)},onKeyDown:e=>{"Enter"===e.key&&c.push(o)},children:n.props.children})}const o=i.forwardRef(a);function c({children:e,name:n}){const[t,l]=i.Children.toArray(e.props.children),a=(0,i.useRef)(null);(0,i.useEffect)((()=>{var e;null===(e=a.current)||void 0===e||e.focus()}),[a]);const c=i.Children.map(l.props.children,(e=>(0,r.jsx)(o,{name:n,ref:a,children:e})));return(0,r.jsxs)("table",{className:s.apiTable,children:[t,(0,r.jsx)("tbody",{children:c})]})}},42528:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>g,frontMatter:()=>o,metadata:()=>d,toc:()=>h});var r=t(24246),i=t(71670),l=t(97555),s=t(61132),a=t(52605);const o={sidebar_position:8,slug:"/api/plugins/@docusaurus/plugin-ideal-image"},c="\ud83d\udce6 plugin-ideal-image",d={id:"api/plugins/plugin-ideal-image",title:"\ud83d\udce6 plugin-ideal-image",description:"Docusaurus Plugin to generate an almost ideal image (responsive, lazy-loading, and low quality placeholder).",source:"@site/docs/api/plugins/plugin-ideal-image.mdx",sourceDirName:"api/plugins",slug:"/api/plugins/@docusaurus/plugin-ideal-image",permalink:"/docs/next/api/plugins/@docusaurus/plugin-ideal-image",draft:!1,unlisted:!1,editUrl:"https://github.com/vulnsystem/vulnsystem.github.io/edit/main/website/docs/api/plugins/plugin-ideal-image.mdx",tags:[],version:"current",lastUpdatedBy:"Gitcoins",lastUpdatedAt:1700901089,formattedLastUpdatedAt:"Nov 25, 2023",sidebarPosition:8,frontMatter:{sidebar_position:8,slug:"/api/plugins/@docusaurus/plugin-ideal-image"},sidebar:"api",previous:{title:"\ud83d\udce6 plugin-google-tag-manager",permalink:"/docs/next/api/plugins/@docusaurus/plugin-google-tag-manager"},next:{title:"\ud83d\udce6 plugin-pwa",permalink:"/docs/next/api/plugins/@docusaurus/plugin-pwa"}},u={},h=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Example configuration",id:"ex-config",level:3}];function p(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"-plugin-ideal-image",children:"\ud83d\udce6 plugin-ideal-image"}),"\n","\n","\n",(0,r.jsx)(n.p,{children:"Docusaurus Plugin to generate an almost ideal image (responsive, lazy-loading, and low quality placeholder)."}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["By default, the plugin is ",(0,r.jsx)(n.strong,{children:"inactive in development"})," so you could always view full-scale images. If you want to debug the ideal image behavior, you could set the ",(0,r.jsx)(n.a,{href:"#disableInDev",children:(0,r.jsx)(n.code,{children:"disableInDev"})})," option to ",(0,r.jsx)(n.code,{children:"false"}),"."]})}),"\n",(0,r.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,r.jsxs)(l.Z,{groupId:"npm2yarn",children:[(0,r.jsx)(s.Z,{value:"npm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm install --save @docusaurus/plugin-ideal-image\n"})})}),(0,r.jsx)(s.Z,{value:"yarn",label:"Yarn",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"yarn add @docusaurus/plugin-ideal-image\n"})})}),(0,r.jsx)(s.Z,{value:"pnpm",label:"pnpm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"pnpm add @docusaurus/plugin-ideal-image\n"})})})]}),"\n",(0,r.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(n.p,{children:"This plugin supports the PNG and JPG formats only."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:"import Image from '@theme/IdealImage';\nimport thumbnail from './path/to/img.png';\n\n// your React code\n<Image img={thumbnail} />\n\n// or\n<Image img={require('./path/to/img.png')} />\n"})}),"\n",(0,r.jsxs)(n.admonition,{type:"warning",children:[(0,r.jsxs)(n.p,{children:["This plugin registers a ",(0,r.jsx)(n.a,{href:"https://webpack.js.org/loaders/",children:"Webpack loader"})," that changes the type of imported/require images:"]}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Before: ",(0,r.jsx)(n.code,{children:"string"})]}),"\n",(0,r.jsxs)(n.li,{children:["After: ",(0,r.jsx)(n.code,{children:'{preSrc: string, src: import("@theme/IdealImage").SrcImage}'})]}),"\n"]})]}),"\n",(0,r.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,r.jsx)(n.p,{children:"Accepted fields:"}),"\n",(0,r.jsx)(a.Z,{children:(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Option"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Default"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"name"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"ideal-img/[name].[hash:hex:7].[width].[ext]"})}),(0,r.jsx)(n.td,{children:"Filename template for output files."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"sizes"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"number[]"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.em,{children:"original size"})}),(0,r.jsx)(n.td,{children:"Specify all widths you want to use. If a specified size exceeds the original image's width, the latter will be used (i.e. images won't be scaled up)."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"size"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"number"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.em,{children:"original size"})}),(0,r.jsx)(n.td,{children:"Specify one width you want to use; if the specified size exceeds the original image's width, the latter will be used (i.e. images won't be scaled up)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"min"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"number"})}),(0,r.jsx)(n.td,{}),(0,r.jsxs)(n.td,{children:["As an alternative to manually specifying ",(0,r.jsx)(n.code,{children:"sizes"}),", you can specify ",(0,r.jsx)(n.code,{children:"min"}),", ",(0,r.jsx)(n.code,{children:"max"})," and ",(0,r.jsx)(n.code,{children:"steps"}),", and the sizes will be generated for you."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"max"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"number"})}),(0,r.jsx)(n.td,{}),(0,r.jsxs)(n.td,{children:["See ",(0,r.jsx)(n.code,{children:"min"})," above"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"steps"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"number"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"4"})}),(0,r.jsxs)(n.td,{children:["Configure the number of images generated between ",(0,r.jsx)(n.code,{children:"min"})," and ",(0,r.jsx)(n.code,{children:"max"})," (inclusive)"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"quality"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"number"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"85"})}),(0,r.jsx)(n.td,{children:"JPEG compression quality"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"disableInDev"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"boolean"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"true"})}),(0,r.jsxs)(n.td,{children:["You can test ideal image behavior in dev mode by setting this to ",(0,r.jsx)(n.code,{children:"false"}),". ",(0,r.jsx)(n.strong,{children:"Tip"}),": use ",(0,r.jsx)(n.a,{href:"https://www.browserstack.com/guide/how-to-perform-network-throttling-in-chrome",children:"network throttling"})," in your browser to simulate slow networks."]})]})]})]})}),"\n",(0,r.jsx)(n.h3,{id:"ex-config",children:"Example configuration"}),"\n",(0,r.jsx)(n.p,{children:"Here's an example configuration:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  plugins: [\n    [\n      '@docusaurus/plugin-ideal-image',\n      // highlight-start\n      {\n        quality: 70,\n        max: 1030, // max resized image's size.\n        min: 640, // min resized image's size. if original is lower, use that size.\n        steps: 2, // the max number of images generated between min and max (inclusive)\n        disableInDev: false,\n      },\n      // highlight-end\n    ],\n  ],\n};\n"})})]})}function g(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},71670:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>s});var r=t(27378);const i={},l=r.createContext(i);function s(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);