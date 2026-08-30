"use client";

import React, { useLayoutEffect, useRef, useCallback } from "react";
import type { ReactNode } from "react";
import Lenis from "lenis";

export interface ScrollStackItemProps {
  itemClassName?: string;
  children: ReactNode;
}

export const ScrollStackItem: React.FC<ScrollStackItemProps> = ({
  children,
  itemClassName = "",
}) => (
  <div
    className={`scroll-stack-card relative w-full h-[620px] my-0 rounded-md overflow-hidden box-border ${itemClassName}`.trim()}
    style={{
      backfaceVisibility: "hidden",
      WebkitBackfaceVisibility: "hidden",
      transform: "translateZ(0)",
    }}
  >
    {children}
  </div>
);

interface ScrollStackProps {
  className?: string;
  children: ReactNode;
  itemDistance?: number;
  itemStackDistance?: number;
  stackPosition?: string;
  useWindowScroll?: boolean;
  onStackComplete?: () => void;
}

const MAX_BLUR = 16;

const clamp = (v: number, a: number, b: number): number =>
  v < a ? a : v > b ? b : v;

const smoothstep = (edge0: number, edge1: number, x: number): number => {
  const t = clamp((x - edge0) / (edge1 - edge0 || 1e-6), 0, 1);
  return t * t * (3 - 2 * t);
};

const ScrollStack: React.FC<ScrollStackProps> = ({
  children,
  className = "",
  itemDistance = 100,
  itemStackDistance = 18,
  stackPosition = "10%",
  useWindowScroll = true,
  onStackComplete,
}) => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const lenisRef = useRef<Lenis | null>(null);

  const cardsRef = useRef<HTMLElement[]>([]);
  const stackCompletedRef = useRef(false);

  const parsePercentage = useCallback(
    (value: string | number, height: number) => {
      if (typeof value === "string" && value.includes("%")) {
        return (parseFloat(value) / 100) * height;
      }

      return Number(value);
    },
    [],
  );

  /*
   * Cards are pinned purely by native `position: sticky`, so the only
   * thing left for JS is to report when the last card has landed.
   */
  const checkStackComplete = useCallback(() => {
    const cards = cardsRef.current;
    const lastCard = cards[cards.length - 1];
    if (!lastCard) return;

    const viewportHeight = useWindowScroll
      ? window.innerHeight
      : (scrollerRef.current?.clientHeight ?? window.innerHeight);

    const stackTop = parsePercentage(stackPosition, viewportHeight);
    const lastPinTop = stackTop + (cards.length - 1) * itemStackDistance;

    const reached = lastCard.getBoundingClientRect().top <= lastPinTop;

    if (reached && !stackCompletedRef.current) {
      stackCompletedRef.current = true;
      onStackComplete?.();
    }

    if (!reached) {
      stackCompletedRef.current = false;
    }
  }, [
    itemStackDistance,
    onStackComplete,
    parsePercentage,
    stackPosition,
    useWindowScroll,
  ]);

  /*
   * Smooth blur + fade for the underlying (covered) card.
   *
   * For every card `i` (except the last), we measure the next card's
   * viewport position (`getBoundingClientRect().top`) and derive a
   * normalized progress in [0, 1]:
   *   0 = next card hasn't started covering the current card
   *   1 = next card has reached the current card's stack position
   * The current card is then blurred and faded accordingly. No transforms
   * are applied here, so it never fights the native sticky pinning.
   */
  const updateCardEffects = useCallback(() => {
    const cards = cardsRef.current;
    if (cards.length < 2) return;

    const viewportHeight = useWindowScroll
      ? window.innerHeight
      : (scrollerRef.current?.clientHeight ?? window.innerHeight);

    for (let i = 0; i < cards.length - 1; i++) {
      const card = cards[i];
      const nextCard = cards[i + 1];

      const currentTop = card.getBoundingClientRect().top;
      const nextTop = nextCard.getBoundingClientRect().top;

      const cardHeight = card.offsetHeight || 1;
      // Distance the next card travels from "just touching the current
      // card's bottom" to its own pinned position (current card's stack).
      const range = Math.max(1, cardHeight - itemStackDistance);

      // progress = 0 when nextTop is at (currentTop + cardHeight), i.e. the
      // next card has not yet overlapped the current one; progress = 1 once
      // the next card is pinned at the current card's stack position.
      const raw = (currentTop + cardHeight - nextTop) / range;
      const progress = smoothstep(0, 1, raw);

      const blur = progress * MAX_BLUR;
      const opacity = 1 - progress;

      card.style.filter = blur > 0.01 ? `blur(${blur.toFixed(2)}px)` : "none";
      card.style.opacity = opacity.toFixed(3);
    }
  }, [itemStackDistance, useWindowScroll]);

  const handleScroll = useCallback(() => {
    checkStackComplete();
    updateCardEffects();
  }, [checkStackComplete, updateCardEffects]);

  const setupLenis = useCallback(() => {
    const lenis = new Lenis({
      duration: 0.8,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.5,
      lerp: 0.08,
      syncTouch: false,
    });

    lenis.on("scroll", handleScroll);

    const raf = (time: number) => {
      lenis.raf(time);
      // Drive effects from the existing Lenis loop so they stay in sync with
      // smooth-scroll momentum without spawning an extra animation frame.
      updateCardEffects();
      animationFrameRef.current = requestAnimationFrame(raf);
    };

    animationFrameRef.current = requestAnimationFrame(raf);

    lenisRef.current = lenis;

    return lenis;
  }, [handleScroll, updateCardEffects]);

  useLayoutEffect(() => {
    const cards = Array.from(
      useWindowScroll
        ? document.querySelectorAll(".scroll-stack-card")
        : (scrollerRef.current?.querySelectorAll(".scroll-stack-card") ?? []),
    ) as HTMLElement[];

    cardsRef.current = cards;

    cards.forEach((card, index) => {
      /*
       * The gap between cards controls how much of the
       * previous card remains visible before the next one
       * comes over it.
       */
      if (index < cards.length - 1) {
        card.style.marginBottom = `${itemDistance}px`;
      }

      card.style.willChange = "transform, filter, opacity";
      card.style.backfaceVisibility = "hidden";
      card.style.webkitBackfaceVisibility = "hidden";

      /*
       * Native sticky does the pinning - no JS transform that fights
       * the browser on every scroll frame (the source of the flicker).
       *
       * Each card pins at its own stack level:
       *   Card 01 -> top: 10%
       *   Card 02 -> top: calc(10% + 18px)
       *   Card 03 -> top: calc(10% + 36px)
       */
      card.style.position = "sticky";
      card.style.top =
        index === 0
          ? stackPosition
          : `calc(${stackPosition} + ${index * itemStackDistance}px)`;
      card.style.zIndex = String(index + 1);
    });

    const lenis = setupLenis();

    checkStackComplete();
    updateCardEffects();

    const resizeObserver = new ResizeObserver(() => {
      checkStackComplete();
      updateCardEffects();
    });

    cards.forEach((card) => resizeObserver.observe(card));

    window.addEventListener("resize", handleScroll);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("resize", handleScroll);
      window.removeEventListener("scroll", handleScroll);

      resizeObserver.disconnect();

      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }

      lenis?.destroy();

      lenisRef.current = null;
      cardsRef.current = [];
      stackCompletedRef.current = false;
    };
  }, [
    itemDistance,
    itemStackDistance,
    stackPosition,
    setupLenis,
    checkStackComplete,
    handleScroll,
    updateCardEffects,
    useWindowScroll,
  ]);

  return (
    <div
      ref={scrollerRef}
      className={`relative w-full overflow-x-visible ${className}`.trim()}
    >
      <div className="scroll-stack-inner relative w-full pt-[12vh] pb-[30vh]">
        {children}

        <div className="scroll-stack-end h-px w-full" />
      </div>
    </div>
  );
};

export default ScrollStack;
