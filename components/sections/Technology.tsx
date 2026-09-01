"use client";

import Image from "next/image";
import TopographicBackground from "../ui/Topography";

interface TechnologyCard {
  number: string;
  title: string;
  description: string;
  items: string[];
  theme: "green" | "orange";
  icon: string;
}

const cards: TechnologyCard[] = [
  {
    number: "01",
    title: "Earth Data",
    description:
      "Satellite, weather, ground and geospatial datasets brought together to create a unified foundation for Earth and Weather Intelligence.",
    items: ["Satellite", "Weather", "Ground Data"],
    theme: "green",
    icon: "⌁",
  },
  {
    number: "02",
    title: "Unified GeoAI Stack",
    description:
      "An integrated GeoAI technology stack connecting data, compute, models and intelligence workflows into a unified platform for Earth and Weather Intelligence.",
    items: ["Data", "Compute", "Models"],
    theme: "orange",
    icon: "▤",
  },
  {
    number: "03",
    title: "Foundation Models / AI",
    description:
      "Foundation and fine-tuned GeoAI models designed to understand, analyse and generate intelligence from complex Earth and environmental datasets.",
    items: ["Foundation Models", "AI", "Analytics"],
    theme: "green",
    icon: "☁",
  },
  {
    number: "04",
    title: "Sovereign Private AI Cloud",
    description:
      "Secure and scalable AI infrastructure providing sovereign control over data, compute and models for government and enterprise workloads.",
    items: ["Private Cloud", "Security", "Compute"],
    theme: "green",
    icon: "⚙",
  },
  {
    number: "05",
    title: "Earth Intelligence",
    description:
      "Transforming Earth observations and AI capabilities into actionable intelligence for monitoring, prediction and informed decision-making.",
    items: ["Prediction", "Monitoring", "Decision"],
    theme: "orange",
    icon: "▥",
  },
  {
    number: "06",
    title: "Government + Industry Applications",
    description:
      "Deploying Earth Intelligence into real-world applications across government and industry, enabling faster, smarter and more informed decisions.",
    items: ["Government", "Industry", "Applications"],
    theme: "green",
    icon: "♧",
  },
];

function TechCard({
  card,
  side,
}: {
  card: TechnologyCard;
  side: "left" | "right";
}) {
  const orange = card.theme === "orange";

  return (
    <div
      className={`
        group relative flex h-[145px] items-center gap-4
        rounded-2xl border px-4 py-3
        transition-all duration-500
        hover:-translate-y-1 hover:shadow-lg
        ${
          orange
            ? "border-[#E46A2A]/10 bg-[#FBEDE5]"
            : "border-[#235738]/10 bg-[#E7F1EB]"
        }
      `}
    >
      {/* Icon */}
      <div
        className={`
          flex h-12 w-12 shrink-0 items-center justify-center
          rounded-full text-xl
          ${
            orange
              ? "bg-[#F8C98F] text-[#B94D1F]"
              : "bg-[#BDE6CE] text-[#235738]"
          }
        `}
      >
        {card.icon}
      </div>

      {/* Content */}
      <div className="min-w-0 pr-8">
        <div className="flex items-center gap-2">
          <h3 className="text-base font-bold leading-tight text-[#10251B]">
            {card.title}
          </h3>
        </div>

        <p className="mt-1.5 line-clamp-3 text-[11px] leading-[1.35] text-black/60">
          {card.description}
        </p>
      </div>

      {/* Arrow */}
      <div
        className={`
          absolute right-3 top-1/2 flex h-8 w-8
          -translate-y-1/2 items-center justify-center
          rounded-full bg-white text-sm shadow-sm
          ${orange ? "text-[#B94D1F]" : "text-[#235738]"}
        `}
      >
        →
      </div>

      {/* Connector */}
      <div
        className={`
          absolute top-1/2 hidden h-px w-[65px] lg:block
          ${side === "left" ? "-right-[65px]" : "-left-[65px]"}
          ${orange ? "bg-[#E46A2A]/60" : "bg-[#235738]/50"}
        `}
      />

      {/* Node */}
      <div
        className={`
          absolute top-1/2 hidden h-2.5 w-2.5
          -translate-y-1/2 rounded-full
          border-2 border-white lg:block
          ${side === "left" ? "-right-[70px]" : "-left-[70px]"}
          ${orange ? "bg-[#E46A2A]" : "bg-[#235738]"}
        `}
      />
    </div>
  );
}

export default function Technology() {
  return (
    <section
      id="technology"
      className="

    relative h-screen w-full overflow-hidden

    bg-[url('/images/urban.jpg')]

    bg-cover bg-center bg-no-repeat

  "
    >
      {/* SVG Clip Path */}

      <svg className="absolute h-0 w-0" aria-hidden="true">
        <defs>
          <clipPath id="technologyClip" clipPathUnits="objectBoundingBox">
            <path
              d="

            M 0,0

            L 0.94,0

            C 0.97,0 0.985,0.015 0.99,0.04

            C 0.995,0.065 1,0.08 1,0.11

            L 1,0.84

            C 1,0.87 0.99,0.89 0.975,0.91

            C 0.96,0.93 0.94,0.94 0.93,0.96

            C 0.92,0.98 0.90,1 0.87,1

            L 0.08,1

            C 0.05,1 0.035,0.985 0.025,0.96

            C 0.015,0.94 0.008,0.92 0,0.89

            Z

          "
            />
          </clipPath>
        </defs>
      </svg>

      {/* White Content Layer */}

      <div
        className="

      relative z-10 h-full w-full

      bg-white px-5 py-20 text-black

      sm:px-8 md:px-12 lg:px-16

    "
        style={{
          clipPath: "url(#technologyClip)",
        }}
      >
        {/* Topographic Background */}

        <div className="pointer-events-none absolute inset-0 z-0 opacity-25">
          <TopographicBackground />
        </div>
        <div className="container relative z-10 mx-auto flex h-full flex-col">
          {/* ================= HEADER ================= */}
          <div className="mb-8 flex shrink-0 items-end justify-between">
            <div>
              <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#E46A2A]">
                Our Technology
              </p>

              <h2 className="text-5xl font-semibold tracking-[-0.05em] text-[#10251B] lg:text-6xl">
                Technology
              </h2>

              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-black/60 lg:text-base">
                Our Unified GeoAI Stack combines data infrastructure, foundation
                models, GeoAnalytics, AI compute and edge intelligence to move
                from observation to prediction and decision support.
              </p>
            </div>

            <div className="hidden border-l border-[#235738]/30 pl-6 lg:block">
              <p className="text-xs font-medium uppercase leading-[1.6] tracking-[0.2em] text-[#235738]/70">
                From
                <br />
                Observation
                <br />
                To Impact
              </p>

              <div className="mt-2 h-0.5 w-8 bg-[#E46A2A]" />
            </div>
          </div>

          {/* ================= MAIN TECHNOLOGY MAP ================= */}
          <div
            className="
            relative flex min-h-0 flex-1
            items-center
            lg:grid lg:grid-cols-[1fr_420px_1fr]
            lg:gap-0
          "
          >
            {/* LEFT */}
            <div className="relative z-20 flex flex-col gap-4">
              {cards.slice(0, 3).map((card) => (
                <TechCard key={card.number} card={card} side="left" />
              ))}
            </div>

            {/* ================= EARTH ================= */}
            <div className="relative flex h-full items-center justify-center">
              {/* Outer orbit */}
              <div
                className="
                absolute aspect-square
                w-[400px] rounded-full
                border border-dashed
                border-[#235738]/30
              "
              />

              {/* Inner orbit */}
              <div
                className="
                absolute aspect-square
                w-[365px] rounded-full
                border border-[#235738]/10
              "
              />

              {/* BIG EARTH */}
              <div className="relative z-10 w-[350px] shrink-0">
                <div className="relative aspect-square overflow-hidden rounded-full">
                  <Image
                    src="/images/earth.png"
                    alt="Earth"
                    fill
                    priority
                    className="object-contain"
                  />

                  {/* subtle green tint */}
                  <div className="pointer-events-none absolute inset-0 rounded-full bg-[#235738]/5 mix-blend-multiply" />
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="relative z-20 flex flex-col gap-4">
              {cards.slice(3, 6).map((card) => (
                <TechCard key={card.number} card={card} side="right" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
