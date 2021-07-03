var e=Object.defineProperty,t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,a=(t,r,i)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[r]=i;import{ae as s,af as o,et as n,ag as p,aa as m,a4 as h,eh as l,an as d,cr as c}from"./vendor.74d5941c.js";import{l as u,d as y}from"./LayerView2D.06dde519.js";import{l as f}from"./ExportWMSImageParameters.371f2196.js";import{t as g}from"./BitmapContainer.dc86fd3a.js";import{S as x}from"./ExportStrategy.a30951f7.js";import"./Container.d2c27c9d.js";import"./mat4f32.a5cabe00.js";import"./_commonjsHelpers.f2a458db.js";import"./Utils.3f1577e5.js";import"./FramebufferObject.18518335.js";import"./WGLContainer.74815466.js";import"./definitions.6737c10c.js";import"./VertexArrayObject.67803418.js";import"./vec4f32.6de15d07.js";import"./ShaderCompiler.b19da10d.js";import"./earcut.0e5467f0.js";import"./GeometryUtils.9c8423f5.js";import"./MaterialKey.3bc4aaea.js";import"./Bitmap.0855f65e.js";const w=e=>{let t=class extends e{initialize(){this.exportImageParameters=new f({layer:this.layer})}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null}get exportImageVersion(){var e;return null==(e=this.exportImageParameters)||e.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}fetchPopupFeatures(e){const{layer:t}=this;if(!e)return Promise.reject(new m("wmslayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:t}));const{popupEnabled:r}=t;if(!r)return Promise.reject(new m("wmslayerview:fetchPopupFeatures","popupEnabled should be true",{popupEnabled:r}));const i=this.createFetchPopupFeaturesQuery(e);if(!i)return Promise.resolve([]);const{extent:a,width:s,height:o,x:n,y:p}=i;if(!(a&&s&&o))throw new m("wmslayerview:fetchPopupFeatures","WMSLayer does not support fetching features.",{extent:a,width:s,height:o});const h=t.fetchFeatureInfo(a,s,o,n,p);return Promise.resolve(h?[h]:[])}};return s([o()],t.prototype,"exportImageParameters",void 0),s([o({readOnly:!0})],t.prototype,"exportImageVersion",null),s([o()],t.prototype,"layer",void 0),s([o(n)],t.prototype,"timeExtent",void 0),t=s([p("esri.layers.mixins.WMSLayerView")],t),t},v=h.getLogger("esri.views.2d.layers.WMSLayerView2D");let b=class extends(w(l(u(y)))){initialize(){const{layer:e,view:t}=this;e.supportsSpatialReference(t.spatialReference)||this.addResolvingPromise(Promise.reject(new m("layerview:spatial-reference-incompatible","The spatial references supported by this WMS layer are incompatible with the spatial reference of the view",{layer:e})))}hitTest(){return null}update(e){this.strategy.update(e).catch((e=>{d(e)||v.error(e)}))}attach(){const{layer:e}=this,{imageMaxHeight:t,imageMaxWidth:r}=e;this._bitmapContainer=new g,this.container.addChild(this._bitmapContainer),this.strategy=new x({container:this._bitmapContainer,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxHeight:t,imageMaxWidth:r,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1}),this.handles.add(this.watch("exportImageVersion",(()=>this.requestUpdate())),"exportImageVersion")}detach(){this.handles.remove("exportImageVersion"),this.strategy.destroy(),this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}createFetchPopupFeaturesQuery(e){const{view:t}=this,r=this._bitmapContainer,{x:i,y:a}=e,{spatialReference:s}=t;let o=null,n=0,p=0;if(r.children.some((e=>{const{width:t,height:r,resolution:m,x:h,y:l}=e,d=h+m*t,u=l-m*r;return i>=h&&i<=d&&a<=l&&a>=u&&(o=new c({xmin:h,ymin:u,xmax:d,ymax:l,spatialReference:s}),n=t,p=r,!0)})),!o)return null;const m=o.width/n,h=Math.round((i-o.xmin)/m),l=Math.round((o.ymax-a)/m);return{extent:o,width:n,height:p,x:h,y:l}}async doRefresh(){this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(e,s,o,n){return this.layer.fetchImage(e,s,o,((e,s)=>{for(var o in s||(s={}))r.call(s,o)&&a(e,o,s[o]);if(t)for(var o of t(s))i.call(s,o)&&a(e,o,s[o]);return e})({timeExtent:this.timeExtent,timestamp:this.refreshTimestamp},n))}};s([o()],b.prototype,"strategy",void 0),s([o()],b.prototype,"updating",void 0),b=s([p("esri.views.2d.layers.WMSLayerView2D")],b);var j=b;export default j;