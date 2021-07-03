import { o } from "./VertexArrayObject.67803418.js";
function n(e2) {
  let n2 = "";
  for (const t2 in e2) {
    const o2 = e2[t2];
    if (typeof o2 == "boolean")
      o2 && (n2 += `#define ${t2}
`);
    else if (typeof o2 == "number")
      n2 += `#define ${t2} ${o2.toFixed()}
`;
    else if (typeof o2 == "object") {
      const e3 = o2.options;
      let r = 0;
      for (const t3 in e3)
        n2 += `#define ${e3[t3]} ${(r++).toFixed()}
`;
      n2 += `#define ${t2} ${e3[o2.value]}
`;
    }
  }
  return n2;
}
function t(n2, t2, o$1, r) {
  o$1 = o$1 || {}, r = r || "";
  const f = typeof t2.shaders == "function" ? t2.shaders(o$1) : t2.shaders;
  return new o(n2, r + f.vertexShader, r + f.fragmentShader, t2.attributes);
}
class e {
  constructor(e2) {
    this.readFile = e2;
  }
  resolveIncludes(e2) {
    return this.resolve(e2);
  }
  resolve(e2, t2 = new Map()) {
    if (t2.has(e2))
      return t2.get(e2);
    const r = this.read(e2);
    if (!r)
      throw new Error(`cannot find shader file ${e2}`);
    const s = /^[^\S\n]*#include\s+<(\S+)>[^\S\n]?/gm;
    let n2 = s.exec(r);
    const l = [];
    for (; n2 != null; )
      l.push({ path: n2[1], start: n2.index, length: n2[0].length }), n2 = s.exec(r);
    let a = 0, h = "";
    return l.forEach((e3) => {
      h += r.slice(a, e3.start), h += t2.has(e3.path) ? "" : this.resolve(e3.path, t2), a = e3.start + e3.length;
    }), h += r.slice(a), t2.set(e2, h), h;
  }
  read(e2) {
    return this.readFile(e2);
  }
}
export { e, n, t };
