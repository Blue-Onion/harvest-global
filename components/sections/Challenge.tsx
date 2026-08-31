"use client";

import React from "react";
import Reveal from "@/components/ui/reveal/Reveal";
import TopographicBackground from "../ui/Topography";

const challenges = [
  {
    number: "01",
    title: "Fragmented Earth Data",
    description:
      "Satellite, weather, ground and geospatial datasets remain disconnected.",
  },
  {
    number: "02",
    title: "Limited Predictive Intelligence",
    description:
      "Observation often stops at monitoring, leaving critical decisions reactive.",
  },
  {
    number: "03",
    title: "Infrastructure Constraints",
    description:
      "Conventional cloud environments can create challenges around scale, latency, security and data governance.",
  },
  {
    number: "04",
    title: "Data & Technology Sovereignty",
    description:
      "Critical Earth intelligence requires greater control over data, compute and AI capabilities.",
  },
];

const Challenge = () => {
  return (
    <section
      id="challenge"
      className="relative overflow-hidden bg-[#FBEBDF] px-6 py-24 text-black md:px-10 lg:px-16"
    >

      <div className="pointer-events-none absolute inset-0 z-0">
        <TopographicBackground />
      </div>

      <div className="relative z-10 mx-auto container">
        <Reveal variant="group" duration={1}>
          <div className="rounded-md   ">
            <div className="">
              <h2
                data-reveal="heading"
                className="text-3xl font-semibold tracking-tight md:text-5xl"
              >
                THE CHALLENGE
              </h2>

              <div className="mt-6 max-w-4xl space-y-4">
                <p
                  data-reveal="text"
                  className="text-base leading-relaxed md:text-lg"
                >
                  Every day, satellites, sensors, weather systems and ground
                  networks generate enormous volumes of Earth data. Yet much
                  of this data remains fragmented, difficult to process and
                  disconnected from real-world decision-making.
                </p>

                <p
                  data-reveal="text"
                  className="text-base font-medium leading-relaxed md:text-lg"
                >
                  We need the ability to observe, understand, predict and act,
                  securely and at scale.
                </p>
              </div>
            </div>

            <div className="mt-10 grid gap-px overflow-hidden rounded-md border border-black/10 bg-black/10 md:grid-cols-2">
              {challenges.map((challenge) => (
                <div
                  key={challenge.number}
                  className="bg-white p-6 md:p-8"
                >
                  <span className="font-mono text-[10px] tracking-[0.2em] text-[#E46A2A]">
                    {challenge.number}
                  </span>

                  <h3 className="mt-5 text-lg font-semibold tracking-tight md:text-xl">
                    {challenge.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-black/85 md:text-base">
                    {challenge.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Challenge;