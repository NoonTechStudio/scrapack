"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="hidden md:block fixed top-0 left-0 right-0 z-50">
      <div className="transition-all duration-500 ease-in-out">

        {/* ── TRANSPARENT STATE (top of page) ── */}
        {!scrolled && (
          <div className="bg-black/25 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
              <div className="flex items-center justify-between py-4">

                {/* Logo */}
                <div className="flex-shrink-0 flex items-center">
                  <Link href="/">
                    <Image
                      src="/Upgrade.png"
                      alt="ScraPack Solutions LLC"
                      width={240}
                      height={90}
                      className="object-contain object-left"
                      priority
                    />
                  </Link>
                </div>

                {/* Nav links */}
                <div className="hidden md:flex items-center gap-8">
                  {NAV_LINKS.map(({ label, href }) => (
                    <Link
                      key={label}
                      href={href}
                      className="text-white hover:text-[#E8820C] transition-colors duration-200 font-medium text-sm tracking-wide"
                    >
                      {label}
                    </Link>
                  ))}
                </div>

                {/* CTA + hamburger */}
                <div className="flex-shrink-0 flex items-center gap-3">
                  <Link
                    href="/contact"
                    className="hidden md:inline-flex items-center bg-[#E8820C] hover:bg-[#C96B00] text-white font-semibold px-6 py-2.5 rounded-full transition-all duration-200 whitespace-nowrap text-sm"
                    style={{ boxShadow: "0 4px 16px rgba(232,130,12,0.30)" }}
                  >
                    Get a Quote
                  </Link>

                  <button
                    onClick={() => setMobileOpen((o) => !o)}
                    aria-label="Toggle menu"
                    className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5"
                  >
                    <span
                      className={`block w-5 h-0.5 bg-white transition-all duration-300 origin-center ${mobileOpen ? "rotate-45 translate-y-2" : ""}`}
                    />
                    <span
                      className={`block w-5 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "opacity-0 scale-x-0" : ""}`}
                    />
                    <span
                      className={`block w-5 h-0.5 bg-white transition-all duration-300 origin-center ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`}
                    />
                  </button>
                </div>

              </div>
            </div>
          </div>
        )}

        {/* ── SCROLLED PILL STATE ── */}
        {scrolled && (
          <div
            className="flex justify-center px-4 pt-3"
            style={{ willChange: "transform" }}
          >
            <div
              className="flex items-center justify-between gap-8 bg-gray-900/95 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 w-auto shadow-xl"
              style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.30)" }}
            >

              {/* Logo — smaller in pill */}
              <div className="flex-shrink-0 flex items-center">
                <Link href="/">
                  <Image
                    src="/Upgrade.png"
                    alt="ScraPack Solutions LLC"
                    width={200}
                    height={75}
                    className="object-contain object-left"
                    priority
                  />
                </Link>
              </div>

              {/* Nav links */}
              <div className="hidden md:flex items-center gap-6">
                {NAV_LINKS.map(({ label, href }) => (
                  <Link
                    key={label}
                    href={href}
                    className="text-white/90 hover:text-[#E8820C] transition-colors duration-200 font-medium text-sm tracking-wide whitespace-nowrap"
                  >
                    {label}
                  </Link>
                ))}
              </div>

              {/* CTA + hamburger */}
              <div className="flex-shrink-0 flex items-center gap-3">
                <Link
                  href="/contact"
                  className="hidden md:inline-flex items-center bg-[#E8820C] hover:bg-[#C96B00] text-white font-semibold px-5 py-2 rounded-full transition-all duration-200 whitespace-nowrap text-sm"
                >
                  Get a Quote
                </Link>

                <button
                  onClick={() => setMobileOpen((o) => !o)}
                  aria-label="Toggle menu"
                  className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5"
                >
                  <span
                    className={`block w-5 h-0.5 bg-white transition-all duration-300 origin-center ${mobileOpen ? "rotate-45 translate-y-2" : ""}`}
                  />
                  <span
                    className={`block w-5 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "opacity-0 scale-x-0" : ""}`}
                  />
                  <span
                    className={`block w-5 h-0.5 bg-white transition-all duration-300 origin-center ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`}
                  />
                </button>
              </div>

            </div>
          </div>
        )}

      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div
          className="mx-2 mt-2 rounded-2xl px-6 py-4 border backdrop-blur-xl"
          style={{
            backgroundColor: "rgba(255,255,255,0.96)",
            borderColor: "rgba(0,0,0,0.08)",
          }}
        >
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 font-medium border-b border-gray-100 last:border-0 transition-colors hover:text-[#E8820C]"
              style={{ color: "#1A2E1A" }}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="mt-4 block text-center px-5 py-3 rounded-full font-semibold text-sm text-white"
            style={{ backgroundColor: "#E8820C" }}
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </nav>
  );
}
