'use client'

import { useEffect, useRef } from 'react'

const products = [
  {
    id: 'fabric-displays',
    title: 'Fabric Displays',
    description: 'Tension fabric backwalls and pillowcase displays. Seamless print, lightweight aluminum frames, wrinkle-resistant. The clean look you see at professional booths.',
    tags: ['Non-backlit', 'Multiple sizes', 'Easy setup'],
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
        <path d="M6 4 Q18 8 30 4 L30 32 Q18 28 6 32 Z" stroke="#1E9BD7" strokeWidth="1.75" fill="none"/>
        <path d="M6 4 L6 32" stroke="#1E9BD7" strokeWidth="1.75" strokeLinecap="round"/>
        <path d="M30 4 L30 32" stroke="#1E9BD7" strokeWidth="1.75" strokeLinecap="round"/>
        <path d="M11 14 Q18 17 25 14" stroke="#1E9BD7" strokeWidth="1.25" strokeLinecap="round" strokeOpacity="0.45"/>
        <path d="M11 20 Q18 23 25 20" stroke="#1E9BD7" strokeWidth="1.25" strokeLinecap="round" strokeOpacity="0.45"/>
      </svg>
    ),
  },
  {
    id: 'backlit-displays',
    title: 'Backlit Displays',
    description: 'LED lightbox backwalls and backlit frames that make graphics glow. Stand out in crowded exhibit halls with vibrant, edge-lit illumination.',
    tags: ['LED backlit', 'Vivid colors', 'Indoor use'],
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
        <rect x="4" y="5" width="28" height="22" rx="2" stroke="#1E9BD7" strokeWidth="1.75"/>
        <rect x="8" y="9" width="20" height="14" rx="1" stroke="#1E9BD7" strokeWidth="1.25" strokeOpacity="0.45"/>
        <path d="M13 32h10M18 27v5" stroke="#1E9BD7" strokeWidth="1.75" strokeLinecap="round"/>
        <circle cx="18" cy="16" r="4" stroke="#1E9BD7" strokeWidth="1.25" strokeOpacity="0.7"/>
        <path d="M18 10v2M18 20v2M12 16h2M22 16h2" stroke="#1E9BD7" strokeWidth="1.25" strokeLinecap="round" strokeOpacity="0.4"/>
      </svg>
    ),
  },
  {
    id: 'portable-kits',
    title: 'Portable Kits',
    description: 'Complete 10×10 booth packages — backwall, counter, and accessories coordinated and shipped together. Everything you need, nothing you don\'t.',
    tags: ['10×10 configs', 'Coordinated look', 'Ships together'],
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
        <rect x="3" y="8" width="30" height="20" rx="2" stroke="#1E9BD7" strokeWidth="1.75"/>
        <path d="M3 15h30" stroke="#1E9BD7" strokeWidth="1.25" strokeOpacity="0.4"/>
        <rect x="13" y="19" width="10" height="5" rx="1" stroke="#1E9BD7" strokeWidth="1.25" strokeOpacity="0.6"/>
        <path d="M12 8V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2" stroke="#1E9BD7" strokeWidth="1.75" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 'banner-stands',
    title: 'Banner Stands',
    description: 'Retractable and adjustable banner stands in standard sizes. The classic event staple — pull it out, snap it up, done. Built for repeat use.',
    tags: ['Retractable', 'Case included', 'Replacement graphics'],
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
        <rect x="9" y="3" width="18" height="26" rx="2" stroke="#1E9BD7" strokeWidth="1.75"/>
        <line x1="18" y1="29" x2="18" y2="34" stroke="#1E9BD7" strokeWidth="1.75" strokeLinecap="round"/>
        <line x1="11" y1="34" x2="25" y2="34" stroke="#1E9BD7" strokeWidth="2" strokeLinecap="round"/>
        <line x1="13" y1="11" x2="23" y2="11" stroke="#1E9BD7" strokeWidth="1.25" strokeLinecap="round" strokeOpacity="0.45"/>
        <line x1="13" y1="15" x2="20" y2="15" stroke="#1E9BD7" strokeWidth="1.25" strokeLinecap="round" strokeOpacity="0.45"/>
      </svg>
    ),
  },
  {
    id: 'accessories',
    title: 'Accessories',
    description: 'Display lights, carry cases, table throws, counters, and other add-ons to complete your booth. Order with a display or on their own.',
    tags: ['Lights & cases', 'Table throws', 'Counters'],
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
        <rect x="3" y="14" width="30" height="5" rx="2" stroke="#1E9BD7" strokeWidth="1.75"/>
        <path d="M7 19 L5 30" stroke="#1E9BD7" strokeWidth="1.75" strokeLinecap="round"/>
        <path d="M29 19 L31 30" stroke="#1E9BD7" strokeWidth="1.75" strokeLinecap="round"/>
        <path d="M5 30 L31 30" stroke="#1E9BD7" strokeWidth="1.75" strokeLinecap="round"/>
        <path d="M15 9l3 5M18 9l3 5M21 9l3 5" stroke="#1E9BD7" strokeWidth="1.25" strokeLinecap="round" strokeOpacity="0.5"/>
        <path d="M13 14 L23 14" stroke="#1E9BD7" strokeWidth="1.25" strokeOpacity="0.4"/>
      </svg>
    ),
  },
]

export default function Products() {
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
    <section id="products" ref={sectionRef} className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-12">
          <p className="reveal text-brand-blue text-sm font-medium tracking-widest uppercase mb-3">
            Products
          </p>
          <h2 className="reveal reveal-delay-1 font-display text-4xl sm:text-5xl font-bold text-brand-black leading-tight tracking-tight">
            What we carry
          </h2>
        </div>

        {/* Product grid — 3 across then 2 centered */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.slice(0, 3).map((product, i) => (
            <article
              key={product.id}
              className={`reveal reveal-delay-${i + 1} group bg-brand-gray border border-zinc-100 rounded-sm p-7 hover:border-brand-blue/30 hover:shadow-[0_4px_24px_rgba(30,155,215,0.08)] transition-all duration-300 flex flex-col`}
            >
              <div className="mb-5">{product.icon}</div>
              <h3 className="font-display text-lg font-bold text-brand-black mb-2 tracking-tight">
                {product.title}
              </h3>
              <p className="text-brand-mid text-sm leading-relaxed mb-5 flex-1">
                {product.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mb-5">
                {product.tags.map((tag) => (
                  <span key={tag} className="text-xs text-brand-mid bg-white border border-zinc-200 rounded-sm px-2.5 py-1">
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href="#quote"
                className="text-brand-blue text-sm font-medium hover:underline underline-offset-4 flex items-center gap-1 mt-auto"
              >
                Get a quote
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path d="M2 6h8M6 3l3 3-3 3" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </article>
          ))}
        </div>

        {/* Bottom 2 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5">
          {products.slice(3).map((product, i) => (
            <article
              key={product.id}
              className={`reveal reveal-delay-${i + 4} group bg-brand-gray border border-zinc-100 rounded-sm p-7 hover:border-brand-blue/30 hover:shadow-[0_4px_24px_rgba(30,155,215,0.08)] transition-all duration-300 flex flex-col`}
            >
              <div className="mb-5">{product.icon}</div>
              <h3 className="font-display text-lg font-bold text-brand-black mb-2 tracking-tight">
                {product.title}
              </h3>
              <p className="text-brand-mid text-sm leading-relaxed mb-5 flex-1">
                {product.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mb-5">
                {product.tags.map((tag) => (
                  <span key={tag} className="text-xs text-brand-mid bg-white border border-zinc-200 rounded-sm px-2.5 py-1">
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href="#quote"
                className="text-brand-blue text-sm font-medium hover:underline underline-offset-4 flex items-center gap-1 mt-auto"
              >
                Get a quote
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path d="M2 6h8M6 3l3 3-3 3" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="reveal mt-10 text-center">
          <p className="text-brand-mid text-sm mb-3">
            Not sure what you need? Tell us about your event and we'll point you in the right direction.
          </p>
          <a
            href="#quote"
            className="inline-flex items-center gap-2 text-brand-blue text-sm font-semibold hover:underline underline-offset-4"
          >
            Get a recommendation
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
