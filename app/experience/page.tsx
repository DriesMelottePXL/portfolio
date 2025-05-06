import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ExperiencePage() {
  const experiences = [
    {
      id: 1,
      role: "Senior Frontend Developer",
      company: "Tech Innovations Inc.",
      period: "2021 - Present",
      description:
        "Leading the frontend development team in building responsive and accessible web applications. Implementing modern frontend architectures using React and Next.js. Mentoring junior developers and conducting code reviews.",
      achievements: [
        "Reduced page load time by 40% through code optimization and lazy loading strategies",
        "Implemented a component library that increased development speed by 30%",
        "Led the migration from a legacy codebase to a modern React architecture",
      ],
    },
    {
      id: 2,
      role: "Frontend Developer",
      company: "Digital Solutions Ltd.",
      period: "2019 - 2021",
      description:
        "Developed and maintained multiple client-facing web applications. Collaborated with designers and backend developers to implement new features and improve user experience. Worked with Vue.js and vanilla JavaScript to create interactive UI components.",
      achievements: [
        "Built a custom data visualization dashboard that increased client retention by 25%",
        "Implemented responsive designs that improved mobile user engagement by 45%",
        "Optimized API calls resulting in 30% faster data retrieval",
      ],
    },
    {
      id: 3,
      role: "Web Developer",
      company: "Creative Agency",
      period: "2017 - 2019",
      description:
        "Developed websites and web applications for various clients across different industries. Worked on both frontend and backend development using JavaScript, PHP, and MySQL.",
      achievements: [
        "Delivered over 15 client projects on time and within budget",
        "Created a custom CMS that reduced content update time by 50%",
        "Implemented SEO best practices that improved client search rankings by an average of 30%",
      ],
    },
    {
      id: 4,
      role: "Junior Developer",
      company: "StartUp Innovations",
      period: "2016 - 2017",
      description:
        "Assisted in the development of the company's main product. Worked on bug fixes and small feature implementations under the guidance of senior developers.",
      achievements: [
        "Contributed to the launch of the company's MVP within 6 months",
        "Developed an automated testing suite that caught 85% of regression bugs",
        "Improved documentation that reduced onboarding time for new developers",
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
              <Link href="/experience" className="flex items-center gap-2 text-neutral-800 font-bold">
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
          <h1 className="text-3xl font-bold mb-6">Experience</h1>

          <div className="space-y-10">
            {experiences.map((exp) => (
              <div key={exp.id} className="border-b border-neutral-200 pb-8 last:border-0">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                  <div>
                    <h2 className="text-xl font-semibold">{exp.role}</h2>
                    <h3 className="text-lg text-neutral-700">{exp.company}</h3>
                  </div>
                  <span className="text-neutral-500 text-sm md:text-base">{exp.period}</span>
                </div>

                <p className="mt-4 text-neutral-700">{exp.description}</p>

                <div className="mt-4">
                  <h4 className="font-medium mb-2">Key Achievements:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {exp.achievements.map((achievement, index) => (
                      <li key={index} className="text-neutral-700">
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
