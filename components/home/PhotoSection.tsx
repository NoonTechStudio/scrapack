"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { BaleIcon, InspectIcon, ShipIcon } from "@/components/icons";

const FEATURES = [
  {
    Icon: InspectIcon,
    tile: "icon-tile-green",
    title: "Grade Verified",
    description: "Every bale inspected to OCC 11 & 12 standards before export.",
  },
  {
    Icon: BaleIcon,
    tile: "icon-tile-kraft",
    title: "Baled & Strapped",
    description: "Export-standard baling with steel or poly strapping throughout.",
  },
  {
    Icon: ShipIcon,
    tile: "icon-tile-slate",
    title: "Port to Port",
    description: "Philadelphia to all major Indian ports — full documentation included.",
  },
];

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
    <section ref={ref} className="py-24 px-6 lg:px-12" style={{ backgroundColor: "#FBF8F2" }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT — Photo */}
          <div className="reveal delay-100">
            <div className="relative w-full h-[280px] md:h-[420px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/occ-bales.webp"
                alt="OCC bales ready for export — ScraPack Solutions"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                preload
              />
            </div>
            <p className="text-sm mt-3 text-center italic" style={{ color: "#8A6224" }}>
              OCC Grade 11 bales — ready for export from Philadelphia
            </p>
          </div>

          {/* RIGHT — Description */}
          <div className="reveal delay-200">
            <span className="eyebrow">What We Handle</span>

            <h2
              className="mt-3 text-4xl font-black leading-tight"
              style={{ color: "#16281F" }}
            >
              Premium OCC Bales,
              <br />
              Export Ready.
            </h2>

            <p className="mt-6 text-lg leading-relaxed" style={{ color: "#46554E" }}>
              ScraPack Sources OCC Grade 11 and Grade 12 corrugated cardboard
              from verified recyclers across the United States. Every bale is
              inspected, sorted, and strapped to export standards before it
              leaves our yard.
            </p>

            <p className="mt-4 text-base leading-relaxed" style={{ color: "#46554E" }}>
              We handle the full process — from collection and baling in
              Philadelphia to container loading, export documentation, and
              vessel booking to ports across India. Our buyers receive
              consistent quality, every shipment.
            </p>

            {/* Feature rows */}
            <div className="mt-8 space-y-4">
              {FEATURES.map(({ Icon, tile, title, description }) => (
                <div key={title} className="flex items-start gap-4">
                  <div className={`icon-tile ${tile} w-12 h-12`}>
                    <Icon size={22} />
                  </div>
                  <div>
                    <p className="font-semibold" style={{ color: "#16281F" }}>
                      {title}
                    </p>
                    <p className="text-sm" style={{ color: "#6C7A73" }}>
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-10">
              <a href="/services" className="btn btn-green btn-md">
                Learn About Our Process
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
