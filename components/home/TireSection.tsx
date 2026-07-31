"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import Image from "next/image";
import {
  BeakerIcon,
  ChevronDownIcon,
  ContainerIcon,
  DocumentIcon,
  FactoryIcon,
  FlameIcon,
  LayersIcon,
  LeafIcon,
  RoadIcon,
  ScaleIcon,
  ShipIcon,
  TireIcon,
  TruckIcon,
  VerifiedIcon,
} from "@/components/icons";

/* ── Data ───────────────────────────────────────────────── */

const QUICK_SPECS = [
  { label: "Net weight", value: "24–27 MT" },
  { label: "Container", value: "40' High Cube" },
  { label: "Steel rims", value: "Removed" },
  { label: "Compression", value: "High density" },
];

const PRODUCTS = [
  {
    Icon: TireIcon,
    title: "Passenger Car Tire (PCR) Bales",
    body: "Whole passenger tires — clean, dry and hydraulically compressed to high density. Export-ready and consistently graded.",
    tags: ["Whole tires", "Clean & dry", "Export ready"],
  },
  {
    Icon: LayersIcon,
    title: "Mixed Tire Bales",
    body: "Passenger, light truck and SUV tires baled together. The workhorse grade for pyrolysis, tire-derived fuel and rubber recycling.",
    tags: ["Pyrolysis", "Tire-derived fuel", "Rubber recycling"],
  },
  {
    Icon: TruckIcon,
    title: "Truck Tire Bales",
    body: "Large commercial tires compressed into export bales for retreading, shredding, TDF and crumb rubber production.",
    tags: ["Retreading", "Shredding", "Crumb rubber"],
  },
  {
    Icon: ContainerIcon,
    title: "Whole Scrap Tires",
    body: "Available unbaled on request where your process or local regulations call for loose, whole casings.",
    tags: ["Unbaled", "On request"],
  },
];

const SPEC_TABLE = [
  ["Material", "Scrap tires"],
  ["Condition", "Whole, compressed bales"],
  ["Moisture", "Low"],
  ["Dirt", "Minimal"],
  ["Steel rims", "Removed"],
  ["Bale density", "High compression"],
  ["Wire", "Steel strapping"],
  ["Loading", "40' HC container"],
  ["Net weight", "24–27 MT / container"],
];

const CATEGORIES = [
  "Passenger Car Tires (PCR)",
  "Light Truck Tires (LTR)",
  "SUV Tires",
  "Truck Tires",
  "Bus Tires",
  "Agricultural Tires (on request)",
  "Off-Road Tires (subject to availability)",
];

const APPLICATIONS = [
  {
    Icon: FlameIcon,
    title: "Tire-Derived Fuel (TDF)",
    body: "An established alternative fuel with high energy content, used by cement plants, power plants and industrial boilers where permitted.",
  },
  {
    Icon: BeakerIcon,
    title: "Pyrolysis",
    body: "Thermal conversion into pyrolysis oil, recovered carbon black, steel wire and syngas.",
  },
  {
    Icon: LayersIcon,
    title: "Crumb Rubber",
    body: "Ground into fine rubber for flooring, sports surfaces, running tracks, artificial turf and moulded rubber products.",
  },
  {
    Icon: RoadIcon,
    title: "Rubberised Asphalt",
    body: "Used in highways, roads and airport runways for lower road noise, improved durability and better crack resistance.",
  },
  {
    Icon: FactoryIcon,
    title: "Civil Engineering",
    body: "Drainage layers, lightweight embankments, landfill construction and retaining-wall backfill under recognised specifications.",
  },
  {
    Icon: LeafIcon,
    title: "Circular Economy",
    body: "Conserves landfill space, recovers valuable steel and reduces dependence on virgin rubber for sustainable manufacturing.",
  },
];

const PORTS = [
  "Houston",
  "Long Beach",
  "Los Angeles",
  "Savannah",
  "Charleston",
  "Norfolk",
  "Newark",
  "Baltimore",
];

const INCOTERMS = ["FOB", "CIF", "CFR", "EXW", "FCA"];

const MARKETS = [
  "India",
  "Pakistan",
  "Bangladesh",
  "Vietnam",
  "Malaysia",
  "Indonesia",
  "Turkey",
  "UAE",
  "Egypt",
  "South Korea",
];

const PACKAGING = [
  "High-density hydraulic compression",
  "Steel wire tied",
  "Easy forklift handling",
  "Maximised container utilisation",
  "Reduced freight cost per tonne",
];

const LOADING = [
  "40' high-cube containers",
  "24–27 MT net cargo weight",
  "Optimised loading pattern",
  "FOB shipment from major U.S. ports",
];

const QA_CHECKS = [
  "Cleanliness",
  "Bale integrity",
  "Moisture",
  "Container loading",
  "Proper documentation",
  "Export compliance",
];

const DOCUMENTS = [
  "Commercial Invoice",
  "Packing List",
  "Bill of Lading",
  "Certificate of Origin (if required)",
  "Weight Certificate",
  "Pre-shipment photographs",
];

const INDUSTRIES = [
  "Tire recyclers",
  "Pyrolysis plants",
  "Cement manufacturers",
  "Rubber product manufacturers",
  "Crumb rubber processors",
  "Carbon black recovery plants",
  "Waste-to-energy facilities",
  "Civil engineering contractors",
];

const BUYER_SPECS = [
  "Whole baled tires",
  "Passenger tires only",
  "Truck tires only",
  "Mixed tire bales",
  "No rims",
  "Dry material",
  "Minimal contamination",
  "Maximum container weight",
  "High-density compression",
  "Photographic inspection before loading",
];

const WHY_US = [
  "Reliable U.S. sourcing",
  "Consistent export quality",
  "Competitive FOB pricing",
  "Efficient container loading",
  "Flexible shipment quantities",
  "Timely documentation",
  "Global export experience",
  "Long-term supply partnerships",
];

/* ── Small presentational helpers ───────────────────────── */

function DetailHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3
      className="text-2xl sm:text-3xl font-bold mb-2 tracking-tight"
      style={{ color: "#16281F" }}
    >
      {children}
    </h3>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="px-3.5 py-1.5 rounded-full text-sm border"
      style={{
        backgroundColor: "#FDF8F0",
        borderColor: "rgba(204,159,95,0.4)",
        color: "#6B4A15",
      }}
    >
      {children}
    </span>
  );
}

function TickList({ items }: { items: string[] }) {
  return (
    <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5 text-sm" style={{ color: "#46554E" }}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="mt-0.5 shrink-0"
            aria-hidden="true"
          >
            <circle cx="8" cy="8" r="7.25" stroke="#217344" strokeWidth="1.2" opacity="0.35" />
            <path
              d="M4.8 8.2 7 10.4l4.2-4.6"
              stroke="#217344"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          {item}
        </li>
      ))}
    </ul>
  );
}

/* ── Section ────────────────────────────────────────────── */

export default function TireSection() {
  const ref = useRef<HTMLElement>(null);
  const [open, setOpen] = useState(false);

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

  const toggle = useCallback(() => {
    setOpen((wasOpen) => {
      // When collapsing, bring the user back to the top of the section
      // so they aren't left stranded far below the fold.
      if (wasOpen) {
        ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      return !wasOpen;
    });
  }, []);

  return (
    <section
      ref={ref}
      id="scrap-tires"
      className="relative overflow-hidden py-24 px-6 lg:px-12 scroll-mt-24"
      style={{ backgroundColor: "#EFF4F5" }}
    >
      {/* Faint tread-pattern watermark */}
      <div
        className="pointer-events-none absolute -right-24 -top-24 w-[420px] h-[420px] rounded-full opacity-[0.06]"
        style={{ border: "48px solid #274C56" }}
      />

      <div className="relative max-w-7xl mx-auto">
        {/* ── Header ── */}
        <div className="text-center max-w-2xl mx-auto mb-14 reveal">
          <p className="eyebrow mb-3">Rubber Division</p>
          <h2
            className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight"
            style={{ color: "#16281F" }}
          >
            Scrap Tires, Baled for Export
          </h2>
          <p className="text-lg" style={{ color: "#6C7A73" }}>
            End-of-life tires recovered across the United States, compressed into
            high-density bales and shipped worldwide.
          </p>
        </div>

        {/* ── Hero row: image + intro ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Image */}
          <div className="reveal reveal-delay-1 relative">
            <div className="relative w-full h-[300px] md:h-[440px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/t1.jpeg"
                alt="High-density baled scrap tires stacked at a ScraPack Solutions yard, ready for container loading"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(16,37,43,0) 45%, rgba(16,37,43,0.72) 100%)",
                }}
              />
              {/* Right inset keeps the caption clear of the floating stat card */}
              <p className="absolute bottom-5 left-6 right-6 md:right-48 text-white text-sm font-medium">
                Baled passenger and light-truck tires — steel-wire tied, rims removed
              </p>
            </div>

            {/* Floating stat card */}
            <div
              className="hidden md:flex absolute -bottom-8 -right-4 lg:-right-8 flex-col rounded-2xl px-6 py-5 shadow-xl"
              style={{ backgroundColor: "#274C56" }}
            >
              <span className="text-3xl font-black leading-none" style={{ color: "#E8BA74" }}>
                24–27
              </span>
              <span className="text-[11px] font-semibold tracking-[0.16em] uppercase text-white/70 mt-1.5">
                MT per 40&apos; HC
              </span>
            </div>
          </div>

          {/* Intro copy */}
          <div className="reveal reveal-delay-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold mb-5"
              style={{ backgroundColor: "#274C56", color: "#E8BA74" }}
            >
              <TireIcon size={15} />
              END-OF-LIFE TIRES (ELT)
            </div>

            <h3
              className="text-2xl sm:text-3xl font-bold mb-5 leading-snug tracking-tight"
              style={{ color: "#16281F" }}
            >
              From U.S. collection yards to processors worldwide
            </h3>

            <p className="text-base leading-relaxed mb-4" style={{ color: "#46554E" }}>
              Scrap tires are end-of-life tires collected from passenger cars,
              trucks, buses, agricultural equipment and off-road vehicles. Rather
              than occupying landfill space, they are hydraulically compressed
              into high-density bales and exported for recycling, energy
              recovery, civil engineering and rubber manufacturing.
            </p>

            <p className="text-base leading-relaxed mb-7" style={{ color: "#46554E" }}>
              The United States is one of the world&apos;s largest generators of
              scrap tires, which makes it a dependable source for buyers who need
              consistent monthly volume. ScraPack Solutions supplies baled and
              whole scrap tires traded under industry-recognised ReMA (formerly
              ISRI) specifications — loaded 24–27 MT to a 40&apos; high-cube
              container and shipped FOB from major U.S. ports.
            </p>

            {/* Quick specs */}
            <dl className="grid grid-cols-2 gap-x-6 gap-y-4 mb-8">
              {QUICK_SPECS.map(({ label, value }) => (
                <div key={label} className="border-l-2 pl-3.5" style={{ borderColor: "#CC9F5F" }}>
                  <dt
                    className="text-[10px] font-semibold tracking-[0.14em] uppercase mb-1"
                    style={{ color: "#6C7A73" }}
                  >
                    {label}
                  </dt>
                  <dd className="text-sm font-bold" style={{ color: "#274C56" }}>
                    {value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="flex flex-col sm:flex-row gap-3.5">
              <a
                href="/contact#quote-form"
                className="btn btn-gold btn-md w-full sm:w-auto"
              >
                Request Tire Pricing
              </a>
              <button
                type="button"
                onClick={toggle}
                aria-expanded={open}
                aria-controls="scrap-tires-detail"
                className="btn btn-slate btn-md w-full sm:w-auto"
              >
                {open ? "View Less" : "View More"}
                <span
                  className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
                >
                  <ChevronDownIcon size={17} />
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* ── Expandable detail ── */}
        <div
          id="scrap-tires-detail"
          className={`grid transition-all duration-700 ease-in-out ${
            open ? "grid-rows-[1fr] opacity-100 mt-20" : "grid-rows-[0fr] opacity-0 mt-0"
          }`}
        >
          {/* `inert` keeps the collapsed content out of the tab order */}
          <div className="overflow-hidden" inert={!open}>
            <div className="space-y-16">
              {/* Products */}
              <div>
                <DetailHeading>Products We Supply</DetailHeading>
                <p className="mb-8" style={{ color: "#6C7A73" }}>
                  Four standing grades, plus custom mixes on request.
                </p>
                <div className="grid sm:grid-cols-2 gap-6">
                  {PRODUCTS.map(({ Icon, title, body, tags }) => (
                    <div key={title} className="card-soft p-7">
                      <div className="icon-tile icon-tile-slate w-12 h-12 mb-5">
                        <Icon size={24} />
                      </div>
                      <h4 className="text-lg font-bold mb-2" style={{ color: "#16281F" }}>
                        {title}
                      </h4>
                      <p className="text-sm leading-relaxed mb-4" style={{ color: "#46554E" }}>
                        {body}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {tags.map((t) => (
                          <Chip key={t}>{t}</Chip>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Specs + categories */}
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="card-soft p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="icon-tile icon-tile-green w-11 h-11">
                      <ScaleIcon size={22} />
                    </div>
                    <h4 className="text-xl font-bold" style={{ color: "#16281F" }}>
                      Material Specifications
                    </h4>
                  </div>
                  <dl className="divide-y" style={{ borderColor: "#EAF1F3" }}>
                    {SPEC_TABLE.map(([label, value]) => (
                      <div
                        key={label}
                        className="flex items-center justify-between gap-4 py-3 border-t first:border-t-0"
                        style={{ borderColor: "#EAF1F3" }}
                      >
                        <dt className="text-sm" style={{ color: "#6C7A73" }}>
                          {label}
                        </dt>
                        <dd className="text-sm font-semibold text-right" style={{ color: "#274C56" }}>
                          {value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>

                <div className="flex flex-col gap-8">
                  <div className="card-soft p-8">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="icon-tile icon-tile-kraft w-11 h-11">
                        <TireIcon size={22} />
                      </div>
                      <h4 className="text-xl font-bold" style={{ color: "#16281F" }}>
                        Accepted Tire Categories
                      </h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {CATEGORIES.map((c) => (
                        <Chip key={c}>{c}</Chip>
                      ))}
                    </div>
                  </div>

                  <div className="card-soft p-8">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="icon-tile icon-tile-slate w-11 h-11">
                        <ContainerIcon size={22} />
                      </div>
                      <h4 className="text-xl font-bold" style={{ color: "#16281F" }}>
                        Export Packaging &amp; Loading
                      </h4>
                    </div>
                    <p className="text-sm mb-4" style={{ color: "#46554E" }}>
                      Every load is hydraulically compressed into export-grade bales:
                    </p>
                    <TickList items={[...PACKAGING, ...LOADING]} />
                  </div>
                </div>
              </div>

              {/* Applications */}
              <div>
                <DetailHeading>Applications</DetailHeading>
                <p className="mb-8" style={{ color: "#6C7A73" }}>
                  Scrap tires are a valuable feedstock across half a dozen industries.
                </p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {APPLICATIONS.map(({ Icon, title, body }) => (
                    <div key={title} className="card-soft p-7">
                      <div className="icon-tile icon-tile-green w-12 h-12 mb-5">
                        <Icon size={24} />
                      </div>
                      <h4 className="text-base font-bold mb-2" style={{ color: "#16281F" }}>
                        {title}
                      </h4>
                      <p className="text-sm leading-relaxed" style={{ color: "#46554E" }}>
                        {body}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trade lane — dark panel */}
              <div
                className="relative overflow-hidden rounded-3xl p-8 sm:p-12"
                style={{
                  background:
                    "linear-gradient(135deg, #274C56 0%, #18333B 60%, #10252B 100%)",
                }}
              >
                <div
                  className="pointer-events-none absolute -bottom-24 -left-16 w-[380px] h-[380px] rounded-full"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(232,186,116,0.15) 0%, transparent 68%)",
                  }}
                />
                <div className="relative grid md:grid-cols-3 gap-10">
                  <div>
                    <div className="flex items-center gap-2.5 mb-5" style={{ color: "#E8BA74" }}>
                      <ShipIcon size={20} />
                      <h4 className="text-sm font-bold tracking-[0.16em] uppercase">
                        Export Ports
                      </h4>
                    </div>
                    <p className="text-sm text-white/60 mb-4">
                      FOB shipments arranged from major U.S. ports:
                    </p>
                    <ul className="grid grid-cols-2 gap-y-2 text-sm text-white/85">
                      {PORTS.map((p) => (
                        <li key={p}>{p}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <div className="flex items-center gap-2.5 mb-5" style={{ color: "#E8BA74" }}>
                      <DocumentIcon size={20} />
                      <h4 className="text-sm font-bold tracking-[0.16em] uppercase">
                        Incoterms
                      </h4>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {INCOTERMS.map((t) => (
                        <span
                          key={t}
                          className="px-3.5 py-1.5 rounded-lg text-sm font-bold border border-white/15 bg-white/[0.07] text-white"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <h4
                      className="text-sm font-bold tracking-[0.16em] uppercase mb-4"
                      style={{ color: "#E8BA74" }}
                    >
                      Documentation
                    </h4>
                    <ul className="space-y-2 text-sm text-white/85">
                      {DOCUMENTS.map((d) => (
                        <li key={d}>{d}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <div className="flex items-center gap-2.5 mb-5" style={{ color: "#E8BA74" }}>
                      <FactoryIcon size={20} />
                      <h4 className="text-sm font-bold tracking-[0.16em] uppercase">
                        Major Export Markets
                      </h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {MARKETS.map((m) => (
                        <span
                          key={m}
                          className="px-3.5 py-1.5 rounded-full text-sm border border-white/15 bg-white/[0.07] text-white/90"
                        >
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Quality + industries + why us */}
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="card-soft p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="icon-tile icon-tile-green w-11 h-11">
                      <VerifiedIcon size={22} />
                    </div>
                    <h4 className="text-xl font-bold" style={{ color: "#16281F" }}>
                      Quality Assurance
                    </h4>
                  </div>
                  <p className="text-sm mb-5" style={{ color: "#46554E" }}>
                    Every shipment is inspected before it leaves the yard:
                  </p>
                  <TickList items={QA_CHECKS} />
                </div>

                <div className="card-soft p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="icon-tile icon-tile-kraft w-11 h-11">
                      <FactoryIcon size={22} />
                    </div>
                    <h4 className="text-xl font-bold" style={{ color: "#16281F" }}>
                      Industries We Serve
                    </h4>
                  </div>
                  <TickList items={INDUSTRIES} />
                </div>

                <div className="card-soft p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="icon-tile icon-tile-slate w-11 h-11">
                      <DocumentIcon size={22} />
                    </div>
                    <h4 className="text-xl font-bold" style={{ color: "#16281F" }}>
                      Common Buyer Specifications
                    </h4>
                  </div>
                  <TickList items={BUYER_SPECS} />
                </div>

                <div className="card-soft p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="icon-tile icon-tile-green w-11 h-11">
                      <LeafIcon size={22} />
                    </div>
                    <h4 className="text-xl font-bold" style={{ color: "#16281F" }}>
                      Why Choose ScraPack Solutions
                    </h4>
                  </div>
                  <TickList items={WHY_US} />
                </div>
              </div>

              {/* Compliance note */}
              <div
                className="rounded-3xl p-8 border-l-4"
                style={{ backgroundColor: "#FDF8F0", borderColor: "#CC9F5F" }}
              >
                <h4 className="text-lg font-bold mb-3" style={{ color: "#16281F" }}>
                  Industry Standards &amp; Compliance
                </h4>
                <p className="text-sm leading-relaxed" style={{ color: "#46554E" }}>
                  Scrap tire trading commonly follows ReMA (formerly ISRI)
                  specifications, which provide standardised terminology and
                  quality expectations for tire scrap. Buyers and sellers may
                  agree additional quality requirements in their contracts. Scrap
                  tire handling, storage and transportation are regulated
                  primarily at the U.S. state level, so we comply with the
                  applicable state regulations wherever material is sourced and
                  loaded.
                </p>
              </div>

              {/* Closing CTA */}
              <div className="text-center">
                <p className="text-lg mb-6 max-w-xl mx-auto" style={{ color: "#46554E" }}>
                  Tell us your grade, monthly volume and discharge port — we&apos;ll
                  come back with a firm FOB or CIF offer.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <a href="/contact#quote-form" className="btn btn-gold btn-md">
                    Request a Tire Quotation
                  </a>
                  <button type="button" onClick={toggle} className="btn btn-outline btn-md">
                    View Less
                    <span className="rotate-180">
                      <ChevronDownIcon size={17} />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
