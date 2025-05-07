import type React from "react"
import "@/styles/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Portfolio | Dries Melotte",
  description: "Personal portfolio website with a notes app aesthetic",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="min-h-screen flex items-center justify-center p-4 bg-neutral-900 dark:bg-black">
            <main className="w-full max-w-4xl h-[90vh] bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-200 overflow-hidden border border-neutral-200 dark:border-neutral-700 rounded-xl shadow-md">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
