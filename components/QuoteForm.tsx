'use client'

import { useEffect, useRef, useState } from 'react'

type FormState = 'idle' | 'submitting' | 'success' | 'error'

const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID

export default function QuoteForm() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [state, setState] = useState<FormState>('idle')
  const [errorMsg, setErrorMsg] = useState('')

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

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setState('submitting')
    setErrorMsg('')

    const form = e.currentTarget
    const data = new FormData(form)

    try {
      if (!FORMSPREE_ID) {
        const firstName = data.get('firstName') as string
        const lastName = data.get('lastName') as string
        const email = data.get('email') as string
        const company = data.get('company') as string
        const product = data.get('product') as string
        const details = data.get('details') as string
        const subject = encodeURIComponent(`New inquiry — ${product}`)
        const body = encodeURIComponent(
          `Name: ${firstName} ${lastName}\nEmail: ${email}\nCompany: ${company}\nService: ${product}\n\nMessage:\n${details}`
        )
        window.location.href = `mailto:sales@standwelldisplays.com?subject=${subject}&body=${body}`
        setState('success')
        return
      }

      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })

      if (res.ok) {
        setState('success')
        form.reset()
      } else {
        const json = await res.json()
        throw new Error(json?.errors?.[0]?.message || 'Something went wrong.')
      }
    } catch (err) {
      setState('error')
      setErrorMsg(
        err instanceof Error ? err.message : 'Something went wrong. Please email us directly.'
      )
    }
  }

  const inputClass =
    'w-full px-[18px] py-[14px] text-[15px] font-light text-white outline-none transition-colors duration-200 border focus:border-white/50'
  const inputStyle = {
    background: 'rgba(255,255,255,0.08)',
    borderColor: 'rgba(255,255,255,0.15)',
    fontFamily: 'inherit',
    WebkitAppearance: 'none' as const,
  }

  return (
    <section id="contact" ref={sectionRef} className="bg-brand-blue py-16 px-5 md:py-[120px] md:px-20">
      <div className="flex flex-col md:grid md:gap-20 md:items-center" style={{ gridTemplateColumns: '1fr 1fr' }}>

        {/* Left */}
        <div className="fade-up">
          <div className="flex items-center gap-2.5 mb-5">
            <div className="w-6 h-px flex-shrink-0" style={{ background: 'rgba(255,255,255,0.3)' }} />
            <span className="text-[11px] font-medium tracking-[0.14em] uppercase" style={{ color: 'rgba(255,255,255,0.5)' }}>
              Get Started
            </span>
          </div>
          <h2
            className="font-serif font-light text-white mb-5"
            style={{ fontSize: 'clamp(40px, 5vw, 68px)', lineHeight: 1.05 }}
          >
            Let's talk about<br />your <em className="not-italic" style={{ opacity: 0.7 }}>next project.</em>
          </h2>
          <p style={{ fontSize: '18px', fontWeight: 300, color: 'rgba(255,255,255,0.6)', lineHeight: 1.75 }}>
            Tell us what you're working on. We'll get back to you within 24 hours with a recommendation — no commitment required.
          </p>

          <div className="mt-10 flex flex-col gap-3">
            {[
              'Response within 24 hours',
              'Typical delivery in 2–4 weeks',
              'No commitment to inquire',
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <div className="w-5 h-px flex-shrink-0" style={{ background: 'rgba(255,255,255,0.3)' }} />
                <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)' }}>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Form */}
        <div className="fade-up mt-10 md:mt-0">
          {state === 'success' ? (
            <div className="flex flex-col gap-4 p-10 border" style={{ background: 'rgba(255,255,255,0.08)', borderColor: 'rgba(255,255,255,0.15)' }}>
              <div className="w-8 h-8 bg-white/20 flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M2 8l4.5 4.5L14 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="font-serif text-2xl font-medium text-white">You're all set.</h3>
              <p style={{ fontSize: '14px', fontWeight: 300, color: 'rgba(255,255,255,0.6)', lineHeight: 1.75 }}>
                We got your message and will be in touch within 24 hours.
              </p>
              <button
                onClick={() => setState('idle')}
                className="text-white/60 text-sm font-medium hover:text-white transition-colors mt-2"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
              <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-col gap-2">
                  <label className="text-[11px] font-medium tracking-[0.1em] uppercase" style={{ color: 'rgba(255,255,255,0.5)' }}>
                    First Name
                  </label>
                  <input name="firstName" type="text" placeholder="Alex" required className={inputClass} style={inputStyle} />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[11px] font-medium tracking-[0.1em] uppercase" style={{ color: 'rgba(255,255,255,0.5)' }}>
                    Last Name
                  </label>
                  <input name="lastName" type="text" placeholder="Rivera" required className={inputClass} style={inputStyle} />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[11px] font-medium tracking-[0.1em] uppercase" style={{ color: 'rgba(255,255,255,0.5)' }}>
                  Work Email
                </label>
                <input name="email" type="email" placeholder="alex@company.com" required className={inputClass} style={inputStyle} />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[11px] font-medium tracking-[0.1em] uppercase" style={{ color: 'rgba(255,255,255,0.5)' }}>
                  Company
                </label>
                <input name="company" type="text" placeholder="Acme Inc." className={inputClass} style={inputStyle} />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[11px] font-medium tracking-[0.1em] uppercase" style={{ color: 'rgba(255,255,255,0.5)' }}>
                  What do you need?
                </label>
                <select
                  name="product"
                  required
                  className={inputClass}
                  style={{ ...inputStyle, backgroundImage: `url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4 6L8 10L12 6' stroke='rgba(255,255,255,0.5)' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 16px center' }}
                >
                  <option value="" disabled>Select a category</option>
                  <option value="Branded Merchandise" style={{ background: '#1E9BD7' }}>Branded Merchandise</option>
                  <option value="Displays & Signage" style={{ background: '#1E9BD7' }}>Displays &amp; Signage</option>
                  <option value="Branded Kits" style={{ background: '#1E9BD7' }}>Branded Kits</option>
                  <option value="All of the above" style={{ background: '#1E9BD7' }}>All of the above</option>
                  <option value="Not sure yet" style={{ background: '#1E9BD7' }}>Not sure yet</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[11px] font-medium tracking-[0.1em] uppercase" style={{ color: 'rgba(255,255,255,0.5)' }}>
                  Tell us more
                </label>
                <textarea
                  name="details"
                  rows={4}
                  placeholder="What are you working on? Any timeline or budget in mind?"
                  className={inputClass + ' resize-none'}
                  style={inputStyle}
                />
              </div>

              {state === 'error' && (
                <p className="text-white/80 text-sm bg-white/10 border border-white/20 px-4 py-3">
                  {errorMsg || 'Something went wrong. Please try again or email us directly.'}
                </p>
              )}

              <button
                type="submit"
                disabled={state === 'submitting'}
                className="self-start bg-white text-brand-blue text-[13px] font-medium tracking-[0.08em] uppercase px-10 py-[18px] transition-all duration-200 hover:bg-brand-blue-light disabled:opacity-60 hover:-translate-y-px flex items-center gap-2"
              >
                {state === 'submitting' ? (
                  <>
                    <svg className="animate-spin" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="2" strokeOpacity="0.3"/>
                      <path d="M7 2a5 5 0 0 1 5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    Sending...
                  </>
                ) : (
                  'Send Inquiry'
                )}
              </button>

              <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.35)' }}>
                Or email us directly at{' '}
                <a href="mailto:sales@standwelldisplays.com" style={{ color: 'rgba(255,255,255,0.5)' }} className="hover:text-white transition-colors">
                  sales@standwelldisplays.com
                </a>
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
