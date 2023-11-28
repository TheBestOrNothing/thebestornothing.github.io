"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8901],{61132:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(24246),o=(n(27378),n(40624));const c={tabItem:"tabItem_pnkT"};function s({children:e,hidden:t,className:n}){return(0,r.jsx)("div",{role:"tabpanel",className:(0,o.Z)(c.tabItem,n),hidden:t,children:e})}},97555:(e,t,n)=>{n.d(t,{Z:()=>C});var r=n(24246),o=n(27378),c=n(40624),s=n(75527),a=n(3620),i=n(44479),l=n(62821),u=n(52196),d=n(53589);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function f(e){var t,n;return null!==(n=null===(t=o.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))||void 0===t?void 0:t.filter(Boolean))&&void 0!==n?n:[]}function y(e){const{values:t,children:n}=e;return(0,o.useMemo)((()=>{const e=null!=t?t:function(e){return f(e).map((({props:{value:e,label:t,attributes:n,default:r}})=>({value:e,label:t,attributes:n,default:r})))}(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h({value:e,tabValues:t}){return t.some((t=>t.value===e))}function m({queryString:e=!1,groupId:t}){const n=(0,a.k6)(),r=function({queryString:e=!1,groupId:t}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:e,groupId:t}),c=(0,l._X)(r),s=(0,o.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace(b(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){p(e,t,n[t])}))}return e}({},n.location),{search:t.toString()}))}),[r,n]);return[c,s]}function j(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,c=y(e),[s,a]=(0,o.useState)((()=>function({defaultValue:e,tabValues:t}){if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!h({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}var n;const r=null!==(n=t.find((e=>e.default)))&&void 0!==n?n:t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:c}))),[l,u]=m({queryString:n,groupId:r}),[p,b]=function({groupId:e}){const t=function(e){return e?`docusaurus.tab.${e}`:null}(e),[n,r]=(0,d.Nk)(t);return[n,(0,o.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:r}),f=(()=>{const e=null!=l?l:p;return h({value:e,tabValues:c})?e:null})();(0,i.Z)((()=>{f&&a(f)}),[f]);return{selectedValue:s,selectValue:(0,o.useCallback)((e=>{if(!h({value:e,tabValues:c}))throw new Error(`Can't select invalid tab value=${e}`);a(e),u(e),b(e)}),[u,b,c]),tabValues:c}}var g=n(29088);const O={tabList:"tabList_Qoir",tabItem:"tabItem_AQgk"};function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){v(e,t,n[t])}))}return e}function w(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function P({className:e,block:t,selectedValue:n,selectValue:o,tabValues:a}){const i=[],{blockElementScrollPositionUntilNextRender:l}=(0,s.o5)(),u=e=>{const t=e.currentTarget,r=i.indexOf(t),c=a[r].value;c!==n&&(l(t),o(c))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=i.indexOf(e.currentTarget)+1;var n;t=null!==(n=i[r])&&void 0!==n?n:i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;var r;t=null!==(r=i[n])&&void 0!==r?r:i[i.length-1];break}}null==t||t.focus()};return(0,r.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":t},e),children:a.map((({value:e,label:t,attributes:o})=>(0,r.jsx)("li",w(x({role:"tab",tabIndex:n===e?0:-1,"aria-selected":n===e,ref:e=>i.push(e),onKeyDown:d,onClick:u},o),{className:(0,c.Z)("tabs__item",O.tabItem,null==o?void 0:o.className,{"tabs__item--active":n===e}),children:null!=t?t:e}),e)))})}function k({lazy:e,children:t,selectedValue:n}){const c=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){const e=c.find((e=>e.props.value===n));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return(0,r.jsx)("div",{className:"margin-top--md",children:c.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function S(e){const t=j(e);return(0,r.jsxs)("div",{className:(0,c.Z)("tabs-container",O.tabList),children:[(0,r.jsx)(P,x({},e,t)),(0,r.jsx)(k,x({},e,t))]})}function C(e){const t=(0,g.Z)();return(0,r.jsx)(S,w(x({},e),{children:f(e.children)}),String(t))}},94544:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(24246),o=(n(27378),n(29088));function c({children:e,fallback:t}){return(0,o.Z)()?(0,r.jsx)(r.Fragment,{children:null==e?void 0:e()}):null!=t?t:null}},87048:(e,t,n)=>{n.d(t,{CW:()=>y,FS:()=>v,Fr:()=>h,Hc:()=>x,I1:()=>b,SR:()=>f,UM:()=>O,Zl:()=>j,mC:()=>d,mq:()=>g,rv:()=>w});var r=n(24246),o=n(27378),c=n(32054),s=n(92053),a=n(36712),i=n(13415),l=n(38112);const u=o.createContext(null);function d({children:e}){const[t,n]=(0,o.useState)(null),c=(0,o.useRef)(!0);return(0,o.useEffect)((()=>(c.current=!0,()=>{c.current=!1})),[]),(0,o.useEffect)((()=>{fetch("https://registry.npmjs.org/@docusaurus/core").then((e=>e.json())).then((e=>{if(!c.current)return;const t=Object.keys(e.versions).at(-1),r=e.time[t];n({name:t,time:r})}))}),[]),(0,r.jsx)(u.Provider,{value:t,children:e})}function p(){var e;const t=null===(e=(0,c.J)("default").preferredVersion)||void 0===e?void 0:e.name,n=(0,s.gB)("default");var r;const o=(null!==(r=n.find((e=>"current"!==e.name)))&&void 0!==r?r:n[0]).name;return t&&"current"!==t?t:o}function b(){const e=(0,o.useContext)(u);return e?(0,r.jsx)("span",{children:(0,r.jsx)(a.Z,{description:"The hint text for the current canary version tag.",values:{canaryVersionName:(0,r.jsx)("b",{children:e.name})},children:"Current: {canaryVersionName}"})}):(0,r.jsx)("span",{children:(0,r.jsx)(a.Z,{description:"An example canary version tag when the actual version can't be fetched.",children:"Example: 0.0.0-4922"})})}function f(){const e=p();return(0,r.jsx)("span",{children:e})}function y(){return(0,r.jsx)("span",{children:3})}function h(){return(0,r.jsx)("span",{children:2})}function m({branch:e}){return(0,r.jsx)(i.Z,{to:`https://github.com/facebook/docusaurus/tree/${e}`,children:(0,r.jsx)("code",{children:e})})}function j(){return(0,r.jsx)(m,{branch:"docusaurus-v2"})}function g(){return(0,r.jsx)(m,{branch:"main"})}function O({children:e}){return(0,o.useContext)(u)?null:e}function v({children:e}){return(0,o.useContext)(u)?e:null}function x(){var e,t;const n=null!==(t=null===(e=(0,o.useContext)(u))||void 0===e?void 0:e.name)&&void 0!==t?t:"0.0.0-4922",c=p();return(0,r.jsx)(l.Z,{language:"diff",children:`-  "@docusaurus/core": "^${c}",\n-  "@docusaurus/preset-classic": "^${c}",\n+  "@docusaurus/core": "${n}",\n+  "@docusaurus/preset-classic": "${n}",\n`})}function w(){var e;const t=null===(e=(0,o.useContext)(u))||void 0===e?void 0:e.time;return t?(0,r.jsx)(a.Z,{values:{time:(0,r.jsx)("b",{children:new Date(t).toLocaleString()})},children:"The latest canary version that's available on npm is published at {time}."}):null}},38112:(e,t,n)=>{n.d(t,{Z:()=>De});var r={};n.r(r),n.d(r,{ButtonExample:()=>I});var o=n(24246),c=n(27378),s=n(40624),a=n(29088),i=n(32711),l=n(36712),u=n(4423),d=n(94544),p=n(30691),b=n(78844),f=n(73919);function y(){const{prism:e}=(0,f.L)(),{colorMode:t}=(0,b.I)(),n=e.theme,r=e.darkTheme||n;return"dark"===t?r:n}var h=n(88941);const m={playgroundContainer:"playgroundContainer_6Ior",playgroundHeader:"playgroundHeader_Tvsk",playgroundEditor:"playgroundEditor_TySg",playgroundPreview:"playgroundPreview_mApW"};function j(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){j(e,t,n[t])}))}return e}function O(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function v(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function x({children:e}){return(0,o.jsx)("div",{className:(0,s.Z)(m.playgroundHeader),children:e})}function w(){return(0,o.jsx)("div",{children:"Loading..."})}function P(){return(0,o.jsx)(d.Z,{fallback:(0,o.jsx)(w,{}),children:()=>(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(h.Z,{fallback:e=>(0,o.jsx)(p.Ac,g({},e)),children:(0,o.jsx)(i.i5,{})}),(0,o.jsx)(i.IF,{})]})})}function k(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(x,{children:(0,o.jsx)(l.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks",children:"Result"})}),(0,o.jsx)("div",{className:m.playgroundPreview,children:(0,o.jsx)(P,{})})]})}function S(){const e=(0,a.Z)();return(0,o.jsx)(i.uz,{className:m.playgroundEditor},String(e))}function C(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(x,{children:(0,o.jsx)(l.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks",children:"Live Editor"})}),(0,o.jsx)(S,{})]})}function N(e){var t,{children:n,transformCode:r}=e,c=v(e,["children","transformCode"]);const{siteConfig:{themeConfig:s}}=(0,u.Z)(),{liveCodeBlock:{playgroundPosition:a}}=s,l=y();var d;const p=null!==(d=null===(t=c.metastring)||void 0===t?void 0:t.includes("noInline"))&&void 0!==d&&d;return(0,o.jsx)("div",{className:m.playgroundContainer,children:(0,o.jsx)(i.nu,O(g({code:n.replace(/\n$/,""),noInline:p,transformCode:null!=r?r:e=>`${e};`,theme:l},c),{children:"top"===a?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(k,{}),(0,o.jsx)(C,{})]}):(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(C,{}),(0,o.jsx)(k,{})]})}))})}function E(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function D(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){E(e,t,n[t])}))}return e}function B(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function I(e){return(0,o.jsx)("button",B(D({type:"button"},e),{style:D({backgroundColor:"white",color:"black",border:"solid red",borderRadius:20,padding:10,cursor:"pointer"},e.style)}))}function L(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const T=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){L(e,t,n[t])}))}return e}({React:c},c,r);var Z,V,_=n(89583),A=n(6324),$=n.n(A);const q=RegExp("title=(?<quote>[\"'])(?<title>.*?)\\1"),R=RegExp("\\{(?<range>[\\d,-]+)\\}"),F={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"},lua:{start:"--",end:""},wasm:{start:"\\;\\;",end:""},tex:{start:"%",end:""}};function H(e,t){const n=e.map((e=>{const{start:n,end:r}=F[e];return`(?:${n}\\s*(${t.flatMap((e=>{var t,n;return[e.line,null===(t=e.block)||void 0===t?void 0:t.start,null===(n=e.block)||void 0===n?void 0:n.end].filter(Boolean)})).join("|")})\\s*${r})`})).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)}function M(e,t){let n=e.replace(/\n$/,"");const{language:r,magicComments:o,metastring:c}=t;if(c&&R.test(c)){const e=c.match(R).groups.range;if(0===o.length)throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${c}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);const t=o[0].className,r=$()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(r),code:n}}if(void 0===r)return{lineClassNames:{},code:n};const s=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return H(["js","jsBlock"],t);case"jsx":case"tsx":return H(["js","jsBlock","jsx"],t);case"html":return H(["js","jsBlock","html"],t);case"python":case"py":case"bash":return H(["bash"],t);case"markdown":case"md":return H(["html","jsx","bash"],t);case"tex":case"latex":case"matlab":return H(["tex"],t);case"lua":case"haskell":case"sql":return H(["lua"],t);case"wasm":return H(["wasm"],t);default:return H(Object.keys(F).filter((e=>!["lua","wasm","tex","latex","matlab"].includes(e))),t)}}(r,o),a=n.split("\n"),i=Object.fromEntries(o.map((e=>[e.className,{start:0,range:""}]))),l=Object.fromEntries(o.filter((e=>e.line)).map((({className:e,line:t})=>[t,e]))),u=Object.fromEntries(o.filter((e=>e.block)).map((({className:e,block:t})=>[t.start,e]))),d=Object.fromEntries(o.filter((e=>e.block)).map((({className:e,block:t})=>[t.end,e])));for(let b=0;b<a.length;){const e=a[b].match(s);if(!e){b+=1;continue}const t=e.slice(1).find((e=>void 0!==e));l[t]?i[l[t]].range+=`${b},`:u[t]?i[u[t]].start=b:d[t]&&(i[d[t]].range+=`${i[d[t]].start}-${b-1},`),a.splice(b,1)}n=a.join("\n");const p={};return Object.entries(i).forEach((([e,{range:t}])=>{$()(t).forEach((t=>{var n;null!==(n=(Z=p)[V=t])&&void 0!==n||(Z[V]=[]),p[t].push(e)}))})),{lineClassNames:p,code:n}}const W={codeBlockContainer:"codeBlockContainer_jDV4"};function U(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function z(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function G(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function Y(e){var{as:t}=e,n=G(e,["as"]);const r=function(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((([e,r])=>{const o=t[e];o&&"string"==typeof r&&(n[o]=r)})),n}(y());return(0,o.jsx)(t,z(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){U(e,t,n[t])}))}return e}({},n),{style:r,className:(0,s.Z)(n.className,W.codeBlockContainer,_.k.common.codeBlock)}))}const Q={codeBlockContent:"codeBlockContent_vx7S",codeBlockTitle:"codeBlockTitle_bdru",codeBlock:"codeBlock_Gebt",codeBlockStandalone:"codeBlockStandalone_i_cY",codeBlockLines:"codeBlockLines_FJaf",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_FU9Q",buttonGroup:"buttonGroup_cUGO"};function X({children:e,className:t}){return(0,o.jsx)(Y,{as:"pre",tabIndex:0,className:(0,s.Z)(Q.codeBlockStandalone,"thin-scrollbar",t),children:(0,o.jsx)("code",{className:Q.codeBlockLines,children:e})})}var J=n(51114);const K={attributes:!0,characterData:!0,childList:!0,subtree:!0};function ee(e,t){const[n,r]=(0,c.useState)(),o=(0,c.useCallback)((()=>{var t;r(null===(t=e.current)||void 0===t?void 0:t.closest("[role=tabpanel][hidden]"))}),[e,r]);(0,c.useEffect)((()=>{o()}),[o]),function(e,t,n=K){const r=(0,J.zX)(t),o=(0,J.Ql)(n);(0,c.useEffect)((()=>{const t=new MutationObserver(r);return e&&t.observe(e,o),()=>t.disconnect()}),[e,r,o])}(n,(e=>{e.forEach((e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),o())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}var te=n(26101);const ne={codeLine:"codeLine_qRmp",codeLineNumber:"codeLineNumber_dS_J",codeLineContent:"codeLineContent_XF5l"};function re(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function oe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){re(e,t,n[t])}))}return e}function ce(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function se({line:e,classNames:t,showLineNumbers:n,getLineProps:r,getTokenProps:c}){1===e.length&&"\n"===e[0].content&&(e[0].content="");const a=r({line:e,className:(0,s.Z)(t,n&&ne.codeLine)}),i=e.map(((e,t)=>(0,o.jsx)("span",oe({},c({token:e,key:t})),t)));return(0,o.jsxs)("span",ce(oe({},a),{children:[n?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("span",{className:ne.codeLineNumber}),(0,o.jsx)("span",{className:ne.codeLineContent,children:i})]}):i,(0,o.jsx)("br",{})]}))}var ae=n(34370);function ie(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function le(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function ue(e){return(0,o.jsx)("svg",le(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){ie(e,t,n[t])}))}return e}({viewBox:"0 0 24 24"},e),{children:(0,o.jsx)("path",{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})}))}function de(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function pe(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function be(e){return(0,o.jsx)("svg",pe(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){de(e,t,n[t])}))}return e}({viewBox:"0 0 24 24"},e),{children:(0,o.jsx)("path",{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"})}))}const fe={copyButtonCopied:"copyButtonCopied_OkN_",copyButtonIcons:"copyButtonIcons_OqsO",copyButtonIcon:"copyButtonIcon_PgCn",copyButtonSuccessIcon:"copyButtonSuccessIcon_bsQG"};function ye({code:e,className:t}){const[n,r]=(0,c.useState)(!1),a=(0,c.useRef)(void 0),i=(0,c.useCallback)((()=>{(0,ae.Z)(e),r(!0),a.current=window.setTimeout((()=>{r(!1)}),1e3)}),[e]);return(0,c.useEffect)((()=>()=>window.clearTimeout(a.current)),[]),(0,o.jsx)("button",{type:"button","aria-label":n?(0,l.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,l.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,l.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,s.Z)("clean-btn",t,fe.copyButton,n&&fe.copyButtonCopied),onClick:i,children:(0,o.jsxs)("span",{className:fe.copyButtonIcons,"aria-hidden":"true",children:[(0,o.jsx)(ue,{className:fe.copyButtonIcon}),(0,o.jsx)(be,{className:fe.copyButtonSuccessIcon})]})})}function he(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function me(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function je(e){return(0,o.jsx)("svg",me(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){he(e,t,n[t])}))}return e}({viewBox:"0 0 24 24"},e),{children:(0,o.jsx)("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})}))}const ge={wordWrapButtonIcon:"wordWrapButtonIcon_MQXS",wordWrapButtonEnabled:"wordWrapButtonEnabled_TBIH"};function Oe({className:e,onClick:t,isEnabled:n}){const r=(0,l.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return(0,o.jsx)("button",{type:"button",onClick:t,className:(0,s.Z)("clean-btn",e,n&&ge.wordWrapButtonEnabled),"aria-label":r,title:r,children:(0,o.jsx)(je,{className:ge.wordWrapButtonIcon,"aria-hidden":"true"})})}function ve({children:e,className:t="",metastring:n,title:r,showLineNumbers:a,language:i}){const{prism:{defaultLanguage:l,magicComments:u}}=(0,f.L)();var d;const p=function(e){return null==e?void 0:e.toLowerCase()}(null!==(d=null!=i?i:function(e){const t=e.split(" ").find((e=>e.startsWith("language-")));return null==t?void 0:t.replace(/language-/,"")}(t))&&void 0!==d?d:l),b=y(),h=function(){const[e,t]=(0,c.useState)(!1),[n,r]=(0,c.useState)(!1),o=(0,c.useRef)(null),s=(0,c.useCallback)((()=>{const n=o.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t((e=>!e))}),[o,e]),a=(0,c.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=o.current,n=e>t||o.current.querySelector("code").hasAttribute("style");r(n)}),[o]);return ee(o,a),(0,c.useEffect)((()=>{a()}),[e,a]),(0,c.useEffect)((()=>(window.addEventListener("resize",a,{passive:!0}),()=>{window.removeEventListener("resize",a)})),[a]),{codeBlockRef:o,isEnabled:e,isCodeScrollable:n,toggle:s}}(),m=function(e){var t,n;return null!==(n=null===(t=null==e?void 0:e.match(q))||void 0===t?void 0:t.groups.title)&&void 0!==n?n:""}(n)||r,{lineClassNames:j,code:g}=M(e,{metastring:n,language:p,magicComments:u}),O=null!=a?a:function(e){return Boolean(null==e?void 0:e.includes("showLineNumbers"))}(n);return(0,o.jsxs)(Y,{as:"div",className:(0,s.Z)(t,p&&!t.includes(`language-${p}`)&&`language-${p}`),children:[m&&(0,o.jsx)("div",{className:Q.codeBlockTitle,children:m}),(0,o.jsxs)("div",{className:Q.codeBlockContent,children:[(0,o.jsx)(te.y$,{theme:b,code:g,language:null!=p?p:"text",children:({className:e,style:t,tokens:n,getLineProps:r,getTokenProps:c})=>(0,o.jsx)("pre",{tabIndex:0,ref:h.codeBlockRef,className:(0,s.Z)(e,Q.codeBlock,"thin-scrollbar"),style:t,children:(0,o.jsx)("code",{className:(0,s.Z)(Q.codeBlockLines,O&&Q.codeBlockLinesWithNumbering),children:n.map(((e,t)=>(0,o.jsx)(se,{line:e,getLineProps:r,getTokenProps:c,classNames:j[t],showLineNumbers:O},t)))})})}),(0,o.jsxs)("div",{className:Q.buttonGroup,children:[(h.isEnabled||h.isCodeScrollable)&&(0,o.jsx)(Oe,{className:Q.codeButton,onClick:()=>h.toggle(),isEnabled:h.isEnabled}),(0,o.jsx)(ye,{className:Q.codeButton,code:g})]})]})]})}function xe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function we(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function Pe(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function ke(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Se(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){ke(e,t,n[t])}))}return e}const Ce=(Ne=function(e){var{children:t}=e,n=Pe(e,["children"]);const r=(0,a.Z)(),s=function(e){return c.Children.toArray(e).some((e=>(0,c.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),i="string"==typeof s?ve:X;return(0,o.jsx)(i,we(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){xe(e,t,n[t])}))}return e}({},n),{children:s}),String(r))},function(e){return e.live?(0,o.jsx)(N,Se({scope:T},e)):(0,o.jsx)(Ne,Se({},e))});var Ne;function Ee(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function De(e){return(0,o.jsx)(Ce,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){Ee(e,t,n[t])}))}return e}({},e))}},75449:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var r=n(24246),o=n(71670),c=n(97555),s=n(61132),a=n(87048);const i={},l="Canary releases",u={id:"canary",title:"Canary releases",description:"Docusaurus has a canary releases system.",source:"@site/community/4-canary.mdx",sourceDirName:".",slug:"/canary",permalink:"/zh-CN/community/canary",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/docusaurus-v2/zh-CN",tags:[],version:"current",lastUpdatedBy:"Gitcoins",lastUpdatedAt:1701167026,formattedLastUpdatedAt:"2023\u5e7411\u670828\u65e5",sidebarPosition:4,frontMatter:{},sidebar:"community",previous:{title:"Contributing",permalink:"/zh-CN/community/contributing"},next:{title:"Release process",permalink:"/zh-CN/community/release-process"}},d={},p=[{value:"Canary npm dist tag",id:"canary-npm-dist-tag",level:2},{value:"Using a canary release",id:"using-a-canary-release",level:2}];function b(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"canary-releases",children:"Canary releases"}),"\n","\n","\n",(0,r.jsxs)(a.mC,{children:[(0,r.jsx)(t.p,{children:"Docusaurus has a canary releases system."}),(0,r.jsxs)(t.p,{children:["It permits you to ",(0,r.jsx)(t.strong,{children:"test new unreleased features"})," as soon as the pull requests are merged on the ",(0,r.jsx)(t.a,{href:"/zh-CN/community/release-process#next-version",children:"next version"})," of Docusaurus."]}),(0,r.jsxs)(t.p,{children:["It is a good way to ",(0,r.jsx)(t.strong,{children:"give feedback to maintainers"}),", ensuring the newly implemented feature works as intended."]}),(0,r.jsxs)(t.admonition,{type:"note",children:[(0,r.jsx)(t.p,{children:"Using a canary release in production might seem risky, but in practice, it's not."}),(0,r.jsx)(t.p,{children:"A canary release passes all automated tests and is used in production by the Docusaurus site itself."})]}),(0,r.jsx)(a.UM,{children:(0,r.jsx)(t.admonition,{type:"warning",children:(0,r.jsxs)(t.p,{children:["The canary version shown below ",(0,r.jsx)(t.strong,{children:"may not be up-to-date"}),". Please go to the ",(0,r.jsx)(t.a,{href:"https://www.npmjs.com/package/@docusaurus/core?activeTab=versions",children:"npm page"})," to find the actual version name."]})})}),(0,r.jsx)(a.FS,{children:(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsxs)(t.p,{children:["The canary version shown below is directly fetched from npm and ",(0,r.jsx)(t.strong,{children:"is up-to-date"}),". You can directly use these numbers in your package.json."]})})}),(0,r.jsx)(t.h2,{id:"canary-npm-dist-tag",children:"Canary npm dist tag"}),(0,r.jsxs)(t.p,{children:["For any code-related commit on ",(0,r.jsx)(t.code,{children:"main"}),", the continuous integration will publish a canary release under the ",(0,r.jsx)(t.code,{children:"@canary"})," npm dist tag. It generally takes up to 10 minutes."]}),(0,r.jsxs)(t.p,{children:["You can see on ",(0,r.jsx)(t.a,{href:"https://www.npmjs.com/package/@docusaurus/core?activeTab=versions",children:"npm"})," the current dist tags:"]}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"latest"}),": stable releases (Current: ",(0,r.jsx)(a.SR,{}),")"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"canary"}),": canary releases (",(0,r.jsx)(a.I1,{}),")"]}),"\n"]}),(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsxs)(t.p,{children:["Make sure to use the latest canary release and check the publication date (sometimes the publish process fails). ",(0,r.jsx)(a.rv,{})]})}),(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsxs)(t.p,{children:["Canary versions follow the naming convention ",(0,r.jsx)(t.code,{children:"0.0.0-commitNumber"}),"."]})}),(0,r.jsx)(t.h2,{id:"using-a-canary-release",children:"Using a canary release"}),(0,r.jsxs)(t.p,{children:["Take the latest version published under the ",(0,r.jsx)(t.a,{href:"https://www.npmjs.com/package/@docusaurus/core?activeTab=versions",children:"canary npm dist tag"})," (",(0,r.jsx)(a.I1,{}),")."]}),(0,r.jsxs)(t.p,{children:["Use it for all the ",(0,r.jsx)(t.code,{children:"@docusaurus/*"})," dependencies in your ",(0,r.jsx)(t.code,{children:"package.json"}),":"]}),(0,r.jsx)(a.Hc,{}),(0,r.jsx)(t.p,{children:"Then, install the dependencies again and start your site:"}),(0,r.jsxs)(c.Z,{children:[(0,r.jsx)(s.Z,{value:"npm",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"npm install\nnpm start\n"})})}),(0,r.jsx)(s.Z,{value:"yarn",label:"Yarn",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"yarn install\nyarn start\n"})})}),(0,r.jsx)(s.Z,{value:"pnpm",label:"pnpm",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"pnpm install\npnpm start\n"})})})]}),(0,r.jsxs)(t.p,{children:["You can also upgrade the ",(0,r.jsx)(t.code,{children:"@docusaurus/*"})," packages with command line:"]}),(0,r.jsxs)(c.Z,{children:[(0,r.jsx)(s.Z,{value:"npm",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"npm install --save-exact @docusaurus/core@canary @docusaurus/preset-classic@canary\n"})})}),(0,r.jsx)(s.Z,{value:"yarn",label:"Yarn",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"yarn add --exact @docusaurus/core@canary @docusaurus/preset-classic@canary\n"})})}),(0,r.jsx)(s.Z,{value:"pnpm",label:"pnpm",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"pnpm add --save-exact @docusaurus/core@canary @docusaurus/preset-classic@canary\n"})})})]}),(0,r.jsxs)(t.admonition,{type:"warning",children:[(0,r.jsxs)(t.p,{children:["Make sure to include all the ",(0,r.jsx)(t.code,{children:"@docusaurus/*"})," packages."]}),(0,r.jsxs)(t.p,{children:["For canary releases, prefer using an exact version instead of a semver range (avoid the ",(0,r.jsx)(t.code,{children:"^"})," prefix)."]})]})]})]})}function f(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(b,{...e})}):b(e)}}}]);