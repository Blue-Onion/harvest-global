"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { data, type TechCard } from "@/data";
import { cn } from "@/lib/utils";
import StarBackground from "@/components/ui/Starbackground";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const clamp = (v: number, a: number, b: number): number =>
  v < a ? a : v > b ? b : v;

const accentText: Record<TechCard["accent"], string> = {
  neutral: "text-white",
  orange: "text-orange-400",
  emerald: "text-emerald-400",
};

const accentGlow: Record<TechCard["accent"], string> = {
  neutral: "bg-white/10",
  orange: "bg-orange-500/15",
  emerald: "bg-emerald-500/15",
};

function TechCardView({ card }: { card: TechCard }) {
  return (
    <article
      className={cn(
        "tech-card tech-card-mobile relative flex h-auto w-full shrink-0 flex-col justify-between overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.03] p-8 md:h-[80vh] md:w-[70vw] lg:w-[58vw] md:p-14",
      )}
    >
      {card.visual === "image" && card.image && (
        <>
          <img
            src={card.image}
            alt={card.title}
            draggable={false}
            className="absolute inset-0 h-full w-full select-none object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
        </>
      )}

      {card.visual === "grid" && (
        <>
          <div
            className="absolute inset-0 opacity-70"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          <span
            className={cn(
              "absolute left-[12%] top-[18%] h-32 w-32 rounded-full blur-3xl",
              accentGlow[card.accent],
            )}
          />
          <span
            className={cn(
              "absolute right-[16%] bottom-[14%] h-40 w-40 rounded-full blur-3xl",
              accentGlow[card.accent],
            )}
          />
        </>
      )}

      <div className="relative z-10 flex h-full flex-col justify-between gap-8">
        <div className="flex items-start justify-between">
          <span className="font-mono text-xs tracking-[0.25em] text-white/30">
            {card.number}
          </span>
          <span
            className={cn("font-mono text-xs tracking-[0.25em]", accentText[card.accent])}
          >
            {card.title}
          </span>
        </div>

        <div className="flex-1" />

        <div>
          <h3 className="font-display text-3xl font-normal tracking-[0.02em] text-white md:text-4xl">
            {card.title}
          </h3>
          <p className="mt-3 max-w-md text-base leading-relaxed text-white/60">
            {card.description}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {card.items.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/15 bg-white/5 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-white/40"
              >
                {item}
              </span>
            ))}
          </div>
          {card.coords && (
            <p className="mt-5 font-mono text-[10px] tracking-[0.2em] text-white/30">
              {card.coords}
            </p>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Technology() {
  const { technology } = data;
  const cards = technology.cards ?? [];

  const sectionRef = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const progressRef = useRef<HTMLDivElement | null>(null);

  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    setReduced(
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    );
  }, []);

  useGSAP(
    () => {
      if (reduced) return;

      const section = sectionRef.current;
      const track = trackRef.current;
      if (!section || !track) return;

      const mm = gsap.matchMedia();

      // Desktop: pinned horizontal scroll journey
      mm.add("(min-width: 768px)", () => {
        const getScroll = () =>
          Math.max(0, track.scrollWidth - window.innerWidth);

        gsap.to(track, {
          x: () => -getScroll(),
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${getScroll()}`,
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              if (progressRef.current) {
                progressRef.current.style.width = `${self.progress * 100}%`;
              }
            },
          },
        });
      });

      // Mobile: simple staggered reveal, no pinning
      mm.add("(max-width: 767px)", () => {
        gsap.utils.toArray<HTMLElement>(".tech-card-mobile").forEach((card) => {
          gsap.from(card, {
            opacity: 0,
            y: 30,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          });
        });
      });
    },
    { scope: sectionRef, dependencies: [reduced] },
  );

  return (
    <section
      id="technology"
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-black text-white"
    >
      <StarBackground />

      <div
        ref={trackRef}
        className={cn(
          "relative z-10 flex flex-col gap-6 px-5 py-20 md:h-screen md:items-center md:gap-10 md:py-0 sm:px-8 md:px-10",
          !reduced && "md:flex-row",
        )}
      >
        {/* INTRO PANEL */}
        <div className="tech-intro flex w-full shrink-0 flex-col justify-center px-2 md:w-[80vw] lg:w-[60vw] md:px-20">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-white/40">
            {technology.eyebrow}
          </p>
          <p className="mt-3 font-display text-sm tracking-[0.04em] text-white/50">
            THE HG APPROACH
          </p>
          <h2 className="mt-4 font-display text-4xl font-normal leading-[1.1] tracking-[0.02em] text-white md:text-6xl">
            {technology.title.map((line, i) => (
              <span key={i}>
                {i > 0 && <br />}
                {line}
              </span>
            ))}
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/50">
            {technology.description}
          </p>
        </div>

        {/* HORIZONTAL CARDS */}
        {cards.map((card) => (
          <TechCardView key={card.number} card={card} />
        ))}
      </div>

      {/* PROGRESS INDICATOR (desktop, during pin) */}
      {!reduced && (
        <div className="pointer-events-none absolute bottom-10 left-0 right-0 z-20 hidden px-20 md:block">
          <div className="flex items-center justify-between font-mono text-[10px] tracking-[0.2em] text-white/30">
            <span>{cards[0]?.title?.toUpperCase()}</span>
            <span>{cards[cards.length - 1]?.title?.toUpperCase()}</span>
          </div>
          <div className="relative mt-2 h-px w-full bg-white/10">
            <div
              ref={progressRef}
              className="absolute left-0 top-0 h-px bg-white/40"
              style={{ width: "0%" }}
            />
          </div>
        </div>
      )}
    </section>
  );
}
