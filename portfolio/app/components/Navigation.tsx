"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight, Sun, Moon, Volume2, VolumeX } from "lucide-react";
import { useTheme } from "./ThemeContext";
import { sounds } from "../utils/sound";

const NAV_LINKS = [
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/#projects" },
  { label: "Achievements", href: "/#achievements" },
  { label: "Skills", href: "/#skills" },
  { label: "Education", href: "/#education" },
  { label: "Contact", href: "/#contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isMuted, setIsMuted] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    setIsMuted(sounds.getMuted());

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sectionIds = ["about", "projects", "achievements", "skills", "education", "contact"];
      const scrollPosition = window.scrollY + 180;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && scrollPosition >= el.offsetTop) {
          setActiveSection(sectionIds[i]);
          return;
        }
      }
      if (window.scrollY < 200) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    sounds.playClick();
    if (href.startsWith("/#")) {
      const targetId = href.replace("/#", "");
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        e.preventDefault();
        setMobileMenuOpen(false);
        targetEl.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const toggleSound = () => {
    const muted = sounds.toggleMute();
    setIsMuted(muted);
    if (!muted) {
      sounds.playClick();
    }
  };

  return (
    <header
      className={`sticky top-0 z-[100] w-full transition-all duration-200 ${
        scrolled
          ? "bg-[#0A1120]/95 backdrop-blur-md border-b-2 border-[#F4EDE0]/20 py-3 sm:py-3.5 shadow-2xl shadow-[#000]/60"
          : "bg-[#0A1120]/90 backdrop-blur-md border-b border-[#F4EDE0]/15 py-4 sm:py-5"
      }`}
    >
      <div className="px-5 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Brand: Zenith without SS square box */}
        <Link
          href="/"
          onClick={() => sounds.playClick()}
          onMouseEnter={() => sounds.playHover()}
          className="group flex flex-col text-decoration-none"
        >
          <span className="font-heading font-black text-lg sm:text-xl tracking-wider text-[#F4EDE0] leading-none group-hover:opacity-80 transition-opacity">
            Zenith
          </span>
          <span className="font-mono text-[10px] sm:text-[11px] text-[#F4EDE0]/70 tracking-wider mt-1">
            EEE BUILDER · RAIPUR
          </span>
        </Link>

        {/* Desktop Navigation Links — Slightly Larger & More Prominent */}
        <nav className="hidden md:flex items-center gap-1.5 bg-[#14213D] border border-[#F4EDE0]/25 rounded-full px-3.5 py-1.5 shadow-[2px_2px_0px_0px_rgba(244,237,224,0.3)]">
          {NAV_LINKS.map((link) => {
            const sectionName = link.href.replace("/#", "");
            const isActive = activeSection === sectionName;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                onMouseEnter={() => sounds.playHover()}
                className={`px-3.5 py-1 text-xs font-mono uppercase tracking-wider rounded-full transition-all duration-150 ${
                  isActive
                    ? "bg-[#F4EDE0] text-[#14213D] font-bold shadow-sm"
                    : "text-[#F4EDE0]/80 hover:text-[#F4EDE0] hover:bg-[#F4EDE0]/10"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Action Controls: Sound Mute, Theme Toggle & Get in Touch */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Sound Mute/Unmute Toggle Button */}
          <button
            onClick={toggleSound}
            aria-label={isMuted ? "Unmute UI sounds" : "Mute UI sounds"}
            title={isMuted ? "Unmute UI Sounds" : "Mute UI Sounds"}
            className="p-2 rounded-full border border-[#F4EDE0]/30 text-[#F4EDE0] hover:bg-[#F4EDE0] hover:text-[#14213D] transition-all duration-200 cursor-pointer shadow-[2px_2px_0px_0px_rgba(244,237,224,0.2)] active:scale-90"
          >
            {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
          </button>

          {/* Water Drop Ripple Light/Dark Mode Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Bright / Dark Mode"
            title={theme === "dark" ? "Switch to White Mode" : "Switch to Dark Mode"}
            className="p-2 rounded-full border border-[#F4EDE0]/30 text-[#F4EDE0] hover:bg-[#F4EDE0] hover:text-[#14213D] transition-all duration-200 cursor-pointer shadow-[2px_2px_0px_0px_rgba(244,237,224,0.2)] active:scale-90"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <a
            href="/#contact"
            onClick={(e) => handleNavClick(e, "/#contact")}
            onMouseEnter={() => sounds.playHover()}
            className="btn-3d-cream inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 rounded-full font-mono text-xs font-bold tracking-wider"
          >
            <span>GET IN TOUCH</span>
            <ArrowUpRight size={14} />
          </a>
        </div>

        {/* Mobile Hamburger, Sound & Mobile Theme Toggle Button */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleSound}
            aria-label="Toggle Sound"
            className="p-2 rounded border border-[#F4EDE0]/30 text-[#F4EDE0] hover:bg-[#F4EDE0]/10 transition-colors"
          >
            {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
          </button>

          <button
            onClick={toggleTheme}
            aria-label="Toggle Bright / Dark Mode"
            className="p-2 rounded border border-[#F4EDE0]/30 text-[#F4EDE0] hover:bg-[#F4EDE0]/10 transition-colors"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <button
            onClick={() => {
              sounds.playClick();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="p-2 rounded border border-[#F4EDE0]/30 text-[#F4EDE0] hover:bg-[#F4EDE0]/10 transition-colors"
            aria-label={mobileMenuOpen ? "Close navigation" : "Open navigation"}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0A1120] border-b-2 border-[#F4EDE0]/20 px-6 py-4 shadow-2xl">
          <div className="flex flex-col gap-1.5">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="py-2.5 px-3 rounded text-sm font-mono tracking-wider text-[#F4EDE0]/80 hover:text-[#14213D] hover:bg-[#F4EDE0] border-b border-[#F4EDE0]/10 last:border-b-0 font-medium"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2.5 mt-2 border-t border-[#F4EDE0]/15">
              <a
                href="/#contact"
                onClick={(e) => handleNavClick(e, "/#contact")}
                className="btn-3d-cream w-full text-center py-2.5 rounded font-mono text-xs font-bold tracking-wider block"
              >
                GET IN TOUCH
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
