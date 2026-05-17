import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Onest } from "next/font/google"

const onest = Onest({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-onest",
})

export const metadata: Metadata = {
  title: "Shrinivas Inamdar — Developer & Builder",
  description:
    "Portfolio of Shrinivas Inamdar — full-stack developer, startup builder, event host, and creative technologist from Goa, India.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${onest.variable} font-sans antialiased overflow-x-hidden`}>{children}</body>
    </html>
  )
}
