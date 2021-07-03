var e=Object.defineProperty,t=Object.defineProperties,r=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,a=(t,r,s)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[r]=s;import{bB as l,gU as n,ae as p,af as y,dQ as d,gV as u,gW as c,ag as h,a4 as f,d2 as g,el as v,cE as b,a5 as m,v as S,gX as w,aj as O,ec as j,a0 as x,aa as I,cr as F,bF as L,gY as T,gZ as B,g_ as E,M as A,eS as P,c9 as q,g$ as _,c_ as N,h0 as M,h1 as R,dA as k,bT as U,h2 as D,h3 as Q,dX as V,dY as C,dZ as K,gS as Z,d_ as J,e1 as H,h4 as X,ee as $,dl as G,h5 as W,h6 as Y,h7 as z}from"./vendor.74d5941c.js";import{s as ee,l as te}from"./FetchAssociatedFeatureLayer.e9e7443e.js";import{n as re,R as se}from"./SceneService.00767b42.js";import{s as ie,l as oe,u as ae,m as le}from"./I3SLayerDefinitions.faeba957.js";import"./resourceUtils.a485eb9e.js";let ne=class extends(l(n)){constructor(e){super(e),this.title="",this.id=-1,this.modelName=null,this.isEmpty=null,this.visible=!0,this.opacity=1}readTitle(e,t){return"string"==typeof t.alias?t.alias:"string"==typeof t.name?t.name:""}readIdOnlyOnce(e){return-1!==this.id?this.id:"number"==typeof e?e:void 0}};p([y({type:String,json:{origins:{"web-scene":{write:!0},"portal-item":{write:!0}}}})],ne.prototype,"title",void 0),p([d("service","title",["alias","name"])],ne.prototype,"readTitle",null),p([y()],ne.prototype,"layer",void 0),p([y({type:u,readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0}}})],ne.prototype,"id",void 0),p([d("service","id")],ne.prototype,"readIdOnlyOnce",null),p([y(c(String))],ne.prototype,"modelName",void 0),p([y(c(Boolean))],ne.prototype,"isEmpty",void 0),p([y({type:Boolean,json:{name:"visibility",write:!0}})],ne.prototype,"visible",void 0),p([y({type:Number,json:{write:!0}})],ne.prototype,"opacity",void 0),ne=p([h("esri.layers.buildingSublayers.BuildingSublayer")],ne);var pe=ne;const ye=f.getLogger("esri.layers.buildingSublayers.BuildingComponentSublayer"),de=_();let ue=class extends(g.LoadableMixin(v(pe))){constructor(e){super(e),this.type="building-component",this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.fields=null,this.associatedLayer=null,this.outFields=null,this.listMode="show",this.renderer=null,this.definitionExpression=null,this.popupEnabled=!0,this.popupTemplate=null,this.layerType="3d-object"}get parsedUrl(){return this.layer?{path:`${this.layer.parsedUrl.path}/sublayers/${this.id}`,query:this.layer.parsedUrl.query}:null}get fieldsIndex(){return new b(this.fields)}readAssociatedLayer(e,t){const r=this.layer.associatedFeatureServiceItem,s=t.associatedLayerID;return m(r)&&"number"==typeof s?new S({portalItem:r,layerId:s}):null}get objectIdField(){if(null!=this.fields)for(const e of this.fields)if("oid"===e.type)return e.name;return null}get displayField(){return m(this.associatedLayer)?this.associatedLayer.displayField:null}get defaultPopupTemplate(){return this.createPopupTemplate()}load(e){const t=m(e)?e.signal:null;return this.addResolvingPromise(this._fetchService(t).then((()=>{this.indexInfo=re(this.parsedUrl.path,this.rootNode,this.nodePages,ye,t)}))),Promise.resolve(this)}createPopupTemplate(e){return w(this,e)}async _fetchService(e){const t=(await O(this.parsedUrl.path,{query:{f:"json"},responseType:"json",signal:e})).data;this.read(t,{origin:"service",url:this.parsedUrl})}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e){const t=this.getField(e);return t&&t.domain?t.domain:null}get geometryType(){return"3d-object"===this.layerType?"mesh":"point"}get profile(){return"3d-object"===this.layerType?"mesh-pyramids":"points"}get capabilities(){const e=m(this.associatedLayer)&&this.associatedLayer.capabilities?this.associatedLayer.capabilities:ee,{query:t,data:{supportsZ:r,supportsM:s,isVersioned:i}}=e;return{query:t,data:{supportsZ:r,supportsM:s,isVersioned:i}}}createQuery(){const e=new j;return"mesh"!==this.geometryType&&(e.returnGeometry=!0,e.returnZ=!0),e.where=this.definitionExpression||"1=1",e.sqlFormat="standard",e}queryExtent(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryExtent(e||this.createQuery(),t)))}queryFeatureCount(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryFeatureCount(e||this.createQuery(),t)))}queryFeatures(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryFeatures(e||this.createQuery(),t))).then((e=>{if(e&&e.features)for(const t of e.features)t.layer=this.layer,t.sourceLayer=this;return e}))}queryObjectIds(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryObjectIds(e||this.createQuery(),t)))}getFieldUsageInfo(e){return this.fieldsIndex.has(e)?{supportsLabelingInfo:!1,supportsRenderer:!1,supportsPopupTemplate:!1,supportsLayerQuery:!1}:{supportsLabelingInfo:!1,supportsRenderer:!0,supportsPopupTemplate:!0,supportsLayerQuery:m(this.associatedLayer)}}_getAssociatedLayerForQuery(){const e=this.associatedLayer;return m(e)&&e.loaded?Promise.resolve(e):this._loadAssociatedLayerForQuery()}async _loadAssociatedLayerForQuery(){if(await this.load(),x(this.associatedLayer))throw new I("buildingscenelayer:query-not-available","BuildingSceneLayer component layer queries are not available without an associated feature layer",{layer:this});try{await this.associatedLayer.load()}catch(e){throw new I("buildingscenelayer:query-not-available","BuildingSceneLayer associated feature layer could not be loaded",{layer:this,error:e})}return this.associatedLayer}};p([y({readOnly:!0})],ue.prototype,"parsedUrl",null),p([y({type:ie,readOnly:!0})],ue.prototype,"nodePages",void 0),p([y({type:[oe],readOnly:!0})],ue.prototype,"materialDefinitions",void 0),p([y({type:[ae],readOnly:!0})],ue.prototype,"textureSetDefinitions",void 0),p([y({type:[le],readOnly:!0})],ue.prototype,"geometryDefinitions",void 0),p([y({readOnly:!0})],ue.prototype,"serviceUpdateTimeStamp",void 0),p([y({readOnly:!0})],ue.prototype,"store",void 0),p([y({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],ue.prototype,"rootNode",void 0),p([y({readOnly:!0})],ue.prototype,"attributeStorageInfo",void 0),p([y(de.fields)],ue.prototype,"fields",void 0),p([y({readOnly:!0})],ue.prototype,"fieldsIndex",null),p([y({readOnly:!0,type:S})],ue.prototype,"associatedLayer",void 0),p([d("service","associatedLayer",["associatedLayerID"])],ue.prototype,"readAssociatedLayer",null),p([y(de.outFields)],ue.prototype,"outFields",void 0),p([y({type:String,readOnly:!0})],ue.prototype,"objectIdField",null),p([y({readOnly:!0,type:String,json:{read:!1}})],ue.prototype,"displayField",null),p([y({readOnly:!0,type:F,aliasOf:"layer.fullExtent"})],ue.prototype,"fullExtent",void 0),p([y({readOnly:!0,type:L,aliasOf:"layer.spatialReference"})],ue.prototype,"spatialReference",void 0),p([y({readOnly:!0,aliasOf:"layer.version"})],ue.prototype,"version",void 0),p([y({readOnly:!0,type:T,aliasOf:"layer.elevationInfo"})],ue.prototype,"elevationInfo",void 0),p([y({readOnly:!0,type:Number,aliasOf:"layer.minScale"})],ue.prototype,"minScale",void 0),p([y({readOnly:!0,type:Number,aliasOf:"layer.maxScale"})],ue.prototype,"maxScale",void 0),p([y({type:["hide","show"],json:{write:!0}})],ue.prototype,"listMode",void 0),p([y({types:B,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:!0},value:null})],ue.prototype,"renderer",void 0),p([y({type:String,json:{origins:{service:{read:!1,write:!1}},read:{source:"layerDefinition.definitionExpression"},write:{target:"layerDefinition.definitionExpression"}}})],ue.prototype,"definitionExpression",void 0),p([y(E)],ue.prototype,"popupEnabled",void 0),p([y({type:A,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],ue.prototype,"popupTemplate",void 0),p([y({readOnly:!0,type:String,json:{origins:{service:{read:{source:"store.normalReferenceFrame"}}},read:!1}})],ue.prototype,"normalReferenceFrame",void 0),p([y({readOnly:!0,json:{read:!1}})],ue.prototype,"defaultPopupTemplate",null),p([y({json:{write:!1}}),P(new q({"3DObject":"3d-object",Point:"point"}))],ue.prototype,"layerType",void 0),p([y()],ue.prototype,"geometryType",null),p([y()],ue.prototype,"profile",null),p([y({readOnly:!0,json:{read:!1}})],ue.prototype,"capabilities",null),ue=p([h("esri.layers.buildingSublayers.BuildingComponentSublayer")],ue);var ce,he=ue;const fe={type:N,readOnly:!0,json:{origins:{service:{read:{source:"sublayers",reader:ge}}},read:!1}};function ge(e,t,r){if(e&&Array.isArray(e))return new N(e.map((e=>{const t=function(e){return"group"===e.layerType?ve:he}(e);if(t){const s=new t;return s.read(e,r),s}r&&r.messages&&e&&r.messages.push(new M("building-scene-layer:unsupported-sublayer-type","Building scene sublayer of type '"+(e.type||"unknown")+"' are not supported",{definition:e,context:r}))})))}let ve=ce=class extends pe{constructor(e){super(e),this.type="building-group",this.listMode="show",this.sublayers=null}loadAll(){return R(this,(e=>ce.forEachSublayer(this.sublayers,(t=>{"building-group"!==t.type&&e(t)}))))}};var be;p([y({type:["hide","show","hide-children"],json:{write:!0}})],ve.prototype,"listMode",void 0),p([y(fe)],ve.prototype,"sublayers",void 0),ve=ce=p([h("esri.layers.buildingSublayers.BuildingGroupSublayer")],ve),(be=ve||(ve={})).sublayersProperty=fe,be.readSublayers=ge,be.forEachSublayer=function e(t,r){t.forEach((t=>{r(t),"building-group"===t.type&&e(t.sublayers,r)}))};var me=ve;let Se=class extends k{constructor(){super(...arguments),this.type=null}};p([y({type:String,readOnly:!0,json:{write:!0}})],Se.prototype,"type",void 0),Se=p([h("esri.layers.support.BuildingFilterAuthoringInfo")],Se);var we,Oe=Se;let je=we=class extends k{constructor(){super(...arguments),this.filterType=null,this.filterValues=null}clone(){return new we({filterType:this.filterType,filterValues:U(this.filterValues)})}};p([y({type:String,json:{write:!0}})],je.prototype,"filterType",void 0),p([y({type:[String],json:{write:!0}})],je.prototype,"filterValues",void 0),je=we=p([h("esri.layers.support.BuildingFilterAuthoringInfoType")],je);var xe,Ie=je;const Fe=N.ofType(Ie);let Le=xe=class extends k{clone(){return new xe({filterTypes:U(this.filterTypes)})}};p([y({type:Fe,json:{write:!0}})],Le.prototype,"filterTypes",void 0),Le=xe=p([h("esri.layers.support.BuildingFilterAuthoringInfoBlock")],Le);var Te,Be=Le;const Ee=N.ofType(Be);let Ae=Te=class extends Oe{constructor(){super(...arguments),this.type="checkbox"}clone(){return new Te({filterBlocks:U(this.filterBlocks)})}};p([y({type:["checkbox"]})],Ae.prototype,"type",void 0),p([y({type:Ee,json:{write:!0}})],Ae.prototype,"filterBlocks",void 0),Ae=Te=p([h("esri.layers.support.BuildingFilterAuthoringInfoCheckbox")],Ae);var Pe=Ae;let qe=class extends k{};p([y({readOnly:!0,json:{read:!1}})],qe.prototype,"type",void 0),qe=p([h("esri.layers.support.BuildingFilterMode")],qe);var _e,Ne=qe;let Me=_e=class extends Ne{constructor(){super(...arguments),this.type="solid"}clone(){return new _e}};p([y({type:["solid"],readOnly:!0,json:{write:!0}})],Me.prototype,"type",void 0),Me=_e=p([h("esri.layers.support.BuildingFilterModeSolid")],Me);var Re,ke=Me;let Ue=Re=class extends Ne{constructor(){super(...arguments),this.type="wire-frame",this.edges=null}clone(){return new Re({edges:U(this.edges)})}};p([P({wireFrame:"wire-frame"})],Ue.prototype,"type",void 0),p([y(D)],Ue.prototype,"edges",void 0),Ue=Re=p([h("esri.layers.support.BuildingFilterModeWireFrame")],Ue);var De,Qe=Ue;let Ve=De=class extends Ne{constructor(){super(...arguments),this.type="x-ray"}clone(){return new De}};p([y({type:["x-ray"],readOnly:!0,json:{write:!0}})],Ve.prototype,"type",void 0),Ve=De=p([h("esri.layers.support.BuildingFilterModeXRay")],Ve);var Ce,Ke=Ve;const Ze={nonNullable:!0,types:{key:"type",base:Ne,typeMap:{solid:ke,"wire-frame":Qe,"x-ray":Ke}},json:{read:e=>{switch(e&&e.type){case"solid":return ke.fromJSON(e);case"wireFrame":return Qe.fromJSON(e);case"x-ray":return Ke.fromJSON(e);default:return}},write:{enabled:!0,isRequired:!0}}};let Je=Ce=class extends k{constructor(){super(...arguments),this.filterExpression=null,this.filterMode=new ke,this.title=""}clone(){return new Ce({filterExpression:this.filterExpression,filterMode:U(this.filterMode),title:this.title})}};p([y({type:String,json:{write:{enabled:!0,isRequired:!0}}})],Je.prototype,"filterExpression",void 0),p([y(Ze)],Je.prototype,"filterMode",void 0),p([y({type:String,json:{write:{enabled:!0,isRequired:!0}}})],Je.prototype,"title",void 0),Je=Ce=p([h("esri.layers.support.BuildingFilterBlock")],Je);var He,Xe=Je;const $e=N.ofType(Xe);let Ge=He=class extends k{constructor(){super(...arguments),this.description=null,this.filterBlocks=null,this.id=Q(),this.name=null}clone(){return new He({description:this.description,filterBlocks:U(this.filterBlocks),id:this.id,name:this.name,filterAuthoringInfo:U(this.filterAuthoringInfo)})}};p([y({type:String,json:{write:!0}})],Ge.prototype,"description",void 0),p([y({type:$e,json:{write:{enabled:!0,isRequired:!0}}})],Ge.prototype,"filterBlocks",void 0),p([y({types:{key:"type",base:Oe,typeMap:{checkbox:Pe}},json:{read:e=>{switch(e&&e.type){case"checkbox":return Pe.fromJSON(e);default:return null}},write:!0}})],Ge.prototype,"filterAuthoringInfo",void 0),p([y({type:String,constructOnly:!0,json:{write:{enabled:!0,isRequired:!0}}})],Ge.prototype,"id",void 0),p([y({type:String,json:{write:{enabled:!0,isRequired:!0}}})],Ge.prototype,"name",void 0),Ge=He=p([h("esri.layers.support.BuildingFilter")],Ge);var We=Ge;const Ye=f.getLogger("esri.layers.support.BuildingSummaryStatistics");let ze=class extends k{constructor(){super(...arguments),this.fieldName=null,this.modelName=null,this.label=null,this.min=null,this.max=null,this.mostFrequentValues=null,this.subLayerIds=null}};p([y({type:String})],ze.prototype,"fieldName",void 0),p([y({type:String})],ze.prototype,"modelName",void 0),p([y({type:String})],ze.prototype,"label",void 0),p([y({type:Number})],ze.prototype,"min",void 0),p([y({type:Number})],ze.prototype,"max",void 0),p([y({json:{read:e=>Array.isArray(e)&&(e.every((e=>"string"==typeof e))||e.every((e=>"number"==typeof e)))?e.slice():null}})],ze.prototype,"mostFrequentValues",void 0),p([y({type:[Number]})],ze.prototype,"subLayerIds",void 0),ze=p([h("esri.layers.support.BuildingFieldStatistics")],ze);let et=class extends(g.LoadableMixin(v(k))){constructor(){super(...arguments),this.url=null}get fields(){return this.loaded||"loading"===this.loadStatus?this._get("fields"):(Ye.error("building summary statistics are not loaded"),null)}load(e){const t=m(e)?e.signal:null;return this.addResolvingPromise(this._fetchService(t)),Promise.resolve(this)}async _fetchService(e){const t=(await O(this.url,{query:{f:"json"},responseType:"json",signal:e})).data;this.read(t,{origin:"service"})}};p([y({constructOnly:!0,type:String})],et.prototype,"url",void 0),p([y({readOnly:!0,type:[ze],json:{read:{source:"summary"}}})],et.prototype,"fields",null),et=p([h("esri.layers.support.BuildingSummaryStatistics")],et);var tt=et;const rt=f.getLogger("esri.layers.BuildingSceneLayer"),st=N.ofType(We),it=U(me.sublayersProperty);it.json.origins["web-scene"]={type:[he],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}},it.json.origins["portal-item"]={type:[he],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}};let ot=class extends(se(V(C(K(Z(J(H))))))){constructor(e){super(e),this.operationalLayerType="BuildingSceneLayer",this.allSublayers=new X({root:this,rootCollectionNames:["sublayers"],getChildrenFunction:e=>"building-group"===e.type?e.sublayers:null}),this.sublayers=null,this.sublayerOverrides=null,this.filters=new st,this.activeFilterId=null,this.summaryStatistics=null,this.outFields=null,this.type="building-scene"}normalizeCtorArgs(e){return"string"==typeof e?{url:e}:e}destroy(){this.allSublayers.destroy()}readSublayers(e,t,r){const s=me.readSublayers(e,t,r);return me.forEachSublayer(s,(e=>e.layer=this)),this.sublayerOverrides&&(this.applySublayerOverrides(s,this.sublayerOverrides),this.sublayerOverrides=null),s}applySublayerOverrides(e,{overrides:t,context:r}){me.forEachSublayer(e,(e=>e.read(t.get(e.id),r)))}readSublayerOverrides(e,t){const r=new Map;for(const s of e)null!=s&&"object"==typeof s&&"number"==typeof s.id?r.set(s.id,s):t.messages.push(new I("building-scene-layer:invalid-sublayer-override","Invalid value for sublayer override. Not an object or no id specified.",{value:s}));return{overrides:r,context:t}}writeSublayerOverrides(e,t,r){const s=[];me.forEachSublayer(this.sublayers,(e=>{const t=e.write({},r);Object.keys(t).length>1&&s.push(t)})),s.length>0&&(t.sublayers=s)}writeUnappliedOverrides(e,t){t.sublayers=[],e.overrides.forEach((e=>{t.sublayers.push(U(e))}))}write(e,t){return e=super.write(e,t),!t||"web-scene"!==t.origin&&"portal-item"!==t.origin||(this.sublayers?this.writeSublayerOverrides(this.sublayers,e,t):this.sublayerOverrides&&this.writeUnappliedOverrides(this.sublayerOverrides,e)),e}read(e,t){if(super.read(e,t),t&&("web-scene"===t.origin||"portal-item"===t.origin)&&null!=e&&Array.isArray(e.sublayers)){const r=this.readSublayerOverrides(e.sublayers,t);this.sublayers?this.applySublayerOverrides(this.sublayers,r):this.sublayerOverrides=r}}readSummaryStatistics(e,t){if("string"==typeof t.statisticsHRef){const e=$(this.parsedUrl.path,t.statisticsHRef);return new tt({url:e})}return null}set elevationInfo(e){this._set("elevationInfo",e),this._validateElevationInfo()}load(e){const t=m(e)?e.signal:null,r=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(G).then((()=>this._fetchService(t))).then((()=>this._fetchAssociatedFeatureService(t)));return this.addResolvingPromise(r),Promise.resolve(this)}loadAll(){return W(this,(e=>{me.forEachSublayer(this.sublayers,(t=>{"building-group"!==t.type&&e(t)})),this.summaryStatistics&&e(this.summaryStatistics)}))}async saveAs(e,l){return this._debouncedSaveOperations(1,(n=((e,t)=>{for(var r in t||(t={}))i.call(t,r)&&a(e,r,t[r]);if(s)for(var r of s(t))o.call(t,r)&&a(e,r,t[r]);return e})({},l),t(n,r({getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"building-scene"}))),e);var n}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"building-scene"};return this._debouncedSaveOperations(0,e)}validateLayer(e){if(!e.layerType||"Building"!==e.layerType)throw new I("buildingscenelayer:layer-type-not-supported","BuildingSceneLayer does not support this layer type",{layerType:e.layerType})}_getTypeKeywords(){return["Building"]}_validateElevationInfo(){const e=this.elevationInfo;e&&("absolute-height"!==e.mode&&rt.warn(".elevationInfo=","Building scene layers only support absolute-height elevation mode"),e.featureExpressionInfo&&"0"!==e.featureExpressionInfo.expression&&rt.warn(".elevationInfo=","Building scene layers do not support featureExpressionInfo"))}async _fetchAssociatedFeatureService(e){const t=new te(this.parsedUrl,this.portalItem,e);try{this.associatedFeatureServiceItem=await t.fetchPortalItem()}catch(r){rt.warn("Associated feature service item could not be loaded",r)}}};p([y({type:["BuildingSceneLayer"]})],ot.prototype,"operationalLayerType",void 0),p([y({readOnly:!0})],ot.prototype,"allSublayers",void 0),p([y(it)],ot.prototype,"sublayers",void 0),p([d("service","sublayers")],ot.prototype,"readSublayers",null),p([y({type:st,nonNullable:!0,json:{write:!0}})],ot.prototype,"filters",void 0),p([y({type:String,json:{write:!0}})],ot.prototype,"activeFilterId",void 0),p([y({readOnly:!0,type:tt})],ot.prototype,"summaryStatistics",void 0),p([d("summaryStatistics",["statisticsHRef"])],ot.prototype,"readSummaryStatistics",null),p([y({type:[String],json:{read:!1}})],ot.prototype,"outFields",void 0),p([y(Y)],ot.prototype,"fullExtent",void 0),p([y({type:["show","hide","hide-children"]})],ot.prototype,"listMode",void 0),p([y(c(L))],ot.prototype,"spatialReference",void 0),p([y(z)],ot.prototype,"elevationInfo",null),p([y({json:{read:!1},readOnly:!0})],ot.prototype,"type",void 0),p([y()],ot.prototype,"associatedFeatureServiceItem",void 0),ot=p([h("esri.layers.BuildingSceneLayer")],ot);var at=ot;export default at;