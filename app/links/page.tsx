import Link from "next/link"
import { ArrowLeft, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function LinksPage() {
  const links = [
    {
      category: "Social Media",
      items: [
        { name: "GitHub", url: "https://github.com" },
        { name: "LinkedIn", url: "https://linkedin.com" },
        { name: "Twitter", url: "https://twitter.com" },
        { name: "Instagram", url: "https://instagram.com" },
      ],
    },
    {
      category: "Resources",
      items: [
        { name: "My Blog", url: "https://blog.example.com" },
        { name: "Portfolio Source Code", url: "https://github.com/yourusername/portfolio" },
        { name: "Resume (PDF)", url: "/resume.pdf" },
        { name: "Design Inspiration", url: "https://dribbble.com" },
      ],
    },
  ]

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Sidebar */}
      <div className="w-full md:w-[320px] bg-[#e8e3dd] p-6 flex flex-col">
        <h1 className="text-4xl font-bold text-neutral-800 mt-8">notes</h1>

        <nav className="mt-8 flex-1">
          <ul className="space-y-2">
            <li>
              <Link href="/projects" className="flex items-center gap-2 text-neutral-800 hover:text-neutral-600">
                <span className="w-4 h-4 bg-[#b8c28d] inline-block"></span>
                <span>projects (10)</span>
              </Link>
            </li>
            <li>
              <Link href="/experience" className="flex items-center gap-2 text-neutral-800 hover:text-neutral-600">
                <span className="w-4 h-4 bg-[#b8c28d] inline-block"></span>
                <span>experience (4)</span>
              </Link>
            </li>
            <li>
              <Link href="/about" className="flex items-center gap-2 text-neutral-800 hover:text-neutral-600">
                <span className="w-4 h-4 bg-[#b8c28d] inline-block"></span>
                <span>about me (1)</span>
              </Link>
            </li>
            <li>
              <Link href="/skills" className="flex items-center gap-2 text-neutral-800 hover:text-neutral-600">
                <span className="w-4 h-4 bg-[#b8c28d] inline-block"></span>
                <span>skills (1)</span>
              </Link>
            </li>
            <li>
              <Link href="/contact" className="flex items-center gap-2 text-neutral-800 hover:text-neutral-600">
                <span className="w-4 h-4 bg-[#b8c28d] inline-block"></span>
                <span>contact (1)</span>
              </Link>
            </li>
            <li>
              <Link href="/links" className="flex items-center gap-2 text-neutral-800 font-bold">
                <span className="w-4 h-4 bg-[#b8c28d] inline-block"></span>
                <span>links + things (2)</span>
              </Link>
            </li>
          </ul>
        </nav>

        <div className="mt-auto">
          <h2 className="text-3xl font-bold text-center text-neutral-800">your name</h2>
          <div className="text-xs text-neutral-600 mt-4 flex flex-wrap justify-center gap-x-2">
            <Link href="/terms" className="hover:underline">
              TERMS
            </Link>{" "}
            |
            <Link href="/privacy" className="hover:underline">
              PRIVACY
            </Link>{" "}
            |
            <Link href="/cookies" className="hover:underline">
              COOKIES
            </Link>{" "}
            |
            <Link href="/safe-surf" className="hover:underline">
              SAFE SURF
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 border-l border-neutral-300">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-neutral-200">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/" className="flex items-center gap-1">
              <ArrowLeft className="h-4 w-4" /> Back
            </Link>
          </Button>
        </div>

        {/* Content */}
        <div className="p-6 md:p-10">
          <h1 className="text-3xl font-bold mb-6">Links + Things</h1>

          <div className="space-y-10">
            {links.map((section, idx) => (
              <div key={idx}>
                <h2 className="text-2xl font-semibold mb-4">{section.category}</h2>
                <ul className="grid gap-3">
                  {section.items.map((link, index) => (
                    <li key={index}>
                      <Link
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-3 border border-neutral-200 rounded-md hover:bg-neutral-50 transition-colors"
                      >
                        <span>{link.name}</span>
                        <ExternalLink className="h-4 w-4 text-neutral-500" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-semibold mb-4">Recommended Books</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-neutral-800 rounded-full mt-2 mr-2"></span>
                <div>
                  <p className="font-medium">Eloquent JavaScript</p>
                  <p className="text-neutral-500 text-sm">Marijn Haverbeke</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-neutral-800 rounded-full mt-2 mr-2"></span>
                <div>
                  <p className="font-medium">Clean Code</p>
                  <p className="text-neutral-500 text-sm">Robert C. Martin</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-neutral-800 rounded-full mt-2 mr-2"></span>
                <div>
                  <p className="font-medium">Design Patterns</p>
                  <p className="text-neutral-500 text-sm">Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
