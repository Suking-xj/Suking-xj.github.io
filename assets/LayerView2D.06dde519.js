import { ab as a, bB as r, el as n$1, av as n$2, ac as u, a4 as n$3, ae as e$2, af as y$1, ag as i$1, dA as a$1, cW as p$4, em as c$2, cr as M, bG as x, c_ as L, en as n$4, aE as d$1 } from "./vendor.74d5941c.js";
import { r as r$1 } from "./Container.d2c27c9d.js";
let p$3 = class extends a(r(n$1(n$2.EventedMixin(u)))) {
  constructor(e2) {
    super(e2), this.layer = null, this.parent = null;
  }
  initialize() {
    this.when().catch((e2) => {
      if (e2.name !== "layerview:create-error") {
        const r2 = this.layer && this.layer.id || "no id", s2 = this.layer && this.layer.title || "no title";
        throw n$3.getLogger(this.declaredClass).error("#resolve()", `Failed to resolve layer view (layer title: '${s2}', id: '${r2}')`, e2), e2;
      }
    });
  }
  get fullOpacity() {
    const e2 = (e3) => e3 == null ? 1 : e3;
    return e2(this.get("layer.opacity")) * e2(this.get("parent.fullOpacity"));
  }
  get suspended() {
    return !this.canResume();
  }
  get suspendInfo() {
    return this.getSuspendInfo();
  }
  get legendEnabled() {
    return !this.suspended && this.layer.legendEnabled === true;
  }
  get updating() {
    return !!(this.updatingHandles && this.updatingHandles.updating || this.isUpdating());
  }
  get visible() {
    return this.get("layer.visible") === true;
  }
  set visible(e2) {
    e2 !== void 0 ? this._override("visible", e2) : this._clearOverride("visible");
  }
  canResume() {
    return !this.get("parent.suspended") && this.get("view.ready") && this.get("layer.loaded") && this.visible || false;
  }
  getSuspendInfo() {
    const e2 = this.parent && this.parent.suspended ? this.parent.suspendInfo : {}, t = this;
    return t.view && t.view.ready || (e2.viewNotReady = true), this.layer && this.layer.loaded || (e2.layerNotLoaded = true), this.visible || (e2.layerInvisible = true), e2;
  }
  isUpdating() {
    return false;
  }
};
e$2([y$1()], p$3.prototype, "fullOpacity", null), e$2([y$1()], p$3.prototype, "layer", void 0), e$2([y$1()], p$3.prototype, "parent", void 0), e$2([y$1({ readOnly: true })], p$3.prototype, "suspended", null), e$2([y$1({ readOnly: true })], p$3.prototype, "suspendInfo", null), e$2([y$1({ readOnly: true })], p$3.prototype, "legendEnabled", null), e$2([y$1({ type: Boolean, readOnly: true })], p$3.prototype, "updating", null), e$2([y$1()], p$3.prototype, "visible", null), p$3 = e$2([i$1("esri.views.layers.LayerView")], p$3);
var d = p$3;
let e$1 = class extends a$1 {
};
e$1 = e$2([i$1("esri.views.layers.support.ClipArea")], e$1);
var p$2 = e$1;
var s;
let i = s = class extends p$2 {
  constructor() {
    super(...arguments), this.type = "rect", this.left = null, this.right = null, this.top = null, this.bottom = null;
  }
  clone() {
    return new s({ left: this.left, right: this.right, top: this.top, bottom: this.bottom });
  }
  get version() {
    return (this._get("version") || 0) + 1;
  }
};
e$2([y$1({ type: [Number, String], json: { write: true } })], i.prototype, "left", void 0), e$2([y$1({ type: [Number, String], json: { write: true } })], i.prototype, "right", void 0), e$2([y$1({ type: [Number, String], json: { write: true } })], i.prototype, "top", void 0), e$2([y$1({ type: [Number, String], json: { write: true } })], i.prototype, "bottom", void 0), e$2([y$1({ readOnly: true })], i.prototype, "version", null), i = s = e$2([i$1("esri.views.layers.support.ClipRect")], i);
var p$1 = i;
var y;
const c$1 = { base: c$2, key: "type", typeMap: { extent: M, polygon: x } };
let n = y = class extends p$2 {
  constructor() {
    super(...arguments), this.type = "geometry", this.geometry = null;
  }
  get version() {
    return (this._get("version") || 0) + 1;
  }
  clone() {
    return new y({ geometry: this.geometry.clone() });
  }
};
e$2([y$1({ types: c$1, json: { read: p$4, write: true } })], n.prototype, "geometry", void 0), e$2([y$1({ readOnly: true })], n.prototype, "version", null), n = y = e$2([i$1("esri.views.layers.support.Geometry")], n);
var l$1 = n;
let e = class extends p$2 {
  constructor() {
    super(...arguments), this.type = "path", this.path = [];
  }
  get version() {
    return (this._get("version") || 0) + 1;
  }
};
e$2([y$1({ type: [[[Number]]], json: { write: true } })], e.prototype, "path", void 0), e$2([y$1({ readOnly: true })], e.prototype, "version", null), e = e$2([i$1("esri.views.layers.support.Path")], e);
var p = e;
const c = L.ofType({ key: "type", base: p$2, typeMap: { rect: p$1, path: p, geometry: l$1 } }), l = (i2) => {
  let a2 = class extends i2 {
    constructor() {
      super(...arguments), this.clips = new c(), this.moving = false, this.attached = false, this.lastUpdateId = -1, this.updateRequested = false;
    }
    initialize() {
      var t;
      this.container || (this.container = new r$1()), this.container.fadeTransitionEnabled = true, this.container.opacity = 0, this.container.clips = this.clips, this.handles.add([d$1(this, "suspended", (t2) => {
        this.container && (this.container.visible = !t2), this.view && !t2 && this.updateRequested && this.view.requestUpdate();
      }, true), d$1(this, ["layer.opacity", "container"], () => {
        var t2, e2;
        this.container && (this.container.opacity = (t2 = (e2 = this.layer) == null ? void 0 : e2.opacity) != null ? t2 : 1);
      }, true), d$1(this, ["layer.blendMode"], (t2) => {
        this.container && (this.container.blendMode = t2);
      }, true), d$1(this, ["layer.effect"], (t2) => {
        this.container && (this.container.effect = t2);
      }, true), this.clips.on("change", () => {
        this.container.clips = this.clips, this.notifyChange("clips");
      })]), (t = this.view) != null && t.whenLayerView ? this.view.whenLayerView(this.layer).then((t2) => {
        t2 !== this || this.attached || this.destroyed || (this.attach(), this.requestUpdate(), this.attached = true);
      }, () => {
      }) : this.when().then(() => {
        this.attached || this.destroyed || (this.attach(), this.requestUpdate(), this.attached = true);
      }, () => {
      });
    }
    destroy() {
      this.attached && (this.detach(), this.attached = false), this.handles.remove("initialize"), this.updateRequested = false;
    }
    get updating() {
      return !this.attached || !this.suspended && (this.updateRequested || this.isUpdating());
    }
    isVisibleAtScale(t) {
      let e2 = true;
      const s2 = this.layer, i3 = s2.minScale, r2 = s2.maxScale;
      if (i3 != null && r2 != null) {
        let s3 = !i3, o = !r2;
        !s3 && t <= i3 && (s3 = true), !o && t >= r2 && (o = true), e2 = s3 && o;
      }
      return e2;
    }
    requestUpdate() {
      this.destroyed || this.updateRequested || (this.updateRequested = true, this.suspended || this.view.requestUpdate());
    }
    processUpdate(t) {
      !this.isFulfilled() || this.isResolved() ? (this._set("updateParameters", t), this.updateRequested && !this.suspended && (this.updateRequested = false, this.update(t))) : this.updateRequested = false;
    }
    isUpdating() {
      return false;
    }
    isRendering() {
      return false;
    }
    canResume() {
      return !!super.canResume() && this.isVisibleAtScale(this.view.scale);
    }
  };
  return e$2([y$1({ type: c, set(t) {
    const e2 = n$4(t, this._get("clips"), c);
    this._set("clips", e2);
  } })], a2.prototype, "clips", void 0), e$2([y$1()], a2.prototype, "moving", void 0), e$2([y$1()], a2.prototype, "attached", void 0), e$2([y$1()], a2.prototype, "container", void 0), e$2([y$1()], a2.prototype, "suspended", void 0), e$2([y$1({ readOnly: true })], a2.prototype, "updateParameters", void 0), e$2([y$1()], a2.prototype, "updateRequested", void 0), e$2([y$1()], a2.prototype, "updating", null), e$2([y$1()], a2.prototype, "view", void 0), a2 = e$2([i$1("esri.views.2d.layers.LayerView2D")], a2), a2;
};
export { d, l };
