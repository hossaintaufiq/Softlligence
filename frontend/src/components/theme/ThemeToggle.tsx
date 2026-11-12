"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

type Theme = "light" | "dark";

/** Inline script run before paint so the saved or system theme never flashes. */
export const themeInitScript = `(function(){try{var p=new URLSearchParams(window.location.search).get("theme");var t=p==="light"||p==="dark"?p:localStorage.getItem("theme");if(t!=="light"&&t!=="dark"){t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}document.documentElement.setAttribute("data-theme",t);document.documentElement.style.colorScheme=t}catch(e){}})();`;

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    const current = document.documentElement.getAttribute("data-theme");
    setTheme(current === "dark" ? "dark" : "light");
  }, []);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    const root = document.documentElement;
    root.classList.add("theme-anim");
    root.setAttribute("data-theme", next);
    root.style.colorScheme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* storage can be blocked; the choice still applies for this visit */
    }
    setTheme(next);
    window.setTimeout(() => root.classList.remove("theme-anim"), 400);
  };

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggle}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      aria-pressed={theme === null ? undefined : isDark}
    >
      <Sun className="theme-toggle__sun" size={18} aria-hidden="true" />
      <Moon className="theme-toggle__moon" size={18} aria-hidden="true" />
    </button>
  );
}
