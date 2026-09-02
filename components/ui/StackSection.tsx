"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { ReactNode, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

interface StackSectionsProps {
  children: ReactNode;
}

const StackSections = ({ children }: StackSectionsProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const sections = gsap.utils.toArray<HTMLElement>(".stack-section");

      sections.forEach((section) => {
        ScrollTrigger.create({
          trigger: section,
          start: "top top",
          end: "bottom top",
          pin: true,
          pinSpacing: false,
        });
      });

      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    },
    {
      scope: containerRef,
    }
  );

  return (
    <div ref={containerRef}>
      {React.Children.map(children, (child, index) => (
        <div
          className="stack-section relative min-h-screen"
          style={{
            zIndex: index + 1,
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
};

export default StackSections;