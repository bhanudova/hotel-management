import Header from '@/components/Header/Header'
import { Poppins } from 'next/font/google'
import type { Metadata } from 'next'
import './globals.css'
import Footer from '@/components/Footer/Footer'
import ThemeProvider from '@/components/ThemeProvider/ThemeProvider'
import { NextAuthProvider } from '@/components/AuthProvider/AuthProvider'
import Toast from '@/components/Toast/Toast'

const poppins = Poppins({
  subsets: ['latin'], weight: ["400", "500", "700", "900"],
  style: ["italic", "normal"],
  variable: "--font--poppins"
})

export const metadata: Metadata = {
  title: 'Hotel Management App',
  description: 'Discover the best hotel rooms',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <NextAuthProvider>
          <ThemeProvider>
            <main className='font-normal'>
              <Header />
              <Toast/>
              {children}
              <Footer />
            </main>
          </ThemeProvider>
        </NextAuthProvider>
      </body>
    </html>
  )
}
