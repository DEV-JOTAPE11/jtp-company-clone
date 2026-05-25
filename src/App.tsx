import { TopNavigation } from "./components/layout/TopNavigation";
import { SiteFooter } from "./components/layout/SiteFooter";
import { AIAgentSection } from "./components/sections/AIAgentSection";
import { ComparisonSection } from "./components/sections/ComparisonSection";
import { ContactSection } from "./components/sections/ContactSection";
import { DifferentialsSection } from "./components/sections/DifferentialsSection";
import { HeroSection } from "./components/sections/HeroSection";
import { ServicesSection } from "./components/sections/ServicesSection";
import { TestimonialsSection } from "./components/sections/TestimonialsSection";
import { ParticlesCanvas } from "./components/shared/ParticlesCanvas";
import { WhatsAppFloat } from "./components/shared/WhatsAppFloat";
import { useParticlesCanvas } from "./hooks/useParticlesCanvas";
import { useSiteInteractions } from "./hooks/useSiteInteractions";

export default function App() {
  useParticlesCanvas();
  useSiteInteractions();

  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden relative">
      <ParticlesCanvas />
      <TopNavigation />
      <HeroSection />
      <DifferentialsSection />
      <TestimonialsSection />
      <ServicesSection />
      <ComparisonSection />
      <AIAgentSection />
      <ContactSection />
      <SiteFooter />
      <WhatsAppFloat />
    </main>
  );
}
