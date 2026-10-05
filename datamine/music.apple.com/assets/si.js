import { bA as i, Z as l } from "./main.js";
function f(n, s) {
  for (var t = 0; t < s.length; t++) {
    const e = s[t];
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
var a = {},
  d = {
    get exports() {
      return a;
    },
    set exports(n) {
      a = n;
    },
  };
(function (n, s) {
  (function (t, e) {
    e(s);
  })(l, function (t) {
    var e = typeof window < "u" && window.flatpickr !== void 0 ? window.flatpickr : { l10ns: {} },
      r = {
        weekdays: {
          shorthand: ["ඉ", "ස", "අ", "බ", "බ්‍ර", "සි", "සෙ"],
          longhand: ["ඉරිදා", "සඳුදා", "අඟහරුවාදා", "බදාදා", "බ්‍රහස්පතින්දා", "සිකුරාදා", "සෙනසුරාදා"],
        },
        months: {
          shorthand: ["ජන", "පෙබ", "මාර්", "අප්‍රේ", "මැයි", "ජුනි", "ජූලි", "අගෝ", "සැප්", "ඔක්", "නොවැ", "දෙසැ"],
          longhand: [
            "ජනවාරි",
            "පෙබරවාරි",
            "මාර්තු",
            "අප්‍රේල්",
            "මැයි",
            "ජුනි",
            "ජූලි",
            "අගෝස්තු",
            "සැප්තැම්බර්",
            "ඔක්තෝබර්",
            "නොවැම්බර්",
            "දෙසැම්බර්",
          ],
        },
        time_24hr: !0,
      };
    e.l10ns.si = r;
    var o = e.l10ns;
    ((t.Sinhala = r), (t.default = o), Object.defineProperty(t, "__esModule", { value: !0 }));
  });
})(d, a);
const u = i(a),
  p = f({ __proto__: null, default: u }, [a]);
export { p as s };
