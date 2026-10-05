import { b2 as e, a_ as i } from "./main.js";
import { d as o, m as s } from "./libraryPinsAPI.js";
const d = {
  $intentKind: e.Name,
  async perform(t, n) {
    const { itemId: a } = t;
    try {
      const r = await o(a, t.action, n);
      return { pins: await s(r, n), status: i.SUCCESS };
    } catch (r) {
      throw new Error(`an error occurred at UpdateLibraryPinIntentController: ${r}`);
    }
  },
};
export { d as UpdateLibraryPinIntentController };
