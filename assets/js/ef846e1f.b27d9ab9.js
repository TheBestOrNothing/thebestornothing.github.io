(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[73037],{32350:(e,t,s)=>{"use strict";s.d(t,{Z:()=>r});const r=s.p+"assets/images/oss_logo-25c7e8934a28d0f23722c77adb6e7da4.png"},46768:(e,t,s)=>{"use strict";s.d(t,{Z:()=>g});var r=s(24246),n=(s(27378),s(66222)),o=s(36712);function i(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function a(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{},r=Object.keys(s);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(s).filter((function(e){return Object.getOwnPropertyDescriptor(s,e).enumerable})))),r.forEach((function(t){i(e,t,s[t])}))}return e}function c(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,r)}return s}(Object(t)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(t,s))})),e}function A(e,t){if(null==e)return{};var s,r,n=function(e,t){if(null==e)return{};var s,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)s=o[r],t.indexOf(s)>=0||(n[s]=e[s]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)s=o[r],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(n[s]=e[s])}return n}function l(e,t){switch(e){case"noicon":case"loaded":return null;case"loading":return(0,o.I)({id:"theme.IdealImageMessage.loading",message:"Loading...",description:"When the full-scale image is loading"});case"load":{const{pickedSrc:e}=t,{size:s}=e,r=s?` (${function(e){const t=["B","KB","MB","GB","TB"];if(0===e)return"n/a";const s=Math.floor(Math.log(e)/Math.log(1024));return 0===s?`${e} ${t[s]}`:`${(e/1024**s).toFixed(1)} ${t[s]}`}(s)})`:"";return(0,o.I)({id:"theme.IdealImageMessage.load",message:"Click to load{sizeMessage}",description:"To prompt users to load the full image. sizeMessage is a parenthesized size figure."},{sizeMessage:r})}case"offline":return(0,o.I)({id:"theme.IdealImageMessage.offline",message:"Your browser is offline. Image not loaded",description:"When the user is viewing an offline document"});case"error":{const{loadInfo:e}=t;return 404===e?(0,o.I)({id:"theme.IdealImageMessage.404error",message:"404. Image not found",description:"When the image is not found"}):(0,o.I)({id:"theme.IdealImageMessage.error",message:"Error. Click to reload",description:"When the image fails to load for unknown error"})}default:throw new Error(`Wrong icon: ${e}`)}}function g(e){const{img:t}=e,s=A(e,["img"]);return"string"==typeof t||"default"in t?(0,r.jsx)("img",a({src:"string"==typeof t?t:t.default},s)):(0,r.jsx)(n.Z,c(a({},s),{height:null!==(o=t.src.height)&&void 0!==o?o:100,width:null!==(i=t.src.width)&&void 0!==i?i:100,placeholder:{lqip:t.preSrc},src:t.src.src,srcSet:t.src.images.map((e=>c(a({},e),{src:e.path}))),getMessage:l}));var o,i}},83549:(e,t,s)=>{"use strict";s.d(t,{Z:()=>r});const r="data:image/png;base64,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"},7474:(e,t,s)=>{"use strict";s.r(t),s.d(t,{assets:()=>g,contentTitle:()=>A,default:()=>f,docusaurusRequire:()=>d,frontMatter:()=>c,metadata:()=>l,toc:()=>u});var r=s(24246),n=s(71670),o=s(46768),i=s(3915),a=s.n(i);const c={image:"./img/oss_logo.png"},A="Image tests",l={id:"tests/img-tests",title:"Image tests",description:"URL encoded image",source:"@site/_dogfooding/_docs tests/tests/img-tests.mdx",sourceDirName:"tests",slug:"/tests/img-tests",permalink:"/tests/docs/tests/img-tests",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"Gitcoins",lastUpdatedAt:1700898384,formattedLastUpdatedAt:"Nov 25, 2023",frontMatter:{image:"./img/oss_logo.png"},sidebar:"sidebar",previous:{title:"Doc Without Custom Props",permalink:"/tests/docs/tests/custom-props/doc-without-custom-props"},next:{title:"Visibility",permalink:"/tests/docs/tests/visibility/"}},g={image:s(32350).Z},u=[{value:"Regular images",id:"regular-images",level:2},{value:"Ideal images",id:"ideal-images",level:2}],d=s(3915);function m(e){const t={h1:"h1",h2:"h2",img:"img",p:"p",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"image-tests",children:"Image tests"}),"\n","\n","\n","\n","\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"URL encoded image",src:s(83549).Z+"",width:"256",height:"82"})}),"\n",(0,r.jsx)(t.h2,{id:"regular-images",children:"Regular images"}),"\n",(0,r.jsx)("img",{src:a()}),"\n",(0,r.jsx)("img",{src:d.default}),"\n",(0,r.jsx)(t.h2,{id:"ideal-images",children:"Ideal images"}),"\n",(0,r.jsx)(o.Z,{img:a()}),"\n",(0,r.jsx)(o.Z,{img:d})]})}function f(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},3915:(e,t,s)=>{e.exports={src:{srcSet:s.p+"assets/ideal-img/docusaurus.30c6ff4.200.png 200w",images:[{path:s.p+"assets/ideal-img/docusaurus.30c6ff4.200.png",width:200,height:200}],src:s.p+"assets/ideal-img/docusaurus.30c6ff4.200.png",toString:function(){return s.p+"assets/ideal-img/docusaurus.30c6ff4.200.png"},placeholder:void 0,width:200,height:200},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAsTAAALEwEAmpwYAAABm0lEQVR4nEXNP0hbQQDH8aM0RQoudlNwdZLg00IaffdCCDpoqlhSGzV3xxOz6FRq5w6BQkcVJIJYCFg6CILQQqGkgkjiu5fEf0QjBlETmyJaEKSm5n7yunT4bh9+P0IIIe2y73GgFG3u3h1rMJLGw6iMu6KIu+KQLgAPHENCu6FHdJOtepPhGz0VOaa2kB5rJNORemW3/RjcaV3rX27JP68ngfxEI7X5b/d8D559G1K+/BjC+28xeRBTbw4+4N3x7N/3p3NuErDNRn2TXfm2TOgWq1HJ1VLxq5KHhZp1WMB2oVgtnlbcxOtAya6MjIAhmfJaHHzPxMzZuFqoTCJx/vouUZrSiCfLmv7BrAC1uNItjhd7EXwsD+Ki5K9d3/Uh9nN4+v9iVkC3uPLbHJ/LIXzJdSO1ruOs0oscwj2ky+KdVPJLI2dCl0L5MgIjBYbh/VGspAO1i8texH5FZgmV7BOV3Lm9pZJVnbp2RDV4JKr2efBP+bof4ydskTxNR55402aHviE0J/+G0DxSaDOllxow0P79dtRNkrzuHtwg5HIaPwQEAAAAAElFTkSuQmCC"}},71670:(e,t,s)=>{"use strict";s.d(t,{Z:()=>a,a:()=>i});var r=s(27378);const n={},o=r.createContext(n);function i(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);