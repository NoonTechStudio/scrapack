import HeroSection from "@/components/home/HeroSection";
import DualAudienceSection from "@/components/home/DualAudienceSection";
import PhotoSection from "@/components/home/PhotoSection";
import OCCGradesSection from "@/components/home/OCCGradesSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ProcessSection from "@/components/home/ProcessSection";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <DualAudienceSection />
      <PhotoSection />
      <OCCGradesSection />
      <WhyChooseUs />
      <ProcessSection />
      <CTASection />
    </>
  );
}
