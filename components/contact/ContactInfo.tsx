export default function ContactInfo() {
  return (
    <div className="space-y-5">

      {/* ── CARD 1 — DIRECT CONTACTS ── */}
      <div className="reveal reveal-delay-1 bg-[#1B5E20] rounded-3xl p-8 text-white">
        <h3 className="font-black text-xl">Direct Contacts</h3>
        <p className="text-green-300 text-sm mt-1">Reach us directly on WhatsApp for fastest response.</p>

        <div className="mt-6 space-y-4">
          {/* Kashyap Patel */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center font-black text-white flex-shrink-0 text-sm">
              KP
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-bold text-white text-sm">Kashyap Patel</p>
              <p className="text-green-300 text-xs">Founder &amp; MD</p>
              <p className="text-green-200 text-xs mt-0.5">+1 (201) 914-2222</p>
            </div>
            <a
              href="https://wa.me/12019142222"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto bg-[#25D366] text-white text-xs font-bold px-3 py-2 rounded-full flex-shrink-0"
            >
              WhatsApp
            </a>
          </div>

          {/* Meghal Patel */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center font-black text-white flex-shrink-0 text-sm">
              MP
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-bold text-white text-sm">Meghal Patel</p>
              <p className="text-green-300 text-xs">Co-Founder</p>
              <p className="text-green-200 text-xs mt-0.5">+1 (864) 205-5932</p>
            </div>
            <a
              href="https://wa.me/18642055932"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto bg-[#25D366] text-white text-xs font-bold px-3 py-2 rounded-full flex-shrink-0"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* ── CARD 2 — EMAIL ── */}
      <div className="reveal reveal-delay-2 bg-[#FDFAF4] rounded-3xl p-6 border border-[#2E7D32]/10">
        <div className="flex items-start gap-4">
          <div className="bg-[#E8F5E9] rounded-2xl p-3 flex-shrink-0">
            <span className="text-xl">✉️</span>
          </div>
          <div>
            <p className="text-[#E8820C] text-xs font-bold tracking-widest uppercase">EMAIL</p>
            <p className="font-bold text-[#1A2E1A] text-sm mt-1">info@scrapacksolutions.com</p>
            {/* TODO: Update with real emails
                kashyap@scrapacksolutions.com
                meghal@scrapacksolutions.com */}
            <div className="mt-3 space-y-1">
              <p className="text-[#6B7280] text-xs">Kashyap: zul@meridiangrid.in</p>
              <p className="text-[#6B7280] text-xs">Meghal: zul@meridiangrid.in</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── CARD 3 — OFFICE LOCATION ── */}
      <div className="reveal reveal-delay-3 bg-[#FDFAF4] rounded-3xl p-6 border border-[#2E7D32]/10">
        <div className="flex items-start gap-4">
          <div className="bg-[#FFF3E0] rounded-2xl p-3 flex-shrink-0">
            <span className="text-xl">📍</span>
          </div>
          <div>
            <p className="text-[#E8820C] text-xs font-bold tracking-widest uppercase">OFFICE ADDRESS</p>
            <p className="font-bold text-[#1A2E1A] text-sm mt-1">9830 Walley Ave</p>
            <p className="text-[#6B7280] text-sm">Philadelphia, PA 19115</p>
            <p className="text-[#6B7280] text-sm">United States</p>
            <a
              href="https://maps.google.com/?q=9830+Walley+Ave+Philadelphia+PA+19115"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-3 text-[#E8820C] text-xs font-semibold"
            >
              View on Google Maps →
            </a>
          </div>
        </div>
      </div>

      {/* ── CARD 4 — BUSINESS HOURS ── */}
      <div className="reveal reveal-delay-4 bg-[#FDFAF4] rounded-3xl p-6 border border-[#2E7D32]/10">
        <div className="flex items-start gap-4">
          <div className="bg-[#E8F5E9] rounded-2xl p-3 flex-shrink-0">
            <span className="text-xl">🕐</span>
          </div>
          <div className="flex-1">
            <p className="text-[#E8820C] text-xs font-bold tracking-widest uppercase">RESPONSE TIME</p>
            <div className="mt-3 space-y-2 text-sm">
              <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                <span className="text-[#6B7280]">Quote Requests</span>
                <span className="text-[#2E7D32] font-semibold">Within 24 hours</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                <span className="text-[#6B7280]">WhatsApp Messages</span>
                <span className="text-[#1A2E1A] font-semibold">Within a few hours</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                <span className="text-[#6B7280]">Working Days</span>
                <span className="text-[#1A2E1A] font-semibold">Monday — Friday</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── CARD 5 — QUICK WHATSAPP CTA ── */}
      <div className="reveal reveal-delay-5 bg-[#E8820C] rounded-3xl p-6 text-white text-center">
        <div className="text-3xl mb-3">💬</div>
        <h3 className="font-black text-xl">Prefer WhatsApp?</h3>
        <p className="text-orange-100 text-sm mt-2">
          Send us a message directly and get a response faster.
        </p>
        <a
          href="https://wa.me/12019142222"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 w-full bg-white text-[#E8820C] font-black py-3 rounded-xl text-sm hover:bg-orange-50 transition-colors block"
        >
          💬 Chat with Kashyap on WhatsApp
        </a>
      </div>

    </div>
  );
}
