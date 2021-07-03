import{p as e,y as t,q as i,h as r,cb as s,r as a,n as l,d6 as n,d7 as o,d8 as h,d9 as c,t as u,B as p,bA as m}from"./vendor.abf366c9.js";import{l as f,d}from"./LayerView2D.6b7d6a0c.js";import{a as y}from"./drapedUtils.fa892ade.js";import{s as w}from"./clickToleranceUtils.1b8c692d.js";import{i as g}from"./BitmapTileLayerView2D.aceb29dc.js";import"./Container.9714e1c0.js";import"./mat4f32.a5cabe00.js";import"./_commonjsHelpers.f2a458db.js";import"./BitmapTileContainer.4d7e1a0e.js";import"./Utils.5228be88.js";import"./FramebufferObject.55526cd6.js";import"./WGLContainer.8b961f3e.js";import"./definitions.6737c10c.js";import"./VertexArrayObject.edd2ea65.js";import"./vec4f32.6de15d07.js";import"./ShaderCompiler.e629f916.js";import"./earcut.0e5467f0.js";import"./GeometryUtils.9c8423f5.js";import"./MaterialKey.940ba235.js";import"./TileContainer.445deee8.js";import"./Bitmap.861d0394.js";const _=l=>{let n=class extends l{async fetchPopupFeatures(e,t){const{layer:i}=this;if(!e)return Promise.reject(new r("tilelayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:i}));if("tile"!==i.type)return Promise.reject(new r("tilelayerview:fetchPopupFeatures","Layer type should be 'tile'",{type:i.type}));const l=this.get("view.scale"),n=i.allSublayers.toArray().filter((e=>{const t=0===e.minScale||l<=e.minScale,i=0===e.maxScale||l>=e.maxScale;return e.popupTemplate&&e.popupEnabled&&e.visible&&t&&i}));return s(n.map((async i=>{const r=i.createQuery(),s=a(t)?t.event:null,l=w({renderer:i.renderer,event:s});return r.geometry=this.createFetchPopupFeaturesQueryGeometry(e,l),r.outFields=await i.popupTemplate.getRequiredFields(),(await i.queryFeatures(r)).features}))).then((e=>[].concat(...e.map((e=>e.value)).filter(Boolean))))}};return e([t()],n.prototype,"layer",void 0),n=e([i("esri.layers.mixins.TileLayerView")],n),n},v=l.getLogger("esri.views.2d.layers.TileLayerView2D"),I=[0,0];let T=class extends(_(n(g(f(d))))){constructor(){super(...arguments),this._tileStrategy=null,this._fetchQueue=null,this.layer=null}initialize(){const e=this.layer.tileInfo,t=e&&e.spatialReference;let i;t||(i=new r("layerview:tiling-information-missing","The layer doesn't provide tiling information",{layer:this.layer})),t.equals(this.view.spatialReference)||(i=new r("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",{layer:this.layer})),this.watch("resampling",(()=>{this.refresh()})),i&&this.addResolvingPromise(Promise.reject(i))}get resampling(){return!("resampling"in this.layer)||!1!==this.layer.resampling}hitTest(){return null}update(e){this._fetchQueue.pause(),this._fetchQueue.state=e.state,this._tileStrategy.update(e),this._fetchQueue.resume(),this.notifyChange("updating")}attach(){const e="tileServers"in this.layer?this.layer.tileServers:null;this._tileInfoView=new o(this.layer.tileInfo,this.layer.fullExtent),this._fetchQueue=new h({tileInfoView:this._tileInfoView,concurrency:e&&10*e.length||10,process:(e,t)=>this.fetchTile(e,t)}),this._tileStrategy=new c({cachePolicy:"keep",resampling:this.resampling,acquireTile:e=>this.acquireTile(e),releaseTile:e=>this.releaseTile(e),tileInfoView:this._tileInfoView}),this.requestUpdate(),this.container.requestRender(),super.attach()}detach(){super.detach(),this._tileStrategy.destroy(),this._fetchQueue.clear(),this.container.removeAllChildren(),this._fetchQueue=this._tileStrategy=this._tileInfoView=null}moveStart(){this.requestUpdate()}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}createFetchPopupFeaturesQueryGeometry(e,t){return y(e,t,this.view)}async doRefresh(){this.updateRequested||this.suspended||(this._fetchQueue.reset(),this._tileStrategy.tiles.forEach((e=>this._enqueueTileFetch(e))),this.notifyChange("updating"))}isUpdating(){var e;return(null==(e=this._fetchQueue)?void 0:e.length)>0}acquireTile(e){const t=this._bitmapView.createTile(e),i=t.bitmap;return[i.x,i.y]=this._tileInfoView.getTileCoords(I,t.key),i.resolution=this._tileInfoView.getTileResolution(t.key),[i.width,i.height]=this._tileInfoView.tileInfo.size,this._enqueueTileFetch(t),this._bitmapView.addChild(t),this.requestUpdate(),t}releaseTile(e){this._fetchQueue.abort(e.key.id),this._bitmapView.removeChild(e),e.once("detach",(()=>e.destroy())),this.requestUpdate()}async fetchTile(e,t){const i="tilemapCache"in this.layer?this.layer.tilemapCache:null,r=!u(t)&&t.signal;if(!i)try{return await this._fetchImage(e,r)}catch(h){if(!p(h)&&!this.resampling)return this._createBlankImage();throw h}const s=new m(0,0,0,0);let a;try{if(await i.fetchAvailabilityUpsample(e.level,e.row,e.col,s,{signal:r}),s.level!==e.level&&!this.resampling)return this._createBlankImage();a=await this._fetchImage(s,r)}catch(h){if(p(h))throw h;a=await this._fetchImage(e,r)}const{level:l,row:n,col:o}=s;return this.resampling&&l!==e.level?this._resampleImage(a,l,n,o,e.level,e.row,e.col):a}async _enqueueTileFetch(e){if(!this._fetchQueue.has(e.key.id)){try{const t=await this._fetchQueue.push(e.key);e.bitmap.source=t,e.bitmap.width=this._tileInfoView.tileInfo.size[0],e.bitmap.height=this._tileInfoView.tileInfo.size[1],e.once("attach",(()=>this.requestUpdate()))}catch(t){p(t)||v.error(t)}this.requestUpdate()}}async _fetchImage(e,t){return this.layer.fetchTile(e.level,e.row,e.col,{timestamp:this.refreshTimestamp,signal:t})}_resampleImage(e,t,i,r,s,a,l){const n=this._tileInfoView.tileInfo.size,o=this._tileInfoView.getTileResolution(t),h=this._tileInfoView.getTileResolution(s);let c=this._tileInfoView.getLODInfoAt(s);const u=c.getXForColumn(l),p=c.getYForRow(a);c=this._tileInfoView.getLODInfoAt(t);const m=c.getXForColumn(r),f=c.getYForRow(i),d=Math.round((u-m)/o),y=Math.round(-(p-f)/o),w=Math.round(n[0]*(h/o)),g=Math.round(n[1]*(h/o)),_=this._createBlankImage();return _.getContext("2d").drawImage(e,d,y,w,g,0,0,n[0],n[1]),_}_createBlankImage(){const e=this._tileInfoView.tileInfo.size,t=document.createElement("canvas");return[t.width,t.height]=e,t}};e([t()],T.prototype,"resampling",null),T=e([i("esri.views.2d.layers.TileLayerView2D")],T);var b=T;export default b;