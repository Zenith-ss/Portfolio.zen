"use client";

import { Cpu, Award, BookOpen, Layers } from "lucide-react";
import { sounds } from "../utils/sound";

export default function About() {
  const highlights = [
    {
      icon: <Cpu size={15} />,
      title: "Embedded Systems & Edge AI",
      desc: "Raspberry Pi 5 on-device inference, thermal & power management, ESP32 firmware.",
    },
    {
      icon: <Layers size={15} />,
      title: "Hardware-Software Integration",
      desc: "Sensor interfacing, H-bridge motor drivers, relay logic, and character displays.",
    },
    {
      icon: <BookOpen size={15} />,
      title: "Mobile App Development",
      desc: "Flutter & Dart cross-platform interfaces, state handling, and local storage.",
    },
    {
      icon: <Award size={15} />,
      title: "Competitive Prototyping",
      desc: "Navomesh '26 Special Recognition (₹10K) & Ignition 2.0 2nd Runner-Up.",
    },
  ];

  const focusPills = [
    "Embedded Systems",
    "Edge AI Prototyping",
    "YOLO Fine-Tuning",
    "ESP32 Robotics",
    "Motor Control",
    "Sensor Interfacing",
    "Flutter Apps",
  ];

  return (
    <section id="about" className="py-20 sm:py-28 bg-[#0A1120] border-b border-[#F4EDE0]/15">
      <div className="px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-10">
          <span className="font-mono text-xs tracking-widest text-[#F4EDE0] font-bold uppercase">
            02 // ABOUT THE ENGINEER
          </span>
          <div className="flex-1 h-px bg-[#F4EDE0]/20" />
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Shortened Narrative (7 cols) - GPA removed */}
          <div className="lg:col-span-7">
            <h2 className="font-heading font-black text-2xl sm:text-4xl text-[#F4EDE0] leading-tight tracking-tight mb-5">
              Building physical systems from circuit logic to edge compute.
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#F4EDE0]/80 font-body leading-relaxed">
              <p>
                I&apos;m Sameer, an Electrical and Electronics Engineering undergraduate
                at <strong className="text-[#F4EDE0] font-bold">Bhilai Institute of Technology, Raipur (CSVTU)</strong>, currently in my 3rd semester exploring microcontrollers, edge machine learning, and physical prototyping.
              </p>
              <p>
                My focus lies in hardware-software convergence: programming microcontrollers,
                fine-tuning computer vision models for deployment on Raspberry Pi 5, designing
                robotic rovers with differential motor control, and building mobile interfaces in Flutter.
              </p>
            </div>

            {/* Focus Tags */}
            <div className="mt-8 pt-6 border-t border-[#F4EDE0]/15">
              <span className="font-mono text-xs text-[#F4EDE0]/50 tracking-widest uppercase block mb-3 font-bold">
                PRIMARY FOCUS DOMAINS
              </span>
              <div className="flex flex-wrap gap-2">
                {focusPills.map((pill) => (
                  <span
                    key={pill}
                    className="px-3 py-1 rounded border border-[#F4EDE0]/30 bg-[#F4EDE0]/5 font-mono text-xs text-[#F4EDE0] tracking-wider shadow-[2px_2px_0px_0px_rgba(244,237,224,0.2)]"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: 3D Cream Academic & Capability Cards (5 cols) - GPA removed from badge */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {/* Academic Snapshot Card in Solid Cream */}
            <div className="p-6 rounded card-3d-cream">
              <div className="flex items-center justify-between mb-3 pb-2 border-b border-[#14213D]/20">
                <span className="font-mono text-xs text-[#14213D] font-bold tracking-widest uppercase">
                  ACADEMIC AFFILIATION
                </span>
                <span className="font-mono text-xs font-bold bg-[#14213D] text-[#F4EDE0] px-2 py-0.5 rounded">
                  EEE BRANCH
                </span>
              </div>
              <h3 className="font-heading font-black text-base text-[#14213D] mb-0.5">
                Bhilai Institute of Technology, Raipur
              </h3>
              <p className="font-body text-xs text-[#14213D]/80 mb-2">
                B.Tech in Electrical and Electronics Engineering · CSVTU
              </p>
              <div className="flex items-center gap-3 text-xs font-mono text-[#14213D]/70 font-semibold">
                <span>SEMESTER: 3RD</span>
                <span>•</span>
                <span>RAIPUR, CG</span>
              </div>
            </div>

            {/* 4 Feature Highlights in 3D Navy Cards */}
            <div className="grid sm:grid-cols-2 gap-3">
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  onMouseEnter={() => sounds.playHover()}
                  className="p-4 rounded card-3d-navy"
                >
                  <div className="p-2 rounded bg-[#F4EDE0] text-[#14213D] inline-block mb-2 font-bold">
                    {item.icon}
                  </div>
                  <h4 className="font-heading font-bold text-xs text-[#F4EDE0] mb-1">
                    {item.title}
                  </h4>
                  <p className="font-body text-[11px] text-[#F4EDE0]/70 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
