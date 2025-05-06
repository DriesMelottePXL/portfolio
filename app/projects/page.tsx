"use client"

import { SharedLayout } from "@/components/shared-layout"

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution with payment processing and inventory management.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      year: 2023,
    },
    {
      id: 2,
      title: "Social Media Dashboard",
      description: "Analytics dashboard for tracking social media performance across multiple platforms.",
      technologies: ["Vue.js", "Express", "PostgreSQL", "Chart.js"],
      year: 2022,
    },
    {
      id: 3,
      title: "Mobile Fitness App",
      description: "Cross-platform mobile application for tracking workouts and nutrition.",
      technologies: ["React Native", "Firebase", "Redux"],
      year: 2022,
    },
    {
      id: 4,
      title: "Content Management System",
      description: "Custom CMS built for a media company with complex publishing workflows.",
      technologies: ["Next.js", "GraphQL", "Prisma", "AWS"],
      year: 2021,
    },
    {
      id: 5,
      title: "Real Estate Listing Platform",
      description: "Property listing and search platform with map integration and filtering.",
      technologies: ["Angular", "Django", "PostgreSQL", "Google Maps API"],
      year: 2021,
    },
    {
      id: 6,
      title: "Task Management Tool",
      description: "Collaborative task management application with real-time updates.",
      technologies: ["React", "Socket.io", "Express", "MongoDB"],
      year: 2020,
    },
    {
      id: 7,
      title: "Weather Forecast App",
      description: "Weather application with location-based forecasts and alerts.",
      technologies: ["React", "OpenWeather API", "Geolocation API"],
      year: 2020,
    },
    {
      id: 8,
      title: "Portfolio Website",
      description: "Personal portfolio website with a unique notes app aesthetic.",
      technologies: ["Next.js", "Tailwind CSS", "Vercel"],
      year: 2023,
    },
    {
      id: 9,
      title: "Recipe Sharing Platform",
      description: "Community-driven recipe sharing and discovery platform.",
      technologies: ["Vue.js", "Firebase", "Algolia"],
      year: 2019,
    },
    {
      id: 10,
      title: "Budget Tracker",
      description: "Personal finance application for tracking expenses and income.",
      technologies: ["React", "Chart.js", "IndexedDB", "PWA"],
      year: 2019,
    },
  ]

  return (
    <SharedLayout activePage="projects">
      <div className="p-4 md:p-6">
        <h1 className="text-2xl font-bold mb-4 dark:text-white">Projects</h1>

        <div className="grid gap-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className="border border-neutral-200 dark:border-neutral-700 p-4 rounded-md hover:border-neutral-400 dark:hover:border-neutral-500 transition-colors dark:bg-neutral-800"
            >
              <div className="flex justify-between items-start">
                <h2 className="text-base font-semibold dark:text-white">{project.title}</h2>
                <span className="text-xs text-neutral-500 dark:text-neutral-400">{project.year}</span>
              </div>
              <p className="mt-1 text-neutral-700 dark:text-neutral-300 text-sm">{project.description}</p>
              <div className="mt-2 flex flex-wrap gap-1">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-1.5 py-0.5 bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 text-[10px] rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SharedLayout>
  )
}
