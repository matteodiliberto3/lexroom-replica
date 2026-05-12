"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { hero } from "@/content/en/home";
import { useMagneticProximity } from "@/hooks/useMagneticProximity";
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

export function HeroSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [backdropVisible, setBackdropVisible] = useState(false);
  const [iframeSrc, setIframeSrc] = useState<string | null>(null);
  const magneticRef = useMagneticProximity<HTMLSpanElement>({
    maxMovementX: 7,
    maxMovementY: 7,
    triggerRadius: 160,
    attractionForce: 0.2,
    lerpSpeed: 0.15,
  });
  const marqueeLogos = [...siteConfig.clientLogos, ...siteConfig.clientLogos];

  const { scrollY } = useScroll();

  const rectY = useTransform(scrollY, [0, 520], [0, -36]);
  const logoY = useTransform(scrollY, [0, 520], [0, -52]);
  const logoOpacity = useTransform(scrollY, [0, 420], [0.38, 0.12]);
  const videoScale = useTransform(scrollY, [80, 480], [1, 0.97]);
  const videoY = useTransform(scrollY, [0, 400], [0, 12]);

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
    }, 800);
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

  return (
    <div className="reb-hero-experience">
      <div className="reb-fixed-hero-bg" aria-hidden="true" />
      <div className="reb-hero-bottom-fade" aria-hidden="true" />

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
                            <button
                              type="button"
                              className="reb-hero-button reb-hero-button-secondary hidden"
                              onClick={openVideo}
                            >
                              <span>{hero.secondaryCta}</span>
                              <HeroPlayIcon />
                            </button>
                          </div>
                          <div className="reb-hero-buttons-line" aria-hidden="true" />
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
              className={`reb-hero-video-wrapper${isOpen ? " is-open" : ""}`}
              style={
                isOpen
                  ? undefined
                  : {
                      scale: videoScale,
                      y: videoY,
                    }
              }
            >
              <button
                type="button"
                className="reb-hero-video-transparent-cover"
                aria-label="Play Lexroom video"
                onClick={openVideo}
              >
                <span className="reb-hero-magnetic-arrow-wrapper" aria-hidden="true">
                  <span ref={magneticRef} className="reb-hero-magnetic-play">
                    <Image
                      src={siteConfig.assets.videoPlay}
                      alt=""
                      width={88}
                      height={88}
                      className="reb-hero-magnetic-arrow"
                    />
                  </span>
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

              <div className="vimeo-container">
                {iframeSrc ? (
                  <iframe
                    id="vimeo-player"
                    src={iframeSrc}
                    title="Lexroom product video"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                  />
                ) : null}
              </div>

              <button
                type="button"
                className="video-close-btn"
                aria-label="Close video"
                onClick={(event) => {
                  event.stopPropagation();
                  closeVideo();
                }}
              >
                <span aria-hidden="true">×</span>
              </button>
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

      <button
        type="button"
        className={`video-backdrop${backdropVisible ? " is-visible" : ""}`}
        aria-label="Close video"
        onClick={closeVideo}
      />
    </div>
  );
}
