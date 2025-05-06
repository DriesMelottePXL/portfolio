"use client"

import type React from "react"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { List } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

interface SharedLayoutProps {
  children: React.ReactNode
  activePage?: string
}

export function SharedLayout({ children, activePage }: SharedLayoutProps) {
  return (
    <div className="h-full flex flex-col md:flex-row dark:bg-neutral-900">
      {/* Mobile Header with Window Controls */}
      <div className="md:hidden flex flex-col border-b dark:border-neutral-700">
        {/* Window Controls row */}
        <div className="flex items-center p-3">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="ml-auto">
            <ThemeToggle />
          </div>
        </div>

        {/* Navigation row */}
        <div className="flex items-center px-3 pb-3">
          <MobileSidebar activePage={activePage} />
          <h1 className="text-xl font-bold text-neutral-800 dark:text-neutral-200 ml-2">notes</h1>
        </div>
      </div>

      {/* Sidebar for desktop with window controls */}
      <div className="hidden md:flex w-[260px] bg-[#e8e3dd] dark:bg-neutral-800 p-4 flex-col h-full overflow-y-auto relative">
        {/* Window Controls - for desktop */}
        <div className="absolute top-3 left-3 flex gap-1.5 z-50">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>

        <h1 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mt-6">notes</h1>

        <nav className="mt-6 flex-1">
          <ul className="space-y-2">
            <li>
              <Link
                href="/projects"
                className={`flex items-center gap-2 text-neutral-800 dark:text-neutral-300 ${activePage === "projects" ? "font-bold" : "hover:text-neutral-600 dark:hover:text-neutral-100"} text-sm`}
              >
                <span className="w-3 h-3 bg-[#b8c28d] dark:bg-emerald-600 inline-block"></span>
                <span>projects (10)</span>
              </Link>
            </li>
            <li>
              <Link
                href="/experience"
                className={`flex items-center gap-2 text-neutral-800 dark:text-neutral-300 ${activePage === "experience" ? "font-bold" : "hover:text-neutral-600 dark:hover:text-neutral-100"} text-sm`}
              >
                <span className="w-3 h-3 bg-[#b8c28d] dark:bg-emerald-600 inline-block"></span>
                <span>experience (4)</span>
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`flex items-center gap-2 text-neutral-800 dark:text-neutral-300 ${activePage === "about" ? "font-bold" : "hover:text-neutral-600 dark:hover:text-neutral-100"} text-sm`}
              >
                <span className="w-3 h-3 bg-[#b8c28d] dark:bg-emerald-600 inline-block"></span>
                <span>about me (1)</span>
              </Link>
            </li>
            <li>
              <Link
                href="/skills"
                className={`flex items-center gap-2 text-neutral-800 dark:text-neutral-300 ${activePage === "skills" ? "font-bold" : "hover:text-neutral-600 dark:hover:text-neutral-100"} text-sm`}
              >
                <span className="w-3 h-3 bg-[#b8c28d] dark:bg-emerald-600 inline-block"></span>
                <span>skills (1)</span>
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={`flex items-center gap-2 text-neutral-800 dark:text-neutral-300 ${activePage === "contact" ? "font-bold" : "hover:text-neutral-600 dark:hover:text-neutral-100"} text-sm`}
              >
                <span className="w-3 h-3 bg-[#b8c28d] dark:bg-emerald-600 inline-block"></span>
                <span>contact (1)</span>
              </Link>
            </li>
            <li>
              <Link
                href="/links"
                className={`flex items-center gap-2 text-neutral-800 dark:text-neutral-300 ${activePage === "links" ? "font-bold" : "hover:text-neutral-600 dark:hover:text-neutral-100"} text-sm`}
              >
                <span className="w-3 h-3 bg-[#b8c28d] dark:bg-emerald-600 inline-block"></span>
                <span>links + things (2)</span>
              </Link>
            </li>
          </ul>
        </nav>

        <div className="mt-auto">
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

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-full overflow-hidden dark:bg-neutral-900">
        {/* Header with theme toggle - desktop only */}
        <div className="hidden md:flex justify-end items-center p-3 border-b border-neutral-200 dark:border-neutral-700">
          <ThemeToggle />
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto">{children}</div>
      </div>
    </div>
  )
}

// Mobile sidebar component
function MobileSidebar({ activePage }: { activePage?: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)} className="p-1 h-8 w-8">
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
                    className={`flex items-center gap-2 text-neutral-800 dark:text-neutral-300 ${activePage === "projects" ? "font-bold" : "hover:text-neutral-600 dark:hover:text-neutral-100"} text-sm`}
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="w-3 h-3 bg-[#b8c28d] dark:bg-emerald-600 inline-block"></span>
                    <span>projects (10)</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/experience"
                    className={`flex items-center gap-2 text-neutral-800 dark:text-neutral-300 ${activePage === "experience" ? "font-bold" : "hover:text-neutral-600 dark:hover:text-neutral-100"} text-sm`}
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="w-3 h-3 bg-[#b8c28d] dark:bg-emerald-600 inline-block"></span>
                    <span>experience (4)</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className={`flex items-center gap-2 text-neutral-800 dark:text-neutral-300 ${activePage === "about" ? "font-bold" : "hover:text-neutral-600 dark:hover:text-neutral-100"} text-sm`}
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="w-3 h-3 bg-[#b8c28d] dark:bg-emerald-600 inline-block"></span>
                    <span>about me (1)</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/skills"
                    className={`flex items-center gap-2 text-neutral-800 dark:text-neutral-300 ${activePage === "skills" ? "font-bold" : "hover:text-neutral-600 dark:hover:text-neutral-100"} text-sm`}
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="w-3 h-3 bg-[#b8c28d] dark:bg-emerald-600 inline-block"></span>
                    <span>skills (1)</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className={`flex items-center gap-2 text-neutral-800 dark:text-neutral-300 ${activePage === "contact" ? "font-bold" : "hover:text-neutral-600 dark:hover:text-neutral-100"} text-sm`}
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="w-3 h-3 bg-[#b8c28d] dark:bg-emerald-600 inline-block"></span>
                    <span>contact (1)</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/links"
                    className={`flex items-center gap-2 text-neutral-800 dark:text-neutral-300 ${activePage === "links" ? "font-bold" : "hover:text-neutral-600 dark:hover:text-neutral-100"} text-sm`}
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
