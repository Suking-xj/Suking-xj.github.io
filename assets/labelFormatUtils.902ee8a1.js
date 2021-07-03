import{a4 as e,iS as t,iT as a,cE as r,iU as n,iV as s,f_ as i,iW as l,aa as u,iX as o,iY as c}from"./vendor.74d5941c.js";const p=e.getLogger("esri.layers.support.labelFormatUtils"),d={type:"simple",evaluate:()=>null},f={getAttribute:(e,t)=>e.field(t)};async function y(e,n,s){if(!e||!e.symbol)return d;const i=e.where,l=t(e),y=i?await import("./WhereClause.f27c6004.js"):null;let g;if("arcade"===l.type){const e=await a(l.expression,s,n);g={type:"arcade",evaluate(t){try{const a=e.evaluate({$feature:"attributes"in t?e.repurposeFeature(t):e.repurposeAdapter(t)});if(null!=a)return a.toString()}catch(a){p.error(new u("bad-arcade-expression","Encountered an error when evaluating label expression for feature",{feature:t,expression:l}))}return null},needsHydrationToEvaluate:()=>null==o(l.expression)}}else g={type:"simple",evaluate:e=>l.expression.replace(/{[^}]*}/g,(t=>{const a=t.slice(1,-1),r=c(n,a);if(!r)return t;let s=null;return"attributes"in e?e&&e.attributes&&(s=e.attributes[r.name]):s=e.field(r.name),null==s?"":m(s,r)}))};if(i){let e;try{e=y.WhereClause.create(i,new r(n))}catch(b){return d}const t=g.evaluate;g.evaluate=a=>{const r="attributes"in a?void 0:f;return e.testFeature(a,r)?t(a):null}}return g}function m(e,t){if(null==e)return"";const a=t.domain;if(a)if("codedValue"===a.type||"coded-value"===a.type){const t=e;for(const e of a.codedValues)if(e.code===t)return e.name}else if("range"===a.type){const t=+e,r="range"in a?a.range[0]:a.minValue,n="range"in a?a.range[1]:a.maxValue;if(r<=t&&t<=n)return a.name}let r=e;return"date"===t.type||"esriFieldTypeDate"===t.type?r=n(r,s("short-date")):i(t)&&(r=l(+r)),r||""}export{y as createLabelFunction,m as formatField};
