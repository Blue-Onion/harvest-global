"use client";

import { useState } from "react";
import Image from "next/image";
import AccordionGallery from "../ui/AccordinGallery";

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
      "https://images.unsplash.com/photo-1477959858617-67f30ac4ce78?q=80&w=1200&auto=format&fit=crop",
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
  // Default active panel (e.g. FORESTRY or AGRI)
  const [activeIndex, setActiveIndex] = useState<number>(2);

  return (
    <section
      id="applications"
      className="relative w-full overflow-hidden border-t border-white/10 bg-black py-20 text-white md:py-28"
    >
      {/* Section Header */}
      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8 md:px-10">
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

      {/* Accordion Gallery */}
      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8 md:px-10 mt-12 md:mt-16">
        <AccordionGallery
          items={applications.map((app) => {
            return {
              id: app.id,
              image: app.image,
              label: app.label,
              shortLabel: app.shortLabel,
              alt: app.alt,
              description: app.description,
              tag: app.tag,
              coords: app.coords,
            };
          })}
          defaultIndex={1}
          expandRatio={0.52}
          trigger="hover"
          accentColor="#ffffff"
          overlayColor="#060010"
          textColor="#ffffff"
          grayscale
          showLabels
          duration={0.6}
          ease="power3.out"
          parallax={0.5}
          tilt={8}
          stagger={0.06}
          height={480}
          gap={10}
          radius={16}
          orientation="horizontal"
        />
      </div>
    </section>
  );
}
