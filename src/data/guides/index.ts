import type { Guide } from "./types";
import { motorDriverGuide } from "./motorDriver";
import { poromodoGuide } from "./poromodo";
import { algoverseGuide } from "./algoverse";
import { gemmoGuide } from "./gemmo";
import { hundredJsGuide } from "./hundredJs";

export const guides: Record<string, Guide> = {
  "motor-driver": motorDriverGuide,
  poromodo: poromodoGuide,
  algoverse: algoverseGuide,
  gemmo: gemmoGuide,
  "100js": hundredJsGuide,
};
