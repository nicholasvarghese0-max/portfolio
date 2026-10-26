import Link from "next/link";
import Reveal from "./Reveal";

const contacts = [
  {
    label: "Email",
    value: "nicholasvarghese0@gmail.com",
    href: "mailto:nicholasvarghese0@gmail.com",
  },
  { label: "Phone", value: "9746807639", href: "tel:9746807639" },
  {
    label: "LinkedIn",
    value: "Nicholas Varghese",
    href: "https://www.linkedin.com/in/nicholas-varghese-1a7774347",
    external: true,
  },
];

export default function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden">
      {/* soft blue wash, matching the hero */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(110%_90%_at_15%_100%,#a9c7ee_0%,#cfe0f4_45%,rgba(255,255,255,0)_80%)]"
      />
      <div className="relative mx-auto max-w-[1440px] px-6 pb-10 pt-24 md:px-10">
        <Reveal>
          <p className="font-serif text-5xl italic leading-tight text-brand md:text-7xl">
            Like what you see?
          </p>
          <p className="mt-4 max-w-md text-lg leading-snug">
            Let&rsquo;s work together, or just say hello.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <ul className="mt-12 grid gap-8 sm:grid-cols-3">
            {contacts.map((c) => (
              <li key={c.label}>
                <p className="text-sm text-[#244b78]">{c.label}</p>
                <a
                  href={c.href}
                  {...(c.external && {
                    target: "_blank",
                    rel: "noopener noreferrer",
                  })}
                  className="mt-1 inline-block break-all font-display text-xl hover:text-brand"
                >
                  {c.value}
                  {c.external && <span aria-hidden> &#8599;</span>}
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="mt-20 flex flex-wrap items-center justify-between gap-4 border-t border-white/70 pt-6 text-sm text-neutral-600">
          <p>&copy; 2026 Nicholas Mathew Varghese</p>
          <Link href="/resume" className="hover:text-brand">
            Resume
          </Link>
        </div>
      </div>
    </footer>
  );
}
