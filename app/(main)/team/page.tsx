"use client";

import StarBackground from "@/components/ui/Starbackground";
import Reveal from "@/components/ui/reveal/Reveal";
import { data } from "@/data";

export default function TeamPage() {
  const { team } = data;

  return (
    <main className="text-white">
      <section className="relative overflow-hidden border-t border-white/10 pb-24 pt-40 md:pt-52 md:pb-32">
        <StarBackground />
        <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-150 w-200 rounded-full bg-emerald-600/4 blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8 md:px-10">
          <Reveal variant="group" className="max-w-4xl" duration={1}>
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
              className="mt-6 text-5xl font-bold tracking-tight leading-[0.95] sm:text-7xl md:text-8xl"
            >
              A Multidisciplinary Team for a Multidimensional Planet
            </h1>

            <p
              data-reveal="text"
              className="mt-8 max-w-2xl text-base leading-relaxed text-neutral-400 sm:text-lg"
            >
              Harvest Global SSP Pvt Ltd (HG Systems) is building
              enterprise-grade infrastructure and intelligence systems for Earth
              Observation and GeoAI. Our multidisciplinary team brings together
              expertise across AI, geospatial science, Earth Observation,
              climate, aerospace, insurance and large-scale technology
              deployment. From research and foundation models to infrastructure
              and commercial deployment, HG works across the complete lifecycle:
              Research &rarr; Platform &rarr; Deployment &rarr; Commercialisation.
            </p>
          </Reveal>

          <Reveal
            variant="stagger"
            itemSelector=".team-card"
            className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
            stagger={0.12}
          >
            {team.map((member) => (
              <div
                key={member.id}
                className="team-card rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-colors hover:border-white/20"
              >
                <h3 className="text-xl font-semibold text-white">
                  {member.name}
                </h3>
                <p className="mt-1 text-xs font-mono uppercase tracking-[0.18em] text-emerald-400">
                  {member.role}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-neutral-400">
                  {member.focus}
                </p>
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-block text-xs uppercase tracking-[0.18em] text-white/50 transition-colors hover:text-white"
                  >
                    LinkedIn &rarr;
                  </a>
                )}
              </div>
            ))}
          </Reveal>
        </div>
      </section>
    </main>
  );
}
