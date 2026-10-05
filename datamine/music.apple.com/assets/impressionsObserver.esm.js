import { r as a } from "./mt-metricskit-utils-private.esm.js";
const d = function (e) {
  ((this._startTime = e), (this._duration = Date.now() - e));
};
d.prototype.getDuration = function () {
  return this._duration;
};
d.prototype.getStartTime = function () {
  return this._startTime;
};
d.prototype.toJSON = function () {
  return { s: this._startTime, d: this._duration };
};
const m = function (e, t) {
  ((this._activeStartTime = null),
    (this._activeDescendantCount = 0),
    (this._accumulatedImpressionItems = []),
    (this._impressionInfo = t),
    (this._target = e),
    (this._ancestors = new Set()),
    (this._activatedByChildren = !1),
    (this._finalizedImpressionInfo = !1));
};
m.prototype.isActive = function () {
  return Number.isInteger(this._activeStartTime);
};
m.prototype.getTarget = function () {
  return this._target;
};
m.prototype.getAncestors = function () {
  return this._ancestors;
};
m.prototype.active = function (e, t, s) {
  this.isActive() ||
    ((this._activeStartTime = e),
    this._ancestors.forEach(function (o) {
      const c = s.get(o);
      c ? c._descendantBecameActive(e, t) : this._ancestors.delete(o);
    }, this),
    t(this));
};
m.prototype.inactive = function (e, t) {
  this.isActive() &&
    (this._activeDescendantCount > 0 ||
      (this._ancestors.forEach(function (s) {
        const o = t.get(s);
        o ? o._descendantBecameInactive(e, t) : this._ancestors.delete(s);
      }, this),
      this._accumulatedImpressionItems.push(new d(this._activeStartTime)),
      (this._activeStartTime = null),
      e(this)));
};
m.prototype.setImpressionInfo = function (e) {
  this._impressionInfo = e;
};
m.prototype.getImpressionInfo = function (e) {
  if (!this._impressionInfo || !this._finalizedImpressionInfo) {
    const t = e(this._target);
    (a.isDefinedNonNull(this._impressionInfo) && a.isDefinedNonNull(t)
      ? (this._impressionInfo = a.extend({}, this._impressionInfo, t))
      : a.isDefinedNonNull(t) && (this._impressionInfo = t),
      (this._finalizedImpressionInfo = !0));
  }
  return this._impressionInfo;
};
m.prototype.toJSON = function (e, t) {
  const s = {},
    o = [],
    c = this.getImpressionInfo(e);
  return c
    ? (a.extend(s, c),
      (s.viewedInfo = this._accumulatedImpressionItems.map(function (i) {
        return (t(i) && o.push(i.getStartTime()), i.toJSON());
      })),
      (s.impressionTimes = o),
      s)
    : null;
};
m.prototype.isActivatedByChildren = function () {
  return this._activatedByChildren;
};
m.prototype._descendantBecameActive = function (e, t) {
  (this._activeDescendantCount++,
    !this.isActive() && ((this._activeStartTime = e), (this._activatedByChildren = !0), t(this)));
};
m.prototype._descendantBecameInactive = function (e, t) {
  this.isActive() &&
    (this._activeDescendantCount--,
    this._activeDescendantCount <= 0 &&
      (this._accumulatedImpressionItems.push(new d(this._activeStartTime)),
      (this._activeStartTime = null),
      (this._activeDescendantCount = 0),
      this._activatedByChildren ||
        this._ancestors.forEach(function (s) {
          const o = t.get(s);
          o && o._descendantBecameInactive(e, t);
        }, this),
      (this._activatedByChildren = !1),
      e(this)));
};
const I = function () {},
  _ = { debug: I, warn: I, info: I, error: I },
  h = function (e, t, s) {
    ((this._activeElements = new Set()),
      (this._accumulatedElements = new Set()),
      (this._impressionInfoAttribute = t || null),
      (this._logger = s || _),
      (this._observedImpressionEntities = new Map()),
      (this._unobservedElements = new Set()),
      (this._viewableThreshold = e || Number.POSITIVE_INFINITY));
  };
h.prototype.setDelegate = function (e) {
  return a.attachDelegate(this, e);
};
h.prototype.observe = function (e) {
  e = e || [];
  const t = e.map(function (s) {
    return { element: s, impressionData: null };
  });
  return this.observeElementsWithInitData(t);
};
h.prototype.observeElementsWithInitData = function (e) {
  e = e || [];
  const t = this.getObservedElements();
  e.forEach(function (s) {
    const o = s.element,
      c = s.impressionData;
    if ((this._unobservedElements.delete(o), this._observedImpressionEntities.has(o))) {
      const r = this._observedImpressionEntities.get(o);
      a.isDefinedNonNull(c) && r.setImpressionInfo(c);
      return;
    }
    const i = new m(o, c);
    (this._observedImpressionEntities.set(o, i),
      t.forEach(function (r) {
        this.nodeIsAncestor(r, o)
          ? i.getAncestors().add(r)
          : this.nodeIsAncestor(o, r) && this._observedImpressionEntities.get(r).getAncestors().add(o);
      }, this),
      e.forEach(function (r) {
        const p = r.element;
        this.nodeIsAncestor(p, o) && i.getAncestors().add(p);
      }, this));
  }, this);
};
h.prototype.unobserve = function (e) {
  e = e || [];
  const t = function (s) {
    (this._activeElements.delete(s.getTarget()), this._accumulatedElements.add(s.getTarget()));
  }.bind(this);
  e.forEach(function (s) {
    const o = this._observedImpressionEntities.get(s);
    (this._unobservedElements.add(s),
      o && (o.inactive(t, this._observedImpressionEntities), this._activeElements.delete(o.getTarget())));
  }, this);
};
h.prototype.recordIntersection = function (e) {
  e = e || {};
  const t = e.isIntersecting,
    s = this._activeElements.has(e.target),
    o = function (i) {
      this._activeElements.add(i.getTarget());
    }.bind(this),
    c = function (i) {
      (this._activeElements.delete(i.getTarget()), this._accumulatedElements.add(i.getTarget()));
    }.bind(this);
  if (t && !s) {
    const i = this._observedImpressionEntities.get(e.target),
      r = Date.now();
    i.active(r, o, this._observedImpressionEntities);
  } else !t && s && this._observedImpressionEntities.get(e.target).inactive(c, this._observedImpressionEntities);
};
h.prototype.getSnapshotImpressions = function (e) {
  const t = [],
    s = new Set(),
    o = new Map();
  let c = 1;
  e &&
    this._recordSnapshotTriggerElement(e, function (r, p) {
      const u = a.extend({}, p);
      (a.isDefinedNonNull(u.impressionId) || (u.impressionId = c++), o.set(r, u), t.push(u), s.add(r));
    });
  const i = this.extractImpressionInfo.bind(this);
  return (
    this._activeElements.forEach(function (r) {
      if (!s.has(r)) {
        const u = this._observedImpressionEntities.get(r).getImpressionInfo(i);
        if (u) {
          const f = a.extend({}, u);
          (a.isDefinedNonNull(f.impressionId) || (f.impressionId = c++), o.set(r, f), t.push(f));
        }
      }
    }, this),
    this._fillImpressionParentIds(o),
    t
  );
};
h.prototype.getAccumulatedImpressions = function () {
  const e = this._viewableThreshold,
    t = [],
    s = function (r) {
      return r.getDuration() >= e;
    },
    o = this.extractImpressionInfo.bind(this);
  let c = 1;
  const i = new Map();
  return (
    this._accumulatedElements.forEach(function (r) {
      const u = this._observedImpressionEntities.get(r).toJSON(o, s);
      u && (a.isDefinedNonNull(u.impressionId) || (u.impressionId = c++), i.set(r, u), t.push(u));
    }, this),
    this._fillImpressionParentIds(i),
    t
  );
};
h.prototype.consumeImpressions = function () {
  const e = function (i) {
      this._accumulatedElements.add(i.getTarget());
    }.bind(this),
    t = new Set();
  this._activeElements.forEach(function (i) {
    const r = this._observedImpressionEntities.get(i);
    r.isActivatedByChildren() || (t.add(i), r.inactive(e, this._observedImpressionEntities));
  }, this);
  const s = this.getAccumulatedImpressions();
  this.clearAccumulatedImpressions();
  const o = function () {},
    c = Date.now();
  return (
    this._activeElements.forEach(function (i) {
      const r = this._observedImpressionEntities.get(i);
      t.has(i) && r.active(c, o, this._observedImpressionEntities);
    }, this),
    s
  );
};
h.prototype.clearAccumulatedImpressions = function () {
  (this._unobservedElements.forEach(function (e) {
    (this._accumulatedElements.delete(e),
      this._observedImpressionEntities.delete(e),
      this._unobservedElements.delete(e));
  }, this),
    this._accumulatedElements.forEach(function (e) {
      const t = this._observedImpressionEntities.get(e);
      t._accumulatedImpressionItems = [];
    }, this),
    this._accumulatedElements.clear());
};
h.prototype.extractImpressionInfo = function (e) {
  let t = null;
  if (e)
    try {
      ((t = e.getAttribute(this._impressionInfoAttribute)), (t = JSON.parse(t)));
    } catch (s) {
      (this._logger.error("Unable to parse the impression data: " + t), (t = null));
    }
  return t;
};
h.prototype.nodeIsAncestor = function (e, t) {
  return !!e && e !== t && e.contains(t);
};
h.prototype.getNodeParent = function (e, t) {
  let s = null;
  if (a.isDefinedNonNull(e) && a.isDefinedNonNull(t)) for (s = e.parentNode; s != null && !t.has(s);) s = s.parentNode;
  return s;
};
h.prototype.getObservedElements = function () {
  return [...this._observedImpressionEntities.keys()];
};
h.prototype.cleanup = function () {
  (this._unobservedElements.clear(),
    this._activeElements.clear(),
    this._accumulatedElements.clear(),
    this._observedImpressionEntities.clear());
};
h.prototype.destroy = function () {
  (this.cleanup(),
    (this._activeElements = null),
    (this._accumulatedElements = null),
    (this._impressionInfoAttribute = null),
    (this._logger = null),
    (this._observedImpressionEntities = null),
    (this._viewableThreshold = null),
    (this._unobservedElements = null),
    a.detachMethods(this));
};
h.prototype._recordSnapshotTriggerElement = function (e, t) {
  let s;
  (this._observedImpressionEntities.has(e)
    ? (s = this._recordObservedTriggerElement(e, t))
    : (s = this._recordUnobservedTriggerElement(e, t)),
    s && t(e, s));
};
h.prototype._recordObservedTriggerElement = function (e, t) {
  const s = this._observedImpressionEntities.get(e),
    o = this.extractImpressionInfo.bind(this);
  let c = null;
  return (
    s &&
      ((c = s.getImpressionInfo(o)),
      c &&
        s.getAncestors().forEach(function (i) {
          const r = this._observedImpressionEntities.get(i);
          if (r) {
            const p = r.getImpressionInfo(o);
            p && t && t(i, p);
          }
        }, this)),
    c
  );
};
h.prototype._recordUnobservedTriggerElement = function (e, t) {
  const s = this.extractImpressionInfo(e);
  if (s) {
    const o = this.extractImpressionInfo.bind(this);
    this._observedImpressionEntities.forEach(function (c, i) {
      if (this.nodeIsAncestor(i, e)) {
        const r = c.getImpressionInfo(o);
        r && t && t(i, r);
      }
    }, this);
  }
  return s;
};
h.prototype._fillImpressionParentIds = function (e) {
  e.forEach(function (t, s) {
    if (a.isDefinedNonNull(t.impressionParentId)) return;
    const o = this._observedImpressionEntities.has(s)
        ? this._observedImpressionEntities.get(s).getAncestors()
        : this._observedImpressionEntities,
      c = this.getNodeParent(s, o),
      i = e.get(c);
    a.isDefinedNonNull(i) && a.isDefinedNonNull(i.impressionId) && (t.impressionParentId = i.impressionId);
  }, this);
};
const g = "data-metrics-impressions";
function v(n) {
  return "length" in n ? Array.from(n) : [n];
}
function b(n) {
  const e = {};
  return (
    (n = n || {}),
    (e.viewableThreshold = a.isNumber(n.viewableThreshold) ? n.viewableThreshold : 1),
    (e.viewablePercentage = a.isNumber(n.viewablePercentage) ? n.viewablePercentage : 0),
    (e.impressionInfoAttribute = n.dataAttribute || g),
    (e.logger = n.logger || _),
    (e.root = n.root),
    (e.rootMargin = n.rootMargin),
    e
  );
}
const l = function (e) {
  ((this._options = b(e)),
    (this._logger = this._options.logger),
    (this._impressionTracker = new h(
      this._options.viewableThreshold,
      this._options.impressionInfoAttribute,
      this._logger,
    )),
    (this._elementObserver = this._createIntersectionObserver(
      { root: this._options.root, rootMargin: this._options.rootMargin, threshold: this._options.viewablePercentage },
      this._impressionTracker.recordIntersection.bind(this._impressionTracker),
    )));
};
l.prototype.setDelegate = function (e) {
  return this._impressionTracker.setDelegate(e);
};
l.prototype.observe = function (e) {
  if (!this._elementObserver || !e) return;
  const t = [],
    s = [];
  let o = [];
  e = v(e);
  const c = a.globalScope().Element;
  (e.forEach(function (i, r) {
    "element" in i && "impressionData" in i
      ? (s.push(i), o.push(i.element))
      : c && i instanceof c
        ? (t.push(i), o.push(i))
        : this._logger.warn("ImpressionObserver.observe: The provided element at [" + r + "] is not supported.");
  }, this),
    s.length > 0 && this._impressionTracker.observeElementsWithInitData(s),
    t.length > 0 && this._impressionTracker.observe(t),
    o.forEach(function (i) {
      this._elementObserver.observe(i);
    }, this));
};
l.prototype.unobserve = function (e) {
  !this._elementObserver ||
    !e ||
    ((e = v(e)),
    e.forEach(function (t) {
      this._elementObserver.unobserve(t);
    }, this),
    this._impressionTracker.unobserve(e));
};
l.prototype.accumulatedImpressions = function () {
  return this._impressionTracker.getAccumulatedImpressions();
};
l.prototype.consumeImpressions = function () {
  return this._impressionTracker.consumeImpressions();
};
l.prototype.consumeAndCleanupImpressions = function () {
  const e = this._impressionTracker.consumeImpressions();
  return (this.cleanup(), e);
};
l.prototype.clearAccumulatedImpressions = function () {
  return this._impressionTracker.clearAccumulatedImpressions();
};
l.prototype.snapshotImpressions = function (e) {
  return this._impressionTracker.getSnapshotImpressions(e);
};
l.prototype.cleanup = function () {
  (this._impressionTracker.getObservedElements().forEach(function (t) {
    this._elementObserver.unobserve(t);
  }, this),
    this._impressionTracker.cleanup());
};
l.prototype.destroy = function () {
  (this._elementObserver && this._elementObserver.disconnect(),
    this._impressionTracker && this._impressionTracker.destroy(),
    (this._options = null),
    (this._elementObserver = null),
    (this._impressionTracker = null));
};
l.prototype._createIntersectionObserver = function (e, t) {
  const s = a.globalScope().IntersectionObserver;
  if (!s) return (this._logger.error("IntersectionObserver is not available in the environment."), null);
  const o = function (i) {
    for (let r = 0; r < i.length; r++) {
      const p = i[r];
      t({ target: p.target, isIntersecting: p.isIntersecting, intersectionRatio: p.intersectionRatio });
    }
  };
  return new s(o, e);
};
const E = "impressions.viewablePercentage",
  T = "impressions.viewableThreshold",
  A = function (e, t) {
    return Promise.all([e.value(E), e.value(T)]).then(function ([s, o]) {
      return new l(a.extend({ viewablePercentage: s, viewableThreshold: o }, t));
    });
  };
export { g as DEFAULT_IMPRESSION_INFO_ATTRIBUTE, l as ImpressionObserver, A as newInstanceWithMetricsConfig };
