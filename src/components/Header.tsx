import Link from "next/link";

// absolute "/#…" hrefs so the nav also works from project pages
const links = [
  { label: "About", href: "/#about" },
  { label: "Resume", href: "/resume" },
  { label: "Work", href: "/#work" },
  { label: "Contact", href: "/#contact" },
];

export default function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 pt-8 md:px-10">
        <Link
          href="/"
          className="font-display text-xl font-medium tracking-[0.35em] text-brand"
        >
          NICHOLAS
        </Link>
        <nav className="fixed right-6 top-8 z-50 rounded-full bg-white/95 px-4 py-3 shadow-[0_4px_14px_rgba(47,95,143,0.25)] backdrop-blur-md md:right-[max(2.5rem,calc((100vw-1440px)/2+2.5rem))] md:px-8">
          <ul className="flex gap-5 text-[11px] text-neutral-600 md:gap-12 md:text-xs">
            {links.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="transition-colors hover:text-brand">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
