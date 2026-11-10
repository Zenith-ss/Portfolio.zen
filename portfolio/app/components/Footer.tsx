"use client";

import { ArrowUp, FileText } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";
import { sounds } from "../utils/sound";

export default function Footer() {
  const scrollToTop = () => {
    sounds.playClick();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-10 bg-[#080D18] text-[#F4EDE0] border-t border-[#F4EDE0]/15 transition-colors">
      <div className="px-5 sm:px-8 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & Identity */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-2">
            <span className="font-heading font-black text-sm tracking-widest text-[#F4EDE0]">
              SAMEER SINGH
            </span>
            <span className="text-[#F4EDE0]/40 font-mono text-xs">//</span>
            <span className="font-mono text-xs text-[#F4EDE0]/80 font-bold">
              EEE UNDERGRADUATE
            </span>
          </div>
          <p className="font-body text-xs text-[#F4EDE0]/60 mt-1">
            Bhilai Institute of Technology, Raipur · CSVTU · Chhattisgarh, India
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/Zenith-ss"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sounds.playClick()}
            onMouseEnter={() => sounds.playHover()}
            aria-label="GitHub Profile"
            className="footer-social-btn p-2.5 rounded-xl border border-[#F4EDE0]/20 bg-[#14213D] text-[#F4EDE0] hover:bg-[#F4EDE0] hover:text-[#14213D] hover:scale-105 transition-all shadow-sm"
          >
            <GithubIcon size={15} />
          </a>
          <a
            href="https://linkedin.com/in/sameer-singh-5a74a9379"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sounds.playClick()}
            onMouseEnter={() => sounds.playHover()}
            aria-label="LinkedIn Profile"
            className="footer-social-btn p-2.5 rounded-xl border border-[#F4EDE0]/20 bg-[#14213D] text-[#F4EDE0] hover:bg-[#F4EDE0] hover:text-[#14213D] hover:scale-105 transition-all shadow-sm"
          >
            <LinkedinIcon size={15} />
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sounds.playClick()}
            onMouseEnter={() => sounds.playHover()}
            aria-label="View Resume PDF"
            className="footer-social-btn p-2.5 rounded-xl border border-[#F4EDE0]/20 bg-[#14213D] text-[#F4EDE0] hover:bg-[#F4EDE0] hover:text-[#14213D] hover:scale-105 transition-all shadow-sm"
          >
            <FileText size={15} />
          </a>
          <button
            onClick={scrollToTop}
            onMouseEnter={() => sounds.playHover()}
            aria-label="Back to top"
            className="footer-top-btn p-2.5 rounded-xl border border-[#F4EDE0]/40 bg-[#F4EDE0] text-[#14213D] hover:scale-105 transition-all cursor-pointer ml-2 shadow-[2px_2px_0px_0px_rgba(244,237,224,0.3)]"
          >
            <ArrowUp size={15} />
          </button>
        </div>
      </div>

      <div className="px-5 sm:px-8 lg:px-12 mt-8 pt-5 border-t border-[#F4EDE0]/10 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-[#F4EDE0]/60 gap-2">
        <span className="font-semibold tracking-wider">Designed By Sameer Singh</span>
        <span>© 2026 SAMEER SINGH · ALL RIGHTS RESERVED</span>
      </div>
    </footer>
  );
}
