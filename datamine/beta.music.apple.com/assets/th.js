import { br as i, Z as f } from "./main.js";
function s(o, l) {
  for (var t = 0; t < l.length; t++) {
    const e = l[t];
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
  u = {
    get exports() {
      return a;
    },
    set exports(o) {
      a = o;
    },
  };
(function (o, l) {
  (function (t, e) {
    e(l);
  })(f, function (t) {
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
    var n = e.l10ns;
    ((t.Thai = r), (t.default = n), Object.defineProperty(t, "__esModule", { value: !0 }));
  });
})(u, a);
const d = i(a),
  h = s({ __proto__: null, default: d }, [a]);
export { h as t };
