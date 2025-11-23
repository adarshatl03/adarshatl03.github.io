"use client";

import ProjectCard from "@/components/ProjectCard";

interface Project {
  title: string;
  description: string;
  tech: string[];
  link: string;
}

const projects: Project[] = [
  {
    title: "Ship Management System",
    description: "Enterprise-level ship operations dashboard for Bahri.",
    tech: ["Next.js", "React", "Tailwind"],
    link: "https://github.com/example",
  },
  {
    title: "Trip Planner",
    description: "Admin panel, provider dashboard, bookings, Stripe.",
    tech: ["Next.js", "Prisma", "Stripe"],
    link: "https://github.com/example",
  },
];

export default function Projects() {
  return (
    <section className="space-y-10">
      <h1 className="text-3xl font-bold fade-up">Projects</h1>

      <div className="grid sm:grid-cols-2 gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
}
