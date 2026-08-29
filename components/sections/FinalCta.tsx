"use client";

import Link from "next/link";
import StarBackground from "@/components/ui/Starbackground";
import Reveal from "@/components/ui/reveal/Reveal";
import { data } from "@/data";

function FinalCta() {
  const { title, buttonLabel } = data.cta;

  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden border-t border-white/10 bg-black px-5 py-24 text-white sm:px-8 md:px-10">
      <StarBackground />
      <div
        className="
    relative flex min-h-[650px] w-full max-w-350
    flex-col gap-7 items-center justify-center
    overflow-hidden rounded-[2rem]
    bg-[radial-gradient(circle_at_70%_15%,rgba(16,185,129,0.4),transparent_40%),linear-gradient(225deg,#111,#000)]
    px-5 py-24 text-center text-white
    md:px-10
  "
      >
        <Reveal
          variant="group"
          className="flex min-h-[650px] w-full flex-col items-center justify-center gap-7"
        >
          <h3
            data-reveal="heading"
            className="text-6xl font-bold tracking-wider leading-[0.88] mb-2"
          >
            {title}
          </h3>
          <Link
            data-reveal="cta"
            href="/connect"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-green-500/30 bg-green-500/10 px-8 py-4 text-lg font-medium backdrop-blur-sm hover:bg-green-500/20 hover:border-green-500/50 transition-colors"
          >
            <span>{buttonLabel}</span>
            <svg
              className="size-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M17.5 8l5 5m0 0l-5 5m5-5H0"
              ></path>
            </svg>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

export default FinalCta;
