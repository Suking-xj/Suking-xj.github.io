import{n as t,d6 as e,B as i,p as a,y as r,q as s}from"./vendor.abf366c9.js";import{l as o,d as n}from"./LayerView2D.6b7d6a0c.js";import{t as p}from"./BitmapContainer.0a1a8a45.js";import{S as m}from"./ExportStrategy.107b73f8.js";import"./Container.9714e1c0.js";import"./mat4f32.a5cabe00.js";import"./_commonjsHelpers.f2a458db.js";import"./Utils.5228be88.js";import"./FramebufferObject.55526cd6.js";import"./WGLContainer.8b961f3e.js";import"./definitions.6737c10c.js";import"./VertexArrayObject.edd2ea65.js";import"./vec4f32.6de15d07.js";import"./ShaderCompiler.e629f916.js";import"./earcut.0e5467f0.js";import"./GeometryUtils.9c8423f5.js";import"./MaterialKey.940ba235.js";import"./Bitmap.861d0394.js";const d=t.getLogger("esri.views.2d.layers.BaseDynamicLayerView2D");let h=class extends(e(o(n))){hitTest(){return null}update(t){this.strategy.update(t).catch((t=>{i(t)||d.error(t)})),this.notifyChange("updating")}attach(){this._bitmapContainer=new p,this.container.addChild(this._bitmapContainer),this.strategy=new m({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)})}detach(){this.strategy.destroy(),this.strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}fetchBitmapData(t,e,i){return this.layer.fetchImage(t,e,i,{timestamp:this.refreshTimestamp})}async doRefresh(){this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}};a([r()],h.prototype,"strategy",void 0),a([r()],h.prototype,"updating",void 0),h=a([s("esri.views.2d.layers.BaseDynamicLayerView2D")],h);var c=h;export default c;