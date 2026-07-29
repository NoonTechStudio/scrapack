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
    <section ref={ref} className="py-24 px-6 lg:px-12" style={{ backgroundColor: "#FBF8F2" }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6 reveal">
          <p className="eyebrow mb-3" style={{ color: "#8A6224" }}>
            OUR PRODUCTS
          </p>
          <h2 className="text-4xl sm:text-5xl font-black" style={{ color: "#16281F" }}>
            OCC Grade 11 &amp; Grade 12
          </h2>
          <p className="text-xl mt-6 max-w-2xl mx-auto" style={{ color: "#6C7A73" }}>
            The two most traded corrugated grades in the global recovered paper market.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">

          {/* Grade 11 */}
          <div className="reveal reveal-delay-1 bg-white rounded-3xl overflow-hidden shadow-lg border border-[#217344]/15">
            <div className="h-2" style={{ backgroundColor: "#217344" }} />
            <div className="p-10">
              <span
                className="inline-block px-4 py-2 rounded-full text-xs font-bold tracking-widest"
                style={{ backgroundColor: "#E6F2EA", color: "#175434" }}
              >
                OCC GRADE 11
              </span>

              <h3 className="text-3xl font-black mt-4" style={{ color: "#16281F" }}>
                Double-Sorted OCC
              </h3>
              <p className="text-sm mt-1" style={{ color: "#6C7A73" }}>
                ISRI Grade 11 · PS-2011 · Double Sorted
              </p>

              <div className="border-t mt-6 mb-6" style={{ borderColor: "rgba(33,115,68,0.15)" }} />

              <p className="leading-relaxed" style={{ color: "#46554E" }}>
                Old corrugated containers — baled corrugated cardboard that has been
                double-sorted to remove all prohibitive and outthrow materials. The
                cleanest, highest-value OCC grade available for export.
              </p>

              {/* Spec table */}
              <div className="mt-8">
                <p className="font-bold text-sm mb-4" style={{ color: "#16281F" }}>
                  Grade Specifications
                </p>
                {[
                  ["Prohibitive Materials", "None"],
                  ["Outthrows", "0.5% Max"],
                  ["Moisture Content", "< 12%"],
                  ["Bale Weight", "600–1000 kg"],
                ].map(([label, value]) => (
                  <div key={label} className="flex justify-between py-3 border-b border-gray-100">
                    <span className="text-sm" style={{ color: "#6C7A73" }}>{label}</span>
                    <span className="text-sm font-bold" style={{ color: "#175434" }}>{value}</span>
                  </div>
                ))}
              </div>

              {/* Best for */}
              <div className="mt-8 rounded-2xl p-5" style={{ backgroundColor: "#E6F2EA" }}>
                <p className="font-bold text-sm mb-3" style={{ color: "#175434" }}>Best For</p>
                <p className="text-sm" style={{ color: "#217344" }}>
                  Premium Indian paper mills producing high-grade recycled board,
                  tissue, and specialty paper products.
                </p>
              </div>

              <a
                href="/contact"
                className="inline-flex items-center justify-center mt-8 px-6 py-3 rounded-full font-semibold text-sm text-white"
                style={{ backgroundColor: "#175434" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#217344")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#175434")}
              >
                Request Grade 11 Pricing
              </a>
            </div>
          </div>

          {/* Grade 12 */}
          <div className="reveal reveal-delay-2 bg-white rounded-3xl overflow-hidden shadow-lg border border-[#E8BA74]/15">
            <div className="h-2" style={{ backgroundColor: "#CC9F5F" }} />
            <div className="p-10">
              <span
                className="inline-block px-4 py-2 rounded-full text-xs font-bold tracking-widest"
                style={{ backgroundColor: "#FAF0DF", color: "#8A6224" }}
              >
                OCC GRADE 12
              </span>

              <h3 className="text-3xl font-black mt-4" style={{ color: "#16281F" }}>
                Mixed OCC
              </h3>
              <p className="text-sm mt-1" style={{ color: "#6C7A73" }}>
                ISRI Grade 12 · PS-2012 · Mixed OCC
              </p>

              <div className="border-t mt-6 mb-6" style={{ borderColor: "rgba(204,159,95,0.15)" }} />

              <p className="leading-relaxed" style={{ color: "#46554E" }}>
                Old corrugated containers — baled corrugated material with allowable
                levels of outthrow materials. A cost-effective grade offering high
                volume availability for mills that process mixed recovered paper.
              </p>

              {/* Spec table */}
              <div className="mt-8">
                <p className="font-bold text-sm mb-4" style={{ color: "#16281F" }}>
                  Grade Specifications
                </p>
                {[
                  ["Prohibitive Materials", "None"],
                  ["Outthrows", "3% Max"],
                  ["Moisture Content", "< 15%"],
                  ["Bale Weight", "600–1200 kg"],
                ].map(([label, value]) => (
                  <div key={label} className="flex justify-between py-3 border-b border-gray-100">
                    <span className="text-sm" style={{ color: "#6C7A73" }}>{label}</span>
                    <span className="text-sm font-bold" style={{ color: "#8A6224" }}>{value}</span>
                  </div>
                ))}
              </div>

              {/* Best for */}
              <div className="mt-8 rounded-2xl p-5" style={{ backgroundColor: "#FAF0DF" }}>
                <p className="font-bold text-sm mb-3" style={{ color: "#8A6224" }}>Best For</p>
                <p className="text-sm" style={{ color: "#8A6224" }}>
                  High-volume paper mills and traders seeking cost-effective OCC
                  supply for standard kraft liner and corrugated medium production.
                </p>
              </div>

              <a href="/contact" className="btn btn-gold btn-sm mt-8">
                Request Grade 12 Pricing
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
