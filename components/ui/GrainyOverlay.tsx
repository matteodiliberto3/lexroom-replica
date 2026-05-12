export function GrainyOverlay() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[100] opacity-[0.02]"
    >
      <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
        <filter id="lexroom-grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="4"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#lexroom-grain)" />
      </svg>
    </div>
  );
}
