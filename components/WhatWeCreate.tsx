'use client'

import { useEffect, useRef } from 'react'

const services = [
  {
    num: '01',
    name: 'Branded\nMerchandise',
    desc: 'Apparel, drinkware, bags, notebooks, and promotional products — curated and branded to represent your company well.',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M20.38 3.46L16 2a4 4 0 01-8 0L3.62 3.46a2 2 0 00-1.34 2.23l.58 3.57a1 1 0 00.99.84H7v10a2 2 0 002 2h6a2 2 0 002-2V10h3.15a1 1 0 00.99-.84l.58-3.57a2 2 0 00-1.34-2.23z"/>
      </svg>
    ),
  },
  {
    num: '02',
    name: 'Displays &\nSignage',
    desc: 'Portable displays, signage systems, and branded environments for offices, events, and anywhere your brand needs to show up.',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <rect x="2" y="3" width="4" height="18"/>
        <rect x="10" y="7" width="4" height="14"/>
        <rect x="18" y="11" width="4" height="10"/>
      </svg>
    ),
  },
  {
    num: '03',
    name: 'Branded\nKits',
    desc: 'Curated bundles for onboarding, gifting, and company moments — designed to land well and feel intentional every time.',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/>
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
    <section id="services" ref={sectionRef} className="bg-white py-16 px-5 md:py-[120px] md:px-20">
      {/* Header */}
      <div className="fade-up mb-10 md:mb-[72px]">
        <div className="md:grid md:gap-20 md:items-end" style={{ gridTemplateColumns: '1fr 1fr' }}>
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-6 h-px bg-brand-blue flex-shrink-0" />
              <span className="text-[11px] font-semibold tracking-[0.16em] uppercase text-brand-blue">What We Do</span>
            </div>
            <h2
              className="font-serif font-light text-brand-black"
              style={{ fontSize: 'clamp(36px, 5vw, 68px)', lineHeight: 1.05, letterSpacing: '-0.01em' }}
            >
              Everything your<br />brand <em className="not-italic text-brand-blue">needs</em> to<br />show up.
            </h2>
          </div>
          <p className="text-brand-mid mt-5 md:mt-0" style={{ fontSize: '18px', fontWeight: 300, lineHeight: 1.75, maxWidth: '480px' }}>
            From merchandise your team actually uses to displays that make a statement — we handle sourcing, production, and delivery so you don't have to manage it.
          </p>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {services.map((s, i) => (
          <a
            key={s.num}
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
                {s.icon}
              </div>
              <span className="font-serif text-[13px] font-normal tracking-[0.1em] text-brand-light transition-colors duration-300 group-hover:text-brand-blue">{s.num}</span>
            </div>

            <div className="font-serif text-[30px] font-medium text-brand-black leading-[1.15] whitespace-pre-line transition-colors duration-300 group-hover:text-brand-blue">
              {s.name}
            </div>

            <p className="text-brand-mid flex-1" style={{ fontSize: '16px', fontWeight: 300, lineHeight: 1.75 }}>
              {s.desc}
            </p>

            <div className="flex items-center gap-2 text-[12px] font-semibold tracking-[0.08em] uppercase text-brand-blue transition-all duration-300 translate-y-1 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
              Get a quote
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">
                <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
