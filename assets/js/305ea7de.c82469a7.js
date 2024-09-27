"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[93796],{4522:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>r,toc:()=>h});var a=n(24246),s=n(71670);const o={description:"Connect to MetaMask based on chatGPT."},i="Connect to MetaMask-GPT",r={id:"metamaskGPT/connect",title:"Connect to MetaMask-GPT",description:"Connect to MetaMask based on chatGPT.",source:"@site/versioned_docs/version-3.0.1/metamaskGPT/connect.mdx",sourceDirName:"metamaskGPT",slug:"/metamaskGPT/connect",permalink:"/docs/metamaskGPT/connect",draft:!1,unlisted:!1,editUrl:"https://github.com/thebestornothing/thebestornothing.github.io/edit/main/website/docs/metamaskGPT/connect.mdx",tags:[],version:"3.0.1",frontMatter:{description:"Connect to MetaMask based on chatGPT."},sidebar:"woofwoof",previous:{title:"How to",permalink:"/docs/category/how-to"},next:{title:"01 Introduction to Generative AI and LLMs",permalink:"/docs/metamaskGPT/metamaskGPT-LLMs"}},c={},h=[{value:"Prompts to connect  MetaMask-GPT",id:"prompts-to-connect--metamask-gpt",level:2},{value:"The MetaMask authorization code flow",id:"the-metamask-authorization-code-flow",level:2},{value:"Request an authorization code",id:"request-an-authorization-code",level:3},{value:"Scan the QRcode",id:"scan-the-qrcode",level:3},{value:"Connect to the MetaMask wallet",id:"connect-to-the-metamask-wallet",level:3},{value:"Generate a MetaMask token",id:"generate-a-metamask-token",level:3},{value:"Access the resources",id:"access-the-resources",level:3},{value:"MetaMask-GPT Authorization Actions",id:"metamask-gpt-authorization-actions",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",mermaid:"mermaid",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"connect-to-metamask-gpt",children:"Connect to MetaMask-GPT"}),"\n",(0,a.jsx)(t.p,{children:"You can connect to MetaMask-GPT by following the MetaMask-GPT authorization code flow which retrieve the MetaMask authorization code and QR code, generate a MetaMask token, and access the resources.\nThe MetaMask-GPT authorization code flow allows chatGPT client to obtain access tokens to access protected resources like getting selected accounts.\nIt starts with the prompts directing the user to the MetaMask-GPT authorization server, where the user authenticates and consents.\nThe MetaMask-GPT authorization server returns an authorization code to the client, which the client exchanges for an access token."}),"\n",(0,a.jsx)(t.h2,{id:"prompts-to-connect--metamask-gpt",children:"Prompts to connect  MetaMask-GPT"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",metastring:'title="Prompts"',children:'Goal: Establish a connection between the user\u2019s MetaMask account and the GPT client, retrieve the MetaMask authorization code and QR code, generate a MetaMask token, and access the selected account.\n1. Request MetaMask Authorization: request the MetaMask authorization code and MetaMask QR code from the GPT client to initiate the connection to MetaMask via the authorization server.\n2. Retrieve Authorization Code & QR Code: once access to the authorization server is successful, retrieve the MetaMask authorization code and generate the MetaMask QR code.\n3. Prompt for QR Code Scanning: ask the user: "Have you scanned the MetaMask QR code to connect your account?" \n4. Retrieve MetaMask Token: If the user responds Yes, proceed by exchanging the MetaMask authorization code for a MetaMask token.\n5. Get Selected Account: Retrieve the user\u2019s selected MetaMask account from the MetaMask mobile app.\n'})}),"\n",(0,a.jsx)(t.admonition,{type:"tip",children:(0,a.jsxs)(t.p,{children:["The prompts of connecting to MetaMask-GPT are improved by ",(0,a.jsx)(t.a,{href:"https://chatgpt.com/g/g-5XtVuRE8Y-prompt-engineer",children:"Prompt Engineer GPT"}),". This GPT let you become a pro prompt engineer, by learning and applying best prompt practices."]})}),"\n",(0,a.jsx)(t.h2,{id:"the-metamask-authorization-code-flow",children:"The MetaMask authorization code flow"}),"\n",(0,a.jsxs)(t.p,{children:["The chatGPT client using the MetaMask authorization code flow acquire an access_token and resources protected by the MetaMask-GPT identity platform (typically APIs). The MetaMask Code(mmCode) is equivalent to an OAuth 2.0 authorization code, which is a short-lived token used to exchange for the more durable MetaMask Token(mmToken), similar to the access token in OAuth.",(0,a.jsx)(t.strong,{children:"The upcoming development\uff1a"})," chatGPT client can also request new ID and access tokens for previously authenticated entities by using a refresh mechanism. This diagram shows a high-level view of the authentication flow:"]}),"\n",(0,a.jsx)(t.mermaid,{value:"%%{\n  init: {\n    'sequence': {\n      'actorMargin': 100,\n      'width': 250,\n      'noteMargin': 15\n    }\n  }\n}%%\n\nsequenceDiagram\n    autonumber\n    participant chatGPTClient as chatGPT client\n    participant MetaMask-GPTAuthServer as MetaMask-GPT authorization server\n    participant MetaMaskMobile as MetaMask Mobile\n\n    chatGPTClient->>MetaMask-GPTAuthServer: Request an authorization code using prompts\n    MetaMask-GPTAuthServer->>chatGPTClient: Return the code and QRcode\n    MetaMaskMobile->>MetaMaskMobile: Scan the QRcode \n    MetaMask-GPTAuthServer->>MetaMaskMobile: Connect to the MetaMask wallet\n    MetaMaskMobile->>MetaMask-GPTAuthServer: Ethereum accounts in MetaMask Mobile\n    chatGPTClient->>MetaMask-GPTAuthServer: Request of access_token with authorization code\n    MetaMask-GPTAuthServer->>MetaMaskMobile: Request of sign for access_token \n    MetaMaskMobile->>MetaMask-GPTAuthServer: Return sign for access_token\n    MetaMask-GPTAuthServer->>chatGPTClient: Sign, account, expired time composed as access_token\n    note over chatGPTClient, MetaMaskMobile: Now that you have successfully acquired an access_token, you can use the token in requests to web APIs by including it in the Authorization header.\n"}),"\n",(0,a.jsx)(t.admonition,{type:"tip",children:(0,a.jsxs)(t.p,{children:["Mermaid Chart, text-based diagramming helps to simplify documentation processes - improving workflows and communication among teams. ",(0,a.jsx)(t.a,{href:"https://chatgpt.com/g/g-1IRFKwq4G-mermaid-chart-diagrams-and-charts",children:"Mermaid Chart GPT"})," will create a wide range of charts and diagrams from markdown-style code."]})}),"\n",(0,a.jsx)(t.h3,{id:"request-an-authorization-code",children:"Request an authorization code"}),"\n",(0,a.jsx)(t.p,{children:"Retrieve the MetaMask authorization code(mmCode) and generate the MetaMask QR code to be exchanged for a MetaMask token. mmCode has a limited validity time window, and if it's not exchanged for an mmToken within that time, it expires, much like how the authorization code in OAuth must be used within a limited period before becoming invalid. Once the mmCode is exchanged for the mmToken, the mmCode becomes immediately invalid, ensuring that it can't be reused, akin to the way OAuth invalidates the authorization code post-exchange."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",metastring:'title="HTTP request"',children:"GET /metamask/mmCode HTTP/1.1\nHost: a588-34-170-192-71.ngrok-free.app\nContent-Type: application/json\n"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",metastring:'title="HTTP successful response"',children:'HTTP/1.1 200 OK\nX-Powered-By: Express\nContent-Type: application/json; charset=utf-8\n{"qrcodeUrl":"https://a588-34-170-192-71.ngrok-free.app/03c6963d7db2a998bab719d3b643d52a639981f7347917e6b2f269cd05a1476dd6.png",\n"mmCode":"03c6963d7db2a998bab719d3b643d52a639981f7347917e6b2f269cd05a1476dd6",\n"NoteForAssistant":"display the image provided in the qrcodeUrl to the user"}\n'})}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"mmCode and QRcode Generation:"})}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"For each request, a new MetaMask SDK instance is created in the MetaMask-GPT authorization server, similar to how OAuth generates a unique authorization flow for each session."}),"\n",(0,a.jsx)(t.li,{children:"Each SDK instance has a distinct channelId and pubKey, which function similarly to OAuth's session identifiers ."}),"\n",(0,a.jsx)(t.li,{children:"In this case, the pubKey is used as the session ID for managing user state without exposing the channelId."}),"\n",(0,a.jsx)(t.li,{children:"The pubKey is used both as the session ID and the mmCode, much like how OAuth sessions might associate a user ID or client_id with a session."}),"\n",(0,a.jsx)(t.li,{children:"The QR code will be generated by the universalLink composed of MetaMask connect base URL, channelId and pubKey."}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"scan-the-qrcode",children:"Scan the QRcode"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Establishing a Secure Connection from Browser:"})," Scanning the QR code with your MetaMask mobile app initiates a secure communication channel between the dApp running in your browser and your MetaMask wallet on your mobile device. The QR code contains encoded information that helps link the session between the browser-based dApp and your mobile MetaMask wallet. After you san the QR code, the dApp running as MetaMask SDK instance and MetaMask Mobile will establish connection by ",(0,a.jsx)(t.a,{href:"https://docs.metamask.io/wallet/concepts/sdk/connections/#metamask-mobile-connection",children:"MetaMask socket.io server"}),". The dApp will sync the status whether MetaMask Mobile connect to one seleted accouts. This allows the dApp to recognize and interact with your mobile wallet securely."]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Establishing a Secure Connection from chatGPT client:"}),' Although the chatGPT client is runing in Browser, but it can not hold instances like MetaMask SDK. Now(25/09/2024) the chatGPT GPTs only have ability to get resources by API. Without MetaMask SDK instances in the chatGPT client, the client can not sync the status from MetaMask Mobile. So you must explicit instruction to chatGPT that you have sanned the QRcode. So in the prompts to connect MetaMask-GPT, GPT will ask users: "Have you scanned the MetaMask QR code to connect your account?"']}),"\n",(0,a.jsx)(t.h3,{id:"connect-to-the-metamask-wallet",children:"Connect to the MetaMask wallet"}),"\n",(0,a.jsx)(t.p,{children:"After one user scanning the QR code, the eth_requestAccounts is commonly called to connect their MetaMask wallet from the MetaMask SDK which in MetaMask-GPT authorization server. After that, other API methods can be used to interact with the Ethereum blockchain on behalf of the user. Here\u2019s a step-by-step breakdown of what happens when connect the MetaMask wallet and eth_requestAccounts is called:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Request Access:"})," The MetaMask SDK calls ",(0,a.jsx)(t.strong,{children:"eth_requestAccounts"})," to ask for access to the user's MetaMask accounts."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"MetaMask Prompt:"})," MetaMask Mobile will display a dialog to the user asking if you want to connect your wallet with your account(s)."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"User Approval:"})," The user must approve or reject the connection request. If they approve, the MetaMask SDK will be granted access to view the selected Ethereum address and send transactions from it."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Response:"})," The promise returned by eth_requestAccounts will resolve with an array of account addresses that the user approved. Typically, this will include the default Ethereum account in MetaMask Mobile."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"generate-a-metamask-token",children:"Generate a MetaMask token"}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.strong,{children:"MetaMask token(mmToken)"})," is composed of expiration time, account, and signature."]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"expireTime:"})," This variable is used to set the expiration time for the token. It is expected to be in a format that can be converted to a Date object and then to an ISO 8601 string. The code takes this expiration time and uses it as part of the token generation process, ensuring that the token has a clear validity period."]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"account:"})," The account parameter represents the user's account address that is involved in the signing process. It is essential for the eth_signTypedData_v4 method, as it specifies which account is signing the message. The account information is critical for verifying the token later and ensuring that it is tied to the correct user."]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"sign:"})," The sign variable captures the signature generated by the provider when the eth_signTypedData_v4 method is called. This signature is crucial for the integrity and authenticity of the generated token. In the final token (mmToken), the signature, along with the expiration time and account, creates a composite string that can be used for authentication or validation purposes."]}),"\n",(0,a.jsx)(t.admonition,{type:"info",children:(0,a.jsxs)(t.p,{children:["I\u2019ve tried to create mmToken to function like a JWT by ",(0,a.jsx)(t.a,{href:"https://github.com/panva/jose",children:"Panva Jose"}),", but the signatures generated by eth_signTypedData_v4 and personal_sign differ from a JWT's.\n",(0,a.jsx)(t.strong,{children:"eth_signTypedData_v4"})," have to set fixed format structure which can not convert and equal to header and payload format.\n",(0,a.jsx)(t.strong,{children:"personal_sign"})," will add some prefix when sign the string.\nSo if can not use JWT like Panva Jose, all the generation, verification and other powerful tools and extention will be no way to help.\nIf you have any good idea, please let me know. Thanks."]})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",metastring:'title="HTTP request"',children:'POST /metamask/mmToken HTTP/1.1\nHost: a588-34-170-192-71.ngrok-free.app\nUser-Agent: Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko); compatible; ChatGPT-User/1.0; +https://openai.com/bot\nContent-Type: application/json\n{"mmCode": "03c6963d7db2a998bab719d3b643d52a639981f7347917e6b2f269cd05a1476dd6", "duration": 10}\n'})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",metastring:'title="HTTP successful response"',children:'HTTP/1.1 200 OK\nX-Powered-By: Express\nContent-Type: application/json; charset=utf-8\n{"mmToken":"1727018256602.0x4477610799e7910f0e40f64da702aa9ffcf929ac.0xc682b4105848e0c50a0c8a02f96528b5cd8940322ca5b2080e13585f34640a596068fa69ff9241d33e2f1ee0752bb29498f28f66067a10594cfdf585861ffa661c",\n"NoteForAssistant":"use mmToken to access the resource in the provider"}\n'})}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"https://docs.metamask.io/wallet/how-to/sign-data/#use-eth_signtypeddata_v4",children:(0,a.jsx)(t.code,{children:"eth_signTypedData_v4"})})," provides the most human-readable signatures that are efficient to process on-chain. It follows the ",(0,a.jsx)(t.a,{href:"https://eips.ethereum.org/EIPS/eip-712",children:"EIP-712"})," specification to allow users to sign typed structured data that can be verified on-chain. An ",(0,a.jsx)(t.code,{children:"eth_signTypedData_v4"})," payload uses a standard format of encoding structs, but has a different format for the top-level struct that is signed, which includes some metadata about the verifying contract to provide replay protection of these signatures between different contract instances."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",metastring:'title="eth_signTypedData_v4 EIP-712 structure"',children:"const getMsgParams = (account, expireTime) => {\n        const dateObject = new Date(expireTime); \n        const isoString = dateObject.toISOString();\n\n        const msgParams = {\n            domain: {\n                chainId: '0x1',\n                name: 'MetaMask-GPT Connection',\n                verifyingContract: '0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC',\n                version: '1',\n            },\n            message: {\n                exp: isoString,\n                iss: account,\n            },\n            primaryType: 'Code',\n            types: {\n                EIP712Domain: [\n                    { name: 'name', type: 'string' },\n                    { name: 'version', type: 'string' },\n                    { name: 'chainId', type: 'uint256' },\n                    { name: 'verifyingContract', type: 'address' },\n                ],\n                Code: [\n                    { name: 'iss', type: 'string' },\n                    { name: 'exp', type: 'string' },\n                ],\n            },\n        };\n\n        return msgParams;\n    };\n"})}),"\n",(0,a.jsxs)(t.p,{children:["eth_signTypedData_v4 presents a data message for the user to sign in a structured and readable format and returns the signed response. At last, the ",(0,a.jsx)(t.strong,{children:"MetaMask token(mmToken)"})," is composed of expiration time, account, and signature."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",metastring:'title="mmToken generation"',children:"    async tokenGenerate(sdk, account, expireTime) {\n        const provider = sdk.getProvider();\n        let sign = null;\n\n        const dateObject = new Date(expireTime); \n        const isoString = dateObject.toISOString();\n        const msgParams = getMsgParams(account, expireTime);\n\n        try {\n            sign = await provider.request({\n                method: 'eth_signTypedData_v4',\n                params: [account, JSON.stringify(msgParams)],\n            });        \n        } catch (err) {\n            console.error(err);\n        }\n        const mmToken = `${expireTime}.${account}.${sign}`;\n        return mmToken;\n    }\n"})}),"\n",(0,a.jsx)(t.h3,{id:"access-the-resources",children:"Access the resources"}),"\n",(0,a.jsx)(t.p,{children:"In OAuth 2.0, obtaining an access token is a critical step that allows a client application to securely access protected resources on behalf of a user. The access token serves as proof that the client has been authorized, and it must be presented with each request to the resource server. This mechanism ensures that resource servers can enforce access controls and that user data remains secure.\nIn OAuth 2.0, the standard and recommended method for a client to send an access token when accessing protected resources is to include it in the Authorization header using the Bearer token scheme:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",metastring:'title="HTTP REQUEST: Token in OAuth 2.0 code flow"',children:"GET /resource HTTP/1.1\nHost: api.example.com\nAuthorization: Bearer {access_token}\n"})}),"\n",(0,a.jsx)(t.p,{children:"the ChatGPT action API currently does not support custom headers, including the Authorization header. This limitation means that you cannot send the access token in the header as per the standard OAuth 2.0 practice. As a result, you have to include the token in the POST body instead."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",metastring:'title="HTTP REQUEST: Token in MetaMask auth code flow"',children:'POST /metamask/getSelectedAccount HTTP/1.1\nHost: a588-34-170-192-71.ngrok-free.app\nUser-Agent: Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko); compatible; ChatGPT-User/1.0; +https://openai.com/bot\n{"mmToken": "1727018256602.0x4477610799e7910f0e40f64da702aa9ffcf929ac.0xc682b4105848e0c50a0c8a02f96528b5cd8940322ca5b2080e13585f34640a596068fa69ff9241d33e2f1ee0752bb29498f28f66067a10594cfdf585861ffa661c"}\n'})}),"\n",(0,a.jsx)(t.p,{children:"The resource server validates the access token to ensure it is authentic, unexpired, and has the necessary scopes (permissions) for the requested resource.\nValidation may involve checking the token's signature and expiration time."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",metastring:'title="mmToken Verification"',children:"const verifyMetaMaskToken = (req, res, next) => {\n    // Check for the token in the request body\n    const mmToken = req.body.mmToken; \n    if (mmToken && mmToken.split('.').length == 3) {\n        const parts = mmToken.split('.');\n        const expireTimeStr = parts[0];\n        const account = parts[1];\n        const sign = parts[2];\n        const expireTime = Number(expireTimeStr);\n\n        let timeout = false;\n        if (Date.now()  > expireTime) {\n            // Token has expired, terminate the session and remove from MetaMaskSDKManager\n            timeout = true;\n        }\n\n        const msgParams = getMsgParams(account, expireTime);\n        try {\n            const recoveredAddr = recoverTypedSignature({\n                data: msgParams,\n                signature: sign,\n                version: 'V4',\n            });\n\n            if (!timeout && toChecksumAddress(recoveredAddr) === toChecksumAddress(account)) {\n                req.account = account;\n                next();\n            } else {\n                if (timeout) {   // Token has expired\n                    console.log(`Token has expired`);\n                } else {\n                    console.log(`Failed to verify signer when comparing ${recoveredAddr} to ${from}`);\n                }\n                return res.redirect('/metamask/mmCode');\n            }\n        } catch (e) {\n            console.error(e);\n            return res.redirect('/metamask/mmCode');\n        }\n    } else {\n        // If no token is present, redirect to get a new token\n        return res.redirect('/metamask/mmCode');\n    }\n}\n"})}),"\n",(0,a.jsx)(t.p,{children:"The resource server processes the request and returns the requested data or performs the desired action."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",metastring:'title="HTTP successful response"',children:'HTTP/1.1 200 OK\nX-Powered-By: Express\nContent-Type: application/json; charset=utf-8\n{"account":"0x4477610799e7910f0e40f64da702aa9ffcf929ac"}\n'})}),"\n",(0,a.jsx)(t.admonition,{type:"info",children:(0,a.jsxs)(t.p,{children:["We recommend using ",(0,a.jsx)(t.a,{href:"https://github.com/MetaMask/eth-sig-util",children:(0,a.jsx)(t.code,{children:"eth-sig-util"})})," to generate and validate signatures. You can use ",(0,a.jsx)(t.a,{href:"https://github.com/danfinlay/eip712-codegen#readme",children:(0,a.jsx)(t.code,{children:"eip712-codegen"})})," to generate most of the Solidity required to verify these signatures on-chain. It currently doesn't generate the top-level struct verification code, so you must write that part manually. See\n",(0,a.jsx)(t.a,{href:"https://github.com/delegatable/delegatable-sol/blob/fb34bb259890417285f7185bc6500fb0ab8bf86f/contracts/Delegatable.sol#L80",children:"this example implementation"}),"."]})}),"\n",(0,a.jsx)(t.h2,{id:"metamask-gpt-authorization-actions",children:"MetaMask-GPT Authorization Actions"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",metastring:'title="Actions Schema"',children:'openapi: 3.1.0\ninfo:\n  title: MetaMask-GPT authorization server\n  description: The MetaMask-GPT authorization code flow allows chatGPT client to obtain access tokens to access protected resources like getting selected accounts. It starts with the prompts directing the user to the MetaMask-GPT authorization server, where the user authenticates and consents. The MetaMask-GPT authorization server returns an authorization code to the client, which the client exchanges for an access token.\n  version: 1.0.0\nservers:\n  - url: https://a588-34-170-192-71.ngrok-free.app\n    description: The goal of server is to establish a connection between the user\u2019s MetaMask account and the GPT client, retrieve the MetaMask authorization code and QR code, generate a MetaMask token, and access the selected account. First, Request the MetaMask authorization code and MetaMask QR code from the GPT client to initiate the connection to MetaMask via the authorization server. Second, Once access to the authorization server is successful, retrieve the MetaMask authorization code and generate the MetaMask QR code. Third, ask the user "Have you scanned the MetaMask QR code to connect your account?" Fourth, If the user responds Yes, proceed by exchanging the MetaMask authorization code for a MetaMask token. Fifth, Retrieve the user\u2019s selected MetaMask account from the MetaMask mobile app.\npaths:\n  //highlight-start\n  /metamask/mmCode:\n  //highlight-end\n    get:\n      operationId: getMetaMaskCode\n      summary: Retrieve the MetaMask authorization code and generate the MetaMask QR code to be exchanged for a MetaMask token.\n      responses:\n        "200":\n          description: The MetaMask authorization code and QR code generated to be exchanged for a MetaMask token.\n          content:\n            application/json:\n              schema:\n                type: object\n                properties:\n                  qrcodeUrl:\n                    type: string\n                  mmCode:\n                    type: string\n                  NoteForAssistant:\n                    type: string\n                example:\n                  mmToken: 03a2299f702d0a7a1244bdcc4799bcd3ad2c804dff9ea6c992f1386cc05eeb622f\n  //highlight-start\n  /metamask/mmToken:\n  //highlight-end\n    post:\n      operationId: getMetaMaskToken\n      summary: After users have scanned the MetaMask QR code to connect your account, exchanging the MetaMask authorization code for a MetaMask token\n      requestBody:\n        description: Exchanging the MetaMask authorization code for a MetaMask token.\n        required: true\n        content:\n          application/json:\n            schema:\n              type: object\n              required:\n                - mmCode\n                - duration\n              properties:\n                mmCode:\n                  type: string\n                  description: The MetaMask code to be exchanged for a MetaMask token.\n                duration:\n                  type: integer\n                  description: how long the MetaMask token will be alive in minute.\n                  minimum: 180\n      responses:\n        "200":\n          description: The MetaMask access tokens to access protected resources like getting selected accounts..\n          content:\n            application/json:\n              schema:\n                type: object\n                properties:\n                  mmToken:\n                    type: string\n  //highlight-start\n  /metamask/getSelectedAccount:\n  //highlight-end\n    post:\n      operationId: getSelectedAccount\n      summary: get selected accounts from MetaMask mobile after getting MetaMask access tokens\n      requestBody:\n        description: Use MetaMask access tokens to get selected accounts\n        required: true\n        content:\n          application/json:\n            schema:\n              type: object\n              properties:\n                mmToken:\n                  type: string\n                  description: The MetaMask access token is used to verify the identity of the user or client\n      responses:\n        "200":\n          description: selected account successfully retrieved from MetaMask mobile\n          content:\n            application/json:\n              schema:\n                type: object\n                properties:\n                  account:\n                    type: string\n                    description: selected account from MetaMask mobile\n        "400":\n          description: Invalid MetaMask code or request format\n        "500":\n          description: Server error\n'})})]})}function l(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},71670:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>i});var a=n(27378);const s={},o=a.createContext(s);function i(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);