import { s as w, c as z, r as a, d as ie, n as se, k as O, e as W } from "./mt-metricskit-utils-private.esm.js";
import { C as ae, c as ce, e as pe, s as ue } from "./ae-client-kit-core.esm.js";
import { l as le } from "./mt-client-logger-core.esm.js";
var L = { version: "8.7.1", name: "mt-metricskit-processor-clickstream" },
  ye = {
    mtName: function () {
      return L.name;
    },
    mtVersion: function () {
      return L.version;
    },
  },
  f = {
    attachDelegateInfo: function (t) {
      a.extend(t, ye);
    },
  };
function ge(t) {
  (ce(t), f.attachDelegateInfo(t));
}
function he(t) {
  t.cleanup();
}
var fe = [
    "constraintProfile",
    "constraintProfiles",
    "clientId",
    "isSignedIn",
    "page",
    "pageContext",
    "pageDetails",
    "pageId",
    "pageType",
    "xpVersionMetricsKit",
    "xpDelegatesInfo",
  ],
  $ = [
    "capacityData",
    "capacityDataAvailable",
    "capacityDisk",
    "capacitySystem",
    "capacitySystemAvailable",
    "dsId",
    "hostApp",
    "pageUrl",
    "pixelRatio",
    "userType",
    "windowInnerHeight",
    "windowInnerWidth",
    "windowOuterHeight",
    "windowOuterWidth",
  ],
  q = [
    "browser",
    "consumerId",
    "consumerNs",
    "hostAppVersion",
    "parentPageUrl",
    "userId",
    "xpUserIdSyncState",
    "xpAccountsMatch",
    "userNs",
  ],
  B = {
    METRICS_KIT_BASE_FIELDS: fe.concat($, q),
    IGNORED_BASE_FIELDS: ["osLanguages"],
    REQUIRED_ENVIRONMENT_FIELD_NAMES: $.concat("connectionType"),
    OPTIONAL_ENVIRONMENT_FIELD_NAMES: q.concat(["clientId", "cookie", "osLanguages"]),
  },
  X = ue.Environment,
  de = w.exceptionString,
  ve = B.REQUIRED_ENVIRONMENT_FIELD_NAMES,
  me = B.OPTIONAL_ENVIRONMENT_FIELD_NAMES,
  Q = !1,
  De = function () {},
  C = function t() {
    (X.apply(this, arguments),
      Q ||
        ((Q = !0),
        ve.forEach(function (e) {
          t.prototype[e] = function () {
            throw de("metrics.system.environment", e);
          };
        }),
        me.forEach(function (e) {
          t.prototype[e] = De;
        })));
  };
C.prototype = new X();
C.prototype.constructor = C;
C.prototype.setDelegate = function (e) {
  return (z.setDelegate(e), a.attachDelegate(this, e));
};
var N = function () {};
N.prototype.setDelegate = function (e) {
  return a.attachDelegate(this, e);
};
N.prototype.recordEvent = function (e, r) {
  throw w.exceptionString("metrics.system.event_recorder", "recordEvent");
};
N.prototype.sendMethod = function () {
  throw w.exceptionString("metrics.system.event_recorder", "sendMethod");
};
N.prototype.flushUnreportedEvents = function (e) {};
var Y = le("mt-metricskit-processor-clickstream"),
  Ie = function () {
    ((this.environment = new C()), (this.eventRecorder = new N()), (this.logger = Y));
    for (var e in this) f.attachDelegateInfo(this[e]);
  },
  R = function (e) {
    ((this._processor = e.processor), (this._eventMetricsDataPromise = e.eventMetricsDataPromise));
  };
R.prototype.setDelegate = function (e) {
  return a.attachDelegate(this, e);
};
R.prototype.toJSON = function () {
  return this._eventMetricsDataPromise.catch(
    function (e) {
      return (
        this._processor.system.logger.error(
          `An error occurred when generating Metrics Data. Error: 
` + e,
        ),
        null
      );
    }.bind(this),
  );
};
R.prototype.recordEvent = function (e) {
  var r = Array.prototype.slice.call(arguments, 1);
  return this._processor.system.eventRecorder.recordEvent.apply(
    this._processor.system.eventRecorder,
    [e, this.toJSON()].concat(r),
  );
};
var Z = w.exceptionString,
  u = function (e) {
    this._processor = e;
  };
u.prototype.setDelegate = function (e) {
  return a.attachDelegate(this, e);
};
u.prototype.knownFields = function () {
  throw Z("ClickStreamEventHandler", "knownFields");
};
u.prototype.eventType = function (t) {
  throw Z("ClickStreamEventHandler", "eventType");
};
u.prototype.processMetricsData = function (e, r, o) {
  var n = arguments,
    i = Array.prototype.slice.call(n, 3),
    s = this.eventType(i),
    p = this._processor.config,
    h = this._processor._constraints,
    c = this._processor.system.logger,
    g = p
      .metricsDisabledOrBlacklistedEvent(s)
      .then(function (l) {
        if (l) throw "event was disabled";
      })
      .then(
        function () {
          var l = typeof this.mtIncludeBaseFields == "function" ? this.mtIncludeBaseFields() : !0,
            I = null;
          if (l) {
            var v = this._processor.eventHandlers.base;
            I = v.metricsData.apply(v, n);
          } else I = {};
          return I;
        }.bind(this),
      )
      .then(
        function (l) {
          var I = [];
          i = [l].concat(i);
          var v = W.processMetricsData(this, this.knownFields(), !0, i),
            A = {};
          return (
            Object.keys(v).forEach(function (S) {
              var J = v[S],
                ne = Promise.resolve(J).then(function (oe) {
                  A[S] = oe;
                });
              I.push(ne);
            }),
            Promise.all(I).then(function () {
              return A;
            })
          );
        }.bind(this),
      )
      .then(function (l) {
        return h.applyConstraintTreatments(l);
      })
      .then(function (l) {
        return p.removeBlacklistedFields(l);
      })
      .then(function (l) {
        return p.applyDeRes(l);
      })
      .catch(
        function (l) {
          return (
            c.error(
              "MetricsKit: Unable to generate the event (" +
                this.eventType(i) +
                ") for the topic " +
                this._processor.config.topic() +
                ", due to " +
                l,
            ),
            null
          );
        }.bind(this),
      );
  return new R({ processor: this._processor, eventMetricsDataPromise: g });
};
var k = function (t) {
  u.apply(this, arguments);
};
k.prototype = Object.create(u.prototype);
k.prototype.constructor = k;
k.prototype.setDelegate = function (e) {
  return a.attachDelegate(this, e);
};
k.prototype.metricsData = function (t, e, r) {
  return this.processMetricsData.apply(this, arguments);
};
k.prototype.knownFields = function () {
  var e = ["eventType", "eventVersion", "type"];
  return e;
};
k.prototype.eventType = function (t) {
  return "account";
};
k.prototype.eventVersion = function (t) {
  return (t && t.eventVersion) || 1;
};
var ee = B.METRICS_KIT_BASE_FIELDS,
  H = B.IGNORED_BASE_FIELDS,
  U = pe.Base,
  y = function (t) {
    U.apply(this, arguments);
  };
y.prototype = Object.create(U.prototype);
y.prototype.constructor = y;
y.prototype.environment = function () {
  return this._processor.system.environment;
};
y.prototype.eventRecorder = function () {
  return this._processor.system.eventRecorder;
};
y.prototype.knownFields = function () {
  var e = U.prototype.knownFields.call(this);
  return (
    H &&
      H.length > 0 &&
      ((e = e.slice()),
      H.forEach(function (r) {
        var o = e.indexOf(r);
        o > -1 && e.splice(o, 1);
      })),
    e.concat(ee)
  );
};
y.prototype.metricsData = function (e, r, o) {
  var n = {},
    i = [],
    s = Array.prototype.slice.call(arguments, 3),
    p = this._processor.utils;
  return this._processor.config
    .value("metricsBase")
    .then(
      function (h) {
        h && s.push(h);
        var c = p.eventFields.processMetricsData(this, this.knownFields(), e, r, o, s);
        return (
          Object.keys(c).forEach(function (g) {
            var l = c[g],
              I = Promise.resolve(l).then(function (v) {
                n[g] = v;
              });
            i.push(I);
          }),
          i
        );
      }.bind(this),
    )
    .then(function (h) {
      return Promise.all(h).then(function () {
        return n;
      });
    });
};
ee.forEach(function (t) {
  y.prototype[t] = function (e) {
    var r = this._processor.system.environment;
    return (e && e[t]) || r[t]();
  };
});
y.prototype.constraintProfile = function (e) {
  var r = this._processor.config;
  return (e && e.constraintProfile) || r.constraintProfile();
};
y.prototype.constraintProfiles = function (e) {
  var r = this._processor.config;
  return (e && e.constraintProfiles) || r.constraintProfiles();
};
y.prototype.clientEventId = function (e) {
  var r = e && e.clientEventId;
  return (r || (w.cryptoRandomBase62String && (r = w.cryptoRandomBase62String(!0)), r || (r = w.uuid())), r);
};
y.prototype.clientId = function (e) {
  var r,
    o = this._processor.config;
  return (
    e && e.clientId
      ? (r = e.clientId)
      : this._processor.system.environment.clientId()
        ? (r = this._processor.system.environment.clientId())
        : (r = o.value("ignoreClientIdCookie").then(function (n) {
            if (!n) return z.get("xp_ci");
          })),
    r
  );
};
y.prototype.isSignedIn = function (e) {
  return e && "isSignedIn" in e ? e.isSignedIn : !!this.dsId(e);
};
y.prototype.page = function (e) {
  if (e) {
    if (e.page) return e.page;
    if (this.pageType(e) && this.pageId(e)) {
      var r = this._processor.config,
        o = this.pageType(e),
        n = this.pageId(e);
      return r.value("compoundSeparator").then(function (i) {
        return o + i + n;
      });
    }
  } else throw "No data provided to event_handlers/base page function";
};
y.prototype.pageContext = function (e) {
  return e && e.pageContext;
};
y.prototype.pageDetails = function (e) {
  return e && e.pageDetails;
};
y.prototype.pageId = function (e) {
  return e && e.pageId;
};
y.prototype.pageType = function (e) {
  return e && e.pageType;
};
y.prototype.xpViewablePercentage = function (e) {
  var r = this._processor.config;
  return (e && e.xpViewablePercentage) || r.value("impressions.viewablePercentage");
};
y.prototype.xpVersionMetricsKit = function () {
  return L.version;
};
y.prototype.xpDelegatesInfo = function () {
  var e = ie.getStoredDelegateObject(this),
    r = e && e.delegates;
  return r || void 0;
};
var d = function (t) {
  u.apply(this, arguments);
};
d.prototype = Object.create(u.prototype);
d.prototype.constructor = d;
d.prototype.setDelegate = function (e) {
  return a.attachDelegate(this, e);
};
d.prototype.metricsData = function (t, e, r) {
  return this.processMetricsData.apply(this, arguments);
};
d.prototype.knownFields = function () {
  var e = ["eventType", "eventVersion"];
  return e;
};
d.prototype.eventType = function (t) {
  return "buyConfirmed";
};
d.prototype.eventVersion = function (t) {
  return (t && t.eventVersion) || 1;
};
d.prototype.createClientBuyId = function () {
  var t = null,
    e = this._processor.system.environment,
    r = e.sessionStorageObject().getItem("mtMetricsKit_previousClientBuyId");
  return (
    (t = ++r),
    r ||
      (this._processor.system.logger.warn(
        "Metrics: buyConfirmed.createClientBuyId: clientBuyId did not exist or was of incorrect type, reset to 1.",
      ),
      (t = 1)),
    e.sessionStorageObject().setItem("mtMetricsKit_previousClientBuyId", t),
    t
  );
};
d.prototype.clientBuyIdQueryParamString = function (t) {
  return "&clientBuyId=" + t;
};
d.prototype.metricsBuyParamsString = function (t, e, r, o) {
  var n = this._processor.eventHandlers.base,
    i = this._processor.eventHandlers.page,
    s = Array.prototype.slice.call(arguments, 4),
    p = i.pageHistory(),
    h = n.clientId(),
    c;
  return (
    Array.isArray(p)
      ? p.length >= 2 && (c = p[p.length - 2])
      : this._processor.system.logger.warn("MetricsKit: metricsBuyParamsString: pageHistory is not an Array"),
    Promise.resolve(h).then(
      function (g) {
        var l = {
          mtApp: n.app(s),
          mtEventTime: Date.now(),
          mtHardwareBrand: n.hardwareBrand(s),
          mtHardwareFamily: n.hardwareFamily(s),
          mtHardwareModel: n.hardwareModel(s),
          mtHostApp: n.hostApp(s),
          mtHostAppVersion: n.hostAppVersion(s),
          mtOs: n.os(s),
          mtOsBuildNumber: n.osBuildNumber(s),
          mtOsVersion: n.osVersion(s),
          mtPageId: t,
          mtPageType: e,
          mtPageContext: r,
          mtTopic: o || "xp_its_main",
          mtPrevPage: c,
          mtRequestId: w.uuid(),
          mtClientId: g,
        };
        return (a.extend.apply(a, [l].concat(s)), w.paramString(l));
      }.bind(this),
    )
  );
};
d.prototype.cacheMetricsBuyData = function (t, e) {
  var r = this._processor.system.environment;
  if (arguments.length != 2)
    this._processor.system.logger.error(
      "buyConfirmed.cacheMetricsBuyData(): function invoked with incorrect number of parameters. Perhaps you meant to retrieve cached data instead of setting it, which would be a call to uncacheMetricsBuyData(clientBuyId)?",
    );
  else {
    var o = JSON.stringify(e);
    r.sessionStorageObject().setItem("mtMetricsKit_metricsBuyData_for_clientBuyId_" + t, o);
  }
};
d.prototype.uncacheMetricsBuyData = function (t) {
  var e = null,
    r = this._processor.system.environment;
  if (arguments.length != 1)
    this._processor.system.logger.error(
      "buyConfirmed.uncacheMetricsBuyData(): function invoked with incorrect number of parameters. Perhaps you meant to set cached data instead of retrieving it, which would be a call to cacheMetricsBuyData(clientBuyId, metricsBuyData)?",
    );
  else {
    var o = r.sessionStorageObject().getItem("mtMetricsKit_metricsBuyData_for_clientBuyId_" + t);
    o && ((e = JSON.parse(o)), r.sessionStorageObject().removeItem("mtMetricsKit_metricsBuyData_for_clientBuyId_" + t));
  }
  return e;
};
d.prototype.buyFailureOccurred = function (t) {
  var e = this.uncacheMetricsBuyData(t);
  e && ((e.detoured = !0), this.cacheMetricsBuyData(t, e));
};
var j = function (e) {
    var r = null;
    try {
      r = JSON.parse(e);
    } catch (o) {
      Y.error("MetricsKit: error parsing click data - " + o);
    }
    return r;
  },
  m = function (t) {
    u.apply(this, arguments);
  };
m.prototype = Object.create(u.prototype);
m.prototype.constructor = m;
m.prototype.metricsData = function (t, e, r, o) {
  var n = [t, e, r],
    i = this._processor.utils;
  return (
    o &&
      (n.push({ location: i.eventFields.buildLocationStructure(o, this.locationDataForElement) }),
      n.push(this.dataForElement(o) || {})),
    (n = n.concat(Array.prototype.slice.call(arguments, 4))),
    this.processMetricsData.apply(this, n)
  );
};
m.prototype.knownFields = function () {
  var e = [
    "actionContext",
    "actionDetails",
    "actionType",
    "actionUrl",
    "eventType",
    "eventVersion",
    "impressions",
    "location",
    "targetId",
    "targetType",
    "positionX",
    "positionY",
    "xpViewablePercentage",
  ];
  return e;
};
m.prototype.dataForElement = function (e) {
  var r = null;
  if (e && a.isFunction(e.hasAttribute) && a.isFunction(e.getAttribute)) {
    var o = this.dataAttribute();
    e.hasAttribute(o) && (r = j(e.getAttribute(o)));
  }
  return r;
};
m.prototype.dataAttribute = function () {
  return "data-metrics-click";
};
m.prototype.locationDataForElement = function (e) {
  var r = e.parentNode,
    o = 0,
    n = null,
    i,
    s,
    p,
    h;
  if (
    e.hasAttribute &&
    e.hasAttribute("data-metrics-location") &&
    ((n = j(e.getAttribute("data-metrics-location"))), n.locationType)
  ) {
    if (r) {
      i = r.childNodes;
      for (var c = 0; c < i.length; c++)
        if (
          ((s = (typeof i.item == "function" && i.item(c)) || i[c]),
          (p =
            s.hasAttribute && s.hasAttribute("data-metrics-location")
              ? j(s.getAttribute("data-metrics-location"))
              : void 0),
          (h = p ? p.locationType : void 0),
          h)
        ) {
          if (s === e) break;
          o++;
        }
    }
    n.locationPosition = o;
  }
  return n;
};
m.prototype.eventType = function (t) {
  return "click";
};
m.prototype.eventVersion = function (t) {
  return (t && t.eventVersion) || 4;
};
m.prototype.impressions = function (e) {
  return e ? e.impressions : void 0;
};
m.prototype.xpViewablePercentage = function (e) {
  return this._processor.eventHandlers.base.xpViewablePercentage(e);
};
var x = function (t) {
  u.apply(this, arguments);
};
x.prototype = Object.create(u.prototype);
x.prototype.constructor = x;
x.prototype.setDelegate = function (e) {
  return a.attachDelegate(this, e);
};
x.prototype.metricsData = function (t, e, r) {
  return this.processMetricsData.apply(this, arguments);
};
x.prototype.knownFields = function () {
  var e = ["buttons", "code", "details", "message", "type", "eventType", "eventVersion", "type"];
  return e;
};
x.prototype.eventType = function (t) {
  return "dialog";
};
x.prototype.eventVersion = function (t) {
  return (t && t.eventVersion) || 2;
};
var _ = function (t) {
  u.apply(this, arguments);
};
_.prototype = Object.create(u.prototype);
_.prototype.constructor = _;
_.prototype.setDelegate = function (e) {
  return a.attachDelegate(this, e);
};
_.prototype.metricsData = function (t, e, r) {
  return this.processMetricsData.apply(this, arguments);
};
_.prototype.knownFields = function () {
  var e = ["eventType", "eventVersion", "extRefUrl", "osLanguages", "refApp", "type"];
  return e;
};
_.prototype.eventType = function (t) {
  return "enter";
};
_.prototype.eventVersion = function (t) {
  return (t && t.eventVersion) || 1;
};
_.prototype.osLanguages = function (e) {
  return (e && e.osLanguages) || this._processor.system.environment.osLanguages();
};
var M = function (t) {
  u.apply(this, arguments);
};
M.prototype = Object.create(u.prototype);
M.prototype.constructor = M;
M.prototype.setDelegate = function (e) {
  return a.attachDelegate(this, e);
};
M.prototype.metricsData = function (t, e, r) {
  return this.processMetricsData.apply(this, arguments);
};
M.prototype.knownFields = function () {
  var e = ["destinationUrl", "eventType", "eventVersion", "type"];
  return e;
};
M.prototype.eventType = function (t) {
  return "exit";
};
M.prototype.eventVersion = function (t) {
  return (t && t.eventVersion) || 1;
};
var b = function (t) {
  u.apply(this, arguments);
};
b.prototype = Object.create(u.prototype);
b.prototype.constructor = b;
b.prototype.metricsData = function (t) {
  var e = [void 0, void 0, void 0];
  e.push({ eventType: t });
  var r = Array.prototype.slice.call(arguments, 1);
  return ((e = e.concat(r)), this.processMetricsData.apply(this, e));
};
b.prototype.knownFields = function () {
  var e = ["eventTime", "eventType"];
  return e;
};
b.prototype.mtIncludeBaseFields = function () {
  return !1;
};
b.prototype.eventTime = function (e) {
  return (e && e.eventTime) || Date.now();
};
b.prototype.eventType = function (t) {
  return (t && t.eventType) || void 0;
};
var D = function (t) {
  u.apply(this, arguments);
};
D.prototype = Object.create(u.prototype);
D.prototype.constructor = D;
D.prototype.setDelegate = function (e) {
  return a.attachDelegate(this, e);
};
D.prototype.metricsData = function (t, e, r) {
  return this.processMetricsData.apply(this, arguments);
};
D.prototype.knownFields = function () {
  var e = ["eventType", "eventVersion", "impressions", "xpViewablePercentage", "xpViewableThreshold"];
  return e;
};
D.prototype.eventType = function (t) {
  return "impressions";
};
D.prototype.eventVersion = function (t) {
  return (t && t.eventVersion) || 3;
};
D.prototype.impressions = function (e) {
  return e ? e.impressions : void 0;
};
D.prototype.xpViewablePercentage = function (e) {
  var r = this._processor.eventHandlers.base;
  return r.xpViewablePercentage(e);
};
D.prototype.xpViewableThreshold = function (e) {
  var r = this._processor.config;
  return (e && e.xpViewableThreshold) || r.value("impressions.viewableThreshold");
};
var P = function (t) {
  u.apply(this, arguments);
};
P.prototype = Object.create(u.prototype);
P.prototype.constructor = P;
P.prototype.setDelegate = function (e) {
  return a.attachDelegate(this, e);
};
P.prototype.metricsData = function (t, e, r) {
  return this.processMetricsData.apply(this, arguments);
};
P.prototype.knownFields = function () {
  var e = [
    "eventType",
    "eventVersion",
    "id",
    "idType",
    "type",
    "typeDetails",
    "actionType",
    "actionDetails",
    "url",
    "duration",
    "position",
  ];
  return e;
};
P.prototype.eventType = function (t) {
  return "media";
};
P.prototype.eventVersion = function (t) {
  return (t && t.eventVersion) || 1;
};
var T = function (t) {
  (u.apply(this, arguments), (this.pageHistoryCache = []));
};
T.prototype = Object.create(u.prototype);
T.prototype.constructor = T;
T.prototype.setDelegate = function (e) {
  return a.attachDelegate(this, e);
};
T.prototype.metricsData = function (t, e, r) {
  return this.processMetricsData.apply(this, arguments);
};
T.prototype.knownFields = function () {
  var e = [
    "eventType",
    "eventVersion",
    "extRefUrl",
    "hostApp",
    "refApp",
    "refUrl",
    "requestStartTime",
    "responseStartTime",
    "responseEndTime",
    "pageHistory",
    "pageLoadTime",
    "pageRenderTime",
    "searchFilters",
    "searchTerm",
  ];
  return e;
};
T.prototype.eventType = function (t) {
  return "page";
};
T.prototype.eventVersion = function (t) {
  return (t && t.eventVersion) || 1;
};
T.prototype.pageHistory = function (e) {
  var r;
  if (((e = e || {}), e.pageHistory)) r = e.pageHistory;
  else {
    r = this.pageHistoryCache.slice(0);
    var o = e.page;
    o && (this.pageHistoryCache.length >= 5 && this.pageHistoryCache.shift(), this.pageHistoryCache.push(o));
  }
  return r;
};
var F = function (t) {
  u.apply(this, arguments);
};
F.prototype = Object.create(u.prototype);
F.prototype.constructor = F;
F.prototype.setDelegate = function (e) {
  return a.attachDelegate(this, e);
};
F.prototype.metricsData = function (t, e, r) {
  return this.processMetricsData.apply(this, arguments);
};
F.prototype.knownFields = function () {
  var e = [
    "actionDetails",
    "actionType",
    "actionUrl",
    "eventType",
    "eventVersion",
    "filters",
    "location",
    "targetId",
    "targetType",
    "term",
  ];
  return e;
};
F.prototype.eventType = function (t) {
  return "search";
};
F.prototype.eventVersion = function (t) {
  return (t && t.eventVersion) || 2;
};
var E = function (t) {
  u.apply(this, arguments);
};
E.prototype = Object.create(u.prototype);
E.prototype.constructor = E;
E.prototype.setDelegate = function (e) {
  return a.attachDelegate(this, e);
};
E.prototype.metricsData = function (e) {
  var r = [null, null, null].concat(Array.prototype.slice.call(arguments));
  return this.processMetricsData.apply(this, r);
};
E.prototype.knownFields = function () {
  var e = ["eventType", "eventVersion"];
  return e;
};
E.prototype.eventType = function (t) {
  return "transaction";
};
E.prototype.eventVersion = function (t) {
  return (t && t.eventVersion) || 1;
};
var we = function (t) {
    ((this.account = new k(t)),
      (this.base = new y(t)),
      (this.buyConfirmed = new d(t)),
      (this.click = new m(t)),
      (this.dialog = new x(t)),
      (this.enter = new _(t)),
      (this.exit = new M(t)),
      (this.flexible = new b(t)),
      (this.impressions = new D(t)),
      (this.media = new P(t)),
      (this.page = new T(t)),
      (this.search = new F(t)),
      (this.transaction = new E(t)),
      f.attachDelegateInfo(this.account),
      f.attachDelegateInfo(this.base),
      f.attachDelegateInfo(this.buyConfirmed),
      f.attachDelegateInfo(this.click),
      f.attachDelegateInfo(this.enter),
      f.attachDelegateInfo(this.exit),
      f.attachDelegateInfo(this.flexible),
      f.attachDelegateInfo(this.impressions),
      f.attachDelegateInfo(this.media),
      f.attachDelegateInfo(this.page),
      f.attachDelegateInfo(this.search),
      f.attachDelegateInfo(this.transaction));
  },
  _e = function (t) {
    var e = {},
      r = [],
      o;
    if (t && t[0] && t[0].index !== void 0)
      for (var n = 0; n < t.length; ++n) ((o = t[n].index), e[o] || ((e[o] = !0), r.push(t[n])));
    return r;
  },
  V = function (t) {
    this._processor = t;
  };
V.prototype.getIdType = function (t, e) {
  var r = this._processor.config,
    o = "its",
    n = t.indexOf("."),
    i = n !== -1 ? t.substring(0, n) : o;
  return a.isString(e)
    ? i + e + "id"
    : r.value("compoundSeparator").then(function (s) {
        return i + s + "id";
      });
};
V.prototype.processMetricsData = function (t, e, r, o, n, i) {
  var s = [{ pageId: r, pageType: o, pageContext: n }];
  return (a.isArray(i) && (s = s.concat(i)), W.processMetricsData(t, e, !0, s));
};
V.prototype.applyFieldsMap = function (t, e) {
  var r = this._processor.config,
    o = this;
  return t && e
    ? r.value("fieldsMap").then(function (n) {
        var i = {};
        n = n || {};
        var s = O.valueForKeyPath(e, n, n.custom);
        if (s) {
          var p;
          if (Array.isArray(s)) for (p = 0; p < s.length; ++p) t[s[p]] && (i[s[p]] = t[s[p]]);
          else if (typeof s == "object")
            for (var h in s)
              for (p = 0; p < s[h].length; ++p) {
                var c = O.valueForKeyPath(s[h][p], t);
                if (c) {
                  i[h] = c;
                  break;
                }
              }
          else
            o._processor.system.logger.error(
              "mt-metricskit-processor-clickstream: incorrect data type provided to applyFieldsMap (only accepts objects and Arrays)",
            );
        } else
          o._processor.system.logger.error(
            "mt-metricskit-processor-clickstream: unable to get fieldsMap from config-source",
          );
        return i;
      })
    : (t ||
        this._processor.system.logger.error("mt-metricskit-processor-clickstream: No data provided to applyFieldsMap"),
      e ||
        this._processor.system.logger.error(
          "mt-metricskit-processor-clickstream: No sectionName provided to applyFieldsMap",
        ),
      Promise.resolve(void 0));
};
V.prototype.flattenImpressions = function (t, e) {
  var r = this._processor.config,
    o = function n(i, s, p) {
      var h = [],
        c,
        g,
        l,
        I,
        v = s || 1;
      if (i) {
        i = _e(i);
        for (var A = 0; A < i.length; A++) {
          if (((c = i[A]), typeof c.data == "string"))
            try {
              g = JSON.parse(c.data);
            } catch (S) {
              I = decodeURIComponent(c.data);
              try {
                g = JSON.parse(I);
              } catch (J) {
                this._processor.system.logger.error(
                  "mt-metricskit-processor-clickstream: non-JSON serialized data found on impression object. Cannot parse.",
                  S,
                );
              }
            }
          else g = c;
          g &&
            ((g.impressionTimes = c.timestamps),
            (g.impressionIndex = c.index),
            g.id &&
              !g.idType &&
              (c.kind === "genre" ? (g.idType = "label" + p + "id") : (g.idType = this.getIdType(g.id.toString(), p))),
            c.parent && c.parent.impressionId !== void 0 && (g.impressionParentId = c.parent.impressionId),
            (g.impressionId = v),
            (c.impressionId = v),
            ++v,
            h.push(g),
            O.valueForKeyPath("children.length", c) > 0 &&
              ((l = n(c.children, v, p)), (h = h.concat(l)), (v += l.length)));
        }
      } else this._processor.system.logger.warn("Fuse-Metrics: No impressions provided to to flattenImpressions");
      return h;
    }.bind(this);
  return r.value("compoundSeparator").then(function (n) {
    return o(t, e, n);
  });
};
V.prototype.buildLocationStructure = function (e, r) {
  for (var o = e, n = [], i; o;) ((i = r.call(r, o)), i && n.push(i), (o = o.parentNode));
  return n;
};
var K = function () {};
K.prototype.setDelegate = function (e) {
  return a.attachDelegate(this, e);
};
K.prototype.makeAjaxRequest = se.makeAjaxRequest;
var G = {
    attachDelegate: function (e, r) {
      return a.attachDelegate(e, r);
    },
    extend: function (e) {
      return a.extend.apply(a, arguments);
    },
    bindFunctionsContext: function (e) {
      if (e) for (var r in e) typeof e[r] == "function" && (e[r] = e[r].bind(e));
    },
  },
  be = {
    versionStringFromUserAgent: function (e, r) {
      return w.versionStringFromUserAgent(e, r);
    },
  },
  Te = function (e) {
    ((this.delegateExtension = f),
      (this.eventFields = new V(e)),
      G.bindFunctionsContext(this.eventFields),
      (this.keyValue = O),
      (this.network = new K()),
      (this.reflect = G),
      (this.string = be));
  },
  te = function (t) {
    this._eventHandler = new b(t);
  };
te.prototype.clientId = function (e) {
  return this._eventHandler
    .metricsData("", e)
    .toJSON()
    .then(function (r) {
      return r ? r.clientId : null;
    });
};
var ke = function (t) {
    this.base = new te(t);
  },
  re = function (e) {
    if (!a.isDefinedNonNull(e)) throw new Error("No delegate is provided to ClickstreamProcessor");
    ((this._initCalled = !1),
      (this._delegatePackage = e),
      (this.system = new Ie()),
      (this.config = this._delegatePackage.config),
      (this.eventHandlers = new we(this)),
      (this.eventFields = new ke(this)),
      (this.utils = new Te(this)),
      (this._constraints = null));
  };
re.prototype.init = function () {
  var e = Promise.resolve();
  return (
    this._initCalled ||
      ((this._initCalled = !0),
      this._delegatePackage &&
        (a.setDelegates(this.eventHandlers, this._delegatePackage),
        a.setDelegates(this.system, this._delegatePackage),
        a.setDelegates(this.utils, this._delegatePackage)),
      ge(this.config),
      (e = this._delegatePackage.init()),
      (this._constraints = new ae(this.config, { environment: this.system.environment }))),
    e
  );
};
re.prototype.cleanup = function () {
  (this._delegatePackage && a.isFunction(this._delegatePackage.cleanup) && this._delegatePackage.cleanup(),
    he(this.config),
    a.resetDelegates(this.eventHandlers),
    a.resetDelegates(this.system),
    a.resetDelegates(this.utils),
    (this.config = null),
    (this.system = null),
    (this.eventHandlers = null),
    (this.utils = null),
    (this._delegatePackage = null),
    (this._constraints = null),
    (this._initCalled = !1));
};
export { re as ClickstreamProcessor };
