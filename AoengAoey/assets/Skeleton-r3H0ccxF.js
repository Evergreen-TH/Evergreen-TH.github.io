import{a as d}from"./rolldown-runtime-W-g5d7YK.js";import{c as l,l as u}from"./motion-vendor-BP310aZ0.js";var c=d(u(),1),a=l(),s="ev-skeleton-style",m=`
.ev-skeleton{position:relative;overflow:hidden;background-color:rgba(148,163,184,0.18);isolation:isolate}
.ev-skeleton::after{content:"";position:absolute;inset:0;transform:translateX(-100%);
  background:linear-gradient(90deg,transparent 0%,rgba(255,255,255,0.65) 50%,transparent 100%);
  animation:ev-skeleton-sweep 1.5s ease-in-out infinite}
[data-theme="dark"] .ev-skeleton{background-color:rgba(255,255,255,0.07)}
[data-theme="dark"] .ev-skeleton::after{background:linear-gradient(90deg,transparent 0%,rgba(255,255,255,0.07) 50%,transparent 100%)}
@keyframes ev-skeleton-sweep{100%{transform:translateX(100%)}}
@media (prefers-reduced-motion: reduce){.ev-skeleton::after{animation:none;display:none}}
`;function f(){(0,c.useInsertionEffect)(()=>{if(typeof document>"u"||document.getElementById(s))return;const e=document.createElement("style");e.id=s,e.textContent=m,document.head.appendChild(e)},[])}function k({className:e="",rounded:n="rounded-lg",width:r,height:o,style:t,...i}){return f(),(0,a.jsx)("div",{"aria-hidden":"true",className:`ev-skeleton ${n} ${e}`,style:{width:r,height:o,...t},...i})}function g({lines:e=2,className:n="",lineClassName:r="h-3"}){return(0,a.jsx)("div",{"aria-hidden":"true",className:`space-y-2 ${n}`,children:Array.from({length:e},(o,t)=>(0,a.jsx)(k,{rounded:"rounded-full",className:`${r} ${t===e-1&&e>1?"w-2/3":"w-full"}`},t))})}export{g as n,k as t};
