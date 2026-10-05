import {
  ad as d,
  ao as $,
  a8 as B,
  as as v,
  at as k,
  au as g,
  aH as b,
  aI as rt,
  ay as m,
  aJ as w,
  aj as q,
  aK as wt,
  aL as U,
  aM as L,
  aN as C,
  aO as Lt,
  aP as jt,
  aQ as ct,
  aA as gt,
  aR as At,
  aS as ht,
  aT as Gt,
  ap as F,
  aU as xt,
  aV as Dt,
  aq as Mt,
  av as pt,
  aw as vt,
  aW as Ct,
  aX as It,
  aE as Bt,
  aY as Vt,
} from "./main.js";
var I;
(function (a) {
  ((a.AdaptiveVerticalCapped = "adaptive-vertical-capped"),
    (a.Horizontal = "horizontal"),
    (a.List = "list"),
    (a.Vertical = "vertical"),
    (a.VerticalCapped = "vertical-capped"));
})(I || (I = {}));
function ft(a, t) {
  var e, i, n;
  if ((a == null ? void 0 : a.type) !== d.CanvasShelfCollection) return !1;
  const o = (e = a.attributes) === null || e === void 0 ? void 0 : e.display;
  return !o || !("style" in o)
    ? ($.warn(t, `${a.type}/${a.id} missing attributes.display.style`), !1)
    : Array.isArray(
          (n = (i = a.relationships) === null || i === void 0 ? void 0 : i.contents) === null || n === void 0
            ? void 0
            : n.data,
        )
      ? !0
      : ($.warn(t, `${a.type}/${a.id} missing relationship contents resource identifiers.`), !1);
}
function Rt(a, t, e) {
  if (!e) return a.attributes.display;
  const i = a.attributes.seeAllDisplay;
  return B(i) ? ($.warn(t, `Missing See All display attributes in ${a.type}/${a.id}`), a.attributes.display) : i;
}
function R(a, t, e = "row") {
  switch (a.layoutDirection) {
    case I.AdaptiveVerticalCapped:
      return { kind: "adaptive", preferShelfLayout: !1, shouldCapGridRows: !0, numberOfShelfRows: 3 };
    case I.Horizontal:
      return { kind: "shelf", numberOfRows: 1 };
    case I.List:
      return "list";
    case I.Vertical:
      return { kind: "grid", flowStyle: e };
    case I.VerticalCapped:
      return { kind: "grid", shouldCapRows: !0, flowStyle: e };
    default:
      return t;
  }
}
var p;
(function (a) {
  ((a.AdaptiveHorizontalCircleLockup = "adaptive-horizontal-circle-lockup"),
    (a.AdaptiveHorizontalSquareLockupMedium = "adaptive-horizontal-square-lockup-medium"),
    (a.ArtistFeaturedContent = "artist-featured-content"),
    (a.ArtistFeaturedTrackLockup = "artist-featured-track-lockup"),
    (a.BrickLockup = "brick-lockup"),
    (a.BrickLockupLarge = "brick-lockup-large"),
    (a.CalendarEventLockup = "calendar-event-lockup"),
    (a.CircleLockup = "circle-lockup"),
    (a.HorizontalLockup = "horizontal-lockup"),
    (a.SquareLockup = "square-lockup"),
    (a.SquareLockupLarge = "square-lockup-large"),
    (a.SquareLockupMedium = "square-lockup-medium"),
    (a.TrackLockup = "track-lockup"));
})(p || (p = {}));
function fi(a) {
  return (a == null ? void 0 : a.type) === d.CanvasShelfCollection;
}
var Y;
(function (a) {
  ((a.DetailedReleaseInformation = "detailed-release-information"),
    (a.ReleaseYear = "release-year"),
    (a.ShortEditorialNotes = "short-editorial-notes"));
})(Y || (Y = {}));
var W;
(function (a) {
  a.StandardEditorialNotes = "standard-editorial-notes";
})(W || (W = {}));
var nt;
(function (a) {})(nt || (nt = {}));
var Q;
(function (a) {
  ((a.CityAndRegion = "city-and-region"), (a.VenueAndTimeMultiline = "venue-and-time-multiline"));
})(Q || (Q = {}));
var X;
(function (a) {
  a.ShortEditorialNotes = "short-editorial-notes";
})(X || (X = {}));
var V;
(function (a) {
  ((a.DetailedReleaseInformation = "detailed-release-information"),
    (a.ReleaseYear = "release-year"),
    (a.ShortDuration = "short-duration"));
})(V || (V = {}));
var ot;
(function (a) {
  a.ShortEditorialNotes = "short-editorial-notes";
})(ot || (ot = {}));
var tt;
(function (a) {
  a.AlbumAndReleaseYear = "album-and-release-year";
})(tt || (tt = {}));
var lt;
(function (a) {
  ((a.DetailedEditorialNotes = "detailed-editorial-notes"), (a.ShortEditorialNotes = "short-editorial-notes"));
})(lt || (lt = {}));
var it;
(function (a) {
  ((a.DetailedAttribution = "detailed-attribution"), (a.ShortDuration = "short-duration"));
})(it || (it = {}));
var st;
(function (a) {})(st || (st = {}));
const Nt = new Set(Object.values(Y)),
  Tt = new Set(Object.values(W)),
  Et = new Set(Object.values(nt)),
  zt = new Set(Object.values(Q)),
  qt = new Set(Object.values(X)),
  Ot = new Set(Object.values(V)),
  Ht = new Set(Object.values(ot)),
  Ft = new Set(Object.values(tt)),
  $t = new Set(Object.values(lt)),
  Pt = new Set(Object.values(it)),
  Kt = new Set(Object.values(st));
function Ut(a) {
  var t;
  return (t = a == null ? void 0 : a[d.Albums]) === null || t === void 0 ? void 0 : t.find((e) => Nt.has(e));
}
function Yt(a) {
  var t;
  return (t = a == null ? void 0 : a[d.AppleCurators]) === null || t === void 0 ? void 0 : t.find((e) => Tt.has(e));
}
function Wt(a) {
  var t;
  return (t = a == null ? void 0 : a[d.Artists]) === null || t === void 0 ? void 0 : t.find((e) => Et.has(e));
}
function Zt(a) {
  var t;
  return (t = a == null ? void 0 : a[d.Concerts]) === null || t === void 0 ? void 0 : t.find((e) => zt.has(e));
}
function Jt(a) {
  var t;
  return (t = a == null ? void 0 : a[d.MusicMovies]) === null || t === void 0 ? void 0 : t.find((e) => qt.has(e));
}
function Qt(a) {
  var t;
  return (t = a == null ? void 0 : a[d.MusicVideos]) === null || t === void 0 ? void 0 : t.find((e) => Ot.has(e));
}
function Xt(a) {
  var t;
  return (t = a == null ? void 0 : a[d.Playlists]) === null || t === void 0 ? void 0 : t.find((e) => Ht.has(e));
}
function ti(a) {
  var t;
  return (t = a == null ? void 0 : a[d.Songs]) === null || t === void 0 ? void 0 : t.find((e) => Ft.has(e));
}
function ii(a) {
  var t;
  return (t = a == null ? void 0 : a[d.Stations]) === null || t === void 0 ? void 0 : t.find((e) => $t.has(e));
}
function ei(a) {
  var t;
  return (t = a == null ? void 0 : a[d.UploadedVideos]) === null || t === void 0 ? void 0 : t.find((e) => Pt.has(e));
}
function ai(a) {
  var t;
  return (t = a == null ? void 0 : a[d.Venues]) === null || t === void 0 ? void 0 : t.find((e) => Kt.has(e));
}
function yt(a, t, e) {
  var i, n, o, l, s, r, u, c, h, y, f, j, _, A, x, D, M, G, T, E, O, P;
  const S = a.context.displayVariants;
  switch (t.type) {
    case d.Albums:
      return (n = (i = a.album) === null || i === void 0 ? void 0 : i.call(a, t, Ut(S))) !== null && n !== void 0
        ? n
        : null;
    case d.AppleCurators:
      return (l = (o = a.appleCurator) === null || o === void 0 ? void 0 : o.call(a, t, Yt(S))) !== null && l !== void 0
        ? l
        : null;
    case d.Artists:
      return (r = (s = a.artist) === null || s === void 0 ? void 0 : s.call(a, t, Wt(S))) !== null && r !== void 0
        ? r
        : null;
    case d.Concerts:
      return (c = (u = a.concert) === null || u === void 0 ? void 0 : u.call(a, t, Zt(S))) !== null && c !== void 0
        ? c
        : null;
    case d.MusicMovies:
      return (y = (h = a.musicMovie) === null || h === void 0 ? void 0 : h.call(a, t, Jt(S))) !== null && y !== void 0
        ? y
        : null;
    case d.MusicVideos:
      return (j = (f = a.musicVideo) === null || f === void 0 ? void 0 : f.call(a, t, Qt(S))) !== null && j !== void 0
        ? j
        : null;
    case d.Playlists:
      return (A = (_ = a.playlist) === null || _ === void 0 ? void 0 : _.call(a, t, Xt(S))) !== null && A !== void 0
        ? A
        : null;
    case d.Songs:
      return (D = (x = a.song) === null || x === void 0 ? void 0 : x.call(a, t, ti(S))) !== null && D !== void 0
        ? D
        : null;
    case d.Stations:
      return (G = (M = a.station) === null || M === void 0 ? void 0 : M.call(a, t, ii(S))) !== null && G !== void 0
        ? G
        : null;
    case d.UploadedVideos:
      return (E = (T = a.uploadedVideo) === null || T === void 0 ? void 0 : T.call(a, t, ei(S))) !== null &&
        E !== void 0
        ? E
        : null;
    case d.Venues:
      return (P = (O = a.venue) === null || O === void 0 ? void 0 : O.call(a, t, ai(S))) !== null && P !== void 0
        ? P
        : null;
    default:
      return ($.warn(e, `${a.label}: Unhandled resource type '${t.type}'`), null);
  }
}
function N(a, t, e) {
  const i = [];
  for (const n of t) {
    const o = a.context.resourceManager.resource(n);
    if (!o) continue;
    const l = yt(a, o, e);
    l != null && i.push(l);
  }
  return i;
}
var bt;
(function (a) {
  function t(e, i) {
    switch (i) {
      case d.Albums:
        return e.album !== void 0;
      case d.AppleCurators:
        return e.appleCurator !== void 0;
      case d.Artists:
        return e.artist !== void 0;
      case d.Concerts:
        return e.concert !== void 0;
      case d.MusicMovies:
        return e.musicMovie !== void 0;
      case d.MusicVideos:
        return e.musicVideo !== void 0;
      case d.Playlists:
        return e.playlist !== void 0;
      case d.Songs:
        return e.song !== void 0;
      case d.Stations:
        return e.station !== void 0;
      case d.UploadedVideos:
        return e.uploadedVideo !== void 0;
      case d.Venues:
        return e.venue !== void 0;
      default:
        return !1;
    }
  }
  a.supportsResourceType = t;
})(bt || (bt = {}));
class ni {
  constructor(t, e, i, n) {
    ((this.sectionContentTypeName = "CircleLockup"),
      (this.collection = t),
      (this.displayAttributes = e),
      (this.context = i),
      (this.objectGraph = n));
  }
  build() {
    var t, e, i;
    const n = N(
      new mt(
        { displayVariants: this.displayAttributes.variants, resourceManager: this.context.resourceManager },
        this.objectGraph,
      ),
      (i =
        (e = (t = this.collection.relationships) === null || t === void 0 ? void 0 : t.contents) === null ||
        e === void 0
          ? void 0
          : e.data) !== null && i !== void 0
        ? i
        : [],
      this.objectGraph,
    );
    return n.length === 0
      ? null
      : {
          itemKind: "bubbleLockup",
          presentation: { kind: "collection", layout: R(this.displayAttributes, { kind: "shelf", numberOfRows: 1 }) },
          items: n,
        };
  }
}
class mt {
  constructor(t, e) {
    ((this.label = "CircleLockupBuilder"), (this.context = t), (this.objectGraph = e));
  }
  artist(t, e) {
    var i, n;
    const o = v(t, this.objectGraph, this.context.resourceManager);
    return {
      id: t.id,
      title: (i = t.attributes) === null || i === void 0 ? void 0 : i.name,
      artwork: k((n = t.attributes) === null || n === void 0 ? void 0 : n.artwork, g.SpecificRectangle),
      contentDescriptor: o,
      segue: b(o, t, "ShelfItem", this.objectGraph),
    };
  }
}
function _t(a, t) {
  var e, i, n, o, l;
  switch (t) {
    case Y.ShortEditorialNotes:
      return (i = (e = a.attributes) === null || e === void 0 ? void 0 : e.plainEditorialNotes) === null || i === void 0
        ? void 0
        : i.short;
    case Y.ReleaseYear:
      return (o = (n = a.attributes) === null || n === void 0 ? void 0 : n.releaseDate) === null || o === void 0
        ? void 0
        : o.split("-")[0];
    default:
      return (l = a.attributes) === null || l === void 0 ? void 0 : l.artistName;
  }
}
function oi(a, t, e) {
  var i, n, o, l;
  switch (e) {
    case V.ReleaseYear:
      return (n = (i = a.attributes) === null || i === void 0 ? void 0 : i.releaseDate) === null || n === void 0
        ? void 0
        : n.split("-")[0];
    case V.ShortDuration:
      return rt((o = a.attributes) === null || o === void 0 ? void 0 : o.durationInMillis, t);
    default:
      return (l = a.attributes) === null || l === void 0 ? void 0 : l.artistName;
  }
}
function li(a, t, e) {
  var i, n;
  switch (e) {
    case it.ShortDuration:
      return rt((i = a.attributes) === null || i === void 0 ? void 0 : i.durationInMilliseconds, t);
    default:
      return (n = a.attributes) === null || n === void 0 ? void 0 : n.artistName;
  }
}
class si {
  constructor(t, e, i, n) {
    ((this.sectionContentTypeName = "HorizontalLockup"),
      (this.collection = t),
      (this.displayAttributes = e),
      (this.context = i),
      (this.objectGraph = n));
  }
  build() {
    var t, e, i;
    const n = N(
      new ut(
        { displayVariants: this.displayAttributes.variants, resourceManager: this.context.resourceManager },
        this.objectGraph,
      ),
      (i =
        (e = (t = this.collection.relationships) === null || t === void 0 ? void 0 : t.contents) === null ||
        e === void 0
          ? void 0
          : e.data) !== null && i !== void 0
        ? i
        : [],
      this.objectGraph,
    );
    return n.length === 0
      ? null
      : {
          itemKind: "horizontalLockup",
          presentation: { kind: "collection", layout: R(this.displayAttributes, { kind: "shelf", numberOfRows: 3 }) },
          items: n,
        };
  }
}
class ut {
  constructor(t, e) {
    ((this.label = "HorizontalLockupBuilder"), (this.context = t), (this.objectGraph = e));
  }
  album(t, e) {
    var i, n;
    const o = v(t, this.objectGraph, this.context.resourceManager),
      l = b(o, t, "ShelfItem", this.objectGraph);
    return {
      id: t.id,
      title: (i = t.attributes) === null || i === void 0 ? void 0 : i.name,
      subtitle: _t(t, e),
      artwork: k((n = t.attributes) === null || n === void 0 ? void 0 : n.artwork, g.SpecificRectangle),
      contentDescriptor: o,
      playAction: m(o, this.objectGraph, null),
      segue: l,
      numberOfSocialBadges: 0,
      showExplicitBadge: w(t.attributes),
      showChevron: q.isSome(l),
      recoID: null,
    };
  }
  artist(t, e) {
    var i, n;
    const o = v(t, this.objectGraph, this.context.resourceManager),
      l = b(o, t, "ShelfItem", this.objectGraph);
    return {
      id: t.id,
      title: (i = t.attributes) === null || i === void 0 ? void 0 : i.name,
      subtitle: null,
      artwork: k((n = t.attributes) === null || n === void 0 ? void 0 : n.artwork, g.SpecificRectangle),
      artworkTreatment: wt.Circle,
      contentDescriptor: o,
      segue: l,
      numberOfSocialBadges: 0,
      showExplicitBadge: !1,
      showChevron: q.isSome(l),
      recoID: null,
    };
  }
  playlist(t, e) {
    var i, n, o;
    const l = v(t, this.objectGraph, this.context.resourceManager),
      s = b(l, t, "ShelfItem", this.objectGraph);
    return {
      id: t.id,
      title: (i = t.attributes) === null || i === void 0 ? void 0 : i.name,
      subtitle: (n = t.attributes) === null || n === void 0 ? void 0 : n.curatorName,
      artwork: k((o = t.attributes) === null || o === void 0 ? void 0 : o.artwork, g.SpecificRectangle),
      contentDescriptor: l,
      playAction: m(l, this.objectGraph, null),
      segue: s,
      numberOfSocialBadges: 0,
      showExplicitBadge: w(t.attributes),
      showChevron: q.isSome(s),
      recoID: null,
    };
  }
  station(t, e) {
    var i, n, o, l, s, r;
    const u = v(t, this.objectGraph, this.context.resourceManager),
      c = b(u, t, "ShelfItem", this.objectGraph);
    return {
      id: t.id,
      headline:
        (n = (i = t.attributes) === null || i === void 0 ? void 0 : i.plainEditorialNotes) === null || n === void 0
          ? void 0
          : n.standard,
      title: (o = t.attributes) === null || o === void 0 ? void 0 : o.name,
      subtitle:
        (s = (l = t.attributes) === null || l === void 0 ? void 0 : l.plainEditorialNotes) === null || s === void 0
          ? void 0
          : s.short,
      artwork: k((r = t.attributes) === null || r === void 0 ? void 0 : r.artwork, g.SpecificRectangle),
      contentDescriptor: u,
      playAction: m(u, this.objectGraph, null),
      segue: c,
      numberOfSocialBadges: 0,
      showExplicitBadge: w(t.attributes),
      showChevron: q.isSome(c),
      recoID: null,
    };
  }
}
class ri {
  constructor(t, e, i, n) {
    ((this.sectionContentTypeName = "AdaptiveHorizontalCircleLockup"),
      (this.collection = t),
      (this.displayAttributes = e),
      (this.context = i),
      (this.objectGraph = n));
  }
  build() {
    var t, e, i;
    const n = N(
      new ui(
        { displayVariants: this.displayAttributes.variants, resourceManager: this.context.resourceManager },
        this.objectGraph,
      ),
      (i =
        (e = (t = this.collection.relationships) === null || t === void 0 ? void 0 : t.contents) === null ||
        e === void 0
          ? void 0
          : e.data) !== null && i !== void 0
        ? i
        : [],
      this.objectGraph,
    );
    return n.length === 0
      ? null
      : {
          itemKind: "adaptiveHorizontalCircleLockup",
          presentation: { kind: "collection", layout: R(this.displayAttributes, { kind: "shelf", numberOfRows: 3 }) },
          items: n,
        };
  }
}
class ui {
  constructor(t, e) {
    ((this.label = "AdaptiveHorizontalCircleLockupBuilder"),
      (this.context = t),
      (this.horizontalLockupBuilder = new ut(t, e)),
      (this.circleLockupBuilder = new mt(t, e)));
  }
  artist(t, e) {
    return {
      id: t.id,
      horizontalLockup: this.horizontalLockupBuilder.artist(t, e),
      circleLockup: this.circleLockupBuilder.artist(t, e),
    };
  }
}
class at {
  constructor(t, e, i, n) {
    ((this.sectionContentTypeName = "SquareLockup"),
      (this.collection = t),
      (this.displayAttributes = e),
      (this.context = i),
      (this.objectGraph = n));
  }
  build() {
    var t, e, i;
    const n = N(
      new St(
        {
          lockupStyle: this.lockupStyle,
          displayVariants: this.displayAttributes.variants,
          resourceManager: this.context.resourceManager,
        },
        this.objectGraph,
      ),
      (i =
        (e = (t = this.collection.relationships) === null || t === void 0 ? void 0 : t.contents) === null ||
        e === void 0
          ? void 0
          : e.data) !== null && i !== void 0
        ? i
        : [],
      this.objectGraph,
    );
    return n.length === 0
      ? null
      : {
          itemKind: "squareLockup",
          presentation: { kind: "collection", layout: R(this.displayAttributes, { kind: "shelf", numberOfRows: 1 }) },
          items: n,
        };
  }
  get lockupStyle() {
    switch (this.displayAttributes.style) {
      case p.SquareLockupLarge:
        return U.Large;
      case p.SquareLockupMedium:
        return U.Medium;
      case p.SquareLockup:
      default:
        return U.Regular;
    }
  }
}
class St {
  constructor(t, e) {
    ((this.label = "SquareLockupBuilder"), (this.context = t), (this.objectGraph = e));
  }
  album(t, e) {
    var i, n;
    const o = v(t, this.objectGraph, this.context.resourceManager);
    return {
      id: t.id,
      displayStyle: this.context.lockupStyle,
      titleLinks: L((i = t.attributes) === null || i === void 0 ? void 0 : i.name),
      subtitleLinks: L(_t(t, e)),
      artwork: k((n = t.attributes) === null || n === void 0 ? void 0 : n.artwork, g.SpecificRectangle),
      contentDescriptor: o,
      playAction: m(o, this.objectGraph, null),
      segue: b(o, t, "ShelfItem", this.objectGraph),
      numberOfSocialBadges: 0,
      showExplicitBadge: w(t.attributes),
      recoID: null,
    };
  }
  appleCurator(t, e) {
    var i, n, o, l;
    const s = v(t, this.objectGraph, this.context.resourceManager),
      r =
        e === W.StandardEditorialNotes
          ? (n = (i = t.attributes) === null || i === void 0 ? void 0 : i.plainEditorialNotes) === null || n === void 0
            ? void 0
            : n.standard
          : null;
    return {
      id: t.id,
      displayStyle: this.context.lockupStyle,
      titleLinks: L((o = t.attributes) === null || o === void 0 ? void 0 : o.name),
      subtitleLinks: L(r),
      artwork: k((l = t.attributes) === null || l === void 0 ? void 0 : l.artwork, g.SpecificRectangle),
      contentDescriptor: s,
      playAction: m(s, this.objectGraph, null),
      segue: b(s, t, "ShelfItem", this.objectGraph),
      numberOfSocialBadges: 0,
      showExplicitBadge: w(t.attributes),
      recoID: null,
    };
  }
  playlist(t, e) {
    var i, n, o;
    const l = v(t, this.objectGraph, this.context.resourceManager);
    return {
      id: t.id,
      displayStyle: this.context.lockupStyle,
      titleLinks: L((i = t.attributes) === null || i === void 0 ? void 0 : i.name),
      subtitleLinks: L((n = t.attributes) === null || n === void 0 ? void 0 : n.curatorName),
      artwork: k((o = t.attributes) === null || o === void 0 ? void 0 : o.artwork, g.SpecificRectangle),
      contentDescriptor: l,
      playAction: m(l, this.objectGraph, null),
      segue: b(l, t, "ShelfItem", this.objectGraph),
      numberOfSocialBadges: 0,
      showExplicitBadge: w(t.attributes),
      recoID: null,
    };
  }
  station(t, e) {
    var i, n, o;
    const l = v(t, this.objectGraph, this.context.resourceManager);
    return {
      id: t.id,
      displayStyle: this.context.lockupStyle,
      titleLinks: L((i = t.attributes) === null || i === void 0 ? void 0 : i.name),
      subtitleLinks: L((n = t.attributes) === null || n === void 0 ? void 0 : n.stationProviderName),
      artwork: k((o = t.attributes) === null || o === void 0 ? void 0 : o.artwork, g.SpecificRectangle),
      contentDescriptor: l,
      playAction: m(l, this.objectGraph, null),
      segue: b(l, t, "ShelfItem", this.objectGraph),
      numberOfSocialBadges: 0,
      showExplicitBadge: w(t.attributes),
      recoID: null,
    };
  }
}
class di {
  constructor(t, e, i, n) {
    ((this.sectionContentTypeName = "AdaptiveHorizontalSquareLockup"),
      (this.collection = t),
      (this.displayAttributes = e),
      (this.context = i),
      (this.objectGraph = n));
  }
  build() {
    var t, e, i;
    const n = this.displayAttributes.style === p.AdaptiveHorizontalSquareLockupMedium ? U.Medium : U.Regular,
      o = N(
        new ci(
          {
            squareLockupStyle: n,
            displayVariants: this.displayAttributes.variants,
            resourceManager: this.context.resourceManager,
          },
          this.objectGraph,
        ),
        (i =
          (e = (t = this.collection.relationships) === null || t === void 0 ? void 0 : t.contents) === null ||
          e === void 0
            ? void 0
            : e.data) !== null && i !== void 0
          ? i
          : [],
        this.objectGraph,
      );
    return o.length === 0
      ? null
      : {
          itemKind: "adaptiveHorizontalSquareLockup",
          presentation: { kind: "collection", layout: R(this.displayAttributes, { kind: "shelf", numberOfRows: 3 }) },
          items: o,
        };
  }
}
class ci {
  constructor(t, e) {
    ((this.label = "AdaptiveHorizontalSquareLockup"),
      (this.context = t),
      (this.horizontalLockupBuilder = new ut(t, e)),
      (this.squareLockupBuilder = new St(
        { displayVariants: t.displayVariants, resourceManager: t.resourceManager, lockupStyle: t.squareLockupStyle },
        e,
      )));
  }
  album(t, e) {
    return {
      id: t.id,
      horizontalLockup: this.horizontalLockupBuilder.album(t, e),
      squareLockup: this.squareLockupBuilder.album(t, e),
    };
  }
  playlist(t, e) {
    return {
      id: t.id,
      horizontalLockup: this.horizontalLockupBuilder.playlist(t, e),
      squareLockup: this.squareLockupBuilder.playlist(t, e),
    };
  }
  station(t, e) {
    return {
      id: t.id,
      horizontalLockup: this.horizontalLockupBuilder.station(t, e),
      squareLockup: this.squareLockupBuilder.station(t, e),
    };
  }
}
class et {
  constructor(t, e, i, n) {
    ((this.sectionContentTypeName = et.sectionContentTypeName),
      (this.collection = t),
      (this.displayAttributes = e),
      (this.context = i),
      (this.objectGraph = n));
  }
  build() {
    var t, e, i;
    const n =
        (e = (t = this.collection.relationships) === null || t === void 0 ? void 0 : t.contents) === null ||
        e === void 0
          ? void 0
          : e.data,
      o = n == null ? void 0 : n[0];
    if (!o) return null;
    const l = this.context.resourceManager.resource(o);
    if (!l) return null;
    const s = this.context.primaryContent;
    if (!s) return null;
    const r = yt(
      new hi(
        {
          artist: s,
          heading: (i = this.collection.attributes) === null || i === void 0 ? void 0 : i.title,
          displayVariants: this.displayAttributes.variants,
          resourceManager: this.context.resourceManager,
        },
        this.objectGraph,
      ),
      l,
      this.objectGraph,
    );
    return r ? { itemKind: "artistFeaturedContent", presentation: { kind: "single" }, items: [r] } : null;
  }
  header() {
    return null;
  }
}
et.sectionContentTypeName = "ArtistFeaturedContent";
class hi {
  constructor(t, e) {
    ((this.label = "ArtistFeaturedContentBuilder"), (this.context = t), (this.objectGraph = e));
  }
  album(t, e) {
    var i, n, o;
    const l = v(t, this.objectGraph, this.context.resourceManager);
    return {
      id: t.id,
      contentDescriptor: l,
      heading: this.context.heading,
      artwork: k((i = t.attributes) === null || i === void 0 ? void 0 : i.artwork, g.SpecificRectangle),
      artworkShape: C.Square,
      detailText: {
        headline: this.albumHeadline(t),
        title: (n = t.attributes) === null || n === void 0 ? void 0 : n.name,
        showExplicitBadge: w(t.attributes),
        subtitle: Lt((o = t.attributes) === null || o === void 0 ? void 0 : o.trackCount, this.objectGraph),
      },
      playAction: m(l, this.objectGraph, null),
      segue: b(l, t, "ShelfItem", this.objectGraph),
      recoID: null,
    };
  }
  appleCurator(t, e) {
    var i, n, o, l, s, r;
    const u = v(t, this.objectGraph, this.context.resourceManager),
      c =
        e === W.StandardEditorialNotes
          ? (n = (i = t.attributes) === null || i === void 0 ? void 0 : i.plainEditorialNotes) === null || n === void 0
            ? void 0
            : n.standard
          : (l = (o = t.attributes) === null || o === void 0 ? void 0 : o.plainEditorialNotes) === null || l === void 0
            ? void 0
            : l.short;
    return {
      id: t.id,
      contentDescriptor: u,
      heading: this.context.heading,
      artwork: k((s = t.attributes) === null || s === void 0 ? void 0 : s.artwork, g.SpecificRectangle),
      artworkShape: C.Square,
      detailText: {
        title: (r = t.attributes) === null || r === void 0 ? void 0 : r.name,
        showExplicitBadge: !1,
        subtitle: c,
      },
      playAction: null,
      segue: b(u, t, "ShelfItem", this.objectGraph),
      recoID: null,
    };
  }
  concert(t, e) {
    var i, n, o, l, s, r, u, c, h;
    const y =
        (o =
          (n = (i = t.relationships) === null || i === void 0 ? void 0 : i.venues) === null || n === void 0
            ? void 0
            : n.data) === null || o === void 0
          ? void 0
          : o[0],
      f = y ? this.context.resourceManager.resource(y) : null;
    if (!f) return null;
    const j = v(t, this.objectGraph, this.context.resourceManager),
      _ = (l = t.attributes) === null || l === void 0 ? void 0 : l.startISODateTime,
      A = q.isSome(_)
        ? { date: _, timeZone: (s = t.attributes) === null || s === void 0 ? void 0 : s.timeZone }
        : void 0;
    return {
      id: t.id,
      contentDescriptor: j,
      artwork: k((r = this.context.artist.attributes) === null || r === void 0 ? void 0 : r.artwork),
      artworkShape: C.Circle,
      accessoryCalendarArtwork: A,
      heading: this.context.heading,
      detailText: {
        title: (u = t.attributes) === null || u === void 0 ? void 0 : u.name,
        showExplicitBadge: !1,
        subtitle: (c = f.attributes) === null || c === void 0 ? void 0 : c.name,
        description: q.isSome(_)
          ? jt(_, (h = t.attributes) === null || h === void 0 ? void 0 : h.timeZone, this.objectGraph)
          : null,
      },
      playAction: null,
      segue: b(j, t, "ShelfItem", this.objectGraph),
      recoID: null,
    };
  }
  playlist(t, e) {
    var i, n, o, l;
    const s = v(t, this.objectGraph, this.context.resourceManager);
    return {
      id: t.id,
      contentDescriptor: s,
      artwork: k((i = t.attributes) === null || i === void 0 ? void 0 : i.artwork, g.SpecificRectangle),
      artworkShape: C.Square,
      heading: this.context.heading,
      detailText: {
        title: (n = t.attributes) === null || n === void 0 ? void 0 : n.name,
        showExplicitBadge: w(t.attributes),
        subtitle:
          (l = (o = t.attributes) === null || o === void 0 ? void 0 : o.plainEditorialNotes) === null || l === void 0
            ? void 0
            : l.short,
      },
      playAction: m(s, this.objectGraph, null),
      segue: b(s, t, "ShelfItem", this.objectGraph),
      recoID: null,
    };
  }
  station(t, e) {
    var i, n, o, l, s, r;
    const u = v(t, this.objectGraph, this.context.resourceManager);
    return {
      id: t.id,
      contentDescriptor: u,
      artwork: k((i = t.attributes) === null || i === void 0 ? void 0 : i.artwork, g.SpecificRectangle),
      artworkShape: C.Square,
      heading: this.context.heading,
      detailText: {
        headline:
          (o = (n = t.attributes) === null || n === void 0 ? void 0 : n.plainEditorialNotes) === null || o === void 0
            ? void 0
            : o.standard,
        title: (l = t.attributes) === null || l === void 0 ? void 0 : l.name,
        showExplicitBadge: !1,
        subtitle:
          (r = (s = t.attributes) === null || s === void 0 ? void 0 : s.plainEditorialNotes) === null || r === void 0
            ? void 0
            : r.short,
      },
      playAction: m(u, this.objectGraph, null),
      segue: b(u, t, "ShelfItem", this.objectGraph),
      recoID: null,
    };
  }
  uploadedVideo(t, e) {
    var i, n, o, l;
    const s = v(t, this.objectGraph, this.context.resourceManager);
    return {
      id: t.id,
      contentDescriptor: s,
      artwork: k((i = t.attributes) === null || i === void 0 ? void 0 : i.artwork, g.SpecificRectangle),
      artworkShape: C.Brick,
      heading: this.context.heading,
      detailText: {
        headline: (n = t.attributes) === null || n === void 0 ? void 0 : n.artistName,
        title: (o = t.attributes) === null || o === void 0 ? void 0 : o.name,
        showExplicitBadge: w(t.attributes),
        subtitle: rt((l = t.attributes) === null || l === void 0 ? void 0 : l.durationInMilliseconds, this.objectGraph),
      },
      playAction: m(s, this.objectGraph, null),
      segue: b(s, t, "ShelfItem", this.objectGraph),
      recoID: null,
    };
  }
  musicMovie(t, e) {
    var i, n, o, l, s, r, u, c, h, y, f, j, _, A;
    const x = v(t, this.objectGraph, this.context.resourceManager),
      D =
        e === X.ShortEditorialNotes
          ? (n = (i = t.attributes) === null || i === void 0 ? void 0 : i.plainEditorialNotes) === null || n === void 0
            ? void 0
            : n.short
          : null,
      M =
        (f =
          (c =
            (s =
              (l = (o = t.attributes) === null || o === void 0 ? void 0 : o.editorialArtwork) === null || l === void 0
                ? void 0
                : l.storeFlowcase) !== null && s !== void 0
              ? s
              : (u = (r = t.attributes) === null || r === void 0 ? void 0 : r.editorialArtwork) === null || u === void 0
                ? void 0
                : u.subscriptionHero) !== null && c !== void 0
            ? c
            : (y = (h = t.attributes) === null || h === void 0 ? void 0 : h.editorialArtwork) === null || y === void 0
              ? void 0
              : y.fullscreenBackground) !== null && f !== void 0
          ? f
          : (j = t.attributes) === null || j === void 0
            ? void 0
            : j.artwork;
    return {
      id: t.id,
      contentDescriptor: x,
      artwork: k(M, g.SpecificRectangle),
      artworkShape: C.Brick,
      heading: this.context.heading,
      detailText: {
        title: (_ = t.attributes) === null || _ === void 0 ? void 0 : _.name,
        showExplicitBadge: w(t.attributes),
        subtitle: D != null ? D : (A = t.attributes) === null || A === void 0 ? void 0 : A.artistName,
      },
      playAction: m(x, this.objectGraph, null),
      segue: b(x, t, "ShelfItem", this.objectGraph),
      recoID: null,
    };
  }
  musicVideo(t, e) {
    var i, n;
    const o = v(t, this.objectGraph, this.context.resourceManager);
    return {
      id: t.id,
      contentDescriptor: o,
      artwork: k((i = t.attributes) === null || i === void 0 ? void 0 : i.artwork, g.SpecificRectangle),
      artworkShape: C.Brick,
      heading: this.context.heading,
      detailText: {
        headline: this.musicVideoHeadline(t, e),
        title: (n = t.attributes) === null || n === void 0 ? void 0 : n.name,
        showExplicitBadge: w(t.attributes),
        subtitle: this.musicVideoSubtitle(t, e),
      },
      playAction: m(o, this.objectGraph, null),
      segue: b(o, t, "ShelfItem", this.objectGraph),
      recoID: null,
    };
  }
  albumHeadline(t) {
    var e, i;
    const n = (e = t.attributes) === null || e === void 0 ? void 0 : e.releaseDate,
      o = ct(n, this.objectGraph, "short");
    return !((i = t.attributes) === null || i === void 0) && i.isPrerelease && q.isSome(o)
      ? gt.string("Fuse.Artist.PreRelease", this.objectGraph, { releaseDate: o })
      : o;
  }
  musicVideoSubtitle(t, e) {
    var i;
    switch (e) {
      case V.ShortDuration:
      case V.DetailedReleaseInformation:
        return At((i = t.attributes) === null || i === void 0 ? void 0 : i.durationInMillis, this.objectGraph);
      default:
        return null;
    }
  }
  musicVideoHeadline(t, e) {
    var i;
    switch (e) {
      case V.DetailedReleaseInformation:
        return ct((i = t.attributes) === null || i === void 0 ? void 0 : i.releaseDate, this.objectGraph, "short");
      default:
        return null;
    }
  }
}
function yi(a, t) {
  return ft(a, t) && a.attributes.display.style === p.ArtistFeaturedContent;
}
class kt {
  constructor(t, e, i, n) {
    ((this.sectionContentTypeName = "BrickLockup"),
      (this.collection = t),
      (this.displayAttributes = e),
      (this.context = i),
      (this.objectGraph = n));
  }
  build() {
    var t, e, i;
    const n = this.displayAttributes.style === p.BrickLockupLarge ? ht.Large : ht.Regular,
      o = N(
        new pi(
          {
            lockupStyle: n,
            displayVariants: this.displayAttributes.variants,
            resourceManager: this.context.resourceManager,
          },
          this.objectGraph,
        ),
        (i =
          (e = (t = this.collection.relationships) === null || t === void 0 ? void 0 : t.contents) === null ||
          e === void 0
            ? void 0
            : e.data) !== null && i !== void 0
          ? i
          : [],
        this.objectGraph,
      );
    return o.length === 0
      ? null
      : {
          itemKind: "verticalVideoLockup",
          presentation: { kind: "collection", layout: R(this.displayAttributes, { kind: "shelf", numberOfRows: 1 }) },
          items: o,
        };
  }
}
class pi {
  constructor(t, e) {
    ((this.label = "BrickLockupBuilder"), (this.context = t), (this.objectGraph = e));
  }
  musicMovie(t, e) {
    var i, n, o;
    const l = v(t, this.objectGraph, this.context.resourceManager);
    return {
      id: t.id,
      displayStyle: this.context.lockupStyle,
      titleLinks: L((i = t.attributes) === null || i === void 0 ? void 0 : i.name),
      subtitleLinks: L((n = t.attributes) === null || n === void 0 ? void 0 : n.artistName),
      artwork: k((o = t.attributes) === null || o === void 0 ? void 0 : o.artwork, g.SpecificRectangle),
      contentDescriptor: l,
      playAction: m(l, this.objectGraph, null),
      segue: b(l, t, "ShelfItem", this.objectGraph),
      showExplicitBadge: w(t.attributes),
    };
  }
  musicVideo(t, e) {
    var i, n;
    const o = v(t, this.objectGraph, this.context.resourceManager);
    return {
      id: t.id,
      displayStyle: this.context.lockupStyle,
      titleLinks: L((i = t.attributes) === null || i === void 0 ? void 0 : i.name),
      subtitleLinks: L(oi(t, this.objectGraph, e)),
      artwork: k((n = t.attributes) === null || n === void 0 ? void 0 : n.artwork, g.SpecificRectangle),
      contentDescriptor: o,
      playAction: m(o, this.objectGraph, null),
      segue: b(o, t, "ShelfItem", this.objectGraph),
      showExplicitBadge: w(t.attributes),
    };
  }
  uploadedVideo(t, e) {
    var i, n;
    const o = v(t, this.objectGraph, this.context.resourceManager);
    return {
      id: t.id,
      displayStyle: this.context.lockupStyle,
      titleLinks: L((i = t.attributes) === null || i === void 0 ? void 0 : i.name),
      subtitleLinks: L(li(t, this.objectGraph, e)),
      artwork: k((n = t.attributes) === null || n === void 0 ? void 0 : n.artwork, g.SpecificRectangle),
      contentDescriptor: o,
      playAction: m(o, this.objectGraph, null),
      segue: b(o, t, "ShelfItem", this.objectGraph),
      showExplicitBadge: w(t.attributes),
    };
  }
}
class vi {
  constructor(t, e, i, n) {
    ((this.sectionContentTypeName = "CalendarEventLockup"),
      (this.collection = t),
      (this.displayAttributes = e),
      (this.context = i),
      (this.objectGraph = n));
  }
  build() {
    var t, e, i;
    const n = N(
      new bi(
        { displayVariants: this.displayAttributes.variants, resourceManager: this.context.resourceManager },
        this.objectGraph,
      ),
      (i =
        (e = (t = this.collection.relationships) === null || t === void 0 ? void 0 : t.contents) === null ||
        e === void 0
          ? void 0
          : e.data) !== null && i !== void 0
        ? i
        : [],
      this.objectGraph,
    );
    return n.length === 0
      ? null
      : {
          itemKind: "calendarEventLockup",
          presentation: {
            kind: "collection",
            layout: R(this.displayAttributes, { kind: "grid", shouldCapRows: !0, flowStyle: "column" }, "column"),
          },
          items: n,
        };
  }
}
class bi {
  constructor(t, e) {
    ((this.label = "CalendarEventLockupBuilder"), (this.context = t), (this.objectGraph = e));
  }
  concert(t, e) {
    var i, n, o, l, s, r, u, c, h, y, f, j, _, A, x, D;
    const M =
        (o =
          (n = (i = t.relationships) === null || i === void 0 ? void 0 : i.venues) === null || n === void 0
            ? void 0
            : n.data) === null || o === void 0
          ? void 0
          : o[0],
      G = M ? this.context.resourceManager.resource(M) : null,
      T = v(t, this.objectGraph, this.context.resourceManager);
    if (B(T)) return null;
    const E = (l = t.attributes) === null || l === void 0 ? void 0 : l.startISODateTime;
    if (B(E)) return null;
    const O = (s = t.attributes) === null || s === void 0 ? void 0 : s.timezone,
      P = { date: E, timeZone: O };
    let S, J;
    if (e === Q.CityAndRegion) {
      const K =
        (u = (r = G == null ? void 0 : G.attributes) === null || r === void 0 ? void 0 : r.structuredAddress) ===
          null || u === void 0
          ? void 0
          : u.city;
      if (B(K)) return null;
      S = K;
      const H = (c = G == null ? void 0 : G.attributes) === null || c === void 0 ? void 0 : c.name,
        dt = Gt(E, O, this.objectGraph, !0);
      F(H)
        ? (J = gt.string("AMWEB.ContentA.Middot.ContentB", this.objectGraph, { contentA: H, contentB: dt }))
        : (J = dt);
    } else {
      const K =
          (f =
            (y = (h = t.relationships) === null || h === void 0 ? void 0 : h.artists) === null || y === void 0
              ? void 0
              : y.data) === null || f === void 0
            ? void 0
            : f[0],
        H = K ? this.context.resourceManager.resource(K) : null;
      if (
        ((S =
          (_ = (j = H == null ? void 0 : H.attributes) === null || j === void 0 ? void 0 : j.name) !== null &&
          _ !== void 0
            ? _
            : (A = t.attributes) === null || A === void 0
              ? void 0
              : A.name),
        B(S))
      )
        return null;
      J = (x = G == null ? void 0 : G.attributes) === null || x === void 0 ? void 0 : x.name;
    }
    return {
      id: t.id,
      title: S,
      subtitle: J,
      artwork: P,
      contentDescriptor: T,
      segue: b(T, t, "ShelfItem", this.objectGraph),
      showNearbyIndicator: (D = t.attributes) === null || D === void 0 ? void 0 : D.showNearbyIndicator,
    };
  }
}
class Z {
  constructor(t, e, i, n) {
    ((this.sectionContentTypeName = Z.sectionContentTypeName),
      (this.collection = t),
      (this.displayAttributes = e),
      (this.context = i),
      (this.objectGraph = n));
  }
  build() {
    var t, e, i;
    const n =
        this.displayAttributes.layoutDirection === I.List
          ? { kind: "playlistTrackList", hasVideo: !1, hasBadging: !1 }
          : "shelfTrackList",
      o = N(
        new ki(
          { displayVariants: this.displayAttributes.variants, resourceManager: this.context.resourceManager },
          this.objectGraph,
          n,
        ),
        (i =
          (e = (t = this.collection.relationships) === null || t === void 0 ? void 0 : t.contents) === null ||
          e === void 0
            ? void 0
            : e.data) !== null && i !== void 0
          ? i
          : [],
        this.objectGraph,
      );
    return o.length === 0
      ? null
      : {
          itemKind: "trackLockup",
          presentation: { kind: "collection", layout: R(this.displayAttributes, { kind: "shelf", numberOfRows: 3 }) },
          items: o,
        };
  }
}
Z.sectionContentTypeName = "TrackLockup";
class ki {
  constructor(t, e, i = "shelfTrackList") {
    ((this.label = "TrackLockupBuilder"), (this.context = t), (this.objectGraph = e), (this.layoutStyle = i));
  }
  song(t, e) {
    var i, n, o, l, s, r, u;
    const c = v(t, this.objectGraph, this.context.resourceManager),
      h = e === tt.AlbumAndReleaseYear;
    return {
      id: t.id,
      title: (i = t.attributes) === null || i === void 0 ? void 0 : i.name,
      subtitleLinks: L(
        h
          ? xt(
              (n = t.attributes) === null || n === void 0 ? void 0 : n.albumName,
              (o = t.attributes) === null || o === void 0 ? void 0 : o.releaseDate,
              this.objectGraph,
            )
          : (l = t.attributes) === null || l === void 0
            ? void 0
            : l.artistName,
      ),
      tertiaryLinks: h ? null : Dt(t, this.objectGraph, null),
      artwork: k((s = t.attributes) === null || s === void 0 ? void 0 : s.artwork, g.SpecificRectangle),
      contentDescriptor: c,
      playAction: m(c, this.objectGraph, null),
      segue: b(c, t, "ShelfItem", this.objectGraph),
      layoutStyle: this.layoutStyle,
      duration:
        (u = (r = t.attributes) === null || r === void 0 ? void 0 : r.durationInMillis) !== null && u !== void 0
          ? u
          : null,
      showExplicitBadge: w(t.attributes),
      pauseAction: null,
      resumeAction: null,
    };
  }
}
function mi(a, t) {
  return ft(a, t) && a.attributes.display.style === p.ArtistFeaturedTrackLockup;
}
class z {
  constructor(t, e, i, n) {
    ((this.collection = t), (this.context = e), (this.objectGraph = i), (this.sectionIndex = n));
  }
  build() {
    var t;
    const e = Rt(this.collection, this.objectGraph, this.context.collectionsPreferSeeAllDisplayAttributes),
      i = e.style,
      n = z.builders[i];
    if (B(n))
      return (
        $.warn(
          this.objectGraph,
          `No section content builder type with style for ${this.collection.type}/${i}/${this.collection.id}`,
        ),
        null
      );
    const o = new n(this.collection, e, this.context, this.objectGraph),
      l = `${o.sectionContentTypeName}Section`,
      s = Mt(`${this.collection.id}-${l}`, this.objectGraph),
      r = o.build();
    if (B(r)) return ($.warn(this.objectGraph, `No section content for ${l}/${s}`), null);
    let u;
    if (!this.context.dropCollectionSectionHeaders)
      if (F(o.header)) u = o.header();
      else {
        const f = z.header(this.collection, this.objectGraph);
        u = F(f) ? { kind: "default", item: f } : null;
      }
    const c = (t = this.collection.attributes.title) !== null && t !== void 0 ? t : l,
      h = {
        actionDetails: { sectionName: c },
        id: this.collection.id,
        impressionId: pt(`${c} - ${this.collection.id} - ${this.sectionIndex}`),
        impressionsIndex: this.sectionIndex,
        impressionTypeOverride: "Shelf",
        name: c,
        targetType: "ShelfItem",
      },
      y = z.addItemImpressions(r.items, h, this.objectGraph);
    return Object.assign(Object.assign({ id: s, header: u }, r), {
      items: y,
      impressionMetrics: vt(this.objectGraph, h),
    });
  }
  static addItemImpressions(t, e, i) {
    return t.map((n, o) => {
      const l = n,
        s = vt(i, z.itemMetricsDataFor(l, o, e));
      return Object.assign(
        Object.assign(Object.assign({}, l), { impressionMetrics: s }),
        z.innerLockupsWithImpressions(l, s),
      );
    });
  }
  static itemMetricsDataFor(t, e, i) {
    var n, o, l, s, r;
    const u = i.impressionId;
    return {
      id: (n = t.id) !== null && n !== void 0 ? n : "",
      impressionId: pt(`${t.id} - ${u}`),
      impressionsIndex: e,
      impressionParentId: u,
      kind:
        (l = (o = t.contentDescriptor) === null || o === void 0 ? void 0 : o.kind) !== null && l !== void 0 ? l : null,
      name:
        (r = (s = t.contentDescriptor) === null || s === void 0 ? void 0 : s.name) !== null && r !== void 0 ? r : null,
      targetType: "ShelfItem",
    };
  }
  static innerLockupsWithImpressions(t, e) {
    const i = {};
    return (
      t.squareLockup && (i.squareLockup = Object.assign(Object.assign({}, t.squareLockup), { impressionMetrics: e })),
      t.horizontalLockup &&
        (i.horizontalLockup = Object.assign(Object.assign({}, t.horizontalLockup), { impressionMetrics: e })),
      t.circleLockup && (i.circleLockup = Object.assign(Object.assign({}, t.circleLockup), { impressionMetrics: e })),
      i
    );
  }
  static header(t, e) {
    var i, n, o, l;
    const s = t.attributes.title;
    if (B(s)) return null;
    const r = t.attributes.seeMoreUrl;
    if (F(r)) {
      const h = Ct(r, t.id, e);
      return { titleLink: { title: s, segue: h, url: r } };
    }
    const u =
        (o =
          (n = (i = t.relationships["see-all"]) === null || i === void 0 ? void 0 : i.data) === null || n === void 0
            ? void 0
            : n[0]) === null || o === void 0
          ? void 0
          : o.href,
      c = F((l = t.relationships.contents) === null || l === void 0 ? void 0 : l.next);
    if (F(u) && c) {
      const h = It(e, "seeAll", "button", "navigate", { actionUrl: u }),
        y = { $kind: "CanvasShelfCollectionSeeAllIntent", href: u, referrerInfo: null },
        f = Bt({ kind: Vt.CatalogPage, intent: y }, h);
      return { titleLink: { title: s, segue: f, url: u } };
    }
    return { titleLink: { title: s } };
  }
}
z.builders = {
  [p.AdaptiveHorizontalCircleLockup]: ri,
  [p.AdaptiveHorizontalSquareLockupMedium]: di,
  [p.ArtistFeaturedContent]: et,
  [p.BrickLockup]: kt,
  [p.BrickLockupLarge]: kt,
  [p.CalendarEventLockup]: vi,
  [p.CircleLockup]: ni,
  [p.HorizontalLockup]: si,
  [p.SquareLockup]: at,
  [p.SquareLockupLarge]: at,
  [p.SquareLockupMedium]: at,
  [p.ArtistFeaturedTrackLockup]: Z,
  [p.TrackLockup]: Z,
};
export { hi as A, p as C, tt as S, ki as T, bt as a, z as b, mi as c, N as d, ft as e, fi as f, yi as i, yt as t };
