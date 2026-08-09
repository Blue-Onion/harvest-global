"use client";

import { useEffect, useState } from "react";
import {
  AnimatePresence,
  MotionConfig,
  motion,
  type Variants,
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { data } from "@/data";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE },
  },
};

function Navbar() {
  const { links, actions } = data.navigation;
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const close = () => setOpen(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <header className="fixed inset-x-0 top-4 z-50 px-4">
        <nav
          aria-label="Main navigation"
          className={`mx-auto flex w-full h-20 items-center justify-between gap-4 rounded-full border border-white/10 bg-black/25 py-2 pl-4 pr-2 backdrop-blur-md transition-[background-color,box-shadow] duration-300 sm:pl-5 ${
            scrolled
              ? "bg-black/45 shadow-[0_8px_40px_rgba(0,0,0,0.5)]"
              : "shadow-[0_8px_24px_rgba(0,0,0,0.25)]"
          }`}
        >
          {/* Brand */}
          <Link href="#home" onClick={close} className="shrink-0">
            <Image
              src="/logo.png"
              alt={data.site.name}
              width={460}
              height={164}
              priority
              className="h-24 w-auto sm:h-12"
            />
          </Link>

          {/* Desktop links */}
          <div className="hidden items-center gap-1 md:flex">
            {links.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={close}
                className="rounded-full px-4 py-2 text-sm font-medium text-white/75 transition-colors duration-200 hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <div className="hidden items-center gap-2 md:flex">
              <Link
                href={actions[0].href}
                className="rounded-full px-4 py-2 text-sm font-medium text-white/75 transition-colors duration-200 hover:bg-white/10 hover:text-white"
              >
                {actions[0].label}
              </Link>
              <Link
                href={actions[1].href}
                onClick={close}
                className="group inline-flex items-center gap-1.5 rounded-full bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-emerald-500"
              >
                {actions[1].label}
                <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>

            {/* Hamburger */}
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-navigation"
              aria-label={open ? "Close menu" : "Open menu"}
              className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 transition-colors duration-200 hover:bg-white/10 md:hidden"
            >
              <span
                className={`absolute left-1/2 h-0.5 w-[18px] -translate-x-1/2 rounded-full bg-white transition-all duration-300 ${
                  open ? "top-1/2 rotate-45" : "top-[calc(50%-5px)]"
                }`}
              />
              <span
                className={`absolute left-1/2 top-1/2 h-0.5 w-[18px] -translate-x-1/2 rounded-full bg-white transition-all duration-300 ${
                  open ? "scale-50 opacity-0" : "scale-100 opacity-100"
                }`}
              />
              <span
                className={`absolute left-1/2 h-0.5 w-[18px] -translate-x-1/2 rounded-full bg-white transition-all duration-300 ${
                  open ? "top-1/2 -rotate-45" : "top-[calc(50%+5px)]"
                }`}
              />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile / tablet drawer */}
      <MotionConfig reducedMotion="user">
        <AnimatePresence>
          {open && (
            <motion.div
              key="mobile-navigation"
              id="mobile-navigation"
              role="dialog"
              aria-modal="true"
              aria-label="Menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: EASE }}
              className="fixed inset-0 z-40 flex flex-col bg-black/90 backdrop-blur-xl"
            >
              <div className="flex flex-1 flex-col justify-center gap-1 px-7 sm:px-10 md:px-14">
                <motion.nav
                  aria-label="Mobile navigation"
                  variants={containerVariants}
                  initial="hidden"
                  animate="show"
                  className="w-full max-w-3xl"
                >
                  {links.map((item, index) => (
                    <motion.div key={item.href} variants={itemVariants}>
                      <Link
                        href={item.href}
                        onClick={close}
                        className="group flex items-center justify-between border-b border-white/10 py-4 text-2xl font-semibold tracking-tight text-white/90 transition-colors duration-200 hover:text-emerald-400 sm:text-4xl"
                      >
                        <span>{item.label}</span>
                        <span className="font-mono text-xs text-white/25 transition-colors duration-200 group-hover:text-emerald-400/70 sm:text-sm">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </Link>
                    </motion.div>
                  ))}
                </motion.nav>
              </div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className="flex flex-col gap-3 px-7 pb-12 sm:flex-row sm:px-10 md:px-14"
              >
                {actions.map((item, index) => (
                  <motion.div
                    key={item.href}
                    variants={itemVariants}
                    className="flex-1"
                  >
                    {index === 0 ? (
                      <Link
                        href={item.href}
                        onClick={close}
                        className="flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-4 text-base font-medium text-white/85 transition-colors duration-200 hover:bg-white/10 hover:text-white"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={close}
                        className="flex w-full items-center justify-center gap-2 rounded-full bg-emerald-600 px-6 py-4 text-base font-semibold text-white transition-colors duration-200 hover:bg-emerald-500"
                      >
                        {item.label}
                        <ArrowUpRight className="size-4" />
                      </Link>
                    )}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </MotionConfig>
    </>
  );
}

export default Navbar;
