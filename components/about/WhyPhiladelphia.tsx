// REVIEW VERSION — Logo6 Theme
// Original theme backup: git stash or
// revert to previous commit if needed

"use client";

import { useRef, useEffect } from "react";

const cards = [
  {
    icon: "🏭",
    title: "East Coast OCC Hub",
    text: "Pennsylvania and surrounding states generate millions of tonnes of OCC annually from retail, warehousing, and manufacturing.",
  },
  {
    icon: "🚢",
    title: "Port Access",
    text: "Direct access to the Port of Philadelphia and nearby Port of Baltimore and Port of New York for container exports.",
  },
  {
    icon: "🛣️",
    title: "Logistics Network",
    text: "Philadelphia sits at the intersection of major I-95 and I-76 corridors — ideal for trucking OCC from across the region.",
  },
  {
    icon: "🤝",
    title: "Supplier Network",
    text: "Deep relationships with OCC recyclers, brokers, and exporters across the Philadelphia metro area and beyond.",
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
      style={{ backgroundColor: "#1B5E20" }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center">
          <p
            className="text-xs font-bold tracking-widest uppercase mb-4 reveal"
            style={{ color: "#E8820C" }}
          >
            OUR LOCATION
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-white reveal reveal-delay-1">
            Why Philadelphia?
          </h2>
          <p
            className="text-lg mt-4 max-w-2xl mx-auto reveal reveal-delay-2"
            style={{ color: "#A5D6A7" }}
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
              className={`rounded-2xl p-6 text-center transition-all duration-300 hover:bg-white/10 reveal reveal-delay-${i + 1}`}
              style={{
                backgroundColor: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <div className="text-3xl mb-4">{card.icon}</div>
              <h3 className="font-bold text-white text-sm leading-snug mb-2">
                {card.title}
              </h3>
              <p className="text-xs leading-relaxed" style={{ color: "#C8E6C9" }}>
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
