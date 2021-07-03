var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
import { aj as U } from "./vendor.74d5941c.js";
import { s, a as s$1, o } from "./VertexArrayObject.67803418.js";
import { r, o as o$1 } from "./FramebufferObject.18518335.js";
function n(n2) {
  return __async(this, null, function* () {
    const a = new Image();
    if (a.src = "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='5' height='5' version='1.1' viewBox='0 0 5 5' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='5' height='5' fill='%23f00' fill-opacity='.5'/%3E%3C/svg%3E%0A", a.width = 5, a.height = 5, yield a.decode(), !n2.gl)
      return true;
    const s$2 = new r(n2, { colorTarget: 0, depthStencilTarget: 0 }, { target: 3553, wrapMode: 33071, pixelFormat: 6408, dataType: 5121, samplingMode: 9728, width: 1, height: 1 }), p = s.createVertex(n2, 35044, new Uint16Array([0, 0, 1, 0, 0, 1, 1, 1])), m = new s$1(n2, { a_pos: 0 }, { geometry: [{ name: "a_pos", count: 2, type: 5123, offset: 0, stride: 4, normalized: false }] }, { geometry: p }), d = new o(n2, "\n  precision highp float;\n\n  attribute vec2 a_pos;\n  varying vec2 v_uv;\n\n  void main() {\n    v_uv = a_pos;\n    gl_Position = vec4(a_pos * 2.0 - 1.0, 0.0, 1.0);\n  }\n  ", "\n  precision highp float;\n\n  varying vec2 v_uv;\n  uniform sampler2D u_texture;\n\n  void main() {\n    gl_FragColor = texture2D(u_texture, v_uv);\n  }\n  ", { a_pos: 0 });
    n2.bindProgram(d);
    const g = new o$1(n2, { dataType: 5121, pixelFormat: 6408, preMultiplyAlpha: false, wrapMode: 33071, samplingMode: 9729 }, a);
    n2.bindTexture(g, 0), d.setUniform1i("u_texture", 0);
    const c = n2.getBoundFramebufferObject(), { x: f, y: u, width: l, height: w } = n2.getViewport();
    n2.bindFramebuffer(s$2), n2.setViewport(0, 0, 1, 1), n2.bindVAO(m), n2.drawArrays(5, 0, 4);
    const h = new Uint8Array(4);
    return s$2.readPixels(0, 0, 1, 1, 6408, 5121, h), d.dispose(), m.dispose(false), p.dispose(), s$2.dispose(), g.dispose(), n2.setViewport(f, u, l, w), n2.bindFramebuffer(c), a.src = "", h[0] === 255;
  });
}
function t(t2, r2) {
  return __async(this, null, function* () {
    const { data: a } = yield U(t2, __spreadValues({ responseType: "image" }, r2));
    return a;
  });
}
export { n, t };
