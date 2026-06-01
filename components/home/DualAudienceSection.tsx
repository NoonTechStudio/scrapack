"use client";

import { useRef, useEffect } from "react";

function CheckGreen({ text }: { text: string }) {
  return (
    <li className="flex items-center gap-3 text-sm" style={{ color: "#374151" }}>
      <span
        className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
        style={{ backgroundColor: "#d1fae5" }}
      >
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
          <path
            d="M2 5.5L4 7.5L8 3"
            stroke="#059669"
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

function CheckAmber({ text }: { text: string }) {
  return (
    <li className="flex items-center gap-3 text-sm" style={{ color: "#92400E" }}>
      <span
        className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
        style={{ backgroundColor: "#fde68a" }}
      >
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
          <path
            d="M2 5.5L4 7.5L8 3"
            stroke="#D97706"
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
            style={{ color: "#D97706" }}
          >
            Who We Serve
          </p>
          <h2
            className="text-4xl sm:text-5xl font-bold mb-4"
            style={{ color: "#1A2E1A" }}
          >
            Built for Both Sides of the Trade
          </h2>
          <p className="text-lg max-w-xl mx-auto text-gray-500">
            US suppliers and Indian buyers both find exactly what they need
            with ScraPack.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* US Suppliers */}
          <div
            className="reveal reveal-delay-1 rounded-3xl p-6 lg:p-10 border"
            style={{ backgroundColor: "#F0F7F2", borderColor: "#D1FAE5" }}
          >
            <div
              className="inline-flex items-center justify-center w-16 h-16 rounded-2xl text-4xl"
              style={{ backgroundColor: "#d1fae5" }}
            >
              ♻️
            </div>
            <h3
              className="text-2xl font-bold mt-6 mb-3"
              style={{ color: "#1A2E1A" }}
            >
              US OCC Recyclers &amp; Exporters
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
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
              style={{ backgroundColor: "#1A2E1A" }}
            >
              Become a Supplier →
            </a>
          </div>

          {/* Indian Buyers */}
          <div
            className="reveal reveal-delay-2 rounded-3xl p-6 lg:p-10 border"
            style={{ backgroundColor: "#FFFBEB", borderColor: "#FDE68A" }}
          >
            <div
              className="inline-flex items-center justify-center w-16 h-16 rounded-2xl text-4xl"
              style={{ backgroundColor: "#fde68a" }}
            >
              🏭
            </div>
            <h3
              className="text-2xl font-bold mt-6 mb-3"
              style={{ color: "#92400E" }}
            >
              Indian Paper Mills &amp; Traders
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Source premium OCC directly from the USA. Verified grades, full
              export documentation, and flexible shipping schedules to all major
              Indian ports.
            </p>
            <ul className="space-y-3 mb-8">
              <CheckAmber text="OCC Grade 11 & 12 certified" />
              <CheckAmber text="Full export documentation" />
              <CheckAmber text="Flexible port scheduling" />
            </ul>
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 rounded-full font-semibold text-sm text-white transition-all duration-200 hover:scale-105"
              style={{ backgroundColor: "#F59E0B" }}
            >
              Inquire as Buyer →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
