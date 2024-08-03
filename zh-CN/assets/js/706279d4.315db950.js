"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[35718],{99238:(e,n,t)=>{t.d(n,{Z:()=>x});var r=t(24246),s=(t(27378),t(40624)),i=t(41876),a=t(13415),o=t(64149),l=t(36712),c=t(52615);const d={cardContainer:"cardContainer_Uewx",cardTitle:"cardTitle_dwRT",cardDescription:"cardDescription_mCBT"};function h({href:e,children:n}){return(0,r.jsx)(a.Z,{href:e,className:(0,s.Z)("card padding--lg",d.cardContainer),children:n})}function u({href:e,icon:n,title:t,description:i}){return(0,r.jsxs)(h,{href:e,children:[(0,r.jsxs)(c.Z,{as:"h2",className:(0,s.Z)("text--truncate",d.cardTitle),title:t,children:[n," ",t]}),i&&(0,r.jsx)("p",{className:(0,s.Z)("text--truncate",d.cardDescription),title:i,children:i})]})}function g({item:e}){const n=(0,i.LM)(e);return n?(0,r.jsx)(u,{href:n,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:null!==(t=e.description)&&void 0!==t?t:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e.items.length})}):null;var t}function p({item:e}){const n=(0,o.Z)(e.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17";var t;const s=(0,i.xz)(null!==(t=e.docId)&&void 0!==t?t:void 0);var a;return(0,r.jsx)(u,{href:e.href,icon:n,title:e.label,description:null!==(a=e.description)&&void 0!==a?a:null==s?void 0:s.description})}function b({item:e}){switch(e.type){case"link":return(0,r.jsx)(p,{item:e});case"category":return(0,r.jsx)(g,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}function m(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function j({className:e}){const n=(0,i.jA)();return(0,r.jsx)(x,{items:n.items,className:e})}function x(e){const{items:n,className:t}=e;if(!n)return(0,r.jsx)(j,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){m(e,n,t[n])}))}return e}({},e));const a=(0,i.MN)(n);return(0,r.jsx)("section",{className:(0,s.Z)("row",t),children:a.map(((e,n)=>(0,r.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,r.jsx)(b,{item:e})},n)))})}},61132:(e,n,t)=>{t.d(n,{Z:()=>a});var r=t(24246),s=(t(27378),t(40624));const i={tabItem:"tabItem_pnkT"};function a({children:e,hidden:n,className:t}){return(0,r.jsx)("div",{role:"tabpanel",className:(0,s.Z)(i.tabItem,t),hidden:n,children:e})}},97555:(e,n,t)=>{t.d(n,{Z:()=>D});var r=t(24246),s=t(27378),i=t(40624),a=t(75527),o=t(3620),l=t(44479),c=t(62821),d=t(52196),h=t(53589);function u(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function g(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function p(e){var n,t;return null!==(t=null===(n=s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))||void 0===n?void 0:n.filter(Boolean))&&void 0!==t?t:[]}function b(e){const{values:n,children:t}=e;return(0,s.useMemo)((()=>{const e=null!=n?n:function(e){return p(e).map((({props:{value:e,label:n,attributes:t,default:r}})=>({value:e,label:n,attributes:t,default:r})))}(t);return function(e){const n=(0,d.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m({value:e,tabValues:n}){return n.some((n=>n.value===e))}function j({queryString:e=!1,groupId:n}){const t=(0,o.k6)(),r=function({queryString:e=!1,groupId:n}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:e,groupId:n}),i=(0,c._X)(r),a=(0,s.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(t.location.search);n.set(r,e),t.replace(g(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){u(e,n,t[n])}))}return e}({},t.location),{search:n.toString()}))}),[r,t]);return[i,a]}function x(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,i=b(e),[a,o]=(0,s.useState)((()=>function({defaultValue:e,tabValues:n}){if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!m({value:e,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}var t;const r=null!==(t=n.find((e=>e.default)))&&void 0!==t?t:n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:i}))),[c,d]=j({queryString:t,groupId:r}),[u,g]=function({groupId:e}){const n=function(e){return e?`docusaurus.tab.${e}`:null}(e),[t,r]=(0,h.Nk)(n);return[t,(0,s.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:r}),p=(()=>{const e=null!=c?c:u;return m({value:e,tabValues:i})?e:null})();(0,l.Z)((()=>{p&&o(p)}),[p]);return{selectedValue:a,selectValue:(0,s.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),g(e)}),[d,g,i]),tabValues:i}}var y=t(29088);const f={tabList:"tabList_Qoir",tabItem:"tabItem_AQgk"};function v(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function w(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){v(e,n,t[n])}))}return e}function k(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function O({className:e,block:n,selectedValue:t,selectValue:s,tabValues:o}){const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.o5)(),d=e=>{const n=e.currentTarget,r=l.indexOf(n),i=o[r].value;i!==t&&(c(n),s(i))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;var t;n=null!==(t=l[r])&&void 0!==t?t:l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;var r;n=null!==(r=l[t])&&void 0!==r?r:l[l.length-1];break}}null==n||n.focus()};return(0,r.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},e),children:o.map((({value:e,label:n,attributes:s})=>(0,r.jsx)("li",k(w({role:"tab",tabIndex:t===e?0:-1,"aria-selected":t===e,ref:e=>l.push(e),onKeyDown:h,onClick:d},s),{className:(0,i.Z)("tabs__item",f.tabItem,null==s?void 0:s.className,{"tabs__item--active":t===e}),children:null!=n?n:e}),e)))})}function N({lazy:e,children:n,selectedValue:t}){const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(e){const e=i.find((e=>e.props.value===t));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,r.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function S(e){const n=x(e);return(0,r.jsxs)("div",{className:(0,i.Z)("tabs-container",f.tabList),children:[(0,r.jsx)(O,w({},e,n)),(0,r.jsx)(N,w({},e,n))]})}function D(e){const n=(0,y.Z)();return(0,r.jsx)(S,k(w({},e),{children:p(e.children)}),String(n))}},6698:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(24246),s=(t(27378),t(40624));const i={browserWindow:"browserWindow_my1Q",browserWindowHeader:"browserWindowHeader_jXSR",row:"row_KZDM",buttons:"buttons_uHc7",right:"right_oyze",browserWindowAddressBar:"browserWindowAddressBar_Pd8y",dot:"dot_giz1",browserWindowMenuIcon:"browserWindowMenuIcon_Vhuh",bar:"bar_rrRL",browserWindowBody:"browserWindowBody_Idgs"};function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){a(e,n,t[n])}))}return e}function l(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function c({children:e,minHeight:n,url:t="http://localhost:3000",style:a,bodyStyle:c}){return(0,r.jsxs)("div",{className:i.browserWindow,style:l(o({},a),{minHeight:n}),children:[(0,r.jsxs)("div",{className:i.browserWindowHeader,children:[(0,r.jsxs)("div",{className:i.buttons,children:[(0,r.jsx)("span",{className:i.dot,style:{background:"#f25f58"}}),(0,r.jsx)("span",{className:i.dot,style:{background:"#fbbe3c"}}),(0,r.jsx)("span",{className:i.dot,style:{background:"#58cb42"}})]}),(0,r.jsx)("div",{className:(0,s.Z)(i.browserWindowAddressBar,"text--truncate"),children:t}),(0,r.jsx)("div",{className:i.browserWindowMenuIcon,children:(0,r.jsxs)("div",{children:[(0,r.jsx)("span",{className:i.bar}),(0,r.jsx)("span",{className:i.bar}),(0,r.jsx)("span",{className:i.bar})]})})]}),(0,r.jsx)("div",{className:i.browserWindowBody,style:c,children:e})]})}},70946:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>d,default:()=>b,frontMatter:()=>c,metadata:()=>h,toc:()=>g});var r=t(24246),s=t(71670),i=t(97555),a=t(61132),o=t(6698),l=t(99238);const c={toc_max_heading_level:4,slug:"/sidebar/items"},d="Sidebar items",h={id:"guides/docs/sidebar/items",title:"Sidebar items",description:"We have introduced three types of item types in the example in the previous section autogenerated, which we will explain in detail later.",source:"@site/docs/guides/docs/sidebar/items.mdx",sourceDirName:"guides/docs/sidebar",slug:"/sidebar/items",permalink:"/zh-CN/docs/next/sidebar/items",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/docusaurus-v2/zh-CN",tags:[],version:"current",lastUpdatedBy:"Gitcoins",lastUpdatedAt:1722644520,formattedLastUpdatedAt:"2024\u5e748\u67083\u65e5",frontMatter:{toc_max_heading_level:4,slug:"/sidebar/items"},sidebar:"docs",previous:{title:"Sidebar",permalink:"/zh-CN/docs/next/sidebar"},next:{title:"Autogenerated",permalink:"/zh-CN/docs/next/sidebar/autogenerated"}},u={},g=[{value:"Doc: link to a doc",id:"sidebar-item-doc",level:2},{value:"Link: link to any page",id:"sidebar-item-link",level:2},{value:"HTML: render custom markup",id:"sidebar-item-html",level:2},{value:"Category: create a hierarchy",id:"sidebar-item-category",level:2},{value:"Category links",id:"category-link",level:3},{value:"Generated index page",id:"generated-index-page",level:4},{value:"Doc link",id:"category-doc-link",level:4},{value:"Embedding generated index in doc page",id:"embedding-generated-index-in-doc-page",level:4},{value:"Collapsible categories",id:"collapsible-categories",level:3},{value:"Expanded categories by default",id:"expanded-categories-by-default",level:3},{value:"Using shorthands",id:"using-shorthands",level:2},{value:"Doc shorthand",id:"doc-shorthand",level:3},{value:"Category shorthand",id:"category-shorthand",level:3}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"sidebar-items",children:"Sidebar items"}),"\n","\n","\n",(0,r.jsxs)(n.p,{children:["We have introduced three types of item types in the example in the previous section: ",(0,r.jsx)(n.code,{children:"doc"}),", ",(0,r.jsx)(n.code,{children:"category"}),", and ",(0,r.jsx)(n.code,{children:"link"}),", whose usages are fairly intuitive. We will formally introduce their APIs. There's also a fourth type: ",(0,r.jsx)(n.code,{children:"autogenerated"}),", which we will explain in detail later."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.a,{href:"#sidebar-item-doc",children:"Doc"})}),": link to a doc page, associating it with the sidebar"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.a,{href:"#sidebar-item-link",children:"Link"})}),": link to any internal or external page"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.a,{href:"#sidebar-item-category",children:"Category"})}),": creates a dropdown of sidebar items"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.a,{href:"/zh-CN/docs/next/sidebar/autogenerated",children:"Autogenerated"})}),": generate a sidebar slice automatically"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.a,{href:"#sidebar-item-html",children:"HTML"})}),": renders pure HTML in the item's position"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.a,{href:"/zh-CN/docs/next/sidebar/multiple-sidebars#sidebar-item-ref",children:"*Ref"})}),": link to a doc page, without making the item take part in navigation generation"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"sidebar-item-doc",children:"Doc: link to a doc"}),"\n",(0,r.jsxs)(n.p,{children:["Use the ",(0,r.jsx)(n.code,{children:"doc"})," type to link to a doc page and assign that doc to a sidebar:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"type SidebarItemDoc =\n  // Normal syntax\n  | {\n      type: 'doc';\n      id: string;\n      label: string; // Sidebar label text\n      className?: string; // Class name for sidebar label\n      customProps?: Record<string, unknown>; // Custom props\n    }\n\n  // Shorthand syntax\n  | string; // docId shortcut\n"})}),"\n",(0,r.jsx)(n.p,{children:"Example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="sidebars.js"',children:"export default {\n  mySidebar: [\n    // Normal syntax:\n    // highlight-start\n    {\n      type: 'doc',\n      id: 'doc1', // document ID\n      label: 'Getting started', // sidebar label\n    },\n    // highlight-end\n\n    // Shorthand syntax:\n    // highlight-start\n    'doc2', // document ID\n    // highlight-end\n  ],\n};\n"})}),"\n",(0,r.jsxs)(n.p,{children:["If you use the doc shorthand or ",(0,r.jsx)(n.a,{href:"#sidebar-item-autogenerated",children:"autogenerated"})," sidebar, you would lose the ability to customize the sidebar label through item definition. You can, however, use the ",(0,r.jsx)(n.code,{children:"sidebar_label"})," Markdown front matter within that doc, which has higher precedence over the ",(0,r.jsx)(n.code,{children:"label"})," key in the sidebar item. Similarly, you can use ",(0,r.jsx)(n.code,{children:"sidebar_custom_props"})," to declare custom metadata for a doc page."]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["A ",(0,r.jsx)(n.code,{children:"doc"})," item sets an ",(0,r.jsx)(n.a,{href:"#sidebar-association",children:"implicit sidebar association"}),". Don't assign the same doc to multiple sidebars: change the type to ",(0,r.jsx)(n.code,{children:"ref"})," instead."]})}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"Sidebar custom props is a useful way to propagate arbitrary doc metadata to the client side, so you can get additional information when using any doc-related hook that fetches a doc object."})}),"\n",(0,r.jsx)(n.h2,{id:"sidebar-item-link",children:"Link: link to any page"}),"\n",(0,r.jsxs)(n.p,{children:["Use the ",(0,r.jsx)(n.code,{children:"link"})," type to link to any page (internal or external) that is not a doc."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"type SidebarItemLink = {\n  type: 'link';\n  label: string;\n  href: string;\n  className?: string;\n  description?: string;\n};\n"})}),"\n",(0,r.jsx)(n.p,{children:"Example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="sidebars.js"',children:"export default {\n  myLinksSidebar: [\n    // highlight-start\n    // External link\n    {\n      type: 'link',\n      label: 'Facebook', // The link label\n      href: 'https://facebook.com', // The external URL\n    },\n    // highlight-end\n\n    // highlight-start\n    // Internal link\n    {\n      type: 'link',\n      label: 'Home', // The link label\n      href: '/', // The internal path\n    },\n    // highlight-end\n  ],\n};\n"})}),"\n",(0,r.jsx)(n.h2,{id:"sidebar-item-html",children:"HTML: render custom markup"}),"\n",(0,r.jsxs)(n.p,{children:["Use the ",(0,r.jsx)(n.code,{children:"html"})," type to render custom HTML within the item's ",(0,r.jsx)(n.code,{children:"<li>"})," tag."]}),"\n",(0,r.jsx)(n.p,{children:"This can be useful for inserting custom items such as dividers, section titles, ads, and images."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"type SidebarItemHtml = {\n  type: 'html';\n  value: string;\n  defaultStyle?: boolean; // Use default menu item styles\n  className?: string;\n};\n"})}),"\n",(0,r.jsx)(n.p,{children:"Example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="sidebars.js"',children:"export default {\n  myHtmlSidebar: [\n    // highlight-start\n    {\n      type: 'html',\n      value: '<img src=\"sponsor.png\" alt=\"Sponsor\" />', // The HTML to be rendered\n      defaultStyle: true, // Use the default menu item styling\n    },\n    // highlight-end\n  ],\n};\n"})}),"\n",(0,r.jsxs)(n.admonition,{type:"tip",children:[(0,r.jsxs)(n.p,{children:["The menu item is already wrapped in an ",(0,r.jsx)(n.code,{children:"<li>"})," tag, so if your custom item is simple, such as a title, just supply a string as the value and use the ",(0,r.jsx)(n.code,{children:"className"})," property to style it:"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="sidebars.js"',children:"export default {\n  myHtmlSidebar: [\n    {\n      type: 'html',\n      value: 'Core concepts',\n      className: 'sidebar-title',\n    },\n  ],\n};\n"})})]}),"\n",(0,r.jsx)(n.h2,{id:"sidebar-item-category",children:"Category: create a hierarchy"}),"\n",(0,r.jsxs)(n.p,{children:["Use the ",(0,r.jsx)(n.code,{children:"category"})," type to create a hierarchy of sidebar items."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"type SidebarItemCategory = {\n  type: 'category';\n  label: string; // Sidebar label text.\n  items: SidebarItem[]; // Array of sidebar items.\n  className?: string;\n  description?: string;\n\n  // Category options:\n  collapsible: boolean; // Set the category to be collapsible\n  collapsed: boolean; // Set the category to be initially collapsed or open by default\n  link: SidebarItemCategoryLinkDoc | SidebarItemCategoryLinkGeneratedIndex;\n};\n"})}),"\n",(0,r.jsx)(n.p,{children:"Example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="sidebars.js"',children:"export default {\n  docs: [\n    {\n      type: 'category',\n      label: 'Guides',\n      collapsible: true,\n      collapsed: false,\n      items: [\n        'creating-pages',\n        {\n          type: 'category',\n          label: 'Docs',\n          items: ['introduction', 'sidebar', 'markdown-features', 'versioning'],\n        },\n      ],\n    },\n  ],\n};\n"})}),"\n",(0,r.jsxs)(n.admonition,{type:"tip",children:[(0,r.jsxs)(n.p,{children:["Use the ",(0,r.jsx)(n.a,{href:"#category-shorthand",children:(0,r.jsx)(n.strong,{children:"shorthand syntax"})})," when you don't need customizations:"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="sidebars.js"',children:"export default {\n  docs: {\n    Guides: [\n      'creating-pages',\n      {\n        Docs: ['introduction', 'sidebar', 'markdown-features', 'versioning'],\n      },\n    ],\n  },\n};\n"})})]}),"\n",(0,r.jsx)(n.h3,{id:"category-link",children:"Category links"}),"\n",(0,r.jsx)(n.p,{children:"With category links, clicking on a category can navigate you to another page."}),"\n",(0,r.jsxs)(n.admonition,{type:"tip",children:[(0,r.jsx)(n.p,{children:"Use category links to introduce a category of documents."}),(0,r.jsxs)(n.p,{children:["Autogenerated categories can use the ",(0,r.jsx)(n.a,{href:"/zh-CN/docs/next/sidebar/autogenerated#category-item-metadata",children:(0,r.jsx)(n.code,{children:"_category_.yml"})})," file to declare the link."]})]}),"\n",(0,r.jsx)(n.h4,{id:"generated-index-page",children:"Generated index page"}),"\n",(0,r.jsxs)(n.p,{children:["You can auto-generate an index page that displays all the direct children of this category. The ",(0,r.jsx)(n.code,{children:"slug"})," allows you to customize the generated page's route, which defaults to ",(0,r.jsx)(n.code,{children:"/category/[categoryName]"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="sidebars.js"',children:"export default {\n  docs: [\n    {\n      type: 'category',\n      label: 'Guides',\n      // highlight-start\n      link: {\n        type: 'generated-index',\n        title: 'Docusaurus Guides',\n        description: 'Learn about the most important Docusaurus concepts!',\n        slug: '/category/docusaurus-guides',\n        keywords: ['guides'],\n        image: '/img/docusaurus.png',\n      },\n      // highlight-end\n      items: ['pages', 'docs', 'blog', 'search'],\n    },\n  ],\n};\n"})}),"\n",(0,r.jsxs)(n.p,{children:["See it in action on the ",(0,r.jsx)(n.a,{href:"/docs/category/guides",children:"Docusaurus Guides page"}),"."]}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["Use ",(0,r.jsx)(n.code,{children:"generated-index"})," links as a quick way to get an introductory document."]})}),"\n",(0,r.jsx)(n.h4,{id:"category-doc-link",children:"Doc link"}),"\n",(0,r.jsx)(n.p,{children:"A category can link to an existing document."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="sidebars.js"',children:"export default {\n  docs: [\n    {\n      type: 'category',\n      label: 'Guides',\n      // highlight-start\n      link: {type: 'doc', id: 'introduction'},\n      // highlight-end\n      items: ['pages', 'docs', 'blog', 'search'],\n    },\n  ],\n};\n"})}),"\n",(0,r.jsxs)(n.p,{children:["See it in action on the ",(0,r.jsx)(n.a,{href:"/zh-CN/docs/next/i18n/introduction",children:"i18n introduction page"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"embedding-generated-index-in-doc-page",children:"Embedding generated index in doc page"}),"\n",(0,r.jsxs)(n.p,{children:["You can embed the generated cards list in a normal doc page as well with the ",(0,r.jsx)(n.code,{children:"DocCardList"})," component. It will display all the sidebar items of the parent category of the current document."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-md",metastring:'title="docs/sidebar/index.md"',children:"import DocCardList from '@theme/DocCardList';\n\n<DocCardList />\n"})}),"\n",(0,r.jsx)(o.Z,{children:(0,r.jsx)(l.Z,{})}),"\n",(0,r.jsx)(n.h3,{id:"collapsible-categories",children:"Collapsible categories"}),"\n",(0,r.jsxs)(n.p,{children:["We support the option to expand/collapse categories. Categories are collapsible by default, but you can disable collapsing with ",(0,r.jsx)(n.code,{children:"collapsible: false"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="sidebars.js"',children:"export default {\n  docs: [\n    {\n      type: 'category',\n      label: 'Guides',\n      items: [\n        'creating-pages',\n        {\n          type: 'category',\n          // highlight-next-line\n          collapsible: false,\n          label: 'Docs',\n          items: ['introduction', 'sidebar', 'markdown-features', 'versioning'],\n        },\n      ],\n    },\n  ],\n};\n"})}),"\n",(0,r.jsxs)(n.p,{children:["To make all categories non-collapsible by default, set the ",(0,r.jsx)(n.code,{children:"sidebarCollapsible"})," option in ",(0,r.jsx)(n.code,{children:"plugin-content-docs"})," to ",(0,r.jsx)(n.code,{children:"false"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        docs: {\n          // highlight-next-line\n          sidebarCollapsible: false,\n        },\n      },\n    ],\n  ],\n};\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["The option in ",(0,r.jsx)(n.code,{children:"sidebars.js"})," takes precedence over plugin configuration, so it is possible to make certain categories collapsible when ",(0,r.jsx)(n.code,{children:"sidebarCollapsible"})," is set to ",(0,r.jsx)(n.code,{children:"false"})," globally."]})}),"\n",(0,r.jsx)(n.h3,{id:"expanded-categories-by-default",children:"Expanded categories by default"}),"\n",(0,r.jsxs)(n.p,{children:["Collapsible categories are collapsed by default. If you want them to be expanded on the first render, you can set ",(0,r.jsx)(n.code,{children:"collapsed"})," to ",(0,r.jsx)(n.code,{children:"false"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="sidebars.js"',children:"export default {\n  docs: {\n    Guides: [\n      'creating-pages',\n      {\n        type: 'category',\n        label: 'Docs',\n        // highlight-next-line\n        collapsed: false,\n        items: ['markdown-features', 'sidebar', 'versioning'],\n      },\n    ],\n  },\n};\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Similar to ",(0,r.jsx)(n.code,{children:"collapsible"}),", you can also set the global configuration ",(0,r.jsx)(n.code,{children:"options.sidebarCollapsed"})," to ",(0,r.jsx)(n.code,{children:"false"}),". Individual ",(0,r.jsx)(n.code,{children:"collapsed"})," options in ",(0,r.jsx)(n.code,{children:"sidebars.js"})," will still take precedence over this configuration."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        docs: {\n          // highlight-next-line\n          sidebarCollapsed: false,\n        },\n      },\n    ],\n  ],\n};\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsxs)(n.p,{children:["When a category has ",(0,r.jsx)(n.code,{children:"collapsed: true"})," but ",(0,r.jsx)(n.code,{children:"collapsible: false"})," (either through ",(0,r.jsx)(n.code,{children:"sidebars.js"})," or through plugin configuration), the latter takes precedence and the category is still rendered as expanded."]})}),"\n",(0,r.jsx)(n.h2,{id:"using-shorthands",children:"Using shorthands"}),"\n",(0,r.jsxs)(n.p,{children:["You can express typical sidebar items without much customization more concisely with ",(0,r.jsx)(n.strong,{children:"shorthand syntaxes"}),". There are two parts to this: ",(0,r.jsx)(n.a,{href:"#doc-shorthand",children:(0,r.jsx)(n.strong,{children:"doc shorthand"})})," and ",(0,r.jsx)(n.a,{href:"#category-shorthand",children:(0,r.jsx)(n.strong,{children:"category shorthand"})}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"doc-shorthand",children:"Doc shorthand"}),"\n",(0,r.jsxs)(n.p,{children:["An item with type ",(0,r.jsx)(n.code,{children:"doc"})," can be simply a string representing its ID:"]}),"\n",(0,r.jsxs)(i.Z,{children:[(0,r.jsx)(a.Z,{value:"Longhand",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="sidebars.js"',children:"export default {\n  sidebar: [\n    // highlight-start\n    {\n      type: 'doc',\n      id: 'myDoc',\n    },\n    // highlight-end\n  ],\n};\n"})})}),(0,r.jsx)(a.Z,{value:"Shorthand",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="sidebars.js"',children:"export default {\n  sidebar: [\n    // highlight-start\n    'myDoc',\n    // highlight-end\n  ],\n};\n"})})})]}),"\n",(0,r.jsx)(n.p,{children:"So it's possible to simplify the example above to:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="sidebars.js"',children:"export default {\n  mySidebar: [\n    {\n      type: 'category',\n      label: 'Getting Started',\n      items: [\n        // highlight-next-line\n        'doc1',\n      ],\n    },\n    {\n      type: 'category',\n      label: 'Docusaurus',\n      items: [\n        // highlight-start\n        'doc2',\n        'doc3',\n        // highlight-end\n      ],\n    },\n    {\n      type: 'link',\n      label: 'Learn more',\n      href: 'https://example.com',\n    },\n  ],\n};\n"})}),"\n",(0,r.jsx)(n.h3,{id:"category-shorthand",children:"Category shorthand"}),"\n",(0,r.jsx)(n.p,{children:"A category item can be represented by an object whose key is its label, and the value is an array of subitems."}),"\n",(0,r.jsxs)(i.Z,{children:[(0,r.jsx)(a.Z,{value:"Longhand",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="sidebars.js"',children:"export default {\n  sidebar: [\n    // highlight-start\n    {\n      type: 'category',\n      label: 'Getting started',\n      items: ['doc1', 'doc2'],\n    },\n    // highlight-end\n  ],\n};\n"})})}),(0,r.jsx)(a.Z,{value:"Shorthand",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="sidebars.js"',children:"export default {\n  sidebar: [\n    // highlight-start\n    {\n      'Getting started': ['doc1', 'doc2'],\n    },\n    // highlight-end\n  ],\n};\n"})})})]}),"\n",(0,r.jsx)(n.p,{children:"This permits us to simplify that example to:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="sidebars.js"',children:"export default {\n  mySidebar: [\n    // highlight-start\n    {\n      'Getting started': ['doc1'],\n    },\n    {\n      Docusaurus: ['doc2', 'doc3'],\n    },\n    // highlight-end\n    {\n      type: 'link',\n      label: 'Learn more',\n      href: 'https://example.com',\n    },\n  ],\n};\n"})}),"\n",(0,r.jsx)(n.p,{children:"Each shorthand object after this transformation will contain exactly one entry. Now consider the further simplified example below:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="sidebars.js"',children:"export default {\n  mySidebar: [\n    // highlight-start\n    {\n      'Getting started': ['doc1'],\n      Docusaurus: ['doc2', 'doc3'],\n    },\n    // highlight-end\n    {\n      type: 'link',\n      label: 'Learn more',\n      href: 'https://example.com',\n    },\n  ],\n};\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Note how the two consecutive category shorthands are compressed into one object with two entries. This syntax generates a ",(0,r.jsx)(n.strong,{children:"sidebar slice"}),': you shouldn\'t see that object as one bulk item\u2014this object is unwrapped, with each entry becoming a separate item, and they spliced together with the rest of the items (in this case, the "Learn more" link) to form the final sidebar level. Sidebar slices are also important when discussing ',(0,r.jsx)(n.a,{href:"/zh-CN/docs/next/sidebar/autogenerated",children:"autogenerated sidebars"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"Wherever you have an array of items that is reduced to one category shorthand, you can omit that enclosing array as well."}),"\n",(0,r.jsxs)(i.Z,{children:[(0,r.jsx)(a.Z,{value:"Before",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="sidebars.js"',children:"export default {\n  sidebar: [\n    {\n      'Getting started': ['doc1'],\n      Docusaurus: [\n        {\n          'Basic guides': ['doc2', 'doc3'],\n          'Advanced guides': ['doc4', 'doc5'],\n        },\n      ],\n    },\n  ],\n};\n"})})}),(0,r.jsx)(a.Z,{value:"After",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="sidebars.js"',children:"export default {\n  sidebar: {\n    'Getting started': ['doc1'],\n    Docusaurus: {\n      'Basic guides': ['doc2', 'doc3'],\n      'Advanced guides': ['doc4', 'doc5'],\n    },\n  },\n};\n"})})})]})]})}function b(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},71670:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>a});var r=t(27378);const s={},i=r.createContext(s);function a(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);