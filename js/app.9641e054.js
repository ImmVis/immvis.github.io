(function(){"use strict";var e={618:function(e,n,a){var t=a(9242),i=a(5068),o=(a(2166),a(3396));function r(e,n,a,t,i,r){const s=(0,o.up)("HeaderBar"),l=(0,o.up)("router-view"),c=(0,o.up)("FooterBar");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(s),(0,o.Wm)(l),(0,o.Wm)(c)],64)}var s=a(7139);const l=e=>((0,o.dD)("data-v-d74b6d1c"),e=e(),(0,o.Cn)(),e),c={class:"navbar navbar-expand-sm navbar-light bg-light"},d={class:"container-fluid"},u=l((()=>(0,o._)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,o._)("span",{class:"navbar-toggler-icon"})],-1))),m={class:"collapse navbar-collapse",id:"navbarSupportedContent"},p={class:"navbar-nav me-auto mb-2 mb-sm-0"};function h(e,n,a,t,i,r){const l=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("nav",c,[(0,o._)("div",d,[u,(0,o._)("div",m,[(0,o._)("ul",p,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(i.pages,(n=>((0,o.wg)(),(0,o.iD)("li",{key:n.route,class:"nav-item"},[(0,o.Wm)(l,{to:{name:n.route},class:(0,s.C_)(["nav-link",{active:e.$route.name==n.route,disabled:!n.enabled}])},{default:(0,o.w5)((()=>[(0,o.Uk)((0,s.zw)(n.title),1)])),_:2},1032,["to","class"])])))),128))])])])])}var g={data(){return{pages:[{route:"Home",title:"ImmVis",enabled:!0},{route:"Staff",title:"Staff",enabled:!1},{route:"Research",title:"Research",enabled:!1},{route:"Courses",title:"Courses",enabled:!1},{route:"ExjobbList",title:"Exjobb",enabled:!0}]}}},f=a(89);const b=(0,f.Z)(g,[["render",h],["__scopeId","data-v-d74b6d1c"]]);var v=b;const w=e=>((0,o.dD)("data-v-650ffc63"),e=e(),(0,o.Cn)(),e),y={class:"navbar navbar-expand-sm navbar-light"},k={class:"container-fluid"},_=w((()=>(0,o._)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,o._)("span",{class:"navbar-toggler-icon"})],-1)));function j(e,n,a,t,i,r){const l=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("nav",y,[(0,o._)("div",k,[(0,o.Wm)(l,{to:{name:"Home"},class:(0,s.C_)(["navbar-brand",{active:e.$route.name==e.name}])},{default:(0,o.w5)((()=>[(0,o.Uk)(" ImmVis ")])),_:1},8,["class"]),_])])}var x={data(){return{}}};const D=(0,f.Z)(x,[["render",j],["__scopeId","data-v-650ffc63"]]);var C=D,T={name:"App",components:{HeaderBar:v,FooterBar:C}};const I=(0,f.Z)(T,[["render",r]]);var S=I,B=a(2483);const E=e=>((0,o.dD)("data-v-66b2acf8"),e=e(),(0,o.Cn)(),e),z={class:"container"},M=E((()=>(0,o._)("h1",null,"ImmVis",-1))),A=E((()=>(0,o._)("p",null,"Under construction",-1))),O=E((()=>(0,o._)("hr",null,null,-1)));function L(e,n,a,t,i,r){const s=(0,o.up)("BannerBar"),l=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(s,{title:"Immersive Visualization"}),(0,o._)("div",z,[M,A,O,(0,o.Wm)(l,{to:{name:"ExjobbList"},class:""},{default:(0,o.w5)((()=>[(0,o.Uk)(" Click here to view all available exjobbs. ")])),_:1})])],64)}const R={class:"jumbotron p-4 mb-5"},H={class:"container py-5"},P={class:"display-5 text-white"};function V(e,n,a,t,i,r){return(0,o.wg)(),(0,o.iD)("div",R,[(0,o._)("div",H,[(0,o._)("h1",P,(0,s.zw)(a.title),1)])])}var F={name:"BannerBar",props:["title"]};const Y=(0,f.Z)(F,[["render",V],["__scopeId","data-v-513fd299"]]);var q=Y,N={name:"HomePage",components:{BannerBar:q},props:{msg:String}};const W=(0,f.Z)(N,[["render",L],["__scopeId","data-v-66b2acf8"]]);var J=W;function U(e,n,a,t,i,o){return" STAFF PAGE "}var Z={name:"StaffPage",props:{msg:String}};const K=(0,f.Z)(Z,[["render",U]]);var G=K;function $(e,n,a,t,i,o){return" RESEARCH PAGE "}var Q={name:"ResearchPage",props:{msg:String}};const X=(0,f.Z)(Q,[["render",$]]);var ee=X;function ne(e,n,a,t,i,o){return" COURSES PAGE "}var ae={name:"CoursesPage",props:{msg:String}};const te=(0,f.Z)(ae,[["render",ne]]);var ie=te;const oe=e=>((0,o.dD)("data-v-f6e75b58"),e=e(),(0,o.Cn)(),e),re={class:"container"},se=oe((()=>(0,o._)("h1",null,"Exjobb",-1))),le={class:"table"},ce=oe((()=>(0,o._)("thead",null,[(0,o._)("tr",null,[(0,o._)("th",{scope:"col"},"Title"),(0,o._)("th",{scope:"col"},"Location"),(0,o._)("th",{scope:"col"},"Students")])],-1)));function de(e,n,a,t,i,r){const l=(0,o.up)("BannerBar"),c=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(l,{title:"Immersive Visualization"}),(0,o._)("div",re,[se,(0,o._)("table",le,[ce,(0,o._)("tbody",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(i.projectList,((e,n)=>((0,o.wg)(),(0,o.iD)("tr",{key:n},[(0,o._)("td",null,[(0,o.Wm)(c,{to:{name:"Exjobb",params:{jobbId:e.id}}},{default:(0,o.w5)((()=>[(0,o.Uk)((0,s.zw)(e.title),1)])),_:2},1032,["to"])]),(0,o._)("td",null,(0,s.zw)(e.location),1),(0,o._)("td",null,(0,s.zw)(e.students),1)])))),128))])])])],64)}const ue="\n#### Description\n\nVideo streams constitute a large part of the daily internet traffic. A one hour long video at 4K resolution and 25 frames per second requires about 2TB of storage if no compression is applied. As a result, it is of utmost need to find solutions to intelligently transfer/use such large amounts of data. Modern video codecs have enabled the streaming of video data over the internet, in real-time, e.g., in a video call, or as demanded, such as YouTube video streaming or Netflix movies. In recent years, there have been some attempts to the standardization of machine learning approaches in video codecs such as MPEG video coding for machine (VCM) standards for machine-to-machine (M2M) or machine-to-human (M2H) communications, as well as JPEG AI, and JVET Neural Network Video Coding (NNVC). This project aims to employ an unsupervised machine learning approach for encoding and decoding a video using sparse representations and applying fast and accurate quantization and entropy coding on the resulting sparse coefficients.\n\n\n#### Your tasks\n\nExplore using machine learning methods to develop a codec for video streaming. The codec consists of both an encoder and a decoder. You will use an unsupervised machine learning method, named AMDE, to learn a sparse representation of the dataset from a training set. The video frames are then transformed into sparse coefficients which are then quantized and further compressed using an entropy coding algorithm such as Huffman coding. You will carry out an analysis of the quality of the codec in terms of compression efficiency and encoding latency in comparison with state-of-the-art video codec approaches. The source code and required tools for utilizing AMDE will be provided.\n\n\n#### Your profile\n\nWe are looking for 1 student with an interest in machine learning, image processing, and computer graphics.\n\n\n#### Information\n\nResearch group: Computer graphics and image processing\n\nContact person: Saghi Hajisharif and Ehsan Miandji\n\nLocation: The division for Media and Information Technology, Campus Norrköping\n\nKeywords:\n* machine learning\n* image processing\n* compression\n* rendering\n\nLevel: Master\n";var me={id:"hajisharif_miandji_video_compression",title:"A learning-based video compression with sparse representation and entropy coding",description:"",contact:[{name:"Saghi Hajisharif",url:"https://liu.se/medarbetare/sagha08",image:"https://liu.se/-/media/employeeimages/08/employee_image_sagha08.jpeg"},{name:"Ehsan Miandji",url:"https://liu.se/medarbetare/miaeh27",image:"https://liu.se/-/media/employeeimages/27/employee_image_miaeh27.jpeg"}],location:"Norrköping",students:1,image:null,markdown:ue},pe=a.p+"img/brdf_render.5d14ffbf.png";const he="\n#### Description\n\nPhoto-realistic rendering requires accurate modeling of the appearance of real-world materials using the bidirectional reflectance distribution function (BRDF). There are various ways to model BRDFs, and in practice due to their compact and flexible form, analytic BRDF models are often employed to estimate the surface properties. However, these models despite being efficient for rendering, are not very realistic. Measured BRDFs on the other hand can accurately model a realistic appearance, but they are often computationally expensive and consume significantly more memory, which makes them impractical for real-world applications. It has been shown, however, with sparse modeling of measured BRDFs, a non-parametric model can be defined that reduces the dimensionality of the BRDF, and therefore the rendering cost. Sparse modeling enables rendering speeds competitive with analytical models while admitting realistic modeling of BRDFs.\n\n\n#### Your tasks\n\nYou will explore how non-parametric sparse BRDF modeling can be utilized for realistic rendering. You will modify an existing ray tracer such as PBRT/Mitsuba or write your own ray tracer to employ the non-parametric BRDF model and analyze the capability of this model for fast and realistic rendering. The source code and required tools for sparse BRDF modeling is available. An analysis of how the parameters of sparse modeling affect the quality and efficiency of rendering is required as well.\n\n\n#### Your profile\n\nWe are looking for 1-2 students with a background in machine learning and computer graphics.\n\n\n#### Information\n\nResearch group: Computer graphics and image processing\n\nContact person: Saghi Hajisharif and Ehsan Miandji\n\nLocation: The division for Media and Information Technology, Campus Norrköping\n\nKeywords:\n* machine learning\n* rendering\n* BRDF\n* sparse representations\n\nLevel: Master\n";var ge={id:"hajisharif_miandji_learning_based_rendering",title:"Learning-based rendering using a data-driven BRDF model",description:"",contact:[{name:"Saghi Hajisharif",url:"https://liu.se/medarbetare/sagha08",image:"https://liu.se/-/media/employeeimages/08/employee_image_sagha08.jpeg"},{name:"Ehsan Miandji",url:"https://liu.se/medarbetare/miaeh27",image:"https://liu.se/-/media/employeeimages/27/employee_image_miaeh27.jpeg"}],location:"Norrköping",students:1,image:pe,markdown:he},fe=a.p+"img/neural.22e24627.png";const be="\n#### Description\n\nFeature visualization answers questions about what a neural network — or parts of a network — are looking for by generating examples. If we want to understand individual features, we can search for examples where they have high values as exemplified in the images above. However, they can be hard to interpret and the correctness of current implementations are questionable due to a lack of ground truth comparisons. Furthermore, the initial implementation for the technique is based on the outdated Tensorflow 1, which does not even run anymore.\n\n\n#### Your tasks\n\nInvestigate different techniques for generating feature visualizations. For example, by optimizing for a given set of values instead of only the high values. Also try to create verifiable visualizations that can serve as a basis for Tensorflow 2 and/or PyTorch implementations.\n\n\n#### Your profile\n\nWe are looking for 1 student with an interest in machine learning and visualization.\n\n\n#### Information\n\nResearch group: Computer graphics and image processing\n\nContact person: Daniel Jönsson\n\nLocation: The division for Media and Information Technology, Campus Norrköping\n\nKeywords:\n* machine learning\n* visualization\n\nLevel: Master\n";var ve={id:"jonsson_neural_network_visualization",title:"Neural network feature visualization",description:"",contact:[{name:"Daniel Jönsson",url:"https://liu.se/medarbetare/danjo37",image:"https://liu.se/-/media/employeeimages/37/employee_image_danjo37.jpeg"}],location:"Norrköping",students:1,image:fe,markdown:be};const we="\n#### Description\n\nDesigning, creating, and studying are all iterative, reflective process and we are interested in recording, organising, and visually exploring the artifacts and notes that are generated during these processes. We are looking for a MS student interested in diving into this design and engineering space to implement an interactive web-based visualization tool to support such reflection, navigation, and reporting of iterative practices. You will work with the APIs of cloud-based note-taking services like Notion or Evernote and js languages like d3 and Vue/React. We will work iteratively to develop the tool with design and visualization best practices. This project will take place in collaboration with students and faculty in the new Vis Collective research lab.\n";var ye={id:"akbaba_tracing_research_insights",title:"Tracing Research Insights",description:"Designing, creating, and studying are all iterative, reflective process and we are interested in recording, organising, and visually exploring the artifacts and notes that are generated during these processes. We are looking for a MS student interested in diving into this design and engineering space to implement an interactive web-based visualization tool to support such reflection, navigation, and reporting of iterative practices. You will work with the APIs of cloud-based note-taking services like Notion or Evernote and js languages like d3 and Vue/React. We will work iteratively to develop the tool with design and visualization best practices. This project will take place in collaboration with students and faculty in the new Vis Collective research lab.",contact:[{name:"Derya Akbaba",url:"https://liu.se/en/employee/derak07",image:"https://liu.se/-/media/employeeimages/07/employee_image_derak07.jpeg"}],location:"Norrköping",students:1,image:null,markdown:we};const ke="\n[OpenSpace](https://openspaceproject.com) is an open-source software that aims to visualize our entire known universe in its accurate context.  It is a mature software that can be used by anyone to tell stories about the cosmos and our place in it.  One of the fundamental goals from early in the design was the desire for users to share live presentations from geographically distant locations;  being able to experience the same presentation from different places on Earth.  This feature enables multiple presenters to hand-off control between each other for a truly collaborative presentation to multiple audiences.  Thus far, this goal has remained elusive.  The support for ad-hoc sessions exists, but it requires a level of setup that is infeasible for the average user.  This project will require familiarity with C++ and JavaScript/TypeScript.\n\nThe goal of this Exjobb is to develop a system that can be used by anyone in the world running OpenSpace to host a session that can be discovered and joined by other OpenSpace users across the globe.  This work consists of two parts:\n  1. Designing a webpage where users can create sessions they are hosting than can be either private or public.  Other users can discover ongoing sessions and choose to join them from within OpenSpace.\n  1. Developing the underlying backend infrastructure to ensure that the configuration options within OpenSpace are compatible enough when joining a session.  This would include synchronizing required resources to the joining party, detecting optional and non-optional dependencies.\n\n##### Useful links\n- High-level academic description: Section 4.3 of [this paper](https://alexanderbock.github.io/papers/vis19-bock-openspace-system.pdf)\n- [Example usage of a very basic earlier implementation](https://www.youtube.com/watch?v=oEFz5JxLd8w)\n\n## Application\n\x3c!--\nPlease send an email indicating your interest for this or other thesis works to [emma.broman@liu.se](mailto:emma.broman@liu.se) including your CV/LinkedIn and a Ladok transcript of courses until EOD **15th of October, 2022**. If you are already a pair wanting to work on the thesis together or you are interested in multiple thesis works, a single email will suffice.\n\nApplications are accepted on a rolling basis.\n--\x3e\n\nApplications for this project are still accepted. Please send an email indicating your interest for this thesis work to [emma.broman@liu.se](mailto:emma.broman@liu.se), including your CV/LinkedIn and a Ladok transcript of courses. If you are already a pair wanting to work on the thesis together or you are interested in multiple thesis works, a single email will suffice.\n";var _e={id:"broman_astrocasting",title:"Connecting OpenSpace Users Across the Globe Using AstroCasting",description:"",contact:[{name:"Emma Broman",url:"https://liu.se/en/employee/emmbr26",image:"https://liu.se/-/media/employeeimages/26/employee_image_emmbr26.jpeg"},{name:"Alexander Bock",url:"https://liu.se/en/employee/alebo68",image:"https://liu.se/-/media/images/modules/foundation/contact/profile500x500.png"}],location:"Scientific Computing and Imaging Institute, University of Utah, Salt Lake City",students:2,image:null,markdown:ke};const je="\n\nTwo of the software packages developed at the MIT division are [OpenSpace](https://openspaceproject.com), an open-source astrovisualization software placing our known universe into context, and [VIAMD](https://github.com/scanberg/viamd), which is a powerful analysis tool for dynamic molecular simulations.  The goal of this thesis work is to combine the ability of OpenSpace to render in immersive display environments and the analysis capabilities of VIAMD which are designed for single flat-screen interaction.  The combination of these two software packages will enable the domain scientists to perform their analysis of complex molecular processes in, for example, planetariums, using VR headsets and more.  This project will require familiarity with C++.\n\n##### Useful links\n- [VIAMD manual](https://github.com/scanberg/viamd/wiki)\n- Draft of the previous paper on request\n\n## Application\n\x3c!--\nPlease send an email indicating your interest for this or other thesis works to [emma.broman@liu.se](mailto:emma.broman@liu.se) including your CV/LinkedIn and a Ladok transcript of courses until EOD **15th of October, 2022**. If you are already a pair wanting to work on the thesis together or you are interested in multiple thesis works, a single email will suffice. \n\nApplications are accepted on a rolling basis.\n--\x3e\n\nApplications for this project are still accepted. Please send an email indicating your interest for this thesis work to [emma.broman@liu.se](mailto:emma.broman@liu.se), including your CV/LinkedIn and a Ladok transcript of courses. If you are already a pair wanting to work on the thesis together or you are interested in multiple thesis works, a single email will suffice.\n";var xe={id:"broman_moldome",title:"Molecular Rendering in OpenSpace",description:"",contact:[{name:"Emma Broman",url:"https://liu.se/en/employee/emmbr26",image:"https://liu.se/-/media/employeeimages/26/employee_image_emmbr26.jpeg"},{name:"Alexander Bock",url:"https://liu.se/en/employee/alebo68",image:"https://liu.se/-/media/images/modules/foundation/contact/profile500x500.png"},{name:"Mathieu Linares",url:"https://liu.se/en/employee/matli20",image:"https://liu.se/-/media/employeeimages/20/employee_image_matli20.jpeg"}],location:"Norrköping",students:1,image:null,markdown:je},De=[me,ge,ve,ye,_e,xe],Ce={name:"ExjobbListPage",components:{BannerBar:q},data(){return{projectList:De}}};const Te=(0,f.Z)(Ce,[["render",de],["__scopeId","data-v-f6e75b58"]]);var Ie=Te;const Se=e=>((0,o.dD)("data-v-53bbfd16"),e=e(),(0,o.Cn)(),e),Be={class:"container"},Ee={class:"row"},ze={class:"col-md-12 col-lg-6 p-0"},Me={class:"p-3"},Ae={class:"table"},Oe=Se((()=>(0,o._)("th",null,"Location",-1))),Le=Se((()=>(0,o._)("th",null,"Number of people",-1))),Re=Se((()=>(0,o._)("th",null,"Contact",-1))),He=["src"],Pe=["href"],Ve={class:"col-md-12 col-lg-6 p-0 d-flex align-items-center image-box"},Fe={class:"p-3"},Ye=["src"],qe={key:1,src:"https://picsum.photos/800/200"},Ne=Se((()=>(0,o._)("hr",{class:"opacity-0 my-4"},null,-1))),We=["innerHTML"];function Je(e,n,a,t,i,r){const l=(0,o.up)("BannerBar");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(l,{title:"Immersive Visualization"}),(0,o._)("div",Be,[(0,o._)("h1",null,(0,s.zw)(r.myJobb.title),1),(0,o._)("div",Ee,[(0,o._)("div",ze,[(0,o._)("div",Me,[(0,o._)("table",Ae,[(0,o._)("tbody",null,[(0,o._)("tr",null,[Oe,(0,o._)("td",null,(0,s.zw)(r.myJobb.location),1)]),(0,o._)("tr",null,[Le,(0,o._)("td",null,(0,s.zw)(r.myJobb.students),1)]),(0,o._)("tr",null,[Re,(0,o._)("td",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(r.myJobb.contact,(e=>((0,o.wg)(),(0,o.iD)("div",{key:e.name,class:"contact"},[(0,o._)("img",{src:e.image},null,8,He),(0,o._)("a",{href:e.url},(0,s.zw)(e.name),9,Pe)])))),128))])])])])])]),(0,o._)("div",Ve,[(0,o._)("div",Fe,[r.myJobb.image?((0,o.wg)(),(0,o.iD)("img",{key:0,src:r.myJobb.image},null,8,Ye)):((0,o.wg)(),(0,o.iD)("img",qe))])])]),Ne,(0,o._)("div",{innerHTML:r.markdown},null,8,We)])],64)}var Ue={name:"ExjobbPage",props:["jobbId"],components:{BannerBar:q},data(){return{}},computed:{myJobb(){return De.find((e=>e.id==this.jobbId))},markdown(){return this.md(this.myJobb.markdown)}}};const Ze=(0,f.Z)(Ue,[["render",Je],["__scopeId","data-v-53bbfd16"]]);var Ke=Ze;const Ge=[{path:"/",name:"Home",component:J},{path:"/staff",name:"Staff",component:G},{path:"/research",name:"Research",component:ee},{path:"/courses",name:"Courses",component:ie},{path:"/exjobb-mit",name:"ExjobbList",component:Ie},{path:"/exjobb-mit/:jobbId([a-z0-9_]+)",name:"Exjobb",component:Ke,props:!0}],$e=(0,B.p7)({mode:"history",history:(0,B.r5)(),routes:Ge});var Qe=$e;const Xe={methods:{md:e=>(0,i.TU)(e)}},en=(0,t.ri)(S);en.use(Qe),en.mixin(Xe),en.mount("#app")}},n={};function a(t){var i=n[t];if(void 0!==i)return i.exports;var o=n[t]={exports:{}};return e[t](o,o.exports,a),o.exports}a.m=e,function(){var e=[];a.O=function(n,t,i,o){if(!t){var r=1/0;for(d=0;d<e.length;d++){t=e[d][0],i=e[d][1],o=e[d][2];for(var s=!0,l=0;l<t.length;l++)(!1&o||r>=o)&&Object.keys(a.O).every((function(e){return a.O[e](t[l])}))?t.splice(l--,1):(s=!1,o<r&&(r=o));if(s){e.splice(d--,1);var c=i();void 0!==c&&(n=c)}}return n}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[t,i,o]}}(),function(){a.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(n,{a:n}),n}}(),function(){a.d=function(e,n){for(var t in n)a.o(n,t)&&!a.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){a.p="/"}(),function(){var e={143:0};a.O.j=function(n){return 0===e[n]};var n=function(n,t){var i,o,r=t[0],s=t[1],l=t[2],c=0;if(r.some((function(n){return 0!==e[n]}))){for(i in s)a.o(s,i)&&(a.m[i]=s[i]);if(l)var d=l(a)}for(n&&n(t);c<r.length;c++)o=r[c],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(d)},t=self["webpackChunkimmvis"]=self["webpackChunkimmvis"]||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))}();var t=a.O(void 0,[998],(function(){return a(618)}));t=a.O(t)})();
//# sourceMappingURL=app.9641e054.js.map