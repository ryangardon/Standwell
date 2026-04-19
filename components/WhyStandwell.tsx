'use client'

import { useEffect, useRef } from 'react'

const items = [
  {
    num: '01',
    title: 'Direct pricing, no markup',
    desc: "We work with manufacturers directly — no exhibit house overhead, no sales rep commission buried in the quote. You get quality products at honest prices.",
  },
  {
    num: '02',
    title: 'Fast turnaround',
    desc: 'Most orders ship within 5–7 business days. We know you booked the booth last minute — we\'ve been there. Rush options available when you really need it.',
  },
  {
    num: '03',
    title: 'Actually helpful humans',
    desc: 'Real people who answer questions and help you pick the right product. No bots, no 30-minute discovery calls just to get a price. Just tell us what you need.',
  },
  {
    num: '04',
    title: 'No minimums, no contracts',
    desc: 'Order one banner stand or outfit five locations. We\'re built for transactional buyers who want to order and move on — not lock into a long-term relationship.',
  },
]

export default function WhyStandwell() {
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
    <section id="why" ref={sectionRef} className="bg-brand-gray py-16 px-5 md:py-[120px] md:px-20">
      <div className="flex flex-col md:grid md:gap-20 md:items-start" style={{ gridTemplateColumns: '1fr 1fr' }}>
        {/* Left — sticky on desktop only */}
        <div className="fade-up mb-10 md:mb-0 md:sticky md:top-[120px]">
          <div className="flex items-center gap-2.5 mb-5">
            <div className="w-6 h-px bg-brand-blue flex-shrink-0" />
            <span className="text-[11px] font-semibold tracking-[0.16em] uppercase text-brand-blue">Why Standwell</span>
          </div>
          <h2
            className="font-serif font-light text-brand-black mb-4"
            style={{ fontSize: 'clamp(36px, 5vw, 68px)', lineHeight: 1.05, letterSpacing: '-0.01em' }}
          >
            We exist because the<br />display industry<br />is <em className="not-italic text-brand-blue">annoying.</em>
          </h2>
          <p className="text-brand-mid mt-4" style={{ fontSize: '18px', fontWeight: 300, lineHeight: 1.75, maxWidth: '420px' }}>
            Long lead times. Confusing quotes. Salespeople who won't give you a price without a 30-minute call. We cut all of that out.
          </p>

          <a
            href="#contact"
            className="mt-10 inline-flex items-center gap-3 bg-brand-blue text-white text-xs font-semibold tracking-[0.08em] uppercase px-7 py-4 transition-all duration-300 hover:bg-brand-blue-mid hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(30,155,215,0.35)]"
          >
            Get a Quote
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        {/* Right — list */}
        <div className="fade-up">
          {items.map((item) => (
            <div
              key={item.num}
              className="group relative flex gap-5 py-8 border-b border-brand-border items-start transition-all duration-200 hover:pl-4 cursor-default"
            >
              {/* Left blue accent bar */}
              <div className="absolute left-0 top-8 bottom-8 w-[3px] bg-brand-blue scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top rounded-full" />

              <span className="font-serif text-[15px] font-normal text-brand-light pt-1 flex-shrink-0 transition-colors duration-200 group-hover:text-brand-blue">
                {item.num}
              </span>
              <div>
                <div className="font-serif text-[24px] font-medium text-brand-black mb-2.5 leading-[1.2] transition-colors duration-200 group-hover:text-brand-blue">
                  {item.title}
                </div>
                <p className="text-brand-mid" style={{ fontSize: '15px', fontWeight: 300, lineHeight: 1.75 }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
