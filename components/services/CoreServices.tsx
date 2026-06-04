// REVIEW VERSION — Logo6 Theme
// Original theme backup: git stash or
// revert to previous commit if needed

"use client";

import { useRef, useEffect } from "react";

const SERVICES = [
  {
    icon: "🔍",
    iconBg: "#E8F5E9",
    number: "01",
    title: "OCC Sourcing & Procurement",
    description:
      "We source OCC Grade 11 and Grade 12 material from a verified network of recyclers, exporters, and collection centers across the United States. Every supplier in our network is pre-qualified for grade consistency and volume reliability.",
    features: [
      "Verified US OCC recycler network",
      "Grade 11 and Grade 12 procurement",
      "Consistent volume availability",
      "Competitive market pricing",
    ],
  },
  {
    icon: "📋",
    iconBg: "#FFF3E0",
    number: "02",
    title: "Grading & Quality Inspection",
    description:
      "Before any bale leaves our yard, it is inspected against ISRI grading standards. OCC Grade 11 must be clean, double-sorted, and free from prohibitive materials. Grade 12 is inspected for acceptable outthrow levels.",
    features: [
      "ISRI grade standard compliance",
      "Moisture content verification",
      "Prohibitive materials check",
      "Photo documentation per lot",
    ],
  },
  {
    icon: "📦",
    iconBg: "#E8F5E9",
    number: "03",
    title: "Baling & Export Packing",
    description:
      "OCC material is processed through industrial balers, compressed to export density, and strapped with steel or poly strapping. Bales are sized and weighted to maximize container utilization and minimize shipping cost per tonne.",
    features: [
      "Industrial baling to export density",
      "Steel and poly strapping options",
      "Bale weight: 600–1200 kg average",
      "Container-optimized sizing",
    ],
  },
  {
    icon: "🚛",
    iconBg: "#FFF3E0",
    number: "04",
    title: "Container Stuffing & Loading",
    description:
      "We manage the full container stuffing process at our Philadelphia facility. 20-foot and 40-foot containers are loaded to maximum legal capacity. All loading is supervised and photographed for documentation and dispute prevention.",
    features: [
      "20ft and 40ft container options",
      "Maximum capacity loading",
      "Photographic loading documentation",
      "Seal number and tare weight recorded",
    ],
  },
  {
    icon: "📄",
    iconBg: "#E8F5E9",
    number: "05",
    title: "Export Documentation",
    description:
      "We prepare and coordinate all export documents required for US customs clearance and Indian import compliance. Our documentation is accurate, complete, and delivered before vessel departure.",
    features: [
      "Commercial Invoice",
      "Packing List",
      "Bill of Lading (B/L)",
      "Certificate of Origin",
      "Phytosanitary Certificate (if required)",
      "AES / EEI filing (US Export)",
    ],
  },
  {
    icon: "🚢",
    iconBg: "#FFF3E0",
    number: "06",
    title: "Shipping & Port Coordination",
    description:
      "ScraPack coordinates with freight forwarders and shipping lines to book vessel space and ensure timely departure from US East Coast ports. We track shipments and keep buyers updated at every milestone.",
    features: [
      "US East Coast port shipping",
      "Major Indian ports covered",
      "Freight forwarder coordination",
      "Shipment milestone updates",
    ],
  },
];

export default function CoreServices() {
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
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6 reveal">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#E8820C" }}>
            CORE SERVICES
          </p>
          <h2 className="text-4xl sm:text-5xl font-black" style={{ color: "#1A2E1A" }}>
            Everything You Need,<br />Under One Roof
          </h2>
          <p className="text-xl mt-6 max-w-2xl mx-auto" style={{ color: "#6B7280" }}>
            ScraPack is not a broker. We are your end-to-end OCC export partner.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {SERVICES.map((svc, i) => (
            <div
              key={svc.number}
              className={`reveal reveal-delay-${(i % 3) + 1} bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}
            >
              {/* Icon */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl"
                style={{ backgroundColor: svc.iconBg }}
              >
                {svc.icon}
              </div>

              {/* Number */}
              <p className="text-xs font-bold tracking-widest mt-6" style={{ color: "#E8820C" }}>
                {svc.number}
              </p>

              {/* Title */}
              <h3 className="text-xl font-black mt-1" style={{ color: "#1A2E1A" }}>
                {svc.title}
              </h3>

              {/* Description */}
              <p className="leading-relaxed mt-3 text-sm" style={{ color: "#6B7280" }}>
                {svc.description}
              </p>

              {/* Features */}
              <ul className="mt-4 space-y-2">
                {svc.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm" style={{ color: "#4A5568" }}>
                    <span style={{ color: "#2E7D32" }}>✓</span> {f}
                  </li>
                ))}
              </ul>

              {/* Learn more */}
              <a
                href="/contact"
                className="inline-block mt-6 text-sm font-semibold"
                style={{ color: "#E8820C" }}
              >
                Learn more →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
