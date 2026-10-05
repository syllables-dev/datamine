import { bs as h, bt as k, bu as v, bv as y } from "./main.js";
const b = ["tv-plus", "arcade", "bundle", "icloud", "music", "news-plus", "fitness-plus"],
  w = [
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
  q = (t) =>
    t === null || typeof t != "object"
      ? !1
      : typeof t?.baseUrl == "string" &&
        typeof t?.language == "string" &&
        typeof t?.storefront == "string" &&
        typeof t?.token == "string" &&
        typeof t?.fetch == "function",
  E = (t) => b.includes(t),
  P = (t) => w.includes(t);
class l extends Error {
  value;
  type;
  constructor(e, s) {
    (super(`${e} is not a supported ${s}`), (this.value = e), (this.type = s));
  }
}
class z extends Error {
  status;
  payload;
  meta;
  errors;
  constructor({ status: e }, s) {
    (super(`HTTP Error ${e}: ${s.errors[0].title}: ${s.errors[0].detail}`),
      (this.status = e),
      (this.payload = s),
      (this.meta = s.meta),
      (this.errors = s.errors));
  }
}
const p = async (t, e, s, o, i) => {
    const r = new URL(t, e.baseUrl),
      n = {
        Authorization: `Bearer ${e.token}`,
        "Content-type": "application/json",
        ...(e.musicUserToken && { "media-user-token": e.musicUserToken }),
      },
      c = { ...{ l: e.language, platform: "web" }, ...s },
      g = { ...o, headers: n, credentials: "include" };
    for (const [d, f] of Object.entries(c)) r.searchParams.append(d, f);
    const a = await e.fetch(r, g),
      m = await a.json();
    if (a.ok) return (i.info(`Successfully fetched URL ${t}`), m);
    throw new z(a, m);
  },
  R = typeof process < "u" && process.env?.npm_package_version ? {}.npm_package_version : "unknown",
  x = "marketingkit",
  T = (t) => (t.environment ? t.environment : (console.warn("no config environment found, setting to dev"), "dev")),
  U = (t) => ({ project: x, environment: T(t), release: R });
class $ {
  config;
  consoleLogger;
  errorKit;
  logger;
  log;
  baseContextItemParams = { framework: "marketingKit", frameworkVersion: "1.0" };
  constructor(e) {
    if (
      ((this.config = e),
      (this.consoleLogger = new h()),
      (this.errorKit = k(U(this.config), this.consoleLogger)),
      (this.logger = new v([this.consoleLogger, new y(this.errorKit)])),
      (this.log = this.logger.loggerFor("marketingkit")),
      !q(this.config))
    )
      throw new Error("Missing required configuration params.");
    try {
      new URL(this.config.baseUrl);
    } catch {
      throw new Error(`Invalid baseUrl: "${this.config.baseUrl}" is not a valid URL.`);
    }
    if (!P(this.config.storefront)) throw new l(this.config.storefront, "storefront");
  }
  assertRequired(e, s) {
    if (!e) throw new Error(`Missing required params: ${s} must be provided.`);
  }
  buildPostRequest(e, { shouldIncludeMessageItems: s = !1 } = {}) {
    const o = { messagePlatform: "Web", items: e },
      i = {
        include: "contents",
        "meta[marketing-items]": "metrics",
        types: s ? "marketing-items,message-items" : "marketing-items",
      },
      r = { method: "POST", body: JSON.stringify(o) };
    return { queryParams: i, requestOptions: r };
  }
  async getMarketingItemsPlacement(e, s) {
    return this.getMarketingItemsV1Placement(e, s);
  }
  async getMarketingItemsV1Placement(e, s, o) {
    const i = `/v1/engagement/${this.config.storefront}/upsell`,
      r = { ...(e && { placement: e }), ...s },
      { serviceType: n, placement: u, linkCode: c } = r;
    if (n !== void 0 && !E(n)) throw new l(n, "serviceType");
    if (n === void 0 && c === void 0)
      throw new Error("Missing required params: serviceType or linkCode must be provided.");
    if (n !== void 0 && !c && !u)
      throw new Error("Missing required params: placement or linkCode must be provided when providing serviceType.");
    const g = { ...this.baseContextItemParams, contextVersion: "V1", contextV1Parameters: r },
      { queryParams: a, requestOptions: m } = this.buildPostRequest([g], o);
    return p(i, this.config, a, m, this.log);
  }
  async getMarketingItemsV2Placement(e, s) {
    (this.assertRequired(e, "params"),
      this.assertRequired(e.customerEngagementId, "customerEngagementId"),
      this.assertRequired(e.placement, "placement"),
      this.assertRequired(e.placement.kind, "placement.kind"));
    const o = `/v1/engagement/${this.config.storefront}/upsell`,
      i = { ...this.baseContextItemParams, contextVersion: "V2", ...e },
      { queryParams: r, requestOptions: n } = this.buildPostRequest([i], s);
    return p(o, this.config, r, n, this.log);
  }
}
export { $ as MarketingKit };
