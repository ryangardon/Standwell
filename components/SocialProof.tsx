'use client'

import { useEffect, useRef } from 'react'

const placeholderLogos = [
  'Acme Corp',
  'Bright Labs',
  'Nova Health',
  'Crest Group',
  'Pivot Studio',
  'Arc Systems',
]

const quotes = [
  {
    text: "We needed a booth setup for our first conference and had no idea where to start. Standwell made it painless — told us exactly what we needed and got it to us in a week.",
    name: 'Sarah M.',
    title: 'Marketing Manager, SaaS Startup',
  },
  {
    text: "I've ordered from Standwell three times now for different events. Fast, easy, no surprises. Exactly what I need.",
    name: 'James R.',
    title: 'Franchise Owner',
  },
]

export default function SocialProof() {
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
    <section ref={sectionRef} className="bg-white py-20 border-b border-zinc-100">
      <div className="max-w-6xl mx-auto px-6">
        {/* Label */}
        <p className="reveal text-center text-brand-mid text-sm font-medium tracking-widest uppercase mb-10">
          Trusted by startups, agencies, and growing brands
        </p>

        {/* Logo bar — placeholders */}
        <div className="reveal reveal-delay-1 flex flex-wrap items-center justify-center gap-4 mb-16">
          {placeholderLogos.map((name) => (
            <div
              key={name}
              className="h-10 px-6 flex items-center justify-center bg-zinc-50 border border-zinc-200 rounded-sm text-zinc-300 text-xs font-semibold tracking-widest uppercase select-none"
              title="Placeholder — replace with customer logo"
            >
              {name}
            </div>
          ))}
          <div className="h-10 px-6 flex items-center justify-center border border-dashed border-zinc-200 rounded-sm text-zinc-300 text-xs font-medium select-none">
            Your logo here
          </div>
        </div>

        {/* Inline quotes */}
        <div className="reveal reveal-delay-2 grid grid-cols-1 md:grid-cols-2 gap-6">
          {quotes.map((q, i) => (
            <blockquote
              key={i}
              className="bg-brand-gray border border-zinc-100 rounded-sm p-8"
            >
              <svg
                width="24"
                height="18"
                viewBox="0 0 24 18"
                fill="none"
                className="mb-4 text-brand-blue"
                aria-hidden="true"
              >
                <path
                  d="M0 18V11.4C0 7.8 1.2 4.8 3.6 2.4 6 0 9 0 12 0v3.6C10.2 3.6 8.7 4.2 7.5 5.4 6.3 6.6 5.7 8.1 5.7 9.9H9V18H0ZM15 18V11.4C15 7.8 16.2 4.8 18.6 2.4 21 0 24 0 24 0v3.6C22.2 3.6 20.7 4.2 19.5 5.4 18.3 6.6 17.7 8.1 17.7 9.9H21V18H15Z"
                  fill="currentColor"
                  fillOpacity="0.25"
                />
              </svg>
              <p className="text-brand-black text-base leading-relaxed mb-5 italic">
                &ldquo;{q.text}&rdquo;
              </p>
              <footer className="flex items-center gap-3">
                {/* Avatar placeholder */}
                <div className="w-9 h-9 rounded-full bg-zinc-200 flex items-center justify-center text-zinc-400 text-xs font-bold flex-shrink-0">
                  {q.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-brand-black">{q.name}</p>
                  <p className="text-xs text-brand-mid">{q.title}</p>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
