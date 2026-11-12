import { aR as i, Y as s } from "./main.js";
function f(o, h) {
  for (var e = 0; e < h.length; e++) {
    const n = h[e];
    if (typeof n != "string" && !Array.isArray(n)) {
      for (const t in n)
        if (t !== "default" && !(t in o)) {
          const r = Object.getOwnPropertyDescriptor(n, t);
          r && Object.defineProperty(o, t, r.get ? r : { enumerable: !0, get: () => n[t] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(o, Symbol.toStringTag, { value: "Module" }));
}
var a = { exports: {} };
(function (o, h) {
  (function (e, n) {
    n(h);
  })(s, function (e) {
    var n = typeof window < "u" && window.flatpickr !== void 0 ? window.flatpickr : { l10ns: {} },
      t = {
        weekdays: {
          shorthand: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
          longhand: ["Chủ nhật", "Thứ hai", "Thứ ba", "Thứ tư", "Thứ năm", "Thứ sáu", "Thứ bảy"],
        },
        months: {
          shorthand: ["Th1", "Th2", "Th3", "Th4", "Th5", "Th6", "Th7", "Th8", "Th9", "Th10", "Th11", "Th12"],
          longhand: [
            "Tháng một",
            "Tháng hai",
            "Tháng ba",
            "Tháng tư",
            "Tháng năm",
            "Tháng sáu",
            "Tháng bảy",
            "Tháng tám",
            "Tháng chín",
            "Tháng mười",
            "Tháng mười một",
            "Tháng mười hai",
          ],
        },
        firstDayOfWeek: 1,
        rangeSeparator: " đến ",
      };
    n.l10ns.vn = t;
    var r = n.l10ns;
    ((e.Vietnamese = t), (e.default = r), Object.defineProperty(e, "__esModule", { value: !0 }));
  });
})(a, a.exports);
var T = a.exports;
const g = i(T),
  d = f({ __proto__: null, default: g }, [T]);
export { d as v };
