var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __pow = Math.pow;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a2, b2) => {
  for (var prop in b2 || (b2 = {}))
    if (__hasOwnProp.call(b2, prop))
      __defNormalProp(a2, prop, b2[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b2)) {
      if (__propIsEnum.call(b2, prop))
        __defNormalProp(a2, prop, b2[prop]);
    }
  return a2;
};
var __spreadProps = (a2, b2) => __defProps(a2, __getOwnPropDescs(b2));
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e2) {
        reject(e2);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e2) {
        reject(e2);
      }
    };
    var step = (x2) => x2.done ? resolve(x2.value) : Promise.resolve(x2.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
import { aa as s$2, ao as b$2, am as m$2, f9 as p$4, fa as z, cR as o$3, ae as e$5, af as y$2, cr as M$1, ag as i$5, dA as a, a4 as n$7, b$ as e$6, a5 as r$5, gq as y$3 } from "./vendor.74d5941c.js";
import { u as u$2, n as n$8, h as h$1, l as l$2, c as c$2, a as u$3, s as s$3, i as i$6, f as f$2, r as r$6 } from "./pixelUtils.5399eb4b.js";
import { o as o$2 } from "./_commonjsHelpers.f2a458db.js";
import { m as m$3 } from "./LercCodec.7b2d60e1.js";
var e$4 = o$2(function(t2) {
  var e2;
  (e2 = function() {
    var t3 = function() {
      function t4() {
        this.pos = 0, this.bufferLength = 0, this.eof = false, this.buffer = null;
      }
      return t4.prototype = { ensureBuffer: function(t5) {
        var e3 = this.buffer, r2 = e3 ? e3.byteLength : 0;
        if (t5 < r2)
          return e3;
        for (var i2 = 512; i2 < t5; )
          i2 <<= 1;
        for (var s2 = new Uint8Array(i2), f2 = 0; f2 < r2; ++f2)
          s2[f2] = e3[f2];
        return this.buffer = s2;
      }, getByte: function() {
        for (var t5 = this.pos; this.bufferLength <= t5; ) {
          if (this.eof)
            return null;
          this.readBlock();
        }
        return this.buffer[this.pos++];
      }, getBytes: function(t5) {
        var e3 = this.pos;
        if (t5) {
          this.ensureBuffer(e3 + t5);
          for (var r2 = e3 + t5; !this.eof && this.bufferLength < r2; )
            this.readBlock();
          var i2 = this.bufferLength;
          r2 > i2 && (r2 = i2);
        } else {
          for (; !this.eof; )
            this.readBlock();
          r2 = this.bufferLength;
        }
        return this.pos = r2, this.buffer.subarray(e3, r2);
      }, lookChar: function() {
        for (var t5 = this.pos; this.bufferLength <= t5; ) {
          if (this.eof)
            return null;
          this.readBlock();
        }
        return String.fromCharCode(this.buffer[this.pos]);
      }, getChar: function() {
        for (var t5 = this.pos; this.bufferLength <= t5; ) {
          if (this.eof)
            return null;
          this.readBlock();
        }
        return String.fromCharCode(this.buffer[this.pos++]);
      }, makeSubStream: function(t5, e3, r2) {
        for (var i2 = t5 + e3; this.bufferLength <= i2 && !this.eof; )
          this.readBlock();
        return new Stream(this.buffer, t5, e3, r2);
      }, skip: function(t5) {
        t5 || (t5 = 1), this.pos += t5;
      }, reset: function() {
        this.pos = 0;
      } }, t4;
    }();
    return function() {
      if (!self || !self.Uint32Array)
        return null;
      var e3 = new Uint32Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), r2 = new Uint32Array([3, 4, 5, 6, 7, 8, 9, 10, 65547, 65549, 65551, 65553, 131091, 131095, 131099, 131103, 196643, 196651, 196659, 196667, 262211, 262227, 262243, 262259, 327811, 327843, 327875, 327907, 258, 258, 258]), i2 = new Uint32Array([1, 2, 3, 4, 65541, 65543, 131081, 131085, 196625, 196633, 262177, 262193, 327745, 327777, 393345, 393409, 459009, 459137, 524801, 525057, 590849, 591361, 657409, 658433, 724993, 727041, 794625, 798721, 868353, 876545]), s2 = [new Uint32Array([459008, 524368, 524304, 524568, 459024, 524400, 524336, 590016, 459016, 524384, 524320, 589984, 524288, 524416, 524352, 590048, 459012, 524376, 524312, 589968, 459028, 524408, 524344, 590032, 459020, 524392, 524328, 59e4, 524296, 524424, 524360, 590064, 459010, 524372, 524308, 524572, 459026, 524404, 524340, 590024, 459018, 524388, 524324, 589992, 524292, 524420, 524356, 590056, 459014, 524380, 524316, 589976, 459030, 524412, 524348, 590040, 459022, 524396, 524332, 590008, 524300, 524428, 524364, 590072, 459009, 524370, 524306, 524570, 459025, 524402, 524338, 590020, 459017, 524386, 524322, 589988, 524290, 524418, 524354, 590052, 459013, 524378, 524314, 589972, 459029, 524410, 524346, 590036, 459021, 524394, 524330, 590004, 524298, 524426, 524362, 590068, 459011, 524374, 524310, 524574, 459027, 524406, 524342, 590028, 459019, 524390, 524326, 589996, 524294, 524422, 524358, 590060, 459015, 524382, 524318, 589980, 459031, 524414, 524350, 590044, 459023, 524398, 524334, 590012, 524302, 524430, 524366, 590076, 459008, 524369, 524305, 524569, 459024, 524401, 524337, 590018, 459016, 524385, 524321, 589986, 524289, 524417, 524353, 590050, 459012, 524377, 524313, 589970, 459028, 524409, 524345, 590034, 459020, 524393, 524329, 590002, 524297, 524425, 524361, 590066, 459010, 524373, 524309, 524573, 459026, 524405, 524341, 590026, 459018, 524389, 524325, 589994, 524293, 524421, 524357, 590058, 459014, 524381, 524317, 589978, 459030, 524413, 524349, 590042, 459022, 524397, 524333, 590010, 524301, 524429, 524365, 590074, 459009, 524371, 524307, 524571, 459025, 524403, 524339, 590022, 459017, 524387, 524323, 589990, 524291, 524419, 524355, 590054, 459013, 524379, 524315, 589974, 459029, 524411, 524347, 590038, 459021, 524395, 524331, 590006, 524299, 524427, 524363, 590070, 459011, 524375, 524311, 524575, 459027, 524407, 524343, 590030, 459019, 524391, 524327, 589998, 524295, 524423, 524359, 590062, 459015, 524383, 524319, 589982, 459031, 524415, 524351, 590046, 459023, 524399, 524335, 590014, 524303, 524431, 524367, 590078, 459008, 524368, 524304, 524568, 459024, 524400, 524336, 590017, 459016, 524384, 524320, 589985, 524288, 524416, 524352, 590049, 459012, 524376, 524312, 589969, 459028, 524408, 524344, 590033, 459020, 524392, 524328, 590001, 524296, 524424, 524360, 590065, 459010, 524372, 524308, 524572, 459026, 524404, 524340, 590025, 459018, 524388, 524324, 589993, 524292, 524420, 524356, 590057, 459014, 524380, 524316, 589977, 459030, 524412, 524348, 590041, 459022, 524396, 524332, 590009, 524300, 524428, 524364, 590073, 459009, 524370, 524306, 524570, 459025, 524402, 524338, 590021, 459017, 524386, 524322, 589989, 524290, 524418, 524354, 590053, 459013, 524378, 524314, 589973, 459029, 524410, 524346, 590037, 459021, 524394, 524330, 590005, 524298, 524426, 524362, 590069, 459011, 524374, 524310, 524574, 459027, 524406, 524342, 590029, 459019, 524390, 524326, 589997, 524294, 524422, 524358, 590061, 459015, 524382, 524318, 589981, 459031, 524414, 524350, 590045, 459023, 524398, 524334, 590013, 524302, 524430, 524366, 590077, 459008, 524369, 524305, 524569, 459024, 524401, 524337, 590019, 459016, 524385, 524321, 589987, 524289, 524417, 524353, 590051, 459012, 524377, 524313, 589971, 459028, 524409, 524345, 590035, 459020, 524393, 524329, 590003, 524297, 524425, 524361, 590067, 459010, 524373, 524309, 524573, 459026, 524405, 524341, 590027, 459018, 524389, 524325, 589995, 524293, 524421, 524357, 590059, 459014, 524381, 524317, 589979, 459030, 524413, 524349, 590043, 459022, 524397, 524333, 590011, 524301, 524429, 524365, 590075, 459009, 524371, 524307, 524571, 459025, 524403, 524339, 590023, 459017, 524387, 524323, 589991, 524291, 524419, 524355, 590055, 459013, 524379, 524315, 589975, 459029, 524411, 524347, 590039, 459021, 524395, 524331, 590007, 524299, 524427, 524363, 590071, 459011, 524375, 524311, 524575, 459027, 524407, 524343, 590031, 459019, 524391, 524327, 589999, 524295, 524423, 524359, 590063, 459015, 524383, 524319, 589983, 459031, 524415, 524351, 590047, 459023, 524399, 524335, 590015, 524303, 524431, 524367, 590079]), 9], f2 = [new Uint32Array([327680, 327696, 327688, 327704, 327684, 327700, 327692, 327708, 327682, 327698, 327690, 327706, 327686, 327702, 327694, 0, 327681, 327697, 327689, 327705, 327685, 327701, 327693, 327709, 327683, 327699, 327691, 327707, 327687, 327703, 327695, 0]), 5];
      function n2(t4) {
        throw new Error(t4);
      }
      function o2(e4) {
        var r3 = 0, i3 = e4[r3++], s3 = e4[r3++];
        i3 != -1 && s3 != -1 || n2("Invalid header in flate stream"), (15 & i3) != 8 && n2("Unknown compression method in flate stream"), ((i3 << 8) + s3) % 31 != 0 && n2("Bad FCHECK in flate stream"), 32 & s3 && n2("FDICT bit set in flate stream"), this.bytes = e4, this.bytesPos = r3, this.codeSize = 0, this.codeBuf = 0, t3.call(this);
      }
      return o2.prototype = Object.create(t3.prototype), o2.prototype.getBits = function(t4) {
        for (var e4, r3 = this.codeSize, i3 = this.codeBuf, s3 = this.bytes, f3 = this.bytesPos; r3 < t4; )
          (e4 = s3[f3++]) === void 0 && n2("Bad encoding in flate stream"), i3 |= e4 << r3, r3 += 8;
        return e4 = i3 & (1 << t4) - 1, this.codeBuf = i3 >> t4, this.codeSize = r3 -= t4, this.bytesPos = f3, e4;
      }, o2.prototype.getCode = function(t4) {
        for (var e4 = t4[0], r3 = t4[1], i3 = this.codeSize, s3 = this.codeBuf, f3 = this.bytes, o3 = this.bytesPos; i3 < r3; ) {
          var a2;
          (a2 = f3[o3++]) === void 0 && n2("Bad encoding in flate stream"), s3 |= a2 << i3, i3 += 8;
        }
        var h2 = e4[s3 & (1 << r3) - 1], u2 = h2 >> 16, l2 = 65535 & h2;
        return (i3 == 0 || i3 < u2 || u2 == 0) && n2("Bad encoding in flate stream"), this.codeBuf = s3 >> u2, this.codeSize = i3 - u2, this.bytesPos = o3, l2;
      }, o2.prototype.generateHuffmanTable = function(t4) {
        for (var e4 = t4.length, r3 = 0, i3 = 0; i3 < e4; ++i3)
          t4[i3] > r3 && (r3 = t4[i3]);
        for (var s3 = 1 << r3, f3 = new Uint32Array(s3), n3 = 1, o3 = 0, a2 = 2; n3 <= r3; ++n3, o3 <<= 1, a2 <<= 1)
          for (var h2 = 0; h2 < e4; ++h2)
            if (t4[h2] == n3) {
              var u2 = 0, l2 = o3;
              for (i3 = 0; i3 < n3; ++i3)
                u2 = u2 << 1 | 1 & l2, l2 >>= 1;
              for (i3 = u2; i3 < s3; i3 += a2)
                f3[i3] = n3 << 16 | h2;
              ++o3;
            }
        return [f3, r3];
      }, o2.prototype.readBlock = function() {
        function t4(t5, e4, r3, i3, s3) {
          for (var f3 = t5.getBits(r3) + i3; f3-- > 0; )
            e4[v2++] = s3;
        }
        var o3 = this.getBits(3);
        if (1 & o3 && (this.eof = true), (o3 >>= 1) != 0) {
          var a2, h2;
          if (o3 == 1)
            a2 = s2, h2 = f2;
          else if (o3 == 2) {
            for (var u2 = this.getBits(5) + 257, l2 = this.getBits(5) + 1, c2 = this.getBits(4) + 4, d2 = Array(e3.length), v2 = 0; v2 < c2; )
              d2[e3[v2++]] = this.getBits(3);
            for (var b2 = this.generateHuffmanTable(d2), g2 = 0, B = (v2 = 0, u2 + l2), p2 = new Array(B); v2 < B; ) {
              var y2 = this.getCode(b2);
              y2 == 16 ? t4(this, p2, 2, 3, g2) : y2 == 17 ? t4(this, p2, 3, 3, g2 = 0) : y2 == 18 ? t4(this, p2, 7, 11, g2 = 0) : p2[v2++] = g2 = y2;
            }
            a2 = this.generateHuffmanTable(p2.slice(0, u2)), h2 = this.generateHuffmanTable(p2.slice(u2, B));
          } else
            n2("Unknown block type in flate stream");
          for (var m2 = (j = this.buffer) ? j.length : 0, k2 = this.bufferLength; ; ) {
            var w2 = this.getCode(a2);
            if (w2 < 256)
              k2 + 1 >= m2 && (m2 = (j = this.ensureBuffer(k2 + 1)).length), j[k2++] = w2;
            else {
              if (w2 == 256)
                return void (this.bufferLength = k2);
              var C2 = (w2 = r2[w2 -= 257]) >> 16;
              C2 > 0 && (C2 = this.getBits(C2)), g2 = (65535 & w2) + C2, w2 = this.getCode(h2), (C2 = (w2 = i2[w2]) >> 16) > 0 && (C2 = this.getBits(C2));
              var L2 = (65535 & w2) + C2;
              k2 + g2 >= m2 && (m2 = (j = this.ensureBuffer(k2 + g2)).length);
              for (var S2 = 0; S2 < g2; ++S2, ++k2)
                j[k2] = j[k2 - L2];
            }
          }
        } else {
          var A2, U2 = this.bytes, P = this.bytesPos;
          (A2 = U2[P++]) === void 0 && n2("Bad block header in flate stream");
          var z2 = A2;
          (A2 = U2[P++]) === void 0 && n2("Bad block header in flate stream"), z2 |= A2 << 8, (A2 = U2[P++]) === void 0 && n2("Bad block header in flate stream");
          var H = A2;
          (A2 = U2[P++]) === void 0 && n2("Bad block header in flate stream"), (H |= A2 << 8) != (65535 & ~z2) && n2("Bad uncompressed block length in flate stream"), this.codeBuf = 0, this.codeSize = 0;
          var T2 = this.bufferLength, j = this.ensureBuffer(T2 + z2), x2 = T2 + z2;
          this.bufferLength = x2;
          for (var E2 = T2; E2 < x2; ++E2) {
            if ((A2 = U2[P++]) === void 0) {
              this.eof = true;
              break;
            }
            j[E2] = A2;
          }
          this.bytesPos = P;
        }
      }, o2;
    }();
  }()) !== void 0 && (t2.exports = e2);
});
class i$4 {
  constructor(t2) {
    t2 && (this.canvas = t2.canvas, this.ctx = t2.ctx || t2.canvas && t2.canvas.getContext("2d"));
  }
  decode(n2, r2, s2) {
    if (!n2 || n2.byteLength < 10)
      throw new s$2("imagecanvasdecoder: decode", "required a valid encoded data as input.");
    let { width: c2, height: o2, format: h2 } = r2;
    const { applyJpegMask: d2 } = r2;
    if (d2 && (!c2 || !o2))
      throw new s$2("imagecanvasdecoder: decode", "image width and height are needed to apply jpeg mask directly to canvas");
    return new Promise((t2, l2) => {
      let g2 = null;
      h2 === "jpg" && d2 && (g2 = i$4.getMask(n2, r2));
      const w2 = new Blob([new Uint8Array(n2)], { type: "image/" + h2 == "jpg" ? "jpeg" : h2 }), v2 = URL.createObjectURL(w2), m2 = new Image();
      let p2;
      m2.src = v2, m2.onload = () => {
        if (URL.revokeObjectURL(v2), b$2(s2))
          return void l2(m$2());
        c2 = m2.width, o2 = m2.height, this.canvas ? (this.canvas.width === c2 && this.canvas.height === o2 || (this.canvas.width = c2, this.canvas.height = o2), this.ctx.clearRect(0, 0, c2, o2)) : (this.canvas = document.createElement("canvas"), this.canvas.width = c2, this.canvas.height = o2, this.ctx = this.canvas.getContext("2d")), this.ctx.drawImage(m2, 0, 0);
        const n3 = this.ctx.getImageData(0, 0, c2, o2);
        let i2;
        if (p2 = n3.data, r2.renderOnCanvas) {
          if (g2)
            for (i2 = 0; i2 < g2.length; i2++)
              g2[i2] ? p2[4 * i2 + 3] = 255 : p2[4 * i2 + 3] = 0;
          return this.ctx.putImageData(n3, 0, 0), void t2(null);
        }
        const h3 = c2 * o2, d3 = new Uint8Array(h3), w3 = new Uint8Array(h3), f2 = new Uint8Array(h3);
        if (g2)
          for (i2 = 0; i2 < h3; i2++)
            d3[i2] = p2[4 * i2], w3[i2] = p2[4 * i2 + 1], f2[i2] = p2[4 * i2 + 2];
        else
          for (g2 = new Uint8Array(h3), i2 = 0; i2 < h3; i2++)
            d3[i2] = p2[4 * i2], w3[i2] = p2[4 * i2 + 1], f2[i2] = p2[4 * i2 + 2], g2[i2] = p2[4 * i2 + 3];
        t2({ width: c2, height: o2, pixels: [d3, w3, f2], mask: g2, pixelType: "u8" });
      }, m2.onerror = () => {
        URL.revokeObjectURL(v2), l2("cannot load image");
      };
    });
  }
  static getMask(t2, e2) {
    let a2 = null;
    try {
      const i2 = new Uint8Array(t2), r2 = Math.ceil(i2.length / 2);
      let s2 = 0;
      const c2 = i2.length - 2;
      for (s2 = r2; s2 < c2 && (i2[s2] !== 255 || i2[s2 + 1] !== 217); s2++)
        ;
      if (s2 += 2, s2 < i2.length - 1) {
        const t3 = new e$4(i2.subarray(s2)).getBytes();
        a2 = new Uint8Array(e2.width * e2.height);
        let r3 = 0;
        for (let e3 = 0; e3 < t3.length; e3++)
          for (let n2 = 7; n2 >= 0; n2--)
            a2[r3++] = t3[e3] >> n2 & 1;
      }
    } catch (i2) {
    }
    return a2;
  }
}
var n$6 = o$2(function(e2) {
  var n2, r2;
  n2 = function() {
    var e3 = function() {
      function e4(e5) {
        this.message = "JPEG error: " + e5;
      }
      return e4.prototype = new Error(), e4.prototype.name = "JpegError", e4.constructor = e4, e4;
    }();
    return function() {
      if (!self || !self.Uint8ClampedArray)
        return null;
      var n3 = new Uint8Array([0, 1, 8, 16, 9, 2, 3, 10, 17, 24, 32, 25, 18, 11, 4, 5, 12, 19, 26, 33, 40, 48, 41, 34, 27, 20, 13, 6, 7, 14, 21, 28, 35, 42, 49, 56, 57, 50, 43, 36, 29, 22, 15, 23, 30, 37, 44, 51, 58, 59, 52, 45, 38, 31, 39, 46, 53, 60, 61, 54, 47, 55, 62, 63]), r3 = 4017, o2 = 799, a2 = 3406, t2 = 2276, i2 = 1567, s2 = 3784, c2 = 5793, f2 = 2896;
      function l2() {
        this.decodeTransform = null, this.colorTransform = -1;
      }
      function u2(e4, n4) {
        for (var r4, o3, a3 = 0, t3 = [], i3 = 16; i3 > 0 && !e4[i3 - 1]; )
          i3--;
        t3.push({ children: [], index: 0 });
        var s3, c3 = t3[0];
        for (r4 = 0; r4 < i3; r4++) {
          for (o3 = 0; o3 < e4[r4]; o3++) {
            for ((c3 = t3.pop()).children[c3.index] = n4[a3]; c3.index > 0; )
              c3 = t3.pop();
            for (c3.index++, t3.push(c3); t3.length <= r4; )
              t3.push(s3 = { children: [], index: 0 }), c3.children[c3.index] = s3.children, c3 = s3;
            a3++;
          }
          r4 + 1 < i3 && (t3.push(s3 = { children: [], index: 0 }), c3.children[c3.index] = s3.children, c3 = s3);
        }
        return t3[0].children;
      }
      function h2(e4, n4, r4) {
        return 64 * ((e4.blocksPerLine + 1) * n4 + r4);
      }
      function v2(r4, o3, a3, t3, i3, s3, c3, f3, l3) {
        var u3 = a3.mcusPerLine, v3 = a3.progressive, m3 = o3, d3 = 0, p2 = 0;
        function k2() {
          if (p2 > 0)
            return p2--, d3 >> p2 & 1;
          if ((d3 = r4[o3++]) === 255) {
            var n4 = r4[o3++];
            if (n4)
              throw new e3("unexpected marker " + (d3 << 8 | n4).toString(16));
          }
          return p2 = 7, d3 >>> 7;
        }
        function g2(n4) {
          for (var r5 = n4; ; ) {
            if (typeof (r5 = r5[k2()]) == "number")
              return r5;
            if (typeof r5 != "object")
              throw new e3("invalid huffman sequence");
          }
        }
        function C2(e4) {
          for (var n4 = 0; e4 > 0; )
            n4 = n4 << 1 | k2(), e4--;
          return n4;
        }
        function w2(e4) {
          if (e4 === 1)
            return k2() === 1 ? 1 : -1;
          var n4 = C2(e4);
          return n4 >= 1 << e4 - 1 ? n4 : n4 + (-1 << e4) + 1;
        }
        function x2(e4, r5) {
          var o4 = g2(e4.huffmanTableDC), a4 = o4 === 0 ? 0 : w2(o4);
          e4.blockData[r5] = e4.pred += a4;
          for (var t4 = 1; t4 < 64; ) {
            var i4 = g2(e4.huffmanTableAC), s4 = 15 & i4, c4 = i4 >> 4;
            if (s4 !== 0) {
              var f4 = n3[t4 += c4];
              e4.blockData[r5 + f4] = w2(s4), t4++;
            } else {
              if (c4 < 15)
                break;
              t4 += 16;
            }
          }
        }
        function y2(e4, n4) {
          var r5 = g2(e4.huffmanTableDC), o4 = r5 === 0 ? 0 : w2(r5) << l3;
          e4.blockData[n4] = e4.pred += o4;
        }
        function D2(e4, n4) {
          e4.blockData[n4] |= k2() << l3;
        }
        var T2 = 0;
        function P(e4, r5) {
          if (T2 > 0)
            T2--;
          else
            for (var o4 = s3, a4 = c3; o4 <= a4; ) {
              var t4 = g2(e4.huffmanTableAC), i4 = 15 & t4, f4 = t4 >> 4;
              if (i4 !== 0) {
                var u4 = n3[o4 += f4];
                e4.blockData[r5 + u4] = w2(i4) * (1 << l3), o4++;
              } else {
                if (f4 < 15) {
                  T2 = C2(f4) + (1 << f4) - 1;
                  break;
                }
                o4 += 16;
              }
            }
        }
        var L2, A2 = 0;
        function _2(r5, o4) {
          for (var a4, t4, i4 = s3, f4 = c3, u4 = 0; i4 <= f4; ) {
            var h3 = n3[i4];
            switch (A2) {
              case 0:
                if (u4 = (t4 = g2(r5.huffmanTableAC)) >> 4, (a4 = 15 & t4) == 0)
                  u4 < 15 ? (T2 = C2(u4) + (1 << u4), A2 = 4) : (u4 = 16, A2 = 1);
                else {
                  if (a4 !== 1)
                    throw new e3("invalid ACn encoding");
                  L2 = w2(a4), A2 = u4 ? 2 : 3;
                }
                continue;
              case 1:
              case 2:
                r5.blockData[o4 + h3] ? r5.blockData[o4 + h3] += k2() << l3 : --u4 == 0 && (A2 = A2 === 2 ? 3 : 0);
                break;
              case 3:
                r5.blockData[o4 + h3] ? r5.blockData[o4 + h3] += k2() << l3 : (r5.blockData[o4 + h3] = L2 << l3, A2 = 0);
                break;
              case 4:
                r5.blockData[o4 + h3] && (r5.blockData[o4 + h3] += k2() << l3);
            }
            i4++;
          }
          A2 === 4 && --T2 == 0 && (A2 = 0);
        }
        function U2(e4, n4, r5, o4, a4) {
          var t4 = r5 % u3;
          n4(e4, h2(e4, (r5 / u3 | 0) * e4.v + o4, t4 * e4.h + a4));
        }
        function z2(e4, n4, r5) {
          n4(e4, h2(e4, r5 / e4.blocksPerLine | 0, r5 % e4.blocksPerLine));
        }
        var I2, M2, Y, q, S2, H, R2 = t3.length;
        H = v3 ? s3 === 0 ? f3 === 0 ? y2 : D2 : f3 === 0 ? P : _2 : x2;
        var j, E2, J, V, B = 0;
        for (E2 = R2 === 1 ? t3[0].blocksPerLine * t3[0].blocksPerColumn : u3 * a3.mcusPerColumn; B < E2; ) {
          var N2 = i3 ? Math.min(E2 - B, i3) : E2;
          for (M2 = 0; M2 < R2; M2++)
            t3[M2].pred = 0;
          if (T2 = 0, R2 === 1)
            for (I2 = t3[0], S2 = 0; S2 < N2; S2++)
              z2(I2, H, B), B++;
          else
            for (S2 = 0; S2 < N2; S2++) {
              for (M2 = 0; M2 < R2; M2++)
                for (J = (I2 = t3[M2]).h, V = I2.v, Y = 0; Y < V; Y++)
                  for (q = 0; q < J; q++)
                    U2(I2, H, B, Y, q);
              B++;
            }
          p2 = 0, (j = b2(r4, o3)) && j.invalid && (console.log("decodeScan - unexpected MCU data, next marker is: " + j.invalid), o3 = j.offset);
          var G = j && j.marker;
          if (!G || G <= 65280)
            throw new e3("marker was not found");
          if (!(G >= 65488 && G <= 65495))
            break;
          o3 += 2;
        }
        return (j = b2(r4, o3)) && j.invalid && (console.log("decodeScan - unexpected Scan data, next marker is: " + j.invalid), o3 = j.offset), o3 - m3;
      }
      function m2(n4, l3, u3) {
        var h3, v3, m3, d3, b3, p2, k2, g2, C2, w2, x2, y2, D2, T2, P, L2, A2, _2 = n4.quantizationTable, U2 = n4.blockData;
        if (!_2)
          throw new e3("missing required Quantization Table.");
        for (var z2 = 0; z2 < 64; z2 += 8)
          C2 = U2[l3 + z2], w2 = U2[l3 + z2 + 1], x2 = U2[l3 + z2 + 2], y2 = U2[l3 + z2 + 3], D2 = U2[l3 + z2 + 4], T2 = U2[l3 + z2 + 5], P = U2[l3 + z2 + 6], L2 = U2[l3 + z2 + 7], C2 *= _2[z2], (w2 | x2 | y2 | D2 | T2 | P | L2) != 0 ? (w2 *= _2[z2 + 1], x2 *= _2[z2 + 2], y2 *= _2[z2 + 3], D2 *= _2[z2 + 4], T2 *= _2[z2 + 5], P *= _2[z2 + 6], L2 *= _2[z2 + 7], v3 = (h3 = (h3 = c2 * C2 + 128 >> 8) + (v3 = c2 * D2 + 128 >> 8) + 1 >> 1) - v3, A2 = (m3 = x2) * s2 + (d3 = P) * i2 + 128 >> 8, m3 = m3 * i2 - d3 * s2 + 128 >> 8, k2 = (b3 = (b3 = f2 * (w2 - L2) + 128 >> 8) + (k2 = T2 << 4) + 1 >> 1) - k2, p2 = (g2 = (g2 = f2 * (w2 + L2) + 128 >> 8) + (p2 = y2 << 4) + 1 >> 1) - p2, d3 = (h3 = h3 + (d3 = A2) + 1 >> 1) - d3, m3 = (v3 = v3 + m3 + 1 >> 1) - m3, A2 = b3 * t2 + g2 * a2 + 2048 >> 12, b3 = b3 * a2 - g2 * t2 + 2048 >> 12, g2 = A2, A2 = p2 * o2 + k2 * r3 + 2048 >> 12, p2 = p2 * r3 - k2 * o2 + 2048 >> 12, k2 = A2, u3[z2] = h3 + g2, u3[z2 + 7] = h3 - g2, u3[z2 + 1] = v3 + k2, u3[z2 + 6] = v3 - k2, u3[z2 + 2] = m3 + p2, u3[z2 + 5] = m3 - p2, u3[z2 + 3] = d3 + b3, u3[z2 + 4] = d3 - b3) : (A2 = c2 * C2 + 512 >> 10, u3[z2] = A2, u3[z2 + 1] = A2, u3[z2 + 2] = A2, u3[z2 + 3] = A2, u3[z2 + 4] = A2, u3[z2 + 5] = A2, u3[z2 + 6] = A2, u3[z2 + 7] = A2);
        for (var I2 = 0; I2 < 8; ++I2)
          C2 = u3[I2], ((w2 = u3[I2 + 8]) | (x2 = u3[I2 + 16]) | (y2 = u3[I2 + 24]) | (D2 = u3[I2 + 32]) | (T2 = u3[I2 + 40]) | (P = u3[I2 + 48]) | (L2 = u3[I2 + 56])) != 0 ? (v3 = (h3 = 4112 + ((h3 = c2 * C2 + 2048 >> 12) + (v3 = c2 * D2 + 2048 >> 12) + 1 >> 1)) - v3, A2 = (m3 = x2) * s2 + (d3 = P) * i2 + 2048 >> 12, m3 = m3 * i2 - d3 * s2 + 2048 >> 12, d3 = A2, k2 = (b3 = (b3 = f2 * (w2 - L2) + 2048 >> 12) + (k2 = T2) + 1 >> 1) - k2, p2 = (g2 = (g2 = f2 * (w2 + L2) + 2048 >> 12) + (p2 = y2) + 1 >> 1) - p2, A2 = b3 * t2 + g2 * a2 + 2048 >> 12, b3 = b3 * a2 - g2 * t2 + 2048 >> 12, g2 = A2, A2 = p2 * o2 + k2 * r3 + 2048 >> 12, p2 = p2 * r3 - k2 * o2 + 2048 >> 12, C2 = (C2 = (h3 = h3 + d3 + 1 >> 1) + g2) < 16 ? 0 : C2 >= 4080 ? 255 : C2 >> 4, w2 = (w2 = (v3 = v3 + m3 + 1 >> 1) + (k2 = A2)) < 16 ? 0 : w2 >= 4080 ? 255 : w2 >> 4, x2 = (x2 = (m3 = v3 - m3) + p2) < 16 ? 0 : x2 >= 4080 ? 255 : x2 >> 4, y2 = (y2 = (d3 = h3 - d3) + b3) < 16 ? 0 : y2 >= 4080 ? 255 : y2 >> 4, D2 = (D2 = d3 - b3) < 16 ? 0 : D2 >= 4080 ? 255 : D2 >> 4, T2 = (T2 = m3 - p2) < 16 ? 0 : T2 >= 4080 ? 255 : T2 >> 4, P = (P = v3 - k2) < 16 ? 0 : P >= 4080 ? 255 : P >> 4, L2 = (L2 = h3 - g2) < 16 ? 0 : L2 >= 4080 ? 255 : L2 >> 4, U2[l3 + I2] = C2, U2[l3 + I2 + 8] = w2, U2[l3 + I2 + 16] = x2, U2[l3 + I2 + 24] = y2, U2[l3 + I2 + 32] = D2, U2[l3 + I2 + 40] = T2, U2[l3 + I2 + 48] = P, U2[l3 + I2 + 56] = L2) : (A2 = (A2 = c2 * C2 + 8192 >> 14) < -2040 ? 0 : A2 >= 2024 ? 255 : A2 + 2056 >> 4, U2[l3 + I2] = A2, U2[l3 + I2 + 8] = A2, U2[l3 + I2 + 16] = A2, U2[l3 + I2 + 24] = A2, U2[l3 + I2 + 32] = A2, U2[l3 + I2 + 40] = A2, U2[l3 + I2 + 48] = A2, U2[l3 + I2 + 56] = A2);
      }
      function d2(e4, n4) {
        for (var r4 = n4.blocksPerLine, o3 = n4.blocksPerColumn, a3 = new Int16Array(64), t3 = 0; t3 < o3; t3++)
          for (var i3 = 0; i3 < r4; i3++)
            m2(n4, h2(n4, t3, i3), a3);
        return n4.blockData;
      }
      function b2(e4, n4, r4) {
        function o3(n5) {
          return e4[n5] << 8 | e4[n5 + 1];
        }
        var a3 = e4.length - 1, t3 = r4 < n4 ? r4 : n4;
        if (n4 >= a3)
          return null;
        var i3 = o3(n4);
        if (i3 >= 65472 && i3 <= 65534)
          return { invalid: null, marker: i3, offset: n4 };
        for (var s3 = o3(t3); !(s3 >= 65472 && s3 <= 65534); ) {
          if (++t3 >= a3)
            return null;
          s3 = o3(t3);
        }
        return { invalid: i3.toString(16), marker: s3, offset: t3 };
      }
      return l2.prototype = { parse: function(r4) {
        function o3() {
          var e4 = r4[c3] << 8 | r4[c3 + 1];
          return c3 += 2, e4;
        }
        function a3() {
          var e4 = o3(), n4 = c3 + e4 - 2, a4 = b2(r4, n4, c3);
          a4 && a4.invalid && (console.log("readDataBlock - incorrect length, next marker is: " + a4.invalid), n4 = a4.offset);
          var t4 = r4.subarray(c3, n4);
          return c3 += t4.length, t4;
        }
        function t3(e4) {
          for (var n4 = Math.ceil(e4.samplesPerLine / 8 / e4.maxH), r5 = Math.ceil(e4.scanLines / 8 / e4.maxV), o4 = 0; o4 < e4.components.length; o4++) {
            R2 = e4.components[o4];
            var a4 = Math.ceil(Math.ceil(e4.samplesPerLine / 8) * R2.h / e4.maxH), t4 = Math.ceil(Math.ceil(e4.scanLines / 8) * R2.v / e4.maxV), i4 = n4 * R2.h, s4 = r5 * R2.v * 64 * (i4 + 1);
            R2.blockData = new Int16Array(s4), R2.blocksPerLine = a4, R2.blocksPerColumn = t4;
          }
          e4.mcusPerLine = n4, e4.mcusPerColumn = r5;
        }
        var i3, s3, c3 = 0, f3 = null, l3 = null, h3 = [], m3 = [], p2 = [], k2 = o3();
        if (k2 !== 65496)
          throw new e3("SOI not found");
        for (k2 = o3(); k2 !== 65497; ) {
          var g2, C2, w2;
          switch (k2) {
            case 65504:
            case 65505:
            case 65506:
            case 65507:
            case 65508:
            case 65509:
            case 65510:
            case 65511:
            case 65512:
            case 65513:
            case 65514:
            case 65515:
            case 65516:
            case 65517:
            case 65518:
            case 65519:
            case 65534:
              var x2 = a3();
              k2 === 65504 && x2[0] === 74 && x2[1] === 70 && x2[2] === 73 && x2[3] === 70 && x2[4] === 0 && (f3 = { version: { major: x2[5], minor: x2[6] }, densityUnits: x2[7], xDensity: x2[8] << 8 | x2[9], yDensity: x2[10] << 8 | x2[11], thumbWidth: x2[12], thumbHeight: x2[13], thumbData: x2.subarray(14, 14 + 3 * x2[12] * x2[13]) }), k2 === 65518 && x2[0] === 65 && x2[1] === 100 && x2[2] === 111 && x2[3] === 98 && x2[4] === 101 && (l3 = { version: x2[5] << 8 | x2[6], flags0: x2[7] << 8 | x2[8], flags1: x2[9] << 8 | x2[10], transformCode: x2[11] });
              break;
            case 65499:
              for (var y2 = o3() + c3 - 2; c3 < y2; ) {
                var D2 = r4[c3++], T2 = new Uint16Array(64);
                if (D2 >> 4 == 0)
                  for (C2 = 0; C2 < 64; C2++)
                    T2[n3[C2]] = r4[c3++];
                else {
                  if (D2 >> 4 != 1)
                    throw new e3("DQT - invalid table spec");
                  for (C2 = 0; C2 < 64; C2++)
                    T2[n3[C2]] = o3();
                }
                h3[15 & D2] = T2;
              }
              break;
            case 65472:
            case 65473:
            case 65474:
              if (i3)
                throw new e3("Only single frame JPEGs supported");
              o3(), (i3 = {}).extended = k2 === 65473, i3.progressive = k2 === 65474, i3.precision = r4[c3++], i3.scanLines = o3(), i3.samplesPerLine = o3(), i3.components = [], i3.componentIds = {};
              var P, L2 = r4[c3++], A2 = 0, _2 = 0;
              for (g2 = 0; g2 < L2; g2++) {
                P = r4[c3];
                var U2 = r4[c3 + 1] >> 4, z2 = 15 & r4[c3 + 1];
                A2 < U2 && (A2 = U2), _2 < z2 && (_2 = z2);
                var I2 = r4[c3 + 2];
                w2 = i3.components.push({ h: U2, v: z2, quantizationId: I2, quantizationTable: null }), i3.componentIds[P] = w2 - 1, c3 += 3;
              }
              i3.maxH = A2, i3.maxV = _2, t3(i3);
              break;
            case 65476:
              var M2 = o3();
              for (g2 = 2; g2 < M2; ) {
                var Y = r4[c3++], q = new Uint8Array(16), S2 = 0;
                for (C2 = 0; C2 < 16; C2++, c3++)
                  S2 += q[C2] = r4[c3];
                var H = new Uint8Array(S2);
                for (C2 = 0; C2 < S2; C2++, c3++)
                  H[C2] = r4[c3];
                g2 += 17 + S2, (Y >> 4 == 0 ? p2 : m3)[15 & Y] = u2(q, H);
              }
              break;
            case 65501:
              o3(), s3 = o3();
              break;
            case 65498:
              o3();
              var R2, j = r4[c3++], E2 = [];
              for (g2 = 0; g2 < j; g2++) {
                var J = i3.componentIds[r4[c3++]];
                R2 = i3.components[J];
                var V = r4[c3++];
                R2.huffmanTableDC = p2[V >> 4], R2.huffmanTableAC = m3[15 & V], E2.push(R2);
              }
              var B = r4[c3++], N2 = r4[c3++], G = r4[c3++], O2 = v2(r4, c3, i3, E2, s3, B, N2, G >> 4, 15 & G);
              c3 += O2;
              break;
            case 65535:
              r4[c3] !== 255 && c3--;
              break;
            default:
              if (r4[c3 - 3] === 255 && r4[c3 - 2] >= 192 && r4[c3 - 2] <= 254) {
                c3 -= 3;
                break;
              }
              throw new e3("unknown marker " + k2.toString(16));
          }
          k2 = o3();
        }
        for (this.width = i3.samplesPerLine, this.height = i3.scanLines, this.jfif = f3, this.eof = c3, this.adobe = l3, this.components = [], g2 = 0; g2 < i3.components.length; g2++) {
          var Q = h3[(R2 = i3.components[g2]).quantizationId];
          Q && (R2.quantizationTable = Q), this.components.push({ output: d2(i3, R2), scaleX: R2.h / i3.maxH, scaleY: R2.v / i3.maxV, blocksPerLine: R2.blocksPerLine, blocksPerColumn: R2.blocksPerColumn });
        }
        this.numComponents = this.components.length;
      }, _getLinearizedBlockData: function(e4, n4) {
        var r4, o3, a3, t3, i3, s3, c3, f3, l3, u3, h3, v3 = this.width / e4, m3 = this.height / n4, d3 = 0, b3 = this.components.length, p2 = e4 * n4 * b3, k2 = new Uint8ClampedArray(p2), g2 = new Uint32Array(e4), C2 = 4294967288;
        for (c3 = 0; c3 < b3; c3++) {
          for (o3 = (r4 = this.components[c3]).scaleX * v3, a3 = r4.scaleY * m3, d3 = c3, h3 = r4.output, t3 = r4.blocksPerLine + 1 << 3, i3 = 0; i3 < e4; i3++)
            f3 = 0 | i3 * o3, g2[i3] = (f3 & C2) << 3 | 7 & f3;
          for (s3 = 0; s3 < n4; s3++)
            for (u3 = t3 * ((f3 = 0 | s3 * a3) & C2) | (7 & f3) << 3, i3 = 0; i3 < e4; i3++)
              k2[d3] = h3[u3 + g2[i3]], d3 += b3;
        }
        var w2 = this.decodeTransform;
        if (w2)
          for (c3 = 0; c3 < p2; )
            for (f3 = 0, l3 = 0; f3 < b3; f3++, c3++, l3 += 2)
              k2[c3] = (k2[c3] * w2[l3] >> 8) + w2[l3 + 1];
        return k2;
      }, _isColorConversionNeeded: function() {
        return this.adobe ? !!this.adobe.transformCode : this.numComponents === 3 ? this.colorTransform !== 0 : this.colorTransform === 1;
      }, _convertYccToRgb: function(e4) {
        for (var n4, r4, o3, a3 = 0, t3 = e4.length; a3 < t3; a3 += 3)
          n4 = e4[a3], r4 = e4[a3 + 1], o3 = e4[a3 + 2], e4[a3] = n4 - 179.456 + 1.402 * o3, e4[a3 + 1] = n4 + 135.459 - 0.344 * r4 - 0.714 * o3, e4[a3 + 2] = n4 - 226.816 + 1.772 * r4;
        return e4;
      }, _convertYcckToRgb: function(e4) {
        for (var n4, r4, o3, a3, t3 = 0, i3 = 0, s3 = e4.length; i3 < s3; i3 += 4)
          n4 = e4[i3], r4 = e4[i3 + 1], o3 = e4[i3 + 2], a3 = e4[i3 + 3], e4[t3++] = r4 * (-660635669420364e-19 * r4 + 437130475926232e-18 * o3 - 54080610064599e-18 * n4 + 48449797120281e-17 * a3 - 0.154362151871126) - 122.67195406894 + o3 * (-957964378445773e-18 * o3 + 817076911346625e-18 * n4 - 0.00477271405408747 * a3 + 1.53380253221734) + n4 * (961250184130688e-18 * n4 - 0.00266257332283933 * a3 + 0.48357088451265) + a3 * (-336197177618394e-18 * a3 + 0.484791561490776), e4[t3++] = 107.268039397724 + r4 * (219927104525741e-19 * r4 - 640992018297945e-18 * o3 + 659397001245577e-18 * n4 + 426105652938837e-18 * a3 - 0.176491792462875) + o3 * (-778269941513683e-18 * o3 + 0.00130872261408275 * n4 + 770482631801132e-18 * a3 - 0.151051492775562) + n4 * (0.00126935368114843 * n4 - 0.00265090189010898 * a3 + 0.25802910206845) + a3 * (-318913117588328e-18 * a3 - 0.213742400323665), e4[t3++] = r4 * (-570115196973677e-18 * r4 - 263409051004589e-19 * o3 + 0.0020741088115012 * n4 - 0.00288260236853442 * a3 + 0.814272968359295) - 20.810012546947 + o3 * (-153496057440975e-19 * o3 - 132689043961446e-18 * n4 + 560833691242812e-18 * a3 - 0.195152027534049) + n4 * (0.00174418132927582 * n4 - 0.00255243321439347 * a3 + 0.116935020465145) + a3 * (-343531996510555e-18 * a3 + 0.24165260232407);
        return e4;
      }, _convertYcckToCmyk: function(e4) {
        for (var n4, r4, o3, a3 = 0, t3 = e4.length; a3 < t3; a3 += 4)
          n4 = e4[a3], r4 = e4[a3 + 1], o3 = e4[a3 + 2], e4[a3] = 434.456 - n4 - 1.402 * o3, e4[a3 + 1] = 119.541 - n4 + 0.344 * r4 + 0.714 * o3, e4[a3 + 2] = 481.816 - n4 - 1.772 * r4;
        return e4;
      }, _convertCmykToRgb: function(e4) {
        for (var n4, r4, o3, a3, t3 = 0, i3 = 1 / 255, s3 = 0, c3 = e4.length; s3 < c3; s3 += 4)
          n4 = e4[s3] * i3, r4 = e4[s3 + 1] * i3, o3 = e4[s3 + 2] * i3, a3 = e4[s3 + 3] * i3, e4[t3++] = 255 + n4 * (-4.387332384609988 * n4 + 54.48615194189176 * r4 + 18.82290502165302 * o3 + 212.25662451639585 * a3 - 285.2331026137004) + r4 * (1.7149763477362134 * r4 - 5.6096736904047315 * o3 - 17.873870861415444 * a3 - 5.497006427196366) + o3 * (-2.5217340131683033 * o3 - 21.248923337353073 * a3 + 17.5119270841813) - a3 * (21.86122147463605 * a3 + 189.48180835922747), e4[t3++] = 255 + n4 * (8.841041422036149 * n4 + 60.118027045597366 * r4 + 6.871425592049007 * o3 + 31.159100130055922 * a3 - 79.2970844816548) + r4 * (-15.310361306967817 * r4 + 17.575251261109482 * o3 + 131.35250912493976 * a3 - 190.9453302588951) + o3 * (4.444339102852739 * o3 + 9.8632861493405 * a3 - 24.86741582555878) - a3 * (20.737325471181034 * a3 + 187.80453709719578), e4[t3++] = 255 + n4 * (0.8842522430003296 * n4 + 8.078677503112928 * r4 + 30.89978309703729 * o3 - 0.23883238689178934 * a3 - 14.183576799673286) + r4 * (10.49593273432072 * r4 + 63.02378494754052 * o3 + 50.606957656360734 * a3 - 112.23884253719248) + o3 * (0.03296041114873217 * o3 + 115.60384449646641 * a3 - 193.58209356861505) - a3 * (22.33816807309886 * a3 + 180.12613974708367);
        return e4;
      }, getData: function(n4, r4, o3) {
        if (this.numComponents > 4)
          throw new e3("Unsupported color mode");
        var a3 = this._getLinearizedBlockData(n4, r4);
        if (this.numComponents === 1 && o3) {
          for (var t3 = a3.length, i3 = new Uint8ClampedArray(3 * t3), s3 = 0, c3 = 0; c3 < t3; c3++) {
            var f3 = a3[c3];
            i3[s3++] = f3, i3[s3++] = f3, i3[s3++] = f3;
          }
          return i3;
        }
        if (this.numComponents === 3 && this._isColorConversionNeeded())
          return this._convertYccToRgb(a3);
        if (this.numComponents === 4) {
          if (this._isColorConversionNeeded())
            return o3 ? this._convertYcckToRgb(a3) : this._convertYcckToCmyk(a3);
          if (o3)
            return this._convertCmykToRgb(a3);
        }
        return a3;
      } }, l2;
    }();
  }, (r2 = n2()) !== void 0 && (e2.exports = r2);
});
class n$5 {
  static decode(n2) {
    const r2 = new Uint8Array(n2), s2 = new n$6();
    s2.parse(r2);
    const { width: o2, height: a2, numComponents: i2, eof: l2 } = s2, f2 = s2.getData(o2, a2, true);
    let h2;
    const c2 = o2 * a2;
    let p2 = 0, u2 = 0, g2 = 0;
    if (l2 < r2.length - 1) {
      const e2 = new e$4(r2.subarray(l2)).getBytes();
      h2 = new Uint8Array(c2);
      let n3 = 0;
      for (p2 = 0; p2 < e2.length; p2++)
        for (g2 = 7; g2 >= 0; g2--)
          h2[n3++] = e2[p2] >> g2 & 1;
    }
    let m2, w2 = null;
    if (i2 === 1)
      w2 = [f2, f2, f2];
    else {
      for (w2 = [], p2 = 0; p2 < 3; p2++)
        m2 = new Uint8Array(c2), w2.push(m2);
      for (g2 = 0, u2 = 0; u2 < c2; u2++)
        for (p2 = 0; p2 < 3; p2++)
          w2[p2][u2] = f2[g2++];
    }
    return { width: o2, height: a2, pixels: w2, mask: h2 };
  }
}
const e$3 = function(e2, r2) {
  const n2 = r2.width * r2.height, a2 = r2.pixelType;
  return Math.floor(e2.byteLength / (n2 * t$3(a2)));
}, t$3 = function(e2) {
  let t2 = 1;
  switch (e2) {
    case Uint8Array:
    case Int8Array:
      t2 = 1;
      break;
    case Uint16Array:
    case Int16Array:
      t2 = 2;
      break;
    case Uint32Array:
    case Int32Array:
    case Float32Array:
      t2 = 4;
      break;
    case Float64Array:
      t2 = 8;
  }
  return t2;
}, r$4 = function(e2, t2) {
  if (8 * e2.byteLength < t2)
    return null;
  const r2 = new Uint8Array(e2, 0, Math.ceil(t2 / 8)), n2 = new Uint8Array(t2);
  let a2 = 0, s2 = 0, i2 = 0, c2 = 0;
  for (i2 = 0; i2 < r2.length - 1; i2++)
    for (s2 = r2[i2], c2 = 7; c2 >= 0; c2--)
      n2[a2++] = s2 >> c2 & 1;
  for (c2 = 7; a2 < t2 - 1; )
    s2 = r2[r2.length - 1], n2[a2++] = s2 >> c2 & 1, c2--;
  return n2;
};
class n$4 {
  static decode(n2, a2) {
    const s2 = a2.pixelType, i2 = [], c2 = a2.width * a2.height, o2 = e$3(n2, a2), { bandIds: h2, format: l2 } = a2, y2 = h2 && h2.length || e$3(n2, a2), f2 = n2.byteLength - n2.byteLength % (c2 * t$3(s2)), u2 = new s2(n2, 0, c2 * o2);
    let b2, g2, A2, p2, d2;
    if (l2 === "bip")
      for (b2 = 0; b2 < y2; b2++) {
        for (p2 = new s2(c2), d2 = h2 ? h2[b2] : b2, g2 = 0; g2 < c2; g2++)
          p2[g2] = u2[g2 * o2 + d2];
        i2.push(p2);
      }
    else if (l2 === "bsq")
      for (b2 = 0; b2 < y2; b2++)
        d2 = h2 ? h2[b2] : b2, i2.push(u2.subarray(d2 * c2, (d2 + 1) * c2));
    return f2 < n2.byteLength - 1 && (A2 = r$4(n2.slice(f2), c2)), { pixels: i2, mask: A2 };
  }
}
const r$3 = (() => {
  const r2 = new ArrayBuffer(4), n2 = new Uint8Array(r2);
  return new Uint32Array(r2)[0] = 1, n2[0] === 1;
})();
function r$2(r2, t2) {
  let n2 = 0, o2 = "", e2 = 0, f2 = 0;
  const c2 = r2.length;
  for (; n2 < c2; )
    f2 = r2[n2++], e2 = f2 >> 4, e2 < 8 ? e2 = 1 : e2 === 15 ? (e2 = 4, f2 = (7 & f2) << 18 | (63 & r2[n2++]) << 12 | (63 & r2[n2++]) << 6 | 63 & r2[n2++]) : e2 === 14 ? (e2 = 3, f2 = (15 & f2) << 12 | (63 & r2[n2++]) << 6 | 63 & r2[n2++]) : (e2 = 2, f2 = (31 & f2) << 6 | 63 & r2[n2++]), (f2 !== 0 || t2) && (o2 += String.fromCharCode(f2));
  return o2;
}
function e$2(e2, n2, t2, r2 = true) {
  if (n2 % 4 != 0 || t2 % 4 != 0) {
    const i2 = new ArrayBuffer(4 * Math.ceil(t2 / 4)), l2 = new Uint8Array(i2), o2 = new Uint8Array(e2, n2, t2);
    if (r2)
      for (let e3 = 0; e3 < l2.length; e3 += 4)
        l2[e3] = o2[e3 + 3], l2[e3 + 1] = o2[e3 + 2], l2[e3 + 2] = o2[e3 + 1], l2[e3 + 3] = o2[e3];
    else
      l2.set(o2);
    return new Uint32Array(l2.buffer);
  }
  if (r2) {
    const r3 = new Uint8Array(e2, n2, t2), i2 = new Uint8Array(r3.length);
    for (let e3 = 0; e3 < i2.length; e3 += 4)
      i2[e3] = r3[e3 + 3], i2[e3 + 1] = r3[e3 + 2], i2[e3 + 2] = r3[e3 + 1], i2[e3 + 3] = r3[e3];
    return new Uint32Array(i2.buffer);
  }
  return new Uint32Array(e2, n2, t2 / 4);
}
function n$3() {
  const e2 = [];
  for (let n2 = 0; n2 <= 257; n2++)
    e2[n2] = [n2];
  return e2;
}
function t$2(e2, n2) {
  for (let t2 = 0; t2 < n2.length; t2++)
    e2.push(n2[t2]);
}
const r$1 = new Set();
function i$3(i2, l2, o2, f2 = true) {
  const s2 = e$2(i2, l2, o2, f2);
  let a2 = 9, c2 = n$3(), u2 = 32, h2 = c2.length, d2 = [], g2 = 1, w2 = s2[0], y2 = 0;
  const A2 = s2.length, U2 = 8 * (4 * A2 - o2), p2 = [];
  for (; w2 != null; ) {
    if (u2 >= a2)
      u2 -= a2, y2 = w2 >>> 32 - a2, w2 <<= a2;
    else {
      y2 = w2 >>> 32 - u2, w2 = s2[g2++];
      const e3 = a2 - u2;
      u2 = 32 - e3, y2 = (y2 << e3) + (w2 >>> u2), w2 <<= e3;
    }
    if (y2 === 257)
      break;
    if (y2 === 256) {
      a2 = 9, c2 = n$3(), h2 = c2.length, d2 = [];
      continue;
    }
    const e2 = c2[y2];
    if (e2 == null) {
      if (y2 > c2.length)
        throw "data integrity issue: code does not exist on code page";
      d2.push(d2[0]), c2[h2++] = d2.slice(), t$2(p2, d2);
    } else
      t$2(p2, e2), d2.push(e2[0]), d2.length > 1 && (c2[h2++] = d2.slice()), d2 = e2.slice();
    if (r$1.has(h2) && a2++, u2 === 0 && (w2 = s2[g2++], u2 = 32), g2 > A2 || g2 === A2 && u2 <= U2)
      break;
  }
  return new Uint8Array(p2);
}
r$1.add(511), r$1.add(1023), r$1.add(2047), r$1.add(4095), r$1.add(8191);
const e$1 = (() => {
  const e2 = [];
  return e2[254] = "NEWSUBFILETYPE", e2[255] = "SUBFILETYPE", e2[256] = "IMAGEWIDTH", e2[257] = "IMAGELENGTH", e2[258] = "BITSPERSAMPLE", e2[259] = "COMPRESSION", e2[262] = "PHOTOMETRICINTERPRETATION", e2[263] = "THRESHHOLDING", e2[264] = "CELLWIDTH", e2[265] = "CELLLENGTH", e2[266] = "FILLORDER", e2[269] = "DOCUMENTNAME", e2[270] = "IMAGEDESCRIPTION", e2[271] = "MAKE", e2[272] = "MODEL", e2[273] = "STRIPOFFSETS", e2[274] = "ORIENTATION", e2[277] = "SAMPLESPERPIXEL", e2[278] = "ROWSPERSTRIP", e2[279] = "STRIPBYTECOUNTS", e2[280] = "MINSAMPLEVALUE", e2[281] = "MAXSAMPLEVALUE", e2[282] = "XRESOLUTION", e2[283] = "YRESOLUTION", e2[284] = "PLANARCONFIGURATION", e2[285] = "PAGENAME", e2[286] = "XPOSITION", e2[287] = "YPOSITION", e2[288] = "FREEOFFSETS", e2[289] = "FREEBYTECOUNTS", e2[290] = "GRAYRESPONSEUNIT", e2[291] = "GRAYRESPONSECURVE", e2[292] = "T4OPTIONS", e2[293] = "T6OPTIONS", e2[296] = "RESOLUTIONUNIT", e2[297] = "PAGENUMBER", e2[300] = "COLORRESPONSEUNIT", e2[301] = "TRANSFERFUNCTION", e2[305] = "SOFTWARE", e2[306] = "DATETIME", e2[315] = "ARTIST", e2[316] = "HOSTCOMPUTER", e2[317] = "PREDICTOR", e2[318] = "WHITEPOINT", e2[319] = "PRIMARYCHROMATICITIES", e2[320] = "COLORMAP", e2[321] = "HALFTONEHINTS", e2[322] = "TILEWIDTH", e2[323] = "TILELENGTH", e2[324] = "TILEOFFSETS", e2[325] = "TILEBYTECOUNTS", e2[326] = "BADFAXLINES", e2[327] = "CLEANFAXDATA", e2[328] = "CONSECUTIVEBADFAXLINES", e2[330] = "SUBIFD", e2[332] = "INKSET", e2[333] = "INKNAMES", e2[334] = "NUMBEROFINKS", e2[336] = "DOTRANGE", e2[337] = "TARGETPRINTER", e2[338] = "EXTRASAMPLES", e2[339] = "SAMPLEFORMAT", e2[340] = "SMINSAMPLEVALUE", e2[341] = "SMAXSAMPLEVALUE", e2[342] = "TRANSFERRANGE", e2[347] = "JPEGTABLES", e2[512] = "JPEGPROC", e2[513] = "JPEGIFOFFSET", e2[514] = "JPEGIFBYTECOUNT", e2[515] = "JPEGRESTARTINTERVAL", e2[517] = "JPEGLOSSLESSPREDICTORS", e2[518] = "JPEGPOINTTRANSFORM", e2[519] = "JPEGQTABLES", e2[520] = "JPEGDCTABLES", e2[521] = "JPEGACTABLES", e2[529] = "YCBCRCOEFFICIENTS", e2[530] = "YCBCRSUBSAMPLING", e2[531] = "YCBCRPOSITIONING", e2[532] = "REFERENCEBLACKWHITE", e2[700] = "XMP", e2[33550] = "GEOPIXELSCALE", e2[33922] = "GEOTIEPOINTS", e2[33432] = "COPYRIGHT", e2[42112] = "GDAL_METADATA", e2[42113] = "GDAL_NODATA", e2[50844] = "RPCCOEFFICIENT", e2[34264] = "GEOTRANSMATRIX", e2[34735] = "GEOKEYDIRECTORY", e2[34736] = "GEODOUBLEPARAMS", e2[34737] = "GEOASCIIPARAMS", e2[34665] = "EXIFIFD", e2[34853] = "GPSIFD", e2[40965] = "INTEROPERABILITYIFD", e2;
})(), i$2 = (() => {
  const i2 = [].concat(e$1);
  return i2[36864] = "ExifVersion", i2[40960] = "FlashpixVersion", i2[40961] = "ColorSpace", i2[42240] = "Gamma", i2[37121] = "ComponentsConfiguration", i2[37122] = "CompressedBitsPerPixel", i2[40962] = "PixelXDimension", i2[40963] = "PixelYDimension", i2[37500] = "MakerNote", i2[37510] = "UserComment", i2[40964] = "RelatedSoundFile", i2[36867] = "DateTimeOriginal", i2[36868] = "DateTimeDigitized", i2[36880] = "OffsetTime", i2[36881] = "OffsetTimeOriginal", i2[36882] = "OffsetTimeDigitized", i2[37520] = "SubSecTime", i2[37521] = "SubSecTimeOriginal", i2[37522] = "SubSecTimeDigitized", i2[37888] = "Temperature", i2[37889] = "Humidity", i2[37890] = "Pressure", i2[37891] = "WaterDepth", i2[37892] = "Acceleration", i2[37893] = "CameraElevationAngle", i2[42016] = "ImageUniqueID", i2[42032] = "CameraOwnerName", i2[42033] = "BodySerialNumber", i2[42034] = "LensSpecification", i2[42035] = "LensMake", i2[42036] = "LensModel", i2[42037] = "LensSerialNumber", i2[33434] = "ExposureTime", i2[33437] = "FNumber", i2[34850] = "ExposureProgram", i2[34852] = "SpectralSensitivity", i2[34855] = "PhotographicSensitivity", i2[34856] = "OECF", i2[34864] = "SensitivityType", i2[34865] = "StandardOutputSensitivity", i2[34866] = "RecommendedExposureIndex", i2[34867] = "ISOSpeed", i2[34868] = "ISOSpeedLatitudeyyy", i2[34869] = "ISOSpeedLatitudezzz", i2[37377] = "ShutterSpeedValue", i2[37378] = "ApertureValue", i2[37379] = "BrightnessValue", i2[37380] = "ExposureBiasValue", i2[37381] = "MaxApertureValue", i2[37382] = "SubjectDistance", i2[37383] = "MeteringMode", i2[37384] = "LightSource", i2[37385] = "Flash", i2[37386] = "FocalLength", i2[37396] = "SubjectArea", i2[41483] = "FlashEnergy", i2[41484] = "SpatialFrequencyResponse", i2[41486] = "FocalPlaneXResolution", i2[41487] = "FocalPlaneYResolution", i2[41488] = "FocalPlaneResolutionUnit", i2[41492] = "SubjectLocation", i2[41493] = "ExposureIndex", i2[41495] = "SensingMethod", i2[41728] = "FileSource", i2[41729] = "SceneType", i2[41730] = "CFAPattern", i2[41985] = "CustomRendered", i2[41986] = "ExposureMode", i2[41987] = "WhiteBalance", i2[41988] = "DigitalZoomRatio", i2[41989] = "FocalLengthIn35mmFilm", i2[41990] = "SceneCaptureType", i2[41991] = "GainControl", i2[41992] = "Contrast", i2[41993] = "Saturation", i2[41994] = "Sharpness", i2[41995] = "DeviceSettingDescription", i2[41996] = "SubjectDistanceRange", i2;
})(), t$1 = ["GPSVersionID", "GPSLatitudeRef", "GPSLatitude", "GPSLongitudeRef", "GPSLongitude", "GPSAltitudeRef", "GPSAltitude", "GPSTimeStamp", "GPSSatellites", "GPSStatus", "GPSMeasureMode", "GPSDOP", "GPSSpeedRef", "GPSSpeed", "GPSTrackRef", "GPSTrack", "GPSImgDirectionRef", "GPSImgDirection", "GPSMapDatum", "GPSDestLatitudeRef", "GPSDestLatitude", "GPSDestLongitudeRef", "GPSDestLongitude", "GPSDestBearingRef", "GPSDestBearing", "GPSDestDistanceRef", "GPSDestDistance", "GPSProcessingMethod", "GPSAreaInformation", "GPSDateStamp", "GPSDifferential", "GPSHPositioningError"], o$1 = (() => {
  const e2 = [];
  return e2[1024] = "GTModelTypeGeoKey", e2[1025] = "GTRasterTypeGeoKey", e2[1026] = "GTCitationGeoKey", e2[2048] = "GeographicTypeGeoKey", e2[2049] = "GeogCitationGeoKey", e2[2050] = "GeogGeodeticDatumGeoKey", e2[2051] = "GeogPrimeMeridianGeoKey", e2[2052] = "GeogLinearUnitsGeoKey", e2[2053] = "GeogLinearUnitSizeGeoKey", e2[2054] = "GeogAngularUnitsGeoKey", e2[2055] = "GeogAngularUnitSizeGeoKey", e2[2056] = "GeogEllipsoidGeoKey", e2[2057] = "GeogSemiMajorAxisGeoKey", e2[2058] = "GeogSemiMinorAxisGeoKey", e2[2059] = "GeogInvFlatteningGeoKey", e2[2061] = "GeogPrimeMeridianLongGeoKey", e2[2060] = "GeogAzimuthUnitsGeoKey", e2[3072] = "ProjectedCSTypeGeoKey", e2[3073] = "PCSCitationGeoKey", e2[3074] = "ProjectionGeoKey", e2[3075] = "ProjCoordTransGeoKey", e2[3076] = "ProjLinearUnitsGeoKey", e2[3077] = "ProjLinearUnitSizeGeoKey", e2[3078] = "ProjStdParallel1GeoKey", e2[3079] = "ProjStdParallel2GeoKey", e2[3080] = "ProjNatOriginLongGeoKey", e2[3081] = "ProjNatOriginLatGeoKey", e2[3082] = "ProjFalseEastingGeoKey", e2[3083] = "ProjFalseNorthingGeoKey", e2[3084] = "ProjFalseOriginLongGeoKey", e2[3085] = "ProjFalseOriginLatGeoKey", e2[3086] = "ProjFalseOriginEastingGeoKey", e2[3087] = "ProjFalseOriginNorthingGeoKey", e2[3088] = "ProjCenterLongGeoKey", e2[3090] = "ProjCenterEastingGeoKey", e2[3091] = "ProjCenterNorthingGeoKey", e2[3092] = "ProjScaleAtNatOriginGeoKey", e2[3093] = "ProjScaleAtCenterGeoKey", e2[3094] = "ProjAzimuthAngleGeoKey", e2[3095] = "ProjStraightVertPoleLongGeoKey", e2[4096] = "VerticalCSTypeGeoKey", e2[4097] = "VerticalCitationGeoKey", e2[4098] = "VerticalDatumGeoKey", e2[4099] = "VerticalUnitsGeoKey", e2;
})(), S$1 = function(i2, t2) {
  let o2 = (t2 || e$1)[i2];
  return o2 === void 0 && (o2 = "unknown" + String(i2)), o2;
}, E$1 = new Map();
E$1.set("EXIFIFD", i$2), E$1.set("GPSIFD", t$1);
var n$2 = { TIFF_TAGS: e$1, ifdTags: E$1, GEO_KEYS: o$1, getTagName: S$1 };
const l$1 = [0, 1, 1, 2, 4, 8, 1, 1, 2, 4, 8, 4, 8, -1, -1, -1, 8, 8, 8], r = 4294967296;
function o(e2, t2) {
  let n2 = "unknown";
  return e2 === 3 ? n2 = "f32" : e2 === 1 ? t2 === 1 ? n2 = "u1" : t2 === 2 ? n2 = "u2" : t2 === 4 ? n2 = "u4" : t2 <= 8 ? n2 = "u8" : t2 <= 16 ? n2 = "u16" : t2 <= 32 && (n2 = "u32") : e2 === 2 && (t2 <= 8 ? n2 = "s8" : t2 <= 16 ? n2 = "s16" : t2 <= 32 && (n2 = "s32")), n2;
}
function f$1(e2) {
  let t2 = null;
  switch (e2 ? e2.toLowerCase() : "f32") {
    case "u1":
    case "u2":
    case "u4":
    case "u8":
      t2 = Uint8Array;
      break;
    case "u16":
      t2 = Uint16Array;
      break;
    case "u32":
      t2 = Uint32Array;
      break;
    case "s8":
      t2 = Int8Array;
      break;
    case "s16":
      t2 = Int16Array;
      break;
    case "s32":
      t2 = Int32Array;
      break;
    default:
      t2 = Float32Array;
  }
  return t2;
}
function u$1(e2, t2) {
  return { x: t2[0] * e2.x + t2[1] * e2.y + t2[2], y: t2[3] * e2.x + t2[4] * e2.y + t2[5] };
}
function c$1(e2, t2) {
  const n2 = e2.get(t2);
  return n2 && n2.values;
}
function h(e2, t2) {
  const n2 = e2.get(t2);
  return n2 && n2.values[0];
}
function g$1(e2, t2, n2, i2 = 0, s2 = n$2.TIFF_TAGS, l2 = 4) {
  const r2 = l2 === 8, o2 = r2 ? A$1(new DataView(e2, n2, 8), 0, t2) : new DataView(e2, n2, 2).getUint16(0, t2), f2 = 4 + 2 * l2, u2 = r2 ? 8 : 2, c2 = u2 + o2 * f2;
  if (n2 + c2 > e2.byteLength)
    return { success: false, ifd: null, nextIFD: null, requiredBufferSize: c2 };
  const h2 = n2 + c2 + 4 <= e2.byteLength ? M(new DataView(e2, n2 + c2, l2 === 8 ? 8 : 4), 0, t2, l2 === 8) : null, g2 = n2 + u2, p2 = new Map();
  let w2, d2, I2, T2, y2, m2, S2;
  for (let A2 = 0; A2 < o2; A2++) {
    d2 = new DataView(e2, g2 + f2 * A2, f2), I2 = d2.getUint16(0, t2), y2 = d2.getUint16(2, t2), T2 = n$2.getTagName(I2, s2);
    const n3 = [];
    l2 === 2 ? (m2 = d2.getUint16(4, t2), S2 = d2.getUint16(6, t2)) : l2 === 4 ? (m2 = d2.getUint32(4, t2), S2 = d2.getUint32(8, t2)) : l2 === 8 && (m2 = M(d2, 4, t2, true), S2 = M(d2, 12, t2, true), n3.push(d2.getUint32(12, t2)), n3.push(d2.getUint32(16, t2))), w2 = { id: I2, type: y2, valueCount: m2, valueOffset: S2, valueOffsets: n3, values: null }, E(e2, t2, w2, i2, false, l2), p2.set(T2, w2);
  }
  return { success: true, ifd: p2, nextIFD: h2, requiredBufferSize: c2 };
}
const p$3 = function(n2, a2, l2, r2, u2) {
  const c2 = r$3 === a2, g2 = h(l2, "BITSPERSAMPLE"), p2 = o(h(l2, "SAMPLEFORMAT") || 1, g2), w2 = h(l2, "COMPRESSION") || 1, d2 = f$1(p2);
  let I2, T2, E2, y2, m2, A2, S2;
  if (w2 === 1)
    E2 = n2.slice(r2, r2 + u2), y2 = new Uint8Array(E2);
  else if (w2 === 8 || w2 === 32946)
    y2 = new Uint8Array(n2, r2, u2), A2 = new e$4(y2), S2 = A2.getBytes(), E2 = new ArrayBuffer(S2.length), y2 = new Uint8Array(E2), y2.set(S2);
  else if (w2 === 6) {
    y2 = new Uint8Array(n2, r2, u2);
    const e2 = new n$6();
    e2.parse(y2);
    const i2 = e2.getData(e2.width, e2.height, true);
    E2 = new ArrayBuffer(i2.length), y2 = new Uint8Array(E2), y2.set(i2);
  } else
    w2 === 5 && (y2 = i$3(n2, r2, u2, a2), E2 = y2.buffer);
  if (p2 === "u8" || p2 === "s8" || c2)
    T2 = new d2(E2);
  else {
    switch (E2 = new ArrayBuffer(y2.length), m2 = new Uint8Array(E2), p2) {
      case "u16":
      case "s16":
        for (I2 = 0; I2 < y2.length; I2 += 2)
          m2[I2] = y2[I2 + 1], m2[I2 + 1] = y2[I2];
        break;
      case "u32":
      case "s32":
      case "f32":
        for (I2 = 0; I2 < y2.length; I2 += 4)
          m2[I2] = y2[I2 + 3], m2[I2 + 1] = y2[I2 + 2], m2[I2 + 2] = y2[I2 + 1], m2[I2 + 3] = y2[I2];
    }
    T2 = new d2(E2);
  }
  return T2;
}, w$1 = function(e2, t2, n2) {
  const i2 = c$1(n2, "TILEOFFSETS");
  if (i2 === void 0)
    return null;
  const a2 = c$1(n2, "TILEBYTECOUNTS"), s2 = t2.tileWidth, l2 = t2.tileHeight, { width: r2, height: o2, pixelType: u2, isBSQ: h2 } = t2, g2 = t2.planes, w2 = r2 * o2, d2 = c$1(n2, "BITSPERSAMPLE")[0], I2 = f$1(u2), T2 = [];
  for (let f2 = 0; f2 < g2; f2++)
    T2.push(new I2(w2));
  let E2, y2, m2, A2, S2, M2, b2, x2, O2, D2, U2, N2, k2;
  const L2 = Math.ceil(r2 / s2);
  if (d2 % 8 == 0)
    for (E2 = 0; E2 < i2.length; E2++)
      for (M2 = Math.floor(E2 / L2) * l2, b2 = E2 % L2 * s2, x2 = M2 * r2 + b2, m2 = p$3(e2, t2.littleEndian, n2, i2[E2], a2[E2]), D2 = 0, O2 = x2, N2 = Math.min(s2, r2 - b2), U2 = Math.min(l2, o2 - M2), y2 = 0; y2 < g2; y2++)
        if (k2 = T2[y2], h2)
          for (A2 = 0; A2 < U2; A2++)
            for (O2 = x2 + A2 * r2, D2 = s2 * l2 * y2 + A2 * s2, S2 = 0; S2 < N2; S2++, O2++, D2++)
              k2[O2] = m2[D2];
        else
          for (A2 = 0; A2 < U2; A2++)
            for (O2 = x2 + A2 * r2, D2 = A2 * s2 * g2 + y2, S2 = 0; S2 < N2; S2++, O2++, D2 += g2)
              k2[O2] = m2[D2];
  return { width: r2, height: o2, pixelType: u2, pixels: T2 };
}, d$2 = function(n2, a2, l2) {
  const r2 = r$3 === a2.littleEndian, o2 = c$1(l2, "STRIPOFFSETS");
  if (o2 === void 0)
    return null;
  const { width: u2, height: h2, pixelType: g2 } = a2, p2 = a2.planes, w2 = u2 * h2, d2 = c$1(l2, "BITSPERSAMPLE")[0], I2 = f$1(g2), T2 = new I2(w2 * p2), E2 = c$1(l2, "STRIPBYTECOUNTS"), y2 = c$1(l2, "ROWSPERSTRIP")[0], m2 = c$1(l2, "COMPRESSION") ? c$1(l2, "COMPRESSION")[0] : 1;
  let A2, S2, M2, b2, x2, O2, D2, U2, N2, k2, L2, P = y2;
  if (d2 % 8 == 0)
    for (A2 = 0; A2 < o2.length; A2++) {
      if (x2 = A2 * (y2 * u2) * p2, P = (A2 + 1) * y2 > h2 ? h2 - A2 * y2 : y2, g2 === "u8" || g2 === "s8" || r2) {
        if (m2 === 8 || m2 === 32946)
          D2 = new Uint8Array(n2, o2[A2], E2[A2]), k2 = new e$4(D2), L2 = k2.getBytes(), O2 = new ArrayBuffer(L2.length), D2 = new Uint8Array(O2), D2.set(L2), D2.length !== P * u2 * p2 * d2 / 8 && console.log("strip byte counts is different than expected");
        else if (m2 === 6) {
          D2 = new Uint8Array(n2, o2[A2], E2[A2]);
          const e2 = new n$6();
          e2.parse(D2);
          const i2 = e2.getData(e2.width, e2.height, true);
          O2 = new ArrayBuffer(i2.length), D2 = new Uint8Array(O2), D2.set(i2);
        } else
          m2 === 5 ? (D2 = i$3(n2, o2[A2], E2[A2], a2.littleEndian), O2 = D2.buffer) : m2 === 1 && (E2[A2] !== P * u2 * p2 * d2 / 8 && console.log("strip byte counts is different than expected"), O2 = n2.slice(o2[A2], o2[A2] + E2[A2]));
        b2 = new I2(O2);
      } else {
        switch (m2 === 6 || m2 === 8 || m2 === 32946 ? (D2 = new Uint8Array(n2, o2[A2], E2[A2]), k2 = new e$4(D2), D2 = k2.getBytes(), O2 = new ArrayBuffer(D2.length), U2 = new Uint8Array(O2), D2.length !== P * u2 * p2 * d2 / 8 && console.log("strip byte counts is different than expected")) : m2 === 1 && (E2[A2] !== P * u2 * p2 * d2 / 8 && console.log("strip byte counts is different than expected"), O2 = new ArrayBuffer(E2[A2]), D2 = new Uint8Array(n2, o2[A2], E2[A2]), U2 = new Uint8Array(O2)), g2) {
          case "u16":
          case "s16":
            for (M2 = 0; M2 < D2.length; M2 += 2)
              U2[M2] = D2[M2 + 1], U2[M2 + 1] = D2[M2];
            break;
          case "u32":
          case "s32":
          case "f32":
            for (M2 = 0; M2 < D2.length; M2 += 4)
              U2[M2] = D2[M2 + 3], U2[M2 + 1] = D2[M2 + 2], U2[M2 + 2] = D2[M2 + 1], U2[M2 + 3] = D2[M2];
        }
        b2 = new I2(O2);
      }
      T2.set(b2, x2);
    }
  const G = [];
  if (p2 === 1)
    G.push(T2);
  else
    for (A2 = 0; A2 < p2; A2++) {
      for (N2 = new I2(w2), S2 = 0; S2 < w2; S2++)
        N2[S2] = T2[S2 * p2 + A2];
      G.push(N2);
    }
  return { width: u2, height: h2, pixelType: g2, pixels: G };
}, I$1 = function(e2, t2, n2) {
  if (!(e2 && e2.length > 0 && t2 && n2))
    return null;
  let i2, a2, s2;
  const l2 = e2[0].length, r2 = e2.length, o2 = new Uint8Array(l2);
  for (let f2 = 0; f2 < r2; f2++)
    if (i2 = e2[f2], a2 = t2[f2], s2 = n2[f2], f2 === 0)
      for (let e3 = 0; e3 < l2; e3++)
        o2[e3] = i2[e3] < a2 || i2[e3] > s2 ? 0 : 1;
    else
      for (let e3 = 0; e3 < l2; e3++)
        o2[e3] && (o2[e3] = i2[e3] < a2 || i2[e3] > s2 ? 0 : 1);
  return o2;
}, T$1 = function(e2) {
  if (!e2)
    return null;
  const t2 = e2.match(/<Item(.*?)Item>/gi);
  if (!t2 || t2.length === 0)
    return null;
  const n2 = new Map();
  let i2, a2, s2, l2, r2;
  for (let I2 = 0; I2 < t2.length; I2++)
    i2 = t2[I2], a2 = i2.slice("<Item ".length, i2.indexOf(">")), l2 = i2.indexOf("sample="), l2 > -1 && (r2 = i2.slice(l2 + 'sample="'.length, i2.indexOf('"', l2 + 'sample="'.length))), l2 = i2.indexOf("name="), l2 > -1 && (a2 = i2.slice(l2 + 'name="'.length, i2.indexOf('"', l2 + 'name="'.length))), a2 && (s2 = i2.slice(i2.indexOf(">") + 1, i2.indexOf("</Item>")).trim(), r2 != null ? n2.has(a2) ? n2.get(a2)[r2] = s2 : n2.set(a2, [s2]) : n2.set(a2, s2)), r2 = null;
  const o2 = n2.get("STATISTICS_MINIMUM"), f2 = n2.get("STATISTICS_MAXIMUM"), u2 = n2.get("STATISTICS_MEAN"), c2 = n2.get("STATISTICS_STDDEV");
  let h2 = null;
  if (o2 && f2) {
    h2 = [];
    for (let e3 = 0; e3 < o2.length; e3++)
      h2.push({ min: parseFloat(o2[e3]), max: parseFloat(f2[e3]), avg: u2 && parseFloat(u2[e3]), stddev: c2 && parseFloat(c2[e3]) });
  }
  const g2 = n2.get("BandName"), p2 = n2.get("WavelengthMin"), w2 = n2.get("WavelengthMax");
  let d2 = null;
  if (g2) {
    d2 = [];
    for (let e3 = 0; e3 < g2.length; e3++)
      d2.push({ BandName: g2[e3], WavelengthMin: p2 && parseFloat(p2[e3]), WavelengthMax: w2 && parseFloat(w2[e3]) });
  }
  return { statistics: h2, bandProperties: d2, dataType: n2.get("DataType"), rawMetadata: n2 };
};
function E(e2, t2, n2, i2 = 0, a2 = false, s2 = 4) {
  if (n2.values)
    return true;
  const o2 = n2.type, f2 = n2.valueCount;
  let u2 = n2.valueOffset, c2 = [];
  const h2 = l$1[o2], g2 = 8 * h2, p2 = f2 * h2, w2 = f2 * l$1[o2] * 8;
  let d2, I2;
  const T2 = s2 === 8 ? 64 : 32, E2 = n2.valueOffsets;
  if (w2 > T2) {
    if (p2 > (a2 ? e2.byteLength : e2 ? e2.byteLength - u2 + i2 : 0))
      return n2.offlineOffsetSize = [u2, p2], n2.values = null, false;
  }
  if (w2 <= T2) {
    if (!t2)
      if (T2 <= 32)
        u2 >>>= 32 - w2;
      else {
        const e3 = E2 != null && E2.length ? E2[0] : u2 >>> 0, t3 = E2 != null && E2.length ? E2[1] : Math.round((u2 - e3) / r);
        w2 <= 32 ? (u2 = e3 >>> 32 - w2, E2[0] = u2) : (u2 = e3 * __pow(2, 32 - w2) + (t3 >>> 32 - w2), E2[0] = e3, E2[1] = t3 >>> 32 - w2);
      }
    if (f2 === 1 && g2 === T2)
      c2 = [u2];
    else if (T2 === 64) {
      const e3 = E2 != null && E2.length ? E2[0] : u2 >>> 0, t3 = E2 != null && E2.length ? E2[1] : Math.round((u2 - e3) / r);
      let n3 = e3, i3 = 32;
      for (I2 = 1; I2 <= f2; I2++) {
        const e4 = 32 - g2 * I2 % 32;
        if (i3 < g2) {
          const a3 = n3 << e4 >>> 32 - i3, s3 = t3 << 32 - i3 >>> 32 - i3;
          n3 = t3, c2.push(a3 + s3 * __pow(2, g2 - i3)), i3 -= 32 - (g2 - i3);
        } else
          c2.push(n3 << e4 >>> 32 - g2), i3 -= g2;
        i3 === 0 && (i3 = 32, n3 = t3);
      }
    } else
      for (I2 = 1; I2 <= f2; I2++) {
        const e3 = 32 - g2 * I2;
        c2.push(u2 << e3 >>> 32 - g2);
      }
  } else {
    u2 -= i2, a2 && (u2 = 0);
    for (let n3 = u2; n3 < u2 + p2; n3 += h2) {
      switch (o2) {
        case 1:
        case 2:
          d2 = new DataView(e2, n3, 1).getUint8(0);
          break;
        case 3:
          d2 = new DataView(e2, n3, 2).getUint16(0, t2);
          break;
        case 4:
          d2 = new DataView(e2, n3, 4).getUint32(0, t2);
          break;
        case 5:
          d2 = new DataView(e2, n3, 4).getUint32(0, t2) / new DataView(e2, n3 + 4, 4).getUint32(0, t2);
          break;
        case 6:
          d2 = new DataView(e2, n3, 1).getInt8(0);
          break;
        case 7:
          d2 = new DataView(e2, n3, 1).getUint8(0);
          break;
        case 8:
          d2 = new DataView(e2, n3, 2).getInt16(0, t2);
          break;
        case 9:
          d2 = new DataView(e2, n3, 4).getInt32(0, t2);
          break;
        case 10:
          d2 = new DataView(e2, n3, 4).getInt32(0, t2) / new DataView(e2, n3 + 4, 4).getInt32(0, t2);
          break;
        case 11:
          d2 = new DataView(e2, n3, 4).getFloat32(0, t2);
          break;
        case 12:
          d2 = new DataView(e2, n3, 8).getFloat64(0, t2);
          break;
        case 16:
        case 18:
          d2 = A$1(new DataView(e2, n3, 8), 0, t2);
          break;
        case 17:
          d2 = S(new DataView(e2, n3, 8), 0, t2);
          break;
        default:
          d2 = null;
      }
      c2.push(d2);
    }
  }
  if (o2 === 2) {
    let e3 = "";
    const t3 = c2;
    for (c2 = [], I2 = 0; I2 < t3.length; I2++)
      t3[I2] === 0 && e3 !== "" ? (c2.push(e3), e3 = "") : e3 += String.fromCharCode(t3[I2]);
    e3 === "" && c2.length !== 0 || c2.push(e3);
  }
  return n2.values = c2, true;
}
function y$1(e2) {
  const t2 = e2[0], n2 = h(t2, "TILEWIDTH"), i2 = h(t2, "TILELENGTH"), a2 = h(t2, "IMAGEWIDTH"), s2 = h(t2, "IMAGELENGTH"), l2 = h(t2, "BITSPERSAMPLE"), r2 = h(t2, "SAMPLESPERPIXEL"), f2 = h(t2, "SAMPLEFORMAT") || 1, g2 = o(f2, l2), p2 = !!c$1(t2, "PLANARCONFIGURATION") && c$1(t2, "PLANARCONFIGURATION")[0] === 2, w2 = c$1(t2, "GDAL_NODATA");
  let d2;
  w2 != null && (typeof w2[0] == "string" ? (d2 = w2.map((e3) => parseFloat(e3)), d2.some((e3) => isNaN(e3)) && (d2 = null)) : typeof w2[0] == "number" && (d2 = w2));
  const I2 = h(t2, "COMPRESSION") || 1;
  let E2;
  switch (I2) {
    case 1:
      E2 = "NONE";
      break;
    case 2:
    case 3:
    case 4:
    case 32771:
      E2 = "CCITT";
      break;
    case 5:
      E2 = "LZW";
      break;
    case 6:
    case 7:
      E2 = "JPEG";
      break;
    case 32773:
      E2 = "PACKBITS";
      break;
    case 8:
    case 32946:
      E2 = "DEFLATE";
      break;
    case 34712:
      E2 = "JPEG2000";
      break;
    default:
      E2 = String(I2);
  }
  let y2 = true, m2 = "";
  I2 !== 1 && I2 !== 5 && I2 !== 6 && I2 !== 8 && I2 !== 32946 && (y2 = false, m2 += "unsupported tag compression " + I2), f2 > 3 && (y2 = false, m2 += "unsupported tag sampleFormat " + f2), l2 % 8 != 0 && (y2 = false, m2 += "unsupported tag bitsPerSample " + l2);
  const A2 = h(t2, "GEOASCIIPARAMS");
  let S2;
  if (A2) {
    const e3 = A2.split("|").filter((e4) => e4.indexOf("ESRI PE String = ") > -1)[0], t3 = e3 ? e3.replace("ESRI PE String = ", "") : "";
    S2 = t3.indexOf("PROJCS") === 0 || t3.indexOf("GEOGCS") === 0 ? { wkid: null, wkt: t3 } : null;
  }
  const M2 = c$1(t2, "GEOTIEPOINTS"), b2 = c$1(t2, "GEOPIXELSCALE"), x2 = c$1(t2, "GEOTRANSMATRIX"), D2 = t2.has("GEOKEYDIRECTORY") ? t2.get("GEOKEYDIRECTORY").data : null;
  let U2, N2, k2 = false;
  if (D2) {
    k2 = h(D2, "GTRasterTypeGeoKey") === 2;
    const e3 = h(D2, "GTModelTypeGeoKey");
    if (e3 === 2) {
      const e4 = h(D2, "GeographicTypeGeoKey");
      e4 >= 1024 && e4 <= 32766 && (S2 = { wkid: e4 });
    } else if (e3 === 1) {
      const e4 = h(D2, "ProjectedCSTypeGeoKey");
      e4 >= 1024 && e4 <= 32766 && (S2 = { wkid: e4 });
    }
  }
  if (b2 && M2 && M2.length >= 6 ? (U2 = [b2[0], 0, M2[3] - M2[0] * b2[0], 0, -Math.abs(b2[1]), M2[4] - M2[1] * b2[1]], k2 && (U2[2] -= 0.5 * U2[0] + 0.5 * U2[1], U2[5] -= 0.5 * U2[3] + 0.5 * U2[4])) : x2 && x2.length === 16 && (U2 = k2 ? [x2[0], x2[1], x2[3] - 0.5 * x2[0], x2[4], x2[5], x2[7] - 0.5 * x2[5]] : [x2[0], x2[1], x2[3], x2[4], x2[5], x2[7]]), U2) {
    const e3 = [{ x: 0, y: s2 }, { x: 0, y: 0 }, { x: a2, y: s2 }, { x: a2, y: 0 }];
    let t3, n3 = Number.POSITIVE_INFINITY, i3 = Number.POSITIVE_INFINITY, l3 = Number.NEGATIVE_INFINITY, r3 = Number.NEGATIVE_INFINITY;
    for (let a3 = 0; a3 < e3.length; a3++)
      t3 = u$1(e3[a3], U2), n3 = t3.x > n3 ? n3 : t3.x, l3 = t3.x < l3 ? l3 : t3.x, i3 = t3.y > i3 ? i3 : t3.y, r3 = t3.y < r3 ? r3 : t3.y;
    N2 = { xmin: n3, xmax: l3, ymin: i3, ymax: r3, spatialReference: S2 };
  }
  const L2 = e2.filter((e3) => h(e3, "NEWSUBFILETYPE") === 1);
  let P, G, R2, F, C2;
  L2.length > 0 && (P = Math.round(Math.log(a2 / h(L2[0], "IMAGEWIDTH")) / Math.LN2), G = Math.round(Math.log(a2 / h(L2[L2.length - 1], "IMAGEWIDTH")) / Math.LN2), R2 = h(L2[L2.length - 1], "TILEWIDTH"), F = h(L2[L2.length - 1], "TILEHEIGHT")), R2 = G > 0 ? R2 || n2 : null, F = G > 0 ? F || i2 : null, n2 && (C2 = [{ maxCol: Math.ceil(a2 / n2) - 1, maxRow: Math.ceil(s2 / i2) - 1, minRow: 0, minCol: 0 }], L2.forEach((e3) => {
    C2.push({ maxCol: Math.ceil(h(e3, "IMAGEWIDTH") / h(e3, "TILEWIDTH")) - 1, maxRow: Math.ceil(h(e3, "IMAGELENGTH") / h(e3, "TILELENGTH")) - 1, minRow: 0, minCol: 0 });
  }));
  const v2 = h(e2[0], "GDAL_METADATA"), B = T$1(v2);
  return m2 += " " + O$1({ width: a2, height: s2, tileWidth: n2, tileHeight: i2, planes: r2, ifds: e2 }), { width: a2, height: s2, tileWidth: n2, tileHeight: i2, planes: r2, isBSQ: p2, pixelType: g2, compression: E2, noData: d2, isSupported: y2, message: m2, extent: N2, affine: b2 ? null : U2, firstPyramidLevel: P, maximumPyramidLevel: G, pyramidBlockWidth: R2, pyramidBlockHeight: F, tileBoundary: C2, metadata: B };
}
function m$1(e2) {
  const { littleEndian: t2, isBigTiff: n2, firstIFD: i2 } = b$1(e2);
  let s2 = i2;
  const l2 = [];
  do {
    const i3 = x$1(e2, t2, s2, 0, n$2.TIFF_TAGS, n2 ? 8 : 4);
    if (!i3.success)
      break;
    l2.push(i3.ifd), s2 = i3.nextIFD;
  } while (s2 > 0);
  return __spreadProps(__spreadValues({}, y$1(l2)), { littleEndian: t2, isBigTiff: n2, ifds: l2 });
}
function A$1(e2, t2, n2) {
  const i2 = e2.getUint32(t2, n2), a2 = e2.getUint32(t2 + 4, n2);
  return n2 ? a2 * r + i2 : i2 * r + a2;
}
function S(e2, t2, n2) {
  let i2 = n2 ? e2.getInt32(t2, n2) : e2.getUint32(t2, n2), a2 = n2 ? e2.getUint32(t2 + 4, n2) : e2.getInt32(t2 + 4, n2);
  const s2 = (n2 ? i2 : a2) >= 0 ? 1 : -1;
  n2 ? i2 *= s2 : a2 *= s2;
  return s2 * (n2 ? a2 * r + i2 : i2 * r + a2);
}
function M(e2, t2, n2, i2) {
  return i2 ? A$1(e2, t2, n2) : e2.getUint32(t2, n2);
}
function b$1(e2) {
  const t2 = new DataView(e2, 0, 16), n2 = t2.getUint16(0, false);
  let i2 = null;
  if (n2 === 18761)
    i2 = true;
  else {
    if (n2 !== 19789)
      throw "unexpected endianess byte";
    i2 = false;
  }
  const a2 = t2.getUint16(2, i2);
  if (a2 !== 42 && a2 !== 43)
    throw "unexpected tiff identifier";
  let s2 = 4;
  const l2 = a2 === 43;
  if (l2) {
    const e3 = t2.getUint16(s2, i2);
    if (s2 += 2, e3 !== 8)
      throw "unsupported bigtiff version";
    if (t2.getUint16(s2, i2) !== 0)
      throw "unsupported bigtiff version";
    s2 += 2;
  }
  return { littleEndian: i2, isBigTiff: l2, firstIFD: M(t2, s2, i2, l2) };
}
function x$1(e2, t2, i2, s2 = 0, l2 = n$2.TIFF_TAGS, r2 = 4) {
  const o2 = g$1(e2, t2, i2, s2, l2, r2);
  let f2;
  const u2 = o2.ifd;
  if (u2) {
    if (n$2.ifdTags.forEach((n2, i3) => {
      u2.has(i3) && (f2 = u2.get(i3), f2.data = g$1(e2, t2, f2.valueOffset - s2, s2, n2).ifd);
    }), u2.has("GEOKEYDIRECTORY")) {
      f2 = u2.get("GEOKEYDIRECTORY");
      const n2 = f2.values;
      if (n2 && n2.length > 4) {
        const i3 = n2[0] + "." + n2[1] + "." + n2[2];
        f2.data = g$1(e2, t2, f2.valueOffset + 6 - s2, s2, n$2.GEO_KEYS, 2).ifd, f2.data && f2.data.set("GEOTIFFVersion", { id: 0, type: 2, valueCount: 1, valueOffset: null, values: [i3] });
      }
    }
    if (u2.has("XMP")) {
      f2 = u2.get("XMP");
      const e3 = f2.values;
      typeof e3[0] == "number" && f2.type === 7 && (f2.values = [r$2(new Uint8Array(e3))]);
    }
  }
  return o2;
}
function O$1(e2) {
  const { width: t2, height: n2, tileHeight: i2, tileWidth: a2 } = e2, s2 = e2.planes, l2 = a2 ? a2 * i2 : t2 * n2, r2 = c$1(e2.ifds[0], "BITSPERSAMPLE")[0];
  let o2 = "";
  return l2 * s2 > __pow(2, 30) / (r2 > 8 ? r2 / 8 : 1) && (o2 = a2 ? "tiled tiff exceeding 1 gigabits per tile is not supported" : "scanline tiff exceeding 1 gigabits is not supported"), o2;
}
function D$1(e2, t2) {
  const { headerInfo: n2, ifd: i2 } = t2, a2 = p$3(e2, n2.littleEndian, i2, t2.offset || 0, t2.size || e2.byteLength), { pixelType: s2, isBSQ: l2, planes: r2 } = n2, o2 = f$1(s2), u2 = a2.length / r2;
  let c2;
  const g2 = [];
  for (let f2 = 0; f2 < r2; f2++) {
    if (c2 = new o2(u2), l2)
      c2 = a2.slice(u2 * f2, u2 * (f2 + 1));
    else
      for (let e3 = 0; e3 < u2; e3++)
        c2[e3] = a2[e3 * r2 + f2];
    g2.push(c2);
  }
  const w2 = h(i2, "TILEWIDTH"), d2 = h(i2, "TILELENGTH"), T2 = n2.noData ? n2.noData[0] : null, E2 = n2.metadata ? n2.metadata.statistics : null, y2 = E2 ? E2.map((e3) => e3.min) : null, m2 = E2 ? E2.map((e3) => e3.max) : null;
  let A2, S2;
  if (T2 != null)
    if (A2 = new Uint8Array(u2), Math.abs(T2) > 1e24)
      for (S2 = 0; S2 < u2; S2++)
        Math.abs((g2[0][S2] - T2) / T2) < 1e-6 ? A2[S2] = 0 : A2[S2] = 1;
    else
      for (S2 = 0; S2 < u2; S2++)
        g2[0][S2] === T2 ? A2[S2] = 0 : A2[S2] = 1;
  else
    y2 && m2 && t2.applyMinMaxConstraint && (A2 = I$1(g2, y2, m2));
  return { pixelType: s2, width: w2, height: d2, pixels: g2, mask: A2, noDataValue: T2 };
}
function U$1(e2, t2) {
  t2 = t2 || m$1(e2);
  const { ifds: n2, noData: i2 } = t2;
  if (n2.length === 0)
    throw "no valid image file directory";
  const a2 = O$1(t2);
  if (a2)
    throw a2;
  let s2, l2;
  const r2 = n2[0], o2 = i2 ? i2[0] : null;
  if (l2 = t2.tileWidth ? w$1(e2, t2, r2) : d$2(e2, t2, r2), o2 !== null) {
    if (l2.mask = new Uint8Array(l2.width * l2.height), Math.abs(o2) > 1e24)
      for (s2 = 0; s2 < l2.width * l2.height; s2++)
        Math.abs((l2.pixels[0][s2] - o2) / o2) < 1e-6 ? l2.mask[s2] = 0 : l2.mask[s2] = 1;
    else
      for (s2 = 0; s2 < l2.width * l2.height; s2++)
        l2.pixels[0][s2] === o2 ? l2.mask[s2] = 0 : l2.mask[s2] = 1;
    l2.noDataValue = o2;
  }
  return l2;
}
var u = o$2(function(e2) {
  var t2;
  (t2 = function() {
    var e3 = { unstuff: function(e4, t4, r3, a2, i2, n2, s2, o2) {
      var l2, f2, h2, u2, c2, d2 = (1 << r3) - 1, p2 = 0, m2 = 0, g2 = 4 * e4.length - Math.ceil(r3 * a2 / 8);
      if (e4[e4.length - 1] <<= 8 * g2, i2)
        for (l2 = 0; l2 < a2; l2++)
          m2 === 0 && (h2 = e4[p2++], m2 = 32), m2 >= r3 ? (f2 = h2 >>> m2 - r3 & d2, m2 -= r3) : (f2 = (h2 & d2) << (u2 = r3 - m2) & d2, f2 += (h2 = e4[p2++]) >>> (m2 = 32 - u2)), t4[l2] = i2[f2];
      else
        for (c2 = Math.ceil((o2 - n2) / s2), l2 = 0; l2 < a2; l2++)
          m2 === 0 && (h2 = e4[p2++], m2 = 32), m2 >= r3 ? (f2 = h2 >>> m2 - r3 & d2, m2 -= r3) : (f2 = (h2 & d2) << (u2 = r3 - m2) & d2, f2 += (h2 = e4[p2++]) >>> (m2 = 32 - u2)), t4[l2] = f2 < c2 ? n2 + f2 * s2 : o2;
    }, unstuffLUT: function(e4, t4, r3, a2, i2, n2) {
      var s2, o2 = (1 << t4) - 1, l2 = 0, f2 = 0, h2 = 0, u2 = 0, c2 = 0, d2 = [], p2 = 4 * e4.length - Math.ceil(t4 * r3 / 8);
      e4[e4.length - 1] <<= 8 * p2;
      var m2 = Math.ceil((n2 - a2) / i2);
      for (f2 = 0; f2 < r3; f2++)
        u2 === 0 && (s2 = e4[l2++], u2 = 32), u2 >= t4 ? (c2 = s2 >>> u2 - t4 & o2, u2 -= t4) : (c2 = (s2 & o2) << (h2 = t4 - u2) & o2, c2 += (s2 = e4[l2++]) >>> (u2 = 32 - h2)), d2[f2] = c2 < m2 ? a2 + c2 * i2 : n2;
      return d2.unshift(a2), d2;
    }, unstuff2: function(e4, t4, r3, a2, i2, n2, s2, o2) {
      var l2, f2, h2, u2, c2 = (1 << r3) - 1, d2 = 0, p2 = 0, m2 = 0;
      if (i2)
        for (l2 = 0; l2 < a2; l2++)
          p2 === 0 && (h2 = e4[d2++], p2 = 32, m2 = 0), p2 >= r3 ? (f2 = h2 >>> m2 & c2, p2 -= r3, m2 += r3) : (f2 = h2 >>> m2 & c2, p2 = 32 - (u2 = r3 - p2), f2 |= ((h2 = e4[d2++]) & (1 << u2) - 1) << r3 - u2, m2 = u2), t4[l2] = i2[f2];
      else {
        var g2 = Math.ceil((o2 - n2) / s2);
        for (l2 = 0; l2 < a2; l2++)
          p2 === 0 && (h2 = e4[d2++], p2 = 32, m2 = 0), p2 >= r3 ? (f2 = h2 >>> m2 & c2, p2 -= r3, m2 += r3) : (f2 = h2 >>> m2 & c2, p2 = 32 - (u2 = r3 - p2), f2 |= ((h2 = e4[d2++]) & (1 << u2) - 1) << r3 - u2, m2 = u2), t4[l2] = f2 < g2 ? n2 + f2 * s2 : o2;
      }
      return t4;
    }, unstuffLUT2: function(e4, t4, r3, a2, i2, n2) {
      var s2, o2 = (1 << t4) - 1, l2 = 0, f2 = 0, h2 = 0, u2 = 0, c2 = 0, d2 = 0, p2 = [], m2 = Math.ceil((n2 - a2) / i2);
      for (f2 = 0; f2 < r3; f2++)
        u2 === 0 && (s2 = e4[l2++], u2 = 32, d2 = 0), u2 >= t4 ? (c2 = s2 >>> d2 & o2, u2 -= t4, d2 += t4) : (c2 = s2 >>> d2 & o2, u2 = 32 - (h2 = t4 - u2), c2 |= ((s2 = e4[l2++]) & (1 << h2) - 1) << t4 - h2, d2 = h2), p2[f2] = c2 < m2 ? a2 + c2 * i2 : n2;
      return p2.unshift(a2), p2;
    }, originalUnstuff: function(e4, t4, r3, a2) {
      var i2, n2, s2, o2, l2 = (1 << r3) - 1, f2 = 0, h2 = 0, u2 = 4 * e4.length - Math.ceil(r3 * a2 / 8);
      for (e4[e4.length - 1] <<= 8 * u2, i2 = 0; i2 < a2; i2++)
        h2 === 0 && (s2 = e4[f2++], h2 = 32), h2 >= r3 ? (n2 = s2 >>> h2 - r3 & l2, h2 -= r3) : (n2 = (s2 & l2) << (o2 = r3 - h2) & l2, n2 += (s2 = e4[f2++]) >>> (h2 = 32 - o2)), t4[i2] = n2;
      return t4;
    }, originalUnstuff2: function(e4, t4, r3, a2) {
      var i2, n2, s2, o2, l2 = (1 << r3) - 1, f2 = 0, h2 = 0, u2 = 0;
      for (i2 = 0; i2 < a2; i2++)
        h2 === 0 && (s2 = e4[f2++], h2 = 32, u2 = 0), h2 >= r3 ? (n2 = s2 >>> u2 & l2, h2 -= r3, u2 += r3) : (n2 = s2 >>> u2 & l2, h2 = 32 - (o2 = r3 - h2), n2 |= ((s2 = e4[f2++]) & (1 << o2) - 1) << r3 - o2, u2 = o2), t4[i2] = n2;
      return t4;
    } }, t3 = { HUFFMAN_LUT_BITS_MAX: 12, computeChecksumFletcher32: function(e4) {
      for (var t4 = 65535, r3 = 65535, a2 = e4.length, i2 = Math.floor(a2 / 2), n2 = 0; i2; ) {
        var s2 = i2 >= 359 ? 359 : i2;
        i2 -= s2;
        do {
          t4 += e4[n2++] << 8, r3 += t4 += e4[n2++];
        } while (--s2);
        t4 = (65535 & t4) + (t4 >>> 16), r3 = (65535 & r3) + (r3 >>> 16);
      }
      return 1 & a2 && (r3 += t4 += e4[n2] << 8), ((r3 = (65535 & r3) + (r3 >>> 16)) << 16 | (t4 = (65535 & t4) + (t4 >>> 16))) >>> 0;
    }, readHeaderInfo: function(e4, t4) {
      var r3 = t4.ptr, a2 = new Uint8Array(e4, r3, 6), i2 = {};
      if (i2.fileIdentifierString = String.fromCharCode.apply(null, a2), i2.fileIdentifierString.lastIndexOf("Lerc2", 0) !== 0)
        throw "Unexpected file identifier string (expect Lerc2 ): " + i2.fileIdentifierString;
      r3 += 6;
      var n2, s2 = new DataView(e4, r3, 8), o2 = s2.getInt32(0, true);
      if (i2.fileVersion = o2, r3 += 4, o2 >= 3 && (i2.checksum = s2.getUint32(4, true), r3 += 4), s2 = new DataView(e4, r3, 12), i2.height = s2.getUint32(0, true), i2.width = s2.getUint32(4, true), r3 += 8, o2 >= 4 ? (i2.numDims = s2.getUint32(8, true), r3 += 4) : i2.numDims = 1, s2 = new DataView(e4, r3, 40), i2.numValidPixel = s2.getUint32(0, true), i2.microBlockSize = s2.getInt32(4, true), i2.blobSize = s2.getInt32(8, true), i2.imageType = s2.getInt32(12, true), i2.maxZError = s2.getFloat64(16, true), i2.zMin = s2.getFloat64(24, true), i2.zMax = s2.getFloat64(32, true), r3 += 40, t4.headerInfo = i2, t4.ptr = r3, o2 >= 3 && (n2 = o2 >= 4 ? 52 : 48, this.computeChecksumFletcher32(new Uint8Array(e4, r3 - n2, i2.blobSize - 14)) !== i2.checksum))
        throw "Checksum failed.";
      return true;
    }, checkMinMaxRanges: function(e4, t4) {
      var r3 = t4.headerInfo, a2 = this.getDataTypeArray(r3.imageType), i2 = r3.numDims * this.getDataTypeSize(r3.imageType), n2 = this.readSubArray(e4, t4.ptr, a2, i2), s2 = this.readSubArray(e4, t4.ptr + i2, a2, i2);
      t4.ptr += 2 * i2;
      var o2, l2 = true;
      for (o2 = 0; o2 < r3.numDims; o2++)
        if (n2[o2] !== s2[o2]) {
          l2 = false;
          break;
        }
      return r3.minValues = n2, r3.maxValues = s2, l2;
    }, readSubArray: function(e4, t4, r3, a2) {
      var i2;
      if (r3 === Uint8Array)
        i2 = new Uint8Array(e4, t4, a2);
      else {
        var n2 = new ArrayBuffer(a2);
        new Uint8Array(n2).set(new Uint8Array(e4, t4, a2)), i2 = new r3(n2);
      }
      return i2;
    }, readMask: function(e4, t4) {
      var r3, a2, i2 = t4.ptr, n2 = t4.headerInfo, s2 = n2.width * n2.height, o2 = n2.numValidPixel, l2 = new DataView(e4, i2, 4), f2 = {};
      if (f2.numBytes = l2.getUint32(0, true), i2 += 4, (o2 === 0 || s2 === o2) && f2.numBytes !== 0)
        throw "invalid mask";
      if (o2 === 0)
        r3 = new Uint8Array(Math.ceil(s2 / 8)), f2.bitset = r3, a2 = new Uint8Array(s2), t4.pixels.resultMask = a2, i2 += f2.numBytes;
      else if (f2.numBytes > 0) {
        r3 = new Uint8Array(Math.ceil(s2 / 8));
        var h2 = (l2 = new DataView(e4, i2, f2.numBytes)).getInt16(0, true), u2 = 2, c2 = 0, d2 = 0;
        do {
          if (h2 > 0)
            for (; h2--; )
              r3[c2++] = l2.getUint8(u2++);
          else
            for (d2 = l2.getUint8(u2++), h2 = -h2; h2--; )
              r3[c2++] = d2;
          h2 = l2.getInt16(u2, true), u2 += 2;
        } while (u2 < f2.numBytes);
        if (h2 !== -32768 || c2 < r3.length)
          throw "Unexpected end of mask RLE encoding";
        a2 = new Uint8Array(s2);
        var p2 = 0, m2 = 0;
        for (m2 = 0; m2 < s2; m2++)
          7 & m2 ? (p2 = r3[m2 >> 3], p2 <<= 7 & m2) : p2 = r3[m2 >> 3], 128 & p2 && (a2[m2] = 1);
        t4.pixels.resultMask = a2, f2.bitset = r3, i2 += f2.numBytes;
      }
      return t4.ptr = i2, t4.mask = f2, true;
    }, readDataOneSweep: function(e4, r3, a2) {
      var i2, n2 = r3.ptr, s2 = r3.headerInfo, o2 = s2.numDims, l2 = s2.width * s2.height, f2 = s2.imageType, h2 = s2.numValidPixel * t3.getDataTypeSize(f2) * o2, u2 = r3.pixels.resultMask;
      if (a2 === Uint8Array)
        i2 = new Uint8Array(e4, n2, h2);
      else {
        var c2 = new ArrayBuffer(h2);
        new Uint8Array(c2).set(new Uint8Array(e4, n2, h2)), i2 = new a2(c2);
      }
      if (i2.length === l2 * o2)
        r3.pixels.resultPixels = i2;
      else {
        r3.pixels.resultPixels = new a2(l2 * o2);
        var d2 = 0, p2 = 0, m2 = 0, g2 = 0;
        if (o2 > 1)
          for (m2 = 0; m2 < o2; m2++)
            for (g2 = m2 * l2, p2 = 0; p2 < l2; p2++)
              u2[p2] && (r3.pixels.resultPixels[g2 + p2] = i2[d2++]);
        else
          for (p2 = 0; p2 < l2; p2++)
            u2[p2] && (r3.pixels.resultPixels[p2] = i2[d2++]);
      }
      return n2 += h2, r3.ptr = n2, true;
    }, readHuffmanTree: function(e4, a2) {
      var i2 = this.HUFFMAN_LUT_BITS_MAX, n2 = new DataView(e4, a2.ptr, 16);
      if (a2.ptr += 16, n2.getInt32(0, true) < 2)
        throw "unsupported Huffman version";
      var s2 = n2.getInt32(4, true), o2 = n2.getInt32(8, true), l2 = n2.getInt32(12, true);
      if (o2 >= l2)
        return false;
      var f2 = new Uint32Array(l2 - o2);
      t3.decodeBits(e4, a2, f2);
      var h2, u2, c2, d2, p2 = [];
      for (h2 = o2; h2 < l2; h2++)
        p2[u2 = h2 - (h2 < s2 ? 0 : s2)] = { first: f2[h2 - o2], second: null };
      var m2 = e4.byteLength - a2.ptr, g2 = Math.ceil(m2 / 4), w2 = new ArrayBuffer(4 * g2);
      new Uint8Array(w2).set(new Uint8Array(e4, a2.ptr, m2));
      var y2, x2 = new Uint32Array(w2), k2 = 0, b2 = 0;
      for (y2 = x2[0], h2 = o2; h2 < l2; h2++)
        (d2 = p2[u2 = h2 - (h2 < s2 ? 0 : s2)].first) > 0 && (p2[u2].second = y2 << k2 >>> 32 - d2, 32 - k2 >= d2 ? (k2 += d2) === 32 && (k2 = 0, y2 = x2[++b2]) : (k2 += d2 - 32, y2 = x2[++b2], p2[u2].second |= y2 >>> 32 - k2));
      var I2 = 0, U2 = 0, v2 = new r2();
      for (h2 = 0; h2 < p2.length; h2++)
        p2[h2] !== void 0 && (I2 = Math.max(I2, p2[h2].first));
      U2 = I2 >= i2 ? i2 : I2;
      var A2, D2, T2, M2, V, C2 = [];
      for (h2 = o2; h2 < l2; h2++)
        if ((d2 = p2[u2 = h2 - (h2 < s2 ? 0 : s2)].first) > 0)
          if (A2 = [d2, u2], d2 <= U2)
            for (D2 = p2[u2].second << U2 - d2, T2 = 1 << U2 - d2, c2 = 0; c2 < T2; c2++)
              C2[D2 | c2] = A2;
          else
            for (D2 = p2[u2].second, V = v2, M2 = d2 - 1; M2 >= 0; M2--)
              D2 >>> M2 & 1 ? (V.right || (V.right = new r2()), V = V.right) : (V.left || (V.left = new r2()), V = V.left), M2 !== 0 || V.val || (V.val = A2[1]);
      return { decodeLut: C2, numBitsLUTQick: U2, numBitsLUT: I2, tree: v2, stuffedData: x2, srcPtr: b2, bitPos: k2 };
    }, readHuffman: function(e4, t4, r3) {
      var a2, i2, n2, s2, o2, l2, f2, h2, u2, c2 = t4.headerInfo, d2 = c2.numDims, p2 = t4.headerInfo.height, m2 = t4.headerInfo.width, g2 = m2 * p2, w2 = this.readHuffmanTree(e4, t4), y2 = w2.decodeLut, x2 = w2.tree, k2 = w2.stuffedData, b2 = w2.srcPtr, I2 = w2.bitPos, U2 = w2.numBitsLUTQick, v2 = w2.numBitsLUT, A2 = t4.headerInfo.imageType === 0 ? 128 : 0, D2 = t4.pixels.resultMask, T2 = 0;
      I2 > 0 && (b2++, I2 = 0);
      var M2, V = k2[b2], C2 = t4.encodeMode === 1, S2 = new r3(g2 * d2), P = S2;
      for (M2 = 0; M2 < c2.numDims; M2++) {
        if (d2 > 1 && (P = new r3(S2.buffer, g2 * M2, g2), T2 = 0), t4.headerInfo.numValidPixel === m2 * p2)
          for (h2 = 0, l2 = 0; l2 < p2; l2++)
            for (f2 = 0; f2 < m2; f2++, h2++) {
              if (i2 = 0, o2 = s2 = V << I2 >>> 32 - U2, 32 - I2 < U2 && (o2 = s2 |= k2[b2 + 1] >>> 64 - I2 - U2), y2[o2])
                i2 = y2[o2][1], I2 += y2[o2][0];
              else
                for (o2 = s2 = V << I2 >>> 32 - v2, 32 - I2 < v2 && (o2 = s2 |= k2[b2 + 1] >>> 64 - I2 - v2), a2 = x2, u2 = 0; u2 < v2; u2++)
                  if (!(a2 = s2 >>> v2 - u2 - 1 & 1 ? a2.right : a2.left).left && !a2.right) {
                    i2 = a2.val, I2 = I2 + u2 + 1;
                    break;
                  }
              I2 >= 32 && (I2 -= 32, V = k2[++b2]), n2 = i2 - A2, C2 ? (n2 += f2 > 0 ? T2 : l2 > 0 ? P[h2 - m2] : T2, n2 &= 255, P[h2] = n2, T2 = n2) : P[h2] = n2;
            }
        else
          for (h2 = 0, l2 = 0; l2 < p2; l2++)
            for (f2 = 0; f2 < m2; f2++, h2++)
              if (D2[h2]) {
                if (i2 = 0, o2 = s2 = V << I2 >>> 32 - U2, 32 - I2 < U2 && (o2 = s2 |= k2[b2 + 1] >>> 64 - I2 - U2), y2[o2])
                  i2 = y2[o2][1], I2 += y2[o2][0];
                else
                  for (o2 = s2 = V << I2 >>> 32 - v2, 32 - I2 < v2 && (o2 = s2 |= k2[b2 + 1] >>> 64 - I2 - v2), a2 = x2, u2 = 0; u2 < v2; u2++)
                    if (!(a2 = s2 >>> v2 - u2 - 1 & 1 ? a2.right : a2.left).left && !a2.right) {
                      i2 = a2.val, I2 = I2 + u2 + 1;
                      break;
                    }
                I2 >= 32 && (I2 -= 32, V = k2[++b2]), n2 = i2 - A2, C2 ? (f2 > 0 && D2[h2 - 1] ? n2 += T2 : l2 > 0 && D2[h2 - m2] ? n2 += P[h2 - m2] : n2 += T2, n2 &= 255, P[h2] = n2, T2 = n2) : P[h2] = n2;
              }
        t4.ptr = t4.ptr + 4 * (b2 + 1) + (I2 > 0 ? 4 : 0);
      }
      t4.pixels.resultPixels = S2;
    }, decodeBits: function(t4, r3, a2, i2, n2) {
      var s2 = r3.headerInfo, o2 = s2.fileVersion, l2 = 0, f2 = t4.byteLength - r3.ptr >= 5 ? 5 : t4.byteLength - r3.ptr, h2 = new DataView(t4, r3.ptr, f2), u2 = h2.getUint8(0);
      l2++;
      var c2 = u2 >> 6, d2 = c2 === 0 ? 4 : 3 - c2, p2 = (32 & u2) > 0, m2 = 31 & u2, g2 = 0;
      if (d2 === 1)
        g2 = h2.getUint8(l2), l2++;
      else if (d2 === 2)
        g2 = h2.getUint16(l2, true), l2 += 2;
      else {
        if (d2 !== 4)
          throw "Invalid valid pixel count type";
        g2 = h2.getUint32(l2, true), l2 += 4;
      }
      var w2, y2, x2, k2, b2, I2, U2, v2, A2, D2 = 2 * s2.maxZError, T2 = s2.numDims > 1 ? s2.maxValues[n2] : s2.zMax;
      if (p2) {
        for (r3.counter.lut++, v2 = h2.getUint8(l2), l2++, k2 = Math.ceil((v2 - 1) * m2 / 8), b2 = Math.ceil(k2 / 4), y2 = new ArrayBuffer(4 * b2), x2 = new Uint8Array(y2), r3.ptr += l2, x2.set(new Uint8Array(t4, r3.ptr, k2)), U2 = new Uint32Array(y2), r3.ptr += k2, A2 = 0; v2 - 1 >>> A2; )
          A2++;
        k2 = Math.ceil(g2 * A2 / 8), b2 = Math.ceil(k2 / 4), y2 = new ArrayBuffer(4 * b2), (x2 = new Uint8Array(y2)).set(new Uint8Array(t4, r3.ptr, k2)), w2 = new Uint32Array(y2), r3.ptr += k2, I2 = o2 >= 3 ? e3.unstuffLUT2(U2, m2, v2 - 1, i2, D2, T2) : e3.unstuffLUT(U2, m2, v2 - 1, i2, D2, T2), o2 >= 3 ? e3.unstuff2(w2, a2, A2, g2, I2) : e3.unstuff(w2, a2, A2, g2, I2);
      } else
        r3.counter.bitstuffer++, A2 = m2, r3.ptr += l2, A2 > 0 && (k2 = Math.ceil(g2 * A2 / 8), b2 = Math.ceil(k2 / 4), y2 = new ArrayBuffer(4 * b2), (x2 = new Uint8Array(y2)).set(new Uint8Array(t4, r3.ptr, k2)), w2 = new Uint32Array(y2), r3.ptr += k2, o2 >= 3 ? i2 == null ? e3.originalUnstuff2(w2, a2, A2, g2) : e3.unstuff2(w2, a2, A2, g2, false, i2, D2, T2) : i2 == null ? e3.originalUnstuff(w2, a2, A2, g2) : e3.unstuff(w2, a2, A2, g2, false, i2, D2, T2));
    }, readTiles: function(e4, r3, a2) {
      var i2 = r3.headerInfo, n2 = i2.width, s2 = i2.height, o2 = i2.microBlockSize, l2 = i2.imageType, f2 = t3.getDataTypeSize(l2), h2 = Math.ceil(n2 / o2), u2 = Math.ceil(s2 / o2);
      r3.pixels.numBlocksY = u2, r3.pixels.numBlocksX = h2, r3.pixels.ptr = 0;
      var c2, d2, p2, m2, g2, w2, y2, x2, k2, b2, I2 = 0, U2 = 0, v2 = 0, A2 = 0, D2 = 0, T2 = 0, M2 = 0, V = 0, C2 = 0, S2 = 0, P = 0, B = 0, O2 = 0, L2 = 0, z2 = 0, F = new a2(o2 * o2), j = s2 % o2 || o2, E2 = n2 % o2 || o2, H = i2.numDims, R2 = r3.pixels.resultMask, _2 = r3.pixels.resultPixels, Z = i2.fileVersion >= 5 ? 14 : 15, X = i2.zMax;
      for (v2 = 0; v2 < u2; v2++)
        for (D2 = v2 !== u2 - 1 ? o2 : j, A2 = 0; A2 < h2; A2++)
          for (S2 = v2 * n2 * o2 + A2 * o2, P = n2 - (T2 = A2 !== h2 - 1 ? o2 : E2), x2 = 0; x2 < H; x2++) {
            if (H > 1 ? (b2 = _2, S2 = v2 * n2 * o2 + A2 * o2, _2 = new a2(r3.pixels.resultPixels.buffer, n2 * s2 * x2 * f2, n2 * s2), X = i2.maxValues[x2]) : b2 = null, M2 = e4.byteLength - r3.ptr, d2 = {}, z2 = 0, V = (c2 = new DataView(e4, r3.ptr, Math.min(10, M2))).getUint8(0), z2++, k2 = i2.fileVersion >= 5 ? 4 & V : 0, C2 = V >> 6 & 255, (V >> 2 & Z) != (A2 * o2 >> 3 & Z))
              throw "integrity issue";
            if (k2 && x2 === 0)
              throw "integrity issue";
            if ((g2 = 3 & V) > 3)
              throw r3.ptr += z2, "Invalid block encoding (" + g2 + ")";
            if (g2 !== 2)
              if (g2 === 0) {
                if (k2)
                  throw "integrity issue";
                if (r3.counter.uncompressed++, r3.ptr += z2, B = (B = D2 * T2 * f2) < (O2 = e4.byteLength - r3.ptr) ? B : O2, p2 = new ArrayBuffer(B % f2 == 0 ? B : B + f2 - B % f2), new Uint8Array(p2).set(new Uint8Array(e4, r3.ptr, B)), m2 = new a2(p2), L2 = 0, R2)
                  for (I2 = 0; I2 < D2; I2++) {
                    for (U2 = 0; U2 < T2; U2++)
                      R2[S2] && (_2[S2] = m2[L2++]), S2++;
                    S2 += P;
                  }
                else
                  for (I2 = 0; I2 < D2; I2++) {
                    for (U2 = 0; U2 < T2; U2++)
                      _2[S2++] = m2[L2++];
                    S2 += P;
                  }
                r3.ptr += L2 * f2;
              } else if (w2 = t3.getDataTypeUsed(k2 && l2 < 6 ? 4 : l2, C2), y2 = t3.getOnePixel(d2, z2, w2, c2), z2 += t3.getDataTypeSize(w2), g2 === 3)
                if (r3.ptr += z2, r3.counter.constantoffset++, R2)
                  for (I2 = 0; I2 < D2; I2++) {
                    for (U2 = 0; U2 < T2; U2++)
                      R2[S2] && (_2[S2] = k2 ? Math.min(X, b2[S2] + y2) : y2), S2++;
                    S2 += P;
                  }
                else
                  for (I2 = 0; I2 < D2; I2++) {
                    for (U2 = 0; U2 < T2; U2++)
                      _2[S2] = k2 ? Math.min(X, b2[S2] + y2) : y2, S2++;
                    S2 += P;
                  }
              else if (r3.ptr += z2, t3.decodeBits(e4, r3, F, y2, x2), z2 = 0, k2)
                if (R2)
                  for (I2 = 0; I2 < D2; I2++) {
                    for (U2 = 0; U2 < T2; U2++)
                      R2[S2] && (_2[S2] = F[z2++] + b2[S2]), S2++;
                    S2 += P;
                  }
                else
                  for (I2 = 0; I2 < D2; I2++) {
                    for (U2 = 0; U2 < T2; U2++)
                      _2[S2] = F[z2++] + b2[S2], S2++;
                    S2 += P;
                  }
              else if (R2)
                for (I2 = 0; I2 < D2; I2++) {
                  for (U2 = 0; U2 < T2; U2++)
                    R2[S2] && (_2[S2] = F[z2++]), S2++;
                  S2 += P;
                }
              else
                for (I2 = 0; I2 < D2; I2++) {
                  for (U2 = 0; U2 < T2; U2++)
                    _2[S2++] = F[z2++];
                  S2 += P;
                }
            else {
              if (k2)
                if (R2)
                  for (I2 = 0; I2 < D2; I2++)
                    for (U2 = 0; U2 < T2; U2++)
                      R2[S2] && (_2[S2] = b2[S2]), S2++;
                else
                  for (I2 = 0; I2 < D2; I2++)
                    for (U2 = 0; U2 < T2; U2++)
                      _2[S2] = b2[S2], S2++;
              r3.counter.constant++, r3.ptr += z2;
            }
          }
    }, formatFileInfo: function(e4) {
      return { fileIdentifierString: e4.headerInfo.fileIdentifierString, fileVersion: e4.headerInfo.fileVersion, imageType: e4.headerInfo.imageType, height: e4.headerInfo.height, width: e4.headerInfo.width, numValidPixel: e4.headerInfo.numValidPixel, microBlockSize: e4.headerInfo.microBlockSize, blobSize: e4.headerInfo.blobSize, maxZError: e4.headerInfo.maxZError, pixelType: t3.getPixelType(e4.headerInfo.imageType), eofOffset: e4.eofOffset, mask: e4.mask ? { numBytes: e4.mask.numBytes } : null, pixels: { numBlocksX: e4.pixels.numBlocksX, numBlocksY: e4.pixels.numBlocksY, maxValue: e4.headerInfo.zMax, minValue: e4.headerInfo.zMin, noDataValue: e4.noDataValue } };
    }, constructConstantSurface: function(e4) {
      var t4 = e4.headerInfo.zMax, r3 = e4.headerInfo.numDims, a2 = e4.headerInfo.height * e4.headerInfo.width, i2 = 0, n2 = 0, s2 = 0, o2 = e4.pixels.resultMask, l2 = e4.pixels.resultPixels;
      if (o2)
        if (r3 > 1)
          for (i2 = 0; i2 < r3; i2++)
            for (s2 = i2 * a2, t4 = e4.headerInfo.maxValues[i2], n2 = 0; n2 < a2; n2++)
              o2[n2] && (l2[s2 + n2] = t4);
        else
          for (n2 = 0; n2 < a2; n2++)
            o2[n2] && (l2[n2] = t4);
      else if (r3 > 1)
        for (i2 = 0; i2 < r3; i2++)
          for (s2 = i2 * a2, t4 = e4.headerInfo.maxValues[i2], n2 = 0; n2 < a2; n2++)
            l2[s2 + n2] = t4;
      else
        for (n2 = 0; n2 < a2; n2++)
          l2[n2] = t4;
    }, getDataTypeArray: function(e4) {
      var t4;
      switch (e4) {
        case 0:
          t4 = Int8Array;
          break;
        case 1:
          t4 = Uint8Array;
          break;
        case 2:
          t4 = Int16Array;
          break;
        case 3:
          t4 = Uint16Array;
          break;
        case 4:
          t4 = Int32Array;
          break;
        case 5:
          t4 = Uint32Array;
          break;
        case 6:
          t4 = Float32Array;
          break;
        case 7:
          t4 = Float64Array;
          break;
        default:
          t4 = Float32Array;
      }
      return t4;
    }, getPixelType: function(e4) {
      var t4;
      switch (e4) {
        case 0:
          t4 = "S8";
          break;
        case 1:
          t4 = "U8";
          break;
        case 2:
          t4 = "S16";
          break;
        case 3:
          t4 = "U16";
          break;
        case 4:
          t4 = "S32";
          break;
        case 5:
          t4 = "U32";
          break;
        case 6:
          t4 = "F32";
          break;
        case 7:
          t4 = "F64";
          break;
        default:
          t4 = "F32";
      }
      return t4;
    }, isValidPixelValue: function(e4, t4) {
      if (t4 == null)
        return false;
      var r3;
      switch (e4) {
        case 0:
          r3 = t4 >= -128 && t4 <= 127;
          break;
        case 1:
          r3 = t4 >= 0 && t4 <= 255;
          break;
        case 2:
          r3 = t4 >= -32768 && t4 <= 32767;
          break;
        case 3:
          r3 = t4 >= 0 && t4 <= 65536;
          break;
        case 4:
          r3 = t4 >= -2147483648 && t4 <= 2147483647;
          break;
        case 5:
          r3 = t4 >= 0 && t4 <= 4294967296;
          break;
        case 6:
          r3 = t4 >= -34027999387901484e22 && t4 <= 34027999387901484e22;
          break;
        case 7:
          r3 = t4 >= 5e-324 && t4 <= 17976931348623157e292;
          break;
        default:
          r3 = false;
      }
      return r3;
    }, getDataTypeSize: function(e4) {
      var t4 = 0;
      switch (e4) {
        case 0:
        case 1:
          t4 = 1;
          break;
        case 2:
        case 3:
          t4 = 2;
          break;
        case 4:
        case 5:
        case 6:
          t4 = 4;
          break;
        case 7:
          t4 = 8;
          break;
        default:
          t4 = e4;
      }
      return t4;
    }, getDataTypeUsed: function(e4, t4) {
      var r3 = e4;
      switch (e4) {
        case 2:
        case 4:
          r3 = e4 - t4;
          break;
        case 3:
        case 5:
          r3 = e4 - 2 * t4;
          break;
        case 6:
          r3 = t4 === 0 ? e4 : t4 === 1 ? 2 : 1;
          break;
        case 7:
          r3 = t4 === 0 ? e4 : e4 - 2 * t4 + 1;
          break;
        default:
          r3 = e4;
      }
      return r3;
    }, getOnePixel: function(e4, t4, r3, a2) {
      var i2 = 0;
      switch (r3) {
        case 0:
          i2 = a2.getInt8(t4);
          break;
        case 1:
          i2 = a2.getUint8(t4);
          break;
        case 2:
          i2 = a2.getInt16(t4, true);
          break;
        case 3:
          i2 = a2.getUint16(t4, true);
          break;
        case 4:
          i2 = a2.getInt32(t4, true);
          break;
        case 5:
          i2 = a2.getUInt32(t4, true);
          break;
        case 6:
          i2 = a2.getFloat32(t4, true);
          break;
        case 7:
          i2 = a2.getFloat64(t4, true);
          break;
        default:
          throw "the decoder does not understand this pixel type";
      }
      return i2;
    } }, r2 = function(e4, t4, r3) {
      this.val = e4, this.left = t4, this.right = r3;
    };
    return { decode: function(e4, r3) {
      var a2 = (r3 = r3 || {}).noDataValue, i2 = 0, n2 = {};
      if (n2.ptr = r3.inputOffset || 0, n2.pixels = {}, t3.readHeaderInfo(e4, n2)) {
        var s2 = n2.headerInfo, o2 = s2.fileVersion, l2 = t3.getDataTypeArray(s2.imageType);
        if (o2 > 5)
          throw "unsupported lerc version 2." + o2;
        t3.readMask(e4, n2), s2.numValidPixel === s2.width * s2.height || n2.pixels.resultMask || (n2.pixels.resultMask = r3.maskData);
        var f2, h2 = s2.width * s2.height;
        if (n2.pixels.resultPixels = new l2(h2 * s2.numDims), n2.counter = { onesweep: 0, uncompressed: 0, lut: 0, bitstuffer: 0, constant: 0, constantoffset: 0 }, s2.numValidPixel !== 0)
          if (s2.zMax === s2.zMin)
            t3.constructConstantSurface(n2);
          else if (o2 >= 4 && t3.checkMinMaxRanges(e4, n2))
            t3.constructConstantSurface(n2);
          else {
            var u2 = new DataView(e4, n2.ptr, 2), c2 = u2.getUint8(0);
            if (n2.ptr++, c2)
              t3.readDataOneSweep(e4, n2, l2);
            else if (o2 > 1 && s2.imageType <= 1 && Math.abs(s2.maxZError - 0.5) < 1e-5) {
              var d2 = u2.getUint8(1);
              if (n2.ptr++, n2.encodeMode = d2, d2 > 2 || o2 < 4 && d2 > 1)
                throw "Invalid Huffman flag " + d2;
              d2 ? t3.readHuffman(e4, n2, l2) : t3.readTiles(e4, n2, l2);
            } else
              t3.readTiles(e4, n2, l2);
          }
        n2.eofOffset = n2.ptr, r3.inputOffset ? (f2 = n2.headerInfo.blobSize + r3.inputOffset - n2.ptr, Math.abs(f2) >= 1 && (n2.eofOffset = r3.inputOffset + n2.headerInfo.blobSize)) : (f2 = n2.headerInfo.blobSize - n2.ptr, Math.abs(f2) >= 1 && (n2.eofOffset = n2.headerInfo.blobSize));
        var p2 = { width: s2.width, height: s2.height, pixelData: n2.pixels.resultPixels, minValue: s2.zMin, maxValue: s2.zMax, validPixelCount: s2.numValidPixel, dimCount: s2.numDims, dimStats: { minValues: s2.minValues, maxValues: s2.maxValues }, maskData: n2.pixels.resultMask };
        if (n2.pixels.resultMask && t3.isValidPixelValue(s2.imageType, a2)) {
          var m2 = n2.pixels.resultMask;
          for (i2 = 0; i2 < h2; i2++)
            m2[i2] || (p2.pixelData[i2] = a2);
          p2.noDataValue = a2;
        }
        return n2.noDataValue = a2, r3.returnFileInfo && (p2.fileInfo = t3.formatFileInfo(n2)), p2;
      }
    }, getBandCount: function(e4) {
      for (var r3 = 0, a2 = 0, i2 = { ptr: 0, pixels: {} }; a2 < e4.byteLength - 58; )
        t3.readHeaderInfo(e4, i2), a2 += i2.headerInfo.blobSize, r3++, i2.ptr = a2;
      return r3;
    } };
  }()) !== void 0 && (e2.exports = t2);
}), c = function(e2) {
  var t2, r2, i2, n2, s2, o2;
  function l2(e3) {
    var t3, r3, a2, i3, n3, s3, o3, l3, f2, h2, u2, c2, d2;
    for (this.data = e3, this.pos = 8, this.palette = [], this.imgData = [], this.transparency = {}, this.animation = null, this.text = {}, n3 = null; ; ) {
      switch (t3 = this.readUInt32(), l3 = function() {
        var e4, t4;
        for (t4 = [], e4 = 0; e4 < 4; ++e4)
          t4.push(String.fromCharCode(this.data[this.pos++]));
        return t4;
      }.call(this).join("")) {
        case "IHDR":
          this.width = this.readUInt32(), this.height = this.readUInt32(), this.bits = this.data[this.pos++], this.colorType = this.data[this.pos++], this.compressionMethod = this.data[this.pos++], this.filterMethod = this.data[this.pos++], this.interlaceMethod = this.data[this.pos++];
          break;
        case "acTL":
          this.animation = { numFrames: this.readUInt32(), numPlays: this.readUInt32() || 1 / 0, frames: [] };
          break;
        case "PLTE":
          this.palette = this.read(t3);
          break;
        case "fcTL":
          n3 && this.animation.frames.push(n3), this.pos += 4, n3 = { width: this.readUInt32(), height: this.readUInt32(), xOffset: this.readUInt32(), yOffset: this.readUInt32() }, i3 = this.readUInt16(), a2 = this.readUInt16() || 100, n3.delay = 1e3 * i3 / a2, n3.disposeOp = this.data[this.pos++], n3.blendOp = this.data[this.pos++], n3.data = [];
          break;
        case "IDAT":
        case "fdAT":
          for (l3 === "fdAT" && (this.pos += 4, t3 -= 4), e3 = (n3 != null ? n3.data : void 0) || this.imgData, u2 = 0; 0 <= t3 ? u2 < t3 : u2 > t3; 0 <= t3 ? ++u2 : --u2)
            e3.push(this.data[this.pos++]);
          break;
        case "tRNS":
          switch (this.transparency = {}, this.colorType) {
            case 3:
              if (this.transparency.indexed = this.read(t3), (f2 = 255 - this.transparency.indexed.length) > 0)
                for (c2 = 0; 0 <= f2 ? c2 < f2 : c2 > f2; 0 <= f2 ? ++c2 : --c2)
                  this.transparency.indexed.push(255);
              break;
            case 0:
              this.transparency.grayscale = this.read(t3)[0];
              break;
            case 2:
              this.transparency.rgb = this.read(t3);
          }
          break;
        case "tEXt":
          s3 = (h2 = this.read(t3)).indexOf(0), o3 = String.fromCharCode.apply(String, h2.slice(0, s3)), this.text[o3] = String.fromCharCode.apply(String, h2.slice(s3 + 1));
          break;
        case "IEND":
          return n3 && this.animation.frames.push(n3), this.colors = function() {
            switch (this.colorType) {
              case 0:
              case 3:
              case 4:
                return 1;
              case 2:
              case 6:
                return 3;
            }
          }.call(this), this.hasAlphaChannel = (d2 = this.colorType) === 4 || d2 === 6, r3 = this.colors + (this.hasAlphaChannel ? 1 : 0), this.pixelBitlength = this.bits * r3, this.colorSpace = function() {
            switch (this.colors) {
              case 1:
                return "DeviceGray";
              case 3:
                return "DeviceRGB";
            }
          }.call(this), void (this.imgData = new Uint8Array(this.imgData));
        default:
          this.pos += t3;
      }
      if (this.pos += 4, this.pos > this.data.length)
        throw new Error("Incomplete or corrupt PNG file");
    }
  }
  return l2.load = function(e3, t3, r3) {
    var a2;
    return typeof t3 == "function" && (r3 = t3), (a2 = new XMLHttpRequest()).open("GET", e3, true), a2.responseType = "arraybuffer", a2.onload = function() {
      var e4;
      return e4 = new l2(new Uint8Array(a2.response || a2.mozResponseArrayBuffer)), typeof (t3 != null ? t3.getContext : void 0) == "function" && e4.render(t3), typeof r3 == "function" ? r3(e4) : void 0;
    }, a2.send(null);
  }, r2 = 1, i2 = 2, t2 = 0, l2.prototype.read = function(e3) {
    var t3, r3;
    for (r3 = [], t3 = 0; 0 <= e3 ? t3 < e3 : t3 > e3; 0 <= e3 ? ++t3 : --t3)
      r3.push(this.data[this.pos++]);
    return r3;
  }, l2.prototype.readUInt32 = function() {
    return this.data[this.pos++] << 24 | this.data[this.pos++] << 16 | this.data[this.pos++] << 8 | this.data[this.pos++];
  }, l2.prototype.readUInt16 = function() {
    return this.data[this.pos++] << 8 | this.data[this.pos++];
  }, l2.prototype.decodePixels = function(e3) {
    var t3, r3, i3, n3, s3, o3, l3, f2, h2, u2, c2, d2, p2, m2, g2, w2, y2, x2, k2, b2, I2, U2, v2;
    if (e3 == null && (e3 = this.imgData), e3.length === 0)
      return new Uint8Array(0);
    for (e3 = (e3 = new e$4(e3)).getBytes(), w2 = (d2 = this.pixelBitlength / 8) * this.width, p2 = new Uint8Array(w2 * this.height), o3 = e3.length, g2 = 0, m2 = 0, r3 = 0; m2 < o3; ) {
      switch (e3[m2++]) {
        case 0:
          for (n3 = k2 = 0; k2 < w2; n3 = k2 += 1)
            p2[r3++] = e3[m2++];
          break;
        case 1:
          for (n3 = b2 = 0; b2 < w2; n3 = b2 += 1)
            t3 = e3[m2++], s3 = n3 < d2 ? 0 : p2[r3 - d2], p2[r3++] = (t3 + s3) % 256;
          break;
        case 2:
          for (n3 = I2 = 0; I2 < w2; n3 = I2 += 1)
            t3 = e3[m2++], i3 = (n3 - n3 % d2) / d2, y2 = g2 && p2[(g2 - 1) * w2 + i3 * d2 + n3 % d2], p2[r3++] = (y2 + t3) % 256;
          break;
        case 3:
          for (n3 = U2 = 0; U2 < w2; n3 = U2 += 1)
            t3 = e3[m2++], i3 = (n3 - n3 % d2) / d2, s3 = n3 < d2 ? 0 : p2[r3 - d2], y2 = g2 && p2[(g2 - 1) * w2 + i3 * d2 + n3 % d2], p2[r3++] = (t3 + Math.floor((s3 + y2) / 2)) % 256;
          break;
        case 4:
          for (n3 = v2 = 0; v2 < w2; n3 = v2 += 1)
            t3 = e3[m2++], i3 = (n3 - n3 % d2) / d2, s3 = n3 < d2 ? 0 : p2[r3 - d2], g2 === 0 ? y2 = x2 = 0 : (y2 = p2[(g2 - 1) * w2 + i3 * d2 + n3 % d2], x2 = i3 && p2[(g2 - 1) * w2 + (i3 - 1) * d2 + n3 % d2]), l3 = s3 + y2 - x2, f2 = Math.abs(l3 - s3), u2 = Math.abs(l3 - y2), c2 = Math.abs(l3 - x2), h2 = f2 <= u2 && f2 <= c2 ? s3 : u2 <= c2 ? y2 : x2, p2[r3++] = (t3 + h2) % 256;
          break;
        default:
          throw new Error("Invalid filter algorithm: " + e3[m2 - 1]);
      }
      g2++;
    }
    return p2;
  }, l2.prototype.decodePalette = function() {
    var e3, t3, r3, a2, i3, n3, s3, o3, l3;
    for (r3 = this.palette, n3 = this.transparency.indexed || [], i3 = new Uint8Array((n3.length || 0) + r3.length), a2 = 0, r3.length, e3 = 0, t3 = s3 = 0, o3 = r3.length; s3 < o3; t3 = s3 += 3)
      i3[a2++] = r3[t3], i3[a2++] = r3[t3 + 1], i3[a2++] = r3[t3 + 2], i3[a2++] = (l3 = n3[e3++]) != null ? l3 : 255;
    return i3;
  }, l2.prototype.copyToImageData = function(e3, t3) {
    var r3, a2, i3, n3, s3, o3, l3, f2, h2, u2, c2;
    if (a2 = this.colors, h2 = null, r3 = this.hasAlphaChannel, this.palette.length && (h2 = (c2 = this._decodedPalette) != null ? c2 : this._decodedPalette = this.decodePalette(), a2 = 4, r3 = true), f2 = (i3 = e3.data || e3).length, s3 = h2 || t3, n3 = o3 = 0, a2 === 1)
      for (; n3 < f2; )
        l3 = h2 ? 4 * t3[n3 / 4] : o3, u2 = s3[l3++], i3[n3++] = u2, i3[n3++] = u2, i3[n3++] = u2, i3[n3++] = r3 ? s3[l3++] : this.transparency.grayscale && this.transparency.grayscale === u2 ? 0 : 255, o3 = l3;
    else
      for (; n3 < f2; )
        l3 = h2 ? 4 * t3[n3 / 4] : o3, i3[n3++] = s3[l3++], i3[n3++] = s3[l3++], i3[n3++] = s3[l3++], i3[n3++] = r3 ? s3[l3++] : this.transparency.rgb && this.transparency.rgb[1] === s3[l3 - 3] && this.transparency.rgb[3] === s3[l3 - 2] && this.transparency.rgb[5] === s3[l3 - 1] ? 0 : 255, o3 = l3;
  }, l2.prototype.decode = function() {
    var e3;
    return e3 = new Uint8Array(this.width * this.height * 4), this.copyToImageData(e3, this.decodePixels()), e3;
  }, s2 = e2.document && e2.document.createElement("canvas"), o2 = s2 && s2.getContext("2d"), n2 = function(e3) {
    var t3;
    return o2.width = e3.width, o2.height = e3.height, o2.clearRect(0, 0, e3.width, e3.height), o2.putImageData(e3, 0, 0), (t3 = new Image()).src = s2.toDataURL(), t3;
  }, l2.prototype.decodeFrames = function(e3) {
    var t3, r3, a2, i3, s3, o3, l3, f2;
    if (this.animation) {
      for (f2 = [], r3 = s3 = 0, o3 = (l3 = this.animation.frames).length; s3 < o3; r3 = ++s3)
        t3 = l3[r3], a2 = e3.createImageData(t3.width, t3.height), i3 = this.decodePixels(new Uint8Array(t3.data)), this.copyToImageData(a2, i3), t3.imageData = a2, f2.push(t3.image = n2(a2));
      return f2;
    }
  }, l2.prototype.renderFrame = function(e3, a2) {
    var n3, s3, o3;
    return n3 = (s3 = this.animation.frames)[a2], o3 = s3[a2 - 1], a2 === 0 && e3.clearRect(0, 0, this.width, this.height), (o3 != null ? o3.disposeOp : void 0) === r2 ? e3.clearRect(o3.xOffset, o3.yOffset, o3.width, o3.height) : (o3 != null ? o3.disposeOp : void 0) === i2 && e3.putImageData(o3.imageData, o3.xOffset, o3.yOffset), n3.blendOp === t2 && e3.clearRect(n3.xOffset, n3.yOffset, n3.width, n3.height), e3.drawImage(n3.image, n3.xOffset, n3.yOffset);
  }, l2.prototype.animate = function(e3) {
    var t3, r3, a2, i3, n3, s3, o3 = this;
    return r3 = 0, s3 = this.animation, i3 = s3.numFrames, a2 = s3.frames, n3 = s3.numPlays, (t3 = function() {
      var s4, l3;
      if (s4 = r3++ % i3, l3 = a2[s4], o3.renderFrame(e3, s4), i3 > 1 && r3 / i3 < n3)
        return o3.animation._timeout = setTimeout(t3, l3.delay);
    })();
  }, l2.prototype.stopAnimation = function() {
    var e3;
    return clearTimeout((e3 = this.animation) != null ? e3._timeout : void 0);
  }, l2.prototype.render = function(e3) {
    var t3, r3;
    return e3._png && e3._png.stopAnimation(), e3._png = this, e3.width = this.width, e3.height = this.height, t3 = e3.getContext("2d"), this.animation ? (this.decodeFrames(t3), this.animate(t3)) : (r3 = t3.createImageData(this.width, this.height), this.copyToImageData(r3, this.decodePixels()), t3.putImageData(r3, 0, 0));
  }, l2;
}(self);
const d$1 = new Set(["jpg", "png", "bmp", "gif"]);
function p$2(r2, a2) {
  if (!r$3)
    throw new s$2("rasterCoded:decode", "lerc decoder is not supported on big endian platform");
  const { width: i2, height: n2, pixelType: o2 } = a2, f2 = v$1(o2), h2 = f2.pixelTypeCtor, u2 = a2.noDataValue == null ? f2.noDataValue : a2.noDataValue;
  let c2, d2, p2 = 0, m2 = 0;
  const g2 = r2.byteLength - 10;
  for (; m2 < g2; ) {
    const a3 = m$3(r2, { inputOffset: m2, encodedMaskData: c2, returnMask: p2 === 0, returnEncodedMask: p2 === 0, returnFileInfo: true, pixelType: h2, noDataValue: u2 });
    if (i2 && n2 && (a3.width !== i2 || a3.height !== n2))
      throw new s$2("rasterCoded:decode", "lerc decoded result has width or height different from specified in options");
    if (m2 = a3.fileInfo.eofOffset, p2 === 0 && (c2 = a3.encodedMaskData, d2 = new u$2({ width: a3.width, height: a3.height, pixels: [], pixelType: o2, mask: a3.maskData, statistics: [] })), p2++, d2.addData({ pixels: a3.pixelData, statistics: { minValue: a3.minValue, maxValue: a3.maxValue, noDataValue: a3.noDataValue } }), g2 - m2 > 10) {
      const e2 = String.fromCharCode.apply(null, new Uint8Array(r2, m2, 10));
      m2 = m2 + e2.indexOf("CntZ") > -1 ? e2.indexOf("CntZ") : 0;
    }
  }
  return d2;
}
function m(r2, a2) {
  if (!r$3)
    throw new s$2("rasterCoded:decode", "lerc decoder is not supported on big endian platform");
  let i2, n2, s2, o2 = 0, f2 = 0, h2 = 0;
  const c2 = r2.byteLength - 10, d2 = [], { width: p2, height: m2 } = a2;
  let g2 = 0;
  for (; f2 < c2; ) {
    var w2;
    if (n2 = u.decode(r2, { inputOffset: f2, maskData: i2, returnFileInfo: true }), p2 && m2 && (n2.width !== p2 || n2.height !== m2))
      throw new s$2("rasterCoded:decode", "lerc2 decoded result has width or height different from what's specified in options");
    if (f2 = n2.fileInfo.eofOffset, i2 = n2.maskData, o2 === 0 && (h2 = n2.fileInfo.numValidPixel, s2 = new u$2({ width: n2.width, height: n2.height, pixels: [], pixelType: n2.fileInfo.pixelType, mask: i2, statistics: [] })), n2.fileInfo.mask && n2.fileInfo.mask.numBytes > 0 && g2++, i2 && d2.push(i2), n2.dimCount > 1 && ((w2 = n2.pixelData) == null ? void 0 : w2.length) === n2.width * n2.height * n2.dimCount) {
      var y2, x2, k2, b2;
      n2.pixelData = n2.pixelData.slice(-n2.width * n2.height);
      const e2 = (y2 = n2.dimStats) == null || (x2 = y2.minValues) == null ? void 0 : x2[n2.dimCount - 1], t2 = (k2 = n2.dimStats) == null || (b2 = k2.maxValues) == null ? void 0 : b2[n2.dimCount - 1];
      e2 != null && t2 != null && (n2.minValue = e2, n2.maxValue = t2);
    }
    if (o2++, s2.addData({ pixels: n2.pixelData, statistics: { minValue: n2.minValue, maxValue: n2.maxValue } }), c2 - f2 > 10) {
      const e2 = String.fromCharCode.apply(null, new Uint8Array(r2, f2, 10));
      f2 += e2.indexOf("Lerc") > -1 ? e2.indexOf("Lerc") : 0;
    }
  }
  let I2 = 0, U2 = 0, v2 = 0;
  if (g2 > 1) {
    for (v2 = s2.width * s2.height, i2 = new Uint8Array(v2), i2.set(d2[0]), I2 = 1; I2 < d2.length; I2++) {
      const e2 = d2[I2];
      for (U2 = 0; U2 < v2; U2++)
        i2[U2] = i2[U2] & e2[U2];
    }
    for (h2 = 0, U2 = 0; U2 < v2; U2++)
      h2 += i2[U2];
    s2.mask = i2;
  }
  return s2.validPixelCount = h2, s2;
}
function g(e2) {
  const r2 = U$1(e2), a2 = new u$2({ width: r2.width, height: r2.height, pixels: r2.pixels, pixelType: r2.pixelType.toLowerCase(), mask: r2.mask, statistics: null });
  return a2.updateStatistics(), a2;
}
function w(e2, r2) {
  const a2 = D$1(e2, r2.customOptions), i2 = new u$2({ width: a2.width, height: a2.height, pixels: a2.pixels, pixelType: a2.pixelType.toLowerCase(), mask: a2.mask, statistics: null });
  return i2.updateStatistics(), i2;
}
function y(e2, r2, a2) {
  const { pixelTypeCtor: i2 } = v$1(r2.pixelType), n2 = (0, n$4.decode)(e2, { width: r2.width, height: r2.height, pixelType: i2, format: a2 }), s2 = new u$2({ width: r2.width, height: r2.height, pixels: n2.pixels, pixelType: r2.pixelType, mask: n2.mask, statistics: null });
  return s2.updateStatistics(), s2;
}
function x(e2) {
  const r2 = n$5.decode(e2), a2 = new u$2({ width: r2.width, height: r2.height, pixels: r2.pixels, pixelType: "U8", mask: r2.mask, statistics: null });
  return a2.updateStatistics(), a2;
}
function k(e2, r2) {
  const a2 = new Uint8Array(e2), i2 = new c(a2), { width: n2, height: s2 } = r2, o2 = n2 * s2, l2 = i2.decode();
  let f2, h2 = 0, u2 = 0;
  const d2 = new Uint8Array(o2);
  for (h2 = 0; h2 < o2; h2++)
    d2[h2] = l2[4 * h2 + 3];
  const p2 = new u$2({ width: n2, height: s2, pixels: [], pixelType: "U8", mask: d2, statistics: [] });
  for (h2 = 0; h2 < 3; h2++) {
    for (f2 = new Uint8Array(o2), u2 = 0; u2 < o2; u2++)
      f2[u2] = l2[4 * u2 + h2];
    p2.addData({ pixels: f2 });
  }
  return p2.updateStatistics(), p2;
}
function b(e2, r2, a2, n2) {
  return __async(this, null, function* () {
    const s2 = new i$4(), o2 = __spreadValues({ applyJpegMask: false, format: r2 }, a2), l2 = yield s2.decode(e2, o2, n2), f2 = new u$2(l2);
    return f2.updateStatistics(), f2;
  });
}
function I(t2) {
  if (t2 == null)
    throw new s$2("rasterCodec:decode", "parameter encodeddata is required.");
  const r2 = new Uint8Array(t2, 0, 10);
  let a2 = "";
  return r2[0] === 255 && r2[1] === 216 ? a2 = "jpg" : r2[0] === 137 && r2[1] === 80 && r2[2] === 78 && r2[3] === 71 ? a2 = "png" : r2[0] === 67 && r2[1] === 110 && r2[2] === 116 && r2[3] === 90 && r2[4] === 73 && r2[5] === 109 && r2[6] === 97 && r2[7] === 103 && r2[8] === 101 && r2[9] === 32 ? a2 = "lerc" : r2[0] === 76 && r2[1] === 101 && r2[2] === 114 && r2[3] === 99 && r2[4] === 50 && r2[5] === 32 ? a2 = "lerc2" : r2[0] === 73 && r2[1] === 73 && r2[2] === 42 && r2[3] === 0 || r2[0] === 77 && r2[1] === 77 && r2[2] === 0 && r2[3] === 42 || r2[0] === 73 && r2[1] === 73 && r2[2] === 43 && r2[3] === 0 || r2[0] === 77 && r2[1] === 77 && r2[2] === 0 && r2[3] === 43 ? a2 = "tiff" : r2[0] === 71 && r2[1] === 73 && r2[2] === 70 ? a2 = "gif" : r2[0] === 66 && r2[1] === 77 ? a2 = "bmp" : String.fromCharCode.apply(null, r2).toLowerCase().indexOf("error") > -1 && (a2 = "error"), a2;
}
function U(t2) {
  let r2 = null;
  switch (t2) {
    case "lerc":
      r2 = p$2;
      break;
    case "lerc2":
      r2 = m;
      break;
    case "jpg":
      r2 = x;
      break;
    case "png":
      r2 = k;
      break;
    case "bsq":
    case "bip":
      r2 = (e2, r3) => y(e2, r3, t2);
      break;
    case "tiff":
      r2 = g;
      break;
    case "error":
      r2 = () => {
        throw new s$2("rasterCodec:decode", "input data contains error");
      };
      break;
    default:
      r2 = () => {
        throw new s$2("rasterCodec:decode", "unsupported raster format");
      };
  }
  return r2;
}
function v$1(e2) {
  let t2 = null, r2 = null;
  switch (e2 ? e2.toLowerCase() : "f32") {
    case "u1":
    case "u2":
    case "u4":
    case "u8":
      r2 = 255, t2 = Uint8Array;
      break;
    case "u16":
      r2 = r2 || 65535, t2 = Uint16Array;
      break;
    case "u32":
      r2 = r2 || __pow(2, 32) - 1, t2 = Uint32Array;
      break;
    case "s8":
      r2 = r2 || -128, t2 = Int8Array;
      break;
    case "s16":
      r2 = r2 || -32768, t2 = Int16Array;
      break;
    case "s32":
      r2 = r2 || 0 - __pow(2, 31), t2 = Int32Array;
      break;
    default:
      t2 = Float32Array;
  }
  return { pixelTypeCtor: t2, noDataValue: r2 };
}
function A(e2, r2 = 1) {
  if (!e2)
    return;
  const { pixels: a2, width: i2, height: n2, mask: s2 } = e2;
  if (!a2 || a2.length === 0)
    return;
  const o2 = a2.length, l2 = i2 - 1, f2 = n2 - 1, h2 = [];
  let u2, c2, d2, p2, m2, g2, w2;
  const y2 = u$2.getPixelArrayConstructor(e2.pixelType);
  if (r2 === 0) {
    for (u2 = 0; u2 < o2; u2++) {
      for (m2 = a2[u2], g2 = new y2(l2 * f2), c2 = 0; c2 < f2; c2++)
        for (p2 = c2 * i2, d2 = 0; d2 < l2; d2++)
          g2[c2 * l2 + d2] = m2[p2 + d2];
      h2.push(g2);
    }
    if (s2)
      for (w2 = new Uint8Array(l2 * f2), c2 = 0; c2 < f2; c2++)
        for (p2 = c2 * i2, d2 = 0; d2 < l2; d2++)
          w2[c2 * l2 + d2] = s2[p2 + d2];
  } else {
    for (u2 = 0; u2 < o2; u2++) {
      for (m2 = a2[u2], g2 = new y2(l2 * f2), c2 = 0; c2 < f2; c2++)
        for (p2 = c2 * i2, d2 = 0; d2 < l2; d2++)
          g2[c2 * l2 + d2] = (m2[p2 + d2] + m2[p2 + d2 + 1] + m2[p2 + i2 + d2] + m2[p2 + i2 + d2 + 1]) / 4;
      h2.push(g2);
    }
    if (s2)
      for (w2 = new Uint8Array(l2 * f2), c2 = 0; c2 < f2; c2++)
        for (p2 = c2 * i2, d2 = 0; d2 < l2; d2++)
          w2[c2 * l2 + d2] = Math.min.apply(null, [s2[p2 + d2], s2[p2 + d2 + 1], s2[p2 + i2 + d2], s2[p2 + i2 + d2 + 1]]);
  }
  e2.width = l2, e2.height = f2, e2.mask = w2, e2.pixels = h2;
}
function D(e2) {
  let t2 = I(e2);
  return t2 === "lerc2" ? t2 = "lerc" : t2 === "error" && (t2 = ""), t2;
}
function T(t2, r2, a2) {
  return __async(this, null, function* () {
    if (t2 == null)
      throw new s$2("rasterCodec:decode", "missing encodeddata parameter.");
    if (r2 == null || r2.width == null || r2.height == null)
      throw new s$2("rasterCodec:decode", "requires width and height in options parameter.");
    let i2, n2, s2 = r2.format && r2.format.toLowerCase();
    return s2 === "tiff" && r2.customOptions ? w(t2, r2) : ((!s2 || s2 !== "bsq" && s2 !== "bip") && (s2 = I(t2)), r2.useCanvas && d$1.has(s2) ? n2 = yield b(t2, s2, r2, a2) : (i2 = U(s2), r2.isPoint && ((r2 = __spreadValues({}, r2)).width++, r2.height++), n2 = i2(t2, r2), r2.isPoint && A(n2)), n2);
  });
}
const l = [{ id: "aspect_predefined", type: "multipart", colorRamps: [{ fromColor: [190, 190, 190], toColor: [255, 45, 8] }, { fromColor: [255, 45, 8], toColor: [255, 181, 61] }, { fromColor: [255, 181, 61], toColor: [255, 254, 52] }, { fromColor: [255, 254, 52], toColor: [0, 251, 50] }, { fromColor: [0, 251, 50], toColor: [255, 254, 52] }, { fromColor: [0, 253, 255], toColor: [0, 181, 255] }, { fromColor: [0, 181, 255], toColor: [26, 35, 253] }, { fromColor: [26, 35, 253], toColor: [255, 57, 251] }, { fromColor: [255, 57, 251], toColor: [255, 45, 8] }] }, { id: "blackToWhite_predefined", fromColor: [0, 0, 0], toColor: [255, 255, 255] }, { id: "blueBright_predefined", fromColor: [204, 204, 255], toColor: [0, 0, 224] }, { id: "blueLightToDark_predefined", fromColor: [211, 229, 232], toColor: [46, 100, 140] }, { id: "blueGreenBright_predefined", fromColor: [203, 245, 234], toColor: [48, 207, 146] }, { id: "blueGreenLightToDark_predefined", fromColor: [216, 242, 237], toColor: [21, 79, 74] }, { id: "brownLightToDark_predefined", fromColor: [240, 236, 170], toColor: [102, 72, 48] }, { id: "brownToBlueGreenDivergingBright_predefined", type: "multipart", colorRamps: [{ fromColor: [156, 85, 31], toColor: [255, 255, 191] }, { fromColor: [255, 255, 191], toColor: [33, 130, 145] }] }, { id: "brownToBlueGreenDivergingDark_predefined", type: "multipart", colorRamps: [{ fromColor: [110, 70, 45], toColor: [204, 204, 102] }, { fromColor: [204, 204, 102], toColor: [48, 100, 102] }] }, { id: "coefficientBias_predefined", fromColor: [214, 214, 255], toColor: [0, 57, 148] }, { id: "coldToHotDiverging_predefined", type: "multipart", colorRamps: [{ fromColor: [69, 117, 181], toColor: [255, 255, 191] }, { fromColor: [255, 255, 191], toColor: [214, 47, 39] }] }, { id: "conditionNumber_predefined", type: "multipart", colorRamps: [{ fromColor: [0, 97, 0], toColor: [255, 255, 0] }, { fromColor: [255, 255, 0], toColor: [255, 34, 0] }] }, { id: "cyanToPurple_predefined", type: "multipart", colorRamps: [{ fromColor: [0, 245, 245], toColor: [0, 0, 245] }, { fromColor: [0, 0, 245], toColor: [245, 0, 245] }] }, { id: "cyanLightToBlueDark_predefined", type: "multipart", colorRamps: [{ fromColor: [182, 237, 240], toColor: [31, 131, 224] }, { fromColor: [31, 131, 224], toColor: [9, 9, 145] }] }, { id: "distance_predefined", fromColor: [255, 200, 0], toColor: [0, 0, 255] }, { id: "elevation1_predefined", type: "multipart", colorRamps: [{ fromColor: [175, 240, 233], toColor: [255, 255, 179] }, { fromColor: [255, 255, 179], toColor: [0, 128, 64] }, { fromColor: [0, 128, 64], toColor: [252, 186, 3] }, { fromColor: [252, 186, 3], toColor: [128, 0, 0] }, { fromColor: [120, 0, 0], toColor: [105, 48, 13] }, { fromColor: [105, 48, 13], toColor: [171, 171, 171] }, { fromColor: [171, 171, 171], toColor: [255, 252, 255] }] }, { id: "elevation2_predefined", type: "multipart", colorRamps: [{ fromColor: [118, 219, 211], toColor: [255, 255, 199] }, { fromColor: [255, 255, 199], toColor: [255, 255, 128] }, { fromColor: [255, 255, 128], toColor: [217, 194, 121] }, { fromColor: [217, 194, 121], toColor: [135, 96, 38] }, { fromColor: [135, 96, 38], toColor: [150, 150, 181] }, { fromColor: [150, 150, 181], toColor: [181, 150, 181] }, { fromColor: [181, 150, 181], toColor: [255, 252, 255] }] }, { id: "errors_predefined", fromColor: [255, 235, 214], toColor: [196, 10, 10] }, { id: "grayLightToDark_predefined", fromColor: [219, 219, 219], toColor: [69, 69, 69] }, { id: "greenBright_predefined", fromColor: [204, 255, 204], toColor: [14, 204, 14] }, { id: "greenLightToDark_predefined", fromColor: [220, 245, 233], toColor: [34, 102, 51] }, { id: "greenToBlue_predefined", type: "multipart", colorRamps: [{ fromColor: [32, 204, 16], toColor: [0, 242, 242] }, { fromColor: [0, 242, 242], toColor: [2, 33, 227] }] }, { id: "orangeBright_predefined", fromColor: [255, 235, 204], toColor: [240, 118, 5] }, { id: "orangeLightToDark_predefined", fromColor: [250, 233, 212], toColor: [171, 65, 36] }, { id: "partialSpectrum_predefined", type: "multipart", colorRamps: [{ fromColor: [242, 241, 162], toColor: [255, 255, 0] }, { fromColor: [255, 255, 0], toColor: [255, 0, 0] }, { fromColor: [252, 3, 69], toColor: [176, 7, 237] }, { fromColor: [176, 7, 237], toColor: [2, 29, 173] }] }, { id: "partialSpectrum1Diverging_predefined", type: "multipart", colorRamps: [{ fromColor: [135, 38, 38], toColor: [240, 149, 12] }, { fromColor: [240, 149, 12], toColor: [255, 255, 191] }, { fromColor: [255, 255, 191], toColor: [74, 80, 181] }, { fromColor: [74, 80, 181], toColor: [39, 32, 122] }] }, { id: "partialSpectrum2Diverging_predefined", type: "multipart", colorRamps: [{ fromColor: [115, 77, 42], toColor: [201, 137, 52] }, { fromColor: [201, 137, 52], toColor: [255, 255, 191] }, { fromColor: [255, 255, 191], toColor: [91, 63, 176] }, { fromColor: [91, 63, 176], toColor: [81, 13, 97] }] }, { id: "pinkToYellowGreenDivergingBright_predefined", type: "multipart", colorRamps: [{ fromColor: [158, 30, 113], toColor: [255, 255, 191] }, { fromColor: [255, 255, 191], toColor: [99, 110, 45] }] }, { id: "pinkToYellowGreenDivergingDark_predefined", type: "multipart", colorRamps: [{ fromColor: [97, 47, 73], toColor: [204, 204, 102] }, { fromColor: [204, 204, 102], toColor: [22, 59, 15] }] }, { id: "precipitation_predefined", type: "multipart", colorRamps: [{ fromColor: [194, 82, 60], toColor: [237, 161, 19] }, { fromColor: [237, 161, 19], toColor: [255, 255, 0] }, { fromColor: [255, 255, 0], toColor: [0, 219, 0] }, { fromColor: [0, 219, 0], toColor: [32, 153, 143] }, { fromColor: [32, 153, 143], toColor: [11, 44, 122] }] }, { id: "prediction_predefined", type: "multipart", colorRamps: [{ fromColor: [40, 146, 199], toColor: [250, 250, 100] }, { fromColor: [250, 250, 100], toColor: [232, 16, 20] }] }, { id: "purpleBright_predefined", fromColor: [255, 204, 255], toColor: [199, 0, 199] }, { id: "purpleToGreenDivergingBright_predefined", type: "multipart", colorRamps: [{ fromColor: [77, 32, 150], toColor: [255, 255, 191] }, { fromColor: [255, 255, 191], toColor: [20, 122, 11] }] }, { id: "purpleToGreenDivergingDark_predefined", type: "multipart", colorRamps: [{ fromColor: [67, 14, 89], toColor: [204, 204, 102] }, { fromColor: [204, 204, 102], toColor: [24, 79, 15] }] }, { id: "purpleBlueBright_predefined", fromColor: [223, 184, 230], toColor: [112, 12, 242] }, { id: "purpleBlueLightToDark_predefined", fromColor: [229, 213, 242], toColor: [93, 44, 112] }, { id: "purpleRedBright_predefined", fromColor: [255, 204, 225], toColor: [199, 0, 99] }, { id: "purpleRedLightToDark_predefined", fromColor: [250, 215, 246], toColor: [143, 17, 57] }, { id: "redBright_predefined", fromColor: [255, 204, 204], toColor: [219, 0, 0] }, { id: "redLightToDark_predefined", fromColor: [255, 224, 224], toColor: [143, 10, 10] }, { id: "redToBlueDivergingBright_predefined", type: "multipart", colorRamps: [{ fromColor: [196, 69, 57], toColor: [255, 255, 191] }, { fromColor: [255, 255, 191], toColor: [48, 95, 207] }] }, { id: "redToBlueDivergingDark_predefined", type: "multipart", colorRamps: [{ fromColor: [107, 13, 13], toColor: [204, 204, 102] }, { fromColor: [204, 204, 102], toColor: [13, 53, 97] }] }, { id: "redToGreen_predefined", type: "multipart", colorRamps: [{ fromColor: [245, 0, 0], toColor: [245, 245, 0] }, { fromColor: [245, 245, 0], toColor: [0, 245, 0] }] }, { id: "redToGreenDivergingBright_predefined", type: "multipart", colorRamps: [{ fromColor: [186, 20, 20], toColor: [255, 255, 191] }, { fromColor: [255, 255, 191], toColor: [54, 145, 33] }] }, { id: "redToGreenDivergingDark_predefined", type: "multipart", colorRamps: [{ fromColor: [97, 21, 13], toColor: [204, 204, 102] }, { fromColor: [204, 204, 102], toColor: [16, 69, 16] }] }, { id: "slope_predefined", type: "multipart", colorRamps: [{ fromColor: [56, 168, 0], toColor: [255, 255, 0] }, { fromColor: [255, 255, 0], toColor: [255, 0, 0] }] }, { id: "spectrumFullBright_predefined", type: "multipart", colorRamps: [{ fromColor: [255, 0, 0], toColor: [255, 255, 0] }, { fromColor: [255, 255, 0], toColor: [0, 255, 255] }, { fromColor: [0, 255, 255], toColor: [0, 0, 255] }] }, { id: "spectrumFullDark_predefined", type: "multipart", colorRamps: [{ fromColor: [153, 0, 0], toColor: [153, 153, 0] }, { fromColor: [153, 153, 0], toColor: [0, 153, 153] }, { fromColor: [0, 153, 153], toColor: [0, 0, 153] }] }, { id: "spectrumFullLight_predefined", type: "multipart", colorRamps: [{ fromColor: [255, 153, 153], toColor: [255, 255, 153] }, { fromColor: [255, 255, 153], toColor: [153, 255, 255] }, { fromColor: [153, 255, 255], toColor: [153, 153, 255] }] }, { id: "surface_predefined", type: "multipart", colorRamps: [{ fromColor: [112, 153, 89], toColor: [242, 238, 162] }, { fromColor: [242, 238, 162], toColor: [242, 206, 133] }, { fromColor: [242, 206, 133], toColor: [194, 140, 124] }, { fromColor: [194, 140, 124], toColor: [255, 242, 255] }] }, { id: "temperature_predefined", type: "multipart", colorRamps: [{ fromColor: [255, 252, 255], toColor: [255, 0, 255] }, { fromColor: [255, 0, 255], toColor: [0, 0, 255] }, { fromColor: [0, 0, 255], toColor: [0, 255, 255] }, { fromColor: [0, 255, 255], toColor: [0, 255, 0] }, { fromColor: [0, 255, 0], toColor: [255, 255, 0] }, { fromColor: [255, 255, 0], toColor: [255, 128, 0] }, { fromColor: [255, 128, 0], toColor: [128, 0, 0] }] }, { id: "whiteToBlack_predefined", fromColor: [255, 255, 255], toColor: [0, 0, 0] }, { id: "yellowToDarkRed_predefined", type: "multipart", colorRamps: [{ fromColor: [255, 255, 128], toColor: [242, 167, 46] }, { fromColor: [242, 167, 46], toColor: [107, 0, 0] }] }, { id: "yellowToGreenToDarkBlue_predefined", type: "multipart", colorRamps: [{ fromColor: [255, 255, 128], toColor: [56, 224, 9] }, { fromColor: [56, 224, 9], toColor: [26, 147, 171] }, { fromColor: [26, 147, 171], toColor: [12, 16, 120] }] }, { id: "yellowToRed_predefined", fromColor: [245, 245, 0], toColor: [255, 0, 0] }, { id: "yellowGreenBright_predefined", fromColor: [236, 252, 204], toColor: [157, 204, 16] }, { id: "yellowGreenLightToDark_predefined", fromColor: [215, 240, 175], toColor: [96, 107, 45] }], t = { aspect_predefined: "Aspect", blackToWhite_predefined: "Black to White", blueBright_predefined: "Blue Bright", blueLightToDark_predefined: "Blue Light to Dark", blueGreenBright_predefined: "Blue-Green Bright", blueGreenLightToDark_predefined: "Blue-Green Light to Dark", brownLightToDark_predefined: "Brown Light to Dark", brownToBlueGreenDivergingBright_predefined: "Brown to Blue Green Diverging, Bright", brownToBlueGreenDivergingDark_predefined: "Brown to Blue Green Diverging, Dark", coefficientBias_predefined: "Coefficient Bias", coldToHotDiverging_predefined: "Cold to Hot Diverging", conditionNumber_predefined: "Condition Number", cyanToPurple_predefined: "Cyan to Purple", cyanLightToBlueDark_predefined: "Cyan-Light to Blue-Dark", distance_predefined: "Distance", elevation1_predefined: "Elevation #1", elevation2_predefined: "Elevation #2", errors_predefined: "Errors", grayLightToDark_predefined: "Gray Light to Dark", greenBright_predefined: "Green Bright", greenLightToDark_predefined: "Green Light to Dark", greenToBlue_predefined: "Green to Blue", orangeBright_predefined: "Orange Bright", orangeLightToDark_predefined: "Orange Light to Dark", partialSpectrum_predefined: "Partial Spectrum", partialSpectrum1Diverging_predefined: "Partial Spectrum 1 Diverging", partialSpectrum2Diverging_predefined: "Partial Spectrum 2 Diverging", pinkToYellowGreenDivergingBright_predefined: "Pink to YellowGreen Diverging, Bright", pinkToYellowGreenDivergingDark_predefined: "Pink to YellowGreen Diverging, Dark", precipitation_predefined: "Precipitation", prediction_predefined: "Prediction", purpleBright_predefined: "Purple Bright", purpleToGreenDivergingBright_predefined: "Purple to Green Diverging, Bright", purpleToGreenDivergingDark_predefined: "Purple to Green Diverging, Dark", purpleBlueBright_predefined: "Purple-Blue Bright", purpleBlueLightToDark_predefined: "Purple-Blue Light to Dark", purpleRedBright_predefined: "Purple-Red Bright", purpleRedLightToDark_predefined: "Purple-Red Light to Dark", redBright_predefined: "Red Bright", redLightToDark_predefined: "Red Light to Dark", redToBlueDivergingBright_predefined: "Red to Blue Diverging, Bright", redToBlueDivergingDark_predefined: "Red to Blue Diverging, Dark", redToGreen_predefined: "Red to Green", redToGreenDivergingBright_predefined: "Red to Green Diverging, Bright", redToGreenDivergingDark_predefined: "Red to Green Diverging, Dark", slope_predefined: "Slope", spectrumFullBright_predefined: "Spectrum-Full Bright", spectrumFullDark_predefined: "Spectrum-Full Dark", spectrumFullLight_predefined: "Spectrum-Full Light", surface_predefined: "Surface", temperature_predefined: "Temperature", whiteToBlack_predefined: "White to Black", yellowToDarkRed_predefined: "Yellow to Dark Red", yellowToGreenToDarkBlue_predefined: "Yellow to Green to Dark Blue", yellowToRed_predefined: "Yellow to Red", yellowGreenBright_predefined: "Yellow-Green Bright", yellowGreenLightToDark_predefined: "Yellow-Green Light to Dark" };
function i$1(o2, r2) {
  if (!o2 || !r2 || o2.length !== r2.length)
    return false;
  for (let e2 = 0; e2 < o2.length; e2++)
    if (o2[e2] > r2[e2] + 2 || o2[e2] < r2[e2] - 2)
      return false;
  return true;
}
function d(o2, l2, t2) {
  const i2 = z(o2), d2 = z(l2), p2 = { l: i2.l * (1 - t2) + t2 * d2.l, a: i2.a * (1 - t2) + t2 * d2.a, b: i2.b * (1 - t2) + t2 * d2.b };
  return p$4(p2);
}
function p$1(r2, e2) {
  if (!r2)
    return;
  const t2 = e2 || l;
  let d2, p2 = null;
  return r2.type === "algorithmic" ? t2.some((o2) => {
    if (i$1(r2.fromColor.toRgb(), o2.fromColor) && i$1(r2.toColor.toRgb(), o2.toColor))
      return p2 = o2.id, true;
  }) : r2.type === "multipart" && t2.some((e3) => {
    if (r2.colorRamps && e3.colorRamps && r2.colorRamps.length === e3.colorRamps.length && (d2 = r2.colorRamps, !e3.colorRamps.some((r3, e4) => {
      if (!i$1(d2[e4].fromColor.toRgb(), new o$3(r3.fromColor).toRgb()) || !i$1(d2[e4].toColor.toRgb(), new o$3(r3.toColor).toRgb()))
        return true;
    }))) {
      if (p2)
        return true;
      p2 = e3.id;
    }
  }), p2;
}
function n$1(o2) {
  const r2 = p$1(o2);
  return r2 ? t[r2] : null;
}
function f(o2, r2, e2 = false) {
  if (!o2 || !r2 || r2 < 1)
    return;
  const l2 = "toJSON" in o2 ? o2.toJSON() : o2, t2 = l2.type === "multipart" ? l2.colorRamps.length : 1, i2 = [], p2 = [];
  let n2, f2, C2, m2, a2, g2 = 0;
  if (r2 === 1)
    return n2 = l2.type === "multipart" ? l2.colorRamps[0].fromColor : l2.fromColor, p2.push([0].concat(n2)), p2;
  for (let d2 = 0; d2 < t2; d2++)
    i2[d2] = { start: null, end: null }, i2[d2].start = g2, i2[d2].end = g2 + 1 / t2, g2 = i2[d2].end;
  for (let u2 = 0; u2 < r2; u2++)
    m2 = u2 / (r2 - 1), i2.forEach((o3, i3) => {
      if (m2 >= o3.start && (m2 < o3.end || u2 === r2 - 1 && i3 === t2 - 1)) {
        a2 = (m2 - o3.start) / (o3.end - o3.start), l2.type === "multipart" ? (n2 = l2.colorRamps[i3].fromColor, f2 = l2.colorRamps[i3].toColor) : (n2 = l2.fromColor, f2 = l2.toColor), u2 === 0 ? p2.push([u2].concat(n2.slice(0, 3))) : u2 === r2 - 1 ? p2.push([u2].concat(f2.slice(0, 3))) : (C2 = d({ r: n2[0], g: n2[1], b: n2[2] }, { r: f2[0], g: f2[1], b: f2[2] }, a2), p2.push([u2, C2.r, C2.g, C2.b]));
        const t3 = n2[3] != null ? n2[3] > 1 ? n2[3] / 255 : n2[3] : 1, g3 = f2[3] != null ? f2[3] > 1 ? f2[3] / 255 : f2[3] : 1;
        e2 && p2[u2].push(Math.min(255, Math.round(255 * (t3 * (1 - a2) + g3 * a2))));
      }
    });
  return p2;
}
let s$1 = class extends a {
  constructor(t2) {
    super(t2), this.attributeTable = null, this.bandCount = null, this.colormap = null, this.extent = null, this.format = void 0, this.height = null, this.width = null, this.histograms = null, this.keyProperties = {}, this.multidimensionalInfo = null, this.noDataValue = null, this.pixelSize = null, this.pixelType = null, this.isPseudoSpatialReference = false, this.spatialReference = null, this.statistics = null, this.storageInfo = null, this.transform = null;
  }
  get dataType() {
    const t2 = this.keyProperties && this.keyProperties.DataType;
    return t2 ? t2.toLowerCase() : "generic";
  }
  get nativeExtent() {
    return this._get("nativeExtent") || this.extent;
  }
  set nativeExtent(t2) {
    t2 && this._set("nativeExtent", t2);
  }
  get nativePixelSize() {
    if (this.transform == null)
      return this.pixelSize;
    const t2 = this.nativeExtent;
    return { x: t2.width / this.width, y: t2.height / this.height };
  }
};
e$5([y$2({ json: { write: true } })], s$1.prototype, "attributeTable", void 0), e$5([y$2({ json: { write: true } })], s$1.prototype, "bandCount", void 0), e$5([y$2({ json: { write: true } })], s$1.prototype, "colormap", void 0), e$5([y$2({ type: String, readOnly: true })], s$1.prototype, "dataType", null), e$5([y$2({ type: M$1, json: { write: true } })], s$1.prototype, "extent", void 0), e$5([y$2({ type: M$1, json: { write: true } })], s$1.prototype, "nativeExtent", null), e$5([y$2({ json: { write: true } })], s$1.prototype, "nativePixelSize", null), e$5([y$2({ json: { write: true } })], s$1.prototype, "format", void 0), e$5([y$2({ json: { write: true } })], s$1.prototype, "height", void 0), e$5([y$2({ json: { write: true } })], s$1.prototype, "width", void 0), e$5([y$2({ json: { write: true } })], s$1.prototype, "histograms", void 0), e$5([y$2({ json: { write: true } })], s$1.prototype, "keyProperties", void 0), e$5([y$2({ json: { write: true } })], s$1.prototype, "multidimensionalInfo", void 0), e$5([y$2()], s$1.prototype, "noDataValue", void 0), e$5([y$2({ json: { write: true } })], s$1.prototype, "pixelSize", void 0), e$5([y$2({ json: { write: true } })], s$1.prototype, "pixelType", void 0), e$5([y$2()], s$1.prototype, "isPseudoSpatialReference", void 0), e$5([y$2({ json: { write: true } })], s$1.prototype, "spatialReference", void 0), e$5([y$2({ json: { write: true } })], s$1.prototype, "statistics", void 0), e$5([y$2({ json: { write: true } })], s$1.prototype, "storageInfo", void 0), e$5([y$2({ json: { write: true } })], s$1.prototype, "transform", void 0), s$1 = e$5([i$5("esri.layers.support.RasterInfo")], s$1);
var p = s$1;
const e = function(t2) {
  return t2 && t2.declaredClass === "esri.layers.support.PixelBlock" && t2.pixels && t2.pixels.length > 0;
};
function i(t2) {
  let { altitude: e2, azimuth: i2 } = t2;
  const { hillshadeType: s2, pixelSizePower: n2, pixelSizeFactor: l2, scalingType: a2, isGCS: o2, resolution: r2 } = t2, c2 = s2 === "multi-directional" ? 2 * t2.zFactor : t2.zFactor, { x: h2, y: u2 } = r2;
  let f2 = c2 / (8 * h2), d2 = c2 / (8 * u2);
  if (o2 && c2 > 1e-3 && (f2 /= 111e3, d2 /= 111e3), a2 === "adjusted")
    if (o2) {
      const t3 = 111e3 * h2, e3 = 111e3 * u2;
      f2 = (c2 + __pow(t3, n2) * l2) / (8 * t3), d2 = (c2 + __pow(e3, n2) * l2) / (8 * e3);
    } else
      f2 = (c2 + __pow(h2, n2) * l2) / (8 * h2), d2 = (c2 + __pow(u2, n2) * l2) / (8 * u2);
  let p2 = (90 - e2) * Math.PI / 180, x2 = Math.cos(p2), m2 = (360 - i2 + 90) * Math.PI / 180, M2 = Math.sin(p2) * Math.cos(m2), A2 = Math.sin(p2) * Math.sin(m2);
  const w2 = [315, 270, 225, 360, 180, 0], y2 = [60, 60, 60, 60, 60, 90], g2 = new Float32Array([3, 5, 3, 2, 1, 4]), Z = g2.reduce((t3, e3) => t3 + e3), k2 = g2.map((t3) => t3 / Z), P = s2 === "multi-directional" ? w2.length : 1, C2 = new Float32Array(6), F = new Float32Array(6), b2 = new Float32Array(6);
  if (s2 === "multi-directional")
    for (let z2 = 0; z2 < P; z2++)
      e2 = y2[z2], i2 = w2[z2], p2 = (90 - e2) * Math.PI / 180, x2 = Math.cos(p2), m2 = (360 - i2 + 90) * Math.PI / 180, M2 = Math.sin(p2) * Math.cos(m2), A2 = Math.sin(p2) * Math.sin(m2), C2[z2] = x2, F[z2] = M2, b2[z2] = A2;
  else
    C2.fill(x2), F.fill(M2), b2.fill(A2);
  return { resolution: r2, factor: [f2, d2], sinZcosA: M2, sinZsinA: A2, cosZ: x2, sinZcosAs: F, sinZsinAs: b2, cosZs: C2, weights: k2, hillshadeType: ["traditional", "multi-directional"].indexOf(s2) };
}
function s(s2, n2) {
  if (!e(s2))
    return s2;
  const { width: l2, height: a2, mask: o2 } = s2, r2 = new Uint8Array(l2 * a2);
  o2 && r2.set(o2);
  const { factor: c2, sinZcosA: h2, sinZsinA: u2, cosZ: f2, sinZcosAs: d2, sinZsinAs: p2, cosZs: x2, weights: m2 } = i(n2), [M2, A2] = c2, { hillshadeType: w2 } = n2, y2 = s2.pixels[0], g2 = new Uint8Array(l2 * a2);
  let Z, k2, P, C2, F, b2, z2, T2;
  const U2 = 1;
  for (let t2 = U2; t2 < a2 - U2; t2++) {
    const e2 = t2 * l2;
    for (let t3 = U2; t3 < l2 - U2; t3++) {
      if (o2 && !o2[e2 + t3]) {
        g2[e2 + t3] = 0;
        continue;
      }
      let i2 = 8;
      if (o2 && (i2 = o2[e2 - l2 + t3 - 1] + o2[e2 - l2 + t3] + o2[e2 - l2 + t3 + 1] + o2[e2 + t3 - 1] + o2[e2 + t3 + 1] + o2[e2 + l2 + t3 - 1] + o2[e2 + l2 + t3] + o2[e2 + l2 + t3 + 1], i2 < 7)) {
        g2[e2 + t3] = 0, r2[e2 + t3] = 0;
        continue;
      }
      i2 === 7 ? (Z = o2[e2 - l2 + t3 - 1] ? y2[e2 - l2 + t3 - 1] : y2[e2 + t3], k2 = o2[e2 - l2 + t3] ? y2[e2 - l2 + t3] : y2[e2 + t3], P = o2[e2 - l2 + t3 + 1] ? y2[e2 - l2 + t3 + 1] : y2[e2 + t3], C2 = o2[e2 + t3 - 1] ? y2[e2 + t3 - 1] : y2[e2 + t3], F = o2[e2 + t3 + 1] ? y2[e2 + t3 + 1] : y2[e2 + t3], b2 = o2[e2 + l2 + t3 - 1] ? y2[e2 + l2 + t3 - 1] : y2[e2 + t3], z2 = o2[e2 + l2 + t3] ? y2[e2 + l2 + t3] : y2[e2 + t3], T2 = o2[e2 + l2 + t3 + 1] ? y2[e2 + l2 + t3 + 1] : y2[e2 + t3]) : (Z = y2[e2 - l2 + t3 - 1], k2 = y2[e2 - l2 + t3], P = y2[e2 - l2 + t3 + 1], C2 = y2[e2 + t3 - 1], F = y2[e2 + t3 + 1], b2 = y2[e2 + l2 + t3 - 1], z2 = y2[e2 + l2 + t3], T2 = y2[e2 + l2 + t3 + 1]);
      const s3 = (P + F + F + T2 - (Z + C2 + C2 + b2)) * M2, n3 = (b2 + z2 + z2 + T2 - (Z + k2 + k2 + P)) * A2, a3 = Math.sqrt(1 + s3 * s3 + n3 * n3);
      let c3 = 0;
      if (w2 === "traditional") {
        let t4 = 255 * (f2 + u2 * n3 - h2 * s3) / a3;
        t4 < 0 && (t4 = 0), c3 = t4;
      } else {
        const t4 = p2.length;
        for (let e3 = 0; e3 < t4; e3++) {
          let t5 = 255 * (x2[e3] + p2[e3] * n3 - d2[e3] * s3) / a3;
          t5 < 0 && (t5 = 0), c3 += t5 * m2[e3];
        }
      }
      g2[e2 + t3] = 255 & c3;
    }
  }
  for (let t2 = 0; t2 < a2; t2++)
    g2[t2 * l2] = g2[t2 * l2 + 1], g2[(t2 + 1) * l2 - 1] = g2[(t2 + 1) * l2 - 2];
  for (let t2 = 1; t2 < l2 - 1; t2++)
    g2[t2] = g2[t2 + l2], g2[t2 + (a2 - 1) * l2] = g2[t2 + (a2 - 2) * l2];
  return new u$2({ width: l2, height: a2, pixels: [g2], mask: o2 ? r2 : null, pixelType: "u8", validPixelCount: s2.validPixelCount, statistics: [{ minValue: 0, maxValue: 255 }] });
}
function n(t2, i2, s2, n2) {
  if (!e(t2) || !e(i2))
    return;
  const { min: l2, max: a2 } = n2, o2 = t2.pixels[0], { pixels: r2, mask: c2 } = i2, h2 = r2[0], u2 = 255.00001 / (a2 - l2), f2 = new Uint8ClampedArray(h2.length), d2 = new Uint8ClampedArray(h2.length), p2 = new Uint8ClampedArray(h2.length), x2 = s2.length - 1;
  for (let e2 = 0; e2 < h2.length; e2++) {
    if (c2 && c2[e2] === 0)
      continue;
    const t3 = Math.floor((h2[e2] - l2) * u2), [i3, n3] = s2[t3 < 0 ? 0 : t3 > x2 ? x2 : t3], a3 = o2[e2], r3 = a3 * n3, m2 = r3 * (1 - Math.abs(i3 % 2 - 1)), M2 = a3 - r3;
    switch (Math.floor(i3)) {
      case 0:
        f2[e2] = r3 + M2, d2[e2] = m2 + M2, p2[e2] = M2;
        break;
      case 1:
        f2[e2] = m2 + M2, d2[e2] = r3 + M2, p2[e2] = M2;
        break;
      case 2:
        f2[e2] = M2, d2[e2] = r3 + M2, p2[e2] = m2 + M2;
        break;
      case 3:
        f2[e2] = M2, d2[e2] = m2 + M2, p2[e2] = r3 + M2;
        break;
      case 4:
        f2[e2] = m2 + M2, d2[e2] = M2, p2[e2] = r3 + M2;
        break;
      case 5:
      case 6:
        f2[e2] = r3 + M2, d2[e2] = M2, p2[e2] = m2 + M2;
    }
  }
  t2.pixels = [f2, d2, p2], t2.updateStatistics();
}
const C = n$7.getLogger("esri.renderers.support.RasterSymbolizer");
function O(e2, t2) {
  const { attributeTable: s2, bandCount: o2 } = e2;
  if (!r$5(s2) || o2 > 1)
    return false;
  if (t2) {
    if (s2.fields.find((e3) => e3.name.toLowerCase() === t2.toLowerCase()) == null)
      return false;
  }
  return true;
}
function L(e2) {
  return e2.dataType === "elevation";
}
function R(e2) {
  const { bandCount: t2, colormap: s2 } = e2;
  return r$5(s2) && s2.length && t2 === 1;
}
const v = { u1: [0, 1], u2: [0, 3], u4: [0, 15], u8: [0, 255], s8: [-128, 127], u16: [0, 65535], s16: [-32768, 32767], u32: [0, 4294967295], s32: [-2147483648, 2147483647], f32: [-34e38, 34e38], f64: [-Number.MAX_VALUE, Number.MAX_VALUE] };
let _ = class extends a {
  constructor(e2) {
    super(e2);
  }
  bind() {
    const { rendererJSON: e2 } = this;
    if (!e2)
      return false;
    let t2;
    switch (this.lookup = { rendererJSON: {} }, e2.type) {
      case "uniqueValue":
        t2 = this._updateUVRenderer(e2);
        break;
      case "rasterColormap":
        t2 = this._updateColormapRenderer(e2);
        break;
      case "rasterStretch":
        t2 = this._updateStretchRenderer(e2);
        break;
      case "classBreaks":
        t2 = this._updateClassBreaksRenderer(e2);
        break;
      case "rasterShadedRelief":
        t2 = this._updateShadedReliefRenderer(e2);
    }
    return t2;
  }
  symbolize(e2) {
    let t2 = e2 && e2.pixelBlock;
    if (!this.isValidPixelBlock(t2))
      return t2;
    if (e2.simpleStretchParams && this.rendererJSON.type === "rasterStretch")
      return this.simpleStretch(t2, e2.simpleStretchParams);
    try {
      let r2;
      switch (t2.pixels.length > 3 && (t2 = n$8(t2, [0, 1, 2])), this.rendererJSON.type) {
        case "uniqueValue":
        case "rasterColormap":
          r2 = this._symbolize_colormap(t2);
          break;
        case "classBreaks":
          r2 = this._symbolize_classBreaks(t2);
          break;
        case "rasterStretch":
          r2 = this._symbolize_stretch(t2, e2.bandIds);
          break;
        case "rasterShadedRelief": {
          const { extent: s2 } = e2, o2 = s2.spatialReference.isGeographic, i2 = { x: (s2.xmax - s2.xmin) / t2.width, y: (s2.ymax - s2.ymin) / t2.height };
          r2 = this._symbolize_shadedRelief(t2, { isGCS: o2, resolution: i2 });
          break;
        }
      }
      return r2;
    } catch (r2) {
      return C.error("symbolize", r2.message), t2;
    }
  }
  simpleStretch(e2, t2) {
    if (!this.isValidPixelBlock(e2))
      return e2;
    try {
      return e2.pixels.length > 3 && (e2 = n$8(e2, [0, 1, 2])), h$1(e2, t2);
    } catch (r2) {
      return C.error("symbolize", r2.message), e2;
    }
  }
  generateWebGLParameters(e2) {
    if (["uniqueValue", "rasterColormap", "classBreaks"].indexOf(this.rendererJSON.type) > -1) {
      var t2;
      const { indexedColormap: e3, offset: r3 } = ((t2 = this.lookup) == null ? void 0 : t2.colormapLut) || {};
      return { colormap: e3, colormapOffset: r3, type: "lut" };
    }
    const { pixelBlock: r2, isGCS: s2, resolution: o2, bandIds: i2 } = e2, { rendererJSON: a2 } = this;
    return a2.type === "rasterStretch" ? this.generateStretchWebGLParams(r2, a2, i2) : a2.type === "rasterShadedRelief" ? this.generateShadedReliefWebGLParams(a2, s2, o2) : null;
  }
  _isLUTChanged(e2) {
    if (!this.lookup || !this.lookup.rendererJSON)
      return true;
    if ("colorRamp" in this.rendererJSON) {
      const t2 = this.rendererJSON.colorRamp;
      if (e2)
        return JSON.stringify(t2) !== JSON.stringify(this.lookup.rendererJSON.colorRamp);
      __spreadValues({}, this.rendererJSON);
      __spreadValues({}, this.lookup.rendererJSON);
      return JSON.stringify(this.rendererJSON) !== JSON.stringify(this.lookup.rendererJSON);
    }
    return JSON.stringify(this.rendererJSON) !== JSON.stringify(this.lookup.rendererJSON);
  }
  _symbolize_colormap(e2) {
    if (this._isLUTChanged()) {
      if (!this.bind())
        return e2;
    }
    return l$2(e2, this.lookup.colormapLut);
  }
  _symbolize_classBreaks(e2) {
    const t2 = this.rasterInfo.pixelType, r2 = ["u8", "u16", "s8", "s16"].indexOf(t2) > -1;
    let s2;
    if (this._isLUTChanged()) {
      if (!this.bind())
        return e2;
    }
    return s2 = r2 ? l$2(e2, this.lookup.colormapLut) : c$2(e2, this.lookup.remapLut), s2;
  }
  _symbolize_stretch(e2, t2) {
    const { pixelType: r2, bandCount: s2 } = this.rasterInfo, o2 = this.rendererJSON, i2 = ["u8", "u16", "s8", "s16"].indexOf(r2) > -1;
    let a2, n2;
    const { dra: l2 } = o2, u2 = o2.useGamma ? o2.gamma : null;
    if (o2.stretchType === "histogramEqualization") {
      const r3 = l2 ? null : this.lookup.histogramLut, s3 = this.getStretchCutoff(o2, e2, t2, !r3), i3 = h$1(e2, __spreadProps(__spreadValues({}, s3), { gamma: u2 }));
      n2 = u$3(i3, { lut: l2 ? s3.histogramLut : r3, offset: 0 });
    } else if (i2) {
      var c2;
      if (l2) {
        const s3 = this.getStretchCutoff(o2, e2, t2);
        a2 = s$3(__spreadProps(__spreadValues({ pixelType: r2 }, s3), { gamma: u2 }));
      } else if (this._isLUTChanged()) {
        if (!this.bind())
          return e2;
        a2 = this.lookup ? this.lookup.stretchLut : null;
      } else
        a2 = this.lookup ? this.lookup.stretchLut : null;
      if (!a2)
        return e2;
      s2 > 1 && (t2 == null ? void 0 : t2.length) === e2.pixels.length && ((c2 = a2) == null ? void 0 : c2.lut.length) === s2 && (a2 = { lut: t2.map((e3) => a2.lut[e3]), offset: a2.offset }), n2 = u$3(e2, a2);
    } else {
      const r3 = this.getStretchCutoff(o2, e2, t2);
      n2 = h$1(e2, __spreadProps(__spreadValues({}, r3), { gamma: u2 }));
    }
    if (o2.colorRamp) {
      if (this._isLUTChanged(true)) {
        if (!this.bind())
          return e2;
      }
      n2 = l$2(n2, this.lookup.colormapLut);
    }
    return n2;
  }
  _symbolize_shadedRelief(e2, r2) {
    var s$12, o2;
    const i2 = this.rendererJSON, a2 = __spreadValues(__spreadValues({}, i2), r2), n$12 = s(e2, a2);
    if (!i2.colorRamp)
      return n$12;
    let l2;
    if (this._isLUTChanged(true)) {
      if (!this.bind())
        return n$12;
      l2 = this.lookup ? this.lookup.hsvMap : null;
    } else
      l2 = this.lookup ? this.lookup.hsvMap : null;
    if (!l2)
      return n$12;
    const u2 = (s$12 = (o2 = e$6(this.rasterInfo.statistics)) == null ? void 0 : o2[0]) != null ? s$12 : { min: 0, max: 8e3 };
    return n(n$12, e2, l2, u2), n$12;
  }
  _updateUVRenderer(e2) {
    const { bandCount: t2, attributeTable: r2, statistics: s2, pixelType: o2 } = this.rasterInfo, i2 = e2.field1;
    if (!i2)
      return false;
    const a2 = ["u8", "s8"].indexOf(o2) > -1 && s2 && s2[0].min != null && s2[0].max != null;
    if (!(O(this.rasterInfo, i2) || t2 === 1 && a2))
      return false;
    const n2 = [];
    if (r2) {
      const t3 = r2.fields.filter((e3) => e3.name.toLowerCase() === "value")[0];
      if (!t3)
        return false;
      r2.features.forEach((r3) => {
        var s3;
        const o3 = e2.uniqueValueInfos.filter((e3) => String(e3.value) === String(r3.attributes[i2]))[0], a3 = o3 == null || (s3 = o3.symbol) == null ? void 0 : s3.color;
        a3 && n2.push([r3.attributes[t3.name]].concat(a3));
      });
    } else {
      if (i2.toLowerCase() !== "value")
        return false;
      e2.uniqueValueInfos.forEach((e3) => {
        var t3;
        const r3 = e3 == null || (t3 = e3.symbol) == null ? void 0 : t3.color;
        r3 && n2.push([parseInt("" + e3.value, 10)].concat(r3));
      });
    }
    if (n2.length === 0)
      return false;
    const l2 = i$6({ colormap: n2 });
    return this.lookup = { rendererJSON: e2, colormapLut: l2 }, this.canRenderInWebGL = true, true;
  }
  _updateColormapRenderer(e2) {
    if (!R(this.rasterInfo))
      return false;
    const t2 = e2.colormapInfos.map((e3) => [e3.value].concat(e3.color)).sort((e3, t3) => e3[0] - t3[0]);
    if (!t2 || t2.length === 0)
      return false;
    const r2 = i$6({ colormap: t2 });
    return this.lookup = { rendererJSON: e2, colormapLut: r2 }, this.canRenderInWebGL = true, true;
  }
  _updateShadedReliefRenderer(e2) {
    if (!L(this.rasterInfo))
      return false;
    if (e2.colorRamp) {
      const t2 = f(e2.colorRamp, 256, true), r2 = i$6({ colormap: t2 }), s2 = [], o2 = r2.indexedColormap;
      for (let e3 = 0; e3 < o2.length; e3 += 4) {
        const t3 = y$3({ r: o2[e3], g: o2[e3 + 1], b: o2[e3 + 2] });
        s2.push([t3.h / 60, t3.s / 100, 255 * t3.v / 100]);
      }
      this.lookup = { rendererJSON: e2, colormapLut: r2, hsvMap: s2 };
    } else
      this.lookup = null;
    return this.canRenderInWebGL = true, true;
  }
  _updateClassBreaksRenderer(e2) {
    const t2 = this.rasterInfo.pixelType, r2 = ["u8", "u16", "s8", "s16"].indexOf(t2) > -1, s2 = e2.classBreakInfos;
    if (s2 == null || !s2.length)
      return false;
    const o2 = s2.sort((e3, t3) => e3.classMaxValue - t3.classMaxValue), i2 = o2[o2.length - 1];
    let a2 = e2.minValue;
    if (!r2) {
      const t3 = [];
      for (let e3 = 0; e3 < o2.length; e3++) {
        var n2;
        t3.push({ value: (n2 = o2[e3].classMinValue) != null ? n2 : a2, mappedColor: o2[e3].symbol.color }), a2 = o2[e3].classMaxValue;
      }
      return t3.push({ value: i2.classMaxValue, mappedColor: i2.symbol.color }), this.lookup = { rendererJSON: e2, remapLut: t3 }, this.canRenderInWebGL = false, true;
    }
    const l2 = [];
    a2 = Math.floor(e2.minValue);
    for (let c2 = 0; c2 < o2.length; c2++) {
      const e3 = o2[c2];
      for (let t3 = a2; t3 < e3.classMaxValue; t3++)
        l2.push([t3].concat(e3.symbol.color));
      a2 = Math.ceil(e3.classMaxValue);
    }
    i2.classMaxValue === a2 && l2.push([i2.classMaxValue].concat(i2.symbol.color));
    const u2 = i$6({ colormap: l2, fillUnspecified: false });
    return this.lookup = { rendererJSON: e2, colormapLut: u2 }, this.canRenderInWebGL = true, true;
  }
  _isHistogramRequired(e2) {
    return e2 === "percentClip" || e2 === "histogramEqualization";
  }
  _updateStretchRenderer(e2) {
    let { stretchType: r2, dra: s2 } = e2;
    if (!(r2 === "none" || e2.statistics || this.rasterInfo.statistics || s2))
      return false;
    const o2 = e$6(e2.histograms || this.rasterInfo.histograms);
    !this._isHistogramRequired(e2.stretchType) || o2 != null && o2.length || s2 || (r2 = "minMax");
    const { gamma: i2, useGamma: a2, colorRamp: n2 } = e2, u2 = this.rasterInfo.pixelType, c2 = !s2 && ["u8", "u16", "s8", "s16"].indexOf(u2) > -1;
    if (r2 === "histogramEqualization") {
      const t2 = o2.map((e3) => f$2(e3));
      this.lookup = { rendererJSON: e2, histogramLut: t2 };
    } else if (c2) {
      const t2 = this.getStretchCutoff(e2), r3 = s$3(__spreadProps(__spreadValues({ pixelType: u2 }, t2), { gamma: a2 ? i2 : null }));
      this.lookup = { rendererJSON: e2, stretchLut: r3 };
    }
    if (n2) {
      const t2 = f(n2, 256, true);
      this.lookup || (this.lookup = { rendererJSON: e2 }), this.lookup.colormapLut = i$6({ colormap: t2 }), this.lookup.rendererJSON = e2;
    }
    return this.canRenderInWebGL = true, true;
  }
  getStretchCutoff(e2, r2, s2, o2) {
    var i2;
    let a2, n2, l2 = e2.stretchType;
    var u2;
    if (e2.dra)
      if (l2 === "minMax" && r2.statistics)
        a2 = r2.statistics.map((e3) => [e3.minValue, e3.maxValue, 0, 0]);
      else {
        const e3 = r$6(r2);
        a2 = e3.statistics, n2 = e3.histograms;
      }
    else
      a2 = ((u2 = e2.statistics) == null ? void 0 : u2.length) > 0 ? e2.statistics : e$6(this.rasterInfo.statistics), n2 = e2.histograms || e$6(this.rasterInfo.histograms);
    !this._isHistogramRequired(l2) || (i2 = n2) != null && i2.length || (l2 = "minMax");
    const c2 = a2 || n2 ? (a2 || n2).length : this.rasterInfo.bandCount, p2 = [], h2 = [];
    let m2, f2, d2, g2, S2, y2, k2, C2, O2, L2, R2, _2;
    switch (a2 && !Array.isArray(a2[0]) && (a2 = a2.map((e3) => [e3.min, e3.max, e3.avg, e3.stddev])), l2) {
      case "none":
        {
          const e3 = v[this.rasterInfo.pixelType] || v.f32;
          for (C2 = 0; C2 < c2; C2++)
            p2[C2] = e3[0], h2[C2] = e3[1];
        }
        break;
      case "minMax":
        for (C2 = 0; C2 < c2; C2++)
          p2[C2] = a2[C2][0], h2[C2] = a2[C2][1];
        break;
      case "standardDeviation":
        for (C2 = 0; C2 < c2; C2++)
          p2[C2] = a2[C2][2] - e2.numberOfStandardDeviations * a2[C2][3], h2[C2] = a2[C2][2] + e2.numberOfStandardDeviations * a2[C2][3], p2[C2] < a2[C2][0] && (p2[C2] = a2[C2][0]), h2[C2] > a2[C2][1] && (h2[C2] = a2[C2][1]);
        break;
      case "histogramEqualization":
        for (C2 = 0; C2 < c2; C2++)
          p2[C2] = n2[C2].min, h2[C2] = n2[C2].max;
        break;
      case "percentClip":
        for (C2 = 0; C2 < n2.length; C2++) {
          for (m2 = n2[C2], S2 = new Uint32Array(m2.size), g2 = m2.counts, d2 = 0, f2 = (m2.max - m2.min) / m2.size, k2 = m2.min === -0.5 && f2 === 1 ? 0.5 : 0, O2 = 0; O2 < m2.size; O2++)
            d2 += g2[O2], S2[O2] = d2;
          for (y2 = e2.minPercent * d2 / 100, O2 = 0; O2 < m2.size; O2++)
            if (S2[O2] > y2) {
              p2[C2] = m2.min + f2 * (O2 + k2);
              break;
            }
          for (y2 = (1 - e2.maxPercent / 100) * d2, O2 = m2.size - 2; O2 >= 0; O2--)
            if (S2[O2] < y2) {
              h2[C2] = m2.min + f2 * (O2 + 2 - k2);
              break;
            }
        }
        break;
      default:
        for (C2 = 0; C2 < c2; C2++)
          p2[C2] = a2[C2][0], h2[C2] = a2[C2][1];
    }
    l2 === "histogramEqualization" ? (R2 = n2[0].size || 256, L2 = 0, o2 && (_2 = n2.map((e3) => f$2(e3)))) : (R2 = e2.max || 255, L2 = e2.min || 0);
    const N2 = { minCutOff: p2, maxCutOff: h2, outMax: R2, outMin: L2, histogramLut: _2 };
    return this.getSelectedBandCutoffs(N2, s2);
  }
  getSelectedBandCutoffs(e2, t2) {
    if (t2 == null || t2.length === 0)
      return e2;
    const r2 = Math.max.apply(null, t2), { minCutOff: s2, maxCutOff: o2, outMin: i2, outMax: a2, histogramLut: n2 } = e2;
    return s2.length === t2.length || s2.length <= r2 ? e2 : { minCutOff: t2.map((e3) => s2[e3]), maxCutOff: t2.map((e3) => o2[e3]), histogramLut: n2 ? t2.map((e3) => n2[e3]) : null, outMin: i2, outMax: a2 };
  }
  generateStretchWebGLParams(e2, t2, r2) {
    var s2;
    let o2 = null, i2 = null;
    const a2 = this.lookup && this.lookup.colormapLut;
    t2.colorRamp && a2 && (o2 = a2.indexedColormap, i2 = a2.offset), t2.stretchType === "histogramEqualization" && (t2 = __spreadProps(__spreadValues({}, t2), { stretchType: "minMax" }));
    const { gamma: n2 } = t2, l2 = !!(t2.useGamma && n2 && n2.some((e3) => e3 !== 1)), { minCutOff: u2, maxCutOff: c2, outMin: p2, outMax: h2 } = this.getStretchCutoff(t2, e2, r2), m2 = (s2 = e2) == null ? void 0 : s2.getPlaneCount();
    m2 === 2 && ((e2 = e2.clone()).statistics = [e2.statistics[0]], e2.pixels = [e2.pixels[0]]);
    const f2 = Math.min(3, (r2 == null ? void 0 : r2.length) || m2 || this.rasterInfo.bandCount), d2 = new Float32Array(f2), g2 = o2 || l2 ? 1 : 255;
    let b2;
    for (b2 = 0; b2 < f2; b2++)
      d2[b2] = (h2 - p2) / (c2[b2] - u2[b2]) / g2;
    const x2 = new Float32Array(f2);
    if (l2)
      for (b2 = 0; b2 < f2; b2++)
        n2[b2] > 1 ? n2[b2] > 2 ? x2[b2] = 6.5 + __pow(n2[b2] - 2, 2.5) : x2[b2] = 6.5 + 100 * __pow(2 - n2[b2], 4) : x2[b2] = 1;
    return { bandCount: f2, outMin: p2 / g2, outMax: h2 / g2, minCutOff: u2, maxCutOff: c2, factor: d2, useGamma: l2, gamma: l2 ? n2 : [1, 1, 1], gammaCorrection: l2 ? x2 : [1, 1, 1], colormap: o2, colormapOffset: i2, type: "stretch" };
  }
  generateShadedReliefWebGLParams(e2, r2, s2) {
    var o2, i$12, a2;
    let n2 = null, l2 = null;
    const u2 = this.lookup && this.lookup.colormapLut;
    e2.colorRamp && u2 && (n2 = u2.indexedColormap, l2 = u2.offset);
    const c2 = __spreadProps(__spreadValues({}, e2), { isGCS: r2, resolution: s2 }), p2 = i(c2), h2 = (o2 = e$6(this.rasterInfo.statistics)) == null ? void 0 : o2[0];
    return __spreadProps(__spreadValues({}, p2), { minValue: (i$12 = h2.min) != null ? i$12 : 0, maxValue: (a2 = h2.max) != null ? a2 : 8e3, hillshadeType: e2.hillshadeType === "traditional" ? 0 : 1, type: "hillshade", colormap: n2, colormapOffset: l2 });
  }
  isValidPixelBlock(e2) {
    return !!(e2 && e2.pixels && e2.pixels.length > 0 && e2.validPixelCount !== 0);
  }
};
e$5([y$2({ json: { write: true } })], _.prototype, "rendererJSON", void 0), e$5([y$2({ type: p, json: { write: true } })], _.prototype, "rasterInfo", void 0), e$5([y$2({ json: { write: true } })], _.prototype, "lookup", void 0), e$5([y$2()], _.prototype, "canRenderInWebGL", void 0), _ = e$5([i$5("esri.renderers.support.RasterSymbolizer")], _);
var N = _;
export { D, E, N, T, r$3 as a, b$1 as b, n$2 as c, f, l, n$1 as n, p, r$2 as r, x$1 as x, y$1 as y };
