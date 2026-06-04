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
  title: "Services | ScraPack Solutions LLC",
  description:
    "ScraPack Solutions offers OCC Grade 11 and Grade 12 export services from the USA to India. Full-service OCC trading — sourcing, baling, documentation, and shipping.",
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
