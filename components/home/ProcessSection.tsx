"use client";

import { useRef, useEffect } from "react";

const STEPS = [
  {
    n: "1",
    title: "Inquiry",
    description: "Share your OCC grade and monthly quantity requirement",
  },
  {
    n: "2",
    title: "Pricing",
    description: "Receive competitive pricing based on live OCC market rates",
  },
  {
    n: "3",
    title: "Sourcing",
    description: "We source from verified US OCC recyclers and exporters",
  },
  {
    n: "4",
    title: "Shipment",
    description: "Container loaded, vessel booked, documents prepared",
  },
  {
    n: "5",
    title: "Delivery",
    description: "OCC delivered to your Indian port of discharge",
  },
];

export default function ProcessSection() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const els = ref.current?.querySelectorAll(".reveal");
    if (!els?.length) return;
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        }),
      { threshold: 0.08 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-24 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <p
            className="text-xs font-bold tracking-widest uppercase mb-3"
            style={{ color: "#D97706" }}
          >
            Simple Process
          </p>
          <h2
            className="text-4xl sm:text-5xl font-bold mb-4"
            style={{ color: "#1A2E1A" }}
          >
            From Collection to Your Mill
          </h2>
          <p className="text-lg text-gray-500 max-w-lg mx-auto">
            A transparent, end-to-end process you can count on.
          </p>
        </div>

        {/* Desktop horizontal */}
        <div className="hidden lg:block relative">
          {/* Dashed connector line */}
          <div
            className="absolute top-7 left-[calc(10%+28px)] right-[calc(10%+28px)]"
            style={{
              borderTop: "2px dashed #fde68a",
            }}
          />
          <div className="grid grid-cols-5 gap-4">
            {STEPS.map((step, i) => (
              <div
                key={step.n}
                className={`reveal reveal-delay-${i + 1} flex flex-col items-center text-center`}
              >
                <div
                  className="relative z-10 w-14 h-14 rounded-full flex items-center justify-center font-black text-xl text-white shadow-lg mb-4"
                  style={{
                    backgroundColor: "#F59E0B",
                    boxShadow: "0 4px 16px rgba(245,158,11,0.35)",
                  }}
                >
                  {step.n}
                </div>
                <h3
                  className="font-bold text-sm mb-2"
                  style={{ color: "#111827" }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-xs leading-relaxed text-gray-500 max-w-[140px]"
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile vertical */}
        <div className="lg:hidden space-y-0">
          {STEPS.map((step, i) => (
            <div key={step.n} className="reveal flex gap-5">
              <div className="flex flex-col items-center">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center font-black text-base text-white shrink-0 shadow-md"
                  style={{ backgroundColor: "#F59E0B" }}
                >
                  {step.n}
                </div>
                {i < STEPS.length - 1 && (
                  <div
                    className="w-px flex-1 my-2 min-h-[36px]"
                    style={{ borderLeft: "2px dashed #fde68a" }}
                  />
                )}
              </div>
              <div className="pb-8 pt-2">
                <h3
                  className="font-bold text-base mb-1"
                  style={{ color: "#111827" }}
                >
                  {step.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA nudge */}
        <div className="text-center mt-14 reveal reveal-delay-5">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-base text-white transition-all duration-200 hover:scale-105 active:scale-95"
            style={{
              backgroundColor: "#1A2E1A",
              boxShadow: "0 8px 24px rgba(26,46,26,0.25)",
            }}
          >
            Start the Process →
          </a>
        </div>
      </div>
    </section>
  );
}
