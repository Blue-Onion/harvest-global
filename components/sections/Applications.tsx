"use client";

import ScrollStack, { ScrollStackItem } from "../ui/ScrollStack";

interface ApplicationItem {
  id: string;
  image: string;
  label: string;
  shortLabel: string;
  alt: string;
  description: string;
  tag: string;
  coords: string;
}

const applications: ApplicationItem[] = [
  {
    id: "agriculture",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1200&auto=format&fit=crop",
    label: "Agriculture",
    shortLabel: "AGRI",
    alt: "Aerial view of agricultural fields",
    description:
      "Crop health monitoring, yield estimation, and precision agriculture analytics powered by satellite imagery.",
    tag: "CROP ANALYTICS",
    coords: "AGRI-AI // CROP-YIELD",
  },
  {
    id: "bfsi",
    image:
      "/images/aboutbg.png",
    label: "BFSI",
    shortLabel: "BFSI",
    alt: "Aerial view of urban infrastructure",
    description:
      "Infrastructure risk assessment, collateral valuation, and climate exposure modeling for banking & insurance.",
    tag: "RISK MODELING",
    coords: "BFSI-RISK // URBAN-INFRA",
  },
  {
    id: "forestry",
    image:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=1200&auto=format&fit=crop",
    label: "Forestry",
    shortLabel: "FORESTRY",
    alt: "Dense forest canopy",
    description:
      "Deforestation tracking, biomass density estimation, and canopy disruption analysis via multi-spectral sensors.",
    tag: "BIOMASS & CANOPY",
    coords: "CANOPY-CAN // DEFOREST",
  },
  {
    id: "change-detection",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop",
    label: "Change Detection",
    shortLabel: "CHANGE",
    alt: "Landscape viewed from above",
    description:
      "Automated land-use change, urban expansion tracking, and surface disturbance detection across multi-temporal datasets.",
    tag: "SURFACE DISTURBANCE",
    coords: "CHANGE-DET // TERRAIN-VAR",
  },
  {
    id: "weather-modeling",
    image:
      "https://images.unsplash.com/photo-1534088568595-a066f410bcda?q=80&w=1200&auto=format&fit=crop",
    label: "Weather Modeling",
    shortLabel: "WEATHER",
    alt: "Cloud formations over Earth",
    description:
      "Microclimate forecasting, severe weather trajectory tracking, and atmospheric anomaly modeling.",
    tag: "ATMOSPHERIC AI",
    coords: "WEATHER-AI // CLOUD-DYN",
  },
  {
    id: "hydrology",
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1200&auto=format&fit=crop",
    label: "Hydrology",
    shortLabel: "HYDRO",
    alt: "River and surrounding landscape",
    description:
      "Surface water dynamics, flood inundation mapping, watershed health, and coastline monitoring in real time.",
    tag: "WATER SYSTEMS",
    coords: "HYDRO-MON // FLOOD-MAP",
  },
];

export default function Applications() {
  return (
    <section
      id="applications"
      className="relative w-full border-t border-white/10 bg-black text-white"
    >
      {/* Section Header */}
      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8 md:px-10 pt-20 md:pt-28">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-orange-500" />
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400">
              APPLICATIONS
            </p>
          </div>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl leading-[1.1]">
            Intelligence built for <br className="hidden sm:inline" />
            the <span className="text-orange-500">real world.</span>
          </h2>

          <p className="mt-6 text-base leading-relaxed text-neutral-400 sm:text-lg max-w-2xl">
            From agriculture to hydrology, HG Systems adapts Earth Observation
            intelligence to domain-specific challenges — turning satellite data
            into actionable industry insight.
          </p>
        </div>
      </div>

      {/* ScrollStack Cards */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 sm:px-8 md:px-10">
 <ScrollStack
  useWindowScroll
  itemDistance={40}
  itemStackDistance={18}
  stackPosition="10%"
>
  {applications.map((app, i) => (
    <ScrollStackItem
      key={app.id}
      itemClassName="
        !my-0
        !h-[520px]
        md:!h-[620px]
        !w-full
        !rounded-[28px]
        !p-0
        overflow-hidden
        border
        border-white/10
        bg-neutral-950
      "
    >
      <div className="relative h-full w-full">
        {/* Image */}
        <img
          src={app.image}
          alt={app.alt}
          draggable={false}
          className="absolute inset-0 h-full w-full select-none object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/20" />

        {/* Content */}
        <div className="relative z-10 flex h-full flex-col justify-between p-7 sm:p-10 md:p-12">
          {/* Top */}
          <div className="flex items-start justify-between gap-4">
            <div>
              <span className="font-mono text-sm font-semibold uppercase tracking-[0.25em] text-orange-400">
                {String(i + 1).padStart(2, "0")} / 06
              </span>

              <p className="mt-2 font-mono text-xs uppercase tracking-[0.2em] text-neutral-400">
                {app.shortLabel}
              </p>
            </div>

            <span className="rounded-full border border-white/15 bg-black/20 px-3 py-1.5 font-mono text-[9px] uppercase tracking-widest text-neutral-300 backdrop-blur-sm">
              {app.tag}
            </span>
          </div>

          {/* Bottom */}
          <div>
            <h3 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              {app.label}
            </h3>

            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-neutral-300 sm:text-base md:text-lg">
              {app.description}
            </p>

            <div className="mt-7 flex items-center justify-between border-t border-white/10 pt-4">
              <span className="font-mono text-[9px] uppercase tracking-wider text-neutral-500 sm:text-[10px]">
                {app.coords}
              </span>

              <span className="font-mono text-[9px] uppercase tracking-wider text-white/30">
                SYSTEM // NODE
              </span>
            </div>
          </div>
        </div>
      </div>
    </ScrollStackItem>
  ))}
</ScrollStack>
      </div>
    </section>
  );
}
