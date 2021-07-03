var e,t=Object.defineProperty,s=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,i=(e,s,r)=>s in e?t(e,s,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[s]=r;import{av as a,hY as o,d2 as n,h_ as u,h$ as y,a5 as h,cr as p,e4 as d,c_ as b,ae as c,af as v,eZ as f,i0 as g,dQ as m,ag as S,gR as w,gT as _,gS as E,dY as O,dZ as x,d_ as k,e1 as j,h4 as L,bF as F,dO as M,c4 as P,e0 as I}from"./vendor.74d5941c.js";import{j as N,S as R,g as T,d as C}from"./kmlUtils.e19028c7.js";import"./aaBoundingBox.b76947f8.js";let K=e=class extends(a.EventedMixin(o(n))){constructor(){super(...arguments),this._sublayersHandles=null,this.description=null,this.id=null,this.networkLink=null,this.title=null,this.sourceJSON=null,this.fullExtent=null}initialize(){u(this,"networkLink").then((()=>y(this,"visible"))).then((()=>this.load()))}load(t){if(!this.networkLink)return;if(this.networkLink.viewFormat)return;const s=h(t)?t.signal:null,r=this._fetchService(this._get("networkLink").href,s).then((t=>{const s=N(t.sublayers);this.fullExtent=p.fromJSON(s),this.sourceJSON=t;const r=d(b.ofType(e),R(e,t));this.sublayers?this.sublayers.addMany(r):this.sublayers=r,this.layer.emit("sublayer-update"),this.layer&&this.layer.notifyChange("visibleSublayers")}));return this.addResolvingPromise(r),Promise.resolve(this)}set sublayers(e){const t=this._get("sublayers");t&&(t.forEach((e=>{e.parent=null,e.layer=null})),this._sublayersHandles.forEach((e=>e.remove())),this._sublayersHandles=null),e&&(e.forEach((e=>{e.parent=this,e.layer=this.layer})),this._sublayersHandles=[e.on("after-add",(({item:e})=>{e.parent=this,e.layer=this.layer})),e.on("after-remove",(({item:e})=>{e.parent=null,e.layer=null}))]),this._set("sublayers",e)}castSublayers(t){return d(b.ofType(e),t)}get visible(){return this._get("visible")}set visible(e){this._get("visible")!==e&&(this._set("visible",e),this.layer&&this.layer.notifyChange("visibleSublayers"))}readVisible(e,t){return!!t.visibility}set layer(e){this._set("layer",e),this.sublayers&&this.sublayers.forEach((t=>t.layer=e))}_fetchService(e,t){return T(e,this.layer.outSpatialReference,this.layer.refreshInterval,t).then((e=>C(e.data)))}};c([v()],K.prototype,"description",void 0),c([v()],K.prototype,"id",void 0),c([v({readOnly:!0,value:null})],K.prototype,"networkLink",void 0),c([v({json:{write:{allowNull:!0}}})],K.prototype,"parent",void 0),c([v({value:null,json:{write:{allowNull:!0}}})],K.prototype,"sublayers",null),c([f("sublayers")],K.prototype,"castSublayers",null),c([v({value:null,json:{read:{source:"name",reader:e=>g(e)}}})],K.prototype,"title",void 0),c([v({value:!0})],K.prototype,"visible",null),c([m("visible",["visibility"])],K.prototype,"readVisible",null),c([v()],K.prototype,"sourceJSON",void 0),c([v({value:null})],K.prototype,"layer",null),c([v({type:p})],K.prototype,"fullExtent",void 0),K=e=c([S("esri.layers.support.KMLSublayer")],K);var H=K;const J=["kml","xml"];let z=class extends(w(_(E(O(x(k(j))))))){constructor(...e){super(...e),this._visibleFolders=[],this.allSublayers=new L({root:this,rootCollectionNames:["sublayers"],getChildrenFunction:e=>e.sublayers}),this.outSpatialReference=F.WGS84,this.path=null,this.legendEnabled=!1,this.operationalLayerType="KML",this.sublayers=null,this.type="kml",this.url=null}initialize(){this.watch("sublayers",((e,t)=>{t&&t.forEach((e=>{e.parent=null,e.layer=null})),e&&e.forEach((e=>{e.parent=this,e.layer=this}))}),!0),this.on("sublayer-update",(()=>this.notifyChange("fullExtent")))}normalizeCtorArgs(e,t){return"string"==typeof e?((e,t)=>{for(var a in t||(t={}))r.call(t,a)&&i(e,a,t[a]);if(s)for(var a of s(t))l.call(t,a)&&i(e,a,t[a]);return e})({url:e},t):e}readSublayersFromItemOrWebMap(e,t){this._visibleFolders=t.visibleFolders}readSublayers(e,t,s){return R(H,t,s,this._visibleFolders)}writeSublayers(e,t){const s=[],r=e.toArray();for(;r.length;){const e=r[0];e.networkLink||(e.visible&&s.push(e.id),e.sublayers&&r.push(...e.sublayers.toArray())),r.shift()}t.visibleFolders=s}get title(){const e=this._get("title");return e&&"defaults"!==this.originOf("title")?e:this.url?M(this.url,J)||"KML":e||""}set title(e){this._set("title",e)}get visibleSublayers(){const e=this.sublayers,t=[],s=e=>{e.visible&&(t.push(e),e.sublayers&&e.sublayers.forEach(s))};return e&&e.forEach(s),t}get fullExtent(){return this._recomputeFullExtent()}load(e){const t=h(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["KML"]},e).then((()=>this._fetchService(t)))),Promise.resolve(this)}destroy(){super.destroy(),this.allSublayers.destroy()}async _fetchService(e){const t=await Promise.resolve().then((()=>this.resourceInfo?{ssl:!1,data:this.resourceInfo}:T(this.url,this.outSpatialReference,this.refreshInterval,e))),s=C(t.data);s&&this.read(s,{origin:"service"})}_recomputeFullExtent(){let e=null;this.extent&&(e=this.extent.clone());const t=s=>{if(s.sublayers)for(const r of s.sublayers.items)t(r),r.visible&&r.fullExtent&&(e?e.union(r.fullExtent):e=r.fullExtent.clone())};return t(this),e}};c([v({readOnly:!0})],z.prototype,"allSublayers",void 0),c([v({type:F})],z.prototype,"outSpatialReference",void 0),c([v({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],z.prototype,"path",void 0),c([v({readOnly:!0,json:{read:!1,write:!1}})],z.prototype,"legendEnabled",void 0),c([v({type:["show","hide","hide-children"]})],z.prototype,"listMode",void 0),c([v({type:["KML"]})],z.prototype,"operationalLayerType",void 0),c([v({})],z.prototype,"resourceInfo",void 0),c([v({type:b.ofType(H),json:{write:{ignoreOrigin:!0}}})],z.prototype,"sublayers",void 0),c([m(["web-map","portal-item"],"sublayers",["visibleFolders"])],z.prototype,"readSublayersFromItemOrWebMap",null),c([m("service","sublayers",["sublayers"])],z.prototype,"readSublayers",null),c([P("sublayers")],z.prototype,"writeSublayers",null),c([v({readOnly:!0,json:{read:!1}})],z.prototype,"type",void 0),c([v({json:{origins:{"web-map":{read:{source:"title"}}},write:{ignoreOrigin:!0}}})],z.prototype,"title",null),c([v(I)],z.prototype,"url",void 0),c([v({readOnly:!0})],z.prototype,"visibleSublayers",null),c([v({type:p})],z.prototype,"extent",void 0),c([v()],z.prototype,"fullExtent",null),z=c([S("esri.layers.KMLLayer")],z);var A=z;export default A;
