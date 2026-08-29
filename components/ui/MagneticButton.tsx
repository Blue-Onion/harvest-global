"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
}

const MagneticButton = ({
  children,
  className = "",
}: MagneticButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const innerRef = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const button = buttonRef.current;
      const inner = innerRef.current;

      if (!button || !inner) return;

      const xTo = gsap.quickTo(button, "x", {
        duration: 0.5,
        ease: "power3.out",
      });

      const yTo = gsap.quickTo(button, "y", {
        duration: 0.5,
        ease: "power3.out",
      });

      const handleEnter = () => {
        gsap.to(button, {
          scale: 1.08,
          duration: 0.4,
          ease: "power3.out",
        });

        gsap.to(inner, {
          scale: 1.05,
          duration: 0.4,
          ease: "power3.out",
        });
      };

      const handleMove = (e: MouseEvent) => {
        const rect = button.getBoundingClientRect();

        const x = e.clientX - (rect.left + rect.width / 2);
        const y = e.clientY - (rect.top + rect.height / 2);

        xTo(x * 0.35);
        yTo(y * 0.35);
      };

      const handleLeave = () => {
        gsap.to(button, {
          x: 0,
          y: 0,
          scale: 1,
          duration: 0.7,
          ease: "elastic.out(1, 0.4)",
        });

        gsap.to(inner, {
          scale: 1,
          duration: 0.5,
          ease: "power3.out",
        });
      };

      button.addEventListener("mouseenter", handleEnter);
      button.addEventListener("mousemove", handleMove);
      button.addEventListener("mouseleave", handleLeave);

      return () => {
        button.removeEventListener("mouseenter", handleEnter);
        button.removeEventListener("mousemove", handleMove);
        button.removeEventListener("mouseleave", handleLeave);
      };
    },
    {
      scope: buttonRef,
    },
  );

  return (
    <button
      ref={buttonRef}
      className={`
        relative
        flex
        h-16
        min-w-40
        items-center
        justify-center
        overflow-hidden
        rounded-full
        bg-white
        px-8
        text-black
        ${className}
      `}
    >
      <span
        ref={innerRef}
        className="relative z-10 font-medium"
      >
        {children}
      </span>
    </button>
  );
};

export default MagneticButton;
