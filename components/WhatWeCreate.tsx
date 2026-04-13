'use client'

import { useEffect, useRef } from 'react'

const cards = [
  {
    id: 'merchandise',
    title: 'Branded Merchandise',
    description:
      'Apparel, welcome kits, swag programs, and promotional products your team and customers actually want to keep.',
    icon: (
      <svg width="52" height="52" viewBox="0 0 52 52" fill="none" aria-hidden="true">
        <path d="M19 9 L8 15 L12 21 L16 18.5 L16 44 L36 44 L36 18.5 L40 21 L44 15 L33 9 C31.5 13 29 15 26 15 C23 15 20.5 13 19 9Z" stroke="#1E9BD7" strokeWidth="1.75" strokeLinejoin="round"/>
        <path d="M19 9 C20.5 13 23 15 26 15 C29 15 31.5 13 33 9" stroke="#1E9BD7" strokeWidth="1.75" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 'environments',
    title: 'Branded Environments',
    description:
      'Office signage, display systems, showroom setups, and event presence that makes your space feel like your brand.',
    icon: (
      <svg width="52" height="52" viewBox="0 0 52 52" fill="none" aria-hidden="true">
        <rect x="6" y="20" width="40" height="26" rx="2" stroke="#1E9BD7" strokeWidth="1.75"/>
        <path d="M6 29h40" stroke="#1E9BD7" strokeWidth="1.25" strokeOpacity="0.45"/>
        <path d="M26 6 L46 20 L6 20 Z" stroke="#1E9BD7" strokeWidth="1.75" strokeLinejoin="round"/>
        <rect x="20" y="34" width="12" height="12" rx="1" stroke="#1E9BD7" strokeWidth="1.5" strokeOpacity="0.7"/>
      </svg>
    ),
  },
  {
    id: 'materials',
    title: 'Sales Materials',
    description:
      'Presentation folders, sales kits, leave-behinds, and sample packaging that helps your team close deals.',
    icon: (
      <svg width="52" height="52" viewBox="0 0 52 52" fill="none" aria-hidden="true">
        <path d="M9 11 L9 43 L43 43 L43 19 L33 11 Z" stroke="#1E9BD7" strokeWidth="1.75" strokeLinejoin="round"/>
        <path d="M33 11 L33 19 L43 19" stroke="#1E9BD7" strokeWidth="1.75" strokeLinejoin="round"/>
        <line x1="16" y1="25" x2="36" y2="25" stroke="#1E9BD7" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.5"/>
        <line x1="16" y1="31" x2="36" y2="31" stroke="#1E9BD7" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.5"/>
        <line x1="16" y1="37" x2="27" y2="37" stroke="#1E9BD7" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.5"/>
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
            entry.target.querySelectorAll('.reveal').forEach((el) => el.classList.add('visible'))
          }
        })
      },
      { threshold: 0.08 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" ref={sectionRef} className="bg-white py-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <p className="reveal text-brand-blue text-sm font-medium tracking-widest uppercase mb-4">
            What we create
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <h2 className="reveal reveal-delay-1 font-display font-bold text-brand-black leading-tight tracking-tight" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)' }}>
              Brand presence across<br />every touchpoint.
            </h2>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <a
              key={card.id}
              href="#quote"
              className={`reveal reveal-delay-${i + 1} group flex flex-col rounded-sm border border-zinc-100 bg-[#F9FAFB] hover:border-brand-blue/25 hover:shadow-[0_8px_40px_rgba(30,155,215,0.09)] transition-all duration-300 p-8`}
            >
              <div className="mb-7 w-16 h-16 rounded-sm bg-white border border-zinc-100 flex items-center justify-center group-hover:border-brand-blue/20 transition-colors duration-300">
                {card.icon}
              </div>
              <h3 className="font-display text-xl font-bold text-brand-black mb-3 tracking-tight">
                {card.title}
              </h3>
              <p className="text-brand-mid text-sm leading-relaxed flex-1">
                {card.description}
              </p>
              <div className="mt-7 flex items-center gap-1.5 text-brand-blue text-sm font-medium">
                Get started
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">
                  <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
