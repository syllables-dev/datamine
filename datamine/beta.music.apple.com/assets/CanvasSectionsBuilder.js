import {
  ad as b,
  ao as l,
  a8 as c,
  ap as C,
  aq as m,
  ar as A,
  as as $,
  at as f,
  au as v,
  av as V,
  aw as U,
  ax as P,
  ay as q,
  az as M,
  aA as E,
  aB as j,
  aC as G,
  aj as _,
  aD as K,
  aE as R,
  aF as z,
  aG as W,
} from "./main.js";
import {
  i as Y,
  a as J,
  A as L,
  b as H,
  c as Q,
  t as X,
  S as Z,
  d as tt,
  T as et,
  e as it,
} from "./CanvasCollectionSectionBuilder.js";
var T;
(function (s) {
  s.ArtistFeaturedContentAndTracks = "artist-featured-content-and-tracks";
})(T || (T = {}));
function rt(s, e) {
  var t, i, r;
  if ((s == null ? void 0 : s.type) !== b.CanvasShelfGroup) return !1;
  const o = (t = s.attributes) === null || t === void 0 ? void 0 : t.display;
  return !o || !("style" in o)
    ? (l.warn(e, `${s.type}/${s.id} missing attributes.display.style`), !1)
    : Array.isArray(
          (r = (i = s.relationships) === null || i === void 0 ? void 0 : i.children) === null || r === void 0
            ? void 0
            : r.data,
        )
      ? !0
      : (l.warn(e, `${s.type}/${s.id} missing relationship children resource identifiers.`), !1);
}
var g;
(function (s) {
  ((s.ArtistBiographyHeader = "artist-biography-header"), (s.ArtistDetailHeader = "artist-detail-header"));
})(g || (g = {}));
var F;
(function (s) {
  function e(t, i) {
    if (typeof t != "object" || t === null) return (l.error(i, "Badge is not an object"), !1);
    const r = t;
    return typeof r.variant != "string"
      ? (l.error(i, "Badge missing variant"), !1)
      : typeof r.label != "string"
        ? (l.error(i, "Badge missing label"), !1)
        : !0;
  }
  s.isBadge = e;
})(F || (F = {}));
function ot(s, e) {
  var t;
  if ((s == null ? void 0 : s.type) !== b.CanvasShelfHeader) return !1;
  const i = (t = s.attributes) === null || t === void 0 ? void 0 : t.display;
  return !i || !("style" in i) ? (l.warn(e, `${s.type}/${s.id} missing attributes.display.style`), !1) : !0;
}
var D;
(function (s) {
  s.ArtistBioInformation = "artist-biography-information";
})(D || (D = {}));
function nt(s, e) {
  var t;
  if ((s == null ? void 0 : s.type) !== b.CanvasShelfMarker) return !1;
  const i = (t = s.attributes) === null || t === void 0 ? void 0 : t.display;
  return !i || !("style" in i) ? (l.warn(e, `${s.type}/${s.id} missing attributes.display.style`), !1) : !0;
}
var I;
(function (s) {
  s.ArtistAboutText = "artist-about-text";
})(I || (I = {}));
function st(s, e) {
  var t;
  if ((s == null ? void 0 : s.type) !== b.CanvasShelfText) return !1;
  const i = (t = s.attributes) === null || t === void 0 ? void 0 : t.display;
  return !i || !("style" in i) ? (l.warn(e, `${s.type}/${s.id} missing attributes.display.style`), !1) : !0;
}
class k {
  constructor(e, t, i, r) {
    ((this.sectionContentTypeName = "ArtistFeaturedContentAndTracks"),
      (this.artistFeaturedContentCollection = e),
      (this.trackLockupCollection = t),
      (this.context = i),
      (this.objectGraph = r));
  }
  static makeSectionContentBuilder(e, t, i) {
    var r, o;
    const n = (r = e.relationships.children.data) === null || r === void 0 ? void 0 : r[0],
      a = t.resourceManager.resource(n);
    if (!Y(a, i)) return (l.error(i, "First group shelf is not featured content collection"), null);
    const d = k.trackLockupCollection(e, t, i);
    if (c(d)) return null;
    const u = (o = a.relationships.contents.data) === null || o === void 0 ? void 0 : o[0];
    return c(u)
      ? null
      : J.supportsResourceType(L.prototype, u.type)
        ? new k(a, d, t, i)
        : (l.warn(i, `ArtistFeaturedContentBuilder does not support resource type '${u.type}', falling back to tracks`),
          null);
  }
  static fallbackCollection(e, t, i) {
    return k.trackLockupCollection(e, t, i);
  }
  build() {
    const e = this.context.primaryContent;
    if (c(e))
      return (
        l.error(this.objectGraph, "Unable to render ArtistFeaturedContentAndTracks outside of artist context"), null
      );
    const t = this.buildFeaturedContent(e);
    if (c(t)) return (l.error(this.objectGraph, "Failed to build artist featured content"), null);
    const i = this.buildTracks();
    if (i.length === 0) return (l.error(this.objectGraph, "Failed to build artist tracks"), null);
    const r = H.header(this.trackLockupCollection, this.objectGraph),
      o = {
        id: `featured-content-and-tracks-${this.artistFeaturedContentCollection.id}`,
        featuredContent: t,
        tracksHeader: r,
        tracks: i,
      };
    return {
      itemKind: "artistFeaturedContentAndTracks",
      presentation: {
        kind: "collection",
        layout: { kind: "adaptive", preferShelfLayout: !1, shouldCapGridRows: !0, numberOfShelfRows: 3 },
      },
      items: [o],
    };
  }
  header() {
    return null;
  }
  static trackLockupCollection(e, t, i) {
    var r, o, n, a, d, u;
    const p = (r = e.relationships.children.data) === null || r === void 0 ? void 0 : r[1],
      h = t.resourceManager.resource(p);
    return Q(h, i)
      ? ((a =
          (n = (o = h.relationships) === null || o === void 0 ? void 0 : o.contents) === null || n === void 0
            ? void 0
            : n.data) === null || a === void 0
          ? void 0
          : a.length) === 0
        ? (l.error(
            i,
            `Missing resource identifiers in ${h.type}/${(u = (d = h.attributes) === null || d === void 0 ? void 0 : d.display) === null || u === void 0 ? void 0 : u.style}/${h.id}`,
          ),
          null)
        : h
      : (l.error(i, "Second group shelf is not track lockup collection"), null);
  }
  buildFeaturedContent(e) {
    var t;
    const i =
        (t = this.artistFeaturedContentCollection.relationships.contents.data) === null || t === void 0 ? void 0 : t[0],
      r = this.context.resourceManager.resource(i);
    return c(r)
      ? null
      : X(
          new L(
            {
              artist: e,
              displayVariants: this.artistFeaturedContentCollection.attributes.display.variants,
              heading: this.artistFeaturedContentCollection.attributes.title,
              resourceManager: this.context.resourceManager,
            },
            this.objectGraph,
          ),
          r,
          this.objectGraph,
        );
  }
  buildTracks() {
    var e, t, i, r, o;
    const n = Object.assign(
      Object.assign(
        {},
        (t = (e = this.trackLockupCollection.attributes) === null || e === void 0 ? void 0 : e.display) === null ||
          t === void 0
          ? void 0
          : t.variants,
      ),
      { [b.Songs]: [Z.AlbumAndReleaseYear] },
    );
    return tt(
      new et({ displayVariants: n, resourceManager: this.context.resourceManager }, this.objectGraph),
      (o =
        (r = (i = this.trackLockupCollection.relationships) === null || i === void 0 ? void 0 : i.contents) === null ||
        r === void 0
          ? void 0
          : r.data) !== null && o !== void 0
        ? o
        : [],
      this.objectGraph,
    );
  }
}
class w {
  constructor(e, t, i, r) {
    ((this.group = e), (this.context = t), (this.objectGraph = i), (this.sectionIndex = r));
  }
  build() {
    var e;
    const t = this.group.attributes.display.style,
      i = w.builders[t];
    if (c(i))
      return (
        l.warn(
          this.objectGraph,
          `No section content builder type with style for ${this.group.type}/${t}/${this.group.id}`,
        ),
        null
      );
    const r = i.makeSectionContentBuilder(this.group, this.context, this.objectGraph);
    if (c(r)) {
      const d =
        (e = i.fallbackCollection) === null || e === void 0
          ? void 0
          : e.call(i, this.group, this.context, this.objectGraph);
      return C(d)
        ? this.buildFallbackCollection(d)
        : (l.warn(
            this.objectGraph,
            `Failed to create section content builder for ${this.group.type}/${t}/${this.group.id}`,
          ),
          null);
    }
    const o = m(`${this.group.id}-${r.sectionContentTypeName}`, this.objectGraph),
      n = r.build();
    if (c(n)) return (l.warn(this.objectGraph, `No section content for ${r.sectionContentTypeName}/${o}`), null);
    const a = C(r.header) ? r.header() : A(this.group.attributes.title);
    return Object.assign({ id: o, header: a }, n);
  }
  buildFallbackCollection(e) {
    return new H(e, this.context, this.objectGraph, this.sectionIndex).build();
  }
}
w.builders = { [T.ArtistFeaturedContentAndTracks]: k };
class at {
  constructor(e, t, i) {
    ((this.sectionContentTypeName = "ArtistBioHeader"),
      (this.shelfHeader = e),
      (this.context = t),
      (this.objectGraph = i));
  }
  build() {
    var e;
    const t = this.context.primaryContent;
    if (c(t))
      return (
        l.error(
          this.objectGraph,
          `Unable to render ArtistBioHeader outside of artist context ${this.shelfHeader.type}/${this.shelfHeader.id}`,
        ),
        null
      );
    const i = $(t, this.objectGraph, this.context.resourceManager),
      r = {
        id: t.id,
        title: (e = t.attributes) === null || e === void 0 ? void 0 : e.name,
        contentDescriptor: i,
        artwork: this.artwork(t),
        colorBackdropArtwork: this.colorBackdropArtwork(t),
        closeAction: null,
      };
    return { itemKind: "artistBioHeader", presentation: { kind: "single" }, items: [r] };
  }
  artwork(e) {
    var t, i, r;
    const o =
      (r =
        (i = (t = e.attributes) === null || t === void 0 ? void 0 : t.editorialArtwork) === null || i === void 0
          ? void 0
          : i.vipSquare) !== null && r !== void 0
        ? r
        : this.heroArtworkDictionary(e);
    return f(o, v.SpecificRectangle);
  }
  colorBackdropArtwork(e) {
    var t;
    return f((t = e.attributes) === null || t === void 0 ? void 0 : t.artwork, v.AlbumCircle);
  }
  heroArtworkDictionary(e) {
    var t, i, r, o, n;
    return (n =
      (o =
        (r =
          (i = (t = e.attributes) === null || t === void 0 ? void 0 : t.hero) === null || i === void 0
            ? void 0
            : i[0]) === null || r === void 0
          ? void 0
          : r.content) === null || o === void 0
        ? void 0
        : o[0]) === null || n === void 0
      ? void 0
      : n.artwork;
  }
}
function lt(s) {
  return { $kind: "ArtistBiographyPageIntent", contentDescriptor: s };
}
var N;
(function (s) {
  ((s.Symbol = "symbol"), (s.Asset = "asset"));
})(N || (N = {}));
class y {
  constructor(e, t, i) {
    ((this.sectionContentTypeName = "ArtistDetailHeader"),
      (this.shelfHeader = e),
      (this.context = t),
      (this.objectGraph = i));
  }
  build() {
    var e, t, i, r;
    const o = this.context.primaryContent;
    if (c(o))
      return (
        l.error(
          this.objectGraph,
          `Unable to render ArtistDetailHeader outside of artist context ${this.shelfHeader.type}/${this.shelfHeader.id}`,
        ),
        null
      );
    const n = $(o, this.objectGraph, this.context.resourceManager),
      a = this.playableContentDescriptor(o),
      d = this.titleBadge(),
      u = y.sectionName,
      p = {
        actionDetails: { kind: a == null ? void 0 : a.contentDescriptor.kind, sectionName: u },
        actionUrl: a == null ? void 0 : a.contentDescriptor.url,
        id: o.id,
        impressionId: V(`${u} - ${o.id}`),
        impressionsIndex: 0,
        kind: a == null ? void 0 : a.contentDescriptor.kind,
        name: (e = o.attributes) === null || e === void 0 ? void 0 : e.name,
        sectionName: u,
        targetType: "button",
        badges: d ? { [y.upcomingConcertsBadgeKey]: !0 } : void 0,
      },
      h = {
        id: o.id,
        title: (t = o.attributes) === null || t === void 0 ? void 0 : t.name,
        contentDescriptor: n,
        artistLogo: this.artistLogo(o),
        circleArtwork: this.circleArtwork(o),
        playButton: this.playButton(o, p),
        artwork: this.artwork(o),
        videoArtwork: this.videoArtwork(o),
        wideArtwork: this.wideArtwork(o),
        wideVideoArtwork: this.wideVideoArtwork(o),
        colorBackdropArtwork: this.colorBackdropArtwork(o),
        bioAction: this.bioAction(o, n, p),
        bio: (i = o.attributes) === null || i === void 0 ? void 0 : i.artistBio,
        titleBadge: d,
        keyColor: (r = o.attributes) === null || r === void 0 ? void 0 : r.keyColor,
        impressionMetrics: U(this.objectGraph, p),
      };
    return { itemKind: "artistDetailHeader", presentation: { kind: "single" }, items: [h] };
  }
  titleBadge() {
    const e = this.shelfHeader.attributes.badge;
    if (c(e)) return null;
    for (const t of e)
      if (F.isBadge(t, this.objectGraph))
        switch (t.variant) {
          case "concerts": {
            const i = P(t.url, null, "button", this.objectGraph);
            return {
              titleLink: { title: t.label, segue: i, url: t.url },
              image: { type: N.Asset, name: "concert.tickets.fill" },
              accessibilityElementName: "concertsBadge",
            };
          }
        }
    return null;
  }
  playButton(e, t) {
    const i = this.playableContentDescriptor(e);
    if (c(i)) return null;
    const r = Object.assign(Object.assign({}, t), { targetIdOverride: e.id }),
      o = q(i.contentDescriptor, this.objectGraph, r);
    return i.identifier.type === b.Stations
      ? M("Play Artist Station", o)
      : i.identifier.type === b.Albums
        ? M(E.string("FUSE.Play", this.objectGraph), o)
        : (l.error(this.objectGraph, `No playable content for ${e.type}/${e.id}`), null);
  }
  playableContentDescriptor(e) {
    var t, i, r;
    const o =
      (r =
        (i = (t = e.relationships) === null || t === void 0 ? void 0 : t["default-playable-content"]) === null ||
        i === void 0
          ? void 0
          : i.data) === null || r === void 0
        ? void 0
        : r[0];
    if (c(o)) return null;
    const n = this.context.resourceManager.resource(o);
    if (c(n)) return null;
    const a = $(n, this.objectGraph, this.context.resourceManager);
    return c(a) ? null : { identifier: o, contentDescriptor: a };
  }
  artistLogo(e) {
    var t, i;
    return f(
      (i = (t = e.attributes) === null || t === void 0 ? void 0 : t.editorialArtwork) === null || i === void 0
        ? void 0
        : i.musicContentColorLogoTrimmed,
      v.BoundedBox,
    );
  }
  circleArtwork(e) {
    return f(this.heroArtworkDictionary(e), v.SpecificRectangle);
  }
  artwork(e) {
    var t, i, r;
    const o =
      (r =
        (i = (t = e.attributes) === null || t === void 0 ? void 0 : t.editorialArtwork) === null || i === void 0
          ? void 0
          : i.vipSquare) !== null && r !== void 0
        ? r
        : this.heroArtworkDictionary(e);
    return f(o, v.SpecificRectangle);
  }
  videoArtwork(e) {
    var t, i;
    const r =
      (i = (t = e.attributes) === null || t === void 0 ? void 0 : t.editorialVideo) === null || i === void 0
        ? void 0
        : i.motionArtistSquare1x1;
    return j({ motionArtistSquare1x1: r }, G.SpecificRectangle);
  }
  wideArtwork(e) {
    var t, i, r;
    const o =
      (i = (t = e.attributes) === null || t === void 0 ? void 0 : t.editorialArtwork) === null || i === void 0
        ? void 0
        : i.centeredFullscreenBackground;
    if (_.isSome(o)) return f(o, v.SpecificRectangle);
    const n = this.heroArtworkDictionary(e);
    return c(n) || !((r = n.recommendedCropCodes) === null || r === void 0 ? void 0 : r.includes(v.HeroGalleryCrop))
      ? null
      : f(n, v.HeroGalleryCrop);
  }
  wideVideoArtwork(e) {
    var t, i, r, o, n, a;
    const d =
        (i = (t = e.attributes) === null || t === void 0 ? void 0 : t.editorialVideo) === null || i === void 0
          ? void 0
          : i.motionArtistFullscreen16x9,
      u =
        (o = (r = e.attributes) === null || r === void 0 ? void 0 : r.editorialVideo) === null || o === void 0
          ? void 0
          : o.motionArtistWide16x9,
      p = j({ motionArtistFullscreen16x9: d, motionArtistWide16x9: u }, G.SpecificRectangle);
    if (_.isSome(p)) return p;
    const h =
      (a = (n = e.attributes) === null || n === void 0 ? void 0 : n.editorialVideo) === null || a === void 0
        ? void 0
        : a.motionArtistSingular16x9;
    return j({ motionArtistSingular16x9: h }, G.SquareCenterCrop);
  }
  heroArtworkDictionary(e) {
    var t, i, r, o, n;
    return (n =
      (o =
        (r =
          (i = (t = e.attributes) === null || t === void 0 ? void 0 : t.hero) === null || i === void 0
            ? void 0
            : i[0]) === null || r === void 0
          ? void 0
          : r.content) === null || o === void 0
        ? void 0
        : o[0]) === null || n === void 0
      ? void 0
      : n.artwork;
  }
  colorBackdropArtwork(e) {
    var t;
    const i = this.circleArtwork(e);
    return _.isSome(i) ? i : f((t = e.attributes) === null || t === void 0 ? void 0 : t.artwork, v.AlbumCircle);
  }
  bioAction(e, t, i) {
    var r;
    if (!this.shouldShowBioAction(e) || c(t)) return null;
    const n = { kind: "modalPage", intent: lt(t) },
      a = {
        id: e.id,
        targetType: "button",
        impressionsIndex: -1,
        name: (r = e.attributes) === null || r === void 0 ? void 0 : r.name,
        targetIdOverride: "ArtistBiography",
        impressionParentId: i.impressionId,
      },
      d = K(this.objectGraph, a, "navigate", "artist_detail");
    return R(n, d);
  }
  shouldShowBioAction(e) {
    var t;
    return !!(!((t = e.attributes) === null || t === void 0) && t.hasBiographyContent);
  }
}
y.sectionName = "artistHeader";
y.upcomingConcertsBadgeKey = "Upcoming Concerts";
class S {
  constructor(e, t, i) {
    ((this.header = e), (this.context = t), (this.objectGraph = i));
  }
  build() {
    const e = this.header.attributes.display.style,
      t = S.builders[e];
    if (c(t))
      return (
        l.warn(
          this.objectGraph,
          `No section content builder type with style for ${this.header.type}/${e}/${this.header.id}`,
        ),
        null
      );
    const i = new t(this.header, this.context, this.objectGraph),
      r = i.sectionContentTypeName,
      o = m(`${this.header.id}-${r}`, this.objectGraph),
      n = i.build();
    return c(n) ? (l.warn(this.objectGraph, `No section content for ${r}/${o}`), null) : Object.assign({ id: o }, n);
  }
}
S.builders = { [g.ArtistBiographyHeader]: at, [g.ArtistDetailHeader]: y };
class ct {
  constructor(e, t, i) {
    ((this.sectionContentTypeName = "ArtistInfo"), (this.marker = e), (this.context = t), (this.objectGraph = i));
  }
  build() {
    var e, t, i, r, o;
    const n = this.artist;
    if (c(n))
      return (
        l.error(
          this.objectGraph,
          `Unable to render ArtistInfo outside of artist context ${this.marker.type}/${this.marker.id}`,
        ),
        null
      );
    const a = z(W.localization, this.objectGraph),
      d = (e = n.attributes) === null || e === void 0 ? void 0 : e.origin,
      u = (t = n.attributes) === null || t === void 0 ? void 0 : t.bornOrFormed,
      p = (i = n.attributes) === null || i === void 0 ? void 0 : i.genreNames,
      h = p && p.length > 0;
    if (!d && !u && !h) return null;
    const O = {
      id: `artist-bio-info-${n.id}`,
      bornOrFormedTitle: u
        ? !((r = n.attributes) === null || r === void 0) && r.isGroup
          ? a.string("FUSE.ArtistBio.Debuted")
          : a.string("FUSE.ArtistBio.Born")
        : null,
      bornOrFormedValue: u != null ? u : null,
      originTitle: d
        ? !((o = n.attributes) === null || o === void 0) && o.isGroup
          ? a.string("FUSE.Artist.Bio.Origin")
          : a.string("FUSE.Artist.Bio.Hometown")
        : null,
      originValue: d != null ? d : null,
      genreTitle: h ? a.string("FUSE.ArtistBio.Genre") : null,
      genres: h ? p : null,
    };
    return { itemKind: "artistBioInfo", presentation: { kind: "single" }, items: [O] };
  }
  header() {
    return null;
  }
  get artist() {
    var e;
    return (e = this.context.primaryContent) !== null && e !== void 0 ? e : null;
  }
}
class x {
  constructor(e, t, i) {
    ((this.marker = e), (this.context = t), (this.objectGraph = i));
  }
  build() {
    const e = this.marker.attributes.display.style,
      t = x.builders[e];
    if (c(t))
      return (
        l.warn(
          this.objectGraph,
          `No section content builder type with style for ${this.marker.type}/${e}/${this.marker.id}`,
        ),
        null
      );
    const i = new t(this.marker, this.context, this.objectGraph),
      r = `${i.sectionContentTypeName}Section`,
      o = m(`${this.marker.id}-${r}`, this.objectGraph),
      n = i.build();
    if (c(n)) return (l.warn(this.objectGraph, `No section content for ${r}/${o}`), null);
    const a = C(i.header) ? i.header() : A(this.marker.attributes.title);
    return Object.assign({ id: o, header: a }, n);
  }
}
x.builders = { [D.ArtistBioInformation]: ct };
class dt {
  constructor(e, t, i) {
    ((this.sectionContentTypeName = "PlainTextBlock"), (this.textShelf = e));
  }
  build() {
    const e = this.textShelf.attributes.text;
    if (c(e)) return null;
    const t = { id: `plain-text-block-${this.textShelf.id}`, text: e };
    return { itemKind: "plainTextBlock", presentation: { kind: "single" }, items: [t] };
  }
  header() {
    return A(this.textShelf.attributes.title);
  }
}
class B {
  constructor(e, t, i) {
    ((this.textShelf = e), (this.context = t), (this.objectGraph = i));
  }
  build() {
    const e = this.textShelf.attributes.display.style,
      t = B.builders[e];
    if (c(t))
      return (
        l.warn(
          this.objectGraph,
          `No section content builder type with style for ${this.textShelf.type}/${e}/${this.textShelf.id}`,
        ),
        null
      );
    const i = new t(this.textShelf, this.context, this.objectGraph),
      r = `${i.sectionContentTypeName}Section`,
      o = m(`${this.textShelf.id}-${r}`, this.objectGraph),
      n = i.build();
    if (c(n)) return (l.warn(this.objectGraph, `No section content for ${r}/${o}`), null);
    const a = C(i.header) ? i.header() : A(this.textShelf.attributes.title);
    return Object.assign({ id: o, header: a }, n);
  }
}
B.builders = { [I.ArtistAboutText]: dt };
class pt {
  constructor(e, t, i) {
    ((this.resourceIdentifiers = e), (this.context = t), (this.objectGraph = i));
  }
  build() {
    const e = [];
    for (const t of this.resourceIdentifiers) {
      const i = this.context.resourceManager.resource(t);
      if (!i) continue;
      const r = this.section(i, e.length);
      C(r) && e.push(r);
    }
    return e;
  }
  section(e, t) {
    switch (e.type) {
      case b.CanvasShelfCollection:
        if (it(e, this.objectGraph)) return new H(e, this.context, this.objectGraph, t).build();
        break;
      case b.CanvasShelfHeader:
        if (ot(e, this.objectGraph)) return new S(e, this.context, this.objectGraph).build();
        break;
      case b.CanvasShelfGroup:
        if (rt(e, this.objectGraph)) return new w(e, this.context, this.objectGraph, t).build();
        break;
      case b.CanvasShelfMarker:
        if (nt(e, this.objectGraph)) return new x(e, this.context, this.objectGraph).build();
        break;
      case b.CanvasShelfText:
        if (st(e, this.objectGraph)) return new B(e, this.context, this.objectGraph).build();
        break;
    }
    return (l.warn(this.objectGraph, `Unsupported canvas shelf type ${e.type}/${e.id}`), null);
  }
}
export { pt as C };
