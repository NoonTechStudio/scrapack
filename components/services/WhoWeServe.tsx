// REVIEW VERSION — Logo6 Theme
// Original theme backup: git stash or
// revert to previous commit if needed

"use client";

import { useRef, useEffect } from "react";

export default function WhoWeServe() {
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
    <section ref={ref} className="py-24 px-6 lg:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6 reveal">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#E8820C" }}>
            OUR CLIENTS
          </p>
          <h2 className="text-4xl sm:text-5xl font-black" style={{ color: "#1A2E1A" }}>
            Who Works with ScraPack?
          </h2>
          <p className="text-xl mt-6 max-w-2xl mx-auto" style={{ color: "#6B7280" }}>
            We serve two distinct groups — and we understand exactly what each one needs.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">

          {/* US Suppliers */}
          <div
            className="reveal reveal-delay-1 rounded-3xl p-10 border"
            style={{ backgroundColor: "#F1F8E9", borderColor: "rgba(46,125,50,0.15)" }}
          >
            <span
              className="inline-block px-4 py-2 rounded-full text-xs font-bold tracking-widest text-white"
              style={{ backgroundColor: "#2E7D32" }}
            >
              FOR US SUPPLIERS
            </span>

            <div className="text-5xl mt-6">♻️</div>

            <h3 className="text-2xl font-black mt-4" style={{ color: "#1A2E1A" }}>
              OCC Recyclers &amp; Exporters
            </h3>
            <p className="mt-4" style={{ color: "#4A5568" }}>
              If you collect OCC across the United States and need a consistent,
              reliable buyer who pays well and on time — ScraPack is your partner.
            </p>

            <div className="mt-8">
              <p className="font-bold text-sm mb-4" style={{ color: "#1B5E20" }}>
                What You Get:
              </p>
              <ul className="space-y-3">
                {[
                  "Consistent purchase orders — we commit to volume",
                  "Competitive pricing tied to current market rates",
                  "Prompt payment — no delays, no excuses",
                  "Simple, clear purchase agreements",
                  "Long-term supply relationship — not a one-time transaction",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm" style={{ color: "#4A5568" }}>
                    <span
                      className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                      style={{ backgroundColor: "#E8F5E9" }}
                    >
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M2 5.5L4 7.5L8 3" stroke="#2E7D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="/contact"
              className="inline-flex items-center justify-center mt-10 px-8 py-4 rounded-full font-bold text-white"
              style={{ backgroundColor: "#1B5E20" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#2E7D32")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#1B5E20")}
            >
              Sell Your OCC to ScraPack →
            </a>
          </div>

          {/* Indian Buyers */}
          <div
            className="reveal reveal-delay-2 rounded-3xl p-10 border"
            style={{ backgroundColor: "#FFF3E0", borderColor: "rgba(232,130,12,0.20)" }}
          >
            <span
              className="inline-block px-4 py-2 rounded-full text-xs font-bold tracking-widest text-white"
              style={{ backgroundColor: "#E8820C" }}
            >
              FOR INDIAN BUYERS
            </span>

            <div className="text-5xl mt-6">🏭</div>

            <h3 className="text-2xl font-black mt-4" style={{ color: "#1A2E1A" }}>
              Paper Mills &amp; Traders
            </h3>
            <p className="mt-4" style={{ color: "#4A5568" }}>
              If you need a reliable US source of OCC Grade 11 or Grade 12 with
              complete documentation and consistent quality — ScraPack delivers.
            </p>

            <div className="mt-8">
              <p className="font-bold text-sm mb-4" style={{ color: "#C96B00" }}>
                What You Get:
              </p>
              <ul className="space-y-3">
                {[
                  "OCC Grade 11 & 12 from verified US sources",
                  "Complete export documentation — B/L, COO, packing list",
                  "Flexible port of discharge — all major Indian ports",
                  "Transparent pricing with no hidden charges",
                  "Regular supply schedule — plan your production confidently",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm" style={{ color: "#4A5568" }}>
                    <span
                      className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                      style={{ backgroundColor: "#FFF3E0", border: "1px solid rgba(232,130,12,0.3)" }}
                    >
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M2 5.5L4 7.5L8 3" stroke="#E8820C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="/contact"
              className="inline-flex items-center justify-center mt-10 px-8 py-4 rounded-full font-bold text-white"
              style={{ backgroundColor: "#E8820C" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#C96B00")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#E8820C")}
            >
              Source OCC from ScraPack →
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
