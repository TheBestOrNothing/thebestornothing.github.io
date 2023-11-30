"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6310],{29169:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var s=t(24246),o=t(71670);const a={slug:"/creating-pages",sidebar_label:"Pages"},i="Creating Pages",r={id:"guides/creating-pages",title:"Creating Pages",description:"In this section, we will learn about creating pages in Docusaurus.",source:"@site/versioned_docs/version-3.0.1/guides/creating-pages.mdx",sourceDirName:"guides",slug:"/creating-pages",permalink:"/zh-CN/docs/creating-pages",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/docusaurus-v2/zh-CN",tags:[],version:"3.0.1",frontMatter:{slug:"/creating-pages",sidebar_label:"Pages"},sidebar:"docs",previous:{title:"Guides",permalink:"/zh-CN/docs/category/guides"},next:{title:"Kafka security",permalink:"/zh-CN/docs/kafkasecurity"}},l={},c=[{value:"Add a React page",id:"add-a-react-page",level:2},{value:"Add a Markdown page",id:"add-a-markdown-page",level:2},{value:"Routing",id:"routing",level:2},{value:"Duplicate Routes",id:"duplicate-routes",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"creating-pages",children:"Creating Pages"}),"\n",(0,s.jsx)(n.p,{children:"In this section, we will learn about creating pages in Docusaurus."}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"@docusaurus/plugin-content-pages"})," plugin empowers you to create ",(0,s.jsx)(n.strong,{children:"one-off standalone pages"})," like a showcase page, playground page, or support page. You can use React components, or Markdown."]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["Pages do not have sidebars, only ",(0,s.jsx)(n.a,{href:"/zh-CN/docs/docs-introduction",children:"docs"})," do."]})}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["Check the ",(0,s.jsx)(n.a,{href:"/zh-CN/docs/api/plugins/@docusaurus/plugin-content-pages",children:"Pages Plugin API Reference documentation"})," for an exhaustive list of options."]})}),"\n",(0,s.jsx)(n.h2,{id:"add-a-react-page",children:"Add a React page"}),"\n",(0,s.jsx)(n.p,{children:"React is used as the UI library to create pages. Every page component should export a React component, and you can leverage the expressiveness of React to build rich and interactive content."}),"\n",(0,s.jsxs)(n.p,{children:["Create a file ",(0,s.jsx)(n.code,{children:"/src/pages/helloReact.js"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",metastring:'title="/src/pages/helloReact.js"',children:"import React from 'react';\nimport Layout from '@theme/Layout';\n\nexport default function Hello() {\n  return (\n    <Layout title=\"Hello\" description=\"Hello React Page\">\n      <div\n        style={{\n          display: 'flex',\n          justifyContent: 'center',\n          alignItems: 'center',\n          height: '50vh',\n          fontSize: '20px',\n        }}>\n        <p>\n          Edit <code>pages/helloReact.js</code> and save to reload.\n        </p>\n      </div>\n    </Layout>\n  );\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Once you save the file, the development server will automatically reload the changes. Now open ",(0,s.jsx)(n.a,{href:"http://localhost:3000/helloReact",children:(0,s.jsx)(n.code,{children:"http://localhost:3000/helloReact"})})," and you will see the new page you just created."]}),"\n",(0,s.jsxs)(n.p,{children:["Each page doesn't come with any styling. You will need to import the ",(0,s.jsx)(n.code,{children:"Layout"})," component from ",(0,s.jsx)(n.code,{children:"@theme/Layout"})," and wrap your contents within that component if you want the navbar and/or footer to appear."]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["You can also create TypeScript pages with the ",(0,s.jsx)(n.code,{children:".tsx"})," extension (",(0,s.jsx)(n.code,{children:"helloReact.tsx"}),")."]})}),"\n",(0,s.jsx)(n.h2,{id:"add-a-markdown-page",children:"Add a Markdown page"}),"\n",(0,s.jsxs)(n.p,{children:["Create a file ",(0,s.jsx)(n.code,{children:"/src/pages/helloMarkdown.md"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-md",metastring:'title="/src/pages/helloMarkdown.md"',children:"---\ntitle: my hello page title\ndescription: my hello page description\nhide_table_of_contents: true\n---\n\n# Hello\n\nHow are you?\n"})}),"\n",(0,s.jsxs)(n.p,{children:["In the same way, a page will be created at ",(0,s.jsx)(n.a,{href:"http://localhost:3000/helloMarkdown",children:(0,s.jsx)(n.code,{children:"http://localhost:3000/helloMarkdown"})}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Markdown pages are less flexible than React pages because it always uses the theme layout."}),"\n",(0,s.jsxs)(n.p,{children:["Here's an ",(0,s.jsx)(n.a,{href:"/examples/markdownPageExample",children:"example Markdown page"}),"."]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["You can use the full power of React in Markdown pages too, refer to the ",(0,s.jsx)(n.a,{href:"https://mdxjs.com/",children:"MDX"})," documentation."]})}),"\n",(0,s.jsx)(n.h2,{id:"routing",children:"Routing"}),"\n",(0,s.jsxs)(n.p,{children:["If you are familiar with other static site generators like Jekyll and Next, this routing approach will feel familiar to you. Any JavaScript file you create under ",(0,s.jsx)(n.code,{children:"/src/pages/"})," directory will be automatically converted to a website page, following the ",(0,s.jsx)(n.code,{children:"/src/pages/"})," directory hierarchy. For example:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"/src/pages/index.js"})," \u2192 ",(0,s.jsx)(n.code,{children:"[baseUrl]"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"/src/pages/foo.js"})," \u2192 ",(0,s.jsx)(n.code,{children:"[baseUrl]/foo"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"/src/pages/foo/test.js"})," \u2192 ",(0,s.jsx)(n.code,{children:"[baseUrl]/foo/test"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"/src/pages/foo/index.js"})," \u2192 ",(0,s.jsx)(n.code,{children:"[baseUrl]/foo/"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:'In this component-based development era, it is encouraged to co-locate your styling, markup, and behavior together into components. Each page is a component, and if you need to customize your page design with your own styles, we recommend co-locating your styles with the page component in its own directory. For example, to create a "Support" page, you could do one of the following:'}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Add a ",(0,s.jsx)(n.code,{children:"/src/pages/support.js"})," file"]}),"\n",(0,s.jsxs)(n.li,{children:["Create a ",(0,s.jsx)(n.code,{children:"/src/pages/support/"})," directory and a ",(0,s.jsx)(n.code,{children:"/src/pages/support/index.js"})," file."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The latter is preferred as it has the benefits of letting you put files related to the page within that directory. For example, a CSS module file (",(0,s.jsx)(n.code,{children:"styles.module.css"}),') with styles meant to only be used on the "Support" page.']}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["This is merely a recommended directory structure, and you will still need to manually import the CSS module file within your component module (",(0,s.jsx)(n.code,{children:"support/index.js"}),")."]})}),"\n",(0,s.jsxs)(n.p,{children:["By default, any Markdown or JavaScript file starting with ",(0,s.jsx)(n.code,{children:"_"})," will be ignored and no routes will be created for that file (see the ",(0,s.jsx)(n.code,{children:"exclude"})," option)."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"my-website\n\u251c\u2500\u2500 src\n\u2502   \u2514\u2500\u2500 pages\n\u2502       \u251c\u2500\u2500 styles.module.css\n\u2502       \u251c\u2500\u2500 index.js\n\u2502       \u251c\u2500\u2500 _ignored.js\n\u2502       \u251c\u2500\u2500 _ignored-folder\n\u2502       \u2502   \u251c\u2500\u2500 Component1.js\n\u2502       \u2502   \u2514\u2500\u2500 Component2.js\n\u2502       \u2514\u2500\u2500 support\n\u2502           \u251c\u2500\u2500 index.js\n\u2502           \u2514\u2500\u2500 styles.module.css\n.\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsxs)(n.p,{children:["All JavaScript/TypeScript files within the ",(0,s.jsx)(n.code,{children:"src/pages/"})," directory will have corresponding website paths generated for them. If you want to create reusable components into that directory, use the ",(0,s.jsx)(n.code,{children:"exclude"})," option (by default, files prefixed with ",(0,s.jsx)(n.code,{children:"_"}),", test files(",(0,s.jsx)(n.code,{children:".test.js"}),"), and files in ",(0,s.jsx)(n.code,{children:"__tests__"})," directory are not turned into pages)."]})}),"\n",(0,s.jsx)(n.h3,{id:"duplicate-routes",children:"Duplicate Routes"}),"\n",(0,s.jsxs)(n.p,{children:["You may accidentally create multiple pages that are meant to be accessed on the same route. When this happens, Docusaurus will warn you about duplicate routes when you run ",(0,s.jsx)(n.code,{children:"yarn start"})," or ",(0,s.jsx)(n.code,{children:"yarn build"}),", but the site will still be built successfully. The page that was created last will be accessible, but it will override other conflicting pages. To resolve this issue, you should modify or remove any conflicting routes."]})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},71670:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>i});var s=t(27378);const o={},a=s.createContext(o);function i(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);