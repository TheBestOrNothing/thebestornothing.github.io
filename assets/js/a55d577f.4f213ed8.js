"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[86777],{61167:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/rest-proxy-security-workflow-178d07634974cc1d2e709ce6fe7bab68.png"},61338:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=s(24246),r=s(71670);const a={id:"guides-kafkarestapis-authorization",description:"Create a Markdown Document"},o="Smart authorization",i={id:"guides/docs/guides-kafkarestapis-authorization",title:"Smart authorization",description:"Create a Markdown Document",source:"@site/docs/guides/docs/guides-kafkarestapis-authorization.mdx",sourceDirName:"guides/docs",slug:"/guides/docs/guides-kafkarestapis-authorization",permalink:"/docs/next/guides/docs/guides-kafkarestapis-authorization",draft:!1,unlisted:!1,editUrl:"https://github.com/thebestornothing/thebestornothing.github.io/edit/main/website/docs/guides/docs/guides-kafkarestapis-authorization.mdx",tags:[],version:"current",lastUpdatedBy:"Gitcoins",lastUpdatedAt:1726634554,formattedLastUpdatedAt:"Sep 18, 2024",frontMatter:{id:"guides-kafkarestapis-authorization",description:"Create a Markdown Document"},sidebar:"woofwoof",previous:{title:"Anonymous authentication",permalink:"/docs/next/guides/docs/guides-kafkarestapis-authentication"},next:{title:"REST producer",permalink:"/docs/next/guides/docs/guides-kafkarestapis-producer"}},l={},c=[{value:"API availability",id:"api-availability",level:2},{value:"Get the local cluster information",id:"get-the-local-cluster-information",level:3},{value:"Get a list of topics",id:"get-a-list-of-topics",level:3},{value:"Features",id:"features",level:2},{value:"Architecture and workflow",id:"architecture-and-workflow",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"smart-authorization",children:"Smart authorization"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.a,{href:"https://github.com/confluentinc/kafka-rest",children:(0,n.jsx)(t.strong,{children:"Kafka REST Proxy"})})," provides a RESTful interface to a Kafka cluster. It makes it easy to produce and consume data, view the state of the cluster, and perform administrative actions without using the native Kafka protocol or clients. Examples of use cases include reporting data to Kafka from any front-end app built in any language, ingesting data into a stream processing framework that doesn't yet support Kafka, and scripting administrative actions."]}),"\n",(0,n.jsx)(t.p,{children:"Some example use cases are:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Reporting data to Kafka from any frontend app (",(0,n.jsx)(t.strong,{children:"Android and IOS"}),") built in any language not supported by official Confluent clients"]}),"\n",(0,n.jsx)(t.li,{children:"In  gesting messages into a stream processing framework that doesn\u2019t yet support Kafka"}),"\n",(0,n.jsx)(t.li,{children:"Scripting administrative actions"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"There is a plugin available for REST Proxy that helps authenticate incoming requests and propagates the authenticated principal to requests to Kafka. This enables REST Proxy clients to utilize the multi-tenant security features of the Kafka broker. For more information, see REST Proxy Security and REST Proxy Security Plugins."}),"\n",(0,n.jsx)(t.h2,{id:"api-availability",children:"API availability"}),"\n",(0,n.jsxs)(t.p,{children:["The v3 API is the latest version of the API. The cluster ID is a path parameter to enable a REST Proxy to work with multiple Kafka clusters. API responses often contain links to related resources, such as the list of a topic's partitions. The content type is always ",(0,n.jsx)(t.code,{children:"application/json"}),". Here are two examples to show how API used."]}),"\n",(0,n.jsx)(t.h3,{id:"get-the-local-cluster-information",children:"Get the local cluster information"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:'$ curl http://localhost:8082/v3/clusters\n\nResponse:\n  {"kind":"KafkaClusterList",\n   "metadata":{"self":"http://localhost:8082/v3/clusters","next":null},\n   "data":[\n    {"kind":"KafkaCluster",\n     "metadata":{"self":"http://localhost:8082/v3/clusters/xFhUvurESIeeCI87SXWR-Q",\n     "resource_name":"crn:///kafka=xFhUvurESIeeCI87SXWR-Q"},\n     "cluster_id":"xFhUvurESIeeCI87SXWR-Q",\n     "controller":{"related":"http://localhost:8082/v3/clusters/xFhUvurESIeeCI87SXWR-Q/brokers/0"},\n     "acls":{"related":"http://localhost:8082/v3/clusters/xFhUvurESIeeCI87SXWR-Q/acls"},\n     "brokers":{"related":"http://localhost:8082/v3/clusters/xFhUvurESIeeCI87SXWR-Q/brokers"},\n     "broker_configs":{"related":"http://localhost:8082/v3/clusters/xFhUvurESIeeCI87SXWR-Q/broker-configs"},\n     "consumer_groups":{"related":"http://localhost:8082/v3/clusters/xFhUvurESIeeCI87SXWR-Q/consumer-groups"},\n     "topics":{"related":"http://localhost:8082/v3/clusters/xFhUvurESIeeCI87SXWR-Q/topics"},\n     "partition_reassignments":{"related":"http://localhost:8082/v3/clusters/xFhUvurESIeeCI87SXWR-Q/topics/-/partitions/-/reassignment"}\n    }\n   ]\n  }\n'})}),"\n",(0,n.jsx)(t.h3,{id:"get-a-list-of-topics",children:"Get a list of topics"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:'$ curl http://localhost:8082/v3/clusters/xFhUvurESIeeCI87SXWR-Q/topics\n\nResponse:\n  {"kind":"KafkaTopicList",\n   "metadata":{"self":"http://localhost:8082/v3/clusters/xFhUvurESIeeCI87SXWR-Q/topics","next":null},\n   "data":[\n    {"kind":"KafkaTopic",\n     "metadata":{"self":"http://localhost:8082/v3/clusters/xFhUvurESIeeCI87SXWR-Q/topics/jsontest",\n     "resource_name":"crn:///kafka=xFhUvurESIeeCI87SXWR-Q/topic=jsontest"},\n     "cluster_id":"xFhUvurESIeeCI87SXWR-Q",\n     "topic_name":"jsontest",\n     "is_internal":false,\n     "replication_factor":1,\n     "partitions_count":1,\n     "partitions":{"related":"http://localhost:8082/v3/clusters/xFhUvurESIeeCI87SXWR-Q/topics/jsontest/partitions"},\n     "configs":{"related":"http://localhost:8082/v3/clusters/xFhUvurESIeeCI87SXWR-Q/topics/jsontest/configs"},\n     "partition_reassignments":{"related":"http://localhost:8082/v3/clusters/xFhUvurESIeeCI87SXWR-Q/topics/jsontest/partitions/-/reassignment"}\n    }\n   ]\n  }\n'})}),"\n",(0,n.jsx)(t.h2,{id:"features",children:"Features"}),"\n",(0,n.jsx)(t.p,{children:"The following functionality is currently exposed and available through REST APIs."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Metadata"})," - Most metadata about the cluster \u2013 brokers, topics, partitions, and configs \u2013 can be read using GET requests for the corresponding URLs."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Producers"})," - Instead of exposing producer objects, the API accepts produce requests targeted at specific topics or partitions and routes them all through a small pool of producers."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Producer configuration"})," - Producer instances are shared, so configs cannot be set on a per-request basis. However, you can adjust settings globally by passing new producer settings in the REST Proxy configuration. For example, you might pass in the compression.type option to enable site-wide compression to reduce storage and network overhead."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Consumer"}),"s - Consumers are stateful and therefore tied to specific REST Proxy instances. Offset commit can be either automatic or explicitly requested by the user. Currently limited to one thread per consumer; use multiple consumers for higher throughput. The REST Proxy uses either the high level consumer (v1 api) or the new 0.9 consumer (v2 api) to implement consumer-groups that can read from topics."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Data Formats"})," - The REST Proxy can read and write data using JSON, raw bytes encoded with base64 or using JSON-encoded Avro, Protobuf, or JSON Schema. With Avro, Protobuf, or JSON Schema, schemas are registered and validated against Schema Registry."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"REST Proxy Clusters and Load Balancing"})," - The REST Proxy is designed to support multiple instances running together to spread load and can safely be run behind various load balancing mechanisms (e.g. round robin DNS, discovery services, load balancers) as long as instances are configured correctly."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Simple Consumer"})," - The high-level consumer should generally be preferred. However, it is occasionally useful to use low-level read operations, for example to retrieve messages at specific offsets."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Admin operations"})," - With the API v3, you can create or delete topics, and update or reset topic configurations. For hands-on examples, see the Confluent Admin REST APIs demo. (To start the demo, clone the Confluent demo-scene repository from GitHub then follow the guide for the Confluent Admin REST APIs demo.)"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"architecture-and-workflow",children:"Architecture and workflow"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:s(61167).Z+"",width:"747",height:"333"})}),"\n",(0,n.jsx)(t.p,{children:"Here is a summary of the RBAC REST Proxy security workflow:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"A user makes REST API call to REST Proxy using LDAP credentials for HTTP Basic Authentication."}),"\n",(0,n.jsx)(t.li,{children:"REST Proxy authenticates the user with the MDS by acquiring a token for the authenticated user."}),"\n",(0,n.jsx)(t.li,{children:"The generated token is used to impersonate the user request and authenticate between Kafka clients and the Kafka cluster. For Kafka clients, the SASL_PLAINTEXT/SASL_SSL security protocol is used and the proprietary callback handler passes the token to the Kafka cluster. Similarly, when communicating with Schema Registry, the authentication token is passed to the Schema Registry client using a proprietary implementation of the BearerAuthCredentialProvider interface."}),"\n",(0,n.jsx)(t.li,{children:"If the user does not have the requisite role or ACL permission for the requested resource (for example, topic, group, or cluster), then the REST API call fails and returns an error with the HTTP 403 status code."}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},71670:(e,t,s)=>{s.d(t,{Z:()=>i,a:()=>o});var n=s(27378);const r={},a=n.createContext(r);function o(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);