"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Intro() {
  const introRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const intro = introRef.current;
    const text = textRef.current;

    if (!intro || !text) return;

    const tl = gsap.timeline();

    // Text reveal
    tl.fromTo(
      text,
      {
        opacity: 0,
        filter: "blur(10px)",
        y: 25,
        letterSpacing: "0.35em",
      },
      {
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
        letterSpacing: "0.12em",
        duration: 1.1,
        ease: "power3.out",
      }
    );

    // Give the user time to read
    tl.to({}, { duration: 0.9 });

    // Reveal the website
    tl.to(intro, {
      opacity: 0,
      duration: 1.2,
      ease: "power4.inOut",
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div
      ref={introRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black text-white"
    >
      <h1
        ref={textRef}
        className="font-display text-3xl font-normal uppercase md:text-6xl lg:text-7xl"
      >
        Harvest Global
      </h1>
    </div>
  );
}