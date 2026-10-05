import { p as b, H as d, c as g, h as i, d as m } from "./index-5.js";
import { d as p, a as h, b as f, g as o, t as s, i as C } from "./cwc-icon2.js";
const _ = "M100",
  T = {
    M75: ["bh", "by", "td", "eg", "jo", "xk", "lb", "ly", "mv", "np", "om", "qa", "rw", "sa", "tn", "ae", "uz", "ye"],
    GENERIC: ["cn"],
    UNSUPPORTED: ["af", "al", "bn", "bf", "ir", "pk", "pw", "st"],
  },
  E = (l) => {
    var e, n;
    return (n = (e = Object.entries(T).find(([, r]) => r.includes(l))) === null || e === void 0 ? void 0 : e[0]) !==
      null && n !== void 0
      ? n
      : _;
  },
  U =
    ".cwc-upsell-banner{position:relative;width:100%;cursor:pointer;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-line-pack:center;align-content:center;-ms-flex-align:center;align-items:center;padding:12px 30px}.cwc-upsell-banner__head{font-weight:600;font-size:18px;line-height:1.23}.cwc-upsell-banner__subhead{margin-top:8px;color:hsla(0,0%,100%,.8);font-size:14px}@media only screen and (max-width:999px){.cwc-upsell-banner__head{font-size:14px;line-height:1.28}.cwc-upsell-banner__subhead{font-size:11px;font-weight:500}}.cwc-upsell-banner__cta-button .cwc-button{letter-spacing:0;border-radius:4px;height:32px;min-width:125px;font-weight:600;font-size:13px;font-family:unset;background:#fff;color:#000;-webkit-box-shadow:0 0 20px rgba(0,0,0,.06);box-shadow:0 0 20px rgba(0,0,0,.06)}.cwc-upsell-banner__close-button{display:none}.cwc-upsell-banner__branding{height:20px;margin-right:20px}.cwc-upsell-banner__text--with-branding{padding-left:20px;border-left:1px solid hsla(0,0%,100%,.3)}.cwc-upsell-banner__logo-vector{max-width:100%;height:20px;fill:#fff}.cwc-upsell-banner__close-icon{width:100%}";
let u = !1;
const k = b(
  class extends d {
    constructor() {
      (super(),
        this.__registerHost(),
        (this.cwcCtaClick = g(this, "cwcCtaClick", 7)),
        (this.handleCloseClick = (e) => {
          ((this.isCollapsed = !0), (u = !0), e.stopPropagation());
        }),
        (this.headerText = void 0),
        (this.subheaderText = void 0),
        (this.ctaText = void 0),
        (this.brandingIcon = void 0),
        (this.brandingAria = void 0),
        (this.hasCloseButton = !1),
        (this.isCollapsed = u));
    }
    render() {
      return i(
        m,
        {
          class: o(["cwc-upsell-banner", { "cwc-upsell-banner--collapsed": this.isCollapsed }]),
          onClick: this.cwcCtaClick.emit,
          "data-test": "upsell-banner",
        },
        this.hasCloseButton &&
          !this.isCollapsed &&
          i(
            "button",
            {
              "data-test": "close-button",
              class: "cwc-upsell-banner__close-button",
              "aria-label": s("Close"),
              onClick: this.handleCloseClick,
            },
            i("cwc-icon", {
              name: "upsell-mobile-banner-close",
              class: "cwc-upsell-banner__close-icon",
              "aria-hidden": "true",
            }),
          ),
        this.brandingIcon &&
          i(
            "div",
            { class: "cwc-upsell-banner__branding", "aria-label": this.brandingAria },
            i("cwc-icon", {
              name: "music-logo",
              class: "cwc-upsell-banner__logo-vector",
              role: "presentation",
              "data-test": "branding-logo",
            }),
          ),
        (this.headerText || this.subheaderText) &&
          i(
            "div",
            {
              class: o(["cwc-upsell-banner__text", { "cwc-upsell-banner__text--with-branding": !!this.brandingIcon }]),
            },
            this.headerText &&
              i("div", { class: "cwc-upsell-banner__head", "data-test": "header-text" }, this.headerText),
            this.subheaderText &&
              i("div", { class: "cwc-upsell-banner__subhead", "data-test": "subheader-text" }, this.subheaderText),
          ),
        this.ctaText &&
          i(
            "cwc-button",
            { class: "cwc-upsell-banner__cta-button", color: "secondary", "data-test": "cta-button" },
            this.ctaText,
          ),
      );
    }
    static get style() {
      return U;
    }
  },
  [
    0,
    "cwc-upsell-banner",
    {
      headerText: [1, "header-text"],
      subheaderText: [1, "subheader-text"],
      ctaText: [1, "cta-text"],
      brandingIcon: [1, "branding-icon"],
      brandingAria: [1, "branding-aria"],
      hasCloseButton: [4, "has-close-button"],
      isCollapsed: [32],
    },
  ],
);
function S() {
  if (typeof customElements > "u") return;
  ["cwc-upsell-banner", "cwc-button", "cwc-icon", "cwc-loading-spinner"].forEach((e) => {
    switch (e) {
      case "cwc-upsell-banner":
        customElements.get(e) || customElements.define(e, k);
        break;
      case "cwc-button":
        customElements.get(e) || f();
        break;
      case "cwc-icon":
        customElements.get(e) || h();
        break;
      case "cwc-loading-spinner":
        customElements.get(e) || p();
        break;
    }
  });
}
const B =
    ".cwc-upsell-banner{width:100vw;background-color:var(--musicBrandBG);color:#fff;-webkit-box-shadow:0 1px 0 rgba(0,0,0,.05),0 1px 3px rgba(0,0,0,.07);box-shadow:0 1px 0 rgba(0,0,0,.05),0 1px 3px rgba(0,0,0,.07)}@media only screen and (min-width:484px){.cwc-upsell-banner__text{-ms-flex:1;flex:1;margin-right:16px}.cwc-upsell-banner__head{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:100%}}@media only screen and (max-width:483px){.cwc-upsell-banner__text{width:100%;-ms-flex-pack:center;justify-content:center;text-align:center}.cwc-upsell-banner--collapsed .cwc-upsell-banner__text{padding-top:7px;padding-bottom:7px}.cwc-upsell-banner__cta-button{display:none}.cwc-upsell-banner__close-button{position:absolute;z-index:1;top:0;-webkit-box-sizing:content-box;box-sizing:content-box;width:10px;height:10px;padding:10px;background:none;border:none;outline:none;right:0}.cwc-upsell-banner .cwc-upsell-banner__close-button{display:block}.cwc-upsell-banner--collapsed .cwc-upsell-banner__close-button,.cwc-upsell-banner--collapsed .cwc-upsell-banner__subhead{display:none}}",
  w = b(
    class extends d {
      constructor() {
        (super(),
          this.__registerHost(),
          (this.getHeaderText = () => {
            const {
                isClassical: e,
                isIntroOffer: n,
                isFreeTrial: r,
                introPeriod: t,
                introPrice: c,
                storefront: x,
              } = this,
              a = E(x);
            if (e)
              return n && t && r
                ? s("CommerceUI.CWC.Music.Classical.UpsellBanner.Subscribe.Header.FreeTrial.GENERIC")
                : s("CommerceUI.CWC.Music.Classical.UpsellBanner.Subscribe.Header.NonFreeTrial.GENERIC");
            if (n && t) {
              if (r)
                return s(`CommerceUI.CWC.Music.UpsellBanner.Subscribe.Header.FreeTrial.${a}`, {
                  introPricingDuration: t,
                  introPrice: c,
                });
              if (c)
                return s(`CommerceUI.CWC.Music.UpsellBanner.Subscribe.Header.PaidTrial.${a}`, {
                  introPricingDuration: t,
                  introPrice: c,
                });
            }
            return s(`CommerceUI.CWC.Music.UpsellBanner.Subscribe.Header.NonTrial.${a}`);
          }),
          (this.getSubHeaderText = () => {
            const { introPeriod: e, basePriceString: n, isIntroOffer: r, isFreeTrial: t, introPrice: c } = this;
            if (!n) return null;
            if (this.isClassical)
              return t
                ? s("CommerceUI.CWC.Music.Classical.UpsellBanner.Subscribe.Subhead.Free", {
                    introPricingDuration: e,
                    price: n,
                  })
                : s("CommerceUI.CWC.Music.Classical.UpsellBanner.Subscribe.Subhead.NotFree", {
                    introPricingDuration: e,
                    price: n,
                  });
            if (!r) return s("AMWeb.UpsellBanner.Subscribe.Subhead.NonTrial", { introPricingDuration: e, price: n });
            if (e) {
              if (t) return s("AMWeb.UpsellBanner.Subscribe.Subhead.Free", { introPricingDuration: e, price: n });
              if (c)
                return s("AMWeb.UpsellBanner.Subscribe.Subhead.Paid", {
                  introPricingDuration: e,
                  introPrice: c,
                  price: n,
                });
            }
            return s("AMWeb.UpsellBanner.Subscribe.Subhead.NonTrial", { price: n });
          }),
          (this.getCTAText = () => {
            const { isClassical: e, isIntroOffer: n, isFreeTrial: r } = this,
              t = e ? "CommerceUI.CWC.Music.Classical" : "AMWeb";
            if (n) {
              if (r) return s(`${t}.UpsellBanner.Subscribe.Free`);
              if (!r) return s(`${t}.UpsellBanner.Subscribe.Paid`);
            }
            return s("AMWeb.UpsellBanner.Subscribe.NonTrial");
          }),
          (this.storefront = void 0),
          (this.isEligibleForTrial = void 0),
          (this.isClassical = void 0),
          (this.isEligibleForWinbackOffer = void 0),
          (this.isIntroOffer = void 0),
          (this.isFreeTrial = void 0),
          (this.basePriceString = void 0),
          (this.introPeriod = void 0),
          (this.introPrice = void 0));
      }
      async componentWillLoad() {
        await C(this.el, "locales");
      }
      render() {
        return i("cwc-upsell-banner", {
          headerText: this.getHeaderText(),
          subheaderText: this.getSubHeaderText(),
          ctaText: this.getCTAText(),
          hasCloseButton: !0,
        });
      }
      get el() {
        return this;
      }
      static get style() {
        return B;
      }
    },
    [
      0,
      "cwc-music-upsell-banner-web",
      {
        storefront: [1],
        isEligibleForTrial: [4, "is-eligible-for-trial"],
        isClassical: [4, "is-classical"],
        isEligibleForWinbackOffer: [4, "is-eligible-for-winback-offer"],
        isIntroOffer: [4, "is-intro-offer"],
        isFreeTrial: [4, "is-free-trial"],
        basePriceString: [1, "base-price-string"],
        introPeriod: [1, "intro-period"],
        introPrice: [1, "intro-price"],
      },
    ],
  );
function y() {
  if (typeof customElements > "u") return;
  ["cwc-music-upsell-banner-web", "cwc-button", "cwc-icon", "cwc-loading-spinner", "cwc-upsell-banner"].forEach((e) => {
    switch (e) {
      case "cwc-music-upsell-banner-web":
        customElements.get(e) || customElements.define(e, w);
        break;
      case "cwc-button":
        customElements.get(e) || f();
        break;
      case "cwc-icon":
        customElements.get(e) || h();
        break;
      case "cwc-loading-spinner":
        customElements.get(e) || p();
        break;
      case "cwc-upsell-banner":
        customElements.get(e) || S();
        break;
    }
  });
}
const v = w,
  F = y;
export { v as CwcMusicUpsellBannerWeb, F as defineCustomElement };
