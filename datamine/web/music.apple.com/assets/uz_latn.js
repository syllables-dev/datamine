import { aR as i, Y as s } from "./main.js";
function f(r, o) {
  for (var e = 0; e < o.length; e++) {
    const a = o[e];
    if (typeof a != "string" && !Array.isArray(a)) {
      for (const t in a)
        if (t !== "default" && !(t in r)) {
          const n = Object.getOwnPropertyDescriptor(a, t);
          n && Object.defineProperty(r, t, n.get ? n : { enumerable: !0, get: () => a[t] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(r, Symbol.toStringTag, { value: "Module" }));
}
var l = { exports: {} };
(function (r, o) {
  (function (e, a) {
    a(o);
  })(s, function (e) {
    var a = typeof window < "u" && window.flatpickr !== void 0 ? window.flatpickr : { l10ns: {} },
      t = {
        weekdays: {
          shorthand: ["Ya", "Du", "Se", "Cho", "Pa", "Ju", "Sha"],
          longhand: ["Yakshanba", "Dushanba", "Seshanba", "Chorshanba", "Payshanba", "Juma", "Shanba"],
        },
        months: {
          shorthand: ["Yan", "Fev", "Mar", "Apr", "May", "Iyun", "Iyul", "Avg", "Sen", "Okt", "Noy", "Dek"],
          longhand: [
            "Yanvar",
            "Fevral",
            "Mart",
            "Aprel",
            "May",
            "Iyun",
            "Iyul",
            "Avgust",
            "Sentabr",
            "Oktabr",
            "Noyabr",
            "Dekabr",
          ],
        },
        firstDayOfWeek: 1,
        ordinal: function () {
          return "";
        },
        rangeSeparator: " — ",
        weekAbbreviation: "Hafta",
        scrollTitle: "Kattalashtirish uchun aylantiring",
        toggleTitle: "O‘tish uchun bosing",
        amPM: ["AM", "PM"],
        yearAriaLabel: "Yil",
        time_24hr: !0,
      };
    a.l10ns.uz_latn = t;
    var n = a.l10ns;
    ((e.UzbekLatin = t), (e.default = n), Object.defineProperty(e, "__esModule", { value: !0 }));
  });
})(l, l.exports);
var u = l.exports;
const b = i(u),
  d = f({ __proto__: null, default: b }, [u]);
export { d as u };
