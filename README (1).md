# Standwell Website

Next.js 14 + Tailwind CSS website for [standwell.com](https://standwell.com).

---

## Brand Overview

**Standwell** is a brand presentation company. We help businesses show up well in person through portable displays, custom backdrops, and branded environments. We work with marketing teams, brand managers, and business owners who want professional results without agency complexity.

**Positioning:** The direct, straightforward alternative for businesses that need branded displays done right — fast turnaround, clear pricing, simple process.

**Tagline:** *Show up well.*

---

## What We Sell

Three product categories:

1. **Displays & Banner Stands** — retractable stands, tabletop displays, freestanding panels
2. **Backdrops & Fabric Displays** — step-and-repeats, tension fabric pop-ups, booth walls
3. **Branded Event Kits** — complete coordinated setups for events and activations

---

## Target Customer

**Primary:** Marketing Managers and Brand Managers at companies with 10–500 employees who need branded displays for events, conferences, retail, and offices.

**Sweet spot order:** $1,500–$3,500, 2–8 events per year.

---

## Website Section Order

1. Hero
2. What We Create
3. Trust / Social Proof
4. How It Works
5. Why Standwell
6. Quote Form
7. Footer

---

## Brand Guidelines

- **Voice:** Clear, direct, warm. A knowledgeable partner — not a corporate vendor, not a pitch.
- **Tone:** Professional but human. Plain language. No jargon.
- **Promise:** Professional brand presentation, simple process, on time.

---

## Brand Identity

- **Logo:** Two-tone wordmark — "Stand" in #1E9BD7, "well" in #0A0A0A
- **Primary color:** #1E9BD7 (Standwell Blue) / Hover: #1889C0 / Light: #E8F4FA
- **Typography:** Space Grotesk (display) + DM Sans (body)
- **Visual language:** Clean, confident, product-forward

---

## Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Push repo to GitHub
2. Import at [vercel.com/new](https://vercel.com/new)
3. Add environment variables
4. Deploy

---

## Environment Variables

Copy `.env.local.example` to `.env.local`.

### Formspree (contact form)

1. Create account at [formspree.io](https://formspree.io)
2. Create form → set email to `hello@standwell.com`
3. Copy form ID from endpoint URL
4. Add to Vercel: `NEXT_PUBLIC_FORMSPREE_ID`

Falls back to mailto if no ID is set.

### Google Analytics (optional)

Add `NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX` to Vercel, then uncomment GA snippet in `app/layout.tsx`.

---

## Local Development

```bash
npm install
cp .env.local.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Project Structure

```
app/
  layout.tsx        # Root layout, fonts, metadata
  page.tsx          # Page assembly
  globals.css       # Global styles, reveal animations
components/
  Header.tsx        # Sticky nav with scroll-aware background
  Hero.tsx          # Hero section with CTA
  TrustBar.tsx      # Trust signal strip
  Products.tsx      # Product/service category cards
  WhyStandwell.tsx  # Value props
  QuoteForm.tsx     # Contact/quote form (Formspree)
  Footer.tsx        # Footer
```

---

## Customization

- **Colors:** `tailwind.config.ts` under `theme.extend.colors.brand`
- **Fonts:** Space Grotesk + DM Sans via `next/font/google` in `app/layout.tsx`
- **Form fields:** `components/QuoteForm.tsx`
- **Products/services:** `components/Products.tsx`
