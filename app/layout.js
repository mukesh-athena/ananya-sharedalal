import './globals.css'

export const metadata = {
  metadataBase: new URL('https://ananyasharedalal.com'),
  title: {
    default: 'Ananya Sharedalal',
    template: '%s | Ananya Sharedalal',
  },
  description:
    'Independent researcher based in Mumbai. Studying the intersection of history, media, and public belief in contemporary India.',
  keywords: [
    'Ananya Sharedalal',
    'independent researcher',
    'India',
    'Mumbai',
    'history and media',
    'Cow Urine Chronicles',
    'Gomutra research',
    'misinformation',
    'YouTube discourse',
  ],
  authors: [{ name: 'Ananya Sharedalal' }],
  creator: 'Ananya Sharedalal',
  openGraph: {
    title: 'Ananya Sharedalal',
    description:
      'Independent researcher based in Mumbai. Studying the intersection of history, media, and public belief in contemporary India.',
    url: 'https://ananyasharedalal.com',
    siteName: 'Ananya Sharedalal',
    images: [
      {
        url: '/images/home-hero.png',
        width: 1200,
        height: 630,
        alt: 'Ananya Sharedalal — Independent Researcher',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ananya Sharedalal',
    description:
      'Independent researcher based in Mumbai. Studying the intersection of history, media, and public belief in contemporary India.',
    images: ['/images/home-hero.png'],
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}