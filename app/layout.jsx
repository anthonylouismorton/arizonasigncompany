import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './navbar'

const inter = Inter({ subsets: ['latin'] })

const siteUrl = 'https://arizonasignco.com'

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Arizona Sign Company | Custom Signs & Crane Service',
    template: '%s | Arizona Sign Company',
  },
  description: 'Arizona Sign Company has been crafting high-quality custom signs, billboards, channel letters, and LED displays since 1945. Serving Arizona, Nevada, and California with sign fabrication, installation, and crane services.',
  openGraph: {
    type: 'website',
    siteName: 'Arizona Sign Company',
    url: siteUrl,
    title: 'Arizona Sign Company | Custom Signs & Crane Service',
    description: 'Arizona Sign Company has been crafting high-quality custom signs, billboards, channel letters, and LED displays since 1945. Serving Arizona, Nevada, and California.',
    images: [
      {
        url: '/fiveBelowResize.jpg',
        width: 1200,
        height: 630,
        alt: 'Arizona Sign Company — Custom Signs & Crane Service',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arizona Sign Company | Custom Signs & Crane Service',
    description: 'Custom signs, billboards, LED displays, installation, and crane services. Serving AZ, NV, and CA since 1945.',
    images: ['/fiveBelowResize.jpg'],
  },
  alternates: {
    canonical: `${siteUrl}/`,
  },
  robots: {
    index: true,
    follow: true,
  },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Arizona Sign Company',
  url: siteUrl,
  logo: `${siteUrl}/tabLogo.jpg`,
  image: `${siteUrl}/fiveBelowResize.jpg`,
  description: 'Arizona Sign Company has been crafting high-quality custom signs, billboards, channel letters, and LED displays since 1945. Serving Arizona, Nevada, and California with sign fabrication, installation, and crane services.',
  foundingDate: '1945',
  telephone: '+1-928-753-1536',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Kingman',
    addressRegion: 'AZ',
    addressCountry: 'US',
  },
  areaServed: [
    { '@type': 'State', name: 'Arizona' },
    { '@type': 'State', name: 'Nevada' },
    { '@type': 'State', name: 'California' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Signage Products & Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Custom Sign Manufacturing' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Billboard Signs' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'LED & Digital Displays' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Sign Installation' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Crane Services' } },
    ],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel='shortcut icon' href='/tabLogo.jpg'/>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className={inter.className}>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
