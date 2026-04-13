import type { Metadata } from 'next'
import { Space_Grotesk, DM_Sans, Cormorant_Garamond } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600', '700'],
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['300', '400', '500'],
})

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['300', '400', '500', '600'],
})

export const metadata: Metadata = {
  title: 'Standwell — Branded Products for Growing Companies',
  description:
    'One partner for everything your team and brand needs — merchandise, displays, and custom products. Sourced, coordinated, and delivered.',
  metadataBase: new URL('https://standwelldisplays.com'),
  icons: {
    icon: '/logo-icon.png',
    shortcut: '/logo-icon.png',
    apple: '/logo-icon.png',
  },
  openGraph: {
    title: 'Standwell — Branded Products for Growing Companies',
    description:
      'One partner for everything your team and brand needs — merchandise, displays, and custom products. Sourced, coordinated, and delivered.',
    url: 'https://standwelldisplays.com',
    siteName: 'Standwell',
    type: 'website',
    images: [
      {
        url: '/logo-full.png',
        width: 500,
        height: 500,
        alt: 'Standwell — Branded Products',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Standwell — Branded Products for Growing Companies',
    description: 'One partner for everything your team and brand needs — merchandise, displays, and custom products.',
    images: ['/logo-full.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${dmSans.variable} ${cormorantGaramond.variable} scroll-smooth`}
    >
      <body className="font-body antialiased bg-white text-brand-black">
        {children}
      </body>
    </html>
  )
}
