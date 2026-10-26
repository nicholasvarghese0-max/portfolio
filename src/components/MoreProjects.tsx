import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import { ProjectCard, projects } from "./Projects";

/** The other projects, so visitors can move between case studies directly. */
export default function MoreProjects({ currentSlug }: { currentSlug: string }) {
  const others = projects.filter((p) => p.slug !== currentSlug);

  return (
    <section id="more-projects" className="mx-auto max-w-[1440px] px-6 pb-32 md:px-10">
      <Reveal>
        <SectionLabel>View Projects</SectionLabel>
      </Reveal>

      <div className="mt-14 grid gap-x-8 gap-y-16 md:grid-cols-2">
        {others.map((p, i) => (
          <Reveal key={p.slug} delay={i * 0.1}>
            <ProjectCard project={p} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
