import { AboutSection } from "@/components/home/AboutSection";
import { ComplianceSection } from "@/components/home/ComplianceSection";
import { DemoRequestForm } from "@/components/home/DemoRequestForm";
import { FaqSection } from "@/components/home/FaqSection";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { HeroSection } from "@/components/home/HeroSection";
import { PricingSection } from "@/components/home/PricingSection";
import { PromoPlaceholderSection } from "@/components/home/PromoPlaceholderSection";
import { SupportLine } from "@/components/home/SupportLine";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";

export default function EnglishHomePage() {
  return (
    <main>
      <HeroSection />
      <div className="site-main-body">
        <AboutSection />
        <PromoPlaceholderSection />
        <FeaturesSection />
        <PricingSection />
        <TestimonialsSection />
        <FaqSection />
        <SupportLine />
        <ComplianceSection />
        <DemoRequestForm />
      </div>
    </main>
  );
}
