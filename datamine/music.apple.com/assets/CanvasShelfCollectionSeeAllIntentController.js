import { a8 as f, ao as h, a9 as w, ac as C, af as S, ag as v, ak as p } from "./main.js";
import { f as m, e as A, b as y } from "./CanvasCollectionSectionBuilder.js";
function g(n, t, e) {
  var i;
  const r = n.body,
    l = r == null ? void 0 : r.resources,
    s = (i = r == null ? void 0 : r.data) === null || i === void 0 ? void 0 : i[0];
  if (f(l)) throw new Error("No resource map in canvas shelf collection see-all response.");
  if (!m(s)) throw new Error("No canvas shelf collection resource identifier.");
  const c = new C(l, e),
    a = c.resource(s);
  if (!A(a, e)) throw new Error("No canvas shelf collection resource.");
  const o = new y(
    a,
    { resourceManager: c, collectionsPreferSeeAllDisplayAttributes: !0, dropCollectionSectionHeaders: !0 },
    e,
    0,
  ).build();
  if (f(o))
    throw (
      h.error(e, "Failed to build canvas shelf collection section for see-all."),
      new Error("Failed to build canvas shelf collection section.")
    );
  return {
    pageMetrics: w(e, n, "see_all", "SeeAll", c),
    header: a.attributes.title ? { title: a.attributes.title } : null,
    sections: [o],
  };
}
function M(n, t) {
  const e = new S(n.href, t);
  return (
    e.queryString.artworkURL.add(v.OmitFileExtension).add(v.OmitCropCode),
    e.queryString.extend.add("plainEditorialNotes").add("seeAllDisplay"),
    e.queryString.addParameters({ include: "contents", "limit[contents]": "100", "omit[resource]": "autos" }),
    p(e, t)
  );
}
var R =
  (globalThis && globalThis.__awaiter) ||
  function (n, t, e, i) {
    function r(l) {
      return l instanceof e
        ? l
        : new e(function (s) {
            s(l);
          });
    }
    return new (e || (e = Promise))(function (l, s) {
      function c(o) {
        try {
          u(i.next(o));
        } catch (d) {
          s(d);
        }
      }
      function a(o) {
        try {
          u(i.throw(o));
        } catch (d) {
          s(d);
        }
      }
      function u(o) {
        o.done ? l(o.value) : r(o.value).then(c, a);
      }
      u((i = i.apply(n, t || [])).next());
    });
  };
const E = {
  $intentKind: "CanvasShelfCollectionSeeAllIntent",
  perform(n, t) {
    return R(this, void 0, void 0, function* () {
      const e = yield M(n, t);
      return g(e, n, t);
    });
  },
};
export { E as CanvasShelfCollectionSeeAllIntentController };
