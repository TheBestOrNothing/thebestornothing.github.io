"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[42326],{68250:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>i,default:()=>M,frontMatter:()=>s,metadata:()=>c,toc:()=>h});var a=n(24246),o=n(71670);const s={description:"Connect to MetaMask based on chatGPT."},i="Connect to MetaMask-GPT",c={id:"metamaskGPT/connect",title:"Connect to MetaMask-GPT",description:"Connect to MetaMask based on chatGPT.",source:"@site/docs/metamaskGPT/connect.mdx",sourceDirName:"metamaskGPT",slug:"/metamaskGPT/connect",permalink:"/docs/next/metamaskGPT/connect",draft:!1,unlisted:!1,editUrl:"https://github.com/thebestornothing/thebestornothing.github.io/edit/main/website/docs/metamaskGPT/connect.mdx",tags:[],version:"current",lastUpdatedBy:"Gitcoins",lastUpdatedAt:1727019392,formattedLastUpdatedAt:"Sep 22, 2024",frontMatter:{description:"Connect to MetaMask based on chatGPT."},sidebar:"woofwoof",previous:{title:"How to",permalink:"/docs/next/category/how-to"},next:{title:"01 Introduction to Generative AI and LLMs",permalink:"/docs/next/metamaskGPT/metamaskGPT-LLMs"}},r={},h=[{value:"Connect to MetaMask-GPT using prompts",id:"connect-to-metamask-gpt-using-prompts",level:2},{value:"Flow of MetaMask-GPT connection",id:"flow-of-metamask-gpt-connection",level:2},{value:"MetaMask-GPT Authorization Actions",id:"metamask-gpt-authorization-actions",level:2},{value:"MetaMask code",id:"metamask-code",level:3},{value:"MetaMask token",id:"metamask-token",level:3}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",mermaid:"mermaid",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"connect-to-metamask-gpt",children:"Connect to MetaMask-GPT"}),"\n",(0,a.jsx)(t.p,{children:"You can connect to MetaMask-GPT by scanning MetaMask QRcode in chatGPT client and then connecting to your accounts."}),"\n",(0,a.jsx)(t.p,{children:"The MetaMask-GPT authorization code flow allows chatGPT client to obtain access tokens to access protected resources like getting selected accounts.\nIt starts with the prompts directing the user to the MetaMask-GPT authorization server, where the user authenticates and consents.\nThe MetaMask-GPT authorization server returns an authorization code to the client, which the client exchanges for an access token."}),"\n",(0,a.jsx)(t.h2,{id:"connect-to-metamask-gpt-using-prompts",children:"Connect to MetaMask-GPT using prompts"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",metastring:'title="Prompts"',children:'Goal: Establish a connection between the user\u2019s MetaMask account and the GPT client, retrieve the MetaMask authorization code and QR code, generate a MetaMask token, and access the selected account.\n1. Request MetaMask Authorization: request the MetaMask authorization code and MetaMask QR code from the GPT client to initiate the connection to MetaMask via the authorization server.\n2. Retrieve Authorization Code & QR Code: once access to the authorization server is successful, retrieve the MetaMask authorization code and generate the MetaMask QR code.\n3. Prompt for QR Code Scanning: ask the user: "Have you scanned the MetaMask QR code to connect your account?" \n4. Retrieve MetaMask Token: If the user responds Yes, proceed by exchanging the MetaMask authorization code for a MetaMask token.\n5. Get Selected Account: Retrieve the user\u2019s selected MetaMask account from the MetaMask mobile app.\n'})}),"\n",(0,a.jsx)(t.admonition,{type:"tip",children:(0,a.jsxs)(t.p,{children:["The prompts of connecting to MetaMask-GPT are improved by ",(0,a.jsx)(t.a,{href:"https://chatgpt.com/g/g-5XtVuRE8Y-prompt-engineer",children:"Prompt Engineer GPT"}),". This GPT let you become a pro prompt engineer, by learning and applying best prompt practices."]})}),"\n",(0,a.jsx)(t.h2,{id:"flow-of-metamask-gpt-connection",children:"Flow of MetaMask-GPT connection"}),"\n",(0,a.jsxs)(t.p,{children:["The MetaMask authorization code flow is described in the following. chatGPT client using theMetaMask authorization code flow acquire an access_token to include in requests to resources protected by the MetaMask-GPT identity platform (typically APIs). ",(0,a.jsx)(t.strong,{children:"The upcoming development\uff1a"})," chatGPT client can also request new ID and access tokens for previously authenticated entities by using a refresh mechanism. This diagram shows a high-level view of the authentication flow:"]}),"\n",(0,a.jsx)(t.mermaid,{value:"\nsequenceDiagram\n    autonumber\n    participant chatGPTClient as chatGPT client\n    participant MetaMask-GPTAuthServer as MetaMask-GPT authorization server\n    participant MetaMaskMobile as MetaMask Mobile\n\n    chatGPTClient->>MetaMask-GPTAuthServer: To request an authorization code using prompts\n    MetaMask-GPTAuthServer->>chatGPTClient: Return the code and QRcode\n    MetaMaskMobile->>MetaMaskMobile: Scan the QRcode \n    MetaMask-GPTAuthServer->>MetaMaskMobile: Request of connect accounts \n    MetaMaskMobile->>MetaMask-GPTAuthServer: Accounts connected\n    chatGPTClient->>MetaMask-GPTAuthServer: Request of access_token with authorization code\n    MetaMask-GPTAuthServer->>MetaMaskMobile: Request of sign for access_token \n    MetaMaskMobile->>MetaMask-GPTAuthServer: Return sign for access_token \n    MetaMask-GPTAuthServer->>chatGPTClient: Sign, account, expired time composed as access_token\n    note over chatGPTClient, MetaMaskMobile: Now that you have successfully acquired an access_token, you can use the token in requests to web APIs by including it in the Authorization header.\n"}),"\n",(0,a.jsx)(t.h2,{id:"metamask-gpt-authorization-actions",children:"MetaMask-GPT Authorization Actions"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",metastring:'title="Actions Schema"',children:'openapi: 3.1.0\ninfo:\n  title: MetaMask-GPT authorization server\n  description: The MetaMask-GPT authorization code flow allows chatGPT client to obtain access tokens to access protected resources like getting selected accounts. It starts with the prompts directing the user to the MetaMask-GPT authorization server, where the user authenticates and consents. The MetaMask-GPT authorization server returns an authorization code to the client, which the client exchanges for an access token.\n  version: 1.0.0\nservers:\n  - url: https://a588-34-170-192-71.ngrok-free.app\n    description: The goal of server is to establish a connection between the user\u2019s MetaMask account and the GPT client, retrieve the MetaMask authorization code and QR code, generate a MetaMask token, and access the selected account. First, Request the MetaMask authorization code and MetaMask QR code from the GPT client to initiate the connection to MetaMask via the authorization server. Second, Once access to the authorization server is successful, retrieve the MetaMask authorization code and generate the MetaMask QR code. Third, ask the user "Have you scanned the MetaMask QR code to connect your account?" Fourth, If the user responds Yes, proceed by exchanging the MetaMask authorization code for a MetaMask token. Fifth, Retrieve the user\u2019s selected MetaMask account from the MetaMask mobile app.\npaths:\n  //highlight-start\n  /metamask/mmCode:\n  //highlight-end\n    get:\n      operationId: getMetaMaskCode\n      summary: Retrieve the MetaMask authorization code and generate the MetaMask QR code to be exchanged for a MetaMask token.\n      responses:\n        "200":\n          description: The MetaMask authorization code and QR code generated to be exchanged for a MetaMask token.\n          content:\n            application/json:\n              schema:\n                type: object\n                properties:\n                  qrcodeUrl:\n                    type: string\n                  mmCode:\n                    type: string\n                  NoteForAssistant:\n                    type: string\n                example:\n                  mmToken: 03a2299f702d0a7a1244bdcc4799bcd3ad2c804dff9ea6c992f1386cc05eeb622f\n  //highlight-start\n  /metamask/mmToken:\n  //highlight-end\n    post:\n      operationId: getMetaMaskToken\n      summary: After users have scanned the MetaMask QR code to connect your account, exchanging the MetaMask authorization code for a MetaMask token\n      requestBody:\n        description: Exchanging the MetaMask authorization code for a MetaMask token.\n        required: true\n        content:\n          application/json:\n            schema:\n              type: object\n              required:\n                - mmCode\n                - duration\n              properties:\n                mmCode:\n                  type: string\n                  description: The MetaMask code to be exchanged for a MetaMask token.\n                duration:\n                  type: integer\n                  description: how long the MetaMask token will be alive in minute.\n                  minimum: 180\n      responses:\n        "200":\n          description: The MetaMask access tokens to access protected resources like getting selected accounts..\n          content:\n            application/json:\n              schema:\n                type: object\n                properties:\n                  mmToken:\n                    type: string\n  //highlight-start\n  /metamask/getSelectedAccount:\n  //highlight-end\n    post:\n      operationId: getSelectedAccount\n      summary: get selected accounts from MetaMask mobile after getting MetaMask access tokens\n      requestBody:\n        description: Use MetaMask access tokens to get selected accounts\n        required: true\n        content:\n          application/json:\n            schema:\n              type: object\n              properties:\n                mmToken:\n                  type: string\n                  description: The MetaMask access token is used to verify the identity of the user or client\n      responses:\n        "200":\n          description: selected account successfully retrieved from MetaMask mobile\n          content:\n            application/json:\n              schema:\n                type: object\n                properties:\n                  account:\n                    type: string\n                    description: selected account from MetaMask mobile\n        "400":\n          description: Invalid MetaMask code or request format\n        "500":\n          description: Server error\n'})}),"\n",(0,a.jsx)(t.h3,{id:"metamask-code",children:"MetaMask code"}),"\n",(0,a.jsx)(t.h3,{id:"metamask-token",children:"MetaMask token"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",metastring:'title="HTTP"',children:"GET /v1.0/me/messages\nHost: https://graph.gitcoins.io\nAuthorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik5HVEZ2ZEstZnl0aEV1Q...\n"})})]})}function M(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},71670:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>i});var a=n(27378);const o={},s=a.createContext(o);function i(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);