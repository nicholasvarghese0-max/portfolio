"use client";

import { useEffect, useState } from "react";

type Item = { id: string; label: string };

/** Sticky section index that highlights the section currently in view. */
export default function SideNav({ items }: { items: Item[] }) {
  const [active, setActive] = useState(items[0]?.id);

  useEffect(() => {
    const onScroll = () => {
      // the last section whose top has passed the upper third of the viewport
      const line = window.innerHeight * 0.33;
      let current = items[0]?.id;
      for (const { id } of items) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [items]);

  return (
    <nav aria-label="Case study sections" className="sticky top-28 hidden self-start lg:block">
      <ul className="space-y-5">
        {items.map(({ id, label }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={`text-[15px] transition-colors ${
                active === id
                  ? "font-medium text-brand"
                  : "text-neutral-500 hover:text-brand"
              }`}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
