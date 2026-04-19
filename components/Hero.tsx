'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

export default function Hero() {
  const orbRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      if (!orbRef.current) return
      const x = (e.clientX / window.innerWidth - 0.5) * 24
      const y = (e.clientY / window.innerHeight - 0.5) * 16
      orbRef.current.style.transform = `translate(${x}px, ${y}px)`
    }
    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [])

  return (
    <section className="h-screen bg-[#F9FAFB] flex items-center overflow-hidden relative" style={{ paddingTop: 'clamp(80px, 10vh, 108px)' }}>

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(30,155,215,0.18) 1px, transparent 1px)',
          backgroundSize: '36px 36px',
          maskImage: 'radial-gradient(ellipse 60% 80% at 15% 50%, black 0%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse 60% 80% at 15% 50%, black 0%, transparent 75%)',
          opacity: 0.45,
        }}
        aria-hidden="true"
      />

      {/* Parallax blue glow */}
      <div
        ref={orbRef}
        className="absolute pointer-events-none"
        style={{
          top: '5%', left: '-10%',
          width: '480px', height: '480px',
          background: 'radial-gradient(circle, rgba(30,155,215,0.08) 0%, transparent 70%)',
          borderRadius: '50%',
          transition: 'transform 0.2s ease-out',
        }}
        aria-hidden="true"
      />

      {/* Blue ambient glow behind card stack */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '15%', right: '2%',
          width: '560px', height: '560px',
          background: 'radial-gradient(circle, rgba(30,155,215,0.09) 0%, transparent 65%)',
          borderRadius: '50%',
          filter: 'blur(48px)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 w-full grid items-center px-5 py-6 gap-8 md:px-12 md:py-8 lg:px-20 lg:py-10 hero-grid">

        {/* LEFT — copy */}
        <div>
          <div className="flex items-center gap-3 mb-4 md:mb-6">
            <div className="w-6 md:w-8 h-px bg-brand-blue flex-shrink-0" />
            <span className="text-xs md:text-sm font-semibold tracking-[0.14em] uppercase text-brand-blue">
              Brand Presentation
            </span>
          </div>

          <h1
            className="font-serif font-light text-brand-black mb-4 md:mb-5"
            style={{ fontSize: 'clamp(36px, 6.5vw, 84px)', lineHeight: 1.05, letterSpacing: '-0.01em' }}
          >
            Show Up and<br /><em className="not-italic text-brand-blue">Stand Out.</em>
          </h1>

          <p className="text-brand-mid mb-8 md:mb-10 max-w-lg" style={{ fontSize: 'clamp(16px, 2vw, 20px)', fontWeight: 300, lineHeight: 1.75 }}>
            Professional displays, backdrops, and event kits — designed to make your brand impossible to ignore.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8">
            <a
              href="#contact"
              className="group bg-brand-blue text-white font-semibold tracking-[0.08em] uppercase px-8 py-4 md:px-10 md:py-5 text-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(30,155,215,0.4)] inline-flex items-center gap-3"
            >
              Get a Quote
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">
                <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>

        {/* RIGHT — stacked cards (hidden on small mobile, shown md+) */}
        <div className="hidden md:flex justify-center items-center relative">
          {/* Dot grid behind cards */}
          <div
            className="absolute pointer-events-none"
            style={{
              top: '-10%', left: '-5%', right: '-10%', bottom: '-10%',
              backgroundImage: 'radial-gradient(circle, rgba(30,155,215,0.35) 2px, transparent 2px)',
              backgroundSize: '32px 32px',
              maskImage: 'radial-gradient(ellipse 90% 85% at 60% 50%, black 40%, transparent 100%)',
              WebkitMaskImage: 'radial-gradient(ellipse 90% 85% at 60% 50%, black 40%, transparent 100%)',
            }}
            aria-hidden="true"
          />

          <div style={{ padding: '24px 100px 80px 16px' }}>
            <div className="hero-stack">
              <div className="hero-card hero-card-4">
                <Image src="/hero3.png" alt="" fill className="object-cover object-center" sizes="480px" />
              </div>
              <div className="hero-card hero-card-3">
                <Image src="/hero2.png" alt="" fill className="object-cover object-center" sizes="480px" />
              </div>
              <div className="hero-card hero-card-2">
                <Image src="/hero.png" alt="" fill className="object-cover object-center" sizes="480px" />
              </div>
              <div className="hero-card hero-card-1">
                <Image src="/hero0.png" alt="Standwell branded display" fill className="object-cover object-center" priority sizes="480px" />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile-only: single image card */}
        <div className="md:hidden w-full">
          <div
            className="relative w-full overflow-hidden"
            style={{
              borderRadius: '20px',
              aspectRatio: '4/3',
              boxShadow: '0 20px 60px rgba(10,10,10,0.12), 0 0 0 1.5px rgba(30,155,215,0.4), 0 0 24px 6px rgba(30,155,215,0.2)',
            }}
          >
            <Image src="/hero0.png" alt="Standwell branded display" fill className="object-cover object-center" priority sizes="100vw" />
          </div>
        </div>
      </div>

      <style jsx global>{`
        .hero-grid {
          grid-template-columns: 1fr;
        }
        @media (min-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr 1fr;
            gap: 48px;
          }
        }

        .hero-stack {
          position: relative;
          width: 260px;
          height: 320px;
          overflow: visible;
        }

        @media (min-width: 1024px) {
          .hero-stack {
            width: 320px;
            height: 395px;
          }
        }

        @media (min-width: 1280px) {
          .hero-stack {
            width: 360px;
            height: 445px;
          }
        }

        .hero-card {
          position: absolute;
          inset: 0;
          border-radius: 24px;
          overflow: hidden;
          background: #fff;
          border: 1px solid rgba(10,10,10,0.06);
          transition: transform 400ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .hero-card-1 {
          z-index: 4;
          transform: translate(0px, 0px) scale(1);
          box-shadow:
            0 20px 50px rgba(10,10,10,0.12),
            0 8px 18px rgba(10,10,10,0.08),
            0 0 0 1.5px rgba(30,155,215,0.5),
            0 0 20px 4px rgba(30,155,215,0.3),
            0 0 44px 10px rgba(30,155,215,0.15);
        }

        .hero-card-2 {
          z-index: 3;
          transform: translate(36px, 30px) scale(0.975);
          box-shadow:
            0 14px 34px rgba(10,10,10,0.09),
            0 4px 10px rgba(10,10,10,0.05),
            0 0 0 1px rgba(30,155,215,0.25),
            0 0 12px 2px rgba(30,155,215,0.12);
        }

        .hero-card-3 {
          z-index: 2;
          transform: translate(72px, 60px) scale(0.95);
          box-shadow:
            0 10px 24px rgba(10,10,10,0.07),
            0 2px 6px rgba(10,10,10,0.04),
            0 0 0 1px rgba(30,155,215,0.15),
            0 0 8px 2px rgba(30,155,215,0.08);
        }

        .hero-card-4 {
          z-index: 1;
          transform: translate(108px, 90px) scale(0.925);
          box-shadow:
            0 6px 16px rgba(10,10,10,0.06),
            0 2px 4px rgba(10,10,10,0.03),
            0 0 0 1px rgba(30,155,215,0.1),
            0 0 6px 1px rgba(30,155,215,0.06);
        }

        /* Group hover: disperse cards along the same offset axis, no scale or z-index change */
        .hero-stack:hover .hero-card-1 {
          transform: translate(0px, 0px) scale(1);
        }

        .hero-stack:hover .hero-card-2 {
          transform: translate(54px, 45px) scale(0.975);
        }

        .hero-stack:hover .hero-card-3 {
          transform: translate(108px, 90px) scale(0.95);
        }

        .hero-stack:hover .hero-card-4 {
          transform: translate(162px, 135px) scale(0.925);
        }
      `}</style>
    </section>
  )
}
