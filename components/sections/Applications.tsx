"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import Reveal from "@/components/ui/reveal/Reveal";
import { data } from "@/data";
import {
  Tabs,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

const applications = data.applications.items;
type App = (typeof applications)[number];

// Number of tabs visible at once in the mobile sliding window.
// The 7-tab array is walked like a viewport; exactly this many tabs are
// shown on small screens while the rest stay clipped by the track.
const MOBILE_TAB_COUNT = 4;

export default function Applications() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  // Holds the OUTGOING app while a transition is in flight.
  // While set, the base layer shows the old app and the wipe layer shows the new one.
  const [prevApp, setPrevApp] = useState<App | null>(null);

  // First index of the 4-tab mobile window over the 7-item array.
  const [mobileStartIndex, setMobileStartIndex] = useState(0);
  const mobileEndIndex = Math.min(
    mobileStartIndex + MOBILE_TAB_COUNT - 1,
    applications.length - 1
  );

  const imageNextRef = useRef<HTMLDivElement>(null);
  const textCurrentRef = useRef<HTMLDivElement>(null);
  const textNextRef = useRef<HTMLDivElement>(null);
  const tabsTrackRef = useRef<HTMLDivElement>(null);

  const active = applications[activeIndex];
  const currentApp = prevApp ?? active;

  const handleTabChange = (value: string) => {
    const nextIndex = applications.findIndex((app) => app.id === value);

    if (
      nextIndex === -1 ||
      nextIndex === activeIndex ||
      isAnimating
    ) {
      return;
    }

    // Keep the mobile window pinned to the active tab, clamped to the
    // array boundaries (window always contains the active tab, 4 wide).
    const maxWindowStart = Math.max(
      0,
      applications.length - MOBILE_TAB_COUNT
    );
    setMobileStartIndex(
      Math.min(Math.max(nextIndex, 0), maxWindowStart)
    );

    const imageNext = imageNextRef.current;
    const currentText = textCurrentRef.current;
    const nextText = textNextRef.current;

    const outgoing = applications[activeIndex];

    if (!imageNext || !currentText || !nextText) {
      setActiveIndex(nextIndex);
      return;
    }

    setIsAnimating(true);

    // Freeze the outgoing app so the base layer doesn't jump ahead,
    // then move activeIndex so the wipe layer picks up the new app.
    setPrevApp(outgoing);
    setActiveIndex(nextIndex);

    requestAnimationFrame(() => {
      // Reset starting states in case a previous timeline left things mid-animation.
      gsap.set(imageNext, { clipPath: "inset(0 0 100% 0)" });
      gsap.set(currentText, { x: 0, opacity: 1 });
      gsap.set(nextText, { x: 60, opacity: 0 });

      const tl = gsap.timeline({
        defaults: {
          ease: "power3.inOut",
        },
        onComplete: () => {
          setIsAnimating(false);
          // Collapse back to a single source of truth once the animation settles.
          setPrevApp(null);
        },
      });

      /*
       * OLD TEXT
       * Moves toward the right and fades out.
       */
      tl.to(
        currentText,
        {
          x: 60,
          opacity: 0,
          duration: 0.4,
          ease: "power2.in",
        },
        0,
      );

      /*
       * NEW IMAGE
       * Vertical wipe from top to bottom.
       */
      tl.to(
        imageNext,
        {
          clipPath: "inset(0 0 0% 0)",
          duration: 0.8,
          ease: "power2.inOut",
        },
        0,
      );

      /*
       * NEW TEXT
       * Comes from the right.
       */
      tl.to(
        nextText,
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power3.out",
        },
        0.3,
      );
    });
  };

  /*
   * MOBILE TAB WINDOW
   * Slides the tab track so that exactly 4 tabs stay visible below md.
   * On desktop the track rests at 0 and all 7 tabs share the width.
   */
  useEffect(() => {
    const track = tabsTrackRef.current;
    if (!track) return;

    const isMobile = window.innerWidth < 768;
    const target =
      isMobile
        ? -mobileStartIndex * (100 / MOBILE_TAB_COUNT)
        : 0;

    gsap.to(track, {
      xPercent: target,
      duration: 0.5,
      ease: "power3.out",
      overwrite: "auto",
    });
  }, [mobileStartIndex]);

  // If the viewport crosses into desktop while a mobile offset is applied,
  // snap the track back so all 7 tabs are visible without a lingering shift.
  useEffect(() => {
    const handleResize = () => {
      const track = tabsTrackRef.current;
      if (track && window.innerWidth >= 768) {
        gsap.set(track, { xPercent: 0 });
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      id="applications"
      className="w-full bg-[#F7FAF8] px-5 py-24 text-[#173B32] sm:px-8 md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-6xl">

        {/* HEADER */}
        <Reveal
          variant="group"
          className="max-w-3xl"
          duration={1}
        >
 

          <h2
            data-reveal="heading"
            className="text-3xl font-bold leading-[1.1] tracking-tight text-[#123C2B] sm:text-5xl md:text-6xl"
          >
            {data.applications.title.map((line, i) => (
              <span key={i}>
                {i > 0 && (
                  <br className="hidden sm:inline" />
                )}

                {i === data.applications.title.length - 1 ? (
                  <span className="text-[#2E7657]">
                    {line}
                  </span>
                ) : (
                  line
                )}
              </span>
            ))}
          </h2>

          <p
            data-reveal="text"
            className="mt-6 max-w-2xl text-base leading-relaxed text-[#60766E] sm:text-lg"
          >
            {data.applications.description}
          </p>
        </Reveal>

        {/* TABS */}
        <Tabs
          value={active.id}
          onValueChange={handleTabChange}
          className="mt-14 w-full"
        >
          {/* Clips the 7-tab track so only the mobile window is visible.
              On desktop the track is untranslated and all tabs fit. */}
          <div
            className="w-full overflow-hidden"
            data-mobile-window-end={mobileEndIndex}
          >
            <TabsList
              ref={tabsTrackRef}
              className="h-auto w-full flex justify-start overflow-hidden rounded-none border-b border-[#D5E3DC] bg-transparent p-0"
            >
              {applications.map((app, i) => (
                <TabsTrigger
                  key={app.id}
                  value={app.id}
                  disabled={isAnimating}
                  className="
                    relative h-auto
                    rounded-none
                    border-0
                    bg-transparent
                    px-5 py-4
                    font-mono text-xs uppercase
                    tracking-[0.16em]
                    text-[#60766E]
                    shadow-none

                    flex-[0_0_25%]!
                    md:flex-[0_0_14.2857%]!

                    transition-colors duration-200

                    hover:text-[#235738]

                    data-[state=active]:bg-transparent
                    data-[state=active]:text-[#235738]
                    data-[state=active]:shadow-none

                    after:absolute
                    after:bottom-0
                    after:left-0
                    after:h-0.5
                    after:w-full
                    after:origin-left
                    after:scale-x-0
                    after:bg-[#2E7657]
                    after:transition-transform
                    after:duration-300

                    data-[state=active]:after:scale-x-100
                  "
                >
                  <span className="mr-2 text-[10px] opacity-50">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  {app.shortLabel}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
        </Tabs>

        {/* APPLICATION DISPLAY */}
        <div className="mt-8 grid overflow-hidden rounded-[28px] border border-[#D5E3DC] bg-[#E7F1EB] md:grid-cols-2">

          {/* IMAGE */}
          <div className="relative min-h-[320px] overflow-hidden md:min-h-[560px]">

            {/* Base layer = OUTGOING image */}
            <Image
              key={`base-${currentApp.id}`}
              src={currentApp.image}
              alt={currentApp.alt}
              fill
              draggable={false}
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />

            {/* Wipe layer = INCOMING image, revealed top -> bottom */}
            <div
              ref={imageNextRef}
              className="absolute inset-0 z-10 overflow-hidden"
              style={{
                clipPath: "inset(0 0 100% 0)",
              }}
            >
              <Image
                key={`next-${active.id}`}
                src={active.image}
                alt={active.alt}
                fill
                draggable={false}
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>

            {/* Green overlay */}
            <div className="pointer-events-none absolute inset-0 z-20 bg-[#123C2B]/10" />

            {/* Number */}
            <div className="absolute left-6 top-6 z-30 rounded-full bg-[#123C2B] px-4 py-2 font-mono text-xs tracking-[0.2em] text-[#F7FAF8]">
              {String(activeIndex + 1).padStart(2, "0")} /{" "}
              {String(applications.length).padStart(2, "0")}
            </div>
          </div>

          {/* CONTENT */}
          <div className="relative flex min-h-[400px] flex-col justify-between overflow-hidden p-7 sm:p-10 md:min-h-[560px] md:p-12">

            {/* Current (outgoing) text */}
            <div
              ref={textCurrentRef}
              className="absolute inset-0 flex flex-col justify-between p-7 sm:p-10 md:p-12"
            >
              <ApplicationText app={currentApp} />
            </div>

            {/* Next (incoming) text */}
            <div
              ref={textNextRef}
              className="absolute inset-0 flex flex-col justify-between p-7 opacity-0 sm:p-10 md:p-12"
            >
              <ApplicationText app={active} />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

function ApplicationText({
  app,
}: {
  app: App;
}) {
  return (
    <>
      <div>
        <div className="flex items-center justify-between gap-4">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#2E7657]">
            {app.shortLabel}
          </span>

          <span className="rounded-full border border-[#2E7657]/20 bg-[#F7FAF8] px-3 py-1.5 font-mono text-[9px] uppercase tracking-widest text-[#60766E]">
            {app.tag}
          </span>
        </div>

        <h3 className="mt-8 text-4xl font-bold leading-[1.05] tracking-tight text-[#123C2B] sm:text-5xl">
          {app.label}
        </h3>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-[#60766E] md:text-lg">
          {app.description}
        </p>
      </div>

      <div className="border-t border-[#D5E3DC] pt-5">
        <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-[#60766E]/70 sm:text-[10px]">
          {app.coords}
        </span>
      </div>
    </>
  );
}