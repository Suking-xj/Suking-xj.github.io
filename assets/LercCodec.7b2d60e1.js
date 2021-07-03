const e = new Float32Array(1);
function t(e2) {
  return i(Math.max(-n, Math.min(e2, n)));
}
function i(t2) {
  return e[0] = t2, e[0];
}
const n = i(34028234663852886e22);
var a = {};
a.defaultNoDataValue = t(-1 / 0), a.decode = function(e2, i2) {
  var n2 = (i2 = i2 || {}).encodedMaskData || i2.encodedMaskData === null, f2 = o(e2, i2.inputOffset || 0, n2), m2 = i2.noDataValue != null ? t(i2.noDataValue) : a.defaultNoDataValue, u = l(f2, i2.pixelType || Float32Array, i2.encodedMaskData, m2, i2.returnMask), d = { width: f2.width, height: f2.height, pixelData: u.resultPixels, minValue: f2.pixels.minValue, maxValue: f2.pixels.maxValue, noDataValue: m2 };
  return u.resultMask && (d.maskData = u.resultMask), i2.returnEncodedMask && f2.mask && (d.encodedMaskData = f2.mask.bitset ? f2.mask.bitset : null), i2.returnFileInfo && (d.fileInfo = s(f2, m2), i2.computeUsedBitDepths && (d.fileInfo.bitDepths = r(f2))), d;
};
var l = function(e2, t2, i2, n2, a2) {
  var l2, s2, r2 = 0, o2 = e2.pixels.numBlocksX, m2 = e2.pixels.numBlocksY, u = Math.floor(e2.width / o2), d = Math.floor(e2.height / m2), c = 2 * e2.maxZError;
  i2 = i2 || (e2.mask ? e2.mask.bitset : null), l2 = new t2(e2.width * e2.height), a2 && i2 && (s2 = new Uint8Array(e2.width * e2.height));
  for (var g, h, k = new Float32Array(u * d), x = 0; x <= m2; x++) {
    var w = x !== m2 ? d : e2.height % m2;
    if (w !== 0)
      for (var p = 0; p <= o2; p++) {
        var y = p !== o2 ? u : e2.width % o2;
        if (y !== 0) {
          var V, B, v, U, M = x * e2.width * d + p * u, D = e2.width - y, b = e2.pixels.blocks[r2];
          if (b.encoding < 2 ? (b.encoding === 0 ? V = b.rawData : (f(b.stuffedData, b.bitsPerPixel, b.numValidPixels, b.offset, c, k, e2.pixels.maxValue), V = k), B = 0) : v = b.encoding === 2 ? 0 : b.offset, i2)
            for (h = 0; h < w; h++) {
              for (7 & M && (U = i2[M >> 3], U <<= 7 & M), g = 0; g < y; g++)
                7 & M || (U = i2[M >> 3]), 128 & U ? (s2 && (s2[M] = 1), l2[M++] = b.encoding < 2 ? V[B++] : v) : (s2 && (s2[M] = 0), l2[M++] = n2), U <<= 1;
              M += D;
            }
          else if (b.encoding < 2)
            for (h = 0; h < w; h++) {
              for (g = 0; g < y; g++)
                l2[M++] = V[B++];
              M += D;
            }
          else
            for (h = 0; h < w; h++)
              if (l2.fill)
                l2.fill(v, M, M + y), M += y + D;
              else {
                for (g = 0; g < y; g++)
                  l2[M++] = v;
                M += D;
              }
          if (b.encoding === 1 && B !== b.numValidPixels)
            throw "Block and Mask do not match";
          r2++;
        }
      }
  }
  return { resultPixels: l2, resultMask: s2 };
}, s = function(e2, t2) {
  return { fileIdentifierString: e2.fileIdentifierString, fileVersion: e2.fileVersion, imageType: e2.imageType, height: e2.height, width: e2.width, maxZError: e2.maxZError, eofOffset: e2.eofOffset, mask: e2.mask ? { numBlocksX: e2.mask.numBlocksX, numBlocksY: e2.mask.numBlocksY, numBytes: e2.mask.numBytes, maxValue: e2.mask.maxValue } : null, pixels: { numBlocksX: e2.pixels.numBlocksX, numBlocksY: e2.pixels.numBlocksY, numBytes: e2.pixels.numBytes, maxValue: e2.pixels.maxValue, minValue: e2.pixels.minValue, noDataValue: t2 } };
}, r = function(e2) {
  for (var t2 = e2.pixels.numBlocksX * e2.pixels.numBlocksY, i2 = {}, n2 = 0; n2 < t2; n2++) {
    var a2 = e2.pixels.blocks[n2];
    a2.encoding === 0 ? i2.float32 = true : a2.encoding === 1 ? i2[a2.bitsPerPixel] = true : i2[0] = true;
  }
  return Object.keys(i2);
}, o = function(e2, t2, i2) {
  var n2 = {}, a2 = new Uint8Array(e2, t2, 10);
  if (n2.fileIdentifierString = String.fromCharCode.apply(null, a2), n2.fileIdentifierString.trim() != "CntZImage")
    throw "Unexpected file identifier string: " + n2.fileIdentifierString;
  t2 += 10;
  var l2 = new DataView(e2, t2, 24);
  if (n2.fileVersion = l2.getInt32(0, true), n2.imageType = l2.getInt32(4, true), n2.height = l2.getUint32(8, true), n2.width = l2.getUint32(12, true), n2.maxZError = l2.getFloat64(16, true), t2 += 24, !i2) {
    if (l2 = new DataView(e2, t2, 16), n2.mask = {}, n2.mask.numBlocksY = l2.getUint32(0, true), n2.mask.numBlocksX = l2.getUint32(4, true), n2.mask.numBytes = l2.getUint32(8, true), n2.mask.maxValue = l2.getFloat32(12, true), t2 += 16, n2.mask.numBytes > 0) {
      var s2 = new Uint8Array(Math.ceil(n2.width * n2.height / 8)), r2 = (l2 = new DataView(e2, t2, n2.mask.numBytes)).getInt16(0, true), o2 = 2, f2 = 0;
      do {
        if (r2 > 0)
          for (; r2--; )
            s2[f2++] = l2.getUint8(o2++);
        else {
          var m2 = l2.getUint8(o2++);
          for (r2 = -r2; r2--; )
            s2[f2++] = m2;
        }
        r2 = l2.getInt16(o2, true), o2 += 2;
      } while (o2 < n2.mask.numBytes);
      if (r2 !== -32768 || f2 < s2.length)
        throw "Unexpected end of mask RLE encoding";
      n2.mask.bitset = s2, t2 += n2.mask.numBytes;
    } else if ((n2.mask.numBytes | n2.mask.numBlocksY | n2.mask.maxValue) == 0) {
      s2 = new Uint8Array(Math.ceil(n2.width * n2.height / 8));
      n2.mask.bitset = s2;
    }
  }
  l2 = new DataView(e2, t2, 16), n2.pixels = {}, n2.pixels.numBlocksY = l2.getUint32(0, true), n2.pixels.numBlocksX = l2.getUint32(4, true), n2.pixels.numBytes = l2.getUint32(8, true), n2.pixels.maxValue = l2.getFloat32(12, true), t2 += 16;
  var u = n2.pixels.numBlocksX, d = n2.pixels.numBlocksY, c = u + (n2.width % u > 0 ? 1 : 0), g = d + (n2.height % d > 0 ? 1 : 0);
  n2.pixels.blocks = new Array(c * g);
  for (var h = 1e9, k = 0, x = 0; x < g; x++)
    for (var w = 0; w < c; w++) {
      var p = 0, y = e2.byteLength - t2;
      l2 = new DataView(e2, t2, Math.min(10, y));
      var V = {};
      n2.pixels.blocks[k++] = V;
      var B = l2.getUint8(0);
      if (p++, V.encoding = 63 & B, V.encoding > 3)
        throw "Invalid block encoding (" + V.encoding + ")";
      if (V.encoding !== 2) {
        if (B !== 0 && B !== 2) {
          if (B >>= 6, V.offsetType = B, B === 2)
            V.offset = l2.getInt8(1), p++;
          else if (B === 1)
            V.offset = l2.getInt16(1, true), p += 2;
          else {
            if (B !== 0)
              throw "Invalid block offset type";
            V.offset = l2.getFloat32(1, true), p += 4;
          }
          if (h = Math.min(V.offset, h), V.encoding === 1)
            if (B = l2.getUint8(p), p++, V.bitsPerPixel = 63 & B, B >>= 6, V.numValidPixelsType = B, B === 2)
              V.numValidPixels = l2.getUint8(p), p++;
            else if (B === 1)
              V.numValidPixels = l2.getUint16(p, true), p += 2;
            else {
              if (B !== 0)
                throw "Invalid valid pixel count type";
              V.numValidPixels = l2.getUint32(p, true), p += 4;
            }
        }
        var v;
        if (t2 += p, V.encoding != 3) {
          if (V.encoding === 0) {
            var U = (n2.pixels.numBytes - 1) / 4;
            if (U !== Math.floor(U))
              throw "uncompressed block has invalid length";
            v = new ArrayBuffer(4 * U), new Uint8Array(v).set(new Uint8Array(e2, t2, 4 * U));
            for (var M = new Float32Array(v), D = 0; D < M.length; D++)
              h = Math.min(h, M[D]);
            V.rawData = M, t2 += 4 * U;
          } else if (V.encoding === 1) {
            var b = Math.ceil(V.numValidPixels * V.bitsPerPixel / 8), I = Math.ceil(b / 4);
            v = new ArrayBuffer(4 * I), new Uint8Array(v).set(new Uint8Array(e2, t2, b)), V.stuffedData = new Uint32Array(v), t2 += b;
          }
        }
      } else
        t2++, h = Math.min(h, 0);
    }
  return n2.pixels.minValue = h, n2.eofOffset = t2, n2;
}, f = function(e2, t2, i2, n2, a2, l2, s2) {
  var r2, o2, f2, m2 = (1 << t2) - 1, u = 0, d = 0, c = Math.ceil((s2 - n2) / a2), g = 4 * e2.length - Math.ceil(t2 * i2 / 8);
  for (e2[e2.length - 1] <<= 8 * g, r2 = 0; r2 < i2; r2++) {
    if (d === 0 && (f2 = e2[u++], d = 32), d >= t2)
      o2 = f2 >>> d - t2 & m2, d -= t2;
    else {
      var h = t2 - d;
      o2 = (f2 & m2) << h & m2, o2 += (f2 = e2[u++]) >>> (d = 32 - h);
    }
    l2[r2] = o2 < c ? n2 + o2 * a2 : s2;
  }
  return l2;
};
const m = a.decode;
export { m };
