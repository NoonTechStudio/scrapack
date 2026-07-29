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
    topColor: "#217344",
    badgeBg: "#E6F2EA",
    badgeColor: "#175434",
    watermarkColor: "rgba(33,115,68,0.06)",
    specBg: "#F2F9F5",
    specBorder: "rgba(33,115,68,0.20)",
    specText: "#175434",
    linkText: "Request pricing for Grade 11 →",
  },
  {
    number: "12",
    badge: "OCC GRADE 12",
    title: "Mixed OCC",
    description:
      "Baled corrugated containers with standard sorting. Cost-effective for high-volume operations. Consistent supply with full export documentation.",
    specs: ["Standard sorting", "High volume", "Baled", "Export ready", "Cost effective"],
    topColor: "#CC9F5F",
    badgeBg: "#FAF0DF",
    badgeColor: "#8A6224",
    watermarkColor: "rgba(204,159,95,0.10)",
    specBg: "#FDF8F0",
    specBorder: "rgba(204,159,95,0.35)",
    specText: "#6B4A15",
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
          <p className="eyebrow mb-3">What We Export</p>
          <h2
            className="text-4xl sm:text-5xl font-bold mb-4"
            style={{ color: "#16281F" }}
          >
            Our OCC Products
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "#6C7A73" }}>
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
                      style={{ color: "#16281F" }}
                    >
                      {title}
                    </h3>

                    <p className="text-sm leading-relaxed mb-6" style={{ color: "#6C7A73" }}>
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
                        style={{ color: "#8A6224" }}
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
