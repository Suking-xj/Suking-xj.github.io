import { o } from "./_commonjsHelpers.f2a458db.js";
var r = o(function(o2) {
  var r2;
  (r2 = function() {
    function o3(o4, t2, a, f, i) {
      r3(o4, t2, a || 0, f || o4.length - 1, i || n);
    }
    function r3(o4, n2, a, f, i) {
      for (; f > a; ) {
        if (f - a > 600) {
          var c = f - a + 1, e = n2 - a + 1, h = Math.log(c), u = 0.5 * Math.exp(2 * h / 3), s = 0.5 * Math.sqrt(h * u * (c - u) / c) * (e - c / 2 < 0 ? -1 : 1);
          r3(o4, n2, Math.max(a, Math.floor(n2 - e * u / c + s)), Math.min(f, Math.floor(n2 + (c - e) * u / c + s)), i);
        }
        var M = o4[n2], m = a, v = f;
        for (t(o4, a, n2), i(o4[f], M) > 0 && t(o4, a, f); m < v; ) {
          for (t(o4, m, v), m++, v--; i(o4[m], M) < 0; )
            m++;
          for (; i(o4[v], M) > 0; )
            v--;
        }
        i(o4[a], M) === 0 ? t(o4, a, v) : t(o4, ++v, f), v <= n2 && (a = v + 1), n2 <= v && (f = v - 1);
      }
    }
    function t(o4, r4, t2) {
      var n2 = o4[r4];
      o4[r4] = o4[t2], o4[t2] = n2;
    }
    function n(o4, r4) {
      return o4 < r4 ? -1 : o4 > r4 ? 1 : 0;
    }
    return o3;
  }()) !== void 0 && (o2.exports = r2);
});
export { r };
