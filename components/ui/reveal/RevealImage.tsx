"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface RevealImageProps {
  src: string;
  alt: string;
  /** Shown if the primary src fails to load (avoids broken images). */
  fallbackSrc?: string;
  fill?: boolean;
  width?: number;
  height?: number;
  sizes?: string;
  className?: string;
  wrapperClassName?: string;
  priority?: boolean;
  start?: string;
}

/**
 * Image with a subtle scroll-reveal: the element is clipped by an
 * overflow-hidden wrapper and scales from 1.1 -> 1 while fading in as it
 * enters the viewport. Respects prefers-reduced-motion.
 */
export default function RevealImage({
  src,
  alt,
  fallbackSrc,
  fill = true,
  width,
  height,
  sizes = "100vw",
  className,
  wrapperClassName,
  priority,
  start = "top 85%",
}: RevealImageProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [currentSrc, setCurrentSrc] = useState(src);

  useGSAP(
    () => {
      const wrap = wrapRef.current;
      if (!wrap) return;
      const img = wrap.querySelector("img");
      if (!img) return;

      if (
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ) {
        gsap.set(img, { opacity: 1, scale: 1 });
        return;
      }

      gsap.fromTo(
        img,
        { scale: 1.1, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: wrap,
            start,
            once: true,
          },
        },
      );
    },
    { scope: wrapRef, dependencies: [currentSrc] },
  );

  return (
    <div
      ref={wrapRef}
      className={`relative overflow-hidden ${wrapperClassName ?? ""}`}
    >
      <Image
        src={currentSrc}
        alt={alt}
        fill={fill}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        sizes={sizes}
        className={className}
        priority={priority}
        onError={() => {
          if (fallbackSrc && currentSrc !== fallbackSrc) {
            setCurrentSrc(fallbackSrc);
          }
        }}
      />
    </div>
  );
}
