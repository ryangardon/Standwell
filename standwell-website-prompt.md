# Standwell Website Build Prompt

## Project Overview

Build a high-end, conversion-focused landing page for **Standwell** — a portable display company selling banner stands, backdrops, fabric displays, and table throws to startups and SMBs.

**Domain:** standwelldisplays.com  
**Deploy to:** Vercel  
**Stack:** Next.js + Tailwind CSS (or clean HTML/CSS/JS if simpler)

---

## Brand Identity

**Logo:** "Standwell" — "Stand" in #1E9BD7 (blue), "well" in black  
**Brand personality:** Direct, no-BS, helpful. Like texting a friend who knows this stuff.  
**Tone:** Confident but not corporate. We're the anti-exhibit-house.

**Color palette:**
- Primary blue: #1E9BD7
- Black: #0A0A0A
- White: #FFFFFF
- Light gray: #F9FAFB
- Medium gray: #6B7280

---

## Target Customer (ICP)

- Marketing managers and founders at startups/SMBs (10-200 employees)
- Preparing for conferences, expos, recruiting events, retail pop-ups
- Budget-conscious but want to look professional
- First-time or occasional buyers who don't want to navigate the confusing display industry
- Searching things like "banner stand for conference" or "popup backdrop for event"

---

## Site Structure (Single Page)

### 1. Header
- Logo (Standwell — styled as described)
- Single CTA button: "Get a Quote"
- Sticky on scroll

### 2. Hero Section
- **Headline:** "Portable displays that make your brand stand out"
- **Subhead:** "Banner stands, backdrops, and pop-ups — quality displays shipped fast, without the markup."
- **CTA:** "Get a Quote" button (scrolls to contact form)
- **Visual:** Hero image or subtle animation — think clean product photography or abstract geometric shapes that suggest displays/stands. NOT cheesy stock photos of people at trade shows.

### 3. Trust Bar
- Simple line: "Simple pricing · Fast shipping · No hassle"
- Or logos if we had them (placeholder for future)

### 4. Products Section
Four product cards with icons or product imagery:

1. **Retractable Banner Stands**
   - "The go-to for any event. Easy setup, high impact, built to last."

2. **Pop-Up Backdrops**
   - "Step and repeat, photo ops, booth walls. Make every angle Instagrammable."

3. **Fabric Tension Displays**
   - "Modern look, wrinkle-resistant, premium feel. Stand out from the vinyl crowd."

4. **Table Throws**
   - "Branded tablecloths for any 6ft or 8ft table. Instant polish, zero effort."

**Design note:** Cards should feel premium. Consider hover animations, subtle shadows, or product mockup images.

### 5. Why Standwell Section
Three value props:

1. **No middleman markup**
   - "We work direct with manufacturers, so you get quality products at fair prices."

2. **Fast turnaround**
   - "Most orders ship within days, not weeks. We know you've got deadlines."

3. **Actually helpful**
   - "Real humans who answer questions and help you pick the right product."

### 6. Social Proof Section (Optional/Placeholder)
- "Trusted by 50+ brands" with placeholder logos or testimonial cards
- Can be hidden initially and added later when we have real testimonials

### 7. Contact / Quote Form
**Fields:**
- Name
- Email
- What do you need? (dropdown: Banner stand, Backdrop, Fabric display, Table throw, Multiple products, Not sure yet)
- Tell us more (textarea — event date, quantity, size, etc.)
- Submit button: "Get Your Quote"

**Form handling:** Use Formspree, Netlify Forms, or a simple API route

**Design note:** This is the money section. Make it feel easy and inviting, not like a government form.

### 8. Footer
- Logo
- Email: hello@standwelldisplays.com
- © 2025 Standwell. All rights reserved.

---

## Design Requirements

### Must Have:
- **Premium feel** — this should look like a legit e-commerce brand, not a template
- **Fast load time** — optimize images, minimal JS
- **Mobile-first responsive** — most visitors will be on phones
- **Smooth scroll behavior** — anchor links to sections
- **Subtle animations** — fade-in on scroll, hover states, button interactions
- **Great typography** — use a distinctive font pairing (not Inter/Roboto). Consider: 
  - Display: Clash Display, Cabinet Grotesk, or similar
  - Body: DM Sans, Satoshi, or similar

### Nice to Have:
- Parallax or subtle motion effects in hero
- Product cards with image swap or 3D tilt on hover
- Animated gradient or mesh background in hero
- Micro-interactions on form inputs
- Dark mode toggle (optional)

### Avoid:
- Generic stock photos of people at trade shows
- Purple/blue gradients (overused AI aesthetic)
- Cookie-cutter SaaS template vibes
- Cluttered layouts — keep it clean and spacious
- Tiny text or poor contrast

---

## Technical Requirements

- Deploy-ready for Vercel
- SEO basics: meta title, description, OG image
- Accessible: proper heading hierarchy, form labels, alt text
- Contact form connected to email (Formspree or similar)
- Google Analytics ready (placeholder for GA4 tag)

---

## Reference Sites (Vibe Check)

Look at these for inspiration on premium, clean design:
- Linear.app (clean, dark, premium SaaS)
- Vercel.com (modern, fast, confident)
- Rapha.cc (premium product brand)
- Aesop.com (minimal, editorial, sophisticated)

We're not copying these — but the level of craft and attention to detail is what we're aiming for.

---

## Deliverables

1. Complete Next.js project (or HTML/CSS/JS) ready to deploy
2. All assets optimized
3. README with deployment instructions
4. Form connected and working

---

## Final Note

This site needs to do one job: make a startup marketing manager trust us enough to fill out the quote form. Every design decision should serve that goal. When in doubt, choose clarity over cleverness.

Let's build something that looks like experts made it — because they did.
