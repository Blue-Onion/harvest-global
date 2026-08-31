"use client";

import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import Reveal from "@/components/ui/reveal/Reveal";
import { data } from "@/data";

function FinalCta() {
  const { title, buttonLabel } = data.cta;

  const buttonRef = useRef<HTMLButtonElement>(null);
  const fillRef = useRef<HTMLSpanElement>(null);

  const handleEnter = () => {
    gsap.to(fillRef.current, {
      scaleX: 1,
      duration: 0.5,
      ease: "power3.out",
    });

    gsap.to(buttonRef.current, {
      color: "#B94D1F",
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleLeave = () => {
    gsap.to(fillRef.current, {
      scaleX: 0,
      transformOrigin: "right center",
      duration: 0.45,
      ease: "power3.inOut",
    });

    gsap.to(buttonRef.current, {
      color: "#FFF6EF",
      duration: 0.3,
      ease: "power2.out",
    });
  };

  return (
    <section className="w-full  rounded-md-3xl bg-[#FFF6EF] px-5 py-20 text-[#173B32] sm:px-8 md:px-10 ">
      <div
        className="
          relative flex h-auto w-full mx-auto container
          flex-col items-center justify-center
          overflow-hidden rounded-md
          bg-[#B94D1F]
          px-6  text-center
          md:px-10
          
        "
      >
        {/* Subtle orange accents */}
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-md bg-[#E46A2A]/40 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-md bg-[#E46A2A]/30 blur-3xl" />

        {/* Content */}
        <Reveal
          variant="group"
          className="relative gap-9 z-10 flex min-h-[500px] w-full flex-col items-center justify-center gap-3"
        >
          <p
            data-reveal="eyebrow"
            className="text-xs font-semibold uppercase tracking-[0.25em] text-[#FBEDE5]/70"
          >
            LET&apos;S BUILD TOGETHER
          </p>

          <h3
            data-reveal="heading"
            className="text-2xl md:text-4xl max-w-3xl font-bold leading-[0.9] tracking-tight text-[#FFF6EF] sm:text-3xl  lg:text-6xl"
          >
            {title}
          </h3>

          {/* GSAP Fill Button */}
          <Link href={"/connect"} >
            <button
              ref={buttonRef}
              type="button"

              onMouseEnter={handleEnter}
              onMouseLeave={handleLeave}
              className="
              cursor-pointer
            relative overflow-hidden
            rounded-md
            border border-[#FFF6EF]/70
            px-7 py-3.5
            font-mono text-xs font-semibold
            uppercase tracking-[0.16em]
            text-[#FFF6EF]
            "
            >
              {/* Fill */}
              <span
                ref={fillRef}
                className="
              absolute inset-0
              origin-left
              scale-x-0
              bg-[#FFF6EF]
              "
              />

              {/* Text */}
              <span className="relative z-10 flex items-center gap-2">
                Partner with Harvest Global
                <span className="text-base">→</span>
              </span>
            </button>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

export default FinalCta;
