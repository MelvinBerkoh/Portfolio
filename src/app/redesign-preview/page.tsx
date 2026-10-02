import { ApplicationTrackerShowcase } from "@/components/home/redesign/application-tracker-showcase";
import { CommercePulseShowcase } from "@/components/home/redesign/commerce-pulse-showcase";
import { CustomCursor } from "@/components/home/redesign/custom-cursor";
import { HeroSection } from "@/components/home/redesign/hero-section";
import { InteractiveBackground } from "@/components/home/redesign/interactive-background";
import { JourneySection } from "@/components/home/redesign/journey-section";
import { OpsDeskShowcase } from "@/components/home/redesign/opsdesk-showcase";
import { PolicyScopeShowcase } from "@/components/home/redesign/policyscope-showcase";
import { SiteHeader } from "@/components/home/redesign/site-header";

export default function RedesignPreviewPage() {
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
      </div>
    </main>
  );
}