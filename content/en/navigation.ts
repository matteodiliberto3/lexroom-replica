export type NavLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type NavDropdown = {
  label: string;
  columns: {
    title: string;
    links: NavLink[];
  }[];
};

export const primaryNavigation: NavDropdown[] = [
  {
    label: "Discover Lexroom",
    columns: [
      {
        title: "Functionality",
        links: [
          {
            label: "Lexroom functionality",
            href: "https://www.lexroom.ai/en/scopri-lexroom",
            external: true,
          },
        ],
      },
      {
        title: "For whom",
        links: [
          {
            label: "Professionals",
            href: "https://www.lexroom.ai/en/prenota-demo",
            external: true,
          },
          {
            label: "Companies",
            href: "https://www.lexroom.ai/en/enterprise",
            external: true,
          },
        ],
      },
    ],
  },
  {
    label: "Resources",
    columns: [
      {
        title: "Contents",
        links: [
          { label: "Blog", href: "https://www.lexroom.ai/en/blog", external: true },
          { label: "FAQ", href: "https://www.lexroom.ai/en/faq", external: true },
          {
            label: "Product tour",
            href: "https://www.lexroom.ai/en/risorse/product-tour",
            external: true,
          },
        ],
      },
      {
        title: "Practical tools",
        links: [
          {
            label: "Invoice calculator",
            href: "https://www.lexroom.ai/en/risorse",
            external: true,
          },
          {
            label: "Procedural terms calculator",
            href: "https://www.lexroom.ai/en/risorse/calcolatore-termini",
            external: true,
          },
          {
            label: "Forensic compensation calculator",
            href: "https://www.lexroom.ai/en/risorse",
            external: true,
          },
          {
            label: "ROI calculator",
            href: "https://www.lexroom.ai/en/risorse",
            external: true,
          },
        ],
      },
      {
        title: "Other",
        links: [
          {
            label: "About us",
            href: "https://www.lexroom.ai/en/about-us",
            external: true,
          },
          {
            label: "Careers",
            href: "https://www.lexroom.ai/en/careers",
            external: true,
          },
        ],
      },
    ],
  },
];

export const anchorNavigation: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#demo" },
];

export const footerExploreLinks: NavLink[] = [
  { label: "About", href: "https://www.lexroom.ai/en/about-us", external: true },
  { label: "Features", href: "#features" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Pricing", href: "#pricing" },
  {
    label: "Resources",
    href: "https://www.lexroom.ai/en/risorse",
    external: true,
  },
  { label: "Careers", href: "https://www.lexroom.ai/en/careers", external: true },
  { label: "Contact", href: "#demo" },
];

export const footerLegalLinks: NavLink[] = [
  {
    label: "Privacy Policy",
    href: "https://www.lexroom.ai/en/privacy-policy",
    external: true,
  },
  {
    label: "Cookie Policy",
    href: "https://www.lexroom.ai/en/cookie-policy",
    external: true,
  },
  {
    label: "Terms and Conditions",
    href: "https://www.lexroom.ai/en/terms-and-conditions",
    external: true,
  },
  {
    label: "Information Security Policy",
    href: "https://www.lexroom.ai/en/information-security-policy",
    external: true,
  },
  {
    label: "Management System Policy",
    href: "https://www.lexroom.ai/en/management-system-policy",
    external: true,
  },
];

export const localeOptions = [
  { label: "Italian (Italy)", href: "https://www.lexroom.ai/", code: "IT" },
  { label: "German (Germany)", href: "https://www.lexroom.ai/de", code: "DE" },
  { label: "English", href: "/en", code: "EN" },
  { label: "Spanish", href: "https://www.lexroom.ai/es", code: "ES" },
] as const;
