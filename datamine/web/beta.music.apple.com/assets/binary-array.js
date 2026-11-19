const n = (r) => {
    try {
      return JSON.parse(String.fromCharCode.apply(null, [...r]));
    } catch {
      return r;
    }
  },
  a = (r) => {
    try {
      let t = 0;
      for (let e = r.length - 1; e >= 0; e--) t = t * 256 + r[e];
      return t;
    } catch {
      return r;
    }
  };
export { a, n as b };
