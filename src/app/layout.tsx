import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Nav from '@/components/Nav'
import AuthProvider from '@/context/AuthProvider'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NextJS-Auth-Cognite'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <Nav />
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}
