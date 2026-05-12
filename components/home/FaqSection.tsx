import { Accordion } from "@/components/ui/Accordion";
import { Section } from "@/components/ui/Section";
import { faq } from "@/content/en/home";

export function FaqSection() {
  return (
    <Section id="faq" eyebrow={faq.eyebrow} heading={faq.heading}>
      <Accordion
        items={faq.items.map((item, index) => ({
          id: `faq-${index}`,
          question: item.question,
          answer: item.answer,
        }))}
      />
    </Section>
  );
}
