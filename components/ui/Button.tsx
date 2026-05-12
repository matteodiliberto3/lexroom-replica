"use client";

import { motion } from "framer-motion";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { useMagneticProximity } from "@/hooks/useMagneticProximity";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "secondaryDark";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  href?: string;
  children: ReactNode;
};

const variantClass: Record<ButtonVariant, string> = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  secondaryDark: "btn-secondary btn-secondary-dark",
};

function ButtonShimmer() {
  return (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]"
    >
      <span className="btn-shimmer absolute inset-y-0 -left-full w-1/2 bg-gradient-to-r from-transparent via-white/25 to-transparent" />
    </span>
  );
}

export function Button({
  variant = "primary",
  href,
  children,
  className,
  type = "button",
  ...props
}: ButtonProps) {
  const magneticRef = useMagneticProximity<HTMLSpanElement>({
    maxMovementX: 6,
    maxMovementY: 6,
    triggerRadius: 140,
    attractionForce: 0.18,
    lerpSpeed: 0.14,
  });

  const classes = cn(
    variantClass[variant],
    "relative isolate overflow-hidden",
    className,
  );

  const content = (
    <>
      <ButtonShimmer />
      <span ref={magneticRef} className="relative z-10 inline-flex items-center gap-2">
        {children}
      </span>
    </>
  );

  const motionProps = {
    whileHover: { y: -1 },
    whileTap: { scale: 0.97 },
    transition: { type: "spring" as const, stiffness: 420, damping: 28 },
  };

  if (href) {
    return (
      <motion.a href={href} className={classes} {...motionProps}>
        {content}
      </motion.a>
    );
  }

  const {
    onDrag,
    onDragStart,
    onDragEnd,
    onAnimationStart,
    onAnimationEnd,
    onTransitionEnd,
    ...buttonProps
  } = props;

  return (
    <motion.button
      type={type}
      className={classes}
      {...motionProps}
      {...buttonProps}
    >
      {content}
    </motion.button>
  );
}
