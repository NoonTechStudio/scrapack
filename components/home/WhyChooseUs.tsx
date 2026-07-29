"use client";

import { useRef, useEffect } from "react";
import {
  HandshakeIcon,
  InspectIcon,
  MapPinIcon,
  ShipIcon,
} from "@/components/icons";

const FEATURES = [
  {
    Icon: MapPinIcon,
    title: "Philadelphia, PA",
    description:
      "Strategically based in one of the USA's top OCC export corridors, with direct access to East Coast shipping ports.",
  },
  {
    Icon: InspectIcon,
    title: "Grade Verified",
    description:
      "Every shipment is inspected to OCC 11 and OCC 12 standards. What you order is exactly what arrives at your port.",
  },
  {
    Icon: ShipIcon,
    title: "Global Export Reach",
    description:
      "We know the trade routes. Full documentation — packing list, B/L, certificate of origin — handled seamlessly.",
  },
  {
    Icon: HandshakeIcon,
    title: "Relationship First",
    description:
      "We're not a marketplace. We build long-term supply relationships with both our US partners and overseas buyers.",
  },
];

export default function WhyChooseUs() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const els = ref.current?.querySelectorAll(".reveal");
    if (!els?.length) return;
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        }),
      { threshold: 0.08 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-24 px-6 lg:px-12"
      style={{
        background:
          "linear-gradient(135deg, #175434 0%, #0E3A24 52%, #10252B 100%)",
      }}
    >
      {/* Warm glow so the dark band has depth */}
      <div
        className="pointer-events-none absolute -top-24 right-[-10%] w-[560px] h-[560px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(232,186,116,0.14) 0%, transparent 68%)" }}
      />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14 reveal">
          <p className="eyebrow eyebrow-on-dark mb-3">Our Advantage</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Why ScraPack?
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "#9FD6B7" }}>
            What makes us the preferred recovered-material export partner.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {FEATURES.map(({ Icon, title, description }, i) => (
            <div
              key={title}
              className={`reveal reveal-delay-${i + 1} group rounded-3xl p-6 sm:p-8 border border-white/10 bg-white/[0.05] transition-all duration-300 hover:bg-white/[0.09] hover:border-[#E8BA74]/45 hover:-translate-y-1`}
            >
              <div className="icon-tile icon-tile-onDark w-14 h-14 mb-6 transition-colors duration-300 group-hover:bg-[#E8BA74] group-hover:text-[#16281F]">
                <Icon size={26} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
              <p className="text-base leading-relaxed" style={{ color: "#C6E7D3" }}>
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
