"use client";

import Reveal from "@/components/ui/reveal/Reveal";
import TeamCard from "./_component/TeamCard";
import React from "react";

const Team = [
  {
    id: "team-1",
    name: "Preeti Chaudhary",
    role: "Founder & CEO",
    focus: "Technology, digital transformation & strategic execution",
    image: "/images/team/PreetiChaudhary.png",
    linkedin: "https://www.linkedin.com/in/chaudhary-preeti-160738199/",
    mail: "https://www.linkedin.com/in/chaudhary-preeti-160738199/",
  },
  {
    id: "team-2",
    name: "AVM Pawan Kumar",
    role: "Senior Consultant",
    focus: "Aerospace, defence space & geospatial intelligence",
   image: "/images/team/PawanKumar.png",
    linkedin:
      "https://www.linkedin.com/in/air-vice-marshal-pawan-kumar-retd-408577249/",
    mail:
      "https://www.linkedin.com/in/air-vice-marshal-pawan-kumar-retd-408577249/",
  },
  {
    id: "team-3",
    name: "Dr. Manmeet Singh",
    role: "GeoAI Advisor",
    focus: "Geospatial sciences, Earth systems & academic AI research",
    image: "/images/team/urban.jpg",
    linkedin:
      "https://www.linkedin.com/in/air-vice-marshal-pawan-kumar-retd-408577249/",
    mail:
      "https://www.linkedin.com/in/air-vice-marshal-pawan-kumar-retd-408577249/",
  },
 
];

export default function TeamPage() {
  return (
    <main className="bg-[#123C2B] text-[#E7F1EB]">
      <section
        className="
          relative
          overflow-hidden
          border-t
          border-[#E7F1EB]/10
          bg-[#123C2B]
          pb-24
          pt-32
          md:pb-32
          md:pt-32
        "
      >
        {/* Ambient Harvest Green glow */}
        <div
          className="
            pointer-events-none
            absolute
            -top-40
            left-1/2
            h-150
            w-200
            -translate-x-1/2
            rounded-md
            bg-[#2E7657]/10
            blur-[120px]
          "
        />

        {/* Subtle orange accent */}
        <div
          className="
            pointer-events-none
            absolute
            right-[-10%]
            top-[30%]
            h-100
            w-100
            rounded-md
            bg-[#E46A2A]/5
            blur-[140px]
          "
        />

        <div className="relative z-10 mx-auto container">
          <Reveal variant="group" duration={1}>
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <span
                className="
                  inline-block
                  h-1.5
                  w-1.5
                  rounded-md
                  bg-[#E46A2A]
                "
              />

              <p
                data-reveal="eyebrow"
                className="
                  font-mono
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-[#E7F1EB]/60
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
                text-[#E7F1EB]
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

                text-base
                leading-relaxed
                text-[#E7F1EB]/65
                sm:text-lg
              "
            >
              Harvest Global SSP Pvt Ltd (HG Systems) is building
              enterprise-grade infrastructure and intelligence systems for
              Earth Observation and GeoAI. Our multidisciplinary team brings
              together expertise across AI, geospatial science, Earth
              Observation, climate, aerospace, insurance and large-scale
              technology deployment.
            </p>
            <p
              data-reveal="text"
              className="
                mt-8

                text-base
                leading-relaxed
                text-[#E7F1EB]/65
                sm:text-lg
              "
            >
              From research and foundation models to infrastructure and
              commercial deployment, HG works across the complete lifecycle:
            </p>

            <div className="mt-4 flex w-full items-center justify-center gap-4">
              {["Research", "Platform", "Deployment", "Commercialisation"].map(
                (item, index) => (
                  <React.Fragment key={item}>
                    <span className="mx-2 font-medium text-[#E7F1EB]">
                      {item}
                    </span>
                    {index < 3 && (
                      <span className="text-[#E46A2A]">→</span>
                    )}
                  </React.Fragment>
                )
              )}
            </div>
          </Reveal>

          {/* Team */}
          <Reveal
            variant="stagger"
            itemSelector=".team-card"
            className="
              mt-20
              grid
              w-full
              grid-cols-1
              justify-items-center
              gap-8
              md:grid-cols-3
            "
            stagger={0.15}
          >
            {Team.map((member) => (
              <div
                key={member.id}
                className="team-card flex w-full justify-center"
              >
                <TeamCard member={member} />
              </div>
            ))}
          </Reveal>
        </div>
      </section>
    </main>
  );
}