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
      ref.current.style.transform = 'translateY(24px)'
      setTimeout(() => {
        if (!ref.current) return
        ref.current.style.transition = 'opacity 0.8s ease, transform 0.8s ease'
        ref.current.style.opacity = '1'
        ref.current.style.transform = 'translateY(0)'
      }, 120 + i * 140)
    })
  }, [])

  return (
    <section className="relative bg-brand-black min-h-screen flex items-center overflow-hidden">
      {/* Gradient background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 70% at 15% 50%, rgba(30,155,215,0.13) 0%, transparent 65%), radial-gradient(ellipse 50% 50% at 85% 20%, rgba(30,155,215,0.06) 0%, transparent 60%)',
        }}
        aria-hidden="true"
      />

      {/* Subtle grid lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
          backgroundSize: '72px 72px',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-40 w-full">
        {/* Eyebrow */}
        <p className="inline-flex items-center gap-2 text-brand-blue text-sm font-medium tracking-widest uppercase mb-8">
          <span className="block w-6 h-px bg-brand-blue" />
          Brand Presentation Consultancy
        </p>

        <h1
          ref={headlineRef}
          className="font-display font-bold text-white leading-[1.02] tracking-tight mb-8"
          style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)' }}
        >
          Your brand presentation<br />partners.
        </h1>

        <p
          ref={subRef}
          className="text-white/55 text-xl sm:text-2xl leading-relaxed max-w-2xl mb-12"
        >
          We help growing companies show up professionally — through merchandise, environments, and sales materials that actually represent who you are.
        </p>

        <div ref={ctaRef} className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
          <a
            href="#quote"
            className="inline-flex items-center gap-2 bg-brand-blue hover:bg-[#1889c0] text-white font-semibold text-base px-9 py-5 rounded-sm transition-all duration-200 hover:shadow-[0_0_36px_rgba(30,155,215,0.4)]"
          >
            Get Started
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <span className="text-white/35 text-sm">We respond within 24 hours.</span>
        </div>
      </div>
    </section>
  )
}
