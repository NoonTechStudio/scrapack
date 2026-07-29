import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import DualAudienceSection from "@/components/home/DualAudienceSection";
import PhotoSection from "@/components/home/PhotoSection";
import OCCGradesSection from "@/components/home/OCCGradesSection";
import TireSection from "@/components/home/TireSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ProcessSection from "@/components/home/ProcessSection";
import CTASection from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: 'ScraPack Solutions LLC | OCC & Scrap Tire Export from the USA',
  description: 'ScraPack Solutions LLC exports OCC Grade 11 & 12 corrugated cardboard and baled scrap tires from the USA to paper mills, pyrolysis plants and rubber recyclers worldwide. FOB shipments from major U.S. ports.',
  keywords: [
    'OCC export USA India',
    'OCC Grade 11',
    'OCC Grade 12',
    'corrugated cardboard export',
    'scrap paper export',
    'Philadelphia OCC trading',
    'used cardboard bales export',
    'Scrap Tire Exporter USA',
    'Baled Scrap Tires Supplier',
    'Whole Scrap Tires FOB USA',
    'Waste Tire Export',
    'Tire Recycling Material',
    'Scrap Tire Bales',
    'End-of-Life Tire Export',
    'Tire Scrap Supplier USA',
    'Scrap Tire Recycling Export',
    'FOB Scrap Tires USA',
  ].join(', '),
  openGraph: {
    title: 'ScraPack Solutions LLC | OCC & Scrap Tire Export from the USA',
    description: 'Connecting US recyclers with paper mills and rubber processors worldwide. Export-grade OCC 11 & 12 and baled scrap tires, FOB from major U.S. ports.',
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
      <TireSection />
      <WhyChooseUs />
      <ProcessSection />
      <CTASection />
    </>
  );
}
