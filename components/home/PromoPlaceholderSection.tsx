import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { promoPlaceholder } from "@/content/en/home";

export function PromoPlaceholderSection() {
  return (
    <Section tone="muted">
      <div className="card-surface mx-auto max-w-4xl p-8 text-center md:p-12">
        <h2 className="section-heading">{promoPlaceholder.title}</h2>
        <p className="mt-4 text-lg text-text-muted">{promoPlaceholder.description}</p>
        <div className="mt-8">
          <Button variant="primary" href="#demo">
            {promoPlaceholder.cta}
          </Button>
        </div>
      </div>
    </Section>
  );
}
