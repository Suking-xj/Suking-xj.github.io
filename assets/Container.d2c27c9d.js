var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a2, b2) => {
  for (var prop in b2 || (b2 = {}))
    if (__hasOwnProp.call(b2, prop))
      __defNormalProp(a2, prop, b2[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b2)) {
      if (__propIsEnum.call(b2, prop))
        __defNormalProp(a2, prop, b2[prop]);
    }
  return a2;
};
var __spreadProps = (a2, b2) => __defProps(a2, __getOwnPropDescs(b2));
import { ai as t, av as n, bN as B, bO as o$1, bP as s$2, aa as s$3, bQ as i$1, bR as l$1, bS as n$1, a4 as n$2, bT as y$2, bU as r$3 } from "./vendor.74d5941c.js";
import { r as r$2 } from "./mat4f32.a5cabe00.js";
import { o as o$2 } from "./_commonjsHelpers.f2a458db.js";
const i = 1 / t("mapview-transitions-duration");
class a$1 extends n {
  constructor() {
    super(...arguments), this._fadeOutResolver = null, this._fadeInResolver = null, this._clips = null, this.computedVisible = true, this.computedOpacity = 1, this.fadeTransitionEnabled = false, this.inFadeTransition = false, this._isReady = false, this._opacity = 1, this._stage = null, this._visible = true;
  }
  get clips() {
    return this._clips;
  }
  set clips(e2) {
    this._clips = e2, this.requestRender();
  }
  get isReady() {
    return this._isReady;
  }
  get opacity() {
    return this._opacity;
  }
  set opacity(e2) {
    this._opacity !== e2 && (this._opacity = Math.min(1, Math.max(e2, 0)), this.requestRender());
  }
  get stage() {
    return this._stage;
  }
  set stage(e2) {
    if (this._stage === e2)
      return;
    const t2 = this._stage;
    this._stage = e2, e2 ? this._stage.untrashDisplayObject(this) || (this.onAttach(), this.emit("attach")) : t2.trashDisplayObject(this);
  }
  get visible() {
    return this._visible;
  }
  set visible(e2) {
    this._visible !== e2 && (this._visible = e2, this.requestRender());
  }
  fadeIn() {
    return this._fadeInResolver || (this._fadeOutResolver && (this._fadeOutResolver(), this._fadeOutResolver = null), this.computedOpacity = 0, this.fadeTransitionEnabled = true, this._fadeInResolver = B(), this.requestRender()), this._fadeInResolver.promise;
  }
  fadeOut() {
    return this._fadeOutResolver || (this._fadeInResolver && (this._fadeInResolver(), this._fadeInResolver = null), this.fadeTransitionEnabled = true, this._fadeOutResolver = B(), this.requestRender()), this._fadeOutResolver.promise;
  }
  beforeRender(e2) {
    this.updateTransitionProperties(e2.deltaTime, e2.state.scale);
  }
  afterRender(e2) {
    this._fadeInResolver && this.computedOpacity === this.opacity ? (this._fadeInResolver(), this._fadeInResolver = null) : this._fadeOutResolver && this.computedOpacity === 0 && (this._fadeOutResolver(), this._fadeOutResolver = null);
  }
  remove() {
    var e2;
    (e2 = this.parent) == null || e2.removeChild(this);
  }
  setTransform(e2) {
  }
  processRender(e2) {
    this.stage && this.computedVisible && this.doRender(e2);
  }
  requestRender() {
    this.stage && this.stage.requestRender();
  }
  processDetach() {
    this.onDetach(), this.emit("detach");
  }
  updateTransitionProperties(e2, t2) {
    if (this.fadeTransitionEnabled) {
      const t3 = this._fadeOutResolver || !this.visible ? 0 : this.opacity, s2 = this.computedOpacity;
      if (s2 === t3)
        this.computedVisible = this.visible;
      else {
        const a2 = e2 * i;
        this.computedOpacity = s2 > t3 ? Math.max(t3, s2 - a2) : Math.min(t3, s2 + a2), this.computedVisible = this.computedOpacity > 0;
        const h2 = t3 === this.computedOpacity;
        this.inFadeTransition = !h2, h2 || this.requestRender();
      }
    } else
      this.computedOpacity = this.opacity, this.computedVisible = this.visible;
  }
  onAttach() {
  }
  onDetach() {
  }
  doRender(e2) {
  }
  ready() {
    this._isReady || (this._isReady = true, this.emit("isReady"), this.requestRender());
  }
}
const r$1 = (r2, s2) => {
  const o2 = s$2(r2, s2, 0, 0, 0, 0, s2, 0, 0, 0, 0, s2, 0, 0, 0, 0, 1);
  return o$1(o2, o2);
}, s$1 = (r2, s2) => {
  const o2 = s$2(r2, s2, 0, 0, 0.5 - 0.5 * s2, 0, s2, 0, 0.5 - 0.5 * s2, 0, 0, s2, 0.5 - 0.5 * s2, 0, 0, 0, 1);
  return o$1(o2, o2);
}, o = (r2, s2) => {
  const o2 = 1 - s2, c2 = s$2(r2, 0.2126 + 0.7874 * o2, 0.7152 - 0.7152 * o2, 0.0722 - 0.0722 * o2, 0, 0.2126 - 0.2126 * o2, 0.7152 + 0.2848 * o2, 0.0722 - 0.0722 * o2, 0, 0.2126 - 0.2126 * o2, 0.7152 - 0.7152 * o2, 0.0722 + 0.9278 * o2, 0, 0, 0, 0, 1);
  return o$1(c2, c2);
}, c$1 = (r2, s2) => {
  const o2 = Math.sin(s2 * Math.PI / 180), c2 = Math.cos(s2 * Math.PI / 180), e2 = s$2(r2, 0.213 + 0.787 * c2 - 0.213 * o2, 0.715 - 0.715 * c2 - 0.715 * o2, 0.072 - 0.072 * c2 + 0.928 * o2, 0, 0.213 - 0.213 * c2 + 0.143 * o2, 0.715 + 0.285 * c2 + 0.14 * o2, 0.072 - 0.072 * c2 - 0.283 * o2, 0, 0.213 - 0.213 * c2 - 0.787 * o2, 0.715 - 0.715 * c2 + 0.715 * o2, 0.072 + 0.928 * c2 + 0.072 * o2, 0, 0, 0, 0, 1);
  return o$1(e2, e2);
}, e = (r2, s2) => {
  const o2 = 1 - 2 * s2, c2 = s$2(r2, o2, 0, 0, s2, 0, o2, 0, s2, 0, 0, o2, s2, 0, 0, 0, 1);
  return o$1(c2, c2);
}, u$2 = (r2, s2) => {
  const o2 = s$2(r2, 0.213 + 0.787 * s2, 0.715 - 0.715 * s2, 0.072 - 0.072 * s2, 0, 0.213 - 0.213 * s2, 0.715 + 0.285 * s2, 0.072 - 0.072 * s2, 0, 0.213 - 0.213 * s2, 0.715 - 0.715 * s2, 0.072 + 0.928 * s2, 0, 0, 0, 0, 1);
  return o$1(o2, o2);
}, a = (r2, s2) => {
  const o2 = 1 - s2, c2 = s$2(r2, 0.393 + 0.607 * o2, 0.769 - 0.769 * o2, 0.189 - 0.189 * o2, 0, 0.349 - 0.349 * o2, 0.686 + 0.314 * o2, 0.168 - 0.168 * o2, 0, 0.272 - 0.272 * o2, 0.534 - 0.534 * o2, 0.131 + 0.869 * o2, 0, 0, 0, 0, 1);
  return o$1(c2, c2);
};
class c {
  constructor(t2, s2, o2) {
    this.strength = t2, this.radius = s2, this.threshold = o2, this.type = "bloom";
  }
  interpolate(t2, s2, o2) {
    this.strength = m$2(t2.strength, s2.strength, o2), this.radius = m$2(t2.radius, s2.radius, o2), this.threshold = m$2(t2.threshold, s2.threshold, o2);
  }
  clone() {
    return new c(this.strength, this.radius, this.threshold);
  }
}
class u$1 {
  constructor(t2) {
    this.radius = t2, this.type = "blur";
  }
  interpolate(t2, s2, o2) {
    this.radius = Math.round(m$2(t2.radius, s2.radius, o2));
  }
  clone() {
    return new u$1(this.radius);
  }
}
class l {
  constructor(t2, s2) {
    this.type = t2, this.amount = s2, this.type !== "invert" && this.type !== "grayscale" && this.type !== "sepia" || (this.amount = Math.min(this.amount, 1));
  }
  get colorMatrix() {
    return this._colorMatrix || this._updateMatrix(), this._colorMatrix;
  }
  interpolate(t2, s2, o2) {
    this.amount = m$2(t2.amount, s2.amount, o2), this._updateMatrix();
  }
  clone() {
    return new l(this.type, this.amount);
  }
  _updateMatrix() {
    const h2 = this._colorMatrix || r$2();
    switch (this.type) {
      case "brightness":
        this._colorMatrix = r$1(h2, this.amount);
        break;
      case "contrast":
        this._colorMatrix = s$1(h2, this.amount);
        break;
      case "grayscale":
        this._colorMatrix = o(h2, this.amount);
        break;
      case "invert":
        this._colorMatrix = e(h2, this.amount);
        break;
      case "saturate":
        this._colorMatrix = u$2(h2, this.amount);
        break;
      case "sepia":
        this._colorMatrix = a(h2, this.amount);
    }
  }
}
class d$2 {
  constructor(t2, s2, o2, r2) {
    this.offsetX = t2, this.offsetY = s2, this.blurRadius = o2, this.color = r2, this.type = "drop-shadow";
  }
  interpolate(t2, s2, o2) {
    this.offsetX = m$2(t2.offsetX, s2.offsetX, o2), this.offsetY = m$2(t2.offsetY, s2.offsetY, o2), this.blurRadius = m$2(t2.blurRadius, s2.blurRadius, o2), this.color[0] = Math.round(m$2(t2.color[0], s2.color[0], o2)), this.color[1] = Math.round(m$2(t2.color[1], s2.color[1], o2)), this.color[2] = Math.round(m$2(t2.color[2], s2.color[2], o2)), this.color[3] = m$2(t2.color[3], s2.color[3], o2);
  }
  clone() {
    return new d$2(this.offsetX, this.offsetY, this.blurRadius, [...this.color]);
  }
}
class p$2 {
  constructor(t2) {
    this.angle = t2, this.type = "hue-rotate";
  }
  get colorMatrix() {
    return this._colorMatrix || this._updateMatrix(), this._colorMatrix;
  }
  interpolate(t2, s2, o2) {
    this.angle = m$2(t2.angle, s2.angle, o2), this._updateMatrix();
  }
  clone() {
    return new p$2(this.angle);
  }
  _updateMatrix() {
    const s2 = this._colorMatrix || r$2();
    this._colorMatrix = c$1(s2, this.angle);
  }
}
class M$1 {
  constructor(t2) {
    this.amount = t2, this.type = "opacity", this.amount = Math.min(this.amount, 1);
  }
  interpolate(t2, s2, o2) {
    this.amount = m$2(t2.amount, s2.amount, o2);
  }
  clone() {
    return new M$1(this.amount);
  }
}
function m$2(t2, s2, o2) {
  return t2 + (s2 - t2) * o2;
}
var p$1 = o$2(function(t2) {
  var e2;
  e2 = function() {
    function t3(t4, e4) {
      function r3() {
        this.constructor = t4;
      }
      r3.prototype = e4.prototype, t4.prototype = new r3();
    }
    function e3(t4, r3, n2, u2) {
      this.message = t4, this.expected = r3, this.found = n2, this.location = u2, this.name = "SyntaxError", typeof Error.captureStackTrace == "function" && Error.captureStackTrace(this, e3);
    }
    function r2(t4, r3) {
      r3 = r3 !== void 0 ? r3 : {};
      var n2, u2 = {}, a2 = { start: Kt }, c2 = Kt, o2 = _t("none"), i2 = "none", s2 = Ht("none", false), f = function() {
        return [];
      }, l2 = ")", p2 = Ht(")", false), h2 = function(t5, e4) {
        return { type: "function", name: t5, parameters: e4 || [] };
      }, m2 = ",", g2 = Ht(",", false), v2 = function(t5, e4) {
        return e4.length > 0 ? ie(t5, e4, 3) : [t5];
      }, d2 = function(t5) {
        return { type: "quantity", value: t5.value, unit: t5.unit };
      }, A2 = function(t5) {
        return { type: "color", colorType: t5.type, value: t5.value };
      }, y2 = _t("whitespace"), w2 = /^[ \t\n\r]/, x2 = Nt([" ", "	", "\n", "\r"], false, false), b2 = _t("function"), F2 = "(", C2 = Ht("(", false), E2 = function(t5) {
        return t5;
      }, $2 = _t("identifier"), j2 = /^[a-z\-]/, k2 = Nt([["a", "z"], "-"], false, false), q2 = function() {
        return Ut();
      }, S2 = _t("percentage"), z2 = "%", R2 = Ht("%", false), T2 = function(t5) {
        return { value: t5, unit: "%" };
      }, I2 = _t("length"), M2 = "px", O2 = Ht("px", false), U2 = function(t5) {
        return { value: t5, unit: "px" };
      }, H2 = "cm", N = Ht("cm", false), P = function(t5) {
        return { value: t5, unit: "cm" };
      }, _2 = "mm", B2 = Ht("mm", false), D = function(t5) {
        return { value: t5, unit: "mm" };
      }, G = "in", J = Ht("in", false), K = function(t5) {
        return { value: t5, unit: "in" };
      }, L = "pt", Q = Ht("pt", false), V = function(t5) {
        return { value: t5, unit: "pt" };
      }, W = "pc", X = Ht("pc", false), Y = function(t5) {
        return { value: t5, unit: "pc" };
      }, Z = _t("angle"), tt = "deg", et = Ht("deg", false), rt = function(t5) {
        return { value: t5, unit: "deg" };
      }, nt = "rad", ut = Ht("rad", false), at = function(t5) {
        return { value: t5, unit: "rad" };
      }, ct = "grad", ot = Ht("grad", false), it = function(t5) {
        return { value: t5, unit: "grad" };
      }, st = "turn", ft = Ht("turn", false), lt = function(t5) {
        return { value: t5, unit: "turn" };
      }, pt = _t("number"), ht = function(t5) {
        return { value: t5, unit: null };
      }, mt = _t("color"), gt = "#", vt = Ht("#", false), dt = /^[0-9a-fA-F]/, At = Nt([["0", "9"], ["a", "f"], ["A", "F"]], false, false), yt = function() {
        return { type: "hex", value: Ut() };
      }, wt = function(t5) {
        return { type: "function", value: t5 };
      }, xt = function() {
        return { type: "named", value: Ut() };
      }, bt = /^[+\-]/, Ft = Nt(["+", "-"], false, false), Ct = /^[0-9]/, Et = Nt([["0", "9"]], false, false), $t = ".", jt = Ht(".", false), kt = "e", qt = Ht("e", false), St = function() {
        return parseFloat(Ut());
      }, zt = 0, Rt = 0, Tt = [{ line: 1, column: 1 }], It = 0, Mt = [], Ot = 0;
      if ("startRule" in r3) {
        if (!(r3.startRule in a2))
          throw new Error(`Can't start parsing from rule "` + r3.startRule + '".');
        c2 = a2[r3.startRule];
      }
      function Ut() {
        return t4.substring(Rt, zt);
      }
      function Ht(t5, e4) {
        return { type: "literal", text: t5, ignoreCase: e4 };
      }
      function Nt(t5, e4, r4) {
        return { type: "class", parts: t5, inverted: e4, ignoreCase: r4 };
      }
      function Pt() {
        return { type: "end" };
      }
      function _t(t5) {
        return { type: "other", description: t5 };
      }
      function Bt(e4) {
        var r4, n3 = Tt[e4];
        if (n3)
          return n3;
        for (r4 = e4 - 1; !Tt[r4]; )
          r4--;
        for (n3 = { line: (n3 = Tt[r4]).line, column: n3.column }; r4 < e4; )
          t4.charCodeAt(r4) === 10 ? (n3.line++, n3.column = 1) : n3.column++, r4++;
        return Tt[e4] = n3, n3;
      }
      function Dt(t5, e4) {
        var r4 = Bt(t5), n3 = Bt(e4);
        return { start: { offset: t5, line: r4.line, column: r4.column }, end: { offset: e4, line: n3.line, column: n3.column } };
      }
      function Gt(t5) {
        zt < It || (zt > It && (It = zt, Mt = []), Mt.push(t5));
      }
      function Jt(t5, r4, n3) {
        return new e3(e3.buildMessage(t5, r4), t5, r4, n3);
      }
      function Kt() {
        var t5;
        return (t5 = Lt()) === u2 && (t5 = Qt()), t5;
      }
      function Lt() {
        var e4, r4;
        return Ot++, e4 = zt, Yt() !== u2 ? (t4.substr(zt, 4) === i2 ? (r4 = i2, zt += 4) : (r4 = u2, Ot === 0 && Gt(s2)), r4 !== u2 && Yt() !== u2 ? (Rt = e4, e4 = f()) : (zt = e4, e4 = u2)) : (zt = e4, e4 = u2), Ot--, e4 === u2 && Ot === 0 && Gt(o2), e4;
      }
      function Qt() {
        var t5, e4;
        if (t5 = [], (e4 = Vt()) !== u2)
          for (; e4 !== u2; )
            t5.push(e4), e4 = Vt();
        else
          t5 = u2;
        return t5;
      }
      function Vt() {
        var e4, r4, n3, a3;
        return e4 = zt, Yt() !== u2 && (r4 = Zt()) !== u2 && Yt() !== u2 ? ((n3 = Wt()) === u2 && (n3 = null), n3 !== u2 && Yt() !== u2 ? (t4.charCodeAt(zt) === 41 ? (a3 = l2, zt++) : (a3 = u2, Ot === 0 && Gt(p2)), a3 !== u2 && Yt() !== u2 ? (Rt = e4, e4 = h2(r4, n3)) : (zt = e4, e4 = u2)) : (zt = e4, e4 = u2)) : (zt = e4, e4 = u2), e4;
      }
      function Wt() {
        var e4, r4, n3, a3, c3, o3, i3, s3;
        if (e4 = zt, (r4 = Xt()) !== u2) {
          for (n3 = [], a3 = zt, (c3 = Yt()) !== u2 ? (t4.charCodeAt(zt) === 44 ? (o3 = m2, zt++) : (o3 = u2, Ot === 0 && Gt(g2)), o3 === u2 && (o3 = null), o3 !== u2 && (i3 = Yt()) !== u2 && (s3 = Xt()) !== u2 ? a3 = c3 = [c3, o3, i3, s3] : (zt = a3, a3 = u2)) : (zt = a3, a3 = u2); a3 !== u2; )
            n3.push(a3), a3 = zt, (c3 = Yt()) !== u2 ? (t4.charCodeAt(zt) === 44 ? (o3 = m2, zt++) : (o3 = u2, Ot === 0 && Gt(g2)), o3 === u2 && (o3 = null), o3 !== u2 && (i3 = Yt()) !== u2 && (s3 = Xt()) !== u2 ? a3 = c3 = [c3, o3, i3, s3] : (zt = a3, a3 = u2)) : (zt = a3, a3 = u2);
          n3 !== u2 ? (Rt = e4, e4 = r4 = v2(r4, n3)) : (zt = e4, e4 = u2);
        } else
          zt = e4, e4 = u2;
        return e4;
      }
      function Xt() {
        var t5, e4;
        return t5 = zt, (e4 = ee()) === u2 && (e4 = re()) === u2 && (e4 = ne()) === u2 && (e4 = ue()), e4 !== u2 && (Rt = t5, e4 = d2(e4)), (t5 = e4) === u2 && (t5 = zt, (e4 = ae()) !== u2 && (Rt = t5, e4 = A2(e4)), t5 = e4), t5;
      }
      function Yt() {
        var e4, r4;
        for (Ot++, e4 = [], w2.test(t4.charAt(zt)) ? (r4 = t4.charAt(zt), zt++) : (r4 = u2, Ot === 0 && Gt(x2)); r4 !== u2; )
          e4.push(r4), w2.test(t4.charAt(zt)) ? (r4 = t4.charAt(zt), zt++) : (r4 = u2, Ot === 0 && Gt(x2));
        return Ot--, e4 === u2 && (r4 = u2, Ot === 0 && Gt(y2)), e4;
      }
      function Zt() {
        var e4, r4, n3;
        return Ot++, e4 = zt, (r4 = te()) !== u2 ? (t4.charCodeAt(zt) === 40 ? (n3 = F2, zt++) : (n3 = u2, Ot === 0 && Gt(C2)), n3 !== u2 ? (Rt = e4, e4 = r4 = E2(r4)) : (zt = e4, e4 = u2)) : (zt = e4, e4 = u2), Ot--, e4 === u2 && (r4 = u2, Ot === 0 && Gt(b2)), e4;
      }
      function te() {
        var e4, r4, n3;
        if (Ot++, e4 = zt, r4 = [], j2.test(t4.charAt(zt)) ? (n3 = t4.charAt(zt), zt++) : (n3 = u2, Ot === 0 && Gt(k2)), n3 !== u2)
          for (; n3 !== u2; )
            r4.push(n3), j2.test(t4.charAt(zt)) ? (n3 = t4.charAt(zt), zt++) : (n3 = u2, Ot === 0 && Gt(k2));
        else
          r4 = u2;
        return r4 !== u2 && (Rt = e4, r4 = q2()), Ot--, (e4 = r4) === u2 && (r4 = u2, Ot === 0 && Gt($2)), e4;
      }
      function ee() {
        var e4, r4, n3;
        return Ot++, e4 = zt, Yt() !== u2 && (r4 = ce()) !== u2 ? (t4.charCodeAt(zt) === 37 ? (n3 = z2, zt++) : (n3 = u2, Ot === 0 && Gt(R2)), n3 !== u2 ? (Rt = e4, e4 = T2(r4)) : (zt = e4, e4 = u2)) : (zt = e4, e4 = u2), Ot--, e4 === u2 && Ot === 0 && Gt(S2), e4;
      }
      function re() {
        var e4, r4, n3;
        return Ot++, e4 = zt, Yt() !== u2 && (r4 = ce()) !== u2 ? (t4.substr(zt, 2) === M2 ? (n3 = M2, zt += 2) : (n3 = u2, Ot === 0 && Gt(O2)), n3 !== u2 ? (Rt = e4, e4 = U2(r4)) : (zt = e4, e4 = u2)) : (zt = e4, e4 = u2), e4 === u2 && (e4 = zt, Yt() !== u2 && (r4 = ce()) !== u2 ? (t4.substr(zt, 2) === H2 ? (n3 = H2, zt += 2) : (n3 = u2, Ot === 0 && Gt(N)), n3 !== u2 ? (Rt = e4, e4 = P(r4)) : (zt = e4, e4 = u2)) : (zt = e4, e4 = u2), e4 === u2 && (e4 = zt, Yt() !== u2 && (r4 = ce()) !== u2 ? (t4.substr(zt, 2) === _2 ? (n3 = _2, zt += 2) : (n3 = u2, Ot === 0 && Gt(B2)), n3 !== u2 ? (Rt = e4, e4 = D(r4)) : (zt = e4, e4 = u2)) : (zt = e4, e4 = u2), e4 === u2 && (e4 = zt, Yt() !== u2 && (r4 = ce()) !== u2 ? (t4.substr(zt, 2) === G ? (n3 = G, zt += 2) : (n3 = u2, Ot === 0 && Gt(J)), n3 !== u2 ? (Rt = e4, e4 = K(r4)) : (zt = e4, e4 = u2)) : (zt = e4, e4 = u2), e4 === u2 && (e4 = zt, Yt() !== u2 && (r4 = ce()) !== u2 ? (t4.substr(zt, 2) === L ? (n3 = L, zt += 2) : (n3 = u2, Ot === 0 && Gt(Q)), n3 !== u2 ? (Rt = e4, e4 = V(r4)) : (zt = e4, e4 = u2)) : (zt = e4, e4 = u2), e4 === u2 && (e4 = zt, Yt() !== u2 && (r4 = ce()) !== u2 ? (t4.substr(zt, 2) === W ? (n3 = W, zt += 2) : (n3 = u2, Ot === 0 && Gt(X)), n3 !== u2 ? (Rt = e4, e4 = Y(r4)) : (zt = e4, e4 = u2)) : (zt = e4, e4 = u2)))))), Ot--, e4 === u2 && Ot === 0 && Gt(I2), e4;
      }
      function ne() {
        var e4, r4, n3;
        return Ot++, e4 = zt, (r4 = ce()) !== u2 ? (t4.substr(zt, 3) === tt ? (n3 = tt, zt += 3) : (n3 = u2, Ot === 0 && Gt(et)), n3 !== u2 ? (Rt = e4, e4 = r4 = rt(r4)) : (zt = e4, e4 = u2)) : (zt = e4, e4 = u2), e4 === u2 && (e4 = zt, (r4 = ce()) !== u2 ? (t4.substr(zt, 3) === nt ? (n3 = nt, zt += 3) : (n3 = u2, Ot === 0 && Gt(ut)), n3 !== u2 ? (Rt = e4, e4 = r4 = at(r4)) : (zt = e4, e4 = u2)) : (zt = e4, e4 = u2), e4 === u2 && (e4 = zt, (r4 = ce()) !== u2 ? (t4.substr(zt, 4) === ct ? (n3 = ct, zt += 4) : (n3 = u2, Ot === 0 && Gt(ot)), n3 !== u2 ? (Rt = e4, e4 = r4 = it(r4)) : (zt = e4, e4 = u2)) : (zt = e4, e4 = u2), e4 === u2 && (e4 = zt, (r4 = ce()) !== u2 ? (t4.substr(zt, 4) === st ? (n3 = st, zt += 4) : (n3 = u2, Ot === 0 && Gt(ft)), n3 !== u2 ? (Rt = e4, e4 = r4 = lt(r4)) : (zt = e4, e4 = u2)) : (zt = e4, e4 = u2)))), Ot--, e4 === u2 && (r4 = u2, Ot === 0 && Gt(Z)), e4;
      }
      function ue() {
        var t5, e4;
        return Ot++, t5 = zt, Yt() !== u2 && (e4 = ce()) !== u2 ? (Rt = t5, t5 = ht(e4)) : (zt = t5, t5 = u2), Ot--, t5 === u2 && Ot === 0 && Gt(pt), t5;
      }
      function ae() {
        var e4, r4, n3, a3;
        if (Ot++, e4 = zt, t4.charCodeAt(zt) === 35 ? (r4 = gt, zt++) : (r4 = u2, Ot === 0 && Gt(vt)), r4 !== u2) {
          if (n3 = [], dt.test(t4.charAt(zt)) ? (a3 = t4.charAt(zt), zt++) : (a3 = u2, Ot === 0 && Gt(At)), a3 !== u2)
            for (; a3 !== u2; )
              n3.push(a3), dt.test(t4.charAt(zt)) ? (a3 = t4.charAt(zt), zt++) : (a3 = u2, Ot === 0 && Gt(At));
          else
            n3 = u2;
          n3 !== u2 ? (Rt = e4, e4 = r4 = yt()) : (zt = e4, e4 = u2);
        } else
          zt = e4, e4 = u2;
        return e4 === u2 && (e4 = zt, (r4 = Vt()) !== u2 && (Rt = e4, r4 = wt(r4)), (e4 = r4) === u2 && (e4 = zt, (r4 = te()) !== u2 && (Rt = e4, r4 = xt()), e4 = r4)), Ot--, e4 === u2 && (r4 = u2, Ot === 0 && Gt(mt)), e4;
      }
      function ce() {
        var e4, r4, n3, a3, c3, o3, i3, s3;
        if (e4 = zt, bt.test(t4.charAt(zt)) ? (r4 = t4.charAt(zt), zt++) : (r4 = u2, Ot === 0 && Gt(Ft)), r4 === u2 && (r4 = null), r4 !== u2) {
          for (n3 = zt, a3 = [], Ct.test(t4.charAt(zt)) ? (c3 = t4.charAt(zt), zt++) : (c3 = u2, Ot === 0 && Gt(Et)); c3 !== u2; )
            a3.push(c3), Ct.test(t4.charAt(zt)) ? (c3 = t4.charAt(zt), zt++) : (c3 = u2, Ot === 0 && Gt(Et));
          if (a3 !== u2)
            if (t4.charCodeAt(zt) === 46 ? (c3 = $t, zt++) : (c3 = u2, Ot === 0 && Gt(jt)), c3 !== u2) {
              if (o3 = [], Ct.test(t4.charAt(zt)) ? (i3 = t4.charAt(zt), zt++) : (i3 = u2, Ot === 0 && Gt(Et)), i3 !== u2)
                for (; i3 !== u2; )
                  o3.push(i3), Ct.test(t4.charAt(zt)) ? (i3 = t4.charAt(zt), zt++) : (i3 = u2, Ot === 0 && Gt(Et));
              else
                o3 = u2;
              o3 !== u2 ? n3 = a3 = [a3, c3, o3] : (zt = n3, n3 = u2);
            } else
              zt = n3, n3 = u2;
          else
            zt = n3, n3 = u2;
          if (n3 === u2)
            if (n3 = [], Ct.test(t4.charAt(zt)) ? (a3 = t4.charAt(zt), zt++) : (a3 = u2, Ot === 0 && Gt(Et)), a3 !== u2)
              for (; a3 !== u2; )
                n3.push(a3), Ct.test(t4.charAt(zt)) ? (a3 = t4.charAt(zt), zt++) : (a3 = u2, Ot === 0 && Gt(Et));
            else
              n3 = u2;
          if (n3 !== u2) {
            if (a3 = zt, t4.charCodeAt(zt) === 101 ? (c3 = kt, zt++) : (c3 = u2, Ot === 0 && Gt(qt)), c3 !== u2)
              if (bt.test(t4.charAt(zt)) ? (o3 = t4.charAt(zt), zt++) : (o3 = u2, Ot === 0 && Gt(Ft)), o3 === u2 && (o3 = null), o3 !== u2) {
                if (i3 = [], Ct.test(t4.charAt(zt)) ? (s3 = t4.charAt(zt), zt++) : (s3 = u2, Ot === 0 && Gt(Et)), s3 !== u2)
                  for (; s3 !== u2; )
                    i3.push(s3), Ct.test(t4.charAt(zt)) ? (s3 = t4.charAt(zt), zt++) : (s3 = u2, Ot === 0 && Gt(Et));
                else
                  i3 = u2;
                i3 !== u2 ? a3 = c3 = [c3, o3, i3] : (zt = a3, a3 = u2);
              } else
                zt = a3, a3 = u2;
            else
              zt = a3, a3 = u2;
            a3 === u2 && (a3 = null), a3 !== u2 ? (Rt = e4, e4 = r4 = St()) : (zt = e4, e4 = u2);
          } else
            zt = e4, e4 = u2;
        } else
          zt = e4, e4 = u2;
        return e4;
      }
      function oe(t5, e4) {
        return t5.map(function(t6) {
          return t6[e4];
        });
      }
      function ie(t5, e4, r4) {
        return [t5].concat(oe(e4, r4));
      }
      if ((n2 = c2()) !== u2 && zt === t4.length)
        return n2;
      throw n2 !== u2 && zt < t4.length && Gt(Pt()), Jt(Mt, It < t4.length ? t4.charAt(It) : null, It < t4.length ? Dt(It, It + 1) : Dt(It, It));
    }
    return t3(e3, Error), e3.buildMessage = function(t4, e4) {
      var r3 = { literal: function(t5) {
        return '"' + u2(t5.text) + '"';
      }, class: function(t5) {
        var e5, r4 = "";
        for (e5 = 0; e5 < t5.parts.length; e5++)
          r4 += t5.parts[e5] instanceof Array ? a2(t5.parts[e5][0]) + "-" + a2(t5.parts[e5][1]) : a2(t5.parts[e5]);
        return "[" + (t5.inverted ? "^" : "") + r4 + "]";
      }, any: function(t5) {
        return "any character";
      }, end: function(t5) {
        return "end of input";
      }, other: function(t5) {
        return t5.description;
      } };
      function n2(t5) {
        return t5.charCodeAt(0).toString(16).toUpperCase();
      }
      function u2(t5) {
        return t5.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function(t6) {
          return "\\x0" + n2(t6);
        }).replace(/[\x10-\x1F\x7F-\x9F]/g, function(t6) {
          return "\\x" + n2(t6);
        });
      }
      function a2(t5) {
        return t5.replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function(t6) {
          return "\\x0" + n2(t6);
        }).replace(/[\x10-\x1F\x7F-\x9F]/g, function(t6) {
          return "\\x" + n2(t6);
        });
      }
      function c2(t5) {
        return r3[t5.type](t5);
      }
      function o2(t5) {
        var e5, r4, n3 = new Array(t5.length);
        for (e5 = 0; e5 < t5.length; e5++)
          n3[e5] = c2(t5[e5]);
        if (n3.sort(), n3.length > 0) {
          for (e5 = 1, r4 = 1; e5 < n3.length; e5++)
            n3[e5 - 1] !== n3[e5] && (n3[r4] = n3[e5], r4++);
          n3.length = r4;
        }
        switch (n3.length) {
          case 1:
            return n3[0];
          case 2:
            return n3[0] + " or " + n3[1];
          default:
            return n3.slice(0, -1).join(", ") + ", or " + n3[n3.length - 1];
        }
      }
      function i2(t5) {
        return t5 ? '"' + u2(t5) + '"' : "end of input";
      }
      return "Expected " + o2(t4) + " but " + i2(e4) + " found.";
    }, { SyntaxError: e3, parse: r2 };
  }, t2.exports && (t2.exports = e2());
});
function h$1(e2) {
  let r2;
  try {
    r2 = e2 ? p$1.parse(e2) : [];
  } catch (u2) {
    return { input: e2, parsedFunctions: [], effects: [], error: new s$3("effect:invalid-syntax", "Invalid effect syntax", { input: e2, error: u2 }) };
  }
  const n2 = { input: e2, parsedFunctions: r2, effects: [], error: null };
  try {
    for (const t2 of r2)
      n2.effects.push(m$1(t2));
  } catch (u2) {
    n2.effects.length = 0, n2.error = u2;
  }
  return n2;
}
function m$1(e2) {
  try {
    switch (e2.name) {
      case "grayscale":
      case "sepia":
      case "saturate":
      case "invert":
      case "brightness":
      case "contrast":
        return g$1(e2);
      case "opacity":
        return v(e2);
      case "hue-rotate":
        return d$1(e2);
      case "blur":
        return A(e2);
      case "drop-shadow":
        return y$1(e2);
      case "bloom":
        return w$1(e2);
    }
  } catch (r2) {
    throw r2.details.filter = e2, r2;
  }
  throw new s$3("effect:unknown-effect", `Effect '${e2.name}' is not supported`, { effect: e2 });
}
function g$1(t2) {
  let e2 = 1;
  return x(t2.parameters, 1), t2.parameters.length === 1 && (e2 = S(t2.parameters[0])), new l(t2.name, e2);
}
function v(t2) {
  let e2 = 1;
  return x(t2.parameters, 1), t2.parameters.length === 1 && (e2 = S(t2.parameters[0])), new M$1(e2);
}
function d$1(t2) {
  let e2 = 0;
  return x(t2.parameters, 1), t2.parameters.length === 1 && (e2 = R(t2.parameters[0])), new p$2(e2);
}
function A(t2) {
  let e2 = 0;
  return x(t2.parameters, 1), t2.parameters.length === 1 && (e2 = T(t2.parameters[0]), F(e2, t2.parameters[0])), new u$1(e2);
}
function y$1(e2) {
  const r2 = [];
  let n2;
  for (const u2 of e2.parameters)
    if (u2.type === "color") {
      if (r2.length && Object.freeze(r2), n2)
        throw new s$3("effect:type-error", "Accepts only one color", {});
      n2 = I(u2);
    } else {
      const e3 = T(u2);
      if (Object.isFrozen(r2))
        throw new s$3("effect:type-error", "<length> parameters not consecutive", { lengths: r2 });
      r2.push(e3), r2.length === 3 && F(e3, u2);
    }
  if (r2.length < 2 || r2.length > 3)
    throw new s$3("effect:type-error", `Expected <length>{2,3}, Actual: <length>{${r2.length}}`, { lengths: r2 });
  return new d$2(r2[0], r2[1], r2[2] || 0, n2 || M("black"));
}
function w$1(t2) {
  let e2 = 1, r2 = 0, n2 = 0;
  return x(t2.parameters, 3), t2.parameters[0] && (e2 = S(t2.parameters[0])), t2.parameters[1] && (r2 = T(t2.parameters[1]), F(r2, t2.parameters[1])), t2.parameters[2] && (n2 = S(t2.parameters[2])), new c(e2, r2, n2);
}
function x(e2, r2) {
  if (e2.length > r2)
    throw new s$3("effect:type-error", `Function supports up to ${r2} parameters, Actual: ${e2.length}`, { parameters: e2 });
}
function b(t2) {
  return t2.type === "color" ? "<color>" : k[t2.unit] ? "<length>" : $[t2.unit] ? "<angle>" : t2.unit === "%" ? "<percentage>" : "<double>";
}
function F(e2, r2) {
  if (e2 < 0)
    throw new s$3("effect:type-error", `Negative values are not allowed, Actual: ${e2}`, { term: r2 });
}
function C(e2) {
  if (e2.type !== "quantity" || e2.unit !== null)
    throw new s$3("effect:type-error", `Expected <double>, Actual: ${b(e2)}`, { term: e2 });
}
function E(e2) {
  if (e2.type !== "quantity" || e2.unit !== null && e2.unit !== "%")
    throw new s$3("effect:type-error", `Expected <double> or <percentage>, Actual: ${b(e2)}`, { term: e2 });
}
const $ = { deg: 1, grad: 0.9, rad: 180 / Math.PI, turn: 360 };
function j(e2) {
  if (e2.type !== "quantity" || (e2.value !== 0 || e2.unit !== null) && $[e2.unit] == null)
    throw new s$3("effect:type-error", `Expected <angle>, Actual: ${b(e2)}`, { term: e2 });
}
const k = { px: 1, cm: 96 / 2.54, mm: 96 / 2.54 / 10, in: 96, pc: 16, pt: 96 / 73 };
function q(e2) {
  if (e2.type !== "quantity" || (e2.value !== 0 || e2.unit !== null) && k[e2.unit] == null)
    throw new s$3("effect:type-error", `Expected <length>, Actual: ${b(e2)}`, { term: e2 });
}
function S(t2) {
  E(t2);
  const e2 = t2.value;
  return F(e2, t2), t2.unit === "%" ? 0.01 * e2 : e2;
}
function z(t2) {
  return C(t2), F(t2.value, t2), t2.value;
}
function R(t2) {
  return j(t2), t2.value * $[t2.unit] || 0;
}
function T(t2) {
  return q(t2), t2.value * k[t2.unit] || 0;
}
function I(t2) {
  switch (t2.colorType) {
    case "hex":
      return i$1(t2.value);
    case "named":
      return M(t2.value);
    case "function":
      return H(t2.value);
  }
}
function M(e2) {
  const n2 = l$1(e2);
  if (!n2)
    throw new s$3("effect:unknown-color", `color '${e2}' isn't valid`, { namedColor: e2 });
  return n2;
}
const O = /^rgba?/i, U = /^hsla?/i;
function H(e2) {
  if (x(e2.parameters, 4), O.test(e2.name))
    return [S(e2.parameters[0]), S(e2.parameters[1]), S(e2.parameters[2]), e2.parameters[3] ? S(e2.parameters[3]) : 1];
  if (U.test(e2.name))
    return n$1(z(e2.parameters[0]), S(e2.parameters[1]), S(e2.parameters[2]), e2.parameters[3] ? S(e2.parameters[3]) : 1);
  throw new s$3("effect:syntax-error", `Invalid color function '${e2.name}'`, { colorFunction: e2 });
}
const h = -1;
class u {
  constructor(e2 = 200) {
    this.duration = e2, this._from = null, this._to = null, this._final = null, this._current = [], this._time = 0, this._effect = "", this._effects = [], this._scale = 0;
  }
  get effect() {
    return this._effect;
  }
  set effect(e2) {
    if (e2 = e2 || "", this._effect === e2)
      return;
    this._effect = e2;
    const s2 = _(e2);
    Array.isArray(s2) ? this._transitionTo(s2) : (this._transitionTo([]), n$2.getLogger("esri.views.layers.effects.EffectList").warn("Invalid Effect", { effect: e2, error: s2 }));
  }
  get hasEffects() {
    return this.transitioning || !!this._effects.length;
  }
  get effects() {
    return this._effects;
  }
  get scale() {
    return this._scale;
  }
  get transitioning() {
    return this._to !== null;
  }
  transitionStep(e2, t2) {
    this._applyTimeTransition(e2), this._updateForScale(t2);
  }
  _transitionTo(t2) {
    this.scale > 0 && d(this._current, t2, this.scale) ? (this._final = t2, this._to = y$2(t2), y(this._current, this._to, this.scale), this._from = y$2(this._current), this._time = 0) : (this._from = this._to = this._final = null, this._current = t2), this._effects = this._current[0] ? y$2(this._current[0].effects) : [];
  }
  _applyTimeTransition(t2) {
    if (!this._to)
      return;
    this._time += t2;
    const s2 = Math.min(1, this._time / this.duration);
    for (let e2 = 0; e2 < this._current.length; e2++) {
      const t3 = this._current[e2], r2 = this._from[e2], n2 = this._to[e2];
      t3.scale = w(r2.scale, n2.scale, s2);
      for (let e3 = 0; e3 < t3.effects.length; e3++) {
        const f = t3.effects[e3], c2 = r2.effects[e3], i2 = n2.effects[e3];
        f.interpolate(c2, i2, s2);
      }
    }
    s2 === 1 && (this._current = this._final, this._effects = this._current[0] ? y$2(this._current[0].effects) : [], this._from = this._to = this._final = null);
  }
  _updateForScale(e2) {
    if (this._current.length === 0)
      return;
    this._scale = e2;
    const t2 = this._current, s2 = this._current.length - 1;
    let r2, n2, f = 1;
    if (t2.length === 1 || e2 >= t2[0].scale)
      n2 = r2 = t2[0].effects;
    else if (e2 <= t2[s2].scale)
      n2 = r2 = t2[s2].effects;
    else
      for (let c2 = 0; c2 < s2; c2++) {
        const s3 = t2[c2], i2 = t2[c2 + 1];
        if (s3.scale >= e2 && i2.scale <= e2) {
          f = (e2 - s3.scale) / (i2.scale - s3.scale), r2 = s3.effects, n2 = i2.effects;
          break;
        }
      }
    for (let c2 = 0; c2 < this._effects.length; c2++) {
      this._effects[c2].interpolate(r2[c2], n2[c2], f);
    }
  }
}
function _(e2) {
  if (!e2)
    return [];
  if (typeof e2 == "string") {
    const t3 = h$1(e2);
    return t3.error ? t3.error : [{ scale: h, effects: t3.effects }];
  }
  const t2 = [];
  for (const r2 of e2) {
    if (!isFinite(r2.scale) || r2.scale <= 0)
      return new s$3("effect:invalid-scale", "scale must be finite and greater than 0", { stop: r2 });
    const e3 = h$1(r2.value);
    if (e3.error)
      return e3.error;
    t2.push({ scale: r2.scale, effects: e3.effects });
  }
  t2.sort((e3, t3) => t3.effects.length - e3.effects.length);
  for (let r2 = 0; r2 < t2.length - 1; r2++) {
    if (!p(t2[r2].effects, t2[r2 + 1].effects))
      return new s$3("effect:interpolation-impossible", "Cannot interpolate by scale between 2 lists of mixed effects", { a: t2[r2].effects, b: t2[r2 + 1].effects });
    m(t2[r2].effects, t2[r2 + 1].effects);
  }
  return t2.sort((e3, t3) => t3.scale - e3.scale), t2;
}
function g(e2) {
  switch (e2.type) {
    case "grayscale":
    case "sepia":
    case "invert":
      return new l(e2.type, 0);
    case "saturate":
    case "brightness":
    case "contrast":
      return new l(e2.type, 1);
    case "opacity":
      return new M$1(1);
    case "hue-rotate":
      return new p$2(0);
    case "blur":
      return new u$1(0);
    case "drop-shadow":
      return new d$2(0, 0, 0, [...r$3("transparent")]);
    case "bloom":
      return new c(0, 0, 0);
  }
}
function p(e2, t2) {
  const s2 = e2.length > t2.length ? e2 : t2;
  return (e2.length > t2.length ? t2 : e2).every((e3, t3) => e3.type === s2[t3].type);
}
function m(e2, t2) {
  const s2 = e2.length > t2.length ? e2 : t2, r2 = e2.length > t2.length ? t2 : e2;
  for (let n2 = r2.length; n2 < s2.length; n2++)
    r2.push(g(s2[n2]));
}
function d(e2, t2, s2) {
  var r2, n2, f, c2;
  if ((r2 = e2[0]) == null || !r2.effects || (n2 = t2[0]) == null || !n2.effects)
    return true;
  return !((((f = e2[0]) == null ? void 0 : f.scale) === h || ((c2 = t2[0]) == null ? void 0 : c2.scale) === h) && (e2.length > 1 || t2.length > 1) && s2 <= 0) && p(e2[0].effects, t2[0].effects);
}
function y(e2, t2, s2) {
  var r2, n2;
  const f = e2.length > t2.length ? e2 : t2, c2 = e2.length > t2.length ? t2 : e2, i2 = c2[c2.length - 1], l2 = (r2 = i2 == null ? void 0 : i2.scale) != null ? r2 : s2, o2 = (n2 = i2 == null ? void 0 : i2.effects) != null ? n2 : [];
  for (let a2 = c2.length; a2 < f.length; a2++)
    c2.push({ scale: l2, effects: [...o2] });
  for (let a2 = 0; a2 < f.length; a2++)
    c2[a2].scale = c2[a2].scale === h ? s2 : c2[a2].scale, f[a2].scale = f[a2].scale === h ? s2 : f[a2].scale, m(c2[a2].effects, f[a2].effects);
}
function w(e2, t2, s2) {
  return e2 + (t2 - e2) * s2;
}
const s = t("mapview-transitions-duration");
class r extends a$1 {
  constructor() {
    super(...arguments), this._childrenSet = new Set(), this.children = [], this._effectList = null;
  }
  get blendMode() {
    return this._blendMode;
  }
  set blendMode(e2) {
    this._blendMode = e2, this.requestRender();
  }
  get clips() {
    return this._clips;
  }
  set clips(e2) {
    this._clips = e2, this.children.forEach((t2) => t2.clips = e2);
  }
  get computedEffects() {
    var e2, t2;
    return (e2 = (t2 = this._effectList) == null ? void 0 : t2.effects) != null ? e2 : null;
  }
  get effect() {
    var e2, t2;
    return (e2 = (t2 = this._effectList) == null ? void 0 : t2.effect) != null ? e2 : "";
  }
  set effect(e2) {
    (this._effectList || e2) && (this._effectList || (this._effectList = new u(s)), this._effectList.effect = e2, this.requestRender());
  }
  updateTransitionProperties(e2, t2) {
    super.updateTransitionProperties(e2, t2), this._effectList && (this._effectList.transitionStep(e2, t2), this._effectList.transitioning && this.requestRender());
  }
  doRender(e2) {
    const t2 = this.createRenderParams(e2);
    this.renderChildren(t2);
  }
  addChild(e2) {
    return this.addChildAt(e2, this.children.length);
  }
  addChildAt(e2, t2 = this.children.length) {
    if (!e2)
      return e2;
    if (this.contains(e2))
      return e2;
    const i2 = e2.parent;
    return i2 && i2 !== this && i2.removeChild(e2), t2 >= this.children.length ? this.children.push(e2) : this.children.splice(t2, 0, e2), this._childrenSet.add(e2), e2.parent = this, e2.stage = this.stage, this !== this.stage && (e2.clips = this.clips), this.requestRender(), e2;
  }
  contains(e2) {
    return this._childrenSet.has(e2);
  }
  removeAllChildren() {
    this._childrenSet.clear();
    for (const e2 of this.children)
      this !== this.stage && (e2.clips = null), e2.stage = null, e2.parent = null;
    this.children.length = 0;
  }
  removeChild(e2) {
    return this.contains(e2) ? this.removeChildAt(this.children.indexOf(e2)) : e2;
  }
  removeChildAt(e2) {
    if (e2 < 0 || e2 >= this.children.length)
      return null;
    const t2 = this.children.splice(e2, 1)[0];
    return this._childrenSet.delete(t2), this !== this.stage && (t2.clips = null), t2.stage = null, t2.parent = null, t2;
  }
  sortChildren(e2) {
    return this.children.sort(e2);
  }
  onAttach() {
    super.onAttach();
    const e2 = this.stage;
    for (const t2 of this.children)
      t2.stage = e2;
  }
  onDetach() {
    super.onDetach();
    for (const e2 of this.children)
      e2.stage = null;
  }
  renderChildren(e2) {
    for (const t2 of this.children)
      t2.beforeRender(e2);
    for (const t2 of this.children)
      t2.processRender(e2);
    for (const t2 of this.children)
      t2.afterRender(e2);
  }
  createRenderParams(e2) {
    return __spreadProps(__spreadValues({}, e2), { blendMode: this.blendMode, effects: this.computedEffects, globalOpacity: e2.globalOpacity * this.computedOpacity, inFadeTransition: this.inFadeTransition });
  }
}
export { a$1 as a, r, u };
