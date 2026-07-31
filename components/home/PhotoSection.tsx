"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { ArrowRightIcon, BaleIcon, ShipIcon, TireIcon } from "@/components/icons";

const MATERIALS = [
  {
    img: "/images/occ-bales.webp",
    imgAlt: "OCC bales ready for export — ScraPack Solutions",
    caption: "OCC Grade 11 bales — ready for export from Philadelphia",
    badge: "OCC GRADE 11 & 12",
    badgeBg: "#E6F2EA",
    badgeColor: "#175434",
    title: "Corrugated Cardboard",
    copy: "Double-sorted and mixed grades sourced from verified US recyclers, baled and strapped to export density.",
    specs: ["Double sorted", "Baled & strapped", "Export documented"],
    href: "#grades",
    linkLabel: "Explore OCC Grades",
    accent: "#217344",
  },
  {
    img: "/images/t5.jpeg",
    imgAlt: "Baled scrap tires ready for export — ScraPack Solutions",
    caption: "Baled passenger and light-truck tires — steel-wire tied",
    badge: "BALED SCRAP TIRES",
    badgeBg: "#FAF0DF",
    badgeColor: "#8A6224",
    title: "Scrap Tires",
    copy: "PCR, mixed, and truck tire bales compressed to high density for pyrolysis, TDF, and rubber recycling.",
    specs: ["Steel wire tied", "Rims removed", "24–27 MT / container"],
    href: "#scrap-tires",
    linkLabel: "Explore Tire Program",
    accent: "#CC9F5F",
  },
];

const FEATURES = [
  {
    Icon: ShipIcon,
    tile: "icon-tile-slate",
    title: "Port to Port",
    description: "From our US yards to ports worldwide — full documentation included on every shipment.",
  },
  {
    Icon: BaleIcon,
    tile: "icon-tile-green",
    title: "Export-Ready Baling",
    description: "Every load — cardboard or tires — is compressed, strapped, and weighed to export density.",
  },
  {
    Icon: TireIcon,
    tile: "icon-tile-kraft",
    title: "Two Product Lines, One Standard",
    description: "The same inspection, documentation, and loading discipline applies across both materials.",
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
    <section id="products" ref={ref} className="py-24 px-6 lg:px-12 scroll-mt-24" style={{ backgroundColor: "#FBF8F2" }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 reveal">
          <p className="eyebrow mb-3">What We Handle</p>
          <h2
            className="text-4xl sm:text-5xl font-black leading-tight"
            style={{ color: "#16281F" }}
          >
            Two Materials, One Export Standard
          </h2>
          <p className="text-lg mt-4" style={{ color: "#6C7A73" }}>
            ScraPack runs two parallel export programs — OCC corrugated cardboard
            and baled scrap tires — held to the same grading, baling, and
            documentation discipline.
          </p>
        </div>

        {/* Two-column material split */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {MATERIALS.map((m, i) => (
            <a
              href={m.href}
              key={m.title}
              className={`reveal ${
                i === 0 ? "reveal-delay-1" : "reveal-delay-2"
              } group block card-soft overflow-hidden`}
            >
              <div className="relative w-full h-[220px] md:h-[260px]">
                <Image
                  src={m.img}
                  alt={m.imgAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-8">
                <span
                  className="inline-block px-3 py-1.5 rounded-full text-xs font-bold tracking-widest"
                  style={{ backgroundColor: m.badgeBg, color: m.badgeColor }}
                >
                  {m.badge}
                </span>
                <h3 className="text-2xl font-black mt-4" style={{ color: "#16281F" }}>
                  {m.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed" style={{ color: "#46554E" }}>
                  {m.copy}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {m.specs.map((s) => (
                    <span
                      key={s}
                      className="px-3 py-1 rounded-full text-xs border"
                      style={{ borderColor: "rgba(39,76,86,0.15)", color: "#46554E" }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <p
                  className="mt-6 text-sm font-bold inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all"
                  style={{ color: m.accent }}
                >
                  {m.linkLabel}
                  <ArrowRightIcon size={15} />
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Shared feature rows */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {FEATURES.map(({ Icon, tile, title, description }) => (
            <div key={title} className="reveal reveal-delay-3 flex items-start gap-4">
              <div className={`icon-tile ${tile} w-12 h-12 shrink-0`}>
                <Icon size={22} />
              </div>
              <div>
                <p className="font-semibold" style={{ color: "#16281F" }}>
                  {title}
                </p>
                <p className="text-sm mt-0.5" style={{ color: "#6C7A73" }}>
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
