'use client'

import { useEffect, useRef } from 'react'

const stats = [
  {
    value: '24hr',
    label: 'Response time',
    sub: 'Every inquiry gets a real reply.',
  },
  {
    value: '2–4wk',
    label: 'Typical delivery',
    sub: 'From first conversation to delivered.',
  },
  {
    value: '1',
    label: 'Partner for everything',
    sub: 'Merchandise, environments, materials.',
  },
]

export default function TrustSection() {
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
    <section ref={sectionRef} className="bg-brand-black py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <p className="reveal text-brand-blue text-sm font-medium tracking-widest uppercase mb-4">
            Why companies choose us
          </p>
          <h2 className="reveal reveal-delay-1 font-display font-bold text-white leading-tight tracking-tight" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            From startups to scaling teams,<br className="hidden sm:block" /> we help companies look as good as they actually are.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/10 rounded-sm overflow-hidden">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`reveal reveal-delay-${i + 1} bg-brand-black px-10 py-10`}
            >
              <p className="font-display text-5xl font-bold text-brand-blue mb-2 tracking-tight">
                {stat.value}
              </p>
              <p className="font-display text-lg font-semibold text-white mb-1 tracking-tight">
                {stat.label}
              </p>
              <p className="text-white/40 text-sm leading-relaxed">
                {stat.sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
