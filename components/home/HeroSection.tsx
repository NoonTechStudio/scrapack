import Image from "next/image";
import {
  BaleIcon,
  CheckIcon,
  ContainerIcon,
  DocumentIcon,
  GlobeIcon,
  MapPinIcon,
  TireIcon,
} from "@/components/icons";

const TRUST = ["Licensed US Exporter", "Grade Verified", "Philadelphia, PA 19115"];

const STATS = [
  { label: "Export Ready", value: "OCC 11 & 12" },
  { label: "Export Ready", value: "Baled Scrap Tires" },
  { label: "US Based", value: "Philadelphia, PA" },
];

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col md:justify-center overflow-hidden pt-28 md:pt-32"
      style={{
        background:
          "linear-gradient(135deg, #FBF8F2 0%, #F2F9F5 42%, #FDF8F0 100%)",
      }}
    >
      {/* Mobile header — logo + WhatsApp quick link */}
      <div className="md:hidden flex items-center justify-between px-5 pt-6 pb-3 relative z-20">
        <div className="flex-shrink-0 flex items-center">
          <Image
            src="/NewLogo2.png"
            alt="ScraPack Solutions LLC"
            width={200}
            height={70}
            className="object-contain object-left w-auto h-16"
            preload
          />
        </div>
        <a
          href="https://wa.me/12019142222"
          className="flex items-center gap-2 bg-[#217344] text-white text-xs font-semibold px-4 py-2 rounded-full shadow-md"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="white" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          WhatsApp
        </a>
      </div>

      {/* Decorative concentric rings */}
      <div
        className="absolute -right-40 top-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ border: "1.5px solid #217344", opacity: 0.1 }}
      />
      <div
        className="absolute -right-20 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ border: "1px solid #217344", opacity: 0.1 }}
      />
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[320px] h-[320px] rounded-full pointer-events-none"
        style={{ border: "1px solid #CC9F5F", opacity: 0.28 }}
      />

      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-20 pt-6 pb-16 md:pt-8 md:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-[58%_42%] gap-12 lg:gap-8 items-center">
          {/* ── LEFT: Content ── */}
          <div>
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-8 border"
              style={{
                backgroundColor: "#E6F2EA",
                borderColor: "rgba(33,115,68,0.25)",
                color: "#175434",
              }}
            >
              <GlobeIcon size={16} />
              USA → Worldwide &nbsp;·&nbsp; OCC &amp; Scrap Tire Exporters
            </div>

            {/* Headline */}
            <h1 className="font-black leading-[1.05] tracking-tight mb-6">
              <span
                className="block text-4xl sm:text-6xl lg:text-7xl"
                style={{ color: "#16281F" }}
              >
                Two Materials.
              </span>
              <span
                className="block text-4xl sm:text-6xl lg:text-7xl"
                style={{ color: "#16281F" }}
              >
                One Export Partner.
              </span>
              <span
                className="block text-2xl sm:text-4xl mt-3"
                style={{ color: "#A87C33" }}
              >
                OCC &amp; Scrap Tires, Delivered with Trust.
              </span>
            </h1>

            {/* Body */}
            <p
              className="text-lg leading-relaxed max-w-xl mb-8"
              style={{ color: "#46554E" }}
            >
              ScraPack Solutions connects U.S. recyclers with paper mills, rubber
              processors, and traders worldwide. We export Grade 11 and Grade 12
              corrugated cardboard and baled scrap tires — sourced, baled, and
              shipped from the United States.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-3 sm:flex sm:flex-wrap sm:gap-10 mb-9">
              {STATS.map(({ label, value }) => (
                <div key={value} className="border-l-2 pl-3" style={{ borderColor: "#E8BA74" }}>
                  <p
                    className="text-[10px] sm:text-xs font-medium tracking-wide uppercase mb-1"
                    style={{ color: "#6C7A73" }}
                  >
                    {label}
                  </p>
                  <p className="font-bold text-xs sm:text-sm" style={{ color: "#175434" }}>
                    {value}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-7">
              <a
                href="/contact#quote-form"
                className="btn btn-gold btn-lg w-full sm:w-auto"
              >
                Request a Quote
              </a>
              <a href="#products" className="btn btn-outline btn-lg w-full sm:w-auto">
                Explore Our Products
              </a>
            </div>

            {/* Trust line */}
            <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm" style={{ color: "#46554E" }}>
              {TRUST.map((item) => (
                <span key={item} className="flex items-center gap-1.5">
                  <span style={{ color: "#217344" }}>
                    <CheckIcon size={14} strokeWidth={2.6} />
                  </span>
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Two equal product cards — desktop only ── */}
          <div className="hidden lg:flex items-center justify-center relative h-[540px]">
            {/* Card 1 — OCC */}
            <div
              className="absolute top-0 left-0 bg-white rounded-3xl p-7 w-64 shadow-2xl border z-10"
              style={{
                borderColor: "rgba(39,76,86,0.10)",
                animation: "floatA 3.5s ease-in-out infinite",
              }}
            >
              <p className="eyebrow mb-3">Export Grade OCC</p>
              <p
                className="text-5xl font-black leading-none mb-4"
                style={{ color: "#175434" }}
              >
                11 / 12
              </p>
              <div className="w-full h-px mb-4" style={{ backgroundColor: "#EAF1F3" }} />
              <ul className="space-y-3 text-sm mb-5" style={{ color: "#46554E" }}>
                <li className="flex items-center gap-2.5">
                  <span style={{ color: "#217344" }}>
                    <BaleIcon size={16} />
                  </span>
                  Double-sorted, baled
                </li>
                <li className="flex items-center gap-2.5">
                  <span style={{ color: "#217344" }}>
                    <ContainerIcon size={16} />
                  </span>
                  Optimised loading
                </li>
              </ul>
              <a
                href="/contact"
                className="text-sm font-bold inline-flex items-center gap-1.5 hover:gap-2.5 transition-all"
                style={{ color: "#175434" }}
              >
                Get OCC Pricing →
              </a>
            </div>

            {/* Card 2 — Tires (equal size/weight to the OCC card) */}
            <div
              className="absolute bottom-4 right-0 bg-white rounded-3xl p-7 w-64 shadow-2xl border z-10"
              style={{
                borderColor: "rgba(204,159,95,0.25)",
                animation: "floatB 4.2s ease-in-out 1.5s infinite",
              }}
            >
              <p className="eyebrow mb-3">Baled Scrap Tires</p>
              <p
                className="text-5xl font-black leading-none mb-4"
                style={{ color: "#8A6224" }}
              >
                24–27
              </p>
              <p className="text-xs font-semibold tracking-wide uppercase -mt-3 mb-4" style={{ color: "#6C7A73" }}>
                MT per 40&apos; HC
              </p>
              <div className="w-full h-px mb-4" style={{ backgroundColor: "#F6E7CE" }} />
              <ul className="space-y-3 text-sm mb-5" style={{ color: "#46554E" }}>
                <li className="flex items-center gap-2.5">
                  <span style={{ color: "#CC9F5F" }}>
                    <TireIcon size={16} />
                  </span>
                  PCR, mixed &amp; truck bales
                </li>
                <li className="flex items-center gap-2.5">
                  <span style={{ color: "#CC9F5F" }}>
                    <DocumentIcon size={16} />
                  </span>
                  Export documentation included
                </li>
              </ul>
              <a
                href="/contact"
                className="text-sm font-bold inline-flex items-center gap-1.5 hover:gap-2.5 transition-all"
                style={{ color: "#8A6224" }}
              >
                Get Tire Pricing →
              </a>
            </div>

            {/* Floating badge — Philadelphia */}
            <div
              className="absolute bottom-2 left-0 bg-white rounded-2xl shadow-lg p-4 border text-sm z-20"
              style={{
                borderColor: "rgba(39,76,86,0.08)",
                animation: "floatC 3.8s ease-in-out 0.8s infinite",
              }}
            >
              <p className="font-bold flex items-center gap-2" style={{ color: "#16281F" }}>
                <span style={{ color: "#217344" }}>
                  <MapPinIcon size={16} />
                </span>
                Philadelphia, PA
              </p>
              <p className="text-xs mt-0.5" style={{ color: "#6C7A73" }}>
                Port of Export
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span
          className="text-[10px] font-semibold tracking-[0.2em] uppercase"
          style={{ color: "#8B978F" }}
        >
          Scroll
        </span>
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
          <path
            d="M4 6.5L9 12L14 6.5"
            stroke="#8B978F"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
}
