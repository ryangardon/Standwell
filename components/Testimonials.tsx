'use client'

import { useEffect, useRef } from 'react'

const testimonials = [
  {
    quote: "We've used Standwell for three events now. Every time: fast, easy, looks great. They recommended exactly what we needed and didn't try to upsell us on stuff we didn't.",
    name: 'Mark T.',
    title: 'Director of Marketing, B2B Software',
    initial: 'M',
  },
  {
    quote: "I manage events for a franchise network and needed consistent displays across 12 locations. Standwell handled it all in one order. Lifesaver.",
    name: 'Diana K.',
    title: 'Operations Manager, Franchise Brand',
    initial: 'D',
  },
  {
    quote: "Our first trade show was stressful enough without trying to figure out booth displays. Standwell walked us through it and the setup took 10 minutes.",
    name: 'Alex P.',
    title: 'Founder, DTC Brand',
    initial: 'A',
  },
]

export default function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.fade-up').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 100)
            })
          }
        })
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="bg-white border-t border-brand-border py-16 px-5 md:py-[100px] md:px-20">
      <div className="fade-up flex items-center gap-2.5 mb-5">
        <div className="w-6 h-px bg-brand-blue flex-shrink-0" />
        <span className="text-[11px] font-semibold tracking-[0.16em] uppercase text-brand-blue">What customers say</span>
      </div>

      <h2
        className="fade-up font-serif font-light text-brand-black mb-12 md:mb-16"
        style={{ fontSize: 'clamp(32px, 4vw, 56px)', lineHeight: 1.05, letterSpacing: '-0.01em' }}
      >
        Trusted by teams that<br /><em className="not-italic text-brand-blue">exhibit.</em>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="fade-up flex flex-col gap-6 border border-brand-border bg-brand-gray p-7 md:p-8"
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            {/* Stars */}
            <div className="flex gap-1" aria-label="5 stars">
              {Array.from({ length: 5 }).map((_, s) => (
                <svg key={s} width="13" height="13" viewBox="0 0 14 14" fill="#1E9BD7" aria-hidden="true">
                  <path d="M7 1L8.545 5.09H13L9.5 7.545L10.955 11.5L7 9.045L3.045 11.5L4.5 7.545L1 5.09H5.455L7 1Z"/>
                </svg>
              ))}
            </div>

            <p className="text-brand-mid flex-1" style={{ fontSize: '16px', fontWeight: 300, lineHeight: 1.75 }}>
              &ldquo;{t.quote}&rdquo;
            </p>

            <div className="border-t border-brand-border pt-5 flex items-center gap-3">
              <div className="w-9 h-9 bg-brand-blue flex items-center justify-center text-white text-sm font-semibold flex-shrink-0">
                {t.initial}
              </div>
              <div>
                <p className="text-[14px] font-semibold text-brand-black">{t.name}</p>
                <p className="text-[12px] font-light text-brand-light mt-0.5">{t.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
