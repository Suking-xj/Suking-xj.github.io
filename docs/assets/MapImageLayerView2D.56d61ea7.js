var e=Object.defineProperty,t=Object.defineProperties,r=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,o=(t,r,a)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[r]=a,n=(e,t)=>{for(var r in t||(t={}))i.call(t,r)&&o(e,r,t[r]);if(a)for(var r of a(t))s.call(t,r)&&o(e,r,t[r]);return e};import{p,y as m,dj as l,q as h,h as d,r as c,cb as u,dn as g,n as y,d6 as b,dK as f,B as j}from"./vendor.abf366c9.js";import{l as v,d as w}from"./LayerView2D.6b7d6a0c.js";import{a as x}from"./drapedUtils.fa892ade.js";import{t as C,e as I}from"./BaseGraphicContainer.a08e1b72.js";import{n as P}from"./ExportImageParameters.344d3519.js";import{s as U}from"./clickToleranceUtils.1b8c692d.js";import{i as E,d as G}from"./popupUtils.f8daa8a4.js";import{t as O}from"./BitmapContainer.0a1a8a45.js";import{S}from"./ExportStrategy.107b73f8.js";import{I as V}from"./Utils.5228be88.js";import"./Container.9714e1c0.js";import"./mat4f32.a5cabe00.js";import"./_commonjsHelpers.f2a458db.js";import"./definitions.6737c10c.js";import"./schemaUtils.eb60e7e9.js";import"./MD5.1ef35834.js";import"./MaterialKey.940ba235.js";import"./visualVariablesUtils.99d558bb.js";import"./Rect.b51904ac.js";import"./BidiEngine.9b392b22.js";import"./WGLMeshFactory.c4bfdd7b.js";import"./ComputedAttributeStorage.cb18fda2.js";import"./quickselect.e4940b29.js";import"./FeatureSetReader.e8820b66.js";import"./centroid.93c1b848.js";import"./visualVariablesUtils.d3e8106e.js";import"./tileUtils.346f220e.js";import"./TurboLine.110e44de.js";import"./GeometryUtils.9c8423f5.js";import"./quantizationUtils.bfb6cef5.js";import"./json.7989af9b.js";import"./FramebufferObject.55526cd6.js";import"./VertexArrayObject.edd2ea65.js";import"./FeatureContainer.b45dc52e.js";import"./TileContainer.445deee8.js";import"./WGLContainer.8b961f3e.js";import"./vec4f32.6de15d07.js";import"./ShaderCompiler.e629f916.js";import"./earcut.0e5467f0.js";import"./sublayerUtils.2c5b95a7.js";import"./Bitmap.861d0394.js";const q=e=>{let a=class extends e{initialize(){this.exportImageParameters=new P({layer:this.layer})}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null}get exportImageVersion(){var e;return null==(e=this.exportImageParameters)||e.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}async fetchPopupFeatures(e,a){const{layer:i}=this;if(!e)return Promise.reject(new d("mapimagelayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:i}));const s=this.get("view.scale"),o=[],p=async e=>{const i=0===e.minScale||s<=e.minScale,m=0===e.maxScale||s>=e.maxScale;if(e.visible&&i&&m)if(e.sublayers)e.sublayers.forEach(p);else if(e.popupEnabled){const i=G(e,(l=n({},a),t(l,r({defaultPopupTemplateEnabled:!1}))));c(i)&&o.unshift({sublayer:e,popupTemplate:i})}var l},m=i.sublayers.toArray().reverse().map(p);await Promise.all(m);const l=o.map((async({sublayer:t,popupTemplate:r})=>{await t.load().catch((()=>{}));const i=t.createQuery(),s=c(a)?a.event:null,o=U({renderer:t.renderer,event:s}),n=this.createFetchPopupFeaturesQueryGeometry(e,o);i.geometry=n,i.outFields=await E(t,r);const p=await this._loadArcadeModules(r);return p&&p.arcadeUtils.hasGeometryOperations(r)||(i.maxAllowableOffset=n.width/o),(await t.queryFeatures(i)).features}));return(await u(l)).reduce(((e,t)=>t.value?[...e,...t.value]:e),[]).filter((e=>null!=e))}canResume(){var e;return!(!super.canResume()||null!=(e=this.timeExtent)&&e.isEmpty)}_loadArcadeModules(e){if(e.get("expressionInfos.length"))return g()}};return p([m()],a.prototype,"exportImageParameters",void 0),p([m({readOnly:!0})],a.prototype,"exportImageVersion",null),p([m()],a.prototype,"layer",void 0),p([m()],a.prototype,"suspended",void 0),p([m(l)],a.prototype,"timeExtent",void 0),a=p([h("esri.views.layers.MapImageLayerView")],a),a};let M=class extends C{renderChildren(e){if(e.drawPhase!==V.HIGHLIGHT)return;if(this.attributeView.bindTextures(e.context),!this.children.some((e=>e.hasData)))return;super.renderChildren(e);const{painter:t}=e,r=t.effects.highlight;r.bind(e),e.context.setColorMask(!0,!0,!0,!0),e.context.clear(16384),this._renderChildren(e,r.defines.concat(["highlightAll"])),r.draw(e),r.unbind()}};M=p([h("esri.views.2d.layers.support.HighlightGraphicContainer")],M);var _=M;const F=y.getLogger("esri.views.2d.layers.MapImageLayerView2D");let T=class extends(q(b(v(w)))){constructor(){super(...arguments),this._highlightGraphics=new f}hitTest(){return null}update(e){this.strategy.update(e).catch((e=>{j(e)||F.error(e)}))}attach(){const{imageMaxWidth:e,imageMaxHeight:t,version:r}=this.layer,a=r>=10.3,i=r>=10;this._bitmapContainer=new O,this.container.addChild(this._bitmapContainer);const s=new I({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new _(this.view.featuresTilingScheme)});this.container.addChild(s.container),this.strategy=new S({container:this._bitmapContainer,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxWidth:e,imageMaxHeight:t,imageRotationSupported:a,imageNormalizationSupported:i,hidpi:!0}),this.handles.add(this.watch("exportImageVersion",(()=>this.requestUpdate())),"exportImageVersion"),this.requestUpdate()}detach(){this.handles.remove("exportImageVersion"),this.strategy.destroy(),this.container.removeAllChildren(),this._bitmapContainer.removeAllChildren()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}highlight(e,t){return this._highlightGraphics.add(e),{remove:()=>{this._highlightGraphics.remove(e)}}}createFetchPopupFeaturesQueryGeometry(e,t){return x(e,t,this.view)}async doRefresh(){this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(e,t,r,a){return this.layer.fetchImage(e,t,r,n({timeExtent:this.timeExtent,timestamp:this.refreshTimestamp},a))}};p([m()],T.prototype,"strategy",void 0),p([m()],T.prototype,"updating",void 0),T=p([h("esri.views.2d.layers.MapImageLayerView2D")],T);var A=T;export default A;
