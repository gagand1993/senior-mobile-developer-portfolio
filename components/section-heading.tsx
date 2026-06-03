type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-teal-450">{eyebrow}</p>
      <h2 className="text-3xl font-black text-white sm:text-4xl light:text-slate-950">{title}</h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-slate-300 light:text-slate-600">{description}</p>
      ) : null}
    </div>
  );
}
