"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface TechStage {
  number: string;
  label: string;
  title: string;
  description: string;
  accent: "neutral" | "orange" | "emerald";
  coords: string;
}

const TECH_STAGES: TechStage[] = [
  {
    number: "01",
    label: "FOUNDATION DATA",
    title: "Earth Observation",
    description:
      "Satellite and Earth Observation data forms the physical foundation of our intelligence pipeline.",
    accent: "neutral",
    coords: "LAT 28.61° N / LON 77.20° E",
  },
  {
    number: "02",
    label: "CORE ARCHITECTURE",
    title: "Foundational AI",
    description:
      "Domain-specific AI models engineered around massive Earth Observation datasets and regional parameters.",
    accent: "orange",
    coords: "EO-MODEL-V2 / TRANSFORMER",
  },
  {
    number: "03",
    label: "SPECIALIZED MODELS",
    title: "Customized Intelligence",
    description:
      "Highly customized AI models adapted for precise operational requirements and downstream decision systems.",
    accent: "emerald",
    coords: "DOWNSTREAM-INFERENCE / OPT",
  },
  {
    number: "04",
    label: "ORBITAL COMPUTING",
    title: "Edge AI",
    description:
      "Processing intelligence closer to data sources through ground stations and satellite orbital environments.",
    accent: "orange",
    coords: "EDGE-NODE / GROUND-STATION",
  },
  {
    number: "05",
    label: "SCALE & ANALYTICS",
    title: "Deployment Infrastructure",
    description:
      "Customized GPU-centric infrastructure engineered for real-time analytics, data sovereignty, and global scale.",
    accent: "emerald",
    coords: "GPU-CLUSTER / LOW-LATENCY",
  },
];

export default function Technology() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const stagesContainerRef = useRef<HTMLDivElement | null>(null);
  const progressLineRef = useRef<HTMLDivElement | null>(null);
  const stageRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [lineProgress, setLineProgress] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Register GSAP ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setLineProgress(1);
      return;
    }

    const ctx = gsap.context(() => {
      // 1. Line follow animation scrubbed directly to scroll
      if (progressLineRef.current && stagesContainerRef.current) {
        gsap.fromTo(
          progressLineRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: stagesContainerRef.current,
              start: "top 65%",
              end: "bottom 75%",
              scrub: 0.4,
              onUpdate: (self) => {
                setLineProgress(self.progress);
              },
            },
          }
        );
      }

      // 2. Individual card reveal animations on scroll
      stageRefs.current.forEach((stageEl) => {
        if (!stageEl) return;
        gsap.fromTo(
          stageEl,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
              trigger: stageEl,
              start: "top 85%",
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
      id="technology"
      ref={sectionRef}
      className="relative w-full overflow-hidden border-t border-white/10 bg-black py-20 text-white md:py-28"
    >
      {/* Technical Grid Background */}
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <svg
          className="h-full w-full stroke-white/10"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="tech-grid-pattern"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path d="M 60 0 L 0 0 0 60" fill="none" strokeWidth="0.5" />
              <circle cx="60" cy="60" r="1" fill="rgba(255,255,255,0.2)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#tech-grid-pattern)" />
        </svg>
      </div>

      {/* Orbital Background Rings */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 z-0 -translate-x-1/2 -translate-y-1/2 opacity-25">
        <svg
          width="1000"
          height="1000"
          viewBox="0 0 1000 1000"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="animate-[spin_140s_linear_infinite]"
        >
          <circle
            cx="500"
            cy="500"
            r="480"
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="1"
            strokeDasharray="4 8"
          />
          <circle
            cx="500"
            cy="500"
            r="360"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="1"
          />
          <circle
            cx="500"
            cy="500"
            r="240"
            stroke="rgba(234,88,12,0.12)"
            strokeWidth="1"
            strokeDasharray="8 12"
          />
          <circle
            cx="500"
            cy="500"
            r="120"
            stroke="rgba(5,150,105,0.15)"
            strokeWidth="1"
          />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8 md:px-10">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400">
              THE TECHNOLOGY
            </p>
          </div>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl leading-[1.1]">
            From Earth Observation <br className="hidden sm:inline" />
            to <span className="text-emerald-500">Intelligence.</span>
          </h2>

          <p className="mt-6 text-base leading-relaxed text-neutral-400 sm:text-lg max-w-2xl">
            HG Systems develops foundational AI and customized models around Earth
            Observation data, while building the infrastructure required to deploy
            intelligence closer to where that data is generated.
          </p>
        </div>

        {/* Pipeline Architecture Grid Container */}
        <div ref={stagesContainerRef} className="relative mt-16 lg:mt-24">
          {/* Central Track (Inactive Base Line) */}
          <div className="absolute top-4 bottom-4 left-6 lg:left-1/2 -translate-x-1/2 w-px bg-white/10 z-0">
            {/* GSAP Line Follower (Glowing progress bar scrubbed to scroll) */}
            <div
              ref={progressLineRef}
              className="w-px h-full bg-linear-to-b from-neutral-300 via-orange-500 to-emerald-400 origin-top shadow-[0_0_12px_rgba(16,185,129,0.8)]"
              style={{ transform: `scaleY(${lineProgress})` }}
            />

            {/* Traveling Light Pulse Head */}
            <div
              className="absolute left-1/2 -translate-x-1/2 h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)] z-30 transition-all duration-75 pointer-events-none"
              style={{
                top: `${lineProgress * 100}%`,
                opacity: lineProgress > 0.02 && lineProgress < 0.98 ? 1 : 0,
              }}
            />
          </div>

          {/* Stages List */}
          <div className="space-y-12 lg:space-y-16 relative z-10">
            {TECH_STAGES.map((stage, idx) => {
              const isLeft = idx % 2 === 0; // 01, 03, 05 -> left on lg; 02, 04 -> right on lg
              const isOrange = stage.accent === "orange";
              const isEmerald = stage.accent === "emerald";

              // Check if line scroll progress has reached or passed this stage node
              const threshold = idx / (TECH_STAGES.length - 1); // 0.0, 0.25, 0.5, 0.75, 1.0
              const isPassed = lineProgress >= threshold * 0.85;

              // Color mappings
              const numberColor = isOrange
                ? "text-orange-500"
                : isEmerald
                ? "text-emerald-500"
                : "text-neutral-400";

              const badgeStyle = isOrange
                ? "border-orange-500/40 bg-orange-500/10 text-orange-400"
                : isEmerald
                ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-400"
                : "border-white/20 bg-white/5 text-neutral-400";

              const connectorGlow = isOrange
                ? "bg-orange-500/70 shadow-[0_0_8px_rgba(249,115,22,0.5)]"
                : isEmerald
                ? "bg-emerald-500/70 shadow-[0_0_8px_rgba(16,185,129,0.5)]"
                : "bg-white/50 shadow-[0_0_8px_rgba(255,255,255,0.3)]";

              const nodeCenterDot = isOrange
                ? "bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.8)]"
                : isEmerald
                ? "bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]"
                : "bg-neutral-200 shadow-[0_0_8px_rgba(255,255,255,0.6)]";

              const nodeRingGlow = isOrange
                ? "border-orange-500/70 shadow-[0_0_12px_rgba(249,115,22,0.6)] scale-110"
                : isEmerald
                ? "border-emerald-500/70 shadow-[0_0_12px_rgba(16,185,129,0.6)] scale-110"
                : "border-white/60 shadow-[0_0_8px_rgba(255,255,255,0.4)] scale-105";

              return (
                <div
                  key={stage.number}
                  ref={(el) => {
                    stageRefs.current[idx] = el;
                  }}
                  className="relative grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 items-center"
                >
                  {/* Central Node Indicator */}
                  <div className="absolute left-6 lg:left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 flex items-center justify-center pointer-events-none">
                    <div
                      className={`h-4.5 w-4.5 rounded-full border bg-black flex items-center justify-center transition-all duration-500 ${
                        isPassed ? nodeRingGlow : "border-neutral-700"
                      }`}
                    >
                      <div
                        className={`h-2 w-2 rounded-full transition-all duration-500 ${
                          isPassed ? nodeCenterDot : "bg-neutral-600"
                        }`}
                      />
                    </div>
                  </div>

                  {/* Horizontal Connector Line */}
                  {/* Mobile connector: left-6 to left-14 */}
                  <div
                    className={`lg:hidden absolute left-6 top-1/2 -translate-y-1/2 w-8 h-px transition-colors duration-500 ${
                      isPassed ? connectorGlow : "bg-white/10"
                    }`}
                  />

                  {/* Desktop connector */}
                  {isLeft ? (
                    /* Left Card Connector (spans from right edge of col 1 to 50% center line) */
                    <div
                      className={`hidden lg:block absolute top-1/2 -translate-y-1/2 right-1/2 w-12 h-px transition-colors duration-500 ${
                        isPassed ? connectorGlow : "bg-white/10"
                      }`}
                    />
                  ) : (
                    /* Right Card Connector (spans from 50% center line to left edge of col 2) */
                    <div
                      className={`hidden lg:block absolute top-1/2 -translate-y-1/2 left-1/2 w-12 h-px transition-colors duration-500 ${
                        isPassed ? connectorGlow : "bg-white/10"
                      }`}
                    />
                  )}

                  {/* Left Column Container */}
                  <div
                    className={`${
                      isLeft ? "lg:col-start-1" : "hidden lg:block lg:col-start-1"
                    }`}
                  >
                    {isLeft && (
                      <div className="pl-14 lg:pl-0 lg:pr-12">
                        <div
                          className={`group relative rounded-xl border p-6 md:p-8 backdrop-blur-xs transition-all duration-500 ${
                            isPassed
                              ? "border-white/20 bg-neutral-900/60 shadow-[0_0_20px_rgba(0,0,0,0.5)]"
                              : "border-white/10 bg-neutral-950/60 hover:border-white/20"
                          }`}
                        >
                          <div className="flex items-center justify-between gap-4 mb-4">
                            <span
                              className={`font-mono text-3xl font-bold tracking-tight ${numberColor}`}
                            >
                              {stage.number}
                            </span>
                            <span
                              className={`text-[9px] font-mono tracking-widest px-2.5 py-1 rounded border uppercase ${badgeStyle}`}
                            >
                              {stage.label}
                            </span>
                          </div>

                          <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-neutral-100 transition-colors">
                            {stage.title}
                          </h3>

                          <p className="mt-2 text-sm leading-relaxed text-neutral-400 font-sans">
                            {stage.description}
                          </p>

                          <div className="mt-6 pt-3 border-t border-white/10 flex items-center justify-between text-[9px] font-mono text-neutral-500 tracking-wider">
                            <span>{stage.coords}</span>
                            <span className="text-white/20">SYSTEM // NODE</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Right Column Container */}
                  <div
                    className={`${
                      !isLeft
                        ? "lg:col-start-2 pl-14 lg:pl-12 lg:pr-0"
                        : "hidden lg:block lg:col-start-2"
                    }`}
                  >
                    {!isLeft && (
                      <div className="pl-14 lg:pl-12 lg:pr-0">
                        <div
                          className={`group relative rounded-xl border p-6 md:p-8 backdrop-blur-xs transition-all duration-500 ${
                            isPassed
                              ? "border-white/20 bg-neutral-900/60 shadow-[0_0_20px_rgba(0,0,0,0.5)]"
                              : "border-white/10 bg-neutral-950/60 hover:border-white/20"
                          }`}
                        >
                          <div className="flex items-center justify-between gap-4 mb-4">
                            <span
                              className={`font-mono text-3xl font-bold tracking-tight ${numberColor}`}
                            >
                              {stage.number}
                            </span>
                            <span
                              className={`text-[9px] font-mono tracking-widest px-2.5 py-1 rounded border uppercase ${badgeStyle}`}
                            >
                              {stage.label}
                            </span>
                          </div>

                          <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-neutral-100 transition-colors">
                            {stage.title}
                          </h3>

                          <p className="mt-2 text-sm leading-relaxed text-neutral-400 font-sans">
                            {stage.description}
                          </p>

                          <div className="mt-6 pt-3 border-t border-white/10 flex items-center justify-between text-[9px] font-mono text-neutral-500 tracking-wider">
                            <span>{stage.coords}</span>
                            <span className="text-white/20">SYSTEM // NODE</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Infrastructure Note */}
        <div className="mt-20 rounded-xl border border-white/10 bg-neutral-950/70 p-6 md:p-8 backdrop-blur-xs">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-1">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">
                INFRASTRUCTURE & GOVERNANCE
              </span>
              <p className="text-sm text-neutral-300 font-medium max-w-2xl">
                Engineered with customized GPU-centric datacenters, ground-station co-location,
                and sovereign data governance models across regional deployments.
              </p>
            </div>
            <div className="flex items-center gap-6 shrink-0 font-mono text-xs text-neutral-400 border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0 md:pl-6">
              <div>
                <span className="block text-white font-bold text-sm">REAL-TIME</span>
                <span className="text-[10px] text-neutral-500 uppercase tracking-wider">Predictive Analytics</span>
              </div>
              <div className="h-8 w-px bg-white/10" />
              <div>
                <span className="block text-emerald-400 font-bold text-sm">SOVEREIGN</span>
                <span className="text-[10px] text-neutral-500 uppercase tracking-wider">Regional Data Control</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
