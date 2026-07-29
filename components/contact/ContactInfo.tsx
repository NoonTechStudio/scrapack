import { ChatIcon, ClockIcon, MailIcon, MapPinIcon } from "@/components/icons";

const CONTACTS = [
  {
    initials: "KP",
    name: "Kashyap Patel",
    role: "Founder & MD",
    phone: "+1 (201) 914-2222",
    wa: "https://wa.me/12019142222",
  },
  {
    initials: "MP",
    name: "Meghal Patel",
    role: "Co-Founder",
    phone: "+1 (864) 205-5932",
    wa: "https://wa.me/18642055932",
  },
];

export default function ContactInfo() {
  return (
    <div className="space-y-5">

      {/* ── CARD 1 — DIRECT CONTACTS ── */}
      <div
        className="reveal reveal-delay-1 rounded-3xl p-8 text-white"
        style={{
          background: "linear-gradient(135deg, #175434 0%, #0E3A24 60%, #10252B 100%)",
        }}
      >
        <h3 className="font-black text-xl">Direct Contacts</h3>
        <p className="text-sm mt-1" style={{ color: "#9FD6B7" }}>
          Reach us directly on WhatsApp for the fastest response.
        </p>

        <div className="mt-6 space-y-4">
          {CONTACTS.map(({ initials, name, role, phone, wa }) => (
            <div key={initials} className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/10 border border-white/15 flex items-center justify-center font-black text-white flex-shrink-0 text-sm">
                {initials}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-bold text-white text-sm">{name}</p>
                <p className="text-xs" style={{ color: "#9FD6B7" }}>{role}</p>
                <p className="text-xs mt-0.5 text-white/70">{phone}</p>
              </div>
              <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto bg-[#25D366] hover:bg-[#1EBE59] transition-colors text-white text-xs font-bold px-3 py-2 rounded-full flex-shrink-0"
              >
                WhatsApp
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* ── CARD 2 — EMAIL ── */}
      <div className="reveal reveal-delay-2 bg-[#FBF8F2] rounded-3xl p-6 border border-[#274C56]/10">
        <div className="flex items-start gap-4">
          <div className="icon-tile icon-tile-green w-12 h-12">
            <MailIcon size={22} />
          </div>
          <div>
            <p className="eyebrow">Email</p>
            <p className="font-bold text-[#16281F] text-sm mt-1.5">
              info@scrapacksolutions.com
            </p>
            {/* TODO: replace with the real per-person addresses
                kashyap@scrapacksolutions.com
                meghal@scrapacksolutions.com */}
            <div className="mt-3 space-y-1">
              <p className="text-[#6C7A73] text-xs">Kashyap: zul@meridiangrid.in</p>
              <p className="text-[#6C7A73] text-xs">Meghal: zul@meridiangrid.in</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── CARD 3 — OFFICE LOCATION ── */}
      <div className="reveal reveal-delay-3 bg-[#FBF8F2] rounded-3xl p-6 border border-[#274C56]/10">
        <div className="flex items-start gap-4">
          <div className="icon-tile icon-tile-kraft w-12 h-12">
            <MapPinIcon size={22} />
          </div>
          <div>
            <p className="eyebrow">Office Address</p>
            <p className="font-bold text-[#16281F] text-sm mt-1.5">9830 Walley Ave</p>
            <p className="text-[#6C7A73] text-sm">Philadelphia, PA 19115</p>
            <p className="text-[#6C7A73] text-sm">United States</p>
            <a
              href="https://maps.google.com/?q=9830+Walley+Ave+Philadelphia+PA+19115"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 text-[#8A6224] text-xs font-bold hover:text-[#217344] transition-colors"
            >
              View on Google Maps →
            </a>
          </div>
        </div>
      </div>

      {/* ── CARD 4 — RESPONSE TIME ── */}
      <div className="reveal reveal-delay-4 bg-[#FBF8F2] rounded-3xl p-6 border border-[#274C56]/10">
        <div className="flex items-start gap-4">
          <div className="icon-tile icon-tile-slate w-12 h-12">
            <ClockIcon size={22} />
          </div>
          <div className="flex-1">
            <p className="eyebrow">Response Time</p>
            <div className="mt-3 space-y-2 text-sm">
              {[
                ["Quote Requests", "Within 24 hours"],
                ["WhatsApp Messages", "Within a few hours"],
                ["Working Days", "Monday — Friday"],
              ].map(([k, v]) => (
                <div
                  key={k}
                  className="flex justify-between items-center gap-3 border-b pb-2"
                  style={{ borderColor: "#EAF1F3" }}
                >
                  <span className="text-[#6C7A73]">{k}</span>
                  <span className="text-[#217344] font-semibold text-right">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── CARD 5 — QUICK WHATSAPP CTA ── */}
      <div
        className="reveal reveal-delay-5 rounded-3xl p-6 text-center"
        style={{ backgroundColor: "#E8BA74", color: "#16281F" }}
      >
        <div className="icon-tile w-12 h-12 mx-auto mb-4 bg-white/45">
          <ChatIcon size={24} />
        </div>
        <h3 className="font-black text-xl">Prefer WhatsApp?</h3>
        <p className="text-sm mt-2" style={{ color: "rgba(22,40,31,0.72)" }}>
          Send us a message directly and get a response faster.
        </p>
        <a
          href="https://wa.me/12019142222"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 w-full bg-[#16281F] text-white font-bold py-3.5 rounded-xl text-sm hover:bg-[#0E3A24] transition-colors flex items-center justify-center gap-2"
        >
          <ChatIcon size={17} />
          Chat with Kashyap on WhatsApp
        </a>
      </div>

    </div>
  );
}
