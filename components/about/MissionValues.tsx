"use client";

import { useRef, useEffect } from "react";
import { HandshakeIcon, InspectIcon, RecycleIcon } from "@/components/icons";

const values = [
  {
    Icon: HandshakeIcon,
    title: "Reliability",
    text: "We do what we say. When we commit to a price, a grade, and a delivery schedule — we honor it. Our US suppliers and Indian buyers both know that ScraPack's word is our contract.",
    cardStyle: {
      borderTop: "4px solid #217344",
      backgroundColor: "#ffffff",
    },
    iconBg: "#E6F2EA",
    iconColor: "#217344",
    titleColor: "#16281F",
    textColor: "#46554E",
  },
  {
    Icon: InspectIcon,
    title: "Transparency",
    text: "No hidden costs, no grade surprises. We provide full documentation — packing lists, certificates of origin, moisture reports — so both parties always know exactly what is being traded.",
    cardStyle: {
      backgroundColor: "#175434",
    },
    iconBg: "rgba(255,255,255,0.1)",
    iconColor: "#E8BA74",
    titleColor: "#ffffff",
    textColor: "#C6E7D3",
  },
  {
    Icon: RecycleIcon,
    title: "Sustainability",
    text: "Recycling is environmental work. Every tonne of corrugated and every container of scrap tires we export displaces virgin material and extends the lifecycle of resources globally.",
    cardStyle: {
      borderTop: "4px solid #CC9F5F",
      backgroundColor: "#ffffff",
    },
    iconBg: "#FAF0DF",
    iconColor: "#8A6224",
    titleColor: "#16281F",
    textColor: "#46554E",
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
      style={{ backgroundColor: "#F2F9F5" }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center">
          <p className="eyebrow mb-4 reveal">What Drives Us</p>
          <h2
            className="text-3xl md:text-4xl font-black reveal reveal-delay-1"
            style={{ color: "#16281F" }}
          >
            Our Mission &amp; Core Values
          </h2>
          <p className="text-lg mt-4 max-w-2xl mx-auto reveal reveal-delay-2" style={{ color: "#46554E" }}>
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
                className="icon-tile w-16 h-16"
                style={{ backgroundColor: v.iconBg, color: v.iconColor }}
              >
                <v.Icon size={30} />
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
