"use client";

import { useRef, useEffect } from "react";
import { BaleIcon, LayersIcon } from "@/components/icons";

const steps = [
  {
    n: 1,
    title: "OCC Collection",
    desc: "Recyclers across the US collect and bale corrugated material",
  },
  {
    n: 2,
    title: "Grade Inspection",
    desc: "ScraPack inspects and verifies OCC 11 or OCC 12 grade standards",
  },
  {
    n: 3,
    title: "Container Loading",
    desc: "Bales loaded into 20ft or 40ft containers in Philadelphia",
  },
  {
    n: 4,
    title: "Export Documentation",
    desc: "Full shipping docs prepared — B/L, packing list, certificate of origin",
  },
  {
    n: 5,
    title: "India Delivery",
    desc: "Container shipped to buyer's port of discharge across India",
  },
];

const grades = [
  {
    Icon: BaleIcon,
    iconTile: "icon-tile-green",
    grade: "OCC Grade 11",
    subtitle: "Double-Sorted OCC",
    text: "The cleanest, most premium grade of Old Corrugated Containers. Free from all prohibitive materials. Double-sorted, low moisture, baled and strapped. Preferred by premium Indian paper mills for high-quality recycled board production.",
    tags: ["Double sorted", "Low moisture", "Baled & strapped", "Export ready"],
    bg: "#F2F9F5",
    border: "1px solid rgba(33,115,68,0.15)",
  },
  {
    Icon: LayersIcon,
    iconTile: "icon-tile-kraft",
    grade: "OCC Grade 12",
    subtitle: "Mixed OCC",
    text: "Standard-sorted Old Corrugated Containers with allowable outthrows. Cost-effective grade for high-volume mills. Consistent supply with full export documentation included on every shipment.",
    tags: ["Standard sort", "High volume", "Export ready", "Cost effective"],
    bg: "#FAF0DF",
    border: "1px solid rgba(204,159,95,0.20)",
  },
];

export default function WhatWeDo() {
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
    <section ref={ref} className="bg-white py-16 md:py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center">
          <p className="eyebrow mb-4 reveal">Our Business</p>
          <h2
            className="text-3xl md:text-4xl font-black reveal reveal-delay-1"
            style={{ color: "#16281F" }}
          >
            How ScraPack Operates
          </h2>
          <p className="text-lg mt-4 max-w-2xl mx-auto reveal reveal-delay-2" style={{ color: "#46554E" }}>
            We sit at the center of the USA → India OCC trade corridor.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Left — process flow card */}
          <div
            className="rounded-3xl p-10 text-white reveal reveal-delay-1"
            style={{
              background: "linear-gradient(135deg, #175434, #217344)",
            }}
          >
            <h3 className="font-black text-2xl">The Trade Flow</h3>
            <p className="text-sm mt-1" style={{ color: "#9FD6B7" }}>
              From US recycler to Indian paper mill
            </p>

            <div className="mt-8">
              {steps.map((step, idx) => (
                <div key={step.n}>
                  <div className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center font-black text-sm flex-shrink-0"
                      style={{ backgroundColor: "#E8BA74", color: "#16281F" }}
                    >
                      {step.n}
                    </div>
                    <div className="pt-1">
                      <p className="font-semibold text-white">{step.title}</p>
                      <p
                        className="text-sm mt-0.5"
                        style={{ color: "#C6E7D3" }}
                      >
                        {step.desc}
                      </p>
                    </div>
                  </div>
                  {idx < steps.length - 1 && (
                    <div
                      className="w-0.5 h-6 ml-5 my-0.5"
                      style={{ backgroundColor: "rgba(204,159,95,0.40)" }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right — grade cards */}
          <div className="flex flex-col gap-6 reveal reveal-delay-2">
            {grades.map((g) => (
              <div
                key={g.grade}
                className="rounded-3xl p-8"
                style={{
                  backgroundColor: g.bg,
                  border: g.border,
                }}
              >
                <div className={`icon-tile ${g.iconTile} w-14 h-14 mb-5`}>
                  <g.Icon size={28} />
                </div>
                <h3
                  className="font-black text-xl"
                  style={{ color: "#16281F" }}
                >
                  {g.grade}
                </h3>
                <p
                  className="font-semibold text-sm mt-1"
                  style={{ color: "#8A6224" }}
                >
                  {g.subtitle}
                </p>
                <p className="mt-3 leading-relaxed" style={{ color: "#46554E" }}>{g.text}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {g.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-white border border-gray-200 text-gray-700 text-xs px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
