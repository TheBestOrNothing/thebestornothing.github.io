"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[99068],{99238:(t,e,n)=>{n.d(e,{Z:()=>g});var i=n(24246),s=(n(27378),n(40624)),r=n(41876),o=n(13415),c=n(64149),l=n(36712),a=n(52615);const d={cardContainer:"cardContainer_Uewx",cardTitle:"cardTitle_dwRT",cardDescription:"cardDescription_mCBT"};function u({href:t,children:e}){return(0,i.jsx)(o.Z,{href:t,className:(0,s.Z)("card padding--lg",d.cardContainer),children:e})}function f({href:t,icon:e,title:n,description:r}){return(0,i.jsxs)(u,{href:t,children:[(0,i.jsxs)(a.Z,{as:"h2",className:(0,s.Z)("text--truncate",d.cardTitle),title:n,children:[e," ",n]}),r&&(0,i.jsx)("p",{className:(0,s.Z)("text--truncate",d.cardDescription),title:r,children:r})]})}function m({item:t}){const e=(0,r.LM)(t);return e?(0,i.jsx)(f,{href:e,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:null!==(n=t.description)&&void 0!==n?n:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null;var n}function p({item:t}){const e=(0,c.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17";var n;const s=(0,r.xz)(null!==(n=t.docId)&&void 0!==n?n:void 0);var o;return(0,i.jsx)(f,{href:t.href,icon:e,title:t.label,description:null!==(o=t.description)&&void 0!==o?o:null==s?void 0:s.description})}function y({item:t}){switch(t.type){case"link":return(0,i.jsx)(p,{item:t});case"category":return(0,i.jsx)(m,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function b(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function h({className:t}){const e=(0,r.jA)();return(0,i.jsx)(g,{items:e.items,className:t})}function g(t){const{items:e,className:n}=t;if(!e)return(0,i.jsx)(h,function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),i.forEach((function(e){b(t,e,n[e])}))}return t}({},t));const o=(0,r.MN)(e);return(0,i.jsx)("section",{className:(0,s.Z)("row",n),children:o.map(((t,e)=>(0,i.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,i.jsx)(y,{item:t})},e)))})}},41547:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>a,contentTitle:()=>c,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var i=n(24246),s=n(71670),r=n(99238);const o={unlisted:!0,tags:["visibility","unlisted"]},c="Only Unlisteds - Subcategory index unlisted",l={id:"tests/visibility/only-unlisteds/unlisted-subcategory/index",title:"Only Unlisteds - Subcategory index unlisted",description:"Doc with unlisted front matter",source:"@site/_dogfooding/_docs tests/tests/visibility/only-unlisteds/unlisted-subcategory/index.mdx",sourceDirName:"tests/visibility/only-unlisteds/unlisted-subcategory",slug:"/tests/visibility/only-unlisteds/unlisted-subcategory/",permalink:"/zh-CN/tests/docs/tests/visibility/only-unlisteds/unlisted-subcategory/",draft:!1,unlisted:!0,tags:[{label:"visibility",permalink:"/zh-CN/tests/docs/tags/visibility"},{label:"unlisted",permalink:"/zh-CN/tests/docs/tags/unlisted"}],version:"current",lastUpdatedBy:"Gitcoins",lastUpdatedAt:1701167026,formattedLastUpdatedAt:"2023\u5e7411\u670828\u65e5",frontMatter:{unlisted:!0,tags:["visibility","unlisted"]},sidebar:"sidebar"},a={},d=[];function u(t){const e={h1:"h1",p:"p",...(0,s.a)(),...t.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"only-unlisteds---subcategory-index-unlisted",children:"Only Unlisteds - Subcategory index unlisted"}),"\n",(0,i.jsx)(e.p,{children:"Doc with unlisted front matter"}),"\n","\n","\n",(0,i.jsx)(r.Z,{})]})}function f(t={}){const{wrapper:e}={...(0,s.a)(),...t.components};return e?(0,i.jsx)(e,{...t,children:(0,i.jsx)(u,{...t})}):u(t)}},71670:(t,e,n)=>{n.d(e,{Z:()=>c,a:()=>o});var i=n(27378);const s={},r=i.createContext(s);function o(t){const e=i.useContext(r);return i.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function c(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:o(t.components),i.createElement(r.Provider,{value:e},t.children)}}}]);