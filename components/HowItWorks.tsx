'use client'

import { useEffect, useRef } from 'react'

const steps = [
  {
    number: '01',
    title: 'Tell us what you need',
    body: "Fill out the form with your goals and timeline. We'll get back to you within 24 hours with questions or a recommendation.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect x="3" y="5" width="22" height="18" rx="2" stroke="white" strokeWidth="1.75"/>
        <path d="M8 10h12M8 14h8M8 18h5" stroke="white" strokeWidth="1.75" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    number: '02',
    title: 'We handle the details',
    body: "We source the right products, coordinate design and production, and keep you updated. No project management on your end.",
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
    body: "Everything ships directly to you or your team — inspected, packed, and ready to use.",
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
    <section id="how-it-works" ref={sectionRef} className="bg-[#F9FAFB] py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <p className="reveal text-brand-blue text-sm font-medium tracking-widest uppercase mb-4">
            How it works
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <h2 className="reveal reveal-delay-1 font-display font-bold text-brand-black leading-tight tracking-tight" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)' }}>
              From first conversation<br />to delivered — typically 2–4 weeks.
            </h2>
          </div>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Connector line */}
          <div
            className="hidden md:block absolute top-7 left-[calc(16.66%+28px)] right-[calc(16.66%+28px)] h-px bg-zinc-200"
            aria-hidden="true"
          />

          {steps.map((step, i) => (
            <div key={step.number} className={`reveal reveal-delay-${i + 1} relative`}>
              <div className="flex items-center gap-4 mb-7">
                <div className="w-14 h-14 rounded-sm bg-brand-blue flex items-center justify-center flex-shrink-0 relative z-10 shadow-[0_4px_20px_rgba(30,155,215,0.3)]">
                  {step.icon}
                </div>
                <span className="font-display text-xs font-bold text-zinc-300 tracking-widest">
                  STEP {step.number}
                </span>
              </div>
              <h3 className="font-display text-xl font-bold text-brand-black mb-3 tracking-tight">
                {step.title}
              </h3>
              <p className="text-brand-mid text-base leading-relaxed">{step.body}</p>
            </div>
          ))}
        </div>

        <div className="reveal mt-16 pt-14 border-t border-zinc-200">
          <a
            href="#quote"
            className="inline-flex items-center gap-2 bg-brand-black hover:bg-zinc-800 text-white font-semibold text-base px-8 py-4 rounded-sm transition-all duration-200 hover:shadow-lg"
          >
            Get Started
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
