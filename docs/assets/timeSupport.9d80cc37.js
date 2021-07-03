import{bB as e,aM as t,eA as r,cC as i,cg as n,t as s,eB as l,eC as o,bU as a,ep as u,aP as c,aQ as f,eD as p,eE as m,aR as y,eF as R,eG as S,aE as g,cc as d,aD as h,cp as w,eH as I,eI as G,z as N,aS as b,aK as v}from"./vendor.d5722712.js";import{p as P,y as M}from"./quantizationUtils.752d3fe4.js";const A=new e({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"}),F=Object.freeze({}),E=new t,U=new t,C=new t,O={esriGeometryPoint:m,esriGeometryPolyline:y,esriGeometryPolygon:R,esriGeometryMultipoint:S};function T(e,t,r,i=e.hasZ,n=e.hasM){const s=e.hasZ&&i,l=e.hasM&&n;if(r){const o=f(C,t,e.hasZ,e.hasM,"esriGeometryPoint",r,i,n);return m(o,s,l)}return m(t,s,l)}function j(e,t,r,i,n,s,l=t,o=r){const a=t&&l,u=r&&o,m=i?"coords"in i?i:i.geometry:null;if(!m)return null;if(n){let i=c(U,m,t,r,e,n,l,o);return s&&(i=f(C,i,a,u,e,s)),O[e](i,a,u)}if(s){const i=f(C,m,t,r,e,s,l,o);return O[e](i,a,u)}return p(E,m,t,r,l,o),O[e](E,a,u)}async function _(e,t,r){const{outFields:i,orderByFields:n,groupByFieldsForStatistics:s,outStatistics:l}=e;if(i)for(let o=0;o<i.length;o++)i[o]=i[o].trim();if(n)for(let o=0;o<n.length;o++)n[o]=n[o].trim();if(s)for(let o=0;o<s.length;o++)s[o]=s[o].trim();if(l)for(let o=0;o<l.length;o++)l[o].onStatisticField&&(l[o].onStatisticField=l[o].onStatisticField.trim());return e.geometry&&!e.outSR&&(e.outSR=e.geometry.spatialReference),q(e,t,r)}async function q(e,t,c){if(!e)return null;let{where:f}=e;if(e.where=f=f&&f.trim(),(!f||/^1 *= *1$/.test(f)||t&&t===f)&&(e.where=null),!e.geometry)return e;let p=await async function(e){const{geometry:t,distance:r,units:i}=e;if(null==r||"vertexAttributes"in t)return t;const n=t.spatialReference,s=i?A.fromJSON(i):l(n),c=n&&(o(n)||a(n))?t:await P(n,u).then((()=>M(t,u)));return(await async function(){return(await import("./geometryEngineJSON.100cb9da.js")).geodesicBuffer}())(c.spatialReference,c,r,s)}(e);if(e.distance=0,e.units=null,"esriSpatialRelEnvelopeIntersects"===e.spatialRel){const{spatialReference:t}=e.geometry;p=r(p),p.spatialReference=t}e.geometry=p,await P(p.spatialReference,c);const m=(await i(n(p)))[0];if(s(m))throw F;const y=m.toJSON(),R=await M(y,y.spatialReference,c);if(!R)throw F;return R.spatialReference=c,e.geometry=R,e}function x(e){return e&&J in e?JSON.parse(JSON.stringify(e,B)):e}const J="_geVersion",B=(e,t)=>e!==J?t:void 0;function D(e,t){return e?t?4:3:t?3:2}function z(e,t,r,i,n){if(!e)return!1;const s=D(t,r),{coords:l,lengths:o}=e;let a=!1,u=0;for(const c of o)a=V(a,l,s,u,c,i,n),u+=c*s;return a}function V(e,t,r,i,n,s,l){let o=e,a=i;for(let u=i,c=i+n*r;u<c;u+=r){a=u+r,a===c&&(a=i);const e=t[u],n=t[u+1],f=t[a],p=t[a+1];(n<l&&p>=l||p<l&&n>=l)&&e+(l-n)/(p-n)*(f-e)<s&&(o=!o)}return o}const Z="feature-store:unsupported-query",K={esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"intersects",esriSpatialRelIndexIntersects:null,esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:null},W={esriSpatialRelIntersects:!0,esriSpatialRelContains:!0,esriSpatialRelWithin:!0,esriSpatialRelCrosses:!0,esriSpatialRelDisjoint:!0,esriSpatialRelTouches:!0,esriSpatialRelOverlaps:!0,esriSpatialRelEnvelopeIntersects:!0,esriSpatialRelIndexIntersects:!1,esriSpatialRelRelation:!1},Y={esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!0},k={esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!1};function H(e,r,i,n,s){if(g(r)&&"esriGeometryPoint"===i&&("esriSpatialRelIntersects"===e||"esriSpatialRelContains"===e)){const e=d(new t,r,!1,!1);return Promise.resolve((t=>function(e,t,r,i){return z(e,t,r,i.coords[0],i.coords[1])}(e,!1,!1,t)))}if(g(r)&&"esriGeometryMultipoint"===i){const i=d(new t,r,!1,!1);if("esriSpatialRelContains"===e)return Promise.resolve((e=>function(e,t,r,i,n,s){const l=D(n,s),{coords:o,lengths:a}=i;if(!a)return!1;for(let u=0,c=0;u<a.length;u++,c+=l)if(!z(e,t,r,o[c],o[c+1]))return!1;return!0}(i,!1,!1,e,n,s)))}if(h(r)&&"esriGeometryPoint"===i&&("esriSpatialRelIntersects"===e||"esriSpatialRelContains"===e))return Promise.resolve((e=>w(r,j(i,n,s,e))));if(h(r)&&"esriGeometryMultipoint"===i&&"esriSpatialRelContains"===e)return Promise.resolve((e=>I(r,j(i,n,s,e))));if(h(r)&&"esriSpatialRelIntersects"===e){const e=G(i);return Promise.resolve((t=>e(r,j(i,n,s,t))))}return import("./geometryEngineJSON.100cb9da.js").then((t=>{const l=t[K[e]].bind(null,r.spatialReference,r);return e=>l(j(i,n,s,e))}))}async function Q(e,t,r){const{spatialRel:i,geometry:n}=e;if(n){if(!0!==W[i])throw new N(Z,"Unsupported query spatial relationship",{query:e});if(b(n.spatialReference)&&b(r)){if(!function(e){return!0===Y[v(e)]}(n))throw new N(Z,"Unsupported query geometry type",{query:e});if(!function(e){return!0===k[e]}(t))throw new N(Z,"Unsupported layer geometry type",{query:e});if(e.outSR)return P(e.geometry&&e.geometry.spatialReference,e.outSR)}}}function $(e){if(h(e))return!0;if(g(e)){for(const t of e.rings){if(5!==t.length)return!1;if(t[0][0]!==t[1][0]||t[0][0]!==t[4][0]||t[2][0]!==t[3][0]||t[0][1]!==t[3][1]||t[0][1]!==t[4][1]||t[1][1]!==t[2][1])return!1}return!0}return!1}function L(e,t){if(!e)return null;const r=t.featureAdapter,{startTimeField:i,endTimeField:n}=e;let s=Number.POSITIVE_INFINITY,l=Number.NEGATIVE_INFINITY;if(i&&n)t.forEach((e=>{const t=r.getAttribute(e,i),o=r.getAttribute(e,n);null==t||isNaN(t)||(s=Math.min(s,t)),null==o||isNaN(o)||(l=Math.max(l,o))}));else{const e=i||n;t.forEach((t=>{const i=r.getAttribute(t,e);null==i||isNaN(i)||(s=Math.min(s,i),l=Math.max(l,i))}))}return{start:s,end:l}}function X(e,t,r){if(!t||!e)return null;const{startTimeField:i,endTimeField:n}=e;if(!i&&!n)return null;const{start:s,end:l}=t;return null===s&&null===l?null:void 0===s&&void 0===l?()=>!1:i&&n?function(e,t,r,i,n){return null!=i&&null!=n?s=>{const l=e.getAttribute(s,t),o=e.getAttribute(s,r);return(null==l||l<=n)&&(null==o||o>=i)}:null!=i?t=>{const n=e.getAttribute(t,r);return null==n||n>=i}:null!=n?r=>{const i=e.getAttribute(r,t);return null==i||i<=n}:void 0}(r,i,n,s,l):function(e,t,r,i){return null!=r&&null!=i&&r===i?i=>e.getAttribute(i,t)===r:null!=r&&null!=i?n=>{const s=e.getAttribute(n,t);return s>=r&&s<=i}:null!=r?i=>e.getAttribute(i,t)>=r:null!=i?r=>e.getAttribute(r,t)<=i:void 0}(r,i||n,s,l)}export{$ as I,_ as J,T as N,Q as P,j as _,q as a,F as j,X as n,L as t,H as v,x};