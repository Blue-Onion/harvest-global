"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface AccordionItem {
  image: string;
  title: string;
  desc: string;
}

interface AccordionGalleryProps {
  items: AccordionItem[];
  height?: number;
}

export default function AccordionGallery({
  items,
  height = 435,
}: AccordionGalleryProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const activeIndex = useRef(0);

const animateTo = (index: number) => {
  const container = containerRef.current;
  if (!container || !items.length) return;

  activeIndex.current = index;

  const cards = Array.from(
    container.querySelectorAll<HTMLElement>(".accordion-card")
  );

  const tl = gsap.timeline();

  cards.forEach((card, i) => {
    const image = card.querySelector<HTMLElement>(".card-image");
    const smallTitle = card.querySelector<HTMLElement>(".collapsed-title");
    const content = card.querySelector<HTMLElement>(".expanded-content");
    const title = card.querySelector<HTMLElement>(".card-title");
    const desc = card.querySelector<HTMLElement>(".card-desc");
    const arrow = card.querySelector<HTMLElement>(".card-arrow");

    if (!image || !smallTitle || !content || !title || !desc) return;

    const isActive = i === index;

    gsap.killTweensOf([card, image, smallTitle, content, title, desc, arrow]);

    if (isActive) {
      // EXPAND CARD
      tl.to(card, { flexGrow: 4.5, duration: 0.65, ease: "power3.out" }, 0);

      // Full colour image
      tl.to(image, { filter: "grayscale(0%)", scale: 1, duration: 0.7, ease: "power3.out" }, 0);

      // Hide collapsed title
      tl.to(smallTitle, { opacity: 0, y: -10, duration: 0.25, ease: "power2.out" }, 0);

      // Content ready in sync with card expand — no delay, no wait
      tl.to(content, { opacity: 1, duration: 0.35, ease: "power2.out" }, 0.45);
      tl.to(title, { opacity: 1, y: 0, duration: 0.4, ease: "power3.out" }, 0);
      tl.to(desc, { opacity: 1, y: 0, duration: 0.4, ease: "power3.out" }, 0);

      if (arrow) {
        tl.to(arrow, { opacity: 1, x: 0, rotate: 0, duration: 0.35, ease: "power3.out" }, 0);
      }
    } else {
      // COLLAPSE CARD
      tl.to(card, { flexGrow: 1, duration: 0.6, ease: "power3.inOut" }, 0);

      tl.to(image, { filter: "grayscale(100%)", scale: 1.08, duration: 0.6, ease: "power3.inOut" }, 0);

      tl.to(smallTitle, { opacity: 1, y: 0, duration: 0.35, ease: "power2.out" }, 0.1);

      tl.to(content, { opacity: 0, duration: 0.2, ease: "power2.in" }, 0);
      tl.to(title, { opacity: 0, y: 15, duration: 0.25, ease: "power2.in" }, 0);
      tl.to(desc, { opacity: 0, y: 15, duration: 0.2, ease: "power2.in" }, 0);

      if (arrow) {
        tl.to(arrow, { opacity: 0, x: -8, rotate: -45, duration: 0.2, ease: "power2.in" }, 0);
      }
    }
  });
};

  // First card open by default
  useEffect(() => {
    const ctx = gsap.context(() => {
      const container = containerRef.current;

      if (!container) return;

      const cards = Array.from(
        container.querySelectorAll<HTMLElement>(".accordion-card")
      );

      cards.forEach((card, i) => {
        const image = card.querySelector<HTMLElement>(".card-image");
        const smallTitle =
          card.querySelector<HTMLElement>(".collapsed-title");
        const content =
          card.querySelector<HTMLElement>(".expanded-content");
        const title = card.querySelector<HTMLElement>(".card-title");
        const desc = card.querySelector<HTMLElement>(".card-desc");
        const arrow = card.querySelector<HTMLElement>(".card-arrow");

        if (!image || !smallTitle || !content || !title || !desc) return;

        if (i === 0) {
          gsap.set(card, {
            flexGrow: 4.5,
          });

          gsap.set(image, {
            filter: "grayscale(0%)",
            scale: 1,
          });

          gsap.set(smallTitle, {
            opacity: 0,
            y: -10,
          });

          gsap.set(content, {
            opacity: 1,
          });

          gsap.set(title, {
            opacity: 1,
            y: 0,
          });

          gsap.set(desc, {
            opacity: 1,
            y: 0,
          });

          if (arrow) {
            gsap.set(arrow, {
              opacity: 1,
              x: 0,
              rotate: 0,
            });
          }
        } else {
          gsap.set(card, {
            flexGrow: 1,
          });

          gsap.set(image, {
            filter: "grayscale(100%)",
            scale: 1.08,
          });

          gsap.set(smallTitle, {
            opacity: 1,
            y: 0,
          });

          gsap.set(content, {
            opacity: 0,
          });

          gsap.set(title, {
            opacity: 0,
            y: 15,
          });

          gsap.set(desc, {
            opacity: 0,
            y: 15,
          });

          if (arrow) {
            gsap.set(arrow, {
              opacity: 0,
              x: -8,
              rotate: -45,
            });
          }
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex w-full gap-2 overflow-hidden"
      style={{ height }}
      onMouseLeave={() => animateTo(0)}
    >
      {items.map((item, index) => (
        <article
          key={item.title}
          className="
            accordion-card
            group
            relative
            min-w-0
            flex-1
            cursor-pointer
            overflow-hidden
            rounded-md
            bg-[#0D1D20]
          "
          onMouseEnter={() => animateTo(index)}
        >
          {/* IMAGE */}
          <div className="absolute inset-0 overflow-hidden">
            <img
              src={item.image}
              alt={item.title}
              className="
                card-image
                absolute
                inset-0
                h-full
                w-full
                scale-[1.08]
                object-cover
                grayscale
              "
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/20" />

            {/* Bottom gradient */}
            <div
              className="
                absolute
                inset-x-0
                bottom-0
                h-[65%]
                bg-gradient-to-t
                from-black/90
                via-black/45
                to-transparent
              "
            />
          </div>

          {/* COLLAPSED TITLE */}
          <div
            className="
              collapsed-title
              absolute
              bottom-5
              left-5
              z-10
              opacity-100
            "
          >
            <span
              className="
                block
                text-xs
                font-medium
                uppercase
                tracking-[0.15em]
                text-white/90
                [writing-mode:vertical-rl]
                rotate-180
              "
            >
              {item.title}
            </span>
          </div>

          {/* EXPANDED CONTENT */}
          <div
            className="
              expanded-content
              absolute
              inset-x-7
              bottom-7
              z-20
              opacity-0
            "
          >
            {/* TITLE FIRST */}
            <h3
              className="
                card-title
                max-w-[650px]
                translate-y-[15px]
                text-3xl
                font-semibold
                leading-[0.95]
                tracking-tight
                text-white
                opacity-0
                md:text-4xl
                lg:text-5xl
              "
            >
              {item.title}
            </h3>

            {/* DESCRIPTION BELOW TITLE */}
            <p
              className="
                card-desc
                mt-5
                max-w-[520px]
                translate-y-[15px]
                text-sm
                leading-6
                text-white/75
                opacity-0
                md:text-base
              "
            >
              {item.desc}
            </p>
          </div>

          {/* ARROW */}
          <div
            className="
              card-arrow
              absolute
              right-5
              top-5
              z-30
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              border
              border-white/30
              bg-black/20
              text-white
              opacity-0
              backdrop-blur-sm
            "
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-4 w-4"
            >
              <path
                d="M5 12h14"
                strokeLinecap="round"
              />

              <path
                d="m13 6 6 6-6 6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </article>
      ))}
    </div>
  );
}