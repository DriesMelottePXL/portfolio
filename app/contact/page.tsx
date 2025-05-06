import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
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
              <Link href="/contact" className="flex items-center gap-2 text-neutral-800 font-bold">
                <span className="w-4 h-4 bg-[#b8c28d] inline-block"></span>
                <span>contact (1)</span>
              </Link>
            </li>
            <li>
              <Link href="/links" className="flex items-center gap-2 text-neutral-800 hover:text-neutral-600">
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
          <h1 className="text-3xl font-bold mb-6">Contact Me</h1>

          <div className="max-w-2xl">
            <p className="text-lg mb-6">
              I'm always interested in hearing about new projects and opportunities. Feel free to reach out using the
              form below or connect with me on social media.
            </p>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="your.email@example.com" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Input id="subject" placeholder="What is this regarding?" />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea id="message" placeholder="Your message" rows={6} />
              </div>

              <Button type="submit" className="w-full md:w-auto">
                Send Message
              </Button>
            </form>

            <div className="mt-12">
              <h2 className="text-2xl font-semibold mb-4">Connect With Me</h2>
              <div className="flex flex-wrap gap-4">
                <Button variant="outline" asChild>
                  <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    Twitter
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="mailto:your.email@example.com">Email</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
