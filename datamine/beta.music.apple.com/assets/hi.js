import { bA as f, Z as l } from "./main.js";
function s(r, a) {
  for (var t = 0; t < a.length; t++) {
    const e = a[t];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const n in e)
        if (n !== "default" && !(n in r)) {
          const o = Object.getOwnPropertyDescriptor(e, n);
          o && Object.defineProperty(r, n, o.get ? o : { enumerable: !0, get: () => e[n] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(r, Symbol.toStringTag, { value: "Module" }));
}
var i = {},
  d = {
    get exports() {
      return i;
    },
    set exports(r) {
      i = r;
    },
  };
(function (r, a) {
  (function (t, e) {
    e(a);
  })(l, function (t) {
    var e = typeof window < "u" && window.flatpickr !== void 0 ? window.flatpickr : { l10ns: {} },
      n = {
        weekdays: {
          shorthand: ["रवि", "सोम", "मंगल", "बुध", "गुरु", "शुक्र", "शनि"],
          longhand: ["रविवार", "सोमवार", "मंगलवार", "बुधवार", "गुरुवार", "शुक्रवार", "शनिवार"],
        },
        months: {
          shorthand: ["जन", "फर", "मार्च", "अप्रेल", "मई", "जून", "जूलाई", "अग", "सित", "अक्ट", "नव", "दि"],
          longhand: [
            "जनवरी ",
            "फरवरी",
            "मार्च",
            "अप्रेल",
            "मई",
            "जून",
            "जूलाई",
            "अगस्त ",
            "सितम्बर",
            "अक्टूबर",
            "नवम्बर",
            "दिसम्बर",
          ],
        },
      };
    e.l10ns.hi = n;
    var o = e.l10ns;
    ((t.Hindi = n), (t.default = o), Object.defineProperty(t, "__esModule", { value: !0 }));
  });
})(d, i);
const u = f(i),
  p = s({ __proto__: null, default: u }, [i]);
export { p as h };
