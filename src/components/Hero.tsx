import { profile } from "@/data/portfolio";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="container-x pb-14 pt-12 sm:pb-20 sm:pt-20 lg:pt-24">
      <Reveal>
        <p className="mb-4 inline-flex max-w-full items-center gap-2 rounded-full border border-[#262626] bg-[#161616] px-3 py-1.5 font-mono text-[11px] leading-none text-[#a1a1a1] sm:text-xs light:border-zinc-200 light:bg-zinc-50 light:text-zinc-600">
          <span className="relative flex h-2 w-2 shrink-0" aria-hidden="true">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          <span className="truncate">{profile.status}</span>
        </p>

        <h1
          id="hero-heading"
          className="max-w-3xl text-balance text-4xl font-bold leading-[1.05] tracking-tight text-[#ededed] sm:text-5xl lg:text-6xl light:text-zinc-900"
        >
          {profile.name}
        </h1>
        <p className="mt-2 font-mono text-sm text-cyan-400 sm:text-base">
          {"//"} {profile.role}
        </p>
        <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-[#a1a1a1] sm:text-lg light:text-zinc-600">
          {profile.tagline}
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center">
          <a
            href="#work"
            className="inline-flex min-h-[44px] w-full items-center justify-center rounded-md bg-[#ededed] px-5 py-3 text-sm font-semibold text-black transition-colors hover:bg-white focus-visible:outline-cyan-400 sm:w-auto light:bg-zinc-900 light:text-white light:hover:bg-zinc-800"
          >
            View Work ↓
          </a>
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-[44px] w-full items-center justify-center rounded-md border border-[#2a2a2a] px-5 py-3 font-mono text-sm text-[#ededed] transition-colors hover:border-zinc-500 hover:bg-[#1a1a1a] sm:w-auto light:border-zinc-300 light:text-zinc-900 light:hover:border-zinc-400 light:hover:bg-zinc-100"
          >
            Resume →
          </a>
        </div>

        <dl className="mt-8 grid max-w-lg grid-cols-3 gap-3 border-t border-[#1f1f1f] pt-6 font-mono text-xs sm:gap-4 light:border-zinc-200">
          {[
            ["$ whoami", "full-stack"],
            ["$ uptime", "3+ yrs"],
            ["$ location", "remote • bangladesh"],
          ].map(([k, v]) => (
            <div key={k} className="min-w-0">
              <dt className="truncate text-[#666] light:text-zinc-400">{k}</dt>
              <dd className="mt-1 truncate text-[#ededed] light:text-zinc-900">{v}</dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </section>
  );
}
