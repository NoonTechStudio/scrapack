"use client";

import { useRef, useEffect } from "react";

const FEATURES = [
  {
    icon: "📍",
    title: "Philadelphia, PA",
    description:
      "Strategically based in one of the USA's top OCC export corridors, with direct access to East Coast shipping ports.",
  },
  {
    icon: "🔍",
    title: "Grade Verified",
    description:
      "Every shipment is inspected to OCC 11 and OCC 12 standards. What you order is exactly what arrives at your port.",
  },
  {
    icon: "🚢",
    title: "Export to India",
    description:
      "We know the India trade route. Full documentation — packing list, B/L, certificate of origin — handled seamlessly.",
  },
  {
    icon: "🤝",
    title: "Relationship First",
    description:
      "We're not a marketplace. We build long-term supply relationships with both our US partners and Indian buyers.",
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
      className="py-24 px-6 lg:px-12"
      style={{ backgroundColor: "#1A2E1A" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14 reveal">
          <p
            className="text-xs font-bold tracking-widest uppercase mb-3"
            style={{ color: "#F59E0B" }}
          >
            Our Advantage
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Why ScraPack?
          </h2>
          <p className="text-lg text-gray-300 max-w-xl mx-auto">
            What makes us the preferred OCC export partner.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {FEATURES.map((feat, i) => (
            <div
              key={feat.title}
              className={`reveal reveal-delay-${i + 1} rounded-3xl p-6 sm:p-8 border transition-all duration-300 cursor-default`}
              style={{
                backgroundColor: "rgba(255,255,255,0.05)",
                borderColor: "rgba(255,255,255,0.10)",
              }}
              onMouseOver={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.backgroundColor = "rgba(255,255,255,0.09)";
                el.style.borderColor = "rgba(255,255,255,0.20)";
              }}
              onMouseOut={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.backgroundColor = "rgba(255,255,255,0.05)";
                el.style.borderColor = "rgba(255,255,255,0.10)";
              }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-6"
                style={{ backgroundColor: "rgba(255,255,255,0.10)" }}
              >
                {feat.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {feat.title}
              </h3>
              <p className="text-base leading-relaxed text-gray-300">
                {feat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
