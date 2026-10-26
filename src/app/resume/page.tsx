import type { Metadata } from "next";
import type { ReactNode } from "react";
import GradientField from "@/components/GradientField";
import Header from "@/components/Header";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";

export const metadata: Metadata = {
  title: "Resume | Nicholas Mathew Varghese",
  description: "Resume of Nicholas Mathew, UI/UX Designer.",
};

const experience = [
  {
    title: "Aranmula Kannadi Website Redesign",
    role: "UI & UX",
    points: [
      "Designed an informational website showcasing the heritage craft of Aranmula Kannadi, explaining its unique metal-mirror properties and traditional manufacturing process.",
      "Translated complex craftsmanship into an intuitive 8-step visual storytelling flow for better user understanding.",
      "Focused on cultural preservation, clear information architecture, and an engaging digital experience.",
    ],
  },
  {
    title: "InnSight- Hotel Management App",
    role: "UI & UX",
    points: [
      "Designed a centralized hotel management application to streamline daily operations across departments such as housekeeping, maintenance, and front desk management.",
      "Translated complex back-of-house workflows into an intuitive digital system, enabling real-time resource tracking, employee coordination, and faster operational decision-making.",
      "Focused on improving cross-department communication, task visibility, and service efficiency to enhance both staff productivity and overall guest experience.",
    ],
  },
  {
    title: "Spiderline Technologies",
    role: "Graphic internship",
    points: [
      "Developed three logo concepts incorporating the brand tagline, “Intelligent Ideas. Digital Excellence.”",
      "Designed corporate stationery, including double-sided visiting cards, letterheads, and envelopes.",
      "Created branded merchandise concepts, including T-shirt designs.",
      "Created three social media posters for Instagram and Facebook, maintaining visual consistency with the brand identity.",
    ],
  },
];

const education = [
  {
    school: "Symbiosis Institute of Design",
    detail: "B.Des Ui/Ux",
    note: "Relevant coursework: Interaction Design, User-Centered Design, Design Thinking, Information Architecture, and User Research",
  },
  {
    school: "Believers Church Residential School",
    detail: "11th- 12th PCPB",
  },
];

const skills = [
  "User Research",
  "Interaction Design",
  "Visual Design",
  "Communication and Collaboration",
  "Usability Testing",
  "Wire framing",
  "Prototyping",
];
const additionalSkills = ["Motion graphics", "Video editing", "Sound design"];
const tools = [
  "Figma",
  "Figjam",
  "Adobe Illustrator",
  "Adobe Photoshop",
  "Adobe After Effects",
];

function Chips({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((s) => (
        <li
          key={s}
          className="rounded-full border border-brand px-3.5 py-1.5 text-xs text-brand"
        >
          {s}
        </li>
      ))}
    </ul>
  );
}

function Block({ label, children }: { label: string; children: ReactNode }) {
  return (
    <Reveal className="space-y-6">
      <SectionLabel>{label}</SectionLabel>
      {children}
    </Reveal>
  );
}

export default function ResumePage() {
  return (
    <main className="relative">
      <Header />

      {/* hero */}
      <section id="top" className="relative overflow-hidden pb-20 pt-32">
        <GradientField className="pointer-events-none absolute inset-0 h-full w-full" />
        <div className="relative mx-auto max-w-[1440px] px-6 md:px-10">
          <Reveal>
            <span className="inline-block rounded-full bg-brand-soft px-4 py-1.5 text-sm text-brand shadow-[0_2px_6px_rgba(47,95,143,0.25)]">
              Resume
            </span>
          </Reveal>
          <Reveal delay={0.1} className="mt-14">
            <h1 className="font-display text-4xl font-medium leading-tight md:text-6xl">
              Nicholas Mathew,
            </h1>
            <p className="mt-2 font-serif text-4xl italic leading-tight text-brand md:text-6xl">
              UI/UX Designer
            </p>
          </Reveal>
          <Reveal delay={0.2} className="mt-8">
            <a
              href="/Nicholas-Mathew-Resume.pdf"
              download
              className="inline-block rounded-full border border-brand px-6 py-2.5 text-sm text-brand transition-colors hover:bg-brand hover:text-white"
            >
              Download resume (PDF)
            </a>
          </Reveal>
        </div>
      </section>

      {/* body */}
      <div className="mx-auto grid max-w-[1440px] gap-16 px-6 pb-32 pt-16 md:px-10 lg:grid-cols-[minmax(0,1.7fr)_minmax(0,1fr)] lg:gap-20">
        <div className="space-y-20">
          <Block label="Work Experience">
            <div className="space-y-12">
              {experience.map((e) => (
                <article key={e.title}>
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="font-display text-2xl font-bold">
                      {e.title}
                    </h3>
                    <span className="rounded-full border border-brand px-3 py-1 text-[11px] text-brand">
                      {e.role}
                    </span>
                  </div>
                  <ul className="mt-4 list-disc space-y-3 pl-5 text-base leading-relaxed marker:text-brand">
                    {e.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </Block>

          <Block label="Education">
            <div className="space-y-8">
              {education.map((e) => (
                <div key={e.school}>
                  <h3 className="font-display text-xl font-bold">{e.school}</h3>
                  <p className="mt-1 text-base">{e.detail}</p>
                  {e.note && (
                    <p className="mt-3 max-w-xl text-base leading-relaxed text-neutral-600">
                      {e.note}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </Block>
        </div>

        <aside className="space-y-14">
          <Block label="Skills">
            <div className="space-y-5">
              <div>
                <h3 className="mb-3 font-display text-lg font-bold">UI & UX</h3>
                <Chips items={skills} />
              </div>
              <div>
                <h3 className="mb-3 font-display text-lg font-bold">
                  Additional skills
                </h3>
                <Chips items={additionalSkills} />
              </div>
            </div>
          </Block>

          <Block label="Tools">
            <Chips items={tools} />
          </Block>

          <Block label="Contact">
            <dl className="space-y-5 text-base">
              <div>
                <dt className="text-neutral-600">Contact No.</dt>
                <dd>
                  <a
                    href="tel:9746807639"
                    className="font-display text-xl hover:text-brand"
                  >
                    9746807639
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-neutral-600">Email</dt>
                <dd>
                  <a
                    href="mailto:nicholasvarghese0@gmail.com"
                    className="break-all font-display text-xl hover:text-brand"
                  >
                    nicholasvarghese0@gmail.com
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-neutral-600">LinkedIn</dt>
                <dd>
                  <a
                    href="https://www.linkedin.com/in/nicholas-varghese-1a7774347"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-display text-xl hover:text-brand"
                  >
                    Nicholas Varghese &#8599;
                  </a>
                </dd>
              </div>
            </dl>
          </Block>
        </aside>
      </div>
    </main>
  );
}
