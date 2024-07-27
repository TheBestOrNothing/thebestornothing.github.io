"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[23432],{26919:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>h});var o=n(24246),i=n(71670);const s={description:"Create a rocketchat"},r="01 Introduction to Generative AI and LLMs",a={id:"generativeAI/generativeAI-oauth",title:"01 Introduction to Generative AI and LLMs",description:"Create a rocketchat",source:"@site/docs/generativeAI/generativeAI-oauth.mdx",sourceDirName:"generativeAI",slug:"/generativeAI/generativeAI-oauth",permalink:"/docs/next/generativeAI/generativeAI-oauth",draft:!1,unlisted:!1,editUrl:"https://github.com/vulnsystem/vulnsystem.github.io/edit/main/website/docs/generativeAI/generativeAI-oauth.mdx",tags:[],version:"current",lastUpdatedBy:"Gitcoins",lastUpdatedAt:1722099142,formattedLastUpdatedAt:"Jul 27, 2024",frontMatter:{description:"Create a rocketchat"},sidebar:"woofwoof",previous:{title:"Introduction",permalink:"/docs/next/"},next:{title:"RocketChat server developing",permalink:"/docs/next/generativeAI/generativeAI-developing"}},c={},h=[{value:"Key features of OAuth integration",id:"key-features-of-oauth-integration",level:2},{value:"Set up your OAuth method",id:"set-up-your-oauth-method",level:2},{value:"Add Custom OAuth",id:"add-custom-oauth",level:2}];function u(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"01-introduction-to-generative-ai-and-llms",children:"01 Introduction to Generative AI and LLMs"}),"\n",(0,o.jsxs)(t.admonition,{title:"Useful links",type:"info",children:[(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"https://microsoft.github.io/generative-ai-for-beginners/",children:(0,o.jsx)(t.code,{children:"Generative AI for Beginners: Learn the fundamentals of building Generative AI applications with our 18-lesson comprehensive course."})})}),(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"https://microsoft.github.io/AI-For-Beginners/",children:(0,o.jsx)(t.code,{children:"Artificial Intelligence for Beginners: Explore the world of AI with our 12-week."})})}),(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"https://microsoft.github.io/Data-Science-For-Beginners/",children:(0,o.jsx)(t.code,{children:"Data Science for Beginners: To offer a 10-week curriculum all about Data Science."})})})]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"RocketChat"}),": Every Conversation. One Platform.We use communication platforms on a daily basis to collaborate with colleagues, other companies, customers and communities. Most of them give you very little in terms of control and customizations; except Rocket.Chat."]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Open Authorization (OAuth)"})," is an authorization protocol that acts as an intermediary and facilitates secure access to third-party applications without sharing user credentials, thereby protecting specific resources. Instead of usernames and passwords, OAuth uses tokens, serving as temporary access keys. Rocket.Chat offers integrations with various providers such as Google, Apple, and GitHub. This provides flexibility and security so users can log in with any of these credentials."]}),"\n",(0,o.jsx)(t.h2,{id:"key-features-of-oauth-integration",children:"Key features of OAuth integration"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"Controlled access: With the authentication methods, you can decide the user data that the workspace can access."}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"Single Sign-On (SSO): Users can sign in to the workspace without creating new usernames and passwords."}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"Flexibility: You can choose the authentication methods you want to implement in your workspace from the list of available options. Furthermore, you can also set up your own custom OAuth methods in your Rocket.Chat workspace."}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"set-up-your-oauth-method",children:"Set up your OAuth method"}),"\n",(0,o.jsx)(t.p,{children:"Navigate to Administration > Workspace > Settings> OAuth. You can view a list of some OAuth methods that are supported by Rocket.Chat, including Google, Github, LinkedIn, etc. Select the method that meets your needs and provide the configuration parameters. Refer to the sub-sections where we go into the details of each method."}),"\n",(0,o.jsx)(t.h2,{id:"add-custom-oauth",children:"Add Custom OAuth"}),"\n",(0,o.jsx)(t.p,{children:"To add a custom OAuth:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"Click Add custom OAuth."}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"Give a unique name for your custom OAuth."}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"Click Add."}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["When configuring your OAuth Provider, you must include a Callback URL. For example, ",(0,o.jsx)(t.a,{href:"https://yourcompany.rocket.chat/_oauth/customoauth",children:"https://yourcompany.rocket.chat/_oauth/customoauth"})]}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},71670:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>r});var o=n(27378);const i={},s=o.createContext(i);function r(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);