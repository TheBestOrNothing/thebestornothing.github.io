"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9900],{99238:(e,t,n)=>{n.d(t,{Z:()=>j});var r=n(24246),i=(n(27378),n(40624)),s=n(41876),o=n(13415),c=n(64149),a=n(36712),d=n(52615);const u={cardContainer:"cardContainer_Uewx",cardTitle:"cardTitle_dwRT",cardDescription:"cardDescription_mCBT"};function l({href:e,children:t}){return(0,r.jsx)(o.Z,{href:e,className:(0,i.Z)("card padding--lg",u.cardContainer),children:t})}function m({href:e,icon:t,title:n,description:s}){return(0,r.jsxs)(l,{href:e,children:[(0,r.jsxs)(d.Z,{as:"h2",className:(0,i.Z)("text--truncate",u.cardTitle),title:n,children:[t," ",n]}),s&&(0,r.jsx)("p",{className:(0,i.Z)("text--truncate",u.cardDescription),title:s,children:s})]})}function p({item:e}){const t=(0,s.LM)(e);return t?(0,r.jsx)(m,{href:t,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:null!==(n=e.description)&&void 0!==n?n:(0,a.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e.items.length})}):null;var n}function h({item:e}){const t=(0,c.Z)(e.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17";var n;const i=(0,s.xz)(null!==(n=e.docId)&&void 0!==n?n:void 0);var o;return(0,r.jsx)(m,{href:e.href,icon:t,title:e.label,description:null!==(o=e.description)&&void 0!==o?o:null==i?void 0:i.description})}function g({item:e}){switch(e.type){case"link":return(0,r.jsx)(h,{item:e});case"category":return(0,r.jsx)(p,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function x({className:e}){const t=(0,s.jA)();return(0,r.jsx)(j,{items:t.items,className:e})}function j(e){const{items:t,className:n}=e;if(!t)return(0,r.jsx)(x,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){f(e,t,n[t])}))}return e}({},e));const o=(0,s.MN)(t);return(0,r.jsx)("section",{className:(0,i.Z)("row",n),children:o.map(((e,t)=>(0,r.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,r.jsx)(g,{item:e})},t)))})}},31366:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>a,toc:()=>u});var r=n(24246),i=n(71670),s=n(99238);const o={slug:"/migration"},c="Upgrading Docusaurus",a={id:"migration/index",title:"Upgrading Docusaurus",description:"Docusaurus versioning is based on the major.minor.patch scheme and respects Semantic Versioning.",source:"@site/docs/migration/index.mdx",sourceDirName:"migration",slug:"/migration",permalink:"/docs/next/migration",draft:!1,unlisted:!1,editUrl:"https://github.com/vulnsystem/vulnsystem.github.io/edit/main/website/docs/migration/index.mdx",tags:[],version:"current",lastUpdatedBy:"Gitcoins",lastUpdatedAt:1701425202,formattedLastUpdatedAt:"Dec 1, 2023",frontMatter:{slug:"/migration"},sidebar:"abc",previous:{title:"Client architecture",permalink:"/docs/next/advanced/client"},next:{title:"To Docusaurus v3",permalink:"/docs/next/migration/v3"}},d={},u=[];function l(e){const t={a:"a",code:"code",h1:"h1",p:"p",strong:"strong",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"upgrading-docusaurus",children:"Upgrading Docusaurus"}),"\n",(0,r.jsxs)(t.p,{children:["Docusaurus versioning is based on the ",(0,r.jsx)(t.code,{children:"major.minor.patch"})," scheme and respects ",(0,r.jsx)(t.a,{href:"https://semver.org/",children:(0,r.jsx)(t.strong,{children:"Semantic Versioning"})}),"."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Breaking changes"})," are only released on major version upgrades, and thoroughly documented in the following upgrade guides."]}),"\n","\n","\n",(0,r.jsx)(s.Z,{})]})}function m(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},71670:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>o});var r=n(27378);const i={},s=r.createContext(i);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);