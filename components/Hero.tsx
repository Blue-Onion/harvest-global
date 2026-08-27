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
      className="relative isolate h-screen w mx-auto containerflex-col"
    >
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          muted

          playsInline
          className="h-full w-full ro scale-[1.08] object-cover"
        >
          <source
            src="/videos/earth-hori.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <h1
          data-title="harvest-hero"
          className="text-4xl font-normal uppercase tracking-tight text-white md:text-6xl lg:text-7xl"
          style={{
            visibility: "hidden",
          }}
        >
          Harvest Global
        </h1>
      </div>

      <div className="hero-content flex flex-col  container mx-auto py-30  justify-end h-full  space-y-2 ">
        <h1 className=" gap-2 tracking-wider text-white text-8xl">
          <span className="highlight-tag  font-extrabold">
            Amplify
          </span>

          
        </h1>

        <h1 className=" gap-2 text-2xl  tracking-wider text-white md:text-4xl lg:text-[3.5rem]">
         

          <span className="highlight-tag  text-8xl font-extrabold">
            Observation
          </span>
        </h1>

        <p className="subtitle mt-6 text-md text-muted-foreground md:text-xl">
          Sovereign GeoAI. Private AI Cloud. Edge Intelligence.
        </p>
      </div>
    </section>
  );
};

export default Hero;