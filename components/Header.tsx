'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 flex items-center transition-all duration-300 ${
        scrolled ? 'h-[72px] md:h-[88px] shadow-md border-b border-brand-border' : 'h-[80px] md:h-[108px] border-b border-brand-border'
      }`}
      style={{ background: 'rgba(255,255,255,0.97)', backdropFilter: 'blur(16px)' }}
    >
      <div className="w-full px-5 md:px-12 flex items-center justify-between">
        {/* Logo — icon + full wordmark, large */}
        <a href="#" className="flex items-center group" aria-label="Standwell home">
          <Image
            src="/logo.png"
            alt="StandWell"
            width={200}
            height={200}
            className={`w-auto object-contain transition-all duration-300 ${scrolled ? 'h-14 md:h-20' : 'h-16 md:h-24'}`}
            priority
          />
        </a>

        {/* Nav */}
        <ul className="hidden md:flex items-center gap-10 list-none m-0 p-0">
          {[
            { label: 'What We Do', href: '#services' },
            { label: 'How It Works', href: '#process' },
            { label: 'Why Standwell', href: '#why' },
          ].map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="relative text-brand-black text-[15px] font-medium tracking-wide hover:text-brand-blue transition-colors duration-200 no-underline group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-brand-blue transition-all duration-300 group-hover:w-full rounded-full" />
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="bg-brand-blue hover:bg-brand-blue-mid text-white text-sm font-semibold tracking-[0.06em] uppercase px-7 py-3.5 transition-all duration-200 no-underline inline-flex items-center gap-2.5 group hover:-translate-y-px hover:shadow-[0_6px_20px_rgba(30,155,215,0.35)]"
            >
              Get a Quote
              <svg width="13" height="13" viewBox="0 0 12 12" fill="none" className="transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true">
                <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
