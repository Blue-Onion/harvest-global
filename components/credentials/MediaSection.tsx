"use client";

import { ArrowUpRight } from "lucide-react";
import { useInView } from "@/lib/useInView";
import { cn } from "@/lib/utils";
import { data } from "@/data";
import SectionHeader from "./SectionHeader";

export default function MediaSection() {
  const { media, sections } = data.credentials;
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section className="relative w-full overflow-hidden border-t border-white/10 bg-black py-20 text-white md:py-28">
      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8 md:px-10">
        <SectionHeader
          eyebrow={sections.media.eyebrow}
          title={sections.media.title}
          description={sections.media.description}
          accent="orange"
        />

        <div
          ref={ref}
          className={cn(
            "mt-14 transition-all duration-700",
            inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          )}
        >
          <div className="divide-y divide-white/10 border-y border-white/10">
            {media.map((item, i) => (
              <div
                key={item.id}
                className="group grid gap-3 py-6 sm:grid-cols-[auto_1fr_auto] sm:items-start sm:gap-8 md:py-8"
              >
                <span className="pt-1 font-mono text-xs text-neutral-600">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div>
                  <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-orange-400/90">
                    {item.publication}
                  </p>
                  <h3 className="mt-2 text-lg font-bold tracking-tight text-white leading-snug transition-colors group-hover:text-neutral-100 sm:text-xl">
                    {item.title}
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-neutral-500">
                    {item.description}
                  </p>
                </div>

                <div className="flex items-center justify-between gap-4 sm:flex-col sm:items-end sm:gap-2">
                  {item.year && (
                    <span className="font-mono text-[10px] tracking-[0.2em] text-neutral-500">
                      {item.year}
                    </span>
                  )}
                  {item.link ? (
                    <a
                      href={item.link}
                      aria-label={item.title}
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-neutral-400 transition-all duration-300 group-hover:border-orange-500/40 group-hover:text-orange-400"
                    >
                      <ArrowUpRight size={16} />
                    </a>
                  ) : (
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/6 text-neutral-600">
                      <ArrowUpRight size={16} />
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
