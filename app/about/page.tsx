import AboutHero from "@/components/about/AboutHero";
import OurStory from "@/components/about/OurStory";
import MissionValues from "@/components/about/MissionValues";
import WhatWeDo from "@/components/about/WhatWeDo";
import WhyPhiladelphia from "@/components/about/WhyPhiladelphia";
import MeetFounder from "@/components/about/MeetFounder";
import AboutCTA from "@/components/about/AboutCTA";

export const metadata = {
  title: "About ScraPack Solutions LLC | OCC Export Trading Company",
  description:
    "ScraPack Solutions LLC is a Philadelphia-based OCC export trading company founded by Kashyap Patel. We connect US OCC recyclers with Indian paper mills, exporting Grade 11 & 12 corrugated cardboard.",
  keywords: "ScraPack Solutions LLC, OCC trading company Philadelphia, Kashyap Patel OCC exporter, US India cardboard trade, OCC recycling company USA",
  openGraph: {
    title: "About ScraPack Solutions LLC | OCC Export Trading Company",
    description: "Philadelphia-based OCC export trading company connecting US recyclers with Indian paper mills — founded by Kashyap Patel.",
    url: "https://scrapacksolutions.com/about",
    siteName: "ScraPack Solutions LLC",
    type: "website",
  },
  alternates: {
    canonical: "https://scrapacksolutions.com/about",
  },
};

export default function AboutPage() {
  return (
    <div className="pb-20 md:pb-0">
      <AboutHero />
      <OurStory />
      <MissionValues />
      <WhatWeDo />
      <WhyPhiladelphia />
      <MeetFounder />
      <AboutCTA />
    </div>
  );
}
