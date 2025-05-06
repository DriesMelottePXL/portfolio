"use client"

import { useState } from "react"
import Link from "next/link"
import { List } from "lucide-react"
import { Button } from "@/components/ui/button"

interface MobileSidebarProps {
  activePage?: string
}

export function MobileSidebar({ activePage }: MobileSidebarProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)}>
        <List className="h-5 w-5" />
      </Button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-50" onClick={() => setIsOpen(false)}>
          <div
            className="absolute top-0 left-0 w-64 h-full bg-[#e8e3dd] p-4 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <h1 className="text-2xl font-bold text-neutral-800 mt-6">notes</h1>

            <nav className="mt-6">
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/projects"
                    className={`flex items-center gap-2 text-neutral-800 ${activePage === "projects" ? "font-bold" : "hover:text-neutral-600"} text-sm`}
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="w-3 h-3 bg-[#b8c28d] inline-block"></span>
                    <span>projects (10)</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/experience"
                    className={`flex items-center gap-2 text-neutral-800 ${activePage === "experience" ? "font-bold" : "hover:text-neutral-600"} text-sm`}
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="w-3 h-3 bg-[#b8c28d] inline-block"></span>
                    <span>experience (4)</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className={`flex items-center gap-2 text-neutral-800 ${activePage === "about" ? "font-bold" : "hover:text-neutral-600"} text-sm`}
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="w-3 h-3 bg-[#b8c28d] inline-block"></span>
                    <span>about me (1)</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/skills"
                    className={`flex items-center gap-2 text-neutral-800 ${activePage === "skills" ? "font-bold" : "hover:text-neutral-600"} text-sm`}
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="w-3 h-3 bg-[#b8c28d] inline-block"></span>
                    <span>skills (1)</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className={`flex items-center gap-2 text-neutral-800 ${activePage === "contact" ? "font-bold" : "hover:text-neutral-600"} text-sm`}
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="w-3 h-3 bg-[#b8c28d] inline-block"></span>
                    <span>contact (1)</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/links"
                    className={`flex items-center gap-2 text-neutral-800 ${activePage === "links" ? "font-bold" : "hover:text-neutral-600"} text-sm`}
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="w-3 h-3 bg-[#b8c28d] inline-block"></span>
                    <span>links + things (2)</span>
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="mt-8">
              <h2 className="text-xl font-bold text-center text-neutral-800">your name</h2>
              <div className="text-xs text-neutral-600 mt-2 flex flex-wrap justify-center gap-x-1">
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
