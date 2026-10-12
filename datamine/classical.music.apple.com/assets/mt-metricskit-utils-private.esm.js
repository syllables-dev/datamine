var b = { setDelegate: !0 };
function ue() {
  b = { setDelegate: !0 };
}
function ie(e) {
  var t = {},
    r = W(e),
    n,
    a;
  for (var o in e)
    ((n = null),
      (a = null),
      r && ((n = e.__lookupGetter__(o)), (a = e.__lookupSetter__(o))),
      n || a ? (n && t.__defineGetter__(o, n), a && t.__defineSetter__(o, a)) : (t[o] = e[o]));
  return t;
}
function p(e) {
  return typeof e < "u";
}
function h(e) {
  return p(e) && e !== null;
}
function se(e) {
  return h(e) && !X(e) && !L(e) && !G(e);
}
function X(e) {
  return k(e) && e.length === 0;
}
function L(e) {
  return I(e) && e.length === 0;
}
function G(e) {
  return g(e) && Object.keys(e).length === 0;
}
function i(e) {
  return typeof e == "function";
}
function E(e) {
  return typeof e == "number";
}
function B(e) {
  return E(e) && e % 1 === 0;
}
function k(e) {
  return typeof e == "string" || e instanceof String;
}
function ce(e) {
  return !!e && e.nodeType == 1;
}
function I(e) {
  return !!e && e.constructor === Array;
}
function g(e) {
  return !!e && e.constructor === Object;
}
function ve(e) {
  var t = [];
  for (var r in e) {
    var n = e[r];
    e.hasOwnProperty(r) && !i(n) && t.push(n);
  }
  return t;
}
function _e(e) {
  var t = [];
  for (var r in e) e.hasOwnProperty(r) && !i(e[r]) && t.push(r);
  return t;
}
function pe(e) {
  for (var t in e) if (e.hasOwnProperty(t)) return !0;
}
function de(e) {
  for (var t in e) if (e.hasOwnProperty(t) && e[t]) return !0;
}
function W(e) {
  return g(e) && i(e.__lookupGetter__) && i(e.__lookupSetter__) && i(e.__defineGetter__) && i(e.__defineSetter__);
}
function he(e) {
  var t = [];
  for (var r in e) {
    var n = e[r];
    e.hasOwnProperty(r) && i(n) && t.push(n);
  }
  return t;
}
function Ee(e) {
  var t = {};
  for (var r in e) e.hasOwnProperty(r) && !i(e[r]) && (t[e[r]] = r);
  return t;
}
function Y(e) {
  var t = [!0, !0, !0].concat(Array.prototype.slice.call(arguments));
  return w.apply(null, t);
}
function w(e, t, r, n) {
  for (var a = r ? n || {} : {}, o, f = 3; f < arguments.length; f++) {
    o = arguments[f];
    for (var l in o)
      if (Object.prototype.hasOwnProperty.call(o, l)) {
        var u = o[l];
        (e || u != null) && (t || typeof u != "function") && (a[l] = u);
      }
  }
  return a;
}
function ye(e) {
  for (var t = 0; t < e.length; t++) {
    var r = e[t];
    b[r] = !0;
  }
}
function z(e, t, r) {
  var n = !1;
  if (((r = r || !1), e && t && e !== t)) {
    var a = {};
    (Object.keys(t).forEach(function (o) {
      e[o] || (a[o] = !0);
    }),
      Y(a, b),
      (n = K(e, t, r ? e : null, a)));
  }
  return n;
}
function K(e, t, r, n) {
  var a = !1;
  if (e && t) {
    ((n = n || {}), (r = r || t));
    var o = function (oe, U, fe, je, le) {
      var A = function () {
        return fe[le].apply(oe, arguments);
      };
      return (U && (A.origFunction = U), (A.attachedMethod = !0), A);
    };
    for (var f in t)
      if (!(f in n) && t[f] && i(t[f])) {
        var l = e[f],
          u = l && i(l),
          c = null;
        (u && (l.attachedMethod === !0 ? (c = l) : (c = l.bind(e))), (e[f] = o(r, c, t, e, f)), (a = !0));
      }
  }
  return a;
}
function F(e) {
  var t = !1;
  for (var r in e)
    if (i(e[r]) && e[r].attachedMethod === !0) {
      var n = e[r].origFunction;
      if (n) for (; e[r].origFunction;) ((e[r] = e[r].origFunction), (t = !0));
      else delete e[r];
    }
  return t;
}
function ge(e, t) {
  var r = {};
  for (var n in e)
    t[n] &&
      i(e[n].setDelegate) &&
      (r[n] = e[n].setDelegate.apply(e[n], [t[n]].concat(Array.prototype.slice.call(arguments, 2))));
  return r;
}
var Ae = function (t) {
  var r = !1;
  for (var n in t) {
    var a = t[n];
    a && typeof a == "object" && i(a.setDelegate) && (r |= F(a));
  }
  return !!r;
};
function me(e, t) {
  var r = null;
  if (e && t && t.setDelegate) {
    var n = {},
      a;
    for (a in e) i(e[a]) && e[a].origFunction && (n[a] = e[a]);
    r = t.setDelegate(n);
  }
  return r;
}
function Se(e, t) {
  var r = {};
  if (e) for (var n = 0; n < e.length; n++) r[e[n]] = 0;
  if (t) for (var a = 0; a < t.length; a++) r[t[a]] = 0;
  return Object.keys(r);
}
function T() {
  return typeof globalThis < "u" ? globalThis : typeof global < "u" ? global : typeof window < "u" ? window : {};
}
var $e = Object.freeze({
    __proto__: null,
    _utResetNonOverridableFunctions: ue,
    shallowClone: ie,
    isDefined: p,
    isDefinedNonNull: h,
    isDefinedNonNullNonEmpty: se,
    isEmptyString: X,
    isEmptyArray: L,
    isEmptyObject: G,
    isFunction: i,
    isNumber: E,
    isInteger: B,
    isString: k,
    isElement: ce,
    isArray: I,
    isObject: g,
    values: ve,
    keys: _e,
    hasAnyKeys: pe,
    hasAnyNonNullKeys: de,
    hasGetterAndSetterMethods: W,
    methods: he,
    invert: Ee,
    extend: Y,
    copyKeysAndValues: w,
    addNonOverrideableFunctions: ye,
    attachMethods: K,
    detachMethods: F,
    attachDelegate: z,
    setDelegates: ge,
    resetDelegates: Ae,
    copyDelegatedFunctions: me,
    dedupedArray: Se,
    globalScope: T,
  }),
  m = { exponential: { maxWait: 1500, initialDelay: 100, factor: 2 } },
  q = function (e, t, r) {
    ((this.delay = e || m.exponential.initialDelay),
      (this.maxWait = E(t) ? t : m.exponential.maxWait),
      (this.factor = r || m.exponential.factor),
      (this.timeWaited = 0));
  };
q.prototype.nextDelay = function () {
  var t = null,
    r = this.maxWait - this.timeWaited;
  return (
    r > 0 && ((this.delay = Math.min(this.delay, r)), (this.timeWaited += this.delay)),
    (this.maxWait === 0 || r > 0) && ((t = this.delay), (this.delay = this.delay * this.factor)),
    t
  );
};
function H(e, t, r, n) {
  var a = function () {
    var f = e.nextDelay();
    f ? setTimeout(H.bind(null, e, t, r, n), f) : n.apply(n, arguments);
  };
  t.call(t, r, a);
}
function xe(e, t, r, n, a, o) {
  var f = new q(n, a, o);
  H(f, e, t, r);
}
var Je = Object.freeze({ __proto__: null, exponentialBackoff: xe });
function Re(e, t, r) {
  var n = void 0;
  if (p(e))
    if ((p(t) || (t = 1024 * 1024), p(r) || (r = 2), E(e) && E(t) && t > 0 && B(r) && r >= 0)) {
      var a = Math.pow(10, r),
        o = e > 0 ? "floor" : "ceil";
      n = Math[o](e / t / a) * a;
    } else n = NaN;
  return n;
}
var Qe = Object.freeze({ __proto__: null, deResNumber: Re }),
  N = "0123456789",
  Oe = N + "ABCDEF",
  j = N + "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  $ = j + "abcdefghijklmnopqrstuvwxy",
  J = $ + "z";
function De(e, t, r) {
  var n = !1;
  return (
    e &&
      t &&
      ((e = e.substr(0, t.length)), r && ((e = e.toLowerCase()), (t = t.toLowerCase())), (n = e.indexOf(t) === 0)),
    n
  );
}
function be(e, t, r) {
  var n = !1;
  if (e && t) {
    r && ((e = e.toLowerCase()), (t = t.toLowerCase()));
    var a = e.length - t.length;
    n = a >= 0 && e.lastIndexOf(t) === a;
  }
  return n;
}
function x(e, t, r) {
  var n = null,
    a = `	
\v\f\r             　\u2028\u2029​`,
    o = new RegExp("^[" + a + "]+"),
    f = new RegExp("[" + a + "]+$");
  if (e)
    if (!r && (!t || t == a) && e.trim) n = e.trim();
    else {
      var l = null,
        u = null,
        c = null;
      t && typeof t < "u"
        ? ((t = t.replace(/([.?*+^$[\]\\(){}-])/g, "\\$1")),
          (l = "[" + t + "]"),
          (u = new RegExp("^" + l + "+")),
          (c = new RegExp(l + "+$")))
        : ((l = a), (u = o), (c = f));
      var _ = e.replace(u, "");
      n = _.replace(c, "");
    }
  return n;
}
function Q(e, t) {
  var r = "";
  if (e)
    for (var n = e.toLowerCase().split("_"), a, o = 0; o < n.length; o++)
      ((a = n[o][0]), (o !== 0 || t) && (a = a.toUpperCase()), (r += a + n[o].slice(1)));
  return r;
}
function Ie(e) {
  return Q(e, !0);
}
function we(e) {
  var t = "",
    r = "",
    n = !0;
  for (var a in e) {
    var o = e[a];
    (o || o === 0 || o === !1) && ((t += r + a + "=" + encodeURIComponent(o)), n && ((r = "&"), (n = !1)));
  }
  return t;
}
function Te(e, t) {
  return (
    "The function " +
    e +
    "." +
    t +
    "() must be overridden with a platform-specific delegate function.If you have no data for this function, have your delegate return null or undefined (no 'return')"
  );
}
function Ne(e, t) {
  var r = null;
  t = t || "\\S+";
  var n = new RegExp("\\b" + t + "/(\\S+)\\b", "i"),
    a = n.exec(e);
  return (a && a[1] && (r = a[1]), r);
}
function Pe(e) {
  var t = "z",
    r = Date.now(),
    n = Math.floor(Math.random() * 1e5);
  return ((r = r.toString(36).toUpperCase()), (n = n.toString(36).toUpperCase()), e + t + r + t + n);
}
function Ce(e) {
  for (var t = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx", r = "", n, a = 0, o = t.length; a < o; a++)
    ((n = t.charAt(a)), n === "x" ? (r += y(e)) : n === "y" ? (r += y(e, "8", "b")) : (r += n));
  return r;
}
function y(e, t, r) {
  var n = T(),
    a = n.crypto || n.msCrypto,
    o;
  return (
    e
      ? (o = ((e() * 16) | 0).toString(16))
      : a && a.getRandomValues
        ? (o = (a.getRandomValues(new Uint8Array(1))[0] & 15).toString(16))
        : a && a.randomBytes
          ? (o = a.randomBytes(1).toString("hex")[0])
          : (o = ((Math.random() * 16) | 0).toString(16)),
    t && r && (o < t || o > r) && (o = y(e, t, r)),
    o
  );
}
function Me(e, t) {
  var r = "",
    n = t.length;
  if (n <= 36) r = e.toString(n).toUpperCase();
  else {
    for (var a, o, f = []; e > 0;) ((a = e % n), (o = t.charAt(a)), f.push(o), (e = (e - a) / n));
    r = f.reverse().join("");
  }
  return (r === "" && (r = "0"), r);
}
function Ue(e) {
  var t;
  if (Math.floor(4294967295 / 256) == 16777215) {
    var r = T(),
      n = r.crypto || r.msCrypto,
      a,
      o,
      f,
      l,
      u;
    if (n && n.getRandomValues)
      ((a = n.getRandomValues(new Uint32Array(16 / Uint32Array.BYTES_PER_ELEMENT))), (u = !0));
    else if (n && n.randomBytes) {
      var c = n.randomBytes(16);
      ((a = new Uint32Array(c.buffer, c.byteOffset, c.byteLength / Uint32Array.BYTES_PER_ELEMENT)), (u = !0));
    } else
      for (a = new Uint32Array(16 / Uint32Array.BYTES_PER_ELEMENT), o = 0; o < a.length; o++)
        a[o] = Math.floor(Math.random() * Math.floor(4294967295));
    if (a) {
      for (t = "", o = 0; o < a.length; o++)
        for (l = a[o], f = 0; f < 6; f++) ((t += J[l % 62]), (l = Math.floor(l / 62)));
      e && (t = "1_" + (u ? "1" : "2") + "_" + t);
    }
  }
  return t;
}
var Ze = Object.freeze({
    __proto__: null,
    base10Alphabet: N,
    base16Alphabet: Oe,
    base36Alphabet: j,
    base61Alphabet: $,
    base62Alphabet: J,
    startsWith: De,
    endsWith: be,
    trim: x,
    snakeCaseToCamelCase: Q,
    snakeCaseToUpperCamelCase: Ie,
    exceptionString: Te,
    paramString: we,
    versionStringFromUserAgent: Ne,
    requestId: Pe,
    uuid: Ce,
    randomHexCharacter: y,
    convertNumberToBaseAlphabet: Me,
    cryptoRandomBase62String: Ue,
  }),
  s = {
    setDelegate: function (t) {
      return z(this, t);
    },
    cookie: function () {
      var t;
      if (typeof window < "u" && "iTunes" in window && "cookie" in iTunes) t = iTunes;
      else if (typeof itms < "u" && p(itms.cookie)) t = itms;
      else if (typeof document < "u") t = document;
      else throw "cookies.cookie: No cookie object available";
      return t.cookie;
    },
    get: function (t) {
      var r = this.getUnescaped(t);
      return (r && (r = unescape(r)), r);
    },
    setUnescaped: function (t, r, n, a, o) {},
    getUnescaped: function (t) {
      var r = null,
        n = this._getRaw();
      if (n && t)
        for (var a = n.split(";"), o = a.length - 1; !r && o >= 0; o--) {
          var f = a[o],
            l = f.indexOf("=");
          if (l > 0)
            if (l + 1 == f.length) r = "";
            else {
              var u = x(f.substring(0, l));
              u == t && (r = x(f.substring(l + 1)));
            }
        }
      return r;
    },
    remove: function (t, r) {
      return this.setUnescaped(t, ".", this.EXPIRE_NOW, null, r);
    },
    _getRaw: function () {
      return this.cookie() || "";
    },
  };
s.EXPIRE_NOW = -1;
s.EXPIRE_SESSION = null;
s.EXPIRE_ONE_SECOND = 1;
s.EXPIRE_ONE_MINUTE = s.EXPIRE_ONE_SECOND * 60;
s.EXPIRE_ONE_HOUR = s.EXPIRE_ONE_MINUTE * 60;
s.EXPIRE_ONE_DAY = s.EXPIRE_ONE_HOUR * 24;
s.EXPIRE_ONE_WEEK = s.EXPIRE_ONE_DAY * 7;
s.EXPIRE_ONE_MONTH = s.EXPIRE_ONE_DAY * 31;
s.EXPIRE_ONE_YEAR = s.EXPIRE_ONE_DAY * 365;
s.EXPIRE_ONE_SIDEREAL_YEAR = s.EXPIRE_ONE_DAY * 365.25;
s.EXPIRE_SIX_MONTHS = s.EXPIRE_ONE_DAY * 180;
var v = {},
  S = {},
  V = function (t) {
    var r = {};
    return (
      typeof t.mtName == "function" &&
        typeof t.mtVersion == "function" &&
        ((r.name = t.mtName()), (r.version = t.mtVersion())),
      r
    );
  },
  R = function (t) {
    var r;
    return (typeof t.mtName == "function" && typeof t.mtVersion == "function" && (r = t.mtName() + t.mtVersion()), r);
  };
function Ve(e, t) {
  var r = R(e),
    n = R(t);
  r &&
    n &&
    (v[n] || (v[n] = V(t)),
    v[r] || ((v[r] = V(e)), (S[r] = {})),
    v[r].delegates ? S[r][n] || v[r].delegates.push(v[n]) : (v[r].delegates = [v[n]]),
    (S[r][n] = !0));
}
function Xe(e) {
  return v[R(e)];
}
var et = Object.freeze({ __proto__: null, storeDelegateInfo: Ve, getStoredDelegateObject: Xe });
function Z(e, t, r) {
  var n = t;
  if (e && t)
    for (var a = e.split("."), o = 0; n && o < a.length; o++) {
      var f = a[o];
      (!(f in n) && r && (n[f] = {}), f in n ? (n = n[f]) : (n = null));
    }
  return n;
}
function O(e) {
  var t = null;
  if (e && arguments.length > 1)
    for (var r = ee(Array.prototype.slice.call(arguments, 1)), n = r.length - 1; n >= 0; n--) {
      var a = r[n];
      if (((t = Z(e, a)), h(t))) break;
    }
  return t;
}
function Le(e, t) {
  return Z(e, t, !0);
}
function ee(e) {
  var t = [],
    r = [];
  ((r = r.concat(e)), arguments && arguments.length > 1 && (r = r.concat(Array.prototype.slice.call(arguments, 1))));
  for (var n = 0; n < r.length; n++) {
    var a = r[n];
    t = t.concat(a);
  }
  return t;
}
var tt = Object.freeze({ __proto__: null, valueForKeyPath: O, createObjectAtKeyPath: Le, sourcesArray: ee });
function D(e) {
  for (var t = [!1, !1, !1].concat(Array.prototype.slice.call(arguments)), r = [], n = 0; n < t.length; n++) {
    var a = t[n];
    if (a && a.constructor === Array) for (var o = 0; o < a.length; o++) r.push(a[o]);
    else r.push(a);
  }
  return w.apply(null, r);
}
function Ge(e, t, r, n) {
  var a = D(n),
    o = a;
  if (e && t) {
    var f = {};
    if (
      (r ||
        (t = t.filter(function (_) {
          return _ in a;
        })),
      t.length)
    )
      for (var l = 0; l < t.length; l++) {
        var u = t[l],
          c = e[u];
        i(c) && (f[u] = c.call(e, a));
      }
    o = D(o, f);
  }
  return o;
}
function Be(e, t, r, n) {
  var a, o, f;
  if (e && t && r)
    if (((o = {}), (a = O(t, r, r.custom)), a)) {
      var l, u;
      if (I(a)) for (l = 0; l < a.length; ++l) ((u = e[a[l]]), h(u) && (o[a[l]] = u));
      else if (g(a)) {
        for (var c in a)
          for (l = 0; l < a[c].length; ++l)
            if (((u = O(a[c][l], e)), h(u))) {
              o[c] = u;
              break;
            }
      } else f = "metrics: incorrect data type provided to applyFieldsMap (only accepts objects and Arrays)";
    } else f = "metrics: unable to get " + t + " section from fieldsMap";
  else {
    var _ = [];
    (e || _.push("data"),
      t || _.push("sectionName"),
      r || _.push("fieldsMap"),
      (f = "metrics: missing argument(s): " + _.join(",") + " not provided to applyFieldsMap"));
  }
  return (f && i(n) && n(f), o);
}
var rt = Object.freeze({ __proto__: null, mergeAndCleanEventFields: D, processMetricsData: Ge, applyFieldsMap: Be });
function ke(e, t, r) {
  te(e, "GET", null, t, r);
}
function te(e, t, r, n, a, o) {
  var f = new XMLHttpRequest();
  ((r = r || void 0), (o = o || {}), (n = i(n) ? n : function () {}), (a = i(a) ? a : function () {}));
  var l = o.async !== !1;
  (o.timeout && l && (f.timeout = o.timeout),
    (f.onload = function () {
      f.status >= 200 && f.status < 300
        ? n(f.response)
        : a(new Error("XHR error: server responded with status " + f.status + " " + f.statusText), f.status);
    }),
    (f.onerror = function () {
      a(new Error("XHR error"));
    }),
    f.open(t, e, l),
    (f.withCredentials = typeof o.withCredentials == "boolean" ? o.withCredentials : !0),
    f.setRequestHeader("Content-type", "application/json"),
    f.send(r));
}
var nt = Object.freeze({ __proto__: null, makeAjaxGetRequest: ke, makeAjaxRequest: te }),
  d = {},
  re = function (t) {
    d[t] && (clearTimeout(d[t]), (d[t] = null));
  };
function We() {
  for (var e in d) re(e);
}
function P(e) {
  return Math.random() < e;
}
function ne(e, t, r) {
  var n;
  if (d[e]) n = !0;
  else {
    var a = P(t);
    (a && r > 0 && (d[e] = setTimeout(re.bind(null, e), r)), (n = a));
  }
  return n;
}
function Ye(e, t, r, n, a) {
  return t || ne(e, r, n) || P(a);
}
var at = Object.freeze({ __proto__: null, _utClearSessions: We, lottery: P, sessionSampled: ne, isSampledIn: Ye }),
  C = { STORAGE_TYPE: { LOCAL_STORAGE: "localStorage", SESSION_STORAGE: "sessionStorage" } },
  ae = function (t) {
    var r = null,
      n = !1;
    return function () {
      return (
        t
          ? (r = t)
          : (n ||
              (console.error(
                "storageObject: storage object not found. Override this function if there is a platform-specific implementation",
              ),
              (n = !0)),
            r ||
              (r = {
                storage: {},
                getItem: function (a) {
                  return this.storage[a];
                },
                setItem: function (a, o) {
                  this.storage[a] = o;
                },
                removeItem: function (a) {
                  delete this.storage[a];
                },
              })),
        r
      );
    };
  };
function M(e) {
  var t = null,
    r = null,
    n = e === C.STORAGE_TYPE.LOCAL_STORAGE;
  try {
    ((r = n ? typeof localStorage : typeof sessionStorage),
      r !== "undefined" ? (t = n ? localStorage : sessionStorage) : (t = null));
  } catch (a) {
    ((t = null), console.error("_utils.storage._defaultStorageObject: Unable to retrieve storage object: " + a));
  }
  return t;
}
function ze(e) {
  return M(e);
}
var Ke = ae(M(C.STORAGE_TYPE.LOCAL_STORAGE)),
  Fe = ae(M(C.STORAGE_TYPE.SESSION_STORAGE));
function qe(e, t, r) {
  var n = null;
  if (r)
    try {
      (e.setItem(t, JSON.stringify(r)), (n = r));
    } catch {}
  else n = e.removeItem(t);
  return n;
}
function He(e, t) {
  var r = null,
    n = e.getItem(t);
  if (n)
    try {
      r = JSON.parse(n);
    } catch {
      r = void 0;
    }
  return r;
}
var ot = Object.freeze({
  __proto__: null,
  _utDefaultStorageObject: ze,
  localStorageObject: Ke,
  sessionStorageObject: Fe,
  saveObjectToStorage: qe,
  objectFromStorage: He,
});
export { ot as a, Qe as b, s as c, et as d, rt as e, Je as f, at as g, tt as k, nt as n, $e as r, Ze as s };
