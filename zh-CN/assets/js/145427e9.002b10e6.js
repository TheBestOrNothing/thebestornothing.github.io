"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[10555],{61132:(e,n,s)=>{s.d(n,{Z:()=>o});var t=s(24246),r=(s(27378),s(40624));const i={tabItem:"tabItem_pnkT"};function o({children:e,hidden:n,className:s}){return(0,t.jsx)("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,s),hidden:n,children:e})}},97555:(e,n,s)=>{s.d(n,{Z:()=>S});var t=s(24246),r=s(27378),i=s(40624),o=s(75527),a=s(3620),l=s(44479),c=s(62821),u=s(52196),d=s(53589);function h(e,n,s){return n in e?Object.defineProperty(e,n,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[n]=s,e}function p(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),s.push.apply(s,t)}return s}(Object(n)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(n,s))})),e}function m(e){var n,s;return null!==(s=null===(n=r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))||void 0===n?void 0:n.filter(Boolean))&&void 0!==s?s:[]}function g(e){const{values:n,children:s}=e;return(0,r.useMemo)((()=>{const e=null!=n?n:function(e){return m(e).map((({props:{value:e,label:n,attributes:s,default:t}})=>({value:e,label:n,attributes:s,default:t})))}(s);return function(e){const n=(0,u.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function b({value:e,tabValues:n}){return n.some((n=>n.value===e))}function j({queryString:e=!1,groupId:n}){const s=(0,a.k6)(),t=function({queryString:e=!1,groupId:n}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:e,groupId:n}),i=(0,c._X)(t),o=(0,r.useCallback)((e=>{if(!t)return;const n=new URLSearchParams(s.location.search);n.set(t,e),s.replace(p(function(e){for(var n=1;n<arguments.length;n++){var s=null!=arguments[n]?arguments[n]:{},t=Object.keys(s);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(s).filter((function(e){return Object.getOwnPropertyDescriptor(s,e).enumerable})))),t.forEach((function(n){h(e,n,s[n])}))}return e}({},s.location),{search:n.toString()}))}),[t,s]);return[i,o]}function f(e){const{defaultValue:n,queryString:s=!1,groupId:t}=e,i=g(e),[o,a]=(0,r.useState)((()=>function({defaultValue:e,tabValues:n}){if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!b({value:e,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}var s;const t=null!==(s=n.find((e=>e.default)))&&void 0!==s?s:n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:i}))),[c,u]=j({queryString:s,groupId:t}),[h,p]=function({groupId:e}){const n=function(e){return e?`docusaurus.tab.${e}`:null}(e),[s,t]=(0,d.Nk)(n);return[s,(0,r.useCallback)((e=>{n&&t.set(e)}),[n,t])]}({groupId:t}),m=(()=>{const e=null!=c?c:h;return b({value:e,tabValues:i})?e:null})();(0,l.Z)((()=>{m&&a(m)}),[m]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!b({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);a(e),u(e),p(e)}),[u,p,i]),tabValues:i}}var v=s(29088);const x={tabList:"tabList_Qoir",tabItem:"tabItem_AQgk"};function y(e,n,s){return n in e?Object.defineProperty(e,n,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[n]=s,e}function w(e){for(var n=1;n<arguments.length;n++){var s=null!=arguments[n]?arguments[n]:{},t=Object.keys(s);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(s).filter((function(e){return Object.getOwnPropertyDescriptor(s,e).enumerable})))),t.forEach((function(n){y(e,n,s[n])}))}return e}function O(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),s.push.apply(s,t)}return s}(Object(n)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(n,s))})),e}function P({className:e,block:n,selectedValue:s,selectValue:r,tabValues:a}){const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),u=e=>{const n=e.currentTarget,t=l.indexOf(n),i=a[t].value;i!==s&&(c(n),r(i))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;var s;n=null!==(s=l[t])&&void 0!==s?s:l[0];break}case"ArrowLeft":{const s=l.indexOf(e.currentTarget)-1;var t;n=null!==(t=l[s])&&void 0!==t?t:l[l.length-1];break}}null==n||n.focus()};return(0,t.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},e),children:a.map((({value:e,label:n,attributes:r})=>(0,t.jsx)("li",O(w({role:"tab",tabIndex:s===e?0:-1,"aria-selected":s===e,ref:e=>l.push(e),onKeyDown:d,onClick:u},r),{className:(0,i.Z)("tabs__item",x.tabItem,null==r?void 0:r.className,{"tabs__item--active":s===e}),children:null!=n?n:e}),e)))})}function D({lazy:e,children:n,selectedValue:s}){const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(e){const e=i.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,t.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function I(e){const n=f(e);return(0,t.jsxs)("div",{className:(0,i.Z)("tabs-container",x.tabList),children:[(0,t.jsx)(P,w({},e,n)),(0,t.jsx)(D,w({},e,n))]})}function S(e){const n=(0,v.Z)();return(0,t.jsx)(I,O(w({},e),{children:m(e.children)}),String(n))}},57888:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var t=s(24246),r=s(71670),i=s(97555),o=s(61132);const a={id:"multi-instance",description:"Use multiple docs plugin instances on a single Docusaurus site.",slug:"/docs-multi-instance"},l="Docs Multi-instance",c={id:"guides/docs/multi-instance",title:"Docs Multi-instance",description:"Use multiple docs plugin instances on a single Docusaurus site.",source:"@site/versioned_docs/version-2.x/guides/docs/docs-multi-instance.mdx",sourceDirName:"guides/docs",slug:"/docs-multi-instance",permalink:"/zh-CN/docs/2.x/docs-multi-instance",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/docusaurus-v2/zh-CN",tags:[],version:"2.x",lastUpdatedBy:"Gitcoins",lastUpdatedAt:1700898384,formattedLastUpdatedAt:"2023\u5e7411\u670825\u65e5",frontMatter:{id:"multi-instance",description:"Use multiple docs plugin instances on a single Docusaurus site.",slug:"/docs-multi-instance"},sidebar:"docs",previous:{title:"Versioning",permalink:"/zh-CN/docs/2.x/versioning"},next:{title:"Blog",permalink:"/zh-CN/docs/2.x/blog"}},u={},d=[{value:"Use-cases",id:"use-cases",level:2},{value:"Mobile SDKs documentation",id:"mobile-sdks-documentation",level:3},{value:"Versioned and unversioned doc",id:"versioned-and-unversioned-doc",level:3},{value:"Setup",id:"setup",level:2},{value:"Versioned paths",id:"versioned-paths",level:2},{value:"Tagging new versions",id:"tagging-new-versions",level:2},{value:"Docs navbar items",id:"docs-navbar-items",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"docs-multi-instance",children:"Docs Multi-instance"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"@docusaurus/plugin-content-docs"})," plugin can support ",(0,t.jsx)(n.a,{href:"/zh-CN/docs/2.x/using-plugins#multi-instance-plugins-and-plugin-ids",children:"multi-instance"}),"."]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["This feature is only useful for ",(0,t.jsx)(n.a,{href:"/zh-CN/docs/2.x/versioning",children:"versioned documentation"}),". It is recommended to be familiar with docs versioning before reading this page. If you just want ",(0,t.jsx)(n.a,{href:"/zh-CN/docs/2.x/sidebar/multiple-sidebars",children:"multiple sidebars"}),", you can do so within one plugin."]})}),"\n",(0,t.jsx)(n.h2,{id:"use-cases",children:"Use-cases"}),"\n",(0,t.jsx)(n.p,{children:"Sometimes you want a Docusaurus site to host 2 distinct sets of documentation (or more)."}),"\n",(0,t.jsx)(n.p,{children:"These documentations may even have different versioning/release lifecycles."}),"\n",(0,t.jsx)(n.h3,{id:"mobile-sdks-documentation",children:"Mobile SDKs documentation"}),"\n",(0,t.jsx)(n.p,{children:"If you build a cross-platform mobile SDK, you may have 2 documentations:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Android SDK documentation (",(0,t.jsx)(n.code,{children:"v1.0"}),", ",(0,t.jsx)(n.code,{children:"v1.1"}),")"]}),"\n",(0,t.jsxs)(n.li,{children:["iOS SDK documentation (",(0,t.jsx)(n.code,{children:"v1.0"}),", ",(0,t.jsx)(n.code,{children:"v2.0"}),")"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"In this case, you can use a distinct docs plugin instance per mobile SDK documentation."}),"\n",(0,t.jsxs)(n.admonition,{type:"warning",children:[(0,t.jsx)(n.p,{children:"If each documentation instance is very large, you should rather create 2 distinct Docusaurus sites."}),(0,t.jsx)(n.p,{children:"If someone edits the iOS documentation, is it really useful to rebuild everything, including the whole Android documentation that did not change?"})]}),"\n",(0,t.jsx)(n.h3,{id:"versioned-and-unversioned-doc",children:"Versioned and unversioned doc"}),"\n",(0,t.jsx)(n.p,{children:'Sometimes, you want some documents to be versioned, while other documents are more "global", and it feels useless to version them.'}),"\n",(0,t.jsx)(n.p,{children:"We use this pattern on the Docusaurus website itself:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The ",(0,t.jsx)(n.a,{href:"/docs",children:"/docs/*"})," section is versioned"]}),"\n",(0,t.jsxs)(n.li,{children:["The ",(0,t.jsx)(n.a,{href:"/community/support",children:"/community/*"})," section is unversioned"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,t.jsx)(n.p,{children:"Suppose you have 2 documentations:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Product: some versioned doc about your product"}),"\n",(0,t.jsx)(n.li,{children:"Community: some unversioned doc about the community around your product"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"In this case, you should use the same plugin twice in your site configuration."}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"@docusaurus/preset-classic"})," already includes a docs plugin instance for you!"]})}),"\n",(0,t.jsx)(n.p,{children:"When using the preset:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"module.exports = {\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        docs: {\n          // highlight-start\n          // id: 'product', // omitted => default instance\n          // highlight-end\n          path: 'product',\n          routeBasePath: 'product',\n          sidebarPath: require.resolve('./sidebarsProduct.js'),\n          // ... other options\n        },\n      },\n    ],\n  ],\n  plugins: [\n    [\n      '@docusaurus/plugin-content-docs',\n      {\n        // highlight-start\n        id: 'community',\n        // highlight-end\n        path: 'community',\n        routeBasePath: 'community',\n        sidebarPath: require.resolve('./sidebarsCommunity.js'),\n        // ... other options\n      },\n    ],\n  ],\n};\n"})}),"\n",(0,t.jsx)(n.p,{children:"When not using the preset:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"module.exports = {\n  plugins: [\n    [\n      '@docusaurus/plugin-content-docs',\n      {\n        // highlight-start\n        // id: 'product', // omitted => default instance\n        // highlight-end\n        path: 'product',\n        routeBasePath: 'product',\n        sidebarPath: require.resolve('./sidebarsProduct.js'),\n        // ... other options\n      },\n    ],\n    [\n      '@docusaurus/plugin-content-docs',\n      {\n        // highlight-start\n        id: 'community',\n        // highlight-end\n        path: 'community',\n        routeBasePath: 'community',\n        sidebarPath: require.resolve('./sidebarsCommunity.js'),\n        // ... other options\n      },\n    ],\n  ],\n};\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Don't forget to assign a unique ",(0,t.jsx)(n.code,{children:"id"})," attribute to plugin instances."]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["We consider that the ",(0,t.jsx)(n.code,{children:"product"}),' instance is the most important one, and make it the "default" instance by not assigning any ID.']})}),"\n",(0,t.jsx)(n.h2,{id:"versioned-paths",children:"Versioned paths"}),"\n",(0,t.jsx)(n.p,{children:"Each plugin instance will store versioned docs in a distinct folder."}),"\n",(0,t.jsx)(n.p,{children:"The default plugin instance will use these paths:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"website/versions.json"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"website/versioned_docs"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"website/versioned_sidebars"})}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The other plugin instances (with an ",(0,t.jsx)(n.code,{children:"id"})," attribute) will use these paths:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"website/[pluginId]_versions.json"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"website/[pluginId]_versioned_docs"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"website/[pluginId]_versioned_sidebars"})}),"\n"]}),"\n",(0,t.jsxs)(n.admonition,{type:"tip",children:[(0,t.jsxs)(n.p,{children:["You can omit the ",(0,t.jsx)(n.code,{children:"id"})," attribute (defaults to ",(0,t.jsx)(n.code,{children:"default"}),") for one of the docs plugin instances."]}),(0,t.jsx)(n.p,{children:"The instance paths will be simpler, and retro-compatible with a single-instance setup."})]}),"\n",(0,t.jsx)(n.h2,{id:"tagging-new-versions",children:"Tagging new versions"}),"\n",(0,t.jsx)(n.p,{children:"Each plugin instance will have its own CLI command to tag a new version. They will be displayed if you run:"}),"\n",(0,t.jsxs)(i.Z,{groupId:"npm2yarn",children:[(0,t.jsx)(o.Z,{value:"npm",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm run docusaurus -- --help\n"})})}),(0,t.jsx)(o.Z,{value:"yarn",label:"Yarn",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"yarn docusaurus --help\n"})})}),(0,t.jsx)(o.Z,{value:"pnpm",label:"pnpm",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"pnpm run docusaurus -- --help\n"})})})]}),"\n",(0,t.jsx)(n.p,{children:"To version the product/default docs plugin instance:"}),"\n",(0,t.jsxs)(i.Z,{groupId:"npm2yarn",children:[(0,t.jsx)(o.Z,{value:"npm",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm run docusaurus docs:version 1.0.0\n"})})}),(0,t.jsx)(o.Z,{value:"yarn",label:"Yarn",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"yarn docusaurus docs:version 1.0.0\n"})})}),(0,t.jsx)(o.Z,{value:"pnpm",label:"pnpm",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"pnpm run docusaurus docs:version 1.0.0\n"})})})]}),"\n",(0,t.jsx)(n.p,{children:"To version the non-default/community docs plugin instance:"}),"\n",(0,t.jsxs)(i.Z,{groupId:"npm2yarn",children:[(0,t.jsx)(o.Z,{value:"npm",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm run docusaurus docs:version:community 1.0.0\n"})})}),(0,t.jsx)(o.Z,{value:"yarn",label:"Yarn",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"yarn docusaurus docs:version:community 1.0.0\n"})})}),(0,t.jsx)(o.Z,{value:"pnpm",label:"pnpm",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"pnpm run docusaurus docs:version:community 1.0.0\n"})})})]}),"\n",(0,t.jsx)(n.h2,{id:"docs-navbar-items",children:"Docs navbar items"}),"\n",(0,t.jsxs)(n.p,{children:["Each docs-related ",(0,t.jsx)(n.a,{href:"/zh-CN/docs/2.x/api/themes/configuration#navbar",children:"theme navbar items"})," take an optional ",(0,t.jsx)(n.code,{children:"docsPluginId"})," attribute."]}),"\n",(0,t.jsx)(n.p,{children:"For example, if you want to have one version dropdown for each mobile SDK (iOS and Android), you could do:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"module.exports = {\n  themeConfig: {\n    navbar: {\n      items: [\n        {\n          type: 'docsVersionDropdown',\n          // highlight-start\n          docsPluginId: 'ios',\n          // highlight-end\n        },\n        {\n          type: 'docsVersionDropdown',\n          // highlight-start\n          docsPluginId: 'android',\n          // highlight-end\n        },\n      ],\n    },\n  },\n};\n"})})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},71670:(e,n,s)=>{s.d(n,{Z:()=>a,a:()=>o});var t=s(27378);const r={},i=t.createContext(r);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);