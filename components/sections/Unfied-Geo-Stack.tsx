"use client";

import Image from "next/image";

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
    title: "AI IaaS",
    description:
      "GPU-powered infrastructure for enterprise-grade GeoAI. High-performance compute, data infrastructure and ground-segment integration designed for large-scale Earth Observation workloads.",
    items: ["GPU Infrastructure", "Data Infrastructure", "Ground Segment"],
    theme: "green",
    icon: "⌁",
  },
  {
    number: "02",
    title: "AI PaaS",
    description:
      "Foundation and fine-tuned GeoAI models. GeoFM models and domain-specific AI for agriculture, forestry, hydrology, land-use and land-cover mapping, change detection and other Earth applications.",
    items: ["GeoFM Models", "Domain AI", "Earth Applications"],
    theme: "orange",
    icon: "▤",
  },
  {
    number: "03",
    title: "AI SaaS",
    description:
      "Intelligence delivered through applications. GeoAnalytics and decision-support solutions across agriculture, crop insurance, climate resilience, water security and infrastructure.",
    items: ["GeoAnalytics", "Decision Support", "Industry Solutions"],
    theme: "green",
    icon: "☁",
  },
  {
    number: "04",
    title: "EDGE AI",
    description:
      "Intelligence closer to where data is generated. On-demand Earth Observation AI at satellites, ground stations and edge nodes, reducing dependence on cloud latency.",
    items: ["Satellites", "Ground Stations", "Edge Nodes"],
    theme: "orange",
    icon: "⚙",
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
        group relative flex min-h-[150px] w-full
        items-center gap-4 rounded-2xl border
        px-5 py-4
        transition-all duration-500
        hover:-translate-y-1 hover:shadow-xl
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
          transition-transform duration-500
          group-hover:scale-110
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
      <div className="min-w-0 flex-1 pr-8">
        <h3 className="text-lg font-bold leading-tight tracking-tight text-[#10251B]">
          {card.title}
        </h3>

        <p className="mt-2 text-xs leading-[1.45] text-black/60">
          {card.description}
        </p>
      </div>

      {/* Arrow */}
      <div
        className={`
          absolute right-4 top-1/2
          flex h-8 w-8 -translate-y-1/2
          items-center justify-center
          rounded-full bg-white
          text-sm shadow-sm
          transition-transform duration-500
          group-hover:translate-x-1
          ${orange ? "text-[#B94D1F]" : "text-[#235738]"}
        `}
      >
        →
      </div>

      {/* ======================================
          CONNECTOR TO EARTH
      ====================================== */}

      <div
        className={`
          pointer-events-none absolute top-1/2
          hidden h-px lg:block
          ${side === "left" ? "-right-[80px] w-[80px]" : "-left-[80px] w-[80px]"}
          ${orange ? "bg-[#E46A2A]/50" : "bg-[#235738]/40"}
        `}
      />

      {/* Connector node */}
      <div
        className={`
          pointer-events-none absolute top-1/2
          hidden h-2.5 w-2.5
          -translate-y-1/2 rounded-full
          border-2 border-white lg:block
          ${side === "left" ? "-right-[84px]" : "-left-[84px]"}
          ${orange ? "bg-[#E46A2A]" : "bg-[#235738]"}
        `}
      />
    </div>
  );
}

export default function UnifiedGeoStack() {
  return (
    <section
      id="unified-geo-stack"
      className="
        relative min-h-screen w-full overflow-hidden
        bg-[url('/images/site-bg/bg1.png')]
        bg-cover bg-center bg-no-repeat
      "
    >
      <div className="px-5 py-20 sm:px-8 md:px-12 lg:px-16 lg:py-24">
        <div className="container relative z-10 mx-auto">
          {/* =========================================
              HEADER
          ========================================= */}

          <div className="mb-12 max-w-4xl">
            <h2
              className="
                text-5xl font-semibold
                tracking-[-0.05em]
                text-[#10251B]
                lg:text-6xl
              "
            >
              Unified GeoAI Stack
            </h2>

            <h4
              className="
                mt-4 text-lg font-semibold
                tracking-[-0.03em]
                text-[#10251B]
                lg:text-xl
              "
            >
              One Stack. Multiple Layers of Earth Intelligence.
            </h4>

            <p
              className="
                mt-4 max-w-3xl
                text-sm leading-relaxed
                text-black/60
                lg:text-base
              "
            >
              The HG Unified GeoAI Stack brings together the infrastructure,
              models and applications required to build scalable Earth
              Intelligence, from core data processing to edge deployment.
            </p>
          </div>

          {/* =========================================
              TECHNOLOGY MAP
          ========================================= */}

          <div
            className="
              relative mx-auto
              lg:grid
              lg:grid-cols-[minmax(280px,1fr)_420px_minmax(280px,1fr)]
              lg:items-center
            "
          >
            {/* =====================================
                LEFT CARDS
            ===================================== */}

            <div className="relative z-20 flex flex-col gap-6">
              {cards.slice(0, 2).map((card) => (
                <TechCard
                  key={card.number}
                  card={card}
                  side="left"
                />
              ))}
            </div>

            {/* =====================================
                EARTH CENTER
            ===================================== */}

            <div
              className="
                relative z-10
                flex h-[440px]
                items-center justify-center
              "
            >
              {/* ---------------------------------
                  CONNECTOR SVG
              ---------------------------------- */}

              <svg
                className="
                  pointer-events-none
                  absolute inset-0
                  z-0 h-full w-full
                  overflow-visible
                "
                viewBox="0 0 420 440"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Left upper connector */}
                <path
                  d="M0 95 C70 95 80 165 125 165"
                  stroke="#235738"
                  strokeOpacity="0.35"
                  strokeWidth="1"
                />

                {/* Left lower connector */}
                <path
                  d="M0 345 C70 345 80 275 125 275"
                  stroke="#E46A2A"
                  strokeOpacity="0.45"
                  strokeWidth="1"
                />

                {/* Right upper connector */}
                <path
                  d="M420 95 C350 95 340 165 295 165"
                  stroke="#235738"
                  strokeOpacity="0.35"
                  strokeWidth="1"
                />

                {/* Right lower connector */}
                <path
                  d="M420 345 C350 345 340 275 295 275"
                  stroke="#E46A2A"
                  strokeOpacity="0.45"
                  strokeWidth="1"
                />

                {/* Left nodes */}
                <circle
                  cx="125"
                  cy="165"
                  r="3"
                  fill="#235738"
                />

                <circle
                  cx="125"
                  cy="275"
                  r="3"
                  fill="#E46A2A"
                />

                {/* Right nodes */}
                <circle
                  cx="295"
                  cy="165"
                  r="3"
                  fill="#235738"
                />

                <circle
                  cx="295"
                  cy="275"
                  r="3"
                  fill="#E46A2A"
                />
              </svg>

              {/* ---------------------------------
                  OUTER ORBIT
              ---------------------------------- */}

              <div
                className="
                  absolute
                  aspect-square
                  w-[390px]
                  rounded-full
                  border
                  border-dashed
                  border-[#235738]/25
                "
              />

              {/* ---------------------------------
                  INNER ORBIT
              ---------------------------------- */}

              <div
                className="
                  absolute
                  aspect-square
                  w-[350px]
                  rounded-full
                  border
                  border-[#235738]/10
                "
              />

              {/* ---------------------------------
                  EARTH
              ---------------------------------- */}

              <div
                className="
                  relative z-10
                  w-[310px]
                  shrink-0
                  lg:w-[330px]
                "
              >
                <div className="relative aspect-square overflow-hidden rounded-full">
                  <Image
                    src="/images/earth.png"
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
                      bg-[#235738]/5
                      mix-blend-multiply
                    "
                  />
                </div>
              </div>
            </div>

            {/* =====================================
                RIGHT CARDS
            ===================================== */}

            <div className="relative z-20 flex flex-col gap-6">
              {cards.slice(2, 4).map((card) => (
                <TechCard
                  key={card.number}
                  card={card}
                  side="right"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}