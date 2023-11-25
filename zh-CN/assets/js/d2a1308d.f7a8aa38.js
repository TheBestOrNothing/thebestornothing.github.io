"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[26593],{23432:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var n=t(24246),a=t(71670);const r={slug:"/api/misc/@docusaurus/eslint-plugin/string-literal-i18n-messages"},i="string-literal-i18n-messages",l={id:"api/misc/eslint-plugin/string-literal-i18n-messages",title:"string-literal-i18n-messages",description:"Enforce translate APIs to be called on plain text labels.",source:"@site/docs/api/misc/eslint-plugin/string-literal-i18n-messages.mdx",sourceDirName:"api/misc/eslint-plugin",slug:"/api/misc/@docusaurus/eslint-plugin/string-literal-i18n-messages",permalink:"/zh-CN/docs/next/api/misc/@docusaurus/eslint-plugin/string-literal-i18n-messages",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/docusaurus-v2/zh-CN",tags:[],version:"current",lastUpdatedBy:"Gitcoins",lastUpdatedAt:1700898384,formattedLastUpdatedAt:"2023\u5e7411\u670825\u65e5",frontMatter:{slug:"/api/misc/@docusaurus/eslint-plugin/string-literal-i18n-messages"},sidebar:"api",previous:{title:"prefer-docusaurus-heading",permalink:"/zh-CN/docs/next/api/misc/@docusaurus/eslint-plugin/prefer-docusaurus-heading"},next:{title:"\ud83d\udce6 logger",permalink:"/zh-CN/docs/next/api/misc/@docusaurus/logger"}},o={},c=[{value:"Rule Details",id:"details",level:2},{value:"When Not To Use It",id:"when-not-to-use",level:2},{value:"Further Reading",id:"further-reading",level:2}];function u(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"string-literal-i18n-messages",children:"string-literal-i18n-messages"}),"\n",(0,n.jsx)(s.p,{children:"Enforce translate APIs to be called on plain text labels."}),"\n",(0,n.jsxs)(s.p,{children:["Docusaurus offers the ",(0,n.jsx)(s.a,{href:"/zh-CN/docs/next/cli#docusaurus-write-translations-sitedir",children:(0,n.jsx)(s.code,{children:"docusaurus write-translations"})})," API, which statically extracts the text labels marked as translatable. Dynamic values used in ",(0,n.jsx)(s.code,{children:"<Translate>"})," or ",(0,n.jsx)(s.code,{children:"translate()"})," calls will fail to be extracted. This rule will ensure that all translate calls are statically extractable."]}),"\n",(0,n.jsx)(s.h2,{id:"details",children:"Rule Details"}),"\n",(0,n.jsxs)(s.p,{children:["Examples of ",(0,n.jsx)(s.strong,{children:"incorrect"})," code for this rule:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-js",children:"const text = 'Some text to be translated'\n\n// Invalid <Translate> child\n<Translate>{text}</Translate>\n\n// Invalid message attribute\ntranslate({message: text})\n"})}),"\n",(0,n.jsxs)(s.p,{children:["Examples of ",(0,n.jsx)(s.strong,{children:"correct"})," code for this rule:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-js",children:"// Valid <Translate> child\n<Translate>Some text to be translated</Translate>\n\n// Valid message attribute\ntranslate({message: 'Some text to be translated'})\n\n// Valid <Translate> child using values object as prop\n<Translate values={{firstName: 'S\xe9bastien'}}>\n  {'Welcome, {firstName}! How are you?'}\n</Translate>\n\n// Valid message attribute using values object as second argument\ntranslate({message: 'The logo of site {siteName}'}, {siteName: 'Docusaurus'})\n"})}),"\n",(0,n.jsx)(s.h2,{id:"when-not-to-use",children:"When Not To Use It"}),"\n",(0,n.jsxs)(s.p,{children:["If you're not using the ",(0,n.jsx)(s.a,{href:"/zh-CN/docs/next/i18n/introduction",children:"i18n feature"}),", you can disable this rule."]}),"\n",(0,n.jsx)(s.h2,{id:"further-reading",children:"Further Reading"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://docusaurus.io/docs/docusaurus-core#translate",children:"https://docusaurus.io/docs/docusaurus-core#translate"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://docusaurus.io/docs/docusaurus-core#translate-imperative",children:"https://docusaurus.io/docs/docusaurus-core#translate-imperative"})}),"\n"]})]})}function d(e={}){const{wrapper:s}={...(0,a.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},71670:(e,s,t)=>{t.d(s,{Z:()=>l,a:()=>i});var n=t(27378);const a={},r=n.createContext(a);function i(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);