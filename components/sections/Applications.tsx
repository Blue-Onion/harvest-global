"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TopographicBackground from "../ui/Topography";

const applicationsData = {
  agriculture: {
    title: "Agriculture",
    desc: "AI-powered intelligence across the agricultural lifecycle.",
    image: "/images/application/Agriculture/agriculture.png",

    subtopic: [
      {
        title: "Crop Planning",
        desc: "Intelligence to support better crop planning and resource allocation.",
        img: "/images/application/Agriculture/sub/1.png",
      },
      {
        title: "Crop Monitoring",
        desc: "Monitor crop health and growth throughout the agricultural lifecycle.",
        img: "/images/application/Agriculture/sub/2.png",
      },
      {
        title: "Yield Estimation",
        desc: "Estimate crop yields using Earth Observation and GeoAI.",
        img: "/images/application/Agriculture/sub/3.png",
      },
      {
        title: "Crop Insurance",
        desc: "Enable data-driven crop risk assessment and insurance intelligence.",
        img: "/images/application/Agriculture/sub/4.png",
      },
    ],
  },

  climateIntelligence: {
    title: "Climate Intelligence",
    desc: "Climate modelling, environmental monitoring and spatial risk intelligence to identify changing patterns and support resilient decision-making.",
    image: "/images/application/climate/climate.png",

    subtopic: [
      {
        title: "Climate Risk",
        desc: "Identify and assess climate-related risks across regions and assets.",
        img: "/images/application/climate/sub/1.png",
      },
      {
        title: "Climate Modelling",
        desc: "Use spatial intelligence and AI to understand evolving climate patterns.",
        img: "/images/application/climate/sub/2.png",
      },
      {
        title: "Environmental Change",
        desc: "Monitor environmental changes and their impact across landscapes.",
        img: "/images/application/climate/sub/3.png",
      },
      {
        title: "Heat & Drought Intelligence",
        desc: "Identify heat and drought patterns to support proactive resilience planning.",
        img: "/images/application/climate/sub/4.png",
      },
    ],
  },

  disasterManagement: {
    title: "Disaster Management",
    desc: "GeoAI-powered monitoring and predictive intelligence for faster disaster preparedness, response and recovery.",
    image: "/images/application/disaster/disaster.png",

    subtopic: [
      {
        title: "Flood Intelligence",
        desc: "Monitor flood conditions and identify areas at risk.",
        img: "/images/application/disaster/sub/1.png",
      },
      {
        title: "Landslide Monitoring",
        desc: "Detect and monitor landslide-prone areas using Earth Observation.",
        img: "/images/application/disaster/sub/2.png",
      },
      {
        title: "Vulnerability Mapping",
        desc: "Map vulnerable populations, infrastructure and regions to improve preparedness.",
        img: "/images/application/disaster/sub/3.png",
      },
      {
        title: "Early Warning",
        desc: "Deliver predictive intelligence to support faster disaster warnings and response.",
        img: "/images/application/disaster/sub/4.png",
      },
    ],
  },

  urbanPlanning: {
    title: "Urban Planning",
    desc: "Spatial intelligence for understanding urban growth, infrastructure, land use and climate vulnerability.",
    image: "/images/application/urban-plan/Urban.png",

    subtopic: [
      {
        title: "Urban Growth",
        desc: "Monitor and analyse the expansion and transformation of cities.",
        img: "/images/application/urban-plan/sub/1.png",
      },
      {
        title: "Land Use",
        desc: "Understand changing land-use patterns across urban environments.",
        img: "/images/application/urban-plan/sub/2.png",
      },
      {
        title: "Infrastructure",
        desc: "Map and monitor critical urban infrastructure and development.",
        img: "/images/application/urban-plan/sub/3.png",
      },
      {
        title: "Climate Resilience",
        desc: "Assess urban climate vulnerability and support resilient city planning.",
        img: "/images/application/urban-plan/sub/4.png",
      },
    ],
  },

  insurance: {
    title: "Insurance",
    desc: "GeoAI transforms spatial and environmental data into actionable intelligence for insurance and risk assessment.",
    image: "/images/application/insurance/insurance.png",

    subtopic: [
      {
        title: "Crop Insurance",
        desc: "Assess agricultural risk and crop conditions using Earth Observation intelligence.",
        img: "/images/application/insurance/sub/1.png",
      },
      {
        title: "Damage Assessment",
        desc: "Rapidly assess damage after climate and natural hazard events.",
        img: "/images/application/insurance/sub/2.png",
      },
      {
        title: "Risk Analytics",
        desc: "Transform spatial and environmental data into measurable risk intelligence.",
        img: "/images/application/insurance/sub/3.png",
      },
      {
        title: "Yield Estimation",
        desc: "Estimate agricultural yields to improve underwriting and risk assessment.",
        img: "/images/application/insurance/sub/4.png",
      },
    ],
  },

  renewableEnergy: {
    title: "Renewable Energy",
    desc: "Use Earth Observation and spatial AI to identify opportunities, assess environmental conditions and monitor renewable energy assets.",
    image: "/images/application/renewable/Renewable.png",

    subtopic: [
      {
        title: "Site Suitability",
        desc: "Identify optimal locations for renewable energy development.",
        img: "/images/application/renewable/sub/1.png",
      },
      {
        title: "Solar Intelligence",
        desc: "Analyse solar potential and environmental conditions for solar deployment.",
        img: "/images/application/renewable/sub/2.png",
      },
      {
        title: "Land Assessment",
        desc: "Assess land characteristics and constraints for renewable energy projects.",
        img: "/images/application/renewable/sub/3.png",
      },
      {
        title: "Asset Monitoring",
        desc: "Monitor renewable energy assets and surrounding environmental conditions.",
        img: "/images/application/renewable/sub/4.png",
      },
    ],
  },

  forestry: {
    title: "Forestry",
    desc: "GeoAI-powered intelligence for understanding forest change, land-use dynamics and environmental conditions.",
    image: "/images/application/forest/forestry.png",

    subtopic: [
      {
        title: "Forest Monitoring",
        desc: "Track forest cover, health and deforestation trends.",
        img: "/images/application/forest/sub/1.png",
      },
      {
        title: "Change Detection",
        desc: "Detect changes across forest landscapes with high-resolution insights.",
        img: "/images/application/forest/sub/2.png",
      },
      {
        title: "Land-Use Change",
        desc: "Analyse land-use dynamics and encroachment across forest regions.",
        img: "/images/application/forest/sub/3.png",
      },
      {
        title: "Carbon Intelligence",
        desc: "Enable carbon accounting and support climate action through forest intelligence.",
        img: "/images/application/forest/sub/4.png",
      },
    ],
  },
} as const;

// Flatten the keyed object into the array shape the tab UI needs.
const applications = Object.entries(applicationsData).map(([id, app]) => ({
  id,
  shortLabel: app.title,
  label: app.title,
  alt: app.title,
  description: app.desc,
  image: app.image,
  subtopic: app.subtopic,
  // Footer bullet list — using subtopic titles. Swap for something else if needed.
  items: app.subtopic.map((s) => s.title),
}));

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
      className="relative w-full min-h-screen bg-[url('/images/site-bg/bg2.png')] bg-cover bg-center bg-no-repeat overflow-hidden h-screen  px-5 py-24 text-white"
    >
      <div className="pointer-events-none absolute inset-0 z-0">
        <TopographicBackground />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto container">
        {/* HEADER */}
        <div className="header">
          <div className="flex flex-col justify-between gap-10 lg:flex-row">
            {/* Left */}
            <div>
              <h2 className="w-full max-w-2xl text-4xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl">
                APPLICATION
              </h2>

              <p className="mt-7 max-w-3xl text-base leading-7 text-white md:text-lg">
                Earth Intelligence across critical sectors - transforming Earth
                Observation, spatial data and AI into actionable intelligence.
              </p>
            </div>

            <div className=" hidden lg:flex flex-col gap-3">
              <h3 className="text-lg font-semibold uppercase tracking-widest text-white">
                <span className="block">real</span>
                <span className="block">Insights</span>
                <span className="block">Real impact</span>
                <span className="block">Accross Sector</span>
              </h3>
            </div>
          </div>
        </div>

        {/* TABS */}
        <Tabs
          value={active.id}
          onValueChange={handleTabChange}
          className=" py-3 w-full"
        >
          <TabsList
            variant="line"
            className="
      w-full
      justify-start
      gap-1

      rounded-md
      border
      border-[#2E7657]/25
      backdrop-blur-2xl


    "
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
          border
          h-full
          border-transparent
          bg-transparent
          px-6
          py-4
          text-xs
          font-semibold
          uppercase
          tracking-[0.16em]
          text-white/75
          shadow-none
          transition-all
          duration-300

          hover:bg-[#123C2B]
          hover:text-white

          data-active:border-[#2E7657]/60
          data-active:bg-[#235738]
          data-active:text-white
          data-active:shadow-none
        "
              >
                {app.shortLabel}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        {/* APPLICATION DISPLAY */}
        <div
          className="
    grid
    overflow-hidden
    rounded-md
    border
    border-[#2E7657]/25
    bg-gradient-to-br
    from-[#061C19]
    via-[#0B2922]
    to-[#123C2B]
    md:grid-cols-2
  "
        >
        
          <div className="relative min-h-[400px] md:min-h-[560px]">
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
}

function ApplicationText({ app }: { app: App }) {
  return (
    <div className="flex h-full flex-col">
      {/* Main content */}
      <div>
        <h3 className="mt-8 text-4xl font-bold leading-[1.05] tracking-tight text-white md:text-5xl">
          {app.label}
        </h3>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
          {app.description}
        </p>
      </div>

      {/* Subtopics */}
      <div className="mt-auto border-t border-[#2E7657]/20 pt-6">
        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {app.subtopic.map((sub, i) => (
            <li
              key={`${app.id}-${i}`}
              className="
                group
                flex
                min-h-[76px]
                items-center
                gap-4
                rounded-lg
                bg-[#061C19]/40
                p-3
                transition-all
                duration-300
                hover:bg-[#123C2B]/60
              "
            >
              {/* Thumbnail */}
              <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-md border border-[#2E7657]/30">
                <Image
                  src={sub.img}
                  alt={sub.title}
                  fill
                  sizes="56px"
                  className="
                    object-cover
                    transition-transform
                    duration-500
                    group-hover:scale-110
                  "
                />
              </div>

              {/* Text */}
              <div className="min-w-0">
                <h4 className="text-sm font-semibold text-white">
                  {sub.title}
                </h4>

                <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-white/60">
                  {sub.desc}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
