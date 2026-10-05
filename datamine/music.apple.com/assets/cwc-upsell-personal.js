import { p as y, H as v, h as n, d as k, c as F, g as d } from "./index-5.js";
import { a as P, t as l, i as x, d as M, b as N } from "./cwc-icon2.js";
const I =
    ".cwc-link-with-chevron{color:inherit;text-decoration:inherit}.cwc-link-with-chevron__content{vertical-align:middle}.cwc-link-with-chevron__icon{padding-left:.3em;height:18px;fill:#333;margin-bottom:1px;vertical-align:middle}.is-rtl .cwc-link-with-chevron__icon,[dir=rtl] .cwc-link-with-chevron__icon{-webkit-transform:rotate(180deg);transform:rotate(180deg)}",
  U = y(
    class extends v {
      constructor() {
        (super(), this.__registerHost(), (this.link = ""), (this.rel = "noopener"), (this.target = "_self"));
      }
      render() {
        return n(
          k,
          { class: "cwc-link-with-chevron" },
          n(
            "a",
            { href: this.link, class: "cwc-link-with-chevron__link", target: this.target, rel: this.rel },
            n("span", { class: "cwc-link-with-chevron__content" }, n("slot", null)),
            n("cwc-icon", { name: "chevron-right", class: "cwc-link-with-chevron__icon", role: "presentation" }),
          ),
        );
      }
      static get style() {
        return I;
      }
    },
    [4, "cwc-link-with-chevron", { link: [1], rel: [513], target: [513] }],
  );
function j() {
  if (typeof customElements > "u") return;
  ["cwc-link-with-chevron", "cwc-icon"].forEach((e) => {
    switch (e) {
      case "cwc-link-with-chevron":
        customElements.get(e) || customElements.define(e, U);
        break;
      case "cwc-icon":
        customElements.get(e) || P();
        break;
    }
  });
}
const B = (p, e, s) => (p || "").replace(new RegExp(e, "g"), s),
  T = (p, e = {}) => {
    if (typeof p != "string") return "";
    const s = String.fromCharCode(8209),
      i = String.fromCharCode(160),
      u = String.fromCharCode(45),
      r = [],
      a = p.trim();
    if (a === "") return "";
    let h = 0,
      g = 0;
    for (let c = 0; c < a.length; c++) {
      const _ = a[c],
        S = c < a.length - 1 ? a[c + 1] : void 0;
      h === 0 && _ === " "
        ? (r.push(a.slice(g, c)), (g = c + 1))
        : c === a.length - 1
          ? r.push(a.slice(g, c + 1))
          : _ === "<" && S && /[a-zA-Z]/.test(S)
            ? h++
            : _ === ">" && h > 0 && h--;
    }
    const m = r.length,
      f = r[m - 1],
      H = f.indexOf(i) !== -1,
      b = f.indexOf(s) !== -1,
      C = f.indexOf(u) !== -1,
      { shouldApplyToAllWords: w } = e,
      E = w ? i : " ";
    if (C) r[m - 1] = B(f, u, s);
    else if (m > 2 && !H && !b && !w) {
      const c = r[m - 2];
      r.splice(m - 2, 2, `${c}${i}${f}`);
    }
    return r.join(E);
  },
  t = "la",
  o = "lae",
  z = {
    us: null,
    do: t,
    ar: t,
    ai: o,
    ag: o,
    bb: o,
    fr: "fr",
    mc: "fr",
    de: "de",
    uk: "uk",
    at: "at",
    be: "benl",
    fi: "fi",
    gr: "gr",
    ie: "ie",
    it: "it",
    lu: "lu",
    nl: "nl",
    pt: "pt",
    es: "es",
    ca: "ca",
    se: "se",
    no: "no",
    dk: "dk",
    ch: "chde",
    au: "au",
    nz: "nz",
    jp: "jp",
    hk: "hk",
    sg: "sg",
    cn: "cn",
    kr: "kr",
    in: "in",
    mx: "mx",
    ru: "ru",
    tw: "tw",
    vn: "vn",
    za: "za",
    my: "my",
    ph: "ph",
    th: "th",
    id: "id",
    pk: null,
    pl: "pl",
    sa: "sa",
    tr: "tr",
    ae: "ae",
    hu: "hu",
    cl: "cl",
    np: null,
    pa: t,
    lk: null,
    ro: "ro",
    mv: null,
    cz: "cz",
    bd: null,
    il: "il",
    ua: null,
    kw: null,
    hr: null,
    cr: null,
    sk: "sk",
    lb: null,
    qa: null,
    si: "si",
    rs: null,
    co: "co",
    ve: t,
    br: "br",
    gt: t,
    sv: t,
    pe: t,
    ec: t,
    hn: t,
    jm: o,
    ni: t,
    py: t,
    uy: t,
    mo: "mo",
    eg: "eg",
    kz: null,
    ee: "ee",
    lv: "lv",
    lt: "lt",
    mt: "mt",
    li: null,
    md: "md",
    am: "am",
    bw: "bw",
    bg: "bg",
    ci: null,
    jo: "jo",
    ke: "ke",
    mk: null,
    mg: null,
    ml: null,
    mu: "mu",
    ne: "ne",
    sn: null,
    tn: null,
    ug: "ug",
    bs: null,
    bm: o,
    vg: o,
    ky: o,
    dm: o,
    gd: o,
    ms: o,
    kn: o,
    lc: o,
    vc: o,
    tt: o,
    tc: o,
    gy: o,
    sr: o,
    bz: o,
    bo: t,
    cy: null,
    is: null,
    bh: "bh",
    bn: null,
    ng: "ng",
    dz: null,
    ao: null,
    by: null,
    uz: null,
    ly: null,
    az: null,
    et: null,
    mm: null,
    ye: null,
    tz: null,
    gh: null,
    cm: null,
    al: null,
    bj: null,
    bt: null,
    bf: null,
    kh: null,
    cv: null,
    td: null,
    cg: null,
    fj: null,
    gm: null,
    gw: "gw",
    kg: null,
    la: t,
    lr: null,
    mw: null,
    mr: null,
    fm: null,
    mn: null,
    mz: null,
    na: null,
    pw: null,
    ps: null,
    pg: null,
    st: null,
    sc: null,
    sl: null,
    sb: null,
    sz: null,
    tj: null,
    tm: null,
    zw: null,
  },
  D = ["cn", "kr", "jp"],
  W =
    '@charset "UTF-8";.cwc-upsell-personal{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;overflow:auto;text-align:center;z-index:10;background:#fa233b;color:var(--systemPrimary-onDark,hsla(0,0%,100%,.92));padding:40px;background-image:linear-gradient(119.67deg,#f65677,#f83d59 5%,#fa233b 12%,#e22338 78%,#e3314d 92%,#e33f61 99%)}.cwc-upsell-personal__content{margin:auto;width:100%;-ms-flex:1;flex:1;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center}@media only screen and (max-width:483px){.cwc-upsell-personal{padding-top:87px;z-index:9}}@media only screen and (min-width:484px){.cwc-upsell-personal{padding-top:76px;width:calc(100vw - var(--web-navigation-width))}}.cwc-upsell-personal__artwork-container-outer{position:relative;display:-ms-flexbox;display:flex;overflow:hidden;-ms-flex:1;flex:1;max-height:min(calc(100vw - 80px),500px)}.cwc-upsell-personal__artwork-container-inner{position:absolute;display:-ms-flexbox;display:flex;margin:auto;aspect-ratio:1;max-width:100%;max-height:100%;left:0;right:0;top:0;bottom:0}.cwc-upsell-personal__artwork{margin:auto}.cwc-upsell-personal__artwork-image{max-height:100%;max-width:100%}@media only screen and (max-width:483px){.cwc-upsell-personal__logo{display:none}}.cwc-upsell-personal__logo-vector{margin-bottom:14px;height:20px;fill:var(--labelPrimary)}.cwc-upsell-personal__head{margin:0 auto 11px;font-size:28px;line-height:1.2142857143;font-weight:600;letter-spacing:.007em;font-family:-apple-system,BlinkMacSystemFont,Apple Color Emoji,SF Pro,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif}.cwc-upsell-personal__head:lang(ar){font-family:-apple-system,BlinkMacSystemFont,Apple Color Emoji,SF Pro,Arabic UI Display,SF Pro Icons,Segoe UI,Helvetica Neue,Helvetica,Arial,sans-serif}.cwc-upsell-personal__head:lang(he){font-family:-apple-system,BlinkMacSystemFont,Apple Color Emoji,SF Pro,Arial Hebrew,SF Pro Icons,Segoe UI,Helvetica Neue,Helvetica,Arial,sans-serif}.cwc-upsell-personal__head:lang(hi){font-family:-apple-system,BlinkMacSystemFont,Apple Color Emoji,SF Pro,Kohinoor Devanagari,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif}.cwc-upsell-personal__head:lang(ja){font-family:-apple-system,BlinkMacSystemFont,Apple Color Emoji,SF Pro,Hiragino Sans,SF Pro Icons,Hiragino Kaku Gothic Pro,ヒラギノ角ゴ Pro W3,メイリオ,Meiryo,ＭＳ Ｐゴシック,Helvetica Neue,Helvetica,Arial,sans-serif}.cwc-upsell-personal__head:lang(ko){font-family:-apple-system,BlinkMacSystemFont,Apple Color Emoji,SF Pro,Apple SD Gothic Neo,SF Pro Icons,Apple Gothic,HY Gulim,MalgunGothic,HY Dotum,Lexi Gulim,Helvetica Neue,Helvetica,Arial,sans-serif}.cwc-upsell-personal__head:lang(th){font-family:-apple-system,BlinkMacSystemFont,Apple Color Emoji,SF Pro,Thonburi Pro,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif}.cwc-upsell-personal__head:lang(zh-CN){font-family:-apple-system,BlinkMacSystemFont,Apple Color Emoji,SF Pro,PingFang SC,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif}.cwc-upsell-personal__head:lang(zh-HK),.cwc-upsell-personal__head:lang(zh-MO){font-family:-apple-system,BlinkMacSystemFont,Apple Color Emoji,SF Pro,PingFang HK,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif}.cwc-upsell-personal__head:lang(zh-TW){font-family:-apple-system,BlinkMacSystemFont,Apple Color Emoji,SF Pro,PingFang TC,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif}@media only screen and (min-width:1000px){.cwc-upsell-personal__head{font-size:40px;line-height:1.1;font-weight:600;letter-spacing:0;font-family:-apple-system,BlinkMacSystemFont,Apple Color Emoji,SF Pro,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif}.cwc-upsell-personal__head:lang(ar){font-family:-apple-system,BlinkMacSystemFont,Apple Color Emoji,SF Pro,Arabic UI Display,SF Pro Icons,Segoe UI,Helvetica Neue,Helvetica,Arial,sans-serif}.cwc-upsell-personal__head:lang(he){font-family:-apple-system,BlinkMacSystemFont,Apple Color Emoji,SF Pro,Arial Hebrew,SF Pro Icons,Segoe UI,Helvetica Neue,Helvetica,Arial,sans-serif}.cwc-upsell-personal__head:lang(hi){font-family:-apple-system,BlinkMacSystemFont,Apple Color Emoji,SF Pro,Kohinoor Devanagari,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif}.cwc-upsell-personal__head:lang(ja){font-family:-apple-system,BlinkMacSystemFont,Apple Color Emoji,SF Pro,Hiragino Sans,SF Pro Icons,Hiragino Kaku Gothic Pro,ヒラギノ角ゴ Pro W3,メイリオ,Meiryo,ＭＳ Ｐゴシック,Helvetica Neue,Helvetica,Arial,sans-serif}.cwc-upsell-personal__head:lang(ko){font-family:-apple-system,BlinkMacSystemFont,Apple Color Emoji,SF Pro,Apple SD Gothic Neo,SF Pro Icons,Apple Gothic,HY Gulim,MalgunGothic,HY Dotum,Lexi Gulim,Helvetica Neue,Helvetica,Arial,sans-serif}.cwc-upsell-personal__head:lang(th){font-family:-apple-system,BlinkMacSystemFont,Apple Color Emoji,SF Pro,Thonburi Pro,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif}.cwc-upsell-personal__head:lang(zh-CN){font-family:-apple-system,BlinkMacSystemFont,Apple Color Emoji,SF Pro,PingFang SC,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif}.cwc-upsell-personal__head:lang(zh-HK),.cwc-upsell-personal__head:lang(zh-MO){font-family:-apple-system,BlinkMacSystemFont,Apple Color Emoji,SF Pro,PingFang HK,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif}.cwc-upsell-personal__head:lang(zh-TW){font-family:-apple-system,BlinkMacSystemFont,Apple Color Emoji,SF Pro,PingFang TC,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif}}@media only screen and (min-width:1260px){.cwc-upsell-personal__head{font-size:48px;line-height:1.0834933333;font-weight:600;letter-spacing:-.003em;font-family:-apple-system,BlinkMacSystemFont,Apple Color Emoji,SF Pro,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif}.cwc-upsell-personal__head:lang(ar){letter-spacing:0;font-family:-apple-system,BlinkMacSystemFont,Apple Color Emoji,SF Pro,Arabic UI Display,SF Pro Icons,Segoe UI,Helvetica Neue,Helvetica,Arial,sans-serif}.cwc-upsell-personal__head:lang(ja){letter-spacing:0;font-family:-apple-system,BlinkMacSystemFont,Apple Color Emoji,SF Pro,Hiragino Sans,SF Pro Icons,Hiragino Kaku Gothic Pro,ヒラギノ角ゴ Pro W3,メイリオ,Meiryo,ＭＳ Ｐゴシック,Helvetica Neue,Helvetica,Arial,sans-serif}.cwc-upsell-personal__head:lang(ko){letter-spacing:0;font-family:-apple-system,BlinkMacSystemFont,Apple Color Emoji,SF Pro,Apple SD Gothic Neo,SF Pro Icons,Apple Gothic,HY Gulim,MalgunGothic,HY Dotum,Lexi Gulim,Helvetica Neue,Helvetica,Arial,sans-serif}.cwc-upsell-personal__head:lang(zh){letter-spacing:0}.cwc-upsell-personal__head:lang(he){font-family:-apple-system,BlinkMacSystemFont,Apple Color Emoji,SF Pro,Arial Hebrew,SF Pro Icons,Segoe UI,Helvetica Neue,Helvetica,Arial,sans-serif}.cwc-upsell-personal__head:lang(hi){font-family:-apple-system,BlinkMacSystemFont,Apple Color Emoji,SF Pro,Kohinoor Devanagari,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif}.cwc-upsell-personal__head:lang(th){font-family:-apple-system,BlinkMacSystemFont,Apple Color Emoji,SF Pro,Thonburi Pro,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif}.cwc-upsell-personal__head:lang(zh-CN){font-family:-apple-system,BlinkMacSystemFont,Apple Color Emoji,SF Pro,PingFang SC,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif}.cwc-upsell-personal__head:lang(zh-HK),.cwc-upsell-personal__head:lang(zh-MO){font-family:-apple-system,BlinkMacSystemFont,Apple Color Emoji,SF Pro,PingFang HK,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif}.cwc-upsell-personal__head:lang(zh-TW){font-family:-apple-system,BlinkMacSystemFont,Apple Color Emoji,SF Pro,PingFang TC,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif}}@media only screen and (min-width:1580px){.cwc-upsell-personal__head{font-size:64px;line-height:1.0625;font-weight:600;letter-spacing:-.009em;font-family:-apple-system,BlinkMacSystemFont,Apple Color Emoji,SF Pro,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif}.cwc-upsell-personal__head:lang(ar){letter-spacing:0;font-family:-apple-system,BlinkMacSystemFont,Apple Color Emoji,SF Pro,Arabic UI Display,SF Pro Icons,Segoe UI,Helvetica Neue,Helvetica,Arial,sans-serif}.cwc-upsell-personal__head:lang(ja){letter-spacing:0;font-family:-apple-system,BlinkMacSystemFont,Apple Color Emoji,SF Pro,Hiragino Sans,SF Pro Icons,Hiragino Kaku Gothic Pro,ヒラギノ角ゴ Pro W3,メイリオ,Meiryo,ＭＳ Ｐゴシック,Helvetica Neue,Helvetica,Arial,sans-serif}.cwc-upsell-personal__head:lang(ko){letter-spacing:0;font-family:-apple-system,BlinkMacSystemFont,Apple Color Emoji,SF Pro,Apple SD Gothic Neo,SF Pro Icons,Apple Gothic,HY Gulim,MalgunGothic,HY Dotum,Lexi Gulim,Helvetica Neue,Helvetica,Arial,sans-serif}.cwc-upsell-personal__head:lang(zh){letter-spacing:0}.cwc-upsell-personal__head:lang(he){font-family:-apple-system,BlinkMacSystemFont,Apple Color Emoji,SF Pro,Arial Hebrew,SF Pro Icons,Segoe UI,Helvetica Neue,Helvetica,Arial,sans-serif}.cwc-upsell-personal__head:lang(hi){font-family:-apple-system,BlinkMacSystemFont,Apple Color Emoji,SF Pro,Kohinoor Devanagari,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif}.cwc-upsell-personal__head:lang(th){font-family:-apple-system,BlinkMacSystemFont,Apple Color Emoji,SF Pro,Thonburi Pro,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif}.cwc-upsell-personal__head:lang(zh-CN){font-family:-apple-system,BlinkMacSystemFont,Apple Color Emoji,SF Pro,PingFang SC,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif}.cwc-upsell-personal__head:lang(zh-HK),.cwc-upsell-personal__head:lang(zh-MO){font-family:-apple-system,BlinkMacSystemFont,Apple Color Emoji,SF Pro,PingFang HK,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif}.cwc-upsell-personal__head:lang(zh-TW){font-family:-apple-system,BlinkMacSystemFont,Apple Color Emoji,SF Pro,PingFang TC,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif}}@media only screen and (min-width:1000px){.cwc-upsell-personal__head{margin-bottom:15px;max-width:440px}}@media only screen and (min-width:1260px){.cwc-upsell-personal__head{max-width:640px}}.cwc-upsell-personal__message{margin:0 auto 2rem;max-width:500px;width:100%;font-size:13px;line-height:1.3846153846;font-weight:400;letter-spacing:0;font-family:-apple-system,BlinkMacSystemFont,Apple Color Emoji,SF Pro,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif}.cwc-upsell-personal__message:lang(ar){font-family:-apple-system,BlinkMacSystemFont,Apple Color Emoji,SF Pro,Arabic UI Text,SF Pro Icons,Segoe UI,Helvetica Neue,Helvetica,Arial,sans-serif}.cwc-upsell-personal__message:lang(he){font-family:-apple-system,BlinkMacSystemFont,Apple Color Emoji,SF Pro,Arial Hebrew,SF Pro Icons,Segoe UI,Helvetica Neue,Helvetica,Arial,sans-serif}.cwc-upsell-personal__message:lang(hi){font-family:-apple-system,BlinkMacSystemFont,Apple Color Emoji,SF Pro,Kohinoor Devanagari,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif}.cwc-upsell-personal__message:lang(ja){font-family:-apple-system,BlinkMacSystemFont,Apple Color Emoji,SF Pro,Hiragino Sans,SF Pro Icons,Hiragino Kaku Gothic Pro,ヒラギノ角ゴ Pro W3,メイリオ,Meiryo,ＭＳ Ｐゴシック,Helvetica Neue,Helvetica,Arial,sans-serif}.cwc-upsell-personal__message:lang(ko){font-family:-apple-system,BlinkMacSystemFont,Apple Color Emoji,SF Pro,Apple SD Gothic Neo,SF Pro Icons,Apple Gothic,HY Gulim,MalgunGothic,HY Dotum,Lexi Gulim,Helvetica Neue,Helvetica,Arial,sans-serif}.cwc-upsell-personal__message:lang(th){font-family:-apple-system,BlinkMacSystemFont,Apple Color Emoji,SF Pro,Thonburi Pro,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif}.cwc-upsell-personal__message:lang(zh-CN){font-family:-apple-system,BlinkMacSystemFont,Apple Color Emoji,SF Pro,PingFang SC,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif}.cwc-upsell-personal__message:lang(zh-HK),.cwc-upsell-personal__message:lang(zh-MO){font-family:-apple-system,BlinkMacSystemFont,Apple Color Emoji,SF Pro,PingFang HK,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif}.cwc-upsell-personal__message:lang(zh-TW){font-family:-apple-system,BlinkMacSystemFont,Apple Color Emoji,SF Pro,PingFang TC,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif}@media only screen and (min-width:1000px){.cwc-upsell-personal__message{font-size:17px;line-height:1.4118447059;font-weight:400;letter-spacing:0;font-family:-apple-system,BlinkMacSystemFont,Apple Color Emoji,SF Pro,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif}.cwc-upsell-personal__message:lang(ar){font-family:-apple-system,BlinkMacSystemFont,Apple Color Emoji,SF Pro,Arabic UI Text,SF Pro Icons,Segoe UI,Helvetica Neue,Helvetica,Arial,sans-serif}.cwc-upsell-personal__message:lang(he){font-family:-apple-system,BlinkMacSystemFont,Apple Color Emoji,SF Pro,Arial Hebrew,SF Pro Icons,Segoe UI,Helvetica Neue,Helvetica,Arial,sans-serif}.cwc-upsell-personal__message:lang(hi){font-family:-apple-system,BlinkMacSystemFont,Apple Color Emoji,SF Pro,Kohinoor Devanagari,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif}.cwc-upsell-personal__message:lang(ja){font-family:-apple-system,BlinkMacSystemFont,Apple Color Emoji,SF Pro,Hiragino Sans,SF Pro Icons,Hiragino Kaku Gothic Pro,ヒラギノ角ゴ Pro W3,メイリオ,Meiryo,ＭＳ Ｐゴシック,Helvetica Neue,Helvetica,Arial,sans-serif}.cwc-upsell-personal__message:lang(ko){font-family:-apple-system,BlinkMacSystemFont,Apple Color Emoji,SF Pro,Apple SD Gothic Neo,SF Pro Icons,Apple Gothic,HY Gulim,MalgunGothic,HY Dotum,Lexi Gulim,Helvetica Neue,Helvetica,Arial,sans-serif}.cwc-upsell-personal__message:lang(th){font-family:-apple-system,BlinkMacSystemFont,Apple Color Emoji,SF Pro,Thonburi Pro,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif}.cwc-upsell-personal__message:lang(zh-CN){font-family:-apple-system,BlinkMacSystemFont,Apple Color Emoji,SF Pro,PingFang SC,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif}.cwc-upsell-personal__message:lang(zh-HK),.cwc-upsell-personal__message:lang(zh-MO){font-family:-apple-system,BlinkMacSystemFont,Apple Color Emoji,SF Pro,PingFang HK,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif}.cwc-upsell-personal__message:lang(zh-TW){font-family:-apple-system,BlinkMacSystemFont,Apple Color Emoji,SF Pro,PingFang TC,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif}}.cwc-upsell-personal__learn-more,.cwc-upsell-personal__student{margin-top:21px;display:block}.cwc-upsell-personal__learn-more .cwc-upsell-personal__learn-more-link a:active,.cwc-upsell-personal__learn-more .cwc-upsell-personal__learn-more-link a:focus,.cwc-upsell-personal__learn-more .cwc-upsell-personal__learn-more-link a:hover,.cwc-upsell-personal__learn-more .cwc-upsell-personal__learn-more-link a:link,.cwc-upsell-personal__learn-more .cwc-upsell-personal__learn-more-link a:visited,.cwc-upsell-personal__learn-more .cwc-upsell-personal__student-link a:active,.cwc-upsell-personal__learn-more .cwc-upsell-personal__student-link a:focus,.cwc-upsell-personal__learn-more .cwc-upsell-personal__student-link a:hover,.cwc-upsell-personal__learn-more .cwc-upsell-personal__student-link a:link,.cwc-upsell-personal__learn-more .cwc-upsell-personal__student-link a:visited,.cwc-upsell-personal__student .cwc-upsell-personal__learn-more-link a:active,.cwc-upsell-personal__student .cwc-upsell-personal__learn-more-link a:focus,.cwc-upsell-personal__student .cwc-upsell-personal__learn-more-link a:hover,.cwc-upsell-personal__student .cwc-upsell-personal__learn-more-link a:link,.cwc-upsell-personal__student .cwc-upsell-personal__learn-more-link a:visited,.cwc-upsell-personal__student .cwc-upsell-personal__student-link a:active,.cwc-upsell-personal__student .cwc-upsell-personal__student-link a:focus,.cwc-upsell-personal__student .cwc-upsell-personal__student-link a:hover,.cwc-upsell-personal__student .cwc-upsell-personal__student-link a:link,.cwc-upsell-personal__student .cwc-upsell-personal__student-link a:visited{color:var(--labelPrimary)}.cwc-upsell-personal__cta-button{margin:0 auto}.cwc-upsell-personal__cta-button .cwc-button{border-radius:4px;min-width:150px;font-weight:500;font-size:16px;height:36px;font-family:unset;letter-spacing:0}@media only screen and (max-width:999px){.cwc-upsell-personal__cta-button .cwc-button{font-size:14px;height:32px}}.cwc-upsell-personal__cta-button .cwc-button,.cwc-upsell-personal__cta-button .cwc-button:active,.cwc-upsell-personal__cta-button .cwc-button:focus,.cwc-upsell-personal__cta-button .cwc-button:hover{background:#fff;color:#000}',
  G = [
    { media: "(max-width: 499px)", fileName: "Apple-Music-Note_250", fileExtension: "webp" },
    { media: "(max-width: 499px)", fileName: "Apple-Music-Note_250", fileExtension: "png" },
    { media: "(min-width: 500px)", fileName: "Apple-Music-Note_500", fileExtension: "webp" },
    { media: "(min-width: 500px)", fileName: "Apple-Music-Note_500", fileExtension: "png" },
  ],
  A = y(
    class extends v {
      constructor() {
        (super(),
          this.__registerHost(),
          (this.upsellCtaClick = F(this, "upsellCtaClick", 7)),
          (this.upsellStudentCtaClick = F(this, "upsellStudentCtaClick", 7)),
          (this.getLearnMoreUrl = () => {
            const e = this.storefront,
              s = z[e];
            return s ? `https://www.apple.com/${s}/apple-music` : "https://www.apple.com/apple-music";
          }),
          (this.getUpsellData = () => {
            if (this.upsellData)
              try {
                return JSON.parse(this.upsellData);
              } catch (i) {
                return null;
              }
            const e = () => {
                const i = this.basePriceString,
                  u = this.introPeriod,
                  r = this.isUserEligibleForTrial || this.isUserEligibleForWinbackOffer,
                  a = {
                    message: l("FUSE.WEB.ForYou.Upsell.Generic.Description"),
                    learnMore: l("FUSE.NewForYouUpsell.LearnMore"),
                    header: void 0,
                    button: void 0,
                  };
                return r
                  ? {
                      ...a,
                      header: l("FUSE.NewForYouUpsell.Header.Trial"),
                      button: this.isFreeTrial ? l("FUSE.NewForYouUpsell.CTA.PXM") : l("FUSE.NewForYouUpsell.CTA.PXMY"),
                      ...(i
                        ? {
                            message: this.isFreeTrial
                              ? u
                                ? l("FUSE.NewForYouUpsell.Description.PXM", { introPricingDuration: u, price: i })
                                : l("FUSE.NewForYouUpsell.Description.NonTrial", { price: i })
                              : l("FUSE.NewForYouUpsell.Description.PXMY", { price: i }),
                          }
                        : {}),
                    }
                  : {
                      ...a,
                      header: l("FUSE.NewForYouUpsell.Header.NonTrial"),
                      button: l("FUSE.NewForYouUpsell.CTA.NonTrial"),
                      ...(i ? { message: l("FUSE.NewForYouUpsell.Description.NonTrial", { price: i }) } : {}),
                    };
              },
              s = () => {
                const i = this.basePriceString,
                  u = this.introPrice,
                  r = this.introPeriod,
                  a = {
                    header: l("AMWeb.ForYouUpsell.Header.Trial"),
                    studentLink: l("FUSE.WEB.ForYou.Upsell.StudentLink"),
                    message: void 0,
                    button: void 0,
                  };
                return D.includes(this.storefront)
                  ? {
                      ...a,
                      message: l("FUSE.WEB.ForYou.Upsell.Generic.Description"),
                      button: l("FUSE.WEB.ForYou.Upsell.Generic.CTA"),
                    }
                  : this.isIntroOffer
                    ? this.isFreeTrial
                      ? {
                          ...a,
                          message: l("AMWeb.ForYouUpsell.Description.PXM", { introPricingDuration: r, price: i }),
                          button: l("AMWeb.ForYouUpsell.CTA.Free"),
                        }
                      : {
                          ...a,
                          message: l("AMWeb.ForYouUpsell.Description.PXMY", { introPricingDuration: r, introPrice: u }),
                          button: l("AMWeb.ForYouUpsell.CTA.Paid"),
                        }
                    : {
                        ...a,
                        message: l("AMWeb.ForYouUpsell.Description.NonTrial", { price: i }),
                        button: l("AMWeb.ForYouUpsell.CTA.NonTrail"),
                      };
              };
            return this.isUserSubscribed
              ? this.needsOnboarding
                ? {
                    header: l("FUSE.ForYou.Upsell.DT.NonTrial.Header"),
                    learnMore: void 0,
                    studentLink: void 0,
                    message: l("FUSE.Upsell.Onboard.Description"),
                    button: l("FUSE.Upsell.Onboard.CTA"),
                  }
                : { header: void 0, learnMore: void 0, message: void 0, button: void 0 }
              : this.isWebClient
                ? s()
                : e();
          }),
          (this.basePriceString = void 0),
          (this.introPeriod = void 0),
          (this.isIntroOffer = void 0),
          (this.isFreeTrial = void 0),
          (this.introPrice = void 0),
          (this.isUserEligibleForTrial = void 0),
          (this.isUserEligibleForWinbackOffer = void 0),
          (this.isUserSubscribed = void 0),
          (this.isWebClient = !0),
          (this.storefront = void 0),
          (this.locale = void 0),
          (this.upsellData = void 0),
          (this.needsOnboarding = !0));
      }
      async componentWillLoad() {
        await x(this.el, "locales");
      }
      render() {
        const e = this.getUpsellData();
        return e
          ? n(
              k,
              { class: "cwc-upsell-personal" },
              n(
                "div",
                { class: "cwc-upsell-personal__content" },
                this.isWebClient &&
                  n(
                    "div",
                    { "aria-label": l("FUSE.AppleMusic"), class: "cwc-upsell-personal__logo" },
                    n("cwc-icon", {
                      name: "music-logo",
                      class: "cwc-upsell-personal__logo-vector",
                      role: "presentation",
                    }),
                  ),
                n("div", { class: "cwc-upsell-personal__head", "data-test": "upsell-personal-header" }, T(e.header)),
                n(
                  "div",
                  { class: "cwc-upsell-personal__artwork-container-outer" },
                  n(
                    "div",
                    { class: "cwc-upsell-personal__artwork-container-inner" },
                    n(
                      "picture",
                      { class: "cwc-upsell-personal__artwork" },
                      G.map((s) =>
                        n("source", {
                          key: `${s.fileName}.${s.fileExtension}`,
                          media: s.media,
                          srcSet: `${d(`upsells/listen-now/${s.fileName}.${s.fileExtension}`)} 1x, ${d(`upsells/listen-now/${s.fileName}@2x.${s.fileExtension}`)} 2x, ${d(`upsells/listen-now/${s.fileName}@3x.${s.fileExtension}`)} 3x`,
                          type: `image/${s.fileExtension}`,
                        }),
                      ),
                      n("img", { class: "cwc-upsell-personal__artwork-image", src: d("1x1.gif"), alt: "" }),
                    ),
                  ),
                ),
                n("div", { class: "cwc-upsell-personal__message", "data-test": "upsell-personal-message" }, e.message),
                e.button &&
                  n(
                    "cwc-button",
                    {
                      class: "cwc-upsell-personal__cta-button",
                      onClick: this.upsellCtaClick.emit,
                      "data-test": "upsell-personal-cta",
                    },
                    e.button,
                  ),
                e.learnMore &&
                  n(
                    "div",
                    { class: "cwc-upsell-personal__learn-more" },
                    n(
                      "cwc-link-with-chevron",
                      {
                        class: "cwc-upsell-personal__learn-more-link",
                        link: this.getLearnMoreUrl(),
                        target: "_blank",
                        "data-test": "upsell-personal-learn-more",
                      },
                      e.learnMore,
                    ),
                  ),
                e.studentLink &&
                  n(
                    "div",
                    { class: "cwc-upsell-personal__student" },
                    n(
                      "cwc-link-with-chevron",
                      {
                        class: "cwc-upsell-personal__student-link",
                        link: "javascript:;",
                        "data-test": "upsell-personal-student",
                        onClick: this.upsellStudentCtaClick.emit,
                      },
                      e.studentLink,
                    ),
                  ),
              ),
            )
          : null;
      }
      get el() {
        return this;
      }
      static get style() {
        return W;
      }
    },
    [
      0,
      "cwc-upsell-personal",
      {
        basePriceString: [1, "base-price-string"],
        introPeriod: [1, "intro-period"],
        isIntroOffer: [4, "is-intro-offer"],
        isFreeTrial: [4, "is-free-trial"],
        introPrice: [1, "intro-price"],
        isUserEligibleForTrial: [4, "is-user-eligible-for-trial"],
        isUserEligibleForWinbackOffer: [4, "is-user-eligible-for-winback-offer"],
        isUserSubscribed: [4, "is-user-subscribed"],
        isWebClient: [4, "is-web-client"],
        storefront: [1],
        locale: [1],
        upsellData: [1, "upsell-data"],
        needsOnboarding: [4, "needs-onboarding"],
      },
    ],
  );
function Y() {
  if (typeof customElements > "u") return;
  ["cwc-upsell-personal", "cwc-button", "cwc-icon", "cwc-link-with-chevron", "cwc-loading-spinner"].forEach((e) => {
    switch (e) {
      case "cwc-upsell-personal":
        customElements.get(e) || customElements.define(e, A);
        break;
      case "cwc-button":
        customElements.get(e) || N();
        break;
      case "cwc-icon":
        customElements.get(e) || P();
        break;
      case "cwc-link-with-chevron":
        customElements.get(e) || j();
        break;
      case "cwc-loading-spinner":
        customElements.get(e) || M();
        break;
    }
  });
}
const R = A,
  X = Y;
export { R as CwcUpsellPersonal, X as defineCustomElement };
