import AboutHero from "@/components/about/AboutHero";
import OurStory from "@/components/about/OurStory";
import MissionValues from "@/components/about/MissionValues";
import WhatWeDo from "@/components/about/WhatWeDo";
import WhyPhiladelphia from "@/components/about/WhyPhiladelphia";
import MeetFounder from "@/components/about/MeetFounder";
import AboutCTA from "@/components/about/AboutCTA";

export const metadata = {
  title: "About Us | ScraPack Solutions LLC",
  description:
    "Learn about ScraPack Solutions LLC — Philadelphia-based OCC export trading company connecting US recyclers with Indian paper mills.",
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
