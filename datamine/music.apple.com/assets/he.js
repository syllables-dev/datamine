import { br as l, Z as s } from "./main.js";
function i(o, f) {
  for (var r = 0; r < f.length; r++) {
    const e = f[r];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const t in e)
        if (t !== "default" && !(t in o)) {
          const n = Object.getOwnPropertyDescriptor(e, t);
          n && Object.defineProperty(o, t, n.get ? n : { enumerable: !0, get: () => e[t] });
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
  (function (r, e) {
    e(f);
  })(s, function (r) {
    var e = typeof window < "u" && window.flatpickr !== void 0 ? window.flatpickr : { l10ns: {} },
      t = {
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
    e.l10ns.he = t;
    var n = e.l10ns;
    ((r.Hebrew = t), (r.default = n), Object.defineProperty(r, "__esModule", { value: !0 }));
  });
})(d, a);
const u = l(a),
  p = i({ __proto__: null, default: u }, [a]);
export { p as h };
