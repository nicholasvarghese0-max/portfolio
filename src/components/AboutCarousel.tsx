"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const slides = [
  { src: "/about/about-1.jpeg", alt: "Nicholas playing bass in front of a mural" },
  { src: "/about/about-2.jpeg", alt: "Nicholas playing bass, lit in orange" },
  { src: "/about/about-3.jpeg", alt: "Nicholas playing guitar with headphones on" },
  { src: "/about/about-4.jpeg", alt: "Nicholas playing bass on stage" },
];

const INTERVAL = 3500;
const SLIDE_MS = 700;

/** Auto-advancing carousel: each photo slides left out of view as the next slides in. */
export default function AboutCarousel() {
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let timer = 0;
    const start = () => {
      window.clearInterval(timer);
      timer = window.setInterval(() => {
        setAnimate(true);
        setIndex((i) => i + 1);
      }, INTERVAL);
    };
    const stop = () => window.clearInterval(timer);

    // only run while on screen and the tab is visible
    let onScreen = false;
    const sync = () => (onScreen && !document.hidden ? start() : stop());
    const io = new IntersectionObserver(([entry]) => {
      onScreen = entry.isIntersecting;
      sync();
    });
    io.observe(el);
    document.addEventListener("visibilitychange", sync);
    return () => {
      stop();
      io.disconnect();
      document.removeEventListener("visibilitychange", sync);
    };
  }, []);

  // the track ends with a copy of the first photo; once it lands, jump back to the real one
  const onEnd = () => {
    if (index < slides.length) return;
    setAnimate(false);
    setIndex(0);
  };

  const track = [...slides, slides[0]];

  return (
    <div
      ref={root}
      className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-neutral-200 shadow-[0_4px_10px_rgba(0,0,0,0.2)]"
    >
      <div
        className="flex h-full"
        style={{
          transform: `translateX(-${index * 100}%)`,
          transition: animate
            ? `transform ${SLIDE_MS}ms cubic-bezier(0.65, 0, 0.35, 1)`
            : "none",
        }}
        onTransitionEnd={onEnd}
      >
        {track.map((s, i) => (
          <div key={i} className="relative h-full w-full shrink-0">
            <Image
              src={s.src}
              alt={i === slides.length ? "" : s.alt}
              aria-hidden={i === slides.length}
              fill
              sizes="(min-width: 1440px) 640px, (min-width: 768px) 50vw, 100vw"
              className="object-cover object-[50%_30%]"
            />
          </div>
        ))}
      </div>

      <ul className="absolute inset-x-0 bottom-3 flex justify-center gap-1.5">
        {slides.map((s, i) => (
          <li
            key={s.src}
            className={`h-1.5 rounded-full bg-white transition-all duration-500 ${
              i === index % slides.length ? "w-5 opacity-100" : "w-1.5 opacity-60"
            }`}
          />
        ))}
      </ul>
    </div>
  );
}
