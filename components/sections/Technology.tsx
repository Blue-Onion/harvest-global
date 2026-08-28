"use client";

import { useInView } from "@/lib/useInView";
import { cn } from "@/lib/utils";

const technologyPillars = [
  {
    title: "Unified GeoAI Stack",
    description: "End-to-end infrastructure, models and applications for Earth Intelligence.",
  },
  {
    title: "GeoFM",
    description: "Foundation models for Earth observation and geospatial reasoning.",
  },
  {
    title: "Sovereign AI Cloud",
    description: "Private, compliant compute for strategic and sovereign datasets.",
  },
  {
    title: "Edge AI",
    description: "Intelligence at the source — satellites, ground stations and edge nodes.",
  },
];

const approachPipeline = [
  "Earth Data",
  "Unified GeoAI Stack",
  "Foundation Models / AI",
  "Sovereign Private AI Cloud",
  "Earth Intelligence",
  "Government + Industry Applications",
];

const stackLayers = [
  {
    layer: "Layer 1",
    title: "AI IaaS",
    description: "GPU-powered infrastructure for enterprise-grade GeoAI.",
  },
  {
    layer: "Layer 2",
    title: "AI PaaS",
    description: "Foundation and fine-tuned GeoAI models.",
  },
  {
    layer: "Layer 3",
    title: "AI SaaS",
    description: "Intelligence delivered through applications.",
  },
  {
    layer: "Layer 4",
    title: "EDGE AI",
    description: "Intelligence closer to where data is generated.",
  },
];

export default function Technology() {
  const { ref: techRef, inView: techInView } = useInView<HTMLDivElement>();
  const { ref: approachRef, inView: approachInView } = useInView<HTMLDivElement>();
  const { ref: stackRef, inView: stackInView } = useInView<HTMLDivElement>();

  return (
    <section
      id="technology"
      className="relative w-full bg-transparent text-white"
    >
      <div className="mx-auto max-w-6xl px-5 pb-24 pt-12 sm:px-8 md:px-10 md:pb-32">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-orange-500" />
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-neutral-300">
              Technology
            </p>
          </div>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl leading-[1.1]">
            How HG Works
          </h2>
        </div>

        <div
          ref={techRef}
          className={cn(
            "mt-14 grid grid-cols-1 gap-5 transition-all duration-700 sm:grid-cols-2 lg:grid-cols-4",
            techInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          )}
        >
          {technologyPillars.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-md transition-colors hover:border-orange-400/40"
            >
              <h3 className="text-lg font-semibold tracking-tight text-white">
                {pillar.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-300">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* THE HG APPROACH */}
        <div
          ref={approachRef}
          className={cn(
            "mt-24 transition-all duration-700",
            approachInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          )}
        >
          <div className="max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-emerald-400">
                The HG Approach
              </p>
            </div>

            <h3 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl leading-[1.15]">
              From Earth Data to Earth Intelligence
            </h3>

            <p className="mt-5 text-base leading-relaxed text-neutral-200 sm:text-lg max-w-2xl">
              Our Unified GeoAI Stack combines data infrastructure, foundation
              models, GeoAnalytics, AI compute and edge intelligence to move
              from observation to prediction and decision support.
            </p>
          </div>

          {/* Pipeline */}
          <ol className="mt-10 flex flex-col items-center gap-0">
            {approachPipeline.map((step, i) => (
              <li key={step} className="w-full">
                <div className="mx-auto flex w-full max-w-xl items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-4 text-center text-sm font-medium tracking-tight text-white backdrop-blur-md sm:text-base">
                  {step}
                </div>
                {i < approachPipeline.length - 1 && (
                  <div className="flex justify-center py-2 text-emerald-400" aria-hidden="true">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 5v14M19 12l-7 7-7-7" />
                    </svg>
                  </div>
                )}
              </li>
            ))}
          </ol>
        </div>

        {/* UNIFIED GEOAI STACK */}
        <div
          ref={stackRef}
          className={cn(
            "mt-24 transition-all duration-700",
            stackInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          )}
        >
          <div className="max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-orange-500" />
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-neutral-300">
                Unified GeoAI Stack
              </p>
            </div>

            <h3 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl leading-[1.15]">
              One Stack. Multiple Layers of Earth Intelligence.
            </h3>

            <p className="mt-5 text-base leading-relaxed text-neutral-200 sm:text-lg max-w-2xl">
              The HG Unified GeoAI Stack brings together the infrastructure,
              models and applications required to build scalable Earth
              Intelligence, from core data processing to edge deployment.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {stackLayers.map((layer) => (
              <div
                key={layer.title}
                className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-md transition-colors hover:border-white/30"
              >
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-orange-400">
                  {layer.layer}
                </p>
                <h4 className="mt-3 text-lg font-semibold tracking-tight text-white">
                  {layer.title}
                </h4>
                <p className="mt-3 text-sm leading-relaxed text-neutral-300">
                  {layer.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
