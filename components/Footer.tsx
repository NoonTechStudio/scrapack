import Link from "next/link";
import Image from "next/image";
import { MailIcon, MapPinIcon } from "@/components/icons";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

const PRODUCT_LINKS = [
  { label: "OCC Grade 11", href: "/services" },
  { label: "OCC Grade 12", href: "/services" },
  { label: "Baled Scrap Tires", href: "/#scrap-tires" },
  { label: "Export Services", href: "/services" },
  { label: "Request a Quote", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden" style={{ backgroundColor: "#10252B" }}>
      {/* Soft brand glow so the deep slate doesn't read flat */}
      <div
        className="pointer-events-none absolute -top-40 -left-32 w-[520px] h-[520px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(33,115,68,0.28) 0%, transparent 68%)" }}
      />
      <div
        className="pointer-events-none absolute -bottom-32 right-0 w-[420px] h-[420px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(232,186,116,0.13) 0%, transparent 70%)" }}
      />

      {/* Main columns */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <div className="inline-block rounded-2xl bg-white/95 px-4 py-3 mb-5 shadow-lg">
              <Image
                src="/NewLogo2.png"
                alt="ScraPack Solutions LLC"
                width={220}
                height={76}
                className="object-contain object-left w-auto h-12"
              />
            </div>
            <p className="text-sm leading-relaxed mb-3 text-white/70">
              From U.S. Recovery to Global Production
            </p>
            <p className="text-sm text-white/60 leading-relaxed">
              9830 Walley Ave,
              <br />
              Philadelphia, PA 19115
            </p>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-bold mb-5 text-xs uppercase tracking-[0.18em]">
              Company
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-white/65 transition-colors duration-200 hover:text-[#E8BA74]"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-bold mb-5 text-xs uppercase tracking-[0.18em]">
              Products
            </h4>
            <ul className="space-y-3">
              {PRODUCT_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-white/65 transition-colors duration-200 hover:text-[#E8BA74]"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-5 text-xs uppercase tracking-[0.18em]">
              Get in Touch
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:info@scrapacksolutions.com"
                  className="group text-sm text-white/65 transition-colors duration-200 hover:text-[#E8BA74] flex items-start gap-2.5"
                >
                  <span className="text-[#E8BA74] shrink-0 mt-0.5">
                    <MailIcon size={16} />
                  </span>
                  <span className="break-all">info@scrapacksolutions.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/12019142222"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/65 transition-colors duration-200 hover:text-[#E8BA74] flex items-center gap-2.5"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="shrink-0 text-[#E8BA74]"
                    aria-hidden="true"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp Us
                </a>
              </li>
              <li className="text-sm text-white/65 flex items-center gap-2.5">
                <span className="text-[#E8BA74] shrink-0">
                  <MapPinIcon size={16} />
                </span>
                Philadelphia, PA
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10" />
      </div>

      {/* Bottom bar */}
      <div className="relative" style={{ backgroundColor: "#175434" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm">
          <p className="text-white/80">© 2025 ScraPack Solutions LLC. All rights reserved.</p>
          <p className="font-semibold" style={{ color: "#E8BA74" }}>Crafted by Meridian Grid</p>
        </div>
      </div>
    </footer>
  );
}
