"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import TopographicBackground from "../ui/Topography";

const layers = [
  {
    number: "01",
    label: "Layer 1",
    title: "AI IaaS",
    description: "GPU-powered infrastructure for enterprise-grade GeoAI.",
    detail:
      "High-performance compute, data infrastructure and ground-segment integration designed for large-scale Earth Observation workloads.",
    tags: ["GPU Compute", "Data Infrastructure", "Ground Segment"],
  },
  {
    number: "02",
    label: "Layer 2",
    title: "AI PaaS",
    description: "Foundation and fine-tuned GeoAI models.",
    detail:
      "GeoFM models and domain-specific AI for agriculture, forestry, hydrology, land-use and land-cover mapping, change detection and other Earth applications.",
    tags: ["GeoFM", "Foundation Models", "Domain AI"],
  },
  {
    number: "03",
    label: "Layer 3",
    title: "AI SaaS",
    description: "Intelligence delivered through applications.",
    detail:
      "GeoAnalytics and decision-support solutions across agriculture, crop insurance, climate resilience, water security and infrastructure.",
    tags: ["GeoAnalytics", "Decision Support", "Earth Intelligence"],
  },
  {
    number: "04",
    label: "Layer 4",
    title: "EDGE AI",
    description: "Intelligence closer to where data is generated.",
    detail:
      "On-demand Earth Observation AI at satellites, ground stations and edge nodes, reducing dependence on cloud latency.",
    tags: ["Satellites", "Ground Stations", "Edge Nodes"],
  },
];

function UnifiedGeoStack() {
  return (
    <section className="relative overflow-hidden bg-[#FBEDE5] py-24 md:py-32">
<div className="pointer-events-none absolute inset-0 z-0 text-[#E46A2A]">
        <TopographicBackground />
      </div>
      <div className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-[#E46A2A]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        {/* Header */}
        <div>
          <h2 className="text-4xl font-medium tracking-tight text-[#17251E] md:text-6xl lg:text-7xl">
            Unified GeoAI Stack
          </h2>

          <p className="mt-7 max-w-2xl text-base leading-7 text-[#17251E]/65 md:text-lg">
            One Stack of Earth and{" "}
            <span className="text-[#E46A2A]">Multiple Layers</span>
           
          </p>
          <p className="mt-7 max-w-2xl text-base leading-7 text-[#17251E]/65 md:text-lg">
            The HG Unified GeoAI Stack brings together the infrastructure,
            models and applications required to build scalable Earth
            Intelligence, from core data processing to edge deployment.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-5">
              {layers.map((layer) => (
                <CarouselItem
                  key={layer.number}
                  className="pl-5 md:basis-[80%] lg:basis-[65%]"
                >
                  <article className="group relative flex min-h-[480px] flex-col justify-between overflow-hidden rounded-2xl border border-[#B94D1F]/15 bg-white p-7 shadow-sm transition-all duration-500 hover:border-[#E46A2A]/40 hover:shadow-xl md:p-10">
                    {/* Large layer number */}
                    <div className="pointer-events-none absolute -right-5 -top-12 select-none text-[180px] font-semibold leading-none tracking-tighter text-[#E46A2A]/[0.06] transition-transform duration-700 group-hover:translate-x-2 group-hover:text-[#E46A2A]/[0.1] md:text-[220px]">
                      {layer.number}
                    </div>

                    {/* Card content */}
                    <div className="relative z-10">
                      

                      <h3 className="text-5xl font-medium tracking-tight text-[#17251E] md:text-6xl">
                        {layer.title}
                      </h3>

                      <p className="mt-5 max-w-xl text-xl leading-8 text-[#17251E]/75 md:text-2xl">
                        {layer.description}
                      </p>

                      <p className="mt-6 max-w-2xl text-sm leading-6 text-[#17251E]/55 md:text-base">
                        {layer.detail}
                      </p>
                    </div>

                    {/* Tags */}
                    <div className="relative z-10 mt-12 flex flex-wrap items-center gap-2 border-t border-black/5 pt-6">
                      {layer.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-[#17251E]/[0.04] px-3 py-1.5 text-xs font-medium text-[#17251E]/60"
                        >
                          {tag}
                        </span>
                      ))}

                      <div className="ml-auto hidden h-10 w-10 items-center justify-center rounded-full bg-[#E46A2A] text-white transition-transform duration-300 group-hover:translate-x-1 md:flex">
                        →
                      </div>
                    </div>

                    {/* Orange accent */}
                    <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#E46A2A] transition-all duration-500 group-hover:w-full" />
                  </article>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Controls */}
            <div className="mt-8 flex items-center justify-between">
              {/* Progress indicators */}
              <div className="flex items-center gap-2">
                {layers.map((layer, index) => (
                  <div
                    key={layer.number}
                    className={`h-1 w-8 rounded-full md:w-12 ${
                      index === 0
                        ? "bg-[#E46A2A]"
                        : "bg-[#17251E]/10"
                    }`}
                  />
                ))}
              </div>

              {/* Navigation */}
              <div className="flex gap-2">
                <CarouselPrevious className="static translate-y-0 border-[#17251E]/10 bg-white text-[#17251E] hover:bg-[#E46A2A] hover:text-white" />

                <CarouselNext className="static translate-y-0 border-[#17251E]/10 bg-white text-[#17251E] hover:bg-[#E46A2A] hover:text-white" />
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}

export default UnifiedGeoStack;