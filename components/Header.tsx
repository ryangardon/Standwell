'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-brand-black/95 backdrop-blur-md border-b border-white/10 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo — icon (inverted to white) + wordmark in CSS */}
        <a href="#" className="flex items-center gap-2.5" aria-label="Standwell home">
          <Image
            src="/logo-icon.png"
            alt=""
            width={28}
            height={28}
            className="w-7 h-7 object-contain"
            style={{ filter: 'brightness(0) invert(1)' }}
            priority
          />
          <span className="font-display text-xl font-bold tracking-tight leading-none">
            <span className="text-brand-blue">Stand</span>
            <span className="text-white">Well</span>
          </span>
        </a>

        {/* CTA */}
        <a
          href="#quote"
          className="inline-flex items-center gap-2 bg-brand-blue hover:bg-[#1889c0] text-white text-sm font-medium px-5 py-2.5 rounded-sm transition-colors duration-200"
        >
          Get a Quote
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M2 7h10M8 3l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </header>
  )
}
