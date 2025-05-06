"use client"

import Link from "next/link"
import { Mail, List } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { SharedLayout } from "@/components/shared-layout"

export default function Home() {
  return (
    <SharedLayout>
      {/* Content */}
      <div className="p-4 md:p-6">
        <h1 className="text-2xl font-bold mb-4 dark:text-white">Welcome to my portfolio</h1>
        <p className="text-sm mb-3 dark:text-neutral-300">
          This is a minimalist portfolio website designed to showcase my work and experience. Navigate through the
          different sections using the sidebar menu.
        </p>
        <p className="text-sm mb-4 dark:text-neutral-300">
          Feel free to explore my projects, learn about my experience, or get in touch with me.
        </p>

        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-3 dark:text-white">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="border border-neutral-200 dark:border-neutral-700 p-3 rounded-md hover:border-neutral-400 dark:hover:border-neutral-500 transition-colors dark:bg-neutral-800"
              >
                <h3 className="font-medium text-sm dark:text-white">Project {item}</h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-xs mt-1">
                  A brief description of this amazing project that showcases my skills and expertise.
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 text-center">
          <Link
            href="/contact"
            className="text-sm text-neutral-800 dark:text-neutral-300 flex items-center justify-center gap-1 hover:text-neutral-600 dark:hover:text-neutral-100"
          >
            sign up for updates <Mail className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </SharedLayout>
  )
}

// Mobile sidebar component
function MobileSidebar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)}>
        <List className="h-5 w-5" />
      </Button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-50" onClick={() => setIsOpen(false)}>
          <div
            className="absolute top-0 left-0 w-64 h-full bg-[#e8e3dd] dark:bg-neutral-800 p-4 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <h1 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mt-6">notes</h1>

            <nav className="mt-6">
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/projects"
                    className="flex items-center gap-2 text-neutral-800 dark:text-neutral-300 hover:text-neutral-600 dark:hover:text-neutral-100 text-sm"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="w-3 h-3 bg-[#b8c28d] dark:bg-emerald-600 inline-block"></span>
                    <span>projects (10)</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/experience"
                    className="flex items-center gap-2 text-neutral-800 dark:text-neutral-300 hover:text-neutral-600 dark:hover:text-neutral-100 text-sm"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="w-3 h-3 bg-[#b8c28d] dark:bg-emerald-600 inline-block"></span>
                    <span>experience (4)</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="flex items-center gap-2 text-neutral-800 dark:text-neutral-300 hover:text-neutral-600 dark:hover:text-neutral-100 text-sm"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="w-3 h-3 bg-[#b8c28d] dark:bg-emerald-600 inline-block"></span>
                    <span>about me (1)</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/skills"
                    className="flex items-center gap-2 text-neutral-800 dark:text-neutral-300 hover:text-neutral-600 dark:hover:text-neutral-100 text-sm"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="w-3 h-3 bg-[#b8c28d] dark:bg-emerald-600 inline-block"></span>
                    <span>skills (1)</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="flex items-center gap-2 text-neutral-800 dark:text-neutral-300 hover:text-neutral-600 dark:hover:text-neutral-100 text-sm"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="w-3 h-3 bg-[#b8c28d] dark:bg-emerald-600 inline-block"></span>
                    <span>contact (1)</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/links"
                    className="flex items-center gap-2 text-neutral-800 dark:text-neutral-300 hover:text-neutral-600 dark:hover:text-neutral-100 text-sm"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="w-3 h-3 bg-[#b8c28d] dark:bg-emerald-600 inline-block"></span>
                    <span>links + things (2)</span>
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="mt-8">
              <h2 className="text-xl font-bold text-center text-neutral-800 dark:text-neutral-200">your name</h2>
              <div className="text-xs text-neutral-600 dark:text-neutral-400 mt-2 flex flex-wrap justify-center gap-x-1">
                <Link href="/terms" className="hover:underline text-[10px]">
                  TERMS
                </Link>{" "}
                |
                <Link href="/privacy" className="hover:underline text-[10px]">
                  PRIVACY
                </Link>{" "}
                |
                <Link href="/cookies" className="hover:underline text-[10px]">
                  COOKIES
                </Link>{" "}
                |
                <Link href="/safe-surf" className="hover:underline text-[10px]">
                  SAFE SURF
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
