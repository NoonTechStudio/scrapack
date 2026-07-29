"use client";

import { useRef, useEffect } from "react";
import { CheckIcon, HandshakeIcon } from "@/components/icons";

const bulletItems = [
  "OCC Grade 11 & 12 Specialist",
  "USA → India Trade Corridor",
  "Licensed US Export Trading Company",
];

export default function OurStory() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const els = ref.current?.querySelectorAll(".reveal");
    if (!els?.length) return;
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        }),
      { threshold: 0.1 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-white py-16 md:py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-16 items-start">

          {/* Left — text content */}
          <div className="reveal reveal-delay-1">
            <p
              className="text-xs font-bold tracking-widest uppercase mb-3"
              style={{ color: "#8A6224" }}
            >
              WHO WE ARE
            </p>
            <h2
              className="text-3xl md:text-4xl font-black leading-tight"
              style={{ color: "#16281F" }}
            >
              From Philadelphia to<br />
              India&apos;s Paper Mills
            </h2>

            <div className="mt-6 space-y-5 text-lg leading-relaxed" style={{ color: "#46554E" }}>
              <p>
                ScraPack Solutions LLC was founded with a single, clear mission —
                to create a reliable, transparent bridge between the Old Corrugated
                Container (OCC) recycling industry in the United States and the
                paper manufacturing sector in India.
              </p>
              <p>
                Based in Philadelphia, Pennsylvania, we are strategically positioned
                in one of the most active OCC collection corridors on the East Coast.
                Our location gives us direct access to a strong network of certified
                OCC recyclers, exporters, and logistics partners.
              </p>
              <p>
                We specialize exclusively in OCC Grade 11 and OCC Grade 12 — the
                two most widely traded corrugated grades in the global recovered
                paper market. Every bale we trade is inspected, documented, and
                delivered to specification.
              </p>
            </div>

            {/* Quote block */}
            <div
              className="mt-10 rounded-r-2xl p-6"
              style={{
                borderLeft: "4px solid #E8BA74",
                backgroundColor: "#FAF0DF",
              }}
            >
              <p
                className="text-lg font-medium italic"
                style={{ color: "#16281F" }}
              >
                &ldquo;We don&apos;t just move boxes. We build supply relationships
                that both sides can count on — shipment after shipment.&rdquo;
              </p>
              <p className="mt-3 text-sm font-semibold not-italic" style={{ color: "#6C7A73" }}>
                — Kashyap Patel, Founder, ScraPack Solutions
              </p>
            </div>
          </div>

          {/* Right — desktop card stack */}
          <div className="reveal reveal-delay-2 relative h-[520px] hidden lg:block">
            {/* Main card */}
            <div
              className="absolute top-0 left-0 right-0 rounded-3xl p-8 text-white"
              style={{ backgroundColor: "#175434" }}
            >
              <p
                className="text-xs tracking-widest font-semibold"
                style={{ color: "#9FD6B7" }}
              >
                FOUNDED IN
              </p>
              <p className="text-6xl font-black text-white mt-2">2024</p>
              <div
                className="border-t my-4"
                style={{ borderColor: "rgba(255,255,255,0.2)" }}
              />
              <p className="text-xl font-semibold">Philadelphia, PA</p>
              <p className="text-sm mt-1" style={{ color: "#C6E7D3" }}>
                9830 Walley Ave, PA 19115
              </p>
              <ul className="mt-6 space-y-3">
                {bulletItems.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm">
                    <span
                      className="w-2 h-2 rounded-full flex-shrink-0"
                      style={{ backgroundColor: "#9FD6B7" }}
                    />
                    <span className="text-white">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Floating card — Relationship First */}
            <div className="absolute bottom-16 right-0 bg-white rounded-2xl shadow-xl p-5 w-52">
              <div className="icon-tile icon-tile-green w-11 h-11">
                <HandshakeIcon size={22} />
              </div>
              <p
                className="font-bold text-sm mt-2"
                style={{ color: "#16281F" }}
              >
                Relationship First
              </p>
              <p className="text-xs mt-1" style={{ color: "#6C7A73" }}>
                Long-term supply partnerships with both US and Indian partners
              </p>
            </div>

            {/* Floating card — Grade Verified */}
            <div
              className="absolute -bottom-4 left-4 rounded-2xl shadow-xl p-4 w-44"
              style={{ backgroundColor: "#E8BA74", color: "#16281F" }}
            >
              <div className="icon-tile w-9 h-9 bg-white/45">
                <CheckIcon size={18} strokeWidth={2.6} />
              </div>
              <p className="font-bold text-sm mt-2">Grade Verified</p>
              <p className="text-xs mt-1" style={{ color: "rgba(22,40,31,0.7)" }}>
                Every bale inspected
              </p>
            </div>
          </div>

          {/* Mobile-only founder card */}
          <div
            className="lg:hidden rounded-3xl p-8 text-white"
            style={{ backgroundColor: "#175434" }}
          >
            <p
              className="text-xs tracking-widest font-semibold"
              style={{ color: "#9FD6B7" }}
            >
              FOUNDED IN
            </p>
            <p className="text-5xl font-black text-white mt-2">2024</p>
            <div
              className="border-t my-4"
              style={{ borderColor: "rgba(255,255,255,0.2)" }}
            />
            <p className="text-xl font-semibold">Philadelphia, PA</p>
            <p className="text-sm mt-1" style={{ color: "#C6E7D3" }}>
              9830 Walley Ave, PA 19115
            </p>
            <ul className="mt-6 space-y-3">
              {bulletItems.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm">
                  <span
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{ backgroundColor: "#9FD6B7" }}
                  />
                  <span className="text-white">{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
