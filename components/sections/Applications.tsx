"use client";

import ScrollStack, { ScrollStackItem } from "../ui/ScrollStack";
import StarBackground from "@/components/ui/Starbackground";
import Reveal from "@/components/ui/reveal/Reveal";
import { data } from "@/data";
import Image from "next/image";

const applications = data.applications.items;

export default function Applications() {
  return (
    <section
      id="applications"
      className="relative w-full border-t border-white/10 bg-black text-white"
    >
      <StarBackground />
      {/* Section Header */}
      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8 md:px-10 pt-20 md:pt-28">
        <Reveal variant="group" className="max-w-3xl" duration={1}>
          <div className="flex items-center gap-3">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-orange-500" />
            <p
              data-reveal="eyebrow"
              className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400"
            >
              {data.applications.eyebrow}
            </p>
          </div>

          <h2
            data-reveal="heading"
            className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl leading-[1.1]"
          >
            {data.applications.title.map((line, i) => (
              <span key={i}>
                {i > 0 && <br className="hidden sm:inline" />}
                {i === data.applications.title.length - 1 ? (
                  <span className="text-orange-500">{line}</span>
                ) : (
                  line
                )}
              </span>
            ))}
          </h2>

          <p
            data-reveal="text"
            className="mt-6 text-base leading-relaxed text-neutral-400 sm:text-lg max-w-2xl"
          >
            {data.applications.description}
          </p>
        </Reveal>
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
                {/* Image */}
                <Image
                  src={app.image}
                  alt={app.alt}
                  fill
                  draggable={false}
                  sizes="(min-width: 1024px) 1152px, 100vw"
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
                        {String(i + 1).padStart(2, "0")} /{" "}
                        {String(applications.length).padStart(2, "0")}
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
