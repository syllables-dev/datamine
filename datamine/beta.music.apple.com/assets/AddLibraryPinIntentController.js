import { a$ as d, a_ as a } from "./main.js";
import { a as m, m as i, r as u } from "./libraryPinsAPI.js";
const p = {
  $intentKind: d.Name,
  async perform(e, t) {
    var n;
    const { itemId: o } = e;
    try {
      const r = await m(o, t);
      return { pins: await i(r, t), status: a.SUCCESS };
    } catch (r) {
      if (((n = r == null ? void 0 : r.userInfo) == null ? void 0 : n.status) == "400") {
        const s = await u(t);
        return { pins: await i(s, t), status: a.MAX_PINS };
      }
      throw new Error(`an error occurred at AddLibraryPinIntentController: ${r}`);
    }
  },
};
export { p as AddLibraryPinIntentController };
