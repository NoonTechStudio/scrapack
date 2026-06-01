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
    topGradient: "linear-gradient(90deg, #059669, #34d399)",
    badgeBg: "#d1fae5",
    badgeColor: "#065f46",
    linkText: "Request pricing for Grade 11 →",
  },
  {
    number: "12",
    badge: "OCC GRADE 12",
    title: "Mixed OCC",
    description:
      "Baled corrugated containers with standard sorting. Cost-effective for high-volume operations. Consistent supply with full export documentation.",
    specs: ["Standard sorting", "High volume", "Baled", "Export ready", "Cost effective"],
    topGradient: "linear-gradient(90deg, #D97706, #fbbf24)",
    badgeBg: "#fef3c7",
    badgeColor: "#92400E",
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
      className="py-24 px-6 lg:px-12"
      style={{ backgroundColor: "#FAFAF8" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14 reveal">
          <p
            className="text-xs font-bold tracking-widest uppercase mb-3"
            style={{ color: "#D97706" }}
          >
            What We Export
          </p>
          <h2
            className="text-4xl sm:text-5xl font-bold mb-4"
            style={{ color: "#1A2E1A" }}
          >
            Our OCC Products
          </h2>
          <p className="text-lg max-w-xl mx-auto text-gray-500">
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
                topGradient,
                badgeBg,
                badgeColor,
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
                  className="h-3"
                  style={{ background: topGradient }}
                />

                {/* Card body */}
                <div className="relative p-10">
                  {/* Faint watermark number */}
                  <div
                    className="absolute right-4 bottom-0 select-none pointer-events-none font-black leading-none text-[100px] md:text-[180px]"
                    style={{
                      color: "#f3f4f6",
                      lineHeight: 1,
                    }}
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
                      style={{ color: "#111827" }}
                    >
                      {title}
                    </h3>

                    <p className="text-sm leading-relaxed text-gray-500 mb-6">
                      {description}
                    </p>

                    {/* Spec tags */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {specs.map((s) => (
                        <span
                          key={s}
                          className="px-4 py-2 rounded-full text-sm border text-gray-600"
                          style={{
                            backgroundColor: "#f9fafb",
                            borderColor: "#e5e7eb",
                          }}
                        >
                          {s}
                        </span>
                      ))}
                    </div>

                    {/* Bottom link */}
                    <div
                      className="pt-6 border-t border-gray-100"
                    >
                      <a
                        href="/contact"
                        className="text-sm font-semibold transition-colors hover:opacity-80"
                        style={{ color: "#D97706" }}
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
