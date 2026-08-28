"use client";

import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type Transition,
} from "framer-motion";
import { cn } from "@/lib/utils";

export interface ModalCardData {
  id: string;
  imageUrl: string | null;
  title: string;
  description?: string;
  gradientColor?: string;
}

type AnimationSpeed = "slow" | "normal" | "fast" | "none";
type AnimationVariant = "scale" | "fade" | "slide";

interface ModalCardsProps {
  id: string;
  imageUrl: string | null;
  title: string;
  description?: string;
  gradientColor?: string;
  className?: string;
  animationSpeed?: AnimationSpeed;
  springStiffness?: number;
  springDamping?: number;
  animationVariant?: AnimationVariant;
  closeOnBackdropClick?: boolean;
  closeOnEscape?: boolean;
  showCloseButton?: boolean;
  ariaLabel?: string;
  backdropGradientPosition?: string;
  modalClassName?: string;
  backdropClassName?: string;
}

const speedToDuration: Record<AnimationSpeed, number> = {
  slow: 0.7,
  normal: 0.45,
  fast: 0.25,
  none: 0,
};

export const ModalCards: React.FC<ModalCardsProps> = ({
  id,
  imageUrl,
  title,
  description,
  gradientColor = "#6366f1",
  className = "",
  animationSpeed = "normal",
  springStiffness,
  springDamping,
  animationVariant = "scale",
  closeOnBackdropClick = true,
  closeOnEscape = true,
  showCloseButton = true,
  ariaLabel = "Card details modal",
  backdropGradientPosition = "50% 10%",
  modalClassName = "",
  backdropClassName = "",
}) => {
  const reduceMotion = useReducedMotion();
  const [open, setOpen] = useState(false);

  const duration = speedToDuration[animationSpeed] ?? 0.45;

  const baseTransition: Transition =
    animationSpeed === "none"
      ? { duration: 0 }
      : springStiffness !== undefined || springDamping !== undefined
        ? {
            type: "spring",
            stiffness: springStiffness ?? 260,
            damping: springDamping ?? 30,
          }
        : { type: "spring", stiffness: 260, damping: 30, duration };

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && closeOnEscape) close();
    };

    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, close, closeOnEscape]);

  const entryVariants =
    animationVariant === "fade"
      ? { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } }
      : animationVariant === "slide"
        ? {
            initial: { opacity: 0, y: 40 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: 40 },
          }
        : null;

  const useMorph = animationVariant === "scale";

  return (
    <>
      <motion.button
        type="button"
        onClick={() => setOpen(true)}
        className={cn(
          "group relative aspect-[4/3] w-full cursor-pointer overflow-hidden rounded-2xl text-left outline-none focus-visible:ring-2 focus-visible:ring-white/70",
          className,
        )}
        style={{ background: gradientColor }}
        layoutId={useMorph ? `card-${id}` : undefined}
        whileHover={reduceMotion ? undefined : { y: -4 }}
        transition={baseTransition}
        aria-label={`Open ${title}`}
      >
        {imageUrl && (
          <Image
            src={imageUrl}
            alt={title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            unoptimized
          />
        )}

        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to top, ${gradientColor}cc 0%, ${gradientColor}33 45%, transparent 75%)`,
          }}
        />

        <motion.div
          layoutId={useMorph ? `title-${id}` : undefined}
          className="absolute inset-x-0 bottom-0 p-5"
        >
          <h3 className="text-xl font-semibold text-white drop-shadow">
            {title}
          </h3>
          {description && (
            <p className="mt-1 line-clamp-2 text-sm text-white/80">
              {description}
            </p>
          )}
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            key="backdrop"
            className={cn(
              "fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8",
              backdropClassName,
            )}
            style={{
              background: `radial-gradient(circle at ${backdropGradientPosition}, ${gradientColor}66 0%, rgba(0,0,0,0.85) 60%)`,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={
              animationSpeed === "none"
                ? { duration: 0 }
                : { duration: duration * 0.8 }
            }
            onClick={
              closeOnBackdropClick
                ? (e) => {
                    if (e.target === e.currentTarget) close();
                  }
                : undefined
            }
            role="dialog"
            aria-modal="true"
            aria-label={ariaLabel}
          >
            <motion.div
              layoutId={useMorph ? `card-${id}` : undefined}
              className={cn(
                "relative flex max-h-full w-full max-w-4xl flex-col overflow-hidden rounded-3xl bg-neutral-900 shadow-2xl",
                modalClassName,
              )}
              {...(animationVariant !== "scale" && entryVariants
                ? {
                    initial: entryVariants.initial,
                    animate: entryVariants.animate,
                    exit: entryVariants.exit,
                  }
                : {})}
              transition={baseTransition}
            >
              {imageUrl && (
                <motion.div
                  layoutId={useMorph ? `media-${id}` : undefined}
                  className="relative aspect-[16/9] w-full shrink-0 overflow-hidden"
                >
                  <Image
                    src={imageUrl}
                    alt={title}
                    fill
                    sizes="(max-width: 1024px) 90vw, 56rem"
                    className="object-cover"
                    unoptimized
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(to top, ${gradientColor}cc 0%, transparent 55%)`,
                    }}
                  />
                </motion.div>
              )}

              <div className="overflow-y-auto p-6 sm:p-8">
                <motion.h2
                  layoutId={useMorph ? `title-${id}` : undefined}
                  className="text-2xl font-bold text-white sm:text-3xl"
                >
                  {title}
                </motion.h2>
                {description && (
                  <p className="mt-3 max-w-prose text-base leading-relaxed text-white/75">
                    {description}
                  </p>
                )}
              </div>

              {showCloseButton && (
                <button
                  type="button"
                  onClick={close}
                  aria-label="Close"
                  className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-black/40 text-2xl leading-none text-white backdrop-blur transition-colors hover:bg-black/70 focus-visible:ring-2 focus-visible:ring-white/70"
                >
                  &times;
                </button>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ModalCards;
