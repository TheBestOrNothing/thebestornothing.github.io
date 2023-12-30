"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[66521],{84021:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>h});var i=t(24246),r=t(71670);const s={id:"publishing-android-libraries",description:"Create a Markdown Document"},o="Publishing Android libraries",a={id:"stream/publishing-android-libraries",title:"Publishing Android libraries",description:"Create a Markdown Document",source:"@site/docs/stream/publishing-android-libraries.mdx",sourceDirName:"stream",slug:"/stream/publishing-android-libraries",permalink:"/zh-CN/docs/next/stream/publishing-android-libraries",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/docusaurus-v2/zh-CN",tags:[],version:"current",lastUpdatedBy:"Gitcoins",lastUpdatedAt:1703908992,formattedLastUpdatedAt:"2023\u5e7412\u670830\u65e5",frontMatter:{id:"publishing-android-libraries",description:"Create a Markdown Document"},sidebar:"woofwoof",previous:{title:"getstream.io",permalink:"/zh-CN/docs/next/stream/stream-getstreamio"},next:{title:"Debugging with Ngrok",permalink:"/zh-CN/docs/next/stream/debugging-with-ngrok"}},l={},h=[{value:"Overview",id:"overview",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Registering a Sonatype account",id:"registering-a-sonatype-account",level:2},{value:"Generating a GPG key pair",id:"generating-a-gpg-key-pair",level:2},{value:"Setting up publication in your project",id:"setting-up-publication-in-your-project",level:2},{value:"Root project Gradle configuration",id:"root-project-gradle-configuration",level:3},{value:"Publishing configuration",id:"publishing-configuration",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",div:"div",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"publishing-android-libraries",children:"Publishing Android libraries"}),"\n",(0,i.jsx)(n.p,{children:"Creating a great library is hard work. Coming up with the idea, implementing it, making sure you have a nice, stable public API that you control carefully and maintain\u2026 That\u2019s already lots to do."}),"\n",(0,i.jsx)(n.p,{children:"After all that, you need to make your library available to the public. Technically, you could distribute the .aar file any way you want, but the norm is publishing it to a publicly available Maven repository. It\u2019s a good idea to use one of the well-established repositories that people are already likely to have in their projects, to make getting started with your library as easy as possible."}),"\n",(0,i.jsx)(n.p,{children:"The fanciest place you can be in is The Central Repository via Sonatype OSSRH (OSS Repository Hosting), which I\u2019ll refer to as simply MavenCentral from here on. This is the place to be if you\u2019re a Maven dependency. Artifacts on MavenCentral are well trusted, and their integrity can be verified, as they are all required to be signed by the author."}),"\n",(0,i.jsx)(n.admonition,{title:"JitPack or Sonatype OSSRH?",type:"info",children:(0,i.jsxs)(n.p,{children:["The simplest choice would be ",(0,i.jsx)(n.a,{href:"https://jitpack.io/",children:"JitPack"}),", which might not give you much in terms of customization or control, but is very easy to get started with. All you have to do is publish your project on GitHub, and JitPack should be able to build and distribute it immediately. If you\u2019re new to libraries, this is a great choice for getting your code out there."]})}),"\n",(0,i.jsx)(n.admonition,{title:"Help",type:"warning",children:(0,i.jsxs)(n.p,{children:["I try to use JitPack but failed to config. If you success to use JitPack in the ",(0,i.jsx)(n.a,{href:"https://github.com/GetStream/stream-chat-android",children:"Android SDK for Stream Chat"}),", please let me know. Thanks."]})}),"\n",(0,i.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(n.p,{children:"Here's a quick overview of the steps we'll go through:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Registering a Jira account with Sonatype, and verifying your ownership of the group ID you want to publish your artifact with"}),"\n",(0,i.jsx)(n.li,{children:"Generating a GPG key pair for signing your artifacts, publishing your public key, and exporting your private key"}),"\n",(0,i.jsx)(n.li,{children:"Setting up Gradle tasks that can sign upload your artifacts to a staging repository"}),"\n",(0,i.jsx)(n.li,{children:"Manually going through the process of checking your artifacts in the staging repo and releasing them via the Sonatype web UI"}),"\n",(0,i.jsx)(n.li,{children:"Automating the close & release flow with a Gradle plugin"}),"\n",(0,i.jsx)(n.li,{children:"Configuring CI workflows with GitHub Actions to automate all of the above\nA lot of ground to cover - let\u2019s go!"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsx)(n.p,{children:"We\u2019ll be using the following tools for this tutorial. You are free to use alternatives, but these are our favourites, and they work well for us."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The command line gpg tool"}),"\n",(0,i.jsx)(n.li,{children:"GitHub as the public host of the library\u2019s repository"}),"\n",(0,i.jsx)(n.li,{children:"GitHub Actions as the continuous integration solution\nFor this article, we\u2019ll assume that you already have your library developed, and have uploaded it to a public GitHub repository.\nWe\u2019ll use our very own Android Chat SDK in our examples. This SDK is made up of multiple artifacts, but for simplification, we\u2019ll just talk about publishing the low-level networking client, which lives in the stream-chat-android-client module of the GitHub repository."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"registering-a-sonatype-account",children:"Registering a Sonatype account"}),"\n",(0,i.jsxs)(n.p,{children:["First things first, you\u2019ll need an account in the ",(0,i.jsx)(n.a,{href:"https://issues.sonatype.org/secure/Dashboard.jspa",children:"Sonatype Jira"}),". Head over there and hit Sign up. Registration is straightforward, it just requires a username, an email, and a password.\nAfter you\u2019ve logged in, you\u2019ll need to open an issue, asking for access to the group ID that you\u2019ll want to publish your project under. For us, based on our domain name (gitcoins.io), our group ID is io.gitcoins. If you own a domain, it\u2019s best to choose the reversed version of that as your group ID. Otherwise, you\u2019ll have to stick with having a GitHub-based group ID."]}),"\n",(0,i.jsx)(n.p,{children:"After choosing a language and an avatar, you\u2019ll end up on this landing page - click on Create an issue"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Summary"}),": Create repository for your.group.id.here"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Description"}),": An optional, quick summary of what your project is."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Group Id"}),": Your group ID, as described a few sections earlier."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Project URL"}),": If your project has a webpage, the URL of that page. This can also be just the GitHub repository."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"SCM url"}),": Your source control URL, i.e. the GitHub repository link."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Username(s)"}),": If you want additional users (on top of the one you\u2019re using for this process) to have deploy access for your group ID, you can list them here."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Already Synced to Central"}),": If you\u2019re just getting started, this should be No."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Soon after opening it, your issue will get a comment telling you to verify that you own the domain corresponding to your group ID. To comply with this, add the required TXT record to your domain - how to do this will depend on where your domain is registered, but it should be a fairly simple task. Login to the ",(0,i.jsx)(n.a,{href:"https://dcc.godaddy.com/control/portfolio/gitcoins.io/settings",children:"goDaddy"})," to set the TXT record with the guide from ",(0,i.jsx)(n.a,{href:"https://issues.sonatype.org/browse/OSSRH-97587",children:"the issue created"})," in jira for Sonatype."]}),"\n",(0,i.jsx)(n.h2,{id:"generating-a-gpg-key-pair",children:"Generating a GPG key pair"}),"\n",(0,i.jsx)(n.p,{children:"As we eluded to earlier, artifacts published on MavenCentral have to be signed by their publishers. You\u2019ll need a GPG key for this."}),"\n",(0,i.jsx)(n.p,{children:"MavenCentral also has its own documentation for Working with PGP Signatures which you can reference if you get stuck along the way."}),"\n",(0,i.jsx)(n.p,{children:"This part requires access to the gpg command. There are several ways to install this via package managers, and there are many distributions available for different platforms on gnupg.org."}),"\n",(0,i.jsx)(n.p,{children:"We'll stick to the command line here on Linux for generating and managing keys."}),"\n",(0,i.jsx)(n.p,{children:"To generate a new key, run the following command:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"\ngpg --full-gen-key\n\n"})}),"\n",(0,i.jsx)(n.p,{children:"You\u2019ll be prompted to enter a few details:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Kind of key"}),": Accept the default value, which is (1) RSA and RSA."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Key size"}),": 4096."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Expiration"}),": You can input 0 to generate a key that never expires. You can also create a key that has an expiry date and then renew it periodically, if you prefer to do so."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Real name, email"}),": Should be obvious."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Comment"}),": Freeform text, can be left empty.\nAfter entering these details, you\u2019ll be prompted to enter a passphrase to secure your key with."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Here\u2019s the full flow you'll go through, with a bit of truncation:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"\nPlease select what kind of key you want:\n   (1) RSA and RSA (default)\n   ...\nYour selection? 1\n\nRSA keys may be between 1024 and 4096 bits long.\nWhat keysize do you want? (3072) 4096\nRequested keysize is 4096 bits\n\nPlease specify how long the key should be valid.\n         0 = key does not expire\n         ...\nKey is valid for? (0) 0\nKey does not expire at all\nIs this correct? (y/N) y\n\nGnuPG needs to construct a user ID to identify your key.\n\nReal name: Marton Braun\nEmail address: marton@getstream.io\nComment: Example key for tutorial\nYou selected this USER-ID:\n    \"Marton Braun (Example key for tutorial) <marton@getstream.io>\"\n\nChange (N)ame, (C)omment, (E)mail or (O)kay/(Q)uit? O\n\ngpg: key 36271B955BEF072A marked as ultimately trusted\ngpg: revocation certificate stored as '.../gnupg/openpgp-revocs.d\\7A5D73CFEDDDBC915986998A36271B955BEF072A.rev'\npublic and secret key created and signed.\n\npub   rsa4096 2024-02-03 [SC]\n      7A5D73CFEDDDBC915986998A36271B955BEF072A\nuid                      Marton Braun (Example key for tutorial) <marton@getstream.io>\nsub   rsa4096 2024-02-03 [E]\n\n"})}),"\n",(0,i.jsx)(n.p,{children:"You can always check the keys you have on your system by running gpg --list-keys:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"\ngpg --list-keys\n\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"\ngpg: checking the trustdb\n.../gnupg/pubring.kbx\n-----------------------------------------------\npub   rsa4096 2021-02-03 [SC]\n      7A5D73CFEDDDBC915986998A36271B955BEF072A\nuid           [ultimate] Marton Braun (Example key for tutorial) <marton@getstream.io>\nsub   rsa4096 2021-02-03 [E]\n\n"})}),"\n",(0,i.jsx)(n.p,{children:"Your key\u2019s ID is the last eight digits of its fingerprint (the long hexadecimal string above). In this case, this is 5BEF072A - take note of this, as you\u2019ll use this later."}),"\n",(0,i.jsx)(n.p,{children:"You\u2019ve generated a pair of keys - a private and a public key. You\u2019ll keep the private one hidden and use it to sign your artifacts. The public key has to be uploaded to the server so that anyone can check that it belongs to you, which you can do by running the following (use your own key ID!):"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"\ngpg --keyserver keyserver.ubuntu.com --send-keys 5BEF072A\n\n\n"})}),"\n",(0,i.jsx)(n.p,{children:"Your private key will need to be referenced by your project when it signs the artifacts. You can get a base 64 export of it with the following:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"\ngpg --export-secret-keys 5BEF072A | base64\n\n"})}),"\n",(0,i.jsx)(n.h2,{id:"setting-up-publication-in-your-project",children:"Setting up publication in your project"}),"\n",(0,i.jsx)(n.p,{children:"That\u2019s a lot of work without touching your project, but the time has come to do that now. In the next few steps, you will:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Add Gradle scripts that set up the publication plugin required to push artifacts to a repository."}),"\n",(0,i.jsx)(n.li,{children:"Configure the properties of the library you\u2019re releasing."}),"\n",(0,i.jsx)(n.li,{children:"Grab the necessary authentication details along with the private key you\u2019ve just exported."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"root-project-gradle-configuration",children:"Root project Gradle configuration"}),"\n",(0,i.jsx)(n.p,{children:"To easily automate publishing later, you'll use the gradle-nexus/publish-plugin tool. This has to be added in your project level (root) build.gradle file as a dependency."}),"\n",(0,i.jsx)(n.p,{children:"You can do this either with a plugins block:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",metastring:'title="build.gradle"',children:"buildscript {\n    repositories {\n        ...\n        mavenCentral()\n    }\n\n    dependencies {\n        ...\n        classpath Dependencies.gradleNexusPublishPlugin\n    }\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"publishing-configuration",children:"Publishing configuration"}),"\n",(0,i.jsx)(n.p,{children:"Next, create a new file called publish-root.gradle in a new scripts folder inside your project. This will contain global configuration you need for publishing, grabbing input values for your scripts, and defining the MavenCentral repository."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",metastring:'title="scripts/publish-root.gradle"',children:'import io.getstream.chat.android.Configuration\n\n// Create variables with empty default values\next["ossrhUsername"] = \'\'\next["ossrhPassword"] = \'\'\next["sonatypeStagingProfileId"] = \'\'\next["signing.keyId"] = \'\'\next["signing.password"] = \'\'\next["signing.key"] = \'\'\next["snapshot"] = \'\'\n\nFile secretPropsFile = project.rootProject.file(\'local.properties\')\nif (secretPropsFile.exists()) {\n    // Read local.properties file first if it exists\n    Properties p = new Properties()\n    new FileInputStream(secretPropsFile).withCloseable { is -> p.load(is) }\n    p.each { name, value -> ext[name] = value }\n} else {\n    // Use system environment variables\n    ext["ossrhUsername"] = System.getenv(\'OSSRH_USERNAME\')\n    ext["ossrhPassword"] = System.getenv(\'OSSRH_PASSWORD\')\n    ext["sonatypeStagingProfileId"] = System.getenv(\'SONATYPE_STAGING_PROFILE_ID\')\n    ext["signing.keyId"] = System.getenv(\'SIGNING_KEY_ID\')\n    ext["signing.password"] = System.getenv(\'SIGNING_PASSWORD\')\n    ext["signing.key"] = System.getenv(\'SIGNING_KEY\')\n    ext["snapshot"] = System.getenv(\'SNAPSHOT\')\n}\n\nif (snapshot) {\n    ext["rootVersionName"] = Configuration.snapshotVersionName\n} else {\n    ext["rootVersionName"] = Configuration.versionName\n}\n\n// Set up Sonatype repository\nnexusPublishing {\n    repositories {\n        sonatype {\n            stagingProfileId = sonatypeStagingProfileId\n            username = ossrhUsername\n            password = ossrhPassword\n            version = rootVersionName\n        }\n    }\n}\n\ntasks.withType(dokkaHtmlMultiModule.getClass()) {\n    includes.from("DokkaRoot.md")\n}\n\n'})}),"\n",(0,i.jsx)(n.p,{children:"The first three variables will be used to sign the artifacts after they\u2019re built:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"signing.keyId: the ID of the GPG key pair, the last eight characters of its fingerprint"}),"\n",(0,i.jsx)(n.li,{children:"signing.password: the passphrase of the key pair"}),"\n",(0,i.jsx)(n.li,{children:"signing.key: the base64 encoded private key you exported earlier"}),"\n",(0,i.jsxs)(n.li,{children:["osshrUsername and ossrhPassword: are your account details for ",(0,i.jsx)(n.a,{href:"https://s01.oss.sonatype.org/",children:"MavenCentral"})]}),"\n",(0,i.jsxs)(n.li,{children:["sonatypeStagingProfileId: Go to ",(0,i.jsx)(n.a,{href:"https://s01.oss.sonatype.org/",children:"https://s01.oss.sonatype.org/"})," and log in. In the menu on the left, select Staging profiles, select your profile, and then look for the ID in the ",(0,i.jsx)(n.a,{href:"https://s01.oss.sonatype.org/#stagingProfiles;638cedd9d39c2",children:"URL"}),". The 638cedd9d39c2 is the sonatypeStagingProfileId."]}),"\n"]}),"\n",(0,i.jsx)(n.div,{children:(0,i.jsxs)(n.p,{children:["If you're on the new Sonatype infrastructure (happens if you've registered after 2021-02-24 or requested it specifically), you have to add explicit URLs pointing to ",(0,i.jsx)(n.strong,{children:"s01.oss.sonatype.org"})," in this config block next to the existing parameters"]})})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},71670:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>o});var i=t(27378);const r={},s=i.createContext(r);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);