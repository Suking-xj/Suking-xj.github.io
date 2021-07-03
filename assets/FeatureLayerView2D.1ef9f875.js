var e,t=Object.defineProperty,i=Object.defineProperties,r=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,l=(e,i,r)=>i in e?t(e,i,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[i]=r,o=(e,t)=>{for(var i in t||(t={}))a.call(t,i)&&l(e,i,t[i]);if(s)for(var i of s(t))n.call(t,i)&&l(e,i,t[i]);return e};import{ae as h,af as d,ag as u,d1 as c,c9 as p,c4 as f,es as y,cW as g,d5 as m,dA as _,ec as v,bT as w,a4 as b,et as R,aE as x,eu as F,ev as I,ew as S,a5 as E,ex as O,dd as P,ey as T,ez as q,eA as C,eB as U,eC as j,eD as k,aa as N,eE as V,eF as L,bN as A,bI as M,eG as H,dU as J,ah as G,cd as z,cu as D,eh as Q,eH as $,eI as B,an as W,aw as K,ay as Z,c_ as X,dR as Y,cr as ee,eJ as te,eK as ie,eL as re,ai as se,a0 as ae,bC as ne,eM as le}from"./vendor.74d5941c.js";import{N as oe}from"./definitions.6737c10c.js";import{l as he,d as de}from"./LayerView2D.06dde519.js";import{s as ue}from"./clickToleranceUtils.1b8c692d.js";import{a as ce}from"./drapedUtils.72df2b08.js";import{f as pe,u as fe,g as ye,h as ge,m as me,i as _e,k as ve}from"./schemaUtils.ab77d03d.js";import{u as we}from"./Container.d2c27c9d.js";import{d as be,i as Re}from"./popupUtils.017b06d1.js";import"./MD5.1ef35834.js";import"./Utils.3f1577e5.js";import"./FramebufferObject.18518335.js";import"./_commonjsHelpers.f2a458db.js";import"./MaterialKey.3bc4aaea.js";import"./visualVariablesUtils.cb58e4df.js";import"./CIMSymbolHelper.6546a069.js";import"./Rect.b51904ac.js";import"./BidiEngine.9b392b22.js";import"./mat4f32.a5cabe00.js";let xe=e=class extends c{constructor(){super(...arguments),this.isAggregate=!0}getEffectivePopupTemplate(e=!1){if(this.popupTemplate)return this.popupTemplate;const t=this.sourceLayer&&this.sourceLayer.featureReduction;return t&&"popupTemplate"in t&&t.popupEnabled?t.popupTemplate:null}getObjectId(){return this.objectId}clone(){return new e(o({objectId:this.objectId},this.cloneProperties()))}};h([d({type:Boolean})],xe.prototype,"isAggregate",void 0),h([d({type:Number,json:{read:!0}})],xe.prototype,"objectId",void 0),xe=e=h([u("esri.AggregateGraphic")],xe);var Fe,Ie=xe;const Se=new p({esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"envelope-intersects",esriSpatialRelIndexIntersects:"index-intersects",esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:"relation"}),Ee=new p({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"});let Oe=Fe=class extends _{constructor(e){super(e),this.where=null,this.geometry=null,this.spatialRelationship="intersects",this.hiddenIds=new Set,this.distance=void 0,this.objectIds=null,this.units=null,this.timeExtent=null,this.enabled=!1}writeWhere(e,t){t.where=e||"1=1"}enable(){this._set("enabled",!0)}createQuery(e={}){const{where:t,geometry:i,spatialRelationship:r,timeExtent:s,objectIds:a,units:n,distance:l}=this;return new v(o({geometry:w(i),objectIds:w(a),spatialRelationship:r,timeExtent:w(s),where:t,units:n,distance:l},e))}clone(){const{where:e,geometry:t,spatialRelationship:i,hiddenIds:r,timeExtent:s,objectIds:a,units:n,distance:l}=this,o=new Set;return r.forEach((e=>o.add(e))),new Fe({geometry:w(t),hiddenIds:o,objectIds:w(a),spatialRelationship:i,timeExtent:w(s),where:e,units:n,distance:l})}};h([d({type:String})],Oe.prototype,"where",void 0),h([f("where")],Oe.prototype,"writeWhere",null),h([d({types:y,json:{read:g,write:!0}})],Oe.prototype,"geometry",void 0),h([d({type:String,json:{read:{source:"spatialRel",reader:Se.read},write:{target:"spatialRel",writer:Se.write}}})],Oe.prototype,"spatialRelationship",void 0),h([d({json:{write:(e,t,i)=>t[i]=Array.from(e),read:e=>new Set(e)}})],Oe.prototype,"hiddenIds",void 0),h([d({type:Number,json:{write:{overridePolicy:e=>({enabled:e>0})}}})],Oe.prototype,"distance",void 0),h([d({type:[Number],json:{write:!0}})],Oe.prototype,"objectIds",void 0),h([d({type:String,json:{read:Ee.read,write:{writer:Ee.write,overridePolicy(e){return{enabled:e&&this.distance>0}}}}})],Oe.prototype,"units",void 0),h([d({type:m,json:{write:!0}})],Oe.prototype,"timeExtent",void 0),h([d({readOnly:!0})],Oe.prototype,"enabled",void 0),Oe=Fe=h([u("esri.views.layers.support.FeatureFilter")],Oe);var Pe,Te=Oe;let qe=Pe=class extends _{constructor(){super(...arguments),this.filter=null,this.includedEffect=null,this.excludedEffect=null,this.excludedLabelsVisible=!1}clone(){return new Pe({filter:this.filter&&this.filter.clone(),includedEffect:this.includedEffect,excludedEffect:this.excludedEffect,excludedLabelsVisible:this.excludedLabelsVisible})}};h([d({type:Te,json:{write:!0}})],qe.prototype,"filter",void 0),h([d({json:{write:!0}})],qe.prototype,"includedEffect",void 0),h([d({json:{write:!0}})],qe.prototype,"excludedEffect",void 0),h([d({type:Boolean,json:{write:!0}})],qe.prototype,"excludedLabelsVisible",void 0),qe=Pe=h([u("esri.views.layers.support.FeatureEffect")],qe);var Ce=qe;const Ue=b.getLogger("esri.views.layers.FeatureLayerView"),je=e=>{let t=class extends e{constructor(...e){super(...e),this._updatingRequiredFieldsPromise=null,this.effect=null,this.filter=null,this.timeExtent=null,this.layer=null,this.requiredFields=[],this.view=null}initialize(){x(this,["layer.renderer","layer.labelingInfo","layer.elevationInfo.featureExpressionInfo","layer.displayField","filter","effect","layer.timeInfo","layer.floorInfo","timeExtent"],(()=>this._handleRequiredFieldsChange()),!0),F(this,"view.floors","change",(()=>this._handleRequiredFieldsChange()))}get availableFields(){const{layer:e,layer:{fields:t},requiredFields:i}=this;return"outFields"in e&&e.outFields?I(t,[...S(t,e.outFields),...i]):I(t,i)}get maximumNumberOfFeatures(){return 0}set maximumNumberOfFeatures(e){Ue.error("#maximumNumberOfFeatures=","Setting maximum number of features is not supported")}get maximumNumberOfFeaturesExceeded(){return!1}highlight(e){throw new Error("missing implementation")}createQuery(){const e={outFields:["*"],returnGeometry:!0,outSpatialReference:this.view.spatialReference},t=E(this.filter)?this.filter.createQuery(e):new v(e);return E(this.timeExtent)&&(t.timeExtent=E(t.timeExtent)?t.timeExtent.intersection(this.timeExtent):this.timeExtent.clone()),t}queryFeatures(e,t){throw new Error("missing implementation")}queryObjectIds(e,t){throw new Error("missing implementation")}queryFeatureCount(e,t){throw new Error("missing implementation")}queryExtent(e,t){throw new Error("missing implementation")}_loadArcadeModules(e){if(e.get("expressionInfos.length"))return O()}_handleRequiredFieldsChange(){const e=this._updateRequiredFields();this._set("_updatingRequiredFieldsPromise",e),e.then((()=>{this._updatingRequiredFieldsPromise===e&&this._set("_updatingRequiredFieldsPromise",null)}))}async _updateRequiredFields(){if(!this.layer||!this.view)return;const e="3d"===this.view.type,{layer:t,layer:{fields:i,objectIdField:r,renderer:s,displayField:a}}=this,n=t.featureReduction,l=new Set,o=await P([s?s.collectRequiredFields(l,i):null,T(l,t),e?q(l,t):null,E(this.filter)?C(l,t,this.filter):null,this.effect?C(l,t,this.effect.filter):null,n?U(l,t,n):null]);t.timeInfo&&this.timeExtent&&j(l,t.fields,[t.timeInfo.startField,t.timeInfo.endField]),"feature"===t.type&&t.floorInfo&&j(l,t.fields,[t.floorInfo.floorField]);for(const d of o)d.error&&Ue.error(d.error);k(l,i,r),e&&a&&k(l,i,a);const h=Array.from(l).sort();this._set("requiredFields",h)}validateFetchPopupFeatures(e){const{layer:t,layer:{popupEnabled:i}}=this;return i?be(this.layer,e)?void 0:new N("featurelayerview:fetchPopupFeatures","Layer does not define a popup template",{layer:t}):new N("featurelayerview:fetchPopupFeatures","Popups are disabled",{layer:t})}async fetchClientPopupFeatures(e){const t=E(e)?e.clientGraphics:null;if(!t||0===t.length)return Promise.resolve([]);const i=[],r=[],{layer:s}=this,a=be(s,e);if(!E(a))return Promise.resolve([]);const n=await this._loadArcadeModules(a),l=n&&n.arcadeUtils.hasGeometryOperations(a),o=await this.createPopupQuery(e),h=S(s.fields,o.outFields);for(const d of t)l||!V(h,d)?r.push(d):i.push(d);return"stream"===s.type||0===r.length?Promise.resolve(i):(o.objectIds=r.map((e=>e.attributes[s.objectIdField])),s.queryFeatures(o).then((e=>i.concat(e.features))).catch((()=>r)))}async createPopupQuery(e){const t=this.layer,i=t.createQuery(),r=be(t,e),s=E(r)&&await this._loadArcadeModules(r),a=E(r)&&s&&s.arcadeUtils.hasGeometryOperations(r),n=!("point"!==t.geometryType&&!a);return i.returnGeometry=n,i.returnZ=n,i.returnM=n,i.outFields=await Re(this.layer,r),i.outSpatialReference=this.view.spatialReference,i}canResume(){return!(!super.canResume()||E(this.timeExtent)&&this.timeExtent.isEmpty)}};return h([d()],t.prototype,"_updatingRequiredFieldsPromise",void 0),h([d({readOnly:!0})],t.prototype,"availableFields",null),h([d({type:Ce})],t.prototype,"effect",void 0),h([d({type:Te})],t.prototype,"filter",void 0),h([d(R)],t.prototype,"timeExtent",void 0),h([d()],t.prototype,"layer",void 0),h([d({type:Number})],t.prototype,"maximumNumberOfFeatures",null),h([d({readOnly:!0,type:Boolean})],t.prototype,"maximumNumberOfFeaturesExceeded",null),h([d({readOnly:!0})],t.prototype,"requiredFields",void 0),h([d()],t.prototype,"suspended",void 0),h([d()],t.prototype,"view",void 0),t=h([u("esri.views.layers.FeatureLayerView")],t),t};let ke=class extends L{constructor(e){super(e),this._startupResolver=A(),this.isReady=!1}initialize(){this._controller=M(),this.addResolvingPromise(this._startWorker(this._controller.signal))}destroy(){this._controller.abort(),this._connection&&this._connection.close()}set tileRenderer(e){this.client.tileRenderer=e}get closed(){return this._connection.closed}async startup(e,t,i,r){await this.when();const s=this._controller.signal,a=function(e){return Array.isArray(e)}(i.source)?{transferList:i.source,signal:s}:void 0,n={service:i,config:t,tileInfo:e.tileInfo.toJSON(),tiles:r};await this._connection.invoke("startup",n,a),this._startupResolver.resolve(),this._set("isReady",!0)}async updateTiles(e){return await this._startupResolver.promise,H(this._connection.invoke("updateTiles",e))}async update(e){const t={config:e};return await this._startupResolver.promise,this._connection.invoke("update",t)}async applyUpdate(e){return await this._startupResolver.promise,this._connection.invoke("applyUpdate",e)}async setHighlight(e){return await this._startupResolver.promise,H(this._connection.invoke("controller.setHighlight",e))}async refresh(){return await this._startupResolver.promise,H(this._connection.invoke("controller.refresh"))}async queryFeatures(e,t){return await this._startupResolver.promise,this._connection.invoke("controller.queryFeatures",e.toJSON(),t)}async queryObjectIds(e,t){return await this._startupResolver.promise,this._connection.invoke("controller.queryObjectIds",e.toJSON(),t)}async queryFeatureCount(e,t){return await this._startupResolver.promise,this._connection.invoke("controller.queryFeatureCount",e.toJSON(),t)}async queryExtent(e,t){return this._connection.invoke("controller.queryExtent",e.toJSON(),t)}async queryLatestObservations(e,t){return await this._startupResolver.promise,this._connection.invoke("controller.queryLatestObservations",e.toJSON(),t)}async queryStatistics(e){return await this._startupResolver.promise,this._connection.invoke("controller.queryStatistics",e)}async getObjectId(e){return await this._startupResolver.promise,this._connection.invoke("controller.getObjectId",e)}async getDisplayId(e){return await this._startupResolver.promise,this._connection.invoke("controller.getDisplayId",e)}async getFeature(e){return await this._startupResolver.promise,this._connection.invoke("controller.getFeature",e)}async getAggregate(e){return await this._startupResolver.promise,this._connection.invoke("controller.getAggregate",e)}async getAggregateValueRanges(){return await this._startupResolver.promise,this._connection.invoke("controller.getAggregateValueRanges")}async mapValidDisplayIds(e){return await this._startupResolver.promise,this._connection.invoke("controller.mapValidDisplayIds",e)}async onEdits(e){await this._startupResolver.promise;const{addedFeatures:t,deletedFeatures:i,updatedFeatures:r}=e;return H(this._connection.invoke("controller.onEdits",{addedFeatures:t,deletedFeatures:i,updatedFeatures:r}))}async enableEvent(e,t){return await this._startupResolver.promise,H(this._connection.invoke("controller.enableEvent",{name:e,value:t}))}async _startWorker(e){try{this._connection=await J("Pipeline",{client:this.client,strategy:"dedicated",signal:e})}catch(t){G(t)}}};h([d()],ke.prototype,"isReady",void 0),h([d()],ke.prototype,"client",void 0),h([d()],ke.prototype,"tileRenderer",null),ke=h([u("esri.views.2d.layers.support.FeatureLayerProxy")],ke);var Ne=ke;class Ve{constructor(e){this._tiles=new Map,this.buffer=0,this.acquireTile=e.acquireTile,this.releaseTile=e.releaseTile,this.tileInfoView=e.tileInfoView,this.buffer=e.buffer}destroy(){}clear(){this._tiles.forEach((e=>this._releaseTile(e)))}tileKeys(){const e=[];return this._tiles.forEach(((t,i)=>e.push(i))),e}update(e){const t=this.tileInfoView.getTileCoverage(e.state,this.buffer,"closest"),{spans:i,lodInfo:r}=t,{level:s}=r,a=[],n=[],l=new Set,o=new Set;for(const{row:h,colFrom:d,colTo:u}of i)for(let e=d;e<=u;e++){const t=z.getId(s,h,r.normalizeCol(e),r.getWorldForColumn(e)),i=this._getOrAcquireTile(a,t);l.add(t),i.isReady?i.visible=!0:o.add(i.key)}return o.forEach((e=>this._addPlaceholders(l,e))),this._tiles.forEach((e=>{l.has(e.key.id)||(n.push(e.key.id),this._releaseTile(e))})),D.pool.release(t),{hasMissingTiles:o.size>0,added:a,removed:n}}_getOrAcquireTile(e,t){if(!this._tiles.has(t)){const i=this.acquireTile(new z(t));e.push(t),this._tiles.set(t,i),i.visible=!1}return this._tiles.get(t)}_getTile(e){return this._tiles.get(e)}_releaseTile(e){this._tiles.delete(e.key.id),this.releaseTile(e)}_addPlaceholders(e,t){const i=this._addPlaceholderChildren(e,t);Math.abs(1-i)<1e-6||this._addPlaceholderParent(e,t)||(this._getTile(t.id).visible=!0)}_addPlaceholderChildren(e,t){let i=0;return this._tiles.forEach((r=>{i+=this._addPlaceholderChild(e,r,t)})),i}_addPlaceholderChild(e,t,i){return t.key.level<=i.level||!t.hasData||!i.contains(t.key)?0:(t.visible=!0,e.add(t.key.id),1/(1<<2*(t.key.level-i.level)))}_addPlaceholderParent(e,t){let i=t.getParentKey(),r=0,s=null;for(;E(i);){if(e.has(i.id))return!0;const t=this._getTile(i.id);if(null!=t&&t.isReady)return t.visible=!0,e.add(t.key.id),!0;null!=t&&t.hasData&&t.patchCount>r&&(r=t.patchCount,s=t),i=i.getParentKey()}return!!s&&(s.visible=!0,e.add(s.key.id),!0)}}function Le(e){return e&&"openPorts"in e}const Ae=b.getLogger("esri.views.2d.layers.FeatureLayerView2D");let Me=class extends(je(Q(he(de)))){constructor(){super(...arguments),this._pipelineIsUpdating=!0,this._updatingPipelineConfig=!1,this._onGoingEdits=0,this._isRefreshing=!1,this._visibilityOverrides=new Set,this._effect=null,this._highlightIds=new Map,this._lastPixelBuffer=0,this.filter=null,this.effectLists={included:new we,excluded:new we},this.doRefresh=$((async()=>{this.isUpdating()&&await B(this,"updating"),this._set("_isRefreshing",!0),this._lockGPUUploads();try{await this._proxy.refresh()}catch(e){W(e)}this._unlockGPUUploads(),this._set("_isRefreshing",!1)})),this._doUpdate=$((async()=>{try{if(this.destroyed||!this._hasRequiredSupport(this.layer))return;this._set("_updatingPipelineConfig",!0),await B(this,"_isRefreshing");const{effect:t,filter:i}=this;await this._updateRequiredFields();const{renderer:r}=this._getEffectiveRenderer();this._set("_effectiveRenderer",r);const s="feature"===this.layer.type?this.layer.historicMoment:null,a="feature"===this.layer.type?this.layer.gdbVersion:null,n={renderer:this.layer.renderer,spatialReference:this.layer.spatialReference,timeExtent:this.layer.timeExtent,definitionExpression:this.layer.definitionExpression,featureReduction:this.layer.featureReduction,fields:this.layer.fields,geometryType:this.layer.geometryType,historicMoment:s,labelsVisible:this.layer.labelsVisible,labelingInfo:this.layer.labelingInfo,availableFields:this.availableFields,effect:this.effect,filter:this.filter,gdbVersion:a,pixelBuffer:0},l=pe(this.layer.geometryType),o=await fe(r,l,this.layer.featureReduction),h=this._createConfiguration(n,i,t);this._lastPixelBuffer=0===o?0:Math.max(o,this._lastPixelBuffer),h.schema.source.pixelBuffer=this._lastPixelBuffer;const d=this._createTileRendererHash(r);if(d!==this._tileRendererHash){await this._initTileRenderer(r);const e=this._serviceOptions;this.effects.forEach((e=>E(e)&&E(e.filter)&&e.filter.enable())),this.tileRenderer.onConfigUpdate(r);const t={added:this._tileStrategy.tileKeys(),removed:[]},i=this.layer;"stream"!==i.type&&Le(i.source)&&(e.source=await i.source.openPorts()),await this._proxy.startup(this.view.featuresTilingScheme,h,e,t),this.hasHighlight()&&await this._proxy.setHighlight(Array.from(this._highlightIds.keys())),await this._onceTilesUpdated(),this.tileRenderer.onConfigUpdate(r)}else{const t=await this._proxy.update(h);(t.mesh||t.targets.aggregate)&&this._lockGPUUploads();try{await this._proxy.applyUpdate(t)}catch(e){W(e)||Ae.error(e)}(t.mesh||t.targets.aggregate)&&this._unlockGPUUploads(),this.effects.forEach((e=>E(e)&&E(e.filter)&&e.filter.enable())),this.tileRenderer.onConfigUpdate(r),this._forceAttributeTextureUpload()}this._tileRendererHash=d,this.tileRenderer.invalidateLabels(),this.requestUpdate()}catch(e){}})),this._updateHighlight=$((async()=>this._proxy.setHighlight(Array.from(this._highlightIds.keys()))))}destroy(){var e,t;null==(e=this._proxy)||e.destroy(),K(this._updateClusterSizeTask,(e=>e.remove())),null==(t=this.tileRenderer)||t.destroy()}initialize(){this.addResolvingPromise(Promise.all([this._initProxy(),this._initServiceOptions()])),this.handles.add([this.on("valueRangesChanged",(e=>{this._set("_aggregateValueRanges",e.valueRanges)})),x(this,"effect",(e=>{this.effectLists.included.effect=null==e?void 0:e.includedEffect})),x(this,"effect",(e=>{this.effectLists.excluded.effect=null==e?void 0:e.excludedEffect}))])}async _initProxy(){if("stream"!==this.layer.type&&"ogc-feature"!==this.layer.type&&this.layer.isTable)throw new N("featurelayerview:table-not-supported","table feature layer can't be displayed",{layer:this.layer});this._proxy&&this._proxy.destroy();const e=this._createClientOptions();return this._set("_proxy",new Ne({client:e})),this._proxy.when()}async _initServiceOptions(){this._set("_serviceOptions",await this._createServiceOptions())}get labelsVisible(){return!this.suspended&&this.layer.labelingInfo&&this.layer.labelsVisible}get effect(){return Z(this._effect,null)}set effect(e){const t=this._effect;E(t)&&E(t.filter)&&t.filter.enabled&&E(e)&&E(e.filter)&&e.filter.enable(),this._effect=e,this.notifyChange("effect")}get effects(){return this.effect&&[this.effect]||[]}get queryMode(){return this._serviceOptions.type}get renderingConfigHash(){if(!this.layer)return null;const e=this.availableFields,t=this.layer,i=this.view.floors,{definitionExpression:r,renderer:s,labelingInfo:a}=t,n="feature"===t.type?t.gdbVersion:void 0,l="feature"===t.type&&t.historicMoment?t.historicMoment.getTime():void 0,{timeExtent:o}=this,h="stream"===t.type?`${JSON.stringify(t.geometryDefinition)}${t.definitionExpression}`:null,d=JSON.stringify(this.clips),u=t.featureReduction&&t.featureReduction.toJSON();return JSON.stringify({filterHash:E(this.filter)&&this.filter.toJSON(),effectHash:E(this.effect)&&this.effect.toJSON(),streamFilter:h,gdbVersion:n,definitionExpression:r,historicMoment:l,availableFields:e,renderer:s,labelingInfo:t.labelsVisible&&a,timeExtent:o,floors:i,clipsHash:d,featureReduction:u})}get hasEffects(){return this.effectLists.included.hasEffects||this.effectLists.excluded.hasEffects}highlight(e){let t;return e instanceof c?t=[e.getObjectId()]:"number"==typeof e||"string"==typeof e?t=[e]:X.isCollection(e)?t=e.map((e=>e&&e.getAttribute(this.layer.objectIdField))).toArray():Array.isArray(e)&&e.length>0&&(t="number"==typeof e[0]||"string"==typeof e[0]?e:e.map((e=>e&&e.getAttribute(this.layer.objectIdField)))),t&&t.length?(t=t.filter((e=>null!=e)),this._addHighlight(t),{remove:()=>this._removeHighlight(t)}):{remove:()=>{}}}hasHighlight(){return!!this._highlightIds.size}hitTest(e,t){return this._hitTest(e,t)}queryStatistics(){return this._proxy.queryStatistics()}queryFeatures(e,t){return this.queryFeaturesJSON(e,t).then((e=>{const t=Y.fromJSON(e);return t.features.forEach((e=>{e.layer=this.layer,e.sourceLayer=this.layer})),t}))}queryFeaturesJSON(e,t){return this._proxy.queryFeatures(this._cleanUpQuery(e),t)}queryObjectIds(e,t){return this._proxy.queryObjectIds(this._cleanUpQuery(e),t)}queryFeatureCount(e,t){return this._proxy.queryFeatureCount(this._cleanUpQuery(e),t)}queryExtent(e,t){return this._proxy.queryExtent(this._cleanUpQuery(e),t).then((e=>({count:e.count,extent:ee.fromJSON(e.extent)})))}setVisibility(e,t){t?this._visibilityOverrides.delete(e):this._visibilityOverrides.add(e),this._update()}update(e){if(!this._tileStrategy||!this.tileRenderer)return;const{hasMissingTiles:t,added:i,removed:r}=this._tileStrategy.update(e);(i.length||r.length)&&this._proxy.updateTiles({added:i,removed:r}),t&&this.requestUpdate(),this.notifyChange("updating")}attach(){this.view.timeline.record(`${this.layer.title} (FeatureLayer) Attach`),this._tileStrategy=new Ve({acquireTile:e=>this._acquireTile(e),releaseTile:e=>this._releaseTile(e),tileInfoView:this.view.featuresTilingScheme,buffer:0}),this.handles.add(x(this,"renderingConfigHash",(()=>this._update())),"attach"),"stream"!==this.layer.type&&this.handles.add(this.layer.on("edits",(async e=>{this._set("_onGoingEdits",this._onGoingEdits+1);try{const t="globalIdField"in this.layer&&this.layer.globalIdField,i=e.deletedFeatures.some((e=>-1===e.objectId||!e.objectId)),r=t&&this.availableFields.includes(t);if(i&&!r)return void Ae.error(new N("mapview-apply-edits",`Editing the specified service requires the layer's globalIdField, ${t} to be included the layer's outFields for updates to be reflected on the map`));await this._proxy.onEdits(e)}catch(t){W(t)}this._set("_onGoingEdits",Math.max(0,this._onGoingEdits-1))})),"attach")}detach(){this.container.removeAllChildren(),this.handles.remove("attach"),this._updatingPipelineConfig=!1,this.tileRenderer&&(this.tileRenderer.uninstall(this.container),this.tileRenderer=null),this._tileStrategy&&(this._tileStrategy.destroy(),this._tileStrategy=null),this._tileRendererHash=null}moveStart(){this.requestUpdate()}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}async fetchPopupFeatures(e,t){if(E(t)&&t.clientGraphics.length){const e=t.clientGraphics[0];if(e instanceof Ie)return[e]}const i=this.validateFetchPopupFeatures(t);if(i)throw i;if(E(t)&&0===t.clientGraphics.length)return[];const r=this.fetchClientPopupFeatures(t);if(!e)return r;const s=this._fetchServicePopupFeatures(e,t);return te([r,s]).then(ie)}async _fetchServicePopupFeatures(e,t){if("stream"===this.layer.type||"ogc-feature"===this.layer.type)return[];const i=await this.createPopupQuery(t),{layer:r}=this,{renderer:s}=r,a=E(t)?t.event:null,n=ue({renderer:s,event:a});i.geometry=this.createFetchPopupFeaturesQueryGeometry(e,n);const l=new Set,{objectIdField:o}=r,h=E(t)?t.clientGraphics:null;if(h)for(const d of h)l.add(d.attributes[o]);return r.queryFeatures(i).then((e=>e.features.filter((e=>!l.has(e.attributes[o])))))}createFetchPopupFeaturesQueryGeometry(e,t){return ce(e,t,this.view)}isUpdating(){return null!=this.layer.renderer&&(null!=this._updatingRequiredFieldsPromise||null==this.tileRenderer||!this._proxy||!this._proxy.isReady||this._pipelineIsUpdating||this._updatingPipelineConfig||this.tileRenderer.updating||this._onGoingEdits>0)}_createClientOptions(){return{setUpdating:e=>{this._set("_pipelineIsUpdating",e)},emitEvent:e=>{this.emit(e.name,e.event)}}}async _detectQueryMode(e){if("path"in e&&re(e.path)&&"feature"===this.layer.type&&"point"===this.layer.geometryType&&!this.layer.capabilities.operations.supportsEditing&&se("featurelayer-snapshot-enabled"))try{const e=await this.layer.queryFeatureCount();if(e<=se("featurelayer-snapshot-point-min-threshold"))return{mode:"snapshot",featureCount:e};const t=se("featurelayer-snapshot-point-max-threshold"),i=se("featurelayer-snapshot-point-coverage"),r=this.view.extent,s=this.layer.fullExtent,a=null==s?void 0:s.clone().intersection(r),n=(null==a?void 0:a.width)*(null==a?void 0:a.height),l=(null==s?void 0:s.width)*(null==s?void 0:s.height),o=0===l?0:n/l;if(e<=t&&o>=i)return{mode:"snapshot",featureCount:e}}catch(t){Ae.warn("mapview-feature-layer","Encountered an error when querying for featureCount",{error:t})}return{mode:"on-demand"}}async _createServiceOptions(){const e=this.layer;if("stream"===e.type)return null;const{capabilities:t,objectIdField:i}=e,r=e.fields.map((e=>e.toJSON())),s=e.fullExtent&&e.fullExtent.toJSON(),a=pe(e.geometryType),n=e.timeInfo&&e.timeInfo.toJSON()||null,l=e.spatialReference?e.spatialReference.toJSON():null,o="feature"===e.type?e.customParameters:null,h="feature"===e.type?e.globalIdField:null;let d;"ogc-feature"===e.type?d=e.source.getFeatureDefinition():Le(e.source)?d=await e.source.openPorts():e.parsedUrl&&(d=w(e.parsedUrl),"dynamicDataSource"in e&&e.dynamicDataSource&&(d.query={layer:JSON.stringify({source:e.dynamicDataSource})}));const{mode:u,featureCount:c}=await this._detectQueryMode(d);return{type:u,featureCount:c,globalIdField:h,maxRecordCount:t.query.maxRecordCount,tileMaxRecordCount:t.query.tileMaxRecordCount,capabilities:t,fields:r,fullExtent:s,geometryType:a,objectIdField:i,source:d,timeInfo:n,spatialReference:l,customParameters:o}}async _createMemoryServiceOptions(e){const t=await e.openPorts();return s=o({},this._createServiceOptions()),i(s,r({type:"memory",source:t}));var s}_cleanUpQuery(e){const t=v.from(e)||this.createQuery();return t.outSpatialReference||(t.outSpatialReference=this.view.spatialReference),t}_createUpdateClusterSizeTask(e,t){return this.watch("_aggregateValueRanges",(async i=>{this._updateClusterEffectiveRendererSizeVariable(e,t,i),this._updatingPipelineConfig||this.tileRenderer.onConfigUpdate(this._effectiveRenderer)}))}async _updateClusterEffectiveRendererSizeVariable(e,t,i){if(e.dynamicClusterSize&&"visualVariables"in e&&e.visualVariables){const r=ye(e.visualVariables);if(E(r)&&"cluster_count"===r.field){const s=e.visualVariables.indexOf(r);e.visualVariables[s]=ge(t,i);const a=e.clone();a.dynamicClusterSize=!0,this._set("_effectiveRenderer",a)}}}_getEffectiveRenderer(){const e=this.layer.renderer,t=this.layer.featureReduction;if(E(this._updateClusterSizeTask)&&(this._updateClusterSizeTask.remove(),this._updateClusterSizeTask=null),t&&"cluster"===t.type&&me(e)){const i=t,r=[],s=_e(r,e,i,this._aggregateValueRanges);return K(this._updateClusterSizeTask,(e=>e.remove())),this._updateClusterSizeTask=this._createUpdateClusterSizeTask(s,i),{renderer:s,aggregateFields:r,featureReduction:t}}return{renderer:e,aggregateFields:[],featureReduction:null}}_acquireTile(e){const t=this.tileRenderer.acquireTile(e);return t.once("attach",(()=>{this.requestUpdate()})),t}_releaseTile(e){this.tileRenderer.releaseTile(e)}async _initTileRenderer(e){const t=await async function(e,t){if(!e)return null;switch(e.type){case"class-breaks":case"simple":case"unique-value":case"dot-density":case"dictionary":return new((await import("./SymbolTileRenderer.7b6cd256.js")).default)(t);case"heatmap":return new((await import("./HeatmapTileRenderer.e497da71.js")).default)(t)}}(e,{layerView:this,tileInfoView:this.view.featuresTilingScheme,layer:this.layer});return this.tileRenderer&&(this._tileStrategy.clear(),this.tileRenderer.uninstall(this.container),this.tileRenderer.destroy(),this.tileRenderer=null),this.destroyed?null:(this._proxy.tileRenderer=t,this._set("tileRenderer",t),this.tileRenderer.install(this.container),this.tileRenderer.onConfigUpdate(e),this.requestUpdate(),this.tileRenderer)}_createTileRendererHash(e){return`${"heatmap"===e.type?"heatmap":"symbol"}.${"dot-density"===e.type}`}_createFeatureDataHash(e,t,i){const r=e.getAttributeHash(),s=JSON.stringify(t),a=E(i)&&JSON.stringify(i.filter),n=JSON.stringify(this.timeExtent);let l="";return this._visibilityOverrides.forEach((e=>l+=e)),`${r}.${s}.${a}.${n}.${l}`}get hasFilter(){const e=!!("floorInfo"in this.layer&&this.layer.floorInfo&&this.view.floors&&this.view.floors.length);return!!this.filter||e||!!this._visibilityOverrides.size||!!this.timeExtent}_injectOverrides(e){const t=E(e)?e.timeExtent:null,i=E(this.timeExtent)&&E(t)?this.timeExtent.intersection(t):this.timeExtent||t;let r=null;const s="floorInfo"in this.layer&&this.layer.floorInfo;if(s){const t=E(e)&&e.where;r=this._addFloorFilterClause(t)}if(!this._visibilityOverrides.size&&!i&&!s)return e;const a=E(e)&&e.clone()||new Te;return a.hiddenIds=this._visibilityOverrides,a.timeExtent=i,r&&(a.where=r),a}_addFloorFilterClause(e){const t=this.layer;let i=e||"";if("floorInfo"in t&&t.floorInfo){var r;let e=this.view.floors;if(!e||!e.length)return i;null!=(r=t.floorInfo.viewAllLevelIds)&&r.length&&(e=t.floorInfo.viewAllLevelIds);const s=e.filter((e=>""!==e)).map((e=>"'"+e+"'"));s.push("''");const a=t.floorInfo.floorField;let n="("+a+" IN ({ids}) OR "+a+" IS NULL)";if(n=n.replace("{ids}",s.join(", ")),E(i)&&i.includes(a)){let e=new RegExp("AND \\("+a+".*NULL\\)","g");i=i.replace(e,""),e=new RegExp("\\("+a+".*NULL\\)","g"),i=i.replace(e,""),i=i.replace(/\s+/g," ").trim()}i=""!==i?"("+i+") AND "+n:n}return""!==i?i:null}_createConfiguration(e,t,i){const r="feature"===this.layer.type&&this.layer.historicMoment?this.layer.historicMoment.getTime():void 0,s="feature"===this.layer.type?this.layer.gdbVersion:void 0,a=new Array(oe),n=this._injectOverrides(t);a[0]=E(n)?n.toJSON():null,a[1]=E(i)&&i.filter?i.filter.toJSON():null;const l=ve(e);if(ae(l))return null;const o=ne();return{definitionExpression:this.layer.definitionExpression,availableFields:this.availableFields,gdbVersion:s,historicMoment:r,devicePixelRatio:window.devicePixelRatio||1,filters:a,schema:l,supportsTextureFloat:o.supportsTextureFloat,maxTextureSize:o.maxTextureSize}}_hasRequiredSupport(e){var t;return!("dot-density"===(null==(t=e.renderer)?void 0:t.type)&&!ne().supportsTextureFloat&&(Ae.error(new N("webgl-missing-extension","Missing WebGL extension OES_Texture_Float which is required for DotDensity")),1))}_onceTilesUpdated(){return this.requestUpdate(),B(this,"_pipelineIsUpdating",!1)}_lockGPUUploads(){this.tileRenderer&&this.tileRenderer.lockGPUUploads()}_unlockGPUUploads(){this.tileRenderer&&this.tileRenderer.unlockGPUUploads()}_forceAttributeTextureUpload(){this.tileRenderer&&this.tileRenderer.forceAttributeTextureUpload()}_update(){this.view.timeline.begin(`${this.layer.title} (FeatureLayer) Initial Pipeline Config`);const e=this._doUpdate();this._updatingPromise=e;const t=()=>{e===this._updatingPromise&&this._set("_updatingPipelineConfig",!1),this.view&&this.view.timeline.end(`${this.layer.title} (FeatureLayer) Initial Pipeline Config`)};e.then(t).catch((e=>{W(e)||Ae.error(e),t()}))}_addHighlight(e){for(const t of e)if(this._highlightIds.has(t)){const e=this._highlightIds.get(t);this._highlightIds.set(t,e+1)}else this._highlightIds.set(t,1);this._updateHighlight().catch((e=>{W(e)||Ae.error(e)}))}_removeHighlight(e){for(const t of e)if(this._highlightIds.has(t)){const e=this._highlightIds.get(t)-1;0===e?this._highlightIds.delete(t):this._highlightIds.set(t,e)}this._updateHighlight().catch((e=>{W(e)||Ae.error(e)}))}_createHittestResult(e){return e.layer=this.layer,e.sourceLayer=this.layer,E(e.geometry)&&(e.geometry.spatialReference=this.view.spatialReference),e}async _hitTest(e,t){if(this.suspended||!this.tileRenderer)return null;const i=await this.tileRenderer.hitTest(e,t);if(0===i.length)return await le(1),null;const r=i[0];if(!(e=>(2147483648&e)>>>31==1)(r)){const e=await this._proxy.getFeature(r);return K(e,(e=>this._createHittestResult(c.fromJSON(e))))}const s=await this._proxy.getAggregate(r);if(ae(s))return null;if(E(s.referenceId)){const e=await this._proxy.getFeature(s.referenceId);return K(e,(e=>this._createHittestResult(c.fromJSON(e))))}return this._createHittestResult(Ie.fromJSON(s))}};h([d()],Me.prototype,"_serviceOptions",void 0),h([d()],Me.prototype,"_proxy",void 0),h([d()],Me.prototype,"_pipelineIsUpdating",void 0),h([d()],Me.prototype,"_updatingPipelineConfig",void 0),h([d()],Me.prototype,"_effectiveRenderer",void 0),h([d()],Me.prototype,"_aggregateValueRanges",void 0),h([d()],Me.prototype,"_onGoingEdits",void 0),h([d()],Me.prototype,"_isRefreshing",void 0),h([d()],Me.prototype,"labelsVisible",null),h([d({type:Te})],Me.prototype,"filter",void 0),h([d({type:Ce})],Me.prototype,"effect",null),h([d({readOnly:!0})],Me.prototype,"effects",null),h([d({readOnly:!0})],Me.prototype,"queryMode",null),h([d()],Me.prototype,"renderingConfigHash",null),h([d()],Me.prototype,"tileRenderer",void 0),h([d()],Me.prototype,"updating",void 0),Me=h([u("esri.views.2d.layers.FeatureLayerView2D")],Me);var He=Me;export default He;