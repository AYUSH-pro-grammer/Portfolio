// Single source of truth for every project shown on the portfolio and the blog.
// Order matters: projects appear in this order (featured first, best first).

import keyboard from "../assets/projectImage/keyboard.webp";
import devboard from "../assets/projectImage/devboard.webp";
import stmDevboard from "../assets/projectImage/stm-devboard.webp";
import esp32Devboard from "../assets/projectImage/esp32-devboard.webp";
import lora from "../assets/projectImage/lora.webp";
import cleanable from "../assets/projectImage/cleanable.webp";
import ninjaGame from "../assets/projectImage/ninja-the-game.webp";
import imgA from "../assets/projectImage/imgA.webp";
import imgB from "../assets/projectImage/imgB.webp";
import drone from "../assets/projectImage/drone.webp";
import splitkeyboard from "../assets/projectImage/splitkeyboard.webp";
import keycaps from "../assets/projectImage/keycaps.webp";
import blinkyboard from "../assets/projectImage/blinkyboard.webp";
import hermes from "../assets/projectImage/hermes.webp";
import pathfinder from "../assets/projectImage/pathfinder.webp";
import rccar from "../assets/projectImage/rccar.webp";
import robodog from "../assets/projectImage/robodog.webp";
import hackpad from "../assets/projectImage/hackpad.webp";
import flightcontroller from "../assets/projectImage/flightcontroller.webp";

export type Category = "hardware" | "software" | "game-dev";
export type Status = "completed" | "in-progress" | "graveyard";

export type Media = { src: string; alt: string };

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  category: Category;
  status: Status;
  featured: boolean;
  cover?: string;
  github?: string;
  demo?: string;
  /** Has a full build guide (written from the build journal). */
  hasGuide?: boolean;
  /** Guide exists but isn't finished yet. */
  guideDraft?: boolean;
  /** Has its own page on the blog. Software sites link straight to the live site instead. */
  hasPage?: boolean;
  /** An older standalone blog post that replaces the generated page. */
  postPath?: string;
  tech?: string[];
  about?: string[];
  highlights?: string[];
  gallery?: Media[];
  video?: string;
};

const pic = (slug: string, file: string, alt: string): Media => ({
  src: `/blog/${slug}/${file}.webp`,
  alt,
});
const GH = "https://github.com/AYUSH-pro-grammer/";

export const projects: Project[] = [
  // ───────── Featured ─────────
  {
    slug: "self-balancing-bot",
    title: "Self-Balancing Bot",
    tagline: "A two-wheeled robot that keeps itself upright with an IMU and PID control.",
    category: "hardware",
    status: "completed",
    featured: true,
    hasPage: true,
    cover: "/blog/self-balancing-bot/balancing.webp",
    github: GH + "self-balancing-bot",
    tech: ["ESP32", "MPU-9250", "PID", "BTS7960", "Fusion 360"],
    about: [
      "A two-wheeled robot that stays upright on its own. An ESP32 reads acceleration and angular velocity from an MPU-9250 IMU, works out how far the robot is tilting, and drives both DC motors to push it back to balance.",
      "It behaves like an inverted pendulum: the robot tilts, the IMU senses it, a complementary filter turns the raw readings into an angle, a PID loop calculates the correction, and the motors move the wheels under the robot.",
      "I built it because it combines everything I like — mechanical design, electronics, sensors, motor control and code — and both the physical build and the software visibly change how well it balances.",
    ],
    highlights: [
      "ESP32 DOIT DevKit V1 reading an MPU-9250 over I²C (address 0x68)",
      "Complementary filter for the tilt angle, PID control for the motors",
      "Two BTS7960 / IBT-2 drivers powering 12 V gear motors",
      "3× 18650 cells, with a 12 V → 5 V buck for the logic",
      "Gyro calibration at start-up, and motors cut out if it tilts too far",
      "Custom 3D-printed chassis designed in Fusion 360",
    ],
    video: "/blog/self-balancing-bot/working.mp4",
    gallery: [
      pic("self-balancing-bot", "balancing", "The robot balancing"),
      pic("self-balancing-bot", "standing", "The robot standing"),
      pic("self-balancing-bot", "cad", "CAD model of the chassis"),
      pic("self-balancing-bot", "circuit2", "Wiring diagram"),
    ],
  },
  {
    slug: "motor-driver",
    title: "STM32 Four-Motor Driver",
    tagline: "A 4-layer board driving four DC motors with eight BTS7960B half-bridges.",
    category: "hardware",
    status: "in-progress",
    featured: true,
    hasPage: true,
    hasGuide: true,
    cover: "/blog/motor-driver/front-board-preview.webp",
    github: GH + "-motor-driver",
    tech: ["STM32G431", "BTS7960B", "KiCad", "4-layer PCB", "Arduino"],
    about: [
      "A motor driver board with a bare STM32G431CBU6 controlling eight BTS7960B half-bridges — two per motor — so it can drive four brushed DC motors in both directions.",
      "For each channel the STM32 gives one PWM signal and two direction signals. SN74ACT08 AND gates combine them so the PWM only reaches the half-bridge on the side that matches the direction.",
      "I designed the schematic and the 4-layer PCB in KiCad, put artwork on both sides and wrote a small test sketch. It's designed and quoted, but not assembled yet.",
    ],
    highlights: [
      "Four motor channels, two BTS7960B half-bridges each",
      "Bare STM32G431CBU6 in a QFN-48 package",
      "4-layer PCB, about 162.5 × 57.4 mm, 1.6 mm thick",
      "XT60 battery input with TVS protection, separate 5 V logic input",
      "Encoder, UART, I²C and CAN-module headers",
      "Parts budget of $88.28 including five PCBs",
    ],
    gallery: [
      pic("motor-driver", "front-board-preview", "Front of the board in 3D"),
      pic("motor-driver", "angled-board-preview", "Angled view of the drivers and connectors"),
      pic("motor-driver", "routed-pcb", "Routed PCB with front artwork"),
      pic("motor-driver", "back-board-artwork", "Back artwork"),
      pic("motor-driver", "full-schematic", "Full schematic"),
    ],
  },
  {
    slug: "poromodo",
    title: "Poromodo Timer",
    tagline: "A battery-powered Pomodoro timer whose screen rotates with how you hold it.",
    category: "hardware",
    status: "in-progress",
    featured: true,
    hasPage: true,
    hasGuide: true,
    cover: "/blog/poromodo/06_cad-enclosure-with-oled.webp",
    github: GH + "poromodo",
    tech: ["XIAO ESP32-C3", "MPU-6050", "SSD1306 OLED", "KiCad", "Fusion 360"],
    about: [
      "A small battery-powered Pomodoro timer on a custom PCB, with a 3D-printed case holding the board, an OLED and a motion sensor.",
      "A 2S Li-ion pack goes through a power switch and P-MOSFET reverse-polarity protection into an AP63205 5 V buck converter. A Schottky diode feeds that 5 V to the XIAO ESP32-C3, which makes its own 3.3 V for the OLED and the GY-521 (MPU-6050) module.",
      "The MPU-6050 tells the timer which way up it is, so the display rotates to match — and you can flip it face-down to start a focus session.",
    ],
    highlights: [
      "Seeed XIAO ESP32-C3 with Wi-Fi and BLE for future features",
      "AP63205 buck converter and AO3401A reverse-polarity protection",
      "0.96\" SSD1306 OLED and GY-521 sharing one I²C bus",
      "Battery voltage sensing through a 100k / 33k divider",
      "Two buttons, a status LED and a transistor-driven buzzer",
      "Double-sided 36 × 82 mm PCB and a two-part printed case",
      "Nine step-by-step bring-up sketches, ending in the full timer",
    ],
    gallery: [
      pic("poromodo", "06_cad-enclosure-with-oled", "Enclosure with the OLED"),
      pic("poromodo", "05_cad-exploded-assembly", "Exploded enclosure"),
      pic("poromodo", "03_pcb-3d-front", "PCB front in 3D"),
      pic("poromodo", "04_pcb-3d-back", "PCB back in 3D"),
      pic("poromodo", "02_pcb-layout", "PCB layout"),
      pic("poromodo", "01_schematic", "Schematic"),
      pic("poromodo", "07_jlcpcb-cart-quote", "JLCPCB quote"),
    ],
  },
  {
    slug: "robo-dog",
    title: "Robo Dog",
    tagline: "An 8-servo quadruped robot with a 3D-printed frame and an ESP32 brain.",
    category: "hardware",
    status: "completed",
    featured: true,
    hasPage: true,
    cover: robodog,
    github: GH + "robo-dog-esp32",
    tech: ["ESP32", "PCA9685", "Servos", "Fusion 360"],
    about: [
      "RoboDog is a low-cost four-legged robot built from common parts and 3D-printed pieces. Eight high-torque servos (two per leg) move the legs, driven by a PCA9685 servo driver and controlled by an ESP32.",
      "I wanted it to be simple enough for students and hobbyists to rebuild, while still covering the interesting parts of robotics: servo control, walking gaits, power distribution, CAD and assembly.",
    ],
    highlights: [
      "8 degrees of freedom — two servos per leg",
      "ESP32 control with a PCA9685 servo driver",
      "3D-printed frame, Fusion 360 source files included",
      "Remote-controlled",
      "Estimated build cost: $236",
    ],
    gallery: [
      pic("robo-dog", "image1", "Robo Dog"),
      pic("robo-dog", "image2", "Robo Dog from another angle"),
    ],
  },
  {
    slug: "lora",
    title: "LoRa Board",
    tagline: "An RP2040 + SX1262 radio board, built to learn how long-range radios really work.",
    category: "hardware",
    status: "in-progress",
    featured: true,
    hasPage: true,
    cover: lora,
    github: GH + "lora",
    tech: ["RP2040", "SX1262", "KiCad", "RF"],
    about: [
      "A custom long-range wireless board I made to understand how radios actually work instead of just reading about them. It was also a lot of KiCad practice — and practice dealing with things not going to plan.",
      "USB-C brings in 5 V, and an AP2112K-3.3 LDO makes the 3.3 V rail. The dual-core RP2040 runs from a W25Q16JV SPI flash and talks to the SX1262 LoRa transceiver over SPI. A PE4259 RF switch and a Johanson balun condition the signal for the antenna.",
    ],
    highlights: [
      "RP2040 microcontroller with W25Q16JV flash",
      "SX1262 sub-GHz LoRa transceiver",
      "PE4259 RF switch and balun in the antenna path",
      "53 components, including two Cherry MX buttons",
      "OLED display test firmware",
    ],
    gallery: [
      pic("lora", "pcb_3d_front", "LoRa board front in 3D"),
      pic("lora", "pcb_3d_back", "LoRa board back in 3D"),
      pic("lora", "pcb_routing", "PCB routing"),
      pic("lora", "schamtic", "Schematic"),
    ],
  },
  {
    slug: "gd32-devboard",
    title: "GD32F450 Devboard",
    tagline: "A Cortex-M4 development board with SDRAM, 16 MB flash and microSD.",
    category: "hardware",
    status: "in-progress",
    featured: true,
    hasPage: true,
    cover: "/blog/gd32-devboard/3d_front.webp",
    github: GH + "GD32F450-devboard",
    tech: ["GD32F450ZGT6", "SDRAM", "KiCad", "4-layer PCB"],
    about: [
      "A complete development board designed around the GD32F450ZGT6, an ARM Cortex-M4 microcontroller in a 144-pin package. It adds external SDRAM, a W25Q128JVE SPI flash, a microSD slot, USB-C, FPC connectors and GPIO expansion.",
      "I wanted to go beyond using dev boards and actually make one: take a datasheet and an idea all the way through schematic, part selection, 4-layer layout and manufacturing files.",
    ],
    highlights: [
      "GD32F450ZGT6 Cortex-M4 (LQFP-144)",
      "External SDRAM and 16 MB W25Q128JVE flash",
      "microSD storage, USB-C and FPC connectors",
      "4-layer routing, Gerbers and 3D model included",
      "Starter firmware with a board config header",
    ],
    gallery: [
      pic("gd32-devboard", "3d_front", "Board front in 3D"),
      pic("gd32-devboard", "3d_back", "Board back in 3D"),
      pic("gd32-devboard", "pcb_routing", "PCB routing"),
      pic("gd32-devboard", "schamtic", "Schematic"),
    ],
  },
  {
    slug: "keyboard",
    title: "Custom Keyboard",
    tagline: "My first custom mechanical keyboard PCB, designed end to end in KiCad.",
    category: "hardware",
    status: "completed",
    featured: true,
    hasPage: true,
    cover: keyboard,
    github: GH + "keyboard",
    tech: ["KiCad", "Mechanical keyboard", "Firmware"],
    about: [
      "A custom mechanical keyboard PCB. Instead of building from someone else's design, I wanted to go through every step myself: schematic, layout, part selection, 3D renders, firmware and getting it ready for manufacturing.",
      "Going through the whole cycle gave me hands-on experience in both the hardware and the software side, and left me with a design I can keep improving.",
    ],
    highlights: [
      "Custom keyboard PCB designed in KiCad",
      "3D renders of the board and case",
      "Firmware included",
      "Gerbers ready for manufacturing",
      "Hot-swap build, about $144 in parts",
    ],
    gallery: [
      pic("keyboard", "3d-model-1", "Keyboard 3D model"),
      pic("keyboard", "3d-model-2", "Keyboard 3D model, second view"),
      pic("keyboard", "pcb-3d-front", "PCB front in 3D"),
      pic("keyboard", "pcb", "PCB layout"),
    ],
  },
  {
    slug: "cleanable",
    title: "Cleanable",
    tagline: "My first Godot game: a gravity-flipping platformer across seven floors.",
    category: "game-dev",
    status: "completed",
    featured: true,
    hasPage: true,
    cover: cleanable,
    github: GH + "cleanable-thegame",
    demo: "https://ayushpro1428.itch.io/cleanable",
    tech: ["Godot", "GDScript"],
    about: [
      "A 2D platformer and my first Godot game. You guide a hero through a building, seven floors connected into one big map, while enemies, traps and obstacles try to stop you. The main idea: keep moving forward — enemies will follow you.",
      "Instead of focusing on one mechanic, I used it to explore as much of Godot as I could: scenes, the player, enemies, collisions, animations, the camera, a health system, menus and a game-over screen.",
    ],
    highlights: [
      "Arrow keys to move, Space to reverse gravity",
      "Three playable characters, each with idle and run animations",
      "Seven floors joined into one large map",
      "Enemies, doors and hazards",
      "Home screen with character select and a \"What is this?\" screen",
    ],
    gallery: [
      pic("cleanable", "home", "Home screen"),
      pic("cleanable", "home1", "Character select"),
    ],
  },
  {
    slug: "ninja-the-game",
    title: "Ninja – The Game",
    tagline: "A 2D ninja platformer with double jump, dash and throwing stars.",
    category: "game-dev",
    status: "completed",
    featured: true,
    hasPage: true,
    cover: ninjaGame,
    github: GH + "ninja-the-game",
    demo: "https://ayushpro1428.itch.io/ninja-game",
    tech: ["Godot", "GDScript"],
    about: [
      "My second Godot game, made for Hack Club Phantom. You reach the trophy on each level while dodging enemies, spikes, saws and other traps.",
      "Being my second game, I tried to improve on the first: tighter movement, enemies that patrol and chase, and a proper level-unlock system.",
    ],
    highlights: [
      "Double jump (Space twice) and dash (W)",
      "Throw ninja stars with A",
      "Enemies with patrol and chase behaviour",
      "Locked and unlocked levels, replay finished ones",
      "Home, options, info and level-complete screens",
    ],
  },
  {
    slug: "simple-english",
    title: "Simple English",
    tagline: "A word game: jump on the right words to finish the sentence.",
    category: "game-dev",
    status: "completed",
    featured: true,
    hasPage: true,
    cover: "/blog/simple-english/screen1.webp",
    github: GH + "SIMPLE-ENGLISH",
    demo: "https://ayushpro1428.itch.io/little-english",
    tech: ["Godot", "GDScript"],
    about: [
      "A small, friendly game for practising English. Words float around the level and you build the sentence one jump at a time, landing on the right words and avoiding the decoys.",
      "The characters and drawings are my own hand-drawn art, alongside free pixel-art hero sprites from Craftpix.",
    ],
    highlights: [
      "Pick the right word to complete each sentence",
      "Decoy words to avoid",
      "Hand-drawn art",
      "Playable in the browser on itch.io",
    ],
    gallery: [
      pic("simple-english", "screen1", "Gameplay"),
      pic("simple-english", "screen2", "Gameplay, another sentence"),
    ],
  },
  {
    slug: "advocate-site",
    title: "Advocate Manju Prajapati",
    tagline: "A website for an advocate's legal practice.",
    category: "software",
    status: "completed",
    featured: true,
    cover: imgA,
    github: GH + "advocate-manju-prajapati-v2",
    demo: "https://advocatemanjuprajapati.com",
  },
  {
    slug: "am-divorce-lawyer",
    title: "AM Divorce Lawyer",
    tagline: "A website for a divorce law firm.",
    category: "software",
    status: "completed",
    featured: true,
    cover: imgB,
    github: GH + "Divorce-Law-Firm",
    demo: "https://www.amdivorcelawyer.online",
  },

  // ───────── More hardware ─────────
  {
    slug: "stm-flight-controller",
    title: "STM32 Flight Controller",
    tagline: "A drone flight controller with an STM32F405, IMU, magnetometer and barometer.",
    category: "hardware",
    status: "in-progress",
    featured: false,
    hasPage: true,
    cover: "/blog/stm-flight-controller/pcb_front_3d.webp",
    github: GH + "stm-flight-controller",
    tech: ["STM32F405", "MPU6050", "LIS3MDL", "BMP280", "Betaflight"],
    about: [
      "A flight controller I designed to understand how drones stay stable and how all the sensors work together. It has been great for learning embedded systems, sensor calibration and PCB design — and for learning what can go wrong in hardware. There's still plenty to learn before it flies.",
      "The STM32F405 reads an MPU6050 (accelerometer and gyro), an LIS3MDL magnetometer (a digital compass) and a BMP280 barometer (pressure, used for altitude) over I²C. It's flashed over SWD and is meant to run Betaflight.",
    ],
    highlights: [
      "STM32F405 main processor",
      "MPU6050, LIS3MDL and BMP280 sensors",
      "On-board power management",
      "Programmed over SWD with STM32CubeProgrammer",
      "Sensor calibration code written in C",
    ],
    gallery: [
      pic("stm-flight-controller", "pcb_front_3d", "Board front in 3D"),
      pic("stm-flight-controller", "pcb_back_3d", "Board back in 3D"),
      pic("stm-flight-controller", "pcb_view", "PCB layout"),
      pic("stm-flight-controller", "schamtic", "Schematic"),
    ],
  },
  {
    slug: "esp32-flight-controller",
    title: "ESP32 Flight Controller",
    tagline: "My first flight controller: ESP32, MPU6050 and a double PID loop.",
    category: "hardware",
    status: "completed",
    featured: false,
    hasPage: true,
    cover: flightcontroller,
    github: GH + "esp32-flight-controller",
    tech: ["ESP32", "MPU6050", "PID", "KiCad"],
    about: [
      "A basic custom flight controller built around an ESP32 and an MPU6050 IMU. It reads the sensors, stabilises the drone with PID control and drives four motors through ESCs.",
      "Setup is in three steps: run the calibration sketch with the drone on the ground, paste the measured IMU offsets into the flight code, then upload the main controller.",
    ],
    highlights: [
      "Complementary filter for angle estimation",
      "Double-loop PID (angle and angle rate)",
      "PWM output to four ESCs",
      "Six-channel RC receiver input",
      "Custom KiCad PCB and Gerbers",
    ],
    gallery: [
      pic("esp32-flight-controller", "3d", "Board in 3D"),
      pic("esp32-flight-controller", "pcb-editer", "PCB editor"),
      pic("esp32-flight-controller", "schematic", "Schematic"),
    ],
  },
  {
    slug: "drone",
    title: "Drone",
    tagline: "An F450 quadcopter build with a KK2.1 flight controller.",
    category: "hardware",
    status: "completed",
    featured: false,
    hasPage: true,
    guideDraft: true,
    postPath: "drone",
    cover: drone,
    tech: ["F450", "KK2.1", "A2212 motors", "SimonK ESCs"],
  },
  {
    slug: "usb-hub",
    title: "USB Hub",
    tagline: "A USB-C to four USB-A hub in a wood-look printed case.",
    category: "hardware",
    status: "in-progress",
    featured: false,
    hasPage: true,
    cover: "/blog/usb-hub/case-closed.webp",
    github: GH + "usb_hub",
    tech: ["FE1.1s", "USB 2.0", "KiCad", "Fusion 360"],
    about: [
      "A compact USB 2.0 hub designed from scratch around the FE1.1s hub controller: one USB-C port to the computer, four USB-A ports for devices.",
      "Unlike buying a hub, designing one meant learning how a hub controller is integrated, laying out the circuit, and modelling an enclosure to 3D print in wood-look PLA.",
    ],
    highlights: [
      "FE1.1s USB 2.0 four-port hub controller",
      "12 MHz crystal",
      "USB-C upstream, four USB-A downstream",
      "Printed enclosure in wood-effect PLA",
    ],
    gallery: [
      pic("usb-hub", "case-closed", "Enclosure closed"),
      pic("usb-hub", "case-open", "Enclosure open"),
      pic("usb-hub", "3d_pcb_front", "PCB front in 3D"),
      pic("usb-hub", "pcb_route", "PCB routing"),
      pic("usb-hub", "schamtic", "Schematic"),
    ],
  },
  {
    slug: "stm-devboard",
    title: "STM32H573 Devboard",
    tagline: "A custom STM32H573 development board with USB-C and SWD.",
    category: "hardware",
    status: "in-progress",
    featured: false,
    hasPage: true,
    cover: stmDevboard,
    github: GH + "stm-devboard",
    tech: ["STM32H573", "KiCad", "4-layer PCB"],
    about: [
      "A development board built around the STM32H573RIT6, made to learn how to design an STM32 board myself instead of relying on ready-made ones.",
      "USB-C powers it through an LD1117S33TR 3.3 V regulator, with USBLC6-2P6 ESD protection on the data lines. An 8 MHz crystal clocks the MCU, and it can be flashed over USB DFU or debugged through SWD with an ST-LINK.",
    ],
    highlights: [
      "STM32H573RIT6 microcontroller",
      "USB-C power with ESD protection",
      "8 MHz external crystal",
      "Reset and boot buttons",
      "SWD header and pin headers for expansion",
    ],
    gallery: [
      pic("stm-devboard", "pcb_3d_front", "Board front in 3D"),
      pic("stm-devboard", "pcb_3d_back", "Board back in 3D"),
      pic("stm-devboard", "routing", "PCB routing"),
      pic("stm-devboard", "schamtic", "Schematic"),
    ],
  },
  {
    slug: "esp32-devboard",
    title: "ESP32-S2 Devboard",
    tagline: "An ESP32-S2 board with USB-C, two RGB LEDs and breadboard headers.",
    category: "hardware",
    status: "in-progress",
    featured: false,
    hasPage: true,
    cover: esp32Devboard,
    github: GH + "esp32-devboard",
    tech: ["ESP32-S2", "WS2812B", "KiCad"],
    about: [
      "A development board built around the Espressif ESP32-S2FH4, made to get experience designing a PCB and building my own ESP32 board — schematic, routing and putting it all together.",
      "USB-C supplies 5 V, a 3.3 V LDO powers the ESP32-S2, and the chip is programmed straight over USB-C. Two 1×15 headers break out the GPIO for jumper wires and breadboards, and two WS2812B LEDs and a button add something to play with.",
    ],
    highlights: [
      "ESP32-S2FH4, programmed over USB-C",
      "Two WS2812B RGB LEDs and a button",
      "Two 15-pin GPIO headers",
      "Total cost about $16.53 including the PCB",
    ],
    gallery: [
      pic("esp32-devboard", "pcb_front", "Board front"),
      pic("esp32-devboard", "pcb_back", "Board back"),
      pic("esp32-devboard", "pcb_routing", "PCB routing"),
      pic("esp32-devboard", "schamtic", "Schematic"),
    ],
  },
  {
    slug: "devboard",
    title: "RP2040 Devboard",
    tagline: "A custom RP2040 board for embedded prototyping.",
    category: "hardware",
    status: "in-progress",
    featured: false,
    hasPage: true,
    cover: devboard,
    github: GH + "devboard",
    tech: ["RP2040", "KiCad"],
    about: [
      "A custom development board built on the Raspberry Pi RP2040 for embedded projects and hardware prototyping.",
      "It uses a 12 MHz external crystal and Winbond SPI flash, with USB support and a GPIO breakout for I²C, SPI and UART. Passives are mostly 0402.",
    ],
    highlights: [
      "RP2040 with 12 MHz crystal and SPI flash",
      "USB-C",
      "GPIO breakout with I²C, SPI and UART",
      "Gerbers and BOM included",
    ],
    gallery: [
      pic("devboard", "front", "Board front"),
      pic("devboard", "back", "Board back"),
      pic("devboard", "pcb", "PCB layout"),
      pic("devboard", "schema", "Schematic"),
    ],
  },
  {
    slug: "keyboard-v2",
    title: "Keyboard v2",
    tagline: "A wireless mechanical keyboard on a XIAO nRF52840 with hot-swap sockets.",
    category: "hardware",
    status: "in-progress",
    featured: false,
    hasPage: true,
    cover: "/blog/keyboard-v2/3d_final_withcase.webp",
    github: GH + "keyboard-v2",
    tech: ["XIAO nRF52840", "MCP23017", "KiCad"],
    about: [
      "My second custom mechanical keyboard, with its own PCB, individual switch positions, a microcontroller and an I/O expander.",
      "A Seeed XIAO nRF52840 runs it, with an MCP23017 I/O expander for the extra rows and columns, diodes in the key matrix, USB-C, a battery connector and Kailh Choc hot-swap sockets. I also wrote a test sketch that scans the full 85-key matrix and prints key presses at 115200 baud.",
    ],
    highlights: [
      "Seeed XIAO nRF52840 with an MCP23017 expander",
      "Kailh Choc hot-swap sockets",
      "Battery connector for wireless use",
      "85-key matrix test sketch",
    ],
    gallery: [
      pic("keyboard-v2", "3d_final_withcase", "Keyboard with case"),
      pic("keyboard-v2", "3d_final_withcase_2", "Keyboard with case, second view"),
      pic("keyboard-v2", "pcb_3d_front", "PCB front in 3D"),
      pic("keyboard-v2", "pcb_route", "PCB routing"),
    ],
  },
  {
    slug: "split-keyboard",
    title: "Split Keyboard",
    tagline: "A two-half keyboard with 22 keys per side, an OLED and rotary encoders.",
    category: "hardware",
    status: "in-progress",
    featured: false,
    hasPage: true,
    cover: splitkeyboard,
    github: GH + "split-keyboard",
    tech: ["Raspberry Pi Pico", "KiCad", "C++"],
    about: [
      "A split keyboard in two halves, designed to get experience with PCB design, CAD modelling and firmware.",
      "Each side has 22 keys, and it adds an OLED display and two rotary encoders. It's controlled by a Raspberry Pi Pico, with firmware in C++ that's still being developed.",
    ],
    highlights: [
      "22 keys on each half",
      "OLED display and two rotary encoders",
      "Raspberry Pi Pico controller",
      "Custom PCB and CAD case",
    ],
    gallery: [
      pic("split-keyboard", "3d1", "Split keyboard in 3D"),
      pic("split-keyboard", "3d2", "Split keyboard, second view"),
      pic("split-keyboard", "pcbroute", "PCB routing"),
      pic("split-keyboard", "schematic-left", "Left schematic"),
    ],
  },
  {
    slug: "hackpad",
    title: "Hackpad",
    tagline: "A 3×3 macropad with an OLED, built for Hack Club.",
    category: "hardware",
    status: "completed",
    featured: false,
    hasPage: true,
    cover: hackpad,
    github: GH + "hackpad",
    tech: ["XIAO RP2040", "CircuitPython", "KiCad"],
    about: [
      "My Hack Club macropad: a compact 3×3 keyboard for shortcuts, programming and gaming.",
      "It runs on a Seeed XIAO RP2040 with a 0.91\" OLED, nine MX-style switches with diodes, a custom KiCad PCB and a 3D-printed case. The firmware is CircuitPython.",
    ],
    highlights: [
      "Nine MX-style switches",
      "0.91\" OLED",
      "Seeed XIAO RP2040 running CircuitPython",
      "3D-printed housing",
    ],
    gallery: [
      pic("hackpad", "3d1", "Hackpad render"),
      pic("hackpad", "3d2", "Hackpad render, second view"),
      pic("hackpad", "pcb", "PCB layout"),
      pic("hackpad", "schematic", "Schematic"),
    ],
  },
  {
    slug: "hermes",
    title: "Hermes Motion Meter",
    tagline: "A handheld motion meter that shows live IMU readings on an OLED.",
    category: "hardware",
    status: "in-progress",
    featured: false,
    hasPage: true,
    cover: hermes,
    github: GH + "hermes",
    tech: ["XIAO RP2040", "MPU6050", "I²C", "KiCad"],
    about: [
      "A compact handheld motion detector: a XIAO RP2040 reads acceleration and rotation from an MPU6050 and shows them on a 0.96\" OLED.",
      "I picked the MPU6050 to learn about IMUs, and because it talks I²C it taught me about pull-up resistors, datasheets, decoupling capacitors and careful footprint checks — it's a tiny QFN part.",
    ],
    highlights: [
      "MPU6050 and OLED sharing one I²C bus",
      "4.7 kΩ pull-ups on SDA and SCL",
      "MPU6050 soldered to the board; XIAO and OLED on headers",
      "Silkscreen labels to make assembly easier",
    ],
    gallery: [
      pic("hermes", "3d", "Hermes in 3D"),
      pic("hermes", "pcb", "PCB layout"),
      pic("hermes", "schematic", "Schematic"),
    ],
  },
  {
    slug: "n20-rc-car",
    title: "N20 RC Car",
    tagline: "A tiny four-wheel car you drive from a web page the ESP32 hosts itself.",
    category: "hardware",
    status: "completed",
    featured: false,
    hasPage: true,
    cover: "/blog/n20-rc-car/running.webp",
    github: GH + "n20-rc-car",
    demo: "https://youtube.com/shorts/BL0SvfMwOaw",
    tech: ["ESP32", "N20 motors", "Fritzing", "CAD"],
    about: [
      "A small four-wheel RC car with an ESP32 and four N20 metal-gear motors. The ESP32 hosts its own Wi-Fi network and a control page, so I can drive it from a phone or laptop with no separate remote.",
      "It's skid-steered: the two left motors work together and the two right motors work together, so changing each side's speed and direction moves it forward, backward and around corners. The page has direction buttons and a speed slider.",
    ],
    highlights: [
      "ESP32 hosts its own Wi-Fi and control page",
      "Four N20 metal-gear motors, skid steering",
      "Speed slider and direction buttons",
      "Circuit designed in Fritzing, chassis designed in CAD",
    ],
    video: "/blog/n20-rc-car/working.mp4",
    gallery: [
      pic("n20-rc-car", "running", "The car running"),
      pic("n20-rc-car", "build", "Build"),
      pic("n20-rc-car", "cad", "CAD model"),
      pic("n20-rc-car", "circuit", "Circuit"),
    ],
  },
  {
    slug: "rc-camera-car",
    title: "RC Camera Car",
    tagline: "A Wi-Fi FPV car with an ESP32-CAM and a homemade joystick controller.",
    category: "hardware",
    status: "graveyard",
    featured: false,
    hasPage: true,
    cover: rccar,
    github: GH + "rc-camera-car",
    tech: ["ESP32-CAM", "ESP32", "Wi-Fi", "TFT"],
    about: [
      "A Wi-Fi RC car with an ESP32-CAM on the chassis and a custom controller built from an ESP32, a dual joystick and a TFT screen instead of a normal remote.",
      "The controller reads the joystick and sends commands over Wi-Fi; the ESP32-CAM drives the motors and streams camera images back to the controller's screen.",
      "Along the way I cut the design from three boards to two, fixed motor noise with capacitors, and learned how ESP32 Wi-Fi, the screen and the ESP32-CAM work.",
    ],
    highlights: [
      "ESP32-CAM car running an HTTP server",
      "ESP32 controller with dual joystick and TFT",
      "Live camera view on the controller",
      "Four DC motors with a buck converter for the logic",
    ],
    gallery: [
      pic("rc-camera-car", "front", "Car CAD, front"),
      pic("rc-camera-car", "controller", "Controller CAD"),
      pic("rc-camera-car", "components", "Controller components"),
      pic("rc-camera-car", "car", "Car circuit"),
    ],
  },
  {
    slug: "keycaps",
    title: "Valorant Keycaps",
    tagline: "3D-printable Valorant-style WASD keycaps for MX switches.",
    category: "hardware",
    status: "in-progress",
    featured: false,
    hasPage: true,
    cover: keycaps,
    github: GH + "keycaps",
    tech: ["CAD", "3D printing"],
    about: [
      "Four 3D-printable keycaps for MX switches, styled after Valorant, for the W, A, S and D keys. Download the CAD and swap the top image to make them for any key.",
      "I had MX switches and was building a keyboard, so making my own keycaps felt better than only buying them. The printed image can't print in detail, so the plan is to add stickers on top.",
    ],
    gallery: [
      pic("keycaps", "top", "Keycaps from the top"),
      pic("keycaps", "side1", "Keycaps from the side"),
    ],
  },
  {
    slug: "pathfinder",
    title: "Pathfinder",
    tagline: "A tiny reaction game with buttons, LEDs and a brightness knob.",
    category: "hardware",
    status: "in-progress",
    featured: false,
    hasPage: true,
    cover: pathfinder,
    github: GH + "pathFinder",
    tech: ["XIAO RP2040", "Arduino"],
    about: [
      "My Hack Club Stasis project: a small reaction game. LEDs light up, you press buttons and turn a knob, and you try to react fast.",
      "Button 1 lights LED 1. Press button 2 quickly afterwards — several times — and LED 2 joins in. Too slow and nothing happens. The potentiometer sets the LED brightness.",
    ],
    highlights: [
      "Seeed XIAO RP2040",
      "Two Cherry MX switches and two LEDs",
      "Potentiometer for brightness",
    ],
    gallery: [
      pic("pathfinder", "3d", "Pathfinder in 3D"),
      pic("pathfinder", "circuit", "Circuit"),
    ],
  },
  {
    slug: "blinky-board",
    title: "Blinky Board",
    tagline: "A beginner-friendly LED chaser built from a 555 timer and a 4017 counter.",
    category: "hardware",
    status: "completed",
    featured: false,
    hasPage: true,
    cover: blinkyboard,
    github: GH + "led-timer",
    tech: ["NE555", "CD4017", "KiCad"],
    about: [
      "A classic LED chaser made for beginners in Hack Club Stasis. An NE555 in astable mode produces clock pulses, a CD4017 decade counter steps from one output to the next on each pulse, and the LEDs light up in sequence like a running light.",
      "A potentiometer sets the speed, and it only uses common parts — a good first look at both analog and digital electronics.",
    ],
    highlights: ["NE555 clock", "CD4017 decade counter", "Speed control with a potentiometer"],
    gallery: [
      pic("blinky-board", "3d", "Blinky Board in 3D"),
      pic("blinky-board", "pcb", "PCB layout"),
      pic("blinky-board", "schematic", "Schematic"),
    ],
  },
];

export const pageProjects = projects.filter((p) => p.hasPage);

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

export const categoryLabels: Record<Category, string> = {
  hardware: "Hardware",
  software: "Software",
  "game-dev": "Game Dev",
};

export const statusLabels: Record<Status, string> = {
  completed: "Completed",
  "in-progress": "In Progress",
  graveyard: "Graveyard",
};
