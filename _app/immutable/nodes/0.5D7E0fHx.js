import{s as De,v as Q,i as R,n as ge,f as x,q as Fe,r as Ne,Q as U,R as me,e as L,c as M,b as P,S as ye,T as it,H as st,U as ct,o as lt,V as be,W as at,X as ft,a as ut,g as dt,m as O,x as we,h as B,Y as ht,Z as pt,_ as gt}from"../chunks/scheduler.IcpbmKUm.js";import{S as Re,i as Ve,b as mt,d as yt,m as bt,a as ve,t as _e,e as wt}from"../chunks/index.BshIUs1Q.js";import{b as vt}from"../chunks/paths.BT9E4a-c.js";import{o as _t,a as Be}from"../chunks/entry.BgG4qmx4.js";const xt=!0;function He(e,t){const o={},r={},n={$$scope:1};let i=e.length;for(;i--;){const s=e[i],c=t[i];if(c){for(const l in s)l in c||(r[l]=1);for(const l in c)n[l]||(o[l]=c[l],n[l]=1);e[i]=c}else for(const l in s)n[l]=1}for(const s in r)s in o||(o[s]=void 0);return o}const St=xt,It=!0,Wn=Object.freeze(Object.defineProperty({__proto__:null,prerender:It},Symbol.toStringTag,{value:"Module"})),D=/^[a-z0-9]+(-[a-z0-9]+)*$/,Y=(e,t,o,r="")=>{const n=e.split(":");if(e.slice(0,1)==="@"){if(n.length<2||n.length>3)return null;r=n.shift().slice(1)}if(n.length>3||!n.length)return null;if(n.length>1){const c=n.pop(),l=n.pop(),a={provider:n.length>0?n[0]:r,prefix:l,name:c};return t&&!q(a)?null:a}const i=n[0],s=i.split("-");if(s.length>1){const c={provider:r,prefix:s.shift(),name:s.join("-")};return t&&!q(c)?null:c}if(o&&r===""){const c={provider:r,prefix:"",name:i};return t&&!q(c,o)?null:c}return null},q=(e,t)=>e?!!((e.provider===""||e.provider.match(D))&&(t&&e.prefix===""||e.prefix.match(D))&&e.name.match(D)):!1,qe=Object.freeze({left:0,top:0,width:16,height:16}),W=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),G=Object.freeze({...qe,...W}),ee=Object.freeze({...G,body:"",hidden:!1});function kt(e,t){const o={};!e.hFlip!=!t.hFlip&&(o.hFlip=!0),!e.vFlip!=!t.vFlip&&(o.vFlip=!0);const r=((e.rotate||0)+(t.rotate||0))%4;return r&&(o.rotate=r),o}function xe(e,t){const o=kt(e,t);for(const r in ee)r in W?r in e&&!(r in o)&&(o[r]=W[r]):r in t?o[r]=t[r]:r in e&&(o[r]=e[r]);return o}function Ct(e,t){const o=e.icons,r=e.aliases||Object.create(null),n=Object.create(null);function i(s){if(o[s])return n[s]=[];if(!(s in n)){n[s]=null;const c=r[s]&&r[s].parent,l=c&&i(c);l&&(n[s]=[c].concat(l))}return n[s]}return(t||Object.keys(o).concat(Object.keys(r))).forEach(i),n}function Tt(e,t,o){const r=e.icons,n=e.aliases||Object.create(null);let i={};function s(c){i=xe(r[c]||n[c],i)}return s(t),o.forEach(s),xe(e,i)}function ze(e,t){const o=[];if(typeof e!="object"||typeof e.icons!="object")return o;e.not_found instanceof Array&&e.not_found.forEach(n=>{t(n,null),o.push(n)});const r=Ct(e);for(const n in r){const i=r[n];i&&(t(n,Tt(e,n,i)),o.push(n))}return o}const Et={provider:"",aliases:{},not_found:{},...qe};function X(e,t){for(const o in t)if(o in e&&typeof e[o]!=typeof t[o])return!1;return!0}function Qe(e){if(typeof e!="object"||e===null)return null;const t=e;if(typeof t.prefix!="string"||!e.icons||typeof e.icons!="object"||!X(e,Et))return null;const o=t.icons;for(const n in o){const i=o[n];if(!n.match(D)||typeof i.body!="string"||!X(i,ee))return null}const r=t.aliases||Object.create(null);for(const n in r){const i=r[n],s=i.parent;if(!n.match(D)||typeof s!="string"||!o[s]&&!r[s]||!X(i,ee))return null}return t}const Se=Object.create(null);function Pt(e,t){return{provider:e,prefix:t,icons:Object.create(null),missing:new Set}}function E(e,t){const o=Se[e]||(Se[e]=Object.create(null));return o[t]||(o[t]=Pt(e,t))}function ae(e,t){return Qe(t)?ze(t,(o,r)=>{r?e.icons[o]=r:e.missing.add(o)}):[]}function jt(e,t,o){try{if(typeof o.body=="string")return e.icons[t]={...o},!0}catch{}return!1}let F=!1;function Ue(e){return typeof e=="boolean"&&(F=e),F}function Ot(e){const t=typeof e=="string"?Y(e,!0,F):e;if(t){const o=E(t.provider,t.prefix),r=t.name;return o.icons[r]||(o.missing.has(r)?null:void 0)}}function At(e,t){const o=Y(e,!0,F);if(!o)return!1;const r=E(o.provider,o.prefix);return jt(r,o.name,t)}function Lt(e,t){if(typeof e!="object")return!1;if(typeof t!="string"&&(t=e.provider||""),F&&!t&&!e.prefix){let n=!1;return Qe(e)&&(e.prefix="",ze(e,(i,s)=>{s&&At(i,s)&&(n=!0)})),n}const o=e.prefix;if(!q({provider:t,prefix:o,name:"a"}))return!1;const r=E(t,o);return!!ae(r,e)}const We=Object.freeze({width:null,height:null}),Ye=Object.freeze({...We,...W}),Mt=/(-?[0-9.]*[0-9]+[0-9.]*)/g,Dt=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function Ie(e,t,o){if(t===1)return e;if(o=o||100,typeof e=="number")return Math.ceil(e*t*o)/o;if(typeof e!="string")return e;const r=e.split(Mt);if(r===null||!r.length)return e;const n=[];let i=r.shift(),s=Dt.test(i);for(;;){if(s){const c=parseFloat(i);isNaN(c)?n.push(i):n.push(Math.ceil(c*t*o)/o)}else n.push(i);if(i=r.shift(),i===void 0)return n.join("");s=!s}}function Ft(e,t="defs"){let o="";const r=e.indexOf("<"+t);for(;r>=0;){const n=e.indexOf(">",r),i=e.indexOf("</"+t);if(n===-1||i===-1)break;const s=e.indexOf(">",i);if(s===-1)break;o+=e.slice(n+1,i).trim(),e=e.slice(0,r).trim()+e.slice(s+1)}return{defs:o,content:e}}function Nt(e,t){return e?"<defs>"+e+"</defs>"+t:t}function Rt(e,t,o){const r=Ft(e);return Nt(r.defs,t+r.content+o)}const Vt=e=>e==="unset"||e==="undefined"||e==="none";function Bt(e,t){const o={...G,...e},r={...Ye,...t},n={left:o.left,top:o.top,width:o.width,height:o.height};let i=o.body;[o,r].forEach(S=>{const b=[],m=S.hFlip,d=S.vFlip;let _=S.rotate;m?d?_+=2:(b.push("translate("+(n.width+n.left).toString()+" "+(0-n.top).toString()+")"),b.push("scale(-1 1)"),n.top=n.left=0):d&&(b.push("translate("+(0-n.left).toString()+" "+(n.height+n.top).toString()+")"),b.push("scale(1 -1)"),n.top=n.left=0);let w;switch(_<0&&(_-=Math.floor(_/4)*4),_=_%4,_){case 1:w=n.height/2+n.top,b.unshift("rotate(90 "+w.toString()+" "+w.toString()+")");break;case 2:b.unshift("rotate(180 "+(n.width/2+n.left).toString()+" "+(n.height/2+n.top).toString()+")");break;case 3:w=n.width/2+n.left,b.unshift("rotate(-90 "+w.toString()+" "+w.toString()+")");break}_%2===1&&(n.left!==n.top&&(w=n.left,n.left=n.top,n.top=w),n.width!==n.height&&(w=n.width,n.width=n.height,n.height=w)),b.length&&(i=Rt(i,'<g transform="'+b.join(" ")+'">',"</g>"))});const s=r.width,c=r.height,l=n.width,a=n.height;let f,u;s===null?(u=c===null?"1em":c==="auto"?a:c,f=Ie(u,l/a)):(f=s==="auto"?l:s,u=c===null?Ie(f,a/l):c==="auto"?a:c);const h={},g=(S,b)=>{Vt(b)||(h[S]=b.toString())};g("width",f),g("height",u);const y=[n.left,n.top,l,a];return h.viewBox=y.join(" "),{attributes:h,viewBox:y,body:i}}const Ht=/\sid="(\S+)"/g,qt="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let zt=0;function Qt(e,t=qt){const o=[];let r;for(;r=Ht.exec(e);)o.push(r[1]);if(!o.length)return e;const n="suffix"+(Math.random()*16777216|Date.now()).toString(16);return o.forEach(i=>{const s=typeof t=="function"?t(i):t+(zt++).toString(),c=i.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");e=e.replace(new RegExp('([#;"])('+c+')([")]|\\.[a-z])',"g"),"$1"+s+n+"$3")}),e=e.replace(new RegExp(n,"g"),""),e}const te=Object.create(null);function Ut(e,t){te[e]=t}function ne(e){return te[e]||te[""]}function fe(e){let t;if(typeof e.resources=="string")t=[e.resources];else if(t=e.resources,!(t instanceof Array)||!t.length)return null;return{resources:t,path:e.path||"/",maxURL:e.maxURL||500,rotate:e.rotate||750,timeout:e.timeout||5e3,random:e.random===!0,index:e.index||0,dataAfterTimeout:e.dataAfterTimeout!==!1}}const ue=Object.create(null),A=["https://api.simplesvg.com","https://api.unisvg.com"],z=[];for(;A.length>0;)A.length===1||Math.random()>.5?z.push(A.shift()):z.push(A.pop());ue[""]=fe({resources:["https://api.iconify.design"].concat(z)});function Wt(e,t){const o=fe(t);return o===null?!1:(ue[e]=o,!0)}function de(e){return ue[e]}const Yt=()=>{let e;try{if(e=fetch,typeof e=="function")return e}catch{}};let ke=Yt();function Gt(e,t){const o=de(e);if(!o)return 0;let r;if(!o.maxURL)r=0;else{let n=0;o.resources.forEach(s=>{n=Math.max(n,s.length)});const i=t+".json?icons=";r=o.maxURL-n-o.path.length-i.length}return r}function Kt(e){return e===404}const Jt=(e,t,o)=>{const r=[],n=Gt(e,t),i="icons";let s={type:i,provider:e,prefix:t,icons:[]},c=0;return o.forEach((l,a)=>{c+=l.length+1,c>=n&&a>0&&(r.push(s),s={type:i,provider:e,prefix:t,icons:[]},c=l.length),s.icons.push(l)}),r.push(s),r};function Xt(e){if(typeof e=="string"){const t=de(e);if(t)return t.path}return"/"}const Zt=(e,t,o)=>{if(!ke){o("abort",424);return}let r=Xt(t.provider);switch(t.type){case"icons":{const i=t.prefix,c=t.icons.join(","),l=new URLSearchParams({icons:c});r+=i+".json?"+l.toString();break}case"custom":{const i=t.uri;r+=i.slice(0,1)==="/"?i.slice(1):i;break}default:o("abort",400);return}let n=503;ke(e+r).then(i=>{const s=i.status;if(s!==200){setTimeout(()=>{o(Kt(s)?"abort":"next",s)});return}return n=501,i.json()}).then(i=>{if(typeof i!="object"||i===null){setTimeout(()=>{i===404?o("abort",i):o("next",n)});return}setTimeout(()=>{o("success",i)})}).catch(()=>{o("next",n)})},$t={prepare:Jt,send:Zt};function en(e){const t={loaded:[],missing:[],pending:[]},o=Object.create(null);e.sort((n,i)=>n.provider!==i.provider?n.provider.localeCompare(i.provider):n.prefix!==i.prefix?n.prefix.localeCompare(i.prefix):n.name.localeCompare(i.name));let r={provider:"",prefix:"",name:""};return e.forEach(n=>{if(r.name===n.name&&r.prefix===n.prefix&&r.provider===n.provider)return;r=n;const i=n.provider,s=n.prefix,c=n.name,l=o[i]||(o[i]=Object.create(null)),a=l[s]||(l[s]=E(i,s));let f;c in a.icons?f=t.loaded:s===""||a.missing.has(c)?f=t.missing:f=t.pending;const u={provider:i,prefix:s,name:c};f.push(u)}),t}function Ge(e,t){e.forEach(o=>{const r=o.loaderCallbacks;r&&(o.loaderCallbacks=r.filter(n=>n.id!==t))})}function tn(e){e.pendingCallbacksFlag||(e.pendingCallbacksFlag=!0,setTimeout(()=>{e.pendingCallbacksFlag=!1;const t=e.loaderCallbacks?e.loaderCallbacks.slice(0):[];if(!t.length)return;let o=!1;const r=e.provider,n=e.prefix;t.forEach(i=>{const s=i.icons,c=s.pending.length;s.pending=s.pending.filter(l=>{if(l.prefix!==n)return!0;const a=l.name;if(e.icons[a])s.loaded.push({provider:r,prefix:n,name:a});else if(e.missing.has(a))s.missing.push({provider:r,prefix:n,name:a});else return o=!0,!0;return!1}),s.pending.length!==c&&(o||Ge([e],i.id),i.callback(s.loaded.slice(0),s.missing.slice(0),s.pending.slice(0),i.abort))})}))}let nn=0;function on(e,t,o){const r=nn++,n=Ge.bind(null,o,r);if(!t.pending.length)return n;const i={id:r,icons:t,callback:e,abort:n};return o.forEach(s=>{(s.loaderCallbacks||(s.loaderCallbacks=[])).push(i)}),n}function rn(e,t=!0,o=!1){const r=[];return e.forEach(n=>{const i=typeof n=="string"?Y(n,t,o):n;i&&r.push(i)}),r}var sn={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function cn(e,t,o,r){const n=e.resources.length,i=e.random?Math.floor(Math.random()*n):e.index;let s;if(e.random){let p=e.resources.slice(0);for(s=[];p.length>1;){const v=Math.floor(Math.random()*p.length);s.push(p[v]),p=p.slice(0,v).concat(p.slice(v+1))}s=s.concat(p)}else s=e.resources.slice(i).concat(e.resources.slice(0,i));const c=Date.now();let l="pending",a=0,f,u=null,h=[],g=[];typeof r=="function"&&g.push(r);function y(){u&&(clearTimeout(u),u=null)}function S(){l==="pending"&&(l="aborted"),y(),h.forEach(p=>{p.status==="pending"&&(p.status="aborted")}),h=[]}function b(p,v){v&&(g=[]),typeof p=="function"&&g.push(p)}function m(){return{startTime:c,payload:t,status:l,queriesSent:a,queriesPending:h.length,subscribe:b,abort:S}}function d(){l="failed",g.forEach(p=>{p(void 0,f)})}function _(){h.forEach(p=>{p.status==="pending"&&(p.status="aborted")}),h=[]}function w(p,v,j){const V=v!=="success";switch(h=h.filter(k=>k!==p),l){case"pending":break;case"failed":if(V||!e.dataAfterTimeout)return;break;default:return}if(v==="abort"){f=j,d();return}if(V){f=j,h.length||(s.length?J():d());return}if(y(),_(),!e.random){const k=e.resources.indexOf(p.resource);k!==-1&&k!==e.index&&(e.index=k)}l="completed",g.forEach(k=>{k(j)})}function J(){if(l!=="pending")return;y();const p=s.shift();if(p===void 0){if(h.length){u=setTimeout(()=>{y(),l==="pending"&&(_(),d())},e.timeout);return}d();return}const v={status:"pending",resource:p,callback:(j,V)=>{w(v,j,V)}};h.push(v),a++,u=setTimeout(J,e.rotate),o(p,t,v.callback)}return setTimeout(J),m}function Ke(e){const t={...sn,...e};let o=[];function r(){o=o.filter(c=>c().status==="pending")}function n(c,l,a){const f=cn(t,c,l,(u,h)=>{r(),a&&a(u,h)});return o.push(f),f}function i(c){return o.find(l=>c(l))||null}return{query:n,find:i,setIndex:c=>{t.index=c},getIndex:()=>t.index,cleanup:r}}function Ce(){}const Z=Object.create(null);function ln(e){if(!Z[e]){const t=de(e);if(!t)return;const o=Ke(t),r={config:t,redundancy:o};Z[e]=r}return Z[e]}function an(e,t,o){let r,n;if(typeof e=="string"){const i=ne(e);if(!i)return o(void 0,424),Ce;n=i.send;const s=ln(e);s&&(r=s.redundancy)}else{const i=fe(e);if(i){r=Ke(i);const s=e.resources?e.resources[0]:"",c=ne(s);c&&(n=c.send)}}return!r||!n?(o(void 0,424),Ce):r.query(t,n,o)().abort}const Te="iconify2",N="iconify",Je=N+"-count",Ee=N+"-version",Xe=36e5,fn=168,un=50;function oe(e,t){try{return e.getItem(t)}catch{}}function he(e,t,o){try{return e.setItem(t,o),!0}catch{}}function Pe(e,t){try{e.removeItem(t)}catch{}}function re(e,t){return he(e,Je,t.toString())}function ie(e){return parseInt(oe(e,Je))||0}const K={local:!0,session:!0},Ze={local:new Set,session:new Set};let pe=!1;function dn(e){pe=e}let H=typeof window>"u"?{}:window;function $e(e){const t=e+"Storage";try{if(H&&H[t]&&typeof H[t].length=="number")return H[t]}catch{}K[e]=!1}function et(e,t){const o=$e(e);if(!o)return;const r=oe(o,Ee);if(r!==Te){if(r){const c=ie(o);for(let l=0;l<c;l++)Pe(o,N+l.toString())}he(o,Ee,Te),re(o,0);return}const n=Math.floor(Date.now()/Xe)-fn,i=c=>{const l=N+c.toString(),a=oe(o,l);if(typeof a=="string"){try{const f=JSON.parse(a);if(typeof f=="object"&&typeof f.cached=="number"&&f.cached>n&&typeof f.provider=="string"&&typeof f.data=="object"&&typeof f.data.prefix=="string"&&t(f,c))return!0}catch{}Pe(o,l)}};let s=ie(o);for(let c=s-1;c>=0;c--)i(c)||(c===s-1?(s--,re(o,s)):Ze[e].add(c))}function tt(){if(!pe){dn(!0);for(const e in K)et(e,t=>{const o=t.data,r=t.provider,n=o.prefix,i=E(r,n);if(!ae(i,o).length)return!1;const s=o.lastModified||-1;return i.lastModifiedCached=i.lastModifiedCached?Math.min(i.lastModifiedCached,s):s,!0})}}function hn(e,t){const o=e.lastModifiedCached;if(o&&o>=t)return o===t;if(e.lastModifiedCached=t,o)for(const r in K)et(r,n=>{const i=n.data;return n.provider!==e.provider||i.prefix!==e.prefix||i.lastModified===t});return!0}function pn(e,t){pe||tt();function o(r){let n;if(!K[r]||!(n=$e(r)))return;const i=Ze[r];let s;if(i.size)i.delete(s=Array.from(i).shift());else if(s=ie(n),s>=un||!re(n,s+1))return;const c={cached:Math.floor(Date.now()/Xe),provider:e.provider,data:t};return he(n,N+s.toString(),JSON.stringify(c))}t.lastModified&&!hn(e,t.lastModified)||Object.keys(t.icons).length&&(t.not_found&&(t=Object.assign({},t),delete t.not_found),o("local")||o("session"))}function je(){}function gn(e){e.iconsLoaderFlag||(e.iconsLoaderFlag=!0,setTimeout(()=>{e.iconsLoaderFlag=!1,tn(e)}))}function mn(e,t){e.iconsToLoad?e.iconsToLoad=e.iconsToLoad.concat(t).sort():e.iconsToLoad=t,e.iconsQueueFlag||(e.iconsQueueFlag=!0,setTimeout(()=>{e.iconsQueueFlag=!1;const{provider:o,prefix:r}=e,n=e.iconsToLoad;delete e.iconsToLoad;let i;if(!n||!(i=ne(o)))return;i.prepare(o,r,n).forEach(c=>{an(o,c,l=>{if(typeof l!="object")c.icons.forEach(a=>{e.missing.add(a)});else try{const a=ae(e,l);if(!a.length)return;const f=e.pendingIcons;f&&a.forEach(u=>{f.delete(u)}),pn(e,l)}catch(a){console.error(a)}gn(e)})})}))}const yn=(e,t)=>{const o=rn(e,!0,Ue()),r=en(o);if(!r.pending.length){let l=!0;return t&&setTimeout(()=>{l&&t(r.loaded,r.missing,r.pending,je)}),()=>{l=!1}}const n=Object.create(null),i=[];let s,c;return r.pending.forEach(l=>{const{provider:a,prefix:f}=l;if(f===c&&a===s)return;s=a,c=f,i.push(E(a,f));const u=n[a]||(n[a]=Object.create(null));u[f]||(u[f]=[])}),r.pending.forEach(l=>{const{provider:a,prefix:f,name:u}=l,h=E(a,f),g=h.pendingIcons||(h.pendingIcons=new Set);g.has(u)||(g.add(u),n[a][f].push(u))}),i.forEach(l=>{const{provider:a,prefix:f}=l;n[a][f].length&&mn(l,n[a][f])}),t?on(t,r,i):je};function bn(e,t){const o={...e};for(const r in t){const n=t[r],i=typeof n;r in We?(n===null||n&&(i==="string"||i==="number"))&&(o[r]=n):i===typeof o[r]&&(o[r]=r==="rotate"?n%4:n)}return o}const wn=/[\s,]+/;function vn(e,t){t.split(wn).forEach(o=>{switch(o.trim()){case"horizontal":e.hFlip=!0;break;case"vertical":e.vFlip=!0;break}})}function _n(e,t=0){const o=e.replace(/^-?[0-9.]*/,"");function r(n){for(;n<0;)n+=4;return n%4}if(o===""){const n=parseInt(e);return isNaN(n)?0:r(n)}else if(o!==e){let n=0;switch(o){case"%":n=25;break;case"deg":n=90}if(n){let i=parseFloat(e.slice(0,e.length-o.length));return isNaN(i)?0:(i=i/n,i%1===0?r(i):0)}}return t}function xn(e,t){let o=e.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const r in t)o+=" "+r+'="'+t[r]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+o+">"+e+"</svg>"}function Sn(e){return e.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function In(e){return"data:image/svg+xml,"+Sn(e)}function kn(e){return'url("'+In(e)+'")'}const Oe={...Ye,inline:!1},Cn={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},Tn={display:"inline-block"},se={"background-color":"currentColor"},nt={"background-color":"transparent"},Ae={image:"var(--svg)",repeat:"no-repeat",size:"100% 100%"},Le={"-webkit-mask":se,mask:se,background:nt};for(const e in Le){const t=Le[e];for(const o in Ae)t[e+"-"+o]=Ae[o]}function En(e){return e+(e.match(/^[-0-9.]+$/)?"px":"")}function Pn(e,t){const o=bn(Oe,t),r=t.mode||"svg",n=r==="svg"?{...Cn}:{};e.body.indexOf("xlink:")===-1&&delete n["xmlns:xlink"];let i=typeof t.style=="string"?t.style:"";for(let m in t){const d=t[m];if(d!==void 0)switch(m){case"icon":case"style":case"onLoad":case"mode":break;case"inline":case"hFlip":case"vFlip":o[m]=d===!0||d==="true"||d===1;break;case"flip":typeof d=="string"&&vn(o,d);break;case"color":i=i+(i.length>0&&i.trim().slice(-1)!==";"?";":"")+"color: "+d+"; ";break;case"rotate":typeof d=="string"?o[m]=_n(d):typeof d=="number"&&(o[m]=d);break;case"ariaHidden":case"aria-hidden":d!==!0&&d!=="true"&&delete n["aria-hidden"];break;default:if(m.slice(0,3)==="on:")break;Oe[m]===void 0&&(n[m]=d)}}const s=Bt(e,o),c=s.attributes;if(o.inline&&(i="vertical-align: -0.125em; "+i),r==="svg"){Object.assign(n,c),i!==""&&(n.style=i);let m=0,d=t.id;return typeof d=="string"&&(d=d.replace(/-/g,"_")),{svg:!0,attributes:n,body:Qt(s.body,d?()=>d+"ID"+m++:"iconifySvelte")}}const{body:l,width:a,height:f}=e,u=r==="mask"||(r==="bg"?!1:l.indexOf("currentColor")!==-1),h=xn(l,{...c,width:a+"",height:f+""}),y={"--svg":kn(h)},S=m=>{const d=c[m];d&&(y[m]=En(d))};S("width"),S("height"),Object.assign(y,Tn,u?se:nt);let b="";for(const m in y)b+=m+": "+y[m]+";";return n.style=b+i,{svg:!1,attributes:n}}Ue(!0);Ut("",$t);if(typeof document<"u"&&typeof window<"u"){tt();const e=window;if(e.IconifyPreload!==void 0){const t=e.IconifyPreload,o="Invalid IconifyPreload syntax.";typeof t=="object"&&t!==null&&(t instanceof Array?t:[t]).forEach(r=>{try{(typeof r!="object"||r===null||r instanceof Array||typeof r.icons!="object"||typeof r.prefix!="string"||!Lt(r))&&console.error(o)}catch{console.error(o)}})}if(e.IconifyProviders!==void 0){const t=e.IconifyProviders;if(typeof t=="object"&&t!==null)for(let o in t){const r="IconifyProviders["+o+"] is invalid.";try{const n=t[o];if(typeof n!="object"||!n||n.resources===void 0)continue;Wt(o,n)||console.error(r)}catch{console.error(r)}}}}function jn(e,t,o,r,n){function i(){t.loading&&(t.loading.abort(),t.loading=null)}if(typeof e=="object"&&e!==null&&typeof e.body=="string")return t.name="",i(),{data:{...G,...e}};let s;if(typeof e!="string"||(s=Y(e,!1,!0))===null)return i(),null;const c=Ot(s);if(!c)return o&&(!t.loading||t.loading.name!==e)&&(i(),t.name="",t.loading={name:e,abort:yn([s],r)}),null;i(),t.name!==e&&(t.name=e,n&&!t.destroyed&&n(e));const l=["iconify"];return s.prefix!==""&&l.push("iconify--"+s.prefix),s.provider!==""&&l.push("iconify--"+s.provider),{data:c,classes:l}}function On(e,t){return e?Pn({...G,...e},t):null}function Me(e){let t;function o(i,s){return i[0].svg?Ln:An}let r=o(e),n=r(e);return{c(){n.c(),t=Q()},l(i){n.l(i),t=Q()},m(i,s){n.m(i,s),R(i,t,s)},p(i,s){r===(r=o(i))&&n?n.p(i,s):(n.d(1),n=r(i),n&&(n.c(),n.m(t.parentNode,t)))},d(i){i&&x(t),n.d(i)}}}function An(e){let t,o=[e[0].attributes],r={};for(let n=0;n<o.length;n+=1)r=U(r,o[n]);return{c(){t=L("span"),this.h()},l(n){t=M(n,"SPAN",{}),P(t).forEach(x),this.h()},h(){ye(t,r)},m(n,i){R(n,t,i)},p(n,i){ye(t,r=He(o,[i&1&&n[0].attributes]))},d(n){n&&x(t)}}}function Ln(e){let t,o,r=e[0].body+"",n=[e[0].attributes],i={};for(let s=0;s<n.length;s+=1)i=U(i,n[s]);return{c(){t=it("svg"),o=new st(!0),this.h()},l(s){t=ct(s,"svg",{});var c=P(t);o=lt(c,!0),c.forEach(x),this.h()},h(){o.a=null,be(t,i)},m(s,c){R(s,t,c),o.m(r,t)},p(s,c){c&1&&r!==(r=s[0].body+"")&&o.p(r),be(t,i=He(n,[c&1&&s[0].attributes]))},d(s){s&&x(t)}}}function Mn(e){let t,o=e[0]&&Me(e);return{c(){o&&o.c(),t=Q()},l(r){o&&o.l(r),t=Q()},m(r,n){o&&o.m(r,n),R(r,t,n)},p(r,[n]){r[0]?o?o.p(r,n):(o=Me(r),o.c(),o.m(t.parentNode,t)):o&&(o.d(1),o=null)},i:ge,o:ge,d(r){r&&x(t),o&&o.d(r)}}}function Dn(e,t,o){const r={name:"",loading:null,destroyed:!1};let n=!1,i=0,s;const c=a=>{typeof t.onLoad=="function"&&t.onLoad(a),at()("load",{icon:a})};function l(){o(3,i++,i)}return Fe(()=>{o(2,n=!0)}),Ne(()=>{o(1,r.destroyed=!0,r),r.loading&&(r.loading.abort(),o(1,r.loading=null,r))}),e.$$set=a=>{o(6,t=U(U({},t),me(a)))},e.$$.update=()=>{{const a=jn(t.icon,r,n,l,c);o(0,s=a?On(a.data,t):null),s&&a.classes&&o(0,s.attributes.class=(typeof t.class=="string"?t.class+" ":"")+a.classes.join(" "),s)}},t=me(t),[s,r,n,i]}class Fn extends Re{constructor(t){super(),Ve(this,t,Dn,Mn,De,{})}}class ot extends Set{}const T={};let $=0,ce=!1;const le=new Set;function C(e,t){const o=T[e];o&&o.forEach(r=>{try{r.listener(t)}catch(n){console.error(`Error in callback for event "${e}": ${n}`)}r.auto_clean&&o.delete(r)})}function rt(e,t,o=!0){function r(){let n=T[e];n||(T[e]=new ot,n=T[e]);for(const i of(n==null?void 0:n.values())??[])if(i.listener===t){n==null||n.delete(i);break}}if(!o)r();else try{Be(()=>{r()})}catch{console.warn("I tried to wrap the function within afterNavigate and failed...are you calling this inside afterNavigate?"),r()}}function I(e,t,{registerDuringTransition:o=!1,autoWrap:r=!0,autoClean:n=!0}={}){const i=(c=r)=>rt(e,t,c);function s(){function c(){let l=T[e];l||(T[e]=new ot,l=T[e]),l==null||l.add({listener:t,auto_clean:n})}if(ce&&!o)return le.add(()=>{c()}),i;c()}if(!r)return s(),i;try{Be(()=>{s()})}catch{console.warn("I tried to wrap the function within afterNavigate and failed...are you calling this inside afterNavigate?"),s()}return i}function Nn(e,t=!0){let o;const r=I("transition-finished",()=>{o&&o.length>0&&document.documentElement.classList.remove(...o)},{registerDuringTransition:!1,autoWrap:t});I("before-start-view-transition",n=>{o=Array.isArray(e)?e:e(n),o?document.documentElement.classList.add(...o):r(!0)},{registerDuringTransition:!1,autoWrap:t})}function Rn(e,t){if(typeof t=="string"){e.style.setProperty("view-transition-name",t);return}function o(n){let i;const s=[];s.push(I("after-navigation-complete",a=>{const{top:f}=e.getBoundingClientRect(),u=f<window.innerHeight+window.scrollY,h={...a,node:e,isInViewport:u};let g=!1;if(n.applyImmediately!=null&&(g=typeof n.applyImmediately=="boolean"?n.applyImmediately:n.applyImmediately(h)),g){const y=typeof n.name=="function"?n.name(h):n.name;e.style.setProperty("view-transition-name",y),s.push(I("transition-finished",()=>{e.style.setProperty("view-transition-name",null)},{registerDuringTransition:!0,autoWrap:!1,autoClean:!1}))}},{registerDuringTransition:!0,autoWrap:!1,autoClean:!1}));const c=I("before-start-view-transition",a=>{let f=!0;const{top:u}=e.getBoundingClientRect(),h=u<window.innerHeight+window.scrollY,g={...a,node:e,isInViewport:h};if(n.shouldApply!=null&&(f=typeof n.shouldApply=="boolean"?n.shouldApply:n.shouldApply(g)),f){const y=typeof n.name=="function"?n.name(g):n.name;e.style.setProperty("view-transition-name",y),s.push(I("transition-finished",()=>{e.style.setProperty("view-transition-name",null)},{autoWrap:!1,registerDuringTransition:!0,autoClean:!1})),n.classes&&(i=Array.isArray(n.classes)?n.classes:n.classes(g)),i?document.documentElement.classList.add(...i):l==null||l()}},{registerDuringTransition:!1,autoWrap:!1,autoClean:!1});s.push(c);let l;return l=I("transition-finished",()=>{i&&i.length>0&&document.documentElement.classList.remove(...i)},{registerDuringTransition:!1,autoWrap:!1,autoClean:!1}),s.push(l),()=>{s.forEach(a=>{a(!1)})}}let r=o(t);return{update(n){if(r==null||r(),r=void 0,typeof n=="string"){e.style.setProperty("view-transition-name",n);return}r=o(n)},destroy(){r==null||r()}}}function Vn(){return $===0&&St&&document.startViewTransition&&($++,_t(e=>{if(document.startViewTransition)return new Promise(t=>{C("before-start-view-transition",{navigation:e});const o=document.startViewTransition(async()=>{ce=!0,C("before-navigation",{navigation:e}),t(),C("before-navigation-complete",{navigation:e}),await e.complete,C("after-navigation-complete",{navigation:e})});o.ready.then(()=>{C("transition-ready",{navigation:e,transition:o})}).catch(console.error),o.updateCallbackDone.then(()=>{C("update-callback-done",{navigation:e,transition:o})}).catch(console.error),o.finished.then(()=>{C("transition-finished",{navigation:e,transition:o}),ce=!1,le.forEach(r=>{r()}),le.clear()}).catch(console.error)})}),Ne(()=>{$--})),{on:I,off:rt,transition:Rn,classes:Nn}}function Bn(e){let t,o,r,n,i,s,c;n=new Fn({props:{icon:"material-symbols:home-app-logo",height:30}});const l=e[2].default,a=ft(l,e,e[1],null);return{c(){t=L("main"),o=L("header"),r=L("a"),mt(n.$$.fragment),i=ut(),s=L("div"),a&&a.c(),this.h()},l(f){t=M(f,"MAIN",{class:!0});var u=P(t);o=M(u,"HEADER",{style:!0,class:!0});var h=P(o);r=M(h,"A",{href:!0,class:!0});var g=P(r);yt(n.$$.fragment,g),g.forEach(x),h.forEach(x),i=dt(u),s=M(u,"DIV",{class:!0});var y=P(s);a&&a.l(y),y.forEach(x),u.forEach(x),this.h()},h(){O(r,"href",vt+"/"),O(r,"class","svelte-1gbv4yu"),we(o,"top",e[0]?"-50px":"0"),O(o,"class","svelte-1gbv4yu"),O(s,"class","svelte-1gbv4yu"),O(t,"class","svelte-1gbv4yu")},m(f,u){R(f,t,u),B(t,o),B(o,r),bt(n,r,null),B(t,i),B(t,s),a&&a.m(s,null),c=!0},p(f,[u]){(!c||u&1)&&we(o,"top",f[0]?"-50px":"0"),a&&a.p&&(!c||u&2)&&ht(a,l,f,f[1],c?gt(l,f[1],u,null):pt(f[1]),null)},i(f){c||(ve(n.$$.fragment,f),ve(a,f),c=!0)},o(f){_e(n.$$.fragment,f),_e(a,f),c=!1},d(f){f&&x(t),wt(n),a&&a.d(f)}}}function Hn(e,t,o){let{$$slots:r={},$$scope:n}=t;Vn();let i=0,s=!1;return Fe(()=>{window.addEventListener("scroll",()=>{const c=window.pageYOffset;o(0,s=c>i),i=c})}),e.$$set=c=>{"$$scope"in c&&o(1,n=c.$$scope)},[s,n,r]}class Yn extends Re{constructor(t){super(),Ve(this,t,Hn,Bn,De,{})}}export{Yn as component,Wn as universal};