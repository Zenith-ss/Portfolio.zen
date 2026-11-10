"use client";

import { useState } from "react";
import { Mail, ArrowUpRight, Copy, Check, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";
import { sounds } from "../utils/sound";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "ssinghzh211@gmail.com";

  const handleCopyEmail = () => {
    sounds.playClick();
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const contactChannels = [
    {
      title: "Location & Status",
      label: "Raipur, Chhattisgarh, India",
      subtext: "BIT Raipur (CSVTU) · Available for Hardware & Hackathons",
      action: "Timezone: IST (UTC+5:30)",
      href: "https://maps.google.com/?q=Bhilai+Institute+of+Technology+Raipur",
      icon: <MapPin size={18} />,
      badge: "ACTIVE BUILDER",
      isExternal: true,
    },
    {
      title: "LinkedIn Network",
      label: "in/sameer-singh-5a74a9379",
      subtext: "Professional updates, hackathon achievements & connect",
      action: "Connect on LinkedIn",
      href: "https://linkedin.com/in/sameer-singh-5a74a9379",
      icon: <LinkedinIcon size={18} />,
      badge: "NETWORKING",
      isExternal: true,
    },
    {
      title: "GitHub Repositories",
      label: "github.com/Zenith-ss",
      subtext: "Open-source firmware, project codebases & prototypes",
      action: "Browse Repositories",
      href: "https://github.com/Zenith-ss",
      icon: <GithubIcon size={18} />,
      badge: "CODE REPOS",
      isExternal: true,
    },
  ];

  return (
    <section id="contact" className="py-20 sm:py-32 bg-[#0A1120] border-b border-[#F4EDE0]/15 relative">
      <div className="px-5 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-6">
          <span className="font-mono text-xs tracking-widest text-[#F4EDE0] uppercase font-bold">
            07 // INITIATE CONTACT
          </span>
          <div className="flex-1 h-px bg-[#F4EDE0]/20" />
        </div>

        {/* Hero Contact Headline */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#F4EDE0] text-[#14213D] font-mono text-xs tracking-wider uppercase mb-4 font-bold shadow-[2px_2px_0px_0px_rgba(244,237,224,0.3)]">
            <span>OPEN FOR PROTOTYPING &amp; COLLABORATIONS</span>
          </div>

          <h2 className="font-heading font-black text-3xl sm:text-5xl text-[#F4EDE0] leading-[1.08] tracking-tight mb-4">
            HAVE AN INTERESTING IDEA?{" "}
            <span className="text-[#F4EDE0]/45 block sm:inline">
              LET&apos;S BUILD SOMETHING.
            </span>
          </h2>

          <p className="font-body text-sm sm:text-base text-[#F4EDE0]/75 max-w-xl leading-relaxed">
            Whether you want to discuss embedded systems, edge computing, robotics,
            or collaborative hackathons — I&apos;m always eager to connect.
          </p>
        </div>

        {/* Primary Communication Channel Box in Solid 3D Cream (High cream presence!) */}
        <div className="p-7 sm:p-9 rounded-xl card-3d-cream mb-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-2 h-2 rounded-full bg-[#14213D] animate-pulse" />
                <span className="font-mono text-xs text-[#14213D] tracking-widest uppercase font-bold">
                  PRIMARY COMMUNICATION CHANNEL
                </span>
              </div>
              <a
                href={`mailto:${email}`}
                className="font-heading font-black text-2xl sm:text-3xl text-[#14213D] hover:underline tracking-tight block"
              >
                {email}
              </a>
              <span className="font-mono text-xs text-[#14213D]/70 block mt-1 font-medium">
                Direct inbox · Typical response within 24 hours · Raipur, India (IST)
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
              {/* Copy Email Button with 3D Tactile Click */}
              <button
                onClick={handleCopyEmail}
                className="btn-3d-navy inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded font-mono text-xs font-bold tracking-wider cursor-pointer w-full sm:w-auto"
              >
                {copied ? (
                  <>
                    <Check size={14} className="stroke-[3]" />
                    <span>COPIED TO CLIPBOARD!</span>
                  </>
                ) : (
                  <>
                    <Copy size={14} />
                    <span>COPY EMAIL</span>
                  </>
                )}
              </button>

              <a
                href={`mailto:${email}`}
                className="btn-3d-navy inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded font-mono text-xs font-bold tracking-wider cursor-pointer w-full sm:w-auto"
              >
                <span>OPEN MAIL CLIENT</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </div>

        {/* 3 Balanced Channel Cards with 3D tactile borders */}
        <div className="grid md:grid-cols-3 gap-4 sm:gap-5">
          {contactChannels.map((channel, idx) => (
            <a
              key={idx}
              href={channel.href}
              target={channel.isExternal ? "_blank" : undefined}
              rel={channel.isExternal ? "noopener noreferrer" : undefined}
              onClick={() => sounds.playClick()}
              onMouseEnter={() => sounds.playHover()}
              className="p-5 rounded card-3d-navy flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 rounded bg-[#F4EDE0] text-[#14213D]">
                    {channel.icon}
                  </div>
                  <span className="font-mono text-[10px] text-[#F4EDE0] px-2 py-0.5 rounded border border-[#F4EDE0]/30 font-bold tracking-wider">
                    {channel.badge}
                  </span>
                </div>

                <span className="font-mono text-xs text-[#F4EDE0]/50 tracking-wider uppercase block mb-1">
                  {channel.title}
                </span>

                <div className="font-heading font-bold text-sm sm:text-base text-[#F4EDE0]">
                  {channel.label}
                </div>

                <p className="font-body text-xs text-[#F4EDE0]/65 mt-1 leading-relaxed">
                  {channel.subtext}
                </p>
              </div>

              <div className="pt-3 mt-4 border-t border-[#F4EDE0]/10 flex items-center justify-between font-mono text-[11px] text-[#F4EDE0]/70 group-hover:text-[#F4EDE0] transition-colors font-bold">
                <span>{channel.action}</span>
                <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
