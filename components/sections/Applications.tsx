"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import Reveal from "@/components/ui/reveal/Reveal";
import { data } from "@/data";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const applications = [
  {
    id: "app-1",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1200&auto=format&fit=crop",
    label: "Agriculture",
    shortLabel: "AGRI",
    alt: "Precision farming, crop monitoring and agricultural intelligence",
    description:
      "From Space to Farm - AI-powered intelligence across the agricultural lifecycle.",
    tag: "AGRICULTURE",
    coords: "AGRI-STACK // CROP-HEALTH",
    items: [
      "Crop Planning",
      "Crop Monitoring",
      "Yield Estimation",
      "NPK Intelligence",
      "Harvest Monitoring",
      "Crop Insurance",
      "Agri-Credit",
    ],
  },
  {
    id: "app-2",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    label: "Climate Intelligence",
    shortLabel: "CLIMATE",
    alt: "Climate modelling, environmental monitoring and spatial risk intelligence",
    description:
      "Understanding a changing planet - Climate modelling, environmental monitoring and spatial risk intelligence to identify changing patterns and support resilient decision-making.",
    tag: "CLIMATE INTELLIGENCE",
    coords: "CLIMATE-RISK // HAZARD-MAP",
    items: [
      "Climate Risk",
      "Climate Modelling",
      "Environmental Change",
      "Heat & Drought Intelligence",
    ],
  },
  {
    id: "app-3",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
    label: "Disaster Management",
    shortLabel: "DISASTER",
    alt: "Floods, landslides, terrain monitoring and early warning",
    description:
      "From monitoring disasters to anticipating them - GeoAI-powered monitoring and predictive intelligence for faster disaster preparedness, response and recovery.",
    tag: "DISASTER MGMT",
    coords: "DISASTER // EARLY-WARNING",
    items: [
      "Flood Intelligence",
      "Landslide Monitoring",
      "Terrain Monitoring",
      "Climate Risk",
      "Vulnerability Mapping",
      "Early Warning",
    ],
  },
  {
    id: "app-4",
    image:
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1200&auto=format&fit=crop",
    label: "Urban Planning",
    shortLabel: "URBAN",
    alt: "Urban growth, infrastructure, land use and climate vulnerability",
    description:
      "Intelligence for cities that are constantly changing - spatial intelligence for understanding urban growth, infrastructure, land use and climate vulnerability.",
    tag: "URBAN PLANNING",
    coords: "URBAN-SPATIAL // INFRA-MON",
    items: [
      "Urban Growth",
      "Land Use",
      "Infrastructure",
      "Urban Heat",
      "Mobility",
      "Climate Resilience",
    ],
  },
  {
    id: "app-5",
    image: "/images/urban.jpg",
    label: "Insurance",
    shortLabel: "INSURANCE",
    alt: "Crop insurance, damage assessment and spatial risk analytics",
    description:
      "Making risk measurable - GeoAI transforms spatial and environmental data into actionable intelligence for insurance and risk assessment.",
    tag: "INSURANCE",
    coords: "PMFBY-ENGINE // RISK-ASSESS",
    items: [
      "Crop Insurance",
      "Damage Assessment",
      "Risk Analytics",
      "Yield Estimation",
      "Farm Credit",
    ],
  },
  {
    id: "app-6",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
    label: "Renewable Energy",
    shortLabel: "ENERGY",
    alt: "Renewable energy site suitability, solar intelligence and asset monitoring",
    description:
      "Intelligence for the energy transition - use Earth Observation and spatial AI to identify opportunities, assess environmental conditions and monitor renewable energy assets.",
    tag: "RENEWABLE ENERGY",
    coords: "ENERGY // ASSET-MON",
    items: [
      "Site Suitability",
      "Solar Intelligence",
      "Land Assessment",
      "Asset Monitoring",
      "Climate Risk",
    ],
  },
  {
    id: "app-7",
    image:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=1200&auto=format&fit=crop",
    label: "Forestry",
    shortLabel: "FORESTRY",
    alt: "Forest monitoring, change detection, land-use change and carbon intelligence",
    description:
      "Monitoring forests at scale - GeoAI-powered intelligence for understanding forest change, land-use dynamics and environmental conditions.",
    tag: "FORESTRY",
    coords: "CANOPY-AI // CARBON-CAPITAL",
    items: [
      "Forest Monitoring",
      "Change Detection",
      "Land-Use Change",
      "Carbon Intelligence",
      "Environmental Risk",
    ],
  },
];
type App = (typeof applications)[number];

const MOBILE_TAB_COUNT = 4;

export default function Applications() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  // Holds the OUTGOING app while a transition is in flight.
  // While set, the base layer shows the old app and the wipe layer shows the new one.
  const [prevApp, setPrevApp] = useState<App | null>(null);

  // First index of the 4-tab mobile window over the 7-item array.
  const [mobileStartIndex, setMobileStartIndex] = useState(0);
  const mobileEndIndex = Math.min(
    mobileStartIndex + MOBILE_TAB_COUNT - 1,
    applications.length - 1,
  );

  const imageNextRef = useRef<HTMLDivElement>(null);
  const textCurrentRef = useRef<HTMLDivElement>(null);
  const textNextRef = useRef<HTMLDivElement>(null);
  const tabsTrackRef = useRef<HTMLDivElement>(null);

  const active = applications[activeIndex];
  const currentApp = prevApp ?? active;

  const handleTabChange = (value: string) => {
    const nextIndex = applications.findIndex((app) => app.id === value);

    if (nextIndex === -1 || nextIndex === activeIndex || isAnimating) {
      return;
    }

    // Keep the mobile window pinned to the active tab, clamped to the
    // array boundaries (window always contains the active tab, 4 wide).
    const maxWindowStart = Math.max(0, applications.length - MOBILE_TAB_COUNT);
    setMobileStartIndex(Math.min(Math.max(nextIndex, 0), maxWindowStart));

    const imageNext = imageNextRef.current;
    const currentText = textCurrentRef.current;
    const nextText = textNextRef.current;

    const outgoing = applications[activeIndex];

    if (!imageNext || !currentText || !nextText) {
      setActiveIndex(nextIndex);
      return;
    }

    setIsAnimating(true);

    // Freeze the outgoing app so the base layer doesn't jump ahead,
    // then move activeIndex so the wipe layer picks up the new app.
    setPrevApp(outgoing);
    setActiveIndex(nextIndex);

    requestAnimationFrame(() => {
      // Reset starting states in case a previous timeline left things mid-animation.
      gsap.set(imageNext, { clipPath: "inset(0 0 100% 0)" });
      gsap.set(currentText, { x: 0, opacity: 1 });
      gsap.set(nextText, { x: 60, opacity: 0 });

      const tl = gsap.timeline({
        defaults: {
          ease: "power3.inOut",
        },
        onComplete: () => {
          setIsAnimating(false);
          // Collapse back to a single source of truth once the animation settles.
          setPrevApp(null);
        },
      });

      /*
       * OLD TEXT
       * Moves toward the right and fades out.
       */
      tl.to(
        currentText,
        {
          x: 60,
          opacity: 0,
          duration: 0.4,
          ease: "power2.in",
        },
        0,
      );

      /*
       * NEW IMAGE
       * Vertical wipe from top to bottom.
       */
      tl.to(
        imageNext,
        {
          clipPath: "inset(0 0 0% 0)",
          duration: 0.8,
          ease: "power2.inOut",
        },
        0,
      );

      tl.to(
        nextText,
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power3.out",
        },
        0.3,
      );
    });
  };
  return (
    <section
      id="applications"
      className="w-full bg-[#F7FAF8] px-5 py-24 text-black"
    >
      <div className="mx-auto max-w-6xl">
        {/* HEADER */}
        <Reveal variant="group" className="m" duration={1}>
          <h2
            data-reveal="heading"
            className="text-3xl font-bold leading-[1.1] tracking-tight text-black sm:text-5xl md:text-6xl"
          >
            {data.applications.title.map((line, i) => (
              <span key={i}>
                {i > 0 && <br className="hidden sm:inline" />}

                {i === data.applications.title.length - 1 ? (
                  <span className="text-black">{line}</span>
                ) : (
                  line
                )}
              </span>
            ))}
          </h2>

          <p
            data-reveal="text"
            className="mt-6 text-base leading-relaxed text-black sm:text-lg"
          >
            {data.applications.description}
          </p>
        </Reveal>

        {/* TABS */}
        <Tabs
          value={active.id}
          onValueChange={handleTabChange}
          className="mt-4 w-full"
        >
          <TabsList
            variant="line"
            className="w-full justify-start gap-1 rounded-md border-b border-black/15 bg-transparent p-0"
          >
            {applications.map((app) => (
              <TabsTrigger
                key={app.id}
                value={app.id}
                disabled={isAnimating}
                className="
          relative
          shrink-0
          rounded-md
          font-semibold
          bg-transparent
          px-5
          py-4
          text-xs
          uppercase
          tracking-[0.16em]
          text-black
          shadow-none
          transition-none

          data-active:bg-transparent
          data-active:text-[#2E7657]
          data-active:shadow-none
        "
              >
                {app.shortLabel}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        {/* APPLICATION DISPLAY */}
        <div className="mt-8 grid overflow-hidden rounded-md border border-black/15 bg-[#95b4a2] md:grid-cols-2">
          {/* IMAGE */}
          <div className="relative h-auto">
            <Image
              key={`base-${currentApp.id}`}
              src={currentApp.image}
              alt={currentApp.alt}
              fill
              draggable={false}
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />

            <div
              ref={imageNextRef}
              className="absolute inset-0 z-10 overflow-hidden"
              style={{
                clipPath: "inset(0 0 100% 0)",
              }}
            >
              <Image
                key={`next-${active.id}`}
                src={active.image}
                alt={active.alt}
                fill
                draggable={false}
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>

            <div className="pointer-events-none absolute inset-0 z-20 bg-black/10" />
          </div>

          {/* CONTENT */}
          <div className="relative flex min-h-[400px] flex-col justify-between overflow-hidden p-7 sm:p-10 md:min-h-[560px] md:p-12">
            {/* Current */}
            <div
              ref={textCurrentRef}
              className="absolute inset-0 flex flex-col justify-between p-7 sm:p-10 md:p-12"
            >
              <ApplicationText app={currentApp} />
            </div>

            {/* Next */}
            <div
              ref={textNextRef}
              className="absolute inset-0 flex flex-col justify-between p-7 opacity-0 sm:p-10 md:p-12"
            >
              <ApplicationText app={active} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  function ApplicationText({ app }: { app: App }) {
    return (
      <div>
        <h3 className="mt-8 text-4xl font-bold leading-[1.05] tracking-tight text-black sm:text-5xl">
          {app.label}
        </h3>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-black md:text-lg">
          {app.description}
        </p>

        <ul className="mt-7 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
          {app.items.map((item, i) => (
            <li
              key={`${app.id}-${i}`}
              className="ml-4 list-disc pl-1 text-sm font-medium text-black marker:text-black"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
