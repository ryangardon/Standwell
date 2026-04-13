import Image from 'next/image'

const navLinks = [
  { label: 'What We Create', href: '#services' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Get Started', href: '#quote' },
]

export default function Footer() {
  return (
    <footer className="bg-brand-black border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10 mb-14">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="flex items-center gap-2.5 mb-4" aria-label="Standwell home">
              <Image
                src="/logo-icon.png"
                alt=""
                width={26}
                height={26}
                className="w-6 h-6 object-contain flex-shrink-0"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
              <span className="font-display text-xl font-bold tracking-tight leading-none">
                <span className="text-brand-blue">Stand</span>
                <span className="text-white">Well</span>
              </span>
            </a>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              Your brand presentation partners.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="text-white/50 text-xs font-semibold tracking-widest uppercase mb-5">
              Navigate
            </p>
            <ul className="space-y-3">
              {navLinks.map((link) => (
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
            <p className="text-white/50 text-xs font-semibold tracking-widest uppercase mb-5">
              Contact
            </p>
            <a
              href="mailto:hello@standwelldisplays.com"
              className="text-white/40 hover:text-white text-sm transition-colors duration-200 block"
            >
              hello@standwelldisplays.com
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <p className="text-white/20 text-xs">
            © {new Date().getFullYear()} Standwell. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
