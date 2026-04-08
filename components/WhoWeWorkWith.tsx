'use client'

import { useEffect, useRef } from 'react'

const segments = [
  {
    title: 'Startups & Tech Companies',
    body: "First trade show? Tenth? We help growing teams look polished without overcomplicating it.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8Z" stroke="#1E9BD7" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'Franchises & Multi-Location',
    body: 'Consistent branded displays across every location. One order, shipped wherever you need it.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="5" r="2.5" stroke="#1E9BD7" strokeWidth="1.75"/>
        <circle cx="4.5" cy="18" r="2.5" stroke="#1E9BD7" strokeWidth="1.75"/>
        <circle cx="19.5" cy="18" r="2.5" stroke="#1E9BD7" strokeWidth="1.75"/>
        <path d="M12 7.5V12M12 12L4.5 15.5M12 12L19.5 15.5" stroke="#1E9BD7" strokeWidth="1.75" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Corporate Events & Internal Teams',
    body: 'Sales kickoffs, recruiting events, lobby displays. Same professional quality, simpler process.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="7" width="18" height="13" rx="2" stroke="#1E9BD7" strokeWidth="1.75"/>
        <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" stroke="#1E9BD7" strokeWidth="1.75"/>
        <path d="M12 12v4M10 14h4" stroke="#1E9BD7" strokeWidth="1.75" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Agencies & Marketing Teams',
    body: "Displays for your clients without the markup. Fast turnaround when the timeline is tight.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M2 20h20M6 20V10l6-6 6 6v10" stroke="#1E9BD7" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="9" y="14" width="6" height="6" stroke="#1E9BD7" strokeWidth="1.75"/>
      </svg>
    ),
  },
  {
    title: 'Occasional Exhibitors',
    body: "One or two shows a year? You don't need a full-service partner — you need to order and move on.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="4" width="18" height="18" rx="2" stroke="#1E9BD7" strokeWidth="1.75"/>
        <path d="M16 2v4M8 2v4M3 10h18" stroke="#1E9BD7" strokeWidth="1.75" strokeLinecap="round"/>
        <path d="M8 15h4M8 18h8" stroke="#1E9BD7" strokeWidth="1.75" strokeLinecap="round"/>
      </svg>
    ),
  },
]

export default function WhoWeWorkWith() {
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
    <section id="who" ref={sectionRef} className="bg-brand-gray py-28 border-t border-zinc-100">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-xl mb-14">
          <p className="reveal text-brand-blue text-sm font-medium tracking-widest uppercase mb-3">
            Who we work with
          </p>
          <h2 className="reveal reveal-delay-1 font-display text-4xl sm:text-5xl font-bold text-brand-black leading-tight tracking-tight">
            Built for teams that exhibit — not exhibit houses
          </h2>
        </div>

        {/* Segment cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {segments.map((seg, i) => (
            <div
              key={seg.title}
              className={`reveal reveal-delay-${(i % 3) + 1} group bg-white border border-zinc-100 rounded-sm p-7 hover:border-brand-blue/25 hover:shadow-[0_4px_24px_rgba(30,155,215,0.08)] transition-all duration-300`}
            >
              <div className="p-2.5 bg-brand-blue/8 rounded-sm inline-flex mb-5 group-hover:bg-brand-blue/12 transition-colors duration-300">
                {seg.icon}
              </div>
              <h3 className="font-display text-base font-bold text-brand-black mb-2 tracking-tight">
                {seg.title}
              </h3>
              <p className="text-brand-mid text-sm leading-relaxed">{seg.body}</p>
            </div>
          ))}

          {/* CTA card */}
          <div className="reveal reveal-delay-3 bg-brand-black rounded-sm p-7 flex flex-col justify-between">
            <div>
              <p className="text-white/50 text-xs font-medium tracking-widest uppercase mb-3">
                Sound like you?
              </p>
              <p className="font-display text-lg font-bold text-white leading-snug mb-4">
                Tell us about your event — no pressure, no sales call.
              </p>
            </div>
            <a
              href="#quote"
              className="inline-flex items-center gap-2 text-brand-blue font-semibold text-sm hover:gap-3 transition-all duration-200"
            >
              Get a free quote
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
