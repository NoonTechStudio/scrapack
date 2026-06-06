export default function MeetFounder() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">

        {/* Section Header */}
        <div className="text-center">
          <span className="text-[#E8820C] text-xs font-bold tracking-[3px] uppercase">
            OUR TEAM
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[#1A2E1A] mt-3">
            The People Behind ScraPack
          </h2>
          <p className="text-lg text-[#6B7280] mt-4 max-w-2xl mx-auto">
            Built by people who understand both sides of the trade — the US recycling
            industry and the Indian paper market.
          </p>
        </div>

        {/* Two Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto mt-16">

          {/* ── CARD 1 — KASHYAP PATEL ── */}
          <div className="bg-[#FDFAF4] rounded-3xl p-8 md:p-10 border border-[#2E7D32]/10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center">

            {/* Photo */}
            <div className="relative w-28 h-28 md:w-36 md:h-36 mx-auto">
              <div className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-gradient-to-br from-[#1B5E20] to-[#2E7D32] flex items-center justify-center border-4 border-white shadow-xl ring-4 ring-[#2E7D32]/15">
                <span className="text-white font-black text-3xl md:text-4xl">KP</span>
              </div>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-[#E8820C] text-white text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap shadow-lg">
                Founder &amp; MD
              </div>
            </div>

            {/* Name & Title */}
            <h3 className="text-2xl font-black text-[#1A2E1A] mt-8">Kashyap Patel</h3>
            <p className="text-[#E8820C] font-semibold text-sm mt-1">Founder &amp; Managing Director</p>
            <p className="text-[#6B7280] text-xs mt-1">ScraPack Solutions LLC</p>

            {/* Divider */}
            <div className="w-12 h-1 rounded-full bg-[#2E7D32] mx-auto mt-5" />

            {/* Bio */}
            <p className="text-[#4A5568] text-sm leading-relaxed mt-5 max-w-sm">
              Kashyap co-founded ScraPack Solutions with a deep understanding of the US OCC
              recycling landscape and a clear vision for building a reliable export corridor
              to India. Based in Philadelphia, he manages supplier relationships, trade
              operations, and business development.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap justify-center gap-2 mt-6">
              {["OCC Trading", "US Supplier Relations", "Export Operations", "Business Development"].map((tag) => (
                <span key={tag} className="bg-white border border-[#2E7D32]/20 text-[#1B5E20] text-xs font-semibold px-4 py-2 rounded-full shadow-sm">
                  {tag}
                </span>
              ))}
            </div>

            {/* Contact Buttons */}
            <div className="flex gap-3 justify-center mt-8">
              <a
                href="mailto:kashyap@scrapacksolutions.com"
                className="bg-[#1B5E20] text-white text-xs font-semibold px-5 py-2.5 rounded-full hover:bg-[#2E7D32] transition-colors"
              >
                ✉ Email
              </a>
              <a
                href="https://wa.me/12019142222"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white text-xs font-semibold px-5 py-2.5 rounded-full hover:bg-[#1EBE59] transition-colors"
              >
                💬 +1 (201) 914-2222
              </a>
            </div>
          </div>

          {/* ── CARD 2 — MEGHAL PATEL ── */}
          <div className="bg-[#FDFAF4] rounded-3xl p-8 md:p-10 border border-[#E8820C]/10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center">

            {/* Photo */}
            <div className="relative w-28 h-28 md:w-36 md:h-36 mx-auto">
              <div className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-gradient-to-br from-[#C96B00] to-[#E8820C] flex items-center justify-center border-4 border-white shadow-xl ring-4 ring-[#E8820C]/15">
                <span className="text-white font-black text-3xl md:text-4xl">MP</span>
              </div>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-[#2E7D32] text-white text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap shadow-lg">
                Co-Founder
              </div>
            </div>

            {/* Name & Title */}
            <h3 className="text-2xl font-black text-[#1A2E1A] mt-8">Meghal Patel</h3>
            <p className="text-[#E8820C] font-semibold text-sm mt-1">Co-Founder</p>
            <p className="text-[#6B7280] text-xs mt-1">ScraPack Solutions LLC</p>

            {/* Divider */}
            <div className="w-12 h-1 rounded-full bg-[#E8820C] mx-auto mt-5" />

            {/* Bio */}
            <p className="text-[#4A5568] text-sm leading-relaxed mt-5 max-w-sm">
              Meghal co-founded ScraPack Solutions bringing expertise in trade coordination
              and customer relations. She plays a key role in managing buyer relationships
              with Indian paper mills and traders, ensuring smooth communication and
              consistent service delivery across the supply chain.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap justify-center gap-2 mt-6">
              {["Trade Coordination", "Buyer Relations", "India Market", "Operations"].map((tag) => (
                <span key={tag} className="bg-white border border-[#E8820C]/20 text-[#C96B00] text-xs font-semibold px-4 py-2 rounded-full shadow-sm">
                  {tag}
                </span>
              ))}
            </div>

            {/* Contact Buttons */}
            <div className="flex gap-3 justify-center mt-8">
              <a
                href="mailto:meghal@scrapacksolutions.com"
                className="bg-[#1B5E20] text-white text-xs font-semibold px-5 py-2.5 rounded-full hover:bg-[#2E7D32] transition-colors"
              >
                ✉ Email
              </a>
              <a
                href="https://wa.me/18642055932"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white text-xs font-semibold px-5 py-2.5 rounded-full hover:bg-[#1EBE59] transition-colors"
              >
                💬 +1 (864) 205-5932
              </a>
            </div>
          </div>

        </div>

        {/* Note below cards */}
        <div className="mt-12 text-center max-w-2xl mx-auto bg-[#F1F8E9] rounded-2xl p-6 border border-[#2E7D32]/15">
          <div className="text-2xl mb-3">🤝</div>
          <p className="text-[#4A5568] text-sm leading-relaxed">
            ScraPack is a family-built business with deep roots in both the US recycling
            industry and the Indian paper trade. Every relationship we build reflects
            our personal commitment to reliability, transparency, and long-term partnership.
          </p>
        </div>

      </div>
    </section>
  );
}
