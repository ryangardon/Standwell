'use client'

import { useEffect, useRef } from 'react'

const differentiators = [
  {
    title: 'Curated, not overwhelming',
    body: "We recommend what you need. No 500,000-item catalog to wade through — just the right products for your goals and budget.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z" stroke="#1E9BD7" strokeWidth="1.5" strokeLinejoin="round" fill="none"/>
      </svg>
    ),
  },
  {
    title: 'One partner, every touchpoint',
    body: "Merchandise, environments, materials — all handled. Stop juggling vendors and managing timelines across five different companies.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="3" stroke="#1E9BD7" strokeWidth="1.5"/>
        <circle cx="4" cy="6" r="2" stroke="#1E9BD7" strokeWidth="1.5"/>
        <circle cx="20" cy="6" r="2" stroke="#1E9BD7" strokeWidth="1.5"/>
        <circle cx="4" cy="18" r="2" stroke="#1E9BD7" strokeWidth="1.5"/>
        <circle cx="20" cy="18" r="2" stroke="#1E9BD7" strokeWidth="1.5"/>
        <path d="M6 7l4 3.5M18 7l-4 3.5M6 17l4-3.5M18 17l-4-3.5" stroke="#1E9BD7" strokeWidth="1.25" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Built for growing companies',
    body: "Right-sized service without agency complexity or enterprise bureaucracy. We work with teams of 10 to 200 — not Fortune 500 procurement.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M3 17l5-5 4 4 9-9" stroke="#1E9BD7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M15 7h6v6" stroke="#1E9BD7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
]

export default function WhyStandwell() {
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
    <section ref={sectionRef} className="bg-white py-32 border-t border-zinc-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <p className="reveal text-brand-blue text-sm font-medium tracking-widest uppercase mb-4">
            Why Standwell
          </p>
          <h2 className="reveal reveal-delay-1 font-display font-bold text-brand-black leading-tight tracking-tight" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)' }}>
            A different kind of<br />brand partner.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          {differentiators.map((d, i) => (
            <div key={d.title} className={`reveal reveal-delay-${i + 1}`}>
              <div className="w-12 h-12 rounded-sm bg-brand-blue/8 border border-brand-blue/15 flex items-center justify-center mb-6">
                {d.icon}
              </div>
              <h3 className="font-display text-xl font-bold text-brand-black mb-3 tracking-tight">
                {d.title}
              </h3>
              <p className="text-brand-mid text-base leading-relaxed">
                {d.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
