import type { Metadata } from "next";
import { Instrument_Serif, Inter } from "next/font/google";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { GrainyOverlay } from "@/components/ui/GrainyOverlay";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const heroDisplay = Instrument_Serif({
  variable: "--font-hero-display",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.baseUrl),
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: `${siteConfig.baseUrl}/en`,
    siteName: siteConfig.name,
    locale: "en",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${heroDisplay.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        <GrainyOverlay />
        <AnnouncementBar />
        <SiteHeader />
        <div className="flex-1">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
