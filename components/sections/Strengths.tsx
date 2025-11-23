// components/sections/Strengths.tsx
import type { FC } from "react";

const strengths = [
  "Design systems & component libraries (TypeScript-first)",
  "Large-scale Next.js architectures (SSR/ISR/static patterns)",
  "Performance budgets & real-user metrics (Lighthouse/Perf Budgets)",
  "Complex UI: schedulers, data grids, forms with validation",
  "Payment flows, subscription lifecycle, Stripe webhooks",
  "Ship maintainable code, tests, and clear docs",
];

const Strengths: FC = () => {
  return (
    <div className="bg-card rounded-2xl p-8 shadow-sm text-fg">
      <h2 className="text-2xl font-semibold mb-4">Core strengths</h2>
      <ul className="grid gap-3 md:grid-cols-2 text-muted">
        {strengths.map((s) => (
          <li key={s} className="p-3 bg-glass rounded-md">
            {s}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Strengths;
