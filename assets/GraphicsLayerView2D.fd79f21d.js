import{d1 as e,c_ as i,ae as r,af as t,ag as s}from"./vendor.74d5941c.js";import{l as a,d as p}from"./LayerView2D.06dde519.js";import{e as o}from"./BaseGraphicContainer.437a7535.js";import{i as h}from"./GraphicContainer.df674785.js";import"./Container.d2c27c9d.js";import"./mat4f32.a5cabe00.js";import"./_commonjsHelpers.f2a458db.js";import"./definitions.6737c10c.js";import"./schemaUtils.ab77d03d.js";import"./MD5.1ef35834.js";import"./Utils.3f1577e5.js";import"./FramebufferObject.18518335.js";import"./MaterialKey.3bc4aaea.js";import"./visualVariablesUtils.cb58e4df.js";import"./CIMSymbolHelper.6546a069.js";import"./Rect.b51904ac.js";import"./BidiEngine.9b392b22.js";import"./WGLMeshFactory.8977e3d9.js";import"./ComputedAttributeStorage.2a55b702.js";import"./quickselect.e4940b29.js";import"./FeatureSetReader.a91e3e2d.js";import"./centroid.93c1b848.js";import"./visualVariablesUtils.bb9f81fa.js";import"./tileUtils.7f9c3912.js";import"./cimAnalyzer.0b895c7f.js";import"./TurboLine.ecd76861.js";import"./GeometryUtils.9c8423f5.js";import"./projectionSupport.62084d5a.js";import"./json.7989af9b.js";import"./VertexArrayObject.67803418.js";import"./FeatureContainer.3e3899c9.js";import"./TileContainer.763b6c09.js";import"./WGLContainer.74815466.js";import"./vec4f32.6de15d07.js";import"./ShaderCompiler.b19da10d.js";import"./earcut.0e5467f0.js";const c={remove(){},pause(){},resume(){}};let m=class extends(a(p)){initialize(){this.graphicsView=new o({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new h(this.view.featuresTilingScheme)})}attach(){this.container.addChild(this.graphicsView.container),this.handles.add(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler),"graphicslayerview2d")}detach(){this.container.removeAllChildren(),this.graphicsView.destroy(),this.handles.remove("graphicslayerview2d")}hitTest(e,i){return this.suspended||!this.graphicsView?Promise.resolve(null):this.graphicsView.hitTest(e,i)}async fetchPopupFeatures(e){if(this.graphicsView)return this.graphicsView.searchFeatures(e).then((e=>e.filter((e=>!!e.popupTemplate))))}update(e){this.graphicsView.processUpdate(e)}moveStart(){}viewChange(){this.graphicsView.viewChange()}moveEnd(){}isUpdating(){return!this.graphicsView||this.graphicsView.updating}highlight(r){let t;return"number"==typeof r?t=[r]:r instanceof e?t=[r.uid]:Array.isArray(r)&&r.length>0?t="number"==typeof r[0]?r:r.map((e=>e&&e.uid)):i.isCollection(r)&&(t=r.map((e=>e&&e.uid)).toArray()),t=t.filter((e=>null!=e)),t.length?(this.graphicsView.addHighlight(t),{remove:()=>this.graphicsView.removeHighlight(t)}):c}queryGraphics(){return Promise.resolve(this.graphicsView.graphics)}};r([t()],m.prototype,"graphicsView",void 0),r([t()],m.prototype,"updating",void 0),m=r([s("esri.views.2d.layers.GraphicsLayerView2D")],m);var n=m;export default n;