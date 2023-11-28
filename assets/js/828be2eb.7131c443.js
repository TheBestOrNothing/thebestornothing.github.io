"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[36523],{61132:(e,n,t)=>{t.d(n,{Z:()=>o});var s=t(24246),i=(t(27378),t(40624));const r={tabItem:"tabItem_pnkT"};function o({children:e,hidden:n,className:t}){return(0,s.jsx)("div",{role:"tabpanel",className:(0,i.Z)(r.tabItem,t),hidden:n,children:e})}},97555:(e,n,t)=>{t.d(n,{Z:()=>S});var s=t(24246),i=t(27378),r=t(40624),o=t(75527),a=t(3620),c=t(44479),l=t(62821),u=t(52196),d=t(53589);function h(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,s)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function m(e){var n,t;return null!==(t=null===(n=i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))||void 0===n?void 0:n.filter(Boolean))&&void 0!==t?t:[]}function g(e){const{values:n,children:t}=e;return(0,i.useMemo)((()=>{const e=null!=n?n:function(e){return m(e).map((({props:{value:e,label:n,attributes:t,default:s}})=>({value:e,label:n,attributes:t,default:s})))}(t);return function(e){const n=(0,u.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function b({value:e,tabValues:n}){return n.some((n=>n.value===e))}function j({queryString:e=!1,groupId:n}){const t=(0,a.k6)(),s=function({queryString:e=!1,groupId:n}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:e,groupId:n}),r=(0,l._X)(s),o=(0,i.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(t.location.search);n.set(s,e),t.replace(p(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},s=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),s.forEach((function(n){h(e,n,t[n])}))}return e}({},t.location),{search:n.toString()}))}),[s,t]);return[r,o]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,r=g(e),[o,a]=(0,i.useState)((()=>function({defaultValue:e,tabValues:n}){if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!b({value:e,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}var t;const s=null!==(t=n.find((e=>e.default)))&&void 0!==t?t:n[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:r}))),[l,u]=j({queryString:t,groupId:s}),[h,p]=function({groupId:e}){const n=function(e){return e?`docusaurus.tab.${e}`:null}(e),[t,s]=(0,d.Nk)(n);return[t,(0,i.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:s}),m=(()=>{const e=null!=l?l:h;return b({value:e,tabValues:r})?e:null})();(0,c.Z)((()=>{m&&a(m)}),[m]);return{selectedValue:o,selectValue:(0,i.useCallback)((e=>{if(!b({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);a(e),u(e),p(e)}),[u,p,r]),tabValues:r}}var x=t(29088);const v={tabList:"tabList_Qoir",tabItem:"tabItem_AQgk"};function y(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function w(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},s=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),s.forEach((function(n){y(e,n,t[n])}))}return e}function O(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,s)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function P({className:e,block:n,selectedValue:t,selectValue:i,tabValues:a}){const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,o.o5)(),u=e=>{const n=e.currentTarget,s=c.indexOf(n),r=a[s].value;r!==t&&(l(n),i(r))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const s=c.indexOf(e.currentTarget)+1;var t;n=null!==(t=c[s])&&void 0!==t?t:c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;var s;n=null!==(s=c[t])&&void 0!==s?s:c[c.length-1];break}}null==n||n.focus()};return(0,s.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},e),children:a.map((({value:e,label:n,attributes:i})=>(0,s.jsx)("li",O(w({role:"tab",tabIndex:t===e?0:-1,"aria-selected":t===e,ref:e=>c.push(e),onKeyDown:d,onClick:u},i),{className:(0,r.Z)("tabs__item",v.tabItem,null==i?void 0:i.className,{"tabs__item--active":t===e}),children:null!=n?n:e}),e)))})}function D({lazy:e,children:n,selectedValue:t}){const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(e){const e=r.find((e=>e.props.value===t));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,s.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function I(e){const n=f(e);return(0,s.jsxs)("div",{className:(0,r.Z)("tabs-container",v.tabList),children:[(0,s.jsx)(P,w({},e,n)),(0,s.jsx)(D,w({},e,n))]})}function S(e){const n=(0,x.Z)();return(0,s.jsx)(I,O(w({},e),{children:m(e.children)}),String(n))}},92726:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var s=t(24246),i=t(71670),r=t(97555),o=t(61132);const a={id:"multi-instance",description:"Use multiple docs plugin instances on a single Docusaurus site.",slug:"/docs-multi-instance"},c="Docs Multi-instance",l={id:"guides/docs/multi-instance",title:"Docs Multi-instance",description:"Use multiple docs plugin instances on a single Docusaurus site.",source:"@site/docs/guides/docs/docs-multi-instance.mdx",sourceDirName:"guides/docs",slug:"/docs-multi-instance",permalink:"/docs/next/docs-multi-instance",draft:!1,unlisted:!1,editUrl:"https://github.com/vulnsystem/vulnsystem.github.io/edit/main/website/docs/guides/docs/docs-multi-instance.mdx",tags:[],version:"current",lastUpdatedBy:"Gitcoins",lastUpdatedAt:1701167026,formattedLastUpdatedAt:"Nov 28, 2023",frontMatter:{id:"multi-instance",description:"Use multiple docs plugin instances on a single Docusaurus site.",slug:"/docs-multi-instance"},sidebar:"docs",previous:{title:"Versioning",permalink:"/docs/next/versioning"},next:{title:"Blog",permalink:"/docs/next/blog"}},u={},d=[{value:"Use-cases",id:"use-cases",level:2},{value:"Mobile SDKs documentation",id:"mobile-sdks-documentation",level:3},{value:"Versioned and unversioned doc",id:"versioned-and-unversioned-doc",level:3},{value:"Setup",id:"setup",level:2},{value:"Versioned paths",id:"versioned-paths",level:2},{value:"Tagging new versions",id:"tagging-new-versions",level:2},{value:"Docs navbar items",id:"docs-navbar-items",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"docs-multi-instance",children:"Docs Multi-instance"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"@docusaurus/plugin-content-docs"})," plugin can support ",(0,s.jsx)(n.a,{href:"/docs/next/using-plugins#multi-instance-plugins-and-plugin-ids",children:"multi-instance"}),"."]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["This feature is only useful for ",(0,s.jsx)(n.a,{href:"/docs/next/versioning",children:"versioned documentation"}),". It is recommended to be familiar with docs versioning before reading this page. If you just want ",(0,s.jsx)(n.a,{href:"/docs/next/sidebar/multiple-sidebars",children:"multiple sidebars"}),", you can do so within one plugin."]})}),"\n",(0,s.jsx)(n.h2,{id:"use-cases",children:"Use-cases"}),"\n",(0,s.jsx)(n.p,{children:"Sometimes you want a Docusaurus site to host 2 distinct sets of documentation (or more)."}),"\n",(0,s.jsx)(n.p,{children:"These documentations may even have different versioning/release lifecycles."}),"\n",(0,s.jsx)(n.h3,{id:"mobile-sdks-documentation",children:"Mobile SDKs documentation"}),"\n",(0,s.jsx)(n.p,{children:"If you build a cross-platform mobile SDK, you may have 2 documentations:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Android SDK documentation (",(0,s.jsx)(n.code,{children:"v1.0"}),", ",(0,s.jsx)(n.code,{children:"v1.1"}),")"]}),"\n",(0,s.jsxs)(n.li,{children:["iOS SDK documentation (",(0,s.jsx)(n.code,{children:"v1.0"}),", ",(0,s.jsx)(n.code,{children:"v2.0"}),")"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"In this case, you can use a distinct docs plugin instance per mobile SDK documentation."}),"\n",(0,s.jsxs)(n.admonition,{type:"warning",children:[(0,s.jsx)(n.p,{children:"If each documentation instance is very large, you should rather create 2 distinct Docusaurus sites."}),(0,s.jsx)(n.p,{children:"If someone edits the iOS documentation, is it really useful to rebuild everything, including the whole Android documentation that did not change?"})]}),"\n",(0,s.jsx)(n.h3,{id:"versioned-and-unversioned-doc",children:"Versioned and unversioned doc"}),"\n",(0,s.jsx)(n.p,{children:'Sometimes, you want some documents to be versioned, while other documents are more "global", and it feels useless to version them.'}),"\n",(0,s.jsx)(n.p,{children:"We use this pattern on the Docusaurus website itself:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.a,{href:"/docs",children:"/docs/*"})," section is versioned"]}),"\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.a,{href:"/community/support",children:"/community/*"})," section is unversioned"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,s.jsx)(n.p,{children:"Suppose you have 2 documentations:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Product: some versioned doc about your product"}),"\n",(0,s.jsx)(n.li,{children:"Community: some unversioned doc about the community around your product"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"In this case, you should use the same plugin twice in your site configuration."}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"@docusaurus/preset-classic"})," already includes a docs plugin instance for you!"]})}),"\n",(0,s.jsx)(n.p,{children:"When using the preset:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        docs: {\n          // highlight-start\n          // id: 'product', // omitted => default instance\n          // highlight-end\n          path: 'product',\n          routeBasePath: 'product',\n          sidebarPath: './sidebarsProduct.js',\n          // ... other options\n        },\n      },\n    ],\n  ],\n  plugins: [\n    [\n      '@docusaurus/plugin-content-docs',\n      {\n        // highlight-start\n        id: 'community',\n        // highlight-end\n        path: 'community',\n        routeBasePath: 'community',\n        sidebarPath: './sidebarsCommunity.js',\n        // ... other options\n      },\n    ],\n  ],\n};\n"})}),"\n",(0,s.jsx)(n.p,{children:"When not using the preset:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  plugins: [\n    [\n      '@docusaurus/plugin-content-docs',\n      {\n        // highlight-start\n        // id: 'product', // omitted => default instance\n        // highlight-end\n        path: 'product',\n        routeBasePath: 'product',\n        sidebarPath: './sidebarsProduct.js',\n        // ... other options\n      },\n    ],\n    [\n      '@docusaurus/plugin-content-docs',\n      {\n        // highlight-start\n        id: 'community',\n        // highlight-end\n        path: 'community',\n        routeBasePath: 'community',\n        sidebarPath: './sidebarsCommunity.js',\n        // ... other options\n      },\n    ],\n  ],\n};\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Don't forget to assign a unique ",(0,s.jsx)(n.code,{children:"id"})," attribute to plugin instances."]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["We consider that the ",(0,s.jsx)(n.code,{children:"product"}),' instance is the most important one, and make it the "default" instance by not assigning any ID.']})}),"\n",(0,s.jsx)(n.h2,{id:"versioned-paths",children:"Versioned paths"}),"\n",(0,s.jsx)(n.p,{children:"Each plugin instance will store versioned docs in a distinct folder."}),"\n",(0,s.jsx)(n.p,{children:"The default plugin instance will use these paths:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"website/versions.json"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"website/versioned_docs"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"website/versioned_sidebars"})}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The other plugin instances (with an ",(0,s.jsx)(n.code,{children:"id"})," attribute) will use these paths:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"website/[pluginId]_versions.json"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"website/[pluginId]_versioned_docs"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"website/[pluginId]_versioned_sidebars"})}),"\n"]}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsxs)(n.p,{children:["You can omit the ",(0,s.jsx)(n.code,{children:"id"})," attribute (defaults to ",(0,s.jsx)(n.code,{children:"default"}),") for one of the docs plugin instances."]}),(0,s.jsx)(n.p,{children:"The instance paths will be simpler, and retro-compatible with a single-instance setup."})]}),"\n",(0,s.jsx)(n.h2,{id:"tagging-new-versions",children:"Tagging new versions"}),"\n",(0,s.jsx)(n.p,{children:"Each plugin instance will have its own CLI command to tag a new version. They will be displayed if you run:"}),"\n",(0,s.jsxs)(r.Z,{groupId:"npm2yarn",children:[(0,s.jsx)(o.Z,{value:"npm",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm run docusaurus -- --help\n"})})}),(0,s.jsx)(o.Z,{value:"yarn",label:"Yarn",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"yarn docusaurus --help\n"})})}),(0,s.jsx)(o.Z,{value:"pnpm",label:"pnpm",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"pnpm run docusaurus -- --help\n"})})})]}),"\n",(0,s.jsx)(n.p,{children:"To version the product/default docs plugin instance:"}),"\n",(0,s.jsxs)(r.Z,{groupId:"npm2yarn",children:[(0,s.jsx)(o.Z,{value:"npm",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm run docusaurus docs:version 1.0.0\n"})})}),(0,s.jsx)(o.Z,{value:"yarn",label:"Yarn",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"yarn docusaurus docs:version 1.0.0\n"})})}),(0,s.jsx)(o.Z,{value:"pnpm",label:"pnpm",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"pnpm run docusaurus docs:version 1.0.0\n"})})})]}),"\n",(0,s.jsx)(n.p,{children:"To version the non-default/community docs plugin instance:"}),"\n",(0,s.jsxs)(r.Z,{groupId:"npm2yarn",children:[(0,s.jsx)(o.Z,{value:"npm",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm run docusaurus docs:version:community 1.0.0\n"})})}),(0,s.jsx)(o.Z,{value:"yarn",label:"Yarn",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"yarn docusaurus docs:version:community 1.0.0\n"})})}),(0,s.jsx)(o.Z,{value:"pnpm",label:"pnpm",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"pnpm run docusaurus docs:version:community 1.0.0\n"})})})]}),"\n",(0,s.jsx)(n.h2,{id:"docs-navbar-items",children:"Docs navbar items"}),"\n",(0,s.jsxs)(n.p,{children:["Each docs-related ",(0,s.jsx)(n.a,{href:"/docs/next/api/themes/configuration#navbar",children:"theme navbar items"})," take an optional ",(0,s.jsx)(n.code,{children:"docsPluginId"})," attribute."]}),"\n",(0,s.jsx)(n.p,{children:"For example, if you want to have one version dropdown for each mobile SDK (iOS and Android), you could do:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  themeConfig: {\n    navbar: {\n      items: [\n        {\n          type: 'docsVersionDropdown',\n          // highlight-start\n          docsPluginId: 'ios',\n          // highlight-end\n        },\n        {\n          type: 'docsVersionDropdown',\n          // highlight-start\n          docsPluginId: 'android',\n          // highlight-end\n        },\n      ],\n    },\n  },\n};\n"})})]})}function p(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},71670:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>o});var s=t(27378);const i={},r=s.createContext(i);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);