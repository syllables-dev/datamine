import { aR as s, Y as i } from "./main.js";
function d(n, a) {
  for (var r = 0; r < a.length; r++) {
    const e = a[r];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const t in e)
        if (t !== "default" && !(t in n)) {
          const o = Object.getOwnPropertyDescriptor(e, t);
          o && Object.defineProperty(n, t, o.get ? o : { enumerable: !0, get: () => e[t] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }));
}
var f = { exports: {} };
(function (n, a) {
  (function (r, e) {
    e(a);
  })(i, function (r) {
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
    var o = e.l10ns;
    ((r.Hebrew = t), (r.default = o), Object.defineProperty(r, "__esModule", { value: !0 }));
  });
})(f, f.exports);
var l = f.exports;
const u = s(l),
  p = d({ __proto__: null, default: u }, [l]);
export { p as h };
