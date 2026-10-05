import { Z as A } from "./main.js";
function T(d, b) {
  for (var l = 0; l < b.length; l++) {
    const s = b[l];
    if (typeof s != "string" && !Array.isArray(s)) {
      for (const u in s)
        if (u !== "default" && !(u in d)) {
          const h = Object.getOwnPropertyDescriptor(s, u);
          h && Object.defineProperty(d, u, h.get ? h : { enumerable: !0, get: () => s[u] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(d, Symbol.toStringTag, { value: "Module" }));
}
var C = {},
  q = {
    get exports() {
      return C;
    },
    set exports(d) {
      C = d;
    },
  };
(function (d, b) {
  (function (l, s) {
    d.exports = s();
  })(A, function () {
    /*! *****************************************************************************
	    Copyright (c) Microsoft Corporation.

	    Permission to use, copy, modify, and/or distribute this software for any
	    purpose with or without fee is hereby granted.

	    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
	    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
	    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
	    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
	    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
	    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
	    PERFORMANCE OF THIS SOFTWARE.
	    ***************************************************************************** */ var l = function () {
        return (
          (l =
            Object.assign ||
            function (a) {
              for (var e, o = 1, D = arguments.length; o < D; o++) {
                e = arguments[o];
                for (var m in e) Object.prototype.hasOwnProperty.call(e, m) && (a[m] = e[m]);
              }
              return a;
            }),
          l.apply(this, arguments)
        );
      },
      s = function (i, a, e) {
        return e.months[a ? "shorthand" : "longhand"][i];
      };
    function u(i) {
      for (; i.firstChild;) i.removeChild(i.firstChild);
    }
    function h(i) {
      try {
        if (typeof i.composedPath == "function") {
          var a = i.composedPath();
          return a[0];
        }
        return i.target;
      } catch (e) {
        return i.target;
      }
    }
    var E = { shorthand: !1, dateFormat: "F Y", altFormat: "F Y", theme: "light" };
    function F(i) {
      var a = l(l({}, E), i);
      return function (e) {
        ((e.config.dateFormat = a.dateFormat), (e.config.altFormat = a.altFormat));
        var o = { monthsContainer: null };
        function D() {
          if (e.rContainer) {
            u(e.rContainer);
            for (var t = 0; t < e.monthElements.length; t++) {
              var n = e.monthElements[t];
              n.parentNode && n.parentNode.removeChild(n);
            }
          }
        }
        function m() {
          e.rContainer &&
            ((o.monthsContainer = e._createElement("div", "flatpickr-monthSelect-months")),
            (o.monthsContainer.tabIndex = -1),
            g(),
            e.rContainer.appendChild(o.monthsContainer),
            e.calendarContainer.classList.add("flatpickr-monthSelect-theme-" + a.theme));
        }
        function g() {
          if (o.monthsContainer) {
            u(o.monthsContainer);
            for (var t = document.createDocumentFragment(), n = 0; n < 12; n++) {
              var r = e.createDay("flatpickr-monthSelect-month", new Date(e.currentYear, n), 0, n);
              (r.dateObj.getMonth() === new Date().getMonth() &&
                r.dateObj.getFullYear() === new Date().getFullYear() &&
                r.classList.add("today"),
                (r.textContent = s(n, a.shorthand, e.l10n)),
                r.addEventListener("click", _),
                t.appendChild(r));
            }
            (o.monthsContainer.appendChild(t),
              e.config.minDate && e.currentYear === e.config.minDate.getFullYear()
                ? e.prevMonthNav.classList.add("flatpickr-disabled")
                : e.prevMonthNav.classList.remove("flatpickr-disabled"),
              e.config.maxDate && e.currentYear === e.config.maxDate.getFullYear()
                ? e.nextMonthNav.classList.add("flatpickr-disabled")
                : e.nextMonthNav.classList.remove("flatpickr-disabled"));
          }
        }
        function x() {
          (e._bind(e.prevMonthNav, "click", function (t) {
            (t.preventDefault(), t.stopPropagation(), e.changeYear(e.currentYear - 1), M(), g());
          }),
            e._bind(e.nextMonthNav, "click", function (t) {
              (t.preventDefault(), t.stopPropagation(), e.changeYear(e.currentYear + 1), M(), g());
            }),
            e._bind(o.monthsContainer, "mouseover", function (t) {
              e.config.mode === "range" && e.onMouseOver(h(t), "flatpickr-monthSelect-month");
            }));
        }
        function f() {
          if (e.rContainer && e.selectedDates.length) {
            for (
              var t = e.rContainer.querySelectorAll(".flatpickr-monthSelect-month.selected"), n = 0;
              n < t.length;
              n++
            )
              t[n].classList.remove("selected");
            var r = e.selectedDates[0].getMonth(),
              c = e.rContainer.querySelector(".flatpickr-monthSelect-month:nth-child(" + (r + 1) + ")");
            c && c.classList.add("selected");
          }
        }
        function M() {
          var t = e.selectedDates[0];
          if (
            (t &&
              ((t = new Date(t)),
              t.setFullYear(e.currentYear),
              e.config.minDate && t < e.config.minDate && (t = e.config.minDate),
              e.config.maxDate && t > e.config.maxDate && (t = e.config.maxDate),
              (e.currentYear = t.getFullYear())),
            (e.currentYearElement.value = String(e.currentYear)),
            e.rContainer)
          ) {
            var n = e.rContainer.querySelectorAll(".flatpickr-monthSelect-month");
            n.forEach(function (r) {
              (r.dateObj.setFullYear(e.currentYear),
                (e.config.minDate && r.dateObj < e.config.minDate) || (e.config.maxDate && r.dateObj > e.config.maxDate)
                  ? r.classList.add("flatpickr-disabled")
                  : r.classList.remove("flatpickr-disabled"));
            });
          }
          f();
        }
        function _(t) {
          (t.preventDefault(), t.stopPropagation());
          var n = h(t);
          if (
            n instanceof Element &&
            !n.classList.contains("flatpickr-disabled") &&
            !n.classList.contains("notAllowed") &&
            (k(n.dateObj), e.config.closeOnSelect)
          ) {
            var r = e.config.mode === "single",
              c = e.config.mode === "range" && e.selectedDates.length === 2;
            (r || c) && e.close();
          }
        }
        function k(t) {
          var n = new Date(e.currentYear, t.getMonth(), t.getDate()),
            r = [];
          switch (e.config.mode) {
            case "single":
              r = [n];
              break;
            case "multiple":
              r.push(n);
              break;
            case "range":
              e.selectedDates.length === 2
                ? (r = [n])
                : ((r = e.selectedDates.concat([n])),
                  r.sort(function (c, v) {
                    return c.getTime() - v.getTime();
                  }));
              break;
          }
          (e.setDate(r, !0), f());
        }
        var S = { 37: -1, 39: 1, 40: 3, 38: -3 };
        function j(t, n, r, c) {
          var v = S[c.keyCode] !== void 0;
          if (!(!v && c.keyCode !== 13) && !(!e.rContainer || !o.monthsContainer)) {
            var N = e.rContainer.querySelector(".flatpickr-monthSelect-month.selected"),
              y = Array.prototype.indexOf.call(o.monthsContainer.children, document.activeElement);
            if (y === -1) {
              var O = N || o.monthsContainer.firstElementChild;
              (O.focus(), (y = O.$i));
            }
            v
              ? o.monthsContainer.children[(12 + y + S[c.keyCode]) % 12].focus()
              : c.keyCode === 13 &&
                o.monthsContainer.contains(document.activeElement) &&
                k(document.activeElement.dateObj);
          }
        }
        function Y() {
          var t;
          (((t = e.config) === null || t === void 0 ? void 0 : t.mode) === "range" &&
            e.selectedDates.length === 1 &&
            e.clear(!1),
            e.selectedDates.length || g());
        }
        function L() {
          ((a._stubbedCurrentMonth = e._initialDate.getMonth()),
            e._initialDate.setMonth(a._stubbedCurrentMonth),
            (e.currentMonth = a._stubbedCurrentMonth));
        }
        function P() {
          a._stubbedCurrentMonth &&
            (e._initialDate.setMonth(a._stubbedCurrentMonth),
            (e.currentMonth = a._stubbedCurrentMonth),
            delete a._stubbedCurrentMonth);
        }
        function w() {
          if (o.monthsContainer !== null)
            for (var t = o.monthsContainer.querySelectorAll(".flatpickr-monthSelect-month"), n = 0; n < t.length; n++)
              t[n].removeEventListener("click", _);
        }
        return {
          onParseConfig: function () {
            e.config.enableTime = !1;
          },
          onValueUpdate: f,
          onKeyDown: j,
          onReady: [
            L,
            D,
            m,
            x,
            f,
            function () {
              (e.config.onClose.push(Y), e.loadedPlugins.push("monthSelect"));
            },
          ],
          onDestroy: [
            P,
            w,
            function () {
              e.config.onClose = e.config.onClose.filter(function (t) {
                return t !== Y;
              });
            },
          ],
        };
      };
    }
    return F;
  });
})(q);
const I = C,
  U = T({ __proto__: null, default: I }, [C]);
export { U as i };
