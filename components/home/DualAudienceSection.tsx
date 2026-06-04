// REVIEW VERSION — Logo6 Theme
// Original theme backup: git stash or
// revert to previous commit if needed

"use client";

import { useRef, useEffect } from "react";

function CheckGreen({ text }: { text: string }) {
  return (
    <li className="flex items-center gap-3 text-sm" style={{ color: "#374151" }}>
      <span
        className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
        style={{ backgroundColor: "#E8F5E9" }}
      >
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
          <path
            d="M2 5.5L4 7.5L8 3"
            stroke="#2E7D32"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      {text}
    </li>
  );
}

function CheckOrange({ text }: { text: string }) {
  return (
    <li className="flex items-center gap-3 text-sm" style={{ color: "#374151" }}>
      <span
        className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
        style={{ backgroundColor: "#FFF3E0" }}
      >
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
          <path
            d="M2 5.5L4 7.5L8 3"
            stroke="#E8820C"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      {text}
    </li>
  );
}

export default function DualAudienceSection() {
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
    <section ref={ref} className="py-24 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14 reveal">
          <p
            className="text-xs font-bold tracking-widest uppercase mb-3"
            style={{ color: "#E8820C" }}
          >
            Who We Serve
          </p>
          <h2
            className="text-4xl sm:text-5xl font-bold mb-4"
            style={{ color: "#1A2E1A" }}
          >
            Built for Both Sides of the Trade
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "#6B7280" }}>
            US suppliers and Indian buyers both find exactly what they need
            with ScraPack.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* US Suppliers */}
          <div
            className="reveal reveal-delay-1 rounded-3xl p-6 lg:p-10 border-l-4"
            style={{ backgroundColor: "#F1F8E9", borderColor: "#2E7D32" }}
          >
            <div
              className="inline-flex items-center justify-center w-16 h-16 rounded-2xl text-4xl"
              style={{ backgroundColor: "rgba(46,125,50,0.10)" }}
            >
              ♻️
            </div>
            <h3
              className="text-2xl font-bold mt-6 mb-3"
              style={{ color: "#1B5E20" }}
            >
              US OCC Recyclers &amp; Exporters
            </h3>
            <p className="leading-relaxed mb-6" style={{ color: "#4A5568" }}>
              We&apos;re your consistent, reliable buyer. ScraPack purchases OCC
              Grade 11 and 12 at competitive rates with prompt payment — so you
              can focus on collection.
            </p>
            <ul className="space-y-3 mb-8">
              <CheckGreen text="Competitive market-based pricing" />
              <CheckGreen text="Consistent volume purchases" />
              <CheckGreen text="Reliable, on-time payments" />
            </ul>
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 rounded-full font-semibold text-sm text-white transition-all duration-200 hover:scale-105"
              style={{ backgroundColor: "#1B5E20" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#2E7D32")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#1B5E20")}
            >
              Become a Supplier →
            </a>
          </div>

          {/* Indian Buyers */}
          <div
            className="reveal reveal-delay-2 rounded-3xl p-6 lg:p-10 border-l-4"
            style={{ backgroundColor: "#FFF3E0", borderColor: "#E8820C" }}
          >
            <div
              className="inline-flex items-center justify-center w-16 h-16 rounded-2xl text-4xl"
              style={{ backgroundColor: "rgba(232,130,12,0.10)" }}
            >
              🏭
            </div>
            <h3
              className="text-2xl font-bold mt-6 mb-3"
              style={{ color: "#7C2D12" }}
            >
              Indian Paper Mills &amp; Traders
            </h3>
            <p className="leading-relaxed mb-6" style={{ color: "#4A5568" }}>
              Source premium OCC directly from the USA. Verified grades, full
              export documentation, and flexible shipping schedules to all major
              Indian ports.
            </p>
            <ul className="space-y-3 mb-8">
              <CheckOrange text="OCC Grade 11 & 12 certified" />
              <CheckOrange text="Full export documentation" />
              <CheckOrange text="Flexible port scheduling" />
            </ul>
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 rounded-full font-semibold text-sm text-white transition-all duration-200 hover:scale-105"
              style={{ backgroundColor: "#E8820C" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#C96B00")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#E8820C")}
            >
              Inquire as Buyer →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
