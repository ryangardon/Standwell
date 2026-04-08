'use client'

import { useEffect, useRef } from 'react'

export default function Hero() {
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const subRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const elements = [headlineRef, subRef, ctaRef]
    elements.forEach((ref, i) => {
      if (!ref.current) return
      ref.current.style.opacity = '0'
      ref.current.style.transform = 'translateY(20px)'
      setTimeout(() => {
        if (!ref.current) return
        ref.current.style.transition = 'opacity 0.7s ease, transform 0.7s ease'
        ref.current.style.opacity = '1'
        ref.current.style.transform = 'translateY(0)'
      }, 100 + i * 130)
    })
  }, [])

  return (
    <section className="relative bg-brand-black min-h-[80vh] flex items-center overflow-hidden">
      {/* Subtle gradient — blue tint top-left, fades out */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 20% 40%, rgba(30,155,215,0.10) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-36 w-full">
        <p className="inline-flex items-center gap-2 text-brand-blue text-sm font-medium tracking-widest uppercase mb-7">
          <span className="block w-5 h-px bg-brand-blue" />
          Portable Event Displays
        </p>

        <h1
          ref={headlineRef}
          className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.04] tracking-tight max-w-3xl mb-7"
        >
          Portable event displays.{' '}
          <span className="text-brand-blue">Shipped fast.</span>
        </h1>

        <p
          ref={subRef}
          className="text-white/55 text-xl leading-relaxed max-w-xl mb-12"
        >
          Fabric backwalls, backlit displays, banner stands, and complete booth kits — without the exhibit house markup or 6-week lead times.
        </p>

        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4">
          <a
            href="#quote"
            className="inline-flex items-center justify-center gap-2 bg-brand-blue hover:bg-[#1889c0] text-white font-semibold text-base px-8 py-4 rounded-sm transition-all duration-200 hover:shadow-[0_0_28px_rgba(30,155,215,0.35)]"
          >
            Get a Quote
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a
            href="#products"
            className="inline-flex items-center justify-center gap-2 text-white/65 hover:text-white font-medium text-base px-8 py-4 border border-white/10 hover:border-white/25 rounded-sm transition-all duration-200"
          >
            Browse Products
          </a>
        </div>
      </div>
    </section>
  )
}
