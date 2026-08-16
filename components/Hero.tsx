"use client";

import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

gsap.registerPlugin(SplitText);

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const hero = heroRef.current;
      if (!hero) return;

      const heroLine = SplitText.create(".hero-line", { type: "chars" });
      const heroHighlight = SplitText.create(".highlight-tag", {
        type: "chars",
      });
      const subtitle = SplitText.create(".subtitle", { type: "chars" });

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

        tl.set(".hero-content", { visibility: "visible" });

        tl.to(".hero-content", {
          opacity: 1,
          duration: 0.3,
          ease: "power2.out",
        });

        // Highlight: pop in (scale + y), distinct from the typing effect
        tl.to(heroHighlight.chars, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.4,
          stagger: 0.03,
          ease: "back.out(1.7)",
        });

        // hero-line and subtitle type in together
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
          "<", // start with heroLine.chars
        );
      };

      window.addEventListener("intro-complete", startHeroAnimation);

      return () => {
        window.removeEventListener("intro-complete", startHeroAnimation);
        heroLine.revert();
        heroHighlight.revert();
        subtitle.revert();
      };
    },
    { scope: heroRef },
  );

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative isolate w-screen h-screen flex flex-col justify-center items-center"
    >
      <div className="absolute inset-0 -z-10">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
        >
          <source src="/videos/earth-observation.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <h1
          data-title="harvest-hero"
          className="font-display text-4xl font-normal uppercase tracking-tight text-white md:text-6xl lg:text-7xl"
          style={{ visibility: "hidden" }}
        >
          Harvest Global
        </h1>
      </div>

   <div className="hero-content space-y-5 mx-auto text-center w-[80%]">
  <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold flex items-center justify-center gap-2 tracking-wider text-white">
    <span className="highlight-tag text-emerald-600 scale-y-200 md:scale-y-150 lg:scale-y-125">
      Foundational
    </span>

    <span className="hero-line scale-y-200 md:scale-y-150 lg:scale-y-125">
      Intelligence
    </span>
  </h1>

  <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold flex items-center justify-center gap-2 tracking-wider text-white">
    <span className="hero-line scale-y-200 md:scale-y-150 lg:scale-y-125">
      For Earth
    </span>

    <span className="highlight-tag text-orange-600 scale-y-200 md:scale-y-150 lg:scale-y-125">
      Observation
    </span>
  </h1>

  <p className="text-md md:text-xl mt-10 subtitle text-muted-foreground">
    Sovereign GeoAI. Private AI Cloud. Edge Intelligence.
  </p>
</div>
    </section>
  );
};

export default Hero;
