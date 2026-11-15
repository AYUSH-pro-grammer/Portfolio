import type { Guide } from "./types";
import { motorDriverGuide } from "./motorDriver";
import { poromodoGuide } from "./poromodo";

export const guides: Record<string, Guide> = {
  "motor-driver": motorDriverGuide,
  poromodo: poromodoGuide,
};
