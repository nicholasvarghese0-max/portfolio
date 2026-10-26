import type { Metadata } from "next";
import Image from "next/image";
import GradientField from "@/components/GradientField";
import Header from "@/components/Header";
import MoreProjects from "@/components/MoreProjects";
import Reveal from "@/components/Reveal";
import SideNav from "@/components/case-study/SideNav";
import {
  Body,
  Caption,
  Placeholder,
  Section,
} from "@/components/case-study/parts";

export const metadata: Metadata = {
  title: "Aranmula Kannadi | Nicholas Mathew Varghese",
  description:
    "Showcasing the heritage and craftsmanship of Aranmula Kannadi.",
};

const sections = [
  { id: "about-the-craft", label: "About the craft" },
  { id: "the-problem", label: "The Problem" },
  { id: "the-findings", label: "The Findings" },
  { id: "root-cause", label: "The Root Cause" },
  { id: "design-objectives", label: "Design Objectives" },
  { id: "final-screens", label: "Final Screens" },
];

const struggles = [
  {
    title: "Lack of Understanding of the craft",
    description:
      "The intricate process behind the mirror is rarely understood, reducing a centuries-old craft to just another decorative object.",
  },
  {
    title: "Lack in Appreciation for Craftsmen",
    description:
      "The skill, precision, and time invested by master craftsmen often go unnoticed in modern digital spaces.",
  },
  {
    title: "Competition from imitation mirrors",
    description:
      "Cheap imitation mirrors dilute its value, making it harder for audiences to distinguish authenticity from replicas.",
  },
];

const drawbackText = [
  "The website uses a generic layout that fails to differentiate its mirrors from imitation mirrors. It does not explain to the user why the mirror is special at first glance.",
  "The website attempts to establish its significance by using images of celebrities. It does not talk about the artisans behind the craft or their efforts thereby making the mirror seem like another decorative piece.",
  "The website finally makes an attempt to explain the craft but only after the user has wasted time scrolling through the website. The website uses a link that takes the user to another page which adds to their cognitive load.",
  "The website keeps promoting sold out products which not only creates dead ends and makes it seem like the user has multiple choices but it also wastes the attention of the user.",
];

const drawbacks = drawbackText.map((description, i) => ({
  label: `Problem ${i + 1}`,
  description,
  image: `/projects/aranmula/drawback-${i + 1}.png`,
}));

const whys = [
  {
    question: "Why don't people appreciate the crafts cultural value?",
    answer:
      "People don’t appreciate the craft because they see it as a regular mirror with no special properties.",
  },
  {
    question: "Why do they see it as a regular mirror with no special property?",
    answer:
      "It is seen as such because the website makes no attempt at communicating the mirrors special properties and cultural value.",
  },
  {
    question: "Why is that communication absent?",
    answer:
      "Sellers prioritize selling quickly assuming users aren’t interested in deeper narratives.",
  },
  {
    question:
      "Why do sellers assume no one is interested in the deeper narratives?",
    answer:
      "Sellers often underestimate urban or younger audiences, assuming they lack patience for traditional narratives.",
  },
];

const rootCause =
  "In reality, today’s buyers value authenticity, process, and meaning -the issue isn’t interest it’s presentation.";

// screens that share a single description
const screenGroups = [
  {
    screens: [1, 2],
    description:
      "The hero section of the homepage explains what the mirror is and why it is special. It also has a Learn More button to give the user more context.",
  },
  {
    screens: [3],
    description:
      "A “Meet our Artisans” section to shine a light on the efforts of the artisans involved in making the craft.",
  },
  {
    screens: [4, 5],
    description:
      "The “Reflections of Fame” communicate the cultural significance of the mirror using images of the mirror being gifted to various celebrities thus creating trust in the user about the mirror.",
  },
  {
    screens: [6],
    description:
      "A carousel that categorises different mirror types with a short description helps users narrow down what kind of mirror they want and prevents choice paralysis.",
  },
  {
    screens: [7, 8, 9, 10],
    description:
      "Another page was created to talk in depth about different aspect of the craft ranging from its history to the process of its creation, the motifs used and the comparison between authentic Aranmula Kannadi and regular mirrors.",
  },
];

const objectives = [
  {
    title: "Visual Storytelling",
    description:
      "Use of bold visuals to show the grandeur of the craft which shows the process of how the craft is made.",
  },
  {
    title: "Visibility and Dignity",
    description:
      "Explaining the difficult process of creating Aranmula Kannadi to invoke appreciation for the artisans.",
  },
  {
    title: "Informative experience",
    description:
      "Creating infographics to help users understand the difference between original and counterfeit Aranmula Kannadi.",
  },
];

export default function AranmulaKannadiPage() {
  return (
    <main className="relative">
      <Header />

      {/* hero */}
      <section
        id="top"
        className="relative min-h-[760px] overflow-hidden pb-20 pt-32 md:min-h-[820px] md:pb-28"
      >
        <GradientField className="pointer-events-none absolute inset-0 h-full w-full" />
        <div
          aria-hidden
          className="absolute inset-x-6 bottom-[8%] h-px bg-white md:inset-x-10"
        />
        {/* full-bleed on the right: as tall as the hero, hand cropped by the edge */}
        <div className="pointer-events-none absolute bottom-0 right-0 aspect-[686/1004] h-[48%] md:bottom-auto md:top-[4%] md:h-full">
          <Image
            src="/projects/aranmula/main.png"
            alt="Hand holding an Aranmula Kannadi mirror"
            fill
            priority
            sizes="(min-width: 768px) 560px, 40vw"
            className="object-contain object-right drop-shadow-[0_12px_20px_rgba(0,0,0,0.25)]"
          />
        </div>
        <div className="relative mx-auto max-w-[1440px] px-6 md:px-10">
          <div className="md:max-w-[58%]">
            <Reveal>
              <ul className="flex gap-2">
                {["Academic Project", "Website Design"].map((t) => (
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
                Empowering the Legacy of
              </h1>
              <p className="mt-2 font-serif text-5xl italic leading-tight text-brand md:text-7xl">
                Aranmula Kannadi
              </p>
            </Reveal>
            <Reveal delay={0.2} className="mt-8 max-w-md">
              <p className="text-[15px] leading-relaxed">
                An informational website showcasing the heritage craft of
                Aranmula Kannadi, explaining its unique metal-mirror properties
                and traditional making process.
              </p>
              <a
                href="#"
                className="mt-8 inline-block text-xl text-brand transition-opacity hover:opacity-70"
              >
                Prototype Website Link&rarr;
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* body */}
      <div className="mx-auto grid max-w-[1440px] gap-12 px-6 pb-32 pt-20 md:px-10 lg:grid-cols-[200px_minmax(0,1fr)] lg:gap-20">
        <SideNav items={sections} />

        <div className="space-y-28">
          <Section
            id="about-the-craft"
            eyebrow="About the craft"
            title="The Magic behind the Mirror"
          >
            <Body>
              The Aranmula Kannadi is a unique, handmade metal mirror crafted in
              the village of Aranmula, Kerala.
            </Body>
            <Body>
              Unlike ordinary glass mirrors, its reflection comes from a
              meticulously polished alloy of copper and tin, giving it a
              distinctive, distortion-free clarity.
            </Body>
            <Reveal>
              <Placeholder className="aspect-[16/7]" />
            </Reveal>
          </Section>

          <Section
            id="the-problem"
            eyebrow="The Problem"
            title="The struggle to preserve Tradition"
          >
            <Body>
              Despite the cultural significance of the craft it now faces
              significant competition from cheap imitation mirrors. Younger
              audiences simply don’t understand the difference between
              authentic Aranmula and imitations.
            </Body>
            <Body>
              There is also a lack of appreciation for the artisans and the
              effort put into making a single Aranmula Kannadi.
            </Body>
            <Reveal className="divide-y divide-brand-line border-y border-brand-line">
              {struggles.map((s) => (
                <div
                  key={s.title}
                  className="grid gap-3 py-5 md:grid-cols-[1fr_1.6fr] md:gap-10"
                >
                  <h3 className="font-display text-lg font-bold">{s.title}</h3>
                  <p className="text-base leading-relaxed text-neutral-600">
                    {s.description}
                  </p>
                </div>
              ))}
            </Reveal>
          </Section>

          <Section
            id="the-findings"
            eyebrow="The Findings"
            title="Understanding the original website's drawbacks"
          >
            <Body>
              The first step in creating a website for a traditional craft like
              Aranmula Kannadi is to analyse what the current website does right
              or wrong then analyse what competitors are doing different or
              better.
            </Body>
            {drawbacks.map((d) => (
              <Reveal key={d.label}>
                <div className="relative aspect-[970/546] overflow-hidden rounded-2xl border border-neutral-300 shadow-[0_4px_10px_rgba(0,0,0,0.15)]">
                  <Image
                    src={d.image}
                    alt={`Original website: ${d.label}`}
                    fill
                    sizes="(min-width: 1024px) 60vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <Caption size="text-base">
                  <strong>{d.label}:</strong> {d.description}
                </Caption>
              </Reveal>
            ))}
          </Section>

          <Section
            id="root-cause"
            eyebrow="The Root Cause"
            title="Understanding the Origin of the Problem"
          >
            <Body>
              I did a Root cause analysis after conducting interviews with
              artisans and customers to understand where the problem lies.
            </Body>
            {/* vertical timeline: a rail with a node per row */}
            <Reveal className="relative">
              <div
                aria-hidden
                className="absolute bottom-8 left-[10px] top-8 w-1 rounded-full bg-brand-line"
              />
              {whys.map((w) => (
                <div key={w.question} className="relative pl-14 md:pl-16">
                  <span
                    aria-hidden
                    className="absolute left-0 top-7 size-6 rounded-full bg-brand-line"
                  />
                  <div className="grid gap-3 py-6 md:grid-cols-[1fr_1.3fr] md:gap-10">
                    <h3 className="font-display text-xl leading-snug">
                      {w.question}
                    </h3>
                    <p className="text-base leading-relaxed text-neutral-600">
                      {w.answer}
                    </p>
                  </div>
                  <div className="relative h-px bg-brand-line">
                    <span className="absolute right-0 top-1/2 size-1.5 -translate-y-1/2 rounded-full bg-brand-line" />
                  </div>
                </div>
              ))}
              <div className="relative pl-14 md:pl-16">
                <span
                  aria-hidden
                  className="absolute left-0 top-8 size-6 rounded-full bg-brand-line"
                />
                <div className="grid gap-3 py-6 md:grid-cols-[1fr_1.3fr] md:gap-10">
                  <h3 className="font-display text-3xl font-bold">Root Cause:</h3>
                  <p className="text-base font-bold leading-relaxed text-neutral-700">
                    {rootCause}
                  </p>
                </div>
              </div>
            </Reveal>
          </Section>

          <Section
            id="design-objectives"
            eyebrow="Design Objectives"
            title="Designing for Tradition"
          >
            <Body>
              After analysing the root cause and the current website we now have
              a clear understanding of what the website should do in order to
              convey to users the significance of the craft:
            </Body>
            <Reveal className="grid gap-6 pt-6 md:grid-cols-3">
              {objectives.map((o) => (
                <div
                  key={o.title}
                  className="overflow-hidden rounded-2xl border border-brand-line bg-white shadow-[0_5px_0_0_var(--brand-line)]"
                >
                  <h3 className="bg-brand-soft px-4 py-5 text-center font-display text-lg font-bold text-[#244b78]">
                    {o.title}
                  </h3>
                  <p className="px-6 py-7 text-center text-[15px] leading-relaxed">
                    {o.description}
                  </p>
                </div>
              ))}
            </Reveal>
          </Section>

          <Section
            id="final-screens"
            eyebrow="Final Screens"
            title="Bringing Tradition to Life"
          >
            {screenGroups.map(({ screens, description }) => (
              <Reveal key={screens[0]}>
                <div className="space-y-4">
                  {screens.map((n) => (
                    // screens ship with their own rounded corners
                    <div
                      key={n}
                      className="relative aspect-[970/595] drop-shadow-[0_4px_10px_rgba(0,0,0,0.2)]"
                    >
                      <Image
                        src={`/projects/aranmula/screen-${n}.png`}
                        alt={`Aranmula Kannadi final design, screen ${n}`}
                        fill
                        sizes="(min-width: 1024px) 60vw, 100vw"
                        className="object-contain"
                      />
                    </div>
                  ))}
                </div>
                <Caption>{description}</Caption>
              </Reveal>
            ))}
          </Section>
        </div>
      </div>

      <MoreProjects currentSlug="aranmula-kannadi" />
    </main>
  );
}
