"use client";

import Image from "next/image";
import {
  Server,
  Layers,
  Cloud,
  Cpu,
  ArrowRight,
  Leaf,
  ShieldCheck,
  TrendingUp,
  Globe2,
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
  side,
}: {
  card: TechnologyCard;
  side: "left" | "right";
}) {
  const isGreen = card.theme === "green";

  return (
    <div
      className={`
        group relative flex min-h-[140px] w-full cursor-pointer
        items-start gap-4 rounded-2xl border border-white/10
        bg-[#0A1612]/80 px-5 py-5 backdrop-blur-md
        transition-all duration-300
        hover:-translate-y-1 hover:border-white/20 hover:bg-[#0A1612] hover:shadow-xl
      `}
    >
      {/* Icon */}
      <div
        className={`
          flex h-14 w-14 shrink-0 items-center justify-center
          rounded-xl border transition-transform duration-500
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
      <div className="min-w-0 flex-1 pr-6">
        <h3 className="text-lg font-semibold leading-tight tracking-tight text-white">
          {card.title}
        </h3>
        <p className="mt-2 text-sm leading-[1.6] text-gray-400">
          {card.description}
        </p>
      </div>

      {/* Arrow */}
    </div>
  );
}

export default function UnifiedGeoStack() {
  return (
    <section
      id="unified-geo-stack"
      className="relative min-h-screen overflow-hidden bg-[url('/images/site-bg/bg3.png')] bg-cover bg-center py-28"
    >
      <div className="">
        <div className="container relative z-10 mx-auto">
          {/* =========================================
              HEADER
          ========================================= */}

          <div className="header">
            <div className="flex flex-col justify-between gap-10 lg:flex-row">
              {/* Left */}
              <div>
                <h2 className="w-full max-w-2xl text-4xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl">
                  Unified GeoAI Stack
                </h2>
                <p className="mt-7 max-w-3xl text-base leading-7 text-white md:text-lg">
                  One Stack. Multiple Layers of Earth Intelligence.
                </p>
                <p className="mt-7 max-w-3xl text-base leading-7 text-white md:text-lg">
                  The HG Unified GeoAI Stack brings together the infrastructure, models and applications required to build scalable Earth Intelligence, from core data processing to edge deployment.

                </p>
              </div>

              <div className=" hidden lg:flex flex-col gap-3">
                <h3 className="text-lg font-semibold uppercase tracking-widest text-white">
                  <span className="block">Earth</span>
                  <span className="block">Intelligence</span>
                  <span className="block">for a more </span>
                  <span className="block">resilient</span>
                  <span className="block">future</span>
                </h3>
              </div>
            </div>
          </div>
          <div
            className="
            mt-14
              relative mx-auto
              flex flex-col gap-12
              lg:grid
              lg:grid-cols-[minmax(300px,1fr)_420px_minmax(300px,1fr)]
              lg:items-center lg:gap-6
            "
          >
            {/* Left Cards */}
            <div className="relative z-20 flex flex-col justify-center gap-10">
              {cards.slice(0, 2).map((card) => (
                <TechCard key={card.number} card={card} side="left" />
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
              <svg
                className="
                  pointer-events-none
                  absolute inset-0
                  z-0 hidden h-full w-full
                  overflow-visible lg:block
                "
                viewBox="0 0 420 440"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Left upper connector */}
                <path
                  d="M0 95 C70 95 80 165 125 165"
                  stroke="#34D399"
                  strokeOpacity="0.5"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                />

                {/* Left lower connector */}
                <path
                  d="M0 345 C70 345 80 275 125 275"
                  stroke="#FB923C"
                  strokeOpacity="0.5"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                />

                {/* Right upper connector */}
                <path
                  d="M420 95 C350 95 340 165 295 165"
                  stroke="#34D399"
                  strokeOpacity="0.5"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                />

                {/* Right lower connector */}
                <path
                  d="M420 345 C350 345 340 275 295 275"
                  stroke="#FB923C"
                  strokeOpacity="0.5"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                />

                {/* Left nodes */}
                <circle cx="125" cy="165" r="3" fill="#34D399" />
                <circle cx="125" cy="275" r="3" fill="#FB923C" />

                {/* Right nodes */}
                <circle cx="295" cy="165" r="3" fill="#34D399" />
                <circle cx="295" cy="275" r="3" fill="#FB923C" />
              </svg>

              {/* OUTER ORBIT */}
              <div
                className="
                  absolute
                  aspect-square
                  w-[390px]
                  rounded-full
                  border
                  border-dashed
                  border-emerald-500/20
                "
              />

              {/* INNER ORBIT */}
              <div
                className="
                  absolute
                  aspect-square
                  w-[350px]
                  rounded-full
                  border
                  border-emerald-500/10
                "
              />

              {/* EARTH IMAGE */}
              <div
                className="
                  relative z-10
                  w-[310px]
                  shrink-0
                  lg:w-[430px]
                "
              >
                <div className="relative aspect-square overflow-hidden rounded-full shadow-[0_0_80px_rgba(52,211,153,0.15)]">
                  <Image
                    src="/images/earth.png" // Ensure this matches your public folder path
                    alt="Earth"
                    fill
                    priority
                    className="object-contain"
                  />
                  <div
                    className="
                      pointer-events-none
                      absolute inset-0
                      rounded-full
                      bg-emerald-900/10
                      mix-blend-multiply
                    "
                  />
                </div>
              </div>
            </div>

            {/* Right Cards */}
            <div className="relative z-20 flex flex-col justify-center gap-10">
              {cards.slice(2, 4).map((card) => (
                <TechCard key={card.number} card={card} side="right" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
