import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { about } from "@/content/en/home";

export function AboutSection() {
  return (
    <Section
      id="about"
      heading={
        <>
          {about.heading}
          <span className="block text-brand">{about.tagline}</span>
        </>
      }
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {about.pillars.map((pillar) => (
          <Card key={pillar.title} className="p-6">
            <h3 className="text-xl font-semibold">
              {pillar.title}
              {"titleEmphasis" in pillar ? (
                <span className="block text-brand">{pillar.titleEmphasis}</span>
              ) : null}
            </h3>
            <p className="mt-4 text-text-muted">{pillar.description}</p>
          </Card>
        ))}
      </div>
      <div className="mt-8">
        <Button variant="primary" href="#demo">
          {about.cta}
        </Button>
      </div>
    </Section>
  );
}
