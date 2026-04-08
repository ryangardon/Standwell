'use client'

import { useEffect, useRef } from 'react'

const testimonials = [
  {
    quote:
      "We've used Standwell for three events now. Every time: fast, easy, looks great. They recommended exactly what we needed and didn't try to upsell us on stuff we didn't.",
    name: 'Mark T.',
    title: 'Director of Marketing',
    company: 'B2B Software Co.',
    initial: 'M',
  },
  {
    quote:
      "I manage events for a franchise network and needed consistent displays across 12 locations. Standwell handled it all in one order. Lifesaver.",
    name: 'Diana K.',
    title: 'Operations Manager',
    company: 'Franchise Brand',
    initial: 'D',
  },
  {
    quote:
      "Our first trade show was stressful enough without trying to figure out booth displays. Standwell walked us through it and the setup took 10 minutes.",
    name: 'Alex P.',
    title: 'Founder',
    company: 'DTC Brand',
    initial: 'A',
  },
]

const avatarColors = [
  { bg: 'bg-brand-blue', text: 'text-white' },
  { bg: 'bg-zinc-700', text: 'text-white' },
  { bg: 'bg-zinc-200', text: 'text-zinc-600' },
]

export default function Testimonials() {
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
    <section ref={sectionRef} className="bg-white py-28 border-t border-zinc-100">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-xl mb-14">
          <p className="reveal text-brand-blue text-sm font-medium tracking-widest uppercase mb-3">
            Customer stories
          </p>
          <h2 className="reveal reveal-delay-1 font-display text-4xl sm:text-5xl font-bold text-brand-black leading-tight tracking-tight">
            What our customers say
          </h2>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <blockquote
              key={i}
              className={`reveal reveal-delay-${i + 1} flex flex-col bg-brand-gray border border-zinc-100 rounded-sm p-8 hover:border-brand-blue/20 hover:shadow-[0_4px_24px_rgba(30,155,215,0.07)] transition-all duration-300`}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5" aria-label="5 stars">
                {Array.from({ length: 5 }).map((_, s) => (
                  <svg key={s} width="14" height="14" viewBox="0 0 14 14" fill="#1E9BD7" aria-hidden="true">
                    <path d="M7 1L8.545 5.09H13L9.5 7.545L10.955 11.5L7 9.045L3.045 11.5L4.5 7.545L1 5.09H5.455L7 1Z"/>
                  </svg>
                ))}
              </div>

              <p className="text-brand-black text-base leading-relaxed flex-1 mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>

              <footer className="flex items-center gap-3 pt-5 border-t border-zinc-200">
                {/* Avatar */}
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 ${avatarColors[i].bg} ${avatarColors[i].text}`}
                  aria-hidden="true"
                >
                  {t.initial}
                </div>
                <div>
                  <p className="text-sm font-semibold text-brand-black">{t.name}</p>
                  <p className="text-xs text-brand-mid">
                    {t.title}, {t.company}
                  </p>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>

        {/* Placeholder note — visible only in dev/staging intent */}
        <p className="reveal mt-8 text-center text-zinc-300 text-xs">
          Placeholder testimonials — replace with real customer quotes as you collect them.
        </p>
      </div>
    </section>
  )
}
