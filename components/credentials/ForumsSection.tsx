"use client";

import { MapPin, CalendarDays } from "lucide-react";
import { useInView } from "@/lib/useInView";
import { cn } from "@/lib/utils";
import { data } from "@/data";
import SectionHeader from "./SectionHeader";

export default function ForumsSection() {
  const { forums, sections } = data.credentials;
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section className="relative w-full overflow-hidden border-t border-white/10 bg-black py-20 text-white md:py-28">
      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8 md:px-10">
        <SectionHeader
          eyebrow={sections.forums.eyebrow}
          title={sections.forums.title}
          description={sections.forums.description}
          accent="emerald"
        />

        <div
          ref={ref}
          className={cn(
            "mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 transition-all duration-700",
            inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          )}
        >
          {forums.map((item) => (
            <article
              key={item.id}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-neutral-950/70 p-6 transition-all duration-500 hover:border-white/20 hover:bg-neutral-900/50 sm:p-8"
            >
              <div className="absolute left-0 top-6 bottom-6 w-px bg-linear-to-b from-emerald-500/30 via-emerald-500/10 to-transparent" />

              <div className="ml-4">
                {item.year && (
                  <span className="inline-flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-emerald-400/90">
                    <CalendarDays size={12} />
                    {item.year}
                  </span>
                )}

                <h3 className="mt-3 text-lg font-bold tracking-tight text-white leading-snug sm:text-xl">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-neutral-500">
                  {item.description}
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-white/6 pt-4">
                  <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-neutral-500">
                    <MapPin size={12} />
                    {item.venue}
                  </span>
                  {item.location && (
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-neutral-600">
                      {item.location}
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
