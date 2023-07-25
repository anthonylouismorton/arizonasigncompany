import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Arizona Sign Company',
  description: 'Sign Manufacutring and Crane Service',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
