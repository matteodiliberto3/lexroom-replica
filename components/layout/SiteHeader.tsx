"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import {
  anchorNavigation,
  primaryNavigation,
  type NavDropdown,
} from "@/content/en/navigation";
import { cn } from "@/lib/cn";
import { siteConfig } from "@/lib/site-config";

function DropdownPanel({ menu }: { menu: NavDropdown }) {
  return (
    <div className="absolute left-0 top-full z-40 hidden min-w-0 max-w-[min(36rem,calc(100vw-1.5rem))] rounded-2xl border border-white/10 bg-brand-dark/95 p-5 shadow-2xl backdrop-blur-md sm:p-6 group-hover:block group-focus-within:block xl:max-w-[min(42rem,calc(100vw-2rem))]">
      <motion.div
        className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        {menu.columns.map((column) => (
          <motion.div
            key={column.title}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.22, delay: 0.04 }}
          >
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-white/70">
              {column.title}
            </p>
            <ul className="space-y-2">
              {column.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-sm text-brand-soft transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const isHeroOverlay = pathname === "/en" || pathname === "/";
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [layoutEpoch, setLayoutEpoch] = useState(0);

  useEffect(() => {
    const syncScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };

    syncScroll();
    window.addEventListener("scroll", syncScroll, { passive: true });

    const onPageShow = (event: PageTransitionEvent) => {
      if (!event.persisted) {
        return;
      }

      syncScroll();
      requestAnimationFrame(() => {
        syncScroll();
        window.dispatchEvent(new Event("resize"));
        setLayoutEpoch((n) => n + 1);
      });
    };

    window.addEventListener("pageshow", onPageShow);

    return () => {
      window.removeEventListener("scroll", syncScroll);
      window.removeEventListener("pageshow", onPageShow);
    };
  }, []);

  return (
    <header
      key={layoutEpoch}
      className={cn(
        "sticky top-0 z-50 text-white transition-[background-color,border-color,box-shadow,backdrop-filter] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
        isHeroOverlay
          ? isScrolled
            ? "border-b border-white/10 bg-brand/78 shadow-[0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-md"
            : "border-b border-transparent bg-transparent shadow-none"
          : isScrolled
            ? "border-b border-primary/10 bg-brand/80 shadow-sm backdrop-blur-md"
            : "bg-brand shadow-md",
      )}
    >
      <div
        className={cn(
          "container-shell flex w-full min-w-0 items-center justify-between gap-2 transition-[min-height,height] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] sm:gap-3",
          isScrolled ? "min-h-14 h-14" : "min-h-20 h-20",
        )}
      >
        <Link href="/en" className="relative z-10 inline-flex shrink-0 items-center">
          <motion.div
            initial={false}
            animate={{ scale: isScrolled ? 0.92 : 1 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src={siteConfig.assets.logoWhite}
              alt="Lexroom"
              width={132}
              height={28}
              priority
              className="h-6 w-auto lg:h-7"
            />
          </motion.div>
        </Link>

        <div className="hidden min-h-0 min-w-0 flex-1 items-center gap-2 lg:flex xl:gap-3">
          <nav
            className="flex min-h-0 min-w-0 flex-1 items-center justify-center gap-x-2 overflow-x-auto whitespace-nowrap [scrollbar-width:none] xl:gap-x-3 2xl:gap-x-4 [&::-webkit-scrollbar]:hidden"
            aria-label="Primary"
          >
            {primaryNavigation.map((menu) => (
              <motion.div
                key={menu.label}
                className="group relative shrink-0"
                initial={false}
                animate={{ opacity: isScrolled ? 0.95 : 1 }}
              >
                <button
                  type="button"
                  className="nav-link nav-link-header inline-flex items-center gap-1.5 px-0.5"
                  aria-haspopup="true"
                >
                  {menu.label}
                  <span aria-hidden="true" className="text-[0.65em] opacity-80">
                    ▾
                  </span>
                </button>
                <DropdownPanel menu={menu} />
              </motion.div>
            ))}
            {anchorNavigation.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="nav-link nav-link-header shrink-0 px-0.5"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex shrink-0 items-center gap-1.5 xl:gap-2 2xl:gap-2.5">
            <Button variant="secondary" href={siteConfig.external.login} compact>
              Login
            </Button>
            <div className="hidden shrink-0 2xl:flex">
              <Button variant="secondary" href="#demo" compact>
                Try Lexroom
              </Button>
            </div>
            <Button variant="primary" href="#demo" compact>
              Book a demo
            </Button>
          </div>
        </div>

        <button
          type="button"
          className="relative z-10 inline-flex shrink-0 items-center justify-center rounded-full border border-white/20 p-2 lg:hidden"
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMobileOpen((open) => !open)}
        >
          <span className="sr-only">Toggle navigation</span>
          <Image
            src={mobileOpen ? siteConfig.assets.closeMenu : siteConfig.assets.hamburger}
            alt=""
            width={20}
            height={20}
          />
        </button>
      </div>

      {mobileOpen ? (
        <nav
          id="mobile-navigation"
          className="border-t border-white/10 bg-brand-dark lg:hidden"
          aria-label="Mobile"
        >
          <div className="container-shell space-y-6 py-6">
            {primaryNavigation.map((menu) => (
              <div key={menu.label}>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-white/70">
                  {menu.label}
                </p>
                <motion.div className="space-y-4">
                  {menu.columns.map((column) => (
                    <div key={column.title}>
                      <p className="mb-2 text-xs font-semibold text-brand-soft">
                        {column.title}
                      </p>
                      <ul className="space-y-2">
                        {column.links.map((link) => (
                          <li key={link.label}>
                            <a
                              href={link.href}
                              target={link.external ? "_blank" : undefined}
                              rel={link.external ? "noopener noreferrer" : undefined}
                              className="text-sm text-white/90"
                              onClick={() => setMobileOpen(false)}
                            >
                              {link.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </motion.div>
              </div>
            ))}
            <ul className="space-y-2">
              {anchorNavigation.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/90"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-3">
              <Button variant="secondary" href={siteConfig.external.login}>
                Login
              </Button>
              <Button variant="secondary" href="#demo">
                Try Lexroom
              </Button>
              <Button variant="primary" href="#demo">
                Book a demo
              </Button>
            </div>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
