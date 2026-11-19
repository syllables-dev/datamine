import { aR as l, Y as s } from "./main.js";
function d(r, i) {
  for (var t = 0; t < i.length; t++) {
    const e = i[t];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const o in e)
        if (o !== "default" && !(o in r)) {
          const n = Object.getOwnPropertyDescriptor(e, o);
          n && Object.defineProperty(r, o, n.get ? n : { enumerable: !0, get: () => e[o] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(r, Symbol.toStringTag, { value: "Module" }));
}
var a = { exports: {} };
(function (r, i) {
  (function (t, e) {
    e(i);
  })(s, function (t) {
    var e = typeof window < "u" && window.flatpickr !== void 0 ? window.flatpickr : { l10ns: {} },
      o = {
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
    e.l10ns.hi = o;
    var n = e.l10ns;
    ((t.Hindi = o), (t.default = n), Object.defineProperty(t, "__esModule", { value: !0 }));
  });
})(a, a.exports);
var f = a.exports;
const u = l(f),
  p = d({ __proto__: null, default: u }, [f]);
export { p as h };
