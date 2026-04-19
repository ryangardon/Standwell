'use client'

import { useEffect, useRef } from 'react'

const stats = [
  { num: '5–7', label: 'Day standard shipping' },
  { num: '24h', label: 'Response on every quote' },
  { num: '0', label: 'Minimums or contracts' },
  { num: '100%', label: 'Satisfaction guaranteed' },
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
    <div ref={sectionRef} className="bg-white border-t border-brand-border px-5 py-12 md:px-20 md:py-20">
      <p className="fade-up text-[11px] font-semibold tracking-[0.18em] uppercase text-brand-light text-center mb-8 md:mb-12">
        What you can expect
      </p>
      <div className="fade-up grid grid-cols-2 md:grid-cols-4 gap-px bg-brand-border border border-brand-border">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="group relative bg-white px-4 py-10 md:px-8 md:py-12 text-center overflow-hidden transition-all duration-300 hover:bg-brand-blue cursor-default"
          >
            {/* Hover bg ripple */}
            <div className="absolute inset-0 bg-brand-blue scale-0 group-hover:scale-100 transition-transform duration-500 origin-center rounded-full opacity-0 group-hover:opacity-100 group-hover:rounded-none" />

            <div
              className="relative z-10 font-serif text-brand-blue mb-3 transition-colors duration-300 group-hover:text-white"
              style={{ fontSize: 'clamp(32px, 4vw, 56px)', fontWeight: 300, lineHeight: 1 }}
            >
              {stat.num}
            </div>
            <div className="relative z-10 text-brand-mid transition-colors duration-300 group-hover:text-white/80" style={{ fontSize: '14px', fontWeight: 300, lineHeight: 1.5 }}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
