"use client";
import Link from "next/link";
import AnimateButton from "./ui/AnimateButton";
import { data } from "@/data";

const SUBTITLE_ACCENTS = [
  "text-neutral-300",
  "text-orange-600",
  "text-emerald-600",
];

const Hero = () => {
  const { titleLine1, titleLine2, subtitle, primaryCta, secondaryCta } =
    data.hero;

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
      </div>

      {/* Destination reference for the traveling "Harvest Global" title.
          Hidden — it only defines the position/size the intro title lands on. */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <h1
          data-title="harvest-hero"
          className="font-display text-4xl font-normal uppercase tracking-tight text-white md:text-6xl lg:text-7xl"
          style={{ visibility: "hidden" }}
        >
          Harvest Global
        </h1>
      </div>

      <div className="hero-content relative mx-auto flex w-full max-w-5xl flex-col items-center px-5 text-center opacity-0 sm:px-8">
        <h2 className="text-4xl font-bold leading-[1.05] text-orange-600 tracking-tight  sm:text-5xl md:text-7xl">
          {titleLine1}
          <span className="mt-3 block text-emerald-600">{titleLine2}</span>
        </h2>

        <p className="mt-8 text-lg font-medium uppercase tracking-[0.2em] text-neutral-300 md:text-xl">
          {subtitle.map((line, i) => (
            <span
              key={i}
              className={SUBTITLE_ACCENTS[i % SUBTITLE_ACCENTS.length]}
            >
              {i > 0 && " "}
              {line}
            </span>
          ))}
        </p>

        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row">
          <Link href={"/credentials"}>
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
              {primaryCta}
            </AnimateButton>
          </Link>
          <Link href={"/#contact"}>
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
              {secondaryCta}
            </AnimateButton>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
