// REVIEW VERSION — Logo6 Theme
// Original theme backup: git stash or
// revert to previous commit if needed

"use client";

import { useState } from "react";

const FAQS = [
  {
    question: "What OCC grades does ScraPack export?",
    answer:
      "ScraPack specializes in OCC Grade 11 (Double-Sorted OCC) and OCC Grade 12 (Mixed OCC). These are the two most widely traded corrugated grades in the global recovered paper market and are in consistent demand from Indian paper mills.",
  },
  {
    question: "What is the minimum order quantity?",
    answer:
      "Our typical minimum order is one full 20-foot container, which holds approximately 18–22 metric tonnes of baled OCC depending on bale density. We also handle 40-foot containers for larger orders of 22–26 metric tonnes.",
  },
  {
    question: "Which Indian ports do you ship to?",
    answer:
      "We ship to all major Indian ports including Nhava Sheva (JNPT) Mumbai, Mundra, Chennai, Kolkata, Vizag, and Pipavav. If your required port is not listed, contact us — we work with freight forwarders covering the full Indian coastline.",
  },
  {
    question: "What payment terms do you offer?",
    answer:
      "We work with Letter of Credit (LC) at sight, LC usance (30/60/90 days), and TT (Telegraphic Transfer) arrangements depending on the relationship and order size. Payment terms are discussed and agreed before contract confirmation.",
  },
  {
    question: "How long does shipping take from Philadelphia to India?",
    answer:
      "Transit time from US East Coast ports to major Indian ports is typically 20–28 days depending on the vessel route and destination port. We provide the estimated arrival date with every booking confirmation.",
  },
  {
    question: "Do you provide a Certificate of Origin?",
    answer:
      "Yes. A US Certificate of Origin is provided with every shipment as part of our standard export documentation package. We also provide phytosanitary certificates where required by Indian customs.",
  },
  {
    question: "Can US recyclers sell directly to ScraPack?",
    answer:
      "Absolutely. We are always looking to expand our US supplier network. If you are an OCC recycler or exporter in the United States with consistent Grade 11 or Grade 12 material available, contact us directly to discuss pricing and pickup arrangements.",
  },
  {
    question: "How do I get a price quote?",
    answer:
      "Simply use the Request a Quote form on our website or send us a WhatsApp message. Share the OCC grade, quantity in metric tonnes, and your preferred port of discharge — and we will respond with a competitive offer within 24 hours.",
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
        <span className="font-semibold pr-4" style={{ color: "#1A2E1A" }}>
          {question}
        </span>
        <span
          className="flex-shrink-0 font-bold text-xl transition-transform duration-200"
          style={{
            color: "#E8820C",
            transform: open ? "rotate(45deg)" : "rotate(0deg)",
          }}
        >
          +
        </span>
      </button>

      {open && (
        <div
          className="px-6 pb-6 border-t border-gray-100 leading-relaxed"
          style={{ color: "#6B7280" }}
        >
          <p className="pt-4">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function ServicesFAQ() {
  return (
    <section className="py-24 px-6 lg:px-12" style={{ backgroundColor: "#FDFAF4" }}>
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#E8820C" }}>
            COMMON QUESTIONS
          </p>
          <h2 className="text-4xl sm:text-5xl font-black" style={{ color: "#1A2E1A" }}>
            Frequently Asked Questions
          </h2>
          <p className="text-xl mt-6" style={{ color: "#6B7280" }}>
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
