"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useInView } from "@/lib/useInView";
import { cn } from "@/lib/utils";
import { data } from "@/data";
import SectionHeader from "./SectionHeader";

export default function MediaSection() {
  const { media, sections } = data.credentials;
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section className="relative w-full overflow-hidden border-t border-white/10 bg-[#123C2B] py-20 text-white md:py-28">
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
            "mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 transition-all duration-700",
            inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          )}
        >
          {media.map((item, i) => (
            <article
              key={item.id}
              className="group relative flex flex-col overflow-hidden rounded-md border border-white/10 bg-neutral-950/70 transition-all duration-500 hover:border-white/20 hover:bg-neutral-900/50"
            >
              <div className="absolute top-0 inset-x-0 z-10 h-px bg-linear-to-r from-transparent via-[#E46A2A]/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {item.image && (
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover opacity-80 transition-transform duration-700 group-hover:scale-105"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-neutral-950 via-neutral-950/30 to-[#123C2B]/20" />

                  <span className="absolute left-4 top-4 font-mono text-xs text-white/40">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {item.link ? (
                    <a
                      href={item.link}
                      aria-label={item.title}
                      className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/10 bg-[#123C2B]/40 text-neutral-300 backdrop-blur-sm transition-all duration-300 group-hover:border-[#E46A2A]/50 group-hover:bg-[#E46A2A] group-hover:text-white"
                    >
                      <ArrowUpRight size={16} />
                    </a>
                  ) : (
                    <span className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/6 bg-[#123C2B]/40 text-neutral-500 backdrop-blur-sm">
                      <ArrowUpRight size={16} />
                    </span>
                  )}
                </div>
              )}

              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <div className="flex items-center justify-between gap-3">
                  <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-[#E46A2A]/90">
                    {item.publication}
                  </p>
                  {item.year && (
                    <span className="font-mono text-[10px] tracking-[0.2em] text-neutral-500">
                      {item.year}
                    </span>
                  )}
                </div>

                <h3 className="mt-3 text-lg font-bold tracking-tight text-white leading-snug transition-colors group-hover:text-neutral-100 sm:text-xl">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-neutral-500 line-clamp-3">
                  {item.description}
                </p>

                {item.link && (
                  <span className="mt-5 inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500 transition-colors duration-300 group-hover:text-[#E46A2A]">
                    Read coverage
                    <ArrowUpRight size={12} />
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
