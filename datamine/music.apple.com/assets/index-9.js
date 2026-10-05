const k = "https://cdn.apple-mapkit.com/mk/%version%/mapkit.core.js",
  o = "initMapKitLoader";
async function g(d) {
  const { version: c = "5.x.x", token: r, nonce: a, language: l, libraries: p, data: f } = d,
    i = k.replace("%version%", c);
  let e = document.head.querySelector(`[data-callback="${o}"]`);
  if (e) {
    if (
      ((i !== e.src || r !== e.dataset.token || l !== e.dataset.language || p?.join(",") !== e.dataset.libraries) &&
        console.warn("[MapKit Loader] load() is called with different parameters. Result will be inconsistent."),
      "mapkit" in window)
    ) {
      const n = window.mapkit;
      if (!e.dataset.libraries) return n;
      const t = new Set(e.dataset.libraries.split(",")),
        s = new Set(n.loadedLibraries);
      for (const u of t) s.has(u) && t.delete(u);
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
      l && (e.dataset.language = l),
      p && (e.dataset.libraries = p.join(",")),
      f)
    )
      for (const [n, t] of Object.entries(f)) e.setAttribute(`data-${n}`, t);
    document.head.appendChild(e);
  }
  return new Promise((n, t) => {
    const s = window,
      u = () => {
        if ((e.removeEventListener("load", u), !window.mapkit)) {
          (delete s[o], t("[MapKit Loader] mapkit.core.js were loaded but `mapkit` object is not available."));
          return;
        }
        window.mapkit.addEventListener("load-error", w);
      },
      m = () => {
        (e.removeEventListener("error", m),
          delete s[o],
          t(new Error("[MapKit Loader] mapkit.core.js failed to load.")));
      },
      w = () => {
        (window.mapkit?.removeEventListener("load-error", w),
          delete s[o],
          t(new Error("[MapKit Loader] mapkit libraries failed to load.")));
      };
    (e.addEventListener("error", m, { once: !0 }), window.mapkit ? u() : e.addEventListener("load", u, { once: !0 }));
    const L = s[o];
    s[o] = () => {
      if (
        (e.removeEventListener("error", m),
        window.mapkit?.removeEventListener("load-error", w),
        delete s[o],
        !window.mapkit)
      ) {
        t("[MapKit Loader] Loader callback was called but `mapkit` object is not available.");
        return;
      }
      (n(window.mapkit), L?.call(window));
    };
  });
}
function b(d) {
  return d
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
function v({ version: d = "5.x.x", nonce: c, token: r, language: a, libraries: l, data: p }) {
  const i = { src: k.replace("%version%", d), crossOrigin: "", async: !0, "data-callback": o };
  if (
    (c && (i.nonce = c),
    r && (i["data-token"] = r),
    a && (i["data-language"] = a),
    l && (i["data-libraries"] = l.join(",")),
    p)
  )
    for (const [e, n] of Object.entries(p)) i[`data-${e}`] = n;
  return i;
}
function E(d) {
  const c = v(d);
  return `<script ${Object.entries(c)
    .map(([r, a]) => (a && typeof a == "string" ? `${b(r)}="${b(a)}"` : b(r)))
    .join(" ")}><\/script>`;
}
export { g as load, v as renderHTMLAttributes, E as renderToHTMLString };
