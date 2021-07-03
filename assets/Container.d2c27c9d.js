var t=Object.defineProperty,e=Object.defineProperties,r=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,a=(e,r,n)=>r in e?t(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n;import{ai as o,av as c,bN as u,bO as l,bP as h,aa as f,bQ as p,bR as d,bS as g,a4 as m,bT as _,bU as v}from"./vendor.74d5941c.js";import{r as y}from"./mat4f32.a5cabe00.js";import{o as b}from"./_commonjsHelpers.f2a458db.js";const w=1/o("mapview-transitions-duration");class x extends c{constructor(){super(...arguments),this._fadeOutResolver=null,this._fadeInResolver=null,this._clips=null,this.computedVisible=!0,this.computedOpacity=1,this.fadeTransitionEnabled=!1,this.inFadeTransition=!1,this._isReady=!1,this._opacity=1,this._stage=null,this._visible=!0}get clips(){return this._clips}set clips(t){this._clips=t,this.requestRender()}get isReady(){return this._isReady}get opacity(){return this._opacity}set opacity(t){this._opacity!==t&&(this._opacity=Math.min(1,Math.max(t,0)),this.requestRender())}get stage(){return this._stage}set stage(t){if(this._stage===t)return;const e=this._stage;this._stage=t,t?this._stage.untrashDisplayObject(this)||(this.onAttach(),this.emit("attach")):e.trashDisplayObject(this)}get visible(){return this._visible}set visible(t){this._visible!==t&&(this._visible=t,this.requestRender())}fadeIn(){return this._fadeInResolver||(this._fadeOutResolver&&(this._fadeOutResolver(),this._fadeOutResolver=null),this.computedOpacity=0,this.fadeTransitionEnabled=!0,this._fadeInResolver=u(),this.requestRender()),this._fadeInResolver.promise}fadeOut(){return this._fadeOutResolver||(this._fadeInResolver&&(this._fadeInResolver(),this._fadeInResolver=null),this.fadeTransitionEnabled=!0,this._fadeOutResolver=u(),this.requestRender()),this._fadeOutResolver.promise}beforeRender(t){this.updateTransitionProperties(t.deltaTime,t.state.scale)}afterRender(t){this._fadeInResolver&&this.computedOpacity===this.opacity?(this._fadeInResolver(),this._fadeInResolver=null):this._fadeOutResolver&&0===this.computedOpacity&&(this._fadeOutResolver(),this._fadeOutResolver=null)}remove(){var t;null==(t=this.parent)||t.removeChild(this)}setTransform(t){}processRender(t){this.stage&&this.computedVisible&&this.doRender(t)}requestRender(){this.stage&&this.stage.requestRender()}processDetach(){this.onDetach(),this.emit("detach")}updateTransitionProperties(t,e){if(this.fadeTransitionEnabled){const e=this._fadeOutResolver||!this.visible?0:this.opacity,r=this.computedOpacity;if(r===e)this.computedVisible=this.visible;else{const n=t*w;this.computedOpacity=r>e?Math.max(e,r-n):Math.min(e,r+n),this.computedVisible=this.computedOpacity>0;const s=e===this.computedOpacity;this.inFadeTransition=!s,s||this.requestRender()}}else this.computedOpacity=this.opacity,this.computedVisible=this.visible}onAttach(){}onDetach(){}doRender(t){}ready(){this._isReady||(this._isReady=!0,this.emit("isReady"),this.requestRender())}}class A{constructor(t,e,r){this.strength=t,this.radius=e,this.threshold=r,this.type="bloom"}interpolate(t,e,r){this.strength=E(t.strength,e.strength,r),this.radius=E(t.radius,e.radius,r),this.threshold=E(t.threshold,e.threshold,r)}clone(){return new A(this.strength,this.radius,this.threshold)}}class R{constructor(t){this.radius=t,this.type="blur"}interpolate(t,e,r){this.radius=Math.round(E(t.radius,e.radius,r))}clone(){return new R(this.radius)}}class M{constructor(t,e){this.type=t,this.amount=e,"invert"!==this.type&&"grayscale"!==this.type&&"sepia"!==this.type||(this.amount=Math.min(this.amount,1))}get colorMatrix(){return this._colorMatrix||this._updateMatrix(),this._colorMatrix}interpolate(t,e,r){this.amount=E(t.amount,e.amount,r),this._updateMatrix()}clone(){return new M(this.type,this.amount)}_updateMatrix(){const t=this._colorMatrix||y();switch(this.type){case"brightness":this._colorMatrix=((t,e)=>{const r=h(t,e,0,0,0,0,e,0,0,0,0,e,0,0,0,0,1);return l(r,r)})(t,this.amount);break;case"contrast":this._colorMatrix=((t,e)=>{const r=h(t,e,0,0,.5-.5*e,0,e,0,.5-.5*e,0,0,e,.5-.5*e,0,0,0,1);return l(r,r)})(t,this.amount);break;case"grayscale":this._colorMatrix=((t,e)=>{const r=1-e,n=h(t,.2126+.7874*r,.7152-.7152*r,.0722-.0722*r,0,.2126-.2126*r,.7152+.2848*r,.0722-.0722*r,0,.2126-.2126*r,.7152-.7152*r,.0722+.9278*r,0,0,0,0,1);return l(n,n)})(t,this.amount);break;case"invert":this._colorMatrix=((t,e)=>{const r=1-2*e,n=h(t,r,0,0,e,0,r,0,e,0,0,r,e,0,0,0,1);return l(n,n)})(t,this.amount);break;case"saturate":this._colorMatrix=((t,e)=>{const r=h(t,.213+.787*e,.715-.715*e,.072-.072*e,0,.213-.213*e,.715+.285*e,.072-.072*e,0,.213-.213*e,.715-.715*e,.072+.928*e,0,0,0,0,1);return l(r,r)})(t,this.amount);break;case"sepia":this._colorMatrix=((t,e)=>{const r=1-e,n=h(t,.393+.607*r,.769-.769*r,.189-.189*r,0,.349-.349*r,.686+.314*r,.168-.168*r,0,.272-.272*r,.534-.534*r,.131+.869*r,0,0,0,0,1);return l(n,n)})(t,this.amount)}}}class O{constructor(t,e,r,n){this.offsetX=t,this.offsetY=e,this.blurRadius=r,this.color=n,this.type="drop-shadow"}interpolate(t,e,r){this.offsetX=E(t.offsetX,e.offsetX,r),this.offsetY=E(t.offsetY,e.offsetY,r),this.blurRadius=E(t.blurRadius,e.blurRadius,r),this.color[0]=Math.round(E(t.color[0],e.color[0],r)),this.color[1]=Math.round(E(t.color[1],e.color[1],r)),this.color[2]=Math.round(E(t.color[2],e.color[2],r)),this.color[3]=E(t.color[3],e.color[3],r)}clone(){return new O(this.offsetX,this.offsetY,this.blurRadius,[...this.color])}}class C{constructor(t){this.angle=t,this.type="hue-rotate"}get colorMatrix(){return this._colorMatrix||this._updateMatrix(),this._colorMatrix}interpolate(t,e,r){this.angle=E(t.angle,e.angle,r),this._updateMatrix()}clone(){return new C(this.angle)}_updateMatrix(){const t=this._colorMatrix||y();this._colorMatrix=((t,e)=>{const r=Math.sin(e*Math.PI/180),n=Math.cos(e*Math.PI/180),s=h(t,.213+.787*n-.213*r,.715-.715*n-.715*r,.072-.072*n+.928*r,0,.213-.213*n+.143*r,.715+.285*n+.14*r,.072-.072*n-.283*r,0,.213-.213*n-.787*r,.715-.715*n+.715*r,.072+.928*n+.072*r,0,0,0,0,1);return l(s,s)})(t,this.angle)}}class T{constructor(t){this.amount=t,this.type="opacity",this.amount=Math.min(this.amount,1)}interpolate(t,e,r){this.amount=E(t.amount,e.amount,r)}clone(){return new T(this.amount)}}function E(t,e,r){return t+(e-t)*r}var F=b((function(t){var e;e=function(){function t(e,r,n,s){this.message=e,this.expected=r,this.found=n,this.location=s,this.name="SyntaxError","function"==typeof Error.captureStackTrace&&Error.captureStackTrace(this,t)}return function(t,e){function r(){this.constructor=t}r.prototype=e.prototype,t.prototype=new r}(t,Error),t.buildMessage=function(t,e){var r,n={literal:function(t){return'"'+i(t.text)+'"'},class:function(t){var e,r="";for(e=0;e<t.parts.length;e++)r+=t.parts[e]instanceof Array?a(t.parts[e][0])+"-"+a(t.parts[e][1]):a(t.parts[e]);return"["+(t.inverted?"^":"")+r+"]"},any:function(t){return"any character"},end:function(t){return"end of input"},other:function(t){return t.description}};function s(t){return t.charCodeAt(0).toString(16).toUpperCase()}function i(t){return t.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,(function(t){return"\\x0"+s(t)})).replace(/[\x10-\x1F\x7F-\x9F]/g,(function(t){return"\\x"+s(t)}))}function a(t){return t.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,(function(t){return"\\x0"+s(t)})).replace(/[\x10-\x1F\x7F-\x9F]/g,(function(t){return"\\x"+s(t)}))}function o(t){return n[t.type](t)}return"Expected "+function(t){var e,r,n=new Array(t.length);for(e=0;e<t.length;e++)n[e]=o(t[e]);if(n.sort(),n.length>0){for(e=1,r=1;e<n.length;e++)n[e-1]!==n[e]&&(n[r]=n[e],r++);n.length=r}switch(n.length){case 1:return n[0];case 2:return n[0]+" or "+n[1];default:return n.slice(0,-1).join(", ")+", or "+n[n.length-1]}}(t)+" but "+(((r=e)?'"'+i(r)+'"':"end of input")+" found.")},{SyntaxError:t,parse:function(e,r){r=void 0!==r?r:{};var n,s,i,a,o={},c={start:yt},u=yt,l=gt("none"),h="none",f=pt("none",!1),p=pt(")",!1),d=",",g=pt(",",!1),m=function(t,e){return e.length>0?function(t,e,r){return[t].concat(function(t,e){return t.map((function(t){return t[e]}))}(e,r))}(t,e,3):[t]},_=gt("whitespace"),v=/^[ \t\n\r]/,y=dt([" ","\t","\n","\r"],!1,!1),b=gt("function"),w=pt("(",!1),x=gt("identifier"),A=/^[a-z\-]/,R=dt([["a","z"],"-"],!1,!1),M=gt("percentage"),O=pt("%",!1),C=gt("length"),T="px",E=pt("px",!1),F="cm",q=pt("cm",!1),I="mm",S=pt("mm",!1),j="in",P=pt("in",!1),L="pt",k=pt("pt",!1),$="pc",D=pt("pc",!1),V=gt("angle"),X="deg",Y=pt("deg",!1),z="rad",N=pt("rad",!1),U="grad",H=pt("grad",!1),Q="turn",B=pt("turn",!1),G=gt("number"),J=gt("color"),K=pt("#",!1),W=/^[0-9a-fA-F]/,Z=dt([["0","9"],["a","f"],["A","F"]],!1,!1),tt=/^[+\-]/,et=dt(["+","-"],!1,!1),rt=/^[0-9]/,nt=dt([["0","9"]],!1,!1),st=pt(".",!1),it=pt("e",!1),at=0,ot=0,ct=[{line:1,column:1}],ut=0,lt=[],ht=0;if("startRule"in r){if(!(r.startRule in c))throw new Error("Can't start parsing from rule \""+r.startRule+'".');u=c[r.startRule]}function ft(){return e.substring(ot,at)}function pt(t,e){return{type:"literal",text:t,ignoreCase:e}}function dt(t,e,r){return{type:"class",parts:t,inverted:e,ignoreCase:r}}function gt(t){return{type:"other",description:t}}function mt(t){var r,n=ct[t];if(n)return n;for(r=t-1;!ct[r];)r--;for(n={line:(n=ct[r]).line,column:n.column};r<t;)10===e.charCodeAt(r)?(n.line++,n.column=1):n.column++,r++;return ct[t]=n,n}function _t(t,e){var r=mt(t),n=mt(e);return{start:{offset:t,line:r.line,column:r.column},end:{offset:e,line:n.line,column:n.column}}}function vt(t){at<ut||(at>ut&&(ut=at,lt=[]),lt.push(t))}function yt(){var t,r,n;return ht++,r=at,xt()!==o?(e.substr(at,4)===h?(n=h,at+=4):(n=o,0===ht&&vt(f)),n!==o&&xt()!==o?(ot=r,r=[]):(at=r,r=o)):(at=r,r=o),ht--,r===o&&0===ht&&vt(l),(t=r)===o&&(t=function(){var t,e;if(t=[],(e=bt())!==o)for(;e!==o;)t.push(e),e=bt();else t=o;return t}()),t}function bt(){var t,r,n,s;return t=at,xt()!==o&&(r=function(){var t,r,n;return ht++,t=at,(r=At())!==o?(40===e.charCodeAt(at)?(n="(",at++):(n=o,0===ht&&vt(w)),n!==o?(ot=t,t=r=r):(at=t,t=o)):(at=t,t=o),ht--,t===o&&(r=o,0===ht&&vt(b)),t}())!==o&&xt()!==o?((n=function(){var t,r,n,s,i,a,c,u;if(t=at,(r=wt())!==o){for(n=[],s=at,(i=xt())!==o?(44===e.charCodeAt(at)?(a=d,at++):(a=o,0===ht&&vt(g)),a===o&&(a=null),a!==o&&(c=xt())!==o&&(u=wt())!==o?s=i=[i,a,c,u]:(at=s,s=o)):(at=s,s=o);s!==o;)n.push(s),s=at,(i=xt())!==o?(44===e.charCodeAt(at)?(a=d,at++):(a=o,0===ht&&vt(g)),a===o&&(a=null),a!==o&&(c=xt())!==o&&(u=wt())!==o?s=i=[i,a,c,u]:(at=s,s=o)):(at=s,s=o);n!==o?(ot=t,t=r=m(r,n)):(at=t,t=o)}else at=t,t=o;return t}())===o&&(n=null),n!==o&&xt()!==o?(41===e.charCodeAt(at)?(s=")",at++):(s=o,0===ht&&vt(p)),s!==o&&xt()!==o?(ot=t,t=function(t,e){return{type:"function",name:t,parameters:e||[]}}(r,n)):(at=t,t=o)):(at=t,t=o)):(at=t,t=o),t}function wt(){var t,r;return t=at,(r=function(){var t,r,n;return ht++,t=at,xt()!==o&&(r=Rt())!==o?(37===e.charCodeAt(at)?(n="%",at++):(n=o,0===ht&&vt(O)),n!==o?(ot=t,t=function(t){return{value:t,unit:"%"}}(r)):(at=t,t=o)):(at=t,t=o),ht--,t===o&&0===ht&&vt(M),t}())===o&&(r=function(){var t,r,n;return ht++,t=at,xt()!==o&&(r=Rt())!==o?(e.substr(at,2)===T?(n=T,at+=2):(n=o,0===ht&&vt(E)),n!==o?(ot=t,t=function(t){return{value:t,unit:"px"}}(r)):(at=t,t=o)):(at=t,t=o),t===o&&(t=at,xt()!==o&&(r=Rt())!==o?(e.substr(at,2)===F?(n=F,at+=2):(n=o,0===ht&&vt(q)),n!==o?(ot=t,t=function(t){return{value:t,unit:"cm"}}(r)):(at=t,t=o)):(at=t,t=o),t===o&&(t=at,xt()!==o&&(r=Rt())!==o?(e.substr(at,2)===I?(n=I,at+=2):(n=o,0===ht&&vt(S)),n!==o?(ot=t,t=function(t){return{value:t,unit:"mm"}}(r)):(at=t,t=o)):(at=t,t=o),t===o&&(t=at,xt()!==o&&(r=Rt())!==o?(e.substr(at,2)===j?(n=j,at+=2):(n=o,0===ht&&vt(P)),n!==o?(ot=t,t=function(t){return{value:t,unit:"in"}}(r)):(at=t,t=o)):(at=t,t=o),t===o&&(t=at,xt()!==o&&(r=Rt())!==o?(e.substr(at,2)===L?(n=L,at+=2):(n=o,0===ht&&vt(k)),n!==o?(ot=t,t=function(t){return{value:t,unit:"pt"}}(r)):(at=t,t=o)):(at=t,t=o),t===o&&(t=at,xt()!==o&&(r=Rt())!==o?(e.substr(at,2)===$?(n=$,at+=2):(n=o,0===ht&&vt(D)),n!==o?(ot=t,t=function(t){return{value:t,unit:"pc"}}(r)):(at=t,t=o)):(at=t,t=o)))))),ht--,t===o&&0===ht&&vt(C),t}())===o&&(r=function(){var t,r,n;return ht++,t=at,(r=Rt())!==o?(e.substr(at,3)===X?(n=X,at+=3):(n=o,0===ht&&vt(Y)),n!==o?(ot=t,t=r=function(t){return{value:t,unit:"deg"}}(r)):(at=t,t=o)):(at=t,t=o),t===o&&(t=at,(r=Rt())!==o?(e.substr(at,3)===z?(n=z,at+=3):(n=o,0===ht&&vt(N)),n!==o?(ot=t,t=r=function(t){return{value:t,unit:"rad"}}(r)):(at=t,t=o)):(at=t,t=o),t===o&&(t=at,(r=Rt())!==o?(e.substr(at,4)===U?(n=U,at+=4):(n=o,0===ht&&vt(H)),n!==o?(ot=t,t=r=function(t){return{value:t,unit:"grad"}}(r)):(at=t,t=o)):(at=t,t=o),t===o&&(t=at,(r=Rt())!==o?(e.substr(at,4)===Q?(n=Q,at+=4):(n=o,0===ht&&vt(B)),n!==o?(ot=t,t=r=function(t){return{value:t,unit:"turn"}}(r)):(at=t,t=o)):(at=t,t=o)))),ht--,t===o&&(r=o,0===ht&&vt(V)),t}())===o&&(r=function(){var t,e;return ht++,t=at,xt()!==o&&(e=Rt())!==o?(ot=t,t=function(t){return{value:t,unit:null}}(e)):(at=t,t=o),ht--,t===o&&0===ht&&vt(G),t}()),r!==o&&(ot=t,r=function(t){return{type:"quantity",value:t.value,unit:t.unit}}(r)),(t=r)===o&&(t=at,(r=function(){var t,r,n,s;if(ht++,t=at,35===e.charCodeAt(at)?(r="#",at++):(r=o,0===ht&&vt(K)),r!==o){if(n=[],W.test(e.charAt(at))?(s=e.charAt(at),at++):(s=o,0===ht&&vt(Z)),s!==o)for(;s!==o;)n.push(s),W.test(e.charAt(at))?(s=e.charAt(at),at++):(s=o,0===ht&&vt(Z));else n=o;n!==o?(ot=t,t=r={type:"hex",value:ft()}):(at=t,t=o)}else at=t,t=o;return t===o&&(t=at,(r=bt())!==o&&(ot=t,r=function(t){return{type:"function",value:t}}(r)),(t=r)===o&&(t=at,(r=At())!==o&&(ot=t,r={type:"named",value:ft()}),t=r)),ht--,t===o&&(r=o,0===ht&&vt(J)),t}())!==o&&(ot=t,r=function(t){return{type:"color",colorType:t.type,value:t.value}}(r)),t=r),t}function xt(){var t,r;for(ht++,t=[],v.test(e.charAt(at))?(r=e.charAt(at),at++):(r=o,0===ht&&vt(y));r!==o;)t.push(r),v.test(e.charAt(at))?(r=e.charAt(at),at++):(r=o,0===ht&&vt(y));return ht--,t===o&&(r=o,0===ht&&vt(_)),t}function At(){var t,r,n;if(ht++,t=at,r=[],A.test(e.charAt(at))?(n=e.charAt(at),at++):(n=o,0===ht&&vt(R)),n!==o)for(;n!==o;)r.push(n),A.test(e.charAt(at))?(n=e.charAt(at),at++):(n=o,0===ht&&vt(R));else r=o;return r!==o&&(ot=t,r=ft()),ht--,(t=r)===o&&(r=o,0===ht&&vt(x)),t}function Rt(){var t,r,n,s,i,a,c,u;if(t=at,tt.test(e.charAt(at))?(r=e.charAt(at),at++):(r=o,0===ht&&vt(et)),r===o&&(r=null),r!==o){for(n=at,s=[],rt.test(e.charAt(at))?(i=e.charAt(at),at++):(i=o,0===ht&&vt(nt));i!==o;)s.push(i),rt.test(e.charAt(at))?(i=e.charAt(at),at++):(i=o,0===ht&&vt(nt));if(s!==o)if(46===e.charCodeAt(at)?(i=".",at++):(i=o,0===ht&&vt(st)),i!==o){if(a=[],rt.test(e.charAt(at))?(c=e.charAt(at),at++):(c=o,0===ht&&vt(nt)),c!==o)for(;c!==o;)a.push(c),rt.test(e.charAt(at))?(c=e.charAt(at),at++):(c=o,0===ht&&vt(nt));else a=o;a!==o?n=s=[s,i,a]:(at=n,n=o)}else at=n,n=o;else at=n,n=o;if(n===o)if(n=[],rt.test(e.charAt(at))?(s=e.charAt(at),at++):(s=o,0===ht&&vt(nt)),s!==o)for(;s!==o;)n.push(s),rt.test(e.charAt(at))?(s=e.charAt(at),at++):(s=o,0===ht&&vt(nt));else n=o;if(n!==o){if(s=at,101===e.charCodeAt(at)?(i="e",at++):(i=o,0===ht&&vt(it)),i!==o)if(tt.test(e.charAt(at))?(a=e.charAt(at),at++):(a=o,0===ht&&vt(et)),a===o&&(a=null),a!==o){if(c=[],rt.test(e.charAt(at))?(u=e.charAt(at),at++):(u=o,0===ht&&vt(nt)),u!==o)for(;u!==o;)c.push(u),rt.test(e.charAt(at))?(u=e.charAt(at),at++):(u=o,0===ht&&vt(nt));else c=o;c!==o?s=i=[i,a,c]:(at=s,s=o)}else at=s,s=o;else at=s,s=o;s===o&&(s=null),s!==o?(ot=t,t=r=parseFloat(ft())):(at=t,t=o)}else at=t,t=o}else at=t,t=o;return t}if((n=u())!==o&&at===e.length)return n;throw n!==o&&at<e.length&&vt({type:"end"}),s=lt,i=ut<e.length?e.charAt(ut):null,a=ut<e.length?_t(ut,ut+1):_t(ut,ut),new t(t.buildMessage(s,i),s,i,a)}}},t.exports&&(t.exports=e())}));function q(t){let e;try{e=t?F.parse(t):[]}catch(n){return{input:t,parsedFunctions:[],effects:[],error:new f("effect:invalid-syntax","Invalid effect syntax",{input:t,error:n})}}const r={input:t,parsedFunctions:e,effects:[],error:null};try{for(const t of e)r.effects.push(I(t))}catch(n){r.effects.length=0,r.error=n}return r}function I(t){try{switch(t.name){case"grayscale":case"sepia":case"saturate":case"invert":case"brightness":case"contrast":return function(t){let e=1;return S(t.parameters,1),1===t.parameters.length&&(e=$(t.parameters[0])),new M(t.name,e)}(t);case"opacity":return function(t){let e=1;return S(t.parameters,1),1===t.parameters.length&&(e=$(t.parameters[0])),new T(e)}(t);case"hue-rotate":return function(t){let e=0;return S(t.parameters,1),1===t.parameters.length&&(e=function(t){return function(t){if("quantity"!==t.type||(0!==t.value||null!==t.unit)&&null==L[t.unit])throw new f("effect:type-error",`Expected <angle>, Actual: ${j(t)}`,{term:t})}(t),t.value*L[t.unit]||0}(t.parameters[0])),new C(e)}(t);case"blur":return function(t){let e=0;return S(t.parameters,1),1===t.parameters.length&&(e=V(t.parameters[0]),P(e,t.parameters[0])),new R(e)}(t);case"drop-shadow":return function(t){const e=[];let r;for(const n of t.parameters)if("color"===n.type){if(e.length&&Object.freeze(e),r)throw new f("effect:type-error","Accepts only one color",{});r=X(n)}else{const t=V(n);if(Object.isFrozen(e))throw new f("effect:type-error","<length> parameters not consecutive",{lengths:e});e.push(t),3===e.length&&P(t,n)}if(e.length<2||e.length>3)throw new f("effect:type-error",`Expected <length>{2,3}, Actual: <length>{${e.length}}`,{lengths:e});return new O(e[0],e[1],e[2]||0,r||Y("black"))}(t);case"bloom":return function(t){let e=1,r=0,n=0;return S(t.parameters,3),t.parameters[0]&&(e=$(t.parameters[0])),t.parameters[1]&&(r=V(t.parameters[1]),P(r,t.parameters[1])),t.parameters[2]&&(n=$(t.parameters[2])),new A(e,r,n)}(t)}}catch(e){throw e.details.filter=t,e}throw new f("effect:unknown-effect",`Effect '${t.name}' is not supported`,{effect:t})}function S(t,e){if(t.length>e)throw new f("effect:type-error",`Function supports up to ${e} parameters, Actual: ${t.length}`,{parameters:t})}function j(t){return"color"===t.type?"<color>":k[t.unit]?"<length>":L[t.unit]?"<angle>":"%"===t.unit?"<percentage>":"<double>"}function P(t,e){if(t<0)throw new f("effect:type-error",`Negative values are not allowed, Actual: ${t}`,{term:e})}const L={deg:1,grad:.9,rad:180/Math.PI,turn:360};const k={px:1,cm:96/2.54,mm:96/2.54/10,in:96,pc:16,pt:96/73};function $(t){!function(t){if("quantity"!==t.type||null!==t.unit&&"%"!==t.unit)throw new f("effect:type-error",`Expected <double> or <percentage>, Actual: ${j(t)}`,{term:t})}(t);const e=t.value;return P(e,t),"%"===t.unit?.01*e:e}function D(t){return function(t){if("quantity"!==t.type||null!==t.unit)throw new f("effect:type-error",`Expected <double>, Actual: ${j(t)}`,{term:t})}(t),P(t.value,t),t.value}function V(t){return function(t){if("quantity"!==t.type||(0!==t.value||null!==t.unit)&&null==k[t.unit])throw new f("effect:type-error",`Expected <length>, Actual: ${j(t)}`,{term:t})}(t),t.value*k[t.unit]||0}function X(t){switch(t.colorType){case"hex":return p(t.value);case"named":return Y(t.value);case"function":return function(t){if(S(t.parameters,4),z.test(t.name))return[$(t.parameters[0]),$(t.parameters[1]),$(t.parameters[2]),t.parameters[3]?$(t.parameters[3]):1];if(N.test(t.name))return g(D(t.parameters[0]),$(t.parameters[1]),$(t.parameters[2]),t.parameters[3]?$(t.parameters[3]):1);throw new f("effect:syntax-error",`Invalid color function '${t.name}'`,{colorFunction:t})}(t.value)}}function Y(t){const e=d(t);if(!e)throw new f("effect:unknown-color",`color '${t}' isn't valid`,{namedColor:t});return e}const z=/^rgba?/i,N=/^hsla?/i;const U=-1;class H{constructor(t=200){this.duration=t,this._from=null,this._to=null,this._final=null,this._current=[],this._time=0,this._effect="",this._effects=[],this._scale=0}get effect(){return this._effect}set effect(t){if(t=t||"",this._effect===t)return;this._effect=t;const e=function(t){if(!t)return[];if("string"==typeof t){const e=q(t);return e.error?e.error:[{scale:U,effects:e.effects}]}const e=[];for(const r of t){if(!isFinite(r.scale)||r.scale<=0)return new f("effect:invalid-scale","scale must be finite and greater than 0",{stop:r});const t=q(r.value);if(t.error)return t.error;e.push({scale:r.scale,effects:t.effects})}e.sort(((t,e)=>e.effects.length-t.effects.length));for(let r=0;r<e.length-1;r++){if(!B(e[r].effects,e[r+1].effects))return new f("effect:interpolation-impossible","Cannot interpolate by scale between 2 lists of mixed effects",{a:e[r].effects,b:e[r+1].effects});G(e[r].effects,e[r+1].effects)}return e.sort(((t,e)=>e.scale-t.scale)),e}(t);Array.isArray(e)?this._transitionTo(e):(this._transitionTo([]),m.getLogger("esri.views.layers.effects.EffectList").warn("Invalid Effect",{effect:t,error:e}))}get hasEffects(){return this.transitioning||!!this._effects.length}get effects(){return this._effects}get scale(){return this._scale}get transitioning(){return null!==this._to}transitionStep(t,e){this._applyTimeTransition(t),this._updateForScale(e)}_transitionTo(t){this.scale>0&&function(t,e,r){var n,s,i,a;return null==(n=t[0])||!n.effects||null==(s=e[0])||!s.effects||!(((null==(i=t[0])?void 0:i.scale)===U||(null==(a=e[0])?void 0:a.scale)===U)&&(t.length>1||e.length>1)&&r<=0)&&B(t[0].effects,e[0].effects)}(this._current,t,this.scale)?(this._final=t,this._to=_(t),function(t,e,r){var n,s;const i=t.length>e.length?t:e,a=t.length>e.length?e:t,o=a[a.length-1],c=null!=(n=null==o?void 0:o.scale)?n:r,u=null!=(s=null==o?void 0:o.effects)?s:[];for(let l=a.length;l<i.length;l++)a.push({scale:c,effects:[...u]});for(let l=0;l<i.length;l++)a[l].scale=a[l].scale===U?r:a[l].scale,i[l].scale=i[l].scale===U?r:i[l].scale,G(a[l].effects,i[l].effects)}(this._current,this._to,this.scale),this._from=_(this._current),this._time=0):(this._from=this._to=this._final=null,this._current=t),this._effects=this._current[0]?_(this._current[0].effects):[]}_applyTimeTransition(t){if(!this._to)return;this._time+=t;const e=Math.min(1,this._time/this.duration);for(let r=0;r<this._current.length;r++){const t=this._current[r],n=this._from[r],s=this._to[r];t.scale=J(n.scale,s.scale,e);for(let r=0;r<t.effects.length;r++){const i=t.effects[r],a=n.effects[r],o=s.effects[r];i.interpolate(a,o,e)}}1===e&&(this._current=this._final,this._effects=this._current[0]?_(this._current[0].effects):[],this._from=this._to=this._final=null)}_updateForScale(t){if(0===this._current.length)return;this._scale=t;const e=this._current,r=this._current.length-1;let n,s,i=1;if(1===e.length||t>=e[0].scale)s=n=e[0].effects;else if(t<=e[r].scale)s=n=e[r].effects;else for(let a=0;a<r;a++){const r=e[a],o=e[a+1];if(r.scale>=t&&o.scale<=t){i=(t-r.scale)/(o.scale-r.scale),n=r.effects,s=o.effects;break}}for(let a=0;a<this._effects.length;a++)this._effects[a].interpolate(n[a],s[a],i)}}function Q(t){switch(t.type){case"grayscale":case"sepia":case"invert":return new M(t.type,0);case"saturate":case"brightness":case"contrast":return new M(t.type,1);case"opacity":return new T(1);case"hue-rotate":return new C(0);case"blur":return new R(0);case"drop-shadow":return new O(0,0,0,[...v("transparent")]);case"bloom":return new A(0,0,0)}}function B(t,e){const r=t.length>e.length?t:e;return(t.length>e.length?e:t).every(((t,e)=>t.type===r[e].type))}function G(t,e){const r=t.length>e.length?t:e,n=t.length>e.length?e:t;for(let s=n.length;s<r.length;s++)n.push(Q(r[s]))}function J(t,e,r){return t+(e-t)*r}const K=o("mapview-transitions-duration");class W extends x{constructor(){super(...arguments),this._childrenSet=new Set,this.children=[],this._effectList=null}get blendMode(){return this._blendMode}set blendMode(t){this._blendMode=t,this.requestRender()}get clips(){return this._clips}set clips(t){this._clips=t,this.children.forEach((e=>e.clips=t))}get computedEffects(){var t,e;return null!=(t=null==(e=this._effectList)?void 0:e.effects)?t:null}get effect(){var t,e;return null!=(t=null==(e=this._effectList)?void 0:e.effect)?t:""}set effect(t){(this._effectList||t)&&(this._effectList||(this._effectList=new H(K)),this._effectList.effect=t,this.requestRender())}updateTransitionProperties(t,e){super.updateTransitionProperties(t,e),this._effectList&&(this._effectList.transitionStep(t,e),this._effectList.transitioning&&this.requestRender())}doRender(t){const e=this.createRenderParams(t);this.renderChildren(e)}addChild(t){return this.addChildAt(t,this.children.length)}addChildAt(t,e=this.children.length){if(!t)return t;if(this.contains(t))return t;const r=t.parent;return r&&r!==this&&r.removeChild(t),e>=this.children.length?this.children.push(t):this.children.splice(e,0,t),this._childrenSet.add(t),t.parent=this,t.stage=this.stage,this!==this.stage&&(t.clips=this.clips),this.requestRender(),t}contains(t){return this._childrenSet.has(t)}removeAllChildren(){this._childrenSet.clear();for(const t of this.children)this!==this.stage&&(t.clips=null),t.stage=null,t.parent=null;this.children.length=0}removeChild(t){return this.contains(t)?this.removeChildAt(this.children.indexOf(t)):t}removeChildAt(t){if(t<0||t>=this.children.length)return null;const e=this.children.splice(t,1)[0];return this._childrenSet.delete(e),this!==this.stage&&(e.clips=null),e.stage=null,e.parent=null,e}sortChildren(t){return this.children.sort(t)}onAttach(){super.onAttach();const t=this.stage;for(const e of this.children)e.stage=t}onDetach(){super.onDetach();for(const t of this.children)t.stage=null}renderChildren(t){for(const e of this.children)e.beforeRender(t);for(const e of this.children)e.processRender(t);for(const e of this.children)e.afterRender(t)}createRenderParams(t){return o=((t,e)=>{for(var r in e||(e={}))s.call(e,r)&&a(t,r,e[r]);if(n)for(var r of n(e))i.call(e,r)&&a(t,r,e[r]);return t})({},t),c={blendMode:this.blendMode,effects:this.computedEffects,globalOpacity:t.globalOpacity*this.computedOpacity,inFadeTransition:this.inFadeTransition},e(o,r(c));var o,c}}export{x as a,W as r,H as u};