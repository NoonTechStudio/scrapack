"use client";

import { useRef, useEffect } from "react";
import { FactoryIcon, RecycleIcon } from "@/components/icons";

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
          <p className="eyebrow mb-3">Our Clients</p>
          <h2 className="text-4xl sm:text-5xl font-black" style={{ color: "#16281F" }}>
            Who Works with ScraPack?
          </h2>
          <p className="text-xl mt-6 max-w-2xl mx-auto" style={{ color: "#6C7A73" }}>
            We serve two distinct groups — and we understand exactly what each one needs.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">

          {/* US Suppliers */}
          <div
            className="reveal reveal-delay-1 rounded-3xl p-10 border"
            style={{ backgroundColor: "#F2F9F5", borderColor: "rgba(33,115,68,0.15)" }}
          >
            <span
              className="inline-block px-4 py-2 rounded-full text-xs font-bold tracking-widest text-white"
              style={{ backgroundColor: "#217344" }}
            >
              FOR US SUPPLIERS
            </span>

            <div className="icon-tile icon-tile-green w-16 h-16 mt-6 bg-white">
              <RecycleIcon size={32} />
            </div>

            <h3 className="text-2xl font-black mt-4" style={{ color: "#16281F" }}>
              Recyclers &amp; Collectors
            </h3>
            <p className="mt-4" style={{ color: "#46554E" }}>
              If you collect OCC or scrap tires across the United States and need a consistent,
              reliable buyer who pays well and on time — ScraPack is your partner.
            </p>

            <div className="mt-8">
              <p className="font-bold text-sm mb-4" style={{ color: "#175434" }}>
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
                  <li key={item} className="flex items-start gap-3 text-sm" style={{ color: "#46554E" }}>
                    <span
                      className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                      style={{ backgroundColor: "#E6F2EA" }}
                    >
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M2 5.5L4 7.5L8 3" stroke="#217344" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <a href="/contact" className="btn btn-green btn-md mt-10">
              Sell Your Material to ScraPack →
            </a>
          </div>

          {/* Indian Buyers */}
          <div
            className="reveal reveal-delay-2 rounded-3xl p-10 border"
            style={{ backgroundColor: "#FAF0DF", borderColor: "rgba(204,159,95,0.20)" }}
          >
            <span
              className="inline-block px-4 py-2 rounded-full text-xs font-bold tracking-widest text-white"
              style={{ backgroundColor: "#274C56" }}
            >
              FOR OVERSEAS BUYERS
            </span>

            <div className="icon-tile icon-tile-kraft w-16 h-16 mt-6 bg-white">
              <FactoryIcon size={32} />
            </div>

            <h3 className="text-2xl font-black mt-4" style={{ color: "#16281F" }}>
              Mills, Processors &amp; Traders
            </h3>
            <p className="mt-4" style={{ color: "#46554E" }}>
              If you need a reliable US source of OCC Grade 11 and 12 or baled
              scrap tires, with complete documentation and consistent quality —
              ScraPack delivers.
            </p>

            <div className="mt-8">
              <p className="font-bold text-sm mb-4" style={{ color: "#8A6224" }}>
                What You Get:
              </p>
              <ul className="space-y-3">
                {[
                  "OCC Grade 11 & 12 and baled scrap tires from verified US sources",
                  "Complete export documentation — B/L, COO, packing list",
                  "Flexible port of discharge — all major world ports",
                  "Transparent pricing with no hidden charges",
                  "Regular supply schedule — plan your production confidently",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm" style={{ color: "#46554E" }}>
                    <span
                      className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                      style={{ backgroundColor: "#FAF0DF", border: "1px solid rgba(204,159,95,0.3)" }}
                    >
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M2 5.5L4 7.5L8 3" stroke="#8A6224" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <a href="/contact" className="btn btn-slate btn-md mt-10">
              Source Material from ScraPack →
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
