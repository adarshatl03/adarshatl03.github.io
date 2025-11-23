// components/ProjectCard.tsx
import { ExternalLink } from "lucide-react";
import type { FC } from "react";

export interface ProjectProps {
  title: string;
  description: string;
  tech: string[];
  link: string;
}

const ProjectCard: FC<ProjectProps & { className?: string }> = ({
  title,
  description,
  tech,
  link,
  className = "",
}) => {
  return (
    <article className={`p-4 rounded-lg bg-glass ${className}`}>
      <header className="flex justify-between items-start">
        <h3 className="text-lg font-semibold text-fg">{title}</h3>
        <a href={link} target="_blank" rel="noreferrer" className="text-muted">
          <ExternalLink className="h-4 w-4" />
        </a>
      </header>

      <p className="mt-3 text-sm text-muted">{description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {tech.map((t) => (
          <span
            key={t}
            className="inline-flex items-center px-2 py-1 rounded bg-card text-sm text-muted"
          >
            {t}
          </span>
        ))}
      </div>
    </article>
  );
};

export default ProjectCard;
