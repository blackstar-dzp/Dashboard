import{d as s,b as e,z as a,e as t,E as i,L as l,t as n,D as o,F as d,h as c,ae as r,j as p,p as u,l as m}from"./element-plus.abf3c969.js";u("data-v-c5b20e06");const v=l("div",{class:"tips"},"以下提供部分推荐动态壁纸选择，来源于网络CDN，有可能出现无法访问问题，你也可以手动输入自定义的网络https视频路径。",-1),g={key:0,class:"video-wrapper"},b=["onClick"],h={class:"img-wrapper"},k=["src"];m();var y=s({emits:["submit"],setup(s,{emit:u}){const m=e(!1),y=e(),C=()=>{y.value.open(),m.value||(m.value=!0)},f=()=>{},w=[4,5,6,10,11,14,15,16,17,18,19,21,22,23,24,25,26,27,28,30,31,32,33,34,35,37,39,41,42,43,44,47,49].map((s=>({img:`https://cdn.jsdelivr.net/gh/dsource/static/assets/${s}-test.jpg`,video:`https://cdn.jsdelivr.net/gh/dsource/static/assets/${s}-test.webm`})));return(s,e)=>{const j=a("animation-dialog");return t(),i(d,null,[l("button",{type:"button",class:"btn btn-small btn-primary",style:{margin:"0","margin-right":"5px"},onClick:C},"动态壁纸推荐"),n(j,{ref:(s,e)=>{e.dialog=s,y.value=s},animationMode:"",customWrapperClass:"backdrop-blur",title:"动态壁纸推荐",width:"min(760px, 94vw)",height:"min(480px, 80vh)",appendToBody:"",closeOnClickOutside:!1,listenWindowSizeChange:!0,onBeforeClose:f},{default:o((()=>[v,m.value?(t(),i("div",g,[(t(!0),i(d,null,c(r(w),(s=>(t(),i("div",{class:"video",key:s.img,onClick:e=>(s=>{u("submit",s.video),y.value.close()})(s)},[l("div",h,[s.img?(t(),i("img",{key:0,src:s.img},null,8,k)):p("",!0)])],8,b)))),128)),(t(),i(d,null,c(4,(s=>l("div",{class:"video-fake",key:s}))),64))])):p("",!0)])),_:1},512)],64)}}});y.__scopeId="data-v-c5b20e06";export default y;