// REVIEW VERSION — Logo6 Theme
// Original theme backup: git stash or
// revert to previous commit if needed

import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col md:justify-center overflow-hidden pt-28 md:pt-32"
      style={{
        background:
          "linear-gradient(135deg, #FDFAF4 0%, #F1F8E9 40%, #FFF8F0 100%)",
      }}
    >
      {/* Mobile header — logo + WhatsApp quick link */}
      <div className="md:hidden flex items-center justify-between px-5 pt-6 pb-3 relative z-20">
        <div className="flex-shrink-0 flex items-center">
          <Image
            src="/upgrade-logo.png"
            alt="ScraPack Solutions LLC"
            width={200}
            height={70}
            className="object-contain object-left w-auto h-16"
            priority
          />
        </div>
        <a
          href="https://wa.me/12155550000"
          className="flex items-center gap-2 bg-green-500 text-white text-xs font-semibold px-4 py-2 rounded-full shadow-md"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          WhatsApp
        </a>
      </div>

      {/* Decorative circles — large faint watermarks */}
      <div
        className="absolute -right-40 top-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ border: "1.5px solid #2E7D32", opacity: 0.08 }}
      />
      <div
        className="absolute -right-20 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ border: "1px solid #2E7D32", opacity: 0.08 }}
      />
      <div
        className="absolute -right-0 top-1/2 -translate-y-1/2 w-[320px] h-[320px] rounded-full pointer-events-none"
        style={{ border: "1px solid #E8820C", opacity: 0.06 }}
      />

      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-20 pt-6 pb-16 md:pt-8 md:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-12 lg:gap-8 items-center">
          {/* ── LEFT: Content ── */}
          <div>
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-8 border"
              style={{
                backgroundColor: "#E8F5E9",
                borderColor: "rgba(46,125,50,0.30)",
                color: "#1B5E20",
              }}
            >
              🌍 USA → India &nbsp;·&nbsp; OCC Export Specialists
            </div>

            {/* Headline */}
            <h1 className="font-black leading-tight tracking-tight mb-6">
              <span
                className="block text-4xl sm:text-6xl lg:text-7xl"
                style={{ color: "#1A2E1A" }}
              >
                America&apos;s OCC
              </span>
              <span
                className="block text-4xl sm:text-6xl lg:text-7xl"
                style={{ color: "#1A2E1A" }}
              >
                to India&apos;s Mills
              </span>
              <span
                className="block text-2xl sm:text-4xl mt-2"
                style={{ color: "#E8820C" }}
              >
                Delivered with Trust.
              </span>
            </h1>

            {/* Body */}
            <p
              className="text-lg leading-relaxed max-w-xl mb-8"
              style={{ color: "#4A5568" }}
            >
              ScraPack Solutions connects U.S. OCC recyclers with Indian paper
              mills and traders. We export Grade 11 and Grade 12 corrugated
              cardboard — sourced, baled, and shipped from Philadelphia to ports
              across India.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-2 sm:flex sm:flex-wrap sm:gap-8 mb-8">
              {[
                { label: "Export Ready", value: "OCC 11 & 12" },
                { label: "US Based", value: "Philadelphia, PA" },
                { label: "All Major Ports", value: "India Ports" },
              ].map(({ label, value }) => (
                <div key={label}>
                  <p className="text-[10px] sm:text-xs font-medium tracking-wide uppercase mb-0.5" style={{ color: "#6B7280" }}>
                    {label}
                  </p>
                  <p className="font-bold text-xs sm:text-sm" style={{ color: "#1B5E20" }}>
                    {value}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full font-bold text-lg text-white transition-all duration-200 hover:scale-105 active:scale-95 hover:bg-[#C96B00] w-full sm:w-auto"
                style={{
                  backgroundColor: "#E8820C",
                  boxShadow: "0 8px 24px rgba(232,130,12,0.30)",
                }}
              >
                Request a Quote
              </a>
              <a
                href="#grades"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold text-lg border-2 transition-all duration-200 hover:bg-[#1B5E20] hover:text-white w-full sm:w-auto"
                style={{ borderColor: "#1B5E20", color: "#1B5E20" }}
              >
                Learn About OCC
              </a>
            </div>

            {/* Trust line */}
            <div className="flex flex-wrap gap-5 text-sm" style={{ color: "#374151" }}>
              {[
                "Licensed US Exporter",
                "Grade Verified",
                "Philadelphia, PA 19115",
              ].map((item) => (
                <span key={item} className="flex items-center gap-1.5">
                  <span style={{ color: "#E8820C" }}>✓</span> {item}
                </span>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Floating card mockup — desktop only ── */}
          <div className="hidden lg:flex items-center justify-center relative h-[520px]">
            {/* Main grade card */}
            <div
              className="absolute bg-white rounded-3xl p-8 w-72 shadow-2xl border z-10"
              style={{
                borderColor: "rgba(46,125,50,0.15)",
                animation: "floatA 3.5s ease-in-out infinite",
              }}
            >
              <p
                className="text-xs font-bold tracking-widest uppercase mb-4"
                style={{ color: "#E8820C" }}
              >
                Export Grade OCC
              </p>
              <p
                className="text-6xl font-black leading-none mb-5"
                style={{ color: "#1B5E20" }}
              >
                11 / 12
              </p>
              <div
                className="w-full h-px mb-5"
                style={{ backgroundColor: "#f3f4f6" }}
              />
              <ul className="space-y-3 text-sm text-gray-600 mb-6">
                <li className="flex items-center gap-2">
                  <span>📦</span> Double-sorted, baled
                </li>
                <li className="flex items-center gap-2">
                  <span>✅</span> Low moisture content
                </li>
                <li className="flex items-center gap-2">
                  <span>🚢</span> Export documentation included
                </li>
              </ul>
              <a
                href="/contact"
                className="text-sm font-semibold"
                style={{ color: "#E8820C" }}
              >
                Get Current Pricing →
              </a>
            </div>

            {/* Floating card A — Philadelphia */}
            <div
              className="absolute top-4 left-0 bg-white rounded-2xl shadow-lg p-4 border border-gray-100 text-sm z-20"
              style={{ animation: "floatC 3.8s ease-in-out 0.8s infinite" }}
            >
              <p className="font-bold text-gray-800">📍 Philadelphia, PA</p>
              <p className="text-gray-400 text-xs mt-0.5">Port of Export</p>
            </div>

            {/* Floating card B — India Bound */}
            <div
              className="absolute bottom-8 right-0 rounded-2xl shadow-lg p-4 text-sm z-20 text-white"
              style={{
                backgroundColor: "#E8820C",
                animation: "floatB 4.2s ease-in-out 1.5s infinite",
              }}
            >
              <p className="font-bold">🌏 India Bound</p>
              <p className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.80)" }}>All Major Ports</p>
            </div>

            {/* Floating card C — Grade badge */}
            <div
              className="absolute top-20 right-2 rounded-xl shadow-lg px-4 py-3 text-xs font-bold text-white z-20"
              style={{
                backgroundColor: "#1B5E20",
                animation: "floatA 3.5s ease-in-out 0.4s infinite",
              }}
            >
              OCC Grade 11 ✓
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-[10px] font-semibold tracking-widest uppercase text-gray-400">
          Scroll
        </span>
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path
            d="M4 6.5L9 12L14 6.5"
            stroke="#9CA3AF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
}
