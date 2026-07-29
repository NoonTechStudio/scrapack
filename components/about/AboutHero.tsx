"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { BaleIcon, GlobeIcon, MapPinIcon } from "@/components/icons";

const STATS = [
  { Icon: BaleIcon, tile: "icon-tile-green", number: "OCC & Tires", label: "Export Materials", delay: 1 },
  { Icon: MapPinIcon, tile: "icon-tile-kraft", number: "Philadelphia", label: "PA, United States", delay: 2 },
  { Icon: GlobeIcon, tile: "icon-tile-slate", number: "India & Beyond", label: "Primary Markets", delay: 3 },
];

export default function AboutHero() {
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
    <section
      ref={ref}
      className="pt-0 md:pt-24"
      style={{
        background:
          "linear-gradient(135deg, #FBF8F2 0%, #F2F9F5 50%, #FDF8F0 100%)",
      }}
    >
      {/* Mobile header */}
      <div className="md:hidden flex items-center px-5 pt-4 pb-3 bg-white border-b border-gray-100">
        <Image
          src="/NewLogo2.png"
          alt="ScraPack Solutions LLC"
          width={130}
          height={48}
          className="object-contain object-left w-auto h-10"
          preload
        />
      </div>

      {/* Breadcrumb */}
      <div className="max-w-4xl mx-auto px-6 pt-6">
        <nav className="flex items-center gap-2 text-xs" style={{ color: "#6C7A73" }}>
          <Link href="/" className="transition-colors hover:text-gray-600">
            Home
          </Link>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M4.5 9L7.5 6L4.5 3"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span style={{ color: "#46554E" }}>About Us</span>
        </nav>
      </div>

      {/* Centered content */}
      <div className="max-w-4xl mx-auto px-6 py-16 md:py-24 text-center">
        <p className="eyebrow mb-4 reveal">Our Story</p>

        <h1
          className="text-5xl md:text-6xl font-black text-center leading-tight reveal reveal-delay-1"
          style={{ color: "#16281F" }}
        >
          Built on Trust.<br />
          Driven by Trade.
        </h1>

        <p className="text-xl text-center mt-6 max-w-2xl mx-auto leading-relaxed reveal reveal-delay-2" style={{ color: "#46554E" }}>
          ScraPack Solutions LLC is a Philadelphia-based export trading company
          connecting American recyclers with paper mills and rubber processors
          worldwide. We move material — and we keep our word.
        </p>

        {/* Stat boxes */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
          {STATS.map(({ Icon, tile, number, label, delay }) => (
            <div
              key={label}
              className={`bg-white rounded-2xl p-6 text-center shadow-sm border border-[#274C56]/10 reveal reveal-delay-${delay}`}
            >
              <div className={`icon-tile ${tile} w-12 h-12 mx-auto mb-4`}>
                <Icon size={24} />
              </div>
              <div className="text-2xl font-black" style={{ color: "#16281F" }}>
                {number}
              </div>
              <div className="text-sm mt-1" style={{ color: "#6C7A73" }}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
