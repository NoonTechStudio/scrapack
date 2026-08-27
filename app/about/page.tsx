import AboutHero from "@/components/about/AboutHero";
import OurStory from "@/components/about/OurStory";
import MissionValues from "@/components/about/MissionValues";
import WhatWeDo from "@/components/about/WhatWeDo";
import WhyPhiladelphia from "@/components/about/WhyPhiladelphia";
import MeetFounder from "@/components/about/MeetFounder";
import AboutCTA from "@/components/about/AboutCTA";

export const metadata = {
  title: {
    absolute: "About ScraPack Solutions LLC | OCC & Scrap Tire Export Company",
  },
  description:
    "ScraPack Solutions LLC is a Philadelphia-based export trading company founded by Kashyap Patel. We connect US recyclers with paper mills and rubber processors worldwide, exporting OCC Grade 11 & 12 and baled scrap tires.",
  keywords: "ScraPack Solutions LLC, OCC trading company Philadelphia, Kashyap Patel OCC exporter, US India cardboard trade, OCC recycling company USA, scrap tire exporter USA, baled scrap tires supplier",
  openGraph: {
    title: "About ScraPack Solutions LLC | OCC & Scrap Tire Export Company",
    description: "Philadelphia-based export trading company connecting US recyclers with paper mills and rubber processors worldwide — founded by Kashyap Patel.",
    url: "/about",
    siteName: "ScraPack Solutions LLC",
    type: "website",
  },
  alternates: {
    canonical: "/about",
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
