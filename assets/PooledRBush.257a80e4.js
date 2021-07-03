var __pow = Math.pow;
import { fF as n, fG as m$1, fH as b$1, fI as w$1 } from "./vendor.74d5941c.js";
import { r as r$1 } from "./quickselect.e4940b29.js";
class h {
  constructor(t = 9, i) {
    this.compareMinX = l, this.compareMinY = c, this.toBBox = function(t2) {
      return t2;
    }, this._maxEntries = Math.max(4, t || 9), this._minEntries = Math.max(2, Math.ceil(0.4 * this._maxEntries)), i && (typeof i == "function" ? this.toBBox = i : this._initFormat(i)), this.clear();
  }
  destroy() {
    this.clear(), M.prune(), X.prune(), Y.prune(), B.prune();
  }
  all(t) {
    this._all(this.data, t);
  }
  search(t, i) {
    let n2 = this.data;
    const e = this.toBBox;
    if (p(t, n2))
      for (M.clear(); n2; ) {
        for (let s = 0, h2 = n2.children.length; s < h2; s++) {
          const h3 = n2.children[s], a2 = n2.leaf ? e(h3) : h3;
          p(t, a2) && (n2.leaf ? i(h3) : x(t, a2) ? this._all(h3, i) : M.push(h3));
        }
        n2 = M.pop();
      }
  }
  collides(t) {
    let i = this.data;
    const n2 = this.toBBox;
    if (!p(t, i))
      return false;
    for (M.clear(); i; ) {
      for (let e = 0, s = i.children.length; e < s; e++) {
        const s2 = i.children[e], h2 = i.leaf ? n2(s2) : s2;
        if (p(t, h2)) {
          if (i.leaf || x(t, h2))
            return true;
          M.push(s2);
        }
      }
      i = M.pop();
    }
    return false;
  }
  load(t) {
    if (!t.length)
      return this;
    if (t.length < this._minEntries) {
      for (let i2 = 0, n2 = t.length; i2 < n2; i2++)
        this.insert(t[i2]);
      return this;
    }
    let i = this._build(t.slice(0, t.length), 0, t.length - 1, 0);
    if (this.data.children.length)
      if (this.data.height === i.height)
        this._splitRoot(this.data, i);
      else {
        if (this.data.height < i.height) {
          const t2 = this.data;
          this.data = i, i = t2;
        }
        this._insert(i, this.data.height - i.height - 1, true);
      }
    else
      this.data = i;
    return this;
  }
  insert(t) {
    return t && this._insert(t, this.data.height - 1), this;
  }
  clear() {
    return this.data = new b([]), this;
  }
  remove(n2) {
    if (!n2)
      return this;
    let e, s = this.data, h2 = null, a2 = 0, r2 = false;
    const o2 = this.toBBox(n2);
    for (Y.clear(), B.clear(); s || Y.length > 0; ) {
      var l2;
      if (!s)
        s = m$1(Y.pop()), h2 = Y.data[Y.length - 1], a2 = (l2 = B.pop()) != null ? l2 : 0, r2 = true;
      if (s.leaf && (e = b$1(s.children, n2, s.children.length, s.indexHint), e !== -1))
        return s.children.splice(e, 1), Y.push(s), this._condense(Y), this;
      r2 || s.leaf || !x(s, o2) ? h2 ? (a2++, s = h2.children[a2], r2 = false) : s = null : (Y.push(s), B.push(a2), a2 = 0, h2 = s, s = s.children[0]);
    }
    return this;
  }
  toJSON() {
    return this.data;
  }
  fromJSON(t) {
    return this.data = t, this;
  }
  _all(t, i) {
    let n2 = t;
    for (X.clear(); n2; ) {
      var e;
      if (n2.leaf === true)
        for (const t2 of n2.children)
          i(t2);
      else
        X.pushArray(n2.children);
      n2 = (e = X.pop()) != null ? e : null;
    }
  }
  _build(t, i, n2, e) {
    const s = n2 - i + 1;
    let h2 = this._maxEntries;
    if (s <= h2) {
      const e2 = new b(t.slice(i, n2 + 1));
      return a(e2, this.toBBox), e2;
    }
    e || (e = Math.ceil(Math.log(s) / Math.log(h2)), h2 = Math.ceil(s / __pow(h2, e - 1)));
    const r2 = new j([]);
    r2.height = e;
    const o2 = Math.ceil(s / h2), l2 = o2 * Math.ceil(Math.sqrt(h2));
    g(t, i, n2, l2, this.compareMinX);
    for (let a2 = i; a2 <= n2; a2 += l2) {
      const i2 = Math.min(a2 + l2 - 1, n2);
      g(t, a2, i2, o2, this.compareMinY);
      for (let n3 = a2; n3 <= i2; n3 += o2) {
        const s2 = Math.min(n3 + o2 - 1, i2);
        r2.children.push(this._build(t, n3, s2, e - 1));
      }
    }
    return a(r2, this.toBBox), r2;
  }
  _chooseSubtree(t, i, n2, e) {
    for (; e.push(i), i.leaf !== true && e.length - 1 !== n2; ) {
      let n3, e2 = 1 / 0, s = 1 / 0;
      for (let h2 = 0, a2 = i.children.length; h2 < a2; h2++) {
        const a3 = i.children[h2], r2 = m(a3), o2 = d(t, a3) - r2;
        o2 < s ? (s = o2, e2 = r2 < e2 ? r2 : e2, n3 = a3) : o2 === s && r2 < e2 && (e2 = r2, n3 = a3);
      }
      i = n3 || i.children[0];
    }
    return i;
  }
  _insert(t, i, n2) {
    const e = this.toBBox, s = n2 ? t : e(t);
    Y.clear();
    const h2 = this._chooseSubtree(s, this.data, i, Y);
    for (h2.children.push(t), o(h2, s); i >= 0 && Y.data[i].children.length > this._maxEntries; )
      this._split(Y, i), i--;
    this._adjustParentBBoxes(s, Y, i);
  }
  _split(t, i) {
    const n2 = t.data[i], e = n2.children.length, s = this._minEntries;
    this._chooseSplitAxis(n2, s, e);
    const h2 = this._chooseSplitIndex(n2, s, e);
    if (!h2)
      return void console.log("  Error: assertion failed at PooledRBush._split: no valid split index");
    const r2 = n2.children.splice(h2, n2.children.length - h2), o2 = n2.leaf ? new b(r2) : new j(r2);
    o2.height = n2.height, a(n2, this.toBBox), a(o2, this.toBBox), i ? t.data[i - 1].children.push(o2) : this._splitRoot(n2, o2);
  }
  _splitRoot(t, i) {
    this.data = new j([t, i]), this.data.height = t.height + 1, a(this.data, this.toBBox);
  }
  _chooseSplitIndex(t, i, n2) {
    let e, s, h2;
    e = s = 1 / 0;
    for (let a2 = i; a2 <= n2 - i; a2++) {
      const i2 = r(t, 0, a2, this.toBBox), o2 = r(t, a2, n2, this.toBBox), l2 = f(i2, o2), c2 = m(i2) + m(o2);
      l2 < e ? (e = l2, h2 = a2, s = c2 < s ? c2 : s) : l2 === e && c2 < s && (s = c2, h2 = a2);
    }
    return h2;
  }
  _chooseSplitAxis(t, i, n2) {
    const e = t.leaf ? this.compareMinX : l, s = t.leaf ? this.compareMinY : c;
    this._allDistMargin(t, i, n2, e) < this._allDistMargin(t, i, n2, s) && t.children.sort(e);
  }
  _allDistMargin(t, i, n2, e) {
    t.children.sort(e);
    const s = this.toBBox, h2 = r(t, 0, i, s), a2 = r(t, n2 - i, n2, s);
    let l2 = u(h2) + u(a2);
    for (let r2 = i; r2 < n2 - i; r2++) {
      const i2 = t.children[r2];
      o(h2, t.leaf ? s(i2) : i2), l2 += u(h2);
    }
    for (let r2 = n2 - i - 1; r2 >= i; r2--) {
      const i2 = t.children[r2];
      o(a2, t.leaf ? s(i2) : i2), l2 += u(a2);
    }
    return l2;
  }
  _adjustParentBBoxes(t, i, n2) {
    for (let e = n2; e >= 0; e--)
      o(i.data[e], t);
  }
  _condense(t) {
    for (let n2 = t.length - 1; n2 >= 0; n2--) {
      const e = t.data[n2];
      if (e.children.length === 0)
        if (n2 > 0) {
          const s = t.data[n2 - 1], h2 = s.children;
          h2.splice(b$1(h2, e, h2.length, s.indexHint), 1);
        } else
          this.clear();
      else
        a(e, this.toBBox);
    }
  }
  _initFormat(t) {
    const i = ["return a", " - b", ";"];
    this.compareMinX = new Function("a", "b", i.join(t[0])), this.compareMinY = new Function("a", "b", i.join(t[1])), this.toBBox = new Function("a", "return {minX: a" + t[0] + ", minY: a" + t[1] + ", maxX: a" + t[2] + ", maxY: a" + t[3] + "};");
  }
}
function a(t, i) {
  r(t, 0, t.children.length, i, t);
}
function r(t, i, n2, e, s) {
  s || (s = new b([])), s.minX = 1 / 0, s.minY = 1 / 0, s.maxX = -1 / 0, s.maxY = -1 / 0;
  for (let h2, a2 = i; a2 < n2; a2++)
    h2 = t.children[a2], o(s, t.leaf ? e(h2) : h2);
  return s;
}
function o(t, i) {
  t.minX = Math.min(t.minX, i.minX), t.minY = Math.min(t.minY, i.minY), t.maxX = Math.max(t.maxX, i.maxX), t.maxY = Math.max(t.maxY, i.maxY);
}
function l(t, i) {
  return t.minX - i.minX;
}
function c(t, i) {
  return t.minY - i.minY;
}
function m(t) {
  return (t.maxX - t.minX) * (t.maxY - t.minY);
}
function u(t) {
  return t.maxX - t.minX + (t.maxY - t.minY);
}
function d(t, i) {
  return (Math.max(i.maxX, t.maxX) - Math.min(i.minX, t.minX)) * (Math.max(i.maxY, t.maxY) - Math.min(i.minY, t.minY));
}
function f(t, i) {
  const n2 = Math.max(t.minX, i.minX), e = Math.max(t.minY, i.minY), s = Math.min(t.maxX, i.maxX), h2 = Math.min(t.maxY, i.maxY);
  return Math.max(0, s - n2) * Math.max(0, h2 - e);
}
function x(t, i) {
  return t.minX <= i.minX && t.minY <= i.minY && i.maxX <= t.maxX && i.maxY <= t.maxY;
}
function p(t, i) {
  return i.minX <= t.maxX && i.minY <= t.maxY && i.maxX >= t.minX && i.maxY >= t.minY;
}
function g(i, n2, e, h2, a2) {
  const r2 = [n2, e];
  for (; r2.length; ) {
    const n3 = m$1(r2.pop()), e2 = m$1(r2.pop());
    if (n3 - e2 <= h2)
      continue;
    const o2 = e2 + Math.ceil((n3 - e2) / h2 / 2) * h2;
    r$1(i, o2, e2, n3, a2), r2.push(e2, o2, o2, n3);
  }
}
const M = new n(), X = new n(), Y = new n(), B = new n({ deallocator: void 0 });
class _ {
  constructor() {
    this.minX = 1 / 0, this.minY = 1 / 0, this.maxX = -1 / 0, this.maxY = -1 / 0;
  }
}
class w extends _ {
  constructor() {
    super(...arguments), this.height = 1, this.indexHint = new w$1();
  }
}
class b extends w {
  constructor(t) {
    super(), this.children = t, this.leaf = true;
  }
}
class j extends w {
  constructor(t) {
    super(), this.children = t, this.leaf = false;
  }
}
export { h };
