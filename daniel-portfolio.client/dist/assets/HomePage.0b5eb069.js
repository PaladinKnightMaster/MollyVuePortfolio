import{u as et,g as gt,o as yt,c as E,r as v,a as bt,b as O,n as wt,d as ot,w as G,e as st,f as xt,h as n,i,j as t,k as nt,l as it,_ as x,m as a,p as V,q as D,s as k,t as I,v as l,x as B,G as at,F as X,y as ct,A as T,z as w,B as y,C as W,D as $t,E as kt,T as K,H as J}from"./index.cec2fdfc.js";var q;const M=typeof window<"u",It=e=>typeof e=="string",St=()=>{};M&&((q=window==null?void 0:window.navigator)==null?void 0:q.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function Lt(e){return typeof e=="function"?e():et(e)}function jt(e){return e}function lt(e){return gt()?(yt(e),!0):!1}function Pt(e){return typeof e=="function"?E(e):v(e)}function Ot(e,s=!0){bt()?O(e):s?e():wt(e)}function dt(e){var s;const c=Lt(e);return(s=c==null?void 0:c.$el)!=null?s:c}const C=M?window:void 0;M&&window.document;M&&window.navigator;M&&window.location;function P(...e){let s,c,d,r;if(It(e[0])||Array.isArray(e[0])?([c,d,r]=e,s=C):[s,c,d,r]=e,!s)return St;Array.isArray(c)||(c=[c]),Array.isArray(d)||(d=[d]);const _=[],h=()=>{_.forEach(u=>u()),_.length=0},o=(u,f,b)=>(u.addEventListener(f,b,r),()=>u.removeEventListener(f,b,r)),p=st(()=>dt(s),u=>{h(),u&&_.push(...c.flatMap(f=>d.map(b=>o(u,f,b))))},{immediate:!0,flush:"post"}),g=()=>{p(),h()};return lt(g),g}function rt(e,s=!1){const c=v(),d=()=>c.value=Boolean(e());return d(),Ot(d,s),c}function Ct(e,s={}){const{window:c=C}=s,d=rt(()=>c&&"matchMedia"in c&&typeof c.matchMedia=="function");let r;const _=v(!1),h=()=>{!r||("removeEventListener"in r?r.removeEventListener("change",o):r.removeListener(o))},o=()=>{!d.value||(h(),r=c.matchMedia(Pt(e).value),_.value=r.matches,"addEventListener"in r?r.addEventListener("change",o):r.addListener(o))};return G(o),lt(()=>h()),_}const Y=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},z="__vueuse_ssr_handlers__";Y[z]=Y[z]||{};Y[z];function At(e={}){const{window:s=C}=e,c=rt(()=>s&&"DeviceOrientationEvent"in s),d=v(!1),r=v(null),_=v(null),h=v(null);return s&&c.value&&P(s,"deviceorientation",o=>{d.value=o.absolute,r.value=o.alpha,_.value=o.beta,h.value=o.gamma}),{isSupported:c,isAbsolute:d,alpha:r,beta:_,gamma:h}}function Et(e={}){const{type:s="page",touch:c=!0,resetOnTouchEnds:d=!1,initialValue:r={x:0,y:0},window:_=C,eventFilter:h}=e,o=v(r.x),p=v(r.y),g=v(null),u=m=>{s==="page"?(o.value=m.pageX,p.value=m.pageY):s==="client"?(o.value=m.clientX,p.value=m.clientY):s==="movement"&&(o.value=m.movementX,p.value=m.movementY),g.value="mouse"},f=()=>{o.value=r.x,p.value=r.y},b=m=>{if(m.touches.length>0){const j=m.touches[0];s==="page"?(o.value=j.pageX,p.value=j.pageY):s==="client"&&(o.value=j.clientX,p.value=j.clientY),g.value="touch"}},L=m=>h===void 0?u(m):h(()=>u(m),{}),$=m=>h===void 0?b(m):h(()=>b(m),{});return _&&(P(_,"mousemove",L,{passive:!0}),P(_,"dragover",L,{passive:!0}),c&&s!=="movement"&&(P(_,"touchstart",$,{passive:!0}),P(_,"touchmove",$,{passive:!0}),d&&P(_,"touchend",f,{passive:!0}))),{x:o,y:p,sourceType:g}}function Bt(e,s={}){const{handleOutside:c=!0,window:d=C}=s,{x:r,y:_,sourceType:h}=Et(s),o=v(e!=null?e:d==null?void 0:d.document.body),p=v(0),g=v(0),u=v(0),f=v(0),b=v(0),L=v(0),$=v(!0);let m=()=>{};return d&&(m=st([o,r,_],()=>{const j=dt(o);if(!j)return;const{left:ft,top:vt,width:H,height:N}=j.getBoundingClientRect();u.value=ft+d.pageXOffset,f.value=vt+d.pageYOffset,b.value=N,L.value=H;const R=r.value-u.value,Q=_.value-f.value;$.value=H===0||N===0||R<0||Q<0||R>H||Q>N,(c||!$.value)&&(p.value=R,g.value=Q)},{immediate:!0})),{x:r,y:_,sourceType:h,elementX:p,elementY:g,elementPositionX:u,elementPositionY:f,elementHeight:b,elementWidth:L,isOutside:$,stop:m}}function _t(e,s={}){const{deviceOrientationTiltAdjust:c=m=>m,deviceOrientationRollAdjust:d=m=>m,mouseTiltAdjust:r=m=>m,mouseRollAdjust:_=m=>m,window:h=C}=s,o=ot(At({window:h})),{elementX:p,elementY:g,elementWidth:u,elementHeight:f}=Bt(e,{handleOutside:!1,window:h}),b=E(()=>o.isSupported&&(o.alpha!=null&&o.alpha!==0||o.gamma!=null&&o.gamma!==0)?"deviceOrientation":"mouse"),L=E(()=>{if(b.value==="deviceOrientation"){const m=-o.beta/90;return d(m)}else{const m=-(g.value-f.value/2)/f.value;return _(m)}}),$=E(()=>{if(b.value==="deviceOrientation"){const m=o.gamma/90;return c(m)}else{const m=(p.value-u.value/2)/u.value;return r(m)}});return{roll:L,tilt:$,source:b}}var U;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(U||(U={}));var Tt=Object.defineProperty,Z=Object.getOwnPropertySymbols,Dt=Object.prototype.hasOwnProperty,Mt=Object.prototype.propertyIsEnumerable,tt=(e,s,c)=>s in e?Tt(e,s,{enumerable:!0,configurable:!0,writable:!0,value:c}):e[s]=c,Ft=(e,s)=>{for(var c in s||(s={}))Dt.call(s,c)&&tt(e,c,s[c]);if(Z)for(var c of Z(s))Mt.call(s,c)&&tt(e,c,s[c]);return e};const Wt={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};Ft({linear:jt},Wt);const Gt=xt({__name:"ParallaxMouse",setup(e){const s=v(null);Ct("(max-width: 700px)");const c=ot(_t(s)),d={display:"flex",flexDirection:"column",justifyContent:"center",transition:".3s ease-out all"},r={display:"flex",justifyContent:"center"},_={perspective:"300px"},h=E(()=>({background:"transparent",height:"auto",width:"auto",borderRadius:"5px",overflow:"hidden",transition:".5s ease-out all",transform:`rotateX(${c.roll*20}deg) rotateY(${c.tilt*20}deg)`}));return(o,p)=>(n(),i("div",null,[t("div",{ref_key:"target",ref:s,style:d},[t("div",{style:_},[t("div",{style:nt(et(h))},[t("div",{style:r},[it(o.$slots,"default",{},void 0,!0)])],4)])],512)]))}});const ut=x(Gt,[["__scopeId","data-v-2c0d4339"]]),Vt="/assets/Coco.dc29fc29.png",Ht="/assets/Goblin.0ac76cf6.png";const Nt={props:{},setup(e){const s=v({}),c=v(null);return _t(c),O(()=>{}),G(()=>{}),{editable:s,container:c}},components:{ParallaxMouse:ut}},F=e=>(k("data-v-3d1c9fef"),e=e(),I(),e),Rt={id:"about",class:"about py-5 mt-0 text-light font-1"},Qt={class:"container"},Yt=F(()=>t("div",{class:"d-flex justify-content-between"},[t("div",{class:"section-title display-3"},[t("h1",null,"About me")])],-1)),zt={class:"row justify-content-center",ref:"container"},Xt=V('<div class="col-md-4 d-flex justify-content-center" data-v-3d1c9fef><div class="card-container" data-v-3d1c9fef><div class="image-card perspective-left" data-v-3d1c9fef><div class="box box3" data-v-3d1c9fef><div class="oddboxinner elevation-6" data-v-3d1c9fef></div></div></div></div></div>',1),Kt={class:"col-lg-8 pt-4 pt-lg-0 content px-md-5 d-flex align-items-center"},Jt={delay:300,class:"px-md-5 font-2 text-start about-me-text long-paragraph"},qt=l(" Hi, my name is Daniel Le and I am a full stack developer. I am highly skilled in problem solving and critical thinking, with a strong foundation in both front and back end development with a love of finding creative solutions to complex problems. "),Ut=F(()=>t("br",null,null,-1)),Zt=l(" As a developer, I am fascinated by dev ops and programming architecture, and I enjoy researching documentation and exploring open source software in my free time. I am a problem solver at heart and am passionate about creating functional and smooth websites and apps that deliver solid performance. "),te=F(()=>t("br",null,null,-1)),ee=l(" I have a strong foundation in back end development and am skilled in technologies such as Node.js, Express, and SQL. I am always eager to learn and grow as a developer, and I take pride in my ability to adapt and learn new technologies quickly. "),oe=F(()=>t("br",null,null,-1)),se=l(" I believe that great software is built on a foundation of clear communication and collaboration, and I strive to work with my team members to create the best possible product. Thank you for taking the time to read a little about me. I look forward to the opportunity to work with you and contribute my skills and expertise to your project. "),ne=[qt,Ut,Zt,te,ee,oe,se],ie=F(()=>t("div",{class:"row my-5 justify-content-center"},[t("div",{class:"col-md-6 text-center"},[t("p",{class:"font-1 fs-4 text-warning"},"Current Favorite Song"),t("iframe",{style:{"border-radius":"12px"},src:"https://open.spotify.com/embed/track/7MZM9KhwGQG8QJ4BycsnQn?utm_source=generator",width:"100%",height:"152",frameBorder:"0",allowfullscreen:"",allow:"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture",loading:"lazy"})]),t("div",{class:"col-md-6 text-center"},[t("p",{class:"font-1 fs-4 text-warning"},"Creatures I'd die for"),t("div",{class:"d-md-flex justify-content-around p-2"},[t("img",{src:Vt,alt:"",width:"240",height:"240",class:"elevation-6 rounded mb-2 mb-md-0"}),t("img",{src:Ht,alt:"",width:"240",height:"240",class:"elevation-6 rounded"})])])],-1));function ae(e,s,c,d,r,_){const h=D("motion-slide-visible-once-bottom");return n(),i("section",Rt,[t("div",Qt,[Yt,t("div",zt,[Xt,t("div",Kt,[a((n(),i("p",Jt,ne)),[[h]])])],512),ie])])}const ce=x(Nt,[["render",ae],["__scopeId","data-v-3d1c9fef"]]);const le={props:{},setup(e){return{editable:v({})}},components:{}},de={id:"contact",class:"py-6"},re=V('<div class="container gap-5" data-v-0c3f6928><div class="row" data-v-0c3f6928><div class="col-md-12" data-v-0c3f6928><p class="display-3 font-1 text-light" data-v-0c3f6928>Get In Touch</p></div></div><div class="row justify-content-center" data-v-0c3f6928><div class="col-md-8 text-center" data-v-0c3f6928><p class="font-2 fs-5 text-light" data-v-0c3f6928> I&#39;m open to hire and looking for new opportunities to contribute to a worthwhile vision. The best way to get in touch with me is by phone, so don&#39;t hesitate to give me a call. I look forward to discussing how we can work together! </p></div><div class="col-md-6 d-flex justify-content-around" data-v-0c3f6928><a href="mailto:daniel97.le@gmail.com" target="_blank" data-v-0c3f6928><button class="btn bg-transparent fs-1 font-1" data-v-0c3f6928><img src="https://cdn-icons-png.flaticon.com/512/732/732200.png" alt="Gmail Icon" title="Gmail Icon" width="100" height="100" data-v-0c3f6928></button></a><a href="tel:2088632203" target="_blank" data-v-0c3f6928><button class="btn bg-transparent fs-1 font-1" data-v-0c3f6928><img src="https://cdn-icons-png.flaticon.com/512/2936/2936151.png" alt="Phone Icon" title="Phone Icon" width="100" height="100" data-v-0c3f6928></button></a></div></div></div>',1),_e=[re];function ue(e,s,c,d,r,_){return n(),i("section",de,_e)}const he=x(le,[["render",ue],["__scopeId","data-v-0c3f6928"]]),ht="/assets/LLCLogo.a5ad9e59.png";const pe={setup(){return{projects:B(()=>T.portfolioImages),archivedProjects:B(()=>T.archivedProjects),devProjects:B(()=>T.devProjects)}},components:{GitHubIcon:at}},A=e=>(k("data-v-945e1b47"),e=e(),I(),e),me={id:"portfolio",class:"py-5"},fe={class:"container"},ve=A(()=>t("div",{class:"section-title d-flex"},[t("h1",{class:"font-1 text-light"},"Portfolio")],-1)),ge={class:"row my-5"},ye={class:"col-md-7"},be={href:"https://www.samadhiyogaidaho.com/#/",target:"_blank"},we={delay:500,src:"https://media.discordapp.net/attachments/1060066788878069891/1060067418073993226/samadhiApp.png?width=720&height=399",class:"img-fluid elevation-6 rounded",alt:"Project Image"},xe={class:"col-md-5 position-relative"},$e={class:"d-flex"},ke={delay:500,class:"font-1 fs-5 text-warning mt-3 mt-md-0"},Ie=l(" Featured Project "),Se=[Ie],Le={delay:600,class:"font-1 fs-3 text-light text-shadow mb-1"},je=l(" SamadhiYogaIdaho "),Pe=[je],Oe={class:"ms-4"},Ce={delay:600,href:"https://www.samadhiyogaidaho.com/#/",class:"mb-2"},Ae=A(()=>t("img",{src:"https://cdn-icons-png.flaticon.com/512/3971/3971765.png",alt:"external Link",title:"site Link",width:"60",height:"60"},null,-1)),Ee=[Ae],Be={delay:700,class:"card elevation-6 p-2 border-0 bg-primary text-light project-description w-100"},Te={delay:800,class:"card-body font-2"},De=l(" Custom Designed and built website for a small yoga business owner client. intergrated Ghost for CMS Publishing for her blog as well as configuring MailGun for Email Service. The app will allow users to easily browse and sign up for classes, view class schedules, and purchase memberships and packages. It will also include a feature for teachers to manage their schedules and events and for the business to manage customer information. The SPA will be optimized for both desktop and mobile use, making it convenient for users to access from any device. Overall, the goal of the app is to provide a seamless and convenient experience for both the business and its customers. "),Me=[De],Fe={class:"list-group list-group-horizontal bg-transparent"},We={delay:300,class:"list-group-item"},Ge=l(" Vue.Js "),Ve=[Ge],He={delay:300,class:"list-group-item"},Ne=l(" BootStrap "),Re=[Ne],Qe={delay:300,class:"list-group-item"},Ye=l(" MongoDb "),ze=[Ye],Xe={delay:300,class:"list-group-item"},Ke=l(" PocketBase "),Je=[Ke],qe={delay:300,class:"list-group-item"},Ue=l(" Ghost "),Ze=[Ue],to={class:"row my-6",style:{}},eo={class:"col-md-5 position-relative text-end order-1 order-md-0"},oo={class:"d-flex justify-content-end"},so={class:"me-4"},no={delay:600,target:"_blank",href:"https://betterafterbooks.apps.devopportunities.dev/",class:"mb-2"},io=A(()=>t("img",{src:"https://cdn-icons-png.flaticon.com/512/3971/3971765.png",alt:"external Link",title:"site Link",width:"60",height:"60"},null,-1)),ao=[io],co={delay:500,class:"font-1 fs-5 text-warning mt-3 mt-md-0"},lo=l(" Featured Project "),ro=[lo],_o={delay:600,class:"font-1 fs-3 text-light text-shadow mb-1"},uo=l(" Better After Books "),ho=[uo],po={delay:700,class:"card elevation-6 p-2 border-0 bg-primary text-light project-description-flip w-100",style:{"z-index":"9"}},mo={delay:800,class:"card-body text-start font-2"},fo=l(" Better After Books is a social network that allows users to discover new books and save them to a list collection (i.e, a wishlist,favorites,reading and finished list) and browsing what other users recommended and reviewed. Demonstrates a working knowledge of how to architect and design full-stack applications. Utilizing a VueJs frontend with Vue-Router to manage the DOM. On the server-side, using DotNet WebApi for server and implement the Repository pattern to communicate with a MySQL server for their database. In addition, Auth0 for user management, Dapper as an ORM. "),vo=[fo],go={class:"list-group list-group-horizontal bg-transparent"},yo={delay:300,class:"list-group-item"},bo=l(" Vue.Js "),wo=[bo],xo={delay:300,class:"list-group-item"},$o=l(" C# "),ko=[$o],Io={delay:300,class:"list-group-item"},So=l(" DotNet "),Lo=[So],jo={delay:300,class:"list-group-item"},Po=l(" MySQL "),Oo=[Po],Co={delay:300,class:"list-group-item"},Ao=l(" Bootstrap "),Eo=[Ao],Bo={class:"col-12 col-md-7 order-0 order-md-1"},To={href:"https://betterafterbooks.apps.devopportunities.dev/",target:"_blank"},Do={delay:500,src:"https://media.discordapp.net/attachments/1060066788878069891/1060067418820579439/BetterAfterBooks.png?width=720&height=390",class:"img-fluid elevation-5 rounded",alt:"Project Image"},Mo={class:"row my-5"},Fo={class:"col-md-7"},Wo={target:"_blank",href:"https://keepr-project-demo.onrender.com"},Go={delay:500,src:"https://media.discordapp.net/attachments/1060066788878069891/1060068161329827850/keeperApp.png?width=720&height=413",class:"img-fluid elevation-6 rounded",alt:"Project Image"},Vo={class:"col-md-5 position-relative"},Ho={class:"d-flex"},No={delay:500,class:"font-1 fs-5 text-warning mt-3 mt-md-0"},Ro=l(" Featured Project "),Qo=[Ro],Yo={delay:600,class:"font-1 fs-3 text-light text-shadow mb-1"},zo=l(" Keepr "),Xo=[zo],Ko={class:"ms-4"},Jo={delay:600,target:"_blank",href:"https://keepr-project-demo.onrender.com",class:"mb-2"},qo=A(()=>t("img",{src:"https://cdn-icons-png.flaticon.com/512/3971/3971765.png",alt:"external Link",title:"site Link",width:"60",height:"60"},null,-1)),Uo=[qo],Zo={delay:700,class:"card elevation-6 p-2 border-0 bg-primary text-light project-description w-100"},ts={delay:800,class:"card-body font-2"},es=l(" Keepr is a social network that allows users to visually share and discover new interests by posting images or videos to their own, or others', collections (i.e., a collection of 'vaults,' usually with a common theme) and browsing what other users have kept. Demonstrates a working knowledge of building full-stack applications. Utilizing a VueJs frontend with Vue-Router to manage the DOM. On the server-side, using DotNet WebApi for their server and implement the Repository pattern to communicate with their database. In addition, Auth0 for user management, Dapper as an ORM, and a MySQL server for their database. "),os=[es],ss={class:"list-group list-group-horizontal bg-transparent"},ns={delay:300,class:"list-group-item"},is=l(" HTML "),as=[is],cs={delay:300,class:"list-group-item"},ls=l(" CSS "),ds=[ls],rs={delay:300,class:"list-group-item"},_s=l(" Javascript "),us=[_s],hs={class:"row my-6",style:{}},ps={class:"col-md-5 position-relative text-end order-1 order-md-0"},ms={class:"d-flex justify-content-end"},fs={class:"me-4"},vs={delay:600,href:"https://thetower-f4he.onrender.com",class:"mb-2"},gs=A(()=>t("img",{src:"https://cdn-icons-png.flaticon.com/512/3971/3971765.png",alt:"external Link",title:"site Link",width:"60",height:"60"},null,-1)),ys=[gs],bs={delay:500,class:"font-1 fs-5 text-warning mt-3 mt-md-0"},ws=l(" Featured Project "),xs=[ws],$s={delay:600,class:"font-1 fs-3 text-light text-shadow mb-1"},ks=l(" Tower "),Is=[ks],Ss={delay:700,class:"card elevation-6 p-2 border-0 bg-primary text-light project-description-flip w-100",style:{"z-index":"9"}},Ls={delay:800,class:"card-body text-start font-2"},js=l(" SPA app designed to help people get together with other users for events as well as create them. VueJs with Vue-Router for the client. Express with Node.js and MongoDB with Mongoose to manage database and handling relationships of both one to many, and many to many objects. Identity management with Auth0. "),Ps=[js],Os={class:"list-group list-group-horizontal bg-transparent"},Cs={delay:300,class:"list-group-item"},As=l(" Vue.Js "),Es=[As],Bs={delay:300,class:"list-group-item"},Ts=l(" Node.Js & Express "),Ds=[Ts],Ms={delay:300,class:"list-group-item"},Fs=l(" BootStrap "),Ws=[Fs],Gs={delay:300,class:"list-group-item"},Vs=l(" MongoDb "),Hs=[Vs],Ns={class:"col-md-7 order-0 order-md-1"},Rs={href:"https://thetower-f4he.onrender.com",target:"_blank"},Qs={delay:500,src:"https://cdn.discordapp.com/attachments/1060066788878069891/1060067418464075877/TowerSS.png",class:"img-fluid elevation-5 rounded",alt:"Project Image"},Ys={class:"container mt-6"},zs={id:"devProjects",class:"row g-3 my-5"},Xs=A(()=>t("div",{class:"col-md-12 text-center d-flex align-items-center justify-content-center"},[t("div",{class:"rounded-circle bg-light text-center devsopportunities-image elevation-6 d-none d-md-block"},[t("img",{src:ht,alt:"LLC Logo",class:""})]),t("p",{class:"font-1 fs-2 text-warning ms-4"}," Projects & Works done under DevsOpportunities LLC: ")],-1)),Ks={class:"col-md-6 test"};function Js(e,s,c,d,r,_){const h=w("ProjectCard"),o=D("motion-slide-visible-once-bottom");return n(),i("section",me,[t("div",fe,[ve,t("div",ge,[t("div",ye,[t("a",be,[a(t("img",we,null,512),[[o]])])]),t("div",xe,[t("div",$e,[t("div",null,[a((n(),i("p",ke,Se)),[[o]]),a((n(),i("p",Le,Pe)),[[o]])]),t("div",Oe,[a((n(),i("a",Ce,Ee)),[[o]])])]),a((n(),i("div",Be,[a((n(),i("div",Te,Me)),[[o]]),t("ul",Fe,[a((n(),i("li",We,Ve)),[[o]]),a((n(),i("li",He,Re)),[[o]]),a((n(),i("li",Qe,ze)),[[o]]),a((n(),i("li",Xe,Je)),[[o]]),a((n(),i("li",qe,Ze)),[[o]])])])),[[o]])])]),t("div",to,[t("div",eo,[t("div",oo,[t("div",so,[a((n(),i("a",no,ao)),[[o]])]),t("div",null,[a((n(),i("p",co,ro)),[[o]]),a((n(),i("p",_o,ho)),[[o]])])]),a((n(),i("div",po,[a((n(),i("div",mo,vo)),[[o]]),t("ul",go,[a((n(),i("li",yo,wo)),[[o]]),a((n(),i("li",xo,ko)),[[o]]),a((n(),i("li",Io,Lo)),[[o]]),a((n(),i("li",jo,Oo)),[[o]]),a((n(),i("li",Co,Eo)),[[o]])])])),[[o]])]),t("div",Bo,[t("a",To,[a(t("img",Do,null,512),[[o]])])])]),t("div",Mo,[t("div",Fo,[t("a",Wo,[a(t("img",Go,null,512),[[o]])])]),t("div",Vo,[t("div",Ho,[t("div",null,[a((n(),i("p",No,Qo)),[[o]]),a((n(),i("p",Yo,Xo)),[[o]])]),t("div",Ko,[a((n(),i("a",Jo,Uo)),[[o]])])]),a((n(),i("div",Zo,[a((n(),i("div",ts,os)),[[o]]),t("ul",ss,[a((n(),i("li",ns,as)),[[o]]),a((n(),i("li",cs,ds)),[[o]]),a((n(),i("li",rs,us)),[[o]])])])),[[o]])])]),t("div",hs,[t("div",ps,[t("div",ms,[t("div",fs,[a((n(),i("a",vs,ys)),[[o]])]),t("div",null,[a((n(),i("p",bs,xs)),[[o]]),a((n(),i("p",$s,Is)),[[o]])])]),a((n(),i("div",Ss,[a((n(),i("div",Ls,Ps)),[[o]]),t("ul",Os,[a((n(),i("li",Cs,Es)),[[o]]),a((n(),i("li",Bs,Ds)),[[o]]),a((n(),i("li",Ms,Ws)),[[o]]),a((n(),i("li",Gs,Hs)),[[o]])])])),[[o]])]),t("div",Ns,[t("a",Rs,[a(t("img",Qs,null,512),[[o]])])])])]),t("div",Ys,[t("div",zs,[Xs,(n(!0),i(X,null,ct(d.devProjects,p=>(n(),i("div",Ks,[y(h,{project:p},null,8,["project"])]))),256))])])])}const qs=x(pe,[["render",Js],["__scopeId","data-v-945e1b47"]]);const Us={props:{},setup(e){const s=v({});return O(()=>{}),G(()=>{}),{editable:s}}},Zs={class:"card-container"},tn={class:"image-card"};function en(e,s,c,d,r,_){return n(),i("div",Zs,[t("div",tn,[it(e.$slots,"default",{},void 0,!0)])])}const on=x(Us,[["render",en],["__scopeId","data-v-0201f9fe"]]);const sn={props:{},setup(e){const s=v({});return O(()=>{}),G(()=>{}),{editable:s,skillsIcons:B(()=>T.skillsIcons),scrollToProjects(){window.scrollTo({top:document.getElementById("portfolio").offsetTop+2250,left:0,behavior:"smooth"})},filterImages(c,d){const r=document.querySelectorAll(".image-item");document.querySelectorAll(".filter-button").forEach(f=>{f.classList.remove("active")}),d.target.classList.add("active"),c!=="reset"&&d.target.classList.add("active"),r.forEach(f=>{f.getAttribute("type")!=c?(f.style.display="none",f.style.opacity=0,f.style.transform="scale(0.1)"):f.style.display="block",c=="reset"&&(f.style.display="block")});const h=1;let o=0;const p=1;let g=.1;const u=setInterval(()=>{o+=.1,g+=.05,r.forEach(f=>{f.style.opacity=o,f.style.transform=`scale(${g})`}),o>=h&&g>=p&&clearInterval(u)},25)}}},components:{CartoonFrame:on,ParallaxMouse:ut}},S=e=>(k("data-v-b3769d4d"),e=e(),I(),e),nn={id:"experience",class:"py-5"},an={class:"container"},cn={class:"section-title"},ln={delay:300,class:"font-1 text-light"},dn=l(" Skills & Experience "),rn=[dn],_n={class:"row d-flex justify-content around"},un={class:"col-md-12 d-flex justify-content-between"},hn={class:"section-title"},pn={delay:300,class:"font-1 text-warning fs-2"},mn=l(" Education "),fn=[mn],vn=S(()=>t("div",{class:"col-md-6"},[t("div",{class:"card-1"},[t("img",{src:"https://avatars.githubusercontent.com/u/94322600?s=280&v=4",alt:"Front image",class:"front-image"}),t("img",{src:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbcw.blob.core.windows.net%2Fpublic%2Fimg%2F8600856373152463&f=1&nofb=1&ipt=7556aa255fdb3f0a77caa1be29b0f23e5f3d403a76f098fca104b1911e9c485b&ipo=images",alt:"Back image",class:"back-image",width:"175",height:"175"})])],-1)),gn={class:"col-md-6 align-items-center"},yn={delay:300,class:"font-2 text-light darken-10 fw-bold"},bn=l(" FULL STACK SOFTWARE DEVELOPMENT CERTIFICATION, "),wn=[bn],xn={delay:300,class:"font-2 text-light fw-bold darken-20"},$n=l(" 2022 - Boise Codeworks, Boise, ID "),kn=[$n],In={delay:300,class:"font-2 text-light"},Sn=l(" An immersive full stack software development program that provided over 500 hours of coding experience across multiple technology stacks. "),Ln=[Sn],jn={class:"row skills-content gy-4 my-5 justify-content-center"},Pn=S(()=>t("div",{class:"col-md-12"},[t("p",{class:"font-1 text-warning fs-2"},"Languages & Technologies")],-1)),On={class:"col-md-12"},Cn={class:"d-md-flex justify-content-between gap-5 g-5"},An={class:"image-container row g-3 justify-content-center"},En=["type"],Bn=["src","title"],Tn=S(()=>t("div",{class:"col-md-12 d-md-flex justify-content-around mb-4 flex-wrap"},null,-1)),Dn={class:"row my-5"},Mn=V('<div class="section-title" data-v-b3769d4d><p class="font-1 fs-2 text-warning" data-v-b3769d4d>DevsOpportunities LLC</p></div><div class="col-md-6 d-flex justify-content-center my-3 my-md-0" data-v-b3769d4d><div class="rounded-circle bg-light text-center devsopportunities-image elevation-6" data-v-b3769d4d><img src="'+ht+'" alt="LLC Logo" data-v-b3769d4d></div></div>',2),Fn={class:"col-md-6"},Wn={delay:300,class:"font-2 text-light darken-10 fw-bold"},Gn=l(" 2022 "),Vn=[Gn],Hn={delay:300,class:"font-2 text-light"},Nn=l(" Company I Co-Founded with a team of 3 other developers from CodeWorks to do freelance work while searching for full time employment. I have had the opportunity to communicate with clients to understand their needs and requirements, and to collaborate with them to ensure that their goals are met. "),Rn=[Nn],Qn=S(()=>t("ul",null,[t("li",null," Effectively communicate technical concepts to non-technical stakeholders and to build strong working relationships. "),t("li",null," Proactive in seeking feedback and making adjustments as needed to ensure that the final product meets the client's expectations. "),t("li",null," While I have not had a great deal of experience working directly with clients, I am eager to learn and to continue developing my skills in this area. "),t("li",null," Confident that with my strong technical abilities and my commitment to delivering high-quality work, I will be able to make a valuable contribution to any project. ")],-1)),Yn=S(()=>t("p",{class:"font-1 fs-5 text-light darken-10"}," Projects & work done Listed Below ",-1)),zn={class:"row my-5 gy-3"},Xn=S(()=>t("div",{class:"section-title"},[t("p",{class:"font-1 text-warning fs-2"},"Currently Learning")],-1)),Kn={class:"col-md-6"},Jn={class:"row"},qn={class:"col-md-6"},Un={delay:300,class:"card border-0 elevation-6 text-center"},Zn=S(()=>t("img",{src:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.ScQpzKmWalxq0KeWWBux-gHaD4%26pid%3DApi&f=1&ipt=0fd2170aa01a2dbe148cac426af933086226376185d4ad2eed12e5341c1c6e3c&ipo=images",alt:"ks3 image",class:"rounded img-fluid elevation-6"},null,-1)),ti=[Zn],ei={class:"col-md-6"},oi={delay:300,class:"card border-0 elevation-6 text-center"},si=S(()=>t("img",{src:"https://www.jrenterprisesolutions.com/files/2020/05/Docker-Logo-White-RGB_Vertical-BG_0.png",alt:"docker image",class:"rounded img-fluid elevation-6"},null,-1)),ni=[si],ii={class:"col-md-6"},ai={delay:300,class:"font-2 text-light"},ci=l(" I am attempting to teach myself on learning K3s Kubernetes and Docker. Kubernetes and Docker are popular technologies for containerizing and deploying applications in a flexible and scalable way. I am excited to continue learning and to explore the ways in which they can help me to improve the performance, security, and scalability of my applications. I am also looking into the implementation and documentation of both technologies, as I believe that a strong understanding of their underlying principles and best practices is essential for effective development. "),li=[ci];function di(e,s,c,d,r,_){const h=w("CartoonFrame"),o=w("ParallaxMouse"),p=D("motion-slide-visible-once-bottom"),g=D("motion-roll-visible-once-left");return n(),i("section",nn,[t("div",an,[t("div",cn,[a((n(),i("h1",ln,rn)),[[p]])]),t("div",_n,[t("div",un,[t("div",hn,[a((n(),i("p",pn,fn)),[[p]])])]),vn,t("div",gn,[a((n(),i("p",yn,wn)),[[p]]),a((n(),i("p",xn,kn)),[[p]]),a((n(),i("p",In,Ln)),[[p]])])]),t("div",jn,[Pn,t("div",On,[t("ul",Cn,[t("li",{class:"list-group-item font-2 fs-5 filter-button active selectable rounded",onClick:s[0]||(s[0]=u=>d.filterImages("reset",u))}," All "),t("li",{class:"list-group-item font-2 fs-5 filter-button selectable rounded",onClick:s[1]||(s[1]=u=>d.filterImages("lang",u))}," Languages "),t("li",{class:"list-group-item font-2 fs-5 filter-button selectable rounded",onClick:s[2]||(s[2]=u=>d.filterImages("tech",u))}," Technologies "),t("li",{class:"list-group-item font-2 fs-5 filter-button selectable rounded",onClick:s[3]||(s[3]=u=>d.filterImages("framework",u))}," Frameworks & Libraries "),t("li",{class:"list-group-item font-2 fs-5 filter-button selectable rounded",onClick:s[4]||(s[4]=u=>d.filterImages("database",u))}," Databases ")])]),t("div",An,[(n(!0),i(X,null,ct(d.skillsIcons,u=>(n(),i("div",{class:"col-6 col-md-2 image-item",type:u.type,key:u.id},[y(o,null,{default:W(()=>[a((n(),$t(h,null,{default:W(()=>[t("img",{class:"img-fluid box3 box",src:u.src,title:u.title},null,8,Bn)]),_:2},1024)),[[g]])]),_:2},1024)],8,En))),128))]),Tn]),t("div",Dn,[Mn,t("div",Fn,[a((n(),i("p",Wn,Vn)),[[p]]),a((n(),i("p",Hn,Rn)),[[p]]),Qn,Yn])]),t("div",zn,[Xn,t("div",Kn,[t("div",Jn,[t("div",qn,[a((n(),i("div",Un,ti)),[[p]])]),t("div",ei,[a((n(),i("div",oi,ni)),[[p]])])])]),t("div",ii,[a((n(),i("p",ai,li)),[[p]])])])])])}const ri=x(sn,[["render",di],["__scopeId","data-v-b3769d4d"]]);const _i={setup(){return{}}},ui=e=>(k("data-v-f7d71094"),e=e(),I(),e),hi={href:"https://www.linkedin.com/in/daniel-le97/",class:""},pi=ui(()=>t("i",{class:"mdi mdi-linkedin fs-3 text-light",title:"Github"},null,-1)),mi=[pi];function fi(e,s,c,d,r,_){return n(),i("a",hi,mi)}const vi=x(_i,[["render",fi],["__scopeId","data-v-f7d71094"]]);const gi={setup(){return{}}},yi=e=>(k("data-v-8e53869b"),e=e(),I(),e),bi={href:"tel:2088632203"},wi=yi(()=>t("i",{class:"mdi mdi-phone fs-3 text-light",title:"Phone Number"},null,-1)),xi=[wi];function $i(e,s,c,d,r,_){return n(),i("a",bi,xi)}const ki=x(gi,[["render",$i],["__scopeId","data-v-8e53869b"]]);const Ii={setup(){const e=v(0);return O(()=>{window.addEventListener("scroll",()=>{if(e.value=window.scrollY,e.value>=9e3){let s=document.getElementById("socialBar");s.classList.toggle="fixed-bottom"}})}),{}},components:{GitHubIcon:at,LinkedInIcon:vi,PhoneIcon:ki}},pt=e=>(k("data-v-65a54425"),e=e(),I(),e),Si={id:"socialBar",class:"container-fluid fixed-bottom d-none d-md-block"},Li={class:"row my-3 my-md-0 justify-content-between"},ji={class:"col-2 d-flex flex-column align-items-start"},Pi=pt(()=>t("div",{class:"col-1 text-center d-flex justify-content-center align-items-center"},[t("a",{href:"mailto:daniel97.le@gmail.com",target:"_blank",class:"email font-1 fs-3 text-light"}," daniel97.le@gmail.com ")],-1)),Oi={class:"container-fluid bg-dark py-4 test"},Ci={class:"row justify-content-center"},Ai={class:"col-12 d-flex justify-content-center icons d-md-none"},Ei=pt(()=>t("div",{class:"col-md-12 text-center"},[t("p",null,[l("Designed & Built by "),t("b",null," DevOpportunitiesLLC")]),t("p",null,"Copyright \xA9 2023 DevOpportunitiesLLC")],-1));function Bi(e,s,c,d,r,_){const h=w("PhoneIcon"),o=w("GitHubIcon"),p=w("LinkedInIcon");return n(),i(X,null,[t("div",Si,[t("div",Li,[t("div",ji,[y(h),y(o),y(p,{class:"linkedIn-icon"})]),Pi])]),t("div",Oi,[t("div",Ci,[t("div",Ai,[y(h),y(o),y(p)]),Ei])])],64)}const Ti=x(Ii,[["render",Bi],["__scopeId","data-v-65a54425"]]);const Di={setup(){return{}}},Mi={class:"editorial mb-0",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 24 150 28 ",preserveAspectRatio:"none"},Fi=V(`<defs data-v-1a95cf89><path id="gentle-wave" d="M-160 44c30 0
    58-18 88-18s
    58 18 88 18
    58-18 88-18
    58 18 88 18
    v44h-352z" data-v-1a95cf89></path></defs><g class="parallax1" data-v-1a95cf89><use xlink:href="#gentle-wave" x="50" y="3" fill="#b150af" data-v-1a95cf89></use></g><g class="parallax2" data-v-1a95cf89><use xlink:href="#gentle-wave" x="50" y="0" fill="#af3358" data-v-1a95cf89></use></g><g class="parallax3" data-v-1a95cf89><use xlink:href="#gentle-wave" x="50" y="9" fill="#84a8e2" data-v-1a95cf89></use></g><g class="parallax4" data-v-1a95cf89><use xlink:href="#gentle-wave" x="50" y="6" fill="#0d0b0e" data-v-1a95cf89></use></g>`,5),Wi=[Fi];function Gi(e,s,c,d,r,_){return n(),i("svg",Mi,Wi)}const Vi=x(Di,[["render",Gi],["__scopeId","data-v-1a95cf89"]]),Hi="/assets/spacemanFull.096a94aa.mp4";const Ni={name:"LocomotiveSection",setup(){const e=v(0);return O(()=>{window.addEventListener("scroll",()=>{e.value=window.scrollY})}),{scrollY:e,spaceman:B(()=>T.spaceman)}},components:{ParticleComponent:kt,GentleWave:Vi}},mt=e=>(k("data-v-be2068c1"),e=e(),I(),e),Ri={class:"container-fluid position-relative text-center d-flex flex-column justify-content-center align-items-center hero-image"},Qi=mt(()=>t("div",{class:"video-container position-absolute d-flex justify-content-center"},[t("video",{src:Hi,width:"200",height:"1004","object-fit":"cover",loop:"",muted:"",autoplay:"",class:"object-fit"})],-1)),Yi={class:"row justify-content-between w-100"},zi={id:"heroText2",class:"col-md-6 hero-text-2 mt-5"},Xi={delay:600,class:"text-start display-6 ms-5 font-1 mb-0 text-shadow text-light"},Ki=l(" creative "),Ji=[Ki],qi={delay:1e3,class:"font-1 display-7 mb-0 text-shadow text-light"},Ui=l(" Problem Solver "),Zi=mt(()=>t("b",{class:"display-6"},"&",-1)),ta=[Ui,Zi],ea={delay:1500,class:"font-1 display-7 text-shadow text-light"},oa=l(" Critical Thinker "),sa=[oa],na={id:"heroText",class:"col-md-6 text-end text-light"},ia={delay:600,class:"display-6 font-1 mb-0 text-shadow text-light"},aa=l(" Willing To Learn "),ca=[aa],la={delay:600,class:"display-1 font-1 mb-0 text-shadow"},da=l(" Anything "),ra=[da],_a={delay:1e3,class:"font-1 display-1 mb-0 text-shadow"},ua=l(" Anytime "),ha=[ua],pa={delay:1500,class:"font-1 display-1 text-shadow"},ma=l(" Anywhere "),fa=[ma];function va(e,s,c,d,r,_){const h=w("GentleWave"),o=D("motion-slide-bottom");return n(),i("div",Ri,[Qi,t("section",{class:"locomotive-section container-fluid",style:nt({transform:`translateY(-${d.scrollY}px)`})},[t("div",Yi,[t("div",zi,[a((n(),i("p",Xi,Ji)),[[o]]),a((n(),i("p",qi,ta)),[[o]]),a((n(),i("p",ea,sa)),[[o]])]),t("div",na,[a((n(),i("p",ia,ca)),[[o]]),a((n(),i("p",la,ra)),[[o]]),a((n(),i("p",_a,ha)),[[o]]),a((n(),i("p",pa,fa)),[[o]])])])],4),y(h)])}const ga=x(Ni,[["render",va],["__scopeId","data-v-be2068c1"]]);const ya={data(){return{mainLoaded:!1}},mounted(){setTimeout(()=>{this.mainLoaded=!0},500)},components:{AboutSection:ce,PortfolioSection:qs,ExperienceSection:ri,ContactSection:he,SocialBar:Ti,HeroSectionV2:ga}},ba=e=>(k("data-v-2d99f3da"),e=e(),I(),e),wa={key:0,class:"opening-animation"},xa={key:0,class:"main-page"},$a=ba(()=>t("div",{class:"position-relative"},null,-1));function ka(e,s,c,d,r,_){const h=w("LoadingAnimation"),o=w("HeroSectionV2"),p=w("AboutSection"),g=w("ExperienceSection"),u=w("PortfolioSection"),f=w("ContactSection"),b=w("SocialBar");return n(),i("div",null,[y(K,{name:"slide",mode:"out-in",appear:""},{default:W(()=>[r.mainLoaded?J("",!0):(n(),i("div",wa,[y(h)]))]),_:1}),y(K,{name:"fade",mode:"out-in",appear:""},{default:W(()=>[r.mainLoaded?(n(),i("div",xa,[y(o),y(p),y(g),y(u),y(f),$a,y(b)])):J("",!0)]),_:1})])}const Sa=x(ya,[["render",ka],["__scopeId","data-v-2d99f3da"]]);export{Sa as default};