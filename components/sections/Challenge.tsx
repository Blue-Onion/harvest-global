"use client";

import React from "react";
import Reveal from "@/components/ui/reveal/Reveal";
import { images } from "@/data/images";

const challenges = [
  {
    number: "01",
    title: "Fragmented Earth Data",
    description:
      "Satellite, weather, ground and geospatial datasets remain disconnected.",
    image: images.earthObservation.src,
    fallback: images.earthObservation.fallback,
  },
  {
    number: "02",
    title: "Limited Predictive Intelligence",
    description:
      "Observation often stops at monitoring, leaving critical decisions reactive.",
    image: images.artificialIntelligence.src,
    fallback: images.artificialIntelligence.fallback,
  },
  {
    number: "03",
    title: "Infrastructure Constraints",
    description:
      "Conventional cloud environments can create challenges around scale, latency, security and data governance.",
    image: images.technology.src,
    fallback: images.technology.fallback,
  },
  {
    number: "04",
    title: "Data & Technology Sovereignty",
    description:
      "Critical Earth intelligence requires greater control over data, compute and AI capabilities.",
    image: images.satellite.src,
    fallback: images.satellite.fallback,
  },
];

const Challenge = () => {
  return (
    <section
      id="challenge"
      className="bg-[#F7FAF8] px-6 py-24 md:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <Reveal>
          <div className="mb-16 max-w-4xl">
  

            <h2 className="text-4xl font-semibold tracking-tight text-[#123C2B] md:text-6xl">
              The Challenge
            </h2>

            <div className="mt-6 max-w-3xl space-y-4">
              <p className="text-lg leading-relaxed text-[#60766E]">
                Every day, satellites, sensors, weather systems and ground
                networks generate enormous volumes of Earth data.
              </p>

              <p className="text-lg leading-relaxed text-[#60766E]">
                Yet much of this data remains fragmented, difficult to process
                and disconnected from real-world decision-making.
              </p>

              <p className="text-lg font-medium leading-relaxed text-[#123C2B]">
                We need the ability to observe, understand, predict and act,
                securely and at scale.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Cards */}
        <div className="grid gap-5 md:grid-cols-2">
          {challenges.map((challenge, index) => (
            <Reveal key={challenge.number} delay={index * 0.08}>
              <article className="group overflow-hidden rounded-3xl border border-[#D5E3DC] bg-[#E7F1EB]">
                {/* Image */}
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img
                    src={challenge.image}
                    alt={challenge.title}
                    onError={(e) => {
                      e.currentTarget.src = challenge.fallback;
                    }}
                    className="h-full w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-[#123C2B]/10" />

                  {/* Number */}
                  <div className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-[#123C2B] text-sm font-medium text-[#F7FAF8]">
                    {challenge.number}
                  </div>
                </div>

                {/* Content */}
                <div className="p-7 md:p-8">
                  <h3 className="text-2xl font-semibold tracking-tight text-[#123C2B]">
                    {challenge.title}
                  </h3>

                  <p className="mt-4 max-w-xl text-base leading-relaxed text-[#60766E]">
                    {challenge.description}
                  </p>

                  {/* Bottom accent */}
                  <div className="mt-8 flex items-center gap-3">
                    <span className="h-px w-10 bg-[#2E7657]" />
                    <span className="text-xs font-medium uppercase tracking-[0.16em] text-[#2E7657]">
                      Earth Intelligence
                    </span>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Challenge;