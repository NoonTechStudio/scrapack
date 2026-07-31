"use client";

import { useRef, useEffect } from "react";
import {
  CheckIcon,
  ContainerIcon,
  DocumentIcon,
  InspectIcon,
  BaleIcon,
  ShipIcon,
  VerifiedIcon,
} from "@/components/icons";

const SERVICES = [
  {
    Icon: InspectIcon,
    tile: "icon-tile-green",
    number: "01",
    title: "Sourcing & Procurement",
    description:
      "We source OCC Grade 11 & 12 and baled scrap tires from a verified network of recyclers, collectors, and collection centers across the United States. Every supplier in our network is pre-qualified for grade consistency and volume reliability.",
    features: [
      "Verified US recycler & collector network",
      "OCC Grade 11 & 12 procurement",
      "PCR, mixed & truck tire bale sourcing",
      "Competitive market pricing",
    ],
  },
  {
    Icon: VerifiedIcon,
    tile: "icon-tile-kraft",
    number: "02",
    title: "Grading & Quality Inspection",
    description:
      "Before any load leaves our yard, it is inspected against the applicable standard — ISRI grading for OCC, ReMA specifications for scrap tires. Cleanliness, moisture, and contamination are checked on every lot.",
    features: [
      "ISRI (OCC) & ReMA (tire) compliance",
      "Moisture content verification",
      "Prohibitive materials / rim check",
      "Photo documentation per lot",
    ],
  },
  {
    Icon: BaleIcon,
    tile: "icon-tile-green",
    number: "03",
    title: "Baling & Export Packing",
    description:
      "OCC and scrap tires are both processed through industrial balers, hydraulically compressed to export density, and strapped with steel wire or poly strapping. Loads are sized and weighted to maximize container utilization.",
    features: [
      "Industrial baling to export density",
      "Steel and poly strapping options",
      "OCC bales & high-density tire bales",
      "Container-optimized sizing",
    ],
  },
  {
    Icon: ContainerIcon,
    tile: "icon-tile-kraft",
    number: "04",
    title: "Container Stuffing & Loading",
    description:
      "We manage the full container stuffing process at our Philadelphia facility for both product lines. 20-foot and 40-foot containers are loaded to maximum legal capacity, supervised and photographed for documentation and dispute prevention.",
    features: [
      "20ft and 40ft container options",
      "Maximum capacity loading",
      "Photographic loading documentation",
      "Seal number and tare weight recorded",
    ],
  },
  {
    Icon: DocumentIcon,
    tile: "icon-tile-green",
    number: "05",
    title: "Export Documentation",
    description:
      "We prepare and coordinate all export documents required for US customs clearance and destination-country import compliance — for OCC and tire shipments alike. Documentation is accurate, complete, and delivered before vessel departure.",
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
    Icon: ShipIcon,
    tile: "icon-tile-kraft",
    number: "06",
    title: "Shipping & Port Coordination",
    description:
      "ScraPack coordinates with freight forwarders and shipping lines to book vessel space and ensure timely departure from major US ports, for both OCC and tire cargo. We track shipments and keep buyers updated at every milestone.",
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
          <p className="eyebrow mb-3">Core Services</p>
          <h2 className="text-4xl sm:text-5xl font-black" style={{ color: "#16281F" }}>
            Everything You Need,<br />Under One Roof
          </h2>
          <p className="text-xl mt-6 max-w-2xl mx-auto" style={{ color: "#6C7A73" }}>
            ScraPack is not a broker. One process, two product lines — we are your end-to-end recovered-material export partner.
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
              <div className={`icon-tile ${svc.tile} w-14 h-14`}>
                <svc.Icon size={26} />
              </div>

              {/* Number */}
              <p className="text-xs font-bold tracking-widest mt-6" style={{ color: "#8A6224" }}>
                {svc.number}
              </p>

              {/* Title */}
              <h3 className="text-xl font-black mt-1" style={{ color: "#16281F" }}>
                {svc.title}
              </h3>

              {/* Description */}
              <p className="leading-relaxed mt-3 text-sm" style={{ color: "#6C7A73" }}>
                {svc.description}
              </p>

              {/* Features */}
              <ul className="mt-4 space-y-2">
                {svc.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm" style={{ color: "#46554E" }}>
                    <span className="shrink-0 mt-0.5" style={{ color: "#217344" }}>
                      <CheckIcon size={13} strokeWidth={2.6} />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              {/* Learn more */}
              <a
                href="/contact"
                className="inline-block mt-6 text-sm font-bold transition-colors hover:text-[#217344]"
                style={{ color: "#8A6224" }}
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
