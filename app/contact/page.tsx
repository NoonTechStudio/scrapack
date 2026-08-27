import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import {
  BoxIcon,
  ChatIcon,
  CheckIcon,
  ClockIcon,
  FactoryIcon,
  GlobeIcon,
  MailIcon,
  MapPinIcon,
  RecycleIcon,
} from "@/components/icons";

export const metadata = {
  title: 'Request a Quote | ScraPack Solutions LLC — OCC & Scrap Tire Export USA',
  description:
    'Request a free export quote from ScraPack Solutions LLC. We export OCC Grade 11 & 12 corrugated cardboard and baled scrap tires from the USA to buyers worldwide. Contact us via WhatsApp, email, or our online quote form.',
  keywords: 'OCC export quote, request OCC price, corrugated cardboard export India, OCC Grade 11 price, OCC Grade 12 export quote, scrap tire exporter USA, baled scrap tires supplier, FOB scrap tires USA',
  openGraph: {
    title: 'Request a Quote | ScraPack Solutions LLC',
    description: 'Get a competitive export quote on OCC Grade 11 & 12 and baled scrap tires, FOB from major U.S. ports.',
    url: '/contact',
    siteName: 'ScraPack Solutions LLC',
    type: 'website',
  },
  alternates: {
    canonical: '/contact',
  },
};

const CONTACT_PILLS = [
  { Icon: MailIcon, label: 'info@scrapacksolutions.com' },
  { Icon: ChatIcon, label: '+1 (201) 914-2222 (WhatsApp)' },
  { Icon: MapPinIcon, label: 'Philadelphia, PA 19115' },
];

const FAQS = [
  {
    Icon: ClockIcon,
    tile: 'icon-tile-green',
    question: 'How fast do you respond?',
    answer:
      'Within 24 hours for email. Usually within a few hours on WhatsApp during business days.',
  },
  {
    Icon: BoxIcon,
    tile: 'icon-tile-kraft',
    question: 'What is the minimum order?',
    answer:
      'One full container load (FCL) — approximately 18–26 MT for OCC and 24–27 MT for baled scrap tires.',
  },
  {
    Icon: GlobeIcon,
    tile: 'icon-tile-slate',
    question: 'Which ports do you serve?',
    answer:
      'All major Indian ports — Nhava Sheva, Mundra, Chennai, Kolkata, Vizag and Pipavav — plus buyers across Asia, the Middle East and Africa.',
  },
];

function Tick({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[#16281F] flex items-center gap-2">
      <span className="text-[#217344] shrink-0">
        <CheckIcon size={14} strokeWidth={2.6} />
      </span>
      {children}
    </p>
  );
}

export default function ContactPage() {
  return (
    <div className="pb-20 md:pb-0">

      {/* ══ SECTION 1 — PAGE HERO ══ */}
      <section
        className="pt-24 md:pt-28 pb-16"
        style={{ background: 'linear-gradient(135deg, #FBF8F2 0%, #F2F9F5 50%, #FDF8F0 100%)' }}
      >
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <p className="eyebrow">Get in Touch</p>
          <h1 className="text-4xl md:text-6xl font-black text-[#16281F] text-center mt-3 leading-tight">
            Let&apos;s Start a<br />Conversation
          </h1>
          <p className="text-xl text-[#6C7A73] text-center mt-5 max-w-xl mx-auto leading-relaxed">
            Whether you are a US supplier looking for a reliable buyer, or a mill
            or processor seeking consistent supply — we want to hear from you.
          </p>

          {/* Contact pills */}
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            {CONTACT_PILLS.map(({ Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2.5 bg-white rounded-full px-6 py-3 shadow-sm border border-[#274C56]/8 text-sm font-semibold text-[#16281F]"
              >
                <span className="text-[#217344]">
                  <Icon size={17} />
                </span>
                {label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SECTION 2 — MAIN CONTENT ══ */}
      <section id="quote-form" className="bg-white py-12 md:py-16 scroll-mt-24">
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
      <section className="py-12 md:py-20" style={{ backgroundColor: '#F2F9F5' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 text-center">
          <p className="eyebrow">Who Should Contact Us</p>
          <h2 className="text-3xl md:text-4xl font-black text-[#16281F] mt-3">
            Are You a Supplier or a Buyer?
          </h2>
          <p className="text-[#6C7A73] mt-4 max-w-xl mx-auto">
            Tell us which side of the trade you are on and we will tailor our response to your needs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-12">

            {/* US Suppliers */}
            <div className="bg-white rounded-3xl p-8 border-t-4 border-[#217344] text-left shadow-sm">
              <div className="icon-tile icon-tile-green w-14 h-14">
                <RecycleIcon size={28} />
              </div>
              <h3 className="text-2xl font-black text-[#16281F] mt-5">
                US Recyclers &amp; Collectors
              </h3>
              <p className="text-[#6C7A73] mt-3">
                If you have OCC Grade 11 or 12 material, or scrap tires available,
                and need a consistent, reliable buyer — contact us with your
                location, volume and grade availability.
              </p>
              <div className="mt-6 space-y-2.5 text-sm">
                <Tick>We buy in container loads (FCL)</Tick>
                <Tick>Competitive market pricing</Tick>
                <Tick>Pickup available in select areas</Tick>
              </div>
              <a
                href="https://wa.me/12019142222"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-green btn-sm mt-7"
              >
                WhatsApp Kashyap →
              </a>
            </div>

            {/* Overseas Buyers */}
            <div className="bg-white rounded-3xl p-8 border-t-4 border-[#CC9F5F] text-left shadow-sm">
              <div className="icon-tile icon-tile-kraft w-14 h-14">
                <FactoryIcon size={28} />
              </div>
              <h3 className="text-2xl font-black text-[#16281F] mt-5">
                Mills, Processors &amp; Traders
              </h3>
              <p className="text-[#6C7A73] mt-3">
                If you need a reliable US source of OCC Grade 11 or 12, or baled
                scrap tires — contact us with your required grade, monthly volume
                and preferred port of discharge.
              </p>
              <div className="mt-6 space-y-2.5 text-sm">
                <Tick>FCL shipments to all major ports</Tick>
                <Tick>Full export documentation</Tick>
                <Tick>Flexible payment terms</Tick>
              </div>
              <a
                href="https://wa.me/12019142222"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-slate btn-sm mt-7"
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
          <h2 className="text-3xl font-black text-[#16281F]">Quick Answers</h2>
          <p className="text-[#6C7A73] mt-3">Common questions before getting in touch.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-10">
            {FAQS.map(({ Icon, tile, question, answer }) => (
              <div
                key={question}
                className="bg-[#FBF8F2] rounded-2xl p-6 border border-[#274C56]/8 text-left"
              >
                <div className={`icon-tile ${tile} w-11 h-11 mb-4`}>
                  <Icon size={22} />
                </div>
                <h3 className="font-black text-[#16281F]">{question}</h3>
                <p className="text-[#6C7A73] text-sm mt-2 leading-relaxed">{answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SECTION 5 — FINAL CTA STRIP ══ */}
      <section
        className="py-12 md:py-20 text-center"
        style={{ background: 'linear-gradient(135deg, #FDF8F0, #F2F9F5)' }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <h2 className="text-3xl md:text-4xl font-black text-[#16281F]">
            Still Have Questions?
          </h2>
          <p className="text-[#6C7A73] mt-4">
            Our team is always available on WhatsApp for a quick conversation.
          </p>
          <div className="mt-8 flex justify-center flex-wrap gap-4">
            <a
              href="https://wa.me/12019142222"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-green btn-lg"
            >
              <ChatIcon size={19} />
              WhatsApp Kashyap
            </a>
            <a
              href="mailto:info@scrapacksolutions.com"
              className="btn btn-outline btn-lg"
            >
              <MailIcon size={19} />
              Send an Email
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
