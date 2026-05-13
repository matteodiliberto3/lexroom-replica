"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { useCallback, useEffect, useRef } from "react";

const SPRING = { stiffness: 400, damping: 28, mass: 0.32 };
const SPRING_REDUCED = { stiffness: 900, damping: 52, mass: 0.2 };

const MAX_X = 40;
const MAX_Y = 40;
const TRIGGER_R = 360;
const FORCE = 0.62;

type MagneticPlayArrowProps = {
  playSrc: string;
  width: number;
  height: number;
  className?: string;
};

/**
 * Decorative play icon that follows the pointer with a Motion spring (design-engineering: avoid raw 1:1 mouse binding).
 * Only active on fine pointers + hover-capable devices and desktop breakpoint.
 */
export function MagneticPlayArrow({
  playSrc,
  width,
  height,
  className,
}: MagneticPlayArrowProps) {
  const spanRef = useRef<HTMLSpanElement>(null);
  const centerRef = useRef({ x: 0, y: 0 });
  const reduced = useReducedMotion();

  const targetX = useMotionValue(0);
  const targetY = useMotionValue(0);
  const springOpts = reduced === true ? SPRING_REDUCED : SPRING;
  const springX = useSpring(targetX, springOpts);
  const springY = useSpring(targetY, springOpts);
  const transform = useTransform([springX, springY], ([x, y]) => {
    const nx = typeof x === "number" ? x : 0;
    const ny = typeof y === "number" ? y : 0;
    return `translate3d(${nx.toFixed(2)}px, ${ny.toFixed(2)}px, 0)`;
  });

  const updateCenter = useCallback(() => {
    const el = spanRef.current;
    if (!el) {
      return;
    }
    const r = el.getBoundingClientRect();
    centerRef.current = { x: r.left + r.width / 2, y: r.top + r.height / 2 };
  }, []);

  useEffect(() => {
    const fineHover = window.matchMedia("(hover: hover) and (pointer: fine)");
    const desktop = window.matchMedia("(min-width: 992px)");
    if (!fineHover.matches || !desktop.matches) {
      return;
    }

    const applyClient = (clientX: number, clientY: number) => {
      const { x: cx, y: cy } = centerRef.current;
      const dx = clientX - cx;
      const dy = clientY - cy;
      const dist = Math.hypot(dx, dy);
      let tx = 0;
      let ty = 0;
      if (dist > 0.5 && dist < TRIGGER_R) {
        const t = Math.min(dist / TRIGGER_R, 1);
        const influence = 1 - t ** 1.35;
        tx = Math.max(-MAX_X, Math.min(MAX_X, dx * FORCE * influence));
        ty = Math.max(-MAX_Y, Math.min(MAX_Y, dy * FORCE * influence));
      }
      targetX.set(tx);
      targetY.set(ty);
    };

    const onPointerMove = (event: PointerEvent) => {
      if (typeof event.getCoalescedEvents === "function") {
        const batch = event.getCoalescedEvents();
        if (batch.length > 0) {
          for (const e of batch) {
            applyClient(e.clientX, e.clientY);
          }
          return;
        }
      }
      applyClient(event.clientX, event.clientY);
    };

    updateCenter();
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("scroll", updateCenter, { passive: true });
    window.addEventListener("resize", updateCenter);

    const mq = () => {
      updateCenter();
    };
    fineHover.addEventListener("change", mq);
    desktop.addEventListener("change", mq);

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("scroll", updateCenter);
      window.removeEventListener("resize", updateCenter);
      fineHover.removeEventListener("change", mq);
      desktop.removeEventListener("change", mq);
      targetX.set(0);
      targetY.set(0);
    };
  }, [targetX, targetY, updateCenter]);

  return (
    <motion.span
      ref={spanRef}
      className={className}
      style={{ transform, willChange: "transform" }}
    >
      <Image
        src={playSrc}
        alt=""
        width={width}
        height={height}
        className="reb-hero-magnetic-arrow"
      />
    </motion.span>
  );
}
