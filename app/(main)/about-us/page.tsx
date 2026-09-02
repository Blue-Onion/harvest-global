"use client";

import React from "react";
import Reveal from "@/components/ui/reveal/Reveal";
import TeamCard from "./_component/TeamCard";

const Team = [
  {
    id: "team-1",
    name: "Preeti Chaudhary",
    role: "Founder & CEO",
    focus: "Technology, digital transformation & strategic execution",
    image: "/images/team/PreetiChaudhary.png",
    linkedin:
      "https://www.linkedin.com/in/chaudhary-preeti-160738199/",
    mail: "https://www.linkedin.com/in/ritika-verma-2329631ab/",
  },
  {
    id: "team-2",
    name: "AVM Pawan Kumar",
    role: "Senior Consultant",
    focus: "Aerospace, defence, space & geospatial intelligence",
    image: "/images/team/PawanKumar.png",
    linkedin:
      "https://www.linkedin.com/in/air-vice-marshal-pawan-kumar-retd-408577249/",
    mail: "https://www.linkedin.com/in/ritika-verma-2329631ab/",
  },
  {
    id: "team-3",
    name: "Ritika Verma",
    role: "Program Management Office",
    focus: "Strategy, partnerships & business growth",
    image: "/images/team/ritikaVerma.png",
    linkedin:
      "https://www.linkedin.com/in/ritika-verma-2329631ab/",
    mail: "https://www.linkedin.com/in/ritika-verma-2329631ab/",
  },
];

const icon = [
  {
    title: "Research",
    icon: "",
  },
  {
    title: "Platform",
    icon: "",
  },
  {
    title: "Deployment",
    icon: "",
  },
  {
    title: "Commercialisation",
    icon: "",
  },
];

export default function TeamPage() {
  return (
    <section
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[url('/images/site-bg/bg7.png')]
        bg-cover
        bg-center
        text-black
        pb-24
        pt-32
        md:pb-32
        md:pt-32
      "
    >
      {/* Ambient orange glow */}
      <div
        className="
          pointer-events-none
          absolute
          right-[-10%]
          top-[30%]
          h-[400px]
          w-[400px]
          rounded-full
          bg-[#E46A2A]/5
          blur-[140px]
        "
      />

      <div className="container relative z-10 mx-auto">
        <Reveal variant="group" duration={1}>
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className="inline-block h-1.5 w-1.5 rounded-md bg-[#E46A2A]" />

            <p
              data-reveal="eyebrow"
              className="
                font-mono
                text-xs
                font-semibold
                uppercase
                tracking-[0.25em]
                text-black/60
              "
            >
              ABOUT US
            </p>
          </div>

          {/* Heading */}
          <h1
            data-reveal="heading"
            className="
              mt-6
              max-w-7xl
              text-5xl
              font-bold
              leading-[0.95]
              tracking-tight
              text-black
              sm:text-7xl
              md:text-6xl
            "
          >
            A Multidisciplinary Team for a{" "}
            <span className="text-[#E46A2A]">
              Multidimensional Planet
            </span>
          </h1>

          {/* Description */}
          <p
            data-reveal="text"
            className="
              mt-8
              max-w-5xl
              text-base
              leading-relaxed
              text-black
              sm:text-lg
            "
          >
           Harvest Global SSP Pvt Ltd (HG Systems) pioneering Earth Intelligence integrates satellite imagery, climate and weather data, ground observations and geospatial intelligence into an enterprise-grade GeoAI stack, enabling governments and industries to move from fragmented data to predictive, actionable intelligence.

          </p>

          <p
            data-reveal="text"
            className="
              mt-6
              max-w-5xl
              text-base
              leading-relaxed
              text-black
              sm:text-lg
            "
          >
        We build Geofoundational AI models and sovereign cloud infrastructure empowering governments, insurance providers, and global enterprises to address climate resilience, agriculture risk, and spatial governance.

          </p>
          <p
            data-reveal="text"
            className="
              mt-6
              max-w-5xl
              text-base
              leading-relaxed
              text-black
              sm:text-lg
            "
          >
         Our multidisciplinary team brings together expertise across AI, geospatial science, Earth Observation, climate, aerospace, insurance and large-scale technology deployment.
From research and foundation models to infrastructure and commercial deployment, HG works across the complete lifecycle:

          </p>

          {/* Lifecycle */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
            {icon.map((item, index) => (
              <React.Fragment key={item.title}>
                <span className="font-medium text-black/80">
                  {item.title}
                </span>

                {index < icon.length - 1 && (
                  <span className="text-[#E46A2A]">→</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </Reveal>

        {/* Team */}
        <div
          className="
            mt-20
            grid
            w-full
            grid-cols-1
            gap-7
            lg:grid-cols-2
          "
        >
          {Team.map((member) => (
            <div
              key={member.id}
              className="team-card w-full"
            >
              <TeamCard member={member} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}