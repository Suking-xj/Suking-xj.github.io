var t=Object.defineProperty,e=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,s=(e,i,r)=>i in e?t(e,i,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[i]=r,n=(t,n)=>{for(var o in n||(n={}))i.call(n,o)&&s(t,o,n[o]);if(e)for(var o of e(n))r.call(n,o)&&s(t,o,n[o]);return t};import{o}from"./_commonjsHelpers.f2a458db.js";import{n as a,r as h,o as l}from"./vendor.abf366c9.js";var c=o((function(t){var e;void 0!==(e=["precision","highp","mediump","lowp","attribute","const","uniform","varying","break","continue","do","for","while","if","else","in","out","inout","float","int","void","bool","true","false","discard","return","mat2","mat3","mat4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","struct","asm","class","union","enum","typedef","template","this","packed","goto","switch","default","inline","noinline","volatile","public","static","extern","external","interface","long","short","double","half","fixed","unsigned","input","output","hvec2","hvec3","hvec4","dvec2","dvec3","dvec4","fvec2","fvec3","fvec4","sampler2DRect","sampler3DRect","sampler2DRectShadow","sizeof","cast","namespace","using"])&&(t.exports=e)})),_=o((function(t){var e;void 0!==(e=["<<=",">>=","++","--","<<",">>","<=",">=","==","!=","&&","||","+=","-=","*=","/=","%=","&=","^^","^=","|=","(",")","[","]",".","!","~","*","/","%","+","-","<",">","&","^","|","?",":","=",",",";","{","}"])&&(t.exports=e)})),d=o((function(t){var e;void 0!==(e=["abs","acos","all","any","asin","atan","ceil","clamp","cos","cross","dFdx","dFdy","degrees","distance","dot","equal","exp","exp2","faceforward","floor","fract","gl_BackColor","gl_BackLightModelProduct","gl_BackLightProduct","gl_BackMaterial","gl_BackSecondaryColor","gl_ClipPlane","gl_ClipVertex","gl_Color","gl_DepthRange","gl_DepthRangeParameters","gl_EyePlaneQ","gl_EyePlaneR","gl_EyePlaneS","gl_EyePlaneT","gl_Fog","gl_FogCoord","gl_FogFragCoord","gl_FogParameters","gl_FragColor","gl_FragCoord","gl_FragData","gl_FragDepth","gl_FragDepthEXT","gl_FrontColor","gl_FrontFacing","gl_FrontLightModelProduct","gl_FrontLightProduct","gl_FrontMaterial","gl_FrontSecondaryColor","gl_LightModel","gl_LightModelParameters","gl_LightModelProducts","gl_LightProducts","gl_LightSource","gl_LightSourceParameters","gl_MaterialParameters","gl_MaxClipPlanes","gl_MaxCombinedTextureImageUnits","gl_MaxDrawBuffers","gl_MaxFragmentUniformComponents","gl_MaxLights","gl_MaxTextureCoords","gl_MaxTextureImageUnits","gl_MaxTextureUnits","gl_MaxVaryingFloats","gl_MaxVertexAttribs","gl_MaxVertexTextureImageUnits","gl_MaxVertexUniformComponents","gl_ModelViewMatrix","gl_ModelViewMatrixInverse","gl_ModelViewMatrixInverseTranspose","gl_ModelViewMatrixTranspose","gl_ModelViewProjectionMatrix","gl_ModelViewProjectionMatrixInverse","gl_ModelViewProjectionMatrixInverseTranspose","gl_ModelViewProjectionMatrixTranspose","gl_MultiTexCoord0","gl_MultiTexCoord1","gl_MultiTexCoord2","gl_MultiTexCoord3","gl_MultiTexCoord4","gl_MultiTexCoord5","gl_MultiTexCoord6","gl_MultiTexCoord7","gl_Normal","gl_NormalMatrix","gl_NormalScale","gl_ObjectPlaneQ","gl_ObjectPlaneR","gl_ObjectPlaneS","gl_ObjectPlaneT","gl_Point","gl_PointCoord","gl_PointParameters","gl_PointSize","gl_Position","gl_ProjectionMatrix","gl_ProjectionMatrixInverse","gl_ProjectionMatrixInverseTranspose","gl_ProjectionMatrixTranspose","gl_SecondaryColor","gl_TexCoord","gl_TextureEnvColor","gl_TextureMatrix","gl_TextureMatrixInverse","gl_TextureMatrixInverseTranspose","gl_TextureMatrixTranspose","gl_Vertex","greaterThan","greaterThanEqual","inversesqrt","length","lessThan","lessThanEqual","log","log2","matrixCompMult","max","min","mix","mod","normalize","not","notEqual","pow","radians","reflect","refract","sign","sin","smoothstep","sqrt","step","tan","texture2D","texture2DLod","texture2DProj","texture2DProjLod","textureCube","textureCubeLod","texture2DLodEXT","texture2DProjLodEXT","textureCubeLodEXT","texture2DGradEXT","texture2DProjGradEXT","textureCubeGradEXT"])&&(t.exports=e)}));function p(t){}function u(t){return window.WebGL2RenderingContext&&t instanceof window.WebGL2RenderingContext}a.getLogger("esri/views/webgl");class g{constructor(t,e,i=null){this._context=null,this._glName=null,this._descriptor=void 0,this._samplingModeDirty=!1,this._wrapModeDirty=!1,t.instanceCounter.increment(0,this),this._context=t,this._descriptor=n({target:3553,samplingMode:9729,wrapMode:10497,flipped:!1,hasMipmap:!1,isOpaque:!1,unpackAlignment:4,preMultiplyAlpha:!1},e),this.setData(i)}get glName(){return this._glName}get descriptor(){return this._descriptor}dispose(){if(this._context&&this._context.gl){if(this._glName){const t=this._context.gl;this._context.unbindTextureAllUnits(this),t.deleteTexture(this._glName),this._glName=null}this._context.instanceCounter.decrement(0,this),this._context=null}}release(){this.dispose()}resize(t,e){const i=this._descriptor;i.width===t&&i.height===e||(i.width=t,i.height=e,this.setData(null))}setData(t){if(!this._context||!this._context.gl)return;const e=this._context.gl;this._glName||(this._glName=e.createTexture()),void 0===t&&(t=null),null===t&&(this._descriptor.width=this._descriptor.width||4,this._descriptor.height=this._descriptor.height||4);const i=this._context.getBoundTexture(0);this._context.bindTexture(this,0);const r=this._descriptor;g._validateTexture(this._context,r),e.pixelStorei(e.UNPACK_ALIGNMENT,r.unpackAlignment),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,r.flipped?1:0),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,r.preMultiplyAlpha?1:0);const s=r.pixelFormat;let n=r.internalFormat?r.internalFormat:s;if(t instanceof ImageData||t instanceof HTMLImageElement||t instanceof HTMLCanvasElement||t instanceof HTMLVideoElement){let i=t.width,o=t.height;t instanceof HTMLVideoElement&&(i=t.videoWidth,o=t.videoHeight),r.width&&r.height&&console.assert(i===r.width&&o===r.height),e.texImage2D(e.TEXTURE_2D,0,n,s,r.dataType,t),r.hasMipmap&&this.generateMipmap(),void 0===r.width&&(r.width=i),void 0===r.height&&(r.height=o)}else{null!=r.width&&null!=r.height||console.error("Width and height must be specified!"),e.DEPTH24_STENCIL8&&n===e.DEPTH_STENCIL&&(n=e.DEPTH24_STENCIL8);let i=r.width,o=r.height;if(function(t){return h(t)&&"type"in t&&"compressed"===t.type}(t)){const s=Math.round(Math.log(Math.max(i,o))/Math.LN2)+1;r.hasMipmap=r.hasMipmap&&s===t.levels.length;for(let a=0;;++a){const s=t.levels[Math.min(a,t.levels.length-1)];if(e.compressedTexImage2D(e.TEXTURE_2D,a,n,i,o,0,s),1===i&&1===o||!r.hasMipmap)break;i=Math.max(1,i>>1),o=Math.max(1,o>>1)}}else if(h(t))e.texImage2D(e.TEXTURE_2D,0,n,i,o,0,s,r.dataType,t),r.hasMipmap&&this.generateMipmap();else for(let t=0;e.texImage2D(e.TEXTURE_2D,t,n,i,o,0,s,r.dataType,null),(1!==i||1!==o)&&r.hasMipmap;++t)i=Math.max(1,i>>1),o=Math.max(1,o>>1)}g._applySamplingMode(e,this._descriptor),g._applyWrapMode(e,this._descriptor),g._applyAnisotropicFilteringParameters(this._context,this._descriptor),i&&this._context.bindTexture(i,0)}updateData(t,e,i,r,s,n){n||console.error("An attempt to use uninitialized data!"),this._glName||console.error("An attempt to update uninitialized texture!");const o=this._context.gl,a=this._descriptor,h=this._context.getBoundTexture(0);this._context.bindTexture(this,0),(e<0||i<0||r>a.width||s>a.height||e+r>a.width||i+s>a.height)&&console.error("An attempt to update out of bounds of the texture!"),o.pixelStorei(o.UNPACK_ALIGNMENT,a.unpackAlignment),o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,a.flipped?1:0),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,a.preMultiplyAlpha?1:0),n instanceof ImageData||n instanceof HTMLImageElement||n instanceof HTMLCanvasElement||n instanceof HTMLVideoElement?o.texSubImage2D(o.TEXTURE_2D,t,e,i,a.pixelFormat,a.dataType,n):o.texSubImage2D(o.TEXTURE_2D,t,e,i,r,s,a.pixelFormat,a.dataType,n),this._context.bindTexture(h,0)}generateMipmap(){const t=this._descriptor;t.hasMipmap||(t.hasMipmap=!0,this._samplingModeDirty=!0,g._validateTexture(this._context,t)),9729===t.samplingMode?(this._samplingModeDirty=!0,t.samplingMode=9985):9728===t.samplingMode&&(this._samplingModeDirty=!0,t.samplingMode=9984);const e=this._context.getBoundTexture(0);this._context.bindTexture(this,0);const i=this._context.gl;i.generateMipmap(i.TEXTURE_2D),this._context.bindTexture(e,0)}setSamplingMode(t){t!==this._descriptor.samplingMode&&(this._descriptor.samplingMode=t,g._validateTexture(this._context,this._descriptor),this._samplingModeDirty=!0)}setWrapMode(t){t!==this._descriptor.wrapMode&&(this._descriptor.wrapMode=t,g._validateTexture(this._context,this._descriptor),this._wrapModeDirty=!0)}applyChanges(){const t=this._context.gl,e=this._descriptor;this._samplingModeDirty&&(g._applySamplingMode(t,e),this._samplingModeDirty=!1),this._wrapModeDirty&&(g._applyWrapMode(t,e),this._wrapModeDirty=!1)}static _validateTexture(t,e){(e.width<0||e.height<0)&&console.error("Negative dimension parameters are not allowed!");const i=l(e.width)&&l(e.height);u(t.gl)||i||("number"==typeof e.wrapMode?33071!==e.wrapMode&&console.error("Non-power-of-two textures must have a wrap mode of CLAMP_TO_EDGE!"):33071===e.wrapMode.s&&33071===e.wrapMode.t||console.error("Non-power-of-two textures must have a wrap mode of CLAMP_TO_EDGE!"),e.hasMipmap&&console.error("Mipmapping requires power-of-two textures!"))}static _applySamplingMode(t,e){let i=e.samplingMode,r=e.samplingMode;9985===i||9987===i?(i=9729,e.hasMipmap||(r=9729)):9984!==i&&9986!==i||(i=9728,e.hasMipmap||(r=9728)),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,i),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,r)}static _applyWrapMode(t,e){"number"==typeof e.wrapMode?(t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,e.wrapMode),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,e.wrapMode)):(t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,e.wrapMode.s),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,e.wrapMode.t))}static _applyAnisotropicFilteringParameters(t,e){if(null==e.maxAnisotropy)return;const i=t.capabilities.textureFilterAnisotropic;if(!i)return;const r=t.gl;r.texParameterf(r.TEXTURE_2D,i.TEXTURE_MAX_ANISOTROPY,e.maxAnisotropy)}}class m{constructor(t,e){this._context=t,this._desc=e,this._context.instanceCounter.increment(5,this);const i=this._context.gl;this.glName=i.createRenderbuffer(),this._context.bindRenderbuffer(this),i.renderbufferStorage(i.RENDERBUFFER,e.internalFormat,e.width,e.height)}get descriptor(){return this._desc}resize(t,e){const i=this._desc;if(i.width===t&&i.height===e)return;i.width=t,i.height=e;const r=this._context.gl;this._context.bindRenderbuffer(this),r.renderbufferStorage(r.RENDERBUFFER,i.internalFormat,i.width,i.height)}dispose(){this._context&&(this._context.gl.deleteRenderbuffer(this.glName),this._context.instanceCounter.decrement(5,this),this._context=null)}}const T=a.getLogger("esri.views.webgl.FrameBufferObject");class f{constructor(t,e,i,r){if(this._context=t,this._glName=null,this._depthAttachment=null,this._stencilAttachment=null,this._colorAttachments=new Map,this._initialized=!1,this._desc=n({},e),t.instanceCounter.increment(4,this),i){let e;var s;if(Array.isArray(i))for(const r of i){const{attachmentPoint:i,texture:s}=r,n=s instanceof g?s:new g(t,s);e=n.descriptor,this._colorAttachments.set(i,n),this._validateColorAttachmentPoint(i),this._validateTextureDimensions(e,this._desc)}else i instanceof g?(e=i.descriptor,this._colorAttachments.set(36064,i)):(e=i,this._colorAttachments.set(36064,new g(t,i))),0!==(null==(s=this._desc)?void 0:s.colorTarget)&&console.error("Framebuffer is initialized with a texture however the descriptor indicates using a renderbuffer color attachment!"),this._validateTextureDimensions(e,this._desc)}if(r instanceof m){var o;const t=null!=(o=this._desc.depthStencilTarget)?o:3;2===t?this._stencilAttachment=r:1===t||3===t?this._depthAttachment=r:console.error('If a Renderbuffer is provided, "depthStencilTarget" must be one of STENCIL_RENDER_BUFFER, DEPTH_RENDER_BUFFER or DEPTH_STENCIL_RENDER_BUFFER'),f._validateBufferDimensions(r.descriptor,this._desc)}else if(r){let t;this._context.capabilities.depthTexture||console.error("Extension WEBGL_depth_texture isn't supported therefore it is no possible to set the depth/stencil texture as an attachment!"),r instanceof g?(this._depthStencilTexture=r,t=this._depthStencilTexture.descriptor):(t=r,this._depthStencilTexture=new g(this._context,t)),this._validateTextureDimensions(t,this._desc)}}dispose(){if(!this._desc)return;const t=this._context.getBoundFramebufferObject();this._disposeColorAttachments(),this._disposeDepthStencilAttachments(),this._glName&&(this._context.gl.deleteFramebuffer(this._glName),this._glName=null),this._context.bindFramebuffer(t),this._context.instanceCounter.decrement(4,this),this._desc=null}get glName(){return this._glName}get descriptor(){return this._desc}get colorTexture(){const t=this._colorAttachments.get(36064);return t&&t instanceof g?t:null}get colorAttachment(){return this._colorAttachments.get(36064)}get depthStencilAttachment(){return this._depthStencilTexture||this._depthAttachment||this._stencilAttachment}get depthStencilTexture(){return this._depthStencilTexture}get width(){return this._desc.width}get height(){return this._desc.height}getColorTexture(t){const e=this._colorAttachments.get(t);return e&&e instanceof g?e:null}attachColorTexture(t,e=36064){if(!t)return;this._validateColorAttachmentPoint(e);const i=t.descriptor;if(this._validateTextureDimensions(i,this._desc),this._disposeColorAttachments(),this._initialized){this._context.bindFramebuffer(this);const i=this._context.gl;i.framebufferTexture2D(i.FRAMEBUFFER,e,i.TEXTURE_2D,t.glName,0)}this._colorAttachments.set(e,t)}detachColorTexture(t=36064){const e=this._colorAttachments.get(t);if(e instanceof g){const i=e;if(this._initialized){this._context.bindFramebuffer(this);const e=this._context.gl;e.framebufferTexture2D(e.FRAMEBUFFER,t,e.TEXTURE_2D,null,0)}return this._colorAttachments.delete(t),i}}attachDepthStencilTexture(t){if(!t)return;const e=t.descriptor;if(34041!==e.pixelFormat&&console.error("Depth/Stencil texture must have a pixel type of DEPTH_STENCIL!"),34042!==e.dataType&&console.error("Depth/Stencil texture must have data type of UNSIGNED_INT_24_8!"),this._context.capabilities.depthTexture||console.error("Extension WEBGL_depth_texture isn't supported therefore it is no possible to set the depth/stencil texture!"),this._validateTextureDimensions(e,this._desc),this._desc.depthStencilTarget&&4!==this._desc.depthStencilTarget&&(this._desc.depthStencilTarget=4),this._disposeDepthStencilAttachments(),this._initialized){this._context.bindFramebuffer(this);const e=this._context.gl;e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,t.glName,0)}this._depthStencilTexture=t}detachDepthStencilTexture(){const t=this._depthStencilTexture;if(t&&this._initialized){this._context.bindFramebuffer(this);const t=this._context.gl;this._context.gl.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,null,0)}return this._depthStencilTexture=null,t}attachDepthStencilBuffer(t){if(!t)return;const e=t.descriptor;if(34041!==e.internalFormat&&33189!==e.internalFormat&&console.error("Depth/Stencil buffer must have correct internalFormat"),f._validateBufferDimensions(e,this._desc),this._disposeDepthStencilAttachments(),this._desc.depthStencilTarget=34041===e.internalFormat?3:1,this._initialized){this._context.bindFramebuffer(this);const e=this._context.gl,i=1===this._desc.depthStencilTarget?e.DEPTH_ATTACHMENT:e.DEPTH_STENCIL_ATTACHMENT;e.framebufferRenderbuffer(e.FRAMEBUFFER,i,e.RENDERBUFFER,t.glName)}this._depthAttachment=t}detachDepthStencilBuffer(){const t=this._context.gl,e=this._depthAttachment;if(e&&this._initialized){this._context.bindFramebuffer(this);const e=1===this._desc.depthStencilTarget?t.DEPTH_ATTACHMENT:t.DEPTH_STENCIL_ATTACHMENT;t.framebufferRenderbuffer(t.FRAMEBUFFER,e,t.RENDERBUFFER,null)}return this._depthAttachment=null,e}copyToTexture(t,e,i,r,s,n,o){(t<0||e<0||s<0||n<0)&&console.error("Offsets cannot be negative!"),(i<=0||r<=0)&&console.error("Copy width and height must be greater than zero!");const a=this._desc,h=o.descriptor;3553!==o.descriptor.target&&console.error("Texture target must be TEXTURE_2D!"),(t+i>a.width||e+r>a.height||s+i>h.width||n+r>h.height)&&console.error("Bad dimensions, the current input values will attempt to read or copy out of bounds!");const l=this._context;l.bindTexture(o,0),l.bindFramebuffer(this),l.gl.copyTexSubImage2D(3553,0,s,n,t,e,i,r)}readPixels(t,e,i,r,s,n,o){(i<=0||r<=0)&&console.error("Copy width and height must be greater than zero!"),o||console.error("Target memory is not initialized!"),this._context.bindFramebuffer(this),this._context.gl.readPixels(t,e,i,r,s,n,o)}resize(t,e){const i=this._desc;if(i.width!==t||i.height!==e){if(!this._initialized)return i.width=t,i.height=e,this._colorAttachments.forEach((i=>{i&&i.resize(t,e)})),void(this._depthStencilTexture&&this._depthStencilTexture.resize(t,e));i.width=t,i.height=e,this._colorAttachments.forEach((i=>{i&&i.resize(t,e)})),null!=this._depthStencilTexture?this._depthStencilTexture.resize(t,e):(this._depthAttachment||this._stencilAttachment)&&(this._depthAttachment&&this._depthAttachment.resize(t,e),this._stencilAttachment&&this._stencilAttachment.resize(t,e)),this._context.getBoundFramebufferObject()===this&&this._context.bindFramebuffer(null),this._initialized=!1}}initializeAndBind(){var t,e,i,r;const s=this._context.gl;if(this._initialized)return void s.bindFramebuffer(s.FRAMEBUFFER,this.glName);this._glName&&s.deleteFramebuffer(this._glName);const n=this._context,o=s.createFramebuffer(),a=this._desc,h=null!=(t=a.colorTarget)?t:1,l=null!=(e=a.width)?e:1,c=null!=(i=a.height)?i:1;if(s.bindFramebuffer(s.FRAMEBUFFER,o),0===this._colorAttachments.size)if(0===h)this._colorAttachments.set(36064,x(n,a));else{const t=new m(n,{internalFormat:32854,width:l,height:c});this._colorAttachments.set(36064,t)}this._colorAttachments.forEach(((t,e)=>{t&&(t instanceof g?s.framebufferTexture2D(s.FRAMEBUFFER,e,s.TEXTURE_2D,t.glName,0):s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,t.glName))}));const _=null!=(r=a.depthStencilTarget)?r:0;switch(_){case 1:case 3:{this._depthAttachment||(this._depthAttachment=new m(n,{internalFormat:1===a.depthStencilTarget?33189:34041,width:l,height:c}));const t=1===_?s.DEPTH_ATTACHMENT:s.DEPTH_STENCIL_ATTACHMENT;s.framebufferRenderbuffer(s.FRAMEBUFFER,t,s.RENDERBUFFER,this._depthAttachment.glName);break}case 2:this._stencilAttachment||(this._stencilAttachment=new m(n,{internalFormat:36168,width:l,height:c})),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.STENCIL_ATTACHMENT,s.RENDERBUFFER,this._stencilAttachment.glName);break;case 4:if(!this._depthStencilTexture){n.capabilities.depthTexture||console.error("Extension WEBGL_depth_texture isn't supported therefore it is no possible to set the depth/stencil texture as an attachment!");const t={target:3553,pixelFormat:34041,dataType:34042,samplingMode:9728,wrapMode:33071,width:l,height:c};this._depthStencilTexture=new g(n,t)}s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,this._depthStencilTexture.glName,0)}this._glName=o,this._initialized=!0}_disposeColorAttachments(){this._colorAttachments.forEach(((t,e)=>{if(t instanceof g){if(this._initialized){this._context.bindFramebuffer(this);const t=this._context.gl;t.framebufferTexture2D(t.FRAMEBUFFER,e,t.TEXTURE_2D,null,0)}t.dispose()}else if(t instanceof WebGLRenderbuffer){const i=this._context.gl;this._initialized&&(this._context.bindFramebuffer(this),i.framebufferRenderbuffer(i.FRAMEBUFFER,e,i.RENDERBUFFER,null)),this._context.gl.deleteRenderbuffer(t)}})),this._colorAttachments.clear()}_disposeDepthStencilAttachments(){const t=this._context.gl;if(this._depthAttachment){if(this._initialized){this._context.bindFramebuffer(this);const e=1===this._desc.depthStencilTarget?t.DEPTH_ATTACHMENT:t.DEPTH_STENCIL_ATTACHMENT;t.framebufferRenderbuffer(t.FRAMEBUFFER,e,t.RENDERBUFFER,null)}this._depthAttachment.dispose(),this._depthAttachment=null}this._stencilAttachment&&(this._initialized&&(this._context.bindFramebuffer(this),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.STENCIL_ATTACHMENT,t.RENDERBUFFER,null)),this._stencilAttachment.dispose(),this._stencilAttachment=null),this._depthStencilTexture&&(this._initialized&&(this._context.bindFramebuffer(this),t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,null,0)),this._depthStencilTexture.dispose(),this._depthStencilTexture=null)}static _validateBufferDimensions(t,e){console.assert(t.width>=0&&t.height>=0),void 0!==e.width&&e.width>=0&&void 0!==e.height&&e.height>=0?e.width===t.width&&e.height===t.height||console.error("Renderbuffer dimensions must match the framebuffer's!"):(e.width=t.width,e.height=t.height)}_validateTextureDimensions(t,e){console.assert(t.width>=0&&t.height>=0),3553!==t.target&&console.error("Texture type must be TEXTURE_2D!"),void 0!==e.width&&e.width>=0&&void 0!==e.height&&e.height>=0?e.width===t.width&&e.height===t.height||console.error("Color attachment texture must match the framebuffer's!"):(e.width=t.width,e.height=t.height)}_validateColorAttachmentPoint(t){if(-1===f._MAX_COLOR_ATTACHMENTS){const t=this._context.capabilities.drawBuffers;if(t){const e=this._context.gl;f._MAX_COLOR_ATTACHMENTS=e.getParameter(t.MAX_COLOR_ATTACHMENTS)}else f._MAX_COLOR_ATTACHMENTS=1}const e=t-36064;e+1>f._MAX_COLOR_ATTACHMENTS&&T.error("esri.FrameBufferObject",`illegal attachment point for color attachment: ${e+1}. Implementation supports up to ${f._MAX_COLOR_ATTACHMENTS} color attachments`)}}f._MAX_COLOR_ATTACHMENTS=-1;const x=(t,e)=>new g(t,{target:3553,pixelFormat:6408,dataType:5121,samplingMode:9728,wrapMode:33071,width:e.width,height:e.height});export{_ as a,c as b,d as c,p as d,u as n,g as o,f as r,m as t};