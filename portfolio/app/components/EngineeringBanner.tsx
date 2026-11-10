"use client";

import Image from "next/image";
import { useTheme } from "./ThemeContext";

// Stylized drifting petals for atmospheric breeze effect
const PETALS = [
  { left: "80%", top: "25%", size: 10, delay: "0s", duration: "7s" },
  { left: "65%", top: "40%", size: 8, delay: "1.8s", duration: "8.5s" },
  { left: "90%", top: "15%", size: 12, delay: "3.2s", duration: "6.5s" },
  { left: "45%", top: "20%", size: 7, delay: "4.5s", duration: "9s" },
  { left: "75%", top: "60%", size: 11, delay: "2.1s", duration: "7.8s" },
  { left: "30%", top: "35%", size: 9, delay: "5.5s", duration: "8.2s" },
];

export default function EngineeringBanner() {
  const { theme } = useTheme();
  const isLight = theme === "light";

  const currentWallpaper = isLight ? "/wallpaper_light.jpg" : "/wallpaper_dark.jpg";
  const petalColor = isLight ? "rgba(220, 225, 235, 0.85)" : "rgba(239, 68, 68, 0.85)";

  return (
    <div className="w-full relative h-56 sm:h-64 md:h-72 rounded-2xl overflow-hidden border-2 border-current/25 shadow-[0_8px_32px_rgba(0,0,0,0.35)] select-none transition-colors duration-300 group bg-black">
      {/* ================= 1. AMBIENT BLURRED BACKDROP FILL ================= */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={currentWallpaper}
          alt="Ambient Wallpaper Backdrop"
          fill
          priority
          unoptimized
          className="object-cover object-center scale-125 blur-2xl opacity-40 transition-all duration-700"
          sizes="(max-width: 1200px) 100vw, 1152px"
        />
      </div>

      {/* ================= 2. PROPERLY FRAMED CENTERPIECE WITH CINEMATIC MOTION ================= */}
      <div
        className="absolute inset-0 flex items-center justify-center transition-all duration-700"
        style={{
          animation: "wallpaperSway 12s ease-in-out infinite",
        }}
      >
        <Image
          src={currentWallpaper}
          alt={isLight ? "Monochrome Blossom Wallpaper" : "Red Spider Lily Wallpaper"}
          fill
          priority
          unoptimized
          className={`object-cover object-center transition-all duration-700 ${
            isLight
              ? "contrast-115 brightness-105"
              : "contrast-115 brightness-95"
          }`}
          sizes="(max-width: 1200px) 100vw, 1152px"
        />
      </div>

      {/* ================= 3. VIGNETTE & POLISHED FRAME SHADOWS ================= */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{
          background: isLight
            ? "radial-gradient(circle at center, transparent 40%, rgba(243, 244, 246, 0.35) 85%, rgba(243, 244, 246, 0.75) 100%)"
            : "radial-gradient(circle at center, transparent 45%, rgba(10, 17, 32, 0.6) 85%, rgba(10, 17, 32, 0.95) 100%)",
        }}
      />

      {/* Gradient Bottom Shelf to seamlessly blend into Profile Card */}
      <div
        className="absolute inset-x-0 bottom-0 h-20 pointer-events-none transition-all duration-300"
        style={{
          background: isLight
            ? "linear-gradient(to top, rgba(255,255,255,0.7) 0%, transparent 100%)"
            : "linear-gradient(to top, rgba(10,17,32,0.95) 0%, transparent 100%)",
        }}
      />

      {/* ================= 4. FLOATING WIND DRIFTING PETALS ================= */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {PETALS.map((petal, i) => (
          <div
            key={i}
            className="absolute rounded-full pointer-events-none"
            style={{
              left: petal.left,
              top: petal.top,
              width: `${petal.size}px`,
              height: `${petal.size * 0.75}px`,
              backgroundColor: petalColor,
              boxShadow: isLight
                ? "0 0 8px rgba(255,255,255,0.8)"
                : "0 0 8px rgba(239,68,68,0.7)",
              animation: `petalDrift ${petal.duration} cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite`,
              animationDelay: petal.delay,
            }}
          />
        ))}
      </div>

      {/* ================= 5. TECHNICAL CORNER BRACKETS & HUD ================= */}
      {/* Top Left Viewport Tag */}
      <div className="absolute top-4 left-4 z-10 pointer-events-none">
        <div className={`font-mono text-[10px] tracking-widest uppercase font-bold px-2.5 py-1 rounded backdrop-blur-md border shadow-md flex items-center gap-2 ${
          isLight
            ? "bg-white/80 border-black/20 text-black"
            : "bg-[#0A1120]/85 border-[#F4EDE0]/20 text-[#F4EDE0]"
        }`}>
          <span className={`w-1.5 h-1.5 rounded-full ${isLight ? "bg-black" : "bg-red-500 animate-pulse"}`} />
          <span>{isLight ? "SAKURA // MONOCHROME" : "HIGANBANA // SPIDER LILY"}</span>
        </div>
      </div>

      {/* Bottom Right Lab Tag (no coordinates) */}
      <div className="absolute bottom-4 right-4 z-10 pointer-events-none">
        <div className={`font-mono text-[10px] tracking-widest uppercase font-bold px-2.5 py-1 rounded backdrop-blur-md border shadow-md ${
          isLight
            ? "bg-white/80 border-black/20 text-black"
            : "bg-[#0A1120]/85 border-[#F4EDE0]/20 text-[#F4EDE0]"
        }`}>
          ZENITH LAB
        </div>
      </div>

      {/* 4 Precision CAD Viewport Corner Brackets */}
      <div className="absolute top-2 left-2 w-3.5 h-3.5 border-t-2 border-l-2 border-current/40 pointer-events-none" />
      <div className="absolute top-2 right-2 w-3.5 h-3.5 border-t-2 border-r-2 border-current/40 pointer-events-none" />
      <div className="absolute bottom-2 left-2 w-3.5 h-3.5 border-b-2 border-l-2 border-current/40 pointer-events-none" />
      <div className="absolute bottom-2 right-2 w-3.5 h-3.5 border-b-2 border-r-2 border-current/40 pointer-events-none" />
    </div>
  );
}
