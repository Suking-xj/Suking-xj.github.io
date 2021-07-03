const t = Math.PI, o = 128 / t, c = 256 / 360, N = 1 / Math.LN2;
function a(n, t2) {
  return (n %= t2) >= 0 ? n : n + t2;
}
function h(n) {
  return a(n * o, 256);
}
function M(n) {
  return a(n * c, 256);
}
function P(n) {
  return Math.log(n) * N;
}
function g(n, t2, r) {
  return n >= t2 && n <= r || n >= r && n <= t2;
}
export { M, P, g, h };
