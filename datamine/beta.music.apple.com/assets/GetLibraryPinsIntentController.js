import { aZ as n, a_ as e } from "./main.js";
import { r as a, m as i } from "./libraryPinsAPI.js";
const y = {
  $intentKind: n.Name,
  async perform(s, t) {
    try {
      const r = await a(t);
      return { pins: await i(r, t), status: e.SUCCESS };
    } catch (r) {
      throw new Error(`an error occurred at GetLibraryPinsIntentController: ${r}`);
    }
  },
};
export { y as GetLibraryPinsIntentController };
