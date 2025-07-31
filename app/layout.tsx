import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { EnhancedPageTransition } from "@/components/enhanced-page-transition"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Sukaina Pasha Transformational Coaching",
  description: "Navigate Change. Embrace Growth. Create Your Future.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <EnhancedPageTransition>{children}</EnhancedPageTransition>
      </body>
    </html>
  )
}
