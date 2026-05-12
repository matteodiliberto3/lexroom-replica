"use client";

import { useCallback, useRef, useState, type MouseEvent } from "react";

type SpotlightState = {
  x: number;
  y: number;
  opacity: number;
};

export function useSpotlight<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [spotlight, setSpotlight] = useState<SpotlightState>({
    x: 0,
    y: 0,
    opacity: 0,
  });

  const onMouseMove = useCallback((event: MouseEvent<T>) => {
    const element = ref.current;
    if (!element) {
      return;
    }

    const rect = element.getBoundingClientRect();
    setSpotlight({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
      opacity: 1,
    });
  }, []);

  const onMouseLeave = useCallback(() => {
    setSpotlight((current) => ({ ...current, opacity: 0 }));
  }, []);

  return { ref, spotlight, onMouseMove, onMouseLeave };
}
