import { journalImgs, lesson, type Guide } from "./types";

// ───────────────────────── Self-balancing bot ─────────────────────────
const b = journalImgs("self-balancing-bot");

export const selfBalancingGuide: Guide = {
  totalHours: 16.9,
  intro: [
    "My build journal for the self-balancing bot. Most entries were lost on the platform, so only the first session's write-up survives; the rest are listed below by title.",
  ],
  steps: [
    {
      title: "First wiring test and printed parts",
      date: "7 Sep 2026",
      hours: 1.2,
      blocks: [
        "I wired everything without sensors first, using these 12 V batteries, and connected the ESP32 to the motor driver with jumper wires.",
        b.one("f01-1", "12 V batteries"),
        ...b.many("f01", 2, 7, "First wiring"),
        "It wouldn't upload at first.",
        b.one("f01-8", "Upload error"),
        "Removing the ground wire from the motor driver to the ESP32 during upload fixed it.",
        "I also 3D-printed the chassis. I forgot supports, so the IR sensor mount came out melted, and the motor screw holes were the wrong size.",
        ...b.many("f01", 9, 12, "Printed chassis and the problems"),
        lesson("Add supports for overhangs, and check screw sizes before printing."),
      ],
    },
    {
      title: "The sessions after that",
      date: "7–11 Sep 2026",
      hours: 15.7,
      blocks: [
        "These sessions' write-ups were lost, but their titles show how the build went: circuit, code (3 hours), fixing the CAD, an updated circuit, another motor and driver test, changing the motor driver, changing the motors, finishing GitHub, \"assembly — motor driver failed\", and updated wiring.",
        "The result is the robot on this page: an ESP32 and MPU-9250 balancing on two IBT-2 drivers, with the videos below.",
      ],
    },
  ],
};

// ───────────────────────── RC car (brushless, early) ─────────────────────────
const r = journalImgs("rc-car-brushless");

export const rcCarBrushlessGuide: Guide = {
  totalHours: 3.5,
  intro: ["The start of a faster RC car: planning with a brushless motor, then switching to BO motors and printing the first mount."],
  steps: [
    {
      title: "What we're building",
      date: "27 Sep 2026",
      hours: 1,
      blocks: [
        "I started from parts I had: a 1000 KV brushless motor and an ESC.",
        ...r.many("f01", 1, 2, "Brushless motor and ESC"),
        "On a 12 V battery that's about 12,000 RPM with no load. With 70 mm wheels (about 0.22 m around), that's roughly 44 m/s in theory — far too optimistic without load or gearing, but it should be fast.",
        r.one("f01-3", "Speed calculation"),
        "Some designs I liked:",
        ...r.many("f01", 4, 5, "Design inspiration"),
      ],
    },
    {
      title: "Switching to BO motors and the first mount",
      date: "1 Oct 2026",
      hours: 2.5,
      blocks: [
        "I switched to BO motors: two motors, four wheels, in a design like this.",
        ...r.many("f02", 1, 2, "BO motor and design"),
        "I designed a BO motor mount for M3 screws and printed it to test, along with a base plate.",
        ...r.many("f02", 3, 7, "Motor mount"),
        "The mount was good, but I got the alignment on the plate wrong.",
        ...r.many("f02", 8, 10, "Printed parts and the alignment problem"),
      ],
    },
  ],
};

// ───────────────────────── Split keyboard ─────────────────────────
const s = journalImgs("split-keyboard");

export const splitKeyboardGuide: Guide = {
  totalHours: 16.8,
  intro: ["How I designed a split keyboard — 22 keys per side on two Raspberry Pi Picos, with an OLED and rotary encoder — through the PCB, case and firmware."],
  steps: [
    {
      title: "Planning and the first schematic",
      date: "21 Jun 2026",
      hours: 2.3,
      blocks: [
        s.one("f01-1", "Inspiration"),
        "I aimed for 22 keys per side and followed the Stasis starter guide to set up left and right schematics.",
        ...s.many("f01", 2, 4, "Left and right schematics"),
        "The guide suggests the XIAO nRF52840, but I chose the Raspberry Pi Pico: bigger, but about $4 instead of $14.",
        ...s.many("f01", 5, 6, "Pico vs XIAO"),
        "I considered a large display between the halves but dropped it, and decided a rotary encoder would look great.",
        ...s.many("f01", 7, 9, "Display and encoder ideas"),
      ],
    },
    {
      title: "Schematic and footprints",
      date: "21 Jun 2026",
      hours: 1.8,
      blocks: [
        "Both halves are done, with this rotary encoder and a bigger square OLED.",
        ...s.many("f02", 1, 4, "Schematics, encoder and OLED"),
        "The switches are 2-pin MX switches — one pin to GPIO, one to ground. (The 5-pin version's extra pins are just plastic supports.)",
        s.one("f02-5", "MX switch"),
        "Then footprints for everything, and a first 3D look.",
        ...s.many("f02", 6, 8, "Footprints and first 3D"),
      ],
    },
    {
      title: "First PCB design",
      date: "21 Jun 2026",
      hours: 1,
      blocks: ["A first layout around the fairly large Pico.", ...s.many("f03", 1, 2, "First PCB")],
    },
    {
      title: "Finished PCB and silkscreen",
      date: "21 Jun 2026",
      hours: 2.6,
      blocks: [
        "I changed the design, moving the screen to the corner, and routed everything. The previous design was unroutable because the diodes and controller were packed too tightly, so the diodes moved to the end.",
        ...s.many("f04", 1, 3, "Final PCB and 3D"),
        "For the silkscreen I added logos. To put any image on a PCB: open KiCad's Image Converter from the home screen, load the image, copy it to the clipboard and paste it into the PCB editor.",
        ...s.many("f04", 4, 10, "Adding images to the silkscreen"),
        s.one("f04-11", "Finished silkscreen"),
      ],
    },
    {
      title: "The case",
      date: "23 Jun 2026",
      hours: 2.8,
      blocks: ["Based on the PCB, I modelled the front with space for every switch, checking key spacing, then the back.", ...s.many("f05", 1, 3, "Case design")],
    },
    {
      title: "GitHub and the parts",
      date: "23 Jun 2026",
      hours: 0.7,
      blocks: [
        "I uploaded the BOM, CAD, KiCad files and Gerbers — about $93 in total. I'm ordering the PCB from Robu: JLCPCB was $33, but customs on my last order added unexpected charges.",
        ...s.many("f06", 1, 3, "GitHub and cost"),
        "The keycaps, two Picos (one per side), and extra switches since some were defective last time.",
        ...s.many("f06", 4, 6, "Keycaps, Picos and switches"),
      ],
    },
    {
      title: "Firmware",
      date: "23 Jun 2026",
      hours: 3.8,
      blocks: [
        "main.cpp runs on a Pico in each half, oled_demo.cpp drives the OLED, and PlatformIO builds them. Rows are GPIO16–20, columns GPIO11–15, the encoder GPIO6/7, and the OLED is on I²C (GPIO26 SCL, GPIO27 SDA).",
        ...s.many("f07", 1, 2, "Firmware"),
        "I used AI to learn how keyboard firmware works, then adapted it to my own wiring and switch grid.",
      ],
    },
    {
      title: "Update after review",
      date: "24 Jun 2026",
      hours: 2,
      blocks: ["I moved the Pico to the top edge so it's easy to plug in, and redid the 3D in Fusion.", ...s.many("f08", 1, 4, "Updated PCB and 3D")],
    },
  ],
};

// ───────────────────────── Hermes ─────────────────────────
const h = journalImgs("hermes");

export const hermesGuide: Guide = {
  totalHours: 5.1,
  intro: ["How I built the Hermes motion meter: an IMU, an OLED and a XIAO RP2040 on one small board, plus firmware to show the readings."],
  steps: [
    {
      title: "Schematic",
      date: "20 Jun 2026",
      hours: 2,
      blocks: [
        "I followed the guide and the IMU docs; placing the IMU's capacitors correctly was the hardest part.",
        h.one("f01-1", "Schematic"),
        "An OLED shows the data, a XIAO RP2040 runs it, and two pull-up resistors sit on SDA and SCL.",
        h.one("f01-2", "IMU and pull-ups"),
        "The XIAO's D6 goes to the IMU's interrupt, and SDA/SCL are global labels shared by everything. The OLED is just power, ground, SDA and SCL.",
        h.one("f01-3", "XIAO connections"),
      ],
    },
    {
      title: "Footprints and routing",
      date: "20 Jun 2026",
      hours: 1.8,
      blocks: [
        "I added the IMU footprint, then chose large resistors and capacitors to make soldering easier.",
        ...h.many("f02", 1, 4, "Footprints"),
        ...h.many("f02", 5, 7, "Board with 3D models"),
        "I'd forgotten to route it — and swapped the MPU6500 for an MPU6050 when it wasn't working right.",
        ...h.many("f02", 8, 9, "Routed PCB and 3D"),
      ],
    },
    {
      title: "Firmware",
      date: "20 Jun 2026",
      hours: 1.3,
      blocks: ["Following the guide, I wrote the code that reads the IMU and shows the data on the OLED.", h.one("f03-1", "Firmware")],
    },
  ],
};

// ───────────────────────── Hackpad ─────────────────────────
const p = journalImgs("hackpad");

export const hackpadGuide: Guide = {
  totalHours: 7.8,
  intro: ["How I built my Hackpad: a 3×3 macropad with an OLED on a XIAO RP2040, from schematic to the finished build."],
  steps: [
    {
      title: "First schematic",
      date: "19 Jun 2026",
      hours: 0.7,
      blocks: [
        "I came across the Hackpad on another Hack Club platform and decided to make my own. I started with the XIAO RP2040 and four switches.",
        p.one("f01-1", "First schematic"),
        "The XIAO has too few pins for one pin per key, so I planned a key matrix like a keyboard.",
      ],
    },
    {
      title: "Completing the schematic",
      date: "19 Jun 2026",
      hours: 0.7,
      blocks: [
        "Nine keys in a 3×3 grid plus an OLED, with footprints assigned.",
        ...p.many("f02", 1, 2, "Schematic and footprints"),
        "The OLED needs four connections (3.3 V, GND, SDA, SCL), and the 3×3 matrix controls nine keys from six pins.",
        ...p.many("f02", 3, 4, "OLED and key matrix"),
      ],
    },
    {
      title: "PCB design",
      date: "19 Jun 2026",
      hours: 0.5,
      blocks: [
        "I drew the outline with 3 mm cut-outs on each edge for screws.",
        ...p.many("f03", 1, 2, "Board outline and 3D"),
        "I'd forgotten the OLED, so I added a 4-pin header and updated the board.",
        ...p.many("f03", 3, 4, "OLED header added"),
      ],
    },
    {
      title: "Routing and 3D models",
      date: "19 Jun 2026",
      hours: 1.3,
      blocks: [
        "I routed the board and added the XIAO RP2040 model from GrabCAD and an OLED model from SnapEDA that matched exactly.",
        ...p.many("f04", 1, 3, "Routing and 3D models"),
        "Silkscreen: logos on the back and my name on the front.",
        ...p.many("f04", 4, 6, "Silkscreen"),
      ],
    },
    {
      title: "Case",
      date: "19 Jun 2026",
      hours: 2,
      blocks: ["I added keycaps to the 3D model, imported it into Fusion, and designed the case and plate with an opening for the XIAO's port.", ...p.many("f05", 1, 3, "Case design")],
    },
    {
      title: "The build",
      date: "27 Jun 2026",
      hours: 2.7,
      blocks: ["The build itself was easy but there was a lot to do: buttons, diodes, keycaps and the display, one by one.", ...p.many("f06", 1, 4, "The finished Hackpad")],
    },
  ],
};

// ───────────────────────── Custom keyboard ─────────────────────────
const c = journalImgs("keyboard");

export const keyboardGuide: Guide = {
  totalHours: 14.5,
  intro: ["How I built my first custom keyboard — about 80 keys on a Raspberry Pi Pico with an OLED and rotary encoder — from idea to finished build."],
  steps: [
    {
      title: "The idea",
      date: "8 May 2026",
      hours: 0.5,
      blocks: [
        "A 75% keyboard with an OLED to make it lively, knobs for volume and brightness, and two extra buttons: instant mute for the speaker, and a microphone mute for meetings.",
        ...c.many("f01", 1, 2, "Keyboard idea"),
      ],
    },
    {
      title: "Schematic",
      date: "8 May 2026",
      hours: 0.7,
      blocks: [
        "With 40+ keys and few GPIO pins, the keys go in a grid (matrix). I imported a Raspberry Pi Pico and a DM-OLED096-636 display.",
        c.one("f02-1", "Schematic"),
        "The grid started at 10 columns × 6 rows.",
        ...c.many("f02", 2, 4, "Pico, rotary encoder and screen"),
      ],
    },
    {
      title: "A USB hub (later removed)",
      date: "9 May 2026",
      hours: 1,
      blocks: ["I designed a built-in hub with two USB-C ports and one USB-A port, around an FE1.1s.", ...c.many("f03", 1, 2, "USB hub section")],
    },
    {
      title: "Almost-finished schematic",
      date: "9 May 2026",
      hours: 0.7,
      blocks: [
        "I dropped a row (90 keys was too many — about 80 instead), wired the rotary encoder and OLED, and dropped one encoder since there weren't enough pins.",
        ...c.many("f04", 1, 3, "Schematic, Pico and encoder"),
      ],
    },
    {
      title: "Completing the schematic and footprints",
      date: "9 May 2026",
      hours: 1.3,
      blocks: [
        "I removed the USB hub and powered it from the Pico instead, completed the schematic and assigned 163 footprints.",
        ...c.many("f05", 1, 2, "Full schematic and footprints"),
        "I also fixed the Pico footprint and switched the screen to a 1.3\" 128×64 I²C OLED, since the first one kept giving errors. Zero errors after that.",
        ...c.many("f05", 3, 4, "Fixes and current PCB"),
      ],
    },
    {
      title: "Key layout and routing",
      date: "10 May 2026",
      hours: 1.7,
      blocks: [
        "I planned a layout on keyboard-layout-editor.com, matched the switches in KiCad and routed them.",
        ...c.many("f06", 1, 2, "Layout and routing"),
        "A 40-minute bug: the rotary encoder took reference SW61, so duplicated switches started from 61 while diodes stopped at 60. Renaming the encoder RE1 and redoing the switches fixed it.",
        c.one("f06-3", "3D view"),
        lesson("Watch reference numbers when duplicating parts — one encoder named SW61 threw off every switch-diode pair."),
      ],
    },
    {
      title: "Aligning everything",
      date: "11 May 2026",
      hours: 1.5,
      blocks: ["I fixed the layout so every component lines up, and finished the wiring. Models came from GrabCAD.", ...c.many("f07", 1, 2, "Aligned layout and wiring")],
    },
    {
      title: "Keycaps in 3D",
      date: "11 May 2026",
      hours: 0.8,
      blocks: [
        "I placed every keycap by hand — 1u for letters up to a 6u spacebar.",
        ...c.many("f08", 1, 4, "Keycaps in 3D"),
      ],
    },
    { title: "Silkscreen", date: "14 May 2026", hours: 0.3, blocks: [...c.many("f09", 1, 2, "Silkscreen")] },
    {
      title: "Case",
      date: "15 May 2026",
      hours: 1.3,
      blocks: ["I modelled the case and made the switch plate with kbplate.ai03.com, exported as DXF.", ...c.many("f10", 1, 3, "Case and plate")],
    },
    { title: "GitHub", date: "16 May 2026", hours: 0.7, blocks: ["Images, CAD, Gerbers, a README and the first code went up.", ...c.many("f11", 1, 3, "GitHub")] },
    {
      title: "The build",
      date: "26 Jun 2026",
      hours: 4,
      blocks: [
        "82 switches, diodes and keycaps one by one — it took patience.",
        ...c.many("f12", 1, 5, "The finished keyboard"),
        "The case was printed in two parts so it feels a little off; I plan to add a bottom plate to stabilise it. I also posted it on Reddit.",
        c.one("f12-6", "Reddit post"),
      ],
    },
  ],
};

// ───────────────────────── RP2040 devboard ─────────────────────────
const d = journalImgs("devboard");

export const devboardGuide: Guide = {
  totalHours: 7.6,
  intro: ["How I designed an RP2040 development board, following the starter guide: schematic, footprints, routing and a personal touch on the back."],
  steps: [
    {
      title: "Schematic",
      date: "14 Apr 2026",
      hours: 2,
      blocks: [
        "Following the starter guide I imported and connected everything — footprints came next.",
        d.one("f01-1", "Full schematic"),
        "The RP2040, the USB section, a 12 MHz crystal, the flash chip, and 1×20 and 1×3 headers.",
        ...d.many("f01", 2, 6, "Schematic sections"),
      ],
    },
    {
      title: "Organising and footprints",
      date: "15 Apr 2026",
      hours: 1.3,
      blocks: ["I organised the schematic, assigned every footprint and added capacitors I'd forgotten.", ...d.many("f02", 1, 2, "Organised schematic")],
    },
    {
      title: "Routing",
      date: "1 May 2026",
      hours: 2.8,
      blocks: ["After a few schematic fixes I routed almost everything.", ...d.many("f03", 1, 2, "Routing and 3D")],
    },
    {
      title: "Finishing touches",
      date: "6 May 2026",
      hours: 0.5,
      blocks: ["I finished the board and put a picture of myself on the back silkscreen — not crisp, but it's a memory.", ...d.many("f04", 1, 2, "Final board")],
    },
    { title: "GitHub and pricing", date: "16 May 2026", hours: 1, blocks: ["I completed the README with images and checked prices on JLCPCB.", ...d.many("f05", 1, 3, "GitHub and quote")] },
  ],
};
