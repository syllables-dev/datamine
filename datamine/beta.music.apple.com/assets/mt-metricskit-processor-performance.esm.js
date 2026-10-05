import { s as R, e as _, r as s, g as C } from "./mt-metricskit-utils-private.esm.js";
import { c as F, C as q, e as H, s as K } from "./ae-client-kit-core.esm.js";
import { l as Q } from "./mt-client-logger-core.esm.js";
var U = K.Environment,
  V = R.exceptionString,
  P = function () {
    U.apply(this, arguments);
  };
P.prototype = new U();
P.prototype.constructor = P;
P.prototype.currentTimestamp = function () {
  return Date.now();
};
P.prototype.timeOriginOffset = function () {};
P.prototype.pageUrl = function () {
  throw V("system.environment", "pageUrl");
};
P.prototype.parentPageUrl = function () {};
var D = function () {};
D.prototype.setDelegate = function (e) {
  return s.attachDelegate(this, e);
};
D.prototype.recordEvent = function (e, r) {
  throw new Error(R.exceptionString("metrics.system.event_recorder", "recordEvent"));
};
D.prototype.sendMethod = function () {
  throw new Error(R.exceptionString("metrics.system.event_recorder", "sendMethod"));
};
D.prototype.flushUnreportedEvents = function (e) {};
var A = Q("mt-metricskit-processor-performance"),
  B = function (e) {
    ((this.environment = new P(e)), (this.eventRecorder = new D()), (this.logger = A));
  },
  k = H.Base,
  d = function (e) {
    k.apply(this, arguments);
  };
d.prototype = Object.create(k.prototype);
d.prototype.constructor = d;
d.prototype.environment = function () {
  return this._processor.system.environment;
};
d.prototype.eventRecorder = function () {
  return this._processor.system.eventRecorder;
};
d.prototype.knownFields = function () {
  var e = k.prototype.knownFields.call(this);
  return e.concat(["xpSamplingForced"]);
};
d.prototype.xpSamplingForced = function (e) {
  return (e && e.xpSamplingForced) || this._processor.config.value("performance.samplingForced");
};
d.prototype.topic = function () {
  return this._processor.config.topic();
};
d.prototype.metricsData = function (e) {
  var r = Array.prototype.slice.call(arguments, 1);
  return _.processMetricsData(this, this.knownFields(), e, r);
};
d.prototype.page = function (e) {
  var r = null;
  if (e)
    return (
      e.page
        ? (r = e.page)
        : this.pageType(e) &&
          this.pageId(e) &&
          (r = Promise.all([this.pageType(e), this.pageId(e), this._processor.config.value("compoundSeparator")]).then(
            function (n) {
              var a = n[0],
                c = n[1],
                u = n[2];
              return a + u + c;
            },
          )),
      r
    );
  throw "No data provided to event_handlers/base page function";
};
d.prototype.pageId = function (e) {
  return e && e.pageId;
};
d.prototype.pageType = function (e) {
  return e && e.pageType;
};
d.prototype.pageContext = function (e) {
  return e && e.pageContext;
};
d.prototype.pageDetails = function (e) {
  return e && e.pageDetails;
};
d.prototype.pageUrl = function (e) {
  return (e && e.pageUrl) || this._processor.system.environment.pageUrl();
};
d.prototype.parentPageUrl = function (e) {
  return (e && e.parentPageUrl) || this._processor.system.environment.parentPageUrl();
};
var G = R.exceptionString,
  y = function (e) {
    this._processor = e;
  };
y.prototype.setDelegate = function (e, r) {
  return s.attachDelegate(this, e, r);
};
y.prototype.knownFields = function () {
  throw G("PerformanceEventHandler", "knownFields");
};
y.prototype.processMetricsData = function (e, r) {
  var n = Array.prototype.slice.call(arguments, 2),
    a = this._processor.config,
    c = this._processor._constraints,
    u = this._processor.system.logger,
    h = this;
  if (!s.isDefinedNonNullNonEmpty(e)) return (u.error("Unable to generate metricsData with non-eventType: " + e), null);
  var g = a
    .metricsDisabledOrBlacklistedEvent(e)
    .then(function (p) {
      if (p) throw "event was disabled";
    })
    .then(function () {
      var p = h._processor.eventHandlers.base;
      return p.metricsData.apply(p, [r].concat(n));
    })
    .then(function (p) {
      var E = [];
      n = [p].concat(n);
      var S = _.processMetricsData(h, h.knownFields(), r, n),
        O = {};
      return (
        Object.keys(S).forEach(function (I) {
          var b = S[I],
            M = Promise.resolve(b).then(function (L) {
              O[I] = L;
            });
          E.push(M);
        }),
        Promise.all(E).then(function () {
          return _.mergeAndCleanEventFields(O);
        })
      );
    })
    .then(function (p) {
      return c.applyConstraintTreatments(p);
    })
    .then(function (p) {
      return a.removeBlacklistedFields(p);
    })
    .catch(function (p) {
      return (
        u.error(
          "PerformanceProcessor: Unable to generate the event (" + e + ") for the topic " + a.topic() + ", due to " + p,
        ),
        null
      );
    });
  return g;
};
var l = function (e) {
  ((this._eventData = {}),
    this._sampledIn,
    (this._perfProcessor = e),
    (this._initDataPromise = null),
    (this._operationPromiseQueue = []));
};
l.prototype._resetSampling = function () {
  return this.sampledIn().then(
    function () {
      this._sampledIn = null;
    }.bind(this),
  );
};
l.prototype._getInitDataPromise = function () {
  return this._initDataPromise instanceof Promise
    ? this._initDataPromise
    : ((this._initDataPromise = new Promise(
        function (e) {
          (this._perfProcessor.system.logger.warn(
            'The data is not initialized, will use an empty JSON as the event data. Did you forget to invoke "initializeData()"?',
          ),
            e(this._eventData));
        }.bind(this),
      )),
      this._initDataPromise);
};
l.prototype.setDelegate = function (e, r) {
  return s.attachDelegate(this, e, r);
};
l.prototype.mark = function (e, r) {
  var n = Promise.resolve();
  if (e) {
    s.isDefinedNonNull(r) || (r = this._perfProcessor.system.environment.currentTimestamp());
    var a = {};
    ((a[e] = r), (n = this.addData(a)));
  }
  return n;
};
l.prototype.initializeData = function () {
  var e = this;
  return (
    (this._initDataPromise = this.metricsData
      .apply(this, [!0].concat(Array.prototype.slice.call(arguments)))
      .then(function (r) {
        return (s.extend.apply(s, [e._eventData].concat(r)), e._eventData);
      })
      .then(function (r) {
        return e.sampledIn(r);
      })
      .then(function () {
        return e._eventData;
      })),
    this._operationPromiseQueue.push(this._initDataPromise),
    this._initDataPromise
  );
};
l.prototype.addData = function () {
  var e = Array.prototype.slice.call(arguments),
    r = Promise.all([this._getInitDataPromise(), this.sampledIn()]).then(
      function () {
        s.extend.apply(s, [this._eventData].concat(e));
      }.bind(this),
    );
  return (this._operationPromiseQueue.push(r), r);
};
l.prototype.metricsData = function (t) {
  return Promise.resolve(_.mergeAndCleanEventFields(Array.prototype.slice.call(arguments, 1)));
};
l.prototype.toJSON = function () {
  var e = this;
  return Promise.all(this._operationPromiseQueue)
    .then(function () {
      return e.metricsData(!1, e._eventData).then(function (r) {
        return r || {};
      });
    })
    .catch(function (r) {
      return (
        e._processor.system.logger.error(
          `An error occurred when generating performance event. Error: 
` + r,
        ),
        null
      );
    });
};
l.prototype.recordEvent = function () {
  var e = this,
    r = this.toJSON()
      .then(function (c) {
        var u = c.eventType,
          h = u ? e.sampledIn() : !1;
        return h;
      })
      .then(function (c) {
        var u = c ? e.toJSON() : Promise.resolve(null);
        return u;
      }),
    n = this._perfProcessor.config.topic(),
    a = Array.prototype.slice.call(arguments);
  return this._perfProcessor.system.eventRecorder.recordEvent
    .apply(this._perfProcessor.system.eventRecorder, [n, r].concat(a))
    .catch(function (c) {
      return (e._perfProcessor.system.logger.error("PerfProcessor: record event failed due to: " + c), null);
    });
};
l.prototype.forceSampling = function () {
  var e = this.addData({ xpSamplingForced: !0 });
  return e.then(this._resetSampling());
};
l.prototype.sampledIn = function (e) {
  var r = Promise.resolve(this._sampledIn);
  if (typeof this._sampledIn != "boolean") {
    var n = e
      ? Promise.resolve(e)
      : this._getInitDataPromise().then(function (a) {
          return a || {};
        });
    r = n.then(
      function (a) {
        return (
          a.eventType &&
            (this._sampledIn = C.isSampledIn(
              a.eventType,
              a.xpSamplingForced,
              a.xpSamplingPercentageUsers,
              a.xpSessionDuration,
              a.xpSamplingPercentage,
            )),
          this._sampledIn
        );
      }.bind(this),
    );
  }
  return r;
};
l.prototype.setClientCorrelationKey = function (e) {
  return this.addData({ clientCorrelationKey: e });
};
var T = function () {
  ((this._eventType = null), l.apply(this, arguments));
};
T.prototype = Object.create(l.prototype);
T.prototype.constructor = T;
T.prototype.initializeData = function (e) {
  var r = this;
  return (
    (this._eventType = e),
    (this._initDataPromise = this.metricsData
      .apply(this, [this._eventType, !0].concat(Array.prototype.slice.call(arguments, 1)))
      .then(function (n) {
        return (s.extend.apply(s, [r._eventData].concat(n)), r._eventData);
      })
      .then(function (n) {
        return r.sampledIn(n);
      })
      .then(function () {
        return r._eventData;
      })),
    this._initDataPromise
  );
};
T.prototype.toJSON = function () {
  return this._initDataPromise
    .then(
      function (e) {
        return this.metricsData.call(this, this._eventType, !1, this._eventData, { eventType: this._eventType });
      }.bind(this),
    )
    .then(function (e) {
      return e || {};
    });
};
var j = {
    FETCH_START: "fetchStartTime",
    DOMAIN_LOOKUP_START: "domainLookupStartTime",
    DOMAIN_LOOKUP_END: "domainLookupEndTime",
    CONNECTION_START: "connectionStartTime",
    CONNECTION_END: "connectionEndTime",
    SECURE_CONNECTION_START: "secureConnectionStartTime",
    REQUEST_START: "requestStartTime",
    RESPONSE_START: "responseStartTime",
    RESPONSE_END: "responseEndTime",
  },
  i = function () {
    l.apply(this, arguments);
  };
i.prototype = Object.create(l.prototype);
i.prototype.constructor = i;
s.extend(i.prototype, j);
i.prototype.markFetchStart = function (e) {
  return this.mark(this.FETCH_START, e);
};
i.prototype.markDomainLookupStart = function (e) {
  return this.mark(this.DOMAIN_LOOKUP_START, e);
};
i.prototype.markDomainLookupEnd = function (e) {
  return this.mark(this.DOMAIN_LOOKUP_END, e);
};
i.prototype.markConnectionStart = function (e) {
  return this.mark(this.CONNECTION_START, e);
};
i.prototype.markConnectionEnd = function (e) {
  return this.mark(this.CONNECTION_END, e);
};
i.prototype.markSecureConnectionStart = function (e) {
  return this.mark(this.SECURE_CONNECTION_START, e);
};
i.prototype.markRequestStart = function (e) {
  return this.mark(this.REQUEST_START, e);
};
i.prototype.markResponseStart = function (e) {
  return this.mark(this.RESPONSE_START, e);
};
i.prototype.markResponseEnd = function (e) {
  return this.mark(this.RESPONSE_END, e);
};
i.prototype.setRequestUrl = function (e) {
  return this.addData({ requestUrl: e });
};
i.prototype.setConnectionReused = function (e) {
  return this.addData({ connectionReused: e });
};
i.prototype.setDNSServersIPAddresses = function (e) {
  return this.addData({ dnsServersIPAddresses: e });
};
i.prototype.setEdgeNodeCacheStatus = function (e) {
  return this.addData({ edgeNodeCacheStatus: e });
};
i.prototype.setRedirectCount = function (e) {
  return this.addData({ redirectCount: e });
};
i.prototype.setResolvedIPAddress = function (e) {
  return this.addData({ resolvedIPAddress: e });
};
i.prototype.setStatusCode = function (e) {
  return this.addData({ statusCode: e });
};
i.prototype.recordEvent = function () {
  var e = this,
    r = this._perfProcessor.config.topic(),
    n = Array.prototype.slice.call(arguments),
    a = this.toJSON().then(function (u) {
      var h = u.eventType,
        g = h ? e.sampledIn() : !1;
      return g;
    }),
    c = Promise.all([this._perfProcessor.config.value("metricsUrl"), this.toJSON(), a]).then(
      function (u) {
        var h = null,
          g = u[0],
          p = u[1],
          E = u[2],
          S = p.requestUrl || (p.rawData && p.rawData.requestUrl) || "";
        return (S.indexOf(g) !== 0 && E && (h = p), h);
      }.bind(this),
    );
  return this._perfProcessor.system.eventRecorder.recordEvent
    .apply(this._perfProcessor.system.eventRecorder, [r, c].concat(n))
    .catch(function (u) {
      return (e._perfProcessor.system.logger.error("PerfProcessor: record event failed due to: " + u), null);
    });
};
var Y = {
    PAGE_REQUEST: "pageRequestTime",
    INTERSTITIAL_PAGE_APPEAR: "interstitialPageAppearTime",
    PAGE_APPEAR: "pageAppearTime",
    PAGE_USER_INTERACTIVE: "pageUserInteractiveTime",
    PAGE_END: "pageEndTime",
    PAGE_INTERRUPT: "pageInterruptTime",
    PRIMARY_DATA_REQUEST_START: "primaryDataRequestStartTime",
    PRIMARY_DATA_RESPONSE_START: "primaryDataResponseStartTime",
    PRIMARY_DATA_RESPONSE_END: "primaryDataResponseEndTime",
    PRIMARY_DATA_PARSE_START: "primaryDataParseStartTime",
    PRIMARY_DATA_PARSE_END: "primaryDataParseEndTime",
    MODEL_CONSTRUCTION_START: "modelConstructionStartTime",
    MODEL_CONSTRUCTION_END: "modelConstructionEndTime",
    MODEL_RENDER_START: "modelRenderStartTime",
    MODEL_RENDER_END: "modelRenderEndTime",
    RESOURCE_REQUEST_START: "resourceRequestStartTime",
    ON_SCREEN_RESOURCES_APPEAR_END: "onScreenResourcesAppearEndTime",
    RESOURCE_REQUEST_END: "resourceRequestEndTime",
  },
  z = { FULL: "full", VISIBLE: "visible", PARTIAL: "partial", PREVIOUSLY_SHOWN: "previouslyShown" },
  o = function () {
    l.apply(this, arguments);
  };
o.prototype = Object.create(l.prototype);
o.prototype.constructor = o;
s.extend(o.prototype, Y);
o.prototype.PRELOAD_STATUS = {};
s.extend(o.prototype.PRELOAD_STATUS, z);
o.prototype.markPageRequest = function (e) {
  return this.mark(this.PAGE_REQUEST, e);
};
o.prototype.markInterstitialPageAppear = function (e) {
  return this.mark(this.INTERSTITIAL_PAGE_APPEAR, e);
};
o.prototype.markPageAppear = function (e) {
  return this.mark(this.PAGE_APPEAR, e);
};
o.prototype.markPageUserInteractive = function (e) {
  return this.mark(this.PAGE_USER_INTERACTIVE, e);
};
o.prototype.markPageEnd = function (e) {
  return this.mark(this.PAGE_END, e);
};
o.prototype.markPageInterrupt = function (e) {
  return this.mark(this.PAGE_INTERRUPT, e);
};
o.prototype.markPrimaryDataRequestStart = function (e) {
  return this.mark(this.PRIMARY_DATA_REQUEST_START, e);
};
o.prototype.markPrimaryDataResponseStart = function (e) {
  return this.mark(this.PRIMARY_DATA_RESPONSE_START, e);
};
o.prototype.markPrimaryDataResponseEnd = function (e) {
  return this.mark(this.PRIMARY_DATA_RESPONSE_END, e);
};
o.prototype.markPrimaryDataParseStart = function (e) {
  return this.mark(this.PRIMARY_DATA_PARSE_START, e);
};
o.prototype.markPrimaryDataParseEnd = function (e) {
  return this.mark(this.PRIMARY_DATA_PARSE_END, e);
};
o.prototype.markModelConstructionStart = function (e) {
  return this.mark(this.MODEL_CONSTRUCTION_START, e);
};
o.prototype.markModelConstructionEnd = function (e) {
  return this.mark(this.MODEL_CONSTRUCTION_END, e);
};
o.prototype.markModelRenderStart = function (e) {
  return this.mark(this.MODEL_RENDER_START, e);
};
o.prototype.markModelRenderEnd = function (e) {
  return this.mark(this.MODEL_RENDER_END, e);
};
o.prototype.markResourceRequestStart = function (e) {
  return this.mark(this.RESOURCE_REQUEST_START, e);
};
o.prototype.markOnScreenResourcesAppearEnd = function (e) {
  return this.mark(this.ON_SCREEN_RESOURCES_APPEAR_END, e);
};
o.prototype.markResourceRequestEnd = function (e) {
  return this.mark(this.RESOURCE_REQUEST_END, e);
};
o.prototype.setIsAppLaunch = function (e) {
  return this.addData({ isAppLaunch: e });
};
o.prototype.setIsPrimaryDataResponseCached = function (e) {
  return this.addData({ isPrimaryDataResponseCached: e });
};
o.prototype.setPreloadStatus = function (e) {
  return this.addData({ preloadStatus: e });
};
o.prototype.setLaunchCorrelationKey = function (e) {
  return this.addData({ launchCorrelationKey: e });
};
var v = function () {
  y.apply(this, arguments);
};
v.prototype = Object.create(y.prototype);
v.prototype.constructor = v;
v.prototype.instance = function (e) {
  var r = new T(this._processor);
  return (r.setDelegate({ metricsData: this.metricsData.bind(this) }), r.initializeData.apply(r, arguments), r);
};
v.prototype.metricsData = function (e, r) {
  return this.processMetricsData.apply(this, Array.prototype.slice.call(arguments).concat([{ eventType: e }]));
};
v.prototype.knownFields = function () {
  var e = ["eventTime", "eventType", "xpSamplingPercentage"];
  return e;
};
v.prototype.xpSamplingPercentage = function (e) {
  return (e && e.xpSamplingPercentage) || this._processor.config.value("performance.samplingPercentage");
};
var f = function () {
  y.apply(this, arguments);
};
f.prototype = Object.create(y.prototype);
f.prototype.constructor = f;
f.prototype.instance = function () {
  var e = new i(this._processor);
  return (e.setDelegate({ metricsData: this.metricsData.bind(this) }), e.initializeData.apply(e, arguments), e);
};
f.prototype.fromTimingEntry = function (e) {
  return this._processor.utils.eventFields.fromTimingEntry(e, "loadUrl.timestampFields", "loadUrl.otherFields").then(
    function (r) {
      return this.instance(r);
    }.bind(this),
  );
};
f.prototype.metricsData = function (e) {
  return this.processMetricsData.apply(this, [this.eventType()].concat(Array.prototype.slice.call(arguments)));
};
f.prototype.knownFields = function () {
  var e = [
    "eventTime",
    "eventType",
    "eventVersion",
    "fetchStartTime",
    "domainLookupStartTime",
    "domainLookupEndTime",
    "connectionStartTime",
    "connectionEndTime",
    "secureConnectionStartTime",
    "requestStartTime",
    "responseStartTime",
    "responseEndTime",
    "requestUrl",
    "connectionReused",
    "connectionStartNStatRXBytes",
    "connectionStopNStatRXBytes",
    "connectionStartNStatTXBytes",
    "connectionStopNStatTXBytes",
    "dnsServersIPAddresses",
    "edgeNodeCacheStatus",
    "redirectCount",
    "resolvedIPAddress",
    "statusCode",
    "xpSessionDuration",
    "xpSamplingPercentageUsers",
  ];
  return e;
};
f.prototype.eventType = function (t) {
  return "loadUrl";
};
f.prototype.eventVersion = function (t) {
  return (t && t.eventVersion) || 2;
};
f.prototype.xpSessionDuration = function (e) {
  return (e && e.xpSessionDuration) || this._processor.config.value("performance.sessionDuration");
};
f.prototype.xpSamplingPercentageUsers = function (e) {
  return (e && e.xpSamplingPercentageUsers) || this._processor.config.value("performance.samplingPercentageUsers");
};
var m = function () {
  y.apply(this, arguments);
};
m.prototype = Object.create(y.prototype);
m.prototype.constructor = m;
m.prototype.instance = function (e, r, n) {
  var a = { pageId: e, pageType: r, pageContext: n },
    c = new o(this._processor);
  return (
    c.setDelegate({ metricsData: this.metricsData.bind(this) }),
    c.initializeData.apply(c, [a].concat(Array.prototype.slice.call(arguments, 3))),
    c
  );
};
m.prototype.metricsData = function (e) {
  return this.processMetricsData.apply(this, [this.eventType()].concat(Array.prototype.slice.call(arguments)));
};
m.prototype.knownFields = function () {
  var e = [
    "eventTime",
    "eventType",
    "eventVersion",
    "interstitialPageAppearTime",
    "isAppLaunch",
    "isPrimaryDataResponseCached",
    "launchCorrelationKey",
    "page",
    "pageContext",
    "pageDetails",
    "pageId",
    "pageType",
    "pageUrl",
    "pageAppearTime",
    "pageEndTime",
    "pageInterruptTime",
    "pageRequestTime",
    "pageUserInteractiveTime",
    "parentPageUrl",
    "preloadStatus",
    "primaryDataRequestStartTime",
    "primaryDataResponseStartTime",
    "primaryDataResponseEndTime",
    "primaryDataParseStartTime",
    "primaryDataParseEndTime",
    "modelConstructionStartTime",
    "modelConstructionEndTime",
    "modelRenderStartTime",
    "modelRenderEndTime",
    "onScreenResourcesAppearEndTime",
    "resourceRequestStartTime",
    "resourceRequestEndTime",
    "xpSessionDuration",
    "xpSamplingPercentageUsers",
  ];
  return e;
};
m.prototype.eventType = function (t) {
  return "pageRender";
};
m.prototype.eventVersion = function (t) {
  return (t && t.eventVersion) || 3;
};
m.prototype.page = function (e) {
  return this._processor.eventHandlers.base.page(e);
};
m.prototype.pageContext = function (e) {
  return this._processor.eventHandlers.base.pageContext(e);
};
m.prototype.pageDetails = function (e) {
  return this._processor.eventHandlers.base.pageDetails(e);
};
m.prototype.pageId = function (e) {
  return this._processor.eventHandlers.base.pageId(e);
};
m.prototype.pageType = function (e) {
  return this._processor.eventHandlers.base.pageType(e);
};
m.prototype.pageUrl = function (e) {
  return this._processor.eventHandlers.base.pageUrl(e);
};
m.prototype.parentPageUrl = function (e) {
  return this._processor.eventHandlers.base.parentPageUrl(e);
};
m.prototype.xpSessionDuration = function (e) {
  return (e && e.xpSessionDurationPageRender) || this._processor.config.value("performance.sessionDurationPageRender");
};
m.prototype.xpSamplingPercentageUsers = function (e) {
  return (
    (e && e.xpSamplingPercentageUsersPageRender) ||
    this._processor.config.value("performance.samplingPercentageUsersPageRender")
  );
};
var J = function (e) {
    ((this.base = new d(e)), (this.flexible = new v(e)), (this.loadUrl = new f(e)), (this.pageRender = new m(e)));
  },
  N = function (e) {
    this._perfProcessor = e;
  };
N.prototype.fromTimingEntry = function (e, r, n) {
  return this._perfProcessor.config.value("fieldsMap").then(
    function (a) {
      var c = _.applyFieldsMap(e, r, a),
        u = this.applyTimeOffset(c),
        h = s.copyKeysAndValues(!1, !1, !1, e),
        g = {};
      n && (g = _.applyFieldsMap(e, n, a));
      var p = s.extend(u, g, { rawData: h });
      return p;
    }.bind(this),
  );
};
N.prototype.applyTimeOffset = function (e) {
  var r = this._perfProcessor.system.environment.timeOriginOffset();
  if (s.isNumber(r))
    for (var n in e)
      s.isNumber(e[n])
        ? (e[n] = Math.floor(e[n] + r))
        : A.warn("mt-metricskit-processor-performance: unable to apply time offset to non-number field " + n);
  else
    A.warn(
      "mt-metricskit-processor-performance: unable to apply time offsets: environment.timeOriginOffset() returned a non-number value",
    );
  return e;
};
var w = function (e) {
  this.eventFields = new N(e);
};
w.prototype._utClearSessions = C._utClearSessions;
var x = function (e) {
  if (!s.isDefinedNonNull(e)) throw new Error("No delegate is provided to PerformanceProcessor");
  ((this._initPromise = null),
    (this._delegatePackage = e),
    (this.system = new B(this)),
    (this.config = this._delegatePackage.config),
    (this.eventHandlers = new J(this)),
    (this.utils = new w(this)));
};
x.prototype.init = function () {
  if (!this._initPromise) {
    if (this._delegatePackage) {
      var e = this._delegatePackage._useOrginalContextForDelegateFunc;
      (s.setDelegates(this.eventHandlers, this._delegatePackage, e),
        s.setDelegates(this.system, this._delegatePackage, e));
    }
    (F(this.config),
      (this._initPromise = this._delegatePackage.init()),
      (this._constraints = new q(this.config, { environment: this.system.environment })));
  }
  return this._initPromise;
};
x.prototype.cleanup = function () {
  (this._delegatePackage && s.isFunction(this._delegatePackage.cleanup) && this._delegatePackage.cleanup(),
    this.config.cleanup(),
    s.resetDelegates(this.eventHandlers),
    s.resetDelegates(this.system),
    s.resetDelegates(this.utils),
    (this.config = null),
    (this.system = null),
    (this.eventHandlers = null),
    (this.utils = null),
    (this._delegatePackage = null),
    (this._initPromise = null),
    (this._constraints = null));
};
export { x as PerformanceProcessor };
