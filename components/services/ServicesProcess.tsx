// REVIEW VERSION — Logo6 Theme
// Original theme backup: git stash or
// revert to previous commit if needed

"use client";

import { useRef, useEffect } from "react";

const STEPS = [
  {
    n: "1",
    title: "Initial Inquiry",
    description:
      "Buyer or seller contacts ScraPack with grade, quantity, and port requirements.",
  },
  {
    n: "2",
    title: "Price Quotation",
    description:
      "We provide a competitive offer based on current US OCC market rates and freight costs.",
  },
  {
    n: "3",
    title: "Terms Agreement",
    description:
      "Payment terms, delivery schedule, and grade specifications confirmed in writing.",
  },
  {
    n: "4",
    title: "Material Sourcing",
    description:
      "We source from our verified US OCC network to fulfill the agreed volume and grade.",
  },
  {
    n: "5",
    title: "Baling & Inspection",
    description:
      "Material baled, strapped, weighed, and inspected against agreed grade specifications.",
  },
  {
    n: "6",
    title: "Container Loading",
    description:
      "Bales stuffed into containers at our Philadelphia facility and sealed for export.",
  },
  {
    n: "7",
    title: "Documentation & Customs",
    description:
      "All export documents prepared and US customs clearance completed before vessel departure.",
  },
  {
    n: "8",
    title: "Shipping & Delivery",
    description:
      "Container shipped to buyer's Indian port. ScraPack provides tracking updates until delivery.",
  },
];

export default function ServicesProcess() {
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
    <section
      ref={ref}
      className="py-24 px-6 lg:px-12 text-white"
      style={{ backgroundColor: "#1B5E20" }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6 reveal">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#A5D6A7" }}>
            HOW IT WORKS
          </p>
          <h2 className="text-4xl font-black text-white">
            From Your Yard to Indian Port
          </h2>
          <p className="text-xl mt-4" style={{ color: "#C8E6C9" }}>
            A transparent, step-by-step process with no surprises.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-16 space-y-6">
          {STEPS.map((step, i) => (
            <div
              key={step.n}
              className={`reveal reveal-delay-${(i % 4) + 1} flex items-start gap-6`}
            >
              {/* Step number */}
              <div
                className="w-14 h-14 flex-shrink-0 rounded-full flex items-center justify-center font-black text-white text-lg"
                style={{
                  backgroundColor: "#E8820C",
                  boxShadow: "0 4px 16px rgba(232,130,12,0.40)",
                }}
              >
                {step.n}
              </div>

              {/* Content */}
              <div
                className="flex-1 rounded-2xl p-6 hover:bg-white/12 transition-all"
                style={{
                  backgroundColor: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.10)",
                }}
              >
                <p className="font-bold text-white text-lg">{step.title}</p>
                <p className="text-sm leading-relaxed mt-2" style={{ color: "#A5D6A7" }}>
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
