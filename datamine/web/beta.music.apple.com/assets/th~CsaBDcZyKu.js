import { aR as f, Y as s } from "./main.js";
function d(n, a) {
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
var l = { exports: {} };
(function (n, a) {
  (function (t, e) {
    e(a);
  })(s, function (t) {
    var e = typeof window < "u" && window.flatpickr !== void 0 ? window.flatpickr : { l10ns: {} },
      r = {
        weekdays: {
          shorthand: ["อา", "จ", "อ", "พ", "พฤ", "ศ", "ส"],
          longhand: ["อาทิตย์", "จันทร์", "อังคาร", "พุธ", "พฤหัสบดี", "ศุกร์", "เสาร์"],
        },
        months: {
          shorthand: ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."],
          longhand: [
            "มกราคม",
            "กุมภาพันธ์",
            "มีนาคม",
            "เมษายน",
            "พฤษภาคม",
            "มิถุนายน",
            "กรกฎาคม",
            "สิงหาคม",
            "กันยายน",
            "ตุลาคม",
            "พฤศจิกายน",
            "ธันวาคม",
          ],
        },
        firstDayOfWeek: 1,
        rangeSeparator: " ถึง ",
        scrollTitle: "เลื่อนเพื่อเพิ่มหรือลด",
        toggleTitle: "คลิกเพื่อเปลี่ยน",
        time_24hr: !0,
        ordinal: function () {
          return "";
        },
      };
    e.l10ns.th = r;
    var o = e.l10ns;
    ((t.Thai = r), (t.default = o), Object.defineProperty(t, "__esModule", { value: !0 }));
  });
})(l, l.exports);
var i = l.exports;
const u = f(i),
  p = d({ __proto__: null, default: u }, [i]);
export { p as t };
