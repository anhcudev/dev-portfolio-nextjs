import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import NavBar from "./components/Navbar"
import Footer from "./components/Footer"
import { Providers } from "./providers/Providers"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Portfolio Tuan Anh",
  description: "Frontend Developer Portfolio",
  openGraph: {
    title: "Portfolio Tuan Anh",
    description: "Frontend Developer Portfolio",
    url: "https://anhcu-portfolio.vercel.app",
    siteName: "Tuan Anh Portfolio",
    locale: "vi_VN",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased
        bg-white transition-colors 
        dark:bg-gray-900 dark:text-white`}
      >
        <Providers>
          <NavBar />
          <main className="min-h-screen pt-24">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
