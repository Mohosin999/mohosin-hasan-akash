import { projects } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function SelectedWork() {
  return (
    <section id="work" aria-labelledby="work-heading" className="scroll-mt-16 sm:scroll-mt-20">
      <div className="container-x py-12 sm:py-16 lg:py-20">
        <SectionHeading
          index="01"
          eyebrow="SELECTED WORK"
          title="Things I've built and shipped."
        />
        <div id="work-heading" className="sr-only">Selected work</div>

        <ul className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2">
          {projects.map((p) => (
            <li key={p.name} className="min-w-0">
              <Reveal className="h-full">
                <article className="card card-hover flex h-full min-w-0 flex-col p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="min-w-0 truncate font-mono text-base font-semibold text-[#ededed] sm:text-lg light:text-zinc-900">
                      <span className="text-cyan-400" aria-hidden="true">▸ </span>
                      {p.name}
                    </h3>
                    {/* <span className="shrink-0 rounded border border-emerald-400/20 bg-emerald-400/10 px-2 py-0.5 font-mono text-[11px] text-emerald-300 light:border-emerald-600/20 light:bg-emerald-600/10 light:text-emerald-700">
                      {p.metric}
                    </span> */}
                  </div>
                  {/* <p className="mt-1 font-mono text-[11px] text-[#666] light:text-zinc-400">
                    {p.metricLabel}
                  </p> */}
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-[#a1a1a1] light:text-zinc-600">
                    {p.description}
                  </p>
                  <ul aria-label={`${p.name} tech stack`} className="mt-4 flex flex-wrap gap-1.5">
                    {p.stack.map((s) => (
                      <li key={s}>
                        <span className="tag">{s}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-[#222] pt-4 font-mono text-[13px] light:border-zinc-200">
                    <a
                      href={p.live}
                      className="text-[#ededed] underline decoration-zinc-600 underline-offset-4 transition-colors hover:text-cyan-300 hover:decoration-cyan-300 light:text-zinc-900 light:decoration-zinc-300"
                    >
                      Live ↗
                    </a>
                    <a
                      href={p.github}
                      className="text-[#a1a1a1] underline decoration-zinc-700 underline-offset-4 transition-colors hover:text-cyan-300 hover:decoration-cyan-300 light:text-zinc-600"
                    >
                      GitHub ↗
                    </a>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
