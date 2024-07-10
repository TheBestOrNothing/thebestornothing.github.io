"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[98721],{28601:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var s=t(24246),o=t(71670);const r={id:"guides-kafkasecurity",description:"Create a Markdown Document",slug:"/kafkasecurity"},i="Kafka security",d={id:"guides/docs/guides-kafkasecurity",title:"Kafka security",description:"Create a Markdown Document",source:"@site/docs/guides/docs/guides-kafkasecurity.mdx",sourceDirName:"guides/docs",slug:"/kafkasecurity",permalink:"/docs/next/kafkasecurity",draft:!1,unlisted:!1,editUrl:"https://github.com/vulnsystem/vulnsystem.github.io/edit/main/website/docs/guides/docs/guides-kafkasecurity.mdx",tags:[],version:"current",lastUpdatedBy:"Gitcoins",lastUpdatedAt:1720599509,formattedLastUpdatedAt:"Jul 10, 2024",frontMatter:{id:"guides-kafkasecurity",description:"Create a Markdown Document",slug:"/kafkasecurity"},sidebar:"woofwoof",previous:{title:"Guides",permalink:"/docs/next/category/guides"},next:{title:"Kafka clients security",permalink:"/docs/next/kafkaclientsecurity"}},a={},c=[{value:"Doc front matter",id:"doc-front-matter",level:2},{value:"Doc tags",id:"doc-tags",level:2},{value:"Organizing folder structure",id:"organizing-folder-structure",level:2},{value:"Document ID",id:"document-id",level:3},{value:"Doc URLs",id:"doc-urls",level:3},{value:"Sidebars",id:"sidebars",level:3}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"kafka-security",children:"Kafka security"}),"\n",(0,s.jsxs)(n.p,{children:["Create a Markdown file, ",(0,s.jsx)(n.code,{children:"greeting.md"}),", and place it under the ",(0,s.jsx)(n.code,{children:"docs"})," directory."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"website # root directory of your site\n\u251c\u2500\u2500 docs\n\u2502   \u2514\u2500\u2500 greeting.md\n\u251c\u2500\u2500 src\n\u2502   \u2514\u2500\u2500 pages\n\u251c\u2500\u2500 docusaurus.config.js\n\u251c\u2500\u2500 ...\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-md",children:"---\ndescription: Create a doc page with rich content.\n---\n\n# Smart contracts authorization\n\nAre you ready to create the documentation site for your open source project?\n\n## Headers\n\nwill show up on the table of contents on the upper right\n\nSo that your users will know what this page is all about without scrolling down or even without reading too much.\n\n## Only h2 and h3 will be in the TOC by default.\n\nYou can configure the TOC heading levels either per-document or in the theme configuration.\n\nThe headers are well-spaced so that the hierarchy is clear.\n\n- lists will help you\n- present the key points\n- that you want your users to remember\n  - and you may nest them\n    - multiple times\n"})}),"\n",(0,s.jsxs)(n.admonition,{type:"note",children:[(0,s.jsxs)(n.p,{children:["All files prefixed with an underscore (",(0,s.jsx)(n.code,{children:"_"}),") under the ",(0,s.jsx)(n.code,{children:"docs"}),' directory are treated as "partial" pages and will be ignored by default.']}),(0,s.jsxs)(n.p,{children:["Read more about ",(0,s.jsx)(n.a,{href:"/docs/next/markdown-features/react#importing-markdown",children:"importing partial pages"}),"."]})]}),"\n",(0,s.jsx)(n.h2,{id:"doc-front-matter",children:"Doc front matter"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.a,{href:"/docs/next/markdown-features#front-matter",children:"front matter"})," is used to provide additional metadata for your doc page. Front matter is optional\u2014Docusaurus will be able to infer all necessary metadata without the front matter. For example, the ",(0,s.jsx)(n.a,{href:"#doc-tags",children:"doc tags"})," feature introduced below requires using front matter. For all possible fields, see ",(0,s.jsx)(n.a,{href:"/docs/next/api/plugins/@docusaurus/plugin-content-docs#markdown-front-matter",children:"the API documentation"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"doc-tags",children:"Doc tags"}),"\n",(0,s.jsxs)(n.p,{children:["Optionally, you can add tags to your doc pages, which introduces another dimension of categorization in addition to the ",(0,s.jsx)(n.a,{href:"/docs/next/sidebar",children:"docs sidebar"}),". Tags are passed in the front matter as a list of labels:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-md",metastring:'"your-doc-page.md"',children:"---\nid: doc-with-tags\ntitle: A doc with tags\ntags:\n  - Demo\n  - Getting started\n---\n"})}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsxs)(n.p,{children:["Tags can also be declared with ",(0,s.jsx)(n.code,{children:"tags: [Demo, Getting started]"}),"."]}),(0,s.jsxs)(n.p,{children:["Read more about all the possible ",(0,s.jsx)(n.a,{href:"https://www.w3schools.io/file/yaml-arrays/",children:"Yaml array syntaxes"}),"."]})]}),"\n",(0,s.jsx)(n.h2,{id:"organizing-folder-structure",children:"Organizing folder structure"}),"\n",(0,s.jsxs)(n.p,{children:["How the Markdown files are arranged under the ",(0,s.jsx)(n.code,{children:"docs"})," folder can have multiple impacts on Docusaurus content generation. However, most of them can be decoupled from the file structure."]}),"\n",(0,s.jsx)(n.h3,{id:"document-id",children:"Document ID"}),"\n",(0,s.jsxs)(n.p,{children:["Every document has a unique ",(0,s.jsx)(n.code,{children:"id"}),". By default, a document ",(0,s.jsx)(n.code,{children:"id"})," is the name of the document (without the extension) relative to the root docs directory."]}),"\n",(0,s.jsxs)(n.p,{children:["For example, the ID of ",(0,s.jsx)(n.code,{children:"greeting.md"})," is ",(0,s.jsx)(n.code,{children:"greeting"}),", and the ID of ",(0,s.jsx)(n.code,{children:"guide/hello.md"})," is ",(0,s.jsx)(n.code,{children:"guide/hello"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"website # Root directory of your site\n\u2514\u2500\u2500 docs\n   \u251c\u2500\u2500 greeting.md\n   \u2514\u2500\u2500 guide\n      \u2514\u2500\u2500 hello.md\n"})}),"\n",(0,s.jsxs)(n.p,{children:["However, the ",(0,s.jsx)(n.strong,{children:"last part"})," of the ",(0,s.jsx)(n.code,{children:"id"})," can be defined by the user in the front matter. For example, if ",(0,s.jsx)(n.code,{children:"guide/hello.md"}),"'s content is defined as below, its final ",(0,s.jsx)(n.code,{children:"id"})," is ",(0,s.jsx)(n.code,{children:"guide/part1"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-md",children:"---\nid: part1\n---\n\nLorem ipsum\n"})}),"\n",(0,s.jsx)(n.p,{children:"The ID is used to refer to a document when hand-writing sidebars, or when using docs-related layout components or hooks."}),"\n",(0,s.jsx)(n.h3,{id:"doc-urls",children:"Doc URLs"}),"\n",(0,s.jsxs)(n.p,{children:["By default, a document's URL location is its file path relative to the ",(0,s.jsx)(n.code,{children:"docs"})," folder. Use the ",(0,s.jsx)(n.code,{children:"slug"})," front matter to change a document's URL."]}),"\n",(0,s.jsx)(n.p,{children:"For example, suppose your site structure looks like this:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"website # Root directory of your site\n\u2514\u2500\u2500 docs\n    \u2514\u2500\u2500 guide\n        \u2514\u2500\u2500 hello.md\n"})}),"\n",(0,s.jsxs)(n.p,{children:["By default ",(0,s.jsx)(n.code,{children:"hello.md"})," will be available at ",(0,s.jsx)(n.code,{children:"/docs/guide/hello"}),". You can change its URL location to ",(0,s.jsx)(n.code,{children:"/docs/bonjour"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-md",children:"---\nslug: /bonjour\n---\n\nLorem ipsum\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"slug"})," will be appended to the doc plugin's ",(0,s.jsx)(n.code,{children:"routeBasePath"}),", which is ",(0,s.jsx)(n.code,{children:"/docs"})," by default. See ",(0,s.jsx)(n.a,{href:"/docs/next/docs-introduction#docs-only-mode",children:"Docs-only mode"})," for how to remove the ",(0,s.jsx)(n.code,{children:"/docs"})," part from the URL."]}),"\n",(0,s.jsxs)(n.admonition,{type:"note",children:[(0,s.jsx)(n.p,{children:"It is possible to use:"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["absolute slugs: ",(0,s.jsx)(n.code,{children:"slug: /mySlug"}),", ",(0,s.jsx)(n.code,{children:"slug: /"}),"..."]}),"\n",(0,s.jsxs)(n.li,{children:["relative slugs: ",(0,s.jsx)(n.code,{children:"slug: mySlug"}),", ",(0,s.jsx)(n.code,{children:"slug: ./../mySlug"}),"..."]}),"\n"]})]}),"\n",(0,s.jsxs)(n.p,{children:["If you want a document to be available at the root, and have a path like ",(0,s.jsx)(n.code,{children:"https://docusaurus.io/docs/"}),", you can use the slug front matter:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-md",children:"---\nid: my-home-doc\nslug: /\n---\n\nLorem ipsum\n"})}),"\n",(0,s.jsx)(n.h3,{id:"sidebars",children:"Sidebars"}),"\n",(0,s.jsxs)(n.p,{children:["When using ",(0,s.jsx)(n.a,{href:"/docs/next/sidebar/autogenerated",children:"autogenerated sidebars"}),", the file structure will determine the sidebar structure."]}),"\n",(0,s.jsxs)(n.p,{children:["Our recommendation for file system organization is: make your file system mirror the sidebar structure (so you don't need to handwrite your ",(0,s.jsx)(n.code,{children:"sidebars.js"})," file), and use the ",(0,s.jsx)(n.code,{children:"slug"})," front matter to customize URLs of each document."]})]})}function u(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},71670:(e,n,t)=>{t.d(n,{Z:()=>d,a:()=>i});var s=t(27378);const o={},r=s.createContext(o);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);