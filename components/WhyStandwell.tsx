'use client'

import { useEffect, useRef } from 'react'

const items = [
  {
    num: '01',
    title: 'We tell you what to order',
    desc: "No 500,000-item catalog to wade through. We recommend the right products for your goals, timeline, and budget — and explain why.",
  },
  {
    num: '02',
    title: 'One vendor for everything',
    desc: 'Merchandise, displays, kits — all in one place. Stop managing multiple suppliers, timelines, and invoices for a single project.',
  },
  {
    num: '03',
    title: 'Right-sized for growing teams',
    desc: 'No agency overhead or enterprise minimums. We work with companies of 10 to 500 — and treat every order like it matters.',
  },
  {
    num: '04',
    title: 'Real people, real replies',
    desc: 'Every inquiry gets a response within 24 hours from a real person — not an automated quote form or a customer service queue.',
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
            style={{ fontSize: 'clamp(40px, 5vw, 68px)', lineHeight: 1.05, letterSpacing: '-0.01em' }}
          >
            A different kind<br />of <em className="not-italic text-brand-blue">brand partner.</em>
          </h2>
          <p className="text-brand-mid mt-4" style={{ fontSize: '18px', fontWeight: 300, lineHeight: 1.75, maxWidth: '420px' }}>
            Most vendors send you a catalog. We tell you what to order, make sure it's right, and get it there on time.
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
                <div className="font-serif text-[26px] font-medium text-brand-black mb-2.5 leading-[1.2] transition-colors duration-200 group-hover:text-brand-blue">
                  {item.title}
                </div>
                <p className="text-brand-mid" style={{ fontSize: '16px', fontWeight: 300, lineHeight: 1.75 }}>
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
