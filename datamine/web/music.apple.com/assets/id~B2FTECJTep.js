import { aR as s, Y as d } from "./main.js";
function l(a, o) {
  for (var r = 0; r < o.length; r++) {
    const e = o[r];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const n in e)
        if (n !== "default" && !(n in a)) {
          const t = Object.getOwnPropertyDescriptor(e, n);
          t && Object.defineProperty(a, n, t.get ? t : { enumerable: !0, get: () => e[n] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(a, Symbol.toStringTag, { value: "Module" }));
}
var i = { exports: {} };
(function (a, o) {
  (function (r, e) {
    e(o);
  })(d, function (r) {
    var e = typeof window < "u" && window.flatpickr !== void 0 ? window.flatpickr : { l10ns: {} },
      n = {
        weekdays: {
          shorthand: ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"],
          longhand: ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"],
        },
        months: {
          shorthand: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"],
          longhand: [
            "Januari",
            "Februari",
            "Maret",
            "April",
            "Mei",
            "Juni",
            "Juli",
            "Agustus",
            "September",
            "Oktober",
            "November",
            "Desember",
          ],
        },
        firstDayOfWeek: 1,
        ordinal: function () {
          return "";
        },
        time_24hr: !0,
        rangeSeparator: " - ",
      };
    e.l10ns.id = n;
    var t = e.l10ns;
    ((r.Indonesian = n), (r.default = t), Object.defineProperty(r, "__esModule", { value: !0 }));
  });
})(i, i.exports);
var u = i.exports;
const f = s(u),
  c = l({ __proto__: null, default: f }, [u]);
export { c as i };
