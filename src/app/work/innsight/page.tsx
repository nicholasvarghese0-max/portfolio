import type { Metadata } from "next";
import Image from "next/image";
import GradientField from "@/components/GradientField";
import Header from "@/components/Header";
import MoreProjects from "@/components/MoreProjects";
import Reveal from "@/components/Reveal";
import SideNav from "@/components/case-study/SideNav";
import { Body, Caption, Section } from "@/components/case-study/parts";

export const metadata: Metadata = {
  title: "InnSight | Nicholas Mathew Varghese",
  description: "Hotel Management operations made visible.",
};

const sections = [
  { id: "the-problem", label: "The Problem" },
  { id: "the-research", label: "The Research" },
  { id: "design-objectives", label: "Design Objectives" },
  { id: "final-screens", label: "Final Screens" },
];

type Row = { title: string; description: string };

const problems: Row[] = [
  {
    title: "Cognitive Burden:",
    description:
      "Hotels keep track of resources at the end of the day through multiple sources like logbooks, Whatsapp and documents.",
  },
  {
    title: "Customer Centric Solutions:",
    description:
      "Current hotel management solutions are customer centric and are not of much help to hotel staff.",
  },
  {
    title: "Communication Breakdown:",
    description:
      "Hotel personnel need to be constantly updated about the happenings in the hotel to keep it running. Any breakdown in communication and problems arise.",
  },
];
const findings: Row[] = [
  {
    title: "Fragmented Workflows:",
    description:
      "Hotel personnel rely on multiple systems and applications to run their operations such as log books, Whatsapp, oracle, etc.",
  },
  {
    title: "Lack of proper resource tracking:",
    description:
      "Hotel staff have to keep track of multiple resources in sheets at the end of everyday.",
  },
  {
    title: "No employee centric solutions:",
    description:
      "Modern Hotel managements systems keep track of guest needs only and do not address issues faced by hotel staff.",
  },
  {
    title: "Unreported absence:",
    description:
      "Hotel management operations are very sensitive to employee absence. Any unreported absence can severely affect operations for that day.",
  },
  {
    title: "Lack of real time room status:",
    description:
      "The inability to understand the condition/availability of the rooms in real time can cause confusion and disruption of the hotel operations.",
  },
  {
    title: "Guest Experience Breakdown:",
    description:
      "Not knowing the full details of the guests can lead to a breakdown in giving them the best possible resolution when problems arise.",
  },
];
const objectives: Row[] = [
  {
    title: "Complete resource overview:",
    description:
      "Access to all resource statuses can help a hotel compensate or prepare for worst case scenarios.",
  },
  {
    title: "Live status updates:",
    description:
      "Live system updates of rooms and employees creates efficient workflows.",
  },
  {
    title: "Communication and Task management:",
    description:
      "Updating employees on new tasks or upcoming events, meetings and guest arrivals on one platform.",
  },
  {
    title: "Complaint Notification:",
    description:
      "If a hotel can not keep track of the complaints or requests at all levels it can impact the experience of the guest.",
  },
];
// Phone screens (420x935), two per row. A group's text goes in the caption, or
// in `notes`, which sit in the grid beside the last screen when the count is odd.
type ScreenGroup = { screens: number[]; notes?: Row[]; caption?: Row };

const screenGroups: ScreenGroup[] = [
  {
    screens: [1, 2],
    caption: {
      title: "Department wise resource overview:",
      description:
        "A carousel that can track important information like employee strength and give the manager a quick glance at hotel operations of each department and address them when discrepancies appear.",
    },
  },
  {
    screens: [3, 4, 5],
    notes: [
      {
        title: "Live Employee Schedule:",
        description:
          "A schedule tracker that informs employees about important meetings or arrival of important guests at the hotel.",
      },
      {
        title: "Live Task Management:",
        description:
          "A Task management system that helps employees see what complaints or work as to be addressed as soon as possible.",
      },
    ],
  },
  {
    screens: [6, 7, 8],
    caption: {
      title: "Unified Communication:",
      description:
        "A single messaging hub where staff can reach whole departments or individual colleagues, and where guest requests are logged and assigned to the right team, such as Maintenance or Housekeeping, so nothing is lost in verbal handovers.",
    },
  },
  {
    screens: [9, 10, 12, 14],
    caption: {
      title: "Dynamic Room Status overview:",
      description:
        "A dynamic system that helps staff to see what condition rooms are in and what work has to be done before guest can stay over.",
    },
  },
];

/** Heading on the left, description on the right, a dotted-end hairline between rows. */
function Rows({ items }: { items: Row[] }) {
  return (
    <Reveal>
      {items.map((row, i) => (
        <div key={row.title}>
          <div className="grid gap-3 py-6 md:grid-cols-[1fr_1.6fr] md:gap-10">
            <h3 className="font-display text-xl font-bold leading-snug">
              {row.title}
            </h3>
            <p className="text-base leading-relaxed text-neutral-700">
              {row.description}
            </p>
          </div>
          {i < items.length - 1 && (
            <div className="relative h-px bg-brand-line">
              <span className="absolute right-0 top-1/2 size-1.5 -translate-y-1/2 rounded-full bg-brand-line" />
            </div>
          )}
        </div>
      ))}
    </Reveal>
  );
}

export default function InnSightPage() {
  return (
    <main className="relative">
      <Header />

      {/* hero */}
      <section
        id="top"
        className="relative min-h-[760px] overflow-hidden pb-[340px] pt-32 md:min-h-[820px] md:pb-28"
      >
        <GradientField className="pointer-events-none absolute inset-0 h-full w-full" />
        {/* full-bleed on the left: the arm enters from the bottom-left corner */}
        <div className="pointer-events-none absolute bottom-0 left-0 aspect-[590/789] h-[40%] md:h-[94%]">
          <Image
            src="/projects/innsight/main.png"
            alt="Hand holding a phone showing the InnSight app"
            fill
            priority
            sizes="(min-width: 768px) 620px, 40vw"
            className="object-contain object-left-bottom drop-shadow-[0_12px_20px_rgba(0,0,0,0.2)]"
          />
        </div>
        <div className="relative mx-auto max-w-[1440px] px-6 md:px-10">
          <div className="md:pl-[44%]">
            <Reveal>
              <ul className="flex gap-2">
                {["Academic Project", "Property Management"].map((t) => (
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
                InnSight:
              </h1>
              <p className="mt-2 font-serif text-4xl italic leading-tight text-brand md:text-5xl xl:text-6xl">
                Simplify processes. Amplify Experiences.
              </p>
            </Reveal>
            <Reveal delay={0.2} className="mt-8 max-w-md">
              <p className="text-[15px] leading-relaxed">
                A unified, real time system for transparency, automation and
                control for staff in hotel management
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
            id="the-problem"
            eyebrow="The Problem"
            title="The Challenge of Operational Oversight"
          >
            <Body>
              Large hotels lack the ability to oversee all department processes
              in real time.
            </Body>
            <Body>
              Critical Information is scattered across different apps, verbal
              handovers and paper based processes.
            </Body>
            <Rows items={problems} />
          </Section>

          <Section
            id="the-research"
            eyebrow="The Research"
            title="Understanding hotel operations"
          >
            <Body>
              In order to come up with solutions to simplify hotel operations an
              interview and survey was conducted with hotel mangers and people
              employed in the hotel management industry.
            </Body>
            <Body>
              The main goal of research was to understand how hotel operations
              work, how complaints are handled and what features would managers
              and employees like to see that would improve their workflow.
            </Body>
            <Reveal>
              <h3 className="font-display text-xl">Findings:</h3>
            </Reveal>
            <Rows items={findings} />
          </Section>

          <Section
            id="design-objectives"
            eyebrow="Design Objectives"
            title="Designing for hotel Management"
          >
            <Body>
              After conducting the research and understanding hotel operations I
              came up with these 4 core features as the ground work for the
              application:
            </Body>
            <Reveal className="grid gap-6 pt-6 md:grid-cols-2">
              {objectives.map((o) => (
                <div
                  key={o.title}
                  className="flex flex-col overflow-hidden rounded-2xl border border-brand-line bg-white shadow-[0_5px_0_0_var(--brand-line)]"
                >
                  <h3 className="flex min-h-[4.5rem] items-center justify-center bg-brand-soft px-4 py-4 text-center font-display text-lg font-bold text-[#244b78]">
                    {o.title}
                  </h3>
                  <p className="flex flex-1 items-center justify-center px-6 py-7 text-center text-[15px] leading-relaxed">
                    {o.description}
                  </p>
                </div>
              ))}
            </Reveal>
          </Section>

          <Section
            id="final-screens"
            eyebrow="Final Screens"
            title="Operations Made Visible"
          >
            {screenGroups.map(({ screens, notes, caption }) => (
              <Reveal key={screens[0]}>
                {/* every phone is 248px wide at most, however many share a row */}
                <div
                  className="grid gap-4"
                  style={{
                    gridTemplateColumns: `repeat(${screens.length}, minmax(0, 1fr))`,
                    maxWidth: screens.length * 248 + (screens.length - 1) * 16,
                  }}
                >
                  {screens.map((n) => (
                    // screens ship with their own rounded corners
                    <div
                      key={n}
                      className="relative aspect-[420/935] drop-shadow-[0_4px_10px_rgba(0,0,0,0.15)]"
                    >
                      <Image
                        src={`/projects/innsight/screen-${n}.png`}
                        alt={`InnSight final design, screen ${n}`}
                        fill
                        sizes="(min-width: 1024px) 25vw, 50vw"
                        className="object-contain"
                      />
                    </div>
                  ))}
                </div>
                {notes ? (
                  <div className="mt-4 max-w-2xl space-y-4">
                    {notes.map((note) => (
                      <Caption key={note.title}>
                        <strong>{note.title}</strong> {note.description}
                      </Caption>
                    ))}
                  </div>
                ) : (
                  <Caption>
                    {caption ? (
                      <>
                        <strong>{caption.title}</strong> {caption.description}
                      </>
                    ) : (
                      `${
                        screens.length > 1
                          ? `Screens ${screens[0]}–${screens[screens.length - 1]}`
                          : `Screen ${screens[0]}`
                      }: description to be added.`
                    )}
                  </Caption>
                )}
              </Reveal>
            ))}
          </Section>
        </div>
      </div>

      <MoreProjects currentSlug="innsight" />
    </main>
  );
}
