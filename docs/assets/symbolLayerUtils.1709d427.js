import{ac as e,dX as r,h as t,U as n,r as o}from"./vendor.abf366c9.js";import{u as i,F as s,a as c}from"./aaBoundingBox.ef55777a.js";const u=i(-.5,-.5,-.5,.5,.5,.5),a=i(-.5,-.5,0,.5,.5,1),l=i(-.5,-.5,0,.5,.5,.5);let f=y();function y(){return new r(50)}function m(){f=y()}function h(e,r){if("icon"===e.type)return d(e,r);if("object"===e.type)return b(e,r);throw new t("symbol3d:unsupported-symbol-layer","computeLayerSize only works with symbol layers of type Icon and Object")}async function p(r,n){if("icon"===r.type)return function(e,r){return d(e,r).then((r=>{if(null==e.size)return r;const t=r[0]/r[1];return t>1?[e.size,e.size/t]:[e.size*t,e.size]}))}(r,n);if("object"===r.type)return async function(r,t){return function(r,{isPrimitive:t,width:n,depth:o,height:i}){const s=t?10:1;if(null==n&&null==i&&null==o)return[s*r[0],s*r[1],s*r[2]];const c=e(n,o,i);let u;for(let e=0;e<3;e++){const t=c[e];if(null!=t){u=t/r[e];break}}for(let e=0;e<3;e++)null==c[e]&&(c[e]=r[e]*u);return c}(await b(r,t),r)}(r,n);throw new t("symbol3d:unsupported-symbol-layer","computeLayerSize only works with symbol layers of type Icon and Object")}async function d(e,r){if(e.resource.href)return(i=e.resource.href,n(i,{responseType:"image"}).then((e=>e.data))).then((e=>[e.width,e.height]));var i;if(e.resource.primitive)return o(r)?[r,r]:[256,256];throw new t("symbol3d:invalid-symbol-layer","symbol layers of type Icon must have either an href or a primitive resource")}function b(e,r){return async function(e,r){if(!e.isPrimitive){const r=e.resource.href,t=f.get(r);if(void 0!==t)return Promise.resolve(t);const n=await import("./objectResourceUtils.2975b053.js").then((function(e){return e.o})),o=await n.fetch(r,{disableTextures:!0});return f.put(r,o.referenceBoundingBox),o.referenceBoundingBox}let n=null;if(e.resource&&e.resource.primitive&&(n=c(function(e){switch(e){case"sphere":case"cube":case"diamond":return u;case"cylinder":case"cone":case"inverted-cone":return a;case"tetrahedron":return l;default:return}}(e.resource.primitive)),o(r)))for(let t=0;t<n.length;t++)n[t]*=r;return n?Promise.resolve(n):Promise.reject(new t("symbol:invalid-resource","The symbol does not have a valid resource"))}(e,r).then((e=>s(e)))}export{m as clearBoundingBoxCache,d as computeIconLayerResourceSize,h as computeLayerResourceSize,p as computeLayerSize,b as computeObjectLayerResourceSize};