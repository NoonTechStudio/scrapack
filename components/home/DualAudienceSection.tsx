"use client";

import { useRef, useEffect } from "react";
import { FactoryIcon, RecycleIcon } from "@/components/icons";

function CheckGreen({ text }: { text: string }) {
  return (
    <li className="flex items-center gap-3 text-sm" style={{ color: "#46554E" }}>
      <span
        className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
        style={{ backgroundColor: "#E6F2EA" }}
      >
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
          <path
            d="M2 5.5L4 7.5L8 3"
            stroke="#217344"
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

function CheckKraft({ text }: { text: string }) {
  return (
    <li className="flex items-center gap-3 text-sm" style={{ color: "#46554E" }}>
      <span
        className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
        style={{ backgroundColor: "#FAF0DF" }}
      >
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
          <path
            d="M2 5.5L4 7.5L8 3"
            stroke="#8A6224"
            strokeWidth="1.8"
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
            style={{ color: "#8A6224" }}
          >
            Who We Serve
          </p>
          <h2
            className="text-4xl sm:text-5xl font-bold mb-4"
            style={{ color: "#16281F" }}
          >
            Built for Both Sides of the Trade
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "#6C7A73" }}>
            US suppliers and Indian buyers both find exactly what they need
            with ScraPack.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* US Suppliers */}
          <div
            className="reveal reveal-delay-1 rounded-3xl p-6 lg:p-10 border-l-4"
            style={{ backgroundColor: "#F2F9F5", borderColor: "#217344" }}
          >
            <div className="icon-tile icon-tile-green w-16 h-16">
              <RecycleIcon size={30} />
            </div>
            <h3
              className="text-2xl font-bold mt-6 mb-3"
              style={{ color: "#175434" }}
            >
              US OCC Recyclers &amp; Exporters
            </h3>
            <p className="leading-relaxed mb-6" style={{ color: "#46554E" }}>
              We&apos;re your consistent, reliable buyer. ScraPack purchases OCC
              Grade 11 and 12 at competitive rates with prompt payment — so you
              can focus on collection.
            </p>
            <ul className="space-y-3 mb-8">
              <CheckGreen text="Competitive market-based pricing" />
              <CheckGreen text="Consistent volume purchases" />
              <CheckGreen text="Reliable, on-time payments" />
            </ul>
            <a href="/contact" className="btn btn-green btn-sm">
              Become a Supplier →
            </a>
          </div>

          {/* Indian Buyers */}
          <div
            className="reveal reveal-delay-2 rounded-3xl p-6 lg:p-10 border-l-4"
            style={{ backgroundColor: "#FAF0DF", borderColor: "#E8BA74" }}
          >
            <div className="icon-tile icon-tile-kraft w-16 h-16 bg-white/70">
              <FactoryIcon size={30} />
            </div>
            <h3
              className="text-2xl font-bold mt-6 mb-3"
              style={{ color: "#6B4A15" }}
            >
              Indian Paper Mills &amp; Traders
            </h3>
            <p className="leading-relaxed mb-6" style={{ color: "#46554E" }}>
              Source premium OCC directly from the USA. Verified grades, full
              export documentation, and flexible shipping schedules to all major
              Indian ports.
            </p>
            <ul className="space-y-3 mb-8">
              <CheckKraft text="OCC Grade 11 & 12 certified" />
              <CheckKraft text="Full export documentation" />
              <CheckKraft text="Flexible port scheduling" />
            </ul>
            <a href="/contact" className="btn btn-slate btn-sm">
              Inquire as Buyer →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
