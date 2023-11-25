"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[93856],{46324:(e,i,s)=>{s.r(i),s.d(i,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>u});var n=s(24246),t=s(71670);const o={slug:"/migration"},r="Migration overview",a={id:"migration/migration-overview",title:"Migration overview",description:"This doc guides you through migrating an existing Docusaurus 1 site to Docusaurus 2.",source:"@site/versioned_docs/version-2.x/migration/migration-overview.mdx",sourceDirName:"migration",slug:"/migration",permalink:"/docs/2.x/migration",draft:!1,unlisted:!1,editUrl:"https://github.com/vulnsystem/vulnsystem.github.io/edit/main/website/docs/migration/migration-overview.mdx",tags:[],version:"2.x",lastUpdatedBy:"Gitcoins",lastUpdatedAt:1700901089,formattedLastUpdatedAt:"Nov 25, 2023",frontMatter:{slug:"/migration"},sidebar:"docs",previous:{title:"Client architecture",permalink:"/docs/2.x/advanced/client"},next:{title:"Automated migration",permalink:"/docs/2.x/migration/automated"}},c={},u=[{value:"Main differences",id:"main-differences",level:2},{value:"Docusaurus 1 structure",id:"docusaurus-1-structure",level:2},{value:"Docusaurus 2 structure",id:"docusaurus-2-structure",level:2},{value:"Migration process",id:"migration-process",level:2},{value:"Automated migration process",id:"automated-migration-process",level:2},{value:"Manual migration process",id:"manual-migration-process",level:2},{value:"Support",id:"support",level:2},{value:"Example migration PRs",id:"example-migration-prs",level:2}];function l(e){const i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h1,{id:"migration-overview",children:"Migration overview"}),"\n",(0,n.jsx)(i.p,{children:"This doc guides you through migrating an existing Docusaurus 1 site to Docusaurus 2."}),"\n",(0,n.jsx)(i.p,{children:"We try to make this as easy as possible, and provide a migration CLI."}),"\n",(0,n.jsx)(i.h2,{id:"main-differences",children:"Main differences"}),"\n",(0,n.jsx)(i.p,{children:"Docusaurus 1 is a pure documentation site generator, using React as a server-side template engine, but not loading React on the browser."}),"\n",(0,n.jsx)(i.p,{children:"Docusaurus 2, rebuilt from the ground up, generates a single-page-application, using the full power of React in the browser. It allows for more customizability but preserved the best parts of Docusaurus 1 - easy to get started, versioned docs, and i18n."}),"\n",(0,n.jsxs)(i.p,{children:["Beyond that, Docusaurus 2 is a ",(0,n.jsx)(i.strong,{children:"performant static site generator"})," and can be used to create common content-driven websites (e.g. Documentation, Blogs, Product Landing and Marketing Pages, etc) extremely quickly."]}),"\n",(0,n.jsxs)(i.p,{children:["While our main focus will still be helping you get your documentations right and well, it is possible to build any kind of website using Docusaurus 2 as it is just a React application. ",(0,n.jsx)(i.strong,{children:"Docusaurus can now be used to build any website, not just documentation websites."})]}),"\n",(0,n.jsx)(i.h2,{id:"docusaurus-1-structure",children:"Docusaurus 1 structure"}),"\n",(0,n.jsx)(i.p,{children:"Your Docusaurus 1 site should have the following structure:"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-bash",children:"\u251c\u2500\u2500 docs\n\u2514\u2500\u2500 website\n    \u251c\u2500\u2500 blog\n    \u251c\u2500\u2500 core\n    \u2502   \u2514\u2500\u2500 Footer.js\n    \u251c\u2500\u2500 package.json\n    \u251c\u2500\u2500 pages\n    \u251c\u2500\u2500 sidebars.json\n    \u251c\u2500\u2500 siteConfig.js\n    \u2514\u2500\u2500 static\n"})}),"\n",(0,n.jsx)(i.h2,{id:"docusaurus-2-structure",children:"Docusaurus 2 structure"}),"\n",(0,n.jsx)(i.p,{children:"After the migration, your Docusaurus 2 site could look like:"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-sh",children:"\u251c\u2500\u2500 docs\n\u2514\u2500\u2500 website\n    \u251c\u2500\u2500 blog\n    \u251c\u2500\u2500 src\n    \u2502   \u251c\u2500\u2500 components\n    \u2502   \u251c\u2500\u2500 css\n    \u2502   \u2514\u2500\u2500 pages\n    \u251c\u2500\u2500 static\n    \u251c\u2500\u2500 package.json\n    \u251c\u2500\u2500 sidebars.json\n    \u251c\u2500\u2500 docusaurus.config.js\n"})}),"\n",(0,n.jsxs)(i.admonition,{type:"info",children:[(0,n.jsxs)(i.p,{children:["This migration does not change the ",(0,n.jsx)(i.code,{children:"/docs"})," folder location, but Docusaurus v2 sites generally have the ",(0,n.jsx)(i.code,{children:"/docs"})," folder inside ",(0,n.jsx)(i.code,{children:"/website"})]}),(0,n.jsxs)(i.p,{children:["You are free to put the ",(0,n.jsx)(i.code,{children:"/docs"})," folder anywhere you want after having migrated to v2."]})]}),"\n",(0,n.jsx)(i.h2,{id:"migration-process",children:"Migration process"}),"\n",(0,n.jsx)(i.p,{children:"There are multiple things to migrate to obtain a fully functional Docusaurus 2 website:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"packages"}),"\n",(0,n.jsx)(i.li,{children:"CLI commands"}),"\n",(0,n.jsx)(i.li,{children:"site configuration"}),"\n",(0,n.jsx)(i.li,{children:"Markdown files"}),"\n",(0,n.jsx)(i.li,{children:"sidebars file"}),"\n",(0,n.jsx)(i.li,{children:"pages, components and CSS"}),"\n",(0,n.jsx)(i.li,{children:"versioned docs"}),"\n",(0,n.jsx)(i.li,{children:"i18n support \ud83d\udea7"}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"automated-migration-process",children:"Automated migration process"}),"\n",(0,n.jsxs)(i.p,{children:["The ",(0,n.jsx)(i.a,{href:"/docs/2.x/migration/automated",children:"migration CLI"})," will handle many things of the migration for you."]}),"\n",(0,n.jsx)(i.p,{children:"However, some parts can't easily be automated, and you will have to fallback to the manual process."}),"\n",(0,n.jsx)(i.admonition,{type:"note",children:(0,n.jsx)(i.p,{children:"We recommend running the migration CLI, and complete the missing parts thanks to the manual migration process."})}),"\n",(0,n.jsx)(i.h2,{id:"manual-migration-process",children:"Manual migration process"}),"\n",(0,n.jsx)(i.p,{children:"Some parts of the migration can't be automated (particularly the pages), and you will have to migrate them manually."}),"\n",(0,n.jsxs)(i.p,{children:["The ",(0,n.jsx)(i.a,{href:"/docs/2.x/migration/manual",children:"manual migration guide"})," will give you all the manual steps."]}),"\n",(0,n.jsx)(i.h2,{id:"support",children:"Support"}),"\n",(0,n.jsxs)(i.p,{children:["For any questions, you can ask in the ",(0,n.jsxs)(i.a,{href:"https://discord.gg/C3P6CxMMxY",children:[(0,n.jsx)(i.code,{children:"#migration-v1-to-v2"})," Discord channel"]}),"."]}),"\n",(0,n.jsxs)(i.p,{children:["Feel free to tag ",(0,n.jsx)(i.a,{href:"https://github.com/slorber",children:"@slorber"})," in any migration PRs if you would like us to have a look."]}),"\n",(0,n.jsxs)(i.p,{children:["We also have volunteers willing to ",(0,n.jsx)(i.a,{href:"https://github.com/facebook/docusaurus/issues/1834",children:"help you migrate your v1 site"}),"."]}),"\n",(0,n.jsx)(i.h2,{id:"example-migration-prs",children:"Example migration PRs"}),"\n",(0,n.jsxs)(i.p,{children:["You might want to refer to our migration PRs for ",(0,n.jsx)(i.a,{href:"https://github.com/facebook/create-react-app/pull/7785",children:"Create React App"})," and ",(0,n.jsx)(i.a,{href:"https://github.com/facebook/flux/pull/471",children:"Flux"})," as examples of how a migration for a basic Docusaurus v1 site can be done."]})]})}function d(e={}){const{wrapper:i}={...(0,t.a)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},71670:(e,i,s)=>{s.d(i,{Z:()=>a,a:()=>r});var n=s(27378);const t={},o=n.createContext(t);function r(e){const i=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),n.createElement(o.Provider,{value:i},e.children)}}}]);