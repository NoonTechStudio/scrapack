"use client";

import { useState } from "react";

const FAQS = [
  {
    question: "What materials does ScraPack export?",
    answer:
      "We run two parallel export programs: OCC Grade 11 & 12 corrugated cardboard for the paper industry, and baled scrap tires (PCR, mixed, truck, and whole) for pyrolysis, tire-derived fuel, and rubber recycling. Both are handled with the same sourcing, grading, and documentation standard.",
  },
  {
    question: "What OCC grades does ScraPack export?",
    answer:
      "ScraPack trades OCC Grade 11 (Double-Sorted OCC) and OCC Grade 12 (Mixed OCC) — the two most widely traded corrugated grades in the global recovered paper market, in consistent demand from paper mills worldwide.",
  },
  {
    question: "What types of scrap tire bales do you supply?",
    answer:
      "We supply passenger car (PCR) bales, mixed PCR/LTR/SUV bales, truck and bus tire bales, and whole scrap tires on request — all hydraulically compressed to high density under ReMA (formerly ISRI) specifications.",
  },
  {
    question: "What is the minimum order quantity?",
    answer:
      "Our typical minimum order is one full 20-foot container, which holds approximately 18–22 metric tonnes of baled OCC or 24–27 metric tonnes of baled scrap tires depending on density. We also handle 40-foot high-cube containers for larger orders.",
  },
  {
    question: "Which ports do you ship to?",
    answer:
      "We ship FOB from major US ports — including Philadelphia, Houston, Long Beach, Los Angeles, Savannah, Charleston, Norfolk, Newark, and Baltimore — to all major destination ports across India, Southeast Asia, the Middle East, and beyond.",
  },
  {
    question: "What payment terms do you offer?",
    answer:
      "We work with Letter of Credit (LC) at sight, LC usance (30/60/90 days), and TT (Telegraphic Transfer) arrangements depending on the relationship and order size, for both OCC and tire shipments. Payment terms are discussed and agreed before contract confirmation.",
  },
  {
    question: "How long does shipping take?",
    answer:
      "Transit time from US ports to major destination ports is typically 20–35 days depending on the vessel route and destination port. We provide the estimated arrival date with every booking confirmation, for OCC and tire cargo alike.",
  },
  {
    question: "Do you provide a Certificate of Origin?",
    answer:
      "Yes. A US Certificate of Origin is provided with every shipment as part of our standard export documentation package. We also provide phytosanitary or weight certificates where required by destination customs.",
  },
  {
    question: "Can US recyclers or collectors sell directly to ScraPack?",
    answer:
      "Absolutely. We are always looking to expand our US supplier network on both product lines. If you are an OCC recycler or a scrap tire collector in the United States with consistent material available, contact us directly to discuss pricing and pickup arrangements.",
  },
  {
    question: "How do I get a price quote?",
    answer:
      "Simply use the Request a Quote form on our website or send us a WhatsApp message. Share your material — OCC grade or tire bale type — quantity in metric tonnes, and preferred port of discharge, and we will respond with a competitive offer within 24 hours.",
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white rounded-2xl mb-4 border border-gray-100 shadow-sm overflow-hidden">
      <button
        className="w-full cursor-pointer p-6 flex justify-between items-center hover:bg-gray-50 transition-colors text-left"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        <span className="font-semibold pr-4" style={{ color: "#16281F" }}>
          {question}
        </span>
        <span
          className="flex-shrink-0 font-bold text-xl transition-transform duration-200"
          style={{
            color: "#8A6224",
            transform: open ? "rotate(45deg)" : "rotate(0deg)",
          }}
        >
          +
        </span>
      </button>

      {open && (
        <div
          className="px-6 pb-6 border-t border-gray-100 leading-relaxed"
          style={{ color: "#6C7A73" }}
        >
          <p className="pt-4">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function ServicesFAQ() {
  return (
    <section className="py-24 px-6 lg:px-12" style={{ backgroundColor: "#FBF8F2" }}>
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="eyebrow mb-3" style={{ color: "#8A6224" }}>
            COMMON QUESTIONS
          </p>
          <h2 className="text-4xl sm:text-5xl font-black" style={{ color: "#16281F" }}>
            Frequently Asked Questions
          </h2>
          <p className="text-xl mt-6" style={{ color: "#6C7A73" }}>
            Everything you need to know about working with ScraPack.
          </p>
        </div>

        {/* Accordion */}
        <div>
          {FAQS.map((faq) => (
            <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}
