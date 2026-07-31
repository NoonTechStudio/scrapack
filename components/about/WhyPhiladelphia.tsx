"use client";

import { useRef, useEffect } from "react";
import {
  FactoryIcon,
  HandshakeIcon,
  RouteIcon,
  ShipIcon,
} from "@/components/icons";

const cards = [
  {
    Icon: FactoryIcon,
    title: "East Coast Recovery Hub",
    text: "Pennsylvania and surrounding states generate millions of tonnes of OCC and scrap tires annually from retail, warehousing, and automotive activity.",
  },
  {
    Icon: ShipIcon,
    title: "Port Access",
    text: "Direct access to the Port of Philadelphia and nearby Port of Baltimore and Port of New York for container exports.",
  },
  {
    Icon: RouteIcon,
    title: "Logistics Network",
    text: "Philadelphia sits at the intersection of major I-95 and I-76 corridors — ideal for trucking material from across the region.",
  },
  {
    Icon: HandshakeIcon,
    title: "Supplier Network",
    text: "Deep relationships with recyclers, brokers, and exporters across the Philadelphia metro area and beyond.",
  },
];

export default function WhyPhiladelphia() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const els = ref.current?.querySelectorAll(".reveal");
    if (!els?.length) return;
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        }),
      { threshold: 0.1 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="py-16 md:py-24 px-6 lg:px-12 text-white"
      style={{
        background: "linear-gradient(135deg, #175434 0%, #0E3A24 55%, #10252B 100%)",
      }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center">
          <p className="eyebrow eyebrow-on-dark mb-4 reveal">Our Location</p>
          <h2 className="text-3xl md:text-4xl font-black text-white reveal reveal-delay-1">
            Why Philadelphia?
          </h2>
          <p
            className="text-lg mt-4 max-w-2xl mx-auto reveal reveal-delay-2"
            style={{ color: "#9FD6B7" }}
          >
            Location is not an accident. Philadelphia puts us exactly where we
            need to be.
          </p>
        </div>

        {/* Cards grid */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {cards.map((card, i) => (
            <div
              key={card.title}
              className={`group rounded-2xl p-6 text-center border border-white/10 bg-white/[0.05] transition-all duration-300 hover:bg-white/10 hover:border-[#E8BA74]/45 hover:-translate-y-1 reveal reveal-delay-${i + 1}`}
            >
              <div className="icon-tile icon-tile-onDark w-12 h-12 mx-auto mb-4 transition-colors duration-300 group-hover:bg-[#E8BA74] group-hover:text-[#16281F]">
                <card.Icon size={24} />
              </div>
              <h3 className="font-bold text-white text-sm leading-snug mb-2">
                {card.title}
              </h3>
              <p className="text-xs leading-relaxed" style={{ color: "#C6E7D3" }}>
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
