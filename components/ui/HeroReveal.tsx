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

    const heroTitle = document.querySelector<HTMLElement>(
      '[data-title="harvest-hero"]',
    );
    const navTitle = document.querySelector<HTMLElement>(
      '[data-title="harvest-nav"]',
    );

    if (!heroTitle || !navTitle) {
      console.warn("Hero or navbar title not found");
      return;
    }

    const navRoot = navTitle.closest("header");
    if (navRoot) gsap.set(navRoot, { visibility: "hidden" });

    const splitTitle = SplitText.create(text, {
      type: "chars",
    });
    const tl = gsap.timeline();
    gsap.set(text, {
      visibility: "visible",
      transformOrigin: "0 0",
    });

    gsap.set(splitTitle.chars, {
      opacity: 0,
      y: 20,
      filter: "blur(8px)",
    });

    gsap.set(heroTitle, {
      visibility: "hidden",
      opacity: 0,
    });

    gsap.set(navTitle, {
      visibility: "hidden",
      opacity: 0,
    });



    const toDestination = (dest: HTMLElement) => {
      const cur = text.getBoundingClientRect();

      const xT = Number(gsap.getProperty(text, "x")) || 0;
      const yT = Number(gsap.getProperty(text, "y")) || 0;
      const sx = Number(gsap.getProperty(text, "scaleX")) || 1;
      const sy = Number(gsap.getProperty(text, "scaleY")) || 1;

      const d = dest.getBoundingClientRect();

      return {
        x: d.left - cur.left + xT,
        y: d.top - cur.top + yT,
        scaleX: (d.width / cur.width) * sx,
        scaleY: (d.height / cur.height) * sy,
      };
    };

    // Builds a tween vars object whose values are resolved at start time,
    // so the destination is always measured against the live layout.
    const moveTo = (dest: HTMLElement) => ({
      x: () => toDestination(dest).x,
      y: () => toDestination(dest).y,
      scaleX: () => toDestination(dest).scaleX,
      scaleY: () => toDestination(dest).scaleY,
      duration: 1.2,
      ease: "power1.inOut",
    });

    tl.to(splitTitle.chars, {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      duration: 0.8,
      ease: "power1.inOut",
      stagger: 0.06,
    });



    tl.to(
      {},
      {
        duration: 0.8,
      },
    );


    tl.to(
      top,
      {
        yPercent: -100,
        duration: 1.2,
        ease: "power1.inOut",
      },
      ">",
    );

    tl.to(
      bottom,
      {
        yPercent: 100,
        duration: 1.2,
        ease: "power1.inOut",
      },
      "<",
    );

    tl.to(text, moveTo(heroTitle), ">");

    tl.to(
      text,
      {
        ...moveTo(navTitle),
        onComplete: () => {
          gsap.set(text, {
            visibility: "hidden",
          });

          gsap.set(navTitle, {
            visibility: "visible",
            opacity: 1,
          });

          if (navRoot) {
            gsap.set(navRoot, {
              visibility: "visible",
            });
          }

          gsap.set(intro, {
            display: "none",
          });
        },
      },
      "-=1",
    );

    tl.to(
      ".hero-content",
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      },
      "+=0.3",
    );

    return () => {
      splitTitle.revert();
      tl.kill();
    };
  });

  return (
    <div ref={introRef} className="pointer-events-none fixed inset-0 z-9999">

      <div ref={topRef} className="absolute inset-x-0 top-0 h-1/2 bg-black" />

      <div
        ref={bottomRef}
        className="absolute inset-x-0 bottom-0 h-1/2 bg-black"
      />


      <div className="absolute inset-0 flex items-center justify-center">
        <h1
          ref={textRef}
          data-title="harvest-intro"
          className="font-display text-3xl font-normal uppercase text-white md:text-6xl lg:text-7xl"
          style={{
            visibility: "hidden",
          }}
        >
          Harvest Global
        </h1>
      </div>
    </div>
  );
}
