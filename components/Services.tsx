'use client'

import { useEffect, useRef } from 'react'

const services = [
  {
    id: 'merchandise',
    title: 'Branded Merchandise',
    description: 'Apparel, welcome kits, swag programs.',
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
        <path d="M13 5 L5 10 L8 14 L11 12 L11 31 L25 31 L25 12 L28 14 L31 10 L23 5 C22 7.5 20 9 18 9 C16 9 14 7.5 13 5Z" stroke="#1E9BD7" strokeWidth="1.75" strokeLinejoin="round" fill="none"/>
        <path d="M13 5 C14 7.5 16 9 18 9 C20 9 22 7.5 23 5" stroke="#1E9BD7" strokeWidth="1.75" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 'environments',
    title: 'Branded Environments',
    description: 'Office signage, displays, event setups.',
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
        <rect x="4" y="14" width="28" height="18" rx="2" stroke="#1E9BD7" strokeWidth="1.75"/>
        <path d="M4 20h28" stroke="#1E9BD7" strokeWidth="1.25" strokeOpacity="0.4"/>
        <path d="M18 4 L32 14 L4 14 Z" stroke="#1E9BD7" strokeWidth="1.75" strokeLinejoin="round" fill="none"/>
        <rect x="14" y="24" width="8" height="8" rx="1" stroke="#1E9BD7" strokeWidth="1.25" strokeOpacity="0.6"/>
      </svg>
    ),
  },
  {
    id: 'materials',
    title: 'Sales Materials',
    description: 'Kits, folders, leave-behinds.',
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
        <path d="M6 8 L6 30 L30 30 L30 13 L23 8 Z" stroke="#1E9BD7" strokeWidth="1.75" strokeLinejoin="round" fill="none"/>
        <path d="M23 8 L23 13 L30 13" stroke="#1E9BD7" strokeWidth="1.75" strokeLinejoin="round"/>
        <line x1="11" y1="17" x2="25" y2="17" stroke="#1E9BD7" strokeWidth="1.25" strokeLinecap="round" strokeOpacity="0.5"/>
        <line x1="11" y1="21" x2="25" y2="21" stroke="#1E9BD7" strokeWidth="1.25" strokeLinecap="round" strokeOpacity="0.5"/>
        <line x1="11" y1="25" x2="19" y2="25" stroke="#1E9BD7" strokeWidth="1.25" strokeLinecap="round" strokeOpacity="0.5"/>
      </svg>
    ),
  },
]

export default function Services() {
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
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" ref={sectionRef} className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {services.map((service, i) => (
            <article
              key={service.id}
              className={`reveal reveal-delay-${i + 1} bg-brand-gray border border-zinc-100 rounded-sm p-7`}
            >
              <div className="mb-5">{service.icon}</div>
              <h3 className="font-display text-lg font-bold text-brand-black mb-2 tracking-tight">
                {service.title}
              </h3>
              <p className="text-brand-mid text-sm leading-relaxed">
                {service.description}
              </p>
            </article>
          ))}
        </div>

        <div className="reveal text-center">
          <a
            href="#quote"
            className="inline-flex items-center gap-2 bg-brand-blue hover:bg-[#1889c0] text-white font-semibold text-base px-8 py-4 rounded-sm transition-all duration-200 hover:shadow-[0_0_28px_rgba(30,155,215,0.25)]"
          >
            Get Started
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
