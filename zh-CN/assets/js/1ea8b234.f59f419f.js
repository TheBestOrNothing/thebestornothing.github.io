(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[86116],{46768:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var r=n(24246),s=(n(27378),n(66222)),o=n(36712);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){i(e,t,n[t])}))}return e}function c(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function l(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}function d(e,t){switch(e){case"noicon":case"loaded":return null;case"loading":return(0,o.I)({id:"theme.IdealImageMessage.loading",message:"Loading...",description:"When the full-scale image is loading"});case"load":{const{pickedSrc:e}=t,{size:n}=e,r=n?` (${function(e){const t=["B","KB","MB","GB","TB"];if(0===e)return"n/a";const n=Math.floor(Math.log(e)/Math.log(1024));return 0===n?`${e} ${t[n]}`:`${(e/1024**n).toFixed(1)} ${t[n]}`}(n)})`:"";return(0,o.I)({id:"theme.IdealImageMessage.load",message:"Click to load{sizeMessage}",description:"To prompt users to load the full image. sizeMessage is a parenthesized size figure."},{sizeMessage:r})}case"offline":return(0,o.I)({id:"theme.IdealImageMessage.offline",message:"Your browser is offline. Image not loaded",description:"When the user is viewing an offline document"});case"error":{const{loadInfo:e}=t;return 404===e?(0,o.I)({id:"theme.IdealImageMessage.404error",message:"404. Image not found",description:"When the image is not found"}):(0,o.I)({id:"theme.IdealImageMessage.error",message:"Error. Click to reload",description:"When the image fails to load for unknown error"})}default:throw new Error(`Wrong icon: ${e}`)}}function u(e){const{img:t}=e,n=l(e,["img"]);return"string"==typeof t||"default"in t?(0,r.jsx)("img",a({src:"string"==typeof t?t:t.default},n)):(0,r.jsx)(s.Z,c(a({},n),{height:null!==(o=t.src.height)&&void 0!==o?o:100,width:null!==(i=t.src.width)&&void 0!==i?i:100,placeholder:{lqip:t.preSrc},src:t.src.src,srcSet:t.src.images.map((e=>c(a({},e),{src:e.path}))),getMessage:d}));var o,i}},78019:(e,t,n)=>{"use strict";n.d(t,{P:()=>p});var r=n(24246),s=(n(27378),n(40624)),o=n(36712),i=n(13415),a=n(46768),c=n(52615);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const d=[{name:"\ud83d\udce6 CodeSandbox",image:n(43376),url:"https://docusaurus.new/codesandbox",urlTS:"https://docusaurus.new/codesandbox-ts",description:(0,r.jsx)(o.Z,{id:"playground.codesandbox.description",children:"CodeSandbox is an online code editor and development environment that allows developers to create, share and collaborate on web development projects in a browser-based environment"})},{name:"\u26a1 StackBlitz \ud83c\udd95",image:n(14046),url:"https://docusaurus.new/stackblitz",urlTS:"https://docusaurus.new/stackblitz-ts",description:(0,r.jsx)(o.Z,{id:"playground.stackblitz.description",values:{webContainersLink:(0,r.jsx)(i.Z,{href:"https://blog.stackblitz.com/posts/introducing-webcontainers/",children:"WebContainers"})},children:"StackBlitz uses a novel {webContainersLink} technology to run Docusaurus directly in your browser."})}];function u({name:e,image:t,url:n,urlTS:l,description:d}){return(0,r.jsx)("div",{className:"col col--6 margin-bottom--lg",children:(0,r.jsxs)("div",{className:(0,s.Z)("card"),children:[(0,r.jsx)("div",{className:(0,s.Z)("card__image"),children:(0,r.jsx)(i.Z,{to:n,children:(0,r.jsx)(a.Z,{img:t,alt:`${e}'s image`})})}),(0,r.jsxs)("div",{className:"card__body",children:[(0,r.jsx)(c.Z,{as:"h3",children:e}),(0,r.jsx)("p",{children:d})]}),(0,r.jsxs)("div",{className:"card__footer",children:[(0,r.jsx)("div",{style:{textAlign:"center"},children:(0,r.jsx)("b",{children:(0,r.jsx)(o.Z,{id:"playground.tryItButton",children:"Try it now!"})})}),(0,r.jsxs)("div",{className:"button-group button-group--block",children:[(0,r.jsx)(i.Z,{className:"button button--secondary",to:n,children:"JavaScript"}),(0,r.jsx)(i.Z,{className:"button button--secondary",to:l,children:"TypeScript"})]})]})]})})}function p(){return(0,r.jsx)("div",{className:"row",children:d.map((e=>(0,r.jsx)(u,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){l(e,t,n[t])}))}return e}({},e),e.name)))})}},9418:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var r=n(24246),s=n(71670),o=n(78019);const i={},a="REST APIs",c={id:"restapis",title:"REST APIs",description:"Playgrounds allow you to run Docusaurus in your browser, without installing anything!",source:"@site/versioned_docs/version-3.0.1/restapis.mdx",sourceDirName:".",slug:"/restapis",permalink:"/zh-CN/docs/restapis",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/docusaurus-v2/zh-CN",tags:[],version:"3.0.1",frontMatter:{}},l={},d=[];function u(e){const t={a:"a",admonition:"admonition",h1:"h1",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"rest-apis",children:"REST APIs"}),"\n",(0,r.jsxs)(t.p,{children:["Playgrounds allow you to run Docusaurus ",(0,r.jsx)(t.strong,{children:"in your browser, without installing anything"}),"!"]}),"\n",(0,r.jsx)(t.p,{children:"They are mostly useful for:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Testing Docusaurus"}),"\n",(0,r.jsx)(t.li,{children:"Reporting bugs"}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["Use ",(0,r.jsx)(t.a,{href:"https://docusaurus.new",children:"docusaurus.new"})," as an easy-to-remember shortcut."]}),"\n",(0,r.jsx)(t.p,{children:"Choose one of the available options below."}),"\n","\n","\n",(0,r.jsx)(o.P,{}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsxs)(t.p,{children:["For convenience, we'll remember your choice next time you visit ",(0,r.jsx)(t.a,{href:"https://docusaurus.new",children:"docusaurus.new"}),"."]})})]})}function p(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},43376:(e,t,n)=>{e.exports={src:{srcSet:n.p+"assets/ideal-img/codesandbox.7906bc4.640.png 640w,"+n.p+"assets/ideal-img/codesandbox.36984ff.1030.png 1030w",images:[{path:n.p+"assets/ideal-img/codesandbox.7906bc4.640.png",width:640,height:355},{path:n.p+"assets/ideal-img/codesandbox.36984ff.1030.png",width:1030,height:571}],src:n.p+"assets/ideal-img/codesandbox.7906bc4.640.png",toString:function(){return n.p+"assets/ideal-img/codesandbox.7906bc4.640.png"},placeholder:void 0,width:640,height:355},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAYAAAD68A/GAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA7ElEQVR4nB3Ov0rDQACA8ZszxVrvLpfYu0goUWtQwT+IOtRasrg6WQdbhL5BHZwEoaVIaXHpC6irxc3JxUVfw01wcHD7pB1+07d8orKasb1zQLmcUrIxcZwQmEUK85IFrVGBQQcRwtolppIkIQxDlFJsrm+QHx1Tq1bJa3UO9/YRWqtZTNMVXOwozhXI26dcTYbcPo+5ntzTGnQQURQhpaRkLYExSL+IPMnY6p9zNu5QH7WRzV2Ec47QGNJ0mcpahlYBN4MuP/zx9vnB1+83L++vCN/3mVJKzxY8z+Oy2eLp4ZFG44Lh3Yh+t8c/jL9rZrM0xfsAAAAASUVORK5CYII="}},14046:(e,t,n)=>{e.exports={src:{srcSet:n.p+"assets/ideal-img/stackblitz.4ee9b70.640.png 640w,"+n.p+"assets/ideal-img/stackblitz.8ebfdbb.1030.png 1030w",images:[{path:n.p+"assets/ideal-img/stackblitz.4ee9b70.640.png",width:640,height:356},{path:n.p+"assets/ideal-img/stackblitz.8ebfdbb.1030.png",width:1030,height:572}],src:n.p+"assets/ideal-img/stackblitz.4ee9b70.640.png",toString:function(){return n.p+"assets/ideal-img/stackblitz.4ee9b70.640.png"},placeholder:void 0,width:640,height:356},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAYAAAD68A/GAAAACXBIWXMAABYlAAAWJQFJUiTwAAAA2UlEQVR4nB3LvUrDUABA4fsAovbPNs29yb25adKEWlJB8C0rqFOx+BD+ILjbvTiYDiWpUx2zWAIeMcPHmY5I05SLyysm0wxjR+ggbLiej/INvrZ42iKkjvBsgiMDXC+k5/hE4ykvb6+8r1as1x88Pj0jBjJABhP6KmbgWlpdySjJ2G4Ldl876rqmLArEUIV44TnSjFE6pusYonRGvtlQliU/hwOfeY5QJsbYFOlHOCqk3ZNEScZ+/01VVfxCM4jTdp9/J62zpkfHHYZSc3N7x2Jxz3L5wHx+zR8O9nujOJsFvAAAAABJRU5ErkJggg=="}},71670:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a,a:()=>i});var r=n(27378);const s={},o=r.createContext(s);function i(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);