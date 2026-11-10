# Sameer Singh — Personal Engineering Portfolio

A high-performance personal engineering portfolio built for **Sameer Singh**, an Electrical and Electronics Engineering undergraduate at Bhilai Institute of Technology, Raipur.

Inspired by the structured developer aesthetic of **TenET** (`tenet-portfolio.vercel.app`) combined with an editorial luxury palette of **Navy (`#14213D`)** and **Cream (`#F4EDE0`)**.

---

## Live Local Server

The production server is active at:
**[http://localhost:3000](http://localhost:3000)** (or `http://192.168.1.34:3000` on your LAN)

---

## Key Architecture & Design Highlights

1. **Strict Two-Colour System**:
   - Primary: Deep Navy `#14213D`
   - Secondary: Rich Cream `#F4EDE0`
   - Subtle opacity variations (`rgba`) used for visual hierarchy, border definition, and secondary labels.
2. **TenET-Inspired Engineering Hierarchy**:
   - **Hero Strip & Metrics**: 4-column engineering metrics card (CGPA 8.76, 3rd Sem, 5+ Core Builds, ₹10K Navomesh prize).
   - **Structured Project Cards**: Explicit "My Individual Contribution" callouts to preserve academic and technical transparency.
   - **Engineering Schematics**: Custom Navy/Cream blueprint visuals showcasing signal pipelines, motor driver pinouts, and system flows.
   - **Hackathons & Competitions Timeline**: High-contrast cream showcase with verified competition achievements.
   - **Categorized Technical Arsenal**: 6 focused domains without arbitrary percentage meters.
   - **Interactive Contact Card**: One-click copy email button with instant feedback toast + direct mailto link.

---

## Quick Commands

Run with the local Node.js environment:

```powershell
$env:PATH = "D:\Software\node-v26.8.1-win-x64;" + $env:PATH
cd "d:\Coding\portfolio\Portfolio.zen\portfolio"

# Start Development Server (Webpack mode)
npm run dev

# Build Production Bundle
npm run build

# Start Production Server
npm run start
```

---

## Adding Images & Files

- **Resume**: Place `resume.pdf` into `public/resume.pdf`
- **Project Photos**: Place photographs into `public/images/projects/` (`flint.jpg`, `ezseva.jpg`, `esp32car.jpg`, `rll.jpg`, `sih.jpg`)

---

## Deploy to Vercel

1. Push this repository to GitHub.
2. Import the project on [Vercel](https://vercel.com).
3. Set the **Root Directory** to `portfolio`.
4. Deploy!
