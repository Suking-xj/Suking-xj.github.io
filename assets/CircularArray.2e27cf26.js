import { a5 as r } from "./vendor.74d5941c.js";
class s {
  constructor(t = Number.POSITIVE_INFINITY) {
    this.size = 0, this._start = 0, this.maxSize = t, this._buffer = isFinite(t) ? new Array(t) : [];
  }
  get entries() {
    return this._buffer;
  }
  enqueue(t) {
    if (this.size === this.maxSize) {
      const s2 = this._buffer[this._start];
      return this._buffer[this._start] = t, this._start = (this._start + 1) % this.maxSize, s2;
    }
    return isFinite(this.maxSize) ? this._buffer[(this._start + this.size++) % this.maxSize] = t : this._buffer[this._start + this.size++] = t, null;
  }
  dequeue() {
    if (this.size === 0)
      return null;
    const t = this._buffer[this._start];
    return this._buffer[this._start] = null, this.size--, this._start = (this._start + 1) % this.maxSize, t;
  }
  peek() {
    return this.size === 0 ? null : this._buffer[this._start];
  }
  find(s2) {
    if (this.size === 0)
      return null;
    for (const i of this._buffer)
      if (r(i) && s2(i))
        return i;
    return null;
  }
  clear(s2) {
    let i = this.dequeue();
    for (; r(i); )
      s2 && s2(i), i = this.dequeue();
  }
}
export { s };
