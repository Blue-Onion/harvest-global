"use client";

import React from "react";
import { data, type TechCard } from "@/data";
import { cn } from "@/lib/utils";

function TechCardView({ card }: { card: TechCard }) {
  return (
    <article
      className={cn(
        "group relative overflow-hidden rounded-[24px]",
        "border border-[#E46A2A]/20",
        "bg-[#FBEDE5]",
        "p-7 md:p-9",
        "transition-colors duration-300",
        "hover:border-[#E46A2A]/40",
      )}
    >
      {/* Image */}
      {card.visual === "image" && card.image && (
        <div className="relative mb-8 aspect-[16/9] overflow-hidden rounded-[16px]">
          <img
            src={card.image}
            alt={card.title}
            draggable={false}
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-[#B94D1F]/15" />
        </div>
      )}

      {/* Simple grid visual */}
      {card.visual === "grid" && (
        <div
          className="mb-8 aspect-[16/9] rounded-[16px] opacity-50"
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

        {/* Tags */}
        {card.items?.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-2">
            {card.items.map((item) => (
              <span
                key={item}
                className="rounded-full border border-[#E46A2A]/20 bg-[#FFF6EF] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-[#B94D1F]/70"
              >
                {item}
              </span>
            ))}
          </div>
        )}

        {/* Coordinates */}
        {card.coords && (
          <p className="mt-5 font-mono text-[10px] tracking-[0.18em] text-[#60766E]/60">
            {card.coords}
          </p>
        )}
      </div>

      {/* Small orange accent */}
      <div className="mt-8 h-px w-10 bg-[#E46A2A]" />
    </article>
  );
}

export default function Technology() {
  const { technology } = data;
  const cards = technology.cards ?? [];

  return (
    <section
      id="technology"
      className="w-full bg-[#FFF6EF] px-5 py-24 text-[#173B32] sm:px-8 md:px-12 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Header */}
        <div className="max-w-3xl">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-[#E46A2A]">
            {technology.eyebrow}
          </p>

          <p className="mt-3 text-sm tracking-[0.04em] text-[#60766E]">
            THE HG APPROACH
          </p>

          <h2 className="mt-4 font-display text-4xl font-normal leading-[1.1] tracking-[0.01em] text-[#173B32] md:text-6xl">
            {technology.title.map((line, i) => (
              <React.Fragment key={i}>
                {i > 0 && <br />}
                {line}
              </React.Fragment>
            ))}
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#60766E]">
            {technology.description}
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {cards.map((card) => (
            <TechCardView key={card.number} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}