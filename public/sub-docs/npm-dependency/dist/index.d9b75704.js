function t(t,e,r,n){Object.defineProperty(t,e,{get:r,set:n,enumerable:!0,configurable:!0})}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=e.parcelRequirec716;null==o&&((o=function(t){if(t in r)return r[t].exports;if(t in n){var e=n[t];delete n[t];var o={id:t,exports:{}};return r[t]=o,e.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(t,e){n[t]=e},e.parcelRequirec716=o),o.register("f3ZL4",(function(e,r){t(e.exports,"default",(()=>f),(t=>f=t));var n=o("2mpFt"),a=o("kcGKx"),c=r&&!r.nodeType&&r,u=c&&e&&!e.nodeType&&e,i=u&&u.exports===c?n.default.Buffer:void 0,f=(i?i.isBuffer:void 0)||a.default})),o.register("2mpFt",(function(e,r){t(e.exports,"default",(()=>c));var n=o("4kWvg"),a="object"==typeof self&&self&&self.Object===Object&&self,c=n.default||a||Function("return this")()})),o.register("4kWvg",(function(r,n){t(r.exports,"default",(()=>o));var o="object"==typeof e&&e&&e.Object===Object&&e})),o.register("kcGKx",(function(e,r){t(e.exports,"default",(()=>n));var n=function(){return!1}})),o.register("lFXqE",(function(e,r){t(e.exports,"default",(()=>i),(t=>i=t));var n=o("4kWvg"),a=r&&!r.nodeType&&r,c=a&&e&&!e.nodeType&&e,u=c&&c.exports===a&&n.default.process,i=function(){try{var t=c&&c.require&&c.require("util").types;return t||u&&u.binding&&u.binding("util")}catch(t){}}()})),o.register("gqoYg",(function(e,r){t(e.exports,"default",(()=>f),(t=>f=t));var n=o("2mpFt"),a=r&&!r.nodeType&&r,c=a&&e&&!e.nodeType&&e,u=c&&c.exports===a?n.default.Buffer:void 0,i=u?u.allocUnsafe:void 0;var f=function(t,e){if(e)return t.slice();var r=t.length,n=i?i(r):new t.constructor(r);return t.copy(n),n}}));var a=function(){this.__data__=[],this.size=0};var c=function(t,e){return t===e||t!=t&&e!=e};var u=function(t,e){for(var r=t.length;r--;)if(c(t[r][0],e))return r;return-1},i=Array.prototype.splice;var f=function(t){var e=this.__data__,r=u(e,t);return!(r<0)&&(r==e.length-1?e.pop():i.call(e,r,1),--this.size,!0)};var s=function(t){var e=this.__data__,r=u(e,t);return r<0?void 0:e[r][1]};var l=function(t){return u(this.__data__,t)>-1};var p=function(t,e){var r=this.__data__,n=u(r,t);return n<0?(++this.size,r.push([t,e])):r[n][1]=e,this};function v(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}v.prototype.clear=a,v.prototype.delete=f,v.prototype.get=s,v.prototype.has=l,v.prototype.set=p;var b=v;var y=function(){this.__data__=new b,this.size=0};var d=function(t){var e=this.__data__,r=e.delete(t);return this.size=e.size,r};var j=function(t){return this.__data__.get(t)};var h=function(t){return this.__data__.has(t)},_=(V=o("2mpFt")).default.Symbol,g=Object.prototype,O=g.hasOwnProperty,w=g.toString,m=_?_.toStringTag:void 0;var A=function(t){var e=O.call(t,m),r=t[m];try{t[m]=void 0;var n=!0}catch(t){}var o=w.call(t);return n&&(e?t[m]=r:delete t[m]),o},F=Object.prototype.toString;var x=function(t){return F.call(t)},S=_?_.toStringTag:void 0;var z=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":S&&S in Object(t)?A(t):x(t)};var E=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)};var P,T=function(t){if(!E(t))return!1;var e=z(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},U=(V=o("2mpFt")).default["__core-js_shared__"],I=(P=/[^.]+$/.exec(U&&U.keys&&U.keys.IE_PROTO||""))?"Symbol(src)_1."+P:"";var M=Function.prototype.toString;var q=function(t){if(null!=t){try{return M.call(t)}catch(t){}try{return t+""}catch(t){}}return""},k=/^\[object .+?Constructor\]$/,L=Function.prototype,B=Object.prototype,D=L.toString,$=B.hasOwnProperty,N=RegExp("^"+D.call($).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var R=function(t){return!(!E(t)||(e=t,I&&I in e))&&(T(t)?N:k).test(q(t));var e};var W=function(t,e){return null==t?void 0:t[e]};var C=function(t,e){var r=W(t,e);return R(r)?r:void 0},V=o("2mpFt"),G=C(V.default,"Map"),H=C(Object,"create");var X=function(){this.__data__=H?H(null):{},this.size=0};var Z=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},K=Object.prototype.hasOwnProperty;var Y=function(t){var e=this.__data__;if(H){var r=e[t];return"__lodash_hash_undefined__"===r?void 0:r}return K.call(e,t)?e[t]:void 0},J=Object.prototype.hasOwnProperty;var Q=function(t){var e=this.__data__;return H?void 0!==e[t]:J.call(e,t)};var tt=function(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=H&&void 0===e?"__lodash_hash_undefined__":e,this};function et(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}et.prototype.clear=X,et.prototype.delete=Z,et.prototype.get=Y,et.prototype.has=Q,et.prototype.set=tt;var rt=et;var nt=function(){this.size=0,this.__data__={hash:new rt,map:new(G||b),string:new rt}};var ot=function(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map};var at=function(t){var e=ot(this,t).delete(t);return this.size-=e?1:0,e};var ct=function(t){return ot(this,t).get(t)};var ut=function(t){return ot(this,t).has(t)};var it=function(t,e){var r=ot(this,t),n=r.size;return r.set(t,e),this.size+=r.size==n?0:1,this};function ft(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}ft.prototype.clear=nt,ft.prototype.delete=at,ft.prototype.get=ct,ft.prototype.has=ut,ft.prototype.set=it;var st=ft;var lt=function(t,e){var r=this.__data__;if(r instanceof b){var n=r.__data__;if(!G||n.length<199)return n.push([t,e]),this.size=++r.size,this;r=this.__data__=new st(n)}return r.set(t,e),this.size=r.size,this};function pt(t){var e=this.__data__=new b(t);this.size=e.size}pt.prototype.clear=y,pt.prototype.delete=d,pt.prototype.get=j,pt.prototype.has=h,pt.prototype.set=lt;var vt=pt;var bt=function(t,e){for(var r=-1,n=null==t?0:t.length;++r<n&&!1!==e(t[r],r,t););return t},yt=function(){try{var t=C(Object,"defineProperty");return t({},"",{}),t}catch(t){}}();var dt=function(t,e,r){"__proto__"==e&&yt?yt(t,e,{configurable:!0,enumerable:!0,value:r,writable:!0}):t[e]=r},jt=Object.prototype.hasOwnProperty;var ht=function(t,e,r){var n=t[e];jt.call(t,e)&&c(n,r)&&(void 0!==r||e in t)||dt(t,e,r)};var _t=function(t,e,r,n){var o=!r;r||(r={});for(var a=-1,c=e.length;++a<c;){var u=e[a],i=n?n(r[u],t[u],u,r,t):void 0;void 0===i&&(i=t[u]),o?dt(r,u,i):ht(r,u,i)}return r};var gt=function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n};var Ot=function(t){return null!=t&&"object"==typeof t};var wt=function(t){return Ot(t)&&"[object Arguments]"==z(t)},mt=Object.prototype,At=mt.hasOwnProperty,Ft=mt.propertyIsEnumerable,xt=wt(function(){return arguments}())?wt:function(t){return Ot(t)&&At.call(t,"callee")&&!Ft.call(t,"callee")},St=xt,zt=Array.isArray,Et=o("f3ZL4"),Pt=/^(?:0|[1-9]\d*)$/;var Tt=function(t,e){var r=typeof t;return!!(e=null==e?9007199254740991:e)&&("number"==r||"symbol"!=r&&Pt.test(t))&&t>-1&&t%1==0&&t<e};var Ut=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991},It={};It["[object Float32Array]"]=It["[object Float64Array]"]=It["[object Int8Array]"]=It["[object Int16Array]"]=It["[object Int32Array]"]=It["[object Uint8Array]"]=It["[object Uint8ClampedArray]"]=It["[object Uint16Array]"]=It["[object Uint32Array]"]=!0,It["[object Arguments]"]=It["[object Array]"]=It["[object ArrayBuffer]"]=It["[object Boolean]"]=It["[object DataView]"]=It["[object Date]"]=It["[object Error]"]=It["[object Function]"]=It["[object Map]"]=It["[object Number]"]=It["[object Object]"]=It["[object RegExp]"]=It["[object Set]"]=It["[object String]"]=It["[object WeakMap]"]=!1;var Mt=function(t){return Ot(t)&&Ut(t.length)&&!!It[z(t)]};var qt=function(t){return function(e){return t(e)}},kt=(He=o("lFXqE")).default&&He.default.isTypedArray,Lt=kt?qt(kt):Mt,Bt=Object.prototype.hasOwnProperty;var Dt=function(t,e){var r=zt(t),n=!r&&St(t),o=!r&&!n&&(0,Et.default)(t),a=!r&&!n&&!o&&Lt(t),c=r||n||o||a,u=c?gt(t.length,String):[],i=u.length;for(var f in t)!e&&!Bt.call(t,f)||c&&("length"==f||o&&("offset"==f||"parent"==f)||a&&("buffer"==f||"byteLength"==f||"byteOffset"==f)||Tt(f,i))||u.push(f);return u},$t=Object.prototype;var Nt=function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||$t)};var Rt=function(t,e){return function(r){return t(e(r))}},Wt=Rt(Object.keys,Object),Ct=Object.prototype.hasOwnProperty;var Vt=function(t){if(!Nt(t))return Wt(t);var e=[];for(var r in Object(t))Ct.call(t,r)&&"constructor"!=r&&e.push(r);return e};var Gt=function(t){return null!=t&&Ut(t.length)&&!T(t)};var Ht=function(t){return Gt(t)?Dt(t):Vt(t)};var Xt=function(t,e){return t&&_t(e,Ht(e),t)};var Zt=function(t){var e=[];if(null!=t)for(var r in Object(t))e.push(r);return e},Kt=Object.prototype.hasOwnProperty;var Yt=function(t){if(!E(t))return Zt(t);var e=Nt(t),r=[];for(var n in t)("constructor"!=n||!e&&Kt.call(t,n))&&r.push(n);return r};var Jt=function(t){return Gt(t)?Dt(t,!0):Yt(t)};var Qt=function(t,e){return t&&_t(e,Jt(e),t)},te=o("gqoYg");var ee=function(t,e){var r=-1,n=t.length;for(e||(e=Array(n));++r<n;)e[r]=t[r];return e};var re=function(t,e){for(var r=-1,n=null==t?0:t.length,o=0,a=[];++r<n;){var c=t[r];e(c,r,t)&&(a[o++]=c)}return a};var ne=function(){return[]},oe=Object.prototype.propertyIsEnumerable,ae=Object.getOwnPropertySymbols,ce=ae?function(t){return null==t?[]:(t=Object(t),re(ae(t),(function(e){return oe.call(t,e)})))}:ne;var ue=function(t,e){return _t(t,ce(t),e)};var ie=function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t},fe=Rt(Object.getPrototypeOf,Object),se=Object.getOwnPropertySymbols?function(t){for(var e=[];t;)ie(e,ce(t)),t=fe(t);return e}:ne;var le=function(t,e){return _t(t,se(t),e)};var pe=function(t,e,r){var n=e(t);return zt(t)?n:ie(n,r(t))};var ve=function(t){return pe(t,Ht,ce)};var be=function(t){return pe(t,Jt,se)},ye=(V=o("2mpFt"),C(V.default,"DataView")),de=(V=o("2mpFt"),C(V.default,"Promise")),je=(V=o("2mpFt"),C(V.default,"Set")),he=(V=o("2mpFt"),C(V.default,"WeakMap")),_e="[object Map]",ge="[object Promise]",Oe="[object Set]",we="[object WeakMap]",me="[object DataView]",Ae=q(ye),Fe=q(G),xe=q(de),Se=q(je),ze=q(he),Ee=z;(ye&&Ee(new ye(new ArrayBuffer(1)))!=me||G&&Ee(new G)!=_e||de&&Ee(de.resolve())!=ge||je&&Ee(new je)!=Oe||he&&Ee(new he)!=we)&&(Ee=function(t){var e=z(t),r="[object Object]"==e?t.constructor:void 0,n=r?q(r):"";if(n)switch(n){case Ae:return me;case Fe:return _e;case xe:return ge;case Se:return Oe;case ze:return we}return e});var Pe=Ee,Te=Object.prototype.hasOwnProperty;var Ue=function(t){var e=t.length,r=new t.constructor(e);return e&&"string"==typeof t[0]&&Te.call(t,"index")&&(r.index=t.index,r.input=t.input),r},Ie=(V=o("2mpFt")).default.Uint8Array;var Me=function(t){var e=new t.constructor(t.byteLength);return new Ie(e).set(new Ie(t)),e};var qe=function(t,e){var r=e?Me(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)},ke=/\w*$/;var Le=_?_.prototype:void 0,Be=Le?Le.valueOf:void 0;var De=function(t,e){var r=e?Me(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)};var $e=function(t,e,r){var n,o,a,c=t.constructor;switch(e){case"[object ArrayBuffer]":return Me(t);case"[object Boolean]":case"[object Date]":return new c(+t);case"[object DataView]":return qe(t,r);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return De(t,r);case"[object Map]":case"[object Set]":return new c;case"[object Number]":case"[object String]":return new c(t);case"[object RegExp]":return(a=new(o=t).constructor(o.source,ke.exec(o))).lastIndex=o.lastIndex,a;case"[object Symbol]":return n=t,Be?Object(Be.call(n)):{}}},Ne=Object.create,Re=function(){function t(){}return function(e){if(!E(e))return{};if(Ne)return Ne(e);t.prototype=e;var r=new t;return t.prototype=void 0,r}}();var We=function(t){return"function"!=typeof t.constructor||Nt(t)?{}:Re(fe(t))};Et=o("f3ZL4");var Ce=function(t){return Ot(t)&&"[object Map]"==Pe(t)},Ve=(He=o("lFXqE")).default&&He.default.isMap,Ge=Ve?qt(Ve):Ce;var He,Xe=function(t){return Ot(t)&&"[object Set]"==Pe(t)},Ze=(He=o("lFXqE")).default&&He.default.isSet,Ke=Ze?qt(Ze):Xe,Ye="[object Arguments]",Je="[object Function]",Qe="[object Object]",tr={};tr[Ye]=tr["[object Array]"]=tr["[object ArrayBuffer]"]=tr["[object DataView]"]=tr["[object Boolean]"]=tr["[object Date]"]=tr["[object Float32Array]"]=tr["[object Float64Array]"]=tr["[object Int8Array]"]=tr["[object Int16Array]"]=tr["[object Int32Array]"]=tr["[object Map]"]=tr["[object Number]"]=tr[Qe]=tr["[object RegExp]"]=tr["[object Set]"]=tr["[object String]"]=tr["[object Symbol]"]=tr["[object Uint8Array]"]=tr["[object Uint8ClampedArray]"]=tr["[object Uint16Array]"]=tr["[object Uint32Array]"]=!0,tr["[object Error]"]=tr[Je]=tr["[object WeakMap]"]=!1;var er=function t(e,r,n,o,a,c){var u,i=1&r,f=2&r,s=4&r;if(n&&(u=a?n(e,o,a,c):n(e)),void 0!==u)return u;if(!E(e))return e;var l=zt(e);if(l){if(u=Ue(e),!i)return ee(e,u)}else{var p=Pe(e),v=p==Je||"[object GeneratorFunction]"==p;if((0,Et.default)(e))return(0,te.default)(e,i);if(p==Qe||p==Ye||v&&!a){if(u=f||v?{}:We(e),!i)return f?le(e,Qt(u,e)):ue(e,Xt(u,e))}else{if(!tr[p])return a?e:{};u=$e(e,p,i)}}c||(c=new vt);var b=c.get(e);if(b)return b;c.set(e,u),Ke(e)?e.forEach((function(o){u.add(t(o,r,n,o,e,c))})):Ge(e)&&e.forEach((function(o,a){u.set(a,t(o,r,n,a,e,c))}));var y=l?void 0:(s?f?be:ve:f?Jt:Ht)(e);return bt(y||e,(function(o,a){y&&(o=e[a=o]),ht(u,a,t(o,r,n,a,e,c))})),u};const rr={cart:[{product:"부대찌개",quantity:1},{product:"꽁치찌개",quantity:1},{product:"김치찌개",quantity:1}],user:{loggedIn:!0}},nr=Object.assign({},rr),or=er(rr,5);rr.user.loggedIn=!1,console.log(nr,or);let ar=0;const cr=document.createElement("button");cr.innerHTML=`5 더하기 버튼: 값 ${ar}`;const ur=()=>{ar+=5,cr.innerHTML=`5 더하기 버튼: 값 ${ar}`};cr.removeEventListener("click",ur),cr.addEventListener("click",ur);const ir=document.querySelector(".button-box");0===ir.childNodes.length?ir.append(cr):5!=+ir.querySelector("button").innerHTML.split(" ")[0]&&(ir.innerHTML="",ir.append(cr));
//# sourceMappingURL=index.d9b75704.js.map
