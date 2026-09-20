"use client";

import { useEffect, useState } from "react";
import { navLinks, profile } from "@/data/portfolio";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    function onResize() {
      if (window.innerWidth >= 768) setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open ]);

  return (
    <header className="sticky top-0 z-50 border-b border-[#1f1f1f] bg-[#0a0a0a]/90 backdrop-blur-md light:border-zinc-200 light:bg-white/90">
      <nav
        aria-label="Primary"
        className="container-x flex h-14 w-full items-center justify-between sm:h-16"
      >
        <a
          href="#top"
          className="font-mono text-sm font-semibold tracking-tight text-[#ededed] light:text-zinc-900"
          aria-label="Back to top"
        >
          <span className="text-cyan-400" aria-hidden="true">
            ~/ 
          </span>
          {profile.name.toLowerCase().replace(/\s+/g, "-")}
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded px-3 py-2 font-mono text-[13px] text-[#a1a1a1] transition-colors hover:bg-[#1a1a1a] hover:text-[#ededed] light:text-zinc-600 light:hover:bg-zinc-100 light:hover:text-zinc-900"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="ml-2">
            <ThemeToggle />
          </li>
        </ul>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-[#262626] text-[#ededed] transition-colors hover:border-zinc-500 light:border-zinc-300 light:text-zinc-900"
          >
            {open ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <path d="M3 6h18M3 12h18M3 18h18" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu panel */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="border-t border-[#1f1f1f] bg-[#0a0a0a] md:hidden light:border-zinc-200 light:bg-white"
      >
        <ul className="container-x flex flex-col gap-1 py-3">
          {navLinks.map((l, i) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 rounded-md px-3 py-3 font-mono text-sm text-[#ededed] transition-colors hover:bg-[#1a1a1a] active:bg-[#222] light:text-zinc-900 light:hover:bg-zinc-100"
              >
                <span className="w-6 shrink-0 font-mono text-xs text-cyan-400/80">
                  0{i + 1}
                </span>
                {l.label}
              </a>
            </li>
          ))}
          <li className="mt-1 border-t border-[#1f1f1f] pt-3 light:border-zinc-200">
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center rounded-md border border-[#2a2a2a] px-3 py-3 font-mono text-sm text-[#ededed] light:border-zinc-300 light:text-zinc-900"
            >
              Download Résumé →
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
