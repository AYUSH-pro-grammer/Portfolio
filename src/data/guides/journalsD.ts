import { journalImgs, lesson, type Guide } from "./types";

// ───────────────────────── RC camera car ─────────────────────────
const r = journalImgs("rc-camera-car");

export const rcCameraCarGuide: Guide = {
  totalHours: 10.7,
  intro: ["How I built a Wi-Fi FPV car: an ESP32-CAM car and a handheld controller with two joysticks and a screen showing the camera feed."],
  steps: [
    {
      title: "First CAD",
      date: "22 Mar 2026",
      hours: 1,
      blocks: [
        "I aimed for a simple Cybertruck shape — it ended up more truck-plus-bus. The tricky part was the motor mounts; the other models came from GrabCAD.",
        ...r.many("f01", 1, 3, "First car CAD"),
      ],
    },
    {
      title: "Wiring design",
      date: "25 Mar 2026",
      hours: 1,
      blocks: [
        "In Fritzing: the car has three batteries, four DC motors, a motor driver, an ESP32 and a buck converter (12 V to the motors, 5 V to the ESP32).",
        r.one("f02-1", "Car circuit"),
        "The controller has two joysticks and an ESP32, powered by two 18650 cells (7.4 V) through a buck converter.",
        ...r.many("f02", 2, 3, "Controller circuit"),
      ],
    },
    {
      title: "ESP32-CAM and the screen",
      date: "26 Mar 2026",
      hours: 0.5,
      blocks: [
        "Instead of an ESP32-CAM plus two ESP32s, the ESP32-CAM can replace the car's ESP32 — so one ESP32-CAM and one ESP32. I added a TFT screen to the controller.",
        r.one("f03-1", "Controller with TFT screen"),
        r.one("f03-2", "Car with ESP32-CAM"),
      ],
    },
    {
      title: "Controller CAD",
      date: "27 Mar 2026",
      hours: 1,
      blocks: [
        "The controller holds a battery, ESP32, screen and two joysticks. This is the second version…",
        ...r.many("f04", 1, 3, "Controller CAD"),
        "…because the first was an odd shape, hard to hold, and had nowhere for the battery.",
        r.one("f04-4", "First controller design"),
      ],
    },
    {
      title: "Code",
      date: "28 Mar 2026",
      hours: 2,
      blocks: [
        "The ESP32-CAM code drives the motors and streams video; the controller code reads the joysticks and shows the feed on the TFT. Built with PlatformIO in VS Code.",
        ...r.many("f05", 1, 2, "Successful builds"),
        lesson("I learned how ESP32s talk over Wi-Fi and how to send camera images from an ESP32-CAM to another ESP32's screen."),
      ],
    },
    {
      title: "Choosing the parts",
      date: "8 Apr 2026",
      hours: 1,
      blocks: [
        "A chassis I designed with built-in motor mounts, easy to 3D-print.",
        r.one("f06-1", "Chassis"),
        "1000 RPM motors — with 70 mm wheels that's about 13 km/h in theory.",
        r.one("f06-2", "Motors"),
        "Three 3.7 V cells (11.1 V, about 12 V full), a motor driver rated to 15 V, and the ESP32-CAM to record and drive.",
        ...r.many("f06", 3, 5, "Batteries, driver and ESP32-CAM"),
        "The controller body I designed in Fusion, and what's inside: two joysticks, a TFT, an ESP32 and a 2S/3S battery.",
        ...r.many("f06", 6, 7, "Controller"),
      ],
    },
    {
      title: "Final CAD",
      date: "8 Apr 2026",
      hours: 1.2,
      blocks: [
        "I added 3 mm screw holes under the motor mounts, side supports so the top slides in and out, and space plus a small hole at the front for the ESP32-CAM.",
        ...r.many("f07", 1, 3, "Final CAD"),
      ],
    },
    {
      title: "The build",
      date: "30 Jun 2026",
      hours: 3,
      blocks: ["I built the body from wood instead of 3D printing — quicker, and sturdier.", ...r.many("f08", 1, 10, "The finished car and controller")],
    },
  ],
};

// ───────────────────────── Robo Dog ─────────────────────────
const g = journalImgs("robo-dog");

export const roboDogGuide: Guide = {
  totalHours: 17.5,
  intro: ["How I designed and built a quadruped robot: a 4-bar-linkage leg, then hips, servo code and the final build."],
  steps: [
    {
      title: "Designing a leg",
      date: "2 Apr 2026",
      hours: 1,
      blocks: [
        "I sketched how a leg should move in tldraw, then modelled it in Fusion 360 as a 4-bar linkage: two main arms and two joints, with one motor driving the lower leg and another moving the whole leg.",
        ...g.many("f01", 1, 3, "Leg sketch and model"),
      ],
    },
    {
      title: "Adding servos",
      date: "3 Apr 2026",
      hours: 1.5,
      blocks: [
        "Each leg needs two servos: one fixed to the body, one riding on the leg to move the lower part. I planned 20 kg servos.",
        ...g.many("f02", 1, 2, "Servo placement"),
        ...g.many("f02", 3, 5, "Leg stretched and folded"),
      ],
    },
    {
      title: "A finished leg",
      date: "5 Apr 2026",
      hours: 1.5,
      blocks: [
        "I added servo mounts (25T horns) and shaped the parts — one leg ready to print.",
        ...g.many("f03", 1, 2, "Finished leg"),
        "How the two motors move it: motor 1 at its limits, then motor 2 with motor 1 locked.",
        ...g.many("f03", 3, 6, "Leg motion"),
      ],
    },
    { title: "Four legs", date: "6 Apr 2026", hours: 0.8, blocks: ["I fixed small issues and made all four legs.", ...g.many("f04", 1, 3, "Four legs")] },
    {
      title: "Body",
      date: "7 Apr 2026",
      hours: 0.7,
      blocks: ["I added the battery and microcontroller (an Arduino Mega) and designed the sides and top.", ...g.many("f05", 1, 3, "Body and inside")],
    },
    {
      title: "Servo code",
      date: "12 Apr 2026",
      hours: 0.9,
      blocks: ["A first sketch sweeps all eight servos from 0° to 180° and back, using a function that converts an angle to a PWM duty.", ...g.many("f06", 1, 2, "Servo code")],
    },
    { title: "Adding hip motion", date: "29 Apr 2026", hours: 0.8, blocks: ["A third motion lets the hip move up and down.", ...g.many("f07", 1, 5, "Hip motion")] },
    {
      title: "Hip design",
      date: "1 May 2026",
      hours: 0.7,
      blocks: [
        "The main leg motor connects to another motor for support. I also tried this smaller motor but it couldn't lift enough.",
        ...g.many("f08", 1, 3, "Hip design"),
      ],
    },
    { title: "GitHub and BOM", date: "1 May 2026", hours: 1, blocks: ["I tested my eight servos and set up GitHub — the only part I still needed was a battery.", ...g.many("f09", 1, 2, "Servo test and BOM")] },
    { title: "The hip joint", date: "1 May 2026", hours: 0.7, blocks: ["Each leg now uses three motors, and the hip moves up and down.", ...g.many("f10", 1, 3, "Hip joint")] },
    { title: "Final CAD", date: "6 May 2026", hours: 3, blocks: ["All four legs with three motors each, and the body on top.", ...g.many("f11", 1, 2, "Final CAD")] },
    {
      title: "The build",
      date: "27 Jun 2026",
      hours: 5,
      blocks: [
        "The head didn't print well, so it's open for now. I was one servo short at first (the last leg has one less in the first photo) until a friend gave me one.",
        ...g.many("f12", 1, 21, "The build"),
      ],
    },
  ],
};

// ───────────────────────── Pathfinder ─────────────────────────
const f = journalImgs("pathfinder");

export const pathfinderGuide: Guide = {
  totalHours: 4.6,
  intro: ["How I made Pathfinder, a small reaction game, while learning KiCad for the first time."],
  steps: [
    {
      title: "Schematic",
      date: "3 Apr 2026",
      hours: 1.5,
      blocks: ["Following the guide, I learned to use KiCad and to import and assign footprints.", ...f.many("f01", 1, 3, "Schematic and first PCB")],
    },
    { title: "3D models and PCB", date: "4 Apr 2026", hours: 0.8, blocks: ["I added all the 3D models and wired the PCB.", ...f.many("f02", 1, 3, "3D view, wiring and schematic")] },
    {
      title: "Code",
      date: "4 Apr 2026",
      hours: 0.6,
      blocks: [
        "Two buttons, two LEDs and a potentiometer. The potentiometer sets LED brightness (analogRead → analogWrite). Press button 1, then button 2 twice within a second, to light both LEDs.",
        ...f.many("f03", 1, 2, "Code"),
      ],
    },
    {
      title: "Finishing the board and choosing parts",
      date: "8 Apr 2026",
      hours: 1,
      blocks: [
        "I drew the board outline and found parts: Robu for components, MecKeys for keys and JLCPCB for the PCB, because shipping elsewhere was too expensive.",
        ...f.many("f04", 1, 2, "Board and wiring"),
        "MX-compatible 5-pin keys, an RK09K1130A5R potentiometer and a Seeed XIAO RP2040.",
        ...f.many("f04", 3, 6, "Keys, potentiometer, XIAO and PCB"),
      ],
    },
    {
      title: "Fixes and GitHub",
      date: "9 Apr 2026",
      hours: 0.7,
      blocks: [
        "I added the button covers in CAD from the starter docs and set up GitHub. Code fixes: btn1 was declared inside setup(), I'd written millis instead of millis(), and some logic was wrong.",
        ...f.many("f05", 1, 2, "Button covers and GitHub"),
      ],
    },
  ],
};

// ───────────────────────── ESP32 flight controller ─────────────────────────
const q = journalImgs("esp32-flight-controller");

export const esp32FlightGuide: Guide = {
  totalHours: 6.6,
  intro: ["How I designed and built my first flight controller on an ESP32 and MPU6050."],
  steps: [
    {
      title: "Choosing the parts",
      date: "12 Apr 2026",
      hours: 0.7,
      blocks: ["An ESP32, an MPU6050 gyro, a 7-pin receiver connector, four 3-pin ESC connectors, a power LED, an XT60 and a regulator.", q.one("f01-1", "Parts in KiCad")],
    },
    {
      title: "Wiring the schematic",
      date: "13 Apr 2026",
      hours: 0.8,
      blocks: [
        "For the receiver and ESC connectors I used 171825 headers (add the pin count, like 171825-6): -6 for receiver signals, -2 for receiver power, -3 for each ESC.",
        q.one("f02-1", "Schematic"),
        "Imported into the PCB editor with zero errors.",
        ...q.many("f02", 2, 3, "PCB import"),
      ],
    },
    { title: "Footprints, PCB and 3D", date: "13 Apr 2026", hours: 1.3, blocks: [...q.many("f03", 1, 3, "Schematic, PCB and 3D")] },
    {
      title: "Calibration code",
      date: "14 Apr 2026",
      hours: 0.8,
      blocks: ["Before the main code, the IMU's resting values on flat ground have to be measured — so I started with calibration.", ...q.many("f04", 1, 2, "Calibration code")],
    },
    { title: "Final touches and BOM", date: "16 Apr 2026", hours: 0.5, blocks: ["Final PCB touches, pricing from JLCPCB, and the code on GitHub.", q.one("f05-1", "Final PCB")] },
    {
      title: "Fixing the MPU footprint",
      date: "18 Apr 2026",
      hours: 0.5,
      blocks: ["I'd used the wrong footprint for the MPU, so I corrected it.", q.one("f06-1", "Corrected footprint")],
    },
    {
      title: "The build",
      date: "10 Jun 2026",
      hours: 2,
      blocks: [
        "I built it, checked the PCB, code and connections, and updated GitHub.",
        q.one("f07-1", "Finished flight controller"),
        q.one("f07-2", "Bare PCB"),
        q.one("f07-3", "The MPU"),
        q.one("f07-4", "The soldering on the back"),
      ],
    },
  ],
};

// ───────────────────────── Laptop stand ─────────────────────────
const s = journalImgs("laptop-stand");

export const laptopStandGuide: Guide = {
  totalHours: 2.3,
  intro: ["A laptop stand with built-in storage for the things that clutter my desk."],
  steps: [
    {
      title: "Design",
      date: "19 Mar 2026",
      hours: 2,
      blocks: [
        "My desk has no spare space for my things, and a wired mouse and keyboard get messy. So I designed a stand that also holds things like a mouse and phone when they're not in use.",
        ...s.many("f01", 1, 3, "Laptop stand design"),
      ],
    },
    { title: "Printed and assembled", date: "28 Apr 2026", hours: 0.3, blocks: [...s.many("f02", 1, 3, "The finished stand")] },
  ],
};

// ───────────────────────── Spotify display ─────────────────────────
const p = journalImgs("spotify-display");

export const spotifyDisplayGuide: Guide = {
  totalHours: 7,
  intro: ["My first Stasis project: a small display that shows what's playing on Spotify, with play/pause and next buttons."],
  steps: [
    {
      title: "CAD",
      date: "18 Mar 2026",
      hours: 2,
      blocks: [
        "I read the project docs, downloaded the official models (ESP32, screen, buttons) and in Fusion made a case combining the ESP32 and screen into one standalone unit, plus a button holder.",
        ...p.many("f01", 1, 4, "Case design"),
      ],
    },
    {
      title: "Code",
      date: "18 Mar 2026",
      hours: 1,
      blocks: [
        "I learned how the Spotify API works and integrated it with the ESP32 code in C++.",
        ...p.many("f02", 1, 3, "Code"),
        lesson("API keys shouldn't go in public files — I needed a way to keep them out of the repo."),
      ],
    },
    {
      title: "Print-ready CAD and circuit",
      date: "23 Mar 2026",
      hours: 1,
      blocks: [
        "I separated the parts for printing, removing the electronics from the print bodies.",
        ...p.many("f03", 1, 2, "Print-ready parts"),
        "Then the circuit in Fritzing: screen, ESP32 and buttons. (The wire colours are only to tell them apart.)",
        p.one("f03-3", "Circuit"),
      ],
    },
    {
      title: "Adding a power switch",
      date: "1 Apr 2026",
      hours: 1,
      blocks: ["Following feedback I added screenshots to the README, and added an on/off switch I'd forgotten.", ...p.many("f04", 1, 3, "Final CAD with switch")],
    },
    {
      title: "The build",
      date: "14 Apr 2026",
      hours: 2,
      blocks: [
        p.one("f05-1", "The finished display"),
        "The original buttons were out of stock, so I used a coloured button board instead — same logic. On power-up it shows Wi-Fi status, then play/pause and next work.",
        ...p.many("f05", 2, 3, "Button board"),
        "The printed parts, and how the back closes.",
        ...p.many("f05", 4, 7, "Printed parts and back"),
      ],
    },
  ],
};

// ───────────────────────── Blinky board ─────────────────────────
const k = journalImgs("blinky-board");

export const blinkyGuide: Guide = {
  totalHours: 6.3,
  intro: ["My first PCB: an LED timer board, from learning what an IC is to soldering it together."],
  steps: [
    {
      title: "Learning the parts",
      date: "15 Mar 2026",
      hours: 0.7,
      blocks: [
        "I learned the components and how to use KiCad. The hardest part was understanding the ICs — chips designed for specific tasks. The timer IC is what makes the LEDs step like a clock.",
        ...k.many("f01", 1, 2, "First schematic"),
      ],
    },
    {
      title: "Schematic and zero errors",
      date: "26 Mar 2026",
      hours: 2,
      blocks: [
        "I fixed the footprint assignments, wired everything and checked it in 3D — then found I'd left out resistor and capacitor values, and reworked the schematic until it had zero errors.",
        ...k.many("f02", 1, 4, "Schematic, 3D and zero errors"),
      ],
    },
    {
      title: "A smaller PCB",
      date: "15 Apr 2026",
      hours: 1.7,
      blocks: ["The board was too big, so I redid the layout and routing, then priced it on JLCPCB.", ...k.many("f03", 1, 3, "New layout and 3D")],
    },
    {
      title: "The build",
      date: "18 Jun 2026",
      hours: 2,
      blocks: [
        "I checked the part placement, soldered small parts first and big ones last, then the LEDs, and powered it on. After a few small fixes the LEDs ran in the hourglass-style timer pattern.",
        ...k.many("f04", 1, 3, "The finished board"),
      ],
    },
  ],
};
