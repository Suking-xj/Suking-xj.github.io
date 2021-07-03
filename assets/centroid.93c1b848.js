function n(n2, t2) {
  return n2 ? t2 ? 4 : 3 : t2 ? 3 : 2;
}
function t(t2, I2, o2, u2, l2) {
  if (!I2 || !I2.lengths.length)
    return null;
  const N = (l2 == null ? void 0 : l2.originPosition) === "upperLeft" ? -1 : 1;
  t2.lengths.length && (t2.lengths.length = 0), t2.coords.length && (t2.coords.length = 0);
  const s = t2.coords, c = [], f = o2 ? [Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY] : [Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY], { lengths: i, coords: T } = I2, h = n(o2, u2);
  let g = 0;
  for (const n2 of i) {
    const t3 = e(f, T, g, n2, o2, u2, N);
    t3 && c.push(t3), g += n2 * h;
  }
  if (c.sort((n2, t3) => {
    let e2 = N * n2[2] - N * t3[2];
    return e2 === 0 && o2 && (e2 = n2[4] - t3[4]), e2;
  }), c.length) {
    let n2 = 6 * c[0][2];
    s[0] = c[0][0] / n2, s[1] = c[0][1] / n2, o2 && (n2 = 6 * c[0][4], s[2] = n2 !== 0 ? c[0][3] / n2 : 0), (s[0] < f[0] || s[0] > f[1] || s[1] < f[2] || s[1] > f[3] || o2 && (s[2] < f[4] || s[2] > f[5])) && (s.length = 0);
  }
  if (!s.length) {
    const n2 = I2.lengths[0] ? r(T, 0, i[0], o2, u2) : null;
    if (!n2)
      return null;
    s[0] = n2[0], s[1] = n2[1], o2 && n2.length > 2 && (s[2] = n2[2]);
  }
  return t2;
}
function e(t2, e2, r2, I2, o2, u2, l2 = 1) {
  const N = n(o2, u2);
  let s = r2, c = r2 + N, f = 0, i = 0, T = 0, h = 0, g = 0;
  for (let n2 = 0, b = I2 - 1; n2 < b; n2++, s += N, c += N) {
    const n3 = e2[s], r3 = e2[s + 1], I3 = e2[s + 2], u3 = e2[c], l3 = e2[c + 1], N2 = e2[c + 2];
    let E2 = n3 * l3 - u3 * r3;
    h += E2, f += (n3 + u3) * E2, i += (r3 + l3) * E2, o2 && (E2 = n3 * N2 - u3 * I3, T += (I3 + N2) * E2, g += E2), n3 < t2[0] && (t2[0] = n3), n3 > t2[1] && (t2[1] = n3), r3 < t2[2] && (t2[2] = r3), r3 > t2[3] && (t2[3] = r3), o2 && (I3 < t2[4] && (t2[4] = I3), I3 > t2[5] && (t2[5] = I3));
  }
  if (h * l2 > 0 && (h *= -1), g * l2 > 0 && (g *= -1), !h)
    return null;
  const E = [f, i, 0.5 * h];
  return o2 && (E[3] = T, E[4] = 0.5 * g), E;
}
function r(t2, e2, r2, N, s) {
  const c = n(N, s);
  let f = e2, i = e2 + c, T = 0, h = 0, g = 0, E = 0;
  for (let n2 = 0, b = r2 - 1; n2 < b; n2++, f += c, i += c) {
    const n3 = t2[f], e3 = t2[f + 1], r3 = t2[f + 2], s2 = t2[i], c2 = t2[i + 1], b2 = t2[i + 2], m = N ? o(n3, e3, r3, s2, c2, b2) : I(n3, e3, s2, c2);
    if (m)
      if (T += m, N) {
        const t3 = l(n3, e3, r3, s2, c2, b2);
        h += m * t3[0], g += m * t3[1], E += m * t3[2];
      } else {
        const t3 = u(n3, e3, s2, c2);
        h += m * t3[0], g += m * t3[1];
      }
  }
  return T > 0 ? N ? [h / T, g / T, E / T] : [h / T, g / T] : r2 > 0 ? N ? [t2[e2], t2[e2 + 1], t2[e2 + 2]] : [t2[e2], t2[e2 + 1]] : null;
}
function I(n2, t2, e2, r2) {
  const I2 = e2 - n2, o2 = r2 - t2;
  return Math.sqrt(I2 * I2 + o2 * o2);
}
function o(n2, t2, e2, r2, I2, o2) {
  const u2 = r2 - n2, l2 = I2 - t2, N = o2 - e2;
  return Math.sqrt(u2 * u2 + l2 * l2 + N * N);
}
function u(n2, t2, e2, r2) {
  return [n2 + 0.5 * (e2 - n2), t2 + 0.5 * (r2 - t2)];
}
function l(n2, t2, e2, r2, I2, o2) {
  return [n2 + 0.5 * (r2 - n2), t2 + 0.5 * (I2 - t2), e2 + 0.5 * (o2 - e2)];
}
export { t };
