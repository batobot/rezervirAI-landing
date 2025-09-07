import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'RezervirAI - Smart VIP Table Reservations for Clubs & Events',
  description: 'AI-powered WhatsApp reservation system for VIP tables and bottle service at clubs and event venues. Automated payment verification and guest management for nightlife excellence.',
  keywords: 'VIP table reservations, bottle service, nightclub booking, WhatsApp bot, AI automation, payment verification, nightlife tech, event venues',
  authors: [{ name: 'RezervirAI Team' }],
  creator: 'RezervirAI',
  publisher: 'RezervirAI',
  metadataBase: new URL('https://rezervirai.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'RezervirAI - Smart VIP Table Reservations for Clubs & Events',
    description: 'AI-powered WhatsApp reservation system for VIP tables at clubs and event venues. Automated bottle service booking and payment verification.',
    url: 'https://rezervirai.com',
    siteName: 'RezervirAI',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'RezervirAI - Smart Reservations Platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RezervirAI - Smart VIP Table Reservations for Clubs & Events',
    description: 'AI-powered WhatsApp reservation system for VIP tables at clubs and event venues. Automated bottle service booking and payment verification.',
    images: ['/og.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
