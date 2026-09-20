import { profile } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Contact() {
  const year = new Date().getFullYear();
  return (
    <>
      <section
        id="contact"
        aria-labelledby="contact-heading"
        className="scroll-mt-16 border-t border-[#1f1f1f] sm:scroll-mt-20 light:border-zinc-200"
      >
        <div className="container-x py-12 sm:py-16 lg:py-20">
          <SectionHeading
            index="05"
            eyebrow="CONTACT"
            title="Let's build something reliable."
          />
          <div id="contact-heading" className="sr-only">Contact</div>

          <Reveal>
            <p className="max-w-xl text-sm leading-relaxed text-[#a1a1a1] sm:text-[15px] light:text-zinc-600">
              Currently available for full-time roles and interesting projects.
              Best way to reach me is email — I read everything.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex min-h-[44px] w-full items-center justify-center break-all rounded-md bg-[#ededed] px-5 py-3 font-mono text-sm font-semibold text-black transition-colors hover:bg-white sm:w-auto sm:break-normal light:bg-zinc-900 light:text-white light:hover:bg-zinc-800"
              >
                {profile.email}
              </a>
              <div className="flex w-full gap-3 sm:w-auto">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-[44px] flex-1 items-center justify-center rounded-md border border-[#2a2a2a] px-5 py-3 font-mono text-sm text-[#ededed] transition-colors hover:border-zinc-500 hover:bg-[#1a1a1a] sm:flex-none light:border-zinc-300 light:text-zinc-900 light:hover:bg-zinc-100"
                >
                  GitHub ↗
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-[44px] flex-1 items-center justify-center rounded-md border border-[#2a2a2a] px-5 py-3 font-mono text-sm text-[#ededed] transition-colors hover:border-zinc-500 hover:bg-[#1a1a1a] sm:flex-none light:border-zinc-300 light:text-zinc-900 light:hover:bg-zinc-100"
                >
                  LinkedIn ↗
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-[#1f1f1f] light:border-zinc-200">
        <div className="container-x flex flex-col gap-2 py-6 font-mono text-xs text-[#666] sm:flex-row sm:items-center sm:justify-between light:text-zinc-500">
          <p>© {year} {profile.name}. Built with Next.js + Tailwind.</p>
          <p>
            last_updated: {year} ·{" "}
            <a href="#top" className="underline underline-offset-4 hover:text-cyan-300">
              back_to_top ↑
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}
