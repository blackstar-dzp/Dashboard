var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,o=Object.getOwnPropertySymbols,n=Object.prototype.propertyIsEnumerable,r=(t,o,n)=>o in t?e(t,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[o]=n,a=(e,a)=>{for(var i in a||(a={}))t.call(a,i)&&r(e,i,a[i]);if(o)for(var i of o(a))n.call(a,i)&&r(e,i,a[i]);return e};import{m as i}from"./index.e885f6b3.js";import{d as p,e as s,D as c,f as l,o as d,j as u,t as m,u as S}from"./element-plus.9cd31797.js";var w=p({name:"Clock",props:{componentSetting:{type:Object,required:!0}},setup(e){var t;const o=s(n());function n(){const e=(new Date).getHours(),t=(new Date).getMinutes();return`${e}:${t<10?"0"+t:t}`}const r=(null==(t=e.componentSetting)?void 0:t.duration)||5e3,a=window.setInterval((()=>{o.value=n()}),r);c((()=>{window.clearInterval(a)}));const p=l((()=>i(e.componentSetting.position)));return{now:o,positionCSS:p}}});const f=S()(((e,t,o,n,r,i)=>(d(),u("div",{class:"wrapper",style:a({fontSize:e.componentSetting.textFontSize+"px",color:e.componentSetting.textColor,textShadow:e.componentSetting.textShadow,padding:e.componentSetting.padding+"px"},e.positionCSS)},m(e.now),5))));w.render=f,w.__scopeId="data-v-77561e70";export default w;
