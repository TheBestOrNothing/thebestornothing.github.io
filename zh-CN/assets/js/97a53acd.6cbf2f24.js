"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[36785],{10014:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>d,toc:()=>r});var t=i(24246),o=i(71670);const a={sidebar_position:4},s="Static methods",d={id:"api/plugin-methods/static-methods",title:"Static methods",description:"Static methods are not part of the plugin instance\u2014they are attached to the constructor function. These methods are used to validate and normalize the plugin options and theme config, which are then used as constructor parameters to initialize the plugin instance.",source:"@site/versioned_docs/version-2.x/api/plugin-methods/static-methods.mdx",sourceDirName:"api/plugin-methods",slug:"/api/plugin-methods/static-methods",permalink:"/zh-CN/docs/2.x/api/plugin-methods/static-methods",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/docusaurus-v2/zh-CN",tags:[],version:"2.x",lastUpdatedBy:"Gitcoins",lastUpdatedAt:1700898384,formattedLastUpdatedAt:"2023\u5e7411\u670825\u65e5",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"api",previous:{title:"I18n lifecycles",permalink:"/zh-CN/docs/2.x/api/plugin-methods/i18n-lifecycles"},next:{title:"Plugins overview",permalink:"/zh-CN/docs/2.x/api/plugins"}},l={},r=[{value:"<code>validateOptions({options, validate})</code>",id:"validateOptions",level:2},{value:"<code>options</code>",id:"options",level:3},{value:"<code>validate</code>",id:"validate",level:3},{value:"<code>validateThemeConfig({themeConfig, validate})</code>",id:"validateThemeConfig",level:2},{value:"<code>themeConfig</code>",id:"themeConfig",level:3},{value:"<code>validate</code>",id:"validate-1",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"static-methods",children:"Static methods"}),"\n",(0,t.jsx)(n.p,{children:"Static methods are not part of the plugin instance\u2014they are attached to the constructor function. These methods are used to validate and normalize the plugin options and theme config, which are then used as constructor parameters to initialize the plugin instance."}),"\n",(0,t.jsx)(n.h2,{id:"validateOptions",children:(0,t.jsx)(n.code,{children:"validateOptions({options, validate})"})}),"\n",(0,t.jsx)(n.p,{children:"Returns validated and normalized options for the plugin. This method is called before the plugin is initialized. You must return the options since they will be passed to the plugin during initialization."}),"\n",(0,t.jsx)(n.h3,{id:"options",children:(0,t.jsx)(n.code,{children:"options"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"validateOptions"})," is called with ",(0,t.jsx)(n.code,{children:"options"})," passed to plugin for validation and normalization."]}),"\n",(0,t.jsx)(n.h3,{id:"validate",children:(0,t.jsx)(n.code,{children:"validate"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"validateOptions"})," is called with ",(0,t.jsx)(n.code,{children:"validate"})," function which takes a ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.a,{href:"https://www.npmjs.com/package/joi",children:"Joi"})})," schema and options as the arguments, returns validated and normalized options. ",(0,t.jsx)(n.code,{children:"validate"})," will automatically handle error and validation config."]}),"\n",(0,t.jsxs)(n.admonition,{type:"tip",children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://www.npmjs.com/package/joi",children:"Joi"})," is recommended for validation and normalization of options."]}),(0,t.jsxs)(n.p,{children:["To avoid mixing Joi versions, use ",(0,t.jsx)(n.code,{children:'const {Joi} = require("@docusaurus/utils-validation")'})]})]}),"\n",(0,t.jsxs)(n.p,{children:["If you don't use ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.a,{href:"https://www.npmjs.com/package/joi",children:"Joi"})})," for validation you can throw an Error in case of invalid options and return options in case of success."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="my-plugin/src/index.js"',children:"function myPlugin(context, options) {\n  return {\n    name: 'docusaurus-plugin',\n    // rest of methods\n  };\n}\n\n// highlight-start\nmyPlugin.validateOptions = ({options, validate}) => {\n  const validatedOptions = validate(myValidationSchema, options);\n  return validatedOptions;\n};\n// highlight-end\n\nmodule.exports = myPlugin;\n"})}),"\n",(0,t.jsx)(n.p,{children:"In TypeScript, you can also choose to export this as a separate named export."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:'title="my-plugin/src/index.ts"',children:"export default function (context, options) {\n  return {\n    name: 'docusaurus-plugin',\n    // rest of methods\n  };\n}\n\n// highlight-start\nexport function validateOptions({options, validate}) {\n  const validatedOptions = validate(myValidationSchema, options);\n  return validatedOptions;\n}\n// highlight-end\n"})}),"\n",(0,t.jsx)(n.h2,{id:"validateThemeConfig",children:(0,t.jsx)(n.code,{children:"validateThemeConfig({themeConfig, validate})"})}),"\n",(0,t.jsx)(n.p,{children:"Return validated and normalized configuration for the theme."}),"\n",(0,t.jsx)(n.h3,{id:"themeConfig",children:(0,t.jsx)(n.code,{children:"themeConfig"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"validateThemeConfig"})," is called with ",(0,t.jsx)(n.code,{children:"themeConfig"})," provided in ",(0,t.jsx)(n.code,{children:"docusaurus.config.js"})," for validation and normalization."]}),"\n",(0,t.jsx)(n.h3,{id:"validate-1",children:(0,t.jsx)(n.code,{children:"validate"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"validateThemeConfig"})," is called with ",(0,t.jsx)(n.code,{children:"validate"})," function which takes a ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.a,{href:"https://www.npmjs.com/package/joi",children:"Joi"})})," schema and ",(0,t.jsx)(n.code,{children:"themeConfig"})," as the arguments, returns validated and normalized options. ",(0,t.jsx)(n.code,{children:"validate"})," will automatically handle error and validation config."]}),"\n",(0,t.jsxs)(n.admonition,{type:"tip",children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://www.npmjs.com/package/joi",children:"Joi"})," is recommended for validation and normalization of theme config."]}),(0,t.jsxs)(n.p,{children:["To avoid mixing Joi versions, use ",(0,t.jsx)(n.code,{children:'const {Joi} = require("@docusaurus/utils-validation")'})]})]}),"\n",(0,t.jsxs)(n.p,{children:["If you don't use ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.a,{href:"https://www.npmjs.com/package/joi",children:"Joi"})})," for validation you can throw an Error in case of invalid options."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="my-theme/src/index.js"',children:"function myPlugin(context, options) {\n  return {\n    name: 'docusaurus-plugin',\n    // rest of methods\n  };\n}\n\n// highlight-start\nmyPlugin.validateThemeConfig = ({themeConfig, validate}) => {\n  const validatedThemeConfig = validate(myValidationSchema, options);\n  return validatedThemeConfig;\n};\n// highlight-end\n\nmodule.exports = validateThemeConfig;\n"})}),"\n",(0,t.jsx)(n.p,{children:"In TypeScript, you can also choose to export this as a separate named export."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:'title="my-theme/src/index.ts"',children:"export default function (context, options) {\n  return {\n    name: 'docusaurus-plugin',\n    // rest of methods\n  };\n}\n\n// highlight-start\nexport function validateThemeConfig({themeConfig, validate}) {\n  const validatedThemeConfig = validate(myValidationSchema, options);\n  return validatedThemeConfig;\n}\n// highlight-end\n"})})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},71670:(e,n,i)=>{i.d(n,{Z:()=>d,a:()=>s});var t=i(27378);const o={},a=t.createContext(o);function s(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);