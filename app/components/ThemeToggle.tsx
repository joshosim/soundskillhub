"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      const storedTheme = window.localStorage.getItem("soundskillhub-theme") as Theme | null;
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const nextTheme = storedTheme ?? (prefersDark ? "dark" : "light");

      setTheme(nextTheme);
      document.documentElement.classList.toggle("dark", nextTheme === "dark");
      setMounted(true);
    }, 0);

    return () => window.clearTimeout(timeout);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";

    setTheme(nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
    window.localStorage.setItem("soundskillhub-theme", nextTheme);
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex size-10 items-center justify-center rounded-full border border-violet-200 bg-white/85 text-violet-700 shadow-sm transition-colors hover:bg-violet-50 dark:border-white/15 dark:bg-white/10 dark:text-amber-200 dark:hover:bg-white/15"
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      title={theme === "dark" ? "Light mode" : "Dark mode"}
    >
      {mounted && theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
