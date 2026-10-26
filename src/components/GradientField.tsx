"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

type Blob = {
  // home position as a fraction of the canvas, radius as a fraction of its width
  x: number;
  y: number;
  r: number;
  color: [number, number, number];
  alpha: number;
  // drift
  speed: number;
  phase: number;
  // spring state in px
  px: number;
  py: number;
  vx: number;
  vy: number;
  scale: number;
};

const BLOBS: Omit<Blob, "px" | "py" | "vx" | "vy" | "scale">[] = [
  { x: 0.88, y: 0.98, r: 0.42, color: [169, 199, 238], alpha: 0.95, speed: 0.31, phase: 0 },
  { x: 0.65, y: 1.05, r: 0.38, color: [143, 180, 232], alpha: 0.7, speed: 0.23, phase: 2 },
  { x: 0.35, y: 1.05, r: 0.34, color: [207, 224, 244], alpha: 0.9, speed: 0.27, phase: 4 },
  { x: 0.1, y: 1.0, r: 0.3, color: [220, 232, 247], alpha: 0.8, speed: 0.19, phase: 1 },
  { x: 0.75, y: 0.78, r: 0.25, color: [190, 212, 242], alpha: 0.6, speed: 0.35, phase: 3 },
];

const MOUSE_RANGE = 0.45; // attraction radius, fraction of canvas width
const PULL = 0.4; // how far a blob travels toward the cursor
const STIFFNESS = 0.05;
const DAMPING = 0.84;
const RENDER_SCALE = 0.5; // blurry content: render at half-res for speed

/** Drifting blue blobs that are gravitationally pulled toward the cursor. */
export default function GradientField({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let w = 0;
    let h = 0;
    let visible = true;
    const blobs: Blob[] = BLOBS.map((b) => ({
      ...b, px: 0, py: 0, vx: 0, vy: 0, scale: 1,
    }));
    // cursor in canvas px; `power` fades the attraction in/out with presence
    const mouse = { x: 0, y: 0, sx: 0, sy: 0, power: 0, target: 0 };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      w = Math.max(1, Math.round(rect.width * RENDER_SCALE));
      h = Math.max(1, Math.round(rect.height * RENDER_SCALE));
      canvas.width = w;
      canvas.height = h;
      blobs.forEach((b) => {
        b.px = b.x * w;
        b.py = b.y * h;
        b.vx = b.vy = 0;
      });
    };

    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = (e.clientX - rect.left) * RENDER_SCALE;
      mouse.y = (e.clientY - rect.top) * RENDER_SCALE;
      const inside =
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;
      mouse.target = inside ? 1 : 0;
    };
    const onLeave = () => (mouse.target = 0);

    const draw = (t: number) => {
      ctx.clearRect(0, 0, w, h);

      mouse.sx += (mouse.x - mouse.sx) * 0.12;
      mouse.sy += (mouse.y - mouse.sy) * 0.12;
      mouse.power += (mouse.target - mouse.power) * 0.06;

      const range = MOUSE_RANGE * w;

      for (const b of blobs) {
        const driftX = reduceMotion ? 0 : Math.sin(t * b.speed + b.phase) * 0.05 * w;
        const driftY = reduceMotion ? 0 : Math.cos(t * b.speed * 0.8 + b.phase) * 0.06 * h;
        const hx = b.x * w + driftX;
        const hy = b.y * h + driftY;

        // gravity: pull toward the cursor, stronger the closer the blob is
        const dx = mouse.sx - hx;
        const dy = mouse.sy - hy;
        const dist = Math.hypot(dx, dy);
        const influence = Math.exp(-((dist / range) ** 2)) * mouse.power;
        const tx = hx + dx * PULL * influence;
        const ty = hy + dy * PULL * influence;

        b.vx = (b.vx + (tx - b.px) * STIFFNESS) * DAMPING;
        b.vy = (b.vy + (ty - b.py) * STIFFNESS) * DAMPING;
        b.px += b.vx;
        b.py += b.vy;
        b.scale += (1 + influence * 0.35 - b.scale) * 0.08;

        const radius = b.r * w * b.scale;
        const [r, g, bl] = b.color;
        const grad = ctx.createRadialGradient(b.px, b.py, 0, b.px, b.py, radius);
        grad.addColorStop(0, `rgba(${r},${g},${bl},${b.alpha})`);
        grad.addColorStop(0.5, `rgba(${r},${g},${bl},${b.alpha * 0.45})`);
        grad.addColorStop(1, `rgba(${r},${g},${bl},0)`);
        ctx.fillStyle = grad;
        ctx.fillRect(b.px - radius, b.py - radius, radius * 2, radius * 2);
      }

      // soft glow that follows the cursor so the attraction is visible
      if (mouse.power > 0.01) {
        const rr = 0.16 * w;
        const g = ctx.createRadialGradient(mouse.sx, mouse.sy, 0, mouse.sx, mouse.sy, rr);
        g.addColorStop(0, `rgba(143,180,232,${0.4 * mouse.power})`);
        g.addColorStop(1, "rgba(143,180,232,0)");
        ctx.fillStyle = g;
        ctx.fillRect(mouse.sx - rr, mouse.sy - rr, rr * 2, rr * 2);
      }
    };

    const tick = (time: number) => {
      if (visible) draw(time);
    };

    resize();
    mouse.x = mouse.sx = w / 2;
    mouse.y = mouse.sy = h / 2;
    draw(0);

    if (!reduceMotion) gsap.ticker.add(tick);
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    const io = new IntersectionObserver(([e]) => (visible = e.isIntersecting));
    io.observe(canvas);
    window.addEventListener("pointermove", onMove);
    document.addEventListener("pointerleave", onLeave);

    return () => {
      gsap.ticker.remove(tick);
      ro.disconnect();
      io.disconnect();
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden className={className} />;
}
