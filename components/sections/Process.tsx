// components/sections/Process.tsx
import type { FC } from "react";

const steps = [
  {
    title: "Understand the problem",
    desc: "Requirements, constraints, and metrics.",
  },
  {
    title: "Design API & UI contract",
    desc: "Data shapes, error states, and loading UX.",
  },
  { title: "Build incrementally", desc: "Ship small, test early, iterate." },
  { title: "Automate & monitor", desc: "CI/CD, tests, observability." },
];

const Process: FC = () => {
  return (
    <div className="bg-card rounded-2xl p-8 shadow-sm text-fg">
      <h2 className="text-2xl font-semibold mb-4">How I build</h2>
      <div className="grid sm:grid-cols-2 gap-4 text-muted">
        {steps.map((s) => (
          <div key={s.title} className="p-4 bg-glass rounded-md">
            <h4 className="font-medium">{s.title}</h4>
            <p className="text-sm mt-1">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Process;
