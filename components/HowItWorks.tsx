'use client'

import { useEffect, useRef } from 'react'

const steps = [
  {
    number: '01',
    title: 'Tell us what you need',
    body: "Fill out the form or shoot us an email. Share your event details, space size, and any brand assets you have. We'll respond within 24 hours.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect x="3" y="5" width="22" height="18" rx="2" stroke="white" strokeWidth="1.75"/>
        <path d="M8 10h12M8 14h8M8 18h5" stroke="white" strokeWidth="1.75" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    number: '02',
    title: 'We recommend the right setup',
    body: "No confusing configurator. We'll tell you exactly what products fit your space and budget — and why. You approve the quote and graphics.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="14" cy="14" r="10" stroke="white" strokeWidth="1.75"/>
        <path d="M10 14l3 3 5-5" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    number: '03',
    title: 'It shows up ready to go',
    body: "Your displays ship direct to you or your venue. Unbox, set up in minutes, and look like you've been doing this for years.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M3 18h17M20 18V10H16L20 18ZM20 18H24L27 22H20V18Z" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="7.5" cy="23" r="2" stroke="white" strokeWidth="1.75"/>
        <circle cx="17" cy="23" r="2" stroke="white" strokeWidth="1.75"/>
        <path d="M3 10H16V18" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
]

export default function HowItWorks() {
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
    <section id="how-it-works" ref={sectionRef} className="bg-brand-black py-28">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-xl mb-16">
          <p className="reveal text-brand-blue text-sm font-medium tracking-widest uppercase mb-3">
            How it works
          </p>
          <h2 className="reveal reveal-delay-1 font-display text-4xl sm:text-5xl font-bold text-white leading-tight tracking-tight">
            From quote to delivery in 3 steps
          </h2>
        </div>

        {/* Steps */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Connector line on desktop */}
          <div
            className="hidden md:block absolute top-[28px] left-[calc(16.66%+28px)] right-[calc(16.66%+28px)] h-px bg-white/10"
            aria-hidden="true"
          />

          {steps.map((step, i) => (
            <div key={step.number} className={`reveal reveal-delay-${i + 1} relative`}>
              {/* Step icon circle */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-sm bg-brand-blue flex items-center justify-center flex-shrink-0 relative z-10">
                  {step.icon}
                </div>
                <span className="font-display text-xs font-bold text-white/20 tracking-widest">
                  STEP {step.number}
                </span>
              </div>

              <h3 className="font-display text-xl font-bold text-white mb-3 tracking-tight">
                {step.title}
              </h3>
              <p className="text-white/50 text-base leading-relaxed">{step.body}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="reveal mt-16 pt-16 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <p className="text-white/60 text-base max-w-md">
            Ready to get started? Fill out the form below — takes less than 2 minutes.
          </p>
          <a
            href="#quote"
            className="inline-flex items-center gap-2 bg-brand-blue hover:bg-[#1889c0] text-white font-semibold text-sm px-6 py-3.5 rounded-sm transition-all duration-200 hover:shadow-[0_0_20px_rgba(30,155,215,0.3)] flex-shrink-0"
          >
            Get a Quote
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
