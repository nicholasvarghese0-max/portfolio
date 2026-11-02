"use client";

import { useEffect, useRef } from "react";

type Props = {
  src: string;
  poster?: string;
  /** natural size, used to reserve space so the page doesn't jump */
  width: number;
  height: number;
  label: string;
  /** loop back to the start at this many seconds instead of at the file's end */
  endTime?: number;
  className?: string;
};

/** Silent looping clip that only plays while it is on screen. */
export default function AutoVideo({
  src,
  poster,
  width,
  height,
  label,
  endTime,
  className = "",
}: Props) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    let raf = 0;
    // timeupdate is too coarse to cut at an exact moment, so poll per frame
    const watchEnd = () => {
      if (endTime !== undefined && video.currentTime >= endTime) {
        video.currentTime = 0;
      }
      raf = requestAnimationFrame(watchEnd);
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
          cancelAnimationFrame(raf);
          raf = requestAnimationFrame(watchEnd);
        } else {
          video.pause();
          cancelAnimationFrame(raf);
        }
      },
      { threshold: 0.4 },
    );
    io.observe(video);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [endTime]);

  return (
    <video
      ref={ref}
      src={src}
      poster={poster}
      aria-label={label}
      muted
      loop
      playsInline
      preload="metadata"
      style={{ aspectRatio: `${width} / ${height}` }}
      className={`block w-full ${className}`}
    />
  );
}
