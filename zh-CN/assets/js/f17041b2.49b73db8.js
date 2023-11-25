"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5224],{52605:(e,n,s)=>{s.d(n,{Z:()=>c});var i=s(24246),r=s(27378),t=s(3620);const l={apiTable:"apiTable_e8hp"};function o({name:e,children:n},s){const l=function(e){let n=e;for(;(0,r.isValidElement)(n);)[n]=r.Children.toArray(n.props.children);return n}(n),o=e?`${e}-${l}`:l,d=`#${o}`,c=(0,t.k6)();return(0,i.jsx)("tr",{id:o,tabIndex:0,ref:c.location.hash===d?s:void 0,onClick:e=>{"A"===e.target.tagName.toUpperCase()||c.push(d)},onKeyDown:e=>{"Enter"===e.key&&c.push(d)},children:n.props.children})}const d=r.forwardRef(o);function c({children:e,name:n}){const[s,t]=r.Children.toArray(e.props.children),o=(0,r.useRef)(null);(0,r.useEffect)((()=>{var e;null===(e=o.current)||void 0===e||e.focus()}),[o]);const c=r.Children.map(t.props.children,(e=>(0,i.jsx)(d,{name:n,ref:o,children:e})));return(0,i.jsxs)("table",{className:l.apiTable,children:[s,(0,i.jsx)("tbody",{children:c})]})}},97704:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/baseUrlIssueBanner-3292a9164bf77c06a723e8d3ddfe66c0.png"},48295:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>d,toc:()=>a});var i=s(24246),r=s(71670),t=s(52605);const l={sidebar_position:0,description:"API reference for Docusaurus configuration file.",slug:"/api/docusaurus-config"},o="docusaurus.config.js",d={id:"api/docusaurus.config.js",title:"docusaurus.config.js",description:"API reference for Docusaurus configuration file.",source:"@site/versioned_docs/version-3.0.0/api/docusaurus.config.js.mdx",sourceDirName:"api",slug:"/api/docusaurus-config",permalink:"/zh-CN/docs/api/docusaurus-config",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/docusaurus-v2/zh-CN",tags:[],version:"3.0.0",lastUpdatedBy:"Gitcoins",lastUpdatedAt:1700898384,formattedLastUpdatedAt:"2023\u5e7411\u670825\u65e5",sidebarPosition:0,frontMatter:{sidebar_position:0,description:"API reference for Docusaurus configuration file.",slug:"/api/docusaurus-config"},sidebar:"api",previous:{title:"Client API",permalink:"/zh-CN/docs/docusaurus-core"},next:{title:"Plugin Method References",permalink:"/zh-CN/docs/api/plugin-methods/"}},c={},a=[{value:"Overview",id:"overview",level:2},{value:"Required fields",id:"required-fields",level:2},{value:"<code>title</code>",id:"title",level:3},{value:"<code>url</code>",id:"url",level:3},{value:"<code>baseUrl</code>",id:"baseUrl",level:3},{value:"Optional fields",id:"optional-fields",level:2},{value:"<code>favicon</code>",id:"favicon",level:3},{value:"<code>trailingSlash</code>",id:"trailingSlash",level:3},{value:"<code>i18n</code>",id:"i18n",level:3},{value:"<code>noIndex</code>",id:"noIndex",level:3},{value:"<code>onBrokenLinks</code>",id:"onBrokenLinks",level:3},{value:"<code>onBrokenMarkdownLinks</code>",id:"onBrokenMarkdownLinks",level:3},{value:"<code>onDuplicateRoutes</code>",id:"onDuplicateRoutes",level:3},{value:"<code>tagline</code>",id:"tagline",level:3},{value:"<code>organizationName</code>",id:"organizationName",level:3},{value:"<code>projectName</code>",id:"projectName",level:3},{value:"<code>deploymentBranch</code>",id:"deploymentBranch",level:3},{value:"<code>githubHost</code>",id:"githubHost",level:3},{value:"<code>githubPort</code>",id:"githubPort",level:3},{value:"<code>themeConfig</code>",id:"themeConfig",level:3},{value:"<code>plugins</code>",id:"plugins",level:3},{value:"<code>themes</code>",id:"themes",level:3},{value:"<code>presets</code>",id:"presets",level:3},{value:"<code>markdown</code>",id:"markdown",level:3},{value:"<code>customFields</code>",id:"customFields",level:3},{value:"<code>staticDirectories</code>",id:"staticDirectories",level:3},{value:"<code>headTags</code>",id:"headTags",level:3},{value:"<code>scripts</code>",id:"scripts",level:3},{value:"<code>stylesheets</code>",id:"stylesheets",level:3},{value:"<code>clientModules</code>",id:"clientModules",level:3},{value:"<code>ssrTemplate</code>",id:"ssrTemplate",level:3},{value:"<code>titleDelimiter</code>",id:"titleDelimiter",level:3},{value:"<code>baseUrlIssueBanner</code>",id:"baseUrlIssueBanner",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"docusaurusconfigjs",children:(0,i.jsx)(n.code,{children:"docusaurus.config.js"})}),"\n","\n","\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["Refer to the Getting Started ",(0,i.jsx)(n.a,{href:"/zh-CN/docs/configuration",children:(0,i.jsx)(n.strong,{children:"Configuration"})})," for examples."]})}),"\n",(0,i.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"docusaurus.config.js"})," contains configurations for your site and is placed in the root directory of your site."]}),"\n",(0,i.jsx)(n.p,{children:"This file is run in Node.js and should export a site configuration object, or a function that creates it."}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"docusaurus.config.js"})," file supports:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://flaviocopes.com/es-modules/",children:(0,i.jsx)(n.strong,{children:"ES Modules"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://flaviocopes.com/commonjs/",children:(0,i.jsx)(n.strong,{children:"CommonJS"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/zh-CN/docs/typescript-support#typing-config",children:(0,i.jsx)(n.strong,{children:"TypeScript"})})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Examples:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  title: 'Docusaurus',\n  url: 'https://docusaurus.io',\n  // your site config ...\n};\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default async function createConfigAsync() {\n  return {\n    title: 'Docusaurus',\n    url: 'https://docusaurus.io',\n    // your site config ...\n  };\n}\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["Refer to ",(0,i.jsx)(n.a,{href:"/zh-CN/docs/configuration#syntax-to-declare-docusaurus-config",children:(0,i.jsxs)(n.strong,{children:["Syntax to declare ",(0,i.jsx)(n.code,{children:"docusaurus.config.js"})]})})," for a more exhaustive list of examples and explanations."]})}),"\n",(0,i.jsx)(n.h2,{id:"required-fields",children:"Required fields"}),"\n",(0,i.jsx)(n.h3,{id:"title",children:(0,i.jsx)(n.code,{children:"title"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Type: ",(0,i.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Title for your website. Will be used in metadata and as browser tab title."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  title: 'Docusaurus',\n};\n"})}),"\n",(0,i.jsx)(n.h3,{id:"url",children:(0,i.jsx)(n.code,{children:"url"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Type: ",(0,i.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["URL for your website. This can also be considered the top-level hostname. For example, ",(0,i.jsx)(n.code,{children:"https://facebook.github.io"})," is the URL of ",(0,i.jsx)(n.a,{href:"https://facebook.github.io/metro/",children:"https://facebook.github.io/metro/"}),", and ",(0,i.jsx)(n.code,{children:"https://docusaurus.io"})," is the URL for ",(0,i.jsx)(n.a,{href:"https://docusaurus.io",children:"https://docusaurus.io"}),". This field is related to the ",(0,i.jsx)(n.a,{href:"#baseUrl",children:(0,i.jsx)(n.code,{children:"baseUrl"})})," field."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  url: 'https://docusaurus.io',\n};\n"})}),"\n",(0,i.jsx)(n.h3,{id:"baseUrl",children:(0,i.jsx)(n.code,{children:"baseUrl"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Type: ",(0,i.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Base URL for your site. Can be considered as the path after the host. For example, ",(0,i.jsx)(n.code,{children:"/metro/"})," is the base URL of ",(0,i.jsx)(n.a,{href:"https://facebook.github.io/metro/",children:"https://facebook.github.io/metro/"}),". For URLs that have no path, the baseUrl should be set to ",(0,i.jsx)(n.code,{children:"/"}),". This field is related to the ",(0,i.jsx)(n.a,{href:"#url",children:(0,i.jsx)(n.code,{children:"url"})})," field. Always has both leading and trailing slash."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  baseUrl: '/',\n};\n"})}),"\n",(0,i.jsx)(n.h2,{id:"optional-fields",children:"Optional fields"}),"\n",(0,i.jsx)(n.h3,{id:"favicon",children:(0,i.jsx)(n.code,{children:"favicon"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Type: ",(0,i.jsx)(n.code,{children:"string | undefined"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Path to your site favicon; must be a URL that can be used in link's href. For example, if your favicon is in ",(0,i.jsx)(n.code,{children:"static/img/favicon.ico"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  favicon: '/img/favicon.ico',\n};\n"})}),"\n",(0,i.jsx)(n.h3,{id:"trailingSlash",children:(0,i.jsx)(n.code,{children:"trailingSlash"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Type: ",(0,i.jsx)(n.code,{children:"boolean | undefined"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Allow to customize the presence/absence of a trailing slash at the end of URLs/links, and how static HTML files are generated:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"undefined"})," (default): keeps URLs untouched, and emit ",(0,i.jsx)(n.code,{children:"/docs/myDoc/index.html"})," for ",(0,i.jsx)(n.code,{children:"/docs/myDoc.md"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"true"}),": add trailing slashes to URLs/links, and emit ",(0,i.jsx)(n.code,{children:"/docs/myDoc/index.html"})," for ",(0,i.jsx)(n.code,{children:"/docs/myDoc.md"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"false"}),": remove trailing slashes from URLs/links, and emit ",(0,i.jsx)(n.code,{children:"/docs/myDoc.html"})," for ",(0,i.jsx)(n.code,{children:"/docs/myDoc.md"})]}),"\n"]}),"\n",(0,i.jsxs)(n.admonition,{type:"tip",children:[(0,i.jsx)(n.p,{children:"Each static hosting provider serves static files differently (this behavior may even change over time)."}),(0,i.jsxs)(n.p,{children:["Refer to the ",(0,i.jsx)(n.a,{href:"/zh-CN/docs/deployment",children:"deployment guide"})," and ",(0,i.jsx)(n.a,{href:"https://github.com/slorber/trailing-slash-guide",children:"slorber/trailing-slash-guide"})," to choose the appropriate setting."]})]}),"\n",(0,i.jsx)(n.h3,{id:"i18n",children:(0,i.jsx)(n.code,{children:"i18n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Type: ",(0,i.jsx)(n.code,{children:"Object"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The i18n configuration object to ",(0,i.jsx)(n.a,{href:"/zh-CN/docs/i18n/introduction",children:"localize your site"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Example:"}),"\n","\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  i18n: {\n    defaultLocale: 'en',\n    locales: ['en', 'fa'],\n    path: 'i18n',\n    localeConfigs: {\n      en: {\n        label: 'English',\n        direction: 'ltr',\n        htmlLang: 'en-US',\n        calendar: 'gregory',\n        path: 'en',\n      },\n      fa: {\n        label: '\u0641\u0627\u0631\u0633\u06cc',\n        direction: 'rtl',\n        htmlLang: 'fa-IR',\n        calendar: 'persian',\n        path: 'fa',\n      },\n    },\n  },\n};\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"defaultLocale"}),": The locale that (1) does not have its name in the base URL (2) gets started with ",(0,i.jsx)(n.code,{children:"docusaurus start"})," without ",(0,i.jsx)(n.code,{children:"--locale"})," option (3) will be used for the ",(0,i.jsx)(n.code,{children:'<link hrefLang="x-default">'})," tag"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"locales"}),": List of locales deployed on your site. Must contain ",(0,i.jsx)(n.code,{children:"defaultLocale"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"path"}),": Root folder which all locale folders are relative to. Can be absolute or relative to the config file. Defaults to ",(0,i.jsx)(n.code,{children:"i18n"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"localeConfigs"}),": Individual options for each locale.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"label"}),": The label displayed for this locale in the locales dropdown."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"direction"}),": ",(0,i.jsx)(n.code,{children:"ltr"})," (default) or ",(0,i.jsx)(n.code,{children:"rtl"})," (for ",(0,i.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Glossary/rtl",children:"right-to-left languages"})," like Farsi, Arabic, Hebrew, etc.). Used to select the locale's CSS and HTML meta attribute."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"htmlLang"}),": BCP 47 language tag to use in ",(0,i.jsx)(n.code,{children:'<html lang="...">'})," (or any other DOM tag name) and in ",(0,i.jsx)(n.code,{children:'<link ... hreflang="...">'})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"calendar"}),": the ",(0,i.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/calendar",children:"calendar"})," used to calculate the date era. Note that it doesn't control the actual string displayed: ",(0,i.jsx)(n.code,{children:"MM/DD/YYYY"})," and ",(0,i.jsx)(n.code,{children:"DD/MM/YYYY"})," are both ",(0,i.jsx)(n.code,{children:"gregory"}),". To choose the format (",(0,i.jsx)(n.code,{children:"DD/MM/YYYY"})," or ",(0,i.jsx)(n.code,{children:"MM/DD/YYYY"}),"), set your locale name to ",(0,i.jsx)(n.code,{children:"en-GB"})," or ",(0,i.jsx)(n.code,{children:"en-US"})," (",(0,i.jsx)(n.code,{children:"en"})," means ",(0,i.jsx)(n.code,{children:"en-US"}),")."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"path"}),": Root folder that all plugin localization folders of this locale are relative to. Will be resolved against ",(0,i.jsx)(n.code,{children:"i18n.path"}),". Defaults to the locale's name. Note: this has no effect on the locale's ",(0,i.jsx)(n.code,{children:"baseUrl"}),"\u2014customization of base URL is a work-in-progress."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"noIndex",children:(0,i.jsx)(n.code,{children:"noIndex"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Type: ",(0,i.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["This option adds ",(0,i.jsx)(n.code,{children:'<meta name="robots" content="noindex, nofollow">'})," to every page to tell search engines to avoid indexing your site (more information ",(0,i.jsx)(n.a,{href:"https://moz.com/learn/seo/robots-meta-directives",children:"here"}),")."]}),"\n",(0,i.jsx)(n.p,{children:"Example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  noIndex: true, // Defaults to `false`\n};\n"})}),"\n",(0,i.jsx)(n.h3,{id:"onBrokenLinks",children:(0,i.jsx)(n.code,{children:"onBrokenLinks"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Type: ",(0,i.jsx)(n.code,{children:"'ignore' | 'log' | 'warn' | 'throw'"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The behavior of Docusaurus when it detects any broken link."}),"\n",(0,i.jsx)(n.p,{children:"By default, it throws an error, to ensure you never ship any broken link, but you can lower this security if needed."}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["The broken links detection is only available for a production build (",(0,i.jsx)(n.code,{children:"docusaurus build"}),")."]})}),"\n",(0,i.jsx)(n.h3,{id:"onBrokenMarkdownLinks",children:(0,i.jsx)(n.code,{children:"onBrokenMarkdownLinks"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Type: ",(0,i.jsx)(n.code,{children:"'ignore' | 'log' | 'warn' | 'throw'"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The behavior of Docusaurus when it detects any broken Markdown link."}),"\n",(0,i.jsx)(n.p,{children:"By default, it prints a warning, to let you know about your broken Markdown link, but you can change this security if needed."}),"\n",(0,i.jsx)(n.h3,{id:"onDuplicateRoutes",children:(0,i.jsx)(n.code,{children:"onDuplicateRoutes"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Type: ",(0,i.jsx)(n.code,{children:"'ignore' | 'log' | 'warn' | 'throw'"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The behavior of Docusaurus when it detects any ",(0,i.jsx)(n.a,{href:"/zh-CN/docs/creating-pages#duplicate-routes",children:"duplicate routes"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["By default, it displays a warning after you run ",(0,i.jsx)(n.code,{children:"yarn start"})," or ",(0,i.jsx)(n.code,{children:"yarn build"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"tagline",children:(0,i.jsx)(n.code,{children:"tagline"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Type: ",(0,i.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The tagline for your website."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  tagline:\n    'Docusaurus makes it easy to maintain Open Source documentation websites.',\n};\n"})}),"\n",(0,i.jsx)(n.h3,{id:"organizationName",children:(0,i.jsx)(n.code,{children:"organizationName"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Type: ",(0,i.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The GitHub user or organization that owns the repository. You don't need this if you are not using the ",(0,i.jsx)(n.code,{children:"docusaurus deploy"})," command."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  // Docusaurus' organization is facebook\n  organizationName: 'facebook',\n};\n"})}),"\n",(0,i.jsx)(n.h3,{id:"projectName",children:(0,i.jsx)(n.code,{children:"projectName"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Type: ",(0,i.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The name of the GitHub repository. You don't need this if you are not using the ",(0,i.jsx)(n.code,{children:"docusaurus deploy"})," command."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  projectName: 'docusaurus',\n};\n"})}),"\n",(0,i.jsx)(n.h3,{id:"deploymentBranch",children:(0,i.jsx)(n.code,{children:"deploymentBranch"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Type: ",(0,i.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The name of the branch to deploy the static files to. You don't need this if you are not using the ",(0,i.jsx)(n.code,{children:"docusaurus deploy"})," command."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  deploymentBranch: 'gh-pages',\n};\n"})}),"\n",(0,i.jsx)(n.h3,{id:"githubHost",children:(0,i.jsx)(n.code,{children:"githubHost"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Type: ",(0,i.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The hostname of your server. Useful if you are using GitHub Enterprise. You don't need this if you are not using the ",(0,i.jsx)(n.code,{children:"docusaurus deploy"})," command."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  githubHost: 'github.com',\n};\n"})}),"\n",(0,i.jsx)(n.h3,{id:"githubPort",children:(0,i.jsx)(n.code,{children:"githubPort"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Type: ",(0,i.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The port of your server. Useful if you are using GitHub Enterprise. You don't need this if you are not using the ",(0,i.jsx)(n.code,{children:"docusaurus deploy"})," command."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  githubPort: '22',\n};\n"})}),"\n",(0,i.jsx)(n.h3,{id:"themeConfig",children:(0,i.jsx)(n.code,{children:"themeConfig"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Type: ",(0,i.jsx)(n.code,{children:"Object"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.a,{href:"/zh-CN/docs/api/themes/configuration",children:"theme configuration"})," object to customize your site UI like navbar and footer."]}),"\n",(0,i.jsx)(n.p,{children:"Example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  themeConfig: {\n    docs: {\n      sidebar: {\n        hideable: false,\n        autoCollapseCategories: false,\n      },\n    },\n    colorMode: {\n      defaultMode: 'light',\n      disableSwitch: false,\n      respectPrefersColorScheme: true,\n    },\n    navbar: {\n      title: 'Site Title',\n      logo: {\n        alt: 'Site Logo',\n        src: 'img/logo.svg',\n        width: 32,\n        height: 32,\n      },\n      items: [\n        {\n          to: 'docs/docusaurus.config.js',\n          activeBasePath: 'docs',\n          label: 'docusaurus.config.js',\n          position: 'left',\n        },\n        // ... other links\n      ],\n    },\n    footer: {\n      style: 'dark',\n      links: [\n        {\n          title: 'Docs',\n          items: [\n            {\n              label: 'Docs',\n              to: 'docs/doc1',\n            },\n          ],\n        },\n        // ... other links\n      ],\n      logo: {\n        alt: 'Meta Open Source Logo',\n        src: 'img/meta_oss_logo.png',\n        href: 'https://opensource.fb.com',\n        width: 160,\n        height: 51,\n      },\n      copyright: `Copyright \xa9 ${new Date().getFullYear()} Facebook, Inc.`, // You can also put own HTML here\n    },\n  },\n};\n"})}),"\n",(0,i.jsx)(n.h3,{id:"plugins",children:(0,i.jsx)(n.code,{children:"plugins"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Type: ",(0,i.jsx)(n.code,{children:"PluginConfig[]"})]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"type PluginConfig = string | [string, any] | PluginModule | [PluginModule, any];\n"})}),"\n",(0,i.jsxs)(n.p,{children:["See ",(0,i.jsx)(n.a,{href:"/zh-CN/docs/api/plugin-methods/",children:"plugin method references"})," for the shape of a ",(0,i.jsx)(n.code,{children:"PluginModule"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  plugins: [\n    'docusaurus-plugin-awesome',\n    ['docusuarus-plugin-confetti', {fancy: false}],\n    () => ({\n      postBuild() {\n        console.log('Build finished');\n      },\n    }),\n  ],\n};\n"})}),"\n",(0,i.jsx)(n.h3,{id:"themes",children:(0,i.jsx)(n.code,{children:"themes"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Type: ",(0,i.jsx)(n.code,{children:"PluginConfig[]"})]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  themes: ['@docusaurus/theme-classic'],\n};\n"})}),"\n",(0,i.jsx)(n.h3,{id:"presets",children:(0,i.jsx)(n.code,{children:"presets"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Type: ",(0,i.jsx)(n.code,{children:"PresetConfig[]"})]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"type PresetConfig = string | [string, any];\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  presets: [],\n};\n"})}),"\n",(0,i.jsx)(n.h3,{id:"markdown",children:(0,i.jsx)(n.code,{children:"markdown"})}),"\n",(0,i.jsx)(n.p,{children:"The global Docusaurus Markdown config."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Type: ",(0,i.jsx)(n.code,{children:"MarkdownConfig"})]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"type MarkdownPreprocessor = (args: {\n  filePath: string;\n  fileContent: string;\n}) => string;\n\ntype MDX1CompatOptions =\n  | boolean\n  | {\n      comments: boolean;\n      admonitions: boolean;\n      headingIds: boolean;\n    };\n\ntype MarkdownConfig = {\n  format: 'mdx' | 'md' | 'detect';\n  mermaid: boolean;\n  preprocessor?: MarkdownPreprocessor;\n  mdx1Compat: MDX1CompatOptions;\n};\n"})}),"\n",(0,i.jsx)(n.p,{children:"Example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  markdown: {\n    format: 'mdx',\n    mermaid: true,\n    preprocessor: ({filePath, fileContent}) => {\n      return fileContent.replaceAll('{{MY_VAR}}', 'MY_VALUE');\n    },\n    mdx1Compat: {\n      comments: true,\n      admonitions: true,\n      headingIds: true,\n    },\n  },\n};\n"})}),"\n",(0,i.jsx)(t.Z,{children:(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Default"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"format"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"'mdx' | 'md' | 'detect'"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"'mdx'"})}),(0,i.jsxs)(n.td,{children:["The default parser format to use for Markdown content. Using 'detect' will select the appropriate format automatically based on file extensions: ",(0,i.jsx)(n.code,{children:".md"})," vs ",(0,i.jsx)(n.code,{children:".mdx"}),"."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"mermaid"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"boolean"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"false"})}),(0,i.jsxs)(n.td,{children:["When ",(0,i.jsx)(n.code,{children:"true"}),", allows Docusaurus to render Markdown code blocks with ",(0,i.jsx)(n.code,{children:"mermaid"})," language as Mermaid diagrams."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"preprocessor"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"MarkdownPreprocessor"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"undefined"})}),(0,i.jsx)(n.td,{children:"Gives you the ability to alter the Markdown content string before parsing. Use it as a last-resort escape hatch or workaround: it is almost always better to implement a Remark/Rehype plugin."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"mdx1Compat"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"MDX1CompatOptions"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"{comments: true, admonitions: true, headingIds: true}"})}),(0,i.jsx)(n.td,{children:"Compatibility options to make it easier to upgrade to Docusaurus v3+."})]})]})]})}),"\n",(0,i.jsx)(n.h3,{id:"customFields",children:(0,i.jsx)(n.code,{children:"customFields"})}),"\n",(0,i.jsxs)(n.p,{children:["Docusaurus guards ",(0,i.jsx)(n.code,{children:"docusaurus.config.js"})," from unknown fields. To add a custom field, define it on ",(0,i.jsx)(n.code,{children:"customFields"}),"."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Type: ",(0,i.jsx)(n.code,{children:"Object"})]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  customFields: {\n    admin: 'endi',\n    superman: 'lol',\n  },\n};\n"})}),"\n",(0,i.jsx)(n.p,{children:"Attempting to add unknown fields in the config will lead to errors during build time:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"Error: The field(s) 'foo', 'bar' are not recognized in docusaurus.config.js\n"})}),"\n",(0,i.jsx)(n.h3,{id:"staticDirectories",children:(0,i.jsx)(n.code,{children:"staticDirectories"})}),"\n",(0,i.jsx)(n.p,{children:"An array of paths, relative to the site's directory or absolute. Files under these paths will be copied to the build output as-is."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Type: ",(0,i.jsx)(n.code,{children:"string[]"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  staticDirectories: ['static'],\n};\n"})}),"\n",(0,i.jsx)(n.h3,{id:"headTags",children:(0,i.jsx)(n.code,{children:"headTags"})}),"\n",(0,i.jsxs)(n.p,{children:["An array of tags that will be inserted in the HTML ",(0,i.jsx)(n.code,{children:"<head>"}),". The values must be objects that contain two properties; ",(0,i.jsx)(n.code,{children:"tagName"})," and ",(0,i.jsx)(n.code,{children:"attributes"}),". ",(0,i.jsx)(n.code,{children:"tagName"})," must be a string that determines the tag being created; eg ",(0,i.jsx)(n.code,{children:'"link"'}),". ",(0,i.jsx)(n.code,{children:"attributes"})," must be an attribute-value map."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Type: ",(0,i.jsx)(n.code,{children:"{ tagName: string; attributes: Object; }[]"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  headTags: [\n    {\n      tagName: 'link',\n      attributes: {\n        rel: 'icon',\n        href: '/img/docusaurus.png',\n      },\n    },\n  ],\n};\n"})}),"\n",(0,i.jsxs)(n.p,{children:["This would become ",(0,i.jsx)(n.code,{children:'<link rel="icon" href="img/docusaurus.png" />'})," in the generated HTML."]}),"\n",(0,i.jsx)(n.h3,{id:"scripts",children:(0,i.jsx)(n.code,{children:"scripts"})}),"\n",(0,i.jsxs)(n.p,{children:["An array of scripts to load. The values can be either strings or plain objects of attribute-value maps. The ",(0,i.jsx)(n.code,{children:"<script>"})," tags will be inserted in the HTML ",(0,i.jsx)(n.code,{children:"<head>"}),". If you use a plain object, the only required attribute is ",(0,i.jsx)(n.code,{children:"src"}),", and any other attributes are permitted (each one should have boolean/string values)."]}),"\n",(0,i.jsxs)(n.p,{children:["Note that ",(0,i.jsx)(n.code,{children:"<script>"})," added here are render-blocking, so you might want to add ",(0,i.jsx)(n.code,{children:"async: true"}),"/",(0,i.jsx)(n.code,{children:"defer: true"})," to the objects."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Type: ",(0,i.jsx)(n.code,{children:"(string | Object)[]"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  scripts: [\n    // String format.\n    'https://docusaurus.io/script.js',\n    // Object format.\n    {\n      src: 'https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js',\n      async: true,\n    },\n  ],\n};\n"})}),"\n",(0,i.jsx)(n.h3,{id:"stylesheets",children:(0,i.jsx)(n.code,{children:"stylesheets"})}),"\n",(0,i.jsxs)(n.p,{children:["An array of CSS sources to load. The values can be either strings or plain objects of attribute-value maps. The ",(0,i.jsx)(n.code,{children:"<link>"})," tags will be inserted in the HTML ",(0,i.jsx)(n.code,{children:"<head>"}),". If you use an object, the only required attribute is ",(0,i.jsx)(n.code,{children:"href"}),", and any other attributes are permitted (each one should have boolean/string values)."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Type: ",(0,i.jsx)(n.code,{children:"(string | Object)[]"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  stylesheets: [\n    // String format.\n    'https://docusaurus.io/style.css',\n    // Object format.\n    {\n      href: 'http://mydomain.com/style.css',\n    },\n  ],\n};\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["By default, the ",(0,i.jsx)(n.code,{children:"<link>"})," tags will have ",(0,i.jsx)(n.code,{children:'rel="stylesheet"'}),", but you can explicitly add a custom ",(0,i.jsx)(n.code,{children:"rel"})," value to inject any kind of ",(0,i.jsx)(n.code,{children:"<link>"})," tag, not necessarily stylesheets."]})}),"\n",(0,i.jsx)(n.h3,{id:"clientModules",children:(0,i.jsx)(n.code,{children:"clientModules"})}),"\n",(0,i.jsxs)(n.p,{children:["An array of ",(0,i.jsx)(n.a,{href:"/zh-CN/docs/advanced/client#client-modules",children:"client modules"})," to load globally on your site."]}),"\n",(0,i.jsx)(n.p,{children:"Example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  clientModules: ['./mySiteGlobalJs.js', './mySiteGlobalCss.css'],\n};\n"})}),"\n",(0,i.jsx)(n.h3,{id:"ssrTemplate",children:(0,i.jsx)(n.code,{children:"ssrTemplate"})}),"\n",(0,i.jsxs)(n.p,{children:["An HTML template written in ",(0,i.jsx)(n.a,{href:"https://eta.js.org/docs/syntax#syntax-overview",children:"Eta's syntax"})," that will be used to render your application. This can be used to set custom attributes on the ",(0,i.jsx)(n.code,{children:"body"})," tags, additional ",(0,i.jsx)(n.code,{children:"meta"})," tags, customize the ",(0,i.jsx)(n.code,{children:"viewport"}),", etc. Please note that Docusaurus will rely on the template to be correctly structured in order to function properly, once you do customize it, you will have to make sure that your template is compliant with the requirements from upstream."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Type: ",(0,i.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:'export default {\n  ssrTemplate: `<!DOCTYPE html>\n<html <%~ it.htmlAttributes %>>\n  <head>\n    <meta charset="UTF-8">\n    <meta name="generator" content="Docusaurus v<%= it.version %>">\n    <% it.metaAttributes.forEach((metaAttribute) => { %>\n      <%~ metaAttribute %>\n    <% }); %>\n    <%~ it.headTags %>\n    <% it.stylesheets.forEach((stylesheet) => { %>\n      <link rel="stylesheet" href="<%= it.baseUrl %><%= stylesheet %>" />\n    <% }); %>\n    <% it.scripts.forEach((script) => { %>\n      <link rel="preload" href="<%= it.baseUrl %><%= script %>" as="script">\n    <% }); %>\n  </head>\n  <body <%~ it.bodyAttributes %>>\n    <%~ it.preBodyTags %>\n    <div id="__docusaurus">\n      <%~ it.appHtml %>\n    </div>\n    <% it.scripts.forEach((script) => { %>\n      <script src="<%= it.baseUrl %><%= script %>"><\/script>\n    <% }); %>\n    <%~ it.postBodyTags %>\n  </body>\n</html>`,\n};\n'})}),"\n",(0,i.jsx)(n.h3,{id:"titleDelimiter",children:(0,i.jsx)(n.code,{children:"titleDelimiter"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Type: ",(0,i.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Will be used as title delimiter in the generated ",(0,i.jsx)(n.code,{children:"<title>"})," tag."]}),"\n",(0,i.jsx)(n.p,{children:"Example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  titleDelimiter: '\ud83e\udd96', // Defaults to `|`\n};\n"})}),"\n",(0,i.jsx)(n.h3,{id:"baseUrlIssueBanner",children:(0,i.jsx)(n.code,{children:"baseUrlIssueBanner"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Type: ",(0,i.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["When enabled, will show a banner in case your site can't load its CSS or JavaScript files, which is a very common issue, often related to a wrong ",(0,i.jsx)(n.code,{children:"baseUrl"})," in site config."]}),"\n",(0,i.jsx)(n.p,{children:"Example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  baseUrlIssueBanner: true, // Defaults to `true`\n};\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"A sample base URL issue banner. The style is very raw since the stylesheets failed to load. The text says &quot;Your Docusaurus site did not load properly... Current configured baseUrl = / (default value); We suggest trying baseUrl = /build/",src:s(97704).Z+"",width:"1864",height:"1384"})}),"\n",(0,i.jsxs)(n.admonition,{type:"warning",children:[(0,i.jsx)(n.p,{children:"This banner needs to inline CSS / JS in case all asset loading fails due to wrong base URL."}),(0,i.jsxs)(n.p,{children:["If you have a strict ",(0,i.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP",children:"Content Security Policy"}),", you should rather disable it."]})]})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},71670:(e,n,s)=>{s.d(n,{Z:()=>o,a:()=>l});var i=s(27378);const r={},t=i.createContext(r);function l(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);