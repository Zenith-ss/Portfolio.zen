"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { sounds } from "../utils/sound";

type Theme = "dark" | "light";

type ThemeContextType = {
  theme: Theme;
  toggleTheme: (e?: React.MouseEvent) => void;
};

const ThemeContext = createContext<ThemeContextType>({
  theme: "dark",
  toggleTheme: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");
  const [isRippling, setIsRippling] = useState(false);
  const [rippleOrigin, setRippleOrigin] = useState({ x: 50, y: 50 });

  useEffect(() => {
    // Check saved theme preference
    const savedTheme = localStorage.getItem("sameer_theme") as Theme | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("light", savedTheme === "light");
    }
  }, []);

  const toggleTheme = (e?: React.MouseEvent) => {
    const nextTheme = theme === "dark" ? "light" : "dark";

    // Play resonant liquid water droplet sound
    sounds.playWaterDrop();

    if (e) {
      const rect = e.currentTarget.getBoundingClientRect();
      setRippleOrigin({
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
      });
    } else {
      setRippleOrigin({ x: window.innerWidth - 80, y: 30 });
    }

    // Trigger seamless water drop expanding ripple
    setIsRippling(true);

    // Switch theme halfway through when ripple expands over the viewport
    setTimeout(() => {
      setTheme(nextTheme);
      localStorage.setItem("sameer_theme", nextTheme);
      document.documentElement.classList.toggle("light", nextTheme === "light");
    }, 240);

    setTimeout(() => {
      setIsRippling(false);
    }, 750);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {/* Water Drop Ripple Overlay Effect */}
      {isRippling && (
        <div
          className="fixed inset-0 z-[999999] pointer-events-none"
          style={
            {
              backgroundColor: theme === "dark" ? "#FFFFFF" : "#0A1120",
              "--ripple-x": `${rippleOrigin.x}px`,
              "--ripple-y": `${rippleOrigin.y}px`,
              animation: "waterDropSpread 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards",
            } as React.CSSProperties
          }
        />
      )}
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
