// components/sections/FeaturedProjects.tsx
import ProjectCard, { ProjectProps } from "@/components/ProjectCard";
import type { FC } from "react";

const projects: ProjectProps[] = [
  {
    title: "Bahri Ship Management",
    description:
      "Enterprise ship ops dashboard — scheduling, crew, maintenance, and voyage optimization.",
    tech: ["Next.js", "TypeScript", "Prisma", "Tailwind"],
    link: "https://github.com/your/bahri",
  },
  {
    title: "Trip Planner",
    description:
      "Provider onboarding, bookings, and admin console with provider dashboards.",
    tech: ["Next.js", "Stripe", "Postgres", "Prisma"],
    link: "https://github.com/your/trip-planner",
  },
  {
    title: "Scheduler Component",
    description:
      "Custom draggable+resizable grid-based scheduler with conflict handling and snapping.",
    tech: ["React", "TypeScript", "canvas/svg"],
    link: "https://github.com/your/scheduler",
  },
];

const FeaturedProjects: FC = () => {
  return (
    <div className="bg-card rounded-2xl p-8 shadow-sm text-fg">
      <h2 className="text-2xl font-semibold mb-6">Featured projects</h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProjects;
