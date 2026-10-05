import { bA as u, Z as i } from "./main.js";
function s(n, l) {
  for (var e = 0; e < l.length; e++) {
    const a = l[e];
    if (typeof a != "string" && !Array.isArray(a)) {
      for (const t in a)
        if (t !== "default" && !(t in n)) {
          const r = Object.getOwnPropertyDescriptor(a, t);
          r && Object.defineProperty(n, t, r.get ? r : { enumerable: !0, get: () => a[t] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }));
}
var o = {},
  f = {
    get exports() {
      return o;
    },
    set exports(n) {
      o = n;
    },
  };
(function (n, l) {
  (function (e, a) {
    a(l);
  })(i, function (e) {
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
    var r = a.l10ns;
    ((e.UzbekLatin = t), (e.default = r), Object.defineProperty(e, "__esModule", { value: !0 }));
  });
})(f, o);
const b = u(o),
  d = s({ __proto__: null, default: b }, [o]);
export { d as u };
