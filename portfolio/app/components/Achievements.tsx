"use client";

import { Trophy, Award, Flag, CheckCircle2 } from "lucide-react";
import { sounds } from "../utils/sound";

type Achievement = {
  id: string;
  year: string;
  event: string;
  result: string;
  prize?: string;
  description: string;
  category: string;
  icon: React.ReactNode;
};

const ACHIEVEMENTS: Achievement[] = [
  {
    id: "navomesh",
    year: "2026",
    event: "NAVOMESH 2026",
    result: "Special Recognition",
    prize: "₹10,000 Cash Prize",
    description:
      "Awarded Special Recognition for the FLINT Edge AI prototype, demonstrating on-device computer vision on Raspberry Pi 5.",
    category: "INNOVATION & EDGE AI",
    icon: <Trophy size={16} />,
  },
  {
    id: "ignition",
    year: "2025",
    event: "IGNITION 2.0",
    result: "2nd Runner-Up",
    prize: "Podium Finish",
    description:
      "2nd Runner-Up in the Obstacle Car Race with a custom four-motor chassis controlled via ESP32 wireless telemetry.",
    category: "ROBOTICS & HARDWARE",
    icon: <Award size={16} />,
  },
  {
    id: "prayatna",
    year: "2025",
    event: "PRAYATNA 3.0",
    result: "National Hackathon",
    prize: "36-Hour Sprint",
    description:
      "Participated in a 36-hour continuous national hackathon as part of Team UNFAZED, executing rapid product prototyping.",
    category: "RAPID PROTOTYPING",
    icon: <Flag size={16} />,
  },
  {
    id: "sih",
    year: "2026",
    event: "SMART INDIA HACKATHON 2026",
    result: "Institute Selection Qualified",
    prize: "Internal Round Winner",
    description:
      "Selected through Bhilai Institute of Technology's internal screening round for Smart India Hackathon 2026.",
    category: "NATIONAL HACKATHON",
    icon: <CheckCircle2 size={16} />,
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 sm:py-28 bg-[#F4EDE0] text-[#14213D] border-b-2 border-[#14213D] relative">
      <div className="px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-5">
          <span className="achievements-section-tag font-mono text-xs tracking-widest text-[#14213D] uppercase font-bold">
            04 // HACKATHONS &amp; ACHIEVEMENTS
          </span>
          <div className="flex-1 h-px bg-[#14213D]/30" />
        </div>

        <div className="max-w-2xl mb-10">
          <h2 className="achievements-heading font-heading font-black text-3xl sm:text-4xl text-[#14213D] tracking-tight mb-2">
            Tested under pressure. Validated through execution.
          </h2>
          <p className="achievements-subtext font-body text-sm text-[#14213D]/80">
            Track record across competitive hackathons, robotics challenges, and institute rounds.
          </p>
        </div>

        {/* 4 Achievements Grid with tactile 3D Navy Cards on Cream Background */}
        <div className="grid md:grid-cols-2 gap-5">
          {ACHIEVEMENTS.map((item) => (
            <div
              key={item.id}
              onMouseEnter={() => sounds.playHover()}
              className="p-6 rounded bg-[#FAF6F0] border-2 border-[#14213D] shadow-[4px_4px_0px_0px_#14213D] hover:shadow-[6px_6px_0px_0px_#14213D] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Year + Category + Prize Tag */}
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs font-bold text-[#14213D]/60 tracking-wider">
                    {item.year} // {item.category}
                  </span>
                  {item.prize && (
                    <span className="font-mono text-[11px] font-bold px-2.5 py-0.5 rounded bg-[#14213D] text-[#F4EDE0]">
                      {item.prize}
                    </span>
                  )}
                </div>

                {/* Event Name */}
                <div className="flex items-start gap-3 mb-2">
                  <div className="p-2 rounded bg-[#14213D] text-[#F4EDE0] shrink-0 mt-0.5">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-heading font-black text-xl text-[#14213D] tracking-tight">
                      {item.event}
                    </h3>
                    <div className="font-mono text-xs font-bold text-[#14213D]/80 mt-0.5">
                      {item.result}
                    </div>
                  </div>
                </div>

                {/* Description (Ultra concise) */}
                <p className="font-body text-xs text-[#14213D]/75 leading-relaxed mt-2.5">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 mt-4 border-t border-[#14213D]/15 flex items-center justify-between font-mono text-[10px] text-[#14213D]/60 font-semibold">
                <span>VERIFIED RECORD</span>
                <span>STATUS: DOCUMENTED ✓</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
