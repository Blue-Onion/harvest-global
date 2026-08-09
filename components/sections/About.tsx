"use client";

import ScrollExpand from "@/components/ui/ScrollExpand";
import { data } from "@/data";

export default function About() {
  const { eyebrow, scrollTitle, scrollHint, title, highlight, paragraph1, paragraph2, domainsEyebrow, domains } =
    data.about;

  return (
    <section id="about" className="relative bg-black text-white w-full border-t border-white/10">
      <ScrollExpand
        src="/images/aboutbg.png"
        mediaType="image"
        useWindowScroll={true}
        title={scrollTitle}
        scrollHint={scrollHint}
        startWidth={48}
        startHeight={58}
        startRadius={24}
        endRadius={0}
        mediaZoom={1.3}
        scrollDistance={1.2}
        holdDistance={0.4}
        overlayScrim={0.65}
        className="w-full min-h-screen"
      >
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-center text-center px-4 sm:px-6">
          {/* Eyebrow */}
          <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-emerald-400">
            {eyebrow}
          </p>

          {/* Heading */}
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl leading-tight">
            {title} <span className="text-emerald-500">{highlight}</span>
          </h2>

          {/* Core Positioning Paragraphs */}
          <div className="mt-5 space-y-3 text-sm leading-relaxed text-neutral-200 sm:text-base md:text-lg max-w-3xl">
            <p>
              {paragraph1}
            </p>
            <p className="text-xs text-neutral-400 sm:text-sm">
              {paragraph2}
            </p>
          </div>

          {/* Application Domains Row */}
          <div className="mt-8 border-t border-white/15 pt-6 w-full max-w-3xl">
            <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-neutral-400 mb-3">
              {domainsEyebrow}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-3 sm:gap-x-5 text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.18em] text-neutral-300">
              {domains.map((domain, index) => (
                <div key={domain} className="flex items-center gap-3 sm:gap-5">
                  <span className="transition-colors hover:text-white">
                    {domain}
                  </span>
                  {index < domains.length - 1 && (
                    <span className="text-white/30 select-none">·</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </ScrollExpand>
    </section>
  );
}
