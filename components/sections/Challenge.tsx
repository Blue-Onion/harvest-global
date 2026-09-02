"use client";

import React from "react";
import {
  Layers3,
  BrainCircuit,
  Server,
  ShieldCheck,
} from "lucide-react";

import Reveal from "@/components/ui/reveal/Reveal";

const challenges = [
  {
    title: "Fragmented Earth Data",
    icon: Layers3,
    desc: "Satellite, weather, ground and geospatial datasets remain disconnected.",
  },
  {
    title: "Limited Predictive Intelligence",
    icon: BrainCircuit,
    desc: "Observation often stops at monitoring, leaving critical decisions reactive.",
  },
  {
    title: "Infrastructure Constraints",
    icon: Server,
    desc: " Conventional cloud environments can create challenges around scale, latency, security and data governance.",
  },
  {
    title: "Data & Technology Sovereignty",
    icon: ShieldCheck,
    desc: " Critical Earth intelligence requires greater control over data, compute and AI capabilities",
  },
];

const Challenge = () => {
  return (
    <section
      id="challenge"
      className="
        relative min-h-screen w-full overflow-hidden
        px-5 py-24 text-white
        md:px-8 md:py-28
      "
    >
      {/* Background */}
      <div
        className="
          pointer-events-none absolute inset-0
          bg-[url('/images/site-bg/bg6.png')]
          bg-cover bg-center
        "
      />

      {/* Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[#031812]/40" />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <Reveal variant="group" duration={1}>

          {/* Header */}
          <div className="mb-14 flex flex-col justify-between gap-10 lg:flex-row">
            <div className="max-w-4xl">
              <h2
                className="
                  text-4xl font-bold tracking-tight
                  text-[#E7F1EB]
                  md:text-6xl lg:text-7xl
                "
              >
                Challenges
              </h2>

              <p
                className="
                  mt-6 max-w-3xl
                  text-base leading-7
                  text-[#E7F1EB]/70
                  md:text-lg
                "
              >
                Every day, satellites, sensors, weather systems and ground
                networks generate enormous volumes of Earth data. Yet much of
                this data remains fragmented, difficult to process and
                disconnected from real-world decision-making.
              </p>
            </div>

            {/* Right heading */}
            <div className="hidden lg:block">
              <div className="border-r border-[#2E7657]/60 pr-6 text-right">
                <div
                  className="
                    mt-4 text-lg font-semibold
                    uppercase leading-tight
                    tracking-[0.15em]
                    text-[#E7F1EB]
                  "
                >
                  <span className="block">Real Insights</span>
                  <span className="block">Real Impact</span>
                  <span className="block text-[#E46A2A]">
                    Across Sectors
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Compact Challenges */}
          <div
            className="
              relative mx-auto max-w-4xl
              overflow-hidden
              rounded-md
              border border-[#E7F1EB]/15
              bg-linear-to-b from-[#08291E]/50 to-[#08291E]/70
              backdrop-blur-sm
            "
          >
            {/* Connector */}
            <div
              className="
                absolute left-[52px] top-8 bottom-8
                hidden w-px
                bg-gradient-to-b
                from-transparent
                via-[#8BEA55]/40
                to-transparent
                md:block
              "
            />

            {challenges.map((challenge) => {
              const Icon = challenge.icon;

              return (
                <article
                  key={challenge.title}
                  className="
                    group relative
                    flex h-[92px]
                    items-center
                    border-b border-[#E7F1EB]/10
                    px-5
                    transition-colors duration-300
                    last:border-b-0
                    hover:bg-[#123C2B]/40
                    md:h-[100px]
                    md:px-6
                  "
                >
                  {/* Icon */}
                  <div
                    className="
                      relative z-10
                      flex h-12 w-12 shrink-0
                      items-center justify-center
                      rounded-full
                      border border-[#8BEA55]/40
                      bg-[#08291E]
                      transition-all duration-300
                      group-hover:border-[#8BEA55]
                      group-hover:shadow-[0_0_24px_rgba(139,234,85,0.15)]
                    "
                  >
                    <Icon
                      strokeWidth={1.5}
                      className="
                        h-5 w-5
                        text-[#8BEA55]
                        transition-transform duration-300
                        group-hover:scale-110
                      "
                    />
                  </div>

                  {/* Connector dot */}
                  <div
                    className="
                      absolute left-[48px]
                      hidden h-2 w-2
                      rounded-full
                      bg-[#8BEA55]
                      shadow-[0_0_12px_rgba(139,234,85,0.7)]
                      md:block
                    "
                  />

                  {/* Title */}
                  <div className="flex flex-col  gap-6 ml-5">
                  <h3
                    className="

 font-bold
                      tracking-tight
                      text-[#E7F1EB]
                      text-2xl
                      transition-colors duration-300
                      group-hover:text-white
               
                    "
                  >
                    {challenge.title}
                  </h3>

                 <p className="font-light ">
                  {challenge.desc}
                 </p>
                 </div>
                  <div
                    className="
                      absolute bottom-0 left-0
                      h-px w-0
                      bg-[#8BEA55]
                      transition-all duration-500
                      group-hover:w-full
                    "
                  />
                </article>
              );
            })}
          </div>

        </Reveal>
      </div>
    </section>
  );
};

export default Challenge;