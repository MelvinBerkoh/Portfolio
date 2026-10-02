import { AboutSection } from "@/components/home/redesign/about-section";
import { AdditionalWorkSection } from "@/components/home/redesign/additional-work-section";
import { ApplicationTrackerShowcase } from "@/components/home/redesign/application-tracker-showcase";
import { CommercePulseShowcase } from "@/components/home/redesign/commerce-pulse-showcase";
import { ContactSection } from "@/components/home/redesign/contact-section";
import { CustomCursor } from "@/components/home/redesign/custom-cursor";
import { HeroSection } from "@/components/home/redesign/hero-section";
import { InteractiveBackground } from "@/components/home/redesign/interactive-background";
import { JourneySection } from "@/components/home/redesign/journey-section";
import { OpsDeskShowcase } from "@/components/home/redesign/opsdesk-showcase";
import { PolicyScopeShowcase } from "@/components/home/redesign/policyscope-showcase";
import { SiteHeader } from "@/components/home/redesign/site-header";
import { SkillsSection } from "@/components/home/redesign/skills-section";

export default function Page() {
  return (
    <main className="relative isolate min-h-screen overflow-x-hidden text-foreground">
      <InteractiveBackground />
      <CustomCursor />

      <div className="relative z-10">
        <SiteHeader />
        <HeroSection />
        <OpsDeskShowcase />
        <ApplicationTrackerShowcase />
        <PolicyScopeShowcase />
        <CommercePulseShowcase />
        <JourneySection />
        <SkillsSection />
        <AdditionalWorkSection />
        <AboutSection />
        <ContactSection />
      </div>
    </main>
  );
}