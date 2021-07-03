var e=Object.defineProperty,t=Object.defineProperties,r=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,a=(t,r,o)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[r]=o,s=(e,t)=>{for(var r in t||(t={}))i.call(t,r)&&a(e,r,t[r]);if(o)for(var r of o(t))n.call(t,r)&&a(e,r,t[r]);return e},c=(e,o)=>t(e,r(o));import{n as l,cK as u,a4 as d,ac as f,hN as m,hO as p,hP as h,e_ as v,hQ as g,hR as x,hS as b,hT as y,eH as w,eM as T,eI as S,a7 as _,c as C,eC as M,hU as A,eJ as P,hV as O,a6 as I,a5 as F,t as R,eK as L,eD as B,hW as z,aj as D,hX as E,hY as N,hZ as U,eN as V,h_ as H,h$ as G,r as k,eL as $,i0 as j,b2 as q,i1 as W,b0 as X,i2 as Y,i3 as K,bc as Q,i4 as J,i5 as Z,w as ee,p as te,i6 as re,fl as oe,o as ie,I as ne,gK as ae,i7 as se,fd as ce,i8 as le,aY as ue,i9 as de,z as fe,A as me,bF as pe,eZ as he,h as ve,E as ge,ia as xe,U as be,ck as ye,cj as we,ib as Te,c_ as Se,ic as _e,eb as Ce,u as Me,bh as Ae,id as Pe,ie as Oe,d1 as Ie,ig as Fe,ih as Re}from"./vendor.abf366c9.js";import{a as Le,b as Be,t as ze,e as De,I as Ee,c as Ne}from"./vec3f32.3c11be63.js";import{p as Ue,x as Ve,u as He,a as Ge,A as ke,n as $e,r as je,s as qe,t as We,F as Xe,g as Ye,h as Ke,L as Qe,O as Je,E as Ze,I as et,w as tt,v as rt,e as ot,M as it}from"./InterleavedLayout.0f18228d.js";import{a as nt,q as at,w as st,h as ct,B as lt}from"./aaBoundingBox.ef55777a.js";import{a as ut,y as dt}from"./vec4.dcc5c3c2.js";import{e as ft,t as mt,u as pt,n as ht,s as vt}from"./renderState.cca58848.js";import{s as gt,a as xt,o as bt,l as yt,r as wt}from"./VertexArrayObject.edd2ea65.js";import{r as Tt}from"./mat4f32.a5cabe00.js";import{r as St,o as _t,n as Ct}from"./FramebufferObject.55526cd6.js";import{n as Mt,t as At}from"./requestImageUtils.16f18c4a.js";import{r as Pt}from"./Version.5394fe4b.js";function Ot(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function It(e){return[e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8],e[9],e[10],e[11],e[12],e[13],e[14],e[15]]}function Ft(e,t){return new Float64Array(e,t,16)}const Rt=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];Object.freeze({__proto__:null,create:Ot,clone:It,fromValues:function(e,t,r,o,i,n,a,s,c,l,u,d,f,m,p,h){return[e,t,r,o,i,n,a,s,c,l,u,d,f,m,p,h]},createView:Ft,IDENTITY:Rt});const Lt=l.getLogger("esri.views.3d.support.buffer.math");function Bt(e,t,r){if(e.count!==t.count)return void Lt.error("source and destination buffers need to have the same number of elements");const o=e.count,i=r[0],n=r[1],a=r[2],s=r[4],c=r[5],l=r[6],u=r[8],d=r[9],f=r[10],m=r[12],p=r[13],h=r[14],v=e.typedBuffer,g=e.typedBufferStride,x=t.typedBuffer,b=t.typedBufferStride;for(let y=0;y<o;y++){const e=y*g,t=y*b,r=x[t],o=x[t+1],w=x[t+2];v[e]=i*r+s*o+u*w+m,v[e+1]=n*r+c*o+d*w+p,v[e+2]=a*r+l*o+f*w+h}}function zt(e,t,r){if(e.count!==t.count)return void Lt.error("source and destination buffers need to have the same number of elements");const o=e.count,i=r[0],n=r[1],a=r[2],s=r[3],c=r[4],l=r[5],u=r[6],d=r[7],f=r[8],m=e.typedBuffer,p=e.typedBufferStride,h=t.typedBuffer,v=t.typedBufferStride;for(let g=0;g<o;g++){const e=g*p,t=g*v,r=h[t],o=h[t+1],x=h[t+2];m[e]=i*r+s*o+u*x,m[e+1]=n*r+c*o+d*x,m[e+2]=a*r+l*o+f*x}}function Dt(e,t,r){const o=Math.min(e.count,t.count),i=e.typedBuffer,n=e.typedBufferStride,a=t.typedBuffer,s=t.typedBufferStride;for(let c=0;c<o;c++){const e=c*n,t=c*s;i[e]=r*a[t],i[e+1]=r*a[t+1],i[e+2]=r*a[t+2]}}function Et(){return[0,0,0,0]}function Nt(e,t,r,o){return[e,t,r,o]}function Ut(e,t){return new Float64Array(e,t,4)}function Vt(){return[0,0,0,0]}function Ht(){return Nt(1,1,1,1)}function Gt(){return Nt(1,0,0,0)}function kt(){return Nt(0,1,0,0)}function $t(){return Nt(0,0,1,0)}function jt(){return Nt(0,0,0,1)}Object.freeze({__proto__:null,transformMat4:Bt,transformMat3:zt,scale:Dt,shiftRight:function(e,t,r){const o=Math.min(e.count,t.count),i=e.typedBuffer,n=e.typedBufferStride,a=t.typedBuffer,s=t.typedBufferStride;for(let c=0;c<o;c++){const e=c*n,t=c*s;i[e]=a[t]>>r,i[e+1]=a[t+1]>>r,i[e+2]=a[t+2]>>r}}});const qt=[0,0,0,0],Wt=Ht(),Xt=Gt(),Yt=kt(),Kt=$t(),Qt=jt();Object.freeze({__proto__:null,create:Et,clone:function(e){return[e[0],e[1],e[2],e[3]]},fromValues:Nt,fromArray:function(e){const t=[0,0,0,0],r=Math.min(4,e.length);for(let o=0;o<r;++o)t[o]=e[o];return t},createView:Ut,zeros:Vt,ones:Ht,unitX:Gt,unitY:kt,unitZ:$t,unitW:jt,ZEROS:qt,ONES:Wt,UNIT_X:Xt,UNIT_Y:Yt,UNIT_Z:Kt,UNIT_W:Qt});class Jt{constructor(e){this.message=e}toString(){return`AssertException: ${this.message}`}}function Zt(e,t){if(!e){t=t||"assert";const e=new Error(t);throw e.stack&&console.log(e.stack),new Jt(t)}}function er(e,t=0){let r=0;for(let o=0;o<4;o++)r+=e[t+o]*tr[o];return r}const tr=[1/256,1/65536,1/16777216,1/4294967296];er(new Uint8ClampedArray([255,255,255,255]));class rr{constructor(e,t,r,o){this.primitiveIndices=e,this._numIndexPerPrimitive=t,this.indices=r,this.position=o,this.center=d(),Zt(e.length>=1),Zt(r.length%this._numIndexPerPrimitive==0),Zt(r.length>=e.length*this._numIndexPerPrimitive),Zt(3===o.size||4===o.size);const{data:i,size:n}=o,a=e.length;let s=n*r[this._numIndexPerPrimitive*e[0]];or.clear(),or.push(s),this.bbMin=f(i[s],i[s+1],i[s+2]),this.bbMax=m(this.bbMin);for(let l=0;l<a;++l){const t=this._numIndexPerPrimitive*e[l];for(let e=0;e<this._numIndexPerPrimitive;++e){s=n*r[t+e],or.push(s);let o=i[s];this.bbMin[0]=Math.min(o,this.bbMin[0]),this.bbMax[0]=Math.max(o,this.bbMax[0]),o=i[s+1],this.bbMin[1]=Math.min(o,this.bbMin[1]),this.bbMax[1]=Math.max(o,this.bbMax[1]),o=i[s+2],this.bbMin[2]=Math.min(o,this.bbMin[2]),this.bbMax[2]=Math.max(o,this.bbMax[2])}}p(this.center,this.bbMin,this.bbMax,.5),this.radius=.5*Math.max(Math.max(this.bbMax[0]-this.bbMin[0],this.bbMax[1]-this.bbMin[1]),this.bbMax[2]-this.bbMin[2]);let c=this.radius*this.radius;for(let l=0;l<or.length;++l){s=or.getItemAt(l);const e=i[s]-this.center[0],t=i[s+1]-this.center[1],r=i[s+2]-this.center[2],o=e*e+t*t+r*r;if(o<=c)continue;const n=Math.sqrt(o),a=.5*(n-this.radius);this.radius=this.radius+a,c=this.radius*this.radius;const u=a/n;this.center[0]+=e*u,this.center[1]+=t*u,this.center[2]+=r*u}or.clear()}getCenter(){return this.center}getBSRadius(){return this.radius}getBBMin(){return this.bbMin}getBBMax(){return this.bbMax}getChildren(){if(this._children)return this._children;if(h(this.bbMin,this.bbMax)>1){const e=p(d(),this.bbMin,this.bbMax,.5),t=this.primitiveIndices.length,r=new Uint8Array(t),o=new Array(8);for(let c=0;c<8;++c)o[c]=0;const{data:i,size:n}=this.position;for(let c=0;c<t;++c){let t=0;const a=this._numIndexPerPrimitive*this.primitiveIndices[c];let s=n*this.indices[a],l=i[s],u=i[s+1],d=i[s+2];for(let e=1;e<this._numIndexPerPrimitive;++e){s=n*this.indices[a+e];const t=i[s],r=i[s+1],o=i[s+2];t<l&&(l=t),r<u&&(u=r),o<d&&(d=o)}l<e[0]&&(t|=1),u<e[1]&&(t|=2),d<e[2]&&(t|=4),r[c]=t,++o[t]}let a=0;for(let c=0;c<8;++c)o[c]>0&&++a;if(a<2)return;const s=new Array(8);for(let c=0;c<8;++c)s[c]=o[c]>0?new Uint32Array(o[c]):void 0;for(let c=0;c<8;++c)o[c]=0;for(let c=0;c<t;++c){const e=r[c];s[e][o[e]++]=this.primitiveIndices[c]}this._children=new Array(8);for(let c=0;c<8;++c)void 0!==s[c]&&(this._children[c]=new rr(s[c],this._numIndexPerPrimitive,this.indices,this.position))}return this._children}static prune(){or.prune()}}const or=new u({deallocator:null});class ir{constructor(){this.id=v()}unload(){}}class nr{constructor(e){this.allocator=e,this.items=[],this.itemsPtr=0,this.tickHandle=g.before((()=>this.reset())),this.grow()}destroy(){this.tickHandle&&(this.tickHandle.remove(),this.tickHandle=x(this.tickHandle)),this.items=x(this.items)}get(){return 0===this.itemsPtr&&g((()=>{})),this.itemsPtr===this.items.length&&this.grow(),this.items[this.itemsPtr++]}reset(){const e=Math.min(3*Math.max(8,this.itemsPtr),this.itemsPtr+3*ar);this.items.length=Math.min(e,this.items.length),this.itemsPtr=0}grow(){for(let e=0;e<Math.max(8,Math.min(this.items.length,ar));e++)this.items.push(this.allocator())}}const ar=1024;class sr{constructor(e,t,r){this.itemByteSize=e,this.itemCreate=t,this.buffers=[],this.items=[],this.itemsPerBuffer=0,this.itemsPtr=0,this.itemsPerBuffer=Math.ceil(r/this.itemByteSize),this.tickHandle=g.before((()=>this.reset()))}destroy(){this.tickHandle&&(this.tickHandle.remove(),this.tickHandle=x(this.tickHandle)),this.itemsPtr=0,this.items=x(this.items),this.buffers=x(this.buffers)}get(){0===this.itemsPtr&&g((()=>{}));const e=Math.floor(this.itemsPtr/this.itemsPerBuffer);for(;this.buffers.length<=e;){const e=new ArrayBuffer(this.itemsPerBuffer*this.itemByteSize);for(let t=0;t<this.itemsPerBuffer;++t)this.items.push(this.itemCreate(e,t*this.itemByteSize));this.buffers.push(e)}return this.items[this.itemsPtr++]}reset(){const e=2*(Math.floor(this.itemsPtr/this.itemsPerBuffer)+1);for(;this.buffers.length>e;)this.buffers.pop(),this.items.length=this.buffers.length*this.itemsPerBuffer;this.itemsPtr=0}static createVec2f64(e=cr){return new sr(16,b,e)}static createVec3f64(e=cr){return new sr(24,y,e)}static createVec4f64(e=cr){return new sr(32,Ut,e)}static createMat3f64(e=cr){return new sr(72,Le,e)}static createMat4f64(e=cr){return new sr(128,Ft,e)}static createQuatf64(e=cr){return new sr(32,Be,e)}get test(){return{size:this.buffers.length*this.itemsPerBuffer*this.itemByteSize}}}const cr=4096;sr.createVec2f64();const lr=sr.createVec3f64(),ur=sr.createVec4f64();sr.createMat3f64();const dr=sr.createMat4f64();function fr(e){return e?{origin:m(e.origin),vector:m(e.vector)}:{origin:d(),vector:d()}}function mr(e,t){const r=br.get();return r.origin=e,r.vector=t,r}function pr(e,t,r=fr()){return w(r.origin,e),w(r.vector,t),r}function hr(e,t){const r=T(lr.get(),t,e.origin),o=S(e.vector,r),i=S(e.vector,e.vector),n=C(o/i,0,1),a=T(lr.get(),_(lr.get(),e.vector,n),r);return S(a,a)}function vr(e,t,r,o,i){const{vector:n,origin:a}=e,s=T(lr.get(),t,a),c=S(n,s)/A(n);return _(i,n,C(c,r,o)),M(i,i,e.origin)}function gr(e,t,r,o){const i=1e-6,n=e.origin,a=M(lr.get(),n,e.vector),s=t.origin,c=M(lr.get(),s,t.vector),l=lr.get(),u=lr.get();if(l[0]=n[0]-s[0],l[1]=n[1]-s[1],l[2]=n[2]-s[2],u[0]=c[0]-s[0],u[1]=c[1]-s[1],u[2]=c[2]-s[2],Math.abs(u[0])<i&&Math.abs(u[1])<i&&Math.abs(u[2])<i)return!1;const d=lr.get();if(d[0]=a[0]-n[0],d[1]=a[1]-n[1],d[2]=a[2]-n[2],Math.abs(d[0])<i&&Math.abs(d[1])<i&&Math.abs(d[2])<i)return!1;const f=l[0]*u[0]+l[1]*u[1]+l[2]*u[2],m=u[0]*d[0]+u[1]*d[1]+u[2]*d[2],p=l[0]*d[0]+l[1]*d[1]+l[2]*d[2],v=u[0]*u[0]+u[1]*u[1]+u[2]*u[2],g=(d[0]*d[0]+d[1]*d[1]+d[2]*d[2])*v-m*m;if(Math.abs(g)<i)return!1;let x=(f*m-p*v)/g,b=(f+m*x)/v;r&&(x=C(x,0,1),b=C(b,0,1));const y=lr.get(),w=lr.get();return y[0]=n[0]+x*d[0],y[1]=n[1]+x*d[1],y[2]=n[2]+x*d[2],w[0]=s[0]+b*u[0],w[1]=s[1]+b*u[1],w[2]=s[2]+b*u[2],o.tA=x,o.tB=b,o.pA=y,o.pB=w,o.distance2=h(y,w),!0}sr.createQuatf64();const xr={tA:0,tB:0,pA:d(),pB:d(),distance2:0},br=new nr((()=>({origin:null,vector:null})));function yr(e){return e?{p0:m(e.p0),p1:m(e.p1),p2:m(e.p2)}:{p0:d(),p1:d(),p2:d()}}function wr(e,t,r,o=yr()){return w(o.p0,e),w(o.p1,t),w(o.p2,r),o}function Tr(e,t,r){const o=O(e,t),i=O(t,r),n=O(r,e),a=(o+i+n)/2,s=a*(a-o)*(a-i)*(a-n);return s<=0?0:Math.sqrt(s)}function Sr(e,t,r){return T(Mr,t,e),T(Ar,r,e),I(P(Mr,Mr,Ar))/2}Object.freeze({__proto__:null,create:fr,wrap:mr,copy:function(e,t=fr()){return pr(e.origin,e.vector,t)},fromValues:pr,fromPoints:function(e,t,r=fr()){return w(r.origin,e),T(r.vector,t,e),r},distance2:hr,distance:function(e,t){return Math.sqrt(hr(e,t))},projectPoint:function(e,t,r){return vr(e,t,0,1,r)},pointAt:function(e,t,r){return M(r,e.origin,_(r,e.vector,t))},projectPointClamp:vr,closestRayDistance2:function(e,t){if(gr(e,mr(t.origin,t.direction),!1,xr)){const{tA:t,pB:r,distance2:o}=xr;if(t>=0&&t<=1)return o;if(t<0)return h(e.origin,r);if(t>1)return h(M(lr.get(),e.origin,e.vector),r)}return null},closestLineSegmentPoint:function(e,t,r){return!!gr(e,t,!0,xr)&&(w(r,xr.pA),!0)},closestLineSegmentDistance2:function(e,t){return gr(e,t,!0,xr)?xr.distance2:null}});const _r=new nr(fr),Cr=new nr((()=>({p0:null,p1:null,p2:null}))),Mr=d(),Ar=d();Object.freeze({__proto__:null,create:yr,wrap:function(e,t,r){const o=Cr.get();return o.p0=e,o.p1=t,o.p2=r,o},copy:function(e,t=yr()){return wr(e.p0,e.p1,e.p2,t)},fromValues:wr,distance2:function(e,t){const r=e.p0,o=e.p1,i=e.p2,n=T(lr.get(),o,r),a=T(lr.get(),i,o),s=T(lr.get(),r,i),c=T(lr.get(),t,r),l=T(lr.get(),t,o),u=T(lr.get(),t,i),d=P(n,n,s),f=S(P(lr.get(),n,d),c),m=S(P(lr.get(),a,d),l),p=S(P(lr.get(),s,d),u);if(f>0&&m>0&&p>0){const e=S(d,c);return e*e/S(d,d)}const h=hr(pr(r,n,_r.get()),t),v=hr(pr(o,a,_r.get()),t),g=hr(pr(i,s,_r.get()),t);return Math.min(h,v,g)},intersectRay:function(e,t,r){const o=1e-5,{direction:i,origin:n}=t,{p0:a,p1:s,p2:c}=e,l=s[0]-a[0],u=s[1]-a[1],d=s[2]-a[2],f=c[0]-a[0],m=c[1]-a[1],p=c[2]-a[2],h=i[1]*p-m*i[2],v=i[2]*f-p*i[0],g=i[0]*m-f*i[1],x=l*h+u*v+d*g;if(x>-o&&x<o)return!1;const b=1/x,y=n[0]-a[0],w=n[1]-a[1],T=n[2]-a[2],S=b*(y*h+w*v+T*g);if(S<0||S>1)return!1;const C=w*d-u*T,A=T*l-d*y,P=y*u-l*w,O=b*(i[0]*C+i[1]*A+i[2]*P);return!(O<0||S+O>1)&&(r&&(_(r,i,b*(f*C+m*A+p*P)),M(r,n,r)),!0)},areaPoints2d:Tr,area2d:function(e){return Tr(e.p0,e.p1,e.p2)},areaPoints3d:Sr});let Pr=(()=>{const e=new Uint32Array(131072);for(let t=0;t<e.length;++t)e[t]=t;return e})();const Or=new Uint16Array([0]),Ir=(()=>{const e=new Uint16Array(65536);for(let t=0;t<e.length;++t)e[t]=t;return e})();function Fr(e){if(1===e)return Or;if(e<Ir.length)return new Uint16Array(Ir.buffer,0,e);if(e>Pr.length){const t=Math.max(2*Pr.length,e);Pr=new Uint32Array(t);for(let e=0;e<Pr.length;e++)Pr[e]=e}return new Uint32Array(Pr.buffer,0,e)}const Rr=d(),Lr=d(),Br=d(),zr=d();class Dr extends ir{constructor(e,t=[],r=0,o=-1){super(),this._primitiveType=r,this.edgeIndicesLength=o,this.type=2,this._vertexAttributes=new Map,this._indices=new Map,this._boundingInfo=null;for(const[i,n]of e)n&&this._vertexAttributes.set(i,s({},n));if(null==t||0===t.length){const e=function(e){const t=e.values().next().value;return null==t?0:t.data.length/t.size}(this._vertexAttributes),t=Fr(e);this.edgeIndicesLength=this.edgeIndicesLength<0?e:this.edgeIndicesLength;for(const r of this._vertexAttributes.keys())this._indices.set(r,t)}else for(const[i,n]of t)n&&(this._indices.set(i,Er(n)),"position"===i&&(this.edgeIndicesLength=this.edgeIndicesLength<0?this._indices.get(i).length:this.edgeIndicesLength))}get vertexAttributes(){return this._vertexAttributes}getMutableAttribute(e){const t=this._vertexAttributes.get(e);return t&&!t.exclusive&&(t.data=Array.from(t.data),t.exclusive=!0),t}get indices(){return this._indices}get indexCount(){const e=this._indices.values().next().value;return e?e.length:0}get primitiveType(){return this._primitiveType}get faceCount(){return this.indexCount/3}get boundingInfo(){return R(this._boundingInfo)&&(this._boundingInfo=this._calculateBoundingInfo()),this._boundingInfo}computeAttachmentOrigin(e){return 0===this.primitiveType?this.computeAttachmentOriginTriangles(e):this.computeAttachmentOriginPoints(e)}computeAttachmentOriginTriangles(e){const t=this.indices.get("position");return function(e,t,r){if(!e)return!1;const{size:o,data:i}=e;F(r,0,0,0),F(zr,0,0,0);let n=0,a=0;for(let s=0;s<t.length-2;s+=3){const e=t[s+0]*o,c=t[s+1]*o,l=t[s+2]*o;F(Rr,i[e+0],i[e+1],i[e+2]),F(Lr,i[c+0],i[c+1],i[c+2]),F(Br,i[l+0],i[l+1],i[l+2]);const u=Sr(Rr,Lr,Br);u?(M(Rr,Rr,Lr),M(Rr,Rr,Br),_(Rr,Rr,1/3*u),M(r,r,Rr),n+=u):(M(zr,zr,Rr),M(zr,zr,Lr),M(zr,zr,Br),a+=3)}return!(0===a&&0===n||(0!==n?(_(r,r,1/n),0):0===a||(_(r,zr,1/a),0)))}(this.vertexAttributes.get("position"),t,e)}computeAttachmentOriginPoints(e){const t=this.indices.get("position");return function(e,t,r){if(!e||!t)return!1;const{size:o,data:i}=e;F(r,0,0,0);let n=-1,a=0;for(let s=0;s<t.length;s++){const e=t[s]*o;n!==e&&(r[0]+=i[e+0],r[1]+=i[e+1],r[2]+=i[e+2],a++),n=e}return a>1&&_(r,r,1/a),a>0}(this.vertexAttributes.get("position"),t,e)}invalidateBoundingInfo(){this._boundingInfo=null}_calculateBoundingInfo(){const e=this.indices.get("position");if(0===e.length)return null;const t=0===this.primitiveType?3:1;Zt(e.length%t==0,"Indexing error: "+e.length+" not divisible by "+t);const r=Fr(e.length/t),o=this.vertexAttributes.get("position");return new rr(r,t,e,o)}}function Er(e){if(e.BYTES_PER_ELEMENT===Uint16Array.BYTES_PER_ELEMENT)return e;for(const t of e)if(t>=65536)return e;return new Uint16Array(e)}function Nr(e,t){return S(e,t)/I(e)}function Ur(e,t){const r=S(e,t)/(I(e)*I(t));return-L(r)}const Vr=d(),Hr=d();function Gr(e){return e?{origin:m(e.origin),direction:m(e.direction)}:{origin:d(),direction:d()}}function kr(e,t=Gr()){return $r(e.origin,e.direction,t)}function $r(e,t,r=Gr()){return w(r.origin,e),w(r.direction,t),r}function jr(e,t,r=Gr()){const o=z(D(lr.get(),t));if(o[2]=0,!e.unprojectFromRenderScreen(o,r.origin))return null;const i=z(D(lr.get(),t));i[2]=1;const n=e.unprojectFromRenderScreen(i,lr.get());return R(n)?null:(T(r.direction,n,r.origin),r)}function qr(e,t,r=Gr()){return Wr(e,e.screenToRender(t,z(lr.get())),r)}function Wr(e,t,r=Gr()){w(r.origin,e.eye);const o=F(lr.get(),t[0],t[1],1),i=e.unprojectFromRenderScreen(o,lr.get());return R(i)?null:(T(r.direction,i,r.origin),r)}function Xr(e,t){const r=P(lr.get(),B(lr.get(),e.direction),T(lr.get(),t,e.origin));return S(r,r)}function Yr(e,t,r){const o=S(e.direction,T(r,t,e.origin));return M(r,e.origin,_(r,e.direction,o)),r}function Kr(){return{origin:null,direction:null}}Object.freeze({__proto__:null,projectPoint:function(e,t,r){const o=S(e,t)/S(e,e);return _(r,e,o)},projectPointSignedLength:Nr,angle:Ur,angleAroundAxis:function(e,t,r){B(Vr,e),B(Hr,t);const o=S(Vr,Hr),i=L(o),n=P(Vr,Vr,Hr);return S(n,r)<0?2*Math.PI-i:i}});const Qr=new nr(Kr);Object.freeze({__proto__:null,create:Gr,wrap:function(e,t){const r=Qr.get();return r.origin=e,r.direction=t,r},copy:kr,fromPoints:function(e,t,r=Gr()){return w(r.origin,e),T(r.direction,t,e),r},fromValues:$r,fromScreen:function(e,t,r=Gr()){return jr(e,e.screenToRender(t,z(lr.get())),r)},fromRender:jr,fromScreenAtEye:qr,fromRenderAtEye:Wr,distance2:Xr,distance:function(e,t){return Math.sqrt(Xr(e,t))},closestPoint:Yr,createWrapper:Kr});const Jr=l.getLogger("esri.views.3d.support.geometryUtils.sphere");function Zr(){return[0,0,0,0]}function eo(e,t=[0,0,0,0]){return ut(t,e)}function to(e){return Array.isArray(e)?e[3]:e}function ro(e){return Array.isArray(e)?e:fo}function oo(e,t,r){if(R(t))return!1;const o=T(lr.get(),t.origin,ro(e)),i=S(t.direction,t.direction),n=2*S(t.direction,o),a=n*n-4*i*(S(o,o)-e[3]*e[3]);if(a<0)return!1;const s=Math.sqrt(a);let c=(-n-s)/(2*i);const l=(-n+s)/(2*i);return(c<0||l<c&&l>0)&&(c=l),!(c<0||(r&&M(r,t.origin,_(lr.get(),t.direction,c)),0))}function io(e,t,r){const o=lr.get(),i=dr.get();P(o,t.origin,t.direction);const n=to(e);P(r,o,t.origin),_(r,r,1/I(r)*n);const a=ao(e,t.origin),s=Ur(t.origin,r);return E(i),N(i,i,s+a,o),U(r,r,i),r}function no(e,t,r){const o=T(lr.get(),t,ro(e)),i=_(lr.get(),o,e[3]/I(o));return M(r,i,ro(e))}function ao(e,t){const r=T(lr.get(),t,ro(e)),o=I(r),i=to(e),n=i+Math.abs(i-o);return L(i/n)}const so=d();function co(e,t,r,o){const i=T(so,t,ro(e));switch(r){case 0:{const e=H(i,so)[2];return F(o,-Math.sin(e),Math.cos(e),0)}case 1:{const e=H(i,so),t=e[1],r=e[2],n=Math.sin(t);return F(o,-n*Math.cos(r),-n*Math.sin(r),Math.cos(t))}case 2:return B(o,i);default:return}}function lo(e,t){const r=T(mo,t,ro(e));return I(r)-e[3]}const uo=Gr(),fo=d(),mo=d();function po(e=Go){return[e[0],e[1],e[2],e[3]]}function ho(e,t,r,o){return go(e,t,r,o,ur.get())}function vo(e,t=po()){return go(e[0],e[1],e[2],e[3],t)}function go(e,t,r,o,i=po()){return i[0]=e,i[1]=t,i[2]=r,i[3]=o,i}function xo(e,t,r=po()){w(r,t);const o=S(t,t);return Math.abs(o-1)>1e-5&&o>1e-12&&_(r,r,1/Math.sqrt(o)),Ao(r,e,r),r}function bo(e,t,r,o=po()){return Po(T(lr.get(),e,t),T(lr.get(),r,t),e,o)}function yo(e,t,r,o,i){if(e.count<3)return!1;e.getVec(r,To);let n=o,a=!1;for(;n<e.count-1&&!a;)e.getVec(n,So),n++,a=!G(To,So);if(!a)return!1;for(n=Math.max(n,i),a=!1;n<e.count&&!a;)e.getVec(n,_o),n++,T(Co,To,So),B(Co,Co),T(Mo,So,_o),B(Mo,Mo),a=!G(To,_o)&&!G(So,_o)&&Math.abs(S(Co,Mo))<wo;return a?(bo(To,So,_o,t),!0):(0!==r||1!==o||2!==i)&&yo(e,t,0,1,2)}Object.freeze(fo),Object.freeze({__proto__:null,create:Zr,copy:eo,fromCenterAndRadius:function(e,t){return Nt(e[0],e[1],e[2],t)},wrap:function(e){return e},clear:function(e){e[0]=e[1]=e[2]=e[3]=0},fromRadius:function(e){return e},getRadius:to,getCenter:ro,fromValues:function(e,t,r,o){return Nt(e,t,r,o)},elevate:function(e,t,r){return e!==r&&w(r,e),r[3]=e[3]+t,r},setExtent:function(e,t,r){return Jr.error("sphere.setExtent is not yet supported"),e===r?r:eo(e,r)},intersectRay:oo,intersectScreen:function(e,t,r,o){return oo(e,qr(t,r,uo),o)},intersectsRay:function(e,t){return oo(e,t,null)},intersectRayClosestSilhouette:function(e,t,r){if(oo(e,t,r))return r;const o=io(e,t,lr.get());return M(r,t.origin,_(lr.get(),t.direction,V(t.origin,o)/I(t.direction))),r},closestPointOnSilhouette:io,closestPoint:function(e,t,r){return oo(e,t,r)?r:(Yr(t,ro(e),r),no(e,r,r))},projectPoint:no,distanceToSilhouette:function(e,t){const r=T(lr.get(),t,ro(e)),o=A(r),i=e[3]*e[3];return Math.sqrt(Math.abs(o-i))},angleToSilhouette:ao,axisAt:co,altitudeAt:lo,setAltitudeAt:function(e,t,r,o){const i=lo(e,t),n=co(e,t,2,mo),a=_(mo,n,r-i);return M(o,t,a),o}});const wo=.99619469809,To=d(),So=d(),_o=d(),Co=d(),Mo=d();function Ao(e,t,r){return e!==r&&vo(e,r),r[3]=-S(r,t),r}function Po(e,t,r,o=po()){return xo(r,P(lr.get(),t,e),o)}function Oo(e,t,r){return!!k(t)&&Vo(e,t.origin,t.direction,!0,!1,r)}function Io(e,t,r){return Vo(e,t.origin,t.vector,!1,!1,r)}function Fo(e,t,r){return Vo(e,t.origin,t.vector,!1,!0,r)}function Ro(e,t){return Uo(e,ro(t))-t[3]>=0}function Lo(e,t){return Uo(e,t)>=0}function Bo(e,t){const r=t[0],o=t[1],i=t[2],n=t[3],a=t[4],s=t[5];return e[0]*(e[0]>0?r:n)+e[1]*(e[1]>0?o:a)+e[2]*(e[2]>0?i:s)+e[3]>=0}function zo(e,t){const r=S(e,t.ray.direction),o=-Uo(e,t.ray.origin);if(o<0&&r>=0)return!1;if(r>-1e-6&&r<1e-6)return o>0;if((o<0||r<0)&&!(o<0&&r<0))return!0;const i=o/r;return r>0?i<t.c1&&(t.c1=i):i>t.c0&&(t.c0=i),t.c0<=t.c1}function Do(e,t){const r=S(e,t.ray.direction),o=-Uo(e,t.ray.origin);if(r>-1e-6&&r<1e-6)return o>0;const i=o/r;return r>0?i<t.c1&&(t.c1=i):i>t.c0&&(t.c0=i),t.c0<=t.c1}function Eo(e,t,r){const o=_(lr.get(),e,-e[3]),i=No(e,T(lr.get(),t,o),lr.get());return M(r,i,o),r}function No(e,t,r){const o=_(lr.get(),e,S(e,t));return T(r,t,o),r}function Uo(e,t){return S(e,t)+e[3]}function Vo(e,t,r,o,i,n){const a=S(e,r);if(0===a)return!1;let s=-(S(e,t)+e[3])/a;return i&&(s=o?Math.max(0,s):C(s,0,1)),!(s<0||!o&&s>1||(M(n,t,_(n,r,s)),0))}function Ho(e){return e}const Go=[0,0,1,0];Object.freeze({__proto__:null,create:po,wrap:ho,copy:vo,fromValues:go,fromNormalAndOffset:function(e,t,r=po()){return w(r,e),r[3]=t,r},fromPositionAndNormal:xo,fromPoints:bo,fromManyPoints:function(e,t){return yo(e,t,0,1,2)},fromManyPointsSampleAt:yo,setOffsetFromPoint:Ao,negate:function(e,t){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t[3]=-e[3],t},fromVectorsAndPoint:Po,intersectRay:Oo,intersectLineSegment:Io,intersectLineSegmentClamp:Fo,isSphereFullyInside:Ro,isSphereFullyOutside:function(e,t){return Uo(e,ro(t))+t[3]<0},isPointInside:Lo,isPointOutside:function(e,t){return Uo(e,t)<0},isAABBFullyInside:Bo,clip:zo,clipInfinite:Do,projectPoint:Eo,projectVector:No,distance:function(e,t){return Math.abs(Uo(e,t))},signedDistance:Uo,normal:Ho,UP:Go});const ko=l.getLogger("esri.views.3d.support.geometryUtils.boundedPlane");function $o(e=ci){return{plane:po(e.plane),origin:m(e.origin),basis1:m(e.basis1),basis2:m(e.basis2)}}function jo(e,t=$o()){return qo(e.origin,e.basis1,e.basis2,t)}function qo(e,t,r,o=$o()){return w(o.origin,e),w(o.basis1,t),w(o.basis2,r),Wo(o),function(e,t){Math.abs(S(e.basis1,e.basis2)/(I(e.basis1)*I(e.basis2)))>1e-6&&ko.warn(t,"Provided basis vectors are not perpendicular"),Math.abs(S(e.basis1,oi(e)))>1e-6&&ko.warn(t,"Basis vectors and plane normal are not perpendicular"),Math.abs(-S(oi(e),e.origin)-e.plane[3])>1e-6&&ko.warn(t,"Plane offset is not consistent with plane origin")}(o,"fromValues()"),o}function Wo(e){Po(e.basis2,e.basis1,e.origin,e.plane)}function Xo(e,t,r){e!==r&&jo(e,r);const o=_(lr.get(),oi(e),t);return M(r.origin,r.origin,o),r.plane[3]-=t,r}function Yo(e,t=$o()){const r=(e[2]-e[0])/2,o=(e[3]-e[1])/2;return F(t.origin,e[0]+r,e[1]+o,0),F(t.basis1,r,0,0),F(t.basis2,0,o,0),go(0,0,1,0,t.plane),t}function Ko(e,t,r){return!!Oo(e.plane,t,r)&&ii(e,r)}function Qo(e,t,r){const o=li.get();si(e,t,o,li.get());let i=Number.POSITIVE_INFINITY;for(const n of mi){const a=ai(e,n,ui.get()),s=lr.get();if(Io(o,a,s)){const e=$(lr.get(),t.origin,s),o=Math.abs(L(S(t.direction,e)));o<i&&(i=o,w(r,s))}}return i===Number.POSITIVE_INFINITY?Jo(e,t,r):r}function Jo(e,t,r){if(Ko(e,t,r))return r;const o=li.get(),i=li.get();si(e,t,o,i);let n=Number.POSITIVE_INFINITY;for(const a of mi){const s=ai(e,a,ui.get()),c=lr.get();if(Fo(o,s,c)){const e=Xr(t,c);if(!Lo(i,c))continue;e<n&&(n=e,w(r,c))}}return ti(e,t.origin)<n&&Zo(e,t.origin,r),r}function Zo(e,t,r){const o=Eo(e.plane,t,lr.get()),i=vr(ni(e,e.basis1),o,-1,1,lr.get()),n=vr(ni(e,e.basis2),o,-1,1,lr.get());return T(r,M(lr.get(),i,n),e.origin),r}function ei(e,t,r){const{origin:o,basis1:i,basis2:n}=e,a=T(lr.get(),t,o),s=Nr(i,a),c=Nr(n,a),l=Nr(oi(e),a);return F(r,s,c,l)}function ti(e,t){const r=ei(e,t,lr.get()),{basis1:o,basis2:i}=e,n=I(o),a=I(i),s=Math.max(Math.abs(r[0])-n,0),c=Math.max(Math.abs(r[1])-a,0),l=r[2];return s*s+c*c+l*l}function ri(e,t){const r=-e.plane[3];return Nr(oi(e),t)-r}function oi(e){return e.plane}function ii(e,t){const r=T(lr.get(),t,e.origin),o=A(e.basis1),i=A(e.basis2),n=S(e.basis1,r),a=S(e.basis2,r);return-n-o<0&&n-o<0&&-a-i<0&&a-i<0}function ni(e,t){const r=ui.get();return w(r.origin,e.origin),w(r.vector,t),r}function ai(e,t,r){const{basis1:o,basis2:i,origin:n}=e,a=_(lr.get(),o,t.origin[0]),s=_(lr.get(),i,t.origin[1]);M(r.origin,a,s),M(r.origin,r.origin,n);const c=_(lr.get(),o,t.direction[0]),l=_(lr.get(),i,t.direction[1]);return _(r.vector,M(c,c,l),2),r}function si(e,t,r,o){const i=oi(e);Po(i,t.direction,t.origin,r),Po(r,i,t.origin,o)}const ci={plane:po(),origin:f(0,0,0),basis1:f(1,0,0),basis2:f(0,1,0)},li=new nr(po),ui=new nr(fr),di=d(),fi=new nr((()=>({origin:null,basis1:null,basis2:null,plane:null}))),mi=[{origin:[-1,-1],direction:[1,0]},{origin:[1,-1],direction:[0,1]},{origin:[1,1],direction:[-1,0]},{origin:[-1,1],direction:[0,-1]}],pi=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],hi=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];function vi(e=xi){return[e[0],e[1],e[2],e[3]]}function gi(e,t,r,o,i=vi()){return i[0]=e,i[1]=t,i[2]=r,i[3]=o,i}Object.freeze({__proto__:null,BoundedPlaneClass:class{constructor(){this.plane=po(),this.origin=d(),this.basis1=d(),this.basis2=d()}},create:$o,wrap:function(e,t,r){const o=fi.get();return o.origin=e,o.basis1=t,o.basis2=r,o.plane=ho(0,0,0,0),Wo(o),o},copy:jo,copyWithoutVerify:function(e,t){w(t.origin,e.origin),w(t.basis1,e.basis1),w(t.basis2,e.basis2),vo(e.plane,t.plane)},fromValues:qo,updateUnboundedPlane:Wo,elevate:Xo,setExtent:function(e,t,r){return Yo(t,r),Xo(r,ri(e,e.origin),r),r},fromAABoundingRect:Yo,intersectRay:Ko,intersectRayClosestSilhouette:function(e,t,r){if(Ko(e,t,r))return r;const o=Qo(e,t,lr.get());return M(r,t.origin,_(lr.get(),t.direction,V(t.origin,o)/I(t.direction))),r},closestPointOnSilhouette:Qo,closestPoint:Jo,projectPoint:Zo,projectPointLocal:ei,distance2:ti,distance:function(e,t){return Math.sqrt(ti(e,t))},distanceToSilhouette:function(e,t){let r=Number.NEGATIVE_INFINITY;for(const o of mi){const i=hr(ai(e,o,ui.get()),t);i>r&&(r=i)}return Math.sqrt(r)},extrusionContainsPoint:function(e,t){return Lo(e.plane,t)&&ii(e,t)},axisAt:function(e,t,r,o){return function(e,t,r){switch(t){case 0:w(r,e.basis1),B(r,r);break;case 1:w(r,e.basis2),B(r,r);break;case 2:w(r,oi(e))}return r}(e,r,o)},altitudeAt:ri,setAltitudeAt:function(e,t,r,o){const i=ri(e,t),n=_(di,oi(e),r-i);return M(o,t,n),o},equals:function(e,t){return G(e.basis1,t.basis1)&&G(e.basis2,t.basis2)&&G(e.origin,t.origin)},transform:function(e,t,r){return e!==r&&jo(e,r),j(pi,t),q(pi,pi),U(r.basis1,e.basis1,pi),U(r.basis2,e.basis2,pi),U(r.plane,e.plane,pi),U(r.origin,e.origin,t),Ao(r.plane,r.origin,r.plane),r},rotate:function(e,t,r,o){return e!==o&&jo(e,o),N(hi,E(hi),t,r),U(o.basis1,e.basis1,hi),U(o.basis2,e.basis2,hi),Wo(o),o},normal:oi,UP:ci});const xi=[0,0,1,0];function bi(e){return e?{ray:Gr(e.ray),c0:e.c0,c1:e.c1}:{ray:Gr(),c0:0,c1:Number.MAX_VALUE}}function yi(e,t,r,o=bi()){return kr(e,o.ray),o.c0=t,o.c1=r,o}function wi(e,t=bi()){return kr(e,t.ray),t.c0=0,t.c1=Number.MAX_VALUE,t}function Ti(e,t,r=bi()){const o=I(e.vector);return $r(e.origin,t,r.ray),r.c0=0,r.c1=o,r}function Si(e,t,r){return M(r,e.ray.origin,_(r,e.ray.direction,t))}Object.freeze({__proto__:null,create:vi,wrap:function(e,t,r,o){return gi(e,t,r,o,ur.get())},wrapAxisAngle:function(e,t){return gi(e[0],e[1],e[2],t,ur.get())},copy:function(e,t=vi()){return gi(e[0],e[1],e[2],e[3],t)},fromValues:gi,fromAxisAndAngle:function(e,t,r=vi()){return w(r,e),r[3]=t,r},fromPoints:function(e,t,r=vi()){return P(r,e,t),B(r,r),r[3]=Ur(e,t),r},axis:function(e){return e},UP:xi});const _i=new nr((()=>({c0:0,c1:0,ray:null})));function Ci(e){return e?[po(e[0]),po(e[1]),po(e[2]),po(e[3]),po(e[4]),po(e[5])]:[po(),po(),po(),po(),po(),po()]}function Mi(){return[d(),d(),d(),d(),d(),d(),d(),d()]}function Ai(e,t){bo(t[4],t[0],t[3],e[0]),bo(t[1],t[5],t[6],e[1]),bo(t[4],t[5],t[1],e[2]),bo(t[3],t[2],t[6],e[3]),bo(t[0],t[1],t[2],e[4]),bo(t[5],t[4],t[7],e[5])}function Pi(e,t){for(let r=0;r<6;r++)if(!zo(e[r],t))return!1;return!0}Object.freeze({__proto__:null,create:bi,wrap:function(e,t,r){const o=_i.get();return o.ray=e,o.c0=t,o.c1=r,o},copy:function(e,t=bi()){return yi(e.ray,e.c0,e.c1,t)},fromValues:yi,fromRay:wi,fromLineSegment:function(e,t=bi()){return Ti(e,B(lr.get(),e.vector),t)},fromLineSegmentAndDirection:Ti,getStart:function(e,t){return Si(e,e.c0,t)},getEnd:function(e,t){return Si(e,e.c1,t)},getAt:Si});const Oi=[Nt(-1,-1,-1,1),Nt(1,-1,-1,1),Nt(1,1,-1,1),Nt(-1,1,-1,1),Nt(-1,-1,1,1),Nt(1,-1,1,1),Nt(1,1,1,1),Nt(-1,1,1,1)],Ii=new nr(bi),Fi=Mi();Object.freeze({__proto__:null,create:Ci,createPoints:Mi,copy:function(e,t=Ci()){for(let r=0;r<6;r++)vo(e[r],t[r])},fromMatrix:function(e,t,r,o=Fi){const i=W(dr.get(),t,e);j(i,i);for(let n=0;n<8;++n){const e=dt(ur.get(),Oi[n],i);F(o[n],e[0]/e[3],e[1]/e[3],e[2]/e[3])}Ai(r,o)},computePlanes:Ai,intersectsSphere:function(e,t){for(let r=0;r<6;r++)if(Ro(e[r],t))return!1;return!0},intersectsRay:function(e,t){return Pi(e,wi(t,Ii.get()))},intersectClipRay:function(e,t){for(let r=0;r<6;r++){if(!Do(e[r],t))return!1}return!0},intersectsLineSegment:function(e,t,r){return Pi(e,Ti(t,r,Ii.get()))},intersectsPoint:function(e,t){for(let r=0;r<6;r++)if(Uo(e[r],t)>0)return!1;return!0},intersectsAABB:function(e,t){for(let r=0;r<6;r++)if(Bo(e[r],t))return!1;return!0},planePointIndices:{bottom:[5,1,0,4],near:[0,1,2,3],far:[5,4,7,6],right:[1,5,6,2],left:[4,0,3,7],top:[7,3,2,6]}});class Ri{constructor(){this._disposed=!1}get disposed(){return this._disposed}get shaderTransformation(){return this._shaderTransformation}acquire(e,t,r,o,i,n){this.id=v(),this.geometry=e,this.material=t,this.transformation=r,this.instanceParameters=o,this.origin=i,this._shaderTransformation=n,this._disposed=!1}release(){this._disposed=!1}dispose(){this._disposed=!0}getStaticTransformation(){return this.transformation}getShaderTransformation(){return k(this._shaderTransformation)?this._shaderTransformation(this.transformation):this.transformation}computeAttachmentOrigin(e){return!!(this.material.computeAttachmentOrigin?this.material.computeAttachmentOrigin(this.geometry,e):this.geometry.computeAttachmentOrigin(e))&&(U(e,e,this.getStaticTransformation()),!0)}}function Li(e,t,r){for(let o=0;o<r;++o)t[2*o]=e[o],t[2*o+1]=e[o]-t[2*o]}Ri.pool=new X(Ri);const Bi=new Float64Array(1),zi=new Float32Array(2);const Di=new class{constructor(e=0){this.offset=e,this.sphere=[0,0,0,0],this.tmpVertex=d()}applyToVertex(e,t,r){const o=this.objectTransform.transform;let i=o[0]*e+o[4]*t+o[8]*r+o[12],n=o[1]*e+o[5]*t+o[9]*r+o[13],a=o[2]*e+o[6]*t+o[10]*r+o[14];const s=this.offset/Math.sqrt(i*i+n*n+a*a);i+=i*s,n+=n*s,a+=a*s;const c=this.objectTransform.inverse;return this.tmpVertex[0]=c[0]*i+c[4]*n+c[8]*a+c[12],this.tmpVertex[1]=c[1]*i+c[5]*n+c[9]*a+c[13],this.tmpVertex[2]=c[2]*i+c[6]*n+c[10]*a+c[14],this.tmpVertex}applyToMinMax(e,t){const r=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*r,e[1]+=e[1]*r,e[2]+=e[2]*r;const o=this.offset/Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);t[0]+=t[0]*o,t[1]+=t[1]*o,t[2]+=t[2]*o}applyToAabb(e){const t=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*t,e[1]+=e[1]*t,e[2]+=e[2]*t;const r=this.offset/Math.sqrt(e[3]*e[3]+e[4]*e[4]+e[5]*e[5]);return e[3]+=e[3]*r,e[4]+=e[4]*r,e[5]+=e[5]*r,e}applyToBoundingSphere(e){const t=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]),r=this.offset/t;return this.sphere[0]=e[0]+e[0]*r,this.sphere[1]=e[1]+e[1]*r,this.sphere[2]=e[2]+e[2]*r,this.sphere[3]=e[3]+e[3]*this.offset/t,this.sphere}};const Ei=0,Ni=1,Ui=2,Vi=3,Hi=4,Gi=e=>class extends e{constructor(){super(...arguments),this._isDisposed=!1}dispose(){for(const t of null!=(e=this._managedDisposables)?e:[]){var e;const r=this[t];this[t]=null,r&&"function"==typeof r.dispose&&r.dispose()}this._isDisposed=!0}get isDisposed(){return this._isDisposed}};class ki extends(Gi(class{})){}class $i extends ki{constructor(e){super(),this.material=e.material,this.techniqueRep=e.techniqueRep,this.output=e.output}getTechnique(){return this.technique}getPipelineState(e,t){return this.getTechnique().pipeline}ensureResources(e){return 2}ensureParameters(e){}}class ji extends $i{constructor(e){super(e),this._textureIDs=new Set,this._textureRepository=e.textureRep,this._textureId=e.textureId,this._initTransparent=!!e.initTextureTransparent,this._texture=this._acquireIfNotUndefined(this._textureId),this._textureNormal=this._acquireIfNotUndefined(e.normalTextureId),this._textureEmissive=this._acquireIfNotUndefined(e.emissiveTextureId),this._textureOcclusion=this._acquireIfNotUndefined(e.occlusionTextureId),this._textureMetallicRoughness=this._acquireIfNotUndefined(e.metallicRoughnessTextureId)}dispose(){this._textureIDs.forEach((e=>this._textureRepository.release(e))),this._textureIDs.clear()}updateTexture(e){e!==this._textureId&&(this._releaseIfNotUndefined(this._textureId),this._textureId=e,this._texture=this._acquireIfNotUndefined(this._textureId))}bindTexture(e,t){k(this._texture)&&(t.setUniform1i("tex",Ei),e.bindTexture(this._texture.glTexture,Ei)),k(this._textureNormal)&&(t.setUniform1i("normalTexture",Ni),e.bindTexture(this._textureNormal.glTexture,Ni)),k(this._textureEmissive)&&(t.setUniform1i("texEmission",Ui),e.bindTexture(this._textureEmissive.glTexture,Ui)),k(this._textureOcclusion)&&(t.setUniform1i("texOcclusion",Vi),e.bindTexture(this._textureOcclusion.glTexture,Vi)),k(this._textureMetallicRoughness)&&(t.setUniform1i("texMetallicRoughness",Hi),e.bindTexture(this._textureMetallicRoughness.glTexture,Hi))}bindTextureScale(e,t){const r=k(this._texture)&&this._texture.glTexture;r&&r.descriptor.textureCoordinateScaleFactor?t.setUniform2fv("textureCoordinateScaleFactor",r.descriptor.textureCoordinateScaleFactor):t.setUniform2f("textureCoordinateScaleFactor",1,1)}_acquireIfNotUndefined(e){if(!R(e))return this._textureIDs.add(e),this._textureRepository.acquire(e,this._initTransparent)}_releaseIfNotUndefined(e){R(e)||(this._textureIDs.delete(e),this._textureRepository.release(e))}}function qi(e,t,r){const o=r.parameters,i=r.paddingPixelsOverride;return Xi.scale=Math.min(o.divisor/(t-o.offset),1),Xi.factor=function(e){return Math.abs(e*e*e)}(e),Xi.minPixelSize=o.minPixelSize,Xi.paddingPixels=i,Xi}function Wi(e,t,r,o){return function(e,t){return Math.max(Y(e*t.scale,e,t.factor),function(e,t){return 0===e?t.minPixelSize:t.minPixelSize*(1+2*t.paddingPixels/e)}(e,t))}(e,qi(t,r,o))}const Xi={scale:0,factor:0,minPixelSize:0,paddingPixels:0},Yi=nt();function Ki(e,t,r,o,i,n,a){const s=function(e){return!!k(e)&&!e.visible}(t),c=r.tolerance;if(!s)if(e.boundingInfo)Zt(0===e.primitiveType),Ji(e.boundingInfo,o,i,c,n,a);else{const t=e.indices.get("position"),r=e.vertexAttributes.get("position");en(o,i,0,t.length/3,t,r,void 0,n,a)}}const Qi=d();function Ji(e,t,r,o,i,n){if(R(e))return;const a=function(e,t,r){return F(r,1/(t[0]-e[0]),1/(t[1]-e[1]),1/(t[2]-e[2]))}(t,r,Qi);if(at(Yi,e.getBBMin()),st(Yi,e.getBBMax()),k(i)&&i.applyToAabb(Yi),function(e,t,r,o){return function(e,t,r,o,i){const n=(e[0]-o-t[0])*r[0],a=(e[3]+o-t[0])*r[0];let s=Math.min(n,a),c=Math.max(n,a);const l=(e[1]-o-t[1])*r[1],u=(e[4]+o-t[1])*r[1];if(c=Math.min(c,Math.max(l,u)),c<0)return!1;if(s=Math.max(s,Math.min(l,u)),s>c)return!1;const d=(e[2]-o-t[2])*r[2],f=(e[5]+o-t[2])*r[2];return c=Math.min(c,Math.max(d,f)),!(c<0)&&(s=Math.max(s,Math.min(d,f)),!(s>c)&&s<i)}(e,t,r,o,1/0)}(Yi,t,a,o)){const{primitiveIndices:a,indices:s,position:c}=e,l=a?a.length:s.length/3;if(l>ln){const a=e.getChildren();if(void 0!==a){for(let e=0;e<8;++e)void 0!==a[e]&&Ji(a[e],t,r,o,i,n);return}}en(t,r,0,l,s,c,a,i,n)}}const Zi=d();function en(e,t,r,o,i,n,a,s,c){if(a)return function(e,t,r,o,i,n,a,s,c){const l=n.data,u=n.stride||n.size,d=e[0],f=e[1],m=e[2],p=t[0]-d,h=t[1]-f,v=t[2]-m;for(let g=r;g<o;++g){const e=a[g];let t=3*e,r=u*i[t++],o=l[r++],n=l[r++],x=l[r];r=u*i[t++];let b=l[r++],y=l[r++],w=l[r];r=u*i[t];let T=l[r++],S=l[r++],_=l[r];k(s)&&([o,n,x]=s.applyToVertex(o,n,x,g),[b,y,w]=s.applyToVertex(b,y,w,g),[T,S,_]=s.applyToVertex(T,S,_,g));const C=b-o,M=y-n,A=w-x,P=T-o,O=S-n,I=_-x,F=h*I-O*v,R=v*P-I*p,L=p*O-P*h,B=C*F+M*R+A*L;if(Math.abs(B)<=Number.EPSILON)continue;const z=d-o,D=f-n,E=m-x,N=z*F+D*R+E*L;if(B>0){if(N<0||N>B)continue}else if(N>0||N<B)continue;const U=D*A-M*E,V=E*C-A*z,H=z*M-C*D,G=p*U+h*V+v*H;if(B>0){if(G<0||N+G>B)continue}else if(G>0||N+G<B)continue;const $=(P*U+O*V+I*H)/B;$>=0&&c($,on(C,M,A,P,O,I,Zi),e)}}(e,t,r,o,i,n,a,s,c);const l=n.data,u=n.stride||n.size,d=e[0],f=e[1],m=e[2],p=t[0]-d,h=t[1]-f,v=t[2]-m;for(let g=r,x=3*r;g<o;++g){let e=u*i[x++],t=l[e++],r=l[e++],o=l[e];e=u*i[x++];let n=l[e++],a=l[e++],b=l[e];e=u*i[x++];let y=l[e++],w=l[e++],T=l[e];k(s)&&([t,r,o]=s.applyToVertex(t,r,o,g),[n,a,b]=s.applyToVertex(n,a,b,g),[y,w,T]=s.applyToVertex(y,w,T,g));const S=n-t,_=a-r,C=b-o,M=y-t,A=w-r,P=T-o,O=h*P-A*v,I=v*M-P*p,F=p*A-M*h,R=S*O+_*I+C*F;if(Math.abs(R)<=Number.EPSILON)continue;const L=d-t,B=f-r,z=m-o,D=L*O+B*I+z*F;if(R>0){if(D<0||D>R)continue}else if(D>0||D<R)continue;const E=B*C-_*z,N=z*S-C*L,U=L*_-S*B,V=p*E+h*N+v*U;if(R>0){if(V<0||D+V>R)continue}else if(V>0||D+V<R)continue;const H=(M*E+A*N+P*U)/R;H>=0&&c(H,on(S,_,C,M,A,P,Zi),g)}}const tn=d(),rn=d();function on(e,t,r,o,i,n,a){return F(tn,e,t,r),F(rn,o,i,n),P(a,tn,rn),B(a,a),a}function nn(e,t,r){if(!e)return;const o=e.parameters,i=e.paddingPixelsOverride;t.setUniform4f(r,o.divisor,o.offset,o.minPixelSize,i)}function an(e,t){const r=t?an(t):{};for(const o in e){let t=e[o];t&&t.forEach&&(t=sn(t)),null==t&&o in r||(r[o]=t)}return r}function sn(e){const t=[];return e.forEach((e=>t.push(e))),t}const cn={multiply:1,ignore:2,replace:3,tint:4},ln=1e3,un={position:0,normal:1,uv0:2,color:3,size:4,tangent:4,auxpos1:5,symbolColor:5,auxpos2:6,featureAttribute:6,instanceFeatureAttribute:6,instanceColor:7,model:8,modelNormal:12,modelOriginHi:11,modelOriginLo:15};class dn extends ir{constructor(e,t){super(),this.type=3,this.supportsEdges=!1,this._visible=!0,this._renderPriority=0,this._insertOrder=0,this._vertexAttributeLocations=un,this._params=an(e,t),this.validateParameterValues(this._params)}dispose(){}get params(){return this._params}update(e){return!1}setParameterValues(e){(function(e,t){let r=!1;for(const o in t){const i=t[o];void 0!==i&&(r=!0,Array.isArray(i)?e[o]=i.slice():e[o]=i)}return r})(this._params,e)&&(this.validateParameterValues(this._params),this.parametersChanged())}validateParameterValues(e){}get visible(){return this._visible}set visible(e){e!==this._visible&&(this._visible=e,this.parametersChanged())}isVisibleInPass(e){return!0}get renderOccluded(){return this.params.renderOccluded}get renderPriority(){return this._renderPriority}set renderPriority(e){e!==this._renderPriority&&(this._renderPriority=e,this.parametersChanged())}get insertOrder(){return this._insertOrder}set insertOrder(e){e!==this._insertOrder&&(this._insertOrder=e,this.parametersChanged())}get vertexAttributeLocations(){return this._vertexAttributeLocations}isVisible(){return this._visible}parametersChanged(){k(this.materialRepository)&&this.materialRepository.materialChanged(this)}}function fn(e,t,r,o){const i=r.typedBuffer,n=r.typedBufferStride,a=e.length;o*=n;for(let s=0;s<a;++s){const r=2*e[s];i[o]=t[r],i[o+1]=t[r+1],o+=n}}function mn(e,t,r,o,i){const n=r.typedBuffer,a=r.typedBufferStride,s=e.length;if(o*=a,null==i||1===i)for(let c=0;c<s;++c){const r=3*e[c];n[o]=t[r],n[o+1]=t[r+1],n[o+2]=t[r+2],o+=a}else for(let c=0;c<s;++c){const r=3*e[c];for(let e=0;e<i;++e)n[o]=t[r],n[o+1]=t[r+1],n[o+2]=t[r+2],o+=a}}function pn(e,t,r,o,i=1){const n=r.typedBuffer,a=r.typedBufferStride,s=e.length;if(o*=a,1===i)for(let c=0;c<s;++c){const r=4*e[c];n[o]=t[r],n[o+1]=t[r+1],n[o+2]=t[r+2],n[o+3]=t[r+3],o+=a}else for(let c=0;c<s;++c){const r=4*e[c];for(let e=0;e<i;++e)n[o]=t[r],n[o+1]=t[r+1],n[o+2]=t[r+2],n[o+3]=t[r+3],o+=a}}function hn(e,t,r,o,i,n=1){if(r){const a=o.typedBuffer,s=o.typedBufferStride,c=e.length,l=r[0],u=r[1],d=r[2],f=r[4],m=r[5],p=r[6],h=r[8],v=r[9],g=r[10],x=r[12],b=r[13],y=r[14];if(i*=s,1===n)for(let r=0;r<c;++r){const o=3*e[r],n=t[o],c=t[o+1],w=t[o+2];a[i]=l*n+f*c+h*w+x,a[i+1]=u*n+m*c+v*w+b,a[i+2]=d*n+p*c+g*w+y,i+=s}else for(let r=0;r<c;++r){const o=3*e[r],c=t[o],w=t[o+1],T=t[o+2],S=l*c+f*w+h*T+x,_=u*c+m*w+v*T+b,C=d*c+p*w+g*T+y;for(let e=0;e<n;++e)a[i]=S,a[i+1]=_,a[i+2]=C,i+=s}}else mn(e,t,o,i,n)}function vn(e,t,r,o,i,n){if(r){const a=r,s=o.typedBuffer,c=o.typedBufferStride,l=e.length,u=a[0],d=a[1],f=a[2],m=a[4],p=a[5],h=a[6],v=a[8],g=a[9],x=a[10],b=Math.abs(1-u*u+m*m+v*v)>1e-5||Math.abs(1-d*d+p*p+g*g)>1e-5||Math.abs(1-f*f+h*h+x*x)>1e-5,y=1e-6,w=1-y;if(i*=c,1===n)for(let r=0;r<l;++r){const o=3*e[r],n=t[o],a=t[o+1],l=t[o+2];let T=u*n+m*a+v*l,S=d*n+p*a+g*l,_=f*n+h*a+x*l;if(b){const e=T*T+S*S+_*_;if(e<w&&e>y){const t=Math.sqrt(e);T/=t,S/=t,_/=t}}s[i+0]=T,s[i+1]=S,s[i+2]=_,i+=c}else for(let r=0;r<l;++r){const o=3*e[r],a=t[o],l=t[o+1],T=t[o+2];let S=u*a+m*l+v*T,_=d*a+p*l+g*T,C=f*a+h*l+x*T;if(b){const e=S*S+_*_+C*C;if(e<w&&e>y){const t=Math.sqrt(e);S/=t,_/=t,C/=t}}for(let e=0;e<n;++e)s[i+0]=S,s[i+1]=_,s[i+2]=C,i+=c}}else mn(e,t,o,i,n)}function gn(e,t,r,o,i,n=1){const a=o.typedBuffer,s=o.typedBufferStride,c=e.length;if(i*=s,1===n){if(4===r)for(let l=0;l<c;++l){const r=4*e[l];a[i]=t[r],a[i+1]=t[r+1],a[i+2]=t[r+2],a[i+3]=t[r+3],i+=s}else if(3===r)for(let l=0;l<c;++l){const r=3*e[l];a[i]=t[r],a[i+1]=t[r+1],a[i+2]=t[r+2],a[i+3]=255,i+=s}}else if(4===r)for(let l=0;l<c;++l){const r=4*e[l];for(let e=0;e<n;++e)a[i]=t[r],a[i+1]=t[r+1],a[i+2]=t[r+2],a[i+3]=t[r+3],i+=s}else if(3===r)for(let l=0;l<c;++l){const r=3*e[l];for(let e=0;e<n;++e)a[i]=t[r],a[i+1]=t[r+1],a[i+2]=t[r+2],a[i+3]=255,i+=s}}function xn(e,...t){let r="";for(let o=0;o<t.length;o++)r+=e[o]+t[o];return r+=e[e.length-1],r}var bn;(bn=xn||(xn={})).int=function(e){return Math.round(e).toString()},bn.float=function(e){return e.toPrecision(8)};function yn(e,t){const r=e.fragment;switch(t.alphaDiscardMode){case 0:r.code.add(xn`
        #define discardOrAdjustAlpha(color) { if (color.a < ${xn.float(.001)}) { discard; } }
      `);break;case 1:r.code.add(xn`
        void discardOrAdjustAlpha(inout vec4 color) {
          color.a = 1.0;
        }
      `);break;case 2:r.uniforms.add("textureAlphaCutoff","float"),r.code.add(xn`
        #define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }
      `);break;case 3:e.fragment.uniforms.add("textureAlphaCutoff","float"),e.fragment.code.add(xn`
        #define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }
      `)}}const wn=ft(770,1,771,771),Tn=mt(1,1),Sn=mt(0,771);const _n={factor:-1,units:-2};function Cn(e){return e?_n:null}function Mn(e){return 3===e||2===e?513:515}class An{constructor(e,t){this._module=e,this._loadModule=t}get(){return this._module}async reload(){return this._module=await this._loadModule(),this._module}}function Pn(e={}){return(t,r)=>{var o,i;t._parameterNames=null!=(o=t._parameterNames)?o:[],t._parameterNames.push(r);const n=t._parameterNames.length-1,a=e.count||2,s=Math.ceil(Q(a)),c=null!=(i=t._parameterBits)?i:[0];let l=0;for(;c[l]+s>16;)l++,l>=c.length&&c.push(0);t._parameterBits=c;const u=c[l],d=(1<<s)-1<<u;c[l]+=s,Object.defineProperty(t,r,{get(){return this[n]},set(e){if(this[n]!==e&&(this[n]=e,this._keyDirty=!0,this._parameterBits[l]=this._parameterBits[l]&~d|+e<<u&d,"number"!=typeof e&&"boolean"!=typeof e))throw"Configuration value for "+r+" must be boolean or number, got "+typeof e}})}}var On;!function(e){function t(e,t,r){J(In,r,t),e.setUniform3fv("localOrigin",t),e.setUniformMatrix4fv("view",In)}e.bindCamPosition=function(e,t,r){e.setUniform3f("camPos",r[3]-t[0],r[7]-t[1],r[11]-t[2])},e.bindProjectionMatrix=function(e,t){e.setUniformMatrix4fv("proj",t)},e.bindNearFar=function(e,t){e.setUniform2fv("nearFar",t)},e.bindViewCustomOrigin=t,e.bindView=function(e,r){t(e,r.origin,r.camera.viewMatrix)},e.bindViewport=function(e,t){e.setUniform4fv("viewport",t.camera.fullViewport)}}(On||(On={}));const In=Tt();function Fn(e,t){if(t.slicePlaneEnabled){e.extensions.add("GL_OES_standard_derivatives"),t.sliceEnabledForVertexPrograms&&(e.vertex.uniforms.add("slicePlaneOrigin","vec3"),e.vertex.uniforms.add("slicePlaneBasis1","vec3"),e.vertex.uniforms.add("slicePlaneBasis2","vec3")),e.fragment.uniforms.add("slicePlaneOrigin","vec3"),e.fragment.uniforms.add("slicePlaneBasis1","vec3"),e.fragment.uniforms.add("slicePlaneBasis2","vec3");const r=xn`
      struct SliceFactors {
        float front;
        float side0;
        float side1;
        float side2;
        float side3;
      };

      SliceFactors calculateSliceFactors(vec3 pos) {
        vec3 rel = pos - slicePlaneOrigin;

        vec3 slicePlaneNormal = -cross(slicePlaneBasis1, slicePlaneBasis2);
        float slicePlaneW = -dot(slicePlaneNormal, slicePlaneOrigin);

        float basis1Len2 = dot(slicePlaneBasis1, slicePlaneBasis1);
        float basis2Len2 = dot(slicePlaneBasis2, slicePlaneBasis2);

        float basis1Dot = dot(slicePlaneBasis1, rel);
        float basis2Dot = dot(slicePlaneBasis2, rel);

        return SliceFactors(
          dot(slicePlaneNormal, pos) + slicePlaneW,
          -basis1Dot - basis1Len2,
          basis1Dot - basis1Len2,
          -basis2Dot - basis2Len2,
          basis2Dot - basis2Len2
        );
      }

      bool sliceByFactors(SliceFactors factors) {
        return factors.front < 0.0
          && factors.side0 < 0.0
          && factors.side1 < 0.0
          && factors.side2 < 0.0
          && factors.side3 < 0.0;
      }

      bool sliceEnabled() {
        // a slicePlaneBasis1 vector of zero length is used to disable slicing in the shader during draped rendering.
        return dot(slicePlaneBasis1, slicePlaneBasis1) != 0.0;
      }

      bool sliceByPlane(vec3 pos) {
        return sliceEnabled() && sliceByFactors(calculateSliceFactors(pos));
      }

      #define rejectBySlice(_pos_) sliceByPlane(_pos_)
      #define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }
    `,o=xn`
      vec4 applySliceHighlight(vec4 color, vec3 pos) {
        SliceFactors factors = calculateSliceFactors(pos);

        if (sliceByFactors(factors)) {
          return color;
        }

        const float HIGHLIGHT_WIDTH = 1.0;
        const vec4 HIGHLIGHT_COLOR = vec4(0.0, 0.0, 0.0, 0.3);

        factors.front /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.front);
        factors.side0 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side0);
        factors.side1 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side1);
        factors.side2 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side2);
        factors.side3 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side3);

        float highlightFactor = (1.0 - step(0.5, factors.front))
          * (1.0 - step(0.5, factors.side0))
          * (1.0 - step(0.5, factors.side1))
          * (1.0 - step(0.5, factors.side2))
          * (1.0 - step(0.5, factors.side3));

        return mix(color, vec4(HIGHLIGHT_COLOR.rgb, color.a), highlightFactor * HIGHLIGHT_COLOR.a);
      }
    `,i=t.sliceHighlightDisabled?xn`#define highlightSlice(_color_, _pos_) (_color_)`:xn`
        ${o}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      `;t.sliceEnabledForVertexPrograms&&e.vertex.code.add(r),e.fragment.code.add(r),e.fragment.code.add(i)}else{const r=xn`
      #define rejectBySlice(_pos_) false
      #define discardBySlice(_pos_) {}
      #define highlightSlice(_color_, _pos_) (_color_)
    `;t.sliceEnabledForVertexPrograms&&e.vertex.code.add(r),e.fragment.code.add(r)}}var Rn;(Rn=Fn||(Fn={})).bindUniformsWithOrigin=function(e,t,r){Rn.bindUniforms(e,t,r.slicePlane,r.origin)},Rn.bindUniforms=function(e,t,r,o){t.slicePlaneEnabled&&(k(r)?(o?(T(Ln,r.origin,o),e.setUniform3fv("slicePlaneOrigin",Ln)):e.setUniform3fv("slicePlaneOrigin",r.origin),e.setUniform3fv("slicePlaneBasis1",r.basis1),e.setUniform3fv("slicePlaneBasis2",r.basis2)):(e.setUniform3fv("slicePlaneBasis1",Z),e.setUniform3fv("slicePlaneBasis2",Z),e.setUniform3fv("slicePlaneOrigin",Z)))};const Ln=d(),Bn=Nt(1,1,0,1),zn=Nt(1,0,1,1);function Dn(e){e.fragment.uniforms.add("depthTex","sampler2D"),e.fragment.uniforms.add("highlightViewportPixelSz","vec4"),e.fragment.constants.add("occludedHighlightFlag","vec4",Bn).add("unoccludedHighlightFlag","vec4",zn),e.fragment.code.add(xn`
    void outputHighlight() {
      vec4 fragCoord = gl_FragCoord;

      float sceneDepth = texture2D(depthTex, (fragCoord.xy - highlightViewportPixelSz.xy) * highlightViewportPixelSz.zw).r;
      if (fragCoord.z > sceneDepth + 5e-7) {
        gl_FragColor = occludedHighlightFlag;
      }
      else {
        gl_FragColor = unoccludedHighlightFlag;
      }
    }
  `)}function En(e,t){t.vvInstancingEnabled&&(t.vvSize||t.vvColor)&&e.attributes.add("instanceFeatureAttribute","vec4"),t.vvSize?(e.vertex.uniforms.add("vvSizeMinSize","vec3"),e.vertex.uniforms.add("vvSizeMaxSize","vec3"),e.vertex.uniforms.add("vvSizeOffset","vec3"),e.vertex.uniforms.add("vvSizeFactor","vec3"),e.vertex.uniforms.add("vvSymbolRotationMatrix","mat3"),e.vertex.uniforms.add("vvSymbolAnchor","vec3"),e.vertex.code.add(xn`
      vec3 vvScale(vec4 _featureAttribute) {
        return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
      }

      vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
        return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
      }
    `),e.vertex.code.add(xn`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);
        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);
      }

      ${t.vvInstancingEnabled?xn`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }`:""}
    `)):e.vertex.code.add(xn`
      vec4 localPosition() { return vec4(position, 1.0); }

      vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }
    `),t.vvColor?(e.vertex.constants.add("vvColorNumber","int",8),e.vertex.code.add(xn`
      uniform float vvColorValues[vvColorNumber];
      uniform vec4 vvColorColors[vvColorNumber];

      vec4 vvGetColor(vec4 featureAttribute, float values[vvColorNumber], vec4 colors[vvColorNumber]) {
        float value = featureAttribute.y;
        if (value <= values[0]) {
          return colors[0];
        }

        for (int i = 1; i < vvColorNumber; ++i) {
          if (values[i] >= value) {
            float f = (value - values[i-1]) / (values[i] - values[i-1]);
            return mix(colors[i-1], colors[i], f);
          }
        }
        return colors[vvColorNumber - 1];
      }

      ${t.vvInstancingEnabled?xn`
      vec4 vvColor() {
        return vvGetColor(instanceFeatureAttribute, vvColorValues, vvColorColors);
      }`:""}
    `)):e.vertex.code.add(xn`
      vec4 vvColor() { return vec4(1.0); }
    `)}function Nn(e){e.vertex.code.add(xn`
    float screenSizePerspectiveMinSize(float size, vec4 factor) {
      float nonZeroSize = 1.0 - step(size, 0.0);

      return (
        factor.z * (
          1.0 +
          // Multiply by nzs ensures if size is 0, then we ignore proportionally scaled padding
          nonZeroSize *
          2.0 * factor.w / (
            size + (1.0 - nonZeroSize) // Adding 1 - nzs ensures we divide either by size, or by 1
          )
        )
      );
    }
  `),e.vertex.code.add(xn`
    float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
      return absCosAngle * absCosAngle * absCosAngle;
    }
  `),e.vertex.code.add(xn`
    vec4 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec4 params) {
      return vec4(
        min(params.x / (distanceToCamera - params.y), 1.0),
        screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
        params.z,
        params.w
      );
    }
  `),e.vertex.code.add(xn`
    float applyScreenSizePerspectiveScaleFactorFloat(float size, vec4 factor) {
      return max(mix(size * factor.x, size, factor.y), screenSizePerspectiveMinSize(size, factor));
    }
  `),e.vertex.code.add(xn`
    float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec4 params) {
      return applyScreenSizePerspectiveScaleFactorFloat(
        size,
        screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
      );
    }
  `),e.vertex.code.add(xn`
    vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec4 factor) {
      return mix(size * clamp(factor.x, screenSizePerspectiveMinSize(size.y, factor) / size.y, 1.0), size, factor.y);
    }
  `),e.vertex.code.add(xn`
    vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec4 params) {
      return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
    }
  `)}function Un(e,t){const r=e.vertex.code;t.verticalOffsetEnabled?(e.vertex.uniforms.add("verticalOffset","vec4"),t.screenSizePerspectiveEnabled&&(e.include(Nn),e.vertex.uniforms.add("screenSizePerspectiveAlignment","vec4")),r.add(xn`
    vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
      float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
      ${1===t.viewingMode?xn`vec3 worldNormal = normalize(worldPos + localOrigin);`:xn`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
      ${t.screenSizePerspectiveEnabled?xn`
          float cosAngle = dot(worldNormal, normalize(worldPos - camPos));
          float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:xn`
          float verticalOffsetScreenHeight = verticalOffset.x;`}
      // Screen sized offset in world space, used for example for line callouts
      float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
      return worldNormal * worldOffset;
    }

    vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
      return worldPos + calculateVerticalOffset(worldPos, localOrigin);
    }
    `)):r.add(xn`
    vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }
    `)}(Dn||(Dn={})).bindOutputHighlight=function(e,t,r){e.bindTexture(r.highlightDepthTexture,5),t.setUniform1i("depthTex",5),t.setUniform4f("highlightViewportPixelSz",0,0,r.inverseViewport[0],r.inverseViewport[1])},function(e){function t(e,t){t.vvSizeEnabled&&(e.setUniform3fv("vvSizeMinSize",t.vvSizeMinSize),e.setUniform3fv("vvSizeMaxSize",t.vvSizeMaxSize),e.setUniform3fv("vvSizeOffset",t.vvSizeOffset),e.setUniform3fv("vvSizeFactor",t.vvSizeFactor)),t.vvColorEnabled&&(e.setUniform1fv("vvColorValues",t.vvColorValues),e.setUniform4fv("vvColorColors",t.vvColorColors))}e.bindUniforms=t,e.bindUniformsWithOpacity=function(e,r){t(e,r),r.vvOpacityEnabled&&(e.setUniform1fv("vvOpacityValues",r.vvOpacityValues),e.setUniform1fv("vvOpacityOpacities",r.vvOpacityOpacities))},e.bindUniformsForSymbols=function(e,r){t(e,r),r.vvSizeEnabled&&(e.setUniform3fv("vvSymbolAnchor",r.vvSymbolAnchor),e.setUniformMatrix3fv("vvSymbolRotationMatrix",r.vvSymbolRotationMatrix))}}(En||(En={})),(Nn||(Nn={})).bindUniforms=function(e,t){t.screenSizePerspective&&(nn(t.screenSizePerspective,e,"screenSizePerspective"),nn(t.screenSizePerspectiveAlignment||t.screenSizePerspective,e,"screenSizePerspectiveAlignment"))},(Un||(Un={})).bindUniforms=function(e,t,r){if(!t.verticalOffset)return;const o=function(e,t,r,o=Vn){return o.screenLength=e.screenLength,o.perDistance=Math.tan(.5*t)/(.5*r),o.minWorldLength=e.minWorldLength,o.maxWorldLength=e.maxWorldLength,o}(t.verticalOffset,r.camera.fovY,r.camera.fullViewport[3]),i=r.camera.pixelRatio||1;e.setUniform4f("verticalOffset",o.screenLength*i,o.perDistance,o.minWorldLength,o.maxWorldLength)};const Vn={screenLength:0,perDistance:0,minWorldLength:0,maxWorldLength:0};function Hn(e,t){e.fragment.uniforms.add("terrainDepthTexture","sampler2D"),e.fragment.uniforms.add("cameraNearFar","vec2"),e.fragment.uniforms.add("inverseViewport","vec2"),e.fragment.code.add(xn`
    //Compare the linearized depths of the fragment and the terrain. If fragment is on the wrong side of the terrain, discard it.
    void terrainDepthTest(vec4 fragCoord, float fragmentDepth){

      float terrainDepth = linearDepthFromTexture(terrainDepthTexture, fragCoord.xy * inverseViewport, cameraNearFar);
      if(fragmentDepth ${t.cullAboveGround?">":"<="} terrainDepth){
        discard;
      }
    }
  `)}const Gn={mask:255},kn={function:{func:519,ref:2,mask:2},operation:{fail:7680,zFail:7680,zPass:0}},$n={function:{func:519,ref:2,mask:2},operation:{fail:7680,zFail:7680,zPass:7681}};function jn(e){e.code.add(xn`
    // This is the maximum float value representable as 32bit fixed point,
    // it is rgba2float(vec4(1)) inlined.
    const float MAX_RGBA_FLOAT =
      255.0 / 256.0 +
      255.0 / 256.0 / 256.0 +
      255.0 / 256.0 / 256.0 / 256.0 +
      255.0 / 256.0 / 256.0 / 256.0 / 256.0;

    // Factors to convert to fixed point, i.e. factors (256^0, 256^1, 256^2, 256^3)
    const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);

    vec4 float2rgba(const float value) {
      // Make sure value is in the domain we can represent
      float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);

      // Decompose value in 32bit fixed point parts represented as
      // uint8 rgba components. Decomposition uses the fractional part after multiplying
      // by a power of 256 (this removes the bits that are represented in the previous
      // component) and then converts the fractional part to 8bits.
      vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);

      // Convert uint8 values (from 0 to 255) to floating point representation for
      // the shader
      const float toU8AsFloat = 1.0 / 255.0;

      return fixedPointU8 * toU8AsFloat;
    }

    // Factors to convert rgba back to float
    const vec4 RGBA_2_FLOAT_FACTORS = vec4(
      255.0 / (256.0),
      255.0 / (256.0 * 256.0),
      255.0 / (256.0 * 256.0 * 256.0),
      255.0 / (256.0 * 256.0 * 256.0 * 256.0)
    );

    float rgba2float(vec4 rgba) {
      // Convert components from 0->1 back to 0->255 and then
      // add the components together with their corresponding
      // fixed point factors, i.e. (256^1, 256^2, 256^3, 256^4)
      return dot(rgba, RGBA_2_FLOAT_FACTORS);
    }
  `)}function qn(e){e.fragment.include(jn),e.fragment.uniforms.add("uShadowMapTex","sampler2D"),e.fragment.uniforms.add("uShadowMapNum","int"),e.fragment.uniforms.add("uShadowMapDistance","vec4"),e.fragment.uniforms.add("uShadowMapMatrix","mat4",4),e.fragment.uniforms.add("uDepthHalfPixelSz","float"),e.fragment.code.add(xn`
    int chooseCascade(float _linearDepth, out mat4 mat) {
      vec4 distance = uShadowMapDistance;
      float depth = _linearDepth;

      //choose correct cascade
      int i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;

      mat = i == 0 ? uShadowMapMatrix[0] : i == 1 ? uShadowMapMatrix[1] : i == 2 ? uShadowMapMatrix[2] : uShadowMapMatrix[3];

      return i;
    }

    vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
      vec4 lv = mat * vec4(_vpos, 1.0);
      lv.xy /= lv.w;
      return 0.5 * lv.xyz + vec3(0.5);
    }

    vec2 cascadeCoordinates(int i, vec3 lvpos) {
      return vec2(float(i - 2 * (i / 2)) * 0.5, float(i / 2) * 0.5) + 0.5 * lvpos.xy;
    }

    float readShadowMapDepth(vec2 uv, sampler2D _depthTex) {
      return rgba2float(texture2D(_depthTex, uv));
    }

    float posIsInShadow(vec2 uv, vec3 lvpos, sampler2D _depthTex) {
      return readShadowMapDepth(uv, _depthTex) < lvpos.z ? 1.0 : 0.0;
    }

    float filterShadow(vec2 uv, vec3 lvpos, float halfPixelSize, sampler2D _depthTex) {
      float texSize = 0.5 / halfPixelSize;

      // filter, offset by half pixels
      vec2 st = fract((vec2(halfPixelSize) + uv) * texSize);

      float s00 = posIsInShadow(uv + vec2(-halfPixelSize, -halfPixelSize), lvpos, _depthTex);
      float s10 = posIsInShadow(uv + vec2(halfPixelSize, -halfPixelSize), lvpos, _depthTex);
      float s11 = posIsInShadow(uv + vec2(halfPixelSize, halfPixelSize), lvpos, _depthTex);
      float s01 = posIsInShadow(uv + vec2(-halfPixelSize, halfPixelSize), lvpos, _depthTex);

      return mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);
    }

    float readShadowMap(const in vec3 _vpos, float _linearDepth) {
      mat4 mat;
      int i = chooseCascade(_linearDepth, mat);

      if (i >= uShadowMapNum) { return 0.0; }

      vec3 lvpos = lightSpacePosition(_vpos, mat);

      // vertex completely outside? -> no shadow
      if (lvpos.z >= 1.0) { return 0.0; }
      if (lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }

      // calc coord in cascade texture
      vec2 uv = cascadeCoordinates(i, lvpos);

      return filterShadow(uv, lvpos, uDepthHalfPixelSz, uShadowMapTex);
    }
  `)}var Wn;(Wn=qn||(qn={})).bindUniforms=function(e,t,r){t.shadowMappingEnabled&&(t.shadowMap.bind(e,r),t.shadowMap.bindView(e,t.origin))},Wn.bindViewCustomOrigin=function(e,t,r){t.shadowMappingEnabled&&t.shadowMap.bindView(e,r)},Wn.bindView=function(e,t){t.shadowMappingEnabled&&t.shadowMap.bindView(e,t.origin)};class Xn{constructor(e){this.context=e,this.svgAlwaysPremultipliesAlpha=!1,this._doublePrecisionRequiresObfuscation=null,Mt(e).then((e=>{this.svgAlwaysPremultipliesAlpha=!e}))}get doublePrecisionRequiresObfuscation(){if(R(this._doublePrecisionRequiresObfuscation)){const e=Kn(this.context,!1),t=Kn(this.context,!0);this._doublePrecisionRequiresObfuscation=0!==e&&(0===t||e/t>5)}return this._doublePrecisionRequiresObfuscation}}let Yn=null;function Kn(e,t){const r=new St(e,{colorTarget:0,depthStencilTarget:0},{target:3553,wrapMode:33071,pixelFormat:6408,dataType:5121,samplingMode:9728,width:1,height:1});const o=gt.createVertex(e,35044,new Uint16Array([0,0,1,0,0,1,1,1])),i=new xt(e,{a_pos:0},{geometry:[{name:"a_pos",count:2,type:5123,offset:0,stride:4,normalized:!1}]},{geometry:o}),n=f(5633261.287538229,2626832.878767164,1434988.0495278358),a=f(5633271.46742708,2626873.6381334523,1434963.231608387),s=function(r,o){const i=new bt(e,`\n\n  precision highp float;\n\n  attribute vec2 a_pos;\n\n  uniform vec3 u_highA;\n  uniform vec3 u_lowA;\n  uniform vec3 u_highB;\n  uniform vec3 u_lowB;\n\n  varying vec4 v_color;\n\n  ${t?"#define DOUBLE_PRECISION_REQUIRES_OBFUSCATION":""}\n\n  #ifdef DOUBLE_PRECISION_REQUIRES_OBFUSCATION\n\n  vec3 dpPlusFrc(vec3 a, vec3 b) {\n    return mix(a, a + b, vec3(notEqual(b, vec3(0))));\n  }\n\n  vec3 dpMinusFrc(vec3 a, vec3 b) {\n    return mix(vec3(0), a - b, vec3(notEqual(a, b)));\n  }\n\n  vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {\n    vec3 t1 = dpPlusFrc(hiA, hiB);\n    vec3 e = dpMinusFrc(t1, hiA);\n    vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;\n    return t1 + t2;\n  }\n\n  #else\n\n  vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {\n    vec3 t1 = hiA + hiB;\n    vec3 e = t1 - hiA;\n    vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;\n    return t1 + t2;\n  }\n\n  #endif\n\n  const float MAX_RGBA_FLOAT =\n    255.0 / 256.0 +\n    255.0 / 256.0 / 256.0 +\n    255.0 / 256.0 / 256.0 / 256.0 +\n    255.0 / 256.0 / 256.0 / 256.0 / 256.0;\n\n  const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);\n\n  vec4 float2rgba(const float value) {\n    // Make sure value is in the domain we can represent\n    float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);\n\n    // Decompose value in 32bit fixed point parts represented as\n    // uint8 rgba components. Decomposition uses the fractional part after multiplying\n    // by a power of 256 (this removes the bits that are represented in the previous\n    // component) and then converts the fractional part to 8bits.\n    vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);\n\n    // Convert uint8 values (from 0 to 255) to floating point representation for\n    // the shader\n    const float toU8AsFloat = 1.0 / 255.0;\n\n    return fixedPointU8 * toU8AsFloat;\n  }\n\n  void main() {\n    vec3 val = dpAdd(u_highA, u_lowA, -u_highB, -u_lowB);\n\n    v_color = float2rgba(val.z / 25.0);\n\n    gl_Position = vec4(a_pos * 2.0 - 1.0, 0.0, 1.0);\n  }\n  `,"\n  precision highp float;\n\n  varying vec4 v_color;\n\n  void main() {\n    gl_FragColor = v_color;\n  }\n  ",{a_pos:0}),n=new Float32Array(6);Li(r,n,3);const a=new Float32Array(6);return Li(o,a,3),e.bindProgram(i),i.setUniform3f("u_highA",n[0],n[2],n[4]),i.setUniform3f("u_lowA",n[1],n[3],n[5]),i.setUniform3f("u_highB",a[0],a[2],a[4]),i.setUniform3f("u_lowB",a[1],a[3],a[5]),i}(n,a),c=e.getBoundFramebufferObject(),{x:l,y:u,width:d,height:m}=e.getViewport();e.bindFramebuffer(r),e.setViewport(0,0,1,1),e.bindVAO(i),e.drawArrays(5,0,4);const p=new Uint8Array(4);r.readPixels(0,0,1,1,6408,5121,p),s.dispose(),i.dispose(!1),o.dispose(),r.dispose(),e.setViewport(l,u,d,m),e.bindFramebuffer(c);const h=(n[2]-a[2])/25,v=er(p);return Math.abs(h-v)}function Qn({code:e},t){t.doublePrecisionRequiresObfuscation?e.add(xn`
      vec3 dpPlusFrc(vec3 a, vec3 b) {
        return mix(a, a + b, vec3(notEqual(b, vec3(0))));
      }

      vec3 dpMinusFrc(vec3 a, vec3 b) {
        return mix(vec3(0), a - b, vec3(notEqual(a, b)));
      }

      // based on https://www.thasler.com/blog/blog/glsl-part2-emu
      vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
        vec3 t1 = dpPlusFrc(hiA, hiB);
        vec3 e = dpMinusFrc(t1, hiA);
        vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;
        return t1 + t2;
      }
    `):e.add(xn`
      vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
        vec3 t1 = hiA + hiB;
        vec3 e = t1 - hiA;
        vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
        return t1 + t2;
      }
    `)}function Jn(e){return!!ee("force-double-precision-obfuscation")||(t=e,(R(Yn)||Yn.context!==t)&&(Yn=new Xn(t)),Yn).doublePrecisionRequiresObfuscation;var t}function Zn(e,t){t.instanced&&t.instancedDoublePrecision&&(e.attributes.add("modelOriginHi","vec3"),e.attributes.add("modelOriginLo","vec3"),e.attributes.add("model","mat3"),e.attributes.add("modelNormal","mat3")),t.instancedDoublePrecision&&(e.vertex.include(Qn,t),e.vertex.uniforms.add("viewOriginHi","vec3"),e.vertex.uniforms.add("viewOriginLo","vec3"));const r=[xn`
    vec3 calculateVPos() {
      ${t.instancedDoublePrecision?"return model * localPosition().xyz;":"return localPosition().xyz;"}
    }
    `,xn`
    vec3 subtractOrigin(vec3 _pos) {
      ${t.instancedDoublePrecision?xn`
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -modelOriginHi, -modelOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `,xn`
    vec3 dpNormal(vec4 _normal) {
      ${t.instancedDoublePrecision?"return normalize(modelNormal * _normal.xyz);":"return normalize(_normal.xyz);"}
    }
    `,xn`
    vec3 dpNormalView(vec4 _normal) {
      ${t.instancedDoublePrecision?"return normalize((viewNormal * vec4(modelNormal * _normal.xyz, 1.0)).xyz);":"return normalize((viewNormal * _normal).xyz);"}
    }
    `,t.vertexTangets?xn`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${t.instancedDoublePrecision?"return vec4(modelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}

    }
    `:xn``];e.vertex.code.add(r[0]),e.vertex.code.add(r[1]),e.vertex.code.add(r[2]),2===t.output&&e.vertex.code.add(r[3]),e.vertex.code.add(r[4])}!function(e){e.Uniforms=class{},e.bindCustomOrigin=function(e,t){(function(e,t,r,o){for(let i=0;i<o;++i)Bi[0]=e[i],Li(Bi,zi,1),t[i]=zi[0],r[i]=zi[1]})(t,ea,ta,3),e.setUniform3fv("viewOriginHi",ea),e.setUniform3fv("viewOriginLo",ta)}}(Zn||(Zn={}));const ea=d(),ta=d();function ra(e,t){1===t.attributeTextureCoordinates&&(e.attributes.add("uv0","vec2"),e.varyings.add("vuv0","vec2"),e.vertex.code.add(xn`
      void forwardTextureCoordinates() {
        vuv0 = uv0;
      }
    `)),2===t.attributeTextureCoordinates&&(e.attributes.add("uv0","vec2"),e.varyings.add("vuv0","vec2"),e.attributes.add("uvRegion","vec4"),e.varyings.add("vuvRegion","vec4"),e.vertex.code.add(xn`
      void forwardTextureCoordinates() {
        vuv0 = uv0;
        vuvRegion = uvRegion;
      }
    `)),0===t.attributeTextureCoordinates&&e.vertex.code.add(xn`
      void forwardTextureCoordinates() {}
    `)}function oa(e){e.extensions.add("GL_EXT_shader_texture_lod"),e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(xn`
    #ifndef GL_EXT_shader_texture_lod
      float calcMipMapLevel(const vec2 ddx, const vec2 ddy) {
        float deltaMaxSqr = max(dot(ddx, ddx), dot(ddy, ddy));
        return max(0.0, 0.5 * log2(deltaMaxSqr));
      }
    #endif

    vec4 textureAtlasLookup(sampler2D texture, vec2 textureSize, vec2 textureCoordinates, vec4 atlasRegion) {
      //[umin, vmin, umax, vmax]
      vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
      vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;

      // calculate derivative of continuous texture coordinate
      // to avoid mipmapping artifacts caused by manual wrapping in shader
      // clamp the derivatives to avoid discoloring when zooming out.
      float maxdUV = 0.125; // Emprirically tuned compromise between discoloring and aliasing noise.
      vec2 dUVdx = clamp(dFdx(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
      vec2 dUVdy = clamp(dFdy(textureCoordinates), -maxdUV, maxdUV) * atlasScale;

      #ifdef GL_EXT_shader_texture_lod
        return texture2DGradEXT(texture, uvAtlas, dUVdx, dUVdy);
      #else
        // use bias to compensate for difference in automatic vs desired mipmap level
        vec2 dUVdxAuto = dFdx(uvAtlas);
        vec2 dUVdyAuto = dFdy(uvAtlas);
        float mipMapLevel = calcMipMapLevel(dUVdx * textureSize, dUVdy * textureSize);
        float autoMipMapLevel = calcMipMapLevel(dUVdxAuto * textureSize, dUVdyAuto * textureSize);

        return texture2D(texture, uvAtlas, mipMapLevel - autoMipMapLevel);
      #endif
    }
  `)}function ia(e,t){e.include(ra,t),e.fragment.code.add(xn`
  struct TextureLookupParameter {
    vec2 uv;
    ${t.supportsTextureAtlas?"vec2 size;":""}
  } vtc;
  `),1===t.attributeTextureCoordinates&&e.fragment.code.add(xn`
      vec4 textureLookup(sampler2D tex, TextureLookupParameter params) {
        return texture2D(tex, params.uv);
      }
    `),2===t.attributeTextureCoordinates&&(e.include(oa),e.fragment.code.add(xn`
    vec4 textureLookup(sampler2D tex, TextureLookupParameter params) {
        return textureAtlasLookup(tex, params.size, params.uv, vuvRegion);
      }
    `))}function na(e,t){const r=e.fragment,o=t.hasMetalnessAndRoughnessTexture||t.hasEmissionTexture||t.hasOcclusionTexture;1===t.pbrMode&&o&&e.include(ia,t),2!==t.pbrMode?(0===t.pbrMode&&r.code.add(xn`
      float getBakedOcclusion() { return 1.0; }
  `),1===t.pbrMode&&(r.uniforms.add("emissionFactor","vec3"),r.uniforms.add("mrrFactors","vec3"),r.code.add(xn`
      vec3 mrr;
      vec3 emission;
      float occlusion;
    `),t.hasMetalnessAndRoughnessTexture&&(r.uniforms.add("texMetallicRoughness","sampler2D"),t.supportsTextureAtlas&&r.uniforms.add("texMetallicRoughnessSize","vec2"),r.code.add(xn`
      void applyMetallnessAndRoughness(TextureLookupParameter params) {
        vec3 metallicRoughness = textureLookup(texMetallicRoughness, params).rgb;

        mrr[0] *= metallicRoughness.b;
        mrr[1] *= metallicRoughness.g;
      }`)),t.hasEmissionTexture&&(r.uniforms.add("texEmission","sampler2D"),t.supportsTextureAtlas&&r.uniforms.add("texEmissionSize","vec2"),r.code.add(xn`
      void applyEmission(TextureLookupParameter params) {
        emission *= textureLookup(texEmission, params).rgb;
      }`)),t.hasOcclusionTexture?(r.uniforms.add("texOcclusion","sampler2D"),t.supportsTextureAtlas&&r.uniforms.add("texOcclusionSize","vec2"),r.code.add(xn`
      void applyOcclusion(TextureLookupParameter params) {
        occlusion *= textureLookup(texOcclusion, params).r;
      }

      float getBakedOcclusion() {
        return occlusion;
      }
      `)):r.code.add(xn`
      float getBakedOcclusion() { return 1.0; }
      `),r.code.add(xn`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;
      ${o?"vtc.uv = vuv0;":""}
      ${t.hasMetalnessAndRoughnessTexture?t.supportsTextureAtlas?"vtc.size = texMetallicRoughnessSize; applyMetallnessAndRoughness(vtc);":"applyMetallnessAndRoughness(vtc);":""}
      ${t.hasEmissionTexture?t.supportsTextureAtlas?"vtc.size = texEmissionSize; applyEmission(vtc);":"applyEmission(vtc);":""}
      ${t.hasOcclusionTexture?t.supportsTextureAtlas?"vtc.size = texOcclusionSize; applyOcclusion(vtc);":"applyOcclusion(vtc);":""}
    }
  `))):r.code.add(xn`
      const vec3 mrr = vec3(0.0, 0.6, 0.2);
      const vec3 emission = vec3(0.0);
      float occlusion = 1.0;

      void applyPBRFactors() {}

      float getBakedOcclusion() { return 1.0; }
    `)}function aa(e,t){t.linearDepth?e.vertex.code.add(xn`
    vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
      vec4 eye = view * vec4(pos, 1.0);
      depth = (-eye.z - nearFar[0]) / (nearFar[1] - nearFar[0]) ;
      return proj * eye;
    }
    `):e.vertex.code.add(xn`
    vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
      // Make sure the order of operations is the same as in transformPositionWithDepth.
      return proj * (view * vec4(pos, 1.0));
    }
    `)}ze(0,.6,.2),(na||(na={})).bindUniforms=function(e,t,r=!1){r||(e.setUniform3fv("mrrFactors",t.mrrFactors),e.setUniform3fv("emissionFactor",t.emissiveFactor))};const sa=l.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder");class ca{constructor(){this.includedModules=new Map}include(e,t){this.includedModules.has(e)?this.includedModules.get(e)!==t&&sa.error("Trying to include shader module multiple times with different sets of options."):(this.includedModules.set(e,t),e(this.builder,t))}}class la extends ca{constructor(){super(...arguments),this.vertex=new fa,this.fragment=new fa,this.attributes=new ma,this.varyings=new pa,this.extensions=new ha,this.constants=new va}get builder(){return this}generateSource(e){const t=this.extensions.generateSource(e),r=this.attributes.generateSource(e),o=this.varyings.generateSource(),i="vertex"===e?this.vertex:this.fragment,n=i.uniforms.generateSource(),a=i.code.generateSource(),s="vertex"===e?xa:ga,c=this.constants.generateSource().concat(i.constants.generateSource());return`\n${t.join("\n")}\n\n${s}\n\n${c.join("\n")}\n\n${n.join("\n")}\n\n${r.join("\n")}\n\n${o.join("\n")}\n\n${a.join("\n")}`}}class ua{constructor(){this._entries=new Array,this._set=new Set}add(e,t,r){const o=`${e}_${t}_${r}`;return this._set.has(o)||(this._entries.push([e,t,r]),this._set.add(o)),this}generateSource(){return this._entries.map((e=>{return`uniform ${e[1]} ${e[0]}${t=e[2],t?`[${t}]`:""};`;var t}))}}class da{constructor(){this._entries=new Array}add(e){this._entries.push(e)}generateSource(){return this._entries}}class fa extends ca{constructor(){super(...arguments),this.uniforms=new ua,this.code=new da,this.constants=new va}get builder(){return this}}class ma{constructor(){this._entries=new Array}add(e,t){this._entries.push([e,t])}generateSource(e){return"fragment"===e?[]:this._entries.map((e=>`attribute ${e[1]} ${e[0]};`))}}class pa{constructor(){this._entries=new Array}add(e,t){this._entries.push([e,t])}generateSource(){return this._entries.map((e=>`varying ${e[1]} ${e[0]};`))}}class ha{constructor(){this._entries=new Set}add(e){this._entries.add(e)}generateSource(e){const t="vertex"===e?ha.ALLOWLIST_VERTEX:ha.ALLOWLIST_FRAGMENT;return Array.from(this._entries).filter((e=>t.includes(e))).map((e=>`#extension ${e} : enable`))}}ha.ALLOWLIST_FRAGMENT=["GL_EXT_shader_texture_lod","GL_OES_standard_derivatives"],ha.ALLOWLIST_VERTEX=[];class va{constructor(){this._entries=[]}add(e,t,r){let o="ERROR_CONSTRUCTOR_STRING";switch(t){case"float":o=va.numberToFloatStr(r);break;case"int":o=va.numberToIntStr(r);break;case"bool":o=r.toString();break;case"vec2":o=`vec2(${va.numberToFloatStr(r[0])},                            ${va.numberToFloatStr(r[1])})`;break;case"vec3":o=`vec3(${va.numberToFloatStr(r[0])},                            ${va.numberToFloatStr(r[1])},                            ${va.numberToFloatStr(r[2])})`;break;case"vec4":o=`vec4(${va.numberToFloatStr(r[0])},                            ${va.numberToFloatStr(r[1])},                            ${va.numberToFloatStr(r[2])},                            ${va.numberToFloatStr(r[3])})`;break;case"ivec2":o=`ivec2(${va.numberToIntStr(r[0])},                             ${va.numberToIntStr(r[1])})`;break;case"ivec3":o=`ivec3(${va.numberToIntStr(r[0])},                             ${va.numberToIntStr(r[1])},                             ${va.numberToIntStr(r[2])})`;break;case"ivec4":o=`ivec4(${va.numberToIntStr(r[0])},                             ${va.numberToIntStr(r[1])},                             ${va.numberToIntStr(r[2])},                             ${va.numberToIntStr(r[3])})`;break;case"bvec2":o=`bvec2(${r[0].toString()},                             ${r[1].toString()})`;break;case"bvec3":o=`bvec3(${r[0].toString()},                             ${r[1].toString()},                             ${r[2].toString()})`;break;case"bvec4":o=`bvec4(${r[0].toString()},                             ${r[1].toString()},                             ${r[2].toString()},                             ${r[3].toString()})`;break;case"mat2":case"mat3":case"mat4":o=`${t}(${Array.prototype.map.call(r,(e=>va.numberToFloatStr(e))).join(", ")})`}return this._entries.push(`const ${t} ${e} = ${o};`),this}static numberToIntStr(e){return e.toFixed(0)}static numberToFloatStr(e){return Number.isInteger(e)?e.toFixed(1):e.toString()}generateSource(){return Array.from(this._entries)}}const ga="#ifdef GL_FRAGMENT_PRECISION_HIGH\n  precision highp float;\n  precision highp sampler2D;\n#else\n  precision mediump float;\n  precision mediump sampler2D;\n#endif",xa="precision highp float;\nprecision highp sampler2D;";function ba(e){e.include(jn),e.code.add(xn`
    float linearDepthFromFloat(float depth, vec2 nearFar) {
      return -(depth * (nearFar[1] - nearFar[0]) + nearFar[0]);
    }

    float linearDepthFromTexture(sampler2D depthTex, vec2 uv, vec2 nearFar) {
      return linearDepthFromFloat(rgba2float(texture2D(depthTex, uv)), nearFar);
    }
  `)}function ya(e,t){0===t.output&&t.receiveShadows?(e.varyings.add("linearDepth","float"),e.vertex.code.add(xn`
      void forwardLinearDepth() { linearDepth = gl_Position.w; }
    `)):1===t.output||3===t.output?(e.varyings.add("linearDepth","float"),e.vertex.uniforms.add("cameraNearFar","vec2"),e.vertex.code.add(xn`
      void forwardLinearDepth() {
        linearDepth = (-position_view().z - cameraNearFar[0]) / (cameraNearFar[1] - cameraNearFar[0]);
      }
    `)):e.vertex.code.add(xn`
      void forwardLinearDepth() {}
    `)}function wa(e){e.vertex.code.add(xn`
    const float PI = 3.141592653589793;
  `),e.fragment.code.add(xn`
    const float PI = 3.141592653589793;
    const float LIGHT_NORMALIZATION = 1.0 / PI;
    const float INV_PI = 0.3183098861837907;
    const float HALF_PI = 1.570796326794897;
    `)}function Ta(e){const t=e.fragment.code;t.add(xn`
    vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
    {
      return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
    }
    `),t.add(xn`
    float integratedRadiance(float cosTheta2, float roughness)
    {
      return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
    }
    `),t.add(xn`
    vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
    {
      float cosTheta2 = 1.0 - RdotNG * RdotNG;
      float intRadTheta = integratedRadiance(cosTheta2, roughness);

      // Calculate the integrated directional radiance of the ground and the sky
      float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
      float sky = 2.0 - ground;
      return (ground * ambientGround + sky * ambientSky) * 0.5;
    }
    `)}function Sa(e,t){const r=e.fragment.code;e.include(wa),3===t.pbrMode||4===t.pbrMode?(r.add(xn`
    struct PBRShadingWater
    {
        float NdotL;   // cos angle between normal and light direction
        float NdotV;   // cos angle between normal and view direction
        float NdotH;   // cos angle between normal and half vector
        float VdotH;   // cos angle between view direction and half vector
        float LdotH;   // cos angle between light direction and half vector
        float VdotN;   // cos angle between view direction and normal vector
    };

    float dtrExponent = ${t.useCustomDTRExponentForWater?"2.2":"2.0"};
    `),r.add(xn`
    vec3 fresnelReflection(float angle, vec3 f0, float f90) {
      return f0 + (f90 - f0) * pow(1.0 - angle, 5.0);
    }
    `),r.add(xn`
    float normalDistributionWater(float NdotH, float roughness)
    {
      float r2 = roughness * roughness;
      float NdotH2 = NdotH * NdotH;
      float denom = pow((NdotH2 * (r2 - 1.0) + 1.0), dtrExponent) * PI;
      return r2 / denom;
    }
    `),r.add(xn`
    float geometricOcclusionKelemen(float LoH)
    {
        return 0.25 / (LoH * LoH);
    }
    `),r.add(xn`
    vec3 brdfSpecularWater(in PBRShadingWater props, float roughness, vec3 F0, float F0Max)
    {
      vec3  F = fresnelReflection(props.VdotH, F0, F0Max);
      float dSun = normalDistributionWater(props.NdotH, roughness);
      float V = geometricOcclusionKelemen(props.LdotH);

      float diffusionSunHaze = mix(roughness + 0.045, roughness + 0.385, 1.0 - props.VdotH);
      float strengthSunHaze  = 1.2;
      float dSunHaze = normalDistributionWater(props.NdotH, diffusionSunHaze)*strengthSunHaze;

      return ((dSun + dSunHaze) * V) * F;
    }

    vec3 tonemapACES(const vec3 x) {
      return (x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14);
    }
    `)):1!==t.pbrMode&&2!==t.pbrMode||(e.include(Ta),r.add(xn`
    struct PBRShadingInfo
    {
        float NdotL;                  // cos angle between normal and light direction
        float NdotV;                  // cos angle between normal and view direction
        float NdotH;                  // cos angle between normal and half vector
        float VdotH;                  // cos angle between view direction and half vector
        float LdotH;                  // cos angle between view light direction and half vector
        float NdotNG;                 // cos angle between normal and normal of the ground
        float RdotNG;                 // cos angle between view direction reflected of the normal and normal of the ground
        float NdotAmbDir;             // cos angle between view direction and the fill light in ambient illumination
        float NdotH_Horizon;          // cos angle between normal and half vector defined with horizon illumination
        vec3 skyRadianceToSurface;         // integrated radiance of the sky based on the surface roughness (used for specular reflection)
        vec3 groundRadianceToSurface;      // integrated radiance of the ground based on the surface roughness (used for specular reflection)
        vec3 skyIrradianceToSurface;       // irradiance of the sky (used for diffuse reflection)
        vec3 groundIrradianceToSurface;    // irradiance of the ground (used for diffuse reflection)

        float averageAmbientRadiance;      // average ambient radiance used to deduce black level in gamut mapping
        float ssao;                   // ssao coefficient
        vec3 albedoLinear;            // linear color of the albedo
        vec3 f0;                      // fresnel value at normal incident light
        vec3 f90;                     // fresnel value at 90o of incident light

        vec3 diffuseColor;            // diffuse color of the material used in environment illumination
        float metalness;              // metalness of the material
        float roughness;              // roughness of the material
    };
    `),r.add(xn`
    float normalDistribution(float NdotH, float roughness)
    {
        float a = NdotH * roughness;
        float b = roughness / (1.0 - NdotH * NdotH + a * a);
        return b * b * INV_PI;
    }
    `),r.add(xn`
    const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
    const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
    const vec2 c2 = vec2(-1.04, 1.04);

    vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
        vec4 r = roughness * c0 + c1;
        float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
        return c2 * a004 + r.zw;
    }
    `),r.add(xn`
    vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
      vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
      vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);

      // From diffuse illumination calculate reflected color
      vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;

      // From specular illumination calculate reflected color
      vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
      vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
      vec3 specularComponent = specularColor * indirectSpecular;

      return (diffuseComponent + specularComponent);
    }
    `),r.add(xn`
    float gamutMapChanel(float x, vec2 p){
      return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
    }`),r.add(xn`
    vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
      vec3 outColor;
      vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
      outColor.x = gamutMapChanel(inColor.x, p) ;
      outColor.y = gamutMapChanel(inColor.y, p) ;
      outColor.z = gamutMapChanel(inColor.z, p) ;
      return outColor;
    }
    `))}function _a(e){e.vertex.code.add(xn`
    vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
      vec3 camToVert = posWorld - camPosWorld;

      bool isBackface = dot(camToVert, normalWorld) > 0.0;
      if (isBackface) {
        posClip.z += 0.0000003 * posClip.w;
      }
      return posClip;
    }
  `)}function Ca(e){const t=xn`
    vec3 decodeNormal(vec2 f) {
      float z = 1.0 - abs(f.x) - abs(f.y);
      return vec3(f + sign(f) * min(z, 0.0), z);
    }
  `;e.fragment.code.add(t),e.vertex.code.add(t)}function Ma(e,t){0===t.normalType&&(e.attributes.add("normal","vec3"),e.vertex.code.add(xn`
      vec3 normalModel() {
        return normal;
      }
    `)),1===t.normalType&&(e.include(Ca),e.attributes.add("normalCompressed","vec2"),e.vertex.code.add(xn`
      vec3 normalModel() {
        return decodeNormal(normalCompressed);
      }
    `)),3===t.normalType&&(e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(xn`
      vec3 screenDerivativeNormal(vec3 positionView) {
        return normalize(cross(dFdx(positionView), dFdy(positionView)));
      }
    `))}function Aa(e){e.attributes.add("position","vec3"),e.vertex.code.add(xn`
    vec3 positionModel() { return position; }
  `)}function Pa(e){e.vertex.code.add(xn`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${xn.int(1)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${xn.int(3)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${xn.int(4)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${xn.int(1)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}function Oa(e,t){t.symbolColor?(e.include(Pa),e.attributes.add("symbolColor","vec4"),e.varyings.add("colorMixMode","mediump float")):e.fragment.uniforms.add("colorMixMode","int"),t.symbolColor?e.vertex.code.add(xn`
    int symbolColorMixMode;

    vec4 getSymbolColor() {
      return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
    }

    void forwardColorMixMode() {
      colorMixMode = float(symbolColorMixMode) + 0.5;
    }
  `):e.vertex.code.add(xn`
    vec4 getSymbolColor() { return vec4(1.0); }
    void forwardColorMixMode() {}
    `)}function Ia(e,t){t.attributeColor?(e.attributes.add("color","vec4"),e.varyings.add("vColor","vec4"),e.vertex.code.add(xn`
      void forwardVertexColor() { vColor = color; }
    `),e.vertex.code.add(xn`
      void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }
    `)):e.vertex.code.add(xn`
      void forwardVertexColor() {}
      void forwardNormalizedVertexColor() {}
    `)}function Fa(e,t){e.include(Aa),e.vertex.include(Qn,t),e.varyings.add("vPositionWorldCameraRelative","vec3"),e.varyings.add("vPosition_view","vec3"),e.vertex.uniforms.add("uTransform_WorldFromModel_RS","mat3"),e.vertex.uniforms.add("uTransform_WorldFromModel_TH","vec3"),e.vertex.uniforms.add("uTransform_WorldFromModel_TL","vec3"),e.vertex.uniforms.add("uTransform_WorldFromView_TH","vec3"),e.vertex.uniforms.add("uTransform_WorldFromView_TL","vec3"),e.vertex.uniforms.add("uTransform_ViewFromCameraRelative_RS","mat3"),e.vertex.uniforms.add("uTransform_ProjFromView","mat4"),e.vertex.code.add(xn`
    // compute position in world space orientation, but relative to the camera position
    vec3 positionWorldCameraRelative() {
      vec3 rotatedModelPosition = uTransform_WorldFromModel_RS * positionModel();

      vec3 transform_CameraRelativeFromModel = dpAdd(
        uTransform_WorldFromModel_TL,
        uTransform_WorldFromModel_TH,
        -uTransform_WorldFromView_TL,
        -uTransform_WorldFromView_TH
      );

      return transform_CameraRelativeFromModel + rotatedModelPosition;
    }

    // position in view space, that is relative to the camera position and orientation
    vec3 position_view() {
      return uTransform_ViewFromCameraRelative_RS * positionWorldCameraRelative();
    }

    // compute gl_Position and forward related varyings to fragment shader
    void forwardPosition() {
      vPositionWorldCameraRelative = positionWorldCameraRelative();
      vPosition_view = position_view();
      gl_Position = uTransform_ProjFromView * vec4(vPosition_view, 1.0);
    }

    vec3 positionWorld() {
      return uTransform_WorldFromView_TL + vPositionWorldCameraRelative;
    }
  `),e.fragment.uniforms.add("uTransform_WorldFromView_TL","vec3"),e.fragment.code.add(xn`
    vec3 positionWorld() {
      return uTransform_WorldFromView_TL + vPositionWorldCameraRelative;
    }
  `)}function Ra(e,t){0===t.normalType||1===t.normalType?(e.include(Ma,t),e.varyings.add("vNormalWorld","vec3"),e.varyings.add("vNormalView","vec3"),e.vertex.uniforms.add("uTransformNormal_GlobalFromModel","mat3"),e.vertex.uniforms.add("uTransformNormal_ViewFromGlobal","mat3"),e.vertex.code.add(xn`
      void forwardNormal() {
        vNormalWorld = uTransformNormal_GlobalFromModel * normalModel();
        vNormalView = uTransformNormal_ViewFromGlobal * vNormalWorld;
      }
    `)):2===t.normalType?(e.include(Fa,t),e.varyings.add("vNormalWorld","vec3"),e.vertex.code.add(xn`
    void forwardNormal() {
      vNormalWorld = ${1===t.viewingMode?xn`normalize(vPositionWorldCameraRelative);`:xn`vec3(0.0, 0.0, 1.0);`}
    }
    `)):e.vertex.code.add(xn`
      void forwardNormal() {}
    `)}function La(e,t){e.fragment.include(jn),3===t.output?(e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(xn`
      float _calculateFragDepth(const in float depth) {
        // calc polygon offset
        const float SLOPE_SCALE = 2.0;
        const float BIAS = 2.0 * .000015259;    // 1 / (2^16 - 1)
        float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
        float result = depth + SLOPE_SCALE * m + BIAS;
        return clamp(result, .0, .999999);
      }

      void outputDepth(float _linearDepth) {
        gl_FragColor = float2rgba(_calculateFragDepth(_linearDepth));
      }
    `)):1===t.output&&e.fragment.code.add(xn`
      void outputDepth(float _linearDepth) {
        gl_FragColor = float2rgba(_linearDepth);
      }
    `)}function Ba(e,t){const r=e.vertex.code,o=e.fragment.code;1!==t.output&&3!==t.output||(e.include(aa,{linearDepth:!0}),e.include(ra,t),e.include(En,t),e.include(La,t),e.include(Fn,t),e.vertex.uniforms.add("cameraNearFar","vec2"),e.varyings.add("depth","float"),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),r.add(xn`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPositionWithDepth(proj, view, vpos, cameraNearFar, depth);
        forwardTextureCoordinates();
      }
    `),e.include(yn,t),o.add(xn`
      void main(void) {
        discardBySlice(vpos);
        ${t.hasColorTexture?xn`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputDepth(depth);
      }
    `)),2===t.output&&(e.include(aa,{linearDepth:!1}),e.include(Ma,t),e.include(Ra,t),e.include(ra,t),e.include(En,t),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),e.vertex.uniforms.add("viewNormal","mat4"),e.varyings.add("vPositionView","vec3"),r.add(xn`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        ${0===t.normalType?xn`
        vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:""}
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, vpos);
        forwardTextureCoordinates();
      }
    `),e.include(Fn,t),e.include(yn,t),o.add(xn`
      void main() {
        discardBySlice(vpos);
        ${t.hasColorTexture?xn`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}

        ${3===t.normalType?xn`
            vec3 normal = screenDerivativeNormal(vPositionView);`:xn`
            vec3 normal = normalize(vNormalWorld);
            if (gl_FrontFacing == false) normal = -normal;`}
        gl_FragColor = vec4(vec3(0.5) + 0.5 * normal, 1.0);
      }
    `)),4===t.output&&(e.include(aa,{linearDepth:!1}),e.include(ra,t),e.include(En,t),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),r.add(xn`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, vpos);
        forwardTextureCoordinates();
      }
    `),e.include(Fn,t),e.include(yn,t),e.include(Dn),o.add(xn`
      void main() {
        discardBySlice(vpos);
        ${t.hasColorTexture?xn`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputHighlight();
      }
    `))}function za(e,t){const r=e.fragment;r.uniforms.add("normalTexture","sampler2D"),r.uniforms.add("normalTextureSize","vec2"),t.vertexTangets?(e.attributes.add("tangent","vec4"),e.varyings.add("vTangent","vec4"),2===t.doubleSidedMode?r.code.add(xn`
      mat3 computeTangentSpace(vec3 normal) {
        float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
        vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
        vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
        return mat3(tangent, bitangent, normal);
      }
    `):r.code.add(xn`
      mat3 computeTangentSpace(vec3 normal) {
        float tangentHeadedness = vTangent.w;
        vec3 tangent = normalize(vTangent.xyz);
        vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
        return mat3(tangent, bitangent, normal);
      }
    `)):(e.extensions.add("GL_OES_standard_derivatives"),r.code.add(xn`
    mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {

      vec3 Q1 = dFdx(pos);
      vec3 Q2 = dFdy(pos);

      vec2 stx = dFdx(st);
      vec2 sty = dFdy(st);

      float det = stx.t * sty.s - sty.t * stx.s;

      vec3 T = stx.t * Q2 - sty.t * Q1; // compute tangent
      T = T - normal * dot(normal, T); // orthogonalize tangent
      T *= inversesqrt(max(dot(T,T), 1.e-10)); // "soft" normalize - goes to 0 when T goes to 0
      vec3 B = sign(det) * cross(normal, T); // assume normal is normalized, B has the same lenght as B
      return mat3(T, B, normal); // T and B go to 0 when the tangent space is not well defined by the uv coordinates
    }
  `)),0!==t.attributeTextureCoordinates&&(e.include(ia,t),r.code.add(xn`
    vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
      vtc.uv = uv;
      ${t.supportsTextureAtlas?"vtc.size = normalTextureSize;":""}
      vec3 rawNormal = textureLookup(normalTexture, vtc).rgb * 2.0 - 1.0;
      return tangentSpace * rawNormal;
    }
  `))}function Da(e,t){const r=e.fragment;t.receiveAmbientOcclusion?(r.uniforms.add("ssaoTex","sampler2D"),r.uniforms.add("viewportPixelSz","vec4"),r.code.add(xn`
      float evaluateAmbientOcclusion() {
        return 1.0 - texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
      }

      float evaluateAmbientOcclusionInverse() {
        float ssao = texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
        return viewportPixelSz.z < 0.0 ? 1.0 : ssao;
      }
    `)):r.code.add(xn`
      float evaluateAmbientOcclusion() { return 0.0; } // no occlusion
      float evaluateAmbientOcclusionInverse() { return 1.0; }
    `)}function Ea(e,t){const r=e.fragment,o=void 0!==t.lightingSphericalHarmonicsOrder?t.lightingSphericalHarmonicsOrder:2;0===o?(r.uniforms.add("lightingAmbientSH0","vec3"),r.code.add(xn`
      vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
        vec3 ambientLight = 0.282095 * lightingAmbientSH0;
        return ambientLight * (1.0 - ambientOcclusion);
      }
    `)):1===o?(r.uniforms.add("lightingAmbientSH_R","vec4"),r.uniforms.add("lightingAmbientSH_G","vec4"),r.uniforms.add("lightingAmbientSH_B","vec4"),r.code.add(xn`
      vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
        vec4 sh0 = vec4(
          0.282095,
          0.488603 * normal.x,
          0.488603 * normal.z,
          0.488603 * normal.y
        );
        vec3 ambientLight = vec3(
          dot(lightingAmbientSH_R, sh0),
          dot(lightingAmbientSH_G, sh0),
          dot(lightingAmbientSH_B, sh0)
        );
        return ambientLight * (1.0 - ambientOcclusion);
      }
    `)):2===o&&(r.uniforms.add("lightingAmbientSH0","vec3"),r.uniforms.add("lightingAmbientSH_R1","vec4"),r.uniforms.add("lightingAmbientSH_G1","vec4"),r.uniforms.add("lightingAmbientSH_B1","vec4"),r.uniforms.add("lightingAmbientSH_R2","vec4"),r.uniforms.add("lightingAmbientSH_G2","vec4"),r.uniforms.add("lightingAmbientSH_B2","vec4"),r.code.add(xn`
      vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
        vec3 ambientLight = 0.282095 * lightingAmbientSH0;

        vec4 sh1 = vec4(
          0.488603 * normal.x,
          0.488603 * normal.z,
          0.488603 * normal.y,
          1.092548 * normal.x * normal.y
        );
        vec4 sh2 = vec4(
          1.092548 * normal.y * normal.z,
          0.315392 * (3.0 * normal.z * normal.z - 1.0),
          1.092548 * normal.x * normal.z,
          0.546274 * (normal.x * normal.x - normal.y * normal.y)
        );
        ambientLight += vec3(
          dot(lightingAmbientSH_R1, sh1),
          dot(lightingAmbientSH_G1, sh1),
          dot(lightingAmbientSH_B1, sh1)
        );
        ambientLight += vec3(
          dot(lightingAmbientSH_R2, sh2),
          dot(lightingAmbientSH_G2, sh2),
          dot(lightingAmbientSH_B2, sh2)
        );
        return ambientLight * (1.0 - ambientOcclusion);
      }
    `),1!==t.pbrMode&&2!==t.pbrMode||r.code.add(xn`
        const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);

        vec3 calculateAmbientRadiance(float ambientOcclusion)
        {
          vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
          return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
        }
      `))}function Na(e){const t=e.fragment;t.uniforms.add("lightingMainDirection","vec3"),t.uniforms.add("lightingMainIntensity","vec3"),t.uniforms.add("lightingFixedFactor","float"),t.code.add(xn`
    vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
      float dotVal = clamp(-dot(normal_global, lightingMainDirection), 0.0, 1.0);

      // move lighting towards (1.0, 1.0, 1.0) if requested
      dotVal = mix(dotVal, 1.0, lightingFixedFactor);

      return lightingMainIntensity * ((1.0 - shadowing) * dotVal);
    }
  `)}function Ua(e,t){const r=e.fragment;e.include(Na),e.include(Da,t),0!==t.pbrMode&&e.include(Sa,t),e.include(Ea,t),t.receiveShadows&&e.include(qn,t),r.uniforms.add("lightingGlobalFactor","float"),r.uniforms.add("ambientBoostFactor","float"),e.include(wa),r.code.add(xn`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${0===t.pbrMode?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),t.useOldSceneLightInterface?r.code.add(xn`
    vec3 evaluateSceneLightingExt(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight) {
      // evaluate the main light
      #if defined(TREE_RENDERING)
        // Special case for tree rendering:
        // We shift the Lambert lobe to the back, allowing it to reach part of the hemisphere
        // facing away from the light. The idea is to get an effect where light is transmitted
        // through the tree.
        float minDot = -0.5;
        float dotRange = 1.0 - minDot;
        float dotNormalization = 0.66; // guessed & hand tweaked value, for an exact value we could precompute an integral over the sphere

        float dotVal = dotNormalization * (clamp(-dot(normal, lightingMainDirection), 1.0 - dotRange, 1.0) - minDot) * (1.0 / dotRange);
      #else
        float dotVal = clamp(-dot(normal, lightingMainDirection), 0.0, 1.0);
      #endif

      // move lighting towards (1.0, 1.0, 1.0) if requested
      dotVal = mix(dotVal, 1.0, lightingFixedFactor);

      vec3 mainLight = (1.0 - shadow) * lightingMainIntensity * dotVal;
      vec3 ambientLight = calculateAmbientIrradiance(normal, ssao);

      // inverse gamma correction on the albedo color
      vec3 albedoGammaC = pow(albedo, vec3(GAMMA_SRGB));

      // physically correct BRDF normalizes by PI
      vec3 totalLight = mainLight + ambientLight + additionalLight;
      totalLight = min(totalLight, vec3(PI));
      vec3 outColor = vec3((albedoGammaC / PI) * (totalLight));

      // apply gamma correction to the computed color
      outColor = pow(outColor, vec3(INV_GAMMA_SRGB));

      return outColor;
    }
  `):(1===t.viewingMode?r.code.add(xn`
      float _oldHeuristicLighting(vec3 vPosWorld) {
        vec3 shadingNormalWorld = normalize(vPosWorld);
        float vndl = -dot(shadingNormalWorld, lightingMainDirection);

        return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
      }
    `):r.code.add(xn`
      float _oldHeuristicLighting(vec3 vPosWorld) {
        float vndl = -dot(vec3(0.0, 0.0, 1.0), lightingMainDirection);
        return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
      }
    `),r.code.add(xn`
      vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
        float additionalAmbientScale = _oldHeuristicLighting(vPosWorld);
        return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * lightingMainIntensity;
      }
    `),0===t.pbrMode||4===t.pbrMode?r.code.add(xn`
      vec3 evaluateSceneLighting(vec3 normalWorld, vec3 baseColor, float mainLightShadow, float ambientOcclusion, vec3 additionalLight)
      {
        vec3 mainLighting = evaluateMainLighting(normalWorld, mainLightShadow);
        vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ambientOcclusion);
        // inverse gamma correction on the base color
        vec3 baseColorLinear = pow(baseColor, vec3(GAMMA_SRGB));

        // physically correct BRDF normalizes by PI
        vec3 totalLight = mainLighting + ambientLighting + additionalLight;
        totalLight = min(totalLight, vec3(PI));
        vec3 outColor = vec3((baseColorLinear / PI) * totalLight);

        // apply gamma correction to the computed color
        outColor = pow(outColor, vec3(INV_GAMMA_SRGB));

        return outColor;
      }
      `):1!==t.pbrMode&&2!==t.pbrMode||(r.code.add(xn`
      const float fillLightIntensity = 0.25;
      const float horizonLightDiffusion = 0.4;
      const float additionalAmbientIrradianceFactor = 0.02;

      vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec3 _emission, float additionalAmbientIrradiance)
      {
        // Calculate half vector between view and light direction
        vec3 viewDirection = -viewDir;
        vec3 mainLightDirection = -lightingMainDirection;
        vec3 h = normalize(viewDirection + mainLightDirection);

        PBRShadingInfo inputs;
        inputs.NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
        inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
        inputs.NdotH = clamp(dot(normal, h), 0.0, 1.0);
        inputs.VdotH = clamp(dot(viewDirection, h), 0.0, 1.0);
        inputs.NdotNG = clamp(dot(normal, normalGround), -1.0, 1.0);
        vec3 reflectedView = normalize(reflect(viewDirection, normal));
        inputs.RdotNG = clamp(dot(reflectedView, normalGround), -1.0, 1.0);

        inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
        inputs.ssao = ssao;

        inputs.metalness = mrr[0];
        inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);
      `),r.code.add(xn`
        inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
        inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0)); // more accurate then using  f90 = 1.0
        inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);
      `),r.code.add(xn`
        vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
        ambientDir = ambientDir != vec3(0.0)? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));

        inputs.NdotAmbDir = abs(dot(normal, ambientDir));

        // Calculate the irradiance components: sun, fill lights and the sky.
        vec3 mainLightIrradianceComponent  = inputs.NdotL * (1.0 - shadow) * lightingMainIntensity;
        vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * lightingMainIntensity * fillLightIntensity;
        // calculateAmbientIrradiance for localView and additionalLight for gloabalView
        vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;

        // Assemble the overall irradiance of the sky that illuminates the surface
        inputs.skyIrradianceToSurface    = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
        // Assemble the overall irradiance of the ground that illuminates the surface. for this we use the simple model that changes only the sky irradiance by the groundReflectance
        inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
      `),r.code.add(xn`
        vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
        vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
        inputs.NdotH_Horizon = dot(normal, horizonRingH);

        vec3 mainLightRadianceComponent  = normalDistribution(inputs.NdotH, inputs.roughness) * lightingMainIntensity * (1.0 - shadow);
        vec3 horizonLightRadianceComponent = normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * lightingMainIntensity * fillLightIntensity;
        vec3 ambientLightRadianceComponent = calculateAmbientRadiance(ssao) + additionalLight; // calculateAmbientRadiance for localView and additionalLight for gloabalView

        // Assemble the overall radiance of the sky that illuminates the surface
        inputs.skyRadianceToSurface    =  ambientLightRadianceComponent + mainLightRadianceComponent + horizonLightRadianceComponent;
        // Assemble the overall radiance of the ground that illuminates the surface. for this we use the simple model that changes only the sky radince by the groundReflectance
        inputs.groundRadianceToSurface = GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) + mainLightRadianceComponent;

        // Calculate average ambient radiance - this is used int the gamut mapping part to deduce the black level that is soft compressed
        inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);
        `),r.code.add(xn`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${2===t.pbrMode?xn`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`:xn`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `)))}function Va(e,t){const r=e.fragment;r.code.add(xn`
    struct ShadingNormalParameters {
      vec3 normalView;
      vec3 viewDirection;
    } shadingParams;
    `),1===t.doubleSidedMode?r.code.add(xn`
      vec3 shadingNormal(ShadingNormalParameters params) {
        return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
      }
    `):2===t.doubleSidedMode?r.code.add(xn`
      vec3 shadingNormal(ShadingNormalParameters params) {
        return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
      }
    `):r.code.add(xn`
      vec3 shadingNormal(ShadingNormalParameters params) {
        return normalize(params.normalView);
      }
    `)}function Ha(e,t){xn`
  /*
  *  ${t.name}
  *  ${0===t.output?"RenderOutput: Color":1===t.output?"RenderOutput: Depth":3===t.output?"RenderOutput: Shadow":2===t.output?"RenderOutput: Normal":4===t.output?"RenderOutput: Highlight":""}
  */
  `}function Ga(e){e.code.add(xn`
    vec4 premultiplyAlpha(vec4 v) {
      return vec4(v.rgb * v.a, v.a);
    }

    // Note: the min in the last line has been added to fix an instability in chrome.
    // See https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/23911
    // With proper floating point handling, the value could never be >1.
    vec3 rgb2hsv(vec3 c) {
      vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
      vec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);
      vec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);

      float d = q.x - min(q.w, q.y);
      float e = 1.0e-10;
      return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), min(d / (q.x + e), 1.0), q.x);
    }

    vec3 hsv2rgb(vec3 c) {
      vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
      vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
      return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
    }

    float rgb2v(vec3 c) {
      return max(c.x, max(c.y, c.z));
    }
  `)}function ka(e){e.include(Ga),e.code.add(xn`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${xn.int(1)}) {
        return allMixed;
      }
      else if (mode == ${xn.int(2)}) {
        return internalMixed;
      }
      else if (mode == ${xn.int(3)}) {
        return externalColor;
      }
      else {
        // tint (or something invalid)
        float vIn = rgb2v(internalMixed);
        vec3 hsvTint = rgb2hsv(externalColor);
        vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
        return hsv2rgb(hsvOut);
      }
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${xn.int(2)}) {
        return internalMixed;
      }
      else if (mode == ${xn.int(3)}) {
        return externalOpacity;
      }
      else {
        // multiply or tint (or something invalid)
        return allMixed;
      }
    }
  `)}function $a(e){const t=new la,r=t.vertex.code,o=t.fragment.code;return t.include(Ha,{name:"Default Material Shader",output:e.output}),t.vertex.uniforms.add("proj","mat4").add("view","mat4").add("camPos","vec3").add("localOrigin","vec3"),t.include(Aa),t.varyings.add("vpos","vec3"),t.include(En,e),t.include(Zn,e),t.include(Un,e),0!==e.output&&7!==e.output||(t.include(Ma,e),t.include(aa,{linearDepth:!1}),0===e.normalType&&e.offsetBackfaces&&t.include(_a),t.include(za,e),t.include(Ra,e),e.instancedColor&&t.attributes.add("instanceColor","vec4"),t.varyings.add("localvpos","vec3"),t.include(ra,e),t.include(ya,e),t.include(Oa,e),t.include(Ia,e),t.vertex.uniforms.add("externalColor","vec4"),t.varyings.add("vcolorExt","vec4"),e.multipassTerrainEnabled&&t.varyings.add("depth","float"),r.add(xn`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${e.instancedColor?"vcolorExt *= instanceColor;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${xn.float(.001)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        }
        else {
          vpos = calculateVPos();
          localvpos = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${0===e.normalType?xn`
          vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${e.vertexTangets?"vTangent = dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, vpos);
          ${0===e.normalType&&e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, camPos);":""}
        }

        ${e.multipassTerrainEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}
        forwardLinearDepth();
        forwardTextureCoordinates();
      }
    `)),7===e.output&&(t.include(Fn,e),t.include(yn,e),e.multipassTerrainEnabled&&(t.fragment.include(ba),t.include(Hn,e)),t.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("opacity","float").add("layerOpacity","float"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.fragment.include(ka),o.add(xn`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${e.hasColorTexture?xn`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:xn`vec4 texColor = vec4(1.0);`}
        ${e.attributeColor?xn`
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:xn`
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        gl_FragColor = vec4(opacity_);
      }
    `)),0===e.output&&(t.include(Fn,e),t.include(Ua,e),t.include(Da,e),t.include(yn,e),e.receiveShadows&&t.include(qn,e),e.multipassTerrainEnabled&&(t.fragment.include(ba),t.include(Hn,e)),t.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("ambient","vec3").add("diffuse","vec3").add("opacity","float").add("layerOpacity","float"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.include(na,e),t.include(Sa,e),t.fragment.include(ka),t.include(Va,e),o.add(xn`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${e.hasColorTexture?xn`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:xn`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - camPos);
        ${3===e.normalType?xn`
        vec3 normal = screenDerivativeNormal(localvpos);`:xn`
        shadingParams.normalView = vNormalWorld;
        vec3 normal = shadingNormal(shadingParams);`}
        ${1===e.pbrMode?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = _oldHeuristicLighting(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${e.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":1===e.viewingMode?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${e.attributeColor?xn`
        vec3 albedo_ = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:xn`
        vec3 albedo_ = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        ${e.hasNormalTexture?xn`
              mat3 tangentSpace = ${e.vertexTangets?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
              vec3 shadedNormal = computeTextureNormal(tangentSpace, vuv0);`:"vec3 shadedNormal = normal;"}
        ${1===e.pbrMode||2===e.pbrMode?1===e.viewingMode?xn`vec3 normalGround = normalize(vpos + localOrigin);`:xn`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:xn``}
        ${1===e.pbrMode||2===e.pbrMode?xn`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
            vec3 shadedColor = evaluateSceneLightingPBR(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:"vec3 shadedColor = evaluateSceneLighting(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight);"}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.OITEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),t.include(Ba,e),t}!function(e){e.ModelTransform=class{constructor(){this.worldFromModel_RS=De(),this.worldFromModel_TH=d(),this.worldFromModel_TL=d()}};e.ViewProjectionTransform=class{constructor(){this.worldFromView_TH=d(),this.worldFromView_TL=d(),this.viewFromCameraRelative_RS=De(),this.projFromView=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}},e.bindModelTransform=function(e,t){e.setUniformMatrix3fv("uTransform_WorldFromModel_RS",t.worldFromModel_RS),e.setUniform3fv("uTransform_WorldFromModel_TH",t.worldFromModel_TH),e.setUniform3fv("uTransform_WorldFromModel_TL",t.worldFromModel_TL)},e.bindViewProjTransform=function(e,t){e.setUniform3fv("uTransform_WorldFromView_TH",t.worldFromView_TH),e.setUniform3fv("uTransform_WorldFromView_TL",t.worldFromView_TL),e.setUniformMatrix4fv("uTransform_ProjFromView",t.projFromView),e.setUniformMatrix3fv("uTransform_ViewFromCameraRelative_RS",t.viewFromCameraRelative_RS)}}(Fa||(Fa={})),(Ra||(Ra={})).bindUniforms=function(e,t){e.setUniformMatrix4fv("viewNormal",t)};var ja=Object.freeze({__proto__:null,build:$a});class qa extends class{constructor(e,t){t&&(this._config=t.snapshot()),this._program=this.initializeProgram(e),e.commonUniformStore&&(this._commonUniformStore=e.commonUniformStore,this._commonUniformStore.subscribeProgram(this._program)),this._pipeline=this.initializePipeline(e)}dispose(){this._program&&(this._commonUniformStore&&this._commonUniformStore.unsubscribeProgram(this._program),this._program.dispose(),this._program=null)}reload(e){this._program&&(this._commonUniformStore&&this._commonUniformStore.unsubscribeProgram(this._program),this._program.dispose()),this._program=this.initializeProgram(e),this._commonUniformStore&&this._commonUniformStore.subscribeProgram(this._program)}get program(){return this._program}get pipeline(){return this._pipeline}get key(){return this._config.key}get configuration(){return this._config}bindPass(e,t,r){}bindMaterial(e,t,r){}bindDraw(e,t,r){}bindPipelineState(e){e.setPipelineState(this.pipeline)}ensureAttributeLocations(e){this.program.assertCompatibleVertexAttributeLocations(e)}get primitiveType(){return 4}}{initializeProgram(e){const t=qa.shader.get(),r=this.configuration,o=t.build({OITEnabled:0===r.transparencyPassType,output:r.output,viewingMode:e.viewingMode,receiveShadows:r.receiveShadows,slicePlaneEnabled:r.slicePlaneEnabled,sliceHighlightDisabled:r.sliceHighlightDisabled,sliceEnabledForVertexPrograms:!1,symbolColor:r.symbolColors,vvSize:r.vvSize,vvColor:r.vvColor,vvInstancingEnabled:!0,instanced:r.instanced,instancedColor:r.instancedColor,instancedDoublePrecision:r.instancedDoublePrecision,useOldSceneLightInterface:!1,pbrMode:r.usePBR?r.isSchematic?2:1:0,hasMetalnessAndRoughnessTexture:r.hasMetalnessAndRoughnessTexture,hasEmissionTexture:r.hasEmissionTexture,hasOcclusionTexture:r.hasOcclusionTexture,hasNormalTexture:r.hasNormalTexture,hasColorTexture:r.hasColorTexture,receiveAmbientOcclusion:r.receiveAmbientOcclusion,useCustomDTRExponentForWater:!1,normalType:r.normalsTypeDerivate?3:0,doubleSidedMode:r.doubleSidedMode,vertexTangets:r.vertexTangents,attributeTextureCoordinates:r.hasMetalnessAndRoughnessTexture||r.hasEmissionTexture||r.hasOcclusionTexture||r.hasNormalTexture||r.hasColorTexture?1:0,textureAlphaPremultiplied:r.textureAlphaPremultiplied,attributeColor:r.vertexColors,screenSizePerspectiveEnabled:r.screenSizePerspective,verticalOffsetEnabled:r.verticalOffset,offsetBackfaces:r.offsetBackfaces,doublePrecisionRequiresObfuscation:Jn(e.rctx),alphaDiscardMode:r.alphaDiscardMode,supportsTextureAtlas:!1,multipassTerrainEnabled:r.multipassTerrainEnabled,cullAboveGround:r.cullAboveGround});return new bt(e.rctx,o.generateSource("vertex"),o.generateSource("fragment"),un)}bindPass(e,t,r){On.bindProjectionMatrix(this.program,r.camera.projectionMatrix);const o=this.configuration.output;(1===this.configuration.output||r.multipassTerrainEnabled||3===o)&&this.program.setUniform2fv("cameraNearFar",r.camera.nearFar),r.multipassTerrainEnabled&&(this.program.setUniform2fv("inverseViewport",r.inverseViewport),function(e,t,r){r.multipassTerrainEnabled&&r.terrainLinearDepthTexture&&(e.setUniform1i("terrainDepthTexture",10),t.bindTexture(r.terrainLinearDepthTexture,10))}(this.program,e,r)),7===o&&(this.program.setUniform1f("opacity",t.opacity),this.program.setUniform1f("layerOpacity",t.layerOpacity),this.program.setUniform4fv("externalColor",t.externalColor),this.program.setUniform1i("colorMixMode",cn[t.colorMixMode])),0===o?(r.lighting.setUniforms(this.program,!1),this.program.setUniform3fv("ambient",t.ambient),this.program.setUniform3fv("diffuse",t.diffuse),this.program.setUniform4fv("externalColor",t.externalColor),this.program.setUniform1i("colorMixMode",cn[t.colorMixMode]),this.program.setUniform1f("opacity",t.opacity),this.program.setUniform1f("layerOpacity",t.layerOpacity),this.configuration.usePBR&&na.bindUniforms(this.program,t,this.configuration.isSchematic)):4===o&&Dn.bindOutputHighlight(e,this.program,r),En.bindUniformsForSymbols(this.program,t),Un.bindUniforms(this.program,t,r),nn(t.screenSizePerspective,this.program,"screenSizePerspectiveAlignment"),2!==t.textureAlphaMode&&3!==t.textureAlphaMode||this.program.setUniform1f("textureAlphaCutoff",t.textureAlphaCutoff)}bindDraw(e){const t=this.configuration.instancedDoublePrecision?f(e.camera.viewInverseTransposeMatrix[3],e.camera.viewInverseTransposeMatrix[7],e.camera.viewInverseTransposeMatrix[11]):e.origin;On.bindViewCustomOrigin(this.program,t,e.camera.viewMatrix),(0===this.configuration.output||7===this.configuration.output||1===this.configuration.output&&this.configuration.screenSizePerspective||2===this.configuration.output&&this.configuration.screenSizePerspective||4===this.configuration.output&&this.configuration.screenSizePerspective)&&On.bindCamPosition(this.program,t,e.camera.viewInverseTransposeMatrix),2===this.configuration.output&&this.program.setUniformMatrix4fv("viewNormal",e.camera.viewInverseTransposeMatrix),this.configuration.instancedDoublePrecision&&Zn.bindCustomOrigin(this.program,t),Fn.bindUniforms(this.program,this.configuration,e.slicePlane,t),0===this.configuration.output&&qn.bindViewCustomOrigin(this.program,e,t)}setPipeline(e,t){const r=this.configuration,o=3===e,i=2===e;return pt({blending:0!==r.output&&7!==r.output||!r.transparent?null:o?wn:(n=e,2===n?null:1===n?Sn:Tn),culling:Wa(r),depthTest:{func:Mn(e)},depthWrite:o||i?r.writeDepth&&ht:null,colorWrite:vt,stencilWrite:r.sceneHasOcludees?Gn:null,stencilTest:r.sceneHasOcludees?t?$n:kn:null,polygonOffset:o||i?null:Cn(r.enableOffset)});var n}initializePipeline(){return this._occludeePipelineState=this.setPipeline(this.configuration.transparencyPassType,!0),this.setPipeline(this.configuration.transparencyPassType,!1)}getPipelineState(e){return e?this._occludeePipelineState:this.pipeline}}qa.shader=new An(ja,(()=>import("./DefaultMaterial.glsl.ae003545.js")));const Wa=e=>function(e){return e.cullFace?0!==e.cullFace:!e.slicePlaneEnabled&&!e.transparent&&!e.doubleSidedMode}(e)&&{face:1===e.cullFace?1028:1029,mode:2305};class Xa extends class{constructor(){this._key="",this._keyDirty=!1,this._parameterBits=this._parameterBits.map((()=>0))}get key(){return this._keyDirty&&(this._keyDirty=!1,this._key=String.fromCharCode.apply(String,this._parameterBits)),this._key}snapshot(){const e=this._parameterNames,t={key:this.key};for(const r of e)t[r]=this[r];return t}}{constructor(){super(...arguments),this.output=0,this.alphaDiscardMode=1,this.doubleSidedMode=0,this.isSchematic=!1,this.vertexColors=!1,this.offsetBackfaces=!1,this.symbolColors=!1,this.vvSize=!1,this.vvColor=!1,this.verticalOffset=!1,this.receiveShadows=!1,this.slicePlaneEnabled=!1,this.sliceHighlightDisabled=!1,this.receiveAmbientOcclusion=!1,this.screenSizePerspective=!1,this.textureAlphaPremultiplied=!1,this.hasColorTexture=!1,this.usePBR=!1,this.hasMetalnessAndRoughnessTexture=!1,this.hasEmissionTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.instanced=!1,this.instancedColor=!1,this.instancedDoublePrecision=!1,this.vertexTangents=!1,this.normalsTypeDerivate=!1,this.writeDepth=!0,this.sceneHasOcludees=!1,this.transparent=!1,this.enableOffset=!0,this.cullFace=0,this.transparencyPassType=3,this.multipassTerrainEnabled=!1,this.cullAboveGround=!0}}function Ya(e){const t=new la,r=t.vertex.code,o=t.fragment.code;return t.vertex.uniforms.add("proj","mat4").add("view","mat4").add("camPos","vec3").add("localOrigin","vec3"),t.include(Aa),t.varyings.add("vpos","vec3"),t.include(En,e),t.include(Zn,e),t.include(Un,e),0!==e.output&&7!==e.output||(t.include(Ma,e),t.include(aa,{linearDepth:!1}),e.offsetBackfaces&&t.include(_a),e.instancedColor&&t.attributes.add("instanceColor","vec4"),t.varyings.add("vNormalWorld","vec3"),t.varyings.add("localvpos","vec3"),e.multipassTerrainEnabled&&t.varyings.add("depth","float"),t.include(ra,e),t.include(ya,e),t.include(Oa,e),t.include(Ia,e),t.vertex.uniforms.add("externalColor","vec4"),t.varyings.add("vcolorExt","vec4"),r.add(xn`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${e.instancedColor?"vcolorExt *= instanceColor;":""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${xn.float(.001)}) {
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          }
          else {
            vpos = calculateVPos();
            localvpos = vpos - view[3].xyz;
            vpos = subtractOrigin(vpos);
            vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            ${e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, camPos);":""}
          }
          ${e.multipassTerrainEnabled?xn`depth = (view * vec4(vpos, 1.0)).z;`:""}
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)),7===e.output&&(t.include(Fn,e),t.include(yn,e),e.multipassTerrainEnabled&&(t.fragment.include(ba),t.include(Hn,e)),t.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("opacity","float").add("layerOpacity","float"),t.fragment.uniforms.add("view","mat4"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.fragment.include(ka),o.add(xn`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?xn`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${e.hasColorTexture?xn`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:xn`vec4 texColor = vec4(1.0);`}
        ${e.attributeColor?xn`
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:xn`
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}

        gl_FragColor = vec4(opacity_);
      }
    `)),0===e.output&&(t.include(Fn,e),t.include(Ua,e),t.include(Da,e),t.include(yn,e),e.receiveShadows&&t.include(qn,e),e.multipassTerrainEnabled&&(t.fragment.include(ba),t.include(Hn,e)),t.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("ambient","vec3").add("diffuse","vec3").add("opacity","float").add("layerOpacity","float"),t.fragment.uniforms.add("view","mat4"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.include(na,e),t.include(Sa,e),t.fragment.include(ka),o.add(xn`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?xn`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${e.hasColorTexture?xn`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:xn`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - camPos);
        ${1===e.pbrMode?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = _oldHeuristicLighting(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${e.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":1===e.viewingMode?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${e.attributeColor?xn`
        vec3 albedo_ = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:xn`
        vec3 albedo_ = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        ${xn`
        vec3 shadedNormal = normalize(vNormalWorld);
        albedo_ *= 1.2;
        vec3 viewForward = - vec3(view[0][2], view[1][2], view[2][2]);
        float alignmentLightView = clamp(dot(-viewForward, lightingMainDirection), 0.0, 1.0);
        float transmittance = 1.0 - clamp(dot(-viewForward, shadedNormal), 0.0, 1.0);
        float treeRadialFalloff = vColor.r;
        float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
        additionalLight += backLightFactor * lightingMainIntensity;`}
        ${1===e.pbrMode||2===e.pbrMode?1===e.viewingMode?xn`vec3 normalGround = normalize(vpos + localOrigin);`:xn`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:xn``}
        ${1===e.pbrMode||2===e.pbrMode?xn`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
            vec3 shadedColor = evaluateSceneLightingPBR(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:"vec3 shadedColor = evaluateSceneLighting(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight);"}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.OITEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),t.include(Ba,e),t}te([Pn({count:8})],Xa.prototype,"output",void 0),te([Pn({count:4})],Xa.prototype,"alphaDiscardMode",void 0),te([Pn({count:3})],Xa.prototype,"doubleSidedMode",void 0),te([Pn()],Xa.prototype,"isSchematic",void 0),te([Pn()],Xa.prototype,"vertexColors",void 0),te([Pn()],Xa.prototype,"offsetBackfaces",void 0),te([Pn()],Xa.prototype,"symbolColors",void 0),te([Pn()],Xa.prototype,"vvSize",void 0),te([Pn()],Xa.prototype,"vvColor",void 0),te([Pn()],Xa.prototype,"verticalOffset",void 0),te([Pn()],Xa.prototype,"receiveShadows",void 0),te([Pn()],Xa.prototype,"slicePlaneEnabled",void 0),te([Pn()],Xa.prototype,"sliceHighlightDisabled",void 0),te([Pn()],Xa.prototype,"receiveAmbientOcclusion",void 0),te([Pn()],Xa.prototype,"screenSizePerspective",void 0),te([Pn()],Xa.prototype,"textureAlphaPremultiplied",void 0),te([Pn()],Xa.prototype,"hasColorTexture",void 0),te([Pn()],Xa.prototype,"usePBR",void 0),te([Pn()],Xa.prototype,"hasMetalnessAndRoughnessTexture",void 0),te([Pn()],Xa.prototype,"hasEmissionTexture",void 0),te([Pn()],Xa.prototype,"hasOcclusionTexture",void 0),te([Pn()],Xa.prototype,"hasNormalTexture",void 0),te([Pn()],Xa.prototype,"instanced",void 0),te([Pn()],Xa.prototype,"instancedColor",void 0),te([Pn()],Xa.prototype,"instancedDoublePrecision",void 0),te([Pn()],Xa.prototype,"vertexTangents",void 0),te([Pn()],Xa.prototype,"normalsTypeDerivate",void 0),te([Pn()],Xa.prototype,"writeDepth",void 0),te([Pn()],Xa.prototype,"sceneHasOcludees",void 0),te([Pn()],Xa.prototype,"transparent",void 0),te([Pn()],Xa.prototype,"enableOffset",void 0),te([Pn({count:3})],Xa.prototype,"cullFace",void 0),te([Pn({count:4})],Xa.prototype,"transparencyPassType",void 0),te([Pn()],Xa.prototype,"multipassTerrainEnabled",void 0),te([Pn()],Xa.prototype,"cullAboveGround",void 0);var Ka=Object.freeze({__proto__:null,build:Ya});class Qa extends qa{initializeProgram(e){const t=Qa.shader.get(),r=this.configuration,o=t.build({OITEnabled:0===r.transparencyPassType,output:r.output,viewingMode:e.viewingMode,receiveShadows:r.receiveShadows,slicePlaneEnabled:r.slicePlaneEnabled,sliceHighlightDisabled:r.sliceHighlightDisabled,sliceEnabledForVertexPrograms:!1,symbolColor:r.symbolColors,vvSize:r.vvSize,vvColor:r.vvColor,vvInstancingEnabled:!0,instanced:r.instanced,instancedColor:r.instancedColor,instancedDoublePrecision:r.instancedDoublePrecision,useOldSceneLightInterface:!1,pbrMode:r.usePBR?1:0,hasMetalnessAndRoughnessTexture:!1,hasEmissionTexture:!1,hasOcclusionTexture:!1,hasNormalTexture:!1,hasColorTexture:r.hasColorTexture,receiveAmbientOcclusion:r.receiveAmbientOcclusion,useCustomDTRExponentForWater:!1,normalType:0,doubleSidedMode:2,vertexTangets:!1,attributeTextureCoordinates:r.hasColorTexture?1:0,textureAlphaPremultiplied:r.textureAlphaPremultiplied,attributeColor:r.vertexColors,screenSizePerspectiveEnabled:r.screenSizePerspective,verticalOffsetEnabled:r.verticalOffset,offsetBackfaces:r.offsetBackfaces,doublePrecisionRequiresObfuscation:Jn(e.rctx),alphaDiscardMode:r.alphaDiscardMode,supportsTextureAtlas:!1,multipassTerrainEnabled:r.multipassTerrainEnabled,cullAboveGround:r.cullAboveGround});return new bt(e.rctx,o.generateSource("vertex"),o.generateSource("fragment"),un)}}Qa.shader=new An(Ka,(()=>import("./RealisticTree.glsl.4ab10dcc.js")));class Ja extends dn{constructor(e){super(e,ts),this.supportsEdges=!0,this.techniqueConfig=new Xa,this.vertexBufferLayout=Ja.getVertexBufferLayout(this.params),this.instanceBufferLayout=e.instanced?Ja.getInstanceBufferLayout(this.params):null}isVisibleInPass(e){return 4!==e&&6!==e&&7!==e||this.params.castShadows}isVisible(){const e=this.params;if(!super.isVisible()||0===e.layerOpacity)return!1;const t=e.instanced,r=e.vertexColors,o=e.symbolColors,i=!!t&&t.indexOf("color")>-1,n=e.vvColorEnabled,a="replace"===e.colorMixMode,s=e.opacity>0,c=e.externalColor&&e.externalColor[3]>0;return r&&(i||n||o)?!!a||s:r?a?c:s:i||n||o?!!a||s:a?c:s}getTechniqueConfig(e,t){return this.techniqueConfig.output=e,this.techniqueConfig.hasNormalTexture=!!this.params.normalTextureId,this.techniqueConfig.hasColorTexture=!!this.params.textureId,this.techniqueConfig.vertexTangents=this.params.vertexTangents,this.techniqueConfig.instanced=!!this.params.instanced,this.techniqueConfig.instancedDoublePrecision=this.params.instancedDoublePrecision,this.techniqueConfig.vvSize=this.params.vvSizeEnabled,this.techniqueConfig.verticalOffset=null!==this.params.verticalOffset,this.techniqueConfig.screenSizePerspective=null!==this.params.screenSizePerspective,this.techniqueConfig.slicePlaneEnabled=this.params.slicePlaneEnabled,this.techniqueConfig.sliceHighlightDisabled=this.params.sliceHighlightDisabled,this.techniqueConfig.alphaDiscardMode=this.params.textureAlphaMode,this.techniqueConfig.normalsTypeDerivate="screenDerivative"===this.params.normals,this.techniqueConfig.transparent=this.params.transparent,this.techniqueConfig.writeDepth=this.params.writeDepth,this.techniqueConfig.sceneHasOcludees=this.params.sceneHasOcludees,this.techniqueConfig.cullFace=null!=this.params.cullFace?this.params.cullFace:0,this.techniqueConfig.multipassTerrainEnabled=!!t&&t.multipassTerrainEnabled,this.techniqueConfig.cullAboveGround=!t||t.cullAboveGround,0!==e&&7!==e||(this.techniqueConfig.vertexColors=this.params.vertexColors,this.techniqueConfig.symbolColors=this.params.symbolColors,this.params.treeRendering?this.techniqueConfig.doubleSidedMode=2:this.techniqueConfig.doubleSidedMode=this.params.doubleSided&&"normal"===this.params.doubleSidedType?1:this.params.doubleSided&&"winding-order"===this.params.doubleSidedType?2:0,this.techniqueConfig.instancedColor=!!this.params.instanced&&this.params.instanced.indexOf("color")>-1,this.techniqueConfig.receiveShadows=this.params.receiveShadows&&this.params.shadowMappingEnabled,this.techniqueConfig.receiveAmbientOcclusion=!(!t||!t.ssaoEnabled)&&this.params.receiveSSAO,this.techniqueConfig.vvColor=this.params.vvColorEnabled,this.techniqueConfig.textureAlphaPremultiplied=!!this.params.textureAlphaPremultiplied,this.techniqueConfig.usePBR=this.params.usePBR,this.techniqueConfig.hasMetalnessAndRoughnessTexture=!!this.params.metallicRoughnessTextureId,this.techniqueConfig.hasEmissionTexture=!!this.params.emissiveTextureId,this.techniqueConfig.hasOcclusionTexture=!!this.params.occlusionTextureId,this.techniqueConfig.offsetBackfaces=!(!this.params.transparent||!this.params.offsetTransparentBackfaces),this.techniqueConfig.isSchematic=this.params.usePBR&&this.params.isSchematic,this.techniqueConfig.transparencyPassType=t?t.transparencyPassType:3,this.techniqueConfig.enableOffset=!t||t.camera.relativeElevation<5e5),this.techniqueConfig}intersect(e,t,r,o,i,n,a){if(null!==this.params.verticalOffset){const e=o.camera;F(cs,r[12],r[13],r[14]);let t=null;switch(o.viewingMode){case 1:t=B(as,cs);break;case 2:t=w(as,ns)}let a=0;if(null!==this.params.verticalOffset){const r=T(ls,cs,e.eye),o=I(r),i=_(r,r,1/o);let n=null;this.params.screenSizePerspective&&(n=S(t,i)),a+=function(e,t,r,o,i){let n=(r.screenLength||0)*e.pixelRatio;i&&(n=Wi(n,o,t,i));const a=n*Math.tan(.5*e.fovY)/(.5*e.fullHeight);return K(a*t,r.minWorldLength||0,null!=r.maxWorldLength?r.maxWorldLength:1/0)}(e,o,this.params.verticalOffset,n,this.params.screenSizePerspective)}_(t,t,a),re(ss,t,o.transform.inverseRotation),i=T(os,i,ss),n=T(is,n,ss)}Ki(e,t,o,i,n,function(e){return k(e)?(Di.offset=e,Di):null}(o.verticalOffset),a)}getGLMaterial(e){if(0===e.output||7===e.output||1===e.output||2===e.output||3===e.output||4===e.output)return new Za(e)}createBufferWriter(){return new rs(this.vertexBufferLayout,this.instanceBufferLayout)}static getVertexBufferLayout(e){const t=e.textureId||e.normalTextureId||e.metallicRoughnessTextureId||e.emissiveTextureId||e.occlusionTextureId,r=ke().vec3f("position").vec3f("normal");return e.vertexTangents&&r.vec4f("tangent"),t&&r.vec2f("uv0"),e.vertexColors&&r.vec4u8("color"),e.symbolColors&&r.vec4u8("symbolColor"),r}static getInstanceBufferLayout(e){let t=ke();return t=e.instancedDoublePrecision?t.vec3f("modelOriginHi").vec3f("modelOriginLo").mat3f("model").mat3f("modelNormal"):t.mat4f("model").mat4f("modelNormal"),e.instanced&&e.instanced.indexOf("color")>-1&&(t=t.vec4f("instanceColor")),e.instanced&&e.instanced.indexOf("featureAttribute")>-1&&(t=t.vec4f("instanceFeatureAttribute")),t}}class Za extends ji{constructor(e){const t=e.material;super(s(s({},e),t.params)),this.updateParameters()}updateParameters(e){const t=this.material.params;this.updateTexture(t.textureId),this.technique=t.treeRendering?this.techniqueRep.acquireAndReleaseExisting(Qa,this.material.getTechniqueConfig(this.output,e),this.technique):this.techniqueRep.acquireAndReleaseExisting(qa,this.material.getTechniqueConfig(this.output,e),this.technique)}selectPipelines(){}_updateShadowState(e){e.shadowMappingEnabled!==this.material.params.shadowMappingEnabled&&this.material.setParameterValues({shadowMappingEnabled:e.shadowMappingEnabled})}_updateOccludeeState(e){e.hasOccludees!==this.material.params.sceneHasOcludees&&this.material.setParameterValues({sceneHasOcludees:e.hasOccludees})}ensureParameters(e){0!==this.output&&7!==this.output||(this._updateShadowState(e),this._updateOccludeeState(e)),this.updateParameters(e)}bind(e,t){e.bindProgram(this.technique.program),this.technique.bindPass(e,this.material.params,t),this.bindTexture(e,this.technique.program)}beginSlot(e){return e===(this.material.params.transparent?this.material.params.writeDepth?5:8:3)}getPipelineState(e,t){return this.technique.getPipelineState(t)}}const es=2.1,ts=s({textureId:void 0,initTextureTransparent:!1,isSchematic:!1,usePBR:!1,normalTextureId:void 0,vertexTangents:!1,occlusionTextureId:void 0,emissiveTextureId:void 0,metallicRoughnessTextureId:void 0,emissiveFactor:[0,0,0],mrrFactors:[0,1,.5],ambient:[.2,.2,.2],diffuse:[.8,.8,.8],externalColor:[1,1,1,1],colorMixMode:"multiply",opacity:1,layerOpacity:1,vertexColors:!1,symbolColors:!1,doubleSided:!1,doubleSidedType:"normal",cullFace:void 0,instanced:void 0,instancedDoublePrecision:!1,normals:"default",receiveSSAO:!0,receiveShadows:!0,castShadows:!0,shadowMappingEnabled:!1,verticalOffset:null,screenSizePerspective:null,slicePlaneEnabled:!1,sliceHighlightDisabled:!1,offsetTransparentBackfaces:!1,vvSizeEnabled:!1,vvSizeMinSize:[1,1,1],vvSizeMaxSize:[100,100,100],vvSizeOffset:[0,0,0],vvSizeFactor:[1,1,1],vvSizeValue:[1,1,1],vvColorEnabled:!1,vvColorValues:[0,0,0,0,0,0,0,0],vvColorColors:[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],vvSymbolAnchor:[0,0,0],vvSymbolRotationMatrix:De(),transparent:!1,writeDepth:!0,textureAlphaMode:0,textureAlphaCutoff:.1,textureAlphaPremultiplied:!1,sceneHasOcludees:!1},{renderOccluded:1});class rs{constructor(e,t){this.vertexBufferLayout=e,this.instanceBufferLayout=t}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){return e.indices.get("position").length}write(e,t,r,o){!function(e,t,r,o,i,n){for(const a of t.fieldNames){const t=e.vertexAttributes.get(a),s=e.indices.get(a);if(t&&s)switch(a){case"position":{Zt(3===t.size);const e=i.getField(a,Ge);e&&hn(s,t.data,r,e,n);break}case"normal":{Zt(3===t.size);const e=i.getField(a,Ge);e&&vn(s,t.data,o,e,n,1);break}case"uv0":{Zt(2===t.size);const e=i.getField(a,He);e&&fn(s,t.data,e,n);break}case"color":{Zt(3===t.size||4===t.size);const e=i.getField(a,Ve);e&&gn(s,t.data,t.size,e,n);break}case"symbolColor":{Zt(3===t.size||4===t.size);const e=i.getField(a,Ve);e&&gn(s,t.data,t.size,e,n);break}case"tangent":{Zt(4===t.size);const e=i.getField(a,Ue);e&&pn(s,t.data,e,n);break}}}}(t,this.vertexBufferLayout,e.transformation,e.invTranspTransformation,r,o)}}const os=d(),is=d(),ns=f(0,0,1),as=d(),ss=d(),cs=d(),ls=d(),us=[{name:"position",count:2,type:5126,offset:0,stride:8,normalized:!1}],ds=[{name:"position",count:2,type:5126,offset:0,stride:16,normalized:!1},{name:"uv0",count:2,type:5126,offset:8,stride:16,normalized:!1}];let fs,ms=null,ps=null;async function hs(){return R(ps)&&(ps=function(){if(R(fs)){const e=e=>oe(`esri/libs/basisu/${e}`);fs=import("./basis_transcoder.6cda9d06.js").then((function(e){return e.b})).then((({default:t})=>t({locateFile:e}).then((e=>(e.initializeBasis(),delete e.then,e)))))}return fs}(),ms=await ps),ps}const vs=l.getLogger("esri.views.3d.webgl-engine.lib.DDSUtil");function gs(e){return e.charCodeAt(0)+(e.charCodeAt(1)<<8)+(e.charCodeAt(2)<<16)+(e.charCodeAt(3)<<24)}const xs=gs("DXT1"),bs=gs("DXT3"),ys=gs("DXT5");function ws(e,t,r,o){const{textureData:i,internalFormat:n,width:a,height:s}=function(e,t){const r=new Int32Array(e,0,31);if(542327876!==r[0])return vs.error("Invalid magic number in DDS header"),null;if(!(4&r[20]))return vs.error("Unsupported format, must contain a FourCC code"),null;const o=r[21];let i,n;switch(o){case xs:i=8,n=33776;break;case bs:i=16,n=33778;break;case ys:i=16,n=33779;break;default:return vs.error("Unsupported FourCC code:",function(e){return String.fromCharCode(255&e,e>>8&255,e>>16&255,e>>24&255)}(o)),null}let a=1,s=r[4],c=r[3];0==(3&s)&&0==(3&c)||(vs.warn("Rounding up compressed texture size to nearest multiple of 4."),s=s+3&-4,c=c+3&-4);const l=s,u=c;let d,f;131072&r[2]&&!1!==t&&(a=Math.max(1,r[7])),1===a||ie(s)&&ie(c)||(vs.warn("Ignoring mipmaps of non power of two sized compressed texture."),a=1);let m=r[1]+4;const p=[];for(let h=0;h<a;++h)f=(s+3>>2)*(c+3>>2)*i,d=new Uint8Array(e,m,f),p.push(d),m+=f,s=Math.max(1,s>>1),c=Math.max(1,c>>1);return{textureData:{type:"compressed",levels:p},internalFormat:n,width:l,height:u}}(r,o);t.samplingMode=i.levels.length>1?9987:9729,t.hasMipmap=i.levels.length>1,t.internalFormat=n,t.width=a,t.height=s;const c=new _t(e,t,i);return e.bindTexture(c,0),c}class Ts extends ir{constructor(e,t){super(),this.data=e,this.type=4,this.glTexture=null,this.powerOfTwoStretchInfo=null,this.loadingPromise=null,this.loadingController=null,this.events=new ne,this.params=t||{},this.params.mipmap=!1!==this.params.mipmap,this.params.noUnpackFlip=this.params.noUnpackFlip||!1,this.params.preMultiplyAlpha=this.params.preMultiplyAlpha||!1,this.params.wrap=this.params.wrap||{s:10497,t:10497},this.params.powerOfTwoResizeMode=this.params.powerOfTwoResizeMode||1,this.estimatedTexMemRequired=Ts.estimateTexMemRequired(this.data,this.params),this.startPreload()}startPreload(){const e=this.data;R(e)||(e instanceof HTMLVideoElement?this.startPreloadVideoElement(e):e instanceof HTMLImageElement&&this.startPreloadImageElement(e))}startPreloadVideoElement(e){ae(e.src)||"auto"===e.preload&&e.crossOrigin||(e.preload="auto",e.crossOrigin="anonymous",e.src=e.src)}startPreloadImageElement(e){se(e.src)||ae(e.src)||e.crossOrigin||(e.crossOrigin="anonymous",e.src=e.src)}static getDataDimensions(e){return e instanceof HTMLVideoElement?{width:e.videoWidth,height:e.videoHeight}:e}static estimateTexMemRequired(e,t){if(R(e))return 0;if(ce(e)||le(e))return t.encoding===Ts.BASIS_ENCODING?function(e){if(R(ms))return e.byteLength;const t=new ms.BasisFile(new Uint8Array(e));if(t.getNumImages()<1)return 0;const r=t.getNumLevels(0),o=t.getHasAlpha(),i=t.getImageWidth(0,0),n=t.getImageHeight(0,0);t.close(),t.delete();const a=yt(o?37496:37492),s=(4**r-1)/(3*4**(r-1));return Math.ceil(i*n*a*s)}(e):e.byteLength;const{width:r,height:o}=e instanceof Image||e instanceof ImageData||e instanceof HTMLCanvasElement||e instanceof HTMLVideoElement?Ts.getDataDimensions(e):t;return(t.mipmap?4/3:1)*r*o*(t.components||4)||0}dispose(){this.data=void 0}get width(){return this.params.width}get height(){return this.params.height}createDescriptor(e){const t=this.params.mipmap&&!this.params.disableAnisotropy;return{target:3553,pixelFormat:6408,dataType:5121,wrapMode:this.params.wrap,flipped:!this.params.noUnpackFlip,samplingMode:this.params.mipmap?9987:9729,hasMipmap:this.params.mipmap,preMultiplyAlpha:this.params.preMultiplyAlpha,maxAnisotropy:t?e.parameters.maxMaxAnisotropy:void 0}}load(e,t){if(k(this.glTexture))return this.glTexture;if(k(this.loadingPromise))return this.loadingPromise;const r=this.data;return R(r)?(this.glTexture=new _t(e,this.createDescriptor(e),null),e.bindTexture(this.glTexture,0),this.glTexture):"string"==typeof r?this.loadFromURL(e,t,r):r instanceof Image?this.loadFromImageElement(e,t,r):r instanceof HTMLVideoElement?this.loadFromVideoElement(e,t,r):r instanceof ImageData||r instanceof HTMLCanvasElement?this.loadFromImage(e,r,t):(ce(r)||le(r))&&this.params.encoding===Ts.DDS_ENCODING?this.loadFromDDSData(e,r):(ce(r)||le(r))&&this.params.encoding===Ts.BASIS_ENCODING?this.loadFromBasis(e,r):le(r)?this.loadFromPixelData(e,r):ce(r)?this.loadFromPixelData(e,new Uint8Array(r)):null}get requiresFrameUpdates(){return this.data instanceof HTMLVideoElement}frameUpdate(e,t,r){if(!(this.data instanceof HTMLVideoElement)||R(this.glTexture))return r;if(this.data.readyState<2||r===this.data.currentTime)return r;if(k(this.powerOfTwoStretchInfo)){const{framebuffer:r,vao:o,sourceTexture:i}=this.powerOfTwoStretchInfo;i.setData(this.data),this.drawStretchedTexture(e,t,r,o,i,this.glTexture)}else{const{width:e,height:t}=this.data,{width:r,height:o}=this.glTexture.descriptor;e!==r||t!==o?this.glTexture.updateData(0,0,0,Math.min(e,r),Math.min(t,o),this.data):this.glTexture.setData(this.data)}return this.glTexture.descriptor.hasMipmap&&this.glTexture.generateMipmap(),this.data.currentTime}loadFromDDSData(e,t){return this.glTexture=ws(e,this.createDescriptor(e),t,this.params.mipmap),e.bindTexture(this.glTexture,0),this.glTexture}loadFromBasis(e,t){return this.loadAsync((()=>async function(e,t,r){R(ms)&&(ms=await hs());const o=new ms.BasisFile(new Uint8Array(r));if(o.getNumImages()<1)return null;const i=o.getNumLevels(0),n=o.getHasAlpha(),a=o.getImageWidth(0,0),l=o.getImageHeight(0,0),{compressedTextureETC:u,compressedTextureS3TC:d}=e.capabilities,[f,m]=u?n?[1,37496]:[0,37492]:d?n?[3,33779]:[2,33776]:[13,6408];o.startTranscoding();const p=[];for(let s=0;s<i;s++)p.push(new Uint8Array(o.getImageTranscodedSizeInBytes(0,s,f))),o.transcodeImage(p[s],0,s,f,0,0);o.close(),o.delete();const h=c(s({},t),{samplingMode:i>1?9987:9729,hasMipmap:i>1,internalFormat:m,width:a,height:l});return new _t(e,h,{type:"compressed",levels:p})}(e,this.createDescriptor(e),t).then((e=>(this.glTexture=e,e)))))}loadFromPixelData(e,t){Zt(this.params.width>0&&this.params.height>0);const r=this.createDescriptor(e);return r.pixelFormat=1===this.params.components?6409:3===this.params.components?6407:6408,r.width=this.params.width,r.height=this.params.height,this.glTexture=new _t(e,r,t),e.bindTexture(this.glTexture,0),this.glTexture}async loadAsync(e){const t=ue();this.loadingController=t;const r=e(t.signal);this.loadingPromise=r;const o=()=>{this.loadingController===t&&(this.loadingController=null),this.loadingPromise===r&&(this.loadingPromise=null)};return r.then(o,o),r}loadFromURL(e,t,r){return this.loadAsync((async o=>{const i=await At(r,{signal:o});return this.loadFromImage(e,i,t)}))}loadFromImageElement(e,t,r){return r.complete?this.loadFromImage(e,r,t):this.loadAsync((async o=>{const i=await de(r,r.src,!1,o);return this.loadFromImage(e,i,t)}))}loadFromVideoElement(e,t,r){return r.readyState>=2?this.loadFromImage(e,r,t):this.loadFromVideoElementAsync(e,t,r)}loadFromVideoElementAsync(e,t,r){return this.loadAsync((o=>new Promise(((i,n)=>{const a=()=>{r.removeEventListener("loadeddata",s),r.removeEventListener("error",c),k(l)&&l.remove()},s=()=>{r.readyState>=2&&(a(),i(this.loadFromImage(e,r,t)))},c=e=>{a(),n(e||new ve("Failed to load video"))};r.addEventListener("loadeddata",s),r.addEventListener("error",c);const l=fe(o,(()=>c(me())))}))))}loadFromImage(e,t,r){const o=Ts.getDataDimensions(t);this.params.width=o.width,this.params.height=o.height;const i=this.createDescriptor(e);return i.pixelFormat=3===this.params.components?6407:6408,!this.requiresPowerOfTwo(e,i)||ie(o.width)&&ie(o.height)?(i.width=o.width,i.height=o.height,this.glTexture=new _t(e,i,t),e.bindTexture(this.glTexture,0),this.glTexture):(this.glTexture=this.makePowerOfTwoTexture(e,t,o,i,r),e.bindTexture(this.glTexture,0),this.glTexture)}requiresPowerOfTwo(e,t){const r=33071,o="number"==typeof t.wrapMode?t.wrapMode===r:t.wrapMode.s===r&&t.wrapMode.t===r;return!Ct(e.gl)&&(t.hasMipmap||!o)}makePowerOfTwoTexture(e,t,r,o,i){const{width:n,height:a}=r,s=pe(n),c=pe(a);let l;switch(o.width=s,o.height=c,this.params.powerOfTwoResizeMode){case 2:o.textureCoordinateScaleFactor=[n/s,a/c],l=new _t(e,o),l.updateData(0,0,0,n,a,t);break;case 1:case null:case void 0:l=this.stretchToPowerOfTwo(e,t,o,i);break;default:he(this.params.powerOfTwoResizeMode)}return o.hasMipmap&&l.generateMipmap(),l}stretchToPowerOfTwo(e,t,r,o){const i=new _t(e,r),n=new St(e,{colorTarget:0,depthStencilTarget:0},i),a=new _t(e,{target:3553,pixelFormat:r.pixelFormat,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!!r.flipped,maxAnisotropy:8,preMultiplyAlpha:r.preMultiplyAlpha},t),s=function(e,t=us,r=un,o=-1,i=1){let n=null;switch(t){case ds:n=new Float32Array([o,o,0,0,i,o,1,0,o,i,0,1,i,i,1,1]);break;case us:default:n=new Float32Array([o,o,i,o,o,i,i,i])}return new xt(e,r,{geometry:t},{geometry:gt.createVertex(e,35044,n)})}(e);return this.drawStretchedTexture(e,o,n,s,a,i),this.requiresFrameUpdates?this.powerOfTwoStretchInfo={vao:s,sourceTexture:a,framebuffer:n}:(s.dispose(!0),a.dispose(),n.detachColorTexture(),e.bindFramebuffer(null),n.dispose()),i}drawStretchedTexture(e,t,r,o,i,n){e.bindFramebuffer(r);const a=e.getViewport();e.setViewport(0,0,n.descriptor.width,n.descriptor.height);const s=t.program;e.bindProgram(s),s.setUniform4f("color",1,1,1,1),s.setUniform1i("tex",0),e.bindTexture(i,0),e.bindVAO(o),e.setPipelineState(t.pipeline),e.drawArrays(5,0,wt(o,"geometry")),e.bindFramebuffer(null),e.setViewport(a.x,a.y,a.width,a.height)}unload(){if(k(this.powerOfTwoStretchInfo)){const{framebuffer:e,vao:t,sourceTexture:r}=this.powerOfTwoStretchInfo;t.dispose(!0),r.dispose(),e.dispose(),this.glTexture=null,this.powerOfTwoStretchInfo=null}if(k(this.glTexture)&&(this.glTexture.dispose(),this.glTexture=null),k(this.loadingController)){const e=this.loadingController;this.loadingController=null,this.loadingPromise=null,e.abort()}this.events.emit("unloaded")}}Ts.DDS_ENCODING="image/vnd-ms.dds",Ts.BASIS_ENCODING="image/x.basis";class Ss{constructor(e){this.streamDataRequester=e}async loadJSON(e,t){return this.load("json",e,t)}async loadBinary(e,t){return se(e)?(ge(t),xe(e)):this.load("binary",e,t)}async loadImage(e,t){return this.load("image",e,t)}async load(e,t,r){if(R(this.streamDataRequester))return(await be(t,{responseType:_s[e]})).data;const o=await ye(this.streamDataRequester.request(t,e,r));if(!0===o.ok)return o.value;throw we(o.error),new ve("",`Request for resource failed: ${o.error}`)}}const _s={image:"image",binary:"array-buffer",json:"json"};function Cs(e,t,r){const o=e.typedBuffer,i=e.typedBufferStride,n=t.typedBuffer,a=t.typedBufferStride,s=r?r.count:t.count;let c=(r&&r.dstIndex?r.dstIndex:0)*i,l=(r&&r.srcIndex?r.srcIndex:0)*a;for(let u=0;u<s;++u)o[c]=n[l],o[c+1]=n[l+1],c+=i,l+=a}function Ms(e,t,r){const o=e.typedBuffer,i=e.typedBufferStride,n=t.typedBuffer,a=t.typedBufferStride,s=r?r.count:t.count;let c=(r&&r.dstIndex?r.dstIndex:0)*i,l=(r&&r.srcIndex?r.srcIndex:0)*a;if($e(t.elementType)){const e=je(t.elementType);if(qe(t.elementType))for(let t=0;t<s;++t)o[c]=Math.max(n[l]/e,-1),o[c+1]=Math.max(n[l+1]/e,-1),c+=i,l+=a;else for(let t=0;t<s;++t)o[c]=n[l]/e,o[c+1]=n[l+1]/e,c+=i,l+=a}else Cs(e,t,r);return e}function As(e,t,r){const o=e.typedBuffer,i=e.typedBufferStride,n=t.typedBuffer,a=t.typedBufferStride,s=r?r.count:t.count;let c=(r&&r.dstIndex?r.dstIndex:0)*i,l=(r&&r.srcIndex?r.srcIndex:0)*a;for(let u=0;u<s;++u)o[c]=n[l],o[c+1]=n[l+1],o[c+2]=n[l+2],c+=i,l+=a}function Ps(e,t,r){const o=e.typedBuffer,i=e.typedBufferStride,n=t.typedBuffer,a=t.typedBufferStride,s=r?r.count:t.count;let c=(r&&r.dstIndex?r.dstIndex:0)*i,l=(r&&r.srcIndex?r.srcIndex:0)*a;for(let u=0;u<s;++u)o[c]=n[l],o[c+1]=n[l+1],o[c+2]=n[l+2],o[c+3]=n[l+3],c+=i,l+=a}function Os(e,t,r,o,i,n){const a=e.typedBuffer,s=e.typedBufferStride,c=n?n.count:e.count;let l=(n&&n.dstIndex?n.dstIndex:0)*s;for(let u=0;u<c;++u)a[l]=t,a[l+1]=r,a[l+2]=o,a[l+3]=i,l+=s}function Is(e,t){const r=e.count;t||(t=new e.TypedArrayConstructor(r));for(let o=0;o<r;o++)t[o]=e.get(o);return t}function Fs(e,t){return new e(new ArrayBuffer(t*e.ElementCount*We(e.ElementType)))}Object.freeze({__proto__:null,copy:Cs,normalizeIntegerBuffer:Ms}),Object.freeze({__proto__:null,copy:As}),Object.freeze({__proto__:null,copy:Ps,fill:Os}),Object.freeze({__proto__:null,copy:function(e,t,r){const o=e.typedBuffer,i=e.typedBufferStride,n=t.typedBuffer,a=t.typedBufferStride,s=r?r.count:t.count;let c=(r&&r.dstIndex?r.dstIndex:0)*i,l=(r&&r.srcIndex?r.srcIndex:0)*a;for(let u=0;u<s;++u){for(let e=0;e<9;++e)o[c+e]=n[l+e];c+=i,l+=a}}}),Object.freeze({__proto__:null,copy:function(e,t,r){const o=e.typedBuffer,i=e.typedBufferStride,n=t.typedBuffer,a=t.typedBufferStride,s=r?r.count:t.count;let c=(r&&r.dstIndex?r.dstIndex:0)*i,l=(r&&r.srcIndex?r.srcIndex:0)*a;for(let u=0;u<s;++u){for(let e=0;e<16;++e)o[c+e]=n[l+e];c+=i,l+=a}}}),Object.freeze({__proto__:null,copy:function(e,t,r){const o=e.typedBuffer,i=e.typedBufferStride,n=t.typedBuffer,a=t.typedBufferStride,s=r?r.count:t.count;let c=(r&&r.dstIndex?r.dstIndex:0)*i,l=(r&&r.srcIndex?r.srcIndex:0)*a;for(let u=0;u<s;++u)o[c]=n[l],c+=i,l+=a},makeDense:Is});const Rs=l.getLogger("esri.views.3d.glTF");class Ls{constructor(e){this.data=e,this.offset4=0,this.dataUint32=new Uint32Array(this.data,0,Math.floor(this.data.byteLength/4))}readUint32(){const e=this.offset4;return this.offset4+=1,this.dataUint32[e]}readUint8Array(e){const t=4*this.offset4;return this.offset4+=e/4,new Uint8Array(this.data,t,e)}remainingBytes(){return this.data.byteLength-4*this.offset4}}const Bs={baseColorFactor:[1,1,1,1],metallicFactor:1,roughnessFactor:1},zs={pbrMetallicRoughness:Bs,emissiveFactor:[0,0,0],alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1},Ds={ESRI_externalColorMixMode:"tint"},Es=(e={})=>{const t=s(s({},Bs),e.pbrMetallicRoughness),r=function(e){switch(e.ESRI_externalColorMixMode){case"multiply":case"tint":case"ignore":case"replace":break;default:he(e.ESRI_externalColorMixMode),e.ESRI_externalColorMixMode="tint"}return e}(s(s({},Ds),e.extras));return c(s(s({},zs),e),{pbrMetallicRoughness:t,extras:r})};const Ns={magFilter:9729,minFilter:9987,wrapS:10497,wrapT:10497};const Us=1179937895,Vs=1313821514,Hs=5130562;class Gs{constructor(e,t,r,o,i){this.context=e,this.errorContext=t,this.uri=r,this.json=o,this.glbBuffer=i,this.bufferCache=new Map,this.textureCache=new Map,this.materialCache=new Map,this.nodeParentMap=new Map,this.nodeTransformCache=new Map,this.baseUri=function(e){let t,r;return e.replace(/^(.*\/)?([^/]*)$/,((e,o,i)=>(t=o||"",r=i||"",""))),{dirPart:t,filePart:r}}(this.uri).dirPart,this.checkVersionSupported(),this.checkRequiredExtensionsSupported(),t.errorUnsupportedIf(null==o.scenes,"Scenes must be defined."),t.errorUnsupportedIf(null==o.meshes,"Meshes must be defined"),t.errorUnsupportedIf(null==o.nodes,"Nodes must be defined."),this.computeNodeParents()}static async load(e,t,r,o){if(se(r)){const o=Se(r);if("model/gltf-binary"!==o.mediaType)try{const i=JSON.parse(o.isBase64?atob(o.data):o.data);return new Gs(e,t,r,i)}catch{}const i=xe(r);if(Gs.isGLBData(i))return this.fromGLBData(e,t,r,i)}if(r.endsWith(".gltf")){const i=await e.loadJSON(r,o);return new Gs(e,t,r,i)}const i=await e.loadBinary(r,o);if(Gs.isGLBData(i))return this.fromGLBData(e,t,r,i);const n=await e.loadJSON(r,o);return new Gs(e,t,r,n)}static isGLBData(e){const t=new Ls(e);return t.remainingBytes()>=4&&t.readUint32()===Us}static async fromGLBData(e,t,r,o){const i=await Gs.parseGLBData(t,o);return new Gs(e,t,r,i.json,i.binaryData)}static async parseGLBData(e,t){const r=new Ls(t);e.assert(r.remainingBytes()>=12,"GLB binary data is insufficiently large.");const o=r.readUint32(),i=r.readUint32(),n=r.readUint32();e.assert(o===Us,"Magic first 4 bytes do not fit to expected GLB value."),e.assert(t.byteLength>=n,"GLB binary data is smaller than header specifies."),e.errorUnsupportedIf(2!==i,"An unsupported GLB container version was detected. Only version 2 is supported.");let a,s,c=0;for(;r.remainingBytes()>=8;){const t=r.readUint32(),o=r.readUint32();0===c?(e.assert(o===Vs,"First GLB chunk must be JSON."),e.assert(t>=0,"No JSON data found."),a=await Xs(r.readUint8Array(t))):1===c?(e.errorUnsupportedIf(o!==Hs,"Second GLB chunk expected to be BIN."),s=r.readUint8Array(t)):e.warnUnsupported("More than 2 GLB chunks detected. Skipping."),c+=1}return a||e.error("No GLB JSON chunk detected."),{json:a,binaryData:s}}async getBuffer(e,t){const r=this.json.buffers[e],o=this.errorContext;if(null==r.uri)return o.assert(null!=this.glbBuffer,"GLB buffer not present"),this.glbBuffer;let i=this.bufferCache.get(e);if(!i){const n=await this.context.loadBinary(this.resolveUri(r.uri),t);i=new Uint8Array(n),this.bufferCache.set(e,i),o.assert(i.byteLength===r.byteLength,"Buffer byte lengths should match.")}return i}async getAccessor(e,t){const r=this.json.accessors[e],o=this.errorContext;o.errorUnsupportedIf(null==r.bufferView,"Some accessor does not specify a bufferView."),o.errorUnsupportedIf(r.type in["MAT2","MAT3","MAT4"],`AttributeType ${r.type} is not supported`);const i=this.json.bufferViews[r.bufferView],n=await this.getBuffer(i.buffer,t),a=qs[r.type],s=Ws[r.componentType],c=a*s,l=i.byteStride||c;return{raw:n.buffer,byteStride:l,byteOffset:n.byteOffset+(i.byteOffset||0)+(r.byteOffset||0),entryCount:r.count,isDenselyPacked:l===c,componentCount:a,componentByteSize:s,componentType:r.componentType,min:r.min,max:r.max,normalized:!!r.normalized}}async getIndexData(e,t){if(null==e.indices)return null;const r=await this.getAccessor(e.indices,t);if(r.isDenselyPacked)switch(r.componentType){case 5121:return new Uint8Array(r.raw,r.byteOffset,r.entryCount);case 5123:return new Uint16Array(r.raw,r.byteOffset,r.entryCount);case 5125:return new Uint32Array(r.raw,r.byteOffset,r.entryCount)}else switch(r.componentType){case 5121:return Is(this.wrapAccessor(Ke,r));case 5123:return Is(this.wrapAccessor(Ye,r));case 5125:return Is(this.wrapAccessor(Xe,r))}}async getPositionData(e,t){const r=this.errorContext;r.errorUnsupportedIf(null==e.attributes.POSITION,"No POSITION vertex data found.");const o=await this.getAccessor(e.attributes.POSITION,t);return r.errorUnsupportedIf(5126!==o.componentType,"Expected type FLOAT for POSITION vertex attribute, but found "+Ys[o.componentType]),r.errorUnsupportedIf(3!==o.componentCount,"POSITION vertex attribute must have 3 components, but found "+o.componentCount.toFixed()),this.wrapAccessor(Ge,o)}async getNormalData(e,t){const r=this.errorContext;r.assert(null!=e.attributes.NORMAL,"No NORMAL vertex data found.");const o=await this.getAccessor(e.attributes.NORMAL,t);return r.errorUnsupportedIf(5126!==o.componentType,"Expected type FLOAT for NORMAL vertex attribute, but found "+Ys[o.componentType]),r.errorUnsupportedIf(3!==o.componentCount,"NORMAL vertex attribute must have 3 components, but found "+o.componentCount.toFixed()),this.wrapAccessor(Ge,o)}async getTangentData(e,t){const r=this.errorContext;r.assert(null!=e.attributes.TANGENT,"No TANGENT vertex data found.");const o=await this.getAccessor(e.attributes.TANGENT,t);return r.errorUnsupportedIf(5126!==o.componentType,"Expected type FLOAT for TANGENT vertex attribute, but found "+Ys[o.componentType]),r.errorUnsupportedIf(4!==o.componentCount,"TANGENT vertex attribute must have 4 components, but found "+o.componentCount.toFixed()),new Ue(o.raw,o.byteOffset,o.byteStride,o.byteOffset+o.byteStride*o.entryCount)}async getTextureCoordinates(e,t){const r=this.errorContext;r.assert(null!=e.attributes.TEXCOORD_0,"No TEXCOORD_0 vertex data found.");const o=await this.getAccessor(e.attributes.TEXCOORD_0,t);return r.errorUnsupportedIf(2!==o.componentCount,"TEXCOORD_0 vertex attribute must have 2 components, but found "+o.componentCount.toFixed()),5126===o.componentType?this.wrapAccessor(He,o):(r.errorUnsupportedIf(!o.normalized,"Integer component types are only supported for a normalized accessor for TEXCOORD_0."),function(e){switch(e.componentType){case 5120:return new it(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case 5121:return new ot(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case 5122:return new rt(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case 5123:return new tt(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case 5125:return new et(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case 5126:return new He(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);default:return void he(e.componentType)}}(o))}async getVertexColors(e,t){const r=this.errorContext;r.assert(null!=e.attributes.COLOR_0,"No COLOR_0 vertex data found.");const o=await this.getAccessor(e.attributes.COLOR_0,t);if(r.errorUnsupportedIf(4!==o.componentCount&&3!==o.componentCount,"COLOR_0 attribute must have 3 or 4 components, but found "+o.componentCount.toFixed()),4===o.componentCount){if(5126===o.componentType)return this.wrapAccessor(Ue,o);if(5121===o.componentType)return this.wrapAccessor(Ve,o);if(5123===o.componentType)return this.wrapAccessor(Qe,o)}else if(3===o.componentCount){if(5126===o.componentType)return this.wrapAccessor(Ge,o);if(5121===o.componentType)return this.wrapAccessor(Je,o);if(5123===o.componentType)return this.wrapAccessor(Ze,o)}r.errorUnsupported("Unsupported component type for COLOR_0 attribute: "+Ys[o.componentType])}hasPositions(e){return void 0!==e.attributes.POSITION}hasNormals(e){return void 0!==e.attributes.NORMAL}hasVertexColors(e){return void 0!==e.attributes.COLOR_0}hasTextureCoordinates(e){return void 0!==e.attributes.TEXCOORD_0}hasTangents(e){return void 0!==e.attributes.TANGENT}async getMaterial(e,t,r){const o=this.errorContext;let i=this.materialCache.get(e.material);if(!i){const n=null!=e.material?Es(this.json.materials[e.material]):Es(),a=n.pbrMetallicRoughness,s=this.hasVertexColors(e);let c,l,u,d,f;a.baseColorTexture&&(o.errorUnsupportedIf(0!==(a.baseColorTexture.texCoord||0),"Only TEXCOORD with index 0 is supported."),c=await this.getTexture(a.baseColorTexture.index,t)),n.normalTexture&&(0!==(n.normalTexture.texCoord||0)?o.warnUnsupported("Only TEXCOORD with index 0 is supported for the normal map texture."):l=await this.getTexture(n.normalTexture.index,t)),n.occlusionTexture&&r&&(0!==(n.occlusionTexture.texCoord||0)?o.warnUnsupported("Only TEXCOORD with index 0 is supported for the occlusion texture."):u=await this.getTexture(n.occlusionTexture.index,t)),n.emissiveTexture&&r&&(0!==(n.emissiveTexture.texCoord||0)?o.warnUnsupported("Only TEXCOORD with index 0 is supported for the emissive texture."):d=await this.getTexture(n.emissiveTexture.index,t)),a.metallicRoughnessTexture&&r&&(0!==(a.metallicRoughnessTexture.texCoord||0)?o.warnUnsupported("Only TEXCOORD with index 0 is supported for the metallicRoughness texture."):f=await this.getTexture(a.metallicRoughnessTexture.index,t));const m=null!=e.material?e.material:-1;i={alphaMode:n.alphaMode,alphaCutoff:n.alphaCutoff,color:a.baseColorFactor,doubleSided:!!n.doubleSided,colorTexture:c,normalTexture:l,name:n.name,id:m,occlusionTexture:u,emissiveTexture:d,emissiveFactor:n.emissiveFactor,metallicFactor:a.metallicFactor,roughnessFactor:a.roughnessFactor,metallicRoughnessTexture:f,vertexColors:s,ESRI_externalColorMixMode:n.extras.ESRI_externalColorMixMode}}return i}async getTexture(e,t){const r=this.errorContext,o=this.json.textures[e],i=(e=>s(s({},Ns),e))(null!=o.sampler?this.json.samplers[o.sampler]:{});r.errorUnsupportedIf(null==o.source,"Source is expected to be defined for a texture.");const n=this.json.images[o.source];let a=this.textureCache.get(e);if(!a){let o;if(n.uri)o=await this.context.loadImage(this.resolveUri(n.uri),t);else{r.errorUnsupportedIf(null==n.bufferView,"Image bufferView must be defined."),r.errorUnsupportedIf(null==n.mimeType,"Image mimeType must be defined.");const e=this.json.bufferViews[n.bufferView],i=await this.getBuffer(e.buffer,t);r.errorUnsupportedIf(null!=e.byteStride,"byteStride not supported for image buffer"),o=await async function(e,t){return new Promise(((r,o)=>{const i=new Blob([e],{type:t}),n=URL.createObjectURL(i),a=new Image;a.addEventListener("load",(()=>{URL.revokeObjectURL(n),"decode"in a?a.decode().then((()=>r(a)),(()=>r(a))):r(a)})),a.addEventListener("error",(e=>{URL.revokeObjectURL(n),o(e)})),a.src=n}))}(new Uint8Array(i.buffer,i.byteOffset+(e.byteOffset||0),e.byteLength),n.mimeType)}a={data:o,wrapS:i.wrapS,wrapT:i.wrapT,minFilter:i.minFilter,name:n.name,id:e},this.textureCache.set(e,a)}return a}getNodeTransform(e){if(void 0===e)return $s;let t=this.nodeTransformCache.get(e);if(!t){const r=this.getNodeTransform(this.getNodeParent(e)),o=this.json.nodes[e];o.matrix?t=W([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],r,o.matrix):o.translation||o.rotation||o.scale?(t=It(r),o.translation&&J(t,t,o.translation),o.rotation&&(js[3]=Ee(js,o.rotation),N(t,t,js[3],js)),o.scale&&_e(t,t,o.scale)):t=r,this.nodeTransformCache.set(e,t)}return t}wrapAccessor(e,t){return new e(t.raw,t.byteOffset,t.byteStride,t.byteOffset+t.byteStride*(t.entryCount-1)+t.componentByteSize*t.componentCount)}resolveUri(e){return Ce(e,this.baseUri)}getNodeParent(e){return this.nodeParentMap.get(e)}checkVersionSupported(){const e=Pt.parse(this.json.asset.version,"glTF");ks.validate(e)}checkRequiredExtensionsSupported(){const e=this.json,t=this.errorContext;e.extensionsRequired&&0!==e.extensionsRequired.length&&t.errorUnsupported("gltf loader was not able to load unsupported feature. Required extensions: "+e.extensionsRequired.join(", "))}computeNodeParents(){this.json.nodes.forEach(((e,t)=>{e.children&&e.children.forEach((e=>{this.nodeParentMap.set(e,t)}))}))}}const ks=new Pt(2,0,"glTF"),$s=Te([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],Math.PI/2),js=Ne(),qs={SCALAR:1,VEC2:2,VEC3:3,VEC4:4},Ws={5120:1,5121:1,5122:2,5123:2,5126:4,5125:4};async function Xs(e){return new Promise(((t,r)=>{const o=new Blob([e]),i=new FileReader;i.onload=()=>{const e=i.result;t(JSON.parse(e))},i.onerror=e=>{r(e)},i.readAsText(o)}))}const Ys={5120:"BYTE",5121:"UNSIGNED_BYTE",5122:"SHORT",5123:"UNSIGNED_SHORT",5125:"UNSIGNED_INT",5126:"FLOAT"};let Ks=0;async function Qs(e,t,r={},o=!0){const i=await Gs.load(e,rc,t,r),n="gltf_"+Ks++,a={lods:[],materials:new Map,textures:new Map,meta:Js(i)},s=!(!i.json.asset.extras||"symbolResource"!==i.json.asset.extras.ESRI_type);return await async function(e,t){const r=e.json,o=r.scenes[r.scene||0].nodes,i=o.length>1;for(const a of o){const e=r.nodes[a],t=[n(a,0)];if(Zs(e)&&!i){const r=e.extensions.MSFT_lod.ids;t.push(...r.map(((e,t)=>n(e,t+1))))}await Promise.all(t)}async function n(o,i){const a=r.nodes[o],s=e.getNodeTransform(o);if(rc.warnUnsupportedIf(null!=a.weights,"Morph targets are not supported."),null!=a.mesh){const e=r.meshes[a.mesh];for(const r of e.primitives)await t(r,s,i,e.name)}for(const e of a.children||[])await n(e,i)}}(i,(async(e,t,s,c)=>{const l=void 0!==e.mode?e.mode:4,u=function(e){switch(e){case 4:case 5:case 6:return e;default:return null}}(l);if(R(u))return void rc.warnUnsupported("Unsupported primitive mode ("+ic[l]+"). Skipping primitive.");if(!i.hasPositions(e))return void rc.warn("Skipping primitive without POSITION vertex attribute.");const d=await i.getMaterial(e,r,o),f={transform:It(t),attributes:{position:await i.getPositionData(e,r),normal:null,texCoord0:null,color:null,tangent:null},indices:await i.getIndexData(e,r),primitiveType:u,material:ec(a,d,n)};i.hasNormals(e)&&(f.attributes.normal=await i.getNormalData(e,r)),i.hasTangents(e)&&(f.attributes.tangent=await i.getTangentData(e,r)),i.hasTextureCoordinates(e)&&(f.attributes.texCoord0=await i.getTextureCoordinates(e,r)),i.hasVertexColors(e)&&(f.attributes.color=await i.getVertexColors(e,r));let m=null;k(a.meta)&&k(a.meta.ESRI_lod)&&"screenSpaceRadius"===a.meta.ESRI_lod.metric&&(m=a.meta.ESRI_lod.thresholds[s]),a.lods[s]=a.lods[s]||{parts:[],name:c,lodThreshold:m},a.lods[s].parts.push(f)})),{model:a,meta:{isEsriSymbolResource:s,uri:i.uri},customMeta:{}}}function Js(e){const t=e.json;let r=null;return t.nodes.forEach((e=>{const t=e.extras;k(t)&&(t.ESRI_proxyEllipsoid||t.ESRI_lod)&&(r=t)})),r}function Zs(e){return e.extensions&&e.extensions.MSFT_lod&&Array.isArray(e.extensions.MSFT_lod.ids)}function ec(e,t,r){const o=t=>{const o=`${r}_tex_${t&&t.id}${t&&t.name?"_"+t.name:""}`;if(t&&!e.textures.has(o)){const r=function(e,t={}){return{data:e,parameters:s({wrap:s({s:10497,t:10497},t.wrap),noUnpackFlip:!0,mipmap:!1},t)}}(t.data,{wrap:{s:tc(t.wrapS),t:tc(t.wrapT)},mipmap:oc.some((e=>e===t.minFilter)),noUnpackFlip:!0});e.textures.set(o,r)}return o},i=`${r}_mat_${t.id}_${t.name}`;if(!e.materials.has(i)){const r=function(e={}){return s({color:[1,1,1],opacity:1,alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1,castShadows:!0,receiveShadows:!0,receiveAmbientOcclustion:!0,textureColor:null,textureNormal:null,textureOcclusion:null,textureEmissive:null,textureMetallicRoughness:null,emissiveFactor:[0,0,0],metallicFactor:1,roughnessFactor:1,colorMixMode:"multiply"},e)}({color:[t.color[0],t.color[1],t.color[2]],opacity:t.color[3],alphaMode:t.alphaMode,alphaCutoff:t.alphaCutoff,doubleSided:t.doubleSided,colorMixMode:t.ESRI_externalColorMixMode,textureColor:t.colorTexture?o(t.colorTexture):void 0,textureNormal:t.normalTexture?o(t.normalTexture):void 0,textureOcclusion:t.occlusionTexture?o(t.occlusionTexture):void 0,textureEmissive:t.emissiveTexture?o(t.emissiveTexture):void 0,textureMetallicRoughness:t.metallicRoughnessTexture?o(t.metallicRoughnessTexture):void 0,emissiveFactor:[t.emissiveFactor[0],t.emissiveFactor[1],t.emissiveFactor[2]],metallicFactor:t.metallicFactor,roughnessFactor:t.roughnessFactor});e.materials.set(i,r)}return i}function tc(e){if(33071===e||33648===e||10497===e)return e;rc.error(`Unexpected TextureSampler WrapMode: ${e}`)}const rc=new class{error(e){throw new ve("gltf-loader-error",e)}errorUnsupported(e){throw new ve("gltf-loader-unsupported-feature",e)}errorUnsupportedIf(e,t){e&&this.errorUnsupported(t)}assert(e,t){e||this.error(t)}warn(e){Rs.warn(e)}warnUnsupported(e){this.warn("[Unsupported Feature] "+e)}warnUnsupportedIf(e,t){e&&this.warnUnsupported(t)}},oc=[9987,9985],ic=["POINTS","LINES","LINE_LOOP","LINE_STRIP","TRIANGLES","TRIANGLE_STRIP","TRIANGLE_FAN"];const nc=l.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");async function ac(e,t){const r=await async function(e,t){const r=k(t)&&t.streamDataRequester;if(r)return async function(e,t,r){const o=await ye(t.request(e,"json",r));if(!0===o.ok)return o.value;we(o.error),sc(o.error.details.url)}(e,r,t);const o=await ye(be(e,Ae(t)));if(!0===o.ok)return o.value.data;we(o.error),sc(o.error)}(e,t);return{resource:r,textures:await uc(r.textureDefinitions,t)}}function sc(e){throw new ve("",`Request for object resource failed: ${e}`)}function cc(e){const t=e.params,r=t.topology;let o=!0;switch(t.vertexAttributes||(nc.warn("Geometry must specify vertex attributes"),o=!1),t.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const e=t.faces;if(e){if(t.vertexAttributes)for(const r in t.vertexAttributes){const t=e[r];t&&t.values?(null!=t.valueType&&"UInt32"!==t.valueType&&(nc.warn(`Unsupported indexed geometry indices type '${t.valueType}', only UInt32 is currently supported`),o=!1),null!=t.valuesPerElement&&1!==t.valuesPerElement&&(nc.warn(`Unsupported indexed geometry values per element '${t.valuesPerElement}', only 1 is currently supported`),o=!1)):(nc.warn(`Indexed geometry does not specify face indices for '${r}' attribute`),o=!1)}}else nc.warn("Indexed geometries must specify faces"),o=!1;break}default:nc.warn(`Unsupported topology '${r}'`),o=!1}e.params.material||(nc.warn("Geometry requires material"),o=!1);const i=e.params.vertexAttributes;for(const n in i)i[n].values||(nc.warn("Geometries with externally defined attributes are not yet supported"),o=!1);return o}function lc(e){const t=lt();return e.forEach((e=>{const r=e.boundingInfo;k(r)&&(ct(t,r.getBBMin()),ct(t,r.getBBMax()))})),t}async function uc(e,t){const r=[];for(const n in e){const o=e[n],i=o.images[0].data;if(!i){nc.warn("Externally referenced texture data is not yet supported");continue}const a=o.encoding+";base64,"+i,s="/textureDefinitions/"+n,c={noUnpackFlip:!0,wrap:{s:10497,t:10497},preMultiplyAlpha:!0},l=k(t)&&t.disableTextures?Promise.resolve(null):At(a,t);r.push(l.then((e=>({refId:s,image:e,params:c,alphaChannelUsage:"rgba"===o.channels?o.alphaChannelUsage||"transparency":"none"}))))}const o=await Promise.all(r),i={};for(const n of o)i[n.refId]=n;return i}function dc(e){switch(e){case"mask":return 2;case"maskAndTransparency":return 3;case"none":return 1;case"transparency":default:return 0}}function fc(e){const t=e.params;return{id:1,material:t.material,texture:t.texture,region:t.texture}}const mc=new Pt(1,2,"wosr");function pc(e,t,r){if(e.count!==t.count)return void Lt.error("source and destination buffers need to have the same number of elements");const o=e.count,i=r[0],n=r[1],a=r[2],s=r[3],c=r[4],l=r[5],u=r[6],d=r[7],f=r[8],m=e.typedBuffer,p=e.typedBufferStride,h=t.typedBuffer,v=t.typedBufferStride;for(let g=0;g<o;g++){const e=g*p,t=g*v,r=h[t],o=h[t+1],x=h[t+2],b=h[t+3];m[e]=i*r+s*o+u*x,m[e+1]=n*r+c*o+d*x,m[e+2]=a*r+l*o+f*x,m[e+3]=b}}function hc(e,t,r){const o=Math.min(e.count,t.count),i=e.typedBuffer,n=e.typedBufferStride,a=t.typedBuffer,s=t.typedBufferStride;for(let c=0;c<o;c++){const e=c*n,t=c*s;i[e]=r*a[t],i[e+1]=r*a[t+1],i[e+2]=r*a[t+2],i[e+3]=r*a[t+3]}}function vc(e){const t=e.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return t?{fileType:"gltf",url:t[1],specifiedLodIndex:null!=t[4]?Number(t[4]):null}:e.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:e,specifiedLodIndex:null}:{fileType:"unknown",url:e,specifiedLodIndex:null}}function gc(e,t,r,o){const i=e.model,n=De(),a=new Array,l=new Map,u=new Map;return i.lods.forEach(((e,d)=>{if(void 0!==o&&d!==o)return;const f={name:e.name,stageResources:{textures:new Array,materials:new Array,geometries:new Array},lodThreshold:k(e.lodThreshold)?e.lodThreshold:null,pivotOffset:[0,0,0],numberOfVertices:0,boundingBox:lt()};a.push(f),e.parts.forEach((e=>{const o=e.material+(e.attributes.normal?"_normal":"")+(e.attributes.color?"_color":"")+(e.attributes.texCoord0?"_texCoord0":"")+(e.attributes.tangent?"_tangent":""),a=i.materials.get(e.material),d=k(e.attributes.texCoord0),m=k(e.attributes.normal);if(!l.has(o)){if(d){if(k(a.textureColor)&&!u.has(a.textureColor)){const e=i.textures.get(a.textureColor),t=c(s({},e.parameters),{preMultiplyAlpha:!0});u.set(a.textureColor,new Ts(e.data,t))}if(k(a.textureNormal)&&!u.has(a.textureNormal)){const e=i.textures.get(a.textureNormal),t=c(s({},e.parameters),{preMultiplyAlpha:!0});u.set(a.textureNormal,new Ts(e.data,t))}if(k(a.textureOcclusion)&&!u.has(a.textureOcclusion)){const e=i.textures.get(a.textureOcclusion),t=c(s({},e.parameters),{preMultiplyAlpha:!0});u.set(a.textureOcclusion,new Ts(e.data,t))}if(k(a.textureEmissive)&&!u.has(a.textureEmissive)){const e=i.textures.get(a.textureEmissive),t=c(s({},e.parameters),{preMultiplyAlpha:!0});u.set(a.textureEmissive,new Ts(e.data,t))}if(k(a.textureMetallicRoughness)&&!u.has(a.textureMetallicRoughness)){const e=i.textures.get(a.textureMetallicRoughness),t=c(s({},e.parameters),{preMultiplyAlpha:!0});u.set(a.textureMetallicRoughness,new Ts(e.data,t))}}const n=a.color[0]**(1/es),f=a.color[1]**(1/es),p=a.color[2]**(1/es),h=a.emissiveFactor[0]**(1/es),v=a.emissiveFactor[1]**(1/es),g=a.emissiveFactor[2]**(1/es);l.set(o,new Ja(s(c(s({},t),{transparent:"BLEND"===a.alphaMode,textureAlphaMode:xc(a.alphaMode),textureAlphaCutoff:a.alphaCutoff,diffuse:[n,f,p],ambient:[n,f,p],opacity:a.opacity,doubleSided:a.doubleSided,doubleSidedType:"winding-order",cullFace:a.doubleSided?0:2,vertexColors:!!e.attributes.color,vertexTangents:!!e.attributes.tangent,normals:m?"default":"screenDerivative",castShadows:!0,receiveSSAO:!0,textureId:k(a.textureColor)&&d?u.get(a.textureColor).id:void 0,colorMixMode:a.colorMixMode,normalTextureId:k(a.textureNormal)&&d?u.get(a.textureNormal).id:void 0,textureAlphaPremultiplied:!0,occlusionTextureId:k(a.textureOcclusion)&&d?u.get(a.textureOcclusion).id:void 0,emissiveTextureId:k(a.textureEmissive)&&d?u.get(a.textureEmissive).id:void 0,metallicRoughnessTextureId:k(a.textureMetallicRoughness)&&d?u.get(a.textureMetallicRoughness).id:void 0,emissiveFactor:[h,v,g],mrrFactors:[a.metallicFactor,a.roughnessFactor,t.mrrFactors[2]],isSchematic:!1}),r)))}const p=function(e,t){switch(t){case 4:return function(e){return"number"==typeof e?Fr(e):Me(e)||le(e)?new Uint32Array(e):e}(e);case 5:return function(e){const t="number"==typeof e?e:e.length;if(t<3)return new Uint16Array(0);const r=t-2,o=r<=65536?new Uint16Array(3*r):new Uint32Array(3*r);if("number"==typeof e){let e=0;for(let t=0;t<r;t+=1)t%2==0?(o[e++]=t,o[e++]=t+1,o[e++]=t+2):(o[e++]=t+1,o[e++]=t,o[e++]=t+2)}else{let t=0;for(let i=0;i<r;i+=1)if(i%2==0){const r=e[i],n=e[i+1],a=e[i+2];o[t++]=r,o[t++]=n,o[t++]=a}else{const r=e[i+1],n=e[i],a=e[i+2];o[t++]=r,o[t++]=n,o[t++]=a}}return o}(e);case 6:return function(e){const t="number"==typeof e?e:e.length;if(t<3)return new Uint16Array(0);const r=t-2,o=r<=65536?new Uint16Array(3*r):new Uint32Array(3*r);if("number"==typeof e){let e=0;for(let t=0;t<r;++t)o[e++]=0,o[e++]=t+1,o[e++]=t+2;return o}{const t=e[0];let i=e[1],n=0;for(let a=0;a<r;++a){const r=e[a+2];o[n++]=t,o[n++]=i,o[n++]=r,i=r}return o}}(e)}}(e.indices||e.attributes.position.count,e.primitiveType),h=e.attributes.position.count,v=Fs(Ge,h);Bt(v,e.attributes.position,e.transform);const g=[["position",{data:v.typedBuffer,size:v.elementCount,exclusive:!0}]],x=[["position",p]];if(k(e.attributes.normal)){const t=Fs(Ge,h);Fe(n,e.transform),zt(t,e.attributes.normal,n),g.push(["normal",{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),x.push(["normal",p])}if(k(e.attributes.tangent)){const t=Fs(Ue,h);Fe(n,e.transform),pc(t,e.attributes.tangent,n),g.push(["tangent",{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),x.push(["tangent",p])}if(k(e.attributes.texCoord0)){const t=Fs(He,h);Ms(t,e.attributes.texCoord0),g.push(["uv0",{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),x.push(["uv0",p])}if(k(e.attributes.color)){const t=Fs(Ve,h);if(4===e.attributes.color.elementCount)e.attributes.color instanceof Ue?hc(t,e.attributes.color,255):e.attributes.color instanceof Ve?Ps(t,e.attributes.color):e.attributes.color instanceof Qe&&hc(t,e.attributes.color,1/256);else{Os(t,255,255,255,255);const r=new Je(t.buffer,0,4);e.attributes.color instanceof Ge?Dt(r,e.attributes.color,255):e.attributes.color instanceof Je?As(r,e.attributes.color):e.attributes.color instanceof Ze&&Dt(r,e.attributes.color,1/256)}g.push(["color",{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),x.push(["color",p])}const b=new Dr(g,x);f.stageResources.geometries.push(b),f.stageResources.materials.push(l.get(o)),d&&(k(a.textureColor)&&f.stageResources.textures.push(u.get(a.textureColor)),k(a.textureNormal)&&f.stageResources.textures.push(u.get(a.textureNormal)),k(a.textureOcclusion)&&f.stageResources.textures.push(u.get(a.textureOcclusion)),k(a.textureEmissive)&&f.stageResources.textures.push(u.get(a.textureEmissive)),k(a.textureMetallicRoughness)&&f.stageResources.textures.push(u.get(a.textureMetallicRoughness))),f.numberOfVertices+=h;const y=b.boundingInfo;k(y)&&(ct(f.boundingBox,y.getBBMin()),ct(f.boundingBox,y.getBBMax()))}))})),a}function xc(e){switch(e){case"BLEND":return 0;case"MASK":return 2;case"OPAQUE":return 1;default:return 0}}Object.freeze({__proto__:null,transformMat4:function(e,t,r){if(e.count!==t.count)return void Lt.error("source and destination buffers need to have the same number of elements");const o=e.count,i=r[0],n=r[1],a=r[2],s=r[3],c=r[4],l=r[5],u=r[6],d=r[7],f=r[8],m=r[9],p=r[10],h=r[11],v=r[12],g=r[13],x=r[14],b=r[15],y=e.typedBuffer,w=e.typedBufferStride,T=t.typedBuffer,S=t.typedBufferStride;for(let _=0;_<o;_++){const e=_*w,t=_*S,r=T[t],o=T[t+1],C=T[t+2],M=T[t+3];y[e]=i*r+c*o+f*C+v*M,y[e+1]=n*r+l*o+m*C+g*M,y[e+2]=a*r+u*o+p*C+x*M,y[e+3]=s*r+d*o+h*C+b*M}},transformMat3:pc,scale:hc,shiftRight:function(e,t,r){const o=Math.min(e.count,t.count),i=e.typedBuffer,n=e.typedBufferStride,a=t.typedBuffer,s=t.typedBufferStride;for(let c=0;c<o;c++){const e=c*n,t=c*s;i[e]=a[t]>>r,i[e+1]=a[t+1]>>r,i[e+2]=a[t+2]>>r,i[e+3]=a[t+3]>>r}}});var bc=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",fetch:async function(e,t){const r=vc(Oe(e));if("wosr"===r.fileType){const e=await(t.cache?t.cache.loadWOSR(r.url,t):ac(r.url,t)),o=function(e,t){const r=[],o=[],i=[],n=[],a=e.resource,s=Pt.parse(a.version||"1.0","wosr");mc.validate(s);const c=a.model.name,l=a.model.geometries,u=a.materialDefinitions,d=e.textures;let f=0;const m=new Map;for(let p=0;p<l.length;p++){const e=l[p];if(!cc(e))continue;const a=fc(e),s=e.params.vertexAttributes,c=[];for(const t in s){const e=s[t],r=e.values;c.push([t,{data:r,size:e.valuesPerElement,exclusive:!0}])}const h=[];if("PerAttributeArray"!==e.params.topology){const t=e.params.faces;for(const e in t)h.push([e,new Uint32Array(t[e].values)])}const v=d&&d[a.texture];if(v&&!m.has(a.texture)){const{image:e,params:t}=v,r=new Ts(e,t);n.push(r),m.set(a.texture,r)}const g=m.get(a.texture),x=g?g.id:void 0;let b=i[a.material]?i[a.material][a.texture]:null;if(!b){const e=u[a.material.substring(a.material.lastIndexOf("/")+1)].params;1===e.transparency&&(e.transparency=0);const r=v&&v.alphaChannelUsage,o=e.transparency>0||"transparency"===r||"maskAndTransparency"===r,n={ambient:Pe(e.diffuse),diffuse:Pe(e.diffuse),opacity:1-(e.transparency||0),transparent:o,textureAlphaMode:v?dc(v.alphaChannelUsage):void 0,textureAlphaCutoff:.33,textureId:x,initTextureTransparent:!0,doubleSided:!0,cullFace:0,colorMixMode:e.externalColorMixMode||"tint",textureAlphaPremultiplied:!0};k(t)&&t.materialParamsMixin&&Object.assign(n,t.materialParamsMixin),b=new Ja(n),i[a.material]||(i[a.material]={}),i[a.material][a.texture]=b}o.push(b);const y=new Dr(c,h);f+=h.position?h.position.length:0,r.push(y)}return{name:c,stageResources:{textures:n,materials:o,geometries:r},pivotOffset:a.model.pivotOffset,boundingBox:lc(r),numberOfVertices:f,lodThreshold:null}}(e,t);return{lods:[o],referenceBoundingBox:o.boundingBox,isEsriSymbolResource:!1,isWosr:!0,remove:e.remove}}const o=await(t.cache?t.cache.loadGLTF(r.url,t,t.usePBR):Qs(new Ss(t.streamDataRequester),r.url,t,t.usePBR)),i=Ie(o.model.meta,"ESRI_proxyEllipsoid");o.meta.isEsriSymbolResource&&k(i)&&-1!==o.meta.uri.indexOf("/RealisticTrees/")&&function(e,t){for(let r=0;r<e.model.lods.length;++r){const o=e.model.lods[r];e.customMeta.esriTreeRendering=!0;for(const i of o.parts){const o=i.attributes.normal;if(R(o))return;const n=i.attributes.position,a=n.count,s=d(),c=d(),l=d(),u=Fs(Ve,a),f=Fs(Ge,a),m=j([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],i.transform);for(let d=0;d<a;d++){n.getVec(d,c),o.getVec(d,s),U(c,c,i.transform),T(l,c,t.center),Re(l,l,t.radius);const a=l[2],h=I(l),v=Math.min(.45+.55*h*h,1);Re(l,l,t.radius),U(l,l,m),B(l,l),r+1!==e.model.lods.length&&e.model.lods.length>1&&p(l,l,s,a>-1?.2:Math.min(-4*a-3.8,1)),f.setVec(d,l),u.set(d,0,255*v),u.set(d,1,255*v),u.set(d,2,255*v),u.set(d,3,255)}i.attributes.normal=f,i.attributes.color=u}}}(o,i);const n=o.meta.isEsriSymbolResource?{usePBR:t.usePBR,isSchematic:!1,treeRendering:o.customMeta.esriTreeRendering,mrrFactors:[0,1,.2]}:{usePBR:t.usePBR,isSchematic:!1,mrrFactors:[0,1,.5]},a=c(s({},t.materialParamsMixin),{treeRendering:o.customMeta.esriTreeRendering});if(null!=r.specifiedLodIndex){const e=gc(o,n,a,r.specifiedLodIndex);let t=e[0].boundingBox;return 0!==r.specifiedLodIndex&&(t=gc(o,n,a,0)[0].boundingBox),{lods:e,referenceBoundingBox:t,isEsriSymbolResource:o.meta.isEsriSymbolResource,isWosr:!1,remove:o.remove}}const l=gc(o,n,a);return{lods:l,referenceBoundingBox:l[0].boundingBox,isEsriSymbolResource:o.meta.isEsriSymbolResource,isWosr:!1,remove:o.remove}},gltfToEngineResources:gc,parseUrl:vc});export{$a as P,Ya as j,bc as o};
