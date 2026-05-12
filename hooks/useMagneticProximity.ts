"use client";

import { useEffect, useRef } from "react";

type MagneticConfig = {
  lerpSpeed: number;
  triggerRadius: number;
  maxMovementX: number;
  maxMovementY: number;
  attractionForce: number;
};

const defaultConfig: MagneticConfig = {
  lerpSpeed: 0.1,
  triggerRadius: 1080,
  maxMovementX: 800,
  maxMovementY: 300,
  attractionForce: 0.8,
};

export function useMagneticProximity<T extends HTMLElement>(
  config: Partial<MagneticConfig> = {},
) {
  const ref = useRef<T | null>(null);
  const settings = { ...defaultConfig, ...config };

  useEffect(() => {
    const element = ref.current;
    if (!element) {
      return;
    }

    const media = window.matchMedia("(min-width: 992px)");
    if (!media.matches) {
      return;
    }

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let currentX = 0;
    let currentY = 0;
    let centerX = 0;
    let centerY = 0;
    let frameId = 0;

    const updateCenter = () => {
      const rect = element.getBoundingClientRect();
      centerX = rect.left + rect.width / 2;
      centerY = rect.top + rect.height / 2;
    };

    const onMouseMove = (event: MouseEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
    };

    const animate = () => {
      const deltaX = mouseX - centerX;
      const deltaY = mouseY - centerY;
      const distance = Math.hypot(deltaX, deltaY);

      let targetX = 0;
      let targetY = 0;

      if (distance < settings.triggerRadius) {
        const proximity = 1 - distance / settings.triggerRadius;
        targetX = deltaX * settings.attractionForce * proximity;
        targetY = deltaY * settings.attractionForce * proximity;
        targetX = Math.max(
          -settings.maxMovementX,
          Math.min(settings.maxMovementX, targetX),
        );
        targetY = Math.max(
          -settings.maxMovementY,
          Math.min(settings.maxMovementY, targetY),
        );
      }

      currentX += (targetX - currentX) * settings.lerpSpeed;
      currentY += (targetY - currentY) * settings.lerpSpeed;

      if (Math.abs(currentX) > 0.05 || Math.abs(currentY) > 0.05) {
        element.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      } else {
        element.style.transform = "";
      }

      frameId = window.requestAnimationFrame(animate);
    };

    updateCenter();
    frameId = window.requestAnimationFrame(animate);

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("resize", updateCenter);
    window.addEventListener("scroll", updateCenter, { passive: true });

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", updateCenter);
      window.removeEventListener("scroll", updateCenter);
      element.style.transform = "";
    };
  }, [
    settings.attractionForce,
    settings.lerpSpeed,
    settings.maxMovementX,
    settings.maxMovementY,
    settings.triggerRadius,
  ]);

  return ref;
}
