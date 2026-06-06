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
          ? 'bg-white/15 backdrop-blur-2xl border-b border-white/20 shadow-lg shadow-black/5'
          : 'bg-transparent backdrop-blur-none border-b border-transparent shadow-none'
        }
      `}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex items-center justify-between h-24">

            {/* LOGO */}
            <Link href="/" className="flex-shrink-0 flex items-center">
              <Image
                src="/upgrade-logo.png"
                alt="ScraPack Solutions LLC"
                width={220}
                height={80}
                className="object-contain object-left w-auto h-16"
                priority
              />
            </Link>

            {/* DESKTOP NAV LINKS */}
            <div className="hidden md:flex items-center gap-8">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`
                    text-sm font-semibold
                    transition-colors duration-200
                    ${pathname === link.href
                      ? 'text-[#E8820C]'
                      : 'text-[#1A2E1A] hover:text-[#E8820C]'
                    }
                  `}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA BUTTON */}
            <div className="hidden md:flex flex-shrink-0 items-center">
              <Link
                href="/contact"
                className="bg-[#E8820C] hover:bg-[#C96B00] text-white font-bold px-6 py-3 rounded-full text-sm transition-all duration-200 shadow-md shadow-[#E8820C]/20 hover:shadow-lg hover:shadow-[#E8820C]/30 whitespace-nowrap"
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
              <span className={`block w-6 h-0.5 bg-[#1A2E1A] transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-6 h-0.5 bg-[#1A2E1A] transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-6 h-0.5 bg-[#1A2E1A] transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
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
                    ? 'bg-[#E8820C]/10 text-[#E8820C]'
                    : 'text-[#1A2E1A] hover:bg-gray-50'
                  }
                `}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 pb-2">
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="block w-full text-center bg-[#E8820C] text-white font-bold py-3 rounded-full text-sm"
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
