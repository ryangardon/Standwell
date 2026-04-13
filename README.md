# Standwell Website

Next.js 14 + Tailwind CSS website for [standwelldisplays.com](https://standwelldisplays.com).

## Brand Positioning

Standwell is a **brand presentation consultancy** for growing companies. We help businesses show up professionally at every touchpoint:

- **Branded Merchandise & Swag** — Curated apparel, welcome kits, promotional products
- **Branded Environments** — Office signage, displays, showroom setups
- **Sales & Marketing Materials** — Presentation tools, sales kits, leave-behinds

**Tagline:** "Your brand, everywhere it matters."

**Target Customer:** Marketing managers, HR/People leads, founders, and ops teams at companies with 10-200 employees who want cohesive brand presentation without managing multiple vendors.

## Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Push this repo to GitHub
2. Import the repo in [vercel.com/new](https://vercel.com/new)
3. Add environment variables (see below)
4. Deploy — done

## Environment Variables

Copy `.env.local.example` to `.env.local` and fill in your values.

### Formspree (contact form)

1. Go to [formspree.io](https://formspree.io) and create a free account
2. Create a new form — set the email to `hello@standwelldisplays.com`
3. Copy your form ID from the endpoint URL (e.g. `https://formspree.io/f/xabc1234` → ID is `xabc1234`)
4. Add to Vercel: **Settings → Environment Variables → `NEXT_PUBLIC_FORMSPREE_ID`**

Without `NEXT_PUBLIC_FORMSPREE_ID`, the form falls back to opening the user's email client with a pre-filled message.

### Google Analytics (optional)

Add `NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX` to Vercel environment variables, then uncomment the GA snippet in `app/layout.tsx`.

## Local Development

```bash
npm install
cp .env.local.example .env.local   # fill in your Formspree ID
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

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
  Products.tsx      # Service category cards (was product cards)
  WhyStandwell.tsx  # Value props
  QuoteForm.tsx     # Contact/quote form (Formspree)
  Footer.tsx        # Footer
```

## Customization

- **Colors:** Defined in `tailwind.config.ts` under `theme.extend.colors.brand`
- **Fonts:** Space Grotesk (display) + DM Sans (body) via `next/font/google` in `app/layout.tsx`
- **Form fields:** Edit `components/QuoteForm.tsx`
- **Services:** Edit the `products` array in `components/Products.tsx` (rename to services)

## Brand Guidelines

- **Voice:** Warm, direct, no-BS — a knowledgeable partner, not a corporate pitch
- **Promise:** Simple, professional brand presentation without the complexity
- **Differentiation:** Curated recommendations (not overwhelming catalogs), consultative approach (not just order-taking)
