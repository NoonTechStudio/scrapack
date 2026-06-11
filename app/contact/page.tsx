import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";

export const metadata = {
  title: 'Contact Us | ScraPack Solutions LLC',
  description:
    'Get in touch with ScraPack Solutions LLC. Request a quote for OCC Grade 11 & 12 export from USA to India. Contact us via WhatsApp, email, or our online quote form.',
};

export default function ContactPage() {
  return (
    <div className="pb-20 md:pb-0">

      {/* ══ SECTION 1 — PAGE HERO ══ */}
      <section
        className="pt-24 md:pt-28 pb-16"
        style={{ background: 'linear-gradient(135deg, #FDFAF4 0%, #F1F8E9 50%, #FFF8F0 100%)' }}
      >
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <p className="text-[#E8820C] text-xs font-bold tracking-[3px] uppercase">
            GET IN TOUCH
          </p>
          <h1 className="text-4xl md:text-6xl font-black text-[#1A2E1A] text-center mt-3 leading-tight">
            Let&apos;s Start a<br />Conversation
          </h1>
          <p className="text-xl text-[#6B7280] text-center mt-5 max-w-xl mx-auto leading-relaxed">
            Whether you are a US OCC supplier looking for a reliable buyer, or an Indian paper mill seeking consistent
            supply — we want to hear from you.
          </p>

          {/* Contact pills */}
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <div className="flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-sm border border-gray-100 text-sm font-semibold text-[#1A2E1A]">
              📧 info@scrapacksolutions.com
            </div>
            <div className="flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-sm border border-gray-100 text-sm font-semibold text-[#1A2E1A]">
              💬 +1 (201) 914-2222 (WhatsApp)
            </div>
            <div className="flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-sm border border-gray-100 text-sm font-semibold text-[#1A2E1A]">
              📍 Philadelphia, PA 19115
            </div>
          </div>
        </div>
      </section>

      {/* ══ SECTION 2 — MAIN CONTENT ══ */}
      <section className="bg-white py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
          <div className="lg:col-span-2">
            <ContactInfo />
          </div>
        </div>
      </section>

      {/* ══ SECTION 3 — TWO AUDIENCE CARDS ══ */}
      <section className="py-12 md:py-20" style={{ backgroundColor: '#F1F8E9' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 text-center">
          <p className="text-[#E8820C] text-xs font-bold tracking-[3px] uppercase">
            WHO SHOULD CONTACT US
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-[#1A2E1A] mt-3">
            Are You a Supplier or a Buyer?
          </h2>
          <p className="text-[#6B7280] mt-4 max-w-xl mx-auto">
            Tell us which side of the trade you are on and we will tailor our response to your needs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-12">

            {/* US Suppliers */}
            <div className="reveal reveal-delay-1 bg-white rounded-3xl p-8 border-t-4 border-[#2E7D32] text-left">
              <div className="text-4xl">♻️</div>
              <h3 className="text-2xl font-black text-[#1A2E1A] mt-4">
                US OCC Recyclers &amp; Exporters
              </h3>
              <p className="text-[#6B7280] mt-3">
                If you have OCC Grade 11 or Grade 12 material available and need a consistent, reliable buyer — contact
                us with your location, volume, and grade availability.
              </p>
              <div className="mt-6 space-y-2 text-sm">
                <p className="text-[#1A2E1A]">✓ We buy in container loads (FCL)</p>
                <p className="text-[#1A2E1A]">✓ Competitive market pricing</p>
                <p className="text-[#1A2E1A]">✓ Pickup available in select areas</p>
              </div>
              <a
                href="https://wa.me/12019142222"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block bg-[#1B5E20] text-white rounded-full px-6 py-3 font-bold text-sm"
              >
                WhatsApp Kashyap →
              </a>
            </div>

            {/* Indian Buyers */}
            <div className="reveal reveal-delay-2 bg-white rounded-3xl p-8 border-t-4 border-[#E8820C] text-left">
              <div className="text-4xl">🏭</div>
              <h3 className="text-2xl font-black text-[#1A2E1A] mt-4">
                Indian Paper Mills &amp; Traders
              </h3>
              <p className="text-[#6B7280] mt-3">
                If you need a reliable US source of OCC Grade 11 or 12 for your mill — contact us with your required
                grade, monthly volume, and preferred port of discharge.
              </p>
              <div className="mt-6 space-y-2 text-sm">
                <p className="text-[#1A2E1A]">✓ FCL shipments to all Indian ports</p>
                <p className="text-[#1A2E1A]">✓ Full export documentation</p>
                <p className="text-[#1A2E1A]">✓ Flexible payment terms</p>
              </div>
              <a
                href="https://wa.me/12019142222"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block bg-[#E8820C] text-white rounded-full px-6 py-3 font-bold text-sm"
              >
                Request Pricing →
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* ══ SECTION 4 — FAQ STRIP ══ */}
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 text-center">
          <h2 className="text-3xl font-black text-[#1A2E1A]">Quick Answers</h2>
          <p className="text-[#6B7280] mt-3">Common questions before getting in touch.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-10">

            <div className="reveal reveal-delay-1 bg-[#FDFAF4] rounded-2xl p-6 border border-gray-100 text-left">
              <div className="text-2xl mb-3">⏱️</div>
              <h3 className="font-black text-[#1A2E1A]">How fast do you respond?</h3>
              <p className="text-[#6B7280] text-sm mt-2">
                Within 24 hours for email. Usually within a few hours on WhatsApp during business days.
              </p>
            </div>

            <div className="reveal reveal-delay-2 bg-[#FDFAF4] rounded-2xl p-6 border border-gray-100 text-left">
              <div className="text-2xl mb-3">📦</div>
              <h3 className="font-black text-[#1A2E1A]">What is minimum order?</h3>
              <p className="text-[#6B7280] text-sm mt-2">
                One full container load (FCL) — approximately 18–26 MT depending on grade and container size.
              </p>
            </div>

            <div className="reveal reveal-delay-3 bg-[#FDFAF4] rounded-2xl p-6 border border-gray-100 text-left">
              <div className="text-2xl mb-3">🌏</div>
              <h3 className="font-black text-[#1A2E1A]">Which Indian ports do you serve?</h3>
              <p className="text-[#6B7280] text-sm mt-2">
                All major ports — Nhava Sheva, Mundra, Chennai, Kolkata, Vizag, and Pipavav.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ══ SECTION 5 — FINAL CTA STRIP ══ */}
      <section
        className="py-12 md:py-20 text-center"
        style={{ background: 'linear-gradient(135deg, #FFF8F0, #F1F8E9)' }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <h2 className="text-3xl md:text-4xl font-black text-[#1A2E1A]">
            Still Have Questions?
          </h2>
          <p className="text-[#6B7280] mt-4">
            Our team is always available on WhatsApp for a quick conversation.
          </p>
          <div className="mt-8 flex justify-center flex-wrap gap-4">
            <a
              href="https://wa.me/12019142222"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white rounded-full px-8 py-4 font-bold"
            >
              💬 WhatsApp Kashyap
            </a>
            <a
              href="mailto:info@scrapacksolutions.com"
              className="bg-[#1B5E20] text-white rounded-full px-8 py-4 font-bold"
            >
              ✉ Send an Email
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
