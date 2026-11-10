"use client";

import { useEffect, useState } from "react";
import { useTheme } from "./ThemeContext";

// Procedural SVG Gear Path generator with realistic involute-style teeth
function generateGearPath(teeth: number, radius: number, toothHeight: number): string {
  const points: string[] = [];
  const angleStep = (Math.PI * 2) / teeth;

  for (let i = 0; i < teeth; i++) {
    const a0 = i * angleStep;
    const a1 = a0 + angleStep * 0.25;
    const a2 = a0 + angleStep * 0.5;
    const a3 = a0 + angleStep * 0.75;
    const a4 = (i + 1) * angleStep;

    const rRoot = radius - toothHeight;
    const rTip = radius + toothHeight;

    // Root start
    points.push(`${i === 0 ? "M" : "L"} ${rRoot * Math.cos(a0)} ${rRoot * Math.sin(a0)}`);
    // Tooth rise
    points.push(`L ${rTip * Math.cos(a1)} ${rTip * Math.sin(a1)}`);
    // Tooth top
    points.push(`L ${rTip * Math.cos(a2)} ${rTip * Math.sin(a2)}`);
    // Tooth descent
    points.push(`L ${rRoot * Math.cos(a3)} ${rRoot * Math.sin(a3)}`);
    // Root floor
    points.push(`L ${rRoot * Math.cos(a4)} ${rRoot * Math.sin(a4)}`);
  }

  points.push("Z");
  return points.join(" ");
}

// Exact Pythagorean gear clusters that physically mesh (Center Distance = R1 + R2)
// Left Margin System:
// Cluster 1 (Top):
// G1 (R=36): (52, 70)
// G2 (R=26, D=62): dx=30 => dy=sqrt(62^2-30^2)=54.2 => (82, 124.2)
// G3 (R=42, D=68): dx=-32 => dy=sqrt(68^2-32^2)=60.0 => (50, 184.2)
// G4 (R=30, D=72): dx=32 => dy=sqrt(72^2-32^2)=64.5 => (82, 248.7)
// Timing Belt / Linkage from G4 to G5
// Cluster 2 (Mid-Upper):
// G5 (R=38): (54, 380)
// G6 (R=28, D=66): dx=30 => dy=sqrt(66^2-30^2)=58.8 => (84, 438.8)
// G7 (R=44, D=72): dx=-34 => dy=sqrt(72^2-34^2)=63.5 => (50, 502.3)
// G8 (R=30, D=74): dx=32 => dy=sqrt(74^2-32^2)=66.7 => (82, 569.0)
// Hydraulic Piston & Shaft from G8 to G9
// Cluster 3 (Mid-Lower & Bottom):
// G9 (R=40): (52, 700)
// G10 (R=28, D=68): dx=30 => dy=sqrt(68^2-30^2)=61.0 => (82, 761.0)
// G11 (R=42, D=70): dx=-32 => dy=sqrt(70^2-32^2)=62.2 => (50, 823.2)
// G12 (R=32, D=74): dx=32 => dy=sqrt(74^2-32^2)=66.7 => (82, 889.9)

const LEFT_MESHED_GEARS = [
  // Cluster 1
  { id: "L1", cx: 52, cy: 70, radius: 36, teeth: 16, toothH: 5.5, ratio: 1.0 },
  { id: "L2", cx: 82, cy: 124, radius: 26, teeth: 12, toothH: 5.0, ratio: -1.38 },
  { id: "L3", cx: 50, cy: 184, radius: 42, teeth: 18, toothH: 5.5, ratio: 0.86 },
  { id: "L4", cx: 82, cy: 249, radius: 30, teeth: 14, toothH: 5.0, ratio: -1.2 },

  // Cluster 2
  { id: "L5", cx: 54, cy: 380, radius: 38, teeth: 16, toothH: 5.5, ratio: 1.0 },
  { id: "L6", cx: 84, cy: 439, radius: 28, teeth: 12, toothH: 5.0, ratio: -1.36 },
  { id: "L7", cx: 50, cy: 502, radius: 44, teeth: 18, toothH: 5.5, ratio: 0.86 },
  { id: "L8", cx: 82, cy: 569, radius: 30, teeth: 14, toothH: 5.0, ratio: -1.27 },

  // Cluster 3
  { id: "L9", cx: 52, cy: 700, radius: 40, teeth: 16, toothH: 5.5, ratio: 1.0 },
  { id: "L10", cx: 82, cy: 761, radius: 28, teeth: 12, toothH: 5.0, ratio: -1.43 },
  { id: "L11", cx: 50, cy: 823, radius: 42, teeth: 18, toothH: 5.5, ratio: 0.95 },
  { id: "L12", cx: 82, cy: 890, radius: 32, teeth: 14, toothH: 5.0, ratio: -1.25 },
];

const RIGHT_MESHED_GEARS = [
  // Cluster 1
  { id: "R1", cx: 78, cy: 75, radius: 38, teeth: 16, toothH: 5.5, ratio: -1.0 },
  { id: "R2", cx: 48, cy: 131, radius: 28, teeth: 12, toothH: 5.0, ratio: 1.36 },
  { id: "R3", cx: 80, cy: 194, radius: 42, teeth: 18, toothH: 5.5, ratio: -0.9 },
  { id: "R4", cx: 48, cy: 258, radius: 30, teeth: 14, toothH: 5.0, ratio: 1.27 },

  // Cluster 2
  { id: "R5", cx: 76, cy: 385, radius: 38, teeth: 16, toothH: 5.5, ratio: -1.0 },
  { id: "R6", cx: 46, cy: 443, radius: 28, teeth: 12, toothH: 5.0, ratio: 1.36 },
  { id: "R7", cx: 80, cy: 507, radius: 44, teeth: 18, toothH: 5.5, ratio: -0.86 },
  { id: "R8", cx: 48, cy: 574, radius: 30, teeth: 14, toothH: 5.0, ratio: 1.27 },

  // Cluster 3
  { id: "R9", cx: 78, cy: 705, radius: 40, teeth: 16, toothH: 5.5, ratio: -1.0 },
  { id: "R10", cx: 48, cy: 766, radius: 28, teeth: 12, toothH: 5.0, ratio: 1.43 },
  { id: "R11", cx: 80, cy: 828, radius: 42, teeth: 18, toothH: 5.5, ratio: -0.95 },
  { id: "R12", cx: 48, cy: 895, radius: 32, teeth: 14, toothH: 5.0, ratio: 1.25 },
];

export default function ScrollGears() {
  const [scrollY, setScrollY] = useState(0);
  const { theme } = useTheme();

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const stroke = theme === "light" ? "rgba(0, 0, 0, 0.55)" : "rgba(244, 237, 224, 0.38)";
  const strokeLight = theme === "light" ? "rgba(0, 0, 0, 0.25)" : "rgba(244, 237, 224, 0.18)";

  // Dynamic link oscillations linked to scroll
  const linkY1 = Math.sin(scrollY * 0.05) * 8;
  const linkY2 = Math.cos(scrollY * 0.04) * 10;

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 hidden xl:block select-none"
      aria-hidden="true"
    >
      {/* ================= LEFT MARGIN MECHANICAL TRAIN ================= */}
      <div className="fixed top-0 bottom-0 left-2 lg:left-5 w-32 h-screen pointer-events-none">
        <svg
          viewBox="0 0 135 980"
          className="w-full h-full overflow-visible"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Main Continuous Steel Transmission Shaft (Axis 67px) */}
          <line x1="67" y1="20" x2="67" y2="960" stroke={strokeLight} strokeWidth="3" />
          <line x1="67" y1="20" x2="67" y2="960" stroke={stroke} strokeWidth="1" strokeDasharray="6,4" />

          {/* Caliper Vernier Scale Datum Ticks */}
          <g stroke={strokeLight} strokeWidth="1">
            {Array.from({ length: 30 }).map((_, i) => (
              <line key={i} x1="10" y1={35 + i * 32} x2={i % 5 === 0 ? "26" : "18"} y2={35 + i * 32} />
            ))}
          </g>

          {/* Mechanical Linkage 1: Connecting G4 to G5 with Pulley Belt */}
          <path
            d="M 82 249 L 54 380"
            stroke={stroke}
            strokeWidth="2.5"
            strokeDasharray="4,3"
          />
          <path
            d="M 68 255 L 40 385"
            stroke={strokeLight}
            strokeWidth="1.5"
          />
          {/* Belt Tensioner Idler Wheel */}
          <circle cx="76" cy="315" r="9" fill="none" stroke={stroke} strokeWidth="1.5" />
          <circle cx="76" cy="315" r="3" fill="none" stroke={stroke} strokeWidth="1.5" />

          {/* Mechanical Linkage 2: Connecting Rod & Piston from G8 to G9 */}
          <line
            x1="82"
            y1={569 + linkY1}
            x2="52"
            y2={700 + linkY1 * 0.5}
            stroke={stroke}
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          {/* Hydraulic Cylinder Sleeve */}
          <rect
            x="44"
            y="615"
            width="18"
            height="45"
            rx="3"
            fill="none"
            stroke={stroke}
            strokeWidth="2"
          />
          {/* Piston Rod */}
          <line x1="53" y1="595" x2="53" y2="650" stroke={stroke} strokeWidth="4" />

          {/* Intermeshed Gears on Left Margin */}
          {LEFT_MESHED_GEARS.map((gear) => {
            const rotation = scrollY * 0.22 * gear.ratio;
            const path = generateGearPath(gear.teeth, gear.radius, gear.toothH);

            return (
              <g
                key={gear.id}
                style={{
                  transform: `rotate(${rotation}deg)`,
                  transformOrigin: `${gear.cx}px ${gear.cy}px`,
                  transition: "transform 0.04s linear",
                }}
              >
                {/* Outer Involute Gear Teeth */}
                <path d={path} fill="none" stroke={stroke} strokeWidth="1.6" />
                {/* Pitch Circle */}
                <circle
                  cx={gear.cx}
                  cy={gear.cy}
                  r={gear.radius * 0.72}
                  fill="none"
                  stroke={stroke}
                  strokeWidth="0.8"
                  strokeDasharray="2,2"
                />
                {/* Axle Flange */}
                <circle
                  cx={gear.cx}
                  cy={gear.cy}
                  r={gear.radius * 0.32}
                  fill="none"
                  stroke={stroke}
                  strokeWidth="1.2"
                />
                {/* Center Bore Pin */}
                <circle cx={gear.cx} cy={gear.cy} r="3.5" fill="none" stroke={stroke} strokeWidth="1.5" />
                {/* 4 Mechanical Cross-Spokes */}
                <line
                  x1={gear.cx}
                  y1={gear.cy - gear.radius * 0.72}
                  x2={gear.cx}
                  y2={gear.cy + gear.radius * 0.72}
                  stroke={stroke}
                  strokeWidth="0.9"
                />
                <line
                  x1={gear.cx - gear.radius * 0.72}
                  y1={gear.cy}
                  x2={gear.cx + gear.radius * 0.72}
                  y2={gear.cy}
                  stroke={stroke}
                  strokeWidth="0.9"
                />
                {/* Crank Pin on large gears */}
                {gear.radius >= 40 && (
                  <circle
                    cx={gear.cx + gear.radius * 0.5}
                    cy={gear.cy}
                    r="3.5"
                    fill="none"
                    stroke={stroke}
                    strokeWidth="1.5"
                  />
                )}
              </g>
            );
          })}
        </svg>
      </div>

      {/* ================= RIGHT MARGIN MECHANICAL TRAIN ================= */}
      <div className="fixed top-0 bottom-0 right-2 lg:right-5 w-32 h-screen pointer-events-none">
        <svg
          viewBox="0 0 135 980"
          className="w-full h-full overflow-visible"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Main Continuous Steel Transmission Shaft (Axis 67px) */}
          <line x1="67" y1="20" x2="67" y2="960" stroke={strokeLight} strokeWidth="3" />
          <line x1="67" y1="20" x2="67" y2="960" stroke={stroke} strokeWidth="1" strokeDasharray="6,4" />

          {/* Caliper Vernier Scale Datum Ticks */}
          <g stroke={strokeLight} strokeWidth="1">
            {Array.from({ length: 30 }).map((_, i) => (
              <line key={i} x1={i % 5 === 0 ? "109" : "117"} y1={35 + i * 32} x2="125" y2={35 + i * 32} />
            ))}
          </g>

          {/* Serpentine Timing Belt from R4 to R5 */}
          <path
            d="M 48 258 L 76 385"
            stroke={stroke}
            strokeWidth="2.5"
            strokeDasharray="4,3"
          />
          <path
            d="M 60 264 L 88 390"
            stroke={strokeLight}
            strokeWidth="1.5"
          />
          {/* Idler Guide Pulley */}
          <circle cx="58" cy="320" r="10" fill="none" stroke={stroke} strokeWidth="1.5" />
          <circle cx="58" cy="320" r="3.5" fill="none" stroke={stroke} strokeWidth="1.5" />

          {/* Mechanical Linkage 2: Articulated Lever Arm between R8 and R9 */}
          <line
            x1="48"
            y1={574 + linkY2}
            x2="78"
            y2={705 + linkY2 * 0.5}
            stroke={stroke}
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          {/* Bearing Pivot Box */}
          <rect
            x="70"
            y="620"
            width="20"
            height="40"
            rx="3"
            fill="none"
            stroke={stroke}
            strokeWidth="2"
          />
          <circle cx="80" cy="640" r="5" fill="none" stroke={stroke} strokeWidth="1.5" />

          {/* Intermeshed Gears on Right Margin */}
          {RIGHT_MESHED_GEARS.map((gear) => {
            const rotation = scrollY * 0.22 * gear.ratio;
            const path = generateGearPath(gear.teeth, gear.radius, gear.toothH);

            return (
              <g
                key={gear.id}
                style={{
                  transform: `rotate(${rotation}deg)`,
                  transformOrigin: `${gear.cx}px ${gear.cy}px`,
                  transition: "transform 0.04s linear",
                }}
              >
                <path d={path} fill="none" stroke={stroke} strokeWidth="1.6" />
                <circle
                  cx={gear.cx}
                  cy={gear.cy}
                  r={gear.radius * 0.72}
                  fill="none"
                  stroke={stroke}
                  strokeWidth="0.8"
                  strokeDasharray="2,2"
                />
                <circle
                  cx={gear.cx}
                  cy={gear.cy}
                  r={gear.radius * 0.32}
                  fill="none"
                  stroke={stroke}
                  strokeWidth="1.2"
                />
                <circle cx={gear.cx} cy={gear.cy} r="3.5" fill="none" stroke={stroke} strokeWidth="1.5" />
                <line
                  x1={gear.cx}
                  y1={gear.cy - gear.radius * 0.72}
                  x2={gear.cx}
                  y2={gear.cy + gear.radius * 0.72}
                  stroke={stroke}
                  strokeWidth="0.9"
                />
                <line
                  x1={gear.cx - gear.radius * 0.72}
                  y1={gear.cy}
                  x2={gear.cx + gear.radius * 0.72}
                  y2={gear.cy}
                  stroke={stroke}
                  strokeWidth="0.9"
                />
                {gear.radius >= 40 && (
                  <circle
                    cx={gear.cx - gear.radius * 0.5}
                    cy={gear.cy}
                    r="3.5"
                    fill="none"
                    stroke={stroke}
                    strokeWidth="1.5"
                  />
                )}
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
}
