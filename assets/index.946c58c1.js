import{s as e,u as t,c as n}from"./index.dbf25518.js";import{d as i,f as a,r as o,A as s,B as d,e as l,K as r,p as c,h as g,E as u,o as y,j as k,s as p,F as v,k as m,t as f,l as h,q as C,m as I,n as w,a5 as S,u as b,J as M}from"./element-plus.7d629863.js";const x={tab:{span:1},Q:{keyCode:81},W:{keyCode:87},E:{keyCode:69},R:{keyCode:82},T:{keyCode:84},Y:{keyCode:89},U:{keyCode:85},I:{keyCode:73},O:{keyCode:79},P:{keyCode:80},brackets:{span:1},caps:{span:2},A:{keyCode:65},S:{keyCode:83},D:{keyCode:68},F:{keyCode:70},G:{keyCode:71},H:{keyCode:72},J:{keyCode:74},K:{keyCode:75},L:{keyCode:76},semi:{span:2},shift:{span:3},Z:{keyCode:90},X:{keyCode:88},C:{keyCode:67},V:{keyCode:86},B:{keyCode:66},N:{keyCode:78},M:{keyCode:77}};function K(e){return new Promise(((t,n)=>{(function(e,t="image/png",n,i){return new Promise(((a,o)=>{const s=new XMLHttpRequest;s.open("GET",e,!0),s.responseType="arraybuffer",i&&(s.timeout=i),s.onload=e=>{if(200===s.status){const e=new Uint8Array(s.response);let n=e.length;const i=new Array(n);for(;n--;)i[n]=String.fromCharCode(e[n]);const o=i.join(""),d=window.btoa(o);a("data:"+(t||"image/png")+";base64,"+d)}},s.onerror=e=>{o(e)},s.onprogress=e=>{n&&n(e)},i&&(s.ontimeout=e=>{s.abort(),o(e)}),s.send()}))})(`http://favicon.cccyun.cc/${e}`,"image/x-icon",null,5e3).then((e=>{const i=new Image;i.src=e,i.onload=()=>{const e=document.createElement("canvas"),n=e.getContext("2d"),a=i.width>32?32:i.width,o=i.height>32?32:i.height;e.width=a,e.height=o,n.drawImage(i,0,0,a,o);const s=n.getImageData(0,0,a,o),[d,l,r,c]=[255,255,255,255];for(let t=0;t<s.data.length;t+=4){const e=s.data[t],n=s.data[t+1],i=s.data[t+2],a=s.data[t+3];Math.sqrt((e-d)**2+(n-l)**2+(i-r)**2+(a-c)**2)<=0&&(s.data[t]=0,s.data[t+1]=0,s.data[t+2]=0,s.data[t+3]=0)}n.putImageData(s,0,0);const g=e.toDataURL("image/png");t(g)},i.onerror=e=>{n(e)}}),(e=>{n(e)}))}))}var A=i({name:"Collection",components:{AnimationDialog:e},props:{componentSetting:{type:Object,required:!0},element:{type:Object,required:!0}},setup(e){const i=t(),c=a((()=>e.componentSetting.userSettingKeyMap||{})),g=o({editingActive:!1,editingInfo:{key:"",url:"",remark:""}}),u=e=>{const t=e.keyCode,n=Object.keys(x).find((e=>x[e].keyCode===t));n&&c.value[n]&&window.open(c.value[n].url)};s((()=>{document.addEventListener("keydown",u)})),d((()=>{document.removeEventListener("keydown",u)}));const y=l(),k=()=>{setTimeout((()=>{g.editingInfo.key="",g.editingInfo.url="",g.editingInfo.remark="",g.editingActive=!1}),200)},p=l(!1),v=t=>{const n=JSON.parse(JSON.stringify(r(e.element)));n.componentSetting.userSettingKeyMap=t,i.commit("editComponent",n)};return{keyboardMap:x,userSettingKeyMap:c,handleKeyClick:(e,t)=>{t&&c.value[t]?window.open(c.value[t].url):(y.value.open(e.currentTarget),g.editingInfo.key=t,setTimeout((()=>{g.editingActive=!0}),200))},handleDialogClose:k,showDialog:(e,t)=>{var n,i;const a=null==(i=null==(n=null==e?void 0:e.currentTarget)?void 0:n.parentNode)?void 0:i.parentNode;y.value.open(a),g.editingInfo.key=t;const{url:o,remark:s}=c.value[t];g.editingInfo.url=o,g.editingInfo.remark=s,setTimeout((()=>{g.editingActive=!0}),200)},editState:g,clearEidtInfo:()=>{if(g.editingInfo.url&&g.editingInfo.remark&&confirm("确定清除该按键绑定的网页吗?")){g.editingInfo.url="",g.editingInfo.remark="";const e=r(c.value);delete e[g.editingInfo.key],v(e),k(),y.value.close()}},handleImgError:e=>{const t=e.currentTarget;t.style.visibility="hidden",t.nextElementSibling.style.visibility="visible"},handleUserKeySave:async()=>{if(g.editingInfo.url&&g.editingInfo.remark)if(/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/.test(g.editingInfo.url)){/https?:\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/.test(g.editingInfo.url)||(g.editingInfo.url="http://"+g.editingInfo.url),p.value=!0;let[e,t]=await n(K(g.editingInfo.url));e&&(t=`http://favicon.cccyun.cc/${g.editingInfo.url}`),c.value[g.editingInfo.key]={url:g.editingInfo.url,remark:g.editingInfo.remark,icon:t},v(r(c)),k(),y.value.close(),p.value=!1}else window.alert("URL地址不正确")},saveLoading:p,dialog:y}}});const E=b();c("data-v-0e7ac35c");const D={class:"wrapper"},L={class:"keyboard-mode"},T={class:"keys"},U={class:"keys-name"},_=p("svg",{class:"icon",viewBox:"0 0 1024 1024",width:"14",height:"14"},[p("path",{d:"M231.08266667 509.49688889c-0.11377778 51.76888889-41.87022222 93.52533333-93.75288889 93.41155556-51.65511111-0.11377778-93.63911111-42.09777778-93.52533333-93.86666667 0-51.54133333 42.21155555-93.52533333 93.98044444-93.41155556 51.65511111 0.11377778 93.29777778 41.984 93.29777778 93.86666667z m656.49777778-93.75288889c51.76888889 0 93.86666667 41.87022222 93.86666666 93.52533333 0.11377778 51.65511111-41.87022222 93.75288889-93.63911111 93.75288889-51.88266667 0-93.75288889-41.64266667-93.75288889-93.52533333s41.64266667-93.75288889 93.52533334-93.75288889zM512.45511111 603.02222222c-51.65511111 0-93.98044445-42.43911111-93.75288889-93.75288889 0.34133333-51.76888889 42.21155555-93.52533333 93.98044445-93.52533333 51.65511111 0 93.86666667 42.21155555 93.63911111 93.75288889-0.11377778 51.65511111-42.09777778 93.52533333-93.86666667 93.52533333z"})],-1),z={key:1,class:"plus-box"},j=p("svg",{class:"icon",viewBox:"0 0 1024 1024",width:"20",height:"20"},[p("path",{d:"M896 469.333333H554.666667V128a42.666667 42.666667 0 0 0-85.333334 0v341.333333H128a42.666667 42.666667 0 0 0 0 85.333334h341.333333v341.333333a42.666667 42.666667 0 0 0 85.333334 0V554.666667h341.333333a42.666667 42.666667 0 0 0 0-85.333334z"})],-1),B={key:2,class:"icon-box"},O={class:"no-icon",style:{visibility:"hidden"}},R={key:3,class:"mark-text"},q=p("div",{class:"keys-wrapper",style:{width:"9.08%"}},[p("div",{class:"keys-box"},[p("div",{class:"keys"})])],-1),N={class:"editing-key"},V=p("div",{class:"label"},"URL",-1),Z=p("div",{class:"line"},null,-1),H=p("div",{class:"label"},"Remark",-1),J=p("div",{class:"line"},null,-1),P={class:"footer",style:{"text-align":"right",padding:"12px"}},$=M("清空"),F=M("确认");g();const G=E(((e,t,n,i,a,o)=>{const s=u("el-button"),d=u("animation-dialog");return y(),k("div",D,[p("div",L,[(y(!0),k(v,null,m(e.keyboardMap,((n,i)=>(y(),k("div",{class:["keys-wrapper",{hidden:n.span}],key:i,style:{width:(n.span?4.5*n.span:9)+"%"}},[p("div",{class:"keys-box",onClick:t=>e.handleKeyClick(t,i)},[p("div",T,[p("div",U,f(i),1),e.userSettingKeyMap[i]?(y(),k("div",{key:0,class:"edit-icon-box",onClick:h((t=>e.showDialog(t,i)),["stop"])},[_],8,["onClick"])):C("",!0),e.userSettingKeyMap[i]?C("",!0):(y(),k("div",z,[j])),e.userSettingKeyMap[i]?(y(),k("div",B,[p("img",{class:"icon",src:e.userSettingKeyMap[i].icon||`http://favicon.cccyun.cc/${e.userSettingKeyMap[i].url}`,alt:"link",onError:t[1]||(t[1]=(...t)=>e.handleImgError&&e.handleImgError(...t))},null,40,["src"]),p("div",O,f(e.userSettingKeyMap[i].remark.slice(0,1)),1)])):C("",!0),e.userSettingKeyMap[i]&&e.userSettingKeyMap[i].remark?(y(),k("div",R,f(e.userSettingKeyMap[i].remark),1)):C("",!0)])],8,["onClick"])],6)))),128)),q]),p(d,{ref:"dialog",class:"an-dialog",customClass:"key-edit-dialog",width:"300px",height:"300px",onBeforeClose:e.handleDialogClose},{footer:E((()=>[p("div",P,[p(s,{disabled:!e.editState.editingInfo.url&&!e.editState.editingInfo.remark,onClick:e.clearEidtInfo},{default:E((()=>[$])),_:1},8,["disabled","onClick"]),p(s,{loading:e.saveLoading,onClick:e.handleUserKeySave},{default:E((()=>[F])),_:1},8,["loading","onClick"])])])),default:E((()=>[I(p("div",{class:"edit-content",onKeydown:t[4]||(t[4]=h((()=>{}),["stop"]))},[p("div",N,f(e.editState.editingInfo.key),1),p("div",{class:["row-input",{active:e.editState.editingInfo.url.length>0}]},[I(p("input",{type:"text","onUpdate:modelValue":t[2]||(t[2]=t=>e.editState.editingInfo.url=t)},null,512),[[S,e.editState.editingInfo.url]]),V,Z],2),p("div",{class:["row-input",{active:e.editState.editingInfo.remark.length>0}]},[I(p("input",{type:"text","onUpdate:modelValue":t[3]||(t[3]=t=>e.editState.editingInfo.remark=t)},null,512),[[S,e.editState.editingInfo.remark]]),H,J],2)],544),[[w,e.editState.editingActive]])])),_:1},8,["onBeforeClose"])])}));A.render=G,A.__scopeId="data-v-0e7ac35c";export default A;
