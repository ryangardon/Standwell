'use client'

import { useEffect, useRef } from 'react'

const stats = [
  { num: '24h', label: 'Response on every inquiry' },
  { num: '2–4wk', label: 'Typical delivery from order' },
  { num: '1', label: 'Point of contact for everything' },
  { num: '0', label: 'Commitment to inquire' },
]

export default function TrustSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.fade-up').forEach((el) => el.classList.add('visible'))
          }
        })
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={sectionRef} className="bg-white border-t border-brand-border px-20 py-20">
      <p className="fade-up text-[11px] font-semibold tracking-[0.18em] uppercase text-brand-light text-center mb-12">
        What you can expect
      </p>
      <div className="fade-up grid grid-cols-4 gap-px bg-brand-border border border-brand-border">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className="group relative bg-white px-8 py-12 text-center overflow-hidden transition-all duration-300 hover:bg-brand-blue cursor-default"
          >
            {/* Hover bg ripple */}
            <div className="absolute inset-0 bg-brand-blue scale-0 group-hover:scale-100 transition-transform duration-500 origin-center rounded-full opacity-0 group-hover:opacity-100 group-hover:rounded-none" />

            <div
              className="relative z-10 font-serif text-brand-blue mb-3 transition-colors duration-300 group-hover:text-white"
              style={{ fontSize: '56px', fontWeight: 300, lineHeight: 1 }}
            >
              {stat.num}
            </div>
            <div className="relative z-10 text-brand-mid transition-colors duration-300 group-hover:text-white/80" style={{ fontSize: '15px', fontWeight: 300, lineHeight: 1.5 }}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
