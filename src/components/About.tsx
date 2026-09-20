import { aboutParagraphs } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const focusNow = ["Auditing ATSUp architecture", "System design in practice", "AI engineering workflows"];

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="scroll-mt-16 border-t border-[#1f1f1f] sm:scroll-mt-20 light:border-zinc-200"
    >
      <div className="container-x py-12 sm:py-16 lg:py-20">
        <SectionHeading index="02" eyebrow="ABOUT" title="Engineer first." />
        <div id="about-heading" className="sr-only">About</div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:gap-12">
          <Reveal>
            <div className="max-w-none space-y-4 text-sm leading-relaxed text-[#a1a1a1] sm:text-[15px] light:text-zinc-600">
              {aboutParagraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <aside
              aria-label="Current focus"
              className="card h-fit p-5 sm:p-6"
            >
              <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-[#a1a1a1] light:text-zinc-500">
                current_focus.log
              </h3>
              <ul className="mt-3 space-y-2.5">
                {focusNow.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-2 font-mono text-[13px] text-[#ededed] light:text-zinc-800"
                  >
                    <span className="text-emerald-400" aria-hidden="true">●</span>
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-4 border-t border-[#222] pt-4 font-mono text-xs leading-relaxed text-[#666] light:border-zinc-200 light:text-zinc-500">
                stack: ts / next / pg
                <br />
                learning: system design + ai engineering
                <br />
                status: building ATSUp
              </div>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
