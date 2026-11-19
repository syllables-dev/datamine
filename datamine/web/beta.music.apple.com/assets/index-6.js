import { aR as T, Y as q } from "./main.js";
function I(h, C) {
  for (var l = 0; l < C.length; l++) {
    const s = C[l];
    if (typeof s != "string" && !Array.isArray(s)) {
      for (const u in s)
        if (u !== "default" && !(u in h)) {
          const d = Object.getOwnPropertyDescriptor(s, u);
          d && Object.defineProperty(h, u, d.get ? d : { enumerable: !0, get: () => s[u] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(h, Symbol.toStringTag, { value: "Module" }));
}
var O = { exports: {} };
(function (h, C) {
  (function (l, s) {
    h.exports = s();
  })(q, function () {
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
              for (var e, o = 1, b = arguments.length; o < b; o++) {
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
    function d(i) {
      try {
        if (typeof i.composedPath == "function") {
          var a = i.composedPath();
          return a[0];
        }
        return i.target;
      } catch {
        return i.target;
      }
    }
    var E = { shorthand: !1, dateFormat: "F Y", altFormat: "F Y", theme: "light" };
    function F(i) {
      var a = l(l({}, E), i);
      return function (e) {
        ((e.config.dateFormat = a.dateFormat), (e.config.altFormat = a.altFormat));
        var o = { monthsContainer: null };
        function b() {
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
                r.addEventListener("click", M),
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
        function j() {
          (e._bind(e.prevMonthNav, "click", function (t) {
            (t.preventDefault(), t.stopPropagation(), e.changeYear(e.currentYear - 1), y(), g());
          }),
            e._bind(e.nextMonthNav, "click", function (t) {
              (t.preventDefault(), t.stopPropagation(), e.changeYear(e.currentYear + 1), y(), g());
            }),
            e._bind(o.monthsContainer, "mouseover", function (t) {
              e.config.mode === "range" && e.onMouseOver(d(t), "flatpickr-monthSelect-month");
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
        function y() {
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
        function M(t) {
          (t.preventDefault(), t.stopPropagation());
          var n = d(t);
          if (
            n instanceof Element &&
            !n.classList.contains("flatpickr-disabled") &&
            !n.classList.contains("notAllowed") &&
            (_(n.dateObj), e.config.closeOnSelect)
          ) {
            var r = e.config.mode === "single",
              c = e.config.mode === "range" && e.selectedDates.length === 2;
            (r || c) && e.close();
          }
        }
        function _(t) {
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
        var k = { 37: -1, 39: 1, 40: 3, 38: -3 };
        function L(t, n, r, c) {
          var v = k[c.keyCode] !== void 0;
          if (!(!v && c.keyCode !== 13) && !(!e.rContainer || !o.monthsContainer)) {
            var A = e.rContainer.querySelector(".flatpickr-monthSelect-month.selected"),
              D = Array.prototype.indexOf.call(o.monthsContainer.children, document.activeElement);
            if (D === -1) {
              var Y = A || o.monthsContainer.firstElementChild;
              (Y.focus(), (D = Y.$i));
            }
            v
              ? o.monthsContainer.children[(12 + D + k[c.keyCode]) % 12].focus()
              : c.keyCode === 13 &&
                o.monthsContainer.contains(document.activeElement) &&
                _(document.activeElement.dateObj);
          }
        }
        function S() {
          var t;
          (((t = e.config) === null || t === void 0 ? void 0 : t.mode) === "range" &&
            e.selectedDates.length === 1 &&
            e.clear(!1),
            e.selectedDates.length || g());
        }
        function P() {
          ((a._stubbedCurrentMonth = e._initialDate.getMonth()),
            e._initialDate.setMonth(a._stubbedCurrentMonth),
            (e.currentMonth = a._stubbedCurrentMonth));
        }
        function w() {
          a._stubbedCurrentMonth &&
            (e._initialDate.setMonth(a._stubbedCurrentMonth),
            (e.currentMonth = a._stubbedCurrentMonth),
            delete a._stubbedCurrentMonth);
        }
        function N() {
          if (o.monthsContainer !== null)
            for (var t = o.monthsContainer.querySelectorAll(".flatpickr-monthSelect-month"), n = 0; n < t.length; n++)
              t[n].removeEventListener("click", M);
        }
        return {
          onParseConfig: function () {
            e.config.enableTime = !1;
          },
          onValueUpdate: f,
          onKeyDown: L,
          onReady: [
            P,
            b,
            m,
            j,
            f,
            function () {
              (e.config.onClose.push(S), e.loadedPlugins.push("monthSelect"));
            },
          ],
          onDestroy: [
            w,
            N,
            function () {
              e.config.onClose = e.config.onClose.filter(function (t) {
                return t !== S;
              });
            },
          ],
        };
      };
    }
    return F;
  });
})(O);
var x = O.exports;
const K = T(x),
  U = I({ __proto__: null, default: K }, [x]);
export { U as i };
