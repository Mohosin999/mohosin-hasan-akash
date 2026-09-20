"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isLight, setIsLight] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- mount sync is intentional
    setMounted(true);
    try {
      setIsLight(document.documentElement.classList.contains("light"));
    } catch {
      /* noop */
    }
  }, []);

  function toggle() {
    const next = !isLight;
    setIsLight(next);
    try {
      if (next) {
        document.documentElement.classList.add("light");
        localStorage.setItem("theme", "light");
      } else {
        document.documentElement.classList.remove("light");
        localStorage.setItem("theme", "dark");
      }
    } catch {
      /* noop */
    }
  }

  if (!mounted) {
    return (
      <span
        aria-hidden="true"
        className="inline-block h-9 w-9 rounded-md border border-[#262626]"
      />
    );
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isLight ? "Switch to dark mode" : "Switch to light mode"}
      aria-pressed={isLight}
      className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-[#262626] bg-transparent text-sm text-[#a1a1a1] transition-colors hover:border-zinc-500 hover:text-[#ededed] focus-visible:outline-2 dark:border-[#262626] light:border-zinc-300 light:text-zinc-600 light:hover:border-zinc-400 light:hover:text-zinc-900"
    >
      {isLight ? (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
        </svg>
      ) : (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
        </svg>
      )}
    </button>
  );
}
