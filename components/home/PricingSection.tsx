import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { pricing } from "@/content/en/home";

export function PricingSection() {
  return (
    <Section
      id="pricing"
      eyebrow={pricing.eyebrow}
      heading={
        <>
          {pricing.heading}
          <span className="block text-brand">{pricing.tagline}</span>
        </>
      }
      description={pricing.description}
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {pricing.plans.map((plan) => (
          <Card key={plan.name} className="flex h-full flex-col p-8">
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold">{plan.name}</h3>
              <p className="text-sm uppercase tracking-[0.12em] text-text-soft">
                {plan.priceLabel}
              </p>
              {"price" in plan ? (
                <p className="text-5xl font-semibold text-brand">{plan.price}</p>
              ) : null}
              {"priceSuffix" in plan ? (
                <p className="text-text-muted">{plan.priceSuffix}</p>
              ) : null}
              {"footnote" in plan ? (
                <p className="text-sm text-text-soft">{plan.footnote}</p>
              ) : null}
            </div>

            <dl className="mt-8 space-y-4">
              {plan.features.map((feature, index) => (
                <div
                  key={`${feature.label}-${feature.value}-${index}`}
                  className="grid gap-1 border-b border-border pb-4 last:border-b-0"
                >
                  {feature.label ? (
                    <dt className="text-sm font-semibold text-foreground">
                      {feature.label}
                    </dt>
                  ) : null}
                  <dd className="text-text-muted">{feature.value}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-auto pt-8">
              <Button variant="primary" href="#demo">
                {plan.cta}
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
