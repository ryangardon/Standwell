import type { Metadata } from 'next'
import { Space_Grotesk, DM_Sans } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600', '700'],
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500'],
})

export const metadata: Metadata = {
  title: 'Standwell — Portable Displays for Events & Conferences',
  description:
    'Banner stands, backdrops, fabric displays, and table throws — shipped fast, without the markup. Look professional at your next event.',
  metadataBase: new URL('https://standwelldisplays.com'),
  icons: {
    icon: '/logo-icon.png',
    shortcut: '/logo-icon.png',
    apple: '/logo-icon.png',
  },
  openGraph: {
    title: 'Standwell — Portable Displays for Events & Conferences',
    description:
      'Quality portable displays shipped fast, without the markup.',
    url: 'https://standwelldisplays.com',
    siteName: 'Standwell',
    type: 'website',
    images: [
      {
        url: '/logo-full.png',
        width: 500,
        height: 500,
        alt: 'Standwell — Portable Displays',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Standwell — Portable Displays for Events & Conferences',
    description: 'Quality portable displays shipped fast, without the markup.',
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
      className={`${spaceGrotesk.variable} ${dmSans.variable} scroll-smooth`}
    >
      <body className="font-body antialiased bg-white text-brand-black">
        {children}
      </body>
    </html>
  )
}
