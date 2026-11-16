import { journalImgs, lesson, type Guide } from "./types";

// ───────────────────────── Keyboard v2 (wireless) ─────────────────────────
const k = journalImgs("keyboard-v2");

export const keyboardV2Guide: Guide = {
  totalHours: 29.9,
  intro: [
    "How I designed my second keyboard — wireless, on a XIAO nRF52840 with an MCP23017 I/O expander — from the first schematic to a routed PCB, a case and test code. Some early entries were lost on the platform, so those steps are short.",
  ],
  steps: [
    {
      title: "Deciding the features",
      date: "28 Jul 2026",
      hours: 1,
      blocks: ["My last keyboard had no lights, so this one should have LEDs and the option to attach an external screen.", k.one("f01-1", "Inspiration")],
    },
    {
      title: "Starting the schematic",
      date: "28 Jul 2026",
      hours: 2.7,
      blocks: [
        "I planned how the keys connect in a matrix and added the main components, making sure there were enough pins for every key and room for extras.",
        k.one("f02-1", "First schematic"),
      ],
    },
    {
      title: "LEDs and display",
      date: "29 Jul 2026",
      hours: 1.2,
      blocks: [k.one("f03-1", "LED and display section"), "I added the LEDs and a connector for an external display, keeping the circuit from getting too complicated."],
    },
    {
      title: "USB-C, display and the MCP23017",
      date: "1 Aug 2026",
      hours: 2.3,
      blocks: [k.one("f04-1", "USB-C, display and MCP23017"), "The MCP23017 I/O expander adds GPIO pins for the key matrix. I also wired the USB-C and display connections."],
    },
    {
      title: "XIAO nRF52840, battery and charging",
      date: "3 Aug 2026",
      hours: 3,
      blocks: [
        "To make it wireless I added the Seeed XIAO nRF52840 as the controller, plus a battery and charging circuit, then wired everything to check it works together.",
        k.one("f05-1", "Controller and battery"),
      ],
    },
    {
      title: "Fixing the USB-C footprint",
      date: "4 Aug 2026",
      hours: 1.2,
      blocks: ["The USB-C pads are tiny and must line up exactly for soldering, so I replaced the footprint with the right one.", ...k.many("f06", 1, 2, "USB-C footprint")],
    },
    {
      title: "First layout",
      date: "11 Aug 2026",
      hours: 1.5,
      blocks: ["I placed the switch footprints to keep the board as small as possible while leaving room for everything else.", k.one("f07-1", "Switch positions")],
    },
    {
      title: "Second layout",
      date: "12 Aug 2026",
      hours: 2,
      blocks: ["I tidied the placement and checked there's enough space between switches and parts.", k.one("f08-1", "Improved layout")],
    },
    {
      title: "A new design",
      date: "15 Oct 2026",
      hours: 1,
      blocks: ["I switched to a new layout like this one, with a rotary encoder at the top.", k.one("f09-1", "New layout reference")],
    },
    {
      title: "Aligning the diodes",
      date: "31 Oct 2026",
      hours: 1,
      blocks: [
        ...k.many("f10", 1, 3, "Diode placement"),
        "I flipped every diode to the back and lined each one up with its switch so nothing collides — about 80 times — then routed them.",
      ],
    },
    {
      title: "Dropping the LEDs and finishing the routing",
      date: "31 Oct 2026",
      hours: 4,
      blocks: [
        "After several tries I couldn't route the LEDs, so I removed them.",
        ...k.many("f11", 1, 2, "Board without LEDs"),
        "Then I finished the placement and routed everything.",
        ...k.many("f11", 3, 9, "Placement and routing"),
        lesson("Sometimes the right call is cutting a feature: the LEDs made the board unroutable."),
      ],
    },
    {
      title: "The case",
      date: "31 Oct 2026",
      hours: 3,
      blocks: [
        "I exported the PCB to CAD, built the top layer around it and added 3 mm spacing for screws.",
        ...k.many("f12", 1, 5, "Building the case"),
      ],
    },
    {
      title: "DRC fixes and ground",
      date: "31 Oct 2026",
      hours: 1,
      blocks: ["I fixed the DRC errors and filled three layers with ground.", ...k.many("f13", 1, 3, "Ground fill and final board")],
    },
    {
      title: "GitHub, BOM and PCB cost",
      date: "31 Oct 2026",
      hours: 3,
      blocks: ["I set up the repository, uploaded the files, priced the PCB and added the BOM.", ...k.many("f14", 1, 6, "GitHub, quote and BOM")],
    },
    {
      title: "Code",
      date: "31 Oct 2026",
      hours: 2,
      blocks: ["I wrote the code in Python and pushed it.", ...k.many("f15", 1, 3, "Code")],
    },
  ],
};

// ───────────────────────── N20 RC car ─────────────────────────
const n = journalImgs("n20-rc-car");

export const n20Guide: Guide = {
  totalHours: 13.9,
  intro: ["How I built a small four-wheel RC car with N20 motors and an ESP32 that hosts its own control page — from CAD to a car that drives."],
  steps: [
    {
      title: "Research and CAD",
      date: "11 Oct 2026",
      hours: 3,
      blocks: [
        "N20 motors are tiny but spin at around 1000 RPM — perfect for a small car I could later add a custom controller to.",
        n.one("f01-1", "N20 motor"),
        "I wanted something like this, but my own design.",
        n.one("f01-2", "Inspiration"),
        "I downloaded models of the N20 motors, ESP32, buck converter, TB6612FNG motor driver and battery holder, then arranged them in CAD: motors first, then mounts and space for the battery.",
        ...n.many("f01", 3, 5, "Designing the chassis"),
      ],
    },
    {
      title: "3D prints and assembly",
      date: "11 Oct 2026",
      hours: 2,
      blocks: [
        "I soldered the motor driver, printed the parts, wired the motors and fitted the mounts, motors and wheels.",
        ...n.many("f02", 1, 6, "Printing and assembly"),
      ],
    },
    {
      title: "The circuit",
      date: "12 Oct 2026",
      hours: 1,
      blocks: ["Before wiring, I drew the circuit in Fritzing: two 18650 cells, four N20 motors, an ESP32, a buck converter and a TB6612FNG driver.", n.one("f03-1", "Fritzing circuit")],
    },
    {
      title: "Wiring and the first test",
      date: "12 Oct 2026",
      hours: 2.5,
      blocks: [
        "I added the battery, set the buck converter to 5 V and connected the ESP32 and driver.",
        n.one("f04-1", "Wiring"),
        "The first sketch drives both sides forward for 2 seconds, stops, reverses for 2 seconds and stops again, using PWM at 1 kHz with 8-bit resolution and the driver's standby pin.",
        ...n.many("f04", 2, 4, "Motor test code"),
      ],
    },
    {
      title: "Finishing the car and Wi-Fi control",
      date: "13 Oct 2026",
      hours: 3.5,
      blocks: [
        "I soldered the motors, mounted the ESP32 and finished the wiring, then tested until it moved.",
        ...n.many("f05", 1, 4, "Assembled car"),
        "Then the Wi-Fi code: the ESP32 hosts its own network and a control page with direction buttons and speed.",
        ...n.many("f05", 5, 7, "Wi-Fi code and control page"),
        n.one("f05-8", "Driving it"),
      ],
    },
    {
      title: "GitHub",
      date: "14 Oct 2026",
      hours: 1,
      blocks: ["I uploaded the code, images, videos and README.", ...n.many("f06", 1, 2, "GitHub")],
    },
    {
      title: "Redoing the CAD",
      date: "19 Oct 2026",
      hours: 1,
      blocks: [
        "I hadn't saved the STEP files, so I rebuilt the CAD and pushed them.",
        ...n.many("f07", 1, 3, "Rebuilt CAD"),
        lesson("Save your source files — I had to redo the whole CAD."),
      ],
    },
  ],
};

// ───────────────────────── STM32H573 devboard ─────────────────────────
const t = journalImgs("stm-devboard");

export const stmDevboardGuide: Guide = {
  totalHours: 16,
  intro: ["How I designed an STM32H573 development board in KiCad — USB-C power and upload, boot and reset buttons, a 4-layer board and test firmware."],
  steps: [
    {
      title: "What we're building",
      date: "7 Oct 2026",
      hours: 1,
      blocks: [
        "The STM32H573 gives high performance and plenty of memory. The plan: USB-C for power and upload, boot and reset buttons, and the MCU itself, working from its datasheet.",
        t.one("f01-1", "Starting schematic"),
      ],
    },
    {
      title: "Starting the schematic",
      date: "7 Oct 2026",
      hours: 1.5,
      blocks: [
        "I placed the PA pins, then an 8 MHz crystal on PH0/PH1 as the datasheet describes.",
        ...t.many("f02", 1, 4, "Pins and crystal"),
        "Then NRST and BOOT0, with small capacitors to debounce the buttons.",
        ...t.many("f02", 5, 7, "Reset and boot buttons"),
      ],
    },
    {
      title: "USB-C and the regulator",
      date: "7 Oct 2026",
      hours: 2,
      blocks: [
        "I connected USB-C with a USBLC6 for protection, then built the 3.3 V regulator with an LD1117.",
        ...t.many("f03", 1, 5, "USB-C and regulator"),
      ],
    },
    {
      title: "Finishing the schematic",
      date: "8 Oct 2026",
      hours: 3.5,
      blocks: [
        "SWCLK and SWDIO labels, crystals, LEDs, the connector pins and decoupling capacitors.",
        ...t.many("f04", 1, 8, "Schematic sections"),
        "Then footprints for everything, and the import into the PCB editor.",
        ...t.many("f04", 9, 14, "Footprints and PCB import"),
      ],
    },
    {
      title: "Placement and routing",
      date: "9 Oct 2026",
      hours: 2.5,
      blocks: [
        t.one("f05-1", "Updated PCB"),
        "While routing I noticed the RGB LED's red, green and blue didn't match the schematic — a resistor placement mistake — so I fixed the schematic.",
        ...t.many("f05", 2, 3, "Placement and the fix"),
        "Then routed most of it except the headers.",
        ...t.many("f05", 4, 8, "Routing and 3D"),
      ],
    },
    {
      title: "Finishing the routing",
      date: "9 Oct 2026",
      hours: 2,
      blocks: [
        "I finished routing, with layer 2 as ground and layer 3 as 3.3 V.",
        ...t.many("f06", 1, 3, "Routing"),
        "DRC showed four errors, all from the USB-C footprint.",
        ...t.many("f06", 4, 6, "DRC and 3D"),
      ],
    },
    { title: "Silkscreen", date: "9 Oct 2026", hours: 0.5, blocks: [...t.many("f07", 1, 5, "Silkscreen")] },
    {
      title: "GitHub, BOM and test firmware",
      date: "9 Oct 2026",
      hours: 2.5,
      blocks: [
        "I uploaded the images, Gerbers, KiCad files and BOM (as CSV and in the README), then wrote basic test firmware.",
        ...t.many("f08", 1, 5, "GitHub, BOM and firmware"),
      ],
    },
    { title: "PCB cost and README", date: "11 Oct 2026", hours: 0.5, blocks: [...t.many("f09", 1, 2, "Quote and README")] },
  ],
};

// ───────────────────────── LoRa board ─────────────────────────
const l = journalImgs("lora");

export const loraGuide: Guide = {
  totalHours: 37,
  intro: [
    "How the LoRa board evolved through several reviews — from a first ESP32 version, to a redesign following the official Forge guide, an impedance fix, and finally an OLED display. Some sessions were lost on the platform, so a few steps are short.",
  ],
  steps: [
    {
      title: "First schematic",
      date: "7 Aug 2026",
      hours: 2,
      blocks: ["I started from an older guide with an ESP32, using an AMS1117 regulator — which a reviewer later told me to replace.", ...l.many("f01", 1, 2, "First schematic")],
    },
    { title: "First layout", date: "7 Aug 2026", hours: 3, blocks: ["I assigned footprints, laid out the board and fixed a few bugs.", l.one("f02-1", "First layout")] },
    {
      title: "Routing, silkscreen and pricing",
      date: "8 Aug 2026",
      hours: 2.4,
      blocks: [
        "I routed the board with the Freerouting plugin, added the silkscreen, and fixed two missing capacitor values and the inductor's 3D model.",
        ...l.many("f03", 1, 4, "Routing and silkscreen"),
        "Files went to GitHub, and I priced the PCB at Lion Circuits because it's made in India — no customs or international shipping.",
        ...l.many("f03", 5, 6, "GitHub and quote"),
      ],
    },
    {
      title: "A new schematic after review",
      date: "10 Aug 2026",
      hours: 2.7,
      blocks: ["After the review, I researched and rebuilt the schematic following the official Forge guide.", l.one("f04-1", "Review feedback")],
    },
    {
      title: "Routing round one",
      date: "12 Aug 2026",
      hours: 2,
      blocks: ["I routed the new board and asked a reviewer to check it.", ...l.many("f06", 1, 2, "First routing")],
    },
    {
      title: "Routing from scratch",
      date: "12 Aug 2026",
      hours: 2,
      blocks: [
        "Because of the issue found, I deleted the routing and redid the board.",
        ...l.many("f07", 1, 5, "Re-routing"),
        "It finished with zero DRC errors.",
        ...l.many("f07", 6, 11, "Finished board and 3D"),
        ...l.many("f07", 12, 14, "DRC results"),
      ],
    },
    { title: "Silkscreen", date: "13 Aug 2026", hours: 0.5, blocks: [l.one("f08-1", "Silkscreen")] },
    { title: "GitHub setup", date: "13 Aug 2026", hours: 0.7, blocks: [l.one("f10-1", "GitHub"), "Updated the files, README and Gerbers."] },
    { title: "Schematic fixes", date: "16 Aug 2026", hours: 1.3, blocks: [l.one("f11-1", "Schematic fix"), "Mostly adding missing resistor and capacitor values."] },
    { title: "PCB fixes", date: "17 Aug 2026", hours: 1.5, blocks: ["I fixed routes flagged by the Design Rules Checker.", ...l.many("f12", 1, 2, "DRC fixes")] },
    { title: "GitHub update", date: "17 Aug 2026", hours: 0.5, blocks: [l.one("f13-1", "Updated Gerbers and images")] },
    {
      title: "Test firmware",
      date: "20 Aug 2026",
      hours: 2.5,
      blocks: ["Basic firmware that runs setup and logs the current state to the console.", ...l.many("f14", 1, 2, "Test firmware")],
    },
    { title: "Redesigning the board", date: "26 Aug 2026", hours: 2, blocks: ["I deleted the routing and the outline and redesigned the board with a new shape.", l.one("f15-1", "New shape")] },
    {
      title: "Impedance fix",
      date: "27 Aug 2026",
      hours: 2,
      blocks: ["Following review, I set the RF trace impedance using JLCPCB's stack-up.", l.one("f16-1", "Impedance settings"), lesson("The RF path needs controlled impedance — the trace width comes from the board's layer stack-up.")],
    },
    { title: "Routing update", date: "12 Sep 2026", hours: 2.4, blocks: [l.one("f19-1", "Updated routing")] },
    { title: "Layout fixes", date: "15 Sep 2026", hours: 1.5, blocks: ["I redesigned and fixed the layout again.", ...l.many("f20", 1, 3, "Layout fixes")] },
    { title: "More fixes", date: "17 Sep 2026", hours: 1, blocks: [...l.many("f23", 1, 2, "Fixes")] },
    { title: "BOM update", date: "21 Sep 2026", hours: 1, blocks: ["Updated the BOM after review.", ...l.many("f24", 1, 2, "BOM")] },
    {
      title: "Adding an OLED display",
      date: "25 Sep 2026",
      hours: 1,
      blocks: [
        "To make it different I added an OLED display, assigned its footprint and updated the PCB.",
        ...l.many("f25", 1, 5, "Adding the OLED"),
        "Then updated GitHub and added the display to the BOM.",
        ...l.many("f25", 6, 9, "GitHub and BOM"),
      ],
    },
    {
      title: "Display code",
      date: "25 Sep 2026",
      hours: 1,
      blocks: ["I added display.h and display.cpp, called them from test.cpp and updated setup.", ...l.many("f26", 1, 6, "Display code")],
    },
  ],
};

// ───────────────────────── ESP32-S2 devboard ─────────────────────────
const e = journalImgs("esp32-devboard");

export const esp32DevboardGuide: Guide = {
  totalHours: 18.4,
  intro: ["How the ESP32-S2 devboard went from a first version to a redesign after review — fixing data-line length, the USB position, RF traces and impedance. Some early sessions were lost on the platform."],
  steps: [
    { title: "Schematic", date: "12 Aug 2026", hours: 3.5, blocks: ["I built the schematic and assigned footprints.", e.one("f01-1", "First version")] },
    { title: "First PCB", date: "12 Aug 2026", hours: 4, blocks: [e.one("f02-1", "Routed board")] },
    { title: "Silkscreen", date: "18 Aug 2026", hours: 0.5, blocks: [e.one("f03-1", "Silkscreen")] },
    { title: "GitHub", date: "12 Sep 2026", hours: 0.5, blocks: [e.one("f04-1", "GitHub")] },
    { title: "Redesign after review", date: "20 Sep 2026", hours: 1.5, blocks: [e.one("f05-1", "Review feedback"), "I redesigned the schematic to address the review."] },
    { title: "Routing the new version", date: "21 Sep 2026", hours: 4, blocks: [e.one("f06-1", "New routing")] },
    { title: "GitHub and BOM", date: "21 Sep 2026", hours: 0.4, blocks: [...e.many("f07", 1, 2, "BOM")] },
    {
      title: "Fixing issues",
      date: "25 Sep 2026",
      hours: 1,
      blocks: [
        "I shortened the USB data lines…",
        ...e.many("f08", 1, 2, "Data lines before and after"),
        "…moved the USB connector to the board edge — it was inside the board…",
        ...e.many("f08", 3, 4, "USB position fix"),
        "…connected two resistors I'd missed, and removed some 90° track turns.",
        ...e.many("f08", 5, 10, "Resistor and routing fixes"),
      ],
    },
    {
      title: "RF traces and impedance",
      date: "29 Sep 2026",
      hours: 2,
      blocks: [
        "I'd removed the ground around the RF traces, so I put it back, then made proper traces for the RF signals.",
        ...e.many("f09", 1, 6, "RF trace fixes"),
        "Then priced the PCB, added it to the BOM total, wrote assembly instructions and pushed.",
        ...e.many("f09", 7, 12, "Quote, BOM and assembly notes"),
        lesson("RF traces need ground around them — removing it changes their impedance."),
      ],
    },
    { title: "LED blink firmware", date: "7 Oct 2026", hours: 1, blocks: ["Small firmware to blink the LEDs.", ...e.many("f10", 1, 3, "Blink firmware")] },
  ],
};
