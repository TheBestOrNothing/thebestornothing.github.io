"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[48446],{36342:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var o=t(24246),s=t(71670);const i={id:"links",description:"Links to other pages in Markdown",slug:"/markdown-features/links"},r="Markdown links",d={id:"guides/markdown-features/links",title:"Markdown links",description:"Links to other pages in Markdown",source:"@site/versioned_docs/version-3.0.0/guides/markdown-features/markdown-features-links.mdx",sourceDirName:"guides/markdown-features",slug:"/markdown-features/links",permalink:"/docs/markdown-features/links",draft:!1,unlisted:!1,editUrl:"https://github.com/vulnsystem/vulnsystem.github.io/edit/main/website/docs/guides/markdown-features/markdown-features-links.mdx",tags:[],version:"3.0.0",lastUpdatedBy:"Gitcoins",lastUpdatedAt:1700901089,formattedLastUpdatedAt:"Nov 25, 2023",frontMatter:{id:"links",description:"Links to other pages in Markdown",slug:"/markdown-features/links"},sidebar:"docs",previous:{title:"Assets",permalink:"/docs/markdown-features/assets"},next:{title:"MDX Plugins",permalink:"/docs/markdown-features/plugins"}},a={},l=[];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"markdown-links",children:"Markdown links"}),"\n",(0,o.jsxs)(n.p,{children:["There are two ways of adding a link to another page: through a ",(0,o.jsx)(n.strong,{children:"URL path"})," and a ",(0,o.jsx)(n.strong,{children:"file path"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-md",children:"- [URL path to another document](./installation)\n- [file path to another document](./installation.mdx)\n"})}),"\n",(0,o.jsxs)(n.p,{children:["URL paths are unprocessed by Docusaurus, and you can see them as directly rendering to ",(0,o.jsx)(n.code,{children:'<a href="./installation">'}),", i.e. it will be resolved according to the page's URL location, rather than its file-system location."]}),"\n",(0,o.jsxs)(n.p,{children:["If you want to reference another Markdown file ",(0,o.jsx)(n.strong,{children:"included by the same plugin"}),", you could use the relative path of the document you want to link to. Docusaurus' Markdown loader will convert the file path to the target file's URL path (and hence remove the ",(0,o.jsx)(n.code,{children:".md"})," extension)."]}),"\n",(0,o.jsxs)(n.p,{children:["For example, if you are in ",(0,o.jsx)(n.code,{children:"docs/folder/doc1.md"})," and you want to reference ",(0,o.jsx)(n.code,{children:"docs/folder/doc2.md"}),", ",(0,o.jsx)(n.code,{children:"docs/folder/subfolder/doc3.md"})," and ",(0,o.jsx)(n.code,{children:"docs/otherFolder/doc4.md"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-md",metastring:'title="docs/folder/doc1.md"',children:"I am referencing a [document](doc2.mdx).\n\nReference to another [document in a subfolder](subfolder/doc3.mdx).\n\n[Relative document](../otherFolder/doc4.mdx) referencing works as well.\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Relative file paths are resolved against the current file's directory. Absolute file paths, on the other hand, are resolved relative to the ",(0,o.jsx)(n.strong,{children:"content root"}),", usually ",(0,o.jsx)(n.code,{children:"docs/"}),", ",(0,o.jsx)(n.code,{children:"blog/"}),", or ",(0,o.jsx)(n.a,{href:"/docs/i18n/tutorial",children:"localized ones"})," like ",(0,o.jsx)(n.code,{children:"i18n/zh-Hans/plugin-content-docs/current"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Absolute file paths can also be relative to the site directory. However, beware that links that begin with ",(0,o.jsx)(n.code,{children:"/docs/"})," or ",(0,o.jsx)(n.code,{children:"/blog/"})," are ",(0,o.jsx)(n.strong,{children:"not portable"})," as you would need to manually update them if you create new doc versions or localize them."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-md",children:"You can write [links](/otherFolder/doc4.mdx) relative to the content root (`/docs/`).\n\nYou can also write [links](/docs/otherFolder/doc4.mdx) relative to the site directory, but it's not recommended.\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Using relative ",(0,o.jsx)(n.em,{children:"file"})," paths (with ",(0,o.jsx)(n.code,{children:".md"})," extensions) instead of relative ",(0,o.jsx)(n.em,{children:"URL"})," links provides the following benefits:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Links will keep working on the GitHub interface and many Markdown editors"}),"\n",(0,o.jsx)(n.li,{children:"You can customize the files' slugs without having to update all the links"}),"\n",(0,o.jsx)(n.li,{children:"Moving files around the folders can be tracked by your editor, and some editors may automatically update file links"}),"\n",(0,o.jsxs)(n.li,{children:["A ",(0,o.jsx)(n.a,{href:"/docs/versioning",children:"versioned doc"})," will link to another doc of the exact same version"]}),"\n",(0,o.jsxs)(n.li,{children:["Relative URL links are very likely to break if you update the ",(0,o.jsxs)(n.a,{href:"/docs/api/docusaurus-config#trailingSlash",children:[(0,o.jsx)(n.code,{children:"trailingSlash"})," config"]})]}),"\n"]}),"\n",(0,o.jsx)(n.admonition,{type:"warning",children:(0,o.jsx)(n.p,{children:"Markdown file references only work when the source and target files are processed by the same plugin instance. This is a technical limitation of our Markdown processing architecture and will be fixed in the future. If you are linking files between plugins (e.g. linking to a doc page from a blog post), you have to use URL links."})})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},71670:(e,n,t)=>{t.d(n,{Z:()=>d,a:()=>r});var o=t(27378);const s={},i=o.createContext(s);function r(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);