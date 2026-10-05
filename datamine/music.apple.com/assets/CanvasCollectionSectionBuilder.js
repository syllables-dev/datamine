import {
  ad as d,
  ao as $,
  a8 as B,
  as as v,
  at as k,
  au as f,
  aH as b,
  aI as rt,
  ay as y,
  aJ as L,
  aj as q,
  aK as wt,
  aL as U,
  aM as j,
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
  var i, e, n;
  if (a?.type !== d.CanvasShelfCollection) return !1;
  const o = (i = a.attributes) === null || i === void 0 ? void 0 : i.display;
  return !o || !("style" in o)
    ? ($.warn(t, `${a.type}/${a.id} missing attributes.display.style`), !1)
    : Array.isArray(
          (n = (e = a.relationships) === null || e === void 0 ? void 0 : e.contents) === null || n === void 0
            ? void 0
            : n.data,
        )
      ? !0
      : ($.warn(t, `${a.type}/${a.id} missing relationship contents resource identifiers.`), !1);
}
function Rt(a, t, i) {
  if (!i) return a.attributes.display;
  const e = a.attributes.seeAllDisplay;
  return B(e) ? ($.warn(t, `Missing See All display attributes in ${a.type}/${a.id}`), a.attributes.display) : e;
}
function R(a, t, i = "row") {
  switch (a.layoutDirection) {
    case I.AdaptiveVerticalCapped:
      return { kind: "adaptive", preferShelfLayout: !1, shouldCapGridRows: !0, numberOfShelfRows: 3 };
    case I.Horizontal:
      return { kind: "shelf", numberOfRows: 1 };
    case I.List:
      return "list";
    case I.Vertical:
      return { kind: "grid", flowStyle: i };
    case I.VerticalCapped:
      return { kind: "grid", shouldCapRows: !0, flowStyle: i };
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
function mi(a) {
  return a?.type === d.CanvasShelfCollection;
}
function Nt(a) {
  var t;
  const i = a?.primaryContent;
  return i?.type !== d.Artists ? null : (t = i.attributes) === null || t === void 0 ? void 0 : t.name;
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
const Tt = new Set(Object.values(Y)),
  Et = new Set(Object.values(W)),
  zt = new Set(Object.values(nt)),
  qt = new Set(Object.values(Q)),
  Ot = new Set(Object.values(X)),
  Ht = new Set(Object.values(V)),
  Ft = new Set(Object.values(ot)),
  $t = new Set(Object.values(tt)),
  Pt = new Set(Object.values(lt)),
  Kt = new Set(Object.values(it)),
  Ut = new Set(Object.values(st));
function Yt(a) {
  var t;
  return (t = a?.[d.Albums]) === null || t === void 0 ? void 0 : t.find((i) => Tt.has(i));
}
function Wt(a) {
  var t;
  return (t = a?.[d.AppleCurators]) === null || t === void 0 ? void 0 : t.find((i) => Et.has(i));
}
function Zt(a) {
  var t;
  return (t = a?.[d.Artists]) === null || t === void 0 ? void 0 : t.find((i) => zt.has(i));
}
function Jt(a) {
  var t;
  return (t = a?.[d.Concerts]) === null || t === void 0 ? void 0 : t.find((i) => qt.has(i));
}
function Qt(a) {
  var t;
  return (t = a?.[d.MusicMovies]) === null || t === void 0 ? void 0 : t.find((i) => Ot.has(i));
}
function Xt(a) {
  var t;
  return (t = a?.[d.MusicVideos]) === null || t === void 0 ? void 0 : t.find((i) => Ht.has(i));
}
function ti(a) {
  var t;
  return (t = a?.[d.Playlists]) === null || t === void 0 ? void 0 : t.find((i) => Ft.has(i));
}
function ii(a) {
  var t;
  return (t = a?.[d.Songs]) === null || t === void 0 ? void 0 : t.find((i) => $t.has(i));
}
function ei(a) {
  var t;
  return (t = a?.[d.Stations]) === null || t === void 0 ? void 0 : t.find((i) => Pt.has(i));
}
function ai(a) {
  var t;
  return (t = a?.[d.UploadedVideos]) === null || t === void 0 ? void 0 : t.find((i) => Kt.has(i));
}
function ni(a) {
  var t;
  return (t = a?.[d.Venues]) === null || t === void 0 ? void 0 : t.find((i) => Ut.has(i));
}
function mt(a, t, i) {
  var e, n, o, l, s, r, u, c, h, g, m, _, S, A, x, D, M, G, T, E, O, P;
  const w = a.context.displayVariants;
  switch (t.type) {
    case d.Albums:
      return (n = (e = a.album) === null || e === void 0 ? void 0 : e.call(a, t, Yt(w))) !== null && n !== void 0
        ? n
        : null;
    case d.AppleCurators:
      return (l = (o = a.appleCurator) === null || o === void 0 ? void 0 : o.call(a, t, Wt(w))) !== null && l !== void 0
        ? l
        : null;
    case d.Artists:
      return (r = (s = a.artist) === null || s === void 0 ? void 0 : s.call(a, t, Zt(w))) !== null && r !== void 0
        ? r
        : null;
    case d.Concerts:
      return (c = (u = a.concert) === null || u === void 0 ? void 0 : u.call(a, t, Jt(w))) !== null && c !== void 0
        ? c
        : null;
    case d.MusicMovies:
      return (g = (h = a.musicMovie) === null || h === void 0 ? void 0 : h.call(a, t, Qt(w))) !== null && g !== void 0
        ? g
        : null;
    case d.MusicVideos:
      return (_ = (m = a.musicVideo) === null || m === void 0 ? void 0 : m.call(a, t, Xt(w))) !== null && _ !== void 0
        ? _
        : null;
    case d.Playlists:
      return (A = (S = a.playlist) === null || S === void 0 ? void 0 : S.call(a, t, ti(w))) !== null && A !== void 0
        ? A
        : null;
    case d.Songs:
      return (D = (x = a.song) === null || x === void 0 ? void 0 : x.call(a, t, ii(w))) !== null && D !== void 0
        ? D
        : null;
    case d.Stations:
      return (G = (M = a.station) === null || M === void 0 ? void 0 : M.call(a, t, ei(w))) !== null && G !== void 0
        ? G
        : null;
    case d.UploadedVideos:
      return (E = (T = a.uploadedVideo) === null || T === void 0 ? void 0 : T.call(a, t, ai(w))) !== null &&
        E !== void 0
        ? E
        : null;
    case d.Venues:
      return (P = (O = a.venue) === null || O === void 0 ? void 0 : O.call(a, t, ni(w))) !== null && P !== void 0
        ? P
        : null;
    default:
      return ($.warn(i, `${a.label}: Unhandled resource type '${t.type}'`), null);
  }
}
function N(a, t, i) {
  const e = [];
  for (const n of t) {
    const o = a.context.resourceManager.resource(n);
    if (!o) continue;
    const l = mt(a, o, i);
    l != null && e.push(l);
  }
  return e;
}
var bt;
(function (a) {
  function t(i, e) {
    switch (e) {
      case d.Albums:
        return i.album !== void 0;
      case d.AppleCurators:
        return i.appleCurator !== void 0;
      case d.Artists:
        return i.artist !== void 0;
      case d.Concerts:
        return i.concert !== void 0;
      case d.MusicMovies:
        return i.musicMovie !== void 0;
      case d.MusicVideos:
        return i.musicVideo !== void 0;
      case d.Playlists:
        return i.playlist !== void 0;
      case d.Songs:
        return i.song !== void 0;
      case d.Stations:
        return i.station !== void 0;
      case d.UploadedVideos:
        return i.uploadedVideo !== void 0;
      case d.Venues:
        return i.venue !== void 0;
      default:
        return !1;
    }
  }
  a.supportsResourceType = t;
})(bt || (bt = {}));
class oi {
  constructor(t, i, e, n) {
    ((this.sectionContentTypeName = "CircleLockup"),
      (this.collection = t),
      (this.displayAttributes = i),
      (this.context = e),
      (this.objectGraph = n));
  }
  build() {
    var t, i, e;
    const n = N(
      new yt(
        { displayVariants: this.displayAttributes.variants, resourceManager: this.context.resourceManager },
        this.objectGraph,
      ),
      (e =
        (i = (t = this.collection.relationships) === null || t === void 0 ? void 0 : t.contents) === null ||
        i === void 0
          ? void 0
          : i.data) !== null && e !== void 0
        ? e
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
class yt {
  constructor(t, i) {
    ((this.label = "CircleLockupBuilder"), (this.context = t), (this.objectGraph = i));
  }
  artist(t, i) {
    var e, n;
    const o = v(t, this.objectGraph, this.context.resourceManager);
    return {
      id: t.id,
      title: (e = t.attributes) === null || e === void 0 ? void 0 : e.name,
      artwork: k((n = t.attributes) === null || n === void 0 ? void 0 : n.artwork, f.SpecificRectangle),
      contentDescriptor: o,
      segue: b(o, t, "ShelfItem", this.objectGraph),
    };
  }
}
function _t(a, t) {
  var i, e, n, o, l;
  switch (t) {
    case Y.ShortEditorialNotes:
      return (e = (i = a.attributes) === null || i === void 0 ? void 0 : i.plainEditorialNotes) === null || e === void 0
        ? void 0
        : e.short;
    case Y.ReleaseYear:
      return (o = (n = a.attributes) === null || n === void 0 ? void 0 : n.releaseDate) === null || o === void 0
        ? void 0
        : o.split("-")[0];
    default:
      return (l = a.attributes) === null || l === void 0 ? void 0 : l.artistName;
  }
}
function li(a, t, i) {
  var e, n, o, l;
  switch (i) {
    case V.ReleaseYear:
      return (n = (e = a.attributes) === null || e === void 0 ? void 0 : e.releaseDate) === null || n === void 0
        ? void 0
        : n.split("-")[0];
    case V.ShortDuration:
      return rt((o = a.attributes) === null || o === void 0 ? void 0 : o.durationInMillis, t);
    default:
      return (l = a.attributes) === null || l === void 0 ? void 0 : l.artistName;
  }
}
function si(a, t, i) {
  var e, n;
  switch (i) {
    case it.ShortDuration:
      return rt((e = a.attributes) === null || e === void 0 ? void 0 : e.durationInMilliseconds, t);
    default:
      return (n = a.attributes) === null || n === void 0 ? void 0 : n.artistName;
  }
}
class ri {
  constructor(t, i, e, n) {
    ((this.sectionContentTypeName = "HorizontalLockup"),
      (this.collection = t),
      (this.displayAttributes = i),
      (this.context = e),
      (this.objectGraph = n));
  }
  build() {
    var t, i, e;
    const n = N(
      new ut(
        { displayVariants: this.displayAttributes.variants, resourceManager: this.context.resourceManager },
        this.objectGraph,
      ),
      (e =
        (i = (t = this.collection.relationships) === null || t === void 0 ? void 0 : t.contents) === null ||
        i === void 0
          ? void 0
          : i.data) !== null && e !== void 0
        ? e
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
  constructor(t, i) {
    ((this.label = "HorizontalLockupBuilder"), (this.context = t), (this.objectGraph = i));
  }
  album(t, i) {
    var e, n;
    const o = v(t, this.objectGraph, this.context.resourceManager),
      l = b(o, t, "ShelfItem", this.objectGraph);
    return {
      id: t.id,
      title: (e = t.attributes) === null || e === void 0 ? void 0 : e.name,
      subtitle: _t(t, i),
      artwork: k((n = t.attributes) === null || n === void 0 ? void 0 : n.artwork, f.SpecificRectangle),
      contentDescriptor: o,
      playAction: y(o, this.objectGraph, null),
      segue: l,
      numberOfSocialBadges: 0,
      showExplicitBadge: L(t.attributes),
      showChevron: q.isSome(l),
      recoID: null,
    };
  }
  artist(t, i) {
    var e, n;
    const o = v(t, this.objectGraph, this.context.resourceManager),
      l = b(o, t, "ShelfItem", this.objectGraph);
    return {
      id: t.id,
      title: (e = t.attributes) === null || e === void 0 ? void 0 : e.name,
      subtitle: null,
      artwork: k((n = t.attributes) === null || n === void 0 ? void 0 : n.artwork, f.SpecificRectangle),
      artworkTreatment: wt.Circle,
      contentDescriptor: o,
      segue: l,
      numberOfSocialBadges: 0,
      showExplicitBadge: !1,
      showChevron: q.isSome(l),
      recoID: null,
    };
  }
  playlist(t, i) {
    var e, n, o;
    const l = v(t, this.objectGraph, this.context.resourceManager),
      s = b(l, t, "ShelfItem", this.objectGraph);
    return {
      id: t.id,
      title: (e = t.attributes) === null || e === void 0 ? void 0 : e.name,
      subtitle: (n = t.attributes) === null || n === void 0 ? void 0 : n.curatorName,
      artwork: k((o = t.attributes) === null || o === void 0 ? void 0 : o.artwork, f.SpecificRectangle),
      contentDescriptor: l,
      playAction: y(l, this.objectGraph, null),
      segue: s,
      numberOfSocialBadges: 0,
      showExplicitBadge: L(t.attributes),
      showChevron: q.isSome(s),
      recoID: null,
    };
  }
  station(t, i) {
    var e, n, o, l, s, r;
    const u = v(t, this.objectGraph, this.context.resourceManager),
      c = b(u, t, "ShelfItem", this.objectGraph);
    return {
      id: t.id,
      headline:
        (n = (e = t.attributes) === null || e === void 0 ? void 0 : e.plainEditorialNotes) === null || n === void 0
          ? void 0
          : n.standard,
      title: (o = t.attributes) === null || o === void 0 ? void 0 : o.name,
      subtitle:
        (s = (l = t.attributes) === null || l === void 0 ? void 0 : l.plainEditorialNotes) === null || s === void 0
          ? void 0
          : s.short,
      artwork: k((r = t.attributes) === null || r === void 0 ? void 0 : r.artwork, f.SpecificRectangle),
      contentDescriptor: u,
      playAction: y(u, this.objectGraph, null),
      segue: c,
      numberOfSocialBadges: 0,
      showExplicitBadge: L(t.attributes),
      showChevron: q.isSome(c),
      recoID: null,
    };
  }
}
class ui {
  constructor(t, i, e, n) {
    ((this.sectionContentTypeName = "AdaptiveHorizontalCircleLockup"),
      (this.collection = t),
      (this.displayAttributes = i),
      (this.context = e),
      (this.objectGraph = n));
  }
  build() {
    var t, i, e;
    const n = N(
      new di(
        { displayVariants: this.displayAttributes.variants, resourceManager: this.context.resourceManager },
        this.objectGraph,
      ),
      (e =
        (i = (t = this.collection.relationships) === null || t === void 0 ? void 0 : t.contents) === null ||
        i === void 0
          ? void 0
          : i.data) !== null && e !== void 0
        ? e
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
class di {
  constructor(t, i) {
    ((this.label = "AdaptiveHorizontalCircleLockupBuilder"),
      (this.context = t),
      (this.horizontalLockupBuilder = new ut(t, i)),
      (this.circleLockupBuilder = new yt(t, i)));
  }
  artist(t, i) {
    return {
      id: t.id,
      horizontalLockup: this.horizontalLockupBuilder.artist(t, i),
      circleLockup: this.circleLockupBuilder.artist(t, i),
    };
  }
}
class at {
  constructor(t, i, e, n) {
    ((this.sectionContentTypeName = "SquareLockup"),
      (this.collection = t),
      (this.displayAttributes = i),
      (this.context = e),
      (this.objectGraph = n));
  }
  build() {
    var t, i, e;
    const n = N(
      new St(
        {
          lockupStyle: this.lockupStyle,
          displayVariants: this.displayAttributes.variants,
          resourceManager: this.context.resourceManager,
        },
        this.objectGraph,
      ),
      (e =
        (i = (t = this.collection.relationships) === null || t === void 0 ? void 0 : t.contents) === null ||
        i === void 0
          ? void 0
          : i.data) !== null && e !== void 0
        ? e
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
  constructor(t, i) {
    ((this.label = "SquareLockupBuilder"), (this.context = t), (this.objectGraph = i));
  }
  album(t, i) {
    var e, n;
    const o = v(t, this.objectGraph, this.context.resourceManager);
    return {
      id: t.id,
      displayStyle: this.context.lockupStyle,
      titleLinks: j((e = t.attributes) === null || e === void 0 ? void 0 : e.name),
      subtitleLinks: j(_t(t, i)),
      artwork: k((n = t.attributes) === null || n === void 0 ? void 0 : n.artwork, f.SpecificRectangle),
      contentDescriptor: o,
      playAction: y(o, this.objectGraph, null),
      segue: b(o, t, "ShelfItem", this.objectGraph),
      numberOfSocialBadges: 0,
      showExplicitBadge: L(t.attributes),
      recoID: null,
    };
  }
  appleCurator(t, i) {
    var e, n, o, l;
    const s = v(t, this.objectGraph, this.context.resourceManager),
      r =
        i === W.StandardEditorialNotes
          ? (n = (e = t.attributes) === null || e === void 0 ? void 0 : e.plainEditorialNotes) === null || n === void 0
            ? void 0
            : n.standard
          : null;
    return {
      id: t.id,
      displayStyle: this.context.lockupStyle,
      titleLinks: j((o = t.attributes) === null || o === void 0 ? void 0 : o.name),
      subtitleLinks: j(r),
      artwork: k((l = t.attributes) === null || l === void 0 ? void 0 : l.artwork, f.SpecificRectangle),
      contentDescriptor: s,
      playAction: y(s, this.objectGraph, null),
      segue: b(s, t, "ShelfItem", this.objectGraph),
      numberOfSocialBadges: 0,
      showExplicitBadge: L(t.attributes),
      recoID: null,
    };
  }
  playlist(t, i) {
    var e, n, o;
    const l = v(t, this.objectGraph, this.context.resourceManager);
    return {
      id: t.id,
      displayStyle: this.context.lockupStyle,
      titleLinks: j((e = t.attributes) === null || e === void 0 ? void 0 : e.name),
      subtitleLinks: j((n = t.attributes) === null || n === void 0 ? void 0 : n.curatorName),
      artwork: k((o = t.attributes) === null || o === void 0 ? void 0 : o.artwork, f.SpecificRectangle),
      contentDescriptor: l,
      playAction: y(l, this.objectGraph, null),
      segue: b(l, t, "ShelfItem", this.objectGraph),
      numberOfSocialBadges: 0,
      showExplicitBadge: L(t.attributes),
      recoID: null,
    };
  }
  station(t, i) {
    var e, n, o;
    const l = v(t, this.objectGraph, this.context.resourceManager);
    return {
      id: t.id,
      displayStyle: this.context.lockupStyle,
      titleLinks: j((e = t.attributes) === null || e === void 0 ? void 0 : e.name),
      subtitleLinks: j((n = t.attributes) === null || n === void 0 ? void 0 : n.stationProviderName),
      artwork: k((o = t.attributes) === null || o === void 0 ? void 0 : o.artwork, f.SpecificRectangle),
      contentDescriptor: l,
      playAction: y(l, this.objectGraph, null),
      segue: b(l, t, "ShelfItem", this.objectGraph),
      numberOfSocialBadges: 0,
      showExplicitBadge: L(t.attributes),
      recoID: null,
    };
  }
}
class ci {
  constructor(t, i, e, n) {
    ((this.sectionContentTypeName = "AdaptiveHorizontalSquareLockup"),
      (this.collection = t),
      (this.displayAttributes = i),
      (this.context = e),
      (this.objectGraph = n));
  }
  build() {
    var t, i, e;
    const n = this.displayAttributes.style === p.AdaptiveHorizontalSquareLockupMedium ? U.Medium : U.Regular,
      o = N(
        new hi(
          {
            squareLockupStyle: n,
            displayVariants: this.displayAttributes.variants,
            resourceManager: this.context.resourceManager,
          },
          this.objectGraph,
        ),
        (e =
          (i = (t = this.collection.relationships) === null || t === void 0 ? void 0 : t.contents) === null ||
          i === void 0
            ? void 0
            : i.data) !== null && e !== void 0
          ? e
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
class hi {
  constructor(t, i) {
    ((this.label = "AdaptiveHorizontalSquareLockup"),
      (this.context = t),
      (this.horizontalLockupBuilder = new ut(t, i)),
      (this.squareLockupBuilder = new St(
        { displayVariants: t.displayVariants, resourceManager: t.resourceManager, lockupStyle: t.squareLockupStyle },
        i,
      )));
  }
  album(t, i) {
    return {
      id: t.id,
      horizontalLockup: this.horizontalLockupBuilder.album(t, i),
      squareLockup: this.squareLockupBuilder.album(t, i),
    };
  }
  playlist(t, i) {
    return {
      id: t.id,
      horizontalLockup: this.horizontalLockupBuilder.playlist(t, i),
      squareLockup: this.squareLockupBuilder.playlist(t, i),
    };
  }
  station(t, i) {
    return {
      id: t.id,
      horizontalLockup: this.horizontalLockupBuilder.station(t, i),
      squareLockup: this.squareLockupBuilder.station(t, i),
    };
  }
}
class et {
  constructor(t, i, e, n) {
    ((this.sectionContentTypeName = et.sectionContentTypeName),
      (this.collection = t),
      (this.displayAttributes = i),
      (this.context = e),
      (this.objectGraph = n));
  }
  build() {
    var t, i, e;
    const n =
        (i = (t = this.collection.relationships) === null || t === void 0 ? void 0 : t.contents) === null ||
        i === void 0
          ? void 0
          : i.data,
      o = n?.[0];
    if (!o) return null;
    const l = this.context.resourceManager.resource(o);
    if (!l) return null;
    const s = this.context.primaryContent;
    if (!s) return null;
    const r = mt(
      new pi(
        {
          artist: s,
          heading: (e = this.collection.attributes) === null || e === void 0 ? void 0 : e.title,
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
class pi {
  constructor(t, i) {
    ((this.label = "ArtistFeaturedContentBuilder"), (this.context = t), (this.objectGraph = i));
  }
  album(t, i) {
    var e, n, o;
    const l = v(t, this.objectGraph, this.context.resourceManager);
    return {
      id: t.id,
      contentDescriptor: l,
      heading: this.context.heading,
      artwork: k((e = t.attributes) === null || e === void 0 ? void 0 : e.artwork, f.SpecificRectangle),
      artworkShape: C.Square,
      detailText: {
        headline: this.albumHeadline(t),
        title: (n = t.attributes) === null || n === void 0 ? void 0 : n.name,
        showExplicitBadge: L(t.attributes),
        subtitle: Lt((o = t.attributes) === null || o === void 0 ? void 0 : o.trackCount, this.objectGraph),
      },
      playAction: y(l, this.objectGraph, null),
      segue: b(l, t, "ShelfItem", this.objectGraph),
      recoID: null,
    };
  }
  appleCurator(t, i) {
    var e, n, o, l, s, r;
    const u = v(t, this.objectGraph, this.context.resourceManager),
      c =
        i === W.StandardEditorialNotes
          ? (n = (e = t.attributes) === null || e === void 0 ? void 0 : e.plainEditorialNotes) === null || n === void 0
            ? void 0
            : n.standard
          : (l = (o = t.attributes) === null || o === void 0 ? void 0 : o.plainEditorialNotes) === null || l === void 0
            ? void 0
            : l.short;
    return {
      id: t.id,
      contentDescriptor: u,
      heading: this.context.heading,
      artwork: k((s = t.attributes) === null || s === void 0 ? void 0 : s.artwork, f.SpecificRectangle),
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
  concert(t, i) {
    var e, n, o, l, s, r, u, c, h;
    const g =
        (o =
          (n = (e = t.relationships) === null || e === void 0 ? void 0 : e.venues) === null || n === void 0
            ? void 0
            : n.data) === null || o === void 0
          ? void 0
          : o[0],
      m = g ? this.context.resourceManager.resource(g) : null;
    if (!m) return null;
    const _ = v(t, this.objectGraph, this.context.resourceManager),
      S = (l = t.attributes) === null || l === void 0 ? void 0 : l.startISODateTime,
      A = q.isSome(S)
        ? { date: S, timeZone: (s = t.attributes) === null || s === void 0 ? void 0 : s.timeZone }
        : void 0;
    return {
      id: t.id,
      contentDescriptor: _,
      artwork: k((r = this.context.artist.attributes) === null || r === void 0 ? void 0 : r.artwork),
      artworkShape: C.Circle,
      accessoryCalendarArtwork: A,
      heading: this.context.heading,
      detailText: {
        title: (u = t.attributes) === null || u === void 0 ? void 0 : u.name,
        showExplicitBadge: !1,
        subtitle: (c = m.attributes) === null || c === void 0 ? void 0 : c.name,
        description: q.isSome(S)
          ? jt(S, (h = t.attributes) === null || h === void 0 ? void 0 : h.timeZone, this.objectGraph)
          : null,
      },
      playAction: null,
      segue: b(_, t, "ShelfItem", this.objectGraph),
      recoID: null,
    };
  }
  playlist(t, i) {
    var e, n, o, l;
    const s = v(t, this.objectGraph, this.context.resourceManager);
    return {
      id: t.id,
      contentDescriptor: s,
      artwork: k((e = t.attributes) === null || e === void 0 ? void 0 : e.artwork, f.SpecificRectangle),
      artworkShape: C.Square,
      heading: this.context.heading,
      detailText: {
        title: (n = t.attributes) === null || n === void 0 ? void 0 : n.name,
        showExplicitBadge: L(t.attributes),
        subtitle:
          (l = (o = t.attributes) === null || o === void 0 ? void 0 : o.plainEditorialNotes) === null || l === void 0
            ? void 0
            : l.short,
      },
      playAction: y(s, this.objectGraph, null),
      segue: b(s, t, "ShelfItem", this.objectGraph),
      recoID: null,
    };
  }
  station(t, i) {
    var e, n, o, l, s, r;
    const u = v(t, this.objectGraph, this.context.resourceManager);
    return {
      id: t.id,
      contentDescriptor: u,
      artwork: k((e = t.attributes) === null || e === void 0 ? void 0 : e.artwork, f.SpecificRectangle),
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
      playAction: y(u, this.objectGraph, null),
      segue: b(u, t, "ShelfItem", this.objectGraph),
      recoID: null,
    };
  }
  uploadedVideo(t, i) {
    var e, n, o, l;
    const s = v(t, this.objectGraph, this.context.resourceManager);
    return {
      id: t.id,
      contentDescriptor: s,
      artwork: k((e = t.attributes) === null || e === void 0 ? void 0 : e.artwork, f.SpecificRectangle),
      artworkShape: C.Brick,
      heading: this.context.heading,
      detailText: {
        headline: (n = t.attributes) === null || n === void 0 ? void 0 : n.artistName,
        title: (o = t.attributes) === null || o === void 0 ? void 0 : o.name,
        showExplicitBadge: L(t.attributes),
        subtitle: rt((l = t.attributes) === null || l === void 0 ? void 0 : l.durationInMilliseconds, this.objectGraph),
      },
      playAction: y(s, this.objectGraph, null),
      segue: b(s, t, "ShelfItem", this.objectGraph),
      recoID: null,
    };
  }
  musicMovie(t, i) {
    var e, n, o, l, s, r, u, c, h, g, m, _, S, A;
    const x = v(t, this.objectGraph, this.context.resourceManager),
      D =
        i === X.ShortEditorialNotes
          ? (n = (e = t.attributes) === null || e === void 0 ? void 0 : e.plainEditorialNotes) === null || n === void 0
            ? void 0
            : n.short
          : null,
      M =
        (m =
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
            : (g = (h = t.attributes) === null || h === void 0 ? void 0 : h.editorialArtwork) === null || g === void 0
              ? void 0
              : g.fullscreenBackground) !== null && m !== void 0
          ? m
          : (_ = t.attributes) === null || _ === void 0
            ? void 0
            : _.artwork;
    return {
      id: t.id,
      contentDescriptor: x,
      artwork: k(M, f.SpecificRectangle),
      artworkShape: C.Brick,
      heading: this.context.heading,
      detailText: {
        title: (S = t.attributes) === null || S === void 0 ? void 0 : S.name,
        showExplicitBadge: L(t.attributes),
        subtitle: D ?? ((A = t.attributes) === null || A === void 0 ? void 0 : A.artistName),
      },
      playAction: y(x, this.objectGraph, null),
      segue: b(x, t, "ShelfItem", this.objectGraph),
      recoID: null,
    };
  }
  musicVideo(t, i) {
    var e, n;
    const o = v(t, this.objectGraph, this.context.resourceManager);
    return {
      id: t.id,
      contentDescriptor: o,
      artwork: k((e = t.attributes) === null || e === void 0 ? void 0 : e.artwork, f.SpecificRectangle),
      artworkShape: C.Brick,
      heading: this.context.heading,
      detailText: {
        headline: this.musicVideoHeadline(t, i),
        title: (n = t.attributes) === null || n === void 0 ? void 0 : n.name,
        showExplicitBadge: L(t.attributes),
        subtitle: this.musicVideoSubtitle(t, i),
      },
      playAction: y(o, this.objectGraph, null),
      segue: b(o, t, "ShelfItem", this.objectGraph),
      recoID: null,
    };
  }
  albumHeadline(t) {
    var i, e;
    const n = (i = t.attributes) === null || i === void 0 ? void 0 : i.releaseDate,
      o = ct(n, this.objectGraph, "short");
    return !((e = t.attributes) === null || e === void 0) && e.isPrerelease && q.isSome(o)
      ? gt.string("Fuse.Artist.PreRelease", this.objectGraph, { releaseDate: o })
      : o;
  }
  musicVideoSubtitle(t, i) {
    var e;
    switch (i) {
      case V.ShortDuration:
      case V.DetailedReleaseInformation:
        return At((e = t.attributes) === null || e === void 0 ? void 0 : e.durationInMillis, this.objectGraph);
      default:
        return null;
    }
  }
  musicVideoHeadline(t, i) {
    var e;
    switch (i) {
      case V.DetailedReleaseInformation:
        return ct((e = t.attributes) === null || e === void 0 ? void 0 : e.releaseDate, this.objectGraph, "short");
      default:
        return null;
    }
  }
}
function yi(a, t) {
  return ft(a, t) && a.attributes.display.style === p.ArtistFeaturedContent;
}
class kt {
  constructor(t, i, e, n) {
    ((this.sectionContentTypeName = "BrickLockup"),
      (this.collection = t),
      (this.displayAttributes = i),
      (this.context = e),
      (this.objectGraph = n));
  }
  build() {
    var t, i, e;
    const n = this.displayAttributes.style === p.BrickLockupLarge ? ht.Large : ht.Regular,
      o = N(
        new vi(
          {
            lockupStyle: n,
            displayVariants: this.displayAttributes.variants,
            resourceManager: this.context.resourceManager,
          },
          this.objectGraph,
        ),
        (e =
          (i = (t = this.collection.relationships) === null || t === void 0 ? void 0 : t.contents) === null ||
          i === void 0
            ? void 0
            : i.data) !== null && e !== void 0
          ? e
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
class vi {
  constructor(t, i) {
    ((this.label = "BrickLockupBuilder"), (this.context = t), (this.objectGraph = i));
  }
  musicMovie(t, i) {
    var e, n, o;
    const l = v(t, this.objectGraph, this.context.resourceManager);
    return {
      id: t.id,
      displayStyle: this.context.lockupStyle,
      titleLinks: j((e = t.attributes) === null || e === void 0 ? void 0 : e.name),
      subtitleLinks: j((n = t.attributes) === null || n === void 0 ? void 0 : n.artistName),
      artwork: k((o = t.attributes) === null || o === void 0 ? void 0 : o.artwork, f.SpecificRectangle),
      contentDescriptor: l,
      playAction: y(l, this.objectGraph, null),
      segue: b(l, t, "ShelfItem", this.objectGraph),
      showExplicitBadge: L(t.attributes),
    };
  }
  musicVideo(t, i) {
    var e, n;
    const o = v(t, this.objectGraph, this.context.resourceManager);
    return {
      id: t.id,
      displayStyle: this.context.lockupStyle,
      titleLinks: j((e = t.attributes) === null || e === void 0 ? void 0 : e.name),
      subtitleLinks: j(li(t, this.objectGraph, i)),
      artwork: k((n = t.attributes) === null || n === void 0 ? void 0 : n.artwork, f.SpecificRectangle),
      contentDescriptor: o,
      playAction: y(o, this.objectGraph, null),
      segue: b(o, t, "ShelfItem", this.objectGraph),
      showExplicitBadge: L(t.attributes),
    };
  }
  uploadedVideo(t, i) {
    var e, n;
    const o = v(t, this.objectGraph, this.context.resourceManager);
    return {
      id: t.id,
      displayStyle: this.context.lockupStyle,
      titleLinks: j((e = t.attributes) === null || e === void 0 ? void 0 : e.name),
      subtitleLinks: j(si(t, this.objectGraph, i)),
      artwork: k((n = t.attributes) === null || n === void 0 ? void 0 : n.artwork, f.SpecificRectangle),
      contentDescriptor: o,
      playAction: y(o, this.objectGraph, null),
      segue: b(o, t, "ShelfItem", this.objectGraph),
      showExplicitBadge: L(t.attributes),
    };
  }
}
class bi {
  constructor(t, i, e, n) {
    ((this.sectionContentTypeName = "CalendarEventLockup"),
      (this.collection = t),
      (this.displayAttributes = i),
      (this.context = e),
      (this.objectGraph = n));
  }
  build() {
    var t, i, e;
    const n = N(
      new ki(
        { displayVariants: this.displayAttributes.variants, resourceManager: this.context.resourceManager },
        this.objectGraph,
      ),
      (e =
        (i = (t = this.collection.relationships) === null || t === void 0 ? void 0 : t.contents) === null ||
        i === void 0
          ? void 0
          : i.data) !== null && e !== void 0
        ? e
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
class ki {
  constructor(t, i) {
    ((this.label = "CalendarEventLockupBuilder"), (this.context = t), (this.objectGraph = i));
  }
  concert(t, i) {
    var e, n, o, l, s, r, u, c, h, g, m, _, S, A, x, D;
    const M =
        (o =
          (n = (e = t.relationships) === null || e === void 0 ? void 0 : e.venues) === null || n === void 0
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
    let w, J;
    if (i === Q.CityAndRegion) {
      const K =
        (u = (r = G?.attributes) === null || r === void 0 ? void 0 : r.structuredAddress) === null || u === void 0
          ? void 0
          : u.city;
      if (B(K)) return null;
      w = K;
      const H = (c = G?.attributes) === null || c === void 0 ? void 0 : c.name,
        dt = Gt(E, O, this.objectGraph, !0);
      F(H)
        ? (J = gt.string("AMWEB.ContentA.Middot.ContentB", this.objectGraph, { contentA: H, contentB: dt }))
        : (J = dt);
    } else {
      const K =
          (m =
            (g = (h = t.relationships) === null || h === void 0 ? void 0 : h.artists) === null || g === void 0
              ? void 0
              : g.data) === null || m === void 0
            ? void 0
            : m[0],
        H = K ? this.context.resourceManager.resource(K) : null;
      if (
        ((w =
          (S = (_ = H?.attributes) === null || _ === void 0 ? void 0 : _.name) !== null && S !== void 0
            ? S
            : (A = t.attributes) === null || A === void 0
              ? void 0
              : A.name),
        B(w))
      )
        return null;
      J = (x = G?.attributes) === null || x === void 0 ? void 0 : x.name;
    }
    return {
      id: t.id,
      title: w,
      subtitle: J,
      artwork: P,
      contentDescriptor: T,
      segue: b(T, t, "ShelfItem", this.objectGraph),
      showNearbyIndicator: (D = t.attributes) === null || D === void 0 ? void 0 : D.showNearbyIndicator,
    };
  }
}
class Z {
  constructor(t, i, e, n) {
    ((this.sectionContentTypeName = Z.sectionContentTypeName),
      (this.collection = t),
      (this.displayAttributes = i),
      (this.context = e),
      (this.objectGraph = n));
  }
  build() {
    var t, i, e;
    const n =
        this.displayAttributes.layoutDirection === I.List
          ? { kind: "playlistTrackList", hasVideo: !1, hasBadging: !1 }
          : "shelfTrackList",
      o = N(
        new gi(
          { displayVariants: this.displayAttributes.variants, resourceManager: this.context.resourceManager },
          this.objectGraph,
          n,
        ),
        (e =
          (i = (t = this.collection.relationships) === null || t === void 0 ? void 0 : t.contents) === null ||
          i === void 0
            ? void 0
            : i.data) !== null && e !== void 0
          ? e
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
class gi {
  constructor(t, i, e = "shelfTrackList") {
    ((this.label = "TrackLockupBuilder"), (this.context = t), (this.objectGraph = i), (this.layoutStyle = e));
  }
  song(t, i) {
    var e, n, o, l, s, r, u;
    const c = v(t, this.objectGraph, this.context.resourceManager),
      h = i === tt.AlbumAndReleaseYear;
    return {
      id: t.id,
      title: (e = t.attributes) === null || e === void 0 ? void 0 : e.name,
      subtitleLinks: j(
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
      artwork: k((s = t.attributes) === null || s === void 0 ? void 0 : s.artwork, f.SpecificRectangle),
      contentDescriptor: c,
      playAction: y(c, this.objectGraph, null),
      segue: b(c, t, "ShelfItem", this.objectGraph),
      layoutStyle: this.layoutStyle,
      duration:
        (u = (r = t.attributes) === null || r === void 0 ? void 0 : r.durationInMillis) !== null && u !== void 0
          ? u
          : null,
      showExplicitBadge: L(t.attributes),
      pauseAction: null,
      resumeAction: null,
    };
  }
}
function _i(a, t) {
  return ft(a, t) && a.attributes.display.style === p.ArtistFeaturedTrackLockup;
}
class z {
  constructor(t, i, e, n) {
    ((this.collection = t), (this.context = i), (this.objectGraph = e), (this.sectionIndex = n));
  }
  build() {
    var t;
    const i = Rt(this.collection, this.objectGraph, this.context.collectionsPreferSeeAllDisplayAttributes),
      e = i.style,
      n = z.builders[e];
    if (B(n))
      return (
        $.warn(
          this.objectGraph,
          `No section content builder type with style for ${this.collection.type}/${e}/${this.collection.id}`,
        ),
        null
      );
    const o = new n(this.collection, i, this.context, this.objectGraph),
      l = `${o.sectionContentTypeName}Section`,
      s = Mt(`${this.collection.id}-${l}`, this.objectGraph),
      r = o.build();
    if (B(r)) return ($.warn(this.objectGraph, `No section content for ${l}/${s}`), null);
    let u;
    if (!this.context.dropCollectionSectionHeaders)
      if (F(o.header)) u = o.header();
      else {
        const m = z.header(this.collection, this.objectGraph, this.context);
        u = F(m) ? { kind: "default", item: m } : null;
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
      g = z.addItemImpressions(r.items, h, this.objectGraph);
    return Object.assign(Object.assign({ id: s, header: u }, r), {
      items: g,
      impressionMetrics: vt(this.objectGraph, h),
    });
  }
  static addItemImpressions(t, i, e) {
    return t.map((n, o) => {
      const l = n,
        s = vt(e, z.itemMetricsDataFor(l, o, i));
      return Object.assign(
        Object.assign(Object.assign({}, l), { impressionMetrics: s }),
        z.innerLockupsWithImpressions(l, s),
      );
    });
  }
  static itemMetricsDataFor(t, i, e) {
    var n, o, l, s, r;
    const u = e.impressionId;
    return {
      id: (n = t.id) !== null && n !== void 0 ? n : "",
      impressionId: pt(`${t.id} - ${u}`),
      impressionsIndex: i,
      impressionParentId: u,
      kind:
        (l = (o = t.contentDescriptor) === null || o === void 0 ? void 0 : o.kind) !== null && l !== void 0 ? l : null,
      name:
        (r = (s = t.contentDescriptor) === null || s === void 0 ? void 0 : s.name) !== null && r !== void 0 ? r : null,
      targetType: "ShelfItem",
    };
  }
  static innerLockupsWithImpressions(t, i) {
    const e = {};
    return (
      t.squareLockup && (e.squareLockup = Object.assign(Object.assign({}, t.squareLockup), { impressionMetrics: i })),
      t.horizontalLockup &&
        (e.horizontalLockup = Object.assign(Object.assign({}, t.horizontalLockup), { impressionMetrics: i })),
      t.circleLockup && (e.circleLockup = Object.assign(Object.assign({}, t.circleLockup), { impressionMetrics: i })),
      e
    );
  }
  static header(t, i, e) {
    var n, o, l, s;
    const r = t.attributes.title;
    if (B(r)) return null;
    const u = t.attributes.seeMoreUrl;
    if (F(u)) {
      const g = Ct(u, t.id, i);
      return { titleLink: { title: r, segue: g, url: u } };
    }
    const c =
        (l =
          (o = (n = t.relationships["see-all"]) === null || n === void 0 ? void 0 : n.data) === null || o === void 0
            ? void 0
            : o[0]) === null || l === void 0
          ? void 0
          : l.href,
      h = F((s = t.relationships.contents) === null || s === void 0 ? void 0 : s.next);
    if (F(c) && h) {
      const g = It(i, "seeAll", "button", "navigate", { actionUrl: c }),
        m = { $kind: "CanvasShelfCollectionSeeAllIntent", href: c, artistName: Nt(e), referrerInfo: null },
        _ = Bt({ kind: Vt.CatalogPage, intent: m }, g);
      return { titleLink: { title: r, segue: _, url: c } };
    }
    return { titleLink: { title: r } };
  }
}
z.builders = {
  [p.AdaptiveHorizontalCircleLockup]: ui,
  [p.AdaptiveHorizontalSquareLockupMedium]: ci,
  [p.ArtistFeaturedContent]: et,
  [p.BrickLockup]: kt,
  [p.BrickLockupLarge]: kt,
  [p.CalendarEventLockup]: bi,
  [p.CircleLockup]: oi,
  [p.HorizontalLockup]: ri,
  [p.SquareLockup]: at,
  [p.SquareLockupLarge]: at,
  [p.SquareLockupMedium]: at,
  [p.ArtistFeaturedTrackLockup]: Z,
  [p.TrackLockup]: Z,
};
export { pi as A, p as C, tt as S, gi as T, bt as a, z as b, _i as c, N as d, ft as e, mi as f, yi as i, mt as t };
