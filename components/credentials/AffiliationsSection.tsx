"use client";

import { Landmark } from "lucide-react";
import { useInView } from "@/lib/useInView";
import { cn } from "@/lib/utils";
import { data } from "@/data";
import SectionHeader from "./SectionHeader";

export default function AffiliationsSection() {
  const { affiliations, sections } = data.credentials;
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section className="relative w-full overflow-hidden border-t border-white/10 bg-black py-20 text-white md:py-28">
      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8 md:px-10">
        <SectionHeader
          eyebrow={sections.affiliations.eyebrow}
          title={sections.affiliations.title}
          description={sections.affiliations.description}
          accent="emerald"
        />

        <div
          ref={ref}
          className={cn(
            "mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 transition-all duration-700",
            inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          )}
        >
          {affiliations.map((item) => (
            <article
              key={item.id}
              className="group relative flex min-h-52 flex-col justify-between overflow-hidden rounded-xl border border-white/10 bg-neutral-950/70 p-6 transition-all duration-500 hover:border-emerald-500/20 hover:bg-neutral-900/50 sm:p-8"
            >
              <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-emerald-500/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div>
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-emerald-400/90">
                    <Landmark size={18} />
                  </span>
                  {item.year && (
                    <span className="font-mono text-[10px] tracking-[0.2em] text-neutral-500">
                      {item.year}
                    </span>
                  )}
                </div>

                <h3 className="mt-5 text-lg font-bold tracking-tight text-white leading-snug sm:text-xl">
                  {item.name}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 flex items-center gap-2 border-t border-white/6 pt-4">
                <span className="h-1 w-1 rounded-full bg-emerald-500/50" />
                <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-neutral-600">
                  {item.type}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
