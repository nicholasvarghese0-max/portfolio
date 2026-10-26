import GradientField from "./GradientField";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[720px] overflow-hidden md:min-h-[820px]"
    >
      {/* animated blue gradient, full-bleed */}
      <GradientField className="pointer-events-none absolute inset-0 h-full w-full" />

      <div className="relative mx-auto min-h-[inherit] max-w-[1440px] px-6 pb-24 pt-32 md:px-10">
        {/* hairline */}
        <div
          aria-hidden
          className="absolute bottom-[8%] left-6 right-[12%] h-px bg-white md:left-10"
        />

        <Reveal>
          <span className="inline-block rounded-full bg-brand-soft px-4 py-1.5 text-sm text-brand shadow-[0_2px_6px_rgba(47,95,143,0.25)]">
            Ui/Ux Design
          </span>
        </Reveal>

        <Reveal delay={0.1} className="mt-16">
          <h1 className="font-display text-5xl font-medium md:text-6xl">
            Portfolio 26&rsquo;:
          </h1>
          <p className="mt-4 font-serif text-5xl italic leading-tight tracking-tight text-brand md:text-6xl">
            Ideate. Iterate. Innovate.
          </p>
        </Reveal>

        <Reveal delay={0.2} className="mt-8 max-w-xs">
          <p className="text-lg leading-snug">
            Crafting digital solutions that create measurable impact across
            platforms.
          </p>
        </Reveal>

        <Reveal delay={0.3} className="mt-32 md:mt-40">
          <p className="font-display text-xl md:text-2xl">
            Nicholas Mathew Varghese
          </p>
        </Reveal>
      </div>
    </section>
  );
}
