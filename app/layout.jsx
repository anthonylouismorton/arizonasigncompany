import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Arizona Sign Company',
  description: 'Sign Manufacturing and Crane Service',
  keywords: 'signs, led boards, outdoor billboards, crane service, Arizona Sign Company, Arizona Sign Co'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel='shortcut icon' href='/tabLogo.jpg'/>
      </head>
      <body 
        className={inter.className}
        // suppressHydrationWarning={true}
        >
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
