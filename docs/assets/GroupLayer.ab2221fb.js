import{fL as i,fM as e,cB as t,cC as s,g9 as r,ga as l,cD as a,gb as o,r as h,f$ as n,gc as y,p as v,y as d,bm as b,q as c,cH as p}from"./vendor.abf366c9.js";let u=class extends(i(e(t(s(r(l(a(p)))))))){constructor(i){super(i),this._visibilityHandles={},this.fullExtent=void 0,this.operationalLayerType="GroupLayer",this.spatialReference=void 0,this.type="group",this._visibilityWatcher=this._visibilityWatcher.bind(this)}initialize(){this._enforceVisibility(this.visibilityMode,this.visible),this.watch("visible",this._visibleWatcher.bind(this),!0)}_writeLayers(i,e,t,s){const r=[];if(!i)return r;i.forEach((i=>{const e=o(i,s.webmap?s.webmap.getLayerJSONFromResourceInfo(i):null,s);h(e)&&e.layerType&&r.push(e)})),e.layers=r}set portalItem(i){this._set("portalItem",i)}set visibilityMode(i){const e=this._get("visibilityMode")!==i;this._set("visibilityMode",i),e&&this._enforceVisibility(i,this.visible)}load(i){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Service","Feature Collection","Scene Service"]},i)),Promise.resolve(this)}loadAll(){return n(this,(i=>{i(this.layers)}))}layerAdded(i){i.visible&&"exclusive"===this.visibilityMode?this._turnOffOtherLayers(i):"inherited"===this.visibilityMode&&(i.visible=this.visible),this._visibilityHandles[i.uid]=i.watch("visible",this._visibilityWatcher,!0)}layerRemoved(i){const e=this._visibilityHandles[i.uid];e&&(e.remove(),delete this._visibilityHandles[i.uid]),this._enforceVisibility(this.visibilityMode,this.visible)}_turnOffOtherLayers(i){this.layers.forEach((e=>{e!==i&&(e.visible=!1)}))}_enforceVisibility(i,e){if(!y(this).initialized)return;const t=this.layers;let s=t.find((i=>i.visible));switch(i){case"exclusive":t.length&&!s&&(s=t.getItemAt(0),s.visible=!0),this._turnOffOtherLayers(s);break;case"inherited":t.forEach((i=>{i.visible=e}))}}_visibleWatcher(i){"inherited"===this.visibilityMode&&this.layers.forEach((e=>{e.visible=i}))}_visibilityWatcher(i,e,t,s){const r=s;switch(this.visibilityMode){case"exclusive":i?this._turnOffOtherLayers(r):this._isAnyLayerVisible()||(r.visible=!0);break;case"inherited":r.visible=this.visible}}_isAnyLayerVisible(){return this.layers.some((i=>i.visible))}};v([d()],u.prototype,"fullExtent",void 0),v([d({json:{read:!1,write:{ignoreOrigin:!0}}})],u.prototype,"layers",void 0),v([b("layers")],u.prototype,"_writeLayers",null),v([d({type:["GroupLayer"]})],u.prototype,"operationalLayerType",void 0),v([d({json:{origins:{"web-document":{read:!1,write:!1}}}})],u.prototype,"portalItem",null),v([d()],u.prototype,"spatialReference",void 0),v([d({json:{read:!1},readOnly:!0,value:"group"})],u.prototype,"type",void 0),v([d({type:["independent","inherited","exclusive"],value:"independent",json:{write:!0,origins:{"web-map":{read:!1,write:!1}}}})],u.prototype,"visibilityMode",null),u=v([c("esri.layers.GroupLayer")],u);var f=u;export default f;