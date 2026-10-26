"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

/** Soft blue glow that trails the cursor once it moves below the hero. */
export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !window.matchMedia("(hover: hover)").matches) return;

    gsap.set(el, { xPercent: -50, yPercent: -50, opacity: 0 });
    const moveX = gsap.quickTo(el, "x", { duration: 0.6, ease: "power3.out" });
    const moveY = gsap.quickTo(el, "y", { duration: 0.6, ease: "power3.out" });
    const fade = gsap.quickTo(el, "opacity", { duration: 0.4 });

    let x = -1;
    let y = -1;
    const update = () => {
      if (x < 0) return;
      moveX(x);
      moveY(y);
      // the hero has its own gradient, so only glow once past it
      // looked up each time: the layout persists across page navigations
      const hero = document.getElementById("top");
      fade(hero && y > hero.getBoundingClientRect().bottom ? 1 : 0);
    };
    const onMove = (e: PointerEvent) => {
      x = e.clientX;
      y = e.clientY;
      update();
    };
    const onLeave = () => {
      x = -1;
      fade(0);
    };

    window.addEventListener("pointermove", onMove);
    window.addEventListener("scroll", update, { passive: true });
    document.addEventListener("pointerleave", onLeave);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("scroll", update);
      document.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 -z-10 size-[460px] rounded-full bg-[radial-gradient(circle,rgba(143,180,232,0.3)_0%,rgba(169,199,238,0.14)_40%,rgba(169,199,238,0)_70%)]"
    />
  );
}
