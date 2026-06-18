import type { Metadata } from 'next'
import GalleryGrid from '@/components/gallery/GalleryGrid'

export const metadata: Metadata = {
  title: 'Gallery | ScraPack Solutions LLC',
  description: 'Browse our gallery of OCC bales, recycled cardboard, and export operations — ScraPack Solutions LLC.',
}

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-[#FDFAF4]">
      {/* ── Hero ── */}
      <div className="relative overflow-hidden bg-[#FDFAF4] pt-36 md:pt-44 pb-20 px-6">

        {/* SVG line-art background — OCC bales & cardboard motifs */}
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* ── Far-left large bale stack ── */}
          <g transform="translate(-40, 120)" stroke="#1A2E1A" strokeWidth="1.2" fill="none" opacity="0.07">
            <rect x="0" y="60" width="110" height="80" rx="6"/>
            <rect x="8" y="68" width="94" height="64" rx="4"/>
            <line x1="0" y1="100" x2="110" y2="100"/>
            <line x1="35" y1="60" x2="35" y2="140"/>
            <line x1="75" y1="60" x2="75" y2="140"/>
            <rect x="0" y="0" width="110" height="55" rx="6"/>
            <rect x="8" y="8" width="94" height="39" rx="4"/>
            <line x1="0" y1="28" x2="110" y2="28"/>
            <line x1="35" y1="0" x2="35" y2="55"/>
            <line x1="75" y1="0" x2="75" y2="55"/>
            {/* binding straps */}
            <line x1="28" y1="0" x2="28" y2="140" strokeWidth="1.8" strokeDasharray="4 3"/>
            <line x1="82" y1="0" x2="82" y2="140" strokeWidth="1.8" strokeDasharray="4 3"/>
            <line x1="28" y1="0" x2="82" y2="0" strokeWidth="1.8"/>
            <line x1="28" y1="140" x2="82" y2="140" strokeWidth="1.8"/>
          </g>

          {/* ── Center-left floating single bale ── */}
          <g transform="translate(180, 30)" stroke="#E8820C" strokeWidth="1.1" fill="none" opacity="0.09">
            <rect x="0" y="0" width="90" height="65" rx="5"/>
            <rect x="6" y="6" width="78" height="53" rx="3"/>
            <line x1="0" y1="32" x2="90" y2="32"/>
            <line x1="30" y1="0" x2="30" y2="65"/>
            <line x1="60" y1="0" x2="60" y2="65"/>
            <line x1="22" y1="0" x2="22" y2="65" strokeWidth="1.6" strokeDasharray="3 3"/>
            <line x1="68" y1="0" x2="68" y2="65" strokeWidth="1.6" strokeDasharray="3 3"/>
          </g>

          {/* ── Top center — shipping container outline ── */}
          <g transform="translate(420, 10)" stroke="#1A2E1A" strokeWidth="1.1" fill="none" opacity="0.055">
            <rect x="0" y="0" width="240" height="100" rx="4"/>
            <rect x="6" y="6" width="228" height="88" rx="2"/>
            {/* container ribs */}
            <line x1="40" y1="6" x2="40" y2="94"/>
            <line x1="80" y1="6" x2="80" y2="94"/>
            <line x1="120" y1="6" x2="120" y2="94"/>
            <line x1="160" y1="6" x2="160" y2="94"/>
            <line x1="200" y1="6" x2="200" y2="94"/>
            {/* door lines */}
            <line x1="230" y1="0" x2="230" y2="100"/>
            <line x1="228" y1="50" x2="240" y2="50"/>
            {/* wheels */}
            <circle cx="30" cy="104" r="8"/>
            <circle cx="210" cy="104" r="8"/>
          </g>

          {/* ── Right side bale tower ── */}
          <g transform="translate(1100, 60)" stroke="#1A2E1A" strokeWidth="1.2" fill="none" opacity="0.065">
            <rect x="0" y="120" width="100" height="72" rx="5"/>
            <line x1="0" y1="156" x2="100" y2="156"/>
            <line x1="33" y1="120" x2="33" y2="192"/>
            <line x1="67" y1="120" x2="67" y2="192"/>
            <line x1="25" y1="120" x2="25" y2="192" strokeWidth="1.6" strokeDasharray="4 3"/>
            <line x1="75" y1="120" x2="75" y2="192" strokeWidth="1.6" strokeDasharray="4 3"/>

            <rect x="5" y="48" width="90" height="68" rx="5"/>
            <line x1="5" y1="82" x2="95" y2="82"/>
            <line x1="35" y1="48" x2="35" y2="116"/>
            <line x1="65" y1="48" x2="65" y2="116"/>

            <rect x="10" y="0" width="80" height="44" rx="4"/>
            <line x1="10" y1="22" x2="90" y2="22"/>
            <line x1="37" y1="0" x2="37" y2="44"/>
            <line x1="63" y1="0" x2="63" y2="44"/>
          </g>

          {/* ── Far right accent bale ── */}
          <g transform="translate(1260, 100)" stroke="#E8820C" strokeWidth="1.1" fill="none" opacity="0.08">
            <rect x="0" y="0" width="80" height="58" rx="4"/>
            <rect x="5" y="5" width="70" height="48" rx="3"/>
            <line x1="0" y1="29" x2="80" y2="29"/>
            <line x1="27" y1="0" x2="27" y2="58"/>
            <line x1="53" y1="0" x2="53" y2="58"/>
            <line x1="20" y1="0" x2="20" y2="58" strokeWidth="1.5" strokeDasharray="3 3"/>
            <line x1="60" y1="0" x2="60" y2="58" strokeWidth="1.5" strokeDasharray="3 3"/>
          </g>

          {/* ── Bottom-left scattered cardboard sheets ── */}
          <g transform="translate(60, 210)" stroke="#8B6914" strokeWidth="1" fill="none" opacity="0.06">
            <rect x="0" y="0" width="70" height="12" rx="2"/>
            <rect x="5" y="16" width="80" height="12" rx="2"/>
            <rect x="2" y="32" width="65" height="12" rx="2"/>
            <rect x="8" y="48" width="75" height="12" rx="2"/>
          </g>

          {/* ── Dotted grid / graph paper feel ── */}
          <pattern id="dots" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.2" fill="#1A2E1A" opacity="0.25"/>
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#dots)" opacity="0.18"/>

          {/* ── Subtle arc / recycling motif top-right ── */}
          <g transform="translate(900, -30)" stroke="#E8820C" strokeWidth="1.3" fill="none" opacity="0.07">
            <path d="M 0 120 A 90 90 0 0 1 180 120"/>
            <path d="M 20 120 A 70 70 0 0 1 160 120"/>
            <path d="M 40 120 A 50 50 0 0 1 140 120"/>
            <line x1="90" y1="30" x2="90" y2="125"/>
          </g>
        </svg>

        {/* Warm gradient wash over bg */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 70% 60% at 50% 40%, rgba(232,130,12,0.06) 0%, transparent 70%)',
          }}
        />

        {/* Content */}
        <div className="relative max-w-4xl mx-auto text-center">
          {/* Pill badge */}
          <div className="inline-flex items-center gap-2 bg-[#1A2E1A]/8 border border-[#1A2E1A]/12 rounded-full px-5 py-2 mb-8">
            <span className="block w-2 h-2 rounded-full bg-[#E8820C]" />
            <span className="text-[#1A2E1A] text-xs font-bold tracking-widest uppercase">
              Our Operations
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-[#1A2E1A] mb-6 leading-[1.05] tracking-tight">
            Our{' '}
            <span className="relative inline-block">
              Gallery
              {/* orange underline squiggle */}
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="10"
                viewBox="0 0 200 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 7 Q50 1 100 6 Q150 11 198 4"
                  stroke="#E8820C"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </span>
          </h1>

          <p className="text-[#1A2E1A]/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mt-4">
            A window into our world — OCC bales, loading operations, and the materials that power paper mills across India.
          </p>

          {/* Stat chips */}
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            {[
              { value: '20+', label: 'Photos' },
              { value: 'OCC 11 & 12', label: 'Grade' },
              { value: 'USA → India', label: 'Route' },
            ].map((s) => (
              <div
                key={s.label}
                className="flex flex-col items-center bg-white border border-[#1A2E1A]/10 rounded-2xl px-6 py-3 shadow-sm"
              >
                <span className="text-[#E8820C] font-bold text-lg leading-none">{s.value}</span>
                <span className="text-[#1A2E1A]/50 text-xs font-medium mt-1 uppercase tracking-wider">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom wave divider into gallery section */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-[0]">
          <svg viewBox="0 0 1440 40" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-10">
            <path d="M0 40 L0 20 Q360 0 720 20 Q1080 40 1440 20 L1440 40 Z" fill="#FDFAF4"/>
          </svg>
        </div>
      </div>

      {/* Gallery */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-12">
        <GalleryGrid />
      </div>
    </div>
  )
}
