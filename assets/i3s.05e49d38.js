import { o } from "./_commonjsHelpers.f2a458db.js";
var r = o(function(n, r2) {
  var t2, e = (t2 = typeof document != "undefined" && document.currentScript ? document.currentScript.src : void 0, function(n2) {
    var r3, e2 = (n2 = n2 || {}) !== void 0 ? n2 : {}, i = {};
    for (r3 in e2)
      e2.hasOwnProperty(r3) && (i[r3] = e2[r3]);
    var a = "./this.program", o2 = false, u = false;
    o2 = typeof window == "object", u = typeof importScripts == "function", typeof process == "object" && typeof process.versions == "object" && process.versions.node;
    var l, c = "";
    function f(n3) {
      return e2.locateFile ? e2.locateFile(n3, c) : c + n3;
    }
    (o2 || u) && (u ? c = self.location.href : document.currentScript && (c = document.currentScript.src), t2 && (c = t2), c = c.indexOf("blob:") !== 0 ? c.substr(0, c.lastIndexOf("/") + 1) : "", u && (l = function(n3) {
      var r4 = new XMLHttpRequest();
      return r4.open("GET", n3, false), r4.responseType = "arraybuffer", r4.send(null), new Uint8Array(r4.response);
    }));
    var s, d, y = e2.print || console.log.bind(console), m = e2.printErr || console.warn.bind(console);
    for (r3 in i)
      i.hasOwnProperty(r3) && (e2[r3] = i[r3]);
    i = null, e2.arguments && e2.arguments, e2.thisProgram && (a = e2.thisProgram), e2.quit && e2.quit, e2.wasmBinary && (s = e2.wasmBinary), e2.noExitRuntime && e2.noExitRuntime, typeof WebAssembly != "object" && m("no native wasm support detected");
    var p = new WebAssembly.Table({ initial: 904, maximum: 904, element: "anyfunc" }), _ = false, v = typeof TextDecoder != "undefined" ? new TextDecoder("utf8") : void 0;
    function g(n3, r4, t3) {
      for (var e3 = r4 + t3, i2 = r4; n3[i2] && !(i2 >= e3); )
        ++i2;
      if (i2 - r4 > 16 && n3.subarray && v)
        return v.decode(n3.subarray(r4, i2));
      for (var a2 = ""; r4 < i2; ) {
        var o3 = n3[r4++];
        if (128 & o3) {
          var u2 = 63 & n3[r4++];
          if ((224 & o3) != 192) {
            var l2 = 63 & n3[r4++];
            if ((o3 = (240 & o3) == 224 ? (15 & o3) << 12 | u2 << 6 | l2 : (7 & o3) << 18 | u2 << 12 | l2 << 6 | 63 & n3[r4++]) < 65536)
              a2 += String.fromCharCode(o3);
            else {
              var c2 = o3 - 65536;
              a2 += String.fromCharCode(55296 | c2 >> 10, 56320 | 1023 & c2);
            }
          } else
            a2 += String.fromCharCode((31 & o3) << 6 | u2);
        } else
          a2 += String.fromCharCode(o3);
      }
      return a2;
    }
    function E(n3, r4) {
      return n3 ? g(I, n3, r4) : "";
    }
    function h(n3, r4, t3, e3) {
      if (!(e3 > 0))
        return 0;
      for (var i2 = t3, a2 = t3 + e3 - 1, o3 = 0; o3 < n3.length; ++o3) {
        var u2 = n3.charCodeAt(o3);
        if (u2 >= 55296 && u2 <= 57343 && (u2 = 65536 + ((1023 & u2) << 10) | 1023 & n3.charCodeAt(++o3)), u2 <= 127) {
          if (t3 >= a2)
            break;
          r4[t3++] = u2;
        } else if (u2 <= 2047) {
          if (t3 + 1 >= a2)
            break;
          r4[t3++] = 192 | u2 >> 6, r4[t3++] = 128 | 63 & u2;
        } else if (u2 <= 65535) {
          if (t3 + 2 >= a2)
            break;
          r4[t3++] = 224 | u2 >> 12, r4[t3++] = 128 | u2 >> 6 & 63, r4[t3++] = 128 | 63 & u2;
        } else {
          if (t3 + 3 >= a2)
            break;
          r4[t3++] = 240 | u2 >> 18, r4[t3++] = 128 | u2 >> 12 & 63, r4[t3++] = 128 | u2 >> 6 & 63, r4[t3++] = 128 | 63 & u2;
        }
      }
      return r4[t3] = 0, t3 - i2;
    }
    function C(n3, r4, t3) {
      return h(n3, I, r4, t3);
    }
    function w(n3) {
      for (var r4 = 0, t3 = 0; t3 < n3.length; ++t3) {
        var e3 = n3.charCodeAt(t3);
        e3 >= 55296 && e3 <= 57343 && (e3 = 65536 + ((1023 & e3) << 10) | 1023 & n3.charCodeAt(++t3)), e3 <= 127 ? ++r4 : r4 += e3 <= 2047 ? 2 : e3 <= 65535 ? 3 : 4;
      }
      return r4;
    }
    var T = typeof TextDecoder != "undefined" ? new TextDecoder("utf-16le") : void 0;
    function O(n3) {
      for (var r4 = n3, t3 = r4 >> 1; W[t3]; )
        ++t3;
      if ((r4 = t3 << 1) - n3 > 32 && T)
        return T.decode(I.subarray(n3, r4));
      for (var e3 = 0, i2 = ""; ; ) {
        var a2 = W[n3 + 2 * e3 >> 1];
        if (a2 == 0)
          return i2;
        ++e3, i2 += String.fromCharCode(a2);
      }
    }
    function b(n3, r4, t3) {
      if (t3 === void 0 && (t3 = 2147483647), t3 < 2)
        return 0;
      for (var e3 = r4, i2 = (t3 -= 2) < 2 * n3.length ? t3 / 2 : n3.length, a2 = 0; a2 < i2; ++a2) {
        var o3 = n3.charCodeAt(a2);
        W[r4 >> 1] = o3, r4 += 2;
      }
      return W[r4 >> 1] = 0, r4 - e3;
    }
    function A(n3) {
      return 2 * n3.length;
    }
    function S(n3) {
      for (var r4 = 0, t3 = ""; ; ) {
        var e3 = j[n3 + 4 * r4 >> 2];
        if (e3 == 0)
          return t3;
        if (++r4, e3 >= 65536) {
          var i2 = e3 - 65536;
          t3 += String.fromCharCode(55296 | i2 >> 10, 56320 | 1023 & i2);
        } else
          t3 += String.fromCharCode(e3);
      }
    }
    function D(n3, r4, t3) {
      if (t3 === void 0 && (t3 = 2147483647), t3 < 4)
        return 0;
      for (var e3 = r4, i2 = e3 + t3 - 4, a2 = 0; a2 < n3.length; ++a2) {
        var o3 = n3.charCodeAt(a2);
        if (o3 >= 55296 && o3 <= 57343 && (o3 = 65536 + ((1023 & o3) << 10) | 1023 & n3.charCodeAt(++a2)), j[r4 >> 2] = o3, (r4 += 4) + 4 > i2)
          break;
      }
      return j[r4 >> 2] = 0, r4 - e3;
    }
    function N(n3) {
      for (var r4 = 0, t3 = 0; t3 < n3.length; ++t3) {
        var e3 = n3.charCodeAt(t3);
        e3 >= 55296 && e3 <= 57343 && ++t3, r4 += 4;
      }
      return r4;
    }
    function R(n3, r4) {
      M.set(n3, r4);
    }
    function P(n3, r4, t3) {
      for (var e3 = 0; e3 < n3.length; ++e3)
        M[r4++ >> 0] = n3.charCodeAt(e3);
      t3 || (M[r4 >> 0] = 0);
    }
    var F, M, I, W, U, j, k, L, Y, B = 65536;
    function x(n3, r4) {
      return n3 % r4 > 0 && (n3 += r4 - n3 % r4), n3;
    }
    function H(n3) {
      F = n3, e2.HEAP8 = M = new Int8Array(n3), e2.HEAP16 = W = new Int16Array(n3), e2.HEAP32 = j = new Int32Array(n3), e2.HEAPU8 = I = new Uint8Array(n3), e2.HEAPU16 = U = new Uint16Array(n3), e2.HEAPU32 = k = new Uint32Array(n3), e2.HEAPF32 = L = new Float32Array(n3), e2.HEAPF64 = Y = new Float64Array(n3);
    }
    var V = 5293504, G = 50464, z = e2.INITIAL_MEMORY || 16777216;
    function X(n3) {
      for (; n3.length > 0; ) {
        var r4 = n3.shift();
        if (typeof r4 != "function") {
          var t3 = r4.func;
          typeof t3 == "number" ? r4.arg === void 0 ? e2.dynCall_v(t3) : e2.dynCall_vi(t3, r4.arg) : t3(r4.arg === void 0 ? null : r4.arg);
        } else
          r4(e2);
      }
    }
    (d = e2.wasmMemory ? e2.wasmMemory : new WebAssembly.Memory({ initial: z / B, maximum: 2147483648 / B })) && (F = d.buffer), z = F.byteLength, H(F), j[G >> 2] = V;
    var K = [], Q = [], q = [], J = [];
    function Z() {
      if (e2.preRun)
        for (typeof e2.preRun == "function" && (e2.preRun = [e2.preRun]); e2.preRun.length; )
          tn(e2.preRun.shift());
      X(K);
    }
    function $() {
      X(Q);
    }
    function nn() {
      X(q);
    }
    function rn() {
      if (e2.postRun)
        for (typeof e2.postRun == "function" && (e2.postRun = [e2.postRun]); e2.postRun.length; )
          en(e2.postRun.shift());
      X(J);
    }
    function tn(n3) {
      K.unshift(n3);
    }
    function en(n3) {
      J.unshift(n3);
    }
    var an = Math.ceil, on = Math.floor, un = 0, ln = null;
    function cn(n3) {
      un++, e2.monitorRunDependencies && e2.monitorRunDependencies(un);
    }
    function fn(n3) {
      if (un--, e2.monitorRunDependencies && e2.monitorRunDependencies(un), un == 0 && ln) {
        var r4 = ln;
        ln = null, r4();
      }
    }
    function sn(n3) {
      throw e2.onAbort && e2.onAbort(n3), y(n3 += ""), m(n3), _ = true, n3 = "abort(" + n3 + "). Build with -s ASSERTIONS=1 for more info.", new WebAssembly.RuntimeError(n3);
    }
    function dn(n3, r4) {
      return String.prototype.startsWith ? n3.startsWith(r4) : n3.indexOf(r4) === 0;
    }
    e2.preloadedImages = {}, e2.preloadedAudios = {};
    var yn = "data:application/octet-stream;base64,";
    function mn(n3) {
      return dn(n3, yn);
    }
    var pn = "i3s.wasm";
    function _n() {
      try {
        if (s)
          return new Uint8Array(s);
        if (l)
          return l(pn);
        throw "both async and sync fetching of the wasm failed";
      } catch (m2) {
        sn(m2);
      }
    }
    function vn() {
      return s || !o2 && !u || typeof fetch != "function" ? new Promise(function(n3, r4) {
        n3(_n());
      }) : fetch(pn, { credentials: "same-origin" }).then(function(n3) {
        if (!n3.ok)
          throw "failed to load wasm binary file at '" + pn + "'";
        return n3.arrayBuffer();
      }).catch(function() {
        return _n();
      });
    }
    function gn() {
      var n3 = { env: ot, wasi_snapshot_preview1: ot };
      function r4(n4, r5) {
        var t4 = n4.exports;
        e2.asm = t4, fn();
      }
      function t3(n4) {
        r4(n4.instance);
      }
      function i2(r5) {
        return vn().then(function(r6) {
          return WebAssembly.instantiate(r6, n3);
        }).then(r5, function(n4) {
          m("failed to asynchronously prepare wasm: " + n4), sn(n4);
        });
      }
      function a2() {
        if (s || typeof WebAssembly.instantiateStreaming != "function" || mn(pn) || typeof fetch != "function")
          return i2(t3);
        fetch(pn, { credentials: "same-origin" }).then(function(r5) {
          return WebAssembly.instantiateStreaming(r5, n3).then(t3, function(n4) {
            m("wasm streaming compile failed: " + n4), m("falling back to ArrayBuffer instantiation"), i2(t3);
          });
        });
      }
      if (cn(), e2.instantiateWasm)
        try {
          return e2.instantiateWasm(n3, r4);
        } catch (o3) {
          return m("Module.instantiateWasm callback failed with error: " + o3), false;
        }
      return a2(), {};
    }
    function En(n3) {
      return ft(n3);
    }
    function hn(n3, r4) {
    }
    function Cn(n3, r4) {
      return hn();
    }
    function wn(n3, r4, t3) {
      throw n3;
    }
    function Tn(n3) {
      return j[dt() >> 2] = n3, n3;
    }
    function On(n3, r4) {
      return Tn(63), -1;
    }
    mn(pn) || (pn = f(pn)), Q.push({ func: function() {
      ct();
    } });
    var bn = { mappings: {}, buffers: [null, [], []], printChar: function(n3, r4) {
      var t3 = bn.buffers[n3];
      r4 === 0 || r4 === 10 ? ((n3 === 1 ? y : m)(g(t3, 0)), t3.length = 0) : t3.push(r4);
    }, varargs: void 0, get: function() {
      return bn.varargs += 4, j[bn.varargs - 4 >> 2];
    }, getStr: function(n3) {
      return E(n3);
    }, get64: function(n3, r4) {
      return n3;
    } };
    function An(n3, r4) {
      if ((0 | n3) == -1 || r4 === 0)
        return -28;
      var t3 = bn.mappings[n3];
      return t3 ? (r4 === t3.len && (bn.mappings[n3] = null, t3.allocated && st(t3.malloc)), 0) : 0;
    }
    function Sn(n3, r4) {
      return An(n3, r4);
    }
    var Dn = {};
    function Nn(n3) {
      for (; n3.length; ) {
        var r4 = n3.pop();
        n3.pop()(r4);
      }
    }
    function Rn(n3) {
      return this.fromWireType(k[n3 >> 2]);
    }
    var Pn = {}, Fn = {}, Mn = {}, In = 48, Wn = 57;
    function Un(n3) {
      if (n3 === void 0)
        return "_unknown";
      var r4 = (n3 = n3.replace(/[^a-zA-Z0-9_]/g, "$")).charCodeAt(0);
      return r4 >= In && r4 <= Wn ? "_" + n3 : n3;
    }
    function jn(n3, r4) {
      return n3 = Un(n3), new Function("body", "return function " + n3 + '() {\n    "use strict";    return body.apply(this, arguments);\n};\n')(r4);
    }
    function kn(n3, r4) {
      var t3 = jn(r4, function(n4) {
        this.name = r4, this.message = n4;
        var t4 = new Error(n4).stack;
        t4 !== void 0 && (this.stack = this.toString() + "\n" + t4.replace(/^Error(:[^\n]*)?\n/, ""));
      });
      return t3.prototype = Object.create(n3.prototype), t3.prototype.constructor = t3, t3.prototype.toString = function() {
        return this.message === void 0 ? this.name : this.name + ": " + this.message;
      }, t3;
    }
    var Ln = void 0;
    function Yn(n3) {
      throw new Ln(n3);
    }
    function Bn(n3, r4, t3) {
      function e3(r5) {
        var e4 = t3(r5);
        e4.length !== n3.length && Yn("Mismatched type converter count");
        for (var i3 = 0; i3 < n3.length; ++i3)
          Qn(n3[i3], e4[i3]);
      }
      n3.forEach(function(n4) {
        Mn[n4] = r4;
      });
      var i2 = new Array(r4.length), a2 = [], o3 = 0;
      r4.forEach(function(n4, r5) {
        Fn.hasOwnProperty(n4) ? i2[r5] = Fn[n4] : (a2.push(n4), Pn.hasOwnProperty(n4) || (Pn[n4] = []), Pn[n4].push(function() {
          i2[r5] = Fn[n4], ++o3 === a2.length && e3(i2);
        }));
      }), a2.length === 0 && e3(i2);
    }
    function xn(n3) {
      var r4 = Dn[n3];
      delete Dn[n3];
      var t3 = r4.rawConstructor, e3 = r4.rawDestructor, i2 = r4.fields;
      Bn([n3], i2.map(function(n4) {
        return n4.getterReturnType;
      }).concat(i2.map(function(n4) {
        return n4.setterArgumentType;
      })), function(n4) {
        var a2 = {};
        return i2.forEach(function(r5, t4) {
          var e4 = r5.fieldName, o3 = n4[t4], u2 = r5.getter, l2 = r5.getterContext, c2 = n4[t4 + i2.length], f2 = r5.setter, s2 = r5.setterContext;
          a2[e4] = { read: function(n5) {
            return o3.fromWireType(u2(l2, n5));
          }, write: function(n5, r6) {
            var t5 = [];
            f2(s2, n5, c2.toWireType(t5, r6)), Nn(t5);
          } };
        }), [{ name: r4.name, fromWireType: function(n5) {
          var r5 = {};
          for (var t4 in a2)
            r5[t4] = a2[t4].read(n5);
          return e3(n5), r5;
        }, toWireType: function(n5, r5) {
          for (var i3 in a2)
            if (!(i3 in r5))
              throw new TypeError("Missing field");
          var o3 = t3();
          for (i3 in a2)
            a2[i3].write(o3, r5[i3]);
          return n5 !== null && n5.push(e3, o3), o3;
        }, argPackAdvance: 8, readValueFromPointer: Rn, destructorFunction: e3 }];
      });
    }
    function Hn(n3) {
      switch (n3) {
        case 1:
          return 0;
        case 2:
          return 1;
        case 4:
          return 2;
        case 8:
          return 3;
        default:
          throw new TypeError("Unknown type size: " + n3);
      }
    }
    function Vn() {
      for (var n3 = new Array(256), r4 = 0; r4 < 256; ++r4)
        n3[r4] = String.fromCharCode(r4);
      Gn = n3;
    }
    var Gn = void 0;
    function zn(n3) {
      for (var r4 = "", t3 = n3; I[t3]; )
        r4 += Gn[I[t3++]];
      return r4;
    }
    var Xn = void 0;
    function Kn(n3) {
      throw new Xn(n3);
    }
    function Qn(n3, r4, t3) {
      if (t3 = t3 || {}, !("argPackAdvance" in r4))
        throw new TypeError("registerType registeredInstance requires argPackAdvance");
      var e3 = r4.name;
      if (n3 || Kn('type "' + e3 + '" must have a positive integer typeid pointer'), Fn.hasOwnProperty(n3)) {
        if (t3.ignoreDuplicateRegistrations)
          return;
        Kn("Cannot register type '" + e3 + "' twice");
      }
      if (Fn[n3] = r4, delete Mn[n3], Pn.hasOwnProperty(n3)) {
        var i2 = Pn[n3];
        delete Pn[n3], i2.forEach(function(n4) {
          n4();
        });
      }
    }
    function qn(n3, r4, t3, e3, i2) {
      var a2 = Hn(t3);
      Qn(n3, { name: r4 = zn(r4), fromWireType: function(n4) {
        return !!n4;
      }, toWireType: function(n4, r5) {
        return r5 ? e3 : i2;
      }, argPackAdvance: 8, readValueFromPointer: function(n4) {
        var e4;
        if (t3 === 1)
          e4 = M;
        else if (t3 === 2)
          e4 = W;
        else {
          if (t3 !== 4)
            throw new TypeError("Unknown boolean type size: " + r4);
          e4 = j;
        }
        return this.fromWireType(e4[n4 >> a2]);
      }, destructorFunction: null });
    }
    var Jn = [], Zn = [{}, { value: void 0 }, { value: null }, { value: true }, { value: false }];
    function $n(n3) {
      n3 > 4 && --Zn[n3].refcount == 0 && (Zn[n3] = void 0, Jn.push(n3));
    }
    function nr() {
      for (var n3 = 0, r4 = 5; r4 < Zn.length; ++r4)
        Zn[r4] !== void 0 && ++n3;
      return n3;
    }
    function rr() {
      for (var n3 = 5; n3 < Zn.length; ++n3)
        if (Zn[n3] !== void 0)
          return Zn[n3];
      return null;
    }
    function tr() {
      e2.count_emval_handles = nr, e2.get_first_emval = rr;
    }
    function er(n3) {
      switch (n3) {
        case void 0:
          return 1;
        case null:
          return 2;
        case true:
          return 3;
        case false:
          return 4;
        default:
          var r4 = Jn.length ? Jn.pop() : Zn.length;
          return Zn[r4] = { refcount: 1, value: n3 }, r4;
      }
    }
    function ir(n3, r4) {
      Qn(n3, { name: r4 = zn(r4), fromWireType: function(n4) {
        var r5 = Zn[n4].value;
        return $n(n4), r5;
      }, toWireType: function(n4, r5) {
        return er(r5);
      }, argPackAdvance: 8, readValueFromPointer: Rn, destructorFunction: null });
    }
    function ar(n3) {
      if (n3 === null)
        return "null";
      var r4 = typeof n3;
      return r4 === "object" || r4 === "array" || r4 === "function" ? n3.toString() : "" + n3;
    }
    function or(n3, r4) {
      switch (r4) {
        case 2:
          return function(n4) {
            return this.fromWireType(L[n4 >> 2]);
          };
        case 3:
          return function(n4) {
            return this.fromWireType(Y[n4 >> 3]);
          };
        default:
          throw new TypeError("Unknown float type: " + n3);
      }
    }
    function ur(n3, r4, t3) {
      var e3 = Hn(t3);
      Qn(n3, { name: r4 = zn(r4), fromWireType: function(n4) {
        return n4;
      }, toWireType: function(n4, r5) {
        if (typeof r5 != "number" && typeof r5 != "boolean")
          throw new TypeError('Cannot convert "' + ar(r5) + '" to ' + this.name);
        return r5;
      }, argPackAdvance: 8, readValueFromPointer: or(r4, e3), destructorFunction: null });
    }
    function lr(n3, r4) {
      if (!(n3 instanceof Function))
        throw new TypeError("new_ called with constructor type " + typeof n3 + " which is not a function");
      var t3 = jn(n3.name || "unknownFunctionName", function() {
      });
      t3.prototype = n3.prototype;
      var e3 = new t3(), i2 = n3.apply(e3, r4);
      return i2 instanceof Object ? i2 : e3;
    }
    function cr(n3, r4, t3, e3, i2) {
      var a2 = r4.length;
      a2 < 2 && Kn("argTypes array size mismatch! Must at least get return value and 'this' types!");
      for (var o3 = r4[1] !== null && t3 !== null, u2 = false, l2 = 1; l2 < r4.length; ++l2)
        if (r4[l2] !== null && r4[l2].destructorFunction === void 0) {
          u2 = true;
          break;
        }
      var c2 = r4[0].name !== "void", f2 = "", s2 = "";
      for (l2 = 0; l2 < a2 - 2; ++l2)
        f2 += (l2 !== 0 ? ", " : "") + "arg" + l2, s2 += (l2 !== 0 ? ", " : "") + "arg" + l2 + "Wired";
      var d2 = "return function " + Un(n3) + "(" + f2 + ") {\nif (arguments.length !== " + (a2 - 2) + ") {\nthrowBindingError('function " + n3 + " called with ' + arguments.length + ' arguments, expected " + (a2 - 2) + " args!');\n}\n";
      u2 && (d2 += "var destructors = [];\n");
      var y2 = u2 ? "destructors" : "null", m2 = ["throwBindingError", "invoker", "fn", "runDestructors", "retType", "classParam"], p2 = [Kn, e3, i2, Nn, r4[0], r4[1]];
      for (o3 && (d2 += "var thisWired = classParam.toWireType(" + y2 + ", this);\n"), l2 = 0; l2 < a2 - 2; ++l2)
        d2 += "var arg" + l2 + "Wired = argType" + l2 + ".toWireType(" + y2 + ", arg" + l2 + "); // " + r4[l2 + 2].name + "\n", m2.push("argType" + l2), p2.push(r4[l2 + 2]);
      if (o3 && (s2 = "thisWired" + (s2.length > 0 ? ", " : "") + s2), d2 += (c2 ? "var rv = " : "") + "invoker(fn" + (s2.length > 0 ? ", " : "") + s2 + ");\n", u2)
        d2 += "runDestructors(destructors);\n";
      else
        for (l2 = o3 ? 1 : 2; l2 < r4.length; ++l2) {
          var _2 = l2 === 1 ? "thisWired" : "arg" + (l2 - 2) + "Wired";
          r4[l2].destructorFunction !== null && (d2 += _2 + "_dtor(" + _2 + "); // " + r4[l2].name + "\n", m2.push(_2 + "_dtor"), p2.push(r4[l2].destructorFunction));
        }
      return c2 && (d2 += "var ret = retType.fromWireType(rv);\nreturn ret;\n"), d2 += "}\n", m2.push(d2), lr(Function, m2).apply(null, p2);
    }
    function fr(n3, r4, t3) {
      if (n3[r4].overloadTable === void 0) {
        var e3 = n3[r4];
        n3[r4] = function() {
          return n3[r4].overloadTable.hasOwnProperty(arguments.length) || Kn("Function '" + t3 + "' called with an invalid number of arguments (" + arguments.length + ") - expects one of (" + n3[r4].overloadTable + ")!"), n3[r4].overloadTable[arguments.length].apply(this, arguments);
        }, n3[r4].overloadTable = [], n3[r4].overloadTable[e3.argCount] = e3;
      }
    }
    function sr(n3, r4, t3) {
      e2.hasOwnProperty(n3) ? ((t3 === void 0 || e2[n3].overloadTable !== void 0 && e2[n3].overloadTable[t3] !== void 0) && Kn("Cannot register public name '" + n3 + "' twice"), fr(e2, n3, n3), e2.hasOwnProperty(t3) && Kn("Cannot register multiple overloads of a function with the same number of arguments (" + t3 + ")!"), e2[n3].overloadTable[t3] = r4) : (e2[n3] = r4, t3 !== void 0 && (e2[n3].numArguments = t3));
    }
    function dr(n3, r4) {
      for (var t3 = [], e3 = 0; e3 < n3; e3++)
        t3.push(j[(r4 >> 2) + e3]);
      return t3;
    }
    function yr(n3, r4, t3) {
      e2.hasOwnProperty(n3) || Yn("Replacing nonexistant public symbol"), e2[n3].overloadTable !== void 0 && t3 !== void 0 ? e2[n3].overloadTable[t3] = r4 : (e2[n3] = r4, e2[n3].argCount = t3);
    }
    function mr(n3, r4) {
      function t3(t4) {
        for (var e3 = [], i3 = 1; i3 < n3.length; ++i3)
          e3.push("a" + i3);
        var a2 = "return function dynCall_" + n3 + "_" + r4 + "(" + e3.join(", ") + ") {\n";
        return a2 += "    return dynCall(rawFunction" + (e3.length ? ", " : "") + e3.join(", ") + ");\n", a2 += "};\n", new Function("dynCall", "rawFunction", a2)(t4, r4);
      }
      n3 = zn(n3);
      var i2 = t3(e2["dynCall_" + n3]);
      return typeof i2 != "function" && Kn("unknown function pointer with signature " + n3 + ": " + r4), i2;
    }
    var pr = void 0;
    function _r(n3) {
      var r4 = yt(n3), t3 = zn(r4);
      return st(r4), t3;
    }
    function vr(n3, r4) {
      var t3 = [], e3 = {};
      function i2(n4) {
        e3[n4] || Fn[n4] || (Mn[n4] ? Mn[n4].forEach(i2) : (t3.push(n4), e3[n4] = true));
      }
      throw r4.forEach(i2), new pr(n3 + ": " + t3.map(_r).join([", "]));
    }
    function gr(n3, r4, t3, e3, i2, a2) {
      var o3 = dr(r4, t3);
      n3 = zn(n3), i2 = mr(e3, i2), sr(n3, function() {
        vr("Cannot call " + n3 + " due to unbound types", o3);
      }, r4 - 1), Bn([], o3, function(t4) {
        var e4 = [t4[0], null].concat(t4.slice(1));
        return yr(n3, cr(n3, e4, null, i2, a2), r4 - 1), [];
      });
    }
    function Er(n3, r4, t3) {
      switch (r4) {
        case 0:
          return t3 ? function(n4) {
            return M[n4];
          } : function(n4) {
            return I[n4];
          };
        case 1:
          return t3 ? function(n4) {
            return W[n4 >> 1];
          } : function(n4) {
            return U[n4 >> 1];
          };
        case 2:
          return t3 ? function(n4) {
            return j[n4 >> 2];
          } : function(n4) {
            return k[n4 >> 2];
          };
        default:
          throw new TypeError("Unknown integer type: " + n3);
      }
    }
    function hr(n3, r4, t3, e3, i2) {
      r4 = zn(r4), i2 === -1 && (i2 = 4294967295);
      var a2 = Hn(t3), o3 = function(n4) {
        return n4;
      };
      if (e3 === 0) {
        var u2 = 32 - 8 * t3;
        o3 = function(n4) {
          return n4 << u2 >>> u2;
        };
      }
      var l2 = r4.indexOf("unsigned") != -1;
      Qn(n3, { name: r4, fromWireType: o3, toWireType: function(n4, t4) {
        if (typeof t4 != "number" && typeof t4 != "boolean")
          throw new TypeError('Cannot convert "' + ar(t4) + '" to ' + this.name);
        if (t4 < e3 || t4 > i2)
          throw new TypeError('Passing a number "' + ar(t4) + '" from JS side to C/C++ side to an argument of type "' + r4 + '", which is outside the valid range [' + e3 + ", " + i2 + "]!");
        return l2 ? t4 >>> 0 : 0 | t4;
      }, argPackAdvance: 8, readValueFromPointer: Er(r4, a2, e3 !== 0), destructorFunction: null });
    }
    function Cr(n3, r4, t3) {
      var e3 = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array][r4];
      function i2(n4) {
        var r5 = k, t4 = r5[n4 >>= 2], i3 = r5[n4 + 1];
        return new e3(F, i3, t4);
      }
      Qn(n3, { name: t3 = zn(t3), fromWireType: i2, argPackAdvance: 8, readValueFromPointer: i2 }, { ignoreDuplicateRegistrations: true });
    }
    function wr(n3, r4) {
      var t3 = (r4 = zn(r4)) === "std::string";
      Qn(n3, { name: r4, fromWireType: function(n4) {
        var r5, e3 = k[n4 >> 2];
        if (t3) {
          var i2 = I[n4 + 4 + e3], a2 = 0;
          i2 != 0 && (a2 = i2, I[n4 + 4 + e3] = 0);
          for (var o3 = n4 + 4, u2 = 0; u2 <= e3; ++u2) {
            var l2 = n4 + 4 + u2;
            if (I[l2] == 0) {
              var c2 = E(o3);
              r5 === void 0 ? r5 = c2 : (r5 += String.fromCharCode(0), r5 += c2), o3 = l2 + 1;
            }
          }
          a2 != 0 && (I[n4 + 4 + e3] = a2);
        } else {
          var f2 = new Array(e3);
          for (u2 = 0; u2 < e3; ++u2)
            f2[u2] = String.fromCharCode(I[n4 + 4 + u2]);
          r5 = f2.join("");
        }
        return st(n4), r5;
      }, toWireType: function(n4, r5) {
        r5 instanceof ArrayBuffer && (r5 = new Uint8Array(r5));
        var e3 = typeof r5 == "string";
        e3 || r5 instanceof Uint8Array || r5 instanceof Uint8ClampedArray || r5 instanceof Int8Array || Kn("Cannot pass non-string to std::string");
        var i2 = (t3 && e3 ? function() {
          return w(r5);
        } : function() {
          return r5.length;
        })(), a2 = ft(4 + i2 + 1);
        if (k[a2 >> 2] = i2, t3 && e3)
          C(r5, a2 + 4, i2 + 1);
        else if (e3)
          for (var o3 = 0; o3 < i2; ++o3) {
            var u2 = r5.charCodeAt(o3);
            u2 > 255 && (st(a2), Kn("String has UTF-16 code units that do not fit in 8 bits")), I[a2 + 4 + o3] = u2;
          }
        else
          for (o3 = 0; o3 < i2; ++o3)
            I[a2 + 4 + o3] = r5[o3];
        return n4 !== null && n4.push(st, a2), a2;
      }, argPackAdvance: 8, readValueFromPointer: Rn, destructorFunction: function(n4) {
        st(n4);
      } });
    }
    function Tr(n3, r4, t3) {
      var e3, i2, a2, o3, u2;
      t3 = zn(t3), r4 === 2 ? (e3 = O, i2 = b, o3 = A, a2 = function() {
        return U;
      }, u2 = 1) : r4 === 4 && (e3 = S, i2 = D, o3 = N, a2 = function() {
        return k;
      }, u2 = 2), Qn(n3, { name: t3, fromWireType: function(n4) {
        var t4, i3 = k[n4 >> 2], o4 = a2(), l2 = o4[n4 + 4 + i3 * r4 >> u2], c2 = 0;
        l2 != 0 && (c2 = l2, o4[n4 + 4 + i3 * r4 >> u2] = 0);
        for (var f2 = n4 + 4, s2 = 0; s2 <= i3; ++s2) {
          var d2 = n4 + 4 + s2 * r4;
          if (o4[d2 >> u2] == 0) {
            var y2 = e3(f2);
            t4 === void 0 ? t4 = y2 : (t4 += String.fromCharCode(0), t4 += y2), f2 = d2 + r4;
          }
        }
        return c2 != 0 && (o4[n4 + 4 + i3 * r4 >> u2] = c2), st(n4), t4;
      }, toWireType: function(n4, e4) {
        typeof e4 != "string" && Kn("Cannot pass non-string to C++ string type " + t3);
        var a3 = o3(e4), l2 = ft(4 + a3 + r4);
        return k[l2 >> 2] = a3 >> u2, i2(e4, l2 + 4, a3 + r4), n4 !== null && n4.push(st, l2), l2;
      }, argPackAdvance: 8, readValueFromPointer: Rn, destructorFunction: function(n4) {
        st(n4);
      } });
    }
    function Or(n3, r4, t3, e3, i2, a2) {
      Dn[n3] = { name: zn(r4), rawConstructor: mr(t3, e3), rawDestructor: mr(i2, a2), fields: [] };
    }
    function br(n3, r4, t3, e3, i2, a2, o3, u2, l2, c2) {
      Dn[n3].fields.push({ fieldName: zn(r4), getterReturnType: t3, getter: mr(e3, i2), getterContext: a2, setterArgumentType: o3, setter: mr(u2, l2), setterContext: c2 });
    }
    function Ar(n3, r4) {
      Qn(n3, { isVoid: true, name: r4 = zn(r4), argPackAdvance: 0, fromWireType: function() {
      }, toWireType: function(n4, r5) {
      } });
    }
    function Sr(n3) {
      n3 > 4 && (Zn[n3].refcount += 1);
    }
    var Dr = {};
    function Nr(n3) {
      var r4 = Dr[n3];
      return r4 === void 0 ? zn(n3) : r4;
    }
    function Rr(n3) {
      return er(Nr(n3));
    }
    function Pr(n3, r4) {
      var t3 = Fn[n3];
      return t3 === void 0 && Kn(r4 + " has unknown type " + _r(n3)), t3;
    }
    function Fr(n3, r4) {
      return er((n3 = Pr(n3, "_emval_take_value")).readValueFromPointer(r4));
    }
    function Mr() {
      sn();
    }
    function Ir() {
      return 50464;
    }
    function Wr(n3, r4, t3) {
      I.copyWithin(n3, r4, r4 + t3);
    }
    function Ur() {
      return I.length;
    }
    function jr(n3) {
      try {
        return d.grow(n3 - F.byteLength + 65535 >>> 16), H(d.buffer), 1;
      } catch (r4) {
      }
    }
    function kr(n3) {
      n3 >>>= 0;
      var r4 = Ur(), t3 = 65536, e3 = 2147483648;
      if (n3 > e3)
        return false;
      for (var i2 = 16777216, a2 = 1; a2 <= 4; a2 *= 2) {
        var o3 = r4 * (1 + 0.2 / a2);
        if (o3 = Math.min(o3, n3 + 100663296), jr(Math.min(e3, x(Math.max(i2, n3, o3), t3))))
          return true;
      }
      return false;
    }
    var Lr = {};
    function Yr() {
      return a || "./this.program";
    }
    function Br() {
      if (!Br.strings) {
        var n3 = { USER: "web_user", LOGNAME: "web_user", PATH: "/", PWD: "/", HOME: "/home/web_user", LANG: (typeof navigator == "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8", _: Yr() };
        for (var r4 in Lr)
          n3[r4] = Lr[r4];
        var t3 = [];
        for (var r4 in n3)
          t3.push(r4 + "=" + n3[r4]);
        Br.strings = t3;
      }
      return Br.strings;
    }
    function xr(n3, r4) {
      var t3 = 0;
      return Br().forEach(function(e3, i2) {
        var a2 = r4 + t3;
        j[n3 + 4 * i2 >> 2] = a2, P(e3, a2), t3 += e3.length + 1;
      }), 0;
    }
    function Hr(n3, r4) {
      var t3 = Br();
      j[n3 >> 2] = t3.length;
      var e3 = 0;
      return t3.forEach(function(n4) {
        e3 += n4.length + 1;
      }), j[r4 >> 2] = e3, 0;
    }
    function Vr(n3) {
      return 0;
    }
    function Gr(n3, r4, t3, e3, i2) {
    }
    function zr(n3, r4, t3, e3) {
      for (var i2 = 0, a2 = 0; a2 < t3; a2++) {
        for (var o3 = j[r4 + 8 * a2 >> 2], u2 = j[r4 + (8 * a2 + 4) >> 2], l2 = 0; l2 < u2; l2++)
          bn.printChar(n3, I[o3 + l2]);
        i2 += u2;
      }
      return j[e3 >> 2] = i2, 0;
    }
    var Xr = { EPERM: 63, ENOENT: 44, ESRCH: 71, EINTR: 27, EIO: 29, ENXIO: 60, E2BIG: 1, ENOEXEC: 45, EBADF: 8, ECHILD: 12, EAGAIN: 6, EWOULDBLOCK: 6, ENOMEM: 48, EACCES: 2, EFAULT: 21, ENOTBLK: 105, EBUSY: 10, EEXIST: 20, EXDEV: 75, ENODEV: 43, ENOTDIR: 54, EISDIR: 31, EINVAL: 28, ENFILE: 41, EMFILE: 33, ENOTTY: 59, ETXTBSY: 74, EFBIG: 22, ENOSPC: 51, ESPIPE: 70, EROFS: 69, EMLINK: 34, EPIPE: 64, EDOM: 18, ERANGE: 68, ENOMSG: 49, EIDRM: 24, ECHRNG: 106, EL2NSYNC: 156, EL3HLT: 107, EL3RST: 108, ELNRNG: 109, EUNATCH: 110, ENOCSI: 111, EL2HLT: 112, EDEADLK: 16, ENOLCK: 46, EBADE: 113, EBADR: 114, EXFULL: 115, ENOANO: 104, EBADRQC: 103, EBADSLT: 102, EDEADLOCK: 16, EBFONT: 101, ENOSTR: 100, ENODATA: 116, ETIME: 117, ENOSR: 118, ENONET: 119, ENOPKG: 120, EREMOTE: 121, ENOLINK: 47, EADV: 122, ESRMNT: 123, ECOMM: 124, EPROTO: 65, EMULTIHOP: 36, EDOTDOT: 125, EBADMSG: 9, ENOTUNIQ: 126, EBADFD: 127, EREMCHG: 128, ELIBACC: 129, ELIBBAD: 130, ELIBSCN: 131, ELIBMAX: 132, ELIBEXEC: 133, ENOSYS: 52, ENOTEMPTY: 55, ENAMETOOLONG: 37, ELOOP: 32, EOPNOTSUPP: 138, EPFNOSUPPORT: 139, ECONNRESET: 15, ENOBUFS: 42, EAFNOSUPPORT: 5, EPROTOTYPE: 67, ENOTSOCK: 57, ENOPROTOOPT: 50, ESHUTDOWN: 140, ECONNREFUSED: 14, EADDRINUSE: 3, ECONNABORTED: 13, ENETUNREACH: 40, ENETDOWN: 38, ETIMEDOUT: 73, EHOSTDOWN: 142, EHOSTUNREACH: 23, EINPROGRESS: 26, EALREADY: 7, EDESTADDRREQ: 17, EMSGSIZE: 35, EPROTONOSUPPORT: 66, ESOCKTNOSUPPORT: 137, EADDRNOTAVAIL: 4, ENETRESET: 39, EISCONN: 30, ENOTCONN: 53, ETOOMANYREFS: 141, EUSERS: 136, EDQUOT: 19, ESTALE: 72, ENOTSUP: 138, ENOMEDIUM: 148, EILSEQ: 25, EOVERFLOW: 61, ECANCELED: 11, ENOTRECOVERABLE: 56, EOWNERDEAD: 62, ESTRPIPE: 135 };
    function Kr(n3) {
      return Tn(Xr.ENOSYS), -1;
    }
    function Qr(n3) {
      return (n3 = +n3) >= 0 ? +on(n3 + 0.5) : +an(n3 - 0.5);
    }
    function qr(n3) {
      return (n3 = +n3) >= 0 ? +on(n3 + 0.5) : +an(n3 - 0.5);
    }
    function Jr(n3) {
    }
    function Zr(n3) {
      return n3 % 4 == 0 && (n3 % 100 != 0 || n3 % 400 == 0);
    }
    function $r(n3, r4) {
      for (var t3 = 0, e3 = 0; e3 <= r4; t3 += n3[e3++])
        ;
      return t3;
    }
    var nt = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], rt = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    function tt(n3, r4) {
      for (var t3 = new Date(n3.getTime()); r4 > 0; ) {
        var e3 = Zr(t3.getFullYear()), i2 = t3.getMonth(), a2 = (e3 ? nt : rt)[i2];
        if (!(r4 > a2 - t3.getDate()))
          return t3.setDate(t3.getDate() + r4), t3;
        r4 -= a2 - t3.getDate() + 1, t3.setDate(1), i2 < 11 ? t3.setMonth(i2 + 1) : (t3.setMonth(0), t3.setFullYear(t3.getFullYear() + 1));
      }
      return t3;
    }
    function et(n3, r4, t3, e3) {
      var i2 = j[e3 + 40 >> 2], a2 = { tm_sec: j[e3 >> 2], tm_min: j[e3 + 4 >> 2], tm_hour: j[e3 + 8 >> 2], tm_mday: j[e3 + 12 >> 2], tm_mon: j[e3 + 16 >> 2], tm_year: j[e3 + 20 >> 2], tm_wday: j[e3 + 24 >> 2], tm_yday: j[e3 + 28 >> 2], tm_isdst: j[e3 + 32 >> 2], tm_gmtoff: j[e3 + 36 >> 2], tm_zone: i2 ? E(i2) : "" }, o3 = E(t3), u2 = { "%c": "%a %b %d %H:%M:%S %Y", "%D": "%m/%d/%y", "%F": "%Y-%m-%d", "%h": "%b", "%r": "%I:%M:%S %p", "%R": "%H:%M", "%T": "%H:%M:%S", "%x": "%m/%d/%y", "%X": "%H:%M:%S", "%Ec": "%c", "%EC": "%C", "%Ex": "%m/%d/%y", "%EX": "%H:%M:%S", "%Ey": "%y", "%EY": "%Y", "%Od": "%d", "%Oe": "%e", "%OH": "%H", "%OI": "%I", "%Om": "%m", "%OM": "%M", "%OS": "%S", "%Ou": "%u", "%OU": "%U", "%OV": "%V", "%Ow": "%w", "%OW": "%W", "%Oy": "%y" };
      for (var l2 in u2)
        o3 = o3.replace(new RegExp(l2, "g"), u2[l2]);
      var c2 = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], f2 = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      function s2(n4, r5, t4) {
        for (var e4 = typeof n4 == "number" ? n4.toString() : n4 || ""; e4.length < r5; )
          e4 = t4[0] + e4;
        return e4;
      }
      function d2(n4, r5) {
        return s2(n4, r5, "0");
      }
      function y2(n4, r5) {
        function t4(n5) {
          return n5 < 0 ? -1 : n5 > 0 ? 1 : 0;
        }
        var e4;
        return (e4 = t4(n4.getFullYear() - r5.getFullYear())) === 0 && (e4 = t4(n4.getMonth() - r5.getMonth())) === 0 && (e4 = t4(n4.getDate() - r5.getDate())), e4;
      }
      function m2(n4) {
        switch (n4.getDay()) {
          case 0:
            return new Date(n4.getFullYear() - 1, 11, 29);
          case 1:
            return n4;
          case 2:
            return new Date(n4.getFullYear(), 0, 3);
          case 3:
            return new Date(n4.getFullYear(), 0, 2);
          case 4:
            return new Date(n4.getFullYear(), 0, 1);
          case 5:
            return new Date(n4.getFullYear() - 1, 11, 31);
          case 6:
            return new Date(n4.getFullYear() - 1, 11, 30);
        }
      }
      function p2(n4) {
        var r5 = tt(new Date(n4.tm_year + 1900, 0, 1), n4.tm_yday), t4 = new Date(r5.getFullYear(), 0, 4), e4 = new Date(r5.getFullYear() + 1, 0, 4), i3 = m2(t4), a3 = m2(e4);
        return y2(i3, r5) <= 0 ? y2(a3, r5) <= 0 ? r5.getFullYear() + 1 : r5.getFullYear() : r5.getFullYear() - 1;
      }
      var _2 = { "%a": function(n4) {
        return c2[n4.tm_wday].substring(0, 3);
      }, "%A": function(n4) {
        return c2[n4.tm_wday];
      }, "%b": function(n4) {
        return f2[n4.tm_mon].substring(0, 3);
      }, "%B": function(n4) {
        return f2[n4.tm_mon];
      }, "%C": function(n4) {
        return d2((n4.tm_year + 1900) / 100 | 0, 2);
      }, "%d": function(n4) {
        return d2(n4.tm_mday, 2);
      }, "%e": function(n4) {
        return s2(n4.tm_mday, 2, " ");
      }, "%g": function(n4) {
        return p2(n4).toString().substring(2);
      }, "%G": function(n4) {
        return p2(n4);
      }, "%H": function(n4) {
        return d2(n4.tm_hour, 2);
      }, "%I": function(n4) {
        var r5 = n4.tm_hour;
        return r5 == 0 ? r5 = 12 : r5 > 12 && (r5 -= 12), d2(r5, 2);
      }, "%j": function(n4) {
        return d2(n4.tm_mday + $r(Zr(n4.tm_year + 1900) ? nt : rt, n4.tm_mon - 1), 3);
      }, "%m": function(n4) {
        return d2(n4.tm_mon + 1, 2);
      }, "%M": function(n4) {
        return d2(n4.tm_min, 2);
      }, "%n": function() {
        return "\n";
      }, "%p": function(n4) {
        return n4.tm_hour >= 0 && n4.tm_hour < 12 ? "AM" : "PM";
      }, "%S": function(n4) {
        return d2(n4.tm_sec, 2);
      }, "%t": function() {
        return "	";
      }, "%u": function(n4) {
        return n4.tm_wday || 7;
      }, "%U": function(n4) {
        var r5 = new Date(n4.tm_year + 1900, 0, 1), t4 = r5.getDay() === 0 ? r5 : tt(r5, 7 - r5.getDay()), e4 = new Date(n4.tm_year + 1900, n4.tm_mon, n4.tm_mday);
        if (y2(t4, e4) < 0) {
          var i3 = $r(Zr(e4.getFullYear()) ? nt : rt, e4.getMonth() - 1) - 31, a3 = 31 - t4.getDate() + i3 + e4.getDate();
          return d2(Math.ceil(a3 / 7), 2);
        }
        return y2(t4, r5) === 0 ? "01" : "00";
      }, "%V": function(n4) {
        var r5, t4 = new Date(n4.tm_year + 1900, 0, 4), e4 = new Date(n4.tm_year + 1901, 0, 4), i3 = m2(t4), a3 = m2(e4), o4 = tt(new Date(n4.tm_year + 1900, 0, 1), n4.tm_yday);
        return y2(o4, i3) < 0 ? "53" : y2(a3, o4) <= 0 ? "01" : (r5 = i3.getFullYear() < n4.tm_year + 1900 ? n4.tm_yday + 32 - i3.getDate() : n4.tm_yday + 1 - i3.getDate(), d2(Math.ceil(r5 / 7), 2));
      }, "%w": function(n4) {
        return n4.tm_wday;
      }, "%W": function(n4) {
        var r5 = new Date(n4.tm_year, 0, 1), t4 = r5.getDay() === 1 ? r5 : tt(r5, r5.getDay() === 0 ? 1 : 7 - r5.getDay() + 1), e4 = new Date(n4.tm_year + 1900, n4.tm_mon, n4.tm_mday);
        if (y2(t4, e4) < 0) {
          var i3 = $r(Zr(e4.getFullYear()) ? nt : rt, e4.getMonth() - 1) - 31, a3 = 31 - t4.getDate() + i3 + e4.getDate();
          return d2(Math.ceil(a3 / 7), 2);
        }
        return y2(t4, r5) === 0 ? "01" : "00";
      }, "%y": function(n4) {
        return (n4.tm_year + 1900).toString().substring(2);
      }, "%Y": function(n4) {
        return n4.tm_year + 1900;
      }, "%z": function(n4) {
        var r5 = n4.tm_gmtoff, t4 = r5 >= 0;
        return r5 = (r5 = Math.abs(r5) / 60) / 60 * 100 + r5 % 60, (t4 ? "+" : "-") + String("0000" + r5).slice(-4);
      }, "%Z": function(n4) {
        return n4.tm_zone;
      }, "%%": function() {
        return "%";
      } };
      for (var l2 in _2)
        o3.indexOf(l2) >= 0 && (o3 = o3.replace(new RegExp(l2, "g"), _2[l2](a2)));
      var v2 = at(o3, false);
      return v2.length > r4 ? 0 : (R(v2, n3), v2.length - 1);
    }
    function it(n3, r4, t3, e3) {
      return et(n3, r4, t3, e3);
    }
    function at(n3, r4, t3) {
      var e3 = t3 > 0 ? t3 : w(n3) + 1, i2 = new Array(e3), a2 = h(n3, i2, 0, i2.length);
      return r4 && (i2.length = a2), i2;
    }
    Ln = e2.InternalError = kn(Error, "InternalError"), Vn(), Xn = e2.BindingError = kn(Error, "BindingError"), tr(), pr = e2.UnboundTypeError = kn(Error, "UnboundTypeError");
    var ot = { __cxa_allocate_exception: En, __cxa_atexit: Cn, __cxa_throw: wn, __map_file: On, __sys_munmap: Sn, _embind_finalize_value_object: xn, _embind_register_bool: qn, _embind_register_emval: ir, _embind_register_float: ur, _embind_register_function: gr, _embind_register_integer: hr, _embind_register_memory_view: Cr, _embind_register_std_string: wr, _embind_register_std_wstring: Tr, _embind_register_value_object: Or, _embind_register_value_object_field: br, _embind_register_void: Ar, _emval_decref: $n, _emval_incref: Sr, _emval_new_cstring: Rr, _emval_take_value: Fr, abort: Mr, emscripten_get_sbrk_ptr: Ir, emscripten_memcpy_big: Wr, emscripten_resize_heap: kr, environ_get: xr, environ_sizes_get: Hr, fd_close: Vr, fd_seek: Gr, fd_write: zr, memory: d, raise: Kr, round: Qr, roundf: qr, setTempRet0: Jr, strftime_l: it, table: p }, ut = gn();
    e2.asm = ut;
    var lt, ct = e2.___wasm_call_ctors = function() {
      return (ct = e2.___wasm_call_ctors = e2.asm.__wasm_call_ctors).apply(null, arguments);
    }, ft = e2._malloc = function() {
      return (ft = e2._malloc = e2.asm.malloc).apply(null, arguments);
    }, st = e2._free = function() {
      return (st = e2._free = e2.asm.free).apply(null, arguments);
    }, dt = e2.___errno_location = function() {
      return (dt = e2.___errno_location = e2.asm.__errno_location).apply(null, arguments);
    }, yt = (e2._setThrew = function() {
      return (e2._setThrew = e2.asm.setThrew).apply(null, arguments);
    }, e2.___getTypeName = function() {
      return (yt = e2.___getTypeName = e2.asm.__getTypeName).apply(null, arguments);
    });
    function mt(n3) {
      function r4() {
        lt || (lt = true, e2.calledRun = true, _ || ($(), nn(), e2.onRuntimeInitialized && e2.onRuntimeInitialized(), rn()));
      }
      un > 0 || (Z(), un > 0 || (e2.setStatus ? (e2.setStatus("Running..."), setTimeout(function() {
        setTimeout(function() {
          e2.setStatus("");
        }, 1), r4();
      }, 1)) : r4()));
    }
    if (e2.___embind_register_native_and_builtin_types = function() {
      return (e2.___embind_register_native_and_builtin_types = e2.asm.__embind_register_native_and_builtin_types).apply(null, arguments);
    }, e2.stackSave = function() {
      return (e2.stackSave = e2.asm.stackSave).apply(null, arguments);
    }, e2.stackAlloc = function() {
      return (e2.stackAlloc = e2.asm.stackAlloc).apply(null, arguments);
    }, e2.stackRestore = function() {
      return (e2.stackRestore = e2.asm.stackRestore).apply(null, arguments);
    }, e2.__growWasmMemory = function() {
      return (e2.__growWasmMemory = e2.asm.__growWasmMemory).apply(null, arguments);
    }, e2.dynCall_ii = function() {
      return (e2.dynCall_ii = e2.asm.dynCall_ii).apply(null, arguments);
    }, e2.dynCall_i = function() {
      return (e2.dynCall_i = e2.asm.dynCall_i).apply(null, arguments);
    }, e2.dynCall_vi = function() {
      return (e2.dynCall_vi = e2.asm.dynCall_vi).apply(null, arguments);
    }, e2.dynCall_dii = function() {
      return (e2.dynCall_dii = e2.asm.dynCall_dii).apply(null, arguments);
    }, e2.dynCall_viid = function() {
      return (e2.dynCall_viid = e2.asm.dynCall_viid).apply(null, arguments);
    }, e2.dynCall_fii = function() {
      return (e2.dynCall_fii = e2.asm.dynCall_fii).apply(null, arguments);
    }, e2.dynCall_viif = function() {
      return (e2.dynCall_viif = e2.asm.dynCall_viif).apply(null, arguments);
    }, e2.dynCall_iii = function() {
      return (e2.dynCall_iii = e2.asm.dynCall_iii).apply(null, arguments);
    }, e2.dynCall_viii = function() {
      return (e2.dynCall_viii = e2.asm.dynCall_viii).apply(null, arguments);
    }, e2.dynCall_vii = function() {
      return (e2.dynCall_vii = e2.asm.dynCall_vii).apply(null, arguments);
    }, e2.dynCall_viiiii = function() {
      return (e2.dynCall_viiiii = e2.asm.dynCall_viiiii).apply(null, arguments);
    }, e2.dynCall_viiii = function() {
      return (e2.dynCall_viiii = e2.asm.dynCall_viiii).apply(null, arguments);
    }, e2.dynCall_iiiiiiiiidiii = function() {
      return (e2.dynCall_iiiiiiiiidiii = e2.asm.dynCall_iiiiiiiiidiii).apply(null, arguments);
    }, e2.dynCall_iiiiiiiidiii = function() {
      return (e2.dynCall_iiiiiiiidiii = e2.asm.dynCall_iiiiiiiidiii).apply(null, arguments);
    }, e2.dynCall_iiii = function() {
      return (e2.dynCall_iiii = e2.asm.dynCall_iiii).apply(null, arguments);
    }, e2.dynCall_v = function() {
      return (e2.dynCall_v = e2.asm.dynCall_v).apply(null, arguments);
    }, e2.dynCall_vij = function() {
      return (e2.dynCall_vij = e2.asm.dynCall_vij).apply(null, arguments);
    }, e2.dynCall_iiiiiiii = function() {
      return (e2.dynCall_iiiiiiii = e2.asm.dynCall_iiiiiiii).apply(null, arguments);
    }, e2.dynCall_iiiii = function() {
      return (e2.dynCall_iiiii = e2.asm.dynCall_iiiii).apply(null, arguments);
    }, e2.dynCall_iif = function() {
      return (e2.dynCall_iif = e2.asm.dynCall_iif).apply(null, arguments);
    }, e2.dynCall_viijii = function() {
      return (e2.dynCall_viijii = e2.asm.dynCall_viijii).apply(null, arguments);
    }, e2.dynCall_iiiiii = function() {
      return (e2.dynCall_iiiiii = e2.asm.dynCall_iiiiii).apply(null, arguments);
    }, e2.dynCall_viiiiiiddi = function() {
      return (e2.dynCall_viiiiiiddi = e2.asm.dynCall_viiiiiiddi).apply(null, arguments);
    }, e2.dynCall_iiiiiii = function() {
      return (e2.dynCall_iiiiiii = e2.asm.dynCall_iiiiiii).apply(null, arguments);
    }, e2.dynCall_jiji = function() {
      return (e2.dynCall_jiji = e2.asm.dynCall_jiji).apply(null, arguments);
    }, e2.dynCall_iidiiii = function() {
      return (e2.dynCall_iidiiii = e2.asm.dynCall_iidiiii).apply(null, arguments);
    }, e2.dynCall_iiiiiiiii = function() {
      return (e2.dynCall_iiiiiiiii = e2.asm.dynCall_iiiiiiiii).apply(null, arguments);
    }, e2.dynCall_iiiiij = function() {
      return (e2.dynCall_iiiiij = e2.asm.dynCall_iiiiij).apply(null, arguments);
    }, e2.dynCall_iiiiid = function() {
      return (e2.dynCall_iiiiid = e2.asm.dynCall_iiiiid).apply(null, arguments);
    }, e2.dynCall_iiiiijj = function() {
      return (e2.dynCall_iiiiijj = e2.asm.dynCall_iiiiijj).apply(null, arguments);
    }, e2.dynCall_iiiiiijj = function() {
      return (e2.dynCall_iiiiiijj = e2.asm.dynCall_iiiiiijj).apply(null, arguments);
    }, e2.dynCall_viiiiii = function() {
      return (e2.dynCall_viiiiii = e2.asm.dynCall_viiiiii).apply(null, arguments);
    }, e2.asm = ut, e2.then = function(n3) {
      if (lt)
        n3(e2);
      else {
        var r4 = e2.onRuntimeInitialized;
        e2.onRuntimeInitialized = function() {
          r4 && r4(), n3(e2);
        };
      }
      return e2;
    }, ln = function n3() {
      lt || mt(), lt || (ln = n3);
    }, e2.run = mt, e2.preInit)
      for (typeof e2.preInit == "function" && (e2.preInit = [e2.preInit]); e2.preInit.length > 0; )
        e2.preInit.pop()();
    return mt(), n2;
  });
  n.exports = e;
}), t = Object.freeze(Object.assign(Object.create(null), r, { default: r }));
export { t as i };
