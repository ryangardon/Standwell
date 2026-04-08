'use client'

import { useEffect, useRef } from 'react'

const promises = [
  {
    title: 'Quality Guaranteed',
    body: "If your display arrives damaged or doesn't meet spec, we'll make it right — replacement or refund, no hassle.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M14 3L4 7v8c0 5.5 4.3 10.7 10 12 5.7-1.3 10-6.5 10-12V7L14 3Z" stroke="#1E9BD7" strokeWidth="1.75" strokeLinejoin="round"/>
        <path d="M9.5 14l3 3 6-6" stroke="#1E9BD7" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'No Surprise Fees',
    body: "The quote you approve is the price you pay. No hidden charges for shipping, setup instructions, or \"processing.\"",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect x="3" y="6" width="22" height="16" rx="3" stroke="#1E9BD7" strokeWidth="1.75"/>
        <path d="M3 11h22" stroke="#1E9BD7" strokeWidth="1.75"/>
        <path d="M8 17h3M15 17h5" stroke="#1E9BD7" strokeWidth="1.75" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Real Support',
    body: "Questions? Email us at hello@standwelldisplays.com and a real human will respond — usually within a few hours.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M4 22V19.5C4 17.3 5.8 15.5 8 15.5H14" stroke="#1E9BD7" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="10" cy="9" r="4" stroke="#1E9BD7" strokeWidth="1.75"/>
        <path d="M17 16l2.5 2.5L24 13" stroke="#1E9BD7" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
]

export default function Guarantee() {
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
        {/* Header */}
        <div className="text-center max-w-lg mx-auto mb-14">
          <p className="reveal text-brand-blue text-sm font-medium tracking-widest uppercase mb-3">
            Our promise
          </p>
          <h2 className="reveal reveal-delay-1 font-display text-4xl sm:text-5xl font-bold text-white leading-tight tracking-tight">
            You&apos;re in good hands
          </h2>
        </div>

        {/* Promise cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {promises.map((p, i) => (
            <div
              key={p.title}
              className={`reveal reveal-delay-${i + 1} bg-white/[0.04] border border-white/10 rounded-sm p-8 hover:bg-white/[0.07] hover:border-brand-blue/30 transition-all duration-300`}
            >
              <div className="p-2.5 bg-brand-blue/10 rounded-sm inline-flex mb-5">
                {p.icon}
              </div>
              <h3 className="font-display text-lg font-bold text-white mb-3 tracking-tight">
                {p.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
