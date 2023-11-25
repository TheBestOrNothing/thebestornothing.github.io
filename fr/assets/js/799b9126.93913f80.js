"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[28109],{50888:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>a});var i=s(24246),t=s(71670);const o={mdx:{format:"md"},date:"2019-06-07T20:00"},l="2.0.0-alpha.19",r={permalink:"/fr/changelog/2.0.0-alpha.19",source:"@site/changelog/source/2.0.0-alpha.19.md",title:"2.0.0-alpha.19",description:"- Add a sensible default for browserslist config.",date:"2019-06-07T20:00:00.000Z",formattedDate:"7 juin 2019",tags:[],hasTruncateMarker:!0,authors:[],frontMatter:{mdx:{format:"md"},date:"2019-06-07T20:00"},unlisted:!1,prevItem:{title:"2.0.0-alpha.20",permalink:"/fr/changelog/2.0.0-alpha.20"},nextItem:{title:"V2 Changelog",permalink:"/fr/changelog/V2 Changelog"},listPageLink:"/fr/changelog/page/5"},c={authorsImageUrls:[]},a=[];function d(e){const n={code:"code",li:"li",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Add a sensible default for browserslist config."}),"\n",(0,i.jsxs)(n.li,{children:["UI\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Add sun and moon emoji to the dark mode toggle."}),"\n",(0,i.jsx)(n.li,{children:"Mobile responsive menu."}),"\n",(0,i.jsx)(n.li,{children:"Right table of contents for docs is now sticky."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Plugins\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Change plugin definitions from classes to functions. Refer to the new plugin docs."}),"\n",(0,i.jsx)(n.li,{children:"Implement Clients module API."}),"\n",(0,i.jsxs)(n.li,{children:["Change format within ",(0,i.jsx)(n.code,{children:"docusaurus.config.js"})," to be like presets."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Deps\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Infima CSS is now locked down to specific versions and not relying upon the CDN which reads from trunk."}),"\n",(0,i.jsx)(n.li,{children:"Update dependencies to latest"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"Customize/ Override infima CSS variables by passing options into the classic preset."}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"presets: [\n  [\n    '@docusaurus/preset-classic',\n    {\n      theme: {\n        customCss: require.resolve('./css/custom.css'),\n      },\n      ...\n    },\n  ],\n],\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Allow passing remark and rehype plugins to mdx-loader for docs and blog plugin"}),"\n",(0,i.jsx)(n.li,{children:"Move themes component of docs and blog to be part of theme-classic"}),"\n",(0,i.jsx)(n.li,{children:"Use composition style for prism syntax highlighting instead of doing it via rehype plugin"}),"\n",(0,i.jsxs)(n.li,{children:["Pass MDXProvider to docs and blog. To change the provided MDX components, run ",(0,i.jsx)(n.code,{children:"docusaurus swizzle @docusaurus/theme-classic MDXComponents"})]}),"\n",(0,i.jsx)(n.li,{children:"Add @docusaurus/theme-livecodeblock plugin"}),"\n",(0,i.jsx)(n.li,{children:"Better run-time code generation & webpack splitchunks optimization"}),"\n",(0,i.jsx)(n.li,{children:"Minify css for production build"}),"\n",(0,i.jsxs)(n.li,{children:["Fix weird scrolling problem when navigating to a route with a ",(0,i.jsx)(n.code,{children:"hash"})," location"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},71670:(e,n,s)=>{s.d(n,{Z:()=>r,a:()=>l});var i=s(27378);const t={},o=i.createContext(t);function l(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);