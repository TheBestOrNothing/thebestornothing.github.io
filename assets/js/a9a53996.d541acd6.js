"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[90490],{23306:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var o=t(24246),a=t(71670);const r={id:"debugging-with-ngrok",description:"Create a Markdown Document"},i="Debugging with Ngrok",s={id:"stream/debugging-with-ngrok",title:"Debugging with Ngrok",description:"Create a Markdown Document",source:"@site/versioned_docs/version-3.0.1/stream/debugging-with-ngrok.mdx",sourceDirName:"stream",slug:"/stream/debugging-with-ngrok",permalink:"/docs/stream/debugging-with-ngrok",draft:!1,unlisted:!1,editUrl:"https://github.com/vulnsystem/vulnsystem.github.io/edit/main/website/docs/stream/debugging-with-ngrok.mdx",tags:[],version:"3.0.1",frontMatter:{id:"debugging-with-ngrok",description:"Create a Markdown Document"},sidebar:"woofwoof",previous:{title:"Publish Android libs to Jitpack",permalink:"/docs/stream/publishing-android-libraries-jitpack"},next:{title:"Steam feeds",permalink:"/docs/stream/stream-feeds"}},c={},l=[{value:"Installation",id:"installation",level:2},{value:"Ngrok Configuration",id:"ngrok-configuration",level:2},{value:"Dashboard Configuration",id:"dashboard-configuration",level:2},{value:"Receiving Events",id:"receiving-events",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"debugging-with-ngrok",children:"Debugging with Ngrok"}),"\n",(0,o.jsx)(n.p,{children:"Ngrok is a tool allows you to expose a port on your local machine to the internet, allowing you to receive and monitor incoming requests from external sources such as webhooks. This makes Ngrok a perfect fit for debugging webhook payloads that come from Stream Chat."}),"\n",(0,o.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,o.jsx)(n.p,{children:"Ngrok can be installed on ubuntu using apt with the following command:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"$ sudo apt install ngrok\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Alternatively, you can download Ngrok from their website at ",(0,o.jsx)(n.a,{href:"https://ngrok.com/",children:"https://ngrok.com/"}),". Once downloaded and unzipped, place the Ngrok executable in your applications directory."]}),"\n",(0,o.jsx)(n.h2,{id:"ngrok-configuration",children:"Ngrok Configuration"}),"\n",(0,o.jsx)(n.p,{children:"Now that Ngrok is properly installed, we'll need to spin it up on port 80 using the following command:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"$ ngrok http 80\n"})}),"\n",(0,o.jsx)(n.p,{children:'Once you execute the command listed above, Ngrok will spin up a "forwarding URL" that you can use to specify in the Stream Dashboard.\nNow that your forwarding URL is available and online, copy the HTTPS forwarding URL as we will need it in the next step.'}),"\n",(0,o.jsx)(n.h2,{id:"dashboard-configuration",children:"Dashboard Configuration"}),"\n",(0,o.jsx)(n.p,{children:"With your forwarding URL copied, login to your Stream Chat dashboard and scroll down to the webhook section. Activate the webhook and then paste your HTTPS forwarding URL in the webhook URL input . Click save to persist your settings."}),"\n",(0,o.jsx)(n.h2,{id:"receiving-events",children:"Receiving Events"}),"\n",(0,o.jsxs)(n.p,{children:['One of the many helpful tools that Ngrok provides is a web interface for inspecting incoming payloads. If you reference your terminal, you\'ll notice that there is a link for the "Web Interface" that runs on a local port \u2013 generally port 4040 if available. Navigate to ',(0,o.jsx)(n.a,{href:"http://localhost:4040",children:"http://localhost:4040"})," and you will see a dashboard for Ngrok."]}),"\n",(0,o.jsx)(n.p,{children:"Next, fire off an event such as a message from your chat interface to receive and inspect the payload. Once sent, the webhook will forward the payload to your Ngrok server for inspection via a POST request."}),"\n",(0,o.jsx)(n.p,{children:"Ngrok will intermittently return a 502 Bad Gateway response. Please do not be alarmed by this as debugging with Ngrok is only for debugging purposes. In a production or staging environment, your server should return a 200 status code.\nBelow is an example of the payload for a message:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'{\n    "cid": "messaging:MYH-HwwO",\n    "type": "message.new",\n    "message": {\n        "id": "2ecb4159e50b38cfb96e8ad2c4febd69-1ea9aa03-3edf-4491-8619-b34cabd4bcfc",\n        "text": "Hello!",\n        "html": "<p>Hello!</p>\\n",\n        "type": "regular",\n        "user": {\n            "id": "2ecb4159e50b38cfb96e8ad2c4febd69",\n            "role": "admin",\n            "created_at": "2019-09-16T13:35:08.977932Z",\n            "updated_at": "2019-12-04T23:28:27.744384Z",\n            "last_active": "2019-12-04T23:28:27.743804Z",\n            "online": true,\n            "image": "https://ui-avatars.com/api/?name=nick_parsons&size=192&background=000000&color=6E7FFE&length=1",\n            "name": "nick_parsons",\n            "username": "nick_parsons"\n        },\n        "attachments": [],\n        "latest_reactions": [],\n        "own_reactions": [],\n        "reaction_counts": null,\n        "reaction_scores": {},\n        "reply_count": 0,\n        "created_at": "2019-12-04T23:28:35.561344Z",\n        "updated_at": "2019-12-04T23:28:35.561344Z",\n        "mentioned_users": []\n    },\n    "user": {\n        "id": "2ecb4159e50b38cfb96e8ad2c4febd69",\n        "role": "admin",\n        "created_at": "2019-09-16T13:35:08.977932Z",\n        "updated_at": "2019-12-04T23:28:27.744384Z",\n        "last_active": "2019-12-04T23:28:27.743804Z",\n        "online": true,\n        "channel_last_read_at": "1970-01-01T00:00:00Z",\n        "total_unread_count": 0,\n        "unread_channels": 0,\n        "unread_count": 0,\n        "image": "https://ui-avatars.com/api/?name=nick_parsons&size=192&background=000000&color=6E7FFE&length=1",\n        "name": "nick_parsons",\n        "username": "nick_parsons",\n        "channel_unread_count": 0\n    },\n    "watcher_count": 1,\n    "created_at": "2019-12-04T23:28:35.566646131Z",\n    "channel_type": "messaging",\n    "channel_id": "MYH-HwwO"\n}\n'})})]})}function u(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},71670:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>i});var o=t(27378);const a={},r=o.createContext(a);function i(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);