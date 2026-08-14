"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";

export default function Intro() {
  const introRef = useRef<HTMLDivElement>(null);
  const topRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    const intro = introRef.current;
    const top = topRef.current;
    const bottom = bottomRef.current;
    const text = textRef.current;

    if (!intro || !top || !bottom || !text) return;

    const splitTitle = SplitText.create(text, {
      type: "chars",
    });

    const tl = gsap.timeline();

    gsap.set(text, {
      visibility: "visible",
    });

    gsap.set(splitTitle.chars, {
      opacity: 0,

      // y: 35,

      // filter: "blur(8px)",
    });

    // Title reveal
    tl.to(splitTitle.chars, {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      duration: 0.8,
      ease: "power3.out",
      stagger: {
        each: 0.06,
        // from: "center",
      },
    });

    // Let the title breathe
    tl.to(
      {},
      {
        duration: 0.8,
      },
    );

    // Split the black screen
    tl.to(
      splitTitle.chars,
      {
        opacity: 0,
        // y: -20,
        filter: "blur(5px)",
        duration: 0.4,
        stagger: 0.015,
        ease: "power2.in",
      },
      "<",
    );

    tl.to(
      top,
      {
        yPercent: -100,
        duration: 1.2,
        ease: "power4.inOut",
      },
      "<0.15",
    );

    tl.to(
      bottom,
      {
        yPercent: 100,
        duration: 1.2,
        ease: "power4.inOut",
      },
      "<",
    );

    // Remove intro after animation
    tl.set(intro, {
      display: "none",
    });

    return () => {
      splitTitle.revert();
      tl.kill();
    };
  });

  return (
    <div ref={introRef} className="fixed inset-0 z-[9999] pointer-events-none">
      {/* Top black panel */}
      <div ref={topRef} className="absolute inset-x-0 top-0 h-1/2 bg-black" />

      {/* Bottom black panel */}
      <div
        ref={bottomRef}
        className="absolute inset-x-0 bottom-0 h-1/2 bg-black"
      />

      {/* Title */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1
          ref={textRef}
          className="font-display title text-3xl font-normal uppercase md:text-6xl lg:text-7xl text-white"
          style={{ visibility: "hidden" }}
        >
          Harvest Global
        </h1>
      </div>
    </div>
  );
}
