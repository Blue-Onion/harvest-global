"use client";

import Image from "next/image";

interface ApplicationSubtopic {
  title: string;
  desc: string;
  img: string;
}

interface Application {
  title: string;
  desc: string;
  image: string;
  subtopic: readonly ApplicationSubtopic[];
}

interface ApplicationExpandedProps {
  application: Application;
}

const heroTitles: Record<string, string> = {
  Agriculture: "SMARTER AGRICULTURE",
  "Climate Intelligence": "A MORE RESILIENT TOMORROW",
  "Disaster Management": "PREPARE BEFORE IMPACT",
  "Urban Planning": "BUILDING BETTER CITIES",
  Insurance: "INTELLIGENCE FOR BETTER RISK",
  "Renewable Energy": "POWERING A SUSTAINABLE FUTURE",
  Forestry: "PROTECTING OUR LIVING LANDSCAPES",
};

export default function ApplicationExpanded({
  application,
}: ApplicationExpandedProps) {
  const heroTitle = heroTitles[application.title] ?? application.title;

  return (
    <div className="p-4 md:p-6">
      {/* Hero */}
      <div className="relative min-h-[420px] overflow-hidden rounded-xl md:min-h-[500px]">
        <Image
          src={application.image}
          alt={application.title}
          fill
          className="object-cover"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#031812] via-[#031812]/75 to-transparent" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#031812]/90 via-transparent to-transparent" />

        {/* Content */}
        <div className="relative z-10 flex min-h-[420px] max-w-2xl flex-col justify-end p-6 md:min-h-[500px] md:p-10">
          {/* Label */}
          <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.25em] text-white/65 md:text-xs">
            {application.title}
          </p>

          {/* Heading */}
          <h3 className="max-w-xl text-3xl font-extrabold uppercase leading-[0.95] tracking-tight text-white md:text-5xl">
            {heroTitle}
          </h3>

          {/* Green line */}
          <div className="my-6 h-[3px] w-12 bg-[#087653]" />

          {/* Description */}
          <p className="max-w-2xl text-sm leading-7 text-white/75 md:text-base">
            {application.desc}
          </p>
        </div>
      </div>

      {/* Subtopics */}
      <div className="mt-4 grid grid-cols-2 gap-3 md:gap-4">
        {application.subtopic.map((item) => (
          <div
            key={item.title}
            className="group relative aspect-[1.8/1] overflow-hidden rounded-xl border border-white/10"
          >
            <Image
              src={item.img}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Card overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* Title */}
            <div className="absolute inset-x-0 bottom-0 p-4 md:p-5">
              <h4 className="text-sm font-bold text-white md:text-base">
                {item.title}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}