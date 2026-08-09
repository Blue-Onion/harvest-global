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
    className={`scroll-stack-card relative w-full h-[620px] my-0 rounded-[28px] overflow-hidden box-border ${itemClassName}`.trim()}
    style={{
      backfaceVisibility: "hidden",
      WebkitBackfaceVisibility: "hidden",
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
  const lastScrollRef = useRef(0);
  const tickingRef = useRef(false);
  const stackCompletedRef = useRef(false);

  const parsePercentage = useCallback(
    (value: string | number, height: number) => {
      if (typeof value === "string" && value.includes("%")) {
        return (parseFloat(value) / 100) * height;
      }

      return Number(value);
    },
    []
  );

  const getScrollTop = useCallback(() => {
    return useWindowScroll
      ? window.scrollY
      : scrollerRef.current?.scrollTop ?? 0;
  }, [useWindowScroll]);

  const updateCards = useCallback(() => {
    const cards = cardsRef.current;

    if (!cards.length) return;

    const scrollTop = getScrollTop();

    if (Math.abs(scrollTop - lastScrollRef.current) < 0.5) {
      tickingRef.current = false;
      return;
    }

    lastScrollRef.current = scrollTop;

    const viewportHeight = useWindowScroll
      ? window.innerHeight
      : scrollerRef.current?.clientHeight ?? window.innerHeight;

    const stackTop = parsePercentage(stackPosition, viewportHeight);

    cards.forEach((card, index) => {
      const rect = card.getBoundingClientRect();

      const cardTop = useWindowScroll
        ? rect.top + window.scrollY
        : card.offsetTop;

      /*
       * Once the card reaches the stack position,
       * keep it there.
       */
      const pinPoint = cardTop - stackTop;

      const passed = scrollTop - pinPoint;

      if (passed <= 0) {
        card.style.transform = "translate3d(0, 0, 0)";
        return;
      }

      /*
       * Each previous card sits slightly lower.
       *
       * Card 01 -> 0px
       * Card 02 -> 18px
       * Card 03 -> 36px
       */
      const stackOffset = index * itemStackDistance;

      const translateY = Math.min(
        passed + stackOffset,
        stackOffset
      );

      card.style.transform = `translate3d(0, ${translateY}px, 0)`;
    });

    /*
     * Last card reached the stack.
     */
    const lastCard = cards[cards.length - 1];

    if (lastCard) {
      const rect = lastCard.getBoundingClientRect();

      if (rect.top <= stackTop && !stackCompletedRef.current) {
        stackCompletedRef.current = true;
        onStackComplete?.();
      }

      if (rect.top > stackTop) {
        stackCompletedRef.current = false;
      }
    }

    tickingRef.current = false;
  }, [
    getScrollTop,
    itemStackDistance,
    onStackComplete,
    parsePercentage,
    stackPosition,
    useWindowScroll,
  ]);

  const handleScroll = useCallback(() => {
    if (tickingRef.current) return;

    tickingRef.current = true;

    requestAnimationFrame(updateCards);
  }, [updateCards]);

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
      animationFrameRef.current = requestAnimationFrame(raf);
    };

    animationFrameRef.current = requestAnimationFrame(raf);

    lenisRef.current = lenis;

    return lenis;
  }, [handleScroll]);

  useLayoutEffect(() => {
    const cards = Array.from(
      useWindowScroll
        ? document.querySelectorAll(".scroll-stack-card")
        : (scrollerRef.current?.querySelectorAll(".scroll-stack-card") ?? [])
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

      card.style.willChange = "transform";
      card.style.transform = "translate3d(0, 0, 0)";
      card.style.backfaceVisibility = "hidden";
      card.style.webkitBackfaceVisibility = "hidden";
    });

    /*
     * Make cards sticky.
     *
     * This is the important part:
     * the browser handles the pinning instead of us
     * continuously calculating large translateY values.
     */
    cards.forEach((card) => {
      card.style.position = "sticky";
      card.style.top = stackPosition;
    });

    const lenis = setupLenis();

    updateCards();

    const resizeObserver = new ResizeObserver(() => {
      updateCards();
    });

    cards.forEach((card) => resizeObserver.observe(card));

    window.addEventListener("resize", updateCards);

    return () => {
      window.removeEventListener("resize", updateCards);

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
    updateCards,
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