"use client";

import Image from "next/image";

interface TechCardProps {
  title: string;
  image: string;
  desc: string;
}

export function TechCard({
  title,
  image,
  desc,
}: TechCardProps) {
  return (
    <article
      className="
        group relative
        flex h-[435px]
        w-[230px]
        shrink-0
        flex-col
        overflow-hidden
        rounded-xl
        bg-[#0D1D20]
        text-white
        shadow-[0_10px_30px_rgba(0,0,0,0.12)]
        transition-all duration-500
        hover:-translate-y-1
      "
    >
      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        {/* Title */}
        <h3
          className="
            max-w-[200px]
            text-xl
            font-medium
            leading-[1.15]
            tracking-tight
          "
        >
          {title}
        </h3>

        {/* Description */}
        <p
          className="
            mt-4
            max-w-[205px]
            text-[13px]
            leading-[1.45]
            text-white/65
          "
        >
          {desc}
        </p>
      </div>

      {/* Image */}
      <div className="relative h-[145px] w-full shrink-0 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="
            object-cover
            transition-transform
            duration-700
            ease-out
            group-hover:scale-105
          "
        />

        {/* Subtle image overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D1D20]/30 to-transparent" />
      </div>
    </article>
  );
}
const techStack = [
  {
    title: "Earth Data",
    image: "/images/tech/1.png",
    svgLink: "/svg/earth-data.svg",
    desc: "Satellite, weather, ground and geospatial datasets brought together to create a unified foundation for Earth and Weather Intelligence.",
  },
  {
    title: "Unified GeoAI Stack",
    image: "/images/tech/2.png",
    svgLink: "/svg/geoai-stack.svg",
    desc: "An integrated GeoAI technology stack connecting data, compute, models and intelligence workflows into a unified platform for Earth and Weather Intelligence.",
  },
  {
    title: "Foundation Models / AI",
    image: "/images/tech/3.png",
    svgLink: "/svg/foundation-models.svg",
    desc: "Foundation and fine-tuned GeoAI models designed to understand, analyse and generate intelligence from complex Earth and environmental datasets.",
  },
  {
    title: "Sovereign Private AI Cloud",
    image: "/images/tech/4.png",
    svgLink: "/svg/private-ai-cloud.svg",
    desc: "Secure and scalable AI infrastructure providing sovereign control over data, compute and models for government and enterprise workloads.",
  },
  {
    title: "Earth Intelligence",
    image: "/images/tech/5.png",
    svgLink: "/svg/earth-intelligence.svg",
    desc: "Transforming Earth observations and AI capabilities into actionable intelligence for monitoring, prediction and informed decision-making.",
  },
  {
    title: "Government + Industry Applications",
    image: "/images/tech/6.png",
    svgLink: "/svg/government-industry.svg",
    desc: "Deploying Earth Intelligence into real-world applications across government and industry, enabling faster, smarter and more informed decisions.",
  },
];

function UnifiedGeoStack() {
  return (
    <section
      id="unified-geo-stack"
      className="relative min-h-screen overflow-hidden bg-[url('/images/site-bg/bg1.png')] bg-cover bg-center py-28"
    >
      <div className="container relative mx-auto px-5">
        {/* Header */}
        <div className="header">
          <div className="flex flex-col justify-between gap-10 lg:flex-row">
            {/* Left */}
            <div>
              <h2 className="w-full max-w-2xl text-4xl font-bold tracking-tight text-black md:text-6xl lg:text-7xl">
                TECHNOLOGY
              </h2>

              <p className="mt-7 max-w-4xl text-base leading-7 text-black md:text-lg">
                Our{" "}
                <span className="font-semibold text-[#E46A2A]">
                  Unified GeoAI Stack
                </span>{" "}
                combines data infrastructure, foundation models, GeoAnalytics,
                AI compute and edge intelligence to move from observation to
                prediction and decision support.
              </p>
            </div>

            {/* Right */}
            <div className="flex flex-col gap-3">
              <h3 className="text-lg font-semibold uppercase tracking-widest text-green-900">
                <span className="block">Earth</span>
                <span className="block">Intelligence</span>
                <span className="block">at scale</span>
              </h3>

              <p className="text-md font-normal uppercase text-black/55">
                <span className="block">better data.</span>
                <span className="block">clearer insights</span>
                <span className="block">a more resilient</span>
                <span className="block">tomorrow</span>
              </p>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="content mt-16">
          {/* <div className=""> */}
          {/* <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {techStack.map((tech) => (
              <TechCard
                key={tech.title}
                title={tech.title}
                image={tech.image}

                desc={tech.desc}
              />
            ))}
            <AccordionGallery
  items={techStack}
  defaultIndex={0}
  height={430}
  gap={6}
  radius={6}
  expandRatio={0.45}
  duration={0.65}
  parallax={0.4}
  tilt={5}
  trigger="hover"
  grayscale={true}
/>
          </div> */}
          <div className="relative mt-16">
  <div className="flex items-center gap-0 overflow-x-auto pb-4 scrollbar-hide">
    {techStack.map((tech, index) => (
      <div
        key={tech.title}
        className="relative flex shrink-0 items-center"
      >
        <TechCard
          title={tech.title}
          image={tech.image}
          desc={tech.desc}
        />

        {/* Connector Arrow */}
        {index !== techStack.length - 1 && (
          <div
            className="
              relative z-20
              flex h-10 w-10
              shrink-0
              -mx-1
              items-center
              justify-center
              rounded-full
              border
              border-white/40
              bg-[#0D1D20]
              text-white
              shadow-lg
            "
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-5 w-5"
            >
              <path
                d="M5 12h14"
                strokeLinecap="round"
              />
              <path
                d="m13 6 6 6-6 6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        )}
      </div>
    ))}
  </div>
</div>
        </div>
      </div>
    </section>
  );
}

export default UnifiedGeoStack;