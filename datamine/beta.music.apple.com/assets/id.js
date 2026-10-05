import { bA as u, Z as s } from "./main.js";
function d(t, i) {
  for (var r = 0; r < i.length; r++) {
    const e = i[r];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const n in e)
        if (n !== "default" && !(n in t)) {
          const a = Object.getOwnPropertyDescriptor(e, n);
          a && Object.defineProperty(t, n, a.get ? a : { enumerable: !0, get: () => e[n] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }));
}
var o = {},
  l = {
    get exports() {
      return o;
    },
    set exports(t) {
      o = t;
    },
  };
(function (t, i) {
  (function (r, e) {
    e(i);
  })(s, function (r) {
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
    var a = e.l10ns;
    ((r.Indonesian = n), (r.default = a), Object.defineProperty(r, "__esModule", { value: !0 }));
  });
})(l, o);
const f = u(o),
  b = d({ __proto__: null, default: f }, [o]);
export { b as i };
