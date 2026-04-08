# Standwell Website

Next.js 14 + Tailwind CSS website for [standwelldisplays.com](https://standwelldisplays.com).

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
  Hero.tsx          # Dark hero with display illustration + CTA
  TrustBar.tsx      # Blue trust signal strip
  Products.tsx      # 2×2 product card grid
  WhyStandwell.tsx  # 3-column value props
  QuoteForm.tsx     # Contact/quote form (Formspree)
  Footer.tsx        # Dark footer
```

## Customization

- **Colors:** Defined in `tailwind.config.ts` under `theme.extend.colors.brand`
- **Fonts:** Space Grotesk (display) + DM Sans (body) via `next/font/google` in `app/layout.tsx`
- **Form fields:** Edit `components/QuoteForm.tsx`
- **Products:** Edit the `products` array in `components/Products.tsx`
