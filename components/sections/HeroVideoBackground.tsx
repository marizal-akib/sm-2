"use client";

import { useEffect, useRef, useState } from "react";

export default function HeroVideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onError = () => setVisible(false);
    video.addEventListener("error", onError);
    return () => video.removeEventListener("error", onError);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.pause();

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      video.currentTime = 0;
      return;
    }

    let pending = false;
    let rafId = 0;

    const update = () => {
      pending = false;
      const duration = video.duration;
      if (!duration || !isFinite(duration)) return;
      const range = window.innerHeight;
      const scroll = Math.min(Math.max(window.scrollY, 0), range);
      video.currentTime = (scroll / range) * duration;
    };

    const onReady = () => update();

    if (video.readyState >= 1) {
      update();
    } else {
      video.addEventListener("loadedmetadata", onReady);
    }

    const onScroll = () => {
      if (pending) return;
      pending = true;
      rafId = window.requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      video.removeEventListener("loadedmetadata", onReady);
      window.cancelAnimationFrame(rafId);
    };
  }, []);

  if (!visible) return null;

  return (
    <video
      ref={videoRef}
      muted
      playsInline
      preload="auto"
      aria-hidden
      className="absolute inset-0 h-full w-full object-cover"
      style={{ willChange: "transform" }}
    >
      <source src="/video/2026-04-14_03-32-40_Lumina.mp4" type="video/mp4" />
    </video>
  );
}
