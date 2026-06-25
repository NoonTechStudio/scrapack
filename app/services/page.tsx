// REVIEW VERSION — Logo6 Theme
// Original theme backup: git stash or
// revert to previous commit if needed

import ServicesHero from "@/components/services/ServicesHero";
import CoreServices from "@/components/services/CoreServices";
import OCCGradeDetails from "@/components/services/OCCGradeDetails";
import ServicesProcess from "@/components/services/ServicesProcess";
import WhoWeServe from "@/components/services/WhoWeServe";
import ServicesFAQ from "@/components/services/ServicesFAQ";
import ServicesCTA from "@/components/services/ServicesCTA";

export const metadata = {
  title: "OCC Export Services | ScraPack Solutions LLC — Grade 11 & 12",
  description:
    "ScraPack Solutions offers full-service OCC export from the USA to India. We source, bale, document, and ship OCC Grade 11 and Grade 12 corrugated cardboard to Indian paper mills and traders.",
  keywords: "OCC Grade 11 export, OCC Grade 12 export, corrugated cardboard baling USA, OCC export documentation, FCL shipping India, OCC sourcing Philadelphia",
  openGraph: {
    title: "OCC Export Services | ScraPack Solutions LLC",
    description: "Full-service OCC Grade 11 & 12 export from USA to India — sourcing, baling, documentation, and FCL shipping to all major Indian ports.",
    url: "https://scrapacksolutions.com/services",
    siteName: "ScraPack Solutions LLC",
    type: "website",
  },
  alternates: {
    canonical: "https://scrapacksolutions.com/services",
  },
};

export default function ServicesPage() {
  return (
    <div className="pb-20 md:pb-0">
      <ServicesHero />
      <CoreServices />
      <OCCGradeDetails />
      <ServicesProcess />
      <WhoWeServe />
      <ServicesFAQ />
      <ServicesCTA />
    </div>
  );
}
