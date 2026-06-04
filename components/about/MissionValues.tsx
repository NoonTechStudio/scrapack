// REVIEW VERSION — Logo6 Theme
// Original theme backup: git stash or
// revert to previous commit if needed

"use client";

import { useRef, useEffect } from "react";

const values = [
  {
    icon: "🤝",
    title: "Reliability",
    text: "We do what we say. When we commit to a price, a grade, and a delivery schedule — we honor it. Our US suppliers and Indian buyers both know that ScraPack's word is our contract.",
    cardStyle: {
      borderTop: "4px solid #2E7D32",
      backgroundColor: "#ffffff",
    },
    iconBg: "#E8F5E9",
    titleColor: "#1A2E1A",
    textColor: "#4A5568",
  },
  {
    icon: "🔍",
    title: "Transparency",
    text: "No hidden costs, no grade surprises. We provide full documentation — packing lists, certificates of origin, moisture reports — so both parties always know exactly what is being traded.",
    cardStyle: {
      backgroundColor: "#1B5E20",
    },
    iconBg: "rgba(255,255,255,0.1)",
    titleColor: "#ffffff",
    textColor: "#C8E6C9",
  },
  {
    icon: "♻️",
    title: "Sustainability",
    text: "OCC recycling is environmental work. Every tonne of corrugated we export from the US to Indian paper mills directly reduces virgin wood pulp consumption and extends the lifecycle of paper fiber globally.",
    cardStyle: {
      borderTop: "4px solid #E8820C",
      backgroundColor: "#ffffff",
    },
    iconBg: "#FFF3E0",
    titleColor: "#1A2E1A",
    textColor: "#4A5568",
  },
];

export default function MissionValues() {
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
      className="py-16 md:py-24 px-6 lg:px-12"
      style={{ backgroundColor: "#F1F8E9" }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center">
          <p
            className="text-xs font-bold tracking-widest uppercase mb-4 reveal"
            style={{ color: "#E8820C" }}
          >
            WHAT DRIVES US
          </p>
          <h2
            className="text-3xl md:text-4xl font-black reveal reveal-delay-1"
            style={{ color: "#1A2E1A" }}
          >
            Our Mission &amp; Core Values
          </h2>
          <p className="text-lg mt-4 max-w-2xl mx-auto reveal reveal-delay-2" style={{ color: "#4A5568" }}>
            Every decision we make at ScraPack is guided by three principles.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((v, i) => (
            <div
              key={v.title}
              className={`rounded-3xl p-10 shadow-sm reveal reveal-delay-${i + 1}`}
              style={v.cardStyle}
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl"
                style={{ backgroundColor: v.iconBg }}
              >
                {v.icon}
              </div>
              <h3
                className="text-2xl font-black mt-6"
                style={{ color: v.titleColor }}
              >
                {v.title}
              </h3>
              <p
                className="mt-4 leading-relaxed"
                style={{ color: v.textColor }}
              >
                {v.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
