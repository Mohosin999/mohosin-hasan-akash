export default function SectionHeading({
  index,
  eyebrow,
  title,
  description,
}: {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-6 sm:mb-8">
      <p className="section-label mb-2 sm:mb-3">
        <span className="text-cyan-400" aria-hidden="true">{index}.</span>{" "}
        {"//"} {eyebrow}
      </p>
      <h2 className="text-2xl font-bold tracking-tight text-[#ededed] sm:text-3xl light:text-zinc-900">
        {title}
      </h2>
      {description ? (
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[#a1a1a1] sm:text-[15px] light:text-zinc-600">
          {description}
        </p>
      ) : null}
    </div>
  );
}
