# ⏱️ Time Utility — Mechanical Flip Clock, Timer & Stopwatch

<div align="center">

![GitHub License](https://img.shields.io/badge/license-MIT-blue.svg?style=for-the-badge)
![Zero Dependencies](https://img.shields.io/badge/dependencies-0%20(Pure%20Vanilla)-success?style=for-the-badge)
![Web Audio API](https://img.shields.io/badge/Audio-Synthesized%20Web%20Audio-violet?style=for-the-badge)
![Wake Lock API](https://img.shields.io/badge/Mobile-Always--On%20Display-orange?style=for-the-badge)
![Platform](https://img.shields.io/badge/platform-Mobile%20%7C%20Tablet%20%7C%20Desktop-informational?style=for-the-badge)

<p align="center">
  <b>A distraction-free, ultra-precise 3D mechanical flip clock, countdown timer with selectable alarm tones, and millisecond stopwatch.</b>
  <br />
  <i>Engineered with zero third-party framework dependencies, custom Web Audio synthesis, and an unbreakable mobile screen wake-lock engine.</i>
</p>

</div>

---

## 🌟 Key Highlights

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
* **Dual-Engine Architecture**:
  1. **Native Screen Wake Lock API** for modern browsers on HTTPS/localhost.
  2. **Zero-Power Looping Video Sentinel** for mobile devices connected via local Wi-Fi IP (`http://192.168.x.x`), iOS Safari, and aggressive OEM battery savers.
* **Active Watchdog**: Self-healing background monitor automatically reclaims display lock if tab is switched or briefly interrupted.

### 🔍 Clock-Only Zoom & Custom Drag Repositioning
* **Focused Zoom**: Scale the mechanical clock cards from **50% to 200%** using dedicated header controls or pinch gestures without magnifying or distorting the navigation bar or footer.
* **Freeform Panning**: Drag and reposition the clock anywhere across the canvas for custom desk setups and streaming overlays.

### 🧘 Zen Mode & Presentation Layouts
* **Distraction-Free Zen**: Press <kbd>H</kbd> or click Zen to fade out all UI controls, leaving only the mechanical flip clock.
* **Curated Themes**: Obsidian Night, OLED Blackout, Slate Steel, and Retro Amber with full custom accent tinting.

---

## ⌨️ Keyboard Shortcuts

| Shortcut | Action |
| :---: | :--- |
| <kbd>Space</kbd> | Start / Pause active mode (or Stop ringing alarm) |
| <kbd>R</kbd> | Reset Countdown / Stopwatch |
| <kbd>L</kbd> | Record Lap split (Stopwatch mode) |
| <kbd>S</kbd> | Toggle Seconds visibility (current mode) |
| <kbd>1</kbd> / <kbd>2</kbd> / <kbd>3</kbd> | Switch to Live Clock / Countdown / Stopwatch |
| <kbd>H</kbd> | Toggle Distraction-Free Zen Mode |
| <kbd>F</kbd> | Toggle Fullscreen |
| <kbd>+</kbd> / <kbd>-</kbd> / <kbd>0</kbd> | Zoom Clock In / Out / Reset (100%) |
| <kbd>?</kbd> | Open Shortcuts & Developer Information |
| <kbd>Esc</kbd> | Close Modals / Exit Zen Mode / Stop Alarm |

---

## 🚀 Quick Start & Local Development

This project has **zero build dependencies** and runs directly in any modern browser.

### 1. Clone the Repository
```bash
git clone https://github.com/snishad0198/timer.git
cd timer
```

### 2. Start the Local Server
```bash
# Using Node.js dev server (handles SPA deep links & byte-range streaming)
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
│   ├── avatar.png           # Developer profile avatar
│   ├── keepawake.mp4        # Ultra-lightweight 1-frame H.264 video sentinel
│   └── keepawake.webm       # Ultra-lightweight 1-frame VP8 video sentinel
├── dist/
│   ├── flip.css             # Standalone flip mechanical component styles
│   ├── flip.min.css         # Minified production styles
│   ├── flip.js              # Standalone flip mechanical animation engine
│   └── flip.min.js          # Production minified bundle
├── index.html               # Main SPA web application (Responsive UI & Engine)
├── dev-server.js            # Zero-dependency HTTP & SPA router with Byte-Range streaming
├── build.js                 # Standalone asset compiler & bundle builder
├── package.json             # Project metadata & npm scripts
└── README.md                # Project documentation
```

---

## 🌐 Browser & Device Support

| Platform | Supported Browsers | Wake-Lock Support |
| :--- | :--- | :---: |
| **Android** | Chrome, Edge, Samsung Internet, Firefox, Opera | ✅ Dual Engine |
| **iOS / iPadOS** | Safari, Chrome, Firefox, WebKit PWAs | ✅ Dual Engine |
| **macOS** | Safari, Chrome, Edge, Firefox, Brave | ✅ Native / Video |
| **Windows** | Chrome, Edge, Firefox, Brave, Opera | ✅ Native / Video |
| **Linux** | Chromium, Firefox | ✅ Native / Video |

---

## 👨‍💻 Developer & Author

<div align="center">

**Shiva Nishad (SNishad)**  
*Web Developer & Full-Stack Engineer*

[![GitHub](https://img.shields.io/badge/GitHub-snishad0198-181717?style=for-the-badge&logo=github)](https://github.com/snishad0198)
[![Instagram](https://img.shields.io/badge/Instagram-snishad.me__-E4405F?style=for-the-badge&logo=instagram)](https://www.instagram.com/snishad.me_/)
[![Email](https://img.shields.io/badge/Email-snishad01985%40gmail.com-D14836?style=for-the-badge&logo=gmail)](mailto:snishad01985@gmail.com)

*Available for custom web applications, front-end architecture, and high-performance UI engineering.*

</div>

---

## 📄 License

This project is licensed under the [MIT License](./LICENSE) — open-source and free for commercial and personal use.
