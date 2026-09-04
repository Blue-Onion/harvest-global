"use client";

import ModalCards from "@/components/ui/ModalCards";
import Reveal from "@/components/ui/reveal/Reveal";
import { data } from "@/data";

const galleryCards = [
  {
    id: "urban",
    imageUrl: "/images/urban.jpg",
    title: "Urban Intelligence",
    description:
      "How Harvest Global's sensing fabric turns dense cityscapes into living, decision-ready systems.",
    gradientColor: "#f97316",
  },
  {
    id: "about",
    imageUrl: "/images/aboutbg.png",
    title: "Our Origins",
    description:
      "The mission and the people building a globally connected Earth observation ecosystem.",
    gradientColor: "#6366f1",
  },
  {
    id: "eco-times",
    imageUrl: "/images/global-reco/eco-times.png",
    title: "Eco Times Feature",
    description:
      "Recognition from leading publications on our climate and sustainability work.",
    gradientColor: "#0ea5e9",
  },
  {
    id: "british-forum",
    imageUrl: "/images/global-reco/british-parliment-forum.png",
    title: "British Parliament Forum",
    description:
      "Invited dialogue on global policy, space economics, and responsible AI.",
    gradientColor: "#22c55e",
  },
  {
    id: "japan-space",
    imageUrl: "/images/narional-global-ecostyem/japan-space.png",
    title: "Japan Space Partnership",
    description:
      "Cross-border collaboration advancing next-generation orbital and ground infrastructure.",
    gradientColor: "#a855f7",
  },
  {
    id: "iirs-assam",
    imageUrl: "/images/narional-global-ecostyem/IIRS-and-Assam-space.png",
    title: "IIRS & Assam Space",
    description:
      "Regional capacity-building programs bringing space-tech to state-level governance.",
    gradientColor: "#eab308",
  },
];

export default function ModalGallery() {
  return (
    <section
      id="gallery"
      className="relative w-full border-t border-white/10 bg-black text-white"
    >
      <div className="relative z-10 mx-auto max-w-6xl px-5 py-20 md:py-28">
        <Reveal variant="group" className="max-w-3xl" duration={1}>
          <div className="flex items-center gap-3">
            <span className="inline-block h-1.5 w-1.5 rounded-md bg-orange-500" />
            <p
              data-reveal="eyebrow"
              className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400"
            >
              Gallery
            </p>
          </div>

          <h2
            data-reveal="heading"
            className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl leading-[1.1]"
          >
            Explore the <span className="text-orange-500">ecosystem</span>
          </h2>

          <p
            data-reveal="text"
            className="mt-6 text-base leading-relaxed text-neutral-400 sm:text-lg max-w-2xl"
          >
            {data.applications.description}
          </p>
        </Reveal>

        <Reveal
          variant="stagger"
          itemSelector=".gallery-card"
          className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
          stagger={0.1}
        >
          {galleryCards.map((card) => (
            <div key={card.id} className="gallery-card">
              <ModalCards
                id={card.id}
                imageUrl={card.imageUrl}
                title={card.title}
                description={card.description}
                gradientColor={card.gradientColor}
                animationVariant="scale"
              />
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
