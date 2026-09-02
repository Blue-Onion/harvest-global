"use client";

import React from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

import Reveal from "@/components/ui/reveal/Reveal";
import TopographicBackground from "../ui/Topography";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const challenges = [
  {
    title: "Fragmented Earth Data",
    description:
      "Satellite, weather, ground and geospatial datasets remain disconnected.",
    tag: "DATA",
    image: "/images/challenges/01.jpg",
  },
  {
    title: "Limited Predictive Intelligence",
    description:
      "Observation often stops at monitoring, leaving critical decisions reactive.",
    tag: "INTELLIGENCE",
    image: "/images/challenges/02.jpg",
  },
  {
    title: "Infrastructure Constraints",
    description:
      "Conventional cloud environments can create challenges around scale, latency, security and data governance.",
    tag: "INFRASTRUCTURE",
    image: "/images/challenges/03.jpg",
  },
  {
    title: "Data & Technology Sovereignty",
    description:
      "Critical Earth intelligence requires greater control over data, compute and AI capabilities.",
    tag: "SOVEREIGNTY",
    image: "/images/challenges/04.jpg",
  },
];

const Challenge = () => {
  const autoplay = React.useRef(
    Autoplay({
      delay: 3500,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    }),
  );

  return (
    <section
      id="challenge"
      className="
        relative h-screen w-full overflow-hidden

        px-5 py-26 
        text-white
        md:px-8
      "
    >
      {/* Background image */}
      <div
        className="
          pointer-events-none absolute inset-0
          bg-[url('/images/site-bg/bg6.png')]
          bg-cover bg-center

        "
      />

      {/* Topographic background */}

      <div className="relative z-10 mx-auto container">
        <Reveal variant="group" duration={1}>
          {/* Header */}
          <div className="flex flex-col justify-between gap-10 lg:flex-row">
            <div className="max-w-4xl">
              {/* Eyebrow */}

              <h2
                className="
                  text-4xl font-bold tracking-tight
                  text-[#E7F1EB]
                  md:text-6xl
                  lg:text-7xl
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
                <span
                  className="
                    font-mono text-[10px]
                    uppercase tracking-[0.25em]
                    text-[#E46A2A]
                  "
                >
                  Earth Intelligence
                </span>

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
                  <span className="block text-[#E46A2A]">Across Sectors</span>
                </div>
              </div>
            </div>
          </div>

          {/* Carousel */}
          <div className="relative mt-12">
            {/* Challenge Cards */}
            <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {challenges.map((challenge) => (
                <article
                  key={challenge.title}
                  className="
        group relative
        flex h-[430px]
        flex-col
        overflow-hidden
        rounded-md
        border border-[#E7F1EB]/10
        bg-[#123C2B]/80
        backdrop-blur-sm
        transition-all duration-500
        hover:-translate-y-1
        hover:border-[#E46A2A]/50
      "
                >
                  {/* Image */}
                  <div className="relative h-[190px] shrink-0 overflow-hidden">
                    <Image
                      src={challenge.image}
                      alt={challenge.title}
                      fill
                      className="
            object-cover
            grayscale
            opacity-70
            transition-all duration-700
            group-hover:scale-105
            group-hover:grayscale-0
            group-hover:opacity-90
          "
                    />

                    {/* Image overlay */}
                    <div
                      className="
            absolute inset-0
            bg-gradient-to-t
            from-[#123C2B]
            via-[#123C2B]/20
            to-transparent
          "
                    />

                    {/* Tag */}
                    <div className="absolute left-5 top-5">
                      <span
                        className="
              rounded-full
              border border-white/15
              bg-[#123C2B]/60
              px-3 py-1
              font-mono text-[9px]
              uppercase
              tracking-[0.2em]
              text-[#E7F1EB]/80
              backdrop-blur-md
            "
                      >
                        {challenge.tag}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-6">
                    {/* Accent */}
                    <span
                      className="
            mb-5
            h-[2px] w-8
            bg-[#E46A2A]
            transition-all duration-500
            group-hover:w-14
          "
                    />

                    <h3
                      className="
            text-xl font-semibold
            leading-tight
            tracking-tight
            text-[#E7F1EB]
            md:text-2xl
          "
                    >
                      {challenge.title}
                    </h3>

                    <p
                      className="
            mt-4
            text-sm leading-relaxed
            text-[#E7F1EB]/60
          "
                    >
                      {challenge.description}
                    </p>

             
                  </div>

                  {/* Bottom hover line */}
                  <div
                    className="
          absolute bottom-0 left-0
          h-[2px] w-0
          bg-[#E46A2A]
          transition-all duration-500
          group-hover:w-full
        "
                  />
                </article>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Challenge;
