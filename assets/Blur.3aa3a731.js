import"./vendor.74d5941c.js";import{r as t}from"./FramebufferObject.18518335.js";import{r as e}from"./WGLContainer.74815466.js";import"./_commonjsHelpers.f2a458db.js";import"./Utils.3f1577e5.js";import"./Container.d2c27c9d.js";import"./mat4f32.a5cabe00.js";import"./definitions.6737c10c.js";import"./VertexArrayObject.67803418.js";import"./vec4f32.6de15d07.js";import"./ShaderCompiler.b19da10d.js";import"./earcut.0e5467f0.js";import"./GeometryUtils.9c8423f5.js";import"./MaterialKey.3bc4aaea.js";const r=[1,0],i=[0,1];class s{constructor(){this._blurFBO=null,this._size=[0,0],this._programDesc={gaussianBlur:{vsPath:"post-processing/pp",fsPath:"post-processing/blur/gaussianBlur",attributes:{a_position:0}},radialBlur:{vsPath:"post-processing/pp",fsPath:"post-processing/blur/radial-blur",attributes:{a_position:0}},blit:{vsPath:"post-processing/pp",fsPath:"post-processing/blit",attributes:{a_position:0}}}}dispose(){this._blurFBO&&(this._blurFBO.dispose(),this._blurFBO=null)}draw(t,r,i){const{context:s}=t,{type:a,radius:o}=i;if(0===o)return;this._createOrResizeResources(t),this._quad||(this._quad=new e(s,[-1,-1,1,-1,-1,1,1,1]));const n=this._quad;n.bind(),"blur"===a?this._gaussianBlur(t,r,o):this._radialBlur(t,r),n.unbind()}_gaussianBlur(t,e,s){const{context:a,state:o,painter:n,pixelRatio:l}=t,{size:u}=o,{materialManager:d}=n,c=this._programDesc,p=this._quad,b=[Math.round(l*u[0]),Math.round(l*u[1])],m=this._blurFBO,h=d.getProgram(t,c.gaussianBlur,[{name:"radius",value:Math.ceil(s)}]);a.bindProgram(h),a.setBlendingEnabled(!1),a.bindFramebuffer(m),a.bindTexture(e.colorTexture,4),h.setUniform1i("u_colorTexture",4),h.setUniform2fv("u_texSize",b),h.setUniform2fv("u_direction",r),h.setUniform1f("u_sigma",s),p.draw(),a.bindFramebuffer(e),a.setStencilWriteMask(0),a.setStencilTestEnabled(!1),a.setDepthWriteEnabled(!1),a.setDepthTestEnabled(!1),a.bindTexture(m.colorTexture,5),h.setUniform1i("u_colorTexture",5),h.setUniform2fv("u_direction",i),p.draw(),a.setBlendingEnabled(!0),a.setBlendFunction(1,771),a.setStencilTestEnabled(!0)}_radialBlur(t,e){const{context:r,painter:i}=t,{materialManager:s}=i,a=this._programDesc,o=this._quad,n=this._blurFBO;r.bindFramebuffer(n);const l=s.getProgram(t,a.radialBlur);r.bindProgram(l),r.setBlendingEnabled(!1),r.bindTexture(e.colorTexture,4),l.setUniform1i("u_colorTexture",4),o.draw(),r.bindFramebuffer(e),r.setStencilWriteMask(0),r.setStencilTestEnabled(!1),r.setDepthWriteEnabled(!1),r.setDepthTestEnabled(!1),r.setBlendingEnabled(!0);const u=s.getProgram(t,a.blit);r.bindProgram(u),r.bindTexture(n.colorTexture,5),u.setUniform1i("u_texture",5),r.setBlendFunction(1,771),o.draw()}_createOrResizeResources(e){const{context:r,state:i,pixelRatio:s}=e,{size:a}=i,o=Math.round(s*a[0]),n=Math.round(s*a[1]);this._blurFBO&&this._size[0]===o&&this._size[1]===n||(this._size[0]=o,this._size[1]=n,this._blurFBO?this._blurFBO.resize(o,n):this._blurFBO=new t(r,{colorTarget:0,depthStencilTarget:0,width:o,height:n},{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!1,width:o,height:n}))}}export{s as Blur};