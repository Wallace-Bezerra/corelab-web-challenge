import StyledComponentsRegistry from '@/lib/register'
import { Inter } from 'next/font/google'
import React from 'react'

export const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CoreNotes',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  )
}
