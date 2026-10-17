# ⏱️ Time Utility — Mechanical Flip Clock, Timer & Stopwatch (PWA)

<div align="center">

[![Live Demo](./assets/badges/vercel.svg)](https://timer-utility.vercel.app/)
[![License](./assets/badges/license.svg)](./LICENSE)
[![PWA Ready](https://img.shields.io/badge/PWA-100%25%20Offline-3b82f6?style=flat-square&logo=pwa&logoColor=white)](https://timer-utility.vercel.app/)
[![Fork of pqina/flip](https://img.shields.io/badge/Modified%20from-pqina%2Fflip-6366f1?style=flat-square&logo=github)](https://github.com/pqina/flip)
[![Dependencies](./assets/badges/dependencies.svg)](https://github.com/snishad0198/timer)
[![Audio](./assets/badges/audio.svg)](https://github.com/snishad0198/timer)
[![Screen](./assets/badges/screen.svg)](https://github.com/snishad0198/timer)
[![Platform](./assets/badges/platform.svg)](https://github.com/snishad0198/timer)

<p align="center">
  <b>A distraction-free, ultra-precise 3D mechanical flip clock, countdown timer with continuous synthesized alarms, and millisecond stopwatch.</b>
  <br />
  <i>Engineered as a full-fledged Progressive Web App (PWA) with 100% offline support, custom Web Audio synthesis, and an unbreakable mobile screen wake-lock engine.</i>
  <br /><br />
  🚀 <b>Live Deployment:</b> <a href="https://timer-utility.vercel.app/">https://timer-utility.vercel.app/</a>
  &nbsp;|&nbsp;
  📦 <b>Repository:</b> <a href="https://github.com/snishad0198/timer">snishad0198/timer</a>
</p>

</div>

---

## 📌 Open Source Lineage & Modifications Notice

> [!NOTE]
> **This repository is a modified, modernized, and significantly enhanced standalone version of the open-source [pqina/flip](https://github.com/pqina/flip) component library created by [Rik Schennink / PQINA](https://github.com/pqina) (MIT License).**

### 🔄 What was altered and added in this version:
* **Progressive Web App (PWA) Engine**: Converted the raw flip library into an installable, standalone web app with service worker offline caching, manifest configuration, app shortcuts, and custom install prompts.
* **100% Offline Capability**: Works without an internet connection once loaded; caches application shell, scripts, styles, audio generators, and local assets.
* **Complete Time Utility Suite**:
  * **12H / 24H Live Flip Clock** with live AM/PM badges and localized date header.
  * **Countdown Timer** with microsecond precision, quick preset chips (1m, 5m, 10m, 15m, 25m Pomodoro, 45m, 60m), and continuous audio alarm.
  * **4 Synthesized Web Audio Tones** (Digital Beep, Harmonic Chime, Radar Alert, Cosmic Bell) that ring indefinitely until dismissed with a dedicated glowing alert banner.
  * **High-Precision Lap Stopwatch** with millisecond split tracking and automated fastest (green) / slowest (red) highlights.
* **Screen Wake Lock Engine**: Native W3C Screen Wake Lock API integration with self-healing background watchdog so mobile and desktop screens never sleep during timers.
* **Clock Zoom & Canvas Panning**: Freeform draggable repositioning and clock card zoom scaling (50% to 200%) without altering toolbars or navigation layout.
* **Simulated Mobile Landscape Mode**: One-tap 90-degree UI rotation optimized for mobile desks and bedside clock stands.
* **Zen Mode**: Distraction-free presentation view hiding all chrome and controls.
* **Comprehensive Keyboard Accessibility**: Full hotkey control for all functions, shortcuts modal, and customizable theme settings.

---

## 🌟 Key Features

### 🕰️ Realistic 3D Mechanical Flip Clock
* **Split-Flap Kinetics**: Smooth 3D perspective fold animations simulating physical mechanical split-flap boards.
* **12H & 24H Formats**: Single-tap format toggle with live AM/PM badges and localized day/date headers.
* **Independent Seconds Toggle**: Hide or show seconds digits individually per mode without interrupting active timers.

### ⏳ Countdown Timer with Indefinite Alarm & 4 Selectable Tones
* **Precision Time Tracking**: Microsecond-accurate countdown with quick preset chips (1m, 5m, 10m, 15m, 25m Pomodoro, 45m, 60m).
* **Continuous Audio Alarm**: When the countdown completes, an alarm rings continuously until manually dismissed.
* **4 Curated Tones (Synthesized Web Audio API)**:
  1. 🔔 **Digital Beep**: Classic retro twin-pulse digital watch buzzer.
  2. 🎶 **Harmonic Chime**: Ascending melodic meditation arpeggio.
  3. 📡 **Radar Alert**: Rapid dynamic frequency sweep for urgent alerts.
  4. 🧘 **Cosmic Bell**: Deep resonant metallic gong chime.
* **Instant Test Preview**: Preview any tone directly from the Settings Modal.
* **Prominent "STOP ALARM (OFF)" Banner**: Instant alert bar with pulsating glow, dismissible via touchscreen, mouse, or <kbd>Space</kbd>/<kbd>Esc</kbd>.

### ⏱️ High-Precision Lap Stopwatch
* **Millisecond Counter**: Sub-second counter badge displaying continuous `.000` resolution.
* **Smart Lap Splitter**: Instant lap logging with automatic fastest (<span style="color:#10b981">green</span>) and slowest (<span style="color:#ef4444">red</span>) lap highlights.

### 📱 Unbreakable Mobile Keep-Awake Engine
* **No More Screen Sleep**: Mobile displays stay permanently ON while using the timer or clock.
* **Native Screen Wake Lock API**: Runs cleanly on modern mobile and desktop browsers on HTTPS and localhost.
* **Active Watchdog**: Self-healing background monitor automatically reclaims display lock if tab is switched or briefly interrupted.

### 🔍 Clock-Only Zoom & Custom Drag Repositioning
* **Focused Zoom**: Scale the mechanical clock cards from **50% to 200%** using dedicated header controls or pinch gestures without magnifying or distorting the navigation bar or footer.
* **Freeform Panning**: Drag and reposition the clock anywhere across the canvas for custom desk setups and streaming overlays.

### 🧘 Zen Mode & Presentation Layouts
* **Distraction-Free Zen**: Press <kbd>H</kbd> or click Zen to fade out all UI controls, leaving only the mechanical flip clock.
* **Curated Themes**: Obsidian Night, OLED Blackout, Slate Steel, and Retro Amber with full custom accent tinting.

---

## 📲 Progressive Web App (PWA) & Offline Installation

Time Utility is a certified Progressive Web App that works seamlessly on desktop and mobile devices:

* **Desktop (Chrome / Edge / Brave / Opera)**: Click the **Install App** icon in the address bar or bottom utility bar to run Time Utility as a standalone window.
* **Android (Chrome)**: Tap **Install App** from the in-app banner or browser menu (`⋮` &gt; *Add to Home screen*).
* **iOS / iPadOS (Safari)**: Tap the Share button (`⎋`), scroll down, and select **Add to Home Screen**.

---

## ⌨️ Keyboard Shortcuts

| Shortcut | Action |
| :---: | :--- |
| <kbd>Space</kbd> | Start / Pause active mode (or Stop ringing alarm) |
| <kbd>R</kbd> | Reset Countdown / Stopwatch |
| <kbd>L</kbd> | Record Lap split (Stopwatch mode) |
| <kbd>S</kbd> | Toggle Seconds visibility (current mode) |
| <kbd>1</kbd> / <kbd>2</kbd> / <kbd>3</kbd> | Switch to Live Clock / Countdown / Stopwatch |
| <kbd>T</kbd> | Toggle 12-Hour / 24-Hour Time Format |
| <kbd>O</kbd> | Toggle Clock Layout (Stacked / Wide) |
| <kbd>H</kbd> | Toggle Distraction-Free Zen Mode (<kbd>Space</kbd> to restore) |
| <kbd>F</kbd> | Toggle Fullscreen |
| <kbd>+</kbd> / <kbd>-</kbd> / <kbd>0</kbd> | Zoom Clock In / Out / Reset (100%) |
| <kbd>Arrow Keys</kbd> | Nudge clock position (<kbd>Shift</kbd> for faster move) |
| <kbd>?</kbd> | Open Shortcuts & Developer Information |
| <kbd>Esc</kbd> | Close Modals / Exit Zen Mode / Stop Alarm |

---

## 🚀 Quick Start & Local Development

This project has **zero external runtime framework dependencies** and runs directly in any modern browser.

### 1. Clone the Repository
```bash
git clone https://github.com/snishad0198/timer.git
cd timer
```

### 2. Start the Local Server
```bash
# Using Node.js dev server (handles SPA deep links & PWA service worker headers)
npm run dev
# or
node dev-server.js
```

### 3. Open in Browser
Visit `http://localhost:3000/` or access it across your local network using your machine's IP (e.g., `http://192.168.1.X:3000/`).

### 4. Build Production Distribution (Optional)
```bash
npm run build
```

---

## 📁 Project Architecture

```
timer/
├── assets/
│   ├── icons/               # PWA icon suite (SVG, 16px to 512px, maskable)
│   ├── badges/              # Markdown SVG status badges
│   └── profile.jpg          # Developer avatar
├── dist/
│   ├── flip.css             # Standalone flip mechanical component styles
│   ├── flip.min.css         # Minified production styles
│   ├── flip.js              # Standalone flip mechanical animation engine
│   └── flip.min.js          # Production minified bundle
├── tick/                    # Core mechanical tick source modules
├── manifest.json            # W3C Web App Manifest (PWA)
├── sw.js                    # Service Worker with offline caching engine
├── favicon.ico              # Multi-resolution favicon
├── index.html               # Main SPA web application (Responsive UI & Engine)
├── dev-server.js            # Zero-dependency HTTP & SPA router with PWA headers
├── build.js                 # Standalone asset compiler & bundle builder
├── package.json             # Project metadata & npm scripts
├── vercel.json              # Vercel deployment & PWA routing configuration
├── robots.txt               # Search engine crawler directives
├── sitemap.xml              # XML Sitemap
└── README.md                # Project documentation
```

---

## 🌐 Browser & Device Support

| Platform | Supported Browsers | Wake-Lock Support | Offline PWA |
| :--- | :--- | :---: | :---: |
| **Android** | Chrome, Edge, Samsung Internet, Firefox, Opera | ✅ Supported | ✅ Installable |
| **iOS / iPadOS** | Safari, Chrome, Firefox, WebKit PWAs | ✅ Supported | ✅ Home Screen |
| **macOS** | Safari, Chrome, Edge, Firefox, Brave | ✅ Supported | ✅ Installable |
| **Windows** | Chrome, Edge, Firefox, Brave, Opera | ✅ Supported | ✅ Installable |
| **Linux** | Chromium, Firefox | ✅ Supported | ✅ Installable |

---

## 📜 Credits & Acknowledgments

* **Original Library**: [pqina/flip](https://github.com/pqina/flip) by [Rik Schennink / PQINA](https://github.com/pqina) under the MIT License.
* **Modified & Enhanced PWA Version**: Developed and maintained by **Shiva Nishad ([@snishad0198](https://github.com/snishad0198))**.

---

## 👨‍💻 Developer & Author

<div align="center">

**Shiva Nishad (SNishad)**  
*Web Developer & Full-Stack Engineer*

[![GitHub](./assets/badges/github.svg)](https://github.com/snishad0198)
[![Instagram](./assets/badges/instagram.svg)](https://www.instagram.com/snishad.me_/)
[![Email](./assets/badges/email.svg)](mailto:snishad01985@gmail.com)

*Available for custom web applications, front-end architecture, and high-performance UI engineering.*

</div>

---

## 📄 License

This project is licensed under the [MIT License](./LICENSE) — open-source and free for commercial and personal use.
