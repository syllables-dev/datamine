const a = (t) => t.reduce((e, r) => e + r.toString(16).padStart(2, "0"), ""),
  n = (t) => {
    try {
      return JSON.parse(String.fromCharCode.apply(null, [...t]));
    } catch (e) {
      return t;
    }
  },
  c = (t) => {
    try {
      let e = 0;
      for (let r = t.length - 1; r >= 0; r--) e = e * 256 + t[r];
      return e;
    } catch (e) {
      return t;
    }
  };
export { c as a, n as b, a as c };
