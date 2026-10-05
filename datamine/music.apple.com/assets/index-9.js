const v = "https://cdn.apple-mapkit.com/mk/%version%/mapkit.core.js",
  o = "initMapKitLoader";
async function E(c) {
  const { version: l = "5.x.x", token: r, nonce: a, language: p, libraries: s, data: m } = c,
    i = v.replace("%version%", l);
  let e = document.head.querySelector(`[data-callback="${o}"]`);
  if (e) {
    if (
      ((i !== e.src ||
        r !== e.dataset.token ||
        p !== e.dataset.language ||
        (s == null ? void 0 : s.join(",")) !== e.dataset.libraries) &&
        console.warn("[MapKit Loader] load() is called with different parameters. Result will be inconsistent."),
      "mapkit" in window)
    ) {
      const n = window.mapkit;
      if (!e.dataset.libraries) return n;
      const t = new Set(e.dataset.libraries.split(",")),
        d = new Set(n.loadedLibraries);
      for (const u of t) d.has(u) && t.delete(u);
      if (t.size === 0) return n;
    }
  } else {
    if (
      ((e = document.createElement("script")),
      (e.async = !0),
      (e.crossOrigin = ""),
      (e.src = i),
      (e.dataset.callback = o),
      r && (e.dataset.token = r),
      a && (e.nonce = a),
      p && (e.dataset.language = p),
      s && (e.dataset.libraries = s.join(",")),
      m)
    )
      for (const [n, t] of Object.entries(m)) e.setAttribute(`data-${n}`, t);
    document.head.appendChild(e);
  }
  return new Promise((n, t) => {
    const d = window,
      u = () => {
        if ((e.removeEventListener("load", u), !window.mapkit)) {
          (delete d[o], t("[MapKit Loader] mapkit.core.js were loaded but `mapkit` object is not available."));
          return;
        }
        window.mapkit.addEventListener("load-error", b);
      },
      w = () => {
        (e.removeEventListener("error", w),
          delete d[o],
          t(new Error("[MapKit Loader] mapkit.core.js failed to load.")));
      },
      b = () => {
        var f;
        ((f = window.mapkit) == null || f.removeEventListener("load-error", b),
          delete d[o],
          t(new Error("[MapKit Loader] mapkit libraries failed to load.")));
      };
    (e.addEventListener("error", w, { once: !0 }), window.mapkit ? u() : e.addEventListener("load", u, { once: !0 }));
    const k = d[o];
    d[o] = () => {
      var f;
      if (
        (e.removeEventListener("error", w),
        (f = window.mapkit) == null || f.removeEventListener("load-error", b),
        delete d[o],
        !window.mapkit)
      ) {
        t("[MapKit Loader] Loader callback was called but `mapkit` object is not available.");
        return;
      }
      (n(window.mapkit), k == null || k.call(window));
    };
  });
}
function L(c) {
  return c
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
function g({ version: c = "5.x.x", nonce: l, token: r, language: a, libraries: p, data: s }) {
  const i = { src: v.replace("%version%", c), crossOrigin: "", async: !0, "data-callback": o };
  if (
    (l && (i.nonce = l),
    r && (i["data-token"] = r),
    a && (i["data-language"] = a),
    p && (i["data-libraries"] = p.join(",")),
    s)
  )
    for (const [e, n] of Object.entries(s)) i[`data-${e}`] = n;
  return i;
}
function M(c) {
  const l = g(c);
  return `<script ${Object.entries(l)
    .map(([r, a]) => (a && typeof a == "string" ? `${L(r)}="${L(a)}"` : L(r)))
    .join(" ")}><\/script>`;
}
export { E as load, g as renderHTMLAttributes, M as renderToHTMLString };
