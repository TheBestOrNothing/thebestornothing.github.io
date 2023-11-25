"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[96939],{99238:(e,t,n)=>{n.d(t,{Z:()=>g});var i=n(24246),r=(n(27378),n(40624)),o=n(41876),c=n(13415),s=n(64149),a=n(36712),d=n(52615);const l={cardContainer:"cardContainer_Uewx",cardTitle:"cardTitle_dwRT",cardDescription:"cardDescription_mCBT"};function u({href:e,children:t}){return(0,i.jsx)(c.Z,{href:e,className:(0,r.Z)("card padding--lg",l.cardContainer),children:t})}function h({href:e,icon:t,title:n,description:o}){return(0,i.jsxs)(u,{href:e,children:[(0,i.jsxs)(d.Z,{as:"h2",className:(0,r.Z)("text--truncate",l.cardTitle),title:n,children:[t," ",n]}),o&&(0,i.jsx)("p",{className:(0,r.Z)("text--truncate",l.cardDescription),title:o,children:o})]})}function p({item:e}){const t=(0,o.LM)(e);return t?(0,i.jsx)(h,{href:t,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:null!==(n=e.description)&&void 0!==n?n:(0,a.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e.items.length})}):null;var n}function m({item:e}){const t=(0,s.Z)(e.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17";var n;const r=(0,o.xz)(null!==(n=e.docId)&&void 0!==n?n:void 0);var c;return(0,i.jsx)(h,{href:e.href,icon:t,title:e.label,description:null!==(c=e.description)&&void 0!==c?c:null==r?void 0:r.description})}function f({item:e}){switch(e.type){case"link":return(0,i.jsx)(m,{item:e});case"category":return(0,i.jsx)(p,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}function x(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function v({className:e}){const t=(0,o.jA)();return(0,i.jsx)(g,{items:t.items,className:e})}function g(e){const{items:t,className:n}=e;if(!t)return(0,i.jsx)(v,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){x(e,t,n[t])}))}return e}({},e));const c=(0,o.MN)(t);return(0,i.jsx)("section",{className:(0,r.Z)("row",n),children:c.map(((e,t)=>(0,i.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,i.jsx)(f,{item:e})},t)))})}},31565:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>c,metadata:()=>a,toc:()=>l});var i=n(24246),r=n(71670),o=n(99238);const c={},s="Advanced Tutorials",a={id:"advanced/index",title:"Advanced Tutorials",description:"This section is not going to be very structured, but we will cover the following topics:",source:"@site/docs/advanced/index.mdx",sourceDirName:"advanced",slug:"/advanced/",permalink:"/docs/next/advanced/",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/advanced/index.mdx",tags:[],version:"current",lastUpdatedBy:"Gitcoins",lastUpdatedAt:1700898384,formattedLastUpdatedAt:"Nov 25, 2023",frontMatter:{},sidebar:"docs",previous:{title:"What's next?",permalink:"/docs/next/guides/whats-next"},next:{title:"Architecture",permalink:"/docs/next/advanced/architecture"}},d={},l=[];function u(e){const t={a:"a",h1:"h1",p:"p",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"advanced-tutorials",children:"Advanced Tutorials"}),"\n",(0,i.jsx)(t.p,{children:"This section is not going to be very structured, but we will cover the following topics:"}),"\n","\n","\n",(0,i.jsx)(o.Z,{}),"\n",(0,i.jsxs)(t.p,{children:["We will assume that you have finished the guides, and know the basics like how to configure plugins, how to write React components, etc. These sections will have plugin authors and code contributors in mind, so we may occasionally refer to ",(0,i.jsx)(t.a,{href:"/docs/next/api/plugin-methods/",children:"plugin APIs"})," or other architecture details. Don't panic if you don't understand everything\ud83d\ude09"]})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},71670:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>c});var i=n(27378);const r={},o=i.createContext(r);function c(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);