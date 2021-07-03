import { o } from "./_commonjsHelpers.f2a458db.js";
var e = o(function(t, e2) {
  var n2, _;
  n2 = typeof document != "undefined" && document.currentScript ? document.currentScript.src : void 0, typeof __filename != "undefined" && (n2 = n2 || __filename), _ = function(t2) {
    var e3, _2;
    (t2 = (t2 = t2 || {}) !== void 0 ? t2 : {}).ready = new Promise(function(t3, n3) {
      e3 = t3, _2 = n3;
    });
    var r, o2 = {};
    for (r in t2)
      t2.hasOwnProperty(r) && (o2[r] = t2[r]);
    var p = "./this.program", i = false, c = false, a = false, s = false;
    i = typeof window == "object", c = typeof importScripts == "function", a = typeof process == "object" && typeof process.versions == "object" && typeof process.versions.node == "string", s = !i && !a && !c;
    var u, P, y, g, f = "";
    function l(e4) {
      return t2.locateFile ? t2.locateFile(e4, f) : f + e4;
    }
    a ? (f = c ? require("path").dirname(f) + "/" : __dirname + "/", u = function(t3, e4) {
      return y || (y = require("fs")), g || (g = require("path")), t3 = g.normalize(t3), y.readFileSync(t3, e4 ? null : "utf8");
    }, P = function(t3) {
      var e4 = u(t3, true);
      return e4.buffer || (e4 = new Uint8Array(e4)), S(e4.buffer), e4;
    }, process.argv.length > 1 && (p = process.argv[1].replace(/\\/g, "/")), process.argv.slice(2), process.on("uncaughtException", function(t3) {
      if (!(t3 instanceof E_))
        throw t3;
    }), process.on("unhandledRejection", et), t2.inspect = function() {
      return "[Emscripten Module object]";
    }) : s ? (typeof read != "undefined" && (u = function(t3) {
      return read(t3);
    }), P = function(t3) {
      var e4;
      return typeof readbuffer == "function" ? new Uint8Array(readbuffer(t3)) : (S(typeof (e4 = read(t3, "binary")) == "object"), e4);
    }, typeof scriptArgs != "undefined" && scriptArgs, typeof print != "undefined" && (typeof console == "undefined" && (console = {}), console.log = print, console.warn = console.error = typeof printErr != "undefined" ? printErr : print)) : (i || c) && (c ? f = self.location.href : typeof document != "undefined" && document.currentScript && (f = document.currentScript.src), n2 && (f = n2), f = f.indexOf("blob:") !== 0 ? f.substr(0, f.lastIndexOf("/") + 1) : "", u = function(t3) {
      var e4 = new XMLHttpRequest();
      return e4.open("GET", t3, false), e4.send(null), e4.responseText;
    }, c && (P = function(t3) {
      var e4 = new XMLHttpRequest();
      return e4.open("GET", t3, false), e4.responseType = "arraybuffer", e4.send(null), new Uint8Array(e4.response);
    }));
    var m, d, E = t2.print || console.log.bind(console), b = t2.printErr || console.warn.bind(console);
    for (r in o2)
      o2.hasOwnProperty(r) && (t2[r] = o2[r]);
    function O(t3, e4, n3) {
      switch ((e4 = e4 || "i8").charAt(e4.length - 1) === "*" && (e4 = "i32"), e4) {
        case "i1":
        case "i8":
          return h[t3 >> 0];
        case "i16":
          return v[t3 >> 1];
        case "i32":
        case "i64":
          return D[t3 >> 2];
        case "float":
          return R[t3 >> 2];
        case "double":
          return A[t3 >> 3];
        default:
          et("invalid type for getValue: " + e4);
      }
      return null;
    }
    o2 = null, t2.arguments && t2.arguments, t2.thisProgram && (p = t2.thisProgram), t2.quit && t2.quit, t2.wasmBinary && (m = t2.wasmBinary), t2.noExitRuntime && t2.noExitRuntime, typeof WebAssembly != "object" && et("no native wasm support detected");
    var T = false;
    function S(t3, e4) {
      t3 || et("Assertion failed: " + e4);
    }
    var N, h, M, v, D, R, A, G = typeof TextDecoder != "undefined" ? new TextDecoder("utf8") : void 0;
    function C(t3, e4, n3) {
      for (var _3 = e4 + n3, r2 = e4; t3[r2] && !(r2 >= _3); )
        ++r2;
      if (r2 - e4 > 16 && t3.subarray && G)
        return G.decode(t3.subarray(e4, r2));
      for (var o3 = ""; e4 < r2; ) {
        var p2 = t3[e4++];
        if (128 & p2) {
          var i2 = 63 & t3[e4++];
          if ((224 & p2) != 192) {
            var c2 = 63 & t3[e4++];
            if ((p2 = (240 & p2) == 224 ? (15 & p2) << 12 | i2 << 6 | c2 : (7 & p2) << 18 | i2 << 12 | c2 << 6 | 63 & t3[e4++]) < 65536)
              o3 += String.fromCharCode(p2);
            else {
              var a2 = p2 - 65536;
              o3 += String.fromCharCode(55296 | a2 >> 10, 56320 | 1023 & a2);
            }
          } else
            o3 += String.fromCharCode((31 & p2) << 6 | i2);
        } else
          o3 += String.fromCharCode(p2);
      }
      return o3;
    }
    function I(t3, e4) {
      return t3 ? C(M, t3, e4) : "";
    }
    function j(t3, e4, n3, _3) {
      if (!(_3 > 0))
        return 0;
      for (var r2 = n3, o3 = n3 + _3 - 1, p2 = 0; p2 < t3.length; ++p2) {
        var i2 = t3.charCodeAt(p2);
        if (i2 >= 55296 && i2 <= 57343 && (i2 = 65536 + ((1023 & i2) << 10) | 1023 & t3.charCodeAt(++p2)), i2 <= 127) {
          if (n3 >= o3)
            break;
          e4[n3++] = i2;
        } else if (i2 <= 2047) {
          if (n3 + 1 >= o3)
            break;
          e4[n3++] = 192 | i2 >> 6, e4[n3++] = 128 | 63 & i2;
        } else if (i2 <= 65535) {
          if (n3 + 2 >= o3)
            break;
          e4[n3++] = 224 | i2 >> 12, e4[n3++] = 128 | i2 >> 6 & 63, e4[n3++] = 128 | 63 & i2;
        } else {
          if (n3 + 3 >= o3)
            break;
          e4[n3++] = 240 | i2 >> 18, e4[n3++] = 128 | i2 >> 12 & 63, e4[n3++] = 128 | i2 >> 6 & 63, e4[n3++] = 128 | 63 & i2;
        }
      }
      return e4[n3] = 0, n3 - r2;
    }
    function U(t3) {
      for (var e4 = 0, n3 = 0; n3 < t3.length; ++n3) {
        var _3 = t3.charCodeAt(n3);
        _3 >= 55296 && _3 <= 57343 && (_3 = 65536 + ((1023 & _3) << 10) | 1023 & t3.charCodeAt(++n3)), _3 <= 127 ? ++e4 : e4 += _3 <= 2047 ? 2 : _3 <= 65535 ? 3 : 4;
      }
      return e4;
    }
    function L(t3) {
      var e4 = U(t3) + 1, n3 = f_(e4);
      return n3 && j(t3, h, n3, e4), n3;
    }
    function Y(t3, e4, n3) {
      for (var _3 = 0; _3 < t3.length; ++_3)
        h[e4++ >> 0] = t3.charCodeAt(_3);
      n3 || (h[e4 >> 0] = 0);
    }
    function F(t3, e4) {
      return t3 % e4 > 0 && (t3 += e4 - t3 % e4), t3;
    }
    function x(e4) {
      N = e4, t2.HEAP8 = h = new Int8Array(e4), t2.HEAP16 = v = new Int16Array(e4), t2.HEAP32 = D = new Int32Array(e4), t2.HEAPU8 = M = new Uint8Array(e4), t2.HEAPU16 = new Uint16Array(e4), t2.HEAPU32 = new Uint32Array(e4), t2.HEAPF32 = R = new Float32Array(e4), t2.HEAPF64 = A = new Float64Array(e4);
    }
    t2.INITIAL_MEMORY;
    var w, H = [], X = [], z = [], Z = [];
    function B() {
      if (t2.preRun)
        for (typeof t2.preRun == "function" && (t2.preRun = [t2.preRun]); t2.preRun.length; )
          q(t2.preRun.shift());
      ut(H);
    }
    function W() {
      ut(X);
    }
    function V() {
      ut(z);
    }
    function k() {
      if (t2.postRun)
        for (typeof t2.postRun == "function" && (t2.postRun = [t2.postRun]); t2.postRun.length; )
          J(t2.postRun.shift());
      ut(Z);
    }
    function q(t3) {
      H.unshift(t3);
    }
    function J(t3) {
      Z.unshift(t3);
    }
    var K = 0, $ = null;
    function Q(e4) {
      K++, t2.monitorRunDependencies && t2.monitorRunDependencies(K);
    }
    function tt(e4) {
      if (K--, t2.monitorRunDependencies && t2.monitorRunDependencies(K), K == 0 && $) {
        var n3 = $;
        $ = null, n3();
      }
    }
    function et(e4) {
      t2.onAbort && t2.onAbort(e4), b(e4 += ""), T = true, e4 = "abort(" + e4 + "). Build with -s ASSERTIONS=1 for more info.";
      var n3 = new WebAssembly.RuntimeError(e4);
      throw _2(n3), n3;
    }
    function nt(t3, e4) {
      return String.prototype.startsWith ? t3.startsWith(e4) : t3.indexOf(e4) === 0;
    }
    t2.preloadedImages = {}, t2.preloadedAudios = {};
    var _t = "data:application/octet-stream;base64,";
    function rt(t3) {
      return nt(t3, _t);
    }
    var ot = "file://";
    function pt(t3) {
      return nt(t3, ot);
    }
    var it = "pe-wasm.wasm";
    function ct() {
      try {
        if (m)
          return new Uint8Array(m);
        if (P)
          return P(it);
        throw "both async and sync fetching of the wasm failed";
      } catch (b2) {
        et(b2);
      }
    }
    function at() {
      return m || !i && !c || typeof fetch != "function" || pt(it) ? Promise.resolve().then(ct) : fetch(it, { credentials: "same-origin" }).then(function(t3) {
        if (!t3.ok)
          throw "failed to load wasm binary file at '" + it + "'";
        return t3.arrayBuffer();
      }).catch(function() {
        return ct();
      });
    }
    function st() {
      var e4 = { a: wt };
      function n3(e5, n4) {
        var _3 = e5.exports;
        t2.asm = _3, x((d = t2.asm.s).buffer), w = t2.asm.t, tt();
      }
      function r2(t3) {
        n3(t3.instance);
      }
      function o3(t3) {
        return at().then(function(t4) {
          return WebAssembly.instantiate(t4, e4);
        }).then(t3, function(t4) {
          b("failed to asynchronously prepare wasm: " + t4), et(t4);
        });
      }
      function p2() {
        return m || typeof WebAssembly.instantiateStreaming != "function" || rt(it) || pt(it) || typeof fetch != "function" ? o3(r2) : fetch(it, { credentials: "same-origin" }).then(function(t3) {
          return WebAssembly.instantiateStreaming(t3, e4).then(r2, function(t4) {
            return b("wasm streaming compile failed: " + t4), b("falling back to ArrayBuffer instantiation"), o3(r2);
          });
        });
      }
      if (Q(), t2.instantiateWasm)
        try {
          return t2.instantiateWasm(e4, n3);
        } catch (i2) {
          return b("Module.instantiateWasm callback failed with error: " + i2), false;
        }
      return p2().catch(_2), {};
    }
    function ut(e4) {
      for (; e4.length > 0; ) {
        var n3 = e4.shift();
        if (typeof n3 != "function") {
          var _3 = n3.func;
          typeof _3 == "number" ? n3.arg === void 0 ? w.get(_3)() : w.get(_3)(n3.arg) : _3(n3.arg === void 0 ? null : n3.arg);
        } else
          n3(t2);
      }
    }
    function Pt() {
      if (!Pt.called) {
        Pt.called = true;
        var t3 = new Date().getFullYear(), e4 = new Date(t3, 0, 1), n3 = new Date(t3, 6, 1), _3 = e4.getTimezoneOffset(), r2 = n3.getTimezoneOffset(), o3 = Math.max(_3, r2);
        D[d_() >> 2] = 60 * o3, D[m_() >> 2] = Number(_3 != r2);
        var p2 = s2(e4), i2 = s2(n3), c2 = L(p2), a2 = L(i2);
        r2 < _3 ? (D[l_() >> 2] = c2, D[l_() + 4 >> 2] = a2) : (D[l_() >> 2] = a2, D[l_() + 4 >> 2] = c2);
      }
      function s2(t4) {
        var e5 = t4.toTimeString().match(/\(([A-Za-z ]+)\)$/);
        return e5 ? e5[1] : "GMT";
      }
    }
    function yt(t3, e4) {
      Pt();
      var n3 = new Date(1e3 * D[t3 >> 2]);
      D[e4 >> 2] = n3.getSeconds(), D[e4 + 4 >> 2] = n3.getMinutes(), D[e4 + 8 >> 2] = n3.getHours(), D[e4 + 12 >> 2] = n3.getDate(), D[e4 + 16 >> 2] = n3.getMonth(), D[e4 + 20 >> 2] = n3.getFullYear() - 1900, D[e4 + 24 >> 2] = n3.getDay();
      var _3 = new Date(n3.getFullYear(), 0, 1), r2 = (n3.getTime() - _3.getTime()) / 864e5 | 0;
      D[e4 + 28 >> 2] = r2, D[e4 + 36 >> 2] = -60 * n3.getTimezoneOffset();
      var o3 = new Date(n3.getFullYear(), 6, 1).getTimezoneOffset(), p2 = _3.getTimezoneOffset(), i2 = 0 | (o3 != p2 && n3.getTimezoneOffset() == Math.min(p2, o3));
      D[e4 + 32 >> 2] = i2;
      var c2 = D[l_() + (i2 ? 4 : 0) >> 2];
      return D[e4 + 40 >> 2] = c2, e4;
    }
    function gt(t3, e4) {
      return yt(t3, e4);
    }
    rt(it) || (it = l(it));
    var ft = { mappings: {}, buffers: [null, [], []], printChar: function(t3, e4) {
      var n3 = ft.buffers[t3];
      e4 === 0 || e4 === 10 ? ((t3 === 1 ? E : b)(C(n3, 0)), n3.length = 0) : n3.push(e4);
    }, varargs: void 0, get: function() {
      return ft.varargs += 4, D[ft.varargs - 4 >> 2];
    }, getStr: function(t3) {
      return I(t3);
    }, get64: function(t3, e4) {
      return t3;
    } };
    function lt(t3, e4, n3) {
      return ft.varargs = n3, 0;
    }
    function mt(t3, e4, n3) {
    }
    function dt(t3, e4, n3) {
      return ft.varargs = n3, 0;
    }
    function Et(t3, e4, n3) {
      ft.varargs = n3;
    }
    function bt(t3) {
    }
    function Ot(t3, e4) {
    }
    function Tt(t3) {
    }
    function St() {
      et();
    }
    function Nt(t3, e4, n3) {
      M.copyWithin(t3, e4, e4 + n3);
    }
    function ht() {
      return M.length;
    }
    function Mt(t3) {
      try {
        return d.grow(t3 - N.byteLength + 65535 >>> 16), x(d.buffer), 1;
      } catch (e4) {
      }
    }
    function vt(t3) {
      t3 >>>= 0;
      var e4 = ht(), n3 = 2147483648;
      if (t3 > n3)
        return false;
      for (var _3 = 16777216, r2 = 1; r2 <= 4; r2 *= 2) {
        var o3 = e4 * (1 + 0.2 / r2);
        if (o3 = Math.min(o3, t3 + 100663296), Mt(Math.min(n3, F(Math.max(_3, t3, o3), 65536))))
          return true;
      }
      return false;
    }
    var Dt = {};
    function Rt() {
      return p || "./this.program";
    }
    function At() {
      if (!At.strings) {
        var t3 = { USER: "web_user", LOGNAME: "web_user", PATH: "/", PWD: "/", HOME: "/home/web_user", LANG: (typeof navigator == "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8", _: Rt() };
        for (var e4 in Dt)
          t3[e4] = Dt[e4];
        var n3 = [];
        for (var e4 in t3)
          n3.push(e4 + "=" + t3[e4]);
        At.strings = n3;
      }
      return At.strings;
    }
    function Gt(t3, e4) {
      var n3 = 0;
      return At().forEach(function(_3, r2) {
        var o3 = e4 + n3;
        D[t3 + 4 * r2 >> 2] = o3, Y(_3, o3), n3 += _3.length + 1;
      }), 0;
    }
    function Ct(t3, e4) {
      var n3 = At();
      D[t3 >> 2] = n3.length;
      var _3 = 0;
      return n3.forEach(function(t4) {
        _3 += t4.length + 1;
      }), D[e4 >> 2] = _3, 0;
    }
    function It(t3) {
      return 0;
    }
    function jt(t3, e4, n3, _3) {
      var r2 = ft.getStreamFromFD(t3), o3 = ft.doReadv(r2, e4, n3);
      return D[_3 >> 2] = o3, 0;
    }
    function Ut(t3, e4, n3, _3, r2) {
    }
    function Lt(t3, e4, n3, _3) {
      for (var r2 = 0, o3 = 0; o3 < n3; o3++) {
        for (var p2 = D[e4 + 8 * o3 >> 2], i2 = D[e4 + (8 * o3 + 4) >> 2], c2 = 0; c2 < i2; c2++)
          ft.printChar(t3, M[p2 + c2]);
        r2 += i2;
      }
      return D[_3 >> 2] = r2, 0;
    }
    function Yt(t3) {
      var e4 = Date.now() / 1e3 | 0;
      return t3 && (D[t3 >> 2] = e4), e4;
    }
    function Ft(t3, e4, n3) {
      var _3 = n3 > 0 ? n3 : U(t3) + 1, r2 = new Array(_3), o3 = j(t3, r2, 0, r2.length);
      return e4 && (r2.length = o3), r2;
    }
    X.push({ func: function() {
      Ht();
    } });
    var xt, wt = { o: gt, b: lt, q: mt, h: dt, d: Et, e: bt, p: Ot, f: Tt, l: St, j: Nt, k: vt, m: Gt, n: Ct, a: It, g: jt, i: Ut, c: Lt, r: Yt }, Ht = (st(), t2.___wasm_call_ctors = function() {
      return (Ht = t2.___wasm_call_ctors = t2.asm.u).apply(null, arguments);
    }), Xt = (t2.___em_js__array_bounds_check_error = function() {
      return (t2.___em_js__array_bounds_check_error = t2.asm.v).apply(null, arguments);
    }, t2._emscripten_bind_PeObject_getCode_0 = function() {
      return (Xt = t2._emscripten_bind_PeObject_getCode_0 = t2.asm.w).apply(null, arguments);
    }), zt = t2._emscripten_bind_PeObject_getName_1 = function() {
      return (zt = t2._emscripten_bind_PeObject_getName_1 = t2.asm.x).apply(null, arguments);
    }, Zt = t2._emscripten_bind_PeObject_getType_0 = function() {
      return (Zt = t2._emscripten_bind_PeObject_getType_0 = t2.asm.y).apply(null, arguments);
    }, Bt = t2._emscripten_bind_PeCoordsys_getCode_0 = function() {
      return (Bt = t2._emscripten_bind_PeCoordsys_getCode_0 = t2.asm.z).apply(null, arguments);
    }, Wt = t2._emscripten_bind_PeCoordsys_getName_1 = function() {
      return (Wt = t2._emscripten_bind_PeCoordsys_getName_1 = t2.asm.A).apply(null, arguments);
    }, Vt = t2._emscripten_bind_PeCoordsys_getType_0 = function() {
      return (Vt = t2._emscripten_bind_PeCoordsys_getType_0 = t2.asm.B).apply(null, arguments);
    }, kt = t2._emscripten_bind_VoidPtr___destroy___0 = function() {
      return (kt = t2._emscripten_bind_VoidPtr___destroy___0 = t2.asm.C).apply(null, arguments);
    }, qt = t2._emscripten_bind_PeDatum_getSpheroid_0 = function() {
      return (qt = t2._emscripten_bind_PeDatum_getSpheroid_0 = t2.asm.D).apply(null, arguments);
    }, Jt = t2._emscripten_bind_PeDatum_getCode_0 = function() {
      return (Jt = t2._emscripten_bind_PeDatum_getCode_0 = t2.asm.E).apply(null, arguments);
    }, Kt = t2._emscripten_bind_PeDatum_getName_1 = function() {
      return (Kt = t2._emscripten_bind_PeDatum_getName_1 = t2.asm.F).apply(null, arguments);
    }, $t = t2._emscripten_bind_PeDatum_getType_0 = function() {
      return ($t = t2._emscripten_bind_PeDatum_getType_0 = t2.asm.G).apply(null, arguments);
    }, Qt = t2._emscripten_bind_PeDefs_get_PE_BUFFER_MAX_0 = function() {
      return (Qt = t2._emscripten_bind_PeDefs_get_PE_BUFFER_MAX_0 = t2.asm.H).apply(null, arguments);
    }, te = t2._emscripten_bind_PeDefs_get_PE_NAME_MAX_0 = function() {
      return (te = t2._emscripten_bind_PeDefs_get_PE_NAME_MAX_0 = t2.asm.I).apply(null, arguments);
    }, ee = t2._emscripten_bind_PeDefs_get_PE_MGRS_MAX_0 = function() {
      return (ee = t2._emscripten_bind_PeDefs_get_PE_MGRS_MAX_0 = t2.asm.J).apply(null, arguments);
    }, ne = t2._emscripten_bind_PeDefs_get_PE_USNG_MAX_0 = function() {
      return (ne = t2._emscripten_bind_PeDefs_get_PE_USNG_MAX_0 = t2.asm.K).apply(null, arguments);
    }, _e = t2._emscripten_bind_PeDefs_get_PE_DD_MAX_0 = function() {
      return (_e = t2._emscripten_bind_PeDefs_get_PE_DD_MAX_0 = t2.asm.L).apply(null, arguments);
    }, re = t2._emscripten_bind_PeDefs_get_PE_DMS_MAX_0 = function() {
      return (re = t2._emscripten_bind_PeDefs_get_PE_DMS_MAX_0 = t2.asm.M).apply(null, arguments);
    }, oe = t2._emscripten_bind_PeDefs_get_PE_DDM_MAX_0 = function() {
      return (oe = t2._emscripten_bind_PeDefs_get_PE_DDM_MAX_0 = t2.asm.N).apply(null, arguments);
    }, pe = t2._emscripten_bind_PeDefs_get_PE_UTM_MAX_0 = function() {
      return (pe = t2._emscripten_bind_PeDefs_get_PE_UTM_MAX_0 = t2.asm.O).apply(null, arguments);
    }, ie = t2._emscripten_bind_PeDefs_get_PE_PARM_MAX_0 = function() {
      return (ie = t2._emscripten_bind_PeDefs_get_PE_PARM_MAX_0 = t2.asm.P).apply(null, arguments);
    }, ce = t2._emscripten_bind_PeDefs_get_PE_TYPE_NONE_0 = function() {
      return (ce = t2._emscripten_bind_PeDefs_get_PE_TYPE_NONE_0 = t2.asm.Q).apply(null, arguments);
    }, ae = t2._emscripten_bind_PeDefs_get_PE_TYPE_GEOGCS_0 = function() {
      return (ae = t2._emscripten_bind_PeDefs_get_PE_TYPE_GEOGCS_0 = t2.asm.R).apply(null, arguments);
    }, se = t2._emscripten_bind_PeDefs_get_PE_TYPE_PROJCS_0 = function() {
      return (se = t2._emscripten_bind_PeDefs_get_PE_TYPE_PROJCS_0 = t2.asm.S).apply(null, arguments);
    }, ue = t2._emscripten_bind_PeDefs_get_PE_TYPE_GEOGTRAN_0 = function() {
      return (ue = t2._emscripten_bind_PeDefs_get_PE_TYPE_GEOGTRAN_0 = t2.asm.T).apply(null, arguments);
    }, Pe = t2._emscripten_bind_PeDefs_get_PE_TYPE_COORDSYS_0 = function() {
      return (Pe = t2._emscripten_bind_PeDefs_get_PE_TYPE_COORDSYS_0 = t2.asm.U).apply(null, arguments);
    }, ye = t2._emscripten_bind_PeDefs_get_PE_TYPE_UNIT_0 = function() {
      return (ye = t2._emscripten_bind_PeDefs_get_PE_TYPE_UNIT_0 = t2.asm.V).apply(null, arguments);
    }, ge = t2._emscripten_bind_PeDefs_get_PE_TYPE_LINUNIT_0 = function() {
      return (ge = t2._emscripten_bind_PeDefs_get_PE_TYPE_LINUNIT_0 = t2.asm.W).apply(null, arguments);
    }, fe = t2._emscripten_bind_PeDefs_get_PE_STR_OPTS_NONE_0 = function() {
      return (fe = t2._emscripten_bind_PeDefs_get_PE_STR_OPTS_NONE_0 = t2.asm.X).apply(null, arguments);
    }, le = t2._emscripten_bind_PeDefs_get_PE_STR_AUTH_NONE_0 = function() {
      return (le = t2._emscripten_bind_PeDefs_get_PE_STR_AUTH_NONE_0 = t2.asm.Y).apply(null, arguments);
    }, me = t2._emscripten_bind_PeDefs_get_PE_STR_AUTH_TOP_0 = function() {
      return (me = t2._emscripten_bind_PeDefs_get_PE_STR_AUTH_TOP_0 = t2.asm.Z).apply(null, arguments);
    }, de = t2._emscripten_bind_PeDefs_get_PE_STR_NAME_CANON_0 = function() {
      return (de = t2._emscripten_bind_PeDefs_get_PE_STR_NAME_CANON_0 = t2.asm._).apply(null, arguments);
    }, Ee = t2._emscripten_bind_PeDefs_get_PE_PARM_X0_0 = function() {
      return (Ee = t2._emscripten_bind_PeDefs_get_PE_PARM_X0_0 = t2.asm.$).apply(null, arguments);
    }, be = t2._emscripten_bind_PeDefs_get_PE_PARM_ND_0 = function() {
      return (be = t2._emscripten_bind_PeDefs_get_PE_PARM_ND_0 = t2.asm.aa).apply(null, arguments);
    }, Oe = t2._emscripten_bind_PeDefs_get_PE_TRANSFORM_1_TO_2_0 = function() {
      return (Oe = t2._emscripten_bind_PeDefs_get_PE_TRANSFORM_1_TO_2_0 = t2.asm.ba).apply(null, arguments);
    }, Te = t2._emscripten_bind_PeDefs_get_PE_TRANSFORM_2_TO_1_0 = function() {
      return (Te = t2._emscripten_bind_PeDefs_get_PE_TRANSFORM_2_TO_1_0 = t2.asm.ca).apply(null, arguments);
    }, Se = t2._emscripten_bind_PeDefs_get_PE_TRANSFORM_P_TO_G_0 = function() {
      return (Se = t2._emscripten_bind_PeDefs_get_PE_TRANSFORM_P_TO_G_0 = t2.asm.da).apply(null, arguments);
    }, Ne = t2._emscripten_bind_PeDefs_get_PE_TRANSFORM_G_TO_P_0 = function() {
      return (Ne = t2._emscripten_bind_PeDefs_get_PE_TRANSFORM_G_TO_P_0 = t2.asm.ea).apply(null, arguments);
    }, he = t2._emscripten_bind_PeDefs_get_PE_HORIZON_RECT_0 = function() {
      return (he = t2._emscripten_bind_PeDefs_get_PE_HORIZON_RECT_0 = t2.asm.fa).apply(null, arguments);
    }, Me = t2._emscripten_bind_PeDefs_get_PE_HORIZON_POLY_0 = function() {
      return (Me = t2._emscripten_bind_PeDefs_get_PE_HORIZON_POLY_0 = t2.asm.ga).apply(null, arguments);
    }, ve = t2._emscripten_bind_PeDefs_get_PE_HORIZON_LINE_0 = function() {
      return (ve = t2._emscripten_bind_PeDefs_get_PE_HORIZON_LINE_0 = t2.asm.ha).apply(null, arguments);
    }, De = t2._emscripten_bind_PeDefs_get_PE_HORIZON_DELTA_0 = function() {
      return (De = t2._emscripten_bind_PeDefs_get_PE_HORIZON_DELTA_0 = t2.asm.ia).apply(null, arguments);
    }, Re = t2._emscripten_bind_PeFactory_initialize_1 = function() {
      return (Re = t2._emscripten_bind_PeFactory_initialize_1 = t2.asm.ja).apply(null, arguments);
    }, Ae = t2._emscripten_bind_PeFactory_factoryByType_2 = function() {
      return (Ae = t2._emscripten_bind_PeFactory_factoryByType_2 = t2.asm.ka).apply(null, arguments);
    }, Ge = t2._emscripten_bind_PeFactory_fromString_2 = function() {
      return (Ge = t2._emscripten_bind_PeFactory_fromString_2 = t2.asm.la).apply(null, arguments);
    }, Ce = t2._emscripten_bind_PeFactory_getCode_1 = function() {
      return (Ce = t2._emscripten_bind_PeFactory_getCode_1 = t2.asm.ma).apply(null, arguments);
    }, Ie = t2._emscripten_bind_PeGCSExtent_PeGCSExtent_6 = function() {
      return (Ie = t2._emscripten_bind_PeGCSExtent_PeGCSExtent_6 = t2.asm.na).apply(null, arguments);
    }, je = t2._emscripten_bind_PeGCSExtent_getLLon_0 = function() {
      return (je = t2._emscripten_bind_PeGCSExtent_getLLon_0 = t2.asm.oa).apply(null, arguments);
    }, Ue = t2._emscripten_bind_PeGCSExtent_getSLat_0 = function() {
      return (Ue = t2._emscripten_bind_PeGCSExtent_getSLat_0 = t2.asm.pa).apply(null, arguments);
    }, Le = t2._emscripten_bind_PeGCSExtent_getRLon_0 = function() {
      return (Le = t2._emscripten_bind_PeGCSExtent_getRLon_0 = t2.asm.qa).apply(null, arguments);
    }, Ye = t2._emscripten_bind_PeGCSExtent_getNLat_0 = function() {
      return (Ye = t2._emscripten_bind_PeGCSExtent_getNLat_0 = t2.asm.ra).apply(null, arguments);
    }, Fe = t2._emscripten_bind_PeGCSExtent___destroy___0 = function() {
      return (Fe = t2._emscripten_bind_PeGCSExtent___destroy___0 = t2.asm.sa).apply(null, arguments);
    }, xe = t2._emscripten_bind_PeGeogcs_getDatum_0 = function() {
      return (xe = t2._emscripten_bind_PeGeogcs_getDatum_0 = t2.asm.ta).apply(null, arguments);
    }, we = t2._emscripten_bind_PeGeogcs_getPrimem_0 = function() {
      return (we = t2._emscripten_bind_PeGeogcs_getPrimem_0 = t2.asm.ua).apply(null, arguments);
    }, He = t2._emscripten_bind_PeGeogcs_getUnit_0 = function() {
      return (He = t2._emscripten_bind_PeGeogcs_getUnit_0 = t2.asm.va).apply(null, arguments);
    }, Xe = t2._emscripten_bind_PeGeogcs_getCode_0 = function() {
      return (Xe = t2._emscripten_bind_PeGeogcs_getCode_0 = t2.asm.wa).apply(null, arguments);
    }, ze = t2._emscripten_bind_PeGeogcs_getName_1 = function() {
      return (ze = t2._emscripten_bind_PeGeogcs_getName_1 = t2.asm.xa).apply(null, arguments);
    }, Ze = t2._emscripten_bind_PeGeogcs_getType_0 = function() {
      return (Ze = t2._emscripten_bind_PeGeogcs_getType_0 = t2.asm.ya).apply(null, arguments);
    }, Be = t2._emscripten_bind_PeGeogtran_isEqual_1 = function() {
      return (Be = t2._emscripten_bind_PeGeogtran_isEqual_1 = t2.asm.za).apply(null, arguments);
    }, We = t2._emscripten_bind_PeGeogtran_getGeogcs1_0 = function() {
      return (We = t2._emscripten_bind_PeGeogtran_getGeogcs1_0 = t2.asm.Aa).apply(null, arguments);
    }, Ve = t2._emscripten_bind_PeGeogtran_getGeogcs2_0 = function() {
      return (Ve = t2._emscripten_bind_PeGeogtran_getGeogcs2_0 = t2.asm.Ba).apply(null, arguments);
    }, ke = t2._emscripten_bind_PeGeogtran_getParameters_0 = function() {
      return (ke = t2._emscripten_bind_PeGeogtran_getParameters_0 = t2.asm.Ca).apply(null, arguments);
    }, qe = t2._emscripten_bind_PeGeogtran_loadConstants_0 = function() {
      return (qe = t2._emscripten_bind_PeGeogtran_loadConstants_0 = t2.asm.Da).apply(null, arguments);
    }, Je = t2._emscripten_bind_PeGeogtran_getCode_0 = function() {
      return (Je = t2._emscripten_bind_PeGeogtran_getCode_0 = t2.asm.Ea).apply(null, arguments);
    }, Ke = t2._emscripten_bind_PeGeogtran_getName_1 = function() {
      return (Ke = t2._emscripten_bind_PeGeogtran_getName_1 = t2.asm.Fa).apply(null, arguments);
    }, $e = t2._emscripten_bind_PeGeogtran_getType_0 = function() {
      return ($e = t2._emscripten_bind_PeGeogtran_getType_0 = t2.asm.Ga).apply(null, arguments);
    }, Qe = t2._emscripten_bind_PeGTlistExtended_getGTlist_6 = function() {
      return (Qe = t2._emscripten_bind_PeGTlistExtended_getGTlist_6 = t2.asm.Ha).apply(null, arguments);
    }, tn = t2._emscripten_bind_PeGTlistExtended_get_PE_GTLIST_OPTS_COMMON_0 = function() {
      return (tn = t2._emscripten_bind_PeGTlistExtended_get_PE_GTLIST_OPTS_COMMON_0 = t2.asm.Ia).apply(null, arguments);
    }, en = t2._emscripten_bind_PeGTlistExtendedEntry_getEntries_0 = function() {
      return (en = t2._emscripten_bind_PeGTlistExtendedEntry_getEntries_0 = t2.asm.Ja).apply(null, arguments);
    }, nn = t2._emscripten_bind_PeGTlistExtendedEntry_getSteps_0 = function() {
      return (nn = t2._emscripten_bind_PeGTlistExtendedEntry_getSteps_0 = t2.asm.Ka).apply(null, arguments);
    }, _n = t2._emscripten_bind_PeGTlistExtendedEntry_Delete_1 = function() {
      return (_n = t2._emscripten_bind_PeGTlistExtendedEntry_Delete_1 = t2.asm.La).apply(null, arguments);
    }, rn = t2._emscripten_bind_PeGTlistExtendedGTs_getDirection_0 = function() {
      return (rn = t2._emscripten_bind_PeGTlistExtendedGTs_getDirection_0 = t2.asm.Ma).apply(null, arguments);
    }, on = t2._emscripten_bind_PeGTlistExtendedGTs_getGeogtran_0 = function() {
      return (on = t2._emscripten_bind_PeGTlistExtendedGTs_getGeogtran_0 = t2.asm.Na).apply(null, arguments);
    }, pn = t2._emscripten_bind_PeHorizon_getNump_0 = function() {
      return (pn = t2._emscripten_bind_PeHorizon_getNump_0 = t2.asm.Oa).apply(null, arguments);
    }, cn = t2._emscripten_bind_PeHorizon_getKind_0 = function() {
      return (cn = t2._emscripten_bind_PeHorizon_getKind_0 = t2.asm.Pa).apply(null, arguments);
    }, an = t2._emscripten_bind_PeHorizon_getInclusive_0 = function() {
      return (an = t2._emscripten_bind_PeHorizon_getInclusive_0 = t2.asm.Qa).apply(null, arguments);
    }, sn = t2._emscripten_bind_PeHorizon_getSize_0 = function() {
      return (sn = t2._emscripten_bind_PeHorizon_getSize_0 = t2.asm.Ra).apply(null, arguments);
    }, un = t2._emscripten_bind_PeHorizon_getCoord_0 = function() {
      return (un = t2._emscripten_bind_PeHorizon_getCoord_0 = t2.asm.Sa).apply(null, arguments);
    }, Pn = t2._emscripten_bind_PeInteger_PeInteger_1 = function() {
      return (Pn = t2._emscripten_bind_PeInteger_PeInteger_1 = t2.asm.Ta).apply(null, arguments);
    }, yn = t2._emscripten_bind_PeInteger_get_val_0 = function() {
      return (yn = t2._emscripten_bind_PeInteger_get_val_0 = t2.asm.Ua).apply(null, arguments);
    }, gn = t2._emscripten_bind_PeInteger_set_val_1 = function() {
      return (gn = t2._emscripten_bind_PeInteger_set_val_1 = t2.asm.Va).apply(null, arguments);
    }, fn = t2._emscripten_bind_PeInteger___destroy___0 = function() {
      return (fn = t2._emscripten_bind_PeInteger___destroy___0 = t2.asm.Wa).apply(null, arguments);
    }, ln = t2._emscripten_bind_PeNotationMgrs_get_PE_MGRS_STYLE_NEW_0 = function() {
      return (ln = t2._emscripten_bind_PeNotationMgrs_get_PE_MGRS_STYLE_NEW_0 = t2.asm.Xa).apply(null, arguments);
    }, mn = t2._emscripten_bind_PeNotationMgrs_get_PE_MGRS_STYLE_OLD_0 = function() {
      return (mn = t2._emscripten_bind_PeNotationMgrs_get_PE_MGRS_STYLE_OLD_0 = t2.asm.Ya).apply(null, arguments);
    }, dn = t2._emscripten_bind_PeNotationMgrs_get_PE_MGRS_STYLE_AUTO_0 = function() {
      return (dn = t2._emscripten_bind_PeNotationMgrs_get_PE_MGRS_STYLE_AUTO_0 = t2.asm.Za).apply(null, arguments);
    }, En = t2._emscripten_bind_PeNotationMgrs_get_PE_MGRS_180_ZONE_1_PLUS_0 = function() {
      return (En = t2._emscripten_bind_PeNotationMgrs_get_PE_MGRS_180_ZONE_1_PLUS_0 = t2.asm._a).apply(null, arguments);
    }, bn = t2._emscripten_bind_PeNotationMgrs_get_PE_MGRS_ADD_SPACES_0 = function() {
      return (bn = t2._emscripten_bind_PeNotationMgrs_get_PE_MGRS_ADD_SPACES_0 = t2.asm.$a).apply(null, arguments);
    }, On = t2._emscripten_bind_PeNotationUtm_get_PE_UTM_OPTS_NONE_0 = function() {
      return (On = t2._emscripten_bind_PeNotationUtm_get_PE_UTM_OPTS_NONE_0 = t2.asm.ab).apply(null, arguments);
    }, Tn = t2._emscripten_bind_PeNotationUtm_get_PE_UTM_OPTS_NS_0 = function() {
      return (Tn = t2._emscripten_bind_PeNotationUtm_get_PE_UTM_OPTS_NS_0 = t2.asm.bb).apply(null, arguments);
    }, Sn = t2._emscripten_bind_PeNotationUtm_get_PE_UTM_OPTS_NS_STRICT_0 = function() {
      return (Sn = t2._emscripten_bind_PeNotationUtm_get_PE_UTM_OPTS_NS_STRICT_0 = t2.asm.cb).apply(null, arguments);
    }, Nn = t2._emscripten_bind_PeNotationUtm_get_PE_UTM_OPTS_ADD_SPACES_0 = function() {
      return (Nn = t2._emscripten_bind_PeNotationUtm_get_PE_UTM_OPTS_ADD_SPACES_0 = t2.asm.db).apply(null, arguments);
    }, hn = t2._emscripten_bind_PeParameter_getValue_0 = function() {
      return (hn = t2._emscripten_bind_PeParameter_getValue_0 = t2.asm.eb).apply(null, arguments);
    }, Mn = t2._emscripten_bind_PeParameter_getCode_0 = function() {
      return (Mn = t2._emscripten_bind_PeParameter_getCode_0 = t2.asm.fb).apply(null, arguments);
    }, vn = t2._emscripten_bind_PeParameter_getName_1 = function() {
      return (vn = t2._emscripten_bind_PeParameter_getName_1 = t2.asm.gb).apply(null, arguments);
    }, Dn = t2._emscripten_bind_PeParameter_getType_0 = function() {
      return (Dn = t2._emscripten_bind_PeParameter_getType_0 = t2.asm.hb).apply(null, arguments);
    }, Rn = t2._emscripten_bind_PePCSInfo_getCentralMeridian_0 = function() {
      return (Rn = t2._emscripten_bind_PePCSInfo_getCentralMeridian_0 = t2.asm.ib).apply(null, arguments);
    }, An = t2._emscripten_bind_PePCSInfo_getDomainMinx_0 = function() {
      return (An = t2._emscripten_bind_PePCSInfo_getDomainMinx_0 = t2.asm.jb).apply(null, arguments);
    }, Gn = t2._emscripten_bind_PePCSInfo_getDomainMiny_0 = function() {
      return (Gn = t2._emscripten_bind_PePCSInfo_getDomainMiny_0 = t2.asm.kb).apply(null, arguments);
    }, Cn = t2._emscripten_bind_PePCSInfo_getDomainMaxx_0 = function() {
      return (Cn = t2._emscripten_bind_PePCSInfo_getDomainMaxx_0 = t2.asm.lb).apply(null, arguments);
    }, In = t2._emscripten_bind_PePCSInfo_getDomainMaxy_0 = function() {
      return (In = t2._emscripten_bind_PePCSInfo_getDomainMaxy_0 = t2.asm.mb).apply(null, arguments);
    }, jn = t2._emscripten_bind_PePCSInfo_getNorthPoleLocation_0 = function() {
      return (jn = t2._emscripten_bind_PePCSInfo_getNorthPoleLocation_0 = t2.asm.nb).apply(null, arguments);
    }, Un = t2._emscripten_bind_PePCSInfo_getNorthPoleGeometry_0 = function() {
      return (Un = t2._emscripten_bind_PePCSInfo_getNorthPoleGeometry_0 = t2.asm.ob).apply(null, arguments);
    }, Ln = t2._emscripten_bind_PePCSInfo_getSouthPoleLocation_0 = function() {
      return (Ln = t2._emscripten_bind_PePCSInfo_getSouthPoleLocation_0 = t2.asm.pb).apply(null, arguments);
    }, Yn = t2._emscripten_bind_PePCSInfo_getSouthPoleGeometry_0 = function() {
      return (Yn = t2._emscripten_bind_PePCSInfo_getSouthPoleGeometry_0 = t2.asm.qb).apply(null, arguments);
    }, Fn = t2._emscripten_bind_PePCSInfo_isDensificationNeeded_0 = function() {
      return (Fn = t2._emscripten_bind_PePCSInfo_isDensificationNeeded_0 = t2.asm.rb).apply(null, arguments);
    }, xn = t2._emscripten_bind_PePCSInfo_isGcsHorizonMultiOverlap_0 = function() {
      return (xn = t2._emscripten_bind_PePCSInfo_isGcsHorizonMultiOverlap_0 = t2.asm.sb).apply(null, arguments);
    }, wn = t2._emscripten_bind_PePCSInfo_isPannableRectangle_0 = function() {
      return (wn = t2._emscripten_bind_PePCSInfo_isPannableRectangle_0 = t2.asm.tb).apply(null, arguments);
    }, Hn = t2._emscripten_bind_PePCSInfo_generate_2 = function() {
      return (Hn = t2._emscripten_bind_PePCSInfo_generate_2 = t2.asm.ub).apply(null, arguments);
    }, Xn = t2._emscripten_bind_PePCSInfo_get_PE_PCSINFO_OPTION_NONE_0 = function() {
      return (Xn = t2._emscripten_bind_PePCSInfo_get_PE_PCSINFO_OPTION_NONE_0 = t2.asm.vb).apply(null, arguments);
    }, zn = t2._emscripten_bind_PePCSInfo_get_PE_PCSINFO_OPTION_DOMAIN_0 = function() {
      return (zn = t2._emscripten_bind_PePCSInfo_get_PE_PCSINFO_OPTION_DOMAIN_0 = t2.asm.wb).apply(null, arguments);
    }, Zn = t2._emscripten_bind_PePCSInfo_get_PE_POLE_OUTSIDE_BOUNDARY_0 = function() {
      return (Zn = t2._emscripten_bind_PePCSInfo_get_PE_POLE_OUTSIDE_BOUNDARY_0 = t2.asm.xb).apply(null, arguments);
    }, Bn = t2._emscripten_bind_PePCSInfo_get_PE_POLE_POINT_0 = function() {
      return (Bn = t2._emscripten_bind_PePCSInfo_get_PE_POLE_POINT_0 = t2.asm.yb).apply(null, arguments);
    }, Wn = t2._emscripten_bind_PePrimem_getLongitude_0 = function() {
      return (Wn = t2._emscripten_bind_PePrimem_getLongitude_0 = t2.asm.zb).apply(null, arguments);
    }, Vn = t2._emscripten_bind_PePrimem_getCode_0 = function() {
      return (Vn = t2._emscripten_bind_PePrimem_getCode_0 = t2.asm.Ab).apply(null, arguments);
    }, kn = t2._emscripten_bind_PePrimem_getName_1 = function() {
      return (kn = t2._emscripten_bind_PePrimem_getName_1 = t2.asm.Bb).apply(null, arguments);
    }, qn = t2._emscripten_bind_PePrimem_getType_0 = function() {
      return (qn = t2._emscripten_bind_PePrimem_getType_0 = t2.asm.Cb).apply(null, arguments);
    }, Jn = t2._emscripten_bind_PeProjcs_getGeogcs_0 = function() {
      return (Jn = t2._emscripten_bind_PeProjcs_getGeogcs_0 = t2.asm.Db).apply(null, arguments);
    }, Kn = t2._emscripten_bind_PeProjcs_getParameters_0 = function() {
      return (Kn = t2._emscripten_bind_PeProjcs_getParameters_0 = t2.asm.Eb).apply(null, arguments);
    }, $n = t2._emscripten_bind_PeProjcs_getUnit_0 = function() {
      return ($n = t2._emscripten_bind_PeProjcs_getUnit_0 = t2.asm.Fb).apply(null, arguments);
    }, Qn = t2._emscripten_bind_PeProjcs_loadConstants_0 = function() {
      return (Qn = t2._emscripten_bind_PeProjcs_loadConstants_0 = t2.asm.Gb).apply(null, arguments);
    }, t_ = t2._emscripten_bind_PeProjcs_horizonGcsGenerate_0 = function() {
      return (t_ = t2._emscripten_bind_PeProjcs_horizonGcsGenerate_0 = t2.asm.Hb).apply(null, arguments);
    }, e_ = t2._emscripten_bind_PeProjcs_horizonPcsGenerate_0 = function() {
      return (e_ = t2._emscripten_bind_PeProjcs_horizonPcsGenerate_0 = t2.asm.Ib).apply(null, arguments);
    }, n_ = t2._emscripten_bind_PeProjcs_getCode_0 = function() {
      return (n_ = t2._emscripten_bind_PeProjcs_getCode_0 = t2.asm.Jb).apply(null, arguments);
    }, __ = t2._emscripten_bind_PeProjcs_getName_1 = function() {
      return (__ = t2._emscripten_bind_PeProjcs_getName_1 = t2.asm.Kb).apply(null, arguments);
    }, r_ = t2._emscripten_bind_PeProjcs_getType_0 = function() {
      return (r_ = t2._emscripten_bind_PeProjcs_getType_0 = t2.asm.Lb).apply(null, arguments);
    }, o_ = t2._emscripten_bind_PeSpheroid_getAxis_0 = function() {
      return (o_ = t2._emscripten_bind_PeSpheroid_getAxis_0 = t2.asm.Mb).apply(null, arguments);
    }, p_ = t2._emscripten_bind_PeSpheroid_getFlattening_0 = function() {
      return (p_ = t2._emscripten_bind_PeSpheroid_getFlattening_0 = t2.asm.Nb).apply(null, arguments);
    }, i_ = t2._emscripten_bind_PeSpheroid_getCode_0 = function() {
      return (i_ = t2._emscripten_bind_PeSpheroid_getCode_0 = t2.asm.Ob).apply(null, arguments);
    }, c_ = t2._emscripten_bind_PeSpheroid_getName_1 = function() {
      return (c_ = t2._emscripten_bind_PeSpheroid_getName_1 = t2.asm.Pb).apply(null, arguments);
    }, a_ = t2._emscripten_bind_PeSpheroid_getType_0 = function() {
      return (a_ = t2._emscripten_bind_PeSpheroid_getType_0 = t2.asm.Qb).apply(null, arguments);
    }, s_ = t2._emscripten_bind_PeUnit_getUnitFactor_0 = function() {
      return (s_ = t2._emscripten_bind_PeUnit_getUnitFactor_0 = t2.asm.Rb).apply(null, arguments);
    }, u_ = t2._emscripten_bind_PeUnit_getCode_0 = function() {
      return (u_ = t2._emscripten_bind_PeUnit_getCode_0 = t2.asm.Sb).apply(null, arguments);
    }, P_ = t2._emscripten_bind_PeUnit_getName_1 = function() {
      return (P_ = t2._emscripten_bind_PeUnit_getName_1 = t2.asm.Tb).apply(null, arguments);
    }, y_ = t2._emscripten_bind_PeUnit_getType_0 = function() {
      return (y_ = t2._emscripten_bind_PeUnit_getType_0 = t2.asm.Ub).apply(null, arguments);
    }, g_ = t2._emscripten_bind_PeVersion_version_string_0 = function() {
      return (g_ = t2._emscripten_bind_PeVersion_version_string_0 = t2.asm.Vb).apply(null, arguments);
    }, f_ = (t2._pe_getPeGTlistExtendedEntrySize = function() {
      return (t2._pe_getPeGTlistExtendedEntrySize = t2.asm.Wb).apply(null, arguments);
    }, t2._pe_getPeGTlistExtendedGTsSize = function() {
      return (t2._pe_getPeGTlistExtendedGTsSize = t2.asm.Xb).apply(null, arguments);
    }, t2._pe_getPeHorizonSize = function() {
      return (t2._pe_getPeHorizonSize = t2.asm.Yb).apply(null, arguments);
    }, t2._pe_geog_to_geog = function() {
      return (t2._pe_geog_to_geog = t2.asm.Zb).apply(null, arguments);
    }, t2._pe_geog_to_proj = function() {
      return (t2._pe_geog_to_proj = t2.asm._b).apply(null, arguments);
    }, t2._pe_geog_to_dd = function() {
      return (t2._pe_geog_to_dd = t2.asm.$b).apply(null, arguments);
    }, t2._pe_dd_to_geog = function() {
      return (t2._pe_dd_to_geog = t2.asm.ac).apply(null, arguments);
    }, t2._pe_geog_to_ddm = function() {
      return (t2._pe_geog_to_ddm = t2.asm.bc).apply(null, arguments);
    }, t2._pe_ddm_to_geog = function() {
      return (t2._pe_ddm_to_geog = t2.asm.cc).apply(null, arguments);
    }, t2._pe_geog_to_dms = function() {
      return (t2._pe_geog_to_dms = t2.asm.dc).apply(null, arguments);
    }, t2._pe_dms_to_geog = function() {
      return (t2._pe_dms_to_geog = t2.asm.ec).apply(null, arguments);
    }, t2._pe_geog_to_mgrs_extended = function() {
      return (t2._pe_geog_to_mgrs_extended = t2.asm.fc).apply(null, arguments);
    }, t2._pe_mgrs_to_geog_extended = function() {
      return (t2._pe_mgrs_to_geog_extended = t2.asm.gc).apply(null, arguments);
    }, t2._pe_geog_to_usng = function() {
      return (t2._pe_geog_to_usng = t2.asm.hc).apply(null, arguments);
    }, t2._pe_usng_to_geog = function() {
      return (t2._pe_usng_to_geog = t2.asm.ic).apply(null, arguments);
    }, t2._pe_geog_to_utm = function() {
      return (t2._pe_geog_to_utm = t2.asm.jc).apply(null, arguments);
    }, t2._pe_utm_to_geog = function() {
      return (t2._pe_utm_to_geog = t2.asm.kc).apply(null, arguments);
    }, t2._pe_object_to_string_ext = function() {
      return (t2._pe_object_to_string_ext = t2.asm.lc).apply(null, arguments);
    }, t2._pe_proj_to_geog_center = function() {
      return (t2._pe_proj_to_geog_center = t2.asm.mc).apply(null, arguments);
    }, t2._malloc = function() {
      return (f_ = t2._malloc = t2.asm.nc).apply(null, arguments);
    }), l_ = (t2._free = function() {
      return (t2._free = t2.asm.oc).apply(null, arguments);
    }, t2.__get_tzname = function() {
      return (l_ = t2.__get_tzname = t2.asm.pc).apply(null, arguments);
    }), m_ = t2.__get_daylight = function() {
      return (m_ = t2.__get_daylight = t2.asm.qc).apply(null, arguments);
    }, d_ = t2.__get_timezone = function() {
      return (d_ = t2.__get_timezone = t2.asm.rc).apply(null, arguments);
    };
    function E_(t3) {
      this.name = "ExitStatus", this.message = "Program terminated with exit(" + t3 + ")", this.status = t3;
    }
    function b_(n3) {
      function _3() {
        xt || (xt = true, t2.calledRun = true, T || (W(), V(), e3(t2), t2.onRuntimeInitialized && t2.onRuntimeInitialized(), k()));
      }
      K > 0 || (B(), K > 0 || (t2.setStatus ? (t2.setStatus("Running..."), setTimeout(function() {
        setTimeout(function() {
          t2.setStatus("");
        }, 1), _3();
      }, 1)) : _3()));
    }
    if (t2.getValue = O, t2.UTF8ToString = I, $ = function t3() {
      xt || b_(), xt || ($ = t3);
    }, t2.run = b_, t2.preInit)
      for (typeof t2.preInit == "function" && (t2.preInit = [t2.preInit]); t2.preInit.length > 0; )
        t2.preInit.pop()();
    function O_() {
    }
    function T_(t3) {
      return (t3 || O_).__cache__;
    }
    function S_(t3, e4) {
      var n3 = T_(e4), _3 = n3[t3];
      return _3 || ((_3 = Object.create((e4 || O_).prototype)).ptr = t3, n3[t3] = _3);
    }
    function N_(t3, e4) {
      return S_(t3.ptr, e4);
    }
    function h_(t3) {
      if (!t3.__destroy__)
        throw "Error: Cannot destroy object. (Did you create it yourself?)";
      t3.__destroy__(), delete T_(t3.__class__)[t3.ptr];
    }
    function M_(t3, e4) {
      return t3.ptr === e4.ptr;
    }
    function v_(t3) {
      return t3.ptr;
    }
    function D_(t3) {
      return t3.__class__;
    }
    b_(), O_.prototype = Object.create(O_.prototype), O_.prototype.constructor = O_, O_.prototype.__class__ = O_, O_.__cache__ = {}, t2.WrapperObject = O_, t2.getCache = T_, t2.wrapPointer = S_, t2.castObject = N_, t2.NULL = S_(0), t2.destroy = h_, t2.compare = M_, t2.getPointer = v_, t2.getClass = D_;
    var R_ = { buffer: 0, size: 0, pos: 0, temps: [], needed: 0, prepare: function() {
      if (R_.needed) {
        for (var e4 = 0; e4 < R_.temps.length; e4++)
          t2._free(R_.temps[e4]);
        R_.temps.length = 0, t2._free(R_.buffer), R_.buffer = 0, R_.size += R_.needed, R_.needed = 0;
      }
      R_.buffer || (R_.size += 128, R_.buffer = t2._malloc(R_.size), S(R_.buffer)), R_.pos = 0;
    }, alloc: function(e4, n3) {
      S(R_.buffer);
      var _3, r2 = n3.BYTES_PER_ELEMENT, o3 = e4.length * r2;
      return o3 = o3 + 7 & -8, R_.pos + o3 >= R_.size ? (S(o3 > 0), R_.needed += o3, _3 = t2._malloc(o3), R_.temps.push(_3)) : (_3 = R_.buffer + R_.pos, R_.pos += o3), _3;
    }, copy: function(t3, e4, n3) {
      switch (n3 >>>= 0, e4.BYTES_PER_ELEMENT) {
        case 2:
          n3 >>>= 1;
          break;
        case 4:
          n3 >>>= 2;
          break;
        case 8:
          n3 >>>= 3;
      }
      for (var _3 = 0; _3 < t3.length; _3++)
        e4[n3 + _3] = t3[_3];
    } };
    function A_(t3) {
      if (typeof t3 == "string") {
        var e4 = Ft(t3), n3 = R_.alloc(e4, h);
        return R_.copy(e4, h, n3), n3;
      }
      return t3;
    }
    function G_(t3) {
      if (typeof t3 == "object") {
        var e4 = R_.alloc(t3, h);
        return R_.copy(t3, h, e4), e4;
      }
      return t3;
    }
    function C_(t3) {
      if (typeof t3 == "object") {
        var e4 = R_.alloc(t3, v);
        return R_.copy(t3, v, e4), e4;
      }
      return t3;
    }
    function I_(t3) {
      if (typeof t3 == "object") {
        var e4 = R_.alloc(t3, D);
        return R_.copy(t3, D, e4), e4;
      }
      return t3;
    }
    function j_(t3) {
      if (typeof t3 == "object") {
        var e4 = R_.alloc(t3, R);
        return R_.copy(t3, R, e4), e4;
      }
      return t3;
    }
    function U_(t3) {
      if (typeof t3 == "object") {
        var e4 = R_.alloc(t3, A);
        return R_.copy(t3, A, e4), e4;
      }
      return t3;
    }
    function L_() {
      throw "cannot construct a PeObject, no constructor in IDL";
    }
    function Y_() {
      throw "cannot construct a PeCoordsys, no constructor in IDL";
    }
    function F_() {
      throw "cannot construct a VoidPtr, no constructor in IDL";
    }
    function x_() {
      throw "cannot construct a PeDatum, no constructor in IDL";
    }
    function w_() {
      throw "cannot construct a PeDefs, no constructor in IDL";
    }
    function H_() {
      throw "cannot construct a PeFactory, no constructor in IDL";
    }
    function X_(t3, e4, n3, _3, r2, o3) {
      t3 && typeof t3 == "object" && (t3 = t3.ptr), e4 && typeof e4 == "object" && (e4 = e4.ptr), n3 && typeof n3 == "object" && (n3 = n3.ptr), _3 && typeof _3 == "object" && (_3 = _3.ptr), r2 && typeof r2 == "object" && (r2 = r2.ptr), o3 && typeof o3 == "object" && (o3 = o3.ptr), this.ptr = Ie(t3, e4, n3, _3, r2, o3), T_(X_)[this.ptr] = this;
    }
    function z_() {
      throw "cannot construct a PeGeogcs, no constructor in IDL";
    }
    function Z_() {
      throw "cannot construct a PeGeogtran, no constructor in IDL";
    }
    function B_() {
      throw "cannot construct a PeGTlistExtended, no constructor in IDL";
    }
    function W_() {
      throw "cannot construct a PeGTlistExtendedEntry, no constructor in IDL";
    }
    function V_() {
      throw "cannot construct a PeGTlistExtendedGTs, no constructor in IDL";
    }
    function k_() {
      throw "cannot construct a PeHorizon, no constructor in IDL";
    }
    function q_(t3) {
      t3 && typeof t3 == "object" && (t3 = t3.ptr), this.ptr = Pn(t3), T_(q_)[this.ptr] = this;
    }
    function J_() {
      throw "cannot construct a PeNotationMgrs, no constructor in IDL";
    }
    function K_() {
      throw "cannot construct a PeNotationUtm, no constructor in IDL";
    }
    function $_() {
      throw "cannot construct a PeParameter, no constructor in IDL";
    }
    function Q_() {
      throw "cannot construct a PePCSInfo, no constructor in IDL";
    }
    function tr() {
      throw "cannot construct a PePrimem, no constructor in IDL";
    }
    function er() {
      throw "cannot construct a PeProjcs, no constructor in IDL";
    }
    function nr() {
      throw "cannot construct a PeSpheroid, no constructor in IDL";
    }
    function _r() {
      throw "cannot construct a PeUnit, no constructor in IDL";
    }
    function rr() {
      throw "cannot construct a PeVersion, no constructor in IDL";
    }
    return L_.prototype = Object.create(O_.prototype), L_.prototype.constructor = L_, L_.prototype.__class__ = L_, L_.__cache__ = {}, t2.PeObject = L_, L_.prototype.getCode = L_.prototype.getCode = function() {
      var t3 = this.ptr;
      return Xt(t3);
    }, L_.prototype.getName = L_.prototype.getName = function(t3) {
      var e4 = this.ptr;
      return R_.prepare(), typeof t3 == "object" && (t3 = G_(t3)), I(zt(e4, t3));
    }, L_.prototype.getType = L_.prototype.getType = function() {
      var t3 = this.ptr;
      return Zt(t3);
    }, Y_.prototype = Object.create(L_.prototype), Y_.prototype.constructor = Y_, Y_.prototype.__class__ = Y_, Y_.__cache__ = {}, t2.PeCoordsys = Y_, Y_.prototype.getCode = Y_.prototype.getCode = function() {
      var t3 = this.ptr;
      return Bt(t3);
    }, Y_.prototype.getName = Y_.prototype.getName = function(t3) {
      var e4 = this.ptr;
      return R_.prepare(), typeof t3 == "object" && (t3 = G_(t3)), I(Wt(e4, t3));
    }, Y_.prototype.getType = Y_.prototype.getType = function() {
      var t3 = this.ptr;
      return Vt(t3);
    }, F_.prototype = Object.create(O_.prototype), F_.prototype.constructor = F_, F_.prototype.__class__ = F_, F_.__cache__ = {}, t2.VoidPtr = F_, F_.prototype.__destroy__ = F_.prototype.__destroy__ = function() {
      var t3 = this.ptr;
      kt(t3);
    }, x_.prototype = Object.create(L_.prototype), x_.prototype.constructor = x_, x_.prototype.__class__ = x_, x_.__cache__ = {}, t2.PeDatum = x_, x_.prototype.getSpheroid = x_.prototype.getSpheroid = function() {
      var t3 = this.ptr;
      return S_(qt(t3), nr);
    }, x_.prototype.getCode = x_.prototype.getCode = function() {
      var t3 = this.ptr;
      return Jt(t3);
    }, x_.prototype.getName = x_.prototype.getName = function(t3) {
      var e4 = this.ptr;
      return R_.prepare(), typeof t3 == "object" && (t3 = G_(t3)), I(Kt(e4, t3));
    }, x_.prototype.getType = x_.prototype.getType = function() {
      var t3 = this.ptr;
      return $t(t3);
    }, w_.prototype = Object.create(O_.prototype), w_.prototype.constructor = w_, w_.prototype.__class__ = w_, w_.__cache__ = {}, t2.PeDefs = w_, w_.prototype.get_PE_BUFFER_MAX = w_.prototype.get_PE_BUFFER_MAX = function() {
      var t3 = this.ptr;
      return Qt(t3);
    }, Object.defineProperty(w_.prototype, "PE_BUFFER_MAX", { get: w_.prototype.get_PE_BUFFER_MAX }), w_.prototype.get_PE_NAME_MAX = w_.prototype.get_PE_NAME_MAX = function() {
      var t3 = this.ptr;
      return te(t3);
    }, Object.defineProperty(w_.prototype, "PE_NAME_MAX", { get: w_.prototype.get_PE_NAME_MAX }), w_.prototype.get_PE_MGRS_MAX = w_.prototype.get_PE_MGRS_MAX = function() {
      var t3 = this.ptr;
      return ee(t3);
    }, Object.defineProperty(w_.prototype, "PE_MGRS_MAX", { get: w_.prototype.get_PE_MGRS_MAX }), w_.prototype.get_PE_USNG_MAX = w_.prototype.get_PE_USNG_MAX = function() {
      var t3 = this.ptr;
      return ne(t3);
    }, Object.defineProperty(w_.prototype, "PE_USNG_MAX", { get: w_.prototype.get_PE_USNG_MAX }), w_.prototype.get_PE_DD_MAX = w_.prototype.get_PE_DD_MAX = function() {
      var t3 = this.ptr;
      return _e(t3);
    }, Object.defineProperty(w_.prototype, "PE_DD_MAX", { get: w_.prototype.get_PE_DD_MAX }), w_.prototype.get_PE_DMS_MAX = w_.prototype.get_PE_DMS_MAX = function() {
      var t3 = this.ptr;
      return re(t3);
    }, Object.defineProperty(w_.prototype, "PE_DMS_MAX", { get: w_.prototype.get_PE_DMS_MAX }), w_.prototype.get_PE_DDM_MAX = w_.prototype.get_PE_DDM_MAX = function() {
      var t3 = this.ptr;
      return oe(t3);
    }, Object.defineProperty(w_.prototype, "PE_DDM_MAX", { get: w_.prototype.get_PE_DDM_MAX }), w_.prototype.get_PE_UTM_MAX = w_.prototype.get_PE_UTM_MAX = function() {
      var t3 = this.ptr;
      return pe(t3);
    }, Object.defineProperty(w_.prototype, "PE_UTM_MAX", { get: w_.prototype.get_PE_UTM_MAX }), w_.prototype.get_PE_PARM_MAX = w_.prototype.get_PE_PARM_MAX = function() {
      var t3 = this.ptr;
      return ie(t3);
    }, Object.defineProperty(w_.prototype, "PE_PARM_MAX", { get: w_.prototype.get_PE_PARM_MAX }), w_.prototype.get_PE_TYPE_NONE = w_.prototype.get_PE_TYPE_NONE = function() {
      var t3 = this.ptr;
      return ce(t3);
    }, Object.defineProperty(w_.prototype, "PE_TYPE_NONE", { get: w_.prototype.get_PE_TYPE_NONE }), w_.prototype.get_PE_TYPE_GEOGCS = w_.prototype.get_PE_TYPE_GEOGCS = function() {
      var t3 = this.ptr;
      return ae(t3);
    }, Object.defineProperty(w_.prototype, "PE_TYPE_GEOGCS", { get: w_.prototype.get_PE_TYPE_GEOGCS }), w_.prototype.get_PE_TYPE_PROJCS = w_.prototype.get_PE_TYPE_PROJCS = function() {
      var t3 = this.ptr;
      return se(t3);
    }, Object.defineProperty(w_.prototype, "PE_TYPE_PROJCS", { get: w_.prototype.get_PE_TYPE_PROJCS }), w_.prototype.get_PE_TYPE_GEOGTRAN = w_.prototype.get_PE_TYPE_GEOGTRAN = function() {
      var t3 = this.ptr;
      return ue(t3);
    }, Object.defineProperty(w_.prototype, "PE_TYPE_GEOGTRAN", { get: w_.prototype.get_PE_TYPE_GEOGTRAN }), w_.prototype.get_PE_TYPE_COORDSYS = w_.prototype.get_PE_TYPE_COORDSYS = function() {
      var t3 = this.ptr;
      return Pe(t3);
    }, Object.defineProperty(w_.prototype, "PE_TYPE_COORDSYS", { get: w_.prototype.get_PE_TYPE_COORDSYS }), w_.prototype.get_PE_TYPE_UNIT = w_.prototype.get_PE_TYPE_UNIT = function() {
      var t3 = this.ptr;
      return ye(t3);
    }, Object.defineProperty(w_.prototype, "PE_TYPE_UNIT", { get: w_.prototype.get_PE_TYPE_UNIT }), w_.prototype.get_PE_TYPE_LINUNIT = w_.prototype.get_PE_TYPE_LINUNIT = function() {
      var t3 = this.ptr;
      return ge(t3);
    }, Object.defineProperty(w_.prototype, "PE_TYPE_LINUNIT", { get: w_.prototype.get_PE_TYPE_LINUNIT }), w_.prototype.get_PE_STR_OPTS_NONE = w_.prototype.get_PE_STR_OPTS_NONE = function() {
      var t3 = this.ptr;
      return fe(t3);
    }, Object.defineProperty(w_.prototype, "PE_STR_OPTS_NONE", { get: w_.prototype.get_PE_STR_OPTS_NONE }), w_.prototype.get_PE_STR_AUTH_NONE = w_.prototype.get_PE_STR_AUTH_NONE = function() {
      var t3 = this.ptr;
      return le(t3);
    }, Object.defineProperty(w_.prototype, "PE_STR_AUTH_NONE", { get: w_.prototype.get_PE_STR_AUTH_NONE }), w_.prototype.get_PE_STR_AUTH_TOP = w_.prototype.get_PE_STR_AUTH_TOP = function() {
      var t3 = this.ptr;
      return me(t3);
    }, Object.defineProperty(w_.prototype, "PE_STR_AUTH_TOP", { get: w_.prototype.get_PE_STR_AUTH_TOP }), w_.prototype.get_PE_STR_NAME_CANON = w_.prototype.get_PE_STR_NAME_CANON = function() {
      var t3 = this.ptr;
      return de(t3);
    }, Object.defineProperty(w_.prototype, "PE_STR_NAME_CANON", { get: w_.prototype.get_PE_STR_NAME_CANON }), w_.prototype.get_PE_PARM_X0 = w_.prototype.get_PE_PARM_X0 = function() {
      var t3 = this.ptr;
      return Ee(t3);
    }, Object.defineProperty(w_.prototype, "PE_PARM_X0", { get: w_.prototype.get_PE_PARM_X0 }), w_.prototype.get_PE_PARM_ND = w_.prototype.get_PE_PARM_ND = function() {
      var t3 = this.ptr;
      return be(t3);
    }, Object.defineProperty(w_.prototype, "PE_PARM_ND", { get: w_.prototype.get_PE_PARM_ND }), w_.prototype.get_PE_TRANSFORM_1_TO_2 = w_.prototype.get_PE_TRANSFORM_1_TO_2 = function() {
      var t3 = this.ptr;
      return Oe(t3);
    }, Object.defineProperty(w_.prototype, "PE_TRANSFORM_1_TO_2", { get: w_.prototype.get_PE_TRANSFORM_1_TO_2 }), w_.prototype.get_PE_TRANSFORM_2_TO_1 = w_.prototype.get_PE_TRANSFORM_2_TO_1 = function() {
      var t3 = this.ptr;
      return Te(t3);
    }, Object.defineProperty(w_.prototype, "PE_TRANSFORM_2_TO_1", { get: w_.prototype.get_PE_TRANSFORM_2_TO_1 }), w_.prototype.get_PE_TRANSFORM_P_TO_G = w_.prototype.get_PE_TRANSFORM_P_TO_G = function() {
      var t3 = this.ptr;
      return Se(t3);
    }, Object.defineProperty(w_.prototype, "PE_TRANSFORM_P_TO_G", { get: w_.prototype.get_PE_TRANSFORM_P_TO_G }), w_.prototype.get_PE_TRANSFORM_G_TO_P = w_.prototype.get_PE_TRANSFORM_G_TO_P = function() {
      var t3 = this.ptr;
      return Ne(t3);
    }, Object.defineProperty(w_.prototype, "PE_TRANSFORM_G_TO_P", { get: w_.prototype.get_PE_TRANSFORM_G_TO_P }), w_.prototype.get_PE_HORIZON_RECT = w_.prototype.get_PE_HORIZON_RECT = function() {
      var t3 = this.ptr;
      return he(t3);
    }, Object.defineProperty(w_.prototype, "PE_HORIZON_RECT", { get: w_.prototype.get_PE_HORIZON_RECT }), w_.prototype.get_PE_HORIZON_POLY = w_.prototype.get_PE_HORIZON_POLY = function() {
      var t3 = this.ptr;
      return Me(t3);
    }, Object.defineProperty(w_.prototype, "PE_HORIZON_POLY", { get: w_.prototype.get_PE_HORIZON_POLY }), w_.prototype.get_PE_HORIZON_LINE = w_.prototype.get_PE_HORIZON_LINE = function() {
      var t3 = this.ptr;
      return ve(t3);
    }, Object.defineProperty(w_.prototype, "PE_HORIZON_LINE", { get: w_.prototype.get_PE_HORIZON_LINE }), w_.prototype.get_PE_HORIZON_DELTA = w_.prototype.get_PE_HORIZON_DELTA = function() {
      var t3 = this.ptr;
      return De(t3);
    }, Object.defineProperty(w_.prototype, "PE_HORIZON_DELTA", { get: w_.prototype.get_PE_HORIZON_DELTA }), H_.prototype = Object.create(O_.prototype), H_.prototype.constructor = H_, H_.prototype.__class__ = H_, H_.__cache__ = {}, t2.PeFactory = H_, H_.prototype.initialize = H_.prototype.initialize = function(t3) {
      var e4 = this.ptr;
      R_.prepare(), t3 = t3 && typeof t3 == "object" ? t3.ptr : A_(t3), Re(e4, t3);
    }, H_.prototype.factoryByType = H_.prototype.factoryByType = function(t3, e4) {
      var n3 = this.ptr;
      return t3 && typeof t3 == "object" && (t3 = t3.ptr), e4 && typeof e4 == "object" && (e4 = e4.ptr), S_(Ae(n3, t3, e4), L_);
    }, H_.prototype.fromString = H_.prototype.fromString = function(t3, e4) {
      var n3 = this.ptr;
      return R_.prepare(), t3 && typeof t3 == "object" && (t3 = t3.ptr), e4 = e4 && typeof e4 == "object" ? e4.ptr : A_(e4), S_(Ge(n3, t3, e4), L_);
    }, H_.prototype.getCode = H_.prototype.getCode = function(t3) {
      var e4 = this.ptr;
      return t3 && typeof t3 == "object" && (t3 = t3.ptr), Ce(e4, t3);
    }, X_.prototype = Object.create(O_.prototype), X_.prototype.constructor = X_, X_.prototype.__class__ = X_, X_.__cache__ = {}, t2.PeGCSExtent = X_, X_.prototype.getLLon = X_.prototype.getLLon = function() {
      var t3 = this.ptr;
      return je(t3);
    }, X_.prototype.getSLat = X_.prototype.getSLat = function() {
      var t3 = this.ptr;
      return Ue(t3);
    }, X_.prototype.getRLon = X_.prototype.getRLon = function() {
      var t3 = this.ptr;
      return Le(t3);
    }, X_.prototype.getNLat = X_.prototype.getNLat = function() {
      var t3 = this.ptr;
      return Ye(t3);
    }, X_.prototype.__destroy__ = X_.prototype.__destroy__ = function() {
      var t3 = this.ptr;
      Fe(t3);
    }, z_.prototype = Object.create(Y_.prototype), z_.prototype.constructor = z_, z_.prototype.__class__ = z_, z_.__cache__ = {}, t2.PeGeogcs = z_, z_.prototype.getDatum = z_.prototype.getDatum = function() {
      var t3 = this.ptr;
      return S_(xe(t3), x_);
    }, z_.prototype.getPrimem = z_.prototype.getPrimem = function() {
      var t3 = this.ptr;
      return S_(we(t3), tr);
    }, z_.prototype.getUnit = z_.prototype.getUnit = function() {
      var t3 = this.ptr;
      return S_(He(t3), _r);
    }, z_.prototype.getCode = z_.prototype.getCode = function() {
      var t3 = this.ptr;
      return Xe(t3);
    }, z_.prototype.getName = z_.prototype.getName = function(t3) {
      var e4 = this.ptr;
      return R_.prepare(), typeof t3 == "object" && (t3 = G_(t3)), I(ze(e4, t3));
    }, z_.prototype.getType = z_.prototype.getType = function() {
      var t3 = this.ptr;
      return Ze(t3);
    }, Z_.prototype = Object.create(L_.prototype), Z_.prototype.constructor = Z_, Z_.prototype.__class__ = Z_, Z_.__cache__ = {}, t2.PeGeogtran = Z_, Z_.prototype.isEqual = Z_.prototype.isEqual = function(t3) {
      var e4 = this.ptr;
      return t3 && typeof t3 == "object" && (t3 = t3.ptr), !!Be(e4, t3);
    }, Z_.prototype.getGeogcs1 = Z_.prototype.getGeogcs1 = function() {
      var t3 = this.ptr;
      return S_(We(t3), z_);
    }, Z_.prototype.getGeogcs2 = Z_.prototype.getGeogcs2 = function() {
      var t3 = this.ptr;
      return S_(Ve(t3), z_);
    }, Z_.prototype.getParameters = Z_.prototype.getParameters = function() {
      var t3 = this.ptr;
      return ke(t3);
    }, Z_.prototype.loadConstants = Z_.prototype.loadConstants = function() {
      var t3 = this.ptr;
      return !!qe(t3);
    }, Z_.prototype.getCode = Z_.prototype.getCode = function() {
      var t3 = this.ptr;
      return Je(t3);
    }, Z_.prototype.getName = Z_.prototype.getName = function(t3) {
      var e4 = this.ptr;
      return R_.prepare(), typeof t3 == "object" && (t3 = G_(t3)), I(Ke(e4, t3));
    }, Z_.prototype.getType = Z_.prototype.getType = function() {
      var t3 = this.ptr;
      return $e(t3);
    }, B_.prototype = Object.create(O_.prototype), B_.prototype.constructor = B_, B_.prototype.__class__ = B_, B_.__cache__ = {}, t2.PeGTlistExtended = B_, B_.prototype.getGTlist = B_.prototype.getGTlist = function(t3, e4, n3, _3, r2, o3) {
      var p2 = this.ptr;
      return t3 && typeof t3 == "object" && (t3 = t3.ptr), e4 && typeof e4 == "object" && (e4 = e4.ptr), n3 && typeof n3 == "object" && (n3 = n3.ptr), _3 && typeof _3 == "object" && (_3 = _3.ptr), r2 && typeof r2 == "object" && (r2 = r2.ptr), o3 && typeof o3 == "object" && (o3 = o3.ptr), S_(Qe(p2, t3, e4, n3, _3, r2, o3), W_);
    }, B_.prototype.get_PE_GTLIST_OPTS_COMMON = B_.prototype.get_PE_GTLIST_OPTS_COMMON = function() {
      var t3 = this.ptr;
      return tn(t3);
    }, Object.defineProperty(B_.prototype, "PE_GTLIST_OPTS_COMMON", { get: B_.prototype.get_PE_GTLIST_OPTS_COMMON }), W_.prototype = Object.create(O_.prototype), W_.prototype.constructor = W_, W_.prototype.__class__ = W_, W_.__cache__ = {}, t2.PeGTlistExtendedEntry = W_, W_.prototype.getEntries = W_.prototype.getEntries = function() {
      var t3 = this.ptr;
      return S_(en(t3), V_);
    }, W_.prototype.getSteps = W_.prototype.getSteps = function() {
      var t3 = this.ptr;
      return nn(t3);
    }, W_.prototype.Delete = W_.prototype.Delete = function(t3) {
      var e4 = this.ptr;
      t3 && typeof t3 == "object" && (t3 = t3.ptr), _n(e4, t3);
    }, V_.prototype = Object.create(O_.prototype), V_.prototype.constructor = V_, V_.prototype.__class__ = V_, V_.__cache__ = {}, t2.PeGTlistExtendedGTs = V_, V_.prototype.getDirection = V_.prototype.getDirection = function() {
      var t3 = this.ptr;
      return rn(t3);
    }, V_.prototype.getGeogtran = V_.prototype.getGeogtran = function() {
      var t3 = this.ptr;
      return S_(on(t3), Z_);
    }, k_.prototype = Object.create(O_.prototype), k_.prototype.constructor = k_, k_.prototype.__class__ = k_, k_.__cache__ = {}, t2.PeHorizon = k_, k_.prototype.getNump = k_.prototype.getNump = function() {
      var t3 = this.ptr;
      return pn(t3);
    }, k_.prototype.getKind = k_.prototype.getKind = function() {
      var t3 = this.ptr;
      return cn(t3);
    }, k_.prototype.getInclusive = k_.prototype.getInclusive = function() {
      var t3 = this.ptr;
      return an(t3);
    }, k_.prototype.getSize = k_.prototype.getSize = function() {
      var t3 = this.ptr;
      return sn(t3);
    }, k_.prototype.getCoord = k_.prototype.getCoord = function() {
      var t3 = this.ptr;
      return un(t3);
    }, q_.prototype = Object.create(O_.prototype), q_.prototype.constructor = q_, q_.prototype.__class__ = q_, q_.__cache__ = {}, t2.PeInteger = q_, q_.prototype.get_val = q_.prototype.get_val = function() {
      var t3 = this.ptr;
      return yn(t3);
    }, q_.prototype.set_val = q_.prototype.set_val = function(t3) {
      var e4 = this.ptr;
      t3 && typeof t3 == "object" && (t3 = t3.ptr), gn(e4, t3);
    }, Object.defineProperty(q_.prototype, "val", { get: q_.prototype.get_val, set: q_.prototype.set_val }), q_.prototype.__destroy__ = q_.prototype.__destroy__ = function() {
      var t3 = this.ptr;
      fn(t3);
    }, J_.prototype = Object.create(O_.prototype), J_.prototype.constructor = J_, J_.prototype.__class__ = J_, J_.__cache__ = {}, t2.PeNotationMgrs = J_, J_.prototype.get_PE_MGRS_STYLE_NEW = J_.prototype.get_PE_MGRS_STYLE_NEW = function() {
      var t3 = this.ptr;
      return ln(t3);
    }, Object.defineProperty(J_.prototype, "PE_MGRS_STYLE_NEW", { get: J_.prototype.get_PE_MGRS_STYLE_NEW }), J_.prototype.get_PE_MGRS_STYLE_OLD = J_.prototype.get_PE_MGRS_STYLE_OLD = function() {
      var t3 = this.ptr;
      return mn(t3);
    }, Object.defineProperty(J_.prototype, "PE_MGRS_STYLE_OLD", { get: J_.prototype.get_PE_MGRS_STYLE_OLD }), J_.prototype.get_PE_MGRS_STYLE_AUTO = J_.prototype.get_PE_MGRS_STYLE_AUTO = function() {
      var t3 = this.ptr;
      return dn(t3);
    }, Object.defineProperty(J_.prototype, "PE_MGRS_STYLE_AUTO", { get: J_.prototype.get_PE_MGRS_STYLE_AUTO }), J_.prototype.get_PE_MGRS_180_ZONE_1_PLUS = J_.prototype.get_PE_MGRS_180_ZONE_1_PLUS = function() {
      var t3 = this.ptr;
      return En(t3);
    }, Object.defineProperty(J_.prototype, "PE_MGRS_180_ZONE_1_PLUS", { get: J_.prototype.get_PE_MGRS_180_ZONE_1_PLUS }), J_.prototype.get_PE_MGRS_ADD_SPACES = J_.prototype.get_PE_MGRS_ADD_SPACES = function() {
      var t3 = this.ptr;
      return bn(t3);
    }, Object.defineProperty(J_.prototype, "PE_MGRS_ADD_SPACES", { get: J_.prototype.get_PE_MGRS_ADD_SPACES }), K_.prototype = Object.create(O_.prototype), K_.prototype.constructor = K_, K_.prototype.__class__ = K_, K_.__cache__ = {}, t2.PeNotationUtm = K_, K_.prototype.get_PE_UTM_OPTS_NONE = K_.prototype.get_PE_UTM_OPTS_NONE = function() {
      var t3 = this.ptr;
      return On(t3);
    }, Object.defineProperty(K_.prototype, "PE_UTM_OPTS_NONE", { get: K_.prototype.get_PE_UTM_OPTS_NONE }), K_.prototype.get_PE_UTM_OPTS_NS = K_.prototype.get_PE_UTM_OPTS_NS = function() {
      var t3 = this.ptr;
      return Tn(t3);
    }, Object.defineProperty(K_.prototype, "PE_UTM_OPTS_NS", { get: K_.prototype.get_PE_UTM_OPTS_NS }), K_.prototype.get_PE_UTM_OPTS_NS_STRICT = K_.prototype.get_PE_UTM_OPTS_NS_STRICT = function() {
      var t3 = this.ptr;
      return Sn(t3);
    }, Object.defineProperty(K_.prototype, "PE_UTM_OPTS_NS_STRICT", { get: K_.prototype.get_PE_UTM_OPTS_NS_STRICT }), K_.prototype.get_PE_UTM_OPTS_ADD_SPACES = K_.prototype.get_PE_UTM_OPTS_ADD_SPACES = function() {
      var t3 = this.ptr;
      return Nn(t3);
    }, Object.defineProperty(K_.prototype, "PE_UTM_OPTS_ADD_SPACES", { get: K_.prototype.get_PE_UTM_OPTS_ADD_SPACES }), $_.prototype = Object.create(L_.prototype), $_.prototype.constructor = $_, $_.prototype.__class__ = $_, $_.__cache__ = {}, t2.PeParameter = $_, $_.prototype.getValue = $_.prototype.getValue = function() {
      var t3 = this.ptr;
      return hn(t3);
    }, $_.prototype.getCode = $_.prototype.getCode = function() {
      var t3 = this.ptr;
      return Mn(t3);
    }, $_.prototype.getName = $_.prototype.getName = function(t3) {
      var e4 = this.ptr;
      return R_.prepare(), typeof t3 == "object" && (t3 = G_(t3)), I(vn(e4, t3));
    }, $_.prototype.getType = $_.prototype.getType = function() {
      var t3 = this.ptr;
      return Dn(t3);
    }, Q_.prototype = Object.create(O_.prototype), Q_.prototype.constructor = Q_, Q_.prototype.__class__ = Q_, Q_.__cache__ = {}, t2.PePCSInfo = Q_, Q_.prototype.getCentralMeridian = Q_.prototype.getCentralMeridian = function() {
      var t3 = this.ptr;
      return Rn(t3);
    }, Q_.prototype.getDomainMinx = Q_.prototype.getDomainMinx = function() {
      var t3 = this.ptr;
      return An(t3);
    }, Q_.prototype.getDomainMiny = Q_.prototype.getDomainMiny = function() {
      var t3 = this.ptr;
      return Gn(t3);
    }, Q_.prototype.getDomainMaxx = Q_.prototype.getDomainMaxx = function() {
      var t3 = this.ptr;
      return Cn(t3);
    }, Q_.prototype.getDomainMaxy = Q_.prototype.getDomainMaxy = function() {
      var t3 = this.ptr;
      return In(t3);
    }, Q_.prototype.getNorthPoleLocation = Q_.prototype.getNorthPoleLocation = function() {
      var t3 = this.ptr;
      return jn(t3);
    }, Q_.prototype.getNorthPoleGeometry = Q_.prototype.getNorthPoleGeometry = function() {
      var t3 = this.ptr;
      return Un(t3);
    }, Q_.prototype.getSouthPoleLocation = Q_.prototype.getSouthPoleLocation = function() {
      var t3 = this.ptr;
      return Ln(t3);
    }, Q_.prototype.getSouthPoleGeometry = Q_.prototype.getSouthPoleGeometry = function() {
      var t3 = this.ptr;
      return Yn(t3);
    }, Q_.prototype.isDensificationNeeded = Q_.prototype.isDensificationNeeded = function() {
      var t3 = this.ptr;
      return !!Fn(t3);
    }, Q_.prototype.isGcsHorizonMultiOverlap = Q_.prototype.isGcsHorizonMultiOverlap = function() {
      var t3 = this.ptr;
      return !!xn(t3);
    }, Q_.prototype.isPannableRectangle = Q_.prototype.isPannableRectangle = function() {
      var t3 = this.ptr;
      return !!wn(t3);
    }, Q_.prototype.generate = Q_.prototype.generate = function(t3, e4) {
      var n3 = this.ptr;
      return t3 && typeof t3 == "object" && (t3 = t3.ptr), e4 && typeof e4 == "object" && (e4 = e4.ptr), S_(Hn(n3, t3, e4), Q_);
    }, Q_.prototype.get_PE_PCSINFO_OPTION_NONE = Q_.prototype.get_PE_PCSINFO_OPTION_NONE = function() {
      var t3 = this.ptr;
      return Xn(t3);
    }, Object.defineProperty(Q_.prototype, "PE_PCSINFO_OPTION_NONE", { get: Q_.prototype.get_PE_PCSINFO_OPTION_NONE }), Q_.prototype.get_PE_PCSINFO_OPTION_DOMAIN = Q_.prototype.get_PE_PCSINFO_OPTION_DOMAIN = function() {
      var t3 = this.ptr;
      return zn(t3);
    }, Object.defineProperty(Q_.prototype, "PE_PCSINFO_OPTION_DOMAIN", { get: Q_.prototype.get_PE_PCSINFO_OPTION_DOMAIN }), Q_.prototype.get_PE_POLE_OUTSIDE_BOUNDARY = Q_.prototype.get_PE_POLE_OUTSIDE_BOUNDARY = function() {
      var t3 = this.ptr;
      return Zn(t3);
    }, Object.defineProperty(Q_.prototype, "PE_POLE_OUTSIDE_BOUNDARY", { get: Q_.prototype.get_PE_POLE_OUTSIDE_BOUNDARY }), Q_.prototype.get_PE_POLE_POINT = Q_.prototype.get_PE_POLE_POINT = function() {
      var t3 = this.ptr;
      return Bn(t3);
    }, Object.defineProperty(Q_.prototype, "PE_POLE_POINT", { get: Q_.prototype.get_PE_POLE_POINT }), tr.prototype = Object.create(L_.prototype), tr.prototype.constructor = tr, tr.prototype.__class__ = tr, tr.__cache__ = {}, t2.PePrimem = tr, tr.prototype.getLongitude = tr.prototype.getLongitude = function() {
      var t3 = this.ptr;
      return Wn(t3);
    }, tr.prototype.getCode = tr.prototype.getCode = function() {
      var t3 = this.ptr;
      return Vn(t3);
    }, tr.prototype.getName = tr.prototype.getName = function(t3) {
      var e4 = this.ptr;
      return R_.prepare(), typeof t3 == "object" && (t3 = G_(t3)), I(kn(e4, t3));
    }, tr.prototype.getType = tr.prototype.getType = function() {
      var t3 = this.ptr;
      return qn(t3);
    }, er.prototype = Object.create(Y_.prototype), er.prototype.constructor = er, er.prototype.__class__ = er, er.__cache__ = {}, t2.PeProjcs = er, er.prototype.getGeogcs = er.prototype.getGeogcs = function() {
      var t3 = this.ptr;
      return S_(Jn(t3), z_);
    }, er.prototype.getParameters = er.prototype.getParameters = function() {
      var t3 = this.ptr;
      return Kn(t3);
    }, er.prototype.getUnit = er.prototype.getUnit = function() {
      var t3 = this.ptr;
      return S_($n(t3), _r);
    }, er.prototype.loadConstants = er.prototype.loadConstants = function() {
      var t3 = this.ptr;
      return !!Qn(t3);
    }, er.prototype.horizonGcsGenerate = er.prototype.horizonGcsGenerate = function() {
      var t3 = this.ptr;
      return S_(t_(t3), k_);
    }, er.prototype.horizonPcsGenerate = er.prototype.horizonPcsGenerate = function() {
      var t3 = this.ptr;
      return S_(e_(t3), k_);
    }, er.prototype.getCode = er.prototype.getCode = function() {
      var t3 = this.ptr;
      return n_(t3);
    }, er.prototype.getName = er.prototype.getName = function(t3) {
      var e4 = this.ptr;
      return R_.prepare(), typeof t3 == "object" && (t3 = G_(t3)), I(__(e4, t3));
    }, er.prototype.getType = er.prototype.getType = function() {
      var t3 = this.ptr;
      return r_(t3);
    }, nr.prototype = Object.create(L_.prototype), nr.prototype.constructor = nr, nr.prototype.__class__ = nr, nr.__cache__ = {}, t2.PeSpheroid = nr, nr.prototype.getAxis = nr.prototype.getAxis = function() {
      var t3 = this.ptr;
      return o_(t3);
    }, nr.prototype.getFlattening = nr.prototype.getFlattening = function() {
      var t3 = this.ptr;
      return p_(t3);
    }, nr.prototype.getCode = nr.prototype.getCode = function() {
      var t3 = this.ptr;
      return i_(t3);
    }, nr.prototype.getName = nr.prototype.getName = function(t3) {
      var e4 = this.ptr;
      return R_.prepare(), typeof t3 == "object" && (t3 = G_(t3)), I(c_(e4, t3));
    }, nr.prototype.getType = nr.prototype.getType = function() {
      var t3 = this.ptr;
      return a_(t3);
    }, _r.prototype = Object.create(L_.prototype), _r.prototype.constructor = _r, _r.prototype.__class__ = _r, _r.__cache__ = {}, t2.PeUnit = _r, _r.prototype.getUnitFactor = _r.prototype.getUnitFactor = function() {
      var t3 = this.ptr;
      return s_(t3);
    }, _r.prototype.getCode = _r.prototype.getCode = function() {
      var t3 = this.ptr;
      return u_(t3);
    }, _r.prototype.getName = _r.prototype.getName = function(t3) {
      var e4 = this.ptr;
      return R_.prepare(), typeof t3 == "object" && (t3 = G_(t3)), I(P_(e4, t3));
    }, _r.prototype.getType = _r.prototype.getType = function() {
      var t3 = this.ptr;
      return y_(t3);
    }, rr.prototype = Object.create(O_.prototype), rr.prototype.constructor = rr, rr.prototype.__class__ = rr, rr.__cache__ = {}, t2.PeVersion = rr, rr.prototype.version_string = rr.prototype.version_string = function() {
      var t3 = this.ptr;
      return I(g_(t3));
    }, t2.ensureCache = R_, t2.ensureString = A_, t2.ensureInt8 = G_, t2.ensureInt16 = C_, t2.ensureInt32 = I_, t2.ensureFloat32 = j_, t2.ensureFloat64 = U_, t2.ready;
  }, t.exports = _;
}), n = Object.freeze(Object.assign(Object.create(null), e, { default: e }));
export { n as p };
