var e=Object.defineProperty,r=Object.defineProperties,t=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,i=(r,t,s)=>t in r?e(r,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):r[t]=s,n=(e,r)=>{for(var t in r||(r={}))a.call(r,t)&&i(e,t,r[t]);if(s)for(var t of s(r))o.call(r,t)&&i(e,t,r[t]);return e},u=(e,s)=>r(e,t(s));import{dS as p,d0 as c,aj as l,ae as f,ag as m,dT as b}from"./vendor.74d5941c.js";import{l as y,u as d,d as B,n as h,i as g,o as j,b as v}from"./NAServiceDescription.7a69545e.js";import"./GPMessage.8bfedb6d.js";const A=j({accumulateAttributes:{name:"accumulateAttributeNames"},attributeParameterValues:!0,directionsTimeAttribute:{name:"directionsTimeAttributeName"},impedanceAttribute:{name:"impedanceAttributeName"},outSpatialReference:{name:"outSR",getter:e=>e.outSpatialReference.wkid},pointBarriers:{name:"barriers"},polylineBarriers:!0,polygonBarriers:!0,restrictionAttributes:{name:"restrictionAttributeNames"},stops:!0,travelMode:!0});let O=class extends(v(b)){constructor(e){super(e)}solve(e,r){return async function(e,r,t){const s=[],a=[],o={},i={},f=p(e);return r.stops&&r.stops.features&&y(r.stops.features,a,"stops.features",o),r.pointBarriers&&r.pointBarriers.features&&y(r.pointBarriers.features,a,"pointBarriers.features",o),r.polylineBarriers&&r.polylineBarriers.features&&y(r.polylineBarriers.features,a,"polylineBarriers.features",o),r.polygonBarriers&&r.polygonBarriers.features&&y(r.polygonBarriers.features,a,"polygonBarriers.features",o),c(a).then((e=>{for(const r in o){const t=o[r];s.push(r),i[r]=e.slice(t[0],t[1])}return d(i,s)?B(f.path):Promise.resolve({dontCheck:!0})})).then((e=>{("dontCheck"in e?e.dontCheck:e.hasZ)||h(i,s);for(const t in i)i[t].forEach(((e,s)=>{r.get(t)[s].geometry=e}));const a=u(n({},t),{query:u(n(n({},f.query),A.toQueryParams(r)),{f:"json"})}),{path:o}=f,p="/solve",c=o.endsWith(p)?o:o+p;return l(c,a)})).then((e=>g(e)))}(this.url,e,r)}};O=f([m("esri.tasks.RouteTask")],O);var P=O;export default P;
