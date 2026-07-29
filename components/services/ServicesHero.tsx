import Image from "next/image";
import Link from "next/link";
import { BaleIcon, GlobeIcon, ShipIcon } from "@/components/icons";

const STATS = [
  { Icon: BaleIcon, tile: "icon-tile-green", value: "OCC & Tires", label: "Export Materials" },
  { Icon: ShipIcon, tile: "icon-tile-kraft", value: "Door to Port", label: "Full Service" },
  { Icon: GlobeIcon, tile: "icon-tile-slate", value: "USA to World", label: "Trade Corridor" },
];

export default function ServicesHero() {
  return (
    <section
      className="pt-0 md:pt-24"
      style={{
        background: "linear-gradient(135deg, #FBF8F2, #F2F9F5 50%, #FDF8F0)",
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
      <div className="max-w-6xl mx-auto px-6 pt-6">
        <nav className="flex items-center gap-2 text-sm" style={{ color: "#6C7A73" }}>
          <Link href="/" className="hover:text-gray-600 transition-colors">Home</Link>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
            <path d="M4.5 9L7.5 6L4.5 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span style={{ color: "#46554E" }}>Services</span>
        </nav>
      </div>

      {/* Centered content */}
      <div className="max-w-4xl mx-auto px-6 py-16 md:py-24 text-center">
        <p className="eyebrow mb-4">What We Offer</p>

        <h1
          className="text-3xl sm:text-5xl md:text-6xl font-black text-center leading-tight"
          style={{ color: "#16281F" }}
        >
          End-to-End<br />Export Services
        </h1>

        <p
          className="text-xl text-center mt-6 max-w-2xl mx-auto leading-relaxed"
          style={{ color: "#46554E" }}
        >
          From sourcing and baling in Philadelphia to delivery at your port —
          ScraPack handles the complete export process for OCC and scrap tires so
          you don&apos;t have to.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <a href="/contact" className="btn btn-gold btn-lg">
            Request a Quote
          </a>
          <a
            href="https://wa.me/12019142222"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-green btn-lg"
          >
            Call Us on WhatsApp
          </a>
        </div>

        {/* Quick stats */}
        <div className="mt-16 grid grid-cols-3 max-w-2xl mx-auto gap-6">
          {STATS.map(({ Icon, tile, value, label }) => (
            <div
              key={label}
              className="bg-white rounded-2xl p-6 text-center shadow-sm border"
              style={{ borderColor: "rgba(39,76,86,0.10)" }}
            >
              <div className={`icon-tile ${tile} w-12 h-12 mx-auto`}>
                <Icon size={24} />
              </div>
              <div className="font-black text-lg sm:text-xl mt-3" style={{ color: "#175434" }}>{value}</div>
              <div className="text-xs mt-1" style={{ color: "#6C7A73" }}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
