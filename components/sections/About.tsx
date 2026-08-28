"use client";

import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { data } from "@/data";
import Challenge from "./Challenge";
import Technology from "./Technology";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const clamp = (v: number, a: number, b: number): number =>
  v < a ? a : v > b ? b : v;

const smoothstep = (edge0: number, edge1: number, x: number): number => {
  const t = clamp((x - edge0) / (edge1 - edge0 || 1e-6), 0, 1);
  return t * t * (3 - 2 * t);
};

export default function About() {
  const {
    eyebrow,
    scrollTitle,
    scrollHint,
    title,
    highlight,
    paragraph1,
    paragraph2,
    domainsEyebrow,
    domains,
  } = data.about;

  // ScrollExpand config — drives the persistent background card.
  const startWidth = 75;
  const startHeight = 58;
  const startRadius = 24;
  const endRadius = 0;
  const mediaZoom = 2;
  const scrollDistance = 1.2; // viewport-heights of scroll that drive expansion
  const holdDistance = 0.4; // extra pinned scroll after expansion completes
  const smoothing = 0.1; // scrub lag (seconds)
  const overlayScrim = 0.65;
  const src = "/images/aboutbg.png";

  const containerRef = useRef<HTMLDivElement | null>(null);
  const frameRef = useRef<HTMLDivElement | null>(null);
  const mediaRef = useRef<HTMLImageElement>(null);
  const titleRef = useRef<HTMLDivElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const scrimRef = useRef<HTMLDivElement | null>(null);
  const hintRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  // Pure visual mapping: progress p (0..1) -> DOM styles.
  const applyProgress = (p: number) => {
    const frame = frameRef.current;
    const media = mediaRef.current;
    if (!frame || !media) return;

    const e = smoothstep(0, 1, p);

    const w = startWidth + (100 - startWidth) * e;
    const h = startHeight + (100 - startHeight) * e;
    const ix = Math.max(0, (100 - w) / 2);
    const iy = Math.max(0, (100 - h) / 2);
    const r = startRadius + (endRadius - startRadius) * e;
    frame.style.clipPath = `inset(${iy}% ${ix}% ${iy}% ${ix}% round ${r}px)`;

    media.style.transform = `scale(${mediaZoom + (1 - mediaZoom) * e})`;

    if (scrimRef.current)
      scrimRef.current.style.opacity = `${overlayScrim * e}`;

    if (titleRef.current) {
      const out = smoothstep(0.4, 0.88, p);
      titleRef.current.style.opacity = `${1 - out}`;
      titleRef.current.style.transform = `translate3d(0, ${-28 * out}px, 0) scale(${1 + 0.06 * out})`;
    }

    if (hintRef.current) {
      const gone = smoothstep(0, 0.12, p);
      hintRef.current.style.opacity = `${1 - gone}`;
      hintRef.current.style.transform = `translate3d(0, ${8 * gone}px, 0)`;
    }

    if (overlayRef.current) {
      const inn = smoothstep(0.68, 1, p);
      overlayRef.current.style.opacity = `${inn}`;
      overlayRef.current.style.transform = `translate3d(0, ${18 * (1 - inn)}px, 0)`;
    }
  };

  useGSAP(
    () => {
      const track = trackRef.current;
      if (!track) return;

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reduceMotion) {
        applyProgress(1);
        return;
      }

      // ScrollTrigger 1: Card Expansion & About Text Fade-in (as original)
      ScrollTrigger.create({
        trigger: track,
        start: "top top",
        end: () => `+=${(scrollDistance * window.innerHeight).toFixed(0)}`,
        scrub: smoothing,
        invalidateOnRefresh: true,
        onUpdate: (self) => applyProgress(self.progress),
        onRefresh: (self) => applyProgress(self.progress),
      });

      // ScrollTrigger 2: About Text Fade-out during hold phase
      ScrollTrigger.create({
        trigger: track,
        start: () => `top+=${(scrollDistance * window.innerHeight).toFixed(0)} top`,
        end: "bottom bottom",
        scrub: smoothing,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          if (overlayRef.current) {
            overlayRef.current.style.opacity = `${1 - self.progress}`;
          }
        },
        onRefresh: (self) => {
          if (overlayRef.current) {
            overlayRef.current.style.opacity = `${1 - self.progress}`;
          }
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <section id="about" ref={containerRef} className="relative w-full bg-black">
      {/* 1. Sticky, persistent background image + scrim (z-0) */}
      <div className="sticky top-0 z-0 h-screen w-full overflow-hidden bg-black">
        <div
          ref={frameRef}
          className="absolute inset-0 [clip-path:inset(21%_29%_21%_29%_round_24px)] [will-change:clip-path]"
        >
          <img
            ref={mediaRef}
            className="absolute inset-0 h-full w-full select-none object-cover [will-change:transform]"
            style={{ transform: `scale(${mediaZoom})` }}
            src={src}
            alt={scrollTitle}
            draggable={false}
          />
          <div
            ref={scrimRef}
            className="absolute inset-0 opacity-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.75),rgba(0,0,0,0.1)_45%,rgba(0,0,0,0.35))]"
          />
        </div>
      </div>

      {/* 2. Scrollable content layer (z-10) */}
      <div className="relative z-10 w-full mt-[-100vh]">
        {/* Phase 1: About scroll track — expansion + copy fade in/out */}
        <div ref={trackRef} className="relative h-[240vh] w-full">
          <div className="pointer-events-none sticky top-0 flex h-screen w-full items-center justify-center">
            <div
              ref={overlayRef}
              className="absolute inset-0 flex flex-col items-center justify-center p-[6%] text-center opacity-0 [will-change:opacity,transform]"
            >
              <div className="mx-auto flex max-w-4xl flex-col items-center justify-center px-4 text-center sm:px-6">
                <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-emerald-400">
                  {eyebrow}
                </p>

                <h2 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl leading-tight">
                  {title} <span className="text-emerald-500">{highlight}</span>
                </h2>

                <div className="mt-5 space-y-3 text-sm leading-relaxed text-neutral-200 sm:text-base md:text-lg max-w-3xl">
                  <p>{paragraph1}</p>
                  <p className="text-xs text-neutral-400 sm:text-sm">
                    {paragraph2}
                  </p>
                </div>

                <div className="mt-8 w-full max-w-3xl border-t border-white/15 pt-6">
                  <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.22em] text-neutral-400">
                    {domainsEyebrow}
                  </p>

                  <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-3 text-[10px] sm:gap-x-5 sm:text-[11px] font-mono uppercase tracking-[0.18em] text-neutral-300">
                    {domains.map((domain, index) => (
                      <div key={domain} className="flex items-center gap-3 sm:gap-5">
                        <span className="transition-colors hover:text-white">
                          {domain}
                        </span>
                        {index < domains.length - 1 && (
                          <span className="select-none text-white/30">·</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {scrollTitle ? (
              <div
                ref={titleRef}
                className="pointer-events-none absolute inset-0 m-0 flex items-center justify-center px-[6%] text-center font-bold leading-none tracking-[-0.03em] text-white [font-size:clamp(20px,7.5vw,84px)] [text-shadow:0_2px_24px_rgba(0,0,0,0.45)] [will-change:opacity,transform]"
              >
                {scrollTitle}
              </div>
            ) : null}
            {scrollHint ? (
              <div
                ref={hintRef}
                className="pointer-events-none absolute inset-x-0 bottom-5 text-center text-[0.8125rem] tracking-[0.02em] text-white/55 [will-change:opacity,transform]"
              >
                {scrollHint}
              </div>
            ) : null}
          </div>
        </div>

        {/* Phase 2: Challenge — scrolls over the persistent background */}
        <Challenge />

        {/* Phase 3: Technology — scrolls over the persistent background */}
        <Technology />
      </div>
    </section>
  );
}
