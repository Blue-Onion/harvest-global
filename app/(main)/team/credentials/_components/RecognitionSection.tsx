"use client";

import { useInView } from "@/lib/useInView";
import { cn } from "@/lib/utils";
import { data } from "@/data";
import SectionHeader from "./SectionHeader";
import RecognitionCard from "../../../components/credentials/RecognitionCard";

export default function RecognitionSection() {
  const { recognition, sections } = data.credentials;
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section className="relative w-full overflow-hidden border-t border-white/10 bg-black py-20 text-white md:py-28">
      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8 md:px-10">
        <SectionHeader
          eyebrow={sections.recognition.eyebrow}
          title={sections.recognition.title}
          description={sections.recognition.description}
          accent="emerald"
        />

        <div
          ref={ref}
          className={cn(
            "mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 transition-all duration-700",
            inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          )}
        >
          {recognition.map((item) => (
            <RecognitionCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
