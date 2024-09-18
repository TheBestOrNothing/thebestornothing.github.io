"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[36666],{18986:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>l,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var a=t(24246),i=t(71670);const r={description:"Rocketchat with MetaMask Identity Authorization Platform"},s="Rocketchat with MetaMask Code flow",c={id:"metamaskGPT/metamaskGPT-oauth",title:"Rocketchat with MetaMask Code flow",description:"Rocketchat with MetaMask Identity Authorization Platform",source:"@site/versioned_docs/version-3.0.1/metamaskGPT/metamaskGPT-oauth.mdx",sourceDirName:"metamaskGPT",slug:"/metamaskGPT/metamaskGPT-oauth",permalink:"/docs/metamaskGPT/metamaskGPT-oauth",draft:!1,unlisted:!1,editUrl:"https://github.com/thebestornothing/thebestornothing.github.io/edit/main/website/docs/metamaskGPT/metamaskGPT-oauth.mdx",tags:[],version:"3.0.1",frontMatter:{description:"Rocketchat with MetaMask Identity Authorization Platform"},sidebar:"woofwoof",previous:{title:"Rocketchat with Microsoft Oauth2 flow",permalink:"/docs/metamaskGPT/metamaskGPT-microsoft-oauth"},next:{title:"Debugging with Ngrok",permalink:"/docs/metamaskGPT/metamaskGPT-with-ngrok"}},o={},d=[{value:"RocketChat with MetaMask Oauth2 overview",id:"rocketchat-with-metamask-oauth2-overview",level:2},{value:"RocketChatServer MetaMask Oauth configuration",id:"rocketchatserver-metamask-oauth-configuration",level:2},{value:"Request MetaMask Login page",id:"request-metamask-login-page",level:2},{value:"Create MetaMask provider and pending to connect",id:"create-metamask-provider-and-pending-to-connect",level:3},{value:"Create MetaMask code",id:"create-metamask-code",level:3},{value:"Redirect to redirect_uri with MetaMask code and state",id:"redirect-to-redirect_uri-with-metamask-code-and-state",level:2},{value:"Return credentialToken and credentialSecret",id:"return-credentialtoken-and-credentialsecret",level:2},{value:"Request to verify the MetaMask code",id:"request-to-verify-the-metamask-code",level:2},{value:"Return an sign as access_token and a refresh_token",id:"return-an-sign-as-access_token-and-a-refresh_token",level:2},{value:"Call web API with access_token in authorization header",id:"call-web-api-with-access_token-in-authorization-header",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",mermaid:"mermaid",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"rocketchat-with-metamask-code-flow",children:"Rocketchat with MetaMask Code flow"}),"\n",(0,a.jsx)(n.h2,{id:"rocketchat-with-metamask-oauth2-overview",children:"RocketChat with MetaMask Oauth2 overview"}),"\n",(0,a.jsx)(n.mermaid,{value:"\n%%{\n  init: {\n    'sequence': {\n      'actorMargin': 100,\n      'width': 250,\n      'noteMargin': 15\n    }\n  }\n}%%\n\n\nsequenceDiagram\n  participant RocketChatClient as RocketChat Client\n  participant Oauth2Authorize as Oauth2 Authorize\n  participant Oauth2Token as Oauth2 Token\n  participant ResourceServer as Identity\n  participant RocketChatServer as RocketChat Server\n\n  Note right of RocketChatServer: RocketChatServer Oauth configuration\n  RocketChatClient ->> Oauth2Authorize: Request MetaMask Login page \n  RocketChatClient ->> RocketChatServer: Redirect to redirect_uri with MetaMask code and state\n  RocketChatServer --\x3e> RocketChatClient: Return credentialToken and credentialSecret\n  RocketChatServer ->> Oauth2Token: Request to verify the MetaMask code\n  Oauth2Token --\x3e> RocketChatServer: Return an sign as access_token and a refresh_token\n  RocketChatServer ->> ResourceServer: Call web API with access_token in authorization header\n  ResourceServer --\x3e> RocketChatServer: Return identity data to RocketChat server\n\n  box transparent Identity Authorization Platform\n  participant Oauth2Authorize\n  participant Oauth2Token\n  participant ResourceServer\n  end"}),"\n",(0,a.jsx)(n.h2,{id:"rocketchatserver-metamask-oauth-configuration",children:"RocketChatServer MetaMask Oauth configuration"}),"\n",(0,a.jsx)(n.p,{children:"To create a custom authentication method in your Rocket.Chat workspace: Navigate to Administration > Workspace > Settings > OAuth."}),"\n",(0,a.jsx)(n.p,{children:"OAuth server configuration fields:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Enable: Set to true to enable this OAuth integration"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["URL: ",(0,a.jsx)(n.a,{href:"https://acb3-34-96-147-151.ngrok-free.app",children:"https://acb3-34-96-147-151.ngrok-free.app"})]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Token Path: /metamask/token"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Token Sent Via: Select Header"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Identity Token Sent Via: Select Header"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Identity Path: /metamask/userinfo"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Authorize Path: /metamask/authorize"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Scope: openid profile email"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Param Name for access token: access_token"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Id: null"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Secret: null"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Login style: Select Redirect."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Button Text: MetaMask."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Key Field: select Email"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Username field: account"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Email field: email"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Name field: account"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Merge Users: True"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Merge Users From Distinct Services: True"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Show Button in Login page: True"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Click Save changes."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"After saving, you will find the MetaMask Oauth button on the login and signup page."}),"\n",(0,a.jsx)(n.p,{children:"Simply sign in to your Office account to authenticate!"}),"\n",(0,a.jsx)(n.h2,{id:"request-metamask-login-page",children:"Request MetaMask Login page"}),"\n",(0,a.jsx)(n.p,{children:"The following page will be loaded according to the RocketChatServer MetaMask Oauth configuration"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"<script src=\"https://c0f4f41c-2f55-4863-921b-sdk-docs.github.io/cdn/metamask-sdk.js\"><\/script>\n    \n<script>\n  //highlight-start\n  const sdk = new MetaMaskSDK.MetaMaskSDK({\n    dappMetadata: {\n      name: \"RocketChat with MetaMask Oauth\",\n    },\n    logging: {\n      sdk: false,\n    }\n  });\n  //highlight-end\n<\/script>\n<script>\n  let provider;\n\n  function redirectTo(timestamp, account, sign) {\n    const url = new URL(window.location.href);\n    // Get the query parameters\n    const params = new URLSearchParams(url.search);\n    // Iterate through all parameters\n    params.forEach((value, name) => {\n        console.log(name, value);\n    });\n    //highlight-start\n    const code = [timestamp, account, sign].join('.');\n    const redirectUrl = `${params.get('redirect_uri')}?code=${code}&state=${encodeURIComponent(params.get('state'))}`;\n    //highlight-end\n    console.log(redirectUrl)\n    //highlight-start\n    window.location.href = redirectUrl;\n    //highlight-end\n  }\n\n\n  /**\n   * Sign Typed Data V4\n   */\n   async function generateCode () {\n    const accounts = await sdk.connect();\n    provider = sdk.getProvider();\n\n    const msgParams = {\n      domain: {\n        chainId: '0x1',\n        name: 'RocketChat Login',\n        verifyingContract: '0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC',\n        version: '1',\n      },\n      message: {\n        account: '0xABCD',\n        timestamp: 0,\n      },\n      primaryType: 'Code',\n      types: {\n        EIP712Domain: [\n          { name: 'name', type: 'string' },\n          { name: 'version', type: 'string' },\n          { name: 'chainId', type: 'uint256' },\n          { name: 'verifyingContract', type: 'address' },\n        ],\n        Code: [\n          { name: 'account', type: 'string' },\n          { name: 'timestamp', type: 'uint256' },\n        ],\n      },\n    };\n\n    try {\n      //highlight-start\n      const from = accounts[0];\n      msgParams.message.account = from;\n      msgParams.message.timestamp = Math.floor(Date.now()/1000);\n      const sign = await provider.request({\n        method: 'eth_signTypedData_v4',\n        params: [from, JSON.stringify(msgParams)],\n      });\n      console.log(sign);\n      //highlight-end\n\n      redirectTo(msgParams.message.timestamp, from, sign);\n\n    } catch (err) {\n      console.error(err);\n    }\n  };\n\n  window.onload = generateCode;\n<\/script>\n\n"})}),"\n",(0,a.jsx)(n.h3,{id:"create-metamask-provider-and-pending-to-connect",children:"Create MetaMask provider and pending to connect"}),"\n",(0,a.jsx)(n.p,{children:"MetaMask SDK is a library that provides a reliable, secure, and seamless connection from your dapp to the MetaMask browser extension and MetaMask Mobile. You can install the SDK in existing dapps, and call any Wallet API methods from your dapp.  When connect function execution, the connection RPC link will be generated, the user will connect with extension and mobile app. After connected with RPC link, MetaMask SDK will generate one provider, whcih will used to sign the data."}),"\n",(0,a.jsx)(n.h3,{id:"create-metamask-code",children:"Create MetaMask code"}),"\n",(0,a.jsx)(n.p,{children:"MetaMask code is composed by timestamp, account and sign, which is generated by Metamask client when user login with MetaMask browser plugin. So the MetaMask code is different from the Oauth2 auth code which generated by Oauth2 Identity Authorization Platform.\nMetaMask codes are typically designed for single use. A short lifespan ensures that if an attacker attempts to use a captured code multiple times, it will quickly become invalid."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="MetaMask Code"',children:"code=1721629896.0x251aeaf02504f244f268d9886bee324e5cbb2bd6.0xef77ada92489d08215e1888ef663ba4631eece2460597b1ac44dd0b41f021a0e2dddce190b425e9b7e730fca4a3f807c939ff19c6ba668d330ef71440f4cbbcd1b\n"})}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"timestamp = 1721629896"}),"\n",(0,a.jsx)(n.li,{children:"account = 0x251aeaf02504f244f268d9886bee324e5cbb2bd6"}),"\n",(0,a.jsx)(n.li,{children:"sign = 0xef77ada92489d08215e1888ef663ba4631eece2460597b1ac44dd0b41f021a0e2dddce190b425e9b7e730fca4a3f807c939ff19c6ba668d330ef71440f4cbbcd1b"}),"\n",(0,a.jsx)(n.li,{children:"account == recoverTypedSignature(timestamp, sign)"}),"\n"]})}),"\n",(0,a.jsx)(n.h2,{id:"redirect-to-redirect_uri-with-metamask-code-and-state",children:"Redirect to redirect_uri with MetaMask code and state"}),"\n",(0,a.jsx)(n.p,{children:"The function redirectTo constructs a URL with specific query parameters and redirects the browser to this URL.\nCreate a URL object from the current window location. Retrive the state and redirect_uri from the current window location.\nConstruct the code by joining timestamp, account, and sign with a period (.).\nBuild the redirectUrl using the redirect_uri and state parameters from the original URL, appending the code as a query parameter.\nRedirect the browser to the constructed URL."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="Current window location"',children:"Get /metamask/authorize?<br>\nclient_id=6c66e5cda6c13bc80f7c8c24e00ff5d4077e1da97eca78e53755177c5591b220&<br>\nredirect_uri=https%3A%2F%2F212c-34-92-204-228.ngrok-free.app%2F_oauth%2Fmeta&<br>\nresponse_type=code&<br>\nstate=eyJsb2dpblN0eWxlIjoicmVkaXJlY3QiLCJjcmVkZW50aWFsVG9rZW4iOiIwOEh6LTdHbmdscEhoOUJsYng4WHZXLThfTGhZUENXUXhQVnBWS0lmSHI5IiwiaXNDb3Jkb3ZhIjpmYWxzZSwicmVkaXJlY3RVcmwiOiJodHRwczovLzIxMmMtMzQtOTItMjA0LTIyOC5uZ3Jvay1mcmVlLmFwcC9ob21lIn0%3D&<br>\nscope=openid%20profile%20email\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="New redirectUrl"',children:"const redirectUrl = `${params.get('redirect_uri')}?code=${code}&state=${encodeURIComponent(params.get('state'))}`;\n\nhttps%3A%2F%2F212c-34-92-204-228.ngrok-free.app%2F_oauth%2Fmeta/?<br>\ncode=1721629896.0x251aeaf02504f244f268d9886bee324e5cbb2bd6.0xef77ada92489d08215e1888ef663ba4631eece2460597b1ac44dd0b41f021a0e2dddce190b425e9b7e730fca4a3f807c939ff19c6ba668d330ef71440f4cbbcd1b<br>\nstate=eyJsb2dpblN0eWxlIjoicmVkaXJlY3QiLCJjcmVkZW50aWFsVG9rZW4iOiIwOEh6LTdHbmdscEhoOUJsYng4WHZXLThfTGhZUENXUXhQVnBWS0lmSHI5IiwiaXNDb3Jkb3ZhIjpmYWxzZSwicmVkaXJlY3RVcmwiOiJodHRwczovLzIxMmMtMzQtOTItMjA0LTIyOC5uZ3Jvay1mcmVlLmFwcC9ob21lIn0%3D<br>\n\n"})}),"\n",(0,a.jsx)(n.h2,{id:"return-credentialtoken-and-credentialsecret",children:"Return credentialToken and credentialSecret"}),"\n",(0,a.jsxs)(n.p,{children:["This step is same as ",(0,a.jsx)(n.a,{href:"https://vulnsystem.github.io/docs/rocketchat/rocketchat-oauth-process#return-credentialtoken-and-credentialsecret",children:"RocketChat Oauth flow"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"request-to-verify-the-metamask-code",children:"Request to verify the MetaMask code"}),"\n",(0,a.jsx)(n.p,{children:"All the info of timestamp, account, sign are generated in the RocketChat client side by MetaMask, acctually it is not necessary to send the code to the Oauth server, We're just simulating Oauth2 process by Metamask. Because all the auth and identity info have be gererated when connect to the MetamMeask in the client side. The client have all the info for user login, which include account, sign, timestamp, and other user infomation. The MetaMask code in the https protocal will be protected in transfer from RocketChat server to Oauth server. After Oauth server get the code then recoverTypedSignature to check the if(account == recoverTypedSignature(timestamp, sign)) , if successfully verified, it means the person who have the account have been sign the timestamp and allow to access/login to the RocketChat."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'tittle="Verify the MetaMask code"',children:"personalSignVerify(timestamp, account, sign) {\n        const time = BigInt(timestamp);\n        const msgParams = {\n          domain: {\n            chainId: '0x1',\n            name: 'RocketChat Login',\n            verifyingContract: '0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC',\n            version: '1',\n          },\n          message: {\n            account: account,\n            timestamp: time,\n          },\n          primaryType: 'Code',\n          types: {\n            EIP712Domain: [\n              { name: 'name', type: 'string' },\n              { name: 'version', type: 'string' },\n              { name: 'chainId', type: 'uint256' },\n              { name: 'verifyingContract', type: 'address' },\n            ],\n            Code: [\n              { name: 'account', type: 'string' },\n              { name: 'timestamp', type: 'uint256' },\n            ],\n          },\n        };\n\n        try {\n            const from = account;\n            //highlight-start\n            const recoveredAddr = recoverTypedSignature({\n                data: msgParams,\n                signature: sign,\n                version: 'V4',\n            });\n            //highlight-end\n\n            if (toChecksumAddress(recoveredAddr) === toChecksumAddress(from)) {\n                console.log(`Successfully verified signer as ${recoveredAddr}`);\n                return true;\n            } else {\n                console.log(\n                `Failed to verify signer when comparing ${recoveredAddr} to ${from}`,\n                );\n                return false;\n            }\n        } catch (err) {\n            console.error(err);\n            return false;\n        }\n    };\n\n\n"})}),"\n",(0,a.jsx)(n.h2,{id:"return-an-sign-as-access_token-and-a-refresh_token",children:"Return an sign as access_token and a refresh_token"}),"\n",(0,a.jsx)(n.p,{children:"if MetaMask code successfully verified, the user info will be stored in one Map structure named users. And return the sign as access_token and refresh_token, it is ready for next step to retrive the identity info."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'tittle="Return the sign as token"',children:"    token(options = {}) {\n        return (req, res, next) => {\n            const code = req.body.code;\n            const codeParts = code.split('.');\n            const timestamp = codeParts[0];\n            const account = codeParts[1];\n            const sign = codeParts[2];\n            if(this.personalSignVerify(timestamp, account, sign)){\n                const tokenResponse = {\n                    token_type: 'Bearer',\n                    expires_in: '3599',\n                    ext_expires_in: '3599',\n                    expires_on: '1717638666',\n                    access_token: sign,\n                    refresh_token: sign,\n                    id_token: sign \n                };\n\n                const user = {\n                    amr: '[\"pwd\",\"mfa\"]',\n                    ipaddr: '34.92.204.228',\n                    oid: '90f7596b-88b6-4768-8204-8c476a73fe25',\n                    rh: '0.AbcAqYXm1SM-2UKe-hXMXBzn2xNWhOMxA8BJnxH7amNCQtL8APU.',\n                    tid: 'd5e685a9-3e23-42d9-9efa-15cc5c1ce7db',\n                    uti: 'YCuQilrDeEeCWYCghqobAA',\n                    ver: '1.0'\n                };\n                user.account = account;\n                user.email = account + \"@gitcons.io\";\n                user.sub = account;\n                user.expireTime = timestamp;\n                //highlight-start\n                this.users.set(sign, user);\n                res.json(tokenResponse);\n                //highlight-end\n            } else {\n                throw new Error('Verificaton Failure');\n            }\n        }\n    }\n"})}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsx)(n.p,{children:'user.sub is very useful attribute in the user object. The "sub" claim is used to identify the principal that is the subject of the MetaMask oauth in RocketChatServer. This claim can be used to uniquely identify the Oauth entity.'})}),"\n",(0,a.jsx)(n.h2,{id:"call-web-api-with-access_token-in-authorization-header",children:"Call web API with access_token in authorization header"}),"\n",(0,a.jsx)(n.p,{children:"So with access_token in authorization header to call resources link, then RocketServer get the identity info.\nBefore return the identity info, the timestamp in the user info must not be out-of-date. Because the code is short lifespan ensures that if an attacker attempts to use a captured code multiple times, it will quickly become invalid."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'tittle="Return userinfo"',children:" userinfo(options = {}) {\n        return (req, res, next) => {\n            const authHeader = req.headers.authorization;\n            let token = null;\n            if (authHeader && authHeader.startsWith('Bearer')) {\n                token = authHeader.split(' ')[1];\n            }\n\n            if (token && this.users.has(token)) {\n                const user = this.users.get(token);\n                //To check the expireTime in the user info\n                if(Math.floor(Date.now()/1000) <= user.expireTime) {\n                    console.log(\"user info....\", user);\n                    res.json(user);\n                } else {\n                    return res.status(400).json({ error: 'Out of date' });\n                }\n            } else {\n                throw new Error('No user info');\n            }\n        }\n    }\n"})}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"credentialToken"})," in all steps must be same in one login session."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"redirect_uri"})," in all steps must be same in one login session."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"state"})," in all steps must be same in one login session."]}),"\n"]})})]})}function l(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},71670:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>s});var a=t(27378);const i={},r=a.createContext(i);function s(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);