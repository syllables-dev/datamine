import { a as m, s as S, r as s, e as Ce } from "./mt-metricskit-utils-private.esm.js";
import { l as je } from "./mt-client-logger-core.esm.js";
var D = function () {};
D.prototype.setDelegate = function (e) {
  return s.attachDelegate(this, e);
};
D.prototype.localStorageObject = m.localStorageObject;
D.prototype.sessionStorageObject = m.sessionStorageObject;
D.prototype.platformIdentifier = function (e, t, r) {};
var Me = function () {
  ((this.environment = new D()), (this.logger = je("mt-client-constraints")));
};
function J(n, e, t, r) {
  if (!s.isDefined(n) || !s.isDefinedNonNullNonEmpty(e) || !s.isFunction(r)) return n;
  var i = e.split(".");
  return X(n, i, null, [], null, t, r);
}
function X(n, e, t, r, i, o, a) {
  if (s.isFunction(n)) return i || n;
  if ((r.push(t), e.length === 0)) return (a(n, t, r.slice(1).join("."), i), i || n);
  if (!s.isDefined(n)) return i || n;
  var c = o ? n : {},
    u = e.shift();
  if (u.length > 2 && u.indexOf("[]") === u.length - 2) {
    ((u = u.slice(0, -2)), r.push(u), s.extend(c, n));
    var l = c[u];
    if (s.isDefinedNonNull(l)) {
      var h = l.map(function (v, A) {
        var V = o ? l : l.slice();
        return (X(v, e.slice(), A, r, V, o, a), r.pop(), V[A]);
      });
      c[u] = h;
    }
  } else {
    var d = n[u];
    (s.extend(c, n), (c = X(d, e, u, r, c, o, a)));
  }
  return (r.pop(), i ? ((i[t] = c), i) : c);
}
var ie = {
  all: {
    initMatchValue: !0,
    accumulateMatchResult: function (n, e) {
      return n && e;
    },
  },
  any: {
    initMatchValue: !1,
    accumulateMatchResult: function (n, e) {
      return n || e;
    },
  },
};
function Le(n) {
  var e = ie[n];
  return (s.isDefinedNonNull(e) || (e = ie.all), e);
}
function Ke(n, e, t) {
  if (!s.isObject(e) || !s.isObject(t)) return !1;
  var r = t.matchType,
    i = t.matches;
  if (!s.isDefinedNonNullNonEmpty(i)) return !1;
  var o = Le(r),
    a = o.initMatchValue;
  return (
    J(e, n, !1, function (c, u, l, h) {
      var d = Object.keys(i).every(function (v) {
        var A = i[v];
        return s.isDefinedNonNull(I[v]) ? I[v](u, h, A) : !1;
      });
      a = o.accumulateMatchResult(a, d);
    }),
    !!a
  );
}
function Ge(n, e) {
  return !!s.isObject(e) && e.hasOwnProperty(n) && s.isDefinedNonNullNonEmpty(e[n]);
}
function Ue(n, e, t) {
  if (!s.isObject(e)) return !1;
  var r = e[n];
  return e.hasOwnProperty(n) && t.indexOf(r) > -1;
}
function Be(n, e, t) {
  if (!s.isObject(e) || !s.isArray(t)) return !1;
  var r = e[n];
  return e.hasOwnProperty(n) && t.indexOf(r) === -1;
}
var I = { nonEmpty: Ge, valueMatches: Ue, nonValueMatches: Be, nestedFieldMatches: Ke },
  j = { OVERRIDE_FIELD_VALUE: "overrideFieldValue" },
  Q = function () {};
Q.prototype.constrainedValue = function (e, t, r) {
  var i = e && e.hasOwnProperty(r) ? e[r] : null;
  return this.applyConstraintRules(i, t);
};
Q.prototype.applyConstraintRules = function (e, t) {
  var r = e;
  if (t) {
    var i = t.denylisted || t.blacklisted;
    i ? (r = null) : t.hasOwnProperty(j.OVERRIDE_FIELD_VALUE) && (r = t.overrideFieldValue);
  }
  return r;
};
var He = S.exceptionString,
  y = function (e) {
    this._constraintsInstance = e;
  };
y.prototype.setDelegate = function (e) {
  return s.attachDelegate(this, e);
};
y.prototype.constrainedValue = function (e, t, r, i) {
  throw He("field_actions.Base", "constrainedValue");
};
y.prototype.performAction = function (e, t, r, i) {
  return (s.isDefinedNonNull(i) && !s.isEmptyObject(i) && (e = this.constrainedValue(e, i, r, t)), e);
};
function ue(n) {
  n = n || "";
  var e = fe(n).split("/"),
    t,
    r,
    i;
  return (
    n.indexOf("//") === -1 ? (t = e[0]) : (t = e[2]), (r = t.substring(t.indexOf("@") + 1)), (i = r.split(":")[0]), i
  );
}
function ke(n) {
  var e = ue(n).split("."),
    t = e[e.length - 1],
    r = e[e.length - 2],
    i = 2;
  return (t && t.length === 2 && r && (r.length === 2 || r in ze()) && (i = 3), e.slice(-1 * i).join("."));
}
function ze() {
  var n = { com: !0, org: !0, net: !0, edu: !0, gov: !0 };
  return n;
}
function fe(n, e) {
  var t = n || "",
    r = t.split("?"),
    i = r[0],
    o = $e(r[1]).split("&"),
    a = o
      .filter(function (c) {
        var u = c.split("="),
          l = u[0],
          h = u[1];
        return s.isArray(e)
          ? e.indexOf(l) !== -1
          : s.isObject(e)
            ? s.isObject(e[l]) && s.isArray(e[l].allowedValues) && e[l].allowedValues.indexOf(h) !== -1
            : !1;
      })
      .join("&");
  return a.length > 0 ? i + "?" + a : i;
}
function $e(n) {
  var e = n || "";
  return e.split("#")[0];
}
function Ye(n, e) {
  var t = n || "",
    r = e || [],
    i = r.reduce(function (o, a) {
      var c = new RegExp(a.searchPattern, a.flags),
        u = a.replaceVal;
      return o.replace(c, u);
    }, t);
  return i;
}
var R = "-",
  qe = "z";
function le(n) {
  if (!s.isDefinedNonNull(n) || !s.isInteger(n.idVersion)) return "0";
  var e = S.uuid(),
    t = n.generatedIdSeparator || qe,
    r = We(n) + R + e || "",
    i = r
      .split(R)
      .map(function (o) {
        var a = parseInt(o, 16);
        return S.convertNumberToBaseAlphabet(a, S.base61Alphabet);
      })
      .join(t);
  return i;
}
function We(n) {
  var e = [n.idVersion];
  return (
    n.time && e.push(n.time),
    e
      .map(function (t) {
        return t.toString(16);
      })
      .join(R)
  );
}
function pe(n, e, t, r) {
  var i = this.storageKey(r, t, e),
    o = this._constraintsInstance.system.environment,
    a = m.objectFromStorage(o.localStorageObject(), i) || {};
  return (
    (a.value = this.idString(a, e)),
    this.rulesHaveLifespan(e) &&
      (!s.isNumber(a.expirationTime) || this.timeExpired(a.expirationTime)) &&
      (a.expirationTime = this.expirationTime(e.lifespan)),
    m.saveObjectToStorage(o.localStorageObject(), i, a),
    (n = a.value),
    n
  );
}
var oe = {};
function Je(n, e, t, r) {
  var i = this.storageKey(r, t, e),
    o = oe[i];
  return (o || ((o = pe.apply(this, arguments)), (oe[i] = o)), o);
}
var ee = "_",
  Xe = "mtId",
  p = function () {
    y.apply(this, arguments);
  };
p.prototype = Object.create(y.prototype);
p.prototype.constructor = p;
p.prototype.SCOPE_STRATEGIES = { ALL: "all", MAIN_DOMAIN: "mainDomain" };
p.prototype.rulesHaveLifespan = function (e) {
  return ((e = e || {}), s.isNumber(e.lifespan));
};
p.prototype.expirationTime = function (e) {
  return e ? Date.now() + e : null;
};
p.prototype.storageKey = function (e, t, r) {
  var i = this.scope(t, r);
  return this.storageKeyPrefix(r, e) + (i ? ee + i : "");
};
p.prototype.storageKeyPrefix = function (e, t) {
  return e && s.isString(e.storageKeyPrefix) && e.storageKeyPrefix.length > 0 ? e.storageKeyPrefix : Xe + ee + t;
};
p.prototype.scope = function (e, t) {
  var r = "";
  if (t && (t.namespace && (r += t.namespace), t.scopeStrategy)) {
    var i;
    switch (t.scopeStrategy) {
      case this.SCOPE_STRATEGIES.MAIN_DOMAIN:
        var o = t.scopeFieldName;
        i = ke(e[o]) || "unknownDomain";
        break;
      case this.SCOPE_STRATEGIES.ALL:
      default:
        i = this.SCOPE_STRATEGIES.ALL;
        break;
    }
    (r.length && (r += ee), (r += i));
  }
  return r;
};
p.prototype.idString = function (e, t) {
  var r = e ? e.value : null,
    i = r;
  return ((!r || (s.isNumber(e.expirationTime) && this.timeExpired(e.expirationTime))) && (i = this.generateId(t)), i);
};
p.prototype.generateId = function (e) {
  return (
    (e = e || {}),
    le({
      idVersion: this.generatedIdVersion(),
      time: this.expirationTime(e.lifespan),
      generatedIdSeparator: this.generatedIdSeparator(e.tokenSeparator),
    })
  );
};
p.prototype.generatedIdVersion = function () {
  return 4;
};
p.prototype.idTokenSeparator = function () {
  return "-";
};
p.prototype.generatedIdSeparator = function (e) {
  return e || "z";
};
p.prototype.timeExpired = function (e) {
  return e <= Date.now();
};
p.prototype.constrainedValue = function (e, t, r, i) {
  return (
    r &&
      t &&
      !s.isEmptyObject(t) &&
      (t.persistIdForSession === !0 ? (e = Je.apply(this, arguments)) : (e = pe.apply(this, arguments))),
    e
  );
};
var he = function (e, t) {
  ((this._base = e),
    (this._idAction = new p(t)),
    this._idAction.setDelegate({
      storageKey: function (i, o, a) {
        return this.storageKeyPrefix() + "_" + this.scope(o, a);
      }.bind(this._idAction),
      storageKeyPrefix: function () {
        return "mtClientId";
      },
    }));
};
he.prototype.constrainedValue = function (e, t) {
  var r = t;
  t &&
    s.isNumber(t.expirationPeriod) &&
    ((r = s.extend({}, t)), (r.lifespan = r.expirationPeriod), delete r.expirationPeriod);
  var i = e ? e.clientId : null,
    o = this._idAction.performAction(i, "clientId", e, r);
  return this._base.applyConstraintRules(o, t);
};
var O = function () {
  y.apply(this, arguments);
};
O.prototype = Object.create(y.prototype);
O.prototype.constructor = O;
O.prototype.SCOPES = {
  HOSTNAME: "hostname",
  FULL: "full",
  FULL_WITHOUT_PARAMS: "fullWithoutParams",
  FULL_WITH_REPLACEMENTS: "fullWithReplacements",
};
O.prototype.constrainedValue = function (e, t) {
  if (e && t && t.scope)
    switch (t.scope) {
      case this.SCOPES.HOSTNAME:
        e = ue(e);
        break;
      case this.SCOPES.FULL_WITHOUT_PARAMS:
        e = fe(e, t.allowedParams);
        break;
      case this.SCOPES.FULL_WITH_REPLACEMENTS:
        e = Ye(e, t.replacements);
        break;
      case this.SCOPES.FULL:
    }
  return e;
};
var ve = function (e) {
  ((this._base = e), (this._urlAction = new O()));
};
ve.prototype.constrainedValue = function (e, t) {
  var r = e ? e.parentPageUrl : null,
    i = this._urlAction.performAction(r, "parentPageUrl", e, t);
  return this._base.applyConstraintRules(i, t);
};
var Re = function (n) {
    ((this.base = new Q()), (this.clientId = new he(this.base, n)), (this.parentPageUrl = new ve(this.base)));
  },
  te = function (e) {
    this._fieldHandlers = new Re(e);
  };
te.prototype.applyConstraints = function (e, t) {
  return (t && t.fieldConstraints && (e = this.applyFieldConstraints(e, t.fieldConstraints)), e);
};
te.prototype.applyFieldConstraints = function (e, t) {
  if (t) {
    var r = {},
      i,
      o,
      a;
    for (a in t)
      ((o = t[a]),
        (e.hasOwnProperty(a) || o.generateValue === !0 || o.hasOwnProperty(j.OVERRIDE_FIELD_VALUE)) &&
          (a in this._fieldHandlers
            ? (i = this._fieldHandlers[a].constrainedValue(e, o))
            : (i = this._fieldHandlers.base.constrainedValue(e, o, a)),
          (r[a] = i)));
    for (a in r) e[a] = r[a];
    e = Ce.mergeAndCleanEventFields(e);
  }
  return e;
};
function me(n, e, t, r) {
  var i = n || {};
  if (
    ((r =
      r ||
      function (l, h, d) {
        return l[d] || {};
      }),
    e && e[t])
  ) {
    var o,
      a,
      c = i[t] || {};
    i[t] = c;
    for (o in e[t]) {
      var u = r(c, e[t], o);
      c[o] = u;
      for (a in e[t][o]) u[a] = e[t][o][a];
    }
  }
  return i;
}
var P = function (e) {
  this.treatment = new te(e);
};
P.prototype.constraintsForEvent = function (e, t, r) {
  if (!t) return Promise.resolve(null);
  var i = this;
  return Promise.resolve(t.constraintProfile(r))
    .then(function (o) {
      if (!o) return null;
      var a = "constraints.profiles." + o;
      return t.value(a, r);
    })
    .then(function (o) {
      var a = null;
      return (
        o &&
          o.precedenceOrderedRules &&
          (a = o.precedenceOrderedRules.reduce(function (c, u) {
            return (i.eventMatchesRule(e, u) && (c = i.updateRules(c, u)), c);
          }, {})),
        a
      );
    });
};
P.prototype.eventMatchesRule = function (e, t) {
  var r = !1;
  return (
    e &&
      t.filters &&
      (t.filters === "any"
        ? (r = !0)
        : s.isObject(t.filters) &&
          (r =
            this.eventMatchesNonEmptyFields(e, t.filters.nonEmptyFields) &&
            this.eventMatchesFieldValues(e, t.filters.valueMatches))),
    r
  );
};
P.prototype.eventMatchesNonEmptyFields = function (e, t) {
  var r = !1;
  return (
    e &&
      (!t || !s.isArray(t)
        ? (r = !0)
        : (r = t.every(function (i) {
            return I.nonEmpty(i, e);
          }))),
    r
  );
};
P.prototype.eventMatchesFieldValues = function (e, t) {
  var r = !1;
  return (
    e &&
      (!t || !s.isObject(t) || s.isEmptyObject(t)
        ? (r = !0)
        : (r = Object.keys(t).every(function (i) {
            var o = t[i];
            return I.valueMatches(i, e, o);
          }))),
    r
  );
};
P.prototype.updateRules = function (e, t) {
  return me(e, t, "fieldConstraints");
};
var de = function () {};
de.prototype.performAction = function (e, t, r) {
  return r !== !0 ? e : null;
};
var ye = function () {};
ye.prototype.performAction = function (e, t, r) {
  return !e || !s.isArray(r) || s.isEmptyArray(r)
    ? e
    : ((e = s.extend({}, e)),
      r.forEach(function (i) {
        delete e[i];
      }),
      s.isEmptyObject(e) ? null : e);
};
var _e = function () {};
_e.prototype.performAction = function (e, t, r) {
  if (!e || !s.isArray(r) || s.isEmptyArray(r)) return e;
  var i = {};
  return (
    r.forEach(function (o) {
      s.isDefinedNonNull(e[o]) && (i[o] = e[o]);
    }),
    s.isEmptyObject(i) ? null : i
  );
};
var Ze = "mtSessionization",
  Se = "_",
  Qe = "-",
  k = "sessionId",
  z = "sessionStartTime",
  E = function (e) {
    this._constraintsInstance = e;
  };
E.prototype.performAction = function (e, t, r) {
  if (!s.isDefinedNonNull(e) || !s.isDefined(r)) return e;
  if (s.isDefinedNonNull(r.sessionResetOptions)) {
    if (!s.isDefinedNonNull(r.sessionResetOptions.filters))
      throw new SyntaxError('sessionizationFields Action: unable to find the required config "filters"');
    var i = this._resetSession(e, t, r);
    if (i !== !0) return e;
  }
  e = s.extend({}, e);
  var o = this._storageKey(e, r),
    a = this._constraintsInstance.system.environment,
    c = m.objectFromStorage(a.localStorageObject(), o) || {};
  (this._shouldCreateNewSession(t, c, r) &&
    ((c.sessionId = this._generateSessionId(r)),
    (c.rawFirstEventTimeInSession = t.eventTime),
    (c.firstEventTimeInSession = e.eventTime),
    (c.eventCount = 0)),
    (c.rawLastEventTimeInSession = t.eventTime),
    (c.lastEventTimeInSession = e.eventTime),
    (c.eventCount += 1),
    m.saveObjectToStorage(a.localStorageObject(), o, c));
  var u = this._getSessionFieldNames(r);
  return ((e[u.sessionId] = c.sessionId), r.sessionStartTime && (e[u.sessionStartTime] = c.firstEventTimeInSession), e);
};
E.prototype._storageKey = function (e, t) {
  var r = this._scope(e, t);
  return this._storageKeyPrefix(t) + (s.isEmptyString(r) ? "" : Se + r);
};
E.prototype._storageKeyPrefix = function (e) {
  return e && s.isString(e.storageKeyPrefix) && e.storageKeyPrefix.length > 0 ? e.storageKeyPrefix : Ze;
};
E.prototype._scope = function (e, t) {
  var r = "";
  return (
    s.isDefined(t) &&
      (s.isString(t.namespace) && (r += t.namespace),
      s.isString(t.scopeFieldName) &&
        s.isDefinedNonNull(e[t.scopeFieldName]) &&
        ((r += Se), (r += e[t.scopeFieldName].toString()))),
    r
  );
};
E.prototype._generateSessionId = function (e) {
  return le({ idVersion: 1, time: Date.now(), idTokenSeparator: Qe, generatedIdSeparator: e.tokenSeparator });
};
E.prototype._shouldCreateNewSession = function (e, t, r) {
  var i = !1;
  return (
    (i |= !s.isDefinedNonNull(t.sessionId)),
    s.isDefinedNonNull(r.endSessionConditions) &&
      (s.isDefinedNonNull(r.endSessionConditions.lifespan) &&
        (i |= e.eventTime >= t.rawFirstEventTimeInSession + r.endSessionConditions.lifespan),
      s.isDefinedNonNull(r.endSessionConditions.idleSpan) &&
        (i |= e.eventTime >= t.rawLastEventTimeInSession + r.endSessionConditions.idleSpan),
      s.isDefinedNonNull(r.endSessionConditions.eventCount) &&
        (i |= t.eventCount >= r.endSessionConditions.eventCount)),
    i
  );
};
E.prototype._resetSession = function (e, t, r) {
  var i = r.sessionResetOptions,
    o = this._constraintsInstance._constraintGenerator;
  if (s.isDefinedNonNull(o) && s.isDefinedNonNull(o.eventMatchesTreatment) && o.eventMatchesTreatment(t, i)) {
    var a = this._storageKey(e, r),
      c = this._constraintsInstance.system.environment;
    return (m.saveObjectToStorage(c.localStorageObject(), a, void 0), i.newSessionAfterReset);
  }
  return !0;
};
E.prototype._getSessionFieldNames = function (e) {
  var t = { sessionId: k, sessionStartTime: z };
  return (
    s.isDefinedNonNull(e.sessionFields) &&
      (s.isDefinedNonNullNonEmpty(e.sessionFields[k]) && (t.sessionId = e.sessionFields[k]),
      s.isDefinedNonNullNonEmpty(e.sessionFields[z]) && (t.sessionStartTime = e.sessionFields[z])),
    t
  );
};
var re = function () {};
re.prototype.performAction = function (e, t, r) {
  if (!e || !r || !s.isString(r.timeReference) || !s.isNumber(r.bucketInterval) || !s.isArray(r.fields)) return e;
  var i = e[r.timeReference];
  if (!s.isNumber(i)) return e;
  var o = this._clampToBoundary(i, r.bucketInterval),
    a = o - i;
  return (
    (e[r.timeReference] = o),
    r.fields.forEach(function (c) {
      var u = e[c];
      s.isNumber(u) && (e[c] += a);
    }),
    e
  );
};
re.prototype._clampToBoundary = function (e, t) {
  var r = e % t,
    i = e - r,
    o = i + t;
  return r <= t / 2 ? i : o;
};
var N = {
    blacklistedEventAction: "blacklisted",
    denylistedEventAction: "denylisted",
    blacklistedFieldsAction: "blacklistedFields",
    denylistedFieldsAction: "denylistedFields",
    whitelistedFieldsAction: "whitelistedFields",
    allowlistedFieldsAction: "allowlistedFields",
    sessionizationFieldsAction: "sessionizationFields",
    clampingEventAction: "clamping",
  },
  ge = function (e) {
    var t = new de(),
      r = new ye(),
      i = new _e(),
      o = new E(e),
      a = new re();
    ((this._actions = {}),
      (this._actions[N.blacklistedEventAction] = t),
      (this._actions[N.denylistedEventAction] = t),
      (this._actions[N.blacklistedFieldsAction] = r),
      (this._actions[N.denylistedFieldsAction] = r),
      (this._actions[N.whitelistedFieldsAction] = i),
      (this._actions[N.allowlistedFieldsAction] = i),
      (this._actions[N.sessionizationFieldsAction] = o),
      (this._actions[N.clampingEventAction] = a));
  };
ge.prototype.getAction = function (e) {
  return this._actions[e];
};
var w = "start",
  et = "value",
  tt = function (e, t) {
    var r = -1,
      i = r;
    if (!s.isDefinedNonNull(t) || e.length === 0 || (s.isDefinedNonNull(e[0]) && t < e[0][w])) return r;
    if (e[e.length - 1][w] < t) i = e.length - 1;
    else
      for (var o = 0; o < e.length; o++) {
        var a = e[o][w];
        if (a === t) {
          i = o;
          break;
        } else if (a > t) {
          i = o - 1;
          break;
        }
      }
    return i;
  },
  x = function () {
    y.apply(this, arguments);
  };
x.prototype = Object.create(y.prototype);
x.prototype.constructor = x;
x.prototype.constrainedValue = function (e, t) {
  var r = t ? t.precision : 0,
    i = t ? t.buckets : null;
  if (s.isDefinedNonNullNonEmpty(i)) {
    i = i.slice().sort(function (c, u) {
      return c[w] - u[w];
    });
    var o = tt(i, e),
      a = i[o];
    s.isDefinedNonNull(a) && (e = a[et]);
  } else s.isNumber(e) && s.isNumber(r) && r > 0 && (e = Math.floor(e / r) * r);
  return e;
};
var rt = "mt_serial_number",
  M = "exp",
  Z = "sn",
  T = function (e) {
    ((e = e || {}),
      (this._nextRotationTime = e.nextRotationTime || Number.POSITIVE_INFINITY),
      (this._storageKey = e.namespace || rt),
      (this._initialSerialNumber = e.initialSerialNumber || 0),
      (this._rotationPeriod = e.rotationPeriod || Number.POSITIVE_INFINITY));
  };
T.prototype.setDelegate = function (e) {
  s.attachDelegate(this, e);
};
T.prototype.localStorageObject = function () {
  return m.localStorageObject();
};
T.prototype.getNextSerialNumber = function (e) {
  var t = this._storageKey,
    r = this._getCurrentSerialNumberData(t),
    i = r[Z];
  return (
    (e = s.isNumber(e) ? e : 1),
    (i = parseInt(i, 10)),
    isNaN(i) && (i = this._initialSerialNumber),
    (i = this._increaseSerialNumber(i, e)),
    (r[Z] = i),
    m.saveObjectToStorage(this.localStorageObject(), this._storageKey, r),
    i
  );
};
T.prototype.resetSerialNumber = function () {
  var e = m.objectFromStorage(this.localStorageObject(), this._storageKey);
  s.isDefinedNonNull(e) && this._resetSerialNumber(e[M]);
};
T.prototype.getTime = function () {
  return Date.now();
};
T.prototype._increaseSerialNumber = function (e, t) {
  return e + t;
};
T.prototype._getCurrentSerialNumberData = function (e) {
  var t = m.objectFromStorage(this.localStorageObject(), e),
    r,
    i;
  for (
    t
      ? ((r = t[M]), (r = parseInt(r, 10)), (t[M] = r = isNaN(r) ? this._nextRotationTime : r))
      : (r = this._nextRotationTime - this._rotationPeriod);
    !t || this.getTime() >= r;
  )
    ((r = i = r + this._rotationPeriod), (t = this._resetSerialNumber(i)));
  return t;
};
T.prototype._resetSerialNumber = function (e) {
  var t = {};
  return (
    (t[M] = e),
    (t[Z] = this._initialSerialNumber),
    m.saveObjectToStorage(this.localStorageObject(), this._storageKey, t),
    t
  );
};
var se = "_",
  nt = "mtTimestamp",
  b = function () {
    (y.apply(this, arguments),
      (this._storage = this._constraintsInstance.system.environment.localStorageObject()),
      (this._precisionEndTimeCache = {}),
      (this._serialNumberGenerator = null));
  };
b.prototype = Object.create(y.prototype);
b.prototype.constructor = b;
b.prototype.constrainedValue = function (e, t, r, i) {
  var o = e;
  if (s.isNumber(e) && s.isObject(t) && s.isNumber(t.precision) && t.precision > 0) {
    var a = this._computePrecisionStartTime(e, t);
    ((this._serialNumberGenerator = new T({
      namespace: this._persistentStorageKey(t, i),
      nextRotationTime: a + t.precision,
      rotationPeriod: t.precision,
    })),
      this._serialNumberGenerator.setDelegate(this._constraintsInstance.system.environment),
      this._serialNumberGenerator.setDelegate({
        getTime: function () {
          return e;
        },
      }));
    var c = this._serialNumberGenerator.getNextSerialNumber();
    ((o = this._computeTimestamp(a, c)), (this._serialNumberGenerator = null));
  }
  return o;
};
b.prototype._computeTimestamp = function (e, t) {
  return e + t;
};
b.prototype._persistentStorageKey = function (e, t) {
  var r = e.namespace ? se + e.namespace : "";
  return (e.storageKeyPrefix || nt) + r + se + t;
};
b.prototype._computePrecisionStartTime = function (e, t) {
  var r = t.precision;
  return Math.floor(e / r) * r;
};
var $ = "_",
  it = "mtHash",
  ot = "salt",
  st = 10,
  g = function () {
    y.apply(this, arguments);
  };
g.prototype = Object.create(y.prototype);
g.prototype.constructor = g;
function Ee(n, e) {
  var t = n.namespace ? $ + n.namespace : "";
  return (n.storageKeyPrefix || it) + t + $ + ot + $ + e;
}
function at() {
  for (var n = ""; n.length < st;) n += S.randomHexCharacter();
  return n;
}
function ct(n, e) {
  return [n, e]
    .map(function (t) {
      var r = 0;
      if (s.isDefinedNonNullNonEmpty(t))
        for (var i = 0; i < t.length; i++) {
          var o = t.charCodeAt(i);
          r = (r << 5) - r + o;
        }
      var a = Math.abs(r);
      return ((a = parseInt(a, 16)), S.convertNumberToBaseAlphabet(a, S.base62Alphabet));
    })
    .join("");
}
g.prototype.constrainedValue = function (e, t, r, i) {
  return s.isDefinedNonNullNonEmpty(e)
    ? this._loadPlatformBasedSalt(t, i).then(function (o) {
        return ct(e, o);
      })
    : e;
};
g.prototype.timeExpired = function (e) {
  return e ? e <= Date.now() : !1;
};
g.prototype.expirationTime = function (e) {
  return e ? Date.now() + e : null;
};
g.prototype._loadPlatformBasedSalt = function (e, t) {
  var r = null,
    i = this,
    o = e.platformBasedSalt;
  return (
    s.isDefinedNonNull(o)
      ? ((r = this._constraintsInstance.system.environment.platformIdentifier(
          o.saltNamespace,
          "userid",
          o.crossDeviceSync || !0,
        )),
        s.isDefinedNonNull(r)
          ? (r = r.then(function (a) {
              return (
                s.isDefinedNonNull(a) ||
                  (i._constraintsInstance.system.logger.warn(
                    "Hash: platform returned an empty salt. Will use default salt generator to generate the salt.",
                  ),
                  (a = i._getSalt(e, t))),
                a
              );
            }))
          : (r = Promise.resolve(this._getSalt(e, t))))
      : (r = Promise.resolve(this._getSalt(e, t))),
    r
  );
};
g.prototype._getSalt = function (e, t) {
  var r = this._retrieveSaltFromStorage(e, t),
    i = e.saltLifespan;
  if (!s.isDefinedNonNull(r) || this.timeExpired(r.expirationTime)) {
    var o = this._constraintsInstance.system.environment.localStorageObject(),
      a = at();
    ((r = { salt: a, expirationTime: this.expirationTime(i) }), m.saveObjectToStorage(o, Ee(e, t), r));
  }
  return r.salt;
};
g.prototype._retrieveSaltFromStorage = function (e, t) {
  var r = this._constraintsInstance.system.environment.localStorageObject(),
    i = m.objectFromStorage(r, Ee(e, t));
  return i;
};
var F = { ID: "idGenerator", NUMBER: "numberDeres", TIME: "timeDeres", URL: "urlDeres", HASH: "hash" },
  Te = function (e) {
    ((this.actions = {}),
      (this.actions[F.ID] = new p(e)),
      (this.actions[F.NUMBER] = new x(e)),
      (this.actions[F.TIME] = new b(e)),
      (this.actions[F.URL] = new O(e)),
      (this.actions[F.HASH] = new g(e)));
  };
Te.prototype.getAction = function (e) {
  return this.actions[e];
};
var Ae = function (e) {
  ((this._eventActions = new ge(e)), (this._fieldActions = new Te(e)));
};
Ae.prototype.applyConstraints = function (e, t) {
  var r = e;
  if (t && !s.isEmptyObject(t)) {
    var i = [],
      o = this;
    if (t.fieldActions && !s.isEmptyObject(t.fieldActions)) {
      var a = !1,
        c = r;
      ((c = Object.keys(t.fieldActions).reduce(function (h, d) {
        var v = t.fieldActions[d];
        if (v) {
          var A = v.denylisted || v.blacklisted,
            V = v.treatmentType,
            ne = o._fieldActions.getAction(V);
          h = J(h, d, !1, function (Pe, U, Fe, B) {
            if (A) (delete B[U], (a = !0));
            else if (v.hasOwnProperty(j.OVERRIDE_FIELD_VALUE)) ((B[U] = v[j.OVERRIDE_FIELD_VALUE]), (a = !0));
            else if (ne) {
              var H = ne.performAction(Pe, d, r, v);
              ((B[U] = H),
                H instanceof Promise &&
                  i.push(
                    H.then(function (we) {
                      J(c, d, !0, function (At, xe, De, Ve) {
                        De === Fe && (Ve[xe] = we);
                      });
                    }),
                  ),
                (a = !0));
            }
          });
        }
        return h;
      }, c)),
        a &&
          (i.length > 0
            ? (r = Promise.all(i).then(function () {
                return c;
              }))
            : (r = c)));
    }
    if (t.eventActions && !s.isEmptyObject(t.eventActions)) {
      var u = Object.keys(t.eventActions),
        l = function (h) {
          return (
            u.forEach(function (d) {
              var v = o._eventActions.getAction(d);
              if (v) {
                var A = t.eventActions[d];
                h = v.performAction(h, e, A);
              }
            }),
            h
          );
        };
      r instanceof Promise
        ? (r = Promise.resolve(r).then(function (h) {
            return l(h);
          }))
        : (r = l(r));
    }
  }
  return r;
};
var ut = "filters",
  ft = "any",
  C = "eventActions",
  Y = "fieldActions";
function lt(n, e) {
  var t = n || {};
  return (pt(t, e), ht(t, e), t);
}
function pt(n, e) {
  n[C] || (n[C] = {});
  var t = n[C],
    r = e[C];
  r &&
    Object.keys(r).reduce(function (i, o) {
      var a = i[o],
        c = r[o];
      return (
        s.isArray(a)
          ? s.isArray(c) &&
            c.forEach(function (u) {
              a.indexOf(u) === -1 && a.push(u);
            })
          : s.isArray(c)
            ? (i[o] = c.slice())
            : (s.isObject(c) || (!s.isObject(c) && !s.isFunction(c))) && (i[o] = c),
        i
      );
    }, t);
}
function ht(n, e) {
  (n[Y] || (n[Y] = {}),
    me(n, e, Y, function (t, r, i) {
      return t[i] && t[i].treatmentType === r[i].treatmentType ? t[i] : {};
    }));
}
var L = function (e) {
  ((this._constraintsInstance = e), (this.treatment = new Ae(e)));
};
L.prototype._combineTreatments = function (e, t, r) {
  var i,
    o = [];
  return (
    s.isArray(e)
      ? (e.forEach(function (a) {
          if (a) {
            var c = "treatmentProfiles." + a,
              u = t.value(c, r).then(function (l) {
                return l && l.treatments ? l.treatments : [];
              });
            o.push(u);
          }
        }),
        (i = Promise.all(o).then(function (a) {
          var c = [];
          return (
            a.forEach(function (u) {
              c = c.concat(u);
            }),
            c
          );
        })))
      : (i = Promise.resolve([])),
    i
  );
};
L.prototype.constraintsForEvent = function (e, t, r) {
  if (!t) return Promise.resolve(null);
  var i = this;
  return Promise.resolve(t.constraintProfiles(r))
    .then(function (o) {
      return s.isDefinedNonNull(o)
        ? o
        : Promise.resolve(t.constraintProfile(r)).then(function (a) {
            return s.isDefinedNonNull(a) ? [a] : null;
          });
    })
    .then(function (o) {
      if (s.isDefinedNonNull(o)) {
        if (!s.isArray(o))
          throw new TypeError('"constraintProfiles" should be an Array, but got: ' + (o && o.constructor));
        return i._combineTreatments(o, t, r).then(function (a) {
          if (a.length === 0)
            throw new SyntaxError("The constraintProfiles: " + o.join(", ") + " are not found in the topic config");
          return a;
        });
      } else return Promise.resolve([]);
    })
    .then(function (o) {
      var a = o.reduce(function (c, u) {
        return (i.eventMatchesTreatment(e, u) && (c = lt(c, u)), c);
      }, null);
      return a;
    });
};
L.prototype.eventMatchesTreatment = function (e, t) {
  var r = t[ut];
  if (!s.isDefinedNonNull(r)) return !0;
  if (s.isString(r)) return r === ft;
  if (Object.keys(r).length === 0)
    throw new SyntaxError(
      `Unable to find the filter in 
` + JSON.stringify(t),
    );
  return Object.keys(r).every(function (i) {
    var o = r[i];
    if (o && s.isString(o)) return !1;
    if (!o || !s.isObject(o) || s.isEmptyObject(o))
      throw new SyntaxError(
        "Invalid filter object for field (" +
          i +
          `) in 
` +
          JSON.stringify(t),
      );
    return Object.keys(o).every(function (a) {
      var c = o[a];
      if (I[a]) return I[a](i, e, c);
      throw new SyntaxError(
        "Unable to find the filter (" +
          a +
          ") for field (" +
          i +
          `)in 
` +
          JSON.stringify(t),
      );
    });
  });
};
var vt = {
  constraintProfile: function (e) {
    return this.value("constraints.defaultProfile", e);
  },
  constraintProfiles: function (e) {
    return this.value("defaultTreatmentProfiles", e);
  },
};
function mt(n) {
  var e = !0;
  return (
    (e &= s.isDefinedNonNull(n)),
    e &&
      ((e &= !s.isEmptyObject(n)),
      (e &= s.isFunction(n.initialized)),
      (e &= s.isFunction(n.value)),
      (e &= s.isFunction(n.constraintProfile))),
    e
  );
}
function Ot(n) {
  return ((s.isFunction(n.constraintProfile) && s.isFunction(n.constraintProfiles)) || s.attachMethods(n, vt, n), n);
}
var K = function (e, t) {
  if (!mt(e)) throw new Error('The topic config is not a valid instance of "mt-client-config".');
  ((this._isInitialized = !1),
    (this._topicConfig = e),
    (this._constraintGenerator = null),
    (this.system = new Me()),
    s.setDelegates(this.system, t || {}));
};
K.prototype._getConstraintGenerator = function () {
  var e = this;
  return this._constraintGenerator
    ? Promise.resolve(this._constraintGenerator)
    : this._topicConfig.value("treatmentProfiles").then(function (t) {
        return (
          s.isDefinedNonNull(t) ? (e._constraintGenerator = new L(e)) : (e._constraintGenerator = new P(e)),
          e._constraintGenerator
        );
      });
};
K.prototype.constraintsForEvent = function (e, t) {
  var r = this;
  return this._getConstraintGenerator().then(function (i) {
    return i.constraintsForEvent(e, r._topicConfig, t);
  });
};
K.prototype.applyConstraintTreatments = function (e, t) {
  var r = t ? Promise.resolve(t) : this.constraintsForEvent(e),
    i = this;
  return Promise.all([r, this._getConstraintGenerator(), this._topicConfig.value("anonymous")])
    .then(function (o) {
      var a = o[0],
        c = o[1],
        u = o[2];
      return (s.isDefinedNonNull(u) && (e.anonymous = u), c.treatment.applyConstraints(e, a));
    })
    .catch(function (o) {
      return (i.system.logger.warn("An error occurred while applying constraints: " + o.message || o), null);
    });
};
const It = K;
var q, W;
function Ne() {
  return [
    "app",
    "appVersion",
    "hardwareFamily",
    "hardwareModel",
    "os",
    "osBuildNumber",
    "osLanguages",
    "osVersion",
    "resourceRevNum",
    "screenHeight",
    "screenWidth",
    "userAgent",
  ];
}
function be() {
  return ["delegateApp", "hardwareBrand", "storeFrontCountryCode", "storeFrontHeader", "storeFrontLanguage"];
}
function dt() {
  return [
    "baseVersion",
    "clientEventId",
    "connection",
    "eventTime",
    "eventType",
    "eventVersion",
    "timezoneOffset",
    "xpPostFrequency",
    "xpSendMethod",
  ];
}
function Oe() {
  return (W || (W = Ne().concat(be())), W);
}
function yt() {
  return (q || (q = Oe().concat(dt())), q);
}
var _t = s.attachDelegate,
  St = S.cryptoRandomBase62String,
  G = S.exceptionString,
  ae;
function f(n) {
  if (!s.isDefinedNonNull(n)) throw new Error("A processor instance is required for creating BaseEventHandler.");
  ((this._processor = n),
    ae ||
      ((ae = !0),
      Oe().forEach(function (e) {
        f.prototype[e] = function (t) {
          var r;
          return (t && t.hasOwnProperty(e) ? (r = t[e]) : (r = this.environment()[e]()), r);
        };
      })));
}
f._className = "eventHandlers.base";
f.prototype.setDelegate = function (e) {
  return _t(this, e);
};
f.prototype.environment = function () {
  throw G(f._className, "environment");
};
f.prototype.eventRecorder = function () {
  throw G(f._className, "eventRecorder");
};
f.prototype.metricsData = function () {
  throw G(f._className, "metricsData");
};
f.prototype.processMetricsData = function () {
  throw G(f._className, "processMetricsData");
};
f.prototype.knownFields = function () {
  return yt();
};
f.prototype.baseVersion = function () {
  return 1;
};
f.prototype.clientEventId = function (e) {
  return (e && e.clientEventId) || St(!0);
};
f.prototype.connection = function (e) {
  return (e && e.connection) || this.environment().connectionType();
};
f.prototype.dsId = function (e) {
  return (e && e.dsId) || this.environment().dsId();
};
f.prototype.eventTime = function (e) {
  return (e && e.eventTime) || Date.now();
};
f.prototype.eventVersion = function (e) {
  return (e && e.eventVersion) || null;
};
f.prototype.timezoneOffset = function (e) {
  return (e && e.timezoneOffset) || new Date().getTimezoneOffset();
};
f.prototype.xpPostFrequency = function (e) {
  return (e && e.xpPostFrequency) || this._processor.config.value("postFrequency");
};
f.prototype.xpSendMethod = function (n) {
  return (n && n.xpSendMethod) || this.eventRecorder().sendMethod();
};
var Pt = { Base: f },
  gt = s.attachDelegate,
  Ie = S.exceptionString,
  Et = m.localStorageObject,
  Tt = m.sessionStorageObject,
  ce;
function _() {
  ce ||
    ((ce = !0),
    Ne().forEach(function (n) {
      _.prototype[n] = function () {
        throw Ie(_._className, n);
      };
    }),
    be().forEach(function (n) {
      _.prototype[n] = function () {};
    }));
}
_._className = "system.environment";
_.prototype.setDelegate = function (e) {
  return gt(this, e);
};
_.prototype.connectionType = function () {
  throw Ie(_._className, "connectionType");
};
_.prototype.dsId = function () {};
_.prototype.localStorageObject = Et;
_.prototype.sessionStorageObject = Tt;
_.prototype.platformIdentifier = function () {};
var Ft = { Environment: _ };
export { It as C, Ot as c, Pt as e, Ft as s };
