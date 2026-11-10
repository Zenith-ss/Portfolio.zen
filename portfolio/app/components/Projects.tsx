"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Trophy, ArrowRight, ExternalLink } from "lucide-react";
import { PROJECTS_DATA, ProjectDetail } from "../data/projects";
import { GithubIcon } from "./SocialIcons";
import { sounds } from "../utils/sound";

const LAB_PROJECTS = [
  {
    title: "ESP32 Home Automation",
    type: "EMBEDDED IOT",
    desc: "Wireless relay control for domestic AC appliances with local dashboard and manual override switches.",
    tech: ["ESP32", "Relays", "Embedded C"],
  },
  {
    title: "Digital Thermometer – LM35",
    type: "SENSOR TELEMETRY",
    desc: "Precision analog ADC temperature acquisition circuit with direct LCD character readout.",
    tech: ["Arduino", "LM35", "LCD"],
  },
  {
    title: "Macro Stopwatch Utility",
    type: "FIRMWARE UTILITY",
    desc: "Millisecond stopwatch precision with programmable macro shortcuts and USB HID interface.",
    tech: ["Embedded C", "HID USB"],
  },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filteredProjects = activeFilter === "all"
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 sm:py-28 bg-[#0A1120] border-b border-[#F4EDE0]/15 relative">
      <div className="px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-5">
          <span className="font-mono text-xs tracking-widest text-[#F4EDE0] font-bold uppercase">
            03 // SELECTED ENGINEERING PROJECTS
          </span>
          <div className="flex-1 h-px bg-[#F4EDE0]/20" />
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5 mb-10">
          <div className="max-w-2xl">
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-[#F4EDE0] tracking-tight mb-2">
              Physical systems, edge AI &amp; functional builds.
            </h2>
            <p className="font-body text-base text-[#F4EDE0]/75">
              Click any project card to open its full technical blueprint, schematics, and individual contribution breakdown.
            </p>
          </div>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 self-start lg:self-auto">
            {[
              { id: "all", label: "All Builds" },
              { id: "edge-ai", label: "Edge AI" },
              { id: "robotics", label: "Robotics" },
              { id: "mobile", label: "Mobile Apps" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  sounds.playClick();
                  setActiveFilter(tab.id);
                }}
                onMouseEnter={() => sounds.playHover()}
                className={`px-3.5 py-1.5 rounded font-mono text-xs tracking-wider transition-all duration-150 cursor-pointer ${
                  activeFilter === tab.id
                    ? "bg-[#F4EDE0] text-[#14213D] font-bold shadow-[2px_2px_0px_0px_rgba(244,237,224,0.4)]"
                    : "border border-[#F4EDE0]/25 text-[#F4EDE0]/80 hover:bg-[#F4EDE0]/10 hover:border-[#F4EDE0]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 2-Column Side-By-Side Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project, idx) => {
            // Alternating Cream and Navy cards for high visual cream presence
            const isCream = idx % 2 === 0;

            return (
              <Link
                key={project.id}
                href={`/projects/${project.id}`}
                onClick={() => sounds.playClick()}
                onMouseEnter={() => sounds.playHover()}
                className={`group rounded-xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 cursor-pointer ${
                  isCream ? "card-3d-cream" : "card-3d-navy"
                }`}
              >
                <div>
                  {/* Top Meta Bar */}
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span
                      className={`font-mono text-xs font-bold ${
                        isCream ? "text-[#14213D]/60" : "text-[#F4EDE0]/60"
                      }`}
                    >
                      // {project.num}
                    </span>
                    <span
                      className={`font-mono text-[10px] px-2 py-0.5 rounded font-bold uppercase tracking-wider ${
                        isCream ? "bg-[#14213D]/10 text-[#14213D]" : "bg-[#F4EDE0]/10 text-[#F4EDE0]"
                      }`}
                    >
                      {project.domain}
                    </span>
                    {project.badge && (
                      <span
                        className={`project-card-badge font-mono text-[10px] px-2.5 py-0.5 rounded font-bold uppercase tracking-wider flex items-center gap-1 ${
                          isCream ? "bg-[#14213D] text-[#F4EDE0]" : "bg-[#F4EDE0] text-[#14213D]"
                        }`}
                      >
                        <Trophy size={11} className="project-card-badge-icon" />
                        <span className="project-card-badge-text">{project.badge}</span>
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3
                    className={`font-heading font-black text-xl sm:text-2xl tracking-tight mb-2 group-hover:underline ${
                      isCream ? "text-[#14213D]" : "text-[#F4EDE0]"
                    }`}
                  >
                    {project.title}
                  </h3>

                  {/* Tagline */}
                  <p
                    className={`font-body text-sm sm:text-base font-medium mb-5 leading-relaxed ${
                      isCream ? "text-[#14213D]/80" : "text-[#F4EDE0]/80"
                    }`}
                  >
                    {project.tagline}
                  </p>

                  {/* 2 Concise Bullet Points */}
                  <div className="space-y-2 mb-6">
                    {project.keyHighlights.slice(0, 2).map((item, i) => (
                      <div
                        key={i}
                        className={`flex items-start gap-2.5 text-xs sm:text-sm font-body leading-relaxed ${
                          isCream ? "text-[#14213D]/75" : "text-[#F4EDE0]/75"
                        }`}
                      >
                        <span className="font-bold shrink-0 mt-0.5">▸</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Footer: Tech Stack + Links */}
                <div>
                  {/* Tech stack chips */}
                  <div className="flex flex-wrap gap-1.5 mb-5 pt-3 border-t border-current/15">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech.name}
                        className={`px-2 py-0.5 rounded font-mono text-[11px] font-semibold ${
                          isCream ? "bg-[#14213D]/10 text-[#14213D]" : "bg-[#F4EDE0]/10 text-[#F4EDE0]"
                        }`}
                      >
                        {tech.name}
                      </span>
                    ))}
                  </div>

                  {/* Action Bar */}
                  <div className="flex items-center justify-between gap-2 pt-2">
                    {/* ONLY show Git Repo button for projects that have a repository (Real-Life Leveling & SIH Prototype) */}
                    {project.githubUrl ? (
                      <span
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.githubUrl, "_blank", "noopener,noreferrer");
                        }}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded font-mono text-xs font-bold border transition-all ${
                          isCream
                            ? "border-[#14213D] text-[#14213D] hover:bg-[#14213D] hover:text-[#F4EDE0]"
                            : "border-[#F4EDE0]/40 text-[#F4EDE0] hover:bg-[#F4EDE0] hover:text-[#14213D]"
                        }`}
                      >
                        <GithubIcon size={13} />
                        <span>GIT REPO</span>
                        <ArrowUpRight size={12} />
                      </span>
                    ) : (
                      <span
                        className={`font-mono text-[11px] ${
                          isCream ? "text-[#14213D]/50" : "text-[#F4EDE0]/40"
                        }`}
                      >
                        {project.category === "mobile" ? "SOFTWARE PROTOTYPE" : "HARDWARE PROTOTYPE"}
                      </span>
                    )}

                    {/* View Blueprint button */}
                    <span
                      className={`project-blueprint-btn inline-flex items-center gap-1 px-3.5 py-1.5 rounded font-mono text-xs font-bold transition-all ${
                        isCream
                          ? "bg-[#14213D] text-[#F4EDE0] shadow-[2px_2px_0px_0px_rgba(20,33,61,0.3)] group-hover:translate-x-0.5"
                          : "bg-[#F4EDE0] text-[#14213D] shadow-[2px_2px_0px_0px_rgba(244,237,224,0.3)] group-hover:translate-x-0.5"
                      }`}
                    >
                      <span className="project-blueprint-text">BLUEPRINT</span>
                      <ArrowRight size={13} className="project-blueprint-arrow" />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* 3 Compact Additional Builds */}
        <div className="mt-14 pt-10 border-t border-[#F4EDE0]/15">
          <div className="flex items-center justify-between mb-5">
            <div>
              <span className="font-mono text-xs text-[#F4EDE0]/60 tracking-widest uppercase block font-bold">
                LAB EXPERIMENTS
              </span>
              <h3 className="font-heading font-black text-xl text-[#F4EDE0]">
                Additional Microcontroller Builds
              </h3>
            </div>
            <a
              href="https://github.com/Zenith-ss"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-[#F4EDE0] hover:underline flex items-center gap-1 font-bold"
            >
              <GithubIcon size={12} />
              <span>GITHUB PROFILES ↗</span>
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {LAB_PROJECTS.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded card-3d-navy flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-[10px] text-[#F4EDE0]/60 tracking-widest block uppercase mb-1 font-bold">
                    {item.type}
                  </span>
                  <h4 className="font-heading font-bold text-sm sm:text-base text-[#F4EDE0] mb-1.5">
                    {item.title}
                  </h4>
                  <p className="font-body text-xs sm:text-sm text-[#F4EDE0]/70 leading-relaxed mb-3">
                    {item.desc}
                  </p>
                </div>
                <div className="flex flex-wrap gap-1 pt-2.5 border-t border-[#F4EDE0]/10">
                  {item.tech.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[10px] text-[#F4EDE0]/60 px-1.5 py-0.5 rounded bg-[#F4EDE0]/5 font-semibold"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
