"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import Reveal from "@/components/ui/reveal/Reveal";
import { data } from "@/data";

function TeamCard({
  member,
  index,
  total,
}: {
  member: any;
  index: number;
  total: number;
}) {
  const scanRef = useRef<HTMLDivElement>(null);
  const bracketsRef = useRef<HTMLDivElement>(null);

  const handleEnter = () => {
    gsap.killTweensOf(scanRef.current);
    gsap.fromTo(
      scanRef.current,
      { yPercent: -100, opacity: 0.8 },
      { yPercent: 100, opacity: 0, duration: 1.1, ease: "power2.inOut" }
    );
    gsap.to(bracketsRef.current?.children ?? [], {
      opacity: 1,
      duration: 0.3,
      stagger: 0.04,
    });
  };

  const handleLeave = () => {
    gsap.to(bracketsRef.current?.children ?? [], {
      opacity: 0.35,
      duration: 0.4,
    });
  };

  // deterministic pseudo-coordinate, not tied to member.id type
  const lat = (index * 7.3 + 12).toFixed(2);
  const lng = (index * 11.6 + 45).toFixed(2);

  return (
    <div
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className="team-card group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-colors duration-500 hover:border-white/20 hover:bg-white/[0.05]"
    >
      {/* Reticle corners */}
      <div
        ref={bracketsRef}
        className="pointer-events-none absolute inset-3 z-20 opacity-35"
      >
        <span className="absolute left-0 top-0 h-3 w-3 border-l border-t border-emerald-400/70" />
        <span className="absolute right-0 top-0 h-3 w-3 border-r border-t border-emerald-400/70" />
        <span className="absolute bottom-0 left-0 h-3 w-3 border-b border-l border-emerald-400/70" />
        <span className="absolute bottom-0 right-0 h-3 w-3 border-b border-r border-emerald-400/70" />
      </div>

      {/* Image */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-white/5">
        {member.image ? (
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-xs uppercase tracking-[0.2em] text-white/20">
            Image
          </div>
        )}

        {/* Faint grid, EO-imagery feel */}
        <div
          className="absolute inset-0 opacity-[0.08] mix-blend-overlay"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        {/* Scanline sweep — plays on hover */}
        <div
          ref={scanRef}
          className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-emerald-400/0 via-emerald-400/25 to-emerald-400/0 opacity-0"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        <span className="absolute bottom-3 left-3 z-10 rounded-full border border-white/15 bg-black/40 px-2.5 py-1 font-mono text-[10px] tracking-widest text-emerald-300 backdrop-blur-sm">
          N{lat}° / E{lng}°
        </span>
      </div>

      {/* Content */}
      <div className="p-8">
        <div className="flex items-start justify-between gap-6">
          <div>
            <p className="font-mono text-[11px] tracking-widest text-white/30">
              {String(index + 1).padStart(2, "0")} /{" "}
              {String(total).padStart(2, "0")}
            </p>
            <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white">
              {member.name}
            </h3>
            <p className="mt-2 font-mono text-xs uppercase tracking-[0.18em] text-emerald-400">
              {member.role}
            </p>
          </div>

          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${member.name} on LinkedIn`}
              className="group/link flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-300 hover:border-white/30 hover:bg-white"
            >
              <Image
                src="/svg/linkedIn.svg"
                alt="LinkedIn"
                width={18}
                height={18}
                className="invert transition-all duration-300 group-hover/link:invert-0"
              />
            </a>
          )}
        </div>

        <p className="mt-6 max-w-xl text-sm leading-relaxed text-neutral-400 sm:text-base">
          {member.focus}
        </p>
      </div>
    </div>
  );
}

export default function TeamPage() {
  const { team } = data;

  return (
    <main className="text-white">
      <section className="relative overflow-hidden border-t border-white/10 pb-24 pt-40 md:pb-32 md:pt-52">
        <div className="pointer-events-none absolute -top-40 left-1/2 h-150 w-200 -translate-x-1/2 rounded-full bg-emerald-600/4 blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8 md:px-10">
          <Reveal variant="group" duration={1}>
            <div className="flex items-center gap-3">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
              <p
                data-reveal="eyebrow"
                className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400"
              >
                ABOUT US
              </p>
            </div>

            <h1
              data-reveal="heading"
              className="mt-6 max-w-5xl text-5xl font-bold leading-[0.95] tracking-tight sm:text-7xl md:text-8xl"
            >
              A Multidisciplinary Team for a Multidimensional Planet
            </h1>

            <p
              data-reveal="text"
              className="mt-8 max-w-3xl text-base leading-relaxed text-neutral-400 sm:text-lg"
            >
              Harvest Global SSP Pvt Ltd (HG Systems) is building
              enterprise-grade infrastructure and intelligence systems for
              Earth Observation and GeoAI. Our multidisciplinary team brings
              together expertise across AI, geospatial science, Earth
              Observation, climate, aerospace, insurance and large-scale
              technology deployment. From research and foundation models to
              infrastructure and commercial deployment, HG works across the
              complete lifecycle: Research &rarr; Platform &rarr; Deployment
              &rarr; Commercialisation.
            </p>
          </Reveal>

          <Reveal
            variant="stagger"
            itemSelector=".team-card"
            className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2"
            stagger={0.15}
          >
            {team.map((member, i) => (
              <TeamCard
                key={member.id}
                member={member}
                index={i}
                total={team.length}
              />
            ))}
          </Reveal>
        </div>
      </section>
    </main>
  );
}