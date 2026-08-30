"use client";

import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { data } from "@/data";

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

  // ScrollExpand config
  const startWidth = 48;
  const startHeight = 58;
  const startRadius = 24;
  const endRadius = 0;
  const mediaZoom = 1;
  const overlayScrim = 0.65;
  const src = "/images/us3.png";

  const trackRef = useRef<HTMLDivElement | null>(null);
  const frameRef = useRef<HTMLDivElement | null>(null);
  const mediaRef = useRef<HTMLImageElement>(null);
  const titleRef = useRef<HTMLDivElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const scrimRef = useRef<HTMLDivElement | null>(null);
  const hintRef = useRef<HTMLDivElement | null>(null);

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

      const proxy = { p: 0 };

      gsap.to(proxy, {
        p: 1,
        duration: 2.4,
        ease: "power2.out",
        onUpdate: () => applyProgress(proxy.p),
        scrollTrigger: {
          trigger: track,
          start: "top 30%",
          toggleActions: "play none none reverse",
        },
      });
    },
    { scope: trackRef },
  );

  return (
    <section
      id="about"
      className="relative bg-black text-white w-full border-t border-white/10"
    >
      <div ref={trackRef} className="relative w-full h-screen overflow-hidden">
        <div
          ref={frameRef}
          className="absolute inset-0 [clip-path:inset(58%_26%_58%_26%_round_24px)] [will-change:clip-path]"
        >
          <img
            ref={mediaRef}
            className="absolute inset-0 w-full h-full object-cover origin-center select-none [will-change:transform]"
            style={{ transform: `scale(${mediaZoom})` }}
            src={src}
            alt={scrollTitle}
            draggable={false}
          />
          <div
            ref={scrimRef}
            className="absolute inset-0 opacity-0 pointer-events-none bg-[linear-gradient(to_top,rgba(0,0,0,0.75),rgba(0,0,0,0.1)_45%,rgba(0,0,0,0.35))]"
          />
          <div
            ref={overlayRef}
            className="absolute inset-0 flex flex-col items-center justify-center text-center p-[6%] opacity-0 [will-change:opacity,transform]"
          >
            <div className="mx-auto flex max-w-4xl flex-col items-center justify-center text-center px-4 sm:px-6">
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

              <div className="mt-8 border-t border-white/15 pt-6 w-full max-w-3xl">
                <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-neutral-400 mb-3">
                  {domainsEyebrow}
                </p>

                <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-3 sm:gap-x-5 text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.18em] text-neutral-300">
                  {domains.map((domain, index) => (
                    <div key={domain} className="flex items-center gap-3 sm:gap-5">
                      <span className="transition-colors hover:text-white">
                        {domain}
                      </span>
                      {index < domains.length - 1 && (
                        <span className="text-white/30 select-none">·</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {scrollTitle ? (
          <div
            ref={titleRef}
            className="absolute inset-0 flex items-center justify-center m-0 px-[6%] text-center font-bold leading-none tracking-[-0.03em] text-white [font-size:clamp(20px,7.5vw,84px)] [text-shadow:0_2px_24px_rgba(0,0,0,0.45)] pointer-events-none [will-change:opacity,transform]"
          >
            {scrollTitle}
          </div>
        ) : null}
        {scrollHint ? (
          <div
            ref={hintRef}
            className="absolute inset-x-0 bottom-5 text-center text-[0.8125rem] tracking-[0.02em] text-white/55 pointer-events-none [will-change:opacity,transform]"
          >
            {scrollHint}
          </div>
        ) : null}
      </div>
    </section>
  );
}