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
        // Fallback: open email client
        const name = data.get('name') as string
        const email = data.get('email') as string
        const product = data.get('product') as string
        const details = data.get('details') as string
        const subject = encodeURIComponent(`Quote Request — ${product}`)
        const body = encodeURIComponent(
          `Name: ${name}\nEmail: ${email}\nProduct: ${product}\n\nDetails:\n${details}`
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
    <section id="quote" ref={sectionRef} className="bg-white py-28 border-t border-zinc-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left — copy */}
          <div className="lg:sticky lg:top-32">
            <p className="reveal text-brand-blue text-sm font-medium tracking-widest uppercase mb-3">
              Get a quote
            </p>
            <h2 className="reveal reveal-delay-1 font-display text-4xl sm:text-5xl font-bold text-brand-black leading-tight tracking-tight mb-5">
              Get a quote in 24 hours
            </h2>
            <p className="reveal reveal-delay-2 text-brand-mid text-lg leading-relaxed mb-8">
              Tell us what you need. We&apos;ll get back to you with pricing and product recommendations — no sales pressure, no confusing configurators.
            </p>

            <div className="reveal reveal-delay-3 space-y-4">
              {[
                { label: 'Response time', value: 'Within 24 hours' },
                { label: 'Shipping', value: '5–7 business days (rush available)' },
                { label: 'Payment', value: 'Stripe, invoice, or bank transfer' },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="mt-0.5 flex-shrink-0"
                    aria-hidden="true"
                  >
                    <path
                      d="M3 8L6.5 11.5L13 5"
                      stroke="#1E9BD7"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-sm text-brand-mid">
                    <span className="font-semibold text-brand-black">{item.label}:</span>{' '}
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            <div className="reveal reveal-delay-4 mt-8 pt-8 border-t border-zinc-100">
              <p className="text-sm text-brand-mid">
                Prefer to just email?{' '}
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
              <div className="flex flex-col items-start gap-4 p-10 bg-brand-gray border border-zinc-100 rounded-sm">
                <div className="p-3 bg-brand-blue/10 rounded-full">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M5 12L9.5 16.5L19 7"
                      stroke="#1E9BD7"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="font-display text-2xl font-bold text-brand-black">
                  You&apos;re all set.
                </h3>
                <p className="text-brand-mid leading-relaxed">
                  We got your request and we&apos;ll be in touch within 24 hours with pricing.
                  Check your inbox — and your spam folder just in case.
                </p>
                <button
                  onClick={() => setState('idle')}
                  className="mt-2 text-brand-blue text-sm font-medium hover:underline underline-offset-4"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-brand-gray border border-zinc-100 rounded-sm p-8 sm:p-10 space-y-6"
                noValidate
              >
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-brand-black mb-1.5"
                  >
                    Your name <span className="text-brand-blue">*</span>
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

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-brand-black mb-1.5"
                  >
                    Work email <span className="text-brand-blue">*</span>
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

                {/* Product */}
                <div>
                  <label
                    htmlFor="product"
                    className="block text-sm font-semibold text-brand-black mb-1.5"
                  >
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
                    <option value="">Select a product...</option>
                    <option value="Fabric display">Fabric display (tension fabric backwall)</option>
                    <option value="Backlit display">Backlit display (LED lightbox)</option>
                    <option value="Portable kit">Portable kit (complete booth package)</option>
                    <option value="Banner stand">Banner stand (retractable)</option>
                    <option value="Accessories">Accessories (lights, throws, counters)</option>
                    <option value="Multiple products">Multiple products</option>
                    <option value="Not sure — help me choose">Not sure — help me choose</option>
                  </select>
                </div>

                {/* Details */}
                <div>
                  <label
                    htmlFor="details"
                    className="block text-sm font-semibold text-brand-black mb-1.5"
                  >
                    Tell us about your event
                  </label>
                  <textarea
                    id="details"
                    name="details"
                    rows={4}
                    placeholder="Space size, event date, quantity, any brand assets you have — whatever you know. The more detail, the faster we can quote."
                    className="w-full bg-white border border-zinc-200 rounded-sm px-4 py-3 text-sm text-brand-black placeholder:text-zinc-400 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-colors resize-none"
                  />
                </div>

                {/* Error */}
                {state === 'error' && (
                  <p className="text-red-600 text-sm bg-red-50 border border-red-100 rounded-sm px-4 py-3">
                    {errorMsg ||
                      'Something went wrong. Please try again or email us directly.'}
                  </p>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={state === 'submitting'}
                  className="w-full bg-brand-black hover:bg-zinc-800 disabled:opacity-60 text-white font-semibold text-base py-4 rounded-sm transition-all duration-200 hover:shadow-lg flex items-center justify-center gap-2"
                >
                  {state === 'submitting' ? (
                    <>
                      <svg
                        className="animate-spin"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        aria-hidden="true"
                      >
                        <circle
                          cx="8"
                          cy="8"
                          r="6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeOpacity="0.3"
                        />
                        <path
                          d="M8 2a6 6 0 0 1 6 6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Get Your Quote
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M3 8h10M9 4l4 4-4 4"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-zinc-400">
                  No spam. No sales calls unless you want one. Just a fast, honest quote.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
