import { br as i, Z as f } from "./main.js";
function l(o, u) {
  for (var r = 0; r < u.length; r++) {
    const e = u[r];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const t in e)
        if (t !== "default" && !(t in o)) {
          const a = Object.getOwnPropertyDescriptor(e, t);
          a && Object.defineProperty(o, t, a.get ? a : { enumerable: !0, get: () => e[t] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(o, Symbol.toStringTag, { value: "Module" }));
}
var n = {},
  s = {
    get exports() {
      return n;
    },
    set exports(o) {
      n = o;
    },
  };
(function (o, u) {
  (function (r, e) {
    e(u);
  })(f, function (r) {
    var e = typeof window < "u" && window.flatpickr !== void 0 ? window.flatpickr : { l10ns: {} },
      t = {
        weekdays: {
          shorthand: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
          longhand: [
            "Domingo",
            "Segunda-feira",
            "Terça-feira",
            "Quarta-feira",
            "Quinta-feira",
            "Sexta-feira",
            "Sábado",
          ],
        },
        months: {
          shorthand: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
          longhand: [
            "Janeiro",
            "Fevereiro",
            "Março",
            "Abril",
            "Maio",
            "Junho",
            "Julho",
            "Agosto",
            "Setembro",
            "Outubro",
            "Novembro",
            "Dezembro",
          ],
        },
        rangeSeparator: " até ",
        time_24hr: !0,
      };
    e.l10ns.pt = t;
    var a = e.l10ns;
    ((r.Portuguese = t), (r.default = a), Object.defineProperty(r, "__esModule", { value: !0 }));
  });
})(s, n);
const d = i(n),
  g = l({ __proto__: null, default: d }, [n]);
export { g as p };
