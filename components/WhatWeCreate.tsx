'use client'

import { useEffect, useRef } from 'react'

const products = [
  {
    num: '01',
    name: 'Retractable\nBanner Stands',
    price: 'Starting at $150',
    desc: 'Pull it out, snap it up, done. High-impact signage for booths, lobbies, and everywhere in between. Built to last through dozens of events.',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <rect x="10" y="2" width="4" height="16" rx="1"/>
        <path d="M7 18h10M12 18v4"/>
        <path d="M7 2h10v12H7z"/>
      </svg>
    ),
  },
  {
    num: '02',
    name: 'Pop-Up\nBackdrops',
    price: 'Starting at $400',
    desc: 'Step-and-repeats, photo ops, and booth back walls. Frame your brand for product launches, recruiting events, or any media moment.',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <rect x="2" y="4" width="20" height="14" rx="1"/>
        <path d="M2 8h20M6 4v14M18 4v14"/>
      </svg>
    ),
  },
  {
    num: '03',
    name: 'Tension Fabric\nDisplays',
    price: 'Starting at $300',
    desc: 'The clean, seamless aesthetic you see at Fortune 500 booths — now accessible for teams without Fortune 500 budgets. Vibrant prints, lightweight frames.',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M4 3h16v18H4z"/>
        <path d="M4 3c4 3 12 3 16 0M4 21c4-3 12-3 16 0"/>
        <path d="M4 12c4 2 12 2 16 0"/>
      </svg>
    ),
  },
  {
    num: '04',
    name: 'Table\nThrows',
    price: 'Starting at $150',
    desc: 'Branded tablecloths for 6ft and 8ft tables. Full-color dye sublimation, machine washable. Turn any folding table into a branded surface in under a minute.',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <rect x="2" y="7" width="20" height="4" rx="1"/>
        <path d="M5 11v6M19 11v6M3 17h18"/>
      </svg>
    ),
  },
  {
    num: '05',
    name: 'Complete\nBooth Kits',
    price: 'Starting at $2,000',
    desc: 'Stop piecing it together. Our booth kits include the backwall, banner stands, table throw, and accessories — coordinated, packed, and ready to go.',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/>
        <path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12"/>
      </svg>
    ),
  },
]

export default function WhatWeCreate() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.fade-up').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 80)
            })
          }
        })
      },
      { threshold: 0.06 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="products" ref={sectionRef} className="bg-white py-16 px-5 md:py-[120px] md:px-20">
      {/* Header */}
      <div className="fade-up mb-10 md:mb-[72px]">
        <div className="md:grid md:gap-20 md:items-end" style={{ gridTemplateColumns: '1fr 1fr' }}>
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-6 h-px bg-brand-blue flex-shrink-0" />
              <span className="text-[11px] font-semibold tracking-[0.16em] uppercase text-brand-blue">What We Create</span>
            </div>
            <h2
              className="font-serif font-light text-brand-black"
              style={{ fontSize: 'clamp(36px, 5vw, 68px)', lineHeight: 1.05, letterSpacing: '-0.01em' }}
            >
              Everything you need<br />to <em className="not-italic text-brand-blue">show up</em> and<br />stand out.
            </h2>
          </div>
          <p className="text-brand-mid mt-5 md:mt-0" style={{ fontSize: '18px', fontWeight: 300, lineHeight: 1.75, maxWidth: '480px' }}>
            Quality portable displays from trusted manufacturers. No exhibit house markup. No confusing configurators. Just the right product, done right.
          </p>
        </div>
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {products.map((p, i) => (
          <a
            key={p.num}
            href="#contact"
            className="fade-up group relative flex flex-col gap-6 bg-brand-gray border border-brand-border no-underline overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(30,155,215,0.15)] hover:border-brand-blue/40"
            style={{ padding: '32px 28px', transitionDelay: `${i * 60}ms` }}
          >
            {/* Blue corner accent on hover */}
            <div className="absolute top-0 right-0 w-20 h-20 transition-all duration-300 opacity-0 group-hover:opacity-100"
              style={{ background: 'linear-gradient(225deg, rgba(30,155,215,0.12) 0%, transparent 70%)' }}
              aria-hidden="true"
            />

            <div className="flex items-center justify-between">
              <div className="w-12 h-12 border border-brand-border bg-white flex items-center justify-center text-brand-mid transition-all duration-300 group-hover:border-brand-blue group-hover:bg-brand-blue group-hover:text-white group-hover:shadow-[0_4px_16px_rgba(30,155,215,0.3)]">
                {p.icon}
              </div>
              <span className="font-serif text-[13px] font-normal tracking-[0.1em] text-brand-light transition-colors duration-300 group-hover:text-brand-blue">{p.num}</span>
            </div>

            <div className="font-serif text-[28px] font-medium text-brand-black leading-[1.15] whitespace-pre-line transition-colors duration-300 group-hover:text-brand-blue">
              {p.name}
            </div>

            <p className="text-brand-mid flex-1" style={{ fontSize: '15px', fontWeight: 300, lineHeight: 1.75 }}>
              {p.desc}
            </p>

            <div className="flex items-center justify-between">
              <span className="text-[13px] font-semibold text-brand-blue">{p.price}</span>
              <div className="flex items-center gap-2 text-[12px] font-semibold tracking-[0.08em] uppercase text-brand-blue transition-all duration-300 translate-x-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-0">
                Get a quote
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">
                  <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </a>
        ))}

        {/* CTA card */}
        <div className="fade-up sm:col-span-2 lg:col-span-3 border border-brand-border bg-brand-gray p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6"
          style={{ transitionDelay: `${products.length * 60}ms` }}>
          <div>
            <p className="font-serif text-[22px] font-medium text-brand-black mb-2">Not sure what you need?</p>
            <p className="text-brand-mid" style={{ fontSize: '15px', fontWeight: 300 }}>Tell us about your event and we'll recommend the right setup — no charge, no pressure.</p>
          </div>
          <a
            href="#contact"
            className="flex-shrink-0 inline-flex items-center gap-3 bg-brand-blue text-white text-[13px] font-semibold tracking-[0.08em] uppercase px-8 py-4 transition-all duration-300 hover:bg-brand-blue-mid hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(30,155,215,0.35)]"
          >
            Get a Recommendation
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
