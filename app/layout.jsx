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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel='shortcut icon' href='/tabLogo.jpg'/>
      </head>
      <body
        className={inter.className}
        suppressHydrationWarning={true}
        >
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
