var k=Object.defineProperty;var $=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var y=(e,t,s)=>t in e?k(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,w=(e,t)=>{for(var s in t||(t={}))I.call(t,s)&&y(e,s,t[s]);if($)for(var s of $(t))S.call(t,s)&&y(e,s,t[s]);return e};import{d as v,l as b,r as p,a as L,o as i,c as _,w as H,b as T,e as d,f as l,g as c,h as g,t as f,i as N,j as M,k as V,m as B,u as C,n as R,p as F,q as O,s as P,v as W,x as j,y as q,F as z,z as G,A as U,E as X,B as K,C as Y,D as J,G as Q,H as Z}from"./vendor.fcb21ced.js";const ee=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function s(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerpolicy&&(a.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?a.credentials="include":n.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(n){if(n.ep)return;n.ep=!0;const a=s(n);fetch(n.href,a)}};ee();const te="modulepreload",x={},ne="./",A=function(t,s){return!s||s.length===0?t():Promise.all(s.map(o=>{if(o=`${ne}${o}`,o in x)return;x[o]=!0;const n=o.endsWith(".css"),a=n?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${a}`))return;const r=document.createElement("link");if(r.rel=n?"stylesheet":te,n||(r.as="script",r.crossOrigin=""),r.href=o,document.head.appendChild(r),n)return new Promise((u,h)=>{r.addEventListener("load",u),r.addEventListener("error",h)})})).then(()=>t())};var m=(e,t)=>{const s=e.__vccOpts||e;for(const[o,n]of t)s[o]=n;return s};const se=v({name:"homeIndex",data(){return{msgContent:"",msgAuthor:"",currentTime:"",timer:0,loading:!0}},created(){const e=this;e.getTime(),this.timer=window.setInterval(function(){e.getTime()},1e3)},mounted(){this.loadSentence()},beforeUnmount(){console.log(this.timer),this.timer&&clearInterval(this.timer)},methods:{loadSentence(){b(e=>{this.msgContent=e.data.content,this.msgAuthor=`  \u2014\u2014  ${e.data.origin.author}`,this.loading=!1},e=>{console.log(e)})},getTime(){const e=new Date().getFullYear(),t=new Date().getMonth()+1,s=new Date().getDate(),o=new Date().getHours(),n=new Date().getMinutes()<10?`0${new Date().getMinutes()}`:new Date().getMinutes(),a=new Date().getSeconds()<10?`0${new Date().getSeconds()}`:new Date().getSeconds();this.currentTime=`${e}-${t}-${s} ${o}:${n}:${a}`}}}),oe={class:"home-container page-container"},ae={class:"WelcomeBox"},re=c("img",{src:"https://jack-img.oss-cn-hangzhou.aliyuncs.com/img/20210326164733.jpg",class:"home-avatar"},null,-1),ce=c("span",{class:"welcomeTitle"},[g("\u4E0B\u5348\u597D\uFF0C "),c("span",{class:"user-name"},"\u6E38\u5BA2"),g("\uFF01")],-1),ie={class:"poemContent"},ue={class:"poemTitle"},le={class:""},_e=g(" \u516C\u544A ");function de(e,t,s,o,n,a){const r=p("el-card"),u=p("el-col"),h=p("el-row"),E=L("loading");return i(),_("div",oe,[H((i(),T(h,{id:"homeTag",gutter:24},{default:d(()=>[l(u,{span:10,class:"cardWelcome",attrTest:"testTT"},{default:d(()=>[l(r,{shadow:"hover"},{default:d(()=>[c("div",ae,[re,ce,c("span",ie,[g(f(e.msgContent)+" ",1),c("span",ue,f(e.msgAuthor),1)])])]),_:1})]),_:1}),l(u,{span:7,class:"cardNowTime"},{default:d(()=>[l(r,{shadow:"hover"},{default:d(()=>[c("span",le,f(e.currentTime),1)]),_:1})]),_:1}),l(u,{span:7},{default:d(()=>[l(r,{shadow:"hover"},{default:d(()=>[_e]),_:1})]),_:1})]),_:1})),[[E,e.loading]])])}var pe=m(se,[["render",de]]);const me={name:"vueX"};function he(e,t,s,o,n,a){return i(),_("div")}var ve=m(me,[["render",he]]);const fe=v({name:"vuexTest",setup(){const e=N(0);return{count:e,increment:()=>{e.value+=1}}}}),ge={class:"test-container page-container"},$e=c("div",{class:"page-title"},"Unit Test Page",-1);function ye(e,t,s,o,n,a){return i(),_("div",ge,[$e,c("p",null,"count is: "+f(e.count),1),c("button",{onClick:t[0]||(t[0]=(...r)=>e.increment&&e.increment(...r))},"increment")])}var we=m(fe,[["render",ye]]);const xe=[{path:"/",name:"Home",component:pe},{path:"/article",name:"Article",component:()=>A(()=>import("./article.058c117f.js"),["assets/article.058c117f.js","assets/vendor.fcb21ced.js"])},{path:"/vuex",name:"Vuex",component:ve},{path:"/axios",name:"Axios",component:()=>A(()=>import("./axios.54513ecf.js"),["assets/axios.54513ecf.js","assets/vendor.fcb21ced.js"])},{path:"/test",name:"Test",component:we}],Ae=M({history:V(),routes:xe}),Te={count:0};var Ce=B({state(){return Te},mutations:{increment(e){e.count+=1}},actions:{increment(e){e.commit("increment")}},getters:{double(e){return 2*e.count}}});const De=e=>(F("data-v-aee6c0a0"),e=e(),O(),e),Ee={class:"header"},ke=De(()=>c("i",{class:"icon el-icon-s-promotion"},null,-1)),Ie=g(" GitHub "),Se=[ke,Ie],be=v({setup(e){const t=C(),s=()=>{window.open("https://github.com/a1245661652/vite-vue3-node")};return(o,n)=>(i(),_("div",Ee,[c("div",{class:"title",onClick:n[0]||(n[0]=a=>R(t).push("/"))}," Vite2.x + Vue3.x + TypeScript Starter "),c("div",{class:"go-github",onClick:s},Se)]))}});var Le=m(be,[["__scopeId","data-v-aee6c0a0"]]);const He=v({name:"NavIndex",setup(){const e=C(),t=P({navList:[{name:"Home",isActive:!1,path:"/"},{name:"Article",isActive:!1,path:"/article"},{name:"Vuex",isActive:!1,path:"/vuex"},{name:"Axios",isActive:!1,path:"/axios"},{name:"Test",isActive:!1,path:"/test"}],navClick(o){e.push(o.path)}}),s=o=>{t.navList.forEach(n=>{const a=n;return a.isActive=a.path===o,a})};return W(()=>e.currentRoute.value,o=>{s(o.path)}),j(()=>{e.isReady().then(()=>{s(e.currentRoute.value.path)})}),w({},q(t))}}),Ne={class:"nav"},Me={class:"nav-list"},Ve=["onClick"];function Be(e,t,s,o,n,a){return i(),_("aside",Ne,[c("ul",Me,[(i(!0),_(z,null,G(e.navList,(r,u)=>(i(),_("li",{class:U(["nav-item flex-center",{active:r.isActive}]),key:u,onClick:h=>e.navClick(r)},f(r.name),11,Ve))),128))])])}var Re=m(He,[["render",Be],["__scopeId","data-v-02476fce"]]);const Fe=v({name:"MainIndex",components:{Header:Le,Nav:Re}}),Oe={class:"main-container"},Pe={class:"top"},We={class:"bottom"},je={class:"left"},qe={class:"right"},ze={class:"content"};function Ge(e,t,s,o,n,a){const r=p("Header"),u=p("Nav"),h=p("router-view");return i(),_("main",Oe,[c("div",Pe,[l(r)]),c("div",We,[c("div",je,[l(u)]),c("div",qe,[c("div",ze,[l(h)])])])])}var Ue=m(Fe,[["render",Ge],["__scopeId","data-v-29441124"]]);const Xe=v({name:"App",components:{Main:Ue}});function Ke(e,t,s,o,n,a){const r=p("Main");return i(),T(r)}var Ye=m(Xe,[["render",Ke]]);function Je(e){return[X,K,Y,J].forEach(t=>{e.use(t)}),e}const D=Q(Ye);D.use(Z);Je(D).use(Ae).use(Ce).mount("#app");export{m as _};
