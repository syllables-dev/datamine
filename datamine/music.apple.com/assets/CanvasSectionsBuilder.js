import {
  ad as p,
  ao as l,
  a8 as c,
  ap as m,
  aq as g,
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
  aC as B,
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
  if (s?.type !== p.CanvasShelfGroup) return !1;
  const n = (t = s.attributes) === null || t === void 0 ? void 0 : t.display;
  return !n || !("style" in n)
    ? (l.warn(e, `${s.type}/${s.id} missing attributes.display.style`), !1)
    : Array.isArray(
          (r = (i = s.relationships) === null || i === void 0 ? void 0 : i.children) === null || r === void 0
            ? void 0
            : r.data,
        )
      ? !0
      : (l.warn(e, `${s.type}/${s.id} missing relationship children resource identifiers.`), !1);
}
var C;
(function (s) {
  ((s.ArtistBiographyHeader = "artist-biography-header"), (s.ArtistDetailHeader = "artist-detail-header"));
})(C || (C = {}));
var D;
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
})(D || (D = {}));
function nt(s, e) {
  var t;
  if (s?.type !== p.CanvasShelfHeader) return !1;
  const i = (t = s.attributes) === null || t === void 0 ? void 0 : t.display;
  return !i || !("style" in i) ? (l.warn(e, `${s.type}/${s.id} missing attributes.display.style`), !1) : !0;
}
var F;
(function (s) {
  s.ArtistBioInformation = "artist-biography-information";
})(F || (F = {}));
function ot(s, e) {
  var t;
  if (s?.type !== p.CanvasShelfMarker) return !1;
  const i = (t = s.attributes) === null || t === void 0 ? void 0 : t.display;
  return !i || !("style" in i) ? (l.warn(e, `${s.type}/${s.id} missing attributes.display.style`), !1) : !0;
}
var I;
(function (s) {
  s.ArtistAboutText = "artist-about-text";
})(I || (I = {}));
function st(s, e) {
  var t;
  if (s?.type !== p.CanvasShelfText) return !1;
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
    var r, n;
    const o = ((r = e.relationships.children.data) !== null && r !== void 0 ? r : [])
      .map((u) => t.resourceManager.resource(u))
      .find((u) => Y(u, i));
    if (c(o)) return null;
    const a = k.trackLockupCollection(e, t, i);
    if (c(a)) return null;
    const d = (n = o.relationships.contents.data) === null || n === void 0 ? void 0 : n[0];
    return c(d)
      ? null
      : J.supportsResourceType(L.prototype, d.type)
        ? new k(o, a, t, i)
        : (l.warn(i, `ArtistFeaturedContentBuilder does not support resource type '${d.type}', falling back to tracks`),
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
    const r = H.header(this.trackLockupCollection, this.objectGraph, this.context),
      n = {
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
      items: [n],
    };
  }
  header() {
    return null;
  }
  static trackLockupCollection(e, t, i) {
    var r, n, o, a, d, u;
    const h = ((r = e.relationships.children.data) !== null && r !== void 0 ? r : [])
      .map((b) => t.resourceManager.resource(b))
      .find((b) => Q(b, i));
    return c(h)
      ? (l.error(i, "Group does not contain a track lockup collection"), null)
      : ((a =
            (o = (n = h.relationships) === null || n === void 0 ? void 0 : n.contents) === null || o === void 0
              ? void 0
              : o.data) === null || a === void 0
            ? void 0
            : a.length) === 0
        ? (l.error(
            i,
            `Missing resource identifiers in ${h.type}/${(u = (d = h.attributes) === null || d === void 0 ? void 0 : d.display) === null || u === void 0 ? void 0 : u.style}/${h.id}`,
          ),
          null)
        : h;
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
    var e, t, i, r, n;
    const o = Object.assign(
      Object.assign(
        {},
        (t = (e = this.trackLockupCollection.attributes) === null || e === void 0 ? void 0 : e.display) === null ||
          t === void 0
          ? void 0
          : t.variants,
      ),
      { [p.Songs]: [Z.AlbumAndReleaseYear] },
    );
    return tt(
      new et({ displayVariants: o, resourceManager: this.context.resourceManager }, this.objectGraph),
      (n =
        (r = (i = this.trackLockupCollection.relationships) === null || i === void 0 ? void 0 : i.contents) === null ||
        r === void 0
          ? void 0
          : r.data) !== null && n !== void 0
        ? n
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
      return m(d)
        ? this.buildFallbackCollection(d)
        : (l.warn(
            this.objectGraph,
            `Failed to create section content builder for ${this.group.type}/${t}/${this.group.id}`,
          ),
          null);
    }
    const n = g(`${this.group.id}-${r.sectionContentTypeName}`, this.objectGraph),
      o = r.build();
    if (c(o)) return (l.warn(this.objectGraph, `No section content for ${r.sectionContentTypeName}/${n}`), null);
    const a = m(r.header) ? r.header() : A(this.group.attributes.title);
    return Object.assign({ id: n, header: a }, o);
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
    const n =
      (r =
        (i = (t = e.attributes) === null || t === void 0 ? void 0 : t.editorialArtwork) === null || i === void 0
          ? void 0
          : i.vipSquare) !== null && r !== void 0
        ? r
        : this.heroArtworkDictionary(e);
    return f(n, v.SpecificRectangle);
  }
  colorBackdropArtwork(e) {
    var t;
    return f((t = e.attributes) === null || t === void 0 ? void 0 : t.artwork, v.AlbumCircle);
  }
  heroArtworkDictionary(e) {
    var t, i, r, n, o;
    return (o =
      (n =
        (r =
          (i = (t = e.attributes) === null || t === void 0 ? void 0 : t.hero) === null || i === void 0
            ? void 0
            : i[0]) === null || r === void 0
          ? void 0
          : r.content) === null || n === void 0
        ? void 0
        : n[0]) === null || o === void 0
      ? void 0
      : o.artwork;
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
    const n = this.context.primaryContent;
    if (c(n))
      return (
        l.error(
          this.objectGraph,
          `Unable to render ArtistDetailHeader outside of artist context ${this.shelfHeader.type}/${this.shelfHeader.id}`,
        ),
        null
      );
    const o = $(n, this.objectGraph, this.context.resourceManager),
      a = this.playableContentDescriptor(n),
      d = this.titleBadge(),
      u = y.sectionName,
      h = {
        actionDetails: { kind: a?.contentDescriptor.kind, sectionName: u },
        actionUrl: a?.contentDescriptor.url,
        id: n.id,
        impressionId: V(`${u} - ${n.id}`),
        impressionsIndex: 0,
        kind: a?.contentDescriptor.kind,
        name: (e = n.attributes) === null || e === void 0 ? void 0 : e.name,
        sectionName: u,
        targetType: "button",
        badges: d ? { [y.upcomingConcertsBadgeKey]: !0 } : void 0,
      },
      b = {
        id: n.id,
        title: (t = n.attributes) === null || t === void 0 ? void 0 : t.name,
        contentDescriptor: o,
        artistLogo: this.artistLogo(n),
        circleArtwork: this.circleArtwork(n),
        playButton: this.playButton(n, h),
        artwork: this.artwork(n),
        videoArtwork: this.videoArtwork(n),
        wideArtwork: this.wideArtwork(n),
        wideVideoArtwork: this.wideVideoArtwork(n),
        colorBackdropArtwork: this.colorBackdropArtwork(n),
        bioAction: this.bioAction(n, o, h),
        bio: (i = n.attributes) === null || i === void 0 ? void 0 : i.artistBio,
        titleBadge: d,
        keyColor: (r = n.attributes) === null || r === void 0 ? void 0 : r.keyColor,
        impressionMetrics: U(this.objectGraph, h),
      };
    return { itemKind: "artistDetailHeader", presentation: { kind: "single" }, items: [b] };
  }
  titleBadge() {
    const e = this.shelfHeader.attributes.badge;
    if (c(e)) return null;
    for (const t of e)
      if (D.isBadge(t, this.objectGraph))
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
      n = q(i.contentDescriptor, this.objectGraph, r);
    return i.identifier.type === p.Stations
      ? M("Play Artist Station", n)
      : i.identifier.type === p.Albums
        ? M(E.string("FUSE.Play", this.objectGraph), n)
        : (l.error(this.objectGraph, `No playable content for ${e.type}/${e.id}`), null);
  }
  playableContentDescriptor(e) {
    var t, i, r;
    const n =
      (r =
        (i = (t = e.relationships) === null || t === void 0 ? void 0 : t["default-playable-content"]) === null ||
        i === void 0
          ? void 0
          : i.data) === null || r === void 0
        ? void 0
        : r[0];
    if (c(n)) return null;
    const o = this.context.resourceManager.resource(n);
    if (c(o)) return null;
    const a = $(o, this.objectGraph, this.context.resourceManager);
    return c(a) ? null : { identifier: n, contentDescriptor: a };
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
    const n =
      (r =
        (i = (t = e.attributes) === null || t === void 0 ? void 0 : t.editorialArtwork) === null || i === void 0
          ? void 0
          : i.vipSquare) !== null && r !== void 0
        ? r
        : this.heroArtworkDictionary(e);
    return f(n, v.SpecificRectangle);
  }
  videoArtwork(e) {
    var t, i;
    const r =
      (i = (t = e.attributes) === null || t === void 0 ? void 0 : t.editorialVideo) === null || i === void 0
        ? void 0
        : i.motionArtistSquare1x1;
    return j({ motionArtistSquare1x1: r }, B.SpecificRectangle);
  }
  wideArtwork(e) {
    var t, i, r;
    const n =
      (i = (t = e.attributes) === null || t === void 0 ? void 0 : t.editorialArtwork) === null || i === void 0
        ? void 0
        : i.centeredFullscreenBackground;
    if (_.isSome(n)) return f(n, v.SpecificRectangle);
    const o = this.heroArtworkDictionary(e);
    return c(o) || !((r = o.recommendedCropCodes) === null || r === void 0 ? void 0 : r.includes(v.HeroGalleryCrop))
      ? null
      : f(o, v.HeroGalleryCrop);
  }
  wideVideoArtwork(e) {
    var t, i, r, n, o, a;
    const d =
        (i = (t = e.attributes) === null || t === void 0 ? void 0 : t.editorialVideo) === null || i === void 0
          ? void 0
          : i.motionArtistFullscreen16x9,
      u =
        (n = (r = e.attributes) === null || r === void 0 ? void 0 : r.editorialVideo) === null || n === void 0
          ? void 0
          : n.motionArtistWide16x9,
      h = j({ motionArtistFullscreen16x9: d, motionArtistWide16x9: u }, B.SpecificRectangle);
    if (_.isSome(h)) return h;
    const b =
      (a = (o = e.attributes) === null || o === void 0 ? void 0 : o.editorialVideo) === null || a === void 0
        ? void 0
        : a.motionArtistSingular16x9;
    return j({ motionArtistSingular16x9: b }, B.SquareCenterCrop);
  }
  heroArtworkDictionary(e) {
    var t, i, r, n, o;
    return (o =
      (n =
        (r =
          (i = (t = e.attributes) === null || t === void 0 ? void 0 : t.hero) === null || i === void 0
            ? void 0
            : i[0]) === null || r === void 0
          ? void 0
          : r.content) === null || n === void 0
        ? void 0
        : n[0]) === null || o === void 0
      ? void 0
      : o.artwork;
  }
  colorBackdropArtwork(e) {
    var t;
    const i = this.circleArtwork(e);
    return _.isSome(i) ? i : f((t = e.attributes) === null || t === void 0 ? void 0 : t.artwork, v.AlbumCircle);
  }
  bioAction(e, t, i) {
    var r;
    if (!this.shouldShowBioAction(e) || c(t)) return null;
    const o = { kind: "modalPage", intent: lt(t) },
      a = {
        id: e.id,
        targetType: "button",
        impressionsIndex: -1,
        name: (r = e.attributes) === null || r === void 0 ? void 0 : r.name,
        targetIdOverride: "ArtistBiography",
        impressionParentId: i.impressionId,
      },
      d = K(this.objectGraph, a, "navigate", "artist_detail");
    return R(o, d);
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
      n = g(`${this.header.id}-${r}`, this.objectGraph),
      o = i.build();
    return c(o) ? (l.warn(this.objectGraph, `No section content for ${r}/${n}`), null) : Object.assign({ id: n }, o);
  }
}
S.builders = { [C.ArtistBiographyHeader]: at, [C.ArtistDetailHeader]: y };
class ct {
  constructor(e, t, i) {
    ((this.sectionContentTypeName = "ArtistInfo"), (this.marker = e), (this.context = t), (this.objectGraph = i));
  }
  build() {
    var e, t, i, r, n;
    const o = this.artist;
    if (c(o))
      return (
        l.error(
          this.objectGraph,
          `Unable to render ArtistInfo outside of artist context ${this.marker.type}/${this.marker.id}`,
        ),
        null
      );
    const a = z(W.localization, this.objectGraph),
      d = (e = o.attributes) === null || e === void 0 ? void 0 : e.origin,
      u = (t = o.attributes) === null || t === void 0 ? void 0 : t.bornOrFormed,
      h = (i = o.attributes) === null || i === void 0 ? void 0 : i.genreNames,
      b = h && h.length > 0;
    if (!d && !u && !b) return null;
    const O = {
      id: `artist-bio-info-${o.id}`,
      bornOrFormedTitle: u
        ? !((r = o.attributes) === null || r === void 0) && r.isGroup
          ? a.string("FUSE.ArtistBio.Debuted")
          : a.string("FUSE.ArtistBio.Born")
        : null,
      bornOrFormedValue: u ?? null,
      originTitle: d
        ? !((n = o.attributes) === null || n === void 0) && n.isGroup
          ? a.string("FUSE.Artist.Bio.Origin")
          : a.string("FUSE.Artist.Bio.Hometown")
        : null,
      originValue: d ?? null,
      genreTitle: b ? a.string("FUSE.ArtistBio.Genre") : null,
      genres: b ? h : null,
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
      n = g(`${this.marker.id}-${r}`, this.objectGraph),
      o = i.build();
    if (c(o)) return (l.warn(this.objectGraph, `No section content for ${r}/${n}`), null);
    const a = m(i.header) ? i.header() : A(this.marker.attributes.title);
    return Object.assign({ id: n, header: a }, o);
  }
}
x.builders = { [F.ArtistBioInformation]: ct };
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
class G {
  constructor(e, t, i) {
    ((this.textShelf = e), (this.context = t), (this.objectGraph = i));
  }
  build() {
    const e = this.textShelf.attributes.display.style,
      t = G.builders[e];
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
      n = g(`${this.textShelf.id}-${r}`, this.objectGraph),
      o = i.build();
    if (c(o)) return (l.warn(this.objectGraph, `No section content for ${r}/${n}`), null);
    const a = m(i.header) ? i.header() : A(this.textShelf.attributes.title);
    return Object.assign({ id: n, header: a }, o);
  }
}
G.builders = { [I.ArtistAboutText]: dt };
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
      m(r) && e.push(r);
    }
    return e;
  }
  section(e, t) {
    switch (e.type) {
      case p.CanvasShelfCollection:
        if (it(e, this.objectGraph)) return new H(e, this.context, this.objectGraph, t).build();
        break;
      case p.CanvasShelfHeader:
        if (nt(e, this.objectGraph)) return new S(e, this.context, this.objectGraph).build();
        break;
      case p.CanvasShelfGroup:
        if (rt(e, this.objectGraph)) return new w(e, this.context, this.objectGraph, t).build();
        break;
      case p.CanvasShelfMarker:
        if (ot(e, this.objectGraph)) return new x(e, this.context, this.objectGraph).build();
        break;
      case p.CanvasShelfText:
        if (st(e, this.objectGraph)) return new G(e, this.context, this.objectGraph).build();
        break;
    }
    return (l.warn(this.objectGraph, `Unsupported canvas shelf type ${e.type}/${e.id}`), null);
  }
}
export { pt as C };
