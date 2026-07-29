"use client";

import { useRef, useEffect } from "react";
import { MailIcon, MapPinIcon } from "@/components/icons";

export default function CTASection() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const els = ref.current?.querySelectorAll(".reveal");
    if (!els?.length) return;
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        }),
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="py-32 px-6 lg:px-12"
      style={{
        background: "linear-gradient(135deg, #FDF8F0, #F2F9F5)",
      }}
    >
      <div className="max-w-3xl mx-auto text-center">
        <p className="eyebrow mb-4 reveal">Let&apos;s Trade</p>

        <h2
          className="text-3xl sm:text-5xl lg:text-6xl font-black leading-tight mb-6 reveal reveal-delay-1"
          style={{ color: "#16281F" }}
        >
          Ready to Trade?
        </h2>

        <p
          className="text-xl leading-relaxed mb-10 reveal reveal-delay-2"
          style={{ color: "#46554E" }}
        >
          Whether you have OCC or scrap tires to sell, or need export-grade
          material to buy — ScraPack is your partner from the U.S. to your port.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mb-12 reveal reveal-delay-3">
          <a href="/contact" className="btn btn-gold btn-lg w-full sm:w-auto">
            Request a Quote
          </a>
          <a
            href="https://wa.me/12019142222"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-green btn-lg w-full sm:w-auto"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp Us
          </a>
        </div>

        {/* Contact details */}
        <div
          className="flex flex-wrap justify-center gap-6 sm:gap-12 text-sm reveal reveal-delay-4"
          style={{ color: "#46554E" }}
        >
          <span className="flex items-center gap-2">
            <span style={{ color: "#8A6224" }}>
              <MapPinIcon size={16} />
            </span>
            9830 Walley Ave, Philadelphia, PA 19115
          </span>
          <a
            href="mailto:info@scrapacksolutions.com"
            className="flex items-center gap-2 transition-colors hover:text-[#217344]"
          >
            <span style={{ color: "#8A6224" }}>
              <MailIcon size={16} />
            </span>
            info@scrapacksolutions.com
          </a>
        </div>
      </div>
    </section>
  );
}
