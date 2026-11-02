function s(n, t) {
  if (t <= 0) throw new RangeError("Chunk size must be greater than 0");
  const r = [];
  for (let e = 0; e < n.length; e += t) r.push(n.slice(e, e + t));
  return r;
}
export { s };
