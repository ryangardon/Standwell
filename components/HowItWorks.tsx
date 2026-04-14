'use client'

import { useEffect, useRef } from 'react'

const steps = [
  {
    index: '01',
    title: 'Tell us what you need',
    desc: "Fill out the quote form with your goals, timeline, and budget. We'll get back to you within 24 hours with a recommendation or follow-up questions.",
  },
  {
    index: '02',
    title: 'We handle the details',
    desc: 'We source the right products, coordinate production and artwork, and keep you updated at each stage. No vendor chasing, no guesswork.',
  },
  {
    index: '03',
    title: 'It arrives ready to go',
    desc: 'Everything ships directly to you or your team — inspected and ready to use. Typical delivery in 2–4 weeks from order confirmation.',
  },
]

export default function HowItWorks() {
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
    <section id="process" ref={sectionRef} className="bg-brand-black text-white py-16 px-5 md:py-[120px] md:px-20 relative overflow-hidden">
      {/* Subtle blue glow top-left */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '-100px', left: '-100px',
          width: '500px', height: '500px',
          background: 'radial-gradient(circle, rgba(30,155,215,0.1) 0%, transparent 70%)',
          borderRadius: '50%',
        }}
        aria-hidden="true"
      />

      {/* Header */}
      <div className="fade-up mb-10 md:mb-20 relative z-10">
        <div className="md:grid md:gap-20 md:items-end" style={{ gridTemplateColumns: '1fr 1fr' }}>
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-6 h-px bg-brand-blue flex-shrink-0" />
              <span className="text-[11px] font-semibold tracking-[0.16em] uppercase text-brand-blue">How It Works</span>
            </div>
            <h2
              className="font-serif font-light text-white"
              style={{ fontSize: 'clamp(36px, 5vw, 68px)', lineHeight: 1.05, letterSpacing: '-0.01em' }}
            >
              From first conversation<br />to <em className="not-italic text-brand-blue">delivered.</em>
            </h2>
          </div>
          <p className="text-white/50 mt-5 md:mt-0" style={{ fontSize: '18px', fontWeight: 300, lineHeight: 1.75, maxWidth: '480px' }}>
            We keep it simple. Tell us what you need, we handle everything from there — no project management required on your end.
          </p>
        </div>
      </div>

      {/* Steps */}
      <div className="fade-up relative z-10 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {steps.map((step, i) => (
          <div
            key={step.index}
            className="group relative flex flex-col gap-6 border border-white/10 bg-white/[0.03] transition-all duration-300 hover:bg-white/[0.07] hover:border-brand-blue/40 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(30,155,215,0.1)]"
            style={{ padding: '32px 28px' }}
          >
            {/* Ghost number */}
            <span
              className="font-serif absolute top-5 right-6 select-none pointer-events-none transition-opacity duration-300 group-hover:opacity-0"
              style={{ fontSize: '72px', fontWeight: 300, color: 'rgba(255,255,255,0.05)', lineHeight: 1 }}
              aria-hidden="true"
            >
              {step.index}
            </span>

            {/* Top accent line on hover */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-brand-blue scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

            {/* Index badge */}
            <div className="w-9 h-9 bg-brand-blue flex items-center justify-center text-white text-sm font-semibold tracking-wide flex-shrink-0 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(30,155,215,0.5)] group-hover:scale-110">
              {step.index}
            </div>

            <div className="font-serif text-[28px] font-medium text-white leading-[1.2] transition-colors duration-300 group-hover:text-brand-blue">
              {step.title}
            </div>
            <p style={{ fontSize: '16px', fontWeight: 300, color: 'rgba(255,255,255,0.5)', lineHeight: 1.75 }}>
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
