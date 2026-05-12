import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { features } from "@/content/en/home";

export function FeaturesSection() {
  return (
    <Section
      id="features"
      eyebrow={features.eyebrow}
      heading={features.heading}
      description={features.description}
    >
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {features.items.map((item) => (
          <Card key={item.title} className="p-6">
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="mt-4 text-text-muted">{item.description}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
