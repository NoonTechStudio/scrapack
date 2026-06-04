// REVIEW VERSION — Logo6 Theme
// Original theme backup: git stash or
// revert to previous commit if needed

"use client";

import { useRef, useEffect } from "react";

export default function OCCGradeDetails() {
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
    <section ref={ref} className="py-24 px-6 lg:px-12" style={{ backgroundColor: "#FDFAF4" }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6 reveal">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#E8820C" }}>
            OUR PRODUCTS
          </p>
          <h2 className="text-4xl sm:text-5xl font-black" style={{ color: "#1A2E1A" }}>
            OCC Grade 11 &amp; Grade 12
          </h2>
          <p className="text-xl mt-6 max-w-2xl mx-auto" style={{ color: "#6B7280" }}>
            The two most traded corrugated grades in the global recovered paper market.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">

          {/* Grade 11 */}
          <div className="reveal reveal-delay-1 bg-white rounded-3xl overflow-hidden shadow-lg border border-[#2E7D32]/15">
            <div className="h-2" style={{ backgroundColor: "#2E7D32" }} />
            <div className="p-10">
              <span
                className="inline-block px-4 py-2 rounded-full text-xs font-bold tracking-widest"
                style={{ backgroundColor: "#E8F5E9", color: "#1B5E20" }}
              >
                OCC GRADE 11
              </span>

              <h3 className="text-3xl font-black mt-4" style={{ color: "#1A2E1A" }}>
                Double-Sorted OCC
              </h3>
              <p className="text-sm mt-1" style={{ color: "#6B7280" }}>
                ISRI Grade 11 · PS-2011 · Double Sorted
              </p>

              <div className="border-t mt-6 mb-6" style={{ borderColor: "rgba(46,125,50,0.15)" }} />

              <p className="leading-relaxed" style={{ color: "#4A5568" }}>
                Old corrugated containers — baled corrugated cardboard that has been
                double-sorted to remove all prohibitive and outthrow materials. The
                cleanest, highest-value OCC grade available for export.
              </p>

              {/* Spec table */}
              <div className="mt-8">
                <p className="font-bold text-sm mb-4" style={{ color: "#1A2E1A" }}>
                  Grade Specifications
                </p>
                {[
                  ["Prohibitive Materials", "None"],
                  ["Outthrows", "0.5% Max"],
                  ["Moisture Content", "< 12%"],
                  ["Bale Weight", "600–1000 kg"],
                ].map(([label, value]) => (
                  <div key={label} className="flex justify-between py-3 border-b border-gray-100">
                    <span className="text-sm" style={{ color: "#6B7280" }}>{label}</span>
                    <span className="text-sm font-bold" style={{ color: "#1B5E20" }}>{value}</span>
                  </div>
                ))}
              </div>

              {/* Best for */}
              <div className="mt-8 rounded-2xl p-5" style={{ backgroundColor: "#E8F5E9" }}>
                <p className="font-bold text-sm mb-3" style={{ color: "#1B5E20" }}>Best For</p>
                <p className="text-sm" style={{ color: "#2E7D32" }}>
                  Premium Indian paper mills producing high-grade recycled board,
                  tissue, and specialty paper products.
                </p>
              </div>

              <a
                href="/contact"
                className="inline-flex items-center justify-center mt-8 px-6 py-3 rounded-full font-semibold text-sm text-white"
                style={{ backgroundColor: "#1B5E20" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#2E7D32")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#1B5E20")}
              >
                Request Grade 11 Pricing
              </a>
            </div>
          </div>

          {/* Grade 12 */}
          <div className="reveal reveal-delay-2 bg-white rounded-3xl overflow-hidden shadow-lg border border-[#E8820C]/15">
            <div className="h-2" style={{ backgroundColor: "#E8820C" }} />
            <div className="p-10">
              <span
                className="inline-block px-4 py-2 rounded-full text-xs font-bold tracking-widest"
                style={{ backgroundColor: "#FFF3E0", color: "#C96B00" }}
              >
                OCC GRADE 12
              </span>

              <h3 className="text-3xl font-black mt-4" style={{ color: "#1A2E1A" }}>
                Mixed OCC
              </h3>
              <p className="text-sm mt-1" style={{ color: "#6B7280" }}>
                ISRI Grade 12 · PS-2012 · Mixed OCC
              </p>

              <div className="border-t mt-6 mb-6" style={{ borderColor: "rgba(232,130,12,0.15)" }} />

              <p className="leading-relaxed" style={{ color: "#4A5568" }}>
                Old corrugated containers — baled corrugated material with allowable
                levels of outthrow materials. A cost-effective grade offering high
                volume availability for mills that process mixed recovered paper.
              </p>

              {/* Spec table */}
              <div className="mt-8">
                <p className="font-bold text-sm mb-4" style={{ color: "#1A2E1A" }}>
                  Grade Specifications
                </p>
                {[
                  ["Prohibitive Materials", "None"],
                  ["Outthrows", "3% Max"],
                  ["Moisture Content", "< 15%"],
                  ["Bale Weight", "600–1200 kg"],
                ].map(([label, value]) => (
                  <div key={label} className="flex justify-between py-3 border-b border-gray-100">
                    <span className="text-sm" style={{ color: "#6B7280" }}>{label}</span>
                    <span className="text-sm font-bold" style={{ color: "#E8820C" }}>{value}</span>
                  </div>
                ))}
              </div>

              {/* Best for */}
              <div className="mt-8 rounded-2xl p-5" style={{ backgroundColor: "#FFF3E0" }}>
                <p className="font-bold text-sm mb-3" style={{ color: "#C96B00" }}>Best For</p>
                <p className="text-sm" style={{ color: "#C96B00" }}>
                  High-volume paper mills and traders seeking cost-effective OCC
                  supply for standard kraft liner and corrugated medium production.
                </p>
              </div>

              <a
                href="/contact"
                className="inline-flex items-center justify-center mt-8 px-6 py-3 rounded-full font-semibold text-sm text-white"
                style={{ backgroundColor: "#E8820C" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#C96B00")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#E8820C")}
              >
                Request Grade 12 Pricing
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
