import type { Metadata } from "next";
import GradientField from "@/components/GradientField";
import Header from "@/components/Header";
import MoreProjects from "@/components/MoreProjects";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Cosmino | Nicholas Mathew Varghese",
  description: "Cosmino project page.",
};

export default function CosminoPage() {
  return (
    <main className="relative">
      <Header />

      {/* hero */}
      <section
        id="top"
        className="relative min-h-[560px] overflow-hidden pb-20 pt-32 md:pb-28"
      >
        <GradientField className="pointer-events-none absolute inset-0 h-full w-full" />
        <div className="relative mx-auto max-w-[1440px] px-6 md:px-10">
          <Reveal>
            <h1 className="font-display text-4xl font-medium leading-tight md:text-6xl">
              Cosmino
            </h1>
            <p className="mt-2 font-serif text-4xl italic leading-tight text-brand md:text-5xl">
              Tagline goes here.
            </p>
          </Reveal>
        </div>
      </section>

      <MoreProjects currentSlug="cosmino" />
    </main>
  );
}
