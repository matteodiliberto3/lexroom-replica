"use client";

import Image from "next/image";
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

export function HeroSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [backdropVisible, setBackdropVisible] = useState(false);
  const [iframeSrc, setIframeSrc] = useState<string | null>(null);
  const magneticRef = useMagneticProximity<HTMLDivElement>();
  const marqueeLogos = [...siteConfig.clientLogos, ...siteConfig.clientLogos];

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

  return (
    <div className="reb-hero-experience">
      <div className="reb-fixed-hero-bg" aria-hidden="true" />

      <div className="reb-hero-wrapper">
        <header className="reb-hero-section">
          <div className="reb-hero-padding-global">
            <div className="reb-container-large">
              <div className="reb-padding-section-hero">
                <div className="reb-hero-component">
                  <div className="reb-hero-component-inner">
                    <div className="reb-hero-copy">
                      <div className="reb-hero-copy-inner">
                        <h1 className="reb-hero-section-title">
                          {hero.title}{" "}
                          <em>{hero.titleEmphasis}</em> {hero.titleSuffix}
                        </h1>
                        <div className="reb-hero-divider" />
                        <div className="reb-hero-description">
                          <p className="reb-hero-subtitle">{hero.subtitle}</p>
                          <p className="reb-hero-lead">{hero.description}</p>
                        </div>
                        <div className="reb-hero-buttons-wrapper">
                          <div className="reb-hero-buttons">
                            <a href="#demo" className="reb-hero-button reb-hero-button-primary">
                              {hero.primaryCta}
                            </a>
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
                        </div>
                      </div>
                    </div>
                  </div>

                  <Image
                    src={siteConfig.assets.heroBackRect}
                    alt=""
                    width={1164}
                    height={760}
                    className="reb-hero-back-rect"
                    priority
                  />
                  <Image
                    src={siteConfig.assets.heroBackLogo}
                    alt=""
                    width={1305}
                    height={900}
                    className="reb-hero-back-logo"
                    priority
                  />
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
          <section
            className="reb-home-video-section"
            aria-label="Lexroom product video"
          >
            <div className={`reb-hero-video-wrapper${isOpen ? " is-open" : ""}`}>
              <button
                type="button"
                className="reb-hero-video-transparent-cover"
                aria-label="Play Lexroom video"
                onClick={openVideo}
              >
                <div ref={magneticRef} className="reb-hero-magnetic-arrow-wrapper">
                  <Image
                    src={siteConfig.assets.videoPlay}
                    alt=""
                    width={88}
                    height={88}
                    className="reb-hero-magnetic-arrow"
                  />
                </div>
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
            </div>
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
