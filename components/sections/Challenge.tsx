"use client";

import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const challenges = [
  {
    number: "01",
    title: "Fragmented Earth Data",
    description:
      "Satellite, weather, ground and geospatial datasets remain disconnected.",
    image: "/images/urban.jpg",
    reversed: false,
  },
  {
    number: "02",
    title: "Limited Predictive Intelligence",
    description:
      "Observation often stops at monitoring, leaving critical decisions reactive.",
    image: "/images/urban.jpg",
    reversed: true,
  },
  {
    number: "03",
    title: "Infrastructure Constraints",
    description:
      "Conventional cloud environments can create challenges around scale, latency, security and data governance.",
    image: "/images/urban.jpg",
    reversed: false,
  },
  {
    number: "04",
    title: "Data & Technology Sovereignty",
    description:
      "Critical Earth intelligence requires greater control over data, compute and AI capabilities.",
    image: "/images/urban.jpg",
    reversed: true,
  },
];

const Challenge = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const card = cardRef.current;

      if (!section || !card) return;

      // Do not run the morphing animation on phones.
      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        const states =
          gsap.utils.toArray<HTMLElement>(".challenge-state");

        if (states.length < 2) return;

        // Initial state
        gsap.set(states, {
          opacity: 0,
          pointerEvents: "none",
        });

        gsap.set(states[0], {
          opacity: 1,
          pointerEvents: "auto",
        });

        states.forEach((state, index) => {
          const text = state.querySelector(".challenge-text");
          const image = state.querySelector(".challenge-image");
          const imageWrapper = state.querySelector(
            ".challenge-image-wrapper",
          );

          if (index === 0) {
            gsap.set(text, {
              x: 0,
              opacity: 1,
              filter: "blur(0px)",
            });

            gsap.set(image, {
              scale: 1,
              opacity: 1,
              filter: "blur(0px)",
            });

            gsap.set(imageWrapper, {
              x: 0,
            });
          } else {
            gsap.set(text, {
              x: challenges[index].reversed ? 80 : -80,
              opacity: 0,
              filter: "blur(10px)",
            });

            gsap.set(image, {
              scale: 1.12,
              opacity: 0,
              filter: "blur(12px)",
            });

            gsap.set(imageWrapper, {
              x: challenges[index].reversed ? -80 : 80,
            });
          }
        });

        /*
         * Main morphing timeline.
         */
        const tl = gsap.timeline({
          defaults: {
            ease: "power2.inOut",
          },
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: `+=${(challenges.length - 1) * 100}%`,
            scrub: 1.2,
            pin: true,
            anticipatePin: 1,
          },
        });

        for (let i = 0; i < states.length - 1; i++) {
          const current = states[i];
          const next = states[i + 1];

          const currentText =
            current.querySelector<HTMLElement>(".challenge-text");

          const currentImage =
            current.querySelector<HTMLElement>(".challenge-image");

          const currentImageWrapper =
            current.querySelector<HTMLElement>(
              ".challenge-image-wrapper",
            );

          const nextText =
            next.querySelector<HTMLElement>(".challenge-text");

          const nextImage =
            next.querySelector<HTMLElement>(".challenge-image");

          const nextImageWrapper =
            next.querySelector<HTMLElement>(
              ".challenge-image-wrapper",
            );

          const currentReversed = challenges[i].reversed;
          const nextReversed = challenges[i + 1].reversed;

          const direction = currentReversed ? -1 : 1;
          const nextDirection = nextReversed ? 1 : -1;

          /*
           * OLD CONTENT
           *
           * Move + blur + fade.
           */
          tl.to(
            currentText,
            {
              x: direction * 90,
              opacity: 0,
              filter: "blur(12px)",
              duration: 0.45,
            },
            "+=0.1",
          );

          tl.to(
            currentImage,
            {
              scale: 1.12,
              opacity: 0,
              filter: "blur(14px)",
              duration: 0.65,
            },
            "<",
          );

          tl.to(
            currentImageWrapper,
            {
              x: direction * 100,
              duration: 0.65,
            },
            "<",
          );

          /*
           * NEW CONTENT
           */
          tl.set(
            next,
            {
              opacity: 1,
              pointerEvents: "auto",
            },
            "<0.35",
          );

          tl.fromTo(
            nextImageWrapper,
            {
              x: nextDirection * 100,
            },
            {
              x: 0,
              duration: 0.75,
            },
            "<",
          );

          tl.fromTo(
            nextImage,
            {
              scale: 1.12,
              opacity: 0,
              filter: "blur(14px)",
            },
            {
              scale: 1,
              opacity: 1,
              filter: "blur(0px)",
              duration: 0.75,
            },
            "<",
          );

          tl.fromTo(
            nextText,
            {
              x: nextDirection * 90,
              opacity: 0,
              filter: "blur(12px)",
            },
            {
              x: 0,
              opacity: 1,
              filter: "blur(0px)",
              duration: 0.6,
            },
            "<0.12",
          );

          // Small pause between transformations.
          tl.to({}, { duration: 0.35 });
        }

        /*
         * Subtle card scale while scrolling.
         */
        const cardAnimation = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: `+=${(challenges.length - 1) * 100}%`,
            scrub: 1.2,
          },
        });

        cardAnimation
          .fromTo(
            card,
            {
              scale: 0.96,
            },
            {
              scale: 1,
              duration: 0.5,
            },
          )
          .to(card, {
            scale: 0.98,
            duration: 0.5,
          });

        return () => {
          tl.scrollTrigger?.kill();
          cardAnimation.scrollTrigger?.kill();

          tl.kill();
          cardAnimation.kill();
        };
      });

      return () => {
        mm.revert();
      };
    },
    {
      scope: sectionRef,
    },
  );

  return (
    <section
      ref={sectionRef}
      className="relative w-screen isolate bg-black"
    >
      <div className="container mx-auto px-6 md:px-10 py-24">
        {/* Heading */}
        <div className="mb-8">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
            Challenges
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-white/70 mt-4 max-w-3xl leading-relaxed">
            At <strong>Harvest Global</strong>, every challenge is an
            opportunity to redefine what&apos;s possible. We don&apos;t just
            solve problems—we engineer experiences that shape the future.
          </p>
        </div>

        <div
          ref={cardRef}
          className="hidden md:block relative w-full h-[620px] rounded-[32px] overflow-hidden bg-white/[0.04] border border-white/10"
        >
          {challenges.map((challenge) => (
            <div
              key={challenge.number}
              className={`challenge-state absolute inset-0 flex ${
                challenge.reversed
                  ? "flex-row-reverse"
                  : "flex-row"
              }`}
            >
              {/* Text */}
              <div className="challenge-text w-1/2 h-full p-10 md:p-14 lg:p-20 flex flex-col justify-center">
                <span className="text-xs md:text-sm uppercase tracking-[0.3em] text-white/40 mb-6">
                  Challenge {challenge.number}
                </span>

                <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-[1.05] max-w-2xl">
                  {challenge.title}
                </h3>

                <p className="mt-6 text-base md:text-lg text-white/60 leading-relaxed max-w-xl">
                  {challenge.description}
                </p>
              </div>

              {/* Image */}
              <div className="challenge-image-wrapper w-1/2 h-full relative overflow-hidden">
                <img
                  src={challenge.image}
                  alt={challenge.title}
                  className="challenge-image absolute inset-0 w-full h-full object-cover"
                />

                <div
                  className={`absolute inset-0 bg-linear-to-${
                    challenge.reversed ? "l" : "r"
                  } from-black/50 via-black/10 to-transparent`}
                />

                <div className="absolute inset-0 bg-black/10" />
              </div>
            </div>
          ))}
        </div>

        {/* =========================
            MOBILE NORMAL CARDS
            ========================= */}
        <div className="md:hidden space-y-6">
          {challenges.map((challenge) => (
            <article
              key={challenge.number}
              className="w-full rounded-[24px] overflow-hidden bg-white/[0.04] border border-white/10"
            >
              {/* Image */}
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                <img
                  src={challenge.image}
                  alt={challenge.title}
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />

                <span className="absolute left-6 bottom-5 text-xs uppercase tracking-[0.25em] text-white/60">
                  Challenge {challenge.number}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-white leading-tight">
                  {challenge.title}
                </h3>

                <p className="mt-4 text-sm text-white/60 leading-relaxed">
                  {challenge.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Desktop scroll indicator */}
        <div className="hidden md:flex mt-8 items-center gap-4 text-white/30">
          <div className="h-px w-12 bg-white/20" />

          <span className="text-xs uppercase tracking-[0.25em]">
            Scroll to explore
          </span>
        </div>
      </div>
    </section>
  );
};

export default Challenge;