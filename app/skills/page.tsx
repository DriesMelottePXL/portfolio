import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

export default function SkillsPage() {
  const skillCategories = [
    {
      category: "Frontend Development",
      skills: [
        { name: "HTML/CSS", level: 95 },
        { name: "JavaScript", level: 90 },
        { name: "React", level: 85 },
        { name: "Next.js", level: 80 },
        { name: "TypeScript", level: 75 },
        { name: "Tailwind CSS", level: 85 },
      ],
    },
    {
      category: "Backend Development",
      skills: [
        { name: "Node.js", level: 80 },
        { name: "Express", level: 75 },
        { name: "MongoDB", level: 70 },
        { name: "PostgreSQL", level: 65 },
        { name: "GraphQL", level: 60 },
      ],
    },
    {
      category: "Tools & Others",
      skills: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 65 },
        { name: "AWS", level: 60 },
        { name: "Figma", level: 75 },
        { name: "Responsive Design", level: 95 },
        { name: "Performance Optimization", level: 80 },
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
              <Link href="/skills" className="flex items-center gap-2 text-neutral-800 font-bold">
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
          <h1 className="text-3xl font-bold mb-6">Skills</h1>

          <div className="space-y-10">
            {skillCategories.map((category, idx) => (
              <div key={idx}>
                <h2 className="text-2xl font-semibold mb-4">{category.category}</h2>
                <div className="space-y-4">
                  {category.skills.map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-neutral-500">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-semibold mb-4">Certifications</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-neutral-800 rounded-full mt-2 mr-2"></span>
                <div>
                  <p className="font-medium">Advanced Web Development</p>
                  <p className="text-neutral-500 text-sm">Udacity - 2022</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-neutral-800 rounded-full mt-2 mr-2"></span>
                <div>
                  <p className="font-medium">React Certification</p>
                  <p className="text-neutral-500 text-sm">Meta - 2021</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-neutral-800 rounded-full mt-2 mr-2"></span>
                <div>
                  <p className="font-medium">AWS Cloud Practitioner</p>
                  <p className="text-neutral-500 text-sm">Amazon Web Services - 2020</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
