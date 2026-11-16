import type { Guide } from "./types";
import { motorDriverGuide } from "./motorDriver";
import { poromodoGuide } from "./poromodo";
import { algoverseGuide } from "./algoverse";
import { gemmoGuide } from "./gemmo";
import { hundredJsGuide } from "./hundredJs";
import { gd32Guide, usbHubGuide, stmFlightGuide } from "./journalsA";
import { keyboardV2Guide, n20Guide, stmDevboardGuide, loraGuide, esp32DevboardGuide } from "./journalsB";
import {
  selfBalancingGuide,
  rcCarBrushlessGuide,
  splitKeyboardGuide,
  hermesGuide,
  hackpadGuide,
  keyboardGuide,
  devboardGuide,
} from "./journalsC";
import {
  rcCameraCarGuide,
  roboDogGuide,
  pathfinderGuide,
  esp32FlightGuide,
  laptopStandGuide,
  spotifyDisplayGuide,
  blinkyGuide,
} from "./journalsD";

export const guides: Record<string, Guide> = {
  "motor-driver": motorDriverGuide,
  poromodo: poromodoGuide,
  algoverse: algoverseGuide,
  gemmo: gemmoGuide,
  "100js": hundredJsGuide,
  "gd32-devboard": gd32Guide,
  "usb-hub": usbHubGuide,
  "stm-flight-controller": stmFlightGuide,
  "keyboard-v2": keyboardV2Guide,
  "n20-rc-car": n20Guide,
  "stm-devboard": stmDevboardGuide,
  lora: loraGuide,
  "esp32-devboard": esp32DevboardGuide,
  "self-balancing-bot": selfBalancingGuide,
  "rc-car-brushless": rcCarBrushlessGuide,
  "split-keyboard": splitKeyboardGuide,
  hermes: hermesGuide,
  hackpad: hackpadGuide,
  keyboard: keyboardGuide,
  devboard: devboardGuide,
  "rc-camera-car": rcCameraCarGuide,
  "robo-dog": roboDogGuide,
  pathfinder: pathfinderGuide,
  "esp32-flight-controller": esp32FlightGuide,
  "laptop-stand": laptopStandGuide,
  "spotify-display": spotifyDisplayGuide,
  "blinky-board": blinkyGuide,
};
