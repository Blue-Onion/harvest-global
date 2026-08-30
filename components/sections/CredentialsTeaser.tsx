"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import StarBackground from "@/components/ui/Starbackground";
import Reveal from "@/components/ui/reveal/Reveal";
import { data } from "@/data";
import RecognitionCard from "@/components/credentials/RecognitionCard";

const TEASER_COUNT = 3;

export default function CredentialsTeaser() {
  const { recognition, sections } = data.credentials;
  const teaserItems = recognition.slice(0, TEASER_COUNT);

  return (
    <section
      id="credentials"
      className="relative w-full overflow-hidden border-t border-white/10 bg-black py-20 text-white md:py-28"
    >
      <StarBackground />
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-150 w-200 rounded-md bg-emerald-600/4 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8 md:px-10">
        <Reveal variant="group" className="max-w-3xl" duration={1}>
          <div className="flex items-center gap-3">
            <span className="inline-block h-1.5 w-1.5 rounded-md bg-emerald-500" />
            <p
              data-reveal="eyebrow"
              className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400"
            >
              {sections.recognition.eyebrow}
            </p>
          </div>

          <h2
            data-reveal="heading"
            className="mt-4 text-3xl font-bold tracking-tight text-white leading-[1.1] sm:text-5xl md:text-6xl"
          >
            {sections.recognition.title}
          </h2>

          <p
            data-reveal="text"
            className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-400 sm:text-lg"
          >
            {sections.recognition.description}
          </p>
        </Reveal>

        <Reveal
          variant="stagger"
          itemSelector=".teaser-card"
          className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
          stagger={0.12}
        >
          {teaserItems.map((item) => (
            <div key={item.id} className="teaser-card">
              <RecognitionCard item={item} />
            </div>
          ))}
        </Reveal>

        <div className="mt-14 flex justify-center">
          <Link
            href="/credentials"
            className="group inline-flex items-center gap-3 rounded-md border border-emerald-500/30 bg-emerald-500/10 px-7 py-3.5 text-sm font-medium text-emerald-300 backdrop-blur-sm transition-colors hover:border-emerald-500/50 hover:bg-emerald-500/20"
          >
            Explore Credentials
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
