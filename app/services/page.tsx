import ServicesHero from "@/components/services/ServicesHero";
import CoreServices from "@/components/services/CoreServices";
import OCCGradeDetails from "@/components/services/OCCGradeDetails";
import ServicesProcess from "@/components/services/ServicesProcess";
import WhoWeServe from "@/components/services/WhoWeServe";
import ServicesFAQ from "@/components/services/ServicesFAQ";
import ServicesCTA from "@/components/services/ServicesCTA";

export const metadata = {
  title: "Export Services | ScraPack Solutions LLC — OCC & Scrap Tires",
  description:
    "ScraPack Solutions offers full-service export from the USA. We source, bale, document, and ship OCC Grade 11 and Grade 12 corrugated cardboard and baled scrap tires to mills and processors worldwide.",
  keywords: "OCC Grade 11 export, OCC Grade 12 export, corrugated cardboard baling USA, OCC export documentation, FCL shipping India, OCC sourcing Philadelphia, scrap tire bales export, whole scrap tires FOB USA, end-of-life tire export",
  openGraph: {
    title: "Export Services | ScraPack Solutions LLC",
    description: "Full-service export of OCC Grade 11 & 12 and baled scrap tires from the USA — sourcing, baling, documentation, and FCL shipping to major world ports.",
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
