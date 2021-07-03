import { o } from "./_commonjsHelpers.f2a458db.js";
var t = o(function(n, t2) {
  var r2, e = (r2 = typeof document != "undefined" && document.currentScript ? document.currentScript.src : void 0, typeof __filename != "undefined" && (r2 = r2 || __filename), function(n2) {
    var t3, e2 = (n2 = n2 || {}) !== void 0 ? n2 : {}, i = {};
    for (t3 in e2)
      e2.hasOwnProperty(t3) && (i[t3] = e2[t3]);
    var o2 = false, a = false, u = false, s = false;
    o2 = typeof window == "object", a = typeof importScripts == "function", u = typeof process == "object" && typeof process.versions == "object" && typeof process.versions.node == "string", s = !o2 && !u && !a;
    var c, l, f, p, d = "";
    function y(n3) {
      return e2.locateFile ? e2.locateFile(n3, d) : d + n3;
    }
    u ? (d = a ? require("path").dirname(d) + "/" : __dirname + "/", c = function(n3, t4) {
      return f || (f = require("fs")), p || (p = require("path")), n3 = p.normalize(n3), f.readFileSync(n3, t4 ? null : "utf8");
    }, l = function(n3) {
      var t4 = c(n3, true);
      return t4.buffer || (t4 = new Uint8Array(t4)), C(t4.buffer), t4;
    }, process.argv.length > 1 && process.argv[1].replace(/\\/g, "/"), process.argv.slice(2), process.on("uncaughtException", function(n3) {
      if (!(n3 instanceof qr))
        throw n3;
    }), process.on("unhandledRejection", yn), e2.inspect = function() {
      return "[Emscripten Module object]";
    }) : s ? (typeof read != "undefined" && (c = function(n3) {
      return read(n3);
    }), l = function(n3) {
      var t4;
      return typeof readbuffer == "function" ? new Uint8Array(readbuffer(n3)) : (C(typeof (t4 = read(n3, "binary")) == "object"), t4);
    }, typeof scriptArgs != "undefined" && scriptArgs, typeof print != "undefined" && (typeof console == "undefined" && (console = {}), console.log = print, console.warn = console.error = typeof printErr != "undefined" ? printErr : print)) : (o2 || a) && (a ? d = self.location.href : document.currentScript && (d = document.currentScript.src), r2 && (d = r2), d = d.indexOf("blob:") !== 0 ? d.substr(0, d.lastIndexOf("/") + 1) : "", c = function(n3) {
      var t4 = new XMLHttpRequest();
      return t4.open("GET", n3, false), t4.send(null), t4.responseText;
    }, a && (l = function(n3) {
      var t4 = new XMLHttpRequest();
      return t4.open("GET", n3, false), t4.responseType = "arraybuffer", t4.send(null), new Uint8Array(t4.response);
    }));
    var h, v, m = e2.print || console.log.bind(console), g = e2.printErr || console.warn.bind(console);
    for (t3 in i)
      i.hasOwnProperty(t3) && (e2[t3] = i[t3]);
    i = null, e2.arguments && e2.arguments, e2.thisProgram && e2.thisProgram, e2.quit && e2.quit, e2.wasmBinary && (h = e2.wasmBinary), e2.noExitRuntime && e2.noExitRuntime, typeof WebAssembly != "object" && g("no native wasm support detected");
    var w = new WebAssembly.Table({ initial: 59, maximum: 59, element: "anyfunc" }), b = false;
    function C(n3, t4) {
      n3 || yn("Assertion failed: " + t4);
    }
    var T = typeof TextDecoder != "undefined" ? new TextDecoder("utf8") : void 0;
    function $(n3, t4, r3) {
      for (var e3 = t4 + r3, i2 = t4; n3[i2] && !(i2 >= e3); )
        ++i2;
      if (i2 - t4 > 16 && n3.subarray && T)
        return T.decode(n3.subarray(t4, i2));
      for (var o3 = ""; t4 < i2; ) {
        var a2 = n3[t4++];
        if (128 & a2) {
          var u2 = 63 & n3[t4++];
          if ((224 & a2) != 192) {
            var s2 = 63 & n3[t4++];
            if ((a2 = (240 & a2) == 224 ? (15 & a2) << 12 | u2 << 6 | s2 : (7 & a2) << 18 | u2 << 12 | s2 << 6 | 63 & n3[t4++]) < 65536)
              o3 += String.fromCharCode(a2);
            else {
              var c2 = a2 - 65536;
              o3 += String.fromCharCode(55296 | c2 >> 10, 56320 | 1023 & c2);
            }
          } else
            o3 += String.fromCharCode((31 & a2) << 6 | u2);
        } else
          o3 += String.fromCharCode(a2);
      }
      return o3;
    }
    function _(n3, t4) {
      return n3 ? $(x, n3, t4) : "";
    }
    function P(n3, t4, r3, e3) {
      if (!(e3 > 0))
        return 0;
      for (var i2 = r3, o3 = r3 + e3 - 1, a2 = 0; a2 < n3.length; ++a2) {
        var u2 = n3.charCodeAt(a2);
        if (u2 >= 55296 && u2 <= 57343 && (u2 = 65536 + ((1023 & u2) << 10) | 1023 & n3.charCodeAt(++a2)), u2 <= 127) {
          if (r3 >= o3)
            break;
          t4[r3++] = u2;
        } else if (u2 <= 2047) {
          if (r3 + 1 >= o3)
            break;
          t4[r3++] = 192 | u2 >> 6, t4[r3++] = 128 | 63 & u2;
        } else if (u2 <= 65535) {
          if (r3 + 2 >= o3)
            break;
          t4[r3++] = 224 | u2 >> 12, t4[r3++] = 128 | u2 >> 6 & 63, t4[r3++] = 128 | 63 & u2;
        } else {
          if (r3 + 3 >= o3)
            break;
          t4[r3++] = 240 | u2 >> 18, t4[r3++] = 128 | u2 >> 12 & 63, t4[r3++] = 128 | u2 >> 6 & 63, t4[r3++] = 128 | 63 & u2;
        }
      }
      return t4[r3] = 0, r3 - i2;
    }
    function A(n3, t4, r3) {
      return P(n3, x, t4, r3);
    }
    function E(n3) {
      for (var t4 = 0, r3 = 0; r3 < n3.length; ++r3) {
        var e3 = n3.charCodeAt(r3);
        e3 >= 55296 && e3 <= 57343 && (e3 = 65536 + ((1023 & e3) << 10) | 1023 & n3.charCodeAt(++r3)), e3 <= 127 ? ++t4 : t4 += e3 <= 2047 ? 2 : e3 <= 65535 ? 3 : 4;
      }
      return t4;
    }
    var W = typeof TextDecoder != "undefined" ? new TextDecoder("utf-16le") : void 0;
    function S(n3) {
      for (var t4 = n3, r3 = t4 >> 1; U[r3]; )
        ++r3;
      if ((t4 = r3 << 1) - n3 > 32 && W)
        return W.decode(x.subarray(n3, t4));
      for (var e3 = 0, i2 = ""; ; ) {
        var o3 = U[n3 + 2 * e3 >> 1];
        if (o3 == 0)
          return i2;
        ++e3, i2 += String.fromCharCode(o3);
      }
    }
    function F(n3, t4, r3) {
      if (r3 === void 0 && (r3 = 2147483647), r3 < 2)
        return 0;
      for (var e3 = t4, i2 = (r3 -= 2) < 2 * n3.length ? r3 / 2 : n3.length, o3 = 0; o3 < i2; ++o3) {
        var a2 = n3.charCodeAt(o3);
        U[t4 >> 1] = a2, t4 += 2;
      }
      return U[t4 >> 1] = 0, t4 - e3;
    }
    function O(n3) {
      return 2 * n3.length;
    }
    function j(n3) {
      for (var t4 = 0, r3 = ""; ; ) {
        var e3 = V[n3 + 4 * t4 >> 2];
        if (e3 == 0)
          return r3;
        if (++t4, e3 >= 65536) {
          var i2 = e3 - 65536;
          r3 += String.fromCharCode(55296 | i2 >> 10, 56320 | 1023 & i2);
        } else
          r3 += String.fromCharCode(e3);
      }
    }
    function k(n3, t4, r3) {
      if (r3 === void 0 && (r3 = 2147483647), r3 < 4)
        return 0;
      for (var e3 = t4, i2 = e3 + r3 - 4, o3 = 0; o3 < n3.length; ++o3) {
        var a2 = n3.charCodeAt(o3);
        if (a2 >= 55296 && a2 <= 57343 && (a2 = 65536 + ((1023 & a2) << 10) | 1023 & n3.charCodeAt(++o3)), V[t4 >> 2] = a2, (t4 += 4) + 4 > i2)
          break;
      }
      return V[t4 >> 2] = 0, t4 - e3;
    }
    function R(n3) {
      for (var t4 = 0, r3 = 0; r3 < n3.length; ++r3) {
        var e3 = n3.charCodeAt(r3);
        e3 >= 55296 && e3 <= 57343 && ++r3, t4 += 4;
      }
      return t4;
    }
    var I, D, x, U, M, V, H, z, q, B = 65536;
    function G(n3, t4) {
      return n3 % t4 > 0 && (n3 += t4 - n3 % t4), n3;
    }
    function L(n3) {
      I = n3, e2.HEAP8 = D = new Int8Array(n3), e2.HEAP16 = U = new Int16Array(n3), e2.HEAP32 = V = new Int32Array(n3), e2.HEAPU8 = x = new Uint8Array(n3), e2.HEAPU16 = M = new Uint16Array(n3), e2.HEAPU32 = H = new Uint32Array(n3), e2.HEAPF32 = z = new Float32Array(n3), e2.HEAPF64 = q = new Float64Array(n3);
    }
    var N = 5561216, X = 318176, J = e2.INITIAL_MEMORY || 16777216;
    function Y(n3) {
      for (; n3.length > 0; ) {
        var t4 = n3.shift();
        if (typeof t4 != "function") {
          var r3 = t4.func;
          typeof r3 == "number" ? t4.arg === void 0 ? e2.dynCall_v(r3) : e2.dynCall_vi(r3, t4.arg) : r3(t4.arg === void 0 ? null : t4.arg);
        } else
          t4();
      }
    }
    (v = e2.wasmMemory ? e2.wasmMemory : new WebAssembly.Memory({ initial: J / B })) && (I = v.buffer), J = I.byteLength, L(I), V[X >> 2] = N;
    var Z = [], K = [], Q = [], nn = [];
    function tn() {
      if (e2.preRun)
        for (typeof e2.preRun == "function" && (e2.preRun = [e2.preRun]); e2.preRun.length; )
          an(e2.preRun.shift());
      Y(Z);
    }
    function rn() {
      Y(K);
    }
    function en() {
      Y(Q);
    }
    function on() {
      if (e2.postRun)
        for (typeof e2.postRun == "function" && (e2.postRun = [e2.postRun]); e2.postRun.length; )
          un(e2.postRun.shift());
      Y(nn);
    }
    function an(n3) {
      Z.unshift(n3);
    }
    function un(n3) {
      nn.unshift(n3);
    }
    var sn = Math.ceil, cn = Math.floor, ln = 0, fn = null;
    function pn(n3) {
      ln++, e2.monitorRunDependencies && e2.monitorRunDependencies(ln);
    }
    function dn(n3) {
      if (ln--, e2.monitorRunDependencies && e2.monitorRunDependencies(ln), ln == 0 && fn) {
        var t4 = fn;
        fn = null, t4();
      }
    }
    function yn(n3) {
      throw e2.onAbort && e2.onAbort(n3), m(n3 += ""), g(n3), b = true, n3 = "abort(" + n3 + "). Build with -s ASSERTIONS=1 for more info.", new WebAssembly.RuntimeError(n3);
    }
    e2.preloadedImages = {}, e2.preloadedAudios = {};
    var hn = "data:application/octet-stream;base64,";
    function vn(n3) {
      return String.prototype.startsWith ? n3.startsWith(hn) : n3.indexOf(hn) === 0;
    }
    var mn = "basis_transcoder.wasm";
    function gn() {
      try {
        if (h)
          return new Uint8Array(h);
        if (l)
          return l(mn);
        throw "both async and sync fetching of the wasm failed";
      } catch (g2) {
        yn(g2);
      }
    }
    function wn() {
      return h || !o2 && !a || typeof fetch != "function" ? new Promise(function(n3, t4) {
        n3(gn());
      }) : fetch(mn, { credentials: "same-origin" }).then(function(n3) {
        if (!n3.ok)
          throw "failed to load wasm binary file at '" + mn + "'";
        return n3.arrayBuffer();
      }).catch(function() {
        return gn();
      });
    }
    function bn() {
      var n3 = { a: Dr };
      function t4(n4, t5) {
        var r4 = n4.exports;
        e2.asm = r4, dn();
      }
      function r3(n4) {
        t4(n4.instance);
      }
      function i2(t5) {
        return wn().then(function(t6) {
          return WebAssembly.instantiate(t6, n3);
        }).then(t5, function(n4) {
          g("failed to asynchronously prepare wasm: " + n4), yn(n4);
        });
      }
      function o3() {
        if (h || typeof WebAssembly.instantiateStreaming != "function" || vn(mn) || typeof fetch != "function")
          return i2(r3);
        fetch(mn, { credentials: "same-origin" }).then(function(t5) {
          return WebAssembly.instantiateStreaming(t5, n3).then(r3, function(n4) {
            g("wasm streaming compile failed: " + n4), g("falling back to ArrayBuffer instantiation"), i2(r3);
          });
        });
      }
      if (pn(), e2.instantiateWasm)
        try {
          return e2.instantiateWasm(n3, t4);
        } catch (a2) {
          return g("Module.instantiateWasm callback failed with error: " + a2), false;
        }
      return o3(), {};
    }
    function Cn(n3) {
      return Vr(n3);
    }
    function Tn(n3, t4, r3) {
      throw n3;
    }
    function $n(n3) {
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
    function _n() {
      for (var n3 = new Array(256), t4 = 0; t4 < 256; ++t4)
        n3[t4] = String.fromCharCode(t4);
      Pn = n3;
    }
    vn(mn) || (mn = y(mn)), K.push({ func: function() {
      Mr();
    } });
    var Pn = void 0;
    function An(n3) {
      for (var t4 = "", r3 = n3; x[r3]; )
        t4 += Pn[x[r3++]];
      return t4;
    }
    var En = {}, Wn = {}, Sn = {}, Fn = 48, On = 57;
    function jn(n3) {
      if (n3 === void 0)
        return "_unknown";
      var t4 = (n3 = n3.replace(/[^a-zA-Z0-9_]/g, "$")).charCodeAt(0);
      return t4 >= Fn && t4 <= On ? "_" + n3 : n3;
    }
    function kn(n3, t4) {
      return n3 = jn(n3), new Function("body", "return function " + n3 + '() {\n    "use strict";    return body.apply(this, arguments);\n};\n')(t4);
    }
    function Rn(n3, t4) {
      var r3 = kn(t4, function(n4) {
        this.name = t4, this.message = n4;
        var r4 = new Error(n4).stack;
        r4 !== void 0 && (this.stack = this.toString() + "\n" + r4.replace(/^Error(:[^\n]*)?\n/, ""));
      });
      return r3.prototype = Object.create(n3.prototype), r3.prototype.constructor = r3, r3.prototype.toString = function() {
        return this.message === void 0 ? this.name : this.name + ": " + this.message;
      }, r3;
    }
    var In = void 0;
    function Dn(n3) {
      throw new In(n3);
    }
    var xn = void 0;
    function Un(n3) {
      throw new xn(n3);
    }
    function Mn(n3, t4, r3) {
      function e3(t5) {
        var e4 = r3(t5);
        e4.length !== n3.length && Un("Mismatched type converter count");
        for (var i3 = 0; i3 < n3.length; ++i3)
          Vn(n3[i3], e4[i3]);
      }
      n3.forEach(function(n4) {
        Sn[n4] = t4;
      });
      var i2 = new Array(t4.length), o3 = [], a2 = 0;
      t4.forEach(function(n4, t5) {
        Wn.hasOwnProperty(n4) ? i2[t5] = Wn[n4] : (o3.push(n4), En.hasOwnProperty(n4) || (En[n4] = []), En[n4].push(function() {
          i2[t5] = Wn[n4], ++a2 === o3.length && e3(i2);
        }));
      }), o3.length === 0 && e3(i2);
    }
    function Vn(n3, t4, r3) {
      if (r3 = r3 || {}, !("argPackAdvance" in t4))
        throw new TypeError("registerType registeredInstance requires argPackAdvance");
      var e3 = t4.name;
      if (n3 || Dn('type "' + e3 + '" must have a positive integer typeid pointer'), Wn.hasOwnProperty(n3)) {
        if (r3.ignoreDuplicateRegistrations)
          return;
        Dn("Cannot register type '" + e3 + "' twice");
      }
      if (Wn[n3] = t4, delete Sn[n3], En.hasOwnProperty(n3)) {
        var i2 = En[n3];
        delete En[n3], i2.forEach(function(n4) {
          n4();
        });
      }
    }
    function Hn(n3, t4, r3, e3, i2) {
      var o3 = $n(r3);
      Vn(n3, { name: t4 = An(t4), fromWireType: function(n4) {
        return !!n4;
      }, toWireType: function(n4, t5) {
        return t5 ? e3 : i2;
      }, argPackAdvance: 8, readValueFromPointer: function(n4) {
        var e4;
        if (r3 === 1)
          e4 = D;
        else if (r3 === 2)
          e4 = U;
        else {
          if (r3 !== 4)
            throw new TypeError("Unknown boolean type size: " + t4);
          e4 = V;
        }
        return this.fromWireType(e4[n4 >> o3]);
      }, destructorFunction: null });
    }
    function zn(n3) {
      if (!(this instanceof it))
        return false;
      if (!(n3 instanceof it))
        return false;
      for (var t4 = this.$$.ptrType.registeredClass, r3 = this.$$.ptr, e3 = n3.$$.ptrType.registeredClass, i2 = n3.$$.ptr; t4.baseClass; )
        r3 = t4.upcast(r3), t4 = t4.baseClass;
      for (; e3.baseClass; )
        i2 = e3.upcast(i2), e3 = e3.baseClass;
      return t4 === e3 && r3 === i2;
    }
    function qn(n3) {
      return { count: n3.count, deleteScheduled: n3.deleteScheduled, preservePointerOnDelete: n3.preservePointerOnDelete, ptr: n3.ptr, ptrType: n3.ptrType, smartPtr: n3.smartPtr, smartPtrType: n3.smartPtrType };
    }
    function Bn(n3) {
      function t4(n4) {
        return n4.$$.ptrType.registeredClass.name;
      }
      Dn(t4(n3) + " instance already deleted");
    }
    var Gn = false;
    function Ln(n3) {
    }
    function Nn(n3) {
      n3.smartPtr ? n3.smartPtrType.rawDestructor(n3.smartPtr) : n3.ptrType.registeredClass.rawDestructor(n3.ptr);
    }
    function Xn(n3) {
      n3.count.value -= 1, n3.count.value === 0 && Nn(n3);
    }
    function Jn(n3) {
      return typeof FinalizationGroup == "undefined" ? (Jn = function(n4) {
        return n4;
      }, n3) : (Gn = new FinalizationGroup(function(n4) {
        for (var t4 = n4.next(); !t4.done; t4 = n4.next()) {
          var r3 = t4.value;
          r3.ptr ? Xn(r3) : console.warn("object already deleted: " + r3.ptr);
        }
      }), Ln = function(n4) {
        Gn.unregister(n4.$$);
      }, (Jn = function(n4) {
        return Gn.register(n4, n4.$$, n4.$$), n4;
      })(n3));
    }
    function Yn() {
      if (this.$$.ptr || Bn(this), this.$$.preservePointerOnDelete)
        return this.$$.count.value += 1, this;
      var n3 = Jn(Object.create(Object.getPrototypeOf(this), { $$: { value: qn(this.$$) } }));
      return n3.$$.count.value += 1, n3.$$.deleteScheduled = false, n3;
    }
    function Zn() {
      this.$$.ptr || Bn(this), this.$$.deleteScheduled && !this.$$.preservePointerOnDelete && Dn("Object already scheduled for deletion"), Ln(this), Xn(this.$$), this.$$.preservePointerOnDelete || (this.$$.smartPtr = void 0, this.$$.ptr = void 0);
    }
    function Kn() {
      return !this.$$.ptr;
    }
    var Qn = void 0, nt = [];
    function tt() {
      for (; nt.length; ) {
        var n3 = nt.pop();
        n3.$$.deleteScheduled = false, n3.delete();
      }
    }
    function rt() {
      return this.$$.ptr || Bn(this), this.$$.deleteScheduled && !this.$$.preservePointerOnDelete && Dn("Object already scheduled for deletion"), nt.push(this), nt.length === 1 && Qn && Qn(tt), this.$$.deleteScheduled = true, this;
    }
    function et() {
      it.prototype.isAliasOf = zn, it.prototype.clone = Yn, it.prototype.delete = Zn, it.prototype.isDeleted = Kn, it.prototype.deleteLater = rt;
    }
    function it() {
    }
    var ot = {};
    function at(n3, t4, r3) {
      if (n3[t4].overloadTable === void 0) {
        var e3 = n3[t4];
        n3[t4] = function() {
          return n3[t4].overloadTable.hasOwnProperty(arguments.length) || Dn("Function '" + r3 + "' called with an invalid number of arguments (" + arguments.length + ") - expects one of (" + n3[t4].overloadTable + ")!"), n3[t4].overloadTable[arguments.length].apply(this, arguments);
        }, n3[t4].overloadTable = [], n3[t4].overloadTable[e3.argCount] = e3;
      }
    }
    function ut(n3, t4, r3) {
      e2.hasOwnProperty(n3) ? ((r3 === void 0 || e2[n3].overloadTable !== void 0 && e2[n3].overloadTable[r3] !== void 0) && Dn("Cannot register public name '" + n3 + "' twice"), at(e2, n3, n3), e2.hasOwnProperty(r3) && Dn("Cannot register multiple overloads of a function with the same number of arguments (" + r3 + ")!"), e2[n3].overloadTable[r3] = t4) : (e2[n3] = t4, r3 !== void 0 && (e2[n3].numArguments = r3));
    }
    function st(n3, t4, r3, e3, i2, o3, a2, u2) {
      this.name = n3, this.constructor = t4, this.instancePrototype = r3, this.rawDestructor = e3, this.baseClass = i2, this.getActualType = o3, this.upcast = a2, this.downcast = u2, this.pureVirtualFunctions = [];
    }
    function ct(n3, t4, r3) {
      for (; t4 !== r3; )
        t4.upcast || Dn("Expected null or instance of " + r3.name + ", got an instance of " + t4.name), n3 = t4.upcast(n3), t4 = t4.baseClass;
      return n3;
    }
    function lt(n3, t4) {
      if (t4 === null)
        return this.isReference && Dn("null is not a valid " + this.name), 0;
      t4.$$ || Dn('Cannot pass "' + Jt(t4) + '" as a ' + this.name), t4.$$.ptr || Dn("Cannot pass deleted object as a pointer of type " + this.name);
      var r3 = t4.$$.ptrType.registeredClass;
      return ct(t4.$$.ptr, r3, this.registeredClass);
    }
    function ft(n3, t4) {
      var r3;
      if (t4 === null)
        return this.isReference && Dn("null is not a valid " + this.name), this.isSmartPointer ? (r3 = this.rawConstructor(), n3 !== null && n3.push(this.rawDestructor, r3), r3) : 0;
      t4.$$ || Dn('Cannot pass "' + Jt(t4) + '" as a ' + this.name), t4.$$.ptr || Dn("Cannot pass deleted object as a pointer of type " + this.name), !this.isConst && t4.$$.ptrType.isConst && Dn("Cannot convert argument of type " + (t4.$$.smartPtrType ? t4.$$.smartPtrType.name : t4.$$.ptrType.name) + " to parameter type " + this.name);
      var e3 = t4.$$.ptrType.registeredClass;
      if (r3 = ct(t4.$$.ptr, e3, this.registeredClass), this.isSmartPointer)
        switch (t4.$$.smartPtr === void 0 && Dn("Passing raw pointer to smart pointer is illegal"), this.sharingPolicy) {
          case 0:
            t4.$$.smartPtrType === this ? r3 = t4.$$.smartPtr : Dn("Cannot convert argument of type " + (t4.$$.smartPtrType ? t4.$$.smartPtrType.name : t4.$$.ptrType.name) + " to parameter type " + this.name);
            break;
          case 1:
            r3 = t4.$$.smartPtr;
            break;
          case 2:
            if (t4.$$.smartPtrType === this)
              r3 = t4.$$.smartPtr;
            else {
              var i2 = t4.clone();
              r3 = this.rawShare(r3, Nt(function() {
                i2.delete();
              })), n3 !== null && n3.push(this.rawDestructor, r3);
            }
            break;
          default:
            Dn("Unsupporting sharing policy");
        }
      return r3;
    }
    function pt(n3, t4) {
      if (t4 === null)
        return this.isReference && Dn("null is not a valid " + this.name), 0;
      t4.$$ || Dn('Cannot pass "' + Jt(t4) + '" as a ' + this.name), t4.$$.ptr || Dn("Cannot pass deleted object as a pointer of type " + this.name), t4.$$.ptrType.isConst && Dn("Cannot convert argument of type " + t4.$$.ptrType.name + " to parameter type " + this.name);
      var r3 = t4.$$.ptrType.registeredClass;
      return ct(t4.$$.ptr, r3, this.registeredClass);
    }
    function dt(n3) {
      return this.fromWireType(H[n3 >> 2]);
    }
    function yt(n3) {
      return this.rawGetPointee && (n3 = this.rawGetPointee(n3)), n3;
    }
    function ht(n3) {
      this.rawDestructor && this.rawDestructor(n3);
    }
    function vt(n3) {
      n3 !== null && n3.delete();
    }
    function mt(n3, t4, r3) {
      if (t4 === r3)
        return n3;
      if (r3.baseClass === void 0)
        return null;
      var e3 = mt(n3, t4, r3.baseClass);
      return e3 === null ? null : r3.downcast(e3);
    }
    function gt() {
      return Object.keys(Tt).length;
    }
    function wt() {
      var n3 = [];
      for (var t4 in Tt)
        Tt.hasOwnProperty(t4) && n3.push(Tt[t4]);
      return n3;
    }
    function bt(n3) {
      Qn = n3, nt.length && Qn && Qn(tt);
    }
    function Ct() {
      e2.getInheritedInstanceCount = gt, e2.getLiveInheritedInstances = wt, e2.flushPendingDeletes = tt, e2.setDelayFunction = bt;
    }
    var Tt = {};
    function $t(n3, t4) {
      for (t4 === void 0 && Dn("ptr should not be undefined"); n3.baseClass; )
        t4 = n3.upcast(t4), n3 = n3.baseClass;
      return t4;
    }
    function _t(n3, t4) {
      return t4 = $t(n3, t4), Tt[t4];
    }
    function Pt(n3, t4) {
      return t4.ptrType && t4.ptr || Un("makeClassHandle requires ptr and ptrType"), !!t4.smartPtrType != !!t4.smartPtr && Un("Both smartPtrType and smartPtr must be specified"), t4.count = { value: 1 }, Jn(Object.create(n3, { $$: { value: t4 } }));
    }
    function At(n3) {
      var t4 = this.getPointee(n3);
      if (!t4)
        return this.destructor(n3), null;
      var r3 = _t(this.registeredClass, t4);
      if (r3 !== void 0) {
        if (r3.$$.count.value === 0)
          return r3.$$.ptr = t4, r3.$$.smartPtr = n3, r3.clone();
        var e3 = r3.clone();
        return this.destructor(n3), e3;
      }
      function i2() {
        return this.isSmartPointer ? Pt(this.registeredClass.instancePrototype, { ptrType: this.pointeeType, ptr: t4, smartPtrType: this, smartPtr: n3 }) : Pt(this.registeredClass.instancePrototype, { ptrType: this, ptr: n3 });
      }
      var o3, a2 = this.registeredClass.getActualType(t4), u2 = ot[a2];
      if (!u2)
        return i2.call(this);
      o3 = this.isConst ? u2.constPointerType : u2.pointerType;
      var s2 = mt(t4, this.registeredClass, o3.registeredClass);
      return s2 === null ? i2.call(this) : this.isSmartPointer ? Pt(o3.registeredClass.instancePrototype, { ptrType: o3, ptr: s2, smartPtrType: this, smartPtr: n3 }) : Pt(o3.registeredClass.instancePrototype, { ptrType: o3, ptr: s2 });
    }
    function Et() {
      Wt.prototype.getPointee = yt, Wt.prototype.destructor = ht, Wt.prototype.argPackAdvance = 8, Wt.prototype.readValueFromPointer = dt, Wt.prototype.deleteObject = vt, Wt.prototype.fromWireType = At;
    }
    function Wt(n3, t4, r3, e3, i2, o3, a2, u2, s2, c2, l2) {
      this.name = n3, this.registeredClass = t4, this.isReference = r3, this.isConst = e3, this.isSmartPointer = i2, this.pointeeType = o3, this.sharingPolicy = a2, this.rawGetPointee = u2, this.rawConstructor = s2, this.rawShare = c2, this.rawDestructor = l2, i2 || t4.baseClass !== void 0 ? this.toWireType = ft : e3 ? (this.toWireType = lt, this.destructorFunction = null) : (this.toWireType = pt, this.destructorFunction = null);
    }
    function St(n3, t4, r3) {
      e2.hasOwnProperty(n3) || Un("Replacing nonexistant public symbol"), e2[n3].overloadTable !== void 0 && r3 !== void 0 ? e2[n3].overloadTable[r3] = t4 : (e2[n3] = t4, e2[n3].argCount = r3);
    }
    function Ft(n3, t4) {
      function r3(r4) {
        for (var e3 = [], i3 = 1; i3 < n3.length; ++i3)
          e3.push("a" + i3);
        var o3 = "return function dynCall_" + n3 + "_" + t4 + "(" + e3.join(", ") + ") {\n";
        return o3 += "    return dynCall(rawFunction" + (e3.length ? ", " : "") + e3.join(", ") + ");\n", o3 += "};\n", new Function("dynCall", "rawFunction", o3)(r4, t4);
      }
      n3 = An(n3);
      var i2 = r3(e2["dynCall_" + n3]);
      return typeof i2 != "function" && Dn("unknown function pointer with signature " + n3 + ": " + t4), i2;
    }
    var Ot = void 0;
    function jt(n3) {
      var t4 = zr(n3), r3 = An(t4);
      return Hr(t4), r3;
    }
    function kt(n3, t4) {
      var r3 = [], e3 = {};
      function i2(n4) {
        e3[n4] || Wn[n4] || (Sn[n4] ? Sn[n4].forEach(i2) : (r3.push(n4), e3[n4] = true));
      }
      throw t4.forEach(i2), new Ot(n3 + ": " + r3.map(jt).join([", "]));
    }
    function Rt(n3, t4, r3, e3, i2, o3, a2, u2, s2, c2, l2, f2, p2) {
      l2 = An(l2), o3 = Ft(i2, o3), u2 && (u2 = Ft(a2, u2)), c2 && (c2 = Ft(s2, c2)), p2 = Ft(f2, p2);
      var d2 = jn(l2);
      ut(d2, function() {
        kt("Cannot construct " + l2 + " due to unbound types", [e3]);
      }), Mn([n3, t4, r3], e3 ? [e3] : [], function(t5) {
        var r4, i3;
        t5 = t5[0], i3 = e3 ? (r4 = t5.registeredClass).instancePrototype : it.prototype;
        var a3 = kn(d2, function() {
          if (Object.getPrototypeOf(this) !== s3)
            throw new In("Use 'new' to construct " + l2);
          if (f3.constructor_body === void 0)
            throw new In(l2 + " has no accessible constructor");
          var n4 = f3.constructor_body[arguments.length];
          if (n4 === void 0)
            throw new In("Tried to invoke ctor of " + l2 + " with invalid number of parameters (" + arguments.length + ") - expected (" + Object.keys(f3.constructor_body).toString() + ") parameters instead!");
          return n4.apply(this, arguments);
        }), s3 = Object.create(i3, { constructor: { value: a3 } });
        a3.prototype = s3;
        var f3 = new st(l2, a3, s3, p2, r4, o3, u2, c2), y2 = new Wt(l2, f3, true, false, false), h2 = new Wt(l2 + "*", f3, false, false, false), v2 = new Wt(l2 + " const*", f3, false, true, false);
        return ot[n3] = { pointerType: h2, constPointerType: v2 }, St(d2, a3), [y2, h2, v2];
      });
    }
    function It(n3, t4) {
      for (var r3 = [], e3 = 0; e3 < n3; e3++)
        r3.push(V[(t4 >> 2) + e3]);
      return r3;
    }
    function Dt(n3) {
      for (; n3.length; ) {
        var t4 = n3.pop();
        n3.pop()(t4);
      }
    }
    function xt(n3, t4, r3, e3, i2, o3) {
      C(t4 > 0);
      var a2 = It(t4, r3);
      i2 = Ft(e3, i2);
      var u2 = [o3], s2 = [];
      Mn([], [n3], function(n4) {
        var r4 = "constructor " + (n4 = n4[0]).name;
        if (n4.registeredClass.constructor_body === void 0 && (n4.registeredClass.constructor_body = []), n4.registeredClass.constructor_body[t4 - 1] !== void 0)
          throw new In("Cannot register multiple constructors with identical number of parameters (" + (t4 - 1) + ") for class '" + n4.name + "'! Overload resolution is currently only performed using the parameter count, not actual type info!");
        return n4.registeredClass.constructor_body[t4 - 1] = function() {
          kt("Cannot construct " + n4.name + " due to unbound types", a2);
        }, Mn([], a2, function(e4) {
          return n4.registeredClass.constructor_body[t4 - 1] = function() {
            arguments.length !== t4 - 1 && Dn(r4 + " called with " + arguments.length + " arguments, expected " + (t4 - 1)), s2.length = 0, u2.length = t4;
            for (var n5 = 1; n5 < t4; ++n5)
              u2[n5] = e4[n5].toWireType(s2, arguments[n5 - 1]);
            var o4 = i2.apply(null, u2);
            return Dt(s2), e4[0].fromWireType(o4);
          }, [];
        }), [];
      });
    }
    function Ut(n3, t4) {
      if (!(n3 instanceof Function))
        throw new TypeError("new_ called with constructor type " + typeof n3 + " which is not a function");
      var r3 = kn(n3.name || "unknownFunctionName", function() {
      });
      r3.prototype = n3.prototype;
      var e3 = new r3(), i2 = n3.apply(e3, t4);
      return i2 instanceof Object ? i2 : e3;
    }
    function Mt(n3, t4, r3, e3, i2) {
      var o3 = t4.length;
      o3 < 2 && Dn("argTypes array size mismatch! Must at least get return value and 'this' types!");
      for (var a2 = t4[1] !== null && r3 !== null, u2 = false, s2 = 1; s2 < t4.length; ++s2)
        if (t4[s2] !== null && t4[s2].destructorFunction === void 0) {
          u2 = true;
          break;
        }
      var c2 = t4[0].name !== "void", l2 = "", f2 = "";
      for (s2 = 0; s2 < o3 - 2; ++s2)
        l2 += (s2 !== 0 ? ", " : "") + "arg" + s2, f2 += (s2 !== 0 ? ", " : "") + "arg" + s2 + "Wired";
      var p2 = "return function " + jn(n3) + "(" + l2 + ") {\nif (arguments.length !== " + (o3 - 2) + ") {\nthrowBindingError('function " + n3 + " called with ' + arguments.length + ' arguments, expected " + (o3 - 2) + " args!');\n}\n";
      u2 && (p2 += "var destructors = [];\n");
      var d2 = u2 ? "destructors" : "null", y2 = ["throwBindingError", "invoker", "fn", "runDestructors", "retType", "classParam"], h2 = [Dn, e3, i2, Dt, t4[0], t4[1]];
      for (a2 && (p2 += "var thisWired = classParam.toWireType(" + d2 + ", this);\n"), s2 = 0; s2 < o3 - 2; ++s2)
        p2 += "var arg" + s2 + "Wired = argType" + s2 + ".toWireType(" + d2 + ", arg" + s2 + "); // " + t4[s2 + 2].name + "\n", y2.push("argType" + s2), h2.push(t4[s2 + 2]);
      if (a2 && (f2 = "thisWired" + (f2.length > 0 ? ", " : "") + f2), p2 += (c2 ? "var rv = " : "") + "invoker(fn" + (f2.length > 0 ? ", " : "") + f2 + ");\n", u2)
        p2 += "runDestructors(destructors);\n";
      else
        for (s2 = a2 ? 1 : 2; s2 < t4.length; ++s2) {
          var v2 = s2 === 1 ? "thisWired" : "arg" + (s2 - 2) + "Wired";
          t4[s2].destructorFunction !== null && (p2 += v2 + "_dtor(" + v2 + "); // " + t4[s2].name + "\n", y2.push(v2 + "_dtor"), h2.push(t4[s2].destructorFunction));
        }
      return c2 && (p2 += "var ret = retType.fromWireType(rv);\nreturn ret;\n"), p2 += "}\n", y2.push(p2), Ut(Function, y2).apply(null, h2);
    }
    function Vt(n3, t4, r3, e3, i2, o3, a2, u2) {
      var s2 = It(r3, e3);
      t4 = An(t4), o3 = Ft(i2, o3), Mn([], [n3], function(n4) {
        var e4 = (n4 = n4[0]).name + "." + t4;
        function i3() {
          kt("Cannot call " + e4 + " due to unbound types", s2);
        }
        u2 && n4.registeredClass.pureVirtualFunctions.push(t4);
        var c2 = n4.registeredClass.instancePrototype, l2 = c2[t4];
        return l2 === void 0 || l2.overloadTable === void 0 && l2.className !== n4.name && l2.argCount === r3 - 2 ? (i3.argCount = r3 - 2, i3.className = n4.name, c2[t4] = i3) : (at(c2, t4, e4), c2[t4].overloadTable[r3 - 2] = i3), Mn([], s2, function(i4) {
          var u3 = Mt(e4, i4, n4, o3, a2);
          return c2[t4].overloadTable === void 0 ? (u3.argCount = r3 - 2, c2[t4] = u3) : c2[t4].overloadTable[r3 - 2] = u3, [];
        }), [];
      });
    }
    var Ht = [], zt = [{}, { value: void 0 }, { value: null }, { value: true }, { value: false }];
    function qt(n3) {
      n3 > 4 && --zt[n3].refcount == 0 && (zt[n3] = void 0, Ht.push(n3));
    }
    function Bt() {
      for (var n3 = 0, t4 = 5; t4 < zt.length; ++t4)
        zt[t4] !== void 0 && ++n3;
      return n3;
    }
    function Gt() {
      for (var n3 = 5; n3 < zt.length; ++n3)
        if (zt[n3] !== void 0)
          return zt[n3];
      return null;
    }
    function Lt() {
      e2.count_emval_handles = Bt, e2.get_first_emval = Gt;
    }
    function Nt(n3) {
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
          var t4 = Ht.length ? Ht.pop() : zt.length;
          return zt[t4] = { refcount: 1, value: n3 }, t4;
      }
    }
    function Xt(n3, t4) {
      Vn(n3, { name: t4 = An(t4), fromWireType: function(n4) {
        var t5 = zt[n4].value;
        return qt(n4), t5;
      }, toWireType: function(n4, t5) {
        return Nt(t5);
      }, argPackAdvance: 8, readValueFromPointer: dt, destructorFunction: null });
    }
    function Jt(n3) {
      if (n3 === null)
        return "null";
      var t4 = typeof n3;
      return t4 === "object" || t4 === "array" || t4 === "function" ? n3.toString() : "" + n3;
    }
    function Yt(n3, t4) {
      switch (t4) {
        case 2:
          return function(n4) {
            return this.fromWireType(z[n4 >> 2]);
          };
        case 3:
          return function(n4) {
            return this.fromWireType(q[n4 >> 3]);
          };
        default:
          throw new TypeError("Unknown float type: " + n3);
      }
    }
    function Zt(n3, t4, r3) {
      var e3 = $n(r3);
      Vn(n3, { name: t4 = An(t4), fromWireType: function(n4) {
        return n4;
      }, toWireType: function(n4, t5) {
        if (typeof t5 != "number" && typeof t5 != "boolean")
          throw new TypeError('Cannot convert "' + Jt(t5) + '" to ' + this.name);
        return t5;
      }, argPackAdvance: 8, readValueFromPointer: Yt(t4, e3), destructorFunction: null });
    }
    function Kt(n3, t4, r3, e3, i2, o3) {
      var a2 = It(t4, r3);
      n3 = An(n3), i2 = Ft(e3, i2), ut(n3, function() {
        kt("Cannot call " + n3 + " due to unbound types", a2);
      }, t4 - 1), Mn([], a2, function(r4) {
        var e4 = [r4[0], null].concat(r4.slice(1));
        return St(n3, Mt(n3, e4, null, i2, o3), t4 - 1), [];
      });
    }
    function Qt(n3, t4, r3) {
      switch (t4) {
        case 0:
          return r3 ? function(n4) {
            return D[n4];
          } : function(n4) {
            return x[n4];
          };
        case 1:
          return r3 ? function(n4) {
            return U[n4 >> 1];
          } : function(n4) {
            return M[n4 >> 1];
          };
        case 2:
          return r3 ? function(n4) {
            return V[n4 >> 2];
          } : function(n4) {
            return H[n4 >> 2];
          };
        default:
          throw new TypeError("Unknown integer type: " + n3);
      }
    }
    function nr(n3, t4, r3, e3, i2) {
      t4 = An(t4), i2 === -1 && (i2 = 4294967295);
      var o3 = $n(r3), a2 = function(n4) {
        return n4;
      };
      if (e3 === 0) {
        var u2 = 32 - 8 * r3;
        a2 = function(n4) {
          return n4 << u2 >>> u2;
        };
      }
      var s2 = t4.indexOf("unsigned") != -1;
      Vn(n3, { name: t4, fromWireType: a2, toWireType: function(n4, r4) {
        if (typeof r4 != "number" && typeof r4 != "boolean")
          throw new TypeError('Cannot convert "' + Jt(r4) + '" to ' + this.name);
        if (r4 < e3 || r4 > i2)
          throw new TypeError('Passing a number "' + Jt(r4) + '" from JS side to C/C++ side to an argument of type "' + t4 + '", which is outside the valid range [' + e3 + ", " + i2 + "]!");
        return s2 ? r4 >>> 0 : 0 | r4;
      }, argPackAdvance: 8, readValueFromPointer: Qt(t4, o3, e3 !== 0), destructorFunction: null });
    }
    function tr(n3, t4, r3) {
      var e3 = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array][t4];
      function i2(n4) {
        var t5 = H, r4 = t5[n4 >>= 2], i3 = t5[n4 + 1];
        return new e3(I, i3, r4);
      }
      Vn(n3, { name: r3 = An(r3), fromWireType: i2, argPackAdvance: 8, readValueFromPointer: i2 }, { ignoreDuplicateRegistrations: true });
    }
    function rr(n3, t4) {
      var r3 = (t4 = An(t4)) === "std::string";
      Vn(n3, { name: t4, fromWireType: function(n4) {
        var t5, e3 = H[n4 >> 2];
        if (r3) {
          var i2 = x[n4 + 4 + e3], o3 = 0;
          i2 != 0 && (o3 = i2, x[n4 + 4 + e3] = 0);
          for (var a2 = n4 + 4, u2 = 0; u2 <= e3; ++u2) {
            var s2 = n4 + 4 + u2;
            if (x[s2] == 0) {
              var c2 = _(a2);
              t5 === void 0 ? t5 = c2 : (t5 += String.fromCharCode(0), t5 += c2), a2 = s2 + 1;
            }
          }
          o3 != 0 && (x[n4 + 4 + e3] = o3);
        } else {
          var l2 = new Array(e3);
          for (u2 = 0; u2 < e3; ++u2)
            l2[u2] = String.fromCharCode(x[n4 + 4 + u2]);
          t5 = l2.join("");
        }
        return Hr(n4), t5;
      }, toWireType: function(n4, t5) {
        t5 instanceof ArrayBuffer && (t5 = new Uint8Array(t5));
        var e3 = typeof t5 == "string";
        e3 || t5 instanceof Uint8Array || t5 instanceof Uint8ClampedArray || t5 instanceof Int8Array || Dn("Cannot pass non-string to std::string");
        var i2 = (r3 && e3 ? function() {
          return E(t5);
        } : function() {
          return t5.length;
        })(), o3 = Vr(4 + i2 + 1);
        if (H[o3 >> 2] = i2, r3 && e3)
          A(t5, o3 + 4, i2 + 1);
        else if (e3)
          for (var a2 = 0; a2 < i2; ++a2) {
            var u2 = t5.charCodeAt(a2);
            u2 > 255 && (Hr(o3), Dn("String has UTF-16 code units that do not fit in 8 bits")), x[o3 + 4 + a2] = u2;
          }
        else
          for (a2 = 0; a2 < i2; ++a2)
            x[o3 + 4 + a2] = t5[a2];
        return n4 !== null && n4.push(Hr, o3), o3;
      }, argPackAdvance: 8, readValueFromPointer: dt, destructorFunction: function(n4) {
        Hr(n4);
      } });
    }
    function er(n3, t4, r3) {
      var e3, i2, o3, a2, u2;
      r3 = An(r3), t4 === 2 ? (e3 = S, i2 = F, a2 = O, o3 = function() {
        return M;
      }, u2 = 1) : t4 === 4 && (e3 = j, i2 = k, a2 = R, o3 = function() {
        return H;
      }, u2 = 2), Vn(n3, { name: r3, fromWireType: function(n4) {
        var r4, i3 = H[n4 >> 2], a3 = o3(), s2 = a3[n4 + 4 + i3 * t4 >> u2], c2 = 0;
        s2 != 0 && (c2 = s2, a3[n4 + 4 + i3 * t4 >> u2] = 0);
        for (var l2 = n4 + 4, f2 = 0; f2 <= i3; ++f2) {
          var p2 = n4 + 4 + f2 * t4;
          if (a3[p2 >> u2] == 0) {
            var d2 = e3(l2);
            r4 === void 0 ? r4 = d2 : (r4 += String.fromCharCode(0), r4 += d2), l2 = p2 + t4;
          }
        }
        return c2 != 0 && (a3[n4 + 4 + i3 * t4 >> u2] = c2), Hr(n4), r4;
      }, toWireType: function(n4, e4) {
        typeof e4 != "string" && Dn("Cannot pass non-string to C++ string type " + r3);
        var o4 = a2(e4), s2 = Vr(4 + o4 + t4);
        return H[s2 >> 2] = o4 >> u2, i2(e4, s2 + 4, o4 + t4), n4 !== null && n4.push(Hr, s2), s2;
      }, argPackAdvance: 8, readValueFromPointer: dt, destructorFunction: function(n4) {
        Hr(n4);
      } });
    }
    function ir(n3, t4) {
      Vn(n3, { isVoid: true, name: t4 = An(t4), argPackAdvance: 0, fromWireType: function() {
      }, toWireType: function(n4, t5) {
      } });
    }
    function or(n3) {
      return n3 || Dn("Cannot use deleted val. handle = " + n3), zt[n3].value;
    }
    function ar(n3, t4) {
      var r3 = Wn[n3];
      return r3 === void 0 && Dn(t4 + " has unknown type " + jt(n3)), r3;
    }
    function ur(n3, t4, r3) {
      n3 = or(n3), t4 = ar(t4, "emval::as");
      var e3 = [], i2 = Nt(e3);
      return V[r3 >> 2] = i2, t4.toWireType(e3, n3);
    }
    var sr = {};
    function cr(n3) {
      var t4 = sr[n3];
      return t4 === void 0 ? An(n3) : t4;
    }
    var lr = [];
    function fr(n3, t4, r3, e3) {
      (n3 = lr[n3])(t4 = or(t4), r3 = cr(r3), null, e3);
    }
    function pr() {
      return typeof globalThis == "object" ? globalThis : Function("return this")();
    }
    function dr(n3) {
      return n3 === 0 ? Nt(pr()) : (n3 = cr(n3), Nt(pr()[n3]));
    }
    function yr(n3) {
      var t4 = lr.length;
      return lr.push(n3), t4;
    }
    function hr(n3, t4) {
      for (var r3 = new Array(n3), e3 = 0; e3 < n3; ++e3)
        r3[e3] = ar(V[(t4 >> 2) + e3], "parameter " + e3);
      return r3;
    }
    function vr(n3, t4) {
      for (var r3 = hr(n3, t4), e3 = r3[0], i2 = e3.name + "_$" + r3.slice(1).map(function(n4) {
        return n4.name;
      }).join("_") + "$", o3 = ["retType"], a2 = [e3], u2 = "", s2 = 0; s2 < n3 - 1; ++s2)
        u2 += (s2 !== 0 ? ", " : "") + "arg" + s2, o3.push("argType" + s2), a2.push(r3[1 + s2]);
      var c2 = "return function " + jn("methodCaller_" + i2) + "(handle, name, destructors, args) {\n", l2 = 0;
      for (s2 = 0; s2 < n3 - 1; ++s2)
        c2 += "    var arg" + s2 + " = argType" + s2 + ".readValueFromPointer(args" + (l2 ? "+" + l2 : "") + ");\n", l2 += r3[s2 + 1].argPackAdvance;
      for (c2 += "    var rv = handle[name](" + u2 + ");\n", s2 = 0; s2 < n3 - 1; ++s2)
        r3[s2 + 1].deleteObject && (c2 += "    argType" + s2 + ".deleteObject(arg" + s2 + ");\n");
      return e3.isVoid || (c2 += "    return retType.toWireType(destructors, rv);\n"), c2 += "};\n", o3.push(c2), yr(Ut(Function, o3).apply(null, a2));
    }
    function mr(n3) {
      return n3 = cr(n3), Nt(e2[n3]);
    }
    function gr(n3, t4) {
      return Nt((n3 = or(n3))[t4 = or(t4)]);
    }
    function wr(n3) {
      n3 > 4 && (zt[n3].refcount += 1);
    }
    function br(n3) {
      for (var t4 = "", r3 = 0; r3 < n3; ++r3)
        t4 += (r3 !== 0 ? ", " : "") + "arg" + r3;
      var i2 = "return function emval_allocator_" + n3 + "(constructor, argTypes, args) {\n";
      for (r3 = 0; r3 < n3; ++r3)
        i2 += "var argType" + r3 + " = requireRegisteredType(Module['HEAP32'][(argTypes >> 2) + " + r3 + '], "parameter ' + r3 + '");\nvar arg' + r3 + " = argType" + r3 + ".readValueFromPointer(args);\nargs += argType" + r3 + "['argPackAdvance'];\n";
      return i2 += "var obj = new constructor(" + t4 + ");\nreturn __emval_register(obj);\n}\n", new Function("requireRegisteredType", "Module", "__emval_register", i2)(ar, e2, Nt);
    }
    var Cr = {};
    function Tr(n3, t4, r3, e3) {
      n3 = or(n3);
      var i2 = Cr[t4];
      return i2 || (i2 = br(t4), Cr[t4] = i2), i2(n3, r3, e3);
    }
    function $r(n3) {
      return Nt(cr(n3));
    }
    function _r(n3) {
      Dt(zt[n3].value), qt(n3);
    }
    function Pr() {
      yn();
    }
    function Ar() {
      return x.length;
    }
    function Er(n3, t4, r3) {
      x.copyWithin(n3, t4, t4 + r3);
    }
    function Wr(n3) {
      try {
        return v.grow(n3 - I.byteLength + 65535 >> 16), L(v.buffer), 1;
      } catch (t4) {
      }
    }
    function Sr(n3) {
      var t4 = Ar(), r3 = 65536, e3 = 2147483648 - r3;
      if (n3 > e3)
        return false;
      for (var i2 = 16777216, o3 = 1; o3 <= 4; o3 *= 2) {
        var a2 = t4 * (1 + 0.2 / o3);
        if (a2 = Math.min(a2, n3 + 100663296), Wr(Math.min(e3, G(Math.max(i2, n3, a2), r3))))
          return true;
      }
      return false;
    }
    var Fr = { mappings: {}, buffers: [null, [], []], printChar: function(n3, t4) {
      var r3 = Fr.buffers[n3];
      t4 === 0 || t4 === 10 ? ((n3 === 1 ? m : g)($(r3, 0)), r3.length = 0) : r3.push(t4);
    }, varargs: void 0, get: function() {
      return Fr.varargs += 4, V[Fr.varargs - 4 >> 2];
    }, getStr: function(n3) {
      return _(n3);
    }, get64: function(n3, t4) {
      return n3;
    } };
    function Or(n3) {
      return 0;
    }
    function jr(n3, t4, r3, e3, i2) {
    }
    function kr(n3, t4, r3, e3) {
      for (var i2 = 0, o3 = 0; o3 < r3; o3++) {
        for (var a2 = V[t4 + 8 * o3 >> 2], u2 = V[t4 + (8 * o3 + 4) >> 2], s2 = 0; s2 < u2; s2++)
          Fr.printChar(n3, x[a2 + s2]);
        i2 += u2;
      }
      return V[e3 >> 2] = i2, 0;
    }
    function Rr(n3) {
      return (n3 = +n3) >= 0 ? +cn(n3 + 0.5) : +sn(n3 - 0.5);
    }
    function Ir(n3) {
    }
    _n(), In = e2.BindingError = Rn(Error, "BindingError"), xn = e2.InternalError = Rn(Error, "InternalError"), et(), Et(), Ct(), Ot = e2.UnboundTypeError = Rn(Error, "UnboundTypeError"), Lt();
    var Dr = { G: Cn, D: Tn, A: Hn, t: Rt, s: xt, c: Vt, z: Xt, j: Zt, x: Kt, d: nr, b: tr, k: rr, i: er, B: ir, r: ur, m: fr, a: qt, F: dr, n: vr, p: mr, f: gr, h: wr, o: Tr, g: $r, q: _r, E: Pr, w: Er, y: Sr, C: Or, u: jr, l: kr, memory: v, e: Rr, v: Ir, table: w }, xr = bn();
    e2.asm = xr;
    var Ur, Mr = e2.___wasm_call_ctors = function() {
      return (Mr = e2.___wasm_call_ctors = e2.asm.H).apply(null, arguments);
    }, Vr = e2._malloc = function() {
      return (Vr = e2._malloc = e2.asm.I).apply(null, arguments);
    }, Hr = e2._free = function() {
      return (Hr = e2._free = e2.asm.J).apply(null, arguments);
    }, zr = e2.___getTypeName = function() {
      return (zr = e2.___getTypeName = e2.asm.K).apply(null, arguments);
    };
    function qr(n3) {
      this.name = "ExitStatus", this.message = "Program terminated with exit(" + n3 + ")", this.status = n3;
    }
    function Br(n3) {
      function t4() {
        Ur || (Ur = true, e2.calledRun = true, b || (rn(), en(), e2.onRuntimeInitialized && e2.onRuntimeInitialized(), on()));
      }
      ln > 0 || (tn(), ln > 0 || (e2.setStatus ? (e2.setStatus("Running..."), setTimeout(function() {
        setTimeout(function() {
          e2.setStatus("");
        }, 1), t4();
      }, 1)) : t4()));
    }
    if (e2.___embind_register_native_and_builtin_types = function() {
      return (e2.___embind_register_native_and_builtin_types = e2.asm.L).apply(null, arguments);
    }, e2.dynCall_viii = function() {
      return (e2.dynCall_viii = e2.asm.M).apply(null, arguments);
    }, e2.dynCall_ii = function() {
      return (e2.dynCall_ii = e2.asm.N).apply(null, arguments);
    }, e2.dynCall_vi = function() {
      return (e2.dynCall_vi = e2.asm.O).apply(null, arguments);
    }, e2.dynCall_v = function() {
      return (e2.dynCall_v = e2.asm.P).apply(null, arguments);
    }, e2.dynCall_iii = function() {
      return (e2.dynCall_iii = e2.asm.Q).apply(null, arguments);
    }, e2.dynCall_vii = function() {
      return (e2.dynCall_vii = e2.asm.R).apply(null, arguments);
    }, e2.dynCall_iiii = function() {
      return (e2.dynCall_iiii = e2.asm.S).apply(null, arguments);
    }, e2.dynCall_iiiii = function() {
      return (e2.dynCall_iiiii = e2.asm.T).apply(null, arguments);
    }, e2.dynCall_iiiiii = function() {
      return (e2.dynCall_iiiiii = e2.asm.U).apply(null, arguments);
    }, e2.dynCall_iiiiiiii = function() {
      return (e2.dynCall_iiiiiiii = e2.asm.V).apply(null, arguments);
    }, e2.dynCall_iiiiiiiii = function() {
      return (e2.dynCall_iiiiiiiii = e2.asm.W).apply(null, arguments);
    }, e2.dynCall_iidiiii = function() {
      return (e2.dynCall_iidiiii = e2.asm.X).apply(null, arguments);
    }, e2.dynCall_jiji = function() {
      return (e2.dynCall_jiji = e2.asm.Y).apply(null, arguments);
    }, e2.dynCall_viiiiii = function() {
      return (e2.dynCall_viiiiii = e2.asm.Z).apply(null, arguments);
    }, e2.dynCall_viiiii = function() {
      return (e2.dynCall_viiiii = e2.asm._).apply(null, arguments);
    }, e2.dynCall_viiii = function() {
      return (e2.dynCall_viiii = e2.asm.$).apply(null, arguments);
    }, e2.asm = xr, e2.then = function(n3) {
      if (Ur)
        n3(e2);
      else {
        var t4 = e2.onRuntimeInitialized;
        e2.onRuntimeInitialized = function() {
          t4 && t4(), n3(e2);
        };
      }
      return e2;
    }, fn = function n3() {
      Ur || Br(), Ur || (fn = n3);
    }, e2.run = Br, e2.preInit)
      for (typeof e2.preInit == "function" && (e2.preInit = [e2.preInit]); e2.preInit.length > 0; )
        e2.preInit.pop()();
    return Br(), n2;
  });
  n.exports = e;
}), r = Object.freeze(Object.assign(Object.create(null), t, { default: t }));
export { r as b };
