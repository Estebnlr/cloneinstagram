(()=>{"use strict";function e(){}const t=e=>e;function n(e,t){for(const n in t)e[n]=t[n];return e}function s(e){return e()}function o(){return Object.create(null)}function r(e){e.forEach(s)}function l(e){return"function"==typeof e}function i(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}let a;function c(e,t){return e===t||(a||(a=document.createElement("a")),a.href=t,e===a.href)}function u(e,t,n,s){if(e){const o=d(e,t,n,s);return e[0](o)}}function d(e,t,s,o){return e[1]&&o?n(s.ctx.slice(),e[1](o(t))):s.ctx}function f(e,t,n,s){if(e[2]&&s){const o=e[2](s(n));if(void 0===t.dirty)return o;if("object"==typeof o){const e=[],n=Math.max(t.dirty.length,o.length);for(let s=0;s<n;s+=1)e[s]=t.dirty[s]|o[s];return e}return t.dirty|o}return t.dirty}function m(e,t,n,s,o,r){if(o){const l=d(t,n,s,r);e.p(l,o)}}function p(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let e=0;e<n;e++)t[e]=-1;return t}return-1}const h="undefined"!=typeof window;let v=h?()=>window.performance.now():()=>Date.now(),$=h?e=>requestAnimationFrame(e):e;const g=new Set;function y(e){g.forEach((t=>{t.c(e)||(g.delete(t),t.f())})),0!==g.size&&$(y)}const b="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;class k{_listeners="WeakMap"in b?new WeakMap:void 0;_observer=void 0;options;constructor(e){this.options=e}observe(e,t){return this._listeners.set(e,t),this._getObserver().observe(e,this.options),()=>{this._listeners.delete(e),this._observer.unobserve(e)}}_getObserver(){return this._observer??(this._observer=new ResizeObserver((e=>{for(const t of e)k.entries.set(t.target,t),this._listeners.get(t.target)?.(t)})))}}k.entries="WeakMap"in b?new WeakMap:void 0;let x=!1;function z(e,t){e.appendChild(t)}function w(e,t,n){const s=_(e);if(!s.getElementById(t)){const e=E("style");e.id=t,e.textContent=n,S(s,e)}}function _(e){if(!e)return document;const t=e.getRootNode?e.getRootNode():e.ownerDocument;return t&&t.host?t:e.ownerDocument}function C(e){const t=E("style");return t.textContent="/* empty */",S(_(e),t),t.sheet}function S(e,t){return z(e.head||e,t),t.sheet}function M(e,t,n){e.insertBefore(t,n||null)}function j(e){e.parentNode&&e.parentNode.removeChild(e)}function E(e){return document.createElement(e)}function L(e){return document.createTextNode(e)}function P(){return L(" ")}function H(e,t,n,s){return e.addEventListener(t,n,s),()=>e.removeEventListener(t,n,s)}function A(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function T(e,t){t=""+t,e.data!==t&&(e.data=t)}function O(e,t,n){e.classList.toggle(t,!!n)}const N=new Map;let F,R=0;function q(e,t,n,s,o,r,l,i=0){const a=16.666/s;let c="{\n";for(let e=0;e<=1;e+=a){const s=t+(n-t)*r(e);c+=100*e+`%{${l(s,1-s)}}\n`}const u=c+`100% {${l(n,1-n)}}\n}`,d=`__svelte_${function(e){let t=5381,n=e.length;for(;n--;)t=(t<<5)-t^e.charCodeAt(n);return t>>>0}(u)}_${i}`,f=_(e),{stylesheet:m,rules:p}=N.get(f)||function(e,t){const n={stylesheet:C(t),rules:{}};return N.set(e,n),n}(f,e);p[d]||(p[d]=!0,m.insertRule(`@keyframes ${d} ${u}`,m.cssRules.length));const h=e.style.animation||"";return e.style.animation=`${h?`${h}, `:""}${d} ${s}ms linear ${o}ms 1 both`,R+=1,d}function B(e){F=e}function D(e,t){const n=e.$$.callbacks[t.type];n&&n.slice().forEach((e=>e.call(this,t)))}const W=[],I=[];let J=[];const G=[],U=Promise.resolve();let V=!1;function Y(e){J.push(e)}const Z=new Set;let K,Q=0;function X(){if(0!==Q)return;const e=F;do{try{for(;Q<W.length;){const e=W[Q];Q++,B(e),ee(e.$$)}}catch(e){throw W.length=0,Q=0,e}for(B(null),W.length=0,Q=0;I.length;)I.pop()();for(let e=0;e<J.length;e+=1){const t=J[e];Z.has(t)||(Z.add(t),t())}J.length=0}while(W.length);for(;G.length;)G.pop()();V=!1,Z.clear(),B(e)}function ee(e){if(null!==e.fragment){e.update(),r(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(Y)}}function te(e,t,n){e.dispatchEvent(function(e,t,{bubbles:n=!1,cancelable:s=!1}={}){return new CustomEvent(e,{detail:t,bubbles:n,cancelable:s})}(`${t?"intro":"outro"}${n}`))}const ne=new Set;let se;function oe(){se={r:0,c:[],p:se}}function re(){se.r||r(se.c),se=se.p}function le(e,t){e&&e.i&&(ne.delete(e),e.i(t))}function ie(e,t,n,s){if(e&&e.o){if(ne.has(e))return;ne.add(e),se.c.push((()=>{ne.delete(e),s&&(n&&e.d(1),s())})),e.o(t)}else s&&s()}const ae={duration:0};function ce(n,s,o,i){let a,c=s(n,o,{direction:"both"}),u=i?0:1,d=null,f=null,m=null;function p(){m&&function(e,t){const n=(e.style.animation||"").split(", "),s=n.filter(t?e=>e.indexOf(t)<0:e=>-1===e.indexOf("__svelte")),o=n.length-s.length;o&&(e.style.animation=s.join(", "),R-=o,R||$((()=>{R||(N.forEach((e=>{const{ownerNode:t}=e.stylesheet;t&&j(t)})),N.clear())})))}(n,m)}function h(e,t){const n=e.b-u;return t*=Math.abs(n),{a:u,b:e.b,d:n,duration:t,start:e.start,end:e.start+t,group:e.group}}function b(s){const{delay:o=0,duration:l=300,easing:i=t,tick:b=e,css:k}=c||ae,x={start:v()+o,b:s};s||(x.group=se,se.r+=1),"inert"in n&&(s?void 0!==a&&(n.inert=a):(a=n.inert,n.inert=!0)),d||f?f=x:(k&&(p(),m=q(n,u,s,l,o,i,k)),s&&b(0,1),d=h(x,l),Y((()=>te(n,s,"start"))),function(e){let t;0===g.size&&$(y),new Promise((n=>{g.add(t={c:e,f:n})}))}((e=>{if(f&&e>f.start&&(d=h(f,l),f=null,te(n,d.b,"start"),k&&(p(),m=q(n,u,d.b,d.duration,0,i,c.css))),d)if(e>=d.end)b(u=d.b,1-u),te(n,d.b,"end"),f||(d.b?p():--d.group.r||r(d.group.c)),d=null;else if(e>=d.start){const t=e-d.start;u=d.a+d.d*i(t/d.duration),b(u,1-u)}return!(!d&&!f)})))}return{run(e){l(c)?(K||(K=Promise.resolve(),K.then((()=>{K=null}))),K).then((()=>{c=c({direction:e?"in":"out"}),b(e)})):b(e)},end(){p(),d=f=null}}}function ue(e){return void 0!==e?.length?e:Array.from(e)}function de(e,t){e.d(1),t.delete(e.key)}function fe(e,t){const n={},s={},o={$$scope:1};let r=e.length;for(;r--;){const l=e[r],i=t[r];if(i){for(const e in l)e in i||(s[e]=1);for(const e in i)o[e]||(n[e]=i[e],o[e]=1);e[r]=i}else for(const e in l)o[e]=1}for(const e in s)e in n||(n[e]=void 0);return n}function me(e){return"object"==typeof e&&null!==e?e:{}}let pe;function he(e){e&&e.c()}function ve(e,t,n){const{fragment:o,after_update:i}=e.$$;o&&o.m(t,n),Y((()=>{const t=e.$$.on_mount.map(s).filter(l);e.$$.on_destroy?e.$$.on_destroy.push(...t):r(t),e.$$.on_mount=[]})),i.forEach(Y)}function $e(e,t){const n=e.$$;null!==n.fragment&&(function(e){const t=[],n=[];J.forEach((s=>-1===e.indexOf(s)?t.push(s):n.push(s))),n.forEach((e=>e())),J=t}(n.after_update),r(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ge(t,n,s,l,i,a,c=null,u=[-1]){const d=F;B(t);const f=t.$$={fragment:null,ctx:[],props:a,update:e,not_equal:i,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(d?d.$$.context:[])),callbacks:o(),dirty:u,skip_bound:!1,root:n.target||d.$$.root};c&&c(f.root);let m=!1;if(f.ctx=s?s(t,n.props||{},((e,n,...s)=>{const o=s.length?s[0]:n;return f.ctx&&i(f.ctx[e],f.ctx[e]=o)&&(!f.skip_bound&&f.bound[e]&&f.bound[e](o),m&&function(e,t){-1===e.$$.dirty[0]&&(W.push(e),V||(V=!0,U.then(X)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}(t,e)),n})):[],f.update(),m=!0,r(f.before_update),f.fragment=!!l&&l(f.ctx),n.target){if(n.hydrate){x=!0;const e=(p=n.target,Array.from(p.childNodes));f.fragment&&f.fragment.l(e),e.forEach(j)}else f.fragment&&f.fragment.c();n.intro&&le(t.$$.fragment),ve(t,n.target,n.anchor),x=!1,X()}var p;B(d)}function ye(e,t,n,s){const o=n[e]?.type;if(t="Boolean"===o&&"boolean"!=typeof t?null!=t:t,!s||!n[e])return t;if("toAttribute"===s)switch(o){case"Object":case"Array":return null==t?null:JSON.stringify(t);case"Boolean":return t?"":null;case"Number":return null==t?null:t;default:return t}else switch(o){case"Object":case"Array":return t&&JSON.parse(t);case"Boolean":default:return t;case"Number":return null!=t?+t:t}}new Set(["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"]),"function"==typeof HTMLElement&&(pe=class extends HTMLElement{$$ctor;$$s;$$c;$$cn=!1;$$d={};$$r=!1;$$p_d={};$$l={};$$l_u=new Map;constructor(e,t,n){super(),this.$$ctor=e,this.$$s=t,n&&this.attachShadow({mode:"open"})}addEventListener(e,t,n){if(this.$$l[e]=this.$$l[e]||[],this.$$l[e].push(t),this.$$c){const n=this.$$c.$on(e,t);this.$$l_u.set(t,n)}super.addEventListener(e,t,n)}removeEventListener(e,t,n){if(super.removeEventListener(e,t,n),this.$$c){const e=this.$$l_u.get(t);e&&(e(),this.$$l_u.delete(t))}}async connectedCallback(){if(this.$$cn=!0,!this.$$c){if(await Promise.resolve(),!this.$$cn)return;function e(e){return()=>{let t;return{c:function(){t=E("slot"),"default"!==e&&A(t,"name",e)},m:function(e,n){M(e,t,n)},d:function(e){e&&j(t)}}}}const t={},n=function(e){const t={};return e.childNodes.forEach((e=>{t[e.slot||"default"]=!0})),t}(this);for(const o of this.$$s)o in n&&(t[o]=[e(o)]);for(const r of this.attributes){const l=this.$$g_p(r.name);l in this.$$d||(this.$$d[l]=ye(l,r.value,this.$$p_d,"toProp"))}for(const i in this.$$p_d)i in this.$$d||void 0===this[i]||(this.$$d[i]=this[i],delete this[i]);this.$$c=new this.$$ctor({target:this.shadowRoot||this,props:{...this.$$d,$$slots:t,$$scope:{ctx:[]}}});const s=()=>{this.$$r=!0;for(const e in this.$$p_d)if(this.$$d[e]=this.$$c.$$.ctx[this.$$c.$$.props[e]],this.$$p_d[e].reflect){const t=ye(e,this.$$d[e],this.$$p_d,"toAttribute");null==t?this.removeAttribute(this.$$p_d[e].attribute||e):this.setAttribute(this.$$p_d[e].attribute||e,t)}this.$$r=!1};this.$$c.$$.after_update.push(s),s();for(const a in this.$$l)for(const c of this.$$l[a]){const u=this.$$c.$on(a,c);this.$$l_u.set(c,u)}this.$$l={}}}attributeChangedCallback(e,t,n){this.$$r||(e=this.$$g_p(e),this.$$d[e]=ye(e,n,this.$$p_d,"toProp"),this.$$c?.$set({[e]:this.$$d[e]}))}disconnectedCallback(){this.$$cn=!1,Promise.resolve().then((()=>{this.$$cn||(this.$$c.$destroy(),this.$$c=void 0)}))}$$g_p(e){return Object.keys(this.$$p_d).find((t=>this.$$p_d[t].attribute===e||!this.$$p_d[t].attribute&&t.toLowerCase()===e))||e}});class be{$$=void 0;$$set=void 0;$destroy(){$e(this,1),this.$destroy=e}$on(t,n){if(!l(n))return e;const s=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return s.push(n),()=>{const e=s.indexOf(n);-1!==e&&s.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}"undefined"!=typeof window&&(window.__svelte||(window.__svelte={v:new Set})).v.add("4");const ke=[];var xe=function(t,n=e){let s;const o=new Set;function r(e){if(i(t,e)&&(t=e,s)){const e=!ke.length;for(const e of o)e[1](),ke.push(e,t);if(e){for(let e=0;e<ke.length;e+=2)ke[e][0](ke[e+1]);ke.length=0}}}function l(e){r(e(t))}return{set:r,update:l,subscribe:function(i,a=e){const c=[i,a];return o.add(c),1===o.size&&(s=n(r,l)||e),i(t),()=>{o.delete(c),0===o.size&&s&&(s(),s=null)}}}}(0);function ze(e){w(e,"svelte-36yfzs",'.Header.svelte-36yfzs.svelte-36yfzs{background-color:white;position:fixed;width:100%}.Header-container.svelte-36yfzs.svelte-36yfzs{grid-template-columns:minmax(auto, 936px);display:grid;justify-content:center;background-color:white;border-bottom:1px solid rgba(38, 38, 38, 0.4)}.Header-content.svelte-36yfzs.svelte-36yfzs{display:flex;align-items:center;justify-content:space-between;padding:0.5em}.Header.svelte-36yfzs ul.svelte-36yfzs{list-style:none}.Header.svelte-36yfzs li.svelte-36yfzs{display:inline-block;margin:0 0 0 1em}.Header.svelte-36yfzs i.svelte-36yfzs{font-size:16px;color:rgba(38, 38, 38, 0.7);cursor:pointer}h1.svelte-36yfzs.svelte-36yfzs{padding:0;margin:0;font-size:28px;color:black;font-family:"Pacifico", cursive;cursor:pointer;position:relative;background:#fff;mix-blend-mode:multiply;display:inline-block}h1.svelte-36yfzs.svelte-36yfzs:before{content:"";display:block;width:100%;height:100%;background:radial-gradient(circle at top left, #f09433, #bc1888);mix-blend-mode:screen;position:absolute;top:0;left:0}')}function we(t){let n,s,o,r,l,i,a,c,u,d,f,m,p,h=(0===t[0]?"":t[0])+"";return{c(){n=E("div"),s=E("div"),o=E("div"),r=E("div"),r.innerHTML='<h1 class="svelte-36yfzs">Pustagram</h1>',l=P(),i=E("div"),a=E("ul"),c=E("li"),u=E("i"),d=P(),f=L(h),m=P(),p=E("li"),p.innerHTML='<i class="fas fa-user-alt svelte-36yfzs"></i>',A(r,"class","Header-logo"),A(u,"class","fas fa-heart svelte-36yfzs"),A(c,"class","svelte-36yfzs"),A(p,"class","svelte-36yfzs"),A(a,"class","svelte-36yfzs"),A(i,"class","Header-nav"),A(o,"class","Header-content svelte-36yfzs"),A(s,"class","Header-container svelte-36yfzs"),A(n,"class","Header svelte-36yfzs")},m(e,t){M(e,n,t),z(n,s),z(s,o),z(o,r),z(o,l),z(o,i),z(i,a),z(a,c),z(c,u),z(c,d),z(c,f),z(a,m),z(a,p)},p(e,[t]){1&t&&h!==(h=(0===e[0]?"":e[0])+"")&&T(f,h)},i:e,o:e,d(e){e&&j(n)}}}function _e(t,n,s){let o;var r,l;return r=xe,l=e=>s(0,o=e),t.$$.on_destroy.push(function(t,...n){if(null==t){for(const e of n)e(void 0);return e}const s=t.subscribe(...n);return s.unsubscribe?()=>s.unsubscribe():s}(r,l)),[o]}const Ce=class extends be{constructor(e){super(),ge(this,e,_e,we,i,{},ze)}};function Se(e){w(e,"svelte-xjneym",".Main.svelte-xjneym{display:grid;grid-template-columns:minmax(auto, 936px);justify-content:center;background-color:#fafafa}.Main-container.svelte-xjneym{display:grid;grid-template-columns:3fr 1fr;grid-gap:2em;padding:2em 0}")}function Me(e){let t,n,s;const o=e[1].default,r=u(o,e,e[0],null);return{c(){t=E("div"),n=E("div"),r&&r.c(),A(n,"class","Main-container svelte-xjneym"),A(t,"class","Main svelte-xjneym")},m(e,o){M(e,t,o),z(t,n),r&&r.m(n,null),s=!0},p(e,[t]){r&&r.p&&(!s||1&t)&&m(r,o,e,e[0],s?f(o,e[0],t,null):p(e[0]),null)},i(e){s||(le(r,e),s=!0)},o(e){ie(r,e),s=!1},d(e){e&&j(t),r&&r.d(e)}}}function je(e,t,n){let{$$slots:s={},$$scope:o}=t;return e.$$set=e=>{"$$scope"in e&&n(0,o=e.$$scope)},[o,s]}const Ee=class extends be{constructor(e){super(),ge(this,e,je,Me,i,{},Se)}};function Le(e){w(e,"svelte-y9v6kz",".Profile-content.svelte-y9v6kz.svelte-y9v6kz{display:flex;align-items:center}.Profile-avatar.svelte-y9v6kz img.svelte-y9v6kz{width:42px;height:42px;border-radius:50%}.Profile-info.svelte-y9v6kz.svelte-y9v6kz{margin:0 0 0 0.5em}.Profile-info.svelte-y9v6kz h2.svelte-y9v6kz{font-size:14px;color:black;margin:0;padding:0}.Profile-info.svelte-y9v6kz span.svelte-y9v6kz{font-size:12px;font-weight:normal}")}function Pe(t){let n,s,o,r,l,i,a,c,u,d;return{c(){n=E("div"),s=E("div"),o=E("div"),o.innerHTML='<img src="https://avatars.githubusercontent.com/u/99986563?v=4" alt="" class="svelte-y9v6kz"/>',r=P(),l=E("div"),i=E("h2"),a=L(t[0]),c=P(),u=E("span"),d=L(t[1]),A(o,"class","Profile-avatar svelte-y9v6kz"),A(i,"class","svelte-y9v6kz"),A(u,"class","svelte-y9v6kz"),A(l,"class","Profile-info svelte-y9v6kz"),A(s,"class","Profile-content svelte-y9v6kz"),A(n,"class","Profile")},m(e,t){M(e,n,t),z(n,s),z(s,o),z(s,r),z(s,l),z(l,i),z(i,a),z(l,c),z(l,u),z(u,d)},p(e,[t]){1&t&&T(a,e[0]),2&t&&T(d,e[1])},i:e,o:e,d(e){e&&j(n)}}}function He(e,t,n){let{nickname:s}=t,{name:o}=t;return e.$$set=e=>{"nickname"in e&&n(0,s=e.nickname),"name"in e&&n(1,o=e.name)},[s,o]}const Ae=class extends be{constructor(e){super(),ge(this,e,He,Pe,i,{nickname:0,name:1},Le)}};function Te(e){w(e,"svelte-1lm15y4",".Stories.svelte-1lm15y4.svelte-1lm15y4{border:1px solid rgba(219, 219, 219, 1);border-radius:4px;margin:1em 0;padding:0.5em 1em;background-color:white}.Stories-item.svelte-1lm15y4 img.svelte-1lm15y4{width:32px;height:32px;border-radius:50%}.Stories-item.svelte-1lm15y4.svelte-1lm15y4{display:flex;align-items:center;margin:0 0 0.5em 0}.Stories-item.svelte-1lm15y4 h2.svelte-1lm15y4{font-size:14px;color:black;margin:0 0 0 0.5em}.Stories-item.svelte-1lm15y4 h2 span.svelte-1lm15y4{display:block;font-size:9px;text-transform:uppercase;color:gray}.Stories-head.svelte-1lm15y4.svelte-1lm15y4{display:flex;justify-content:space-between;align-items:center;padding:0.5em 0 0 0}.Stories-head.svelte-1lm15y4 h2.svelte-1lm15y4{font-size:12px;font-weight:600}.Stories-head.svelte-1lm15y4 span.svelte-1lm15y4{font-size:12px;font-weight:normal;color:black}.Stories-items.svelte-1lm15y4.svelte-1lm15y4{margin:0.5em 0 0.5em 0}.Stories-item-box.svelte-1lm15y4.svelte-1lm15y4{width:32px;height:32px;border:double 2px transparent;border-radius:100%;background-image:linear-gradient(#fff, #fff),\r\n        radial-gradient(circle at top left, #f09433, #bc1888);background-origin:border-box;background-clip:content-box, border-box}")}function Oe(t){let n;return{c(){n=E("div"),n.innerHTML='<div class="Stories-container"><div class="Stories-head svelte-1lm15y4"><h2 class="svelte-1lm15y4">Historias</h2> <span class="svelte-1lm15y4">Ver todas</span></div> <div class="Stories-items svelte-1lm15y4"><div class="Stories-item svelte-1lm15y4"><div class="Stories-item-box svelte-1lm15y4"><img src="https://avatars.githubusercontent.com/u/99986563?v=4" alt="" class="svelte-1lm15y4"/></div> <h2 class="svelte-1lm15y4">stblr\n                    <span class="svelte-1lm15y4">10 horas antes</span></h2></div></div></div>',A(n,"class","Stories svelte-1lm15y4")},m(e,t){M(e,n,t)},p:e,i:e,o:e,d(e){e&&j(n)}}}const Ne=class extends be{constructor(e){super(),ge(this,e,null,Oe,i,{},Te)}};function Fe(e){w(e,"svelte-sr9drz",".Footer.svelte-sr9drz{font-size:11px;letter-spacing:1px;font-weight:normal;color:#c7c7c7}")}function Re(t){let n,s,o;return{c(){n=E("div"),s=E("div"),o=E("div"),o.textContent=`© ${t[0]} PUSTGRAM FROM PLATZI`,A(o,"class","Footer-content"),A(s,"class","Footer-container"),A(n,"class","Footer svelte-sr9drz")},m(e,t){M(e,n,t),z(n,s),z(s,o)},p:e,i:e,o:e,d(e){e&&j(n)}}}function qe(e){return[(new Date).getFullYear()]}const Be=class extends be{constructor(e){super(),ge(this,e,qe,Re,i,{},Fe)}};function De(e){w(e,"svelte-5gfmwo",".Sidebar.svelte-5gfmwo{position:relative;padding:4.5em 0 0 0}.Sidebar-container.svelte-5gfmwo{position:fixed}")}function We(e){let t,n,s,o,r,l,i,a;return s=new Ae({props:{nickname:e[0],name:e[1]}}),r=new Ne({}),i=new Be({}),{c(){t=E("div"),n=E("div"),he(s.$$.fragment),o=P(),he(r.$$.fragment),l=P(),he(i.$$.fragment),A(n,"class","Sidebar-container svelte-5gfmwo"),A(t,"class","Sidebar svelte-5gfmwo")},m(e,c){M(e,t,c),z(t,n),ve(s,n,null),z(n,o),ve(r,n,null),z(n,l),ve(i,n,null),a=!0},p(e,[t]){const n={};1&t&&(n.nickname=e[0]),2&t&&(n.name=e[1]),s.$set(n)},i(e){a||(le(s.$$.fragment,e),le(r.$$.fragment,e),le(i.$$.fragment,e),a=!0)},o(e){ie(s.$$.fragment,e),ie(r.$$.fragment,e),ie(i.$$.fragment,e),a=!1},d(e){e&&j(t),$e(s),$e(r),$e(i)}}}function Ie(e,t,n){let{nickname:s}=t,{name:o}=t;return e.$$set=e=>{"nickname"in e&&n(0,s=e.nickname),"name"in e&&n(1,o=e.name)},[s,o]}const Je=class extends be{constructor(e){super(),ge(this,e,Ie,We,i,{nickname:0,name:1},De)}};function Ge(e){w(e,"svelte-24iauo",".Comments.svelte-24iauo h3.svelte-24iauo{font-size:14px;color:black;font-weight:bold;margin:0;padding:0}.Comments.svelte-24iauo span.svelte-24iauo{font-size:14px;margin:0 0 0 0.5em;font-weight:normal;color:rgba(black, 0.9)}.Comments-add.svelte-24iauo.svelte-24iauo{padding:1em 1em 1em 1em;border-top:1px solid rgba(219, 219, 219, 0.8)}.Comments-add.svelte-24iauo form.svelte-24iauo{display:flex;justify-content:space-between;align-items:center}.Comments-content.svelte-24iauo.svelte-24iauo{padding:0 1em 0.5em 1em}.Comments-users.svelte-24iauo.svelte-24iauo{margin:0 0 0.5em 0;display:flex}input.svelte-24iauo.svelte-24iauo{border:solid 1px #e9e9e9;border-radius:5px;color:#696969;border:1px solid transparent;font-size:12px;outline:none;width:100%;display:flex}button.svelte-24iauo.svelte-24iauo{border:none;color:#3897f0;font-size:12px;outline:none;cursor:pointer;background-color:transparent}")}function Ue(e,t,n){const s=e.slice();return s[2]=t[n],s}function Ve(e,t){let n,s,o,r,l,i,a=t[2].username+"",c=t[2].text+"";return{key:e,first:null,c(){n=E("div"),s=E("h3"),o=L(a),r=P(),l=E("span"),i=L(c),A(s,"class","svelte-24iauo"),A(l,"class","svelte-24iauo"),A(n,"class","Comments-users svelte-24iauo"),this.first=n},m(e,t){M(e,n,t),z(n,s),z(s,o),z(n,r),z(n,l),z(l,i)},p(e,n){t=e,1&n&&a!==(a=t[2].username+"")&&T(o,a),1&n&&c!==(c=t[2].text+"")&&T(i,c)},d(e){e&&j(n)}}}function Ye(t){let n,s,o,l,i,a,c,u=[],d=new Map,f=ue(t[0]);const m=e=>e[2].id;for(let e=0;e<f.length;e+=1){let n=Ue(t,f,e),s=m(n);d.set(s,u[e]=Ve(s,n))}return{c(){n=E("div"),s=E("div");for(let e=0;e<u.length;e+=1)u[e].c();o=P(),l=E("div"),i=E("form"),i.innerHTML='<input type="text" class="Comments-input svelte-24iauo" placeholder="Agregar comentario..." id="text"/> <button type="submit" class="svelte-24iauo">Post</button>',A(i,"class","svelte-24iauo"),A(l,"class","Comments-add svelte-24iauo"),A(s,"class","Comments-content svelte-24iauo"),A(n,"class","Comments svelte-24iauo")},m(e,r){M(e,n,r),z(n,s);for(let e=0;e<u.length;e+=1)u[e]&&u[e].m(s,null);var d;z(s,o),z(s,l),z(l,i),a||(c=H(i,"submit",(d=t[1],function(e){return e.preventDefault(),d.call(this,e)})),a=!0)},p(e,[t]){1&t&&(f=ue(e[0]),u=function(e,t,n,s,o,l,i,a,c,u,d,f){let m=e.length,p=l.length,h=m;const v={};for(;h--;)v[e[h].key]=h;const $=[],g=new Map,y=new Map,b=[];for(h=p;h--;){const e=f(o,l,h),s=n(e);let r=i.get(s);r?b.push((()=>r.p(e,t))):(r=u(s,e),r.c()),g.set(s,$[h]=r),s in v&&y.set(s,Math.abs(h-v[s]))}const k=new Set,x=new Set;function z(e){le(e,1),e.m(a,d),i.set(e.key,e),d=e.first,p--}for(;m&&p;){const t=$[p-1],n=e[m-1],s=t.key,o=n.key;t===n?(d=t.first,m--,p--):g.has(o)?!i.has(s)||k.has(s)?z(t):x.has(o)?m--:y.get(s)>y.get(o)?(x.add(s),z(t)):(k.add(o),m--):(c(n,i),m--)}for(;m--;){const t=e[m];g.has(t.key)||c(t,i)}for(;p;)z($[p-1]);return r(b),$}(u,t,m,0,e,f,d,s,de,Ve,o,Ue))},i:e,o:e,d(e){e&&j(n);for(let e=0;e<u.length;e+=1)u[e].d();a=!1,c()}}}function Ze(e,t,n){let{comments:s=[]}=t;return e.$$set=e=>{"comments"in e&&n(0,s=e.comments)},[s,function(e){const t=e.target.text.value;if(t.length>3){const o={id:Date.now(),text:t,username:"stblr"};n(0,s=[...s,o]),e.target.text.value=""}}]}const Ke=class extends be{constructor(e){super(),ge(this,e,Ze,Ye,i,{comments:0},Ge)}};function Qe(e){w(e,"svelte-c8vbxr",".Modal.svelte-c8vbxr{position:relative}.Modal-overlay.svelte-c8vbxr{background-color:rgba(0, 0, 0, 0.7);position:fixed;width:100%;height:100%;top:0;left:0;right:0;bottom:0;z-index:8;cursor:pointer}")}function Xe(e){let t,n,s;const o=e[1].default,r=u(o,e,e[0],null);return{c(){t=E("div"),n=E("div"),r&&r.c(),A(n,"class","Modal-overlay svelte-c8vbxr"),A(t,"class","Modal svelte-c8vbxr")},m(e,o){M(e,t,o),z(t,n),r&&r.m(n,null),s=!0},p(e,[t]){r&&r.p&&(!s||1&t)&&m(r,o,e,e[0],s?f(o,e[0],t,null):p(e[0]),null)},i(e){s||(le(r,e),s=!0)},o(e){ie(r,e),s=!1},d(e){e&&j(t),r&&r.d(e)}}}function et(e,t,n){let{$$slots:s={},$$scope:o}=t;return e.$$set=e=>{"$$scope"in e&&n(0,o=e.$$scope)},[o,s]}const tt=class extends be{constructor(e){super(),ge(this,e,et,Xe,i,{},Qe)}};function nt(e){w(e,"svelte-lazzen",".Share.svelte-lazzen.svelte-lazzen{border:1px solid rgba(219, 219, 219, 1);border-radius:4px;background-color:white;margin:0 0 2em 0;width:300px;height:80px;position:absolute;top:300px;left:30%;z-index:9;padding:1em}.Share-head.svelte-lazzen.svelte-lazzen{display:flex;justify-content:space-between;align-items:center}.Share-head.svelte-lazzen h2.svelte-lazzen{font-size:16px}.Share-head.svelte-lazzen i.svelte-lazzen{cursor:pointer}.Share-content.svelte-lazzen a.svelte-lazzen{display:flex;align-items:center;text-decoration:none;color:black;font-size:14px;margin:2em 0 0 0}.Share-content.svelte-lazzen i.svelte-lazzen{color:#3b5998;margin:0 0.5em 0 0;font-size:20px}")}function st(t){let n,s,o,r,l,i,a,c,u;return{c(){n=E("div"),s=E("div"),o=E("h2"),o.textContent="Compartir",r=P(),l=E("i"),i=P(),a=E("div"),a.innerHTML='<a href="https://www.facebook.com/sharer.php?&amp;t=Aprendiendo%20a%20crear%20un%20enlace%20para%20compartir%20en%20Facebook%20https://devstagram.com/&amp;u=https://devstagtam.com" target="_blank" class="Share__link svelte-lazzen"><i class="fab fa-facebook-square svelte-lazzen"></i>\n        Compartir en Facebook</a>',A(o,"class","Share-title svelte-lazzen"),A(l,"class","fas fa-times-circle svelte-lazzen"),A(s,"class","Share-head svelte-lazzen"),A(a,"class","Share-content svelte-lazzen"),A(n,"class","Share svelte-lazzen")},m(e,d){M(e,n,d),z(n,s),z(s,o),z(s,r),z(s,l),z(n,i),z(n,a),c||(u=H(l,"click",t[0]),c=!0)},p:e,i:e,o:e,d(e){e&&j(n),c=!1,u()}}}function ot(e){return[function(t){D.call(this,e,t)}]}const rt=class extends be{constructor(e){super(),ge(this,e,ot,st,i,{},nt)}};function lt(e){return e<.5?4*e*e*e:.5*Math.pow(2*e-2,3)+1}function it(e,{delay:t=0,duration:n=400,easing:s=lt,amount:o=5,opacity:r=0}={}){const l=getComputedStyle(e),i=+l.opacity,a="none"===l.filter?"":l.filter,c=i*(1-r),[u,d]=function(e){const t="string"==typeof e&&e.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return t?[parseFloat(t[1]),t[2]||"px"]:[e,"px"]}(o);return{delay:t,duration:n,easing:s,css:(e,t)=>`opacity: ${i-c*t}; filter: ${a} blur(${t*u}${d});`}}function at(e){w(e,"svelte-1s2hklu",".Card.svelte-1s2hklu.svelte-1s2hklu{border:1px solid rgba(219, 219, 219, 1);border-radius:4px;background-color:white;margin:0 0 2em 0}.Card-header.svelte-1s2hklu.svelte-1s2hklu{display:flex;justify-content:space-between;align-items:center;padding:1em}.Card-user.svelte-1s2hklu.svelte-1s2hklu{display:flex;align-items:center;justify-content:flex-end}.Card-user.svelte-1s2hklu img.svelte-1s2hklu{width:32px;height:32px;border-radius:50%}.Card-user.svelte-1s2hklu h2.svelte-1s2hklu{margin:0;padding:0;font-size:14px;font-weight:600;margin:0 0 0 1em;color:black}.Card-user.svelte-1s2hklu h2 span.svelte-1s2hklu{display:block;font-size:12px;font-weight:normal;color:rgba(38, 38, 38, 0.7)}.Card-photo.svelte-1s2hklu.svelte-1s2hklu{padding:0;margin:0}.Card-photo.svelte-1s2hklu img.svelte-1s2hklu{width:100%;height:auto}.Card-photo.svelte-1s2hklu figure.svelte-1s2hklu{margin:0;padding:0;cursor:pointer}.Card-settings.svelte-1s2hklu i.svelte-1s2hklu{cursor:pointer}.Card-icons.svelte-1s2hklu.svelte-1s2hklu{padding:1em;display:flex;justify-content:space-between;align-items:center}.Card-icons.svelte-1s2hklu i.svelte-1s2hklu{margin:0 1em 0 0;cursor:pointer;font-size:20px}.Card-icons.svelte-1s2hklu i.svelte-1s2hklu:last-child{margin:0}.Card-description.svelte-1s2hklu.svelte-1s2hklu{padding:0 1em 1em 1em}.Card-description.svelte-1s2hklu h3.svelte-1s2hklu{font-size:14px;font-weight:bold;color:black}.Card-description.svelte-1s2hklu span.svelte-1s2hklu{font-size:14px}.active-like.svelte-1s2hklu.svelte-1s2hklu{color:#bc1888;animation:svelte-1s2hklu-bounce linear 0.8s;animation-iteration-count:1;transform-origin:20% 20%}.active-bookmark.svelte-1s2hklu.svelte-1s2hklu{color:#f09433}@keyframes svelte-1s2hklu-bounce{0%{transform:translate(0px, 0px)}15%{transform:translate(0px, -25px)}30%{transform:translate(0px, 0px)}45%{transform:translate(0px, -15px)}60%{transform:translate(0px, 0px)}75%{transform:translate(0px, -5px)}100%{transform:translate(0px, 0px)}}")}function ct(e){let t,n,s,o;return n=new tt({props:{$$slots:{default:[ut]},$$scope:{ctx:e}}}),{c(){t=E("div"),he(n.$$.fragment)},m(e,s){M(e,t,s),ve(n,t,null),o=!0},p(e,t){const s={};4096&t&&(s.$$scope={dirty:t,ctx:e}),n.$set(s)},i(e){o||(le(n.$$.fragment,e),e&&Y((()=>{o&&(s||(s=ce(t,it,{},!0)),s.run(1))})),o=!0)},o(e){ie(n.$$.fragment,e),e&&(s||(s=ce(t,it,{},!1)),s.run(0)),o=!1},d(e){e&&j(t),$e(n),e&&s&&s.end()}}}function ut(t){let n,s;return n=new rt({}),n.$on("click",t[9]),{c(){he(n.$$.fragment)},m(e,t){ve(n,e,t),s=!0},p:e,i(e){s||(le(n.$$.fragment,e),s=!0)},o(e){ie(n.$$.fragment,e),s=!1},d(e){$e(n,e)}}}function dt(e){let t,n,s,o,l,i,a,u,d,f,m,p,h,v,$,g,y,b,k,x,w,_,C,S,N,F,R,q,B,D,W,I,J,G,U,V,Y,Z,K,Q,X,ee=e[6]&&ct(e);return Z=new Ke({props:{comments:e[4]}}),{c(){t=E("div"),ee&&ee.c(),n=P(),s=E("div"),o=E("div"),l=E("div"),i=E("img"),u=P(),d=E("h2"),f=L(e[0]),m=P(),p=E("span"),h=L(e[1]),v=P(),$=E("div"),$.innerHTML='<i clas="fas fa-ellipsis-h" class="svelte-1s2hklu"></i>',g=P(),y=E("div"),b=E("figure"),k=E("img"),w=P(),_=E("div"),C=E("div"),S=E("i"),N=P(),F=E("i"),R=P(),q=E("div"),B=E("i"),D=P(),W=E("div"),I=E("h3"),J=L(e[0]),G=P(),U=E("span"),V=L(e[3]),Y=P(),he(Z.$$.fragment),c(i.src,a=e[5])||A(i,"src",a),A(i,"alt",e[0]),A(i,"class","svelte-1s2hklu"),A(p,"class","svelte-1s2hklu"),A(d,"class","svelte-1s2hklu"),A(l,"class","Card-user svelte-1s2hklu"),A($,"class","Card-settings svelte-1s2hklu"),A(o,"class","Card-header svelte-1s2hklu"),c(k.src,x=e[2])||A(k,"src",x),A(k,"alt",e[0]),A(k,"class","svelte-1s2hklu"),A(b,"class","svelte-1s2hklu"),A(y,"class","Card-photo svelte-1s2hklu"),A(S,"class","fas fa-heart svelte-1s2hklu"),O(S,"active-like",e[7]),A(F,"class","fas fa-paper-plane svelte-1s2hklu"),A(C,"class","Card-icons-firts"),A(B,"class","fas fa-bookmark svelte-1s2hklu"),O(B,"active-bookmark",e[8]),A(q,"class","Card-icons-second"),A(_,"class","Card-icons svelte-1s2hklu"),A(I,"class","svelte-1s2hklu"),A(U,"class","svelte-1s2hklu"),A(W,"class","Card-description svelte-1s2hklu"),A(s,"class","Card-container"),A(t,"class","Card svelte-1s2hklu")},m(r,a){M(r,t,a),ee&&ee.m(t,null),z(t,n),z(t,s),z(s,o),z(o,l),z(l,i),z(l,u),z(l,d),z(d,f),z(d,m),z(d,p),z(p,h),z(o,v),z(o,$),z(s,g),z(s,y),z(y,b),z(b,k),z(s,w),z(s,_),z(_,C),z(C,S),z(C,N),z(C,F),z(_,R),z(_,q),z(q,B),z(s,D),z(s,W),z(W,I),z(I,J),z(W,G),z(W,U),z(U,V),z(s,Y),ve(Z,s,null),K=!0,Q||(X=[H(b,"dblclick",e[10]),H(S,"click",e[10]),H(F,"click",e[9]),H(B,"click",e[11])],Q=!0)},p(e,[s]){e[6]?ee?(ee.p(e,s),64&s&&le(ee,1)):(ee=ct(e),ee.c(),le(ee,1),ee.m(t,n)):ee&&(oe(),ie(ee,1,1,(()=>{ee=null})),re()),(!K||32&s&&!c(i.src,a=e[5]))&&A(i,"src",a),(!K||1&s)&&A(i,"alt",e[0]),(!K||1&s)&&T(f,e[0]),(!K||2&s)&&T(h,e[1]),(!K||4&s&&!c(k.src,x=e[2]))&&A(k,"src",x),(!K||1&s)&&A(k,"alt",e[0]),(!K||128&s)&&O(S,"active-like",e[7]),(!K||256&s)&&O(B,"active-bookmark",e[8]),(!K||1&s)&&T(J,e[0]),(!K||8&s)&&T(V,e[3]);const o={};16&s&&(o.comments=e[4]),Z.$set(o)},i(e){K||(le(ee),le(Z.$$.fragment,e),K=!0)},o(e){ie(ee),ie(Z.$$.fragment,e),K=!1},d(e){e&&j(t),ee&&ee.d(),$e(Z),Q=!1,r(X)}}}function ft(e,t,n){let{username:s}=t,{location:o}=t,{photo:r}=t,{postComment:l}=t,{comments:i}=t,{avatar:a}=t,c=!1,u=!1,d=!1;return e.$$set=e=>{"username"in e&&n(0,s=e.username),"location"in e&&n(1,o=e.location),"photo"in e&&n(2,r=e.photo),"postComment"in e&&n(3,l=e.postComment),"comments"in e&&n(4,i=e.comments),"avatar"in e&&n(5,a=e.avatar)},[s,o,r,l,i,a,c,u,d,function(){n(6,c=!c)},function(){n(7,u=!u),u?xe.update((e=>e+1)):xe.update((e=>e-1))},()=>n(8,d=!d)]}const mt=class extends be{constructor(e){super(),ge(this,e,ft,dt,i,{username:0,location:1,photo:2,postComment:3,comments:4,avatar:5},at)}};function pt(e){w(e,"svelte-xm80d0",".TimeLine.svelte-xm80d0{padding:4em 0 0 0}")}function ht(e,t,n){const s=e.slice();return s[1]=t[n],s}function vt(t){let n;return{c(){n=E("p"),n.textContent="Loading..."},m(e,t){M(e,n,t)},p:e,d(e){e&&j(n)}}}function $t(e){let t,s;const o=[e[1]];let r={};for(let e=0;e<o.length;e+=1)r=n(r,o[e]);return t=new mt({props:r}),{c(){he(t.$$.fragment)},m(e,n){ve(t,e,n),s=!0},p(e,n){const s=1&n?fe(o,[me(e[1])]):{};t.$set(s)},i(e){s||(le(t.$$.fragment,e),s=!0)},o(e){ie(t.$$.fragment,e),s=!1},d(e){$e(t,e)}}}function gt(e){let t,n,s,o=ue(e[0]),r=[];for(let t=0;t<o.length;t+=1)r[t]=$t(ht(e,o,t));const l=e=>ie(r[e],1,1,(()=>{r[e]=null}));let i=null;return o.length||(i=vt()),{c(){t=E("div"),n=E("div");for(let e=0;e<r.length;e+=1)r[e].c();i&&i.c(),A(n,"class","TimeLine-container"),A(t,"class","TimeLine svelte-xm80d0")},m(e,o){M(e,t,o),z(t,n);for(let e=0;e<r.length;e+=1)r[e]&&r[e].m(n,null);i&&i.m(n,null),s=!0},p(e,[t]){if(1&t){let s;for(o=ue(e[0]),s=0;s<o.length;s+=1){const l=ht(e,o,s);r[s]?(r[s].p(l,t),le(r[s],1)):(r[s]=$t(l),r[s].c(),le(r[s],1),r[s].m(n,null))}for(oe(),s=o.length;s<r.length;s+=1)l(s);re(),!o.length&&i?i.p(e,t):o.length?i&&(i.d(1),i=null):(i=vt(),i.c(),i.m(n,null))}},i(e){if(!s){for(let e=0;e<o.length;e+=1)le(r[e]);s=!0}},o(e){r=r.filter(Boolean);for(let e=0;e<r.length;e+=1)ie(r[e]);s=!1},d(e){e&&j(t),function(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}(r,e),i&&i.d()}}}function yt(e,t,n){let{posts:s=[]}=t;return e.$$set=e=>{"posts"in e&&n(0,s=e.posts)},[s]}const bt=class extends be{constructor(e){super(),ge(this,e,yt,gt,i,{posts:0},pt)}};function kt(e){w(e,"svelte-gmeh4e",'@import url("https://fonts.googleapis.com/css?family=Pacifico&display=swap");@import url("https://fonts.googleapis.com/css?family=Lato:300,400,600&display=swap");body{background-color:#fafafa;color:rgba(38, 38, 38, 0.7);font-family:"Lato", sans-serif;margin:0;padding:0}h1, h2, h3{margin:0;padding:0}')}function xt(e){let t,s,o,r;t=new bt({props:{posts:e[0].posts}});const l=[e[0].user];let i={};for(let e=0;e<l.length;e+=1)i=n(i,l[e]);return o=new Je({props:i}),{c(){he(t.$$.fragment),s=P(),he(o.$$.fragment)},m(e,n){ve(t,e,n),M(e,s,n),ve(o,e,n),r=!0},p(e,n){const s={};1&n&&(s.posts=e[0].posts),t.$set(s);const r=1&n?fe(l,[me(e[0].user)]):{};o.$set(r)},i(e){r||(le(t.$$.fragment,e),le(o.$$.fragment,e),r=!0)},o(e){ie(t.$$.fragment,e),ie(o.$$.fragment,e),r=!1},d(e){e&&j(s),$e(t,e),$e(o,e)}}}function zt(e){let t,n,s,o;return t=new Ce({}),s=new Ee({props:{$$slots:{default:[xt]},$$scope:{ctx:e}}}),{c(){he(t.$$.fragment),n=P(),he(s.$$.fragment)},m(e,r){ve(t,e,r),M(e,n,r),ve(s,e,r),o=!0},p(e,[t]){const n={};3&t&&(n.$$scope={dirty:t,ctx:e}),s.$set(n)},i(e){o||(le(t.$$.fragment,e),le(s.$$.fragment,e),o=!0)},o(e){ie(t.$$.fragment,e),ie(s.$$.fragment,e),o=!1},d(e){e&&j(n),$e(t,e),$e(s,e)}}}function wt(e,t,n){let s={};var o;return o=async()=>{const e=await fetch("https://kittygram-api.vercel.app/");n(0,s=await e.json())},function(){if(!F)throw new Error("Function called outside component initialization");return F}().$$.on_mount.push(o),[s]}new class extends be{constructor(e){super(),ge(this,e,wt,zt,i,{},kt)}}({target:document.querySelector("main")})})();