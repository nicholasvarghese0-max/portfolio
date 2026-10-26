export default function SectionLabel({ children }: { children: string }) {
  return (
    <div className="flex items-center">
      <span className="rounded-full bg-brand-soft px-6 py-1.5 text-sm text-brand shadow-[0_2px_6px_rgba(47,95,143,0.25)]">
        {children}
      </span>
      <span className="relative ml-0 h-px flex-1 bg-brand-line">
        <span className="absolute -right-0 top-1/2 size-1.5 -translate-y-1/2 rounded-full bg-brand-soft" />
      </span>
    </div>
  );
}
