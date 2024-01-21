"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7556],{17427:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var t=i(24246),a=i(71670);const o={id:"publishing-android-libraries-jitpack",description:"Create a Markdown Document"},s="Publish Android libs to Jitpack",r={id:"stream/publishing-android-libraries-jitpack",title:"Publish Android libs to Jitpack",description:"Create a Markdown Document",source:"@site/docs/stream/publishing-android-libraries-jitpack.mdx",sourceDirName:"stream",slug:"/stream/publishing-android-libraries-jitpack",permalink:"/zh-CN/docs/next/stream/publishing-android-libraries-jitpack",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/docusaurus-v2/zh-CN",tags:[],version:"current",lastUpdatedBy:"Gitcoins",lastUpdatedAt:1705836769,formattedLastUpdatedAt:"2024\u5e741\u670821\u65e5",frontMatter:{id:"publishing-android-libraries-jitpack",description:"Create a Markdown Document"},sidebar:"woofwoof",previous:{title:"Publish Android libs to Nexus",permalink:"/zh-CN/docs/next/stream/publishing-android-libraries-nexus"},next:{title:"Debugging with Ngrok",permalink:"/zh-CN/docs/next/stream/debugging-with-ngrok"}},l={},d=[{value:"Release configuration",id:"release-configuration",level:2},{value:"Version configuraiton",id:"version-configuraiton",level:2},{value:"jitpack configuration",id:"jitpack-configuration",level:2},{value:"Your first release",id:"your-first-release",level:2},{value:"Using the publish library",id:"using-the-publish-library",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"publish-android-libs-to-jitpack",children:"Publish Android libs to Jitpack"}),"\n",(0,t.jsx)(n.admonition,{title:"Useful links",type:"info",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://jitpack.io/",children:(0,t.jsx)(n.code,{children:"Publishing Android libraries to Jitpack"})})," ",(0,t.jsx)(n.a,{href:"https://jitpack.io/",children:"https://jitpack.io/"})]})}),"\n",(0,t.jsx)(n.p,{children:"Creating a great library is hard work. Coming up with the idea, implementing it, making sure you have a nice, stable public API that you control carefully and maintain\u2026 That\u2019s already lots to do."}),"\n",(0,t.jsx)(n.p,{children:"After all that, you need to make your library available to the public. Technically, you could distribute the .aar file any way you want, but the norm is publishing it to a publicly available Maven repository. It\u2019s a good idea to use one of the well-established repositories that people are already likely to have in their projects, to make getting started with your library as easy as possible."}),"\n",(0,t.jsxs)(n.p,{children:["The simplest choice would be ",(0,t.jsx)(n.a,{href:"https://jitpack.io/",children:"JitPack"}),", which is very easy to get started with. All you have to do is publish your project on GitHub, and JitPack should be able to build and distribute it immediately. If you\u2019re new to libraries, this is a great choice for getting your code out there."]}),"\n",(0,t.jsx)(n.h2,{id:"release-configuration",children:"Release configuration"}),"\n",(0,t.jsx)(n.p,{children:"The signing is not mandatory for jitpack, so the keyId, key and password is not requried. So the publish-module.gradle is useful for jitpack and nexus publishing."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="scripts/publish-module.gradle"',children:"apply plugin: 'maven-publish'\napply plugin: 'signing'\napply plugin: 'org.jetbrains.dokka'\n\ntasks.register('androidSourcesJar', Jar) {\n    archiveClassifier.set('sources')\n    if (project.plugins.findPlugin(\"com.android.library\")) {\n        from android.sourceSets.main.java.srcDirs\n        from android.sourceSets.main.kotlin.srcDirs\n    } else {\n        from sourceSets.main.java.srcDirs\n        from sourceSets.main.kotlin.srcDirs\n    }\n}\n\ntasks.withType(dokkaHtmlPartial.getClass()).configureEach {\n    pluginsMapConfiguration.set(\n            [\"org.jetbrains.dokka.base.DokkaBase\": \"\"\"{ \"separateInheritedMembers\": true}\"\"\"]\n    )\n}\n\ntask javadocJar(type: Jar, dependsOn: dokkaJavadoc) {\n    archiveClassifier.set('javadoc')\n    from dokkaJavadoc.outputDirectory\n}\n\nartifacts {\n    archives androidSourcesJar\n    archives javadocJar\n}\n\ngroup = PUBLISH_GROUP_ID\nversion = PUBLISH_VERSION\n\nafterEvaluate {\n    publishing {\n        publications {\n            release(MavenPublication) {\n                tasks.named(\"generateMetadataFileForReleasePublication\").configure { dependsOn(\"androidSourcesJar\") }\n                groupId PUBLISH_GROUP_ID\n                artifactId PUBLISH_ARTIFACT_ID\n                version PUBLISH_VERSION\n                if (project.plugins.findPlugin(\"com.android.library\")) {\n                    from components.release\n                } else {\n                    from components.java\n                }\n\n                artifact javadocJar\n\n                pom {\n                    name = PUBLISH_ARTIFACT_ID\n                    description = 'Stream Chat official Android SDK'\n                    url = 'https://github.com/thebestornothing/stream-chat-android'\n                    licenses {\n                        license {\n                            name = 'Stream License'\n                            url = 'https://github.com/thebestornothing/stream-chat-android/blob/main/LICENSE'\n                        }\n                    }\n                    developers {\n                        developer {\n                            id = 'leandroBorgesFerreira'\n                            name = 'Leandro Borges Ferreira'\n                            email = 'leandro@getstream.io'\n                        }\n                        developer {\n                            id = 'bychkovdmitry'\n                            name = 'Dmitrii Bychkov'\n                            email = 'dmitrii@getstream.io'\n                        }\n                    }\n                    scm {\n                        connection = 'scm:git:github.com/thebestornothing/stream-chat-android.git'\n                        developerConnection = 'scm:git:ssh://github.com/thebestornothing/stream-chat-android.git'\n                        url = 'https://github.com/thebestornothing/stream-chat-android/tree/main'\n                    }\n                }\n            }\n        }\n    }\n}\n\n// The signing is not mandatory for jitpack, so the keyId, key and password is not requried. \n// If there are no  keyId, key and password env for signing in the jitpack, the sign function in the following will not work.\n// So the publish-module.gradle is worked well for both jitpack and nexus publishing.\n\ndef hasSigningKey = rootProject.ext[\"signing.keyId\"] || rootProject.ext[\"signing.key\"]\nif(hasSigningKey) {\n    sign(project)\n}\nvoid sign(Project project) {\n    project.signing {\n        required { project.gradle.taskGraph.hasTask(\"publish\") }\n        def signingKeyId = rootProject.ext[\"signing.keyId\"]\n        def signingKey = rootProject.ext[\"signing.key\"]\n        def signingPassword = rootProject.ext[\"signing.password\"]\n        if (signingKeyId) {\n            useInMemoryPgpKeys(signingKeyId, signingKey, signingPassword)\n        } else if (signingKey) {\n            useInMemoryPgpKeys(signingKey, signingPassword)\n        }\n        sign publishing.publications\n    }\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"version-configuraiton",children:"Version configuraiton"}),"\n",(0,t.jsx)(n.p,{children:"Finally see the group ID, artifact ID, and version being set, so that the publication script can make use of them. Then, the script itself is applied. This is all the code you need to add per-module if you are publishing your library in multiple artifacts, everything else is done by the common script."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="buildSrc/Configuration.kt"',children:'object Configuration {\n    const val compileSdk = 34\n    const val targetSdk = 34\n    const val sampleTargetSdk = 34\n    const val minSdk = 21\n    const val majorVersion = 6\n    const val minorVersion = 0\n    const val patchVersion = 8\n    const val myVersion = 2\n    const val versionName = "$majorVersion.$minorVersion.$patchVersion.$myVersion"\n    const val snapshotVersionName = "$majorVersion.$minorVersion.${patchVersion + 1}-SNAPSHOT"\n    const val artifactGroup = "io.gitcoins"\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"jitpack-configuration",children:"jitpack configuration"}),"\n",(0,t.jsx)(n.p,{children:"Now, let\u2019s create the jitpack.yml file in the repository as showed in the following."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="jitpack.yml"',children:'jdk: openjdk17\ninstall:\n  - echo "Running a custom install command"\n  - ./gradlew clean -xtest -xlint assembleRelease -x :stream-chat-android-ui-components-sample:assembleRelease -x :stream-chat-android-compose-sample:assembleRelease -x :stream-chat-android-docs:assembleRelease publishReleasePublicationToMavenLocal\n'})}),"\n",(0,t.jsx)(n.h2,{id:"your-first-release",children:"Your first release"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["After adapt the code of ",(0,t.jsx)(n.a,{href:"https://github.com/TheBestOrNothing/stream-chat-android",children:"stream-chat-android"})," and then create the new tag with name which is same as ",(0,t.jsx)(n.code,{children:"versionName"})," descript in the Version configuraiton."]}),"\n",(0,t.jsxs)(n.li,{children:["Go to ",(0,t.jsx)(n.code,{children:"https://jitpack.io/"})," and look up ",(0,t.jsx)(n.code,{children:"wofwoof/stream-chat-android"})]}),"\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.code,{children:"Get it"})," button according to the new tag"]}),"\n",(0,t.jsx)(n.li,{children:"The package will build and publish auto"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"using-the-publish-library",children:"Using the publish library"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Add url ",(0,t.jsx)(n.code,{children:"https://jitpack.io"})," in the repositories in the build.gradle file"]}),"\n",(0,t.jsxs)(n.li,{children:["Add dependency like ",(0,t.jsx)(n.code,{children:"com.github.wofwoof.stream-chat-android:stream-chat-android-client:6.0.12.10"})]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="build.gradle"',children:'\nrepositories {\n    mavenLocal()\n    mavenCentral()\n    maven { url "https://plugins.gradle.org/m2/" }\n    maven { url uri(\'https://repo.maven.apache.org/maven2/\') }\n    maven { url \'https://jitpack.io\' }\n}\n\ndependencies {\n\n    // Jitpack publish\n    implementation(com.github.wofwoof.stream-chat-android:stream-chat-android-client:6.0.12.10)\n    // Nexus publish from io.gitcoins\n    implementation("io.gitcoins:stream-chat-android-compose:6.0.8.2")\n    implementation("io.gitcoins:stream-chat-android-ui-utils:6.0.8.2")\n    implementation("io.gitcoins:stream-chat-android-offline:6.0.8.2")\n    // Nexus publish from io.getstream\n    implementation("io.getstream:stream-chat-android-compose:6.0.8")\n    implementation("io.getstream:stream-chat-android-offline:6.0.8")\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},71670:(e,n,i)=>{i.d(n,{Z:()=>r,a:()=>s});var t=i(27378);const a={},o=t.createContext(a);function s(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);