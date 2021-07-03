import { fc as j, cd as e, an as g } from "./vendor.74d5941c.js";
class r {
  constructor(e2) {
    if (e2 instanceof j)
      this._tilemapCache = e2;
    else {
      if (!e2 || !("index" in e2))
        throw new Error("Invalid tilemap!");
      this._tilemap = e2.index;
    }
  }
  dataKey(t, r2) {
    if (this._tilemapCache) {
      const { level: i, row: o, col: a } = t, s = new e(t);
      return this._tilemapCache.fetchAvailabilityUpsample(i, o, a, s, r2).then(() => (s.world = t.world, s)).catch((t2) => {
        if (g(t2))
          throw t2;
        return null;
      });
    }
    return this._getIndexedDataKey(t);
  }
  forEach(e2, t, l, r2, i) {
    this._callback = i, this._maxLevel = t + e2, this._forEach(this._tilemap, t, l, r2);
  }
  _forEach(e2, t, l, r2) {
    e2 !== 0 && (this._callback(t, l, r2), t !== this._maxLevel && typeof e2 == "object" && (this._forEach(e2[0], t + 1, 2 * l, 2 * r2), this._forEach(e2[1], t + 1, 2 * l, 2 * r2 + 1), this._forEach(e2[2], t + 1, 2 * l + 1, 2 * r2), this._forEach(e2[3], t + 1, 2 * l + 1, 2 * r2 + 1)));
  }
  _getIndexedDataKey(e$1) {
    const t = [e$1];
    if (e$1.level < 0 || e$1.row < 0 || e$1.col < 0 || e$1.row >> e$1.level > 0 || e$1.col >> e$1.level > 0)
      return Promise.resolve(null);
    let r2 = e$1;
    for (; r2.level !== 0; )
      r2 = new e(r2.level - 1, r2.row >> 1, r2.col >> 1, r2.world), t.push(r2);
    let i, o, a = this._tilemap, s = t.pop();
    if (a === 1)
      return Promise.resolve(s);
    for (; t.length; )
      if (i = t.pop(), o = (1 & i.col) + ((1 & i.row) << 1), a) {
        if (a[o] === 0) {
          s = null;
          break;
        }
        if (a[o] === 1) {
          s = i;
          break;
        }
        s = i, a = a[o];
      }
    return Promise.resolve(s);
  }
}
export { r };
