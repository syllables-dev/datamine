import { br as T, Z as i } from "./main.js";
function s(r, a) {
  for (var e = 0; e < a.length; e++) {
    const n = a[e];
    if (typeof n != "string" && !Array.isArray(n)) {
      for (const t in n)
        if (t !== "default" && !(t in r)) {
          const h = Object.getOwnPropertyDescriptor(n, t);
          h && Object.defineProperty(r, t, h.get ? h : { enumerable: !0, get: () => n[t] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(r, Symbol.toStringTag, { value: "Module" }));
}
var o = {},
  f = {
    get exports() {
      return o;
    },
    set exports(r) {
      o = r;
    },
  };
(function (r, a) {
  (function (e, n) {
    n(a);
  })(i, function (e) {
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
    var h = n.l10ns;
    ((e.Vietnamese = t), (e.default = h), Object.defineProperty(e, "__esModule", { value: !0 }));
  });
})(f, o);
const g = T(o),
  u = s({ __proto__: null, default: g }, [o]);
export { u as v };
