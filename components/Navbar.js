'use client'

import { useState } from 'react'
import Link from 'next/link'

const CALENDLY_URL = 'https://calendly.com/your-link'

const navLinks = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Industries', href: '/industries' },
  { label: 'Insights', href: '/insights' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex flex-col leading-tight">
          <span className="text-xl font-bold tracking-tight" style={{ color: '#0B493A' }}>VIORA</span>
          <span className="text-xs tracking-[0.2em] text-gray-400 uppercase">Global</span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm text-gray-600 hover:text-[#0B493A] transition-colors duration-200 tracking-wide">
              {link.label}
            </Link>
          ))}
        </div>
        <div className="hidden md:block">
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 text-sm font-medium text-white rounded-full transition-opacity duration-200 hover:opacity-90" style={{ backgroundColor: '#0B493A' }}>
            Book a Strategy Session
          </a>
        </div>
        <button className="md:hidden flex flex-col gap-1.5 p-2" onClick={() => setMenuOpen(!menuOpen)}>
          <span className={"block w-6 h-0.5 bg-gray-700 transition-all duration-300 " + (menuOpen ? "rotate-45 translate-y-2" : "")} />
          <span className={"block w-6 h-0.5 bg-gray-700 transition-all duration-300 " + (menuOpen ? "opacity-0" : "")} />
          <span className={"block w-6 h-0.5 bg-gray-700 transition-all duration-300 " + (menuOpen ? "-rotate-45 -translate-y-2" : "")} />
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm text-gray-600 hover:text-[#0B493A] transition-colors" onClick={() => setMenuOpen(false)}>
              {link.label}
            </Link>
          ))}
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="mt-2 px-5 py-2.5 text-sm font-medium text-white rounded-full text-center" style={{ backgroundColor: '#0B493A' }}>
            Book a Strategy Session
          </a>
        </div>
      )}
    </nav>
  )
}