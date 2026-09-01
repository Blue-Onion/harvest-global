"use client";

import Image from "next/image";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

interface TechCardProps {
  title: string;
  image: string;
  svgLink: string;
  desc: string;
}

export default function TechCard({
  title,
  image,
  desc,
}: TechCardProps) {
  const cardRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const card = cardRef.current;
      const content = contentRef.current;
      const title = titleRef.current;
      const desc = descRef.current;
      const image = imageRef.current;
      const arrow = arrowRef.current;

      if (!card || !content || !title || !desc || !image || !arrow) return;

      const enter = () => {
        gsap.killTweensOf([
          card,
          content,
          title,
          desc,
          image,
          arrow,
        ]);

        gsap.to(card, {
          flex: 2.5,
          duration: 0.6,
          ease: "power3.out",
        });

        gsap.to(content, {
          padding: "24px",
          duration: 0.5,
          ease: "power3.out",
        });

        gsap.to(title, {
          fontSize: "24px",
          duration: 0.45,
          ease: "power3.out",
        });

        gsap.to(desc, {
          opacity: 1,
          y: 0,
          duration: 0.45,
          delay: 0.08,
          ease: "power2.out",
        });

        gsap.to(arrow, {
          x: 5,
          rotate: 0,
          scale: 1.1,
          duration: 0.45,
          ease: "back.out(1.7)",
        });

        gsap.to(image, {
          height: "170px",
          duration: 0.6,
          ease: "power3.out",
        });
      };

      const leave = () => {
        gsap.killTweensOf([
          card,
          content,
          title,
          desc,
          image,
          arrow,
        ]);

        gsap.to(card, {
          flex: 1,
          duration: 0.55,
          ease: "power3.inOut",
        });

        gsap.to(content, {
          padding: "20px",
          duration: 0.5,
          ease: "power3.inOut",
        });

        gsap.to(title, {
          fontSize: "18px",
          duration: 0.4,
          ease: "power3.inOut",
        });

        gsap.to(desc, {
          opacity: 0,
          y: 8,
          duration: 0.25,
          ease: "power2.in",
        });

        gsap.to(arrow, {
          x: 0,
          rotate: -45,
          scale: 1,
          duration: 0.35,
          ease: "power2.out",
        });

        gsap.to(image, {
          height: "145px",
          duration: 0.55,
          ease: "power3.inOut",
        });
      };

      // Initial arrow state
      gsap.set(arrow, {
        rotate: -45,
      });

      card.addEventListener("mouseenter", enter);
      card.addEventListener("mouseleave", leave);

      return () => {
        card.removeEventListener("mouseenter", enter);
        card.removeEventListener("mouseleave", leave);
      };
    },
    { scope: cardRef }
  );

  return (
    <article
      ref={cardRef}
      className="
        group relative flex h-[435px]
        min-w-0 flex-1 flex-col
        overflow-hidden rounded-md
        bg-[#0D1D20] text-white
      "
    >
      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-10 flex flex-1 flex-col p-5"
      >
        {/* Arrow */}
        <div
          ref={arrowRef}
          className="
            absolute right-5 top-5
            flex h-9 w-9
            items-center justify-center
            rounded-full
            border border-white/20
            bg-white/5
            text-white
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
              d="M5 19L19 5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9 5H19V15"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Title */}
        <h3
          ref={titleRef}
          className="
            max-w-[260px]
            pr-10
            text-lg font-medium
            leading-tight tracking-tight
          "
        >
          {title}
        </h3>

        {/* Description */}
        <p
          ref={descRef}
          className="
            mt-4 max-w-[300px]
            translate-y-2
            text-sm leading-relaxed
            text-white/70
            opacity-0
          "
        >
          {desc}
        </p>
      </div>

      {/* Image */}
      <div
        ref={imageRef}
        className="
          relative h-[145px]
          w-full shrink-0 overflow-hidden
        "
      >
        <Image
          src={image}
          alt={title}
          fill
          className="
            object-cover
            transition-transform
            duration-700
            ease-out
            group-hover:scale-105
          "
        />
      </div>
    </article>
  );
}