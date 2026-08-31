"use client";

import React from "react";
import { cn } from "@/lib/utils";

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

function TechCardView({ card }: { card: TechCard }) {
  return (
    <article
      className={cn(
        "group relative overflow-hidden rounded-md",
        "border border-[#E46A2A]/20",
        "bg-[#FBEDE5]",
        "p-7 md:p-9",
        "transition-colors duration-300",
        "hover:border-[#E46A2A]/40",
      )}
    >
      {/* Image */}
      {card.visual === "image" && card.image && (
        <div className="relative mb-8 aspect-[16/9] overflow-hidden rounded-md">
          <img
            src={card.image}
            alt={card.title}
            draggable={false}
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-[#B94D1F]/15" />
        </div>
      )}

      {/* Grid Visual */}
      {card.visual === "grid" && (
        <div
          className="mb-8 aspect-[16/9] rounded-md opacity-50"
          style={{
            backgroundImage:
              "linear-gradient(#B94D1F1A 1px, transparent 1px), linear-gradient(90deg, #B94D1F1A 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      )}

      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="font-mono text-xs tracking-[0.2em] text-[#B94D1F]/60">
          {card.number}
        </span>

        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#E46A2A]">
          Technology
        </span>
      </div>

      {/* Content */}
      <div className="mt-7">
        <h3 className="font-display text-2xl font-normal tracking-[0.01em] text-[#173B32] md:text-3xl">
          {card.title}
        </h3>

        <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#60766E] md:text-base">
          {card.description}
        </p>

        {/* Items */}
        {card.items && card.items.length > 0 && (
          <div className="mt-7 border-t border-[#E46A2A]/15 pt-5">
            <p className="mb-3 font-mono text-[9px] font-semibold uppercase tracking-[0.2em] text-[#B94D1F]/60">
              Capabilities
            </p>

            <div className="flex flex-wrap gap-2">
              {card.items.map((item) => (
                <span
                  key={item}
                  className="rounded-md border border-[#E46A2A]/20 bg-[#FFF6EF] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-[#B94D1F]/80"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Coordinates */}
        {card.coords && (
          <p className="mt-6 font-mono text-[10px] tracking-[0.18em] text-[#60766E]/60">
            {card.coords}
          </p>
        )}
      </div>

      {/* Orange Accent */}
      <div className="mt-8 h-px w-10 bg-[#E46A2A] transition-all duration-300 group-hover:w-20" />
    </article>
  );
}

export default function Technology() {
  return (
    <section
      id="technology"
      className="w-full bg-[#FFF6EF] px-5 py-24 text-[#173B32] sm:px-8 md:px-12 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="max-w-4xl">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-[#E46A2A]">
            {technology.eyebrow}
          </p>

          <h2 className="mt-4 font-display text-4xl font-normal leading-[1.1] tracking-[0.01em] text-[#173B32] md:text-6xl">
            Technology
          </h2>

          <p className="mt-4 text-sm font-medium uppercase tracking-[0.12em] text-[#60766E]">
            THE HG APPROACH
          </p>

          <p className="mt-5 max-w-3xl text-base leading-relaxed text-[#60766E]">
            {technology.description}
          </p>
        </div>

        {/* Unified GeoAI Stack intro */}
       

        {/* Cards */}
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {cards.map((card) => (
            <TechCardView key={card.number} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}