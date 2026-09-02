"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const current =
      (document.documentElement.getAttribute("data-theme") as Theme) || "light";
    setTheme(current);
    setMounted(true);
  }, []);

  function toggleTheme() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("cb-theme", next);
    } catch {
      // localStorage may be unavailable (private mode, etc.) — theme still works for this session
    }
  }

  // Avoid rendering the wrong icon before we know the real theme
  if (!mounted) {
    return <div className="h-10 w-10 shrink-0" aria-hidden />;
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={theme === "dark" ? "สลับเป็นโหมดสว่าง" : "สลับเป็นโหมดมืด"}
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border text-lg transition-transform active:scale-90"
      style={{ borderColor: "var(--border)", background: "var(--surface)" }}
    >
      {theme === "dark" ? "🌙" : "☀️"}
    </button>
  );
}