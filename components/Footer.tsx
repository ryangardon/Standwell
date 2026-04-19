import Image from 'next/image'

export default function Footer() {
  return (
    <>
      <footer className="bg-brand-black px-5 py-12 md:px-20 md:py-16 grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12 items-start">
        {/* Brand */}
        <div className="md:col-span-1">
          <a href="#" className="flex items-center mb-5 no-underline group" aria-label="Standwell home">
            <Image
              src="/logo.png"
              alt="StandWell"
              width={160}
              height={160}
              className="h-14 w-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-200"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
          </a>
          <p style={{ fontSize: '13px', fontWeight: 300, color: 'rgba(255,255,255,0.4)', lineHeight: 1.65, maxWidth: '200px' }}>
            Professional portable displays. Shipped fast. No markup.
          </p>
        </div>

        {/* Products */}
        <div>
          <p style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: '20px' }}>
            Products
          </p>
          <ul className="list-none m-0 p-0 flex flex-col gap-3">
            {[
              'Banner Stands',
              'Pop-Up Backdrops',
              'Tension Fabric Displays',
              'Table Throws',
              'Booth Kits',
            ].map((label) => (
              <li key={label}>
                <a
                  href="#contact"
                  className="no-underline transition-colors duration-200 hover:text-white"
                  style={{ fontSize: '14px', fontWeight: 300, color: 'rgba(255,255,255,0.55)' }}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <p style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: '20px' }}>
            Company
          </p>
          <ul className="list-none m-0 p-0 flex flex-col gap-3">
            {[
              { label: 'Why Standwell', href: '#why' },
              { label: 'How It Works', href: '#process' },
              { label: 'Get a Quote', href: '#contact' },
            ].map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="no-underline transition-colors duration-200 hover:text-white"
                  style={{ fontSize: '14px', fontWeight: 300, color: 'rgba(255,255,255,0.55)' }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: '20px' }}>
            Contact
          </p>
          <ul className="list-none m-0 p-0 flex flex-col gap-3">
            <li>
              <a
                href="mailto:hello@standwelldisplays.com"
                className="no-underline transition-colors duration-200 hover:text-white"
                style={{ fontSize: '14px', fontWeight: 300, color: 'rgba(255,255,255,0.55)' }}
              >
                hello@standwelldisplays.com
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="no-underline transition-colors duration-200 hover:text-white"
                style={{ fontSize: '14px', fontWeight: 300, color: 'rgba(255,255,255,0.55)' }}
              >
                Request a Quote
              </a>
            </li>
            <li>
              <span style={{ fontSize: '13px', fontWeight: 300, color: 'rgba(255,255,255,0.3)' }}>
                Foster City, CA
              </span>
            </li>
          </ul>
        </div>
      </footer>

      {/* Footer bottom bar */}
      <div
        className="bg-brand-black flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 px-5 md:px-20"
        style={{ padding: '20px', borderTop: '1px solid rgba(255,255,255,0.07)' }}
      >
        <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.25)' }}>
          © {new Date().getFullYear()} Standwell — RSG Brands LLC. All rights reserved.
        </span>
        <a
          href="mailto:hello@standwelldisplays.com"
          className="no-underline transition-colors duration-200 hover:text-white"
          style={{ fontSize: '12px', color: 'rgba(255,255,255,0.35)' }}
        >
          hello@standwelldisplays.com
        </a>
      </div>
    </>
  )
}
