// REVIEW VERSION — Logo6 Theme
// Original theme backup: git stash or
// revert to previous commit if needed

import Image from "next/image";
import Link from "next/link";

export default function ServicesHero() {
  return (
    <section
      className="pt-0 md:pt-24"
      style={{
        background: "linear-gradient(135deg, #FDFAF4, #F1F8E9 50%, #FFF8F0)",
      }}
    >
      {/* Mobile header */}
      <div className="md:hidden flex items-center px-5 pt-4 pb-3 bg-white border-b border-gray-100">
        <Image
          src="/upgrade-logo.png"
          alt="ScraPack Solutions LLC"
          width={130}
          height={48}
          className="object-contain object-left w-auto h-10"
          priority
        />
      </div>

      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto px-6 pt-6">
        <nav className="flex items-center gap-2 text-sm" style={{ color: "#6B7280" }}>
          <Link href="/" className="hover:text-gray-600 transition-colors">Home</Link>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
            <path d="M4.5 9L7.5 6L4.5 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span style={{ color: "#4A5568" }}>Services</span>
        </nav>
      </div>

      {/* Centered content */}
      <div className="max-w-4xl mx-auto px-6 py-16 md:py-24 text-center">
        <p
          className="text-xs font-bold tracking-widest uppercase mb-4"
          style={{ color: "#E8820C" }}
        >
          WHAT WE OFFER
        </p>

        <h1
          className="text-3xl sm:text-5xl md:text-6xl font-black text-center leading-tight"
          style={{ color: "#1A2E1A" }}
        >
          End-to-End OCC<br />Export Services
        </h1>

        <p
          className="text-xl text-center mt-6 max-w-2xl mx-auto leading-relaxed"
          style={{ color: "#4A5568" }}
        >
          From sourcing and baling in Philadelphia to delivery at Indian ports —
          ScraPack handles the complete OCC export process so you don&apos;t have to.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full font-bold text-lg text-white bg-[#E8820C] hover:bg-[#C96B00] transition-colors duration-200 hover:scale-105"
            style={{ boxShadow: "0 8px 24px rgba(232,130,12,0.30)" }}
          >
            Request a Quote
          </a>
          <a
            href="https://wa.me/12155550000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-lg text-white bg-[#1B5E20] hover:bg-[#2E7D32] transition-colors duration-200 hover:scale-105"
          >
            Call Us on WhatsApp
          </a>
        </div>

        {/* Quick stats */}
        <div className="mt-16 grid grid-cols-3 max-w-2xl mx-auto gap-6">
          {[
            { icon: "📦", value: "OCC 11 & 12", label: "Export Grades" },
            { icon: "🚢", value: "Door to Port", label: "Full Service" },
            { icon: "🇺🇸", value: "USA to India", label: "Trade Corridor" },
          ].map(({ icon, value, label }) => (
            <div
              key={label}
              className="bg-white rounded-2xl p-6 text-center shadow-sm border"
              style={{ borderColor: "rgba(46,125,50,0.10)" }}
            >
              <div className="text-3xl">{icon}</div>
              <div className="font-black text-xl mt-2" style={{ color: "#1B5E20" }}>{value}</div>
              <div className="text-xs mt-1" style={{ color: "#6B7280" }}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
