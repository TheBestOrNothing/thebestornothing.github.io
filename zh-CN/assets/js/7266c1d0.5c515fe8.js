"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[16043],{9187:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Microsoft-authorization-code-flow-cddfa49e121f0aa127c2e704cbbca4c6.svg"},74634:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>h});var i=n(24246),s=n(71670);const o={description:"MetaMask add to OAuth 2.0"},r="Auth with MetaMask",a={id:"rocketchat/rocketchat-metamask-oauth",title:"Auth with MetaMask",description:"MetaMask add to OAuth 2.0",source:"@site/docs/rocketchat/rocketchat-metamask-oauth.mdx",sourceDirName:"rocketchat",slug:"/rocketchat/rocketchat-metamask-oauth",permalink:"/zh-CN/docs/next/rocketchat/rocketchat-metamask-oauth",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/docusaurus-v2/zh-CN",tags:[],version:"current",lastUpdatedBy:"Gitcoins",lastUpdatedAt:1720599809,formattedLastUpdatedAt:"2024\u5e747\u670810\u65e5",frontMatter:{description:"MetaMask add to OAuth 2.0"}},c={},h=[{value:"Microsoft OAuth Protocol details",id:"microsoft-oauth-protocol-details",level:2},{value:"Microsoft Oauth Prerequisites",id:"microsoft-oauth-prerequisites",level:2},{value:"Create Custom O365 OAuth in RocketChat",id:"create-custom-o365-oauth-in-rocketchat",level:2},{value:"Configure Custom O365 OAuth",id:"configure-custom-o365-oauth",level:2},{value:"Notice and Warning",id:"notice-and-warning",level:2},{value:"Code analysis",id:"code-analysis",level:2}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"auth-with-metamask",children:"Auth with MetaMask"}),"\n",(0,i.jsxs)(t.admonition,{title:"Useful links",type:"info",children:[(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://datatracker.ietf.org/doc/html/rfc6749",children:(0,i.jsx)(t.code,{children:"The OAuth 2.0 Authorization Framework"})})}),(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://learn.microsoft.com/en-us/entra/identity-platform/v2-oauth2-auth-code-flow",children:(0,i.jsx)(t.code,{children:"Microsoft identity platform and OAuth 2.0 authorization code flow"})})})]}),"\n",(0,i.jsx)(t.h2,{id:"microsoft-oauth-protocol-details",children:"Microsoft OAuth Protocol details"}),"\n",(0,i.jsxs)(t.p,{children:["The OAuth 2.0 authorization code flow is described in section ",(0,i.jsx)(t.a,{href:"https://datatracker.ietf.org/doc/html/rfc6749#section-4.1",children:(0,i.jsx)(t.code,{children:"4.1 of the OAuth 2.0 specification"})}),". Apps using the OAuth 2.0 authorization code flow acquire an access_token to include in requests to resources protected by the Microsoft identity platform (typically APIs). Apps can also request new ID and access tokens for previously authenticated entities by using a refresh mechanism."]}),"\n",(0,i.jsx)("p",{align:"center",children:(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:n(9187).Z+"",width:"790",height:"495"})})}),"\n",(0,i.jsx)(t.h2,{id:"microsoft-oauth-prerequisites",children:"Microsoft Oauth Prerequisites"}),"\n",(0,i.jsx)(t.p,{children:"Apart from the OAuth methods that Rocket.Chat provides for user authentication, you can also choose to set up a custom OAuth method."}),"\n",(0,i.jsx)(t.p,{children:"This guide shows how you can set up a custom OAuth integration between Microsoft accounts and Rocket.Chat. This is achieved with the use of Microsoft Entra ID (formerly called Azure Active Directory), which is an identity service by Microsoft that provides single sign-on and other authentication methods. You can also define conditional access policies and role-based permissions."}),"\n",(0,i.jsx)(t.p,{children:"Prerequisites:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"An account on the Azure portal."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"An Azure Active Directory app."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"An application ID and client secret."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"If you don't have an app, log in to the Azure Portal and navigate to the Microsoft Entra ID tab."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Create a new App Registration."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Fill in the details. You will get the redirect URI from your Rocker.Chat workspace when you Create Custom O365 OAuth."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"After registering your new app, take note of Application (client) ID. It will be needed to configure the integration later."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"On your new app's page, go to the Certificates and Secret tab to create a New client secret."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"create-custom-o365-oauth-in-rocketchat",children:"Create Custom O365 OAuth in RocketChat"}),"\n",(0,i.jsx)(t.p,{children:"To create a custom authentication method in your Rocket.Chat workspace:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Navigate to Administration > Workspace > Settings > OAuth."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Click on Custom OAuth and set the new OAuth integration name."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"After creating the new integration, you are given the Callback URL. Provide this as the redirect URI when you are creating your Azure app."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"You will also need to fill in other configuration fields."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"configure-custom-o365-oauth",children:"Configure Custom O365 OAuth"}),"\n",(0,i.jsx)(t.p,{children:"In your workspace, set the following fields as per your requirements."}),"\n",(0,i.jsx)(t.p,{children:"OAuth server configuration fields:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Enable: Set to true to enable this OAuth integration"}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["URL: ",(0,i.jsx)(t.a,{href:"https://login.microsoftonline.com/tenantID",children:"https://login.microsoftonline.com/tenantID"})]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Token Path: /oauth2/token"}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Token Sent Via: Select Header"}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Identity Token Sent Via: Select Header"}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Identity Path: /openid/userinfo"}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Authorize Path: /oauth2/authorize"}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Scope: openid profile email"}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Param Name for access token: access_token"}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Id: Your Azure AD Application (client) ID"}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Secret: Your Azure AD client secret value"}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Login style: Select the login style as Popup or Redirect."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Button Text: Enter some text to display on the button. For example, Login via Microsoft."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Key Field: Username"}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Username field: given_name"}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Email field: unique_name"}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Name field: family_name"}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Merge Users: True"}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Merge Users From Distinct Services: True"}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Show Button in Login page: True"}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Click Save changes."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"After saving, you will find the O365 Oauth button on the login and signup page."}),"\n",(0,i.jsx)(t.p,{children:"Simply sign in to your Office account to authenticate!"}),"\n",(0,i.jsx)(t.h2,{id:"notice-and-warning",children:"Notice and Warning"}),"\n",(0,i.jsx)(t.admonition,{type:"warning",children:(0,i.jsxs)(t.p,{children:["The configuration of custom Microsoft authentication from Rocketchat does not work, mainly due to the lack of information such as Key, Username, and Username fields.\nHow to configure these fields, depend on the identity info return fetch from ",(0,i.jsx)(t.strong,{children:"identity path"})," which defined in the RocketChat oauth configuration. The following is identity info example from Microsoft identity platform web API. In this context, the user named 'Forrest' have been defined before using oauth, so the Key Field must be Username and Username field must be given_name. If you want use email as Key Field, then the Email field must be unique_name or upn."]})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:"Identity info {\n  amr: '[\"pwd\",\"mfa\"]',\n  family_name: 'Gump',\n  given_name: 'Forrest',\n  ipaddr: '223.104.42.87',\n  name: 'Forrest Gump',\n  oid: '90f7596b-88b6-4768-8204-8c476a73fe25',\n  rh: '0.AbcAqYXm1SM-2UKe-hXMXBzn2xNWhOMxA8BJnxH7amNCQtL8APU.',\n  sub: 'KGceLH-HoENIN5H4jVwwaLI2rtpH-S2CTnJCHA0y0ak',\n  tid: 'd5e685a9-3e23-42d9-9efa-15cc5c1ce7db',\n  unique_name: 'ForrestGump@Gitcoins.onmicrosoft.com',\n  upn: 'ForrestGump@Gitcoins.onmicrosoft.com',\n  uti: 'H1zdM7Pmbk2z9qeOOQUsAQ',\n  ver: '1.0'\n}\n"})}),"\n",(0,i.jsx)(t.h2,{id:"code-analysis",children:"Code analysis"}),"\n",(0,i.jsxs)(t.p,{children:["The following code is how the RocketChat fecth the identity info from Microsoft identity platform web API. The request URL is ",(0,i.jsx)(t.a,{href:"https://login.microsoftonline.com/d5e685a9-3e23-42d9-9efa-15cc8c2ce7db/openid/userinfo",children:"https://login.microsoftonline.com/d5e685a9-3e23-42d9-9efa-15cc8c2ce7db/openid/userinfo"}),", then fecth the userinfo(identity info) with access_token in the headers."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",metastring:'title="Rocket.Chat/apps/meteor/app/custom-oauth/server/custom_oauth_server.js"',children:"async getIdentity(accessToken) {\n\t\tconst params = {};\n\t\tconst headers = {\n\t\t\t'User-Agent': this.userAgent, // http://doc.gitlab.com/ce/api/users.html#Current-user\n\t\t\t'Accept': 'application/json',\n\t\t};\n\n\t\tif (this.identityTokenSentVia === 'header') {\n\t\t\theaders.Authorization = `Bearer ${accessToken}`;\n\t\t} else {\n\t\t\tparams[this.accessTokenParam] = accessToken;\n\t\t}\n\n    // highlight-start\n\t\ttry {\n\t\t\tconst request = await fetch(`${this.identityPath}`, { method: 'GET', headers, params });\n\t\t\tif (!request.ok) {\n\t\t\t\tthrow new Error(request.statusText);\n\t\t\t}\n\t\t\tconst response = await request.json();\n    // highlight-end\n\t\t\treturn this.normalizeIdentity(response);\n\t\t} catch (err) {\n\t\t\tconst error = new Error(`Failed to fetch identity from ${this.name} at ${this.identityPath}. ${err.message}`);\n\t\t\tthrow _.extend(error, { response: err.response });\n\t\t}\n\t}\n"})})]})}function d(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},71670:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>r});var i=n(27378);const s={},o=i.createContext(s);function r(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);