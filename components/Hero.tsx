"use client";
import Link from "next/link";
import AnimateButton from "./ui/AnimateButton";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative isolate w-screen h-screen flex flex-col justify-center items-center "
    >
      <div className="absolute inset-0 -z-10">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
        >
          <source src="/videos/bg.mp4" type="video/mp4" />
        </video>

        {/* <div className="absolute inset-0 bg-black/60" /> */}

        {/* <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black" /> */}
      </div>
      <div className="relative mx-auto flex w-full max-w-5xl flex-col items-center px-5 text-center sm:px-8">
        <h2 className="text-4xl font-bold leading-[1.05] text-orange-600 tracking-tight  sm:text-5xl md:text-7xl">
          Build the next generation
          <span className="mt-3 block text-emerald-600">
            of Earth intelligence.
          </span>
        </h2>

        <p className="mt-8 text-lg font-medium uppercase tracking-[0.2em] text-neutral-300 md:text-xl">
          Research. <span className="text-orange-600">Collaborate.</span>{" "}
          <span className="text-emerald-600">Scale.</span>
        </p>

        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row">
          <AnimateButton
            size="lg"
            radius={18}
            tint="#F97316"
            tintOpacity={0}
            blur={0}
            textColor="#f5f5f5"
            lineColor="#F97316"
            baseColor="#F97316"
            intensity={1}
            shineSize={10}
            shineFade={40}
            thickness={1}
            speed={0.35}
            followMouse
            proximity={250}
            autoAnimate={false}
          >
            Get Started
          </AnimateButton>
          <AnimateButton
            size="lg"
            radius={18}
            tint="#10B981"
            tintOpacity={0}
            blur={0}
            textColor="#f5f5f5"
            lineColor="#10B981"
            baseColor="#10B981"
            intensity={1}
            shineSize={10}
            shineFade={40}
            thickness={1}
            speed={0.35}
            followMouse
            proximity={250}
            autoAnimate={false}
          >
            Contact Us
          </AnimateButton>
        </div>
      </div>
    </section>
  );
};

export default Hero;
