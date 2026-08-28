"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

function mulberry32(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const random = mulberry32(2024);

const stars = Array.from({ length: 120 }, (_, i) => ({
  id: i,
  left: random() * 100,
  top: random() * 100,
  size: random() * 2 + 0.5,
  opacity: random() * 0.5 + 0.2,
}));
export default function Intro() {
  const introRef = useRef<HTMLDivElement>(null);
  const topRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLImageElement>(null);

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

    const tl = gsap.timeline();
    gsap.set(text, {
      visibility: "visible",
      transformOrigin: "0 0",
      opacity: 1,
      filter: "blur(10px)",
      scale: 0.96,
      clipPath: "inset(0 100% 0 0)",
    });

    gsap.set(heroTitle, {
      visibility: "hidden",
      opacity: 0,
    });

    gsap.set(navTitle, {
      visibility: "hidden",
      opacity: 0,
    });

    // Hero section content stays hidden until the reveal overlay finishes.
    gsap.set(".hero-content", {
      visibility: "hidden",
      opacity: 0,
      y: 30,
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

    // Left-to-right typewriter reveal of the SVG wordmark.
    tl.to(text, {
      clipPath: "inset(0 0% 0 0)",
      opacity: 1,
      filter: "blur(0px)",
      scale: 1,
      duration: 1.6,
      ease: "none",
    });

    tl.to(
      {},
      {
        duration: 0.6,
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

    tl.call(() => {
      window.dispatchEvent(new CustomEvent("intro-complete"));
    });

    return () => {
      tl.kill();
    };
  });

  return (
    <div ref={introRef} className="pointer-events-none fixed inset-0 z-9999">
      <div ref={topRef} className="pointer-events-none absolute inset-0 overflow-hidden bg-black">
        
      </div>

      <div
        ref={bottomRef}
        className="absolute inset-x-0 bottom-0 h-1/2 bg-black"
      />

      <div className="absolute inset-0 flex items-center justify-center">
        <img
          ref={textRef}
          data-title="harvest-intro"
          src="/svg/logo.svg"
          alt="Harvest Global"
          className="w-80 md:w-[32rem] lg:w-[44rem]"
          style={{
            visibility: "hidden",
          }}
        />
      </div>
    </div>
  );
}
