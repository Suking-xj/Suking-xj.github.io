var e=Object.defineProperty,t=Object.defineProperties,s=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,o=(t,s,r)=>s in t?e(t,s,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[s]=r;import{ae as n,ag as d,cB as l,a5 as c,aw as p,iR as h}from"./vendor.74d5941c.js";import{o as f}from"./definitions.6737c10c.js";import{l as y}from"./tileUtils.7f9c3912.js";import{p as u}from"./BaseProcessor.9a177f83.js";class m{constructor(e,t){this.offset=e,this.extent=t}}let w=class extends u{constructor(){super(...arguments),this.type="heatmap",this._tileKeyToFeatureSets=new Map}initialize(){this.handles.add([this.tileStore.on("update",this.onTileUpdate.bind(this))])}async update(e,t){const s=t.schema.processors[0];"heatmap"===s.type&&l(this._schema,s)&&(e.mesh=!0,this._schema=s)}onTileUpdate(e){for(const t of e.removed)this._tileKeyToFeatureSets.delete(t.key.id)}onTileClear(e){return this._tileKeyToFeatureSets.delete(e.key.id),this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:e.id,data:{clear:!0}})}async onTileMessage(e,n,d){this._tileKeyToFeatureSets.has(e.key.id)||this._tileKeyToFeatureSets.set(e.key.id,new Map);const l=this._tileKeyToFeatureSets.get(e.key.id);if(c(n.addOrUpdate)&&n.addOrUpdate.hasFeatures&&l.set(n.addOrUpdate.instance,n),n.end){const n=[],l=function(e){const t=e.key,s=new Map,r=256,i=f,a=e.tileInfoView.tileInfo.isWrappable;return s.set(y(t,-1,-1,a).id,new m([-i,-i],[i-r,i-r,i,i])),s.set(y(t,0,-1,a).id,new m([0,-i],[0,i-r,i,i])),s.set(y(t,1,-1,a).id,new m([i,-i],[0,i-r,r,i])),s.set(y(t,-1,0,a).id,new m([-i,0],[i-r,0,i,i])),s.set(y(t,1,0,a).id,new m([i,0],[0,0,r,i])),s.set(y(t,-1,1,a).id,new m([-i,i],[i-r,0,i,r])),s.set(y(t,0,1,a).id,new m([0,i],[0,0,i,r])),s.set(y(t,1,1,a).id,new m([i,i],[0,0,r,r])),s}(e);this._tileKeyToFeatureSets.forEach(((t,s)=>{if(s===e.key.id)t.forEach((e=>p(e.addOrUpdate,(e=>n.push(e)))));else if(l.has(s)){const e=l.get(s),[r,i]=e.offset;t.forEach((e=>p(e.addOrUpdate,(e=>{const t=e.transform(r,i,1,1);n.push(t)}))))}}));const c=h(n,this._schema.mesh,512,512),w={tileKey:e.key.id,intensityInfo:c},T=[c.matrix];return this.remoteClient.invoke("tileRenderer.onTileData",w,(u=((e,t)=>{for(var s in t||(t={}))i.call(t,s)&&o(e,s,t[s]);if(r)for(var s of r(t))a.call(t,s)&&o(e,s,t[s]);return e})({},d),t(u,s({transferList:T}))))}var u}onTileError(e,t,s){return this.remoteClient.invoke("tileRenderer.onTileError",{tileKey:e.id,error:t},s)}};w=n([d("esri.views.2d.layers.features.processors.HeatmapProcessor")],w);var T=w;export default T;