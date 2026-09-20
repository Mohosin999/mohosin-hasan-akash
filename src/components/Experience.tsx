import { jobs } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="scroll-mt-16 border-t border-[#1f1f1f] sm:scroll-mt-20 light:border-zinc-200"
    >
      <div className="container-x py-12 sm:py-16 lg:py-20">
        <SectionHeading
          index="03"
          eyebrow="EXPERIENCE"
          title="Where I've worked."
          description="Impact-focused. Details on request, happy to walk through architecture, tradeoffs, and incidents."
        />
        <div id="experience-heading" className="sr-only">Experience</div>

        <ol className="relative space-y-6 border-l border-[#262626] pl-5 sm:space-y-8 sm:pl-8 light:border-zinc-200">
          {jobs.map((job) => (
            <li key={`${job.company}-${job.role}`} className="relative min-w-0">
              <span
                aria-hidden="true"
                className="absolute -left-[25px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-[#0a0a0a] bg-cyan-400 sm:-left-[37px] light:border-white"
              />
              <Reveal>
                <div className="flex min-w-0 flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                  <h3 className="min-w-0 text-base font-semibold tracking-tight text-[#ededed] sm:text-lg light:text-zinc-900">
                    {job.role}{" "}
                    <span className="font-normal text-[#666] light:text-zinc-500">
                      @ {job.company}
                    </span>
                  </h3>
                  <p className="shrink-0 font-mono text-xs text-[#666] light:text-zinc-500">
                    {job.duration} · {job.location}
                  </p>
                </div>
                <ul className="mt-3 list-disc space-y-1.5 pl-4 text-sm leading-relaxed text-[#a1a1a1] marker:text-zinc-600 sm:text-[15px] light:text-zinc-600">
                  {job.bullets.map((b, i) => (
                    <li key={i} className="text-pretty">{b}</li>
                  ))}
                </ul>
                <ul aria-label={`${job.role} at ${job.company} tech`} className="mt-3 flex flex-wrap gap-1.5">
                  {job.stack.map((s) => (
                    <li key={s}>
                      <span className="tag">{s}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
