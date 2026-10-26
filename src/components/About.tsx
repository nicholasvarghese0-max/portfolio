import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

const skills = [
  "Wireframing",
  "User Research",
  "Usability Testing",
  "Prototyping",
  "User interface Design",
];

const tools = [
  "Figma",
  "FigJam",
  "Adobe Illustrator",
  "Adobe Photoshop",
  "Adobe After Effects",
  "DaVinci Resolve",
];

const education = [
  {
    school: "Believers Church Residential School (11th and 12th CBSE)",
    years: "2021-2023",
  },
  { school: "Symbiosis Institute of Design (B.Des Ui/Ux)", years: "2023-2027" },
];

export default function About() {
  return (
    <section id="about" className="px-6 py-20 md:px-10">
      <Reveal>
        <SectionLabel>About me</SectionLabel>
      </Reveal>

      <div className="mt-10 grid gap-12 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        {/* left column */}
        <Reveal>
          <h2 className="font-display text-3xl">Hello there!</h2>
          <p className="mt-3 font-serif text-4xl italic leading-tight text-brand">
            My name is Nicholas Mathew.
          </p>
          <p className="mt-14 max-w-[15rem] text-[15px] leading-snug">
            I&rsquo;m a 20-year-old designer driven by a lifelong love for
            drawing and visual storytelling.
          </p>
          <p className="mt-6 max-w-[15rem] text-[15px] leading-snug">
            My hobbies include Music Production, Guitar and Bass.
          </p>

          <h3 className="mt-16 text-[15px] font-medium text-brand">Skills:</h3>
          <ul className="mt-4 flex max-w-sm flex-wrap gap-2">
            {skills.map((s) => (
              <li
                key={s}
                className="rounded-full border border-brand px-3.5 py-1.5 text-xs text-brand"
              >
                {s}
              </li>
            ))}
          </ul>
        </Reveal>

        {/* right column */}
        <div>
          <Reveal className="grid gap-10 sm:grid-cols-[1.2fr_1fr]">
            <div>
              <h3 className="text-[15px] text-brand">Education:</h3>
              <div className="mt-5 space-y-8">
                {education.map((e) => (
                  <p key={e.school} className="text-[15px] leading-snug">
                    <strong className="block font-bold">{e.school}</strong>
                    {e.years}
                  </p>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-[15px] text-brand">Tools Used:</h3>
              <ul className="mt-5 space-y-2 text-[15px]">
                {tools.map((t) => (
                  <li key={t} className="flex gap-3">
                    <span aria-hidden>&bull;</span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal className="mt-14">
            <div className="h-44 rounded-2xl bg-neutral-300 md:h-[155px]" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
