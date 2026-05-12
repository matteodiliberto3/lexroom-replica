"use client";

import { useState } from "react";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { testimonials } from "@/content/en/home";

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = testimonials.items[activeIndex];

  return (
    <Section
      id="testimonials"
      eyebrow={testimonials.eyebrow}
      heading={testimonials.heading}
    >
      <Card className="p-8 md:p-10">
        <blockquote className="text-2xl font-medium leading-relaxed">
          “{active.quote}”
        </blockquote>
        <p className="mt-6 text-lg font-semibold">{active.name}</p>
        <p className="text-text-muted">{active.role}</p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          {testimonials.items.map((item, index) => (
            <button
              key={item.name}
              type="button"
              className={`h-2.5 rounded-full transition-all ${
                index === activeIndex ? "w-10 bg-brand" : "w-2.5 bg-border"
              }`}
              aria-label={`Show testimonial from ${item.name}`}
              aria-pressed={index === activeIndex}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </Card>
    </Section>
  );
}
