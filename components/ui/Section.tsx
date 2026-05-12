import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  heading?: ReactNode;
  description?: string;
  children: ReactNode;
  className?: string;
  tone?: "default" | "brand" | "muted";
};

const toneClass = {
  default: "bg-background text-foreground",
  brand: "surface-panel",
  muted: "bg-surface-muted text-foreground",
};

export function Section({
  id,
  eyebrow,
  heading,
  description,
  children,
  className = "",
  tone = "default",
}: SectionProps) {
  return (
    <section id={id} className={`section-pad ${toneClass[tone]} ${className}`.trim()}>
      <div className="container-shell">
        {(eyebrow || heading || description) && (
          <div className="mb-10 max-w-3xl space-y-4">
            {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
            {heading ? <h2 className="section-heading">{heading}</h2> : null}
            {description ? (
              <p className="max-w-2xl text-lg text-text-muted">{description}</p>
            ) : null}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
