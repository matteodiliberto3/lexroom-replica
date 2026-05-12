"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import {
  anchorNavigation,
  primaryNavigation,
  type NavDropdown,
} from "@/content/en/navigation";
import { siteConfig } from "@/lib/site-config";

function DropdownPanel({ menu }: { menu: NavDropdown }) {
  return (
    <div className="absolute left-0 top-full z-40 hidden min-w-[34rem] rounded-2xl border border-white/10 bg-brand-dark p-6 shadow-2xl group-hover:block group-focus-within:block">
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {menu.columns.map((column) => (
          <div key={column.title}>
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
          </div>
        ))}
      </div>
    </div>
  );
}

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-brand text-white shadow-md">
      <div className="container-shell flex items-center justify-between gap-4 py-4">
        <Link href="/en" className="relative z-10 inline-flex items-center">
          <Image
            src={siteConfig.assets.logoWhite}
            alt="Lexroom"
            width={132}
            height={28}
            priority
          />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {primaryNavigation.map((menu) => (
            <div key={menu.label} className="group relative">
              <button
                type="button"
                className="nav-link inline-flex items-center gap-2"
                aria-haspopup="true"
              >
                {menu.label}
                <span aria-hidden="true">▾</span>
              </button>
              <DropdownPanel menu={menu} />
            </div>
          ))}
          {anchorNavigation.map((link) => (
            <a key={link.label} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
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

        <button
          type="button"
          className="relative z-10 inline-flex items-center justify-center rounded-full border border-white/20 p-2 lg:hidden"
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
                <div className="space-y-4">
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
                </div>
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
