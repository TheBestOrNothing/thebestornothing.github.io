"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7556],{17427:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var t=i(24246),a=i(71670);const s={id:"publishing-android-libraries-jitpack",description:"Create a Markdown Document"},o="Publish Android libs to Jitpack",r={id:"stream/publishing-android-libraries-jitpack",title:"Publish Android libs to Jitpack",description:"Create a Markdown Document",source:"@site/docs/stream/publishing-android-libraries-jitpack.mdx",sourceDirName:"stream",slug:"/stream/publishing-android-libraries-jitpack",permalink:"/zh-CN/docs/next/stream/publishing-android-libraries-jitpack",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/docusaurus-v2/zh-CN",tags:[],version:"current",lastUpdatedBy:"Gitcoins",lastUpdatedAt:1705805595,formattedLastUpdatedAt:"2024\u5e741\u670821\u65e5",frontMatter:{id:"publishing-android-libraries-jitpack",description:"Create a Markdown Document"}},l={},c=[{value:"Release configuration",id:"release-configuration",level:2},{value:"Version configuraiton",id:"version-configuraiton",level:2},{value:"Github Action integration",id:"github-action-integration",level:2},{value:"Your first release",id:"your-first-release",level:2},{value:"Using the publish library",id:"using-the-publish-library",level:2},{value:"Create new Project in Android studio",id:"create-new-project-in-android-studio",level:3},{value:"Add Stream Chat Compose SDK",id:"add-stream-chat-compose-sdk",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"publish-android-libs-to-jitpack",children:"Publish Android libs to Jitpack"}),"\n",(0,t.jsx)(n.admonition,{title:"Useful links",type:"info",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://jitpack.io/",children:(0,t.jsx)(n.code,{children:"Publishing Android libraries to Jitpack"})})," ",(0,t.jsx)(n.a,{href:"https://jitpack.io/",children:"https://jitpack.io/"})]})}),"\n",(0,t.jsx)(n.p,{children:"Creating a great library is hard work. Coming up with the idea, implementing it, making sure you have a nice, stable public API that you control carefully and maintain\u2026 That\u2019s already lots to do."}),"\n",(0,t.jsx)(n.p,{children:"After all that, you need to make your library available to the public. Technically, you could distribute the .aar file any way you want, but the norm is publishing it to a publicly available Maven repository. It\u2019s a good idea to use one of the well-established repositories that people are already likely to have in their projects, to make getting started with your library as easy as possible."}),"\n",(0,t.jsxs)(n.p,{children:["The simplest choice would be ",(0,t.jsx)(n.a,{href:"https://jitpack.io/",children:"JitPack"}),", which is very easy to get started with. All you have to do is publish your project on GitHub, and JitPack should be able to build and distribute it immediately. If you\u2019re new to libraries, this is a great choice for getting your code out there."]}),"\n",(0,t.jsx)(n.h2,{id:"release-configuration",children:"Release configuration"}),"\n",(0,t.jsx)(n.p,{children:"The signing is madetory for jitpack, so the keyId, key and password is not requried. So the publish-module.gradle is useful for jitpack and nexus publishing."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="scripts/publish-module.gradle"',children:"apply plugin: 'maven-publish'\napply plugin: 'signing'\napply plugin: 'org.jetbrains.dokka'\n\ntasks.register('androidSourcesJar', Jar) {\n    archiveClassifier.set('sources')\n    if (project.plugins.findPlugin(\"com.android.library\")) {\n        from android.sourceSets.main.java.srcDirs\n        from android.sourceSets.main.kotlin.srcDirs\n    } else {\n        from sourceSets.main.java.srcDirs\n        from sourceSets.main.kotlin.srcDirs\n    }\n}\n\ntasks.withType(dokkaHtmlPartial.getClass()).configureEach {\n    pluginsMapConfiguration.set(\n            [\"org.jetbrains.dokka.base.DokkaBase\": \"\"\"{ \"separateInheritedMembers\": true}\"\"\"]\n    )\n}\n\ntask javadocJar(type: Jar, dependsOn: dokkaJavadoc) {\n    archiveClassifier.set('javadoc')\n    from dokkaJavadoc.outputDirectory\n}\n\nartifacts {\n    archives androidSourcesJar\n    archives javadocJar\n}\n\ngroup = PUBLISH_GROUP_ID\nversion = PUBLISH_VERSION\n\nafterEvaluate {\n    publishing {\n        publications {\n            release(MavenPublication) {\n                tasks.named(\"generateMetadataFileForReleasePublication\").configure { dependsOn(\"androidSourcesJar\") }\n                groupId PUBLISH_GROUP_ID\n                artifactId PUBLISH_ARTIFACT_ID\n                version PUBLISH_VERSION\n                if (project.plugins.findPlugin(\"com.android.library\")) {\n                    from components.release\n                } else {\n                    from components.java\n                }\n\n                artifact javadocJar\n\n                pom {\n                    name = PUBLISH_ARTIFACT_ID\n                    description = 'Stream Chat official Android SDK'\n                    url = 'https://github.com/thebestornothing/stream-chat-android'\n                    licenses {\n                        license {\n                            name = 'Stream License'\n                            url = 'https://github.com/thebestornothing/stream-chat-android/blob/main/LICENSE'\n                        }\n                    }\n                    developers {\n                        developer {\n                            id = 'leandroBorgesFerreira'\n                            name = 'Leandro Borges Ferreira'\n                            email = 'leandro@getstream.io'\n                        }\n                        developer {\n                            id = 'bychkovdmitry'\n                            name = 'Dmitrii Bychkov'\n                            email = 'dmitrii@getstream.io'\n                        }\n                    }\n                    scm {\n                        connection = 'scm:git:github.com/thebestornothing/stream-chat-android.git'\n                        developerConnection = 'scm:git:ssh://github.com/thebestornothing/stream-chat-android.git'\n                        url = 'https://github.com/thebestornothing/stream-chat-android/tree/main'\n                    }\n                }\n            }\n        }\n    }\n}\n\n// For signing you need to make signingKey and signingPassword available properties\n// SIGNING_PASSWORD: ${{ secrets.SIGNING_PASSWORD }}\n// SIGNING_KEY: ${{ secrets.SIGNING_KEY }}\n// After making the github action secrets above available, you can try publish in the github workflow\n// ./gradlew signMavenPublication\n//\ndef hasSigningKey = rootProject.ext[\"signing.keyId\"] || rootProject.ext[\"signing.key\"]\nif(hasSigningKey) {\n    sign(project)\n}\nvoid sign(Project project) {\n    project.signing {\n        required { project.gradle.taskGraph.hasTask(\"publish\") }\n        def signingKeyId = rootProject.ext[\"signing.keyId\"]\n        def signingKey = rootProject.ext[\"signing.key\"]\n        def signingPassword = rootProject.ext[\"signing.password\"]\n        if (signingKeyId) {\n            useInMemoryPgpKeys(signingKeyId, signingKey, signingPassword)\n        } else if (signingKey) {\n            useInMemoryPgpKeys(signingKey, signingPassword)\n        }\n        sign publishing.publications\n    }\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"version-configuraiton",children:"Version configuraiton"}),"\n",(0,t.jsx)(n.p,{children:"Finally see the group ID, artifact ID, and version being set, so that the publication script can make use of them. Then, the script itself is applied. This is all the code you need to add per-module if you are publishing your library in multiple artifacts, everything else is done by the common script."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="buildSrc/Configuration.kt"',children:'object Configuration {\n    const val compileSdk = 34\n    const val targetSdk = 34\n    const val sampleTargetSdk = 34\n    const val minSdk = 21\n    const val majorVersion = 6\n    const val minorVersion = 0\n    const val patchVersion = 8\n    const val myVersion = 2\n    const val versionName = "$majorVersion.$minorVersion.$patchVersion.$myVersion"\n    const val snapshotVersionName = "$majorVersion.$minorVersion.${patchVersion + 1}-SNAPSHOT"\n    const val artifactGroup = "io.gitcoins"\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"github-action-integration",children:"Github Action integration"}),"\n",(0,t.jsx)(n.p,{children:"Since the library is hosted on GitHub anyway, we use GitHub Actions for running the publication Gradle tasks automatically. Whatever CI solution you\u2019re using, setting up publication with it will consist of two main steps:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Getting your secret variables in place."}),"\n",(0,t.jsx)(n.li,{children:"Invoking the two Gradle tasks."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Your secret variables - for the list of these, look at the publishing script again - can simply go into Repository secrets (Add each of these by going to Settings -> Secrets within your GitHub repository). All the variables will be show in the ",(0,t.jsx)(n.a,{href:"https://github.com/TheBestOrNothing/stream-chat-android/settings/secrets/actions",children:"Actions secrets and variables"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Now, let\u2019s create the GitHub Actions workflow that will put all of this together. The configuration for this will go in the .github/workflows/publish.yml file of the repository. This publish workflow will run every time a new release is created in the repository (you can also change the triggers to run when a tag is created, for example)."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="workflows/publish-my.yml"',children:"name: PublishGitcoins\n\non:\n  push:\n    tags:\n      - '[0-9]+\\.[0-9]+\\.[0-9]+\\.[0-9]+'\n\njobs:\n  publish:\n    name: Release build and publish beta\n    runs-on: ubuntu-22.04\n    steps:\n      - name: Check out code\n        uses: actions/checkout@v3.1.0\n      - name: Set up JDK 17\n        uses: actions/setup-java@v3.6.0\n        with:\n          distribution: adopt\n          java-version: 17\n      - name: Release build\n        # assembleRelease for all modules, excluding non-library modules: samples, docs\n        run: ./gradlew assembleRelease -x :stream-chat-android-ui-components-sample:assembleRelease -x :stream-chat-android-compose-sample:assembleRelease -x :stream-chat-android-docs:assembleRelease\n      - name: Source jar and dokka\n        run: ./gradlew androidSourcesJar javadocJar\n      - name: Publish to MavenCentral\n        run: ./gradlew publishReleasePublicationToSonatypeRepository --max-workers 1 closeAndReleaseSonatypeStagingRepository\n        env:\n          OSSRH_TOKEN_USERNAME: ${{ secrets.OSSRH_TOKEN_USERNAME }}\n          OSSRH_TOKEN_PASSWORD: ${{ secrets.OSSRH_TOKEN_PASSWORD }}\n          SIGNING_PASSWORD: ${{ secrets.SIGNING_PASSWORD }}\n          SIGNING_KEY: ${{ secrets.SIGNING_KEY }}\n          SONATYPE_STAGING_PROFILE_ID: ${{ secrets.SONATYPE_STAGING_PROFILE_ID }}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"your-first-release",children:"Your first release"}),"\n",(0,t.jsxs)(n.p,{children:["After adapt the code of ",(0,t.jsx)(n.a,{href:"https://github.com/TheBestOrNothing/stream-chat-android",children:"stream-chat-android"})," and create new tag like v6.0.8-beta16, the workflow action will be triggered."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'git tag -a v6.0.8-beta16 -m "v6.0.8.2 publish"\ngit push origin v6.0.8-beta16\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Go to ",(0,t.jsx)(n.a,{href:"https://github.com/TheBestOrNothing/stream-chat-android/actions",children:"action page"})," in the repository, lookup the detailed info in the running workflow. After the workflow run successfully, go to the ",(0,t.jsx)(n.a,{href:"https://s01.oss.sonatype.org/#stagingProfiles;638cedd9d39c2",children:"Nexus Repository Manager"})," and in the menu on the left, select Staging repositories.Search or find your repository (search gitcoins in the Artifact Search), which has your group ID in its name. If you select it and look at the Content tab, you\u2019ll see the files that have been published."]}),"\n",(0,t.jsx)(n.h2,{id:"using-the-publish-library",children:"Using the publish library"}),"\n",(0,t.jsx)(n.h3,{id:"create-new-project-in-android-studio",children:"Create new Project in Android studio"}),"\n",(0,t.jsx)(n.p,{children:"To get started with the Jetpack Compose version of the Android Chat SDK, open Android Studio (Giraffe or newer) and create a new project."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Select the Empty Activity template"}),"\n",(0,t.jsx)(n.li,{children:"Name the project ChatTutorial"}),"\n",(0,t.jsx)(n.li,{children:"Set the package name to com.example.chattutorial"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"add-stream-chat-compose-sdk",children:"Add Stream Chat Compose SDK"}),"\n",(0,t.jsxs)(n.p,{children:["Let's add the Stream Chat Compose SDK to the project's dependencies. ",(0,t.jsx)(n.strong,{children:"io.gitcoins:stream-chat-android-compose:6.0.8.2"})," and ",(0,t.jsx)(n.strong,{children:"io.gitcoins:stream-chat-android-offline:6.0.8.2"})," are coming from Nexus Repository which have been published according to this guide."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="build.gradle"',children:'dependencies {\n\n    implementation("io.gitcoins:stream-chat-android-compose:6.0.8.2")\n    implementation("io.gitcoins:stream-chat-android-ui-utils:6.0.8.2")\n    implementation("io.gitcoins:stream-chat-android-offline:6.0.8.2")\n\n    //implementation("io.getstream:stream-chat-android-compose:6.0.8")\n    //implementation("io.getstream:stream-chat-android-offline:6.0.8")\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},71670:(e,n,i)=>{i.d(n,{Z:()=>r,a:()=>o});var t=i(27378);const a={},s=t.createContext(a);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);