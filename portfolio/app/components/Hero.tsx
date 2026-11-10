"use client";

import Image from "next/image";
import { ArrowDown, ArrowRight, FileText, Mail, Activity, Cpu } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";
import EngineeringBanner from "./EngineeringBanner";
import { sounds } from "../utils/sound";

export default function Hero() {
  const scrollToProjects = () => {
    sounds.playClick();
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    sounds.playClick();
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const metrics = [
    { label: "PRIMARY DOMAIN", value: "Embedded & AI", sub: "Hardware-Software Convergence" },
    { label: "UNDERGRADUATE", value: "3rd Sem", sub: "BIT Raipur (CSVTU)" },
    { label: "PROTOTYPES", value: "05+", sub: "Edge AI · Robotics · Apps" },
    { label: "NAVOMESH '26", value: "₹10,000", sub: "Special Recognition Award" },
  ];

  return (
    <section
      id="home"
      className="relative flex flex-col justify-between pt-6 sm:pt-10 pb-12 bg-[#0A1120] border-b border-[#F4EDE0]/15 overflow-hidden transition-colors"
    >
      {/* Subtle blueprint grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(244, 237, 224, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(244, 237, 224, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: "36px 36px",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 px-5 sm:px-8 lg:px-12 w-full my-auto space-y-8">
        {/* ================= 1. WORKSPACE WALLPAPER BANNER ================= */}
        <EngineeringBanner />

        {/* ================= 2. SAMEER'S PROFILE CARD (TenET INSPIRED) ================= */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 p-5 sm:p-6 rounded-2xl bg-[#101B30] border-2 border-[#F4EDE0]/20 shadow-[4px_4px_0px_0px_#F4EDE0] card-3d-navy">
          {/* Left: Avatar & Identity */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
            {/* PFP with 3D drop depth */}
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-[#F4EDE0] shadow-[3px_3px_0px_0px_#F4EDE0] shrink-0 bg-[#0A1120]">
              <Image
                src="/pfp.jpg"
                alt="Sameer Singh Profile"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 640px) 80px, 96px"
              />
            </div>

            {/* Name, Subtitle & Active Status */}
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-1">
                <h2 className="font-heading font-black text-2xl sm:text-3xl text-[#F4EDE0] tracking-tight">
                  Sameer Singh
                </h2>
                <div className="inline-flex items-center px-2.5 py-0.5 rounded-full border border-current/25 font-mono text-xs opacity-75">
                  <span>ACTIVE - FIXING</span>
                </div>
              </div>

              <p className="font-body text-xs sm:text-sm text-[#F4EDE0]/80 font-medium mb-3">
                Electrical &amp; Electronics Engineering · Embedded Systems · Edge AI · Robotics
              </p>

              {/* Quick Social & Communication Chips */}
              <div className="flex flex-wrap items-center gap-2">
                <a
                  href="https://github.com/Zenith-ss"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => sounds.playClick()}
                  onMouseEnter={() => sounds.playHover()}
                  aria-label="GitHub Profile"
                  className="p-1.5 rounded-lg border border-[#F4EDE0]/25 text-[#F4EDE0] hover:bg-[#F4EDE0] hover:text-[#14213D] transition-all shadow-sm"
                >
                  <GithubIcon size={14} />
                </a>
                <a
                  href="https://linkedin.com/in/sameer-singh-5a74a9379"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => sounds.playClick()}
                  onMouseEnter={() => sounds.playHover()}
                  aria-label="LinkedIn Profile"
                  className="p-1.5 rounded-lg border border-[#F4EDE0]/25 text-[#F4EDE0] hover:bg-[#F4EDE0] hover:text-[#14213D] transition-all shadow-sm"
                >
                  <LinkedinIcon size={14} />
                </a>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => sounds.playClick()}
                  onMouseEnter={() => sounds.playHover()}
                  aria-label="View Resume PDF"
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg border border-[#F4EDE0]/25 text-[#F4EDE0] hover:bg-[#F4EDE0] hover:text-[#14213D] font-mono text-xs font-semibold transition-all shadow-sm"
                >
                  <FileText size={12} />
                  <span>Résumé ↗</span>
                </a>
                <a
                  href="mailto:contact@sameersingh.dev"
                  onClick={() => sounds.playClick()}
                  onMouseEnter={() => sounds.playHover()}
                  aria-label="Send Email"
                  className="p-1.5 rounded-lg border border-[#F4EDE0]/25 text-[#F4EDE0] hover:bg-[#F4EDE0] hover:text-[#14213D] transition-all shadow-sm"
                >
                  <Mail size={14} />
                </a>
              </div>
            </div>
          </div>

          {/* Right: Live Lab Bench Status Widget */}
          <div className="hero-bench-widget w-full lg:w-auto p-3.5 rounded-xl bg-[#0A1120] border border-[#F4EDE0]/20 flex items-center gap-3.5 shadow-inner">
            <div className="hero-bench-icon w-10 h-10 rounded-lg bg-[#F4EDE0] text-[#14213D] flex items-center justify-center font-mono font-bold shrink-0">
              <Cpu size={20} />
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-[10px] text-[#F4EDE0]/60 uppercase tracking-widest flex items-center gap-1">
                <Activity size={10} className="hero-activity-icon text-[#22C55E]" />
                NOW BENCH-TESTING
              </span>
              <span className="font-heading font-bold text-xs sm:text-sm text-[#F4EDE0]">
                FLINT // Edge AI Vision
              </span>
              <span className="font-mono text-[10px] text-[#F4EDE0]/70">
                Raspberry Pi 5 · YOLOv8n @ 30 FPS
              </span>
            </div>
            {/* Animated Wave Bars */}
            <div className="flex items-end gap-1 h-6 pl-2 shrink-0">
              <span className="hero-bar w-1 bg-[#22C55E] h-3 animate-pulse" />
              <span className="hero-bar w-1 bg-[#22C55E] h-5 animate-pulse delay-75" />
              <span className="hero-bar w-1 bg-[#22C55E] h-2 animate-pulse delay-150" />
              <span className="hero-bar w-1 bg-[#22C55E] h-4 animate-pulse delay-100" />
            </div>
          </div>
        </div>

        {/* ================= 3. EDITORIAL HERO HEADLINE ================= */}
        <div>
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded bg-[#F4EDE0] text-[#14213D] shadow-[3px_3px_0px_0px_rgba(244,237,224,0.3)] mb-4">
            <span className="w-2 h-2 rounded-full bg-[#14213D] animate-pulse" />
            <span className="font-mono text-[11px] sm:text-xs font-bold tracking-widest uppercase">
              EEE UNDERGRADUATE · RAIPUR, INDIA · EMBEDDED SYSTEMS / EDGE AI / ROBOTICS
            </span>
          </div>

          <div className="max-w-4xl mb-4">
            <h1 className="font-heading font-black text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.08] tracking-tight text-[#F4EDE0]">
              I BUILD AT THE INTERSECTION OF{" "}
              <span className="text-[#F4EDE0]/45 block sm:inline">
                HARDWARE &amp; SOFTWARE.
              </span>
            </h1>
          </div>

          <p className="max-w-2xl text-base sm:text-lg text-[#F4EDE0]/85 font-body leading-relaxed mb-6">
            Electrical and Electronics Engineering student exploring Embedded Systems,
            Edge AI, Robotics and Application Development.
          </p>

          {/* Action Button Row */}
          <div className="flex flex-wrap items-center gap-3.5 sm:gap-5 mb-8">
            <button
              onClick={scrollToProjects}
              onMouseEnter={() => sounds.playHover()}
              className="btn-3d-cream inline-flex items-center justify-center gap-2 px-6 py-3 rounded font-heading font-bold text-xs tracking-widest uppercase cursor-pointer"
            >
              <span>EXPLORE PROJECTS</span>
              <ArrowRight size={14} />
            </button>

            <button
              onClick={scrollToContact}
              onMouseEnter={() => sounds.playHover()}
              className="btn-3d-navy inline-flex items-center justify-center gap-2 px-6 py-3 rounded font-heading font-bold text-xs tracking-widest uppercase cursor-pointer"
            >
              <span>CONTACT ME</span>
            </button>
          </div>

          {/* 4-Column 3D Metrics Grid — Humble, No GPA Boasting Here */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 pt-4 border-t border-[#F4EDE0]/10">
            {metrics.map((item, idx) => (
              <div
                key={idx}
                onMouseEnter={() => sounds.playHover()}
                className="p-4 sm:p-5 rounded card-3d-cream"
              >
                <span className="font-mono text-[10px] sm:text-xs text-[#14213D]/70 tracking-widest block uppercase font-bold mb-1">
                  {item.label}
                </span>
                <div className="font-heading font-black text-xl sm:text-2xl text-[#14213D] tracking-tight">
                  {item.value}
                </div>
                <span className="font-body text-xs text-[#14213D]/80 block mt-0.5 font-semibold">
                  {item.sub}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator Strip */}
      <div className="relative z-10 px-5 sm:px-8 lg:px-12 w-full flex items-center justify-between text-[#F4EDE0]/50 font-mono text-xs pt-8">
        <span>RAIPUR // CHHATTISGARH · 2026</span>
        <button
          onClick={() => {
            sounds.playClick();
            document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
          }}
          onMouseEnter={() => sounds.playHover()}
          className="flex items-center gap-1.5 uppercase hover:text-[#F4EDE0] transition-colors cursor-pointer"
        >
          <span>SCROLL</span>
          <ArrowDown size={12} className="animate-bounce" />
        </button>
      </div>
    </section>
  );
}
