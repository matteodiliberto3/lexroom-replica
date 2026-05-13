import Image from "next/image";
import Link from "next/link";
import {
  footerExploreLinks,
  footerLegalLinks,
  localeOptions,
} from "@/content/en/navigation";
import { footerTagline } from "@/content/en/home";
import { siteConfig } from "@/lib/site-config";

export function SiteFooter() {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="container-shell section-pad">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr_1fr]">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.18em] text-brand-soft">
              {footerTagline}
            </p>
            <h2 className="text-2xl font-semibold">Explore</h2>
            <ul className="space-y-2 text-sm text-white/85">
              {footerExploreLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Resources</h2>
            <ul className="space-y-2 text-sm text-white/85">
              {footerLegalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Language</h2>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="mb-3 text-sm text-brand-soft">Current locale</p>
              <p className="mb-4 text-lg font-semibold">EN</p>
              <ul className="space-y-2 text-sm text-white/85">
                {localeOptions.map((locale) => (
                  <li key={locale.code}>
                    {locale.code === "EN" ? (
                      <span aria-current="true">{locale.label}</span>
                    ) : (
                      <a
                        href={locale.href}
                        className="transition-colors hover:text-white"
                        title="Coming soon in this clone"
                      >
                        {locale.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-8 text-sm text-white/70">
          <p>
            Copyright: © 2026 Lexroom Srl. All rights reserved. The new legal
            standard.
          </p>
          <p className="mt-2">
            Via Francesco Olgiati, 26, 20143 Milano MI · VAT number: 13027130965
          </p>
          <Link href="/en" className="mt-6 inline-flex">
            <Image
              src={siteConfig.assets.logoWhite}
              alt="Lexroom"
              width={132}
              height={28}
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}
