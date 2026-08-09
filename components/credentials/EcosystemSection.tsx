"use client";

import { useInView } from "@/lib/useInView";
import { cn } from "@/lib/utils";
import { data } from "@/data";
import SectionHeader from "./SectionHeader";

export default function EcosystemSection() {
  const { ecosystem, sections } = data.credentials;
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section className="relative w-full overflow-hidden border-t border-white/10 bg-black py-20 text-white md:py-28">
      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8 md:px-10">
        <SectionHeader
          eyebrow={sections.ecosystem.eyebrow}
          title={sections.ecosystem.title}
          description={sections.ecosystem.description}
          accent="orange"
        />

        <div
          ref={ref}
          className={cn(
            "relative mt-14 transition-all duration-700",
            inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          )}
        >
          <div className="absolute top-1 bottom-1 left-4 w-px bg-white/10 sm:left-6" />

          <div className="space-y-10">
            {ecosystem.map((item, i) => (
              <div
                key={item.id}
                className="relative grid grid-cols-1 gap-4 pl-12 sm:grid-cols-[140px_1fr] sm:pl-16 sm:gap-10"
              >
                <div className="absolute left-4 top-1 -translate-x-1/2 sm:left-6">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-orange-500/40 bg-black">
                    <span className="h-2 w-2 rounded-full bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.8)]" />
                  </div>
                </div>

                <div className="sm:pt-1">
                  <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-orange-400/90">
                    {item.phase}
                  </p>
                  {item.status && (
                    <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.2em] text-neutral-600">
                      Status — {item.status}
                    </p>
                  )}
                </div>

                <div className="rounded-xl border border-white/10 bg-neutral-950/70 p-6 transition-all duration-500 hover:border-white/20 hover:bg-neutral-900/50 sm:p-7">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-lg font-bold tracking-tight text-neutral-600">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-lg font-bold tracking-tight text-white leading-snug sm:text-xl">
                      {item.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-500">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
