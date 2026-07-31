"use client";

import { useRef, useEffect } from "react";

export default function TireBaleDetails() {
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
    <section id="tire-bales" ref={ref} className="py-24 px-6 lg:px-12 scroll-mt-24 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6 reveal">
          <p className="eyebrow mb-3" style={{ color: "#8A6224" }}>
            PRODUCT 2 OF 2 — TIRE PROGRAM
          </p>
          <h2 className="text-4xl sm:text-5xl font-black" style={{ color: "#16281F" }}>
            Baled Scrap Tires
          </h2>
          <p className="text-xl mt-6 max-w-2xl mx-auto" style={{ color: "#6C7A73" }}>
            End-of-life tires, hydraulically compressed and export-ready under
            ReMA (formerly ISRI) specifications.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">

          {/* PCR & Mixed */}
          <div className="reveal reveal-delay-1 bg-white rounded-3xl overflow-hidden shadow-lg border border-[#274C56]/15">
            <div className="h-2" style={{ backgroundColor: "#274C56" }} />
            <div className="p-10">
              <span
                className="inline-block px-4 py-2 rounded-full text-xs font-bold tracking-widest"
                style={{ backgroundColor: "#EAF1F3", color: "#274C56" }}
              >
                PASSENGER &amp; MIXED
              </span>

              <h3 className="text-3xl font-black mt-4" style={{ color: "#16281F" }}>
                PCR &amp; Mixed Tire Bales
              </h3>
              <p className="text-sm mt-1" style={{ color: "#6C7A73" }}>
                Passenger Car (PCR) · Light Truck (LTR) · SUV
              </p>

              <div className="border-t mt-6 mb-6" style={{ borderColor: "rgba(39,76,86,0.15)" }} />

              <p className="leading-relaxed" style={{ color: "#46554E" }}>
                Whole passenger tires, or mixed PCR/LTR/SUV loads, hydraulically
                compressed to high density. Clean, dry, and consistently graded
                for export.
              </p>

              {/* Spec table */}
              <div className="mt-8">
                <p className="font-bold text-sm mb-4" style={{ color: "#16281F" }}>
                  Bale Specifications
                </p>
                {[
                  ["Moisture", "Low"],
                  ["Dirt / Contamination", "Minimal"],
                  ["Bale Density", "High compression"],
                  ["Net Weight", "24–27 MT / container"],
                ].map(([label, value]) => (
                  <div key={label} className="flex justify-between py-3 border-b border-gray-100">
                    <span className="text-sm" style={{ color: "#6C7A73" }}>{label}</span>
                    <span className="text-sm font-bold" style={{ color: "#274C56" }}>{value}</span>
                  </div>
                ))}
              </div>

              {/* Best for */}
              <div className="mt-8 rounded-2xl p-5" style={{ backgroundColor: "#EAF1F3" }}>
                <p className="font-bold text-sm mb-3" style={{ color: "#274C56" }}>Best For</p>
                <p className="text-sm" style={{ color: "#274C56" }}>
                  Pyrolysis plants, tire-derived fuel (TDF) programs, and general
                  rubber recycling operations.
                </p>
              </div>

              <a href="/contact#quote-form" className="btn btn-slate btn-sm mt-8">
                Request PCR/Mixed Pricing
              </a>
            </div>
          </div>

          {/* Truck & Whole */}
          <div className="reveal reveal-delay-2 bg-white rounded-3xl overflow-hidden shadow-lg border border-[#E8BA74]/15">
            <div className="h-2" style={{ backgroundColor: "#CC9F5F" }} />
            <div className="p-10">
              <span
                className="inline-block px-4 py-2 rounded-full text-xs font-bold tracking-widest"
                style={{ backgroundColor: "#FAF0DF", color: "#8A6224" }}
              >
                TRUCK &amp; WHOLE
              </span>

              <h3 className="text-3xl font-black mt-4" style={{ color: "#16281F" }}>
                Truck &amp; Whole Tire Bales
              </h3>
              <p className="text-sm mt-1" style={{ color: "#6C7A73" }}>
                Commercial · Bus · Unbaled on Request
              </p>

              <div className="border-t mt-6 mb-6" style={{ borderColor: "rgba(204,159,95,0.15)" }} />

              <p className="leading-relaxed" style={{ color: "#46554E" }}>
                Large commercial and bus tires compressed into export bales, or
                whole scrap tires supplied loose where your process or local
                regulations require it.
              </p>

              {/* Spec table */}
              <div className="mt-8">
                <p className="font-bold text-sm mb-4" style={{ color: "#16281F" }}>
                  Bale Specifications
                </p>
                {[
                  ["Steel Rims", "Removed"],
                  ["Wire", "Steel strapping"],
                  ["Loading", "40' HC container"],
                  ["Net Weight", "24–27 MT / container"],
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
                  Retreading, shredding, crumb rubber production, and civil
                  engineering applications.
                </p>
              </div>

              <a href="/contact#quote-form" className="btn btn-gold btn-sm mt-8">
                Request Truck/Whole Pricing
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
