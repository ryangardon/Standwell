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
            entry.target.querySelectorAll('.reveal').forEach((el) => el.classList.add('visible'))
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
        const name = data.get('name') as string
        const email = data.get('email') as string
        const product = data.get('product') as string
        const details = data.get('details') as string
        const subject = encodeURIComponent(`New inquiry — ${product}`)
        const body = encodeURIComponent(
          `Name: ${name}\nEmail: ${email}\nService: ${product}\n\nMessage:\n${details}`
        )
        window.location.href = `mailto:hello@standwelldisplays.com?subject=${subject}&body=${body}`
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
        err instanceof Error
          ? err.message
          : 'Something went wrong. Please email us directly.'
      )
    }
  }

  return (
    <section id="quote" ref={sectionRef} className="bg-[#F9FAFB] py-32 border-t border-zinc-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left — copy */}
          <div className="lg:sticky lg:top-32">
            <p className="reveal text-brand-blue text-sm font-medium tracking-widest uppercase mb-4">
              Get started
            </p>
            <h2 className="reveal reveal-delay-1 font-display font-bold text-brand-black leading-tight tracking-tight mb-6" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)' }}>
              Let's talk about<br />your brand.
            </h2>
            <p className="reveal reveal-delay-2 text-brand-mid text-lg leading-relaxed mb-10">
              Tell us what you're working on. We'll get back to you within 24 hours with a recommendation.
            </p>

            <div className="reveal reveal-delay-3 space-y-5">
              {[
                { icon: '↩', label: 'Response within 24 hours' },
                { icon: '→', label: 'Typical delivery in 2–4 weeks' },
                { icon: '◎', label: 'No commitment to inquire' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <span className="text-brand-blue text-base w-4 text-center">{item.icon}</span>
                  <span className="text-brand-mid text-sm">{item.label}</span>
                </div>
              ))}
            </div>

            <div className="reveal reveal-delay-4 mt-10 pt-8 border-t border-zinc-200">
              <p className="text-sm text-brand-mid">
                Prefer email?{' '}
                <a
                  href="mailto:hello@standwelldisplays.com"
                  className="text-brand-blue hover:underline underline-offset-4"
                >
                  hello@standwelldisplays.com
                </a>
              </p>
            </div>
          </div>

          {/* Right — form */}
          <div className="reveal reveal-delay-2">
            {state === 'success' ? (
              <div className="flex flex-col items-start gap-4 p-10 bg-white border border-zinc-100 rounded-sm shadow-sm">
                <div className="p-3 bg-brand-blue/10 rounded-full">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M5 12L9.5 16.5L19 7" stroke="#1E9BD7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="font-display text-2xl font-bold text-brand-black">
                  You're all set.
                </h3>
                <p className="text-brand-mid leading-relaxed">
                  We got your message and will be in touch within 24 hours.
                </p>
                <button
                  onClick={() => setState('idle')}
                  className="mt-2 text-brand-blue text-sm font-medium hover:underline underline-offset-4"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white border border-zinc-100 rounded-sm shadow-sm p-8 sm:p-10 space-y-6"
                noValidate
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-brand-black mb-1.5">
                    Name <span className="text-brand-blue">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Alex Johnson"
                    className="w-full bg-white border border-zinc-200 rounded-sm px-4 py-3 text-sm text-brand-black placeholder:text-zinc-400 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-brand-black mb-1.5">
                    Email <span className="text-brand-blue">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="alex@yourcompany.com"
                    className="w-full bg-white border border-zinc-200 rounded-sm px-4 py-3 text-sm text-brand-black placeholder:text-zinc-400 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="product" className="block text-sm font-semibold text-brand-black mb-1.5">
                    What do you need? <span className="text-brand-blue">*</span>
                  </label>
                  <select
                    id="product"
                    name="product"
                    required
                    className="w-full bg-white border border-zinc-200 rounded-sm px-4 py-3 text-sm text-brand-black focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-colors appearance-none"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4 6L8 10L12 6' stroke='%236B7280' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round'/%3E%3C/svg%3E")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 16px center',
                    }}
                  >
                    <option value="">Select...</option>
                    <option value="Branded Merchandise">Branded Merchandise</option>
                    <option value="Branded Environments">Branded Environments</option>
                    <option value="Sales Materials">Sales Materials</option>
                    <option value="All of the above">All of the above</option>
                    <option value="Not sure yet">Not sure yet</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="details" className="block text-sm font-semibold text-brand-black mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="details"
                    name="details"
                    rows={5}
                    placeholder="Tell us about your company, goals, timeline, and budget — whatever you know."
                    className="w-full bg-white border border-zinc-200 rounded-sm px-4 py-3 text-sm text-brand-black placeholder:text-zinc-400 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-colors resize-none"
                  />
                </div>

                {state === 'error' && (
                  <p className="text-red-600 text-sm bg-red-50 border border-red-100 rounded-sm px-4 py-3">
                    {errorMsg || 'Something went wrong. Please try again or email us directly.'}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={state === 'submitting'}
                  className="w-full bg-brand-black hover:bg-zinc-800 disabled:opacity-60 text-white font-semibold text-base py-4 rounded-sm transition-all duration-200 hover:shadow-lg flex items-center justify-center gap-2"
                >
                  {state === 'submitting' ? (
                    <>
                      <svg className="animate-spin" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="2" strokeOpacity="0.3"/>
                        <path d="M8 2a6 6 0 0 1 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    'Get Started'
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
