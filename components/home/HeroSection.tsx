"use client";

import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";
import type { MouseEvent } from "react";
import { createPortal } from "react-dom";
import { hero } from "@/content/en/home";
import { MagneticPlayArrow } from "@/components/home/MagneticPlayArrow";
import { cn } from "@/lib/cn";
import { siteConfig } from "@/lib/site-config";

function buildAutoplayUrl(baseUrl: string) {
  if (baseUrl.includes("autoplay=1")) {
    return baseUrl;
  }

  if (baseUrl.includes("autoplay=0")) {
    return baseUrl.replace("autoplay=0", "autoplay=1");
  }

  const separator = baseUrl.includes("?") ? "&" : "?";
  return `${baseUrl}${separator}autoplay=1`;
}

function HeroPlayIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M10.8761 4.92786C12.0289 5.57832 12.0289 7.23858 10.8761 7.88903L2.53558 12.595C1.40233 13.2344 0.000194007 12.4156 0.000194064 11.1144L0.000194475 1.70248C0.000194532 0.401286 1.40233 -0.417514 2.53558 0.221899L10.8761 4.92786Z"
        fill="currentColor"
      />
    </svg>
  );
}

const heroEase = [0.22, 1, 0.36, 1] as const;

const copyContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.08,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.68, ease: heroEase },
  },
};

const dividerReveal = {
  hidden: { opacity: 0, scaleX: 0.15 },
  visible: {
    opacity: 1,
    scaleX: 1,
    transition: { duration: 0.72, ease: heroEase },
  },
};

/** Four copies for a seamless marquee loop (translateX -50%). */
const marqueeLogos = Array.from({ length: 4 }, () => siteConfig.clientLogos).flat();

function VideoModalPortal({
  iframeSrc,
  backdropVisible,
  onCloseBackdrop,
  onCloseButton,
}: {
  iframeSrc: string;
  backdropVisible: boolean;
  onCloseBackdrop: () => void;
  onCloseButton: (event: MouseEvent<HTMLButtonElement>) => void;
}) {
  return (
    <>
      <button
        type="button"
        className={cn("video-backdrop", backdropVisible && "is-visible")}
        aria-label="Close video"
        onClick={onCloseBackdrop}
      />
      <div className="reb-hero-video-wrapper is-open">
        <div className="vimeo-container">
          <iframe
            id="vimeo-player-portal"
            src={iframeSrc}
            title="Lexroom product video"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
        </div>
        <button
          type="button"
          className="video-close-btn"
          aria-label="Close video"
          onClick={onCloseButton}
        >
          <span aria-hidden="true">×</span>
        </button>
      </div>
    </>
  );
}

export function HeroSection() {
  const isClient = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
  const [isOpen, setIsOpen] = useState(false);
  const [backdropVisible, setBackdropVisible] = useState(false);
  const [iframeSrc, setIframeSrc] = useState<string | null>(null);

  const scrollStageRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: scrollStageRef,
    offset: ["start start", "end start"],
  });
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 46,
    damping: 18,
    mass: 0.3,
    restDelta: 0.0012,
  });
  const stageProgress = prefersReducedMotion === true ? scrollYProgress : smoothProgress;

  /** Player rises into view while headline recedes (Lexroom-style scroll choreography). */
  const videoY = useTransform(stageProgress, [0, 0.26, 0.48, 0.72, 1], [88, 40, -6, -54, -72]);
  const videoScale = useTransform(stageProgress, [0, 0.2, 0.5, 0.82, 1], [0.87, 0.93, 1, 1.02, 1.03]);
  const videoTransform = useTransform([videoScale, videoY], ([scale, y]) => {
    const s = typeof scale === "number" ? scale : 1;
    const yy = typeof y === "number" ? y : 0;
    return `translate3d(0, ${yy.toFixed(2)}px, 0) scale(${s.toFixed(4)})`;
  });
  const copyOpacity = useTransform(stageProgress, [0, 0.18, 0.42, 0.68, 1], [1, 0.96, 0.62, 0.34, 0.26]);
  const copyY = useTransform(stageProgress, [0, 1], [0, 40]);
  const rectY = useTransform(stageProgress, [0, 0.5, 1], [0, -32, -44]);
  const logoY = useTransform(stageProgress, [0, 0.5, 1], [0, -48, -62]);
  const logoOpacity = useTransform(stageProgress, [0, 0.38, 0.7, 1], [0.38, 0.2, 0.1, 0.07]);

  const openVideo = useCallback(() => {
    setIsOpen(true);
    setIframeSrc(buildAutoplayUrl(siteConfig.video.embedUrl));

    window.requestAnimationFrame(() => {
      setBackdropVisible(true);
    });
  }, []);

  const closeVideo = useCallback(() => {
    setIsOpen(false);
    setBackdropVisible(false);
    window.setTimeout(() => {
      setIframeSrc(null);
    }, 360);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        closeVideo();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [closeVideo, isOpen]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const onPageShow = (event: PageTransitionEvent) => {
      if (!event.persisted) {
        return;
      }

      document.body.style.overflow = "";
      setIsOpen(false);
      setBackdropVisible(false);
      setIframeSrc(null);
    };

    window.addEventListener("pageshow", onPageShow);
    return () => window.removeEventListener("pageshow", onPageShow);
  }, []);

  const modal =
    isClient && isOpen && iframeSrc ? (
      <VideoModalPortal
        iframeSrc={iframeSrc}
        backdropVisible={backdropVisible}
        onCloseBackdrop={closeVideo}
        onCloseButton={(event) => {
          event.stopPropagation();
          closeVideo();
        }}
      />
    ) : null;

  return (
    <div className="reb-hero-experience">
      {modal ? createPortal(modal, document.body) : null}

      <div className="reb-fixed-hero-bg" aria-hidden="true" />
      <div className="reb-hero-bottom-fade" aria-hidden="true" />

      <div ref={scrollStageRef} className="reb-hero-scroll-stage">
        <div className="reb-hero-wrapper">
          <header className="reb-hero-section">
          <div className="reb-hero-padding-global">
            <div className="reb-container-large">
              <div className="reb-padding-section-hero">
                <div className="reb-hero-component">
                  <div className="reb-hero-component-inner">
                    <div className="reb-hero-copy">
                      <motion.div
                        className="reb-hero-copy-inner"
                        style={{ opacity: copyOpacity, y: copyY }}
                      >
                        <motion.div
                          variants={copyContainer}
                          initial="hidden"
                          animate="visible"
                        >
                        <motion.h1 className="reb-hero-section-title" variants={fadeUp}>
                          {hero.title}{" "}
                          <em>{hero.titleEmphasis}</em> {hero.titleSuffix}
                        </motion.h1>
                        <motion.div
                          className="reb-hero-divider"
                          variants={dividerReveal}
                        />
                        <motion.div className="reb-hero-description" variants={fadeUp}>
                          <p className="reb-hero-subtitle">{hero.subtitle}</p>
                          <p className="reb-hero-lead">{hero.description}</p>
                        </motion.div>
                        <motion.div className="reb-hero-buttons-wrapper" variants={fadeUp}>
                          <div className="reb-hero-buttons">
                            <motion.a
                              href="#demo"
                              className="reb-hero-button reb-hero-button-primary"
                              whileHover={{ y: -1 }}
                              whileTap={{ scale: 0.97 }}
                              transition={{ type: "spring", stiffness: 420, damping: 28 }}
                            >
                              {hero.primaryCta}
                            </motion.a>
                            <motion.button
                              type="button"
                              className="reb-hero-button reb-hero-button-secondary"
                              onClick={openVideo}
                              whileHover={{ y: -1 }}
                              whileTap={{ scale: 0.97 }}
                              transition={{ type: "spring", stiffness: 420, damping: 28 }}
                            >
                              <span>{hero.secondaryCta}</span>
                              <HeroPlayIcon />
                            </motion.button>
                          </div>
                          <div className="reb-hero-buttons-line" aria-hidden="true" />
                        </motion.div>
                      </motion.div>
                    </motion.div>
                    </div>
                  </div>

                  <div className="reb-hero-back-rect pointer-events-none">
                    <motion.div style={{ y: rectY }}>
                      <Image
                        src={siteConfig.assets.heroBackRect}
                        alt=""
                        width={1164}
                        height={760}
                        className="h-auto w-full max-w-none"
                        priority
                      />
                    </motion.div>
                  </div>
                  <div className="reb-hero-back-logo pointer-events-none">
                    <motion.div style={{ y: logoY, opacity: logoOpacity }}>
                      <Image
                        src={siteConfig.assets.heroBackLogo}
                        alt=""
                        width={1305}
                        height={900}
                        className="h-auto w-full"
                        priority
                      />
                    </motion.div>
                  </div>
                  <button
                    type="button"
                    className="reb-hero-video-preview-mobile"
                    aria-label="Play Lexroom video"
                    onClick={openVideo}
                  >
                    <Image
                      src={siteConfig.assets.videoCoverMobile}
                      alt="Lexroom product preview"
                      width={2594}
                      height={1460}
                      className="reb-hero-video-preview-mobile-image"
                      priority
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>

      <div className="reb-center-wrapper">
        <div className="reb-center-wrapper-inner">
          <section className="reb-home-video-section" aria-label="Lexroom product video">
            <motion.div
              className={cn(
                "reb-hero-video-wrapper",
                isOpen && "reb-hero-video-wrapper--inline-ghost",
              )}
              style={
                isOpen
                  ? undefined
                  : {
                      transform: videoTransform,
                    }
              }
            >
              {!isOpen ? (
                <>
                  <button
                    type="button"
                    className="reb-hero-video-transparent-cover"
                    aria-label="Play Lexroom video"
                    onClick={openVideo}
                  >
                    <span className="reb-hero-magnetic-arrow-wrapper" aria-hidden="true">
                      <MagneticPlayArrow
                        playSrc={siteConfig.assets.videoPlay}
                        width={88}
                        height={88}
                        className="reb-hero-magnetic-play"
                      />
                    </span>
                  </button>

                  <Image
                    src={siteConfig.assets.videoCover}
                    alt="Lexroom product preview"
                    width={960}
                    height={540}
                    className="reb-hero-video-cover"
                    priority
                  />
                </>
              ) : null}
            </motion.div>
          </section>

          <section className="reb-home-logos-section" aria-label="Trusted by">
            <div className="reb-logos-corner-wrapper">
              <div className="reb-logos-component">
                <div className="reb-logos-track">
                  {marqueeLogos.map((logo, index) => (
                    <div key={`${logo}-${index}`} className="reb-logos-wrapper">
                      <Image
                        src={logo}
                        alt=""
                        width={160}
                        height={48}
                        className="reb-logos-logo"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
  );
}
