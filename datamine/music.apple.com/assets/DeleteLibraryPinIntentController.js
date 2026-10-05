import { b0 as i, a_ as a } from "./main.js";
import { b as o, m as s } from "./libraryPinsAPI.js";
const y = {
  $intentKind: i.Name,
  async perform(n, t) {
    const { itemId: e } = n;
    try {
      const r = await o(e, t);
      return { pins: await s(r, t), status: a.SUCCESS };
    } catch (r) {
      throw new Error(`an error occurred at AddLibraryPinIntentController: ${r}`);
    }
  },
};
export { y as DeleteLibraryPinIntentController };
