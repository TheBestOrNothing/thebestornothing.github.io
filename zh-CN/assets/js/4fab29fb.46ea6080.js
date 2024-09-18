"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[49659],{5043:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/LLMs-in-AI-545bac2a559440086b0a9ac666682243.jpg"},67855:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/generativeAI-history-d15b6216e5fb3739d67dfa87c94afc92.png"},47503:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/generativeAI-mutliLayers-981e0f983de81e3efd568fa6baad3bf9.png"},12334:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/simple_vs_deep_neural_network-13e04af9db6fc586bf7b2c947525a90b.jpg"},10020:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var t=a(24246),r=a(71670);const i={description:"Create a rocketchat"},s="01 Introduction to Generative AI and LLMs",o={id:"chatGPT/chatGPT-LLMs",title:"01 Introduction to Generative AI and LLMs",description:"Create a rocketchat",source:"@site/docs/chatGPT/chatGPT-LLMs.mdx",sourceDirName:"chatGPT",slug:"/chatGPT/chatGPT-LLMs",permalink:"/zh-CN/docs/next/chatGPT/chatGPT-LLMs",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/docusaurus-v2/zh-CN",tags:[],version:"current",lastUpdatedBy:"Gitcoins",lastUpdatedAt:1726634554,formattedLastUpdatedAt:"2024\u5e749\u670818\u65e5",frontMatter:{description:"Create a rocketchat"},sidebar:"woofwoof",previous:{title:"ChatGPT",permalink:"/zh-CN/docs/next/category/chatgpt"},next:{title:"Getting Started",permalink:"/zh-CN/docs/next/category/getting-started"}},l={},d=[{value:"Deep Learning",id:"deep-learning",level:2},{value:"Generative AI",id:"generative-ai",level:2},{value:"Large Language Models (LLMs)",id:"large-language-models-llms",level:2},{value:"Relationship between Generative AI and LLMs",id:"relationship-between-generative-ai-and-llms",level:2},{value:"Transformers as the Foundation for LLMs",id:"transformers-as-the-foundation-for-llms",level:2},{value:"Neural Networks",id:"neural-networks",level:2},{value:"Transformers as Neural Networks",id:"transformers-as-neural-networks",level:2},{value:"Deep neural network",id:"deep-neural-network",level:2},{value:"Summary",id:"summary",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"01-introduction-to-generative-ai-and-llms",children:"01 Introduction to Generative AI and LLMs"}),"\n",(0,t.jsxs)(n.admonition,{title:"Useful links",type:"info",children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://microsoft.github.io/generative-ai-for-beginners/",children:(0,t.jsx)(n.code,{children:"Generative AI for Beginners: Learn the fundamentals of building Generative AI applications."})})}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://microsoft.github.io/AI-For-Beginners/",children:(0,t.jsx)(n.code,{children:"Artificial Intelligence for Beginners: Explore the world of AI with our 12-week."})})}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://microsoft.github.io/Data-Science-For-Beginners/",children:(0,t.jsx)(n.code,{children:"Data Science for Beginners: To offer a 10-week curriculum all about Data Science."})})})]}),"\n",(0,t.jsx)(n.h2,{id:"deep-learning",children:"Deep Learning"}),"\n",(0,t.jsxs)(n.p,{children:["how we came to Generative AI today, which can be seen as a subset of deep learning.\n",(0,t.jsx)(n.strong,{children:"Deep Learning: a machine learning technique in which layers of neural network are used to process data and make decisions."})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:'Deep learning is a subset of machine learning that uses deep neural networks. "Deep" refers to the number of hidden layers in the neural networks. These networks can learn and make intelligent decisions on their own.'}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Deep learning involves more complex neural networks with many layers."})}),"\n",(0,t.jsx)(n.li,{children:"Deep learning requires more data and computational power due to the complexity and depth of the neural networks."}),"\n",(0,t.jsx)(n.li,{children:"All deep learning models are neural networks"}),"\n"]}),"\n",(0,t.jsx)("p",{align:"center",children:(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:a(67855).Z+"",width:"975",height:"530"})})}),"\n",(0,t.jsx)(n.h2,{id:"generative-ai",children:"Generative AI"}),"\n",(0,t.jsx)(n.p,{children:"Generative AI encompasses a broad range of techniques and models that are designed to generate new data instances similar to the training data. It includes methods for creating text, images, music, and other forms of data."}),"\n",(0,t.jsx)(n.h2,{id:"large-language-models-llms",children:"Large Language Models (LLMs)"}),"\n",(0,t.jsx)(n.p,{children:"LLMs are a subset of generative AI models focused specifically on natural language processing. They are designed to understand, generate, and manipulate human language. Key characteristics of LLMs include:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Text Generation: The primary function of LLMs is to generate human-like text based on the input they receive."}),"\n",(0,t.jsx)(n.li,{children:"Understanding Context: LLMs are trained on large corpora of text to understand context, syntax, semantics, and even some aspects of common sense reasoning."}),"\n",(0,t.jsx)(n.li,{children:"Applications in NLP: They are used for various NLP tasks such as language translation, text summarization, question answering, and conversational agents."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"relationship-between-generative-ai-and-llms",children:"Relationship between Generative AI and LLMs"}),"\n",(0,t.jsxs)(n.p,{children:["Generative AI is a broad field that includes various techniques for generating synthetic data across different modalities. ",(0,t.jsx)(n.strong,{children:"Large Language Models (LLMs) are a specialized application within generative AI focused on text generation and understanding."})," Both leverage similar technologies, such as the Transformer architecture, and are trained on large datasets to produce coherent and contextually appropriate outputs."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Subset Relationship: LLMs are a specific type of generative AI model. While generative AI can create various types of data (images, audio, etc.), LLMs focus exclusively on generating and understanding text."}),"\n",(0,t.jsx)(n.li,{children:"Shared Techniques: Both generative AI and LLMs use similar underlying techniques, such as neural network architectures (e.g., Transformers), attention mechanisms, and large-scale training on diverse datasets."}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Transformers as a Common Foundation"}),': The Transformer architecture, introduced in the paper "Attention is All You Need," is a foundational model for both LLMs and other generative models. For LLMs, the Transformer architecture allows for effective handling of long-range dependencies and context in text data.']}),"\n",(0,t.jsx)(n.li,{children:"Training on Large Datasets: Both generative AI models and LLMs benefit from training on large and diverse datasets. For LLMs, this means vast corpora of text from books, websites, articles, and other sources."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"transformers-as-the-foundation-for-llms",children:"Transformers as the Foundation for LLMs"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Architectural Basis: Large Language Models (LLMs) like GPT-3, GPT-4, BERT, and T5 are built upon the Transformer architecture. The Transformer\u2019s ability to handle long-range dependencies and its efficient parallel processing capabilities make it ideal for training on large-scale textual data."}),"\n",(0,t.jsx)(n.li,{children:"Self-Attention Mechanism: The self-attention mechanism in Transformers allows LLMs to understand context over long distances in text. This mechanism is crucial for generating coherent and contextually relevant text, which is a key capability of LLMs."}),"\n",(0,t.jsx)(n.li,{children:"Scalability: Transformers scale well with increased data and computational resources. This scalability has enabled the development of LLMs with billions or even trillions of parameters, allowing them to generate more sophisticated and nuanced text."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"neural-networks",children:"Neural Networks"}),"\n",(0,t.jsx)(n.p,{children:"Neural networks are a class of machine learning models inspired by the human brain's structure and function. They consist of layers of interconnected nodes (neurons) where each connection has an associated weight. Key types of neural networks include:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Feedforward Neural Networks (FNNs): The simplest form, where connections do not form cycles."}),"\n",(0,t.jsx)(n.li,{children:"Convolutional Neural Networks (CNNs): Specialized for processing grid-like data such as images."}),"\n",(0,t.jsx)(n.li,{children:"Recurrent Neural Networks (RNNs): Designed for sequential data, maintaining a hidden state to capture temporal dependencies."}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Transformer Networks:"})," A more recent and advanced type of neural network, designed primarily for handling sequential data without relying on recurrence."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"transformers-as-neural-networks",children:"Transformers as Neural Networks"}),"\n",(0,t.jsxs)(n.p,{children:["Transformers are a specific architecture within the broader category of neural networks. They are particularly effective for natural language processing (NLP) and other tasks involving sequential data.\n",(0,t.jsx)(n.strong,{children:"Transformer is a type of neural network. Specifically, it is a deep learning model architecture designed to handle sequential data and is particularly well-suited for tasks involving natural language processing (NLP)."})]}),"\n",(0,t.jsx)(n.h2,{id:"deep-neural-network",children:"Deep neural network"}),"\n",(0,t.jsx)(n.p,{children:"On the figure below, on the left you see a simple neural network. The difference to a deep neural network (on the right) is clearly visible. A deep neural network is simply a neural network with many layers.\nThe extra layers provide a huge increase in computational power, which have allowed deep neural networks to reach amazing performance in multiple tasks."}),"\n",(0,t.jsx)("p",{align:"center",children:(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:a(12334).Z+"",width:"690",height:"259"})})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Input Layer: The neural network takes an input, which in this case is likely a set of images. These images are processed into a form that the neural network can understand, usually involving normalization and possibly resizing."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Hidden Layers: These consist of multiple layers of neurons (the circles in the diagram). Each layer transforms the input data into more abstract and composite representations. For instance:"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"The first hidden layer might detect edges or simple patterns in the image, such as lines and color contrasts."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"The second hidden layer may identify basic parts of faces like eyes, noses, and mouths."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Output Layer: This is where the network makes its final decision. In face recognition, the output layer would identify specific faces or characteristics of faces, possibly categorizing them into different classes (e.g., identifying individuals)."}),"\n"]}),"\n",(0,t.jsx)("p",{align:"center",children:(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:a(47503).Z+"",width:"1536",height:"787"})})}),"\n",(0,t.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,t.jsx)("p",{align:"center",children:(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:a(5043).Z+"",width:"800",height:"559"})})})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},71670:(e,n,a)=>{a.d(n,{Z:()=>o,a:()=>s});var t=a(27378);const r={},i=t.createContext(r);function s(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);