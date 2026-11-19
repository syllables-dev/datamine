import { aR as s, Y as d } from "./main.js";
function i(r, a) {
  for (var n = 0; n < a.length; n++) {
    const e = a[n];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const t in e)
        if (t !== "default" && !(t in r)) {
          const o = Object.getOwnPropertyDescriptor(e, t);
          o && Object.defineProperty(r, t, o.get ? o : { enumerable: !0, get: () => e[t] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(r, Symbol.toStringTag, { value: "Module" }));
}
var l = { exports: {} };
(function (r, a) {
  (function (n, e) {
    e(a);
  })(d, function (n) {
    var e = typeof window < "u" && window.flatpickr !== void 0 ? window.flatpickr : { l10ns: {} },
      t = {
        weekdays: {
          shorthand: ["রবি", "সোম", "মঙ্গল", "বুধ", "বৃহস্পতি", "শুক্র", "শনি"],
          longhand: ["রবিবার", "সোমবার", "মঙ্গলবার", "বুধবার", "বৃহস্পতিবার", "শুক্রবার", "শনিবার"],
        },
        months: {
          shorthand: ["জানু", "ফেব্রু", "মার্চ", "এপ্রিল", "মে", "জুন", "জুলাই", "আগ", "সেপ্টে", "অক্টো", "নভে", "ডিসে"],
          longhand: [
            "জানুয়ারী",
            "ফেব্রুয়ারী",
            "মার্চ",
            "এপ্রিল",
            "মে",
            "জুন",
            "জুলাই",
            "আগস্ট",
            "সেপ্টেম্বর",
            "অক্টোবর",
            "নভেম্বর",
            "ডিসেম্বর",
          ],
        },
      };
    e.l10ns.bn = t;
    var o = e.l10ns;
    ((n.Bangla = t), (n.default = o), Object.defineProperty(n, "__esModule", { value: !0 }));
  });
})(l, l.exports);
var f = l.exports;
const u = s(f),
  p = i({ __proto__: null, default: u }, [f]);
export { p as b };
