const f = "https://cdn.apple-mapkit.com/mk/%version%/mapkit.core.js",
  r = "initMapKitLoader";
async function u(k) {
  const { version: b = "5.x.x", token: n, nonce: p, language: d, libraries: s, data: w } = k,
    m = f.replace("%version%", b);
  let e = document.head.querySelector(`[data-callback="${r}"]`);
  if (e) {
    if (
      ((m !== e.src || n !== e.dataset.token || d !== e.dataset.language || s?.join(",") !== e.dataset.libraries) &&
        console.warn("[MapKit Loader] load() is called with different parameters. Result will be inconsistent."),
      "mapkit" in window)
    ) {
      const i = window.mapkit;
      if (!e.dataset.libraries) return i;
      const t = new Set(e.dataset.libraries.split(",")),
        a = new Set(i.loadedLibraries);
      for (const o of t) a.has(o) && t.delete(o);
      if (t.size === 0) return i;
    }
  } else {
    if (
      ((e = document.createElement("script")),
      (e.async = !0),
      (e.crossOrigin = ""),
      (e.src = m),
      (e.dataset.callback = r),
      n && (e.dataset.token = n),
      p && (e.nonce = p),
      d && (e.dataset.language = d),
      s && (e.dataset.libraries = s.join(",")),
      w)
    )
      for (const [i, t] of Object.entries(w)) e.setAttribute(`data-${i}`, t);
    document.head.appendChild(e);
  }
  return new Promise((i, t) => {
    const a = window,
      o = () => {
        if ((e.removeEventListener("load", o), !window.mapkit)) {
          (delete a[r], t("[MapKit Loader] mapkit.core.js were loaded but `mapkit` object is not available."));
          return;
        }
        window.mapkit.addEventListener("load-error", c);
      },
      l = () => {
        (e.removeEventListener("error", l),
          delete a[r],
          t(new Error("[MapKit Loader] mapkit.core.js failed to load.")));
      },
      c = () => {
        (window.mapkit?.removeEventListener("load-error", c),
          delete a[r],
          t(new Error("[MapKit Loader] mapkit libraries failed to load.")));
      };
    (e.addEventListener("error", l, { once: !0 }), window.mapkit ? o() : e.addEventListener("load", o, { once: !0 }));
    const L = a[r];
    a[r] = () => {
      if (
        (e.removeEventListener("error", l),
        window.mapkit?.removeEventListener("load-error", c),
        delete a[r],
        !window.mapkit)
      ) {
        t("[MapKit Loader] Loader callback was called but `mapkit` object is not available.");
        return;
      }
      (i(window.mapkit), L?.call(window));
    };
  });
}
export { u as load };
