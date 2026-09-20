import { skillGroups } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <section
      id="stack"
      aria-labelledby="stack-heading"
      className="scroll-mt-16 border-t border-[#1f1f1f] sm:scroll-mt-20 light:border-zinc-200"
    >
      <div className="container-x py-12 sm:py-16 lg:py-20">
        <SectionHeading
          index="04"
          eyebrow="STACK"
          title="Tools I reach for."
          description="No progress bars. Just what I use in production."
        />
        <div id="stack-heading" className="sr-only">Skills</div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
          {skillGroups.map((g) => (
            <Reveal key={g.title} className="h-full">
              <div className="card h-full p-5">
                <h3 className="font-mono text-xs font-medium uppercase tracking-[0.15em] text-cyan-400">
                  {g.title}
                </h3>
                <ul className="mt-3 flex flex-wrap gap-1.5" aria-label={`${g.title} skills`}>
                  {g.items.map((s) => (
                    <li key={s}>
                      <span className="tag">{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-6 font-mono text-xs leading-relaxed text-[#666] sm:text-[13px] light:text-zinc-500">
          <span className="text-cyan-400">$</span> also_comfortable_with --testing(vitest, playwright)
          --observability(prometheus, grafana) --ci(actions, docker)
        </p>
      </div>
    </section>
  );
}
