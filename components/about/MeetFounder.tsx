// REVIEW VERSION — Logo6 Theme
// Original theme backup: git stash or
// revert to previous commit if needed

"use client";

import { useRef, useEffect } from "react";

const contactItems = [
  {
    icon: "📍",
    label: "Office Address",
    lines: ["9830 Walley Ave", "Philadelphia, PA 19115", "United States"],
    href: null,
  },
  {
    icon: "✉️",
    label: "Email",
    lines: ["info@scrapacksolutions.com"],
    href: "mailto:info@scrapacksolutions.com",
  },
  {
    icon: "💬",
    label: "WhatsApp",
    lines: ["+1 (215) 555-0000"],
    href: "https://wa.me/12155550000",
  },
  {
    icon: "🌐",
    label: "Website",
    lines: ["www.scrapacksolutions.com"],
    href: null,
  },
];

const bizItems = [
  "🏢 ScraPack Solutions LLC",
  "📌 Philadelphia, Pennsylvania, USA",
  "⚖️ Limited Liability Company (LLC)",
  "🇺🇸 United States Registered Business",
];

export default function MeetFounder() {
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Left — founder card */}
          <div
            className="rounded-3xl p-10 reveal reveal-delay-1"
            style={{
              background: "linear-gradient(135deg, #F1F8E9, #ffffff)",
              border: "1px solid rgba(46,125,50,0.10)",
            }}
          >
            <div
              className="w-28 h-28 rounded-2xl flex items-center justify-center mx-auto lg:mx-0"
              style={{ backgroundColor: "#1B5E20" }}
            >
              <span className="text-white font-black text-3xl">KP</span>
            </div>

            <h2
              className="text-3xl font-black mt-6 text-center lg:text-left"
              style={{ color: "#1A2E1A" }}
            >
              Kashyap Patel
            </h2>
            <p
              className="font-semibold mt-1 text-center lg:text-left"
              style={{ color: "#E8820C" }}
            >
              Founder &amp; Managing Director
            </p>
            <p className="text-sm text-center lg:text-left" style={{ color: "#6B7280" }}>
              ScraPack Solutions LLC
            </p>

            <div className="border-t border-gray-200 my-6" />

            <div className="leading-relaxed space-y-4" style={{ color: "#4A5568" }}>
              <p>
                Kashyap Patel founded ScraPack Solutions LLC with a vision to
                build a reliable, professional OCC export operation connecting
                the United States and India — two of the world&apos;s largest
                paper markets.
              </p>
              <p>
                With a deep understanding of both the US recycling landscape and
                the Indian paper manufacturing sector, Kashyap brings a unique
                cross-market perspective to every trade relationship ScraPack
                builds.
              </p>
              <p>
                His approach is direct and relationship-driven — he believes that
                in commodity trading, trust and consistency matter more than
                anything else.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="mailto:info@scrapacksolutions.com"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold text-sm text-white transition-all duration-200 hover:opacity-90"
                style={{ backgroundColor: "#1B5E20" }}
              >
                📧 Email Kashyap
              </a>
              <a
                href="https://wa.me/12155550000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold text-sm text-white transition-all duration-200 hover:opacity-90"
                style={{ backgroundColor: "#22C55E" }}
              >
                💬 WhatsApp
              </a>
            </div>
          </div>

          {/* Right — contact details */}
          <div className="reveal reveal-delay-2">
            <h3 className="font-black text-2xl" style={{ color: "#1A2E1A" }}>
              Direct Contact
            </h3>

            {/* Contact details card */}
            <div
              className="mt-6 rounded-3xl p-8 space-y-5"
              style={{ backgroundColor: "#F1F8E9" }}
            >
              {contactItems.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="bg-white rounded-xl p-3 shadow-sm flex-shrink-0 text-xl">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wide" style={{ color: "#9CA3AF" }}>
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="font-semibold hover:underline"
                        style={{ color: "#1A2E1A" }}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      >
                        {item.lines.join("\n")}
                      </a>
                    ) : (
                      <p className="font-semibold" style={{ color: "#1A2E1A" }}>
                        {item.lines.map((line, i) => (
                          <span key={i}>
                            {line}
                            {i < item.lines.length - 1 && <br />}
                          </span>
                        ))}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Business registration card */}
            <div
              className="mt-6 rounded-3xl p-8 text-white"
              style={{ backgroundColor: "#1B5E20" }}
            >
              <p
                className="font-bold text-sm uppercase tracking-widest"
                style={{ color: "#A5D6A7" }}
              >
                Business Registration
              </p>
              <ul className="mt-4 space-y-3 text-sm">
                {bizItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div
                className="border-t mt-4"
                style={{ borderColor: "rgba(255,255,255,0.1)" }}
              />
              <p className="mt-4 text-xs" style={{ color: "#A5D6A7" }}>
                Licensed to export OCC material from the United States
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
