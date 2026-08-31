"use client";

import React from "react";
import { cn } from "@/lib/utils";
import TopographicBackground from "../ui/Topography";

type TechCard = {
  number: string;
  title: string;
  description: string;
  items: string[];
  accent: "neutral" | "orange" | "emerald";
  visual: "image" | "grid" | "none";
  image?: string;
  coords?: string;
};

const cards: TechCard[] = [
  {
    number: "01",
    title: "Earth Data",
    description:
      "Satellite, weather, ground and geospatial datasets brought together to create a unified foundation for Earth and Weather Intelligence.",
    items: ["Earth Observation", "Weather Data", "Ground & Geospatial Data"],
    accent: "neutral",
    visual: "grid",
    coords: "EARTH-DATA // INPUT",
  },
  {
    number: "02",
    title: "Unified GeoAI Stack",
    description:
      "An integrated GeoAI technology stack connecting data, compute, models and intelligence workflows into a unified platform for Earth and Weather Intelligence.",
    items: ["Data Integration", "GeoAI Infrastructure", "AI Workflows"],
    accent: "emerald",
    visual: "grid",
    coords: "GEOAI-STACK // UNIFIED",
  },
  {
    number: "03",
    title: "Foundation Models / AI",
    description:
      "Foundation and fine-tuned GeoAI models designed to understand, analyse and generate intelligence from complex Earth and environmental datasets.",
    items: ["GeoFM", "Foundation Models", "Domain AI"],
    accent: "orange",
    visual: "grid",
    coords: "FOUNDATION-AI // GEOFM",
  },
  {
    number: "04",
    title: "Sovereign Private AI Cloud",
    description:
      "Secure and scalable AI infrastructure providing sovereign control over data, compute and models for government and enterprise workloads.",
    items: ["Private AI Cloud", "GPU Compute", "Data Sovereignty"],
    accent: "emerald",
    visual: "image",
    image: "/images/aboutbg.png",
    coords: "PRIVATE-AI-CLOUD // SOVEREIGN",
  },
  {
    number: "05",
    title: "Earth Intelligence",
    description:
      "Transforming Earth observations and AI capabilities into actionable intelligence for monitoring, prediction and informed decision-making.",
    items: ["Prediction", "Monitoring", "Decision Intelligence"],
    accent: "orange",
    visual: "image",
    image: "/images/urban.jpg",
    coords: "EARTH-INTELLIGENCE // INSIGHT",
  },
  {
    number: "06",
    title: "Government + Industry Applications",
    description:
      "Deploying Earth Intelligence into real-world applications across government and industry, enabling faster, smarter and more informed decisions.",
    items: ["Government", "Enterprise", "Critical Infrastructure"],
    accent: "emerald",
    visual: "grid",
    coords: "APPLICATIONS // GOVERNMENT-INDUSTRY",
  },
];
const technology = {
  eyebrow: "TECHNOLOGY",
  title: ["From Earth Data to", "Earth Intelligence"],
  description:
    "Our Unified GeoAI Stack combines data infrastructure, foundation models, GeoAnalytics, AI compute and edge intelligence to move from observation to prediction and decision support.",
  stackIntro: {
    eyebrow: "UNIFIED GEOAI STACK",
    title: "One Stack. Multiple Layers of Earth Intelligence.",
    description:
      "The HG Unified GeoAI Stack brings together the infrastructure, models and applications required to build scalable Earth Intelligence, from core data processing to edge deployment.",
  },
};

function TechFlowNode({ card, index }: { card: TechCard; index: number }) {
  return (
    <div className="group relative flex min-w-0 flex-col">
      {/* Node */}
      <div
        className={cn(
          "relative flex h-[250px] flex-col",
          "rounded-md border border-[#E46A2A]/20",
          "bg-[#FBEDE5]",
          "p-6",
          "transition-all duration-300",
          "hover:-translate-y-1",
          "hover:border-[#E46A2A]/50",
        )}
      >
        {/* Title */}
        <h3 className="mt-6 min-h-[52px]  md:text-lg lg:text-2xl  font-bold leading-tight tracking-[0.01em] text-black">
          {card.title}
        </h3>

        {/* Description */}
        <p className="mt-3 line-clamp-4 text-xs leading-relaxed text-black">
          {card.description}
        </p>

        {/* Capabilities */}
       


        <div className="absolute bottom-0 left-6 right-6 h-px bg-[#E46A2A]/15" />


        <div className="absolute -bottom-[5px] left-1/2 z-20 h-2.5 w-2.5 -translate-x-1/2 rounded-full border-2 border-[#FFF6EF] bg-[#E46A2A]" />
      </div>


      {index === 0 && (
        <div className="absolute right-[-64px] top-1/2 hidden w-16 -translate-y-1/2 md:block">
          <div className="relative h-px w-full bg-[#E46A2A]/40">
            <span className="absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 rotate-45 border-r border-t border-[#E46A2A]" />
          </div>
        </div>
      )}

      {/* 02 → 03 */}
      {index === 1 && (
        <div className="absolute right-[-64px] top-1/2 hidden w-16 -translate-y-1/2 md:block">
          <div className="relative h-px w-full bg-[#E46A2A]/40">
            <span className="absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 rotate-45 border-r border-t border-[#E46A2A]" />
          </div>
        </div>
      )}

      {/* 03 ↓ 04 */}
      {index === 2 && (
        <div className="absolute bottom-[-64px] left-1/2 z-10 hidden h-16 w-px bg-[#E46A2A]/40 md:block">
          <span className="absolute bottom-0 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 border-b border-r border-[#E46A2A]" />
        </div>
      )}

      {/* 04 ← 05 */}
      {index === 3 && (
        <div className="absolute left-[-64px] top-1/2 hidden w-16 -translate-y-1/2 md:block">
          <div className="relative h-px w-full bg-[#E46A2A]/40">
            <span className="absolute left-0 top-1/2 h-2 w-2 -translate-y-1/2 rotate-[225deg] border-r border-t border-[#E46A2A]" />
          </div>
        </div>
      )}

      {/* 05 ← 06 */}
      {index === 4&& (
        <div className="absolute left-[-64px] top-1/2 hidden w-16 -translate-y-1/2 md:block">
          <div className="relative h-px w-full bg-[#E46A2A]/40">
            <span className="absolute left-0 top-1/2 h-2 w-2 -translate-y-1/2 rotate-[225deg] border-r border-t border-[#E46A2A]" />
          </div>
        </div>
      )}
      {index === 5&& (
        <div className="absolute left-[-64px] top-1/2 hidden w-16 -translate-y-1/2 md:block">
          <div className="relative h-px w-full bg-[#E46A2A]/40">
            <span className="absolute left-0 top-1/2 h-2 w-2 -translate-y-1/2 rotate-[225deg] border-r border-t border-[#E46A2A]" />
          </div>
        </div>
      )}

    </div>
  );
}
export default function Technology() {
  return (
    <section
      id="technology"
      className="relative flex min-h-screen w-full flex-col justify-center overflow-hidden bg-[#FFF6EF] px-5 py-16 text-[#173B32] sm:px-8 md:px-12 lg:px-16"
    >
      {/* Topographic Background */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <TopographicBackground />
      </div>

      {/* Content */}
      <div className="container  overflow-hidden relative over z-10 mx-auto w-full">
        {/* Header */}
        <div>
          <h2 className="mt-3 font-display text-4xl font-normal leading-[1.05] tracking-[-0.02em] text-black md:text-5xl lg:text-6xl">
            Technology
          </h2>

          <p className="mt-5 text-sm leading-relaxed text-black md:text-base">
            {technology.description}
          </p>
        </div>

        {/* Flow */}
        <div className="mt-12">
          {/* Desktop Flow */}
          <div className="hidden md:grid md:grid-cols-3 md:gap-x-16 md:gap-y-16">
            {cards.map((card, index) => (
              <TechFlowNode
                key={card.number}
                card={card}
                index={index}
              />
            ))}
          </div>

          {/* Mobile Flow */}
          <div className="flex flex-col md:hidden">
            {cards.map((card, index) => (
              <div key={card.number} className="relative">
                <TechFlowNode card={card} index={index} />

                {index < cards.length - 1 && (
                  <div className="mx-auto flex h-10 w-px items-center bg-[#E46A2A]/30">
                    <span className="absolute mt-10 h-2 w-2 rotate-45 border-b border-r border-[#E46A2A]" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
