import { bA as l, Z as s } from "./main.js";
function i(o, f) {
  for (var t = 0; t < f.length; t++) {
    const e = f[t];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const r in e)
        if (r !== "default" && !(r in o)) {
          const n = Object.getOwnPropertyDescriptor(e, r);
          n && Object.defineProperty(o, r, n.get ? n : { enumerable: !0, get: () => e[r] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(o, Symbol.toStringTag, { value: "Module" }));
}
var a = {},
  d = {
    get exports() {
      return a;
    },
    set exports(o) {
      a = o;
    },
  };
(function (o, f) {
  (function (t, e) {
    e(f);
  })(s, function (t) {
    var e = typeof window < "u" && window.flatpickr !== void 0 ? window.flatpickr : { l10ns: {} },
      r = {
        weekdays: {
          shorthand: ["א", "ב", "ג", "ד", "ה", "ו", "ש"],
          longhand: ["ראשון", "שני", "שלישי", "רביעי", "חמישי", "שישי", "שבת"],
        },
        months: {
          shorthand: ["ינו׳", "פבר׳", "מרץ", "אפר׳", "מאי", "יוני", "יולי", "אוג׳", "ספט׳", "אוק׳", "נוב׳", "דצמ׳"],
          longhand: [
            "ינואר",
            "פברואר",
            "מרץ",
            "אפריל",
            "מאי",
            "יוני",
            "יולי",
            "אוגוסט",
            "ספטמבר",
            "אוקטובר",
            "נובמבר",
            "דצמבר",
          ],
        },
        rangeSeparator: " אל ",
        time_24hr: !0,
      };
    e.l10ns.he = r;
    var n = e.l10ns;
    ((t.Hebrew = r), (t.default = n), Object.defineProperty(t, "__esModule", { value: !0 }));
  });
})(d, a);
const u = l(a),
  p = i({ __proto__: null, default: u }, [a]);
export { p as h };
