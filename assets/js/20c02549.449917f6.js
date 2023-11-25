"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5399],{61132:(e,n,t)=>{t.d(n,{Z:()=>l});var s=t(24246),o=(t(27378),t(40624));const r={tabItem:"tabItem_pnkT"};function l({children:e,hidden:n,className:t}){return(0,s.jsx)("div",{role:"tabpanel",className:(0,o.Z)(r.tabItem,t),hidden:n,children:e})}},97555:(e,n,t)=>{t.d(n,{Z:()=>S});var s=t(24246),o=t(27378),r=t(40624),l=t(75527),i=t(3620),a=t(44479),d=t(62821),c=t(52196),u=t(53589);function h(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function g(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,s)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function p(e){var n,t;return null!==(t=null===(n=o.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))||void 0===n?void 0:n.filter(Boolean))&&void 0!==t?t:[]}function m(e){const{values:n,children:t}=e;return(0,o.useMemo)((()=>{const e=null!=n?n:function(e){return p(e).map((({props:{value:e,label:n,attributes:t,default:s}})=>({value:e,label:n,attributes:t,default:s})))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function b({value:e,tabValues:n}){return n.some((n=>n.value===e))}function x({queryString:e=!1,groupId:n}){const t=(0,i.k6)(),s=function({queryString:e=!1,groupId:n}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:e,groupId:n}),r=(0,d._X)(s),l=(0,o.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(t.location.search);n.set(s,e),t.replace(g(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},s=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),s.forEach((function(n){h(e,n,t[n])}))}return e}({},t.location),{search:n.toString()}))}),[s,t]);return[r,l]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,r=m(e),[l,i]=(0,o.useState)((()=>function({defaultValue:e,tabValues:n}){if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!b({value:e,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}var t;const s=null!==(t=n.find((e=>e.default)))&&void 0!==t?t:n[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:r}))),[d,c]=x({queryString:t,groupId:s}),[h,g]=function({groupId:e}){const n=function(e){return e?`docusaurus.tab.${e}`:null}(e),[t,s]=(0,u.Nk)(n);return[t,(0,o.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:s}),p=(()=>{const e=null!=d?d:h;return b({value:e,tabValues:r})?e:null})();(0,a.Z)((()=>{p&&i(p)}),[p]);return{selectedValue:l,selectValue:(0,o.useCallback)((e=>{if(!b({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),g(e)}),[c,g,r]),tabValues:r}}var j=t(29088);const y={tabList:"tabList_Qoir",tabItem:"tabItem_AQgk"};function v(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function w(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},s=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),s.forEach((function(n){v(e,n,t[n])}))}return e}function T(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,s)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function D({className:e,block:n,selectedValue:t,selectValue:o,tabValues:i}){const a=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),c=e=>{const n=e.currentTarget,s=a.indexOf(n),r=i[s].value;r!==t&&(d(n),o(r))},u=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const s=a.indexOf(e.currentTarget)+1;var t;n=null!==(t=a[s])&&void 0!==t?t:a[0];break}case"ArrowLeft":{const t=a.indexOf(e.currentTarget)-1;var s;n=null!==(s=a[t])&&void 0!==s?s:a[a.length-1];break}}null==n||n.focus()};return(0,s.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},e),children:i.map((({value:e,label:n,attributes:o})=>(0,s.jsx)("li",T(w({role:"tab",tabIndex:t===e?0:-1,"aria-selected":t===e,ref:e=>a.push(e),onKeyDown:u,onClick:c},o),{className:(0,r.Z)("tabs__item",y.tabItem,null==o?void 0:o.className,{"tabs__item--active":t===e}),children:null!=n?n:e}),e)))})}function O({lazy:e,children:n,selectedValue:t}){const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(e){const e=r.find((e=>e.props.value===t));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return(0,s.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function P(e){const n=f(e);return(0,s.jsxs)("div",{className:(0,r.Z)("tabs-container",y.tabList),children:[(0,s.jsx)(D,w({},e,n)),(0,s.jsx)(O,w({},e,n))]})}function S(e){const n=(0,j.Z)();return(0,s.jsx)(P,T(w({},e),{children:p(e.children)}),String(n))}},65044:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>g,frontMatter:()=>i,metadata:()=>d,toc:()=>u});var s=t(24246),o=t(71670),r=t(97555),l=t(61132);const i={description:"Deploy a full-featured blog in no time with Docusaurus."},a="Blog",d={id:"blog",title:"Blog",description:"Deploy a full-featured blog in no time with Docusaurus.",source:"@site/versioned_docs/version-2.x/blog.mdx",sourceDirName:".",slug:"/blog",permalink:"/docs/2.x/blog",draft:!1,unlisted:!1,editUrl:"https://github.com/vulnsystem/vulnsystem.github.io/edit/main/website/docs/blog.mdx",tags:[],version:"2.x",lastUpdatedBy:"Gitcoins",lastUpdatedAt:1700901089,formattedLastUpdatedAt:"Nov 25, 2023",frontMatter:{description:"Deploy a full-featured blog in no time with Docusaurus."},sidebar:"docs",previous:{title:"Docs Multi-instance",permalink:"/docs/2.x/docs-multi-instance"},next:{title:"Markdown Features",permalink:"/docs/2.x/markdown-features"}},c={},u=[{value:"Initial setup",id:"initial-setup",level:2},{value:"Adding posts",id:"adding-posts",level:2},{value:"Blog list",id:"blog-list",level:2},{value:"Blog sidebar",id:"blog-sidebar",level:2},{value:"Blog post date",id:"blog-post-date",level:2},{value:"Blog post authors",id:"blog-post-authors",level:2},{value:"Inline authors",id:"inline-authors",level:3},{value:"Global authors",id:"global-authors",level:3},{value:"Reading time",id:"reading-time",level:2},{value:"Feed",id:"feed",level:2},{value:"Advanced topics",id:"advanced-topics",level:2},{value:"Blog-only mode",id:"blog-only-mode",level:3},{value:"Multiple blogs",id:"multiple-blogs",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"blog",children:"Blog"}),"\n","\n","\n",(0,s.jsx)(n.p,{children:"The blog feature enables you to deploy a full-featured blog in no time."}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["Check the ",(0,s.jsx)(n.a,{href:"/docs/2.x/api/plugins/@docusaurus/plugin-content-blog",children:"Blog Plugin API Reference documentation"})," for an exhaustive list of options."]})}),"\n",(0,s.jsx)(n.h2,{id:"initial-setup",children:"Initial setup"}),"\n",(0,s.jsxs)(n.p,{children:["To set up your site's blog, start by creating a ",(0,s.jsx)(n.code,{children:"blog"})," directory."]}),"\n",(0,s.jsxs)(n.p,{children:["Then, add an item link to your blog within ",(0,s.jsx)(n.code,{children:"docusaurus.config.js"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"module.exports = {\n  themeConfig: {\n    // ...\n    navbar: {\n      items: [\n        // ...\n        // highlight-next-line\n        {to: 'blog', label: 'Blog', position: 'left'}, // or position: 'right'\n      ],\n    },\n  },\n};\n"})}),"\n",(0,s.jsx)(n.h2,{id:"adding-posts",children:"Adding posts"}),"\n",(0,s.jsx)(n.p,{children:"To publish in the blog, create a Markdown file within the blog directory."}),"\n",(0,s.jsxs)(n.p,{children:["For example, create a file at ",(0,s.jsx)(n.code,{children:"website/blog/2019-09-05-hello-docusaurus-v2.md"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-md",metastring:'title="website/blog/2019-09-05-hello-docusaurus-v2.md"',children:"---\ntitle: Welcome Docusaurus v2\ndescription: This is my first post on Docusaurus 2.\nslug: welcome-docusaurus-v2\nauthors:\n  - name: Joel Marcey\n    title: Co-creator of Docusaurus 1\n    url: https://github.com/JoelMarcey\n    image_url: https://github.com/JoelMarcey.png\n  - name: S\xe9bastien Lorber\n    title: Docusaurus maintainer\n    url: https://sebastienlorber.com\n    image_url: https://github.com/slorber.png\ntags: [hello, docusaurus-v2]\nimage: https://i.imgur.com/mErPwqL.png\nhide_table_of_contents: false\n---\n\nWelcome to this blog. This blog is created with [**Docusaurus 2**](https://docusaurus.io/).\n\n\x3c!--truncate--\x3e\n\nThis is my first post on Docusaurus 2.\n\nA whole bunch of exploration to follow.\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.a,{href:"/docs/2.x/markdown-features#front-matter",children:"front matter"})," is useful to add more metadata to your blog post, for example, author information, but Docusaurus will be able to infer all necessary metadata without the front matter. For all possible fields, see ",(0,s.jsx)(n.a,{href:"/docs/2.x/api/plugins/@docusaurus/plugin-content-blog#markdown-front-matter",children:"the API documentation"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"blog-list",children:"Blog list"}),"\n",(0,s.jsxs)(n.p,{children:["The blog's index page (by default, it is at ",(0,s.jsx)(n.code,{children:"/blog"}),") is the ",(0,s.jsx)(n.em,{children:"blog list page"}),", where all blog posts are collectively displayed."]}),"\n",(0,s.jsxs)(n.p,{children:["Use the ",(0,s.jsx)(n.code,{children:"\x3c!--truncate--\x3e"})," marker in your blog post to represent what will be shown as the summary when viewing all published blog posts. Anything above ",(0,s.jsx)(n.code,{children:"\x3c!--truncate--\x3e"})," will be part of the summary. Note that the portion above the truncate marker must be standalone renderable Markdown. For example:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-md",children:"---\ntitle: Truncation Example\n---\n\nAll these will be part of the blog post summary.\n\nEven this.\n\n\x3c!--truncate--\x3e\n\nBut anything from here on down will not be.\n\nNot this.\n\nOr this.\n"})}),"\n",(0,s.jsxs)(n.p,{children:["By default, 10 posts are shown on each blog list page, but you can control pagination with the ",(0,s.jsx)(n.code,{children:"postsPerPage"})," option in the plugin configuration. If you set ",(0,s.jsx)(n.code,{children:"postsPerPage: 'ALL'"}),", pagination will be disabled and all posts will be displayed on the first page. You can also add a meta description to the blog list page for better SEO:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"module.exports = {\n  // ...\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        blog: {\n          // highlight-start\n          blogTitle: 'Docusaurus blog!',\n          blogDescription: 'A Docusaurus powered blog!',\n          postsPerPage: 'ALL',\n          // highlight-end\n        },\n      },\n    ],\n  ],\n};\n"})}),"\n",(0,s.jsx)(n.h2,{id:"blog-sidebar",children:"Blog sidebar"}),"\n",(0,s.jsxs)(n.p,{children:["The blog sidebar displays recent blog posts. The default number of items shown is 5, but you can customize with the ",(0,s.jsx)(n.code,{children:"blogSidebarCount"})," option in the plugin configuration. By setting ",(0,s.jsx)(n.code,{children:"blogSidebarCount: 0"}),", the sidebar will be completely disabled, with the container removed as well. This will increase the width of the main container. Specially, if you have set ",(0,s.jsx)(n.code,{children:"blogSidebarCount: 'ALL'"}),", ",(0,s.jsx)(n.em,{children:"all"})," posts will be displayed."]}),"\n",(0,s.jsxs)(n.p,{children:["You can also alter the sidebar heading text with the ",(0,s.jsx)(n.code,{children:"blogSidebarTitle"})," option. For example, if you have set ",(0,s.jsx)(n.code,{children:"blogSidebarCount: 'ALL'"}),', instead of the default "Recent posts", you may rather make it say "All posts":']}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"module.exports = {\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        blog: {\n          // highlight-start\n          blogSidebarTitle: 'All posts',\n          blogSidebarCount: 'ALL',\n          // highlight-end\n        },\n      },\n    ],\n  ],\n};\n"})}),"\n",(0,s.jsx)(n.h2,{id:"blog-post-date",children:"Blog post date"}),"\n",(0,s.jsxs)(n.p,{children:["Docusaurus will extract a ",(0,s.jsx)(n.code,{children:"YYYY-MM-DD"})," date from a file/folder name such as ",(0,s.jsx)(n.code,{children:"YYYY-MM-DD-my-blog-post-title.md"}),"."]}),"\n",(0,s.jsxs)(t,{children:[(0,s.jsx)("summary",{children:"Example supported patterns"}),(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Pattern"}),(0,s.jsx)(n.th,{children:"Example"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Single file"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"2021-05-28-my-blog-post-title.md"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"MDX file"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"2021-05-28-my-blog-post-title.mdx"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["Single folder + ",(0,s.jsx)(n.code,{children:"index.md"})]}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"2021-05-28-my-blog-post-title/index.md"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Folder named by date"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"2021-05-28/my-blog-post-title.md"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Nested folders by date"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"2021/05/28/my-blog-post-title.md"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Partially nested folders by date"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"2021/05-28-my-blog-post-title.md"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["Nested folders + ",(0,s.jsx)(n.code,{children:"index.md"})]}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"2021/05/28/my-blog-post-title/index.md"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Date in the middle of path"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"category/2021/05-28-my-blog-post-title.md"})})]})]})]}),(0,s.jsx)(n.p,{children:"The date will be excised from the path and appended to the beginning of the URL slug."})]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"Using a folder can be convenient to co-locate blog post images alongside the Markdown file."})}),"\n",(0,s.jsx)(n.p,{children:"This naming convention is optional, and you can also provide the date as front matter. Since the front matter follows YAML syntax where the datetime notation is supported, you can use front matter if you need more fine-grained publish dates. For example, if you have multiple posts published on the same day, you can order them according to the time of the day:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-md",metastring:'title="earlier-post.md"',children:"---\ndate: 2021-09-13T10:00\n---\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-md",metastring:'title="later-post.md"',children:"---\ndate: 2021-09-13T18:00\n---\n"})}),"\n",(0,s.jsx)(n.h2,{id:"blog-post-authors",children:"Blog post authors"}),"\n",(0,s.jsxs)(n.p,{children:["Use the ",(0,s.jsx)(n.code,{children:"authors"})," front matter field to declare blog post authors. An author should have at least a ",(0,s.jsx)(n.code,{children:"name"})," or an ",(0,s.jsx)(n.code,{children:"image_url"}),". Docusaurus uses information like ",(0,s.jsx)(n.code,{children:"url"}),", ",(0,s.jsx)(n.code,{children:"email"}),", and ",(0,s.jsx)(n.code,{children:"title"}),", but any other information is allowed."]}),"\n",(0,s.jsx)(n.h3,{id:"inline-authors",children:"Inline authors"}),"\n",(0,s.jsx)(n.p,{children:"Blog post authors can be declared directly inside the front matter:"}),"\n",(0,s.jsxs)(r.Z,{groupId:"author-front-matter",children:[(0,s.jsx)(l.Z,{value:"single",label:"Single author",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-md",metastring:'title="my-blog-post.md"',children:"---\nauthors:\n  name: Joel Marcey\n  title: Co-creator of Docusaurus 1\n  url: https://github.com/JoelMarcey\n  image_url: https://github.com/JoelMarcey.png\n  email: jimarcey@gmail.com\n---\n"})})}),(0,s.jsx)(l.Z,{value:"multiple",label:"Multiple authors",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-md",metastring:'title="my-blog-post.md"',children:"---\nauthors:\n  - name: Joel Marcey\n    title: Co-creator of Docusaurus 1\n    url: https://github.com/JoelMarcey\n    image_url: https://github.com/JoelMarcey.png\n    email: jimarcey@gmail.com\n  - name: S\xe9bastien Lorber\n    title: Docusaurus maintainer\n    url: https://sebastienlorber.com\n    image_url: https://github.com/slorber.png\n---\n"})})})]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"This option works best to get started, or for casual, irregular authors."})}),"\n",(0,s.jsxs)(n.admonition,{type:"info",children:[(0,s.jsxs)(n.p,{children:["Prefer using the ",(0,s.jsx)(n.code,{children:"authors"})," front matter, but the legacy ",(0,s.jsx)(n.code,{children:"author_*"})," front matter remains supported:"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-md",metastring:'title="my-blog-post.md"',children:"---\nauthor: Joel Marcey\nauthor_title: Co-creator of Docusaurus 1\nauthor_url: https://github.com/JoelMarcey\nauthor_image_url: https://github.com/JoelMarcey.png\n---\n"})})]}),"\n",(0,s.jsx)(n.h3,{id:"global-authors",children:"Global authors"}),"\n",(0,s.jsx)(n.p,{children:"For regular blog post authors, it can be tedious to maintain authors' information inlined in each blog post."}),"\n",(0,s.jsx)(n.p,{children:"It is possible to declare those authors globally in a configuration file:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yml",metastring:'title="website/blog/authors.yml"',children:"jmarcey:\n  name: Joel Marcey\n  title: Co-creator of Docusaurus 1\n  url: https://github.com/JoelMarcey\n  image_url: https://github.com/JoelMarcey.png\n  email: jimarcey@gmail.com\n\nslorber:\n  name: S\xe9bastien Lorber\n  title: Docusaurus maintainer\n  url: https://sebastienlorber.com\n  image_url: https://github.com/slorber.png\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["Use the ",(0,s.jsx)(n.code,{children:"authorsMapPath"})," plugin option to configure the path. JSON is also supported."]})}),"\n",(0,s.jsx)(n.p,{children:"In blog posts front matter, you can reference the authors declared in the global configuration file:"}),"\n",(0,s.jsxs)(r.Z,{groupId:"author-front-matter",children:[(0,s.jsx)(l.Z,{value:"single",label:"Single author",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-md",metastring:'title="my-blog-post.md"',children:"---\nauthors: jmarcey\n---\n"})})}),(0,s.jsx)(l.Z,{value:"multiple",label:"Multiple authors",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-md",metastring:'title="my-blog-post.md"',children:"---\nauthors: [jmarcey, slorber]\n---\n"})})})]}),"\n",(0,s.jsxs)(n.admonition,{type:"info",children:[(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"authors"})," system is very flexible and can suit more advanced use-case:"]}),(0,s.jsxs)(t,{children:[(0,s.jsx)("summary",{children:"Mix inline authors and global authors"}),(0,s.jsx)(n.p,{children:"You can use global authors most of the time, and still use inline authors:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-md",metastring:'title="my-blog-post.md"',children:"---\nauthors:\n  - jmarcey\n  - slorber\n  - name: Inline Author name\n    title: Inline Author Title\n    url: https://github.com/inlineAuthor\n    image_url: https://github.com/inlineAuthor\n---\n"})})]}),(0,s.jsxs)(t,{children:[(0,s.jsx)("summary",{children:"Local override of global authors"}),(0,s.jsx)(n.p,{children:"You can customize the global author's data on per-blog-post basis:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-md",metastring:'title="my-blog-post.md"',children:"---\nauthors:\n  - key: jmarcey\n    title: Joel Marcey's new title\n  - key: slorber\n    name: S\xe9bastien Lorber's new name\n---\n"})})]}),(0,s.jsxs)(t,{children:[(0,s.jsx)("summary",{children:"Localize the author's configuration file"}),(0,s.jsx)(n.p,{children:"The configuration file can be localized, just create a localized copy of it at:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"website/i18n/[locale]/docusaurus-plugin-content-blog/authors.yml\n"})})]})]}),"\n",(0,s.jsxs)(n.p,{children:["An author, either declared through front matter or through the authors map, needs to have a name or an avatar, or both. If all authors of a post don't have names, Docusaurus will display their avatars compactly. See ",(0,s.jsx)(n.a,{href:"/tests/blog/2022/01/20/image-only-authors",children:"this test post"})," for the effect."]}),"\n",(0,s.jsx)(n.admonition,{title:"Feed generation",type:"warning",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"#feed",children:"RSS feeds"})," require the author's email to be set for the author to appear in the feed."]})}),"\n",(0,s.jsx)(n.h2,{id:"reading-time",children:"Reading time"}),"\n",(0,s.jsx)(n.p,{children:"Docusaurus generates a reading time estimation for each blog post based on word count. We provide an option to customize this."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"module.exports = {\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        blog: {\n          // highlight-start\n          showReadingTime: true, // When set to false, the \"x min read\" won't be shown\n          readingTime: ({content, frontMatter, defaultReadingTime}) =>\n            defaultReadingTime({content, options: {wordsPerMinute: 300}}),\n          // highlight-end\n        },\n      },\n    ],\n  ],\n};\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"readingTime"})," callback receives three parameters: the blog content text as a string, front matter as a record of string keys and their values, and the default reading time function. It returns a number (reading time in minutes) or ",(0,s.jsx)(n.code,{children:"undefined"})," (disable reading time for this page)."]}),"\n",(0,s.jsxs)(n.p,{children:["The default reading time is able to accept additional options: ",(0,s.jsx)(n.code,{children:"wordsPerMinute"})," as a number (default: 300), and ",(0,s.jsx)(n.code,{children:"wordBound"})," as a function from string to boolean. If the string passed to ",(0,s.jsx)(n.code,{children:"wordBound"})," should be a word bound (spaces, tabs, and line breaks by default), the function should return ",(0,s.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsx)(n.p,{children:"Use the callback for all your customization needs:"}),(0,s.jsxs)(r.Z,{children:[(0,s.jsxs)(l.Z,{value:"disable-per-post",label:"Per-post disabling",children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Disable reading time on one page:"})}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"module.exports = {\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        blog: {\n          showReadingTime: true,\n          // highlight-start\n          readingTime: ({content, frontMatter, defaultReadingTime}) =>\n            frontMatter.hide_reading_time\n              ? undefined\n              : defaultReadingTime({content}),\n          // highlight-end\n        },\n      },\n    ],\n  ],\n};\n"})}),(0,s.jsx)(n.p,{children:"Usage:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-md",metastring:'"my-blog-post.md"',children:"---\nhide_reading_time: true\n---\n\nThis page will no longer display the reading time stats!\n"})})]}),(0,s.jsxs)(l.Z,{value:"passing-options",label:"Passing options",children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Pass options to the default reading time function:"})}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"module.exports = {\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        blog: {\n          // highlight-start\n          readingTime: ({content, defaultReadingTime}) =>\n            defaultReadingTime({content, options: {wordsPerMinute: 100}}),\n          // highlight-end\n        },\n      },\n    ],\n  ],\n};\n"})})]}),(0,s.jsxs)(l.Z,{value:"using-custom-algo",label:"Using custom algorithms",children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Use a custom implementation of reading time:"})}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"const myReadingTime = require('./myReadingTime');\n\nmodule.exports = {\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        blog: {\n          // highlight-next-line\n          readingTime: ({content}) => myReadingTime(content),\n        },\n      },\n    ],\n  ],\n};\n"})})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"feed",children:"Feed"}),"\n",(0,s.jsxs)(n.p,{children:["You can generate RSS / Atom / JSON feed by passing ",(0,s.jsx)(n.code,{children:"feedOptions"}),". By default, RSS and Atom feeds are generated. To disable feed generation, set ",(0,s.jsx)(n.code,{children:"feedOptions.type"})," to ",(0,s.jsx)(n.code,{children:"null"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"type FeedType = 'rss' | 'atom' | 'json';\n\ntype BlogOptions = {\n  feedOptions?: {\n    type?: FeedType | 'all' | FeedType[] | null;\n    title?: string;\n    description?: string;\n    copyright: string;\n    language?: string; // possible values: http://www.w3.org/TR/REC-html40/struct/dirlang.html#langcodes\n    /** Allow control over the construction of BlogFeedItems */\n    createFeedItems?: (params: {\n      blogPosts: BlogPost[];\n      siteConfig: DocusaurusConfig;\n      outDir: string;\n      defaultCreateFeedItems: (params: {\n        blogPosts: BlogPost[];\n        siteConfig: DocusaurusConfig;\n        outDir: string;\n      }) => Promise<BlogFeedItem[]>;\n    }) => Promise<BlogFeedItem[]>;\n  };\n};\n"})}),"\n",(0,s.jsx)(n.p,{children:"Example usage:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"module.exports = {\n  // ...\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        blog: {\n          // highlight-start\n          feedOptions: {\n            type: 'all',\n            copyright: `Copyright \xa9 ${new Date().getFullYear()} Facebook, Inc.`,\n            createFeedItems: async (params) => {\n              const {blogPosts, defaultCreateFeedItems, ...rest} = params;\n              return defaultCreateFeedItems({\n                // keep only the 10 most recent blog posts in the feed\n                blogPosts: blogPosts.filter((item, index) => index < 10),\n                ...rest,\n              });\n            },\n          },\n          // highlight-end\n        },\n      },\n    ],\n  ],\n};\n"})}),"\n",(0,s.jsx)(n.p,{children:"The feeds can be found at:"}),"\n",(0,s.jsxs)(r.Z,{children:[(0,s.jsx)(l.Z,{value:"RSS",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"https://example.com/blog/rss.xml\n"})})}),(0,s.jsx)(l.Z,{value:"Atom",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"https://example.com/blog/atom.xml\n"})})}),(0,s.jsx)(l.Z,{value:"JSON",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"https://example.com/blog/feed.json\n"})})})]}),"\n",(0,s.jsx)(n.h2,{id:"advanced-topics",children:"Advanced topics"}),"\n",(0,s.jsx)(n.h3,{id:"blog-only-mode",children:"Blog-only mode"}),"\n",(0,s.jsxs)(n.p,{children:["You can run your Docusaurus 2 site without a dedicated landing page and instead have your blog's post list page as the index page. Set the ",(0,s.jsx)(n.code,{children:"routeBasePath"})," to be ",(0,s.jsx)(n.code,{children:"'/'"})," to serve the blog through the root route ",(0,s.jsx)(n.code,{children:"example.com/"})," instead of the subroute ",(0,s.jsx)(n.code,{children:"example.com/blog/"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"module.exports = {\n  // ...\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        // highlight-next-line\n        docs: false, // Optional: disable the docs plugin\n        blog: {\n          // highlight-next-line\n          routeBasePath: '/', // Serve the blog at the site's root\n          /* other blog options */\n        },\n      },\n    ],\n  ],\n};\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsxs)(n.p,{children:["Don't forget to delete the existing homepage at ",(0,s.jsx)(n.code,{children:"./src/pages/index.js"})," or else there will be two files mapping to the same route!"]})}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:['There\'s also a "Docs-only mode" for those who only want to use the docs. Read ',(0,s.jsx)(n.a,{href:"/docs/2.x/docs-introduction",children:"Docs-only mode"})," for detailed instructions or a more elaborate explanation of ",(0,s.jsx)(n.code,{children:"routeBasePath"}),"."]})}),"\n",(0,s.jsx)(n.h3,{id:"multiple-blogs",children:"Multiple blogs"}),"\n",(0,s.jsxs)(n.p,{children:["By default, the classic theme assumes only one blog per website and hence includes only one instance of the blog plugin. If you would like to have multiple blogs on a single website, it's possible too! You can add another blog by specifying another blog plugin in the ",(0,s.jsx)(n.code,{children:"plugins"})," option for ",(0,s.jsx)(n.code,{children:"docusaurus.config.js"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Set the ",(0,s.jsx)(n.code,{children:"routeBasePath"})," to the URL route that you want your second blog to be accessed on. Note that the ",(0,s.jsx)(n.code,{children:"routeBasePath"})," here has to be different from the first blog or else there could be a collision of paths! Also, set ",(0,s.jsx)(n.code,{children:"path"})," to the path to the directory containing your second blog's entries."]}),"\n",(0,s.jsxs)(n.p,{children:["As documented for ",(0,s.jsx)(n.a,{href:"/docs/2.x/using-plugins#multi-instance-plugins-and-plugin-ids",children:"multi-instance plugins"}),", you need to assign a unique ID to the plugins."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"module.exports = {\n  // ...\n  plugins: [\n    [\n      '@docusaurus/plugin-content-blog',\n      {\n        /**\n         * Required for any multi-instance plugin\n         */\n        id: 'second-blog',\n        /**\n         * URL route for the blog section of your site.\n         * *DO NOT* include a trailing slash.\n         */\n        routeBasePath: 'my-second-blog',\n        /**\n         * Path to data on filesystem relative to site dir.\n         */\n        path: './my-second-blog',\n      },\n    ],\n  ],\n};\n"})}),"\n",(0,s.jsxs)(n.p,{children:["As an example, we host a second blog ",(0,s.jsx)(n.a,{href:"/tests/blog",children:"here"}),"."]})]})}function g(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},71670:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>l});var s=t(27378);const o={},r=s.createContext(o);function l(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);