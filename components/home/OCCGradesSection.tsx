// REVIEW VERSION — Logo6 Theme
// Original theme backup: git stash or
// revert to previous commit if needed

"use client";

import { useRef, useEffect } from "react";

const GRADES = [
  {
    number: "11",
    badge: "OCC GRADE 11",
    title: "Double-Sorted OCC",
    description:
      "The cleanest grade of corrugated containers, free from all contaminants. Double-sorted, low moisture, baled and strapped for export. Preferred by premium Indian paper mills.",
    specs: ["Double sorted", "Low moisture", "Baled & strapped", "Export ready", "Premium grade"],
    topColor: "#2E7D32",
    badgeBg: "#E8F5E9",
    badgeColor: "#1B5E20",
    watermarkColor: "rgba(46,125,50,0.06)",
    specBg: "#F1F8E9",
    specBorder: "rgba(46,125,50,0.20)",
    specText: "#1B5E20",
    linkText: "Request pricing for Grade 11 →",
  },
  {
    number: "12",
    badge: "OCC GRADE 12",
    title: "Mixed OCC",
    description:
      "Baled corrugated containers with standard sorting. Cost-effective for high-volume operations. Consistent supply with full export documentation.",
    specs: ["Standard sorting", "High volume", "Baled", "Export ready", "Cost effective"],
    topColor: "#E8820C",
    badgeBg: "#FFF3E0",
    badgeColor: "#C96B00",
    watermarkColor: "rgba(232,130,12,0.06)",
    specBg: "#FFF8F0",
    specBorder: "rgba(232,130,12,0.20)",
    specText: "#7C2D12",
    linkText: "Request pricing for Grade 12 →",
  },
];

export default function OCCGradesSection() {
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
      id="grades"
      className="py-24 px-6 lg:px-12 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14 reveal">
          <p
            className="text-xs font-bold tracking-widest uppercase mb-3"
            style={{ color: "#E8820C" }}
          >
            What We Export
          </p>
          <h2
            className="text-4xl sm:text-5xl font-bold mb-4"
            style={{ color: "#1A2E1A" }}
          >
            Our OCC Products
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "#6B7280" }}>
            Export-grade corrugated cardboard, sourced and baled across the
            United States.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {GRADES.map(
            (
              {
                number,
                badge,
                title,
                description,
                specs,
                topColor,
                badgeBg,
                badgeColor,
                watermarkColor,
                specBg,
                specBorder,
                specText,
                linkText,
              },
              i
            ) => (
              <div
                key={number}
                className={`reveal ${
                  i === 0 ? "reveal-delay-1" : "reveal-delay-2"
                } bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden`}
              >
                {/* Top colour band */}
                <div
                  className="h-1.5"
                  style={{ backgroundColor: topColor }}
                />

                {/* Card body */}
                <div className="relative p-10">
                  {/* Faint watermark number */}
                  <div
                    className="absolute right-4 bottom-0 select-none pointer-events-none font-black leading-none text-[100px] md:text-[180px]"
                    style={{ color: watermarkColor, lineHeight: 1 }}
                  >
                    {number}
                  </div>

                  <div className="relative z-10">
                    {/* Grade badge */}
                    <span
                      className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-widest"
                      style={{ backgroundColor: badgeBg, color: badgeColor }}
                    >
                      {badge}
                    </span>

                    <h3
                      className="text-2xl font-bold mt-4 mb-3"
                      style={{ color: "#1A2E1A" }}
                    >
                      {title}
                    </h3>

                    <p className="text-sm leading-relaxed mb-6" style={{ color: "#6B7280" }}>
                      {description}
                    </p>

                    {/* Spec tags */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {specs.map((s) => (
                        <span
                          key={s}
                          className="px-4 py-2 rounded-full text-sm border"
                          style={{
                            backgroundColor: specBg,
                            borderColor: specBorder,
                            color: specText,
                          }}
                        >
                          {s}
                        </span>
                      ))}
                    </div>

                    {/* Bottom link */}
                    <div className="pt-6 border-t border-gray-100">
                      <a
                        href="/contact"
                        className="text-sm font-semibold transition-colors hover:opacity-80"
                        style={{ color: "#E8820C" }}
                      >
                        {linkText}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
