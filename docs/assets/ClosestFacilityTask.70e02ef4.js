var e=Object.defineProperty,r=Object.defineProperties,t=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,o=(r,t,i)=>t in r?e(r,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):r[t]=i,n=(e,r)=>{for(var t in r||(r={}))s.call(r,t)&&o(e,t,r[t]);if(i)for(var t of i(r))a.call(r,t)&&o(e,t,r[t]);return e};import{D as l,E as p,aj as u,cy as c,cw as y,b4 as d,cz as f,F as m,cA as B,cB as b,b3 as v,r as g,cC as h,U as P,cD as O,cE as j}from"./vendor.d5722712.js";import{c as A,a as R,l as S,u as N,d as C,n as k,o as F,b as w}from"./NAServiceDescription.314d4f11.js";import"./GPMessage.c793f319.js";function D(e){return b.fromJSON(e).features.map((e=>e.geometry))}let E=class extends B{constructor(e){super(e),this.directions=null,this.facilities=null,this.incidents=null,this.messages=null,this.pointBarriers=null,this.polylineBarriers=null,this.polygonBarriers=null,this.routes=null}readFacilities(e){return D(e)}readIncidents(e){return D(e)}readPointBarriers(e,r){return D(r.barriers)}readPolylineBarriers(e){return D(e)}readPolygonBarriers(e){return D(e)}readRoutes(e){return(r=e).features.map((e=>{const t=v.fromJSON(r.spatialReference),i=f.fromJSON(e);return g(i.geometry)&&(i.geometry.spatialReference=t),i}));var r}};l([p({type:[A]})],E.prototype,"directions",void 0),l([p({type:[u]})],E.prototype,"facilities",void 0),l([c("facilities")],E.prototype,"readFacilities",null),l([p({type:[u]})],E.prototype,"incidents",void 0),l([c("incidents")],E.prototype,"readIncidents",null),l([p({type:[R]})],E.prototype,"messages",void 0),l([p({type:[u]})],E.prototype,"pointBarriers",void 0),l([c("pointBarriers",["barriers"])],E.prototype,"readPointBarriers",null),l([p({type:[y]})],E.prototype,"polylineBarriers",void 0),l([c("polylineBarriers")],E.prototype,"readPolylineBarriers",null),l([p({type:[d]})],E.prototype,"polygonBarriers",void 0),l([c("polygonBarriers")],E.prototype,"readPolygonBarriers",null),l([p({type:[f]})],E.prototype,"routes",void 0),l([c("routes")],E.prototype,"readRoutes",null),E=l([m("esri.tasks.support.ClosestFacilitySolveResult")],E);var J=E;const x=F({accumulateAttributes:{name:"accumulateAttributeNames"},attributeParameterValues:!0,directionsTimeAttribute:{name:"directionsTimeAttributeName"},impedanceAttribute:{name:"impedanceAttributeName"},facilities:!0,incidents:!0,outSpatialReference:{name:"outSR",getter:e=>e.outSpatialReference.wkid},pointBarriers:{name:"barriers"},polylineBarriers:!0,polygonBarriers:!0,restrictionAttributes:{name:"restrictionAttributeNames"},returnPointBarriers:{name:"returnBarriers"},returnRoutes:{name:"returnCFRoutes"},travelMode:!0});let I=class extends(w(j)){constructor(e){super(e),this.url=null}solve(e,i){return async function(e,i,s){const a=[],o=[],l={},p={},u=O(e);return i.incidents&&i.incidents.features&&S(i.incidents.features,o,"incidents.features",l),i.facilities&&i.facilities.features&&S(i.facilities.features,o,"facilities.features",l),i.pointBarriers&&i.pointBarriers.features&&S(i.pointBarriers.features,o,"pointBarriers.features",l),i.polylineBarriers&&i.polylineBarriers.features&&S(i.polylineBarriers.features,o,"polylineBarriers.features",l),i.polygonBarriers&&i.polygonBarriers.features&&S(i.polygonBarriers.features,o,"polygonBarriers.features",l),h(o).then((e=>{for(const r in l){const t=l[r];a.push(r),p[r]=e.slice(t[0],t[1])}return N(p,a)?C(u.path):Promise.resolve({dontCheck:!0})})).then((e=>{("dontCheck"in e?e.dontCheck:e.hasZ)||k(p,a);for(const r in p)p[r].forEach(((e,t)=>{i.get(r)[t].geometry=e}));let o={query:n((l=n({},u.query),c={f:"json"},r(l,t(c))),x.toQueryParams(i))};var l,c;return s&&(o=n(n({},s),o)),P(`${u.path}/solveClosestFacility`,o)})).then((e=>J.fromJSON(e.data)))}(this.url,e,i)}};l([p()],I.prototype,"url",void 0),I=l([m("esri.tasks.ClosestFacilityTask")],I);var T=I;export default T;