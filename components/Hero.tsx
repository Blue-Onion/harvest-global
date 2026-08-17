"use client";

import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

gsap.registerPlugin(SplitText);

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useGSAP(
    () => {
      const hero = heroRef.current;
      const video = videoRef.current;

      if (!hero || !video) return;

      const handleMouseMove = (e: MouseEvent) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 2;
        const y = (e.clientY / window.innerHeight - 0.5) * 2;

        gsap.to(video, {
          x: x * 8,
          y: y * 5,
          duration: 1.2,
          ease: "power3.out",
          overwrite: true,
        });
      };

      window.addEventListener("mousemove", handleMouseMove);

      const heroLine = SplitText.create(".hero-line", {
        type: "chars",
      });

      const heroHighlight = SplitText.create(".highlight-tag", {
        type: "chars",
      });

      const subtitle = SplitText.create(".subtitle", {
        type: "chars",
      });

      gsap.set(".hero-content", {
        visibility: "hidden",
        opacity: 0,
      });

      gsap.set(heroHighlight.chars, {
        opacity: 0,
        y: 20,
        scale: 0.8,
      });

      gsap.set(heroLine.chars, {
        opacity: 0,
      });

      gsap.set(subtitle.chars, {
        opacity: 0,
      });

      const startHeroAnimation = () => {
        const tl = gsap.timeline();

        tl.set(".hero-content", {
          visibility: "visible",
        });

        tl.to(".hero-content", {
          opacity: 1,
          duration: 0.3,
          ease: "power2.out",
        });

        tl.to(heroHighlight.chars, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.4,
          stagger: 0.03,
          ease: "back.out(1.7)",
        });

        tl.to(heroLine.chars, {
          opacity: 1,
          duration: 0.05,
          stagger: 0.05,
          ease: "none",
        });

        tl.to(
          subtitle.chars,
          {
            opacity: 1,
            duration: 0.05,
            stagger: 0.05,
            ease: "none",
          },
          "<",
        );
      };

      window.addEventListener("intro-complete", startHeroAnimation);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("intro-complete", startHeroAnimation);

        heroLine.revert();
        heroHighlight.revert();
        subtitle.revert();
      };
    },
    {
      scope: heroRef,
    },
  );

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative isolate flex h-screen w-screen flex-col items-center justify-center"
    >
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          muted

          playsInline
          className="h-full w-full scale-[1.08] object-cover"
        >
          <source
            src="/videos/heroBg.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <h1
          data-title="harvest-hero"
          className="font-display text-4xl font-normal uppercase tracking-tight text-white md:text-6xl lg:text-7xl"
          style={{
            visibility: "hidden",
          }}
        >
          Harvest Global
        </h1>
      </div>

      <div className="hero-content mx-auto w-[80%] space-y-5 text-center">
        <h1 className="flex items-center justify-center gap-2 text-2xl font-bold tracking-wider text-white md:text-4xl lg:text-[3.3rem]">
          <span className="highlight-tag scale-y-200 text-emerald-600 md:scale-y-150 lg:scale-y-125">
            Foundational
          </span>

          <span className="hero-line scale-y-200 md:scale-y-150 lg:scale-y-125">
            Intelligence
          </span>
        </h1>

        <h1 className="flex items-center justify-center gap-2 text-2xl font-bold tracking-wider text-white md:text-4xl lg:text-[3.5rem]">
          <span className="hero-line scale-y-200 md:scale-y-150 lg:scale-y-125">
            For Earth
          </span>

          <span className="highlight-tag scale-y-200 text-orange-600 md:scale-y-150 lg:scale-y-125">
            Observation
          </span>
        </h1>

        <p className="subtitle mt-10 text-md text-muted-foreground md:text-xl">
          Sovereign GeoAI. Private AI Cloud. Edge Intelligence.
        </p>
      </div>
    </section>
  );
};

export default Hero;