"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/* ──────────────────────────────────────────────────────────
   DATA — add more recognitions here; the grid adapts
   ────────────────────────────────────────────────────────── */

interface RecognitionItem {
  label: string;
  title: string;
  description: string;
  /** Optional year or short tag shown on the right of the label row */
  year?: string;
  /** Founder image path from /public/images/ */
  image: string;
  /** Visual size hint — 'featured' gets the big hero slot */
  variant: "featured" | "compact" | "wide";
}

const RECOGNITIONS: RecognitionItem[] = [
  {
    label: "RECOGNITION",
    title: "Global Pioneers in Core & Edge AI",
    description:
      "Named Global Pioneers in Core & Edge AI by Economic Times — recognising HG Systems' foundational work in earth-observation intelligence and edge deployment.",
    year: "ECONOMIC TIMES",
    image: "/images/founder1.png",
    variant: "featured",
  },
  {
    label: "AWARD",
    title: "Bharat Vibhushan Samman 2026",
    description:
      "Selected for the prestigious Bharat Vibhushan Samman 2026, presented at Vidhan Sabha in recognition of national-scale impact.",
    year: "2026",
    image: "/images/founder2.png",
    variant: "compact",
  },
  {
    label: "MEDIA",
    title: "Global Media Coverage",
    description:
      "Featured across Forbes, Outlook, Times Now, and Asia-One — international media coverage validating HG Systems' market position.",
    year: "INTERNATIONAL",
    image: "/images/founder3.png",
    variant: "compact",
  },
  {
    label: "GLOBAL FORUM",
    title: "Next Economy Forum UK",
    description:
      "Selected to present at the Next Economy Forum UK at the British Parliament — representing India's emerging leadership in AI-driven earth intelligence.",
    year: "BRITISH PARLIAMENT",
    image: "/images/founder4.png",
    variant: "wide",
  },
];

/* ──────────────────────────────────────────────────────────
   COMPONENT
   ────────────────────────────────────────────────────────── */

export default function Recognition() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      cardRefs.current.forEach((el, i) => {
        if (!el) return;
        gsap.fromTo(
          el,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            delay: i * 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  /* ── Partition items by variant ── */
  const featured = RECOGNITIONS.filter((r) => r.variant === "featured");
  const compact = RECOGNITIONS.filter((r) => r.variant === "compact");
  const wide = RECOGNITIONS.filter((r) => r.variant === "wide");

  let cardIndex = 0;

  return (
    <section
      id="recognition"
      ref={sectionRef}
      className="relative w-full overflow-hidden border-t border-white/10 bg-black py-20 text-white md:py-28"
    >
      {/* ── Ambient background glow ── */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-150 w-200 rounded-full bg-emerald-600/4 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8 md:px-10">
        {/* ── Section Header ── */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400">
              RECOGNITION & AWARDS
            </p>
          </div>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl leading-[1.1]">
            Credentials that{" "}
            <br className="hidden sm:inline" />
            <span className="text-emerald-500">speak for themselves.</span>
          </h2>

          <p className="mt-6 text-base leading-relaxed text-neutral-400 sm:text-lg max-w-2xl">
            From global recognition to parliamentary forums — milestones that
            validate HG Systems&apos; leadership in foundational earth-observation AI.
          </p>
        </div>

        {/* ── Cards Grid ── */}
        <div className="mt-16 lg:mt-20 space-y-5">
          {/* ROW 1 — Featured card (full-width hero) */}
          {featured.map((item) => {
            const idx = cardIndex++;
            return (
              <div
                key={item.title}
                ref={(el) => { cardRefs.current[idx] = el; }}
              >
                <FeaturedCard item={item} />
              </div>
            );
          })}

          {/* ROW 2 — Two compact cards side by side */}
          {compact.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {compact.map((item) => {
                const idx = cardIndex++;
                return (
                  <div
                    key={item.title}
                    ref={(el) => { cardRefs.current[idx] = el; }}
                  >
                    <CompactCard item={item} />
                  </div>
                );
              })}
            </div>
          )}

          {/* ROW 3 — Wide cards */}
          {wide.map((item) => {
            const idx = cardIndex++;
            return (
              <div
                key={item.title}
                ref={(el) => { cardRefs.current[idx] = el; }}
              >
                <WideCard item={item} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────
   CARD VARIANTS
   ────────────────────────────────────────────────────────── */

/* ── Featured (Hero) Card ── */
function FeaturedCard({ item }: { item: RecognitionItem }) {
  return (
    <div
      className="
        group relative overflow-hidden rounded-2xl border border-white/8
        bg-linear-to-br from-neutral-900/80 via-neutral-950/90 to-black
        transition-all duration-500
        hover:border-emerald-500/20 hover:shadow-[0_0_40px_rgba(16,185,129,0.06)]
      "
    >
      {/* Corner accent line */}
      <div className="absolute top-0 right-0 h-24 w-px bg-linear-to-b from-emerald-500/40 to-transparent z-10" />
      <div className="absolute top-0 right-0 h-px w-24 bg-linear-to-l from-emerald-500/40 to-transparent z-10" />

      <div className="flex flex-col md:flex-row">
        {/* Text content */}
        <div className="flex-1 p-8 sm:p-10 md:p-14">
          {/* Label row */}
          <div className="flex items-center justify-between gap-4 mb-8">
            <span className="inline-flex items-center gap-2 text-[10px] font-mono font-semibold uppercase tracking-[0.25em] text-emerald-400">
              <span className="h-1 w-1 rounded-full bg-emerald-400" />
              {item.label}
            </span>
            {item.year && (
              <span className="text-[10px] font-mono tracking-[0.2em] text-neutral-500">
                {item.year}
              </span>
            )}
          </div>

          {/* Title */}
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.1] max-w-3xl">
            {item.title}
          </h3>

          {/* Description */}
          <p className="mt-5 text-sm sm:text-base leading-relaxed text-neutral-400 max-w-2xl">
            {item.description}
          </p>

          {/* Bottom metadata bar */}
          <div className="mt-10 pt-5 border-t border-white/6 flex items-center justify-between text-[9px] font-mono tracking-[0.2em] text-neutral-500 uppercase">
            <span>VERIFIED CREDENTIAL</span>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500/60" />
              HG SYSTEMS
            </span>
          </div>
        </div>

        {/* Founder image */}
        <div className="relative w-full md:w-72 lg:w-80 shrink-0 min-h-48 md:min-h-0">
          <div className="absolute inset-0 bg-linear-to-r from-neutral-900/90 via-neutral-900/40 to-transparent z-1 md:block hidden" />
          <div className="absolute inset-0 bg-linear-to-t from-neutral-900/90 via-neutral-900/40 to-transparent z-1 md:hidden" />
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover object-top opacity-60 group-hover:opacity-75 group-hover:scale-105 transition-all duration-700"
            sizes="(max-width: 768px) 100vw, 320px"
          />
        </div>
      </div>
    </div>
  );
}

/* ── Compact Card ── */
function CompactCard({ item }: { item: RecognitionItem }) {
  return (
    <div
      className="
        group relative overflow-hidden rounded-xl border border-white/8
        bg-neutral-950/70
        p-6 sm:p-8
        flex flex-col justify-between min-h-65
        transition-all duration-500
        hover:border-white/15 hover:bg-neutral-900/50
      "
    >
      {/* Subtle top accent */}
      <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-emerald-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div>
        {/* Label row with founder portrait */}
        <div className="flex items-center justify-between gap-3 mb-5">
          <span className="inline-flex items-center gap-2 text-[10px] font-mono font-semibold uppercase tracking-[0.25em] text-emerald-400/80">
            <span className="h-1 w-1 rounded-full bg-emerald-400/80" />
            {item.label}
          </span>
          <div className="relative h-10 w-10 rounded-full overflow-hidden border border-white/10 shrink-0">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover object-top opacity-70 group-hover:opacity-90 transition-opacity duration-500"
              sizes="40px"
            />
          </div>
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white leading-snug">
          {item.title}
        </h3>

        {/* Description */}
        <p className="mt-3 text-sm leading-relaxed text-neutral-500 line-clamp-3">
          {item.description}
        </p>
      </div>

      {/* Bottom bar */}
      <div className="mt-6 pt-4 border-t border-white/6 flex items-center justify-between text-[9px] font-mono tracking-[0.18em] text-neutral-600 uppercase">
        <div className="flex items-center gap-2">
          <span className="h-1 w-1 rounded-full bg-white/20" />
          MILESTONE
        </div>
        {item.year && (
          <span className="text-neutral-600">{item.year}</span>
        )}
      </div>
    </div>
  );
}

/* ── Wide Card ── */
function WideCard({ item }: { item: RecognitionItem }) {
  return (
    <div
      className="
        group relative overflow-hidden rounded-xl border border-white/8
        bg-neutral-950/60
        p-6 sm:p-8 md:p-10
        transition-all duration-500
        hover:border-white/15 hover:bg-neutral-900/40
      "
    >
      {/* Left accent bar */}
      <div className="absolute left-0 top-6 bottom-6 w-px bg-linear-to-b from-emerald-500/30 via-emerald-500/10 to-transparent" />

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        {/* Founder portrait */}
        <div className="relative h-14 w-14 md:h-16 md:w-16 rounded-full overflow-hidden border border-white/10 shrink-0 ml-4 md:ml-6">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover object-top opacity-70 group-hover:opacity-90 transition-opacity duration-500"
            sizes="64px"
          />
        </div>

        <div className="flex-1 pl-4 md:pl-6">
          {/* Label row */}
          <div className="flex items-center gap-3 mb-3">
            <span className="inline-flex items-center gap-2 text-[10px] font-mono font-semibold uppercase tracking-[0.25em] text-emerald-400/80">
              <span className="h-1 w-1 rounded-full bg-emerald-400/80" />
              {item.label}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white leading-snug">
            {item.title}
          </h3>

          {/* Description */}
          <p className="mt-2 text-sm leading-relaxed text-neutral-400 max-w-xl">
            {item.description}
          </p>
        </div>

        {/* Right metadata block */}
        <div className="shrink-0 flex items-center gap-5 pl-4 md:border-l md:border-white/6 md:pl-8">
          {item.year && (
            <div className="text-right">
              <span className="block text-[9px] font-mono tracking-[0.2em] text-neutral-600 uppercase mb-1">
                VENUE
              </span>
              <span className="text-xs font-mono tracking-wider text-neutral-300">
                {item.year}
              </span>
            </div>
          )}
          <div className="h-8 w-px bg-white/6 hidden md:block" />
          <div className="hidden md:flex items-center gap-2 text-[9px] font-mono tracking-[0.18em] text-neutral-600 uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500/50" />
            INVITATION
          </div>
        </div>
      </div>
    </div>
  );
}
