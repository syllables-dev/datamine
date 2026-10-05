import { a$ as o, a_ as s } from "./main.js";
import { a as d, m as a, r as m } from "./libraryPinsAPI.js";
const P = {
  $intentKind: o.Name,
  async perform(i, r) {
    const { itemId: e } = i;
    try {
      const t = await d(e, r);
      return { pins: await a(t, r), status: s.SUCCESS };
    } catch (t) {
      if (t?.userInfo?.status == "400") {
        const n = await m(r);
        return { pins: await a(n, r), status: s.MAX_PINS };
      }
      throw new Error(`an error occurred at AddLibraryPinIntentController: ${t}`);
    }
  },
};
export { P as AddLibraryPinIntentController };
