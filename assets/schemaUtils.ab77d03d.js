var e=Object.defineProperty,t=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,a=(t,i,s)=>i in t?e(t,i,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[i]=s,o=(e,t)=>{for(var i in t||(t={}))n.call(t,i)&&a(e,i,t[i]);if(s)for(var i of s(t))r.call(t,i)&&a(e,i,t[i]);return e},l=(e,s)=>t(e,i(s));import{bV as u,at as c,bW as h,bX as f,bY as d,bZ as p,as as m,aI as g,aG as y,aH as b,aF as x,b_ as v,bA as w,b6 as M,b$ as S,c0 as T,c1 as z,c2 as _,a9 as E,c3 as F,b9 as V,be as I,bu as C,b7 as R,ae as O,af as L,c4 as B,ag as N,c5 as k,c6 as P,bT as A,a4 as j,ai as W,a0 as $,c7 as D,aa as H,c8 as G,c9 as J,a5 as K,ca as q,ay as U,cb as Y}from"./vendor.74d5941c.js";import{x as X}from"./MD5.1ef35834.js";import{m as Z,A as Q,E as ee,S as te}from"./Utils.3f1577e5.js";import{f as ie,A as se}from"./MaterialKey.3bc4aaea.js";import{o as ne}from"./visualVariablesUtils.cb58e4df.js";import{k as re}from"./definitions.6737c10c.js";import{h as ae,t as oe}from"./CIMSymbolHelper.6546a069.js";import{t as le}from"./Rect.b51904ac.js";import{C as ue}from"./BidiEngine.9b392b22.js";const ce=new ue;function he(e){if(!ce.hasBidiChar(e))return[e,!1];let t;return t="rtl"===ce.checkContextual(e)?"IDNNN":"ICNNN",[ce.bidiTransform(e,t,"VLYSN"),!0]}var fe,de,pe;function me(e){switch(e){case"left":return fe.Left;case"right":return fe.Right;case"center":case"justify":return fe.Center}}function ge(e){switch(e){case"top":return de.Top;case"middle":return de.Center;case"baseline":return de.Baseline;case"bottom":return de.Bottom}}function ye(e){switch(e){case"above-left":return[fe.Right,de.Bottom];case"above-center":case"above-along":return[fe.Center,de.Bottom];case"above-right":return[fe.Left,de.Bottom];case"center-left":return[fe.Right,de.Center];case"center-center":case"center-along":return[fe.Center,de.Center];case"center-right":return[fe.Left,de.Center];case"below-left":return[fe.Right,de.Top];case"below-center":case"below-along":return[fe.Center,de.Top];case"below-right":return[fe.Left,de.Top];case"always-horizontal":return[fe.Center,de.Baseline];default:return console.debug(`Found invalid placement type ${e}`),[fe.Center,de.Center]}}function be(e){switch(e){case fe.Right:return-1;case fe.Center:return 0;case fe.Left:return 1;default:return console.debug(`Found invalid horizontal alignment ${e}`),0}}function xe(e){switch(e){case de.Top:return 1;case de.Center:return 0;case de.Bottom:case de.Baseline:return-1;default:return console.debug(`Found invalid vertical alignment ${e}`),0}}function ve(e){switch(e){case"left":return fe.Left;case"right":return fe.Right;case"center":case"justify":return fe.Center}}(pe=fe||(fe={}))[pe.Left=-1]="Left",pe[pe.Center=0]="Center",pe[pe.Right=1]="Right",function(e){e[e.Top=1]="Top",e[e.Center=0]="Center",e[e.Bottom=-1]="Bottom",e[e.Baseline=2]="Baseline"}(de||(de={}));class we{constructor(e,t,i,s){this.center=u(e,t),this.centerT=c(),this.halfWidth=i/2,this.halfHeight=s/2,this.width=i,this.height=s}get x(){return this.center[0]}get y(){return this.center[1]}get blX(){return this.center[0]+this.halfWidth}get blY(){return this.center[1]+this.halfHeight}get trX(){return this.center[0]-this.halfWidth}get trY(){return this.center[1]-this.halfHeight}get xmin(){return this.x-this.halfWidth}get xmax(){return this.x+this.halfWidth}get ymin(){return this.y-this.halfHeight}get ymax(){return this.y+this.halfHeight}set x(e){this.center[0]=e}set y(e){this.center[1]=e}clone(){return new we(this.x,this.y,this.width,this.height)}serialize(e){return e.writeF32(this.center[0]),e.writeF32(this.center[1]),e.push(this.width),e.push(this.height),e}findCollisionDelta(e,t=4){const i=Math.abs(e.centerT[0]-this.centerT[0]),s=Math.abs(e.centerT[1]-this.centerT[1]),n=(e.halfWidth+this.halfWidth+t)/i,r=(e.halfHeight+this.halfHeight+t)/s,a=Math.min(n,r);return h(a)}extend(e){const t=Math.min(this.xmin,e.xmin),i=Math.min(this.ymin,e.ymin),s=Math.max(this.xmax,e.xmax)-t,n=Math.max(this.ymax,e.ymax)-i,r=t+s/2,a=i+n/2;this.width=s,this.height=n,this.halfWidth=s/2,this.halfHeight=n/2,this.x=r,this.y=a}static deserialize(e){const t=e.readF32(),i=e.readF32(),s=e.readInt32(),n=e.readInt32();return new we(t,i,s,n)}}const Me=Math.PI/180;class Se{constructor(e,t,i,s){this._rotationT=d(),this._xBounds=0,this._yBounds=0,this.minZoom=0,this.maxZoom=255,this._bounds=null;const n=i.rect,r=new Float32Array(8);e*=s,t*=s;const a=i.code?n.width*s:i.metrics.width,o=i.code?n.height*s:i.metrics.height;r[0]=e,r[1]=t,r[2]=e+a,r[3]=t,r[4]=e,r[5]=t+o,r[6]=e+a,r[7]=t+o,this._data=r,this._setTextureCoords(n),this._scale=s,this._mosaic=i,this.x=e,this.y=t,this.maxOffset=Math.max(e+a,t+o)}get width(){return this._mosaic.metrics.width*this._scale}get mosaic(){return this._mosaic}set angle(e){this._angle=e,x(this._rotationT),b(this._rotationT,this._rotationT,-e),this._setOffsets(this._data)}get angle(){return this._angle}get xTopLeft(){return this._data[0]}get yTopLeft(){return this._data[1]}get xBottomRight(){return this._data[6]}get yBottomRight(){return this._data[7]}get texcoords(){return this._texcoords}get textureBinding(){return this._mosaic.textureBinding}get offsets(){return this._offsets||this._setOffsets(this._data),this._offsets}get char(){return String.fromCharCode(this._mosaic.code)}get code(){return this._mosaic.code}get bounds(){if(!this._bounds){const{height:e,width:t}=this._mosaic.metrics,i=t*this._scale,s=Math.abs(e)*this._scale,n=new Float32Array(8);n[0]=this.x,n[1]=this.y,n[2]=this.x+i,n[3]=this.y,n[4]=this.x,n[5]=this.y+s,n[6]=this.x+i,n[7]=this.y+s;const r=p(d(),this._rotationT,this._T);v(n,n,r);let a=1/0,o=1/0,l=0,u=0;for(let d=0;d<4;d++){const e=n[2*d],t=n[2*d+1];a=Math.min(a,e),o=Math.min(o,t),l=Math.max(l,e),u=Math.max(u,t)}const c=l-a,h=u-o,f=a+c/2,m=o+h/2;this._bounds=new we(f,m,c,h)}return this._bounds}setTransform(e){this._T=e,this._offsets=null}_setOffsets(e){this._offsets||(this._offsets={upperLeft:0,upperRight:0,lowerLeft:0,lowerRight:0});const t=this._offsets,i=new Float32Array(8),s=p(d(),this._rotationT,this._T);v(i,e,s),t.upperLeft=Z(8*i[0],8*i[1]),t.upperRight=Z(8*i[2],8*i[3]),t.lowerLeft=Z(8*i[4],8*i[5]),t.lowerRight=Z(8*i[6],8*i[7])}_setTextureCoords({x:e,y:t,width:i,height:s}){this._texcoords={upperLeft:Z(e,t),upperRight:Z(e+i,t),lowerLeft:Z(e,t+s),lowerRight:Z(e+i,t+s)}}}const Te=(e,t)=>({code:0,page:0,sdf:!0,rect:new le(0,0,11,8),textureBinding:t,metrics:{advance:0,height:4,width:e,left:0,top:0}});class ze{constructor(e,t,i){this._rotation=0,this._decorate(e,t,i),this.glyphs=e,this.bounds=this._createBounds(e),this.isMultiline=t.length>1,this._hasRotation=0!==i.angle,this._T=this._createGlyphTransform(this.bounds,i);for(const s of e)s.setTransform(this._T)}setRotation(e){if(0===e&&0===this._rotation)return;this._rotation=e;const t=this._T,i=f(d(),e);p(t,i,t);for(const s of this.glyphs)s.setTransform(this._T)}_decorate(e,t,i){if(!i.decoration||"none"===i.decoration||!e.length)return;const s=i.scale,n="underline"===i.decoration?30:20,r=e[0].textureBinding;for(const a of t){const t=a.startX*s,i=a.startY*s,o=(a.width+a.glyphWidthEnd)*s;e.push(new Se(t,i+n*s,Te(o,r),1))}}get boundsT(){const e=this.bounds,t=m(c(),e.x,e.y);if(g(t,t,this._T),this._hasRotation){const i=Math.max(e.width,e.height);return new we(t[0],t[1],i,i)}return new we(t[0],t[1],e.width,e.height)}_createBounds(e){let t=1/0,i=1/0,s=0,n=0;for(const o of e)t=Math.min(t,o.xTopLeft),i=Math.min(i,o.yTopLeft),s=Math.max(s,o.xTopLeft+o.width),n=Math.max(n,o.yBottomRight);const r=s-t,a=n-i;return new we(t+r/2,i+a/2,r,a)}_createGlyphTransform(e,t){const i=Me*t.angle,s=d(),n=c();return y(s,s,m(n,t.xOffset,-t.yOffset)),t.isCIM?b(s,s,i):(y(s,s,m(n,e.x,e.y)),b(s,s,i),y(s,s,m(n,-e.x,-e.y))),s}}class _e{constructor(e,t,i,s,n,r){this.glyphWidthEnd=0,this.startX=0,this.startY=0,this.start=Math.max(0,Math.min(t,i)),this.end=Math.max(0,Math.max(t,i)),this.end<e.length&&(this.glyphWidthEnd=e[this.end].metrics.width),this.width=s,this.yMin=n,this.yMax=r}}const Ee=e=>10===e,Fe=e=>32===e;function Ve(e,t,i){const s=i.scale,n=new Array,r=function(e,t,i){const s=new Array,n=1/i.scale,r=i.maxLineWidth*n,a=t?e.length-1:0,o=t?-1:e.length,l=t?-1:1;let u=a,c=0,h=0,f=u,d=f,p=0,m=1/0,g=0;for(;u!==o;){const{code:t,metrics:i}=e[u],n=Math.abs(i.top);if(Ee(t)||Fe(t)||(m=Math.min(m,n),g=Math.max(g,n+i.height)),Ee(t))u!==a&&(s.push(new _e(e,f,u-l,c,m,g)),m=1/0,g=0),c=0,f=u+l,d=u+l,h=0;else if(Fe(t))d=u+l,h=0,p=i.advance,c+=i.advance;else if(c>r){if(d!==f){const t=d-2*l;c-=p,s.push(new _e(e,f,t,c-h,m,g)),m=1/0,g=0,f=d,c=h}else s.push(new _e(e,f,u-l,c,m,g)),m=1/0,g=0,f=u,d=u,c=0;c+=i.advance,h+=i.advance}else c+=i.advance,h+=i.advance;u+=l}const y=new _e(e,f,u-l,c,m,g);return y.start>=0&&y.end<e.length&&s.push(y),s}(e,t,i),a=function(e,t){let i=0;for(let r=0;r<e.length;r++){const{width:t}=e[r];i=Math.max(t,i)}const s="underline"===t.decoration?4:0,n=e[0].yMin;return{x:0,y:n,height:e[e.length-1].yMax+t.lineHeight*(e.length-1)+s-n,width:i}}(r,i),{vAlign:o,hAlign:l}=i,u=o===de.Baseline?1:0,c=u?0:o-1,h=(1-u)*-a.y+c*(a.height/2)+-26*(u?1:0);for(let f=0;f<r.length;f++){const{start:t,end:a,width:o}=r[f];let u=-1*(l+1)*(o/2)-3;const c=f*i.lineHeight+h-3;r[f].startX=u,r[f].startY=c;for(let i=t;i<=a;i++){const t=e[i];if(Ee(t.code))continue;const r=new Se(u+t.metrics.left,c-t.metrics.top,t,s);u+=t.metrics.advance,n.push(r)}}return new ze(n,r,i)}const Ie=Math.PI/180,Ce=d(),Re=c(),Oe=512,Le=50;function Be(e,t){if(!t.isWrappable)return null;const[i,s]=w(t);return e[2]>s?[M([e[0],e[1],s,e[3]]),M([i,e[1],i+e[2]-s,e[3]])]:e[0]<i?[M([i,e[1],e[2],e[3]]),M([s-(i-e[0]),e[1],s,e[3]])]:null}function Ne(e,t,i,s,n,r,a){if(!s||!i.symbol)return e[0]=e[1]=e[2]=e[3]=0,t[0]=t[1]=t[2]=t[3]=0,e;const o=s;if(!V(o)){I(e,o);let s=t[0];0===s&&(s=Xe(i),t[0]=s);const r=n*s/2;return e[0]-=r,e[1]-=r,e[2]+=r,e[3]+=r,e}{const s=o.x,l=o.y;"esriTS"===i.symbol.type&&0===t[2]&&0===t[3]&&Ze(t,i.symbol,i.mosaicItem),function(e,t,i,s,n,r,a,o){let l;switch(s.type){case"esriSMS":case"esriPMS":l=qe(t,i,s,r,a,0);break;case"esriTS":l=Ye(t,i,s,n,r,0);break;case"cim":case"CIMSymbolReference":case"expanded-cim":l=Ue(t,i,s,r,a,0)}let u,c,h=0;for(let p=0;p<l.rings[0].length-1;p++)c=l.rings[0][p],u=(t-c[0])*(t-c[0])+(i-c[1])*(i-c[1]),h=Math.max(h,u);h=Math.sqrt(h);let f=C(t-h,o),d=C(t+h,o);if(f>d){const e=R(o);if(e){const[t,i]=e.valid;f=t,d=i}}e[0]=f,e[1]=i-h,e[2]=d,e[3]=i+h}(e,s,l,i.symbol,t,n,r,a)}return e}function ke(e){return"text"===e||"esriTS"===e}function Pe(e){return"simple-marker"===e||"picture-marker"===e||"esriSMS"===e||"esriPMS"===e}function Ae(e){switch(S(e.geometry).type){case"point":case"multipoint":return 0;case"polyline":return 1;case"polygon":case"extent":return 2}return 0}const je=c(),We=c(),$e=c(),De=c(),He=c(),Ge=c(),Je=c();function Ke(e,t,i,s){m($e,t,i);const n=e.paths;let r,a,o,l,u,c,h,f,d,p=1/0;for(let g=0;g<n.length;g++){const e=n[g];if(!(e.length<2))for(let n=1;n<e.length;n++)r=e[n-1][0],o=e[n-1][1],a=e[n][0],l=e[n][1],u=Math.min(r,a)-s,c=Math.min(o,l)-s,h=Math.max(r,a)+s,f=Math.max(o,l)+s,t<u||t>h||i<c||i>f||(m(je,r,o),m(We,a,l),T(De,We,je),T(He,je,$e),z(Ge,De,_(De,He)/_(De,De)),T(Je,He,Ge),d=_(Je,Je),p>d&&(p=d))}return Math.sqrt(p)<=s}function qe(e,t,i,s,n,r){let a,o;const l=E(i.xoffset),u=E(i.yoffset),c=Ie*i.angle,h=Ie*r;switch(i.type){case"esriSMS":a=o=E(i.size);break;case"esriPMS":a=E(i.width),o=E(i.height)}n<.04&&(s=.04*s/n);const f=x(Ce);y(f,f,m(Re,e,t)),b(f,f,h-c),F(f,f,m(Re,s,-s)),y(f,f,m(Re,l,-u));const d=[0,0];g(d,m(Re,-.5*a,-.5*o),f);const p=[0,0];g(p,m(Re,-.5*a,.5*o),f);const v=[0,0];g(v,m(Re,.5*a,-.5*o),f);const w=[0,0];return g(w,m(Re,.5*a,.5*o),f),{rings:[[d,v,w,p,d]]}}function Ue(e,t,i,s,n,r){const a=ae.getEnvelope(i.data);if(!a)return null;n<.04&&(s=.04*s/n);const o=E(a.width),l=E(a.height),u=E(a.x),c=E(a.y),h=0*Ie,f=Ie*r,d=x(Ce);y(d,d,m(Re,e,t)),b(d,d,f-h),F(d,d,m(Re,s,s));const p=[0,0];g(p,m(Re,u,c+l),d);const v=[0,0];g(v,m(Re,u,c),d);const w=[0,0];g(w,m(Re,u+o,c+l),d);const M=[0,0];return g(M,m(Re,u+o,c),d),{rings:[[p,w,M,v,p]]}}function Ye(e,t,i,s,n,r){const a=E(i.xoffset),o=E(i.yoffset),l=Ie*i.angle,u=Ie*r,c=x(Ce);y(c,c,m(Re,e,t)),b(c,c,u),F(c,c,m(Re,n,-n));const h=s[0]+s[2]/2,f=s[1]+s[3]/2;y(c,c,m(Re,a,-o)),y(c,c,m(Re,h,f)),b(c,c,l),y(c,c,m(Re,-h,-f));const d=[0,0];g(d,m(Re,s[0],s[1]),c);const p=[0,0];g(p,m(Re,s[0],s[1]+s[3]),c);const v=[0,0];g(v,m(Re,s[0]+s[2],s[1]),c);const w=[0,0];return g(w,m(Re,s[0]+s[2],s[1]+s[3]),c),{rings:[[d,v,w,p,d]]}}function Xe(e){switch(e.symbol.type){case"esriSFS":case"esriPFS":{const t=e.symbol.outline;return t?t.width:0}case"esriSLS":return E(e.symbol.width);case"esriSMS":return E(e.symbol.size);case"esriPMS":return E(Math.max(e.symbol.width,e.symbol.height));case"esriTS":{const t=[0,0,0,0];Ze(t,e.symbol,e.mosaicItem);const i=Math.max(Math.abs(t[0]),Math.abs(t[1]));return Math.max(t[2],t[3])+i}case"expanded-cim":{const t=ae.getEnvelope(e.symbol.data);return t.width!==-1/0&&t.height!==-1/0||(t.width=10,t.height=10,t.x=0,t.y=0),E(Math.sqrt(t.width*t.width+t.height*t.height))}case"composite-symbol":{if(!e.symbol.layers.length)return 0;const t=e.symbol.layers.length-1;return Xe({symbol:e.symbol.layers[t],mosaicItem:null})}case"label":default:return 0}}function Ze(e,t,i){if(!i||0===i.glyphMosaicItems.length)return e;const s=he(t.text)[1],n=Ve(i.glyphMosaicItems,s,{scale:E(t.font.size)/24,angle:t.angle,xOffset:t.xoffset,yOffset:t.yoffset,hAlign:me(t.horizontalAlignment||"center"),vAlign:ge(t.verticalAlignment||"baseline"),maxLineWidth:Math.max(32,Math.min(t.lineWidth||512,512)),lineHeight:30*Math.max(.25,Math.min(t.lineHeight||1,4)),decoration:t.font.decoration||"none",isCIM:!1}).bounds;return e[0]=E(n.x-n.halfWidth),e[1]=E(n.y-n.halfHeight),e[2]=E(n.width),e[3]=E(n.height),e}var Qe;let et=Qe=class extends k{writeLevels(e,t,i){for(const s in e){const e=this.levels[s];return void(t.stops=e)}}clone(){return new Qe({axis:this.axis,field:this.field,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,maxDataValue:this.maxDataValue,maxSize:P(this.maxSize)?this.maxSize.clone():this.maxSize,minDataValue:this.minDataValue,minSize:P(this.minSize)?this.minSize.clone():this.minSize,normalizationField:this.normalizationField,stops:this.stops&&this.stops.map((e=>e.clone())),target:this.target,useSymbolValue:this.useSymbolValue,valueRepresentation:this.valueRepresentation,valueUnit:this.valueUnit,legendOptions:this.legendOptions&&this.legendOptions.clone(),levels:A(this.levels)})}};O([L()],et.prototype,"levels",void 0),O([B("levels")],et.prototype,"writeLevels",null),et=Qe=O([N("esri.views.2d.engine.LevelDependentSizeVariable")],et);const tt=j.getLogger("esri.views.2d.layers.support.clusterUtils");W.add("esri-cluster-arcade-enabled",1);const it=W("esri-cluster-arcade-enabled"),st=(e,t,i,s)=>{const n=t.clone();if(!ot(n))return n;if(i.fields)for(const r of i.fields)lt(e,r);if("visualVariables"in n){const t=(n.visualVariables||[]).filter((e=>"$view.scale"!==e.valueExpression)),r=nt(t);t.forEach((t=>{"rotation"===t.type?t.field?t.field=ct(e,t.field,"avg_angle"):t.valueExpression&&(t.field=ut(e,t.valueExpression,"avg_angle"),t.valueExpression=null):t.normalizationField?(t.field=ct(e,t.field,"norm",t.normalizationField),t.normalizationField=null):t.field?t.field=ct(e,t.field,"avg"):(t.field=ut(e,t.valueExpression,"avg"),t.valueExpression=null)})),$(r)&&!rt(t)&&(t.push(at(i,s)),n.dynamicClusterSize=!0),n.visualVariables=t}switch(n.type){case"simple":break;case"unique-value":n.field?n.field=ct(e,n.field,"mode"):n.valueExpression&&(n.field=ut(e,n.valueExpression,"mode"),n.valueExpression=null);break;case"class-breaks":n.normalizationField?(n.field=ct(e,n.field,"norm",n.normalizationField),n.normalizationField=null):n.field?n.field=ct(e,n.field,"avg"):(n.field=ut(e,n.valueExpression,"avg"),n.valueExpression=null)}return n},nt=e=>{for(const t of e)if("size"===t.type)return t;return null},rt=e=>{for(const t of e)if("cluster_count"===t.field)return!0;return!1},at=(e,t)=>{const i=[new D({value:0,size:0}),new D({value:1})];if($(t))return new k({field:"cluster_count",stops:[...i,new D({value:2,size:0})]});const s=Object.keys(t).reduce(((s,n)=>l(o({},s),{[n]:[...i,new D({value:Math.max(2,t[n].minValue),size:e.clusterMinSize}),new D({value:Math.max(3,t[n].maxValue),size:e.clusterMaxSize})]})),{});return new et({field:"cluster_count",levels:s})},ot=e=>{const t=t=>tt.error(new H("Unsupported-renderer",t,{renderer:e}));if("unique-value"===e.type){if(e.field2||e.field3)return t("FeatureReductionCluster does not support multi-field UniqueValueRenderers"),!1}else if("class-breaks"===e.type){if(e.normalizationField){const i=e.normalizationType;if("field"!==i)return t(`FeatureReductionCluster does not support a normalizationType of ${i}`),!1}}else if("simple"!==e.type)return t(`FeatureReductionCluster does not support renderers of type ${e.type}`),!1;if(!it){if("valueExpression"in e&&e.valueExpression)return t("FeatureReductionCluster does not currently support renderer.valueExpression. Support will be added in a future release"),!1;if(("visualVariables"in e&&e.visualVariables||[]).some((e=>!(!("valueExpression"in e)||!e.valueExpression))))return t("FeatureReductionCluster does not currently support visualVariables with a valueExpression. Support will be added in a future release"),!1}return!0};function lt(e,t){const{name:i,outStatistic:s}=t,{onStatisticField:n,onStatisticValueExpression:r,statisticType:a}=s;if(r){const t=X(r.toLowerCase());e.push({name:i,outStatistic:{onStatisticField:t,onStatisticValueExpression:r,statisticType:a}})}else n?e.push({name:i,outStatistic:{onStatisticField:n,statisticType:a}}):tt.error(new H("mapview-unsupported-field","Unable to handle field",{field:t}))}function ut(e,t,i){const s=X(t),n="mode"===i?`cluster_type_${s}`:`cluster_avg_${s}`;return e.some((e=>e.name===n))||e.push({name:n,outStatistic:{onStatisticField:s,onStatisticValueExpression:t,statisticType:i}}),n}function ct(e,t,i,s){if("cluster_count"===t||e.some((e=>e.name===t)))return t;const n=function(e,t,i){switch(e){case"avg":case"avg_angle":return`cluster_avg_${t}`;case"mode":return`cluster_type_${t}`;case"norm":{const e=i,s="field",n=t.toLowerCase()+",norm:"+s+","+e.toLowerCase();return"cluster_avg_"+X(n)}}}(i,t,s);return e.some((e=>e.name===n))||("norm"===i?e.push({name:n,outStatistic:{onStatisticField:t,onStatisticNormalizationField:s,statisticType:i}}):e.push({name:n,outStatistic:{onStatisticField:t,statisticType:i}})),n}const ht={"simple-marker":1,"picture-marker":1,text:0,"simple-line":0,"simple-fill":0,"picture-fill":0,cim:1,"web-style":1};function ft(e){if(!("visualVariables"in e))return 0;if(!e.hasVisualVariables("size"))return 0;const t=e.getVisualVariablesForType("size");if(!t[0])return 0;const i=t[0];if("stops"===i.transformationType)return i.stops.map((e=>e.size)).reduce(vt,0);if("clamped-linear"===i.transformationType){let e=-1/0,t=-1/0;return e="number"==typeof i.maxSize?i.maxSize:i.maxSize.stops.map((e=>e.size)).reduce(vt,0),t="number"==typeof i.minSize?i.minSize:i.minSize.stops.map((e=>e.size)).reduce(vt,0),Math.max(e,t)}return"real-world-size"===i.transformationType?30:void 0}async function dt(e,t,i){if(!e||i&&"cluster"===i.type)return 0;if("heatmap"===e.type)return Math.round(3*e.blurRadius);if("dot-density"===e.type)return 0;if("dictionary"===e.type)return"esriGeometryPoint"===t||"esriGeometryMultipoint"===t?100:200;const s=e.getSymbols(),n=ft(e),r=[];for(const o of s)r.push(bt(o,n));const a=await Promise.all(r);return E(a.reduce(vt,0))}const pt=[0,0,0,0];function mt(e,t){return null==e?t:e}const gt={sdf:!0,code:99,metrics:re.metrics,rect:new oe(0,0,24,24),page:0,textureBinding:2};async function yt(e,t){if("simple-marker"===e.type){const i=Math.max(mt(e.size,12),t);return xt(e)+.707*i}if("picture-marker"===e.type){const i=Math.max(mt(e.height,12),t),s=mt(e.width,12)*(i/mt(e.height,12))/2,n=i/2;return xt(e)+Math.sqrt(s*s+n*n)}if("text"===e.type){const t=function(e){const t=e.text&&e.text.length;if(!t)return{glyphMosaicItems:[gt]};const i=[];for(let s=0;s<t;s++)i.push(l(o({},gt),{code:e.text.charCodeAt(s)}));return{glyphMosaicItems:i}}(e);Ze(pt,e.toJSON(),t);const i=Math.abs(pt[0]),s=Math.abs(pt[1]),n=pt[2],r=pt[3];return Math.max(i,s)+Math.max(n,r)}if("simple-line"===e.type){const i=e,s=Math.max(mt(i.width,.75),t)/2;return i.marker?Math.max(6*i.width,2*t):s}if("simple-fill"===e.type||"picture-fill"===e.type)return Math.max(function(e,t){return null==e.outline?t:mt(e.outline.width,t)}(e,0),t)/2;if("cim"===e.type){const t=ae.getEnvelope(e.data);return t?Math.sqrt(t.width*t.width+t.height*t.height):0}return"web-style"===e.type?yt(await e.fetchCIMSymbol(),t):0}async function bt(e,t){return function(e){return e.type in ht}(e)?Math.min(await yt(e,t),75):0}function xt(e){const t=mt(e.xoffset,0),i=mt(e.yoffset,0);return Math.sqrt(t*t+i*i)}function vt(e,t){return Math.max(e,t)}const wt=j.getLogger("esri.renderers.visualVariables.support.utils"),Mt=e=>{if(!("visualVariables"in e)||!e.visualVariables||!e.visualVariables.length)return e;const t=e.clone(),i=t.visualVariables.map((e=>Tt(e)?zt(e):e));return t.visualVariables=i,t};function St(e){return e.map((e=>Tt(e)?zt(e.clone()):e))}function Tt(e){return("size"===e.type||"color"===e.type||"opacity"===e.type)&&null!=e.stops}function zt(e){return e.stops=function(e,t){return t.length<=8?t:(wt.warn(`Found ${t.length} Visual Variable stops, but MapView only supports 8. Displayed stops will be simplified.`),t.length>16?function(e,t){const[i,...s]=t,n=s.pop(),r=s[0].value,a=s[s.length-1].value,o=(a-r)/6,l=[];for(let u=r;u<a;u+=o){let i=0;for(;u>=s[i].value;)i++;const n=s[i],r=t[i-1],a=u-r.value,o=n.value===r.value?1:a/(n.value-r.value);if("color"===e){const e=s[i],n=t[i-1],r=e.color.clone();r.r=_t(n.color.r,r.r,o),r.g=_t(n.color.g,r.g,o),r.b=_t(n.color.b,r.b,o),r.a=_t(n.color.a,r.a,o),l.push({value:u,color:r,label:e.label})}else if("size"===e){const e=s[i],n=t[i-1],r=G(e.size),a=_t(G(n.size),r,o);l.push({value:u,size:a,label:e.label})}else{const e=s[i],n=_t(t[i-1].opacity,e.opacity,o);l.push({value:u,opacity:n,label:e.label})}}return[i,...l,n]}(e,t):function(e){const[t,...i]=e,s=i.pop();for(;i.length>6;){let e=0,t=0;for(let s=1;s<i.length;s++){const n=i[s-1],r=i[s],a=Math.abs(r.value-n.value);a>t&&(t=a,e=s)}i.splice(e,1)}return[t,...i,s]}(t))}(e.type,e.stops),e}function _t(e,t,i){return(1-i)*e+i*t}const Et=new J({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryMultiPatch:"multipatch",mesh:"mesh"});function Ft(e){return Et.toJSON(e)}const Vt=j.getLogger("esri.views.2d.layers.features.schemaUtils"),It="ValidationError",Ct={esriGeometryPoint:["above-right","above-center","above-left","center-center","center-left","center-right","below-center","below-left","below-right"],esriGeometryPolygon:["always-horizontal"],esriGeometryPolyline:["center-along"],esriGeometryMultipoint:null};function Rt(e){return ie(e)}function Ot(e){switch(e.type){case"line-marker":var t;return{type:"line-marker",color:null==(t=e.color)?void 0:t.toJSON(),placement:e.placement,style:e.style};default:return Y(e.toJSON()).toJSON()}}function Lt(e,t,i){if(!e)return null;let s=0,n=!1,r=0;switch(K(t)&&(r=ft(t),"visualVariables"in t&&(s=function(e){if(!e)return Q.NONE;let t=0;for(const i of e)if("size"===i.type){const e=ne(i);t|=e,"outline"===i.target&&(t|=e<<4)}else"color"===i.type?t|=Q.COLOR:"opacity"===i.type?t|=Q.OPACITY:"rotation"===i.type&&(t|=Q.ROTATION);return t}(t.visualVariables||[]),n="dot-density"===t.type)),e.type){case"simple-fill":case"picture-fill":return function(e,t,i,s){const n=se(ee.FILL,t,!1,i),r=s?Rt(n):n,a=e.clone(),l=a.outline;a.outline=null;const u=[],c=o({materialKey:r,hash:a.hash()},Ot(a));if(u.push(c),l){const e=se(ee.LINE,t,!0,!1),i=o({materialKey:s?Rt(e):e,hash:l.hash()},Ot(l));u.push(i)}return{type:"composite-symbol",layers:u,hash:u.reduce(((e,t)=>t.hash+e),"")}}(e,s,n,i);case"simple-marker":case"picture-marker":return function(e,t,i,s){const n=se(ee.MARKER,t,!1,!1),r=s?Rt(n):n,a=Ot(e);return l(o({materialKey:r,hash:e.hash()},a),{angle:e.angle,maxVVSize:i})}(e,s,r,i);case"simple-line":return function(e,t,i){const s=se(ee.LINE,t,!1,!1),n=i?Rt(s):s,r=e.clone(),a=r.marker;r.marker=null;const l=[];if(l.push(o({materialKey:n,hash:r.hash()},Ot(r))),a){var u;const e=se(ee.MARKER,t,!1,!1),s=i?Rt(e):e;a.color=null!=(u=a.color)?u:r.color,l.push(o({materialKey:s,hash:a.hash(),lineWidth:r.width},Ot(a)))}return{type:"composite-symbol",layers:l,hash:l.reduce(((e,t)=>t.hash+e),"")}}(e,s,i);case"text":return function(e,t,i,s){const n=se(ee.TEXT,t,!1,!1),r=s?Rt(n):n,a=Ot(e);return l(o({materialKey:r,hash:e.hash()},a),{angle:e.angle,maxVVSize:i})}(e,s,r,i);case"label":return function(e,t,i){const s=se(ee.LABEL,t,!1,!1,e.labelPlacement);return l(o({materialKey:i?Rt(s):s,hash:e.hash()},e.toJSON()),{labelPlacement:e.labelPlacement})}(e,s,i);case"cim":return{type:"cim",rendererKey:s,data:e.data,maxVVSize:r};case"web-style":return l(o({},Ot(e)),{type:"web-style",hash:e.hash(),rendererKey:s,maxVVSize:r});default:throw new Error(`symbol not supported ${e.type}`)}}function Bt(e,t){const i=A(e);return i.some((e=>function(e,t){const i=e.labelPlacement,s=Ct[t];if(!e.symbol)return Vt.warn("No LabelClass symbol specified."),!0;if(!s)return Vt.error(new H("mapview-labeling:unsupported-geometry-type",`Unable to create labels for Feature Layer, ${t} is not supported`)),!0;if(!s.some((e=>e===i))){const n=s[0];i&&Vt.warn(`Found invalid label placement type ${i} for ${t}. Defaulting to ${n}`),e.labelPlacement=n}return!1}(e,t)))?[]:i}function Nt(e){return W("esri-2d-update-debug")&&console.debug("Created new schema",kt(e,!0)),kt(e)}function kt(e,t=!1){try{var i,s;const n=function(e,t=!1){const i=new Array;return i.push(function(e,t,i=!1){const s={indexCount:0,fields:{}},n="featureReduction"in e&&e.featureReduction,r=n?"aggregate":"feature";switch(e.renderer.type){case"heatmap":{const{blurRadius:t,fieldOffset:i,field:n}=e.renderer;return{type:"heatmap",aggregateFields:[],attributes:s,target:r,storage:null,mesh:{blurRadius:t,fieldOffset:i,field:Wt(s,{target:r,field:n,resultType:"numeric"}).field}}}default:{const t=[],a="aggregate"===r?st(t,e.renderer,n,null):e.renderer;!function(e,t){const i={mesh:!0,storage:!0};for(const s of t){const{name:t,outStatistic:n}=s,{statisticType:r,onStatisticField:a}=n;let o=null,l=null,u=null;const c="numeric",h="feature";"onStatisticValueExpression"in n?l=$t(e,{type:"expression",target:h,valueExpression:n.onStatisticValueExpression,resultType:c}).fieldIndex:"onStatisticNormalizationField"in n?(o=$t(e,{type:"field",target:h,field:a,resultType:c}).field,u=n.onStatisticNormalizationField):o=$t(e,{type:"field",target:h,field:a,resultType:c}).field,$t(e,{type:"statistic",target:"aggregate",name:t,context:i,inField:o,inNormalizationField:u,inFieldIndex:l,statisticType:r})}}(s,t);const o=Ht(s,r,a,i);let l=null;const u=function(e,t,i){switch(i.type){case"dot-density":return function(e,t,i){return i&&i.length?{type:"dot-density",mapping:i.map(((i,s)=>{const{field:n,fieldIndex:r}=Wt(e,{valueExpression:i.valueExpression,field:i.field,resultType:"numeric",target:t});return{binding:s,field:n,fieldIndex:r}})),target:t}:{type:"dot-density",mapping:[],target:t}}(e,t,i.attributes);case"simple":case"class-breaks":case"unique-value":return function(e,t,i){if(!i||!i.length)return{type:"visual-variable",mapping:[],target:t};const s={storage:!0},n="numeric";return{type:"visual-variable",mapping:St(i).map((i=>{var r;const a=te(i.type),{field:o,fieldIndex:l}=Wt(e,{target:t,valueExpression:i.valueExpression,field:i.field,context:s,resultType:n});switch(i.type){case"size":return"$view.scale"===i.valueExpression?null:{type:"size",binding:a,field:o,fieldIndex:l,normalizationField:Wt(e,{target:t,field:i.normalizationField,context:s,resultType:n}).field,valueRepresentation:null!=(r=i.valueRepresentation)?r:null};case"color":return{type:"color",binding:a,field:o,fieldIndex:l,normalizationField:Wt(e,{target:t,field:i.normalizationField,context:s,resultType:n}).field};case"opacity":return{type:"opacity",binding:a,field:o,fieldIndex:l,normalizationField:Wt(e,{target:t,field:i.normalizationField,context:s,resultType:n}).field};case"rotation":return{type:"rotation",binding:a,field:o,fieldIndex:l}}})).filter((e=>e)),target:t}}(e,t,i.visualVariables);case"heatmap":case"dictionary":return null}}(s,r,a),c=Ft(e.geometryType);let h=e.labelsVisible&&e.labelingInfo||[],f=[];if(n){if("selection"===n.type)throw new H(It,"Mapview does not support `selection` reduction type",n);if(n.symbol){const e=new q({symbol:n.symbol,visualVariables:"visualVariables"in a?a.visualVariables:null});l=Ht(s,r,e,i)}f=n&&n.labelsVisible&&n.labelingInfo||[]}h=Bt(h,c),f=Bt(f,c);let d=0;const p=[...h.map((e=>Dt(a,s,e,"feature",d++,i))),...f.map((e=>Dt(a,s,e,"aggregate",d++,i)))];return{type:"symbol",target:r,attributes:s,aggregateFields:t,storage:u,mesh:{matcher:o,labels:p,aggregateMatcher:l}}}}}(e,t)),i}(e,t),r={};return n.map((t=>function(e,t,i){switch(i.target){case"feature":return void jt(e,At(t),i);case"aggregate":{const s=t.featureReduction;if("selection"===s.type)throw new H(It,"Mapview does not support `selection` reduction type",s);return jt(e,At(t),i),void function(e,t,i){e.aggregate||(e.aggregate={name:"aggregate",input:"feature",filters:null,attributes:{},params:{clusterRadius:E(t.clusterRadius/2),clusterPixelBuffer:64*Math.ceil(E(t.clusterMaxSize)/64),fields:i.aggregateFields}}),Pt(e.aggregate,i.attributes.fields)}(e,s,i)}}}(r,e,t))),{source:{definitionExpression:e.definitionExpression,fields:e.fields.map((e=>e.toJSON())),gdbVersion:e.gdbVersion,historicMoment:null==(i=e.historicMoment)?void 0:i.getTime(),outFields:e.availableFields,pixelBuffer:e.pixelBuffer,spatialReference:e.spatialReference.toJSON(),timeExtent:null==(s=e.timeExtent)?void 0:s.toJSON()},attributes:{fields:{},indexCount:0},processors:n,targets:r}}catch(n){if(n.fieldName===It)return Vt.error(n),null;throw n}}function Pt(e,t){for(const i in t){const s=t[i];if(s.target!==e.name)continue;const n=e.attributes[i];n?(n.context.mesh=n.context.mesh||s.context.mesh,n.context.storage=n.context.storage||s.context.storage):e.attributes[i]=s}return e}function At(e){var t,i,s,n,r;return[null!=(t=null==(i=e.filter)?void 0:i.toJSON())?t:null,null!=(s=null==(n=e.effect)||null==(r=n.filter)?void 0:r.toJSON())?s:null]}function jt(e,t,i){return e.feature||(e.feature={name:"feature",input:"source",filters:t,attributes:{}}),Pt(e.feature,i.attributes.fields),e}function Wt(e,t){return t.field?$t(e,l(o({},t),{type:"field",field:t.field})):t.valueExpression?$t(e,l(o({},t),{type:"expression",valueExpression:t.valueExpression})):{field:null,fieldIndex:null}}function $t(e,t){switch(t.type){case"expression":{const i=t.valueExpression;if(!e.fields[i]){const s=e.indexCount++;e.fields[i]=l(o({},t),{name:i,fieldIndex:s})}return{fieldIndex:e.fields[i].fieldIndex}}case"label-expression":{const i=JSON.stringify(t.label);if(!e.fields[i]){const s=e.indexCount++;e.fields[i]=l(o({},t),{name:i,fieldIndex:s})}return{fieldIndex:e.fields[i].fieldIndex}}case"field":{const i=t.field;return"aggregate"===t.target&&e.fields[i]||(e.fields[i]=l(o({},t),{name:i})),{field:i}}case"statistic":return e.fields[t.name]=o({},t),{field:t.name}}}function Dt(e,t,i,s,n,r=!1){const a=$t(t,{type:"label-expression",target:s,context:{mesh:!0},resultType:"string",label:{labelExpression:i.labelExpression,labelExpressionInfo:i.labelExpressionInfo?{expression:i.labelExpressionInfo.expression}:null,symbol:!!i.symbol,where:i.where}}),{fieldIndex:u}=a;return l(o({},Lt(i,e,r)),{fieldIndex:u,target:s,index:n})}function Ht(e,t,i,s=!1){const n=U(e,{indexCount:0,fields:{}});switch(i.type){case"simple":case"dot-density":return function(e,t,i,s=!1){const n=t.getSymbols();return{type:"simple",symbol:Lt(n.length?n[0]:null,t,s),isDotDensity:i}}(0,i,"dot-density"===i.type,s);case"class-breaks":return function(e,t,i,s=!1){const n={mesh:!0,use:"renderer.field"},r=i.backgroundFillSymbol,{field:a,fieldIndex:o}=Wt(e,{target:t,field:i.field,valueExpression:i.valueExpression,resultType:"numeric",context:n}),l=i.normalizationType,u="log"===l?"esriNormalizeByLog":"percent-of-total"===l?"esriNormalizeByPercentOfTotal":"field"===l?"esriNormalizeByField":null,c=i.classBreakInfos.map((e=>({symbol:Lt(e.symbol,i,s),min:e.minValue,max:e.maxValue}))).sort(((e,t)=>e.min-t.min));return{type:"interval",attributes:e.fields,field:a,fieldIndex:o,backgroundFillSymbol:Lt(r,i,s),defaultSymbol:Lt(i.defaultSymbol,i,s),intervals:c,normalizationField:i.normalizationField,normalizationTotal:i.normalizationTotal,normalizationType:u,isMaxInclusive:i.isMaxInclusive}}(n,t,i,s);case"unique-value":return function(e,t,i,s=!1){const n=[],r=i.backgroundFillSymbol,a={target:t,context:{mesh:!0},resultType:"string"};if(i.field&&"string"!=typeof i.field)throw new H(It,"Expected renderer.field to be a string",i);const{field:u,fieldIndex:c}=Wt(e,l(o({},a),{field:i.field,valueExpression:i.valueExpression}));for(const o of i.uniqueValueInfos)n.push({value:""+o.value,symbol:Lt(o.symbol,i,s)});return{type:"map",attributes:e.fields,field:u,fieldIndex:c,field2:Wt(e,l(o({},a),{field:i.field2})).field,field3:Wt(e,l(o({},a),{field:i.field3})).field,fieldDelimiter:i.fieldDelimiter,backgroundFillSymbol:Lt(r,i),defaultSymbol:Lt(i.defaultSymbol,i),map:n}}(n,t,i,s);case"dictionary":return function(e,t,i=!1){return{type:"dictionary",renderer:t.toJSON()}}(0,i,s)}}export{Ne as A,ke as C,Ke as D,qe as G,Pe as H,Ue as J,Ye as K,Le as P,Lt as S,Be as T,Ae as W,Ht as a,Ve as b,me as c,ye as d,be as e,Ft as f,nt as g,at as h,st as i,Mt as j,Nt as k,ot as m,he as n,xe as o,ge as r,ve as s,dt as u,Oe as z};