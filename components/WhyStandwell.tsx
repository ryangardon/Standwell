'use client'

import { useEffect, useRef } from 'react'

const valueProps = [
  {
    number: '01',
    title: 'Direct pricing, no markup',
    body: "We work with manufacturers directly — no exhibit house overhead, no sales rep commission buried in the quote. You get quality products at honest prices.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden="true">
        <path d="M13 2.5L16 9.5L23.5 10.6L18.5 15.5L19.75 23L13 19.5L6.25 23L7.5 15.5L2.5 10.6L10 9.5L13 2.5Z" stroke="#1E9BD7" strokeWidth="1.75" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Fast turnaround',
    body: "Most orders ship within 5–7 business days. We know you booked the booth last minute — we've been there. Rush options available when you really need it.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden="true">
        <circle cx="13" cy="13" r="10" stroke="#1E9BD7" strokeWidth="1.75"/>
        <path d="M13 7.5V13.5L16.5 16" stroke="#1E9BD7" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Actually helpful humans',
    body: 'Real people who answer questions and help you pick the right product. No bots. No waiting a week for a quote. Just tell us what you need.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden="true">
        <path d="M3.5 19V21.5L8 19H21.5C22.6 19 23.5 18.1 23.5 17V7.5C23.5 6.4 22.6 5.5 21.5 5.5H4.5C3.4 5.5 2.5 6.4 2.5 7.5V17C2.5 17.55 2.75 18.05 3.14 18.4" stroke="#1E9BD7" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 11.5H18M8 15H14" stroke="#1E9BD7" strokeWidth="1.75" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    number: '04',
    title: 'No minimums, no contracts',
    body: 'Order one banner stand or outfit five locations. We&apos;re built for transactional buyers who want to order and move on — not lock into a relationship.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden="true">
        <rect x="4" y="4" width="18" height="18" rx="3" stroke="#1E9BD7" strokeWidth="1.75"/>
        <path d="M9 13L11.5 15.5L17 10" stroke="#1E9BD7" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
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
    <section id="why" ref={sectionRef} className="bg-brand-gray py-28 border-t border-zinc-100">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="max-w-2xl mb-6">
          <p className="reveal text-brand-blue text-sm font-medium tracking-widest uppercase mb-3">
            Why Standwell
          </p>
          <h2 className="reveal reveal-delay-1 font-display text-4xl sm:text-5xl font-bold text-brand-black leading-tight tracking-tight">
            We exist because the display industry is annoying
          </h2>
        </div>
        <p className="reveal reveal-delay-2 text-brand-mid text-lg leading-relaxed mb-16 max-w-2xl">
          Long lead times. Confusing quotes. Salespeople who won&apos;t give you a price without a
          30-minute call. We cut all of that out.
        </p>

        {/* Value props — 2x2 grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {valueProps.map((vp, i) => (
            <div key={vp.number} className={`reveal reveal-delay-${(i % 2) + 1}`}>
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 bg-white border border-zinc-100 rounded-sm shadow-sm">
                  {vp.icon}
                </div>
                <span className="font-display text-xs font-bold text-zinc-300 tracking-widest">
                  {vp.number}
                </span>
              </div>
              <h3 className="font-display text-xl font-bold text-brand-black mb-3 tracking-tight">
                {vp.title}
              </h3>
              <p
                className="text-brand-mid text-base leading-relaxed"
                dangerouslySetInnerHTML={{ __html: vp.body }}
              />
            </div>
          ))}
        </div>

        {/* Brand quote */}
        <div className="reveal mt-20 pt-16 border-t border-zinc-200">
          <blockquote className="max-w-2xl">
            <p className="font-display text-2xl sm:text-3xl font-semibold text-brand-black leading-snug tracking-tight">
              &ldquo;Show Up. Stand Out.&rdquo;
            </p>
            <footer className="mt-4 text-brand-blue text-sm font-medium tracking-wide">
              — Simple displays. Real results.
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
