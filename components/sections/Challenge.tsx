"use client";

import { useInView } from "@/lib/useInView";
import { cn } from "@/lib/utils";

const challengeCards = [
  {
    title: "Fragmented Earth Data",
    description:
      "Satellite, weather, ground and geospatial datasets remain disconnected.",
  },
  {
    title: "Limited Predictive Intelligence",
    description:
      "Observation often stops at monitoring, leaving critical decisions reactive.",
  },
  {
    title: "Infrastructure Constraints",
    description:
      "Conventional cloud environments can create challenges around scale, latency, security and data governance.",
  },
  {
    title: "Data & Technology Sovereignty",
    description:
      "Critical Earth intelligence requires greater control over data, compute and AI capabilities.",
  },
];

export default function Challenge() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section
      id="challenge"
      className="relative w-full bg-transparent text-white"
    >
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 md:px-10 md:py-32">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-emerald-400">
              The Challenge
            </p>
          </div>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl leading-[1.1]">
            Data is abundant.
            <br className="hidden sm:inline" />
            Intelligence is not.
          </h2>

          <div className="mt-6 space-y-4 text-base leading-relaxed text-neutral-200 sm:text-lg max-w-2xl">
            <p>
              Every day, satellites, sensors, weather systems and ground
              networks generate enormous volumes of Earth data. Yet much of this
              data remains fragmented, difficult to process and disconnected
              from real-world decision-making.
            </p>
            <p>
              We need the ability to observe, understand, predict and act,
              securely and at scale.
            </p>
          </div>
        </div>

        <div
          ref={ref}
          className={cn(
            "mt-14 grid grid-cols-1 gap-5 transition-all duration-700 sm:grid-cols-2 lg:grid-cols-4",
            inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          )}
        >
          {challengeCards.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-md transition-colors hover:border-white/30"
            >
              <h3 className="text-lg font-semibold tracking-tight text-white">
                {card.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-300">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
