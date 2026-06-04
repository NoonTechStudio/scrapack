// REVIEW VERSION — Logo6 Theme
// Original theme backup: git stash or
// revert to previous commit if needed

"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";

export default function PhotoSection() {
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
    <section ref={ref} className="py-24 px-6 lg:px-12" style={{ backgroundColor: "#FDFAF4" }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT — Photo */}
          <div className="reveal delay-100">
            <div className="relative w-full h-[280px] md:h-[420px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/occ-bales.webp"
                alt="OCC bales ready for export — ScraPack Solutions"
                fill
                className="object-cover"
                preload
              />
            </div>
            <p className="text-sm mt-3 text-center italic" style={{ color: "#8B6914" }}>
              OCC Grade 11 bales — ready for export from Philadelphia
            </p>
          </div>

          {/* RIGHT — Description */}
          <div className="reveal delay-200">
            <span className="text-xs font-bold tracking-[3px] uppercase" style={{ color: "#E8820C" }}>
              What We Handle
            </span>

            <h2
              className="mt-3 text-4xl font-black leading-tight"
              style={{ color: "#1A2E1A" }}
            >
              Premium OCC Bales,
              <br />
              Export Ready.
            </h2>

            <p className="mt-6 text-lg leading-relaxed" style={{ color: "#4A5568" }}>
              ScraPack Sources OCC Grade 11 and Grade 12 corrugated cardboard
              from verified recyclers across the United States. Every bale is
              inspected, sorted, and strapped to export standards before it
              leaves our yard.
            </p>

            <p className="mt-4 text-base leading-relaxed" style={{ color: "#4A5568" }}>
              We handle the full process — from collection and baling in
              Philadelphia to container loading, export documentation, and
              vessel booking to ports across India. Our buyers receive
              consistent quality, every shipment.
            </p>

            {/* Feature rows */}
            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-4">
                <div className="rounded-xl p-3 flex-shrink-0" style={{ backgroundColor: "#E8F5E9" }}>
                  <span className="text-xl">🔍</span>
                </div>
                <div>
                  <p className="font-semibold" style={{ color: "#1A2E1A" }}>
                    Grade Verified
                  </p>
                  <p className="text-sm" style={{ color: "#6B7280" }}>
                    Every bale inspected to OCC 11 &amp; 12 standards before
                    export.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-xl p-3 flex-shrink-0" style={{ backgroundColor: "#FFF3E0" }}>
                  <span className="text-xl">📦</span>
                </div>
                <div>
                  <p className="font-semibold" style={{ color: "#1A2E1A" }}>
                    Baled &amp; Strapped
                  </p>
                  <p className="text-sm" style={{ color: "#6B7280" }}>
                    Export-standard baling with steel or poly strapping
                    throughout.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-xl p-3 flex-shrink-0" style={{ backgroundColor: "#E8F5E9" }}>
                  <span className="text-xl">🚢</span>
                </div>
                <div>
                  <p className="font-semibold" style={{ color: "#1A2E1A" }}>
                    Port to Port
                  </p>
                  <p className="text-sm" style={{ color: "#6B7280" }}>
                    Philadelphia to all major Indian ports — full documentation
                    included.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-10">
              <a
                href="/services"
                className="inline-flex items-center gap-2 text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                style={{ backgroundColor: "#1B5E20" }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#2E7D32")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#1B5E20")
                }
              >
                Learn About Our Process
                <span>→</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
