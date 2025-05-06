import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
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
              <Link href="/about" className="flex items-center gap-2 text-neutral-800 font-bold">
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
          <h1 className="text-3xl font-bold mb-6">About Me</h1>

          <div className="prose max-w-none">
            <p className="text-lg">
              Hello! I'm a passionate developer with a love for creating elegant solutions to complex problems. With
              several years of experience in web development, I specialize in building responsive, user-friendly
              applications that deliver exceptional user experiences.
            </p>

            <p className="text-lg mt-4">
              My journey in tech began when I was in college, where I discovered my passion for coding. Since then, I've
              worked on a variety of projects, from small business websites to complex enterprise applications, always
              striving to learn new technologies and improve my skills.
            </p>

            <p className="text-lg mt-4">
              When I'm not coding, you can find me exploring new hiking trails, experimenting with new recipes in the
              kitchen, or diving into a good book. I believe in maintaining a healthy work-life balance and finding
              inspiration in diverse experiences.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">My Philosophy</h2>

            <p className="text-lg">
              I believe that the best digital products are those that solve real problems for users in the most
              intuitive way possible. My approach to development is centered around understanding user needs and
              creating solutions that are not only technically sound but also delightful to use.
            </p>

            <p className="text-lg mt-4">
              I'm committed to writing clean, maintainable code and staying up-to-date with the latest industry trends
              and best practices. I enjoy collaborating with teams that share my passion for quality and innovation.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Let's Connect</h2>

            <p className="text-lg">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              Feel free to reach out through the contact section if you'd like to connect!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
