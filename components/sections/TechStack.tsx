// components/sections/TechStack.tsx
import type { FC } from "react";

const stacks = [
  {
    title: "Frontend",
    items: [
      "Next.js (App Router)",
      "React + Hooks",
      "TypeScript",
      "Tailwind 4.1",
    ],
  },
  {
    title: "UI & Design",
    items: [
      "shadcn-style primitives",
      "Headless UI patterns",
      "Accessibility (a11y)",
    ],
  },
  {
    title: "Backend & Infra",
    items: ["Prisma", "PostgreSQL", "Node", "Serverless APIs"],
  },
  {
    title: "Payments & Auth",
    items: [
      "Stripe (Subscriptions)",
      "OAuth / JWT",
      "NextAuth / Custom tokens",
    ],
  },
  {
    title: "Testing & Quality",
    items: [
      "Vitest / Testing Library",
      "Cypress (E2E)",
      "Linting & Type-safety",
    ],
  },
];

const TechStack: FC = () => {
  return (
    <div className="bg-card rounded-2xl p-8 shadow-sm text-fg">
      <h2 className="text-2xl font-semibold mb-4">
        Tech stack — what I use every day
      </h2>
      <div className="grid gap-4 md:grid-cols-3">
        {stacks.map((s) => (
          <div key={s.title} className="p-4 bg-glass rounded-lg">
            <h3 className="font-medium mb-2">{s.title}</h3>
            <ul className="text-sm text-muted space-y-1">
              {s.items.map((it) => (
                <li key={it}>• {it}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
