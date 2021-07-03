const o$1 = true, t$1 = 32, c$1 = 1.5, e$1 = 200;
function e(e2, t2, r2) {
  const i2 = t2 && t2.length, u2 = i2 ? t2[0] * r2 : e2.length;
  let o2 = n(e2, 0, u2, r2, true);
  const l2 = new Array();
  if (!o2 || o2.next === o2.prev)
    return l2;
  let y2, p2, c2, v2, s2;
  if (i2 && (o2 = f(e2, t2, o2, r2)), e2.length > 80 * r2) {
    y2 = c2 = e2[0], p2 = v2 = e2[1];
    for (let n2 = r2; n2 < u2; n2 += r2) {
      const t3 = e2[n2], x2 = e2[n2 + 1];
      y2 = Math.min(y2, t3), p2 = Math.min(p2, x2), c2 = Math.max(c2, t3), v2 = Math.max(v2, x2);
    }
    s2 = Math.max(c2 - y2, v2 - p2), s2 = s2 !== 0 ? 1 / s2 : 0;
  }
  return x(o2, l2, r2, y2, p2, s2), l2;
}
function n(e2, n2, t2, x2, r2) {
  let i2;
  if (r2 === a(e2, n2, t2, x2) > 0)
    for (let o2 = n2; o2 < t2; o2 += x2)
      i2 = u(o2, e2[o2], e2[o2 + 1], i2);
  else
    for (let o2 = t2 - x2; o2 >= n2; o2 -= x2)
      i2 = u(o2, e2[o2], e2[o2 + 1], i2);
  return i2 && z(i2, i2.next) && (o(i2), i2 = i2.next), i2;
}
function t(e2, n2 = e2) {
  if (!e2)
    return e2;
  let t2, x2 = e2;
  do {
    if (t2 = false, x2.steiner || !z(x2, x2.next) && h(x2.prev, x2, x2.next) !== 0)
      x2 = x2.next;
    else {
      if (o(x2), x2 = n2 = x2.prev, x2 === x2.next)
        break;
      t2 = true;
    }
  } while (t2 || x2 !== n2);
  return n2;
}
function x(e2, n2, u2, l2, f2, y2, p2 = 0) {
  if (!e2)
    return;
  !p2 && y2 && (e2 = c(e2, l2, f2, y2));
  let v2 = e2;
  for (; e2.prev !== e2.next; ) {
    const c2 = e2.prev, s2 = e2.next;
    if (y2 ? i(e2, l2, f2, y2) : r(e2))
      n2.push(c2.index / u2), n2.push(e2.index / u2), n2.push(s2.index / u2), o(e2), e2 = s2.next, v2 = s2.next;
    else if ((e2 = s2) === v2) {
      p2 ? p2 === 1 ? x(e2 = m(e2, n2, u2), n2, u2, l2, f2, y2, 2) : p2 === 2 && k(e2, n2, u2, l2, f2, y2) : x(t(e2), n2, u2, l2, f2, y2, 1);
      break;
    }
  }
}
function r(e2) {
  const n2 = e2.prev, t2 = e2, x2 = e2.next;
  if (h(n2, t2, x2) >= 0)
    return false;
  let r2 = e2.next.next;
  const i2 = r2;
  let u2 = 0;
  for (; r2 !== e2.prev && (u2 === 0 || r2 !== i2); ) {
    if (u2++, w(n2.x, n2.y, t2.x, t2.y, x2.x, x2.y, r2.x, r2.y) && h(r2.prev, r2, r2.next) >= 0)
      return false;
    r2 = r2.next;
  }
  return true;
}
function i(e2, n2, t2, x2) {
  const r2 = e2.prev, i2 = e2, u2 = e2.next;
  if (h(r2, i2, u2) >= 0)
    return false;
  const o2 = r2.x < i2.x ? r2.x < u2.x ? r2.x : u2.x : i2.x < u2.x ? i2.x : u2.x, l2 = r2.y < i2.y ? r2.y < u2.y ? r2.y : u2.y : i2.y < u2.y ? i2.y : u2.y, f2 = r2.x > i2.x ? r2.x > u2.x ? r2.x : u2.x : i2.x > u2.x ? i2.x : u2.x, y2 = r2.y > i2.y ? r2.y > u2.y ? r2.y : u2.y : i2.y > u2.y ? i2.y : u2.y, p2 = M(o2, l2, n2, t2, x2), c2 = M(f2, y2, n2, t2, x2);
  let v2 = e2.prevZ, s2 = e2.nextZ;
  for (; v2 && v2.z >= p2 && s2 && s2.z <= c2; ) {
    if (v2 !== e2.prev && v2 !== e2.next && w(r2.x, r2.y, i2.x, i2.y, u2.x, u2.y, v2.x, v2.y) && h(v2.prev, v2, v2.next) >= 0)
      return false;
    if (v2 = v2.prevZ, s2 !== e2.prev && s2 !== e2.next && w(r2.x, r2.y, i2.x, i2.y, u2.x, u2.y, s2.x, s2.y) && h(s2.prev, s2, s2.next) >= 0)
      return false;
    s2 = s2.nextZ;
  }
  for (; v2 && v2.z >= p2; ) {
    if (v2 !== e2.prev && v2 !== e2.next && w(r2.x, r2.y, i2.x, i2.y, u2.x, u2.y, v2.x, v2.y) && h(v2.prev, v2, v2.next) >= 0)
      return false;
    v2 = v2.prevZ;
  }
  for (; s2 && s2.z <= c2; ) {
    if (s2 !== e2.prev && s2 !== e2.next && w(r2.x, r2.y, i2.x, i2.y, u2.x, u2.y, s2.x, s2.y) && h(s2.prev, s2, s2.next) >= 0)
      return false;
    s2 = s2.nextZ;
  }
  return true;
}
function u(e2, n2, t2, x2) {
  const r2 = new B(e2, n2, t2);
  return x2 ? (r2.next = x2.next, r2.prev = x2, x2.next.prev = r2, x2.next = r2) : (r2.prev = r2, r2.next = r2), r2;
}
function o(e2) {
  e2.next.prev = e2.prev, e2.prev.next = e2.next, e2.prevZ && (e2.prevZ.nextZ = e2.nextZ), e2.nextZ && (e2.nextZ.prevZ = e2.prevZ);
}
function l(e2) {
  let n2 = e2, t2 = e2;
  do {
    (n2.x < t2.x || n2.x === t2.x && n2.y < t2.y) && (t2 = n2), n2 = n2.next;
  } while (n2 !== e2);
  return t2;
}
function f(e2, x2, r2, i2) {
  const u2 = new Array();
  for (let t2 = 0, o2 = x2.length; t2 < o2; t2++) {
    const r3 = n(e2, x2[t2] * i2, t2 < o2 - 1 ? x2[t2 + 1] * i2 : e2.length, i2, false);
    r3 === r3.next && (r3.steiner = true), u2.push(l(r3));
  }
  u2.sort(b);
  for (const n2 of u2)
    y(n2, r2), r2 = t(r2, r2.next);
  return r2;
}
function y(e2, n2) {
  if (n2 = p(e2, n2)) {
    const x2 = q(n2, e2);
    t(x2, x2.next);
  }
}
function p(e2, n2) {
  let t2 = n2;
  const x2 = e2.x, r2 = e2.y;
  let i2, u2 = -1 / 0;
  do {
    if (r2 <= t2.y && r2 >= t2.next.y && t2.next.y !== t2.y) {
      const e3 = t2.x + (r2 - t2.y) * (t2.next.x - t2.x) / (t2.next.y - t2.y);
      if (e3 <= x2 && e3 > u2) {
        if (u2 = e3, e3 === x2) {
          if (r2 === t2.y)
            return t2;
          if (r2 === t2.next.y)
            return t2.next;
        }
        i2 = t2.x < t2.next.x ? t2 : t2.next;
      }
    }
    t2 = t2.next;
  } while (t2 !== n2);
  if (!i2)
    return null;
  if (x2 === u2)
    return i2.prev;
  const o2 = i2, l2 = i2.x, f2 = i2.y;
  let y2, p2 = 1 / 0;
  for (t2 = i2.next; t2 !== o2; )
    x2 >= t2.x && t2.x >= l2 && x2 !== t2.x && w(r2 < f2 ? x2 : u2, r2, l2, f2, r2 < f2 ? u2 : x2, r2, t2.x, t2.y) && (y2 = Math.abs(r2 - t2.y) / (x2 - t2.x), (y2 < p2 || y2 === p2 && t2.x > i2.x) && g(t2, e2) && (i2 = t2, p2 = y2)), t2 = t2.next;
  return i2;
}
function c(e2, n2, t2, x2) {
  for (let r2; r2 !== e2; r2 = r2.next) {
    if (r2 = r2 || e2, r2.z === null && (r2.z = M(r2.x, r2.y, n2, t2, x2)), r2.prev.next !== r2 || r2.next.prev !== r2)
      return r2.prev.next = r2, r2.next.prev = r2, c(e2, n2, t2, x2);
    r2.prevZ = r2.prev, r2.nextZ = r2.next;
  }
  return e2.prevZ.nextZ = null, e2.prevZ = null, v(e2);
}
function v(e2) {
  let n2, t2 = 1;
  for (; ; ) {
    let x2, r2 = e2;
    e2 = null, n2 = null;
    let i2 = 0;
    for (; r2; ) {
      i2++, x2 = r2;
      let u2 = 0;
      for (; u2 < t2 && x2; u2++)
        x2 = x2.nextZ;
      let o2 = t2;
      for (; u2 > 0 || o2 > 0 && x2; ) {
        let t3;
        u2 === 0 ? (t3 = x2, x2 = x2.nextZ, o2--) : o2 !== 0 && x2 ? r2.z <= x2.z ? (t3 = r2, r2 = r2.nextZ, u2--) : (t3 = x2, x2 = x2.nextZ, o2--) : (t3 = r2, r2 = r2.nextZ, u2--), n2 ? n2.nextZ = t3 : e2 = t3, t3.prevZ = n2, n2 = t3;
      }
      r2 = x2;
    }
    if (n2.nextZ = null, t2 *= 2, i2 < 2)
      return e2;
  }
}
function s(e2, n2, t2, x2) {
  const r2 = n2 && n2.length, i2 = r2 ? n2[0] * t2 : e2.length;
  let u2 = Math.abs(a(e2, 0, i2, t2));
  if (r2)
    for (let l2 = 0, f2 = n2.length; l2 < f2; l2++) {
      const x3 = n2[l2] * t2, r3 = l2 < f2 - 1 ? n2[l2 + 1] * t2 : e2.length;
      u2 -= Math.abs(a(e2, x3, r3, t2));
    }
  let o2 = 0;
  for (let l2 = 0; l2 < x2.length; l2 += 3) {
    const n3 = x2[l2] * t2, r3 = x2[l2 + 1] * t2, i3 = x2[l2 + 2] * t2;
    o2 += Math.abs((e2[n3] - e2[i3]) * (e2[r3 + 1] - e2[n3 + 1]) - (e2[n3] - e2[r3]) * (e2[i3 + 1] - e2[n3 + 1]));
  }
  return u2 === 0 && o2 === 0 ? 0 : Math.abs((o2 - u2) / u2);
}
function h(e2, n2, t2) {
  return (n2.y - e2.y) * (t2.x - n2.x) - (n2.x - e2.x) * (t2.y - n2.y);
}
function d(e2, n2, t2, x2) {
  return !!(z(e2, n2) && z(t2, x2) || z(e2, x2) && z(t2, n2)) || h(e2, n2, t2) > 0 != h(e2, n2, x2) > 0 && h(t2, x2, e2) > 0 != h(t2, x2, n2) > 0;
}
function Z(e2, n2) {
  let t2 = e2;
  do {
    if (t2.index !== e2.index && t2.next.index !== e2.index && t2.index !== n2.index && t2.next.index !== n2.index && d(t2, t2.next, e2, n2))
      return true;
    t2 = t2.next;
  } while (t2 !== e2);
  return false;
}
function a(e2, n2, t2, x2) {
  let r2 = 0;
  for (let i2 = n2, u2 = t2 - x2; i2 < t2; i2 += x2)
    r2 += (e2[u2] - e2[i2]) * (e2[i2 + 1] + e2[u2 + 1]), u2 = i2;
  return r2;
}
function w(e2, n2, t2, x2, r2, i2, u2, o2) {
  return (r2 - u2) * (n2 - o2) - (e2 - u2) * (i2 - o2) >= 0 && (e2 - u2) * (x2 - o2) - (t2 - u2) * (n2 - o2) >= 0 && (t2 - u2) * (i2 - o2) - (r2 - u2) * (x2 - o2) >= 0;
}
function g(e2, n2) {
  return h(e2.prev, e2, e2.next) < 0 ? h(e2, n2, e2.next) >= 0 && h(e2, e2.prev, n2) >= 0 : h(e2, n2, e2.prev) < 0 || h(e2, e2.next, n2) < 0;
}
function M(e2, n2, t2, x2, r2) {
  return (e2 = 1431655765 & ((e2 = 858993459 & ((e2 = 252645135 & ((e2 = 16711935 & ((e2 = 32767 * (e2 - t2) * r2) | e2 << 8)) | e2 << 4)) | e2 << 2)) | e2 << 1)) | (n2 = 1431655765 & ((n2 = 858993459 & ((n2 = 252645135 & ((n2 = 16711935 & ((n2 = 32767 * (n2 - x2) * r2) | n2 << 8)) | n2 << 4)) | n2 << 2)) | n2 << 1)) << 1;
}
function z(e2, n2) {
  return e2.x === n2.x && e2.y === n2.y;
}
function b(e2, n2) {
  return e2.x - n2.x;
}
function m(e2, n2, t2) {
  let x2 = e2;
  do {
    const r2 = x2.prev, i2 = x2.next.next;
    !z(r2, i2) && d(r2, x2, x2.next, i2) && g(r2, i2) && g(i2, r2) && (n2.push(r2.index / t2), n2.push(x2.index / t2), n2.push(i2.index / t2), o(x2), o(x2.next), x2 = e2 = i2), x2 = x2.next;
  } while (x2 !== e2);
  return x2;
}
function k(e2, n2, r2, i2, u2, o2) {
  let l2 = e2;
  do {
    let e3 = l2.next.next;
    for (; e3 !== l2.prev; ) {
      if (l2.index !== e3.index && A(l2, e3)) {
        let f2 = q(l2, e3);
        return l2 = t(l2, l2.next), f2 = t(f2, f2.next), x(l2, n2, r2, i2, u2, o2), void x(f2, n2, r2, i2, u2, o2);
      }
      e3 = e3.next;
    }
    l2 = l2.next;
  } while (l2 !== e2);
}
function A(e2, n2) {
  return e2.next.index !== n2.index && e2.prev.index !== n2.index && !Z(e2, n2) && g(e2, n2) && g(n2, e2) && j(e2, n2);
}
function j(e2, n2) {
  let t2 = e2, x2 = false;
  const r2 = (e2.x + n2.x) / 2, i2 = (e2.y + n2.y) / 2;
  do {
    t2.y > i2 != t2.next.y > i2 && t2.next.y !== t2.y && r2 < (t2.next.x - t2.x) * (i2 - t2.y) / (t2.next.y - t2.y) + t2.x && (x2 = !x2), t2 = t2.next;
  } while (t2 !== e2);
  return x2;
}
function q(e2, n2) {
  const t2 = new B(e2.index, e2.x, e2.y), x2 = new B(n2.index, n2.x, n2.y), r2 = e2.next, i2 = n2.prev;
  return e2.next = n2, n2.prev = e2, t2.next = r2, r2.prev = t2, x2.next = t2, t2.prev = x2, i2.next = x2, x2.prev = i2, x2;
}
class B {
  constructor(e2, n2, t2) {
    this.index = e2, this.x = n2, this.y = t2, this.prev = null, this.next = null, this.z = null, this.prevZ = null, this.nextZ = null, this.steiner = false;
  }
}
export { e as a, c$1 as c, e$1 as e, o$1 as o, s, t$1 as t };
