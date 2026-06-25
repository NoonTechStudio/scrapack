import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import DualAudienceSection from "@/components/home/DualAudienceSection";
import PhotoSection from "@/components/home/PhotoSection";
import OCCGradesSection from "@/components/home/OCCGradesSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ProcessSection from "@/components/home/ProcessSection";
import CTASection from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: 'ScraPack Solutions LLC | OCC Export Trading — USA to India',
  description: 'ScraPack Solutions LLC exports OCC Grade 11 & 12 corrugated cardboard from Philadelphia, USA to paper mills across India. Trusted OCC trading partner for US recyclers and Indian buyers.',
  keywords: 'OCC export USA India, OCC Grade 11, OCC Grade 12, corrugated cardboard export, scrap paper export, Philadelphia OCC trading, used cardboard bales export',
  openGraph: {
    title: 'ScraPack Solutions LLC | OCC Export Trading — USA to India',
    description: 'Connecting US OCC recyclers with Indian paper mills. Export Grade 11 & 12 corrugated cardboard from Philadelphia to India.',
    url: 'https://scrapacksolutions.com',
    siteName: 'ScraPack Solutions LLC',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://scrapacksolutions.com',
  },
};

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
