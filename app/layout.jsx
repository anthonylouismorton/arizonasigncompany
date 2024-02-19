import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Arizona Sign Company',
  description: 'Sign Manufacturing and Crane Service',
  keywords: 'arizona sign company, arizona sign companies, az sign company, kingman signs, arizona signs'
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
