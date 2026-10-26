import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

export type Project = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  image?: string; // placeholder is shown when omitted
  href?: string; // case-study page, when one exists
};

export const projects: Project[] = [
  {
    slug: "aranmula-kannadi",
    title: "Aranmula Kannadi",
    description:
      "Showcasing the heritage and craftsmanship of Aranmula Kannadi.",
    tags: ["Academic Project", "Website Design"],
    image: "/projects/aranmula-kannadi.png",
    href: "/work/aranmula-kannadi",
  },
  {
    slug: "innsight",
    title: "InnSight",
    description: "Hotel Management operations made visible.",
    tags: ["Academic Project", "Property Mangement"],
    image: "/projects/innsight.png",
    href: "/work/innsight",
  },
  {
    slug: "splice-concepts",
    title: "Splice Concepts",
    description: "Branding for an upcoming tech consultancy company.",
    tags: ["Internship Project", "Branding"],
    image: "/projects/splice-concepts.png",
    href: "/work/splice-concepts",
  },
];

/** Link when the project has a page, plain element otherwise. */
function Wrap({
  href,
  label,
  className,
  children,
}: {
  href?: string;
  label?: string;
  className?: string;
  children: ReactNode;
}) {
  if (!href) return <div className={className}>{children}</div>;
  return (
    <Link href={href} aria-label={label} className={className}>
      {children}
    </Link>
  );
}

export function ProjectCard({ project: p }: { project: Project }) {
  return (
    <article>
      {/* thumbnails ship with their own rounded frame, so only the placeholder gets a border */}
      <Wrap
        href={p.href}
        label={`View ${p.title} case study`}
        className={`group relative block aspect-[9/5] ${
          p.image
            ? "overflow-hidden rounded-xl drop-shadow-[0_4px_8px_rgba(0,0,0,0.25)]"
            : "rounded-2xl border border-neutral-400 bg-neutral-200 shadow-[0_4px_10px_rgba(0,0,0,0.25)]"
        }`}
      >
        {p.image && (
          <Image
            src={p.image}
            alt={`${p.title} thumbnail`}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-contain transition-transform duration-500 ease-out group-hover:scale-105"
          />
        )}
      </Wrap>
      <ul className="mt-3 flex gap-2">
        {p.tags.map((t) => (
          <li
            key={t}
            className="rounded-full border border-brand px-3 py-1 text-[11px] text-brand"
          >
            {t}
          </li>
        ))}
      </ul>
      <h3 className="mt-5 font-display text-3xl">
        <Wrap href={p.href} className="hover:text-brand">
          {p.title}
        </Wrap>
      </h3>
      <p className="mt-4 max-w-sm text-[15px] leading-snug">{p.description}</p>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="work" className="px-6 py-20 md:px-10">
      <Reveal>
        <SectionLabel>Projects</SectionLabel>
      </Reveal>

      <div className="mt-14 grid gap-x-8 gap-y-16 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.slug} delay={(i % 2) * 0.1}>
            <ProjectCard project={p} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
