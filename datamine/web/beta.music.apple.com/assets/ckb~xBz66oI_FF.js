import { aR as c, Y as i } from "./main.js";
function l(n, a) {
  for (var t = 0; t < a.length; t++) {
    const e = a[t];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const r in e)
        if (r !== "default" && !(r in n)) {
          const o = Object.getOwnPropertyDescriptor(e, r);
          o && Object.defineProperty(n, r, o.get ? o : { enumerable: !0, get: () => e[r] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }));
}
var f = { exports: {} };
(function (n, a) {
  (function (t, e) {
    e(a);
  })(i, function (t) {
    var e = typeof window < "u" && window.flatpickr !== void 0 ? window.flatpickr : { l10ns: {} },
      r = {
        weekdays: {
          shorthand: ["یەکشەممە", "دووشەممە", "سێشەممە", "چوارشەممە", "پێنجشەممە", "هەینی", "شەممە"],
          longhand: ["یەکشەممە", "دووشەممە", "سێشەممە", "چوارشەممە", "پێنجشەممە", "هەینی", "شەممە"],
        },
        months: {
          shorthand: [
            "ڕێبەندان",
            "ڕەشەمە",
            "نەورۆز",
            "گوڵان",
            "جۆزەردان",
            "پووشپەڕ",
            "گەلاوێژ",
            "خەرمانان",
            "ڕەزبەر",
            "گەڵاڕێزان",
            "سەرماوەز",
            "بەفرانبار",
          ],
          longhand: [
            "ڕێبەندان",
            "ڕەشەمە",
            "نەورۆز",
            "گوڵان",
            "جۆزەردان",
            "پووشپەڕ",
            "گەلاوێژ",
            "خەرمانان",
            "ڕەزبەر",
            "گەڵاڕێزان",
            "سەرماوەز",
            "بەفرانبار",
          ],
        },
        firstDayOfWeek: 6,
        ordinal: function () {
          return "";
        },
      };
    e.l10ns.ckb = r;
    var o = e.l10ns;
    ((t.Kurdish = r), (t.default = o), Object.defineProperty(t, "__esModule", { value: !0 }));
  });
})(f, f.exports);
var s = f.exports;
const d = c(s),
  p = l({ __proto__: null, default: d }, [s]);
export { p as c };
