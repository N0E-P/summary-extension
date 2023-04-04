"use strict";(()=>{var Tt=Object.create;var je=Object.defineProperty;var Pt=Object.getOwnPropertyDescriptor;var St=Object.getOwnPropertyNames;var kt=Object.getPrototypeOf,jt=Object.prototype.hasOwnProperty;var V=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var Ct=(e,t,r,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of St(t))!jt.call(e,s)&&s!==r&&je(e,s,{get:()=>t[s],enumerable:!(o=Pt(t,s))||o.enumerable});return e};var z=(e,t,r)=>(r=e!=null?Tt(kt(e)):{},Ct(t||!e||!e.__esModule?je(r,"default",{value:e,enumerable:!0}):r,e));var H=V((ge,Ce)=>{(function(e,t){if(typeof define=="function"&&define.amd)define("webextension-polyfill",["module"],t);else if(typeof ge<"u")t(Ce);else{var r={exports:{}};t(r),e.browser=r.exports}})(typeof globalThis<"u"?globalThis:typeof self<"u"?self:ge,function(e){"use strict";if(!globalThis.chrome?.runtime?.id)throw new Error("This script should only be loaded in a browser extension.");if(typeof globalThis.browser>"u"||Object.getPrototypeOf(globalThis.browser)!==Object.prototype){let t="The message port closed before a response was received.",r=o=>{let s={alarms:{clear:{minArgs:0,maxArgs:1},clearAll:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getAll:{minArgs:0,maxArgs:0}},bookmarks:{create:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},getChildren:{minArgs:1,maxArgs:1},getRecent:{minArgs:1,maxArgs:1},getSubTree:{minArgs:1,maxArgs:1},getTree:{minArgs:0,maxArgs:0},move:{minArgs:2,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeTree:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}},browserAction:{disable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},enable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},getBadgeBackgroundColor:{minArgs:1,maxArgs:1},getBadgeText:{minArgs:1,maxArgs:1},getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},openPopup:{minArgs:0,maxArgs:0},setBadgeBackgroundColor:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setBadgeText:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},browsingData:{remove:{minArgs:2,maxArgs:2},removeCache:{minArgs:1,maxArgs:1},removeCookies:{minArgs:1,maxArgs:1},removeDownloads:{minArgs:1,maxArgs:1},removeFormData:{minArgs:1,maxArgs:1},removeHistory:{minArgs:1,maxArgs:1},removeLocalStorage:{minArgs:1,maxArgs:1},removePasswords:{minArgs:1,maxArgs:1},removePluginData:{minArgs:1,maxArgs:1},settings:{minArgs:0,maxArgs:0}},commands:{getAll:{minArgs:0,maxArgs:0}},contextMenus:{remove:{minArgs:1,maxArgs:1},removeAll:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},cookies:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:1,maxArgs:1},getAllCookieStores:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},devtools:{inspectedWindow:{eval:{minArgs:1,maxArgs:2,singleCallbackArg:!1}},panels:{create:{minArgs:3,maxArgs:3,singleCallbackArg:!0},elements:{createSidebarPane:{minArgs:1,maxArgs:1}}}},downloads:{cancel:{minArgs:1,maxArgs:1},download:{minArgs:1,maxArgs:1},erase:{minArgs:1,maxArgs:1},getFileIcon:{minArgs:1,maxArgs:2},open:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},pause:{minArgs:1,maxArgs:1},removeFile:{minArgs:1,maxArgs:1},resume:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},extension:{isAllowedFileSchemeAccess:{minArgs:0,maxArgs:0},isAllowedIncognitoAccess:{minArgs:0,maxArgs:0}},history:{addUrl:{minArgs:1,maxArgs:1},deleteAll:{minArgs:0,maxArgs:0},deleteRange:{minArgs:1,maxArgs:1},deleteUrl:{minArgs:1,maxArgs:1},getVisits:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1}},i18n:{detectLanguage:{minArgs:1,maxArgs:1},getAcceptLanguages:{minArgs:0,maxArgs:0}},identity:{launchWebAuthFlow:{minArgs:1,maxArgs:1}},idle:{queryState:{minArgs:1,maxArgs:1}},management:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},getSelf:{minArgs:0,maxArgs:0},setEnabled:{minArgs:2,maxArgs:2},uninstallSelf:{minArgs:0,maxArgs:1}},notifications:{clear:{minArgs:1,maxArgs:1},create:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:0},getPermissionLevel:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},pageAction:{getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},hide:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},permissions:{contains:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},request:{minArgs:1,maxArgs:1}},runtime:{getBackgroundPage:{minArgs:0,maxArgs:0},getPlatformInfo:{minArgs:0,maxArgs:0},openOptionsPage:{minArgs:0,maxArgs:0},requestUpdateCheck:{minArgs:0,maxArgs:0},sendMessage:{minArgs:1,maxArgs:3},sendNativeMessage:{minArgs:2,maxArgs:2},setUninstallURL:{minArgs:1,maxArgs:1}},sessions:{getDevices:{minArgs:0,maxArgs:1},getRecentlyClosed:{minArgs:0,maxArgs:1},restore:{minArgs:0,maxArgs:1}},storage:{local:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},managed:{get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1}},sync:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}}},tabs:{captureVisibleTab:{minArgs:0,maxArgs:2},create:{minArgs:1,maxArgs:1},detectLanguage:{minArgs:0,maxArgs:1},discard:{minArgs:0,maxArgs:1},duplicate:{minArgs:1,maxArgs:1},executeScript:{minArgs:1,maxArgs:2},get:{minArgs:1,maxArgs:1},getCurrent:{minArgs:0,maxArgs:0},getZoom:{minArgs:0,maxArgs:1},getZoomSettings:{minArgs:0,maxArgs:1},goBack:{minArgs:0,maxArgs:1},goForward:{minArgs:0,maxArgs:1},highlight:{minArgs:1,maxArgs:1},insertCSS:{minArgs:1,maxArgs:2},move:{minArgs:2,maxArgs:2},query:{minArgs:1,maxArgs:1},reload:{minArgs:0,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeCSS:{minArgs:1,maxArgs:2},sendMessage:{minArgs:2,maxArgs:3},setZoom:{minArgs:1,maxArgs:2},setZoomSettings:{minArgs:1,maxArgs:2},update:{minArgs:1,maxArgs:2}},topSites:{get:{minArgs:0,maxArgs:0}},webNavigation:{getAllFrames:{minArgs:1,maxArgs:1},getFrame:{minArgs:1,maxArgs:1}},webRequest:{handlerBehaviorChanged:{minArgs:0,maxArgs:0}},windows:{create:{minArgs:0,maxArgs:1},get:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:1},getCurrent:{minArgs:0,maxArgs:1},getLastFocused:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}}};if(Object.keys(s).length===0)throw new Error("api-metadata.json has not been included in browser-polyfill");class d extends WeakMap{constructor(n,m=void 0){super(m),this.createItem=n}get(n){return this.has(n)||this.set(n,this.createItem(n)),super.get(n)}}let i=a=>a&&typeof a=="object"&&typeof a.then=="function",c=(a,n)=>(...m)=>{o.runtime.lastError?a.reject(new Error(o.runtime.lastError.message)):n.singleCallbackArg||m.length<=1&&n.singleCallbackArg!==!1?a.resolve(m[0]):a.resolve(m)},x=a=>a==1?"argument":"arguments",y=(a,n)=>function(u,...b){if(b.length<n.minArgs)throw new Error(`Expected at least ${n.minArgs} ${x(n.minArgs)} for ${a}(), got ${b.length}`);if(b.length>n.maxArgs)throw new Error(`Expected at most ${n.maxArgs} ${x(n.maxArgs)} for ${a}(), got ${b.length}`);return new Promise((k,C)=>{if(n.fallbackToNoCallback)try{u[a](...b,c({resolve:k,reject:C},n))}catch{u[a](...b),n.fallbackToNoCallback=!1,n.noCallback=!0,k()}else n.noCallback?(u[a](...b),k()):u[a](...b,c({resolve:k,reject:C},n))})},T=(a,n,m)=>new Proxy(n,{apply(u,b,k){return m.call(b,a,...k)}}),P=Function.call.bind(Object.prototype.hasOwnProperty),A=(a,n={},m={})=>{let u=Object.create(null),b={has(C,f){return f in a||f in u},get(C,f,E){if(f in u)return u[f];if(!(f in a))return;let h=a[f];if(typeof h=="function")if(typeof n[f]=="function")h=T(a,a[f],n[f]);else if(P(m,f)){let D=y(f,m[f]);h=T(a,a[f],D)}else h=h.bind(a);else if(typeof h=="object"&&h!==null&&(P(n,f)||P(m,f)))h=A(h,n[f],m[f]);else if(P(m,"*"))h=A(h,n[f],m["*"]);else return Object.defineProperty(u,f,{configurable:!0,enumerable:!0,get(){return a[f]},set(D){a[f]=D}}),h;return u[f]=h,h},set(C,f,E,h){return f in u?u[f]=E:a[f]=E,!0},defineProperty(C,f,E){return Reflect.defineProperty(u,f,E)},deleteProperty(C,f){return Reflect.deleteProperty(u,f)}},k=Object.create(a);return new Proxy(k,b)},l=a=>({addListener(n,m,...u){n.addListener(a.get(m),...u)},hasListener(n,m){return n.hasListener(a.get(m))},removeListener(n,m){n.removeListener(a.get(m))}}),M=new d(a=>typeof a!="function"?a:function(m){let u=A(m,{},{getContent:{minArgs:0,maxArgs:0}});a(u)}),j=new d(a=>typeof a!="function"?a:function(m,u,b){let k=!1,C,f=new Promise($=>{C=function(R){k=!0,$(R)}}),E;try{E=a(m,u,C)}catch($){E=Promise.reject($)}let h=E!==!0&&i(E);if(E!==!0&&!h&&!k)return!1;let D=$=>{$.then(R=>{b(R)},R=>{let de;R&&(R instanceof Error||typeof R.message=="string")?de=R.message:de="An unexpected error occurred",b({__mozWebExtensionPolyfillReject__:!0,message:de})}).catch(R=>{})};return D(h?E:f),!0}),O=({reject:a,resolve:n},m)=>{o.runtime.lastError?o.runtime.lastError.message===t?n():a(new Error(o.runtime.lastError.message)):m&&m.__mozWebExtensionPolyfillReject__?a(new Error(m.message)):n(m)},S=(a,n,m,...u)=>{if(u.length<n.minArgs)throw new Error(`Expected at least ${n.minArgs} ${x(n.minArgs)} for ${a}(), got ${u.length}`);if(u.length>n.maxArgs)throw new Error(`Expected at most ${n.maxArgs} ${x(n.maxArgs)} for ${a}(), got ${u.length}`);return new Promise((b,k)=>{let C=O.bind(null,{resolve:b,reject:k});u.push(C),m.sendMessage(...u)})},I={devtools:{network:{onRequestFinished:l(M)}},runtime:{onMessage:l(j),onMessageExternal:l(j),sendMessage:S.bind(null,"sendMessage",{minArgs:1,maxArgs:3})},tabs:{sendMessage:S.bind(null,"sendMessage",{minArgs:2,maxArgs:3})}},G={clear:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}};return s.privacy={network:{"*":G},services:{"*":G},websites:{"*":G}},A(o,I,s)};e.exports=r(chrome)}else e.exports=globalThis.browser})});var mt=V((Ss,ft)=>{"use strict";ft.exports=()=>{let e={};return e.promise=new Promise((t,r)=>{e.resolve=t,e.reject=r}),e}});var ut=V((ks,lt)=>{"use strict";var vo=mt();function To(e,t="maxAge"){let r,o,s,d=async()=>{if(r!==void 0)return;let x=async y=>{s=vo();let T=y[1][t]-Date.now();if(T<=0){e.delete(y[0]),s.resolve();return}return r=y[0],o=setTimeout(()=>{e.delete(y[0]),s&&s.resolve()},T),typeof o.unref=="function"&&o.unref(),s.promise};try{for(let y of e)await x(y)}catch{}r=void 0},i=()=>{r=void 0,o!==void 0&&(clearTimeout(o),o=void 0),s!==void 0&&(s.reject(void 0),s=void 0)},c=e.set.bind(e);return e.set=(x,y)=>{e.has(x)&&e.delete(x);let T=c(x,y);return r&&r===x&&i(),d(),T},d(),e}lt.exports=To});var dt=V((js,pt)=>{"use strict";var Po=ut(),be=class{constructor(t,r){if(this.maxAge=t,this[Symbol.toStringTag]="Map",this.data=new Map,Po(this.data),r)for(let[o,s]of r)this.set(o,s)}get size(){return this.data.size}clear(){this.data.clear()}delete(t){return this.data.delete(t)}has(t){return this.data.has(t)}get(t){let r=this.data.get(t);if(r)return r.data}set(t,r){return this.data.set(t,{maxAge:Date.now()+this.maxAge,data:r}),this}values(){return this.createIterator(t=>t[1].data)}keys(){return this.data.keys()}entries(){return this.createIterator(t=>[t[0],t[1].data])}forEach(t,r){for(let[o,s]of this.entries())t.apply(r,[s,o,this])}[Symbol.iterator](){return this.entries()}*createIterator(t){for(let r of this.data.entries())yield t(r)}};pt.exports=be});var g=z(H());var Et=typeof global=="object"&&global&&global.Object===Object&&global,J=Et;var Ot=typeof self=="object"&&self&&self.Object===Object&&self,It=J||Ot||Function("return this")(),v=It;var Mt=v.Symbol,F=Mt;var Ee=Object.prototype,Nt=Ee.hasOwnProperty,Rt=Ee.toString,q=F?F.toStringTag:void 0;function Bt(e){var t=Nt.call(e,q),r=e[q];try{e[q]=void 0;var o=!0}catch{}var s=Rt.call(e);return o&&(t?e[q]=r:delete e[q]),s}var Oe=Bt;var _t=Object.prototype,Ut=_t.toString;function Lt(e){return Ut.call(e)}var Ie=Lt;var Dt="[object Null]",Ft="[object Undefined]",Me=F?F.toStringTag:void 0;function Wt(e){return e==null?e===void 0?Ft:Dt:Me&&Me in Object(e)?Oe(e):Ie(e)}var B=Wt;function Gt(e){return e!=null&&typeof e=="object"}var W=Gt;var $t=Array.isArray,Ne=$t;function qt(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var Z=qt;var Kt="[object AsyncFunction]",Vt="[object Function]",zt="[object GeneratorFunction]",Ht="[object Proxy]";function Jt(e){if(!Z(e))return!1;var t=B(e);return t==Vt||t==zt||t==Kt||t==Ht}var Y=Jt;var Zt=v["__core-js_shared__"],X=Zt;var Re=function(){var e=/[^.]+$/.exec(X&&X.keys&&X.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function Yt(e){return!!Re&&Re in e}var Be=Yt;var Xt=Function.prototype,Qt=Xt.toString;function er(e){if(e!=null){try{return Qt.call(e)}catch{}try{return e+""}catch{}}return""}var _=er;var tr=/[\\^$.*+?()[\]{}|]/g,rr=/^\[object .+?Constructor\]$/,or=Function.prototype,ar=Object.prototype,sr=or.toString,nr=ar.hasOwnProperty,ir=RegExp("^"+sr.call(nr).replace(tr,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function fr(e){if(!Z(e)||Be(e))return!1;var t=Y(e)?ir:rr;return t.test(_(e))}var _e=fr;function mr(e,t){return e?.[t]}var Ue=mr;function lr(e,t){var r=Ue(e,t);return _e(r)?r:void 0}var N=lr;var ur=N(v,"WeakMap"),Q=ur;var pr=9007199254740991;function dr(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=pr}var ee=dr;function gr(e){return e!=null&&ee(e.length)&&!Y(e)}var Le=gr;var cr=Object.prototype;function xr(e){var t=e&&e.constructor,r=typeof t=="function"&&t.prototype||cr;return e===r}var te=xr;var Ar="[object Arguments]";function yr(e){return W(e)&&B(e)==Ar}var ce=yr;var De=Object.prototype,hr=De.hasOwnProperty,br=De.propertyIsEnumerable,wr=ce(function(){return arguments}())?ce:function(e){return W(e)&&hr.call(e,"callee")&&!br.call(e,"callee")},Fe=wr;function vr(){return!1}var We=vr;var qe=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Ge=qe&&typeof module=="object"&&module&&!module.nodeType&&module,Tr=Ge&&Ge.exports===qe,$e=Tr?v.Buffer:void 0,Pr=$e?$e.isBuffer:void 0,Sr=Pr||We,Ke=Sr;var kr="[object Arguments]",jr="[object Array]",Cr="[object Boolean]",Er="[object Date]",Or="[object Error]",Ir="[object Function]",Mr="[object Map]",Nr="[object Number]",Rr="[object Object]",Br="[object RegExp]",_r="[object Set]",Ur="[object String]",Lr="[object WeakMap]",Dr="[object ArrayBuffer]",Fr="[object DataView]",Wr="[object Float32Array]",Gr="[object Float64Array]",$r="[object Int8Array]",qr="[object Int16Array]",Kr="[object Int32Array]",Vr="[object Uint8Array]",zr="[object Uint8ClampedArray]",Hr="[object Uint16Array]",Jr="[object Uint32Array]",p={};p[Wr]=p[Gr]=p[$r]=p[qr]=p[Kr]=p[Vr]=p[zr]=p[Hr]=p[Jr]=!0;p[kr]=p[jr]=p[Dr]=p[Cr]=p[Fr]=p[Er]=p[Or]=p[Ir]=p[Mr]=p[Nr]=p[Rr]=p[Br]=p[_r]=p[Ur]=p[Lr]=!1;function Zr(e){return W(e)&&ee(e.length)&&!!p[B(e)]}var Ve=Zr;function Yr(e){return function(t){return e(t)}}var ze=Yr;var He=typeof exports=="object"&&exports&&!exports.nodeType&&exports,K=He&&typeof module=="object"&&module&&!module.nodeType&&module,Xr=K&&K.exports===He,xe=Xr&&J.process,Qr=function(){try{var e=K&&K.require&&K.require("util").types;return e||xe&&xe.binding&&xe.binding("util")}catch{}}(),Ae=Qr;var Je=Ae&&Ae.isTypedArray,eo=Je?ze(Je):Ve,Ze=eo;function to(e,t){return function(r){return e(t(r))}}var Ye=to;var ro=Ye(Object.keys,Object),Xe=ro;var oo=Object.prototype,ao=oo.hasOwnProperty;function so(e){if(!te(e))return Xe(e);var t=[];for(var r in Object(e))ao.call(e,r)&&r!="constructor"&&t.push(r);return t}var Qe=so;var no=N(v,"Map"),re=no;var io=N(v,"DataView"),oe=io;var fo=N(v,"Promise"),ae=fo;var mo=N(v,"Set"),se=mo;var et="[object Map]",lo="[object Object]",tt="[object Promise]",rt="[object Set]",ot="[object WeakMap]",at="[object DataView]",uo=_(oe),po=_(re),go=_(ae),co=_(se),xo=_(Q),L=B;(oe&&L(new oe(new ArrayBuffer(1)))!=at||re&&L(new re)!=et||ae&&L(ae.resolve())!=tt||se&&L(new se)!=rt||Q&&L(new Q)!=ot)&&(L=function(e){var t=B(e),r=t==lo?e.constructor:void 0,o=r?_(r):"";if(o)switch(o){case uo:return at;case po:return et;case go:return tt;case co:return rt;case xo:return ot}return t});var st=L;var Ao="[object Map]",yo="[object Set]",ho=Object.prototype,bo=ho.hasOwnProperty;function wo(e){if(e==null)return!0;if(Le(e)&&(Ne(e)||typeof e=="string"||typeof e.splice=="function"||Ke(e)||Ze(e)||Fe(e)))return!e.length;var t=st(e);if(t==Ao||t==yo)return!e.size;if(te(e))return!Qe(e).length;for(var r in e)if(bo.call(e,r))return!1;return!0}var ye=wo;var he=z(H());async function ne(){let{provider:e="chatgpt"}=await he.default.storage.local.get("provider"),t="provider:gpt3",r=await he.default.storage.local.get(t);return{provider:e,configs:{["gpt3"]:r[t]}}}var U="https://chat.openai.com";var nt="gpt-3.5-turbo",it="api.openai.com";var yt=z(dt());var ie,So=new Uint8Array(16);function we(){if(!ie&&(ie=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!ie))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return ie(So)}var w=[];for(let e=0;e<256;++e)w.push((e+256).toString(16).slice(1));function gt(e,t=0){return(w[e[t+0]]+w[e[t+1]]+w[e[t+2]]+w[e[t+3]]+"-"+w[e[t+4]]+w[e[t+5]]+"-"+w[e[t+6]]+w[e[t+7]]+"-"+w[e[t+8]]+w[e[t+9]]+"-"+w[e[t+10]]+w[e[t+11]]+w[e[t+12]]+w[e[t+13]]+w[e[t+14]]+w[e[t+15]]).toLowerCase()}var ko=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),ve={randomUUID:ko};function jo(e,t,r){if(ve.randomUUID&&!t&&!e)return ve.randomUUID();e=e||{};let o=e.random||(e.rng||we)();if(o[6]=o[6]&15|64,o[8]=o[8]&63|128,t){r=r||0;for(let s=0;s<16;++s)t[r+s]=o[s];return t}return gt(o)}var fe=jo;function ct(e){let t,r,o,s,d,i,c;return x(),{feed:y,reset:x};function x(){t=!0,r="",o=0,s=-1,d=void 0,i=void 0,c=""}function y(P){r=r?r+P:P,t&&Co(r)&&(r=r.slice(xt.length)),t=!1;let A=r.length,l=0,M=!1;for(;l<A;){M&&(r[l]===`
`&&++l,M=!1);let j=-1,O=s,S;for(let I=o;j<0&&I<A;++I)S=r[I],S===":"&&O<0?O=I-l:S==="\r"?(M=!0,j=I-l):S===`
`&&(j=I-l);if(j<0){o=A-l,s=O;break}else o=0,s=-1;T(r,l,O,j),l+=j+1}l===A?r="":l>0&&(r=r.slice(l))}function T(P,A,l,M){if(M===0){c.length>0&&(e({type:"event",id:d,event:i||void 0,data:c.slice(0,-1)}),c="",d=void 0),i=void 0;return}let j=l<0,O=P.slice(A,A+(j?M:l)),S=0;j?S=M:P[A+l+1]===" "?S=l+2:S=l+1;let I=A+S,G=M-S,a=P.slice(I,I+G).toString();if(O==="data")c+=a?"".concat(a,`
`):`
`;else if(O==="event")i=a;else if(O==="id"&&!a.includes("\0"))d=a;else if(O==="retry"){let n=parseInt(a,10);Number.isNaN(n)||e({type:"reconnect-interval",value:n})}}}var xt=[239,187,191];function Co(e){return xt.every((t,r)=>e.charCodeAt(r)===t)}async function*At(e){let t=e.getReader();try{for(;;){let{done:r,value:o}=await t.read();if(r)return;yield o}}finally{t.releaseLock()}}async function me(e,t){let{onMessage:r,...o}=t,s=await fetch(e,o);if(!s.ok){let i=await s.json().catch(()=>({}));throw new Error(ye(i)?`${s.status} ${s.statusText}`:JSON.stringify(i))}let d=ct(i=>{i.type==="event"&&r(i.data)});for await(let i of At(s.body)){let c=new TextDecoder().decode(i);d.feed(c)}}async function Se(e,t,r,o){return fetch(`${U}/backend-api${r}`,{method:t,headers:{"Content-Type":"application/json",Authorization:`Bearer ${e}`},body:o===void 0?void 0:JSON.stringify(o)})}async function ht(e,t){await Se(e,"POST","/conversation/message_feedback",t)}async function Eo(e,t,r){await Se(e,"PATCH",`/conversation/${t}`,r)}var Te="accessToken",Pe=new yt.default(10*1e3);async function ue(){if(Pe.get(Te))return Pe.get(Te);let e=await fetch(`${U}/api/auth/session`);if(e.status===403)throw new Error("CLOUDFLARE");let t=await e.json().catch(()=>({}));if(!t.accessToken)throw new Error("UNAUTHORIZED");return Pe.set(Te,t.accessToken),t.accessToken}var le=class{constructor(t){this.token=t;this.token=t}async fetchModels(){return(await Se(this.token,"GET","/models").then(r=>r.json())).models}async getModelName(){try{return(await this.fetchModels())[0].slug}catch(t){return"text-davinci-002-render-sha"}}async generateAnswer(t){let r,o=()=>{r&&Eo(this.token,r,{is_visible:!1})},s=await this.getModelName();return await me(`${U}/backend-api/conversation`,{method:"POST",signal:t.signal,headers:{"Content-Type":"application/json",Authorization:`Bearer ${this.token}`},body:JSON.stringify({action:"next",messages:[{id:fe(),role:"user",content:{content_type:"text",parts:[t.prompt]}}],model:s,parent_message_id:fe()}),onMessage(d){var x,y,T;if(d==="[DONE]"){t.onEvent({type:"done"}),o();return}let i;try{i=JSON.parse(d)}catch(P){return}let c=(T=(y=(x=i.message)==null?void 0:x.content)==null?void 0:y.parts)==null?void 0:T[0];c&&(r=i.conversation_id,t.onEvent({type:"answer",data:{text:c,messageId:i.message.id,conversationId:i.conversation_id}}))}}),{cleanup:o}}};var pe=class{constructor(t,r){this.token=t;this.model=r;this.token=t,this.model=r}buildPrompt(t){return this.model.startsWith("text-chat-davinci")?`Respond conversationally.<|im_end|>

User: ${t}<|im_sep|>
ChatGPT:`:t}buildMessages(t){return[{role:"user",content:t}]}async generateAnswer(t){var x,y,T;let[r]=await Promise.all([ne()]),o=(y=(x=r.configs["gpt3"])==null?void 0:x.model)!=null?y:nt,s=((T=r.configs["gpt3"])==null?void 0:T.apiHost)||it,d="",i={model:this.model,stream:!0,max_tokens:800};o==="text-davinci-003"?(d=`https://${s}/v1/completions`,i={...i,prompt:this.buildPrompt(t.prompt)}):(d=`https://${s}/v1/chat/completions`,i={...i,messages:this.buildMessages(t.prompt)});let c="";return await me(d,{method:"POST",signal:t.signal,headers:{"Content-Type":"application/json",Authorization:`Bearer ${this.token}`},body:JSON.stringify(i),onMessage(P){if(P==="[DONE]"){t.onEvent({type:"done"});return}let A;try{A=JSON.parse(P);let l=o==="text-davinci-003"?A.choices[0].text:A.choices[0].delta.content;if(l===void 0||l==="<|im_end|>"||l==="<|im_sep|>")return;c+=l,t.onEvent({type:"answer",data:{text:c,messageId:A.id,conversationId:A.id}})}catch(l){return}}}),{}}};var ke=z(H());var Xs=/^((?!chrome|android).)*safari/i.test(navigator.userAgent),bt=navigator.userAgent.indexOf("Firefox")!=-1,Qs=/iPad|iPhone|iPod/.test(navigator.userAgent);function wt(e){let{id:t,url:r}=e;r.includes(`${U}/chat`)?ke.default.tabs.sendMessage(t,{type:"CHATGPT_TAB_CURRENT",data:{isLogin:!0}}).catch(()=>{}):ke.default.tabs.sendMessage(t,{type:"CHATGPT_TAB_CURRENT",data:{isLogin:!1}}).catch(()=>{})}async function Io(e,t){let r=await ne(),o;if(r.provider==="chatgpt"){let i=await ue();o=new le(i)}else if(r.provider==="gpt3"){let{apiKey:i,model:c}=r.configs["gpt3"];o=new pe(i,c)}else throw new Error(`Unknown provider ${r.provider}`);let s=new AbortController;e.onDisconnect.addListener(()=>{s.abort(),d==null||d()});let{cleanup:d}=await o.generateAnswer({prompt:t,signal:s.signal,onEvent(i){if(i.type==="done"){e.postMessage({event:"DONE"});return}e.postMessage(i.data)}})}async function Mo(e){g.default.tabs.query({currentWindow:!0,active:!0}).then(o=>{let s=o[0];s.id&&g.default.storage.local.set({glarityTabId:s.id})});let t=await g.default.storage.local.get("pinnedTabId"),r;if(t.pinnedTabId)try{r=await g.default.tabs.get(t.pinnedTabId),g.default.tabs.update(r.id,{active:!0,pinned:!0})}catch(o){}return r||(r=await g.default.tabs.create({url:e,pinned:!0,active:!0})),g.default.storage.local.set({pinnedTabId:r.id}),{pinnedTabId:r.id}}g.default.runtime.onConnect.addListener(async e=>{e.onMessage.addListener(async t=>{try{await Io(e,t.question)}catch(r){e.postMessage({error:r.message})}})});g.default.runtime.onMessage.addListener(async e=>{if(e.type==="FEEDBACK"){let t=await ue();await ht(t,e.data)}else if(e.type==="OPEN_OPTIONS_PAGE")g.default.runtime.openOptionsPage();else{if(e.type==="GET_ACCESS_TOKEN")return ue();if(e.type==="NEW_TAB")return Mo(e.data.url);if(e.type==="GO_BACK"){let t=await g.default.storage.local.get("glarityTabId");t.glarityTabId?g.default.tabs.update(t.glarityTabId,{active:!0}).catch(()=>{g.default.tabs.create({url:"about:newtab",active:!0})}):g.default.tabs.create({url:"about:newtab",active:!0})}}});g.default.runtime.onInstalled.addListener(async e=>{e.reason==="install"&&g.default.runtime.openOptionsPage()});g.default.tabs.onUpdated.addListener(async(e,t)=>{let r=await g.default.storage.local.get("pinnedTabId");g.default.tabs.get(e).then(o=>{var s;(s=o.url)!=null&&s.includes(U)&&t.status==="complete"&&o.id&&r.pinnedTabId===o.id&&wt(o)})});async function vt(e){let{id:t}=e;t&&g.default.tabs.sendMessage(t,{type:"OPEN_WEB_SUMMARY",data:{}}).catch(()=>{})}bt?g.default.browserAction.onClicked.addListener(async e=>{await vt(e)}):g.default.action.onClicked.addListener(async e=>{await vt(e)});})();
