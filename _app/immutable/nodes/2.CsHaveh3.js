import{s as L,n as b}from"../chunks/scheduler.CtbWrGNo.js";import{S,i as I,e as d,c as u,a as m,d as f,g as C,k as T,t as j,s as q,b as H,f as N,l as _,h as r,j as O}from"../chunks/index.B9jJHyoF.js";import{b as v}from"../chunks/paths.D7eHdITT.js";function E(l){return(l==null?void 0:l.length)!==void 0?l:Array.from(l)}function x(l,a,s){const e=l.slice();return e[1]=a[s],e}function A(l){let a,s,e,t=l[1].title+"",c,n,h;return{c(){a=d("article"),s=d("a"),e=d("h2"),c=j(t),h=q(),this.h()},l(o){a=u(o,"ARTICLE",{});var i=m(a);s=u(i,"A",{href:!0});var g=m(s);e=u(g,"H2",{});var p=m(e);c=H(p,t),p.forEach(f),g.forEach(f),h=N(i),i.forEach(f),this.h()},h(){_(s,"href",n=v+"/blogs/"+l[1].id)},m(o,i){C(o,a,i),r(a,s),r(s,e),r(e,c),r(a,h)},p(o,i){i&1&&t!==(t=o[1].title+"")&&O(c,t),i&1&&n!==(n=v+"/blogs/"+o[1].id)&&_(s,"href",n)},d(o){o&&f(a)}}}function P(l){let a,s=E(l[0].blogList.contents),e=[];for(let t=0;t<s.length;t+=1)e[t]=A(x(l,s,t));return{c(){a=d("section");for(let t=0;t<e.length;t+=1)e[t].c()},l(t){a=u(t,"SECTION",{});var c=m(a);for(let n=0;n<e.length;n+=1)e[n].l(c);c.forEach(f)},m(t,c){C(t,a,c);for(let n=0;n<e.length;n+=1)e[n]&&e[n].m(a,null)},p(t,[c]){if(c&1){s=E(t[0].blogList.contents);let n;for(n=0;n<s.length;n+=1){const h=x(t,s,n);e[n]?e[n].p(h,c):(e[n]=A(h),e[n].c(),e[n].m(a,null))}for(;n<e.length;n+=1)e[n].d(1);e.length=s.length}},i:b,o:b,d(t){t&&f(a),T(e,t)}}}function R(l,a,s){let{data:e}=a;return l.$$set=t=>{"data"in t&&s(0,e=t.data)},[e]}class D extends S{constructor(a){super(),I(this,a,R,P,L,{data:0})}}export{D as component};