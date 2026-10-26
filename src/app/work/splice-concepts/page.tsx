import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { Poppins } from "next/font/google";
import GradientField from "@/components/GradientField";
import Header from "@/components/Header";
import MoreProjects from "@/components/MoreProjects";
import Reveal from "@/components/Reveal";
import SideNav from "@/components/case-study/SideNav";
import { Body, Caption, Section } from "@/components/case-study/parts";

const poppins = Poppins({ subsets: ["latin"], weight: "500" });

export const metadata: Metadata = {
  title: "Splice Concepts | Nicholas Mathew Varghese",
  description: "Branding for an upcoming tech consultancy company.",
};

const sections = [
  { id: "about-the-company", label: "About the company" },
  { id: "rough-sketches", label: "Rough Sketches" },
  { id: "digital-explorations", label: "Digital Explorations" },
  { id: "final-logo", label: "Final Logo" },
  { id: "colours-and-fonts", label: "Colours and fonts" },
  { id: "branding-material", label: "Branding Material" },
];

// natural image sizes in px; `crop` trims a transparent margin baked into the file
const branding: { n: number; w: number; h: number; crop?: number }[] = [
  { n: 1, w: 475, h: 303, crop: 16 },
  { n: 2, w: 475, h: 303 },
  { n: 3, w: 475, h: 666 },
  { n: 4, w: 307, h: 666 },
  { n: 5, w: 440, h: 576 },
  { n: 6, w: 510, h: 405 },
  { n: 7, w: 440, h: 330 },
  { n: 8, w: 511, h: 766 },
];
const brandingRows = [0, 2, 4, 6].map((i) => branding.slice(i, i + 2));

const swatches = [
  {
    label: "Background colour:",
    colours: ["#7BA5D7"],
    background: "#7BA5D7",
  },
  {
    label: "Gradient colour:",
    colours: ["#3668B2", "#682C8C"],
    background: "linear-gradient(to right, #3668B2, #682C8C)",
  },
  {
    label: "Font colours:",
    colours: ["#FAFBFD", "#000000"],
    background: "linear-gradient(to right, #FAFBFD 50%, #000000 50%)",
  },
];

export default function SpliceConceptsPage() {
  return (
    <main className="relative">
      <Header />

      {/* hero */}
      <section
        id="top"
        className="relative min-h-[760px] overflow-hidden pb-20 pt-32 md:min-h-[820px] md:pb-28"
      >
        <GradientField className="pointer-events-none absolute inset-0 h-full w-full" />
        {/* full-bleed on the right: as tall as the hero, hand cropped by the edge */}
        <div className="pointer-events-none absolute bottom-0 right-0 aspect-[776/764] h-[48%] md:h-[96%]">
          <Image
            src="/projects/splice/main.png"
            alt="Hand holding a phone showing the Splice Concepts logo"
            fill
            priority
            sizes="(min-width: 768px) 800px, 50vw"
            className="object-contain object-right-bottom drop-shadow-[0_12px_20px_rgba(0,0,0,0.2)]"
          />
        </div>
        <div className="relative mx-auto max-w-[1440px] px-6 md:px-10">
          <div className="md:max-w-[60%]">
            <Reveal>
              <ul className="flex gap-2">
                {["Internship Project", "Branding"].map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-brand px-3 py-1 text-[11px] text-brand"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.1} className="mt-14">
              <h1 className="font-display text-4xl font-medium leading-tight md:text-6xl">
                Splice Concepts:
              </h1>
              <p className="mt-2 font-serif text-4xl italic leading-tight text-brand md:text-5xl xl:text-6xl">
                Intelligent Ideas. Digital Excellence.
              </p>
            </Reveal>
            <Reveal delay={0.2} className="mt-8 max-w-md">
              <p className="text-[15px] leading-relaxed">
                Splice Concepts is a technology solutions company dedicated to
                delivering innovative, efficient, and digitally driven solutions
                for businesses.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* body */}
      <div className="mx-auto grid max-w-[1440px] gap-12 px-6 pb-32 pt-20 md:px-10 lg:grid-cols-[200px_minmax(0,1fr)] lg:gap-20">
        <SideNav items={sections} />

        <div className="space-y-28">
          <Section
            id="about-the-company"
            eyebrow="About the Company"
            title="About Splice Concepts"
          >
            <Body>
              Splice Concepts is a technology solutions company focused on
              helping businesses navigate the digital landscape through
              innovative and practical technology-driven solutions.
            </Body>
            <Body>
              The company aims to bridge the gap between business needs and
              technological possibilities by developing solutions that improve
              efficiency, simplify processes, and support digital
              transformation.
            </Body>
            <Body>
              With an emphasis on innovation, functionality, and continuous
              improvement, Splice Concepts strives to help businesses adapt to
              evolving technological demands and achieve their goals through
              effective digital solutions.
            </Body>
          </Section>

          <Section id="rough-sketches" eyebrow="Rough Sketches">
            <Body>
              I began the design process by exploring my initial ideas through
              rough sketches on paper. This allowed me to experiment with
              different concepts, layouts, and visual directions before
              committing to a final design.
            </Body>
            <Body>
              By sketching freely and iterating on my ideas, I was able to
              identify promising directions and establish a foundation for the
              digital design process.
            </Body>
            <Reveal>
              <div className="relative aspect-[1505/1100] overflow-hidden rounded-2xl border border-brand-line">
                <Image
                  src="/projects/splice/rough-sketches-cropped.jpeg"
                  alt="Rough pencil sketches of Splice logo ideas on a sketchbook page"
                  fill
                  sizes="(min-width: 1024px) 60vw, 100vw"
                  className="object-cover"
                />
              </div>
              <Caption>Rough sketch explorations</Caption>
            </Reveal>
          </Section>

          <Section id="digital-explorations" eyebrow="Digital Explorations">
            <Body>
              After getting my ideas on paper i decided to move on to making
              digital explorations. i started out by using simple shapes and
              slowly tweaking it till i got something that looked good.
            </Body>
            <Reveal>
              <div className="grid gap-4 md:grid-cols-2">
                {[1, 2, 3, 4].map((n) => (
                  <div
                    key={n}
                    className="relative aspect-square overflow-hidden rounded-xl border border-brand-line"
                  >
                    <Image
                      src={`/projects/splice/digital-rough-${n}.png`}
                      alt={`Black and white logo exploration ${n}`}
                      fill
                      sizes="(min-width: 1024px) 30vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <Caption>Black and White explorations</Caption>
            </Reveal>
            <Reveal>
              <div className="grid gap-4 md:grid-cols-2">
                {[5, 6, 7].map((n) => (
                  <div
                    key={n}
                    className="relative aspect-square overflow-hidden rounded-xl"
                  >
                    <Image
                      src={`/projects/splice/digital-rough-${n}.png`}
                      alt={`Coloured logo exploration ${n - 4}`}
                      fill
                      sizes="(min-width: 1024px) 30vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <Caption>Coloured explorations</Caption>
            </Reveal>
          </Section>

          <Section id="final-logo" eyebrow="Final Logo">
            <Body>
              After comparing my digital explorations, I picked the direction
              that felt the most balanced and refined, then polished its shapes,
              spacing and proportions into the final logo. The result is a clean
              wordmark that feels modern and approachable while staying true to
              the technology focus of Splice Concepts.
            </Body>
            <Reveal>
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  { n: 1, alt: "Final Splice Concepts logo" },
                  { n: 2, alt: "Final Splice Concepts logo with guidelines" },
                ].map(({ n, alt }) => (
                  <div
                    key={n}
                    className="relative aspect-square overflow-hidden rounded-xl"
                  >
                    <Image
                      src={`/projects/splice/final-logo-${n}.png`}
                      alt={alt}
                      fill
                      sizes="(min-width: 1024px) 30vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <Caption>Final logo with guidelines</Caption>
            </Reveal>
          </Section>

          <Section id="colours-and-fonts" eyebrow="Colours and Fonts">
            <Reveal className="grid gap-6 sm:grid-cols-3">
              {swatches.map((s) => (
                <div key={s.label}>
                  <div
                    className="aspect-[3/2] rounded-xl border border-brand"
                    style={{ background: s.background }}
                  />
                  <Caption>
                    {s.label}
                    {s.colours.map((c) => (
                      <span key={c} className="block">
                        {c}
                      </span>
                    ))}
                  </Caption>
                </div>
              ))}
            </Reveal>
            <Reveal>
              <p className="text-base">Fonts used:</p>
              {/* the font is shown set in itself */}
              <p className={`${poppins.className} mt-2 text-3xl`}>Poppins</p>
            </Reveal>
          </Section>

          <Section id="branding-material" eyebrow="Branding Material">
            {brandingRows.map((row) => (
              <Reveal key={row[0].n}>
                {/* flex-grow follows aspect ratio, so images in a row share one height */}
                <div className="flex flex-col gap-4 md:flex-row">
                  {row.map(({ n, w, h, crop = 0 }) => {
                    // visible area once the baked-in margin is trimmed
                    const vw = w - crop * 2;
                    const vh = h - crop * 2;
                    return (
                      <div
                        key={n}
                        className="relative overflow-hidden rounded-xl border border-brand-line md:[flex:var(--r)_1_0%]"
                        style={
                          {
                            aspectRatio: `${vw} / ${vh}`,
                            "--r": vw / vh,
                          } as CSSProperties
                        }
                      >
                        <Image
                          src={`/projects/splice/splice-branding-${n}.png`}
                          alt={`Splice Concepts branding material ${n}`}
                          width={w}
                          height={h}
                          sizes="(min-width: 1024px) 40vw, 100vw"
                          className="absolute max-w-none"
                          style={{
                            width: `${(w / vw) * 100}%`,
                            height: `${(h / vh) * 100}%`,
                            left: `${(-crop / vw) * 100}%`,
                            top: `${(-crop / vh) * 100}%`,
                          }}
                        />
                      </div>
                    );
                  })}
                </div>
              </Reveal>
            ))}
          </Section>
        </div>
      </div>

      <MoreProjects currentSlug="splice-concepts" />
    </main>
  );
}
