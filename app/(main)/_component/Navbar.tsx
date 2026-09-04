"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

gsap.registerPlugin(useGSAP);

function Navbar() {
  const navLinks = [
    { title: "Home", href: "/" },
    { title: "Technology", href: "/#technology" },
    { title: "About", href: "/about-us" },
    { title: "Media", href: "/credentials" },


  ];

  const underlineRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const navRef = useRef<HTMLElement | null>(null);
  const buttonRef = useRef<HTMLDivElement | null>(null);
  const flairRef = useRef<HTMLDivElement | null>(null);
  const marqueeRef = useRef<HTMLDivElement | null>(null);
  const marqueeTween = useRef<gsap.core.Tween | null>(null);

  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const lineTopRef = useRef<HTMLSpanElement | null>(null);
  const lineMiddleRef = useRef<HTMLSpanElement | null>(null);
  const lineBottomRef = useRef<HTMLSpanElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // GSAP animation for mobile menu open/close
  useGSAP(
    () => {
      if (!menuRef.current) return;

      if (isOpen) {
        // Animate hamburger to X
        gsap.to(lineTopRef.current, {
          y: 8,
          rotate: 45,
          duration: 0.35,
          ease: "power2.inOut",
        });
        gsap.to(lineMiddleRef.current, {
          opacity: 0,
          scaleX: 0,
          duration: 0.25,
          ease: "power2.inOut",
        });
        gsap.to(lineBottomRef.current, {
          y: -8,
          rotate: -45,
          duration: 0.35,
          ease: "power2.inOut",
        });

        // Circle overlay reveal from top left
        gsap.to(menuRef.current, {
          clipPath: "circle(150% at 2.5rem 2.5rem)",
          duration: 0.8,
          ease: "power3.inOut",
        });

        // Stagger links entrance
        gsap.fromTo(
          menuRef.current.querySelectorAll(".mobile-nav-link"),
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.08,
            ease: "power3.out",
            delay: 0.2,
          }
        );
      } else {
        // Animate X back to hamburger
        gsap.to(lineTopRef.current, {
          y: 0,
          rotate: 0,
          duration: 0.35,
          ease: "power2.inOut",
        });
        gsap.to(lineMiddleRef.current, {
          opacity: 1,
          scaleX: 1,
          duration: 0.35,
          ease: "power2.inOut",
        });
        gsap.to(lineBottomRef.current, {
          y: 0,
          rotate: 0,
          duration: 0.35,
          ease: "power2.inOut",
        });

        // Close circle overlay
        gsap.to(menuRef.current, {
          clipPath: "circle(0% at 2.5rem 2.5rem)",
          duration: 0.6,
          ease: "power3.inOut",
        });
      }
    },
    { dependencies: [isOpen] }
  );

  const { contextSafe } = useGSAP(
    () => {
      gsap.fromTo(
        navRef.current,
        { y: -24, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
      );

      if (marqueeRef.current) {
        marqueeTween.current = gsap.to(marqueeRef.current, {
          xPercent: -50,
          duration: 3,
          ease: "none",
          repeat: -1,
          paused: true,
        });
      }

      // --- magnetic flair effect ---
      const button = buttonRef.current;
      const flair = flairRef.current;
      if (!button || !flair) return;

      const xSet = gsap.quickSetter(flair, "xPercent");
      const ySet = gsap.quickSetter(flair, "yPercent");

      const getXY = (e: MouseEvent) => {
        const { left, top, width, height } = button.getBoundingClientRect();
        const x = ((e.clientX - left) / width) * 100;
        const y = ((e.clientY - top) / height) * 100;
        return { x, y };
      };

      const handleMouseEnter = (e: MouseEvent) => {
        const { x, y } = getXY(e);
        xSet(x);
        ySet(y);
        gsap.to(flair, { scale: 1, duration: 0.4, ease: "power2.out" });
        marqueeTween.current?.play();
      };

      const handleMouseLeave = (e: MouseEvent) => {
        const { x, y } = getXY(e);
        gsap.killTweensOf(flair);
        gsap.to(flair, {
          xPercent: x > 90 ? x + 20 : x < 10 ? x - 20 : x,
          yPercent: y > 90 ? y + 20 : y < 10 ? y - 20 : y,
          scale: 0,
          duration: 0.3,
          ease: "power2.out",
        });
        marqueeTween.current?.pause();
        if (marqueeRef.current) {
          gsap.to(marqueeRef.current, {
            xPercent: 0,
            duration: 0.3,
            ease: "power2.out",
            onComplete: () => marqueeTween.current?.pause(0),
          });
        }
      };

      const handleMouseMove = (e: MouseEvent) => {
        const { x, y } = getXY(e);
        gsap.to(flair, {
          xPercent: x,
          yPercent: y,
          duration: 0.4,
          ease: "power2",
        });
      };

      button.addEventListener("mouseenter", handleMouseEnter);
      button.addEventListener("mouseleave", handleMouseLeave);
      button.addEventListener("mousemove", handleMouseMove);

      return () => {
        button.removeEventListener("mouseenter", handleMouseEnter);
        button.removeEventListener("mouseleave", handleMouseLeave);
        button.removeEventListener("mousemove", handleMouseMove);
      };
    },
    { scope: navRef },
  );

  const handleEnter = (index: number) => {
    if (pathname === navLinks[index].href) return;
    contextSafe(() => {
      const underline = underlineRefs.current[index];
      if (!underline) return;
      gsap.killTweensOf(underline);
      gsap.fromTo(
        underline,
        { scaleX: 0, transformOrigin: "left center" },
        { scaleX: 1, duration: 0.45, ease: "power4.out" },
      );
    })();
  };

  const handleLeave = (index: number) => {
    if (pathname === navLinks[index].href) return;
    contextSafe(() => {
      const underline = underlineRefs.current[index];
      if (!underline) return;
      gsap.killTweensOf(underline);
      gsap.to(underline, {
        scaleX: 0,
        transformOrigin: "right center",
        duration: 0.35,
        ease: "power3.inOut",
      });
    })();
  };

  return (
    <>
      <header
        ref={navRef}
        className={cn(
          "inset-x-0 top-4   px-5 container mx-auto absolute z-50 py-4",
          pathname === "/about-us" ? "text-black" : "text-white"
        )}
      >
        <nav className="mx-auto grid w-full  grid-cols-3 items-center ">
          <div className="flex items-center gap-6 font-bold text-base">
            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link, i) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="group relative py-1 transition-opacity hover:opacity-90"
                  onMouseEnter={() => handleEnter(i)}
                  onMouseLeave={() => handleLeave(i)}
                >
                  {link.title}
                  <span
                    ref={(el) => {
                      underlineRefs.current[i] = el;
                    }}
                    style={{ transform: pathname === link.href ? "scaleX(1)" : "scaleX(0)" }}
                    className={cn(
                      "absolute bottom-0 left-0 h-px w-full origin-left",
                      pathname === "/about-us" ? "bg-black" : "bg-white"
                    )}
                  />
                </Link>
              ))}
            </div>

            {/* Hamburger Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close Menu" : "Open Menu"}
              className="flex md:hidden flex-col justify-center items-start w-8 h-8 gap-1.5 focus:outline-none z-50 cursor-pointer pointer-events-auto"
            >
              <span
                ref={lineTopRef}
                className={cn("w-6 h-0.5 rounded-md origin-center", pathname === "/about-us" ? "bg-black" : "bg-white")}
              />
              <span
                ref={lineMiddleRef}
                className={cn("w-4 h-0.5 rounded-md origin-center", pathname === "/about-us" ? "bg-black" : "bg-white")}
              />
              <span
                ref={lineBottomRef}
                className={cn("w-6 h-0.5 rounded-md origin-center", pathname === "/about-us" ? "bg-black" : "bg-white")}
              />
            </button>
          </div>

        <div className="flex items-center justify-center">
            <img
              data-title="harvest-nav"
              src="/svg/logo.svg"
              alt="Harvest Global"
              className="w-44 md:w-56"
            />
          </div>

          <div className="flex items-center justify-end gap-6">
       

            <Link href="/connect" className="hidden md:block no-underline">
              <div
                ref={buttonRef}
                className="button button--stroke"
              >
                <span className="button__label">Connect</span>
                <div ref={flairRef} className="button__flair"></div>
              </div>
            </Link>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        ref={menuRef}
        style={{ clipPath: "circle(0% at 2.5rem 2.5rem)" }}
        className="fixed inset-0 bg-neutral-950 flex flex-col justify-between px-8 py-28 z-45 md:hidden pointer-events-auto"
      >
        <div className="flex flex-col gap-8 mt-12">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.title}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`mobile-nav-link text-4xl font-display uppercase tracking-tight transition-colors ${
                  isActive ? "text-white underline decoration-2 underline-offset-8" : "text-neutral-400 hover:text-white"
                }`}
              >
                {link.title}
              </Link>
            );
          })}
        </div>

        <div className="flex flex-col gap-8">
          <Link
            href="/connect"
            onClick={() => setIsOpen(false)}
            className="no-underline mobile-nav-link self-start"
          >
            <div className="button button--stroke">
              <span className="button__label">Connect</span>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
