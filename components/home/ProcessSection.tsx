"use client";

import { useRef, useEffect } from "react";

const STEPS = [
  {
    n: "1",
    title: "Inquiry",
    description: "Share your material — OCC or scrap tires — grade, and monthly quantity",
  },
  {
    n: "2",
    title: "Pricing",
    description: "Receive competitive pricing based on live market rates",
  },
  {
    n: "3",
    title: "Sourcing",
    description: "We source from our verified US recycler and collector network",
  },
  {
    n: "4",
    title: "Shipment",
    description: "Container loaded, vessel booked, documents prepared",
  },
  {
    n: "5",
    title: "Delivery",
    description: "Material delivered to your port of discharge",
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
    <section ref={ref} className="py-24 px-6 lg:px-12" style={{ backgroundColor: "#FBF8F2" }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <p className="eyebrow mb-3">Simple Process</p>
          <h2
            className="text-4xl sm:text-5xl font-bold mb-4"
            style={{ color: "#16281F" }}
          >
            From Collection to Your Mill
          </h2>
          <p className="text-lg max-w-lg mx-auto" style={{ color: "#6C7A73" }}>
            A transparent, end-to-end process you can count on.
          </p>
        </div>

        {/* Desktop horizontal */}
        <div className="hidden lg:block relative">
          {/* Dashed connector line */}
          <div
            className="absolute top-7 left-[calc(10%+28px)] right-[calc(10%+28px)]"
            style={{ borderTop: "2px dashed rgba(204,159,95,0.30)" }}
          />
          <div className="grid grid-cols-5 gap-4">
            {STEPS.map((step, i) => (
              <div
                key={step.n}
                className={`reveal reveal-delay-${i + 1} flex flex-col items-center text-center`}
              >
                <div
                  className="relative z-10 w-14 h-14 rounded-full flex items-center justify-center font-black text-xl shadow-lg mb-4"
                  style={{
                    backgroundColor: "#E8BA74",
                    color: "#16281F",
                    boxShadow: "0 6px 18px rgba(204,159,95,0.45)",
                  }}
                >
                  {step.n}
                </div>
                <h3
                  className="font-bold text-sm mb-2"
                  style={{ color: "#175434" }}
                >
                  {step.title}
                </h3>
                <p className="text-xs leading-relaxed max-w-[140px]" style={{ color: "#6C7A73" }}>
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
                  className="w-12 h-12 rounded-full flex items-center justify-center font-black text-base shrink-0 shadow-md"
                  style={{ backgroundColor: "#E8BA74", color: "#16281F" }}
                >
                  {step.n}
                </div>
                {i < STEPS.length - 1 && (
                  <div
                    className="w-px flex-1 my-2 min-h-[36px]"
                    style={{ borderLeft: "2px dashed rgba(204,159,95,0.30)" }}
                  />
                )}
              </div>
              <div className="pb-8 pt-2">
                <h3
                  className="font-bold text-base mb-1"
                  style={{ color: "#175434" }}
                >
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#6C7A73" }}>
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA nudge */}
        <div className="text-center mt-14 reveal reveal-delay-5">
          <a href="/contact" className="btn btn-gold btn-md">
            Start the Process →
          </a>
        </div>
      </div>
    </section>
  );
}
