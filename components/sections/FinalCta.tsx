"use client";

import Link from "next/link";
import Reveal from "@/components/ui/reveal/Reveal";
import { data } from "@/data";

function FinalCta() {
  const { title, buttonLabel } = data.cta;

  return (
    <section className="w-full bg-[#FFF6EF] rounded-b-3xl px-5 py-20 text-[#173B32] sm:px-8 md:px-10 md:py-24">
      <div
        className="
          relative flex min-h-[600px] w-full max-w-[1400px]
          flex-col items-center justify-center
          overflow-hidden rounded-[2rem]
          bg-[#B94D1F]
          px-6 py-24 text-center
          md:px-10
        "
      >
        {/* Subtle orange accents */}
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#E46A2A]/40 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-[#E46A2A]/30 blur-3xl" />

        {/* Content */}
        <Reveal
          variant="group"
          className="relative z-10 flex min-h-[500px] w-full flex-col items-center justify-center gap-8"
        >
          <p
            data-reveal="eyebrow"
            className="
              font-mono text-xs font-semibold uppercase
              tracking-[0.25em] text-[#FBEDE5]/70
            "
          >
            LET&apos;S BUILD TOGETHER
          </p>

          <h3
            data-reveal="heading"
            className="
              max-w-4xl
              text-5xl font-bold leading-[0.95]
              tracking-tight text-[#FFF6EF]
              sm:text-6xl md:text-7xl lg:text-8xl
            "
          >
            {title}
          </h3>

          <Link
            data-reveal="cta"
            href="/connect"
            className="
              group inline-flex items-center justify-center gap-3
              rounded-full
              border border-[#FFF6EF]/30
              bg-[#FFF6EF]
              px-8 py-4
              text-base font-medium
              text-[#B94D1F]
              transition-all duration-300
              hover:bg-[#FBEDE5]
              hover:border-[#FFF6EF]/60
              sm:text-lg
            "
          >
            <span>{buttonLabel}</span>

            <svg
              className="size-5 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M17.5 8l5 5m0 0l-5 5m5-5H0"
              />
            </svg>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

export default FinalCta;