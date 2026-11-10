"use client";

import { GraduationCap, Award, Calendar, MapPin, School, BookOpen } from "lucide-react";
import { sounds } from "../utils/sound";

export default function Education() {
  const academicRecords = [
    {
      level: "UNDERGRADUATE DEGREE",
      period: "2024 – PRESENT",
      degree: "B.Tech in Electrical & Electronics Engineering",
      institution: "Bhilai Institute of Technology, Raipur",
      board: "CSVTU Affiliated",
      scoreLabel: "CUMULATIVE CGPA",
      score: "8.76",
      maxScore: "/ 10.0",
      status: "Currently in 3rd Semester",
      icon: <GraduationCap size={18} />,
      isCurrent: true,
    },
    {
      level: "SENIOR SECONDARY (CLASS XII)",
      period: "COMPLETED 2024",
      degree: "Higher Secondary Certificate (PCM)",
      institution: "Sant Dnyaneshwar Higher Secondary School",
      board: "CGBSE Board",
      scoreLabel: "BOARD PERCENTAGE",
      score: "72%",
      maxScore: "",
      status: "Year of Passing: 2024",
      icon: <School size={18} />,
      isCurrent: false,
    },
    {
      level: "SECONDARY SCHOOL (CLASS X)",
      period: "COMPLETED 2022",
      degree: "Secondary School Examination",
      institution: "Dronacharya Public School",
      board: "CBSE Board",
      scoreLabel: "BOARD PERCENTAGE",
      score: "82%",
      maxScore: "",
      status: "Year of Passing: 2022",
      icon: <BookOpen size={18} />,
      isCurrent: false,
    },
  ];

  return (
    <section id="education" className="py-20 sm:py-28 bg-[#0A1120] border-b border-[#F4EDE0]/15">
      <div className="px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-6">
          <span className="font-mono text-xs tracking-widest text-[#F4EDE0] uppercase font-bold">
            06 // ACADEMIC FOUNDATION
          </span>
          <div className="flex-1 h-px bg-[#F4EDE0]/20" />
        </div>

        <div className="max-w-2xl mb-10">
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-[#F4EDE0] tracking-tight mb-2">
            Education &amp; Qualifications
          </h2>
          <p className="font-body text-sm text-[#F4EDE0]/70">
            Chronological academic progression from secondary schooling to ongoing undergraduate engineering studies.
          </p>
        </div>

        {/* 3 Academic Milestone Cards with 3D tactile borders */}
        <div className="space-y-6">
          {academicRecords.map((item, idx) => (
            <div
              key={idx}
              onMouseEnter={() => sounds.playHover()}
              className={`p-6 sm:p-8 rounded-xl transition-all duration-200 ${
                item.isCurrent
                  ? "card-3d-cream"
                  : "card-3d-navy"
              }`}
            >
              <div className="grid lg:grid-cols-12 gap-6 items-center">
                {/* Left: Milestone details (8 cols) */}
                <div className="lg:col-span-8">
                  <div className="flex flex-wrap items-center gap-2.5 mb-3">
                    <span
                      className={`education-badge-pill font-mono text-[11px] px-2.5 py-0.5 rounded font-bold uppercase tracking-wider flex items-center gap-1.5 ${
                        item.isCurrent
                          ? "bg-[#14213D] text-[#F4EDE0]"
                          : "bg-[#F4EDE0] text-[#14213D]"
                      }`}
                    >
                      <span className="education-badge-icon">{item.icon}</span>
                      <span className="education-badge-text">{item.level}</span>
                    </span>
                    <span
                      className={`font-mono text-[11px] ${
                        item.isCurrent ? "text-[#14213D]/70" : "text-[#F4EDE0]/60"
                      }`}
                    >
                      {item.period}
                    </span>
                  </div>

                  <h3
                    className={`font-heading font-black text-xl sm:text-2xl tracking-tight mb-1 ${
                      item.isCurrent ? "text-[#14213D]" : "text-[#F4EDE0]"
                    }`}
                  >
                    {item.degree}
                  </h3>

                  <p
                    className={`font-body text-base font-bold mb-3 ${
                      item.isCurrent ? "text-[#14213D]/90" : "text-[#F4EDE0]/90"
                    }`}
                  >
                    {item.institution}
                  </p>

                  <div
                    className={`flex flex-wrap items-center gap-4 font-mono text-xs ${
                      item.isCurrent ? "text-[#14213D]/70" : "text-[#F4EDE0]/60"
                    }`}
                  >
                    <span className="flex items-center gap-1 font-semibold">
                      <Award size={13} />
                      <span>{item.board}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={13} />
                      <span>{item.status}</span>
                    </span>
                  </div>
                </div>

                {/* Right: Academic Score (4 cols) */}
                <div
                  className={`lg:col-span-4 lg:border-l lg:pl-8 flex flex-col justify-center ${
                    item.isCurrent ? "border-[#14213D]/20" : "border-[#F4EDE0]/15"
                  }`}
                >
                  <span
                    className={`font-mono text-xs tracking-widest uppercase block mb-1 font-bold ${
                      item.isCurrent ? "text-[#14213D]/70" : "text-[#F4EDE0]/50"
                    }`}
                  >
                    {item.scoreLabel}
                  </span>
                  <div className="flex items-baseline gap-1.5">
                    <span
                      className={`font-heading font-black text-4xl sm:text-5xl tracking-tight ${
                        item.isCurrent ? "text-[#14213D]" : "text-[#F4EDE0]"
                      }`}
                    >
                      {item.score}
                    </span>
                    {item.maxScore && (
                      <span
                        className={`font-mono text-sm font-bold ${
                          item.isCurrent ? "text-[#14213D]/60" : "text-[#F4EDE0]/50"
                        }`}
                      >
                        {item.maxScore}
                      </span>
                    )}
                  </div>
                  <span
                    className={`font-body text-xs mt-1 ${
                      item.isCurrent ? "text-[#14213D]/75" : "text-[#F4EDE0]/60"
                    }`}
                  >
                    {item.isCurrent ? "Raipur, Chhattisgarh" : "Verified Academic Record"}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
