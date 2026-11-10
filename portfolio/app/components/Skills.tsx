"use client";

import { Code2, Cpu, Eye, Wrench, Terminal, Layout } from "lucide-react";
import { sounds } from "../utils/sound";

type SkillGroup = {
  title: string;
  icon: React.ReactNode;
  category: string;
  skills: { name: string; tag?: string }[];
};

const SKILL_GROUPS: SkillGroup[] = [
  {
    title: "Programming & Apps",
    category: "SOFTWARE",
    icon: <Code2 size={15} />,
    skills: [
      { name: "C", tag: "Firmware" },
      { name: "Dart", tag: "Logic" },
      { name: "Flutter", tag: "Mobile UI" },
    ],
  },
  {
    title: "Embedded Systems",
    category: "COMPUTE",
    icon: <Cpu size={15} />,
    skills: [
      { name: "Raspberry Pi 5", tag: "ARM SBC" },
      { name: "ESP32", tag: "Wi-Fi & BLE" },
      { name: "Arduino", tag: "AVR MCU" },
    ],
  },
  {
    title: "AI & Computer Vision",
    category: "INTELLIGENCE",
    icon: <Eye size={15} />,
    skills: [
      { name: "YOLO Fine-Tuning", tag: "Weights" },
      { name: "Model Integration", tag: "Edge SBC" },
      { name: "Edge AI Prototyping", tag: "On-Device" },
    ],
  },
  {
    title: "Hardware Integration",
    category: "PHYSICAL",
    icon: <Wrench size={15} />,
    skills: [
      { name: "Sensor Interfacing", tag: "Analog/Digital" },
      { name: "Motor Control", tag: "PWM / Drivers" },
      { name: "Relay Modules", tag: "AC Switching" },
      { name: "LCD Interfacing", tag: "I2C Displays" },
    ],
  },
  {
    title: "Tools & Ecosystem",
    category: "WORKFLOW",
    icon: <Terminal size={15} />,
    skills: [
      { name: "Arduino IDE", tag: "Toolchain" },
      { name: "Git & GitHub", tag: "Version Control" },
      { name: "Vercel", tag: "Deployments" },
    ],
  },
  {
    title: "Design & Prototyping",
    category: "INTERFACE",
    icon: <Layout size={15} />,
    skills: [
      { name: "UI/UX Design", tag: "User Flows" },
      { name: "Rapid Prototyping", tag: "Hardware & App" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-28 bg-[#0A1120] border-b border-[#F4EDE0]/15">
      <div className="px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-5">
          <span className="font-mono text-xs tracking-widest text-[#F4EDE0] uppercase font-bold">
            05 // TECHNICAL ARSENAL
          </span>
          <div className="flex-1 h-px bg-[#F4EDE0]/20" />
        </div>

        <div className="max-w-2xl mb-10">
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-[#F4EDE0] tracking-tight mb-2">
            Hands-on technical competencies.
          </h2>
          <p className="font-body text-sm text-[#F4EDE0]/70">
            Categorized breakdown of personal technical proficiency across embedded systems, vision, and applications.
          </p>
        </div>

        {/* 6 Clean 3D Skill Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {SKILL_GROUPS.map((group, idx) => (
            <div
              key={idx}
              onMouseEnter={() => sounds.playHover()}
              className="p-5 rounded card-3d-navy flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3 pb-2 border-b border-[#F4EDE0]/10">
                  <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-[#F4EDE0] font-bold">
                    <span className="p-1 rounded bg-[#F4EDE0] text-[#14213D]">{group.icon}</span>
                    <span>{group.category}</span>
                  </div>
                  <span className="font-mono text-[10px] text-[#F4EDE0]/40">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-base text-[#F4EDE0] mb-3">
                  {group.title}
                </h3>

                <ul className="space-y-1.5">
                  {group.skills.map((skill, sIdx) => (
                    <li
                      key={sIdx}
                      className="flex items-center justify-between p-2 rounded bg-[#0A1120] border border-[#F4EDE0]/10"
                    >
                      <span className="font-sans text-xs font-semibold text-[#F4EDE0]">
                        {skill.name}
                      </span>
                      {skill.tag && (
                        <span className="font-mono text-[10px] text-[#F4EDE0]/60">
                          {skill.tag}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-3 mt-4 border-t border-[#F4EDE0]/10 text-[10px] font-mono text-[#F4EDE0]/40 text-right">
                INDIVIDUAL PROFICIENCY
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
