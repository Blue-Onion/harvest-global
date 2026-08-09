"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import { data } from "@/data";
import RecognitionCard from "@/components/credentials/RecognitionCard";

const TEASER_COUNT = 3;

export default function CredentialsTeaser() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const { recognition, sections } = data.credentials;
  const teaserItems = recognition.slice(0, TEASER_COUNT);

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

  return (
    <section
      id="credentials"
      ref={sectionRef}
      className="relative w-full overflow-hidden border-t border-white/10 bg-black py-20 text-white md:py-28"
    >
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-150 w-200 rounded-full bg-emerald-600/4 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8 md:px-10">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400">
              {sections.recognition.eyebrow}
            </p>
          </div>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white leading-[1.1] sm:text-5xl md:text-6xl">
            {sections.recognition.title}
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-400 sm:text-lg">
            {sections.recognition.description}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {teaserItems.map((item, i) => (
            <div
              key={item.id}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
            >
              <RecognitionCard item={item} />
            </div>
          ))}
        </div>

        {/* Explore Link */}
        <div className="mt-14 flex justify-center">
          <Link
            href="/credentials"
            className="group inline-flex items-center gap-3 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-7 py-3.5 text-sm font-medium text-emerald-300 backdrop-blur-sm transition-colors hover:border-emerald-500/50 hover:bg-emerald-500/20"
          >
            Explore Credentials
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
