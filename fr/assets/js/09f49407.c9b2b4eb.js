"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[85668],{61132:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(24246),o=(r(27378),r(40624));const l={tabItem:"tabItem_pnkT"};function s({children:e,hidden:t,className:r}){return(0,n.jsx)("div",{role:"tabpanel",className:(0,o.Z)(l.tabItem,r),hidden:t,children:e})}},97555:(e,t,r)=>{r.d(t,{Z:()=>D});var n=r(24246),o=r(27378),l=r(40624),s=r(75527),a=r(3620),i=r(44479),u=r(62821),c=r(52196),d=r(53589);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function b(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function g(e){var t,r;return null!==(r=null===(t=o.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))||void 0===t?void 0:t.filter(Boolean))&&void 0!==r?r:[]}function f(e){const{values:t,children:r}=e;return(0,o.useMemo)((()=>{const e=null!=t?t:function(e){return g(e).map((({props:{value:e,label:t,attributes:r,default:n}})=>({value:e,label:t,attributes:r,default:n})))}(r);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m({value:e,tabValues:t}){return t.some((t=>t.value===e))}function h({queryString:e=!1,groupId:t}){const r=(0,a.k6)(),n=function({queryString:e=!1,groupId:t}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:e,groupId:t}),l=(0,u._X)(n),s=(0,o.useCallback)((e=>{if(!n)return;const t=new URLSearchParams(r.location.search);t.set(n,e),r.replace(b(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){p(e,t,r[t])}))}return e}({},r.location),{search:t.toString()}))}),[n,r]);return[l,s]}function v(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,l=f(e),[s,a]=(0,o.useState)((()=>function({defaultValue:e,tabValues:t}){if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!m({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}var r;const n=null!==(r=t.find((e=>e.default)))&&void 0!==r?r:t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[u,c]=h({queryString:r,groupId:n}),[p,b]=function({groupId:e}){const t=function(e){return e?`docusaurus.tab.${e}`:null}(e),[r,n]=(0,d.Nk)(t);return[r,(0,o.useCallback)((e=>{t&&n.set(e)}),[t,n])]}({groupId:n}),g=(()=>{const e=null!=u?u:p;return m({value:e,tabValues:l})?e:null})();(0,i.Z)((()=>{g&&a(g)}),[g]);return{selectedValue:s,selectValue:(0,o.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);a(e),c(e),b(e)}),[c,b,l]),tabValues:l}}var y=r(29088);const j={tabList:"tabList_Qoir",tabItem:"tabItem_AQgk"};function x(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){x(e,t,r[t])}))}return e}function w(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function k({className:e,block:t,selectedValue:r,selectValue:o,tabValues:a}){const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.o5)(),c=e=>{const t=e.currentTarget,n=i.indexOf(t),l=a[n].value;l!==r&&(u(t),o(l))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;var r;t=null!==(r=i[n])&&void 0!==r?r:i[0];break}case"ArrowLeft":{const r=i.indexOf(e.currentTarget)-1;var n;t=null!==(n=i[r])&&void 0!==n?n:i[i.length-1];break}}null==t||t.focus()};return(0,n.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":t},e),children:a.map((({value:e,label:t,attributes:o})=>(0,n.jsx)("li",w(O({role:"tab",tabIndex:r===e?0:-1,"aria-selected":r===e,ref:e=>i.push(e),onKeyDown:d,onClick:c},o),{className:(0,l.Z)("tabs__item",j.tabItem,null==o?void 0:o.className,{"tabs__item--active":r===e}),children:null!=t?t:e}),e)))})}function P({lazy:e,children:t,selectedValue:r}){const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){const e=l.find((e=>e.props.value===r));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return(0,n.jsx)("div",{className:"margin-top--md",children:l.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function S(e){const t=v(e);return(0,n.jsxs)("div",{className:(0,l.Z)("tabs-container",j.tabList),children:[(0,n.jsx)(k,O({},e,t)),(0,n.jsx)(P,O({},e,t))]})}function D(e){const t=(0,y.Z)();return(0,n.jsx)(S,w(O({},e),{children:g(e.children)}),String(t))}},43316:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>g,frontMatter:()=>a,metadata:()=>u,someExport:()=>p,toc:()=>d});var n=r(24246),o=r(71670),l=r(97555),s=r(61132);const a={title:"Blog post MDX Feed tests",authors:["slorber"],tags:["paginated-tag","blog","docusaurus","long-long","long-long-long","long-long-long-long"],hide_reading_time:!0},i=void 0,u={permalink:"/fr/tests/blog/2021/10/07/blog-post-mdx-feed-tests",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/_dogfooding/_blog-tests/_dogfooding/_blog tests/2021-10-07-blog-post-mdx-feed-tests.mdx",source:"@site/_dogfooding/_blog tests/2021-10-07-blog-post-mdx-feed-tests.mdx",title:"Blog post MDX Feed tests",description:"Some MDX tests, mostly to test how the RSS feed render those",date:"2021-10-07T00:00:00.000Z",formattedDate:"7 octobre 2021",tags:[{label:"paginated-tag",permalink:"/fr/tests/blog/tags/paginated-tag"},{label:"blog",permalink:"/fr/tests/blog/tags/blog"},{label:"docusaurus",permalink:"/fr/tests/blog/tags/docusaurus"},{label:"long-long",permalink:"/fr/tests/blog/tags/long-long"},{label:"long-long-long",permalink:"/fr/tests/blog/tags/long-long-long"},{label:"long-long-long-long",permalink:"/fr/tests/blog/tags/long-long-long-long"}],hasTruncateMarker:!0,authors:[{name:"Sebastien Lorber",title:"Docusaurus maintainer",url:"https://sebastienlorber.com",twitter:"sebastienlorber",imageURL:"https://github.com/slorber.png",key:"slorber"}],frontMatter:{title:"Blog post MDX Feed tests",authors:["slorber"],tags:["paginated-tag","blog","docusaurus","long-long","long-long-long","long-long-long-long"],hide_reading_time:!0},unlisted:!1,prevItem:{title:"Blog post MDX require Feed tests",permalink:"/fr/tests/blog/2021/10/08/blog-post-mdx-require-feed-tests"},nextItem:{title:"Post with duplicate title",permalink:"/fr/tests/blog/2021/09/13/dup-title"}},c={authorsImageUrls:[void 0]},d=[{value:"Imports",id:"imports",level:2},{value:"Exports",id:"exports",level:2},{value:"Tabs test",id:"tabs-test",level:2}],p=42;function b(e){const t={code:"code",h2:"h2",p:"p",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Some MDX tests, mostly to test how the RSS feed render those"}),"\n","\n",(0,n.jsx)(t.h2,{id:"imports",children:"Imports"}),"\n",(0,n.jsx)(t.p,{children:"Here are some imports:"}),"\n","\n","\n",(0,n.jsx)(t.h2,{id:"exports",children:"Exports"}),"\n",(0,n.jsx)(t.p,{children:"Here are some exports:"}),"\n","\n",(0,n.jsx)(t.h2,{id:"tabs-test",children:"Tabs test"}),"\n",(0,n.jsx)(t.p,{children:"Here are some tabs:"}),"\n",(0,n.jsxs)(l.Z,{children:[(0,n.jsx)(s.Z,{value:"apple",label:"Apple",children:(0,n.jsx)(t.p,{children:"This is an apple \ud83c\udf4e"})}),(0,n.jsx)(s.Z,{value:"orange",label:"Orange",children:(0,n.jsx)(t.p,{children:"This is an orange \ud83c\udf4a"})})]}),"\n",(0,n.jsxs)(t.p,{children:["Here are some tabs, inside ",(0,n.jsx)(t.code,{children:"mdx-code-block"}),":"]}),"\n",(0,n.jsxs)(l.Z,{children:[(0,n.jsx)(s.Z,{value:"apple",label:"Apple",children:(0,n.jsx)(t.p,{children:"This is an apple \ud83c\udf4e"})}),(0,n.jsx)(s.Z,{value:"orange",label:"Orange",children:(0,n.jsx)(t.p,{children:"This is an orange \ud83c\udf4a"})})]})]})}function g(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(b,{...e})}):b(e)}},71670:(e,t,r)=>{r.d(t,{Z:()=>a,a:()=>s});var n=r(27378);const o={},l=n.createContext(o);function s(e){const t=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);