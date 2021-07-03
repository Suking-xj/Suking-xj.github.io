import { m } from "./LercCodec.7b2d60e1.js";
class r {
  _decode(r2) {
    const s2 = m(r2.buffer, r2.options);
    return Promise.resolve({ result: s2, transferList: [s2.pixelData.buffer] });
  }
}
function s() {
  return new r();
}
export default s;
