import Image from 'next/image'

const productLinks = [
  { label: 'Fabric Displays', href: '#products' },
  { label: 'Backlit Displays', href: '#products' },
  { label: 'Portable Kits', href: '#products' },
  { label: 'Banner Stands', href: '#products' },
  { label: 'Accessories', href: '#products' },
]

const companyLinks = [
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Get a Quote', href: '#quote' },
  { label: 'Contact', href: 'mailto:hello@standwelldisplays.com' },
]

function StripeBadge() {
  return (
    <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 border border-white/10 rounded-sm">
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
        <rect width="14" height="14" rx="3" fill="#635BFF"/>
        <path d="M6.2 5.3C6.2 4.9 6.5 4.7 7 4.7c.7 0 1.5.2 2.1.6V3.5C8.5 3.2 7.8 3 7 3c-1.7 0-2.8.9-2.8 2.4 0 2.3 3.2 1.9 3.2 2.9 0 .4-.4.6-.9.6-.8 0-1.7-.3-2.4-.8v1.8c.7.3 1.5.5 2.4.5 1.7 0 2.9-.9 2.9-2.4-.1-2.5-3.2-2-3.2-3z" fill="white"/>
      </svg>
      <span className="text-white/40 text-xs font-medium">Stripe</span>
    </div>
  )
}

function SSLBadge() {
  return (
    <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 border border-white/10 rounded-sm">
      <svg width="12" height="14" viewBox="0 0 12 14" fill="none" aria-hidden="true">
        <path d="M6 1L1 3v4c0 2.8 2.1 5.4 5 6 2.9-.6 5-3.2 5-6V3L6 1Z" stroke="rgba(255,255,255,0.4)" strokeWidth="1.25" strokeLinejoin="round"/>
        <path d="M4 7l1.5 1.5L8 5" stroke="rgba(255,255,255,0.4)" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <span className="text-white/40 text-xs font-medium">SSL Secure</span>
    </div>
  )
}

function GuaranteeBadge() {
  return (
    <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 border border-white/10 rounded-sm">
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
        <path d="M7 1.5L2 3.5v3C2 9.3 4.2 12 7 12.5 9.8 12 12 9.3 12 6.5v-3L7 1.5Z" stroke="rgba(30,155,215,0.6)" strokeWidth="1.25" strokeLinejoin="round"/>
        <path d="M4.5 7l2 2 3-3" stroke="rgba(30,155,215,0.6)" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <span className="text-white/40 text-xs font-medium">Satisfaction Guaranteed</span>
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="bg-brand-black border-t border-white/10">
      {/* Main footer */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="flex items-center gap-2.5 mb-3" aria-label="Standwell home">
              <Image
                src="/logo-icon.png"
                alt=""
                width={26}
                height={26}
                className="w-6.5 h-6.5 object-contain flex-shrink-0"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
              <span className="font-display text-xl font-bold tracking-tight leading-none">
                <span className="text-brand-blue">Stand</span>
                <span className="text-white">Well</span>
              </span>
            </a>
            <p className="text-white/40 text-sm leading-relaxed">
              Professional portable displays. Shipped fast. No markup.
            </p>
          </div>

          {/* Products */}
          <div>
            <p className="text-white/60 text-xs font-semibold tracking-widest uppercase mb-4">
              Products
            </p>
            <ul className="space-y-2.5">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/40 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-white/60 text-xs font-semibold tracking-widest uppercase mb-4">
              Company
            </p>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/40 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-white/60 text-xs font-semibold tracking-widest uppercase mb-4">
              Contact
            </p>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="mailto:hello@standwelldisplays.com"
                  className="text-white/40 hover:text-white text-sm transition-colors duration-200 break-all"
                >
                  hello@standwelldisplays.com
                </a>
              </li>
              <li>
                <span className="text-white/30 text-sm">Foster City, CA</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-5">
          <p className="text-white/25 text-xs">
            © {new Date().getFullYear()} Standwell — RSG Brands LLC. All rights reserved.
          </p>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center gap-2">
            <StripeBadge />
            <SSLBadge />
            <GuaranteeBadge />
          </div>
        </div>
      </div>
    </footer>
  )
}
