import { aR as s, Y as f } from "./main.js";
function d(n, o) {
  for (var a = 0; a < o.length; a++) {
    const e = o[a];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const r in e)
        if (r !== "default" && !(r in n)) {
          const t = Object.getOwnPropertyDescriptor(e, r);
          t && Object.defineProperty(n, r, t.get ? t : { enumerable: !0, get: () => e[r] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }));
}
var i = { exports: {} };
(function (n, o) {
  (function (a, e) {
    e(o);
  })(f, function (a) {
    var e = typeof window < "u" && window.flatpickr !== void 0 ? window.flatpickr : { l10ns: {} },
      r = {
        firstDayOfWeek: 1,
        weekdays: {
          shorthand: ["Dom", "Lua", "Mái", "Céa", "Déa", "Aoi", "Sat"],
          longhand: ["Dé Domhnaigh", "Dé Luain", "Dé Máirt", "Dé Céadaoin", "Déardaoin", "Dé hAoine", "Dé Sathairn"],
        },
        months: {
          shorthand: ["Ean", "Fea", "Már", "Aib", "Bea", "Mei", "Iúi", "Lún", "MFo", "DFo", "Sam", "Nol"],
          longhand: [
            "Eanáir",
            "Feabhra",
            "Márta",
            "Aibreán",
            "Bealtaine",
            "Meitheamh",
            "Iúil",
            "Lúnasa",
            "Meán Fómhair",
            "Deireadh Fómhair",
            "Samhain",
            "Nollaig",
          ],
        },
        time_24hr: !0,
      };
    e.l10ns.hr = r;
    var t = e.l10ns;
    ((a.Irish = r), (a.default = t), Object.defineProperty(a, "__esModule", { value: !0 }));
  });
})(i, i.exports);
var l = i.exports;
const h = s(l),
  g = d({ __proto__: null, default: h }, [l]);
export { g };
