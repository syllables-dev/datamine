var y = Object.defineProperty;
var v = (e, t, r) => (t in e ? y(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r));
var n = (e, t, r) => (v(e, typeof t != "symbol" ? t + "" : t, r), r);
import { bj as w, bk as q, bl as b, bm as E } from "./main.js";
const P = ["tv-plus", "arcade", "bundle", "icloud", "music", "news-plus", "fitness-plus"],
  z = [
    "us",
    "ca",
    "gb",
    "fr",
    "se",
    "no",
    "de",
    "ie",
    "au",
    "dk",
    "jp",
    "it",
    "ch",
    "cz",
    "cu",
    "at",
    "il",
    "es",
    "nl",
    "ru",
    "do",
    "co",
    "br",
    "mx",
    "ar",
    "is",
    "fi",
    "ps",
    "sz",
    "zw",
    "lc",
    "sk",
    "mg",
    "az",
    "gp",
    "tg",
    "sd",
    "gt",
    "nc",
    "pm",
    "bi",
    "ml",
    "sy",
    "mw",
    "bm",
    "dz",
    "pa",
    "nu",
    "li",
    "mv",
    "la",
    "pw",
    "vn",
    "ly",
    "aq",
    "bo",
    "gl",
    "ph",
    "mc",
    "cl",
    "ky",
    "yu",
    "bw",
    "tt",
    "pk",
    "om",
    "lv",
    "mp",
    "af",
    "pn",
    "tk",
    "ug",
    "mm",
    "cx",
    "ee",
    "sh",
    "gr",
    "aw",
    "be",
    "mz",
    "td",
    "lu",
    "dj",
    "lk",
    "kz",
    "cd",
    "iq",
    "mt",
    "tr",
    "er",
    "ni",
    "ls",
    "sn",
    "gy",
    "vu",
    "za",
    "pt",
    "bh",
    "kg",
    "gq",
    "ke",
    "tj",
    "cv",
    "tp",
    "lb",
    "vi",
    "hn",
    "na",
    "ro",
    "hm",
    "tz",
    "fm",
    "gf",
    "wf",
    "sl",
    "pl",
    "cf",
    "tv",
    "sj",
    "vc",
    "km",
    "kn",
    "cc",
    "um",
    "mk",
    "ae",
    "nz",
    "kh",
    "bb",
    "bs",
    "so",
    "sr",
    "pg",
    "st",
    "bf",
    "mo",
    "sv",
    "ad",
    "al",
    "sb",
    "tc",
    "gw",
    "id",
    "dm",
    "ye",
    "nr",
    "bg",
    "ir",
    "sa",
    "ve",
    "ao",
    "sg",
    "gd",
    "ck",
    "as",
    "fk",
    "cm",
    "cg",
    "kw",
    "mq",
    "pf",
    "zm",
    "to",
    "lr",
    "pe",
    "ms",
    "bz",
    "gu",
    "qa",
    "am",
    "ki",
    "cy",
    "hr",
    "kp",
    "cn",
    "gm",
    "mh",
    "si",
    "fo",
    "rw",
    "yt",
    "mr",
    "lt",
    "np",
    "gh",
    "pr",
    "ai",
    "ua",
    "fj",
    "gs",
    "ws",
    "cr",
    "ng",
    "bd",
    "py",
    "hk",
    "uz",
    "tm",
    "ag",
    "io",
    "my",
    "tn",
    "re",
    "in",
    "sm",
    "tw",
    "bt",
    "gi",
    "fx",
    "an",
    "ne",
    "md",
    "th",
    "ba",
    "hu",
    "ga",
    "nf",
    "eh",
    "ec",
    "bn",
    "mu",
    "jm",
    "ge",
    "gn",
    "sc",
    "tf",
    "et",
    "eg",
    "bj",
    "kr",
    "va",
    "vg",
    "ht",
    "jo",
    "uy",
    "ci",
    "mn",
    "ma",
    "bv",
    "by",
    "ww",
    "eu",
    "zz",
    "zy",
    "rs",
    "ax",
    "tl",
    "gg",
    "im",
    "je",
    "me",
    "bl",
    "mf",
    "xk",
    "ss",
    "cw",
    "bq",
    "sx",
  ],
  R = (e) =>
    e === null || typeof e != "object"
      ? !1
      : typeof (e == null ? void 0 : e.baseUrl) == "string" &&
        typeof (e == null ? void 0 : e.language) == "string" &&
        typeof (e == null ? void 0 : e.storefront) == "string" &&
        typeof (e == null ? void 0 : e.token) == "string" &&
        typeof (e == null ? void 0 : e.fetch) == "function",
  x = (e) => P.includes(e),
  T = (e) => z.includes(e);
class p extends Error {
  constructor(r, s) {
    super(`${r} is not a supported ${s}`);
    n(this, "value");
    n(this, "type");
    ((this.value = r), (this.type = s));
  }
}
class U extends Error {
  constructor({ status: r }, s) {
    super(`HTTP Error ${r}: ${s.errors[0].title}: ${s.errors[0].detail}`);
    n(this, "status");
    n(this, "payload");
    n(this, "meta");
    n(this, "errors");
    ((this.status = r), (this.payload = s), (this.meta = s.meta), (this.errors = s.errors));
  }
}
const d = async (e, t, r, s, a) => {
  const o = new URL(e, t.baseUrl),
    i = {
      Authorization: `Bearer ${t.token}`,
      "Content-type": "application/json",
      ...(t.musicUserToken && { "media-user-token": t.musicUserToken }),
    },
    m = { ...{ l: t.language, platform: "web" }, ...r },
    u = { ...s, headers: i, credentials: "include" };
  for (const [h, k] of Object.entries(m)) o.searchParams.append(h, k);
  const c = await t.fetch(o, u),
    g = await c.json();
  if (c.ok) return (a.info(`Successfully fetched URL ${e}`), g);
  throw new U(c, g);
};
var f;
const L =
    typeof process < "u" && (f = process.env) != null && f.npm_package_version ? {}.npm_package_version : "unknown",
  $ = "marketingkit",
  I = (e) => (e.environment ? e.environment : (console.warn("no config environment found, setting to dev"), "dev")),
  S = (e) => ({ project: $, environment: I(e), release: L });
class O {
  constructor(t) {
    n(this, "config");
    n(this, "consoleLogger");
    n(this, "errorKit");
    n(this, "logger");
    n(this, "log");
    n(this, "baseContextItemParams", { framework: "marketingKit", frameworkVersion: "1.0" });
    if (
      ((this.config = t),
      (this.consoleLogger = new w()),
      (this.errorKit = q(S(this.config), this.consoleLogger)),
      (this.logger = new b([this.consoleLogger, new E(this.errorKit)])),
      (this.log = this.logger.loggerFor("marketingkit")),
      !R(this.config))
    )
      throw new Error("Missing required configuration params.");
    try {
      new URL(this.config.baseUrl);
    } catch (r) {
      throw new Error(`Invalid baseUrl: "${this.config.baseUrl}" is not a valid URL.`);
    }
    if (!T(this.config.storefront)) throw new p(this.config.storefront, "storefront");
  }
  assertRequired(t, r) {
    if (!t) throw new Error(`Missing required params: ${r} must be provided.`);
  }
  buildPostRequest(t, { shouldIncludeMessageItems: r = !1 } = {}) {
    const s = { messagePlatform: "Web", items: t },
      a = {
        include: "contents",
        "meta[marketing-items]": "metrics",
        types: r ? "marketing-items,message-items" : "marketing-items",
      },
      o = { method: "POST", body: JSON.stringify(s) };
    return { queryParams: a, requestOptions: o };
  }
  async getMarketingItemsPlacement(t, r) {
    return this.getMarketingItemsV1Placement(t, r);
  }
  async getMarketingItemsV1Placement(t, r, s) {
    const a = `/v1/engagement/${this.config.storefront}/upsell`,
      o = { ...(t && { placement: t }), ...r },
      { serviceType: i, placement: l, linkCode: m } = o;
    if (i !== void 0 && !x(i)) throw new p(i, "serviceType");
    if (i === void 0 && m === void 0)
      throw new Error("Missing required params: serviceType or linkCode must be provided.");
    if (i !== void 0 && !m && !l)
      throw new Error("Missing required params: placement or linkCode must be provided when providing serviceType.");
    const u = { ...this.baseContextItemParams, contextVersion: "V1", contextV1Parameters: o },
      { queryParams: c, requestOptions: g } = this.buildPostRequest([u], s);
    return d(a, this.config, c, g, this.log);
  }
  async getMarketingItemsV2Placement(t, r) {
    (this.assertRequired(t, "params"),
      this.assertRequired(t.customerEngagementId, "customerEngagementId"),
      this.assertRequired(t.placement, "placement"),
      this.assertRequired(t.placement.kind, "placement.kind"));
    const s = `/v1/engagement/${this.config.storefront}/upsell`,
      a = { ...this.baseContextItemParams, contextVersion: "V2", ...t },
      { queryParams: o, requestOptions: i } = this.buildPostRequest([a], r);
    return d(s, this.config, o, i, this.log);
  }
}
export { O as MarketingKit };
