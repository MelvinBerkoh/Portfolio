import { CustomCursor } from "@/components/home/redesign/custom-cursor";
import { HeroSection } from "@/components/home/redesign/hero-section";
import { InteractiveBackground } from "@/components/home/redesign/interactive-background";
import { SiteHeader } from "@/components/home/redesign/site-header";

export default function RedesignPreviewPage() {
  return (
    <main className="relative isolate min-h-screen overflow-x-hidden text-foreground">
      <InteractiveBackground />
      <CustomCursor />

      <div className="relative z-10">
        <SiteHeader />
        <HeroSection />
      </div>
    </main>
  );
}