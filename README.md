# LOVOT Caregiver Companion — Dashboard Website

A wireframe dashboard for the **LOVOT elderly care companion robot**, designed for Singapore's ageing population. This dashboard allows caregivers to monitor their elderly loved ones remotely through LOVOT's features.

![LOVOT Dashboard](https://img.shields.io/badge/Status-Wireframe-blue) ![License](https://img.shields.io/badge/License-MIT-green)

---

## ✨ Features

| Feature | Description |
|---|---|
| 📹 **CCTV Live View** | Simulated live camera feed showing LOVOT monitoring the room |
| 🚨 **Fall Detection** | Visual alert overlay on CCTV with caregiver SMS/push notification |
| 👤 **Facial Recognition** | Recognized faces with confidence scores and registration form |
| ⏰ **Reminders** | Add medicine, self-care, exercise, appointment & hydration reminders |
| 📊 **Activity Reports** | Daily stats (interactions, alerts, active hours, mood) with weekly chart |
| 🌐 **Dialect Switcher** | Switch between English, Mandarin, Hokkien, Teochew, Cantonese, Malay & Tamil |

---

## 🚀 How to Run on Localhost

### Option 1: Python (Recommended — no install needed)

```bash
# Open your terminal and navigate to the project folder
cd /path/to/lovot

# Start a local server on port 8000
python3 -m http.server 8000
```

Then open your browser and go to: **[http://localhost:8000](http://localhost:8000)**

### Option 2: Node.js (npx)

```bash
cd /path/to/lovot
npx -y serve .
```

Then open the URL shown in terminal (usually **http://localhost:3000**).

### Option 3: VS Code Live Server

1. Install the **Live Server** extension in VS Code
2. Open the `lovot` folder in VS Code
3. Right-click `index.html` → **Open with Live Server**
4. The page will auto-open in your browser

---

## 📁 Project Structure

```
lovot/
├── index.html      # Main dashboard page
├── styles.css      # Dark-mode glassmorphism design system
├── app.js          # Application logic (CCTV, reminders, i18n, etc.)
└── README.md       # This file
```

---

## 🛠️ Tech Stack

- **HTML5** — Semantic structure
- **CSS3** — Custom glassmorphism dark-mode design (no frameworks)
- **Vanilla JavaScript** — All interactive features, no dependencies
- **localStorage** — Persists reminders across sessions

---

## 📝 Notes

- This is a **wireframe / prototype** — the CCTV feed and fall detection are simulated
- Reminders are saved in your browser's localStorage
- No backend server or database is required
- The dialect switcher updates all UI text dynamically without page reload
