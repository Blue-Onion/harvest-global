"use client";

import { useInView } from "@/lib/useInView";
import { cn } from "@/lib/utils";
import { data } from "@/data";

export default function CredentialsHero() {
  const { eyebrow, title, description } = data.credentials.hero;
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section className="relative w-full overflow-hidden border-t border-white/10 pb-24 text-white md:pt-52 md:pb-32">
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-150 w-200 rounded-md bg-[#E46A2A]/4 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8 md:px-10">
        <div
          ref={ref}
          className={cn(
            "max-w-4xl transition-all duration-700",
            inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          )}
        >
          <div className="flex items-center gap-3">
            <span className="inline-block h-1.5 w-1.5 rounded-md bg-[#E46A2A]" />
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400">
              {eyebrow}
            </p>
          </div>

          <h1 className="mt-6 text-5xl font-bold tracking-tight text-white leading-[0.95] sm:text-7xl md:text-8xl">
            {title}
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-relaxed text-neutral-400 sm:text-lg">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
