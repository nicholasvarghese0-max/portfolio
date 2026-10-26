import type { ReactNode } from "react";
import Reveal from "../Reveal";

/** Grey stand-in for imagery that hasn't been added yet. */
export function Placeholder({
  className = "aspect-[16/9]",
  label,
}: {
  className?: string;
  label?: string;
}) {
  return (
    <div
      className={`flex items-center justify-center rounded-2xl bg-neutral-200 text-sm text-neutral-400 ${className}`}
    >
      {label}
    </div>
  );
}

export function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  /** omit for sections that only carry the eyebrow label */
  title?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 space-y-8">
      <Reveal>
        <div className="flex items-center gap-5">
          <p className="text-sm text-[#244b78]">{eyebrow}</p>
          <span className="relative h-px flex-1 bg-brand-line">
            <span className="absolute right-0 top-1/2 size-1.5 -translate-y-1/2 rounded-full bg-brand-line" />
          </span>
        </div>
        {title && (
          <h2 className="mt-2 font-display text-3xl md:text-4xl">{title}</h2>
        )}
      </Reveal>
      {children}
    </section>
  );
}

export function Body({ children }: { children?: ReactNode }) {
  return (
    <Reveal>
      <p className="max-w-2xl text-base leading-relaxed">
        {children ?? "Body copy to be added."}
      </p>
    </Reveal>
  );
}

export function Caption({
  children,
  size = "text-base",
}: {
  children: ReactNode;
  size?: string;
}) {
  return (
    <p className={`mt-3 leading-snug text-neutral-600 ${size}`}>{children}</p>
  );
}
