'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <>
      <nav className={`
        hidden md:block fixed top-0 left-0 right-0 z-50
        transition-all duration-500 ease-in-out
        ${scrolled
          ? 'bg-[#FBF8F2]/80 backdrop-blur-2xl border-b border-[#274C56]/10 shadow-sm'
          : 'bg-transparent backdrop-blur-none border-b border-transparent shadow-none'
        }
      `}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex items-center justify-between h-28">

            {/* LOGO */}
            <Link href="/" className="flex-shrink-0 flex items-center">
              {!scrolled ? (
                <Image
                  src="/NewLogo2.png"
                  alt="ScraPack Solutions LLC"
                  width={240}
                  height={80}
                  className="object-contain object-left w-auto h-16 md:h-20"
                  preload
                />
              ) : (
                <Image
                  src="/NewLogo2.png"
                  alt="ScraPack Solutions LLC"
                  width={200}
                  height={68}
                  className="object-contain object-left w-auto h-14 md:h-16"
                  preload
                />
              )}
            </Link>

            {/* DESKTOP NAV LINKS */}
            <div className="hidden md:flex items-center gap-8">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`
                    relative text-sm font-semibold py-1
                    transition-colors duration-200
                    ${pathname === link.href
                      ? 'text-[#217344]'
                      : 'text-[#16281F]/80 hover:text-[#217344]'
                    }
                  `}
                >
                  {link.label}
                  <span
                    className={`
                      absolute -bottom-0.5 left-0 h-0.5 rounded-full bg-[#E8BA74]
                      transition-all duration-300
                      ${pathname === link.href ? 'w-full' : 'w-0'}
                    `}
                  />
                </Link>
              ))}
            </div>

            {/* CTA BUTTON */}
            <div className="hidden md:flex flex-shrink-0 items-center">
              <Link
                href="/contact#quote-form"
                className="btn btn-gold btn-sm"
              >
                Get a Quote
              </Link>
            </div>

            {/* MOBILE HAMBURGER */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden flex flex-col gap-1.5 p-2"
              aria-label="Toggle menu"
            >
              <span className={`block w-6 h-0.5 bg-[#16281F] transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-6 h-0.5 bg-[#16281F] transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-6 h-0.5 bg-[#16281F] transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>

          </div>
        </div>

        {/* MOBILE DROPDOWN MENU */}
        <div className={`
          md:hidden overflow-hidden
          transition-all duration-300 ease-in-out
          bg-white/95 backdrop-blur-xl
          border-t border-gray-100
          ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
        `}>
          <div className="px-6 py-4 space-y-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`
                  block py-3 px-4 rounded-xl
                  text-sm font-semibold
                  transition-colors duration-200
                  ${pathname === link.href
                    ? 'bg-[#E6F2EA] text-[#217344]'
                    : 'text-[#16281F] hover:bg-[#FBF8F2]'
                  }
                `}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 pb-2">
              <Link
                href="/contact#quote-form"
                onClick={() => setMenuOpen(false)}
                className="btn btn-gold btn-sm w-full"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>

      </nav>
    </>
  )
}
