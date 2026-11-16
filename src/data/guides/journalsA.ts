import { journalImgs, lesson, type Guide } from "./types";

// ───────────────────────── GD32F450 devboard ─────────────────────────
const g = journalImgs("gd32-devboard");

export const gd32Guide: Guide = {
  totalHours: 59,
  intro: [
    "How I designed a full development board around the GD32F450ZGT6 — a 144-pin Cortex-M4 — in KiCad, recreating the Liangshanpai reference design: custom symbols and footprints, SDRAM, an LCD interface, microSD, SPI flash, USB-C and power, then a 4-layer layout and starter firmware.",
  ],
  steps: [
    {
      title: "Starting point: studying the chip",
      date: "3 Nov 2026",
      hours: 3,
      blocks: [
        "The GD32F450ZGT6 is an ARM Cortex-M4 running at up to 200 MHz, with 1 MB of flash and 256 KB of SRAM, in a 144-pin LQFP package — a lot of pins to get right. I read the datasheet for the power pins, GPIO, clocks, reset, boot configuration and communication interfaces, and found the GD32F4xx hardware development guide, which covers decoupling and hardware connections.",
        g.one("f01-1", "GD32F450 datasheet"),
        "Next I studied the reference schematic to see how the power circuit, crystal, debug interface and other blocks connect.",
        g.one("f01-2", "Reference material"),
      ],
    },
    {
      title: "Making the MCU symbol from scratch",
      date: "4 Nov 2026",
      hours: 3,
      blocks: [
        "KiCad had no symbol for the GD32F450ZGT6, so I built one from the datasheet. The datasheet covers both the 100-pin and 144-pin versions; I started from an empty symbol, added the first pin (PE2) and worked around the edges.",
        ...g.many("f02", 1, 4, "Building the GD32F450 symbol"),
        "I ended up making both the 100-pin and the 144-pin versions.",
      ],
    },
    {
      title: "Making the footprint",
      date: "4 Nov 2026",
      hours: 2,
      blocks: [
        "Then the footprint. I used the grid to place pads quickly and took every dimension from the package table in the datasheet.",
        ...g.many("f03", 1, 6, "Footprint dimensions and pads"),
        "I created a new project, imported the schematic and footprint, and checked it in 3D.",
        ...g.many("f03", 7, 10, "Footprint imported and in 3D"),
      ],
    },
    {
      title: "Wiring the MCU",
      date: "5 Nov 2026",
      hours: 2,
      blocks: [
        "I connected the core of the MCU: every VSS and VDD pin, the decoupling capacitor values across all 144 pins, and the crystals on PH0/PH1 and PC14/PC15.",
        ...g.many("f04", 1, 4, "MCU power, decoupling and crystals"),
        lesson("Next up was the W9825G6KH-6I SDRAM — no symbol existed for it either."),
      ],
    },
    {
      title: "SDRAM symbol and footprint",
      date: "5 Nov 2026",
      hours: 2,
      blocks: [
        "I made a symbol for the W9825G6KH-6I in my own KiCad library, with every pin numbered and named from the datasheet.",
        ...g.many("f05", 1, 3, "SDRAM symbol"),
        "KiCad already had the right footprint (TSOP-II-54, 22.2 × 10.16 mm, 0.8 mm pitch) with a 3D model, so the SDRAM had a full symbol, footprint and model.",
        g.one("f05-4", "SDRAM in 3D"),
      ],
    },
    {
      title: "Completing the SDRAM circuit",
      date: "5 Nov 2026",
      hours: 2,
      blocks: [
        "I wired the SDRAM from its datasheet: the DQ data pins to the matching MCU pins, A0–A12 to the EXMC address pins, the clock, chip-select and read/write control signals, and 3.3 V and ground. All seven 100 nF decoupling capacitors go between 3V3 and GND.",
        ...g.many("f06", 1, 4, "SDRAM wiring and decoupling"),
        g.one("f06-5", "Schematic so far"),
      ],
    },
    {
      title: "RGB565 and the 8080 parallel LCD interface",
      date: "5 Nov 2026",
      hours: 3,
      blocks: [
        ...g.many("f07", 1, 3, "SDRAM and LCD interface"),
        "The EXMC peripheral connects external memory and also drives the LCD. I connected the EXMC address lines (A0–A12), the 16-bit data bus (D0–D15), the SDRAM control signals (SDR_CLK, CKE0, NCAS, NRAS, NWE, NE0) and the bank address lines.",
        g.one("f07-4", "EXMC connections"),
        "16 data lines suit RGB565, where each pixel is 16 bits — 5 red, 6 green, 5 blue — for 65,536 colours.",
        "The display connector uses an 8080 parallel interface. I mapped the FPC connector: D0–D15 for data, NE3 as chip select, A10 for address/command select, NWE and NOE for write and read, plus LCD reset, backlight and interrupt. SPI3 and the touch I²C lines go there too.",
        ...g.many("f07", 5, 7, "8080 LCD connector"),
        lesson("The same EXMC peripheral handles external memory and the LCD's parallel bus — seeing the SDRAM, MCU and display share it was the most interesting part."),
      ],
    },
    {
      title: "Boot, reset and wake-up buttons",
      date: "5 Nov 2026",
      hours: 1.5,
      blocks: [
        "Boot: two 10 kΩ pull-downs keep BOOT0/BOOT1 low so it boots from internal flash; a button pulls BOOT0 to 3.3 V to change the boot mode.",
        g.one("f08-1", "Boot configuration"),
        "Reset: a 10 kΩ pull-up holds RESET high, a button pulls it to ground, and a 10 µF capacitor sits between RESET and GND.",
        g.one("f08-2", "Reset button"),
        "Wake-up: a 10 kΩ pull-down keeps PA0 low and a button pulls it high, so firmware can wake the chip from low power.",
        g.one("f08-3", "Wake-up button"),
        g.one("f08-4", "Boot, reset and wake-up together"),
      ],
    },
    {
      title: "MicroSD, USB-C, SPI flash and power",
      date: "5 Nov 2026",
      hours: 4,
      blocks: [
        "MicroSD: SDIO D0–D3, CLK and CMD go to the MCU, with 10 kΩ pull-ups on the lines that need them.",
        ...g.many("f09", 1, 2, "MicroSD card"),
        "USB-C: D+ and D− to the MCU, 5.1 kΩ resistors on CC1 and CC2 so the host sees a sink, TVS protection on the data lines, and VBUS to the 5 V rail.",
        ...g.many("f09", 3, 4, "USB-C"),
        "SPI flash: a W25Q128JV for extra non-volatile memory, with a 10 kΩ pull-up on chip select and 100 nF decoupling.",
        ...g.many("f09", 5, 6, "SPI flash"),
        "Power: an AP63203WU buck converter turns 5 V into 3.3 V with a 2.2 µH inductor, TVS protection on both rails, a fuse on the 5 V input and 0 Ω jumpers to split analogue and digital power.",
        ...g.many("f09", 7, 8, "Power supply"),
        ...g.many("f09", 9, 10, "All four sections in the main schematic"),
      ],
    },
    {
      title: "Finishing the schematic",
      date: "5 Nov 2026",
      hours: 3,
      blocks: [
        "Four LEDs on PE3, PD7, PG3 and PA5 with 4.7 kΩ resistors.",
        g.one("f10-1", "LEDs"),
        "An 8-pin DAPLink header for programming and debugging: UART TX/RX, SWDIO, SWCLK, 5 V and GND.",
        g.one("f10-2", "DAPLink header"),
        "A power LED and four mounting holes.",
        g.one("f10-3", "Power LED and mounting holes"),
        "Two GPIO headers — the left with VBAT, 3.3 V, 5 V and GND; the right with RESET, BOOT1, 3.3 V, 5 V and GND.",
        g.one("f10-4", "GPIO headers"),
        g.one("f10-5", "Complete schematic, six sections"),
      ],
    },
    {
      title: "Assigning footprints",
      date: "5 Nov 2026",
      hours: 3,
      blocks: [
        "I assigned a footprint to every resistor, capacitor, IC, diode, connector and switch by package and pin layout. The original design used custom EasyEDA footprints, so I found KiCad equivalents — especially for the connectors and switches — and checked for mismatches against the original BOM.",
        ...g.many("f11", 1, 2, "Footprint assignment"),
        "Updating the PCB from the schematic gave zero errors.",
        ...g.many("f11", 3, 4, "PCB update with no errors"),
      ],
    },
    {
      title: "Studying the firmware demo",
      date: "5 Nov 2026",
      hours: 3,
      blocks: [
        "Before routing, I switched to software: studying the GD32F450 demo code to learn how it's structured and how it drives the peripherals — the starting point for my own firmware.",
        ...g.many("f12", 1, 3, "GD32 demo code"),
      ],
    },
    {
      title: "Routing the MCU, USB-C and microSD",
      date: "5 Nov 2026",
      hours: 3,
      blocks: [
        "I started with the MCU — 144 pins, the hardest part — routing power and decoupling to nearby parts and avoiding crossings.",
        g.one("f13-1", "MCU routing"),
        "Then USB-C (data, power and supporting parts), then the microSD over SDIO, which has closely spaced pads.",
        g.one("f13-2", "USB-C routing"),
        g.one("f13-3", "MicroSD routing"),
        ...g.many("f13", 4, 5, "Board so far, and in 3D"),
      ],
    },
    {
      title: "Placement and power planes",
      date: "5 Nov 2026",
      hours: 3.5,
      blocks: [
        "The MCU went on the left with the SDRAM grouped beside it, GPIO headers along the sides, and USB-C and microSD on the edges.",
        ...g.many("f14", 1, 2, "Component placement"),
        "I routed the AP63203 buck converter with short +5 V, +3V3 and GND paths.",
        g.one("f14-3", "Power supply routing"),
        "The second copper layer became a GND plane and the next a +3V3 plane.",
        g.one("f14-4", "GND plane"),
        g.one("f14-5", "3.3 V plane"),
        ...g.many("f14", 6, 7, "3D view"),
      ],
    },
    {
      title: "Routing and the first DRC",
      date: "5 Nov 2026",
      hours: 7,
      blocks: [
        "I routed the remaining connections between the MCU, SDRAM, connectors and GPIO headers, then added copper zones so ground and 3.3 V reach the right pads.",
        g.one("f15-1", "Routing progress"),
        g.one("f15-2", "Copper zones"),
        ...g.many("f15", 3, 4, "Front and back in 3D"),
        "The first Design Rules Check found edge-clearance errors, incomplete thermal connections, via warnings, silkscreen off the board and 69 disconnected items.",
        g.one("f15-5", "First DRC"),
      ],
    },
    {
      title: "Finishing the 4-layer PCB",
      date: "5 Nov 2026",
      hours: 7,
      blocks: [
        g.one("f16-1", "Fresh PCB"),
        "I re-placed every component and checked the front and back in 3D.",
        ...g.many("f16", 2, 4, "Placement and 3D check"),
        "Then routed it as a 4-layer board — GND, GND, 3.3 V, GND — with zones for power and ground.",
        g.one("f16-5", "Routed board"),
        "Final count: 583 pads, 295 vias, 4,558 track segments, 147 nets, 0 unrouted.",
        g.one("f16-6", "Board statistics"),
        "DRC found two thermal-relief errors on J5 and J1 — each ground pad had only one spoke. I improved the copper and added vias.",
        g.one("f16-7", "Fixing the thermal reliefs"),
        "Final DRC: 0 errors and 0 unconnected, with 148 warnings, mostly silkscreen.",
        g.one("f16-8", "Final DRC"),
      ],
    },
    {
      title: "USB-C model and silkscreen",
      date: "5 Nov 2026",
      hours: 2,
      blocks: [
        "I added a STEP model for the USB-C connector, adjusted its offset to line up with the footprint, and added a simple silkscreen design.",
        g.one("f17-1", "USB-C 3D model"),
        ...g.many("f17", 2, 3, "Final board, front and back"),
      ],
    },
    {
      title: "BOM, pricing and GitHub",
      date: "5 Nov 2026",
      hours: 2,
      blocks: [
        "Uploading the Gerbers to JLCPCB priced the PCB at about $30. Building the BOM for 90+ components took a while. Then everything went on GitHub.",
        g.one("f18-1", "JLCPCB quote"),
        g.one("f18-2", "Files on GitHub"),
        ...g.many("f18", 3, 5, "BOM"),
      ],
    },
    {
      title: "Starter firmware",
      date: "5 Nov 2026",
      hours: 3,
      blocks: [
        "Using the GD32F4xx standard peripheral library I set up a board config header and main file, then USART0 at 115200 baud (8-N-1) for serial debug and a 1 ms SysTick with a millisecond counter.",
        "An internal SRAM test writes 0x00000000, 0xFFFFFFFF, 0xAAAAAAAA, 0x55555555, 0xA5A5A5A5 and 0x5A5A5A5A. A serial console takes help, info (MCU and clock), ram (memory test), uptime and reset.",
        ...g.many("f19", 1, 3, "Firmware"),
      ],
    },
  ],
  next: ["Drivers for the external SDRAM, SPI flash, microSD and USB", "Fix the remaining silkscreen warnings", "Order the board and test the hardware"],
};

// ───────────────────────── USB hub ─────────────────────────
const u = journalImgs("usb-hub");

export const usbHubGuide: Guide = {
  totalHours: 21,
  intro: [
    "How I designed a USB 2.0 hub — one USB-C upstream port, four USB-A downstream ports — around the FE1.1s controller, then a 3D-printed case for it.",
  ],
  steps: [
    {
      title: "Planning the hub",
      date: "1 Nov 2026",
      hours: 2,
      blocks: [
        "A hub has three parts: upstream (to the laptop — USB-C here), downstream (to devices — four USB-A ports), and the controller that passes data between them — the FE1.1s.",
        ...u.many("f01", 1, 3, "USB-C, USB-A and the FE1.1s"),
        "A USBLC6-2SC6 protects against voltage spikes and a TPS2041B limits current.",
        u.one("f01-4", "USBLC6-2SC6 protection"),
        u.one("f01-5", "Schematic so far"),
      ],
    },
    {
      title: "Completing the schematic",
      date: "1 Nov 2026",
      hours: 3,
      blocks: [
        "A 12 MHz crystal on XIN/XOUT, a 2.7 kΩ resistor from REXT to ground, and VSS to ground.",
        ...u.many("f02", 1, 3, "Crystal, REXT and ground"),
        "Each USB-A port connects to VBUS, GND, shield and its own D+/D− pair (1–4), with 100 µF from VBUS to ground to smooth the supply.",
        ...u.many("f02", 4, 6, "USB-A ports"),
        u.one("f02-7", "Controller section"),
        u.one("f02-8", "Complete schematic"),
      ],
    },
    {
      title: "Layout, routing and 3D",
      date: "1 Nov 2026",
      hours: 5,
      blocks: [
        "I imported everything, placed each capacitor next to the part it serves, drew the board outline and routed it to zero unrouted connections.",
        ...u.many("f03", 1, 6, "Layout and routing"),
        "I found 3D models for the USB-C and USB-A connectors and filled both layers with ground.",
        ...u.many("f03", 7, 8, "3D models and ground fill"),
        ...u.many("f03", 9, 10, "The finished board in 3D"),
      ],
    },
    {
      title: "Mounting holes and silkscreen",
      date: "1 Nov 2026",
      hours: 2,
      blocks: [
        "To screw the board into a case I added 3 mm mounting holes — four didn't fit, so it has three.",
        ...u.many("f04", 1, 4, "Mounting holes"),
        ...u.many("f04", 5, 6, "Final PCB"),
      ],
    },
    {
      title: "Designing the case",
      date: "1 Nov 2026",
      hours: 4,
      blocks: [
        "I exported the board from KiCad into Fusion 360, made a base with posts for the mounting holes, then built the shell around it.",
        ...u.many("f05", 1, 8, "Building the case"),
        "1 mm holes let the top and bottom halves screw together.",
        ...u.many("f05", 9, 10, "Screw holes and the finished case"),
      ],
    },
    {
      title: "Pricing, BOM and GitHub",
      date: "1 Nov 2026",
      hours: 3,
      blocks: [
        "JLCPCB priced the PCB from the Gerbers, then the KiCad files, Gerbers, BOM, README and CAD went to GitHub.",
        ...u.many("f06", 1, 4, "Quote, files and BOM"),
      ],
    },
    {
      title: "Final fixes",
      date: "4 Nov 2026",
      hours: 2,
      blocks: [
        "I added the 1 mm screws to the BOM, exported the case as two printable STLs, and updated the assembly section on GitHub.",
        ...u.many("f07", 1, 5, "Fixes and assembly notes"),
      ],
    },
  ],
};

// ───────────────────────── STM32 flight controller ─────────────────────────
const s = journalImgs("stm-flight-controller");

export const stmFlightGuide: Guide = {
  totalHours: 26.5,
  intro: [
    "How I designed an STM32F405 flight controller in KiCad — sensors, power, a compact layout and sensor-calibration firmware. Some early journal entries were lost on the platform, so those steps are shorter.",
  ],
  steps: [
    {
      title: "Choosing the features",
      date: "9 Aug 2026",
      hours: 1.1,
      blocks: [
        "I listed the features I wanted and gathered symbols, footprints and datasheets: an MPU6050 for motion, and a barometer for altitude.",
        ...s.many("f01", 1, 2, "Planning"),
      ],
    },
    {
      title: "The power section",
      date: "10 Aug 2026",
      hours: 2.4,
      blocks: [
        "I designed the buck converter and power management so the MCU and sensors get a stable supply with enough headroom.",
        ...s.many("f02", 1, 2, "Buck converter"),
      ],
    },
    {
      title: "Adding the sensors",
      date: "10 Aug 2026",
      hours: 3.3,
      blocks: ["I added the sensors and brought the schematic close to done.", s.one("f03-1", "Schematic progress")],
    },
    {
      title: "Finishing the schematic and footprints",
      date: "22 Aug 2026",
      hours: 4.3,
      blocks: [
        "With the schematic complete, I assigned footprints to all ~96 components, checking each one matches the package I'll actually buy.",
        ...s.many("f04", 1, 3, "Schematic and footprints"),
      ],
    },
    {
      title: "Placement",
      date: "29 Oct 2026",
      hours: 1.5,
      blocks: [
        "I placed everything compactly and routed a few short paths to start.",
        s.one("f05-1", "Placement"),
        s.one("f05-2", "3D view"),
      ],
    },
    {
      title: "Routing",
      date: "29 Oct 2026",
      hours: 1,
      blocks: ["Good placement made routing quick — it was done in one go.", ...s.many("f06", 1, 4, "Routing")],
    },
    {
      title: "Fixing errors and redesigning",
      date: "29 Oct 2026",
      hours: 4,
      blocks: [
        "The design wasn't good enough and had errors, so I redesigned part of it — including widening the 5 V tracks, which I'd made too thin.",
        ...s.many("f07", 1, 2, "Errors"),
        ...s.many("f07", 3, 5, "Updated layout and routing"),
        ...s.many("f07", 6, 7, "Wider 5 V tracks"),
        "I filled the zones and added vias to ground. The remaining errors were board constraints that JLCPCB can manufacture.",
        s.one("f07-8", "Ground fill and vias"),
      ],
    },
    {
      title: "Silkscreen, BOM and GitHub",
      date: "30 Oct 2026",
      hours: 3,
      blocks: ["I added the silkscreen and built the BOM, which took the longest.", ...s.many("f08", 1, 5, "Silkscreen and BOM")],
    },
    {
      title: "Calibration firmware",
      date: "30 Oct 2026",
      hours: 4,
      blocks: [
        "I wrote the sensor-calibration code: calibration.c/.h compute sensor offsets, sensor_calibration.c/.h handle the sensor-specific reads, and calibration_example shows how to use them in flight firmware.",
        ...s.many("f09", 1, 6, "Calibration code"),
      ],
    },
    {
      title: "Updates from feedback",
      date: "31 Oct 2026",
      hours: 2,
      blocks: ["I changed a few components based on review feedback, updated the BOM and pushed the changes.", ...s.many("f10", 1, 7, "Updates")],
    },
  ],
};
