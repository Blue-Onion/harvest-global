"use client";

import Image from "next/image";
import {
  Server,
  Layers,
  Cloud,
  Cpu,
} from "lucide-react";
import { ReactNode } from "react";

interface TechnologyCard {
  number: string;
  title: string;
  description: string;
  theme: "green" | "orange";
  icon: ReactNode;
}

const cards: TechnologyCard[] = [
  {
    number: "01",
    title: "AI IaaS",
    description:
      "GPU-powered infrastructure for enterprise-grade GeoAI. High-performance compute, data infrastructure and ground-segment integration.",
    theme: "green",
    icon: <Server className="h-6 w-6" />,
  },
  {
    number: "02",
    title: "AI PaaS",
    description:
      "Foundation and fine-tuned GeoAI models. GeoFM models and domain-specific AI for agriculture, forestry, hydrology and land-use.",
    theme: "orange",
    icon: <Layers className="h-6 w-6" />,
  },
  {
    number: "03",
    title: "AI SaaS",
    description:
      "Intelligence delivered through applications. GeoAnalytics and decision-support solutions across agriculture, climate resilience and infrastructure.",
    theme: "green",
    icon: <Cloud className="h-6 w-6" />,
  },
  {
    number: "04",
    title: "EDGE AI",
    description:
      "Intelligence closer to where data is generated. On-demand Earth Observation AI at satellites, ground stations and edge nodes.",
    theme: "orange",
    icon: <Cpu className="h-6 w-6" />,
  },
];

function TechCard({
  card,
}: {
  card: TechnologyCard;
}) {
  const isGreen = card.theme === "green";

  return (
    <div
      className="
        group relative flex w-full
        items-start gap-4
        rounded-2xl border border-white/10
        bg-[#0A1612]/80
        px-5 py-5
        backdrop-blur-md
        transition-all duration-300
        hover:-translate-y-1
        hover:border-white/20
        hover:bg-[#0A1612]
        hover:shadow-xl
      "
    >
      {/* Icon */}
      <div
        className={`
          flex h-12 w-12 shrink-0 items-center justify-center
          rounded-xl border
          transition-transform duration-500
          group-hover:scale-110

          ${
            isGreen
              ? "border-emerald-500/20 bg-[#235738]/30 text-emerald-400"
              : "border-orange-500/20 bg-[#E46A2A]/30 text-orange-400"
          }
        `}
      >
        {card.icon}
      </div>

      {/* Content */}
      <div className="min-w-0 flex-1">
        <h3 className="text-lg font-semibold leading-tight tracking-tight text-white">
          {card.title}
        </h3>

        <p className="mt-2 text-sm leading-6 text-gray-400">
          {card.description}
        </p>
      </div>
    </div>
  );
}

export default function UnifiedGeoStack() {
  return (
    <section
      id="unified-geo-stack"
      className="
        relative min-h-screen overflow-hidden
        bg-[url('/images/site-bg/bg3.png')]
        bg-cover bg-center
        py-20
        sm:py-24
        lg:py-28
      "
    >
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-0">

        {/* =========================================
            HEADER
        ========================================= */}

        <div className="header">
          <div className="flex flex-col justify-between gap-10 lg:flex-row">

            {/* Left */}
            <div>
              <h2
                className="
                  w-full m
                  text-4xl font-bold tracking-tight text-white
                  sm:text-5xl
                  md:text-6xl
                  lg:text-7xl
                    uppercase 
                    
                "
              >
                Unified GeoAI Stack
              </h2>

              <p
                className="
                  mt-5 max-w-3xl
                  tracking-widest
                  text-white
                  text-md
                  lg:text-xl
                "
              >
                One Stack. Multiple Layers of Earth Intelligence.
              </p>

              <p
                className="
                  mt-5 max-w-3xl
                  text-sm leading-6 text-white/80
                  md:mt-7 md:text-lg md:leading-7
                "
              >
                The HG Unified GeoAI Stack brings together the infrastructure,
                models and applications required to build scalable Earth
                Intelligence, from core data processing to edge deployment.
              </p>
            </div>

            {/* Right heading */}
            <div className="hidden lg:flex flex-col gap-3">
              <h3
                className="
                  text-lg font-semibold
                  uppercase tracking-widest
                  text-white
                "
              >
                <span className="block">Earth</span>
                <span className="block">Intelligence</span>
                <span className="block">for a more</span>
                <span className="block">resilient</span>
                <span className="block">future</span>
              </h3>
            </div>
          </div>
        </div>


        {/* =====================================================
            MOBILE
            Earth first → 4 cards
            ===================================================== */}

    {/* =====================================================
    MOBILE / TABLET
    Header → Earth → 4 Cards
    ===================================================== */}

<div className="mt-10 flex flex-col lg:hidden">

  {/* Earth */}
  <div className="relative mx-auto flex w-full items-center justify-center py-2">

    {/* Outer orbit */}
    <div
      className="
        absolute aspect-square
        w-[88vw] max-w-[390px]
        rounded-full
        border border-dashed
        border-emerald-400/20
      "
    />

    {/* Inner orbit */}
    <div
      className="
        absolute aspect-square
        w-[78vw] max-w-[350px]
        rounded-full
        border
        border-emerald-400/10
      "
    />

    {/* Earth */}
    <div
      className="
        relative z-10
        aspect-square
        w-[70vw] max-w-[300px]
        overflow-hidden
        rounded-full
        shadow-[0_0_80px_rgba(52,211,153,0.18)]
      "
    >
      <Image
        src="/images/earth.png"
        alt="Earth"
        fill
        priority
        className="object-contain"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 rounded-full bg-black/40" />

      {/* Earth text */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <span
          className="
            max-w-[235px]
            px-5
            text-center
            text-2xl
            font-semibold
            uppercase
            leading-[1.25]
            tracking-wide
            text-white
            drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]
            sm:text-3xl
          "
        >
          A Smarter, Safer, More Resilient Planet
        </span>
      </div>
    </div>
  </div>


  {/* Cards */}
  <div className="mt-6 flex flex-col gap-3">

    {cards.map((card) => {
      const isGreen = card.theme === "green";

      return (
        <div
          key={card.number}
          className="
            group relative
            flex w-full
            items-center
            rounded-2xl
            border border-white/10
            bg-[#0A1612]/85
            px-4 py-4
            backdrop-blur-md
            transition-all duration-300
            hover:border-white/20
            hover:bg-[#0A1612]
          "
        >

          {/* Icon */}
          <div
            className={`
              flex h-12 w-12 shrink-0
              items-center justify-center
              rounded-xl
              border
              transition-transform duration-300
              group-hover:scale-105

              ${
                isGreen
                  ? `
                    border-emerald-500/20
                    bg-[#235738]/30
                    text-emerald-400
                  `
                  : `
                    border-orange-500/20
                    bg-[#E46A2A]/25
                    text-orange-400
                  `
              }
            `}
          >
            {card.icon}
          </div>


          {/* Vertical divider */}
          <div
            className={`
              mx-4 h-12 w-px shrink-0

              ${
                isGreen
                  ? "bg-emerald-400/50"
                  : "bg-orange-400/60"
              }
            `}
          />


          {/* Content */}
          <div className="min-w-0 flex-1">

            <h3
              className="
                text-lg
                font-semibold
                leading-tight
                tracking-tight
                text-white
              "
            >
              {card.title}
            </h3>

            <p
              className="
                mt-1.5
                text-sm
                leading-[1.45]
                text-gray-400
              "
            >
              {card.description}
            </p>

          </div>

        </div>
      );
    })}

  </div>
</div>


        <div
          className="
            relative mx-auto mt-14
            hidden
            lg:grid
            lg:grid-cols-[minmax(300px,1fr)_420px_minmax(300px,1fr)]
            lg:items-center
            lg:gap-6
          "
        >

          {/* Left Cards */}
          <div className="relative z-20 flex flex-col justify-center gap-10">
            {cards.slice(0, 2).map((card) => (
              <TechCard
                key={card.number}
                card={card}
              />
            ))}
          </div>


          {/* Earth & Connections */}
          <div
            className="
              relative z-10
              flex h-[440px]
              items-center justify-center
            "
          >

            {/* Connections */}
            <svg
              className="
                pointer-events-none
                absolute inset-0
                z-0
                h-full w-full
                overflow-visible
              "
              viewBox="0 0 420 440"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 95 C70 95 80 165 125 165"
                stroke="#34D399"
                strokeOpacity="0.5"
                strokeWidth="1"
                strokeDasharray="4 4"
              />

              <path
                d="M0 345 C70 345 80 275 125 275"
                stroke="#FB923C"
                strokeOpacity="0.5"
                strokeWidth="1"
                strokeDasharray="4 4"
              />

              <path
                d="M420 95 C350 95 340 165 295 165"
                stroke="#34D399"
                strokeOpacity="0.5"
                strokeWidth="1"
                strokeDasharray="4 4"
              />

              <path
                d="M420 345 C350 345 340 275 295 275"
                stroke="#FB923C"
                strokeOpacity="0.5"
                strokeWidth="1"
                strokeDasharray="4 4"
              />

              <circle cx="125" cy="165" r="3" fill="#34D399" />
              <circle cx="125" cy="275" r="3" fill="#FB923C" />

              <circle cx="295" cy="165" r="3" fill="#34D399" />
              <circle cx="295" cy="275" r="3" fill="#FB923C" />
            </svg>


            {/* Outer Orbit */}
            <div
              className="
                absolute aspect-square
                w-[390px]
                rounded-full
                border border-dashed
                border-emerald-500/20
              "
            />

            {/* Inner Orbit */}
            <div
              className="
                absolute aspect-square
                w-[350px]
                rounded-full
                border
                border-emerald-500/10
              "
            />

            {/* Earth */}
            <div
              className="
                relative z-10
                w-[430px]
                shrink-0
              "
            >
              <div
                className="
                  relative aspect-square
                  overflow-hidden
                  rounded-full
                  shadow-[0_0_80px_rgba(52,211,153,0.15)]
                "
              >
                <Image
                  src="/images/earth.png"
                  alt="Earth"
                  fill
                  priority
                  className="object-contain"
                />

                <div className="absolute inset-0 z-[1] rounded-full bg-black/40" />

                <div className="absolute inset-0 z-10 flex items-center justify-center">
                  <span
                    className="
                      max-w-xs
                      px-6 pt-10
                      text-center
                      text-4xl font-semibold
                      uppercase
                      text-white
                      drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]
                    "
                  >
                    A Smarter, Safer, More Resilient Planet
                  </span>
                </div>
              </div>
            </div>
          </div>


          {/* Right Cards */}
          <div className="relative z-20 flex flex-col justify-center gap-10">
            {cards.slice(2, 4).map((card) => (
              <TechCard
                key={card.number}
                card={card}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}