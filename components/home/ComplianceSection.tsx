import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { compliance } from "@/content/en/home";

export function ComplianceSection() {
  return (
    <Section tone="muted" heading={compliance.heading}>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {compliance.badges.map((badge) => (
          <Card key={badge.title} className="p-6 text-center">
            <p className="text-2xl font-semibold text-brand">{badge.title}</p>
            <p className="mt-2 text-sm uppercase tracking-[0.12em] text-text-soft">
              {badge.subtitle}
            </p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
